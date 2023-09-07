---
layout: page
collection: playbooks
title: Privileged Identity Playbook
pubdate: 2022-12
type: Markdown
permalink: /playbooks/pam/
description: This Playbook provides federal agencies with best practices in managing its privileged user population.
sidenav: playbooks
sticky_sidenav: true

version: 1.2
pubdate: December 29, 2022

subnav:
    - text: Executive Summary
      href: '#executive-summary'
    - text: Protect Federal Identities and Logical Assets
      href: '#protect-federal-identities-and-logical-assets'
    - text: Step 1. Develop a Privileged User Policy
      href: '#step-1-develop-a-privileged-user-policy'
    - text: Step 2. Define and Identify
      href: '#step-2-define-and-identify'
    - text: Step 3. Implement Enterprise-wide
      href: '#step-3-implement-as-an-enterprise-icam-service'
    - text: Step 4. Prioritize and Execute
      href: '#step-4-prioritize-and-execute'
    - text: Appendix A. Reference Documents
      href: '#appendix-a-reference-documentation'
    - text: Appendix B. Privileged User Agreement
      href: '#appendix-b-privileged-user-agreement'
    - text: Appendix C. NIST SP 800-53 Privileged User Overlay
      href: '#appendix-c-nist-sp-800-53-privileged-user-overlay'
      
---

{% assign categories = "" | split: "" %}
{% for pam in site.data.overlay_pam %}
  {% assign category = pam.category | strip %}
  {% assign categories = categories | push: category | uniq | sort %}
{% endfor %}
{% assign categories = categories | uniq | sort %}
  
<!-- Version 1.2<br>
December 29, 2022 -->

<img src="{{site.baseurl}}/assets/img/logo-gsa.png" width="64" height='64' align="left" alt="U.S. General Services Administration Logo">
<img src="{{site.baseurl}}/assets/img/logo-cio-round.png" width="64" height='64' align="left" alt="U.S. Federal Chief Information Officer Council Logo">
<img src="{{site.baseurl}}/assets/img/logo-cisa.png" width="64" height='64' align="left" alt="U.S. Department of Homeland Security Cybersecurity and Infrastructure Security Agency Logo"><br><br><br>

<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="v-a1">
      Date: {{page.pubdate}} - Version: {{page.version}}
    </button>
  </h4>
  <div id="v-a1" class="usa-accordion__content usa-prose">
    <table>
      <caption>Privileged Identity version table</caption>
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
        <td>12/29/2022</td>
        <td>Fixed Acknowledgment word usage.</td>
      </tr>
      <tr>
        <th scope='row'>
          1.1
        </th>
        <td>12/15/2022</td>
        <td>Clarify activities around automated discovery of entitlements and microservices.</td>
      </tr>
      <tr>
        <th scope='row'>
          1.0
        </th>
        <td>09/25/2022</td>
        <td>Initial Draft.</td>
      </tr>
    </table>
  </div>
</div>

<!-- | Version Number | Date | Change Description |
| :----------: | :-------: | -------- |
| 1.2 | 12/29/2022 | Fixed Acknowledgment word usage. |
| 1.1 | 12/15/2022 | Clarify activities around automated discovery of entitlements and microservices. |
| 1.0 | 09/25/2022 | Initial Draft. | -->

This playbook is a collaboration among the General Services Administration Office of Government-wide Policy Identity Assurance and Trusted Access Division, Federal Chief Information Security Officer Council ICAM Subcommittee, and the Department of Homeland Security (DHS) Cybersecurity and Infrastructure Security Agency (CISA) Continuous Diagnostic and Mitigation (CDM) Program.

# Executive Summary
Privileged users are unique user types that perform various security-related duties. As such, privileged accounts are most likely to be targeted by cybercriminals or abused by malicious insiders. **Unwanted behavior or compromised privileged accounts are responsible for the most high-profile federal and private security breaches.** It is a critical Identity, Credential, and Access Management (ICAM) capability to secure privileged access.

There are three prominent use cases to identify a privileged account or user:

1. Administrators manage IT infrastructure, high-value assets (HVA) resources, and core systems such as maintenance activities on human resource applications or databases.
2. Help desk personnel with escalated privileges to perform security-relevant processes on endpoints, such as installing software on user laptops or changing endpoint configuration settings. Managers that approve or recertify access or accounts.
3. Managers who approve or recertify access or accounts.

Privileged users are managed as distinct and separate identities to decrease the risk and impact of agencies' missions if compromised. Cyber security risks can be imposed on an organization without properly managing privileged users and accounts. For example, employees and contractors with privileged access can:

1. Jeopardize sensitive information or infrastructure, whether knowingly or unknowingly.
2. Have the potential to compromise all three core elements of information security: availability, confidentiality, and integrity.

