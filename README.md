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
 

## Local preview and staging C2PA workflow

Run `npm start` to preview or `npm run build` to build locally after installing dependencies. These commands prepare and validate signed assets, build the C2PA viewer, and refresh `../C2PA_SIGNED_ASSET_LOG.md`. Preparation runs once per Jekyll process; rerun `npm run c2pa:prepare-local` or restart after changing media.

Commit signed assets and the generated viewer bundle, source map, and WASM. Staging uses `npm run pages` (checks committed viewer resources only), then `bundle exec jekyll build` or `npm run build:staging`. Leave `C2PA_LOCAL_SIGNING` unset on staging. No signing tool, signing credentials, or viewer bundling runs there; the browser retains C2PA viewing and validation. Direct Jekyll commands also default to this mode; npm local build/start commands explicitly enable signing.

The complete workflow and asset ledger are maintained in the parent workspace's `HOW_IDM_C2PA_WORKS.md` and `C2PA_SIGNED_ASSET_LOG.md`; those files are outside this site's Git repository.

The Adobe Inspect button uses the rendered `site.url` as the asset origin and preserves the asset path (including a deployment `baseurl`) and query. This experiment sets `site.url` to `https://federalist-cf03235f-a054-4178-aafb-4e1e61e0d42c.sites.pages.cloud.gov`. Cloud.gov supplies `/preview/gsa/idmanagement.gov/0902-idm-c2pa-experiment` as `site.baseurl`; do not also append it to `site.url`. Restore the production origin before promoting this configuration to production. The button also appears locally and inspects the published asset at that configured origin.

C2PA icon and WASM requests use the current deployment origin plus the rendered `site.baseurl`. This keeps browser validation on the staging deployment even when it is hosted under a preview path; `site.url` is used separately for Adobe Inspect links. Commit the regenerated viewer bundle alongside layout changes.

### Content Credentials L2 interaction

The CR icon opens an anchored dropdown on click, tap, or keyboard activation. Hover does not open it. Click/tap again to close it; Escape, Close, or an outside click dismisses it. Keyboard users can press Arrow Down to enter the card. The compact L2 summary shows signer, origin, available trusted timestamp/source descriptions, and relevant integrity/trust warnings. The fixed footer opens Adobe Inspect (L3) for the selected asset. Technical details are no longer displayed in L2. Rebuild and commit the viewer bundle with changes to this interaction; staging does not bundle it.

The manifest template records the creation action description `GSA IDManagement.gov created` and the L2 Origin row displays that signed description. The standard `softwareImage` source type remains embedded. A green L2 status bar requires successful signature and media-binding checks; invalid results remain red and incomplete results retain a neutral informational state. SDK test-certificate trust warnings remain visible.

The L2 summary follows the C2PA UX guidance for signer, trusted timestamp when available, origin/source disclosures, and concise validation notices. It identifies the selected asset, preserves AI disclosures alongside custom origin text, and flags source-history verification issues. Current-signer success and trust are taken from active-manifest results only. A timestamp requires both `timeStamp.validated` and `timeStamp.trusted`; raw signing dates are not promoted to trusted timestamps. Invalid credentials display an explanation rather than unverified provenance fields. The L3 link remains available. See https://spec.c2pa.org/specifications/specifications/2.2/ux/UX_Recommendations.html#_l2_and_l3_summaries.

Local signing uses checksum-pinned c2patool 0.27.22 and includes `.docx` assets under `assets/` and `docs/`. Python 3 prepares Word packages with uncompressed ZIP entries because this tool release lacks DEFLATE support. Original document parts are verified unchanged before replacement; files become larger. Documents with existing Office signature parts are held for separate review. Word signing results are included in `../C2PA_SIGNED_ASSET_LOG.md`; the initial 47-document audit is in `../C2PA_WORD_SIGNING_REPORT.md` and its JSON companion. The current image viewer does not add Word-link controls; browser/Adobe Inspect DOCX support is a separate integration.

