---
layout: page
title: GSA Card Conformance Tool
collection: fpki
permalink: /fpki/tools/cct/
sticky_sidenav: true
sidenav: fpkitools

subnav:
  - text: Submitting a CCT Test Results Package
    href: '#submitting-a-cct-test-results-package'  
  - text: Resources
    href: '#resources'
  
---
**Last Update**: May 10, 2021

The [Card Conformance Tool (CCT)](https://github.com/GSA/piv-conformance/releases){:target="_blank"}{:rel="noopener noreferrer"} is a GSA managed, Java tool hosted on GitHub that can verify that a Personal Identity Verification (PIV) or PIV-Interoperable (PIV-I) conforms to the PIV data model per current releases of related standards, including:

- [FIPS 201-3](https://csrc.nist.gov/publications/detail/fips/201/3/final){:target="_blank"}{:rel="noopener noreferrer"}: PIV of Federal Employees and Contractors
- [NIST SP 800-73](https://csrc.nist.gov/publications/detail/sp/800-73/4/final){:target="_blank"}{:rel="noopener noreferrer"}: Interfaces for Personal Identity Verification
- [NIST SP 800-76](https://csrc.nist.gov/publications/detail/sp/800-76/2/final){:target="_blank"}{:rel="noopener noreferrer"}: Biometric Specifications for Personal Identity Verification
- [NIST SP 800-78](https://csrc.nist.gov/publications/detail/sp/800-78/4/final){:target="_blank"}{:rel="noopener noreferrer"}: Cryptographic Algorithms and Key Sizes for Personal Identity Verification

The CCT, in conjunction with the [Certificate Profile Conformance Tool (CPCT)]({{site.baseurl}}/fpki/tools/cpct), also facilitates remote PIV and PIV-I testing in support of FPKI [annual reviews](https://www.idmanagement.gov/governance/fpkiaudit/){:target="_blank"}{:rel="noopener noreferrer"}, reducing travel and resource time and costs. To request an official report on your CPCT and CCT results, fill out the [Annual PIV Credential Issuer (PCI) Testing Application Form](https://www.idmanagement.gov/docs/fips201ep-pcitestform.pdf){:target="_blank"}{:rel="noopener noreferrer"} and send it with outputs and testing artifacts to fips201ep at gsa.gov.

You can [download the latest version of the CCT here](https://github.com/GSA/piv-conformance/releases){:target="_blank"}{:rel="noopener noreferrer"}.

# Submitting a CCT Test Results Package
If you are running the Card Conformance Tool as part of the annual requirement to undergo PIV/PIV-I testing, you must email the artifacts listed below to fips201ep at gsa.gov.

1.	A completed [testing application](https://www.idmanagement.gov/docs/fips201ep-pcitestform.pdf){:target="_blank"}{:rel="noopener noreferrer"} for each PCI configuration evaluated (See Section 1 of the application for more information).
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

# Resources

For more information about the CCT, see the [CCT Wiki](https://github.com/GSA/piv-conformance/wiki){:target="_blank"}{:rel="noopener noreferrer"}. 

For step-by-step instructions to help you perform CCT Testing, see the [CCT User Guide](https://github.com/GSA/piv-conformance/wiki/User-Guide).

For a detailed video on how to perform CCT testing and how to prepare and submit a proper CCT Test Results Package, please watch this [CCT video](https://github.com/GSA/piv-conformance/raw/master/docs/Card_Test_Submission.mp4){:target="_blank"}{:rel="noopener noreferrer"}: PIV Conformance Tool Video.

For further assistance with the CCT, contact fpki at gsa.gov.
