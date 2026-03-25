---
layout: page
collection: playbooks
title: Digital Worker Identity Playbook
permalink: /playbooks/dw/
description: The Digital Worker Identity Playbook is a practical guide for managing digital worker identities.
sidenav: playbooks
sticky_sidenav: true

version: 1.3
pubdate: April 2025

subnav:
  - text: Executive Summary
    href: '#executive-summary'
  - text: Key Terms
    href: '#key-terms'
  - text: Disclaimer
    href: '#disclaimer'
  - text: A Four-Step Process for Digital Worker Identity Management
    href: '#a-four-step-process-for-digital-worker-identity-management'
  - text: Step 1. Determine the Impact
    href: '#step-1-determine-the-impact'
  - text: Step 2. Create an Identity
    href: '#step-2-create-an-identity'
  - text: Step 3. Provision an Identity
    href: '#step-3-provision-an-identity'
  - text: Step 4. Maintain and Deprovision Identity
    href: '#step-4-maintain-and-deprovision-identity'
  - text: Digital Worker Identity Management Checklist
    href: '#digital-worker-identity-management-checklist'
  - text: Conclusion
    href: '#conclusion'
  - text: Appendix A. Digital Worker Impact Evaluation Factors
    href: '#appendix-a-digital-worker-impact-evaluation-factors'
  - text: Appendix B. Critical Case Study
    href: '#appendix-b-critical-case-study'
  - text: Appendix C. Low Case Study
    href: '#appendix-c-low-case-study'
  - text: Footnotes
    href: '#footnotes'

---

<img src="{{site.baseurl}}/assets/logo/logo-gsa.png" width="64" height="64" align="left" alt="U.S. General Services Administration Logo">
<img src="{{site.baseurl}}/assets/logo/logo-cio-round.png" width="64" height="64" align="left" alt="U.S. Federal Chief Information Officer Council Logo"><br><br><br>

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
      <caption>Digital Worker Identity version table</caption>
      <thead>
      <tr>
        <th scope='col'>Version</th>
        <th scope='col'>Author</th>
        <th scope='col'>Date</th>
        <th scope='col'>Changes/Updates</th>
      </tr>
      </thead>
      <tr>
        <th scope='row'>1.3</th>
        <td>OGP Identity Assurance and Trust Access Division</td>
        <td>April 2025</td>
        <td>Updated the Digital Worker Identity Management Process, Formatting (Table of Contents/Titles)</td>
      </tr>
      <tr>
        <th scope='row'>1.2</th>
        <td>OGP Identity Assurance and Trust Access Division</td>
        <td>December 2022</td>
        <td>Fixed Acknowledgment (US) word usage</td>
      </tr>
      <tr>
        <th scope='row'>1.1</th>
        <td>OGP Identity Assurance and Trust Access Division</td>
        <td>November 2021</td>
        <td>Renumbered Tables</td>
      </tr>
      <tr>
        <th scope='row'>1.0</th>
        <td>OGP Identity Assurance and Trust Access Division</td>
        <td>January 2021</td>
        <td>Initial Draft</td>
      </tr>
    </table>
  </div>
</div>

## Executive Summary

The Digital Worker Identity Playbook is a practical guide to manage digital worker identities. This playbook helps federal agency ICAM programs as well as CIO and CISO offices define the risk of and a process for digital worker identity management. A *digital worker* is an automated, software-based tool, application, or agent that performs a business task or process similar to a human user and uses Artificial Intelligence (AI) or other autonomous decision-making capabilities. Office of Management and Budget (OMB) Memorandum M-19-17 requires agencies to ensure the digital identity of automated technologies are “distinguishable, auditable, and consistently managed.” However, agencies face implementation challenges when establishing identities for digital workers. Most often, they attempt to use human worker processes, which can hinder digital worker creation or access. 

Common challenges include:

- Human worker identity attributes may not apply to a digital worker. For example, some agencies create ad hoc digital worker identity attributes based on requirements for human users, some of which do not apply (e.g., work station location). Conversely, the scope of identity attributes required for human users may not include some attributes that are needed for digital workers (e.g., custodian names).
- Lack of ability to provision individual user accounts to a digital worker. Some agencies allow digital workers to run on service, system, or group accounts. This practice arises because implementation teams are either unable or not authorized to have individual user accounts assigned to a digital worker. However, digital workers are less distinguishable from other non-person entity types when they use service, system, or group accounts rather than user accounts.

Agencies should tailor this playbook to fit their mission, business, technology, and security needs and integrate into enterprise identity management policies.

Federal agencies use digital workers to automate processes, increase efficiencies, and discover insights from large volumes of data. Digital workers may interact with or use sensitive information to perform unattended, high-risk tasks that may critically impact an agency’s mission. Agencies usually leverage existing, human-based processes to create a digital worker identity, but doing so may hinder a digital worker’s access or success. This playbook addresses the challenges in determining digital worker risk and outlines a process to establish a digital worker identity.

This playbook is iterative, and agencies are encouraged to collaborate, share best practices, and share lessons learned. Federal employees may consider joining a relevant committee or community of practice to learn and engage in digital worker identity management.

