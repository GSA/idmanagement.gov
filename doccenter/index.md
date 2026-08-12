---
layout: base
title: Document Center
permalink: /doccenter/
extra_stylesheet: /assets/css/document-center.css
extra_script: /assets/js/document-center.js
---

<main id="main-content" class="dc-page" data-document-center data-index-url="{{ site.baseurl }}/assets/data/document-center.json">
  <div class="grid-container">
    <h1 id="dc-heading">Document Center</h1>
    <p class="usa-intro">Find and download IDManagement.gov documents by file type.</p>

    <div class="grid-row grid-gap flex-align-start">
      <section class="tablet:grid-col-8" aria-labelledby="dc-heading">
        <div class="dc-controls">
          <div class="dc-search-control">
            <label class="usa-label dc-control-heading" for="dc-search">Search documents</label>
            <div class="dc-search-input-frame">
              <input class="usa-input" id="dc-search" type="search" autocomplete="off" placeholder="Search file names and metadata">
            </div>
          </div>
        </div>

        <div class="dc-type-cards" role="group" aria-label="Filter by document file type">
          {% assign dc_types = "pdf:PDF:file-pdf.svg,docx:Word:file-word.svg,xlsx:Excel:file-excel.svg,pptx:PowerPoint:file.svg" | split: "," %}
          {% for item in dc_types %}
            {% assign parts = item | split: ":" %}
            <button class="dc-type-card{% if forloop.first %} is-active{% endif %}" type="button"
              aria-pressed="{% if forloop.first %}true{% else %}false{% endif %}" data-type="{{ parts[0] }}">
              <img src="{{ site.baseurl }}/assets/img/{{ parts[2] }}" alt="" width="36" height="48">
              <span>{{ parts[1] }}</span>
              <span class="dc-type-count" data-count-for="{{ parts[0] }}">—</span>
              <span class="dc-scope-count" data-scope-count-for="{{ parts[0] }}" hidden></span>
            </button>
          {% endfor %}
        </div>

        <section class="dc-category-filters" aria-labelledby="dc-filter-heading">
          <h2 class="dc-control-heading" id="dc-filter-heading">Document type filter</h2>
          <div class="dc-filter-buttons">
            {% assign dc_categories = "apl:APL,fips:FIPS,fpki:FPKI,pacs:PACS" | split: "," %}
            {% for item in dc_categories %}
              {% assign parts = item | split: ":" %}
              <button type="button" class="usa-button usa-button--outline dc-filter-button" data-category-filter="{{ parts[0] }}" aria-pressed="false">
                {{ parts[1] }} <span class="dc-filter-remove" aria-hidden="true" hidden>×</span>
              </button>
            {% endfor %}
            <button type="button" class="usa-button usa-button--outline dc-filter-button" data-scope-filter="archived" aria-pressed="false">
              Archived <span class="dc-filter-remove" aria-hidden="true" hidden>×</span>
            </button>
            <button type="button" class="usa-button usa-button--outline dc-filter-button" data-scope-filter="experimental" aria-pressed="false">
              Experimental <span class="dc-filter-remove" aria-hidden="true" hidden>×</span>
            </button>
          </div>
          <p class="dc-filter-help">Select one or more filters. Select an active filter again to remove it.</p>
        </section>

        <p class="dc-status" role="status" aria-live="polite">Loading documents…</p>
        <div data-panels></div>
        <noscript><div class="usa-alert usa-alert--warning"><div class="usa-alert__body"><p class="usa-alert__text">JavaScript is required to search and filter this document index. Files remain available directly in the <code>/docs/</code> directory.</p></div></div></noscript>
      </section>

      <aside class="tablet:grid-col-4 dc-details" aria-labelledby="dc-details-heading">
        <h2 id="dc-details-heading">Document details</h2>
        <div data-details aria-live="polite"><p>Select a document to view its complete metadata.</p></div>
      </aside>
    </div>
  </div>
</main>

<button type="button" id="dc-modal-opener" data-open-modal aria-controls="dc-document-modal" hidden>Open document preview</button>
<div class="usa-modal dc-document-modal" id="dc-document-modal" aria-labelledby="dc-modal-heading" aria-describedby="dc-modal-body">
  <div class="usa-modal__content">
    <div class="usa-modal__main">
      <h2 class="usa-modal__heading" id="dc-modal-heading">Document preview</h2>
      <div id="dc-modal-body" data-modal-body></div>
    </div>
    <button type="button" class="usa-button usa-modal__close" aria-label="Close this window" data-close-modal>
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use href="{{ site.baseurl }}/assets/img/sprite.svg#close"></use></svg>
    </button>
      </div>
</div>
