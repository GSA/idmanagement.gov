---
layout: page
collection: fpki
title: Federal Public Key Infrastructure Guide Introduction
permalink: fpki/intro-fpki/
sidenav: fpki

subnav:
    - text: What is the Federal PKI?
      href: '#what-is-the-federal-pki'
    - text: What is an example of an identity certificate?
      href: '#what-is-an-example-of-an-identity-certificate'
    - text: Why should agencies use certificates from the Federal PKI?
      href: '#why-should-agencies-use-certificates-from-the-federal-pki'
    - text: Why is the Federal PKI important?
      href: '#why-is-the-federal-pki-important'
    - text: Where can I find the Policies and Standards?
      href: '#where-can-i-find-the-policies-and-standards'
---

Welcome to the **Federal Public Key Infrastructure (FPKI) Guides**! In these guides, you will find commonly used links, tools, tips, and information for the FPKI (_Federal PKI_).  

### What is the Federal PKI?
![Image of the Federal PKI Certification Authorities](../../assets/fpki/intro_Intro-image3.png){:style="width:40%;float:right;"}
*High-level Illustration of the Federal PKI Certification Authorities*{:style="float:right;clear:both;font-size:14px;text-align:center;margin:20px 0 0 0;width:40%;"}

The Federal PKI is a network of Certification Authorities (CAs) that issue:

- PIV credentials and person identity certificates
- PIV-Interoperable credentials and person identity certificates
- Other person identity certificates
- A small number of federal enterprise device identity certificates

The participating Certification Authorities and the policies, processes, and auditing of all the participants are collectively referred to as the _Federal Public Key Infrastructure (FPKI_ or _Federal PKI)_.

The Federal PKI includes U.S. Federal, State, Local, Tribal, Territorial, and International Governments, as well as commercial organizations, that work together to provide services for the benefit of the Federal Government.


### What is an example of an identity certificate?
A PIV certificate is a simple example.  Although there are many types of identity certificates, it's easiest to explain **PIV** certificates since you might have one:

* Identity certificates are issued and digitally signed by a _Certification Authority_.  
* The _Certification Authority_ that issued and digitally signed your PIV certificates is called an _Intermediate Certification Authority_. The _Intermediate Certification Authority's certificate_ was issued by another _Certification Authority_.  
* This process of issuing and signing continues until there is one _Certification Authority_ that is called the _Root Certification Authority_.

![Example of an identity certificate with intermediate and root](../../assets/fpki/intro_pivcertificatechain_small.png){:style="float:center"}

The full process of proving identity when issuing certificates, auditing the Certification Authorities, and the cryptographic protections of the digital signatures establish the _basis of Trust_.

For the U.S. Federal Government Executive Branch agencies, there is one Root Certification Authority, called the _Federal Common Policy Certification Authority (COMMON)_, plus dozens of Intermediate Certification Authorities and Bridged Certification Authorities.  

*  [A graph of the Federal PKI, including the business communities](../../fpki/tools/graph/){:target="_blank"}


### Why should agencies use certificates from the Federal PKI?

All federal agencies should use the Federal PKI for:

* Facilities access, network authentication, and some application authentication for applications based on a risk assessment
* Document sharing and digital signatures
* Signed and encrypted email communications across federal agencies

The Federal PKI provides four core technical capabilities:
![Illustration of the four core FPKI capabilities](../../assets/fpki/intro_fpki-core.png){:style="width:40%;float:right;"}
*The Four Core Federal PKI Capabilities*{:style="float:right;clear:both;font-size:14px;text-align:center;margin:20px 0 0 0;width:40%;"}

* Trust with federal agencies and industry
* Support for technical non-repudiation
* Authentication and encryption
* Digital signatures

These four core capabilities are made possible by leveraging digital certificates; their policies, standards, and processes; and a mission-critical trust infrastructure. 


### Why is the Federal PKI important?

The Federal PKI is important to federal agencies, other government entities, and businesses that need access to federal facilities or participate in delivering Federal Government services.    

|**Benefit**|**Description**|
|-----------|---------------|
|**Security**| Improved facilities, network, and application access through cryptography-based, federated authentication. Federal PKI credentials reduce the possibility of data breaches that can result from using weak credentials, such as username and password. Specifically, the Federal PKI closes security gaps in user identification and authentication, encryption of sensitive data, and data integrity. |
|**Compliance**| Using the Federal PKI means compliance with several Executive Orders, laws (e.g., FISMA, E-Government Act), initiatives, and standards. The Federal PKI verifies that participating Certification Authorities are audited and operated in a secure manner.|
|**Interoperability**| Improved interoperability with other federal agencies and non-federal organizations that trust Federal PKI certificates. The Federal PKI helps reduce the need for issuing multiple credentials to users.|
|**Return on Investment**| The Federal PKI improves business processes and efficiencies.  For example, leveraging digital signing, encryption, and non-repudiation allows federal agencies to migrate from manual processing to automated processing, especially around document processing/sharing, and communications between two or more federal employees for internal efficiency and effectiveness.  


### Where can I find the Policies and Standards?

* [X.509 Certificate Policy for the U.S. Federal PKI Common Policy Framework](https://www.idmanagement.gov/wp-content/uploads/sites/1171/uploads/fpki-x509-cert-policy-common.pdf){:target="_blank"}{:rel="noopener noreferrer"} is the certificate policy for the U.S. Federal Root Certification Authority.
* [X.509 Certificate Policy for the Federal Bridge Certification Authority (FBCA)](https://www.idmanagement.gov/wp-content/uploads/sites/1171/uploads/fpki-x509-cert-policy-fbca.pdf){:target="_blank"}{:rel="noopener noreferrer"} is the certificate policy for the FBCA.
* [X.509 Certificate and Certificate Revocation List (CRL) Extensions Profile for the Shared Service Provider (SSP) Program](http://www.idmanagement.gov/wp-content/uploads/sites/1171/uploads/fpki-x509-cert-profile-ssp.pdf){:target="_blank"}{:rel="noopener noreferrer"} specifies certificate and CRL extensions profiles for certificates and CRLs issued under COMMON.
* [X.509 Certificate and CRL Extensions Profile](http://www.idmanagement.gov/wp-content/uploads/sites/1171/uploads/fpki-x509-cert-profiles-fbca.pdf){:target="_blank"}{:rel="noopener noreferrer"} specifies certificate and CRL extensions profiles for Federal PKI infrastructure systems.
* [X.509 Certificate and CRL Extensions Profile for PIV-I Cards](http://www.idmanagement.gov/wp-content/uploads/sites/1171/uploads/fpki-x509-cert-profiles-pivi.pdf){:target="_blank"}{:rel="noopener noreferrer"} specifies certificate and CRL extensions profiles for use with Personal Identity Verification Interoperable (PIV-I) cards.
* [OMB Circular A-130, Managing Federal Information as a Strategic Resource (2016)](https://www.whitehouse.gov/sites/whitehouse.gov/files/omb/circulars/A130/a130revised.pdf){:target="_blank"}{:rel="noopener noreferrer"} establishes general policy for the planning, budgeting, governance, acquisition, and management of federal information, personnel, equipment, funds, IT resources, and supporting infrastructure and services.
