---
layout: page
title: PIV Card Body Approval Procedures
collection: ficampmo
permalink: /pivcardbody/
sidenav: functions
sticky_sidenav: true

pubdate: May 2025
version: 11.1.0

subnav:
#   - text: 
#     href: '#'
  - text: 1 Introduction 
    href: '#1-introduction' 
  - text: 1 Overview
    href: '#11-overview' 
  - text: 1.2 Category Description
    href: '#12-category-description'   
  - text: 1.3 Purpose
    href: '#13-purpose'
  - text: 2 Application Package Contents
    href: '#2-application-package-contents'
  - text: 3 Evaluation Procedure for PIV Card Body Testing
    href: '#3-evaluation-procedure-for-piv-card-body-testing'
  - text: 3.1 Requirements
    href: '#31-requirements' 
  - text: 3.2 Evaluation Criteria
    href: '#32-evaluation-criteria'
  - text: "3.2.1 Card Manufacturer, or the Applicant, or the ISO/ANSI Approved Labs Documentation Review (PIV-C.1 to PIV-C.6)"
    href: '#321-card-manufacturer-or-the-applicant-or-the-isoansi-approved-labs-documentation-review-piv-c1-to-piv-c6'
  - text: 3.2.2 ISO/ANSI Approved Labs Test Data Report (PIV-C.7 to PIV-C.23)
    href: '#322-isoansi-approved-labs-test-data-report-piv-c7-to-piv-c23'
  - text: 3.2.3 Certification (PIV-C.24 to PIV-C.25)
    href: '#323-certification-piv-c24-to-piv-c25'
  - text: Lab Resources
    href: '#lab-resources'

---

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Card Manufacturers or Suppliers/Vendors</h4>
    <p class="usa-alert__text">
      If you are looking for the <i>PIV Card Body</i> application form required to submit each of your products, please use the button below to access that form and email the completed and signed form to <a class="usa-link" href="mailto:fips201ep@gsa.gov">fips201ep@gsa.gov</a>. 
      <br/><br/>
        <a class="usa-link" href="{{site.baseurl}}/docs/fips201-piv-card-apl-evaluation-application-and-services-agreement.docx" target="_blank" aria-label="PIV Card APL Evaluation Program Application Form">
          <button class="usa-button" type="button">FIPS 201 PIV Card APL EP Application and Services Agreement</button>
        </a>
      <br/><br/>
      Additional required forms can be found on the <a href="{{site.baseurl}}/fips201ep/#piv-card-body" rel="noopener noreferrer" class="usa-link">FIPS 201 Evaluation Program</a> page.
    </p>
  </div>
</div>

<br/>

