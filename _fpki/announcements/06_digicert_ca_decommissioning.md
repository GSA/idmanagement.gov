---
layout: page
title: DigiCert CA Decommissioning 
pubDate: 04/01/2019
archiveDate: 03/20/2020
removeDate: 03/02/2022
collection: fpki
category: Decommission
permalink: /fpki/announcements/2019digicert/
description: Information related to the DigiCert CAs affected by this change.
sidenav: fpkiarchivedannouncements
sticky_sidenav: true
category: Removed

---

DigiCert is planning on decommissioning several certification authorities (CAs) from the Federal PKI. These CAs are no longer active or required, and there is no expected impact from these changes. 

Remaining active certificates issued from any of the CAs listed in the table below will be revoked.  Each CA planned for decommissioning will issue a long-lived CRL, and then have its signing CA certificate revoked by the Symantec Class 3 SSP Intermediate CA - G3 CA.  

The following CAs are planned for revocation and decommissioning: 

| Certificate Serial Number | Subject | Issuer |
|---------------------------|---------|--------|
| 0f76b14f6e3c3f3d78cc7cabf1e9d1f2 | CSC CA - 2 | Symantec Class 3 SSP Intermediate CA - G3 |
| 22058f804d89edd93122c840987ac7ab | CSRA FBCA C4 Device CA | Symantec Class 3 SSP Intermediate CA - G3 |
| 2aaa084cce8d13dc0b3b05b34e325922 | CSRA FBCA C4 CA | Symantec Class 3 SSP Intermediate CA - G3 |
| 45aabdffdae1621d52b260daf7ef3bd7 | CSRA FBCA C3 Device CA | Symantec Class 3 SSP Intermediate CA - G3 |
| 48b53c25944e6ed645339ecf1079fd37 | CSRA FBCA C3 CA | Symantec Class 3 SSP Intermediate CA - G3 |
| 75c13dbed31093353c73618effdabe6e | SureID Inc. CA2 | Symantec Class 3 SSP Intermediate CA - G3 |
| 4ff47dfa24d3aa3633dd4e55de80f870 | SureID Inc. Device CA1 | Symantec Class 3 SSP Intermediate CA - G3 |
| 7bc54c654c3a41d738d48ac17ab603af | Eid Passport LRA Content Signer CA 3 | Symantec Class 3 SSP Intermediate CA - G3 |
| 404d442e9c097771209218ac534936c3 | Eid Passport LRA Device 2 CA | Symantec Class 3 SSP Intermediate CA - G3 |

## Who Can I Contact for Help or More Information?  
Email us at fpki@gsa.gov.
