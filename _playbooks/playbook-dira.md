---
layout: page
collection: playbooks
title: Digital Identity Risk Assessment Playbook
pubdate: 2020-09
date: September 13, 2021
type: Markdown
permalink: /playbooks/dira/
description: The Digital Identity Risk Assessment playbook is a six-step playbook for completing a digital identity risk assessment as described in OMB Memo 19-17 and NIST Special Publication 800-63-3.
pdf: "docs/playbook-dira.pdf"
sidenav: playbooks
sticky_sidenav: true

version: 1.2
pubdate: December 29, 2022

subnav:
  # - text: Step 1. Identify Users, Transactions, and Roles
  #   href: '#step-1-identify-users-transactions-and-roles'
  # - text: Step 2. Identify Risks
  #   href: '#step-2-identify-risks-and-assurance-levels'
  # - text: Step 3. Determine Steps
  #   href: '#step-3-determine-steps-to-meet-assurance-levels'
  # - text: Step 4. Finalize DIAS
  #   href: '#step-4-finalize-digital-identity-acceptance-statement'
  # - text: Step 5. Reassess
  #   href: '#step-5-reassess'
  # - text: Play 1. Streamline RMF
  #   href: '#play-1-streamline-risk-management-and-assessment-processes'
  # - text: Play 2. Add Context
  #   href: '#play-2-add-context-for-the-mission'
  # - text: Play 3. Use Templates
  #   href: '#play-3-use-templates'
  # - text: Play 4. Shortcut Trees
  #   href: '#play-4-shortcut-decision-trees'
  # - text: Play 5. Leverage Tools
  #   href: '#play-5-leverage-existing-agency-tools'
  # - text: Play 6. Less Is More
  #   href: '#play-6-less-is-more'
  # - text: References
  #   href: "#appendix-a-policy-standards-and-guidance"
  
---

<!-- Version 1.2  
December 29, 2022 -->

<img src="{{site.baseurl}}/assets/logo/logo-gsa.png" width="64" height='64' align="left" alt="U.S. General Services Administration Logo">
<img src="{{site.baseurl}}/assets/logo/logo-cio-round.png" width="64" height='64' align="left" alt="U.S. Federal Chief Information Officer Council Logo"><br><br><br>

<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="v-a1">
      Date: {{page.pubdate}} - Version: {{page.version}}
    </button>
  </h4>
  <div id="v-a1" class="usa-accordion__content usa-prose">
    <table>
      <caption>Digital Identity Risk Assessment version table</caption>
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
        <td>Fixed heading typo, updated Appendix A. links</td>
      </tr>
      <tr>
        <th scope='row'>
          1.1
        </th>
        <td>11/17/21</td>
        <td>Inserted Key Point box at the end of Step 2.</td>
      </tr>
      <tr>
        <th scope='row'>
          1.0
        </th>
        <td>09/13/20</td>
        <td>Initial Draft</td>
      </tr>
    </table>
  </div>
</div>

## Acknowledgments

This playbook reflects the contributions of the Digital Identity Risk Assessment working group of the Identity, Credential, and Access Management Subcommittee (ICAMSC). The working group was co-chaired by members from the Internal Revenue Service (IRS) and the Environmental Protection Agency (EPA). Contributions were made by the members of services or agencies representing the Center of Medicare and Medicaid Services (CMS), Department of Defense (DOD), Department of Health and Human Services (HHS), Department of Homeland Security (DHS), Department of Justice (DOJ), Department of the Treasury (USDT), Department of Transportation (DOT), and General Services Administration (GSA).

## Introduction

