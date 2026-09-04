import { createC2pa } from '@contentauth/c2pa-web';

const supported = new Set(['gif', 'jpeg', 'jpg', 'png', 'svg', 'webp']);
const minimumOverlayDimension = 96;
const resultCache = new Map();
let sdkPromise;
let imageModalDisclosure;

const el = (name, value, className) => {
  const node = document.createElement(name);
  if (value != null) node.textContent = String(value);
  if (className) node.className = className;
  return node;
};
const shown = (value) => value == null || value === '' ? 'Not provided' : String(value);

async function detectedMime(blob) {
  const bytes = new Uint8Array(await blob.slice(0, 12).arrayBuffer());
  if (bytes.length >= 8 && [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a].every((value, index) => bytes[index] === value)) return 'image/png';
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return 'image/jpeg';
  return blob.type;
}

function details(entries) {
  const list = el('dl', null, 'c2pa-details');
  for (const [term, value] of entries.filter(([, value]) => value != null && value !== '')) {
    list.append(el('dt', term), el('dd', shown(value)));
  }
  return list;
}

const validationItems = (value) => {
  if (!value || typeof value !== 'object') return [];
  if (Array.isArray(value)) return value.flatMap(validationItems);
  const own = value.code ? [value] : [];
  return own.concat(Object.values(value).flatMap(validationItems));
};

const hasCode = (items, pattern) => items.some((item) => pattern.test(String(item?.code ?? '')));

function runtimeEnvironment() {
  const local = new Set(['localhost', '127.0.0.1', '::1']).has(location.hostname);
  const testCredential = document.body.dataset.c2paTestCredential === 'true';
  let configuredHostname = '';
  try { configuredHostname = new URL(document.body.dataset.c2paSiteUrl).hostname; } catch {}
  if (local) return { name: 'Local development', local, staging: false, production: false, testCredential };
  if (testCredential || location.hostname !== configuredHostname) {
    return { name: 'Staging experiment', local: false, staging: true, production: false, testCredential };
  }
  return { name: 'Production', local: false, staging: false, production: true, testCredential };
}

function normalize(url, title, store) {
  const manifests = store?.manifests ?? {};
  const activeLabel = store?.active_manifest ?? null;
  const active = manifests[activeLabel] ?? {};
  const validation = store?.validation_status ?? [];
  const checks = validationItems(store?.validation_results);
  const state = shown(store?.validation_state, 'Unknown');
  const failures = [...validation, ...checks.filter((item) => /failure/i.test(String(item?.kind ?? '')))]
    .filter((item, index, all) => index === all.findIndex((entry) => entry?.code === item?.code && entry?.explanation === item?.explanation));
  const untrusted = hasCode([...validation, ...checks], /signingCredential\.untrusted/i);
  const trusted = hasCode(checks, /signingCredential\.trusted/i);
  const signatureValid = hasCode(checks, /claimSignature\.validated/i);
  const bindingValid = hasCode(checks, /assertion\.(?:dataHash|bmffHash|boxHash)\.match/i);
  const timestampTrusted = hasCode(checks, /timeStamp\.(?:trusted|validated)/i);
  const malformed = hasCode([...validation, ...checks], /(?:malformed|mismatch|invalid|error)/i);
  const invalid = state.toLowerCase() === 'invalid' || malformed;
  const wellFormed = !invalid && (['valid', 'trusted'].includes(state.toLowerCase()) || signatureValid || bindingValid);
  const assertions = active.assertions ?? [];
  const actions = assertions
    .filter((item) => String(item?.label ?? '').startsWith('c2pa.actions'))
    .flatMap((item) => item?.data?.actions ?? item?.value?.actions ?? []);
  return { url, title, store, activeLabel, active, validation, checks, failures, state, invalid, wellFormed, untrusted, trusted, signatureValid, bindingValid, timestampTrusted, assertions, actions, ingredients: active.ingredients ?? [] };
}

async function inspect(url, title) {
  const canonical = new URL(url, location.href).href;
  if (resultCache.has(canonical)) return resultCache.get(canonical);
  const work = (async () => {
    const response = await fetch(canonical, { credentials: 'same-origin', cache: 'force-cache' });
    if (!response.ok) throw new Error(`Asset request failed (${response.status})`);
    const blob = await response.blob();
    sdkPromise ??= createC2pa({ wasmSrc: `${location.origin}/assets/c2pa/c2pa_bg.wasm` });
    const reader = await (await sdkPromise).reader.fromBlob(await detectedMime(blob), blob);
    if (!reader) return { url: canonical, title, unsigned: true };
    try { return normalize(canonical, title, await reader.manifestStore()); }
    finally { await reader.free(); }
  })();
  resultCache.set(canonical, work);
  return work;
}

