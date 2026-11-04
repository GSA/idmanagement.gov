---
published: false
---
# FPKI graph

`_includes/graph.html` embeds `/fpki/graph/` from `_implement/fpki_graph.html`.
`app.js` owns selection, panels and history; `page-context.js` handles the parent
URL and expansion. Frame messages check both origin and sender.

`data.js` loads the published artifacts; `model.js` indexes directed relationships.
`layout.js` and `render.js` compute the drawing; `transition.js` shares their
geometry. Edit these modules rather than generated SVG paths.

## Data contract

- GEXF defines authority identities and issuer → recipient edges. Positions and
  colors are computed in the browser, independently of its visualization fields.
- Crawler JSON supplies optional certificate records for Details, not graph edges.
- Preserve the GEXF/JSON/P7B filenames and the notifications page's
  `**Last Update**:` field used by the existing updater.
- Selection keys derive from complete source identities. Display formatting only
  adjusts DoD capitalization; exact names remain in Details.
- Header counts describe the displayed scene, including issuer/peer context for
  leaves. Affiliations come from identity fields; new authorities need no profiles.
- Certificate records have no capture timestamp; the graph date comes from GEXF.
