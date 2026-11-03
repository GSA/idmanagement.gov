// Secondary authority details. Keep technical records out of the main plot area.
import {displayName, escapeHTML as esc} from './model.js';
import {identityContext, authorityList} from './render.js';

export function formatDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) return 'date unavailable';
  return new Date(value + 'T12:00:00Z').toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC'
  });
}

function identityFields(attributes = {}) {
  const names = {common_name: 'Common Name', organizational_unit_name: 'Organizational Unit',
    organization_name: 'Organization', country_name: 'Country'};
  return `<dl class="identity-fields">${Object.entries(attributes).map(([key, values]) => {
    const label = names[key] || key.replaceAll('_', ' ').replace(/\b\w/g, letter => letter.toUpperCase());
    return `<div class="identity-field"><dt>${esc(label)}</dt><dd>${values.map(esc).join('<br>')}</dd></div>`;
  }).join('')}</dl>`;
}

function recordValue(model, key, value) {
  if (key === 'subject' || key === 'issuer') {
    const authority = model.data.authorities.find(node => node.id === value);
    if (authority) return identityFields(authority.identityAttributes);
  }
  return value && typeof value === 'object'
    ? `<pre class="record-json">${esc(JSON.stringify(value, null, 2))}</pre>` : esc(value);
}

function certificateRecord(model, record, index) {
  const names = {'serial-number': 'Serial number', akid: 'Authority key identifier',
    skid: 'Subject key identifier', status: 'Recorded status',
    'pathbuilder-result': 'Recorded validation result', 'path-to-common': 'Recorded path to COMMON',
    'sia-entries': 'SIA entries', 'aia-entries': 'AIA entries'};
  return `<details class="certificate-record">
    <summary>Record ${index + 1} · Serial ${esc(record['serial-number'])}</summary>
    <dl class="record-fields">${Object.entries(record).map(([key, value]) =>
      `<dt>${esc(names[key] || key[0].toUpperCase() + key.slice(1))}</dt><dd>${recordValue(model, key, value)}</dd>`).join('')}
    </dl></details>`;
}

export function renderDetails(model, state) {
  const node = model.nodes.get(state.ca);
  const {incoming, outgoing} = model;
  const issuers = incoming.get(state.ca), recipients = outgoing.get(state.ca);
  const records = node.records.map(index => model.data.records[index]);
  return {heading: displayName(node), html: `
    ${identityContext(model, state.ca)}
    <details class="relationship-text">
      <summary>CA relationships as text</summary>
      <div id="named-connections">
      ${issuers.length ? '<h3>Issued by</h3>' + authorityList(model, issuers) : ''}
      <h3>Issues certificates to</h3>
      ${recipients.length ? authorityList(model, recipients) : '<p class="detail-note">None recorded in this source.</p>'}
      </div>
    </details>
    <section class="authority-identity" aria-labelledby="identity-heading">
      <h3 id="identity-heading">Authority identity</h3>
      <dl><dt>Official name</dt><dd>${esc(node.label)}</dd></dl>
      <h4>Distinguished name</h4>${identityFields(node.identityAttributes)}
    </section>
    <details class="historical-records">
      <summary>Published certificate records (${records.length})</summary>
      <div class="historical-records-body">
        <p class="detail-note">Status and validation results reflect the published crawler output.</p>
        ${records.length ? records.map((record, index) => certificateRecord(model, record, index)).join('')
          : '<p>No certificate records for this authority are included in the published crawler output.</p>'}
      </div>
    </details>`};
}
