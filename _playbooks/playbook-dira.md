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
  - text: Step 1. Identify Users, Transactions, and Roles
    href: '#step-1-identify-users-transactions-and-roles'
  - text: Step 2. Identify Risks
    href: '#step-2-identify-risks-and-assurance-levels'
  - text: Step 3. Determine Steps
    href: '#step-3-determine-steps-to-meet-assurance-levels'
  - text: Step 4. Finalize DIAS
    href: '#step-4-finalize-digital-identity-acceptance-statement'
  - text: Step 5. Reassess
    href: '#step-5-reassess'
  - text: Play 1. Streamline RMF
    href: '#play-1-streamline-risk-management-and-assessment-processes'
  - text: Play 2. Add Context
    href: '#play-2-add-context-for-the-mission'
  - text: Play 3. Use Templates
    href: '#play-3-use-templates'
  - text: Play 4. Shortcut Trees
    href: '#play-4-shortcut-decision-trees'
  - text: Play 5. Leverage Tools
    href: '#play-5-leverage-existing-agency-tools'
  - text: Play 6. Less Is More
    href: '#play-6-less-is-more'
  - text: References
    href: "#appendix-a-policy-standards-and-guidance"
  
---

<!-- Version 1.2  
December 29, 2022 -->

<img src="{{site.baseurl}}/assets/img/logo-gsa.png" width="64" height='64' align="left" alt="U.S. General Services Administration Logo">
<img src="{{site.baseurl}}/assets/img/logo-cio-round.png" width="64" height='64' align="left" alt="U.S. Federal Chief Information Officer Council Logo"><br><br><br>

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

<!-- | Version Number | Date | Change Description |
| :----------: | :-------: | -------- |
| 1.2 | 12/29/22 | Fixed heading typo, updated Appendix A. links |
| 1.1 | 11/17/21 | Inserted Key Point box at the end of Step 2. |
| 1.0 | 09/13/20 | Initial Draft | -->

# Acknowledgments

This playbook reflects the contributions of the Digital Identity Risk Assessment working group of the Identity, Credential, and Access Management Subcommittee (ICAMSC). The working group was co-chaired by members from the Internal Revenue Service (IRS) and the Environmental Protection Agency (EPA). Contributions were made by the members of services or agencies representing the Center of Medicare and Medicaid Services (CMS), Department of Defense (DOD), Department of Health and Human Services (HHS), Department of Homeland Security (DHS), Department of Justice (DOJ), Department of the Treasury (USDT), Department of Transportation (DOT), and General Services Administration (GSA). 

# Introduction

Digital identity represents each individual engaged in an online transaction. However, an individual’s real-life identity may not be known when used to access a digital service.[^1] Identity proofing helps establish that the individual is who they claim to be. Digital authentication provides reasonable risk-based assurances that the individual accessing the application is the same individual who previously accessed the service.  This playbook is a method to apply the National Institute of Standards and Technology (NIST) Special Publication 800-63-3 Digital Identity Guidelines. Federal agencies can perform a Digital Identity Risk Assessment (DIRA) to determine the appropriate identity, authenticator, or federation level outlined to access an application.

## Purpose

Most federal agencies offer services through an IT system or application, such as a website, to their employees, other agencies, and the public. To access an application, users may need to provide identity information, create an account, and log in. These actions are part of the digital identity and authentication process. 

DIRAs determine the assurance levels for the digital transactions that involve digital identity or require human authentication.[^2] When agencies build or buy applications that use the most current identity proofing and authentication standards, they protect both the digital transactions and the user and agency data behind the applications.

This Digital Identity Risk Assessment playbook helps federal agency Chief Information Officer (CIO) and Chief Information Security Officer (CISO) teams and business application owners to:

-	Update and maintain consistent processes;
-	Determine whether an agency application requires a DIRA;
-	Integrate DIRA into agency Risk Management Framework (RMF) processes; and
-	Learn practices to implement DIRA processes.

NIST publishes implementation guides[^3] and frequently asked questions (FAQs)[^4] for agencies and service providers to use to create information technology solutions to meet these standards. This playbook promotes consistency, effectiveness, and efficiency in your agency’s processes.

## How to Use This Playbook

