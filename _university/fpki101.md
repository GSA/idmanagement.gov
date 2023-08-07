---
layout: page
collection: university
title:  Federal Public Key Infrastructure 101
permalink: /university/fpki/
sidenav: university
sticky_sidenav: true

subnav: 
  - text: Introduction
    href: '#introduction'
  - text: Certification Authorities
    href: '#certification-authorities'
  - text: FPKI Third Party Trust
    href: '#fpki-third-party-trust'

---

# Introduction

Welcome to the **Federal Public Key Infrastructure (FPKI) Guides**! In these guides, you will find commonly used links, tools, tips, and information for the FPKI.

## What Is the Federal PKI?

The Federal PKI is a network of certification authorities (CAs) that issue:

- PIV credentials and person identity certificates
- PIV-Interoperable credentials and person identity certificates
- Other person certificates
- A small number of federal enterprise device identity certificates

The participating certification authorities and the policies, processes, and auditing of all the participants are collectively referred to as the _Federal Public Key Infrastructure (FPKI_ or _Federal PKI)_.

The Federal PKI includes U.S. federal, state, local, tribal, territorial, and international governments, as well as commercial organizations, that work together to provide services for the benefit of the federal government.

Use the [FPKI Graph]({{site.baseurl}}/fpki/notifications/#fpki-graph) to see the relationships between the certification authorities in the Federal PKI ecosystem. It graphically depicts how each certification authority links to another through cross-certificates, subordinate certificates, or bridge CAs.

### What Is an Example of an Identity Certificate?
A PIV certificate is a simple example.  Although there are many types of identity certificates, it's easiest to explain **PIV** certificates since you might have one:

* Identity certificates are issued and digitally signed by a _certification authority_.  
* The _certification authority_ that issued and digitally signed your PIV certificates is called an _intermediate certification authority_. The _intermediate certification authority's certificate_ was issued by another _certification authority_.  
* This process of issuing and signing continues until there is one _certification authority_ that is called the _root certification authority_.

<img src="{{site.baseurl}}/assets/fpki/pivcertificatechain_small.png" alt="An example of an identity certificate with intermediate and root." width="506" height="268">

The full process of proving identity when issuing certificates, auditing the certification authorities, and the cryptographic protections of the digital signatures establish the _basis of trust_.

For the U.S. federal government Executive Branch agencies, there is one root certification authority, called the _Federal Common Policy Certification Authority (COMMON)_, plus dozens of intermediate certification authorities and bridged certification authorities. See [a graph of the Federal PKI, including the business communities]({{site.baseurl}}/fpki/notifications/#fpki-graph).

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
* [X.509 Certificate Policy for the U.S. Federal PKI Common Policy Framework]({{site.baseurl}}/docs/fpki-x509-cert-policy-common.pdf){:target="_blank"}{:rel="noopener noreferrer"} is the certificate policy for the U.S. Federal Root Certification Authority.
* [Common Policy X.509 Certificate and Certificate Revocation List (CRL) Profiles]({{site.baseurl}}/docs/fpki-x509-cert-profile-common.pdf){:target="_blank"}{:rel="noopener noreferrer"} specifies certificate and CRL extensions profiles for certificates and CRLs issued under COMMON.
* [X.509 Certificate Policy for the Federal Bridge Certification Authority (FBCA)]({{site.baseurl}}/docs/fpki-x509-cert-policy-fbca.pdf){:target="_blank"}{:rel="noopener noreferrer"} is the certificate policy for the FBCA.
* [X.509 Certificate and CRL Extensions Profile for the FBCA]({{site.baseurl}}/docs/fpki-x509-cert-profiles-fbca.pdf){:target="_blank"}{:rel="noopener noreferrer"} specifies certificate and CRL extensions profiles for Federal PKI infrastructure systems.
* [X.509 Certificate and CRL Extensions Profile for PIV-I Cards]({{site.baseurl}}/docs/fpki-x509-cert-profiles-pivi.pdf){:target="_blank"}{:rel="noopener noreferrer"} specifies certificate and CRL extensions profiles for use with Personal Identity Verification Interoperable (PIV-I) cards.
* [OMB Circular A-130, Managing Information as a Strategic Resource (2016)](https://obamawhitehouse.archives.gov/sites/default/files/omb/assets/OMB/circulars/a130/a130revised.pdf?msclkid=b1259175c7f211ec8144311a36ca5067){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} establishes general policy for the planning, budgeting, governance, acquisition, and management of federal information, personnel, equipment, funds, IT resources, and supporting infrastructure and services.

# Certification Authorities

A **_certification authority_** is a system that issues digital certificates. These digital certificates are based on _cryptography_ and follow the X.509 standards defined for information security.

The Federal PKI (FPKI) is a network of certification authorities (CAs) that are either _root_, _intermediate_, or _issuing_ CAs.

Any CA in the FPKI may be referred to as a _Federal PKI CA_. The two highest level CAs in the FPKI hierarchy are the **_FPKI Trust Infrastructure CAs_**, which are operated and managed by the [Federal PKI Management Authority (FPKIMA)](https://www.idmanagement.gov/governance/ficam/#federal-public-key-infrastructure-management-authority){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} Program Office:

- [Federal Common Policy Certification Authority](#federal-common-policy-certification-authority)
- [Federal Bridge Certification Authority](#federal-bridge-certification-authority)
- [All Federal PKI Certification Authorities](#all-federal-pki-certification-authorities)

COMMON serves as the _root_ and _trust anchor_ for the _intermediate_ and _issuing_ CAs operated by federal government Executive Branch agencies.

{% include alert-info.html content="<strong>Public trust for websites</strong><br>A new effort is in the planning stages to establish another federal government root and issuing CAs dedicated to Public Trust Transport Layer Security (TLS) device certificates. Follow or contribute to the development of the federal government's new certificate policy for this public trust effort at https://github.com/uspki/policies." %}

## Federal Common Policy Certification Authority

The _Federal Common Policy CA_ may be referred to as the _FCPCAG2_, or as _COMMON_ in documents. As the FPKI root and trust anchor for the federal government, the FCPCAG2 supports government person trust and a small number of agency intranet enterprise devices, to include [Personal Identity Verification (PIV) credentials]({{site.baseurl}}/university/piv/). The FCPCA's design enables any certificate issued by any FPKI CA to validate its certificate path to a single root CA.

At least one commercial vendors includes the FCPCAG2 root certificate in their commercial-off-the-shelf (COTS) products' [trust stores]0(#fpki-third-party-trust). This enables federal government systems to trust person and enterprise device certificates issued by FPKI CAs. It is possible to add the FCPCAG2 root certificate to trust stores for _government-managed_ devices and servers, if it's not available by default.

{% include alert-warning.html content="The FCPCAG2 root certificate is included in the trust stores for some platforms such as Adobe. Hoever, for other platforms, such as Microsoft, Mozilla, and Apple, which do not include the FCPCA by default, the FCPCAG2 will need to be added. " %}

## Federal Bridge Certification Authority

<img src="{{site.baseurl}}/assets/fpki/intro_fbca-logo.png" width="180" align="left" alt="FPKI Federal Bridge Logo">

The current Federal Bridge Certification Authority (FBCA) is the _**Federal Bridge CA G4**_.

The FBCA is a PKI bridge or link between the FCPCA and other CAs that comprise the FPKI network and that may operate under comparable but _different_ certificate policies. The FBCA provides a means to map these certificate policies and CAs and allow certificates to validate to the FCPCA root certificate.
  
The CAs with certificates signed by the Federal Bridge CA G4 are _cross-certified_. These CAs have established a trust relationship with the FPKI and are audited annually for conformance to the certificate policies. This cross-certification process has extended the reach of the FPKI well beyond the boundaries of the federal government.

## All Federal PKI Certification Authorities

A CA that is part of the FPKI is called a _participating certification authority_. 

For historical records, we might _label_ or identify CA systems using a category that shows _when_ the system was established and for what types of _communities_ it is or was used. 

We realize all the acronyms and labels may be confusing and welcome your input to help us improve, add information over time, and simplify where needed. 


|**Certification Authority Category**|**Description**|
|-----------|---------------|
| PKI Shared Service Provider (SSP) Certification Authorities | An SSP CA operates under the Federal Common Certificate Policy and offer [federal workforce credentialing services]({{site.baseurl}}/trust-services/#government-identity-services){:target="_blank"}{:rel="noopener noreferrer"}.  Any certificate that an SSP CA creates, signs, and issues to people or devices is in the FCPCA _trust chain_. An SSP must adhere to strict federal IT security standards and requirements.  The SSPs are granted a FISMA Authority to Operate (ATO) by GSA, undergo continuous monitoring, and are contracted by the federal government to issue certificates to federal employees and contractors as well as devices that are deployed in federal agency networks. The primary certificate type issued by a PKI SSP are the certificates on a PIV card. There are some PKI SSPs authorized to issue other certificate types such as Common PIV-I. |
| Non-Federal Issuer (NFI) Certification Authorities | A Non-Federal Issuer or NFI is a private sector CA that is cross-certified with the Federal Bridge CA. These organizations provide [business identity services]({{site.baseurl}}/partners/trust-services/#business-identity-services){:target="_blank"}{:rel="noopener noreferrer"} for persons who do business with the federal government, but are not part of the federal workforce. Federal agencies may refer business partners to an NFI provider if the agency requires digital signatures and in some limited circumstances PKI authenticators. PIV-I along with other PKI credentials are issued by NFI providers. For more information on NFI PIV-I, see the [PIV-I Playbook]({{site.baseurl}}/playbooks/pivi/). An NFI must adhere and receive 3rd party independent audits to validate equivalent operations and practices to the Federal Bridge Certificate Policy. A federal agency may need to configure their systems to validate NFI certificates by installing the intermediate CA certificates within the Federal Bridge _trust chain_. |
| Bridge Certification Authorities | Bridge CAs connect member PKIs and are designed to enable interoperability between different PKIs operating under their own certificate policies. A bridge CA is not a _root_ and are part of a [non-government PKI trust framework]({{site.baseurl}}/partners/trust-services/#non-government-pki-trust-framework){:target="_blank"}{:rel="noopener noreferrer"} provided through the Federal Bridge. A PKI Bridge must adhere and receive 3rd party independent audits to validate equivalent operations and practices to the Federal Bridge Certificate Policy. A federal agency may configure their systems to validate PKI Bridge certificates by installing intermediate CA certificates within the Federal Bridge _trust chain_. |
| Federal Agency Certification Authorities | A very small amount of government agencies self-operate CAs connected to the Federal PKI Trust Framework. These agencies include the Department of Defense, Department of State, Department of the Treasury, the Government Printing Office, and the U.S. Patent and Trademark Office. These agency PKIs operate under their own certificate policy which has been mapped to the FBCA CP for comparability.| 

## Certificate Types within the Federal PKI

The overarching policies of the Federal PKI are the Federal Common Policy Framework and the Federal Bridge Certificate Policy. For federal agencies that utilize a PKI Shared Service Provider, this is a list of common certificate types available from all PKI Shared Service Provider. Please check with your individual provider if they support your specific need.

| Certificate Type | General Purpose | Authenticator Format | 
| ----- | ------ | ----- |
| PIV Certificates | The PIV Card contains up to five certificates with four available to a PIV card holder. See [PIV Certificates]({{site.baseurl}}/arch/pivdetails/) to understand more about PIV certificates on a PIV Card. | FIPS 201 Approved Smart Card (AAL3) |
| Common PIV-I Certificates | The Common PIV-I card contains up to five certificates with four available to the Common PIV-I card holder. See the [PIV-I Playbook]({{site.baseurl}}/playbooks/pivi/) for more information on a Common PIV-I card. | FIPS 201 Approved Smart Card (AAL3) |
| Digital Signature | Sign documents such as a PDF or word document. | Software (AAL2) or Hardware (AAL3) |
| Encryption (Key Management) | Encrypt files or emails. | Software (AAL2) or Hardware (AAL3) |
| Derived PIV Authentication | Person authentication for managed devices based on proof of possession and control of a PIV Card. Derived PIV credentials are typically used in situations that do not easily accommodate a PIV Card, such as in conjunction with mobile devices. | Software (AAL2) or Hardware (AAL3) |
| Device | Issued to any type of device to facilitate authentication and/or encryption use cases | Software (AAL2) or Hardware (AAL3) |

**Code signing certificates are not allowed under the Federal Common Certificate Policy.**

# FPKI Third Party Trust

The Federal Common Policy leverages third party trust stores or public trust store to ensure interoperability of federally-issued digital certificates.

### What Is a Trust Store?

Millions of public key certificates are issued to people and devices around the world. Certificates constantly change as some are revoked and others are issued&mdash;far too many for you to maintain an up-to-date list.  

Every software program that interacts with a certificate either has a native trust store or uses the trust store of the operating system. A trust store is a list of **root, intermediate, and sometimes user certificates** that are trusted by the operating system or application to process transactions. When you are presented with a person or device certificate from a PIV credential, website, email, or some other digital item, your application will automatically check whether the certificate has a valid path to one of the certificates in its trust store. This type of trust store is sometimes called a private trust store. An application that uses PKI certificates will say in its documentation which trust store is used and how to configure it with either public or private certificates. 

### What Is a Public Trust Store?

A vendor may also have a public trust program that allows PKI operators to submit their roots for distribution within the vendor’s trust store. Certificates distributed by an application may be called “public certificates” while certificates distributed by your agency or a partner may be called “private certificates.” 

A public trust store program refers to the collection of root certification authority (CA) certificates that are included and distributed by default in many operating systems, browsers, or applications (referred to as application trust store for simplicity). The public root CAs contained in these trust stores must comply with the root stores requirements, including any specific compliance requirements such as a third party audit or specific operational requirements. For more information on public certificates, see the [CIO Council policy on HTTPS](https://https.cio.gov/certificates/){:target="_blank"}{:rel="noopener noreferrer"}.

### What Are the Most Common Public Trust Stores?

Operating systems, browsers, and some commercial software operate public trust stores. 

The table below lists some common public trust stores. All applications that use PKI use a trust store, but not all applications’ trust stores are managed by a formal program. The applications in this table manage a formal program. If the Federal Common Policy CA G2 (FCPCAG2) (i.e., COMMON) root certificate is included in a trust store and distributed by _default_, the _Includes FCPCAG2 (COMMON)?_ column below will say _Yes_.  

Application|Includes FCPCAG2 (COMMON)?|Trust Store Manager|Platforms Serviced|Program Information Location
---|---|---|---|---|---
Microsoft Trusted Root Certificate Program| No |Microsoft Management Console|Windows OS, Internet Explorer Browser, Outlook|[Microsoft Trusted Root Program](http://aka.ms/RootCert){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} 
Apple Root Certificate Program|No|Keychain Access Utility|macOS, iOS, tvOS, WatchOS, Safari Browser|[Apple Root Certificate Program](https://www.apple.com/certificateauthority/ca_program.html){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} 
Mozilla Network Security Services (NSS)|No|Browser trust store|Firefox, Thunderbird, Linux Operating Systems|[Mozilla Root Store Policy](https://www.mozilla.org/en-US/about/governance/policies/security-group/certs/policy/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} 
Adobe Approved Trust List|Yes|Application trust store|Adobe Acrobat|[Adobe Approved Trust List](https://helpx.adobe.com/acrobat/kb/approved-trust-list2.html){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} 
Java Root Certificate Program|No|Java Applet|Java Distributions|[Including Certificate Authority Root Certificates in Java](http://www.oracle.com/technetwork/java/javase/javasecarootcertsprogram-1876540.html){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} 
Google|No|Google Admin Console|Android OS, Chromium OS|[Chrome Root Program](https://www.chromium.org/Home/chromium-security/root-ca-policy){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} 
Opera|No|Mozilla NSS|Opera Browser|See Mozilla NSS Information Above

{% include alert-info.html content="Google Chrome currently uses the trust store of the operating system on Microsoft, Apple, and Android systems. Linux-based systems distribute the Mozilla NSS Library, which may be modified by each version of Linux." %}

### What Federal PKI Certificate Policies Are Trusted by Adobe and How Do I View Them?

A common question is *which certificate policy object identifiers (OIDs) are trusted?* The Federal PKI certificate policy OIDs trusted by Adobe are:

| Certificate Policies | OIDs | Certificate Use |
|:---------------------|:-----|:----------------|
| Common Hardware                               | 2.16.840.1.101.3.2.1.3.7  | PIV and Federal Bridge Medium Hardware Token                                      |
| Federal Bridge Medium Hardware Commercial Best Practice | 2.16.840.1.101.3.2.1.3.15 | Federal Bridge Medium Hardware Token (PKI Trusted Roles may not be U.S. citizens) |
| Common High                                   | 2.16.840.1.101.3.2.1.3.16 | High Assurance Policy                                                             |
| PIV-I Hardware                                | 2.16.840.1.101.3.2.1.3.18 | PIV-Interoperable                                                                 |

Federal PKI certificates may be used for digitally signing documents between federal agencies and with business partners. Adobe is just one option used for digital signatures.

Do the following to view and verify which Federal PKI certificate policy OIDs are trusted by Adobe Acrobat:

  1. Open Adobe Acrobat.  
  1. Select _Edit_ > _Preferences_ > _Signatures_ > _Identities & Trusted Certificates_ > _More_.
  2. Choose _Trusted Certificates_ from the left-hand sidebar.  
  3. Choose _Federal Common Policy CA_ and then the _Certificate Details_ tab.
  3. Choose the _Certificate Viewer_ window, and click the _Policies_ tab to see _Policy Restrictions_. 
  4. In _Certificate Policies_, you will see a comma-separated list of policy OIDs.
