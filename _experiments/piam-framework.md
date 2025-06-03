---

layout: page
collection: experiments
title: Public Identity and Access Management Framework Guide
permalink: /experiments/pid/framework/
sidenav: papers
sticky_sidenav: true

release: 1.0 

subnav:
  - text: 1. Introduction
    href: '#1-introduction'
  - text: 2. Key Terms
    href: '#2-key-terms'
  - text: 3. Disclaimer
    href: '#3-disclaimer'
  - text: 4. Public Identity & Access Management (PIAM) Overview
    href: '#4--public-identity--access-management-piam-overview'
  - text: 5. Public Identity & Access Management (PIAM) Goals & Objectives
    href: '#5--public-identity--access-management-piam-goals--objectives'
  - text: 6. Public Identity & Access Management (PIAM) Services Framework
    href: '#6-public-identity--access-management-piam-services-framework'

---

{% include alert-warning.html heading="Draft" content="The following document is a Draft and should not be interpreted as a finalized rule." %}

**Release {{page.release}}**

## 1. Introduction

The Public Identity and Access Management (PIAM) framework is a critical component of modern cybersecurity strategies, empowering security teams to manage secure access control and facilitate public service accessibility. 

The PIAM framework encompasses the technologies, processes, and policies required to regulate and authorize individual access to resources. By implementing robust identity and access management, agencies can ensure that individuals access only authorized assets. This framework is thus instrumental in safeguarding agency assets from both internal and external threats, enforcing security protocols, and adhering to security guidelines and best practices. 

This version of the PIAM framework highlights enterprise IAM policies, technologies, and system approaches for public citizen interactions with the federal government. 

The PIAM framework has the following key components:

**1. Identification**

*User Identification Methods*

The first critical step in the PIAM framework is establishing precise user identities through diverse identification methods. These range from traditional approaches like usernames and email addresses to more advanced strategies. Diversified identification methods - such as biometric techniques that uniquely identify users based on their physical traits - provide an enhanced layer of security that makes unauthorized access far more difficult. By rigorously validating user identities, organizations can ensure that the correct individuals access the appropriate resources. 

*Device Identification Methods*

*Device identification* is equally important within the identity and access management framework. Device identification is accomplished by tracking MAC and IP addresses, which enables easy cataloging and management of devices attempting network access. Proper device identification ensures that only authorized devices can connect to the network, thereby reducing the risk of unauthorized access and potential security breaches.

**2. Authentication**

Authentication strategies, including single sign-on (SSO) and multi-factor authentication (MFA), have emerged as essential components of a fortified cyber security system, ensuring only authorized users access critical systems and data.

SSO allows users to access multiple services with a single login credential, streamlining authentication across various platforms. However, SSO alone provides insufficient protection against sophisticated cyber threats, which is where MFA becomes critical.

Multi-factor authentication goes beyond traditional username and password combinations by requiring users to validate their identities through multiple authentication elements: 

- Something they know (passwords)   
- Something they have (tokens or smart cards)  
- Something they are (biometrics) 

This multi-layered approach means that even if malicious actors acquire one form of authentication, they would still require the additional elements to gain system entry. This multi-layered approach significantly elevates security, making it exceedingly challenging for unauthorized users to breach the system.

Consider a scenario where a company adopts MFA for its employee portal:

To access the system, employees must enter their password and then provide a fingerprint scan using a biometric device. Only when both forms of authentication are successfully verified will the employee gain access to the portal. This means that a compromised password alone cannot breach the system.

By integrating SSO with MFA, organizations establish a robust security framework that offers convenience while safeguarding against evolving cyber threats.

**3. Authorization**

*Role-Based Access Control (RBAC)*

RBAC orchestrates access rights based on users' roles within an organization. It allows authenticated users to inherit specific permissions corresponding to their roles. Whether designated as an “admin,” “manager,” or “employee,” each role comes with tailored privileges, granting organizations meticulous control over who can access, modify, or delete specific resources.

*Least Privilege Access Control*

Least Privilege Access Control operates on the principle that users should receive only the minimum access levels required to perform their tasks effectively. By granting users precisely the permissions they need, organizations significantly reduce potential security risks associated with accidental or intentional misuse of sensitive data or resources. 

*Attribute-Based Access Control (ABAC)*

