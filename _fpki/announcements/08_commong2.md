---
layout: page
title: Federal Common Policy CA Update
date: 10/12/2020
archiveDate: 10/11/2021
removeDate: 10/11/2023
collection: fpki
permalink: /fpki/announcements/common-g2-update/
description: Details on the Federal Common Policy CA G2 timeline and actions agencies need to perform.
category: Archived
sticky_sidenav: true
sidenav: fpkiactiveannouncements

subnav:
    - text: What Will Be Impacted?
      href: '#what-will-be-impacted'
    - text: When Will This Change Take Place?
      href: '#when-will-this-change-take-place'
    - text: What Should I Do?
      href: '#what-should-i-do'
    - text: Who Can I Contact for Help or More Information?
      href: '#who-can-i-contact-for-help-or-more-information'
---

{% include alert-info.html content="Upcoming changes to the Federal Common Policy Certification Authority (CA) will impact your agency.  This announcement will be updated as more information is available." %}

In **October 2020**, the Federal Government created a new Federal Public Key Infrastructure (FPKI) Root Certification Authority (CA).  The new root is named the **Federal Common Policy CA G2**. 

Between December 2020 and June 2021, the CAs signed by the old root will be migrated to be signed by this new root: Federal Common Policy CA G2.  Once the migration is complete, the old root will be decommissioned.  

## What Will Be Impacted?

**This change will affect all federal agencies** and will have an impact on the following services:

- Personal Identity Verification (PIV) credential authentication to the government networks
- Agency web applications implementing client authentication (e.g., PIV authentication)
- User digital signatures that leverage PIV or similar credentials 
- Other applications leveraging the Federal Common Policy CA as a root

## When Will This Change Take Place?
Tentative time-line:
- **October 14, 2020**: The Federal PKI Management Authority (FPKIMA) created the new Federal Common Policy CA G2 root 
- **October 15, 2020**: The FPKIMA team issued a cross certificate from the Federal Common Policy CA G2 to the Federal Bridge CA G4
- **November 18, 2020**: The FPKIMA team will issue CA certificates to migrate agency and shared service providers CAs to the new root: Federal Common Policy CA G2 
- **December 2020 to June 2021**: All agencies will need to transition from using the old Federal Common Policy CA as the root to the new Federal Common Policy CA G2 *(approximately six months)*
- **June 2021**: The FPKIMA team will decommission the old Federal Common Policy CA 

## What Should I Do?

{% include alert-info.html content="We are collaborating with CISA on a series of webinars to communicate the upcoming changes and answer your questions.  Email fpkirootupdate@gsa.gov to be notified of future events." %} 

To prevent issues, agencies **must** distribute the Federal Common Policy CA G2 root certificate as a trusted Root Certification Authority to workstations and servers.

To prepare for the Federal Common Policy CA update, read our guide [here]({{ site.baseurl }}/fpki/common).

## Who Can I Contact for Help or More Information?
Email us at fpkirootupdate@gsa.gov. 
