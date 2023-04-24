---
layout: page
collection: fpki
title: Path Discovery and Validation
permalink: fpki/pdval/
sticky_sidenav: true
sidenav: fpki

subnav:
    - text: Introduction
      href: '#introduction'
    - text: What Is a Trust Anchor?
      href: '#what-is-a-trust-anchor'
    - text: What Is Path Discovery and Validation?
      href: '#what-is-path-discovery-and-validation'
    - text: What Is a Certification Path?
      href: '#what-is-a-certification-path'
    - text: Certification Path Discovery
      href: '#certification-path-discovery'
    - text: Certification Path Validation
      href: '#certification-path-validation'
    - text: References
      href: '#references'
---

## Introduction

Public Key Infrastructure (PKI) certificates follow a process called Path Discovery and Validation (PDVal) to verify if a certificate is valid and trusted. This playbook provides an overview of this PDVal process in the context of the Federal PKI. If you have heard terms like PDVal, trust paths, certificate paths, trust fabric, trust anchors, and Microsoft CAPI to name a few, you are in the right place. Knowledge of the Federal PKI is not needed to understand PDVal. If you're interested in more information about the Federal PKI, go to the [Federal PKI Overview Page]({{site.baseurl}}/fpki/).

## What Is a Trust Anchor?

A trust anchor is a trusted certification authority (CA). These may be commonly called trust root, trusted CA, or root CA. Everything in PKI traces its trust back to a trust anchor.
The trust anchor operated by Federal PKI, including PIV and PIV-Interoperable, is the [Federal Common Policy CA]({{site.baseurl}}/fpki/common/). A common misconception is that the Federal Bridge is the root of trust. Keep reading to understand why that is not the case. Every software program that interacts with a certificate installs trust anchors in a native trust store or uses the trust store of the operating system. A trust store is a list of **root, intermediate, and sometimes user certificates** that the operating system or application trusts to process transactions. For more information on trust stores, see the [PKI trust store page]({{site.baseurl}}/fpki/trust-stores/).

## What Is Path Discovery and Validation?

**Certification Path Discovery and Validation (PDVal)** is a procedure to associate a certificate to a trust anchor and confirm that the certificate is valid for use. Some form of PDVal occurs with every certificate validation action. Some common PIV card use cases include:
- Logging onto a workstation.
- Authenticating to an application using a web browser.
- Verifying a digital signature (for example, signed email or digitally signed documents).
- Encrypting data for others (for example, encrypted email).
- Accessing a building or an office

PDVal is a two-step process:
1. **Certification Path Discovery:** Find a certification path to a trust anchor. 
2. **Certification Path Validation:** Confirms that the certification path is good. 

**Note:** This playbook describes the PDVal process as documented in standards. Individual vendor implementations may not support all the capabilities described in this playbook, and the details of individual implementations may vary. Troubleshooting PDVal errors is not explained here. Information about troubleshooting PDVal errors during smart card logon can be found on the [Troubleshooting PIV Logon]({{site.baseurl}}/piv/network/troubleshooting/) page.

### What Is a Certification Path?

Sometimes referred to as a certificate chain or a trust path, a certification path is the sequence of unique CA certificates between a trust anchor and a certificate issued to a person or device ("end-entity" or "leaf" certificate). Each CA certificate in the sequence was created and digitally signed ("issued") by the preceding CA's key. There may be multiple intermediate CA's between a trust anchor and a leaf certificate, complicating PDVal.

<img src="{{site.baseurl}}/assets/fpki/pivcertificatechain_small.png" alt="Example of an identity certificate with intermediate and root." style="width:800px;"/>

Two valid certification paths for the same PIV authentication certificate are illustrated below.

<img src="{{site.baseurl}}/assets/piv/pdval-example-cert-path-1.png" alt="An example certification path from the Federal Common Policy CA G2." style="width:800px;"/>

<p align="center"><b>Example Certification Path 1 - from Federal Common Policy CA G2</b></p>

<img src="{{site.baseurl}}/assets/piv/pdval-example-cert-path-2.png" alt="An example certification path from the Raytheon Technologies Root CA." style="width:800px;"/>

<p align="center"><b>Example Certification Path 2 - from Raytheon Technologies Root CA</b></p>

