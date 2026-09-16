#!/usr/bin/env node
import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
await mkdir(join(root, 'assets', 'c2pa'), { recursive: true });
// Publish only assets whose bytes still match a successful signing record.
// The index is bundled locally; staging needs neither reports nor c2patool.
const indexPath = join(root, 'assets/c2pa/signed-assets.json');
let candidates;
try {
  const report = JSON.parse(await readFile(join(root, 'reports/c2pa-signing-report.json'), 'utf8'));
  candidates = Object.fromEntries(report.results
    .filter((item) => ['signed', 'signed-and-verified', 'already-current'].includes(item.status) && item.activeManifest)
    .map((item) => [item.path, item.outputSha256 ?? item.sourceSha256]));
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
  candidates = JSON.parse(await readFile(indexPath, 'utf8'));
}
const signedAssets = {};
try {
  const pdfReport = JSON.parse(await readFile(join(root, 'reports/c2pa-pdf-signing-report.json'), 'utf8'));
  for (const item of pdfReport.results) {
    if (['signed-and-verified', 'already-current'].includes(item.status) && item.activeManifest) candidates[item.path] = item.outputSha256;
  }
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
  // A clean checkout retains the committed PDF index without local reports.
  try {
    const previous = JSON.parse(await readFile(indexPath, 'utf8'));
    for (const [path, hash] of Object.entries(previous)) if (path.endsWith('.pdf')) candidates[path] = hash;
  } catch (missing) { if (missing.code !== 'ENOENT') throw missing; }
}
for (const [path, hash] of Object.entries(candidates)) {
  try {
    const actual = createHash('sha256').update(await readFile(join(root, path))).digest('hex');
    if (actual === hash) signedAssets[path] = hash;
  } catch (error) { if (error.code !== 'ENOENT') throw error; }
}
await writeFile(indexPath, `${JSON.stringify(signedAssets, null, 2)}\n`);
await build({ entryPoints: [join(root, 'assets/js/c2pa-entry.js')], bundle: true, format: 'iife', minify: true, sourcemap: true, outfile: join(root, 'assets/js/c2pa-ui.bundle.js'), target: ['es2020'] });
await copyFile(join(root, 'node_modules/@contentauth/c2pa-web/dist/resources/c2pa_bg.wasm'), join(root, 'assets/c2pa/c2pa_bg.wasm'));
console.log('Built the C2PA browser bundle and Wasm resource.');
