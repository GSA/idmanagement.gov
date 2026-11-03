// Entry point: selection, history and panel state. Rendering has no navigation side effects.
import {createModel, searchAuthorities, displayName, officialName, hasDistinctOfficialName, escapeHTML as esc} from './model.js';
import {globalBranchOwners} from './layout.js';
import {loadGraph, directoryHTML} from './data.js';
import {renderAtlas} from './render.js';
import {renderDetails, formatDate} from './details.js';
import {GraphInteractions} from './interactions.js';
import {GraphTransition} from './transition.js';

const element = id => document.getElementById(id);
const embedded = parent !== window;
const EMBEDDED_HEIGHT = 700;

let model, state, owners, interactions, transition;
let historyTrail = [];
let expanded = false;
let overlay = '';
let resizeJob, lastSize = '';

const name = key => displayName(model.nodes.get(key));
const navigationKey = value => [value.ca, value.view].join('/');
const snapshot = () => ({...state});

function read(search) {
  const parameters = new URLSearchParams(search);
  const ca = model.nodes.has(parameters.get('ca')) ? parameters.get('ca') : model.anchor;
  return {
    ca,
    view: ca === model.anchor && parameters.get('view') !== 'focus' ? 'overview' : 'focus'
  };
}

function query() {
  return '?' + new URLSearchParams({ca: state.ca, view: state.view});
}

function write(replace = false) {
  const search = query();
  if (embedded) {
    if (typeof parent.fpkiCommitState === 'function') parent.fpkiCommitState(window, search, replace);
    else parent.postMessage({type: 'fpki-state', search, replace}, location.origin);
  } else if (location.search !== search) {
    history[replace ? 'replaceState' : 'pushState']({}, '', location.pathname + search);
  }
}

function restore(search) {
  const next = read(search);
  if (navigationKey(state) !== navigationKey(next)) {
    const index = historyTrail.map(navigationKey).lastIndexOf(navigationKey(next));
    if (index >= 0) historyTrail = historyTrail.slice(0, index);
    else historyTrail.push(snapshot());
    state = next;
    setPanel();
    render({animate: true});
  }
  // Normalize restored links too, including retired scope parameters.
  write(true);
}

function announce(text) {
  element('live-status').textContent = '';
  setTimeout(() => { element('live-status').textContent = text; }, 25);
}

function select(key, {focus = false} = {}) {
  if (!model.nodes.has(key)) return;
  if (state.ca === key && state.view === 'focus') return;
  if (state.ca !== key || state.view !== 'focus') historyTrail.push(snapshot());
  state.ca = key;
  state.view = 'focus';
  setPanel();
  render({animate: true, focus});
  write();
  announce(name(key));
}

function whole() {
  historyTrail.push(snapshot());
  state.ca = model.anchor;
  state.view = 'overview';
  setPanel();
  render({animate: true});
  write();
}

function setPanel(panel = '', browse = false) {
  if (panel) transition.clear();
  interactions?.reset();
  overlay = panel;
  const search = panel === 'search', details = panel === 'details';
  element('search-results').hidden = !search;
  element('details-panel').hidden = !details;
  element('surface').hidden = !!panel;
  element('details').setAttribute('aria-expanded', String(details));
  element('search').setAttribute('aria-expanded', String(search));
  element('browse').setAttribute('aria-expanded', String(search && browse));
}

function showSearch(browse = false) {
  setPanel('search', browse);
  const keys = searchAuthorities(model, browse ? '' : element('search').value);
  element('result-heading').textContent = keys.length === model.nodes.size ? `All ${keys.length} authorities`
    : `${keys.length} ${keys.length === 1 ? 'matching authority' : 'matching authorities'}`;
  element('result-list').innerHTML = keys.length ? keys.map(key => {
    const exactName = officialName(model.nodes.get(key));
    const issuers = model.incoming.get(key);
    const context = issuers.length ? 'Issued by ' + issuers.map(name).join(' · ')
      : key === model.anchor ? 'COMMON · ecosystem anchor' : 'No issuer recorded in this source';
    return `<li><button type="button" data-select="${key}">${esc(name(key))}
      ${hasDistinctOfficialName(model.nodes.get(key)) ? `<span>Official name: ${esc(exactName)}</span>` : ''}
      <span>${esc(context)}</span></button></li>`;
  }).join('') : '<li><p class="loading">No matching authorities. Try a shorter name or Browse.</p></li>';
}

