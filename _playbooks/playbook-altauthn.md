---
layout: page
collection: playbooks
title: Phishing-Resistant Authenticator Playbook
pubdate: 2023-08
type: Markdown
permalink: /playbooks/altauthn/
description: This playbook help agencies understand phishing-resistant authenticators and plan an alternative authenticator pilot.
sidenav: playbooks
sticky_sidenav: true

subnav:
  - text: Executive Summary
    href: '#executive-summary'
  - text: Phishing-Resistant 101
    href: '#phishing-resistant-101'
  - text: The Passwordless Journey
    href: '#the-passwordless-journey'
  - text: Step 1. Recognize Authentication Patterns and Use Cases
    href: '#step-1---recognize-authentication-patterns-and-use-cases'
  - text: Step 2. Identify Available Resources and Tools
    href: '#step-2---identify-available-solutions'
  - text: Step 3. Implement a Solution
    href: '#step-3---deploy-a-pilot'
  - text: Appendix A. References
    href: '#appendix-a---references'
  - text: Appendix B. Resources
    href: '#appendix-b---resources'
---
Version 1.0  
August xx, 2023

The Fast IDentity Online (FIDO) 2 Community of Action and the ICAM Subcommittee Phishing-Resistant Authenticator Working Group developed this playbook to help agencies understand phishing-resistant authentication and plan a phishing-resistant alternative authenticator pilot.

<img src="{{site.baseurl}}/assets/img/logo-gsa.png" width="64" height='64' align="left" alt="U.S. General Services Administration Logo">
<img src="{{site.baseurl}}/assets/img/logo-cio-round.png" width="64" height='64' align="left" alt="U.S. Federal Chief Information Officer Council Logo">
<br><br><br>

| Version Number | Date | Change Description |
| :----------: | :-------: | -------- |
| 1.0 | 08/xx/2023 | Initial Draft. |

# Executive Summary

A Personal Identity Verification (PIV) credential remains the primary authenticator for federal users, but there are modern phishing-resistant options to create a more holistic authenticator strategy. The identity pillar of the Federal Zero Trust Strategy outlines an aggressive move to reduce system vulnerabilities by implementing phishing–resistant authenticators. Agencies have implemented the Personal Identity Verification credential as the gold standard for credentials, but it also comes with procedural and operational challenges which hinder its everyday use. While agencies must continue to follow OPM credentialing policy, there are modern phishing-resistant options agencies can deploy today to remove either password exception policies or entirely. 

This playbook includes an educational 101 section but also a three-step process to help agencies identify use cases and solutions and outline a FIDO2 pilot based on experience from the FIDO2 Community of Action and content developed by the ICAM Subcommittee Phishing-Resistant Authenticator Working Group.

1.	Recognize common authentication patterns and use cases.
2.	Identify available solutions or acquisition strategies.
3.	Deploy a pilot using the FIDO2 CoA six-part pilot plan.

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Towards a Passwordless Journey</h4>
    <p class="usa-alert__text">
      The Federal Zero Trust Strategy permits agencies to use phishing-resistant authenticators like FIDO2 and Web Authentication when a PIV credential is impractical. This encourages agencies to pursue greater use of passwordless multi-factor authentication.
    </p>
  </div>
</div>

While moving to zero trust can be a multi-year journey, most agencies have reduced their use of passwords through a FIDO2 pilot in only a couple of weeks to months. This journey requires modernization, though. Legacy platforms relying on Active Directory or specialized applications on mainframes do not natively support modern authenticators like FIDO2. The two main types of phishing-resistant authenticators deployed by agencies include Public Key Infrastructure (PKI) (either PIV-based or Only Locally Trusted) and FIDO2, which also includes Web Authentication (WebAuthN) authenticators. FIDO is an open authentication standard developed by the FIDO Alliance which leverages public key cryptography and adopted by major technology platforms such as Microsoft Azure, Apple iOS, and Android. FIDO authenticators come in two form factors, a roaming version which are USB security keys that also support Near Field Communication (NFC) and Bluetooth (BT), or a platform version which is a Trusted Platform Module (TPM) built into devices such as mobile phones, tablets, and laptops.

This playbook is designed for agency ICAM program managers and enterprise and application architects interested in reducing or completely removing passwords in their agency or applications. Agencies are encouraged to tailor this playbook to fit their unique organizational structure, mission needs, and requirements. Other IT program participants, including program managers and application teams, may find value in incorporating this playbook approach in their planning.

## Key Terms

