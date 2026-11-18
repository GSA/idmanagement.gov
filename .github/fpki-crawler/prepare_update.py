"""Copy the three crawler files into the website and update the page date.

Usage: prepare_update.py RUN_DIR SITE_DIR --date YYYY-MM-DD

Changes exactly four paths, matching the manual process:
  _implement/tools/ (three files) and the **Last Update** line in _implement/fpki_notifications.md
"""
import argparse
import re
import shutil
import sys
from datetime import date
from pathlib import Path

NAMES = ['CACertificatesValidatingToFederalCommonPolicyG2.p7b', 'crawler-lastrun.json', 'fpki-certs.gexf']
PAGE = Path('_implement/fpki_notifications.md')
MARKER = re.compile(r'^\*\*Last Update\*\*: .*$', re.MULTILINE)


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('run_dir')
    parser.add_argument('site_dir')
    parser.add_argument('--date', required=True)
    args = parser.parse_args()
    run, site = Path(args.run_dir), Path(args.site_dir)
    day = date.fromisoformat(args.date)

    page = site / PAGE
    text = page.read_text()
    if len(MARKER.findall(text)) != 1:
        print('error: expected exactly one **Last Update** line', file=sys.stderr)
        return 1
    for name in NAMES:
        shutil.copyfile(run / name, site / '_implement' / 'tools' / name)
    page.write_text(MARKER.sub(f'**Last Update**: {day.strftime("%B %d, %Y")}', text))
    print('updated', ', '.join(NAMES), 'and the date in', PAGE)
    return 0


if __name__ == '__main__':
    sys.exit(main())
