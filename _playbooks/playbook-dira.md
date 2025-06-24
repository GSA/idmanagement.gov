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
  - text: Acknowledgments
    href: '#acknowledgments'
  - text: Introduction
    href: '#introduction'
  - text: Purpose
    href: '#purpose'
  - text: How to Use This Playbook
    href: '#how-to-use-this-playbook'
  - text: Scope
    href: '#scope'
  - text: High-Level DIRA Process
    href: '#high-level-dira-process'
  - text: Step 1. Identify Users, Transactions, and Roles
    href: '#step-1-identify-users-transactions-and-roles'
  - text: Step 2. Identify Risks and Assurance Levels
    href: '#step-2-identify-risks-and-assurance-levels'
  - text: Authentication Assurance
    href: '#authentication-assurance'
  - text: Federation Assurance
    href: '#federation-assurance'
  - text: Step 3. Determine Steps to Meet Assurance Levels
    href: '#step-3-determine-steps-to-meet-assurance-levels'
  - text: Step 4. Finalize Digital Identity Acceptance Statement
    href: '#step-4-finalize-digital-identity-acceptance-statement'
  - text: Step 5. Reassess
    href: '#step-5-reassess'
  - text: Agency Process Plays
    href: '#agency-process-plays'
  - text: Play 1. Streamline Risk Management and Assessment Processes
    href: '#play-1-streamline-risk-management-and-assessment-processes'
  - text: Play 2. Add Context for the Mission
    href: '#play-2-add-context-for-the-mission'
  - text: Play 3. Use Templates
    href: '#play-3-use-templates'
  - text: Play 4. Shortcut Decision Guides
    href: '#play-4-shortcut-decision-guides'
  - text: Play 5. Leverage Existing Agency Tools
    href: '#play-5-leverage-existing-agency-tools'
  - text: Play 6. Less Is More
    href: '#play-6-less-is-more'
  - text: Appendix A. Policy, Standards, and Guidance
    href: '#appendix-a-policy-standards-and-guidance'
  - text: Appendix B. Examples and Templates
    href: '#appendix-b-examples-and-templates'
  - text: 1. Process Flow Examples
    href: '#1-process-flow-examples'
  - text: 2. Digital Identity Acceptance Statement Example Template
    href: '#2-digital-identity-acceptance-statement-example-template'
  - text: Appendix C. NIST Special Publication 800-63-4, Requirements Traceability Matrix
    href: '#appendix-c-nist-special-publication-800-63-4-requirements-traceability-matrix'
  - text: Appendix D. Updates to NIST Special Publication 800-63
    href: '#appendix-d-updates-to-nist-special-publication-800-63'
  - text: Mix and Match xALs
    href: '#mix-and-match-xals'
  - text: Footnotes
    href: '#footnotes'

---


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
        <th scope='col'>Version Number</th>
        <th scope='col'>Date</th>
        <th scope='col'>Change Description</th>
      </tr>
      </thead>
      <tr>
        <th scope='row'> -- </th>
        <td> -- </td>
        <td> -- </td>
      </tr>
      <tr>
        <th scope='row'>1.2</th>
        <td>12/29/22</td>
        <td>Fixed heading typo, updated Appendix A. links</td>
      </tr>
      <tr>
        <th scope='row'>1.1</th>
        <td>11/17/21</td>
        <td>Inserted Key Point box at the end of Step 2.</td>
      </tr>
      <tr>
        <th scope='row'>1.0</th>
        <td>09/13/20</td>
        <td>Initial Draft</td>
      </tr>
    </table>
  </div>
</div>

## Acknowledgments

This playbook reflects the contributions of the Digital Identity Risk Assessment working group of the Identity, Credential, and Access Management Subcommittee (ICAMSC). The working group was co-chaired by members from the Internal Revenue Service (IRS) and the Environmental Protection Agency (EPA). Contributions were made by the members of services or agencies representing the Center of Medicare and Medicaid Services (CMS), Department of Defense (DOD), Department of Health and Human Services (HHS), Department of Homeland Security (DHS), Department of Justice (DOJ), Department of the Treasury (USDT), Department of Transportation (DOT), and General Services Administration (GSA).

## Introduction