- [Identity, Credential, and Access Management subcommittee (ICAMSC)](https://community.max.gov/pages/viewpage.action?pageId=234815732){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
- [Robotic Process Automation Community of Practice](https://www.gsa.gov/technology/government-it-initiatives/federal-automation-community-of-practice?_gl=1%2Ajugxx6%2A_ga%2AODU1MTQ0OTU2LjE3NzEzNDYxNzQ.%2A_ga_HBYXWFP794%2AczE3NzMxNDg5NTQkbzEkZzAkdDE3NzMxNDg5NTQkajYwJGwwJGgw){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
- [Artificial Intelligence Community of Practice](https://www.gsa.gov/technology/government-it-initiatives/artificial-intelligence){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}


## Key Terms

This document uses the following key terms:

- **Digital Worker ** - An automated, software-based tool, application, or agent that performs a business task or process similar to a human user and uses AI or other autonomous decision-making capabilities.[^1]

The list below includes the most common types of digital workers.

- **Artificial Intelligence (AI)** - A computer system’s ability to make autonomous decisions or perform tasks, traditionally requiring human intelligence.
- **Chatbot ** - A software tool that interacts with a human user to provide a service, such as retrieving data, answering a question, or directing the user to a resource.
- **Machine Learning (ML)** - The process of teaching computers to learn from data and perform tasks with minimal direct instruction or programming on how to achieve the desired outcome.

## Disclaimer

The General Services Administration Office of Government-wide Policy developed this playbook with input from federal IT practitioners. This document should not be interpreted as official policy or mandated action, and it does not provide authoritative definitions for IT terms. Instead, this playbook supplements existing federal IT policies and builds on OMB Memorandum M-19-17[^2], Enabling Mission Delivery Through Improved Identity, Credential, and Access Management and existing federal identity guidance and playbooks. Subject areas with intersecting scope, such as the ethical use and development of digital workers, are considered only to the extent that they relate to digital identity management and credentialing for digital workers. Specific security control implementations are outside the scope of this playbook, as are any elements of data protection requirements and the suitability process for a digital worker sponsor and custodian.

## A Four-Step Process for Digital Worker Identity Management 

The four-step process depicted in Figure 1 is a structured, iterative approach with discrete actions to create a digital worker identity management process. CIO and CISO offices, the intended audience of this playbook, should use its contents to write, update, or enhance existing enterprise identity management policies. Agencies are encouraged to tailor these steps to meet their organizational structures, unique requirements, and mission needs.

**Figure 1: A Four-Step Process for Digital Worker Identity Management**

![A Four-Step Process for Digital Worker Identity Management]({{site.baseurl}}/assets/playbooks/dwi/dwi-figure-1.jpeg)

[Step 1. Determine the Impact](#step-1-determine-the-impact): Consider the potential impacts, if any, when deciding whether to establish a digital worker identity. Much like a human worker, a digital worker should undergo a vetting process before being granted network or application access. Not all digital workers may require a unique identity. Work with the agency’s Identity, Credential, and Access Management (ICAM) governance structure to:

- Create or expand the agency ICAM governance structure and policies for digital worker identity management oversight.
- Score risk using the Digital Worker Impact Assessment.
- Identify a digital worker adverse impact level.[^3]

The Digital Worker Impact Evaluation Matrix (Table 1) is a scoring tool. It uses six factors to score the risk of a digital worker’s scope and access. Agencies can use the risk score to determine an overall adverse impact level.

{% include alert-success.html heading="Key Point" content="Agencies may decide that digital workers with low adverse impact levels do not require a digital identity. If an agency’s policy demands that all digital workers require a digital identity, they should follow the Moderate level process" %}

[Step 2. Create an Identity](#step-2-create-an-identity){:class="usa-link"}: Ensure the created identity complies with agency ICAM policies. Assign the digital worker a sponsor and a custodian who maintain the digital worker processes. The sponsorship process creates and assigns digital worker oversight roles and responsibilities for a sponsor and a custodian. After appointing a sponsor and a custodian, follow security best practices when validating a digital worker level of access. Best practices include employing least privilege, separation of duties, and regular access recertification, similar to human workers.

[Step 3. Provision an Identity](#step-3-provision-an-identity){:class="usa-link"}: Assign the digital worker an identity in the agency enterprise identity management systems. After appointing both a sponsor and custodian and validating access, capture the appropriate data elements in the digital worker identity record. These data elements enable the agency to appropriately catalog and monitor digital workers throughout the identity lifecycle.

[Step 4. Maintain and Deprovision Identity:](#step-4-maintain-and-deprovision-identity){:class="usa-link"} Continuously manage the digital worker's identity by ensuring up-to-date record-keeping and adherence to ICAM governance policies throughout its lifecycle. Regularly review and update the digital worker’s access levels to align with their role and to maintain security standards, including the principle of least privilege. Conduct periodic recertifications to verify whether the assigned access is still necessary and identify any potential discrepancies. In the event a digital worker's function is no longer required, follow the proper procedures to deprovision its identity, ensuring that all access is completely revoked, and the identity is appropriately archived. This process safeguards the integrity and security of the agency’s network and applications by preventing unauthorized access through obsolete digital identities. Properly maintaining and deprovisioning digital worker identities help mitigate risks and ensure compliance with the agency’s security policies.

This playbook should aid agencies in integrating digital worker identity management processes into existing enterprise identity management policies.

## Step 1. Determine the Impact

**Figure 2: Step 1 - Determine the Impact**

![Figure 2: Step 1 - Determine the Impact]({{site.baseurl}}/assets/playbooks/dwi/dwi-figure-2.jpeg)

Ensure digital worker identity management has proper governance, score the function of the digital worker across six categories, and then use the risk score to arrive at an adverse impact level. For this step, use the Digital Worker Impact Evaluation Matrix presented in Table 1.

### 1.1 Ensure Proper Oversight

The ICAM governance structure ensures enterprise identity management policies are updated to include digital worker management and use. For ICAM oversight and program management examples, see the [ICAM Program Management Playbook]({{site.baseurl}}/university/pm/#program-governance-and-leadership){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link"}.

**Update the agency enterprise identity management policies to include digital worker identity management.**

<table class="usa-table">
<thead>
  <tr>
    <th style="vertical-align:top;">Governance Collaboration Example</th>
    <td style="background-color:rgb(223 225 226);">Before creating and provisioning a digital worker, the agency ICAM governance structure can collaborate with Information System Security Officers on digital worker identity management. Collaboration may include: <ul><li>Digital worker security and non-functional requirements verification</li><li>Security and privacy assessments</li><li>Executable, vulnerability and other scans</li><li>Digital worker logic and decision-making design documents</li></ul></td>
  </tr>
</thead>
</table>


### 1.2 Score Risk Impact

Risk impact requires calculation of a risk score across six factors, based on worker autonomy, content handled, type of access, and privileges required.

Each factor has an associated score, and the sum of these six-factor scores is the overall impact score. If multiple criteria within a factor apply to a digital worker, agencies should select the criterion with the highest score.

**Table 1: Digital Worker Impact Evaluation Matrix** [^4] 

| Score each factor based on the most applicable scenario |   |
| ----- | :---: |
| Factor 1 - Is the digital worker attended or unattended? | Score |
| ● Attended | 0 |
| ● Unattended | 10 |
| Factor 2 - What is the highest level of data access by the digital worker? |   |
| ● Data available to the public (either without a user account or with unvetted user account) | 0 |
| ● Agency operational data, controlled unclassified information (CUI), or data on individuals in low volumes. Does not contain personally identifiable information (PII) or personal health information (PHI). | 5 |
| ● PII and/or PHI | 55 |
| ● Agency critical operational data or data that could impact life, health, or safety of individuals/systems relied on for health and safety; or very high volumes of agency operational data | 90 |
| Factor 3 - Does the digital worker have access to internal and/or external networks? |   |
| ● No internal intranet or external Internet connection | 0 |
| ● Either internal intranet access only OR external Internet access (not both) | 5 |
| ● Internal and external network access (i.e., Internet and intranet) | 10 |
| Factor 4 - What is the impact of the digital worker output? |   |
| ● Output impacts general internal business operations, but not critical processes or decisions | 5 |
| ● Output impacts outside organizations in general business operations or public reporting (e.g., public-facing websites or chatbots), but not critical processes or decisions | 25 |
| ● Output impacts mission-critical organization operations of the agency or other organizations, health or safety of individuals, national economic stability, national security, critical infrastructure, or similarly consequential operations | 90 |
| Factor 5 - What type of system account privileges does the digital worker require? |   |
| ● No system accounts | 0 |
| ● Standard system account(s) (roles limited by the business function) | 10 |
| ● System admin account (privileged access) | 35 |
| ● Multiple system admin accounts (multiple privileged access roles) | 40 |
| Factor 6 - Does the digital worker act on its own insights? |   |
| ● Digital worker develops insights, but does not act on these insights | 0 |
| ● Digital worker develops insights and acts on the insights after human review | 5 |
| ● Digital worker develops insights and acts on the insights without prior human review or approval | 10 |

### 1.3 Determine Adverse Impact Level

The adverse impact level is the potential magnitude of harm a digital worker can cause to the organization, assets, individuals, other organizations, and U.S. economic and national security interests. Specific impacts include:

- Unauthorized disclosure
- Change or destruction of information
- Harm or endangerment of human life
- Loss of access to information systems
- Damage to high-value assets

The four adverse impact levels represent a different scale of harm a digital worker may cause.

1. Low
2. Moderate
3. High
4. Critical

{% include alert-success.html heading="Key Point" content="The Potential Adverse Impact Levels derive from National Institute of Standards and Technology (NIST) Special Publication 800-30 and are recommendations. Agencies may adjust or tailor the levels to fit their individual risk levels or descriptions." %}

**Table 2: Potential Adverse Impact Levels**

| Impact Score | Potential Adverse Impact | Description |
| :---: | :---: | ----- |
| 0-35 | Low | Effects of an error or accident are minimal, resulting in negligible, if any, impacts on organizational operations, finances, assets, individuals, other organizations, or the nation. |
| 36-55 | Moderate | Effects of an error or accident are limited and may result in minor or temporary impact on organizational missions/business functions, organizational assets, or the nation. Effects include increased difficulty in performing business operations in a timely manner, with sufficient confidence, or within planned resource constraints; minor damage to agency image, reputation, or trust; minor financial loss to the agency or other organizations; and/or noncompliance with applicable laws or regulations. |
| 56-90 | High | Effects of an error or accident are wide-ranging and could result in serious or long-term impact on organizational missions/business functions, organizational assets, or the nation. Effects include significant financial losses for the agency; substantially reduced capacity to conduct mission-critical business; loss of PII, Business Identifiable Information, or PHI; and/or damage to agency image or reputation. |
| 91+ | Critical | Effects of an error or accident are extensive and will have severe or catastrophic impact on organizational missions/business functions, assets, or the nation. Effects include major financial losses for the agency or other organizations, loss of government continuity of operations or ability to conduct mission-critical business, life-threatening injury or loss of life, and/or harm to national security. |

## Step 2. Create an Identity

**Figure 3: Step 2 - Create an Identity**

![Figure 3: Step 2 - Create an Identity]({{site.baseurl}}/assets/playbooks/dwi/dwi-figure-3.jpeg)

Once your agency has determined the digital worker’s level of potential adverse impact, a digital worker identity is created, if needed. The identity process includes sponsorship and validation activities based on the adverse impact level from Step 1.

### 2.1 Assign a Sponsor and Custodian

The sponsorship process allows agencies to assign specific roles and responsibilities for oversight of digital workers. The agency’s ICAM governance structure ensures the sponsorship process actions are completed; however, it is up to the individual agencies to define how to assign a sponsor and custodian.

**Table 3. Sponsor and Custodian Responsibilities**

| Role | Description | Responsibilities |
| :---: | ----- | ----- |
| Sponsor | ● Responsible for digital worker compliance; and ● A federal government employee. | ● Assign roles and responsibilities to govern the digital worker such as a primary and backup custodian; ● Field digital worker inquiries from agency or other government entity leaders; and ● Oversee who has access to the digital worker. |
| Custodian | ● Responsible for digital worker day-to-day operational management; and ● A federal government employee or contractor. | ● Hold a comparable level of access as the digital worker; ● Complete initial and routine training in digital worker management and security; ● Rotate digital worker password or authenticators; ● Maintain digital worker access; ● Oversee retraining or tuning of an underlying model; and ● Track and monitor digital worker data input and output. |

**Industry Best Practice**

Agencies should periodically assess recertification or access reviews if access privileges are still needed to complete a task and a minimum recommendation is required to verify and validate access. Table 4 presents recommended intervals for sponsor and custodian acknowledgment. They represent minimum acceptable standards. 

Agencies may adjust recertification frequency, but should meet or exceed the recommended intervals. When certifying human access to IT platforms, specific systems and applications may impact the frequency of necessary certifications. Agencies should assess the platforms that digital workers access and use this knowledge to help evaluate certification frequency.

{% include alert-success.html heading="Key Point" content="Agencies may decide that digital workers with low adverse impact levels do not require a digital identity. If an agency’s policy demands that all digital workers have a digital identity, they should follow the Moderate level process." %}

**Table 4: Sponsorship (SP) Process** 



|  ID [^5] | Action    | Low | Moderate | High | Critical |
| :---: | ----- | :---: | :---: | :---: | :---: |
| SP-1 | Document a business need for the digital worker. | N/A | ✓ | ✓ | ✓ |
| SP-2 | Assign an organizational sponsor for the digital worker. | N/A | ✓ | ✓ | ✓ Suggested CIO, CISO, or equivalent |
| SP-3 | Have sponsor acknowledge responsibility for the digital worker on an initial and routine basis. | N/A | ✓ Recertify sponsor annually | ✓ Recertify sponsor annually | ✓ Recertify sponsor every six months |
| SP-4 | Have the sponsor assign a custodian for the digital worker. | N/A | ✓ | ✓ | ✓ |
| SP-5 | Have the sponsor notify the custodian of their responsibility. | N/A | ✓ | ✓ | ✓ |
| SP-6 | Confirm the custodian acknowledges responsibility for the digital worker on an initial and routine basis. | N/A | ✓ Recertify custodian annually | ✓ Recertify custodian annually | ✓ Recertify custodian every six months |

### 2.2 Enhanced Authentication Requirements 

**_NIST 800-63-B AUTHENTICATION COMPLIANCE:_**
*   Digital worker authentication SHALL align with Authentication Assurance Level (AAL) framework
*   Authenticator selection based on adverse impact level and threat assessment
*   Mandatory phishing-resistant authentication for High/Critical impact digital workers

**Digital Worker Authentication Assurance Levels:**

**AAL1 Requirements (Low Impact: 0-35):**
*   Single-factor or multi-factor authentication permitted
*   Password-based authentication with complexity requirements
*   Software-based OTP or push notification authenticators
*   Certificate-based authentication for service accounts

**AAL2 Requirements (Moderate Impact: 36-55):**
*   MANDATORY: Multi-factor authentication required
*   Hardware or software cryptographic authenticators
*   Certificate-based authentication with private key protection
*   Biometric activation factors permitted for multi-factor

**AAL3 Requirements (High/Critical Impact: 56+):**
*   MANDATORY: Phishing-resistant authentication required
*   Hardware cryptographic authenticators with non-exportable keys
*   Certificate-based authentication in hardware security modules
*   Cryptographic authentication protocols only

**Digital Worker Authenticator Lifecycle Management:**

**Authenticator Binding Requirements:**
Organizations SHALL ensure:
*   ☐ Cryptographic binding between authenticator and digital worker account
*   ☐ Authenticator registration includes sponsor/custodian verification
*   ☐ Unique authenticator assignment (no shared service account authenticators)
*   ☐ Verification of authenticator possession during binding process

**Rotation and Renewal Procedures:**

| Authenticator Type | Rotation Frequency | Renewal Authority |
| :---: | :---: | :---: |
| Password/PIN | 90 days (High/Critical), 180 days (Moderate) | Custodian with sponsor approval |
| Cryptographic Keys | Annually or on compromise | CSP with documented justification |
| Digital Certificates | Per certificate lifetime (max 3 years) | PKI authority with audit trail |
| Hardware Tokens | 5 years or on failure | Procurement with security review |

**Authenticator Compromise Response:**
1.  Immediate Revocation: Suspend compromised authenticator within 4 hours
2.  Impact Assessment: Evaluate scope of potential unauthorized access
3.  Incident Documentation: Record compromise details and response actions
4.  Re-authentication: Issue replacement authenticator with enhanced verification
5.  Monitoring Enhancement: Increase surveillance for affected digital worker

**Phishing-Resistant Implementation:**
For High/Critical impact digital workers, organizations SHALL implement:
*   FIDO2/WebAuthn cryptographic authenticators
*   PKI-based certificate authentication
*   Hardware security module integration
*   Cryptographic protocol authentication only (no knowledge-based factors)

See Section [Federation Requirements] for cross-domain authenticator acceptance procedures.

## Step 3. Provision an Identity

**Figure 4: Step 3 - Provision an Identity**

![Figure 4: Step 3 - Provision an Identity]({{site.baseurl}}/assets/playbooks/dwi/dwi-figure-4.jpeg)

Capture the appropriate digital worker data elements and store these attributes in the agency Identity Management System (IDMS) or other systems.

### 3.1 Capture and Store Identity Management Data Elements

*Identity management system data elements* are identification and sponsorship elements. They include information to uniquely identify a digital worker or contact information when in need of more details. Agencies usually store identity management data elements in an IDMS or directory. Agencies should require data element storage for any digital worker with a unique identity regardless of adverse impact level. Table 6 provides guidance and recommended data fields for capturing the necessary digital worker identity elements.

**Table 6: Identity Management System Data Fields**

|    ID    | IDMS Field Name | Field Type | Additional Guidance |
| :---: | :---: | ----- | ----- |
| DF-1 | Digital Worker *(new field)* | Boolean *(e.g., Checkbox, True/False, Yes/No, etc.)* | *Denote if this is (Yes/True) or is not (No/False) a digital worker.* |
| DF-2 | Agency Unique User ID *(existing field)* | Text *Recommend using “DW” or other uniqueness element followed by the identifier based on agency naming conventions.* | *Use a distinguishing and standard naming convention for digital workers. This is not a card holder unique identifier (CHUID) or related to PIV.* |
| DF-3 | First Name and Last Name *(existing fields)* | Text *First name: group function Last name: “DW” followed by a numerical value* | *Use agency naming convention if IDMS requires first and last name. The first name field should be completed with the group function (e.g., Technology Division, CFO) and the last name field should be completed with “DW” followed by a numerical value corresponding with the sequential order in which the digital worker was built within the associated group function.* |
| DF-4 | Digital Worker Sponsor Name *(new field[s])* | Text *Recommend the individual’s full name (generally first and last name)* | *Specify the sponsor of the digital worker.* |
| DF-5 | Digital Worker Custodian Name *(new field[s])* | Text *Recommend the individual’s full name (generally first and last name)* | *Specify the custodian of the digital worker.* |
| DF-6 | Digital Worker Description *(optional new field)* | Text (250) *Recommend including a brief description of the digital worker (e.g., the type of AI used, the purpose, and actions of the digital worker)* | *Provide a short description of what the digital worker does and the type of digital technology used.* |
| DF-7 | Responsible Organization *(optional new field)* | Text *Include the name of the organization according to the official agency organizational chart* | *Specify the name of the responsible agency organization or group.* |

### 3.2 Capture and Store Identity Governance Data Elements

*Identity governance data elements* validate and recertify access. They include information used to report on digital worker access and include information on:

- Acknowledgment date
- Recertification date
- Adverse impact level
- Other completion or acknowledgment dates

Agencies may store and track identity governance data elements in an existing system like an identity governance or directory management tool. The agency should develop an appropriate method or process to track these elements if one does not exist.

**Table 7: Identity Governance Data Elements**

|   ID  | Data Element | Additional Guidance |
| :---: | :---: | ----- |
| DF-8 | Digital Worker Sponsor Date of Last Acknowledgment | *Specify the date the sponsor last acknowledged responsibility for the digital worker. Recommend including the date in the format specified by agency guidelines (e.g., 01/01/2020).* |
| DF-9 | Digital Worker Date of Sponsor Acknowledgment Recertification *(optional)* | *Track when the sponsor acknowledgment must be recertified. It can be tracked as a formula based on the last acknowledgment date and adverse impact level requirements, or a format and method specified by agency guidelines.* |
| DF-10 | Level of Potential Adverse Impact | *Specify the level of potential adverse impact as determined using the methodology in section 3.2 of this document. Limited response (e.g., “Low,” “Moderate,” “High,” or “Critical”).* |
| DF-11 | Digital Worker Date of Last Custodian Acknowledgment | *Specify the date the custodian last acknowledged responsibility for the digital worker. Recommend including the date in the format specified by agency guidelines (e.g., 01/01/2020).* |
| DF-12 | Digital Worker Date of Custodian Acknowledgment Recertification *(optional)* | *Track when the custodian acknowledgment must be recertified. It can be tracked as a formula based on the last acknowledgment date and adverse impact level requirements, or a format and method specified by agency guidelines.* |
| DF-13 | Approved Source Internet Protocol (IP) Address Range *(only for High and Critical)* | *Specify the range of source IP addresses on which the digital worker may operate.* |
| DF-14 | Code Review Completion Date *(optional)* | *Specify the code review completion date (refer to VD-3 for more details). Recommend including the date in the format specified by agency guidelines (e.g., 01/01/2020).* |
| DF-15 | Ethics Review Completion Date | *Specify the digital worker ethics review completion date (refer to VD-4 for more details). Recommend including the date in the format specified by agency guidelines (e.g., 01/01/2020).* |
| DF-16 | Next Ethics Review Date *(optional)* | *Track when the next ethics review date must be conducted. It can be tracked as a formula based on the last ethics review date and adverse impact level requirements, or a format and method specified by agency guidelines.* |
| DF-17 | Digital Worker Bias Review Completion Date | *Specify the digital worker bias review completion date (refer to VD-5 for more details). Recommend including the date in the format specified by agency guidelines (e.g., 01/01/2020).* |
| DF-18 | Next Bias Review Date *(optional)* | *Track when the next bias review date must be conducted. It can be tracked as a formula based on the last bias review date and adverse impact level requirements, or a format and method specified by agency guidelines.* |


## Step 4. Maintain and Deprovision Identity

**Figure 5: Step 4 - Maintain and Deprovision Identity**

![Figure 5: Step 4 - Maintain and Deprovision Identity]({{site.baseurl}}/assets/playbooks/dwi/dwi-figure-5.jpeg)

### 4.1 Continuous Behavioral Monitoring

Continuous behavioral monitoring ensures that digital workers operate within expected parameters and do not deviate from their intended functions, potentially causing adverse impacts. It involves regular assessment and review of activities to detect any anomalies or unauthorized behaviors. Below are the necessary actions and key points for continuous monitoring:

**Regular Monitoring:**

- Establish continuous monitoring procedures for the digital worker to ensure it behaves as expected.  
- Use automated monitoring tools that provide real-time alerts for unusual activities or deviations from normal operations.  
- Ensure that these tools log and audit digital worker activities to identify security incidents or compliance issues.

**Event and Incident Response:**

- Develop a clear incident response plan that includes steps for addressing and mitigating incidents involving digital workers.  
- Define roles and responsibilities for responding to incidents, including notifying relevant personnel and stakeholders.  
- Conduct regular drills and exercises to prepare for potential incidents involving digital workers.

**Periodic Reviews:**

- Schedule regular reviews of the digital worker’s performance and compliance with set policies.  
- Include checks for code integrity, ethics, and bias as specified by validation actions such as VD-3 (code review), VD-4 (ethics review), and VD-5 (bias review).  
- Ensure that the digital worker’s access levels and roles are reviewed periodically (VD-1 and VD-2) to maintain least privilege and appropriate separation of duties.

**Recertification:**

- Recertify sponsor and custodian acknowledgments at intervals specified earlier: annually for Moderate and High levels, and every six months for Critical levels (VD-6 and VD-7).  
- Validate that the sponsor and custodian adhere to their responsibilities and that their recertification dates are tracked and up-to-date (DF-8, DF-9, DF-11, DF-12).  
  
{% include alert-success.html heading="Key Point" content="Integrate these continuous monitoring activities into existing agency monitoring infrastructures to ensure they are performed seamlessly and consistently alongside other IT operations." %}

**Table 8: Continuous Monitoring Process**

| ID | Action | Low  | Moderate | High | Critical |
| :---: | :---: | :---: | :---: | :---: | :---: |
| CM-1 | Establish continuous monitoring procedures |  |  |  |  |
| CM-2 | Use automated monitoring tools for real-time alerts |  |  |  |  |
| CM-3 | Develop a clear incident response plan |  |  |  |  |
| CM-4 | Define roles and responsibilities for incident response |  |  |  |  |
| CM-5 | Conduct regular drills and exercises for incident preparedness |  |  |  |  |
| CM-6 | Schedule regular reviews of performance, compliance, and access levels |  |  |  |  |
| CM-7 | Recertify sponsor acknowledgment |  |  |  |  |
| CM-8 | Recertify custodian acknowledgment |  |  |  |  |
| CM-9 | Integrate continuous monitoring into existing agency IT operations |  |  |  |  |

### 4.2 Deprovision Digital Worker

When a digital worker is no longer required or is being replaced, it should be deprovisioned to prevent unauthorized access and eliminate any potential security risks. Below are the steps for safe and effective deprovisioning:

**Assessment of Need:**

- Assess the ongoing need for the digital worker periodically. If the business need no longer exists or the digital worker is being updated/replaced, initiate the deprovisioning process (SP-1).

**Data Backup & Archival:**

- Backup critical data and configurations associated with the digital worker before deprovisioning.  
- Ensure archiving of relevant logs, configurations, operational data, and access records in compliance with agency data retention policies.

**Deactivation of Access:**

- Remove the digital worker’s access to all systems and networks to prevent any further activity.  
- Ensure that all associated system accounts are disabled or removed (depending on policy).

**Removal from Identity Management Systems:**

- Update the Identity Management System (IDMS) to reflect the deactivation of the digital worker.  
- Ensure that all identity and governance data elements related to the digital worker are updated to indicate deprovisioning.

**Notification of Stakeholders:**

- Notify all relevant stakeholders (sponsor, custodian, IT staff, and other impacted parties) of the deprovisioning action.  
- Document the deprovisioning process and maintain logs for auditing and reporting purposes.  
  
{% include alert-success.html heading="Key Point" content="A well-documented deprovisioning process increases security by ensuring that the digital worker’s access is properly audited and removed. This helps maintain compliance with agency policies and mitigates potential risks." %}

**Table 9: Deprovisioning Process**


| ID | Action | Low | Moderate | High | Critical |
| :---: | :---: | ----- | ----- | ----- | ----- |
| DV-1 | Assess the ongoing need for the digital worker |  |  |  |  |
| DV-2 | Backup critical data and configurations |  |  |  |  |
| DV-3 | Archive logs, configurations, operational data, and access records |  |  |  |  |
| DV-4 | Remove digital worker's access to all systems and networks |  |  |  |  |
| DV-5 | Disable or remove all associated system accounts |  |  |  |  |
| DV-6 | Update Identity Management System to indicate digital worker's deactivation |  |  |  |  |
| DV-7 | Notify relevant stakeholders of deprovisioning |  |  |  |  |
| DV-8 | Document deprovisioning process and maintain logs for auditing and reporting |  |  |  |  |

### 4.3 Digital Worker Incident Response and Redress Procedures

Organizations SHALL implement accessible redress processes for digital worker malfunctions, unauthorized actions, or access disputes per NIST 800-63 Section 3.6.

**Digital Worker Redress Framework:**

**Incident Categories Requiring Redress:**Bias/Discrimination: Digital worker demonstrates unfair treatment across user populations
4.  Privacy Violation: Digital worker processes personal information beyond authorized scope
5.  Security Breach: Digital worker credentials compromised or system infiltrated

**Redress Process Workflow:**
1.  Incident Detection: Automated monitoring or user/stakeholder report (24/7 capability)
2.  Initial Response: Acknowledge incident within 2 hours, begin containment procedures
3.  Impact Assessment: Evaluate scope and severity within 8 hours of detection
4.  Investigation: Comprehensive analysis with documented findings within 5 business days
5.  Resolution: Implement corrective actions with stakeholder notification
6.  Follow-up: Verify resolution effectiveness and update procedures as needed

**Human Oversight Requirements:**
Organizations SHALL ensure:
*   ☐ Technical Override Capability: Human operators can immediately halt digital worker operations
*   ☐ Expert Review Authority: Subject matter experts can challenge automated decisions
*   ☐ Escalation Procedures: Clear path to senior officials for complex or sensitive incidents
*   ☐ Alternative Service Options: Manual processes available during digital worker suspension

**Stakeholder Notification Procedures:**

| Incident Severity | Notification Timeline | Required Recipients |
| :---: | :---: | :---: |
| Critical (Life/Safety/Security) | Immediate (within 1 hour) | Sponsor, Custodian, CISO, Senior Officials |
| High (Financial/Privacy Impact) | Within 4 hours | Sponsor, Custodian, Privacy Officer, Legal |
| Moderate (Operational Impact) | Within 24 hours | Sponsor, Custodian, IT Operations |
| Low (Minor Malfunction) | Within 72 hours | Custodian, System Administrator |

**Documentation and Audit Trail:**
All redress activities SHALL include:
*   Detailed incident description and timeline
*   Root cause analysis and contributing factors
*   Corrective actions implemented and their effectiveness
*   Impact on affected stakeholders and systems
*   Lessons learned and process improvements
*   Legal and regulatory notification compliance

**Support Personnel Training:**
Organizations SHALL ensure redress support staff receive training on:
*   ☐ Digital worker technical capabilities and limitations
*   ☐ Incident response procedures and escalation protocols
*   ☐ Stakeholder communication and notification requirements
*   ☐ Legal and regulatory compliance obligations
*   ☐ Alternative service delivery methods during incidents

**Continuous Improvement Integration:**
*   ☐ Monthly incident pattern analysis for systemic issue identification
*   ☐ Quarterly redress process effectiveness evaluation
*   ☐ Annual training update based on emerging incident types
*   ☐ Cross-organizational best practice sharing and lessons learned
*   ☐ Integration with enterprise risk management and business continuity planning

See Section [Enhanced Performance Metrics] for redress process monitoring and evaluation procedures.

### 4.4 Enhanced Performance Metrics

**_NIST 800-63 PERFORMANCE MONITORING COMPLIANCE:_**
*   Organizations SHALL implement continuous evaluation programs per NIST 800-63 Section 3.5
*   Performance data must support risk-based decision making and control effectiveness
*   Quarterly reporting required for digital worker system performance and stakeholder impact

**Core Digital Worker Performance Metrics:**

| Metric Category | Measurement | Target | Frequency |
| :---: | :---: | :---: | :---: |
| Identity Creation | Successful digital worker provisioning rate | > 95% | Daily |
| Authentication Success | Valid authentication events | > 99% | Real-time |
| Authorization Accuracy | Proper access control enforcement | > 99.5% | Daily |
| System Availability | Digital worker operational uptime | 99.9% | Continuous |
| Response Time | Average task completion duration | <established SLA | Real-time |
| Error Rate | Failed operations per total attempts | <2% | Daily |

**Security and Compliance Metrics:**

| Security Metric | Measurement | Target | Tracking |
| :---: | :---: | :---: | :---: |
| Unauthorized Access Attempts | Failed authentication events | <1% of total | Daily |
| Privilege Escalation Incidents | Unauthorized permission expansion | 0 events | Monthly |
| Data Breach Events | Confirmed unauthorized data access | 0 events | Per incident |
| Compliance Violations | Policy or regulatory non-compliance | 0 events | Quarterly |
| Vulnerability Response | Time to patch critical vulnerabilities | <72 hours | Per vulnerability |
| Audit Finding Resolution | Time to address audit recommendations | <30 days | Per finding |

**Stakeholder Experience Metrics:**

| Experience Metric | Measurement | Target | Frequency |
| :---: | :---: | :---: | :---: |
| Sponsor Satisfaction | Digital worker effectiveness rating | 8.0/10 | Quarterly |
| Custodian Workload | Hours spent on digital worker management | <5 hrs/week | Monthly |
| Help Desk Requests | Support tickets per digital worker | <2/month | Monthly |
| Training Effectiveness | Personnel competency assessment scores | > 85% | Annually |
| Resolution Time | Average incident response duration | <4 hours | Per incident |
| Redress Success Rate | Incidents resolved satisfactorily | > 95% | Quarterly |

**Digital Worker Impact Assessment Metrics:**
Adverse Impact Tracking by Level:
*   Low Impact (0-35): Basic operational metrics with monthly reporting
*   Moderate Impact (36-55): Enhanced monitoring with weekly reporting and trend analysis
*   High Impact (56-90): Comprehensive metrics with daily reporting and real-time alerting
*   Critical Impact (91+): Continuous monitoring with immediate escalation procedures

**Business Value and Efficiency Metrics:**
*   ☐ Cost Reduction: Quantified savings from digital worker automation
*   ☐ Process Improvement: Time savings and efficiency gains measured
*   ☐ Quality Enhancement: Error reduction and accuracy improvement tracking
*   ☐ Scalability Benefits: Capacity increase without proportional resource growth
*   ☐ Innovation Enablement: New capabilities delivered through digital worker deployment

**Bias and Fairness Monitoring:**
Organizations SHALL track digital worker performance across:
*   ☐ Different user populations and demographic groups
*   ☐ Various transaction types and complexity levels
*   ☐ Multiple time periods and operational conditions
*   ☐ Cross-system interactions and federation scenarios
*   ☐ Accessibility compliance for users with disabilities

**Quarterly Performance Reporting:**
Required reports must include:
*   ☐ Trend analysis comparing current to previous periods
*   ☐ Performance issue identification with remediation plans
*   ☐ Digital worker effectiveness assessment and ROI analysis
*   ☐ Security incident summary and lessons learned
*   ☐ Stakeholder feedback analysis and satisfaction scores
*   ☐ Recommendations for system improvements and optimization

**Continuous Improvement Integration:**
*   ☐ Monthly performance review with sponsor and custodian
*   ☐ Quarterly digital worker optimization assessment
*   ☐ Annual threat landscape evaluation and control adjustment
*   ☐ Cross-organizational best practice sharing and benchmarking
*   ☐ Integration with enterprise risk management reporting cycles

See Section [Redress Mechanisms] for incident response and stakeholder satisfaction tracking procedures.
## Digital Worker Identity Management Checklist

### Step 1: Determine the Impact

- ☐ *1.1* **Ensure Proper Oversight**  
  - Update enterprise identity management policies to include digital worker management.  
  - Collaborate with Information System Security Officers on digital worker identity management.
    - ☐ Verify security and non-functional requirements.  
    - ☐ Conduct security and privacy assessments.  
    - ☐ Perform executable and vulnerability scans.  
    - ☐ Review digital worker logic and decision-making design documents.

- ☐ *1.2* **Score Risk Impact** 
  - Use the Digital Worker Impact Evaluation Matrix to score the six factors of risk:  
    - ☐ Is the digital worker attended or unattended?  
    - ☐ What is the highest level of data access?
    - ☐ Does the digital worker have internal and/or external network access?  
    - ☐ What is the impact of the digital worker output?  
    - ☐ What type of system account privileges does the digital worker require?  
    - ☐ Does the digital worker act on its own insights?  

*(Reference - Table 1. Digital Worker Impact Evaluation Matrix)*

- ☐ *1.3* **Determine Adverse Impact Level**  
  - Calculate the total risk score to determine the adverse impact level: 
    - ☐ Low (0-35)  
    - ☐ Moderate (36-55)  
    - ☐ High (56-90)  
    - ☐ Critical (91+)  

*(Reference - Table 2. Potential Adverse Impact Levels)*

### Step 2: Create an Identity

- ☐ *2.1* **Assign a Sponsor and Custodian**  
    - ☐ Assign a sponsor responsible for digital worker compliance.  
    - ☐ Assign a custodian for day-to-day operational management.  
    - ☐ Acknowledge responsibilities of sponsor and custodian initially and on a routine basis (annually or every six months depending on impact level).  

*(Reference - Table 4. Sponsorship (SP) Process)*

- ☐ *2.2* **Validate Worker Access**  
  - ☐ Employ least privilege principle.  
  - ☐ Ensure no separation-of-duty conflicts.  
  - ☐ Conduct code reviews initially and after changes.  
  - ☐ Complete ethics and bias reviews based on government standards.  
  - ☐ Recertify acknowledgement of responsibilities for sponsor and custodian.  

*(Reference - Table 5. Validation (VD) Process)*

### Step 3: Provision an Identity

- ☐  *3.1* **Capture and Store Identity Management Data Elements**  
  - Store identification and sponsorship elements in the Identity Management System (IDMS):  
    - ☐ Digital Worker (Boolean)  
    - ☐ Agency Unique User ID  
    - ☐ First Name and Last Name  
    - ☐ Digital Worker Sponsor Name  
    - ☐ Digital Worker Custodian Name  
    - ☐ Digital Worker Description  
    - ☐ Responsible Organization  

*(Reference - Table 6. Identity Management System Data Fields)*

- ☐ *3.2* **Capture and Store Identity Governance Data Elements**  
  - Store the following data elements for governance:  
    - ☐ Sponsor Date of Last Acknowledgment  
    - ☐ Sponsor Acknowledgment Recertification Date  
    - ☐ Level of Potential Adverse Impact  
    - ☐ Custodian Date of Last Acknowledgment  
    - ☐ Custodian Acknowledgment Recertification Date  
    - ☐ Approved Source IP Address Range (for High and Critical levels)  
    - ☐ Code Review Completion Date  
    - ☐ Ethics Review Completion Date  
    - ☐ Next Ethics Review Date  
    - ☐ Bias Review Completion Date  
    - ☐ Next Bias Review Date  

*(Reference - Table 7. Identity Governance Data Elements)*

### Step 4: Maintain and Deprovision Identity

- ☐ *4.1* **Continuous Behavioral Monitoring**  
    - ☐ Establish continuous monitoring procedures.  
    - ☐ Use automated tools for real-time alerts.  
    - ☐ Develop an incident response plan.  
    - ☐ Define roles and responsibilities for incident response.  
    - ☐ Conduct regular drills and exercises.  
    - ☐ Perform regular reviews of performance, compliance, and access levels.  
    - ☐ Recertify sponsor and custodian acknowledgments at the required intervals.  

*(Reference - Table 8: Continuous Monitoring Process)*

- ☐ *4.2* **Deprovision Digital Worker**  
    - ☐ Assess the need for the digital worker.  
    - ☐ Backup critical data and configurations.  
    - ☐ Archive relevant logs, configurations, operational data, and access records.  
    - ☐ Remove the digital worker’s access to all systems and networks.  
    - ☐ Disable or remove associated system accounts.  
    - ☐ Update the Identity Management System to indicate deactivation.  
    - ☐ Notify relevant stakeholders of deprovisioning.  
    - ☐ Document the deprovisioning process and maintain logs.  

*(Reference - Table 9: Deprovisioning Process)*

## Conclusion

Digital worker identity management requires new government-wide policies and guidance tailored to digital workers’ unique functional and security considerations. Adoption and implementation of this playbook provide agencies distinct ways to manage and maintain their digital workforce.

- **Step 1:** The Digital Worker Impact Evaluation Matrix helps agencies determine whether to establish an identity for a digital worker based on its potential level of adverse impact.

- **Step 2: **New sponsorship and validation processes establish digital worker accountability and confirm the digital worker will only act as programmed.

- **Step 3:** New identity management and identity governance data elements support an agency’s ability to manage and monitor throughout the identity lifecycle.

- **Step 4:** Continuous Monitoring and Deprovisioning processes provide agencies with guidelines to follow when monitoring a digital worker's identity. These processes also outline the steps to take when an agency needs to retire a digital worker's identity because it is no longer needed.

This playbook is iterative, and agencies are encouraged to collaborate, share best practices, and share lessons learned. Consider joining a federal committee and community of practice to learn and engage in digital worker identity management.

## Appendix A. Digital Worker Impact Evaluation Factors

This section provides a detailed breakdown of the information contained in Table 1, the Digital Worker Impact Evaluation Matrix. Tables 8 through 13 individually provide criteria details for Factors 1 through 6, respectively.

**Factor 1 – Is the digital worker attended or unattended?**  
This factor assesses whether the digital worker is attended and overseen by a human worker when completing its operations.

**Table 10: Factor 1 Criteria Details**

| Criteria                   | Details | Score |
| :---: | ----- | :---: |
| 1a) Attended | An attended digital worker operates under constant supervision and attendance by a human, likely operating on the user interface level (e.g., either on the user’s computer desktop or a separate computer attended by the human, typically acting on behalf of a human user). | 0 |
| 1b) Unattended | An unattended digital worker does not operate under supervision or attendance by a human. A human does not oversee the direct action of the digital worker technology. The tool operates out of sight, including (but not limited to) on a virtual machine, through API calls, etc. | 10 |

**Factor 2 – What is the highest level of data access by the digital worker?**  
This factor assesses the impact-based sensitivity of data accessed by the digital worker to determine the potential adverse impact related to unauthorized disclosure of information and changing or destroying information.

**Table 11: Factor 2 Criteria Details**

| Criteria | Details | Score |
| :---: | ----- | :---: |
| 2a) Data available to the public (either without a user account or with unvetted user account) | The digital worker only works with/has access to data that is fully available for use and access by the general public. It includes all information available on public forums (open websites and networks) and all information that the public may access through the setup of unvetted user accounts (e.g., a citizen can use an unvetted account to access Centers for Disease Control “public” data). | 0 |
| 2b) Agency operational data, CUI, or data on individuals (no PII) in low volumes | The digital worker works with/has access to data that is not for public consumption, including CUI, intellectual property owned by the government or outside organizations, and information related to agency operations. | 5 |
| 2c) PII and PHI | The digital worker works with/has access to public data, agency operational data, and PII or PHI.  This is a “trigger” criterion, meaning if the digital worker meets this criterion, it automatically should be in at least a High potential adverse impact level according to the scale in Table 1. | 55 |
| 2d) Agency critical operational data or data that could impact life, health, or safety of individuals/systems relied on for health and safety; or very high volumes of agency operational data | The digital worker works with/has access to data that could have catastrophic effects if made public, such as information about mission-critical agency operations or information that impacts the life, health, and safety of individuals.  This is a “trigger” criterion, meaning if the digital worker meets this criterion, it automatically should be in a Critical potential adverse impact level according to the scale in Table 1. | 90 |

**Factor 3 – Does the digital worker have access to internal and/or external networks?**  
This factor assesses what type of networks the digital worker accesses. There are different levels of potential impact depending on whether access is granted to internal networks, external networks, or both.

**Table 12: Factor 3 Criteria Details**

| Criteria | Details | Score |
| :---: | ----- | :---: |
| 3a) No internal intranet or external Internet connection | The digital worker does not have access to any internal or external networks. | 0 |
| 3b) Either internal intranet access only OR external Internet access (but not both) | The digital worker only has access to internal networks and operates fully inside the agency’s firewall; the digital worker only has access to external networks, operating outside the firewall. | 5 |
| 3c) Internal and external network access (i.e., Internet and intranet) | The digital worker has access to both internal networks and external networks (i.e., can cross the agency’s firewall). | 10 |

