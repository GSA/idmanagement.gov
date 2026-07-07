/**
 * FICAM Section Renderer Module
 * Modular JavaScript library for rendering FICAM architecture and practice sections
 * Decouples rendering logic from data, enabling independent section rendering
 * 
 * Usage:
 *   const renderer = new FicamSectionRenderer();
 *   
 *   // Render single section
 *   renderer.renderSection(sectionData, containerId);
 *   
 *   // Render multiple sections
 *   renderer.renderLayers(layersArray, containerId);
 *   renderer.renderPractices(practicesArray, containerId);
 *   
 *   // Render complete page
 *   renderer.renderPage(layersArray, practicesArray, docsObj, containerId);
 */

class FicamSectionRenderer {
  constructor() {
    this.docConfig = {};
    this.legendConfig = { items: [] };
    this.legendMap = {};
  }

  /**
   * Initialize with document configuration
   * @param {Object} docsConfig - Document references (mdl, fido2, mpiv, pqc, vc)
   */
  setDocConfig(docsConfig) {
    this.docConfig = docsConfig;
  }

  /**
   * Initialize with legend configuration used for row color coding and legend display.
   * @param {Object} legendConfig - Legend title, summary, and items
   */
  setLegendConfig(legendConfig) {
    this.legendConfig = legendConfig || { items: [] };
    this.legendMap = {};
    (this.legendConfig.items || []).forEach((item) => {
      if (item && item.key) {
        this.legendMap[String(item.key).trim().toLowerCase()] = item;
      }
    });
  }

  /**
   * Create a styled tag element
   * @param {string} label - Tag label text
   * @param {string} ramp - Color ramp class (gray, teal, purple, etc.)
   * @param {string} href - Optional URL for clickable tags
   * @returns {HTMLElement} Tag element
   */
  createTag(label, ramp, href = null, title = null, tagName = null) {
    const el = document.createElement(tagName || (href ? 'a' : 'span'));
    const opensNewContext = href && /^(https?:)?\/\//.test(href);
    el.className = `tag c-${ramp}${href ? ' clickable' : ''}`;
    el.textContent = label + (href ? ' ↗' : '');
    if (el.tagName === 'BUTTON') {
      el.type = 'button';
    }
    if (title) {
      el.title = title;
    }
    if (href) {
      el.href = href;
      el.addEventListener('click', (e) => {
        e.stopPropagation();
      });
      if (opensNewContext) {
        el.target = '_blank';
        el.rel = 'noopener';
      }
    }
    return el;
  }

  /**
   * Create a badge button that opens a detail panel instead of navigating.
   * @param {Object} item - Reference or document data
   * @param {string} ramp - Color ramp class
   * @param {Function} onSelect - Selection handler
   * @returns {HTMLElement}
   */
  createDetailTrigger(item, ramp, onSelect) {
    const stateLabels = this.getSplitTagStateLabels(item);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `${stateLabels.length ? 'split-tag' : 'tag'} c-${ramp} detail-trigger`;
    button.title = item.title || item.label;

    if (stateLabels.length) {
      const status = document.createElement('span');
      status.className = 'split-tag-status';
      status.textContent = stateLabels.join(' · ');

      const text = document.createElement('span');
      text.className = 'split-tag-text';
      text.textContent = item.label;

      button.appendChild(status);
      button.appendChild(text);
    } else {
      button.textContent = item.label;
    }

    button.addEventListener('click', (e) => {
      e.stopPropagation();
      onSelect(item, button);
    });

    return button;
  }

  /**
   * Check whether a data item should display the New label.
   * Defaults to false and accepts the canonical lowercase YAML key.
   * @param {Object} item - Section or capability data
   * @returns {boolean}
   */
  isNewItem(item) {
    if (!item) {
      return false;
    }
    const values = [item.isnew, item.new, item.isNew, item.is_new];
    return values.some((value) => value === true || value === 'true');
  }

