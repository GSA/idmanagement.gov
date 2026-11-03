// Visual continuity only. Selection, routes and history remain in app.js.
import {radialCurve, curvePath} from './layout.js';

const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
const DURATION = 560;
const MIN_SCALE = .35;
const MAX_SCALE = 3;
const mix = (a, b, t) => a + (b - a) * t;
const ease = t => 1 - (1 - t) ** 3;
const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

// SVG matrices expose these six affine values across browser implementations.
function project(matrix, point) {
  return {x: matrix.a * point.x + matrix.c * point.y + matrix.e,
    y: matrix.b * point.x + matrix.d * point.y + matrix.f};
}

function usableMatrix(matrix) {
  return matrix && ['a', 'b', 'c', 'd', 'e', 'f'].every(key => Number.isFinite(matrix[key]))
    && Math.abs(matrix.a * matrix.d - matrix.b * matrix.c) > 1e-8;
}

function transformCurve(curve, transform) {
  const result = [];
  for (let index = 0; index < curve.length; index += 2) {
    const point = transform({x: curve[index], y: curve[index + 1]});
    result.push(point.x, point.y);
  }
  return result;
}

function transformDrawing(drawing, transform, scale) {
  return {...drawing,
    points: new Map([...drawing.points].map(([key, point]) => [key,
      {...point, ...transform(point), radius: point.radius * scale}])),
    edges: new Map([...drawing.edges].map(([key, edge]) => [key,
      {...edge, curve: transformCurve(edge.curve, transform)}]))};
}

function readDrawing(scene, svg) {
  const points = new Map();
  for (const element of svg.querySelectorAll('.atlas-point')) {
    const key = element.dataset.atlasId;
    points.set(key, {...scene.positions.get(key), element, opacity: 1,
      radius: Number(element.querySelector('.point-circle').getAttribute('r'))});
  }
  const paths = new Map([...svg.querySelectorAll('.radial-edge')]
    .map(element => [element.dataset.source + '/' + element.dataset.target, element]));
  const edges = new Map(scene.tree.edges.map(edge => [edge.key, {...edge, opacity: 1,
    element: paths.get(edge.key), curve: radialCurve(points.get(edge.source), points.get(edge.target),
      scene, scene.tree.parent.get(edge.target) === edge.source)}]));
  return {selected: scene.selected, points, edges};
}

// Pure plan: track shared identities, project entering/exiting context through a
// bounded zoom, then settle shared points into the radial layout.
export function createRefocusPlan(previous, next) {
  const shared = [...next.points.keys()].filter(key => previous.points.has(key));
  if (!shared.length) return null;
  const focus = shared.includes(next.selected) ? next.selected
    : shared.includes(previous.selected) ? previous.selected : shared[0];
  const fromFocus = previous.points.get(focus), toFocus = next.points.get(focus);
  const ratios = shared.filter(key => distance(previous.points.get(key), fromFocus) > 2)
    .map(key => distance(next.points.get(key), toFocus) / distance(previous.points.get(key), fromFocus))
    .filter(value => value > 0).sort((a, b) => a - b);
  const scale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, ratios.length
    ? ratios[Math.floor(ratios.length / 2)] : toFocus.radius / fromFocus.radius));
  const projectedPrevious = transformDrawing(previous, point => ({
    x: toFocus.x + (point.x - fromFocus.x) * scale,
    y: toFocus.y + (point.y - fromFocus.y) * scale
  }), scale);
  const projectedNext = transformDrawing(next, point => ({
    x: fromFocus.x + (point.x - toFocus.x) / scale,
    y: fromFocus.y + (point.y - toFocus.y) / scale
  }), 1 / scale);
  const points = new Map([...new Set([...previous.points.keys(), ...next.points.keys()])].map(key => [key, {
    from: previous.points.get(key) || {...projectedNext.points.get(key), opacity: 0},
    to: next.points.get(key) || {...projectedPrevious.points.get(key), opacity: 0},
    exiting: !next.points.has(key)
  }]));
  const edges = new Map([...new Set([...previous.edges.keys(), ...next.edges.keys()])].map(key => [key, {
    from: previous.edges.get(key) || {...projectedNext.edges.get(key), opacity: 0},
    to: next.edges.get(key) || {...projectedPrevious.edges.get(key), opacity: 0},
    exiting: !next.edges.has(key)
  }]));
  const moving = points.size !== shared.length || [...points.values()].some(({from, to}) =>
    distance(from, to) > .5 || Math.abs(from.radius - to.radius) > .5);
  return moving ? {focus, scale, points, edges} : null;
}

function interpolatePoint({from, to, exiting}, t) {
  return {...to, x: mix(from.x, to.x, t), y: mix(from.y, to.y, t),
    radius: mix(from.radius, to.radius, t),
    opacity: mix(from.opacity, to.opacity, exiting ? Math.min(1, t / .7) : t)};
}

function endpoint(source, target, inset) {
  const length = distance(source, target) || 1;
  return {x: source.x + (target.x - source.x) * inset / length,
    y: source.y + (target.y - source.y) * inset / length};
}