function setView(title, content) {
  const heading = document.querySelector('#c2pa-dialog-title');
  heading.textContent = title;
  document.querySelector('#c2pa-dialog-content').replaceChildren(content);
}

function status(model, environment) {
  const block = el('section', null, `c2pa-status${model.invalid ? ' c2pa-status--invalid' : ''}`);
  block.append(el('h3', model.invalid ? 'Validation problem' : 'Content Credential found'));
  const signerTrust = environment.testCredential || model.untrusted
    ? 'Not trusted—SDK test certificate'
    : (model.trusted || model.state.toLowerCase() === 'trusted' ? 'Trusted' : 'Not established');
  block.append(details([
    ['Environment', environment.name],
    ['Well-formed', model.invalid ? 'No' : (model.wellFormed ? 'Yes' : 'Not established')],
    ['Signature valid', model.signatureValid ? 'Yes' : 'Not established'],
    ['Media binding valid', model.bindingValid ? 'Yes' : 'Not established'],
    ['Signer trust', signerTrust]
  ]));
  return block;
}

function actionName(value) {
  return String(value ?? '').replace(/^c2pa\./, '').replace(/([a-z])([A-Z])/g, '$1 $2');
}

function byteSize(value) {
  if (!Number.isFinite(value) || value < 0) return null;
  if (value < 1024) return `${value} bytes`;
  const units = ['KB', 'MB', 'GB'];
  let size = value / 1024;
  let unit = units[0];
  for (let index = 1; size >= 1024 && index < units.length; index += 1) {
    size /= 1024;
    unit = units[index];
  }
  return `${size.toFixed(size >= 10 ? 1 : 2)} ${unit}`;
}

function readableDate(value) {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.valueOf()) ? String(value) : date.toLocaleString();
}

async function imageMetadata(url, title, image) {
  const response = await fetch(url, { credentials: 'same-origin', cache: 'force-cache' });
  if (!response.ok) throw new Error(`File request failed (${response.status})`);
  const blob = await response.blob();
  let credential;
  try { credential = await inspect(url, title); } catch {}
  const inception = credential?.actions?.find((item) => item.action === 'c2pa.created') ?? credential?.actions?.[0];
  const signature = credential?.active?.signature_info ?? {};
  return [
    ['Alt text', title],
    ['File name', decodeURIComponent(new URL(url, location.href).pathname.split('/').pop())],
    ['File type', blob.type || response.headers.get('content-type')],
    ['File size', byteSize(blob.size)],
    ['Image dimensions', image.naturalWidth && image.naturalHeight ? `${image.naturalWidth} × ${image.naturalHeight} pixels` : null],
    ['Displayed dimensions', `${Math.round(image.getBoundingClientRect().width)} × ${Math.round(image.getBoundingClientRect().height)} pixels`],
    ['Creation date', readableDate(inception?.when) || 'Not provided by this static asset'],
    ['Last modified', readableDate(response.headers.get('last-modified')) || 'Not provided by the server'],
    [credential?.timestampTrusted ? 'Trusted signing time' : 'Signing time', readableDate(signature.time ?? signature.timestamp)],
    ['Media URL', new URL(url, location.href).href]
  ];
}

function prepareImageModal(image, url, title) {
  const preview = document.querySelector('#image-details-preview');
  const heading = document.querySelector('#image-details-title');
  const panel = document.querySelector('#image-details-panel');
  const fields = document.querySelector('#image-details-fields');
  const info = document.querySelector('#image-details-info');
  if (!preview || !heading || !panel || !fields || !info) return;
  imageModalDisclosure = image.closest('.c2pa-media')?.querySelector('.c2pa-l1') ?? null;
  preview.src = url;
  preview.alt = title;
  heading.textContent = title || 'Image details';
  panel.hidden = true;
  info.setAttribute('aria-expanded', 'false');
  info.title = 'Show image information';
  fields.replaceChildren(el('p', 'Loading file information…'));
  imageMetadata(url, title, image)
    .then((entries) => fields.replaceChildren(details(entries)))
    .catch((error) => fields.replaceChildren(el('p', `File information unavailable: ${shown(error.message)}`)));
}