Both certification paths are valid for the same PIV authentication certificate (”(Affiliate)” in the images), but they start with different trust anchors. The configuration difference between the two example paths is only which trust anchor was installed.
 
- A variety of factors can influence the certification path, including:
- Installed trust anchor CAs (Also known as trust roots or trusted CAs)
- Locally cached CA certificates
- Dates the CA certificates were issued or expire
- The content of the CA certificates

The most important factor is the trust anchors. By limiting which trust anchors are installed, only certification paths to those trust anchors can be used on the system. Systems that are for agency use should only find certification paths to the Federal Common Policy CA for PIV certificates. If a certification path to another trust anchor is discovered, the trust anchor can be removed from the system to ensure that all certification paths validate to the Federal Common Policy CA.

<div class="usa-alert usa-alert--error" role="alert">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">My Certificates Do Not Validate to COMMON</h4>
    <p class="usa-alert__text">
      If certification paths from your PIV certificates do not begin with the Federal Common Policy CA G2, follow the guidance found in
      <a class="usa-link" href="{{site.baseurl}}/fpki/common/distribute-os/">Distribute the certificate to operating systems</a>
      to install the CA in the correct location.
    </p>
  </div>
</div>

### Certification Path Discovery

The first step of PDVal is finding a certification path for the certificate that needs to be verified. The process for finding the path is called path discovery or path development. Verifying a PIV card is a straightforward procedure involving only one or two CA certificates (see the Example Certification Path 1 image in the previous section). In other situations, such as validating a PIV-I certificate, the procedure can involve many CAs and significantly more challenging path discovery requirements. If path discovery adheres to RFC 5280, all possible paths should be discovered and details like certificate policies would be considered at each hop; the proces shouldn't wait until a single path is selected without considering additional information.

<img src="{{site.baseurl}}/assets/piv/pdval-pivi-cert-path.png" alt="An example PIV-I certification path." style="width:800px;"/>

<p align="center"><b>PIV-I Certification Path</b></p>

Software providers use different path discovery methods. Describing all the various PDVal software is beyond the scope of this playbook. The simple path discovery algorithm below illustrates the concept.

<img src="{{site.baseurl}}/assets/piv/pdval-path-discovery-algorithm-updated.png" alt="A simple path discovery algorithm." style="width:800px;"/>

The process fails if the procedure cannot obtain the subsequent issuing CA certificate.

### Finding CA Certificates

For simple cases, the necessary CA certificates are often administratively installed or are cached locally by the certificate-consuming software or the operating system. Software must actively retrieve the CA certificates needed to discover a complete certification path in complicated situations. PDVal software retrieves certificates from a location in the Certificate's Authority Information Access (AIA) extension.

| Scenario | Example |
| ----- | ----- |
| Simple | Verifying certificates issued by your own agency. |
| Complex | Verifying certificates issued by 3rd parties or outside organizations. |

FPKI certificates are required to contain an AIA with an Internet-accessible URL. The URL usually points to a "p7c" file that contains _one or more_ issuing CA certificates.

<img src="{{site.baseurl}}/assets/piv/pdval-aia-in-cert.png" alt="A screenshot showing Authority Information Access in a certificate issued by the Federal Bridge CA." style="width:800px;"/>

<p align="center"><b>AIA in a Certificate Issued by the Federal Bridge CA</b></p>

Path discovery follows the AIA URLs, one after the other, from each certificate in sequence until it finds a certificate issued by a trust anchor in the certificate trust list. The figure below shows the discovery of a single correct path. Many false paths could be evaluated in practice, and potentially, even more, than one valid path could be discovered. The path processing software then must choose which path to use.

{% include alert-success.html heading = "Fun Fact" content="The algorithm to decide which correct path to choose has been a source of much debate in the PDVal community for more than two decades." %}

<img src="{{site.baseurl}}/assets/piv/pdval-path-discovery.png" alt="A diagram showing the discovery of a single correct path." style="width:800px;"/>

<p align="center"><b>Illustrative Path Discovery</b></p>

### Choosing CA Certificates

The AIA URLs may point to files that contain more than one CA certificate. Each certificate could be valid in a certification path to your desired trust anchor. The AIA URL for the Bridge CA contains three valid CA certificates in the diagram below.