**Factor 4 – What is the impact of the output generated by the digital worker?**  
This factor assesses the potential worst-case scenario impact of the output the digital worker generates on different stakeholder groups: internal organizational impact; external organizational impact; and critical, pervasive impacts across organizations, government, or society.

**Table 13: Factor 4 Criteria Details**

| Criteria | Details | Score |
| :---: | ----- | :---: |
| 4a) Output impacts general internal business operations, but not critical processes or decisions | The output of the digital worker is used solely for and/or may impact internal organizational business processes, operations, and decisions. However, the output is not used in critical organizational processes; if it is, then this would fall under criterion 4c. | 5 |
| 4b) Output impacts outside organizations in general business operations or public reporting, but not critical processes or decisions | The output of the digital worker is used for and/or may impact external organizational business processes, operations, and decisions. In addition, the output may be used in public reporting (e.g., Government Accountability Office audits). However, the output should not be used in critical organizational processes; if it is, then this would fall under criterion 4c. | 25 |
| 4c) Output impacts mission-critical organization operations of the agency or other organizations, health or safety of individuals, national economic stability, national security, critical infrastructure, or similarly consequential operations | The output of the digital worker is used for and/or may impact mission-critical operations of an organization, health and safety of individuals, national economic stability, national security, critical national infrastructure, or other similarly consequential operations.  This is a “trigger” criterion, meaning if the digital worker meets this criterion, it automatically should be in a Critical potential adverse impact level according to the scale in Table 1. | 90 |

