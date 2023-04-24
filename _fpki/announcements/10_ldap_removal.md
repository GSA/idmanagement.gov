---
layout: page
title: FCPCA SIA LDAP Decommissioning
pubDate: 10/11/2022
archiveDate: 10/11/2023
removeDate: 10/11/2025
collection: fpki
permalink: /fpki/announcements/ldap-removal/
description: The FPKIMA will be decommissioning the LDAP service associated with the old FCPCA root's SIA repository
category: Active
sticky_sidenav: true
sidenav: fpkiactiveannouncements
      
---

The FPKIMA team will be taking action to reduce unnecessary external activity on their repositories in order to avert potential negative impacts to availability.

**Plan of Action:**
The FPKIMA team is turning off its sole remaining LDAP repository services on 10/12/2022, this only impacts the SIA repository for the old Federal Common Policy CA (FCPCA) root.

**Mitigating Factors:**
The proposed action should not impact FPKI relying parties, provided they are properly configured to validate end entity certificates up to the Federal Common Policy CA G2 (FCPCAG2).  This action is further reinforced given the following considerations:

- The associated HTTP repository is still available - [http://http.fpki.gov/fcpca/caCertsIssuedByfcpca.p7c](http://http.fpki.gov/fcpca/caCertsIssuedByfcpca.p7c)
- LDAP support was deprecated in 2013, and the last certificate issued by the old FCPCA with an FPKI LDAP URI expired in 2020 
- The old FCPCA Self-signed root certificate expires in 2030 and contains one LDAP URI in the SIA to a Directory entry that contains no certificates

As a result, of these mitigating factors, there should be no impacts to any relying parties that have successfully migrated to the [FCPCAG2 trust anchor](https://playbooks.idmanagement.gov/fpki/certsandcrls/), nor is there an ability to dynamically conduct full path discovery and validation of an end entity certificate to the old FCPCA, per the previous migration effort.

If you have any questions regarding this action please contact:
fpki dash help at gsa dot gov
