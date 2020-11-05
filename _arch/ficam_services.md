---
layout: page
title: Services Framework
collection: arch
permalink: arch/services/
sidenav: arch

subnav:
  - text: Identity Management
    href: '#identity-management'
  - text: Credential Management
    href: '#credential-management'
  - text: Access Management
    href: '#access-management'
  - text: Federation
    href: '#federation'
  - text: Governance
    href: '#governance'
---

The Services Framework identifies the services that provide functionality within the scope of ICAM. The Services Framework is a tool for you to help translate between business requirements and technical solutions.

The Services Framework is designed for ICAM Program Managers and Information Technology Enterprise Architects.

## FICAM Practice Areas

![Five boxes that each correspond to a FICAM practice area or supporting element. Each box lists the agency services that correspond to that area. You can find the services and definitions in the following pages.]({{site.baseurl}}/assets/arch/services/ServicesOverview.png)

## FICAM Services

![Five boxes that each correspond to a FICAM practice area or supporting element. Each box includes the definitions for the agency services that correspond to that area. You can find the services and definitions in the following pages.]({{site.baseurl}}/assets/arch/services/ServicesDefinitions.png)

# Identity Management

![A red box with the list of Identity Management services defined later in the body text of this page.]({{site.baseurl}}/assets/arch/services/IdentityManagementServices.png){:align="right" style="padding-left:30px"}

Identity Management is how an agency uses attributes to establish and maintain enterprise identities for employees and contractors.

An enterprise identity record is the set of attributes, or characteristics, that describe a person within a given context:

- Your identity within your agency’s Human Resources (HR) system is different from your personal identity at your personal bank.
- A person’s identity as a government contractor is different from their identity as an Army Reservist.

Identities change and evolve over time, but they do not expire. You may get a promotion, change your name, receive additional training, or even retire, but your identity remains the same.

Agencies should manage identity attributes as centrally as possible and distribute them as needed. The following are some examples of identity attributes:

- *Core identity attributes* - First name, last name, and address of record.
- *Contact attributes* - Physical location, government phone number, and government email address.
- *Authorization attributes* - Clearance, training, and job codes.

Identity proofing is how an agency verifies an enterprise identity. The complexity of this process depends on the Identity Assurance Level (IAL) you require for an identity. Federal agencies require a minimum IAL3 for employees and contractors. For example, a federal employee or contractor must provide core identity attributes via a driver’s license or utility bill, and the agency must verify these identity documents and the individual’s biometrics.

An identifier is a unique attribute used to locate an identity in a system:

- While your agency may issue Personal Identification Verification (PIV) cards to multiple people named John Smith, each has a different PIV card number.
- While your agency may have more than one employee named Jane Smith, each employee has a unique email address tied only to their identity.

## Identity Management Services

The Identity Management services in the Federal ICAM architecture include Creation, Identity Proofing, Provisioning, Maintenance, Identity Aggregation, and Deactivation. These services are sometimes collectively known as Identity Lifecycle Management.

![A red box with the Identity Management service definitions, which are listed in the following body text.]({{site.baseurl}}/assets/arch/services/IdentityManagementServiceDefinitions.png){:align="center"}

### Creation

> Establish an identity made of attributes that define a person or entity.  

> *Keywords*: Identity Record, Authoritative Source

### Identity Proofing

> Verify an identity’s attributes in order to issue a credential. 

> *Keywords*: Source Document Validation, Remote Proofing, In-Person Proofing

### Provisioning

> Create, manage, and delete accounts and entitlements. 

> *Keywords*: Identity Lifecycle Management, Workflow, Deprovisioning, Account Management, Account Creation, Entitlements Management

### Maintenance

> Maintain accurate and current attributes in an identity record over its lifecycle.  

> *Keywords*: Identity Lifecycle Management, Updating, Attribute Management

### Identity Aggregation

> Find and connect disparate identity records for the same person or entity.  

> *Keywords*: Identity Reconciliation, Identity Resolution, Account Linking

### Deactivation

> Deactivate or remove identity records.  

