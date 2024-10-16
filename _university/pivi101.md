---
layout: page
collection: university
title: Personal Identity Verification Interoperable 101
permalink: /university/pivi/
description: This guide helps federal agencies understand how federal issuers and Non-Federal Issuers (NFI) of PIV-Interoperable (PIV-I) achieve interoperability with the PIV infrastructure.
sidenav: university
sticky_sidenav: true

version: 2.1
pubdate: April 2022

subnav:
  - text: Executive Summary
    href: '#executive-summary'
  - text: 1. Introduction
    href: '#1-introduction'
  - text: 2. Minimum Credential Requirements
    href: '#2-minimum-credential-requirements'
  - text: 3. Special Considerations for Federal Agencies
    href: '#3-special-considerations-for-federal-agencies'
  - text: References
    href: '#appendix-a-technical-information'
  - text: "Appendix A: Technical Information"
    href: '#appendix-a-technical-information'
  - text: "Appendix B: Glossary"
    href: '#appendix-b-glossary'
  - text: "Appendix C: Acronyms"
    href: '#appendix-c-acronyms'
  - text: "Appendix D: Document References"
    href: '#appendix-d-document-references'
---


This guide helps federal agencies understand how federal issuers and Non-Federal Issuers (NFI) of PIV-Interoperable (PIV-I) achieve interoperability with the PIV infrastructure. The scope of this guide is limited to the issuance of PIV-I credentials. Federal departments and agencies must continue to make their own authorization decisions to allow or deny access when using a PIV-I credential for authentication.

<img src="{{site.baseurl}}/assets/img/logo-gsa.png" width="64" height='64' align="left" alt="U.S. General Services Administration Logo">
<img src="{{site.baseurl}}/assets/img/logo-cio-round.png" width="64" height='64' align="left" alt="U.S. Federal Chief Information Officer Council Logo">
<br><br><br>

<!-- | Version Number | Date | Change Description |
| :----------: | :-------: | -------- |
| 2.1 | 04/2022 | Updated OMB, NIST, and Federal PKI references to latest publication versions and requirements. | 
| 2.0.1 | 12/2016 | Updated Table 4 <now table 2> to clarify for Legislative and Judicial branches of federal government |
| 2.0 | 11/2016 | - Removed most duplicative references to requirements stated in other government documents.<br>- Updated references to Memorandums, Standards, and common terminology<br>- Added clarification for federal agencies on the boundaries of security, auditing, and procurement requirements |
| 1.0 | 07/2010 | Initial Draft | -->

<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="v-a1">
      Date: {{page.pubdate}} - Version: {{page.version}}
    </button>
  </h4>
  <div id="v-a1" class="usa-accordion__content usa-prose">
    <table>
      <caption>Personal Identity Verification Interoperable version table</caption>
      <thead>
      <tr>
        <th scope='col'>
          Version Number
        </th>
        <th scope='col'>
          Date
        </th>
        <th scope='col'>
          Change Description
        </th>
      </tr>
      </thead>
      <tr>
        <th scope='row'>
          2.1
        </th>
        <td>04/2022</td>
        <td>Updated OMB, NIST, and Federal PKI references to latest publication versions and requirements.</td>
      </tr>
      <tr>
        <th scope='row'>
          2.0.1
        </th>
        <td>12/2016</td>
        <td>Updated Table 4 <now table 2> to clarify for Legislative and Judicial branches of federal government</td>
      </tr>
      <tr>
        <th scope='row'>
          2.0
        </th>
        <td>11/2016</td>
        <td><ul><li>Removed most duplicative references to requirements stated in other government documents.</li><li>Updated references to Memorandums, Standards, and common terminology</li><li>Added clarification for federal agencies on the boundaries of security, auditing, and procurement requirements</li></ul></td>
      </tr>
      <tr>
        <th scope='row'>
          1.0
        </th>
        <td>07/2010</td>
        <td>Initial Draft.</td>
      </tr>
    </table>
  </div>
</div>


## Executive Summary

Federal agencies are interested in issuing and acquiring identity credentials and credential services that are not Personal Identity Verification (PIV) credentials, but rather are:

1. technically interoperable with federal government PIV infrastructure, and
2. issued in a manner that allows federal government-relying parties to trust the credentials.

PIV-Interoperable (PIV-I) was created to meet this need. PIV-I shares the same technical standard as the PIV credential standard, Federal Information Processing Standards (FIPS) 201. Prior guidance neglected to address the issuance of these PIV-I credentials by federal agencies, requiring additional guidance for all issuers. The main difference between PIV and PIV-I are PIV credentials are <strong>required</strong> to have common, minimum personnel vetting assurance as specified in Federal Information Processing Standard 201. Individuals with PIV-I credentials assert <strong>no personnel vetting assurance</strong> in a baseline, standardized manner. PIV-I credentials may be appropriate for situations where an agency has determined that a PIV credential is not warranted, but the individual requires access. Such situations may include, but are not limited to:

* Temporary/seasonal employees, visiting scientists and guest researchers, or contractor personnel requiring access for less than six (6) months;
* Non-U.S. nationals with insufficient residency in the U.S. to satisfactorily conduct the background investigation; and
* Personnel operating outside the contiguous U.S. under special risk security considerations, as outlined in FIPS 201.

This guide advocates a set of minimum requirements for PIV-I credentials that the Federal Government can trust and details solutions to the four barriers to interoperability that currently challenge the government. These four barriers are as follows:

