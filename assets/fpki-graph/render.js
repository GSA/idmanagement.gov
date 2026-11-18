import {displayName, routeToCommon, escapeHTML as esc} from './model.js';
import {rootedGraph, radialEdge} from './layout.js';
import {wrapLabel} from './labels.js';

const SIDE_LABEL_BREAKPOINT = 640;
const CONTEXT_HEIGHT = 155; // Room for the title, summary and issuer context.
const ROOT_RADIUS = 23;
const BRANCH_RADIUS = 10;
const DESCENDANT_RADIUS = 3.7;

const name = (model, key) => displayName(model.nodes.get(key));
const color = (owners, key, fallback) => owners.get(key)?.color || fallback;

export const quantity = (count, noun) =>
  `${count} ${count === 1 ? noun : noun === 'authority' ? 'authorities' : noun + 's'}`;

function authorityButton(model, key) {
  return `<button type="button" data-select="${key}">${esc(name(model, key))}</button>`;
}

export function authorityList(model, keys) {
  return `<div class="relationship-list">${keys.map(key => authorityButton(model, key)).join('')}</div>`;
}

function authorityHeader(model, state, scene) {
  const {selected: key, tree, leaf, issuer} = scene;
  const node = model.nodes.get(key);
  const attributes = node.identityAttributes || {};
  const incoming = model.incoming.get(key);
  const generic = new Set(['certification authorities', 'pki', 'fpki', 'certservers', 'u.s. government']);
  const fields = [
    ...(attributes.organizational_unit_name || []),
    ...(attributes.organization_name || [])
  ].filter(value => !generic.has(value.toLowerCase()));
  const affiliation = [...new Set(fields)]
    .filter(value => !node.label.toLowerCase().includes(value.toLowerCase())).join(' · ');
  const issuers = incoming.length ? incoming.map(issuer => `
      <button type="button" class="issuer-node" data-select="${issuer}" data-atlas-id="${issuer}"
        aria-label="Go to issuer: ${esc(name(model, issuer))}">
        <span class="issuer-dot" aria-hidden="true">↑</span>${esc(name(model, issuer))}
      </button>`).join(' ') : key === model.anchor
    ? 'No issuer listed · COMMON root authority' : 'No issuer recorded in this source';
  return `<div class="graph-context">
    <nav class="context-path atlas-path" aria-label="Certificate issuance sequence">${contextPath(model, state)}</nav>
    <h2 class="surface-title" data-selected-heading tabindex="-1">${esc(name(model, key))}</h2>
    <p class="surface-caption">Shown: ${quantity(tree.keys.length, 'authority')} · ${quantity(tree.edges.length, 'directed relationship')}${leaf && issuer ? ' · includes issuer and peers' : ''}</p>
    <div class="authority-about">
      ${affiliation ? `<p class="authority-affiliation">Affiliation: ${esc(affiliation)}</p>` : ''}
      <p class="issuer-context">Certificate issuer: ${issuers}</p>
      <p class="authority-terms">CA: certification authority · SSP: shared service provider</p>
    </div>
    <p id="atlas-keyboard-help" class="sr-only">Use arrow keys to move between graph points. Press Enter to select an authority, or Escape to dismiss its name. Find and Browse also list all authorities.</p>
  </div>`;
}

function contextPath(model, state) {
  return routeToCommon(model, state.ca).map((key, index) => {
    const text = esc(key === model.anchor ? 'COMMON' : name(model, key));
    const item = key === state.ca ? `<span>${text}</span>` : `<button data-select="${key}">${text}</button>`;
    return `${index ? '<span aria-hidden="true">→</span>' : ''}${item}`;
  }).join('');
}