function showDetails({focus = false} = {}) {
  setPanel('details');
  const view = renderDetails(model, state);
  element('details-heading').textContent = view.heading;
  element('details-body').innerHTML = view.html;
  element('details-panel').scrollTop = 0;
  if (focus) {
    element('details-heading').tabIndex = -1;
    element('details-heading').focus({preventScroll: true});
  }
}

async function copy() {
  const root = embedded ? parent.location : location;
  const url = root.origin + root.pathname + query() + '#fpki-graph';
  try {
    await navigator.clipboard.writeText(url);
    element('copy').textContent = 'Copied';
    setTimeout(() => { element('copy').textContent = 'Copy link'; }, 1800);
  } catch {
    showDetails();
    const paragraph = document.createElement('p');
    const input = document.createElement('input');
    input.value = url;
    input.readOnly = true;
    input.setAttribute('aria-label', 'Authority link to copy');
    input.style.width = '100%';
    paragraph.append(input);
    element('details-body').prepend(paragraph);
    input.focus();
    input.select();
  }
}

function focusSelector(target) {
  if (target?.matches('.atlas-point')) return `.atlas-point[data-atlas-id="${target.dataset.atlasId}"]`;
  if (target?.matches('.branch-label')) return `.branch-label[data-atlas-id="${target.dataset.atlasId}"]`;
  if (target?.hasAttribute('data-select')) return `[data-select="${target.dataset.select}"]:not(.atlas-point)`;
  if (target?.hasAttribute('data-selected-heading')) return '[data-selected-heading]';
  return null;
}

function render({animate = false, focus = false, resize = false} = {}) {
  const surface = element('surface');
  const scroll = resize ? surface.scrollTop : 0;
  const restoreFocus = resize ? focusSelector(document.activeElement) : null;
  element('source-date').textContent = `Graph · ${formatDate(model.data.sourceDate)}`;
  element('back').disabled = !historyTrail.length;
  element('whole').disabled = state.ca === model.anchor && state.view === 'overview';
  if (surface.hidden && overlay) {
    if (overlay === 'details') showDetails();
    return;
  }
  const previous = animate ? transition.capture() : null;
  transition.finish();
  interactions.reset();
  document.body.dataset.narrow = String(surface.clientWidth < 640);
  const viewport = {width: surface.clientWidth, height: surface.clientHeight, expanded};
  let view = renderAtlas(model, state, owners, viewport);
  surface.innerHTML = view.html;
  if (expanded && viewport.width >= 640) {
    // Expanded layouts use the actual context height, including wrapped names.
    // Measure before drawing the transition so it starts at the final size.
    viewport.contextHeight = surface.querySelector('.graph-context').getBoundingClientRect().height;
    view = renderAtlas(model, state, owners, viewport);
    surface.innerHTML = view.html;
  }
  surface.scrollTop = scroll;
  transition.show(view.scene, previous);
  if (focus) surface.querySelector('[data-selected-heading]')?.focus({preventScroll: true});
  else if (restoreFocus) surface.querySelector(restoreFocus)?.focus({preventScroll: true});
}

function scheduleResize() {
  if (!model || element('surface').hidden) return;
  const surface = element('surface');
  // Below the side-label breakpoint, geometry depends only on width. A taller
  // context/iframe must not interrupt movement by requesting the same layout.
  const height = surface.clientWidth < 640 ? 0 : surface.clientHeight;
  const size = [surface.clientWidth, height, expanded].join('/');
  if (size === lastSize) return;
  lastSize = size;
  cancelAnimationFrame(resizeJob);
  resizeJob = requestAnimationFrame(() => render({resize: true}));
}

