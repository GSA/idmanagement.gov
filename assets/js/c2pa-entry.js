import { createC2pa } from '@contentauth/c2pa-web';
import signedAssets from '../c2pa/signed-assets.json';

const supported = new Set(['gif', 'jpeg', 'jpg', 'png', 'svg', 'webp']);
const compactOverlayDimension = 150;
const resultCache = new Map();
let sdkPromise;
let imageModalDisclosure;
let documentCredentialTarget;
let activeDisclosure;
let requestVersion = 0;
const dropdown = () => document.querySelector('#c2pa-image-modal');

function positionDropdown() {
  if (!activeDisclosure) return;
  const panel = dropdown();
  const anchor = activeDisclosure.getBoundingClientRect();
  const margin = 8;
  const width = document.documentElement.clientWidth;
  const height = window.innerHeight;
  if (anchor.bottom < 0 || anchor.top > height) { closeDropdown(); return; }
  panel.style.maxHeight = `${height - margin * 2}px`;
  const bounds = panel.getBoundingClientRect();
  const below = height - anchor.bottom - margin * 2;
  const above = anchor.top - margin * 2;
  const placeBelow = bounds.height <= below || below >= above;
  panel.style.maxHeight = `${Math.max(140, placeBelow ? below : above)}px`;
  const panelHeight = panel.getBoundingClientRect().height;
  panel.style.left = `${Math.max(margin, Math.min(anchor.right - bounds.width, width - bounds.width - margin))}px`;
  panel.style.top = `${Math.max(margin, placeBelow ? anchor.bottom + margin : anchor.top - panelHeight - margin)}px`;
}

function closeDropdown(restoreFocus = false) {
  const trigger = activeDisclosure;
  if (!trigger) return;
  activeDisclosure = null;
  requestVersion += 1;
  trigger.setAttribute('aria-expanded', 'false');
  const panel = dropdown();
  if (panel.matches(':popover-open')) panel.hidePopover();
  panel.hidden = true;
  if (restoreFocus) trigger.focus();
}

function initializeDropdown() {
  const panel = dropdown();
  if (!panel) return;
  panel.querySelector('.c2pa-dropdown__close').addEventListener('click', () => closeDropdown(true));
  panel.addEventListener('focusout', () => setTimeout(() => {
    if (activeDisclosure && !panel.contains(document.activeElement) && document.activeElement !== activeDisclosure) closeDropdown();
  }, 0));
  panel.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab') return;
    const first = panel.querySelector('button');
    const last = panel.querySelector('a');
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      closeDropdown(true);
    } else if (!event.shiftKey && document.activeElement === last) {
      // Return to the trigger so the browser continues with the next page control.
      closeDropdown(true);
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && activeDisclosure) {
      event.preventDefault();
      closeDropdown(panel.contains(document.activeElement));
    }
  });
  document.addEventListener('pointerdown', (event) => {
    if (activeDisclosure && !panel.contains(event.target) && !activeDisclosure.contains(event.target)) closeDropdown();
  });
  window.addEventListener('resize', positionDropdown);
  document.addEventListener('scroll', positionDropdown, true);
}

const el = (name, value, className) => {
  const node = document.createElement(name);
  if (value != null) node.textContent = String(value);
  if (className) node.className = className;
  return node;
};
const shown = (value) => value == null || value === '' ? 'Not provided' : String(value);

function viewerResourceUrl(filename) {
  const basePath = (document.body.dataset.c2paBaseUrl || '').replace(/^\/+|\/+$/g, '');
  return new URL(`${basePath ? `/${basePath}` : ''}/assets/c2pa/${filename}`, location.origin).href;
}