The most sophisticated access control approach, ABAC considers many attributes when granting resource access. These attributes can include user characteristics, environmental conditions, and other contextual factors. This method enables organizations to craft highly nuanced levels of access policies that adapt to diverse scenarios.

For instance, ABAC might restrict sensitive data access based on variables like user location, time of access, or project involvement, illustrating a tailored and context-aware approach to authorization.

Consider the various authorization approaches a multinational corporation managing a vast database of customer information could take:

- With RBAC, employees are assigned role-specific permissions (e.g., “customer support representative,” “sales manager,” and “IT administrator”). Each role has distinct permissions: customer support representatives can only view customer data, sales managers can modify sales records, and IT administrators can access the entire database for maintenance purposes.

- Using least privilege access control, these roles are further refined, ensuring that employees within each role have the bare minimum access necessary to fulfill their duties. 

- Finally, ABAC considers additional attributes, such as location and time. For instance, an employee's access might be restricted to specific customer data based on their geographical location.

**4. Monitoring & Auditing**

After identification, authentication, and authorization, the most essential components of maintaining a secure digital environment are monitoring and auditing. These processes observe, track, manage, and report user activities to ensure compliance, detect anomalies, and safeguard sensitive information.

The monitoring and auditing processes are designed to produce a comprehensive analysis of various user-related activities. This includes monitoring password resets, identifying uncorrelated accounts, and tracking the number of accounts, roles, and entitlements across multiple applications and systems. Additionally, these processes closely monitor login failures, uncorrelated privileged accounts, instances of separation-of-duty violations, and the management of non-human identities, along with their associated access rights.

By implementing robust monitoring and auditing protocols, organizations can achieve several crucial objectives:

- **Security Compliance**: Ensuring user activities adhere to established security policies, as well as regulatory and industry standards.

- **Anomaly Detection:** Quickly identifying unusual or suspicious user behavior through continuous monitoring, allowing for immediate response and mitigation of potential security threats.

- **Data Protection**: Preserving the confidentiality and integrity of information through rigorous access tracking, monitoring, and auditing. 

- **Risk Mitigation**: Identifying and addressing security vulnerabilities in real-time to minimize risks associated with unauthorized access, ensuring a proactive approach to security management.

- **Operational Efficiency**: Automating the monitoring process to streamline operations, saving time and resources that would otherwise be spent on manual oversight.

**5. Security & Compliance**

Safeguarding enterprise assets is paramount to a secure digital environment. It involves protecting corporate devices, intricate systems and valuable data, expansive networks, and vital software applications. Threats to these come in all shapes and sizes, from external breach attempts to internal risks posed by disgruntled insiders or negligent practices.

Comprehensive security and compliance strategies are required to address these challenges effectively. Robust security measures such as encryption, multi-factor authentication, and intrusion detection systems serve as the first line of defense against external threats, while mitigating insider risks requires stringent access controls, employee training programs, and regular security audits.

Ensuring compliance with industry regulations and standards further strengthens an organization's defense mechanisms. By adhering to frameworks like GDPR, HIPAA, or PCI DSS, organizations enhance their security posture and build trust among customers and partners.

Consider a financial institution managing vast amounts of sensitive customer data and its approach to cybersecurity technologies:

- Continuously monitoring network traffic, employing advanced firewalls, and conducting regular penetration testing allows the institution to fortify its defenses against external cyber threats.

- Enforcing strict access controls, periodic employee training sessions, and strict adherence to financial data protection regulations further minimizes insider risks.

By embracing a proactive and holistic approach to security and compliance, organizations can protect their assets and foster a resilient and secure environment.

Implementing a Public Identity and Access Management framework offers organizations a wide range of benefits, enhancing security, efficiency, and overall productivity.

Benefits of implementing a PIAM framework include: 

**1. Improved User Experience**

PIAM frameworks enhance user experience by offering swift, self-service access to authorized resources. These frameworks facilitate seamless interaction with organizational systems and applications, eliminating bureaucratic barriers and access complexities.

Users experience a streamlined, intuitive interface that guides them effortlessly through an organization's digital infrastructure. By reducing cumbersome access procedures, PIAM frameworks fosters user satisfaction, trust, and reliability. This approach not only improves user experience but also reduces administrative burden on IT teams, allowing them to focus on more strategic tasks.