This Privileged Identity Playbook is a practical guide to **help federal agencies implement and manage a privileged user management function** as part of an overall agency ICAM program. Privileged user management will identify, track, monitor, and audit privileged users and accounts to actively decrease the cyber risk to an agency's mission. Agencies can use this playbook to help plan and implement privileged user management following government-wide best practices. This playbook includes a four-step process aligned with the [Federal Identity, Credential, and Access Management (FICAM) Architecture]({{site.baseurl}}/why/icam/) designed for **insider threat, ICAM, and risk management professionals interested in identifying best practices for mitigating privileged user risk**. Agencies are encouraged to tailor this playbook to fit their unique organizational structure, mission, and technical requirements. Other IT program participants, including cybersecurity program managers, may value incorporating this playbook approach in their planning. This playbook supplements existing federal IT policies and builds upon the [Office of Management and Budget Memorandum (OMB) Memo 19-17 - Enabling Mission of Delivery through Improved Identity, Credential, and Access Management](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} and [OMB Memo 22-09 - Federal Zero Trust Strategy](https://zerotrust.cyber.gov/federal-zero-trust-strategy/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, as well as existing federal identity guidance and playbooks.

## Key Terms

Below are key terms used throughout this playbook. A linked term denotes an official term from a federal policy, NIST Glossary, or NIST publication. An unlinked term is defined for this document.

