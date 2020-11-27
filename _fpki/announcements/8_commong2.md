---
layout: page
navtitle: Federal Common Policy CA Update
title: Federal Common Policy CA Update
pubDate: October 12, 2020
collection: fpki
permalink: fpki/announcements/common-g2-update/
description: In October 2020, the Federal Government will establish a new Federal Public Key Infrastructure (FPKI) Root Certification Authority (CA).  This new root is named the Federal Common Policy CA G2.  This announcement details the CA update timeline and actions agencies need to perform.
status: Active
sticky_sidenav: true
sidenav: fpkiannouncements

subnav:
    - text: What will be impacted?
      href: '#what-will-be-impacted'
    - text: When will this change take place?
      href: '#when-will-this-change-take-place'
    - text: What should I do?
      href: '#what-should-i-do'
    - text: Who can I contact for help or more information?
      href: '#who-can-i-contact-for-help-or-more-information'
---

{% include alert-info.html content="Upcoming changes to the Federal Common Policy Certification Authority (CA) will impact your agency.  This announcement will be updated as more information is available." %}

In **October 2020**, the Federal Government created a new Federal Public Key Infrastructure (FPKI) Root Certification Authority (CA).  The new root is named the **Federal Common Policy CA G2**. 

Between December 2020 and May 2021, the CAs signed by the old root will be migrated to be signed by this new root: Federal Common Policy CA G2.  Once the migration is complete, the old root will be decommissioned. 

## What will be impacted?

**This change will affect all federal agencies** and will have an impact on the following services:

- Personal Identity Verification (PIV) credential authentication to the government networks
- Agency web applications implementing client authentication (e.g., PIV authentication)
- User digital signatures that leverage PIV or similar credentials 
- Other applications leveraging the Federal Common Policy CA as a root

## When will this change take place?
Tentative time-line:
- **October 14, 2020**: The Federal PKI Management Authority (FPKIMA) created the new Federal Common Policy CA G2 root 
- **October 15, 2020**: The FPKIMA team issued a cross certificate from the Federal Common Policy CA G2 to the Federal Bridge CA G4
- **November 18, 2020**: The FPKIMA team will issue CA certificates to migrate agency and shared service providers CAs to the new root: Federal Common Policy CA G2 
- **December 2020 to May 2021**: All agencies will need to transition from using the old Federal Common Policy CA as the root to the new Federal Common Policy CA G2 *(approximately six months)*
- **May 2021**: The FPKIMA team will decommission the old Federal Common Policy CA 

## What should I do?
To prevent issues, agencies **must** distribute the Federal Common Policy CA G2 root certificate as a trusted Root Certification Authority to workstations and servers.

To prepare for the Federal Common Policy CA update, read our guide [here]({{ site.baseurl }}/common).

## Who can I contact for help or more information?
Email us at fpkirootupdate@gsa.gov. 
