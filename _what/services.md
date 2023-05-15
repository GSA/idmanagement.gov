---
layout: page
collection: what
title: Services
permalink: /what/services/
sidenav: what
sticky_sidenav: true

subnav:
  - text: Physical Features
    href: '#physical-features'
  - text: Electronic Features
    href: '#electronic-features'
  - text: PIV Credential
    href: '#piv-credential'
  - text: PIV Usage
    href: '#piv-usage'
  - text: PIV Systems
    href: '#piv-systems'
  - text: PIV Standards
    href: '#piv-standards'
  - text: Use a PIV
    href: '#use-a-piv'
  - text: Card Readers
    href: '#card-readers'
  - text: Next Steps
    href: '#next-steps'


---

<!-- from https://www.idmanagement.gov/buy/#services -->

The following organizations offer Identity, Credential, and Access Management services to the federal government. If your organization has a relevant Identity, Credential, or Access Management service, [contact us]({{site.baseurl}}/contact-us/) so we can add it to the list.

### Government Identity Services

- [USAccess](https://fedidcard.gov/service.aspx){:target="_blank"}{:rel="noopener noreferrer"} – Provides agencies with a PIV credentialing service.
- [MAX.gov Authentication as a Service](https://portal.max.gov/portal/home){:target="_blank"}{:rel="noopener noreferrer"} – Single Sign-On (SSO) and 2-Factor Authentication as a Service with PIV credential integration.
- [FPKI Shared Service Providers]({{site.baseurl}}/who/trust-services/#government-identity-services) – Digital certificates for Federal agencies.

### Business Identity Services

- [FPKI Individual Certificate Providers]({{site.baseurl}}/who/trust-services/) – Offers small numbers of digital certificates for business organizations and business persons, which are used to digitally sign documents and authenticate to a small number of government applications.
- [Trust Services for Businesses]({{site.baseurl}}/who/trust-services/#business-identity-services) – Approved identity and credentialing services for businesses, and which the government has approved for federated identity services.

### FedRAMP

- The [Federal Risk and Authorization Management Program (FedRAMP)](https://www.fedramp.gov/){:target="_blank"}{:rel="noopener noreferrer"} website contains a marketplace with federal workforce and citizen identity products.


<!-- from https://www.idmanagement.gov/buy/#pacs-implementer-self-assessment-toolkit -->

### PACS Implementer Self-Assessment Toolkit

The FIPS 201 Evaluation Program, in collaboration with the [PACS Modernization Working Group]({{site.baseurl}}/who/ficam/#icamsc-working-groups){:target="_blank"}, created an operational self-assessment tool. The tool helps PACS implementers assess facility access systems that use PIV credentials. The assessment provides results to show alignment or disparity with FICAM and NIST guidelines.
- [PACS Assessment Toolkit Version 1.0]({{site.baseurl}}/docs/fips201ep-pacs-self-tool.pdf){:target="_blank"}{:rel="noopener noreferrer"}


<!-- from https://playbooks.idmanagement.gov/piv/ -->

## Physical Features

<img src="{{site.baseurl}}/assets/piv/elements.png" alt="Example of a PIV credential and its physical components." width="560" height="556">

An example of a PIV credential can be seen above.

The image shows the standard placement for information such as photograph, name, affiliation, expiration date, organization, and the **chip**.

PIV credentials also contain at least one security feature that aids in reducing counterfeiting, is resistant to tampering, and provides visual evidence of tampering attempts such as optical varying structures or inks, laser etching, holographic images, and watermarks.  

## Electronic Features
What is the chip on your PIV credential? In the easiest terms, it's a computer. It holds information **very securely** and can process data. The chip is also called a _secure element_.

{% include alert-info.html heading = "Do you have a debit card with a chip or a smartphone with a SIM card?" content="These are both examples of similar technology that we use every day in our lives and help us secure information.  You can't use your PIV credential to withdraw money, nor do you use your debit card to log in to your computer or federal applications—but you can see how similar technology is used every day." %}

Most applications that use PIV credentials leverage information stored on the chip and we call this information the _logical elements_.  These elements are defined in the [NIST Special Publication 800-73 series document.](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-73-4.pdf){:target="_blank"}{:rel="noopener noreferrer"}

The following electronic elements authenticate the PIV credential as a device:  

- **Cardholder Unique Identifier (CHUID)**, which is a digitally signed Federal Agency Smart Card Number (FASC-N) plus other data that can be used.
- **Card Authentication**, which is a certificate and key pair that can be used to verify that the PIV credential was issued by an authorized entity, has not expired, and has not been revoked.

The following electronic elements authenticate YOU as the user:

- **Photograph**, which is stored on the chip, signed digitally, and allows a person to confirm that the printed photo on the card has not been altered.
- **Biometric Identity Information** such as fingerprints or iris/eye templates, which can be used to verify you.
- **PIV Authentication**,  which is a certificate and key pair that can be used to verify that the PIV credential was issued by an authorized entity, has not expired, has not been revoked, and the holder of the credential (YOU) is the same individual it was issued to.

The following electronic elements are for usage by YOU:

- **Digital Signature**, which is a certificate and key pair that allows YOU to digitally sign a document or email, providing both integrity and non-repudiation.
- **Encryption**, which is a certificate and key pair that allows YOU to digitally encrypt documents or email with your colleagues in the federal government or with government partners, providing confidentiality through ensuring that only authorized parties can read the document or email.

The Card Authentication, PIV Authentication, Digital Signature, and Encryption all leverage four separate certificates and key pairs issued from certificate authorities that are audited and certified by the Federal Public Key Infrastructure (FPKI).


<!-- from https://playbooks.idmanagement.gov/piv/ -->

These **PIV Guides** are intended to help you implement common PIV configurations at your organization. These guides are [open source]({{ site.repourl }}){:target="_blank"}{:rel="noopener noreferrer"} and a _work in progress_ and we [welcome contributions]({{site.baseurl}}/contribute/){:target="_blank"}{:rel="noopener noreferrer"} from our colleagues.

The guides focus on using PIV credentials for _logical access_ such as authenticating to networks or applications or digitally signing and encrypting. Using PIV for _physical access_ is available in the [PACS Guide]({{site.baseurl}}/what/pacsguide/){:target="_blank"}{:rel="noopener noreferrer"}.

If you cannot find a particular topic, it may still be in development. Review the [Issues]({{ site.repourl }}/issues){:target="_blank"}{:rel="noopener noreferrer"} for questions and lessons that are in progress. Create a new [Issue]({{ site.repourl }}/issues/new){:target="_blank"}{:rel="noopener noreferrer"} to ask a question or share information with others.  

Read on to learn more about PIV credentials.

## PIV Credential

A PIV credential is a U.S. federal government-wide credential used to access federally controlled facilities and information systems at the appropriate security level.

PIV credentials have certificates and key pairs, pin numbers, biometrics like fingerprints and pictures, and other unique identifiers.  When these items are put together in a PIV credential, the credential provides the capability to implement multifactor authentication for networks, applications, and buildings.

## What Information Is in These PIV Guides?  
First, we cover the basics of PIV credentials, including:

-   What PIV is, contains, and looks like;
-   The basics of getting started with PIV credentials; and
-   Using PIV for network authentication (smart card logon). 

We also cover applications and guidance for developers and users—which need your input!  
{% include alert-success.html heading = "Share your expertise" content="Please contribute and share your lessons for configuring systems or applications, tuning considerations, code, common challenges, troubleshooting errors, and anything else you think would be helpful for your colleagues." %}

## PIV Usage

Agency security is enhanced when PIV credentials are used for authentication to agency systems and facilities. PIV credentials allow for a high level of assurance in the individuals who that access your resources, because the credentials are only issued by trusted providers to individuals who that have been verified in person. PIV credentials are highly resistant to identity fraud, tampering, counterfeiting, and exploitation.

PIV credentials are _standardized_ as well. PIV credentials might be issued by different organizations using different commercial or open source products, on different form factors (cards, mobile devices, etc.).  However, PIV credentials are standardized—every PIV credential is required to have specific information, using technology that is _interoperable_.

Your PIV credential from one agency will have the same basic required format, information, and technology as a PIV credential from your partner agencies. This allows us to trust each other, share applications, and architect and implement systems using common patterns for authentication.

## PIV Systems
Any system at your organization that requires heightened security for determining who should gain access can and should use PIV for authentication. While PIV credentials can be used for authentication on almost any system, they are especially useful for systems that protect sensitive information.

PIV should be used for:

* All authentication for all _privileged_ users, including servers, networks, and applications;
* All _network_ authentication for _all_ users;
* All application authentication for _all_ users of an application that protects or contains sensitive information; and
* Access to facilities and buildings.

## PIV Standards
Review the information on this site if you are interested in PIV credentials or work on _using_ PIV credentials.

If you are interested in the bits and bytes of PIV credentials, you can review the standards (see below), particularly if you develop products such as hardware or software that are _specific_ to PIV credentials for the U.S. federal government. (For most users and engineers, the standards may be too detailed for your needs.)

To review the standards, there is a [National Institute of Standards and Technology (NIST) website](http://csrc.nist.gov/groups/SNS/piv/standards.html){:target="_blank"}{:rel="noopener noreferrer"} with all PIV-related standards. Here are links to some of the most common standards:

- [**FIPS 201**](https://csrc.nist.gov/publications/detail/fips/201/3/final){:target="_blank"}{:rel="noopener noreferrer"} specifies the issuance and management of PIV credentials.
- [**NIST Special Publication 800-73, "Interfaces for Personal Identity Verification"**](https://csrc.nist.gov/publications/detail/sp/800-73/4/final){:target="_blank"}{:rel="noopener noreferrer"} specifies the interface and data elements of PIV credentials.
- [**NIST Special Publication 800-76, "Biometric Data Specification for Personal Identity Verification"**](https://csrc.nist.gov/publications/detail/sp/800-76/2/final){:target="_blank"}{:rel="noopener noreferrer"} specifies the technical acquisition and formatting requirements for biometric data of PIV credentials.

## Test a PIV Card

The [Card Conformance Tool (CCT)](https://github.com/GSA/piv-conformance/wiki/User-Guide){:target="_blank"}{:rel="noopener noreferrer"} can remotely test PIV and Personal Identity Verification–Interoperable (PIV-I) on several common operating systems. The purpose of the CCT is to validate that commercially available PIV and PIV-I comply with relevant standards.

<!-- from  https://playbooks.idmanagement.gov/piv/gettingstarted/ -->

## Use a PIV

You need two items to begin using your PIV credential:

*  A [card reader](#card-readers) (hardware)
*  [Middleware](#middleware) (software) that works with your computer

{% include alert-success.html content="With just their PIV credential, a card reader, and middleware, your users can log in to websites that are PIV enabled, digitally sign email and documents and files, and encrypt!" %}

## Card Readers

A card reader is exactly what the name suggests: a piece of hardware that helps read the card.

> *A card reader is the hardware that supplies power to the chip and allows the computer operating system to talk to the PIV credential chip operating system.*

Card readers are available in many shapes and sizes to fit both the PIV credential and to plug into your computer.  There is a card reader that will work for any shape and size  computer you use, including card readers for USB and microUSB ports.  Examples of readers include fold-up readers, desk readers, keyboard readers, tablet readers, and laptop readers.

{% include alert-info.html heading="ISO 7816" content="If you need to buy a card reader for computers, you will need one that specifies support for ISO 7816." %}

You can buy a card reader for personal use from a number of commercial online retailers.  When buying card readers for your agency, you can use [GSA Advantage](https://www.gsaadvantage.gov/){:target="_blank"}{:rel="noopener noreferrer"} to directly purchase the card readers.

Before you buy a card reader, look around and ensure that you don't already have one.  A large portion of government laptops already have card readers, and desktop computers may have keyboards with built-in readers.

Mac OSX or Linux-based computers often don’t have card readers built in. If this is the case, find a card reader option that works for you. Let's move on to middleware.

## Middleware

For PIV credentials, _middleware_ refers to the computer software or drivers that allow the computer to interact with the PIV credentials to support authentication, digital signatures, encryption, and integrations with your software tools.

For common PIV credential usage scenarios, the table below outlines the _general smartcard middleware_ available as open or government source or included in operating systems for use scenarios.  Commercial options for PIV middleware are available and the list of NIST-certified PIV middleware can be viewed [here on the NIST website](http://csrc.nist.gov/groups/SNS/piv/npivp/validation.html){:target="_blank"}{:rel="noopener noreferrer"}.

{% include alert-info.html content="Consider how to support your email client software and virtual private network software, and think about which browsers are used if you're choosing middleware for all your agency enterprise users." %}

| Name              | Operating System and Versions | Support | Considerations |
| -------------             |----|----|----|
| Windows mini-driver       | Windows 7, Windows 8, Windows 10, Windows 2008, Windows 2012  | Yes | Included in Windows operating systems and requires no installation.  Does not include the functionality to perform full lifecycle management of a PIV credential.  Does not support using your PIV credential with non-Microsoft cryptographic service providers such as those used by Mozilla Firefox browser.   |
| OpenSC       | Mac OSX 10.5, Mac OSX 10.6, Mac OSX 10.7, Mac OSX 10.9, Mac OSX 10.10, Windows (32-bit and 64-bit), Linux, *nix versions vary  | Open Source | Open source software.  Limited commercial support for maintenance and patching.  Supports PKCS#11; for example, as used by Mozilla Firefox browser. Use OpenSC versions greater than 0.20.0 to reduce authentication errors to servers using TLS 1.3. |
| Smart Card Services   | Mac OSX 10.6, Mac OSX 10.7, Mac OSX 10.9, Mac OSX 10.10  | Open Source  | Open source software. Limited commercial support for maintenance and patching.   |
| CoolKey   | Linux, *nix versions vary  | Open Source  |   |
| CACKey   | Linux, *nix versions vary  | US Government Source  | Available from Forge.mil |
| **Commercial options**   | Varies  | Yes  |  Review support for your usage needs such as email signing, encryption, network authentication, VPNs, and website authentication  |


You may need to consider network authentication, Virtual Private Network (VPN), email signing, email encryption, document signing, document encryption and website authentication when choosing one or more middleware options for yourself or your users.  In most cases, you can choose a middleware option that works for the most common uses for your purposes or mix and match based on operating systems and devices.

### Middleware Definitions

_Middleware_ as a general computer term can encompass any software that provides integration points for an application. In the standards for PIV credentials, the term _PIV middleware_ is used. A common question is "What is the difference between PIV middleware and general smart card middleware?" To simplify, we'll define the two terms as we use them for PIV credentials in these guides:

**PIV Middleware:**  

> _Client side software which implements the full set of application programming interfaces and card functions as specified in NIST Special Publication 800-73-4 and has been certified as compliant with the NIST Special Publication 800-85A series testing procedures.  The PIV compliant middleware implements all lifecycle functions, including a user's ability to perform PIN resets, activation, and renewals. The PIV compliant middleware may also implement common usage functions to support authentication, digital signatures, encryption, and integrations with multiple operating system cryptographic libraries._

**General Smart Card Middleware:**  

> _Client side software which implements common functions for an operating system and cryptographic libraries to interface with PIV credentials or other smart cards for usage.  The general smart card middleware may implement functions to support authentication, digital signatures, encryption, and integrations with multiple operating system cryptographic libraries._

For common PIV credential usage scenarios, we outline the _general smart card middleware_ available as open or government source or included in operating systems for use scenarios.  Commercial options for PIV middleware are available and the list of NIST-certified PIV middleware can be viewed [here on the NIST website](http://csrc.nist.gov/groups/SNS/piv/npivp/validation.html){:target="_blank"}{:rel="noopener noreferrer"}.


## Next Steps

You have a PIV credential, a card reader, and middleware for your computer. **Now what?**

If you want to learn more about details of PIV credentials, certificates, and how to configure a network or web application, see the [PIV Details](/what/pivdetails/) section.
