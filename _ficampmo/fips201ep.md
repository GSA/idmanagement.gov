---
layout: page
title:  FIPS 201 Evaluation Program
collection: ficampmo
permalink: /fips201ep/
sidenav: functions
sticky_sidenav: true

subnav:
  - text: Program Announcements
    href: '#program-announcements'
  - text: Testing and Certification
    href: '#testing-and-certification'
  - text: Personal Identity Verification (PIV) Credentials
    href: '#personal-identity-verification-credentials'
  - text: PIV Card Body Application Package Requirements
    href: '#piv-card-body-application-package-requirements'
  - text: Derived PIV (D-PIV) Credentials
    href: '#derived-piv-credentials'
  - text: Physical Access Control System (PACS)
    href: '#physical-access-control-system'
    
---

The Federal Information Processing Standard 201 (FIPS 201) Evaluation Program (sometimes called the FICAM Testing Program) tests and certifies services and commercial products used in PIV credentialing systems, physical access control systems (PACS), and public key infrastructures (PKIs).

## Program Announcements

Announcements older than four years are removed. [Contact us]({{site.baseurl}}/contact-us) if you have any questions.

<ul class="gsa-expand-collapse-group" title="Expand or Collapse All" aria-label="Expand or Collapse All">
  <li class="gsa-expand-button" onclick="expandToggle()" onkeydown="expandToggle()" title="Expand All" aria-label="Expand All" tabindex="0">   +   </li>
  <li class="gsa-collapse-button" onclick="collapseToggle()" onkeydown="collapseToggle()" title="Collapse All" aria-label="Collapse All" tabindex="0">   -   </li>
</ul>
{% assign lcount = 0 %}
{% for announcement in site.data.fips201announcements %}
  {% if announcement.status == "Active" %}
  <div class="usa-accordion usa-accordion--bordered">
    <h4 class="usa-accordion__heading">
      <button type="button" class="usa-accordion__button gsa-normal-text gsa-target-accordion-header" aria-expanded="{{announcement.expanded}}" aria-controls="gsa-{{forloop.index}}">{{announcement.name}} ({{announcement.pubdate}})</button>
    </h4>
    {% if announcement.url == null %}
    <div id="gsa-{{forloop.index}}" class="usa-accordion__content usa-prose gsa-target-accordion-content-area" aria-label="{{announcement.name}}" tabindex="0">
    {% else %}
    <div id="gsa-{{forloop.index}}" class="usa-accordion__content usa-prose gsa-target-accordion-content-area gsa-card" onclick="navigateTo('{{announcement.url}}')" onkeydown="navigateTo('{{announcement.url}}')" aria-label="{{announcement.name}}" tabindex="0">
    {% endif %}
      <div class="display-flex flex-column flex-align-end">
        <span class="usa-tag">{{announcement.doctype}}</span>
      </div>
      <p>{{announcement.summary}}</p>
      <hr>
      <div class="display-flex flex-column flex-align-end">  
      {% if announcement.external == true %}
        <!-- External -->
        <span class="gsa-source usa-link usa-link--external">Source: {{announcement.source}}</span>
      {% else %}
        <!-- Not External -->
        <span class="gsa-source usa-link">Source: {{announcement.source}}</span>
      {% endif %}
      </div>
    </div>
  </div>
  {% endif %}
{% endfor %}

## Testing and Certification

We test and certify a variety of products and services such as:

- Smart cards (secure elements) used in Personal Identity Verification (PIV) and Common Access Card (CAC) credentials
- Physical access control systems for buildings including readers and infrastructure
- Service providers who manage, install, or provide hosted solutions for issuance of Personal Identity Verification (PIV) and CAC credentials