async function detectedMime(blob, url) {
  const bytes = new Uint8Array(await blob.slice(0, 12).arrayBuffer());
  if (bytes.length >= 8 && [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a].every((value, index) => bytes[index] === value)) return 'image/png';
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return 'image/jpeg';
  if (String.fromCharCode(...bytes.slice(0, 5)) === '%PDF-') return 'application/pdf';
  if (bytes[0] === 0x50 && bytes[1] === 0x4b && url && /\.docx$/i.test(new URL(url, location.href).pathname)) {
    return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
  }
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
  const activeResults = store?.validation_results?.activeManifest;
  const activeValidation = validation.filter((item) => !item.url || item.url.includes(`/c2pa/${activeLabel}/`));
  const successes = validationItems(activeResults?.success);
  const failures = [...activeValidation, ...validationItems(activeResults?.failure)];
  const untrusted = hasCode(failures, /^signingCredential\.untrusted$/i);
  const trusted = hasCode(successes, /^signingCredential\.trusted$/i) && !untrusted;
  const signatureValid = hasCode(successes, /^claimSignature\.validated$/i);
  const bindingValid = hasCode(successes, /^assertion\.(?:dataHash|bmffHash|boxHash|boxesHash|collectionHash)\.match$/i);
  const timestampTrusted = hasCode(successes, /^timeStamp\.trusted$/i) && hasCode(successes, /^timeStamp\.validated$/i)
    && !hasCode(failures, /^timeStamp\./i);
  const invalid = state.toLowerCase() === 'invalid' || failures.some((item) => !/^signingCredential\.untrusted$/i.test(item.code));
  const wellFormed = !invalid && (['valid', 'trusted'].includes(state.toLowerCase()) || signatureValid || bindingValid);
  const historyIssues = validationItems(store?.validation_results?.ingredientDeltas)
    .concat((active.ingredients ?? []).flatMap((item) => validationItems(item.validation_results ?? item.validationResults ?? item.validation_status ?? item.validationStatus)))
    .concat(validation.filter((item) => item.url && !item.url.includes(`/c2pa/${activeLabel}/`)))
    .filter((item) => !/\.(?:match|validated|trusted|insideValidity)$/.test(item.code));
  const assertions = active.assertions ?? [];
  const actions = assertions
    .filter((item) => String(item?.label ?? '').startsWith('c2pa.actions'))
    .flatMap((item) => {
      const data = item.data ?? item.value ?? {};
      return (data.actions ?? []).map((action) => ({ ...data.templates?.find((template) => template.action === action.action), ...action }));
    });
  return { url, title, store, activeLabel, active, validation, checks, failures, historyIssues, state, invalid, wellFormed, untrusted, trusted, signatureValid, bindingValid, timestampTrusted, assertions, actions, ingredients: active.ingredients ?? [] };
}

async function inspect(url, title) {
  const canonical = new URL(url, location.href).href;
  if (resultCache.has(canonical)) return resultCache.get(canonical);
  const work = (async () => {
    const response = await fetch(canonical, { credentials: 'same-origin', cache: 'force-cache' });
    if (!response.ok) throw new Error(`Asset request failed (${response.status})`);
    const blob = await response.blob();
    sdkPromise ??= createC2pa({ wasmSrc: viewerResourceUrl('c2pa_bg.wasm') });
    const reader = await (await sdkPromise).reader.fromBlob(await detectedMime(blob, canonical), blob);
    if (!reader) return { url: canonical, title, unsigned: true };
    try { return normalize(canonical, title, await reader.manifestStore()); }
    finally { await reader.free(); }
  })();
  resultCache.set(canonical, work);
  return work;
}

function setView(title, content) {
  if (documentCredentialTarget) { documentCredentialTarget.replaceChildren(content); return; }
  const heading = document.querySelector('#c2pa-dialog-title');
  heading.textContent = title;
  document.querySelector('#c2pa-dialog-content').replaceChildren(content);
  positionDropdown();
}