  /**
   * Check whether a data item is marked optional.
   * @param {Object} item - Section or capability data
   * @returns {boolean}
   */
  isOptionalItem(item) {
    if (!item) {
      return false;
    }
    const values = [item.optional, item.isOptional, item.is_optional];
    return values.some((value) => value === true || value === 'true');
  }

  /**
   * Create the visual New label used beside section and capability headings.
   * @param {Object} item - Source item with optional flag
   * @returns {HTMLElement}
   */
  createNewTag(item = null) {
    const el = document.createElement('span');
    el.className = 'new-tag';
    el.textContent = this.isOptionalItem(item) ? 'New*' : 'New';
    return el;
  }

  /**
   * Normalize optional status values for display.
   * Missing, empty, and none statuses are intentionally hidden.
   * @param {Object} item - Section, capability, reference, or document data
   * @returns {string|null}
   */
  getDisplayStatus(item) {
    if (!item || item.status === undefined || item.status === null) {
      return null;
    }

    const value = String(item.status).trim();

    if (!value || value.toLowerCase() === 'none') {
      return null;
    }

    return value.toUpperCase();
  }

  /**
   * Resolve section display toggles from YAML.
   * @param {Object} sectionData - Section data object
   * @param {string} key - Toggle key
   * @param {boolean} defaultValue - Value used when the key is missing
   * @returns {boolean}
   */
  isEnabled(sectionData, key, defaultValue) {
    if (!sectionData || sectionData[key] === undefined || sectionData[key] === null) {
      return defaultValue;
    }

    if (typeof sectionData[key] === 'boolean') {
      return sectionData[key];
    }

    return String(sectionData[key]).trim().toLowerCase() === 'true';
  }

  /**
   * Create a visual status label for headings.
   * @param {string} status - Display status text
   * @returns {HTMLElement}
   */
  createStatusTag(status) {
    const el = document.createElement('span');
    el.className = `status-tag status-tag--${status.toLowerCase()}`;
    el.textContent = status;
    return el;
  }

  /**
   * Append New and status labels to a heading wrapper.
   * These states are independent, so both can display together.
   * @param {HTMLElement} wrap - Heading wrapper
   * @param {Object} item - Source item
   */
  appendStateTags(wrap, item) {
    if (this.isNewItem(item)) {
      wrap.appendChild(this.createNewTag(item));
    }

    const status = this.getDisplayStatus(item);

    if (status) {
      wrap.appendChild(this.createStatusTag(status));
    }
  }

  /**
   * Return labels used in split reference/document tags.
   * @param {Object} item - Source item
   * @returns {Array<string>}
   */
  getSplitTagStateLabels(item) {
    const labels = [];

    if (this.isNewItem(item)) {
      labels.push('NEW');
    }

    const status = this.getDisplayStatus(item);

    if (status) {
      labels.push(status);
    }

    return labels;
  }

  /**
   * Return true when a value has non-whitespace display text.
   * @param {*} value
   * @returns {boolean}
   */
  hasData(value) {
    return value !== undefined && value !== null && String(value).trim() !== '';
  }

  /**
   * Normalize optional display text with a consistent empty-data fallback.
   * @param {*} value
   * @returns {string}
   */
  displayOrFallback(value) {
    return this.hasData(value) ? String(value).trim() : 'No data provided';
  }

  /**
   * Create a tag and optional New label for reference/document tag rows.
   * @param {string} label - Tag label text
   * @param {string} ramp - Color ramp class
   * @param {string} href - Optional URL for clickable tags
   * @param {Object} item - Source item with optional isnew flag
   * @returns {HTMLElement}
   */
  createTagWithStatus(label, ramp, href = null, item = null) {
    const stateLabels = this.getSplitTagStateLabels(item);
    const title = item && item.title ? item.title : null;

    if (!stateLabels.length) {
      return this.createTag(label, ramp, href, title);
    }

    const wrap = document.createElement('span');
    wrap.className = `split-tag c-${ramp}${href ? ' clickable' : ''}`;
    if (title) {
      wrap.title = title;
    }

    const status = document.createElement('span');
    status.className = 'split-tag-status';
    status.textContent = stateLabels.join(' · ');

    const text = document.createElement(href ? 'a' : 'span');
    text.className = 'split-tag-text';
    text.textContent = label + (href ? ' ↗' : '');
    if (href) {
      const opensNewContext = /^(https?:)?\/\//.test(href);
      text.href = href;
      text.addEventListener('click', (e) => {
        e.stopPropagation();
      });
      if (opensNewContext) {
        text.target = '_blank';
        text.rel = 'noopener';
      }
    }

    wrap.appendChild(status);
    wrap.appendChild(text);
    return wrap;
  }