function interpolateEdge({from, to, exiting}, plan, points, t) {
  const source = plan.points.get(to.source), target = plan.points.get(to.target);
  const inset = (point, curve, offset) => distance(point, {x: curve[offset], y: curve[offset + 1]});
  const start = endpoint(points.get(to.source), points.get(to.target),
    mix(inset(source.from, from.curve, 0), inset(source.to, to.curve, 0), t));
  const end = endpoint(points.get(to.target), points.get(to.source),
    mix(inset(target.from, from.curve, 6), inset(target.to, to.curve, 6), t));
  // Re-clip to the moving circles; independently interpolated endpoints could
  // drift inside a node as a relationship changes direction.
  const curve = from.curve.map((value, index) => mix(value, to.curve[index], t));
  curve.splice(0, 2, start.x, start.y);
  curve.splice(6, 2, end.x, end.y);
  return {...to, curve, opacity: mix(from.opacity, to.opacity, exiting ? Math.min(1, t / .7) : t)};
}

export function refocusFrame(plan, t) {
  const points = new Map([...plan.points].map(([key, item]) => [key, interpolatePoint(item, t)]));
  const edges = new Map([...plan.edges].map(([key, item]) => [key, interpolateEdge(item, plan, points, t)]));
  return {points, edges};
}

function paintPoint(point) {
  const {element, x, y, radius, opacity} = point;
  for (const circle of element.querySelectorAll('circle')) {
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', circle.classList.contains('point-hit') ? Math.max(10, radius + 1) : radius);
  }
  for (const text of element.querySelectorAll('text')) {
    text.setAttribute('x', x);
    text.setAttribute('y', y + 3);
  }
  element.style.opacity = opacity;
}

function paintDrawing(drawing) {
  for (const point of drawing.points.values()) paintPoint(point);
  for (const edge of drawing.edges.values()) {
    edge.element.setAttribute('d', curvePath(edge.curve));
    edge.element.style.setProperty('--motion-opacity', edge.opacity);
  }
}

function ghostPoint(point, layer) {
  const element = document.createElementNS(SVG_NAMESPACE, 'g');
  // Copy visual children only, never links, focus targets, IDs or navigation data.
  for (const child of point.element.children) {
    if (!child.classList.contains('point-hit')) element.append(child.cloneNode(true));
  }
  layer.append(element);
  return element;
}

export class GraphTransition {
  constructor(surface, onFinish = () => {}) {
    this.surface = surface;
    this.onFinish = onFinish;
    this.events = new AbortController();
    this.motion = matchMedia('(prefers-reduced-motion: reduce)');
    this.motion.addEventListener('change', () => {
      if (this.motion.matches) this.finish();
    }, {signal: this.events.signal});
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) this.finish();
    }, {signal: this.events.signal});
  }

  capture() {
    const svg = this.surface.querySelector('.radial-svg');
    const matrix = svg?.getScreenCTM();
    if (!this.current || this.surface.hidden || !usableMatrix(matrix)) return null;
    // Capture the actual in-flight geometry before cleanup. Screen coordinates
    // account for header height, scroll position and a changed SVG viewport.
    const points = new Map([...this.current.points].filter(([, point]) => point.opacity > .01));
    const edges = new Map([...this.current.edges].filter(([, edge]) =>
      edge.opacity > .01 && points.has(edge.source) && points.has(edge.target)));
    return transformDrawing({...this.current, points, edges},
      point => project(matrix, point), Math.hypot(matrix.a, matrix.b));
  }

  show(scene, previous = null) {
    this.finish();
    const svg = this.surface.querySelector('.radial-svg');
    const next = readDrawing(scene, svg);
    this.current = next;
    if (!previous || this.motion.matches || document.hidden) return;
    const screen = svg.getScreenCTM();
    // A hidden/zero-size embed has no usable camera space; show its stable view.
    if (!usableMatrix(screen)) return;
    const matrix = screen.inverse();
    const from = transformDrawing(previous, point => project(matrix, point), Math.hypot(matrix.a, matrix.b));
    const plan = createRefocusPlan(from, next);
    if (!plan) return;

    const ghosts = document.createElementNS(SVG_NAMESPACE, 'g');
    ghosts.setAttribute('aria-hidden', 'true');
    ghosts.classList.add('transition-context');
    // Old context is visual only. Real hit targets always belong to next selection.
    svg.insertBefore(ghosts, svg.querySelector('.atlas-point'));
    for (const point of plan.points.values()) {
      if (point.exiting) point.to.element = ghostPoint(point.from, ghosts);
    }
    for (const edge of plan.edges.values()) {
      if (!edge.exiting) continue;
      const element = edge.from.element.cloneNode(false);
      element.removeAttribute('data-source');
      element.removeAttribute('data-target');
      ghosts.prepend(element);
      edge.to.element = element;
    }
    this.surface.dataset.transitioning = 'true';
    const started = performance.now();
    const paint = progress => {
      this.current = {...refocusFrame(plan, ease(progress)), selected: next.selected};
      paintDrawing(this.current);
    };
    this.settle = () => {
      paintDrawing(next);
      for (const point of next.points.values()) point.element.style.removeProperty('opacity');
      for (const edge of next.edges.values()) edge.element.style.removeProperty('--motion-opacity');
      ghosts.remove();
      this.current = next;
      delete this.surface.dataset.transitioning;
      this.onFinish();
    };
    const tick = now => {
      const progress = Math.max(0, Math.min(1, (now - started) / DURATION));
      if (progress >= 1) this.finish();
      else { paint(progress); this.frame = requestAnimationFrame(tick); }
    };
    paint(0);
    this.frame = requestAnimationFrame(tick);
  }

  finish() {
    cancelAnimationFrame(this.frame);
    const settle = this.settle;
    this.settle = null;
    settle?.();
  }

  clear() {
    this.finish();
    this.current = null;
  }

  destroy() {
    this.clear();
    this.events.abort();
  }
}
