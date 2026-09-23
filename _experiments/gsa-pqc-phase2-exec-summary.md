---
layout: page
collection: experiments
title: Phase 2 Post-Quantum Cryptography - GSA PQC Experiment
type: Markdown
permalink: /experiments/gsa-pqc-phase2/
sidenav: papers
sticky_sidenav: true

pubdate: September 2026
version: 1.0.0

subnav:
  - text: Overview
    href: '#overview'
  - text: What We Did
    href: '#what-we-did'
  - text: Phase 2 Outcomes at a Glance
    href: '#phase-2-outcomes-at-a-glance'
  - text: How We Did It
    href: '#how-we-did-it'
  - text: Contact Us
    href: '#contact-us'

---

{% include alert-warning.html heading="Draft" content="The following document is a Draft and should not be interpreted as a finalized rule." %}

<!-- Start of Header -->
<div style="margin-bottom: 20px;">
    <img src="{{site.baseurl}}/assets/logo/logo-gsa.png" style="margin-right: 15px;border:0px;" alt="U.S. General Services Administration Logo">
    <!-- <img src="{{site.baseurl}}/assets/logo/logo-sandia.png" style="margin-right: 15px;border:0px;" alt="Sandia National Laboratories Logo"> -->
    <!-- <img src="{{site.baseurl}}/assets/logo/logo-lawrence.png" style="margin-right: 15px;border:0px;" alt="Lawrence Livermore National Laboratory Logo"> -->
</div>

<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="v-c1">
      Date: {{page.pubdate}} - Version: {{page.version}}
    </button>
  </h4>
  <div id="v-c1" class="usa-accordion__content usa-prose">
    <table>
      <thead>
      <tr>
        <th scope='col' colspan="3">Phase 2 Post-Quantum Cryptography - GSA PQC Experiment</th>
      </tr>
      <tr>  
        <th scope='col'>Version Number</th>
        <th scope='col'>Date</th>
        <th scope='col'>Change Description</th>
      </tr>
      </thead>
      <tr>
        <th scope='row'>1.0.0</th>
        <td>September 23, 2026</td>
        <td>First Version</td>
      </tr>
    </table>
  </div>
</div>

## Executive Summary
Federal agencies face an urgent and mandated timeline to transition away from classical cryptographic algorithms. NIST finalized the first post-quantum cryptographic (PQC) standards in August 2024 (FIPS 203, 204, 205), and both NSM-10 and OMB M-23-02 have made PQC migration a federal requirement. With long-lived federal credentials and the "harvest now, decrypt later" threat, the window for transition is limited.

This document summarizes the **GSA Phase 2 Post-Quantum Cryptography (PQC) Experiment**, which successfully built and validated a production-pattern post-quantum PKI infrastructure. This work demonstrates that agencies do not need to wait for further software maturity to begin building PQC CA hierarchies.

## What We Did
The GSA Office of Government-wide Policy (OGP) conducted Phase 2 of its Post-Quantum Cryptography (PQC) experiment to establish a foundational PQC CA service layer. This project successfully moved beyond theoretical research to validate end-to-end PQC capabilities.

![Figure 1: High-Level Architecture]({{site.baseurl}}/assets/experiments/pqc/figure1.png)
*Figure 1: High-Level Architecture*

### Key Achievements
- **Production-Pattern PQC CA Hierarchy**: Built a complete PQC CA infrastructure capable of HSM-backed ML-DSA-87 signing.
- **Validated Use Cases**: Demonstrated a fully operational post-quantum VPN (ML-DSA-87 authentication and ML-KEM-768 key exchange) and automated workload certificate issuance via ACME.
- **Hybrid Transition Model**: Proved that hybrid (classical + PQC) certificates can be issued to support relying parties during the migration phase, ensuring backward compatibility.

## Phase 2 Outcomes at a Glance
![Figure 2: Phase 2 Outcomes at a Glance]({{site.baseurl}}/assets/experiments/pqc/figure2.png)
*Figure 2: Phase 2 Outcomes at a Glance*

## How We Did It
Phase 2 relied on commercial enterprise-grade software and hardware to ensure the resulting patterns are replicable by federal agencies.

- **CA Software**: Deployed EJBCA Enterprise 9.5.1 and Red Hat Certificate System (RHCS) 11.9.0.
- **Hardware Security**: Integrated the Thales Luna Network HSM 7 (FIPS 140-3 Level 3) for non-extractable CA signing keys.
- **Implementation Partner Support**: This effort was supported by technology partners including Unifyia, Red Hat, Thales, and Keyfactor.
- **Standards Alignment**: All implementations align with FIPS 204 (ML-DSA) and FIPS 203 (ML-KEM) standards.

## Contact Us
If you are interested in receiving the full report detailing Phase 2 efforts and findings, please reach out to [icam@gsa.gov](mailto:icam@gsa.gov).