A digital identity represents each individual engaged in an online transaction. However, in some cases an individual could have multiple digital identities and the real-life identity may not be known when used to access a digital service.[1](#fn:1) When confidence in an individual’s real-life identity is required to provide trust between the individual and the service being accessed, the identity proofing process establishes that the individual is who they claim to be and binds that identity to the authenticator used to access the service. The digital authentication process provides reasonable risk-based assurances that the authenticator being used is in the control of the individual who is authorized to access the service. This playbook presents  guidance in applying the National Institute of Standards and Technology (NIST) Special Publication 800-63-4 Digital Identity Guidelines series to perform a Digital Identity Risk Assessment (DIRA).

## Purpose

Most federal agencies offer services through an IT system or application, such as a website, to their employees, other agencies, and the public. To access an application, users may need to provide identity information, create an account, and log in. These actions are part of the digital identity and authentication process.

DIRAs determine the assurance levels for the digital transactions that involve digital identity or require human authentication.[2](#fn:2) When agencies build or buy applications that use the most current identity proofing and authentication standards, they protect both the digital transactions, and the user and agency data behind the applications.

This Digital Identity Risk Assessment playbook helps federal agency Chief Information Officer (CIO) and Chief Information Security Officer (CISO) teams and business application owners to:

- Update and maintain consistent processes;  
- Determine whether an agency application requires a DIRA;  
- Integrate DIRA into agency Risk Management Framework (RMF) processes; and  
- Learn practices to implement DIRA processes.

NIST publishes implementation guides[3]({{site.baseurl}}/playbooks/dira/#fn:3) and frequently asked questions (FAQs)[4]({{site.baseurl}}/playbooks/dira/#fn:4) for agencies and service providers to use to create information technology solutions to meet these standards. This playbook promotes consistency, effectiveness, and efficiency in your agency’s processes.

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

![Figure 1: Example DIRA Process]({{site.baseurl}}/assets/playbooks/dira/figure1.jpg)

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

{% include alert-info.html heading="Key Point" content="Identifying categories of users helps define the requirements for more than the Digital Identity Risk Assessments. For example, requirements for privacy, records retention, and monitoring are based on user types and categories." %}

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

### “... a discrete digital event between a user and a system that supports a business or programmatic purpose.”

<br>

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
    Table 4: IAL Control Objectives
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
    Table 5: AAL Control Objectives
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
    Table 6: FAL Control Objectives
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

Analyze available technology and solutions at your agency, determine if they are sufficient enough to meet the application needs, and identify what you need to implement. Use data and agency enterprise defined needs when choosing solutions, including:

- Number of users by community of users;  
- User experience (UX) and usability (for non-organizational users (i.e., public, business, partner)); and  
- Direct and indirect benefits to reuse enterprise-level chosen solutions, including consolidated support desks.

Your agency may need to tailor the initial assurance levels and baseline controls  from the NIST-recommended guidance for the assessed assurance levels based on:[20]({{site.baseurl}}/playbooks/dira/#fn:20)

- Your mission,  
- Your risk tolerance,  
- Your existing business processes,  
- Special considerations for certain populations,  
- The availability of data that provides similar mitigations to those described in the Digital Identity Guidelines, or  
- Other capabilities unique to the agency.

All determinations  should be documented and justified.

## Step 4. Finalize Digital Identity Acceptance Statement

Formalize the results of the assessment process with a Digital Identity Acceptance Statement (DIAS). A DIAS must include a minimum set of information about the risk assessment and the assessed and implemented assurance levels.[21]({{site.baseurl}}/playbooks/dira/#fn:21)

An example of a [DIAS]({{site.baseurl}}/docs/playbook-dira-dias-template.docx) is included in [Appendix B. Examples and Templates]({{site.baseurl}}/playbooks/dira/#appendix-b-examples-and-templates).

## Step 5. Reassess

A digital identity reassessment may be time-driven or event-driven and applies to a reassessment of the DIRA. This step allows you to reevaluate and assess areas to 

{% include alert-info.html heading="Key Point" content="<p>Reassess digital identity risk annually or more often for higher impact categories and transactions. A time-based assessment drives alignment with modernization initiatives, changes to technology, and changes to policies.</p>" %}

If an event triggers a security impact analysis, an agency may perform a DIRA outside the normal continuous monitoring cycle. Significant changes requiring a digital identity reassessment include changes in:

- Core mission or business functions;  
- Purpose or nature of a system;  
- Risk environment;  
- How information, including PII, is processed; or  
- How information is processed, stored, or transmitted by the system.

## Agency Process Plays

This section introduces six plays for your agency to create efficient and consistent processes for a DIRA.

## Play 1. Streamline Risk Management and Assessment Processes

The Risk Management Framework (RMF) forms the basis of your agency application Assessment and Authorization (A\&A) lifecycle. A DIRA process integrates into the routine phases of the RMF to streamline processes and enables efficient reuse of application and agency resources. Figure 5 shows an alignment of this playbook’s example DIRA process steps with the RMF.

![Figure 5: Example DIRA Process Steps in Risk Management Framework Phase]({{site.baseurl}}/assets/playbooks/dira/figure5.jpg)

Figure 5: Example DIRA Process Steps in Risk Management Framework Phase

Step 1 of the example DIRA process happens in the Categorize phase. When categorizing a system,[22]({{site.baseurl}}/playbooks/dira/#fn:22) application owners and security officers identify overall system data types and assign impact levels for each of the confidentiality, integrity, and availability security objectives.

A Privacy Threshold Analysis (PTA) is typically included in this phase. The identification of the DIRA IALs, AALs, and FALs directly correlates to the collection of PII; who has access to what information; whether information is self-asserted or verified; and the risks of excessive identity proofing.


{% include alert-info.html heading="Key Point" content="<p>Align Step 1 in a DIRA process with the Categorize System phase of the Risk Management Framework.</p>" %}

Meanwhile, Step 4 of the example DIRA process aligns with the Assessment phase. The Digital Identity Acceptance Statement must include the IALs, AALs, and FALs where the application was assessed and the implementations made.

## Play 2. Add Context for the Mission

Context is powerful when assessing risks, making agency risk decisions, and engaging across multi-disciplinary agency stakeholders. Standard and general government-wide policies set the foundation for many agency activities but are written for broad mission areas. Translate user types, transactions, DIRA impact levels, and risk statements into words that are applicable and useful to your agency.

{% include alert-info.html heading="Key Point" content="<p>Tailor context to your mission to support enterprise risk management discussions.</p>" %}

Table 4 provides examples of how agencies add agency-specific terms or context for user types, transactions, and impact levels.

<table class="usa-table">
  <caption>
    Table 4: Example Definitions and Agency Context
  </caption>
  <thead>
    <tr>
      <th scope="col">Assessment Input</th>
      <th scope="col">Generic Definition</th>
      <th scope="col">Definition with Agency Context</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">User Type</th>
      <td>Organizational User</td>
      <td>Employee or agency contractor with a federal agency email address (@agency.gov or @agency.mil)</td>
    </tr>
    <tr>
      <th scope="row">User Type</th>
      <td>Non-Organizational User</td>
      <td>Fiscal agent, grant beneficiary, veteran, healthcare worker, or public citizen</td>
    </tr>
    <tr>
      <th scope="row">Transaction</th>
      <td>Export</td>
      <td>Employee or agency contractors export data for use outside of the application</td>
    </tr>
    <tr>
      <th scope="row">Impact Level</th>
      <td>Loss of life or danger to human safety, human health, or environmental health</td>
      <td>Impact depends on whether the application provides access to law enforcement information that identifies a confidential person (i.e., improperly disclosing a confidential person’s identity puts them in physical danger)</td>
    </tr>
    <tr>
      <th scope="row">Impact Level</th>
      <td>Degradation of mission delivery</td>
      <td>Impact depends on the application’s function and its importance to agency operations</td>
    </tr>
  </tbody>
</table>


<table class="usa-table">
  <caption>
    Table 5: Example Transactions and Impact Levels
  </caption>
  <thead>
    <tr>
      <th scope="col">Impact Category</th>
      <th scope="col">Scope of Potential Risk</th>
      <th scope="col">Agency Context: As a result of a wrong user accessing data in an application,</th>
      <th scope="col">User Type</th>
      <th scope="col">Transaction Type</th>
      <th scope="col">Agency Impact Definition</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Loss of life or danger to human safety, human health, or environmental health</th>
      <td>Serious injury or death</td>
      <td>Physical injury or death could occur</td>
      <td>Organizational User</td>
      <td>Employee or agency-contractor exports data for use outside of the system</td>
      <td>Impact depends on whether the application provides access to law enforcement information that identifies a confidential informant (i.e., improperly disclosing a confidential criminal informant’s identity puts them in physical danger)</td>
    </tr>
    <tr>
      <th scope="row">Degradation of mission delivery </th>
      <td>Adverse effect on organizational operations</td>
      <td>The agency’s mission essential functions is adversely impacted</td>
      <td>Non-Organizational User</td>
      <td>Individual retrieves tax information (PII)</td>
      <td>Impact depends on the application’s function and its importance to agency operations</td>
    </tr>
  </tbody>
</table>

## Play 3. Use Templates

It’s a best practice that agencies develop standardized templates to promote consistency in procedures for digital identity risk assessments. Example templates can be as simple as:

- Visual informational guides for what a DIRA is,  
- Informational guides on risks,  
- Simple spreadsheets or digital surveys, and  
- Digital Identity Acceptance Statements.

[Appendix B. Examples and Templates]({{site.baseurl}}/playbooks/dira/#appendix-b-examples-and-templates) contains a few example templates provided by agencies.

## Play 4. Shortcut Decision Guides

All federal applications that perform digital transactions and require identity proofing or authentication require a Digital Identity Acceptance Statement, regardless of how the system is hosted. However, not all federal applications require the full example DIRA process and efforts.

Table 6 provides an example shortcut guide for determining whether to perform a full DIRA process based on application characteristics. IAL, AAL, and FAL levels in this table are examples. Applications must follow agency policies, which may be more stringent than the examples in this table.


<table class="usa-table">
  <caption>
    Table 6: DIRA Shortcut Guide
  </caption>
  <thead>
    <tr>
      <th scope="col">Application Characteristics</th>
      <th scope="col">DIRA Required?</th>
      <th scope="col">Minimum NIST SP 800-63 IAL, AAL, FAL Levels</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">The application has no external network connectivity, is physically isolated, and is located in a protected space.</th>
      <td>No</td>
      <td>N/A</td>
    </tr>
    <tr>
      <th scope="row">The application leverages the agency enterprise single sign on (SSO)/enterprise access manager for authentication of employees and contractors.</th>
      <td>Yes</td>
      <td>Requires proof of identity (IAL3).<a href="{{site.baseurl}}/playbooks/dira/#fn:23">23</a> Multi-factor authentication to agency application (AAL2) federation between agency applications (FAL2). Additionally, requires affiliation as a federal employee or contractor.</td>
    </tr>
    <tr>
      <th scope="row"><p>Data and other resources available are approved for public release, are intended to be freely shared, and public users aren’t required to create accounts to access this information.</p>
      <p>
      Examples include:
        <ul class="usa-list">  
          <li>Agency primary websites (i.e., www.gsa.gov)</li>  
          <li>Informational websites</li>
          <li>Open government APIs</li>
        </ul>
      </p>
      </th>
      <td>No</td>
      <td><p>Public users don't create accounts or login.</p>
      <p>Agency-affiliated privileged users with permissions to edit content still require higher IAL and a minimum AAL2 (two-factor).</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Data and other resources are intended for public release. Doesn't include any controlled unclassified information, but allows public users to create accounts to better support the public user’s experience.</th>
      <td>Yes</td>
      <td>Doesn't require proof of a real-life identity (No IAL). Single or multi-factor authentication (AAL1).</td>
    </tr>
    <tr>
      <th scope="row">Allows public users to input and access their own personally identifiable information (PII) or protected health information (PHI) for informational purposes. The information isn’t required to be verified. The application doesn’t allow public users to access anyone else’s PII or PHI.</th>
      <td>Yes</td>
      <td>Doesn't require proof of a real-life identity (No IAL). Multi-factor authentication (AAL2).</td>
    </tr>
  </tbody>
</table>

## Play 5. Leverage Existing Agency Tools

Leverage existing tools at your agency to automate and create repeatable and consistent DIRA processes. For example, one agency integrated the DIRA process into its Governance Risk and Compliance (GRC) tool. The agency was able to simplify integration with the Risk Management Framework (RMF) lifecycle and support the inclusion of the DIAS with other system artifacts. Agencies that use commercial GRC tools should consider integrating DIRAs into the workflows.

There are an increasing number of AI-driven tools entering the market that can help to facilitate the DIRA process. For example,  AI- powered Identity verification and fraud prevention tools can help reduce overall identity risks and streamline many different on-boarding processes.

## Play 6. Less Is More

A common assumption when building or buying applications for missions is that all users need accounts. Take the opportunity during the DIRA process to consider the application processes and functionality needed. Consider the mission, applications needs, and the two example questions below:

1. Do all users need accounts?  
2. How many users are regularly *recurring returning* users?

Reconsider the business process carefully and validate the current and future designs using data on the returning users, transaction volumes, and privacy principles.

- Design the business process for the user to submit information *without requiring* an account,  
- Limit the information required to create the account, and  
- Make most of the information requested optional.

{% include alert-info.html heading="Key Point" content="<p>Some public, business, or partner users may only interact with the government process and application once a year or less.</p><p>Revisit your process and application, and allow users to complete the transaction once before opting in to create an account.</p>" %}

## Appendix A. Policy, Standards, and Guidance

This section provides links to the federal laws, policies, standards and other guidance that impact and shape DIRA implementations. NIST also publishes useful [Frequently Asked Questions](https://pages.nist.gov/800-63-FAQ/){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} for agencies, and [Implementation Resources](https://www.nist.gov/system/files/documents/2020/07/02/SP-800-63-3-Implementation-Resources_07012020.pdf){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} for solution developers.


<table class="usa-table">
  <thead>
    <tr>
      <th scope="col">Short Name</th>
      <th scope="col">Full Name and Publication Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">NIST SP 800-63-4</th>
      <td>National Institute of Standards and Technology (NIST) Special Publication (SP) 800-63-4; <a class="usa-link usa-link--external" href="https://pages.nist.gov/800-63-3/" rel="noopener noreferrer" target="_blank">Digital Identity Guidelines</a>, June 22, 2017</td>
    </tr>
    <tr>
      <th scope="row">NIST SP 800-63A-4</th>
      <td>National Institute of Standards and Technology (NIST) Special Publication (SP) 800-63A-4; <a class="usa-link usa-link--external" href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63a.pdf" rel="noopener noreferrer" target="_blank">Digital Identity Guidelines: Enrollment and Identity Proofing</a>, June 22, 2017</td>
    </tr>
    <tr>
      <th scope="row">NIST SP 800-63B-4</th>
      <td>National Institute of Standards and Technology (NIST) Special Publication (SP) 800-63B-4; <a class="usa-link usa-link--external" href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63b.pdf" rel="noopener noreferrer" target="_blank">Digital Identity Guidelines: Authentication and Lifecycle Management</a>, June 2017</td>
    </tr>
    <tr>
      <th scope="row">NIST SP 800-63C-4</th>
      <td>National Institute of Standards and Technology (NIST) Special Publication (SP) 800-63C-4; <a class="usa-link usa-link--external" href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63c.pdf" rel="noopener noreferrer" target="_blank">Digital Identity Guidelines: Federation and Assertions</a>, June 22, 2017</td>
    </tr>
    <tr>
      <th scope="row">FISMA</th>
      <td>Federal Information Security Modernization Act of 2014, <a class="usa-link usa-link--external" href="https://www.congress.gov/bill/113th-congress/senate-bill/2521" rel="noopener noreferrer" target="_blank">44 U.S.C. § 3551 et seq., Public Law (P.L.) 113-283</a>, December 8, 2014</td>
    </tr>
    <tr>
      <th scope="row">HSPD-12</th>
      <td>Department of Homeland Security, Homeland Security Presidential Directive 12: <a class="usa-link usa-link--external" href="https://www.dhs.gov/homeland-security-presidential-directive-12" rel="noopener noreferrer" target="_blank">Policy for a Common Identification Standard for Federal Employees and Contractors</a>, August 27, 2004</td>
    </tr>
    <tr>
      <th scope="row">EO 13681</th>
      <td>Executive Order 13681, <a class="usa-link usa-link--external" href="https://obamawhitehouse.archives.gov/the-press-office/2014/10/17/executive-order-improving-security-consumer-financial-transactions" rel="noopener noreferrer" target="_blank">Improving the Security of Consumer Financial Transactions</a>, October 2014</td>
    </tr>
    <tr>
      <th scope="row">EO 13800</th>
      <td>Executive Order 13800, <a class="usa-link usa-link--external" href="https://obamawhitehouse.archives.gov/the-press-office/2014/10/17/executive-order-improving-security-consumer-financial-transactions" rel="noopener noreferrer" target="_blank">Strengthening the Cybersecurity of Federal Networks and Critical Infrastructure</a>, May 2017</td>
    </tr>
    <tr>
      <th scope="row">A-130</th>
      <td>OMB Circular A-130, <a class="usa-link usa-link--external" href="https://obamawhitehouse.archives.gov/sites/default/files/omb/assets/OMB/circulars/a130/a130revised.pdf" rel="noopener noreferrer" target="_blank">Managing Federal Information as a Strategic Resource</a>, July 28, 2016</td>
    </tr>
    <tr>
      <th scope="row">A-108</th>
      <td>OMB Circular A-108, <a class="usa-link usa-link--external" href="https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A108/omb_circular_a-108.pdf?msclkid=45a0e506c7f611ecad177ad1de1c33fa" rel="noopener noreferrer" target="_blank">Federal Agency Responsibilities for Review, Reporting, and Publication under the Privacy Act</a>, December 2016</td>
    </tr>
    <tr>
      <th scope="row">A-123</th>
      <td>OMB Circular A-123, <a class="usa-link usa-link--external" href="https://obamawhitehouse.archives.gov/omb/circulars_a123_rev/?msclkid=f1499107c7f611ec96a4efc50dd955fb" rel="noopener noreferrer" target="_blank">Management’s Responsibility for Enterprise Risk Management and Internal Control</a>, July 15, 2016</td>
    </tr>
    <tr>
      <th scope="row">M-19-17</th>
      <td>OMB M-19-17, <a class="usa-link usa-link--external" href="https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf" rel="noopener noreferrer" target="_blank">Enabling Mission Delivery through Improved Identity, Credential, and Access Management</a>, May 21, 2019</td>
    </tr>
    <tr>
      <th scope="row">FIPS 199</th>
      <td>NIST FIPS Publication 199, <a class="usa-link usa-link--external" href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.199.pdf" rel="noopener noreferrer" target="_blank">Standards for Security Categorization of Federal Information and Information Systems</a>, February 2004</td>
    </tr>
    <tr>
      <th scope="row">NIST SP 800-37</th>
      <td>NIST Special Publication 800-37, Revision 2, <a class="usa-link usa-link--external" href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-37r2.pdf" rel="noopener noreferrer" target="_blank">Risk Management Framework for Information Systems and Organizations: A System Life Cycle Approach for Security and Privacy</a>, December 2018</td>
    </tr>
    <tr>
      <th scope="row">NIST SP 800-53 Rev. 5</th>
      <td>NIST Special Publication 800-53, Revision 5, <a class="usa-link usa-link--external" href="https://doi.org/10.6028/NIST.SP.800-53r5" rel="noopener noreferrer" target="_blank">Security and Privacy Controls for Information Systems and Organizations</a>, Updated September 2020</td>
    </tr>
    <tr>
      <th scope="row">NIST SP 800-53A Rev. 5</th>
      <td>NIST Special Publication 800-53A, Revision 5, <a class="usa-link usa-link--external" href="https://csrc.nist.gov/publications/detail/sp/800-53a/rev-5/final" rel="noopener noreferrer" target="_blank">Assessing Security and Privacy Controls in Information Systems and Organizations</a>, Updated January 2022</td>
    </tr>
    <tr>
      <th scope="row">NIST RMF Overview</th>
      <td>NIST <a class="usa-link usa-link--external" href="https://csrc.nist.gov/projects/risk-management/about-rmf" rel="noopener noreferrer" target="_blank">Risk Management Framework Overview</a>, November 30, 2016</td>
    </tr>
  </tbody>
</table>


## Appendix B. Examples and Templates

This appendix provides examples and templates of existing resources to help establish or improve DIRA processes. It includes the following sections:

1. Process Flow Examples  
2. Digital Identity Acceptance Statement Example and Template

## 1. Process Flow Examples

This section includes example process flow diagrams used by some agencies for the Digital Identity Risk Assessment processes. Choose and reuse any process flow that works best for your agency.

![Figure 9:  The DIRA Process from Data Collection to Ongoing Assessment]({{site.baseurl}}/assets/playbooks/dira/figure9.jpg)

**Figure 9:  The DIRA Process from Data Collection to Ongoing Assessment**


![Figure 10: Describes the DIRA Process Flow from the Data Collection Phase to the Ongoing Assessment Phase]({{site.baseurl}}/assets/playbooks/dira/figure10.jpg)

**Figure 10: Describes the DIRA Process Flow from the Data Collection Phase to the Ongoing Assessment Phase**


![Figure 11: A Six-Step Process of What is Required to Implement a DIRA]({{site.baseurl}}/assets/playbooks/dira/figure11.jpg)

**Figure 11: A Six-Step Process of What is Required to Implement a DIRA**


## 2. Digital Identity Acceptance Statement Example Template

This [Digital Identity Acceptance Statement template]({{site.baseurl}}/docs/playbook-dira-dias-template.docx) is provided as an example for agencies to use or modify as needed


## Appendix C. NIST Special Publication 800-63-4, Requirements Traceability Matrix

This appendix includes both normative requirements and informative references from NIST SP 800-63-4 Digital Identity Guidelines. Only requirements related to the agency processes for digital identity risk assessments are included. The Playbook Consideration column includes comments on the standards statements and alignment to this playbook’s development.

<table class="usa-table">
  <caption>
    Requirements & Playbook Considerations
  </caption>
  <thead>
    <tr>
      <th scope="col">Requirement</th>
      <th scope="col">Section</th>
      <th scope="col">Playbook Consideration</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Federal RPs SHALL implement the DIRM process for all online services.</th>
      <td>3</td>
      <td>This supports the assertion that federal agencies should apply the DIRA process to their online services.</td>
    </tr>
    <tr>
      <th scope="row">At a minimum, organizations <strong>SHALL</strong> execute and document each step and complete and document the normative mandates and outcomes of each step, regardless of any organization-specific processes or tools used in the overall DIRM process.</th>
      <td>3</td>
      <td>This supports the documentation of the DIRA process in a DIAS.</td>
    </tr>
    <tr>
      <th scope="row"><p>RPs <strong>SHALL</strong> develop a description of the online service that includes, at minimum:
      <ul class="usa-list">
        <li>The organizational mission and business objectives supported by the online service</li>
        <li>The mission and business partner dependencies associated with the online service</li>
        <li>Legal, regulatory, and contractual requirements, including privacy obligations that apply to the online service</li>
        <li>The functionality of the online service and the data that it is expected to process</li>
        <li>User groups that need to have access to the online service as well as the types of online transactions and access privileges available to each user group</li>
        <li>The set of entities (to include users of the online service, organizations, and populations served) that will be impacted by the online service and the broader business process of which it is a part</li>
        <li>The results of any pre-existing DIRM assessments (as an input) and the current state of any pre-existing identity technologies (i.e., proofing, authentication, or federation)</li>
        <li>The estimated availability of the types of identity evidence required for identity proofing across all user groups served</li>
      </ul></p>
      </th>
      <td>3.1</td>
      <td>Supports Step 1 of the DIRA process to identify the functional scope and description of the online service, the user groups to be served, the types of online transactions that will be available, and the underlying data that the service will process through its interfaces.</td>
    </tr>
    <tr>
      <th scope="row">The scope of impact assessments <strong>SHALL</strong> include individuals who use the online application as well as the organization itself.</th>
      <td>3.1</td>
      <td>Supports the proposed process recommendations to independently assess the impacts by the community of users.</td>
    </tr>
    <tr>
      <th scope="row">Organizations <strong>SHALL</strong> document all impacted entities (both internal and external to the organization) when conducting their impact assessments.</th>
      <td>3.1</td>
      <td>Supports the proposed process recommendations for the risks and impact assessments to consider both the agency and the users. </td>
    </tr>
    <tr>
      <th scope="row"><p>The impact assessment <strong>SHALL</strong> include:
        <ul class="usa-list">
          <li>Identifying a set of impact categories and the potential harms for each impact category,</li>
          <li>Identifying the levels of impact, and</li>
          <li>Assessing the level of impact for each user group.</li>
        </ul></p>
      </th>
      <td>3.2</td>
      <td>Supports Step 2 recommendation to determine the digital identity risk for each assurance category by assessing the impacts for each community of user, user type, common role, and transactions identified in Step 1.
      </td>
    </tr>
    <tr>
      <th scope="row">The level of impact for each user group identified in Sec. 3.1 <strong>SHALL</strong> be considered separately based on the transactions available to that user group.</th>
      <td>3.2</td>
      <td>Supports Step 2 recommendation to determine the digital identity risk for each assurance category by assessing the impacts for each community of user, user type, common role, and transactions identified in Step 1.</td>
    </tr>
    <tr>
      <th scope="row">While impacts to user groups, the organization, and other entities are primary considerations for impact assessments, organizations <strong>SHOULD</strong> also consider scale (e.g., number of persons impacted by transactions).</th>
      <td>3.2</td>
      <td>Supports Step 2 recommendation to determine the digital identity risk for each assurance category by assessing the impacts for each community of user, user type, common role, and transactions identified in Step 1.</td>
    </tr>
    <tr>
      <th scope="row"><p>At a minimum, organizations <strong>SHALL</strong> include the following impact categories in their impact assessments:
        <ul class="usa-list">
          <li>Degradation of mission delivery</li>
          <li>Damage to trust, standing, or reputation</li>
          <li>Unauthorized access to information</li>
          <li>Financial loss or liability</li>
          <li>Loss of life or danger to human safety, human health, or environmental health</li>
        </ul>
      </p>
      </th>
      <td>3.2.1</td>
      <td>Supports the proposed process recommendations for the risks and impact assessments to consider both the agency and the users for the transactions.</td>
    </tr>
    <tr>
      <th scope="row">Organizations <strong>SHOULD</strong> include additional impact categories, as appropriate, based on their mission and business objectives. Each impact category <strong>SHALL</strong> be documented and consistently applied when implementing the DIRM process across different online services offered by the organization.</th>
      <td>3.2.1</td>
      <td>Supports the proposed process recommendations for the risks and impact assessments to consider both the agency and the users for the transactions.</td>
    </tr>
    <tr>
      <th scope="row">For each impact category, organizations <strong>SHALL</strong> consider potential harms for each of the impacted entities identified in Sec. 3.1.</th>
      <td>3.2.1</td>
      <td>Supports Step 2 recommendation to determine the digital identity risk for each assurance category by assessing the impacts for each community of user, user type, common role, and transactions identified in Step 1.</td>
    </tr>
    <tr>
      <th scope="row">To provide a more objective basis for impact level assignments, organizations SHOULD develop thresholds and examples for the impact levels for each impact category. Where this is done, particularly with specifically defined quantifiable values, these thresholds SHALL be documented and used consistently in the DIRM assessments across an organization to allow for a common understanding of risks.</th>
      <td>3.2.2</td>
      <td>Supports Step 2 recommendation to determine the digital identity risk for each assurance category by assessing the impacts for each community of user, user type, common role, and transactions identified in Step 1.</td>
    </tr>
    <tr>
      <th scope="row">The impact analysis SHALL consider the level of impact for each impact category for each type of impacted entity if an intruder obtains unauthorized access as a member of each user group. Because different sets of transactions are available to each user group, it is important to consider each user group separately for this analysis.</th>
      <td>3.2.3</td>
      <td>Supports the proposed process recommendations for the risks and impact assessments to consider both the agency and the users for the transactions.</td>
    </tr>
    <tr>
      <th scope="row">The impact analysis SHALL be performed for each user group that has access to the online service.</th>
      <td>3.2.3</td>
      <td>Supports the proposed process recommendations for the risks and impact assessments to consider both the agency and the users for the transactions.</td>
    </tr>
    <tr>
      <th scope="row">The output of this impact analysis is a set of impact levels for each user group that SHALL be documented in a suitable format for further analysis in accordance with Sec. 3.4.</th>
      <td>3.2.3</td>
      <td>Supports Step 4, to formalize the results of the assessment process with a Digital Identity Acceptance Statement (DIAS).</td>
    </tr>
    <tr>
      <th scope="row">Organizations SHALL document the approach they use to combine their impact assessment into an overall impact level for each of their defined user groups and SHALL apply it consistently across all of its online services. At the conclusion of the combinatorial analysis, organizations SHALL document the impact for each user group.</th>
      <td>3.2.4</td>
      <td>Supports the proposed process recommendations for the risks and impact assessments to consider both the agency and the users for the transactions.</td>
    </tr>
    <tr>
      <th scope="row"><p>The RP SHALL identify the types of assurance levels that apply to their online service from the following:
        <ul class="usa-list">
          <li><strong>IAL</strong> - The robustness of the identity proofing process to determine the identity of an individual. The IAL is selected to mitigate risks that result from potential identity proofing failures.</li>
          <li><strong>AAL</strong> - The robustness of the authentication process itself, and the binding between an authenticator and a specific individual's identifier. The AAL is selected to mitigate risks that result from potential authentication failures.</li>
          <li><strong>FAL</strong> - The robustness of the federation process used to communicate authentication and attribute information to an RP from an IdP. The FAL is selected to mitigate risks that result from potential federation failures.</li>
        </ul></p>
      </th>
      <td>3.3.1</td>
      <td>Supports the proposed process recommendations to independently assess the assurance levels by the community of users and transactions.</td>
    </tr>
    <tr>
      <th scope="row">Organizations SHALL develop and document a process and governance model for selecting initial assurance levels and controls based on the potential impacts of failures in the digital identity system.</th>
      <td>3.3.3</td>
      <td>Supports the proposed process recommendations to independently assess the assurance levels by the community of users and transactions.</td>
    </tr>
    <tr>
      <th scope="row">The organization <strong>SHALL</strong> document whether identity proofing is required for their application and, if it is, <strong>SHALL</strong> select an initial IAL for each user group based on the effective impact level determination from Sec. 3.2.4.</th>
      <td>3.3.3.1</td>
      <td>Supports the proposed process recommendations to independently assess the assurance levels by the community of users and transactions.</td>
    </tr>
    <tr>
      <th scope="row">The organization <strong>SHALL</strong> document whether authentication is needed for their online service and, if it is, <strong>SHALL</strong> select an initial AAL for each user group based on the effective impact level determination from Sec. 3.2.4.</th>
      <td>3.3.3.2</td>
      <td>Supports the proposed process recommendations to independently assess the assurance levels by the community of users and transactions.</td>
    </tr>
    <tr>
      <th scope="row"> Consistent with M-19-17, federal agencies that operate online services <strong>SHOULD</strong> implement federation as an option for user access.</th>
      <td>3.3.3.3</td>
      <td>Supports the proposed process recommendations to independently assess the assurance levels by the community of users and transactions.</td>
    </tr>
    <tr>
      <th scope="row">The organization <strong>SHALL</strong> document whether federation will be used for their online service and, if it is, <strong>SHALL</strong> select an initial FAL for each user group based on the effective impact level determination from Sec. 3.2.4.</th>
      <td>3.3.3.3</td>
      <td>Supports the proposed process recommendations to independently assess the assurance levels by the community of users and transactions.</td>
    </tr>
    <tr>
      <th scope="row">For online services that are assessed to be high impact, organizations <strong>SHALL</strong> conduct a further assessment to evaluate the risk of a compromised IdP to determine whether FAL2 or FAL3 is more appropriate for their use case. Considerations <strong>SHOULD</strong> include the type of data being accessed, the location of the IdP (e.g., whether the IdP is internal or external to their enterprise boundary), and the availability of bound authenticators or holder-of-key capabilities.</th>
      <td>3.3.3.3</td>
      <td>Supports the proposed process recommendations to independently assess the assurance levels by the community of users and transactions.</td>
    </tr>
    <tr>
      <th scope="row">
        <p>Using the initial xALs selected in Sec. 3.3.3, the organization <strong>SHALL</strong> identify the applicable baseline controls for each user group as follows:
          <ul class="usa-list">
            <li>Initial IAL and related technical and process controls from SP 800-63A-4</li>
            <li>Initial AAL and related technical and process controls from SP 800-63B-4</li>
            <li>Initial FAL and related technical and process controls from SP 800-63C-4</li>
          </ul>
        </p>
      </th>
      <td>3.3.4</td>
      <td>Supports Step 3 of the DIRA process.</td>
    </tr>
    <tr>
      <th scope="row">Within the tailoring step, organizations <strong>SHALL</strong> focus on impacts to mission delivery due to the implementation of identity management controls, including the possibility of legitimate users who are unable to access desired online services or experience sufficient friction or frustration with the identity system (and technology selection) that they abandon attempts to access the online service.</th>
      <td>3.4</td>
      <td>Supports the proposed need to tailor the initial assurance levels and baseline controls from Step 3 of the DIRA process.</td>
    </tr>
    <tr>
      <th scope="row">As a part of the tailoring process, organizations <strong>SHALL</strong> review the Digital Identity Acceptance Statements and practice statements[^Practice] from CSPs and IdPs that they use or intend to use. However, organizations <strong>SHALL</strong> also conduct their own analysis to ensure that the organization's specific mission and the communities being served by the online service are given due consideration for tailoring purposes. As a result, the organization <strong>MAY</strong>require their chosen CSP to strengthen or provide optionality in the implementation of certain controls to address risks and unintended impacts to the organization's mission and the communities served.</th>
      <td>3.4</td>
      <td>Supports the proposed need to tailor the initial assurance levels and baseline controls from Step 3 of the DIRA process.</td>
    </tr>
    <tr>
      <th scope="row"><p>Organizations <strong>SHALL</strong> establish and document their xAL tailoring process. At a minimum, this process:
        <ul class="usa-list">
          <li><strong>SHALL</strong> follow a documented governance approach to allow for decision-making</li>
          <li><strong>SHALL</strong> document all decisions in the tailoring process, including the assessed xALs, modified xALs, and supplemental and compensating controls in the Digital Identity Acceptance Statement (see <a href="{{site.baseurl}}/#IDacceptStmt">Sec. 3.4.4</a>)</li>
          <li><strong>SHALL</strong> justify and document all risk-based decisions or modifications to the initially assessed xALs in the Digital Identity Acceptance Statement (see <a href="{{site.baseurl}}/#IDacceptStmt">Sec. 3.4.4</a>)</li>
          <li><strong>SHOULD</strong> establish a cross-functional capability to support subject-matter analysis of xAL selection impacts in the tailoring process (e.g., subject-matter experts who can speak about risks and considerations related to privacy, customer experience, fraud and impersonation impacts, and other germane areas)</li>
      </ul>
      </p></th>
      <td>3.4</td>
      <td>Supports the assertion that all determinations should be documented and justified.</td>
    </tr>
    <tr>
      <th scope="row">When progressing from the initial assurance level selection in Sec. 3.3.4 to the final xAL selection and implementation, organizations <strong>SHALL</strong> conduct detailed assessments of the controls defined for the initially selected xALs to identify potential impacts in the operational environment.</th>
      <td>3.4.1</td>
      <td>Supports the proposed need to tailor the initial assurance levels and baseline controls from Step 3 of the DIRA process.</td>
    </tr>
    <tr>
      <th scope="row"><p>At a minimum, organizations <strong>SHALL</strong> assess the impacts and potential unintended consequences related to the following areas:
        <ul class="usa-list">
          <li><strong>Privacy</strong> - Identify unintended consequences to the privacy of individuals who will be subject to the controls at an assessed xAL and of individuals affected by organizational or third-party practices related to the establishment, management, or federation of a digital identity. A privacy assessment <strong>SHOULD</strong> leverage an existing Privacy Threshold Analysis (PTA) or Privacy Impact Assessment (PIA) as inputs during the privacy assessment process[^NISTPF]. However, as the goal of the privacy assessment is to identify privacy risks that arise from the initial assurance level selection, additional assessments and evaluations that are specific to the baseline controls for the assurance levels may be required for the underlying information system.</li>
          <li>**Customer Experience** - Determine whether implementation of the initial assurance levels may create substantial or unacceptable barriers to individuals seeking to access services. Customer experience assessments <strong>SHALL</strong> consider impacts that result from the identity management controls to ensure that they do not cause undue burdens, frustrations, or frictions for individuals and that there are pathways to provide service to users of all capabilities, resources, technology access, and economic statuses.</li>
          <li><strong>Threat Resistance</strong> - Determine whether the defined assurance level and related controls will address specific threats to the online service based on the operational environment, its threat actors, and known tactics, techniques, and procedures (TTPs). Threat assessments <strong>SHALL</strong> consider specific known and potential threats, threat actors, and TTPs within the implementation environment for the identity management functions. For example, certain benefits programs may be more subject to familial threats or collusion. Based on their assessments, organizations <strong>MAY</strong>implement supplemental controls specific to the communities served by their online service. Conversely, organizations <strong>MAY</strong>tailor their assessed xAL down or modify their baseline controls if their threat assessment indicates that a reduced threat posture is appropriate based on their environment.</li>
        </ul>
      </p></th>
      <td>3.4.1</td>
      <td>Supports the proposed need to tailor the initial assurance levels and baseline controls from Step 3 of the DIRA process.</td>
    </tr>
    <tr>
      <th scope="row">All assessments applied during the tailoring phase <strong>SHALL</strong> be extended to any compensating or supplemental controls, as defined in Sec. 3.4.2 and Sec. 3.4.3.</th>
      <td>3.4.1</td>
      <td>Supports the proposed need to tailor the initial assurance levels and baseline controls from Step 3 of the DIRA process.</td>
    </tr>
    <tr>
      <th scope="row">Any cost-based decisions that result in modifications to assessed xALs or baseline controls SHALL be documented in the Digital Identity Acceptance Statement</th>
      <td>3.4.1</td>
      <td>Supports Step 4, to formalize the results of the assessment process with a Digital Identity Acceptance Statement (DIAS).</td>
    </tr>
    <tr>
      <th scope="row">Organizations <strong>MAY</strong>choose to implement a compensating control if they are unable to implement a baseline control or when a risk assessment indicates that a compensating control sufficiently mitigates risk in alignment with organizational risk tolerance. This control <strong>MAY</strong>be a modification to the normative statements defined in these guidelines or <strong>MAY</strong>be applied elsewhere in an online service, digital transaction, or service life cycle.</th>
      <td>3.4.2</td>
      <td>Supports the proposed need to tailor the initial assurance levels and baseline controls from Step 3 of the DIRA process.</td>
    </tr>
    <tr>
      <th scope="row">Where compensating controls are implemented, organizations <strong>SHALL</strong> document the compensating control, the rationale for the deviation, comparability of the chosen alternative, and any resulting residual risks.</th>
      <td>3.4.2</td>
      <td>Supports the assertion that all determinations should be documented and justified.</td>
    </tr>
    <tr>
      <th scope="row">Organizations <strong>SHOULD</strong> identify and implement supplemental controls to address specific threats in the operational environment that may not be addressed by the baseline controls.</th>
      <td>3.4.3</td>
      <td>Supports the proposed need to tailor the initial assurance levels and baseline controls from Step 3 of the DIRA process.</td>
    </tr>
    <tr>
      <th scope="row">Any supplemental controls <strong>SHALL</strong> be assessed for impacts based on the same factors used to tailor the organization's assurance level and <strong>SHALL</strong> be documented.</th>
      <td>3.4.3</td>
      <td>Supports the assertion that all determinations should be documented and justified.</td>
    </tr>
    <tr>
      <th scope="row">Organizations <strong>SHALL</strong> develop a Digital Identity Acceptance Statement (DIAS) to document the results of the DIRM process for (i) each online service managed by the organization, and (ii) each external online service used to support the mission of the organization, including software-as-a-service offerings (e.g., social media platforms, email services, online marketing services).</th>
      <td>3.4.4</td>
      <td>Supports Step 4, to formalize the results of the assessment process with a Digital Identity Acceptance Statement (DIAS).</td>
    </tr>
    <tr>
      <th scope="row">RPs who intend to use a particular CSP/IdP <strong>SHALL</strong> review the latter's DIAS and incorporate relevant information into the organization's DIAS for each online service.</th>
      <td>3.4.4</td>
      <td>Supports Step 4, to formalize the results of the assessment process with a Digital Identity Acceptance Statement (DIAS).</td>
    </tr>
    <tr>
      <th scope="row"><p>Organizations <strong>SHALL</strong> prepare a DIAS for their online service that includes, at a minimum:
      <ul class="usa-list">
        <li>Initial impact assessment results,</li>
        <li>Initially assessed xALs,</li>
        <li>Tailored xAL and rationale if the tailored xAL differs from the initially assessed xAL,</li>
        <li>All compensating controls with their comparability or residual risks, and</li>
        <li>All supplemental controls.</li>
      </ul>
      </p></th>
      <td>3.4.4</td>
      <td>Supports Step 4, to formalize the results of the assessment process with a Digital Identity Acceptance Statement (DIAS).</td>
    </tr>
    <tr>
      <th scope="row">Federal agencies <strong>SHOULD</strong> include this information in the information system authorization package described in the NIST RMF.</th>
      <td>3.4.4</td>
      <td>Supports the proposed DIRA process step recommendations to align with the Risk Management Framework and SA&A of IT systems.</td>
    </tr>
    <tr>
      <th scope="row">Organizations <strong>SHALL</strong> implement a continuous evaluation and improvement program that leverages input from end users who have interacted with the identity management system as well as performance metrics for the online service.</th>
      <td>3.5</td>
      <td>Supports Step 5 of the DIRA process to periodically reassess the findings of the DIRA for gaps and areas needing improvement.</td>
    </tr>
    <tr>
      <th scope="row">This program <strong>SHALL</strong> be documented, including the metrics that are collected, the sources of data required to enable performance evaluation, and the processes in place for taking timely actions based on the continuous improvement process.</th>
      <td>3.5</td>
      <td>Supports Step 5 of the DIRA process to periodically reassess the findings of the DIRA for gaps and areas needing improvement.</td>
    </tr>
    <tr>
      <th scope="row">Organizations <strong>SHALL</strong> regularly assess the effectiveness of current security measures and fraud detection capabilities against the latest threats and fraud tactics.</th>
      <td>3.5</td>
      <td>Supports Step 5 of the DIRA process to periodically reassess the findings of the DIRA for gaps and areas needing improvement.</td>
    </tr>
    <tr>
      <th scope="row"><p>To fully understand the performance of their identity system, organizations will need to identify critical inputs to their continuous evaluation process. At a minimum, these inputs <strong>SHALL</strong> include:
      <ul class="usa-list">
        <li>Integrated CSP, IdP, and authentication functions as well as validation, verification, and fraud management systems, as appropriate</li>
        <li>Customer feedback mechanisms such as complaint processes, help-desk statistics, and other user feedback (e.g., surveys, interviews, or focus groups)</li>
        <li>Threat analysis, threat reporting, and threat intelligence feeds that are available</li>
        <li>Fraud trends, fraud investigation results, and fraud metrics as available</li>
        <li>The results of ongoing customer experience assessments and privacy assessments</li>
      </ul>
      </p></th>
      <td>3.5.1</td>
      <td>Supports Step 5 of the DIRA process to periodically reassess the findings of the DIRA for gaps and areas needing improvement.</td>
    </tr>
    <tr>
      <th scope="row">RPs <strong>SHALL</strong> document their metrics, reporting requirements, and data inputs for any CSP, IdP, or other integrated identity service to ensure that expectations are appropriately communicated to partners and vendors.</th>
      <td>3.5.1</td>
      <td>Supports Step 5 of the DIRA process to periodically reassess the findings of the DIRA for gaps and areas needing improvement.</td>
    </tr>
  </tbody>
</table>


## Appendix D. Updates to NIST Special Publication 800-63

In June 2017, NIST replaced SP 800-63-2,Electronic Authentication Guideline,with SP 800-63-3, Digital Identity Guidelines. The new standard provided agencies with increased security and privacy, more flexibility to meet their mission and constituent needs, and better alignment with digital identity best practices. In 2025, NIST updated SP 800-63-3 with SP 800-63-4. This update expanded security, privacy, and customer experience considerations, updated the digital identity models to include a user-controlled wallet federation model that addresses the increased attention and adoption of digital wallets, and streamlined the digital identity risk management process.NIST’s Digital Identity Guidelines identify the implementation requirements for conducting a DIRA and enable modernized risk-driven approaches for digital identities. Figure 12 depicts updated content details.


![Figure 12: Digital Identity Guideline Information Locations]({{site.baseurl}}/assets/playbooks/dira/figure12.jpg)


- The SP 800-63-4 parent document outlines the digital identity risk assessment methodology that federal agencies must implement. The other three documents address the three assurance level categories: Identity Assurance Level (IAL), Authentication Assurance Level (AAL), and Federation Assurance Level (FAL). These three assurance levels are known collectively as xALs. 


## Mix and Match xALs

The xALs in the revised guidance can be mixed and matched, giving agencies the flexibility to deploy strong authentication without having to prove a user’s identity (i.e., if the collection of sensitive information is not required). The mix and match assurance levels allow opportunities for:

- Greater flexibility,  
- Greater user experience,  
- Enhanced privacy, and  
- Reduced risk.

## Footnotes

1. A digital service is any federal Information Technology (IT) system or application accessible over the public internet or agency intranet. [↩]({{site.baseurl}}/playbooks/dira/#fn:1)  
2. A Digital Identity Risk Assessment is a method of applying Digital Identity Risk Management required by OMB Memorandum 19-17: Enabling Mission Delivery through Improved Identity, Credential, and Access Management, and described in NIST Special Publication 800-63-4 Digital Identity Guidelines. [↩]({{site.baseurl}}/playbooks/dira/#fn:2)  
3. For more information, refer to NIST Special Publication 800-63-4 Digital Identity Guidelines. [↩]({{site.baseurl}}/playbooks/dira/#fn:3)  
4. NIST Special Publication 800-63-4 Digital Identity Guidelines, Frequently Asked Questions. [↩]({{site.baseurl}}/playbooks/dira/#fn:4)  
5. Pursuant to 0MB Circular A-130, “information system” means a discrete set of information resources organized for the collection, processing, maintenance, use, sharing, dissemination, or disposition of information. System and application are used synonymously throughout this playbook. [↩]({{site.baseurl}}/playbooks/dira/#fn:5)  
6. Refer to NIST Special Publication 800-63-4 Digital Identity Guidelines, Section 1.1, Scope and Applicability. [↩]({{site.baseurl}}/playbooks/dira/#fn:6)  
7. The working group members determined Federation Assurance Level 3 was complex and not widely supported in commercial products and implementations. The working group decided the Federation Assurance Level 3 explanations were better served by agency technical exchanges or deferred to details included in NIST Special Publications. [↩]({{site.baseurl}}/playbooks/dira/#fn:7)  
8. Federal Information Security Modernization Act of 2014, 44 U.S.C. § 3551 et seq., Public Law (P.L.) 113-283, December 8, 2014. [↩]({{site.baseurl}}/playbooks/dira/#fn:8)  
9. Refer to NIST Special Publication 800-63-4 Digital Identity Guidelines, Appendix B, Glossary. [↩]({{site.baseurl}}/playbooks/dira/#fn:9)  
10. Personal data is personally identifiable information (PII). As defined by OMB Circular A-130, PII is information that can be used to distinguish or trace an individual’s identity, either alone or when combined with other information that is linked or linkable to a specific individual. [↩]({{site.baseurl}}/playbooks/dira/#fn:10)  
11. Agencies collecting identity information as part of identity proofing may be subject to specific retention policies in accordance with applicable laws, regulations, or policies, including any National Archives and Records Administration (NARA) records retention schedules. [↩]({{site.baseurl}}/playbooks/dira/#fn:11)  
12. Examples only. Refer to NIST Special Publication 800-63B-4 Digital Identity Guidelines, Authentication and Authenticator Management. Section 2.2 Authentication Assurance Level 2.[↩]({{site.baseurl}}/playbooks/dira/#fn:14)  
13. Refer to NIST Special Publication 800-63B-4 Digital Identity Guidelines, Authentication and Authenticator Management. Section 2.3 Authentication Assurance Level 3. [↩]({{site.baseurl}}/playbooks/dira/#fn:15)    
14. See NIST Special Publication 800-63-4 Digital Identity Guidelines, Section 2.4, Federation and Assertions. [↩]({{site.baseurl}}/playbooks/dira/#fn:17)  
15. NIST Special Publication 800-63-4 Digital Identity Guidelines, Section 3.4, Tailor and Document Assurance Levels. [↩]({{site.baseurl}}/playbooks/dira/#fn:20)  
16. NIST Special Publication 800-63-4 Digital Identity Guidelines, Section 3.4.4, Digital Identity Acceptance Statement. [↩]({{site.baseurl}}/playbooks/dira/#fn:21)  
17. Federal Information Processing Standards Publication 199 (FIPS 199) Standards for Security Categorization of Federal Information and Information Systems, Section 3, Categorization of Information and Information Systems (page 1). [↩]({{site.baseurl}}/playbooks/dira/#fn:22)  
18. Satisfied by the full PIV issuance processes, in accordance with government-wide policy and Office of Personnel Management (OPM) credentialing requirements for federal executive branch employees and contractors. [↩]({{site.baseurl}}/playbooks/dira/#fn:23)
    