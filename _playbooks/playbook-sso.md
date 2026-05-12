---
layout: page
collection: playbooks
title: Enterprise Single Sign-On Playbook
pubdate: 2021-11
type: Markdown
permalink: /playbooks/sso/
description: The Enterprise SSO Playbook is a five-step playbook to aid agencies in planning an SSO or Identity Federation service.
sidenav: playbooks
sticky_sidenav: true

version: 1.3
pubdate: March 18, 2026

subnav:
  - text: Executive Summary
    href: '#executive-summary'
  - text: Centralize Application Access in Five Steps
    href: '#centralize-application-access-in-five-steps'
  - text: Step 1. Gain Enterprise Support
    href: '#step-1-gain-enterprise-support'
  - text: Step 2. Plan Application Integration
    href: '#step-2-plan-application-integration'
  - text: Step 3. Prepare Service Integration
    href: '#step-3-prepare-service-integration'
  - text: Step 4. Integrate Applications for Agency Use
    href: '#step-4-integrate-applications-for-agency-use'
  - text: Step 5. Federate Application Access
    href: '#step-5-federate-application-access'
  - text: Appendix A. Troubleshooting Single Sign-On
    href: '#appendix-a-troubleshooting-single-sign-on'
---

<!-- Version 1.2<br>
May 30, 2025 -->

<img src="{{site.baseurl}}/assets/logo/logo-gsa.png" width="64" height='64' align="left" alt="U.S. General Services Administration Logo">
<img src="{{site.baseurl}}/assets/logo/logo-cio-round.png" width="64" height='64' align="left" alt="U.S. Federal Chief Information Officer Council Logo"><br><br><br>

This playbook is a collaboration between the Identity, Credential, and Access Management Subcommittee of the Federal Chief Information Security Officer (CISO) Council and the General Services Administration Office of Government-wide Policy, Federal Identity and Cybersecurity Division.

<br>
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="v-a1">
      Date: {{page.pubdate}} - Version: {{page.version}}
    </button>
  </h4>
  <div id="v-a1" class="usa-accordion__content usa-prose">
    <table>
    <caption>Enterprise Single Sign-On version table</caption>
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
        1.3
        </th>
        <td>3/18/2026</td>
        <td>Update content and validated content.</td>
    </tr>
     <tr>
        <th scope='row'>
        1.2
        </th>
        <td>5/30/2025</td>
        <td>Update content to align to final public draft of NIST SP 800-63C-4 and provide planning considerations for FAL3.</td>
    </tr>
      <tr>
        <th scope='row'>
        1.1
        </th>
        <td>11/16/2021</td>
        <td>Add SSO US code reference. Added Appendix A of SSO troubleshooting steps.</td>
    </tr>
    <tr>
        <th scope='row'>
        1.0
        </th>
        <td>02/12/2021</td>
        <td>Initial Draft</td>
    </tr>
    </table>
  </div>
</div>

<!-- | Version Number | Date | Change Description |
| :----------: | :-------: | -------- |
| 1.2 | 5/30/2025 | Update content to align to final public draft of NIST SP 800-63C-4 and provide planning considerations for FAL3. |
| 1.1 | 11/16/2021 | Add SSO US code reference. Added Appendix A of SSO troubleshooting steps. |
| 1.0 | 02/12/2021 | Initial Draft | -->

## Executive Summary
The Enterprise Single Sign-On (SSO) Playbook is a practical guide to help federal agencies implement or modernize an SSO service for federal employees and contractors, ensuring identity continuity across the enterprise while meeting the security demans of a modern digital environment. As a foundational element of Identity, Credential, and Access Management (ICAM), Enterprise SSO enables agencies to effectively enforce phishing-resistant multi-factor authentication (MFA) in alignment with NIST SP 800-63-4 and federal Zero Trust goals. A key functional advantage of this approach is the ability to front-end legacy applications, extending high-assurance multi-factor authentication capabilities to systems that don’t natively support modern identity protocols. Other benefits of Enterprise SSO include: 

1. **Accelerating IT Modernization and Cloud Adoption:** Provides a centralized, standards-based access point to securely onboard on-premises and cloud applications via modern protocols (e.g., SAML and OIDC).
2. **Supporting a Remote Workforce:** Efficiently adapts to any location, various authenticators, and any device workforce by enforcing context-aware authentication at Authentication Assurance Level 2 (AAL2) or higher.
3. **Improving User Experience:** Streamlines the user experience across all agency applications configured with the service.
4. **Reducing Identity-related Help Desk Tickets:** Lowers operational costs by utilizing automated provisioning, de-provisioning, and self-service credential management.   
5. **Strengthening  Security Posture:** Quickly resolves unauthorized access actions by centralizing authentication logging and monitoring activity.

Agencies can use this playbook to centralize application access for federal  employees and contractors, establishing the technical foundation for future inter-agency federation efforts. This playbook outlines a five-step process to implement or modernize an Enterprise SSO service aligned with the Federal Identity, Credential, and Access Management (FICAM) Architecture and the NIST SP 800-63-4 DIRM Framework (RMF). 

This playbook outlines a five-step process to implement or modernize an Enterprise SSO service aligned with the Federal Identity, Credential, and Access Management (FICAM) architecture. This playbook is designed for identity program managers and architects seeking to modernize access management systems for federal employees and contractors across internal or external applications. While  agencies are encouraged to tailor this playbook to fit their unique organizational structure and mission needs,other IT program participants, including program managers and application teams, may find significant value in incorporating this risk-driven approach in their planning.

### Key Terms
These are key terms used throughout this document.

* Assertion - A cryptographically protected statement from an Identity Provider (IdP) to a Relying Party (RP) that contains information about an authenticated subscriber, including identity attributes and the authentication event context.

