---
layout: page
collection: playbooks
title: Identity Lifecycle Management Playbook
pubdate: 2022-12
type: Markdown
permalink: /playbooks/ilm/
description: This playbook can aid agencies in understanding how to shift the focus from managing the lifecycle of credentials to the lifecycle of identities outlined in section III of OMB Memo 19-17.
sidenav: playbooks
sticky_sidenav: true

version: 1.2
pubdate: December 15, 2022

subnav:
  - text: Executive Summary
    href: '#executive-summary'
  - text: ILM 101
    href: '#identity-lifecycle-management-101'
  - text: Shift to Managing Identities
    href: '#shift-from-managing-credentials-to-managing-identities'
  - text: Step 1. Document the Process
    href: '#step-1-document-the-process-in-an-agency-policy'
  - text: Step 2. Architect the Solution
    href: '#step-2-architect-the-solution'
  - text: Step 3. Create the MUR
    href: '#step-3-create-the-master-user-record'
  - text: Step 4. Integrate 
    href: '#step-4-integrate-with-agency-enterprise-services'
  - text: Summary
    href: '#summary'
  - text: Appendix A. References
    href: '#appendix-a-policies-standards-and-guidance'
---

<!-- Version 1.2  
December 15, 2022 -->

The Identity Lifecycle Management Working Group of the Federal Chief Information Security Officer Council ICAM Subcommittee developed this playbook to help federal agencies understand and plan identity lifecycle management initiatives.

<img src="{{site.baseurl}}/assets/img/logo-gsa.png" width="64" height='64' align="left" alt="U.S. General Services Administration Logo">
<img src="{{site.baseurl}}/assets/img/logo-cio-round.png" width="64" height='64' align="left" alt="U.S. Federal Chief Information Officer Council Logo">
<br><br><br>

<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="vtbl1">
      Date: {{page.pubdate}} - Version: {{page.version}}
    </button>
  </h4>
  <div id="vtbl1" class="usa-accordion__content usa-prose">
    <table>
      <caption>Identity Lifecycle Management version table</caption>
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
         1.2 
        </th>
        <td>12/15/2022</td>
        <td>Minor editorial updates.</td>
      </tr>
      <tr>
        <th scope='row'>
          1.1
        </th>
        <td>10/11/2022</td>
        <td>10/11/2022 | Move 3rd party federation content to Cloud Identity Playbook federation section.</td>
      </tr>
      <tr>
        <th scope='row'>
          1.0
        </th>
        <td>06/30/2022</td>
        <td>Initial Draft.</td>
      </tr>
    </table>
  </div>
</div>

<!-- | Version Number | Date | Change Description |
| :----------: | :-------: | -------- |
| 1.2 | 12/15/2022 | Minor editorial updates. |
| 1.1 | 10/11/2022 | Move 3rd party federation content to Cloud Identity Playbook federation section. |
| 1.0 | 06/30/2022 | Initial Draft. | -->

## Executive Summary

