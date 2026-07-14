---
layout: page
collection: playbooks
title: Identity Lifecycle Management Playbook
permalink: /playbooks/ilm/
description: The Identity Lifecycle Management Playbook helps federal agencies understand and plan identity lifecycle management initiatives based on Zero Trust Architecture principles.
sidenav: playbooks
sticky_sidenav: true
version: 2.0
pubdate: March 2026
subnav:
  - text: Executive Summary
    href: '#executive-summary'
  - text: Key Terms
    href: '#key-terms'
  - text: Disclaimer
    href: '#disclaimer'
  - text: Identity Lifecycle Management 101
    href: '#identity-lifecycle-management-101'
  - text: Stage 1. Creation (Provisioning)
    href: '#stage-1---creation-provisioning'
  - text: Stage 2. Modification (Management/Access Adjustment)
    href: '#stage-2---modification-managementaccess-adjustment'
  - text: Stage 3. Deletion (Deprovisioning/Revocation)
    href: '#stage-3---deletion-deprovisioningrevocation'
  - text: Shifting Focus from Authenticators to Identities
    href: '#shifting-the-focus-from-managing-authenticator-lifecycles-to-managing-identity-lifecycles'
  - text: Implementing ILM
    href: '#implementing-ilm'
  - text: Step 1. Create and Document an Agency ILM Policy
    href: '#step-1-create-and-document-an-agency-ilm-policy-that-follows-zta-and-iga-best-practices'
  - text: Step 2. Architect the Solution
    href: '#step-2-architect-the-solution'
  - text: Step 3. Create the Master User Record
    href: '#step-3-create-the-master-user-record'
  - text: Step 4. Integrate with Agency Enterprise Services
    href: '#step-4-integrate-with-agency-enterprise-services'
  - text: Summary
    href: '#summary'
  - text: Appendix A. Policies, Standards, and Guidance
    href: '#appendix-a-policies-standards-and-guidance'
---

**The Identity Lifecycle Management Working Group of the Federal Chief Information Security Officer Council ICAM Subcommittee developed this playbook to help federal agencies understand and plan identity lifecycle management initiatives.**

**Date: March 31, 2026 - Version: 1.4**

<button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="v-a1">
Date: {{page.pubdate}} - Version: {{page.version}}
</button>
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
  <tbody>
  <tr>
    <th scope='row'>1.4</th>
    <td>3/31/2026</td>
    <td>Major update incorporating Enhanced Authentication Standards, Federation Requirements, Privacy Impact Assessment Requirements, Incident Response Framework, and Performance Metrics aligned with NIST 800-63 standards.</td>
  </tr>
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
  </tbody>
</table>
</div>

## Executive Summary

The **Identity Lifecycle Management (ILM) Playbook** assists federal agencies in modernizing their digital identity processes to meet Zero Trust Architecture mandates, such as those outlined in Executive Order 14028 and OMB M-22-09.

**Core Objective**: The playbook guides agencies to **shift from merely managing authenticators** (e.g., verifying a valid PIV card) **to managing the continuous lifecycle of digital identities**. This identity-centric approach uses contextual data—such as user attributes, device health, and risk—to make access decisions, fundamentally supporting the "never trust, always verify" principle of Zero Trust.

**The Identity Lifecycle Process**: To strictly enforce the principle of least privilege, the playbook emphasizes automating three critical lifecycle stages:

- **Creation (Provisioning):** Conducting rigorous identity proofing and granting only the minimum necessary access when a user is onboarded.
- **Modification (Access Adjustment):** Dynamically adjusting and auditing access rights when user roles or device postures change.
- **Deletion (Deprovisioning/Revocation):** Immediately revoking access upon a user's departure to prevent vulnerable "orphaned" accounts.

**Four-Step Implementation Strategy**: To reach advanced and optimal Zero Trust maturity, agencies should follow four key steps:

1. **Document an ILM Policy:** Establish policies that designate HR systems as the authoritative source of truth for identity creation and termination.
2. **Architect a Solution:** Implement a Virtual Directory or Identity Governance and Administration (IGA) tool to aggregate and centralize user data.
3. **Create a Master User Record (MUR):** Build a centralized repository that links all user attributes, entitlements, and authenticators (including both standard PIV cards and alternative FIDO2 credentials) into a single view.
4. **Integrate Enterprise Services:** Connect the MUR with enterprise tools like Single Sign-On (SSO) to automate access management and enable secure, attribute-based cross-agency federation.

## Introduction

The Identity Lifecycle Management (ILM) Playbook is a practical guide on identity lifecycle management to help federal agencies understand how to shift the focus from managing access based on authenticators to managing the lifecycle of identities as outlined in section III of OMB Memo 19-17, Enabling Mission Delivery through Improved Identity, Credential, and Access Management (ICAM). This focus shift is supported by OMB Memo 22-09, Moving the U.S. Government Toward Zero Trust Cybersecurity Principles.

Driven by Executive Order 14028, Improving the Nation's Cybersecurity, OMB M-22-09 mandates that departments and agencies shall enforce the transition to a Zero Trust Architecture (ZTA). The [CISA Zero Trust Maturity Model](https://www.cisa.gov/resources-tools/resources/zero-trust-maturity-model){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} (ZTMM) defines the five pillars of a ZTA and OMB M-22-09 describes federal strategic goals and agency actions for each pillar.