<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="v-a1">
      Date: {{page.pubdate}} - Version: {{page.version}}
    </button>
  </h4>
  <div id="v-a1" class="usa-accordion__content usa-prose">
    <table>
      <caption>PIV Card Body Approval Procedures version table</caption>
      <thead>
      <tr>
        <th scope="col">Status</th>
        <th scope="col">Version</th>
        <th scope="col">Date</th>
        <th scope="col">Comment</th>
        <th scope="col">Audience</th>
      </tr>
      </thead>
        <tr>
            <th scope="row">Draft</th>
            <td>0.0.1</td>
            <td>03/21/06</td>
            <td>Document creation.</td>
            <td>Limited</td>
        </tr>
        <tr>
            <th scope="row">Draft</th>
            <td>0.1.0</td>
            <td>03/21/06</td>
            <td>Submitted to GSA for approval.</td>
            <td>GSA</td> 
        </tr>
        <tr>
            <th scope="row">Draft</th>
            <td>0.1.1</td>
            <td>05/11/06</td>
            <td>Updated based on GSA feedback</td>
            <td>Limited</td>
        </tr>
        <tr>
            <th scope="row">Draft</th>
            <td>0.1.2</td>
            <td>05/23/06</td>
            <td>Updated based on GSA feedback.</td>
            <td>Limited</td>
        </tr>
        <tr>
            <th scope="row">Draft</th>
            <td>0.2.0</td>
            <td>05/23/06</td>
            <td>Submitted to GSA for approval.</td>
            <td>GSA</td>
        </tr>
        <tr>
            <th scope="row">Approved</th>
            <td>1.0.0</td>
            <td>05/24/06</td>
            <td>Approved by GSA.</td>
            <td>Public</td>
        </tr>
        <tr>
            <th scope="row">Revision</th>
            <td>1.0.1</td>
            <td>06/29/06</td>
            <td>Updated based on feedback from GSA.</td>
            <td>Limited</td>
        </tr>
        <tr>
            <th scope="row">Revision</th>
            <td>1.1.0</td>
            <td>06/29/06</td>
            <td>Submitted to GSA for approval</td>
            <td>GSA</td>
        </tr>
        <tr>
            <th scope="row">Revision</th>
            <td>1.1.1</td>
            <td>06/30/06</td>
            <td>Updated based on feedback from GSA.</td>
            <td>Limited</td> 
        </tr>
        <tr>
            <th scope="row">Revision</th>
            <td>1.2.0</td>
            <td>06/30/06</td>
            <td>Submitted to GSA for approval</td>
            <td>GSA</td>
        </tr>
        <tr>
            <th scope="row">Approved</th>
            <td>2.0.0</td>
            <td>06/30/06</td>
            <td>Approved by GSA</td>
            <td>Public</td>
        </tr>
        <tr>
            <th scope="row">Revision<br/>Revision<br/>Revision<br/>Revision</th>
            <td>2.0.1<br/>2.1.0<br/>3.2.0<br/>3.3.0</td>
            <td>09/11/06<br/>9/20/06<br/>10/20/06<br/>11/13/06</td>
            <td>Revised based on feedback from the Evaluation Program and GSA Submitted to GSA for approval  Updated and Submitted to GSA for approval  Updated and Submitted to GSA for approval</td>
            <td>Limited<br/>GSA<br/>GSA<br/>GSA</td>
        </tr>
        <tr>
            <th scope="row">Revision<br/>Revision<br/>Revision<br/>Approved</th>
            <td>3.4.0<br/>3.5.0<br/>3.6.0<br/>4.0.0</td>
            <td>12/11/06<br/>01/10/07<br/>01/30/07<br/>02/19/07</td>
            <td>Updated and Submitted to GSA for approval  Updated and Submitted to GSA for approval  Updated and Submitted to GSA for approval  Approved by GSA</td>
            <td>GSA<br/>GSA<br/>GSA<br/>Public</td>
        </tr>
        <tr>
            <th scope="row">Approved<br/>Approved<br/>Approved</th>
            <td>5.0.0<br/>6.0.0<br/>7.0.0</td>
            <td>04/02/07<br/>04/26/07<br/>10/31/07</td>
            <td>Updated with details for the evaluation fees.  Updated with details for the upgrade process.  Updated to split approval processes from document. Processes can now be found in Suppliers Handbook.</td>
            <td>Public<br/>Public<br/>Public</td>
        </tr>
        <tr>
            <th scope="row">Approved</th>
            <td>8.0.0</td>
            <td>05/28/08</td>
            <td>Updated card durability requirements.</td>
            <td>Public</td>
        </tr>
        <tr>
            <th scope="row">Approved</th>
            <td>9.0.0</td>
            <td>07/30/08</td>
            <td>Updated acceptance criteria for card durability requirements(Magnetic Stripe and UV light resistance) and clarified sampling sizes.</td>
            <td>Public</td>
        </tr>
        <tr>
            <th scope="row">Approved</th>
            <td>10.0.0</td>
            <td>07/08/11</td>
            <td>Updated evaluation procedures to reflect new NIST SP 800-73-3 requirements</td>
            <td>GSA</td>
        </tr>
        <tr>
            <th scope="row">Approved</th>
            <td>11.0.0</td>
            <td>04/24/2023</td>
            <td>Updated title and version of the document from PIV Card ApprovalProcedure, Version 10.0.0 to PIV Card Body Test Procedures, Version 11.0.0 and updated overall document to align with updated procedures and compliance requirements.</td>
            <td>Public</td>
        </tr>
        <tr>
            <th scope="row">Approved</th>
            <td>11.1.0</td>
            <td>05/01/2025</td>
            <td>Updated this version based on feedback from the community. Documenting that Version 11.1.0 is based on NIST FIPS 201-3, SP 800-78-4, SP 800-76-2, and SP 800-73-4.</td>
            <td>Public</td>
        </tr>
    </table>
  </div>
