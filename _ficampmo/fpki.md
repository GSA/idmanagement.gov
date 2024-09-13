---
layout: page
collection: ficampmo
title:  Federal PKI Governance and Compliance Audit Information
permalink: /fpki/
sidenav: functions
sticky_sidenav: true

subnav:
  - text: Federal PKI Policies and Profiles
    href: '#federal-pki-policies-and-profiles'
  - text: Annual Review Requirements for All Certification Authorities
    href: '#annual-review-requirements-for-all-certification-authorities'
  - text: Annual Review Schedule
    href: '#annual-review-schedule'
  - text: Compliance Test Tools for Annual Reviews
    href: '#compliance-test-tools-for-annual-reviews'
  - text: Audit Information for the FPKI Management Authority
    href: '#audit-information-for-the-fpki-management-authority'
  - text: Report an Incident
    href: '#report-an-incident'
  # - text: Federal PKI Monthly Activity Report
  #   href: '#federal-pki-monthly-activity-report'
  - text: Federal PKI Document Archive
    href: '#federal-pki-document-archive'
---

This page contains information to help Federal Public Key Infrastructure (FPKI) program managers and auditors.
- It includes the FPKI policies and profiles as well as annual FPKI annual review schedule.
- It can help auditors assess certification authorities (CAs) operated as part of the FPKI. 
- It can help the general public understand how the FPKI Management Authority (FPKIMA) provides trusted PKI and CA operations.

For any questions, please contact fpki at gsa.gov.

## Federal PKI Policies and Profiles

The Federal Public Key Infrastructure (FPKI) provides the government with a trust framework and infrastructure to administer digital certificates and public-private key pairs. For more information on the FPKI,  PIV, and PIV-I visit the following links:
- [FPKI 101]({{site.baseurl}}/university/fpki/)
- [PIV 101]({{site.baseurl}}/university/piv/)
- [PIV-I 101]({{site.baseurl}}/university/pivi/)