This playbook focuses on the M-22-09 Identity Pillar and its associated actions described below. These actions enable agencies to achieve zero trust security goals and support the identity strategic goal for agency staff to use "enterprise-managed identities to access the applications they use in their work. Phishing-resistant MFA protects those personnel from sophisticated online attacks." These actions are:

1. Agencies must employ centralized identity management systems for agency users that can be integrated into applications and common platforms.
2. Agencies must use strong MFA throughout their enterprise.
   - MFA must be enforced at the application layer, instead of the network layer.
   - For agency staff, contractors, and partners, phishing-resistant MFA is required.
   - For public users, phishing-resistant MFA must be an option.
   - Password policies must not require use of special characters or regular rotation.
3. When authorizing users to access resources, agencies must consider at least one device-level signal alongside identity information about the authenticated user.

Agencies can use this playbook to:

1. Understand identity lifecycle management, and identify the steps to create and integrate identity lifecycle management within an agency.
2. Expand current PIV infrastructure for alternative phishing-resistant authenticators such as FIDO2-based authenticators.
3. Integrate centralized identity management systems to ensure identity lifecycle management consistency across the enterprise.

### Audience and Stakeholder Engagement

This playbook is designed for identity program managers and enterprise and application architects interested in modernizing their identity management process. Other IT program participants, including program managers and application teams, may find value in incorporating this playbook approach in their planning to meet the target maturity levels required by the Federal Zero Trust Strategy.

The table below lists secondary stakeholders and how to engage them.

**Table 1: Stakeholder Table**

| **Stakeholder** | **Stakeholder Type** | **Engagement Point** |
|---|---|---|
| Agency ICAM Governance | Governance Body | Reduce risk through lifecycle management and meet the intent of OMB M-19-17 and M-22-09. |
| Application Owners | Office | ICAM service consolidation and modernization to identity-centric security processes. |
| Human Resources | Office | Authoritative attribute source for employment status to automate onboarding, offboarding, and identity lifecycle consistency. |
| Security/Vetting | Office | Eligibility, visibility, audit, reporting, and authoritative attribute source to support the MUR and the OMB M-21-31 event logging requirements. |
| Training | Office | Authoritative attribute source for security awareness and role-based training status to ensure conditional access and identity lifecycle consistency. |
| Service Desk | Office | Support Staff to facilitate phishing-resistant authenticator enrollment, self-service authenticator management, and identity lifecycle consistency. |
| User | Office | All user types doing business with the federal government. |

### Key Terms

Below are key terms used throughout this Playbook. Where possible, the source of the definition is identified at the end. Definitions with no attribution are unique to this document.

**Attribute** - A quality or characteristic ascribed to someone or something. An identity attribute is an attribute about the identity of a subscriber (e.g., name, date of birth, address). [NIST SP 800-63-4]

**Authoritative Source** - An entity that has access to or verified copies of accurate information from an issuing source such that a CSP has high confidence that the source can confirm the validity of the identity attributes or evidence supplied by an applicant during identity proofing. An issuing source may also be an authoritative source. Often, authoritative sources are determined by a policy decision of the agency or CSP before they can be used in the identity proofing validation phase. [NIST SP 800-63-4]

**Card Management System (CMS)** - The system that manages the lifecycle of a PIV Card application. [FIPS 201-3]

**Credential Management System** - The system that manages the lifecycle of entity credentials used for authentication. [NISTIR 7497]

**Derived PIV Credential** - An X.509 Derived PIV Authentication certificate, which is issued in accordance with the requirements specified in [NIST SP 800-157] where the PIV Authentication certificate on the Applicant's PIV Card serves as the original credential. The Derived PIV Credential is an additional common identity credential under HSPD-12 and FIPS 201 that is issued by a federal department or agency and that is used with mobile devices. [NIST SP 800-157]

**Alternative Phishing-Resistant Credential** - A credential that is equivalent to PIV, per NIST AAL3 requirements, and issued to identities where PIV is not accessible, such as mobile, interim, or external, use cases.

**Federal Enterprise Identity** - The unique representation of an employee, a contractor, an enterprise user, such as a mission or business partner, a device, or a technology that a Federal agency manages to achieve its mission and business objectives. [OMB M-19-17] This is also known as Workforce Identity.

**Federation** - A process that allows for the conveyance of identity and authentication information across a set of networked systems. [NIST SP 800-63-4]

**Fast Identity Online (FIDO)** - A set of standards created by the FIDO Alliance to gain adoption for stronger and simpler authentication technology over usernames/passwords and other legacy methods for signing into online services. [FIDO Alliance]

**FIDO2** - A joint project between the FIDO Alliance and the W3C standards organizations. It is a protocol that offers strong passwordless multi-factor authentication, such as biometric features, hardware keys, smart cards, or Trusted Platform Modules (TPM), and asymmetric key encryption. The FIDO2 protocol combines the FIDO Alliance's Client to Authenticator Protocol (CTAP) and W3C's WebAuthn API. [FIDO Alliance] Authenticators that use FIDO2 and meet all requirements for AAL3 can be used as an alternative to PIV.

