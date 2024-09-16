---
layout: page
collection: partners
title:  Federal Workforce Identity Services
permalink: /trust-services/
sidenav: partners
sticky_sidenav: true
lastupdate: 07/12/2021

subnav:
  - text: Overview
    href: '#overview'
  - text: Government Identity Services
    href: '#government-identity-services'
  - text: Business Identity Services
    href: '#business-identity-services'
  - text: Private Sector PKI Trust Framework
    href: '#private-sector-pki-trust-framework'
---

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">DigiCert PKI Shared Services Decommission and Transition</h4>
    <p class="usa-alert__text">
      DigiCert announced it is decommissioning its federal shared services platform and transitioning out of the PKI Shared Service Provider program by 2024. They will transition existing customers and not accept any new customers. For transition information, contact [fpki@gsa.gov](mailto:fpki@gsa.gov).
    </p>
  </div>
</div>

This page is for agencies to view the current service providers that have an identity federation agreement with the U.S. government.

The services provided rely upon a level of trust to be established with the U.S. government. This trust is managed through legal agreements; technology agreements; and regular auditing of the services, procedures, and practices. These agreements and audits are managed by the Federal Public Key Infrastructure (FPKI).

If you are looking for a list of all possible Certification Authorities in the FPKI, please review the [list of PIV CAs and Agencies]({{site.baseurl}}/fpki/notifications/#PivIssuer){:target="_blank"}{:rel="noopener noreferrer"} or the [FPKI Graph]({{site.baseurl}}/fpki/notifications/#fpki-graph){:target="_blank"}{:rel="noopener noreferrer"}.

## Overview

Trust Services providers offer services related to identity and credentialing of persons and operate within identity federations. These provider services specifically include:

- Issuing and managing person identity and device identity certificates using PKI.
- Issuing and managing person identity credentials for PIV and Common Access Card (CAC) hardware credentials that are tied to PKI.
- Issuing and managing person identity credentials using other identity federation technologies (for example, a person may be identity-proofed, have an account in the service, and use one-time password credentials to authenticate).

We’ve categorized the service providers given below by type of identity and credential and what population is served:

- [Government Identity Services](#government-identity-services) – FPKI Shared Service Providers (SSPs)
- [Business Identity Services](#business-identity-services) – PIV-Interoperable (PIV-I), and other PKI certificates
- [Private Sector PKI Trust Framework](#private-sector-pki-trust-framework) – Private sector PKI Bridges that are cross-certified into the FPKI

## Government Identity Services

These organizations operate as Federal PKI Shared Service Providers (SSPs) for federal agencies. A subset of Federal PKI SSPs are commercial service providers managed by GSA. These SSPs are called [GSA PKI SSPs](https://www.idmanagement.gov/gsapkissp/). A GSA PKI SSP is a commercial PKI provider who has completed Federal PKI compliance activities to receive a certification authority certificate and is listed on the [GSA Multiple Award Schedule - 541519PKI](https://www.gsaelibrary.gsa.gov/ElibMain/sinDetails.do?scheduleNumber=MAS&specialItemNumber=541519PKI&executeQuery=YES){:target="_blank"}{:rel="noopener noreferrer"}. All SSPs operate Certification Authorities, are annually 3rd party audited, and maintain a FISMA Authorization To Operate (ATO). To request a copy of a specific system’s ATO, please contact [fpki@gsa.gov](mailto:fpki@gsa.gov).

Information on publicly trusted device certificates used for TLS (HTTPS) on the internet, recommendations on government configurations, and which PKI providers/Certification Authorities to use can be found at this [HTTPS guidance website](https://https.cio.gov/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}.

| Organization | Category | Customer Service | Tech Support|  
|-----------|:-----------:|:-----------:|:-----------:|  
| [Department of the Treasury](https://pki.treasury.gov/about_ssp.htm){:target="_blank"}{:rel="noopener noreferrer"}| FPKI SSP | James Moloney (202) 622-5325 or<br/>Joe Gribble (304) 480-7608 | pki.pmo at fiscal.treasury.gov or<br/>_DL_PKIPolicy at treasury.gov |  
| Entrust Federal Shared Service Provider |	GSA SSP | Patrick Garritty<br/>(703) 901-1388 |	support at entrust.com |
| Verizon/Cybertrust Federal Shared Service Provider | GSA SSP | Russ Weiser<br/>(801) 631-1685 |	Russ Weiser<br/>(801) 631-1685 |
| WidePoint Federal Shared Service Provider	| GSA SSP | Jason Holloway, Caroline Godfrey<br/>(800) 816-5548<br/>WCSC-Info at ORC.widepoint.com	| Jim Manchester<br/>(800) 816-5548<br/>PKIPolicy at ORC.widepoint.com |

## Business Identity Services

These organizations operate services for persons who are affiliated with a business; state, local, tribal, or territorial government; or nonprofit organization. These services are often used by a businessperson to digitally sign documents with the U.S. government as a business representative or to authenticate to a small number of government applications.

For each, we identify whether the services include:

- Person identity using PKI, including PIV-I credentials
- Person identity using other PKI certificates for business-to-government digital signatures

| Organization | Customer Service | Tech Support | Type of Person Identity Credentials |
|-----------|:-----------:|:-----------:|:-----------:|  
| [Carillon Information Security](https://www.carillon.ca/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}	| Marc St-Jacques<br/>(844) 754-7484 x125	| Marc St-Jacques<br/>(844) 754-7484 x125	| PIV-I Credentials |
| [DigiCert](https://www.digicert.com/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}	| ts_managers at digicert dot com | fpki_support at digicert dot com| Other PKI Credentials |
| Entrust	| Patrick Garritty<br/>(703) 901-1388	| support at entrust.com	| PIV-I Credentials<br/>Other PKI Credentials |
| [Exostar](https://www.exostar.com/resources/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} | info at exostar.com	| (703) 793-7800<br/>[Open a case online](https://www.myexostar.com/?page_id=32){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}	| Other PKI Credentials |
| [Foundation for Trusted Identity (FTI)](https://www.foundationfortrustedidentity.org/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}	| Kenneth Boley<br/>(210) 704-1650<br/>info at fti.org	| Sam Dibrell, Jr.<br/>(210) 704-1650	| PIV-I Credentials |
| [IdenTrust](https://www.identrust.com/igc/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}	| IdenTrust Customer Support<br/>Support at IdenTrust.com<br/>(800) 748-5360	| IdenTrust Customer Support<br/>Support at IdenTrust.com<br/>(800) 748-5360	| PIV-I Credentials<br/>Other PKI Credentials
| [WidePoint](https://orc.widepoint.com/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}	| Jason Holloway, Caroline Godfrey<br/>(800) 816-5548<br/>WCSC-Info at ORC.com | Jim Manchester <br/>(800) 816-5548<br/>PKIPolicy at ORC.com | PIV-I Credentials<br/>Other PKI Credentials |

## Private Sector PKI Trust Framework

The FPKI Policy Authority reviews the PKI trust frameworks of a small number of non-government organizations to determine whether the policies, processes, legal agreements, privacy protections, security  controls, and audit requirements are comparable with the U.S. government Federal PKI requirements. If comparable, the organizations that manage their communities’ rules act as a PKI bridge.

These organizations do not manage identities or credentials for their community directly. Services that are certified and audited by these organizations provide federated PKI identity and credentials. These services are listed above the Business credentials section.

| Trust Framework | Customer Service | Tech Support | Community |
|:-----------:|:-----------:|:-----------:|:-----------:|  
| [CertiPath](https://certipath.com/services/federated-trust/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} | Judith Spencer<br/>(301) 974-4227	| support at certipath.com<br/>(855) 758-0075	| Aerospace and Defense<br/>International |
| [SAFE Identity](https://makeidentitysafe.com/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}| Kyle Neuman<br/>(301) 943-7583 | info at makeidentitysafe.com<br/>(703) 705-2920 | Healthcare<br/>International  |
| [STRAC](https://www.strac.org/pki/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}| Eric Epley<br/>(210) 233-5850	| Ryan Ahlfors<br/>(210) 233-5850 | State and Local |
| [TSCP, Inc.](https://www.tscp.org/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} | Shauna Russell<br/>(202) 769-9114 | Steve Race<br/>(703) 980-8915  | Aerospace and Defense<br/>International |