function enableImageModal(image, url, title) {
  image.classList.add('image-details-trigger');
  image.tabIndex = 0;
  image.setAttribute('role', 'button');
  image.setAttribute('aria-haspopup', 'dialog');
  image.setAttribute('aria-controls', 'image-details-modal');
  image.setAttribute('data-open-modal', '');
  image.setAttribute('aria-label', `View ${title} and its file information`);
  image.addEventListener('click', () => prepareImageModal(image, url, title));
  image.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    image.click();
  });
}

function imageViewerEligible(image, url) {
  const path = new URL(url, location.href).pathname;
  const filename = path.split('/').pop();
  return !image.matches('.usa-icon, .usa-banner__icon, [class*="icon" i]') &&
    !/\/(icons?|sprites?|favicons?|material-icons|usa-icons(?:-bg)?|logo|illustrations?)\//i.test(path) &&
    !/^(icon[-_.]|sprite[-_.]|favicon[-_.]|logo[-_.]|us_flag|dot-gov|https)/i.test(filename);
}

function initializeImageInfoPanel() {
  const info = document.querySelector('#image-details-info');
  const panel = document.querySelector('#image-details-panel');
  const credentials = document.querySelector('#image-details-credentials');
  if (!info || !panel || !credentials) return;
  info.addEventListener('click', () => {
    const expanded = info.getAttribute('aria-expanded') === 'true';
    info.setAttribute('aria-expanded', String(!expanded));
    info.title = expanded ? 'Show image information' : 'Hide image information';
    panel.hidden = expanded;
  });
  credentials.addEventListener('click', () => {
    const disclosure = imageModalDisclosure;
    if (!disclosure) return;
    setTimeout(() => disclosure.click(), 0);
  });
}

function technicalDetails(model) {
  const signature = model.active.signature_info ?? {};
  const inception = model.actions.find((item) => item.action === 'c2pa.created') ?? model.actions[0];
  const timestamps = [signature.time, signature.timestamp, model.active.time, inception?.when].filter(Boolean);
  const section = el('details', null, 'c2pa-technical');
  section.append(el('summary', 'Technical details'));
  section.append(details([
    ['Manifest', model.activeLabel],
    ['Manifest version', model.active.claim_version],
    ['Instance ID', model.active.instance_id],
    ['Certificate subject', signature.common_name],
    ['Certificate issuer', signature.issuer],
    ['Signature algorithm', signature.alg],
    ['Inception action', actionName(inception?.action)],
    ['Digital source', inception?.digitalSourceType],
    [model.timestampTrusted ? 'Trusted timestamp' : 'Signing time (not trust-verified)', timestamps[0]],
    ['Assertions', model.assertions.length],
    ['Assertion types', model.assertions.map((item) => item.label).filter(Boolean).join(', ')],
    ['Ingredients', model.ingredients.length],
    ['Ingredient assets', model.ingredients.map((item) => item.title).filter(Boolean).join(', ')]
  ]));
  const messages = [...model.validation, ...model.checks]
    .filter((item, index, all) => index === all.findIndex((entry) => entry?.code === item?.code && entry?.explanation === item?.explanation));
  if (messages.length) {
    const list = el('ul', null, 'c2pa-validation-list');
    for (const item of messages) list.append(el('li', `${shown(item.code)}: ${shown(item.explanation)}`));
    section.append(el('h3', 'Validation results'), list);
  }
  return section;
}

