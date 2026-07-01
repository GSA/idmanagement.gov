# FICAM Architecture Redesign Change Log

Date: 2026-06-17

## 2026-06-30 Update

- Added `references_enabled` and `documents_enabled` section-level toggles. References default to visible; document sections default to hidden until explicitly enabled per section.
- Updated reference and document badges so they act as in-page detail triggers. The lower detail panel displays a divider, linked title, and optional description.
- Updated detail-panel title links to use the USWDS external-link style and open in a new tab.
- Added `title`, `link`, and `description` metadata to references and document entries across the architecture data files.
- Added 3px of additional bottom padding to `.section` in `_sass/ficam-components.scss` for more balanced spacing.
- Refreshed `FICAM_MODULARIZATION_GUIDE.md` to document the current toggle, trigger, detail-panel, and document metadata behavior.

## 2026-06-23 Update

- Commented out document tag rendering without changing the page structure or YAML data files.
- Hid the per-section **Document sections** rows by commenting the document-link rendering block in `assets/js/ficam-renderer.js`.
- Hid the bottom five document tags by commenting out `renderer.renderDocBar(DOCS, 'document-links')` in `_arch/ficam-arch-redesign.md`.
- Kept `DOCS`, `_data/ficam_architecture/documents.yml`, and the `<div id="document-links"></div>` placeholder in place so the document tags can be restored by uncommenting the relevant code.
- Updated the interaction hint so the page no longer tells users to navigate by hidden document tags.
- Added `isnew: true` support for section headings and individual capability headings. The renderer displays a small **New** tag only when the flag is explicitly true.
- Added `.new-tag` component styling in `_sass/ficam-components.scss` for consistent spacing beside headings without changing the site structure.
- Changed the rendered row heading from **Standards** to **References**.
- Normalized architecture data files to use lowercase `isnew` and added explicit `isnew: false` defaults where content is not marked new.
- Renamed architecture data arrays from `standards` to `references` so the YAML key matches the rendered **References** heading.
- Added `isnew` support to reference entries and document entries so reference/document tags can display **New** when enabled. Document rendering remains commented out, but the data and renderer now support the flag.
- Moved `FICAM_ARCH_REDESIGN_CHANGELOG.md` and `FICAM_MODULARIZATION_GUIDE.md` into `_data/ficam_architecture/` so architecture data and related documentation live together.
- Updated reference/document `isnew: true` rendering to use a split tag with **NEW** on the left and the item label on the right. Set the `W3C VC DM 2.0` reference in `verifiable_credentials.yml` to `isnew: true` as the visible example.

Reference branch: https://github.com/GSA/idmanagement.gov/tree/0612-ficam-arch-redesign-dev

Reference file reviewed:

- `_arch/ficam-arch-redesign.md` on branch `0612-ficam-arch-redesign-dev`

That branch stores the FICAM architecture demo as a single page with inline CSS, inline JavaScript data, and inline rendering functions. The files below capture the modularized source structure used in this workspace after this session.

## Source Files Updated Or Added

| Status | File | Location | Purpose |
| --- | --- | --- | --- |
| Updated | `ficam-arch-redesign.md` | `_arch/ficam-arch-redesign.md` | Main Jekyll page for `/development/`. It now loads the compiled component stylesheet and renderer module, loads YAML data through Jekyll, and renders the four layer boxes and practice-area row independently. |
| Added/Updated | `FICAM_MODULARIZATION_GUIDE.md` | `_data/ficam_architecture/FICAM_MODULARIZATION_GUIDE.md` | Documentation explaining the modular data files, renderer, component Sass, document tags, linkable `url` values, independent rendering pattern, and update workflow. |
| Added/Updated | `FICAM_ARCH_REDESIGN_CHANGELOG.md` | `_data/ficam_architecture/FICAM_ARCH_REDESIGN_CHANGELOG.md` | Change log for the FICAM architecture redesign and modularization updates. |
| Added/Updated | `ficam-renderer.js` | `assets/js/ficam-renderer.js` | Reusable JavaScript renderer for architecture sections, practice rows, document tag bars, and hint text. Restores the document-tag arrow while keeping same-page and site-relative links in the current tab. |
| Added | `ficam-architecture.scss` | `assets/css/ficam-architecture.scss` | Jekyll stylesheet entrypoint that imports `_sass/ficam-components.scss` and compiles to `/assets/css/ficam-architecture.css`. |
| Added/Updated | `ficam-components.scss` | `_sass/ficam-components.scss` | Shared Sass component styles for section boxes, capability rows, tags, document bar, color ramps, and the responsive practice grid. |
| Added | `documents.yml` | `_data/ficam_architecture/documents.yml` | Shared document-tag definitions. Each entry includes `label`, `ramp`, and `url` values used by the renderer. |
| Added | `governance.yml` | `_data/ficam_architecture/governance.yml` | Data source for the Governance architecture layer. |
| Added | `federation.yml` | `_data/ficam_architecture/federation.yml` | Data source for the Federation architecture layer. |
| Added | `post_quantum_crypto.yml` | `_data/ficam_architecture/post_quantum_crypto.yml` | Data source for the Post-quantum cryptography architecture layer. |
| Added | `verifiable_credentials.yml` | `_data/ficam_architecture/verifiable_credentials.yml` | Data source for the Verifiable credentials architecture layer. |
| Added | `identity_management.yml` | `_data/ficam_architecture/identity_management.yml` | Data source for the Identity management practice area. |
| Added | `credential_management.yml` | `_data/ficam_architecture/credential_management.yml` | Data source for the Credential management practice area. |
| Added | `access_management.yml` | `_data/ficam_architecture/access_management.yml` | Data source for the Access management practice area. |

## Source Files Removed Or Replaced

| Status | File | Location | Reason |
| --- | --- | --- | --- |
| Removed/Replaced | `ficam-components.css` | `assets/css/ficam-components.css` | Replaced by `assets/css/ficam-architecture.scss` because Jekyll compiles `.scss` entrypoints into browser-loadable CSS. |

## Generated Files Refreshed By Local Build

The local Jekyll build refreshed generated output and copied USWDS assets. These are build artifacts, not hand-authored redesign source files:

- `_site/`
- `.jekyll-cache/`
- `assets/css/uswds.css`
- `assets/css/uswds.min.css`
- `assets/css/uswds.min.css.map`
- `assets/js/uswds.js`
- `assets/js/uswds.min.js`
- `assets/js/uswds.min.js.map`
- `assets/js/uswds-init.js`
- `assets/js/uswds-init.min.js`
- `assets/js/uswds-init.min.js.map`

## Verification

Jekyll regenerated successfully during the session. The only warning observed was the Sass `@import` deprecation warning from `assets/css/ficam-architecture.scss`, which does not block the current build.

Local preview URL used during this session:

- `http://127.0.0.1:4001/development/`