1. Common terminology for identity credentials and issuers – For consistency, a lexicon for differentiating a PIV credential from a credential interoperable with PIV infrastructure, and the differences between federal and NFI, has been developed.
2. Assured identity – The fundamental purpose of an identity credential is to establish the identity of the credential holder. Therefore, issuing an identity credential in a federated model and consistent manner provides the federal government with a requisite level of identity assurance.
3. Technical requirements – Meet basic requirements for identity credentials to be interoperable with the federal PIV infrastructure.
4. Security and auditing – The boundaries for auditing and compliance requirements require clarification for federal agencies.

For additional information on PIV-I, please contact [fpki@gsa.gov](mailto:fpki@gsa.gov).

## 1. Introduction

The Federal Government's reliance (trust) on PIV credentials establishes a baseline for identity assurance, authenticator assurance, and personnel vetting assurance. Federal agencies and issuers of identity credentials express a desire to produce interoperable smart card-based credentials with the Federal Government PIV infrastructure. Agencies can trust these PIV interoperable credentials in authenticating facilities, networks, and systems. This guide provides a definition for a PIV-I credential to address the following:

- Identity assurance requirements,
- Authenticator assurance requirements,
- Technical interoperability clarifications,
- Security and auditing clarifications, and
- Procurement clarifications.

## 1.1 Scope

This guide is limited to describing PIV-I. Federal agencies make a risk determination to accept any credential, including PIV-I, for access to data, applications, facilities, and networks. Additionally, this guide does not address the use cases for other types of non-PIV credentials. PIV-I is used to overcome barriers to federal reliance on identity credentials, which are defined as interoperable with PIV. Four specific areas of concern are addressed.

1. Common terminology for identity credentials and issuers – For consistency, a lexicon for differentiating a PIV credential from a credential interoperable with PIV infrastructure, and the differences between federal and NFI, has been developed.
2. Assured identity – The fundamental purpose of an identity credential is to establish the identity of the credential holder. Therefore, issuing an identity credential in a federated model and consistent manner provides the federal government with a requisite level of identity assurance.
3. Technical requirements – Meet basic requirements for identity credentials to be interoperable with the federal PIV infrastructure.
4. Security and auditing – The boundaries for auditing and compliance requirements require clarification for federal agencies.

A minimum set of requirements is described for each area to allow identity credentials to technically interoperate with the federal government PIV systems.

## 1.2 Assumptions

The following assumptions apply:

1. Federal departments and agencies determine how they will trust PIV-I credentials.
2. Possession of a PIV-I credential does not infer access or authorization of any kind.
3. User privileges and entitlements (authorization) are determined solely by the federal government relying party.
4. PIV-I credentials will not be considered a substitute or alternative credential for populations otherwise subject to PIV requirements.

## 2. Minimum Credential Requirements

There is a lack of standard terminology to distinguish between characteristics of PIV and PIV-I credentials. This lack of common language results in confusion, uncertainty, or misunderstanding when identifying and understanding how to integrate PIV-I credentials in a federal agency.

| Credential | Description |
| ----- | ------ |
| PIV credential | An identity credential that is fully conformant with Federal Government PIV Standards including identity assurance, authenticator assurance, **and personnel vetting assurance**. |
| PIV-I credential | An identity credential that is conformant with the Federal Government PIV Standards for identity assurance and authenticator assurance. |

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">What's the Difference?</h4>
    <p class="usa-alert__text">
      All individuals who are issued PIV credentials are <strong>required</strong> to have common, minimum personnel vetting assurance as specified in 
      <a class="usa-link usa-link--external" href="https://pages.nist.gov/FIPS201/FIPS201.html#s-2-1" target="_blank" rel="noopener noreferrer">FIPS 201 Section 2.1 Control Objectives</a>
      . Individuals with PIV-I credentials assert <strong>no personnel vetting assurance</strong> in a baseline, standardized manner.
    </p>
  </div>
</div>

Table 1 summarizes the identity assurance, authenticator assurance, and personnel vetting assurance requirements.

**Table 1: PIV and PIV-I Definitions**

| Assurance | Requirements Summary[^1] | PIV | PIV-I |
| --------- | ------------ | ---------| -------------|
| **Identity Assurance:** The robustness of the identity proofing process and the binding between an authenticator and a specific individual. | 1. In-person proofing<br>2. The capture and verification of two (2) independent identity documents<br>3. The capture of biometrics | Yes | Yes |
| **Authenticator Assurance:** The robustness of the authentication process, and assurance that the user has possession of the authenticator. | 1. Public key infrastructure key pairs<br>2. Biometric<br>3. Hardware-based credential | Yes | Yes |
| **Personnel Vetting Assurance:** The investigative and adjudication processes, which enhance identity assurance. Personnel vetting is associated with a position designation and/or risk assessment to determine if an individual is suitable to work for or on behalf of the federal government. | A minimum of:<br> 1. A favorably adjudicated _National Agency Check with Inquiries_, or<br> 2. A favorably adjudicated Tier 1 or higher federal background investigation. | Yes | <strong>No</strong> |

## 2.1 Federal Issuers and NFI for PIV-I Credentials

For PIV-I credentials, there may be federal issuers and NFI who participate. Many documents have asserted the term "non-federal issuer" or NFI to be synonymous with a PIV-I credential. **NFI and PIV-I are two different terms**. Two (2) sample scenarios are outlined in Table 2 to clarify the difference between a federal issuer and NFI of PIV-I credentials.

