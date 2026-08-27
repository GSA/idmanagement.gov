# Document Center implementation

Status: active development

Last updated: August 3, 2026

## Purpose

The Document Center provides a searchable and filterable interface for files stored under `docs/` without changing their existing download URLs.

Canonical route: `/doccenter/`

Short redirect: `/dc/`

Document storage: `/docs/`

## Current architecture

- `doccenter/index.md` contains the Jekyll page, controls, details panel, and static USWDS modal shell.
- `assets/js/document-center.js` loads the inventory and implements file-type tabs, filters, search, sorting, selection, modal previews, and details updates.
- `assets/css/document-center.css` contains styles scoped to the Document Center.
- `scripts/generate-document-center.rb` scans supported files and writes `assets/data/document-center.json`.
- `scripts/test-document-center.js` runs browser interaction checks against the local site.
- `_redirects/document-center-short.md` redirects `/dc/` to `/doccenter/`.
- `_config.yml` excludes `planning-docs/` and `scripts/` from generated site output.

## Inventory generation

Run:

```bash
npm run generate:documents
```

Supported types:

- PDF (`.pdf`)
- Word (`.docx`)
- Excel (`.xlsx`)
- PowerPoint (`.pptx`)

Scope rules:

- Files directly under `docs/` are active.
- Files under `docs/archived/` are archived.
- Files under `docs/expdocs/` are experimental.
- Active documents are shown by default.
- Archived and experimental documents appear only when their removable filter pills are enabled.

Date precedence:

1. Valid embedded document metadata
2. Git history fallback

Version precedence:

1. Embedded Office metadata
2. Clearly identifiable filename version, labeled as inferred
3. Not available

Document age is calculated in the browser from the authoritative modified date. It is not stored as a static boolean.

## PDF signatures

`pdfsig` is used during inventory generation. The interface distinguishes unsigned PDFs from PDFs containing cryptographic signatures. A signature is reported as `Signed; validity unknown` when the signature exists but local certificate trust, expiry, revocation data, or signing coverage prevents complete validation.

The result represents local inspection at generation time and does not establish organizational approval.

## Current interface behavior

- Four top-level file-type buttons: PDF, Word, Excel, and PowerPoint.
- File-type buttons are toggles; selecting the active type again clears the type filter and shows all supported file types.
- Each button shows its active-document count.
- Enabling archived or experimental content adds corresponding counts to the type buttons.
- Search applies to filenames and available metadata within the selected type.
- APL, FIPS, FPKI, and PACS program filters use OR matching against document filenames and paths.
- Archived and Experimental are part of the same filter-pill group; the separate additional-groups fieldset was removed.
- Program filters are removable toggle pills; with none selected, the default active-document view remains unchanged.
- Type-button counts update to match search, scope, and program filters.
- Tables contain File Name, Author, Created, and 3+ years. Modified remains available in the details panel.
- Downloads are available from the selected-document panel and preview modal rather than a table column.
- The Version column has been removed; version remains available in the right-side metadata panel when present.
- Selecting a table row updates the right-side details panel.
- The selected row receives pronounced highlighting; hovered rows receive lighter highlighting.
- Filename controls select the row and open the document modal.
- PDF files preview inside a responsive iframe in the modal.
- Office formats display a modal notice and download action because browsers do not natively render these formats reliably.
- The Download column contains only the download action.
- The right-side details panel is sticky on desktop and inline on smaller screens.
- The details panel begins level with the file-type button group.
- The primary layout uses an 8/4 table/details split beginning at the tablet breakpoint so the details panel remains on the right at common widths.

## USWDS modal integration

The modal shell and a hidden opener are present in the initial HTML so USWDS can initialize its modal behavior at page load. Dynamically generated filename controls populate the modal and invoke the initialized opener. This preserves the USWDS overlay, focus trapping, Escape handling, and close behavior.

Focus is returned to the selected filename control when the modal closes.

## Local development

```bash
bundle install
npm install
npm run generate:documents
npm run start
```

Open `http://127.0.0.1:4000/doccenter/`.

Browser interaction checks:

```bash
npm run test:document-center
```

## Validation completed

- Ruby generator syntax
- JavaScript syntax
- Inventory source-file and ID integrity
- Jekyll production build
- Desktop rendering
- Mobile rendering at 390 pixels
- Route and inventory HTTP responses
- Row-selection and details-panel behavior
- Archived-count display behavior
- Correct USWDS modal initialization through a static page-load trigger
- PDF modal population and close behavior
- Version-column and table Open-button removal
- Selected-row and details-panel synchronization
- Rounded search/filter controls and corrected checkbox backgrounds
- Exact desktop alignment between the type-button group and sticky details panel
- Standard site content width
- Removable APL/FIPS/FPKI/PACS filtering
- Search/scope control alignment and uniform padding
- Explicit search-input containment and page-specific asset cache busting
- Three-pixel right margin on the search input, accounted for in its calculated width
- Table overflow contained within its own scroller to prevent mobile page displacement and apparent search-field clipping
- Three-pixel right margin on the rounded search-field container
- Uniform three-pixel margin directly around the search input
- Native search cancel control shifted three pixels left with CSS and protected by additional input padding
- Continuous search border rendered by a dedicated rounded wrapper with `focus-within` styling
- Compact filter-pill sizing to keep all six filters on one line at tablet widths when space permits
- Filter section labeled “Document type filter”
- Created-date table cells kept on one line
- Archived rows display an “A” badge in the filename cell with a hover tooltip and accessible last-modified label
- Experimental rows display a matching Einstein-style “E” marker with a hover tooltip and accessible last-modified label
- Archived and experimental badges use a half-size dark-blue treatment with white letters

## Current review work

- Review modal sizing and native PDF rendering in the user’s interactive browser.
- Review the horizontally scrollable document table at narrow mobile widths.
- Run a final Jekyll build after the live development server is stopped.

## Deferred work

- IDM provenance verification
- Content-owner review of inferred versions and embedded author values
- Dependency remediation for the existing npm audit advisory

## Development rule

Update this document whenever the implementation architecture, user-visible behavior, metadata rules, test process, or known limitations change.
