# Accessibility Remediation Report

Last updated: 2026-08-24

## Objective

Reduce the automated WCAG 2 AA violations identified by Pa11y CI across the full IDManagement.gov sitemap, prioritizing shared fixes that improve the largest number of pages.

## Baseline

- Audit target: `https://www.idmanagement.gov`
- Runner: Axe through Pa11y CI 4.1.1
- Standard: WCAG 2 AA
- Sitemap entries: 657
- Unique non-PDF pages tested: 74
- Pages with findings: 74
- Total findings: 841
- Scan/runtime failures: 0

| Rule | Baseline findings |
| --- | ---: |
| `color-contrast` | 798 |
| `aria-prohibited-attr` | 27 |
| `list` | 9 |
| `th-has-data-cells` | 2 |
| `duplicate-id-aria` | 1 |
| `aria-allowed-attr` | 1 |
| `label` | 1 |
| `link-name` | 1 |
| `scrollable-region-focusable` | 1 |

## Plan and status

1. **Complete:** Analyze and group Pa11y results by rule, page, selector, and repeated source component.
2. **Complete:** Correct shared styles and templates responsible for sitewide findings.
3. **Complete for this pass:** Correct isolated ARIA, form, list, and table defects; document remaining editorial list work.
4. **Complete:** Build and serve the modified site locally.
5. **Complete:** Rerun all 74 pages against the local build and compare results with the baseline.

## Changes implemented so far

### Pa11y reliability and reporting

- Corrected `.pa11yci` so `concurrency` is a Pa11y CI option rather than an unsupported Pa11y page option.
- Increased the page timeout to 60 seconds.
- Refreshed the stale local installation from Pa11y CI 2.4.2/Puppeteer 1.19 to the versions required by the lockfile: Pa11y CI 4.1.1/Pa11y 9.1.1/Puppeteer 24.43.1.
- Added `scripts/render-pa11y-report.js` and generated the interactive baseline report.

### Shared contrast fixes

- Added explicit dark text colors for primary navigation links and menu buttons during initial rendering.
- Added explicit dark text colors for accordion headings in default, hover, and focus states.
- Changed headings in the dark homepage icon panel to white.
- Added explicit dark text fill for the policy-map SVG, preventing linked SVG text from inheriting the site's blue anchor color across pastel panels.

### Interactive card semantics

- Added an explicit `link` role to keyboard-focusable card containers so their accessible names are permitted.
- Restricted keyboard activation to the Enter key instead of navigating on every keypress.
- Removed focusability and an invalid accessible name from the one non-clickable card that contains real links.

### Isolated structural fixes

- Removed unsupported `aria-multiselectable` from a USWDS accordion container.
- Added a programmatic label to the graph search input.
- Replaced an unnamed graph toggle link with a named button.
- Made three Removed Product List caption IDs unique and updated their `aria-labelledby` references.
- Wrapped a nested troubleshooting list in a list item so the parent list has valid direct children.

## Files modified for remediation

- `.pa11yci`
- `assets/css/index.scss`
- `_includes/graph.html`
- `_includes/highlights.html`
- `_implement/cba-azure.md`
- `_implement/distribute-fcpca.md`
- `_partners/fips201-apl.md`
- `_playbooks/introduction.md`
- `_university/ficampolicymap.md`

## Verification notes

- Ruby dependencies were installed locally under `vendor/bundle` from `Gemfile.lock` so the modified Jekyll site can be built and audited without changing the live domain.
- The modified site builds successfully with Jekyll 4.4.1.
- A full local Pa11y rerun completed against all 74 pages with no scan/runtime failures.

## First verification result

| Rule | Baseline | After batch 1 | Change |
| --- | ---: | ---: | ---: |
| Confirmed non-contrast defects | 43 | 11 | -32 (74.4%) |
| `aria-prohibited-attr` | 27 | 0 | -27 |
| `duplicate-id-aria` | 1 | 0 | -1 |
| `aria-allowed-attr` | 1 | 0 | -1 |
| `label` | 1 | 0 | -1 |
| `link-name` | 1 | 0 | -1 |
| `list` | 9 | 8 | -1 |
| `scrollable-region-focusable` | 1 | 1 | unchanged |
| `th-has-data-cells` | 2 | 2 | unchanged |
| `color-contrast` marked “needs further review” | 798 | 798 | unchanged |

The 798 contrast entries are not confirmed Axe violations. Pa11y's Axe runner intentionally includes Axe's `incomplete` results and marks them with `runnerExtras.needsFurtherReview: true`; its default severity cap reports serious incomplete checks as errors. The affected content heavily uses background images, transparent layers, generated accordion icons, table styling, or inline SVG—cases where Axe cannot reliably calculate the final background. These entries require either manual contrast verification or more targeted component redesign and must not be represented as 798 confirmed failures.

Batch 2 is focusing on the 11 remaining confirmed structural findings. The color-review queue remains visible in the report and is not being suppressed.

## Second verification result

A targeted Pa11y rerun of the three batch-2 pages confirmed that all three targeted structural findings are resolved:

- `scrollable-region-focusable`: 1 → 0
- `th-has-data-cells`: 2 → 0

Overall confirmed non-contrast defects are now reduced from 43 to 8: **35 fixed (81.4%)**. The eight remaining confirmed findings are malformed lists in three long-form implementation/experiment pages where screenshots are direct children of `<ol>` or `<ul>` elements. Those content structures require a careful editorial pass so screenshots remain associated with the correct numbered steps.

A final full-site rerun regenerated the complete after-remediation JSON and HTML reports.

## Final automated result for this pass

- Pages tested: 74
- Scan/runtime failures: 0
- Confirmed non-contrast defects: 8 (down from 43)
- Pages with confirmed defects: 3 (down from 7)
- Axe contrast cases requiring manual review: 798
- Fixed confirmed defects: 35 of 43 (**81.4%**)

| Rule | Baseline | Final | Change |
| --- | ---: | ---: | ---: |
| `aria-prohibited-attr` | 27 | 0 | -27 |
| `duplicate-id-aria` | 1 | 0 | -1 |
| `aria-allowed-attr` | 1 | 0 | -1 |
| `label` | 1 | 0 | -1 |
| `link-name` | 1 | 0 | -1 |
| `scrollable-region-focusable` | 1 | 0 | -1 |
| `th-has-data-cells` | 2 | 0 | -2 |
| `list` | 9 | 8 | -1 |
| `color-contrast` / needs manual review | 798 | 798 | 0 |

Final artifacts:

- `reports/pa11y-report-after.html` — browsable after-remediation report
- `reports/pa11y-results-after.json` — raw after-remediation results
- `reports/pa11y-report.html` — browsable baseline report
- `reports/pa11y-results.json` — raw baseline results

## Recommended next pass

1. Correct direct `<img>` children in lists in `_implement/gsa-guide.md`, `_experiments/gsa-mpiv-experiment.md`, and `_experiments/gsa-pqc-experiment.md`, preserving each screenshot's association with its numbered step.
2. Manually verify the 798 Axe incomplete contrast cases, starting with the policy map, colored data tables, navigation load state, accordions, and homepage hero/background-image content.
3. Record actual foreground/background values and mark each manual contrast case pass/fail; remediate only confirmed failures.