function status(model) {
  const text = model.invalid ? 'The Content Credentials could not be validated.'
    : model.signatureValid && model.bindingValid ? 'Signature and content integrity verified.'
      : 'Content Credentials found; verification is incomplete.';
  const stateClass = model.invalid ? ' c2pa-status--invalid'
    : model.signatureValid && model.bindingValid ? ' c2pa-status--verified' : '';
  return el('p', text, `c2pa-status${stateClass}`);
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

function originDescription(action) {
  // Older IDM batches inserted this blanket description for every asset.
  // It does not establish the original creator or creation process.
  if (!action || action.description === 'GSA IDManagement.gov created') return 'Origin not recorded';
  if (action?.description) return action.description;
  const source = String(action?.digitalSourceType ?? '').split('/').pop();
  const descriptions = {
    digitalCapture: 'Captured with a digital device',
    softwareImage: 'Created with software',
    trainedAlgorithmicMedia: 'Generated with AI',
    compositeWithTrainedAlgorithmicMedia: 'Composite including AI-generated content',
    compositeSynthetic: 'Composite including synthetic content',
    compositeCapture: 'Composite of captured content',
    algorithmicMedia: 'Created algorithmically',
    digitalArt: 'Created as digital art',
    screenCapture: 'Screen capture',
    humanEdits: 'Edited by a person',
  };
  return descriptions[source] || (source ? actionName(source) : null) || 'Origin not recorded';
}

function manifestPublisher(model) {
  const names = new Set();
  const add = (value) => {
    if (Array.isArray(value)) value.forEach(add);
    else if (typeof value === 'string' && value.trim()) names.add(value.trim());
    else if (value && typeof value.name === 'string') add(value.name);
  };
  for (const assertion of model.assertions) {
    if (!String(assertion.label).startsWith('stds.schema-org.CreativeWork')) continue;
    const data = assertion.data ?? assertion.value ?? {};
    add(data.publisher);
  }
  return [...names].join('; ') || null;
}

function sourceDisclosures(model) {
  const aiSources = {
    trainedAlgorithmicMedia: 'Generated with AI',
    compositeWithTrainedAlgorithmicMedia: 'Includes AI-generated content',
  };
  const disclosures = new Set();
  for (const [label, manifest] of Object.entries(model.store?.manifests ?? {})) {
    for (const assertion of manifest.assertions ?? []) {
      if (!String(assertion.label).startsWith('c2pa.actions')) continue;
      const data = assertion.data ?? assertion.value ?? {};
      for (const action of data.actions ?? []) {
        const template = data.templates?.find((item) => item.action === action.action);
        const source = String(action.digitalSourceType ?? template?.digitalSourceType ?? '').split('/').pop();
        if (aiSources[source]) disclosures.add(label === model.activeLabel ? aiSources[source] : `Source history: ${aiSources[source].toLowerCase()}`);
      }
    }
  }
  return [...disclosures].join('; ');
}

function validationWarning(model) {
  if (hasCode(model.failures, /revoked/i)) return 'The signing certificate was revoked. These credentials cannot be relied on.';
  if (hasCode(model.failures, /expired|outsideValidity/i)) return 'The signing certificate or signature is outside its valid period.';
  if (hasCode(model.failures, /mismatch/i)) return 'The asset or its provenance no longer matches the signed information.';
  return 'There is a problem with these Content Credentials. Open Adobe Inspect for details.';
}

function renderSummary(model) {
  const environment = runtimeEnvironment();
  const view = document.createDocumentFragment();
  view.append(status(model));
  if (model.invalid) {
    view.append(el('p', validationWarning(model), 'c2pa-warning'));
    setView('Content Credentials', view);
    return;
  }
  if (environment.testCredential) {
    view.append(el('p', 'Signed with an SDK test certificate; not publicly trusted.', 'c2pa-warning'));
  } else if (model.untrusted) {
    view.append(el('p', 'The credential issuer is not trusted by this validator.', 'c2pa-warning'));
  } else if (!model.trusted && model.state.toLowerCase() !== 'trusted') {
    view.append(el('p', 'Signer trust has not been established.', 'c2pa-warning'));
  }
  if (model.historyIssues?.length) view.append(el('p', 'Some source history could not be verified. See Adobe Inspect for the affected records.', 'c2pa-warning'));
  const inception = model.actions.find((item) => item.action === 'c2pa.created');
  const signature = model.active.signature_info ?? {};
  const timestamp = signature.time ?? signature.timestamp;
  const sources = model.ingredients.map((item) => item.title || item.description || 'Unnamed source');
  const sourceSummary = sources.slice(0, 3).join('; ') + (sources.length > 3 ? `; and ${sources.length - 3} more` : '');
  view.append(details([
    ['Asset', model.title],
    ['Signed by', signature.common_name || 'Not identified in the certificate'],
    ['Published by', manifestPublisher(model)],
    ['Trusted timestamp', model.timestampTrusted ? readableDate(timestamp) : null],
    ['Origin', originDescription(inception)],
    ['Source disclosure', sourceDisclosures(model) || null],
    ['Sources', sourceSummary || null]
  ]));
  setView('Content Credentials', view);
}

function configureInspectLink(button) {
  const inspectUrl = new URL('https://contentauthenticity.adobe.com/inspect');
  const requestedAsset = new URL(button.dataset.url, location.href);
  const assetOrigin = document.body.dataset.c2paSiteUrl || location.origin;
  const inspectAsset = new URL(`${requestedAsset.pathname}${requestedAsset.search}`, assetOrigin);
  inspectUrl.searchParams.set('source', inspectAsset.href);
  const link = document.querySelector('#c2pa-inspect-link');
  link.href = inspectUrl.href;
  link.setAttribute('aria-label', `View more Content Credentials for ${button.dataset.title} in Adobe Inspect, level 3 (opens in a new tab)`);
}

async function open(button) {
  if (activeDisclosure === button) {
    return;
  }
  closeDropdown();
  activeDisclosure = button;
  button.setAttribute('aria-expanded', 'true');
  const panel = dropdown();
  configureInspectLink(button);
  panel.hidden = false;
  if (panel.showPopover) panel.showPopover();
  const version = ++requestVersion;
  setView('Content Credentials', el('p', 'Reading Content Credentials…'));
  try {
    const model = await inspect(button.dataset.url, button.dataset.title);
    if (version !== requestVersion) return;
    if (model.unsigned) setView('Content Credentials', el('p', 'No Content Credential was found in this asset.'));
    else renderSummary(model);
  } catch (error) {
    if (version !== requestVersion) return;
    setView('Content Credentials', el('p', `Unable to verify this asset: ${shown(error.message)}`));
  }
}

function disclosureButton(url, title) {
  const button = el('button', null, 'c2pa-l1');
  const icon = el('img', null, 'c2pa-l1__icon');
  icon.src = viewerResourceUrl('content-credentials-icon.svg');
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
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', `Content Credentials for ${title}`);
  button.addEventListener('click', () => {
    if (activeDisclosure === button) closeDropdown();
    else open(button);
  });
  button.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' || (event.key === 'Tab' && !event.shiftKey && activeDisclosure === button)) {
      event.preventDefault();
      open(button);
      dropdown().querySelector('button').focus();
    }
  });
  return button;
}

