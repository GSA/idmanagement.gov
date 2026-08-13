---
layout: page
title: Federal Bridge CA G5 Migration
pubDate: 8/12/2026
removeDate: 8/12/2029
collection: implement
permalink: /implement/announcements/FBCAG5/
description: FBCA G5 Migration Plan.
category: Active
sticky_sidenav: true
sidenav: fpkiannouncements
      
---

In order to maintain the near term security of the Federal Public Key Infrastructure landscape and comply with established cryptographic key migration timelines as outlined in NIST SP 800-57, the Federal Bridge Certification Authority (FBCA) G4, currently leveraging a 2048-bit RSA public key, will be undergoing a replacement and migration to the FBCA G5 which will leverage a 4096-bit RSA public key.

## What is the Plan? 
The migration to the FBCA G5 is planned to happen in the following 4 phases:

1. **Phase 1: Signature and Publication**<br> *August 27th, 2026* <br> 
The FBCA G5 keys will be generated and a cross certificate will be issued from the Federal Common Policy CA G2 to the FBCA G5.  The resulting FBCA G5 certificate will be published in both the FCPCAG2 SIA and FBCA G5 AIA public repositories. Additionally, a return cross-certificate from the FBCA G5 to the FCPCA G2 will also be issued for a small number of external partners to build trust chains to their own root CAs.


2. **Phase 2: New Affiliate Cross-Certificate Issuance**<br> *August 28th - September 4th, 2026* <br> 
The FPKIMA has coordinated to reissue 11 affiliate cross certificates which will all be signed by the new FBCA G5.  Each of these new affiliate cross-certificates will be published in the FBCA G5 SIA.  During this phase all relying party application trust stores will need to be updated to trust the new FBCA G5 chains to ensure continued interoperability of bridge affiliate subscriber certificates.<br><br>The following diagram shows that there will be two parallel trust paths during Phase 2 where bridge affiliate CA certificates issued by FBCA G4 are valid while the FBCA G5 conducts reissuance (note only some affiliates are pictured due to space limitations):

![A detailed diagram of the FBCA G4 and new FBCA G5 to include issued cross certificates.]({{site.baseurl}}/assets/fpki/FBCAG5_1.jpg)

3. **Phase 3: Revocation of old Affiliate Cross-Certificates**<br> *TBD, but expected within 90 days of phase 2 completion* <br> 
The FBCA G4 will begin revoking affiliate cross-certificates on dates requested by each affiliate.  For systems that conduct revocation checking, this will ensure that older certificate path building will no longer be able to be conducted through the FBCA G4.<br><br>The following diagram shows the planned FBCA G4 revocation and the revocation of its issued cross-certificates.  This will ensure path building is only conducted through the new FBCA G5.

![A detailed diagram of the revoked FBCA G4, its cross certificates and new FBCA G5 to include newly issued cross certificates.]({{site.baseurl}}/assets/fpki/FBCAG5_2.jpg)

4. **Phase 4: FBCA G4 final long term CRL publication and revocation by FCPCA G2**<br> *TBD, but expected by the end of November 2026* <br> 
Once the final affiliate cross-certificate has been revoked, the FBCA G4 will revoke its return cross-certificate to the FCPCA G2 and issue a final FBCA G4 signed long-term CRL valid through its natural expiration date of December 6, 2029. This final FBCA G4 CRL will be available at its CRL DP.  Additionally the FCPCA G2 will revoke the FBCA G4 certificate.<br><br>The following diagram shows the a sample trust path as it currently exists for USPTO through the FBCA G4 and the updates to CA certificates post-migration:

![A diagram showing sample old FBCA G4 and new FBCA G5 trust chains for a XTec NFI PIV-I.]({{site.baseurl}}/assets/fpki/FBCAG5_3.jpg)

A summary of the migration phases is as follows:

| Phase | Title | Expected Completion Date | Description |
| --- | --- | --- | --- |
| Phase 1 | FBCA G5 Signature and Publication | August 27, 2026 | The FBCA G5 will receive a cross-certificate from the FCPCA G2 and it will be made publicly available |
| Phase 2 | FBCA G5 Affiliate New Cross-Certificate Issuance | September 4, 2026 | The FBCA G5 will issue 11 new cross-certificates to affiliate CAs |
| Phase 3 | FBCA G4 Affiliate Old Cross-Certificate Revocation | NLT November 27, 2026 | The FBCA G4 will revoke each of its issued affiliate cross-certificates at a date requested by the affiliate |
| Phase 4 | FCPCA G2 Revokes the FBCA G4 | NLT November 30, 2026 | The FBCA G4 will publish its final long term CRL and the FCPCA G2 will revoke its cross-certificate to the FBCA G4 |