export function createScene(model, state, viewport) {
  const selected = state.view === 'overview' ? model.anchor : state.ca;
  const leaf = !model.outgoing.get(selected).length;
  const issuer = model.incoming.get(selected)[0];
  // Show a leaf with its issuer and peers instead of an empty diagram.
  const root = leaf && issuer ? issuer : selected;
  const tree = rootedGraph(model, root);
  if (leaf) {
    tree.keys = tree.keys.filter(key => tree.depth.get(key) <= 1);
    const visible = new Set(tree.keys);
    tree.edges = tree.edges.filter(edge => visible.has(edge.source) && visible.has(edge.target));
    tree.maxDepth = Math.min(1, tree.maxDepth);
  }

  const width = Math.max(240, viewport.width - 2);
  const fitWindow = viewport.expanded && width >= SIDE_LABEL_BREAKPOINT;
  const availableHeight = viewport.height - (viewport.contextHeight ?? CONTEXT_HEIGHT);
  const labelWidth = Math.max(145, Math.min(250, width * .235));
  const labels = tree.branches.map((key, index) => ({
    key, number: index + 1, angle: tree.angle.get(key),
    height: Math.max(34, wrapLabel(name(model, key), Math.floor((labelWidth - 40) / 6.6)).length * 17 + 10)
  }));
  const sides = ['left', 'right'].map(side => labels
    .filter(label => (Math.cos(label.angle) >= 0 ? 'right' : 'left') === side)
    .sort((a, b) => Math.sin(a.angle) - Math.sin(b.angle)));
  const labelHeight = Math.max(0, ...sides.map(list =>
    list.reduce((sum, label) => sum + label.height, 0) + Math.max(0, list.length - 1) * 4));
  const flanked = width >= SIDE_LABEL_BREAKPOINT && labelHeight <= availableHeight - 10;
  const height = tree.keys.length === 1 ? 180 : flanked
    ? Math.max(fitWindow ? 180 : 355, availableHeight) : Math.min(365, Math.max(230, width * .68));
  const radius = flanked
    ? Math.max(80, Math.min((width - labelWidth * 2 - 48) / 2, (height - (fitWindow ? 24 : 70)) / 2))
    : Math.min(width * .4, (height - 45) / 2);
  const cx = width / 2, cy = height / 2;
  const positions = new Map();
  for (const key of tree.keys) {
    const depth = tree.depth.get(key);
    const r = depth ? radius * (.24 + .76 * depth / (tree.maxDepth || 1)) : 0;
    const angle = tree.angle.get(key);
    const branchIndex = tree.branches.indexOf(key);
    positions.set(key, {key, x: cx + Math.cos(angle) * r, y: cy + Math.sin(angle) * r,
      r, angle, depth, number: branchIndex >= 0 ? branchIndex + 1 : null});
  }
  if (flanked) sides.forEach((list, index) => {
    let y = (height - list.reduce((sum, label) => sum + label.height, 0) - Math.max(0, list.length - 1) * 4) / 2;
    for (const label of list) {
      label.x = index === 0 ? 10 : width - labelWidth - 10;
      label.y = y;
      y += label.height + 4;
    }
  });
  return {selected, root, leaf, issuer, tree, width, height, radius, cx, cy,
    positions, labels, flanked, labelWidth};
}

