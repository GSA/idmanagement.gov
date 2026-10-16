// Run after npm run build. Serves _site temporarily; does not publish anything.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const puppeteer = require('puppeteer');
const root = path.resolve(__dirname, '../_site');
const server = http.createServer((request, response) => {
  let filename = path.resolve(root, '.' + decodeURIComponent(request.url.split('?')[0]));
  if (!filename.startsWith(root + path.sep)) { response.writeHead(403); return response.end(); }
  if (fs.existsSync(filename) && fs.statSync(filename).isDirectory()) filename = path.join(filename, 'index.html');
  if (!fs.existsSync(filename)) { response.writeHead(404); return response.end(); }
  const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.pdf': 'application/pdf' };
  response.setHeader('Content-Type', types[path.extname(filename)] || 'application/octet-stream');
  response.end(fs.readFileSync(filename));
});
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  let browser;
  const evidence = { scans: [], checks: [] };
  try {
    browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: true, args: ['--no-sandbox', '--disable-gpu'] });
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', request => request.url().startsWith('http://127.0.0.1:') || request.url().startsWith('data:') ? request.continue() : request.abort());
    const base = `http://127.0.0.1:${server.address().port}`;
    const go = async suffix => {
      await page.goto(base + suffix, { waitUntil: 'networkidle0' });
      if (suffix === '/doccenter/') await page.waitForFunction(() => /^\d+ total/.test(document.querySelector('[data-total-files]').textContent));
    };
    const scan = async name => {
      await page.addScriptTag({ path: require.resolve('axe-core/axe.min.js', { paths: [path.dirname(require.resolve('pa11y'))] }) });
      const result = await page.evaluate(async () => {
        const r = await axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'] } });
        return {
          violations: r.violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.map(n => ({ target: n.target, summary: n.failureSummary })) })),
          incomplete: r.incomplete.map(v => ({ id: v.id, targets: v.nodes.map(n => n.target) })),
          passes: r.passes.length
        };
      });
      evidence.scans.push({ name, ...result });
      console.log(name, 'violations:', result.violations.length);
      assert.equal(result.violations.length, 0, JSON.stringify(result.violations));
    };
    await page.setViewport({ width: 1440, height: 1000 });
    await go('/doccenter/');
    await scan('Initial desktop');
    await page.focus('[data-type="pdf"]');
    await page.keyboard.press('ArrowRight');
    assert.equal(await page.$eval('[data-type="docx"]', b => b === document.activeElement && b.getAttribute('aria-pressed') === 'false'), true);
    await page.keyboard.press('Space');
    assert.equal(await page.$eval('[data-type="docx"]', b => b.getAttribute('aria-pressed')), 'true');
    evidence.checks.push('Arrow keys move focus; Space activates the focused type.');
    await go('/doccenter/');
    await page.click('[data-type="pdf"]');
    for (const key of ['filename', 'author', 'created']) {
      for (let repeat = 0; repeat < 2; repeat++) {
        await page.focus(`[data-sort="${key}"]`);
        await page.keyboard.press('Enter');
        const state = await page.$eval(`[data-sort="${key}"]`, b => ({ focused: b === document.activeElement, sort: b.closest('th').getAttribute('aria-sort'), visibleIndicator: Boolean(b.querySelector('.dc-sort-direction')) }));
        assert.ok(state.focused && state.visibleIndicator);
        assert.ok(['ascending', 'descending'].includes(state.sort));
        assert.equal(await page.$$eval('th[aria-sort]', nodes => nodes.length), 1);
      }
    }
    evidence.checks.push('All three sort columns preserve focus and expose a single active sort direction.');
    await page.click('[data-scope-filter="archived"]');
    await page.click('[data-scope-filter="experimental"]');
    for (const selector of ['.dc-archive-marker', '.dc-experimental-marker']) {
      assert.ok(await page.$eval(selector, e => e.classList.contains('usa-tag') && !e.hasAttribute('tabindex') && !e.hasAttribute('aria-label') && e.querySelector('.usa-sr-only').textContent.includes('Last modified')));
    }
    await page.click('[data-statistics-toggle]');
    await page.click('.dc-additional-information-toggle');
    await scan('Results, both scopes, statistics and additional details');
    evidence.checks.push('A/E use USWDS tags with accessible status/date text and no extra tab stops.');
    for (const type of ['pdf', 'docx', 'xlsx', 'pptx']) {
      await go('/doccenter/');
      await page.click(`[data-type="${type}"]`);
      for (const method of ['Escape', 'button', 'overlay']) {
        await page.click('.dc-filename');
        await page.waitForSelector('#dc-document-modal.is-visible');
        for (let i = 0; i < 4; i++) {
          await page.keyboard.press('Tab');
          assert.ok(await page.evaluate(() => Boolean(document.activeElement.closest('#dc-document-modal'))));
        }
        if (type === 'pdf' && method === 'Escape') await scan('PDF dialog');
        if (method === 'Escape') {
          // PDF viewers implement their own keyboard handling; send Escape from
          // an author-controlled modal control to test the application's close path.
          await page.focus('[data-close-modal]');
          await page.keyboard.press('Escape');
        } else if (method === 'button') await page.click('[data-close-modal]');
        else await page.mouse.click(1, 1);
        await page.waitForSelector('#dc-document-modal.is-hidden');
        await page.waitForFunction(() => document.activeElement.matches('.dc-filename')); 
        assert.ok(await page.evaluate(() => !document.querySelector('#main-content').hasAttribute('aria-hidden')));
      }
    }
    evidence.checks.push('All four formats: dialog Tab containment and focus restoration after Escape, close button, and overlay dismissal.');
    for (const width of [320, 640, 1280]) {
      await page.setViewport({ width, height: 900 });
      for (const suffix of ['/doccenter/', '/doccenter/help/']) {
        await go(suffix);
        if (suffix === '/doccenter/') await page.click('[data-type="pdf"]');
        const measure = () => page.evaluate(() => ({ viewport: innerWidth, scrollWidth: document.documentElement.scrollWidth, overflow: [...document.querySelectorAll('body *')].filter(e => { const r = e.getBoundingClientRect(); return r.width && r.right > innerWidth + 1 && getComputedStyle(e).position !== 'absolute'; }).slice(0,8).map(e => ({ tag: e.tagName, class: e.className, width: e.getBoundingClientRect().width })) }));
        let size = await measure();
        evidence.checks.push({ page: suffix, width, spacing: false, ...size });
        assert.ok(size.scrollWidth <= width + 1, JSON.stringify(size));
        if (width === 320) await scan(suffix + ' at 320px');
        await page.addStyleTag({ content: '*{line-height:1.5!important;letter-spacing:.12em!important;word-spacing:.16em!important}p{margin-bottom:2em!important}' });
        size = await measure();
        evidence.checks.push({ page: suffix, width, spacing: true, ...size });
        assert.ok(size.scrollWidth <= width + 1, JSON.stringify(size));
      }
    }
    // Text resizing is separate from the 320px viewport/reflow check.
    await page.setViewport({ width: 1280, height: 900 });
    for (const suffix of ['/doccenter/', '/doccenter/help/']) {
      await go(suffix);
      if (suffix === '/doccenter/') await page.click('[data-type="pdf"]');
      await page.addStyleTag({ content: 'html{font-size:200%!important}' });
      const resize = await page.evaluate(() => ({
        viewport: innerWidth, scrollWidth: document.documentElement.scrollWidth,
        clipped: [...document.querySelectorAll('main *')].filter(e => {
          const style = getComputedStyle(e);
          return e.getBoundingClientRect().width > 1 && !e.closest('[hidden]') && !e.classList.contains('usa-sr-only') &&
            (['hidden', 'clip'].includes(style.overflowX) && e.scrollWidth > e.clientWidth + 1 || ['hidden', 'clip'].includes(style.overflowY) && e.scrollHeight > e.clientHeight + 1);
        }).map(e => e.className)
      }));
      assert.deepEqual(resize.clipped, [], suffix + ' clips content at 200% text size');
      evidence.checks.push({ page: suffix, textSize: '200%', ...resize });
    }
    evidence.checks.push('No clipped main content at 200% root text size; horizontal scrolling is permitted for WCAG 1.4.4 and recorded separately.');
    await go('/doccenter/help/');
    evidence.contrast = await page.evaluate(() => {
      function rgb(value) { return value.match(/[\d.]+/g).map(Number); }
      function luminance(c) { return c.slice(0,3).map(v => {v /= 255; return v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4;}).reduce((s,v,i) => s + v * [.2126,.7152,.0722][i],0); }
      return [...document.querySelectorAll('.usa-banner__header-text,.usa-banner__header-action,main h1')].map(e => {
        let bg = [255,255,255], image = false;
        for (let node = e; node; node = node.parentElement) {
          const s = getComputedStyle(node), color = rgb(s.backgroundColor);
          if (s.backgroundImage !== 'none') image = true;
          if (color.length === 3 || color[3] === 1) {bg=color;break;}
        }
        const foreground = rgb(getComputedStyle(e).color), l1 = luminance(foreground), l2 = luminance(bg);
        return { text: e.textContent.trim(), foreground, background: bg, image, ratio: (Math.max(l1,l2)+.05)/(Math.min(l1,l2)+.05) };
      });
    });
    for (const reading of evidence.contrast) assert.ok(!reading.image && reading.ratio >= 4.5, JSON.stringify(reading));
    const cdp = await page.createCDPSession();
    await cdp.send('Emulation.setEmulatedMedia', { features: [{ name: 'forced-colors', value: 'active' }] });
    assert.ok(await page.evaluate(() => matchMedia('(forced-colors: active)').matches));
    await go('/doccenter/');
    await page.focus('[data-type="pdf"]');
    assert.ok(await page.$eval('[data-type="pdf"]', e => getComputedStyle(e).outlineStyle !== 'none'));
    await cdp.send('Emulation.setEmulatedMedia', { features: [] });
    await cdp.detach();
    evidence.checks.push('Forced-colors emulation retains the focused file-type button outline.');
    await page.setViewport({ width: 320, height: 800 });
    await go('/doccenter/help/');
    await page.click('.dc-help-contents summary');
    assert.ok(await page.$eval('.dc-help-contents', e => e.open));
    assert.equal(await page.$$eval('main h1', e => e.length), 1);
    assert.equal(await page.$$eval('main h2', e => e.length), 10);
    assert.ok(await page.$eval('main .usa-button', e => e.textContent.trim() === 'Return to Document Center'));
    evidence.checks.push('Mobile Help contents opens; one H1, ten H2 sections, and named return link.');
    const { execFile } = require('node:child_process');
    await new Promise((resolve, reject) => execFile(process.execPath, [path.join(__dirname, 'test-document-center.js')], { env: { ...process.env, DC_BASE_URL: base } }, (error, stdout, stderr) => {
      if (error) reject(new Error(stdout + stderr));
      else { console.log(stdout.trim()); resolve(); }
    }));
    evidence.checks.push('Existing Document Center functional browser regression suite passed.');
    console.log('Document Center accessibility regression checks passed');
  } finally {
    const destination = process.env.DC_A11Y_REPORT || '/tmp/document-center-accessibility-results.json';
    fs.writeFileSync(destination, JSON.stringify(evidence, null, 2));
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
