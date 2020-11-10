---
layout: page
collection: buy
title:  Trust Services
permalink: buy/trust-services/
sidenav: buy

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

If you are looking for a list of all possible Certification Authorities in the FPKI, please review the [FPKI Graph]({{ site.baseurl }}/fpki/tools/fpkigraph)

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

Information on publicly trusted device certificates used for TLS (HTTPS) on the internet, recommendations on government configurations, and which PKI providers/Certification Authorities to use can be found at this [HTTPS guidance website](https://https.cio.gov/).

| Organization | Customer Service | Tech Support|  
|-----------|:-----------:|:-----------:|  
| Department of the Treasury| Daniel Wood<br/>(202) 622-5144 | Joe Gribble<br/>(304) 480-7608 |  
| DigiCert Federal Shared Service Provider (formerly Symantec)| Carly Backlund<br/>(801) 770-1773<br/>carly.backlund@digicert.com | Tammy Green<br/>(801) 441-7104<br>tammy.green@digicert.com| 
| Entrust Federal Shared Service Provider |	Patrick Garritty<br/>(703) 901-1388 |	support@entrustdatacard.com |
| Verizon/Cybertrust Federal Shared Service Provider | Russ Weiser<br/>(801) 631-1685 |	Russ Weiser<br/>(801) 631-1685 |
| WidePoint Federal Shared Service Provider	| Jason Holloway, Caroline Godfrey<br/>(800) 816-5548<br/>WCSC-Info@ORC.com	| Jim Manchester<br/>(800) 816-5548<br/>PKIPolicy@ORC.com |

## Business Identity and Credentials
These organizations operate services for persons who are affiliated with a business, State, Local, Tribal, Territorial, or non-profit. For the PKI credentials, these are often used by a business person to digitally sign documents with the U.S. Government as a business representative or to authenticate to a small number of government applications.

For each, we identify whether the services include:

- Person identity using PKI, including PIV-I credentials
- Person identity using PKI for business-to-government digital signatures
- Person identity using non-PKI federation technologies

Information on publicly trusted device certificates used for TLS (HTTPS) on the internet, recommendations on government configurations, and which PKI providers/Certification Authorities to use can be found at this HTTPS guidance website.

| Organization | Customer Service | Tech Support | Type of Person Identity Credentials |
|-----------|:-----------:|:-----------:|:-----------:|  
| Carillon Information Security	| Marc St-Jacques>br/>(844) 754-7484 x125	| Marc St-Jacques<br/>(844) 754-7484 x125	| PIV-I Credentials |
| DigiCert	| Carly Backlund<br/>(801) 770-1773<br/>carly.backlund@digicert.com | Tammy Green<br/>(801) 441-7104<br>tammy.green@digicert.com| Other PKI Credentials |
| Entrust	| Patrick Garritty<br/>(703) 901-1388	| support@entrustdatacard.com	| PIV-I Credentials<br/>Other PKI Credentials |
| Exostar | info@exostar.com	| (703) 793-7800<br/>[Open a case online](http://www.myexostar.com/Online-Support/)	| Other PKI Credentials |
| Foundation for Trusted Identity (FTI)	| Kenneth Boley<br/>(210) 704-1650	| Sam Dibrell, Jr.<br/>(210) 704-1650	| PIV-I Credentials |
| IdenTrust	| IdenTrust Customer Support<br/>Support@IdenTrust.com<br/>(800) 748-5360	| IdenTrust Customer Support<br/>Support@IdenTrust.com<br/>(800) 748-5360	| PIV-I Credentials<br/>Other PKI Credentials
| InCommon-Affiliated Universities (hundreds of organizations)	| admin@incommon.org	| admin@incommon.org | Non-PKI<br/>InCommon Bronze and Silver |
| NextgenID	| Dario Berini<br/>(703) 929-5543	| Keith Sheridan<br/>(703) 615-1697	| PIV-I Credentials<br/>Other PKI Credentials |
| Fortior Solutions	| Tony Schroeder<br/>(503) 924-5338	| David Byrum<br/>(503) 924-5236 | PIV-I Credentials |
| WidePoint	| Jason Holloway, Caroline Godfrey<br/>(800) 816-5548<br/>WCSC-Info@ORC.com | Jim Manchester <br/>(800) 816-5548<br/>PKIPolicy@ORC.com | PIV-I Credentials<br/>Other PKI Credentials |

## Consumer Identity and Credentials

These organizations operate services for consumers—persons acting on their own behalf and not affiliated with a business, the U.S. Government, or an organization. You use these services by integrating and using a federation protocol. The U.S. Government allows three protocols to be used:  PKI, Security Assertion Markup Language (SAML), and OpenID Connect.

Each service is identified by the protocol that it supports and the NIST Special Publication (SP) 800-63 Level of Assurance.

| Organization | Customer Service | Tech Support | Federation Technology and Level of Assurance |
|-----------|:-----------:|:-----------:|:-----------:|  
| Google  |  |  | SAML<br/>Level of Assurance 1 |
| ID.me	| Blake Hall<br/>(703) 992-8380	| Blake Hall<br/>(703) 992-8380	| SAML<br/> Level of Assurance 1<br/>Level of Assurance 2<br/>Level of Assurance 3 |
| United States Postal Service | Jane.E.Quenk<br/>(202) 268-7098 | Jane.E.Quenk<br/>(202) 268-7098 | SAML<br/> Level of Assurance 1<br/>Level of Assurance 2 |
| Zentry, A Synchronoss Venture	| Jose Lopez<br/>(790) 191-5581	| Jose Lopez<br/>(790) 191-5581	| SAML<br/> Level of Assurance 1<br/>Level of Assurance 2<br/>Level of Assurance 3 |

## Trust and Auditing of Services

The FPKI and Trust Framework Solutions (TFS) program reviews the trust frameworks of commercial and non-profit organizations to determine whether the policies, processes, legal agreements, privacy protections, security controls, and audit requirements are comparable with the U.S. Government requirements. If comparable, the commercial and non-profit organizations that manage their communities’ trust frameworks become adopted Trust Framework Providers.

The Trust Frameworks do not manage identities or credentials for their community of interest directly. Services that are certified and audited by the Trust Frameworks provide the federated identity and credentials. These services are listed above in different categories.

Services operating within these Trust Frameworks may be used by U.S. Government applications if the service and the demographics are appropriate for the mission. Risk assessments have been performed for the U.S. Government applications based on security requirements, the Risk Management Framework, and NIST SP 800-63. If the non-government service is acceptable for the mission purpose and has the same risk rating, it may be used.

Each Trust Framework is identified by the category of federation technology and the primary communities served. To apply to be a certified Trust Framework, please review the Federal Government’s requirements:

- Testing Requirements and Guidelines for Commercial PKI Bridges Cross-Certified with the FBCA (PDF, December 2017)

Then, fill out the application contained in this document:

- FPKI Bridge Application Process Overview (PDF, May 2017)

| Trust Framework | Customer Service | Tech Support | Type | Community |
|-----------|:-----------:|:-----------:|:-----------:|:-----------:|  
| CertiPath | Judith Spencer<br/>(301) 974-4227	| support@certipath.com<br/>(855) 758-0075	| PKI Bridge | Aerospace and Defense<br/>International |
| InCommon | admin@incommon.org	| admin@incommon.org | Non-PKI | Higher Education |
| Kantara |	Ruth Puente<br/>ruth@kantarainitiative.org	| Ruth Puente<br/>ruth@kantarainitiative.org | Non-PKI | General |
| National Identity Exchange Foundation (NIEF) | John Wandelt<br/>john.wandelt@gtri.gatech.edu	| John Wandelt<br/>john.wandelt@gtri.gatech.edu	| Non-PKI | Law Enforcement |
| SAFE-BioPharma | Kyle Neuman<br/>(301) 943-7583 | support@safe-biopharma.org<br/>(703) 705-2920 |	PKI Bridge<br/>Non-PKI | Healthcare<br/>International  |
| STRAC | Eric Epley<br/>(210) 233-5850	| Ryan Ahlfors<br/>(210) 233-5850 |	PKI Bridge | State and Local |
| TSCP, Inc. | Shauna Russell<br/>(202) 769-9114 | Steve Race<br/>(703) 980-8915  | PKI Bridge | Aerospace and Defense<br/>International |