## Who will be Impacted?
This FBCA key-migration and certificate replacement effort has the potential to impact all Federal relying party applications that accept DoD issued Common Access Cards (CAC), DoD External Certification Authority (ECA) credentials, PIV-Interoperable (PIV-I) or other Non-Federally Issued (NFI) certificates for authentication, digital signature, or email encryption with trusted external partner organizations.

Additionally, this will also impact Bridge Affiliate organizations that validate PIV or other FPKI certificates to their own trust anchors.


## How do Relying Parties Prepare for the FBCA G5 Migration?
Relying party applications can ensure continuity of operations with FBCA partner credentials by updating their relevant trust stores to include the FBCA G5 certificate issued from the FCPCAG2 and any other FBCA G5 issued affiliate CA cross-certificates.

Our [Enterprise Trust in the FCPCAG2 Implementation Guide](https://www.idmanagement.gov/implement/trust-fcpca/#step-5---distribute-intermediate-certificates){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} (to be published NLT August 28th) is undergoing updates to ensure the appropriate FBCA G5 CA certificate is listed and accounted for; however, the actual certificate will not be available for download until August 27th at the earliest, and the FPKI crawler/graph will not reflect the new CAs until September 1st.  This linked implementation guide already includes instructions on how to deploy CA updates to your enterprise Trust Stores to leverage automation to ensure user devices are also updated.

Starting on September 7th, relying parties will be able to download all of the newly issued FBCA G5 and affiliate CA cross-certificates from the [FPKI consolidated p7b](https://www.idmanagement.gov/implement/tools/CACertificatesValidatingToFederalCommonPolicyG2.p7b){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} CA certificate bundle.

## Helpful Tips
Revocation dates with affiliates have been planned to mitigate most customer relying party impacts by allowing the FBCA G4 chains to be valid for some period for trust store updates after reissuances are completed.

It is recommended that relying parties populate their untrusted CA stores with the FBCA G4 certificate after installing the new FBCA G5 and the new reissued affiliate cross-certificates. 

It is also recommended that Federal relying parties populate any return cross-certificates (e.g., FBCA G5 → FCPCA G2) to their untrusted CA store.  This should prevent unintended path building.

Concurrent to the FBCA G5 migration, DoD will also be undergoing a migration to a new DoD Interoperability Root CA 3 (IRCA3), which will be replacing the current DoD IRCA2.
- Relying parties that validate DoD CAC (or ECA certificates) up to Common may also need to replace other cross-certificates issued by DoD IRCA2 currently.  The DoD IRCA3 is expected to issue cross-certificates to the following CAs:
  * DoD Root CA 3
  * DoD Root CA 6
  * ECA Root CA 4
  * ECA Root CA 5

- The expected IRCA3 SIA is as follows (these will be included in the FPKI consolidated p7b): [http://crl.disa.mil/issuedby/DODINTEROPERABILITYROOTCA3_IB.p7c](http://crl.disa.mil/issuedby/DODINTEROPERABILITYROOTCA3_IB.p7c){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} 

## Additional Resources
FPKI plans to generate direct communications to known relying parties (e.g., login.gov, Treasury Fiscal Services, etc.) on this migration to reduce potential impacts to interoperability.

FPKI and CISA plan to expand communications to potential relying parties and to provide virtual presentations and Q&A capabilities for those communities that might be impacted (date and links to be provided).

Relevant planned public repository information (these are not expected to be available until after September 27th):
- FBCA G5 AIA - [http://repo.fpki.gov/bridge/caCertsIssuedTofbcag5.p7c](http://repo.fpki.gov/bridge/caCertsIssuedTofbcag5.p7c){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} 
- FBCA G5 SIA - [http://repo.fpki.gov/bridge/caCertsIssuedByfbcag5.p7c](http://repo.fpki.gov/bridge/caCertsIssuedByfbcag5.p7c){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} 
- FBCA G5 CRL DP - [http://repo.fpki.gov/bridge/fbcag5.crl](http://repo.fpki.gov/bridge/fbcag5.crl){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} 

Planned FBCA affiliate cross-certificate reissuances (intent and issuance actions) will be communicated on the FPKI system notifications and include the following CAs:
- CertiPath Bridge CA - G3 
- DigiCert Federated ID CA - G2
- DoD Interoperability Root CA 3 (this is replacing the current IRCA2)
- Entrust Managed Services NFI Root CA 
- Exostar Federated Identity Service Root CA 2
- IdenTrust Global Common Root CA 1 
- STRAC Bridge Root Certification Authority 
- TSCP SHA384 Bridge CA 
- USPTO_INTR_CA1 
- WidePoint NFI Root 2 
- XTec NFI SSP Root CA 1 


If you have any questions regarding this release please contact: [fpki-help@gsa.gov](mailto:fpki-help@gsa.gov){:class="usa-link"}.