> *Keywords*: Identity Lifecycle Management, Suspension, Archiving, Deletion

# Credential Management

![A green box with the list of Credential Management services defined later in the body text of this page.]({{site.baseurl}}/assets/arch/services/CredentialManagementServices.png){:align="right" style="padding-left:30px"}

Credential Management is how an agency issues, manages, and revokes credentials bound to enterprise identities.

A credential is a data structure that authoritatively binds an authenticator to an existing identity using one or more identifiers. An employee or contractor uses an authenticator with a password or cryptographic module to assert their identity.

The following are types of authenticators:

- Something you know, like a password or PIN.
- Something you have, like a private key or One-Time Password (OTP) generator.
- Something you are, like a fingerprint or iris. 

The Authenticator Assurance Level (AAL) determines the authenticators associated with a credential. Federal government-wide policy requires a minimum Authenticator Assurance 
Level 2 for employees and contractors.

The following are some examples of credentials:

- You might use a PIV credential that includes a picture, the issuing agency logo, and cryptographic key pairs to assert your identity at a federal facility.
- You might use a combination of credentials, like a username/password with a one-time password generated by a mobile application, to assert your identity to a federal web 
application.

Unlike identities, credentials can expire. If an enterprise identity continues past a credential’s expiration date, the issuing agency can issue a new credential.

## Credential Management Services

The Credential Management services in the Federal ICAM architecture include Sponsorship, Registration, Issuance, Maintenance, and Revocation.

![A green box with the Credential Management service definitions, which are listed in the following body text.]({{site.baseurl}}/assets/arch/services/CredentialManagementServiceDefinitions.png){:align="center"}

### Sponsorship

> Formally establish that a person or entity requires a credential.

> *Keywords*: Sponsor, Authorizing Official, Affiliation, Request

### Registration

> Collect the information needed from a person or entity to issue them a credential.

> *Keyword*: Enrollment

### Issuance

> Assign a credential to a person or entity.

> *Keywords*: Activation, Token

### Maintenance

> Maintain a credential throughout its lifecycle. 

> *Keywords*: Renewal, Reset, Suspension, Reissuance

### Revocation

> Withdraw a credential from a person or entity, or deactivate an authenticator.

> *Keywords*: Termination

# Access Management

![A blue box with the list of Access Management services defined later in the body text of this page.]({{site.baseurl}}/assets/arch/services/AccessManagementServices.png){:align="right" style="padding-left:30px"}

Access Management is how an agency authenticates enterprise identities and authorizes appropriate access to protected services.

Policy administration is a combination of laws, regulations, rules, and agency policies that secure access to agency services. Your agency determines the requirements for an individual to access each resource category, and they can be as simple or as complex as you need. The following are some examples of access requirements:

- “Grant access to anyone on this list of people.”
- “Grant access to any agency employee or contractor with an authenticated PIV card.”
- “Grant access to anyone who is a federal employee, GS-12 or higher, cleared Top Secret, trained in first aid, and certified as a project manager.”

## Authentication
 
Authentication is how you verify the claimed identity of someone trying to access an agency resource. Typically, you’ll verify an identity using an authenticator associated with a credential.

Authentication is generally a two-step process:

> *Step 1.* Authenticate the credential itself:
- Did a trusted organization issue the credential?
- Has the credential expired?
- Has the credential been revoked, voided, or tampered?

> *Step 2.* Use an authenticator mentioned in Credential Management to validate the credential holder.

## Authorization

Authorization is how you decide whether you should allow someone to access an agency resource. Access requirements usually dictate whether you’ll allow someone to:

- Read or modify a certain document.
- Access an agency website.
- Enter an agency facility or location.

Usually, authorization occurs immediately after authentication. When you log in to a service, you present your credentials, and the service confirms your credentials are valid (authentication) and grants or denies you access based on your assigned permissions (authorization).

Identity proofing is how you establish an identity. Authentication is how you confirm the identity. Authorization is how you use the identity.

## Access Management Services