**Factor 5 – What type of system account privileges does the digital worker require?**  
This factor assesses the type and level of system account access that the digital worker requires to complete its tasks. Privileged access, especially for multiple systems, creates higher potential adverse impact than standard user accounts or no account use at all.

**Table 14: Factor 5 Criteria Details**

| Criteria | Details | Score |
| :---: | ----- | :---: |
| 5a) No system accounts used | The digital worker does not use any system accounts to access databases, web applications, etc. | 0 |
| 5b) Standard system account(s) (Roles limited by the business function) | The digital worker uses one or more system accounts that have a login (e.g., username, password, multifactor authentication) to access databases, web applications, etc. The user privileges within the system account(s) are standard business user roles and have no system administrator privileges. Agencies define the standard user roles, and they may include any combination of the following: read, write, execute, and delete. | 10 |
| 5c) System admin account (privileged access) | The technology uses one or more system accounts that have a login (e.g., username, password, multifactor authentication) to access databases, web applications, etc. Select this criterion if the digital worker will, or may need to have, access to systems or web applications with admin or otherwise privileged access. If there are multiple system or web application accounts used by a technology, then only one may be admin or privileged access, as defined by the agency. User roles may include any combination of the following: read, write, execute, and delete.  This is a “trigger” criterion, meaning if the digital worker meets this criterion, it automatically should be in at least a Moderate potential adverse impact level according to the scale in Table 1. | 35 |
| 5d) Multiple system admin accounts (multiple privileged access roles) | The digital worker uses one or more system accounts that have a login (e.g., username, password, multifactor authentication) to access databases, web applications, etc. Select this criterion if the digital worker will, or may need to have, access to systems or web applications with admin or some sort of privileged access. In addition, select this criterion if the digital worker requires, or may in the future require, admin or privileged access to multiple systems or web applications, as defined by the agency. User roles may include any combination of the following: read, write, execute, and delete.  This is a “trigger” criterion, meaning if the digital worker meets this criterion, it automatically should be in at least a Moderate potential adverse impact level according to the scale in Table 1\. | 40 |