* Assertion protocol - A standardized data exchange format and set of rules used to communicate federated authentication and attribute information between an IdP and RP.  
* Authentication - A process that establishes confidence in a subscriber’s identity by verifying the possession and control of one or more authenticators bound to that identity.   
* Authorization - The process of granting or denying specific access rights to a subscriber or process, based on verified identity, assigned attributes, and defined security policies for agency resource.   
* Authenticator - A digital or physical factor that a subscriber possesses and controls to verify their claimed identity, typically classified as something you know, something you have, or something you are.   
* Credential - A digital representation or object that authoritatively binds an authenticator (or set of authenticators) to a subscriber’s identity and associated attributes.   
* Public Cloud - A cloud infrastructure provisioned for open use by the general public. A public cloud exists on the premises of the cloud provider, owner, and operator, who may be a business, academic, or government organization, or some combination of the three. In the context of this playbook, “cloud” refers to a public cloud, acting as a RP that accepts federated assertions from the agency’s IdP.   
* Resource - A federal executive branch application, data repository, or computing service that acts as a RP. A resource consumes assertions from an IdP to make policy-based access decisions regarding authenticated subscribers. 

### Disclaimer
This playbook was developed by the General Services Administration Office of Government-wide Policy (GSA OGP) with input from federal IT practitioners. This document provides recommended best practices and should not be interpreted as official policy or mandated action, nor  does it provide authoritative definitions for IT terms. 

