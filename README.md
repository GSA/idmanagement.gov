This work is led by the GSA Identity and Trusted Access Division FICAM Program in coordination with the ICAM Subcommittee of the Federal CIO Council.

# FICAM Playbooks
This repository is a governmentwide collaboration. The content is advancing the maturity of Federal Identity, Credential, and Access Management systems which was previously envisioned in the FICAM Roadmap and Implementation Guidance v2.0.

Additional repositories are under development for contributors to share ICAM implementation guides, code, reference implementations, and solutions.

## General Practices
This content is Vendor neutral. Marketing materials for Commercial Products should not be submitted. If you would like to contribute a page or content which includes Commercial Products and a specific references for development and engineering, please review the Commercial Product trademark or copyright guides from the Product Vendor and reference those guides in your Pull Request.  

## Plain Language
Contributors should consider the audience when submitting content. Plain language benefits a broad audience. Review your proposed content for use of acronyms and specialized jargon before submitting.

## How to Contribute
For information on how to contribute to the site, visit the Contribute page [here](/_pages/contribute.md/).

Direct changes and line edits to the content may be submitted by clicking 'Edit this page'. You do not need to install any software to submit content. You can use GitHub's in-browser editor to edit files and submit a request for your changes to be merged.

## Public domain

This project is in the worldwide [public domain](/_pages/license.md/). 

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.

## Special Thanks
This site is based on GitHub Pages and Jekyll templates. 

