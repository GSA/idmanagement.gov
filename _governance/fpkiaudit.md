---
layout: page
collection: governance
title:  Federal PKI Policy and Compliance Audit
permalink: governance/fpkiaudit/
sidenav: governance
sticky_sidenav: true

subnav:
  - text: Federal PKI Policies and Profiles
    href: '#federal-pki-policies-and-profiles'
  - text: Annual Review Requirements for All Certification Authorities
    href: '#annual-review-requirements-for-all-certification-authorities'
  - text: Annual Review Schedule
    href: '#annual-review-schedule'
  - text: Audit Information for the Federal PKI Management Authority
    href: '#audit-information-for-the-federal-pki-management-authority'
  - text: Reporting Incidents
    href: '#reporting-incidents'
---

This page contains information to help Federal PKI program managers and auditors.
- Contains the Federal PKI policies and profiles as well as annual Federal PKI annual review schedule.
- It can help auditors assess Certification Authorities operated as part of the Federal PKI. 
- It can help the general public understand how the Federal PKI Management Authority (FPKIMA) provides trusted PKI and CA operations.

For any questions, please contact fpki at gsa.gov.


# Federal PKI Policies and Profiles

The Federal Public Key Infrastructure (FPKI) provides the government with a trust framework and infrastructure to administer digital certificates and public-private key pairs. For more information on the Federal PKI and PIV, go to the:
- [FPKI Guide](https://playbooks.idmanagement.gov/fpki/){:target="_blank"}{:rel="noopener noreferrer"}
- [PIV Guide](https://playbooks.idmanagement.gov/piv/){:target="_blank"}{:rel="noopener noreferrer"}

The [FPKI Policy Authority (FPKIPA)](../governance/ficam#federal-public-key-infrastructure-policy-authority) maintains two certificate policies (Common Policy Framework, and Federal Bridge). All cross-certified CA certificate policies are mapped to the Federal Bridge certificate policy.

| FPKI Initiatve | Policy Name | Profile | Change Proposals |
| -------------- | ----------- | ------- | ---------------- |
| Federal Common Policy | [X.509 Certificate Policy for the U.S. Federal PKI Common Policy Framework](../../docs/fpki-x509-cert-policy-common.pdf){:target="_blank"} | [Common Policy X.509 Certificate and CRL Profiles ](../../docs/fpki-x509-cert-profile-common.pdf){:target="_blank"}  | [Common Change Proposals](../fpkiarchive/) |
| Federal Bridge | [X.509 Certificate Policy for the Federal Bridge Certification Authority (FBCA)](../../docs/fpki-x509-cert-policy-fbca.pdf){:target="_blank"} and  | [X.509 Certificate and CRL Extensions Profile](../../docs/fpki-x509-cert-profiles-fbca.pdf){:target="_blank"} | [Bridge Change Proposals](../fpkiarchive/) |
| Federal Bridge PIV-I | [X.509 Certificate Policy for the Federal Bridge Certification Authority (FBCA)](../../docs/fpki-x509-cert-policy-fbca.pdf){:target="_blank"} and [PIV-I for Federal Issuers](../../docs/fpki-pivi-for-issuers.pdf){:target="_blank"}  | [X.509 Certificate and CRL Extensions Profile for PIV-I Cards](../../docs/fpki-x509-cert-profiles-pivi.pdf){:target="_blank"}  | [Bridge Change Proposals](../fpkiarchive/) |
| Public Trust TLS | [U.S. Federal Public Trust TLS Certificate Policy](https://devicepki.idmanagement.gov/){:target="_blank"}{:rel="noopener noreferrer"} |  The CAs operating under this Certificate Policy in the new infrastructure will not have cross-certificates with any existing Federal Public Key Infrastructure CAs.|

The Federal PKI has the following supplementary guidance:

- [Security Controls Overlay of NIST Special Publication 800-53 Revision 5 Security Controls for Federal PKI Systems (PDF, February 2021)](../../docs/fpki-overlay-sp-800-53.pdf){:target="_blank"} – The application of NIST Special Publication (SP) 800-53 security controls is required to operate a Certification Authority that is used in the FPKI and contains federal data. Review the controls overlay document to understand the requirements and details of each applicable control.
- [FPKI Key Recovery Policy (PDF, October 2017)](../../docs/fpki-key-recovery){:target="_blank"} - The FPKI Key Recovery Policy (KRP) supplements the FPKI Certificate Policies and describes the procedural and technical security controls needed to operate a Key Recovery System (KRS) securely, in accordance with FPKIPA requirements.
- [Registration Authority Agreement Template v1.0 (Word, April 2017)](../../docs/fpki-ssp-raa.docx){:target="_blank"} 
- [FPKI Incident Management Plan (PDF, September 2020)](../../docs/fpki-imp.pdf){:target="_blank"}
- [Archived copies of Certificate Polices, Profiles, and other FPKI-related documents](../fpkiarchive/)


# Annual Review Requirements for All Certification Authorities

Independent compliance audits are the primary way that the Federal Public Key Infrastructure Policy Authority (FPKIPA) ensures that Certification Authorities participating in the Federal PKI comply with the requirements identified in the appropriate Certificate Policies (CPs). Audits are an important component of the Annual Review Requirements.

Audits are required annually for Certification Authorities.  Annual review packages should be submitted to fpki at gsa.gov.

- [FPKI Annual Review Requirements (PDF, April 2017)](../../docs/fpki-annual-review-requirements.pdf){:target="_blank"} – Requirements for performing and reporting annual compliance audits.
- PIV and PIV-I Annual Testing - supports FPKI Annual Reviews and can be done either in-person at the GSA FIPS 201 Lab or using available tools such as the [Card Conformance Tool (CCT)](https://playbooks.idmanagement.gov/fpki/tools/cct/){:target="_blank"}{:rel="noopener noreferrer"} and [Certificate Profile Conformance Tool (CPCT)](https://playbooks.idmanagement.gov/fpki/tools/cpct/){:target="_blank"}{:rel="noopener noreferrer"}
- [Non-Compliance Management Framework For The Federal Public Key Infrastructure (FPKI) (PDF, January 2016)](../../docs/fpki-nmf.pdf){:target="_blank"}


# Annual Review Schedule

| Entity	| Type	| Annual Review Package Due Date|
| ------- | :-----: | :-----------------------------: |
| CertiPath	| Bridge |	Jun 30 |
| Drug Enforcement Agency (DEA)	| Trust Partner	| Sep 30 |
| Digicert (DirectTrust)	| Affiliate PKI	| July 31 |
| Digicert (Formerly Symantec Non-Federal Issuer [NFI])	| Affiliate PKI	| July 31 |
| Digicert (Formerly Symantec Shared Service Provider [SSP])	| SSP	| July 31 |
| Department of Defense (DoD)	| Affiliate PKI	| Aug 30 |
| Department of State (DOS)	| Affiliate PKI	| Jun 30 |
| Department of the Treasury	| SSP	| July 31 |
| Entrust NFI	| Affiliate PKI	| Nov 22 |
| Entrust Federal SSP	| SSP	| Nov 22 |
| Exostar	| Affiliate PKI	| May 31 |
| Government Publishing Office (GPO)	| Affiliate PKI	| Oct 31 |
| Identrust NFI	| Affiliate PKI	| Aug 31 |
| Patent and Trademark Office (PTO)	| Affiliate PKI	| April 30 |
| SAFE Identity	| Bridge	| Oct 31 |
| Southwest Texas Regional Advisory Council (STRAC)	| Bridge	| Nov 30 |
| Transglobal Secure Collaboration Program (TSCP)	| Bridge	| May 31 |
| Verizon SSP	| SSP	| July 31 |
| Wide Point NFI	| Affiliate PKI	| May 31 |
| Wide Point SSP	| SSP	| May 31 |


# Audit Information for the Federal PKI Management Authority

This section contains information on audits performed on the Federal Common Policy Certification Authority and the Federal Bridge Certification Authority.

The Federal Common Policy Certification Authority operates in compliance with the Federal Common Certificate Policy. The Federal Bridge Certificate Authority (FBCA) operates in compliance with the Federal Bridge Certificate Policy. Both are [located on this page](#federal-pki-policies-and-profiles). The FPKIMA Certification Practice Statement (CPS) documents the operational practices required to ensure trusted operations. Additional compliance audit information for the FPKI Trust Infrastructure Systems is also provided.

- [U.S. Federal PKI Certification Practice Statement (PDF, May 2020) – Version 5.1](../../docs/fpki-fpkima-cps.pdf){:target="_blank"}
- [U.S. Federal PKI Audit Letter of Compliance (PDF, October 2020)](../../docs/fpki-fpkima-audit-letter.pdf){:target="_blank"} – Results of the 2019-2020 Compliance Audit for the FPKI Trust Infrastructure Systems.
- [FPKI Trust Infrastructure “HTTP.FPKI.Gov” URL Site Map (PDF, October 2020)](../../docs/fpki-fpkima-sitemap.pdf){:target="_blank"}


# Reporting Incidents

To report a potential key compromise, security incident, or fraud, waste, or abuse involving Federal PKI certificates, please contact fpki-help at gsa.gov with supporting evidence of the incident.