This playbook is divided into three major sections. Read the entire playbook or jump directly to the section that will help your agency.
- [High-Level DIRA Process](#high-level-dira-process) - A step-by-step guide on how to approach a DIRA process for each agency.
- [Agency Process Plays](#agency-process-plays) - Six plays to create efficient and consistent processes. For example, [Play #4](#play-4-shortcut-decision-trees) includes a shortcut decision tree for a streamlined DIRA for some applications.
- [Appendices](#appendix-a-policy-standards-and-guidance) - Example diagrams and templates, and references to policies and standards to use in your agency for communications. 

## Scope

The DIRA playbook applies to all federal Information Technology (IT) systems and applications that need identity proofing and authentication.[^5] This playbook complements the following standard and policy:

- [NIST Special Publication 800-63-3: Digital Identity Guidelines](https://pages.nist.gov/800-63-3){:target="_blank"}{:rel="noopener noreferrer"}
- [Office of Management and Budget Memorandum (OMB) M-19-17: Enabling Mission Delivery through Improved Identity, Credential, and Access Management](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

All agency information technology systems should use the DIRA process as part of the Risk Management Framework (RMF) and Federal Information Security Modernization Act (FISMA) processes. Business owners and information security officers produce a Digital Identity Assessment Statement (DIAS) to document the assurance levels determined by collecting and analyzing the system or application data as part of the assessment process.

This playbook does not apply to:

- Non-person entities,[^6] such as devices, Robotic Process Automation (RPA), or Machine Learning;
- Facilities access;
- Federation Assurance Level 3 solutions;[^7] or
- National security systems (NSS).[^8]

The following sections describe a basic DIRA process and provide plays to help you implement efficiency into your agency’s processes. 

# High-Level DIRA Process

The DIRA process begins when a new application or system is identified or a time-driven or event-driven reassessment is triggered. Once it is determined that a DIRA is needed, application data is identified, collected, and analyzed to determine the assurance levels and produce a Digital Identity Assessment Statement (DIAS), as shown in Figure 1.

<img src="{{site.baseurl}}/assets/playbooks/dira-process.png" alt="A circle figure with five steps. The DIRA process starts at the top of the circle when a new application or system is identified or when a time or event-based reassessment is triggered. Step 1 is Identify User, Transactions, and Roles. Step 2 is Identify Risks and Assurance Levels. Step 3 is Determine Steps to Meet Assurance Levels. Step 4 is Finalize Digital Identify  Assessment Statement. Step 5 is Reassess." width="560" height="462">

<p align="center"><b>Figure 1: Example DIRA Process</b></p>

A high-level DIRA process includes five steps:
1. [Identify Users, Transactions, and Roles](#step-1-identify-users-transactions-and-roles)
2. [Identify Risks and Assurance Levels](#step-2-identify-risks-and-assurance-levels)
3. [Determine Steps to Meet Assurance Levels](#step-3-determine-steps-to-meet-assurance-levels)
4. [Finalize Digital Identity Assessment Statement](#step-4-finalize-digital-identity-acceptance-statement)
5. [Reassess](#step-5-reassess)

## Step 1. Identify Users, Transactions, and Roles 

The first step is to identify the users and transaction information as well as the functional and business roles of the application.
There are many definitions to categorize users within the federal government, such as:  
-	User Types - Organizational and Non-Organizational users
-	Communities of Users - Employee, Partner, and Public users
-	Common Roles - General, Functional Privileged, and IT Privileged users

These definitions simplify complex requirements related to individuals and privacy, information security, and identity and access management concepts.  

{% include alert-info.html heading="Key Point" content="Identifying categories of users helps define the requirements for more than the Digital Identity Risk Assessments. For example, requirements for privacy, records retention, and monitoring are based on user types and categories." %}

First, identify the user types and communities of users the application supports. Identifying an application’s community of users is important to the DIRA processes as communities have different privacy, regulatory, and solution requirements to consider in risk assessments. Table 1 identifies user types and five common examples of communities of users. 

**Table 1: Examples of User Types and Communities**

| User Type | Description | Examples of Community of Users |
| ----------- | ------------ | ---------------------------------- |
| Organizational | An employee or individual the organization deems to have equivalent status of an employee | Internal agency enterprise users, including employees and direct support contractors <br><br>Other federal government agency users |
| Non-organizational | All users other than organizational users (i.e., the general public or guests) | U.S. state, local, and tribal agency users<br><br>Non-profit, business, or commercial users<br><br>Public or other users |

A transaction[^9] is 

<p align="center"><i>“... a discrete event between a user and a system that supports a business or programmatic purpose. A government digital system may have multiple categories or types of transactions, which may require separate analysis within the overall digital identity risk assessment.”</i></p> 

Application owners and the information security team collaborate to identify, analyze, and assess the digital transactions of the application. Examples of transactions and transaction types are phrased as actions on data: Create, Read, Modify, Delete. 

{% include alert-info.html heading="Key Point" content="Summarize transactions by each community of users for risk assessments. Each transaction carries a unique set of risks depending on the type of data being accessed and what the user can do with the data." %}

Finally, map the community of users to the common roles. Most applications have several different user roles, each with different access privileges. Examples of common user roles include:
-	**General users**
  - Can access: Information resources provided by the application
  - Examples: Employees, general public
-	**Functional privileged users**
  -	Can access: Information resources provided by the application, and approval workflows
  -	Examples: Managers
-	**Information Technology (IT) privileged users**
  -	Can access: IT systems with read, write, or change access
  -	Examples: System administrators, security analysts

Table 2 provides examples of user types, transactions, and roles. 

**Table 2: Examples of User Types and Transactions**

| User Type | Community of Users | Example |
| ----------- | ------------ | ---------------------------------- |
| Organizational | Other federal government agency user | Agency employee or contractor (User Type) accesses and uploads document to cross-agency collaboration platform (Transaction) |
| Organizational | Internal agency enterprise user | Agency employee administrator (Role) adds user to an agency’s collaboration platform (Transaction) |
| Organizational | Internal agency enterprise user | Agency employee or contractor (User Type) exports data for use outside of the system (Transaction) |
| Organizational | Internal agency enterprise user | Agency employee supervisor (Role) approves a pending payment (Transaction) |
| Organizational | Internal agency enterprise user | Agency employee supervisor (Role) processes a payment (Transaction) |
| Non-organizational | Public user | Public user (User Type) searches for national park information and resources (Transaction) |
| Non-organizational | Public user | Public user (User Type) applies for federal government employment (Transaction)|
| Non-organizational | Public user | Public user (User Type) retrieves tax information (personally identifiable information [PII]) (Transaction)|

## Step 2. Identify Risks and Assurance Levels 

Determine the digital identity risk for each assurance category by assessing the impacts for each community of user, user type, common role, and transactions identified in Step 1.  

-	**Identity Assurance Levels (IALs)** indicate the level of confidence in a claimed identity. 
-	**Authenticator Assurance Levels (AALs)** indicate authentication requirements.
-	**Federation Assurance Levels (FALs)** indicate the level of confidence in an assertion used to communicate identity or authentication information across applications or across agencies. 

The risks and impact assessment considers the risks to both the agency and the user for the transactions. The risk to one can be significant while not negatively impacting the other at all. It’s common for government applications to have different assurance levels based on differing impacts and risks for each community of users and transactions.

{% include alert-info.html heading="Key Point" content="The impact categories and definitions used in the DIRA process are the same used to determine the overall application system categorization for impacts to confidentiality, integrity, and availability (a FIPS 199 assessment).<br><br>However, your overall application system categorization (FIPS 199) is often different than the risks and impacts for the identity and authenticator assurance levels for communities of users and transactions for the DIRA." %}

Table 3 lists the six impact categories to use. This table is a guideline for categorizing the risks and impacts involved in your application users and transactions.

**Table 3: Impact Definitions**

| Impact Category | Low | Moderate | High |
| ----------- | ------------------- | ------------------------ | --------------------- |
| **Inconvenience, distress, or damage to standing or reputation** | At worst, limited, short-term inconvenience, distress, or embarrassment to any party. | At worst, serious short-term or limited long-term inconvenience, distress, or damage to the standing or reputation of any party. | Severe or serious long-term inconvenience, distress, or damage to the standing or reputation of any party. This is ordinarily reserved for situations with particularly severe effects or which potentially affect many individuals. |
| **Financial loss or agency liability** | At worst, an insignificant or inconsequential financial loss to any party or an insignificant or inconsequential agency liability. | At worst, a serious financial loss to any party or a serious agency liability. | Severe or catastrophic financial loss to any party, or severe or catastrophic agency liability.|
| **Harm to agency programs or public interests** | At worst, a limited adverse effect on organizational operations or assets, or public interests. Examples of limited adverse effects are: (i) mission capability degradation to the extent and duration that the organization is able to perform its primary functions with noticeably reduced effectiveness, or (ii) minor damage to organizational assets or public interests. | At worst, a serious adverse effect on organizational operations or assets, or public interests. Examples of serious adverse effects are: (i) significant mission capability degradation to the extent and duration that the organization is able to perform its primary functions with significantly reduced effectiveness, or (ii) significant damage to organizational assets or public interests.| A severe or catastrophic adverse effect on organizational operations or assets, or public interests. Examples of severe or catastrophic effects are: (i) severe mission capability degradation or loss of to the extent and duration that the organization is unable to perform one or more of its primary functions, or (ii) major damage to organizational assets or public interests. |
| **Unauthorized release of sensitive information** | At worst, a limited release of personal, U.S. government sensitive, or commercially sensitive information to unauthorized parties resulting in a loss of confidentiality with a low impact as defined in FIPS 199. | At worst, a release of personal, U.S. government sensitive, or commercially sensitive information to unauthorized parties resulting in loss of confidentiality with a moderate impact as defined in FIPS 199. | A release of personal, U.S. government sensitive, or commercially sensitive information to unauthorized parties resulting in loss of confidentiality with a high impact as defined in FIPS 199. |
| **Personal safety** | At worst, minor injury not requiring medical treatment. | At worst, moderate risk of minor injury or limited risk of injury requiring medical treatment. | A risk of serious injury or death. |
| **Civil or criminal violations** | At worst, a risk of civil or criminal violations of a nature that would not ordinarily be subject to enforcement efforts. | At worst, a risk of civil or criminal violations that may be subject to enforcement efforts.| A risk of civil or criminal violations that are of special importance to enforcement programs. |

### Identity Assurance

Identity Assurance Levels define the processes and solutions used to identity proof users attempting to sign up for a digital service or perform an application transaction. IALs mitigate impacts of providing a benefit or information to the wrong user. 
-	Identity Assurance is: “Are you who you say you are?”
-	Impacts are: “What are the risks to the government or to you if you aren’t?”
	
Defining the IALs for each community of users and transactions from Step 1 is one of the more challenging aspects of a DIRA. The final IAL correlates to how much personal data[^10] is validated and verified for that user during the identity proofing process.[^11]  

At Identity Assurance Level 1 (IAL1), the application may or may not require proofing. If an application requires input, a user may only need to provide a real or fictitious name for display purposes and an email address to receive notifications. The information may be _self-asserted_ by the user and doesn’t need to be verified. At Identity Assurance Level 2 (IAL2) or 3 (IAL3), increasingly more personal information about the user needs to be validated and verified either remotely, supervised remotely, or in person. At IAL2, a real name, an email address, and an address of record are confirmed through record checks remotely or in person. At IAL3, a biometric is captured and the user must be verified in person.

{% include alert-info.html heading="Key Point" content="The risks and impacts of excessive information collection for identity proofing needs to be strongly considered for each community of users and the transactions.<br><br>For public users and other non-organizational users, privacy benefits and privacy principles are key factors to consider.<br><br>Application owners and agency processes need to include the Senior Agency Official for Privacy to define the risks, impact levels, and the Identity Assurance Levels 
." %}

Figure 2 explains the three Identity Assurance Levels in _example_ terms of the information validated and verified during the identity proofing process.[^12] 

<img src="{{site.baseurl}}/assets/playbooks/dira-ial.png" alt="A building block figure. A user is on the right of the figure and to the left of the user are different data elements provided by a user. Each IAL includes addition data to increase the assurance. IAL 1 data includes Display Name & Email Address. IAL 2 data includes confirmed through record checks through virtual or in-person, address of record, and real name & email address. IAL 3 data includes confirmed through record checks and in-person, biometric, address of record, and real name and email address." width="560" height="301">

<p align="center"><b>Figure 2: Identity Assurance Levels</b></p>

[Appendix B. Examples and Templates](#appendix-b-examples-and-templates) includes an example of a decision tree of the risk assessment process flow that defines the Identity Assurance Levels for the communities of users and transactions in Step 1.[^13] 

### Authenticator Assurance

Authenticator Assurance Levels define the strength of the authentication process. AALs mitigate potential authentication errors (i.e., an attacker accessing a user’s account).
-	Authenticator Assurance is: “Is this the same user as before?”
-	Impacts are: “What are the risks to the government or to you if you are not the same user as before?”

At Authenticator Assurance Level 1 (AAL1), a user might only use a username and password. At Authenticator Assurance Level 2 (AAL2) a user has two factors, including a factor such as a one-time password (OTP) managed by a mobile application on a personal or government mobile phone.[^14] 

{% include alert-info.html heading="Key Point" content="Two-factor authentication is rapidly becoming the expected default for applications.<br><br>Recurring public and other non-organizational users may want to create an account. Agencies and application owners should strongly consider always allowing and providing two-factor options.<br><br>For employees and other organizational government users, two-factor authentication is a government-wide policy requirement." %}

Figure 3 explains the concept of the three Authenticator Assurance Levels in _example_ terms of the authentication.[^15]  

<img src="{{site.baseurl}}/assets/playbooks/dira-aal.png" alt="A building block figure. A user is on the right of the figure and to the left of the user are different authenticator elements used to log in. Each AAL includes an authentication factor to increase the assurance. AAL 1 includes a single factor. AAL 2 includes two factors. AAL 3 includes two factor with cryptographic hardware." width="560" height="217">

<p align="center"><b>Figure 3: Authenticator Assurance Levels</b></p>

[Appendix B. Examples and Templates](#appendix-b-examples-and-templates) includes an example of the risk assessment process flow that defines the Authenticator Assurance Levels for the community of users and transactions in Step 1.[^16] 

### Federation Assurance

Federation Assurance Levels (FALs) indicate the assertion protocol used by an application to communicate identity and authenticator information. FALs protect information about the _authenticated user_. They mitigate risks if a malicious actor in the transaction changes or replays the information. 

{% include alert-info.html heading="Key Point" content="Federation is an advanced topic with many different acronyms and terms.<br><br>Use outcome-based examples and demonstrations with application owners and business teams to help identify the FALs." %}

This playbook explains FALs with the outcomes first before explaining the high level requirements and the risk process.[^17] To determine if your application requires an FAL, consider the following questions:

For _existing_ applications and defined users and transactions (Step 1):
-	Is the application integrated with any type of _agency enterprise_ single sign-on solution? 
-	Is the application integrated with any government or commercial identity provider?
-	For organizational government users and transactions, is the application integrated with an employee’s network logon? 

For _new_ applications and defined users and transactions (Step 1):
-	Do the same users access other agency applications and could the user experience for identity and authentication be streamlined? 

If your agency and application owner answers “Yes” to any of these questions, then the application is federated, _or could be federated_ during the solution definition step (Step 3), and needs a FAL defined for each user community and transaction. 

{% include alert-info.html heading="Key Point" content="Applications that don’t implement a federated capability document the rationale in the final Digital Identity Acceptance Statement.<br><br>FAL1 and FAL2 are good for most use cases across the federal government. Agencies and application owners should consider implementations based on the community of users and transactions." %}

FALs are implemented using standard-based protocols across the federal government. These protocols are commonly used in many applications and transactions globally and are routinely supported in commercial off-the-shelf (COTS), native cloud software-as-a-service, and consumer and enterprise mobile applications. Each FAL defines _minimum_ requirements for how the integrations are performed and the requirements if the user’s information is passed between applications. For example, for some implementations, the federation assurance levels map to commonly used federation protocols such as OpenID Connect (OIDC) and Security Assertion Markup Language (SAML). How those implementations are done maps to the increasing FAL options. 

Figure 4 explains the concept of the three Federation Assurance Levels in _example_ terms.[^18]  

<img src="{{site.baseurl}}/assets/playbooks/dira-fal.png" alt="A building block figure. On the left of the figure, there are a pair of hands shaking to represent an application sharing information. To the right of the shaking hands are blocks aligned under an FAL. There are increasing elements required under each successive FAL. FAL 1 includes a signed assertion. FAL 2 includes a signed and encrypted assertion. FAL 3 includes a signed and encrypted assertion with a re-verify authentication." width="560" height="209">

<p align="center"><b>Figure 4: Federation Assurance Levels</b></p>

[Appendix B. Examples and Templates](#appendix-b-examples-and-templates) includes an example of a decision tree of the risk assessment process flow that defines the Federation Assurance Levels for the communities of users and transactions in Step 1.[^19]  

{% include alert-info.html heading="Key Point" content="The DIRA provides a minimum level and does not change established credentialing processes. For example, if a DIRA arrives at AAL2, agency leadership may decide to allow an AAL2 credential but it should not downgrade or alter an AAL3 credentialing process to AAL2." %}

## Step 3. Determine Steps to Meet Assurance Levels

Analyze available technology and solutions at your agency, determine if they are sufficient enough to meet the application needs, and identify what you need to implement. Use data and agency enterprise defined needs when choosing solutions, including:
- Number of users by community of users;
- User experience (UX) and usability (for non-organizational users (i.e., public, business, partner)); and
- Direct and indirect benefits to reuse enterprise-level chosen solutions, including consolidated support desks.

Your agency may determine alternatives to the NIST-recommended guidance for the assessed assurance levels based on:[^20]  
- Your mission,
- Your risk tolerance,
- Your existing business processes,
- Special considerations for certain populations,
- The availability of data that provides similar mitigations to those described in the Digital Identity Guidelines, or
- Other capabilities unique to the agency.

## Step 4. Finalize Digital Identity Acceptance Statement

Formalize the results of the assessment process with a Digital Identity Acceptance Statement (DIAS). A DIAS must include a minimum set of information about the risk assessment and the assessed and implemented assurance levels.[^21] 

An example of a [DIAS]({{site.baseurl}}/docs/playbook-dira-dias-template.docx){:target="_blank"}{:rel="noopener noreferrer"} is included in [Appendix B. Examples and Templates](#appendix-b-examples-and-templates).  

## Step 5. Reassess

A digital identity reassessment may be time-driven or event-driven and applies to a reassessment of the DIRA.

{% include alert-info.html heading="Key Point" content="Reassess digital identity risk annually or more often for higher impact categories and transactions. A time-based assessment drives alignment with modernization initiatives, changes to technology, and changes to policies." %}

If an event triggers a security impact analysis, an agency may perform a DIRA outside the normal continuous monitoring cycle. Significant changes requiring a digital identity reassessment include changes in:
- Core mission or business functions;
- Purpose or nature of a system;
- Risk environment;
- How information, including PII, is processed; or
- How information is processed, stored, or transmitted by the system.

# Agency Process Plays

This section introduces six plays for your agency to create efficient and consistent processes for a DIRA. 

## Play 1. Streamline Risk Management and Assessment Processes

The Risk Management Framework (RMF) forms the basis of your agency application Assessment and Authorization (A&A) lifecycle. A DIRA process integrates into the routine phases of the RMF to streamline processes and enables efficient reuse of application and agency resources. Figure 5 shows an alignment of this playbook’s example DIRA process steps with the RMF. 

<img src="{{site.baseurl}}/assets/playbooks/dira-rmf.png" alt="A graphic representation of the DIRA process. There are three concentric circles. Continuous Monitoring appears in the outer circle. The innermost circle contains five steps. Step 1 is Identify Users, Transactions, and Roles. Step 2 is Identify Risks and Assurance Levels. Step 3 is Determine steps to Meet Assurance Levels aligns with RMF Phase Implement Controls. Step 4 is Finalize digital identity assessment statement. Step 5 is Reassess." width="560" height="522">

<p align="center"><b>Figure 5: Example DIRA Process Steps in Risk Management Framework Phase</b></p>

Step 1 of the example DIRA process happens in the Categorize phase. When categorizing a system,[^22] application owners and security officers identify overall system data types and assign impact levels for each of the confidentiality, integrity, and availability security objectives.  

A Privacy Threshold Analysis (PTA) is typically included in this phase. The identification of the DIRA IALs, AALs, and FALs directly correlates to the collection of PII; who has access to what information; whether information is self-asserted or verified; and the risks of excessive identity proofing. 

{% include alert-info.html heading="Key Point" content="Align Step 1 in a DIRA process with the Categorize System phase of the Risk Management Framework." %}

Meanwhile, Step 4 of the example DIRA process aligns with the Assessment phase. The Digital Identity Acceptance Statement must include the IALs, AALs, and FALs where the application was assessed and the implementations made.  

## Play 2. Add Context for the Mission

Context is powerful when assessing risks, making agency risk decisions, and engaging across multi-disciplinary agency stakeholders. Standard and general government-wide policies set the foundation for many agency activities but are written for broad mission areas. Translate user types, transactions, DIRA impact levels, and risk statements into words that are applicable and useful to your agency. 

{% include alert-info.html heading="Key Point" content="Tailor context to your mission to support enterprise risk management discussions." %}

Table 4 provides examples of how agencies add agency-specific terms or context for user types, transactions, and impact levels. 

**Table 4: Example Definitions and Agency Context**

| Assessment Input | Generic Definition | Definition with Agency Context |
| ----------- | ------------ | ---------------------------------- |
| User Type | Organizational User | Employee or agency contractor with a federal agency email address (@agency.gov or @agency.mil) | 
| User Type | Non-Organizational User | Fiscal agent, grant beneficiary, veteran, healthcare worker, or public citizen | 
| Transaction | Export | Employee or agency contractors export data for use outside of the application | 
| Impact Level | Serious Injury or Death | Impact depends on whether the application provides access to law enforcement information that identifies a confidential person (i.e., improperly disclosing a confidential person’s identity puts them in physical danger) | 
| Impact Level | Harm to Agency Programs or Public Interests | Impact depends on the application’s function and its importance to agency operations | 

Table 5 provides an example of how two agencies apply context to Transactions and Impact Levels. 

**Table 5: Example Transactions and Impact Levels**

| Impact Category | Scope of Potential Risk | Agency Context: As a result of a wrong user accessing data in an application, … | User Type | Transaction Type | Agency Impact Definition |
| ----------- | ------------ | ---------------- | ----------- | ------------ | ------------------ |
| Personal Safety | Serious injury or death | Physical injury or death could occur | Organizational User | Employee or agency-contractor exports data for use outside of the system | Impact depends on whether the application provides access to law enforcement information that identifies a confidential informant (i.e., improperly disclosing a confidential criminal informant’s identity puts them in physical danger) |
| Harm to Agency Programs or Public Interests | Adverse effect on organizational operations | The agency’s mission essential functions is adversely impacted | Non-Organizational User | Individual retrieves tax information (PII) | Impact depends on the application’s function and its importance  to agency operations |

## Play 3. Use Templates 

It’s a best practice that agencies develop standardized templates to promote consistency in procedures for digital identity risk assessments. Example templates can be as simple as: 
-	Visual informational guides for what a DIRA is,
-	Informational guides on risks, 
-	Simple spreadsheets or digital surveys, and 
-	Digital Identity Acceptance Statements. 

[Appendix B. Examples and Templates](#appendix-b-examples-and-templates) contains a few example templates provided by agencies. 

## Play 4. Shortcut Decision Trees

All federal applications that perform digital transactions and require identity proofing or authentication require a Digital Identity Acceptance Statement, regardless of how the system is hosted. However, not all federal applications require the full example DIRA process and efforts.

Table 6 provides an example shortcut guide for determining whether to perform a full DIRA process based on application characteristics. IAL, AAL, and FAL levels in this table are examples. Applications must follow agency policies, which may be more stringent than the examples in this table.

**Table 6: DIRA Shortcut Guide**

| Application Characteristics | DIRA Required? | Minimum NIST SP 800-63 IAL, AAL, FAL Levels |
| ---------------------- | ------------ | ------------------ |
| The application has no external network connectivity, is physically isolated, and is located in a protected space. | No | N/A | 
| The application leverages the agency enterprise single sign on (SSO)/enterprise access manager for authentication of employees and contractors. | Yes | Requires proof of identity (IAL3).[^23]<br>Multi-factor authentication to agency application (AAL2) federation between agency applications (FAL2).<br>Additionally, requires affiliation as a federal employee or contractor. | 
| Data and other resources available are approved for public release, are intended to be freely shared, and public users aren’t required to create accounts to access this information.<br><br>Examples include:<br>● Agency primary websites (i.e., www.gsa.gov)<br>● Informational websites<br>● Open government APIs | No | Public users don’t create accounts or login. <br><br>Agency-affiliated privileged users with permissions to edit content still require higher IAL and a minimum AAL2 (two-factor). | 
| Data and other resources are intended for public release. Doesn’t include any controlled unclassified information, but allows public users to create accounts to better support the public user’s experience. | Yes | Doesn’t require proof of a real-life identity (IA 1).<br>Single or multi-factor authentication (AAL1).| 
| Allows public users to input and access their own personally identifiable information (PII) or protected health information (PHI) for informational purposes.  The information isn’t required to be verified. The application doesn’t allow public users to access anyone else’s PII or PHI. | Yes | Doesn’t require proof of a real-life identity (IAL1).<br> Multi-factor authentication (AAL2). | 

## Play 5. Leverage Existing Agency Tools

Leverage existing tools at your agency to automate and create repeatable and consistent DIRA processes. For example, one agency integrated the DIRA process into its Governance Risk and Compliance (GRC) tool. The agency was able to simplify integration with the Risk Management Framework (RMF) lifecycle and support the inclusion of the DIAS with other system artifacts. Agencies that use commercial GRC tools should consider integrating DIRAs into the workflows. 

## Play 6. Less Is More

A common assumption when building or buying applications for missions is that all users need accounts. Take the opportunity during the DIRA process to consider the application processes and functionality needed. Consider the mission, applications needs, and the two example questions below: 
1.	Do all users need accounts?  
2.	How many users are regularly _recurring returning_ users? 

Reconsider the business process carefully and validate the current and future designs using data on the returning users, transaction volumes, and privacy principles. 
-	Design the business process for the user to submit information _without requiring_ an account,
-	Limit the information required to create the account, and
-	Make most of the information requested optional.

{% include alert-info.html heading="Key Point" content="Some public, business, or partner users may only interact with the government process and application once a year or less.<br><br> Revisit your process and application, and allow users to complete the transaction once before opting in to create an account." %}

# Appendix A. Policy, Standards, and Guidance

This section provides links to the federal laws, policies, standards and other guidance that impact and shape DIRA implementations.  NIST also publishes useful [Frequently Asked Questions](https://pages.nist.gov/800-63-FAQ/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} for agencies, and [Implementation Resources](https://www.nist.gov/system/files/documents/2020/07/02/SP-800-63-3-Implementation-Resources_07012020.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} for solution developers. 

| Short Name | Full Name and Publication Date | 
| ----------------------------------- | ------------------------- | 
| NIST SP 800-63-3 | National Institute of Standards and Technology (NIST) Special Publication (SP) 800-63-3; [Digital Identity Guidelines](https://pages.nist.gov/800-63-3/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, June 22, 2017 |
| NIST SP 800-63-3A | National Institute of Standards and Technology (NIST) Special Publication (SP) 800-63-3A; [Digital Identity Guidelines: Enrollment and Identity Proofing](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63a.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, June 22, 2017 | 
| NIST SP 800-63-3B | National Institute of Standards and Technology (NIST) Special Publication (SP) 800-63-3B; [Digital Identity Guidelines: Authentication and Lifecycle Management](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63b.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, June 2017 | 
| NIST SP 800-63-3C | National Institute of Standards and Technology (NIST) Special Publication (SP) 800-63-3C; [Digital Identity Guidelines: Federation and Assertions](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63c.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, June 22, 2017| 
| FISMA | Federal Information Security Modernization Act of 2014, [44 U.S.C. § 3551 et seq., Public Law (P.L.) 113-283](https://www.congress.gov/bill/113th-congress/senate-bill/2521){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, December 8, 2014 | 
| HSPD-12 | Department of Homeland Security, Homeland Security Presidential Directive 12: [Policy for a Common Identification Standard for Federal Employees and Contractors](https://www.dhs.gov/homeland-security-presidential-directive-12){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, August 27, 2004 | 
| EO 13681 | Executive Order 13681, [Improving the Security of Consumer Financial Transactions](https://obamawhitehouse.archives.gov/the-press-office/2014/10/17/executive-order-improving-security-consumer-financial-transactions){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, October 2014 | 
| EO 13800 | Executive Order 13800, [Strengthening the Cybersecurity of Federal Networks and Critical Infrastructure]( https://irp.fas.org/offdocs/eo/eo-13800.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, May 2017 | 
| A-130 | OMB Circular A-130, [Managing Federal Information as a Strategic Resource](https://obamawhitehouse.archives.gov/sites/default/files/omb/assets/OMB/circulars/a130/a130revised.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, July 28, 2016 | 
| A-108 | OMB Circular A-108, [Federal Agency Responsibilities for Review, Reporting, and Publication under the Privacy Act](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A108/omb_circular_a-108.pdf?msclkid=45a0e506c7f611ecad177ad1de1c33fa){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, December 2016 | 
| A-123 | OMB Circular A-123, [Management’s Responsibility for Enterprise Risk Management and Internal Control](https://obamawhitehouse.archives.gov/omb/circulars_a123_rev/?msclkid=f1499107c7f611ec96a4efc50dd955fb){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, July 15, 2016 | 
| M-19-17 | OMB M-19-17, [Enabling Mission Delivery through Improved Identity, Credential, and Access Management](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, May 21, 2019 | 
| FIPS 199 | NIST FIPS Publication 199, [Standards for Security Categorization of Federal Information and Information Systems](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.199.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, February 2004 | 
| NIST SP 800-37 | NIST Special Publication 800-37, Revision 2, [Risk Management Framework for Information Systems and Organizations: A System Life Cycle Approach for Security and Privacy](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-37r2.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, December 2018 | 
| NIST SP 800-53-4 | NIST Special Publication 800-53, Revision 5, [Security and Privacy Controls for Information Systems and Organizations](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r4.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, Updated September 2020 | 
| NIST SP 800-53A | NIST Special Publication 800-53A, Revision 5, [Assessing Security and Privacy Controls in Information Systems and Organizations](https://csrc.nist.gov/publications/detail/sp/800-53a/rev-5/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, Updated January 2022 | 
| NIST RMF Overview&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | NIST [Risk Management Framework Overview](https://csrc.nist.gov/projects/risk-management/about-rmf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, November 30, 2016| 

# Appendix B. Examples and Templates

This appendix provides examples and templates of existing resources to help establish or improve DIRA processes. It includes the following sections:

1. Decision Tree Examples
2. Process Flow Examples 
3. Digital Identity Acceptance Statement Example and Template

## 1. Decision Tree Examples

This section includes additional example risk assessment decision trees used by some agencies for the Digital Identity Risk Assessment for transactions. Original source decision trees are in NIST Special Publication 800-63-3 [Digital Identity Guidelines](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63-3.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, Section 6, Selecting Assurance Levels.  

<img src="{{site.baseurl}}/assets/playbooks/dira-ial-tree.png" alt="A decision tree to select an appropriate Identity Assurance Level (IAL) for each user community and transactions." width="560" height="735">

<p align="center"><b>Figure 6: Identity Assurance Level Decision Tree</b></p>

<img src="{{site.baseurl}}/assets/playbooks/dira-aal-tree.png" alt="A decision tree to select an appropriate Authenticator Assurance Level (AAL) for each user community and transactions." width="560" height="748">

<p align="center"><b>Figure 7: Authenticator Assurance Level Decision Tree</b></p>

<img src="{{site.baseurl}}/assets/playbooks/dira-fal-tree.png" alt="A decision tree to select an appropriate Federation Assurance Level (FAL) for each user community and transactions." width="560" height="758">

<p align="center"><b>Figure 8: Federation Assurance Level Decision Tree</b></p>

## 2. Process Flow Examples

This section includes additional example process flow diagrams used by some agencies for the Digital Identity Risk Assessment processes.  Choose and reuse any process flow that works best for your agency.

<img src="{{site.baseurl}}/assets/playbooks/dira-process-long.png" alt="A circular diagram of the digital identity risk assessment process. Step 1 is Determine User Type. Step 2 is Define Transactions. Step 3 is Determine Impact Level for Transactions. Step 4 is Determine Assurance Levels. Step 5 is Map Transactions to Roles. Step 6 is Implement the Technology. Step 7 is Validate Requirements. Step 8 is Perform Periodic Reassessments." width="560" height="554">

<p align="center"><b>Figure 9: Explains the DIRA Process from Data Collection to Ongoing Assessment</b></p>

<img src="{{site.baseurl}}/assets/playbooks/dira-process-arrow.png" alt="An arrow shaped graphic that depicts the six phases of the DIRA process flow. The first phase is Data Collection. The second phase is Analysis. The third phase is Review. The fourth phase is Implementation Determination. The fifth phase is Concurrence. The sixth phase is Ongoing Assessment. There is an arrow head pointing right on the right side of the sixth phase." width="560" height="315">

<p align="center"><b>Figure 10: Explains in a More Detailed Way the DIRA Process Flow from the Data Collection Phase to the Ongoing Assessment Phase</b></p>

<img src="{{site.baseurl}}/assets/playbooks/dira-process-arrow-chart.png" alt="A flowchart depicting 18 steps for performing a Digital Identity Risk Assessment." width="560" height="360">

<p align="center"><b>Figure 11: Explains a Six-Step Process of What is Required to Implement a DIRA</b></p>

## 3. Digital Identity Acceptance Statement Example Template

This [Digital Identity Acceptance Statement template]({{site.baseurl}}/docs/playbook-dira-dias-template.docx){:target="_blank"}{:rel="noopener noreferrer"} is provided as one sample for agencies.   

# Appendix C. NIST Special Publication 800-63-3, Requirements Traceability Matrix

This appendix includes both normative requirements and informative references from NIST SP 800-63-3 Digital Identity Guidelines. Only requirements related to the agency processes for digital identity risk assessments are included. The Playbook Consideration column includes comments on the standards statements and alignment to this playbook’s development. 

| Requirement | Section | Playbook Consideration |
| ----------- | ------------------------- | -------------- |
| _Applicability_:<br>Not all digital services require authentication or identity proofing.  However, this guidance applies to all such transactions for which digital identity or authentication are required, regardless of the constituency (i.e., citizens, business partners, government entities). | 2.1 | Supports the proposed process recommendations to independently assess the assurance levels by the community of users. |
| Additionally, federal agencies implementing these guidelines should adhere to their statutory responsibilities under the Federal Information Security Modernization Act (FISMA) of 2014, 44 U.S.C. § 3551 et seq., Public Law (P.L.) 113-283 [FISMA], and related NIST standards and guidelines. FISMA directs federal agencies to develop, document, and implement agency-wide programs to provide security for the information and systems that support the agency’s operations and assets. This includes the security authorization and accreditation (SA&A) of IT systems that support digital authentication.| 2.1 | Supports the proposed DIRA process step recommendations to align with the Risk Management Framework and SA&A of IT systems. |
| Requirements contained herein provide specific guidance related to digital identity risk that agency RPs shall apply while executing all relevant RMF lifecycle phases. | 5| Supports the proposed DIRA process step recommendations to align with the Risk Management Framework and SA&A of IT systems. |
| Agencies shall assess the risk of proofing, authentication, and federation errors separately to determine the required assurance level for each transaction. | 5.1 | Supports the proposed process recommendations to independently assess the assurance levels by the community of users and transactions. |
| Agencies shall develop a “Digital Identity Acceptance Statement” in accordance with SP 800-53A IA-1 a.1. See Section 5.5 for more detail on the necessary content of the Digital Identity Acceptance Statement.<br><br>The Acceptance Statement shall include at a minimum:<br>● Assessed xAL<br>● Implemented xAL<br>● Rationale, if the implemented xAL differs from the assessed xAL<br>● Comparability demonstration of compensating controls when the complete set of applicable SP 800-63 requirements are not implemented<br>● Rationale, if not accepting federated identities. | 5.1<br>5.5| Supports the proposed process step to standardize Digital Identity Acceptance Statements and the examples provided by agencies. |
| An agency RP shall select, based on risk, the following individual assurance levels:<br>IAL: The robustness of the identity proofing process to confidently determine the identity of an individual. IAL is selected to mitigate potential identity proofing errors.<br><br>AAL: The robustness of the authentication process itself, and the binding between an authenticator and a specific individual’s identifier. AAL is selected to mitigate potential authentication errors (i.e., a false claimant using a credential that is not rightfully theirs). <br><br>FAL: The robustness of the assertion protocol the federation uses to communicate authentication and attribute information (if applicable) to an RP. FAL is optional as not all digital systems will leverage federated identity architectures. FAL is selected to mitigate potential federation errors (an identity assertion is compromised). | 5.2 | Requirement. |
| Agencies shall assess the potential risks and identify measures to minimize their impact. | 5.3 | Requirement. |
| Each assurance level, IAL, AAL, and FAL (if accepting or asserting a federated identity) shall be evaluated separately. | 5.3.2 | Same as requirement in 5.1. |
| Agencies shall demonstrate comparability of any chosen alternative, to include any compensating controls, when the complete set of applicable SP 800-63 requirements is not implemented. | 5.4 | Supports the proposed process step to standardize Digital Identity Acceptance Statements and the examples provided by agencies. |
| Agencies shall not alter the assessed xAL based on agency capabilities. | 5.4 | Supports the proposed process step to standardize Digital Identity Acceptance Statements and the examples provided by agencies. |
| Agencies shall implement procedures to document both the justification for any departure from normative requirements and detail the compensating control(s) employed. | 5.4 | Supports the proposed process step to standardize Digital Identity Acceptance Statements and the examples provided by agencies. |
| In analyzing risks, agencies shall consider all of the expected direct and indirect results of an authentication failure, including the possibility that there will be more than one failure or harms to more than one person or organization.<br><br>The definitions of potential impacts contain some relative terms, like “serious” or “minor,” whose meaning will depend on context. The agency should consider the context and the nature of the persons or entities affected to decide the relative significance of these harms. Over time, the meaning of these terms will become more definite as agencies gain practical experience with these issues. The analysis of harms to agency programs or other public interests depends strongly on the context; the agency should consider these issues with care. | 6 | Supports the proposed play to add context when determining risk with application owners and business teams. |

# Appendix D. Updates to NIST Special Publication 800-63

In June 2017, NIST replaced the Electronic Authentication Guideline[^24] with the Digital Identity Guidelines.[^25] The new standard provides agencies increased security and privacy, more flexibility to meet their mission and constituent needs, and better alignment with digital identity best practices. It outlines the digital identity risk assessment methodology that federal agencies must implement. 

NIST’s Digital Identity Guidelines identify the implementation requirements for conducting a DIRA and enable modernized risk-driven approaches for digital identities. Figure 12 depicts updated content details.

<img src="{{site.baseurl}}/assets/playbooks/dira-800-63.png" alt="Figure 12 explains where the Digital Identity Guidelines information can be found." width="560" height="401">

<p align="center"><b>Figure 12: Digital Identity Guideline Information Locations</b></p>

## Why the Update to NIST Special Publication 800-63-3?

NIST Special Publication 800-63-3 was updated to do the following: 
-	Implement Executive Order 13681: Improving the Security of Consumer Financial Transactions[^26]  
-	Align with the current market
-	Promote innovation
-	Simplify and provide clearer guidance

## What Has Changed?

-	The DIRA process replaces the Electronic Authentication Risk Assessment process. 
-	There is a shift from levels of assurance (LOAs) to individual assurance levels (collectively known as xALs) for identity proofing, authentication, and federation.
-	The updated document introduces federation as a separate topic.

## Mix and Match Assurance Levels

The revised guidance provides individual assurance levels that can be mixed and matched, giving agencies the flexibility to deploy strong authentication without having to proof a user’s identity (i.e., if the collection of sensitive information is not required). The mix and match assurance levels allow opportunities for:
-	Greater flexibility, 
-	Greater user experience, 
-	Enhanced privacy, and 
-	Reduced risk.

# Footnotes

[^1]:	A digital service is any federal Information Technology (IT) system or application accessible over the public internet or agency intranet.
[^2]:	A Digital Identity Risk Assessment is a method of applying Digital Identity Risk Management required by OMB Memorandum 19-17: Enabling Mission Delivery through Improved Identity, Credential, and Access Management, and NIST Special Publication 800-63-3 Digital Identity Guidelines.
[^3]:	For more information, refer to NIST Special Publication 800-63-3 Digital Identity Guidelines.
[^4]:	NIST Special Publication 800-63-3 Digital Identity Guidelines, Frequently Asked Questions.
[^5]:	Pursuant to 0MB Circular A-130, "information system" means a discrete set of information resources organized for the collection, processing, maintenance, use, sharing, dissemination, or disposition of information. System and application are used synonymously throughout this playbook.
[^6]:	Refer to NIST Special Publication 800-63-3 Digital Identity Guidelines, Section 2.3, A Few Limitations.
[^7]:	The working group members determined Federation Assurance Level 3 was complex and not widely supported in commercial products and implementations. The working group decided the Federation Assurance Level 3 explanations were better served by agency technical exchanges or deferred to details included in NIST Special Publications. 
[^8]:	Federal Information Security Modernization Act of 2014, 44 U.S.C. § 3551 et seq., Public Law (P.L.) 113-283, December 8, 2014.
[^9]:	Refer to NIST Special Publication 800-63-3 Digital Identity Guidelines, Appendix A, Definitions and Abbreviations.
[^10]:	Personal data is personally identifiable information (PII). As defined by OMB Circular A-130, PII is information that can be used to distinguish or trace an individual’s identity, either alone or when combined with other information that is linked or linkable to a specific individual.
[^11]:	Agencies collecting identity information as part of identity proofing may be subject to specific retention policies in accordance with applicable laws, regulations, or policies, including any National Archives and Records Administration (NARA) records retention schedules.
[^12]:	Refer to NIST Special Publication 800-63-3A Digital Identity Guidelines, Enrollment and Identity Proofing, Section 4, Identity Assurance Level Requirements (page 5) for the detailed requirements of the identity proofing processes.
[^13]:	Additional decision trees are in NIST Special Publication 800-63-3 Digital Identity Guidelines, Section 6, Selecting Assurance Levels. 
[^14]:	Examples only. Refer to NIST Special Publication 800-63-3B Digital Identity Guidelines, Authentication and Lifecycle Management. Section 4 Authenticator Assurance Level requirements.
[^15]:	Refer to NIST Special Publication 800-63-3B Digital Identity Guidelines, Authentication and Lifecycle Management, Section 4, Authenticator Assurance Level requirements.
[^16]:	Additional decision trees can be found in NIST Special Publication 800-63-3 Digital Identity Guidelines, Section 6, Selecting Assurance Levels. This decision tree is another example used by federal agencies. 
[^17]:	See NIST Special Publication 800-63-3 Digital Identity Guidelines, Section 7, Federation Considerations for additional federation outcomes to consider.
[^18]:	Refer to NIST Special Publication 800-63-3C Digital Identity Guidelines, Federation and Assertions for the detailed requirements on Federation, Assertions, and Federation Assurance Level implementations.
[^19]:	Additional decision trees can be found in NIST Special Publication 800-63-3 Digital Identity Guidelines, Section 6 Selecting Assurance Levels. This decision tree is another example used by federal agencies.
[^20]:	NIST Special Publication 800-63-3 Digital Identity Guidelines, Section 5.4, Risk Acceptance and Compensating Controls.
[^21]:	NIST Special Publication 800-63-3 Digital Identity Guidelines, Section 5.5, Digital Identity Acceptance Statement.
[^22]:	Federal Information Processing Standards Publication 199 (FIPS 199) Standards for Security Categorization of Federal Information and Information Systems, Section 3, Categorization of Information and Information Systems (page 1). 
[^23]:	Satisfied by the full PIV issuance processes, in accordance with government-wide policy and Office of Personnel Management (OPM) credentialing requirements for federal executive branch employees and contractors.
[^24]:	NIST Special Publication 800-63-2 Electronic Authentication Guideline.
[^25]:	NIST Special Publication 800-63-3 Digital Identity Guidelines.
[^26]:	Executive Order 13681, Improving the Security of Consumer Financial Transactions.



