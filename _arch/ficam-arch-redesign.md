---

layout: wide
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

<p class="subtitle grid-container" style="text-align: center;margin-top:10px;">Federal Identity, Credential, and Access Management · Tap any section to expand</p>

<div class="layers grid-container" aria-label="FICAM architecture layers">
  <div id="governance-layer"></div>
  <div id="federation-layer"></div>
  <div id="post-quantum-layer"></div>
  <div id="verifiable-credentials-layer"></div>
</div>

<div class="grid-container" id="practice-areas" aria-label="FICAM practice areas"></div>
<div id="document-links"></div>
<div id="interaction-hint" style="margin-bottom: 10px"></div>

<script>
// FICAM Architecture data loaded from Jekyll YAML files
// These are processed by Jekyll and converted to JavaScript objects

const DOCS = {{ site.data.ficam_architecture.documents | jsonify }};

const GOVERNANCE = {{ site.data.ficam_architecture.governance | jsonify }};
const FEDERATION = {{ site.data.ficam_architecture.federation | jsonify }};
const POST_QUANTUM_CRYPTO = {{ site.data.ficam_architecture.post_quantum_crypto | jsonify }};
const VERIFIABLE_CREDENTIALS = {{ site.data.ficam_architecture.verifiable_credentials | jsonify }};

const PRACTICES = [
  {{ site.data.ficam_architecture.identity_management | jsonify }},
  {{ site.data.ficam_architecture.credential_management | jsonify }},
  {{ site.data.ficam_architecture.access_management | jsonify }}
];

// Initialize renderer and render each page area independently.
document.addEventListener('DOMContentLoaded', function() {
  const renderer = new FicamSectionRenderer();
  renderer.setDocConfig(DOCS);

  document.getElementById('governance-layer').appendChild(renderer.renderSection(GOVERNANCE, true));
  document.getElementById('federation-layer').appendChild(renderer.renderSection(FEDERATION, true));
  document.getElementById('post-quantum-layer').appendChild(renderer.renderSection(POST_QUANTUM_CRYPTO, true));
  document.getElementById('verifiable-credentials-layer').appendChild(renderer.renderSection(VERIFIABLE_CREDENTIALS, true));

  renderer.renderPractices(PRACTICES, 'practice-areas');
  // Bottom document tags are intentionally hidden for now.
  // The DOCS data and document-links container remain in place for restoration.
  // renderer.renderDocBar(DOCS, 'document-links');
  renderer.renderHint('Tap a section to expand · tap a capability for detail', 'interaction-hint');
});
</script>






