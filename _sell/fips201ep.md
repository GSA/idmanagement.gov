---
layout: page
title:  FIPS 201 Evaluation Program
collection: sell
permalink: fips201/
sidenav: sell
sticky_sidenav: true

subnav:
  - text: Testing and Certification
    href: '#testing-and-certification'
  - text: Testing Guidance and Documents
    href: '#testing-guidance-and-documents'
  - text: Personal Identity Verification (PIV) Credentials
    href: '#personal-identity-verification-credentials'
  - text: Derived PIV (D-PIV) Credentials
    href: '#derived-piv-credentials'
  - text: Physical Access Control System (PACS)
    href: '#physical-access-control-system'
---

The Federal Information Processing Standard 201 (FIPS 201) Evaluation Program (sometimes called the FICAM Testing Program) tests and certifies services and commercial products used in PIV credentialing systems, physical access control systems (PACS), and public key infrastructures (PKIs).

For the latest testing news, view the [program announcements](../fipsannouncements/).

## Testing and Certification

We test and certify a variety of products and services such as:

- Smartcards (secure elements) used in Personal Identity Verification (PIV) and Common Access Card (CAC) credentials
- Physical access control systems for buildings including readers and infrastructure
- Service providers who manage, install, or provide hosted solutions for issuance of Personal Identity Verification (PIV) and CAC credentials

If you’re looking for testing procedures related to products not listed above, review the [announcements](../fipsannouncements/). Over the years, some product testing has been deprecated to eliminate redundancy, or the product categories have become stable and represent general commercial use products.

### Product Testing

Product testing is performed by either:

- Third-party accredited testing labs, OR
- GSA-managed testing labs

