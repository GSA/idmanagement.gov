// Diagram input and temporary name overlay. Never changes navigation on hover.
import {displayName} from './model.js';

const HIT_PADDING = 5;
const MIN_HIT_RADIUS = 11;
const TOOLTIP_MARGIN = 8;

function pointBounds(element) {
  const circle = element.querySelector('.point-circle');
  const box = circle.getBoundingClientRect();
  return {element, x: box.left + box.width / 2, y: box.top + box.height / 2,
    radius: Math.max(box.width, box.height) / 2};
}

// Pick by visible center, not DOM stacking order of overlapping hit circles.
export function nearestPoint(points, x, y) {
  let nearest = null, distance = Infinity;
  for (const point of points) {
    const candidate = Math.hypot(point.x - x, point.y - y);
    if (candidate <= Math.max(MIN_HIT_RADIUS, point.radius + HIT_PADDING) && candidate < distance) {
      nearest = point;
      distance = candidate;
    }
  }
  return nearest;
}

export function directionalPoint(points, current, direction) {
  const vectors = {ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1]};
  const [vx, vy] = vectors[direction];
  let nearest = null, best = Infinity;
  for (const point of points) {
    if (point.element === current.element) continue;
    const dx = point.x - current.x, dy = point.y - current.y;
    const forward = dx * vx + dy * vy;
    if (forward <= .5) continue;
    const sideways = Math.abs(dx * vy - dy * vx);
    const score = Math.hypot(dx, dy) + sideways * 2;
    if (score < best) { nearest = point; best = score; }
  }
  return nearest;
}

export class GraphInteractions {
  constructor(surface, model, onSelect) {
    this.surface = surface;
    this.model = model;
    this.onSelect = onSelect;
    this.events = new AbortController();
    this.tooltip = document.createElement('div');
    this.tooltip.id = 'authority-tooltip';
    this.tooltip.className = 'node-tooltip';
    this.tooltip.setAttribute('role', 'tooltip');
    this.tooltip.hidden = true;
    document.body.append(this.tooltip);
    const options = {signal: this.events.signal};

    surface.addEventListener('pointerover', event => this.pointer(event), options);
    surface.addEventListener('pointermove', event => this.pointer(event), options);
    surface.addEventListener('pointerleave', () => this.clearHover(), options);
    surface.addEventListener('focusin', event => {
      const point = event.target.closest('.atlas-point');
      if (point) this.tabstop(point);
      this.hovered = null;
      this.suppressed = null;
      this.update();
    }, options);
    surface.addEventListener('focusout', () => queueMicrotask(() => this.update()), options);
    surface.addEventListener('keydown', event => this.keydown(event), options);
    surface.addEventListener('click', event => this.click(event), options);
    surface.addEventListener('scroll', () => this.reset(), {...options, capture: true, passive: true});
  }

  points(svg = this.surface.querySelector('.radial-svg')) {
    return svg ? [...svg.querySelectorAll('.atlas-point')]
      .filter(point => Number(point.style.opacity || 1) > .1).map(pointBounds) : [];
  }

  target(element) {
    const item = element?.closest?.('[data-atlas-id]');
    if (!item || !this.surface.contains(item)) return null;
    return {key: item.dataset.atlasId, anchor: item, showName: item.dataset.namePopup === 'true'};
  }

  pointer(event) {
    if (event.pointerType === 'touch') return;
    const svg = event.target.closest('.radial-svg');
    let target;
    if (svg) {
      const point = nearestPoint(this.points(svg), event.clientX, event.clientY);
      target = point ? this.target(point.element) : null;
    } else target = this.target(event.target);
    if (!target) { this.clearHover(); return; }
    if (this.hovered?.key !== target.key) this.suppressed = null;
    this.hovered = target;
    this.update();
  }

  clearHover() {
    this.hovered = null;
    this.update();
  }

