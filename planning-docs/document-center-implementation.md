# Document Center implementation

Status: baseline for full implementation

Last updated: October 15, 2026

## Implementation starting point

This document records the current working prototype on branch `0803-idm-document-center-project` as of October 15, 2026. This is the starting point for true implementation: use the behavior and architecture below as the baseline for additional requirements, implementation changes, and validation. It does not establish production readiness or completion of the full implementation.

The baseline was reviewed against the page markup, browser JavaScript, inventory generator, workflow, and existing browser checks. The initial baseline review confirmed JavaScript and Ruby syntax. Subsequent validation for the title and archive updates passed three consecutive Jekyll builds and the browser interaction suite, including archive visibility, desktop/tablet/mobile behavior, previews, page titles, and the help return button. Earlier validation listed below is historical and must not be treated as fresh validation of this baseline.

## Purpose

The Document Center provides a searchable and filterable interface for files stored under `docs/` without changing their existing download URLs.

Canonical route: `/doccenter/`

Short redirect: `/dc/`

Document storage: `/docs/`

## Current architecture

- `doccenter/index.md` contains the Jekyll page, controls, details panel, and static USWDS modal shell.
- `assets/js/document-center.js` loads the inventory and implements file-type tabs, filters, search, sorting, selection, modal previews, and details updates.
- `assets/css/document-center.css` contains styles scoped to the Document Center.
- `doccenter/dchelp.md` provides the help page at `/doccenter/help/`, linked beside the search label.
- `.github/workflows/update-document-center.yml` regenerates and commits the inventory on the triggering branch after pushes affecting `docs/**`; it also supports manual dispatch.
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

- Supported files under `docs/` are scanned recursively. Files outside the archived and experimental subtrees are active, including ordinary nested folders.
- Files under `docs/archived/` are archived.
- Files under `docs/expdocs/` are experimental.
- Before a topic or scope filter is selected, the search and file-type controls operate on active documents and, when Exclude Archived is unchecked, archived documents. The initial page does not display document rows.
- Topic and scope selections use the combined matching rules described below; experimental files can also match a topic filter.

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

### Initial state and search

- The page title is “IDManagement Doc Center”; the help page uses the same name and a styled return button. The filter instructions read “Select one or more types to show matching documents. Select a type again to remove it.”
- The page loads the generated JSON inventory in the browser. It displays the total inventory count and matching counts on four file-type buttons: PDF, Word, Excel, and PowerPoint.
- No rows or selected document appear until a nonempty search, file-type selection, topic filter, or scope filter is active, or Exclude Archived is unchecked. Resetting those controls and checking Exclude Archived returns to the empty starting state.
- Search updates immediately and performs a case-insensitive substring match across filename, author, version, and relative path. It does not search document contents.
- With no file types selected, all supported formats are eligible. Multiple file-type buttons can be selected together; selecting an active button again removes only that format. Clearing the last type removes the format restriction, provided another search or filter remains active.
- File-type counts reflect search and topic/scope rules independently of the selected formats. The total-file count always represents the entire inventory.
- If the inventory cannot be loaded, a status message asks the visitor to try again later.

### Topic, scope, and archive rules

- APL, FIPS, FPKI, and PACS buttons match substrings in filenames only, case-insensitively. Multiple topic buttons use OR matching.
- Archived and Experiments buttons select the entire archived or experimental scope. Topic and scope buttons are removable toggle pills beside the welcome text.
- With no topic buttons selected, active documents remain eligible alongside explicitly selected scopes; archived documents are also eligible whenever Exclude Archived is unchecked.
- With topic buttons selected, eligible documents are the union of topic matches and explicitly selected scopes, subject to archive exclusion.
- Search and selected file types narrow that union. For example, selecting FPKI and Archived includes FPKI topic matches plus all archived files, then applies any search and file-type restrictions.
- “Exclude Archived” starts checked. Enabling Archived unchecks it. With exclusion unchecked and no topics selected, active and archived documents are visible whether or not Archived remains selected; search and file-type restrictions still apply. Checking exclusion hides archived documents and clears the Archived button.
- Experimental files can appear through either a matching topic or the Experiments button.

### Results, details, and previews

