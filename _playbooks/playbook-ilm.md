---
layout: page
collection: playbooks
title: Identity Lifecycle Management Playbook
pubdate: 2024-06-18
type: Markdown
permalink: /playbooks/ilm/
description: The Identity Lifecycle Management Playbook helps federal agencies understand and plan identity lifecycle management initiatives based on Zero Trust Architecture principles.
sidenav: playbooks
sticky_sidenav: true

version: 1.3
pubdate: June 18, 2024

subnav:
  - text: Executive Summary
    href: '#executive-summary'
  - text: Identity Lifecycle Management 101
    href: '#identity-lifecycle-management-101'
  - text: Stage 1. Creation
    href: '#stage-1---creation'
  - text: Stage 2. Provisioning / Identity Governance Administration (IGA)
    href: '#stage-2---provisioning--identity-governance-administration-iga'
  - text: Stage 3. Deactivation
    href: '#stage-3---deactivation'
  - text: Key Terms
    href: '#key-terms'

---
<!-- Updated by CJB 06-25-2024 -->

<img src="{{site.baseurl}}/assets/logo/logo-gsa.png" width="64" height='64' align="left" alt="U.S. General Services Administration Logo">
<img src="{{site.baseurl}}/assets/logo/logo-cio-round.png" width="64" height='64' align="left" alt="U.S. Federal Chief Information Officer Council Logo"><br><br><br>

The Identity Lifecycle Management Working Group of the Federal Chief Information Security Officer Council ICAM Subcommittee developed this playbook to help federal agencies understand and plan identity lifecycle management initiatives.

<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="v-a1">
      Date: {{page.pubdate}} - Version: {{page.version}}
    </button>
  </h4>
  <div id="v-a1" class="usa-accordion__content usa-prose">
    <table>
      <caption>Identity Lifecycle Management version table</caption>
      <thead>
      <tr>
        <th scope='col'>Version Number</th>
        <th scope='col'>Date</th>
        <th scope='col'>Change Description</th>
      </tr>
      </thead>
      <tr>
        <th scope='row'>1.3</th>
        <td>6/18/2024</td>
        <td>Incorporated Zero Trust elements.</td>
      </tr>
      <tr>
        <th scope='row'>1.2</th>
        <td>12/15/2022</td>
        <td>Minor editorial updates.</td>
      </tr>
      <tr>
        <th scope='row'>1.1</th>
        <td>10/11/2022</td>
        <td>Move 3rd party federation content to the Cloud Identity Playbook federation section.</td>
      </tr>
      <tr>
        <th scope='row'>1.0</th>
        <td>06/30/2022</td>
        <td>Initial Draft.</td>
      </tr>
    </table>
  </div>
</div>

## Executive Summary