**2. Policy Definition and Enforcement**

PIAM frameworks create unambiguous policies specifying who possesses privileged access to crucial systems and sensitive data. This precision ensures transparency in access permissions, enabling stakeholders to easily understand access permissions within their organization.

PIAM frameworks utilize robust enforcement mechanisms, including advanced access controls and authentication protocols, to ensure user compliance with established guidelines. By doing so, these frameworks minimize the likelihood of unauthorized access and data breaches, enhancing overall security.

**3. Risk Mitigation**

Public identity and access management frameworks also employ sophisticated security measures, including multi-factor authentication, identity verification, and real-time monitoring. These measures significantly reduce the vulnerability of systems to malicious activities, making it challenging for unauthorized users to gain access.

By enforcing robust one-time password policies, regularly reviewing and updating permissions, and implementing automated access revocation,  these frameworks effectively safeguard valuable data and resources, ensuring a strong defense against potential security breaches.

**4. Cost-Effectiveness & Efficiency**

Public identity and access management frameworks optimize organizational resource allocation by significantly reducing the time and financial resources required to secure system and data access. Through automation, these frameworks simplify access request and approval procedures, streamlining operational workflows. 

Automated processes not only save valuable time but also  minimize the risk of manual errors, ensuring a more efficient process. By eliminating unnecessary complexities, PIAM frameworks  enable faster and more accurate approval processes and decision-making.

This streamlined approach boosts overall productivity and leads to substantial cost savings. By reducing administrative overhead and removing manual bottlenecks, organizations can develop a more efficient and cost-effective approach to access control management.

**5. Enhanced Incident Response Capabilities**

Public identity and access management frameworks significantly enhance an organization’s incident response capabilities. During security breaches, these frameworks enable security teams to execute efficient and well-coordinated responses. Streamlining access controls and implementing real-time monitoring allow security professionals to quickly detect and isolate compromised accounts or systems.

This rapid response mechanism is crucial for containing security incidents, minimizing potential damage, and preventing the escalation of threats. Furthermore, PIAM solutions facilitate comprehensive post-incident analysis, enabling security teams to identify the root causes of breaches and implement necessary security improvements to prevent future occurrences.

## 2. Key Terms

Listed below are key terms used throughout this document. 

**Assertion:** A statement from one agency resource to another that contains information about an identity.

**Assertion protocol**: A data exchange format used to communicate authentication and authorization information between two agency resources.

**Authentication**: How you verify the identity of someone or something trying to access an agency resource.

**Authorization**: How you decide whether to allow someone to access an agency resource.

**Authenticator**: Something an entity possesses and controls to authenticate their identity, such as a password, token, or code.

**Credential**: An authenticator that is authoritatively bound to an identity.

**Public Cloud**: A cloud infrastructure provisioned for open use by the general public. A public cloud exists on the premises of the cloud provider, owner, and operator, who may be a business, academic, or government organization, or some combination of the three. In the context of this guide, “cloud” refers to a public cloud.

**Resource**: A federal executive branch application or data repository.

## 3. Disclaimer

The U.S. General Services Administration’s Office of Government-wide Policy, Identity Assurance and Trusted Access Division developed this best practice guide. U.S. Federal Executive Branch agencies can use this guide as a reference point for processes and services to manage citizen identity and their access. This guide is not an official policy or mandated action. However, it does provide information backed by federal authoritative sources.

## 4.  Public Identity & Access Management (PIAM) Overview

PIAM represents the set of tools, policies, and systems that enables precise, purpose-driven resource access in support of federal business objectives.

Agencies implement PIAM services to unify their IT services, improve physical access control, and improve information security and decision-making. PIAM has four practice areas, shown below.


<div style="text-align:center;">
  <img src="{{site.baseurl}}/assets/experiments/piam-framework/figure1.png" alt="Public Identity & Access Management (PIAM) Overview" width="80%">
</div>

## 5.  Public Identity & Access Management (PIAM) Goals & Objectives

Organizational goals and objectives define the strategic aims of a federal agency's enterprise PIAM program. These goals and objectives should align with ICAM functions and map to governmentwide policies, cross-agency priorities, and strategic government initiatives.

Goals serve as aspirational statements for senior government leaders, agency executives, and agency program leadership responsible for setting program strategy. Objectives represent actionable areas where agencies can develop execution strategies, action plans, and performance metrics in alignment with mission needs.



