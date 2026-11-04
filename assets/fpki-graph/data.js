// Adapt the site's published artifacts without introducing a separate data build.
import {escapeHTML as esc} from './model.js';

const digest = async value => [...new Uint8Array(await crypto.subtle.digest('SHA-256',
  typeof value === 'string' ? new TextEncoder().encode(value) : value))]
  .map(byte => byte.toString(16).padStart(2, '0')).join('');

export function identityAttributes(identity) {
  const matches = [...identity.matchAll(/(?:^|,)([a-z_]+):/g)], fields = {};
  matches.forEach((match, index) => {
    const value = identity.slice(match.index + match[0].length, matches[index + 1]?.index ?? identity.length);
    (fields[match[1]] ??= []).push(value);
  });
  return fields;
}

async function fetchJSON(url) {
  // Revalidate published artifacts; unchanged files can use conditional HTTP.
  const response = await fetch(url, {cache: 'no-cache'});
  if (!response.ok) throw new Error('FPKI data could not be loaded.');
  return response.json();
}

export async function loadGraph({graphUrl, recordsUrl}) {
  // Only the published graph is required. Optional records must not prevent
  // published certificate relationships from being explored.
  const [graphResult, recordsResult] = await Promise.allSettled([
    fetch(graphUrl, {cache: 'no-cache'}).then(async response => {
      if (!response.ok) throw new Error('Published FPKI graph could not be loaded.');
      return response.text();
    }),
    fetchJSON(recordsUrl)
  ]);
  if (graphResult.status !== 'fulfilled') throw graphResult.reason;
  const xml = new DOMParser().parseFromString(graphResult.value, 'application/xml');
  if (xml.getElementsByTagName('parsererror').length) throw new Error('Published FPKI graph is not valid XML.');
  const elements = name => [...xml.getElementsByTagNameNS('*', name)];
  if (elements('graph')[0]?.getAttribute('defaultedgetype') !== 'directed')
    throw new Error('Published FPKI graph must define directed certificate relationships.');
  const crawler = recordsResult.status === 'fulfilled' ? recordsResult.value : null;
  const authorities = await Promise.all(elements('node').map(async node => {
    const id = node.getAttribute('id'), label = node.getAttribute('label');
    if (!id || !label) throw new Error('Published FPKI graph has an incomplete authority.');
    const key = 'ca-' + (await digest(id)).slice(0, 16);
    return {id, key, label, identityAttributes: identityAttributes(id), records: []};
  }));
  authorities.sort((a, b) => a.label.toLowerCase() < b.label.toLowerCase() ? -1 : a.label.toLowerCase() > b.label.toLowerCase() ? 1 : a.id.localeCompare(b.id));
  const byId = new Map(authorities.map(node => [node.id, node]));
  if (!authorities.length || byId.size !== authorities.length || new Set(authorities.map(node => node.key)).size !== authorities.length)
    throw new Error('Published FPKI graph has invalid authority identifiers.');
  const anchor = authorities.find(node => node.label === 'Federal Common Policy CA G2')
    || byId.get(crawler?.anchor);
  if (!anchor) throw new Error('COMMON could not be identified in the published FPKI graph.');

  const pairs = new Map();
  function relationship(sourceId, targetId) {
    const source = byId.get(sourceId), target = byId.get(targetId);
    if (!source || !target) return null;
    const key = source.key + '/' + target.key;
    if (!pairs.has(key)) pairs.set(key, {key, source: source.key, target: target.key});
    return pairs.get(key);
  }
  for (const edge of elements('edge')) {
    const pair = relationship(edge.getAttribute('source'), edge.getAttribute('target'));
    if (!pair) throw new Error('Published FPKI relationship has an unknown authority.');
  }
  const records = Array.isArray(crawler?.['valid-certs'])
    ? crawler['valid-certs'].filter(record => record && typeof record.subject === 'string' && typeof record.issuer === 'string') : [];
  records.forEach((record, index) => {
    byId.get(record.subject)?.records.push(index);
  });
  const sourceDate = elements('meta')[0]?.getAttribute('lastmodifieddate');
  return {sourceDate, anchor: anchor.key, authorities, relationships: [...pairs.values()], records};
}

export function directoryHTML(data) {
  const byKey = new Map(data.authorities.map(node => [node.key, node]));
  const links = keys => keys.length ? '<ul>' + keys.map(key =>
    `<li><a href="#authority-${key}">${esc(byKey.get(key).label)}</a></li>`).join('') + '</ul>'
    : '<p>None recorded in the published graph.</p>';
  return data.authorities.map(node => {
    const incoming = [], outgoing = [];
    for (const edge of data.relationships) {
      if (edge.target === node.key) incoming.push(edge.source);
      if (edge.source === node.key) outgoing.push(edge.target);
    }
    return `<article id="authority-${node.key}"><h3>${esc(node.label)}</h3><h4>Issued by</h4>${links(incoming)}<h4>Issues certificates to</h4>${links(outgoing)}</article>`;
  }).join('');
}
