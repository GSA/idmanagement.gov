---
layout: page 
title: Federal PKI Activity Report
collection: fpki
permalink: fpki/tools/fpkiar/
sticky_sidenav: true
sidenav: fpkitools

subnav:
    - text: Federal Agency and Affiliate PKI Status Summary
      href: '#federal-agency-and-affiliate-pki-status-summary'
    - text: FPKIMA Certificate Activity
      href: '#fpkima-certificate-activity'
    - text: Repository Availability
      href: '#repository-availability'
---

Updated: October 6, 2020

This report provides a technical and policy compliance status for each Federal Public Key Infrastructure (FPKI) Affiliate.

Resolve issues by contacting one of the teams:  

- Technical issues contact the [FPKIMA Team](mailto:fpki-help@gsa.gov) 
- Certificate Policy issues contact the [Certificate Policy Working Group (CPWG)](mailto:fpkipa_cpwg@listserv.gsa.gov)  

## Federal Agency and Affiliate PKI Status Summary
The operational status for each Federal Agency or affiliate connected to the Federal Common Policy CA (FCPCA) or the Federal Bridge CA (FBCA) is summarized below. The overall operational status identifies issues that affect technical interoperability and non-compliance with applicable Certificate Policies (CP). The status is not used for any other purpose such as ranking or rating.

{% include fpkiar-status-table.html %}

## FPKIMA Certificate Activity
The activity listed in this section is limited to the certificates issued BY or TO the Federal Bridge or Federal Common Policy CA.

No certificates were issued or published to the FPKI Trust Infrastructure in the last 30 days.

| Affiliate | Subject CA | Issuing CA | SHA-1 Hash | Issued Date |
| --------- | ---------- | ---------- | ------ | ------ |
| No activity to report|  |   |   |  |


No certificates were removed from the FPKI Trust Infrastructure in the last 30 days.

| Affiliate | Subject CA | Issuing CA | SHA-1 Hash | Expiration Date |
| --------- | ---------- | ---------- | ------ | ------ |
| No activity to report|  |   |   |  |

The following certificates are planned for a certificate action in the near future, dates to be determined based on availability.

| Affiliate | Subject CA | Issuing CA | SHA-1 Hash | Expiration Date | Action |
| --------- | ---------- | ---------- | ---------- | ---------- | -------- |
| Entrust | Entrust Managed Services NFI Root CA | Federal Bridge CA G4 | 313f87f0eb4f8e6c658f5e66f58764282c54fba4 | 11/16/20 | Reissue |
| DigiCert | Symantec Class 3 SSP Intermediate CA - G3 | Federal Bridge CA 2016 | a99a0d6510b59b6dc92270eae1f24fbc21d2dcce | 10/25/20 | Remove |
| FPKIMA | Federal Bridge CA 2016 | Federal Common Policy CA | bd38b7e253cfc5dd278a927f88833fb44c6af03a | 10/28/2020 | Revocation |
| FPKIMA | Federal Common Policy CA | Federal Bridge CA 2016 | 38341412caa3d72ade61022240411444d21b1de9 | 10/28/20 | Revocation or removal |
| FPKIMA | Federal Common Policy CA | Federal Bridge CA G4 | 4ac107ee2151f0cb6b54ef350759f7bb51a3fca2 | 12/12/20 | Reissue |
| FPKIMA | Federal Common Policy CA G2 | Federal Common Policy CA G2 | TBD | TBD | Establish |



## Repository Availability 
Repository availability is an uptime metric for Certificate Revocation List availability, basaed on monitoring by the FPKIMA. The table only contains Certification Authorities directly signed by the Federal Common Policy Root CA, Federal Bridge CA 2016 or Federal Bridge CA G4. A metric of "99" in the table below means the Certificate Revocation List was available for 99% of the given month, in other words, the file was not available for 1% of the month. The last column is the 12-month average.

{% include fpkiar-repo-table.html %}
