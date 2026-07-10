---
layout: wide
collection: implement
title: FPKI Graph
permalink: /fpki/graph/
---

<link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/assets/css/gexfjs.css" />
<link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/assets/css/jquery-ui-1.13.min.css" />
<link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/assets/css/fpki-graph-wide.css" />

<script type="text/javascript" src="{{ site.baseurl }}/assets/js/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/styleguide.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/accordion.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/jquery-ui.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/respond.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/jquery-migrate-3.3.2.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/jquery.mousewheel.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/jquery-ui-1.13.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/gexfjs.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/config.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/fpki-certificate-hierarchy.js"></script>

<div class="fpki-graph-wide">
  <div class="fpki-graph-wide__container">
    <div class="fpki-graph-wide__header">
      <h1>FPKI Graph</h1>
      <p>
        The FPKI Graph displays relationships between certification authorities in the Federal PKI ecosystem.
        This wide-format page runs alongside the graph on the FPKI Ecosystem Changes page.
      </p>
    </div>

    <section class="fpki-graph-wide__hierarchy" aria-label="FPKI certificate hierarchy">
      <div
        class="fpki-hierarchy"
        data-fpki-certificate-hierarchy
        data-source="{{ site.baseurl }}/implement/tools/fpki-certificate-hierarchy.json"
        data-last-update="July 06, 2026"
      >
        <div class="fpki-hierarchy__loader" role="status" aria-live="polite">
          <div class="fpki-hierarchy__loader-mark" aria-hidden="true">GSA</div>
          <p class="fpki-hierarchy__loader-text">Loading certificate hierarchy</p>
        </div>
      </div>
    </section>

    <section class="fpki-graph-wide__graph" aria-labelledby="fpki-visual-graph-heading">
      <div class="fpki-graph-wide__graph-header">
        <h2 id="fpki-visual-graph-heading">Visual graph</h2>
      </div>
      <div class="fpki-graph-wide__viewer">
        {% include graph.html %}
      </div>
    </section>

    <div class="fpki-graph-wide__notes">
      <p>
        A P7B file of the weekly FPKI Graph run is available
        <a class="usa-link" href="{{ site.baseurl }}/implement/tools/CACertificatesValidatingToFederalCommonPolicyG2.p7b">here</a>.
        The graph data currently renders from the existing GEXF file while the JSON/YAML graph view is developed.
      </p>
      <p>
        You cannot download certificates from the graph. To download certificates, retrieve them from the
        Authority Information Access (AIA) or Subject Information Access (SIA) URIs published in the CA certificates.
      </p>
    </div>
  </div>
</div>
