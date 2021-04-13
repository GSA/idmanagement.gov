---
layout: page
navtitle: Federal Common Policy CA Update
title: Federal Common Policy CA Update
collection: fpki
permalink: fpki/common/
sticky_sidenav: true
sidenav: fpki

subnav:
  - text: 1. Prepare to migrate to the Federal Common Policy CA G2
    href: ../common/prepare-to-migrate/
  - text: 2. Obtain and verify a copy of the Federal Common Policy CA G2 certificate
    href: ../common/obtain-and-verify/
  - text: 3. Distribute the certificate to operating systems
    href: ../common/distribute-os/
  - text: 4. Verify operating system distribution
    href: ../common/verify-os-distribution/
  - text: 5. Distribute the certificate to applications
    href: ../common/distribute-apps/
  - text: 6. Distribute the CA certificates issued by the Federal Common Policy CA G2
    href: ../common/certificates/
  - text: 7. Migrate to the Federal Common Policy CA G2
    href: ../common/migrate/
  - text: 8. Verify migration to the Federal Common Policy CA G2
    href: ../common/verify-migration/
  - text: Frequently Asked Questions
    href: ../common/faq/
---

The Federal Government recently deployed the **Federal Common Policy CA (FCPCA) G2**, a new Federal Public Key Infrastructure (FPKI) root Certification Authority (CA). As the existing Federal Common Policy CA reaches the end of its planned service life, FCPCA G2 will roll out incrementally and serve as the new trust anchor for the Federal PKI. Below, you'll find important dates and steps for a successful operational transition to the FCPCA G2 trust anchor.

This change affects *all federal agencies* and the following services:

- Personal Identity Verification (PIV) credential authentication to government networks
- Agency web applications implementing client authentication (for example, PIV authentication)
- User digital signatures that leverage PIV or similar credentials
- Other applications leveraging the Federal Common Policy CA as a root CA

{% include alert-success.html content="Federal enterprises and other relying party organizations should plan for this transition and test interoperability in advance of implementing changes in their production IT environments." %} 

**Recommended steps to complete by December 31st, 2020:**

<ol>
   <li><a href=\"../common/prepare-to-migrate/\">Prepare to migrate to the Federal Common Policy CA G2</a></li>
   <li><a href=\"../common/obtain-and-verify/\">Obtain and verify a copy of the Federal Common Policy CA G2 certificate</a></li>
   <li><a href=\"../common/distribute-os/\">Distribute the certificate to operating systems</a></li>
   <li><a href=\"../common/verify-os-distribution/\">Verify operating system distribution</a></li>
   <li><a href=\"../common/distribute-apps/\">Distribute the certificate to applications</a></li>
   <li><a href=\"../common/certificates/\">Distribute the CA certificates issued by the Federal Common Policy CA G2</a></li>
</ol>
    
**Recommended steps to complete by April 20th, 2021:**

<ol>
   <li value="7"><a href=\"../common/migrate/\">Migrate to the Federal Common Policy CA G2</a></li>
   <li value="8"><a href=\"../common/verify-migration/\">Verify migration to the Federal Common Policy CA G2</a></li>
</ol>


{% include alert-warning.html content="Heads-up! The Federal PKI Management Authority is working with CA operators to plan the revocation of the certificates issued by the Federal Common Policy CA.  Follow our <a href="https://github.com/GSA/ficam-playbooks/issues/99\" target="_blank">GitHub issue page or <a href=\"../notifications/#notifications\" target=\"_blank\">System Notifications</a> page for more information related to the planned revocation schedule." %} 

## Need Help?

View the [Frequently Asked Questions](../common/faq/) page for more information, or email us at fpkirootupdate at gsa dot gov.

{% include alert-info.html content="We're collaborating with CISA on a series of virtual \"office hours\" sessions to answer your questions in real-time.  Email fpkirootupdate at gsa.gov to be notified once the sessions are scheduled." %} 