Same-origin PDF and DOCX links in main content retain normal navigation and have adjacent CR and circled-information icons, in that order. For document links, CR opens a Content Credentials modal; information opens the file details modal. PDF details use the image viewer layout: preview, bottom-right CR/info controls, and a collapsible information panel. External document links retain their original appearance. The native modal provides file information, C2PA inspection, a direct link, and an embedded PDF preview. External validation is not attempted in-page. PDF signing remains disabled pending a validated PDF-capable implementation. See `../C2PA_PDF_REVIEW_QUEUE.md` and `../C2PA_PDF_VIEWER_AND_SIGNING_STATUS.md` for review items, testing and accessibility limitations.

Document CR/info panels are restricted to locally indexed signed PDF/DOCX assets. The local viewer build generates `assets/c2pa/signed-assets.json` from successful signing records and verifies current file hashes before bundling it. Commit the index and generated bundle for staging. Unsigned PDF links receive no hover panel; all 47 signed DOCX assets are indexed. This index records signing eligibility for UI display, while opening CR still performs browser validation.

### Local PDF signing

`npm run c2pa:sign-pdfs` signs only the reviewed paths and original hashes in `scripts/c2pa/pdf-candidates.json`. Local preparation runs it after media/Word signing and before rebuilding the viewer. Staging does not run either signer. A local Python environment is required at `.c2pa-work/pdf-venv`; create it with `python3 -m venv .c2pa-work/pdf-venv` (requires your system's venv/pip support), then install `scripts/c2pa/pdf-requirements.txt` using that environment's pip. Dependencies are c2pie 0.1.1 and pypdf 6.18.1.

PDF signing uses c2pie for C2PA manifests and a custom incremental pypdf embedding step. It preserves original bytes, document catalog structure (including page content and accessibility tags), metadata and pre-existing attachments, then requires c2patool signature and content-binding validation before replacing a source. c2pie's default PDF writer is deliberately not used: it removed accessibility tags in the pilot. The pypdf adapter uses pinned-version internal methods and must be retested on dependency upgrades.

PDF credentials use the SDK's PS256 development fixture by default; set `C2PA_PDF_PRIVATE_KEY` and `C2PA_PDF_SIGN_CERT` for an appropriate RSA-PSS signing key and certificate chain. These credentials are not publicly trusted. The existing ES256 image/Word credentials are unchanged. No private keys are committed.

Original PDFs and PDF signing/review reports are outside the site repository, beside the existing logs. The 82 review files are held; they are not included in the PDF signing allowlist. New or changed unsigned PDFs require renewed review and an updated allowlist hash. Previously signed allowlisted PDFs are revalidated and skipped.

Normal clicks and Enter on hosted PDF links and signed DOCX links open the C2PA modal. Modifier clicks preserve normal link behavior. The modal includes an explicit original-document link. Hover CR/info controls remain limited to signed assets. C2PA status still uses browser validation, not just the local signed index.

### Document viewer update — September 16, 2026

The browser SDK is pinned to `@contentauth/c2pa-web` 0.15.0, which reads the signed DOCX assets. Word ZIP packages are supplied with the correct DOCX MIME type even when the server sends application/octet-stream, and collection-hash success is recognized by the status display. Both signed PDF and DOCX links open the C2PA modal and share the hover CR/info panel. Unsigned PDF links receive no event interception or controls. Adobe Inspect and Open original document are styled link buttons; Close uses a labelled, keyboard-accessible SVG icon control.

The C2PA summary separates certificate signer, publisher and origin. Publisher is read from the signed CreativeWork publisher assertion; it is omitted when absent. Missing inception data and the older automatically inserted `GSA IDManagement.gov created` description display `Origin not recorded`. Future image/Word signing records the publisher and uses the SDK edit/open workflow, rather than claiming software creation of all assets. Existing assets are not automatically re-signed merely to change these labels.