function eligibleUrl(url) {
  const parsed = new URL(url, location.href);
  const path = parsed.pathname;
  const filename = path.split('/').pop();
  return isSignedAsset(parsed) && supported.has(path.split('.').pop().toLowerCase()) &&
    !/\/(sprites?|favicons?|material-icons|usa-icons(?:-bg)?|logo|illustrations?)\//i.test(path) &&
    !/^(sprite[-_.]|favicon[-_.]|logo[-_.]|us_flag|dot-gov|https)/i.test(filename);
}

function isSignedAsset(url) {
  if (url.origin !== location.origin) return false;
  let path;
  try { path = decodeURIComponent(url.pathname); } catch { return false; }
  const base = (document.body.dataset.c2paBaseUrl || '').replace(/^\/+|\/+$/g, '');
  if (base) {
    const prefix = `/${base}/`;
    if (!path.startsWith(prefix)) return false;
    path = path.slice(prefix.length);
  } else path = path.replace(/^\//, '');
  return Object.hasOwn(signedAssets, path);
}

function initialize() {
  if (document.body.dataset.c2paEnabled !== 'true') return;
  initializePdfViewer();
  document.querySelectorAll('img[alt]').forEach((image) => {
    const url = image.currentSrc || image.src;
    const path = new URL(url, location.href).pathname;
    if (!image.alt.trim() || image.matches('.usa-icon, .usa-banner__icon') || image.closest('header, nav, footer, [role="navigation"], [data-c2pa-exclude]') || image.dataset.c2paExclude != null || !eligibleUrl(url)) return;
    const imageLink = image.closest('a[href]');
    if (image.closest('[role="link"]')) return;
    // A direct link to the image retains its original action; the disclosure
    // sits alongside the link so it remains a separate keyboard control.
    if (imageLink && (imageLink.href !== new URL(url, location.href).href || imageLink.querySelectorAll('img').length !== 1)) return;
    const preview = imageLink || image;
    const wrapper = el('span', null, 'c2pa-media');
    const updatePlacement = () => {
      const bounds = image.getBoundingClientRect();
      wrapper.style.width = `${Math.ceil(bounds.width)}px`;
      wrapper.classList.toggle('c2pa-media--compact', bounds.width <= compactOverlayDimension || bounds.height <= compactOverlayDimension);
    };
    updatePlacement();
    preview.parentNode.insertBefore(wrapper, preview);
    wrapper.append(preview);
    if (imageLink) image.style.width = '100%';
    wrapper.append(disclosureButton(url, image.alt.trim()));
    if (!imageLink && imageViewerEligible(image, url)) enableImageModal(image, url, image.alt.trim());
    if ('ResizeObserver' in window) new ResizeObserver(updatePlacement).observe(image);
  });

}

function initializePdfViewer() {
  const dialog = document.createElement('dialog');
  dialog.className = 'pdf-details-dialog';
  dialog.setAttribute('aria-labelledby', 'pdf-details-title');
  dialog.innerHTML = `<header><h2 id="pdf-details-title">File details</h2><button type="button" class="pdf-details-close document-credentials-close" aria-label="Close file details"><svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2"/></svg></button></header>
    <div class="pdf-details-body"><div class="image-details-layout">
      <div class="image-details-preview"><div id="pdf-details-preview"></div>
        <div class="image-details-actions"><button class="image-details-credentials" type="button" aria-label="View Content Credentials"><img width="32" height="32" alt=""></button><button class="image-details-info" type="button" aria-label="Show file information" aria-expanded="false" aria-controls="pdf-details-panel"><span class="image-details-info__glyph" aria-hidden="true">i</span></button></div>
      </div><aside class="image-details-panel" id="pdf-details-panel" aria-label="File information" hidden><h3>File information</h3><div class="pdf-details-fields" aria-live="polite"></div></aside>
    </div><p class="document-direct-footer"><a class="usa-button pdf-details-direct" target="_blank" rel="noopener noreferrer">Open file in a new tab</a></p></div>`;
  dialog.querySelector('.image-details-credentials img').src = viewerResourceUrl('content-credentials-icon.svg');
  document.body.append(dialog);
  const credentials = document.createElement('dialog');
  credentials.className = 'pdf-details-dialog document-credentials-dialog';
  credentials.setAttribute('aria-labelledby', 'document-credentials-title');
  credentials.innerHTML = `<header><img width="28" height="28" alt=""><h2 id="document-credentials-title">Content Credentials</h2><button type="button" class="pdf-details-close document-credentials-close" aria-label="Close Content Credentials"><svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2"/></svg></button></header><div class="pdf-details-body"><div class="document-credentials-content" aria-live="polite"></div></div><footer><a class="usa-button" target="_blank" rel="noopener noreferrer" aria-label="View more in Adobe Inspect (opens in a new tab)">View more in Adobe Inspect</a><a class="usa-button usa-button--outline document-direct-link" target="_blank" rel="noopener noreferrer" aria-label="Open original document (opens in a new tab)">Open original document</a></footer>`;
  credentials.querySelector('header img').src = viewerResourceUrl('content-credentials-icon.svg');
  document.body.append(credentials);
  let generation = 0;
  let trigger;
  let crTrigger;
  let selected;
  const preview = dialog.querySelector('#pdf-details-preview');
  const info = dialog.querySelector('.image-details-info');
  const panel = dialog.querySelector('#pdf-details-panel');
  dialog.querySelector('.pdf-details-close').addEventListener('click', () => dialog.close());
  credentials.querySelector('button').addEventListener('click', () => credentials.close());
  credentials.addEventListener('close', () => {
    // A queued close event must not cancel a newly reopened document.
    if (credentials.open) return;
    generation++;
    documentCredentialTarget = null;
    crTrigger?.focus();
  });
  dialog.addEventListener('close', () => { generation++; preview.replaceChildren(); trigger?.focus(); });
  info.addEventListener('click', () => {
    panel.hidden = !panel.hidden;
    info.setAttribute('aria-expanded', String(!panel.hidden));
    info.setAttribute('aria-label', panel.hidden ? 'Show file information' : 'Hide file information');
  });
  async function showCredentials(button, url, title) {
    closeDropdown();
    crTrigger = button;
    const version = ++generation;
    const target = credentials.querySelector('.document-credentials-content');
    documentCredentialTarget = target;
    target.textContent = 'Reading Content Credentials…';
    const inspectUrl = new URL('https://contentauthenticity.adobe.com/inspect');
    inspectUrl.searchParams.set('source', new URL(`${url.pathname}${url.search}`, document.body.dataset.c2paSiteUrl || location.origin).href);
    credentials.querySelector('a').href = inspectUrl.href;
    credentials.querySelector('.document-direct-link').href = url.href;
    credentials.showModal();
    credentials.querySelector('button').focus();
    try {
      const model = await inspect(url.href, title);
      if (version !== generation) return;
      if (model.unsigned) target.textContent = 'No Content Credential was found in this file.';
      else renderSummary(model);
    } catch (error) {
      if (version === generation) target.textContent = `Unable to verify this file: ${shown(error.message)}. This does not establish whether the file is signed.`;
    }
  }
  dialog.querySelector('.image-details-credentials').addEventListener('click', () => {
    const current = selected;
    dialog.close();
    // Let the close event restore focus before opening the next modal.
    setTimeout(() => showCredentials(current.cr, current.url, current.title), 0);
  });
  document.querySelectorAll('main a[href]').forEach((link) => {
    const url = new URL(link.href, location.href);
    if (!/\.(pdf|docx)$/i.test(url.pathname) || url.origin !== location.origin || link.closest('[data-c2pa-exclude]')) return;
    if (!isSignedAsset(url)) return;
    const title = link.textContent.trim() || decodeURIComponent(url.pathname.split('/').pop());
    const isPdf = /\.pdf$/i.test(url.pathname);
    const button = el('button', null, 'pdf-details-trigger');
    const glyph = el('span', 'i', 'document-info-glyph');
    glyph.setAttribute('aria-hidden', 'true');
    button.append(glyph);
    button.type = 'button';
    button.setAttribute('aria-haspopup', 'dialog');
    button.setAttribute('aria-label', `File information for ${title}`);
    const cr = disclosureButton(url.href, title).cloneNode(true);
    cr.removeAttribute('aria-controls');
    cr.removeAttribute('aria-expanded');
    cr.addEventListener('click', () => showCredentials(cr, url, title));
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', (event) => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      showCredentials(link, url, title);
    });
    const controls = el('span', null, 'document-link-actions');
    controls.append(cr, button);
    const group = el('span', null, 'document-link-group');
    if (isSignedAsset(url)) {
      link.before(group);
      group.append(link, controls);
    }
    const positionActions = () => {
      // The wrapper may span a whole column; anchor to the last visible text
      // fragment instead, so wrapped and block links keep nearby controls.
      const walker = document.createTreeWalker(link, NodeFilter.SHOW_TEXT);
      let lastText;
      while (walker.nextNode()) {
        if (walker.currentNode.textContent.trim()) lastText = walker.currentNode;
      }
      const range = document.createRange();
      if (lastText) {
        range.setStart(lastText, 0);
        range.setEnd(lastText, lastText.textContent.trimEnd().length);
      } else range.selectNodeContents(link);
      const fragments = [...range.getClientRects()].filter((rect) => rect.width && rect.height);
      const end = fragments.at(-1) || link.getBoundingClientRect();
      const bounds = group.getBoundingClientRect();
      const gap = 4;
      const panelWidth = controls.offsetWidth;
      const panelHeight = controls.offsetHeight;
      let left = end.right + gap;
      let center = end.top + end.height / 2;
      if (left + panelWidth > document.documentElement.clientWidth - 8) {
        left = Math.max(8, Math.min(end.right - panelWidth, document.documentElement.clientWidth - panelWidth - 8));
        center = end.bottom + gap + panelHeight / 2;
      }
      controls.style.left = `${left - bounds.left}px`;
      controls.style.top = `${center - bounds.top}px`;
    };
    group.addEventListener('pointerenter', positionActions);
    group.addEventListener('focusin', positionActions);
    if ('ResizeObserver' in window) new ResizeObserver(positionActions).observe(group);
    positionActions();
    button.addEventListener('click', async () => {
      trigger = button;
      selected = { cr, url, title };
      const version = ++generation;
      closeDropdown();
      dialog.querySelector('h2').textContent = title;
      const directLink = dialog.querySelector('.pdf-details-direct');
      directLink.href = url.href;
      directLink.onclick = isPdf ? () => dialog.close() : null;
      directLink.textContent = isPdf ? 'Open PDF' : 'Open Word document in a new tab';
      directLink.setAttribute('aria-label', isPdf ? 'Open PDF (opens in a new tab)' : 'Open Word document in a new tab');
      const directFooter = dialog.querySelector('.document-direct-footer');
      directFooter.hidden = isPdf;
      if (isPdf) dialog.querySelector('.image-details-actions').prepend(directLink);
      else directFooter.append(directLink);
      panel.hidden = true;
      info.setAttribute('aria-expanded', 'false');
      info.setAttribute('aria-label', 'Show file information');
      preview.replaceChildren();
      preview.classList.toggle('document-word-preview', !isPdf);
      if (isPdf) {
        const frame = document.createElement('iframe');
        frame.title = `PDF preview: ${title}`;
        frame.src = url.href;
        preview.append(frame);
      } else {
        const openDocument = dialog.querySelector('.pdf-details-direct').cloneNode(true);
        openDocument.className = 'usa-button document-word-open';
        openDocument.textContent = 'Download Document';
        openDocument.setAttribute('aria-label', 'Download Document (opens in a new tab)');
        preview.append(openDocument);
      }
      const fields = dialog.querySelector('.pdf-details-fields');
      const entries = [['File name', decodeURIComponent(url.pathname.split('/').pop())], ['File type', isPdf ? 'PDF' : 'Word document (.docx)'], ['File URL', url.href]];
      fields.replaceChildren(details(entries));
      dialog.showModal();
      dialog.querySelector('.pdf-details-close').focus();
      try {
        const response = await fetch(url.href, { credentials: 'same-origin', cache: 'force-cache' });
        if (!response.ok) throw new Error(`File request failed (${response.status})`);
        const blob = await response.blob();
        if (version !== generation) return;
        fields.replaceChildren(details([...entries, ['File size', byteSize(blob.size)], ['Last modified', readableDate(response.headers.get('last-modified'))]]));
      } catch (error) {
        if (version === generation) fields.append(el('p', `File information unavailable: ${shown(error.message)}`));
      }
    });
  });
}

initializeDropdown();
initializeImageInfoPanel();
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize);
else initialize();