## 6. Public Identity & Access Management (PIAM) Services Framework

<div style="text-align:center;">
  <img src="{{site.baseurl}}/assets/experiments/piam-framework/figure2.png" alt="Public Identity & Access Management (PIAM) Services Framework" width="50%">
</div>

### A. Identity Management
  <p>
   <img class="float-left margin-right-4" src="{{site.baseurl}}/assets/experiments/piam-framework/figure3.png" target="_blank" alt="Identity Management" width="25%">Identity Management is the process by which an agency collects, verifies, and manages attributes and entitlements to establish and maintain enterprise identities for authorized personnel accessing federal services and mission partner systems. This service does apply to public citizen identity management. 
  </p>
  <br><br><br>
  Agencies should manage public identity attributes with a centralized approach and distribute them as needed. Examples of identity attributes include:

  - **Core identity attributes**  
    - First name, last name, and address of record.  
  - **Contact attributes**   
    - Physical location, phone number, and email address.  
  - **Authorization attributes**   
    - Federal service request type  

  An entitlement is a specific type of authorization attribute that refers to an application permission. Entitlements management is the act of managing those permissions. Agencies can create or aggregate these entitlements through a number of manual and automated mechanisms. To optimize administrative efficiency, an agency may group multiple entitlements into specific roles or groups. This approach streamlines provisioning activities while enhancing auditing and reporting capabilities. As an example, a new public citizen may require access to ten core enterprise applications for a specific federal service. Rather than processing individual access requests, an agency could create a public persona group with predefined public access entitlements, then automatically provision the ten required applications 

  The PIAM framework’s Identity Management services  constitute a comprehensive lifecycle approach, encompassing identity:

  - Creation  
  - Identity Proofing  
  - Provisioning  
  - Maintenance  
  - Aggregation  
  - Deactivation. 

  These services are collectively known as Public Identity Lifecycle Management, representing a holistic approach to managing digital identities within federal systems.

<table class="usa-table">
  <caption>
    Table 2. Identity Management Services in the PIAM Framework
  </caption>
  <thead>
    <tr>
      <th scope="col">Service</th>
      <th scope="col">Description</th>
      <th scope="col">Keywords</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Creation</th>
      <td>Establish an identity made of attributes that define a person or entity.</td>
      <td>Identity Record, Authoritative Source</td>
    </tr>
    <tr>
      <th scope="row">Identity Proofing</th>
      <td>Use identity attributes to connect a digital identity to a real-world entity.</td>
      <td>Source Document Validation, Remote Proofing, In-Person Proofing</td>
    </tr>
    <tr>
      <th scope="row">Provisioning</th>
      <td>Create, manage, and delete accounts and entitlements.</td>
      <td>Identity Lifecycle Management, Workflow, De-provisioning, Account Management, Account Creation, Entitlements Management</td>
    </tr>
    <tr>
      <th scope="row">Maintenance</th>
      <td>Maintain accurate and current attributes in an identity record over its lifecycle</td>
      <td>Identity Lifecycle Management, Updating, Attribute Management</td>
    </tr>
    <tr>
      <th scope="row">Aggregation</th>
      <td>Find and connect disparate identity records for the same person or entity.</td>
      <td>Identity Reconciliation, Identity Resolution, Account Linking</td>
    </tr>
    <tr>
      <th scope="row">Maintenance</th>
      <td>Maintain accurate and current attributes in an identity record over its lifecycle.</td>
      <td>Identity Lifecycle Management, Updating, Attribute Management</td>
    </tr>
  </tbody>
</table>

<div style="text-align:center;">
  <img src="{{site.baseurl}}/assets/experiments/piam-framework/figure4.png" width="80%" alt="Figure 4">
</div>