  /**
   * Normalize reference data from either a string or object.
   * @param {string|Object} reference
   * @returns {Object}
   */
  normalizeReference(reference) {
    if (typeof reference === 'string') {
      return { label: reference, isnew: false };
    }
    const label = reference.title || reference.label || reference.name || '';
    return {
      label: this.displayOrFallback(label),
      title: reference.title || reference.label || reference.name || '',
      link: reference.link || reference.url || null,
      description: reference.description || '',
      isnew: reference.isnew,
      status: reference.status
    };
  }

  /**
   * Resolve document data from either an ID string or object.
   * @param {string|Object} doc
   * @returns {Object|null}
   */
  resolveDocument(doc) {
    const docId = typeof doc === 'string' ? doc : doc.id;
    const docOverrides = typeof doc === 'object' ? doc : {};
    const docInfo = {
      ...(this.docConfig[docId] || {}),
      ...docOverrides
    };

    if (!docInfo || !Object.keys(docInfo).length) {
      return null;
    }

    return {
      ...docInfo,
      label: this.displayOrFallback(docInfo.title || docInfo.label || doc.id || doc),
      title: docInfo.title || docInfo.label || doc.id || doc,
      link: docInfo.link || docInfo.url || null,
      description: docInfo.description || '',
      isnew: docInfo.isnew,
      status: docInfo.status
    };
  }

  /**
   * Create the lower reference/document detail panel.
   * @returns {Object}
   */
  createDetailPanel() {
    const panel = document.createElement('div');
    panel.className = 'reference-detail-panel';
    panel.hidden = true;

    let title = document.createElement('span');
    title.className = 'reference-detail-title usa-link usa-link--external';

    const link = document.createElement('p');
    link.className = 'reference-detail-link';

    const description = document.createElement('p');
    description.className = 'reference-detail-description';

    panel.appendChild(title);
    panel.appendChild(link);
    panel.appendChild(description);

    return {
      panel,
      show: (item) => {
        const titleText = this.displayOrFallback(item.title || item.label);
        const linkText = this.displayOrFallback(item.link);
        const descriptionText = this.displayOrFallback(item.description);

        if (this.hasData(item.link)) {
          const linkedTitle = document.createElement('a');
          linkedTitle.className = 'reference-detail-title usa-link usa-link--external';
          linkedTitle.href = String(item.link).trim();
          linkedTitle.target = '_blank';
          linkedTitle.rel = 'noopener';
          linkedTitle.textContent = titleText;
          title.replaceWith(linkedTitle);
          title = linkedTitle;
        } else {
          const plainTitle = document.createElement('span');
          plainTitle.className = 'reference-detail-title';
          plainTitle.textContent = titleText;
          title.replaceWith(plainTitle);
          title = plainTitle;
        }

        link.textContent = `Link: ${linkText}`;
        description.textContent = descriptionText;
        panel.hidden = false;
      }
    };
  }