The Identity Lifecycle Management (ILM) Playbook is a practical guide to help federal agencies understand how to shift the focus from managing the access based on credentials to managing the lifecycle of identities as outlined in [section III of OMB Memo 19-17](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. This focus shift will help agencies achieve a centralized identity management system mentioned in [OMB Memo 22-09 Identity Pillar Action 1](https://zerotrust.cyber.gov/federal-zero-trust-strategy/#identity){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. This playbook defines ILM as stages of an identity from creation to deactivation. This lifecycle process is known as the joiner-mover-leaver process. The intent of implementing a lifecycle management process is to **ensure an agency has visibility into all identities they control**. For example, the process can help in the following ways:
1.	Ensure only active employees can access federal resources.
2.	Remove access when employees haven’t completed the required security training.
3.	Ensure least privilege is enforced when accounts are created or a user changes roles.
4.	Track access and privileges of compromised accounts.

{% include alert-success.html heading="Agency Goal: M-22-09 Action Plan" content="Per OMB Memo 22-09, agencies should have a plan to create and maintain a master user record of all agency users at the enterprise level. This playbook helps agencies understand why and how to create a master user record capability. Implementation is achieved through either the DHS CDM program or in collaboration with an integrator or vendor." %} 

This playbook can also assist agencies in understanding how to support [phishing-resistant authenticators as outlined in the identity section of OMB Memo 22-09](https://zerotrust.cyber.gov/federal-zero-trust-strategy/#identity){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}.  Agencies can use this playbook to do two things.
1.	Understand identity lifecycle management.
2.	Identify the steps to create and integrate identity lifecycle management within an agency.

This playbook also outlines a four-step process that an agency can utilize to implement identify lifecycle management: 
1.	Document the purpose and goals of identity lifecycle management in an agency policy.
2.	Architect a solution based on either using a virtual directory or an identity governance and administration (IGA) tool.
3.	Create a master user record that aggregates digital identity attributes, entitlements, accounts, credentials, and other information.
4.	Integrate identity lifecycle management into agency enterprise services.

This playbook is designed for identity program managers and enterprise and application architects interested in modernizing their identity management process. Agencies are encouraged to tailor this playbook to fit their unique organizational structure, mission needs, and requirements. Other IT program participants, including program managers and application teams, may find value in incorporating this playbook approach in their planning. 

### Key Terms

Below are key terms used throughout this Playbook. A linked term denotes it is an official term from a federal policy, NIST Glossary, or a NIST publication. An unlinked term is defined for this document.

- [Attribute](https://csrc.nist.gov/glossary/term/attribute){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - A quality or characteristic used to describe a digital identity (e.g., user type, employment status, work role).
- Authoritative Attribute Source - A repository or system that contains attributes about an individual and is considered the primary or most reliable source for this information. This is also referred to as an authoritative data source.
- [Card Management System](https://pages.nist.gov/FIPS201/FIPS201.html#s-c){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - The system that manages the lifecycle of a PIV Card application.
- [Derived PIV Credential](https://pages.nist.gov/FIPS201/FIPS201.html#s-c){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - A credential issued based on proof of possession and control of a PIV Card. Derived PIV credentials are typically used in situations that do not easily accommodate a PIV Card, such as in conjunction with mobile devices.
- [Federal Enterprise Identity](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - Refers to the unique representation of an employee, a contractor, an enterprise user, such as a mission or business partner, a device, or a technology that a federal agency manages to achieve its mission and business objectives. This is also known as a Workforce Identity.
- [Federation](https://csrc.nist.gov/glossary/term/federation){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - A process that allows for the conveyance of identity and authentication information across a set of networked systems.
- [Identity](https://csrc.nist.gov/glossary/term/identity){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - The set of physical and behavioral characteristics by which an individual is uniquely recognizable. The digital representation of this is called a Digital Identity.
- Identity Lifecycle Management - The evolution of an identity from creation to deactivation.
- [Identity Management System (IDMS)](https://pages.nist.gov/FIPS201/FIPS201.html#s-c){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - One or more systems or applications that perform Identity Lifecycle Management functions such as identity proofing, registration, and issuance processes.
- Identity Governance and Administration (IGA) System - A centralized source used to manage entitlements and account provisioning to one or more systems. The Account Management System may also refer to IGA.
- [Identity Proofing](https://pages.nist.gov/FIPS201/FIPS201.html#s-c){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - The process by which information is collected, validated, and verified about a person to issue credentials to that person.
- Master User Record (MUR) - A unique representation of a user’s accounts, personas, attributes, entitlements, and credentials within an organization.
- Persona - A digital identity unambiguously associated with a single person or non-person entity (NPE). A single person or NPE may have multiple personas, each managed by the same or different organization.
- [Public Identity](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - The unique representation of a subject that a federal agency interacts with, but does not directly manage, to achieve its mission and business objectives.
- [PIV Identity Account](https://pages.nist.gov/FIPS201/FIPS201.html#s-c){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - The logical record containing credentialing information for a given PIV cardholder. This is stored within the issuer’s identity management system and includes PIV enrollment data, cardholder identity attributes, information regarding the cardholder’s PIV Card, and any derived PIV credentials bound to the account.
- Orphan Account - A system account that is not linked to a digital identity or is unmanaged.
- [Vetting](https://www.federalregister.gov/documents/2017/01/23/2017-01623/amending-the-civil-service-rules-executive-order-13488-and-executive-order-13467-to-modernize-the){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - The process by which covered individuals undergo investigation, evaluation, and adjudication of whether they are, and remain over time, suitable or fit for federal employment. This includes eligibility to occupy a sensitive position,access to classified information, serve as a non-appropriated fund employee or a contractor, serve in the military, or authorized to be issued a federal identity credential. This ensures individuals continue to meet the applicable standards for the position for which they were favorably adjudicated.

### Audience

The primary audience is an agency Identity, Credential, and Access Management (ICAM) Program Manager. The table below lists secondary audience members and how to engage them.

<p align="center"><b>Table 1: Stakeholder Table.</b></p>

| Stakeholder | Stakeholder Type | Engagement Point |
| ----- | ------ | ------ |
| Agency ICAM Governance | Governance Body | Reduce risk through lifecycle management and meet the intent of OMB Memos 19-17 and 22-09. |
| Application Owners | Office | ICAM service consolidation and modernization to identity-centric security processes. |
| Human Resources | Office | Authoritative attribute source. |
| Security/Vetting | Office | Eligibility, visibility, audit, reporting, and authoritative attribute source. |
| Training	| Office | Authoritative attribute source. |

### Disclaimer

The Identity Lifecycle Management Working Group of the Federal Chief Information Security Officer Council ICAM Subcommittee developed this Playbook. U.S. Federal Executive Branch agencies can use this Playbook to plan identity lifecycle activities and services related to the FICAM Architecture Services Framework. This Playbook is not official policy, mandated action, or provides authoritative information technology terms. It includes best practices to supplement existing federal policies and builds Office of Management and Budget Memorandum 19-17, and existing FICAM guidance and playbooks. Subject areas with intersecting scopes, such as credentialing standards, human resources processes, and Continuous Diagnostic and Mitigiation (CDM) are considered only to the extent that they relate to ICAM services delivered in a cloud service model. Privileged access management (e.g., superusers, domain administrators) is out of scope for this Playbook. 

## Identity Lifecycle Management 101

Identity Lifecycle Management is a core identity service to protect federal data. As with our human identities, our digital identities follow a similar process from creation to retirement. Employees complete vetting/identity proofing, have accounts created on multiple systems, get promoted, and eventually leave an organization. Identity Lifecycle Management encompasses the activities of creating, identity proofing/vetting, provisioning, aggregating, maintaining, and deactivating digital identities on an agency’s enterprise identity, credential, and access management (ICAM) system. **This playbook can aid agencies in understanding how to shift the focus from managing the lifecycle of credentials to the lifecycle of identities outlined in [section III of OMB Memo 19-17](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}**. 

It’s common in the federal ICAM community to synonymously refer to everything identity related as PIV and compare processes to how an agency would do an identity process with a PIV card. A key distinction between a digital identity and a PIV card is formalized in a master user record which is a unique representation of a user’s accounts, personas, attributes, entitlements, and credentials within an organization. One digital identity is linked to one PIV card, but that one identity may have multiple accounts, attributes, entitlements, and potentially other non-PIV credentials (e.g., username and password, one-time pin apps) that are used to access applications where a PIV card is not used. **This playbook can also help agencies understand how to support non-PIV authenticators outlined in the [identity section of OMB Memo 22-09](https://zerotrust.cyber.gov/federal-zero-trust-strategy/#identity){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}**

This playbook has two distinct sections.
1.	The first section is an overview of identity lifecycle management. It explains the distinct processes involved in managing identities and gives a brief description of the similarities and differences in managing a PIV card versus managing an identity.
2.	The second section contains plays on how to create an identity lifecycle management process within your agency. It includes four steps to create a policy, architect a solution, create a master user record, and then integrate the master user record for entrprise-wide use.

The next section will outline the identity lifecycle process.

### Identity Lifecycle Process

Identity lifecycle management is the evolution of an identity from creation to retirement. The lifecycle management process includes three distinct phases with individual steps within each phase. These phases are known as the Joiner-Mover-Leaver process.

<p align="center"><b>Figure 1: Identity Lifecycle Process</b></p>
 
<img src="{{site.baseurl}}/assets/playbooks/ilm-lifecycle-process.png" alt="A circular diagram demonstrating the six identity lifecycle stages that comprise a joiner-mover-leaver lifecycle process." style="width:800px;" >

**Stage 1 - Joiner**
1. **Creation** - Establish a new master user record or an identity associated with an existing master user record made of attributes that define a person or entity. Processes associated with creation include digital identity or authoritative attribute source.
2. **Identity Proofing/Vetting** - The process by which information is collected, validated, and verified about a person.  For federal employees, contractors, and anyone working for or on behalf of the government this phase will include the prerequisite vetting investigation and adjudication. Processes associated with identity proofing include source document validation, identity verification, remote proofing, or in-person proofing.
3. **Provisioning** - Create, manage, and delete accounts and entitlements in dependent systems. Dependent systems are either authoritative attribute sources such as directories or consuming sources such as single sign-on system and applications with provisioning processes. Processes associated with provisioning include entitlement management, grant access, remove access, account management, and account creation.

**Stage 2 - Mover**
1. **Maintenance** - Maintain accurate and current attributes and entitlements associated with a master user record. Processes associated with maintenance include attribute management or access reviews. 
2. **Identity Aggregation** - Find and connect disparate digital identities to a master user record. Processes associated with identity aggregation include identity reconciliation, identity resolution, master user record, account linking, and separation of duty analysis.

**Stage 3 - Leaver**
1. **Deactivation** - Deactivate or remove a master user record or identities associated with a master user record. Processes associated with deactivation include suspension, archive, or deletion.

A key element of lifecycle management is the concept and execution of a master user record. 

```A Master User Record is a unique representation of a user’s accounts, personas, attributes, entitlements, and credentials within an organization.```

<p align="center"><b>Figure 2: Account Aggregation Process to Create a Master User Record</b></p>

 <img src="{{site.baseurl}}/assets/playbooks/ilm-account-aggregation.png" alt="A two-pane diagram. The left pane shows three accounts for the same user that are treated as separate accounts. The right page shows the same three accounts but are connected to the same user through a master user record." style="width:800px;" >

A master user record aggregates user accounts, attributes, entitlements, and issued credentials to understand in a single view the access and authorization of a specific user. Within the DHS Continuous Diagnostics and Mitigation (CDM) data model, a Master User Record contains aggregated attributes from multiple authoritative sources. The below table is an overview of authoritative sources, the object types, and attributes collected.

<p align="center"><b>Table 2: Data Elements in the DHS CDM Master User Record</b></p>

| Authoritative Attribute Source | Object Type | Attributes Collected |
| ----- | ----- | ---- |
| Agency HR	| Role | Job Title, Department, Component, Location, Manager, User Type (Gov, Contractor, Non-Person, Other) |
| Agency HR	| Status | Status (Active, Leave Type, Inactive, Suspended) |
| Agency IDMS | User | Unique Identifier (UserID), Full Name, Email |
| Agency IDMS | CRED | Credential Types Issued |
| Agency IDMS | Accounts | List of accounts associated with this user |
| Agency IDMS | PRIV | Privilege Type, Status, Associated System |
| Agency IDMS | Entitlement | Entitlement Type |
| Vetting System | TRUST | Eligibility, Status, Type of vetting completed |
| Training System | BEHAVE | Security Training Status, Training Types |

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

A key theme in OMB Memo 19-17 is for federal agencies to shift the focus from managing the lifecycle of credentials to managing the lifecycle of identities. What does this mean? The main focus of this statement is for federal agencies to **create a centralized and agile identity and access management system that leverages attributes for fine-grained authorization rather than based on a credential**. This focus shift will help agencies achieve an enterprise ICAM system that is agile to support technology modernization. Examples of shifting the operating model include the following.

<p align="center"><b>Table 3: Identity-Centric Versus Credential-Centric</b></p>

| Identity-Centric | Credential-Centric |
| ----- | ------ |
| Enable Single Sign-On for agency applications | Manage authentication at each individual application. |
| Federate application for external partner access.	| Application-specific authentication using a PIV card or Username and Password. | 
| Support a variety of phishing-resistant authenticators with a path toward a total passwordless architecture. | Only support PIV card authentication or Username and Password as a backup. |
| Leverage attributes aggregated through a MUR for fine-grained authorization. | Leverage attributes only from a PIV Card for authorization. |

{% include alert-success.html heading="Myth Busted - A PIV Card is my only option" content="While an employee using PIV is the ultimate security goal, what happens when a PIV is either not available or not compatible with the access requirements? Employees lose PIV cards and it may take days, weeks, or months for an employee to receive their new or replacement PIV. An agency should have a phishing-resistant alternative when a PIV card is not available. Allowing username and password as a backup option should not be the default policy exception." %} 

### Phishing-Resistant Authenticator Binding

A PIV card is the result of identity proofing/vetting. After identity proofing and initial identity vetting are complete (to include interim eligibility through favorable review of fingerprint results and initiation of required investigation), a human identity is bound to a PIV card through the public key infrastructure certificate issued on the PIV smart card. The smart card is bound to the digital identity in an agency’s Master User Record and enterprise identity management system. This can then be provisioned to other directories, applications, physical access control systems, and single sign-on systems. Without the binding, the PIV card to these directories and applications is just a physical identification badge. The same process to bind a PIV to a digital identity is the same process an agency can use to bind other PKI and Non-PKI Derived PIV credentials. [Federal Information Processing Standard (FIPS) 201-3 section 2.10](https://pages.nist.gov/FIPS201/FIPS201.html#s-2-10){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} states the following on Derived PIV credentials.
1.	Binding and issuing of Derived PIV credentials shall use valid PIV Cards to establish cardholder identity.
2.	Derived PIV credentials shall meet the requirements for Authenticator Assurance Level (AAL) 2 or 3 specified in NIST Special Publication 800-63.
3.	Derived PIV credentials shall be bound to the cardholder’s PIV identity account only by the issuing department or agency responsible for managing the PIV identity account in the agency’s enterprise identity management system.

Derived PIV credentials are not embedded in the PIV card, but are stand-alone credentials integrated into a variety of devices or platforms. This binding of multiple Derived PIV Credentials is possible through creating a Master User Record. These Derived PIV credentials can include a stand-alone Fast ID Online (FIDO) 2 using Web Authentication (WebAuthN) mentioned in OMB Memo 22-09. 

The most common way to integrate non-PKI-derived credentials is through a modern Single Sign-On tool or operating system that supports FIDO2 or WebAuthN. Derived PIV credentials play an important role in environments where a smart card is not cost effective or supported such as chrome operating system, mobile devices, and secure offices. Per [OPM, December 2020 guidance](https://www.opm.gov/suitability/suitability-executive-agent/policy/cred-standards.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} if the PIV credential is suspended or revoked, any associated derived credentials must also be suspended or revoked.

{% include alert-success.html heading="Myth Busted - This authenticator is not HSPD-12 or FIPS 201 compliant" content="HSPD-12 identifies four criteria for secure and reliable forms of identification. FIPS 201 outlines the criteria to issue a PKI-based smart card credential. Agencies use One-Time Pin tokens and One-Time PIN mobile applications while they migrate to a phishing-resistant option. Agencies may make a risk decision to use a variety of phishing-resistant authenticators like PIV or other PKI or and non-PKI FIDO certified phishing-resistant authenticators." %} 

## Shift From Managing Credentials to Managing Identities

This playbook intends to help agencies achieve OMB Memo 19-17 outcomes to shift the focus operating model from managing access based solely on credentials to managing the lifecycle of identities and the appropriate job functions and roles as they evolve over time in an agency or the federal government. The [Identity Management services in the Federal ICAM architecture]({{site.baseurl}}/arch/#services-framework-and-service-descriptions){:target="_blank"}{:rel="noopener noreferrer"} include Creation, Identity Proofing, Provisioning, Maintenance, Identity Aggregation, and Deactivation. These services are collectively known as Identity Lifecycle Management (ILM).

### Step 1. Document the Process in an Agency Policy

Document an agency policy to identify the roles and responsibilities required to implement an identity lifecycle management process. It is a good practice to coordinate the document through the agency’s ICAM governance body to ensure all interested stakeholders are aware of the initiative and their respective responsibilities. This document should complement or be included in the agency’s existing ICAM policy. For more information on ICAM program management or the ICAM governance body, see the [ICAM Program Management Playbook]({{site.baseurl}}/university/pm/#program-governance-and-leadership){:target="_blank"}{:rel="noopener noreferrer"} or the [ICAM Governance Framework]({{site.baseurl}}/docs/playbook-identity-governance-framework.pdf){:target="_blank"}{:rel="noopener noreferrer"}. The agency policy should include the following elements.
1. Outline the purpose of implementing ILM.
2. The roles and responsibilities are mapped to the authoritative attribute source. Such as:
   1. Training Office to gather security training status.
   2. Security/Vetting Office to gather PIV eligibility status.
   3. HR Office to gather employment information status.
   4. Application Owners to identify entitlements that are appropriate to a role and assigned to a user.
   5. Identify other offices as needed.
3.	Specific steps or actions for roles at each step of a Joiner-Mover-Leaver process that aligns with the FICAM architecture identity management services.
4.	Agency or government references.
5.	A point of contact.

An agency policy ensures an agency-wide commitment to implementing and operating an identity lifecycle management process. 

{% include alert-success.html heading="Myth Busted - We don’t need a specific policy for Identity Lifecycle Management" content="It is true an agency doesn’t need a specific policy for ILM, but either having a policy or integrating lifecycle management into your agency policy ensures a consistent approach with executive leadership support. Without leadership support, your ILM initiative may not achieve enterprise-wide adoption.
" %} 

### Step 2. Architect the Solution

The solution is how your agency will implement ILM. Most solutions are based on two technologies.
1.	**Virtual Directory** - A virtual directory is a specific type of identity directory that aggregates data from multiple data sources. An Enterprise Identity Store is an example of a virtual directory. Data sources include multiple Active Directory instances, application directories, cloud directories, and other relational databases. A virtual directory leverages a combination of Lightweight Directory Access Protocol (LDAP), Application Programming Interface (API), or System for Cross-domain Identity Management (SCIM) to aggregate data. A virtual directory is often necessary for large organizations that have user directories operated across multiple operational components or divisions. Some Single Sign-On tools, which perform access management, may also support a virtual directory capability.
1. **Identity Governance and Administration (IGA)** - An IGA tool inventories, analyzes, and reports on access and entitlements within an enterprise. It has virtual directory features to aggregate identity information from multiple other directories. By integrating with authoritative sources and applications an IGA tool can report on who has access, what they can access, and why they have access. An IGA tool is a primary mechanism to perform access reviews. It can be a stand-alone tool or part of an IDMS suite.

Each tool has a distinct purpose. Your agency should consider your overall ICAM architecture to understand the cost, overlapping capabilities, and talent necessary to implement and maintain an ILM capability. 

<p align="center"><b>Figure 3: DHS CDM Master User Record Architecture</b></p>

 <img src="{{site.baseurl}}/assets/playbooks/ilm-cdm-mur.png" alt="A diagram of the CDM MUR which includes sources systems for MUR attributes on the left, the MUR instance in the middle, and CDM Dashboard reporting on the right." style="width:800px;" >

### Step 3. Create the Master User Record

An authoritative attribute source is a repository or system that contains one or more attributes about a digital identity and is considered the primary or most reliable source for this information. For example, the most reliable source for an employee status attribute (active, leave, suspended, deactivated) is usually in a human resources system. The first step in identifying authoritative attribute sources is understanding what attributes are needed within your agency. This data analysis and collection process may include:
-	**Agency Vetting System** - Contains investigative and adjudicative results on suitability or fitness for federal employment, eligibility to occupy a sensitive position, eligibility for access to classified information, and eligibility for a federal identity credential (e.g., PIV). Consult your Security/Vetting office on IT integration planning and implementation with ILM.
-	**Card Management System** - An agency’s card management system 
-	**Application Analysis** - Conducting an internal application analysis from the [Single Sign-On Playbook]({{site.baseurl}}/playbooks/sso/#step-2-plan-application-integration){:target="_blank"}{:rel="noopener noreferrer"} to identify which attributes are used across which applications. For example, employee access is dependent on current and complete IT security training. The security training attribute is most likely in the agency’s training system, but specific to application access. 

These are sources that you use to create a digital identity. The attributes are what you pull from the authoritative sources to add to that digital identity.

<p align="center"><b>Figure 4: Example of an Orphan Account</b></p>

 <img src="{{site.baseurl}}/assets/playbooks/ilm-orphan-account.png" alt="Jane Doe leaves the agency and her Master user Record is suspended which also suspends her application access. Her dev environment account is not associated to her master user record and is now orphaned and still active." style="width:800px;" >

To properly implement attribute changes, you should identify authoritative data sources that drive how the attribute change is implemented and are shared with connected systems.  However, if there is not a process in place to drive the use of the authoritative data sources, the process will be inefficient and may result in vulnerabilities, like excess, "orphaned" accounts. An orphaned account is a potential risk because it is either unmanaged, not owned, or not linked to a digital identity. 

An example of an orphaned account includes active employee accounts where the employee no longer works for the organization. Another example is a Microsoft service account for an application that no longer exists. It is recommended to keep a list of identity data that is available, know where it originates, and what systems are authoritative in that way. The most common pattern to integrate attributes into an ILM tool is based on connection methods of an authoritative attribute source.
-	Legacy and on-premises applications most likely support LDAP.
-	Cloud applications most likely support an API or SCIM.

{% include alert-info.html heading="No Orphaned Accounts" content="Agencies should focus on identifying and reducing the number of orphaned accounts and especially orphaned accounts with privileged access." %} 

The main benefits of a master user record include:
1.	A single view of all digital identities within an agency.
2.	Identify users by vetting status, credential type, training status, privileged, and non-privileged accounts.
3.	Aid in cyberstat reporting for ICAM questions.
4.	A foundational element to implement more mature identity processes when integrated with other agency systems such as access management and information technology service management (ITSM).

### Step 4. Integrate with Agency Enterprise Services

An agency can further realize the benefit of ILM by integrating the master user record with other agency enterprise ICAM services. This integration can aid agencies to automate provisioning, de-provisioning, and reporting as well as in federating both within and external to an agency. In this context, the federation is transferring identity and authentication between networked systems rather than relying on siloed information specific to the target application.

<p align="center"><b>Figure 5: ILM Integration with Single Sign-On</b></p>
 
<img src="{{site.baseurl}}/assets/playbooks/ilm-sso-integration.png" alt="Diagram demonstrating an agency use case to integrate a MUR with agency single sign-on to help federate access to other agency applications." style="width:800px;" >

The following is an example of the benefits of a master user record and integration with an access management tool for a cross-agency federation use case.

**Use Case** - An agency employee needs to collaborate with another government agency. The other government agency application requires a specific human resources attribute to access the application. The application is federated with the employee's home agency and allows a partner agency to use their home single sign-on to authenticate to the tool.
1.	The agency adds the human resources attribute to the individual employee record using a bulk update in the Master User Record.
2.	The Master User Record is available to the Single Sign-On tool in an assertion protocol.
3.	The Single Sign-On adds the additional human resource attribute in an assertion to the partner application to facilitate authentication and authorization in the partner application. 

Make attributes available for authorization decisions. Federation is not only accepting credentials as proof from other agencies but also making your identity credentials available to other agencies.
 - Attributes are available to your agency via SSO assertions.
 - Focus on the best practice of using assertion protocols rather than exposing attributes externally.
- Focus on authorization through federation rather than on PIV. PIV is a static credential with static attributes. SSO with Federation is dynamic-based on the SSO integration with a master user record. It is easier to update a directory than a PIV credential.

See the [Cloud Identity Playbook Federation section]({{site.baseurl}}/playbooks/cloud/#federation) for more information on federation and using trust frameworks for government, mission partner, or public identity federation.

## Summary

The ILM playbook outlined an identity lifecycle process and four steps to create a master user record and lifecycle process within your agency. ILM is the evolution of an identity from creation to deactivation. There are specific steps within each lifecycle phase of the joiner-mover-leaver process. A master user record is the core of ILM and acts as an aggregation point of identity data for all agency users. A master user record integrated with access management tools provides a foundation for more mature ICAM processes.
 
## Appendix A. Policies, Standards, and Guidance

### Federal Policies

1.	[Executive Order 14028 - Improving the Nation’s Cybersecurity](https://www.federalregister.gov/documents/2021/05/17/2021-10460/improving-the-nations-cybersecurity){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
2.	[OMB Memo 22-09 - Moving the U.S. Government Toward Zero Trust Cybersecurity Principles](https://zerotrust.cyber.gov/downloads/M-22-09%20Federal%20Zero%20Trust%20Strategy.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
3.	[OMB Memo 21-31 - Improving the Federal Government’s Investigation and Remediation Capabilities Related to Cybersecurity Incidents](https://www.whitehouse.gov/wp-content/uploads/2021/08/M-21-31-Improving-the-Federal-Governments-Investigative-and-Remediation-Capabilities-Related-to-Cybersecurity-Incidents.pdf){:target="_blank"}{:rel="noopener noreferrer"}
4.	[OMB Memo 19-17 - Enabling Mission Delivery through Improved Identity, Credential, and Access Management](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

### Government Standards

1.	[Federal Information Processing Standard 201 - Personal Identity Verification of Federal Employees and Contractors](https://csrc.nist.gov/publications/detail/fips/201/3/final){:target="_blank"}{:rel="noopener noreferrer"}
2.	[NIST Special Publication 800-63 - Digital identity Guidelines](https://pages.nist.gov/800-63-3/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
3.	[NIST Special Publication 800-157 - Guidelines for Derived PIV Credentials](https://csrc.nist.gov/publications/detail/sp/800-157/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

### Government-Wide Guidance

1.	[FICAM Architecture]({{site.baseurl}}/why/icam/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
2.	[ICAM Governance Framework]({{site.baseurl}}/docs/playbook-identity-governance-framework.pdf){:target="_blank"}{:rel="noopener noreferrer"}
3.	[NIST Special Publication 800-63 Additional Information Sources Including Conformance Criteria](https://pages.nist.gov/800-63-3/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
4.	[NIST Interagency Report 8149 - Developing Trust Frameworks to Support Identity Federations](https://csrc.nist.gov/publications/detail/nistir/8149/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
5.	[OPM Credentialing Standards Procedures for Issuing Personal Identity Verification Cards under HSPD-12 and New Requirement for Suspension or Revocation of Eligibility for PIV Credentials](https://www.opm.gov/suitability/suitability-executive-agent/policy/cred-standards.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

### References

1.	[Department of Defense ICAM Reference Design](https://dodcio.defense.gov/Portals/0/Documents/Cyber/DoD_Enterprise_ICAM_Reference_Design.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
2.	[DHS CDM Max.gov Page](https://community.max.gov/download/attachments/1843519190/CDM-ARCH-2017-01.1.1-MUR-FUNCT-DESCR%2012082017.pdf?version=1&modificationDate=1568732697362&api=v2){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
3.	[IDPro Body of Knowledge - An Overview of Digital Identity Lifecycle](https://bok.idpro.org/article/id/31/){:target="_blank"}{:rel="noopener noreferrer"}
4.	[System for Cross-domain Identity Management (SCIM)](https://scim.cloud/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