The Identity Lifecycle Management (ILM) Playbook serves as a practical guide for federal agencies, offering insights on transitioning from managing access based solely on credentials to managing the entire lifecycle of identities. This includes overseeing associated accounts and credentials tied to each identity, as outlined in [section III of OMB Memo 19-17](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf){:target="_blank" rel="noopener noreferrer" class="usa-link usa-link--external"}.

 *Agencies must employ centralized identity management systems for agency users that can be integrated into applications and common platforms.* --[OMB Memo 22-09](https://zerotrust.cyber.gov/federal-zero-trust-strategy/#identity){:target="_blank" rel="noopener noreferrer" class="usa-link usa-link--external"}.

Executive Order 14028, *Improving the Nation's Cybersecurity*, paved the way for the creation of OMB 22-09 guidance, known as the Federal Zero Trust Strategy. This guidance requires federal departments and agencies to adopt a Zero Trust Architecture (ZTA) and implement phishing-resistant authentication methods. NIST Special Publication 800-207 defines the five pillars of ZTA, highlighting the Identity Pillar as its core foundation. This framework emphasizes the importance of shifting the focus from managing credentials to managing identities across agencies and departments.

This update to the ILM Playbook will address important drivers of change that impact agency ILM strategies, policies, and capabilities.
+ new derived PIV (DPIV) and Federated PIV requirements and terminology
+ current best practices in deploying phishing resistant authentication for Pre-PIV and No-PIV use cases
+ shift from Continuous Diagnostics and Mitigation (CDM) dashboard reporting capabilities to agency CDM ICAM tools
+ normative and informative guidance for hybrid cloud identity solutions and ICAM best practices
+ focus on agency user journeys to reduce waste, improve user experiences, and improve workforce accountability

This version of the ILM Playbook expands on the Joiner-Mover-Leaver framework by providing detailed guidance on how agencies can implement an effective identity lifecycle approach. It outlines practical strategies and mechanisms for leveraging the tools commonly found in enterprise identity management systems (IdMS), including ICAM tools provided through the CDM program. 

The updates to the ILMplaybook defines ILM as stages of an identity from creation to retirement from a ZTA perspective and how the ILM is driven by ZTA principles described as the Identity Governance Administration, of Creator, Provisioning, Deactivation process.

Importantly the updates in this document also include the alternatives to PIV with NIST approved non-PIV phishing resistant credentials such as Fast Identity Online (FIDO) and capturing additional information in the MUR.

The intent of implementing an identity lifecycle management (ILM) program is to ensure an agency has visibility into all identities and their associated access. 

Some typical outcomes of an ILM program are:

1. Only active employees can access federal resources.
2. All user types are verified and use phishing resistant authentication to access federal resources.
3. Agency accounts and credentials are managed according to well-understood policies.
4. Employees get rapid access to resources during on-boarding.
4. Employees can't access resources if they haven't completed cyber security awareness training, or it is expired.
5. Users lose access when they don't need it according to agency policy.
6. Internal controls compliance and audits are simpler or automated.
7. ILM tools support rapid response actions for security operations center personnel during a breach.

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Agency Goal: M-22-09 Action Plan</h4>
    <p class="usa-alert__text">
      Per OMB Memo 22-09, agencies should have a plan to centralize identity management and access control for all users, implement remote identity proofing, enforce phishing resistant authentication for enterprise users, and offer a phishing resistant option for public users. Agencies must create and maintain a master user record (MUR) of all agency users at the enterprise level. This updated ILM playbook helps agencies leverage ILM to advance ICAM and Zero Trust goals.
    </p>
  </div>
</div>

Implementing ILM advances support for phishing-resistant authenticators as outlined in the identity section of [OMB Memo 22-09](https://zerotrust.cyber.gov/federal-zero-trust-strategy/#identity){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. ILM directly supports a Zero Trust architecture as described in [NIST SP 800-207](https://csrc.nist.gov/pubs/sp/800/207/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} by supporting the principle of least privilege. 

The [Zero Trust Maturity Model 2](https://www.cisa.gov/sites/default/files/2023-04/CISA_Zero_Trust_Maturity_Model_Version_2_508c.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} calls for "consolidation and secure integration of identity stores" at the "advanced" maturity level, and "enterprise-wide identity integration" at "optimal." 

### Actions

The ILM playbook describes an agency ILM program implementation sequence:

1. Document the purpose and goals of identity lifecycle management in an agency policy.
2. Architect the agency solution as part of the agency Identity Management System (IdMS).
3. Create a master user record (MUR) that centralizes digital identity data, including identifiers, attributes, entitlements, accounts, credentials, and other information.
4. Integrate identity lifecycle management into agency enterprise services.

This playbook is designed for identity program managers and enterprise and application architects interested in advancing identity management. Agencies are encouraged to tailor this playbook to fit their use cases. Because identity capabilities are critical and pervasive to resilient federal functions, other federal officials may find value in this playbook.

### Key Terms

Below are key terms used throughout this Playbook. A linked term denotes it is an official term from a federal policy, NIST Glossary, or a NIST publication. An unlinked term is defined for this document.

- [Attribute](https://csrc.nist.gov/glossary/term/attribute){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - A quality or characteristic used to describe a digital identity (e.g., user type, employment status, work role).
- Authoritative Attribute Source - A repository or system that contains attributes about an individual and is considered the primary or most reliable source for this information. This is also referred to as an authoritative data source.
- [BEHAVE (CDM)](https://www.cisa.gov/sites/default/files/2023-08/CDM_Tech%20Volume2_v2.5.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}.  The BEHAVE (manage security-related behavior) capability ensures that an authorized user exhibits the appropriate behavior for their role. For CDM, appropriate security-related behavior is defined as actions that have been assigned, explained, and agreed to by the user via user agreements, training, job requirements, or similar methods. This capability provides an agency with insight into risks associated with non-conformance with policies for accessing systems and data by authorized users.
- [Card Management System](https://pages.nist.gov/FIPS201/FIPS201.html#s-c){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - The system that manages the lifecycle of a PIV Card application.
- [Coupling](https://csrc.nist.gov/pubs/sp/800/217/fpd){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. Indicates a logical connection established between an IdP and an IdP subscriber's PIV Identity Account maintained by the user's home agency. Coupling enables the IdP to verify the user's real-time PIV status and the status of any PIV or DPIV credentials bound to the user.
- [CRED (CDM)](https://www.cisa.gov/sites/default/files/2023-08/CDM_Tech%20Volume2_v2.5.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. The CDM CRED (credentials and authenticators) capability ensures that account credentials are assigned to and are used only by authorized users or services to access agency systems, services, and facilities. CRED binds a type of credential or authenticator to an identity established in TRUST with a level of assurance and is used to grant logical access. 
- [Derived PIV Credential](https://pages.nist.gov/FIPS201/FIPS201.html#s-c){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - A credential issued based on proof of possession and control of a PIV Card. Derived PIV credentials are typically used in situations that do not easily accommodate a PIV Card, such as in conjunction with mobile devices.
- Alternative Phishing Resistant Credential - A credential that is equivalent to a PIV per NIST xAL requirements issued to identies where PIV is not accessible, mobile, interim, external, use cases.
- [Federal Enterprise Identity](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - Refers to the unique representation of an employee, a contractor, an enterprise user, such as a mission or business partner, a device, or a technology that a federal agency manages to achieve its mission and business objectives. This is also known as a Workforce Identity.
- [FIDO2](https://fidoalliance.org/fido2/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - an open specification for phishing resistant authentication consisting of two separate specifications: WebAuthn, specified by the World Wide Web Consortium (W3C), and Client to Authenticator Protocol (CTAP), specified by the FIDO Alliance.
- [Federation](https://csrc.nist.gov/glossary/term/federation){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - A process that allows for the conveyance of identity and authentication information across a set of networked systems.
- Federated Credential - A phishing resistant credential that can be used to access an IDP after compliantly registering with the relying party
- FIDO - Fast Identity Online, a NIST approved alternative phishing resistant credential where PIV may not be accessible, use case such as, mobile, external, interim user, lost of expired PIV
- [Home Agency IdP](https://csrc.nist.gov/pubs/sp/800/217/fpd){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. The officially sanctioned identity provider of the home agency for a PIV identity account. 
- [Identifier](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - a unique label used by a system to indicate a specific entity, object, or group. 
- [Identity](https://csrc.nist.gov/glossary/term/identity){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - The set of physical and behavioral characteristics (attributes) by which an individual is uniquely recognizable. A digital representation of attributes with one or more identifiers is a "digital identity".
- Identity Lifecycle Management - a systematic approach to creating, reading, updating, and deleting identity data across accounts according to specified rules, or policies. 
- [Identity Management System (IDMS)](https://pages.nist.gov/FIPS201/FIPS201.html#s-c){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - One or more systems or applications that perform Identity Lifecycle Management functions such as identity proofing, registration, and issuance processes.
- Identity Governance and Administration (IGA) System - A centralized source used to manage entitlements and account provisioning to one or more systems. The Account Management System may also refer to IGA.
- [Identity Proofing](https://pages.nist.gov/FIPS201/FIPS201.html#s-c){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - The process by which information is collected, validated, and verified about a person to issue credentials to that person.
- [Identity Provider (IdP)](https://csrc.nist.gov/pubs/sp/800/217/fpd){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. The party that verifies the credentials of a subscriber account and issues assertions to a relying party based on that account for federation. 
- Master User Record (MUR) - 1. An agency's complete and authoritative repository of digital identity records for each enterprise user, including accounts, personas, attributes, entitlements, and credentials within a defined scope. 2. The CDM MUR capability of the same name.
- No-PIV. The short title of a federal ICAM use case that refers to authentication scenarios for federal information system subscribers that are not eligible for a PIV credential according to [OPM Credentialing Standards Procedures for Issuing Personal Identity Verification Cards under HSPD-12 and New Requirement for Suspension or Revocation of Eligibility for PIV Credentials](https://www.opm.gov/suitability/suitability-executive-agent/policy/cred-standards.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}.
- Passkeys - A passkey is a consumer-friendly term for a discoverable FIDO credential.
- Persona - A digital identity unambiguously associated with a single person or non-person entity (NPE). A natural person (or NPE) may have multiple personas, each managed by one or more organizations.
- Pre-PIV. The short title of a federal ICAM use case that refers to authentication scenarios for personnel that are eligible for a PIV credential and require access to federal information systems to work, but have not yet been issued a PIV credential.
- [PRIV (CDM)](https://www.cisa.gov/sites/default/files/2023-08/CDM_Tech%20Volume2_v2.5.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - The PRIV (privilege management) capability ensures that privileges for logical access are assigned to authorized people or accounts that require authorized access for job functions. This capability is dependent on the existence of a set of attributes that denote roles or characteristics that require or restrict specific privileges per policy. This capability provides the agency with insight into risks associated with authorized users being granted excessive privileges to facilities, systems, and information at any level of sensitivity. PRIV also has two sub-capabilities, Identity Lifecycle Management (ILM) and Privilege Access Management (PAM). ILM enables automation throughout the IDAM lifecycle by adjusting information in 
connected repositories to address changing positions and responsibilities.
- [Public Identity](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - The unique representation of a subject that a federal agency interacts with, but does not directly manage, to achieve its mission and business objectives.
- [PIV Identity Account](https://pages.nist.gov/FIPS201/FIPS201.html#s-c){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - The logical record containing credentialing information for a given PIV cardholder. This is stored within the issuer’s identity management system and includes PIV enrollment data, cardholder identity attributes, information regarding the cardholder’s PIV Card, and any derived PIV credentials bound to the account.
- Orphan Account - A system account that is not linked to a digital identity or is unmanaged.
- [Simple Cross-Domain Identity Management (SCIM)](https://datatracker.ietf.org/doc/rfc7642/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - a suite of specifications that provides a [protocol](https://datatracker.ietf.org/doc/rfc7644/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} and [core schema](https://datatracker.ietf.org/doc/rfc7643/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} for enabling identity management functions across domains. SCIM is typically referred to as a "provisioning API".
- Subscriber - a party who has received a credential or authenticator from a Credential Service Provider.
- System of Records(SOR) - a collection of records that contain information about individuals and are under the control of an agency. The records can be retrieved by the individual’s name or by an identifying number, symbol, or other identifier.
- System of Records Notice (SORN) - in [OMB Circular A-108](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A108/omb_circular_a-108.pdf), a SORN is an agency-published notice in the Federal Register that identifies a specific system of records, the purpose(s) of the system, the authority for maintenance of the records, the categories of records maintained in the system, the categories of individuals about whom records are maintained, the routine uses to which the records are subject, and additional details about the system as required in the [Privacy Act of 1974, 5 U.S.C. 552a](https://www.govinfo.gov/content/pkg/USCODE-2023-title5/pdf/USCODE-2023-title5-partI-chap5-subchapII-sec552a.pdf), as amended.
- [TRUST (CDM)](https://www.cisa.gov/sites/default/files/2023-08/CDM_Tech%20Volume2_v2.5.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. The CDM TRUST (manage trust in people granted access) capability reduces the probability of loss in availability, integrity, and confidentiality of data by ensuring that only properly vetted users are given access to credentials and systems commensurate with their role. This includes elevated privileges and special security roles. The vetted trust level is properly monitored and renewed, per agency policies and applicable statutes.
- [Vetting](https://www.federalregister.gov/documents/2017/01/23/2017-01623/amending-the-civil-service-rules-executive-order-13488-and-executive-order-13467-to-modernize-the){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - The process by which covered individuals undergo investigation, evaluation, and adjudication of whether they are, and remain over time, suitable or fit for federal employment. This includes eligibility to occupy a sensitive position, access to classified information, serve as a non-appropriated fund employee or a contractor, serve in the military, or be authorized to be issued a federal identity credential. This ensures individuals continue to meet the applicable standards for the position for which they were favorably adjudicated.

### Audience

The primary audience is an agency Identity, Credential, and Access Management (ICAM) Program Manager. The table below lists secondary audience members and how to engage them.

**Table 1: Stakeholder Table**

| **Stakeholder**         | **Stakeholder Type** | **Engagement Point**                                                          |
|-------------------------|----------------------|-------------------------------------------------------------------------------|
| Agency ICAM Governance  | Governance Body      | Reduce risk through lifecycle management and meet the intent of OMB Memos 19-17 and 22-09. |
| Application Owners      | Office               | ICAM service consolidation and modernization to identity-centric security processes. |
| Human Resources         | Office               | Authoritative attribute source.                                                |
| Security/Vetting        | Office               | Eligibility, visibility, audit, reporting, and authoritative attribute source.  |
| Training                | Office               | Authoritative attribute source.                                                |
| Service Desk            | Office               | Support Staff                                                                  |
| User                    | Office               | All user types doing business with federal government                          |



### Disclaimer

The Identity Lifecycle Management Working Group of the Federal Chief Information Security Officer Council ICAM Subcommittee developed this Playbook. U.S. Federal Executive Branch agencies can use this Playbook to plan identity lifecycle activities and services related to the FICAM Architecture Services Framework. This Playbook is not official policy, mandated action, or provides authoritative information technology terms. It includes best practices to supplement existing federal policies and builds Office of Management and Budget Memorandum 19-17, and existing FICAM guidance and playbooks. Subject areas with intersecting scopes, such as credentialing standards, human resources processes, and Continuous Diagnostic and Mitigation (CDM) are considered only to the extent that they relate to ICAM services delivered in a cloud service model. Privileged access management (e.g., superusers, domain administrators) is out of scope for this Playbook.

## Identity Lifecycle Management 101

### ILM: A Strategic Approach to Data Protection and Business Accountability

Identity Lifecycle Management (ILM) is a cornerstone of federal cybersecurity, ensuring that digital identities are effectively managed to safeguard sensitive government data and systems. Just as human identities evolve over time—from onboarding to departure—digital identities follow a similar lifecycle. Employees undergo identity proofing and vetting, gain access to systems, receive promotions, and eventually leave the organization. ILM provides a structured framework for managing these transitions, encompassing the creation, proofing, provisioning, aggregation, maintenance, and deactivation of digital identities within an agency’s enterprise Identity, Credential, and Access Management (ICAM) system.  

ILM is also central to implementing internal management controls in agency missions and lines of business (LoB). ICAM implementation is an integral business activity enabler by imposing integrity and accountability on information systems access and transactions. A successful ILM strategy should align to internal management control priorities and oversight. Agency managers can leverage ILM and IGA to improve governance and accountability of agency functions across lines of business (LoB) and distributed information systems.

Federal internal management control normative and informative guidance is included in [OMB Memorandum 16-19](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2016/m-16-17.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, which includes OMB Circular A-123 as an attachment, and the GAO report [Standards for Internal Control in the Federal Government](https://www.gao.gov/products/gao-14-704g), also known as the "GAO Greenbook." 

This Playbook empowers agencies to shift their perspective from managing credentials to managing identities holistically. By focusing on the lifecycle of identities, agencies can better align with the requirements outlined in [Section III of OMB Memo 19-17](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} and the federal government's [Zero Trust Architecture strategy in OMB Memo 22-09](https://www.whitehouse.gov/wp-content/uploads/2022/01/M-22-09.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}.  

### Why Identity Lifecycle Management Matters  

Identity Lifecycle Management is a strategic enabler for federal agencies to meet mission-critical goals. By managing identities holistically, agencies can:  
- **Enhance Security**: Reduce the risk of fraud from unauthorized access and insider threats.  
- **Streamline Operations**: Automate access for workers to reduce wasted days or weeks of waiting for manual, paper-based processes.
- **Support Zero Trust**: Align identity management practices with the federal Zero Trust strategy to ensure secure, least-privilege access.  
- **Accelerate Adaptation**: Increase government responsiveness to mission needs and reduce waste.  

This Playbook is a roadmap for agencies to modernize their approach to identity management and build dynamic mission capabilities on a resilient cybersecurity foundation.

###  Threats
Effective identity governance within an ILM program can mitigate the impacts of [prevalent IAM threats]():
+ **Phishing, spear phishing, or social engineering**: Identity governance cannot directly prevent these attacks, but can reduce the potential impact of user account compromise using these techniques. A compromised account with excessive privileges can do more damage than one whose privileges are contained. In addition, Segregation of Duty controls enforced through identity governance can ensure that compromising a single account does not provide access to key business processes and data.
+ **Insider threats**: As with phishing and other account compromise threats, identity governance cannot prevent insiders from abusing their privileges, but it can reduce the impact when these events happen if they do not have excessive privileges. 
+ **Creating accounts to maintain persistence**: Attackers who compromise privileged accounts may attempt to create additional user accounts to maintain access to a system even if the initially compromised accounts are revoked or disabled. Identity governance systems monitor account creations and can help an organization identify unauthorized account creation.
+ **Privileged accounts**. Privileged accounts require additional monitoring and control and should be separately managed using a privileged access management (PAM) solution with strong identity governance. PAM should include just-in-time provisioning, in which users are temporarily granted privilege access in order to complete a specific task.

This playbook has two distinct sections.

1. The first section is an overview of the identity lifecycle. It explains ILM processes and how they address agency challenges and goals.

2. The second section describes plays that implement ILM within an agency.

### Identity Lifecycle Process

Identity lifecycle management is the evolution of an identity from creation to deletion. The lifecycle management process consists of three distinct phases, which match the basic (C)reate, (R)ead, (U)pdate, and (D)elete functions of software applications on persistent storage. 

**Figure 1: Identity Lifecycle Process**

<img src="{{site.baseurl}}/assets/playbooks/ilm-process-tree.png" alt="Diagram illustrating the three phases of the Identity Lifecycle Process: Creation, Provisioning, and Deactivation" width="800">

### **Stage 1 - Creation**

The creation stage establishes the identity in one or more authoritative identity repositories by completing identity proofing and verification. When creation and enrollment occurs through distinct transactions, agencies should use biometric capture and match to ensure all enrollment activities are performed with the same user.

Agencies may leverage identity creation outcomes--attributes and credentials--from the employee's hiring action to accelerate the creation phase. Hiring officials should verify the user's identifiers and attributes before making an offer of employment. Agencies should verify identities as a part of in-person and remote encounters during hiring and on-boarding, and verify authenticators or bind additional authenticators during enrollment. 

This stage includes identity document validation, identity verification, remote proofing or in-person proofing, biometric enrollment, attribute verification, and status determination. Vetting is conmpleted, where required, through an adjudicated background investigation.  

Agencies that have No-PIV and Pre-PIV use cases should leverage HSPD-12 enrollment capabilities and standards to meet non-PIV use cases. Creation for non-PIV subscribers should include biometric enrollment.

Agency enrollment records should be consistent with [NIST SP 800-156](https://csrc.nist.gov/pubs/sp/800/156/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}.

### **Stage 2 - Use: Read/Update**

During this phase, "use" of identity records corresponds to distinct ILM functions:
+ *provisioning*   creates a new resource account or a subscriber account at a credential service provider. 
+ *syncing* polls attribute sources for changes and propagates changes to connected accounts according to governance rules.
+ *reviewing* access can also be referred to as "recertifying" or "auditing". Access reviews revalidate subscriber and resource account status based on access policy rules. Recertification results may prompt manager action or, if automated, suspend that user's access.

Provisioning additional accounts or entitlements can be implemented using a "birthright" policy--authorization to certain organizational resources is granted based on organizational membership. Birthright entitlements are easily automatable. Typical accounts provisioned in this way include network logon, productivity suite with email, VPN or SASE access, and enterprise authentication service/single sign-on. Agencies that are implementing the Pre-PIV and No-PIV use cases can leverage birthright provisioning during enrollment and bind the FIDO2 authenticator as a part of the encounter. 

Provisioning can also be demand-driven by users or their supervisors, through service desk tickets and workflows, as an example. Low-code user journey tools can also help orchestrate multi-step self-service flows to improve the user experience and guide users through flows tailored to their business units, organizational responsibilities, and access needs.

Provisioning supports additional access requirements as users take on responsibilities.

Syncing refers to updating user profiles across their resource and subscriber accounts based on changes in authoritative data. Syncing helps ensure attributes and access are updated and consistent across applications and services. When there is confidence about updated data, application providers can leverage attributes more dynamically to enhance least privilege within their applications.

Reviewing access is critical to user accountability. Access reviews are critical to compliance for sensitive transactions and verifying internal controls. Access reviews also help reinforce leader and manager control over the activities they are responsible for.

IGA tools typically include analytic capabilities to identify unmanaged accounts. Unmanaged accounts may indicate adversary activity or poor local account controls. Flagging these accounts for review is important. Agencies may elect to automate locking accounts which suspicious activity to allow for mitigation. 

Agencies that previously leveraged the CDM Dashboard to implement CRED, BEHAVE, TRUST, and PRIV capabilities for privileged and general users can configure their IGA tools to achieve consistent outcomes. Doing so will be described in more detail in the tool portion of this playbook.

### **Stage 3 - Deactivate: Delete**

Deactivation - Deactivate or remove identities associated with a user record. IGA Processes associated with deactivation include suspension, archive, or deletion of accounts and credentials. IGA tools implement variations of "delete" can be a "hard" or "soft" delete. Consider requiring a human user action to perform a hard delete, and implement second-person review to confirm it. 

Agencies will need to review their privacy, record retention, and log retention requirements when defining the "end" of identity lifecycles in agency ILM policies and when configuring IGA tools. 

With the Executive Order 14028 that enabled OMB M 22-09 agencies should centralize their identity management, credential management, and access management with services that leverage the identity access governance process. In doing so, agencies then can enhance their security posture to the greatest extent possible and centrally implement alternate phishing resistant authenticators support in their enterprise identity management systems, so that these authenticators are centrally managed and connected to enterprise identities.” – As the identity pillar, ZTA foundation is set in place for MB 22-09 agencies can then start to create their Master User Record (MUR) with the intent to implement IGA across the enterprise, set all users to required identity management and zero trust principles.

### **Figure 2: Core Zero Trust Logical Components**

<img src="{{site.baseurl}}/assets/playbooks/ilm-zero-trust-tree.png" alt="Flowchart showing how user accounts and attributes from various sources are combined into a single Master User Record for access management." width="800">

This playbook will move into the section for implementing identity lifecycle management leveraging the Master User Record.

A key element of lifecycle management is the concept and provisioning of a master user record. The MUR holds the identity attributes that are leveraged in the ILM. The attributes make the identity and are the principal function of the IGA. The identities in the MUR are required for our CDM agency reporting however, agencies may add additional logic to MUR and capture additional information e.g., the type of user, type of credential, expiration dates and other reporting factors that trigger the IGA for the purpose of alternative identities and credentials outside of federal employees, contractors and PIV.

A Master User Record is a unique representation of a user’s accounts, personas, attributes, entitlements, and credentials within an organization.

**Figure 3: Account Aggregation Process to Create a Master User Record**

<img src="{{site.baseurl}}/assets/playbooks/ilm-account-aggregation.png" alt="A two-pane diagram. The left pane shows three accounts for the same user that are treated as separate accounts. The right page shows the same three accounts that are connected to the same user through a master user record." width="800">

A master user record aggregates user accounts, attributes, entitlements, and issued credentials to understand in a single view the access and authorization of a specific user. Within the DHS Continuous Diagnostics and Mitigation (CDM) data model, a Master User Record contains aggregated attributes from multiple authoritative sources. The below table is an overview of authoritative sources, the object types, and attributes collected.

**Table 2: Data Elements in the DHS CDM Master User Record**

| **Authoritative Attribute Source** | **Object Type** | **Attributes Collected** |
|-----------------------------------|-----------------|--------------------------|
| Agency HR                         | Role            | Job Title, Department, Component, Location, Manager, User Type (Gov, Contractor, Non-Person, Other) |
| Agency HR                         | Status          | Status (Active, Leave Type, Inactive, Suspended) |
| Agency IDMS                       | User            | Unique Identifier (UserID), Full Name, Email |
| Agency IDMS                       | CRED            | Credential Types Issued |
| Agency IDMS                       | Accounts        | List of accounts associated with this user |
| Agency IDMS                       | PRIV            | Privilege Type, Status, Associated System |
| Agency IDMS                       | Entitlement     | Entitlement Type |
| Vetting System                    | TRUST           | Eligibility, Status, Type of vetting completed |
| Training System                   | BEHAVE          | Security Training Status, Training Types |


Vetting incorporates all steps in the end-to-end process, including:

1. Determine the appropriate level of investigation needed for the position.
2. Validate whether the individual has been investigated to the necessary level and if so, if that investigation was favorably adjudicated.
3. Collect background information via standard forms.
4. Conduct the investigation.
5. Adjudicate the investigative information obtained.
6. Provide administrative due process or other procedural rights.
7. Perform ongoing assessments (to include continuous vetting or reinvestigation) to ensure that individuals continue to meet the applicable standards for the position for which they were favorably adjudicated.

For specific information on how DHS CDM created a Master User Record including which tools they’ve used, go to the [CDM document repository on Max.gov](https://community.max.gov/download/attachments/1843519190/CDM-ARCH-2017-01.1.1-MUR-FUNCT-DESCR%2012082017.pdf?version=1&modificationDate=1568732697362&api=v2){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. A master user record is most often created using either a virtual directory, identity governance and administration (IGA) tool, or potentially a Single Sign-On tool if it also supports a virtual directory capability.

### Managing Identity Lifecycle vs Managing Credential Lifecycle

A key theme in OMB Memo 19-17 is for federal agencies to shift the focus from managing the lifecycle of credentials to managing the lifecycle of identities. What does this mean? The main focus of this statement is for federal agencies to create a centralized and agile identity and access management system that leverages attributes for fine-grained authorization rather than based on a credential. This focus shift will help agencies achieve an enterprise ICAM system that is agile to support technology modernization. Examples of shifting the operating model include the following.

**Table 3: Identity-Centric Versus Credential-Centric**

| **Identity-Centric** | **Credential-Centric** |
|----------------------|------------------------|
| Enable Single Sign-On for agency applications | Manage authentication at each individual application. |
| Federate application for external partner access. | Application-specific authentication using a PIV card or Username and Password. |
| Support a variety of phishing-resistant authenticators with a path toward a total passwordless architecture. | Only support PIV card authentication or Username and Password as a backup. |
| Leverage attributes aggregated through a MUR for fine-grained authorization. | Leverage attributes only from a PIV Card for authorization. |

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Myth Busted - A PIV Card is my only option</h4>
    <p class="usa-alert__text">
      While an employee using PIV is the ultimate security goal, what happens when a PIV is either not available or not compatible with the access requirements? Employees lose PIV cards and it may take days, weeks, or months for an employee to receive their new or replacement PIV. An agency should have a phishing-resistant alternative when a PIV card is not available. Allowing username and password as a backup option should not be the default policy exception.
    </p>
  </div>
</div>

### Phishing-Resistant Authenticator Binding

A PIV card is the result of identity proofing/vetting. After identity proofing and initial identity vetting are complete (to include interim eligibility through favorable review of fingerprint results and initiation of required investigation), a human identity is bound to a PIV card through the public key infrastructure certificate issued on the PIV smart card. The smart card is bound to the digital identity in an agency’s Master User Record and enterprise identity management system. This can then be provisioned to other directories, applications, physical access control systems, and single sign-on systems. Without the binding, the PIV card to these directories and applications is just a physical identification badge. The same process to bind a PIV to a digital identity is the same process an agency can use to bind other PKI and Non-PKI Derived PIV credentials. [Federal Information Processing Standard (FIPS) 201-3 section 2.10](https://pages.nist.gov/FIPS201/FIPS201.html#s-2-10){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} states the following on Derived PIV credentials.

1. Binding and issuing of Derived PIV credentials shall use valid PIV Cards to establish cardholder identity.
2. Derived PIV credentials shall meet the requirements for Authenticator Assurance Level (AAL) 2 or 3 specified in NIST Special Publication 800-63.
3. Derived PIV credentials shall be bound to the cardholder’s PIV identity account only by the issuing department or agency responsible for managing the PIV identity account in the agency’s enterprise identity management system.

Derived PIV credentials are not embedded in the PIV card, but are stand-alone credentials integrated into a variety of devices or platforms. This binding of multiple Derived PIV Credentials is possible through creating a Master User Record. These Derived PIV credentials can include a stand-alone Fast ID Online (FIDO) 2 using Web Authentication (WebAuthN) mentioned in OMB Memo 22-09.

The most common way to integrate non-PKI-derived credentials is through a modern Single Sign-On tool or operating system that supports FIDO2 or WebAuthN. Derived PIV credentials play an important role in environments where a smart card is not cost effective or supported such as chrome operating system, mobile devices, and secure offices. Per [OPM, December 2020 guidance](https://www.opm.gov/suitability/suitability-executive-agent/policy/cred-standards.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} if the PIV credential is suspended or revoked, any associated derived credentials must also be suspended or revoked.

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Myth Busted - This authenticator is not HSPD-12 or FIPS 201 compliant</h4>
    <p class="usa-alert__text">
      HSPD-12 identifies four criteria for secure and reliable forms of identification. FIPS 201 outlines the criteria to issue a PKI-based smart card credential. Agencies use One-Time Pin tokens and One-Time PIN mobile applications while they migrate to a phishing-resistant option. Agencies may make a risk decision to use a variety of phishing-resistant authenticators like PIV or other PKI or and non-PKI FIDO certified phishing-resistant authenticators.
    </p>
  </div>
</div>

## Shift From Managing Credentials to Managing Identities

This playbook intends to help agencies achieve OMB Memo 19-17 outcomes to shift the focus operating model from managing access based solely on credentials to managing the lifecycle of identities and the appropriate job functions and roles as they evolve over time in an agency or the federal government. The [Identity Management services in the Federal ICAM architecture](https://www.idmanagement.gov/arch/#services-framework-and-service-descriptions) include Creation, Identity Proofing, Provisioning, Maintenance, Identity Aggregation, and Deactivation. These services are collectively known as Identity Lifecycle Management (ILM).

Adhering to Zero Trust principles, automated and centralizing the ILM services we can leverage our IGA to remove access from the identity at the enterprise level and specific levels and accounts.

**Figure 4: ILM Automation**

<img src="{{site.baseurl}}/assets/playbooks/ilm-automation-arrow-chart.png" alt="Flowchart demonstrating the automation process within Identity Lifecycle Management, highlighting the integration of IGA and master user records." width="800">

### **ILM Journey**

### **Document the Process in an Agency Policy**

Document an agency policy to identify the roles and responsibilities required to implement an identity lifecycle management process. It is a good practice to coordinate the document through the agency’s ICAM governance body to ensure all interested stakeholders are aware of the initiative and their respective responsibilities. This document should complement or be included in the agency’s existing ICAM policy. For more information on ICAM program management or the ICAM governance body, see the [ICAM Program Management Playbook](https://www.idmanagement.gov/university/pm/#program-governance-and-leadership) or the [ICAM Governance Framework](https://www.idmanagement.gov/docs/playbook-identity-governance-framework.pdf). The agency policy should include the following elements.

1. Outline the purpose of implementing ILM.
2. The roles and responsibilities are mapped to the authoritative attribute source. Such as:
    1. Training Office to gather security training status.
    2. Security/Vetting Office to gather PIV eligibility status.
    3. HR Office to gather employment information status.
    4. Application Owners to identify entitlements that are appropriate to a role and assigned to a user.
    5. Identify other offices as needed.
    6. Assign credentials
3. Specific steps or actions for roles at each step of the ILM Create - Provision - Deactivate process that aligns with the FICAM architecture identity management services.
4. Agency or government references.
5. A point of contact.

An agency policy ensures an agency-wide commitment to implementing and operating an identity lifecycle management process.

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Myth Busted - We don’t need a specific policy for Identity Lifecycle Management</h4>
    <p class="usa-alert__text">
      It is true an agency doesn’t need a specific policy for ILM, but either having a policy or integrating lifecycle management into your agency policy ensures a consistent approach with executive leadership support. Without leadership support, your ILM initiative may not achieve enterprise-wide adoption.
    </p>
  </div>
</div>

### Architect the Solution

The solution is how your agency will implement ILM. Most solutions are based on two technologies.

1. Virtual Directory - A virtual directory is a specific type of identity directory that aggregates data from multiple data sources. An Enterprise Identity Store is an example of a virtual directory. Data sources include multiple Active Directory instances, application directories, cloud directories, and other relational databases. A virtual directory leverages a combination of Lightweight Directory Access Protocol (LDAP), Application Programming Interface (API), or System for Cross-domain Identity Management (SCIM) to aggregate data. A virtual directory is often necessary for large organizations that have user directories operated across multiple operational components or divisions. Some Single Sign-On tools, which perform access management, may also support a virtual directory capability.
2. Identity Governance and Administration (IGA) - An IGA tool inventories, analyzes, and reports on access and entitlements within an enterprise. It has virtual directory features to aggregate identity information from multiple other directories. By integrating with authoritative sources and applications an IGA tool can report on who has access, what they can access, and why they have access. An IGA tool is a primary mechanism to perform access reviews. It can be a stand-alone tool or part of an IDMS suite.

Each tool has a distinct purpose. Your agency should consider your overall ICAM architecture to understand the cost, overlapping capabilities, and talent necessary to implement and maintain an ILM capability.

**Figure 5: DHS CDM Master User Record Architecture**

<img src="{{site.baseurl}}/assets/playbooks/ilm-cdm-mur.png" alt="Diagram showing the Department of Homeland Security's Continuous Diagnostics and Mitigation (CDM) Master User Record architecture." width="800">

### Create the Master User Record

An authoritative attribute source is a repository or system that contains one or more attributes about a digital identity and is considered the primary or most reliable source for this information. For example, the most reliable source for an employee status attribute (active, leave, suspended, deactivated) is usually in a human resources system. The first step in identifying authoritative attribute sources is understanding what attributes are needed within your agency. This data analysis and collection process may include:

- Agency Vetting System - Contains investigative and adjudicative results on suitability or fitness for federal employment, eligibility to occupy a sensitive position, eligibility for access to classified information, and eligibility for a federal identity credential (e.g., PIV) and include the NIST 800-63r4 Alternative credential of authentications that feed into the IGA. Consult your Security/Vetting office on IT integration planning and implementation with ILM processes .
- Credential Management System - An agency’s card management system that assigns PIV, Tokens, and other credential types.
- Application Analysis - Conducting an internal application analysis from the [Single Sign-On Playbook](https://www.idmanagement.gov/playbooks/sso/#step-2-plan-application-integration) to identify which attributes are used across which applications. For example, employee access is dependent on current and complete IT security training. The security training attribute is most likely in the agency’s training system, but specific to application access.

These are sources that you use to create a digital identity. The attributes are what you pull from the authoritative sources to add to that digital identity.

**Figure 6: Example of an Orphan Account**

<img src="{{site.baseurl}}/assets/playbooks/ilm-orphan-account.png" alt="Illustration depicting an orphan account scenario where an account is active but no longer associated with a current employee or application." width="800">

To properly implement attribute changes, you should identify authoritative data sources that drive how the attribute change is implemented and are shared with connected systems. However, if there is not a process in place to drive the use of the authoritative data sources, the process will be inefficient and may result in vulnerabilities, like excess, “orphaned” accounts. An orphaned account is a potential risk because it is either unmanaged, not owned, or not linked to a digital identity.

An example of an orphaned account includes active employee accounts where the employee no longer works for the organization. Another example is a Microsoft service account for an application that no longer exists. It is recommended to keep a list of identity data that is available, know where it originates, and what systems are authoritative in that way. The most common pattern to integrate attributes into an ILM tool is based on connection methods of an authoritative attribute source.

- Legacy and on-premises applications most likely support LDAP.
- Cloud applications most likely support an API or SCIM.

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">No Orphaned Accounts</h4>
    <p class="usa-alert__text">
      Agencies should focus on identifying and reducing the number of orphaned accounts and especially orphaned accounts with privileged access.
    </p>
  </div>
</div>

The main benefits of a master user record include:

1. A single view of all digital identities within an agency.
2. Identify users by vetting status, credential type, training status, privileged, and non-privileged accounts.
3. Aid in cyberstat reporting for ICAM questions.
4. A foundational element to implement more mature identity processes when integrated with other agency systems such as access management and information technology service management (ITSM).

### Step 4. Integrate with Agency Enterprise Services

An agency can further leverage the benefit of an automated ILM by integrating the master user record with other agency enterprise ICAM IGA services. This integration can aid agencies to automate provisioning, de-provisioning, and reporting as well as in federating both within and external to an agency. In this context, the federation is transferring identity and authentication between networked systems rather than relying on siloed information specific to the target application.

**Figure 7: ILM Integration with Single Sign-On**

<img src="{{site.baseurl}}/assets/playbooks/ilm-sso-integration.png" alt="Diagram showing the integration of Identity Lifecycle Management with Single Sign-On systems to streamline access and identity management." width="800">

The following is an example of the benefits of a master user record and integration with an access management tool for a cross-agency federation use case.

Use Case - An agency employee needs to collaborate with another government agency. The other government agency application requires a specific human resources attribute to access the application. The application is federated with the employee’s home agency and allows a partner agency to use their home single sign-on to authenticate to the tool.

1. The agency adds the human resources attribute to the individual employee record using a bulk update in the Master User Record.
2. The Master User Record is available to the Single Sign-On tool in an assertion protocol.
3. The Single Sign-On adds the additional human resource attribute in an assertion to the partner application to facilitate authentication and authorization in the partner application.

Make attributes available for authorization decisions. Federation is not only accepting credentials as proof from other agencies but also making your identity credentials available to other agencies.

- Attributes are available to your agency via SSO assertions.
- Focus on the best practice of using assertion protocols rather than exposing attributes externally.
- Focus on authorization through federation rather than on PIV. PIV is a static credential with static attributes. SSO with Federation is dynamic-based on the SSO integration with a master user record. It is easier to update a directory than a PIV credential.

See the [Cloud Identity Playbook Federation section](https://www.idmanagement.gov/playbooks/cloud/#federation) for more information on federation and using trust frameworks for government, mission partner, or public identity federation.

## Summary

The ILM playbook outlined an identity lifecycle process and four steps to create a master user record and lifecycle process within your agency. ILM is the evolution of an identity from creation to deactivation. There are specific steps within each lifecycle phase of the IGA, create - provision- deactivate process. A master user record is the core of ILM and acts as an aggregation point of identity data for all agency users. A master user record integrated with IGA access management provides a foundation for more mature ICAM processes resulting in efficiently managing the identity and all their accounts, credentials, and access rather than just the credential, path to Zero Trust.

## Appendix A. Policies, Standards, and Guidance

### Federal Policies

1. [Executive Order 14028 - Improving the Nation’s Cybersecurity](https://www.federalregister.gov/documents/2021/05/17/2021-10460/improving-the-nations-cybersecurity){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
2. [OMB Memo 22-09 - Moving the U.S. Government Toward Zero Trust Cybersecurity Principles](https://zerotrust.cyber.gov/downloads/M-22-09%20Federal%20Zero%20Trust%20Strategy.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
3. [OMB Memo 21-31 - Improving the Federal Government’s Investigation and Remediation Capabilities Related to Cybersecurity Incidents](https://www.whitehouse.gov/wp-content/uploads/2021/08/M-21-31-Improving-the-Federal-Governments-Investigative-and-Remediation-Capabilities-Related-to-Cybersecurity-Incidents.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
4. [OMB Memo 19-17 - Enabling Mission Delivery through Improved Identity, Credential, and Access Management](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

### Government Standards

1. [Federal Information Processing Standard 201 - Personal Identity Verification of Federal Employees and Contractors](https://csrc.nist.gov/publications/detail/fips/201/3/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
2. [NIST Special Publication 800-63 - Digital identity Guidelines](https://pages.nist.gov/800-63-3/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
3. [NIST Special Publication 800-157 - Guidelines for Derived PIV Credentials](https://csrc.nist.gov/publications/detail/sp/800-157/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

### Government-Wide Guidance

1. [FICAM Architecture](https://www.idmanagement.gov/why/icam/)
2. [ICAM Governance Framework](https://www.idmanagement.gov/docs/playbook-identity-governance-framework.pdf)
3. [NIST Special Publication 800-63 Additional Information Sources Including Conformance Criteria](https://pages.nist.gov/800-63-3/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
4. [NIST Interagency Report 8149 - Developing Trust Frameworks to Support Identity Federations](https://csrc.nist.gov/publications/detail/nistir/8149/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
5. [OPM Credentialing Standards Procedures for Issuing Personal Identity Verification Cards under HSPD-12 and New Requirement for Suspension or Revocation of Eligibility for PIV Credentials](https://www.opm.gov/suitability/suitability-executive-agent/policy/cred-standards.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

### References

1. [Department of Defense ICAM Reference Design](https://dodcio.defense.gov/Portals/0/Documents/Cyber/DoD_Enterprise_ICAM_Reference_Design.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
2. [DHS CDM Max.gov Page](https://community.max.gov/download/attachments/1843519190/CDM-ARCH-2017-01.1.1-MUR-FUNCT-DESCR%2012082017.pdf?version=1&modificationDate=1568732697362&api=v2){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
3. [Continuous Diagnostics and Mitigation Program Technical Capabilities Volume Two: Requirements Catalog, Version 2.5, July 2023](https://www.cisa.gov/sites/default/files/2023-08/CDM_Tech%20Volume2_v2.5.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
3. [IDPro Body of Knowledge - An Overview of Digital Identity Lifecycle](https://bok.idpro.org/article/id/31/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
4. [System for Cross-domain Identity Management (SCIM)](https://scim.cloud/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
