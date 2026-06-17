# FICAM Architecture Redesign Change Log

Date: 2026-06-17

Reference branch: https://github.com/GSA/idmanagement.gov/tree/0612-ficam-arch-redesign-dev

Reference file reviewed:

- `_arch/ficam-arch-redesign.md` on branch `0612-ficam-arch-redesign-dev`

That branch stores the FICAM architecture demo as a single page with inline CSS, inline JavaScript data, and inline rendering functions. The files below capture the modularized source structure used in this workspace after this session.

## Source Files Updated Or Added

| Status | File | Location | Purpose |
| --- | --- | --- | --- |
| Updated | `ficam-arch-redesign.md` | `_arch/ficam-arch-redesign.md` | Main Jekyll page for `/development/`. It now loads the compiled component stylesheet and renderer module, loads YAML data through Jekyll, and renders the four layer boxes and practice-area row independently. |
| Added/Updated | `FICAM_MODULARIZATION_GUIDE.md` | `FICAM_MODULARIZATION_GUIDE.md` | Documentation explaining the modular data files, renderer, component Sass, document tags, linkable `url` values, independent rendering pattern, and update workflow. |
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
