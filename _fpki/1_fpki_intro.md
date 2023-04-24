---
layout: page
collection: fpki
title: Federal Public Key Infrastructure Guide Introduction
permalink: /fpki/
sticky_sidenav: true
sidenav: fpki

subnav:
  - text: What Is the Federal PKI?
    href: '#what-is-the-federal-pki'
  - text: What Is an Example of an Identity Certificate?
    href: '#what-is-an-example-of-an-identity-certificate'
  - text: Why Should Agencies Use Certificates from the Federal PKI?
    href: '#why-should-agencies-use-certificates-from-the-federal-pki'
  - text: Why Is the Federal PKI Important?
    href: '#why-is-the-federal-pki-important'
  - text: Where Can I Find the Policies and Standards?
    href: '#where-can-i-find-the-policies-and-standards'
---

Welcome to the **Federal Public Key Infrastructure (FPKI) Guides**! In these guides, you will find commonly used links, tools, tips, and information for the FPKI.

These guides are [open source](https://github.com/gsa/ficam-playbooks){:target="_blank"}{:rel="noopener noreferrer"} and a _work in progress_ and we [welcome contributions](https://www.idmanagement.gov/contribute/){:target="_blank"}{:rel="noopener noreferrer"} from our colleagues.  We encourage you to contribute and share information you think is helpful for the Federal PKI community.
 
## What Is the Federal PKI?

The Federal PKI is a network of certification authorities (CAs) that issue:

- PIV credentials and person identity certificates
- PIV-Interoperable credentials and person identity certificates
- Other person identity certificates
- A small number of federal enterprise device identity certificates

The participating certification authorities and the policies, processes, and auditing of all the participants are collectively referred to as the _Federal Public Key Infrastructure (FPKI_ or _Federal PKI)_.

The Federal PKI includes U.S. federal, state, local, tribal, territorial, and international governments, as well as commercial organizations, that work together to provide services for the benefit of the federal government.

Use the [FPKI Graph]({{site.baseurl}}/fpki/tools/fpkigraph/) to see the relationships between the certification authorities in the Federal PKI ecosystem. It graphically depicts how each certification authority links to another through cross-certificates, subordinate certificates, or bridge CAs.

### What Is an Example of an Identity Certificate?
A PIV certificate is a simple example.  Although there are many types of identity certificates, it's easiest to explain **PIV** certificates since you might have one:

* Identity certificates are issued and digitally signed by a _certification authority_.  
* The _certification authority_ that issued and digitally signed your PIV certificates is called an _intermediate certification authority_. The _intermediate certification authority's certificate_ was issued by another _certification authority_.  
* This process of issuing and signing continues until there is one _certification authority_ that is called the _root certification authority_.

<img src="{{site.baseurl}}/assets/fpki/pivcertificatechain_small.png" alt="An example of an identity certificate with intermediate and root." width="506" height="268">

The full process of proving identity when issuing certificates, auditing the certification authorities, and the cryptographic protections of the digital signatures establish the _basis of trust_.

For the U.S. federal government Executive Branch agencies, there is one root certification authority, called the _Federal Common Policy Certification Authority (COMMON)_, plus dozens of intermediate certification authorities and bridged certification authorities. See [a graph of the Federal PKI, including the business communities]({{site.baseurl}}/fpki/tools/fpkigraph/).

## Why Should Agencies Use Certificates from the Federal PKI?

All federal agencies should use the Federal PKI for:

* Facilities access, network authentication, and some application authentication for applications based on a risk assessment
* Document sharing and digital signatures
* Signed and encrypted email communications across federal agencies

The Federal PKI provides four core technical capabilities:

<img src="{{site.baseurl}}/assets/fpki/fpki-core.png" alt="An illustration of the four core FPKI capabilities." width="800" height="400">
<p align="center"><b>The Four Core Federal PKI Capabilities</b></p>

* Trust with federal agencies and industry
* Support for technical non-repudiation
* Authentication and encryption
* Digital signatures

These four core capabilities are made possible by leveraging digital certificates; their policies, standards, and processes; and a mission-critical trust infrastructure. 

## Why Is the Federal PKI Important?

The Federal PKI is important to federal agencies, other government entities, and businesses that need access to federal facilities or participate in delivering federal government services.    

|**Benefit**|**Description**|
|-----------|---------------|
|**Security**| Improved facilities, network, and application access through cryptography-based, federated authentication. Federal PKI credentials reduce the possibility of data breaches that can result from using weak credentials, such as username and password. Specifically, the Federal PKI closes security gaps in user identification and authentication, encryption of sensitive data, and data integrity. |
|**Compliance**| Using the Federal PKI means compliance with several Executive Orders, laws (e.g., FISMA, E-Government Act), initiatives, and standards. The Federal PKI verifies that participating certification authorities are audited and operated in a secure manner.|
|**Interoperability**| Improved interoperability with other federal agencies and non-federal organizations that trust Federal PKI certificates. The Federal PKI helps reduce the need for issuing multiple credentials to users.|
|**Return on Investment**| The Federal PKI improves business processes and efficiencies.  For example, leveraging digital signing, encryption, and non-repudiation allows federal agencies to migrate from manual processing to automated processing, especially around document processing/sharing, and enhances communications between two or more federal employees for internal efficiency and effectiveness.  

### Where Can I Find the Policies and Standards?
* [X.509 Certificate Policy for the U.S. Federal PKI Common Policy Framework](https://www.idmanagement.gov/docs/fpki-x509-cert-policy-common.pdf){:target="_blank"}{:rel="noopener noreferrer"} is the certificate policy for the U.S. Federal Root Certification Authority.
* [Common Policy X.509 Certificate and Certificate Revocation List (CRL) Profiles](https://www.idmanagement.gov/docs/fpki-x509-cert-profile-common.pdf){:target="_blank"}{:rel="noopener noreferrer"} specifies certificate and CRL extensions profiles for certificates and CRLs issued under COMMON.
* [X.509 Certificate Policy for the Federal Bridge Certification Authority (FBCA)](https://www.idmanagement.gov/docs/fpki-x509-cert-policy-fbca.pdf){:target="_blank"}{:rel="noopener noreferrer"} is the certificate policy for the FBCA.
* [X.509 Certificate and CRL Extensions Profile for the FBCA](https://www.idmanagement.gov/docs/fpki-x509-cert-profiles-fbca.pdf){:target="_blank"}{:rel="noopener noreferrer"} specifies certificate and CRL extensions profiles for Federal PKI infrastructure systems.
* [X.509 Certificate and CRL Extensions Profile for PIV-I Cards](https://www.idmanagement.gov/docs/fpki-x509-cert-profiles-pivi.pdf){:target="_blank"}{:rel="noopener noreferrer"} specifies certificate and CRL extensions profiles for use with Personal Identity Verification Interoperable (PIV-I) cards.
* [OMB Circular A-130, Managing Information as a Strategic Resource (2016)](https://obamawhitehouse.archives.gov/sites/default/files/omb/assets/OMB/circulars/a130/a130revised.pdf?msclkid=b1259175c7f211ec8144311a36ca5067){:target="_blank"}{:rel="noopener noreferrer"} establishes general policy for the planning, budgeting, governance, acquisition, and management of federal information, personnel, equipment, funds, IT resources, and supporting infrastructure and services.
