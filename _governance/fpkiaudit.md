---
layout: page
collection: governance
title:  FPKI Policy and Compliance Audit
permalink: governance/fpkiaudit/
sidenav: governance
sticky_sidenav: true

subnav:
  - text: FPKI Policies and Profiles
    href: '#fpki-policies-and-profiles'
  - text: Annual Review Requirements for All Certification Authorities
    href: '#annual-review-requirements-for-all-certification-authorities'
  - text: Annual Review Schedule
    href: '#annual-review-schedule'
  - text: Audit Information for the FPKI Management Authority
    href: '#audit-information-for-the-fpki-management-authority'
  - text: Reporting Incidents
    href: '#reporting-incidents'
---

This page contains information to help Federal Public Key Infrastructure (FPKI) program managers and auditors.
- It includes the FPKI policies and profiles as well as annual FPKI annual review schedule.
- It can help auditors assess certification authorities (CAs) operated as part of the FPKI. 
- It can help the general public understand how the FPKI Management Authority (FPKIMA) provides trusted PKI and CA operations.

For any questions, please contact fpki at gsa.gov.


## FPKI Policies and Profiles

The Federal Public Key Infrastructure (FPKI) provides the government with a trust framework and infrastructure to administer digital certificates and public-private key pairs. For more information on the FPKI and PIV, go to the:
- [FPKI Guide](https://playbooks.idmanagement.gov/fpki/){:target="_blank"}{:rel="noopener noreferrer"}
- [PIV Guide](https://playbooks.idmanagement.gov/piv/){:target="_blank"}{:rel="noopener noreferrer"}

The [FPKI Policy Authority (FPKIPA)]({{site.baseurl}}/governance/ficam/#federal-public-key-infrastructure-policy-authority) maintains two certificate policies (the Common Policy Framework and the Federal Bridge). All cross-certified CA certificate policies are mapped to the Federal Bridge certificate policy.

| FPKI Initiatve | Policy Name | Profile | Change Proposals |
| -------------- | ----------- | ------- | ---------------- |
| Federal Common Policy | [X.509 Certificate Policy for the U.S. FPKI Common Policy Framework v2.3]({{site.baseurl}}/docs/fpki-x509-cert-policy-common.pdf){:target="_blank"}{:rel="noopener noreferrer"} | [Common Policy X.509 Certificate and CRL Profiles v2.2]({{site.baseurl}}/docs/fpki-x509-cert-profile-common.pdf){:target="_blank"}{:rel="noopener noreferrer"}  | [Common Change Proposals]({{site.baseurl}}/governance/fpkiarchive/) |
| Federal Bridge | [X.509 Certificate Policy for the Federal Bridge Certification Authority (FBCA) v2.36]({{site.baseurl}}/docs/fpki-x509-cert-policy-fbca.pdf){:target="_blank"}{:rel="noopener noreferrer"} | [X.509 Certificate and CRL Extensions Profile v1.9]({{site.baseurl}}/docs/fpki-x509-cert-profiles-fbca.pdf){:target="_blank"}{:rel="noopener noreferrer"} | [Bridge Change Proposals]({{site.baseurl}}/governance/fpkiarchive/) |
| Federal Bridge PIV-I | [X.509 Certificate Policy for the Federal Bridge Certification Authority (FBCA) v2.36]({{site.baseurl}}/docs/fpki-x509-cert-policy-fbca.pdf){:target="_blank"}{:rel="noopener noreferrer"} and <br>[PIV-I for Federal Agencies](https://playbooks.idmanagement.gov/playbooks/pivi/){:target="_blank"}{:rel="noopener noreferrer"}  | [X.509 Certificate and CRL Extensions Profile for PIV-I Cards v1.3]({{site.baseurl}}/docs/fpki-x509-cert-profiles-pivi.pdf){:target="_blank"}{:rel="noopener noreferrer"}  | [Bridge Change Proposals]({{site.baseurl}}/governance/fpkiarchive/) |
| Public Trust TLS | [U.S. Federal Public Trust TLS Certificate Policy v1.0](https://devicepki.idmanagement.gov/){:target="_blank"}{:rel="noopener noreferrer"} | [U.S. Federal Public Trust TLS Certificate Profiles](https://devicepki.idmanagement.gov/certificateprofiles/){:target="_blank"}{:rel="noopener noreferrer"} | No change proposals |

The FPKI has the following supplementary guidance:

- [Security Controls Overlay of NIST Special Publication 800-53 Revision 5 Security Controls for FPKI Systems (PDF, February 2021)]({{site.baseurl}}/docs/fpki-overlay-sp-800-53.pdf){:target="_blank"}{:rel="noopener noreferrer"} – The application of NIST Special Publication (SP) 800-53 security controls is required to operate a CA that is used in the FPKI and contains federal data. Review the controls overlay document to understand the requirements and details of each applicable control.
- [FPKI Key Recovery Policy (PDF, October 2017)]({{site.baseurl}}/docs/fpki-key-recovery.pdf){:target="_blank"}{:rel="noopener noreferrer"} - The FPKI Key Recovery Policy (KRP) supplements the FPKI Certificate Policies and describes the procedural and technical security controls needed to operate a Key Recovery System (KRS) securely, in accordance with FPKIPA requirements.
- [Registration Authority Agreement Template v1.0 (Word, April 2017)]({{site.baseurl}}/docs/fpki-ssp-raa.docx){:target="_blank"}{:rel="noopener noreferrer"} - The purpose of this document is to identify and explain the roles and responsibilities of an enrollment/registration agent under the Federal PKI COMMON Policy Framework.
- [FPKI Incident Management Plan (PDF, September 2020)]({{site.baseurl}}/docs/fpki-imp.pdf){:target="_blank"}{:rel="noopener noreferrer"} - This document provides guidance on the roles and responsibilities applicable to the FPKI Policy Authority (FPKIPA), FPKI Management Authority (FPKIMA), and FPKI affiliates in the event of an incident. 
- [Archived copies of Certificate Polices, Profiles, and other FPKI-related documents]({{site.baseurl}}/governance/fpkiarchive/) - This pages contains three years of FPKI-related documents.


## Annual Review Requirements for All Certification Authorities

Independent compliance audits are the primary way that the Federal Public Key Infrastructure Policy Authority (FPKIPA) ensures that CAs participating in the FPKI comply with the requirements identified in the appropriate Certificate Policies (CPs). Audits are an important component of the Annual Review Requirements.

Audits are required annually for CAs.  Annual review packages should be submitted to fpki at gsa.gov.

- [FPKI Annual Review Requirements (PDF, May 2022)]({{site.baseurl}}/docs/fpki-annual-review-requirements.pdf){:target="_blank"}{:rel="noopener noreferrer"} – This document includes requirements for performing and reporting annual compliance audits.
- PIV and PIV-I Annual Testing - supports FPKI Annual Reviews and can be done either in person at the GSA FIPS 201 Lab or using available tools such as the [Card Conformance Tool (CCT)](https://playbooks.idmanagement.gov/fpki/tools/cct/){:target="_blank"}{:rel="noopener noreferrer"} and [Certificate Profile Conformance Tool (CPCT)](https://playbooks.idmanagement.gov/fpki/tools/cpct/){:target="_blank"}{:rel="noopener noreferrer"}
- [Non-Compliance Management Framework For The Federal Public Key Infrastructure (FPKI) (PDF, January 2016)]({{site.baseurl}}/docs/fpki-nmf.pdf){:target="_blank"}{:rel="noopener noreferrer"} - This document provides guidance for the FPKI Policy Authority (FPKIPA) for responding to situations in which an FPKI FBCA member is not meeting their Memorandum of Agreement (MOA) requirements and obligations.


## Annual Review Schedule

| Entity	| Type	| Annual Review Package Due Date|
| ------- | :-----: | :-----------------------------: |
| CertiPath	| Bridge |	June 30 |
| Drug Enforcement Agency (DEA)	| Trust Partner	| September 30 |
| DigiCert (ECPS)	| Affiliate PKI	| July 31 |
| DigiCert (Formerly Symantec Non-Federal Issuer [NFI])	| Affiliate PKI	| July 31 |
| DigiCert (Formerly Symantec Shared Service Provider [SSP])	| SSP	| July 31 |
| Department of Defense (DoD)	| Affiliate PKI	| October 31 |
| Department of State (DOS)	| Affiliate PKI	| October 31 |
| Department of the Treasury	| SSP	| July 31 |
| Entrust NFI	| Affiliate PKI	| November 30 |
| Entrust Federal SSP	| SSP	| November 30 |
| Exostar	| Affiliate PKI	| June 10 |
| Government Publishing Office (GPO)	| Affiliate PKI	| October 31 |
| IdenTrust NFI	| Affiliate PKI	| August 31 |
| Patent and Trademark Office (PTO)	| Affiliate PKI	| October 31 |
| SAFE Identity	| Bridge	| October 31 |
| Southwest Texas Regional Advisory Council (STRAC)	| Bridge	| November 30 |
| Transglobal Secure Collaboration Program (TSCP)	| Bridge	| July 31 |
| Verizon SSP	| SSP	| August 31 |
| WidePoint NFI	| Affiliate PKI	| May 31 |
| WidePoint SSP	| SSP	| May 31 |


## Audit Information for the FPKI Management Authority

This section contains information on audits performed on the Federal Common Policy Certification Authority and the Federal Bridge Certification Authority.

- The Federal Common Policy Certification Authority (FCPCA) operates in compliance with the Federal Common Certificate Policy. 
- The Federal Bridge Certificate Authority (FBCA) operates in compliance with the Federal Bridge Certificate Policy.

The FPKIMA Certification Practice Statement (CPS) documents the operational practices required to ensure trusted operations. Additional compliance audit information for the FPKI Trust Infrastructure Systems is also provided below.

- [U.S. FPKI Certification Practice Statement (PDF, March 2022) – Version 6.1]({{site.baseurl}}/docs/fpki-fpkima-cps.pdf){:target="_blank"}{:rel="noopener noreferrer"}
- [U.S. FPKI Audit Letter of Compliance (PDF, September 2022)]({{site.baseurl}}/docs/fpki-fpkima-audit-letter.pdf){:target="_blank"}{:rel="noopener noreferrer"} – Results of the 2020-2021 Compliance Audit for the FPKI Trust Infrastructure Systems.
- [FPKI Trust Infrastructure “HTTP.FPKI.Gov” URL Site Map (PDF, September 2022)]({{site.baseurl}}/docs/fpki-fpkima-sitemap.pdf){:target="_blank"}{:rel="noopener noreferrer"}

## Reporting Incidents

To report a potential key compromise, security incident, or fraud, waste, or abuse involving FPKI certificates, please contact fpki-help at gsa.gov with supporting evidence of the incident.