Instead, this playbook supplements existing federal IT policies and builds upon the [Office of Management and Budget Memorandum 19-17 (OMB M-19-17), Enabling Mission Delivery through Improved Identity, Credential, and Access Management](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, and the NIST SP 800-63-4 DIRM Framework. It is intended to be used in conjunction with existing federal identity guidance and playbooks. Privileged user access (e.g., superusers, domain administrators) is out of scope for this playbook, as these roles typically require higher assurance levels and specialized security controls. 

## Centralize Application Access in Five Steps
An Enterprise SSO service centralizes authentication to applications across a federal agency, ensuring identity continuity for the workforce. It provides a single portal or access point for multiple agency applications, consolidates authentication policies, and extends phishing-resistant multi-factor authentication to applications that do not natively support modern protocols. Implementing a centralized SSO service reduces the operational cost by minimizing identity-related help desk tickets and streamlining  account provisioning. By establishing a unified access method, agencies can also create the technical foundation necessary to federate with other federal partners. This playbook outlines five recommended steps for implementing or modernizing an Enterprise SSO service aligned with the NIST DIRM Framework. 

1. [Gain enterprise support:](#step-1-gain-enterprise-support){:class="usa-link"} Gain enterprise support to implement a centralized Single Sign-on (SSO) capability. If your agency is not already using an Enterprise SSO service, prioritize planning and funding as the foundation of your Identity, Credential, and Access Management (ICAM) strategy. Part of this process involves building a business case that highlights the security and operational benefits, while defining a target state that supports modular assurance levels (i.e., IAL, AAL, and FAL) after implementation.
2. [Plan application integration:](#step-2-plan-application-integration){:class="usa-link"} Plan application integration by performing a thorough inventory and analysis of your applications. To develop this inventory, collaborate across your agency, analyze network logs and financial records, and consult with application owners. Once you create the application list, analyze it for common authentication characteristics, such as supported protocols and user communities. This analysis is essential for conducting the DIRA to determine the appropriate modular assurance levels for each service.
3. [Prepare SSO service integration:](#step-3-prepare-service-integration){:class="usa-link"} Prepare SSO service integration by conducting an architecture review. Determine where agency user data is stored and how to connect it to the SSO service. Integrate  security integrations with Security Information and Event Management (SIEM) or other Continuous Diagnostics and Mitigation (CDM) tools to ensure visibility of authentication events. This integration supports the continuous evaluation of identity risks, allowing the SSO service to serve as a key enforcement point within a Zero Trust architecture.
4. [Integrate applications:](#step-4-integrate-applications-for-agency-use){:class="usa-link"} Integrate applications with the SSO service. This usually follows a three-step process to  configure, test, and release features to the user community. Focus on ensuring the SSO service enforces phishing-resistant MFA and provides identity continuity for both modern and legacy applications.
5. [Federate application access:](#step-5-federate-application-access){:class="usa-link"} Federate application access with other federal executive agency applications for federal employees and contractors. Reuse existing identities rather than repeat the process to establish a new identity for each application. Federating access includes establishing legal and technical agreements with partner organizations to ensure identity continuity and meet FAL1 or higher requirements. 

## Step 1: Gain Enterprise Support
A centralized authentication service can benefit your entire agency, improving the end user experience and your agency’s security posture. As you build a business case, capture the strategic benefits tied to specific business benefits. It’s important to explain the purpose in the context of business objectives to gain support from agency executives and secure a funding source. Each strategic benefit may include a different agency program to collaborate with. Conducting a cost benefit analysis may help identify a funding source and gain further support. Federal cybersecurity requirements outlined in [6 U.S.C. § 1523](https://uscode.house.gov/view.xhtml?req=6+USC+1523:+Federal+cybersecurity+requirements){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} reference each head of agency to implement a single sign-on trusted identity platform capable of enforcing phishing-resistant multi-factor authentication (MFA) in accordance with NIST SP 800-63-4.

### 1.1 Understand the Fundamentals
SSO is a technology pattern used to centralize authentication among multiple applications. The data is exchanged using an identity assertion protocol. The two main types of assertion protocols used in SSO are Security Assertion Markup Language (SAML) and OpenID Connect (OIDC). Table 1 provides a brief description of each protocol. This playbook focuses primarily on SAML and OIDC because they’re modern, vendor-neutral standards supported by almost all modern cloud applications and are the primary methods for achieving FAL requirements in NIST SP 800-63-4. While this playbook does not describe how each protocol is designed, your SSO product or vendor should explain how their product supports each protocol in accordance with the Digital Identity Risk Management (DIRM) Framework. 

| Technical Standard | Description | More Information |
| ----------------- | ----------- | --------------- |
| SAML | An XML-based open standard for exchanging identity assertions containing authentication and authorization data to meet FAL requirements. | [SAML 2.0 Technical Overview](https://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} |
| OIDC | A JavaScript Object Notation (JSON)-based authentication layer of the OAuth 2.0 authorization protocol used to transmit identity assertions containing basic user profile information to meet FAL requirements. | [Open ID Connect Foundation](https://openid.net/connect/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} |

{% include alert-info.html heading="SAML or OIDC?" content="Picking an assertion protocol is dependent on application support. If possible, defer to a more modern protocol such as OIDC if it’s supported by the application; however, legacy applications may only work with SAML, making it worth supporting both protocols to ensure identity continuity across the enterprise. Assertion protocols are specific to web-based (on-premise and cloud) or mobile applications. Some SSO vendors can extend their products to integrate with workstations, Virtual Private Networks (VPN), Virtual Desktop Interfaces, as well as other on premise applications and services. These integrations enable the agency to enforce phishing-resistant multi-factor authentication (MFA) at Authentication Assurance Level 2 (AAL2) or higher, while ensuring that the underlying identity assertions meet FAL requirements." %} 

<img src="{{site.baseurl}}/assets/playbooks/sso-overview.png" alt="Basic components required to perform single sign-on." width="560" height="276">

<p align="center"><b>Figure 1: Enterprise SSO Overview</b></p>

Table 2 provides descriptions and alternate terms that you might see for each actor in the transaction depicted in Figure 1.

Table 2. Enterprise SSO Overview

| SSO Actor | Description | SAML Term | OIDC Term | 
| --------- | ---------- | --------- | -------- |
| Employee or Contractor | A person seeking to access an application who has been proofed and issued a credential (e.g., PIV card or phishing-resistant authenticator) by the agency. | User | User |
| Enterprise SSO Service | A service that conducts authentication of an employee or contractor. Referred to as the Identity Provider in NIST Special Publication 800-63-4, this service is responsible for enforcing phishing-resistant multi-factor authentication (MFA) and issuing secure identity assertions. | Identity Provider (IdP) |  OpenID Provider |
| Assertion | A digitally signed identity message from the service, using a specific protocol containing user data and access privileges, to a relying party to fulfill FAL requirements. | SAML Assertion | ID Token, JSON Web Token | 
| Application | A consumer of an assertion and may be referred to as a relying party or service provider. It may be located on an agency network or a cloud service and is responsible for validating assertions in accordance with FAL requirements. | Service Provider | Resource Provider |

{% include alert-info.html heading="Are we federated yet?" content="Federation may have different meanings in different circles. In FICAM, federation is the sharing and acceptance of digital identities, attributes, and credentials managed by other agencies. SSO uses the same assertion protocols to share and accept digital identities with agencies and other federal applications to achieve identity continuity. This process relies on meeting specific FAL requirements to ensure the secure exchange of assertions across agency boundaries." %} 

### 1.2 Security Considerations
Applications rely on your Enterprise SSO to accurately and securely communicate and store user identity and attribute information. The centralized benefits of SSO can also increase the potential impact of security vulnerabilities. Table 3 highlights the most common SSO-specific risks that require mitigation strategies identified through the Digital Identity Risk Management (DIRM) Framework. Conducting a Digital Identity Risk Assessment (DIRA) is a critical step to ensure that centralized authentication is protected by phishing-resistant MFA and meets necessary federation security standards. 

Table 3. Critical Enterprise SSO Risks

| SSO-Specific Risks | Recommendations | 
| ------------------ | --------------- |
| Session Key Browser Caching | Use approved encryption to secure connections and enforce time restricted access and caching based on agency policies. Protection of assertion-bearing cookies is key to mitigating client browser attacks. Mitigation strategies should be documented through a DIRA to ensure session management aligns with FAL requirements. |
| Signing Key Security | NIST Special Publication 800-63C-4 Digital Identity Guidelines Federation and Assertions (PDF, July 2025) requires a minimum of FIPS 140 level 1 storage for FAL2 and FAL3 assertion signing keys. |
| Assertion Validation | Each application validates that the identity assertions it receives are from a trusted source and appropriate for its sub-domain, functionality, required attributes, and that other protections against injection and replay attacks are implemented in accordance with FAL requirements. |

{% include alert-error.html heading="Cyberattacks" content="Targeted cyberattacks may pose a heightened risk to your agency’s IT assets, such as enterprise directories, identity stores, and Enterprise SSO servers. Your SSO should be managed and monitored as part of your agency’s cybersecurity program and in accordance with the NIST SP 800-63-4 DIRM Framework. Monitoring strategies and threat mitigations should be documented in a DIRA in coordinated with CISA CDM initiative to ensure visibility into authentication events." %}

{% include alert-error.html heading="Application Security Responsibilities" content="A holistic approach is needed to mitigate threats against Federated SSO solutions, to include security controls by relying on party applications. If an identity assertion is directly requested by the application, inclusion of a nonce in that request and establishing an assertion expiration via a DIAS can mitigate several potential injection and replay threats as required by the FAL." %}

{% include alert-info.html heading="User Credential Fatigue" content="Users who are trained to enter their credentials without thinking can unintentionally supply them to a malicious credential prompt. Don’t ask users to provide their credentials if the security posture of their sessions has not changed. To mitigate this risk, agencies should prioritize phishing-resistant MFA at AAL2 or higher and document re-authentication frequencies in a DIRA to balance security with a streamlined user experience." %} 

Of particular note, SSO assertion signing keys are inherently trusted by RPs and can be considered a single point of failure in all Federated environments, including SSOs that use federation assertions. As a result, depending on the protocol used for signing (e.g., asymmetric vs MAC), there may not be a revocation mechanism for compromised SSO assertion signing keys. Exploitation of this particular signing key compromise would mean that a malicious actor may be able to forge trusted identity assertions at will, leading to widespread access to all integrated applications. Even at FAL3, where an RP must independently validate the Holder-of-Key (HoK), a malicious actor could substitute their own public key into the assertion and sign with a compromised SSO assertion signing key. In order to mitigate assertion signing key compromises, NIST SP 800-63C-4 (July 2025) mandates the use of FIPS 140 level 1 or higher key storage for FAL2 and FAL3 solutions and it is highly recommended to leverage hardware technologies and chipsets that prevent export of private signing keys (e.g., FIPS 140 level 2 or higher HSM or TPM). 

{% include alert-info.html heading="SSO Security Reference" content="A more authoritative list of threats to identity  assertions and their associated mitigation strategies are included in NIST Special Publication 800-63C-4, Digital Identity Guidelines Federation and Assertions, Chapter 5." %} 

### 1.3 Build the Business Case
With any project, a business case is used to capture the strategic, business, and technical benefits from a project. Use examples in Table 4 below to craft your business case. The main benefits include:

<h3 class="site-preview-heading">Single Sign-On Strategic and Technical Benefits</h3>
<div class="usa-accordion usa-accordion--bordered usa-accordion--multiselectable" data-allow-multiple>
    <h4 class="usa-accordion__heading">
        <button class="usa-accordion__button" aria-expanded="true" aria-controls="m-a1">Support IT Modernization and Cloud Adoption Projects</button>
    </h4>
    <div id="m-a1" class="usa-accordion__content usa-prose">
        <ul>
            <li>Efficiently extend your on-premise identity and access system to integrate cloud applications more rapidly through the use of standardized protocols (e.g., OIDC and SAML) and pre-validated security patterns.</li>
            <li>Facilitate use of modular and plug-and-play authentication options to enforce phishing-resistant MFA at AAL2 or higher as required by NIST SP 800-63-4.</li>
            <li>Provide real-time data on application use to enhance operational visibility and support continuous monitoring requirements for a mature Zero Trust posture.</li>
            <li>Support centralized provisioning and de-provisioning to automate the identity lifecycle and ensure the rapid revocation of access required for a mature Zero Trust posture.</li>
        </ul>
    </div>

<h4 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="m-a2">Support Remote Workforce</button>
  </h4>
  <div id="m-a2" class="usa-accordion__content usa-prose">
    <ul>
      <li>Adapt to meet agency workforce mobility and work-from-anywhere needs by enforcing phishing-resistant MFA at AAL2 or higher to secure access from any location.</li>
    </ul>
  </div>

  <h4 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="m-a3">Improve User Experience</button>
  </h4>
  <div id="m-a3" class="usa-accordion__content usa-prose">
      <ul>
        <li>Provide a consistent agency user experience across web applications.</li>
        <li>Increase user satisfaction, productivity, and mission efficiency by reducing password fatigue through the adoption of phishing-resistant, passwordless authentication.</li>
        <li>Centrally manage authentication policies across all integrated applications to ensure a consistent user experience and support the transition to phishing-resistant credentials.</li>
      </ul>
  </div>

  <h4 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="m-a4">Reduce Identity-Related Help Desk Tickets</button>
  </h4>
  <div id="m-a4" class="usa-accordion__content usa-prose">
     <ul>
        <li>Reduce application IT support and help desk costs with centrally managed authentication and automated identity lifecycle management to decrease password-related support requests.</li>
        <li>Reduce exceptions and help desk calls through self-service credential  management and profile updates to support a transition toward phishing-resistant, passwordless authentication.</li>
      </ul>
  </div>

  <h4 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="m-a5">Centralize Monitoring and Security Controls</button>
  </h4>
  <div id="m-a5" class="usa-accordion__content usa-prose">
      <ul>
        <li>Centrally provide timely and relevant information on authentication attempts and other login information to agency resources to maintain visibility into identity continuity events across the enterprise.</li>
        <li>Enable on-demand analytics for security reporting metrics to measure progress toward mature Zero Trust identity goals and fulfill Digital Identity Risk Assessment (DIRA) requirements.</li>
        <li>Support evolving agency cybersecurity and compliance requirements by aligning with the NIST SP 800-63-4 DIRM Framework and federal phishing-resistant MFA mandates.</li>
        <li>Centralize logging and auditing of successful and failed user login attempts that support your Federal Information Security Modernization Act (FISMA) and CDM security objectives and fulfill the event logging requirements of OMB M-21-31 through a unified identity record.</li>
        <li>Generate normalized, timestamped, and attribute-enriched authentication logs from identity assertions to directly contribute to the efficiency of your agency’s cybersecurity operations center, data analytics, threat hunting, and security incident response services.</li>
      </ul>
  </div>
</div>

{% include alert-success.html heading="Best Practice - Building the Business Case" content="When building a business case, include qualitative aspects on how Enterprise SSO can improve user experience and security, a return on investment, and a cost-benefit analysis. Combining cost analysis (quantitative justification) and qualitative aspects may help obtain leadership support and funding for modernizing the agency's security architecture in accordance with the NIST SP 800-63-4 DIRM Framework." %} 

Coordinate the business case development with your agency ICAM governance structure. The ICAM governance structure should oversee your ICAM projects and work streams and align ICAM services and management with your agency’s mission. For ICAM governance and program management examples, see the [Framework for Integrated Governance Playbook]({{site.baseurl}}/docs/playbook-identity-governance-framework.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link"}.

### 1.4 Identify the Target State
Establish a realistic and achievable “to be” target state for your agency at key intervals (such as at one, three, and five years), aligned with the target maturity levels required by the Federal Zero Trust Strategy. Sometimes system impact level, access or credential requirements, or other factors can affect whether applications can integrate with your service. All applications are written differently, in different languages, at different times, for different purposes. Not all agency applications may support an assertion protocol. Your agency implementation should provide a range of compatible options, to maintain identity continuity across legacy and modern systems—which will help realize the highest return on investment from the start. 

## Step 2: Plan Application Integration
Perform an inventory of your agency’s applications, supported identiity assertion protocols and provisioning capabilities, and user community.

### 2.1 Application Inventory and Identity Risk Analysis
Application inventory and DIRA  are critical implementations. As part of this application inventory, collaborate across your agency if a list doesn’t already exist to determine the required AAL and FAL for each application. 

{% include alert-success.html heading="Best Practice - Application Inventory Sources" content="Some agencies may not have a single authoritative source for application discovery or asset management. Your agency’s FISMA asset and application inventories, DNS records, CISA CDM asset management inventories, and network scan reports may assist in developing and maintaining an application inventory that can be monitored and logged as required by OMB M-21-31." %} 

Your agency can group applications according to their major characteristics, similarities in use cases, design patterns, and technology stacks. Categorizing your application inventory based on these patterns helps you to organize your pilot, integrations, and production releases while enabling an efficient DIRA to determine appropriate AAL and FAL requirements. You may find efficiencies and scaling opportunities based on the below list. This list can also be used to prioritize application integration in step 4. 

- Number of users per community of interest,
- Digital Identity Risk Assessment (DIRA) statement,
- Type of application (e.g., mobile, web, thick client),
- Business use cases (e.g., HR, financial, collaboration, productivity, and mission applications),
- Where the application resides (e.g., on-premise, cloud-based, or third-party hosted), or
- Budget cycle and financial priorities (e.g., cost savings) associated with the transition to phishing-resistant, passwordless authentication. 

For example, the [Digital Identity Risk Assessment (DIRA) Playbook]({{site.baseurl}}/playbooks/dira/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link"} provides a process for identity risk analysis that includes both an application’s level of data sensitivity and its user population (shown in Figure 2). The results are documented in a Digital Identity Assessment Statement (DIAS) which includes the identity, authenticator, and FAL, which agencies can use and integrate as part of their overall Risk Management Framework (RMF) and FISMA processes. 

<img src="{{site.baseurl}}/assets/playbooks/dira-process.png" alt="Five-step DIRA process." width="560" height="462">

<p align="center"><b>Figure 2: DIRA Process</b></p>

{% include alert-success.html heading="Best Practice - Digital Identity Risk Assessments" content="Your agency’s DIRA process documents the minimum identity, authenticator, and federation level for a given application and assists with identifying similar applications." %} 

### 2.2 Identify Assertion Protocol and Provisioning Support
After inventorying applications, document these application requirements:

* Assertion protocol supported: (e.g., SAML 2.0, OpenID Connect (OIDC), or both; prefer profiles compliant with NIST SP-800-63-4 federation requirements for integrity, confidentiality, and phishing resistance.  
* Attribute requirements: (e.g., username format, required/optional claims/attributes; apply attribute minimization principles per SP 800-63-4 to release only necessary data and protect privacy).  
* Provisioning support: (e.g., just-in-time (JIT) provisioning via assertions, automated SCIM, or manual processes; include any attribute mappings or requirements for account creation/linking).

Many of the items above can be automatically discovered  within either the enterprise SSO service or the IdP metadata, or application admin consoles, but manual configuration is often required. Not every application natively supports an assertion protocol, however, many vendors and frameworks offer extensions or plugins for SAML 2.0 or OIDC.

Review applications capabilities for automated account provisioning integrated with the assertion protocol (e.g., JIT via OIDC claims or SAML attributes, or SCIM for lifecycle management). Conduct a risk assessment to evaluate provisioning impacts on security, privacy, and equity. Where possible, prioritize protocols and flows that enable phishing-resistant authentication and minimal data exposure to support federal Zero Trust and privacy objectives.

### 2.3 User Population
Perform a high-level analysis to determine how your agency's enterprise suubscribers (employees and support contractors) currently perform their daily work. This provides a starting point for understanding your agency’s user base and typical application use, including:

- Geographic locations (e.g., U.S. locations, overseas U.S. offices, international deployments),
- Types of work locations (e.g., fixed office, mobile, flexible, field-based),
- Modes of connectivity (e.g., high speed connections, low speed connections, intermittent connectivity, offline), and
- Types of authenticators and AAL currently in use.

{% include alert-warning.html heading="What about my authenticator?" content="When you use centralized authentication, support for different authenticators 
depends on the IdP, rather than the RP. When reviewing products, consider support for different authenticator types to meet AAL requirements, such as Personal Identity Verification (PIV), Common Access Card (CAC), and phishing-resistant non-PIV authenticators (e.g., one-time passwords (OTP) mobile applications, cryptographic software tokens, and mobile push notifications)." %} 

## Step 3: Prepare Service Integration
The Enterprise SSO service serves as your primary IdP and authentication channel, integrated into your existing ICAM architecture. It may replace one or more existing authentication solutions. Conduct an architecture review and identify environmental considerations. 

### 3.1 Conduct Architecture Review
Conduct an architecture review to determine what existing components you should integrate, such as:

- Authoritative source for subscriber accounts (directories or databases), 
- Subscriber lifecycle management (provisioning and de-provisioning processes), 
- Integration with continuous monitoring  tools such as a SIEM or Policy Engine, to evaluate runtime risk. 

In addition to system integration, the architecture review should include:

- System design, federation use cases, and system security plan;
- Supported functionality, user interfaces, subscriber support processes, administrative 
workflows; and 
- Relying Partying processes for onboarding new subscriber s communities and managing attribute requirements.

Figure 3 provides a view of an example federated architecture, including where the Enterprise SSO service is located as the IdP within that architecture, and other potential integration points for RPs. For additional information related to the component architecture and trust model, visit the [FICAM Architecture Playbook Systems for Component examples]({{site.baseurl}}/university/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link"}.

<img src="{{site.baseurl}}/assets/playbooks/sso-ficam-components.png" alt="FICAM Architecture component view of Single Sign-On." width="560" height="334">

<p align="center"><b>Figure 3: Example System Components for an Agency Enterprise ICAM Program</b></p>

{% include alert-info.html heading="Identity Synchronization" content="User data (e.g., identity) synchronization between the Enterprise SSO service and data repositories falls into two categories of one-way (unidirectional) or dual (bidirectional) syncs. One-way sync from the authoritative source directory to the service usually includes identity data and, sometimes, passwords. Agencies must identify which service should be the authoritative source for data based on the sync method and ensure alignment with the MUR plan accordingly." %} 

### 3.2 Environmental Considerations
Agencies with applications that are accessible from a public cloud or use private or hybrid cloud services may need to plan for additional architecture and network considerations to support a Zero Trust Environment. Consider these questions in your planning:

- Is a VPN required to access the application or Enterprise SSO service?
- Where does a user need to be located (physically or virtually) to access an application?
- What type of device (Government Furnished Equipment (GFE), non-GFE, laptop, mobile) is required to access the application or Enterprise SSO service?
- Are there security, routing (e.g., multihoming), or functionality implications for connecting the applications or Enterprise SSO across networks or security zones?

Each of these factors can affect network routing, domain naming, and application of your agency’s security policy.

## Step 4: Integrate Applications for Agency Use
As discussed in step 2, application variability may require different models to integrate with an SSO service. Your agency implementation should provide a range of compatible options for application integration, allowing the highest return on investment and ensuring alignment with Federal Zero Trust Mandates.

The Enterprise SSO service operators and application owners should collaborate in the following areas:
- Establishing an assertion protocol (e.g., SAML and OIDC) between the service and the application;
- Enabling application registration, provisioning, and de-provisioning (manual or automated) to ensure timely access revocation;
- Resolving user identities (directory synchronization exceptions) and other attributes governed by the MUR,
- Identifying roles and responsibilities for operations and maintenance of the integration; and
- Updating end user support and help desk processes, where applicable.

### 4.1 Plan Application Integration
Applications can be grouped according to benefits from your business case in step 1 or similarities as described in step 2. Application integrations can be grouped and prioritized with these considerations:

- Highest use application or highest return on investment,
- Number of identity-related password reset or provisioning help desk tickets,
- Application location (cloud-hosted versus on-premise or vice versa),
- Security considerations for centrally monitoring access to support a Zero Trust Architecture, and
- User community (federal employee, contractor, specific sub-agency, or office, etc.).

New applications should follow a streamlined onboarding process with or without an early adopter or pilot phase. Migrating existing applications is generally more complex in terms of phasing and change management. Plan for phased migrations where possible, including incorporating testing and production pilot feedback prior to a full production release for existing agency applications, specifically:

- Configure the application with the service using the MUR for attribute mapping,
- Test the connection, and
- Release the app to the user community.

### 4.2 Configure, Test, and Release the Application
Application integration should follow a configure, test, and release pattern aligned with FICAM standards.

#### Configure
Application configuration is usually performed in one of two patterns.

**SSO service-initiated** - The service hosts a dashboard or a list of applications available to the user and is sometimes referred to as Identity Provider or IdP Initiated. The transaction includes the following steps:

1. A user attempts to access the SSO service directly.
2. The user authenticates to the SSO service and selects an application from a dashboard or list.
3. The SSO service generates a signed assertion and the user is redirected to the application.

**Application-initiated** -  The application redirects the user to the SSO service portal. This is sometimes referred to as Service Provider or SP-initiated and is the preferred method for Zero Trust environments to support secure deep-linking.

1. A user attempts to access the application directly.
2. The user is redirected to the SSO service.
3. The user authenticates to the SSO service using the MUR as the identity source.
4. The SSO service generates a signed assertion and the user is redirected back to the application.

<img src="{{site.baseurl}}/assets/playbooks/sso-models.png" alt="Single sign-on is initiated by either accessing the application or through the SSO service." width="560" height="272">

<p align="center"><b>Figure 4: SSO-Initiated vs Application-Initiated Models</b></p>

Configuring the RP involves establishing a federation agreement through the exchange of configuration data between the IdP and the RP. The specific exchange mechanism is governed by the assertion protocol, but most IdP vendors provide documentation to ensure interoperability. While each RP may have a unique interface, the underlying assertion protocol is standardized to ensure a consistent Assurance Level. 

- SAML - Configuration typically entails exchanging metadata files containing cryptographic keys and service endpoints between the IdP and the RP. This establishes a verifiable trust relationship and the ability to securely share identity attributes. 
- OIDC - Configuration is often more automated, utilizing discovery endpoints and dynamic registration. It involves authorizing the RP to request specific identity scopes from the IdP and may follow a metadata process similar to SAML.

While SAML and OIDC may require manual configuration, the process is streamlined by following federation profiles. A critical component of RP configuration is defining the attribute bundle-the specific set of identity information shared. During the inventory, document the subject identifier format required by the RP, as it may differ from the subscriber’s primary identifier used at the IdP. As part of the RP configuration, you must define the minimal attributes required for account provisioning or to establish the context for policy-based authorization.

{% include alert-info.html heading="Unique User Identifiers" content="SSO vendors rely on the use of a unique user identifier (e.g., an email, an agency defined identifier). This is usually the username used to access the SSO service that should be sourced from the MUR. Application-specific username formats may also be supported. For example, jane.doe@agency.gov is used to log into the SSO service and then, the service may convert that to an application specific name such as janedoe01 to maintain compatibility with legacy systems while ensuring the underlying identity remains verified." %} 

#### Test
Once an application is configured, it should go through a test cycle to ensure it functions properly and maintains or improves the user experience. Testing should be performed in a non-production environment and may include: 

- Creating a test account in the SSO service linked to a test MUR, 
- Testing a service or application initiated login pattern to verify assertion integrity, or 
- If supported, testing automated provisioning and de-provisioning from the service to the application to ensure compliance with timely access revocation.

#### Release
Once an application is configured and tested, it can be released to the user community. This should come with an agency communication announcing the use of the SSO service, if not already in use. This communication should emphasize the security benefits of using the MUR for centralized access. It may also include: 

* Training or other communications to help user adoption and experience;  
* Updated help desk scripts to support SSO-specific login issues; and  
* Guidance on mandatory multi-factor authentication requirements per Federal Zero Trust mandates.

## Step 5. Federate Application Access
In FICAM, federation is the sharing and acceptance of digital identities, attributes, and credentials managed by other agencies. Prior to this step, it’s very possible many applications are individually configured to directly manage or accept a wide variety of credentials or authenticators, known as direct enablement. This model allows applications to support disparate user populations, but is both time consuming and resource intensive to maintain. 

Direct enablement and local credential management increase the risks associated with account de-provisioning and fail to meet Zero Trust requirements for centralized visibility. For instance, a user may have been separated from their role or organization, but accounts and credentials (e.g., local username/password) in individual applications may be unknowingly left active. 

Enterprise SSO limits the complexity and risks of direct credential enablement by leveraging the MUR. With SSO-based identity federation, authentication transactions are standardized regardless of the credentials or authenticators, and user management activities can be consolidated under the Enterprise SSO. 

Table 5 provides a comparison of some benefits and drawbacks of federation and direct enablement. 


<h3 class="site-preview-heading">Federation vs Direct Enablement Comparison</h3>
<div class="usa-accordion usa-accordion--bordered usa-accordion--multiselectable" data-allow-multiple>
    <h4 class="usa-accordion__heading">
        <button class="usa-accordion__button" aria-expanded="true" aria-controls="n-a1">Configuration Management</button>
    </h4>
    <div id="n-a1" class="usa-accordion__content usa-prose">
        <table class="usa-table usa-table--borderless">
            <thead>
                <tr>
                    <th scope="col">SSO with Federation Benefits</th>
                    <th scope="col">Direct Enablement Drawbacks</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <ul>
                            <li>Only the SSO service needs to be updated to accept new credentials or authenticators.</li>
                            <li>Maintenance changes (e.g., trust store management or revocation checking) can be consolidated at the Enterprise SSO level to ensure agency-wide compliance.</li>
                            <li>Standardized protocols (SAML/OIDC) allow for rapid onboarding of new FedRAMP cloud services</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>Applications need to be individually updated to accept new credentials or authenticators.</li>
                            <li>Each application must make needed technical configuration changes to maintain interoperability.</li>
                            <li>Each application needs to plan for and implement a unique, siloed technical configuration pathway, leading to higher maintenance costs and resource exhaustion. </li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

  <h4 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="n-a2">Security and Accreditation</button>
  </h4>
  <div id="n-a2" class="usa-accordion__content usa-prose">
        <table class="usa-table usa-table--borderless">
              <thead>
                <tr>
                    <th scope="col">SSO with Federation Benefits</th>
                    <th scope="col">Direct Enablement Drawbacks</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <ul>
                            <li>An SSO’s Identification and Authentication security controls can be inherited by integrated applications.</li>
                            <li>User de-provisioning can be centralized and automated.</li>
                            <li>Authentication auditing and logging events can be centralized and more efficiently integrated with security tools.</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>Significant effort needed to assess each application’s Identification and Authentication security controls.</li>
                            <li>Unauthorized access is a risk if individual applications are not aware of user separations.</li>
                            <li>Audit and log data is more difficult to collect, normalize, and correlate.</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

  <h4 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="n-a3">Help Desk Support</button>
  </h4>
  <div id="n-a3" class="usa-accordion__content usa-prose">
        <table class="usa-table usa-table--borderless">
            <tbody>
            <thead>
                <tr>
                    <th scope="col">SSO with Federation Benefits</th>
                    <th scope="col">Direct Enablement Drawbacks</th>
                </tr>
            </thead>
                <tr>
                    <td>
                        <ul>
                            <li>An Enterprise SSO help desk consolidates logon tickets and processes (e.g., password resets, user configurations, etc.).</li>
                            <li>Automated provisioning and consistent user experience may reduce help desk tickets.</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>Individual application help desks need to be operated and maintained to include support for authentication issues.</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

Figure 5 highlights the potentially redundant effort for each application to accept users and/or credentials from different groups using the direct enablement method, which often results in fragmented security policies and manual overhead. Figure 6 depicts the reduced complexity of an identity federation, where the Enterprise SSO service acts as a centralized gateway governed by the MUR to streamline access across the agency. 

<img src="{{site.baseurl}}/assets/playbooks/sso-direct-enablement.png" alt="Direct enablement requires overlapping configuration." width="560" height="463">

<p align="center"><b>Figure 5: Direct Enablement with Overlapping Configuration Efforts</b></p>

<img src="{{site.baseurl}}/assets/playbooks/sso-federation.png" alt="Federation allows for centralized configuration." width="560" height="254">

<p align="center"><b>Figure 6: Identity Federation, Streamlined Configuration</b></p>

After step 4, an agency may consider federating their SSO service and applications with other agencies. This comes in two patterns:

1. Allow access to agency applications from other federal agency SSO services.
2. Federate your agency’s SSO service with other federal agency applications.

Inter-agency federations, access between and among U.S. federal executive agencies, assumes that agencies are building on or have completed steps 1 through 4, and have aligned their local identity governance with the MUR. 

Inter-agency federation provides agencies with a common trust and technology infrastructure that accepts existing agency enterprise identities compliant with 800-63-4. It also minimizes the redundant collection of identity data and issuance of duplicate user identities.
The justification for granting access to another agency‘s users is based primarily on the agency‘s mission, business functions, and services:

- Have a government-wide user community -- including information sharing and knowledge repositories, human resources, training, financial, and personnel security services. 
- Provide as shared or managed services -- supporting agencies as IT service Subscribers leveraging centralized ICAM governance. 
- Support specific mission and business functions -- with users from two or more agencies collaborating together within a Zero Trust Framework.

{% include alert-warning.html heading="Federal Workforce Identities" content="The scope of this playbook is federal enterprise user access to federal enterprise applications. A federal enterprise identity is the unique representation of an employee, contractor, or enterprise user—such as a mission or business partner—that a federal agency manages to achieve its mission and business goals. An agency may have other user communities that include state, or local government users, mission partners, or citizens which are categorized as public identities. 

Planning for workforce identities requires agencies to centralize application access for staff and contractors, ensuring all managed accounts align with the Federal Zero Trust Strategy and leverage the MUR for consistent visibility." %} 

### 5.1 Planning Considerations
From an enterprise SSO perspective, integrating with another agency’s application or enterprise SSO service is very similar to application onboarding. It follows a similar pattern in that it’s either a service or application initiated login attempt using an assertion protocol. Additional planning considerations include: 

- Resolve user identities and other attributes required by the application using the MUR to ensure  consistency across the agency. 
- Store and share interface control or other agreements between agencies including protocol and attributes at a federation assurance level identified through a DIRA or in a DIAS.

Each application integration should follow a similar configure, test, and release pattern:

- Redirect link to agency identity provider or a “log in with my agency enterprise SSO” button on the application login page.
- Test the new implementation.
- Plan for changes to the system over time.
- Schedule a phased capability rollout to user communities, if applicable.
- Iterate on your system and processes regularly.

Other security specific security considerations should be planned for by the application in the event FAL3 is needed.  Specifically, applications will need to have a capability to verify the Holder-of-Key (HoK), which is an independent function from simply consuming a federation assertion.  In these FAL3 scenarios, the SSO still passes information regarding the authenticator to the application, but the application then needs additional mechanisms to ensure the authenticator is being used by the intended subject.  In many cases, these HoK verification processes require the application to encrypt a challenge with the user's public key from the assertion to meet the highest Federal Zero Trust security standards.

### 5.2 Agreements/Building Trust between Federal Executive Agencies
Technical trust is established between agencies participating in an identity federation through the use of agreed-upon assertion protocols and recorded in interface control documents. However, a business and mission-level agreement is frequently required to document inter-agency agreements in the form of an agency CIO-signed federation agreement, which defines the shared governance of the MUR data. 

Agency mission areas may submit documentation of their assurance level and attribute requirements with the federation agreement from the enterprise. These may be captured in existing agency questionnaires as a “customer journey map” or preferably using the DIRA process which includes standardized processes and procedures to identify an identity, authenticator, and federal levels mapped to [SP 800-63-4].

This document may be incorporated as an annex or appendix to the Authority to Operate (ATO) for each of the participating IT applications and identity providers to ensure continuous monitoring and compliance with Federal Zero Trust Architecture.

## Appendix A. Troubleshooting Single Sign-On
Software issues or changes in the environment can cause a working configuration to stop working. When this occurs, SSO administrators can use the following steps to identify the cause and restore access while maintaining alignment with federal logging and security audit requirements.

Administrators should first verify that the user identity remains valid within the MUR and that no recent security patches have altered the trusted connection between the SSO Service and the application. 

### 1. Check SSO and application logs
Authentication errors usually create a log entry in the SSO or the application. This error could help identify a root cause, but oftentimes errors may not be specific or clear. Since SSO often involves authentication to external applications, this may require some coordination with other agencies and service providers.

### 2. Check network routing
Sometimes it’s the simple things. If users are reporting that they can’t access an application, make sure that there isn’t a network outage or a firewall issue preventing communication between the application, the SSO service, and the MUR. 

Administrators should verify that network paths remain open across security zones and that Trusted Internet Connection (TIC) policies are not accidentally blocking federated authentication traffic ensuring proper routing is critical for maintaining the continuous access required by Federal Zero Trust standards.

### 3. Test a known good app
When a user reports that they are unable to access an application, they may blame the SSO infrastructure when the problem actually lies in the end application. SSO administrators should try an app that is known to work in order to distinguish app issues from SSO infrastructure issues. Ideally, the administrator team should have a sample application which will allow them, and the user to validate their status in the MUR and SSO authentication success. 

By testing a known good application, administrators can confirm that the core ICAM infrastructure and PIV/CAC handshakes are functional, allowing the team to isolate the issue to the specific application’s service provider configuration or permissions.

### 4. Check Certificates
For signed assertions, an expired SSO signing certificate can cause the assertions to not be trusted. If access is failing for an application or a set of applications, confirm that the certificate is not expired. This may be recorded as an error by the end applications.

Administrators should regularly monitor the validity of SSO signing certificates and ensure they are sourced from a trusted federal entity or agency-approved certificate authority given that the MUR relies on secure assertions to provide identity data to applications, any certificate lapse will disrupt the entire ICAM trust chain and require immediate remediation to restore compliance with Zero Trust Security standards.

### 5. Check application configuration
Changes in the configuration of the application assertion receiving and processing are a frequent error cause. This may be due to an application upgrade, or to an inadvertent change by an application administrator. This configuration error should show up in the application logs, but the errors may not be very clear. 

Administrators should verify that the application is still properly mapped to the authoritative attributes in the MUR. Any discrepancy in attribute naming or encryption requirements will cause the handshake to fail. To minimize outages, agencies should implement strict configuration  management policies to ensure that application updates do not disrupt the established ICAM trust boundary or Zero Trust controls.

### 6. Collect assertion data and use assertion analysis tools
Finally, if there are no other apparent issues, it may be necessary to inspect the assertion for encoding or other errors. While these errors are not common, they do occur and can result in very subtle errors that are difficult to troubleshoot.
