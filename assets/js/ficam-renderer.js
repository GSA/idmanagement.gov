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
  }

  /**
   * Initialize with document configuration
   * @param {Object} docsConfig - Document references (mdl, fido2, mpiv, pqc, vc)
   */
  setDocConfig(docsConfig) {
    this.docConfig = docsConfig;
  }

  /**
   * Create a styled tag element
   * @param {string} label - Tag label text
   * @param {string} ramp - Color ramp class (gray, teal, purple, etc.)
   * @param {string} href - Optional URL for clickable tags
   * @returns {HTMLElement} Tag element
   */
  createTag(label, ramp, href = null) {
    const el = document.createElement(href ? 'a' : 'span');
    const opensNewContext = href && /^(https?:)?\/\//.test(href);
    el.className = `tag c-${ramp}${href ? ' clickable' : ''}`;
    el.textContent = label + (href ? ' ↗' : '');
    if (href) {
      el.href = href;
      if (opensNewContext) {
        el.target = '_blank';
        el.rel = 'noopener';
      }
    }
    return el;
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
   * Create the visual New label used beside section and capability headings.
   * @returns {HTMLElement}
   */
  createNewTag() {
    const el = document.createElement('span');
    el.className = 'new-tag';
    el.textContent = 'New';
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
      wrap.appendChild(this.createNewTag());
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
   * Create a tag and optional New label for reference/document tag rows.
   * @param {string} label - Tag label text
   * @param {string} ramp - Color ramp class
   * @param {string} href - Optional URL for clickable tags
   * @param {Object} item - Source item with optional isnew flag
   * @returns {HTMLElement}
   */
  createTagWithStatus(label, ramp, href = null, item = null) {
    const stateLabels = this.getSplitTagStateLabels(item);

    if (!stateLabels.length) {
      return this.createTag(label, ramp, href);
    }

    const wrap = document.createElement('span');
    wrap.className = `split-tag c-${ramp}${href ? ' clickable' : ''}`;

    const status = document.createElement('span');
    status.className = 'split-tag-status';
    status.textContent = stateLabels.join(' · ');

    const text = document.createElement(href ? 'a' : 'span');
    text.className = 'split-tag-text';
    text.textContent = label + (href ? ' ↗' : '');
    if (href) {
      const opensNewContext = /^(https?:)?\/\//.test(href);
      text.href = href;
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
    return {
      label: reference.label || reference.name || '',
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
    const docInfo = typeof doc === 'string' ? this.docConfig[docId] : this.docConfig[docId] || doc;

    if (!docInfo) {
      return null;
    }

    return {
      ...docInfo,
      isnew: typeof doc === 'object' && doc.isnew !== undefined ? doc.isnew : docInfo.isnew,
      status: typeof doc === 'object' && doc.status !== undefined ? doc.status : docInfo.status
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
    row.className = `cap-row c-${ramp}`;

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
  renderSection(sectionData, isLayer = false) {
    const wrap = document.createElement('div');
    wrap.className = `section c-${sectionData.ramp}`;
    wrap.style.background = `var(--${sectionData.ramp}-bg)`;

    // Header section
    const header = document.createElement('div');
    header.className = 'section-header';

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
    chevron.textContent = '▼';

    header.appendChild(left);
    header.appendChild(chevron);

    // Preview row (shows capability names before expanding)
    const preview = document.createElement('div');
    preview.className = 'tags-row';
    const maxPreview = isLayer ? 4 : 3;
    const capabilities = sectionData.capabilities || [];

    capabilities.slice(0, maxPreview).forEach((cap) => {
      preview.appendChild(this.createTag(cap.name, sectionData.ramp));
    });

    if (capabilities.length > maxPreview) {
      const more = document.createElement('span');
      more.style.cssText = `font-size:11px;color:var(--${sectionData.ramp}-bd);align-self:center;margin:2px 4px`;
      more.textContent = `+${capabilities.length - maxPreview} more`;
      preview.appendChild(more);
    }

    // Body section (hidden until expanded)
    const body = document.createElement('div');
    body.className = 'section-body';

    // Capabilities
    body.appendChild(this.createRowLabel('Capabilities'));
    capabilities.forEach((cap) => {
      body.appendChild(this.createCapRow(cap, sectionData.ramp));
    });

    // References
    body.appendChild(this.createRowLabel('References'));
    const referencesRow = document.createElement('div');
    referencesRow.className = 'tags-row';
    referencesRow.style.display = 'flex';
    (sectionData.references || sectionData.standards || []).forEach((reference) => {
      const referenceInfo = this.normalizeReference(reference);
      referencesRow.appendChild(
        this.createTagWithStatus(referenceInfo.label, 'gray', null, referenceInfo)
      );
    });
    body.appendChild(referencesRow);

    // Document links are intentionally hidden from section bodies for now.
    // The data remains in YAML and can be restored by uncommenting this block.
    // if (sectionData.documents && sectionData.documents.length > 0) {
    //   body.appendChild(this.createRowLabel('Document sections'));
    //   const docsRow = document.createElement('div');
    //   docsRow.className = 'tags-row';
    //   docsRow.style.display = 'flex';
    //   sectionData.documents.forEach((doc) => {
    //     const docInfo = this.resolveDocument(doc);
    //     if (docInfo) {
    //       docsRow.appendChild(
    //         this.createTagWithStatus(docInfo.label, docInfo.ramp, docInfo.url, docInfo)
    //       );
    //     }
    //   });
    //   body.appendChild(docsRow);
    // }

    wrap.appendChild(header);
    wrap.appendChild(preview);
    wrap.appendChild(body);

    // Toggle expand/collapse
    wrap.addEventListener('click', () => {
      const isOpen = wrap.classList.toggle('open');
      chevron.textContent = isOpen ? '▲' : '▼';
    });

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
    const grid = document.createElement('div');
    grid.className = 'practice-grid';

    practices.forEach((practice) => {
      grid.appendChild(this.renderSection(practice, false));
    });

    cont.appendChild(grid);
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
          this.createTagWithStatus(docInfo.label, docInfo.ramp, docInfo.url, docInfo)
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
