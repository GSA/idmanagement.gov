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

Updated: April 30, 2021

This report provides a technical and policy compliance status for each Federal Public Key Infrastructure (FPKI) Affiliate.

- [FPKI Affiliate Status Summary](#fpki-affiliate-status-summary)
- [FPKI Management Authority Certificate Activity](#fpkima-certificate-activity)
- [FPKI Repository Availability](#repository-availability)

Resolve issues by contacting one of the teams:  

- Technical issues contact the [FPKIMA Team](mailto:fpki-help@gsa.gov) 
- Certificate Policy issues contact the [Certificate Policy Working Group (CPWG)](mailto:fpkipa_cpwg@listserv.gsa.gov)  

## Federal Agency and Affiliate PKI Status Summary
The operational status for each Federal Agency or affiliate connected to the Federal Common Policy CA (FCPCA) or the Federal Bridge CA (FBCA) is summarized below. The overall operational status identifies issues that affect technical interoperability and non-compliance with applicable Certificate Policies (CP). The status is not used for any other purpose such as ranking or rating.

{% include fpkiar-status-table.html %}

## FPKIMA Certificate Activity
The activity listed in this section is limited to the certificates issued BY or TO the Federal Bridge or Federal Common Policy CA.

The following certificates were issued or published to the FPKI Trust Infrastructure in the last 30 days.

| Affiliate | Subject CA | Issuing CA | Serial # & SHA-1 Hash | Issued Date |
| --------- | ---------- | ---------- | --------------------- | ----------- |
| FPKIMA | IdenTrust Global Common Root CA 1 | Federal Bridge CA G4 | Serial: 14987956ca3225f99252bf2beb560b87ea713d3b Hash: 1657e746682699afe77e4f8d89cea6263ccb1f95 | 4/28/21 |

The following certificates were removed from the FPKI Trust Infrastructure in the last 30 days.

| Affiliate | Subject CA | Issuing CA | Serial # & SHA-1 Hash | Expiration Date | Action |
| --------- | ---------- | ---------- | --------------------- | ----------- | ----------- |
| FPKIMA | Federal Bridge CA G4 | Federal Common Policy CA | Serial: 7994 Hash: e836f3016bfb6e8df274f27fd8a4a5054517b0f1  | 12/12/21 | Revocation – 4/22/21 |
| FPKIMA | Federal Common Policy CA | Federal Bridge CA G4 | Serial: 198ef944a16068e7c0b85cd2f5b2cfb5de8b2174 Hash: fb3f5e09cac4fe4066f6c48cce31feca02fea677 | 6/30/21 | Revocation – 4/22/21 |
| FPKIMA | U.S. Department of State AD Root CA | Federal Common Policy CA | Serial: 79f9 Hash: ce11590010562a39ad8b1455acf76c03737aebf6 | 12/18/22 | Revocation – 4/22/21 |
| FPKIMA | ORC SSP 4 | Federal Common Policy CA | Serial: 2ef9 Hash: 3a70323069a4c41bc95663152e9ccc7111bb0623 | 1/21/24 | Revocation – 4/22/21 |
| FPKIMA | Symantec SSP Intermediate CA - G4 | Federal Common Policy CA | Serial: 258e Hash: 6a382438fd21037018daf3f422a2132bea2be817 | 11/12/24 | Revocation – 4/22/21 |
| FPKIMA | DigiCert Federal SSP Intermediate CA - G5 | Federal Common Policy CA | Serial: 66c0 Hash: 98b58247ac8a2bc6f348f03e8d22884d8345fc0f | 12/13/28 | Revocation – 4/22/21 |
| FPKIMA | Verizon SSP CA A2 | Federal Common Policy CA | Serial: 65f8 Hash: 477bf4017d25cde276cdddf756d40ca591d76f6d | 12/6/26 | Revocation – 4/22/21 |

The following certificates are planned for a certificate action in the near future, dates to be determined based on availability.

| Affiliate | Subject CA | Issuing CA | Serial # & SHA-1 Hash | Expiration Date | Action |
| --------- | ---------- | ---------- | --------------------- | --------------- | ------ |
| FPKIMA | US Treasury Root CA | Federal Common Policy CA | Serial: 6405 Hash: 5a87922b5eaf1d63198a951b2ab6f59b2f16c131 | 8/29/21 | Revocation 6/10 |
| FPKIMA | US Treasury Root CA | Federal Common Policy CA | Serial: 734b Hash: 48ce02a99ae2cc4f790f2989aa153ed565b7e4d2 | 8/14/22| Revocation 6/10 |
| FPKIMA | Entrust Managed Services Root CA | Federal Common Policy CA | Serial: 2e26 Hash: 39c1d3b64e756a3267bfe5fecb103da892ca0611 | 7/30/25 | Revocation 6/17 |
| FPKIMA | Entrust Managed Services Root CA | Federal Common Policy CA | Serial: 734a Hash: a09655170c87d0fbfe0328b99a7baf4a1cf0b5d9 | 8/14/29 | Revocation 6/17 |
| FPKIMA | IdenTrust Global Common Root CA 1 | Federal Bridge CA G4 | Serial: 1659bceb348e6bbd33832c8284c35d7975c8d3c6 Hash: 2800ea6ecdeb8efc1cf4c042d712e8622e0cbb1a | 8/21/21 | Renew |

 

## Repository Availability 
Repository availability is an uptime metric for Certificate Revocation List availability, based on monitoring by the FPKIMA. The table only contains Certification Authorities directly signed by the Federal Common Policy Root CA, Federal Common Policy Root G2 or Federal Bridge CA G4. A metric of "99" in the table below means the Certificate Revocation List was available for 99% of the given month, in other words, the file was not available for 1% of the month. The last column is the 12-month average.

{% include fpkiar-repo-table.html %}
