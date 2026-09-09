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