<img src="{{site.baseurl}}/assets/piv/pdval-path-discovery-bridge-pki.png" alt="A diagram showing path discovery in a bridge PKI environment." style="width:800px;"/>

<p align="center"><b>Illustrative Path Discovery in a Bridge PKI Environment</b></p>

For example, assume that the path discovery software is attempting to find a certification path from an end-user on the left to the trust anchor on the right. Said another way, we trust the anchor on the right but have been presented with the user's credential on the left and need to see if there are any means to trust it. When the process retrieves the AIA URL for the Bridge, it must select the CA certificate issued to the Bridge by CA. Path discovery software that fails to select the correct certificate or is incapable of backtracking to attempt other choices may fail to find a valid certification path. PDVal software may also end the search in an unexpected location, such as the far side of the Federal Bridge. Yes, in this case, it is a bridge too far.

<div class="usa-alert usa-alert--success">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Ah-ha Fact</h4>
    <p class="usa-alert__text">
      Bridges create transitive trust. You may recall the transitive property from Algebra. If A = B and B = C, then A = C. That is what is going on here. The end user's credential above can ultimately be trusted because we found a means to trust its issuer. We did not directly trust that issuer already. The means to do that was established through the transitive property. Without constraints, transitive trust could theoretically be built indefinitely.
    </p>
  </div>
</div>

Fortunately, beyond the more obvious matching of certificate names in the certification path, certificates provide useful information for guiding path discovery, the most important of which are public key identifiers. 

### Public Key Identifiers

You can think of these identifiers as unique nicknames for the keys in the certificates. Certificates usually contain two public key identifiers:
- **Subject Key Identifier (SKID):**  Nickname for the key inside this certificate
- **Authority Key Identifier (AKID):** Nickname for the key inside my issuing CA’s certificate

When a CA issues a certificate, it populates its SKID value into the AKID value of the issued certificate. This bread crumb or chaining trail allows for path discovery to choose the CA certificate with the correct key when discovering the certification path.

This mechanism becomes essential when CAs get a new key, called key rollover. CA 1 has had a prior key rollover in the image below, resulting in two different certificates issued to CA 2. In this case, the path discovery software can match the authority key identifier in CA 2 to the subject key identifier in the CA 1 certificate to determine which certificate to use.

<img src="{{site.baseurl}}/assets/piv/pdval-prior-key-rollover.png" alt="A diagram illustrating prior key rollover." style="width:800px;"/>

## Certification Path Validation

With a path discovered, now we need to see if it is valid.

Certification path validation is the second step of PDVal where the process determines if a discovered certification path is valid. The FPKI seeks to conform to RFC 5280, so any certification path validation software that fully implements RFC 5280 path validation requirements should interoperate with all aspects of FPKI.

For each certificate in the certification path, basic checks confirm the following about the certificate:
- It is not expired
- The signature is verified
- The issuer name matches the CA subject name
- It contains required fields
- It is not revoked

Then the complete certification path is checked for the correct  
- Certificate policies 
- Certification path constraints

