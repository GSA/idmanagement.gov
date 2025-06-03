---

layout: page
collection: experiments
title: Public Identity and Access Management Process Guide
permalink: /experiments/pid/process/
sidenav: papers
sticky_sidenav: true

release: 1.0 

subnav:
  - text: 1. Introduction
    href: '#1-introduction'
  - text: 2. Persona Based Access Process
    href: '#2-persona-based-access-process'
  - text: 3. Persona Based Access Scenarios
    href: '#3-persona-based-access-scenarios'
  - text: 4. Key Terms
    href: '#4-key-terms'
  - text: 5. Audience
    href: '#5-audience'
  - text: 6. Disclaimer
    href: '#6-disclaimer'
  - text: 7. Appendix
    href: '#7-appendix'

---

{% include alert-warning.html heading="Draft" content="The following document is a Draft and should not be interpreted as a finalized rule." %}

**Release {{page.release}}**

## 1. Introduction 

Persona-based access control uses user "personas" (archetypes or roles) to define access permissions, streamlining security management and ensuring users only have access to what they need.  

**What are Personas?**

In the context of access control, personas are user archetypes or roles that share common attributes, responsibilities, and access requirements.  

Personas could be created for any purpose, but several examples include:

Agent: A user who interacts with customers or performs specific tasks  
Vendor: An external user with restricted access to the application  
Public Citizen: A user requesting federal service  
Delegate: A user requesting federal service for another public citizen

**How does it work?**  

Instead of assigning individual permissions to each user, you assign permissions to personas. Users are then assigned to the appropriate persona(s) based on the federal service the public citizen is requesting. This allows for more granular and efficient control over access to sensitive data and resources. Persona-based access can be used to control access to different features or functionalities within a software application, or different services or resources within a federal model.

**What are the benefits of Persona-Based Access?**

Because it is easier to manage and maintain access policies, persona-based access creates more simplified administration. Additionally, the fact that users only have access to the resources they need, reduces the risk of unauthorized access enhancing security on an organizational level. Lastly, persona-based access conforms more readily to ever evolving regulatory requirements and industry standards, leading to a more agile and compliant organization.

<div style="text-align:center;">
  <img src="{{site.baseurl}}/assets/experiments/piam-process/figure1.png" alt="Benefits of Persona-Based Access">
</div>

## 2. Persona Based Access Process

![Figure 2]({{site.baseurl}}/assets/experiments/piam-process/figure2.png)

Creating effective customer personas is crucial for successful persona-based onboarding. By understanding your target audience and their unique characteristics, you can tailor your onboarding process to meet their specific needs and expectations. Here are the key steps involved in building customer personas for onboarding:

### Discovery

![Figure 3]({{site.baseurl}}/assets/experiments/piam-process/figure3.png)

Key Activities  
Define persona metadata requirements, typically including:

- Persona owner/certifier  
- Persona assignment approver  
- Persona Last certification date  
- Persona Last certified by  
- Persona Next certification date

### Definition

![Figure4]({{site.baseurl}}/assets/experiments/piam-process/figure4.png)

Key Activities

- Formally define Candidate personas to attach a name and access details  
- Candidate personas are assigned an Owner/Certifier for later certification  
- Personas are organized into a hierarchy and if necessary renamed  
- Segregation of Duty (SoD) rules are documented  
- Persona-to-role assignments are inventoried based on persona definitions

### Certification

![Figure 5]({{site.baseurl}}/assets/experiments/piam-process/figure5.png)

Key Activities

- Persona hierarchy relationships, candidate persona definitions, and persona metadata are confirmed or adjusted by designated owners/certifiers on a periodic basis  
- Identity-to-Persona assignments are recertified periodically

### Assignment

![Figure 6]({{site.baseurl}}/assets/experiments/piam-process/figure6.png)

Key Activities

- Changes are implemented in a central persona repository  
- Changes are handed off for processing to a provisioning system  
- New persona assignments may require approval; if approved, they are handled as other changes to persona assignment are processed  
- SoD rules are enforced with occasional exceptions as warranted by particular business needs  
- Persona data is summarized in a series of reports for periodic evaluation by a Governance committee

### Governance

![Figure 7]({{site.baseurl}}/assets/experiments/piam-process/figure7.png)

Key Activities  
A Governance committee must periodically:

- Review and approve SoD exceptions  
- Review and maintain persona naming and metadata standards  
- Establish and maintain application procurement and deployment guidelines relating to the use of persona to manage access to applications  
- Review and approve change controls for existing and soon-to-be-deployed applications and systems to ensure compliance with a persona standards framework  
- Maintain a set of SoD rules to enable appropriate enforcement

## 3. Persona Based Access Scenarios

**Persona-Based Public Citizen Onboarding**  
In today's complex business landscape, successful public citizen onboarding is essential for building strong relationships and driving positive public user experience. One effective approach to this process of onboarding is persona-based onboarding, which tailors the onboarding process to meet the unique needs and preferences of different public segments.

