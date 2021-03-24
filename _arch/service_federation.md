---
layout: page
title: Federation
collection: arch
permalink: arch/federation/
sidenav: archservices
sticky_sidenav: true
---

[![A gray box with the list of Federation services defined later in the body text of this page.]({{site.baseurl}}/assets/arch/services/FederationServices.png){:align="right" style="padding-left:30px"}]({{site.baseurl}}/assets/arch/services/FederationServices.png){:target="_blank"}{:rel="noopener noreferrer"}

Federation is the technology, policies, standards, and processes that allow an agency to accept digital identities, attributes, and credentials managed by other agencies.

Federation has many different applications, including:

- *Accepting an authentication transaction from another organization:*

> Agency A authenticates one of its users and passes identity attributes and transaction details to Agency B. Agency B grants access to an application        for that identity.

- *Accepting specific characteristics (i.e., attributes such as identifiers) describing an individual from another organization:*

> An individual can use their agency-issued credential containing an internal identifier(s) to directly log in to a different agency’s online service. The    online service registers the identifier(s) in their system for future use.

## Federation Services
The Federation services in the Federal ICAM architecture include Policy Alignment, Authentication Broker, and Attribute Exchange.

[![A gray box with the Federation service definitions, which are listed in the following body text.]({{site.baseurl}}/assets/arch/services/FederationServiceDefinitions.png){:align="center"}]({{site.baseurl}}/assets/arch/services/FederationServiceDefinitions.png){:target="_blank"}{:rel="noopener noreferrer"}

### Policy Alignment

> Develop relationships and a common understanding between parties by establishing authorities, policies, standards, and principles.

> *Keyword*: Trust Relationship

### Authentication Broker

> Transform an authentication event into an alternative format, such as an assertion, containing claims about the entity and the authentication transaction, to grant access to a resource. 

> *Keywords*: Assertion Service, Federation Assertion, Security Token Service

### Attribute Exchange

> Discover and acquire identity or other attributes between different systems to promote access decisions and interoperability.

> *Keyword*: Attribute Definition
