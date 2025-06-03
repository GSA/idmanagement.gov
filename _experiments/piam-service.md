---

layout: page
collection: experiments
title: Public Identity and Access Management Service Guide
permalink: /experiments/pid/service/
sidenav: papers
sticky_sidenav: true

release: 1.0 

subnav:
  - text: 1. Introduction
    href: '#1-introduction'
  - text: 2. Public Identity Services Challenges
    href: '#2-public-identity-services-challenges'
  - text: 3. Public Identity Services Guidance
    href: '#3-public-identity-services-guidance'
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

Federal agencies that administer public identity service applications online continually balance multiple potentially conflicting priorities around privacy, fraud prevention, and accessibility to ensure equitable outcomes. A Public Identity Service is a system that allows individuals to verify and manage their identity online in a public setting, often used for accessing government services. The public may use a Public Identity Service in order to  register for online government services, access public records, vote, create a verified online profile for a marketplace, or signing up for a public forum; essentially, any situation where a user needs to prove who they are in a public digital space without relying solely on traditional physical identification methods.

This practical guide is to assist federal agencies as they start to or further expand the use of Public Identity and Access Management (PIAM) services to provide citizen access to agencies' services. Public identities are digital identities or accounts owned and managed by the agency, including US citizens, federal employees and contractors, service providers that assist US citizens and state and local affiliates.


## 2. Public Identity Services Challenges

There are several key challenges associated with public identity services mainly regarding data security and privacy concerns, however Public Identity Services must also balance regulatory compliance across different regions,user experience, changing technology, and accessibility for diverse populations; all while maintaining a high level of trust with citizens by protecting their sensitive personal information.

Several common challenges faced in implementing PIAM systems include:

- Registering multiple accounts for one unique identity  
  - Creating several accounts on a platform or service using the same personal information, essentially allowing one person to control multiple accounts under a single identity, which is often considered a fraudulent practice and can violate terms of service on many platforms.   
- Multiple applications requiring accounts to gain access to federal services  
  - For each individual application, a user needs to register and set up a separate login account specifically for that platform, rather than using a single login to access various services; essentially, each app has its own unique user registration process that must be completed to access its features  
- Defining and sharing identity attributes for authorization  
  - This is the process of identifying relevant user characteristics (like job title, department, location, security clearance) and making them accessible to an authorization system, allowing it to make fine-grained access control decisions based on those attributes rather than just user roles, enabling more dynamic and context-aware permissions across different applications and situations  
- Creating a central repository for authoritative source of identity data  
  - Creating a single, primary authoritative store where all the most trusted and accurate information about an individual's identity is stored, acting as the definitive source for user details   
- Streamlining the user experience  
  - User interface or product designs must be simplified and optimized to make interactions as smooth and efficient as possible. By  reducing friction points and signposting clear navigation, users are enabled to complete tasks quickly and intuitively without unnecessary complexity. 

## 3. Public Identity Services Guidance 

This guidance is a good practice recommendation to assist federal agencies to ensure secure and standardized identity management practices when providing online services to public citizens.

![Figure 1]({{site.baseurl}}/assets/experiments/piam-service/figure1.png)

**Unique Key for a public identity**  
A unique key for a public identity typically refers to a piece of information like an email address, username, or a generated unique identifier that can be used to publicly identify someone online, while also acting as a key to access their associated data or services, ensuring that only the intended person can access it. 

**Defining and maintaining public identity profile data**  
A Public identity profile data is any information relating to an identified or identifiable natural person (‘data subject’). An identifiable natural person is one who can be identified, directly or indirectly, by reference to an identifier such as a name, identification number, location data, or online identifier. This means personal data has to be information that relates to an individual. That individual must be identified or identifiable either directly or indirectly from one or more identifiers or from factors specific to the individual.

**National ID System**  
A national identity document is a government-issued document that proves your citizenship or nationality. It typically contains personal information, such as:

- Full name  
- Date of birth  
- Place of birth  
- Photograph  
- Signature  
- Issuing authority  
- Expiration date of document

While the specific requirements may vary depending on your country of origin, here are some common examples of national identity documents:

- Passport   
  - This is the most widely recognized form of a national identity document.  
- National Identity Card  
  - Many countries like the United States also issue identity cards, which can be used for domestic identification purposes.  
- Birth Certificate  
  - In some cases, a birth certificate can be used as a national identity document, especially if it contains your parents’ information on it.  
