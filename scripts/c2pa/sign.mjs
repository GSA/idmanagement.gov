#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { spawn } from 'node:child_process';
import { chmod, copyFile, mkdir, readFile, rename, rm, stat, writeFile } from 'node:fs/promises';
import { basename, dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(scriptDirectory, '..', '..');
const reportsDirectory = join(repositoryRoot, 'reports');
const workDirectory = join(repositoryRoot, '.c2pa-work', 'signing');
const config = JSON.parse(await readFile(join(scriptDirectory, 'config.json'), 'utf8'));
const manifestTemplate = JSON.parse(await readFile(join(scriptDirectory, 'manifest.json'), 'utf8'));
const inventoryPath = join(reportsDirectory, 'c2pa-dry-run.json');
const limitArgument = process.argv.find((value) => value.startsWith('--limit='));
const limit = limitArgument ? Number.parseInt(limitArgument.split('=')[1], 10) : null;
const force = process.argv.includes('--force');

const toolPath = resolve(process.env.C2PA_TOOL ?? join(repositoryRoot, '.c2pa-work/bin/c2patool/c2patool'));
const certificatePath = resolve(process.env.C2PA_SIGN_CERT ?? join(repositoryRoot, '.c2pa-work/bin/c2patool/sample/es256_certs.pem'));
const privateKeyPath = resolve(process.env.C2PA_PRIVATE_KEY ?? join(repositoryRoot, '.c2pa-work/bin/c2patool/sample/es256_private.key'));

function run(command, args) {
  return new Promise((resolvePromise, reject) => {
    const child = spawn(command, args, { cwd: repositoryRoot, env: process.env, stdio: ['ignore', 'pipe', 'pipe'] });
    let stdout = '';
    let stderr = '';
    child.stdout.setEncoding('utf8').on('data', (chunk) => { stdout += chunk; });
    child.stderr.setEncoding('utf8').on('data', (chunk) => { stderr += chunk; });
    child.on('error', reject);
    child.on('close', (code) => code === 0
      ? resolvePromise({ stdout, stderr })
      : reject(new Error(`${basename(command)} exited ${code}: ${(stderr || stdout).trim()}`)));
  });
}

async function sha256(path) {
  return createHash('sha256').update(await readFile(path)).digest('hex');
}

async function detectedExtension(path) {
  const bytes = (await readFile(path)).subarray(0, 16);
  if (bytes.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return '.png';
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return '.jpg';
  if (bytes.subarray(0, 6).toString('ascii') === 'GIF87a' || bytes.subarray(0, 6).toString('ascii') === 'GIF89a') return '.gif';
  if (bytes.subarray(0, 4).toString('ascii') === 'RIFF' && bytes.subarray(8, 12).toString('ascii') === 'WEBP') return '.webp';
  return extname(path).toLowerCase();
}

async function requireFile(path, label) {
  const value = await stat(path);
  if (!value.isFile() || value.size === 0) throw new Error(`${label} is missing or empty: ${path}`);
}

function parseReport(stdout) {
  const trimmed = stdout.trim();
  if (!trimmed) return null;
  try { return JSON.parse(trimmed); } catch { return null; }
}

function hasValidationError(report) {
  if (!report) return true;
  return (report.validation_status ?? []).some((status) => {
    const code = String(status?.code ?? '').toLowerCase();
    if (code === 'signingcredential.untrusted' && config.testCredential) return false;
    return code.includes('mismatch') || code.includes('invalid') || code.includes('error') || code.includes('malformed');
  });
}

async function inspect(path) {
  try {
    const output = await run(toolPath, [path]);
    return parseReport(output.stdout);
  } catch (error) {
    if (String(error?.message ?? error).includes('No claim found')) return null;
    throw error;
  }
}

await Promise.all([
  requireFile(toolPath, 'c2patool'),
  requireFile(certificatePath, 'signing certificate'),
  requireFile(privateKeyPath, 'private key'),
  requireFile(inventoryPath, 'dry-run inventory')
]);

const toolVersion = (await run(toolPath, ['-V'])).stdout.trim();
if (!toolVersion.includes(config.tool.version)) {
  throw new Error(`Expected c2patool ${config.tool.version}, received ${toolVersion}`);
}
const inventory = JSON.parse(await readFile(inventoryPath, 'utf8'));
let candidates = inventory.assets.filter((asset) => asset.classification === 'eligible');
if (Number.isInteger(limit) && limit >= 0) candidates = candidates.slice(0, limit);

await mkdir(workDirectory, { recursive: true });
await mkdir(reportsDirectory, { recursive: true });
const progressPath = join(reportsDirectory, 'c2pa-signing-progress.jsonl');
await writeFile(progressPath, '');
let nextIndex = 0;
const results = new Array(candidates.length);

async function record(index, result) {
  results[index] = result;
  await writeFile(progressPath, `${JSON.stringify(result)}\n`, { flag: 'a' });
  const completed = results.filter(Boolean).length;
  if (completed % 50 === 0 || completed === candidates.length) {
    console.log(`C2PA source signing: ${completed}/${candidates.length}`);
  }
}

async function processAsset(asset, index) {
  const sourcePath = join(repositoryRoot, asset.path);
  const sourceBefore = await sha256(sourcePath);
  const started = Date.now();
  let temporaryOutput;
  let runtimeManifest;
  let workingInput;
  try {
    const id = createHash('sha256').update(asset.path).digest('hex').slice(0, 20);
    const extension = extname(asset.path);
    const contentExtension = await detectedExtension(sourcePath);
    const extensionMatchesContent = extension.toLowerCase() === contentExtension ||
      (contentExtension === '.jpg' && extension.toLowerCase() === '.jpeg');
    workingInput = extensionMatchesContent ? sourcePath : join(workDirectory, `${id}.input${contentExtension}`);
    if (workingInput !== sourcePath) await copyFile(sourcePath, workingInput);

    const existing = await inspect(workingInput);
    if (existing?.active_manifest && !force) {
      await record(index, {
        path: asset.path,
        status: hasValidationError(existing) ? 'failed-verification' : 'already-current',
        sourceSha256: sourceBefore,
        activeManifest: existing.active_manifest,
        elapsedMilliseconds: Date.now() - started,
        error: hasValidationError(existing) ? 'Existing manifest did not validate.' : null
      });
      return;
    }

    temporaryOutput = join(dirname(sourcePath), `.${basename(asset.path, extension)}.${id}.c2pa.tmp${contentExtension}`);
    runtimeManifest = join(workDirectory, `${id}.manifest.json`);
    await rm(temporaryOutput, { force: true });
    await writeFile(runtimeManifest, `${JSON.stringify({
      ...manifestTemplate,
      title: asset.path,
      alg: 'es256',
      sign_cert: certificatePath,
      private_key: privateKeyPath
    }, null, 2)}\n`, { mode: 0o600 });

    await run(toolPath, [workingInput, '--manifest', runtimeManifest, '--output', temporaryOutput, '--create', 'softwareImage']);
    const signedReport = await inspect(temporaryOutput);
    if (!signedReport?.active_manifest || hasValidationError(signedReport)) {
      throw new Error('Signed output did not return a valid active manifest.');
    }
    const sourceMode = (await stat(sourcePath)).mode;
    await chmod(temporaryOutput, sourceMode);
    const outputSha256 = await sha256(temporaryOutput);
    const outputBytes = (await stat(temporaryOutput)).size;
    await rename(temporaryOutput, sourcePath);
    temporaryOutput = null;
    await record(index, {
      path: asset.path,
      status: 'signed-and-verified',
      sourceSha256: sourceBefore,
      outputSha256,
      sourceBytes: asset.size,
      outputBytes,
      activeManifest: signedReport.active_manifest,
      validationState: signedReport.validation_state ?? null,
      elapsedMilliseconds: Date.now() - started
    });
  } catch (error) {
    if (temporaryOutput) await rm(temporaryOutput, { force: true });
    const sourceAfter = await sha256(sourcePath);
    await record(index, {
      path: asset.path,
      status: 'failed-signing',
      sourceSha256: sourceBefore,
      sourceUnchanged: sourceAfter === sourceBefore,
      elapsedMilliseconds: Date.now() - started,
      error: String(error?.message ?? error).slice(0, 4000)
    });
  } finally {
    if (runtimeManifest) await rm(runtimeManifest, { force: true });
    if (workingInput && workingInput !== sourcePath) await rm(workingInput, { force: true });
  }
}

async function worker() {
  while (true) {
    const index = nextIndex++;
    if (index >= candidates.length) return;
    await processAsset(candidates[index], index);
  }
}

const concurrency = Math.max(1, Math.min(config.maxConcurrency ?? 2, candidates.length || 1));
await Promise.all(Array.from({ length: concurrency }, () => worker()));

const counts = {};
for (const result of results) counts[result.status] = (counts[result.status] ?? 0) + 1;
const report = {
  generatedAt: new Date().toISOString(),
  mode: 'sign-source',
  toolVersion,
  certificateSha256: await sha256(certificatePath),
  attempted: candidates.length,
  counts,
  completedWithErrors: Object.keys(counts).some((status) => status.startsWith('failed-')),
  results
};
await writeFile(join(reportsDirectory, 'c2pa-signing-report.json'), `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ attempted: report.attempted, counts, completedWithErrors: report.completedWithErrors }, null, 2));
console.log('Report: reports/c2pa-signing-report.json');
