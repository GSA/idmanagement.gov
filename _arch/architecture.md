---
layout: page
collection: arch
title:  FICAM Architecture
permalink: /arch/
sidenav: arch
sticky_sidenav: true

subnav:
  - text: Introduction
    href: '#introduction'
  - text: Goals and Objectives
    href: '#goals-and-objectives'
  - text: Services Framework and Service Descriptions
    href: '#services-framework-and-service-descriptions'
  - text: Use Cases
    href: '#use-cases'
  - text: Reference Example
    href: '#reference-example'
  - text: Policies and Standards
    href: '#policies-and-standards'

---


<img src="{{site.baseurl}}/assets/img/logo-gsa.png" width="64" height='64' align="left" alt="U.S. General Services Administration Logo">
<img src="{{site.baseurl}}/assets/img/logo-cio-round.png" width="64" height='64' align="left" alt="U.S. Federal Chief Information Officer Council Logo"><br><br>

<br>
<div class="usa-accordionusa-accordion usa-accordion--bordered">
    <h4 class="usa-accordion__heading">
        <button class="usa-accordion__button" aria-expanded="false" aria-controls="n-a1">Date: June 30, 2023 - Version: 3.3</button>
    </h4>
    <div id="n-a1" class="usa-accordion__content usa-prose">

<table class="usa-table">
  <caption>
    FICAM Architecture version table
  </caption>
  <thead>
    <tr>
      <th scope="col">Version Number</th>
      <th scope="col">Date</th>
      <th scope="col">Change Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">3.3</th>
      <td>6/20/2023</td>
      <td>Combined separate architecture pages into a single web page. Updated change table to reflect all version updates.</td>
    </tr>
    <tr>
      <th scope="row">3.2</th>
      <td>9/30/2022</td>
      <td>Editorial updates.<ul><li>1. Consolidated use cases into a table format.</li><li>Combined services framework and services description.</li><li>Updated access management services description to differentiate authentication from authorization and include an overview of difference access models.</li></ul><p>Map FICAM playbooks to FICAM Roadmap Part B content. **Version 3.2 sunsets FICAM Roadmap Part B content**.</p></td>
    </tr>
    <tr>
      <th scope="row">3.1</th>
      <td>1/6/2021</td>
      <td>FICAM Architecture v3.1 incorporates updates proposed by the Federal CISO Council ICAM Subcommittee.<ul><li>Clarified introduction, goals, and objectives section.</li><li>Added Privileged Access Management as Access Management Service.</li><li>Added Identity Governance as Governance Services.</li><li>Streamlined use case language and order.</li><li>Updated system component examples.</li><li>Updated standards and policies.</li><li>Updated graphics.</li></ul></td>
    </tr>
    <tr>
      <th scope="row">3.0</th>
      <td>11/27/2019</td>
      <td>Version 3.0 for the Architecture represents the baseline changes to FICAM Roadmap Part A released in 2016. <strong>Version 3.0 sunsets FICAM Roadmap Part A content</strong>.</td>
    </tr>
    <tr>
      <th scope="row">2.0</th>
      <td>12/2/2011</td>
      <td>Revised to include new Part B:Implementation Guidance<ul><li>Chapter 6: ICAM Implementation Planning</li><li>Chapter 7: Initiative 5: Streamline Collection and Sharing of Digital Identity Data</li><li>Chapter 8: Initiative 6: Fully Leverage PIV and PIV-I Credentials</li><li>Chapter 9: Access Control Convergence</li><li>Chapter 10: Initiative 7: Modernize PACS Infrastructure</li><li>Chapter 11: Initiative 8: Modernize LACS Infrastructure</li><li>Chapter 12: Initiative 9: Implement Federated Identity Capability</li><li>Inclusion of Glossary appendix</li><li>Editorial and formatting corrections</li><li>Terminology updates to maintain consistency between Parts A and B</li><li>Updates to content related to the Federal Public Key Infrastructure to reflect infrastructure upgrades since original publication.</li></ul></td>
    </tr>
    <tr>
      <th scope="row">1.0</th>
      <td>11/10/2009</td>
      <td>Initial publication of the document, including:<ul><li>Chapter 1: Introduction</li><li>Chapter 2: Overview of ICAM</li><li>Part A: ICAM Segment Architecture</li><li>Chapter 3: ICAM Segment Architecture</li><li>Chapter 4: ICAM Use Cases</li><li>Chapter 5: Transition Roadmap and Milestones</li></ul></td>
    </tr>
  </tbody>
</table>
    <!-- Version Table End -->
    </div>
</div>


## Introduction

FICAM is the federal government’s implementation of Identity, Credential, and Access Management (ICAM).

> **_ICAM_** is the set of tools, policies, and systems that an agency uses to enable the **_right individual_** to access the **_right resource_**, at the **_right time_**, for the **_right reason_** in support of **_federal business objectives_**.

This version of the FICAM Architecture encompasses the **enterprise** ICAM policies, technologies, and system approaches for government employees, contractors, and authorized partners. Citizen interactions with the federal government - or consumer ICAM - are not covered under this version of the FICAM Architecture.

The following diagram is a high-level view of the ICAM practice areas and supporting elements. 

<img src="{{site.baseurl}}/assets/arch/intro_ConceptualDiagram.png" alt="A diagram with definitions and icons for identity, credential, and access management and definitions for federation and governance.">

The FICAM Architecture includes government-wide enterprise architecture views with the flexibility to support each agency’s unique business or mission needs. Use the FICAM Architecture as a tool to continuously improve upon your agency’s approach and align with federal security and privacy initiatives.

Copy the graphics and text throughout this playbook to use at your agency to drive ICAM awareness, strategy developments, and communications.

## What Is ICAM?

ICAM is the set of tools, policies, and systems that an agency uses to enable the right individual to access the right resource at the right time for the right reason in support of federal business objectives.

