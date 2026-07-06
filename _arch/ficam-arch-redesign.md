---

layout: page
sidenav: arch
title:  FICAM Arch - Demo
permalink: /development/
sticky_sidenav: true

subnav:
#   - text: 
#     href: 

---
<!-- FICAM Architecture & Practice Areas - Modular Rendering -->
<link rel="stylesheet" href="{{ '/assets/css/ficam-architecture.css' | relative_url }}">
<script src="{{ '/assets/js/ficam-renderer.js' | relative_url }}"></script>

<p class="subtitle">Federal Identity, Credential, and Access Management · Tap a capability row to expand · tap a heading to collapse</p>

<div id="architecture-canvas" class="layers" aria-label="FICAM architecture layers and practice areas"></div>
<div id="document-links"></div>
<div id="interaction-hint"></div>

<script>
// FICAM Architecture data loaded from Jekyll YAML files
// These are processed by Jekyll and converted to JavaScript objects

const DOCS = {{ site.data.ficam_architecture.documents | jsonify }};
const LEGEND = {{ site.data.ficam_architecture.legend | jsonify }};

const GOVERNANCE = {{ site.data.ficam_architecture.governance | jsonify }};
const FEDERATION = {{ site.data.ficam_architecture.federation | jsonify }};
const POST_QUANTUM_CRYPTO = {{ site.data.ficam_architecture.post_quantum_crypto | jsonify }};
const VERIFIABLE_CREDENTIALS = {{ site.data.ficam_architecture.verifiable_credentials | jsonify }};

const LAYERS = [
  GOVERNANCE,
  FEDERATION,
  POST_QUANTUM_CRYPTO,
  VERIFIABLE_CREDENTIALS
];

const PRACTICES = [
  {{ site.data.ficam_architecture.identity_management | jsonify }},
  {{ site.data.ficam_architecture.credential_management | jsonify }},
  {{ site.data.ficam_architecture.access_management | jsonify }}
];

// Initialize renderer and render each page area independently.
document.addEventListener('DOMContentLoaded', function() {
  const renderer = new FicamSectionRenderer();
  renderer.setDocConfig(DOCS);
  renderer.setLegendConfig(LEGEND);

  renderer.renderNestedArchitecture(LAYERS, PRACTICES, 'architecture-canvas');

  // Bottom document tags are intentionally hidden for now.
  // The DOCS data and document-links container remain in place for restoration.
  // renderer.renderDocBar(DOCS, 'document-links');
  renderer.renderHint('Tap a capability row to expand an area · tap its heading to collapse · tap a capability inside it for detail', 'interaction-hint');
});
</script>



