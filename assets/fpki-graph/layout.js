// FPKI certificate relationships — a spanning tree positions nodes; all source edges remain.

export const branchColors = ['#39728b','#438e88','#927497','#af8649','#5c82a5','#718b64','#ac7866','#747da5','#60959f','#a28c69','#7d8e91'];

export function rootedGraph(model, root) {
  const children = new Map([[root, []]]), parent = new Map(), depth = new Map([[root, 0]]), keys = [root], owner = new Map();
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    for (const child of model.outgoing.get(key)) {
      if (depth.has(child)) continue;
      keys.push(child); depth.set(child, depth.get(key) + 1); parent.set(child, key);
      children.get(key).push(child); children.set(child, []);
      owner.set(child, key === root ? child : owner.get(key));
    }
  }
  const visible = new Set(keys), edges = model.edges.filter(e => visible.has(e.source) && visible.has(e.target));
  const leafWeight = new Map();
  for (const key of keys.toReversed()) leafWeight.set(key, children.get(key).length ? children.get(key).reduce((sum, c) => sum + leafWeight.get(c), 0) : 1);
  const angle = new Map([[root, -Math.PI / 2]]), ranges = new Map([[root, [-Math.PI / 2, Math.PI * 1.5]]]);
  for (const key of keys) {
    const list = children.get(key), [start, end] = ranges.get(key), weight = list.reduce((sum, c) => sum + leafWeight.get(c), 0);
    let cursor = start;
    for (const child of list) {
      // Reserve some equal space for small branches, then distribute the rest
      // by leaf count so dense branches have room for their descendants.
      const equal = key === root ? .6 : .16;
      const span = (end - start) * (equal / list.length + (1 - equal) * leafWeight.get(child) / weight);
      ranges.set(child, [cursor, cursor + span]); angle.set(child, cursor + span / 2); cursor += span;
    }
  }
  const branches = children.get(root);
  return {root, children, parent, depth, keys, edges, owner, angle, ranges, leafWeight, branches, maxDepth: Math.max(...depth.values())};
}

export function globalBranchOwners(model) {
  const tree = rootedGraph(model, model.anchor), owners = new Map();
  tree.branches.forEach((branch, i) => owners.set(branch, {key: branch, color: branchColors[i % branchColors.length]}));
  for (const key of tree.keys) if (key !== tree.root) owners.set(key, owners.get(tree.owner.get(key)));
  return owners;
}

// One cubic representation for straight, quadratic and curved relationships.
// The renderer and transitions share these coordinates; no SVG path parsing.
export function radialCurve(source, target, layout, isTree = true) {
  const {cx, cy} = layout;
  const shorten = (node, toward, distance) => {
    const dx = toward.x - node.x, dy = toward.y - node.y, length = Math.hypot(dx,dy) || 1;
    return {x: node.x + dx * distance / length, y: node.y + dy * distance / length};
  };
  const s = shorten(source, target, source.depth === 0 ? 23 : source.number ? 10 : 3.5);
  const t = shorten(target, source, target.depth === 0 ? 23 : target.number ? 11 : 4.5);
  if (!isTree) {
    const middle = (source.r + target.r) * .22;
    const q = {x: cx + Math.cos((source.angle + target.angle) / 2) * middle,
      y: cy + Math.sin((source.angle + target.angle) / 2) * middle};
    return [s.x, s.y, s.x + (q.x - s.x) * 2 / 3, s.y + (q.y - s.y) * 2 / 3,
      t.x + (q.x - t.x) * 2 / 3, t.y + (q.y - t.y) * 2 / 3, t.x, t.y];
  }
  if (source.depth === 0) return [s.x, s.y, s.x + (t.x - s.x) / 3, s.y + (t.y - s.y) / 3,
    s.x + (t.x - s.x) * 2 / 3, s.y + (t.y - s.y) * 2 / 3, t.x, t.y];
  const mid = (source.r + target.r) / 2;
  return [s.x, s.y, cx + Math.cos(source.angle) * mid, cy + Math.sin(source.angle) * mid,
    cx + Math.cos(target.angle) * mid, cy + Math.sin(target.angle) * mid, t.x, t.y];
}

export function curvePath(curve) {
  const [sx, sy, ax, ay, bx, by, tx, ty] = curve;
  return `M${sx},${sy} C${ax},${ay} ${bx},${by} ${tx},${ty}`;
}

export function radialEdge(source, target, layout, isTree = true) {
  return curvePath(radialCurve(source, target, layout, isTree));
}
