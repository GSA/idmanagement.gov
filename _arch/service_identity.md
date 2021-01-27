---
layout: page
title: Identity Management
collection: arch
permalink: arch/identity/
sidenav: archservices
sticky_sidenav: true
---
![An orange box with the list of Identity Management services defined later in the body text of this page.]({{site.baseurl}}/assets/arch/services/IdentityManagementServices.png){:align="right" style="padding-left:30px"}

Identity Management is how an agency collects, verifies, and manages attributes to establish and maintain enterprise identities for federal government employees, contractors, and authorized mission partners. This service does not apply to public or consumer identity management.

An enterprise identity record is the set of attributes, or characteristics, that describe a person within a given context:

- Your identity within your agency’s Human Resources (HR) system is different from your personal identity at your bank.
- A person’s identity as a government contractor is different from their identity as an Army Reservist.

Your identity remains the same over time, though it evolves as your attributes change, such as when you get a promotion, change your name, receive additional training, or retire.

Agencies should manage identity attributes as centrally as possible and distribute them as needed. The following are some examples of identity attributes:

- *Core identity attributes* - First name, last name, and address of record.
- *Contact attributes* - Physical location, government phone number, and government email address.
- *Authorization attributes* - Clearance, training, and job codes.

Identity proofing is how an agency verifies an enterprise identity. The complexity of this process depends on the Identity Assurance Level (IAL) you require for an identity. Federal agencies require a minimum IAL3 for employees and contractors. For example, a federal employee or contractor presents identity attributes via a driver's licesne or utility bill. The agency verifies the identity documents and the individual's photo (biometric).

An identifier is a unique attribute used to locate an identity in a system:

- While your agency may issue Personal Identification Verification (PIV) cards to multiple people named John Smith, each has a different PIV card number.
- While your agency may have more than one employee named Jane Smith, each employee has a unique email address tied only to their identity.

## Identity Management Services

The Identity Management services in the Federal ICAM architecture include Creation, Identity Proofing, Provisioning, Maintenance, Identity Aggregation, and Deactivation. These services are sometimes collectively known as Identity Lifecycle Management.

![An orange box with the Identity Management service definitions, which are listed in the following body text.]({{site.baseurl}}/assets/arch/services/IdentityManagementServiceDefinitions.png){:align="center"}

### Creation

> Establish an identity made of attributes that define a person or entity.  

> *Keywords*: Identity Record, Authoritative Source

### Identity Proofing

> Use identity attributes to connect a digital identity to a real-world entity.

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

> Deactivate or remove enterprise identity records. 

> *Keywords*: Identity Lifecycle Management, Suspension, Archiving, Deletion