**Identity** - An attribute or set of attributes that uniquely describes a subject within a given context. Also known as a digital identity. [NIST SP 800-63-4]

**Identity Lifecycle Management** - The administrative and technical activities required to manage a digital identity throughout its lifecycle - creation, modification, and deactivation.

**Identity Management System (IDMS)** - One or more systems or applications that manage the identity proofing, registration, and issuance processes.[FIPS 201-3]

**Identity Governance and Administration (IGA) System** - A set of policies, processes, and technologies designed to manage digital identities and access across an agency. It aims to streamline identity management by providing a centralized approach to managing user identities, their access rights, and entitlements. IGA helps agencies maintain identity security by ensuring that a user's identity is appropriately managed, and that access control mechanisms are in place to prevent inappropriate access to applications and data. Through identity lifecycle management and automation, IGA systems ensure identities and access privileges are up-to-date and aligned with business and mission needs. Similar to Account Management System.

**Identity Proofing** - The processes used to collect, validate, and verify information about a subject to establish assurance in the subject's claimed identity. [NIST SP 800-63-4]

**Master User Record (MUR)** - A centralized data repository that hosts a record of all entitlements entities (users) have been granted. It includes attributes about trust, credentials, access and permission authorization, accounts, and training for specific roles and responsibilities. Also known as an Entitlement Catalog or Identity Warehouse. [DoS & DoD]

**Persona** - An electronic identity that can be unambiguously associated with a single person or non-person entity (NPE). A single person or NPE may have multiple personas, with each persona being managed by the same or different organizations. [CNSSI 4009-2015]

**Passkeys** - A FIDO authentication credential based on FIDO standards, that allows a user to sign in to apps and websites with the same process that they use to unlock their device (biometrics, PIN, or pattern). Passkeys are FIDO cryptographic credentials that are tied to a user's account on a website or application. With passkeys, users no longer need to enter usernames and passwords or additional factors. Instead, a user approves a sign-in with the same process they use to unlock their device (for example, biometrics, PIN, pattern). [FIDO Alliance]

**Public Identity** - The unique representation of a subject that a Federal agency interacts with, but does not directly manage, in order to achieve its mission and business objectives. Public identity may also refer to a mechanism of trust used to render services to the American public. [OMB M-19-17]

**PIV Identity Account** - The logical record containing credentialing information for a given PIV cardholder. This is stored within the issuer's identity management system and includes PIV enrollment data, cardholder identity attributes, and information regarding the cardholder's PIV Card and any derived PIV credentials bound to the account. [FIPS 201-3]

**Orphan Account** - A user or system account that remains active in IT systems, software, or database but is not linked to a valid, current digital identity or identifiable subject. These accounts typically lack authoritative governance within an IDMS and represent a significant security risk, such as unauthorized access or data breaches.

**Vetting** - The process by which covered individuals undergo investigation, evaluation, and adjudication of whether they are, and remain over time, suitable or fit for Federal employment, eligible to occupy a sensitive position, eligible for access to classified information, eligible to serve as a nonappropriated fund employee or a contractor, eligible to serve in the military, or authorized to be issued a Federal credential. Vetting includes all steps in the end-to-end process, including determining need (appropriate position designation), validating need (existence of a current investigation or adjudication), collecting background information via standard forms, investigative activity, adjudication, providing administrative due process or other procedural rights, and ongoing assessments to ensure that individuals continue to meet the applicable standards for the position for which they were favorably adjudicated. [EO 13764]

### Disclaimer

U.S. Federal Executive Branch agencies can use this Playbook to plan identity lifecycle activities and services related to the FICAM Architecture Services Framework. This Playbook is not official policy, mandated action, or intended to provide authoritative information technology terms. It includes best practices to supplement and build on existing federal policies listed above and existing FICAM guidance and playbooks. Policies and guidelines with intersecting scopes are considered only to the extent that they relate to ICAM services. Privileged access management (e.g., superusers, domain administrators) and identities of public users of externally facing online services are out of scope for this Playbook.

## Identity Lifecycle Management 101

The purpose of good ILM is to ensure that information is accessed by the right users, at the right time, and for the right purposes. It is at the core of a ZTA since access to and protection of federal data relies on well managed digital identities, starting with the creation of the digital identity from a properly vetted/identity proofed individual and binding the identity with accounts created on multiple systems, modifying identity permissions due to changing positions/roles within the agency, and ending with deletion due to leaving the agency.

This playbook has two sections.

1. **Identity Lifecycle Management Process:** This section is an overview of identity lifecycle management and the distinct processes involved. It also gives a brief description of the similarities and differences in managing an authenticator versus managing an identity.

2. **Shifting the Focus from Managing Authenticators to Managing Identities:** This second section outlines a four-step process that an agency can utilize to implement ILM and shift the focus from authenticator management to identity management:
   1. Document the purpose and goals of identity lifecycle management in an agency policy.
   2. Architect a solution based on either using a virtual directory or an identity governance and administration (IGA) tool to support automated ILM and other ICAM activities.
   3. Create a master user record (MUR) that aggregates digital identity attributes, entitlements, accounts, authenticators, and other information to support centralized identity lifecycle management.
   4. Integrate identity lifecycle management into agency enterprise services.

