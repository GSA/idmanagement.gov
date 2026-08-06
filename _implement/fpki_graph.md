---
layout: wide
collection: implement
title: FPKI Graph
permalink: /fpki/graph/
---

<link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/assets/css/fpki-graph-wide.css" />

<script type="text/javascript" src="{{ site.baseurl }}/assets/js/cytoscape-3.33.1.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/fpki-certificate-hierarchy.js"></script>

<div class="fpki-graph-wide">
  <div class="fpki-graph-wide__container">
    <div class="fpki-graph-wide__header">
      <h1>FPKI Graph Data Viewer</h1>
      <p>
        The FPKI Graph displays relationships between certification authorities in the Federal PKI ecosystem.
        This wide-format page runs alongside the graph on the FPKI Ecosystem Changes page.
      </p>
      <p id="fpki-graph-accessible-description">
        The searchable certificate hierarchy provides a text-based alternative to the visual graph, including
        certificate details, issuer paths, and inbound and outbound certificate relationships.
      </p>
    </div>

    <section class="fpki-graph-wide__hierarchy" aria-label="FPKI certificate hierarchy">
      <div
        class="fpki-hierarchy"
        data-fpki-certificate-hierarchy
        data-source="{{ site.baseurl }}/implement/tools/fpki-certificate-hierarchy.json"
      >
        <div class="fpki-hierarchy__loader" role="status" aria-live="polite">
          <div class="fpki-hierarchy__loader-mark" aria-hidden="true">GSA</div>
          <p class="fpki-hierarchy__loader-text">Loading certificate hierarchy</p>
        </div>
      </div>
    </section>

    <div class="fpki-graph-wide__notes">
      <p>
        A P7B file of the weekly FPKI Graph run is available
        <a class="usa-link" href="{{ site.baseurl }}/implement/tools/CACertificatesValidatingToFederalCommonPolicyG2.p7b">Download the weekly FPKI certificate bundle (P7B)</a>.
      </p>
      <p>
        You cannot download certificates from the graph. To download certificates, retrieve them from the
        Authority Information Access (AIA) or Subject Information Access (SIA) URIs published in the CA certificates.
      </p>
    </div>
  </div>
</div>