The [FPKI Policy Authority (FPKIPA)]({{site.baseurl}}/ficam/#federal-public-key-infrastructure-policy-authority) maintains three certificate policies (the Common Policy Framework, the Federal Bridge Certification Authority Certificate Policy, and the Federal Public Trust TLS Certificate Policy). All cross-certified CA certificate policies are mapped to the Federal Bridge certificate policy.

|Federal PKI Policy | Policy Name | Profile | Change Proposals |
| -------------- | ----------- | ------- | ---------------- |
| Federal Common Policy | [X.509 Certificate Policy for the U.S. FPKI Common Policy Framework v2.8]({{site.baseurl}}/docs/fpki-x509-cert-policy-common.pdf){:target="_blank"}{:rel="noopener noreferrer"} | [Common Policy X.509 Certificate and CRL Profiles v2.2]({{site.baseurl}}/docs/fpki-x509-cert-profile-common.pdf){:target="_blank"}{:rel="noopener noreferrer"}  | [Common Change Proposals]({{site.baseurl}}/fpki/#federal-pki-document-archive) |
| Federal Bridge | [X.509 Certificate Policy for the Federal Bridge Certification Authority (FBCA) v3.5]({{site.baseurl}}/docs/fpki-x509-cert-policy-fbca.pdf){:target="_blank"}{:rel="noopener noreferrer"} <br><br> and [PIV-I for Federal Agencies]({{site.baseurl}}/university/pivi/){:target="_blank"}{:rel="noopener noreferrer"} | [Federal Bridge Certification Authority (FBCA) X.509 Certificate and CRL Extensions Profile v2.0]({{site.baseurl}}/docs/fpki-x509-cert-profiles-fbca.pdf){:target="_blank"}{:rel="noopener noreferrer"} | [Bridge Change Proposals]({{site.baseurl}}/fpki/#federal-pki-document-archive) |
| Federal Public Trust TLS | [U.S. Federal Public Trust TLS PKI Certificate Policy v1.1]({{site.baseurl}}/docs/us-federal-public-trust-tls-cp.pdf){:target="_blank"}{:rel="noopener noreferrer"} | Profiles are included in Section 7 of the Policy | No change proposals |

The FPKI has the following supplementary guidance:

- [Security Controls Overlay of NIST Special Publication 800-53 Revision 5 Security Controls for FPKI Systems (PDF, February 2021)]({{site.baseurl}}/docs/fpki-overlay-sp-800-53.pdf){:target="_blank"}{:rel="noopener noreferrer"} – The application of NIST Special Publication (SP) 800-53 security controls is required to operate a CA that is used in the FPKI and contains federal data. Review the controls overlay document to understand the requirements and details of each applicable control.
- [Registration Authority Agreement Template v1.0 (Word, April 2017)]({{site.baseurl}}/docs/fpki-ssp-raa.docx){:target="_blank"}{:rel="noopener noreferrer"} - The purpose of this document is to identify and explain the roles and responsibilities of an enrollment/registration agent under the Federal PKI COMMON Policy Framework.
- [FPKI Incident Management Plan (PDF, September 2020)]({{site.baseurl}}/docs/fpki-imp.pdf){:target="_blank"}{:rel="noopener noreferrer"} - This document provides guidance on the roles and responsibilities applicable to the FPKI Policy Authority (FPKIPA), FPKI Management Authority (FPKIMA), and FPKI affiliates in the event of an incident.
- [Archived copies of Certificate Polices, Profiles, and other FPKI-related documents]({{site.baseurl}}/fpki/#federal-pki-document-archive) - This pages contains three years of FPKI-related documents.
  - [FPKI Key Recovery Policy (PDF, Subsumed, October 2017)]({{site.baseurl}}/docs/archived/fpki-key-recovery-policy.pdf){:target="_blank"}{:rel="noopener noreferrer"} - for reference only, original consolidated key recovery policy.  All requirements and controls have been mapped and subsumed into other FPKI Certificate Policy documents.


## Annual Review Requirements for All Certification Authorities

Independent compliance audits are the primary way that the Federal Public Key Infrastructure Policy Authority (FPKIPA) ensures that entities participating in the FPKI comply with the requirements identified in the appropriate Certificate Policies (CPs). Audits are an important component of the Annual Review Requirements.

Audits are required annually for supporting functions and elements of each entity.  Annual review packages should be submitted to fpki at gsa.gov.

- [FPKI Annual Review Requirements (PDF, September 2024)]({{site.baseurl}}/docs/fpki-annual-review-requirements.pdf){:target="_blank"}{:rel="noopener noreferrer"} – This document includes requirements for performing and reporting annual compliance audits.
- [RA Audit Guidance Memorandum (PDF, October 2022]({{site.baseurl}}/docs/fpki-ra-audit-guidance.pdf){:target="_blank"}{:rel="noopener noreferrer"} – This FPKIPA Memorandum reiterates the necessity of RA audits in supporting PKI operations, normalizes differing terminology used across various references, and provides options for reducing potential duplication of RA audit efforts, as applicable to PIV issuers.
- Annual PIV and PIV-I Credential Issuer (PCI) Test Report: This test report supports the FPKI Annual Reviews and can be done either in person at the GSA FIPS 201 lab or remotely by the package submitter. Further details related to the Annual PCI Testing are located [here]({{site.baseurl}}/fips201ep/#personal-identity-verification-credentials).
- [Non-Compliance Management Framework For The Federal Public Key Infrastructure (FPKI) (PDF, January 2016)]({{site.baseurl}}/docs/fpki-nmf.pdf){:target="_blank"}{:rel="noopener noreferrer"} - This document provides guidance for the FPKI Policy Authority (FPKIPA) for responding to situations in which an FPKI FBCA member is not meeting their Memorandum of Agreement (MOA) requirements and obligations.


## Annual Review Schedule

| Entity	| Type	| Annual Review Package Due Date|
| ------- | :-----: | :-----------------------------: |
| CertiPath	| Bridge |	June 30 |
| DigiCert (ECPS)	| Affiliate PKI	| July 31 |
| DigiCert (Formerly Symantec Non-Federal Issuer [NFI])	| Affiliate PKI	| July 31 |
| DigiCert (Formerly Symantec Shared Service Provider [SSP])	| SSP	| July 31 |
| Department of Defense (DoD)	| Affiliate PKI	| November 30 |
| Department of State (DOS)	| Affiliate PKI	| October 31 |
| Department of the Treasury	| SSP	| July 31 |
| Entrust NFI	| Affiliate PKI	| November 30 |
| Entrust Federal SSP	| SSP	| November 30 |
| Exostar	| Affiliate PKI	| June 30 |
| IdenTrust NFI	| Affiliate PKI	| August 31 |
| Patent and Trademark Office (PTO)	| Affiliate PKI	| October 31 |
| SAFE Identity	| Bridge	| June 30 |
| Southwest Texas Regional Advisory Council (STRAC)	| Bridge	| November 30 |
| Transglobal Secure Collaboration Program (TSCP)	| Bridge	| July 31 |
| Verizon SSP	| SSP	| August 31 |
| WidePoint NFI	| Affiliate PKI	| May 31 |
| WidePoint SSP	| SSP	| May 31 |

## Compliance Test Tools for Annual Reviews

The FPKI Program supports three remote PIV, PIV-I, and digital certificate test tools to support FPKI annual reviews as listed below:

1. The [Card Conformance Tool (CCT)](https://github.com/GSA/piv-conformance/releases){:target="_blank"}{:rel="noopener noreferrer"} is a GSA managed, Java tool hosted on GitHub that can verify that a Personal Identity Verification (PIV) or PIV-Interoperable (PIV-I) conforms to the PIV data model.
2. The [Certificate Profile Conformance Tool (CPCT)](https://github.com/GSA/cpct-tool/releases){:target="_blank"}{:rel="noopener noreferrer"} is a self-hosted application that analyzes public X.509 certificates for conformance to a specified FPKI profile.
3. The [KSJavaAPI](https://github.com/grandamp/KSJavaAPI){:target="_blank"}{:rel="noopener noreferrer"} is Java API hosted on GitHub and used to leverage that the information stored in the PIV/ PIV-I applets conform to NIST SP 800-73.

To request the annual testing report for PIV/PIV-I cards, fill out the [Annual PIV Credential Issuer (PCI) Testing Application Form (PDF, February 2020)]({{site.baseurl}}/docs/fips201ep-pcitestform.pdf) and send it with Compliance Test Tool outputs and testing artifacts (for remote testing) to fips201ep@ gsa.gov.

## Submitting a Test Results Package
If you are running the Card Conformance Tool as part of the annual requirement to undergo PIV/PIV-I testing, you must email the artifacts listed below to fips201ep at gsa.gov.

1.	A completed [testing application]({{site.baseurl}}/docs/fips201ep-pcitestform.pdf){:target="_blank"}{:rel="noopener noreferrer"} for each PCI configuration evaluated (See Section 1 of the application for more information).
2.	All accompanying Card Conformance Tool Log files, these reside in the same directory as the extracted package after the tests have been run:
  - logs (directory)   
  - piv-artifacts (directory)   
  - x509-artifacts (directory)   
  - x509-certs (directory)   
  - the test database used for the evaluation (e.g., PIV_Production_Cards.db)   
3.	The card's Answer-to-Rest value presented within the "Reader Status" text box (e.g., 3bd6970081b1fe451f078031c1521118f9), which is displayed on the CCT landing page provided a card is available to the test system.
4.	A report (PDF or XLSX) for each certificate found on the card (use the Certificate Profile Conformance Tool (web application) to generate the reports.
5.	High-resolution card photos of the front and back of each card tested.

{% include alert-success.html heading="Helpful Hint" content="Collecting all accompanying Card Conformance Tool Log files is most easily achieved by zipping the fips201-card-conformance-tool-[Release-Version]-[Release-Date] directory; this is the same directory where you had extracted the tool." %}

{% include alert-warning.html heading="Note" content="Failure to submit a complete CCT Package may delay review of your testing results and completion of your annual FPKI PIV/PIV-I testing requirement." %}

## Audit Information for the FPKI Management Authority

This section contains information on audits performed on the Federal Common Policy Certification Authority and the Federal Bridge Certification Authority.

- The Federal Common Policy Certification Authority (FCPCA) operates in compliance with the Federal Common Certificate Policy. 
- The Federal Bridge Certificate Authority (FBCA) operates in compliance with the Federal Bridge Certificate Policy.

The FPKIMA Certification Practice Statement (CPS) documents the operational practices required to ensure trusted operations. Additional compliance audit information for the FPKI Trust Infrastructure Systems is also provided below.

- [U.S. FPKI Certification Practice Statement (PDF, November 2023) – Version 6.4]({{site.baseurl}}/docs/fpki-fpkima-cps.pdf){:target="_blank"}{:rel="noopener noreferrer"}
- [U.S. FPKI Audit Letter of Compliance (PDF, August 2024)]({{site.baseurl}}/docs/fpki-fpkima-audit-letter.pdf){:target="_blank"}{:rel="noopener noreferrer"} – Results of the August 2023-August 2024 Compliance Audit for the FPKI Trust Infrastructure Systems.
- [FPKI Trust Infrastructure “HTTP.FPKI.Gov” URL Site Map (PDF, September 2022)]({{site.baseurl}}/docs/fpki-fpkima-sitemap.pdf){:target="_blank"}{:rel="noopener noreferrer"}

## Report an Incident
FPKI affiliates include federal agencies and commercial service providers operating a certification authority certified by the Federal PKI Policy Authority. FPKI affiliate responsibilities related to the incident management process include:
1. Communicating security incidents involving infrastructures or services to the FPKI Authorities, users/customers, and known relying parties.
2. Providing additional investigation support and/or information about incidents to the FPKI Authorities as they become known, and
3. Conducting remediation activities once an incident is confirmed.

To report a security incident, such as a key compromise, data breach, or other fraud waste or abuse regarding FPKI CAs or certificates, please contact both fpki at gsa dot gov and  fpki-help at gsa dot gov, and include any relevant known information on the incident up to that point.  Further information will be requested from the affiliate per the [FPKI Incident Management Plan]({{site.baseurl}}/docs/fpki-imp.pdf){:target="_blank"}{:rel="noopener noreferrer"}.

<!-- # Federal PKI Monthly Activity Report

Updated: May 3, 2023 

This report provides a technical and policy compliance status for each Federal Public Key Infrastructure (FPKI) Affiliate.

- [Federal Agency and Affiliate PKI Status Summary](#federal-agency-and-affiliate-pki-status-summary)
- [FPKIMA Certificate Activity](#fpkima-certificate-activity)
- [Repository Availability](#repository-availability)

Resolve issues by contacting one of the teams:  

- Technical issues: Contact the [FPKIMA Team](mailto:fpki-help@gsa.gov) 
- Certificate Policy issues: Contact the [Certificate Policy Working Group (CPWG)](mailto:fpkipa_cpwg@listserv.gsa.gov)  

## Federal Agency and Affiliate PKI Status Summary
If there are operational issues with a Federal Agency or affiliate connected to the Federal Common Policy CA (FCPCA) or the Federal Bridge CA (FBCA) the issues would be summarized here. Currently there are no identified issues that affect technical interoperability or non-compliance with applicable Certificate Policies (CP). 

## FPKIMA Certificate Activity
The activity listed in this section is limited to the certificates issued BY or TO the Federal Bridge or Federal Common Policy CA.

Certificates issued and published to the FPKI Trust Infrastructure Repository in the last 30 days.

| Affiliate | Subject CA | Issuing CA | Serial # & SHA-1 Hash | Issued Date | Expiration Date |
| --------- | ---------- | ---------- | --------------------- | ----------- | ----------- |
| DigiCert | DigiCert Class 3 SSP Intermediate CA - G4 | Federal Bridge CA G4 | Serial:14ec45ef7224f298e41cdfb2e3392be2329d55bb Hash:527bc6165aa93e38853714675e2a452e1437a522 | 5/2/23 | 5/2/23  | 

Certificates removed from the FPKI Trust Infrastructure Repository in the last 30 days.

| Affiliate | Subject CA | Issuing CA | Serial # & SHA-1 Hash | Expiration Date | Action |
| --------- | ---------- | ---------- | --------------------- | ----------- | ----------- |
| DigiCert |  DigiCert Class 3 SSP Intermediate CA – G4 | Federal Bridge CA G4 | Serial:15728cdad19f38d34b9d09df45729a6f8df6a2ba Hash:8a8e06a378289206a64c85ad7dd37846b1ed3aad | 5/14/23 | Renewed |

The following certificates are planned for a certificate action in the near future; dates to be determined based on availability.

| Affiliate |   Subject CA   | Issuing CA | Serial # & SHA-1 Hash | Expiration Date | Action |
| --------- | -------------- | ---------- | --------------------- | --------------- | ------ |
| GPO |   GPO PCA   | Federal Bridge CA G4 | Serial:195cb9376d0a7dea78ab51500fd5f74a85a5f602 Hash:52db35c57036a5641bb8dd6b552391a7815681dd | 6/25/23 | Removal TBD |

## Repository Availability 
Repository availability is an uptime metric for Certificate Revocation List availability, based on monitoring by the FPKIMA. The table only contains Certification Authorities directly signed by the Federal Common Policy Root CA, Federal Common Policy Root G2, or Federal Bridge CA G4. A metric of "99" in the table below means the Certificate Revocation List was available for 99% of the given month; in other words, the file was not available for 1% of the month. 

| Federal Agency or Affiliate CA | FPKIMA CA | Last Month | 
| ------------------------------ | --------- | ------------ | 
| CertiPath Bridge CA - G3 | FBCA | 100 | 
| DigiCert Federated ID L3 CA | FBCA | 100 | 
| DigiCert Class 3 SSP Intermediate CA - G4	| FBCA | 100 |
| DoD Interoperability Root CA 2 | FBCA	| 100 |
| Entrust Managed Services NFI Root CA | FBCA |	100 |
| Exostar Federated Identity Service Root CA | FBCA	| 100 |
| Federal Bridge CA G4 | FBCA | 100	| 
| GPO PCA | FBCA | 100 | 
| IdenTrust Global Common Root CA 1 | FBCA | 100 | 
| SAFE Identity Bridge CA	| FBCA | 100 |
| STRAC Bridge Root Certification Authority	| FBCA | 99.53 |
| Symantec Class 3 SSP Intermediate CA - G3	| FBCA | 100 |
| TSCP SHA256 Bridge CA	| FBCA | 100 |
| USPTO_INTR_CA1 | FBCA	| 100 |
| WidePoint NFI Root 2	| FBCA	| 100 |
| DigiCert SSP CA - G5	| FCPCA	| 100 |
| Entrust Managed Services Root CA	| FCPCA	| 100 |
| Federal Common Policy CA	| FCPCA	| 100 |
| Federal Common Policy CA G2 | FCPCA | 100 |
| ORC SSP 4	| FCPCA	| 100 |
| Symantec SSP Intermediate CA - G4	| FCPCA | 100 |
| U.S. Department of State AD Root CA | FCPCA | 100 |
| US Treasury Root CA | FCPCA | 100 |
| Verizon SSP CA A2 | FCPCA	| 100 |
| WidePoint ORC SSP 5	| FCPCA	| 100 | -->

## Federal PKI Document Archive

{% assign categories = "" | split: "" %}
{% for docs in site.data.fpkidocs %}
  {% assign category = docs.category | strip %}
  {% assign categories = categories | push: category | uniq | sort %}
{% endfor %}
{% assign categories = categories | uniq | sort %}

A Federal PKI document may be needed for three years for compliance review purposes. This pages contains three years of FPKI documents, including:
- Certificate Policies
- Certificate Profiles
- Supplementary Guidance
- Change Proposals

A blank category indicates no updates in the previous three years. If you seek a document that is older than three years or is not listed here, please contact fpki at gsa.gov or look in the [archived document repository on github](https://github.com/GSA/idmanagement.gov/tree/staging/docs/archived){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. 

<table class="usa-table usa-table--borderless usa-table--striped">
  <thead>
    <tr>
      <th id="docs-table-heading-name" scope="col">Document Name</th>
      <th id="docs-table-heading-date" scope="col">Removal From Archive</th>
    </tr>
  </thead>
  <tbody>
    {% for category in categories %}
      <tr class="docs-table-category-heading" data-category="{{ category }}">
        <th colspan="2" scope="colgroup" class="docs-table-heading" id="docs-table-heading-{{ category | slugify }}"><b>{{ category }}</b></th>
      </tr>
      {% for docs in site.data.fpkidocs %}
        {% if docs.status == "post" %}
          {% if docs.category == category %}
            <tr class="docs-table-row" data-category="{{ docs.category }}">
              <td headers="docs-table-heading-{{ category | slugify }} docs-table-heading-name"><a href="{{ docs.url | prepend: site.baseurl }}" target="_blank" rel="noopener noreferrer">{{ docs.name}}</a></td>
              <td headers="docs-table-heading-{{ category | slugify }} docs-table-heading-date">{{ docs.remove }}</td>
            </tr>
           {% endif %} 
        {% endif %}
      {% endfor %} <!--docs-->
    {% endfor %}<!--category-->
  </tbody>
</table>
