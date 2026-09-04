#!/usr/bin/env node

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(scriptDirectory, "../..");
const reportPath = path.join(siteRoot, "reports/c2pa-signing-report.json");
const outputPath = path.resolve(siteRoot, "../C2PA_SIGNED_ASSET_LOG.md");
const report = JSON.parse(await readFile(reportPath, "utf8"));

const verified = report.results
  .filter((result) => ["signed", "already-current"].includes(result.status) && result.activeManifest)
  .sort((left, right) => left.path.localeCompare(right.path));

if (verified.length !== report.attempted || report.completedWithErrors) {
  throw new Error(
    `Refusing to publish an incomplete ledger: ${verified.length} verified of ${report.attempted} attempted; completedWithErrors=${report.completedWithErrors}`,
  );
}

const lines = [
  "# C2PA signed asset log",
  "",
  `Generated from \`idmanagement.gov/reports/c2pa-signing-report.json\` at ${report.generatedAt}.`,
  "",
  `Verified signed assets: **${verified.length}**  `,
  `c2patool version: \`${report.toolVersion}\`  `,
  `Certificate SHA-256: \`${report.certificateSha256}\`  `,
  `Signing mode: \`${report.mode}\``,
  "",
  "Each row represents a source asset whose active manifest was successfully read after signing. `already-current` means the verified signature was already present during the latest idempotent run.",
  "",
  "| # | Repository-relative asset | Status | Source SHA-256 | Active manifest |",
  "| ---: | --- | --- | --- | --- |",
  ...verified.map(
    (result, index) =>
      `| ${index + 1} | \`${result.path}\` | \`${result.status}\` | \`${result.sourceSha256}\` | \`${result.activeManifest}\` |`,
  ),
  "",
];

await writeFile(outputPath, `${lines.join("\n")}\n`, "utf8");
console.log(`Wrote ${verified.length} verified assets to ${outputPath}`);
