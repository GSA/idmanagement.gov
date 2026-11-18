"""Check one crawler run against the published files, and write the PR summary.

Usage: check_run.py RUN_DIR BASELINE_DIR [--exclusions FILE] [--out DIR] [--note TEXT]

RUN_DIR and BASELINE_DIR each hold the three crawler files. BASELINE_DIR is what the
website publishes now. Writes summary.json and pr-body.md to --out (default RUN_DIR).

Exit codes: 0 publish, 10 rerun, 20 needs review, 1 fail.
"""
import argparse
import os
import hashlib
import json
import sys
from datetime import date, datetime, timezone
from pathlib import Path
from xml.etree import ElementTree

from asn1crypto import cms, pem, x509

P7B = 'CACertificatesValidatingToFederalCommonPolicyG2.p7b'
REPORT = 'crawler-lastrun.json'
GEXF = 'fpki-certs.gexf'
ROOT_SHA256 = '5f9aecc24616b2191372600dd80f6dd320c8ca5a0ceb7f09c985ebf0696934fc'
CORE = ('common_name:Federal Bridge CA', 'common_name:Federal Common Policy CA')
HELPER_FAILURES = ('Pathbuilder timed out', 'Calling pathbuilder failed')
VANISHED_LIMIT = 2
PUBLISH, RERUN, REVIEW, FAIL = 0, 10, 20, 1


class RunError(Exception):
    pass


def load_bundle(path):
    data = path.read_bytes()
    if pem.detect(data):
        _, _, data = pem.unarmor(data)
    certs = {}
    for choice in cms.ContentInfo.load(data)['content']['certificates']:
        if choice.name == 'certificate':
            der = choice.chosen.dump()
            certs[hashlib.sha256(der).hexdigest()] = (der, x509.Certificate.load(der))
    return certs


def load(folder):
    folder = Path(folder)
    for name in (P7B, REPORT, GEXF):
        if not (folder / name).is_file() or (folder / name).stat().st_size == 0:
            raise RunError(f'{name} is missing or empty')
    try:
        bundle = load_bundle(folder / P7B)
    except Exception as error:
        raise RunError(f'{P7B} could not be parsed: {error}')
    try:
        report = json.loads((folder / REPORT).read_text())
        valid, bad = report['valid-certs'], report['bad-certs']
    except Exception as error:
        raise RunError(f'{REPORT} could not be parsed: {error}')
    try:
        graph = ElementTree.parse(folder / GEXF).getroot()
    except Exception as error:
        raise RunError(f'{GEXF} could not be parsed: {error}')
    return bundle, report, valid, bad, graph


def key(record):
    return record['issuer'], record['serial-number']


def short(name):
    return name.split(',')[0].split(':', 1)[-1]


def details(der, cert):
    public_key = cert.public_key
    return {
        'subject': cert.subject.human_friendly,
        'issuer': cert.issuer.human_friendly,
        'valid_from': str(cert.not_valid_before.date()),
        'valid_to': str(cert.not_valid_after.date()),
        'serial': format(cert.serial_number, 'x'),
        'sha1': hashlib.sha1(der).hexdigest(),
        'key': f'{public_key.bit_size}-bit {public_key.algorithm.upper()}',
        'signature': f'{cert.hash_algo.upper()} with {cert.signature_algo.upper()}',
    }


