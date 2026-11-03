// FPKI certificate relationships
export const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const displayName = node => node?.naming?.displayName || node?.label || '';
export const officialName = node => node?.label || '';
export const hasDistinctOfficialName = node => displayName(node).toLowerCase() !== officialName(node).toLowerCase();
export const nameExplanation = node => node?.naming?.explanation || '';

export function createModel(data) {
  const nodes = new Map(data.authorities.map(n => [n.key, n]));
  if (nodes.size !== data.authorities.length || !nodes.has(data.anchor)) throw new Error('Invalid authority identifiers.');
  const sort = keys => [...keys].sort((a,b) => {
    const x=nodes.get(a).label.toLowerCase(), y=nodes.get(b).label.toLowerCase();
    return x < y ? -1 : x > y ? 1 : a.localeCompare(b);
  });
  const edges = data.relationships.filter(e => e.source !== e.target);
  const incoming = new Map([...nodes.keys()].map(k => [k, []]));
  const outgoing = new Map([...nodes.keys()].map(k => [k, []]));
  const pairs = new Set();
  for (const edge of edges) {
    if (!nodes.has(edge.source) || !nodes.has(edge.target)) throw new Error('Missing relationship endpoint.');
    const pair = `${edge.source}/${edge.target}`;
    if (pairs.has(pair)) throw new Error('Duplicate relationship pair.');
    pairs.add(pair);
    incoming.get(edge.target).push(edge.source);
    outgoing.get(edge.source).push(edge.target);
  }
  for (const [k,v] of incoming) incoming.set(k,sort(v));
  for (const [k,v] of outgoing) outgoing.set(k,sort(v));
  return {data,nodes,sort,edges,incoming,outgoing,anchor:data.anchor};
}

export function routeToCommon(model, key) {
  if (!model.nodes.has(key)) return [];
  const queue = [[key]], visited = new Set([key]);
  for (let i=0;i<queue.length;i++) {
    const path=queue[i], current=path.at(-1);
    if (current === model.anchor) return path.toReversed();
    for (const issuer of model.incoming.get(current)) {
      if (!visited.has(issuer)) { visited.add(issuer); queue.push([...path,issuer]); }
    }
  }
  return [];
}

export function searchAuthorities(model,query) {
  const normalize=value=>String(value||'').toLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim();
  const words=normalize(query).split(' ').filter(Boolean);
  return model.sort([...model.nodes.keys()].filter(k=>{
    const n=model.nodes.get(k),text=normalize([n.label,n.id,displayName(n),nameExplanation(n)].join(' '));
    return words.every(word=>text.includes(word));
  }));
}