  update() {
    const target = this.hovered || this.target(document.activeElement);
    const key = target?.key || '';
    if (key !== this.highlighted) {
      for (const item of this.surface.querySelectorAll('[data-atlas-id]')) {
        item.classList.toggle('is-highlighted', !!key && item.dataset.atlasId === key);
      }
      this.surface.dataset.highlightedAuthority = key;
      this.highlighted = key;
    }
    // A tooltip must not stay behind while its point moves to another position.
    if (this.surface.dataset.transitioning) this.hideName();
    else if (target?.showName && key !== this.suppressed) this.showName(target);
    else this.hideName();
  }

  showName({key, anchor}) {
    if (this.shown === key && !this.tooltip.hidden) return;
    const node = this.model.nodes.get(key);
    if (!node) return;
    const title = document.createElement('strong');
    title.textContent = displayName(node);
    this.tooltip.replaceChildren(title);
    this.tooltip.hidden = false;
    this.shown = key;
    this.tooltip.dataset.authority = key;
    this.position(anchor);
  }

  position(anchor) {
    const point = anchor.querySelector('.point-circle')?.getBoundingClientRect() || anchor.getBoundingClientRect();
    const box = this.tooltip.getBoundingClientRect();
    let left = TOOLTIP_MARGIN, top = TOOLTIP_MARGIN;
    let right = innerWidth - TOOLTIP_MARGIN, bottom = innerHeight - TOOLTIP_MARGIN;
    // The frame can be taller than the visible parent page on narrow screens.
    if (frameElement) {
      const frame = frameElement.getBoundingClientRect();
      left = Math.max(left, -frame.left + TOOLTIP_MARGIN);
      top = Math.max(top, -frame.top + TOOLTIP_MARGIN);
      right = Math.min(right, parent.innerWidth - frame.left - TOOLTIP_MARGIN);
      bottom = Math.min(bottom, parent.innerHeight - frame.top - TOOLTIP_MARGIN);
    }
    const x = Math.max(left, Math.min(point.left + point.width / 2 - box.width / 2, right - box.width));
    const below = point.bottom + 4;
    const y = below + box.height <= bottom ? below : point.top - box.height - 4;
    this.tooltip.style.left = x + 'px';
    this.tooltip.style.top = Math.max(top, Math.min(y, bottom - box.height)) + 'px';
  }

  hideName() {
    this.tooltip.hidden = true;
    this.shown = null;
    delete this.tooltip.dataset.authority;
  }

  dismissName() {
    if (this.tooltip.hidden) return false;
    this.suppressed = this.shown;
    this.hideName();
    return true;
  }

  tabstop(point) {
    for (const item of this.surface.querySelectorAll('.atlas-point')) item.tabIndex = item === point ? 0 : -1;
  }

  keydown(event) {
    const point = event.target.closest('.atlas-point');
    if (!point) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (point.dataset.select) this.onSelect(point.dataset.select, {focus: true});
      return;
    }
    const directions = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
    if (!directions.includes(event.key) && !['Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const points = this.points();
    const current = points.find(item => item.element === point);
    const next = event.key === 'Home' ? points[0] : event.key === 'End' ? points.at(-1)
      : current && directionalPoint(points, current, event.key);
    if (next) {
      this.tabstop(next.element);
      next.element.focus({preventScroll: true});
    }
  }

  click(event) {
    const svg = event.target.closest('.radial-svg');
    if (!svg) return;
    event.preventDefault();
    event.stopPropagation();
    const point = event.detail === 0 ? event.target.closest('.atlas-point')
      : nearestPoint(this.points(svg), event.clientX, event.clientY)?.element;
    if (point?.dataset.select) this.onSelect(point.dataset.select, {focus: event.detail === 0});
  }

  reset() {
    this.hovered = null;
    this.suppressed = null;
    this.hideName();
    this.highlighted = null;
    for (const item of this.surface.querySelectorAll('.is-highlighted')) item.classList.remove('is-highlighted');
    delete this.surface.dataset.highlightedAuthority;
  }

  destroy() {
    this.reset();
    this.events.abort();
    this.tooltip.remove();
  }
}