**Table 2: Scenarios of a Federal and Non-Federal of PIV-I Credentials**

| Category | Scenario A: Federal Issuer | Scenario B: Non-Federal Issuer |
|----------|------------------------|--------------------------|
| **Description**      | **Federal Agency A** has short-term employees who manage data systems, or need access to the federal networks or facilities, but fall outside the requirements for a PIV card. | **Federal Agency B** has affiliates or service providers who need to sign documents or authenticator to agency systems to conduct business, but fall outside the requirements for a PIV card. |
| **Scenario Outline** | **Federal Agency A**: <br>1. Selects a <a href="{{site.baseurl}}/trust-services/#government-identity-services">government identity service that offers a PIV-I credentialing service</a>.<br>w. Authorizes and directs persons to use a designated PIV-I service and receive PIV-I credentials<br>4. Has responsibility for the sponsoring of persons, lifecycle management, and other activities including revoking the credentials after the person terminates any service. | **Federal Agency B**: <br>1. Requests partners, affiliates, or service providers to have their contracted or employee personnel obtain <a href="{{site.baseurl}}/trust-services/#business-identity-services">PIV-I credentials from an authorized business identity service</a><br>2. Provides the request through a Department or Agency-level Policy, Memorandum, or contract action with the affiliate or service provider<br>3. The partner, affiliates, or service provider chooses the PIV-I service or builds their own, and makes any contractual or other arrangements with the PIV-I service.  |
| **Acquisition** | Funded by the Agency. | Funded by the Affiliate or Service Provider. |
| **Issuer Type**             | _Federal Issuer_ | _Non-Federal Issuer_ |
| **Credential Type**  | PIV-I | PIV-I |
| **Examples**         | - Temporary or Seasonal Workers<br> - Contractors on a six-month or less contract that require access to agency email services. | State, local, tribal, and territorial partners<br>- Aerospace and Defense partners<br>- Financial services partners |

Even though the issuer type is different in scenario A and B, the credential is still a PIV-I credential. Federal agencies may choose to trust and accept the NFI PIV-I credentials, and acceptance of NFI PIV-I credentials has financial and interoperability benefits for government-wide purposes.

Figure 1 outlines the identity assurance services and components, the authenticator assurance components, and the NFI versus Federal Issuer distinction. Figure 1 shows two (2) certification authorities and two (2) registration, credential management, identity proofing, and lifecycle service components for each scenario to illustrate that any one individual Certification Authority system may have more than one Registration Authority system, and vice versa.

Figure 1 is used in later sections of this guide to identify the auditing and security requirements applied to each scenario.

<p align="center"><b>Figure 1: Federal Issuers and NFI for PIV-I Credentials</b></p>

<img src="{{site.baseurl}}/assets/piv/pivi-nonfed-and-fed-issuers.png" alt="A diagram that displays an icon and label for PIV-I non-federal issuers on the left side of the diagram and an icon and a label for PIV-I federal issuers on the right side of the diagram. Four boxes appear in a grid below the PIV-I non-federal issuers label and four boxes appear in a grid below the PIV-I federal issuers label. The top set of boxes say Certification Authority (PKI). The bottom set of boxes say Registration Credential Management service, proofing, lifecycle. There are arrows vertically and diagonally between the four boxes on the left side of the diagram and there are arrows vertically and diagonally between the four boxes on the right side of the diagram. These two sets of four boxes are labeled Identity Assurance. Three PIV-I card icons appear on the left side of the diagram and three PIV-I card icons appear on the right side of the diagram. The PIV-I card icons are labeled Authentication Assurance. There are arrows pointing from the bottom set of Identity Assurance boxes to the two sets of PIV-I card icons. From the middle PIV-I card icon on the left side of the diagram an arrow points down and to the right to three PIV-I federal issuers icons. The words I can trust the credentials (outputs) appear beside the icons. An arrow points down from the middle from the middle PIV-I card icon on the right side of the diagram to the three PIV-I federal issuers icons." style="width:800px;" >

## 2.2 PIV-I Trusted Identity

The fundamental purpose of an identity credential is to establish a trust foundation based on:
* the _identity assurance_ of the person, and
* the _authenticator assurance_ of the credential.

Therefore, PIV-I credentials must be issued in a manner that provides the Federal Government with a commensurate level of trust for _identity assurance_ and _authenticator assurance_. Personnel vetting assurance may not be determined from a PIV-I credential.