- One combined table contains File Name, Author, Created, and 3+ years. File Name, Author, and Created support ascending/descending sorting; the initial sort is filename ascending.
- The 3+ years indicator is calculated from the modified date in the browser; missing modified dates display Unknown.
- When results appear, the first matching document is selected automatically. A selected document remains selected after a rerender if it still matches; otherwise, the first result is selected. No matches clears the selection.
- Clicking a row, or pressing Enter or Space on a focused row, updates the details panel. Selected rows receive stronger highlighting than hovered rows.
- The details panel shows filename, file type, location, and Download. “Additional Document Details” expands group, size, version and source, author, dates and sources, age, and available PDF signature information. Selecting a document or rerendering results collapses these additional details.
- Filename buttons select the document and open the USWDS preview modal. PDFs use the existing `/docs/` URL in an iframe. Office formats show a notice and download action.
- Downloads are available in the details panel and preview modal. There are no Version, Modified, Download, or Open table columns.
- Archived and experimental rows carry small dark-blue A/E badges with white letters, tooltips, and accessible last-modified labels.
- The inventory statistics button toggles a panel above the selected-document details. Statistics cover the whole inventory, independently of search and filters, with totals by scope, file type, and location. The current location list displays `/docs`, `/docs/archived`, and `/docs/expdocs` only; other nested folders contribute to the total but are not listed separately.
- The desktop/tablet layout uses an 8/4 results/details split. The sticky details panel begins level with the search controls; on smaller screens it moves inline. Table overflow stays within its own scroller.
- File-type buttons support Arrow Left, Arrow Right, Home, and End; these keys move focus and toggle the destination button.
- Search and filter state is held in browser memory and resets on page reload; it is not encoded in the URL.

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

## Build and inventory workflow

- Both GitHub workflows display “Updateing IDManagement Doc Center” as the build step and in logs. The step checks the generated main page, help page, and inventory exist, reports success/failure annotations, and preserves build failures as failed runs. An always-run summary reports the build outcome and overall job status, including skipped builds and failures during inventory publication or retry builds.

- `npm run build` runs the Jekyll build. `.github/workflows/site-build.yml` checks builds on pushes, pull requests, and manual dispatch without deployment credentials.
- Inventory automation also runs when its generator or workflow changes. It checks out the latest branch head, and retries a rejected push up to three times, fetching the newer head and regenerating before each retry.
- The generator preserves the existing inventory and generation timestamp when document records and counts are unchanged, avoiding commits caused only by a new timestamp.
- Bot commits made with `GITHUB_TOKEN` do not trigger another push-based GitHub Actions build. The inventory job validates and builds its own output; the site build checks the triggering source commit. Hosted deployment of the generated commit must be checked in cloud.gov Pages; a successful local or Actions build does not establish deployment success.

## GitHub dependency-install failure and correction

The October 15 GitHub runs for commit `9557bd7f` failed in both Site build and Update Document Center index before the build step. `npm ci` rejected an out-of-sync lockfile: package.json required USWDS 3.14.0 while package-lock.json still recorded 3.13.0 and older Lit dependencies. Synchronize and commit package-lock.json whenever package.json dependencies change. Local builds with existing node_modules do not validate a clean dependency installation.

The lockfile was regenerated to match the declared dependencies. A clean-install build also exposed a stale USWDS footer patch in `_plugins/asset-helper.rb`; its expected source fragments were updated for USWDS 3.14.0 while retaining the site’s h4-only restoration rule. An isolated clean `npm ci` completed successfully with Puppeteer downloads disabled, matching the workflow's installation setting. The site build passed after the clean installation and footer-patch correction. Hosted confirmation requires pushing both the corrected lockfile and build helper; rerunning the old commit would still use the old lockfile.

## Validation for the title and archive updates

- Three successive local Jekyll builds passed.
- Browser checks passed for archive inclusion with Archived on and off, multiple formats, search, metadata, modal previews, desktop/tablet/mobile layouts, titles, and the help return button.
- Full inventory generation completed for 456 documents. Its local signature-status changes were excluded from this UI/workflow update because certificate inspection depends on time and environment.
- A repeated-generation fixture confirmed unchanged JSON and timestamp on the second run.
- Workflow YAML parsing and `git diff --check` passed. Hosted Actions runs and cloud.gov deployment still require verification after push.

## Historical validation

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

## Work to carry into full implementation

- Use this October 15 baseline to assess and record each additional implementation requirement.
- Confirm the treatment of nested folders in statistics before changing those rules.
- Refresh these notes and the browser checks as the implementation changes.
- Rerun the existing browser checks and production build after further implementation changes.
- Review modal sizing and native PDF rendering in the user’s interactive browser.
- Review the horizontally scrollable document table at narrow mobile widths.
- Run a final Jekyll build after the live development server is stopped.

## Deferred work

- IDM provenance verification
- Content-owner review of inferred versions and embedded author values
- Dependency remediation for the existing npm audit advisory

## Development rule

Update this document whenever the implementation architecture, user-visible behavior, metadata rules, test process, or known limitations change.
