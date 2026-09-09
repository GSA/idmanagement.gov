#!/usr/bin/env node
import { stat } from 'node:fs/promises';

// Staging consumes committed browser resources; it never prepares signed assets.
for (const asset of ['assets/js/c2pa-ui.bundle.js', 'assets/c2pa/c2pa_bg.wasm', 'assets/c2pa/content-credentials-icon.svg']) {
  const url = new URL(`../../${asset}`, import.meta.url);
  const file = await stat(url).catch(() => null);
  if (!file?.isFile() || file.size === 0) {
    throw new Error(`Missing viewer resource ${asset}. Run npm run c2pa:prepare-local locally and commit its outputs.`);
  }
}
console.log('Using committed C2PA viewer resources; no signing tool or viewer build required.');