For Federal Issuers of PIV-I, the full list of requirements for identity and authenticator assurance is in the [X.509 Certificate Policy for the Federal Common Policy Framework]({{site.baseurl}}/fpki/#federal-pki-policies-and-profiles).

For NFI of PIV-I, the full list of requirements for identity and authenticator assurance for PIV-I credentials is in the [X.509 Certificate Policy for the Federal Bridge Certification Authority]({{site.baseurl}}/fpki/#federal-pki-policies-and-profiles).

### 2.2.1 PIV-I Identity Assurance

The PIV-I credentials adhere to the same identity assurance requirements as PIV credentials. A summation of the identity assurance requirements is defined here for informational purposes only which include the following elements.

* In-person appearance and proofing
* Verification of two independent identity documents or accounts
* Capture of biometrics

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">PIV-I Identity Assurance Level</h4>
    <p class="usa-alert__text">
      PIV-I meets NIST 800-63-3 Identity Assurance Level 3 requirements
    </p>
  </div>
</div>

### 2.2.2 PIV-I Authenticator Assurance

The PKI certificates are where the identity assurance and authenticator assurance are asserted during use in networks, facilities, and systems. All PIV-I identity credentials must contain certificates issued from one of the Certification Authorities which operate under a Federal Public Key Infrastructure (Federal PKI) Certificate Policy listed above.

There are certification authorities which operate and are audited for compliance to these certificate policies. The certification authorities also have registration authority services which may be built or operated by third-parties such as federal agencies or commercial service providers. The registration authority services encompass the _systems and processes_ where the initial collection of the Personally Identifiable Information (PII) is performed for the PIV or PIV-I identity assurance and lifecycle management functions.[^2] All certification authorities and registration authority components are subject to audits for compliance to management, operational, and technical controls specified in their respective certificate policies.[^3]

Within this boundary of more than [100 existing and audited Certification Authorities]({{site.baseurl}}/fpki/notifications/#fpki-graph), there are options operated and available for direct use by federal departments within the Executive Branch. There are also certification authorities which are operated for non-federal executive branch entities including legislative and judicial branch agencies, and state, local, tribal, territorial, international, and commercial partners.

The certificate policies extension Object IDentifier (OID) contained in the certificates asserts the identity assurance of the person presenting the credential and certificate, how the private keys are stored and managed, and how the certificate should be validated for usage.

However, the certificate policies extension OID for the PIV Authentication Certificates is available only to federal government organizations. PIV-I authentication certificates may not assert the PIV Certificate Policies OIDs used for PIV authentication. Therefore, additional policy defines comparable certificate policies' OIDs that are trusted by the federal government for use in PIV-I authentication certificates. In 2020, the Certificate Policy for the Federal PKI Common Policy Framework was updated to allow Federal PKI Shared Service Provider and federal agencies to issue PIV-I authentication certificates.

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">PIV-I Authenticator Assurance Level</h4>
    <p class="usa-alert__text">
      PIV-I meets NIST 800-63-3 Authenticator Assurance Level 3 requirements.
    </p>
  </div>
</div>

### 2.2.3 PIV-I Personnel Vetting Assurance

Personnel vetting assurance is defined as the investigative and adjudication processes which _enhance_ the identity assurance. These processes are used to determine personnel vetting for granting access to federal data, applications, facilities, and networks. Only the Federal Government may determine the fitness or personnel vetting of an individual for access to Federal Government assets.

PIV-I processes are unable to mirror the personnel vetting assurance processes employed for the PIV credential. PIV-I credentials assert no personnel vetting assurance in a _baseline, standardized manner._

A federal government relying party may associate the PIV-I credential with additional off-credential information to determine the fitness or personnel vetting of the requested access. Examples of off-credential information could be a record check against investigation databases, an entitlements attribute, or other manual or automated processes.

PIV-I credentials may be appropriate for situations where an agency has determined that a PIV credential is not warranted, but the individual requires access. Such situations may include, but are not limited to:

* Temporary/seasonal employees, visiting scientists and guest researchers, or contractor personnel requiring access for less than six (6) months;
* Non-U.S. nationals with insufficient residency in the U.S. to satisfactorily conduct the background investigation; and
* Personnel operating outside the contiguous U.S. under special risk security considerations, as outlined in FIPS 201.

A standardized set of procedures and processes for personnel vetting assurance covering any or all of these possible use cases is outside the scope of this guide.

Where personnel vetting is a concern for a federal agency, the agency may require further personnel vetting checks prior to granting any access. This guide does not prohibit a personnel vetting and fitness determination from being required by federal departments and agencies prior to issuing a PIV-I credential _or_ granting any access to an individual with a PIV-I credential.

## 2.3 Technical Requirements

Basic technology requirements must be met for identity credentials to interact with the Federal Government’s PIV infrastructure. PIV-I credentials must conform to NIST technical specifications for PIV credentials, as defined in:

* [FIPS 201](https://csrc.nist.gov/publications/detail/fips/201/3/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
* [NIST Special Publication 800-73](https://csrc.nist.gov/publications/detail/sp/800-73/4/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
* [NIST Special Publication 800-78](https://csrc.nist.gov/publications/detail/sp/800-78/4/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
* [NIST Special Publication 800-76](https://csrc.nist.gov/publications/detail/sp/800-76/2/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

Further clarification of the NIST Special Publications is required to address: 

1. visual distinction
2. identifiers

### 2.3.1 Visual Distinction

PIV-I credentials shall contain distinctive markings to indicate the issuing entity and shall be visually distinct from PIV credentials. Common options for visual distinction include being printing in a horizontal (landscape) layout versus a vertical layout, or displaying PIV-I in one of the optional printed fields. The horizontal (landscape) layout is recommended to promote consistency in visual distinction.

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">PIV-I is Visually Distinct from PIV</h4>
    <p class="usa-alert__text">
      The Federal PKI Policy Authority is considering a change where a federally-issued PIV-I may look the same as a PIV. If this is passed, only NFI PIV-I are visually distinct from PIV.
    </p>
  </div>
</div>

### 2.3.2 PACS Identifier Namespace

Effective use of PIV and PIV-I credentials requires one or more identifiers to support the interoperability and use in distributed systems across the Federal Government. PIV credentials include a number of identifiers which can be used to link the credential to accounts in Physical Access Control Systems (PACS), networks, and applications. These identifiers include, but are not limited to:

* Card Universally Unique Identifier (Card UUID)
* Card Holder Unique Identifier (CHUID) 
* Federal Agency Smart Credential Number (FASC-N)

PIV-I credentials have these same requirements for identifiers. The CHUID and FASC-N remain elements of the PIV Data Model and these elements may still be in use in legacy physical access control systems for account linking purposes.

{% include alert-info.html heading="CHUID Removed as Authentication Mechanism" content="The CHUID as an authentication mechanism has been removed from FIPS 201-3. The CHUID data element itself, however, has not been removed and continues to be mandatory as it supports other PIV authentication mechanisms." %}

There are additional challenges for PIV-I credentials. For example:

* The FASC-N number scheme is a smart number which incorporates a federal agency code.
* The FASC-N cannot be easily extended to allow sufficient identifier namespace to support PIV-I credentials issued by NFIs including state, local, tribal, territorial, or commercial partners.
* The **X.509 Certificate Policy for Federal Bridge Certification Authority** does not specifically address Federal Issuers of PIV-I credentials and FASC-N numbering schema.

For these reasons, the FASC-N requires specific attention for PIV-I credentials.

Requirements for the FASC-N are:

1. NFIs of PIV-I credentials are required to generate and issue FASC-N values which populate the value “9” for the Agency Code, System Code, and Credential Number: This results in fourteen (14) nines: 9999 9999 999999
2. Federal Issuers of PIV-I credentials are strongly encouraged to generate and issue FASC-N values that comply with the requirements for NFIs of PIV-I credential, including populating the fourteen (14) nines for the Agency Codes, System Codes, and Credential Number: 9999 9999 999999
3. Federal Issuers of PIV-I credentials _may choose_ to generate and issue FASC-N values which contain their assigned Agency Codes,[^4] System Codes, and a Credential Number, in accordance with their PIV Card Issuer Authorization[^5].
4. Federal Issuers of PIV-I credentials who choose to generate and issue FASC-N values which contain their assigned Agency Codes, a System Code, and a Credential Number, shall be aware that the provision and use of the federally issued PIV-I credentials in facility access may be negatively impacted.

{% include alert-info.html heading="Agency Codes May Negatively Impact PIV-I PACS Authentication" content="PACS may erroneously check that the FASC- N is populated with non-“9” values and attempts to validate a PIV certificate extension policy OID instead of the PIV-Interoperable certificate extension policy identifier. Agencies using a Federally issued PIV-I should verify their PACS configuration before choosing to populate the Agency Codes, System Code, and Credential Number." %}

Table 3 outlines the different scenarios for issuers of PIV-I credentials, the portion of the FASC-N values impacted, and potential issues.

**Table 3: FASC-N Values for PIV-I Credentials and Issues**

| Issuer Scenario | FASC-N Value | Issues |
| --------- | ------------------ | ------------------ |
| **Non-Federal** | Agency Code, System Code, and Credential Number must be all “9” (9999 9999 999999) | Departments and agencies with PACS which solely use    FASC-N for account linking should not use PIV-I credentials for unattended facilities access.|
| **Federal with all "9"s** | Agency Code, System Code, and Credential Number strongly encouraged to be all “9”s (9999 9999 999999) | Departments and agencies with PACS that solely use FASC-N for account linking should not use PIV-I credentials for unattended facilities access.|
| **Federal with FASC-N** | Agency Code, System Code, and Credential Number may be populated with their assigned Agency Codes, System Codes, and Credential Number | The PACS may be erroneously checking that the FASC- N is populated with non-“9” values and attempts to validate a PIV certificate extension policy OID instead of the PIV-I certificate extension policy identifier.|

{% include alert-info.html heading="Use Card UUID for Account Linking" content="In all scenarios, it is recommended that agencies update their PACS to use the Card UUID value for PIV-I account linking." %}

## 3. Special Considerations for Federal Agencies

Federal agencies have identified the need to clarify the differences between:

* the auditing performed to maintain compliance with the Federal PKI,
* the auditing performed and required for PIV or PIV-I credential issuers to be granted Authorization to Operate (ATO) under the NIST Special Publication 800-79,
* the Federal Information Security Modernization Act (FISMA) ATO, and
* contracting or procurement requirements.

This section helps clarify these differences and the boundaries for federal agency Chief Information Security Officers.

## 3.1	Auditing Requirements

There are four primary documents referenced for security controls and audit requirements for the systems responsible for issuing either PIV or PIV-I credentials:

1. [NIST Special Publication 800-53](https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} identifies the security control categories to be used for all systems
2. Federal PKI defines the [Security Controls Overlay of Special Publication 800-53 Security Controls for PKI Systems]({{site.baseurl}}/fpki/#federal-pki-policies-and-profiles){:target="_blank"}{:rel="noopener noreferrer"}
3. [NIST Special Publication 800-79-2](https://csrc.nist.gov/publications/detail/sp/800-79/2/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} identifies operational audits for the PIV credentialing activities
4. Federal PKI defines the [FPKI Compliance Audit Requirements]({{site.baseurl}}/fpki/#audit-information-for-the-fpki-management-authority).

For auditing, the Federal PKI requires:

* Certification authorities to be _audited_.
* Any registration authority systems and processes which are used by the certification authority to issue PIV or PIV-I credentials to be _audited_.
* Audits must encompass:<br>
*   the Security Controls Overlay of **NIST Special Publication 800-53**,<br>
*   the applicable **NIST Special Publication 800-79** requirements, and<br>
*   the compliance with the certification authority’s Certificate Policy and Certification Practices Statements.

The audits are performed by third-party independent auditors in which audit results must be submitted to the Federal PKI on an annual basis. In addition to the third-party independent audits, both the certification authorities and registration authority systems must submit compliance reports to the Federal PKI Policy Authority on a recurring basis, such as:

* Samples of all Certificate types issued, and<br>
* Samples of any PIV or PIV-I credentials issued.

These sample artifacts are used to perform compliance inspections on the outputs of the systems in addition to the management, operational, and technical controls which are also inspected during the audits. Non-compliant sample artifacts are reported to the certification authority, registration authority, or federal agency and remediation of non-compliant elements must be addressed or the entities will lose their compliance certification.

The audits and the compliance or non-compliance of the certification authority or registration authority components are used by the Federal Government, other public sectors and international, or commercial entities to assert a number of claims on websites, product documentation materials, memorandums, or contracting documents. These claims often include:

* Federal PKI provider
* PIV provider
* PIV-I provider
* Compliance with the Federal PKI

When asserting these claims, the audits and the associated processes and procedures are establish the capability for federal agencies to trust the outputs and the credentials issued from the systems.

Figure 2 shows the boundaries of the Federal PKI audit and compliance activities.

<p align="center"><b>Figure 2: PIV-I Credentials and Federal Public Key Infrastructure Audit Boundaries</b></p>

<img src="{{site.baseurl}}/assets/piv/pivi-cred-and-fpki-audit.png" alt="A diagram that displays an icon and label for PIV-I non-federal issuers on the left side of the diagram and an icon and a label for PIV-I federal issuers on the right side of the diagram. Four boxes appear in a grid below the PIV-I non-federal issuers label and four boxes appear in a grid below the PIV-I federal issuers label. The top set of boxes say Certification Authority (PKI). The bottom set of boxes say Registration Credential Management service, proofing, lifecycle. There are arrows vertically and diagonally between the four boxes on the left side of the diagram and there are arrows vertically and diagonally between the four boxes on the right side of the diagram. These two sets of four boxes are labeled Identity Assurance. Three PIV-I card icons appear on the left side of the diagram and three PIV-I card icons appear on the right side of the diagram. The PIV-I card icons are labeled Authentication Assurance. There are arrows pointing from the bottom set of Identity Assurance boxes to the two sets of PIV-I card icons. On the left side of the diagram, the Identity Assurance and Authentication sections are labeled Federal PKI Audits." style="width:800px;" >


A FISMA ATO is a separate and distinct assertion. The Federal PKI audits and processes do not assert that there is a Federal Government Designated Authorizing Official or _continuous monitoring_ requirements in place for _all_ certification authorities or registration authority components.

Although the NFI of PIV-I may operate and have continuous monitoring that are commensurate with commercial best practices, the federal agencies are still required to assume responsibility for any government data placed into systems which are bought, built, or used.

Prior to _directly placing_ any PII in a service used to issue and manage PIV-I credentials or procuring any such service, federal agencies are required to confirm and request:

* Federal PKI compliance audit letters
* An ATO Memorandum signed by the Federal Government Designated Authorizing Official, and
* Confirmation of compliance with continuous monitoring requirements
 
Figure 3 shows the notional system boundaries of the required FISMA ATO for federal agencies and issuers of PIV-I credentials.

<p align="center"><b>Figure 3: PIV-I Credentials and FISMA ATO</b></p>

<img src="{{site.baseurl}}/assets/piv/pivi-cred-and-fisma-ato.png" alt="A diagram that displays an icon and label for PIV-I non-federal issuers on the left side of the diagram and an icon and a label for PIV-I federal issuers on the right side of the diagram. Four boxes appear in a grid below the PIV-I non-federal issuers label and four boxes appear in a grid below the PIV-I federal issuers label. The top set of boxes say Certification Authority (PKI). The bottom set of boxes say Registration Cred Mgmt service, proofing, lifecycle. There are arrows vertically and diagonally between the four boxes on the left side of the diagram and there are arrows vertically and diagonally between the four boxes on the right side of the diagram. On the left side of the diagram, the four boxes are labeled Identity Assurance. On the right side of the diagram, the two top boxes are labeled FISMA ATOs and the two bottom boxes are labeled FISMA ATOs. Three PIV-I card icons appear on the left side of the diagram and three PIV-I card icons appear on the right side of the diagram. The PIV-I card icons are labeled Authentication Assurance. On the left side of the diagram, there are arrows pointing from the bottom set of Identity Assurance boxes to the first set of PIV-I card icons. On the right side of the diagram, there are arrows pointing from the bottom set of FISMA ATO boxes to the second sent of PIV-I card icons." style="width:800px;" >

In addition, federal agencies using PIV-I services must request from the provider the Registration Authority Agreement. The Registration Authority Agreement must explain how the provider has implemented the credential management and lifecycle management requirements of the certificate policy. The contents of the Registration Authority Agreement must be approved by the PIV-I provider’s policy authority as satisfactorily implementing the requirements, and submitted to the Federal PKI as part of the audit artifacts. See this template of a [registration authority agreement (click to download the word version)]({{site.baseurl}}/docs/fpki-ssp-raa.docx).

Table 4 summarizes the FKI auditing and FISMA _Authority to Operate_ distinctions.

**Table 4: Federal Public Key Infrastructure Auditing and FISMA ATO Comparison**

| Category | Scenario A: Federal Issuer | Scenario B: NFI|
|----------|-------------------------|--------------------------------------|
| **Type**      | Federal Issuer of PIV-I Credentials | NFI of PIV-I Credentials | 
| **Federal PKI Audits** | 1. Annual Audits for the Certification Authorities directly<br>2. Annual audits of the services and systems used with the Certification Authorities to collect information and manage credentials<br>3. Submission of sample artifacts for compliance testing<br>4. Applicable **NIST Special Publication 800-79** requirements| 1. Annual Audits for the Certification Authorities directly<br>2. Annual Audits of the services and systems used with the Certification Authorities to collect information and manage credentials<br>3. Submission of sample artifacts for compliance testing |
| **FISMA Authorization to Operate** | 1. [NIST SP 800-53 Federal PKI Overlay]({{site.baseurl}}/docs/fpki-overlay-sp-800-53.pdf)<br>2. Additional security controls<br>3. Continuous monitoring<br>4. Government Designated Authorizing Official | N/A |
| **Items to be Requested or Produced** | 1. Audit compliance letters for certification authorities<br>2. Audit Compliance Letters for registration authority components (inclusive of any card management systems)<br>3. Authorization memorandum issued by and signed by the Government Designated Authorizing Official<br>4. Registration Authority Agreements | 1. Audit compliance letters for certification authorities<br>2. Audit compliance letters for registration authority components (inclusive of any card management systems) |

## 3.2 Acquiring PIV-I Services

When contracting either through interagency agreements or commercially sourced PIV-I services, federal agencies may have several choices concerning the extent of the service. As a federally-contracted service storing PII of persons under the authority of the federal agency, all contracts and procurement language must include the requirements to:

* Have an existing FISMA ATO or provisions to obtain and maintain an ATO; and
* Submit to continuous monitoring, inclusive of requirements for penetration testing and vulnerability scanning by the Federal Government

This must be a condition of the contract; contract language should make it clear that failure to comply with FISMA and other security requirements will result in summary termination of the contract.

The System of Records Notice (SORN) should also be taken into consideration. Many agencies should, wherever possible, be able to leverage the SORN associated with the issuance of PIV credentials for PIV-I credentials, since the purpose of PIV-I issuance is within its scope.

## Appendix A: Technical Information

This appendix provides additional technical information in support of the technical requirements. The following table provides a comparison of the requirements for each credential type.

<style type="text/css">
.tg  {border-collapse:collapse;border-color:#9ABAD9;border-spacing:0;}
.tg td{background-color:#EBF5FF;border-color:#9ABAD9;border-style:solid;border-width:0px;color:#444;
  font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{background-color:#EBF5FF;border-color:#9ABAD9;border-style:solid;border-width:0px;color:#444;
  font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-nrix{text-align:center;vertical-align:middle}
.tg .tg-baqh{text-align:center;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
.tg .tg-nrix{text-align:center;vertical-align:middle}
</style>
<table class="tg">
  <thead>
    <tr>
      <th class="tg-nrix"><strong>Category</strong></th>
      <th class="tg-nrix"><strong>Technical Requirements</strong></th>
      <th class="tg-nrix"><strong>PIV</strong></th>
      <th class="tg-nrix"><strong>PIV-I</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="tg-baqh" rowspan="7">Trust</td>
      <td class="tg-0lax">Identity Assurance Level 3</td>
      <td class="tg-nrix">●</td>
      <td class="tg-nrix">●</td>
    </tr>
    <tr>
      <td class="tg-0lax">Authenticator Assurance Level 3</td>
      <td class="tg-nrix">●</td>
      <td class="tg-nrix">●</td>
    </tr>
    <tr>
      <td class="tg-0lax">Favorably adjudicated National Agency Check with Inquiries (minimum) or other Tier 1 investigation</td>
      <td class="tg-nrix">●</td>
      <td class="tg-nrix"></td>
    </tr>
    <tr>
      <td class="tg-0lax">Authentication Certificate</td>
      <td class="tg-nrix">PIV OID on PIV Authentication Certificate</td>
      <td class="tg-nrix">PIV-I OID on PIV-I Authentication Certificate</td>
    </tr>
    <tr>
      <td class="tg-0lax">Content Signing</td>
      <td class="tg-nrix">PIV OID on PIV Content Signing Certificate</td>
      <td class="tg-nrix">PIV-I OID on PIV-I Content Signing Certificate</td>
    </tr>
    <tr>
      <td class="tg-0lax">Card Stock Certified</td>
      <td class="tg-nrix">●</td>
      <td class="tg-nrix">●</td>
    </tr>
    <tr>
      <td class="tg-0lax">PIV Application Identifier (AID)</td>
      <td class="tg-nrix">●</td>
      <td class="tg-nrix">●</td>
    </tr>
    <tr>
      <td class="tg-baqh" rowspan="3">Credential Edge</td>
      <td class="tg-0lax">NIST SP 800-73-4 conformant GUID present in the CHUID</td>
      <td class="tg-nrix">●</td>
      <td class="tg-nrix">●</td>
    </tr>
    <tr>
      <td class="tg-0lax">RFC 4122 conformant UUID required in the GUID data element of the CHUID</td>
      <td class="tg-nrix">●</td>
      <td class="tg-nrix">●</td>
    </tr>
    <tr>
      <td class="tg-0lax">RFC 4122 conformant UUID present in the Authentication Certificate</td>
      <td class="tg-nrix">●</td>
      <td class="tg-nrix">●</td>
    </tr>
  </tbody>
</table>

## Appendix B: Glossary

| Term | Definition |
|:----:|------------|
| Access Control | The process of granting or denying requests to access physical facilities or areas, or logical systems (i.e., computer networks or software applications). See also "Logical Access Control System" and "Physical Access Control System."|
| Authentication | The process of establishing confidence in the identity of users or information systems.|
| Authorization | The process of giving individuals access to specific areas or systems based on their authentication.|
| Biometric | A measurable physical characteristic used to recognize the identity of an individual. Examples include fingerprints and facial images. A biometric system uses biometric data for authentication purposes.|
| Identity Proofing | The process of providing sufficient information (e.g., driver's license, proof of current address, etc.) to a registration authority, or the process of verifying an individual's information that he or she is that individual and no other.|
| National Agency Check with Written Inquiries (NACI)| The basic and minimum investigation required for all new federal employees and contractors, which consists of searches of the OPM Security/Suitability Investigations Index, the Defense Clearance and Investigations Index, the Federal Bureau of Investigation (FBI) Identification Division's name, fingerprint files, and other files or indices when necessary. This investigation also includes written inquiries and searches of records covering specific areas of an individual's background during the past five (5) years.|
| Physical Access Control System (PACS)| Protection mechanisms that limit users' access to physical facilities or areas to only what is appropriate for them. These systems typically involve a combination of hardware and software (e.g., a credential reader) and may involve human control (e.g., a security guard).|
| PIV-I credential | An identity credential that is conformant with the federal PIV Standards for identity assurance and authentication assurance. |
| Public Key Infrastructure (PKI) | A service that provides cryptographic keys needed to perform digital signature- based identity verification, and to protect communications and storage of sensitive data.|

## Appendix C: Acronyms

| Acronym | Definition |
|:-------:|------------|
| CA | Certification Authority |
| CHUID | Card Holder Unique Identifier |
| FASC-N | Federal Agency Smart Credential-Number |
| FIPS | Federal Information Processing Standard |
| GSA | General Services Administration |
| GUID | Global Unique Identification Number |
| HSPD-12| Homeland Security Presidential Directive 12|
| NAC | National Agency Check |
| NACI | National Agency Check with Written Inquiries |
| NFI | Non-Federal Issuer |
| NIST | National Institute of Standards and Technology |
| OID | Object Identifier |
| OMB | Office of Management and Budget |
| OPM | Office of Personnel Management |
| PACS | Physical Access Control System |
| PIN | Personal Identification Number |
| PIV | Personal Identity Verification |
| PIV-I | Personal Identity Verification-Interoperable |
| PKI | Public Key Infrastructure |
| SP | Special Publication |
| U.S.| United States |
| UUID | Universally Unique Identifier |

## Appendix D: Document References

## Policies
1. [HSPD-12: Policy for a Common Identification Standard for Federal Employees and Contractors](https://www.dhs.gov/homeland-security-presidential-directive-12){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
2. [OMB A-130: Management of Federal Information Resources](https://www.cio.gov/policies-and-priorities/circular-a-130/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
3. [X.509 Certificate Policy for the Federal Bridge Certification Authority]({{site.baseurl}}/docs/fpki-x509-cert-policy-fbca.pdf)
4. [X.509 Certificate Policy for the U.S. Federal PKI Common Policy Framework]({{site.baseurl}}/docs/fpki-x509-cert-policy-common.pdf)

## Standards
1. [FIPS 201: Personal Identity Verification (PIV) of Federal Employees and Contractors](https://csrc.nist.gov/publications/detail/fips/201/3/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

## Special Publications
1. [NIST SP 800-37: Guide for the Security Certification and Accreditation of Federal Information Systems](https://csrc.nist.gov/publications/detail/sp/800-37/rev-2/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
2. [NIST SP 800-63: Digital Identity Guidelines](https://csrc.nist.gov/publications/detail/sp/800-63/3/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
3. [NIST SP 800-73: Interfaces for Personal Identity Verification (4 Parts)](https://csrc.nist.gov/publications/detail/sp/800-73/4/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
4. [NIST SP 800-76: Biometric Data Specification for Personal Identity Verification](https://csrc.nist.gov/publications/detail/sp/800-76/2/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
5. [NIST SP 800-78: Cryptographic Algorithms and Key Sizes for Personal Identity Verification](https://csrc.nist.gov/publications/detail/sp/800-78/4/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
6. [NIST SP 800-79: Guidelines for the Authorization of Personal Identity (PIV) Verification Card Issuers (PCI) and Derived PIV Credential Issuers (DPCI)](https://csrc.nist.gov/publications/detail/sp/800-79/2/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

## Footnotes

[^1]: In particular, these requirements are specified in FIPS 201-3 Section 2.1 Control Objectives, related to adjudication of fitness and personnel vetting, and are common minimum personnel assurance for all federal PIV holders.
[^2]: This includes Card Management Systems and any associated software or hardware components used to collect and manage information used in the issuance and lifecycle management for PIV or PIV-I credentials. 
[^3]: The compliance audits may include the Certificate Policies maintained by the Certification Authority which are mapped to the Certificate Policy for the Federal Bridge or the Certificate Policy for the Federal PKI Common Policy Framework.
[^4]: NIST Special Publication 800-87
[^5]: NIST Special Publication 800-79-2



