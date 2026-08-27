---
layout: base
title: Document Center
permalink: /doccenter/
extra_stylesheet: /assets/css/document-center.css
extra_script: /assets/js/document-center.js
---

<main id="main-content" class="dc-page" data-document-center data-base-url="{{ site.baseurl }}" data-index-url="{{ site.baseurl }}/assets/data/document-center.json">
  <div class="grid-container usa-layout-docs usa-prose">
    <h1 id="dc-heading" class="dc-page-title">{{ page.title }}</h1>
    <div class="grid-row grid-gap flex-align-start dc-intro-row">
      <div class="tablet:grid-col-8 dc-welcome-text">
        <p>Welcome to the Document Center. Use this tool to quickly discover, review, and download documents published by IDManagement.gov. Start with a search or select one or more filters. Then select a file to review its details, or preview it by clicking its file name. File-type selections can be combined to add matching documents to the document list. Deselecting a filter type removes only its matching files, making it easy to refine the results without starting over.</p>
      </div>

      <section class="tablet:grid-col-4 dc-category-filters" aria-labelledby="dc-filter-heading">
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
            Experiments <span class="dc-filter-remove" aria-hidden="true" hidden>×</span>
          </button>
        </div>
        <p class="dc-filter-help">Select one or more filters to filter results, select it again to remove an active filter.</p>
      </section>
    </div>

    <div class="grid-row grid-gap flex-align-start">
      <section class="tablet:grid-col-8" aria-labelledby="dc-heading">
        <div class="dc-controls">
          <div class="dc-search-control">
            <div class="dc-search-heading-row">
              <label class="usa-label dc-control-heading" for="dc-search">Search documents</label>
              <a class="dc-help-link" href="{{ site.baseurl }}/doccenter/help/" aria-label="Document Center help and instructions">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"></circle><path d="M9.8 9a2.4 2.4 0 1 1 3.4 2.2c-.8.4-1.2 1-1.2 1.8v.4M12 17h.01"></path></svg>
              </a>
            </div>
            <div class="dc-search-input-frame">
              <input class="usa-input" id="dc-search" type="search" autocomplete="off" placeholder="Search file names and metadata">
            </div>
            <div class="dc-search-summary">
              <div class="usa-checkbox dc-exclude-archived-control">
                <input class="usa-checkbox__input" id="dc-exclude-archived" type="checkbox" data-exclude-archived checked>
                <label class="usa-checkbox__label" for="dc-exclude-archived">Exclude Archived</label>
              </div>
              <div class="dc-search-statistics">
                <p class="dc-total-files" data-total-files aria-live="polite">Loading file count…</p>
                <button type="button" class="dc-statistics-toggle" data-statistics-toggle aria-expanded="false" aria-controls="dc-document-statistics" aria-label="Show document inventory statistics" title="Document inventory statistics">
                  <svg class="dc-statistics-icon dc-statistics-icon--show" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 20V10h4v10H4Zm6 0V4h4v16h-4Zm6 0v-7h4v7h-4Z"></path></svg>
                  <svg class="dc-statistics-icon dc-statistics-icon--hide" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 20V10h4v10H4Zm6 0V4h4v16h-4Zm6 0v-7h4v7h-4Z"></path><path class="dc-statistics-icon-slash" d="M3 3l18 18"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="dc-type-cards" role="group" aria-label="Filter by document file type">
          {% assign dc_types = "pdf:PDF:file-pdf.svg,docx:Word:file-word.svg,xlsx:Excel:file-excel.svg,pptx:PowerPoint:file.svg" | split: "," %}
          {% for item in dc_types %}
            {% assign parts = item | split: ":" %}
            <button class="dc-type-card" type="button" aria-pressed="false" data-type="{{ parts[0] }}">
              <img src="{{ site.baseurl }}/assets/img/{{ parts[2] }}" alt="" width="36" height="48">
              <span>{{ parts[1] }}</span>
              <span class="dc-type-count" data-count-for="{{ parts[0] }}">—</span>
              <span class="dc-scope-count" data-scope-count-for="{{ parts[0] }}" hidden></span>
            </button>
          {% endfor %}
        </div>

        <p class="dc-status" role="status" aria-live="polite">Loading documents…</p>
        <div data-panels></div>
        <noscript><div class="usa-alert usa-alert--warning"><div class="usa-alert__body"><p class="usa-alert__text">JavaScript is required to search and filter this document index. Files remain available directly in the <code>/docs/</code> directory.</p></div></div></noscript>
      </section>

      <aside class="tablet:grid-col-4 dc-details" aria-labelledby="dc-details-heading">
        <h2 id="dc-details-heading">Document details</h2>
        <section class="dc-document-statistics" id="dc-document-statistics" data-document-statistics aria-labelledby="dc-document-statistics-heading" hidden></section>
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