Agencies implement ICAM services and solutions to unify their IT services, improve physical access control, and improve information security and decisions. Understanding the building blocks of ICAM is key to understanding the FICAM Architecture. ICAM has three practice areas and two supporting elements. The supporting elements enhance the capabilities of the practice areas.

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px; overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px; overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-yj5y{background-color:#efefef;border-color:inherit;text-align:center;vertical-align:middle;font-family: "Cambria", "Georgia", "Times New Roman", "Times", serif;}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top;font-family: "Cambria", "Georgia", "Times New Roman", "Times", serif;}
</style>

<table class="tg" role="presentation">
  <tr>
    <td class="tg-yj5y" colspan="2"><b>ICAM Practice Areas</b></td>
  </tr>
  <tr>
    <td class="tg-0pky"><img src="{{site.baseurl}}/assets/arch/intro_ICAM-Identity.png" alt="Three hexagons with the letters I, C, and A. The I is highlighted in orange for Identity Management." width="125"><br></td>
    <td class="tg-0pky"><span style="font-weight:bold">Identity Management</span> is how an agency collects, verifies, and manages attributes to establish and maintain enterprise identities for employees and contractors.</td>
  </tr>
  <tr>
    <td class="tg-0pky"><img src="{{site.baseurl}}/assets/arch/intro_⁮ICAM-Credential.png" alt="Three hexagons with the letters I, C, and A. The C is highlighted in green for Credential Management." width="125"><br></td>
    <td class="tg-0pky"><span style="font-weight:bold">Credential Management</span> is how an agency issues, manages, and revokes credentials bound to enterprise identities.</td>
  </tr>
  <tr>
    <td class="tg-0pky"><img src="{{site.baseurl}}/assets/arch/Intro_ICAM-Access.png" alt="Three hexagons with the letters I, C, and A. The A is highlighted in blue, for Access Management." width="125"><br></td>
    <td class="tg-0pky"><span style="font-weight:bold">Access Management</span> is how an agency authenticates enterprise identities and authorizes appropriate access to protected services.</td>
  </tr>
  <tr>
    <td class="tg-yj5y" colspan="2"><b>ICAM Supporting Elements</b></td>
  </tr>
  <tr>
    <td class="tg-0pky"><img src="{{site.baseurl}}/assets/arch/Intro_ICAM-Federation.png" alt="Three hexagons with the letters I in orange, C in green, and A in blue, with a gray banner for Federation." width="125"><br></td>
    <td class="tg-0pky"><span style="font-weight:bold">Federation</span> is the technology, policies, standards, and processes that allow an agency to accept digital identities, attributes, and credentials managed by other agencies.</td>
  </tr>
  <tr>
    <td class="tg-0pky"><img src="{{site.baseurl}}/assets/arch/intro_ICAM-Governance.png" alt="Three hexagons with the letters I in orange, C in green, and A in blue, with a navy banner for Governance." width="125"><br></td>
    <td class="tg-0pky"><span style="font-weight:bold">Governance</span> is the set of practices and systems that guide ICAM functions, activities, and outcomes.</td>
  </tr>
</table>

## What Is the FICAM Architecture?
FICAM is the federal government’s enterprise approach to design, plan, and execute common ICAM processes.

The FICAM Architecture is a framework for an agency to use in the ICAM program and solution roadmap planning. The FICAM Architecture focuses on enterprise identity processes, practices, policies, and information security disciplines. 

>  A federal enterprise identity is the unique representation of an employee, contractor, or enterprise user, which could be a mission, business partner, or even a device or technology managed by a Federal agency to achieve its mission and business goals [(OMB Memorandum 19-17)](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf){:target="_blank"}{:rel="noopener noreferrer"}.

## Who Is the FICAM Architecture for?
The FICAM Architecture is for agency personnel. An enterprise architecture is primarily used by:
- **Senior Federal IT and Agency Stakeholders** to understand the concepts for identity and access management services and the basic use cases supporting business objectives.
- **Program Managers** to find common definitions and frameworks for use in planning.
- **Enterprise and Application Architects** to use a common framework for designing and governing IT systems, applications, and implementations.

There are four main government-wide initiatives to help agencies implement and manage an Agency ICAM program and technology.

  1. **Planning and Configuration Guidance** The FICAM Architecture and accompanying [playbooks]({{site.baseurl}}/playbooks/) provide an overall guide for meeting federal ICAM requirements in an efficient and secure way. It focuses on enterprise identity processes, practices, policies, and information security disciplines. Playbooks offer stakeholders overarching strategies and tactical approaches for implementing technical FICAM topics.
  2. [Interagency Forum and Subcommittee]({{site.baseurl}}/ficam/#icam-governance-bodies): The Federal Chief Information Security Officer (CISO) Council is a primary resource for identity management, secure access, authentication, authorization, credentials, privileges, and access lifecycle management. The ICAM Subcommittee aligns identity management activities of the federal government and supports collaborative government-wide efforts.
  3. [Approved Products Lists (APL)]({{site.baseurl}}/fips201/): The Federal Information Processing Standard 201 (FIPS 201) Evaluation Program not only tests commercial products for use in Personal Identity Verification (PIV) credentialing systems, physical access control systems (PACS), and public key infrastructures but also publish APLs. Federal acquisition professionals rely on these APLs to purchase commercial products that fully comply with federal ICAM mandates.
  4. [Federal Public Key Infrastructure (PKI)]({{site.baseurl}}/university/fpki/): The Federal PKI is a network of certification authorities (CAs) that issue PIV credentials and person identity certificates; PIV-Interoperable credentials and person identity certificates; and other person identity certificates. CA-issued digital certificates, which employ cryptography, close security gaps in user identification and authentication, encryption of sensitive data, and data integrity.

## What Is the History of the FICAM Architecture?
The FICAM Architecture was created in 2009 to provide a common ICAM segment architecture for federal agencies. The FICAM Architecture was the primary foundation of what later became the _FICAM Roadmap and Implementation Plan_, enhanced with complementary implementation sections.  

In 2015, ICAM experts from across the federal government collaborated on an updated FICAM Architecture.  This update was intended to be more concise, easy to understand, and visually appealing while reflecting the latest updates in cybersecurity, enterprise architecture, and ICAM policy and technology.

This site contains the current version of the FICAM Architecture.  The FICAM Roadmap and Implementation Guidance v2.0 is superseded by both the FICAM Architecture updates and other complementary modernized playbooks developed by ICAM committees across government. 

## Goals and Objectives

The Goals and Objectives identify the aims and outcomes of a federal agency enterprise ICAM program. The goals and objectives align with ICAM functions and map to government-wide policies, cross-agency priorities, and strategic government initiatives.

**Goals** are aspirational statements designed for senior government leaders, agency executives, and agency ICAM program leadership responsible for setting program strategy. **Objectives** are action areas where agency execution strategies, action plans, and performance metrics can be developed based on alignment with mission needs.

The visual below presents the three goals, each with its own objectives.

<a href="{{site.baseurl}}/assets/arch/all_goals.png" target="_blank">
  <img src="{{site.baseurl}}/assets/arch/all_goals.png" alt="Three boxes that define the goals and their corresponding objectives.">
</a>

**Goal 1: Modernize security policies and solutions to make risk-based decisions, automate identity and access management processes, and move access protections closer to government data.**

- 1.1 Review, update, and maintain comprehensive ICAM policies and technology solution roadmaps to inform and enforce enterprise strategic planning, risk management, and modernization.
- 1.2 Adopt and use cloud-ready systems that provide an efficient and secure way to access resources.
- 1.3 Monitor and respond to user behavior and events by using data as a strategic asset to make adaptive and risk-based decisions.

**Goal 2: Enable missions to efficiently deliver services to federal and contractor employees and resources.**

- 2.1 Establish and manage identities for all enterprise users and resources.
- 2.2 Design enterprise solutions to manage access to information and resources.
- 2.3 Use enterprise identity information discovery and enterprise centralized access management.
- 2.4 Leverage federated solutions to accept identity and authentication assertions made by other agency and mission partners when efficient.

**Goal 3: Provide enterprise-level solutions within agencies to improve operations and promote cost-effective and efficient use of resources.**

- 3.1 Streamline ICAM governance and program management within each agency to optimize execution, ensure consistency, and align intent across the enterprise.
- 3.2 Evaluate, rationalize, and migrate to modern, cloud-smart solutions for ICAM services.
- 3.3 Promote interoperability and efficiency across the federal government by buying and building ICAM solutions that use open, commercially adopted standards.

## Services Framework and Service Descriptions

The Services Framework is a tool designed for ICAM program managers and information technology enterprise architects. It identifies the services that provide functionality within the scope of ICAM and assists in distinguishing between business requirements and technical solutions. The services framework includes the five practice areas and services within.

## Practice Area Visual 

The graphic below illustrates the five ICAM practice areas and provides a list of services that fall within each area. 

<img src="{{site.baseurl}}/assets/arch/services/services_overview.png" alt="Five boxes that each correspond to a FICAM practice area or supporting element. Each box lists the agency services that correspond to that area. You can find the services and definitions in the following pages.">

## Identity Management

<img src="{{site.baseurl}}/assets/arch/services/services_identity_management.png" alt="An orange box with the list of Identity Management services defined later in the body text of this page."  width="314" height="400" align="right" style="padding-left:30px">

Identity Management is how an agency collects, verifies, and manages attributes and entitlements to establish and maintain enterprise identities for federal government employees, contractors, and authorized mission partners. This service does not apply to public or consumer identity management.

An enterprise identity record is the set of attributes or characteristics that describes a person within a given context:

- Your identity within your agency’s Human Resources (HR) system is different from your personal identity at your bank.
- A person’s identity as a government contractor is different from their identity as an Army Reservist.

Although your identity remains the same over time, it evolves as your attributes change, such as when you get a promotion, change your name, receive additional training, or retire.

Agencies should manage identity attributes as centrally as possible and distribute them as needed. Examples of identity attributes include:

- *Core identity attributes* - First name, last name, and address of record.
- *Contact attributes* - Physical location, government phone number, and government email address.
- *Authorization attributes* - Clearance, training, and job codes.

An entitlement is a specific type of authorization attribute that refers to an application permission. Entitlements management is the act of managing those permissions. An agency may group multiple entitlements into a specific role or group to streamline provision and de-provision activities as well as for auditing and reporting purposes. For example, a new employee may require access to ten core enterprise applications on the first day of work. An agency can create a new employee group with new employee entitlements and automate the provisioning of the ten core applications rather than treat them as individual access requests.
Attributes and entitlements are created or aggregated through a number of manual and automated mechanisms. Mechanisms may include:

Attributes and entitlements are created or aggregated through a number of manual and automated mechanisms. Mechanisms may include: 

- Use a single sign-on tool to aggregate application access entitlements.
- Allow employees to update contact attributes in an employee record.
- Automate integration between a training system and an identity governance and administration tool to create and update annual security training.

Identity proofing is how an agency verifies an enterprise's identity. The complexity of this process depends on the Identity Assurance Level (IAL) required for an identity. Federal agencies require a minimum IAL3 for employees and contractors. For example, a federal employee or contractor presents identity attributes via a driver’s license or utility bill. The agency verifies the identity documents and the individual’s photo (biometric).

An identifier is a unique attribute used to locate an identity in a system:

- While your agency may issue Personal Identification Verification (PIV) cards to multiple people named John Smith, each individual has a different PIV card number.
- While your agency may have more than one employee named Jane Smith, each employee has a unique email address tied only to their identity.

The Identity Management services in the Federal ICAM architecture include Creation, Identity Proofing, Provisioning, Maintenance, Identity Aggregation, and Deactivation. These services are sometimes collectively known as **Identity Lifecycle Management**.

| Service | Description | Keywords |
| --- | ------ | -----|
| Creation | Establish an identity made of attributes that define a person or entity. | Identity Record, Authoritative Source |
| Identity Proofing | Use identity attributes to connect a digital identity to a real-world entity. | Source Document Validation, Remote Proofing, In-Person Proofing|
| Provisioning | Create, manage, and delete accounts and entitlements. | Identity Lifecycle Management, Workflow, De-provisioning, Account Management, Account Creation, Entitlements Management |
| Maintenance | Maintain accurate and current attributes in an identity record over its lifecycle. | Identity Lifecycle Management, Updating, Attribute Management |
| Identity Aggregation | Find and connect disparate identity records for the same person or entity. | Identity Reconciliation, Identity Resolution, Account Linking|
| Deactivation | Deactivate or remove enterprise identity records. | Identity Lifecycle Management, Suspension, Archiving, Deletion |

## Credential Management

<img src="{{site.baseurl}}/assets/arch/services/services_cred_management.png" alt="A green box with the list of Credential Management services defined later in the body text of this page." width="314" height="400" align="right" style="padding-left:30px">

Credential Management is how an agency issues, manages, and revokes credentials bound to enterprise identities.

A credential is a data structure that authoritatively binds an authenticator to an existing identity using one or more identifiers.

Types of authenticators include:

- Something you know, like a password or PIN.
- Something you have, like a private key or One-Time Password (OTP) generator.
- Something you are, like a fingerprint or an iris.

The Authenticator Assurance Level (AAL) determines the authenticators associated with a credential. Federal government-wide policy requires a minimum AAL2 for employees and contractors.

Examples of credentials include:

- An agency-issued smart card, such as a PIV or Common Access Card (CAC), that includes a picture and cryptographic key pairs to assert your identity at a federal facility.
- A combination of credentials, such as a username/password with an OTP generated by a mobile application, to assert your identity to a federal web application.

Unlike identities, credentials can expire. If an enterprise identity continues past a credential’s expiration date, the issuing agency can issue a new credential.

The Credential Management services in the FICAM architecture include Sponsorship, Registration, Generation & Issuance, Maintenance, and Revocation.

| Service | Description | Keywords |
| --- | ------ | -----|
| Sponsorship | Formally establish that a person or entity requires a credential. | Sponsor, Authorizing Official, Affiliation, Request |
| Registration | Collect the information needed from a person or entity to issue them a credential. | Enrollment |
| Generation & Issuance | Assign a credential to a person or entity. | Activation, Token, Authenticator |
| Maintenance | Maintain a credential throughout its lifecycle. | Renewal, Reset, Suspension, Reissuance |
| Revocation | Revoke a credential from a person or entity or deactivate an authenticator. | Termination |

## Access Management

<img src="{{site.baseurl}}/assets/arch/services/services_access_management.png" alt="A blue box with the list of Access Management services defined later in the body text of this page." width="314" height="400" align="right" style="padding-left:30px">

Access Management is how an agency authenticates enterprise identities and authorizes appropriate access to protected services.

Policy administration is a combination of laws, regulations, rules, and agency policies that secures access to agency services. Your agency determines the requirements for an individual to access each resource category; they can be as simple or as complex as needed.

Examples of access requirements include:

- “Grant access to anyone on this list of people.”
- “Grant access to any agency employee or contractor with an authenticated PIV card.”
- “Grant access to anyone who is a federal employee, GS-12 or higher, cleared Top Secret, trained in first aid, and certified as a project manager.”

In providing access services, it can be challenging to conduct an application discovery and inventory for both physical and logical access. For logical access, see the [Application Inventory and Identity Risk Analysis section of the Enterprise Single Sign-On Playbook.]({{site.baseurl}}/playbooks/sso/#step-2-plan-application-integration){:target="_blank"}{:rel="noopener noreferrer"}

## Authentication

Authentication is how you verify the claimed identity of someone trying to access an agency resource. Typically, you’ll verify an identity using an authenticator associated with a credential. To determine the appropriate authenticator level, use the [Digital Identity Risk Assessment Playbook]({{site.baseurl}}/playbooks/dira/){:target="_blank"}{:rel="noopener noreferrer"}

Authentication is generally a two-step process:

> *Step 1.*  Authenticate the credential:

- Did a trusted organization issue the credential?
- Has the credential expired?
- Has the credential been revoked, voided, or tampered with?

> *Step 2.* Ensure the individual to whom the credential was issued is the same individual presenting it:

- Do the photo and attributes on the credential match the person who presented it?
- Does the person know the PIN for the credential?
- Does the person have the private key on the smart card for the certificate presented to a website?

## Authorization

Authorization is how you decide whether you should allow someone to access an agency resource. Access requirements usually dictate whether you’ll allow someone to:

- Read or modify a certain document.
- Access an agency website.
- Enter an agency facility or location.

Usually, authorization occurs immediately after authentication. When you log in to a service, you present your credentials. The service then confirms that your credentials are valid (authentication) and grants or denies you access based on your assigned permissions (authorization).

Authorizations are based on progressive, fine-grained access models. Most agencies implement role-based access and move toward more fine-grained access, such as attribute-based or risk-adaptive access control, as outlined in the [Federal Zero Trust Strategy](https://zerotrust.cyber.gov/federal-zero-trust-strategy/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}{:class="usa-link usa-link--external"}. While there are defined access models, vendors may implement them in different or overlapping ways. Ensure your agency develops use cases and understands how a vendor meets the use case.


|   Granularity  | Access Model | Description |   Example   |
|:---------------:|:--------------:|:-------------:|:-------------:|
|      Least       |  Access Control Lists(ACLs) | A static list of entities with their access rights. | Allow Jane Doe access to email application |
|      More       |  Role-Based Access Control (RBAC) | Access based on a user’s static pre-defined role. | Jane Doe is assigned the user role “New Employee” which grants access to email and sharepoint. |
|      More       |  Attribute-Based Access Control (ABAC) | Access based on a user’s assigned attributes which may be static or dynamic. | Allow Jane Doe to access email if on a government device (device attribute) and in the United States (location attribute). |
|      Most       |  Risk Adaptive Access Control (RAAC) | Access based on dynamic risk factors. | If Jane Doe is in assigned work location, allow email access from any managed device. If Jane Doe is not in assigned work location, only allow email access from a government device. |

Each authorization model has benefits and limitations. The policies and access requirements defined by agency business owners help define the model that best suits their needs. More robust access control models, such as ABAC, can help agencies with improved automation, and they are increasingly adopted by cloud-native and cloud-friendly services.

The Access Management services in the FICAM architecture include Policy Administration, Authentication, Authorization, and Privileged Access Management.

| Service | Description | Keywords |
| --- | ------ | -----|
| Digital Policy Administration | Create and maintain the technical access requirements that govern access to protected agency services. | Policy Decision, Policy Enforcement | 
| Authentication | Verify that a claimed identity is genuine based on valid credentials. | Validation, Two-Factor, Multi-Factor |
| Authorization | Grant or deny access requests to protected agency services based on access requirements, identity attributes, and entitlements. | Policy Decision, Policy Enforcement | 
| Privileged Access Management | Protect access to accounts that have access permissions that can affect IT system configurations and data security (e.g., superusers, domain administrators, or global administrators). | Privileged Identity Management, Privileged Account Management, Administration, Superuser |

## Federation

<img src="{{site.baseurl}}/assets/arch/services/services_federation.png" alt="A gray box with the list of Federation services defined later in the body text of this page." width="314" height="400" align="right" style="padding-left:30px">

Federation is the technology, policies, standards, and processes that allow an agency to accept digital identities, attributes, and credentials managed by other agencies.

Federation has many different applications, including:

- *Accepting an authentication transaction from another organization:*

> Agency A authenticates one of its users and passes identity attributes and transaction details to Agency B. Agency B grants access to an application for that identity.

- *Accepting specific characteristics (i.e., attributes such as identifiers) describing an individual from another organization:*

> An individual can use their agency-issued credential containing an internal identifier(s) to directly log in to a different agency’s online service. The online service registers the identifier(s) in its system for future use.

The Federation services in the FICAM architecture include Policy Alignment, Authentication Broker, and Attribute Exchange.

| Service | Description | Keywords |
| --- | ------ | -----|
| Policy Alignment | Develop relationships and a common understanding between parties by establishing authorities, policies, standards, and principles. | Trust Relationship | 
| Authentication Broker | Transform an authentication event into an alternative format, such as an assertion, containing claims about the entity and the authentication transaction, to grant access to a resource. | Assertion Service, Federation Assertion, Security Token Service |
| Attribute Exchange | Discover and acquire identity or other attributes between different systems to promote access decisions and interoperability. | Attribute Definition |

## Governance

<img src="{{site.baseurl}}/assets/arch/services/services_governance.png" alt="A navy box with the list of Governance services defined later in the body text of this page." width="314" height="400" align="right" style="padding-left:30px">

Governance is the set of practices and systems that guide ICAM functions, activities, and outcomes.

To perform effective governance, agencies must collect and analyze data about ICAM functions from many sources, such as policies and entitlements stores. Proper data analytics help agencies monitor compliance with established information security policies.

If your agency identifies problems during data collection and analysis, you should remediate these issues as quickly as possible. Real-time monitoring and risk mitigation are crucial to ensure employees and contractors have only the appropriate access, following the principle of least privilege.

The Governance services in the FICAM architecture include Identity Governance, Analytics, and Mitigation.

| Service | Description | Keywords |
| --- | ------ | -----|
| Identity Governance | The systems, solutions, and rules that link enterprise personnel, applications, and data to help agencies manage access and risk. | Management Framework, Rules and Procedures, Access Reviews and Re-certifications | 
| Analytics | Leverage continuous analytics data to identify if someone has entitlements that conflict with access requirements. | Data collection, Monitoring, Review, Data Certification, Auditing and Reporting | 
| Mitigation | Correct the problems and address risks discovered by analysis that may occur during standard operations. | Redress, Remediation |

## Use Cases

These use cases are designed for ICAM Enterprise Architects and business owners and describe some of the most common ICAM business processes.

Each use case includes a high-level summary of the scenario, individuals and systems involved in the use case, illustrations that show the required steps to achieve the end goal, and an icon that indicates the practice area and the service with which the use case most closely aligns.

For details about ICAM services, see the [Services Framework](#services-framework-and-service-descriptions).

While each use case describes a particular ICAM business process, the use cases are all interrelated. The use cases generalize the activities and technologies to make sure they apply across many agencies.

You can combine or build upon the ICAM use cases to support your agency’s scenarios and needs.
<hr>

<ul class="gsa-expand-collapse-group" title="Expand or Collapse All" aria-label="Expand or Collapse All">
    <li class="gsa-expand-button" onclick="expandToggle()" title="Expand All" aria-label="Expand All" tabindex=0>   +   </li>
    <li class="gsa-collapse-button" onclick="collapseToggle()" title="Collapse All" aria-label="Collapse All" tabindex=0>   -   </li>
</ul>
<div id="use-case-1" class="usa-accordion usa-accordion--bordered usa-accordion--multiselectable" data-allow-multiple>
    <h4 id="use-case-1" class="usa-accordion__heading"> <!-- Use Case 1 -->
        <button
        class="usa-accordion__button gsa-target-accordion-header"
        aria-expanded="false"
        aria-controls="m-a1"
        >
        Use Case 1. Create and Maintain an Identity
        </button>
    </h4>
    <div id="m-a1" class="usa-accordion__content usa-prose gsa-target-accordion-content-area">
        <p><img src="{{site.baseurl}}/assets/arch/usecases/credentials_creation.png" alt="Three hexagons with the letters I, C, and A. The I is highlighted in red for Identity Management, with a red banner for the Creation service." align="right" style="padding-left:15px"  width="156" height="156"/></p>
        <p>When you onboard an employee or contractor at your agency, you collect identity information from the individual and store parts of that information as identity attributes. These attributes serve as a digital proxy for the individual’s identity, also known as an enterprise identity.</p>
        <hr />
        <h2 id="use-case">Use Case</h2>
        <p>In this use case, an administrator needs to collect or manage identity data for an employee or contractor for the purpose of creating an enterprise identity record and maintaining it throughout its lifecycle.</p>
        <p><img src="{{site.baseurl}}/assets/arch/usecases/1-IconKey.png" alt="Icon Key for the diagrams that follow." /></p>
        <table>
            <tr>
                <td style="width:250px;border:0px;"><strong>1. Collect information</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/1-1.png" width="250" alt="A diagram showing an employee or contractor providing identity information to an administrator with the authoritative source." /></td>
                <td style="border:0px;">The administrator collects identity information from the employee or contractor.<br /><br /><i>This identity information may come from the individual, onboarding documents, or HR systems.</i></td>
            </tr>
            <tr>
                <td style="width:250px;border:0px;"><strong>2. Create an enterprise identity</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/1-2.png" width="250" alt="A diagram showing the authoritative source populating the identity information into a data repository, creating an enterprise identity in the authoritative source." /></td>
                <td style="border:0px;">The administrator adds the identity information to the authoritative source, a data repository. <br /><br /> Result: An enterprise identity in the authoritative source for the employee or contractor.</td>
            </tr>
            <tr>
                <td style="width:250px;border:0px;"><strong>3. Maintain the enterprise identity</strong></td>
                <td style="border:0px;">The following steps describe identity maintenance your agency should perform on a regular basis.</td>
            </tr>
            <tr>
                <td style="width:250px;border:0px;"><strong>3a. Identify and aggregate identity data</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/1-3a.png" width="250" alt="A diagram showing the data repository with multiple enterprise identities for one individual, and an arrow indicating the change to a single consolidated enterprise identity." /></td>
                <td style="border:0px;">Query your data repositories for any existing identities for an individual. Aggregate these attributes as a single enterprise identity for the individual.</td>
            </tr>
            <tr>
                <td style="width:250px;border:0px;"><strong>3b. Update the enterprise identity</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/1-3b.png" width="250" alt="A diagram showing two paths to update an identity. Path 1 is the administrator updating the enterprise identity directly in the authoritative source. Path 2 is the employee or contractor updating their personal information in an agency application, and the application updating the enterprise identity in the authoritative source." /></td>
                <td style="border:0px;">If an individual has updated personal information, there are two ways to update the enterprise identity: <br /> <br /> <ul> <li> The administrator updates the individual’s enterprise identity attributes directly in the authoritative sources.</li> <li>The individual uses an agency application to update their personal information, and the application updates the individual’s enterprise identity attributes in the authoritative sources.</li></ul></td>
            </tr>
            <tr>
                <td style="width:250px;border:0px;"><strong>3c. Delete the enterprise identity</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/1-3c.png" width="250" alt="A diagram showing an administrator deleting an enterprise identity." /></td>
                <td style="border:0px;">When you need to delete an enterprise identity, delete the identity attributes in the authoritative source.</td>
            </tr>
        </table>
        <hr>
        <h2 id="example">Example</h2>
        <p>I want to create a new enterprise identity so that an individual may be established as a federal employee or contractor that will need to be identity proofed, credentialed, and granted access to agency services.</p><br>
    </div>
    <h4 id="use-case-2" class="usa-accordion__heading"> <!-- Use Case 2 -->
        <button
        class="usa-accordion__button gsa-target-accordion-header"
        aria-expanded="false"
        aria-controls="m-a2"
        >
        Use Case 2. Proof an Identity
        </button>
    </h4>
    <div id="m-a2" class="usa-accordion__content usa-prose gsa-target-accordion-content-area">
        <p><img src="{{site.baseurl}}/assets/arch/usecases/credentials_identity_proofing.png" alt="Three hexagons with the letters I, C, and A. The I is highlighted in orange for Identity Management, with an orange banner for the Identity Proofing service. " align="right" style="padding-left:15px"  width="156" height="156" /></p>
        <p>Before you can create a credential and assign it to an individual, that person must provide proof of their claimed identity. Identity proofing is the process by which a federal agency collects and verifies information about a person to establish an enterprise identity.</p>
        <p>The location or information that a person needs to access informs the Identity Assurance Level (IAL), which determines the elements you should require from that person for identity proofing. There are three IALs; however, federal agencies require a minimum of IAL2 for employees or contractors with recurring access to government resources, so these use cases do not include IAL1.</p>
        <p>This use case describes the high-level steps to proof an identity at IAL2 or IAL3. Depending on the required IAL, you may require increasingly more information from an employee or contractor or partner along with additional verification steps. The information provided by the employee or contractor is also known as identity evidence. Identity evidence may be physical, such as passports, driver’s licenses, and birth certificates.</p>
        <ul>
        <li><strong>IAL2</strong> - first and last name, email address, and address of record, supported by appropriate identity documentation and verified as strong.</li>
        <li><strong>IAL3</strong> - first and last name, email address, address of record, and fingerprints, supported by appropriate identity documentation and verified as superior.</li>
        </ul>
        <p>For more information about identity proofing and IALs, see <a href="https://pages.nist.gov/800-63-3/sp800-63a.html#22-identity-assurance-levels" target="_blank">NIST SP 800-63A</a> (Section 2.2).</p>
        <hr />
        <h2 id="use-case">Use Case</h2>
        <p>In this use case, an administrator needs to collect or manage identity data for an employee or contractor for the purpose of creating an enterprise identity record and maintaining it throughout its lifecycle.</p>
        <p><img src="{{site.baseurl}}/assets/arch/usecases/2-IconKey.png" alt="Icon Key for the diagrams that follow." /></p>
        <table>
        <tr>
            <td style="width:250px;border:0px;"><strong>1. Collect identity information</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/2-1.png" width="250" alt="A diagram showing an employee or contractor presenting information or data to an administrator." /></td>
            <td style="border:0px;"><strong>IAL2</strong> <i>(In-person or remote)</i> - The employee or contractor presents identity information, like first name, last name, and address of record.<br /><br /><strong>IAL3</strong> <i>(In-person or supervised remote)</i> - The employee or contractor presents identity information, like first name, last name, and address of record, and biometric data like fingerprints.</td>
        </tr>
        <tr>
            <td style="width:250px;border:0px;"><strong>2. Verify the identity information</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/2-2.png" width="250" alt="A diagram showing an administrator verifying information presented by an employee or contractor." /></td>
            <td style="border:0px;"><strong>IAL2</strong> - The administrator confirms the information provided is valid and current by comparing photo identification to the individual, or confirming contact information, ensuring it matches the provided documentation. <br /><br /><strong>IAL3</strong> - The administrator verifies all information with the issuing organization. <br /> <i>Result:</i> The individual’s identity has been successfully proofed at IAL2, or IAL3. </td>
        </tr>
        </table>
        <hr>
        <h2 id="examples">Examples</h2>
        <ul>
        <li>I want to proof the identity of an employee or contractor to verify that the individual is who she says she is so that she can be issued a unique enterprise credential.</li>
        <li>A prospective employee or contractor has filled out their information in an HR system and requires IAL3 proofing and minimum background investigations. The prospective employee/contractor is then scheduled for in-person proofing. The prospective employee/contractor brings required identity documentation; the information is verified using approved documentation and biometrics are captured.</li>
        </ul><br>
    </div>
    <h4 id="use-case-3" class="usa-accordion__heading"> <!-- Use Case 3 -->
        <button
        class="usa-accordion__button gsa-target-accordion-header"
        aria-expanded="false"
        aria-controls="m-a3"
        >
        Use Case 3. Manage the Entitlements Lifecycle
        </button>
    </h4>
    <div id="m-a3" class="usa-accordion__content usa-prose gsa-target-accordion-content-area">
        <p><img src="{{site.baseurl}}/assets/arch/usecases/credentials_provisioning.png" alt="Three hexagons with the letters I, C, and A. The I is highlighted in orange for Identity Management, with an orange banner for the Provisioning service. " align="right" style="padding-left:15px"  width="156" height="156" /></p>
        <p>You can assign access entitlements to individuals, roles, and groups. These entitlements define an employee or contractor’s access to agency services, so you’ll need to assign entitlements before an employee or contractor can access an agency service.</p>
        <hr />
        <h2 id="use-case">Use Case</h2>
        <p>In this use case, an administrator needs to assign entitlements to an employee or contractor.</p>
        <p><img src="{{site.baseurl}}/assets/arch/usecases/3-IconKey.png" alt="Icon Key for the diagrams that follow." /></p>
        <table>
        <tr>
            <td style="width:250px;border:0px;"><strong>1. Initiate the request</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/3-1.png" width="250" alt="A diagram showing an employee or contractor requesting entitlements from an administrator." /></td>
            <td style="border:0px;">An individual requests entitlements, or joins a team with specific access requirements.<br /><br />The requestor may be the employee or contractor, their supervisor, HR, or a security team member.</td>
        </tr>
        <tr>
            <td style="width:250px;border:0px;"><strong>2. Review the request</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/3-2.png" width="250" alt="A diagram showing an administrator comparing an entitlement request with access requirements." /></td>
            <td style="border:0px;"> The administrator compares the employee or contractor’s requested entitlements with the relevant access requirements.<br /><br />If the employee or contractor qualifies for the requested entitlements and has a mission need for access, the administrator approves the request.</td>
        </tr>
            <tr>
            <td style="width:250px;border:0px;"><strong>3. Assign the entitlements</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/3-3.png" width="250" alt="A diagram showing an administrator assigning entitlements to the employee or contractor." /></td>
            <td style="border:0px;"> The administrator assigns the entitlements to the employee or contractor.<br /><br />Any time the employee or contractor’s role or relationship changes, the administrator updates the entitlements accordingly, including removing entitlements as needed.</td>
        </tr>
        </table>
        <hr>
        <h2 id="examples">Examples</h2>
        <ul>
        <li>I want to indicate that an employee or contractor requires and is allowed access to an agency service so that they can access the service when needed.</li>
        <li>An employee is hired to be part of the financial review team and requires access to financial applications. The employee has a role assigned to their enterprise identity record and associated with their identity attributes.</li>
        </ul><br>
    </div>
    <h4 id="use-case-4" class="usa-accordion__heading"> <!-- Use Case 4 -->
        <button
        class="usa-accordion__button gsa-target-accordion-header"
        aria-expanded="false"
        aria-controls="m-a4"
        >
        Use Case 4. Create and Issue a Credential
        </button>
    </h4>
    <div id="m-a4" class="usa-accordion__content usa-prose gsa-target-accordion-content-area">
        <p><img src="{{site.baseurl}}/assets/arch/usecases/credentials_issuance.png" alt="Three hexagons with the letters I, C, and A. The C is highlighted in green for Credential Management, with a green banner for the Issuance service. " align="right" style="padding-left:15px"  width="156" height="156" /></p>
        <p>After you identity proof an individual, you’ll issue some proof of that individual’s claimed identity. A credential (like a physical card) is a type of authenticator that serves as a tool for an employee or contractor to gain access to agency services.</p>
        <hr />
        <h2 id="use-case">Use Case</h2>
        <p>In this use case, an administrator needs to issue a credential to an employee or contractor.</p>
        <p><strong>Note:</strong> The preferred credential for employees and contractors is a PIV card. For cases where you cannot issue a PIV card, you must use a combination of factors to reach at least an Authenticator Assurance Level 2 (AAL2) credential.</p>
        <p>For more information about authentication and AALs, see <a class="usa-link usa-link--external" href="https://pages.nist.gov/800-63-3/sp800-63b.html#sec4" target="_blank" rel="noopener noreferrer">NIST SP 800-63B</a> (Section 4).</p>
        <p><img src="{{site.baseurl}}/assets/arch/usecases/4-IconKey.png" alt="Icon Key for the diagrams that follow." /></p>
        <table>
        <tr>
            <td style="width:250px;border:0px;"><strong>1. Initiate the request</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/4-1.png" width="250" alt="A diagram showing an employee or contractor and a sponsor or supervisor initiating a credential request with an administrator." /></td>
            <td style="border:0px;">An individual presents a valid government issued ID.</td>
        </tr>
        <tr>
            <td style="width:250px;border:0px;"><strong>2. Review the request</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/4-2.png" width="250" alt="A diagram showing an administrator verifying the presented credential with the organization that issued it." /></td>
            <td style="border:0px;">The government ID is verified with the organization that issued it.</td>
        </tr>
            <tr>
            <td style="width:250px;border:0px;"><strong>3. Generate and assign the authenticator(s)</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/4-3.png" width="250" alt="A diagram showing an administrator generating and assigning an authenticator to the employee or contractor." /></td>
            <td style="border:0px;">Generate and assign the authenticator to the individual.</td>
        </tr>
        </table>
        <hr>
        <h2 id="example">Example</h2>
        <p>I want to issue an enterprise credential, unique to an employee or contractor, so that they are able to access federal buildings and protected resources to which they require access.</p><br>
    </div>
    <h4 id="use-case-5" class="usa-accordion__heading"> <!-- Use Case 5 -->
        <button
        class="usa-accordion__button gsa-target-accordion-header"
        aria-expanded="false"
        aria-controls="m-a5"
        >
        Use Case 5. Issue a Derived Credential
        </button>
    </h4>
    <div id="m-a5" class="usa-accordion__content usa-prose gsa-target-accordion-content-area">
        <p><img src="{{site.baseurl}}/assets/arch/usecases/credentials_maintenance.png" alt="Three hexagons with the letters I, C, and A. The C is highlighted in green for Credential Management, with a green banner for the Maintenance service." align="right" style="padding-left:15px"  width="156" height="156" /></p>
        <p>A derived credential is a credential derived from an existing credential, with a different form factor, such as a credential on a mobile device. Derived credentials have the same IAL as the existing credential and the same or lower AAL.</p>
        <p>When an employee or contractor requires authentication but cannot leverage an existing credential, they can use a derived credential. To be eligible for a derived credential, the employee or contractor must already have a valid credential with Authenticator Assurance Level (AAL) 2 or 3.</p>
        <hr />
        <h2 id="use-case">Use Case</h2>
        <p>In this use case, an employee or contractor interacts with the agency services to register or request a derived credential.</p>
        <p><img src="{{site.baseurl}}/assets/arch/usecases/5-IconKey.png" alt="Icon Key for the diagrams that follow." /></p>
        <table>
        <tr>
            <td style="width:250px;border:0px;"><strong>1. Initiate the request</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/5-1.png" width="250" alt="A diagram showing an employee or contractor initiating a derived credential request to an enterprise identity management system." /></td>
            <td style="border:0px;">A request for identity data is initiated to the identity manager. <br /><br /><i> This identity manager could be a person or system, depending on the organization.</i></td>
        </tr>
        <tr>
            <td style="width:250px;border:0px;"><strong>2. Authenticate the existing credential</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/5-2.png" width="250" alt="A diagram showing an employee or contractor authenticating an existing credential to an enterprise identity management system." /></td>
            <td style="border:0px;">The identity manager identifies relevant sources of data on the individual. <br /><br /><i> Sources could include HR systems, security data, and personal databases.</i></td>
        </tr>
            <tr>
            <td style="width:250px;border:0px;"><strong>3. Generate the derived credential</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/5-3.png" width="250" alt="A diagram showing an enterprise identity management system generating a derived credential for an employee or contracter." /></td>
            <td style="border:0px;">Generate the derived authenticator and note the change in the user's enterprise identity record.</td>
        </tr>
        </table>
        <hr>
        <h2 id="examples">Examples</h2>
        <ul>
        <li>I want to provide an employee or contractor, who has already been issued an enterprise credential, a derived credential so that they can authenticate to enterprise applications.</li>
        <li>An employee or contractor travels quite a bit as part of their job.  Accordingly, they are frequently limited to using a small tablet or their phone to stay connected while on the go. In this case, a derived credential is needed for purposes such as accessing secure agency websites or an agency VPN from their mobile device.</li>
        </ul><br>
    </div>
    <h4 id="use-case-6" class="usa-accordion__heading"> <!-- Use Case 6 -->
        <button
        class="usa-accordion__button gsa-target-accordion-header"
        aria-expanded="false"
        aria-controls="m-a6"
        >
        Use Case 6: Manage the Credential Lifecycle
        </button>
    </h4>
    <div id="m-a6" class="usa-accordion__content usa-prose gsa-target-accordion-content-area">
        <p><img src="{{site.baseurl}}/assets/arch/usecases/credentials_maintain_revoke.png" alt="Three hexagons with the letters I, C, and A. The C is highlighted in green for Credential Management, with a green banner for the Maintenance and Revocation services. " align="right" style="padding-left:15px"  width="156" height="156" /></p>
        <p>Active credentials require regular maintenance. This use case describes the most common credential maintenance activities:</p>
        <ul>
        <li><strong><a href="#reset-a-credential">Reset a credential</a></strong> - An employee or contractor forgets the password or PIN associated with a credential and requests a reset.</li>
        <li><strong><a href="#renew-a-credential">Renew a credential</a></strong> - An employee or contractor’s credential is expiring or their identity information changes, so they request a replacement credential. You must renew a credential prior to the expiration date; otherwise, the employee or contractor must go through the issuance process again.</li>
        <li><strong><a href="#revoke-a-credential">Revoke a credential</a></strong> - An employee or contractor is no longer eligible for their credential (like separating from the issuing agency). The sponsor, supervisor, or administrator requests a revocation of all associated credentials and enterprise accounts.</li>
        </ul>
        <p>You should periodically review your employee or contractors’ eligibility for credentials to identify potential orphaned data.</p>
        <hr />
        <h2 id="use-cases">Use Cases</h2>
        <p><img src="{{site.baseurl}}/assets/arch/usecases/6-IconKey.png" alt="Icon Key for the diagrams that follow." /></p>
        <h3 id="reset-a-credential">Reset a Credential</h3>
        <p>In this use case, an administrator needs to reset a password or PIN for an employee or contractor credential.</p>
        <table>
        <tr>
            <td style="width:250px;border:0px;"><strong>1. Initiate the request</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/6-Reset-1.png" width="250" alt="A diagram showing an employee or contractor initiating a password or pin reset request to an enterprise identity management system." /></td>
            <td style="border:0px;">An employee or contractor forgets their password or PIN, and requests a reset.<br /><br />If the request is valid, the identity management system approves the request.</td>
        </tr>
        <tr>
            <td style="width:250px;border:0px;"><strong>2. Issue a reset</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/6-Reset-2.png" width="250" alt="A diagram showing an enterprise identity management system issueing a password or pin reset to an employee or contracter." /></td>
            <td style="border:0px;">The system issues a password/PIN reset, which may be a temporary password or a link to a web-based reset form.</td>
        </tr>
            <tr>
            <td style="width:250px;border:0px;"><strong>3. Reset the credential</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/6-Reset-3.png" width="250" alt="A diagram showing an employee or contractor resetting a password or PIN." /></td>
            <td style="border:0px;">The employee or contractor resets their password or PIN.</td>
        </tr>
        </table>
        <h3 id="renew-a-credential">Renew a Credential</h3>
        <p>In this use case, an administrator needs to issue a new credential to replace one that will expire soon or has outdated identity information.</p>
        <table>
        <tr>
            <td style="width:250px;border:0px;"><strong>1. Initiate the request</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/6-Renew-1.png" width="250" alt="A diagram showing an employee or contractor initiating a credential renewal request to an enterprise identity management system." /></td>
            <td style="border:0px;">An individual requests a renewal for an employee or contractor’s credential.<br /><br />This individual may be the employee or contractor, their supervisor, or an administrator with approval authority.<br /><br />This could also be an automated process triggered by schedules or specific events.</td>
        </tr>
        <tr>
            <td style="width:250px;border:0px;"><strong>2. Review the request</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/6-Renew-2.png" width="250" alt="A diagram showing an enterprise identity management system reviewing a credential renewal request for an employee or contracter." /></td>
            <td style="border:0px;">The identity management system reviews the request and verifies that the employee or contractor qualifies for a renewed credential. If so, approve the request.</td>
        </tr>
            <tr>
            <td style="width:250px;border:0px;"><strong>3. Replace the credential</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/6-Renew-3.png" width="250" alt="A diagram showing an enterprise identity management system issueing a new credential to an employee or contracter." /></td>
            <td style="border:0px;">The system issues a new credential to the employee or contractor, and updates the associated enterprise identity record.</td>
        </tr>
        </table>
        <h3 id="revoke-a-credential">Revoke a Credential</h3>
        <p>In this use case, an administrator needs to revoke an active credential.</p>
        <table>
        <tr>
            <td style="width:250px;border:0px;"><strong>1. Initiate the request</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/6-Revoke-1.png" width="250" alt="A diagram showing an employee or contractor or a sponsor or supervisor initiating a credential revocation request to an enterprise identity management system." /></td>
            <td style="border:0px;">An individual sends a separation notification or a notice of a lost or compromised credential, requesting revocation.<br /><br />This individual may be the employee or contractor, their supervisor, HR, or a security team member.</td>
        </tr>
        <tr>
            <td style="width:250px;border:0px;"><strong>2. Disable the credential</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/6-Revoke-2.png" width="250" alt="A diagram showing an administrator of an enterprise identity management system invalidates the credential." /></td>
            <td style="border:0px;">The administrator invalidates the credential.<br />Depending on your agency, an individual or a system may perform this task. </td>
        </tr>
            <tr>
            <td style="width:250px;border:0px;"><strong>3. Return the credential</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/6-Revoke-3.png" width="250" alt="A diagram showing an administrator returning the invalidated hardware or physical credential to the supervisor or sponsor." /></td>
            <td style="border:0px;">If the revoked credential is physical or hardware-based, the administrator returns the credential to the appropriate individual.<br /><br />This individual may be a supervisor, HR, or security team member.</td>
        </tr>
        </table>
        <hr>
        <h2 id="examples">Examples</h2>
        <ul>
        <li>An employee or contractor may have attempted to use a credential and input the PIN information incorrectly several times up to an agency-defined limit and has locked their account or credential.  The employee or contractor requests a PIN reset.  The employee or contractor is directed to an unlock service; has to verify information again to prove they are the same person issued the original credential; and follows prompts to unlock their credential, generating a new PIN in the process.</li>
        <li><em>Reset</em> - I want to verify the identity of an employee or contractor that has already been issued a credential and reset their PIN or password so that they can continue to access enterprise resources.</li>
        <li><em>Renew</em> - I want to verify the identity and eligibility of an employee or contractor, who has a previously issued credential that is near expiration, so that they may be issued a new enterprise credential to maintain their ability to access enterprise resources.</li>
        <li><em>Revoke</em> - I want to remove access to enterprise resources for an employee or contractor so that they can no longer use the protected resource.</li>
        </ul><br>
    </div>
    <h4 id="use-case-7"  class="usa-accordion__heading"> <!-- Use Case 7 -->
        <button
        class="usa-accordion__button gsa-target-accordion-header"
        aria-expanded="false"
        aria-controls="m-a7"
        >
        Use Case 7. Grant Access
        </button>
    </h4>
    <div id="m-a7" class="usa-accordion__content usa-prose gsa-target-accordion-content-area">
        <p><img src="{{site.baseurl}}/assets/arch/usecases/credentials_authn_authz.png" alt="This use case corresponds to the Authentication and Authorization service areas of Access Management." align="right" style="padding-left:15px"  width="156" height="156" /></p>
        <p>
        This use case describes the steps to authenticate individuals and authorize access to agency services. Agency services can be anything from applications and files to physical facilities.
        <br><br><br>
        </p>
        <hr />
        <h2 id="use-case">Use Case</h2>
        <p>In this use case, an Access Control System (ACS) Administrator needs to grant access to an employee or contractor who has an enterprise identity and active credential and needs to access a logical or physical resource. These steps assume the employee or contractor already has credentials to support authentication as well as the access entitlements to support authorization decisions.</p>
        <ul>
        <li><em>Authentication</em> - I want to verify the claimed unique identity of a given employee or contractor  so that the system can verify the right individual is attempting to access an agency service.</li>
        <li><em>Authorization</em> - I want to allow access for only employees and contractors that meet established requirements so that only the people who should have access do have access.</li>
        </ul>
        <p><img src="{{site.baseurl}}/assets/arch/usecases/7-IconKey.png" alt="Icon Key for the diagrams that follow." /></p>
        <table>
        <tr>
            <td style="width:250px;border:0px;"><strong>1. Access Attempt</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/7-1.png" width="250" alt="A diagram showing an employee or contractor attempting to access a agency service through an access control system." /></td>
            <td style="border:0px;">An employee or contractor attempts to access an agency service.</td>
        </tr>
        <tr>
            <td style="width:250px;border:0px;"><strong>2. Authenticate the employee or contractor</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/7-2.png" width="250" alt="A diagram showing an employee or contractor presenting either an IAL2 or IAL3 authenticator to an access control system." /></td>
            <td style="border:0px;">The employee or contractor presents an authenticator to the ACS that meets the protected resource’s minimum assurance requirements:<ul><li><strong>AAL2</strong> (two-factor) - Something you know + something you have, like a one-time passcode.</li><li><strong>AAL3</strong> (two-factor + hardware) - Something you know + something you have, like a one-time passcode generated by a hardware-based authenticator; or a PIV credential. For more information about AAL values, see <a href="https://pages.nist.gov/800-63-3/sp800-63b.html#sec5" target="_blank" rel="noopener noreferrer">NIST SP 800-63B Section 5: Authenticator and Verifier Requirements</a>.</li></ul></td>
        </tr>
        <tr>
            <td style="width:250px;border:0px;"><strong>3. Determine the access entitlements and access requirements</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/7-3.png" width="250" alt="A diagram showing an access control system determining the access entitlements and access requirements." /></td>
            <td style="border:0px;">Upon successful authentication, the ACS identifies 1) The employee or contractor's access entitlements associated with the protected resource, and 2) The protected resource's access requirements.</td>
        </tr>
        <tr>
            <td style="width:250px;border:0px;"><strong>4. Process the access information</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/7-4.png" width="250" alt="A diagram showing an access control system processing the employee or contractor access entitlements to the protected resources's access requirements." /></td>
            <td style="border:0px;">The ACS compares the employee or contractor’s access entitlements to the protected resource’s access requirements to decide whether to authorize access.</td>
        </tr>
        <tr>
            <td style="width:250px;border:0px;"><strong>5. Grant access</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/7-5.png" width="250" alt="A diagram showing an access control system granting access to an employee or contractor." /></td>
            <td style="border:0px;"> If the employee or contractor meets the protected resource’s access requirements, the ACS grants access to the protected resource.<br /><br />The ACS logs the access attempt and decision for auditing purposes.</td>
        </tr>
        </table>
        <hr>
        <h2 id="example">Example</h2>
        <p>An employee on the financial review team attempts to access a government financial application that is secured by a single sign-on (SSO) solution. The employee clicks a link to the financial application and is redirected to the SSO portal. The employee authenticates using his/her provided credential, which the SSO determines to be valid. The SSO solution or the financial application system finds the employee’s enterprise identity account and compares the roles assigned to those allowed by the financial application. The resulting determination is that the employee has authenticated to the required assurance level and has the appropriate entitlements to access the system and is subsequently logged on.</p><br>
    </div>
    <h4 id="use-case-8" class="usa-accordion__heading"> <!-- Use Case 8 -->
        <button
        class="usa-accordion__button gsa-target-accordion-header"
        aria-expanded="false"
        aria-controls="m-a8"
        >
        Use Case 8. Accept Federation Assertions
        </button>
    </h4>
    <div id="m-a8" class="usa-accordion__content usa-prose gsa-target-accordion-content-area">
        <p><img src="{{site.baseurl}}/assets/arch/usecases/credentials_attribute_exchange.png" alt="Three hexagons with the letters I in red, C in green, and A in blue, with a gray banner for the Attribute Exchange service in Federation." align="right" style="padding-left:15px"  width="156" height="156" /></p>
        <p>Federal employees and contractors often need to access protected services managed by other federal agencies. Federation is the means by which an agency can accept authentication assertions and associated identity attributes from systems within their agency and at other agencies. This allows federal employees and contractors from across agencies to access protected resources and streamlines the user’s experience.</p>
        <p>Agencies can pass assertions to share attributes about employees and contractors.</p>
        <hr>
        <h2 id="use-case">Use Case</h2>
        <p>In this use case, an employee or contractor from Agency A attempts to access a federated service at Agency B. This use case assumes the employee or contractor already has an account or entitlements to access resources at Agency B, or that they will be provisioned.</p>
        <p>For more information about granting access to protected resources, see Use Case 7. Grant Access.</p>
        <p><img src="{{site.baseurl}}/assets/arch/usecases/8-IconKey.png" alt="Icon Key for the diagrams that follow." /></p>
        <table>
            <tr>
                <td style="width:250px;border:0px;"><strong>1. Request access to federated service</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/8-1.png" width="250" alt="A diagram showing an employee or contractor from Agency A requesting access to a federated service at Agency B." /></td>
                <td style="border:0px;">An Agency A employee or contractor requests access to a federated service at Agency B.<br /><br />The employee or contractor selects the Agency A authentication service.</td>
            </tr>
            <tr>
                <td style="width:250px;border:0px;"><strong>2. Redirect to Agency A for authentication</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/8-2.png" width="250" alt="A diagram showing an employee or contractor access request is redirected from Agency B access control system to the Agency A authentication service." /></td>
                <td style="border:0px;">The Agency B system redirects the employee or contractor to the Agency A authentication service.<br /><br />Agency A authenticates the employee or contractor.</td>
            </tr>
            <tr>
                <td style="width:250px;border:0px;"><strong>3. Perform transparent transaction</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/8-3.png" width="250" alt="A diagram showing Agency A authentication service passing identity attributes to the Agency B access control system." /></td>
                <td style="border:0px;">Agency A passes identity attributes and transaction data to Agency B via a signed assertion.</td>
            </tr>
            <tr>
                <td style="width:250px;border:0px;"><strong>4. Agency B grants access</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/8-4.png" width="250" alt="A diagram showing Agency B access control system granting access to an employee or contractor from Agency A." /></td>
                <td style="border:0px;"> Agency B consumes the assertion data, optionally correlating it with an established account or local identity and makes an access control decision.<br /><br />The Agency B system redirects the employee or contractor to the federated service.</td>
            </tr>
        </table>
        <hr>
        <h2 id="examples">Examples</h2>
        <ul>
            <li>I want to allow other federal agencies’ employees and contractors (who meet specific requirements) to access some of my agency’s resources, which facilitates cross-government collaboration and information sharing.</li>
            <li>An employee or contractor from Agency A visits a shared service operated by Agency B to service all federal government users. At the homepage, the employee/contractor selects their Agency A icon and is redirected to their Agency A SSO portal. They log in using their Agency A managed credentials and are redirected back to the Agency B shared service.</li>
        </ul>
    </div>
</div>
<hr>

## Reference Example

This reference example includes sample enterprise ICAM tools (e.g., solutions, applications, and software) aligned with ICAM service areas that illustrate ICAM functionality at an agency. The reference examples are designed for enterprise architects, security engineers, and solution architects to facilitate discussions regarding the technology solutions to integrate with enterprise applications and business requirements.

The system's components are representative examples only. Some solutions chosen by your agency may span across more than one service area.

The following figure is an example of a small selection of system components only. You can modify the graphic or incorporate it as is and target state system components for enterprise roadmap planning.

<img src="{{site.baseurl}}/assets/arch/ComponentExamples.png" alt="A diagram that shows example components for each service area, and relationships between practice areas.">

## Authoritative Sources
An authoritative source is a trusted repository of identity attribute data.  It’s possible to have multiple authoritative sources for attributes.

Authoritative sources systems components may include:

- Human Resource systems such as payroll, time and attendance, and benefits administration
- Agency or government-wide Learning Management Systems
- Agency or government-wide Personnel Security systems for security and suitability
- Directory services, including on-premise or cloud-based directory services
- Other external or internal sources

## Identity Management Systems
Identity management systems are how an agency manages the identity lifecycle. 

Identity management system components may include:

- Identity Governance and Administration tool for provisioning and workflow 
- Role management or role manager applications
- Identity correlation or aggregation
- Directory management
- Virtual directories

## Credential Management Systems
Credential management systems are how an agency manages an authentication token bound to an identity.

Credential management system components may include:

- PIV credential service provider solutions
- Other non-PKI credential service provider solutions 
- Federated certification authorities
- Private certification authorities
- Key management services 
- Enterprise certificate manager
- Multi-factor authentication managers for software and hardware tokens
- Password managers

## Access Management Systems
Access management systems are how an agency leverages credentials to authenticate individuals and authorize access to protected resources.

Access management system components may include:

- Enterprise Single Sign-On (SSO) applications
- Web access management applications
- Physical or facility access control systems 
- Privileged access management applications
- Access policy and access rules repositories
- Policy enforcement points 
- Policy decision points
- Virtual private networks
- Cloud access security brokers
- Network access management tools

## Governance Systems
Governance is the set of components to centralize management, develop insights, and assist in managing ICAM areas and services. Applications across all service areas include auditing, such as standard audit logs or configuration of auditable events. Governance includes the aggregation of individual auditing and reporting into centralized tools to perform real-time or near real-time analysis, identify anomalies, and trigger mitigations for anomalous authentication or authorization events. Tools are increasingly incorporating machine learning or adaptive algorithms. 

Governance systems components may include:

- Identity Governance and Administration (IGA) solutions to perform access re-certifications 
- IT Service Management (ITSM)
- Security information and event monitoring (SIEM)

## Agency Endpoints
Agency endpoints are resources that an agency needs to protect, including physical and digital resources. 

Agency endpoints may include:

- On-premise applications
- Cloud-based applications and platforms
- Agency private networks
- Government cloud email services
- Government facilities

## Policies and Standards

See the [ICAM Policy Matrix]({{site.baseurl}}/university/policymatrix/) for the latest set of ICAM policies and standards.