If you’re looking for testing procedures related to products not listed above, review the [FIPS 201 announcements](#program-announcements). Over the years, some product testing has been deprecated to eliminate redundancy, or the product categories have become stable and represent general commercial use products.

## Product Testing

Product testing is performed by either:

- Third-party accredited testing labs, OR
- GSA-managed testing labs

If the product passes testing and review, the vendor is granted a letter of certification, and the product is placed on the [Approved Products List (APL)]({{site.baseurl}}/acquisition-professionals/#products). The APL includes product information, version, date of certification, and special considerations.

Visit the [Vendors page]({{site.baseurl}}/vendors/) for more on testing and certification.

## Testing Guidance and Documents

Functional requirements for the products are outlined in each test procedure. Review the testing agreements, and the test procedure for your specific product, and submit the agreement and package to fips201ep at gsa.gov.

## Testing Agreements

Review the testing agreements, and sign and submit the appropriate agreement with your testing package to fips201ep at gsa.gov.

- [FIPS 201 Evaluation Program – Evaluation Agreement (MS Word, September 2020)]({{site.baseurl}}/docs/fips201ep-agreement.docx){:target="_blank"}{:rel="noopener noreferrer"} – The formal agreement to enter into testing, signed by the vendor and the government official.
- [Reseller Acknowledgement Form (MS Word, September 2014)]({{site.baseurl}}/docs/fips201ep-resellerform.docx){:target="_blank"}{:rel="noopener noreferrer"} – If you are reselling another product, this must be disclosed and the signed agreement submitted.
- [Approved Product List Application Guidance Document (PDF, April 2022)]({{site.baseurl}}/docs/fips201ep-Application-guidance.pdf){:target="_blank"}{:rel="noopener noreferrer"} – Provides a checklist of which documents are required when submitting a new or upgraded solution. 
- [Removed Products List (RPL) Process Document (PDF, April 2022)]({{site.baseurl}}/docs/fips201ep-rplprocess.pdf){:target="_blank"}{:rel="noopener noreferrer"} – If your product has been removed from the APL, review this document for the procedures.

# Personal Identity Verification Credentials

- [Annual PIV Credential Issuer (PCI) Testing Application Form (PDF, February 2020)]({{site.baseurl}}/docs/fips201ep-pcitestform.pdf){:target="_blank"}{:rel="noopener noreferrer"} – If you are an agency or organization applying for your Annual Review Audit for the Federal Public Key Infrastructure (FPKI), submit this form to fips201ep at gsa.gov; two testing options are available:
  - In-person Lab Testing - testing organizations can provide available dates and times to visit the GSA FIPS 201 lab when sending in their application form, or
  - Remote Testing - testing organizations can leverage the [Card Conformance Tool (CCT)](https://github.com/GSA/piv-conformance/releases){:target="_blank"}{:rel="noopener noreferrer"} and [Certificate Profile Conformance Tool (CPCT)](https://github.com/GSA/cpct-tool/releases/){:target="_blank"}{:rel="noopener noreferrer"}, [SP 800-73-4-based Test Runner](https://csrc.nist.gov/News/2016/New-SP-800-73-4-based-Test-Runner-Release){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, and the [KSJavaAPI](https://github.com/grandamp/KSJavaAPI){:target="_blank"}{:rel="noopener noreferrer"} to generate artifacts to be sent along with the testing application form.
- [Personal Identity Verification (PIV) Card Body Approval Procedures, V 11.0 (PDF, April 2023)]({{site.baseurl}}/docs/piv-card-body-approval-procedures.pdf){:target="_blank"}{:rel="noopener noreferrer"} – approval procedures that outline the evaluation criteria, approval mechanisms, and validation test reports to be employed and provided by the Evaluation Laboratory based on their evaluation of a vendor/ supplier’s PIV Card body (product), to be provided to the FIPS 201 EP for evaluation to be placed on the Approved Products List (APL).

## PIV Card Body Application Package Requirements

All applicants, please complete the following steps:

1. Review the [Personal Identity Verification (PIV) Card Body Approval Procedures v11.0 (PDF, April 2023)]({{site.baseurl}}/docs/piv-card-body-approval-procedures.pdf){:target="_blank"}{:rel="noopener noreferrer"} – outlining the approval procedures and evaluation criterion for getting the PIV Card body (Product) on the APL and Section 2 Application Package
2. Provide the Product itself (see Section 2) of the [Personal Identity Verification (PIV) Card Body Approval Procedures v11.0 (PDF, April 2023)]({{site.baseurl}}/docs/piv-card-body-approval-procedures.pdf){:target="_blank"}{:rel="noopener noreferrer"} 
3. Complete and provide the [PIV Card APL Evaluation Program Application Form]({{site.baseurl}}/docs/piv-card-apl-evaluation-program-application-form.docx){:target="_blank"}{:rel="noopener noreferrer"} (Word, April 2023) – Required for each product submission.
4. Complete and provide the [FIPS 201 Evaluation Program Lab Services Agreement, V3.0.0 (PDF)]({{site.baseurl}}/docs/fips201-evaluation-program-lab-services-agreement.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:download}{:download="fips201-evaluation-program-lab-services-agreement.pdf"} – Required for each product submission.
5. Complete and provide the [FIPS 201 Evaluation Program Attestations to Federal Acquisition Regulations related to the Trade Agreement Act v3.3]({{site.baseurl}}/docs/fips201-evaluation-program-attestations-to-federal-acquisition-regulations-related-to-the-trade-agreement-act.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:download="fips201-evaluation-program-attestations-to-federal-acquisition-regulations-related-to-the-trade-agreement-act.pdf"} – Required for each product submission.
6. Complete and provide the [FIPS 201 Evaluation Program Attestations Form for PIV Card Body Approval v1.0]({{site.baseurl}}/docs/fips201-evaluation-program-attestation-form-for-piv-card-body-approval.docx){:target="_blank"}{:rel="noopener noreferrer"} – Required for each product submission.

## Derived PIV Credentials

Agencies that wish to issue D-PIV credentials should follow these steps:
1. Perform a NIST SP 800-79 assessment and receive an Authority To Operate (ATO)
2. Work with your Shared Service Provider (SSP) to obtain D-PIV Object Identifiers (OIDs)
3. Submit sample D-PIV public certificates for testing or provide results from the [Certificate Profile Conformance Tool (CPCT)](https://github.com/GSA/cpct-tool/releases/){:target="_blank"}{:rel="noopener noreferrer"} to fips201ep at gsa.gov.

Upon successful completion of DPCI testing, the agency or organization will be granted approval to issue D-PIV credentials.

# Physical Access Control System

GSA tests and validates the interoperability of PIV and CAC credentials with the software and hardware used to restrict physical access to government facilities. 

Review the test procedures, choose one of the application packages, and submit to fips201ep at gsa.gov.

- [PACS Functional Requirements and Test Cases v1.4.2 Rev. B (PDF, October 2021)]({{site.baseurl}}/docs/fips201ep-pacsfrtc.pdf){:target="_blank"}{:rel="noopener noreferrer"}
    - [SM-OCC Companion Paper (PDF, March 2021)]({{site.baseurl}}/docs/fips201ep-smocc.pdf){:target="_blank"}{:rel="noopener noreferrer"}
    - [Backend Registration Companion Paper (PDF, March 2021)]({{site.baseurl}}/docs/fips201ep-brcp.pdf){:target="_blank"}{:rel="noopener noreferrer"}
    - [FRTC Express Companion Paper (PDF, March 2021)]({{site.baseurl}}/docs/fips201ep-frtcexpress.pdf){:target="_blank"}{:rel="noopener noreferrer"}
- [PACS FRTC PIN Usage Policy Addendum (PDF, August 2018)]({{site.baseurl}}/docs/fips201ep-pacsfrtcpin.pdf){:target="_blank"}{:rel="noopener noreferrer"}

    - Review this Addendum for help resetting PIN retry counters, and determining the number of remaining PIN retries during Discovery Object testing.

## PACS Application Package for New Systems or for Updates to Previously Approved Systems

All applicants, please complete the following steps:

1. Review the - [Approved Product List Application Guidance Document (PDF, April 2022)]({{site.baseurl}}/docs/fips201ep-Application-guidance.pdf){:target="_blank"}{:rel="noopener noreferrer"} – Instructions for completing the Approved Product List Application Form.
2. Complete the [Approved Product List Application Form (Word, April 2022)]({{site.baseurl}}/docs/fips201ep-application-form.docx){:target="_blank"}{:rel="noopener noreferrer"} – Required for each solution submission, new or upgrade.
3. Provide the equipment table from the Approved Product List Application as a separate file. [Equipment Table GSA PACS Application v0.1 (XLSX, February 2023)]({{site.baseurl}}/docs/equipment-table-gsa-pacs-application.xlsx){:target="_blank"}{:rel="noopener noreferrer"}
4. [Reseller Acknowledgement Form (MS Word, September 2014)]({{site.baseurl}}/docs/fips201ep-resellerform.docx){:target="_blank"}{:rel="noopener noreferrer"} – If you are reselling another product, this must be disclosed, and the signed agreement submitted.
5. Include the following  document when adding a new series, or adding new product to a prior listed series, signed by a C- or VP-level individual:
    - [Product Series and Licensing Form (MS Word, August 2018)]({{site.baseurl}}/docs/pacsapp-licensingform.docx){:target="_blank"}{:rel="noopener noreferrer"}
6. Provide a solution configuration guide that includes, at a minimum:
    - Screenshots and instructions on configuring the submitted solution to meet the test cases.
    - Location of all log files needed to verify the solution is performing the test cases.
    - Steps necessary to verify the hardware, software, and firmware of all items listed on the equipment table in the APL application.
7. Complete the additional documentation 
    - [Supply Chain Self-Attestation Form (MS Word, March 2020)]({{site.baseurl}}/docs/pacsapp-supplyattestationform.docx){:target="_blank"}{:rel="noopener noreferrer"}
8. Review the following documentation and select from the appropriate topology that best describes your solution:
    - [Approved PACS Topology Mapping Document (PACS 13.01) (PDF, February 2019)]({{site.baseurl}}/docs/pacsapp-pacs1301.pdf){:target="_blank"}{:rel="noopener noreferrer"}
    - [Approved PACS Topology Mapping Document (PACS 13.02) (PDF, February 2018)]({{site.baseurl}}/docs/pacsapp-pacs1302.pdf){:target="_blank"}{:rel="noopener noreferrer"}
    - [Mobile Handheld Approved Topology Mapping Document (14.02) (PDF, November 2017)]({{site.baseurl}}/docs/pacsapp-mobile1402.pdf){:target="_blank"}{:rel="noopener noreferrer"}
      - When you complete the FRTC Workbook, use the mapping in the workbook, not the mapping inside the Mobile Handheld Topology document.
    - [Approved PACS Wireless Reader Topology Mapping Document (PACS 20.01) (PDF, November 2020)]({{site.baseurl}}/docs/pacsapp-wireless2001.pdf){:target="_blank"}{:rel="noopener noreferrer"}
9. Complete the [PACS FRTC Topology Mapping Workbook (XLSX, October 2021)]({{site.baseurl}}/docs/pacsapp-frtcworkbook.xlsx){:target="_blank"}{:rel="noopener noreferrer"} for your topology.
10. Complete the [FIPS 201 Evaluation Program – Evaluation Agreement (MS Word, September 2020)]({{site.baseurl}}/docs/fips201ep-agreement.docx){:target="_blank"}{:rel="noopener noreferrer"}.
11. Include all applicable VPAT statements, UL-294, and FIPS 140-2/140-3 listing documents.
12. Submit all completed forms to fips201ep at gsa.gov.

## Test Card Loaners

GSA can loan you test cards to help you pre-test your physical access control system products.

- [PACS Test Card Loaner Process (PDF, November 2019)]({{site.baseurl}}/docs/pacstest-process.pdf){:target="_blank"}{:rel="noopener noreferrer"}
- [PACS Test Card Loaner Set Request Form (MS Word, October 2019)]({{site.baseurl}}/docs/pacstest-loanerrequestform.docx){:target="_blank"}{:rel="noopener noreferrer"} – Sign and submit this form to fips201ep at gsa.gov.
- [PACS Test Card User Guide (PDF, January 2019)]({{site.baseurl}}/docs/pacstest-testuserguide.pdf){:target="_blank"}{:rel="noopener noreferrer"}
