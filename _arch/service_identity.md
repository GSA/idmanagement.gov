---
layout: page
title: Identity Management
collection: arch
permalink: arch/identity/
sidenav: archservices
sticky_sidenav: true
---
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