**Factor 6 – Does the digital worker act on its own insights?**  
This factor assesses the extent to which a human is involved in approving the decisions of digital workers. Digital workers that generate insights and then use those insights to make decisions or complete actions have a greater potential adverse impact compared to digital workers that only generate insights or that generate insights but have a human review an action before its completion.

**Table 15: Factor 6 Criteria Details**

| Criteria | Details | Score |
| :---: | ----- | :---: |
| 6a) Digital worker develops insights but does not act on its insights | The digital worker develops insights but does not take separate action based on the insights (e.g., a digital worker helps diagnose a patient based on medical history data fed to a machine learning algorithm. The digital worker only provides a diagnosis recommendation and does not take any additional actions). | 0 |
| 6b) Digital worker develops insights and acts on the insights after human review | The digital worker first helps to develop insights. A human then reviews the insights and either edits or approves them (e.g., a digital worker helps diagnose a patient based on medical history data. Then the tool uses the data to develop a diagnosis and a recommended treatment [insight]. The doctor will review the diagnosis and the recommended treatment. If the doctor disagrees with the insight, the doctor will amend it; if the doctor agrees, the doctor will approve it. Then, the digital worker will administer the treatment to the patient). | 5 |
| 6c) Digital worker develops insight and acts on the insights without human review or approval before the action is taken | The tool develops insights and then uses these insights to determine a course of action. The tool proceeds with this action without human review of the initial insight (e.g., a digital worker recommends a diagnosis and treatment based on data from the patient’s medical history. The digital worker acts on this recommendation by administering treatment to the patient without a doctor’s intermediary review). | 10 |