- Driver’s License  
  - While not always accepted as a primary identification document, a driver’s license can sometimes be used in conjunction to other documents.

      
The question of whether the United States should implement a national ID card system is complex and involves various considerations regarding  privacy, security, accessibility, and social dynamics. There are multiple arguments for and against the implementation.

**Benefits of a National ID Card System**

- Enhanced Security  
  - A national ID system can help reduce identity fraud, by streamlining processes for verifying identity in various contexts (e.g., voting, banking, travel), which further enhances national security.  
- Streamlined Services  
  - A standardized ID can simplify interactions with government services, such as healthcare, and financial institutions, making it easier for citizens to access essential services.  
- Integration of Information  
  - A national ID could consolidate various forms of identification (e.g., driver's licenses, health cards) into one document, potentially reducing confusion and administrative burdens.  
- Facilitating Immigration and Travel  
  - A national ID could improve the management of immigration processes and simplify travel within and outside the country.

 **Concerns about National ID Card System**

- Privacy Concerns  
  - A national ID system can raise significant privacy issues, particularly about the potential for government surveillance and misuse of personal data. Citizens may be concerned about how their information is stored, accessed, and protected.  
- Cost and Implementation  
  - Establishing a national ID system can be costly and logistically challenging. The initial setup, ongoing maintenance, and ensuring accessibility for all citizens would require substantial resources.  
- Exclusion Risk  
  - There is a risk that marginalized populations may face barriers to obtaining a national ID, exacerbating existing inequalities. Special consideration would be needed to ensure that all citizens can access the ID.  
- Bureaucratic Overreach  
  - Some citizens may view a national ID as a step towards increased government control and bureaucracy, which could lead to resistance and distrust among the populace.

Beyond the benefits and concerns of a National ID system, it is important to consider the potential limitations of such a system. If United States were to move forward with a national ID card system, it should consider the following aspects of implementation in order to avoid pain points:

- Data Protection  
  - Strong safeguards must be established to protect the personal information of citizens. This could include encryption, limited access, and strict regulations on data usage.  
- Voluntary Participation  
  - Participation in the national ID program should be voluntary to respect individual rights and preferences, and there should be exemptions for those who do not wish to participate.  
- Accessibility Measures  
  - The ID system should be designed to be accessible to all citizens, including marginalized groups, the elderly, and those with disabilities.  
- Clear Purpose and Scope  
  - The purposes for which the ID can be used should be clearly defined in order to prevent misuse and ensure transparency.  
- Regular Review and Oversight  
  - Mechanisms for ongoing review and oversight should be created to ensure that the system remains effective, secure, and respectful of citizens' rights.

Ultimately the decision to implement a national ID card system in the United States should involve extensive public consultation and consideration of the potential impacts on privacy, accessibility, and security. Balancing the benefits of enhanced identification and service delivery with the need to protect individual rights and privacy is crucial in this discussion.

There are several ways in which a National ID card could be readily integrated with existing Federal Services:

- Public Citizen Identity Registration  
  - Providing public identity profile using government issued ID  
    - Citizens could provide a public identity profile using a government-issued ID through services like ID.me and Persona. These services would verify identities by using citizen IDs and compare them to application information. The process contains several steps:

![Figure 2]({{site.baseurl}}/assets/experiments/piam-service/figure2.png)

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
developed this best practice guide. U.S. Federal Executive Branch agencies can use this guide as a reference point  for processes and services to manage citizen identity and their access. This guide is not an official policy or mandated action. However, it does provide information backed by federal authoritative sources.

## 7. Appendix

**References**

1. [https://e-estonia.com/solutions/estonian-e-identity/id-card/](https://e-estonia.com/solutions/estonian-e-identity/id-card/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}  
2. [https://digitalgovernmenthub.org/publications/digital-authentication-and-identity-proofing-in-public-benefits-applications/](https://digitalgovernmenthub.org/publications/digital-authentication-and-identity-proofing-in-public-benefits-applications/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} 
3. [https://beeckcenter.georgetown.edu/report/digital-authentication-and-identity-proofing-in-public-benefits-applications/](https://beeckcenter.georgetown.edu/report/digital-authentication-and-identity-proofing-in-public-benefits-applications/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} 
4. [https://apply-for-an-eta.homeoffice.gov.uk/apply/electronic-travel-authorisation/how-to-apply](https://apply-for-an-eta.homeoffice.gov.uk/apply/electronic-travel-authorisation/how-to-apply){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}