Agencies are encouraged to tailor this process to fit their unique organizational structure, mission needs, and requirements.

### Identity Lifecycle Management Process

In ZTA, the Identity Lifecycle Management stages of creation, modification, and deletion are critical for enforcing the principle of least privilege, ensuring that access rights are automatically provisioned, adjusted, and revoked to prevent unauthorized access or lateral movement. These stages follow the Identity Governance and Administration (IGA) best practices:

- **Creation (Provisioning):** Occurs when a new user, machine or device is added. This involves identity proofing and assigning minimum necessary entitlements (least privilege) upon enrollment and provisioning of the authenticator.
- **Modification (Management/Access Adjustment):** Occurs when a user changes roles or a device's posture changes. Access rights are dynamically updated to match the new role, reducing standing privileges that attackers exploit.
- **Deletion (Deprovisioning/Revocation):** Occurs when a user leaves or a device is retired. Immediate, automated deletion or suspension of accounts is crucial to remove dormant access pathways.

**Figure 1: Identity Lifecycle Management Process**
<br><br>
<img src="{{site.baseurl}}/assets/playbooks/ilm playbook ss1.png" alt="identity lifecycle lifecycle management process." width="454">
<br>

### Stage 1 - Creation (Provisioning)

Creation (Provisioning) - At this stage, a new user has joined the agency. To ensure the person is who they say they are, they go through the IAL3 identity proofing process described in NIST SP 800-63A-4. Identity proofing at IAL3 meets the requirements for PIV eligibility and is mandatory for federal employees, contractors and anyone working for, or on behalf of, the government.

Upon successful identity proofing, the new user's information is added to a Master User Record for that user and a digital identity is created. At this point, the identity is bound to one or more phishing-resistant, multi-factor authenticators such as a PIV card or FIDO2 token and user accounts are created for the IT systems that the user will need based on the user's roles. The authentication level requirements are also based on the user's roles and systems that the user will need to access. PIV cards and FIDO2 tokens are AAL3 authenticators, meeting all the AAL3 requirements listed in NIST SP 800-63B-4 including phishing-resistance, MFA, and non-exportability. In some cases, an AAL2 authenticator may be acceptable, allowing for the use of syncable authenticators. The last step in the Creation stage is that the user's digital identity is bound to all authenticators assigned to the user and the user's attributes, credentials, access and permission authorizations, accounts, and training for their specific roles and responsibilities are entered into the agency Master User Record (MUR) repository.

### Stage 2 - Modification (Management/Access Adjustment)

Modification (Management/Access Adjustment) - Once the digital identity has been created and the authenticators issued, ILM stage 2 is a continuous evaluation and improvement process. The initial user accounts are created. These accounts are monitored and maintained, with access permissions being adjusted as jobs and roles change, new accounts are created as needed to accommodate the new jobs and roles, and the MUR is updated accordingly. All system accesses are continuously monitored to ensure correct permissions are in place and information is accessed by the right users, at the right time, and for the right purposes as mandated in M-22-09. Much, if not all, of the steps in this stage are automated using the centralized identity management system that is integrated into applications and common platforms as specified in OMB M-22-09 Identity Pillar action item #1.

### Stage 3 - Deletion (Deprovisioning/Revocation)

Deletion (Deprovisioning/Revocation) - Of critical importance is the deletion of digital identities and the deactivation, including suspension, archiving, or deletion of associated accounts and authenticators when a user leaves the agency. Automating this stage to remove user information from the agency MUR ensures that there are no orphaned accounts once someone is no longer part of the agency.

### PIV Alternative Authenticators

A PIV card is the result of identity proofing/vetting. After identity proofing and initial identity vetting are complete (to include interim eligibility through favorable review of fingerprint results and initiation of required investigation), a human identity is bound to a PIV card through the public key infrastructure certificate issued on the PIV smart card. The smart card is bound to the digital identity in an agency's MUR and enterprise identity management system. This can then be provisioned to other directories, applications, physical access control systems, and single sign-on systems. Without this binding, the PIV card is just a physical identification badge.

The process used to bind a PIV to a digital identity is the same process an agency can use to bind other PKI and Non-PKI Derived PIV authenticators. Federal Information Processing Standard (FIPS) 201-3 section 2.10 states the following on Derived PIV authenticators, which must meet AAL2 or higher as defined in the NIST SP 800-64B-4 Digital Identity Guidelines.

1. Binding and issuing of Derived PIV authenticators shall use valid PIV Cards to establish cardholder identity.
2. Derived PIV authenticators shall meet the requirements for Authenticator Assurance Level (AAL) 2 or 3 specified in NIST Special Publication 800-63B-4.
3. Derived PIV authenticators shall be bound to the cardholder's PIV identity account only by the issuing department or agency responsible for managing the PIV identity account in the agency's enterprise identity management system.

Derived PIV authenticators are not embedded in the PIV card, but are stand-alone authenticators integrated into a variety of devices or platforms. This binding of multiple Derived PIV authenticators is possible through creating a Master User Record. These Derived PIV authenticators can include a stand-alone Fast ID Online (FIDO) 2 using Web Authentication (WebAuthN) mentioned in OMB Memo 22-09.