If the product passes testing and review, the vendor is granted a letter of certification, and the product is placed on the [Approved Products List (APL)](../../buy#products/). The APL includes product information, version, date of certification, and special considerations.

Visit the [Sell](../) page for more on testing and certification.

## Testing Guidance and Documents

Functional requirements for the products are outlined in each test procedure. Review the testing agreements, and the test procedure for your specific product, and submit the agreement and package to fips201ep at gsa.gov.

### Testing Agreements

Review the testing agreements, and sign and submit the appropriate agreement with your testing package to fips201ep at gsa.gov.

- [FIPS 201 Evaluation Program – Evaluation Agreement (MS Word, September 2020)](../../docs/fips201ep-agreement.docx){:target="_blank"} – The formal agreement to enter into testing, signed by the vendor and the government official.
- [Reseller Acknowledgement Form (MS Word, September 2014)](../../docs/fips201ep-resellerform.docx){:target="_blank"} – If you are reselling another product, this must be disclosed and the signed agreement submitted.
- [Product/Service Application Form and Guidance (MS Word, September 2018)](../../docs/fips201ep-applicationform.docx){:target="_blank"} – Provides a checklist of which documents are required when submitting a new or upgraded solution. Must accompany all submissions.
- [Removed Products List (RPL) Process Document (PDF, June 2014)](../../docs/fips201ep-rplprocess.pdf){:target="_blank"} – If your product has been removed from the APL, review this document for the procedures.

## Personal Identity Verification Credentials

- [Annual PIV Credential Issuer (PCI) Testing Application Form (PDF, February 2020)](../../docs/fips201ep-pcitestform.pdf){:target="_blank"} – If you are an agency or organization applying for your Annual Review Audit for the Federal Public Key Infrastructure (FPKI), submit this form to fips201ep at gsa.gov; two testing options are available:
  - In-person Lab Testing - testing organizations can provide available dates and times to visit the GSA FIPS 201 lab when sending in their application form, or
  - Remote Testing - testing organizations can leverage the [Card Conformance Tool (CCT)](https://playbooks.idmanagement.gov/fpki/tools/cct/){:target="_blank"}{:rel="noopener noreferrer"} and [Certificate Profile Conformance Tool (CPCT)](https://playbooks.idmanagement.gov/fpki/tools/cpct/){:target="_blank"}{:rel="noopener noreferrer"} to generate artifacts to be sent along with the testing application form.
- [Personal Identity Verification (PIV) Credential (PDF, January 2010)](../../docs/fips201ep-pivtestprocedures.pdf){:target="_blank"} – These test procedures are used by the independent, third-party labs to test card stock.

## Derived PIV Credentials

Agencies that wish to issue D-PIV credentials should follow these steps:
1. Perform a NIST SP 800-79 assessment and receive an Authority To Operate (ATO)
2. Work with your Shared Service Provider (SSP) to obtain D-PIV Object Identifiers (OIDs)
3. Submit sample D-PIV public certificates for testing or provide results from the [Certificate Profile Conformance Tool (CPCT)](https://playbooks.idmanagement.gov/fpki/tools/cpct/){:target="_blank"}{:rel="noopener noreferrer"} to fips201ep at gsa.gov.

Upon successful completion of DPCI testing, the agency or organization will be granted approval to issue D-PIV credentials.

## Physical Access Control System

GSA tests and validates the interoperability of PIV and CAC credentials with the software and hardware used to restrict physical access to government facilities. 

Review the test procedures, choose one of the application packages, and submit to fips201ep at gsa.gov.

- [PACS Functional Requirements and Test Cases v1.4.2 Rev. A (PDF, March 2021)](../../docs/fips201ep-pacsfrtc.pdf){:target="_blank"}
    - [SM-OCC Companion Paper (PDF, March 2021)](../../docs/fips201ep-smocc.pdf){:target="_blank"}
    - [Backend Registration Companion Paper (PDF, March 2021)](../../docs/fips201ep-brcp.pdf){:target="_blank"}
    - [FRTC Express Companion Paper (PDF, March 2021)](../../docs/fips201ep-frtcexpress.pdf){:target="_blank"}
- [PACS FRTC PIN Usage Policy Addendum (PDF, August 2018)](../../docs/fips201ep-pacsfrtcpin.pdf){:target="_blank"}
    - Review this Addendum for help resetting PIN retry counters, and determining the number of remaining PIN retries during Discovery Object testing.

### PACS Application Package for New Systems or for Updates to Previously Approved Systems

Vendors, please complete the following steps. 

**If you're providing an update to a previously approved system, please skip steps 4 and 5.**

1. Review the [Product/Service Application Form and Guidance (MS Word, September 2018)](../../docs/fips201ep-applicationform.docx){:target="_blank"}.
2. Include one or both of the following, signed by a C- or VP-level individual:
    - [Product/Service Self-Attestation Form (MS Word, August 2018)](../../docs/pacsapp-attestationform.docx){:target="_blank"}
    - [Product Series and Licensing Form(MS Word, August 2018)](../../docs/pacsapp-licensingform.docx){:target="_blank"}
    - [Supply Chain Self-Attestation Form(MS Word, March 2020)](../../docs/pacsapp-supplyattestationform.docx){:target="_blank"}
3. Complete the [Applicant Product Equipment List (MS Word, September 2017)](../../docs/pacsapp-equipmentlist.docx){:target="_blank"}.
4. **Only for New Systems**: Choose from the following two topologies that best describes your solution:
    - [Approved PACS Topology Mapping Document (PACS 13.01) (PDF, February 2019)](../../docs/pacsapp-pacs1301.pdf){:target="_blank"}
    - [Approved PACS Topology Mapping Document (PACS 13.02) (PDF, February 2018)](../../docs/pacsapp-pacs1302.pdf){:target="_blank"}
    - [Mobile Handheld Approved Topology Mapping Document (14.02) (PDF, November 2017)](../../docs/pacsapp-mobile1402.pdf){:target="_blank"}
        - When you complete the FRTC Workbook, use the mapping in the workbook, not the mapping inside the Mobile Handheld Topology document.
    - Approved [PACS Wireless Reader Topology Mapping Document (PACS 20.01) (PDF, November 2020)](../../docs/pacsapp-wireless2001.pdf){:target="_blank"}
5. **Only for New Systems**: Complete the [PACS FRTC Topology Mapping Workbook(XLSX, March 2021)](../../docs/pacsapp-frtcworkbook.xlsx){:target="_blank"} for your topology.
    - When submitting a product that uses an approved or provisionally approved topology, complete the Topology Mapping Workbook, rather than the PDF version, and submit it with your application.
6. Complete a Topology Mapping Diagram as specified in Section 4.4 in the Approved PACS Topology Mapping Documents above.
7. Execute the [FIPS 201 Evaluation Program – Evaluation Agreement (MS Word, September 2020)](../../docs/fips201ep-agreement.docx){:target="_blank"}.
8. Include the completed form and checklist in theProduct/Service Application Form and Guidancein (1) above.
9. Include all applicable VPAT statements, UL-294, and FIPS 140-2 listing documents.
10. Submit all forms to fips201ep at gsa.gov.

### Test Card Loaners

GSA can loan you test cards to help you pre-test your physical access control system products.

- [PACS Test Card Loaner Process (PDF, November 2019)](../../docs/pacstest-process.pdf){:target="_blank"}
- [PACS Test Card Loaner Set Request Form (MS Word, October 2019)](../../docs/pacstest-loanerrequestform.docx){:target="_blank"} – Sign and submit this form to fips201ep at gsa.gov.
- [PACS Test Card User Guide (PDF, January 2019)](../../docs/pacstest-testuserguide.pdf){:target="_blank"}