function renderSummary(model) {
  const environment = runtimeEnvironment();
  const view = document.createDocumentFragment();
  view.append(status(model, environment));
  if (environment.testCredential || model.untrusted) {
    view.append(el('p', 'Experimental credential: the signature and media binding can be validated, but the SDK test signer is not production trusted.', 'c2pa-warning'));
  }
  const generators = (model.active.claim_generator_info ?? []).map((item) => item.name).filter(Boolean).join(', ');
  const inception = model.actions.find((item) => item.action === 'c2pa.created') ?? model.actions[0];
  const signature = model.active.signature_info ?? {};
  const timestamp = signature.time ?? signature.timestamp ?? model.active.time ?? inception?.when;
  view.append(details([
    ['Asset', model.title], ['Signed by', generators || model.active.claim_generator],
    ['Inception', actionName(inception?.action)],
    ['Source type', inception?.digitalSourceType],
    ['Actions', model.actions.map((item) => actionName(item.action)).filter(Boolean).join(', ')],
    [model.timestampTrusted ? 'Trusted timestamp' : 'Signing time (not trust-verified)', timestamp]
  ]));
  if (environment.local || environment.staging) view.append(technicalDetails(model));
  const inspectUrl = new URL('https://contentauthenticity.adobe.com/inspect');
  const requestedAsset = new URL(model.url);
  const configuredSiteUrl = document.body.dataset.c2paSiteUrl;
  const assetOrigin = environment.production ? (configuredSiteUrl || location.origin) : location.origin;
  const inspectAsset = new URL(`${requestedAsset.pathname}${requestedAsset.search}`, assetOrigin);
  inspectUrl.searchParams.set('source', inspectAsset.href);
  const link = el('a', 'View L3 in Adobe Inspect', 'usa-button usa-link--external');
  link.href = inspectUrl.href;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', `View detailed Content Credentials for ${model.title} in Adobe Inspect (opens in a new tab)`);
  if (environment.local) {
    view.append(el('p', 'Local validation is shown above. Adobe Inspect cannot retrieve a localhost URL; deploy the asset or upload it manually for external inspection.', 'c2pa-l3-note'));
  } else {
    view.append(link);
  }
  setView('Content Credentials', view);
}

async function open(button) {
  setView('Content Credentials', el('p', 'Reading Content Credentials…'));
  try {
    const model = await inspect(button.dataset.url, button.dataset.title);
    if (model.unsigned) setView(`Content Credentials for ${model.title}`, el('p', 'No Content Credential was found.'));
    else renderSummary(model);
  } catch (error) {
    setView('Content Credentials unavailable', el('p', `Unable to inspect this asset: ${shown(error.message)}`));
  }
}

function disclosureButton(url, title) {
  const button = el('button', null, 'c2pa-l1');
  const icon = el('img', null, 'c2pa-l1__icon');
  icon.src = '/assets/c2pa/content-credentials-icon.svg';
  icon.alt = '';
  icon.width = 36;
  icon.height = 36;
  icon.setAttribute('aria-hidden', 'true');
  button.append(icon);
  button.append(el('span', 'Content Credentials', 'c2pa-l1__title'));
  button.type = 'button';
  button.dataset.url = url;
  button.dataset.title = title;
  button.setAttribute('aria-haspopup', 'dialog');
  button.setAttribute('aria-controls', 'c2pa-image-modal');
  button.setAttribute('data-open-modal', '');
  button.classList.add('usa-tooltip');
  button.dataset.position = 'top';
  button.title = 'Content Credentials:\nActivate for verification details.';
  button.setAttribute('aria-label', `Content Credentials for ${title}`);
  button.addEventListener('click', () => open(button));
  return button;
}

function eligibleUrl(url) {
  const parsed = new URL(url, location.href);
  const path = parsed.pathname;
  const filename = path.split('/').pop();
  return parsed.origin === location.origin && supported.has(path.split('.').pop().toLowerCase()) &&
    !/\/(sprites?|favicons?|material-icons|usa-icons(?:-bg)?|logo|illustrations?)\//i.test(path) &&
    !/^(sprite[-_.]|favicon[-_.]|logo[-_.]|us_flag|dot-gov|https)/i.test(filename);
}

function initialize() {
  if (document.body.dataset.c2paEnabled !== 'true') return;
  document.querySelectorAll('img[alt]').forEach((image) => {
    const url = image.currentSrc || image.src;
    const path = new URL(url, location.href).pathname;
    if (!image.alt.trim() || image.matches('.usa-icon, .usa-banner__icon') || image.closest('header, nav, footer, [role="navigation"], [data-c2pa-exclude]') || image.dataset.c2paExclude != null || !eligibleUrl(url)) return;
    if (image.closest('a[href], [role="link"]')) return;
    const wrapper = el('span', null, 'c2pa-media');
    const updatePlacement = () => {
      const bounds = image.getBoundingClientRect();
      wrapper.style.width = `${Math.ceil(bounds.width)}px`;
      wrapper.classList.toggle('c2pa-media--compact', bounds.width < minimumOverlayDimension || bounds.height < minimumOverlayDimension);
    };
    updatePlacement();
    image.parentNode.insertBefore(wrapper, image);
    wrapper.append(image);
    wrapper.append(disclosureButton(url, image.alt.trim()));
    if (imageViewerEligible(image, url)) enableImageModal(image, url, image.alt.trim());
    if ('ResizeObserver' in window) new ResizeObserver(updatePlacement).observe(image);
  });

}

initializeImageInfoPanel();
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize);
else initialize();
