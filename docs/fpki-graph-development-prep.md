# FPKI Graph Development Prep

Status: development prep plus active prototype implementation notes.

## Repository State

- Repository: `https://github.com/GSA/idmanagement.gov.git`
- Local branch: `fpki-graph-json-view`
- Base branch: `staging`
- Site build command: `npm run build`
- Current `npm run build`: `bundle exec jekyll build`
- Ruby requested by repo: `.ruby-version` = `3.1.3`
- Jekyll version in `Gemfile`: `4.4.1`
- Node dependencies are managed with `package-lock.json`; prefer `npm ci` for CI/dev setup.

## Local Environment Notes

The local shell used for prep reported:

- Ruby: `3.3.8`
- Bundler: `2.6.7`
- Node: `v22.22.1`
- npm: `9.2.0`

These are newer than the repository's Ruby pin. Before validating the Jekyll build, prefer using Ruby `3.1.3` through the project's standard version manager or the same image used by Cloud.gov Pages/Federalist.

Local dependency setup completed:

- Ruby gems installed locally under `vendor/bundle`.
- Node dependencies installed under `node_modules`.
- `npm run build` completed successfully and generated `_site`.
- Bundler emitted a warning that `/home/merc` was not writable and used a temporary home under `/tmp`.
- `npm install` reported 4 dependency vulnerabilities in the existing dependency tree: 1 moderate and 3 high. No audit fix was run during prep.

## Existing Graph Assets

The current graph page is `_implement/fpki_notifications.md`.

Existing graph files:

- `_implement/tools/fpki-certs.gexf`

Validated graph source shape:

- `fpki-certs.gexf` contains 119 nodes and 118 edges.
- GEXF metadata `lastmodifieddate` is `2026-07-06`.
- `crawler-lastrun.json` contains the expected anchor:
  `common_name:Federal Common Policy CA G2,organizational_unit_name:FPKI,organization_name:U.S. Government,country_name:US`
- `_implement/tools/crawler-lastrun.json`
- `_implement/tools/CACertificatesValidatingToFederalCommonPolicyG2.p7b`

Existing graph UI files:

- `_includes/graph.html`
- `assets/js/gexfjs.js`
- `assets/js/config.js`
- `assets/css/gexfjs.css`

## Recommended First Implementation

Use the existing GEXF as the source for a generated browser JSON file.

Proposed flow:

1. Parse `_implement/tools/fpki-certs.gexf` with Ruby `REXML`.
2. Optionally read `_implement/tools/crawler-lastrun.json` with Ruby `JSON` for graph metadata.
3. Generate `_implement/tools/fpki-graph.json`.
4. Add a new include and JavaScript view that fetches `fpki-graph.json`.
5. Keep the existing GEXF view in place until the new view is reviewed and tested.

Initial implementation page:

- Added `_implement/fpki_graph.md`.
- Route: `/fpki/graph/`.
- Layout: `wide`.
- Current renderer: existing GEXF graph include and JavaScript.
- Main hierarchy view: generated certificate hierarchy from the `.p7b` bundle.
- Hierarchy count: 133 certificates.
- Hierarchy rendering: nested USWDS accordions.
- Metadata and certificate details rendering: USWDS tables.
- Extension rendering: USWDS tables with darker heading rows.
- Listing behavior: no certificate accordions display by default.
- Filter behavior: type 4 or more characters to display matching certificates.
- Filter options: CA name, subject, issuer, serial, fingerprints, key identifiers, and extensions.
- Show all: checkbox reveals the entire certificate listing.
- Check all: checkbox selects every searchable field.
- Reset: checkbox restores the default first three searchable fields: CA name, subject, and issuer.
- Current purpose: wide-format development page running alongside `/fpki/notifications/`.
- Existing notifications graph remains in place.

## Current Prototype UI Details

The `/fpki/graph/` prototype now uses a search-first certificate hierarchy view above the existing visual graph.

Filter accordion:

- Title: `FPKI Certificate Hierarchy Graph Filter`.
- Uses the GSA/USWDS primary blue `#005ea2` with white text.
- Uses a search icon instead of the default accordion icon.
- Keeps rounded corners only on the filter accordion.
- Expands responsively to the full width of the hierarchy content area.
- Displays root certificate, dynamic certificate count/found count, last update, search input, `Show all`, searchable field checkboxes, `Check all`, and `Reset`.
- Count label reads `Certificate count` by default, `Certificates found` while filtering by text, and `Certificates visible` when `Show all` is checked.
- The search input placeholder contains the guidance text.
- No listing is displayed until a 4-character search term is entered or `Show all` is checked.
- If `Show all` is checked and a search term longer than 3 characters is entered, `Show all` is cleared so the filtered result set takes over.
- Includes a muted dotted GSA loading indicator while JSON loads.

