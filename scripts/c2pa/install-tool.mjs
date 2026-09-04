#!/usr/bin/env node
import { createHash } from 'node:crypto';
import { spawn } from 'node:child_process';
import { access, chmod, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptDirectory, '..', '..');
const config = JSON.parse(await readFile(join(scriptDirectory, 'config.json'), 'utf8'));
if (process.platform !== 'linux' || process.arch !== 'x64') throw new Error(`Unsupported installer platform: ${process.platform}/${process.arch}`);
const archive = join(root, '.c2pa-work', 'download', `c2patool-v${config.tool.version}-x86_64-unknown-linux-gnu.tar.gz`);
const binary = join(root, '.c2pa-work', 'bin', 'c2patool', 'c2patool');

function run(command, args) {
  return new Promise((resolvePromise, reject) => {
    const child = spawn(command, args, { cwd: root, stdio: 'inherit' });
    child.on('error', reject);
    child.on('close', (code) => code === 0 ? resolvePromise() : reject(new Error(`${command} exited ${code}`)));
  });
}

async function digest(path) {
  return createHash('sha256').update(await readFile(path)).digest('hex');
}

await mkdir(dirname(archive), { recursive: true });
await mkdir(join(root, '.c2pa-work', 'bin'), { recursive: true });
let valid = false;
try { valid = (await digest(archive)) === config.tool.linuxX64Sha256; } catch {}
if (!valid) {
  const response = await fetch(config.tool.linuxX64Url, { redirect: 'follow' });
  if (!response.ok) throw new Error(`c2patool download failed: ${response.status}`);
  await writeFile(archive, new Uint8Array(await response.arrayBuffer()), { mode: 0o600 });
}
const actual = await digest(archive);
if (actual !== config.tool.linuxX64Sha256) throw new Error(`c2patool checksum mismatch: ${actual}`);
try { await access(binary); } catch { await run('tar', ['-xzf', archive, '-C', join(root, '.c2pa-work', 'bin')]); }
await chmod(binary, 0o700);
await run(binary, ['-V']);