## Appendix B. Critical Case Study

A government hospital uses a digital worker to diagnose patients.

- The digital worker uses an unattended machine learning algorithm on internal networks.
- It works with the patient’s medical history, diagnostic test results, and thousands of previous patient outcome data sets containing PHI
- The digital worker develops a diagnosis and recommends a treatment.
- The digital worker uses only a standard user account during its tasks.

Table 14 illustrates computation of the impact score for this digital worker using the Digital Worker Impact Evaluation Matrix.

**Table 16: Critical Case Study Digital Worker Impact Evaluation Matrix**

| Digital Worker Impact Evaluation Matrix |   |
| ----- | :---: |
| Factor 1 - Is the digital worker attended or unattended? | Score |
| ● Unattended | 10 |
| Factor 2 - What is the highest level of sensitive data access? |   |
| ● PII and/or PHI | 55 |
| Factor 3 - Does the digital worker have network access? |   |
| ● Either internal intranet access only OR external Internet access (not both) | 5 |
| Factor 4 - What is the impact of the digital worker output? |   |
| ● Output impacts mission-critical organizational operations of the agency or other organizations, health or safety of individuals, national economic stability, national security, critical infrastructure, or similarly consequential operations | 90 |
| Factor 5 - What system account privileges are required to perform the task? |   |
| ● Standard system account(s) (roles limited by the business function) | 10 |
| Factor 6 - Does the digital worker act on its own insights? |   |
| ● Digital worker develops insights, but does not act on them | 0 |
| Total Score | 170 |
| Digital Worker Adverse Impact Level | Critical |

