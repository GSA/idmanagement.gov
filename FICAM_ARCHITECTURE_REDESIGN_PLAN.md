# FICAM Architecture Redesign Plan

Date started: 2026-07-06

This document tracks planning for the FICAM Architecture redesign. The current planning goal is to turn the existing `/development/` prototype into a compact, visual architecture page that matches the uploaded target PDF while staying compatible with the IDManagement.gov site structure.

## Source References

- Public site reference: https://www.idmanagement.gov
- Current public FICAM Architecture page: https://www.idmanagement.gov/arch/
- Redesign branch reference: https://github.com/GSA/idmanagement.gov/tree/0617-ficam-arch-redesign-dev
- Desired visual target: `/home/merc/Documents/FICAM Architecture - NEW Tags.pdf`
- Local prototype page: `_arch/ficam-arch-redesign.md`

## Desired Result

The uploaded PDF target shows a single-page visual hierarchy:

- Page title: FICAM Architecture.
- Subtitle explaining the nested hierarchy and that NEW means not in FICAM v3.3.
- Nested containment layers: Governance, Federation, Post-Quantum Cryptography, and Verifiable Credentials.
- Three practice columns inside the inner layer: Identity Management, Credential Management, and Access Management.
- Visible NEW badges on modern additions such as mPIV, FIDO2/passkeys, mDL, PQC, and Verifiable Credentials.
- A legend explaining nested boxes, NEW badges, light rows, and abbreviations.
- A concise footer noting the FICAM v3.3 baseline and modern credential extensions.

The visual target is more like a diagram canvas than a normal prose page. It needs horizontal room for three columns and several nested borders. This is the main layout constraint.

## Current Site Baseline

The public FICAM Architecture page is a long-form content page at `/arch/`. It uses the standard IDManagement.gov header, nav, side nav, and content area. The public page identifies the current architecture as Version 3.3 dated June 30, 2023, and describes the services framework as five practice areas/supporting elements used by ICAM program managers and enterprise architects.

Locally, the standard page layout is `_layouts/page.html`. That layout wraps content in a USWDS `grid-container`, adds the side nav when `sidenav: arch` is set, and renders the main content as `desktop:grid-col-9`. Because USWDS `.grid-container` defaults to a max width of 64rem, the effective main content area with a 3-column side nav is much narrower than the PDF target.

Planning implication: matching the PDF inside the existing `page` layout will likely feel squeezed on desktop and may force excessive wrapping in the three practice columns.

## Redesign Branch Baseline

The `0617-ficam-arch-redesign-dev` branch introduces a modular prototype:

- `_arch/ficam-arch-redesign.md` composes the page and loads the renderer.
- `_data/ficam_architecture/*.yml` stores layer and practice-area content.
- `assets/js/ficam-renderer.js` renders sections, capability rows, tags, and detail panels.
- `_sass/ficam-components.scss` holds component styles.
- `assets/css/ficam-architecture.scss` imports the component Sass for Jekyll compilation.

Excluding `vendor/`, the branch adds about 18 source files and roughly 2,873 lines. The real redesign code is therefore reviewable, but the branch comparison against `staging` also shows a very large `vendor/bundle` addition. That vendor change is not part of the architecture experience and should be treated as review/build noise unless the team intentionally wants vendored dependencies committed.

Planning implication: the current modular direction simplifies future content maintenance compared with an inline, single-file prototype. The main missing piece is the diagram layout and page-width treatment.

## Content Width Decision

The PDF target needs a wider content area than the current side-nav page provides.

Preferred direction: create a page-level architecture canvas that can use a wider container while preserving the global site header, footer, and navigation.

Options:

1. Keep the standard `page` layout unchanged.
   - Lowest layout risk.
   - Highest risk of a cramped diagram because the side nav plus 64rem grid container leaves too little desktop width.
   - Good for prose, not ideal for the PDF-style visual.

2. Add a targeted wide architecture layout or page flag.
   - Recommended.
   - Keeps the site chrome, header, footer, and navigation intact.
   - Allows the FICAM visual to use a `grid-container-widescreen`, `grid-container-desktop-lg`, or a custom max width only for this page.
   - Avoids changing widths for unrelated IDManagement.gov content.