</div>


<ol class="usa-process-list">
  <li class="usa-process-list__item">
    <h5 class="usa-process-list__heading">Introduction</h5>
    <p><strong>1.1 Overview</strong></p>
    <p>
      The FIPS 201 Evaluation Program (EP) is a federal compliance program administered by the Office of Government-wide Policy (OGP) within the General Services Administration (GSA). The FIPS 201 Evaluation Program (EP) evaluates products and services against the requirements outlined in FIPS 201 and its supporting documents. In addition to test requirements developed to test conformance to the National Institute of Standards and Technology (NIST) specifications, GSA has established interoperability and performance metrics to further determine product suitability. To qualify as an Evaluation Lab (<i>Lab</i>) for the GSA FIPS 201 EP, the laboratory shall have received either NIST National Voluntary Laboratory Accreditation Program (NVLAP) accreditation (refer to NIST HB 150-17e2022, Annex D) or the International Organization of Standards (ISO) 17025 to perform FIPS 201 conformance testing review on products submitted by the Card Manufacturers, or Suppliers/Vendors (<i>Applicant</i>). A set of approval procedures has been developed that outlines the evaluation criteria, approval mechanisms, and validation test reports to be employed and provided by the <i>Lab</i> when evaluating an <i>Applicant’s</i> product against the requirements for that category.    
    </p>
    <p>
      An <i>Applicant</i> desiring to submit a PIV Card body (hereafter referred to as the Product) for evaluation must follow these Approval Procedures. These procedures provide the necessary category-specific details for the EP to evaluate an <i>Applicant’s</i> Product and place it on the Approved Products List (APL).
    </p>
    <p>
      If you have any questions or need clarification regarding the PIV Card Body APL process, please contact the FIPS 201 Evaluation Program at <a class="usa-link" href="mailto:fips201ep@gsa.gov">fips201ep@gsa.gov</a>.
    </p>
    <p><strong>1.2 Category Description</strong></p>
    <p>    
      The PIV Card is a smart card with contact and contactless interfaces that meet the interface, data format, graphical, and physical requirements outlined in FIPS 201 and SP 800-73.
    </p>
    <p><strong>1.3 Purpose</strong></p>
    <p>
      The purpose of this document is to provide the following information:
      <ol type="i">
          <li class="margin-bottom-03">Provide a list of the artifacts, forms, and/or documentation that must be submitted by the Evaluation Lab (<i>Lab</i>) to the FIPS 201 EP as part of the application package submission.</li>
          <li class="margin-bottom-03">Document the requirements that apply to the PIV Card Body evaluation.</li>
          <li class="margin-bottom-03">Specify the evaluation criteria and approval mechanisms that the <i>Labs</i> will use to verify the Product's compliance with the requirements that apply to this category.</li>
      </ol>
    </p>
  </li>
  <li class="usa-process-list__item">
    <h5 class="usa-process-list__heading">Application Package Contents</h5>
    <p>
      The Application Package Contents include the artifacts, documentation, and product that the <i>Lab</i> must submit to the EP to perform validation and add to the APL. Submit the associated agreements and reports listed below to <a class="usa-link" href="mailto:fips201ep@gsa.gov">fips201ep@gsa.gov</a> and mail the product to the FIPS 201 EP address provided below.
    </p>
    <p>
      The Application Package Contents for this category include the following:
      <ul>
        <li>
          The Product itself.
          <ul>
            <li class="margin-bottom-03">(a) The <i>Applicant</i> should deliver the product to the <i>Lab</i> (address found in Section 4 Resources) using a secure delivery method that requires receipt acknowledgement (e.g., FedEx, UPS, or hand delivery).
            </li>
            <li class="margin-bottom-03">(b) The <i>Lab</i> should deliver the Product along with the other application package documentation to the <i>FIPS 201 EP at 1893 Metro Center Dr., Ste 228, Reston, VA 20190</i> using a secure delivery method that requires receipt acknowledgement (e.g., FedEx, UPS, or hand delivery).
            </li> 
          </ul>
        </li>
        <li>
          Complete and provide the <a class="usa-link" href="{{site.baseurl}}/docs/fips201-piv-card-apl-evaluation-application-and-services-agreement.docx" target="_blank" rel="noopener noreferrer">FIPS 201 EP PIV Card APL Application and Service Agreement, v1.0 (Word, May 2025)</a>.
        </li>
        <li>
          Complete and provide the <a class="usa-link" href="{{site.baseurl}}/docs/fips201-evaluation-program-attestation-form-for-piv-card-body-approval.docx" target="_blank" rel="noopener noreferrer">FIPS 201 Evaluation Program Attestations Form for PIV Card Body Approval, v1.1 (Word, May 2025)</a> – Required for each product submission.
        </li>
        <li>
          Completed and signed <a class="usa-link" href="{{site.baseurl}}/docs/fips201-evaluation-program-attestations-to-federal-acquisition-regulations-related-to-the-trade-agreement-act.pdf" target="_blank" rel="noopener noreferrer">FIPS 201 Evaluation Program Attestations to Federal Acquisition Regulations related to the Trade Agreement Act v3.3</a>.
        </li>
        <li>
        <p>
          The <i>Lab's</i> Evaluation Report, which provides test results and an evaluation of the findings with recommendations for conformance or non-conformance for the Product based on the requirements indicated in Section 3.1, Table 1 of this document, and as indicated against the tests conducted in the FIPS 201 Evaluation Program Attestation Form for PIV Card Body Approval_v1.0. The <i>Lab</i> is required to develop test methods or review test reports for conformance testing as required by the FIPS 201 EP and validate that the test methods developed comply with the requirements set forth by the International Organization for Standardization (ISO) 17025 for Testing and Calibration laboratories to verify the effectiveness of the testing method to produce valid results. In this regard, the Card Manufacturer or the <i>Applicant</i>, or the ISO/ANSI Approved Labs, is expected to develop and document the test procedures used to determine how the Product was tested to conclude that it met all requirements to be compliant. In addition, the following will be provided as part of the <i>Applicant's</i> Documentation Review and Certification:
          <ul>
            <li class="margin-bottom-03">
              All necessary Card Manufacturer / <i>Applicant</i>, and ISO/ANSI Approved Labs documentation providing proof that the Product complies with the category-specific requirements as outlined in Section 3.1, Table 1 and complies with the evaluation criteria in Section 3.2.1 and Section 3.2.2, for the category, which has report documentation review as its approval mechanism. Examples of specific documentation include: user guides, technical specifications, white papers, sample cards, etc.
            </li>
            <li class="margin-bottom-03">
              Official Certification documentation from the appropriate entity (e.g., NIST) indicating the Product's conformance to the tested requirements of FIPS 201. Specific reference to the exact type of certification necessary can be found in the Certification section found in Section 3.2.3 of this document.
            </li>
          </ul>
        </p>
        </li>
      </ul>
    </p>
  </li>
  <li class="usa-process-list__item">
    <h5 class="usa-process-list__heading">Complete the step-by-step process</h5>
    <p><strong>3.1 Requirements</strong></p>
    <p>
      To approve the Product as conformant to the requirements of FIPS 201, it, at a minimum, must comply with all the requirements listed below. The approval mechanism column describes the lab's technique for evaluating compliance with that requirement.
    </p>
    <p>
      <table class="usa-table">
        <caption>Table 1 - Applicable Requirements</caption>
        <thead>
        <tr>
          <th scope="col">Identifier #</th>
          <th scope="col">Requirement Description</th>
          <th scope="col">Source</th>
          <th scope="col">Approval Mechanism - Report From:</th>
        </tr>
        </thead>
        <tr>
          <th scope="row">PIV-C.1</th>
          <td>The PIV Card body shall comply with the physical characteristics and durability described in FIPS 201.</td>
          <td>FIPS 201-3, Section 4.1.3</td>
          <td>Card Manufacturer, or the <i>Applicant</i>, or the ISO/ANSI Approved Labs.</td>
        </tr>
        <tr>
          <th scope="row">PIV-C.2</th>
          <td>The PIV Card body structure shall consist of card material(s) that satisfy the card characteristics described in ISO/IEC 7810.</td>
          <td>FIPS 201-3 Section 4.1.3</td>
          <td>Card Manufacturer, or the <i>Applicant</i>, or the ISO/ANSI Approved Labs.</td>
        </tr>
        <tr>
          <th scope="row">PIV-C.3</th>
          <td>The PIV Card body shall comply with characteristics as described in ISO/IEC 10373.</td>
          <td>FIPS 201-3, Section 4.1.3</td>
          <td>Card Manufacturer, or the <i>Applicant</i>, or the ISO/ANSI Approved Labs.</td>
        </tr>
        <tr>
          <th scope="row">PIV-C.4</th>
          <td>The PIV Card body shall comply with the characteristics described in ISO/IEC 7816 for contact cards.</td>
          <td>FIPS 201-3, Section 4.1</td>
          <td>Card Manufacturer, or the <i>Applicant</i>, or the ISO/ANSI Approved Labs.</td>
        </tr>
        <tr>
          <th scope="row">PIV-C.5</th>
          <td>The PIV Card body shall comply with characteristics described in ISO/IEC 14443 for contactless cards.</td>
          <td>FIPS 201-3, Section 4.1</td>
          <td>Card Manufacturer, or the <i>Applicant</i>, or the ISO/ANSI Approved Labs.</td>
        </tr>
        <tr>
          <th scope="row">PIV-C.6</th>
          <td>The PIV Card shall contain a contact and a contactless ICC interface.</td>
          <td>FIPS 201-3, Section 4.1.3</td>
          <td>Card Manufacturer, or the <i>Applicant</i>, or the ISO/ANSI Approved Labs.</td>
        </tr>
        <tr>
          <th scope="row">PIV-C.7</th>
          <td>The card body structure shall consist of card material(s) that satisfy the test methods in American National Standards Institute (ANSI)322.</td>
          <td>FIPS 201-3, Section 4.1.3</td>
          <td>ISO/ANSI Approved Labs.</td>
        </tr>
        <tr>
          <th scope="row">PIV-C.8</th>
          <td>The ANSI 322 test methods tests shall be used to evaluate card material durability and performance.</td>
          <td>FIPS 201-3, Section 4.1.3</td>
          <td>ISO/ANSI Approved Labs.</td>
        </tr>
        <tr>
          <th scope="row">PIV-C.9</th>
          <td>The ANSI 322 tests shall include the card flexure test.</td>
          <td>FIPS 201-3, Section 4.1.3</td>
          <td>ISO/ANSI Approved Labs.</td>
        </tr>
        <tr>
          <th scope="row">PIV-C.10</th>
          <td>The ANSI 322 tests shall include the card static stress test.</td>
          <td>FIPS 201-3, Section 4.1.3</td>
          <td>ISO/ANSI Approved Labs.</td>
        </tr>
        <tr>
          <th scope="row">PIV-C.11</th>
          <td>The ANSI322 tests shall include the plasticizer exposure test.</td>
          <td>FIPS 201-3, Section 4.1.3</td>
          <td>ISO/ANSI Approved Labs.</td>
        </tr>
        <tr>
          <th scope="row">PIV-C.12</th>
          <td>The ANSI 322 tests shall include the impact resistance test.</td>
          <td>FIPS 201-3, Section 4.1.3</td>
          <td>ISO/ANSI Approved Labs.</td>
        </tr>
        <tr>
          <th scope="row">PIV-C.13</th>
          <td>The ANSI 322 tests shall include the card structural integrity test.</td>
          <td>FIPS 201-3, Section 4.1.3</td>
          <td>ISO/ANSI Approved Labs.</td>
        </tr>
        <tr>
          <th scope="row">PIV-C.14</th>
          <td>The ANSI 322 tests shall include the card surface abrasion test.</td>
          <td>FIPS 201-3, Section 4.1.3</td>
          <td>ISO/ANSI Approved Labs.</td>
        </tr>
        <tr>
          <th scope="row">PIV-C-15</th>
          <td>The ANSI 322 tests shall include card temperature and humidity-induced dye migration.</td>
          <td>FIPS 201-3, Section 4.1.3</td>
          <td>ISO/ANSI Approved Labs.</td>
        </tr>
        <tr>
          <th scope="row">PIV-C.16</th>
          <td>The ANSI 322 tests shall include card ultraviolet light exposure.</td>
          <td>FIPS 201-3, Section 4.1.3</td>
          <td>ISO/ANSI Approved Labs.</td>
        </tr>
        <tr>
          <th scope="row">PIV-C.17</th>
          <td>The ANSI 322 tests shall include the card laundry test.</td>
          <td>FIPS 201-3, Section 4.1.3</td>
          <td>ISO/ANSI Approved Labs.</td>
        </tr>
        <tr>
          <th scope="row">PIV-C.18</th>
          <td>The cards shall not malfunction or delaminate after hand cleaning with a mild soap and water mixture.</td>
          <td>FIPS 201-3, Section 4.1.3</td>
          <td>ISO/ANSI Approved Labs.</td>
        </tr>
        <tr>
          <th scope="row">PIV-C.19</th>
          <td>The cards shall be subjected to sunlight exposure in accordance with Section 5.12 of ISO 10373 or to ultraviolet and daylight fading in accordance with ANSI 322.</td>
          <td>FIPS 201-3, Section 4.1.3</td>
          <td>ISO/ANSI Approved Labs.</td>
        </tr>
        <tr>
          <th scope="row">PIV-C.20</th>
          <td>The card shall be subjected to actual, concentrated, or artificial sunlight to appropriately reflect 2000 hours of southwestern United States sunlight exposure. The tests shall be in accordance with ISO 10373. Concentrated sunlight exposure shall be performed in accordance with G90-17, and accelerated exposure in accordance with G155-2013.</td>
          <td>FIPS 201-3, Section 4.1.3</td>
          <td>ISO/ANSI Approved Labs.</td>
        </tr>
        <tr>
          <th scope="row">PIV-C.21</th>
          <td>The card shall be subjected to the ISO 10373 dynamic bending test and shall have no visible cracks or failures after exposure to ISO 10373 or ANSI 322.</td>
          <td>FIPS 201-3, Section 4.1.3</td>
          <td>ISO/ANSI Approved Labs.</td>
        </tr>
        <tr>
          <th scope="row">PIV-C.22</th>
          <td>The card shall be 27 to 33 mil thick (before lamination) in accordance with ISO 7810.</td>
          <td>FIPS 201-3, Section 4.1.3</td>
          <td>ISO/ANSI Approved Labs.</td>
        </tr>
        <tr>
          <th scope="row">PIV-C.23</th>
          <td>The card material shall allow the production of a flat card in accordance with ISO 7810 after the lamination of one or both sides of the card.</td>
          <td>FIPS 201-3, Section 4.1.3</td>
          <td>ISO/ANSI Approved Labs.</td>
        </tr>
        <tr>
          <th scope="row">PIV-C.24</th>
          <td>A validation certificate from the NIST Personal Identity Verification Program (NPIVP) detailing that the Product being tested is listed in the PIV Card Application Validation list as conformant, as defined in SP 800-73: <a class="usa-link usa-link--external" href="https://csrc.nist.gov/projects/nist-personal-identity-verification-program/validation-lists/piv-card-application-validation-list" target="_blank" rel="noopener noreferrer">https://csrc.nist.gov/projects/nist-personal-identity-verification-program/validation-lists/piv-card-application-validation-list</a>
          </td>
          <td>SP 800-73 Appendix A - PIV Data Model</td>
          <td>Card Manufacturer, or the <i>Applicant</i>, or the ISO/ANSI Approved Lab, or the Evaluating Lab.</td>
        </tr>
        <tr>
          <th scope="row">PIV-C.25</th>
          <td>
            A validation certificate from The NIST Cryptographic Module Validation Program (CMVP), which validates cryptographic modules to the Federal Information Processing Standard (FIPS) 140-3, Security Requirements for Cryptographic Modules: <a class="usa-link" href="https://csrc.nist.gov/projects/cryptographic-module-validation-program" target="_blank" rel="noopener noreferrer">https://csrc.nist.gov/projects/cryptographic-module-validation-program</a>
          </td>
          <td>SP 800-73 Appendix A - PIV Data Model</td>
          <td>Card Manufacturer, or the <i>Applicant</i>, or the ISO/ANSI Approved Labs, or the Evaluating Lab.</td>
        </tr>
      </table>
    </p>
    <p><strong>3.2 Evaluation Criteria</strong></p>
    <p>
      This section details the <i>Lab's</i> process for evaluating the Product against the above-mentioned requirements.
    </p>
    <p>3.2.1 Card Manufacturer, or the Applicant, or the ISO/ANSI Approved Labs Documentation Review (PIV-C.1 to PIV-C.6)</p>
    <p>
      The <i>Lab</i> will review the documentation submitted by the <i>Applicant</i> or perform the tests required to create the test results/report to ascertain the following and provide documentation to support their review:
      <ul>
        <li>
          <p>
          The card's physical characteristics comply with the following:
          <ul>
            <li>ISO 7810</li>
            <li>ISO 10373</li>
            <li>ISO 7816</li>
            <li>ISO 14443</li>
            <li>ICC Interfaces</li>
          </ul>
          </p>
        </li>
      </ul>
    </p>
    <p><strong>3.2.2 ISO/ANSI Approved Labs Test Data Report (PIV-C.7 to PIV-C.23)</strong></p>
    <p>
      The card durability and performance tests conform to the ANSI 322 test methods.
    </p>
    <p>
      As a result of the testing to ensure compliance with the respective standards, the following must be included as part of the FIPS 201 Evaluation Program Attestation Form for PIV Card Body Approval:
      <ul>
        <li class="margin-bottom-03">
          A report was generated to ensure that the test performed to evaluate the card characteristics, durability, and performance complies with the test methods in ANSI 322. <i>These tests shall include card flexure, static stress, plasticizer exposure, impact resistance, card structural integrity, surface abrasion, temperature and humidity-induced dye migration, ultraviolet light exposure, and laundry test. Cards SHALL NOT malfunction or delaminate after hand cleaning with a mild soap and water mixture (FIPS 201-3)</i>.
        </li>
        <li class="margin-bottom-03">
          A sampling of a minimum of four (4) out of five (5) cards, or 80% if a sampling size of greater than five (5) cards is used, should successfully fulfill the requirement being tested to ensure that the product passes the specific test.
        </li>
      </ul>
    </p>
    <p><strong>3.2.3 Certification (PIV-C.24 to PIV-C.25)</strong></p>
    <p>
      The <i>Lab</i> will perform the necessary activities to ensure the authenticity and validity of the certification status for the Product being tested and provide the following:
      <ul>
        <li>
          A validation certificate from the NIST Personal Identity Verification Program (NPIVP) detailing that the Product being tested is listed in the PIV Card Application Validation list as conformant, as defined in SP 800-73: <a class="usa-link" class="usa-link usa-link--external" href="https://csrc.nist.gov/Projects/nist-personal-identity-verification-program/Validation-Lists/piv-card-application-validation-list" rel="noopener noreferrer" target="_blank">https://csrc.nist.gov/Projects/nist-personal-identity-verification-program/Validation-Lists/piv-card-application-validation-list</a>.
        </li>
        <li>
          A validation certificate from the NIST Cryptographic Module Validation Program (CMVP), which validates cryptographic modules to the Federal Information Processing Standard (FIPS) 140-3, Security Requirements for Cryptographic Modules: <a class="usa-link" class="usa-link usa-link--external" href="https://csrc.nist.gov/projects/cryptographic-module-validation-program" rel="noopener noreferrer" target="_blank">https://csrc.nist.gov/projects/cryptographic-module-validation-program</a>.
        </li>
      </ul>
    </p>
    <p>
      If you have any questions or need clarification regarding the PIV Card Body APL process, please contact the FIPS 201 Evaluation Program at <a class="usa-link" href="mailto:fips201ep@gsa.gov">fips201ep@gsa.gov</a>.
    </p>
  </li>
  <li class="usa-process-list__item">
    <h5 class="usa-process-list__heading">Lab Resources</h5>
    <p>
      While GSA does not endorse any specific laboratory, the following lab resources are provided for informational purposes only to assist applicants in the evaluation process. If your lab has one of the required certifications and wishes to be added to this list, please contact <a class="usa-link" href="mailto:fips201ep@gsa.gov">fips201ep@gsa.gov</a>.
    </p>
    <p>Evaluation Lab (Alphabetical Order):
      <ol>
        <li>ATSEC: Information Security Corporation
          <ul>
            <li>Contact: Andreas Fabis</li>
            <li>Phone: <a class="usa-link" href="tel:5126157300">(512) 615-7300</a></li>
            <li>Email: <a class="usa-link" href="mailto:fabis@atsec.com">fabis@atsec.com</a></li>
            <li><a class="usa-link usa-link--external" href="https://www.atsec.com" rel="noopener noreferrer" target="_blank">https://www.atsec.com</a></li>
          </ul>
        </li>
        <li>Eclipse Laboratories:
          <ul>
            <li>Contact: Dr. Bradley A. Paulson</li>
            <li>Phone: <a class="usa-link" href="tel:9529468843">(952) 946-8843</a></li>
            <li>Email: <a class="usa-link" href="mailto:bpaulson@eclipselaboratories.com">bpaulson@eclipselaboratories.com</a></li>
            <li>Website: <a class="usa-link usa-link--external" href="http://www.eclipselaboratories.com/" rel="noopener noreferrer" target="_blank">http://www.eclipselaboratories.com/</a></li>
          </ul>
        </li>
        <li>Exponent:
          <ul>
            <li>Contact: Brad A. McGoran, P.E., CSCIP, GIAC</li>
            <li>Phone: <a class="usa-link" href="tel:6506887013">(650) 688-7013</a></li>
            <li>Email: <a class="usa-link" href="mailto:bmcgoran@exponent.com">bmcgoran@exponent.com</a></li>
            <li>Website: <a class="usa-link usa-link--external" href="https://www.exponent.com/testing-evaluations" rel="noopener noreferrer" target="_blank">https://www.exponent.com/testing-evaluations</a></li>
          </ul>
        </li>
      </ol>
      <br>
      <p>ISO/ANSI Labs (Alphabetical Order):</p>
      <ol>
        <li>Eclipse Laboratories:
          <ul>
            <li>Contact: Dr. Bradley A. Paulson</li>
            <li>Phone: <a class="usa-link" href="tel:9529468843">(952) 946-8843</a></li>
            <li>Email: <a class="usa-link" href="mailto:bpaulson@eclipselaboratories.com">bpaulson@eclipselaboratories.com</a></li>
            <li>Website: <a class="usa-link usa-link--external" href="http://www.eclipselaboratories.com/" rel="noopener noreferrer" target="_blank">http://www.eclipselaboratories.com/</a></li>
          </ul>
        </li>
        <li>Exponent:
          <ul>
            <li>Contact: Brad A. McGoran, P.E., CSCIP, GIAC</li>
            <li>Phone: <a class="usa-link" href="tel:6506887013">(650) 688-7013</a></li>
            <li>Email: <a class="usa-link" href="mailto:bmcgoran@exponent.com">bmcgoran@exponent.com</a></li>
            <li>Website: <a class="usa-link usa-link--external" href="https://www.exponent.com/testing-evaluations" rel="noopener noreferrer" target="_blank">https://www.exponent.com/testing-evaluations</a></li>
          </ul>
        </li>
      </ol>
    </p>
  </li>
</ol>