This digital worker impact level is Critical. It has the potential to cause severe or catastrophic impact. The overarching risk in this case study derives from the digital worker recommendation impacting an individual’s health and safety and its access to PHI.

The hospital digital worker in this case study has a *Critical* adverse impact level. Table 15 delineates the actions associated with assigning a sponsor and a custodian as well as validating digital worker access and process.

**Table 17: Critical Case Study Sponsorship and Validation**

|   | Hospital Digital Worker Sponsorship (SP) |
| :---: | :---: |
|    ID    | Critical Actions |
| SP-1 | The business owner documents the business need to use a digital worker. |
| SP-2 SP-3  | The CISO reviews the business need and assigns the systems Information Security System Manager (ISSM) as sponsor. The CISO notifies the ISSM, and the ISSM electronically signs an acknowledgment letter every six months. |
| SP-4 SP-5  | As sponsor, the ISSM assigns and notifies the contractor maintaining the digital worker of their responsibility as custodian. |
| SP-6  | The contractor, as custodian, acknowledges their assignment and responsibility every six months. |
|   | Hospital Digital Worker Validation (VD) |
| VD-1  | The ISSM, as sponsor, reviews the digital worker design document with the ISSO to verify a level of access that employs least privilege. They verify a standard system account is necessary. |
| VD-2  | The ISSM and ISSO validate that the standard system account does not create a separation-of-duty conflict with a human user. |
| VD-3  | The ISSM verifies a code review was conducted with the business owner and sets a reminder to verify a code review every six months. |
| VD-4 VD-5 | The ISSM verifies with the ethics office that the digital worker output is in line with agency ethics and bias standards and sets a reminder to verify that fact with the ethics office every six months. |
| VD-6 VD-7 | The ISSM and contractor, as sponsor and custodian, recertify acknowledgment of responsibility for the digital worker and set a reminder to conduct this action every six months. |