- **Account compromise** is the unauthorized use of an account to disclose, modify, substitute, or use sensitive information.
- [**Insider threat**](https://csrc.nist.gov/glossary/term/insider_threat){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} is the potential for an insider to use their authorized access, wittingly or unwittingly, to harm the security of the United States. This threat can include espionage, terrorism, unauthorized disclosure of national security information, or the loss or degradation of departmental resources or capabilities.
- [**Functional privileged users**]({{site.baseurl}}/playbooks/dira/#step-1-identify-users-transactions-and-roles) can access information resources provided by the application and approval workflows, such as approving access requests.
- [**Privileged account**](https://csrc.nist.gov/glossary/term/privileged_account){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} is a system account used by a privileged user. A privileged account can belong to a single endpoint, network device, domain, database, or application. A privileged account can run [**privileged commands**](https://csrc.nist.gov/glossary/term/privileged_command){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} which involve the control, monitoring, or administration of a system, including security functions and associated security-relevant information.
- **Privilege compromise** is either an adverse action of a privileged user or account through an insider threat or an account compromise.
- [**Privileged User**](https://csrc.nist.gov/glossary/term/privileged_user){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} is authorized (and therefore, trusted) to perform security-relevant functions that ordinary users cannot perform—also known as a privileged IT user, privileged network user, or [**superuser**](https://csrc.nist.gov/glossary/term/superuser){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}.
- Unauthorized [**Privilege escalation**](https://csrc.nist.gov/glossary/term/privilege_escalation){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} exploits a bug or flaw that allows for a higher privilege level than what would usually be permitted.

## Disclaimer

This playbook is informative. The General Services Administration Office of Government-wide Policy, in collaboration with the Department of Homeland Security (DHS) Continuous Diagnostic and Mitigation (CDM) Program and the Federal CISO Council ICAM Subcommittee developed this playbook with input from federal identity and security practitioners. This playbook is limited to high-level guidance for privileged users accessing Federal Government information systems. This playbook shouldn't be interpreted as official policy or mandated action and doesn't provide authoritative definitions for IT terms.

# Protect Federal Identities and Logical Assets

Government employees and contractors need a privileged account to perform necessary administrative and security functions, which creates an inherent risk of insider threat or account compromise. As a result, agencies should implement privilege user controls that reduce this risk without hindering their ability to carry out assigned job duties. In creating a secure physical and virtual workplace for privileged users, agencies align efforts with the [FICAM Architecture]({{site.baseurl}}/why/icam/). The following are the four primary high-level steps to establish or enhance an agency's privileged user management function of an agency's ICAM program.

1. **Develop a privileged user policy** to define or assess policies, strategies, and technologies used to control, monitor, and secure elevated access to critical agency resources. This step is intended to reduce or avoid risk and impact on the agency's mission. Agency executives must understand why privileged user management is essential and the risks associated with elevated access. This step also includes engaging agency stakeholders and staying abreast of insider threats and ICAM best practices through government-wide groups.

2. **Define and identify privileged users** as people, devices, and accounts with elevated access to an agency's resources to determine and set the appropriate level of privileged access controls. Privileged accounts can be anywhere across a network, system, or the cloud. Track and audit privileged user activity regularly.

3. **Implement as an Enterprise ICAM Service** for a holistic management approach. Implementing ICAM best practices and additional countermeasures to prevent privileged user and account misuse, abuse, or compromise can provide comprehensive, integrated protection of agency resources.

4. **Prioritize and execute** privileged identity services and capabilities with integral governance over sensitive systems and the ability to monitor how an agency's resources are accessed. Like most IT initiatives, this is a journey. Threats change, and agencies must reassess their privileged user management and adapt.

Implementing privileged user management may require a multi-year project to add capabilities and services based on your agency's risk and budget. The DHS CDM Program is one of the primary means for most agencies to architect and implement privileged access management.

{% include alert-success.html heading="Is this Privileged Access Management or Account Security?" content="Different vendors may use other terms for their products. Some vendors may use Privileged Access or Account Management (PAM), Privileged Identity Management (PIM), Privileged Security, or something in between. For the intent of this playbook, the agnostic privileged identity is used to encompass different privileged activities." %} 

# Step 1. Develop a Privileged User Policy
Privilege compromise within an agency's privileged user population can significantly hurt its mission. See Figure 1 for the _Privilege Compromise Journey_. Poor management of an agency's privileged user population can lead to catastrophic events such as:

- exfiltration of sensitive or classified data;
- rendering a system inoperable through configuration changes; or
- creating and granting shadow administrator accounts for continued access.

<p align="center"><b>Figure 1: Privilege Compromise Journey Map</b></p>

<img src="{{site.baseurl}}/assets/playbooks/pam-journey-map.png" alt="A four stop map. The first step is to compromise an end user which creates a launching point for further discovery. Step 2 is gathering environment information for privileged accounts. Step 3 is when an attacker is able to compromise an account. Step 4 is the attacker uses privilege escalation to takeover an agencies network or data." style="width:800px;" >

Privilege compromise comes in two forms:

1. Insider threat
2. Account compromise

## Insider Threat

An insider threat is when a government employee or contractor accidentally, complacently, or maliciously uses their privilege to commit a harmful action against an agency. Privileged user management is grounded in implementing, monitoring, and reporting such insider-based threats. The table below provides the definitions and indicators of the three insider threat classifications.

<p align="center"><b>Table 1: Insider Threat Classification, Definition, and Examples</b></p>

| **Insider Threat Classification** | **Definition** | **Example** |
| --- | --- | --- |
| **Accidental** | Lack of awareness regarding policies, procedures, and technical competencies. | 1. Unknowingly installs unapproved software.<br> 2. Use privileged accounts for anything other than official administrative actions.<br> 3. Accidentally deletes all data with a single command. |
| **Complacent** | Overall lax or careless approach to security. | 1. Create user accounts and assign privileges without the appropriate review and approval.<br> 2. Share system account passwords. |
| **Malicious** | Intentionally disrupt, threaten, or endanger an agency's activities or assets. | 1. Unwanted, purposeful disclosure or of information.<br> 2. Introduce malicious code, malware, Trojan horse, and viruses.<br> 3. Destroy or modify system audit logs.|

{% include alert-error.html heading="Insider Threat Mitigation" content="Because of privileged users' elevated access, unwanted behavior by these individuals can significantly compromise agency assets or operations. Understanding insider threat classifications and unwanted behavior will support implementing an agency's privileged user management. A combination of procedural and technical measures can help agencies reduce the range of unwanted behavior." %} 

## Account Compromise

An account compromise is the unauthorized use of an account to perform an unwanted behavior. Table 2 includes examples of unwanted behavior.

<p align="center"><b>Table 2: Unwanted Behavior Classification, Definition, and Examples</b></p>

| **Unwanted Behavior Classification** | **Definition** | **Example** |
| --- | --- | --- |
| **Fraud** | Unwanted use, modification, addition, or deletion of agency data for personal gain. | A database administrator modifies data without authorization on the pretense of fixing corrupt data. |
| **Espionage** | Sharing restricted information to aid a foreign actor or harm the U.S. Government. | An external actor uses a compromised account to steal data. |
| **Sabotage** | Purposely inflicting harm on an organization. | An external actor uses a phished credential to load ransomware onto a payment system. |
| **Intellectual Property Theft** | Stealing intangible assets (e.g., discoveries, inventions, designs) from an organization. | Cloud administrators use elevated access to steal proprietary information. |
| **Unwanted Information Disclosure** | A communication or physical transfer of information to a recipient who is not authorized to access the information. | A system administrator creates a "backdoor" account to access and release classified information inappropriately. |

## Agency Governance

A privileged user policy interacts with multiple initiatives across an agency. Examples include:

- **High Value Asset (HVA)** - [OMB Memo 19-03](https://www.whitehouse.gov/wp-content/uploads/2018/12/M-19-03.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} outlines requirements to identify, track, and manage an agency's most critical assets. [Guidance from CISA](https://www.cisa.gov/sites/default/files/publications/Securing%20High%20Value%20Assets_Version%201.1_July%202018_508c.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} recommends using individual accounts, logging key security events, and implementing multi-factor authentication for all HVA users, particularly privileged users.
- **Insider threat** - Includes programs to detect and prevent unauthorized disclosure of sensitive information. An insider threat program provides, access to information, centralized information integration, analysis, response, insider threat awareness training, and user activity monitoring on government computers.
- **Cybersecurity/ICAM** - Responsible for identity, credential, and access management services and coordination. Privileged Access Management is a service area under [Access Management]({{site.baseurl}}/arch/#access-management).
- **Continuous Diagnostic and Mitigation (CDM)** - Cybersecurity tools, integration services, and dashboards to help agencies reduce the attack surface, increase visibility into cybersecurity posture, improve response, and streamline FISMA reporting.
- **Risk Management** - Identify and track the implementation and operation of security controls.

Privileged user management should encompass all privileged users within a Chief Information Officer (CIO) 's Federal IT Acquisition Reform Act (FITARA) responsibility, including enterprise and mission applications.

{% include alert-info.html heading="Who's your privileged user champion?" content="Agencies should choose a champion to advocate for their privileged user management process. The champion should either have executive support and/or is an executive who can effectively encourage, support, and direct implementation. Conduct a pilot by identifying an initial group of privileged users and accounts supporting the change management process required to overcome change resistance. Implement the change incrementally within the champion organization and expand to other privileged user groups based on readiness. Stay focused on your defined program objectives to win greater agency-wide support. Conduct after actions after each deployment to ease subsequent integrations." %} 

## Policy Objectives

Even though agency missions may differ, the objectives of privileged user management are relatively similar. The following strategic and tactical objectives are used as a starting point to plan privileged user management.

**Strategic Objectives**

1. Identify vulnerabilities and risk factors to protect HVAs and other assets.
2. Limit successful attacks by preventing network takeover and lateral movement.
3. Secure sensitive workloads both on-premises and in the cloud.
4. Prevent sensitive data loss and exfiltration.
5. Comply with existing and evolving federal requirements for people and non-person accounts.

**Tactical Objectives**

1. Discover, inventory and validate privileged account scope and numbers.
2. Minimize the number of privileged users and remove all orphaned privileged accounts.
3. Limit both duration of privileged account log-in and privileged account validity.
4. Enforce least privilege by limiting overall functions and those performed remotely.
5. Log privileged user activity and audit activity regularly.

In addition to setting a policy, strategy, and technical direction, an agency should evaluate the risk of all users to its resources by conducting a [Digital Identity Risk Assessment]({{site.baseurl}}/playbooks/dira). The DIRA process identifies the risk of user transactions and determines a minimum identity assurance, authenticator assurance, and federation assurance level outlined in [NIST Special Publication 800-63-3](https://pages.nist.gov/800-63-3/sp800-63-3.html){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}.

{% include alert-info.html heading="Why Additional Controls?" content="Most attacks start by compromising lower-level accounts. An attacker can find an orphaned privileged account through network discovery and escalate their privileges to access applications, data, and compromise entire agency networks or data sets." %} 

Metrics are an essential aspect of privileged user management which can help identify risks and efficiencies. The following metrics are modified from the [GSA DevSecOps Guide](https://tech.gsa.gov/guides/dev_sec_ops_guide/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}.

<p align="center"><b>Table 3: Example Privileged User Metrics</b></p>

| **Metric** | **Description** |
| --- | --- |
| User provisioning lead time | The time between a request for a new user on the platform and the user being able to log in. |
| Access Control (AC) security control compliance | List and percentage of AC security controls satisfied via ICAM platform account management practices. |
| Privilege auditing frequency | The number of entitlement audits conducted in each period. |
| Administrator count | List and number of users with administrator-level privileges. |
| Secret rotation frequency | A set period to rotate a secret such as after every use or every 30 days. |

# Step 2. Define and Identify
Agencies are responsible for managing all user privileges. Individuals entrusted with privileged accounts comprise an agency's privileged user population.

## Define a Privileged User

An agency's privileged user population can include a range of accounts with elevated access. Given the broad-reaching nature of an organization's privileged user population, an agency must understand the user roles, groups, and accounts that constitute its privileged user population. A privileged account can be owned by a person or a non-person entity. A non-person entity are those machine identities and digital workers that may execute code or perform automated processes that are created with an elevated privilege. Some common job titles or system accounts include:

- Job Titles
  - Domain administrator
  - Global administrator
  - System administrator
  - Help desk administrator
  - Finance Manager
- System Accounts
  - Linux/Unix Root
  - Oracle SYS
  - Cisco Enable
  - Windows service accounts
  - SSH (Secure Shell) keys
  - Emergency or break-glass accounts
  
<p align="center"><b>Figure 2: Privileged Users Can Be Either People or Non-Persons</b></p>

<img src="{{site.baseurl}}/assets/playbooks/pam-iceberg.png" alt="Privileged users include both people accessing and interacting with data and machines communicating and interacting with data." style="width:800px;" >

## Use Consistent Terms

The most common definition of a privileged user is a user who is authorized (and therefore, trusted) to perform security-relevant functions such as change configuration settings, running commands that require administrator access, or approving access requests. Some common characteristics of a privileged user include:

- Access that impacts the confidentiality, integrity, or availability of an application.
- Access to alter data or across multiple data sets.
- Ability to reset passwords.
- Ability to change access privileges.
- Ability to create accounts (especially other privileged accounts).
- Ability to start or stop processes in cloud-based tools.

### Identify Privileged Accounts Across Platforms and Environments

Once the definition of a privileged user is established, an agency can identify its privileged users and resources by following this process:

1. Identify and document mission-critical and sensitive services (most likely your high-value asset list) as a starting point. Every IT system has privileged users. An agency can also check system security plans to help identify privileged roles. Services can be further grouped by:
- Hardware
- Software
- Operating system
- Access type (externally accessible, internally accessible, or others)
- Physical and logical location (on-premises, cloud service provider, or others)
- Data sensitivity
2. Identify and document IT staff roles, roles requiring separation of duties, trusted roles, and associated accounts that require elevated access to perform their role. The IT staff role may include identifying a specific cyber workforce position or role required to manage the system.
3. Perform an automated analysis of permissions assigned versus those in use. The ongoing existence of unused but active permissions creates risk. The analysis can reveal unknown or unmanaged privileged user accounts originating by failure to disable
- the privileges of former employees
- default accounts created for new endpoints
- obsolete or abandoned accounts
4. Perform an automated analysis to identify the existence of microservices, the applications that use them, and the associated user groups. Such an analysis provides context regarding microservice use as well as visibility into the potential threats they may create. The use environment might reflect a combination of privileged and nonprivileged users who are both internal and external to the organization. Use by one group might pose low risk whereas use by the other might create high risk warranting corrective action.
5. Perform a **privileged account discovery** exercise to identify accounts that have elevated access. Accomplish discovery through an automated tool or directory analysis. Don't be surprised if there are more privileged accounts than expected. Privileged account discovery intends to identify accounts that lack accountability. Account types may include group, orphaned, rogue, and default accounts that may go unnoticed or unmanaged. Discovery should consist of all environments, including Windows, Unix/Linux, database, applications, and cloud environments that encompass infrastructure, platform, and software as a service platforms and applications.

<p align="center"><b>Figure 3: Location of Privileged Accounts</b></p>

<img src="{{site.baseurl}}/assets/playbooks/pam-identify.png" alt="Privileged accounts exist in windows, linux/unix, machines and network devices, devops, and applications/cloud." style="width:800px;" >

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Protect Your DevOps Access</h4>
    <p class="usa-alert__text">
      DevOps tools are a primary attack target. An attacker may extract privileged account credentials from one environment (i.e., DEV) and use them in subsequent environments (i.e., production) which is what happened in the 
      <a class="usa-link usa-link--external" class="usa-link" href="https://www.cisa.gov/uscert/ncas/current-activity/2021/01/06/cisa-updates-emergency-directive-21-01-supplemental-guidance-and" target="_blank" rel="noopener noreferrer">SolarWinds Orion Network Management product compromise</a>
      .
    </p>
  </div>
</div>

# Step 3. Implement as an Enterprise ICAM Service

ICAM is the set of tools, policies, and systems an agency uses to provide the right individual with access to the right resources, at the right time, for the right reason in support of federal business objectives. In the context of privileged users, ICAM supports:

- Unifying IT services by consolidating various privileged access tools at an enterprise level. This may include consolidating not only enterprise IT, but also mission application access tools.
- Improving access control by tracking and monitoring privileged user accounts and access.
- Improving compliance by centralizing access requests, auditing, and reporting.

An agency should use existing processes, controls, programs, and available tools to manage its privileged user population and enterprise resources effectively. Please refer to [Appendix C: NIST SP 800-53 Privileged User Overlay](#appendix-c-nist-sp-800-53-privileged-user-overlay) for a mapping of controls defined in SP 800-53. These controls are countermeasures for how an agency can reduce unwanted behavior by its privileged user population.

The [DHS CDM Program](https://www.cisa.gov/cdm){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} provides a broad spectrum of tools that enable an agency to identify privileged user risk on an ongoing basis. It can also help prioritize these risks based on impact and allow agency security leadership to reduce the most significant privilege user challenges.

## Privileged Identity Management

Identity management is how an agency collects, verifies, and manages attributes and entitlements for a privileged user. An agency should only grant entitlements that privileged users need to perform their assigned duties, thereby ensuring the least privilege as follows:

1. **Identify a cybersecurity workforce position** that outlines the appropriate responsibilities and duties. Use the [NIST Workforce Framework for Cybersecurity](https://niccs.cisa.gov/about-niccs/workforce-framework-cybersecurity-nice-framework-work-roles){:target="_blank"}{:rel="noopener noreferrer"} to identify suitable roles.
2. **Verify personnel security vetting and privileged user agreement** by the Personnel Security Office and ICAM program manager on an initial and continuing basis. The security office verifies the existing background, suitability, or fitness checks are valid and adequate. An agency should implement a consistent approach when conducting these checks that ensures background checks commensurate with the privileged user's level of risk as determined by an agency's risk assessment (e.g., some trusted roles may require a security clearance in their position of trust). The user should also sign a privileged user agreement regularly. This agreement may also be called a Rules of Behavior or a privileged appointment letter. This agreement highlights the responsibilities of the privileged user and acceptable rules of behavior. See Appendix B: Privileged User Agreement for an agreement template.
3. **Conduct periodic training** to ensure privileged users know their responsibilities and systems. An agency's privileged user agreement may also include training requirements such as annual insider threat, security awareness, and tailored privileged user procedure training. Privilege users should receive initial and continuing training on the following topics:
   1. Privilege access security principles.
   2. Disaster recovery and business continuity procedures.
   3. Current and pending architecture changes, system characteristics, and hardware and software components.
4. **Enforce least privilege** to only allow privileged users access to what is needed to perform their duty. If possible, implement just-in-time provisioning or account password check-out capabilities. Additional actions may include creating custom administrator accounts scoped for the role, like an application administrator versus a global administrator, and role rotation.
5. **Manage administrator lifecycle by** implementing and following lifecycle management practices in the [Identity Lifecycle Management playbook]({{site.baseurl}}/playbooks/ilm/).
   1. Integrate with an agency identity directory to reduce the potential of creating an orphaned privileged identity. In DHS CDM, this directory is called a master user record.
   2. Provision access when needed.
   3. Conduct access reviews every 30 days or less based on a risk determination and modify privileges as needed.
   4. De-provision users within 24 hours or less when access is no longer needed, their role changes, or users leave the organization. These de-provisioning activities should be integrated with ICAM processes and automated to the highest extent possible.

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Identity Assurance Level 3</h4>
    <p class="usa-alert__text">
      Privileged users most likely require the highest level of identity proofing. The Personal Identity Verification (PIV) vetting process is comparable to Identity Assurance Level 3 (IAL3).
    </p>
  </div>
</div>

## Privileged Credential Management

Credential management is how an agency issues, manages, and revokes privileged credentials. Agencies issue **unique Authenticator**** Assurance Level 3 credentials** for each privileged user. Credentials may include a PIV card or other phishing-resistant multi-factor cryptographic hardware authenticator identified in [NIST Special Publication 800-63-3B](https://pages.nist.gov/800-63-3/sp800-63b.html){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}.

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Authenticator Assurance Level 3</h4>
    <p class="usa-alert__text">
      Privileged users require the highest-level credential. A PIV card may not work in every use case. Instead, consider the best Authenticator Assurance Level 3 credential, which may include Fast Identity Online 2 (FIDO2) authenticators, for each type of access use case.
    </p>
  </div>
</div>

An agency may use a privileged access gateway or management solution to enable a PIV card or other phishing-resistant authenticator for enterprise resources that do not support PIV. A privileged access management solution is an intermediary between a privileged user and an enterprise resource such as a management console, database, or command-line interface. It may provide additional capabilities such as password vaulting, key vaulting, keystroke logging, session recording, account checkout, and just-in-time provisioning.

## Privileged Access Management

Access management is how an agency authenticates privileged users and authorizes access to protected services.

1. **Enforce Multi-factor Authentication (MFA)** for all administrator access. This may include a combination of phishing-resistant multi-factor authentication factors as outlined in NIST Special Publication 800-63.
2. **[Follow OMB Memo 22-09 guidance](https://www.whitehouse.gov/wp-content/uploads/2022/01/M-22-09.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}** which states Privileged Access Management (PAM) solutions that provide ephemeral single-factor credentials for human access to a system should not be used as a general purpose substitute for multi-factor authentication, or for routine single-sign-on access to legacy systems in place of needed modernization of those systems.
3. **Privilege access requests** are completed regularly and ongoing. The ongoing activity may be called an access review or certification. Access reviews may be paper-based but plan to automate this process through a workflow or identity entitlement tool.
4. **Monitor privileged user activity** via activity logging and regular log reviews. Additional controls may include keystroke logging and session recording based on risk assessment. Consider user behavior automated monitoring outlined in insider threat programs. Because of the heightened risk, an agency can hold privileged users to a higher monitoring standard than standard users.
5. **Use dedicated workstations** with limited applications and internet connectivity. This limits the potential risk of remote access exploitation and malware. A dedicated workstation may be called a privileged access workstation, a jump box, or bastion host.

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Preventative and Detective Measures</h4>
    <p class="usa-alert__text">
      Preventative measures proactively stop inappropriate behavior through background investigations, training, rules of behavior, privileged access workstation, and other mechanisms. Detective measures identify suspicious activities such as audit logs, keystroke logging, access logs, and account checkout. Agencies should use a combination to decrease privilege user risk.
    </p>
  </div>
</div>

# Step 4. Prioritize and Execute

This step explains the technical capabilities necessary to accomplish privileged user management goals and objectives. An agency should complete the following steps:

1. Create privileged user management with proper governance and leadership.
2. Scan and inventory systems to focus on those with a Federal Information Processing Standards (FIPS) categorization of high for confidentiality or integrity. Consider the risk impact of non-high connected systems such as an Agency Identity Directory compromise.
3. Leverage existing processes, controls, programs, and available tools to manage the privileged user population and enterprise resources effectively. Use capabilities from other ICAM services, such as Identity Governance and Administration (IGA), to bring privileged users into the context of a user in the organization.

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Prioritize by Risk</h4>
    <p class="usa-alert__text">
      Plan your technical coverage from the highest risk first. Systems that can change network configuration or access controls have "infrastructure impact" and are the most significant concern. Once your agency is comfortable with the process, consider expanding privileged user management to more systems and greater control.
    </p>
  </div>
</div>

<p align="center"><b>Figure 4: Privileged Identity Capabilities</b></p>

<img src="{{site.baseurl}}/assets/playbooks/pam-tech-arch.png" alt="A privileged identity architecture includes baseline capabilities for automated account discovery, policy management, and access reviews. Advanced capabilities include session and command management, password vaulting, advanced automated account discovery, and session monitoring." style="width:800px;" >

## Privileged Identity Baseline Capabilities

Understand the data flows and access types when designing the technical components of privileged user management. This section combines best practices from [NIST Special Publication 1800-18 Privileged Access Management](https://www.nccoe.nist.gov/financial-services/privileged-account-management){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} and the [DHS Continuous Diagnostics and Mitigation PRIV function](https://community.max.gov/pages/viewpage.action?spaceKey=DHS&title=Technical){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. The minimum capability baseline should consist of the three elements below.

1. An **account discovery** identifies current and newly created privileged accounts. Look for accounts on these systems that can provide lateral movement or execute changes to the privileges or other accounts. Advanced discovery can identify when privileged access is inherited rather than directly entitled.

2. The **policy manager** establishes access control policies, including a password complexity and rotation policy, MFA policy, session timeout, number of access attempts, and session requirements that only allow specific protocols. This may be part of a privileged access management tool or a separate type of privileged access (e.g., Windows Operating System manager for remote desktop protocol).

3. An **access review** capability that requires account reviews regularly, such as every 30 days. Conducting access reviews ensures the privileged user only has access to accounts for as long as they are needed.

## Privileged Identity Advanced Capabilities

An agency should consider using a privileged access management (PAM) tool that centralizes technical capabilities with advanced features for higher-risk systems when baseline capabilities do not mitigate the risk sufficiently. Some cloud applications may have these advanced features as part of existing licensing. Review capabilities available under current tools and licensing before evaluating new solutions. A privileged account or access management tool is vital to protect high-value assets that are difficult or infeasible to modernize. A PAM tool can implement necessary security controls such as multi-factor authentication, fine-grained access control, auditing and reporting, and other capabilities. In addition to centralizing capabilities and enhancing the security of legacy infrastructure, the advanced capabilities include three core elements below:

1. **Session & command management** enforces the access control settings in the policy manager. This may cover multiple protocols such as remote desktop protocol, secure shell, azure command line, or others.

1. **Password vaulting** stores and rotates passwords managed by a PAM tool.

1. **Session monitoring** records each privileged session. This can help with monitoring, logging, and auditing or be used for training purposes. A session recording can include an actual live screen recording or keystroke recording.
2. **Advanced Automated Account Discovery** provides immediate control over rogue accounts and devices as soon as they are created or discovered. This feature is key to mitigate a [malicious Active Directory ticket-granting activity](https://www.cisa.gov/uscert/ncas/alerts/aa22-110a){:class="usa-link usa-link--external"} such as "Kerberoasting" or a Golden Ticket attack.

# Conclusion

Privileged users are at the core of protecting federal information technology assets. Government employees and contractors need elevated access to perform necessary administrative and security functions however, this creates an inherent risk of insider threat or account compromise. Agencies can reduce privileged user risk by implementing and maintaining privileged user management that encompasses both human and non-human users. It is recommended to integrate the management of your privileged users with your agency ICAM tools and provide enterprise-wide services to all agency mission applications. Prioritize privilege identity control over highest risk systems and execute on the requirements to keep federal data secure.

# Appendix A: Reference Documentation
The following documentation references help inform the development and direction of a privileged user program.

1. [National Insider Threat Policy, November 2012](https://www.dni.gov/files/NCSC/documents/nittf/National_Insider_Threat_Policy.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} 
   -  This policy sets two priorities to strengthen the protection and safeguarding of classified information. It also references [Executive Order 13587 (October 2011)](https://www.dni.gov/files/NCSC/documents/nittf/EO_13587.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} as the primary authority to establish insider threat programs.
      1. Create the Insider Threat Task Force.
      2. Set the minimum standards for Executive Branch Insider Threat programs.
   
2. [National Strategy for Information Sharing and Safeguarding, December 2012](https://www.dni.gov/files/ISE/documents/DocumentLibrary/2012infosharingstrategy.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} 
   - This strategy aims to strike the proper balance between sharing information with those who need it to keep our country safe and safeguarding it from those who would do us harm. As an agency works to extend its ICAM implementations across security domains, it is important to consider Goal #4 and Priority Objective #4 in relation to managing privileged users.
       - Goal #4 focuses on identifying, preventing, and mitigating insider threat across all domains.
       - Priority Objective #4 extends and implements the FICAM roadmap across all security domains. **Note:** The FICAM roadmap is superseded by the [FICAM architecture]({{site.baseurl}}/why/icam/){:target="_blank"}{:rel="noopener noreferrer"} and [accompanying playbooks]({{site.baseurl}}/playbooks/){:target="_blank"}{:rel="noopener noreferrer"}.
  
3. [National Insider Threat Task Force (NITTF)](https://www.dni.gov/index.php/ncsc-how-we-work/ncsc-nittf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
    - The primary mission of the NITTF is to develop a government-wide insider threat program to deter, detect, and mitigate insider threats, including safeguarding classified information from exploitation, compromise, or other unauthorized disclosure, and accounting for risk levels as well as any individual agency needs, missions, and systems.

4. [OMB Memo 17-09 - Management of Federal High Value Assets](https://www.whitehouse.gov/sites/whitehouse.gov/files/omb/memoranda/2017/m-17-09.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
    - General guidance for the planning, identification, categorization, prioritization, reporting, assessment, and remediation of federal HVAs.

5. [NIST Special Publication 1800-18 - Privileged Account Management for the Financial Services Sector](https://www.nccoe.nist.gov/projects/use-cases/privileged-account-management){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
    - While this special publication is focused on the financial services industry, it also contains agnostic implementation best practices.

6. [NIST Interagency Report 7966 - Security of Interactive and Automated Access Management Using Secure Shell (SSH)](https://csrc.nist.gov/publications/detail/nistir/7966/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
  - This publication assists organizations in understanding the basics of SSH interactive and automated access management in an enterprise, focusing on the management of SSH user keys.

7. [Federal Identity, Credentials, and Access Management (FICAM) Architecture - Access Management]({{site.baseurl}}/arch/#access-management){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
     - The FICAM Architecture is a framework for an agency to use in ICAM program and solution roadmap planning. Privileged Access Management is identified as a distinct service within the access management portion of the ICAM services framework.

8. [Common Sense Guide to Mitigating Insider Threats (6th Edition), February 2019](https://resources.sei.cmu.edu/library/asset-view.cfm?assetid=540644){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
    - The Software Engineering Institute at Carnegie Mellon University’s Insider Threat Center released the Common Sense Guide to provide the federal government and industry with recommendations on insider threat mitigation, based on a database of more than 700 cases. This work was sponsored by the Department of Homeland Security, Office of Cybersecurity and Communications and the U.S. Secret Service. The Common Sense Guide presents readers with 19 best practices to mitigate insider threats.

# Appendix B: Privileged User Agreement

An agency can tailor [this template]({{site.baseurl}}/docs/template-pua.docx){:target="_blank"} to help meet mission goals and business needs to support privileged user access for logical and physical resources. An agency should obtain and retain a digitally signed copy of such instruction and ensure that privileged user access to the identified protected resource is prohibited without a signed acknowledgment of system-specific rules and a signed acknowledgment of said instruction.

## [AGENCY OR PROGRAM NAME] Privileged User Agreement

Version 1.0  
Last Updated: August 10, 2021

I am being granted elevated access to [AGENCY or PROGRAM NAME] controlled systems and facilities and am responsible for all actions taken under my accounts. I agree to the following:

1.	I will only use my elevated privileges to perform authorized tasks or mission-related functions on systems I am authorized to access.
2.	I will not use my elevated privileges to perform routine tasks that do not require elevated access.
3.	I will obtain and maintain required certifications and trainings according to [AGENCY OR PROGRAM POLICY], including but not limited to specialized role-based security and privacy training.
4.	I understand the need to safeguard all credentials at the level appropriate to the data they protect.
5.	I will not share passwords, accounts, or other credentials with unwanted personnel.
6.	I will only add and remove users to the [ADMINISTRATOR GROUPS] group after receiving approval/direction from the [AGENCY OR PROGRAM POINT OF CONTACT].
7.	I will not install, modify, or remove any hardware or software without written approval from the [AGENCY OR PROGRAM POINT OF CONTACT].
8.	I will not knowingly introduce any viruses, malicious/unwanted code, malware, or Trojan horse programs into [AGENCY OR PROGRAM NAME] systems.
9.	I will not attempt to hack the network or connected information systems to gain access to data or agency assets which I am authorized to access. I will not use sensitive information for anything other than the purpose for which it has been authorized.
10.	I will contact the [AGENCY OR PROGRAM POINT OF CONTACT] if I require clarification of my roles or responsibilities.

I understand that failure to comply with the above requirements may result in disciplinary action, including termination of employment; removal or disbarment from work on federal contracts or projects; revocation of access to federal information, information systems, and/or facilities; criminal penalties; and/or imprisonment. I also understand that violation of certain laws, such as the Privacy Act of 1974, copyright law, and 18 USC 2071 can result in monetary fines and criminal charges that may result in imprisonment.

Printed Name:  
Date:   
Digital Signature (preferred):  

# Appendix C: NIST SP 800-53 Privileged User Overlay

In seeking to implement cohesive, integrated privileged user practices, an agency should consider existing controls and practices that can assist in safeguarding the enterprise’s protected resources from privileged compromise. This section provides an analysis of countermeasures for privileged user compromise by leveraging NIST SP 800- 53 security controls.

For each countermeasure, an accompanying explanation provides guidance on how the associated control relates to privileged users to assist an agency defend relevant protected resources. The controls are organized into the control families as listed in SP 800-53.

<table class="usa-table pam-table">
  <thead class="usa-sr">
    <tr>
      <th id="pam-table-heading-counter" scope="col">Countermeasure</th>
      <th id="pam-table-heading-control" scope="col">Control</th>
      <th id="pam-table-heading-explain" scope="col">Explanation</th>
    </tr>
  </thead>
  <tbody>
    {% for category in categories %}
      <tr class="pam-table-category-heading" data-category="{{ category }}">
        <th colspan="6" class="pam-table-heading" id="pam-table-heading-{{ category | slugify }}"><b>{{ category }}</b></th>
      </tr>
      {% for pam in site.data.overlay_pam %}
        {% if pam.category == category %}
          <tr class="pam-table-row" data-category="{{ pam.category }}">
            <td headers="pam-table-heading-{{ category | slugify }} pam-table-heading-counter">{{ pam.countermeasure }}</td>
            <td headers="pam-table-heading-{{ category | slugify }} pam-table-heading-control">{{ pam.control }}</td>
            <td headers="pam-table-heading-{{ category | slugify }} pam-table-heading-explain">{{ pam.explanation}}</td>
          </tr>
        {% endif %}
      {% endfor %} <!--pam-->
    {% endfor %}<!--category-->
  </tbody>
</table>