### B. Access Management

  <p>
   <img class="float-left margin-right-4" src="{{site.baseurl}}/assets/experiments/piam-framework/figure5.png" target="_blank" alt="Access Management" width="25%">Access Management represents the process by which an agency authenticates enterprise identities and authorizes appropriate access to protected services. At its core, this framework orchestrates two fundamental, often conflated security concepts: authentication and authorization.
  </p>
  <br><br><br>
  <p>
   These interconnected concepts play a critical role in system security, ensuring that only authorized users access sensitive information and systems. While closely related, they serve distinct purposes in maintaining a robust security architecture.  
 </p>

 <div style="text-align:center;">
  <img src="{{site.baseurl}}/assets/experiments/piam-framework/figure6.png" alt="Authentication and Authorization Process">
 </div>

  **Authentication** is the initial access control step, verifying the legitimacy of the person or system seeking entry. This process answers the fundamental question, “Who are you?”

  **Authorization** takes place after authentication, determining which resources, actions, or operations the authenticated user can access or perform within a system. This process answers the critical question: “What are you allowed to do?” Authorization works based on predefined rules, roles, or permissions set by the system administrator. These permissions can vary depending on the user's role within the organization or specific access request conditions, ensuring that authenticated users can only interact with resources aligned with their access permissions.

  Working hand-in-hand, these two fundamental components form the backbone of effective security, creating a secure environment by ensuring that all users are subject to both identity verification and permission management. 

  <div style="text-align:center;">
    <img src="{{site.baseurl}}/assets/experiments/piam-framework/figure7.png" alt="Authentication and Authorization: Security Pillars">
  </div>

  Access management is a functionality that determines whether a user has permission to access a certain resource, and enables the enforcement of predefined access policies.

  Access management is implemented through access policies defined by access policy administrators. These policies specify which groups of users (e.g. Sales, R\&D, HR) are allowed access to which cloud applications (e.g. Salesforce, Office 365, Jira, Taleo), as well as the required user attributes to access each application (e.g. trusted network, password, OTP).  

  Access policies can adjust attribute assessment requirements based on cloud application sensitivity. Attributes are assessed using risk-based or context-based authentication methods, which are central to enforcing each cloud application’s defined access policies.

  Cloud access management also integrates with single sign-on (SSO), which enables access to multiple cloud applications through the use of a single username-and-password set or “identity.”

  **Identity Federation**  
  Identity federation involves a single system called a trusted Identity Provider (“IdP”) that governs the authentication of users. Cloud applications relay the authentication process to the Identity Provider each time a user attempts to access them. Federated identity solves the challenges of managing credentials for multiple applications separately by leveraging standardized federation protocols such as SAML and Open ID Connect, and proprietary protocols like Microsoft’s WS-Federation.

  **Federated Login**  
  Federated login utilizes federation protocols (such as SAML, Open ID Connect and others) to authenticate users and relay authentication information to the target system through an “authentication assertion.” This assertion contains either an “accept” or “reject” response, determining user access.

  The mechanism allows users to access multiple cloud applications using a single authentication identity. Instead of managing multiple credential sets, users can seamlessly transition between corporate networks, VPNs, and cloud services using a consistent digital identity. 

  **Identity Provider**  
  Identity federation protocols (such as ISAML) enable the safe exchange of identity data between unaffiliated websites using an Identity Provider (IdP) and Service Provider model. When a user attempts to access a Service Provider (cloud-based service), they are redirected to the trusted Identity Provider for authentication and/or authorization data. The Identity Provider verifies the user’s authentication data (e.g. user cookies, device information, network credentials, OTP) and produces an “accept” or “reject” response. This response is then sent to the Service Provider. Authorization data may include permissions to access such information as email addresses from a webmail account or names of friends from a social network account.

  **Context-based Authentication**  
  Context-based authentication, also called risk-based or adaptive authentication, verifies user identity by assessing supplemental contextual information during login. The most commonly evaluated attributes include a user’s location, time of day, IP address, device type, URL, and application reputation. 

  This sophisticated approach aims to create a seamless, transparent authentication process. By analyzing login attributes--both contextual and behavior based (e.g. typing speed, page view sequence)--single sign on and access management solutions can continuously match a user’s required level of authentication with the appropriate application-defined access policy. In this way, authentication is applied granularly, tailored to individual application access policies, rather than as rules implemented uniformly across all enterprise resources.

