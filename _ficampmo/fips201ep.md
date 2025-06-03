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
  - text: Testing and Evaluation
    href: '#testing-and-evaluation'
  - text: Physical Access Control System (PACS)
    href: '#physical-access-control-system'
  - text: PACS APL Guidance Documents
    href: '#pacs-apl-guidance-documents'
  - text: Personal Identity Verification (PIV) Credentials
    href: '#personal-identity-verification-credentials'
  - text: Derived PIV (D-PIV) Credentials
    href: '#derived-piv-credentials'
  - text: PIV Card Body
    href: '#piv-card-body'
  - text: Test Card Loaners
    href: '#test-card-loaners'
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

## Testing and Evaluation 

We test and evaluate a variety of products and services, such as:

- Smart cards (secure elements) that are used in Personal Identity Verification (PIV), Personal Identity Verification - Interoperable (PIV-I), and Common Access Card (CAC) credentials.
- Physical access control systems for buildings, including readers and infrastructure.
- Service providers who manage, install, or provide hosted solutions for issuing Personal Identity Verification (PIV) and CAC credentials.

If you’re looking for testing procedures related to products not listed above, review the [Program Announcements](#program-announcements). Over the years, some product testing has been deprecated to eliminate redundancy, or the product categories have become stable and represent general commercial use products.


## Product Testing

Product testing is performed by either:

- Third-party accredited testing labs, OR
- GSA-managed testing labs

If the product passes testing and review, the vendor is granted a certification letter, and the product is placed on the [Approved Products List (APL)]({{site.baseurl}}/acquisition-professionals/#products). The APL includes product information, version, date of certification, and special considerations.

Visit the [Vendors page]({{site.baseurl}}/vendors/) for more on testing and certification.


## Testing Guidance and Documents

The sections below provide the guidance and application documents associated with the testing and evaluation of the various products and services indicated in the Testing and Evaluation section above. Functional requirements for the products are outlined in each test procedure. Review the testing agreements and the test procedure for your specific product and submit the associated agreement and package to [fips201ep@gsa.gov](mailto:fips201ep@gsa.gov).


## Physical Access Control System

GSA tests and validates the interoperability of PIV and CAC credentials with the software and hardware used for physical access control to government facilities.

Review the PACS APL Guidance Documents and PACS Application Package Requirements listed below, choose the application documentation that applies to your solution to be evaluated, and submit it to [fips201ep@gsa.gov](mailto:fips201ep@gsa.gov).

## PACS APL Guidance Documents

The documents in this section provide guidance and information necessary for evaluating a PACS solution to be listed on the FIPS 201 Evaluation Program’s Approved Products List (APL) and the criteria followed for the Removed Products List (RPL). It is recommended that the applicant review all the guidance documents listed in this section before submitting the Approved Product List Application Form.

- [Approved Product List Application Guidance Document, version 1.1.0 (PDF, Nov 30, 2023)]({{site.baseurl}}/docs/fips201ep-Application-guidance.pdf){:target="_blank"}{:rel="noopener noreferrer"} – Provides information and lists of the documents required when submitting a new or upgraded solution for testing and instructions for completing the Approved Product List Application form.
- [Removed Products List (RPL) Process Document, v1.0.2 (PDF, April 2022)]({{site.baseurl}}/docs/fips201ep-rplprocess.pdf) – If your product has been removed from the APL, review this document for the procedures.

**Functional Requirements and Test Cases Guidance Documents:**

- [PACS Functional Requirements and Test Cases Guidance Document v1.4.2 Rev. C (PDF, November 30, 2023)]({{site.baseurl}}/docs/fips201ep-pacsfrtc.pdf){:target="_blank"}{:rel="noopener noreferrer"}
    - [Secure Messaging and On Card Comparison Companion Paper, FRTC version 1.4.2 Rev A (PDF, March 31, 2021)]({{site.baseurl}}/docs/fips201ep-smocc.pdf){:target="_blank"}{:rel="noopener noreferrer"}
    - [FRTC Section 4 Backend Registration and Data Model Companion Paper, FRTC version 1.4.2 Rev A (PDF, March 31, 2021)]({{site.baseurl}}/docs/fips201ep-brcp.pdf){:target="_blank"}{:rel="noopener noreferrer"}
    - [FRTC Express Process Companion Paper, FRTC version 1.4.2 Rev A (PDF, March 31, 2021)]({{site.baseurl}}/docs/fips201ep-frtcexpress.pdf){:target="_blank"}{:rel="noopener noreferrer"}
    - [Approved PACS Topology Mapping Form (PACS 13.01 13.02) PIN Usage Policy Testing Addendum, version 1.3.3 Rev. F (PDF, August 21, 2018)]({{site.baseurl}}/docs/fips201ep-pacsfrtcpin.pdf){:target="_blank"}{:rel="noopener noreferrer"} – Review this Addendum for help resetting PIN retry counters and determining the number of remaining PIN retries during Discovery Object testing.
    - [FRTC for PACS Alternative Authenticators, version 1.0 (PDF, September 26, 2023)]({{site.baseurl}}/docs/fips201ep-frtc-pacs.pdf){:target="_blank"}{:rel="noopener noreferrer"} – This document will updated continuously as emerging technology and standards supporting FICAM compliance become available. Please review the document and provide your comments to [fips201ep@gsa.gov](mailto:fips201ep@gsa.gov) by November 30, 2023.

**Topology Guidance Documents:**

- Review the following guidance documentation and select from the appropriate topology that best describes your solution: 
    - [Approved PACS Topology Mapping Document (PACS 13.01), version 1.3.3 Rev G (PDF, February 1, 2019).]({{site.baseurl}}/docs/pacsapp-pacs1301.pdf){:target="_blank"}{:rel="noopener noreferrer"}
    - [Approved PACS Topology Mapping Document (PACS 13.02), version 1.3.3 Rev G (PDF, February 1, 2018).]({{site.baseurl}}/docs/pacsapp-pacs1302.pdf){:target="_blank"}{:rel="noopener noreferrer"}
    - [Provisionally-Approved Mobile Handheld Validation Reader Topology Mapping Form (MHVR 14.02), version 1.3.3 Rev B (PDF, November 3, 2017).]({{site.baseurl}}/docs/pacsapp-mobile1402.pdf){:target="_blank"}{:rel="noopener noreferrer"} - **NOTE:** When you complete the FRTC Workbook, use the mapping in the workbook, not the mapping inside the Mobile Handheld Topology document.
    - [Approved PACS Wireless Reader Topology (PACS 20.01), FRTC version 1.3.3 Rev G (PDF, November 17, 2020).]({{site.baseurl}}/docs/pacsapp-wireless2001.pdf){:target="_blank"}{:rel="noopener noreferrer"}


## PACS Application Package Submission Requirements for New Systems or Updates to Previously Approved Systems

All applicants, please complete the following steps:

1. Review, complete, and sign the [FIPS 201 Evaluation Program PACS Application Package Checklist, v1.2.0]({{site.baseurl}}/docs/pacsapp-package-checklist.docx) (Mandatory), and ensure all the applicable and mandatory paperwork is submitted along with the application document.
2. Complete and sign the [Approved Products List Application Form, v1.2.0]({{site.baseurl}}/docs/fips201ep-application-form.docx) (MS Word, May 21, 2025) (Mandatory) – Required for each solution submission, new or upgrade.
3. Complete and sign the [FIPS 201 Evaluation Program – Evaluation Agreement, version 2.1.0]({{site.baseurl}}/docs/fips201ep-agreement.docx) (MS Word, November 30, 2023) (Mandatory) – Required for each solution submission, new or upgrade. 
4. List the equipment used for the APL testing in the equipment table linked here – [Equipment Table GSA PACS Application v1.3.0]({{site.baseurl}}/docs/equipment-table-gsa-pacs-application.xlsx) (MS Excel, August 2024) (Mandatory). 
5. Complete the [PACS FRTC Workbook, v1.4.2 Rev B]({{site.baseurl}}/docs/pacsapp-frtcworkbook.xlsx) (MS Excel, October 2021) (Mandatory) for your topology.
6. Provide a solution Configuration Guide (Mandatory) that includes, at a minimum: 
    - Screenshots and instructions on configuring the submitted solution to meet the test cases.
    - Location of all log files needed to verify that the solution performs the test cases.
    - Steps necessary to verify the hardware, software, and firmware of all items listed on the equipment table in the APL application.
    - Responses to the Vendor FRTC Questionnaire linked in #13.
7. Include the following document when adding a new series or adding a new product to a prior listed series, signed by a C- or VP-level individual:
    - [Product Series and Exemplar Self-Attestation Form v1.0.0]({{site.baseurl}}/docs/pacsapp-seriesform.docx) (Mandatory, if applicable) (MS Word, November 30, 2023). 
8. Include the following document when licensing an existing product that is already on the GSA PACS Reader APL, signed by a C- or VP-level individual:
    - [Product Licensing Self-Attestation Form v1.0.0]({{site.baseurl}}/docs/pacsapp-licensingform.docx) (MS Word, November 30, 2023) (Mandatory, if applicable).
9. Complete and sign the [Supply Chain Self-Attestation Form, v1.4.2]({{site.baseurl}}/docs/pacsapp-supplyattestationform.docx) (MS Word, March 3, 2020) (Mandatory).  
10. Include all applicable VPAT statements, [https://www.section508.gov/sell/vpat/](https://www.section508.gov/sell/vpat/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} (Mandatory, if applicable).
11. Include all relevant UL-294 listing documents (Mandatory, if applicable).
12. Include all applicable FIPS 140-2/140-3 listing documents (Mandatory, if applicable).
13. The vendors must submit the ISO 7816 and ISO 14443 test reports for new PIV PACS Readers. If the vendor has determined that the reports contain company-sensitive information, they may complete and sign the [Vendor Self-Attestation Form for ISO/IEC Test Reports]({{site.baseurl}}/docs/vendor-self-attestation-form.docx){:target="_blank"}{:rel="noopener noreferrer"}, confirming ISO/IEC 7816 conformance to satisfy FRTC Test Case # 7.07.09 and ISO/IEC 10373-6:2020 and ISO/IEC 10373-6:2020/Amd.1:2022 conformance to satisfy FRTC Test Case # 7.07.10.
14. Respond to the [Vendor FRTC Questionnaire, v1.2.0]({{site.baseurl}}/docs/vendor-frtc-questions.docx){:target="_blank"}{:rel="noopener noreferrer"} (Mandatory).
15. Submit all completed forms to [fips201ep@gsa.gov](mailto:fips201ep@gsa.gov).


## Personal Identity Verification Credentials

- [Annual PIV Credential Issuer (PCI) Testing Application Form (PDF, February 2020)]({{site.baseurl}}/docs/fips201ep-pcitestform.pdf){:target="_blank"}{:rel="noopener noreferrer"}  – If you are an agency or organization submitting for Annual PCI Review, submit this application form signed along with all the testing artifacts listed below to [fips201ep@gsa.gov](mailto:fips201ep@gsa.gov); two testing options are available:
  - In-person Lab Testing - testing organizations can provide available dates and times to visit the GSA FIPS 201 lab when sending in their signed application form OR
  - Remote Testing - testing organizations can leverage the tools listed below and email the outputs generated and card images to [fips201ep@gsa.gov](fips201ep@gsa.gov).

All applicants must provide the following required artifacts as part of the Annual PCI review:

- High-resolution front and back images of the PIV/PIV-I card being tested.
- Outputs generated by leveraging the following tools: [Card Conformance Tool (CCT)](https://github.com/GSA/piv-conformance/releases){:target="_blank"}{:rel="noopener noreferrer"}, [Certificate Profile Conformance Tool](https://github.com/GSA/cpct-tool/releases/){:target="_blank"}{:rel="noopener noreferrer"}, [KSJavaAPI](https://github.com/grandamp/KSJavaAPI){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, and the [SP 800-73-4-based Test Runner](https://csrc.nist.gov/News/2016/New-SP-800-73-4-based-Test-Runner-Release){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}(Optional).

If you do not receive a confirmation email acknowledging the receipt of your Test
Results Package within 24 hours of submission, please follow up promptly with the
FIPS 201 Evaluation Program (EP) team at [fips201ep@gsa.gov](mailto:fips201ep@gsa.gov), ensuring that the
follow-up email does not include any attachments. Timely follow-up helps confirm
the successful receipt of your Test Results Package and prevents potential delays in
processing your annual evaluation.

## Derived PIV Credentials

Agencies that wish to issue D-PIV credentials should follow these steps:

<ol class="usa-process-list">
  <li class="usa-process-list__item">
    <p><h4 class="display-inline-block"><svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#assessment"></use></svg></h4>&nbsp;&nbsp;&nbsp;Perform a NIST SP 800-79 assessment and receive an Authority To Operate (ATO).</p>
  </li>
  <li class="usa-process-list__item">
    <p><h4 class="display-inline-block"><svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#identification"></use></svg></h4>&nbsp;&nbsp;&nbsp;Work with your Shared Service Provider (SSP) to obtain D-PIV Object Identifiers (OIDs).</p>
  </li>
  <li class="usa-process-list__item">
    <p><h4 class="display-inline-block"><svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#send"></use></svg></h4>&nbsp;&nbsp;&nbsp;Submit sample D-PIV public certificates for testing or provide results from the <a href="https://github.com/GSA/cpct-tool/releases/" target="_blank" rel="noopener noreferrer">Certificate Profile Conformance Tool (CPCT)</a> to <a href="mailto:fips201ep@gsa.gov">fips201ep@gsa.gov</a>.</p>
  </li>
</ol>

{:class="margin-top-1"}
Upon successful completion of Derived PIV Card Issuer (DPCI) testing, the agency or organization will be approved to issue D-PIV credentials.


## PIV Card Body

<p>All applicants, please complete the following steps:</p>

<ol class="usa-process-list">
  <li class="usa-process-list__item">
  <h4 class="usa-process-list__heading">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#local_library"></use></svg>&nbsp;&nbsp;Read and follow Approval Procedures</h4>
    <p class="margin-top-05">
      <a href="{{site.baseurl}}/docs/piv-card-body-approval-procedures.pdf" rel="noopener noreferrer" target="_blank">Personal Identity Verification (PIV) Card Body Approval Procedures v11.1</a> (PDF, May 2025) indicates the approval procedures, outlines the evaluation criteria, approval mechanisms, and validation test reports to be employed and provided by the Evaluation Laboratory based on their evaluation of a vendor/ supplier’s PIV Card body (product), to be provided to the FIPS 201 EP for evaluation to be placed on the Approved Products List (APL). A web version may be found here: <a href="{{site.baseurl}}/pivcardbody/" rel="noopener noreferrer" target="_blank">PIV Card Body Approval Procedures</a>.
    </p>
  </li>
  <li class="usa-process-list__item">
  <h4 class="usa-process-list__heading"><svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#edit"></use></svg>&nbsp;&nbsp;Complete Application Form</h4>
    <p>
       Complete and provide the <a href="{{site.baseurl}}/docs/fips201-piv-card-apl-evaluation-application-and-services-agreement.docx" rel="noopener noreferrer" target="_blank">PIV Card APL EP Application and Service Agreement v1.0</a> (Word, May 2025).
    </p>
  </li>
  <li class="usa-process-list__item">
  <h4 class="usa-process-list__heading"><svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#edit"></use></svg>&nbsp;&nbsp;Complete Attestations Form</h4>
    <p>
      Complete and provide the <a href="{{site.baseurl}}/docs/fips201-evaluation-program-attestation-form-for-piv-card-body-approval.docx" rel="noopener noreferrer" target="_blank">FIPS 201 Evaluation Program Attestations Form for PIV Card Body Approval v1.1</a> (Word, May 2025).
    </p>
  </li>
  <li class="usa-process-list__item">
  <h4 class="usa-process-list__heading"><svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#edit"></use></svg>&nbsp;&nbsp;Complete and sign Trade Agreement Form</h4>
    <p>
       Complete and provide a signed <a href="{{site.baseurl}}/docs/fips201-evaluation-program-attestations-to-federal-acquisition-regulations-related-to-the-trade-agreement-act.pdf" rel="noopener noreferrer" target="_blank">FIPS 201 Evaluation Program Attestations to Federal Acquisition Regulations related to the Trade Agreement Act v3.3</a>.
    </p>
  </li>
  <li class="usa-process-list__item">
  <h4 class="usa-process-list__heading"><svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#mail_outline"></use></svg>&nbsp;&nbsp;Product Delivery</h4>
    <p>
      The Evaluation Lab should deliver the <i>Product</i> as part of the complete application package, including documentation, using a secure delivery method that requires receipt acknowledgement (e.g., <i>FedEx, UPS, or hand delivery</i>) to:
    </p>
    <p>
      <address style="padding-left:10px">
      <strong>FIPS 201 Evaluation Program</strong><br/>
      c/o Electrosoft<br/>
      1893 Metro Center Dr., Ste 228<br/>
      Reston, VA 20190
      </address>
    </p>
    <p>
      If you have any questions or need clarification regarding the PIV Card Body APL process, please contact the <i>FIPS 201 Evaluation Program</i> at: <a href="mailto:fips201ep@gsa.gov">fips201ep@gsa.gov</a>.
    </p>
  </li>
</ol>

{:style="margin-top:10px"}
## Test Card Loaners

GSA can loan you test cards to help you pre-test your physical access control system products.

- [PACS Test Card Loaner Process (PDF, November 2019).]({{site.baseurl}}/docs/pacstest-process.pdf){:target="_blank"}{:rel="noopener noreferrer"}
- [PACS Test Card Loaner Set Request Form (MS Word, October 2019)]({{site.baseurl}}/docs/pacstest-loanerrequestform.docx){:target="_blank"}{:rel="noopener noreferrer"} – Sign and submit this form to [fips201ep@gsa.gov](mailto:fips201ep@gsa.gov).
- [PACS Test Card User Guide (PDF, January 2019).]({{site.baseurl}}/docs/pacstest-testuserguide.pdf){:target="_blank"}{:rel="noopener noreferrer"}

---

<p class="margin-top-4">
  <strong class="margin-right-3">Still need help?</strong><a class="usa-button usa-button--outline" href="mailto:fips201ep@gsa.gov"><svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#mail"></use></svg>Contact us</a>
</p>