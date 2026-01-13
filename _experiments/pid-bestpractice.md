---

layout: page
collection: experiments
title: Identity Proofing Best Practice
permalink: /experiments/pid/bestpractice/
sidenav: papers
sticky_sidenav: true

release: 1.0 

subnav:
  - text: 1. Executive Summary
    href: '#1-executive-summary'
  - text: 2. Identity Proofing Overview
    href: '#2-identity-proofing-overview'
  - text: 3. Identity Proofing in the Federal Landscape
    href: '#3-identity-proofing-in-the-federal-landscape'
  - text: 4. Identity Proofing Challenges
    href: '#4-identity-proofing-challenges'
  - text: 5. Key Reasons Why Identity Proofing is Important
    href: '#5-key-reasons-why-identity-proofing-is-important'
  - text: 6. Key Terms
    href: '#6-key-terms'
  - text: 7. Audience
    href: '#7-audience'
  - text: 8. Disclaimer
    href: '#8-disclaimer'
  - text: 9. Identity Proofing Assurance Levels & Methods
    href: '#9-identity-proofing-assurance-levels--methods'
  - text: 10. Identity Proofing Scenarios
    href: '#10-identity-proofing-scenarios'
  - text: 11. Future Considerations
    href: '#11-future-considerations'
  - text: 12. Conclusion
    href: '#12-conclusion'
  - text: 13. Appendix
    href: '#13-appendix'

---

{% include alert-warning.html heading="Draft" content="The following document is a Draft and should not be interpreted as a finalized rule." %}

## 1. Executive Summary

As the number of identity thefts conducted to commit fraud in the U.S. increases every year, the federal government must establish common business practices for identity proofing. Identity theft occurs when rights (e.g., benefits and access) are wrongfully claimed, causing the victim financial loss, reputational (credit) damage, and legal issues. Some of the most common reasons people or criminal groups commit identity fraud are to:

- Access services they’re not entitled to,  
- Get benefits they’re not entitled to, and  
- Steal personal, medical, or financial information from other identities

The federal government has identity proofing guidelines established by the National Institute of Standards and Technology, but these guidelines are not always followed as common business practices—particularly when ensuring linkage between a claimed identity and the person presenting the evidence. The practice of adhering to these guidelines must become standard across the federal landscape to comply with normative requirements for citizens accessing federal online services. This will help protect both individuals and organizations by ensuring that people are who they claim to be, thus mitigating the risk of financial loss, reputational damage, and legal issues associated with identity theft. Identity proofing also allows the federal agencies to build a trust relationship with customers by verifying their identities before providing access to sensitive information or services.

This document provides an overview of identity proofing coupled with use cases and best practices to strengthen its execution. It is based on federal policies (such as Office of Management and Budget Memorandum 19-18), guidance, and existing Federal Identity, Credential, and Access Management (FICAM) playbooks

## 2. Identity Proofing Overview

Identity proofing, also known as identity verification, is the process that verifies a person's identity to confirm that they are who they claim to be. It plays a critical role in  protecting against fraud and security threat--particularly within federal services offered to U.S. citizens and for service providers working with federal agencies, especially in contexts involving financial benefits. By verifying identities, federal agencies can ensure that individuals--especially new or unknown users-- are legitimate before granting access to services or sensitive data.

Identity verification is therefore crucial for safeguarding both individuals and organizations. It helps prevent identity theft, financial loss, reputational damage, and legal issues by ensuring only authorized individuals can access protected resources. It also allows businesses to comply with regulations and helps federal agencies build trust by verifying identities before providing access to sensitive information or services.

Identity proofing is typically the first step in the authentication process. It can be performed either remotely or in-person. In some cases, it may not be required to access lower-risk services.

![Figure 1]({{site.baseurl}}/assets/experiments/pid/figure1.jpg)

The established federal guidelines below explain that identity proofing should lead to the following expected outcomes:

- Resolution of a claimed identity to a single, unique identity, i.e., determining “of the 10,000 possible John Smiths that are in the U.S., which one are you?”

- Validation that all supplied evidence is correct and genuine (e.g., not counterfeit or misappropriated), i.e., determining “that the documentation and information provided by ‘John Smith’ is genuine.”

- Proof that the claimed identity exists in the real world, i.e., determining that someone claiming to be a “particular John Smith” is in fact a real person and not a made-up (synthetic) identity.

- Verification that the claimed identity is associated with the real person supplying the identity evidence, i.e., that someone claiming to be a “particular John Smith” is in fact that person—and not someone who is trying to steal his identity.

{% include alert-info.html content="Identity proofing and authentication are two related but distinct concepts in the field of online security. Identity proofing is the process of verifying an individual’s identity by collecting and verifying personal information, while authentication is the process of validating that an individual is who they claim to be." %}

## 3. Identity Proofing in the Federal Landscape

The Public Identity and Access Management (PIAM) framework has four components (depicted in the image below), of which one, Identity Management, encompasses identity proofing. The four functions provide a common model through which agencies can understand and implement identity, credential, and access management (ICAM) processes.

  ![Figure 3]({{site.baseurl}}/assets/experiments/pid/figure3.jpg)