function pointMarkup(model, state, scene, owners, point) {
  const current = point.key === state.ca;
  const tag = current ? 'g' : 'a';
  const radius = point.depth === 0 ? ROOT_RADIUS : point.number ? BRANCH_RADIUS : DESCENDANT_RADIUS;
  const branchColor = color(owners, point.key, '#4f8191');
  const navigation = current ? 'role="group" aria-current="true"'
    : `role="button" href="?ca=${point.key}&amp;view=focus" data-select="${point.key}"`;
  const rootLabel = scene.root === model.anchor ? 'COMMON' : scene.root !== state.ca ? 'Issuer' : 'CA';
  return `<${tag} class="atlas-point ${current ? 'selected-root' : ''}" data-atlas-id="${point.key}"
    data-name-popup="${point.depth > 1}"
    tabindex="${current ? '0' : '-1'}" ${navigation}
    aria-label="${esc(name(model, point.key))}${current ? ', selected authority' : ''}">
    <circle class="point-hit" cx="${point.x}" cy="${point.y}" r="${point.depth === 0 ? 24 : 10}"/>
    <circle class="point-circle ${point.depth === 0 ? 'root-mark' : ''} ${current ? 'selected-point' : ''}"
      cx="${point.x}" cy="${point.y}" r="${radius}"
      fill="${point.depth === 0 ? '#fff8e8' : point.number ? '#fff' : branchColor}"
      stroke="${color(owners, point.key, '#a68b51')}"/>
    ${point.depth === 0
      ? `<text class="root-label" x="${point.x}" y="${point.y + 3}" text-anchor="middle">${rootLabel}</text>`
      : point.number ? `<text class="point-number" x="${point.x}" y="${point.y + 3}" fill="${branchColor}" text-anchor="middle">${String(point.number).padStart(2, '0')}</text>` : ''}
  </${tag}>`;
}

export function renderAtlas(model, state, owners, viewport) {
  const scene = createScene(model, state, viewport);
  const {root, leaf, tree, width, height, cx, cy, radius} = scene;
  const labelMarkup = label => {
    const current = label.key === state.ca;
    const tag = current ? 'span' : 'button';
    const placement = scene.flanked
      ? `left:${label.x}px;top:${label.y}px;width:${scene.labelWidth}px;min-height:${label.height}px` : '';
    return `<${tag} ${current ? 'aria-current="true"' : `type="button" data-select="${label.key}"`}
      class="branch-label ${current ? 'current-branch' : ''}" data-atlas-id="${label.key}"
      style="--branch-color:${color(owners, label.key, '#4b8191')};${placement}">
      <span class="number">${String(label.number).padStart(2, '0')}</span><span>${esc(name(model, label.key))}</span>
    </${tag}>`;
  };
  const edges = tree.edges.map(edge => {
    const path = radialEdge(scene.positions.get(edge.source), scene.positions.get(edge.target),
      {cx, cy}, tree.parent.get(edge.target) === edge.source);
    return `<path class="radial-edge" data-source="${edge.source}" data-target="${edge.target}"
      d="${path}" stroke="${color(owners, edge.target, '#5a8994')}" marker-end="url(#radial-arrow)"/>`;
  }).join('');
  const svg = `<svg class="radial-svg" viewBox="0 0 ${width} ${height}" role="group"
    aria-label="${esc(name(model, root))}: ${quantity(tree.keys.length, 'authority')} and ${quantity(tree.edges.length, 'directed relationship')}"
    aria-describedby="atlas-keyboard-help">
    <defs><marker id="radial-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M1 1L9 5L1 9" fill="none" stroke="#678993" stroke-width="1.6"/></marker></defs>
    ${[.43, .72, 1].map(value => `<circle class="ring" cx="${cx}" cy="${cy}" r="${radius * value}"/>`).join('')}
    <g aria-hidden="true">${edges}</g>
    ${[...scene.positions.values()].map(point => pointMarkup(model, state, scene, owners, point)).join('')}
  </svg>`;
  return {scene, html: `
    ${authorityHeader(model, state, scene)}
    <div class="radial-wrap" style="height:${height}px" data-visible-authorities="${tree.keys.length}" data-visible-relationships="${tree.edges.length}">
      ${svg}${scene.flanked ? scene.labels.map(labelMarkup).join('') : ''}
    </div>
    ${!scene.flanked && scene.labels.length ? `<div class="branch-list">${scene.labels.map(labelMarkup).join('')}</div>` : ''}
    ${tree.keys.length === 1 ? '<p class="map-scope-note">This map shows certificates issued between certification authorities. Certificates for people and devices are not displayed.</p>' : ''}
    ${leaf ? '<p class="map-scope-note">This map covers CA certificates. Certificates for people and devices are outside its scope.</p>' : ''}
  `};
}
