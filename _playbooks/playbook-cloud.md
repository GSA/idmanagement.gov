---
layout: page
collection: playbooks
title: Cloud Identity Playbook
pubdate: 2022-12
type: Markdown
permalink: /playbooks/cloud/
description: The Cloud Identity Playbook is a four-step playbook to start or further expand the use of Workforce ICAM Services delivered in a cloud operating model.
sidenav: playbooks
sticky_sidenav: true

version: 1.2
pubdate: December 29, 2022

subnav:
  - text: Executive Summary
    href: '#executive-summary'
  - text: Cloud Identity 101
    href: '#cloud-identity-101'
  - text: Step 1. Gain Support
    href: '#step-1-gain-support'
  - text: Step 2. Document Your Plan
    href: '#step-2-document-your-plan'
  - text: Step 3. Architecture Considerations
    href: '#step-3-architecture-considerations'
  - text: Step 4. Test and Deploy Identity Automation
    href: '#step-4-test-and-deploy-identity-automation'
  - text: Emerging Topics
    href: '#emerging-topics'
  - text: Appendix A. Policies, Standards, and Guidance
    href: '#appendix-a-policies-standards-and-guidance'
  - text: Appendix B. Acronyms
    href: '#appendix-b-acronyms'
    
---

<img src="{{site.baseurl}}/assets/img/logo-gsa.png" width="64" height='64' align="left" alt="U.S. General Services Administration Logo">
<img src="{{site.baseurl}}/assets/img/logo-cio-round.png" width="64" height='64' align="left" alt="U.S. Federal Chief Information Officer Council Logo"><br><br><br>

This playbook is a collaboration between the Federal Chief Information Security Officer Council Identity, Credential, and Access Management Subcommittee and the Federal Chief Information Officer Council Cloud and Infrastructure Community of Practice.

<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="v-a1">
      Date: {{page.pubdate}} - Version: {{page.version}}
    </button>
  </h4>
  <div id="v-a1" class="usa-accordion__content usa-prose">
    <table>
      <caption>Cloud Identity version table</caption>
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
        <td>12/29/22</td>
        <td>Updated link in Appendix A</td>
      </tr>
      <tr>
        <th scope='row'>
          1.1
        </th>
        <td>10/11/22</td>
        <td>Updated federation section for trust framework examples.</td>
      </tr>
      <tr>
        <th scope='row'>
          1.0
        </th>
        <td>01/20/22</td>
        <td>Initial draft.</td>
      </tr>
    </table>
  </div>
</div>


## Executive Summary

This Cloud Identity Playbook is a practical guide to assist federal agencies as they start to or further expand the use of workforce Identity, Credential, and Access Management (ICAM) services in a cloud operating model. Workforce identities are digital identities or accounts owned and managed by the agency, including employees and contractors. The most common Cloud Identity example is Identity as a Service (IDaaS). An IDaaS is typically an Identity Provider that offers Single Sign-on, multifactor authentication, and directory services in a single platform as a core set. It also may provide additional features.

This playbook aims to answer two questions:

1. What are the defining characteristics that differentiate an on-premises Identity Provider from an IDaaS product?
2. What are the government-wide best practices and lessons learned when using an IDaaS product?

This playbook answers these questions with two distinct sections. The executive-style Cloud Identity 101 explains the main differences between an on-premises Identity Provider and an IDaaS. In this playbook, on-premises refers to an agency operating identity service on agency-owned and maintained infrastructure, typically a legacy approach. The advantage of IDaaS is that it centralizes and consolidates multiple identity capabilities and delivers them on a platform that offers the same cloud benefits such as reliability, scalability, and security. Migrating to IDaaS allows an agency to provide identity services rather than operate and maintain the infrastructure.

The Cloud Identity Journey answers the second question. While written for ICAM program managers, it can benefit anyone planning Cloud Identity projects or initiatives. There are four Cloud Identity journey steps:

1. [Gain leadership support](#step-1-gain-support) through collaboration on a migration path. Create user stories that encourage Cloud Identity services to improve user experience and business processes. Capture these in a business case. Align your business case with your agency’s zero trust architecture (ZTA) initiative.
2. Identify your success factors and [document a plan](#step-2-document-your-plan) that addresses policy and strategy.
3. Understand unique Cloud Identity [architecture considerations](#step-3-architecture-considerations) across identity management, credential management, access management, governance, and federation.
4. [Test and deploy](#step-4-test-and-deploy-identity-automation) identity automation.

This playbook offers recommendations and lessons learned from the Cloud Identity Working Group of the Federal Chief Information Security Officer Council's [Identity, Credential, and Access Management Subcommittee](https://community.max.gov/pages/viewpage.action?pageId=234815732){:target="_blank"}{:rel="noopener noreferrer"} in collaboration with the Federal Chief Information Officers Council [Cloud & Infrastructure Community of Practice](https://community.max.gov/display/Egov/CIO%2BCouncil%2BCloud%2Band%2BInfrastructure%2BCommunity%2Bof%2BPractice){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}.

## Key Terms

- **Assertion** - A digital statement from a verifier (usually an Identity Provider) to a Relying Party (usually an application) that contains subscriber (usually a username) information. It also may have additional attributes such as government employee, law enforcement agent, or authenticator type used in an access control decision.v
- **Cloud Computing** - A model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources (e.g., networks, servers, storage, applications, and services) that can be rapidly provisioned and released with minimal management effort or service provider interaction.
- **Cloud Service Model** - A Cloud Service Provider service model includes Software as a Service (SaaS), Platform as a Service (PaaS), and Infrastructure as a Service (IaaS).
- **Credential Service Provider (CSP)** - Issues and manages credentials.
- **Digital Worker Identity** - A type of non-person entity specific to digital identity for software. Examples of digital worker identities include artificial intelligence, machine learning, bots, and potentially other software programs or services.
- **Federation** - The technology, policies, standards, and processes that allow an agency to share digital identities, attributes, and credentials between trust domains or organizations. Federation usually occurs through an assertion.
- **Identity as a Service (IDaaS)** - An ICAM service delivered in a Software as a Service cloud service model.
- **Identity Provider (IdP)** - Manages user authenticators and issues assertions used for federation. An Identity Provider could also operate as a Credential Service Provider if it issues credentials.
- **Machine Identity** - A digital identity for physical hardware and a class of non-person entities in cyberspace. Examples of machine identities include servers, switches, printers, and other hardware devices.
- **Non-Person Entity (NPE)** - Any non-human with a digital identity in cyberspace.
- **Persona** - A digital identity unambiguously associated with a single person or non-person entity (NPE). A single person or NPE may have multiple personas, each managed by the same or different organization.
- **Workforce Identity** - A digital identity owned and managed by the agency, including employees and contractors.

## Audience

The primary audience for this playbook is agency Identity, Credential, and Access Management (ICAM) Program Managers. Table 1 lists secondary audience members and how to engage them with this playbook.

<p align="center"><b>Table 1: Stakeholder Table</b></p>

| **Stakeholder** | **Stakeholder Type** | **Engagement Point** |
| --- | --- | --- |
| _ICAM Steering Committee_ | Agency Governance Group | Have the enterprise govern all agency identities to reduce cyber risk. |
| _Business Line Program Managers_ | Interested Party | Create a unified user experience by leveraging existing enterprise ICAM services. Identify future ICAM capabilities. |
| _Cloud Management Office_ | Office | Leverage enterprise ICAM services for centralized and secure authentication and authorization. |
| _Security Management Office_ | Office | Generate a holistic view of security activities and events across platforms and environments through ICAM data. |
| _DevOps Office_ | Office | Secure and automate DevOps identities. |

## Disclaimer

The Cloud Identity Working Group of the Federal Chief Information Security Officer Council ICAM Subcommittee, in collaboration with the Federal Chief Information Officer Council Cloud & Infrastructure Community of Practice, developed this playbook. U.S. Federal Executive Branch agencies can use this playbook to plan Cloud Identity services related to the [FICAM Architecture Services Framework]({{site.baseurl}}/arch/#services-framework-and-service-descriptions){:target="_blank"}{:rel="noopener noreferrer"}. This playbook is not official policy or mandated action, and it does not provide authoritative information technology terms. It includes best practices to supplement existing federal policies and builds upon [Executive Order 14028](https://www.federalregister.gov/documents/2021/05/17/2021-10460/improving-the-nations-cybersecurity){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, [Office of Management and Budget Memorandum M-19-17](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, and existing Federal ICAM (FICAM) guidance and playbooks. Subject areas with intersecting scopes, such as cloud operating models, Federal Risk and Authorization Management Program (FedRAMP), and enterprise governance, are considered only to the extent that they relate to ICAM services delivered in a cloud service model. Privileged access management (e.g., superusers, domain administrators) is outside the scope of this playbook.


## Cloud Identity 101

Identity is foundational to security both on-premises and within cloud environments. It is the first touchpoint to access data and impact user experience. In cloud environments, application access acts as a perimeter to protect applications and workloads. Traditionally, network-based defenses perform this function. In this playbook, on-premises refers to an agency operating identity services on agency-owned and -maintained infrastructure.

Transitioning to an “as-a-service” model allows federal agencies to buy capabilities rather than invest in infrastructure. The most common Cloud Identity example is Identity as a Service (IDaaS). An IDaaS is typically an Identity Provider (IdP) that offers Single Sign-on (SSO), multifactor authentication (MFA), and directory services in a single platform. The IdP also provides assertions that include identity and authentication information to an application to authorize access. For more information on Single Sign-on, see the [Enterprise Single Sign-On Playbook]({{site.baseurl}}/playbooks/sso/){:target="_blank"}{:rel="noopener noreferrer"}.

Figure 1 provides an overview of enterprise SSO.

<img src="{{site.baseurl}}/assets/playbooks/sso-overview.png" alt="Basic components required to perform single sign-on." width="560" height="276">

Table 2 highlights the main differences between operating an on-premises or legacy IdP and leveraging an IDaaS based on the five essential cloud characteristics identified by the National Institute of Standards and Technology (NIST).

<p align="center"><b>Table 2: Differences Between On-Premises Identity Provider and IDaaS</b></p>

| **Essential Characteristic** | **Legacy IdP** | **IDaaS** |
| --- | --- | --- |
| On-Demand Self Service | There is complete control over all configuration settings. | Privileges are limited to those allowed by the service. |
| Rapid Elasticity | They are limited but provide potentially automated scaling to the number of dedicated servers. | Unlimited and automated scaling is transparent to the user and typically included in base IDaaS pricing. |
| Measured Service | Pricing usually involves perpetual-based licensing or the number of instances.| Pricing is based on the total number of users, active users, or applications. |
| Resource Pooling | Hardware is dedicated commercial or government-furnished equipment maintained by a federal agency. | Hardware is shared, commercial hardware that is owned and maintained by a cloud service provider, logically segmented by customer. |
| Broad Network Access | Creating an internet-accessible service may require additional load balancers, network bandwidth, user device configuration, and geographic dispersion. | It is globally available through geographic-based content delivery networks that offer up to or exceeding 99.99% reliability. |

The adoption of cloud services adds challenges. Cloud services operate on a shared responsibility model where the cloud service provider holds some responsibility and the agency customer holds some responsibility. **Data classification and ICAM are always an agency customer responsibility in all cloud service models.** No agency should consider the cloud secure simply because the cloud provider holds responsibility for security. Principles such as least privilege, role-based access, MFA, and risk are always agency customer responsibilities, no matter the cloud service model in use.

<p align="center"><b>Figure 2: Shared Responsibility Model</b></p>

<img src="{{site.baseurl}}/assets/playbooks/cloud-shared-model.png" alt="A chart showing how responsibilities are shared between an agency customer and a cloud service provider. ICAM is always an Agency Customer responsibility." width="560" height="332">

See the [Data Center and Cloud Optimization Initiative Cloud Strategy Guide](https://community.max.gov/display/Egov/Agency%2BIT%2BModernization%3A%2BEducational%2BResources%2BBuilding%2BBlocks){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} for a holistic cloud strategy. Additionally, read the [OMB Cloud Smart Strategy](https://cloud.cio.gov/strategy/){:target="_blank"}{:rel="noopener noreferrer"} to understand the federal government's overarching strategic guidance on cloud adoption.

## Cloud Identity Journey Steps

Any journey has a map, but not all are the same. Use these four steps to plan your Cloud Identity Journey. Your agency may already support and encourage cloud services while others do not.

1. [Gain leadership support](#step-1-gain-support)  through collaboration on a migration path. Create user stories that encourage Cloud Identity services to improve user experience and business processes. Capture these in a business case. Align your business case with your agency’s ZTA initiative.
2. [Document your plan](#step-2-document-your-plan) in a strategy and policy.
3. Understand unique Cloud Identity [architecture considerations](#step-3-architecture-considerations) across identity management, credential management, access management, governance, and federation.
4. [Test and deploy](#step-4-test-and-deploy-identity-automation) identity automation.

## Step 1. Gain Support

Transitioning to an 'as-a-service' model will allow federal agencies to buy capabilities rather than invest in infrastructure. To gain support for an IDaaS migration effort within your agency, first think through the optional migration scenario, generate and share user stories, and integrate them into a business case. Identity is a critical enabler to zero trust, so include how IDaaS supports your agency's zero trust journey.

### Migration Scenarios

This section provides a basic overview of IDaaS starting points and migration paths. Agencies may have complex and coupled architectures that will require a more in-depth analysis. An agency may encounter unique challenges when deciding on an IDaaS migration path based on its starting point. 


<p align="center"><b>Table 3. IDaaS Migration Starting Point</b></p>

| **Starting Point #1** | **Starting Point #2** | **Starting Point #3** |
| --- | --- | --- |
| **Micro Agency** | **Small to Medium Agency** | **Small to Large Agency** |
| - Username and password for desktop authentication.<br>- No Identity Provider capability.| - Microsoft Windows domain for Personal Identity Verification (PIV) card desktop authentication
<br>- No Identity Provider capability | - Microsoft Windows domain for PIV card desktop authentication
- Microsoft Active Directory Federation Services or other on-premises Identity Provider |

There are two potential paths to an IDaaS migration: 1) hybrid migration or 2) full migration.

#### Hybrid Migration

The hybrid migration scenario retains specific components on-premises while adding additional IDaaS capabilities. This scenario may combine two approaches:

1. Keep Active Directory and integrate with an IDaaS through a data sync or replication.
2. Federate the on-premises Identity Provider with an IDaaS.

An agency may choose this scenario if it has requirements for an on-premises Active Directory or Identity Provider capability. In this scenario, an agency may integrate cloud applications with an IDaaS while maintaining on-premises application access with the on-premises Identity Provider.

Figure 3 depicts a hybrid migration with an on-premises Identity Provider.

<p align="center"><b>Figure 3: Hybrid Migration with On-Premises Identity Provider</b></p>

<img src="{{site.baseurl}}/assets/playbooks/cloud-hybrid-idp.png" alt="A system architecture demonstrating a hybrid migration. The on-premises components are retained and connected to an IDaaS through a federation assertion or data replication." width="560" height="332">


{% include alert-success.html heading="Myth Busted - It's Cloud or Nothing" content="Most agencies using an IDaaS operate in a hybrid configuration." %} 

#### Full Migration

The full migration scenario replaces all on-premises Identity Provider components with an IDaaS. This scenario includes replacing Active Directory and Active Directory Federation Services with an IDaaS. An agency may need an alternative solution for PIV desktop authentication, which Active Directory typically handles. An alternative solution may include using a comparable phishing-resistant authenticator as mentioned in the [Federal Zero Trust Strategy](https://zerotrust.cyber.gov/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}.

<p align="center"><b>Figure 4: Full Migration to IDaaS</b></p>

<img src="{{site.baseurl}}/assets/playbooks/cloud-full-migration.png" alt="A system architecture demonstrating a full migration. The on-premises components are fully replaced with an IDaaS." width="560" height="257">

{% include alert-warning.html heading="Business Challenge - PIV Authentication in Full Migration Scenario" content="One common challenge many agencies face is IDaaS support for certificate-based authentication and desktop authentication. Many FedRAMP IDaaS support some form of certificate-based authentication. As of this writing, there is no current replacement for PIV desktop authentication that doesn't include operating an Active Directory domain." %} 

The pros and cons of each approach depend on an agency's architecture, budget, and technical knowledge. The Federal CISO Council ICAM Subcommittee is a government-wide community for sharing best practices, demonstrations, and questions. Send an email to ICAM at GSA dot gov to join.

### Generate and Share User Stories

[Writing Effective User Stories](https://tech.gsa.gov/guides/effective_user_stories/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} increases understanding of the user’s purpose. Having descriptive summaries and detailed acceptance criteria will help your team know when a user story is complete. Table 4 presents a modified user story example provided by the GSA Chief Technology Officer Office.

<p align="center"><b>Table 4: Example User Story</b></p>

<table>
  <thead>
    <tr>
      <th>Epic</th>
      <th>User Story</th>
      <th>Acceptance Criteria</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="9">As an <b>Acquisition Gateway User, I need</b> to access the Acquisition ordering platform behind a
        secure login <b>so that</b> I can purchase products.</td>
      <td rowspan="4">As an <b>Acquisition Gateway User, I need</b> to select a phishing-resistant authenticator <b>to</b> log in.</td>
      <td rowspan="4">Ensure the Acquisition Gateway User can: <br><br>
        <ul>
          <li>Use an authenticator over the WebAuthN API.</li>
          <li>Log in to the Acquisition Gateway.</li>
        </ul>
      </td>
    </tr>
    <tr>
    </tr>
    <tr>
    </tr>
    <tr>
    </tr>
    <tr>
      <td rowspan="5">As an <b>Acquisition Gateway User, I need</b> to review my previous bids in the Acquisition
        ordering platform <b>so that</b> I can remove expired bids.</td>
      <td rowspan="5">Ensure the Acquisition Gateway User is able to:<br><br>
        <ul>
          <li>Log in to the Acquisition Gateway.</li>
          <li>Access the page to review items previously bid upon.</li>
          <li>Select one, or multiple, expired bids.</li>
          <li>Remove expired bids based on having the correct privilege.</li>
        </ul>
      </td>
    </tr>
    <tr>
    </tr>
    <tr>
    </tr>
    <tr>
    </tr>
    <tr>
    </tr>
  </tbody>
</table>

User stories describe a requirement that is independent of a specific tool. The example above mentions leveraging Web Authentication (WebAuthN), an Application Programming Interface (API) to leverage a device-generated, phishing-resistant authenticator typically supported by an IDaaS and some on-premises Identity Provider tools. Information technology (IT) modernization to the cloud could shift the role of ICAM to enable business owners to maximize the effectiveness of their business and mission products.

Single Sign-on, delivered by IDaaS, is a vital tool for improving security and user experience. SSO centralizes access and allows users to sign in once and directly access other agency applications and platforms.

### Write a Business Case

Next, the agency should draft a business case, including funding considerations. In the business case, as an example, an agency should articulate benefits and value such as how:

- ICAM capabilities support zero trust.
- Migrating to an IDaaS enhances an agency's business processes.
- IDaaS can improve user experience, provide potential downstream cost savings, improve risk management, and provide improved disaster recovery.

A vital element of a business case is a stakeholder analysis. Follow the analysis steps outlined in the [Data Center and Cloud Optimization Initiative Cloud Strategy Guide. Executive Order 14028: Improving the Nation’s Cybersecurity](https://community.max.gov/display/Egov/Agency%2BIT%2BModernization%3A%2BEducational%2BResources%2BBuilding%2BBlocks){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} instructs agencies to accelerate their cloud migrations in a manner that adopts a ZTA. Table 5 outlines how an IDaaS enables each zero trust pillar. [Executive Order 14028: _Improving the Nation's Cybersecurity_](https://www.federalregister.gov/documents/2021/05/17/2021-10460/improving-the-nations-cybersecurity){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} instructs agencies to accelerate their cloud migrations in a manner that adopts zero trust architecture. The following table outlines how an IDaaS enables each zero trust pillar.


<p align="center"><b>Table 5: ICAM Enablers for Zero Trust</b></p>

| **Zero Trust Pillar** | **IDaaS Enabler** |
| --- | --- |
| Identity | IDaaS incorporates SSO, MFA, and directory services in a single platform that supports multiple phishing-resistant authenticator options. It may allow an Application Programming Interface to quickly query IDaaS identity stores information, making it easier to answer security questions from a single location. A cloud service operates on modern platforms and can integrate new protocols and features faster than on-premises Identity Providers. Agencies can focus more on delivering identity services than on maintaining identity infrastructure. |
| Device | An IDaaS may act as a policy enforcement point and leverage device identification and health attributes such as device type, operating system, operating system version, and location to aid access and authorization decisions. |
| Network | Software-defined network tools, cloud access security brokers, and other zero trust network solutions must integrate with an Identity Provider to provide identity attributes as part of an access and authorization decision. Cloud solutions often integrate more efficiently with other cloud solutions. An IDaaS may have the capability to act on risk indicators to detect a real-time session change (e.g., the user location changes from Virginia to California in a minute and triggers a re-authentication). |
| Application | An IDaaS may act as a centralized policy enforcement point. IDaaS may integrate more efficiently with threat protection data sources and leverage artificial intelligence and machine learning to apply continuous authorization decisions, creating a dynamic enforcement point. Centralizing access also improves an agency's ability to [gather log data to investigate and remediate cybersecurity incidents](https://www.whitehouse.gov/wp-content/uploads/2021/08/M-21-31-Improving-the-Federal-Governments-Investigative-and-Remediation-Capabilities-Related-to-Cybersecurity-Incidents.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. |
| Data | An IDaaS may support advanced access policies that use data tags as part of an access decision. |

## Step 2. Document Your Plan

The first step in any journey is identifying the destination. Document your plan in three stages:

1. Draft a [Cloud Identity strategy](#cloud-identity-strategy-and-goals), that outlines strategic goals and an approach.
2. Include [quantifiable metrics](#establish-quantifiable-metrics) to gauge success.
3. Write a [policy](#cloud-identity-policy) to capture specific governance elements to help achieve the strategy.

### Cloud Identity Strategy and Goals

A Cloud Identity strategy helps an organization work in a concerted manner. It is important to pair a strategy to a goal. An example is consolidating identity services (strategy) to prevent capability sprawl (goal). 

The Cloud Identity strategy and the Cloud Identity policy can be contained in one document for easy management or more than one, based on the agency’s size. Large agencies may have different modernization, security, and identity-based strategies, while smaller agencies may combine these elements into a single document. 

Use the [ICAM Practice Areas and Services Framework]({{site.baseurl}}/arch/#services-framework-and-service-descriptions){:target="_blank"}{:rel="noopener noreferrer"} to identify ICAM services and align your plan with the FICAM Architecture. As shown in Figure 5, there are five core services with many subservices. The [ICAM Governance Framework]({{site.baseurl}}{{site.baseurl}}/docs/playbook-identity-governance-framework.pdf){:target="_blank"}{:rel="noopener noreferrer"} is a great resource for identifying ICAM capabilities, integration points, and enterprise governance examples and templates.

<p align="center"><b>Figure 5: FICAM Services Framework</b></p>

<img src="{{site.baseurl}}/assets/arch/services/services_overview.png" alt="Five boxes that each correspond to a FICAM practice area or supporting element. Each box lists the agency services that correspond to that area." width="560" height="466">

Table 6 lists business requirements and cloud options for core FICAM services.

<p align="center"><b>Table 6: Cloud Identity Strategy Business Requirements</b></p>

|**Core Service** | **Business Requirement** | **Cloud Option** |
| --- | --- | --- |
| Identity Management | Establish and manage identities for all users. | Most IDaaS tools come with directory services that sync with an on-premises directory. An IDaaS may also have a virtual directory capability. A virtual directory merges identity information for specific application needs (e.g., most applications may use email while others use a different combination or a User Principal Name). FedRAMP-accredited remote identity proofing and supervised remote identity proofing services are also available. |
| Credential Management | Promote interoperability and efficiency across the federal government by buying and building ICAM solutions that use open, commercially- adopted standards. | Leverage an IDaaS that supports multiple types of phishing-resistant authenticators. An agency should target implementing passwordless options or completely removing passwords, even as part of an MFA. |
| Access Management | Adopt and use cloud-ready systems that provide an efficient and secure way to access resources. | A primary feature of IDaaS is SSO. |
| Governance | Monitor and respond to user behavior and events by using data as a strategic asset to make adaptive and risk-based decisions. | Ensure that your IDaaS services can export logs to support user behavior analytics. A part of technical identity governance is performing access certifications and analytics for role mining, automated provisioning, de-provisioning, and account discovery. |
| Federation | Leverage federated solutions to accept identity and authentication assertions made by other agency and mission partners when efficient. | Implement federated access through an SSO tool. As part of a federation, you may decide to operate an Open Authorization (OAuth) service for authorization tokens. A vital part of external federations is legal agreements to document the governance and technical requirements. |

Here are a five goals to consider as you define your Cloud Identity strategy:

1. **Prevent Capability Sprawl or Duplication.** With the ubiquity of identity and various IT mission applications, duplicative ICAM services within an agency could be pervasive. An agency strategy should first identify authoritative enterprise ICAM services. Start preventing sprawl and duplication by analyzing ICAM capabilities within your agency's Chief Information Officer's Federal Information Technology Acquisition Reform Act authority. To reduce new acquisitions, communicate enterprise ICAM services through your agency's ICAM governance body.
2. **Centralize Services to Create an Enterprise Capability.** An agency may maintain multiple identity directories. Users may have numerous personas, but they should have one digital identity tied to a master user record within an agency. Manage digital identities at the enterprise level. An authoritative identity source within an agency is a repository of accurate information that feeds into your directory services. It may contain data sources that are not editable by a user. For example, users can update their phone number but not their clearance status.
3. **Person and Non-Person Entities.** Incorporate all identities within your strategy. NPEs may include digital workers, machine identities, or any other type of non-human that needs to access an agency service. Manage NPE identities in a slightly different manner that is potentially unique to the NPE type. For example, use the [Digital Worker Identity Playbook]({{site.baseurl}}/playbooks/dw/){:target="_blank"}{:rel="noopener noreferrer"} to assess and mitigate the risk of using automated technologies. Remember that server machine identities may require a different method.
4. **Network Access.**  A key difference between on-premises network authentication and IDaaS is the need to steer and monitor device traffic to an IDaaS to apply authentication and authorization decisions. Steering depends on device configuration to reach a website. Typically this is a Trusted Internet Connection approved cloud access method, such as a Cloud Access Security Broker, Secure Edge solution, or some type of direct connection through a forward or reverse proxy.
5. **Focus on Automation.** With the scale and size of an ever-increasing infrastructure, agencies should implement automation where and when it offers an advantage. See [Step 4. Test and Deploy Identity Automation]({{site.baseurl}}/playbooks/cloud/#step-4-test-and-deploy-identity-automation){:target="_blank"}{:rel="noopener noreferrer"} for recommendations on planning an automation workflow.

{% include alert-success.html heading="Myth Busted - On-premises is More Secure than Cloud" content="Using cloud services is not more or less secure than an on-premises Identity Provider. The single location aggregation of risk and Internet-facing cloud presents new security challenges. The shared responsibility model enables more efficient and scaled defense (for example, patching is usually faster and easier for cloud services). Proper application of appropriate controls can yield a highly secure cloud deployment." %} 

### Establish Quantifiable Metrics

An agency should then establish quantifiable metrics so that any member of the migration team can objectively identify success and failure. Agencies should tailor their metrics to address operational challenges. Some example metrics include:

- The length of time to provision or de-provision an account
- The number of orphaned accounts
- The number of integrated applications
- The number of MFA credentials supported (FISMA metric)
- The number of applications that only support phishing-resistant authenticators (FISMA metric)
- The number of manual processes automated.

Use your agency's operational value, or the rate of transactions in a given period, to identify where to set efficiency improvement goals. For example, if you have an operational metric of 24 hours to provision an account, an efficiency improvement would be to reduce that amount of time by 10%. Align the chosen metrics to federal policy, FISMA, or agency mission objectives to help translate improvement in metrics to progress in meeting overarching agency goals. For example:

1. **Policy Efficiency.**  Identify metric improvements aligned with federal mandates, such as the number of applications only accessible with a phishing-resistant authenticator.
2. **Operational Efficiency.**  Identify metric improvements that show operational improvements, such as decreasing the amount of time to deprovision a user from 2 days to 1 hour.


{% include alert-info.html heading="Budgeting IDaaS" content="Most IDaaS price products in one of three ways: the number of total users, the number of monthly active users, or the number of integrated applications. It is essential to understand the variable cost of each pricing method. Have this information ready when talking with an IDaaS vendor. Collect these data points as part of a Digital Identity Risk Assessment." %} 

### Cloud Identity Policy

The Cloud Identity strategy states the path to achieve an outcome, while the Cloud Identity policy sets the boundaries to execute the strategy. Your agency may already use some cloud-based identity services. Your Cloud Identity infrastructure should fit within your agency’s vision for cloud services, modernization, and cybersecurity efforts. There should be specific callouts of how ICAM supports those efforts, goals, or objectives in accomplishing your agency’s mission. For example, streamline the user experience by consolidating access points. Recommend changes to highlight how ICAM supports your agency’s mission and business processes if it does not.

The main strategies or policies to identify are cloud, modernization, and cybersecurity policy or vision (if it exists). For example, the [Department of Defense Modernization Strategy](https://media.defense.gov/2019/Jul/12/2002156622/-1/-1/1/DOD-DIGITAL-MODERNIZATION-STRATEGY-2019.PDF){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} incorporated deploying an end-to-end ICAM infrastructure as an objective of its evolving cybersecurity goal. The Defense Department then wrote an [ICAM Reference Design](https://dodcio.defense.gov/Portals/0/Documents/Cyber/DoD_Enterprise_ICAM_Reference_Design.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} to support the objective. With this executive direction and support from [Step 1](#step-1-gain-support), craft an agency policy to incorporate the following points.

1. **Agency ICAM Governance.** Enforce agency ICAM governance by implementing and maintaining an agency ICAM governance body and program management office. The governance body should include representatives from Information Technology, Human Resources, Finance, Acquisitions, General Counsel, Information and Physical Security, Privacy, and others as needed to deliver ICAM services. For ICAM governance examples, see the [ICAM Governance Framework]({{site.baseurl}}/docs/playbook-identity-governance-framework.pdf){:target="_blank"}{:rel="noopener noreferrer"} and the [ICAM Program Management Playbook]({{site.baseurl}}/university/pm/){:target="_blank"}{:rel="noopener noreferrer"}.
2. **User Management.** An IDaaS may implement role-based management through groups to make user management easier. In addition, IDaaS may support more risk-based access control models that incorporate location, time of day, device type, and other attributes as part of a policy enforcement point.
3. **Identify Authoritative Credentials.** Most agencies support PIV as a primary authenticator, but a smart card may not fit all use cases. Identify approved secondary authenticators and a process to approve new phishing-resistant authenticators. Testing may include accepting an external certification like Fast ID Online or another federal government agency. A secondary phishing-resistant authenticator can offer comparable security and improve user experience.
4. **Logging, Monitoring, and Audit.** An increase in web traffic may require additional security monitoring and log analysis in the Security Information and Event Monitoring system. Factor this additional workload on your cybersecurity defense and response teams and the potential to incorporate more automated processes. An IDaaS can support meeting the ICAM logging requirements in [OMB Memo 21-31](https://www.whitehouse.gov/wp-content/uploads/2021/08/M-21-31-Improving-the-Federal-Governments-Investigative-and-Remediation-Capabilities-Related-to-Cybersecurity-Incidents.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. IDaaS acts as a centralized access point for logging account activity such as account creation, credential changes, attribute activity, credential usage, and account deletion or suspension.
5. **Centralize Access with Single Sign-on and Enable Federation.** It is expected that agencies will have PIV-enabled enterprise applications after the 2015 cyber sprint for internal and external users. Consider integrating all enterprise applications into an IDaaS to enable all applications with PIV or other comparable MFA options to create a consistent user experience. Centralizing access can improve credential management for all users, more easily support integrating various authenticators, and create a centralized federation point for external users.
6. **Require Digital Identity Risk Assessments.** A Digital Identity Risk Assessment (DIRA) identifies a user’s transaction risk within a Federal Information Security Modernization Act boundary. Agencies must perform assessments, as stated in [OMB Memorandum M-19-17](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. If your agency does not have a Digital Identity Risk Assessment policy or process, consider writing one based on the [Digital Identity Risk Assessment Playbook]({{site.baseurl}}/playbooks/dira/){:rel="noopener noreferrer"}.

A Digital Identity Risk Assessment (DIRA) identifies a user's transaction risk within a Federal Information Security Modernization Act boundary. Agencies are required to perform assessments as stated in [Office of Management and Budget Memo 19-17](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. If your agency doesn't have a Digital Identity Risk Assessment policy or process, consider writing one based on the [Digital Identity Risk Assessment Playbook]({{site.baseurl}}/playbooks/dira/){:target="_blank"}{:rel="noopener noreferrer"}.

## Step 3. Architecture Considerations

Many agencies face similar challenges when adopting IDaaS. This section includes architectural considerations aligned with the FICAM Services Framework. One of the main benefits of using cloud-based tools is automation by leveraging programmatic interfaces and open standards for authorization, such as OAuth.

### Identity Management

Agencies can use IDaaS to create a global identity (also referred to as a master user record) within an agency and across cloud and on-premises environments. **Enterprise identity awareness is a zero trust capability.** Address the following items when taking a Cloud Identity approach to identity management:

1. **Automate Identity.** One unique feature of IDaaS is the potential to automate manual processes. For example, a user's account can be automatically suspended after 14 or 30 days of inactivity. Leverage API integrations to automate lifecycle management processes with other IT Tools. For example, integrate IDaaS with an IT Service Management tool to track and audit permissions. Learn about [System for Cross-Domain Identity Management](https://scim.cloud){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, an open standard used by IDaaS and other cloud tools to automate user provisioning. **Automating identity processes is a mature zero trust capability.**
2. **Accurate Directory Information.** Before starting an IDaaS project, ensure correct source directory information. An IDaaS will replicate your on-premises directories to a cloud directory and may even support bi-directional information updates. At a minimum, most cloud directories support one-way sync to the cloud directory. It is better to clean your directory before rather than after replication.
3. **Virtual Directory.** Not all cloud application access is equal. Consider using a virtual directory to create unique personas for specific applications based on existing directory information. A virtual directory aggregates identity data from a variety of sources. For example, an application may require a particular attribute, such as citizenship, that is not in the directory record. An agency can use a virtual directory to create a unique application persona with data combined from various identity or data repositories. An IDaaS may support a virtual directory capability and act as a master user record.
4. **Entitlement Management.** Most cloud applications and platforms implement role-based entitlement management. Permissions management is based on a user in a group rather than an individual. Groups may consist of unique roles, such as government administrator, contractor administrator, contributor, or reader. All users in a group inherit the same permissions. Entitlement management is as easy as removing a user from that group.
5. **NPE Identity Management.** Each type of NPE, machine identity, or digital worker may require a different configuration or type of management. Start by cataloging the variety of NPE identities. NPE identities can include service accounts, robotic process automation bots, scripts, and more, depending on your use case and environment. Next, identify the highest risk devices and a method to secure their access.

### Credential Management

A smart card is not automatically a PIV just as authenticators are not automatically phishing resistant. The process of binding and using an authenticator requires multiple components. IDaaS may support more types of phishing-resistant authenticators than on-premises tools. **Implementing phishing-resistant MFA for all workforce access is a zero trust capability**. Address the following items when taking a Cloud Identity approach to credential management:

1. **Allow Multiple Phishing-Resistant Authenticators.** The government issues federal employees and contractors PIV cards for physical and digital access, but the cards may not fit every digital use case, such as cloud, mobile, or command lines. Employees also need a comparable authenticator alternative in case they lose or cannot use a PIV card. Use the [Digital Identity Risk]({{site.baseurl}}/playbooks/dira/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} Assessment process to identify a minimum authenticator assurance level based on the user transaction risk. See the National Security Agency fact sheet on [potential secondary authenticator options](https://www.nsa.gov/Press-Room/Press-Releases-Statements/Press-Release-View/Article/3562460/nsa-shares-recommendations-to-advance-device-security-within-a-zero-trust-frame/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} for workforce use cases.
2. **NPE Credentialing.** Agencies should conduct risk assessments on NPE access. Part of this process determines if, how, and when to enforce more stringent controls, auditing, and monitoring. Compromise of an NPE credential can occur in much the same way as a human user’s credential, and detection may not occur for an extended period. An IDaaS may have the capability to act as an API access key centralized repository for easier management and auditing.
3. **Memorized Secrets.** A memorized secret is a password or a PIN. Only use passwords as part of an MFA and as a last resort with additional controls. Until an agency can implement passwordless, phishing-resistant authenticators, follow [NIST Special Publication 800-63B](https://pages.nist.gov/800-63-3/sp800-63b.html){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} guidelines for passwords in IDaaS:

- Allow passphrases.
- Check against breach corpora, dictionary words, repetitive characters, or context-specific and denied.
- Offer a password strength meter.
- Limit the number of failed attempts before a lock-out or a password reset.
- Not require periodic password updates.
- Use as part of a multifactor authenticator.
- Allow a user to cut and paste a password.

{% include alert-warning.html heading="Risk Management Challenge - Unique Credentials" content="Credentials should be assigned on an individual basis and not shared. If a credential must be shared, NIST recommends requiring individual authentication to access the shared credential." %} 

### Access Management

A primary IDaaS capability is a centralized policy enforcement point that may integrate user and entity behavior analytics, risk-based access policies, and continuous validation. **Integrating risk-based access policies into an access decision is a zero trust capability.** Address the following items when taking a Cloud Identity approach to access management:

1. **Integrate Identity and Cloud Access.** Access in this context means creating network paths for users from an agency network (direct or through a virtual private network) and potentially for users not on an agency network. For example, the Email as a Service logon page is accessible off-network but requires SSO, which is only accessible on the agency network. [Trusted Internet Connection 3.0](https://www.cisa.gov/publication/tic-30-core-guidance-documents){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} provides two cloud access options through either a Cloud Access Security Broker or a Security Gateway. Both may operate in a forward or reverse proxy mode to monitor agency traffic or bring your own device and apply access policies in real time. This feature typically requires integration with an IdP.

2. **Protocol Monitoring.** Access comes in many protocols. Monitor access attempts over all possible protocols, such as HTTPS and secure shell. Factor in port translation technology that converts ports and protocols (e.g., Converts HTTPS into Secure Shell (SSH)).
3. **Enable Risk-Based Access Control.** Many cloud access tools can leverage telemetry decisions such as device type, browser type, and location for Attribute-Based Access Control. Some IDaaS may provide native or, through an API, risk information to enforce risk-based access control, including behavior analytics and threat information feeds. Verify how and if an IDaaS can support this capability.

{% include alert-info.html heading="Access Policy by User Type" content="Application owners can determine ideal conditions for access, such as during working hours, from the United States, on government-furnished equipment, or on an approved device, by reviewing access or activity logs. Centrally identify, implement, and track access policies and exceptions with an IDaaS." %} 

### Governance

Identity governance includes both program oversight and technical controls. Agencies should investigate automating technical governance controls when and if this solution is cost effective and necessary based on a risk assessment. Address the following items when taking a Cloud Identity approach to governance:

1. **Certify Access.** Access certification or recertification is the process of an application owner or a manager attesting to someone's access and can be an automated or manual process. Access certifications should happen more frequently for higher impact applications, such as monthly or quarterly.
2. **Plan for Contingencies.** Verify IDaaS availability requirements and continuity procedures. Test disaster recovery scenarios regularly. Continuity planning may require collaborating with your IDaaS to identify strategies around geographic outages, denial of service attacks, or other potential outages.
3. **Configuration Monitoring.** Establish audit policies to monitor configuration changes. Implement controls to prevent misconfiguration (e.g., default private or deny). When configurations change, inform all administrators or hold a training event to advise them.
4. **Policy-Based Governance.** A key success factor is an agency policy that defines roles, identity lifecycle stages and procedures, and potentially a central repository of identity policies for infrastructure as code or multi-cloud management. Policy-based governance ensures consistent implementation of IDaaS policies.
5. **Monitor Activity.** Enable activity logging for all users. Log monitoring was a primary success factor in [detecting activity related to Solarwinds and Active Directory compromise](https://us-cert.cisa.gov/ncas/analysis-reports/ar21-134a){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}.

{% include alert-info.html heading="Workforce Training" content="Implement Cloud Identity processes through open protocols and languages such as JavaScript Object Notation, System for Cross-Domain Identity Management, OAuth, Security Assertion Markup Language, Open Policy Agent, and Open ID Connect. ICAM workforce training should incorporate these protocols and languages to include known weaknesses and how to overcome them." %} 

{% include alert-warning.html heading="Workforce Challenge - Informing Users" content="Any changes to the user experience can degrade workforce efficiency. Make a plan to communicate changes and prepare your users." %} 

### Federation

Federation is the technology, policies, standards, and processes that allow an agency to share digital identities, attributes, and credentials between trust domains or organizations and usually occurs through an assertion. Federation can be a technical mechanism to implement a Single Sign-on in an agency (within the same agency domain). It also is a mechanism to share identity information across domains, such as between agencies, mission partners, or trust frameworks.

Address the following items when taking a Cloud Identity approach to federation:

- **Within the Same Agency Domain**
  - **Assertion Profile**. The greatest challenge with federating in an agency is identifying if and how an application supports an assertion protocol. In addition, applications may need specific attributes asserted from the IDaaS. Some IDaaS may have preconfigured profiles to streamline application onboarding, which previously was a manual task. See the [Enterprise Single Sign-on Playbook]({{site.baseurl}}/playbooks/sso/#step-2-plan-application-integration){:target="_blank"}{:rel="noopener noreferrer"} section on planning application integration for more information.

- **Across Agency Domains**
  - **Trust Framework**. Federating across security or organizational boundaries requires a legal agreement and a technical exchange. An agreement between entities should identify each organization’s required security and governance processes. A best practice is creating a template that includes the format and required attributes.

#### Federation and Trust Frameworks in Action

Agencies leverage trust frameworks daily for different purposes. The Federal Public Key Infrastructure is one example of a federal government trust framework. See [NISTIR 8149](https://csrc.nist.gov/publications/detail/nistir/8149/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} for more information on trust frameworks.
1. **Governance** - The [Federal PKI Policy Authority (FPKIPA)]({{site.baseurl}}/ficam/#federal-public-key-infrastructure-policy-authority){:target="_blank"}{:rel="noopener noreferrer"} sets policies, approves members and applicants, and oversees compliance activities of the Federal PKI Trust Framework.
2. **Technical and Security Requirements** -  The Federal PKI Policy Authority (FPKIPA) maintains the [Federal PKI Certificate Policies]({{site.baseurl}}/fpki/#audit-information-for-the-fpki-management-authority){:target="_blank"}{:rel="noopener noreferrer"} that outline technical and security requirements for all members. Two policies cover internal government requirements: The Federal Common Policy Framework and The Federal Bridge Certificate Policy, which is an interoperability framework for federal and private sector partners.
3. **Legal Agreements** - Every Federal PKI member must sign a Memorandum of Agreement with the FPKIPA that outlines roles and responsibilities to maintain the security and confidence of the Federal PKI Trust Framework.
4. **Conformance Criteria** - Every Federal PKI member must complete an annual third-party audit against either The Federal Common Policy Framework or The Federal Bridge Certificate Policy.
5. **Recognition** - Federal PKI members are an [identity trust service]({{site.baseurl}}/trust-services/){:target="_blank"}{:rel="noopener noreferrer"} that offers government, business, or trust framework services.

See [NIST Interagency Report 8149](https://csrc.nist.gov/publications/detail/nistir/8149/final){:target="_blank"}{:rel="noopener noreferrer"} for more information on trust frameworks.

Federation trust frameworks also exist in the Federal Government.
- [Max Authentication Federated Login](https://login.max.gov/cas/login?service=https%3A%2F%2Fportal.max.gov%2Fhome%2Flogin%2Fcas){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - Provides a government-to-government federation service for either access to Max.gov or an agency application. Typically, customer agencies must sign an agreement and use the Max.gov assertion profile.
- [GSA Login.gov](https://partners.login.gov/product/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - Provides primarily a public-to-government federation service. It requires an agency customer agreement and adhering to the [login.gov assertion profile](https://developers.login.gov/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}.

Some government agencies also recognize, participate in, and leverage non-government trust frameworks. Often, these organizations   do not manage identities or credentials directly. Most certify and annually audit services that provide identity proofing and credentialing.

- The Federal PKI Policy Authority reviews the PKI trust frameworks of a small number of [non-government organizations]({{site.baseurl}}/trust-services/#non-government-pki-trust-framework){:target="_blank"}{:rel="noopener noreferrer"} to determine whether the policies, processes, legal agreements, privacy protections, security controls, and audit requirements are comparable to Federal PKI requirements. If comparable, the organizations that manage their communities’ rules act as a PKI bridge. 
- GSA is a member of the [Kantara Initiative](https://kantarainitiative.org){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, which is a nonprofit, non-government trust framework program. It operates conformity assessment and assurance and grants trust marks to companies that show conformance to a Kantara standard based on NIST Special Publication 800-63-3. The Kantara Initiative accredits full identity service providers, component services, and Kantara-accredited assessors. An agency may recognize a Kantara trust mark to federate with an external Identity Provider. GSA is also are an associate member of the [Certification Authority / Browser Forum](https://cabforum.org/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, an industry forum that develops PKI baseline requirements for server, code signing, and secure email certificates.
- The [DirectTrust Health Information Service Provider](https://directtrust.org/who-we-are){:target="_blank"}{:rel="noopener noreferrer"} is a PKI trust framework for the healthcare community collaboration leveraged by the Department of Health and Human Services (HHS). It is a nonprofit trade alliance that is an ANSI-accredited standards body, a trust framework supported by policy, and an accredited person or organization for reliable and trusted exchange across the DirectTrust network.
- NIST is a member of the [Fast Identity Online (FIDO) Alliance](https://fidoalliance.org/overview/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, which is an open industry association that promotes the development of, use, and compliance with standards for authentication and device attestation. The FIDO Alliance certifies vendor products to conform to their [FIDO standard, including Functional Certification, Certified Authenticator Levels, and Biometric Component Certification programs](https://fidoalliance.org/certification/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. The FIDO2 authenticators are mentioned in the OMB Memorandum M-22-09 as an example of a phishing-resistant authenticator approach and in NIST Special Publication 800-63-3 implementation guidance as an example of impersonation-resistant authenticator.

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Use Case - Using a third-party credential service provider (CSP)</h4>
    <p class="usa-alert__text">
      The integrity of a Trust Framework is vital when federating with external identities. The trust framework partners should have governance processes that may include a verified accreditation or audit process to ensure the identity proofing, authenticator, and federation assertion meets the intent of <a class="usa-link usa-link--external" href="https://pages.nist.gov/800-63-3/" target="_blank" rel="noopener noreferrer">NIST Special Publication 800-63-3 requirements</a>.  Using a third-party audit service provides the additional assurance of secure and compliant operations. In the context of FedRAMP, it is a third-party assessment organization or an annual compliance audit for the Federal Public Key Infrastructure Shared Service Providers. External examples used by federal agencies include the Kantara Initiative for federal full or component identity services and the DirectTrust for the Health Information Service Provider. The Trust Framework requirements set the assurance for how external digital identities and what NPEs are trusted to access an agency resource.
    </p>
  </div>
</div>

## Step 4. Test and Deploy Identity Automation

IDaaS products may vary in configuration and operation. This section provides technology and vendor-agnostic steps to document an existing manual process for automation following a user experience format. Automating tasks may require a combination of native IDaaS capabilities and scripting, API requests, or tool integration.

1. **Document the Process.** The process may include all actions and outcomes from a user perspective. Documenting may follow a similar structure as the use case example provided in [Step 1](#step-1-gain-support). Example processes for automation include:
   1. User account suspension due to inactivity.
   2. Account provisioning or de-provisioning (onboarding).
   3. Approving access requests for users in a specific group.
   4. Reporting suspicious activity.
   5. Credential enrollment.
   6. PKI Trust store management.
2. **Review Process Workflow.** The review may include a whiteboard session or watching a user perform the process. It also includes documenting pain points and dependencies to complete the task. The outcome of this step is a thorough understanding of the process.
3. **Generate an Automated Approach.** Review the workflow steps for complete or partial automation. Manual activities may include:
   1. A series of approvals to provision an account, such as employee onboarding.
   2. Data validation.
   3. Generating reports.
   4. Sending reminder emails.
   5. Testing.
4. **Test and Implement Workflow.** After finding an optimal workflow, it is time to test and implement it. If possible, test in a non-production environment. If testing is only available in production, limit the impact to a small community of users or a non-mission critical task.

## Emerging Topics

The Cloud Identity Working Group discussed two emerging topics: Cloud Infrastructure Entitlement Management and DevSecOps Identity.

## Cloud Infrastructure Entitlement Management

Cloud Infrastructure Entitlement Management (CIEM) is a specific tool for managing identities in multi-cloud environments. A primary challenge in managing cloud entitlements is the pervasiveness of understanding entitlement risk. In this context, entitlement risk is an attacker’s ability to exploit how cloud services and resources connect or extend. This attack technique is called a [Valid Cloud Account Privilege Escalation in MITRE ATT&CK](https://attack.mitre.org/techniques/T1078/004/){:target="_blank"}{:rel="noopener noreferrer"}. For example, a service account is an NPE account created to perform an automated action with specific privileges. A service account may have administrator privileges and, if compromised, an adversary can use it to conduct malicious activity. CIEM can identify risk in people, service, and resource entitlements.

- **People Entitlements** - Permissions for people to perform actions such as changing information or accessing security settings.
- **Service Entitlements** - Permissions for services to perform actions on a platform, such as starting or stopping services or performing automated tasks.
- **Resource Entitlements** - Permissions to access specific resources such as a database, file storage, or workloads.

An IDaaS capability is usually limited to people processes and API key management. It may not be able to identify and manage entitlements in a multi-cloud environment. CIEM may be part of a broader Cloud Security Posture Management tool or it may have its own platform. See the [Cybersecurity and Infrastructure Security Agency (CISA) Cloud Security Technical Reference Architecture](https://www.cisa.gov/sites/default/files/publications/CISA%20Cloud%20Security%20Technical%20Reference%20Architecture_Version%201.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} on Cloud Security Posture Management for more information. A best practice in cloud entitlement management is to regularly review service accounts with administrator privileges and determine if they need a generic or fine-grained (custom) administrator role.

## DevSecOps Identity

DevOps is a term that emerged a few years ago to express how integrated teams of developers and system operators could work together to streamline the process of developing, testing, deploying, and operating at the speed of business. The ability to move through those cycles rapidly is also called the Continuous Integration/Continuous Delivery (CI/CD) pipeline. DevOps is a cross-functional effort, and the adoption of cloud services has accelerated this process.

Since the goal of the DevOps team is to get software operating in production quicker, security considerations are often more focused on the operational environment rather than on the tools or the pipeline that is used to deploy the software. In high-velocity settings, the attack surface leveraged by an adversary may constantly change, putting the organization at extreme risk, as seen in the recent Solarwinds compromise. DevOps uses credentials called secrets, which include username/passwords, API keys, SSH keys, and PKI certificates. Follow the recommended strategies below to integrate ICAM best practices into DevSecOps.

1. **Manage DevOps Secrets.** The increased use of code to configure infrastructure places a greater demand on ensuring that the secrets used in these environments are well managed and not embedded in code. An agency may need an NPE Certificate Manager to automate the NPE certificate lifecycle. Separately, a Secrets Manager can serve as an API-based repository for automated secret check-in/check-out and rotation. Package the total code and configuration as a configuration item so that the entire content is known, tracked, and potentially verifiable through a software bill of material.
2. **Implement Custom Roles for Separation of Duties.** DevOps scripts may perform the same function across multiple development and production environments. Custom roles help segment access across security boundaries, but also to secrets. A configurable separation can make sure that a script that deploys the database does not have access to change the operational data in the database.
3. **Practice Production Security Practices.** It is common to share credentials across non-production environments or not apply common identity best practices (e.g., a simple lab password or no MFA). Sharing credentials enables one compromised password to create a persistent access point. Practice production security practices in your test environments.
4. **Manage Programmatic Access.** Create and maintain a continuous device inventory for all environments, including the DEV, TEST, and STAGING environments. Inventory all of the tools with programmatic access and the component owner. A continuous inventory lessens the potential for introducing unknown devices or code.

See the [GSA Guide](https://tech.gsa.gov/guides/dev_sec_ops_guide/){:target="_blank"}{:rel="noopener noreferrer"} on DevSecOps for more information.

## Appendix A. Policies, Standards, and Guidance

## Policies

1. [Executive Order 14028 - Improving the Nation's Cybersecurity](https://www.federalregister.gov/documents/2021/05/17/2021-10460/improving-the-nations-cybersecurity){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
2. [Federal Cloud Smart Strategy](https://cloud.cio.gov/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
3. [Federal Zero Trust Strategy](https://zerotrust.cyber.gov/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
4. [Office of Management and Budget Memorandum M-19-17](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

## Standards

1. [NIST Special Publication 800-63 - Digital Identity Guidelines](https://pages.nist.gov/800-63-3/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
2. [NIST Special Publication 800-145 - The NIST Definition of Cloud Computing](https://csrc.nist.gov/publications/detail/sp/800-145/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
3. [NIST Special Publication 800-204B - Attribute-Based Access Control for Microservices-based Applications Using a Service Mesh](https://csrc.nist.gov/publications/detail/sp/800-204b/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
4. [NIST Special Publication 800-207 - Zero Trust Architecture](https://csrc.nist.gov/publications/detail/sp/800-207/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
5. [NIST Special Publication 800-210 - General Access Control Guidance for Cloud Systems](https://csrc.nist.gov/publications/detail/sp/800-210/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

## Guidance

1. [CISA Cloud Security Technical Reference Architecture](https://www.cisa.gov/publication/cloud-security-technical-reference-architecture){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
2. [CISA Zero Trust Maturity Model](https://www.cisa.gov/publication/zero-trust-maturity-model){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
3. [Digital Identity Risk Assessment Playbook]({{site.baseurl}}/playbooks/dira/){:target="_blank"}{:rel="noopener noreferrer"}
4. [Data Center and Cloud Optimization Initiative Cloud Strategy Guide](https://community.max.gov/display/Egov/Agency%2BIT%2BModernization%3A%2BEducational%2BResources%2BBuilding%2BBlocks){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
5. [Enterprise Single Sign-on Playbook]({{site.baseurl}}/playbooks/sso/){:target="_blank"}{:rel="noopener noreferrer"}
6. [FedRAMP Digital Identity Requirements (Version 1.0)](https://s3.amazonaws.com/sitesusa/wp-content/uploads/var/www/html/sites/www/app/wordpress/wp-content/blogs.dir/482/files/2016/06/FedRAMP_Digital_Identity_Requirements_v1.0.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
7. [Federal ICAM Architecture]({{site.baseurl}}/arch/){:target="_blank"}{:rel="noopener noreferrer"}
8. [ICAM Governance Framework]({{site.baseurl}}/docs/playbook-identity-governance-framework.pdf){:target="_blank"}{:rel="noopener noreferrer"}
9. [ICAM Program Management Playbook]({{site.baseurl}}/university/pm/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
10. [General Services Administration - Cloud Information Center](https://cic.gsa.gov/){:target="_blank"}{:rel="noopener noreferrer"}
11. [NIST Interagency Report 8149 - Developing Trust Frameworks to Support Identity Federations](https://csrc.nist.gov/publications/detail/nistir/8149/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
12. [NIST Interagency Report 8335 - Identity as a Service for Public Safety Organizations](https://csrc.nist.gov/publications/detail/nistir/8335/draft){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
13. [NIST Interagency Report 8360 - Machine Learning for Access Control Policy Verification](https://csrc.nist.gov/publications/detail/nistir/8360/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
14. [NIST Special Publication 1800-13 - Mobile Application Single Sign-on](https://csrc.nist.gov/publications/detail/sp/1800-13/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
15. [National Security Agency Cybersecurity Information Sheet - Mitigating Cloud Vulnerabilities](https://media.defense.gov/2020/Jan/22/2002237484/-1/-1/0/CSI-MITIGATING-CLOUD-VULNERABILITIES_20200121.PDF){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
16. [Open Authorization (OAuth)](https://oauth.net/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
17. [System for Cross-Domain Identity Management (SCIM)](https://scim.cloud){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

## Appendix B. Acronyms

| Acronym | Definition |
| --- | --- |
| API | Application Programming Interface |
| CI/CD | Continuous Integration/Continuous Delivery |
| CIEM | Cloud Infrastructure Entitlement Management |
| DIRA | Digital Identity Risk Assessment |
| FedRAMP | Federal Risk and Authorization Management Program |
| FICAM | Federal Identity, Credential, and Access Management |
| FISMA | Federal Information Security Management Act |
| ICAM | Identity, Credential, and Access Management |
| IDaaS | Identity as a Service |
| IdP | Identity Provider |
| MFA | Multi-Factor Authentication |
| NIST | National Institute of Standards and Technology |
| NPE | Non-Person Entity |
| OAuth | Open Authorization |
| PIV | Personal Identity Verification |
| PKI | Public Key Infrastructure |
| SSO | Single Sign-On |
| WebAuthN | Web Authentication |