### C. Privileged Access

  <p>
   <img class="float-left margin-right-4" src="{{site.baseurl}}/assets/experiments/piam-framework/figure8.png" target="_blank" alt="Privileged Access" width="25%">A "privileged access public identity" refers to a user account with elevated permissions or system access that is associated with a public-facing identity. This identity is not necessarily hidden or strictly controlled, potentially creating a security risk by inadvertently enabling access to sensitive information.
  </p>
  <br><br>
  **Key points about privileged access public identities:**  
  - **Elevated permissions:** These accounts have significantly more access rights compared to standard user accounts, allowing them to perform sensitive tasks on behalf of other public citizens. 


  - **Publicly known identity:** Unlike a "service account" which might be hidden by design, a public identity is often associated with a known user within the organization, potentially making it easier for malicious actors to target. 


  - **Potential security concerns:** The combination of elevated permissions with a public identity creates inherent security vulnerabilities, as unauthorized individuals could potentially exploit the account to gain access to sensitive systems or data.

  **Mitigating risks**  
  The following are possible approaches to mitigate risks associated with privileged access:

  - **Implement strong access controls:** Utilize multi-factor authentication, password complexity rules, and session monitoring to protect privileged accounts associated with public identities. 

  - **Follow the principle of least privilege:** Grant only the minimum necessary access level to each user based on their job requirements.

  - **Use dedicated privileged access management solution for elevated access:**  Leverage specialized tools offering advanced  security features like just-in-time access, session recording, and granular access controls for privileged accounts

  **Key Benefits & Principles of LPA:**

  Least Privilege Access (LPA) is a fundamental security concept that minimizes risks by ensuring users, applications, and systems only have the permissions necessary to perform their tasks - nothing more. Adopting Least Privilege Access is essential for safeguarding sensitive information and maintaining a robust security framework, as articulated by the following benefits it offers:

  - **Minimizes Attack Surface:** Reduces the risk of insider threats, malware propagation, and unauthorized access.  
  - **Enhances Compliance:** Meets regulatory standards like GDPR, HIPAA, and NIST.  
  - **Limits Lateral Movement:** Prevents attackers from escalating privileges within a network.  
  - **Improves Operational Efficiency:** Reduces human error and minimizes accidental data exposure risks.  
  - **Supports Zero Trust Security:** Ensures continuous verification of identities and access rights.


  <div style="text-align:center;">
    <img src="{{site.baseurl}}/assets/experiments/piam-framework/figure9.png" alt="Public Identity Access Management Framework 3" width="80%">
  </div>

  **Best Practices:**

  -  Implement Role-Based Access Control (RBAC)  
  -  Use Just-in-Time (JIT) Access to limit exposure  
  -  Conduct regular access reviews & audits  
  -  Apply multi-factor authentication (MFA) for sensitive systems

  By enforcing Least Privilege Access, organizations can significantly improve their security posture and reduce the risk of breaches.

### D. Governance

  <p>
   <img class="float-left margin-right-4" src="{{site.baseurl}}/assets/experiments/piam-framework/figure10.png" target="_blank" alt="Governance" width="25%">Governance is the set of practices and systems that guide PIAM functions, activities, and outcomes. Public identity governance is the management of how a government represents a person and the access they have to government services. It involves establishing policies, assigning permissions, and managing user roles.
  </p>
  <br><br><br><br>
  Public identity governance has four areas of focus:  

  - **Identity governance and administration (IGA):** A framework that manages digital identities and permissions   
  - **Access control:** The practice of ensuring that only authorized users can access specific resources   
  - **Risk assessment:** A process involving analyzing risks and producing reports to track use and prove compliance   
  - **Automation**: The process of using machine learning to automate tasks like password management and provisioning  
    
    Public identity governance plays a critical role in ensuring that only authorized individuals can access government services while reducing the risk of unauthorized access and security breaches. This approach helps organizations maintain regulatory compliance and facilitates efficient public service delivery through digital platforms.  
    
    The principle of least privilege (PoLP) is an information security concept which maintains that a user or entity should have access to only the specific data, resources, and applications needed to complete required tasks. Organizations that follow this principle can improve their security posture, significantly reducing their attack surface and mitigating the risk of malware spread.   
    
    PoLP works by limiting accessible data, resources, applications, and application functions to only what specific tasks or workflows require. Organizations that fail to incorporate the principle of least privilege inadvertently create over-privileged user accounts or entities, increasing the potential for breaches and misuse of critical systems and data.

