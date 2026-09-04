#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { spawn } from 'node:child_process';
import { mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import { basename, dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(scriptDirectory, '..', '..');
const reportsDirectory = join(repositoryRoot, 'reports');
const workDirectory = join(repositoryRoot, '.c2pa-work', 'restore-excluded');
const config = JSON.parse(await readFile(join(scriptDirectory, 'config.json'), 'utf8'));
const inventory = JSON.parse(await readFile(join(reportsDirectory, 'c2pa-dry-run.json'), 'utf8'));
const toolPath = resolve(process.env.C2PA_TOOL ?? join(repositoryRoot, '.c2pa-work/bin/c2patool/c2patool'));
const writableExtensions = new Set(config.eligibleExtensions.map((extension) => extension.toLowerCase()));
const baselineRevision = config.unsignedBaselineRevision;
if (!baselineRevision) throw new Error('config.json must define unsignedBaselineRevision.');
const candidates = inventory.assets.filter((asset) =>
  asset.pageReferenceRequired === true && asset.pageReferenced === false && writableExtensions.has(asset.extension));

function run(command, args, options = {}) {
  return new Promise((resolvePromise, reject) => {
    const child = spawn(command, args, { cwd: repositoryRoot, env: process.env, stdio: ['ignore', 'pipe', 'pipe'], ...options });
    const stdout = [];
    const stderr = [];
    child.stdout.on('data', (chunk) => stdout.push(chunk));
    child.stderr.on('data', (chunk) => stderr.push(chunk));
    child.on('error', reject);
    child.on('close', (code) => resolvePromise({ code, stdout: Buffer.concat(stdout), stderr: Buffer.concat(stderr) }));
  });
}

const hash = (bytes) => createHash('sha256').update(bytes).digest('hex');

async function hasManifest(path) {
  const result = await run(toolPath, [path]);
  if (result.code !== 0) {
    const message = Buffer.concat([result.stdout, result.stderr]).toString('utf8');
    if (/no claim found/i.test(message)) return false;
    throw new Error(`c2patool could not inspect ${path}: ${message.trim()}`);
  }
  try { return Boolean(JSON.parse(result.stdout.toString('utf8')).active_manifest); }
  catch { return false; }
}

await mkdir(workDirectory, { recursive: true });
await mkdir(reportsDirectory, { recursive: true });
let nextIndex = 0;
const results = new Array(candidates.length);

async function processAsset(asset, index) {
  const sourcePath = join(repositoryRoot, asset.path);
  const current = await readFile(sourcePath);
  const gitResult = await run('git', ['show', `${baselineRevision}:${asset.path}`]);
  if (gitResult.code !== 0) {
    results[index] = { path: asset.path, status: 'not-in-head', error: null };
    return;
  }
  if (hash(current) === hash(gitResult.stdout)) {
    results[index] = { path: asset.path, status: 'already-unsigned-original', error: null };
    return;
  }
  try {
    if (!await hasManifest(sourcePath)) {
      results[index] = { path: asset.path, status: 'preserved-unsigned-change', error: null };
      return;
    }
    const id = hash(Buffer.from(asset.path)).slice(0, 20);
    const originalPath = join(workDirectory, `${id}${extname(asset.path)}`);
    await writeFile(originalPath, gitResult.stdout);
    if (await hasManifest(originalPath)) throw new Error('The Git source already contains a manifest; refusing to use it as an unsigned original.');
    const temporaryPath = join(dirname(sourcePath), `.${basename(asset.path)}.${id}.unsigned.tmp`);
    await writeFile(temporaryPath, gitResult.stdout);
    await rename(temporaryPath, sourcePath);
    results[index] = { path: asset.path, status: 'restored-unsigned-original', error: null };
  } catch (error) {
    results[index] = { path: asset.path, status: 'failed', error: String(error?.message ?? error) };
  }
}

async function worker() {
  while (true) {
    const index = nextIndex++;
    if (index >= candidates.length) return;
    await processAsset(candidates[index], index);
    const completed = results.filter(Boolean).length;
    if (completed % 100 === 0 || completed === candidates.length) console.log(`C2PA scope reconciliation: ${completed}/${candidates.length}`);
  }
}

await Promise.all(Array.from({ length: 4 }, worker));
await rm(workDirectory, { recursive: true, force: true });
const counts = results.reduce((summary, result) => {
  summary[result.status] = (summary[result.status] ?? 0) + 1;
  return summary;
}, {});
const report = { generatedAt: new Date().toISOString(), attempted: candidates.length, counts, completedWithErrors: Boolean(counts.failed), results };
await writeFile(join(reportsDirectory, 'c2pa-scope-reconciliation.json'), `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ attempted: report.attempted, counts, completedWithErrors: report.completedWithErrors }, null, 2));
console.log('Report: reports/c2pa-scope-reconciliation.json');