def check(run_dir, baseline_dir, exclusions_file=None, today=None):
    today = today or datetime.now(timezone.utc).date()
    problems, reruns, reviews, warnings = [], [], [], []
    bundle, report, valid, bad, graph = load(run_dir)
    old_bundle, old_report, old_valid, _, _ = load(baseline_dir)

    if ROOT_SHA256 not in bundle:
        problems.append('The Common Policy root is not in the bundle')
    namespace = {'g': graph.tag.split('}')[0].strip('{')} if graph.tag.startswith('{') else {}
    prefix = 'g:' if namespace else ''
    nodes = [n.attrib.get('id') for n in graph.iter(('{%s}' % namespace['g'] if namespace else '') + 'node')]
    edges = [(e.attrib.get('source'), e.attrib.get('target'))
             for e in graph.iter(('{%s}' % namespace['g'] if namespace else '') + 'edge')]
    if len(nodes) != len(set(nodes)) or any(a not in nodes or b not in nodes for a, b in edges):
        problems.append('The graph has duplicate nodes or edges to unknown nodes')
    if report.get('anchor') not in nodes:
        problems.append('The graph does not contain the anchor')

    helper_failures = [r for r in bad if any(text in json.dumps(r.get('pathbuilder-result', {}))
                                             for text in HELPER_FAILURES)]
    published_keys = {key(r) for r in old_valid}
    affected = [r for r in helper_failures if key(r) in published_keys]
    if affected:
        reruns.append(f'{len(affected)} published certificates failed or timed out in the Java helper')
    elif helper_failures:
        # Timeouts on certificates that were not published leave the bundle unchanged.
        warnings.append(f'{len(helper_failures)} validations of unpublished certificates failed or timed out '
                        'in the Java helper: ' + '; '.join(short(r['subject']) for r in helper_failures))

    bundle_serials = {int(c.serial_number) for _, c in bundle.values()}
    valid_serials = {int(r['serial-number']) for r in valid}
    if not bundle_serials <= valid_serials:
        problems.append('The bundle contains certificates the report does not accept')
    left_out = [r for r in valid if int(r['serial-number']) not in bundle_serials]
    exclusion_count = 0
    if exclusions_file and Path(exclusions_file).is_file():
        exclusion_count = sum(1 for line in Path(exclusions_file).read_text().splitlines()
                              if line.strip() and not line.strip().startswith('#'))
    if len(left_out) > exclusion_count:
        problems.append(f'{len(left_out)} accepted certificates are missing from the bundle, '
                        f'but the exclusion list has only {exclusion_count} entries')

    expiry = {int(c.serial_number): c.not_valid_after.date() for _, c in old_bundle.values()}
    current_keys, bad_by_key = {key(r) for r in valid}, {key(r): r for r in bad}
    lost = [r for r in old_valid if key(r) not in current_keys]
    vanished = []
    for record in lost:
        if expiry.get(int(record['serial-number']), date.max) < today:
            record['_why'] = 'expired'
        elif key(record) in bad_by_key:
            result = bad_by_key[key(record)].get('pathbuilder-result') or {}
            record['_why'] = 'rejected: ' + str(result.get('details', bad_by_key[key(record)]['status']))
        else:
            record['_why'] = 'not found this run'
            vanished.append(record)
    if len(vanished) >= VANISHED_LIMIT:
        reruns.append(f'{len(vanished)} certificates disappeared without expiring or being rejected')

    old_keys = {key(r) for r in old_valid}
    returns = [r for r in valid if key(r) not in old_keys
               and r['subject'].startswith(CORE) and not r['issuer'].startswith(CORE)
               and int(r['serial-number']) in bundle_serials]
    for record in returns:
        reviews.append(f'New certificate issued to {short(record["subject"])} by '
                       f'{short(record["issuer"])}. Check whether it should be excluded')

    added = [details(*bundle[s]) for s in sorted(set(bundle) - set(old_bundle))]
    removed_reasons = {int(r['serial-number']): r['_why'] for r in lost}
    removed = []
    for sha in sorted(set(old_bundle) - set(bundle)):
        entry = details(*old_bundle[sha])
        entry['reason'] = removed_reasons.get(int(old_bundle[sha][1].serial_number), 'left out of the bundle')
        removed.append(entry)

    if problems:
        outcome = FAIL
    elif reruns:
        outcome = RERUN
    elif reviews:
        outcome = REVIEW
    else:
        outcome = PUBLISH
    return {
        'outcome': {PUBLISH: 'publish', RERUN: 'rerun', REVIEW: 'review', FAIL: 'fail'}[outcome],
        'exit_code': outcome, 'problems': problems, 'rerun_reasons': reruns, 'review_reasons': reviews,
        'warnings': warnings,
        'counts': {'bundle': len(bundle), 'previous_bundle': len(old_bundle), 'accepted': len(valid),
                   'rejected': len(bad), 'graph_nodes': len(nodes), 'graph_edges': len(edges)},
        'added': added, 'removed': removed,
        'left_out_by_exclusions': [f'{short(r["subject"])} <- {short(r["issuer"])}' for r in left_out],
    }


