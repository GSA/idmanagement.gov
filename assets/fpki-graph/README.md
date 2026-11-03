# FPKI certificate relationships

A native HTML/SVG component of the Jekyll site, with no chart library,
separate application server or graph build step.

## Organization

| Responsibility | Files |
| --- | --- |
| Page and embed | `_implement/fpki_notifications.md`, `_includes/graph.html`, `_implement/fpki_graph.html` |
| Selection, search, panels and history | `app.js` |
| Source loading and relationship indexes | `data.js`, `model.js` |
| Geometry, rendering and names | `layout.js`, `render.js`, `labels.js` |
| Pointer/keyboard input and animation | `interactions.js`, `transition.js` |
| Certificate identity and records | `details.js` |
| Styling and parent/frame integration | `graph.css`, `page-context.js`, `page-context.css` |

Data flows from loading to the model and renderer; `app.js` coordinates user
navigation. Change layout/render code rather than generated SVG paths.
Animation shares the layout geometry and does not change navigation history.

## Data updates

`_implement/tools/fpki-certs.gexf` remains the canonical network. Arrows run from
the issuer to the CA receiving a certificate. Nodes represent CA identities,
not agency counts or assertions of current certificate validity.

The existing crawler also publishes `crawler-lastrun.json` and the P7B bundle.
The diagram always uses the GEXF network; crawler records enrich Details only.
Keep their filenames and the page’s `**Last Update**:` field compatible with
that update process. The graph reads these artifacts directly; new authorities
need no manually written profile. Stable keys use the complete source identity.
Layout and colors are computed in JavaScript, independently of GEXF
visualization fields.

`labels.js` expands three verified DoD name prefixes; other names stay exact.
The official identity remains available. Details and affiliation text use
source fields. Records have no intrinsic capture timestamp, so they do not
inherit the GEXF date or require a manually updated date/hash registry.

## Maintenance

From the repository root, with site dependencies installed:

```sh
bundle exec jekyll build
bundle exec jekyll serve --host 127.0.0.1 --port 4000 --livereload
```

Preview `/fpki/notifications/#fpki-graph`. After source/layout changes, verify
identities and directed pairs. Check overview, dense branches, leaves, search,
issuer/Back, keyboard, rapid navigation, reduced motion and expanded/mobile
views. Preserve named relationship access and parent/frame source/origin checks.
This guide and local development files stay excluded from the published site.
