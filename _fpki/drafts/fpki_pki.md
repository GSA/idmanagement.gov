<!---
---
layout: default
title: About Public Key Infrastructure
permalink: /pki/
---
--->

The topics contained in these Federal Public Key Infrastructure (FPKI) Guides will help program managers and engineers understand both Public Key Infrastructure (PKI) and FPKI--what they are and how they work.

* [What is Public Key Infrastructure?](#what-is-public-key-infrastructure)
* [Why Use PKI?](#why-use-pki)
* [What are the Components of a PKI?](#what-are-the-components-of-a-pki)
* [What is a Digital Signature?](#what-is-a-digital-signature)
* [What is Encryption?](#what-is-encryption)
* [What are the Different Types of Certificates and their Purpose?](#what-are-the-different-types-of-certificates-and-their-purpose)


## What is Public Key Infrastructure (PKI)?
PKI provides for public key encryption of data and digital signature services. It is implemented through specific policies, processes, server platforms, software, and workstations. This "system" is used to administer public key certificates and public-private "key pairs." It also includes services that issue, maintain, and revoke public key certificates.

PKI uses public key (PK) cryptography.  PK cryptography uses public and private key pairs to encrypt and decrypt data. <!-- This paragraph seems to be about cryptograpy but digresses into public and private key discussion. -->Public keys may be disseminated widely; however, a private key is known only to the owner (senders and receivers). A sender uses a private key to encrypt unprotected information (i.e., transform plaintext to ciphertext). A receiver uses a corresponding private key to either: (a) transform the ciphertext back into plaintext, (b) verify the sender’s identity, or (c) verify the data’s integrity, or some combination of these options. <!-- Doesn't say how the data is encrypted, decrypted, etc. -->


## What are the components of PKI?
The four components of PKI include **Certificate Authorities (CAs)**, **Registration Authorities (RAs)**, **repositories**, and **archives**. <!-- How do components differ from the "system" described in "What is PKI" above? Only 4 components? -->There are two types of PKI users: **Certificate Holders** and **Relying Parties**. A fifth, optional component is the **Attribute Authority**. The following table describes these components and related functions in detail.

|**PKI Component/Function**| **Description**|
|-------|------------|
|**Certificate Authority (CA)**|Issues a public key certificate for each identity<!-- both person and device? -->, confirming that the identity has the appropriate credentials.|
|**Registration Authority (RA)**|Trusted by the CA to register or verify the identity of a user <!-- senders and receivers? -->to the CA.|
|**Repository**|Stores active public key certificates and **Certificate Revocation Lists (CRLs)** for a specific CA system.|
|**Archive**|Stores and protects sufficient information to determine whether a digital signature on an “old” document should be trusted.|
|**Public Key Certificate**|Confirms that an identity has the appropriate credentials. A digital certificate includes the public key, identity information about the owner of a corresponding private key, the certificate's operational period, and the CA’s own digital signature.|
|**Certificate Revocation List (CRL)**|A list of revoked certificates that should not be relied upon.|
|**PKI Users**|Organizations or people that use the PKI that but do not issue certificates. These users include the Relying Party, who relies on the certificate to know with certainty the public key of another entity, and the certificate holder of an issued certificate who can sign digital documents.|

## What is a Digital Signature?
A digital signature is the encrypted, electronic equivalent of a written signature. Whether data is transmitted or retrieved from storage, a digital signature provides assurance that the (claimed) signatory signed the information. In addition, a digital signature provides a way to detect whether data was modified <!-- By whom or what? -->(i.e., data integrity) after it was signed. It also provides a way to authenticate its origin and prevent its denial (i.e., non-repudiation) <!-- Check accuracy of previous statement. -->.

A digital signature algorithm includes signature-generation and verification processes. A signatory uses a private key to digitally sign the data. (Each signatory owns both a public and private key pair.) A recipient uses a corresponding public key to verify that the signature is valid.

![Example of digital signature process]({{site.baseurl}}/img/PKI-image2.jpg){:style="float:center"}

## What is Encryption?
Encryption allows information to be hidden from others by converting it from plaintext into a seemingly random set of characters (ciphertext). Only those with a special key <!-- Special key is the private key or public-private key pair? -->are able to decrypt it. (**Note**: PKI-based encryption meets information confidentiality and privacy policy requirements.)<!-- From where, what standards or policies-->

![Example of encryption process]({{site.baseurl}}/img/PKI-image3.jpg){:style="float:center"}

## What types of Certificates are there?
The following table describes some digital certificate types and their purposes:

|**Certificate Type**|**Purpose**|
|-------|------------|
|**Digital Signature Certificate**|Used for digitally signing artifacts, such as documents or messages.|
|**Digital Encryption Certificate**|Used for encrypting artifacts, such as documents or messages.|
|**Content Signing Certificate**|Used for signing objects, such as PIV Cards.|
|**Authentication Certificate**|Used to establish authenticity, such validating a person’s identity.|
|**Card Authentication Certificate**|Used to authenticate a card (e.g., a PIV or PIV-I Card).|<!-- PIV-I is interoperable. Is PIV?-->
|**Key Management Certificate**|Used for key establishment and transport.| <!-- to establish and transport keys? -->