Special thanks to the teams at [18F](https://18f.gsa.gov/), [18F Pages](https://pages.18f.gov/), and [US Digital Services Playbooks](https://playbook.cio.gov/) for their open and transparent model which benefits citizens, government, and technology.
 

## C2PA local and staging workflow

Current as of September 17, 2026. The full operational guide is `../HOW_IDM_C2PA_WORKS.md`; the companion whitepaper is `../IDM_C2PA_Implementation_Whitepaper.docx`. Both are outside this nested site repository, alongside signing/review reports and PDF originals. Retain those records separately from site commits.

### Local setup and preparation

From this repository, install the Node and Ruby dependencies and a Python environment with venv/pip support:

```bash
npm ci
bundle install
python3 -m venv .c2pa-work/pdf-venv
.c2pa-work/pdf-venv/bin/python -m pip install -r scripts/c2pa/pdf-requirements.txt
npm start
```

`npm start` serves localhost:4000; `npm run build` builds without serving. Both set `C2PA_LOCAL_SIGNING=1`. The asset helper runs preparation once per process: verify/install the checksum-pinned Linux x64 tool; inventory/reconcile excluded assets; sign/check images and DOCX; process the reviewed PDF allowlist; rebuild the signed index, bundle/map and WASM; export the combined ledger. Restart or run `npm run c2pa:prepare-local` after editing assets during a watch session.

Image/Word signing uses c2patool 0.27.22 / Rust SDK 0.90.22. Word support entered that SDK release line in 0.90.20. The selected binary needs DOCX entries stored without compression; original parts are compared before source replacement. Browser SDK `@contentauth/c2pa-web` 0.15.0 reads the signed Word files. The PDF path uses c2pie 0.1.1 and a custom pypdf 6.18.1 incremental adapter, then c2patool validation. It does not use c2pie's default PDF writer, which lost tags/metadata in the pilot.

### Review and staging build

Commit reviewed signed files, `assets/c2pa/signed-assets.json`, viewer bundle/map, WASM, and related source/configuration together. Keep private keys, `.c2pa-work/`, transient `reports/`, and dependencies out of deployment. Staging runs `npm run pages` to check committed viewer resources, followed by `npm run build:staging` or direct Jekyll with signing disabled. Do not use `npm run build` for staging. No signer, Python signing environment, signing keys, or viewer bundling is needed there. Preserve signed bytes during publication.

The current index has 993 assets (832 images, 47 DOCX, 114 PDFs). Another 82 hosted linked PDFs remain held. New/changed PDFs require renewed review and allowlist hashes. The 99 external PDF targets are outside this project's signing scope. `c2pa:dry-run` inventories; `c2pa:sign-source` handles images/Word; `c2pa:sign-pdfs` handles allowlisted PDFs; `c2pa:ui` rebuilds the viewer/index. Existing signatures are normally inspected and skipped; a manifest-template edit does not automatically re-sign them.

### Viewing and file information

Only indexed signed, same-origin PDF/DOCX links within main content are enhanced. Normal click/Enter opens a credentials modal; modifier clicks retain normal navigation. A compact hover/focus panel contains CR and information controls. Unsigned, external, and explicitly excluded links remain standard anchors. CR opens provenance; information opens the separate file modal.

Signed image CR controls open an anchored L2 dropdown on click/tap/keyboard, never hover alone. Eligible images independently open their file preview. L2 shows signature/content-binding status, separate trust warnings, signer, asserted publisher, origin, and available trusted timestamp/source disclosures. Missing inception is `Origin not recorded`; the old blanket `GSA IDManagement.gov created` description is not treated as factual origin. Future signing records publisher through CreativeWork and the SDK edit/open flow. L3 is the external Adobe Inspect action, not a local raw-JSON/history viewer.

The PDF file modal embeds a titled preview; its left-aligned `Open PDF` button opens the original in a new tab and closes that modal. The Word modal has a centered `Download Document` button and lower `Open Word document in a new tab` button; both are ordinary new-tab links, so the browser/server decides whether to download. X controls remain labelled accessible buttons despite their icon-only appearance. The information panel reports available metadata, not inferred filesystem creation dates.

### Deployment URLs and production gaps

Same-origin icon/WASM requests use the deployment `baseurl`. Adobe Inspect uses configured `site.url` as origin plus the selected path/query. Cloud.gov staging supplies the preview path as `baseurl`; do not duplicate it in `site.url`. Local paths do not automatically gain a staging prefix, so test external inspection from the actual staging page. Restore the intended production origin before promotion.

The SDK development certificates are not publicly trusted. Production needs an approved signing identity, trust-chain validation, protected-key/HSM or remote-signing integration, and rotation/revocation/audit procedures. The current file-key interfaces do not implement HSM signing. The PDF adapter excludes its whole appended revision from the data hash; preserved output structure and successful validation do not prove protection against later changes to excluded structures. Review and adversarial testing are required before production. Manual assistive-technology, Word round-trip, PDF rendering and cross-browser tests remain necessary; no full accessibility or C2PA product-conformance claim is made.

## Host Configuration Blocker: Adobe Inspect PDF access

**Status: Open — hosting configuration required (September 16, 2026).**

Adobe Inspect cannot load signed PDFs by URL from the Cloud.gov Pages preview. The staging site’s own C2PA panel can read and validate the same PDF. No PDF re-signing or modal URL change is required to resolve this loading blocker.

### Verified findings

On the staging `/fpki/` page, the Adobe Inspect link for `docs/fpki-x509-cert-profile-common.pdf` correctly includes the full preview path. A browser trace showed:

- Adobe’s direct fetch was blocked because the PDF response lacks `Access-Control-Allow-Origin`.
- Adobe’s fallback proxy returned HTTP 415, `Unsupported media type`.
- Supplying the missing CORS header only in a diagnostic browser allowed Adobe to read the PDF’s Content Credentials. This test did not change staging.
- Adobe then displayed separate warnings about the legacy C2PA specification version and the unrecognized development certificate. Fixing CORS does not remove those warnings.

### Required host configuration

Request that Cloud.gov Pages support enable cross-origin GET and HEAD access to public PDFs under `/docs/`, including subdirectories and the corresponding preview paths, with this response header:

```http
Access-Control-Allow-Origin: https://contentauthenticity.adobe.com
```

Affected preview:

`https://federalist-cf03235f-a054-4178-aafb-4e1e61e0d42c.sites.pages.cloud.gov/preview/gsa/idmanagement.gov/0902-idm-c2pa-experiment/`

The exact header name is `Access-Control-Allow-Origin`, not `Allow-Origin`. This must be an HTTP response header on the asset. HTML metadata, client-side JavaScript and Jekyll’s `_config.yml` do not configure the hosting server’s response headers. Cloud.gov’s documented custom-header configuration currently lists only `Cache-Control`; do not assume adding CORS to `pages.json` or `federalist.json` will work without confirmation from the platform team.

Owner: site hosting administrator / Cloud.gov Pages support. No hosting change or support request has been made as part of this diagnosis.

### Verification and completion criteria

After the host change, check a representative PDF:

```bash
curl -I \
  -H 'Origin: https://contentauthenticity.adobe.com' \
  'https://federalist-cf03235f-a054-4178-aafb-4e1e61e0d42c.sites.pages.cloud.gov/preview/gsa/idmanagement.gov/0902-idm-c2pa-experiment/docs/fpki-x509-cert-profile-common.pdf'
```

Confirm HTTP 200 and the requested `Access-Control-Allow-Origin` response header. Then open the staging FPKI page, select the signed PDF and choose “View more in Adobe Inspect.” Confirm the actual GET succeeds without CORS errors and Adobe displays Content Credentials. Repeat with another PDF and a nested document path before closing the blocker.

DOCX support is a separate limitation: Adobe Inspect’s published supported-format list includes PDF but not DOCX. Enabling CORS does not establish Adobe DOCX support; the site’s own browser SDK reads signed DOCX credentials.

References:

- [Cloud.gov Pages custom headers](https://docs.cloud.gov/pages/using-pages/custom-headers/)
- [Adobe Inspect formats and URL/CORS requirements](https://opensource.contentauthenticity.org/docs/getting-started/inspect/)
