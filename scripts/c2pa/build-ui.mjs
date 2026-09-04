#!/usr/bin/env node
import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
await mkdir(join(root, 'assets', 'c2pa'), { recursive: true });
await build({ entryPoints: [join(root, 'assets/js/c2pa-entry.js')], bundle: true, format: 'iife', minify: true, sourcemap: true, outfile: join(root, 'assets/js/c2pa-ui.bundle.js'), target: ['es2020'] });
await copyFile(join(root, 'node_modules/@contentauth/c2pa-web/dist/resources/c2pa_bg.wasm'), join(root, 'assets/c2pa/c2pa_bg.wasm'));
console.log('Built the C2PA browser bundle and Wasm resource.');