  /**
   * Create an expandable capability row
   * @param {Object} capability - { name, detail }
   * @param {string} ramp - Color ramp
   * @returns {HTMLElement} Capability row element
   */
  createCapRow(capability, ramp) {
    const row = document.createElement('div');
    const legendClass = this.getLegendClass(capability.legend_key);
    const legendRamp = this.getLegendRamp(capability.legend_key);
    row.className = `cap-row c-${ramp}${legendClass ? ` ${legendClass} c-${legendRamp}` : ''}`;
    if (this.isNewItem(capability)) {
      row.classList.add('has-new-tag');
    }

    const header = document.createElement('div');
    header.className = 'cap-header';

    const nameWrap = document.createElement('span');
    nameWrap.className = 'cap-name-wrap';

    const name = document.createElement('span');
    name.className = 'cap-name';
    name.textContent = capability.name;
    nameWrap.appendChild(name);

    this.appendStateTags(nameWrap, capability);

    const chevron = document.createElement('span');
    chevron.className = 'cap-chevron';
    chevron.textContent = '▼';

    const detail = document.createElement('p');
    detail.className = 'cap-detail';
    detail.textContent = capability.detail;

    header.appendChild(nameWrap);
    header.appendChild(chevron);
    row.appendChild(header);
    row.appendChild(detail);

    row.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = row.classList.toggle('open');
      chevron.textContent = isOpen ? '▲' : '▼';
    });

    return row;
  }

  /**
   * Map optional capability legend keys to visual classes.
   * Values align to the architecture legend: mdl, fido2, mpiv, pqc, vc.
   * @param {string} legendKey
   * @returns {string|null}
   */
  getLegendClass(legendKey) {
    if (!legendKey) {
      return null;
    }

    const normalized = String(legendKey).trim().toLowerCase();
    return this.legendMap[normalized] ? `legend-${normalized}` : null;
  }

  /**
   * Resolve a legend key to its configured color ramp.
   * @param {string} legendKey
   * @returns {string}
   */
  getLegendRamp(legendKey) {
    if (!legendKey) {
      return 'gray';
    }

    const normalized = String(legendKey).trim().toLowerCase();
    return (this.legendMap[normalized] && this.legendMap[normalized].ramp) || 'gray';
  }

  /**
   * Create a row label (Capabilities, References, Documents)
   * @param {string} text - Label text
   * @returns {HTMLElement} Row label element
   */
  createRowLabel(text) {
    const el = document.createElement('div');
    el.className = 'row-label';
    el.textContent = text;
    return el;
  }

  /**
   * Render a complete section (layer or practice area)
   * @param {Object} sectionData - Section data object
   * @param {boolean} isLayer - Whether this is a layer (affects preview count)
   * @returns {HTMLElement} Complete section element
   */
  renderSection(sectionData, isLayer = false, nestedContent = null, options = {}) {
    const defaultOpen = options.defaultOpen === true;
    const showPreview = options.showPreview !== false;
    const isCollapsible = showPreview || !defaultOpen;
    const sectionClass = options.sectionClass ? ` ${options.sectionClass}` : '';
    const showCapabilityLabel = options.showCapabilityLabel !== false;
    const showReferenceLabel = options.showReferenceLabel !== false;
    const addCapabilitiesDivider = options.addCapabilitiesDivider === true;
    const wrap = document.createElement('div');
    wrap.className = `section c-${sectionData.ramp}${defaultOpen ? ' open' : ''}${sectionClass}`;
    wrap.style.background = `var(--${sectionData.ramp}-bg)`;

    // Header section
    const header = document.createElement('div');
    header.className = 'section-header';
    if (isCollapsible) {
      header.setAttribute('role', 'button');
      header.setAttribute('tabindex', '0');
      header.setAttribute('aria-expanded', String(defaultOpen));
    }

    const left = document.createElement('div');
    const title = document.createElement('div');
    title.className = 'section-title';

    const titleText = document.createElement('span');
    titleText.textContent = sectionData.label;
    title.appendChild(titleText);

    this.appendStateTags(title, sectionData);

    const summary = document.createElement('div');
    summary.className = 'section-summary';
    summary.textContent = sectionData.summary;

    left.appendChild(title);
    left.appendChild(summary);

    const chevron = document.createElement('span');
    chevron.className = 'chevron';
    chevron.textContent = defaultOpen ? '▲' : '▼';

    header.appendChild(left);
    if (isCollapsible) {
      header.appendChild(chevron);
    }

    // Preview row (shows capability names before expanding)
    const preview = document.createElement('div');
    preview.className = 'tags-row capability-preview-row';
    preview.setAttribute('role', 'button');
    preview.setAttribute('tabindex', '0');
    preview.setAttribute('aria-expanded', 'false');
    preview.setAttribute('aria-label', `${sectionData.label} capabilities`);
    const maxPreview = isLayer ? 4 : 3;
    const capabilities = sectionData.capabilities || [];

    capabilities.slice(0, maxPreview).forEach((cap) => {
      preview.appendChild(this.createTag(cap.name, sectionData.ramp));
    });

    if (capabilities.length > maxPreview) {
      const more = document.createElement('span');
      more.className = `tag c-${sectionData.ramp}`;
      more.style.cssText = `font-size:11px;color:var(--${sectionData.ramp}-bd);align-self:center;margin:2px 4px`;
      more.textContent = `+${capabilities.length - maxPreview} more`;
      preview.appendChild(more);
    }

    // Body section (hidden until expanded)
    const body = document.createElement('div');
    body.className = 'section-body';
    const detailPanel = this.createDetailPanel();
    const detailTriggers = [];
    const selectDetail = (item, trigger) => {
      detailTriggers.forEach((el) => {
        el.classList.remove('selected');
      });
      trigger.classList.add('selected');
      detailPanel.show(item);
    };

    // Capabilities
    if (showCapabilityLabel) {
      body.appendChild(this.createRowLabel('Capabilities'));
    }
    capabilities.forEach((cap) => {
      body.appendChild(this.createCapRow(cap, sectionData.ramp));
    });

    if (this.isEnabled(sectionData, 'references_enabled', true)) {
      if (addCapabilitiesDivider) {
        const divider = document.createElement('div');
        divider.className = 'capabilities-divider';
        body.appendChild(divider);
      }
      if (showReferenceLabel) {
        body.appendChild(this.createRowLabel('References'));
      }
      const referencesRow = document.createElement('div');
      referencesRow.className = 'tags-row';
      referencesRow.style.display = 'flex';
      (sectionData.references || sectionData.standards || []).forEach((reference) => {
        const referenceInfo = this.normalizeReference(reference);
        const trigger = this.createDetailTrigger(referenceInfo, 'gray', selectDetail);
        detailTriggers.push(trigger);
        referencesRow.appendChild(trigger);
      });
      body.appendChild(referencesRow);
    }

    if (this.isEnabled(sectionData, 'documents_enabled', false) && sectionData.documents && sectionData.documents.length > 0) {
      body.appendChild(this.createRowLabel('Document sections'));
      const docsRow = document.createElement('div');
      docsRow.className = 'tags-row';
      docsRow.style.display = 'flex';
      sectionData.documents.forEach((doc) => {
        const docInfo = this.resolveDocument(doc);
        if (docInfo) {
          const trigger = this.createDetailTrigger(docInfo, docInfo.ramp, selectDetail);
          detailTriggers.push(trigger);
          docsRow.appendChild(trigger);
        }
      });
      body.appendChild(docsRow);
    }

    body.appendChild(detailPanel.panel);

    wrap.appendChild(header);
    if (showPreview) {
      wrap.appendChild(preview);
    }
    wrap.appendChild(body);
    if (nestedContent) {
      const nestedWrap = document.createElement('div');
      nestedWrap.className = 'nested-content';
      nestedWrap.appendChild(nestedContent);
      wrap.appendChild(nestedWrap);
    }

    const setSectionOpen = (isOpen) => {
      wrap.classList.toggle('open', isOpen);
      chevron.textContent = isOpen ? '▲' : '▼';
      preview.setAttribute('aria-expanded', String(isOpen));
      if (isCollapsible) {
        header.setAttribute('aria-expanded', String(isOpen));
      }
    };

    if (showPreview) {
      preview.addEventListener('click', (e) => {
        e.stopPropagation();
        setSectionOpen(true);
      });

      preview.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setSectionOpen(true);
        }
      });
    }

    if (isCollapsible) {
      header.addEventListener('click', (e) => {
        e.stopPropagation();
        setSectionOpen(false);
      });

      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setSectionOpen(false);
        }
      });
    }

    return wrap;
  }

  /**
   * Render multiple layers into a container
   * @param {Array} layers - Array of layer data objects
   * @param {string|HTMLElement} container - Container ID or element
   */
  renderLayers(layers, container) {
    const cont = this.getContainer(container);
    const layersDiv = document.createElement('div');
    layersDiv.className = 'layers';

    layers.forEach((layer) => {
      layersDiv.appendChild(this.renderSection(layer, true));
    });

    cont.appendChild(layersDiv);
  }

  /**
   * Render multiple practices into a container
   * @param {Array} practices - Array of practice data objects
   * @param {string|HTMLElement} container - Container ID or element
   */
  renderPractices(practices, container) {
    const cont = this.getContainer(container);
    cont.appendChild(this.createPracticeGrid(practices));
  }

  /**
   * Create the three-column practice area grid.
   * @param {Array} practices - Array of practice data objects
   * @returns {HTMLElement}
   */
  createPracticeGrid(practices) {
    const block = document.createElement('div');
    block.className = 'practice-area-block';

    const grid = document.createElement('div');
    grid.className = 'practice-grid';

    practices.forEach((practice) => {
      grid.appendChild(this.renderSection(practice, false, null, {
        defaultOpen: true,
        showPreview: false,
        sectionClass: 'practice-section',
        showCapabilityLabel: false,
        showReferenceLabel: false,
        addCapabilitiesDivider: true
      }));
    });

    const flowNote = document.createElement('p');
    flowNote.className = 'architecture-flow-note';
    flowNote.textContent = 'Identity is established → credentials are bound to it → access decisions rely on those credentials';

    block.appendChild(grid);
    block.appendChild(flowNote);

    return block;
  }

  /**
   * Render layers as nested boxes with the practice grid inside the innermost layer.
   * Expanding a layer inserts its capability details above the nested child content,
   * so the inner architecture is pushed down instead of hidden.
   * @param {Array} layers - Ordered outer-to-inner layer data
   * @param {Array} practices - Practice data shown inside the innermost layer
   * @param {string|HTMLElement} container - Container ID or element
   */
  renderNestedArchitecture(layers, practices, container) {
    const cont = this.getContainer(container);
    let child = this.createPracticeGrid(practices);

    layers.slice().reverse().forEach((layer) => {
      child = this.renderSection(layer, true, child);
    });

    cont.appendChild(child);
    cont.appendChild(this.createArchitectureLegend());
  }

  /**
   * Create the architecture legend shown below the nested Governance box.
   * @returns {HTMLElement}
   */
  createArchitectureLegend() {
    const legendItems = this.legendConfig.items || [];

    const legend = document.createElement('div');
    legend.className = 'architecture-legend';

    const header = document.createElement('div');
    header.className = 'architecture-legend-header';

    const title = document.createElement('span');
    title.className = 'architecture-legend-title';
    title.textContent = this.legendConfig.title || 'LEGEND';

    const note = document.createElement('span');
    note.className = 'architecture-legend-note';
    note.textContent = this.legendConfig.summary || '';

    header.appendChild(title);
    header.appendChild(note);

    const items = document.createElement('div');
    items.className = 'architecture-legend-items';

    legendItems.forEach((legendItem) => {
      const key = String(legendItem.key || '').trim().toLowerCase();
      const ramp = legendItem.ramp || 'gray';
      const labelParts = this.resolveLegendLabel(legendItem, key);
      const item = document.createElement('button');
      item.type = 'button';
      item.className = `architecture-legend-item usa-tooltip legend-${key} c-${ramp}`;
      item.title = labelParts.tooltip;
      item.dataset.position = 'top';

      const swatch = document.createElement('span');
      swatch.className = 'architecture-legend-swatch';
      swatch.setAttribute('aria-hidden', 'true');

      const text = document.createElement('span');
      text.className = 'architecture-legend-label';
      text.textContent = labelParts.visible;

      item.appendChild(swatch);
      item.appendChild(text);
      items.appendChild(item);
    });

    legend.appendChild(header);
    legend.appendChild(items);

    return legend;
  }

  /**
   * Split legend labels into visible text and tooltip text.
   * Supports em dash, en dash, and hyphen separators.
   * @param {string} label
   * @returns {{visible: string, tooltip: string}}
   */
  splitLegendLabel(label) {
    const text = String(label || '').trim();
    const parts = text.split(/\s+[—–-]\s+/);

    if (parts.length < 2) {
      return {
        visible: text,
        tooltip: text
      };
    }

    return {
      visible: parts[0].trim(),
      tooltip: parts.slice(1).join(' - ').trim()
    };
  }

  /**
   * Resolve visible and tooltip legend text from explicit YAML fields.
   * Falls back to splitting the full label for older legend data.
   * @param {Object} legendItem
   * @param {string} fallback
   * @returns {{visible: string, tooltip: string}}
   */
  resolveLegendLabel(legendItem, fallback) {
    if (legendItem.short_label || legendItem.tooltip) {
      const visible = String(legendItem.short_label || legendItem.label || fallback).trim();
      const tooltip = String(legendItem.tooltip || legendItem.label || visible).trim();

      return { visible, tooltip };
    }

    return this.splitLegendLabel(legendItem.label || fallback);
  }

  /**
   * Render the architecture legend by itself into any container.
   * @param {string|HTMLElement} container - Container ID or element
   */
  renderLegend(container) {
    const cont = this.getContainer(container);
    cont.appendChild(this.createArchitectureLegend());
  }

  /**
   * Render document links bar
   * @param {Array|Object} docs - Document references (array of IDs or object)
   * @param {string|HTMLElement} container - Container ID or element
   */
  renderDocBar(docs, container) {
    const cont = this.getContainer(container);
    const bar = document.createElement('div');
    bar.className = 'doc-bar';

    const docArray = Array.isArray(docs) ? docs : Object.entries(docs).map(([id, d]) => ({ id, ...d }));

    docArray.forEach((doc) => {
      const docInfo = this.resolveDocument(doc);
      if (docInfo) {
        bar.appendChild(
          this.createTagWithStatus(docInfo.label, docInfo.ramp, docInfo.link, docInfo)
        );
      }
    });

    cont.appendChild(bar);
  }

  /**
   * Render hint text
   * @param {string} hint - Hint text
   * @param {string|HTMLElement} container - Container ID or element
   */
  renderHint(hint, container) {
    const cont = this.getContainer(container);
    const hintEl = document.createElement('p');
    hintEl.className = 'hint';
    hintEl.textContent = hint;
    cont.appendChild(hintEl);
  }

  /**
   * Render complete page (layers + practices + docs + hint)
   * @param {Array} layers - Layer data
   * @param {Array} practices - Practice data
   * @param {Object} docs - Document config
   * @param {string|HTMLElement} container - Container ID or element
   */
  renderPage(layers, practices, docs, container) {
    this.setDocConfig(docs);
    this.renderLayers(layers, container);
    this.renderPractices(practices, container);
    // Document bar is intentionally hidden from the complete-page helper.
    // this.renderDocBar(docs, container);
    this.renderHint('Tap a section to expand · tap a capability for detail', container);
  }

  /**
   * Get container element from ID or element
   * @param {string|HTMLElement} container
   * @returns {HTMLElement} Container element
   */
  getContainer(container) {
    if (typeof container === 'string') {
      return document.getElementById(container);
    }
    return container;
  }
}

// Export for use in different module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FicamSectionRenderer;
}