def body(summary, note):
    lines = []
    if summary['outcome'] != 'publish':
        lines += ['> **Needs review before merging.**', '']
        lines += [f'> - {reason}' for reason in summary['rerun_reasons'] + summary['review_reasons']]
        lines.append('')
    counts = summary['counts']
    lines += [f'Weekly FPKI crawler update. The bundle has {counts["bundle"]} certificates, '
              f'previously {counts["previous_bundle"]}.', '']
    for title, entries in (('Added', summary['added']), ('Removed', summary['removed'])):
        lines.append(f'### {title} ({len(entries)})')
        if not entries:
            lines.append('None.')
        for entry in entries:
            lines.append(f'- **{entry["subject"]}**')
            lines.append(f'  - Issuer: {entry["issuer"]}')
            lines.append(f'  - Valid: {entry["valid_from"]} to {entry["valid_to"]}')
            lines.append(f'  - Serial: `{entry["serial"]}`, SHA-1: `{entry["sha1"]}`')
            lines.append(f'  - Key: {entry["key"]}, signature: {entry["signature"]}')
            if 'reason' in entry:
                lines.append(f'  - Reason: {entry["reason"]}')
        lines.append('')
    if summary['left_out_by_exclusions']:
        lines.append('Left out of the bundle by the exclusion list: '
                     + '; '.join(summary['left_out_by_exclusions']) + '.')
        lines.append('')
    if summary.get('warnings'):
        lines += ['**Warnings:**', ''] + [f'- {w}' for w in summary['warnings']] + ['']
    lines.append(f'Report: {counts["accepted"]} accepted, {counts["rejected"]} rejected. '
                 f'Graph: {counts["graph_nodes"]} authorities, {counts["graph_edges"]} relationships.')
    if note:
        lines += ['', note]
    return '\n'.join(lines) + '\n'


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('run_dir')
    parser.add_argument('baseline_dir')
    parser.add_argument('--exclusions')
    parser.add_argument('--out')
    parser.add_argument('--note', default='')
    parser.add_argument('--today', help='YYYY-MM-DD, for testing')
    args = parser.parse_args()
    out = Path(args.out or args.run_dir)
    out.mkdir(parents=True, exist_ok=True)
    try:
        summary = check(args.run_dir, args.baseline_dir, args.exclusions,
                        date.fromisoformat(args.today) if args.today else None)
    except RunError as error:
        summary = {'outcome': 'fail', 'exit_code': FAIL, 'problems': [str(error)]}
        (out / 'summary.json').write_text(json.dumps(summary, indent=2) + '\n')
        print('fail:', error)
        if os.environ.get('GITHUB_ACTIONS'):
            print(f'::error title=Check result: fail::{error}')
        return FAIL
    (out / 'summary.json').write_text(json.dumps(summary, indent=2) + '\n')
    (out / 'pr-body.md').write_text(body(summary, args.note))
    print(summary['outcome'], '|', '; '.join(summary['problems'] + summary['rerun_reasons']
                                            + summary['review_reasons']) or 'no issues',
          '| added', len(summary['added']), 'removed', len(summary['removed']))
    for warning in summary['warnings']:
        print('warning:', warning)
    for entry in summary['removed']:
        print('removed:', entry['subject'], '|', entry['reason'])
    if os.environ.get('GITHUB_ACTIONS'):
        # Annotations are readable on public repositories without signing in.
        # A review result still opens a draft PR, so it is a warning, not an error.
        level = {'publish': 'notice', 'review': 'warning'}.get(summary['outcome'], 'error')
        reasons = summary['problems'] + summary['rerun_reasons'] + summary['review_reasons']
        print(f"::{level} title=Check result: {summary['outcome']}::"
              f"{'; '.join(reasons) or 'no issues'}. Added {len(summary['added'])}, removed {len(summary['removed'])}.")
        for warning in summary['warnings']:
            print(f'::warning title=Check warning::{warning[:900]}')
        for entry in summary['removed'][:5]:
            print(f"::warning title=Removed certificate::{entry['subject'][:300]} | {entry['reason']}")
    return summary['exit_code']


if __name__ == '__main__':
    sys.exit(main())