1. Identity management focuses on managing the lifecycle, governance and compliance aspects of a person’s identity. This includes capabilities such as role-based access control (RBAC), access certification, and policy enforcement. It is also concerned with managing user access according to organizational policies and in alignment with regulatory requirements.

2. Access management is the process of identifying, tracking, controlling, and managing authorized users' access to a system or application. It encompasses the policies, processes, methodologies, and tools used to validate users before granting access to applications or data. Access management plays a central role in information security, IT, and data governance by ensuring that only authorized users can access protected resources, while blocking unauthorized access.<br/><br/>Credential management refers to managing the lifecycle of credentials used for authentication. This lifecycle includes activities such as issuance, reissuance, reset, suspend, restore, updating, and revoking/terminating. These credentialing activities are grouped into three stages: initial provisioning, maintenance, and revocation. Credential management is a subset of access management, focusing on how credentials are used in an organization’s access control strategy. 

3. Privileged access refers to the processes and technologies used to manage privileged access to data. In the context of public identity, this typically focuses on access that allows an identity to view or interact with sensitive data. Additionally, a delegated public identity can be defined as privileged if it is granted access to modify other identity profiles or submit financial transactions on behalf of others.

4. Governance involves monitoring and responding to user behavior and system events by leveraging data as a strategic asset to make adaptive and risk-based decisions. It ensures the right individual accesses the right resource, at the right time, for the right reason, which supports federal business objectives and facilitates secure and effective agency mission delivery.

This practical guide offers guidance around identity proofing as a subsection of the Access Management component of the framework.

![Figure 4]({{site.baseurl}}/assets/experiments/pid/figure4.jpg)

## 4. Identity Proofing Challenges

Identity proofing solutions for public identity must balance several challenges,  including:

- **Accuracy:** Ensuring that an individual’s identity is valid.  
- **Security:** Preventing fraud-related incidents, such as social engineering or account takeover.  
- **Usability:** Enabling secure access without creating unnecessary friction or burden for users that might cause them to abandon the process .  
.  
- **Data Protection:** Safeguarding personally identifiable information (PII) collected during the identity verification process against unauthorized access.  
- **Privacy:**  Ensuring that only necessary data is collected, used, and handled to prevent unauthorized access or disclosure.  
- **Accessibility:** Making sure that everyone, regardless of their abilities or circumstances, can easily and reliably use the identity proofing methods.

When evaluating identity proofing systems and processes, it is important to select ones that are user-friendly and can be integrated seamlessly into an organization’s operational structures. Additionally, it is also imperative to ensure these solutions serve all members of the public equally, taking into account the following considerations:

- 1 in 10 adults don’t have a valid driver’s license or state-issued ID according to the Center for Democracy and Civic Engagement (Appendix - Reference #4)  
- 14% of US adults are considered underbanked according to the Federal Deposit Insurance Corporation (FDIC) (Appendix - Reference #5)  
- 1 in 5 households do not have internet access at home according to the National Telecommunications and Information Administration (NTIA) (Appendix - Reference #5)  
- Not all individuals have or know their personal credit data

Identity proofing prevents identity theft, fraud, and unauthorized access to sensitive information. The process protects both individuals and federal agencies, and also helps enable compliance with regulations like KYC (Know Your Customer) and AML (Anti-Money Laundering). 

![Figure 5]({{site.baseurl}}/assets/experiments/pid/figure5.jpg)

## 5. Key Reasons Why Identity Proofing is Important

- **Fraud prevention**
  - Verifying identities significantly reduces the risk of identity theft, account takeover, and other fraudulent activities.

- **Data security**
  - Identity proofing ensures that only authorized individuals can access sensitive information and services, minimizing the risk of  system or data breaches. 

- **Compliance with regulations**
  - Many industries, and particularly financial services, are required by law to verify customer identities 

- **Trust building**
  - Establishing trust between businesses and their customers is essential. Identity proofing helps build trust by ensuring that users are who they claim to be, leading to greater confidence in the security of transactions and interactions.

- **Customer experience**
  - While identity proofing adds an additional layer of security, it should be seamless and non-intrusive for users. Effective identity-proofing processes can enhance the overall customer experience by balancing security with convenience.

- **Accountability**
  - Federal agencies may  need to prove who uses their services for accountability purposes. For example, an agency might need to identify an individual who registers for a federal service under an alias and then uses it to harass others. 

## 6. Key Terms

Assertion - A digital statement from a verifier (usually an Identity Provider) to a Relying Party (usually an application) that contains subscriber (usually a username) information. It may have additional attributes such as government employee, law enforcement agent, or authenticator type used in an access control decision.

Identity - The set of physical and behavioral characteristics by which an individual is uniquely recognizable. The digital representation of this is called Digital Identity.

Public Identity - A digital identity owned and managed by the agency, including US Citizens, service provider that manages US citizen, Federal, State and Local employees and contractors.

Identity Proofing - The process by which information is collected, validated, and verified about a person to issue credentials to that person.

## 7. Audience

The primary audience is persons developing or maintaining a federal public-facing service.  The table below lists secondary audience members and how to engage them.

{:class="usa-table"}
| Stakeholder | Stakeholder Type | Engagement Point |
| :---- | :---- | :---- |
| Agency ICAM Governance | Governance Body | Reduce risk through lifecycle management and meet the intent of OMB Memos 19-17 and 22-09. |
| Application Owners | System/Business Owners | ICAM service consolidation and modernization to identity-centric security processes. |
| Customer Service | System/Business Owners | Authoritative attribute source. |
| Security/Vetting | Personnel Security | Eligibility, visibility, audit, reporting, and authoritative attribute source. |
| Training | Compliance and Audit Teams | Authoritative attribute source. |
| Service Desk | Operations Teams | Support Staff |
| User | Operations Teams | All user types doing business with federal government |

**Table 1: Stakeholder Table**

## 8. Disclaimer

GSA Office of Government-wide Policy, Federal Identity and Cybersecurity Division  
developed this best practice guide. U.S. Federal Executive Branch agencies can use this guide to plan identity proofing  processes and services. This guide is not an official policy or mandated action. However, it provides information backed by federal authoritative sources.

## 9. Identity Proofing Assurance Levels & Methods

There are various ways to verify identity. The methods an organization uses will depend on the level of identity assurance they require and what works with their business processes. Typically, you will use multiple methods together. Methods include:

- **Document verification**   
  - This is typically a government-issued ID such as a driver’s license or passport. This could be a photo or scan of a physical ID or a digital ID such as a mobile driver’s license.   
- **Biometric verification**   
  - This usually involves using a mobile phone to take a selfie, with the selfie then compared against an official ID to ensure a match.  
- **Database verification**  
  - User-supplied information is compared against official databases, such as those managed by the DMV and IRS. 

The first step in identity proofing is to determine what level is required. A simple framework is included in guidelines set forth by the NISTthat provides direction for federal agencies.

NIST identifies three levels of identity assurance. The appropriate identity-proofing systems can be selected and implemented based on the required level.

- **NIST identity assurance level 1**  
  - Identity proofing is not required. For instance, it is not necessary when signing up for a loyalty account or a newsletter.  
- **NIST identity assurance level 2**  
  - Limited identity proofing is required; for instance, when it is necessary to provide identifying information in person or remotely as well as evidence of address validity (e.g., uploading a photo of a driver’s license.) While not a requirement, level two identity assurance may include biometric checks (e.g., fingerprint or retinal scan).  
- **NIST identity assurance level 3**  
  - In-person or supervised remote identity verification, address verification, and biometric checks are required for the highest level of identity proofing.

Based on the identity assurance level required, there are several identity-proofing methods that may be implemented. These range from self-reported information to verification with physical items. Based on the various scenarios, multiple options should be enabled to allow public citizens to access federal services. Listed below are some potential scenarios:

- Public citizens submitting registration for the first time to create accounts for access to federal services.  
- Public citizens accessing federal sites for services and logging in from restricted countries or locations.  
- Public citizens accessing federal sites for services on behalf of other citizens.  
- Public citizens accessing federal sites for submitting to request financial transactions that are significant monetary value.  
- Public citizens accessing federal sites at abnormal timelines or unusual behavioral patterns.

### A. Knowledge Based

<p><img class="float-left margin-right-2" width="105px" src="{{site.baseurl}}/assets/experiments/pid/icons/icon1.jpg" alt="Knowledge Base icon">Knowledge based identity proofing refers to a method of confirming someone's identity by asking them to answer questions about personal information that only they should know, such as their mother's maiden name or previous address, essentially proving their identity through their knowledge of private details. The most common type of knowledge-based proofing is using the public identity personal credit report data for validation.</p> 

![Figure 6]({{site.baseurl}}/assets/experiments/pid/figure6.jpg)

1. Public citizens access online registration links.  
2. Public citizens enter identity profile data such as First Name, Last Name, Address, Phone, and other relevant attributes.  
3. Public citizens perform the identity proofing step using credit report data.  
4. Credit report data is retrieved, and random questions are generated from the data and presented to the user. Public citizens then select the answers to the random questions and submit for validation .  
5. The answers to the random questions are validated by comparing the credit report data.  
6. Public citizen identity is created with the profile data after answers to the random questions are successfully validated.

### B. Third Party Provider

<p><img class="float-left margin-right-2" width="105px" src="{{site.baseurl}}/assets/experiments/pid/icons/icon2.jpg" alt="Third Party Provider icon">Third party identity proof refers to a method of confirming someone's identity by asking them to leverage third party credentials such as using banking credentials. Since most public citizens have bank accounts, and since a bank account cannot be created without first validating in person government furnished documentation by going to a bank branch, this method provides a mechanism to validate identity using bank credentials.</p>

![Figure 7]({{site.baseurl}}/assets/experiments/pid/figure7.jpg)

1. Public citizens access online registration links.  
2. Public citizens enter identity profile data such as First Name, Last Name, Address, Phone, and other relevant attributes.  
3. Public citizens perform the identity proofing step using bank credentials.  
4. The bank website redirects to the bank login page.  
5. Public citizens enter the bank credentials and include any MFA verification steps.  
6. Public citizen identity is created with the profile data after bank credentials are successfully validated.

### C. Biometrics

<p><img class="float-left margin-right-2" width="105px" src="{{site.baseurl}}/assets/experiments/pid/icons/icon3.jpg" alt="Biometrics icon">Biometric identity verification is a process that uses unique physical or behavioral characteristics to confirm a person's identity. Biometrics give a higher assurance that a person is who they say they are, in a digital environment, than other forms of verification. Biometrics is a secure and convenient way to prove customer identities during onboarding, verification or authentication.</p>

Public citizens can anchor their physical identity to a digital account at sign-up using a photo ID, and a selfie or video. First, a user takes a picture of their identity document and then will submit either a selfie or a video, which is compared with the photo on the identity document. 

- **Selfie Check**  
  - Public citizens are guided to take a selfie picture. Then it compares the face in the identity document with the selfie and then returns a similarity score. This checks that the person submitting the ID is the same person who owns that ID, protecting against stolen or fake IDs. The selfie is also analyzed for abnormal texture which protects from fraud. It detects photos of photos, or photos of screens, which a fraudster may have tried to pass off as a selfie.


- **Motion check (Video)**  
  - A video check requires the public citizen to take a short video on their phone to prove liveness. They record a movement, then guide them to do a simple head turn to the left and right. With this liveness check, we can determine that the person is present and not using a mask or prerecorded video, and that they are the same person as the one submitting the ID. Video adds an extra layer of protection from additional and more sophisticated fraud attacks, such as spoof selfies, deep fake videos, and 2D and 3D masks.

![Figure 8]({{site.baseurl}}/assets/experiments/pid/figure8.jpg)

1. Public citizens access online registration links.  
2. Public citizens enter identity profile data such as First Name, Last Name, Address, Phone, and other relevant attributes.  
3. Public citizens perform the identity proofing step using biometrics.  
4. Public citizens upload images of a US government issued Photo ID such as state driver license or passport.  
5. Public citizens upload live image capture using a mobile phone or camera enabled devices.  
6. Public citizen identity is created with the profile data after comparison with the picture in the US government issued Photo ID and the live captured image is successful.

The Login.gov service is provided by the U.S. General Services Administration to offer the public secure and private online access to participating government programs. With one Login.gov account, users can sign into multiple government agencies. Login.gov uses proven facial matching technology that compares the selfie exclusively with the user’s photo ID—and does not use the image for any other purpose. 

There are other forms of biometric identity proofing that can also be offered to public citizens. Listed below are some of the other forms of biometric solutions:

- **Fingerprint**  
  - Fingerprint identity proofing is a method of verifying a person's identity using their fingerprints. It's a type of biometric verification that uses algorithms to analyze the unique ridges and patterns of a person's fingertips.

- **Iris**  
  - Iris identity proofing is a biometric method that uses the unique patterns in a person's iris to verify their identity. Iris recognition is considered to be more accurate than other forms of biometrics, such as facial recognition

- **Voice**  
  - Voice identity proofing, also known as voice authentication, is a biometric method that uses a person's voice to verify their identity.

- **Palm Vein**  
  - Palm vein authentication is one of a modality of biometric authentications, and is classified as a physiological biometric authentication. It uses palm vein patterns, a vascular image of a person's palm which can be seen as a kind of pattern, as personal information.

- **Finger Vein**  
  - Finger vein identity proofing refers to a method of verifying someone's identity by scanning the unique pattern of veins in fingers, using infrared light to capture the internal vascular structure, which is considered highly secure as it's nearly impossible to forge due to its internal nature and unique pattern for each individual; essentially, it acts as a biometric identifier to confirm someone's identity without needing additional documents like a driver's license.

- **Behavioral Biometrics**  
  - Behavioral biometrics refers to a method of identity proofing that uses a person's unique behavioral patterns, like how they type, swipe, or move their mouse, to verify their identity rather than relying on physical characteristics like fingerprints or facial recognition; it essentially analyzes how someone interacts with a device to authenticate them as a legitimate user, helping to detect potential fraud by identifying unusual behavior patterns. Examples of behavioral biometrics include:

  - **Mouse behavior**  
    - Tracks how a user moves their mouse, including the speed and patterns of movement  
  - **Touchscreen behavior**  
    - Tracks how a user interacts with a touchscreen, including how they hold the device, how much pressure they apply, and what gestures they make  
  - **Voice recognition**  
    - Analyzes the behavioral signals in a user's voice to authenticate them  
  - **Typing biometrics**  
    - Analyzes a user's keystroke patterns to authenticate them  
  - **Behavioral PIN authentication**  
    - Analyzes how a user holds their phone and enters their PIN, including their wrist strength and finger placement  
  - **Gesture recognition**  
    - Analyzes how a user moves their hands, such as when typing on a keyboard or tapping on a screen

### D. Remote Verification

<p><img class="float-left margin-right-2" width="105px" src="{{site.baseurl}}/assets/experiments/pid/icons/icon4.jpg" alt="Remote Verification icon">Some members of the public want the opportunity to engage with a human during the identity verification process but can’t visit a physical location or use any of the other identity verification methods. This method would enable a user to digitally verify their identity with a human agent, such as a live video chat with a trained identity verification professional.</p>

  ![Figure 9]({{site.baseurl}}/assets/experiments/pid/figure9.jpg)

1. Public citizens access online registration links.  
2. Public citizens enter identity profile data such as First Name, Last Name, Address, Phone, and other relevant attributes.  
3. Public citizens perform the identity proofing step using live video chat.  
4. Public citizens initiate a live video chat and identity verification experts request data for identity proofing.  
5. Public citizens upload live image capture using a mobile phone or camera enabled devices and submit for validation.  
6. Public citizen identity is created with the profile data after comparison with the picture in the government issued Photo ID and the live captured image is successful by the identity verification experts.

### E. In-Person 

<p><img class="float-left margin-right-2" width="105px" src="{{site.baseurl}}/assets/experiments/pid/icons/icon5.jpg" alt="In-Person icon">In-Person identity proofing is the process of verifying that the individual requesting access to federal services matches the identity on their submitted documents and is physically present at a federal facility. The process involves presenting original identification and address proof documents during the verification process. This method provides a convenient and secure identity verification option for those that prefer it and is available as part of both basic (non-IAL2) and enhanced (IAL2) identity verification.</p>

According to USPS, 99% of US public citizens live within 10 miles of a USPS location, thus providing a convenient way for identity proofing a public identity if other methods cannot be leveraged by a public citizen.

  ![Figure 10]({{site.baseurl}}/assets/experiments/pid/figure10.jpg)

1. Public citizens access online registration links and search for a nearby federal facility such as the US Postal Office.  
2. Public citizens visit the federal facility in person.  
3. Public citizens perform the identity proofing step by a federal employee.  
4. Public citizens provide documentation such as a US government issued photo ID or US Passport.  
5. Federal employees upload live image capture using camera enabled devices and submit for validation.  
6. Identity profile data such as First Name, Last Name, Address, Phone, and other relevant attributes is received, and a public citizen identity is created after a federal employee successfully validates the public citizen identity.

### F. Physical Mail - One Time Code

<p><img class="float-left margin-right-2" width="105px" src="{{site.baseurl}}/assets/experiments/pid/icons/icon6.jpg" alt="Physical Mail - One Time Code icon">This identity proofing method is the process to validate an identity using a physical address that belongs to the public citizen. The key validation component is that the physical address matches the name of the public citizen it is registered under. After this is validated, a random one-time code will be generated with an expiration date and a letter will be mailed to the physical address that was validated. Using this code, the public citizen can then proceed to register for an online account to access federal services and benefits.</p>

  ![Figure 11]({{site.baseurl}}/assets/experiments/pid/figure11.jpg)

1. Public citizens access online registration links.  
2. Public citizens enter identity profile data such as First Name, Last Name, Address, Phone, and other relevant attributes.  
3. Public citizens perform the identity proofing step using physical address data.  
4. Physical Address data is received and checked against the address verification solution. If the verification process is successful, a random one-time code is generated and physically mailed to the public citizen’s physical address.  
5. After the public citizen receives the mail, the one-time code is entered to continue with the registration process.  
6. Public citizen identity is created with the profile data after one-time code validation is successful.

### G. Mobile Phone Device

<p><img class="float-left margin-right-2" width="105px" src="{{site.baseurl}}/assets/experiments/pid/icons/icon7.jpg" alt="Mobile Phone Device icon">This identity proofing method is the process to validate an identity using a mobile device number that is registered to the public citizen. The key validation component is that the mobile device number matches the public citizen’s name that it is registered under. After this is validated, a random one-time code will be generated with an expiration period and sent to the mobile phone that was validated. Using this code, the public citizen can then proceed to register the device metadata such as type of device, operating system geolocation, and other identity related attributes. Once the device is successfully registered, the public citizen identity is created with the profile data.</p>

  ![Figure 12]({{site.baseurl}}/assets/experiments/pid/figure12.jpg)

1. Public citizens access online registration links.  
2. Public citizens enter identity profile data such as First Name, Last Name, Address, Phone, and other relevant attributes.  
3. Public citizens perform the identity proofing step using mobile phone data.  
4. Mobile phone data is received and checked against phone verification solutions. If the verification process is successful, a random one-time code is generated and sent to the public citizen’s mobile device.  
5. After the public citizen receives the one-time code, it is then entered to continue the registration process.  
6. Public citizen identity is created with the profile data after one-time code validation is successful and mobile phone metadata is registered.

### H. Federal Employees or Contractors - PIV Card

<p><img class="float-left margin-right-2" width="105px" src="{{site.baseurl}}/assets/experiments/pid/icons/icon8.jpg" alt="Federal Employees or Contractors - PIV Card icon">This identity proofing method is the process to validate an identity using a Personal Identity Verification (PIV) card registered to the public citizen. The key validation component is that the PIV card is only issued after Identity Proofing steps are completed by the federal agencies, which typically occurs in person at a federal facility and is only assigned to federal employees and contractors.</p>

  ![Figure 13]({{site.baseurl}}/assets/experiments/pid/figure13.jpg)

1. Public citizens access online registration links.  
2. Public citizens enter identity profile data such as First Name, Last Name, Address, Phone, and other relevant attributes.  
3. Public citizens perform the identity proofing step using a PIV card.  
4. Public citizens enter the PIV card in a machine-readable device  
5. Public citizens enter the PIN code for the PIV card.  
6. Public citizen identity is created with the profile data after the PIN code for the PIV card is successfully validated.

## 10. Identity Proofing Scenarios

### Onboarding New Public Identity – Registration Process 

One of the identity proofing scenarios is that when a new customer applies to open a public federal online account to request access to federal services such as Medicaid benefits, identity proofing verifies their identity to comply with KYC (Know Your Customer) regulations. This process ensures that the customer is who they claim to be, mitigating the risk of identity theft and fraudulent activity. Listed below are some of the scenarios for onboarding a new public identity: 

- **First Time Public Citizen Registration**  
  - This use case is for a normal public citizen that requires an identity to create an account to access federal services. The public citizen will provide key mandatory profile attributes and some of them will be used to proceed to the identity proofing steps. Based on the federal service the public citizen is requesting; a list of identity proofing methods will be available to be selected by the public citizen. 

    After the identity proofing steps are successfully completed, an identity profile and respective account is created. In case identity proofing steps were unsuccessful, other options should be available. If all identity proofing options were unsuccessful, then public citizens should be notified to visit a local facility to do in-person identity proofing.

- **Delegate Registration \- Registering for Another Public Citizen**  
  - In this use case, someone else is performing the registration process for a public citizen because the public identity is not created, a vendor is performing a service on behalf of another public citizen, has health issues such as hearing and visions, or the public citizen does not have access to online assets. The delegated registrar will provide key mandatory profile attributes for both the delegate and the public citizen, and some of them will be used to proceed to the identity proofing steps. Based on the federal service the public citizen is requesting; a list of identity proofing methods will be available to be selected by the delegated registrar. 

    For this use case, both the delegate and public citizen need to perform the identity proofing steps. This will ensure that someone else is not creating an identity for a public citizen that is not authorized and to prevent fraud. After the identity proofing steps are successfully completed for both the delegate and the public citizen, an identity profile and respective account is created only for the public citizen. In case identity proofing steps were unsuccessful, other options should be available. If all identity proofing options were unsuccessful, then the delegated registrar should be notified to visit a local facility to do in-person identity proofing.

- **First Time Public Citizen Registration for Minors or Elderly**  
  - This use case and the process is very similar to Delegate Registration except the delegate is related to an immediate family member. The assumption is that the public citizen is a minor or elderly and either do not have access to online assets or have health issues such as hearing and visions. The family member will provide key mandatory profile attributes for both the family member acting as a delegate and the public citizen, and some of them will be used to proceed to the identity proofing steps. Based on the federal service the public citizen is requesting; a list of identity proofing methods will be available to be selected by the delegated registrar. 

    Both the family member acting as the delegate and the public citizen who is a member of the family need to perform the identity proofing steps. This will ensure that someone else is not creating an identity for a public citizen that is not authorized and to prevent fraud. After the identity proofing steps are successfully completed for both the delegate and the public citizen, an identity profile and respective account is created only for the public citizen. In case identity proofing steps were unsuccessful, other options should be available. If all identity proofing options were unsuccessful, then family members acting as the delegate should be notified to visit a local facility to do in-person identity proofing.

### Updating Public Identity Profile

This process is related to updating public citizen profile information such as address, phone or any other profile attributes that are sensitive. In this scenario, the assumption is that the public identity is already onboarded, and identity proofed during the registration process. However, to update any of the sensitive profile data, it is not enough to verify the identity through the authentication process using Multi-Factor Authentication (MFA). To add another layer of security control and risk, it is better to have identity proof for the public citizen when performing updates to sensitive profile data for fraud prevention and identity theft. Listed below are some of the scenarios for updating public identity profile data. 

- **Updating Key Profile Identity Attributes**  
  - This use case is related to updating public citizen profile data that is used to identify the unique public citizen identity. Key profile attributes can be First Name, Middle Name, Last Name, Date of Birth, Social Security Number, Primary Address, Driver License Data, State ID Data, Passport Data, Primary Phone or Primary Email. Public citizens updating to these attributes and performing Identity Proofing steps will depend on whether they are used for additional security checks such as fraud and risk. 

    The first step is for the public citizen to authenticate successfully and then proceed to the profile page to update the identity attributes. Based on the attributes the public citizen is requesting to update; a list of identity proofing methods will be available to be selected by the public citizen. 

    After the identity proofing steps are successfully completed, an identity profile and respective account is updated. In case identity proofing steps were unsuccessful, other options should be available. If all identity proofing options were unsuccessful, then public citizens should be notified to visit a local facility to do in-person identity proofing and update their profile attributes.

- **Updating Key Profile Identity Attributes by Delegate**  
  - In this use case, someone else is performing the update process for a public citizen because of health issues such as hearing and vision, or the public citizen does not have access to online assets. The delegated registrar will first be authenticated, and if authorized will then proceed to access the profile update page. The delegate then provides key profile attributes to update for the public citizen, and some of them will be used to proceed to the identity proofing steps. Based on the attributes the delegate is requesting to update, a list of identity proofing methods will be available to be selected by the delegate. 

    For this use case, both the delegate and public citizen need to perform the identity proofing steps. This will ensure that someone else is not updating an identity for a public citizen that is not authorized and to prevent fraud. After the identity proofing steps are successfully completed for both the delegate and the public citizen, an identity profile and respective account is updated only for the public citizen. In case identity proofing steps were unsuccessful, other options should be available. If all identity proofing options were unsuccessful, then the delegated registrar should be notified to visit a local facility to do in-person identity proofing. 

- **Updating Non-Key Profile Identity Attributes**  
  - For this use case, Identity Proofing is generally not required. The assumption is that the non-key profile identity attributes are not sensitive or do not have any correlation to risk and fraud detections. Some of the non-key profile identity attributes include Secondary Address, Birth City, Secondary Phone, Gender, Age, Contact Information.


### Transaction Type

This scenario is related to the process by which public citizens submit benefits from federal agencies. Transaction is defined as something that is related to financial benefits provided to public citizens by the federal agencies. Examples may include a public citizen requesting benefits and the amount requested is over a certain threshold, or a provider submitting invoices that are greater than the amount allocated for benefits on behalf of public citizens.

Not all transaction types need to have additional identity proofing steps. This will depend on risk factors such as transaction type, dollar amount, patterns of transactions, risk score for the public citizen and any type of violations. A risk management model needs to be developed and integrated with the authentication or authorization process to determine if the identity proofing step is needed before completing the transactions. Listed below are some of the scenarios for Identity Proofing based on transactions.  

- **Public Citizen Requesting Benefits**  
  - In this use case, a public citizen is requesting financial benefits from a federal agency after authentication steps are successful. The assumption is that the public citizen’s identity is already Identity Proofed, and an identity profile is created. The Identity Proofing steps for this scenario are triggered only when certain conditions are true such as the amount requested is above a certain limit, previous transactions were flagged, or certain key identity attributes don’t match. 

    The first step is for public citizens to access federal agency websites and authenticate to access federal services. Next, the citizen accesses online forms to request benefits, provide the necessary information and submit for processing. Based on the type of transactions the public citizen is requesting and if certain risk-based business rules are true, a list of identity proofing methods will be available to be selected by the public citizen. 

    After the identity proofing steps are successfully completed, the request is processed and continues to the next business process activity. In case identity proofing steps were unsuccessful, other options should be available. If all identity proofing options were unsuccessful, then public citizens should be notified to visit a local facility to do in-person identity proofing and resubmit the request. 

- **Delegate Requesting Benefits**  
  - In this use case, someone else is requesting financial benefits from a federal agency for a public citizen because of health issues such as hearing and vision, or the public citizen does not have access to online assets. The Identity Proofing steps for this scenario are triggered only when certain conditions are true such as amount requested is above a certain limit, previous transactions by the delegates were flagged, or certain key identity attributes don’t match. 

    The delegated will be first authenticated, then if authorized, proceed to access online forms to request benefits, provide the necessary information and submit for processing. Based on the type of transactions the public citizen is requesting and if certain risk-based business rules are true, a list of identity proofing methods will be available to be selected by the delegate. 

    Both the delegate and public citizen need to perform the identity proofing steps to ensure that someone else is not requesting federal funds for a public citizen that is not authorized and to prevent fraud. 

    After the identity proofing steps are successfully completed, the request is processed and continues to the next business process activity. In case identity proofing steps were unsuccessful, other options should be available. If all identity proofing options were unsuccessful, then delegates should be notified to visit a local facility to do in-person identity proofing and resubmit the request. 

- **Vendor Requesting Payment for Invoice**  
  - There have been many cases where vendors such as healthcare providers requested large amounts of funds from federal agencies that later were flagged as suspected fraud. Unfortunately, this has caused a loss of a lot of federal money due to ineffective controls. Some of these cases are initiated by actors leveraging access to other public citizens' identity profiles. Adding an Identity Proofing steps in this scenario will help federal agencies prevent fraud by ensuring the right authorized person is requesting and submitting the funds from the federal agency. The Identity Proofing steps for this scenario are triggered only when certain conditions are true such as the amount requested is above a certain limit or previous transactions by the vendors were flagged. 

    The vendor will be first authenticated, then if authorized, proceed to access online forms to request funds, provide the necessary information and submit for processing. Based on the type of transactions the vendor is requesting and if certain risk-based business rules are true, a list of identity proofing methods will be available to be selected by the delegate. 

    After the identity proofing steps are successfully completed, the request is processed and continues to the next business process activity. In case identity proofing steps were unsuccessful, other options should be available. If all identity proofing options were unsuccessful, then the vendor should be notified to visit a local facility to do in-person identity proofing and resubmit the request.

### Abnormal Behavior

Abnormal behavior is any behavior that deviates from what is considered normal. It analyzes a user's behavior to recognize non-standard patterns. This can help block access to an account if a user's behavior is suspicious or it can go to the identity proofing step to confirm an individual’s identity. Examples of abnormal behavior include: 

- Logging in at an unusual time of day   
- Multiple failed login attempts in a short time   
- Traveling to a different country and using a new device   
- Attempting to log in from a blacklisted country  
- Devices not from the usual location especially for high-risk transactions such as requesting benefits for large dollar amounts.  
- Attempting to log in from a blacklisted country

### Access Outside United States

Access outside the United States can be controlled using country-based access controls or location conditions. These controls can be used to block access from certain countries or regions. However, there are scenarios in which identity proofing can be enabled as an additional step during the authentication steps when US citizens live in a foreign country, live in an overseas military facility or work overseas for a US federal facility, and require access to online federal services.

### Risk Based

While we may be able to take advantage of in-person visits to connect the individual with an online account, implementing a risk-based approach to remote identity proofing could be a better option to explore. The complexity of identity proofing requires multiple systems to try and properly identify individuals wanting information and access. Trying to take a one-size-fits-all approach to identity proofing is not realistic; a risk-based approach allows us to properly balance the three factors of Accuracy, Security and Usability.

Risk-based remote identity proofing approaches often look at risk scores created by solutions that specialize in identity verification services. These scores are generally derived from various attributes about an individual—IP address, geolocation, device, and browser information, just to name a few. These risk engines run in the background analyzing various attributes to determine if something looks suspicious. If nothing from that score looks out of the ordinary the account can be created and little or no identity proofing will be required. If the risk score is higher the individual can be routed to another workflow with additional identity proofing that may include knowledge-based authentication, document verification with liveness and biometrics, or even live chat based verification.

Fraud detection systems can monitor a variety of attributes from where the individual is calling from including the specific device. If it is the same number, with no signs of spoofing or other bad history, identity proofing can proceed. Overall, federal agencies should look at their remote identity proofing processes to make sure the proper security controls are in place and evaluate whether the organization is doing enough, or maybe too much, when it comes to making sure public citizen identity is identity proofed.

Taking this approach can also save an organization money. Most of these systems charge on a per transaction basis, with document verification often being the costliest. By taking a risk-based approach and only having those individuals who meet a certain threshold on the risk score be asked to verify their identity documents or face, the organization can realize cost savings while also making it easier for the individual to create an account.

## 11. Future Considerations

Replacing current social security card with public PIV card

![Figure 14]({{site.baseurl}}/assets/experiments/pid/figure14.jpg)

1. Public citizens access online registration links and search for a nearby social security office.  
2. Public citizens visit the federal facility in person.  
3. Public citizens perform the identity proofing step by a federal employee.  
4. Public citizens provide documentation such as a US government issued photo ID or US Passport.  
5. Federal employees upload live image capture using camera enabled devices and submit for validation.  
6. Federal employees issue public PIV cards to the registered citizen instead of normal social security **cards** after successful verification.  
7. Public **citizens** login with their public PIV card to a federal agency website.  
8. Public citizen identity is created with the profile data after successful login.

Centralized repository of consolidated public identity meta data from various federal agencies

![Figure 15]({{site.baseurl}}/assets/experiments/pid/figure15.jpg)

1. Public citizens access online registration links.  
2. Public citizens enter identity profile data such as First Name, Last Name, Address, Phone, and other relevant attributes. The registration process is initiated using a device such as a mobile phone or a computer that has access to the internet.  
3. Public citizens perform the identity proofing step using federal agency known public identity data.  
4. Federal agency public identity data is retrieved, and using the key identifier such as social security number, name or home address, send the query to the consolidated public identity data repository   
5. Random questions are generated from the data and presented to the user.   
6. Public citizens then select the answers to the random questions and submit for validation.  
7. The answers to the random questions are validated by comparing to the federal agency public identity data.  
8. Public citizen identity is created with the profile data after answers to the random questions are successfully validated.

## 12. Conclusion

The significance of identity proofing cannot be overstated, especially as we navigate an increasingly digital world. It safeguards businesses and customers against cyber threats. Implementing strong identity-proofing practices not only enhances security but also fosters an environment of trust and authenticity in our online interactions. It's essential for building a safer, more reliable digital world where confidence reigns supreme.

In summary, identity proofing is a multifaceted process that combines various methods, including document verification, biometric authentication, and behavioral analysis, to confirm an individual’s identity accurately and securely. By leveraging advanced technologies and adopting multiple verification steps based on the scenarios, federal agencies can enhance security, prevent fraud, and build trust with US citizens in today’s digital age.

## 13. Appendix

### References

1. [https://login.gov/docs/login-gov-roadmap-dec-2025.pdf](https://login.gov/docs/login-gov-roadmap-dec-2025.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
2. [https://pages.nist.gov/800-63-3-Implementation-Resources/63A/](https://pages.nist.gov/800-63-3-Implementation-Resources/63A/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}  
3. [https://www.cbpp.org/research/health/remote-identity-proofing-better-solutions-needed-to-ensure-equitable-access](https://www.cbpp.org/research/health/remote-identity-proofing-better-solutions-needed-to-ensure-equitable-access){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
4. [https://www.voteriders.org/wp-content/uploads/2023/04/CDCE\_VoteRiders\_ANES2020Report\_Spring2023.pdf](https://www.voteriders.org/wp-content/uploads/2023/04/CDCE_VoteRiders_ANES2020Report_Spring2023.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
5. [https://www.fdic.gov/household-survey\#:\~:text=An%20estimated%204.5%20percent%20of,the%20survey%20began%20in%202009](https://www.fdic.gov/household-survey#:~:text=An%20estimated%204.5%20percent%20of,the%20survey%20began%20in%202009){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}  
6. [https://www.ntia.gov/blog/2022/switched-why-are-one-five-us-households-not-online](https://www.ntia.gov/blog/2022/switched-why-are-one-five-us-households-not-online){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