function bindControls() {
  element('search-form').addEventListener('submit', event => {
    event.preventDefault();
    const matches = searchAuthorities(model, element('search').value);
    if (matches.length === 1) select(matches[0], {focus: true});
    else showSearch();
  });
  element('search').addEventListener('input', () => showSearch());
  element('browse').addEventListener('click', () => {
    if (overlay === 'search' && element('browse').getAttribute('aria-expanded') === 'true') {
      setPanel();
      render({resize: true});
    } else showSearch(true);
  });
  element('close-search').addEventListener('click', () => {
    setPanel(); render({resize: true}); element('search').focus();
  });
  element('close-details').addEventListener('click', () => {
    setPanel(); render({resize: true}); element('details').focus();
  });
  element('details').addEventListener('click', () => {
    if (overlay === 'details') { setPanel(); render({resize: true}); }
    else showDetails({focus: true});
  });
  element('copy').addEventListener('click', copy);
  element('whole').addEventListener('click', whole);
  element('back').addEventListener('click', () => {
    if (!historyTrail.length) return;
    state = historyTrail.pop();
    setPanel(); render({animate: true, focus: true}); write();
  });
  document.addEventListener('click', event => {
    const target = event.target.closest('[data-select]');
    if (!target) return;
    event.preventDefault();
    select(target.dataset.select, {focus: event.detail === 0});
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    event.preventDefault();
    event.stopPropagation();
    if (interactions.dismissName()) return;
    if (overlay) {
      const returnTo = overlay === 'details' ? 'details' : 'search';
      setPanel(); render({resize: true}); element(returnTo).focus();
    } else if (expanded && embedded) parent.postMessage({type: 'fpki-close-expanded'}, location.origin);
  });
}

function bindPresentation() {
  addEventListener('message', event => {
    if (event.origin !== location.origin || event.source !== parent || !event.data) return;
    const message = event.data;
    if (message.type === 'fpki-presentation') {
      expanded = !!message.expanded;
      document.body.dataset.expanded = String(expanded);
      element('widget').style.setProperty('--widget-height',
        (expanded && Number.isFinite(message.height) ? Math.max(250, message.height) : EMBEDDED_HEIGHT) + 'px');
      scheduleResize();
    }
    if (message.type === 'fpki-restore' && typeof message.search === 'string') restore(message.search);
  });
  if (!embedded) addEventListener('popstate', () => restore(location.search));
  new ResizeObserver(scheduleResize).observe(element('surface'));
  document.fonts.ready.then(() => render({resize: true}));
  const reportHeight = () => {
    if (embedded && !expanded) parent.postMessage({type: 'fpki-height',
      height: Math.ceil(element('widget').getBoundingClientRect().height)}, location.origin);
  };
  new ResizeObserver(reportHeight).observe(element('widget'));
  if (embedded) {
    parent.postMessage({type: 'fpki-ready'}, location.origin);
    reportHeight();
  }
}

async function boot() {
  document.documentElement.classList.remove('no-js');
  let data;
  try {
    data = await loadGraph(element('widget').dataset);
    model = createModel(data);
    owners = globalBranchOwners(model);
    state = read(location.search);
    interactions = new GraphInteractions(element('surface'), model, select);
    transition = new GraphTransition(element('surface'), () => {
      interactions.reset();
      interactions.update();
    });
    render(); write(true);
    bindControls();
    bindPresentation();
  } catch (error) {
    transition?.destroy();
    interactions?.destroy();
    element('surface').innerHTML = data
      ? '<div class="fallback"><h2>Certificate relationships</h2><p>The interactive view is unavailable. The published relationships are listed below.</p>' + directoryHTML(data) + '</div>'
      : element('load-fallback').innerHTML;
    console.error(error);
  }
}

boot();