These are key terms used throughout this Playbook. A linked term denotes an official term from a federal policy, NIST glossary, or NIST publication. An unlinked term is defined for this document.
- [Authenticator](https://csrc.nist.gov/glossary/term/authenticator){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - Something the claimant possesses and controls (typically a cryptographic module or password) that is used to authenticate the claimant’s identity. This was referred to as a token in previous SP 800-63 editions.
- [Credential](https://csrc.nist.gov/glossary/term/credential){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - An object or data structure that authoritatively binds an identity - via an identifier or identifiers - and (optionally) additional attributes, to at least one authenticator possessed and controlled by a subscriber. 
- [Derived PIV Credential](https://csrc.nist.gov/glossary/term/derived_piv_credential){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} — A credential issued based on proof of possession and control of a PIV Card. Derived PIV credentials are typically used in situations that do not easily accommodate a PIV Card, such as in conjunction with mobile devices.
- [Multi-factor Authentication (MFA)](https://csrc.nist.gov/glossary/term/multi_factor_authentication){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - An authentication system that requires more than one distinct authentication factor for successful authentication. Multi-factor authentication can be performed using a multi-factor authentication or by a combination of authenticators that provide different factors. The three authentication factors are something you know, something you have, and something you are.
- [Phishing](https://csrc.nist.gov/glossary/term/phishing){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - A technique for attempting to acquire sensitive data, such as bank account numbers, through a fraudulent solicitation in email or on a web site, in which the perpetrator masquerades as a legitimate business or reputable person.
- [Phishing-resistant Authentication](https://zerotrust.cyber.gov/federal-zero-trust-strategy/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - An authentication process designed to detect and prevent disclosure of authentication secrets and outputs to a website or application masquerading as a legitimate system.
- FIDO Certified - An authenticator that has completed FIDO certification testing and is listed [as a FIDO certified product](https://fidoalliance.org/certification/fido-certified-products/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}.
- FIDO2 Platform Authenticator - A FIDO-certified hardware-based authenticator built into a laptop, tablet, or smartphone device.
- FIDO2 Roaming Authenticator - A FIDO-certified hardware-based USB security key or smart card.
- Passwordless Authentication - An phishing-resistant authentication process that doesn't leverage either a password or a knowledge factor as part of an MFA.
- [Verifier Impersonation](https://csrc.nist.gov/glossary/term/verifier_impersonation){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}  - Verifier impersonation attacks, sometimes referred to as “phishing attacks,” are attempts by fraudulent verifiers and RPs to fool an unwary claimant into authenticating to an impostor website. In prior versions of SP 800-63, protocols resistant to verifier-impersonation attacks were also referred to as “strongly Adversary in the Middle (AitM) resistant.

## Audience

This playbook is designed for agency ICAM program managers and enterprise and application architects interested in reducing or completely removing passwords in their agency or applications. Other IT program participants, including program managers and application teams, may find value in incorporating this playbook approach in their planning.

## Disclaimer

The FIDO2 Community of Action developed this Playbook and the content developed by the Phishing-Resistant Authenticator Working Group of the ICAM Subcommittee. U.S. Federal Executive Branch agencies can use this Playbook to plan and integrate alternative authenticators. This Playbook is not official policy, mandated action, or provides authoritative information technology terms. It includes best practices to supplement existing federal policies and builds upon Office of Management and Budget Memorandum 22-09 and existing FICAM guidance and playbooks. Subject areas with intersecting scopes, such as credentialing, lifecycle management, authenticator binding, and authenticator assurance levels, are considered only to the extent they relate to identifying and implementing alternative authenticators. Privileged access management (e.g., superusers, domain administrators) is out of the scope of this playbook.

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">NIST 800-63-4 Updates</h4>
    <p class="usa-alert__text">
      This playbook will be updated when NIST 800-63-4 is finalized.
    </p>
  </div>
</div>

# Phishing-Resistant 101

While network attacks have become more complex, phishing is one of the main tactics used to infiltrate networks and move laterally to compromise data. While smart timeout and lockout mechanisms can prevent brute force attacks on remote services, passwords are often easily compromised through a breach corpus, keylogging, sniffing of passwords sent in an unencrypted protocol, malicious Transport Layer Security (TLS) inspection, social engineering, and lack of user awareness. Even though a PIV credential is the primary authentication method for federal users, many agencies rely on passwords and One-Time Pins (OTP) when a user does not have a PIV credential. Agencies must focus on replacing these susceptible authenticators with phishing-resistant methods.

<div class="usa-alert usa-alert--success">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Phishing-resistant is a form of authentication not susceptible to interception or replay attacks.</h4>
  </div>
</div>

The requirement for phishing-resistant methods is outlined in OMB Memo 22-09, the Federal Zero Trust Strategy. While agencies continue to deploy PIV and Derived PIV credentials to meet this requirement, they often face challenges in operating systems and applications supporting PKI digital certificates on a PIV credential or limitations interacting with the PIV smart card form factor. There are four main challenges identified.
1.	**Device limitations with physical card readers** – Card readers are optimized for desktops or laptops, but more and more federal workforce use mobile devices. The PIV smart card form factor does not support a wireless protocol recognized by mobile devices. Agencies may leverage Derived PIV for mobile while others use more user-friendly options such as OTP.
2.	**Requirements for PIV credential issuance or waiting for PIV issuance** - A PIV credential recipient must physically go to an issuance station; not all recipients live within a 50-mile radius. This also includes supply chain disruptions that extend a PIV issuance for weeks or when someone has lost or damaged their PIV credential. The most common policy exception when someone doesn't have a PIV credential is a time-boxed username and password.
3.	**Ineligible PIV population** - A PIV credential is only issued to individuals needing physical and logical access beyond six months. Some agencies rely on separate authentication systems for their non-PIV population.
4.	**Legacy technology doesn’t support PKI** - This challenge is decreasing as more software providers natively support certificate-based authentication, but it remains challenging for legacy products.

Up to this point, the typical agency approach to handle these challenges is through separate access management systems or exception policies. Both approaches add cost, complexity, and manual processes that can put an agency's mission or data at risk. This is one of the main reasons behind the Federal Zero Trust Strategy, recognizing that PIV credentials will not be a practical option for some systems and situations. Agencies can use phishing-resistant authenticators (such as FIDO2 and Web Authentication-based authenticators). Additionally, agencies are encouraged to use passwordless Multi-Factor Authentication (MFA), which can be accomplished in two ways.

1.	Remove passwords as an MFA factor (e.g., a security key with a Personal Identification Number (PIN) and security key); or
2.	Remove knowledge factors as an MFA factor (e.g., a fingerprint and a laptop Trusted Platform Module (TPM)).

Figure 1. The Passwordless MFA
 <img src="{{site.baseurl}}/assets/playbooks/pra-1-passwordless.png" align="center" alt="Multifactor Authentication includes using two different factors; something you have like a phone or laptop, something you are like a fingerprint or face recognition, or something you know like a password or security question answer. Passwordless can either be an MA that doesn't use a password or that doesn't use something you know.">

Some agencies are deploying FIDO2 solutions leveraging a laptop TPM and biometric to replace password and PIN factors, which may also improve user experience. More lessons learned from the FIDO2 Community of Action can be found below.

## What is Phishing?

Phishing is a technique for attempting to acquire sensitive data, such as bank account numbers, through fraudulent solicitation in email or on a website, in which the perpetrator masquerades as a legitimate business or reputable person. It’s not the only way an attacker can access the system. Here are six MITRE Adversarial Tactics, Techniques, and Common Knowldge (ATT&CK) Tactics, Techniques, and Procedures (TTP) most commonly used for phishing and credential-based attacks.

Figure 2. MITRE ATT&CK TTP for Phishing and Credential-based attacks.
  <img src="{{site.baseurl}}/assets/playbooks/pra-2-mitre.png" align="center" alt="Most alternative authenticators used today such as username and password, one time pin, or push notifications are susceptible to common attacks such as phishing, compromised accounts, adversary in the middle, brute force, MFA interception, or MFA fatigue. Hardware keys like PKI or FIDO are less prone to these types of attacks.">

### Reconnaissance Phase TTP

-	[Phishing (T1566)](https://attack.mitre.org/techniques/T1566/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - Phishing most likely are authentic-looking emails with a sense of purpose or urgency to click on a link or share information. Links can lead to fraudulent websites that either harvest credentials or deliver malware.

<div class="usa-alert usa-alert--warning">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Does Using A Phishing-Resistant Credential Really Resist Phishing?</h4>
    <p class="usa-alert__text">
      Phishing-Resistant MFA does not stop all phishing attacks. A phishing campaign can include both credential theft or malware delivery. A phishing-resistant authenticator only prevents phishing campaigns targeted toward credential theft.
    </p>
  </div>
</div>

### Initial Access TTP

-	[Adversary-in-The-Middle (AiTM) (T1557)](https://attack.mitre.org/techniques/T1557/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} – Adversaries position a network device to intercept communications which can include network sniffing or credential compromise.
-	[Breach Corpus (T1586)](https://attack.mitre.org/techniques/T1586/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} – It is prevalent for a user to leverage the same password across multiple sites, primarily when a password manager either isn’t used or supported. A breach corpus is a data set of compromised usernames and passwords that can further be used in a credential access tactic.

### Credential Access TTP

-	[Brute Force (T1110)](https://attack.mitre.org/techniques/T1110/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - Guessing style attack using a breach corpus of compromised passwords or a new data set.
-	[MFA Interception (T1111)](https://attack.mitre.org/techniques/T1111/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} – Adversaries may target multi-factor authentication (MFA) mechanisms (i.e. smart cards, token generators, etc.) to gain access to credentials that can be used to access systems, services, and network resources. Keyloggers obtain passwords or PINs associated with smart cards, RSA tokens, or OTPs. With an inserted card and access to the smart card password, an adversary can connect to a network resource using the infected system to proxy the authentication with the inserted hardware token.
-	[MFA Fatigue (T1621)](https://attack.mitre.org/techniques/T1621/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} – Adversaries may abuse the generation of push notifications to repeat login attempts continuously. This bombards the user with login requests until they potentially give in.

## What is Phishing-Resistant?

We’ve identified how credentials are susceptible to phishing and other credential attacks, now, let’s recognize which types of MFA are phishing-resistant. Not all MFA are created equal, with some more robust than others. For this document, a phishing-resistant authenticator is a form of authentication not susceptible to interception or replay attacks. The two main types of phishing-resistant authenticators deployed by agencies include PKI (either PIV-based or Only Locally Trusted) and FIDO2 which also includes Web Authentication (WebAuthN) authenticators. 

Table 01. Common MFA Options
 <table class="usa-table usa-table">
    <style> 
        td {text-align: center; vertical-align: middle;}
        th {text-align: center; vertical-align: middle;}
    </style>
    <thead>
        <tr>
            <th scope="col" colspan=2>Phishable</th>
            <th scope="col">Phishing Resistant</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>AAL1</td>
            <td>AAL2</td>
            <td>AAL3</td>
        </tr>
        <tr>
            <td>Single Factor</td>
            <td colspan=2>Multi Factor</td>
        </tr>
        <tr>
            <td>Username / Password</td>
            <td>1. One Time PIN (Email, SMS, Mobile App)<br>2. Push Notification</td>
            <td>1. PKI including PIV-based credentials<br>2. FIDO including FIDO2 and WebAuthN </td>
        </tr>
    </tbody>
</table>

These phishing-resistant authenticator types may not be susceptible to phishing because both leverage public key cryptography, creating a public and private key pair. 
-	The private key is always stored on a device and never shared or exported, making it extremely hard to compromise. 
-	The public key is shared with people or things like websites.

The FIDO Alliance is supporting a new capability which is colloquially called a passkey. A passkey is a term similar to a "password" but describes a FIDO-generated key pair. A form of passkey is sharable across devices and platforms and even with other people. This form of cross-device or multi-device passkeys should only be considered as a public user option and further analyzed for workforce use cases. This is an evolving capability, so it will not be discussed further. For more information on passkeys, see this [FIDO Alliance white paper](https://fidoalliance.org/passkeys/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} and [Auth0 blog post](https://auth0.com/blog/our-take-on-passkeys/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}.

An authenticator leveraging public key cryptography is more resilient to phishing and credential attacks due to this design. There are some unique considerations in deciding between PKI and FIDO2.

Table 02. Advantages and disadvantages of PKI and FIDO2
 <table class="usa-table usa-table">
    <style> 
        th {text-align: center; vertical-align: middle;}
    </style>
    <thead>
        <tr>
            <th scope="col"></th>
            <th scope="col">PKI</th>
            <th scope="col">FIDO2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Advantage</th>
            <td>1. The keys are bound to people or things in the certificate.<br>2. A trusted infrastructure; keys are generated against a policy that others can trust.<br>3. Non-repudiation in the certificate when issued after a high assurance identity proofing process.	</td>
            <td>1. Natively supported in leading identity products.<br>2. Does not require the "Infrastructure" part of Public Key Infrastructure (e.g., checking and revocation infrastructure).<br>3. The FIDO keys are bound to a device and then to a person through an identity or directory account.</td>
        </tr>
        <tr>
            <th scope="row">Disadvantage</th>
            <td>1. It can be a complicated endeavor for establishing and operating.<br>2. Single point of failure if the verification authority is taken offline or validation software is compromised.<br>3. Trust store management</td>
            <td>1. Can’t revoke a key pair. They must be unregistered to the device or in an identity or directory record.<br>2. The talent shortage in people who understand and can implement FIDO2.</td>
        </tr>
  </tbody>
</table>
<br>

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">What is the difference between an authenticator and a credential?</h4>
    <p class="usa-alert__text">
      A credential is an authenticator, but it also validates the person to the authenticator all in one. A passport, driver's license, or PIV are all examples of a credential, but it may be a diploma or certificate as well. An authenticator doesn’t have the validation part. For example, a password without a username is an example of an authenticator. You don’t know who it belongs to, but someone can use it to authenticate to something.
    </p>
  </div>
</div>

## What is FIDO?

This section provides a high-level overview of the Fast IDentity Online Alliance and what they provide. The FIDO Alliance is a non-profit industry association of technology vendors that publish MFA standards and test and certify vendor products. They’ve developed two standards.

1.	FIDO1 (Dec 2014)
    1. Universal Two Factor (U2F) – Now called Client to Authenticator Protocol 1 (CTAP 1), is a simple protocol to bootstrap a username/password authentication with a 2nd factor over USB, Near Field Communication (NFC), or Bluetooth ( BT) on supported operating systems and browsers. 
    2. Universal Authentication Framework (UAF) - This is a passwordless protocol designed for mobile applications.
2.	FIDO2 (Apr 2018)
    1. CTAP2 - Added mobile device support and a passwordless experience with WebAuthN.
    2. WebAuthN - A World Wide Web Consortium (W3C) standard for a set of javascript Application Programming Interfaces (API) to allow UAF and CTAP2 authentication to browsers through devices.

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">How can I tell if I’m using FIDO2?</h4>
    <p class="usa-alert__text">
      The easiest way to tell if you’re using FIDO2 is when you’re using a FIDO-certified device without a username and password. If you’re using a FIDO-certified device with a username and password, that is most likely FIDO1 which is still better than a username and password by itself!
    </p>
  </div>
</div>

Figure 3. Example of a FIDO2 Authentication Transaction
 <img src="{{site.baseurl}}/assets/playbooks/pra-3-example.png" align="center" alt="An authenticator uses CTAP to talk to a client or platform. The client or platform then use Web Authentication to register to authenticate to a Relying Party.">
 
A FIDO authenticator comes in two main forms.
1.	Platform authenticator - A TPM chip built into devices. Some examples include Apple FaceID and Windows Hello for Business.
2.	Roaming authenticator - A USB-A or C-based security key that can be used across devices as well as wirelessly over NFC and BT. Some examples include Yubico Yubikey, Identiv UTrust, RSA DS-100, and others.

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">A Case Study on Authenticator Disaster Recovery and Business Continuity</h4>
    <p class="usa-alert__text">
      In May 2022, Microsoft released a patch that changed how PKI certificates (including PIV credential certificates) are mapped in Active Directory. These changes broke certificate-based authentication for many agencies that mapped PKI certificates using the User Principal Name (usually an email address) instead of a stronger method identified by Microsoft. This patch also caught a lot of agencies off guard as they saw rolling outages as Domain Controllers updated. For agencies that only relied on PIV credentials, this was a dire risk management decision to apply an agency–wide username/password exception or run vulnerable servers. CISA
      <a class="usa-link" href="https://www.cisa.gov/guidance-applying-june-microsoft-patch-tuesday-update-cve-2022-26925" target="_blank" rel="noopener noreferrer">released guidance on applying the Microsoft patch</a> outlining remediation steps which included applying the patch and turning on a compatibility mode. This compatibility mode is only temporary, and agencies must either manually or determine an automated way to update certificate mapping to a strong Microsoft-identified method. Some agencies took action to have a comparable alternative authenticator as either an ongoing secondary option or as a backup in case there is another potential compromise of PKI validation software or with PKI certificates directly.
    </p>
  </div>
</div>

## Lessons Learned from the FIDO2 Community of Action

To help support agencies in aggressively replacing usernames and passwords, the Office of Management and Budget, Cybersecurity and Infrastructure Agency, and the ICAM Subcommittee established a FIDO2 Community of Action. The primary characteristics of a CoA are outlined below.

1.	Short-term, usually six months.
2.	Small group, usually 4-8 agencies.
3.	Actively piloting a solution and sharing challenges and lessons learned.

The first FIDO2 CoA included eight agencies either actively piloting a solution or evolving a pilot to their entire production community. The pilots had a combination of platform authentications like [Windows Hello for Business](https://playbooks.idmanagement.gov/playbooks/whfb/) and Apple FaceID and roaming authenticators like Yubico Yubikey or WebAuthN authenticators. There are six main lessons learned from the first FIDO2 CoA cohort.

1.	Agencies need a holistic authenticator strategy to stop handling exception use cases. There is not a single authenticator type that works across all authentication patterns and is phishing-resistant. Agencies must be comfortable with alternative, phishing-resistant authenticators like FIDO2 to replace exception policy alternatives.
2.	FIDO2 is a commercial standard becoming as ubiquitous as a password as more devices and browsers natively support them. This creates muscle memory in users that leverage the same commercial standard on government devices, improving their experience.
3.	FIDO2 platform authenticators provide a more straightforward and cost-efficient approach to a passwordless journey than other authenticator types. Biometric options such as face and finger recognition are included in FIDO2 without needing 3rd party middleware or additional readers, but they depend on operating systems and device support. An agency may face challenges leveraging a platform authenticator when operating cross-platform identity and collaboration solutions such as Okta and Microsoft Office 365.
4.	Agencies may already have the tools to deploy FIDO2 and not know it. If you’re using a FedRAMP identity tool such as Azure Active Directory, Okta, or Ping Identity, they already natively support FIDO2. Potentially, no extra cost for platform authenticators.
5.	Plan and produce user guidance and user adoption campaigns. One of the biggest challenges in deploying new technology is ensuring you don’t lose your users on the journey. Hold office hours, ask me anything sessions, or have on-demand videos to help users transition to new tools. See the user experience section of the Windows Hello for Business Playbook as an example.
6.	The FIDO2 standard, and specifically WebAuthN, is an internet-based service using APIs. It requires a connected device and may not work in low or no-bandwidth environments. Cached credentials and refresh tokens can become a challenge to troubleshoot and manage.

 
# The Passwordless Journey

An agency's journey toward a passwordless future normally starts with a pilot. Follow these three steps from the FIDO2 CoA to plan and execute a successful FIDO2 pilot.

1. [Step 1 - Recognize authentication patterns and use cases](#step-1---recognize-authentication-patterns-and-use-cases), where your agency uses an exception authenticator.
2. [Step 2 - Identify available solutions](#step-2---identify-available-solutions) which may include procuring security keys.
3. [Step 3 - Deploy a pilot](#step-3---deploy-a-pilot) and make production considerations.

## Step 1 - Recognize Authentication Patterns and Use Cases

The first step for many agencies is identifying use cases, but we must recognize our authentication patterns and gaps. Through the FIDO2 CoA, five main authentication patterns are identified.

Figure 4. Authentication patterns toward a holistic authenticator strategy
 <img src="{{site.baseurl}}/assets/playbooks/pra-4-patterns.png" align="center" alt="Authentication patterns focus on the authentication events between a user (an employee, contractor, or partner) and data. The five primary authentication patterns inlude personal devices, government devices, enterprise single sign on tool, direct authentication through a web portal, and a non-application interface such as a command line.">

Figure 4 identifies the five most common authenticator patterns between a user and data and is grouped into two main categories.

1.	Device authentication is the first attempt to gain data access. Two authentication patterns include a bring-your-own-device (BYOD) or Government Furnished Equipment (GFE).
    1.	BYOD - Some agencies support BYOD access for a limited number of applications like email or collaboration tools. These are often unmanaged devices, so deploying or enforcing certificate-based options is difficult.
    2.	GFE - This is most agencies' primary data access method. These are managed devices where agencies deploy standard images and certificate-based options such as Derived PIV. One challenge for most agencies is managing many operating system types, which may also limit how certificates are supported.
2.	Application authentication is often the 2nd authentication attempt to gain data access. Three application authentication patterns include an enterprise Single Sign-On tool, direct access through a web application, or a non-application interface.
    1.	[Single Sign On (SSO)](https://playbooks.idmanagement.gov/playbooks/sso/) - Agencies are centralizing application access using an enterprise SSO tool. This is often where PIV enforcement occurs, with most SSO tools supporting certificate-based authentication.
    2.	Web Application - This is direct HTTPS authentication at a web page and is very common for cross-agency applications such as Max.gov, USAJobs.gov, and several others that either do not support or support a limited number of agencies in federating. Certificate-based options are often difficult to implement and maintain, so most agencies deploy a username password or OTP. Some agencies have outsourced authentication to a shared service such as Max Authentication or Login.gov.
    3.	Non-App Interface - This is a catch-all for data access, not over HTTPS, such as command line, SSH, or other non–HTTP protocols. Most agencies rely on either [Privileged Access tools](https://playbooks.idmanagement.gov/playbooks/pam/), Secure Shell (SSH) keys, or usernames and passwords.


<div class="usa-alert usa-alert--warning">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Don’t Forget the Suitability Determination!</h4>
    <p class="usa-alert__text">
      No matter the credential or authenticator used, all agencies must continue following OPM credentialing policy for suitability, background investigations, and issuing a PIV credential. 
    </p>
  </div>
</div>

Once we identify the authenticator gaps, we can identify the primary use cases of our holistic strategy. There are five primary use cases where a phishing-resistant option can close gaps.

1.	Alternative authenticator or “I don’t have a card reader” - This is the primary use case to replace exception authenticators like passwords or OTPs. This use case includes a mobile device or application access where a certificate-based authentication option is unavailable. Agencies deploy an alternative authenticator like a platform authenticator as an always available option. Some agencies deploy Derived PIV.
2.	Back–up authenticator or “I don’t have my PIV credential” - This use case user doesn't have a PIV credential yet, meaning it hasn’t been delivered as a new issuance or a replacement. This use case replaces an exception policy authenticator with a phishing-resistant option while the user waits for their PIV credential. Some agencies deploy PIV Interoperable or agency-specific alternative tokens as well.
3.	Ineligible PIV user or “I can’t get a PIV credential” - This use case covers the entire short-term user community outside the OPM credentialing policy. This community includes short-term employees, contractors, partners, and other user types.  Some agencies deploy PIV Interoperable, agency–specific alternative tokens, or username/password and OTP.
4.	Technology limitations – Any certificate–based authenticator has challenges and restrictions, as mentioned throughout this playbook. Cloud applications and mobile devices usually do not natively support certificate–based options without 3rd party tools. 
5.	Mission application for public users - The Federal Zero Trust Strategy recognizes that phishing-resistant authenticators are not just a workforce option but should also be an option for public users. While enforcing authenticator types on your workforce is easier, agencies should consider adding a phishing–resistant option to websites for public users.

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Wait, so can we support bring your own devices and authenticators?</h4>
    <p class="usa-alert__text">
      It is a local risk decision to support BYOD or bring your own authenticators. This is a more common use case for partner applications such as Max.gov or Federal Acquisition Institute than for an agency enterprise SSO tools. Consider data sensitivity when supporting BYOD data access or look at mechanisms that can use unmanaged device signals as part of an access decision, such as operating system type and version. One unique feature of FIDO2 is limiting the kinds of FIDO authenticators registered with an account. For example, an agency can restrict to a specific vendor and batch of security keys (such as only Federal Information Processing Standard (FIPS) certified). 
    </p>
  </div>
</div>

## Step 2 - Identify Available Solutions

Most agencies are surprised that their agency enterprise SSO tool supports FIDO2, usually without any additional license or equipment costs of the SSO tool. The additional cost usually arrives when deciding between the platform and roaming authenticators.

Unfortunately -
1.	FIDO2 support is a crosswalk between operating systems and browsers, with some operating systems supporting some browsers and vice versa.
2.	FIDO2 platform authenticators are single operating system specific, so they will not work in a multi-operating system use case (e.g., Windows Hello for Business can not be used to authenticate to or on an Apple device).
3.	The user experience may also differ between operating systems and browsers.

Fortunately - 
1.	The FIDO Alliance and its supported vendor community have several resources to identify compatibility and compatibility issues.
2.	Growing base of vendor support and certified products. 

Four leading platforms and four main browsers support FIDO2 and WebAuthN.
1.	Platform (Operating Systems)
    1.	Windows 10 or later
    2.	MacOS Big Sur or later
    3.	Android 7+
    4.	Linux 
2.	Browsers
    1.	Google Chrome
    2.	Apple Safari
    3.	Windows Edge
    4.	Mozilla Firefox

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">What's the advantage of a platform authenticator versus roaming?</h4>
    <p class="usa-alert__text">
      Platform authenticators have a cost and user experience advantage over roaming authenticators. They are most likely supported on GFE and provide a more seamless experience than a roaming authenticator. Roaming authenticators are more widely supported in multi-operating system environments but come with the additional acquisition cost and lifecycle activities that come with a physical authenticator.
    </p>
  </div>
</div>

Listing a crosswalk here may not be able to keep up with the latest operating system and browser updates, so public tools are recommended for verification and testing.

1.	[https://webauthn.io/](https://webauthn.io/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. is a Cisco / FIDO Alliance sponsored website to test WebAuthN. It also includes common libraries and languages used to implement WebAuthN in web applications.
2.	[https://webauthn.me/](https://webauthn.me/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. is a Auth0 sponsored website to test and debug WebAuthN. It also includes a compatibility chart of which operating systems and browsers support platform and roaming authenticators.

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">What about IA–2(6) control enhancement and platform authenticators?</h4>
    <p class="usa-alert__text">
      NIST 800–53 control enhancement (IA-2(6)) requires that one of the factors is provided by a device separate from the system gaining access. This is not a baseline control but a control enhancement meaning agencies are not required to implement it, and agencies handle the exception process. While this could mean platform authentication is not separate, another interpretation is the TPM on a device is separate from the device itself. Two OMB Memos (M-6-16 and M-7-17) also stated this control enhancement, but both memos were rescinded. There are inherent cost benefits to using an integrated authenticator like a platform authenticator.
    </p>
  </div>
</div>

### Identify Acquisition Strategy

There are two main patterns to acquiring security keys.

1.	[GSA Advantage](https://www.gsaadvantage.gov/advantage/ws/main/start_page?_gl=1*1ipxsrg*_ga*MTQ5NDY5NjQxNy4xNjUyMjczMzIw*_ga_HBYXWFP794*MTY4ODE2OTgwMC4xNDQuMC4xNjg4MTY5ODAwLjAuMC4w){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} is a centralized acquisition portal that also includes FIDO2 security keys. Search for FIDO2 and verify if the vendor meets your requirements, such as FIPS certification. This is a good approach for government purchase card or small quantities such as 100 or less.
2.	Some FIDO2 security key vendors provide enterprise contracts with additional benefits such as replacement and discounted pricing. These agreements often require large purchase orders of several hundred to thousands of security keys and may also come as a one-time purchase or subscription model.

Due to the secure nature of a security key, acquiring them from a trusted source and verifying the packaging on receipt is recommended. A trusted source can include GSA Advantage or reputable websites from your organization's acquisition office. Packaging should be examined for damage or questionable shipment. Most FIDO roaming authenticator vendors ship security keys with holographic decals to demonstrate origination and secure packaging. The security keys also ship with a [FIDO-issued metadata information](https://fidoalliance.org/metadata/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} which can be digitally verified with FIDO.

## Step 3 - Deploy a Pilot

The next natural step is to plan and deploy a pilot. The FIDO2 CoA outlined a six-part pilot plan for a successful pilot. Agencies can add sections, but these six should be included at least.

1.	Identifying objectives and use cases - This playbook is a great resource to help identify pilot objectives and use cases.
2.	Executive sponsor - Ensure your pilot has CIO or CISO support and key stakeholders such as application owners.
3. Pilot team and resources– Identify and engage with all stakeholders, including identifying a pilot lead and support team. For some agencies, this could include multiple teams spread across network, directory, cloud, HSPD-12, security, and other offices. Also, identify your pilot components such as operating system, access tools, browser, and platform or roaming authenticator types. Identify a pilot user group commensurate with the production population focused on a non-technical user base.
4.	Timeline - Pilots range from a couple of months to a year, including all research and planning based on size and complexity. The actual pilot may only run for a couple of weeks.
5.	Risk and challenges – List your known and anticipated risks and challenges. These can include those listed in this playbook or agency-specific, like resource limitations or user adoption.
6.	Success metrics - There are a range of success metrics. Here are some examples.
    1.	Remove passwords as an authenticator option from our enterprise SSO tool.
    2.	Reduce the number of password policy exceptions to less than 1%.
    3.	99% of user accounts have more than one phishing-resistant authenticator registered.
    4.	Support two or more phishing-resistant authenticator options.
    5.	Implement a self-service capability.
    6.	Improve user login experience survey results by 5%.

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">What is a good pilot size?</h4>
    <p class="usa-alert__text">
      The FIDO2 CoA advises basing your pilot user size on a cross-section of production users. A good size group is 50-100 users for platform authenticators and half that for roaming authenticators. The intent of a FIDO2 pilot should focus on validating enterprise use cases with an intent to deploy it in production as either an alternative or backup authenticator.
    </p>
  </div>
</div>

### Lifecycle Management

How can my agency perform lifecycle management? This is a widespread question that may be over-analyzed because of the PKI-centric nature of authenticators in the federal government.

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Is this a Derived PIV?</h4>
    <p class="usa-alert__text">
      A Derived PIV is any credential issued based on proof of possession and control of a PIV Card with additional controls as outlined in Special Publication 800-157. If your agency requires proof of possession of a PIV card and implements additional controls outlined in NIST SP 800--157 before issuing a FIDO2 authenticator, it is a Derived PIV. If your agency doesn’t, then it is not a Derived PIV.
    </p>
  </div>
</div>

There are three lifecycle stages for a non-PKI authenticator.

1.	**Issuance** - FIDO2 only supports hardware-based devices. Agencies should follow NIST 800-63 guidance that states a federally-issued authenticator is issued to a FIPS 140 Level 1 or 2 device. Agencies should ensure that the issuance process includes an MFA prompt at the same or higher Authenticator Assurance Level (AAL) of the issued authenticator over a secured channel like mutually authenticated HTTPS. The authenticator is registered to an identity account in the Enterprise SSO tool. For platform authenticators, the authenticators are additionally generated on the device TPM. PIN length is recommended at six digits.
2.	**Maintenance** - FIDO2 authenticators do not have an expiration date nor need to be reissued at set intervals unless it is compromised. If a biometric factor is registered, it may need to be updated for platform authenticators. For roaming authenticators, it follows similar maintenance for a physical token, such as damage, wear, and tear.
3.	**Invalidation** - A FIDO2 authenticator can not be revoked, but agencies should invalidate if an employee leaves, the authenticator or device is compromised, or for other reasons. An authenticator is linked to a user account, so the account is suspended, or the authenticator is removed from the account. This is similar to removing a certificate mapping to a PIV credential.

### Best Practices with Biometrics

A platform authenticator using a biometric can provide an improved user experience and is also cost-effective because it leverages native device features. Today's most common platform authenticators include Apple FaceID, TouchID, Android, and Windows Hello for Business. NIST Special Publication 800-63b outlines best practices in using a biometric as an authentication factor. 
1.	Always and only use a biometric along with a device and never with a knowledge factor.
2.	Limit the number of failed attempts to five.
3.	Local biometric comparison is preferred over a central verifier.
4.	Biometric systems should implement liveness detection.
5.	Operate with a False Match Rate (FMR) or False Accept Rate (FAR) of at least 1 in 1000 (<0.001%).

# Summary

A PIV credential remains the primary authenticator for federal users, but there are modern phishing-resistant options to create a more holistic authenticator strategy. These options include FIDO2 and WebAuthN, but more may be identified in the future. Many agencies are surprised that they support these modern options today and many more are deploying pilots or moving into production to reduce or completely remove passwords towards a passwordless future. 

# Appendix A - References

## Policies

1.	[OMB Memo 22-09 - Moving the U.S. Government Toward Zero Trust Cybersecurity Principles](https://www.whitehouse.gov/wp-content/uploads/2022/01/M-22-09.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
2.	[OPM Credentialing Standards Procedures for Issuing Personal Identity Verification Cards under HSPD-12 and New Requirement for Suspension or Revocation of Eligibility for Personal Identity Verification Credentials](https://www.opm.gov/suitability/suitability-executive-agent/policy/cred-standards.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

## Standards

1.	[NIST Special Publication 800-63B-3 - Digital Identity Guidelines - Authentication and Lifecycle Management](https://pages.nist.gov/800-63-3/sp800-63b.html){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

## Guidance

1.	[CISA Fact Sheet - Implementing Phishing-Resistant MFA](https://www.cisa.gov/sites/default/files/publications/fact-sheet-implementing-phishing-resistant-mfa-508c.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
2.  [CISA Secure Cloud Business Applications (SCUBA) Hybrid Identity Solutions Architecture](https://www.cisa.gov/sites/default/files/2023-03/csso-scuba-guidance_document-hybrid_identity_solutions_architecture-2023.03.14-final.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
2.	[FICAM Enterprise Single Sign-On Playbook](https://playbooks.idmanagement.gov/playbooks/sso/)
3.  [FICAM Windows Hello for Business Playbook](https://playbooks.idmanagement.gov/playbooks/whfb/)
3.	[NIST Digital Identity Guidelines Frequently Asked Questions](https://pages.nist.gov/800-63-FAQ/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
4.	[NIST Conformance Criteria for NIST SP 800-63B Authentication and Lifecycle Management](https://www.nist.gov/system/files/documents/2020/07/02/800-63B%20Conformance%20Criteria_0620.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
5.	[NSA - Selecting Secure Multi-factor Authentication Solutions](https://media.defense.gov/2020/Sep/22/2002502665/-1/-1/0/CSI_MULTIFACTOR_AUTHENTICATION_SOLUTIONS_UOO17091520.PDF){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

# Appendix B - Resources

1.	[PassKeys.io](https://www.passkeys.io/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - This is a public tool to understand FIDO passkeys and test various devices.
2.	[WebAuthN.io](https://webauthn.io/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - This is a FIDO Alliance and Cisco sponsored tool to understand Web Authentication and test various devices.
3.	[WebAuthN.me](https://webauthn.me/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - This is a public tool to understand and debug Web Authentication and test various devices.
4.	[CanIUse.Com](https://caniuse.com/?search=webauthn){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - This is a public tool to identify which operating systems and browsers are compatible with WebAuthN and FIDO passkeys.
