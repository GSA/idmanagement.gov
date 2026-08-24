#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const [input, output] = process.argv.slice(2);
if (!input || !output) {
  console.error('Usage: render-pa11y-report.js results.json report.html');
  process.exit(1);
}

const rawResults = JSON.parse(fs.readFileSync(input, 'utf8'));
const escapeHtml = (value) => String(value ?? '')
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;').replaceAll("'", '&#039;');
const pages = Array.isArray(rawResults)
  ? rawResults
  : Object.entries(rawResults.results || {}).map(([pageUrl, issues]) => ({ pageUrl, issues }));
const issueCount = pages.reduce((sum, page) => sum + (page.issues?.length || 0), 0);
const counts = pages.flatMap((page) => page.issues || []).reduce((all, issue) => {
  const type = (issue.type || 'unknown').toLowerCase();
  all[type] = (all[type] || 0) + 1;
  return all;
}, {});
const generated = new Date().toLocaleString();

const pageMarkup = pages.map((page, pageIndex) => {
  const issues = page.issues || [];
  const issueMarkup = issues.length ? issues.map((issue, issueIndex) => `
    <article class="issue issue-${escapeHtml(issue.type)}">
      <h3>${issueIndex + 1}. ${escapeHtml(issue.type || 'Issue')}: ${escapeHtml(issue.message)}</h3>
      <dl><dt>Rule</dt><dd><code>${escapeHtml(issue.code)}</code></dd>
      <dt>Selector</dt><dd><code>${escapeHtml(issue.selector)}</code></dd></dl>
      ${issue.context ? `<details><summary>Element context</summary><pre><code>${escapeHtml(issue.context)}</code></pre></details>` : ''}
    </article>`).join('') : '<p class="pass">No issues reported.</p>';
  return `<details class="page" ${issues.length ? 'open' : ''}>
    <summary><span>${escapeHtml(page.pageUrl || page.url || `Page ${pageIndex + 1}`)}</span><strong>${issues.length} issue${issues.length === 1 ? '' : 's'}</strong></summary>
    <div class="page-body">${issueMarkup}</div>
  </details>`;
}).join('\n');

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1"><title>Pa11y CI accessibility report</title>
<style>
:root{font-family:system-ui,sans-serif;color:#1b1b1b;background:#f5f5f5}body{margin:0}header,main{max-width:78rem;margin:auto;padding:1.5rem}header{background:#fff;border-bottom:1px solid #bbb;max-width:none}header>div{max-width:78rem;margin:auto}.summary{display:flex;flex-wrap:wrap;gap:1rem}.card{background:#fff;border-left:.35rem solid #005ea8;padding:1rem;min-width:9rem}.card strong{display:block;font-size:2rem}.controls{margin:1rem 0;display:flex;gap:.75rem;flex-wrap:wrap}button{padding:.65rem 1rem;border:2px solid #005ea8;background:#fff;color:#005ea8;font-weight:700;cursor:pointer}.page{background:#fff;margin:.75rem 0;border:1px solid #bbb}.page>summary{display:flex;justify-content:space-between;gap:1rem;padding:1rem;cursor:pointer}.page-body{padding:0 1rem 1rem}.issue{border-left:.35rem solid #d54309;background:#faf3f1;padding:.25rem 1rem 1rem;margin:1rem 0}.issue-warning{border-color:#ffbe2e;background:#fff5c2}.issue-notice{border-color:#00bde3;background:#e7f6f8}dt{font-weight:700;margin-top:.6rem}dd{margin:.2rem 0;overflow-wrap:anywhere}pre{white-space:pre-wrap;overflow-wrap:anywhere}.pass{color:#216e1f;font-weight:700}code{font-size:.9em}@media(max-width:40rem){.page>summary{display:block}.page>summary strong{display:block;margin-top:.5rem}}
</style></head><body><header><div><h1>Pa11y CI accessibility report</h1><p>WCAG 2 AA · Axe runner · Generated ${escapeHtml(generated)}</p></div></header><main>
<section class="summary" aria-label="Report summary"><div class="card"><strong>${pages.length}</strong> pages checked</div><div class="card"><strong>${issueCount}</strong> total issues</div><div class="card"><strong>${counts.error || 0}</strong> errors</div><div class="card"><strong>${counts.warning || 0}</strong> warnings</div><div class="card"><strong>${counts.notice || 0}</strong> notices</div></section>
<div class="controls"><button type="button" id="expand">Expand all</button><button type="button" id="collapse">Collapse all</button></div>
${pageMarkup || '<p>No page results were present in the JSON report.</p>'}</main>
<script>document.querySelector('#expand').onclick=()=>document.querySelectorAll('.page').forEach(x=>x.open=true);document.querySelector('#collapse').onclick=()=>document.querySelectorAll('.page').forEach(x=>x.open=false);</script></body></html>`;
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, html);
console.log(`Wrote ${output}: ${pages.length} pages, ${issueCount} issues`);
