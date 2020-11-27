---
layout: page
collection: fpki
title: Certificate Policies
permalink: fpki/policyobjects/
sidenav: fpki

subnav:
    - text: Certificate Policy?
      href: '#what-is-a-certificate-policy'
    - text: Why Use A Certificate Policies
      href: '#why-do-we-use-certificate-policies'
    - text: Certificate Policy Object Identifier?
      href: '#what-is-a-certificate-policy-object-identifier'
    - text: Certificate Policies Object Identifiers in use
      href: '#what-are-the-certificate-policy-object-identifiers'
    - text: View the Certificate Policy Object Identifier
      href: '#how-do-i-view-the-certificate-policy-object-identifier'
    - text: Use the Certificate Policy Object Identifier
      href: '#how-do-i-use-the-certificate-policy-object-identifier'
---

### What is a Certificate Policy?

The certificate policy specifies the the security requirement, issuance procedure and protection of the private key associated with a certificate.  Certificate policies are identified in a certificate by including one or more Object Identifiers (OIDs).  

>A Certificate Policy (CP) is defined in the Internet X.509 Public Key Infrastructure Certificate Policy and Certification Practices Framework as "a named set of rules that indicates the applicability of a certificate to a particular community and/or class of application with common security requirements".

When a Certification Authority (CA) issues a certificate, it is providing a statement to a certificate user that a public key is bound to an _entity_.

> _Entity_ can be a person, device, website, or organization

The Certificate Policy provides the information that can be used by a certificate user to decide whether or not to trust a certificate.

### Why do we use Certificate Policies?
Certificate policies are used to establish trust relationships between Certification Authorities.  This is called _cross-certification_. When CAs issue cross certificates, one CA assesses and recognizes one or more certificate polices of the other CA.



### What is a Certificate Policy Object Identifier?




### What are the Certificate Policy Object Identifiers?
The Federal PKI has twenty-five (25) certificate policies for people and non-person entity (NPE) certificates.   

* Twelve (12) of the certificate policies are used only within the Federal Bridge Certification Authority to map organizational policies across the issuing CAs and Bridges.
* Thirteen (13) certificate policies are used for the final end entity certificates.

All certificate policies denote a US Government issued and authorized certificate.  
The Commercial Best Practices (CBP) identifier on certificate policies indicate the trusted roles or individuals assigned a role in certificate issuance do not have to be U.S. citizens.  
A hardware (HW) identifier indicate the private key is generated and protected on a hardware based token.  
The risk level referenced refers to the level of risk associated with transactions accepting certificates
issued under the specified certificate policy.


| Certificate Policy | Policy Object Identifier (OID) | Risk |
|--------------------|--------------------------------| -----|
|common-policy|2.16.840.1.101.3.2.1.3.6|Medium risk – authentication, signature or encryption of USG individual person, group, device, or role.|
|common-HW|2.16.840.1.101.3.2.1.3.7|High risk – authentication, signature or encryption of USG individual person, group, role, or device where private key is protected on hardware token.|
|common-devices|2.16.840.1.101.3.2.1.3.8|Medium risk – USG authentication or encryption of device.|
|common-devicesHW|2.16.840.1.101.3.2.1.3.36|Medium risk - authentication or encryption of USG device where private key protected on hardware token.|
|common-auth|2.16.840.1.101.3.2.1.3.13|High risk - Shows possession of PIV card with PIN use|
|common-high|2.16.840.1.101.3.2.1.3.16|High risk – authentication, signature or encryption of USG individual person, group, role, or device where private key is protected on hardware token.|
|common-cardAuth|2.16.840.1.101.3.2.1.3.17|Shows possession of PIV card w/o PIN use.|
|common-piv-contentSigning|2. 16.840.1.101.3.2.1.3.39|Signs security objects on PIV or Derived PIV.|
|SHA1-mediumCBP|2.16.840.1.101.3.2.1.3.21|Medium risk – authentication, signature or encryption of individual person, group, device, or role. (SHA1)|
|SHA1-mediumHW-CBP|2.16.840.1.101.3.2.1.3.22|Medium risk – authentication, signature or encryption of individual person, group, or role where private key is protected on hardware token. (SHA1)|
|SHA1-medium|2.16.840.1.101.3.2.1.3.23|Medium risk – authentication, signature or encryption of individual person, group, device, or role. (SHA1)|
|SHA1-mediumHW|2.16.840.1.101.3.2.1.3.24|Medium risk – authentication, signature or encryption of individual person, group, or role where private key is protected on hardware token. (SHA1)|
|SHA1-devices|2.16.840.1.101.3.2.1.3.25|Medium risk - authentication or encryption of device .(SHA1)|  


| Certificate Policy | Policy Object Identifier (OID) | Risk |
|--------------------|--------------------------------| -----|
|FBCA-rudimentary|


### How do I view the Certificate Policy Object Identifier?


### How do I use the Certificate Policy Object Identifier?
