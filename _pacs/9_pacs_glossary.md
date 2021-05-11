---
layout: page
collection: pacs
title: Glossary
permalink: pacs/glossary/
sticky_sidenav: true
sidenav: pacs
---

{% include alert-info.html content="NIST SP-800-116, Revision 1, \"Guidelines for the Use of PIV Credentials in Facility Access\" <a href=\"https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-116r1.pdf\" target=\"_blank\"  rel=\"noopener noreferrer\">Appendix G </a> contains additional PACS-related terms and definitions." %}


### Access Control 

The process of granting or denying specific requests to: 

1. obtain and use information and related information processing services; and 
2. enter physical facilities, such as federal buildings, military establishments, and border crossing entrances.


### Access Point 

An access point can be a door, turnstile, or other physical barrier, where granting access can be electronically controlled.


### Authentication

The process of establishing confidence in the authenticity and validity of a person’s identity.


### Authentication Factors	

Authentication systems are often categorized by the number of factors that they incorporate. The three factors often considered as the cornerstone of authentication are:

- Something you know (for example, a password)
- Something you have (for example, an ID badge or a cryptographic key)
- Something you are (for example, a thumb print or other biometric data)

Authentication systems that incorporate all three factors are stronger than systems that only incorporate one or two of the factors.	


### Authorization

Grants access to only the resources a person needs to perform a job.  A person with an authentic, high-assurance credential (PIV or CAC) will not have access to all resources.  In a large enterprise with thousands of employees and contractors needing access to hundreds of different access points, attempting to manage authorization manually is costly, time consuming, and error-prone.


### Biometric 

A measurable, physical characteristic or personal behavioral trait used to recognize the identity, or verify the claimed identity, of an applicant. Facial images, fingerprints, and iris image samples are all examples of biometrics.


### BIO

A [FIPS 201](https://csrc.nist.gov/publications/detail/fips/201/2/final){:target="_blank"}{:rel="noopener noreferrer"} authentication mechanism that is implemented by using a fingerprint or iris images data object sent from the PIV credential to the PACS and which is matched to the credential holder’s live scan.


### BIO-A

A [FIPS 201](https://csrc.nist.gov/publications/detail/fips/201/2/final){:target="_blank"}{:rel="noopener noreferrer"} authentication mechanism in which the BIO authentication mechanism is performed in the presence of an attendant who supervises the use of the PIV credential and the submission of the PIN and the sample biometric by the credential holder.


### BIO(-A)

A shorthand used to represent both BIO and BIO-A authentication mechanisms.


### Credential

A collection of information about a person, attested to by an issuing authority. A credential is a data object, such as a certificate, that can be used to authenticate the credential holder. One or more data object credentials may be stored on the same physical memory device, such as a PIV card.


### Credential Validation

The process of determining if a credential is valid, which can include the following requirements:
* The credential was legitimately issued.
* The credential's activation date has been reached.
* The credential has not expired.
* The credential has not been tampered with.
* The credential has not been suspended or revoked by the issuing authority.


### Certificate Revocation List 

A list of revoked public key certificates created and digitally signed by a Certification Authority.	


### Identity Management System (IDMS) 

Identity management system comprised of one or more systems or applications that manages the identity verification, validation, and issuance process.


### Identity Registration

The process of making a person’s identity known to the PIV system, associating a unique identifier with that identity, and collecting and recording the person’s relevant attributes into the system.


### Identity Verification 

The process of confirming or denying that a claimed identity is correct by comparing the credentials (something you know, something you have, something you are) of a person requesting access with those previously proven and stored in the PIV credential or system and associated with the identity being claimed.


### Interoperability 

The quality of allowing any government facility or information system to verify a credential holder’s identity using the credentials on the PIV credential, regardless of issuer.


### OCC-AUTH

A two-factor authentication mechanism that uses secure messaging and an on-credential comparison of credential holder fingerprint(s).

### Physical Access Control System
An electronic system that controls the ability of people to enter a protected area, by means of authentication and authorization at access control points.


### PKI-AUTH

A PIV authentication mechanism that is implemented by an asymmetric key challenge/response protocol using the PIV
Authentication certificate and key.


### PKI-CAK

A PIV authentication mechanism that is implemented by an asymmetric key challenge/response protocol using the Card Authentication certificate and key.


### Provisioning

Specifying for each identity both the credential used (for example, a PIV, CAC, or PIV-I card) and the privileges granted to access specific resources (for example, a particular facility, door, or access point), and ensuring that complex set of rules is enforced.


### SYM-CAK

The SYM-CAK is an authentication mechanism based on the optional symmetric card authentication key. As the name implies, the purpose of the SYM-CAK authentication mechanism is to authenticate the credential and thereby the credential holder.


### Validation

The process of determining that an identity credential was legitimately issued and is still valid, that is, the credential has not expired or been revoked.
