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

Updated: December 2, 2020

This report provides a technical and policy compliance status for each Federal Public Key Infrastructure (FPKI) Affiliate.

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
| Widepoint | WidePoint ORC SSP 5 | Federal Common Policy CA G2 | Serial: 210b3f17db750e616eb25f3f0b4933e5a98c449b Hash: 80f4731a60fd5f2eb0468d0629310daa50ad210d | 11/19/20 |
| State | U.S. Department of State AD Root CA | Federal Common Policy CA G2 | Serial: 27634fd321cbfd8c7efc0aeb02876f63da4c0c09 Hash: 9b3849f7047964a6654988054956e478ccb75ded | 11/18/20 |
| WidePoint | ORC SSP 4 | Federal Common Policy CA G2 | Serial: 20a0e513367881559a5e7d20d35fa7c6739a42ab Hash: 3e6610b03daca9fa07e1093b60ccb8927c42d83b | 11/18/20 |
| DigiCert | DigiCert Federal SSP Intermediate CA - G5 | Federal Common Policy CA G2 | Serial:24bc168f9ccb30cfcef8f0a58f26f10181869266 Hash:  9aecfbe2de8aea49d220bbf799172c00527fe756 | 11/18/20 |
| Treasury | US Treasury Root CA | Federal Common Policy CA G2 | Serial: 2013db2cd30dd29d17edc48535c5e00d8916cf02 Hash: d7d298927d339efa414f2565923e28b98acd970a | 11/18/20 |
| Verizon | Verizon SSP CA A2 | Federal Common Policy CA G2 | Serial: 25fca834ada24a4455a2db0ff4cef7c411198e3a Hash: b2167fd38ff47bb910d8dcc32fcc3b7b63a09ff7 | 11/18/20 |
| Entrust | Entrust Managed Services Root CA | Federal Common Policy CA G2 | Serial: 215e78d99648b021c6394a6566d8e00f46a1e595 Hash: 07f5dc58f83778d5b5738a988292c00a674a0f40 | 11/18/20 |
| DigiCert | Symantec SSP Intermediate CA - G4 | Federal Common Policy CA G2 | Serial: 262bd1f025c8af37334545666ea6c9ea946c2c34 Hash: 4c40f62b5c3f13533a8f8a1d44f8b027aaa0fd3d | 11/18/20 |
| USPTO | USPTO_INTR_CA1 | Federal Bridge CA G4 | Serial: 10f82e9132e31f62dba620ab66f6e7f836e663c7 Hash: edd7e56da5147cf98ea580a176a27bc990b243ce | 11/12/20 |
| SAFE | SAFE Identity Bridge CA | Federal Bridge CA G4 | Serial: 159e68a2b020e0c91a0425c28e79fcda961b6142 Hash: cba35a94b7460a9e86ff7c95123a849ccd7be1ab | 11/12/20 |


The following certificates were removed from the FPKI Trust Infrastructure in the last 30 days.

| Affiliate | Subject CA | Issuing CA | Serial # | SHA-1 Hash | Expiration Date |
| --------- | ---------- | ---------- | -------- | ---------- | --------------- |
| N/A | - | - | - | - | - |


The following certificates are planned for a certificate action in the near future, dates to be determined based on availability.

| Affiliate | Subject CA | Issuing CA | Serial # & SHA-1 Hash | Expiration Date | Action |
| --------- | ---------- | ---------- | --------------------- | --------------- | ------ |
| USPTO | USPTO_INTR_CA1 | Federal Bridge CA G4 | Serial: 189a971b30cc79b60b35e21789db1c479cd949f0 Hash: 978ec2f323452f8f46932b8550663d68b6e96af7 | 12/12/2022 | Revoke 12/8/2020 |

 

## Repository Availability 
Repository availability is an uptime metric for Certificate Revocation List availability, based on monitoring by the FPKIMA. The table only contains Certification Authorities directly signed by the Federal Common Policy Root CA, Federal Bridge CA 2016 or Federal Bridge CA G4. A metric of "99" in the table below means the Certificate Revocation List was available for 99% of the given month, in other words, the file was not available for 1% of the month. The last column is the 12-month average.

{% include fpkiar-repo-table.html %}