The most common way to integrate non-PKI-derived authenticators is through a modern Single Sign On tool or operating system that supports FIDO2 or WebAuthN. Derived PIV authenticators play an important role in environments where a smart card is not cost effective or supported such as chrome operating system, mobile devices, and secure offices. Per OPM, December 2020 guidance if the PIV authenticator is suspended or revoked, any associated derived authenticators must also be suspended or revoked.

## Shifting the Focus from Managing Authenticator Lifecycles to Managing Identity Lifecycles

A key theme in NIST SP 800-207 and the CISA ZTMM, and reflected in OMB M-22-09, is for federal agencies to shift the focus from managing the lifecycle of authenticators to managing the lifecycle of identities where the user identity, its attributes, and associated context (device, risk) drive access decisions in a mature zero trust environment.

The CISA ZTMM stages of maturity are:

- **Traditional:** Fragmented user accounts, manual provisioning.
- **Advanced:** Centralized identity management for all users and NPEs.
- **Optimal:** Fully automated lifecycle management with just-in-time (JIT) and just-enough access (JEA) based on real-time risk assessment.

A comparison of identity-centric versus authenticator-centric lifecycle management is shown in Table 3.

**Table 3: Identity-Centric Vs. Authenticator-Centric**

| **Feature** | **Identity-Centric** | **Authenticator-Centric** |
|---|---|---|
| Primary Focus | The User/Entity and their attributes | The authenticator (e.g., password, PIV, FIDO2 token, etc.) |
| Access Decision | Contextual (User + Device + Time + Risk) supporting the "never trust, always verify" principle of Zero-Trust | Binary (valid/invalid token) |
| Management Scope | Entire lifecycle (Creation → Modification → Deletion) | Authenticator issuance/expiration |
| ZT Maturity | Advanced/Optimal | Traditional |
| Security Metric | Least privilege & Continuous validation | Phishing-resistant MFA |

<div class="usa-alert usa-alert--info">
<div class="usa-alert__body">
<h4 class="usa-alert__heading">Myth Busted - A PIV Card is my only option</h4>
<p class="usa-alert__text">
While an employee using PIV is the ultimate security goal, what happens when a PIV is either not available or not compatible with the access requirements? Employees lose PIV cards and it may take days, weeks, or months for an employee to receive their new or replacement PIV. An agency should have a phishing-resistant alternative when a PIV card is not available. Allowing username and password as a backup option should not be the default policy exception as OMB-22-09 mandates phishing-resistant MFA for all workforce access. Under the NIST SP 800-63-4 guidelines, agencies should utilize FIDO2-based hardware tokens or syncable authenticators, such as passkeys, to maintain an AAL2 or higher during PIV unavailability.
</p>
</div>
</div>

### Key Shifts Required

1. **Centralization:** Shifting from fragmented systems to a unified, central identity management system.
2. **Context-Aware Access:** Authentication must move beyond one-time verification to continuous monitoring of user behavior and device health.
3. **Automated Governance:** Implementing IGA tools to automatically revoke access when roles change or users leave (See figure 4).
4. **NPE Management:** Treating bots, applications, and services (NPEs) as identities with their own lifecycle and access policies.

**Figure 2: ILM Automation**
<br><br>
<img src="{{site.baseurl}}/assets/playbooks/ilm playbook ss2.png" alt="ilm automation." width="454">
<br>

### Implementing ILM

This section outlines a four-step process for implementing ILM in an agency.

#### Step 1: Create and document an agency ILM policy that follows ZTA and IGA best practices.

An effective Agency Identity Lifecycle Management (ILM) policy, aligned with Zero Trust Architecture (ZTA - NIST SP 800-207) and Identity Governance and Administration (IGA) best practices, must treat identity as the new security perimeter. It moves away from static, role-based access towards dynamic, context-aware authorization. This policy should incorporate and enable the following foundational principles:

- **Authoritative Source of Truth:** The HR/personnel system is the sole driver of identity creation and termination.
- **Never Trust, Always Verify (ZTA):** There is no implicit trust based on network location or past behavior. Every session requires authentication and authorization.
- **Principle of Least Privilege:** Users are granted the minimum access necessary to perform their function and only for the time needed.
- **Unified Identity View:** The policy dictates comprehensive governance over all entities (human and NPEs, including AI agents) that have access to agency data.

