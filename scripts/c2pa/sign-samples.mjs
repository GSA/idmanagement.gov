#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { spawn } from 'node:child_process';
import { copyFile, mkdir, mkdtemp, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { dirname, extname, join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(scriptDirectory, '..', '..');
const reportsDirectory = join(repositoryRoot, 'reports');
const inventoryPath = join(reportsDirectory, 'c2pa-dry-run.json');
const manifestTemplatePath = join(scriptDirectory, 'manifest.json');

const toolPath = resolve(
  process.env.C2PA_TOOL ?? join(repositoryRoot, '.c2pa-work', 'bin', 'c2patool', 'c2patool')
);
const certificatePath = resolve(
  process.env.C2PA_SIGN_CERT ?? join(repositoryRoot, '.c2pa-work', 'bin', 'c2patool', 'sample', 'es256_certs.pem')
);
const privateKeyPath = resolve(
  process.env.C2PA_PRIVATE_KEY ?? join(repositoryRoot, '.c2pa-work', 'bin', 'c2patool', 'sample', 'es256_private.key')
);

function run(command, args) {
  return new Promise((resolvePromise, reject) => {
    const child = spawn(command, args, {
      cwd: repositoryRoot,
      env: process.env,
      stdio: ['ignore', 'pipe', 'pipe']
    });
    let stdout = '';
    let stderr = '';
    child.stdout.setEncoding('utf8').on('data', (chunk) => { stdout += chunk; });
    child.stderr.setEncoding('utf8').on('data', (chunk) => { stderr += chunk; });
    child.on('error', reject);
    child.on('close', (code) => {
      if (code === 0) resolvePromise({ stdout, stderr });
      else reject(new Error(`${command} exited ${code}: ${stderr || stdout}`));
    });
  });
}

async function sha256(path) {
  return createHash('sha256').update(await readFile(path)).digest('hex');
}

async function assertReadableFile(path, label) {
  const value = await stat(path);
  if (!value.isFile() || value.size === 0) throw new Error(`${label} is not a non-empty file: ${path}`);
}

await Promise.all([
  assertReadableFile(toolPath, 'c2patool'),
  assertReadableFile(certificatePath, 'signing certificate'),
  assertReadableFile(privateKeyPath, 'private key'),
  assertReadableFile(inventoryPath, 'dry-run inventory')
]);

const inventory = JSON.parse(await readFile(inventoryPath, 'utf8'));
const template = JSON.parse(await readFile(manifestTemplatePath, 'utf8'));
const eligible = inventory.assets.filter((asset) => asset.classification === 'eligible');
const selected = new Map();

for (const asset of eligible) {
  const current = selected.get(asset.extension);
  if (!current || asset.size < current.size) selected.set(asset.extension, asset);
}

const requiredExtensions = ['.gif', '.jpeg', '.jpg', '.png', '.svg', '.webp'];
for (const extension of requiredExtensions) {
  if (!selected.has(extension)) throw new Error(`No dry-run sample found for ${extension}`);
}

const requestedDirectory = process.env.C2PA_DRY_RUN_DIR;
const workDirectory = requestedDirectory
  ? resolve(requestedDirectory)
  : await mkdtemp(join(tmpdir(), 'idmanagement-c2pa-samples-'));
if (workDirectory.startsWith(repositoryRoot)) {
  throw new Error('C2PA_DRY_RUN_DIR must be outside the repository to protect source assets.');
}
await mkdir(workDirectory, { recursive: true });

const toolVersion = (await run(toolPath, ['-V'])).stdout.trim();
const certificateSha256 = await sha256(certificatePath);
const sourceBefore = new Map(await Promise.all(
  [...selected.values()].map(async (asset) => [asset.path, await sha256(join(repositoryRoot, asset.path))])
));
const results = [];

try {
  for (const extension of requiredExtensions) {
    const asset = selected.get(extension);
    const sampleName = `sample${extension}`;
    const signedName = `sample-signed${extension}`;
    const copiedSource = join(workDirectory, sampleName);
    const signedOutput = join(workDirectory, signedName);
    const runtimeManifest = join(workDirectory, `manifest-${extension.slice(1)}.json`);
    await copyFile(join(repositoryRoot, asset.path), copiedSource);
    await writeFile(runtimeManifest, `${JSON.stringify({
      ...template,
      title: asset.path,
      alg: 'es256',
      sign_cert: certificatePath,
      private_key: privateKeyPath
    }, null, 2)}\n`, { mode: 0o600 });

    const started = Date.now();
    await run(toolPath, [copiedSource, '--manifest', runtimeManifest, '--output', signedOutput, '--create', 'empty']);
    const inspection = await run(toolPath, [signedOutput]);
    const parsedInspection = JSON.parse(inspection.stdout);
    results.push({
      extension,
      sourcePath: asset.path,
      sourceBytes: asset.size,
      signedBytes: (await stat(signedOutput)).size,
      sourceSha256: await sha256(copiedSource),
      signedSha256: await sha256(signedOutput),
      elapsedMilliseconds: Date.now() - started,
      activeManifest: parsedInspection.active_manifest ?? null,
      validationStatus: parsedInspection.validation_status ?? [],
      result: 'signed-and-read'
    });
  }
} finally {
  for (const [path, beforeHash] of sourceBefore) {
    const afterHash = await sha256(join(repositoryRoot, path));
    if (afterHash !== beforeHash) throw new Error(`Source asset changed during sample dry run: ${path}`);
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  mode: 'dry-run-disposable-samples',
  toolVersion,
  certificateSha256,
  workDirectory,
  sourceAssetsModified: false,
  results
};
await mkdir(reportsDirectory, { recursive: true });
await writeFile(join(reportsDirectory, 'c2pa-dry-run-samples.json'), `${JSON.stringify(report, null, 2)}\n`);

console.log(`Validated ${results.length} disposable format samples with ${toolVersion}.`);
for (const result of results) {
  console.log(`${result.extension}: ${result.sourcePath} -> ${result.result} (${result.signedBytes} bytes)`);
}
console.log('Source assets modified: no');
console.log('Report: reports/c2pa-dry-run-samples.json');

if (!requestedDirectory) await rm(workDirectory, { recursive: true, force: true });