Top-level certificate accordions:

- Render from `_implement/tools/fpki-certificate-hierarchy.json`.
- Use an eye icon when collapsed and a closed-eye icon when expanded.
- Open-state background is darker than closed state.
- Top-level accordion bodies currently use `8px` padding on all sides; each top-level accordion has `0px` bottom margin.
- Expanded top-level accordions show a bold border while focus is inside that accordion; the border returns to normal when focus leaves.
- Each top-level body starts with a square certificate summary panel.
- The summary panel includes contained certificate count, issuer path length, root anchor, and valid-to date.
- The selected top-level certificate `Certificate Data and Extensions` accordion is nested inside the square summary panel and spans the panel width.

Nested certificate and issuer path accordions:

- The selected top-level certificate data appears directly below the summary panel without a `Selected certificate` heading.
- The issuer chain appears under a larger `Issuer path` heading.
- A single control panel appears below the selected certificate area and contains the `Issuer path` heading on the left.
- Summary and issuer path control panels use 5px corner radius; the summary panel has an additional 3px of bottom margin, and the issuer control panel sits 3px above the first issuer accordion.
- The issuer path control panel includes `Expand CA name only`, which expands or collapses only issuer CA accordions and not `Certificate Data and Extensions` accordions.
- The issuer path control panel also includes `Expand all`, which expands or collapses all accordions within the issuer path.
- If `Expand CA name only` is checked, checking `Expand all` expands all issuer path accordions. Unchecking `Expand all` returns to the CA-name-only view. Checking `Expand CA name only` while `Expand all` is active clears `Expand all` and returns to CA-name-only.
- Issuer path control labels appear before their checkboxes, with the checkboxes last.
- Nested accordions keep a 10px left indentation and stay within the right edge of their parent accordion.
- Sub-accordion bodies include 15px bottom padding for visual separation.
- Issuer path sub-accordion bodies omit the body border to reduce stacked-box noise.
- The CSS-only issuer path connector experiment was removed after review.
- Issuer path accordion nodes keep nested indentation for a stair-stepped hierarchy, while `Certificate Data and Extensions` accordions remove that indentation so they align with their containing accordion heading.
- Each issuer path accordion body wraps its `Certificate Data and Extensions` accordion in a square panel, similar to the selected certificate summary area, while preserving issuer-node indentation.
- `Certificate Data and Extensions` accordion bodies remove extra bottom padding so their table content sits tightly in the panel.
- `Certificate Data and Extensions` accordions use the dark navy heading `#1a2e45`, white text, and white eye/closed-eye icons.
- Certificate information and extensions are rendered in regular USWDS tables, not borderless tables.
- Extension rows are included under the certificate table's extension section rather than as a separate table.
- Metadata accordions are omitted when there is no metadata to display.

## Likely Files To Add Or Change

- `scripts/generate_fpki_graph_data.rb`
- `_implement/tools/fpki-graph.json`
- `_includes/fpki-graph.html`
- `assets/js/fpki-graph.js`
- graph-specific styles in `_sass` or `assets/css`
- `_implement/fpki_notifications.md`
- optionally `_data/fpki_graph.yml`
- optionally `package.json` if generation should run before every build

Initial wide page files changed:

- `_implement/fpki_graph.md`
- `assets/css/fpki-graph-wide.css`
- `assets/js/fpki-certificate-hierarchy.js`
- `scripts/generate_fpki_certificate_hierarchy.rb`
- `_implement/tools/fpki-certificate-hierarchy.json`
- `_config.yml`
- `_data/navigation.yml`
- `_implement/fpki_notifications.md`

Generation command:

```sh
npm run generate:fpki-hierarchy
```

## Build Integration Option

If Cloud.gov Pages/Federalist runs `npm run build`, update `package.json` like this:

```json
{
  "scripts": {
    "generate:fpki-graph": "ruby scripts/generate_fpki_graph_data.rb",
    "build": "npm run generate:fpki-graph && bundle exec jekyll build"
  }
}
```

If Cloud.gov Pages/Federalist does not run `npm run build`, prefer a Jekyll generator under `_plugins`.

## Watch Items

- Confirm the production build path before changing `package.json`.
- Do not remove the current GEXF graph until the JSON view has a fallback and accessibility review.
- Keep generated JSON deterministic for reviewable diffs.
- Treat `crawler-lastrun.json` as optional enrichment; GEXF should be enough for the first view.
- Keep `.p7b` parsing as a later validation enhancement unless the implementation scope changes.