The agency ILM policy document identifies the roles and responsibilities required to implement the ILM process. It is a good practice to coordinate the document through the agency's ICAM governance body to ensure all interested stakeholders are aware of the initiative and their respective responsibilities. This document should complement or be included in the agency's existing ICAM policy. For more information on ICAM program management or the ICAM governance body, see the [ICAM Program Management 101](https://www.idmanagement.gov/university/pm/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, [ICAM Governance Framework Playbook](https://www.idmanagement.gov/playbooks/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, and the [ICAM Federal Integrated Business Framework](https://www.idmanagement.gov/icam-fibf/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. The agency policy should include the following elements.

1. Outline the purpose of implementing ILM.

2. The roles and responsibilities associated with the ILM process. These roles and responsibilities can be identified and tailored to meet the needs of individual agencies. Some examples include:
   - Training Office to gather security training status.
   - Security/Vetting Office to gather PIV eligibility status.
   - HR Office to gather employment information status, perform identity proofing, and issue authenticators.
   - Application Owners to identify entitlements that are appropriate to a role and assigned to a user.

3. Specific steps, actions, and requirements each stage of the ILM process that aligns with the FICAM architecture identity management services, ZTA/IGA best practices, and all applicable federal laws, regulations, and guidelines such as M-22-09, M-19-17, NIST SP 800-207, NIST SP 800-63-4, and CISA ZTMM. Whenever possible, the applicable driver for the requirement should be identified with the requirement. For example:

   - **Stage 1, Creation (Provisioning):**
     - Rigorous Verification: Adherence to NIST SP 800-63A-4 requirements for identity proofing at IAL3 before creating a digital identity.
     - Unique Identifier Generation: Creating a persistent, unique identifier that remains with the entity, regardless of role changes using an MUR.
     - Automated Provisioning: "Day One" access is automated based on HR data, removing manual ticket requests.
     - Birthright Access: Automatically provisioning baseline, essential system permissions to new employees, contractors, or partners immediately upon joining an organization, typically determined by their role, department, or job function. This streamlines onboarding and boosts productivity.
     - Phishing-Resistant MFA: All authenticators fulfill the OMB M-22-09 requirements for phishing-resistant MFA.

   - **Stage 2, Modification (Management/Access Adjustment):**
     - Automated Re-Provisioning: Triggered by HR attribute changes in the MUR (promotion, transfer, etc.).
     - Privilege Audit: Immediate removal of legacy access rights not required by the new role (to prevent "entitlement creep").
     - Access Control protocols: Use of Attribute-based Access Controls or other access control model that allows the use of real-time changes to the content of the user's MUR (department, project, risk score) to determine access, not just roles.

   - **Stage 3, Deletion (Deprovisioning/Revocation):**
     - Immediate Revocation: Automated, near-real-time revocation of access upon termination (within minutes).
     - Orphan Account Remediation: Automated identification and removal of accounts not linked to an active HR/MUR record.
     - Account Retirement/Archiving: Instead of immediate deletion, accounts are disabled to maintain audit logs, then archived per policy.

4. Other sections in the policy could include:

   - **IGA Governance Elements**
     - Automated Access Certification/Reviews: Regular, mandatory review of user entitlements by managers, with automated revocation if uncertified.
     - Segregation of Duties Policies: Automated detection and prevention of conflicting access rights (e.g., preventing a user from both initiating and approving a payment).
     - Workflow Automation: Standardized approval workflows for access requests beyond birthright, requiring manager and resource owner approval.

   - **ZTA Integration Elements**
     - Context-Aware Access (Conditional Access): Access decisions consider user identity, device health/posture, location, and behavior.
     - Just-in-time (JIT) Access: Privileged or highly sensitive access is temporary and granted on-demand, expiring automatically.
     - Continuous Monitoring and Risk Analytics: Real-time analysis of authentication logs to identify anomalies (e.g., "impossible travel") and trigger automated re-authentication or revocation.
     - Non-Human Identity (NHI) Management: Governing bot, API, and service account lifecycles.

   - **Auditing and Compliance**
     - Centralized Logging: All lifecycle events must be logged in a tamper-proof system.
     - Audit Trail Retention: Maintaining records of who authorized access, why, and when, satisfying all FISMA/SOX/NIST requirements.

5. Appendices for a Glossary and all references used in the creation of the policy requirements.
6. Agency point of contact.

An agency policy ensures an agency-wide commitment to implementing and operating an identity lifecycle management process.

<div class="usa-alert usa-alert--info">
<div class="usa-alert__body">
<h4 class="usa-alert__heading">Myth Busted - We don't need a specific policy for Identity Lifecycle Management</h4>
<p class="usa-alert__text">
While an agency doesn't need a stand-alone policy for ILM, either having a policy or integrating lifecycle management into your agency policy ensures a consistent approach with executive leadership support. Without leadership support, your ILM initiative may not achieve enterprise-wide adoption or meet the mandatory maturity levels required by the Federal Zero Trust Strategy. A documented policy is essential for full alignment of IGA/ZTA best practices.
</p>
</div>
</div>

#### Step 2: Architect the Solution

The solution is how your agency will implement ILM. Most solutions are based on two technologies.

1. **Virtual Directory** - A virtual directory for ILM acts as a centralized abstraction layer, aggregating user data from multiple sources. An Enterprise Identity Store is an example of a virtual directory. Data sources include multiple Active Directory instances, application directories, cloud directories, Lightweight Directory Access Protocol (LDAP), Application Programming Interface (API), or System for Cross-domain Identity Management (SCIM) to aggregate data into a single, real-time view without needing data synchronization. A virtual directory is often necessary for large organizations that have user directories operated across multiple operational components or divisions. Some Single Sign-On tools, which perform access management, may also support a virtual directory capability.

2. **Identity Governance and Administration (IGA)** - An IGA tool inventories, analyzes, and reports on access and entitlements within an enterprise. It has virtual directory features to aggregate identity information from multiple other directories. By integrating with authoritative sources and applications an IGA tool can report on who has access, what they can access, and why they have access. An IGA tool is a primary mechanism to perform access reviews. It can be a stand-alone tool or part of an IDMS suite.

Each tool has a distinct purpose. Your agency should consider your overall ICAM architecture to understand the cost, overlapping capabilities, and talent necessary to implement and maintain an ILM capability to meet the advanced/optimal maturity levels targeted by the Federal Zero Trust Strategy.

#### Step 3: Create the Master User Record

A key element of lifecycle management is the concept and provisioning of a MUR. The MUR holds the identity attributes that are leveraged in the ILM. The attributes make the identity and are the principal function of the IGA. The identities in the MUR are required for CISA Continuous Diagnostics and Mitigation (CDM) agency reporting however, agencies may add additional logic to MUR and capture additional information e.g., the type of user, type of authenticator, expiration dates and other reporting factors that trigger the IGA for the purpose of phishing-resistant alternative identities and authenticators outside of federal employees, contractors and PIV. Figure 5 depicts a sample MUR architecture.

**Figure 3: CISA CDM Master User Record Architecture**
<br><br>
<img src="{{site.baseurl}}/assets/playbooks/ilm playbook ss3.png" alt="cisa cdm master user record architecture." width="454">
<br>

A MUR is a unique representation of a user's accounts, personas, attributes, entitlements, and authenticators within an organization to ensure identity lifecycle consistency.

**Figure 4: Account Aggregation Process to Create a Master User Record**
<br><br>
<img src="{{site.baseurl}}/assets/playbooks/ilm playbook ss4.png" alt="account aggregation process to create a master user record." width="454">
<br>

A MUR aggregates user accounts, attributes, entitlements, and issued authenticators to understand in a single view the access and authorization of a specific user. Within the CISA CDM data model, a MUR contains aggregated attributes from multiple authoritative sources to achieve identity lifecycle consistency. The below table is an overview of authoritative sources, the object types, and attributes collected.

**Table 2: Data Elements in the DHS CDM Master User Record**

| **Authoritative Attribute Source** | **Object Type** | **Attributes Collected** |
|---|---|---|
| Agency HR | Role | Job Title, Department, Component, Location, Manager, User Type (Gov, Contractor, Non-Person, Other) |
| Agency HR | Status | Status (Active, Leave Type, Inactive, Suspended) |
| Agency IDMS | User | Unique Identifier (UserID), Full Name, Email |
| Agency IDMS | CRED | Authenticator Types Issued |
| Agency IDMS | Accounts | List of accounts associated with this user |
| Agency IDMS | PRIV | Privilege Type, Status, Associated System |
| Agency IDMS | Entitlement | Entitlement Type |
| Vetting System | TRUST | Eligibility, Status, Type of vetting completed |
| Training System | BEHAVE | Security Training Status, Training Types |

### Authoritative Attribute Sources

An authoritative attribute source is a repository or system that contains one or more attributes about an entity and is considered the primary or most reliable source for this information. For example, the most reliable source for an employee status attribute (active, leave, suspended, deactivated) is usually in a human resources system. The first step in identifying authoritative attribute sources is understanding what attributes are needed within your agency. This data analysis and collection process may include:

- **Agency vetting system** - Contains investigative and adjudicative results on suitability or fitness for federal employment, eligibility to occupy a sensitive position, eligibility for access to classified information, and eligibility for a federal phishing-resistant MFA authenticator (e.g., PIV). Vetting incorporates all steps in the end-to-end process, including:

  1. Determine the appropriate level of investigation needed for the position.
  2. Validate whether the individual has been investigated to the necessary level and if so, if that investigation was favorably adjudicated.
  3. Collect background information via standard forms.
  4. Conduct the investigation.
  5. Adjudicate the investigative information obtained.
  6. Provide administrative due process or other procedural rights.
  7. Perform ongoing assessments (including continuous vetting or reinvestigation) to ensure that individuals continue to meet the applicable standards for the position for which they were favorably adjudicated.

  Consult your Security/Vetting office on IT integration planning and implementation with ILM processes.

- **Agency IDMS** - One or more systems or applications that manage the identity proofing, registration, and issuance processes within an agency.

- **Credential Management System** - An agency's system that manages the lifecycle of PIV, Tokens, and other authenticator types. This system would include the card management system for managing PIV authenticators.

- **Application Analysis** - Conducting an internal application analysis from the Single Sign-On Playbook to identify which attributes are used across which applications. For example, employee access is dependent on current and complete IT security training. The security training attribute is most likely in the agency's training system, but specific to application access.

Refer to NIST SP 800-63A-4 for additional information on authoritative sources for attributes that are used in creating a digital identity.

To properly implement attribute changes, you should identify authoritative data sources that drive how the attribute change is implemented and are shared with connected systems. However, if there is not a process in place to drive the use of the authoritative data sources, the process will be inefficient and may result in vulnerabilities, like excess, "orphaned" accounts. An orphaned account is a potential risk because it is either unmanaged, not owned, or not linked to a digital identity.

**Figure 5: Example of an Orphan Account**
<br><br>
<img src="{{site.baseurl}}/assets/playbooks/ilm playbook ss5.png" alt="example of an orphan account." width="454">
<br>

An example of an orphaned account includes active employee accounts where the employee no longer works for the organization. Another example is a Microsoft service account for an application that no longer exists. It is recommended to keep a list of identity data that is available, know where it originates, and what systems are authoritative in that way. The most common pattern to integrate attributes into an ILM tool is based on connection methods of an authoritative attribute source.

Legacy and on-premises applications most likely support LDAP.
Cloud applications most likely support an API or SCIM.
Modern federated applications should support the system for cross-domain identity management (SCIM) to facilitate automated provisioning and rapid revocation.

<div class="usa-alert usa-alert--warning">
<div class="usa-alert__body">
<h4 class="usa-alert__heading">No Orphaned Accounts</h4>
<p class="usa-alert__text">
Agencies should focus on identifying and reducing the number of orphaned accounts and especially orphaned accounts with privileged access.
</p>
</div>
</div>

The main benefits of a master user record include:

1. A single view of all digital identities within an agency.
2. Identify users by vetting status, authenticator type, training status, privileged, and non-privileged accounts.
3. Aid in cyberstat reporting for ICAM questions.
4. A foundational element to implement more mature identity processes when integrated with other agency systems such as access management and information technology service management (ITSM).

For specific information on how CISA CDM created a MUR including which tools they've used, go to the CDM document repository on MaxConnect.gov. A MUR is most often created using either a virtual directory, identity governance and administration (IGA) tool, or potentially a Single Sign-On tool if it also supports a virtual directory capability to maintain identity lifecycle consistency.

#### Step 4. Integrate with Agency Enterprise Services

An agency can further leverage the benefits of an automated ILM by integrating the MUR with other agency enterprise ICAM IGA services. This integration can aid agencies to automate provisioning, de-provisioning, and reporting as well as in federating both within and external to an agency. In this context, the federation is transferring identity and authentication between networked systems rather than relying on siloed information specific to the target application to achieve the required FAL.

**Figure 6: ILM Integration with Single Sign-On**
<br><br>
<img src="{{site.baseurl}}/assets/playbooks/ilm playbook ss6.png" alt="ilm integration with single sign-on." width="454">
<br>

The following is an example of the benefits of a MUR and integration with an access management tool for a cross-agency federation use case.

Use Case - An agency employee needs to collaborate with another government agency. The other government agency application requires a specific human resources attribute to access the application. The application is federated with the employee's home agency and allows a partner agency to use their home single sign-on to authenticate to the tool.

1. The agency adds the human resources attribute to the individual employee record using a bulk update in the MUR.
2. The MUR is available to the Single Sign-On tool in an assertion protocol.
3. The Single Sign-On adds the additional human resource attribute in an assertion to the partner application to facilitate authentication and authorization in the partner application.

Make attributes available for authorization decisions. Federation is not only accepting credentials as proof from other agencies but also making your identity credentials available to other agencies.

- Attributes are available to your agency via SSO assertions.
- Focus on the best practice of using assertion protocols rather than exposing attributes externally.
- Focus on authorization through federation rather than on PIV. PIV is a static authenticator with static attributes. SSO with Federation is dynamic-based on the SSO integration with a master user record. It is easier to update a directory than a PIV credential.

See the Cloud Identity Playbook Federation section for more information on federation and using trust frameworks for government, mission partner, or public identity federation as required by M-22-09.

## Summary

The ILM playbook outlined an identity lifecycle process and four steps to create a MUR and lifecycle process within your agency. ILM is the evolution of an identity from creation to deletion. There are specific steps within each lifecycle phase of the IGA, create - provision deactivate process. A master user record is the core of ILM and acts as an aggregation point of identity data for all agency users. A master user record integrated with IGA access management tools provides a foundational path for more mature ICAM processes resulting in efficiently managing the identity and all their accounts, authenticators, and access to move toward a mature Zero Trust architecture.

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

1. [FICAM Architecture]({{ site.baseurl }}/arch/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link"}
2. [ICAM Governance Framework]({{ site.baseurl }}/docs/playbook-identity-governance-framework.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link"}
3. [NIST Special Publication 800-63 Additional Information Sources Including Conformance Criteria](https://pages.nist.gov/800-63-3/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
4. [NIST Interagency Report 8149 - Developing Trust Frameworks to Support Identity Federations](https://csrc.nist.gov/publications/detail/nistir/8149/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
5. [OPM Credentialing Standards Procedures for Issuing Personal Identity Verification Cards under HSPD-12 and New Requirement for Suspension or Revocation of Eligibility for PIV Credentials](https://www.opm.gov/suitability/suitability-executive-agent/policy/cred-standards.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

### References

1. [Department of Defense ICAM Reference Design](https://dodcio.defense.gov/Portals/0/Documents/Cyber/DoD_Enterprise_ICAM_Reference_Design.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
2. [DHS CDM Max.gov Page](https://community.max.gov/download/attachments/1843519190/CDM-ARCH-2017-01.1.1-MUR-FUNCT-DESCR%2012082017.pdf?version=1&modificationDate=1568732697362&api=v2){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
3. [IDPro Body of Knowledge - An Overview of Digital Identity Lifecycle](https://bok.idpro.org/article/id/31/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
4. [System for Cross-domain Identity Management (SCIM)](https://scim.cloud/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