3. Remove the side nav only for the visual portion.
   - Potentially useful if stakeholders want the diagram to feel like a canvas.
   - Could keep an in-page mini nav or place links below the diagram.
   - Needs review because the current architecture section uses side nav for orientation.

4. Sitewide layout revamp.
   - Not recommended for this work.
   - Would create issues for unrelated pages, accessibility checks, nav behavior, mobile behavior, and review scope.
   - Does not meaningfully simplify building this feature because the architecture redesign can be isolated.

## Revamp Risk Assessment

A total revamp of the code would likely introduce issues:

- It would expand the blast radius from one architecture page to the full site.
- It could break existing USWDS layout assumptions, especially `grid-container`, side nav, prose measure, header, and footer behavior.
- It would make accessibility and responsive QA much larger than the actual target requires.
- It would make review harder because functional architecture changes would be mixed with layout and framework churn.
- It could hide the real content decision: the architecture visual needs a wider canvas, not a different whole-site system.

The current modular approach should simplify building the code if we preserve it:

- YAML files keep content updates separate from rendering code.
- The renderer centralizes tag, NEW badge, and detail behavior.
- The Sass component file keeps visual styling scoped.
- A targeted wide layout or page class can solve the width problem without refactoring the entire site.

## Proposed Planning Path

1. Decide the page-width approach.
   - Preferred: add a FICAM architecture-specific wide canvas while keeping the standard site header/footer.
   - Validate at desktop, tablet, and mobile widths.

2. Decide whether the final experience is static diagram-first or interactive.
   - The PDF target is static and immediately scannable.
   - The current prototype is expandable and content-heavy.
   - A balanced option is a diagram-first default with optional expandable details below or within rows.

3. Align data to the PDF target.
   - Confirm each NEW badge maps to `isnew: true`.
   - Confirm core v3.3 rows are visually lighter than new additions.
   - Confirm references/standards appear in the compact bottom rows or detail panels.

4. Keep the implementation scoped.
   - Reuse `_data/ficam_architecture/*.yml`.
   - Reuse or adapt `assets/js/ficam-renderer.js`.
   - Add only the minimum layout support needed for the wider architecture canvas.
   - Avoid committing generated `_site/` or unrelated vendored dependency churn.

5. Validate the page.
   - Build with `bundle exec jekyll build`.
   - Review `/development/` locally.
   - Check content width and wrapping on mobile, tablet, desktop, and wide desktop.
   - Check keyboard behavior if interactive controls remain.

## Capability Legend Mapping

Use `legend_key` on any capability that should be color-coded to the architecture legend. This property is visual classification only. It does not replace or change `isnew` or `status`.

The canonical legend data lives in `_data/ficam_architecture/legend.yml`. That file defines the legend title, summary text, split-button labels, tooltip text, item keys, and color ramps. Accepted `legend_key` values should match the `key` values in `legend.yml`:

- `mdl`: mobile driver's license.
- `fido2`: FIDO2 / passkeys.
- `mpiv`: mobile PIV.
- `pqc`: post-quantum crypto.
- `vc`: verifiable credentials.

Capabilities without `legend_key` render as core/default rows. This allows current FICAM v3.3 services to remain visually lighter while newer or cross-cutting credential offerings use the legend colors.

`isnew` remains the flag for displaying the NEW badge. `status` remains the flag for displaying lifecycle/status badges. If a capability has both `legend_key` and `isnew` or `status`, the row uses the legend color while the badge continues to render next to the capability name.

The renderer can append the legend below the nested architecture automatically through `renderNestedArchitecture(...)`, or render the legend by itself with `renderLegend(container)` after `setLegendConfig(LEGEND)`.

## Open Questions

- Should the final page replace `/arch/`, remain at `/development/`, or ship as a new preview page first?
- Should the side nav remain visible beside the diagram on desktop, or should the diagram get the full content width?
- Should the PDF-style visual be implemented as HTML/CSS for maintainability, or as an SVG generated from the same YAML data?
- Should the current expandable detail behavior remain, or should details move below the visual to keep the diagram compact?
- Should `vendor/bundle` be excluded from the redesign branch before review?

## Current Recommendation

Do not do a total code revamp. Use the existing modular redesign branch as the base, clean the branch scope, and add a targeted wide architecture canvas. This should simplify the build and review process while giving the PDF-style visual enough room to work inside IDManagement.gov.
