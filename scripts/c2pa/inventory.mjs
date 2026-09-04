#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { mkdir, readFile, readdir, realpath, stat, writeFile } from 'node:fs/promises';
import { basename, dirname, extname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(scriptDirectory, '..', '..');
const configPath = join(scriptDirectory, 'config.json');
const dryRun = process.argv.includes('--dry-run');
const config = JSON.parse(await readFile(configPath, 'utf8'));

const extensionSets = {
  eligible: new Set(config.eligibleExtensions.map(normalizeExtension)),
  inspect_only: new Set(config.inspectOnlyExtensions.map(normalizeExtension)),
  unsupported: new Set(config.unsupportedExtensions.map(normalizeExtension)),
  excluded: new Set(config.excludedExtensions.map(normalizeExtension))
};
const excludedDirectories = new Set(config.excludedDirectories ?? []);

function normalizeExtension(value) {
  const lower = value.toLowerCase();
  return lower.startsWith('.') ? lower : `.${lower}`;
}

function toPosix(value) {
  return value.split(sep).join('/');
}

function inside(parent, child) {
  const difference = relative(parent, child);
  return difference === '' || (!difference.startsWith(`..${sep}`) && difference !== '..' && !isAbsolute(difference));
}

function classify(extension) {
  for (const [classification, extensions] of Object.entries(extensionSets)) {
    if (extensions.has(extension)) return classification;
  }
  return 'unknown';
}

function proposedAction(classification) {
  return {
    eligible: 'sign',
    inspect_only: 'inspect_only',
    unsupported: 'skip',
    excluded: 'skip',
    unknown: 'review'
  }[classification];
}

function reasonFor(classification) {
  return {
    eligible: 'Format is in the reviewed c2patool writable candidate allowlist; individual signing and verification are still required.',
    inspect_only: 'The current tool support is read-only for this format.',
    unsupported: 'The current tool does not list this format as writable.',
    excluded: 'Site code, data, debugging output, or a reviewed legacy file.',
    unknown: 'Extension is not covered by the reviewed policy.'
  }[classification];
}

async function sha256(path) {
  const bytes = await readFile(path);
  return createHash('sha256').update(bytes).digest('hex');
}

async function walk(rootPath, allowedRoot, rows) {
  const entries = await readdir(rootPath, { withFileTypes: true });
  entries.sort((left, right) => left.name.localeCompare(right.name));

  for (const entry of entries) {
    if (entry.isDirectory() && excludedDirectories.has(entry.name)) continue;

    const path = join(rootPath, entry.name);
    if (entry.isSymbolicLink()) {
      rows.push({
        path: toPosix(relative(repositoryRoot, path)),
        extension: normalizeExtension(extname(entry.name) || '[none]'),
        classification: 'unknown',
        proposedAction: 'review',
        reason: 'Symbolic links are not followed by the C2PA inventory.',
        size: null,
        sha256: null
      });
      continue;
    }
    if (entry.isDirectory()) {
      await walk(path, allowedRoot, rows);
      continue;
    }
    if (!entry.isFile()) continue;

    const resolvedPath = await realpath(path);
    if (!inside(allowedRoot, resolvedPath)) {
      throw new Error(`Resolved path escaped approved root: ${path}`);
    }

    const fileStat = await stat(resolvedPath);
    const extension = normalizeExtension(extname(entry.name) || '[none]');
    const classification = classify(extension);
    rows.push({
      path: toPosix(relative(repositoryRoot, path)),
      extension,
      classification,
      proposedAction: proposedAction(classification),
      reason: reasonFor(classification),
      size: fileStat.size,
      sha256: await sha256(resolvedPath)
    });
  }
}

function summarize(rows) {
  const classifications = {};
  const extensions = {};
  let totalBytes = 0;

  for (const row of rows) {
    const byteCount = row.size ?? 0;
    totalBytes += byteCount;
    classifications[row.classification] ??= { files: 0, bytes: 0 };
    classifications[row.classification].files += 1;
    classifications[row.classification].bytes += byteCount;
    extensions[row.extension] ??= { files: 0, bytes: 0, classification: row.classification };
    extensions[row.extension].files += 1;
    extensions[row.extension].bytes += byteCount;
  }

  return { files: rows.length, bytes: totalBytes, classifications, extensions };
}

function csvCell(value) {
  const stringValue = value == null ? '' : String(value);
  return `"${stringValue.replaceAll('"', '""')}"`;
}

function renderCsv(rows) {
  const fields = ['path', 'extension', 'classification', 'proposedAction', 'reason', 'size', 'sha256'];
  return [
    fields.map(csvCell).join(','),
    ...rows.map((row) => fields.map((field) => csvCell(row[field])).join(','))
  ].join('\n') + '\n';
}

function renderMarkdown(summary, metadata) {
  const lines = [
    '# C2PA inventory summary',
    '',
    `Generated: ${metadata.generatedAt}`,
    `Mode: ${metadata.mode}`,
    `Repository: ${metadata.repositoryRoot}`,
    '',
    `Discovered **${summary.files.toLocaleString('en-US')} files** totaling **${summary.bytes.toLocaleString('en-US')} bytes**.`,
    '',
    '| Classification | Files | Bytes |',
    '| --- | ---: | ---: |'
  ];
  for (const name of Object.keys(summary.classifications).sort()) {
    const value = summary.classifications[name];
    lines.push(`| ${name} | ${value.files.toLocaleString('en-US')} | ${value.bytes.toLocaleString('en-US')} |`);
  }
  lines.push('', 'No files were modified. Eligibility does not become signed status until c2patool writes and verifies an output.', '');
  return lines.join('\n');
}

const rows = [];
for (const configuredRoot of config.roots) {
  const rootPath = resolve(repositoryRoot, configuredRoot);
  if (!inside(repositoryRoot, rootPath)) throw new Error(`Configured root escapes repository: ${configuredRoot}`);
  const allowedRoot = await realpath(rootPath);
  await walk(rootPath, allowedRoot, rows);
}
rows.sort((left, right) => left.path.localeCompare(right.path));

const generatedAt = new Date().toISOString();
const summary = summarize(rows);
const report = {
  metadata: {
    schemaVersion: config.schemaVersion,
    generatedAt,
    mode: dryRun ? 'dry-run' : 'inventory',
    repositoryRoot,
    roots: config.roots,
    manifestTemplate: config.manifestTemplate
  },
  summary,
  assets: rows
};

const reportsDirectory = join(repositoryRoot, 'reports');
await mkdir(reportsDirectory, { recursive: true });
const prefix = dryRun ? 'c2pa-dry-run' : 'c2pa-inventory';
await Promise.all([
  writeFile(join(reportsDirectory, `${prefix}.json`), `${JSON.stringify(report, null, 2)}\n`, 'utf8'),
  writeFile(join(reportsDirectory, `${prefix}.csv`), renderCsv(rows), 'utf8'),
  writeFile(join(reportsDirectory, `${prefix}-summary.md`), renderMarkdown(summary, report.metadata), 'utf8')
]);

const unknown = summary.classifications.unknown?.files ?? 0;
console.log(renderMarkdown(summary, report.metadata));
console.log(`Reports: reports/${prefix}.json, reports/${prefix}.csv, reports/${prefix}-summary.md`);
if (unknown > 0) {
  console.error(`Review required: ${unknown} file(s) have an unknown classification.`);
  process.exitCode = 2;
}