A digital identity represents each individual engaged in an online transaction. However, in some cases an individual could have multiple digital identities and the real-life identity may not be known when used to access a digital service.[1]({{site.baseurl}}/playbooks/dira/#fn:1) When confidence in an individual’s real-life identity is required to provide trust between the individual and the service being accessed, the identity proofing process establishes that the individual is who they claim to be and binds that identity to the authenticator used to access the service. The digital authentication process provides reasonable risk-based assurances that the authenticator being used is in the control of the individual who is authorized to access the service. This playbook presents  guidance in applying the National Institute of Standards and Technology (NIST) Special Publication 800-63-4 Digital Identity Guidelines series to perform a Digital Identity Risk Assessment (DIRA).

## Purpose

Most federal agencies offer services through an IT system or application, such as a website, to their employees, other agencies, and the public. To access an application, users may need to provide identity information, create an account, and log in. These actions are part of the digital identity and authentication process.

DIRAs determine the assurance levels for the digital transactions that involve digital identity or require human authentication.[2]({{site.baseurl}}/playbooks/dira/#fn:2) When agencies build or buy applications that use the most current identity proofing and authentication standards, they protect both the digital transactions, and the user and agency data behind the applications.

This Digital Identity Risk Assessment playbook helps federal agency Chief Information Officer (CIO) and Chief Information Security Officer (CISO) teams and business application owners to:

- Update and maintain consistent processes;  
- Determine whether an agency application requires a DIRA;  
- Integrate DIRA into agency Risk Management Framework (RMF) processes; and  
- Learn practices to implement DIRA processes.

NIST publishes implementation guides[3]({{site.baseurl}}/playbooks/dira/#fn:3) and frequently asked questions (FAQs)[4](https://www.idmanagement.gov/playbooks/dira/#fn:4) for agencies and service providers to use to create information technology solutions to meet these standards. This playbook promotes consistency, effectiveness, and efficiency in your agency’s processes.

## How to Use This Playbook

This playbook is divided into three major sections. Read the entire playbook or jump directly to the section that will help your agency.

- [High-Level DIRA Process]({{site.baseurl}}/playbooks/dira/#high-level-dira-process) - A step-by-step guide on how to approach a DIRA process for each agency.  
- [Agency Process Plays]({{site.baseurl}}/playbooks/dira/#agency-process-plays) - Six plays to create efficient and consistent processes. For example, [Play \#4]({{site.baseurl}}/playbooks/dira/#play-4-shortcut-decision-trees) includes a shortcut decision tree for a streamlined DIRA for some applications.  
- [Appendices]({{site.baseurl}}/playbooks/dira/#appendix-a-policy-standards-and-guidance) - Example diagrams and templates, and references to policies and standards to use in your agency for communications.

## Scope

The DIRA playbook applies to all federal Information Technology (IT) systems and applications that need identity proofing and authentication.[5]({{site.baseurl}}/playbooks/dira/#fn:5) This playbook complements the following standards and policy:

- [NIST Special Publication 800-63-4: Digital Identity Guidelines](https://pages.nist.gov/800-63-3)  
- [Office of Management and Budget Memorandum (OMB) M-19-17: Enabling Mission Delivery through Improved Identity, Credential, and Access Management](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf)

All agency information technology systems should use the DIRA process as part of the Risk Management Framework (RMF) and Federal Information Security Modernization Act (FISMA) processes. Business owners and information security officers produce a Digital Identity Assessment Statement (DIAS) to document the assurance levels determined by collecting and analyzing the system or application data as part of the assessment process.

This playbook does not apply to:

- Non-person entities,[6]({{site.baseurl}}/playbooks/dira/#fn:6) such as devices, Robotic Process Automation (RPA), or Machine Learning;  
- Facilities access;  
- Federation Assurance Level 3 solutions;[7]({{site.baseurl}}/playbooks/dira/#fn:7) or  
- National security systems (NSS).[8]({{site.baseurl}}/playbooks/dira/#fn:8)

The following sections describe a basic DIRA process and provide plays to help you implement efficiency into your agency’s processes.

## High-Level DIRA Process

The DIRA process begins when a new online service that requires trust in the identity of the person or trust in the authenticator is identified or a time-driven or event-driven reassessment is triggered. The information identified in step 1 helps to determine the level of trust required. Once it is determined that a DIRA is needed, application data is identified, collected, and analyzed to determine the assurance levels and produce a Digital Identity Assessment Statement ([DIAS]({{site.baseurl}}/docs/playbook-dira-dias-template.docx)), as shown in Figure 1. Using the DIAS template can help guide agencies through the DIRA process

The high-level DIRA process includes five steps:

1. [Identify Users, Transactions, and Roles]({{site.baseurl}}/playbooks/dira/#step-1-identify-users-transactions-and-roles)  
2. [Identify Risks and Initial Assurance Levels]({{site.baseurl}}/playbooks/dira/#step-2-identify-risks-and-assurance-levels)  
3. [Determine Steps to Meet Assurance Levels]({{site.baseurl}}/playbooks/dira/#step-3-determine-steps-to-meet-assurance-levels)  
4. [Finalize Digital Identity Assessment Statement]({{site.baseurl}}/playbooks/dira/#step-4-finalize-digital-identity-acceptance-statement)  
5. [Reassess]({{site.baseurl}}/playbooks/dira/#step-5-reassess)


## Step 1. Identify Users, Transactions, and Roles 

The first step is to identify the functional scope and description of the online service, the user groups to be served, the types of online transactions that will be available, and the underlying data that the service will process through its interfaces. There are many ways to categorize users within the federal government, such as:

- User Types - Organizational and Non-Organizational users  
- Communities of Users - Employee, Partner, and Public users  
- Common Roles - General, Functional Privileged, and IT Privileged users

These definitions simplify complex requirements for individuals’ privacy, information security, identity, and access management.

### Key Point

Identifying categories of users helps define the requirements for more than the Digital Identity Risk Assessments. For example, requirements for privacy, records retention, and monitoring are based on user types and categories.

First, identify the user types and communities of users impacted by the application . Identifying an application’s community of users is important to the DIRA processes, as communities have different privacy, regulatory, and solution requirements to consider in risk assessments. Table 1 identifies user types and five common examples of communities of users. 

<table class="usa-table">
  <caption>
    Table 1: Examples of User Types and Communities
  </caption>
  <thead>
    <tr>
      <th scope="col">User Type</th>
      <th scope="col">Description</th>
      <th scope="col">Examples of Community of Users</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Organizational</th>
      <td>An employee or individual that the organization deems to have equivalent status of an employee</td>
      <td>
        <p>Internal agency enterprise users, including employees and direct support contractors</p><p>Other federal government agency users</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Non-organizational</th>
      <td>All users other than organizational users (i.e., the general public or guests)</td>
      <td>
        <p>U.S. state, local, and tribal agency users</p>
        <p>Non-profit, business, or commercial users</p>
        <p>Public or other users</p>
      </td>
    </tr>
  </tbody>
</table>

A digital transaction is

<h3>“</h3>... a discrete digital event between a user and a system that supports a business or programmatic purpose. <h3>”</h3>

{% include alert-info.html heading="Key Point" content="A government digital system may have multiple categories or types of transactions, which may require separate analysis within the overall digital identity risk assessment. Application owners and the information security team collaborate to identify, analyze, and assess the application’s digital transactions. Examples of transactions and transaction types are phrased as actions on data: Create, Read, Modify, Delete." %}

Finally, map the community of users to the common roles. Most applications have several different user roles, each with different access privileges and permissions. Examples of common user roles include:

- General users  
  - Can access: Information resources provided by the application  
  - Examples: Employees, the general public  
- Functional privileged users  
  - Can access: Information resources provided by the application, and approval workflows  
  - Examples: Managers  
- Information Technology (IT) privileged users  
  - Can access: IT systems with read, write, or change access  
  - Examples: System administrators, security analysts

Table 2 provides examples of user types, transactions, and roles.

<table class="usa-table">
  <caption>
    Table 2: Examples of User Types and Transactions
  </caption>
  <thead>
    <tr>
      <th scope="col">User Type</th>
      <th scope="col">Community of Users</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Organizational</th>
      <td>Other federal government agency user</td>
      <td>Agency employee or contractor (User Type) accesses and uploads a document to the cross-agency collaboration platform (Transaction)</td>
    </tr>
    <tr>
      <th scope="row">Organizational</th>
      <td>Internal agency enterprise user</td>
      <td>Agency employee administrator (Role) adds user to an agency’s collaboration platform (Transaction)</td>
    </tr>
    <tr>
      <th scope="row">Organizational</th>
      <td>Internal agency enterprise user</td>
      <td>Agency employee or contractor (User Type) exports data for use outside of the system (Transaction)</td>
    </tr>
    <tr>
      <th scope="row">Organizational</th>
      <td>Internal agency enterprise user</td>
      <td>Agency employee supervisor (Role) approves a pending payment (Transaction)</td>
    </tr>
    <tr>
      <th scope="row">Organizational</th>
      <td>Internal agency enterprise user</td>
      <td>Agency employee supervisor (Role) processes a payment (Transaction)</td>
    </tr>
    <tr>
      <th scope="row">Non-organizational</th>
      <td>Public user</td>
      <td>Public user (User Type) searches for national park information and resources (Transaction)</td>
    </tr>
    <tr>
      <th scope="row">Non-organizational</th>
      <td>Public user</td>
      <td>Public user (User Type) applies for federal government employment (Transaction)</td>
    </tr>
    <tr>
      <th scope="row">Non-organizational</th>
      <td>Public user</td>
      <td>Public user (User Type) retrieves tax information (personally identifiable information [PII]) (Transaction)</td>
    </tr>
  </tbody>
</table>

## Step 2. Identify Risks and Assurance Levels 

Determine the digital identity risk for each assurance category by assessing the impacts for each community of user, user type, common role, and transactions identified in Step 1.

- Identity Assurance Levels (IALs) indicate robustness of the identity proofing process to determine the identity of an individual and the level of confidence in that claimed identity.  
- Authentication Assurance Levels (AALs) indicate the    robustness of the authentication process and the binding between an authenticator and a specific individual’s identifier. .  
- Federation Assurance Levels (FALs) indicate robustness of the federation process used to communicate authentication and attribute information and the level of confidence in an assertion used to communicate identity or authentication information across applications or agencies.

The risks and impact assessment considers the risks to both the agency and the user for the transactions. The risk to one can be significant while not negatively impacting the other. It’s common for government applications to have different assurance levels based on differing impacts and risks for each community of users and transactions.

Table 3 lists the five impact categories to use. This table is a guideline for categorizing the risks and impacts to your application’s users and transactions.

<table class="usa-table">
  <caption>
    Table 3: Impact Definitions
  </caption>
  <thead>
    <tr>
      <th scope="col">Impact Category</th>
      <th scope="col">Low</th>
      <th scope="col">Moderate</th>
      <th scope="col">High</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Degradation of mission delivery</th>
      <td>Expected to result in limited mission capability degradation such that the organization is still able to perform its primary functions but with some reduced effectiveness. </td>
      <td>Expected to result in serious mission capability degradation such that the organization is still able to perform its primary functions but with significantly reduced effectiveness. </td>
      <td>Expected to result in severe or catastrophic mission capability degradation or loss over a duration such that the organization is unable to perform one or more of its primary functions. </td>
    </tr>
    <tr>
      <th scope="row">Damage to trust, standing, or reputation </th>
      <td>Expected to result in limited, short-term inconvenience, distress, or embarrassment to any party. </td>
      <td>Expected to result in serious short-term or limited long-term inconvenience, distress, or damage to the standing or reputation of any party.</td>
      <td>Expected to result in severe or serious long-term inconvenience, distress, or damage to the standing or reputation of any party or many individuals. </td>
    </tr>
    <tr>
      <th scope="row">Unauthorized access to information</th>
      <td>Expected to have a limited adverse effect on organizational operations, organizational assets, or individuals as defined in FIPS 199.</td>
      <td>Expected to have a serious adverse effect on organizational operations, organizational assets, or individuals as defined in FIPS 199.</td>
      <td>Expected to have a severe or catastrophic adverse effect on organizational operations, organizational assets, or individuals as defined in FIPS 199.</td>
    </tr>
    <tr>
      <th scope="row">Financial loss or financial liability</th>
      <td>Expected to result in limited financial loss or liability to any party.</td>
      <td>Expected to result in a serious financial loss or liability to any party. </td>
      <td>Expected to result in severe or catastrophic financial loss or liability to any party.</td>
    </tr>
    <tr>
      <th scope="row">Loss of life or danger to human safety, human health, or environmental health </th>
      <td>Expected to result in a limited impact on human safety or health that resolves on its own or with a minor amount of medical attention or a limited impact on environmental health that requires at most minor intervention to prevent further damage or reverse existing damage.</td>
      <td>Expected to result in a serious impact on human safety or health that requires significant medical attention, serious impact on environmental health that results in a period of uninhabitability and requires significant intervention to prevent further damage or reverse existing damage, or the compounding impacts of multiple low-impact events.</td>
      <td>Expected to result in a severe or catastrophic impact on human safety or health such as severe injury, trauma, or death, a severe or catastrophic impact on environmental health that results in long-term or permanent uninhabitability and requires extensive intervention to prevent further damage or reverse existing damage, or the compounding impacts of multiple moderate impact events. </td>
    </tr>
  </tbody>
</table>

### Identity Assurance

Identity Assurance Levels (IALs) define the processes and solutions used to identity proof users attempting to sign up for a digital service or perform an application transaction. IALs mitigate impacts of providing a benefit or information to the wrong user.

* Identity Assurance is: “Are you who you say you are?”  
* Impacts are: “What are the risks to the government or to you if you aren’t?”

Defining the IALs for each community of users and transactions from Step 1 is one of the more challenging aspects of a DIRA. The initial IAL correlates to how much personal data[10]({{site.baseurl}}/playbooks/dira/#fn:10) is validated and verified for that user during the identity proofing process.[11]({{site.baseurl}}/playbooks/dira/#fn:11)

If the service doesn’t require the user to have a unique digital identity or prove who they are, then there is no IAL. Identity Assurance Level 1 (IAL1) provides basic confidence that the digital identity belongs to a real person and that person is who they say they are. Core attributes are collected from identity evidence or, if the identity evidence doesn’t provide all the necessary core attributes, they may be self-asserted by the user.   Identity evidence needs to be validated against authoritative or credible sources and the attributes need to be linked to the user.  .. At Identity Assurance Level 2 (IAL2) or 3 (IAL3), increasingly more personal information about the user needs to be validated and verified. NIST SP 800-63A-4, Section 4 specifies the requirements for each identity assurance level. 


Key Point
The risks and impacts of excessive information collection for identity proofing needs to be strongly considered for each community of users and the transactions.

For public users and other non-organizational users, privacy benefits and privacy principles are key factors to consider.

Application owners and agency processes need to include the Senior Agency Official for Privacy to define the risks, impact levels, and the Identity Assurance Levels .


{% include alert-info.html heading="Key Point" content="<p>The risks and impacts of excessive information collection for identity proofing needs to be strongly considered for each community of users and the transactions.</p><p>For public users and other non-organizational users, privacy benefits and privacy principles are key factors to consider.</p>
<p>Application owners and agency processes need to include the Senior Agency Official for Privacy to define the risks, impact levels, and the Identity Assurance Levels .</p>" %}

Table 4 summarizes the control objectives and gives user profiles for each of the identity assurance levels:

<table class="usa-table">
  <caption>
    Bordered table
  </caption>
  <thead>
    <tr>
      <th scope="col">IAL</th>
      <th scope="col">Control Objectives</th>
      <th scope="col">User Profile</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">IAL1</th>
      <td>Limit highly scalable attacks. Protect against synthetic identity. Protect against attacks that use compromised personal information.</td>
      <td>Access to personal information is required but limited. User actions are limited (e.g., viewing and making modifications to individual personal information). Fraud cannot be directly perpetrated through available user functions. Users cannot receive payments until an offline or manual process is conducted.</td>
    </tr>
    <tr>
      <th scope="row">IAL2</th>
      <td>Limit scaled and targeted attacks. Protect against basic evidence falsification and theft. Protect against basic social engineering.</td>
      <td>Users can view and change financial information (e.g., a direct deposit location). Individuals can directly perpetrate financial fraud through the available application functionality. A user can view or modify other users’ personal information. Users have visibility into or access to proprietary information.</td>
    </tr>
    <tr>
      <th scope="row">IAL3</th>
      <td>Limit sophisticated attacks. Protect against advanced evidence falsification, theft, and repudiation. Protect against advanced social engineering attacks.</td>
      <td>Users have direct access to multiple highly sensitive records; administrator access to servers, systems, or security data; the ability to access large sets of data that may reveal sensitive information about one or many users; or access that could result in a breach that would constitute a major incident under OMB guidance.</td>
    </tr>
  </tbody>
</table>

## Authentication Assurance

Authentication Assurance Levels indicate the strength of the authentication process and the binding between an authenticator and a specific individual’s identifier. AALs mitigate potential authentication errors (i.e., an attacker accessing a user’s account).

- Authentication Assurance is: “Is this the same user as before?”  
- Impacts are: “What are the risks to the government or to you if you are not the same user as before?”

Authentication Assurance Level 1 (AAL1), provides basic confidence that the user controls the authenticator and that it’s bound to the user’s digital Identity. AAL1 only requires single-factor authentication, but multi-factor authentication options should be available and encouraged. Successful authentication requires that the claimant prove possession and control of the authenticator. 

Authentication Assurance Level 2 (AAL2) provides high confidence that the user controls one or more authenticators that are bound to the user’s digital identity. AAL2 also requires at least two factors, such as a one-time password (OTP) managed by a mobile application on a personal or government mobile phone with an integrated biometric sensor that activates the phone.[14]({{site.baseurl}}/playbooks/dira/#fn:14) 

Authentication Assurance Level 3 (AAL3) provides very high confidence that the user controls the authenticators that are bound to the user’s digital identity. Authentication at AAL3 is based on proof of possession of a key through the use of a cryptographic protocol along with either an activation factor or a password. AAL3 requires the use of a hardware-based authenticator that provides phishing resistance.[15]({{site.baseurl}}/playbooks/dira/#fn:15)

{% include alert-info.html heading="Key Point" content="<p>Two-factor authentication is rapidly becoming the expected default for applications.</p><p>Recurring public and other non-organizational users may want to create an account. Agencies and application owners should always consider allowing and providing two-factor options.</p><p>For employees and other organizational government users, two-factor authentication is a government-wide policy requirement.</p>" %}

Table 5 summarizes the control objectives and gives user profiles for each of the authentication assurance levels:

<table class="usa-table">
  <caption>
    Bordered table
  </caption>
  <thead>
    <tr>
      <th scope="col">AAL</th>
      <th scope="col">Control Objectives</th>
      <th scope="col">User Profile</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AAL1</th>
      <td>Provide minimal protections against attacks. Deter password-focused attacks.</td>
      <td>No personal information is available to any users, but some profile or preference data may be retained to support usability and the customization of applications.</td>
    </tr>
    <tr>
      <th scope="row">AAL2</th>
      <td>Require multifactor authentication. Offer phishing-resistant options.</td>
      <td>Individual personal information can be viewed or modified by users. Limited proprietary information can be viewed by users.</td>
    </tr>
    <tr>
      <th scope="row">AAL3</th>
      <td>Require phishing resistance and verifier compromise protections.</td>
      <td>Highly sensitive information can be viewed or modified. Multiple proprietary records can be viewed or modified by users. Privileged user access could result in a breach that would constitute a major incident under OMB guidance.</td>
    </tr>
  </tbody>
</table>

## Federation Assurance

Federation Assurance Levels (FALs) indicate the assertion protocol used by an application to communicate identity and authenticator information. FALs protect information about the authenticated user. They mitigate risks if a malicious actor in the transaction changes or replays the information.

{% include alert-info.html heading="Key Point" content="<p>Federation is an advanced topic with many different acronyms and terms.</p><p>Use outcome-based examples and demonstrations with application owners and business teams to help identify the FALs.</p>" %}

This playbook explains FALs with the outcomes first before explaining the high-level requirements and the risk process.[17]({{site.baseurl}}/playbooks/dira/#fn:17) To determine if your application requires an FAL, consider the following questions:

For *existing* applications and defined users and transactions (Step 1):

- Is the application integrated with any type of *agency enterprise* single sign-on solution?  
- Is the application integrated with any government or commercial identity provider?  
- For organizational government users and transactions, is the application integrated with an employee’s network logon?

For *new* applications and defined users and transactions (Step 1):

- Do the same users access other agency applications and could the user experience for identity and authentication be streamlined?

If your agency and application owner answers “Yes” to any of these questions, then the application is federated, *or could be federated* during the solution definition step (Step 3), and needs an FAL defined for each user community and transaction.

{% include alert-info.html heading="Key Point" content="<p>Applications that don’t implement a federated capability document the rationale in the final Digital Identity Acceptance Statement.</p><p>FAL1 and FAL2 are good for most use cases across the federal government. Agencies and application owners should consider implementations based on the community of users and transactions.</p>" %}

FALs are implemented using standard-based protocols across the federal government. These protocols are commonly used in many applications and transactions globally and are routinely supported in commercial off-the-shelf (COTS), native cloud software-as-a-service, and consumer and enterprise mobile applications. Each FAL defines *minimum* requirements for how the integrations are performed and the requirements if the user’s information is passed between applications. For example, for some implementations, the federation assurance levels map to commonly used federation protocols such as OpenID Connect (OIDC) and Security Assertion Markup Language (SAML). How those implementations are done maps to the increasing FAL options.

FAL1 provides a basic level of protection for federation transactions and supports a wide range of use cases and deployment decisions. FAL2 provides a high level of protection for federation transactions and additional protection against a variety of attacks against federated systems, including attempts to inject assertions into a federated transaction. FAL3 provides a very high level of protection for federation transactions and establishes very high confidence that the information communicated in the federation transaction matches what was established by the credential service provider (CSP) and identity provider (IdP).

If the online service implements identity federation, an initial FAL is selected through a simple mapping process:

- Low impact: FAL1  
- Moderate impact: FAL2  
- High impact: FAL2 or FAL3

Table 6 summarizes the control objectives and gives user profiles for each of the federation assurance levels:

<table class="usa-table">
  <caption>
    Bordered table
  </caption>
  <thead>
    <tr>
      <th scope="col">FAL</th>
      <th scope="col">Control Objectives</th>
      <th scope="col">User Profile</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">FAL1</th>
      <td>Protect against forged assertions.</td>
      <td>No sensitive personal information is available to any users but some profile or preference data may be retained to support usability or the customization of applications.</td>
    </tr>
    <tr>
      <th scope="row">FAL2</th>
      <td>Protect against forged assertions and injection attacks.</td>
      <td>Users can access personal information and other sensitive data with appropriate authentication assurance levels (e.g., AAL2 or above).</td>
    </tr>
    <tr>
      <th scope="row">FAL3</th>
      <td>Protect against IdP compromise.</td>
      <td>Federation primarily supports attribute exchange. Users have access to classified or highly sensitive information or services that could result in a breach that would constitute a major incident under OMB guidance.</td>
    </tr>
  </tbody>
</table>

{% include alert-info.html heading="Key Point" content="<p>The DIRA provides a minimum level and does not change established credentialing processes. For example, if a DIRA arrives at AAL2, agency leadership may decide to allow an AAL2 credential but it should not downgrade or alter an AAL3 credentialing process to AAL2.</p>" %}

## Step 3. Determine Steps to Meet Assurance Levels

<!-- Stopping point 06/16/2025 -- Clayton Barnette -->