After the sponsorship and validation activities are complete and documented, the hospital digital worker identity was created and provisioned. Table 16 shows the data fields captured. Identity management data fields are captured in the directory service while identity governance data fields are captured in an agency security assessment tool.

**Table 18: Critical Case Study Data Fields**

|          | Identity Management System Data Fields (DF) |   |
| :------: | :---: | ----- |
|  DF-1   | Digital Worker *(new field)* | True |
|  DF-2   | Agency Unique User ID *(existing field)* | Diagnosis.DW01@agency.gov |
|  DF-3   | First Name and Last Name *(existing fields)* | Diagnosis DW01 |
|  DF-4   | Digital Worker Sponsor Name *(new field[s])* | Jane ISSM |
|  DF-5   | Digital Worker Custodian Name *(new field[s])* | Stacy Contractor |
|  DF-6   | Digital Worker Description *(optional new field)* | N/A |
|  DF-7   | Responsible Organization *(optional new field)* | Patient Health Division |
|         | Additional Identity Governance Data Fields |   |
|  DF-8   | DW Sponsor Acknowledgment Date | 09/1/2020 |
|  DF-9   | DW Sponsor Acknowledgment Recertification Date *(optional)* | 02/1/2021 |
|  DF-10  | DW Level of Potential Adverse Impact | Critical |
|  DF-11  | DW Custodian Acknowledgment Date | 09/10/2020 |
|  DF-12  | DW Custodian Acknowledgment Recertification Date *(optional)* | 02/10/2021 |
|  DF-13  | DW Approved Source Internet Protocol (IP) Address Range *(only for High and Critical)* | 192.168.0.0/16 |
|  DF-14  | DW Code Review Completion Date *(optional)* | 07/04/2020 |
|  DF-15  | DW Next Code Review Date *(optional)* | 01/04/2021 |
|  DF-16  | DW Ethics Review Completion Date | 07/11/2020 |
|  DF-17  | DW Next Ethics Review Date *(optional)* | 01/11/2021 |
|  DF-18  | DW Bias Review Completion Date | 07/11/2020 |
|  DF-19  | DW Next Bias Review Date *(optional)* | 01/11/2021 |

## Appendix C. Low Case Study

A digital worker helps the General Services Administration gather data on COVID-19.

- The digital worker is unattended, uses a standard system account, and has internal and external network access.

- The digital worker pulls data from public state government websites to aggregate and populate a Geographic Information System map.

- The output is not decision critical and provides insights with no actions.

Table 17 presents the Impact Evaluation Matrix for this digital worker.

**Table 19: Low Case Study Digital Worker Impact Evaluation Matrix**

| Digital Worker Impact Evaluation Matrix |   |
| ----- | ----- |
| Factor 1 - Is the digital worker attended or unattended? | Score |
| ● Unattended | 10 |
| Factor 2 - What is the highest level of sensitive data access? |   |
| ● Data available to the public (either without a user account or with unvetted user account) | 0 |
| Factor 3 - Does the digital worker have network access? |   |
| ● Internal and external network access (i.e., Internet and intranet) | 10 |
| Factor 4 - What is the impact of the digital worker output? |   |
| ● Output impacts general internal business operations, but not for critical processes or decisions | 5 |
| Factor 5 - What system account privileges are required to perform the task? |   |
| ● Standard system account(s) (roles limited by the business function) | 10 |
| Factor 6 - Does the digital worker act on its own insights? |   |
| ● Digital worker develops insights, but does not act on them | 0 |
| Total Score | 35 |
| Digital Worker Adverse Impact Level | Low |

This digital worker impact level is Low. The effect of an error or accident is minimal, resulting in negligible impacts. Thus, the digital worker does not require a unique identity. The impact level is documented and a reminder is set to reassess the impact level with any code change.

## Footnotes

{:role="list"}
[^1]: Digital worker is not synonymous with non-person entity (NPE), as NPE encompasses all entities with a digital identity including organizations, hardware devices, software applications, and information artifacts.  
[^2]: OMB Memorandum M-19-17 instructs federal agencies to designate an integrated agency-wide ICAM office, team, or other governance structure in support of its Enterprise Risk Management capability to effectively govern and enforce ICAM efforts.  
[^3]: The adverse impact levels are grounded in NIST Special Publication 800-30, Guide for Conducting Risk Assessments, but do not align with it. Agencies can adjust the impact levels to match agency risk tolerance.  
[^4]: For more information on the methodology used to develop the Digital Worker Evaluation Matrix, see Appendix A.
[^5]: The ID number is specific to this playbook and does not map or correlate to requirements in other federal security publications.

<!-- cjb 04.25.2025 -->