As a fundamental pillar of zero trust, the principle of least privilege enables the accurate identification of applications and specific application functions across any and all ports and protocols--including dynamic ports--regardless of the IP address or fully qualified domain name (FQDN) an application uses. This functionality eliminates the need for administrators to think about network constructs and enables fine-grained access control to implement comprehensive least-privileged access.

  Ongoing compliance and monitoring ensures that users within an organization only have access to the data and systems they are authorized to use. By actively monitoring user activity and regularly reviewing access privileges, organizations can maintain compliance with security policies and regulations throughout the user lifecycle.
    
  **Key aspects of ongoing identity access compliance and monitoring:**
    
  - **User lifecycle management**  
    - Tracking public citizen access from the moment they are onboarded through system activity, including monitoring and making changes to federal services and profile updates as needed.  
  - **Access control mechanisms**  
    - Implementing robust access control methods such as role-based access control (RBAC) to assign permissions based on user roles and responsibilities.  
  - **Least privilege principle**  
    - Granting users only the minimum level of access required to perform their job functions.  
  - **Regular access reviews**  
    - Periodically reviewing public citizen access rights to identify and revoke unnecessary or outdated permissions.  
  - **User activity monitoring**  
    - Continuously logging and analyzing user actions within systems to detect suspicious behavior or potential security breaches.  
  - **Auditing and reporting**  
    - Generating reports on public citizen access patterns and potential security risks to identify areas for improvement.  
  - **Regulatory compliance**  
    - Ensuring that access management practices align with relevant industry standards and regulations such as GDPR, HIPAA, or PCI DSS

  Auditing and monitoring should not only check for compliance, but also monitor for threat indicators and anomalous activities. This approach encompasses the generation, collection, and analysis of logs, events, and other information to provide the best means of detecting compliance-related infractions and suspicious activities. Without an effective auditing and monitoring program, attacks such as the use of stolen credentials and misuse of privileged access by insiders would not be detected in a timely manner, if at all.. These auditing and monitoring capabilities can be integrated with automated tools that orchestrate response actions to counter these attacks. 

  Effective reporting from auditing and monitoring also provides situational awareness of an organization’s security posture. Below are key considerations for assessing an organization’s auditing and monitoring capabilities to identify improvements necessary for countering top threats. Critically, this is not a one-time assessment; organizations must periodically evaluate and update their capabilities in order to meet changing needs and counter new threats.

  **Key Considerations for Evaluating and Enhancing Organizational Auditing and Monitoring Capabilities**

  - **Behavioral baseline establishment**: An organization must define and understand what is considered normal/acceptable behavior, suspect behavior, and misbehavior.  
  - **Monitoring parameter development**: An organization must use defined and de-facto policy rules, requirements/models of systems, and baselines of current activity to identify monitoring and analysis parameters.  
  - **Critical asset identification and prioritization**: An organization’s critical assets (e.g., crown jewels) and focus enhanced monitoring on critical assets (proprietary information, systems mission critical) should be identified and prioritized, and then it should identify and focus enhanced monitoring on users with access to these assets.  
  - **Comprehensive data collection**: It is essential to collect diverse data, including standard logs/audit records, security events, and data about users, systems, applications, and network behaviors. Organizations can then use the collected data for real-time detection and alerting, storage for forensic use, baselining of current behavior, trend analysis and anomalous behavior identification.  
  - **Behavioral analytics strategy**: Behavioral analytics will require an initial period of collection and analysis to establish baselines and thresholds.  
  - **Intelligent data analysis**: Organizations should avoid generating unprioritized, resource-intensive alerts for analysis, and focus instead on collecting and analyzing meaningful data that provides actionable information to raise security awareness and support strategic security investment decisions.  
  - **Tool and capability selection**: Determine the appropriate tools and capabilities to effectively derive information from collected data. Select tools capable of processing diverse data formats, and which demonstrate configurability, scalability, and the ability to interface with other systems and capabilities.  
  - **Staff capability alignment**: Monitoring tools should be matched to organizational skill levels and staff availability. Manual reviews of logs or of overly-detailed, too-frequent tool outputs will not be effective or an efficient use of staff time. An organization with tools at the basic SIEM level should focus on configuring them to alert on the most critical events and provide the most pertinent information to staff. Organizations with more advanced capabilities can develop more sophisticated anomalous behavior detection systems and develop procedures to deal with potential insider threats. For example, when to shut down a threat immediately versus when to strategically steer an adversary to a honeypot and collect more forensic evidence.