The Access Management services in the Federal ICAM architecture include Policy Administration, Entitlements Management, Authentication, Authorization, and Privileged Access Management.

![A blue box with the Access Management service definitions, which are listed in the following body text.]({{site.baseurl}}/assets/arch/services/AccessManagementServiceDefinitions.png){:align="center"}

### Policy Administration

> Create and maintain the technical access requirements that govern access to protected agency services.

> *Keywords*: Policy Decision, Policy Enforcement

### Authentication

> Verify that a claimed identity is genuine based on valid credentials.

> *Keywords*: Validation, Two-Factor, Multi-Factor

### Authorization

> Grant or deny access requests to protected agency services based on access requirements, identity attributes, and entitlements.

> *Keywords*: Policy Decision, Policy Enforcement

### Privileged Access Management

> Protect access to accounts that have access permissions that can affect IT system configurations and data security (e.g., superusers, domain administrators, or global administrators). 

> *Keywords*: Privileged Identity Management, Privileged Account Management, Administration, Superuser

# Federation

![A gray box with the list of Federation services defined later in the body text of this page.]({{site.baseurl}}/assets/arch/services/FederationServices.png){:align="right" style="padding-left:30px"}

Federation is the technology, policies, standards, and processes that allow an agency to accept digital identities, attributes, and credentials managed by other agencies.

Federation has many different applications, including:

*Accepting an authentication transaction from another organization:*

> Agency A authenticates one of its users and passes identity attributes and transaction details to Agency B. Agency B grants access to an application for that identity.

*Accepting specific characteristics (i.e., attributes such as identifiers) describing an individual from another organization:*

> An individual can use their agency-issued credential containing an internal identifier(s) to directly log in to a different agency’s online service. The online service registers the identifier(s) in their system for future use.

## Federation Services
The Federation services in the Federal ICAM architecture include Policy Alignment, Authentication Broker, and Attribute Exchange.

![A gray box with the Federation service definitions, which are listed in the following body text.]({{site.baseurl}}/assets/arch/services/FederationServiceDefinitions.png){:align="center"}

### Policy Alignment

> Develop relationships and a common understanding between parties by establishing authorities, policies, standards, and principles.

> *Keywords*: Trust Relationship

### Authentication Broker

> Transform an authentication event into an alternative format, such as an assertion, containing claims about the entity and the authentication transaction, to grant access to a resource. 

> *Keywords*: Assertion Service, Federation Assertion, Security Token Service

### Attribute Exchange

> Discover and acquire identity or other attributes between different systems to promote access decisions and interoperability.

> *Keywords*: Attribute Definition, ARS

# Governance

![A navy box with the list of Governance services defined later in the body text of this page.]({{site.baseurl}}/assets/arch/services/GovernanceServices.png){:align="right" style="padding-left:30px"}

Governance is the set of practices and systems that guides ICAM functions, activities, and outcomes.

To perform effective governance, agencies must collect data about ICAM functions from many sources, such as policies and entitlements stores, and analyze this data. Proper data analytics help agencies monitor compliance with established information security policies. 

If your agency identifies problems during data collection and analysis, you should remediate these issues as quickly as possible. Real-time monitoring and risk mitigation is crucial to ensure employees and contractors have only the appropriate access, following the principle of least privilege.

## Governance Services

The Governance services in the Federal ICAM architecture include Identity Governance, Analytics, and Mitigation.

![A navy box with the Governance service definitions, which are listed in the following body text.]({{site.baseurl}}/assets/arch/services/GovernanceServiceDefinitions.png){:align="center"}

### Identity Governance

> The systems, solutions, and rules that link enterprise personnel, applications, and data to help agencies manage access, risk, and mitigation needs.

> *Keywords*: Management Framework, Rules and Procedures

### Analytics

> Leverage continuous analytics data to identify if someone has entitlements that conflict with access requirements.

> *Keywords*: Data collection, Monitoring, Review, Data Certification, Auditing and Reporting

### Mitigation

> Correct the problems and address risks, discovered by analysis, that may occur during standard operations.  

> *Keywords*: Redress, Remediation