Persona-based onboarding is helpful for several reasons. First and foremost, it helps businesses establish a strong first impression and build trust with public citizens. By understanding their personas, federal agencies can provide relevant and targeted guidance that resonates with the specific needs of public citizens. This, in turn, leads to higher public citizen satisfaction and engagement. 

Imagine a scenario where a new public citizen signs up for a subscription-based meal kit service. Without persona-based onboarding, they might receive generic instructions on how to prepare meals, which may not align with their dietary preferences or restrictions. However, with persona-based onboarding, the meal kit service can gather information about the public citizen's dietary needs during the onboarding process and provide personalized recipes and cooking tips that cater to their specific requirements. Each persona will have different requirements and expectations during the onboarding process. This level of specificity and ability for customization not only enhances the public citizen experience but also builds trust and loyalty.

Secondly, persona-based onboarding enables federal agencies to streamline the onboarding process, saving them both time and resources. By mapping out the onboarding steps for each persona, they can ensure that the process is tailored to individual user needs. For example, the "Busy Professional" persona may benefit from automated onboarding emails and self-guided tutorials, while the "Tech Enthusiast" persona may prefer interactive demos and early access to new features. 

By focusing on only the most critical steps for each persona, federal agencies can reduce complexity, accelerate time to value, and minimize user frustration. This approach also allows agencies to save resources by prioritizing efforts where they will have the most significant impact.

**Persona-Based Public Citizen Authentication Service**   
A persona-based authentication service can also offer identity verification and authentication solutions, allowing federal agencies to personalize and automate verification processes, while also managing PII and mitigating fraud.

<div style="text-align:center;">
  <img src="{{site.baseurl}}/assets/experiments/piam-process/figure8.png" alt="Persona-Based Public Citizen Authentication Service">
</div>

**Persona-Based Public Citizen Authorization Service**  
Persona-based authorization uses "personas" or digital identities to represent different roles or functions within an organization, allowing users to switch between these personas and access resources accordingly. Instead of assigning permissions to individual user accounts, a Persona-Based Authorization Service assigns permissions to personas. Users are then assigned to one or more personas, inheriting the permissions associated with those personas. This allows for access control that is both flexible and granular, as permissions can be easily adjusted based on the user's role or persona. For example an "HR Manager" persona could have access to employee records, while a "Sales Representative" persona would only have access to customer information, or a "Data Analyst" persona might have access to specific datasets, while a "Data Scientist" persona could have access to all datasets.

## 4. Key Terms

Listed below are key terms used throughout this document. 

Assertion - A statement from one agency resource to another that contains information about an identity.

Assertion protocol - A data exchange format used to communicate authentication and authorization information between two agency resources.

Authentication - How you verify the identity of someone or something trying to access an agency resource.

Authorization - How you decide whether to allow someone to access an agency resource.

Authenticator - Something an entity possesses and controls to authenticate their identity, such as a password, token, or code.

Credential - An authenticator that is authoritatively bound to an identity.

Public Cloud - A cloud infrastructure provisioned for open use by the general public. A public cloud exists on the premises of the cloud provider, owner, and operator, who may be a business, academic, or government organization, or some combination of the three. In the context of this playbook, “cloud” refers to a public cloud.

Resource - A federal executive branch application or data repository.

## 5. Audience

The primary audience is persons developing or maintaining a federal public-facing service. The table below lists secondary audience members and how to engage them.

<table class="usa-table">
  <caption>
    Table 1. PIAM Stakeholder Engagement
  </caption>
  <thead>
    <tr>
      <th scope="col">Stakeholder</th>
      <th scope="col">Stakeholder Type</th>
      <th scope="col">Engagement Point</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Agency ICAM Governance</th>
      <td>Governance Body</td>
      <td>Reduce risk through lifecycle management and meet the intent of OMB Memos 19-17 and 22-09.</td>
    </tr>
    <tr>
      <th scope="row">Application Owners</th>
      <td>System/Business Owners</td>
      <td>ICAM service consolidation and modernization to identity-centric security processes.</td>
    </tr>
    <tr>
      <th scope="row">Customer Service</th>
      <td>System/Business Owners</td>
      <td>Authoritative attribute source.</td>
    </tr>
    <tr>
      <th scope="row">Security/Vetting</th>
      <td>Personnel Security</td>
      <td>Eligibility, visibility, audit, reporting, and authoritative attribute source.</td>
    </tr>
    <tr>
      <th scope="row">Training</th>
      <td>Compliance and Audit Teams</td>
      <td>Authoritative attribute source.</td>
    </tr>
    <tr>
      <th scope="row">Service Desk</th>
      <td>Operations Teams</td>
      <td>Support Staff</td>
    </tr>
    <tr>
      <th scope="row">User</th>
      <td>Operations Teams</td>
      <td>All user types doing business with federal government</td>
    </tr>
  </tbody>
</table>

## 6. Disclaimer

GSA Office of Government-wide Policy, Identity Assurance and Trusted Access Division  
developed this best practice guide. U.S. Federal Executive Branch agencies can use this guide as a reference point  for processes and services to manage citizen identity and their access. This guide is not an official policy or mandated action. However, it provides information backed by federal authoritative sources.

## 7. Appendix

### References