If all these checks pass, the certification path is considered valid. The sections below provide additional details on these steps.
It is worth noting that some aspects of path validation may be successfully incorporated with the path discovery process. Although these techniques are not discussed in this playbook, they are discussed in detail in [RFC 4158](https://www.rfc-editor.org/rfc/rfc4158.html){:target="_blank"}{:rel="noopener noreferrer"}.

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Informative status</h4>
    <p class="usa-alert__text">
      Certification path validation is a process defined in 
      <a class="usa-link" href="https://www.itu.int/ITU-T/recommendations/rec.aspx?rec=X.509" target="_blank" rel="noopener noreferrer">Recommendation ITU-T X.509</a>
      . RFC 5280 is a profile of X.509 and contains a subset of the functionality deemed necessary for interoperability in an Internet-connected environment.  X.509 should be consulted in any case where RFC 5280 content is in question, unclear, or silent. This playbook aims to provide readers with a summary of some core certification path validation requirements, it should not be considered authoritative.
    </p>
  </div>
</div>

### Basic Certificate Checks

PDVal performs basic checks on every certificate except for the trust anchor.

#### Validity Period

Every certificate contains two dates: the date that it was issued and when it will expire. The current time must be between the two dates.

#### Signature Verification

Starting with the certificate issued by the trust anchor, every certificate in the certification path has a digital signature that must be verified using the previous certificate's public key.

#### Name Matching

Certificates uniquely identify the owner of the certificate, whether the owner is a person, device, or CA. Certificates are named using what is called a Distinguished Name (DN). For example:

    CN=Federal Common Policy CA G2, OU=FPKI, O=U.S. Government, C=US

Each certificate contains two Distinguished Names:
- **Subject DN:** The owner of the certificate. The owner controls the key found in the certificate. 
- **Issuer DN:** The CA that created and signed the certificate. 

In a certification path, the subject name in the CA certificate must match the issuer name of the next certificate in the sequence.

#### Required Fields

CA certificates must contain fields that authorize them to be issuers of other certificates. In the FPKI, all CA certificates must contain the following:
- **Key Usage:** Certificate Signing and CRL Signing
- **Basic Constraints:** CA=True

Certificates issued to persons or devices must meet the use case requirements. For example, suppose a certificate is being used for authentication. In that case, the software can confirm that the Extended Key Usage for Client Authentication is present. Certificate requirements for FPKI can be found in the [Certificate Policies](#certificate-policies) section.

#### Revocation Checking

A certificate may need to be invalidated before it expires. This process is called revocation. You can think of what happens when you report a credit card as having been lost or stolen. The expiration date has not passed, but you do not want anyone to use the credit card.

A CA revokes a certificate by placing the certificate serial number (primary certificate identifier) on a digitally signed list of revoked certificates called a **Certificate Revocation List (CRL)**. If a certificate's serial number appears on the list, it is no longer valid and should not be used.

Additionally, CAs may operate **Online Certificate Status Protocol (OCSP)** servers to provide revocation status for single certificates. Instead of a potentially large CRL, software can leverage OCSP to obtain status for a certificate quickly. This is especially useful for end-user applications that do not need to track the revocation status of every certificate issued by a CA.

### Certificate Policies

When found in a CA certificate, these policies indicate that the CA complies with applicable security requirements and is authorized to issue the policy certificates. When found in a certificate issued to a person or a device, the policies communicate security and identity proofing requirements. They may also display the intended use case for the certificate. In the FPKI, all certificates contain certificate policies, and path validation software must confirm that all certificates are valid for one or more policies.

For example, a PIV authentication certificate uses the policy identifier id-fpki-common-authentication (2.16.840.1.101.3.2.1.3.13) in the PIV authentication certificate. 

A PIV issuing CAs must also contain this policy. The policy must be in every CA certificate leading back to the Federal Common Policy CA. It is possible to restrict an application only to accept PIV authentication certificates requiring this and only this policy identifier to appear.

Other examples are id-fpki-common-cardAuth (2.16.840.1.101.3.2.1.3.17) and id-fpki-certpcy-pivi-cardAuth (2.16.840.1.101.3.2.1.3.19). [Physical Access Control Systems (PACS)]({{site.baseurl}}/pacs/) are configured to require these policies for accepting PIV and PIV-I cards at building and access points.

#### Policy Mapping

The path validation software must use another process called policy mapping. Policy mapping is how we translate a policy identifier to and from Federal PKI to another organization's policy identifier. This mapping is not as complicated as it sounds.

To understand what is happening, imagine two different homes. Alice owns one home, and Bob owns the other home. Alice and Bob both have rules about shoes.
- **Alice-Shoe-Policy**: Remove shoes in the foyer
- **Bob-Shoe-Policy**: No shoes in the house

These policies are enforced and controlled in different homes, and they are not identical in meaning. However, they can be considered functionally equivalent, enabling us to see that Alice and Bob meet the exact requirement by following their policies.

In PKI we apply this same logic to more complicated requirements, such as those required to issue PIV-I certificates for card authentication. This enables the Federal Bridge CA to map the Federal policy identifier to the policy identifier used by a commercial PIV-I provider. This mapping allows the certificate policy to remain valid along the entire certification path, even though its name may change.

<img src="{{site.baseurl}}/assets/piv/pdval-policy-mapping-fb-to-gpo.png" alt="A screenshot showing example policy mapping from the Federal Bridge to the Government Printing Office." style="width:800px;"/>

<p align="center"><b>Example Policy Mapping - Federal Bridge to Government Printing Office</b></p>

When looking at a certificate, you may discover that the policies displayed for intended purposes are not part of the certificate. If you select the Certification Path tab, you will find that the policies come from the trust anchor used to validate the certification path. Somewhere in the path, the policies were mapped to the policies in the certificate.

<img src="{{site.baseurl}}/assets/piv/pdval-dod-cert.png" alt="A screenshot of a certificate issued by DoD." style="width:800px;"/>

In the example above, the DoD certificate contains DoD policies and the path validated to Northrop Grumman's trust anchor. The policies displayed above are:

- 1.3.6.1.4.1.16334.509.2.7 - Northrop Grumman Medium Assurance-256 Software
- 1.3.6.1.4.1.16334.509.2.8 - Northrop Grumman Medium Assurance-256 Hardware

#### Putting It All Together

The Cross-certificates between the Bridge and the affiliate CA in the bridge environment PKI image contains policy mappings in the [Choosing CA Certificates](#choosing-ca-certificates) section. They are an essential part of the cross-certificate because they express the literal security common ground between an issuer and the community baseline established by the Bridge. As an issuer, you can always exceed a security control or requirement, but you must at least meet the requirement. As an issuer, you could state that both shoes and socks are not allowed in your house, but the Bridge might be happy as long as you at least enforce shoe removal. Path validation ensures that the minimum level of assurance you have set as your trust policy meets the security controls of other CAs in the trust framework. This trust mapping is a compelling capability because it affords trust at scale safely. Here also, we are leveraging the transitive property to accomplish this effect.

<img src="{{site.baseurl}}/assets/piv/pdval-policy-mapping-fb-to-dod.png" alt="A screenshot showing example policy mapping from the Federal Bridge to the DoD interoperability root." style="width:800px;"/>

<p align="center"><b>Example Policy Mapping - Federal Bridge to DoD Interoperability Root</b></p>

### Certification Path Constraints

A CA puts information in certificates it issues to other CAs that limit the trust that it will extend to those CAs. Those limits are collected and carried forward in the certification path. We refer to these limits on trust as constraints. The FPKI community uses the following constraints during PDVal:
- **Basic Constraints:** All CA certificates must indicate that they are CA certificates. Basic constraints can also limit the maximum number of additional CA certificates allowed in the certification path.
- **Name Constraints:** A CA certificate can provide a filter for certificates it will issue. It can indicate permitted partial names or list partial names that it explicitly excludes. For example, a CA can suggest that it will only give certificates to subjects with an email address ending in "@dod.mil."
- **Policy Constraints:** CAs can place limits on policy mapping or require the certification path to be valid for at least one policy.

The key takeaway is that CAs can place restrictions (constraints) on certificates they issue. These restrictions limit how the certificates they issue can be used. Detailed processing of these constraints is a complicated matter and is beyond the scope of this playbook.

## References

PDVal is a complex subject. For more detailed technical information about PDVal, consult the following resources:

[Understanding Certification Path Construction](http://www.oasis-pki.org/pdfs/Understanding_Path_construction-DS2.pdf){:target="_blank"}{:rel="noopener noreferrer"} - This white paper is old but provides a helpful PDVal overview. 

[RFC 5280: Internet X.509 Public Key Infrastructure Certificate and Certificate Revocation List (CRL) Profile](https://www.rfc-editor.org/rfc/rfc5280.html){:target="_blank"}{:rel="noopener noreferrer"} - This document describes path validation in detail.

[RFC 4158: Internet X.509 Public Key Infrastructure: Certification Path Building](https://www.rfc-editor.org/rfc/rfc4158.html){:target="_blank"}{:rel="noopener noreferrer"} - This document provides essential information on path discovery.

[Recommendation ITU-T X.509](https://www.itu.int/ITU-T/recommendations/rec.aspx?rec=X.509){:target="_blank"}{:rel="noopener noreferrer"} - This recommendation provides information on public-key and attribute certificate frameworks.



