---
layout: page
collection: fpki
title: Trust Stores
permalink: /fpki/trust-stores/
sidenav: fpki
sticky_sidenav: true

subnav:
  - text: What Is a Trust Store?
    href: '#what-is-a-trust-store'
  - text: What Is a Public Trust Store?
    href: '#what-is-a-public-trust-store'
  - text: Commonly Used Trust Stores
    href: '#what-are-the-most-common-public-trust-stores'
  - text: Adobe Trust Store
    href: '#what-federal-pki-certificate-policies-are-trusted-by-adobe-and-how-do-i-view-them'
---

This page provides a high-level overview of PKI trust stores (also called *certificate stores* or *key stores*). It also has a list of public trust stores and settings. 

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
Microsoft Trusted Root Certificate Program| No |Microsoft Management Console|Windows OS, Internet Explorer Browser, Outlook|[Microsoft Trusted Root Program](http://aka.ms/RootCert){:target="_blank"}{:rel="noopener noreferrer"} 
Apple Root Certificate Program|No|Keychain Access Utility|macOS, iOS, tvOS, WatchOS, Safari Browser|[Apple Root Certificate Program](https://www.apple.com/certificateauthority/ca_program.html){:target="_blank"}{:rel="noopener noreferrer"} 
Mozilla Network Security Services (NSS)|No|Browser trust store|Firefox, Thunderbird, Linux Operating Systems|[Mozilla Root Store Policy](https://www.mozilla.org/en-US/about/governance/policies/security-group/certs/policy/){:target="_blank"}{:rel="noopener noreferrer"} 
Adobe Approved Trust List|Yes|Application trust store|Adobe Acrobat|[Adobe Approved Trust List](https://helpx.adobe.com/acrobat/kb/approved-trust-list2.html){:target="_blank"}{:rel="noopener noreferrer"} 
Java Root Certificate Program|No|Java Applet|Java Distributions|[Including Certificate Authority Root Certificates in Java](http://www.oracle.com/technetwork/java/javase/javasecarootcertsprogram-1876540.html){:target="_blank"}{:rel="noopener noreferrer"} 
Google|No|Google Admin Console|Android OS, Chromium OS|[Chrome Root Program](https://www.chromium.org/Home/chromium-security/root-ca-policy){:target="_blank"}{:rel="noopener noreferrer"} 
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
