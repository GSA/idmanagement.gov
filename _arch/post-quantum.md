---
layout: page
collection: arch
title:  FICAM Drives Federal Quantum Readiness
permalink: /pqc/
sidenav: arch
sticky_sidenav: true

subnav:
  - text: Resources
    href: '#resources'

---

The Federal Identity, Cybersecurity, and Access Management (FICAM) program is helping to lead federal efforts to prepare for post-quantum cryptography (PQC) to protect identities, credentials, and access at enterprise scale. 

Quantum computers could break the cryptographic algorithms that currently protect federal identity systems. While this technology doesn't exist today, experts predict it could potentially emerge as soon as 2030. Every PIV card, digital certificate, and secure connection in the Federal PKI relies on cryptography that quantum computers could compromise.

Through coordinated experimentation and strategic planning, the FICAM program is identifying quantum-resistant solutions to protect the PIV cards, digital certificates, and trust infrastructure that secure federal operations. Our approach addresses post-quantum readiness across three fronts: 

- Policy development through the ICAM Subcommittee;  
- Hands-on experimentation with quantum-resistant algorithms; and  
- Operational preparation for government-wide migration

To date, our initial experiments have identified viable pathways for integrating quantum-resistant algorithms into federal identity systems, while revealing the hardware, software, and policy updates required for successful implementation. The FICAM program will continue to experiment with post-quantum cryptography algorithms and technologies until all aspects of federal ICAM are quantum-resistant and fully protected against future cryptographic threats.

## Resources

### Experiments and Pilots

GSA’s PQC experimentation aligns with federal priorities to prepare for the advent of quantum computing, which poses significant risks to the security of classical public key cryptographic systems used in both physical and logical access controls.

**Phase 1**

<div class="usa-alert usa-alert--success">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Complete</h4>
    <p class="usa-alert__text">
      OGP published its <a href="https://www.idmanagement.gov/experiments/gsa-pqc-experiment/" target="_blank">findings from Phase 1</a> of the PQC experiment in June 2025.
    </p>
  </div>
</div>

Phase 1 piloted next-generation PIV technology to improve secure digital identity, with a focus on secure, quantum-resilient issuance and management of PIV credentials. It involved testing the use of 3K, 4K, ED25519, X25519, Dilithium 4, 5, and 6 algorithms for PIV credential issuance, authentication, digital signing, and full certificate lifecycle management.

**Phase 2**

<div class="usa-alert usa-alert--warning">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">In Progress</h4>
    <p class="usa-alert__text">
      Agencies interested in learning more about the ongoing Phase 2 experimentation should contact <a href="mailto:icam@gsa.gov">icam@gsa.gov</a>.
    </p>
  </div>
</div>

Phase 2 seeks to deliver a deployable, standards-aligned, PQC PKI CA service blueprint and an operational pilot that can scale across agencies while maintaining compatibility with Federal PKI trust expectations and existing PIV workflows.

## FPKI Bridge & Root Authority Working Lab

Federal PKI has recently introduced the Bridge & Root Authority Working Lab (BRAWL). The initial iteration of BRAWL facilitates partner PQC experiments by providing a ML-DSA-87 self-signed Root CA certificate and Bridge CA from which PKI issuing partners can request intermediate CA certificates, issuing CA certificates, or cross-certificates. This allows PKI partners to conduct end entity certificate PQC tests (e.g., application usage, processing times, etc.) with full path discovery and validation capabilities, as expected in a PQC pure FPKI environment.

Please see [this link](https://www.idmanagement.gov/implement/fpkicite/) for additional information to include the [FPKI draft PQC certificate and CRL profiles](https://www.idmanagement.gov/docs/fpki-x509-cert-profile-common-pqc.pdf) as well as contact information for requesting a CA certificate from BRAWL.
