---
layout: page
collection: buy
title:  Trust Services
permalink: buy/trust-services/
sidenav: buy
sticky_sidenav: true

subnav:
  - text: Overview
    href: '#overview'
  - text: Government Identity and Credentials
    href: '#government-identity-and-credentials'
  - text: Business Identity and Credentials
    href: '#business-identity-and-credentials'
  - text: Consumer Identity and Credentials
    href: '#consumer-identity-and-credentials'
  - text: Trust and Auditing of Services
    href: '#trust-and-auditing-of-services'
---

This page is for agencies to view the current service providers that have an identity federation agreement with the U.S. Government.

The services provided rely upon a level of trust to be established with the U.S. Government. This trust is managed through legal agreements; technology agreements; and regular auditing of the services, procedures, and practices. These agreements and audits are managed by the Federal Public Key Infrastructure (FPKI) or Trust Framework Services (TFS) initiatives.

If you are looking for a list of all possible Certification Authorities in the FPKI, please review the [list of PIV CAs and Agencies](https://playbooks.idmanagement.gov/fpki/crls/pivcas/){:target="_blank"}{:rel="noopener noreferrer"} or the [FPKI Graph](https://playbooks.idmanagement.gov/fpki/tools/fpkigraph/){:target="_blank"}{:rel="noopener noreferrer"}.

## Overview

Trust Services providers offer services related to identity and credentialing of persons and operate within identity federations. These provider services specifically include:

- Issuing and managing person identity and device identity certificates using PKI.
- Issuing and managing person identity credentials for PIV and Common Access Card (CAC) hardware credentials that are tied to PKI.
- Issuing and managing person identity credentials using other identity federation technologies (for example, a person may be identity-proofed, have an account in the service, and use one-time password credentials to authenticate).

We’ve categorized the service providers given below by type of identity and credential and what population is served:

- [Government Identity and Credentials](#government-identity-and-credentials) – Covers the FPKI Shared Service Providers (SSPs)
- [Business Identity and Credentials](#business-identity-and-credentials) – Covers PIV-Interoperable (PIV-I), other PKI certificates, and non-PKI
- [Consumer Identity and Credentials](#consumer-identity-and-credentials) – Covers non-PKI

## Government Identity and Credentials

These organizations operate as Federal PKI Shared Service Providers (SSPs) for federal agencies. All organizations operate Certification Authorities, are audited, and have and maintain a FISMA Authorization To Operate (ATO). To request a copy of a specific system’s ATO, please contact FPKI at GSA dot Gov.

All of the Certification Authorities operated by these Federal PKI SSPs issue certificates for:

- Person identity, including for PIV credentials

A subset of the Federal PKI SSPs also issue and manage:

- Government enterprise device certificates

Information on publicly trusted device certificates used for TLS (HTTPS) on the internet, recommendations on government configurations, and which PKI providers/Certification Authorities to use can be found at this [HTTPS guidance website](https://https.cio.gov/){:target="_blank"}{:rel="noopener noreferrer"}.

| Organization | Customer Service | Tech Support|  
|-----------|:-----------:|:-----------:|  
| Department of the Treasury| Daniel Wood<br/>(202) 622-5144 | Joe Gribble<br/>(304) 480-7608 |  
| DigiCert Federal Shared Service Provider (formerly Symantec)| Carly Backlund<br/>(801) 770-1773<br/>carly.backlund at digicert.com | Tammy Green<br/>(801) 441-7104<br>tammy.green at digicert.com| 
| Entrust Federal Shared Service Provider |	Patrick Garritty<br/>(703) 901-1388 |	support at entrustdatacard.com |
| Verizon/Cybertrust Federal Shared Service Provider | Russ Weiser<br/>(801) 631-1685 |	Russ Weiser<br/>(801) 631-1685 |
| WidePoint Federal Shared Service Provider	| Jason Holloway, Caroline Godfrey<br/>(800) 816-5548<br/>WCSC-Info at ORC.com	| Jim Manchester<br/>(800) 816-5548<br/>PKIPolicy at ORC.com |

## Business Identity and Credentials
These organizations operate services for persons who are affiliated with a business, State, Local, Tribal, Territorial, or non-profit. For the PKI credentials, these are often used by a business person to digitally sign documents with the U.S. Government as a business representative or to authenticate to a small number of government applications.

For each, we identify whether the services include:

- Person identity using PKI, including PIV-I credentials
- Person identity using PKI for business-to-government digital signatures
- Person identity using non-PKI federation technologies

| Organization | Customer Service | Tech Support | Type of Person Identity Credentials |
|-----------|:-----------:|:-----------:|:-----------:|  
| [Carillon Information Security](https://www.carillon.ca/){:target="_blank"}{:rel="noopener noreferrer"}	| Marc St-Jacques>br/>(844) 754-7484 x125	| Marc St-Jacques<br/>(844) 754-7484 x125	| PIV-I Credentials |
| [DigiCert](https://www.digicert.com/){:target="_blank"}{:rel="noopener noreferrer"}	| Carly Backlund<br/>(801) 770-1773<br/>carly.backlund at digicert.com | Tammy Green<br/>(801) 441-7104<br>tammy.green at digicert.com| Other PKI Credentials |
| Entrust	| Patrick Garritty<br/>(703) 901-1388	| support at entrustdatacard.com	| PIV-I Credentials<br/>Other PKI Credentials |
| [Exostar](https://www.exostar.com/Identity_Access/Managed_PKI/){:target="_blank"}{:rel="noopener noreferrer"} | info at exostar.com	| (703) 793-7800<br/>[Open a case online](http://www.myexostar.com/Online-Support/){:target="_blank"}{:rel="noopener noreferrer"}	| Other PKI Credentials |
| [Foundation for Trusted Identity (FTI)](https://www.foundationfortrustedidentity.org/){:target="_blank"}{:rel="noopener noreferrer"}	| Kenneth Boley<br/>(210) 704-1650	| Sam Dibrell, Jr.<br/>(210) 704-1650	| PIV-I Credentials |
| [IdenTrust](https://www.identrust.com/igc/){:target="_blank"}{:rel="noopener noreferrer"}	| IdenTrust Customer Support<br/>Support at IdenTrust.com<br/>(800) 748-5360	| IdenTrust Customer Support<br/>Support at IdenTrust.com<br/>(800) 748-5360	| PIV-I Credentials<br/>Other PKI Credentials
| [NextgenID](https://www.nextgenid.com/){:target="_blank"}{:rel="noopener noreferrer"}	| Dario Berini<br/>(703) 929-5543	| Keith Sheridan<br/>(703) 615-1697	| PIV-I Credentials<br/>Other PKI Credentials |
| [Fortior Solutions](https://www.fortiorsolutions.com/){:target="_blank"}{:rel="noopener noreferrer"}	| Tony Schroeder<br/>(503) 924-5338	| David Byrum<br/>(503) 924-5236 | PIV-I Credentials |
| [WidePoint](https://www.orc.com/nfi/){:target="_blank"}{:rel="noopener noreferrer"}	| Jason Holloway, Caroline Godfrey<br/>(800) 816-5548<br/>WCSC-Info at ORC.com | Jim Manchester <br/>(800) 816-5548<br/>PKIPolicy at ORC.com | PIV-I Credentials<br/>Other PKI Credentials |

## Trust and Auditing of Services

The FPKI and Trust Framework Solutions (TFS) program reviews the trust frameworks of commercial and non-profit organizations to determine whether the policies, processes, legal agreements, privacy protections, security controls, and audit requirements are comparable with the U.S. Government requirements. If comparable, the commercial and non-profit organizations that manage their communities’ trust frameworks become adopted Trust Framework Providers.

The Trust Frameworks do not manage identities or credentials for their community of interest directly. Services that are certified and audited by the Trust Frameworks provide the federated identity and credentials. These services are listed above in different categories.

Services operating within these Trust Frameworks may be used by U.S. Government applications if the service and the demographics are appropriate for the mission. Risk assessments have been performed for the U.S. Government applications based on security requirements, the Risk Management Framework, and NIST SP 800-63. If the non-government service is acceptable for the mission purpose and has the same risk rating, it may be used.

Each Trust Framework is identified by the category of federation technology and the primary communities served. To apply to be a certified Trust Framework, please review the Federal Government’s requirements:

- Download the [Testing Requirements and Guidelines for Commercial PKI Bridges Cross-Certified with the FBCA](../docs/fpki-test-req-guide.pdf){:target="_blank"}(PDF, December 2017).

Then, fill out the application contained in this document:

- Download the [FPKI Bridge Application Process Overview](../docs/fpki-bridge-app-process.pdf){:target="_blank"}(PDF, May 2017).

| Trust Framework | Customer Service | Tech Support | Type | Community |
|-----------|:-----------:|:-----------:|:-----------:|:-----------:|  
| [CertiPath](https://www.certipath.com/FederatedTrust_TrustCommunity.html){:target="_blank"}{:rel="noopener noreferrer"} | Judith Spencer<br/>(301) 974-4227	| support at certipath.com<br/>(855) 758-0075	| PKI Bridge | Aerospace and Defense<br/>International |
| [SAFE-BioPharma](https://www.safe-biopharma.org/){:target="_blank"}{:rel="noopener noreferrer"}| Kyle Neuman<br/>(301) 943-7583 | support at safe-biopharma.org<br/>(703) 705-2920 |	PKI Bridge<br/>Non-PKI | Healthcare<br/>International  |
| [STRAC](https://pki.strac.org/STRACBridge.html){:target="_blank"}{:rel="noopener noreferrer"}| Eric Epley<br/>(210) 233-5850	| Ryan Ahlfors<br/>(210) 233-5850 |	PKI Bridge | State and Local |
| [TSCP, Inc.](https://www.tscp.org/){:target="_blank"}{:rel="noopener noreferrer"} | Shauna Russell<br/>(202) 769-9114 | Steve Race<br/>(703) 980-8915  | PKI Bridge | Aerospace and Defense<br/>International |
