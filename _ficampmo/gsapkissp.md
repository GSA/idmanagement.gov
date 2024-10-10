---
layout: page
collection: ficampmo
title: Shared Service Provider Program Guide
permalink: /gsapkissp/
sticky_sidenav: true
sidenav: functions

version: 1.0
pubdate: June 30, 2023
author: GSA SSP PMO

subnav:
  - text: Audience
    href: '#audience'
  - text: 'Section I: GSA PKI SSP Program'
    href: '#section-i-gsa-pki-ssp-program'
  - text: 'Section II: SSP Application and Maintenance Activities'
    href: '#section-ii-ssp-application-and-maintenance-activities'
  - text: Application Process
    href: '#application-process'
  - text: Maintenance Activities
    href: '#maintenance-activities'
  - text: 'Section III: Digital Certiﬁcate Services'
    href: '#section-iii-digital-certiﬁcate-services'
  - text: Current Services
    href: '#current-services'
  - text: Conclusion
    href: '#conclusion'
  - text: Appendix A - Sample MOA
    href: '#appendix-a---sample-moa'

---

<!-- ## [June 30, 2023] DRAFT / PRE-DECISIONAL (PDF /docs/roadmap-ficam.pdf)-->

<img src="{{site.baseurl}}/assets/img/logo-gsa.png" width="64" height='64' align="left" alt="U.S. General Services Administration Logo">

<br><br>

<br>
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="ssp1">
      Date: {{page.pubdate}} - Version: {{page.version}}
    </button>
  </h4>
  <div id="ssp1" class="usa-accordion__content usa-prose">
    <table>
      <caption>Shared Service Provider version table</caption>
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
          1.0
        </th>
        <td>02/14/2023</td>
        <td>Initial draft</td>
      </tr>
    </table>
  </div>
</div>

<!-- | Version Number | Date | Change Description |
| :----------: | :-------: | -------- |
| 1.0 | 02/14/2023 | Initial draft | -->


## Overview

The General Services Administration (GSA), Ofﬁce of Government-wide Policy, manages the Public Key Infrastructure (PKI) Shared Services Provider (SSP) program. The primary program focus is to help agencies meet the policy intent of Homeland Security Presidential Directive 12, as well as achieve digital signature interoperability.

A GSA PKI SSP is a commercial PKI provider who has completed Federal PKI compliance activities to receive a certiﬁcation authority certiﬁcate and is listed on the GSA Multiple Award Schedule. This document is reviewed annually and has three major sections:

- [Section 1](#section-i-gsa-pki-ssp-program) -Outlines GSA management and acquisition controls of the PKI SSP Program.
- [Section 2](#section-ii-ssp-application-and-maintenance-activities) -Deﬁnes the application and ongoing maintenance process to apply and stay in the GSA PKI SSP Program.
- [Section 3](#section-iii-digital-certiﬁcate-services) -Lists available services that a SSP should offer.

## Audience

This document is primarily for the following audience:

1. Commercial PKI vendors who are interested in becoming a GSA PKI SSP.
2. Existing GSA PKI SSP Program members to refresh their knowledge of ongoing maintenance requirements. 
3. Federal agency customers who want to understand the GSA PKI SSP program or ﬁnd contact information for the program management.

If you have questions about this document or the outlined process, contact [GSAPKISSP@gsa.gov](mailto:GSAPKISSP@gsa.gov).

## Section I: GSA PKI SSP Program 

The GSA SSP Program has a long history of successfully providing digital certiﬁcate services for employees, contractors, and afﬁliates. The program was started in December 2004 when the Ofﬁce of Management and Budget (OMB) issued a directive, M-05-05, directing federal agencies to buy their digital certiﬁcate services through the SSP Program. Almost 20 years later, the program is a cornerstone for some federal agencies despite the drive to expand new services in a thin market. 

In 2019, a new OMB directive, M-19-17, was released that requires shared services such as the SSP Program be updated to enable strong government oversight. In response to this directive, GSA is strengthening its oversight by establishing a framework among its Managing Partners and with approved SSPs. The framework is a Memorandum of Agreement (MOA) that provides clarity of intent and high-level responsibilities and accountability. 

### Who Is a GSA PKI Shared Service Provider?

A GSA PKI Shared Service Provider is a commercial PKI vendor who has a signed MOA with the GSA PKI SSP Program Ofﬁce and is listed on the GSA PKI SSP Multiple Award Schedule.

If a vendor fails to be added to the Multiple Award Schedule, GSA will rescind the Authorization to Operate and the Federal Public Key Infrastructure Policy Authority (FPKIPA) will revoke the certiﬁcation authority certiﬁcate.

### Should My Company Apply to the Program?
There are multiple advantages to becoming a GSA PKI SSP. They are as follows:

- You will provide a platform to offer federal digital certificates.
- Your Federal Government customers will want to procure your services with a GSA Multiple Award Schedule.
- You will expand your federal customer footprint by marketing your service through the GSA Multiple Award Schedule (MAS).

In making a business decision to join the SSP Program, it is important to understand what resources are needed to prepare for and keep your information systems in a good security posture.

### Who Manages the GSA PKI SSP Program?

The SSP Program is managed by the GSA Ofﬁce of Government-wide Policy, Ofﬁce of Technology Policy, Identity Assurance and Trusted Access Division as the Program Ofﬁce. Other ofﬁces within GSA support the Program Ofﬁce as well.

### GSA Ofﬁce of Technology Policy 
The SSP Program Ofﬁce oversees and guides the business and security practices necessary for SSPs to provide digital certiﬁcate services to federal agencies. Responsibilities include internal and external coordination for integrating and synchronizing program activities. They are as follows:

- Internally, the SSP Program Ofﬁce meets with its GSA counterparts to ensure services are secure and available through the proper contract vehicle.
- Externally, the ofﬁce meets with federal agencies and SSPs to learn about successes and how processes and service delivery can be improved.

The GSA, Associate Deputy Administrator in the Ofﬁce of Government-wide Policy, [Ofﬁce of Technology](https://www.gsa.gov/policy-regulations/policy/information-technology-policy){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} is the Authorizing Ofﬁcial of GSA PKI SSP vendor systems and is ultimately responsible for their secure operation. The GSA PKI SSP Program Ofﬁce and Program Manager reside in the [Identity Assurance and Trusted Access Division](https://www.gsa.gov/policy-regulations/policy/information-technology-policy/identity-assurance-and-trusted-access){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}  within the Ofﬁce of Technology Policy. The GSA PKI SSP Program Manager has the following responsibilities:

- Direct and coordinate activities between the GSA PKI SSPs, the Federal PKI Policy Authority and GSA supporting ofﬁces, Ofﬁce of the Chief Information Security Ofﬁcer, and the Federal Acquisitions Service.
- Coordinate customer interest meetings to understand customer needs and challenges, plan service enhancements, and remediate issues. 
- Invite and coordinate customer agency participation in GSA A&A security meetings.
- Brief interested parties on the latest program activities.
- Regularly report the latest program activity to the Authorizing Ofﬁcial and the Identity Assurance and Trusted Access Division Director. 

### GSA Ofﬁce of Chief Information Security Ofﬁcer

The GSA, Ofﬁce of Chief Information Security Ofﬁcer (OCISO) provides security policies and guidance so SSPs can implement security controls in their information systems to guard against cyber-attacks. The security team in the OCISO receives a Security Assessment Report (SAR) from the SSP to review the results of the security control assessment for the authorizing ofﬁcial and system owner. Based on the review, the OCISO makes a recommendation to the GSA Authorizing Ofﬁcial on whether to grant an Authorization to Operate (ATO) to a SSP. The decision is formalized in an ATO letter and provided to the GSA PKI SSP. The OCISO is also responsible for overseeing risk management activities with the GSA PKI SSP.

### GSA Federal Acquisition Service

The GSA Federal Acquisition Service (FAS) connects government buyers with the GSA PKI SSPs. The FAS organization captures the GSA PKI SSP services and sets prices, terms, and conditions of the Special Item Number (SIN) on the [GSA Multiple Award Schedule](https://www.gsaelibrary.gsa.gov/ElibMain/sinDetails.do?scheduleNumber=MAS&specialItemNumber=541519PKI&executeQuery=YES){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. The SSP SIN is intended to make it easier for potential buyers to search for the digital certiﬁcate services offered by the GSA PKI SSPs.

## Section II: SSP Application and Maintenance Activities  

Federal agencies requiring digital certiﬁcate services from a SSP will send a Request for Quotation or a Request for Proposal based on the SSP SIN—sending alerts to SSPs. Federal agencies can expect a response from the SSPs that reﬂects the due diligence completed by the Federal Acquisition Service (FAS) to offer SSPs that satisfy federal requirements.

Federal agencies’ participation in the SSP Program is important. While their purchases through the program help drive revenue, their ultimate participation leads to the Federal Government’s way of using trusted SSPs to issue and manage digital certiﬁcates for devices, federal employees, contractors, and other afﬁliated personnel. Additionally, federal agencies using the program will leverage the SSPs’ infrastructure components for digital certiﬁcate services, which can result in cost savings derived from economies of scale through large volume of certiﬁcate purchases.

Federal agencies have the opportunity to share in the risk management activities by providing their security controls or hybrid security controls to GSA for them to populate into a SSP’s security posture for a holistic view. This will help focus on the whole PKI solution rather than focus on the PKI infrastructure. Federal agencies are encouraged to participate in the security meetings with their SSP to jointly address problems related to risk.

## Application Process

There are ﬁve major steps to apply to become a GSA PKI SSP. They are as follows:

- Initiate an application with the GSA PKI SSP Program Ofﬁce and sign the GSA PKI SSP MOA.
- Complete PKI pre-conditions and submit to the FPKIPA through the GSA PKI SSP Program Ofﬁce for veriﬁcation.
- Complete the federal PKI certiﬁcation process and send an executive copy of the FPKIPA MOA to the GSA PKI SSP Program Ofﬁce.
- Complete GSA Security Assessment & Authorization (SA&A) activity and receive an ATO.
- Apply to the GSA MAS and, after acceptance, the vendor is added to idmanagement.gov government identity trust services and ofﬁcially listed as a GSA PKI SSP.

### Step 1 -Initiate an Application and Sign GSA PKI SSP MOA

The GSA establishes a MOA with a GSA PKI SSP to communicate the mutually accepted actions of all parties involved in the agreement. The MOA indicates the parties in the agreement have reached an understanding of their roles and responsibilities and are moving forward with the acceptance of the SSP participating in the program. See Appendix A for a sample MOA.

A PKI Vendor will be asked for proof or to provide attestations regarding their systems and technical capabilities. Other pre-conditions may be applied as necessary, such as past performance, degree of experience, organizational maturity, and ability to scale operations to meet expected long-term demand and the rigors in completing the Federal PKI certiﬁcation process.

### MOA Procedural Guidance:

- Send an email to [GSAPKISSP@gsa.gov](mailto:GSAPKISSP@gsa.gov) requesting admission to the GSA PKI SSP Program.
- SSPs must obtain, review, and sign the MOA from the SSP Program Ofﬁce.

Once an MOA is signed, the GSA PKI SSP will sponsor the vendor to apply to the Federal PKI Policy Authority.

### Step 2 -Complete PKI Pre-Conditions

A prospective GSA PKI SSP must meet the following basic pre-conditions as outlined in the [X.509 Certiﬁcate Policy for the  U.S.  Federal PKI Common Policy Framework [COMMON CP]]({{site.baseurl}}/docs/fpki-x509-cert-policy-common.pdf){:target="_blank"}{:rel="noopener noreferrer"} to demonstrate readiness for the PKI certiﬁcation process.

1. Provide Certiﬁcation Authority (CA), repository, and archive services. The PKI Vendor must operate a self-signed CA instead of relying on a certiﬁcate issued from the Federal Common Policy CA. This ensures that if there is an issue with the GSA PKI SSP, the Federal PKI can revoke the certiﬁcate from the Federal Common Policy CA without impacting the GSA PKI SSP customer certiﬁcates.
2. Develop and maintain a Certiﬁcation Practice Statement (CPS) covering PKI operations that comply with [COMMON CP] and issue certiﬁcates according to the [Common Policy X.509 Certiﬁcate and Certiﬁcate Revocation List (CRL)
proﬁles]({{site.baseurl}}/docs/fpki-x509-cert-profile-common.pdf){:target="_blank"}{:rel="noopener noreferrer"}.
3. Work with its customers to ensure registration practices ﬁt smoothly within its overall CPS package and comply with [COMMON CP].
4. Implement all applicable PIV-related policies, such as common-authentication, common-cardAuth, and common-piv-contentSigning.
5. Ensure it understands and can fulﬁll its customers’ archive requirements and understands its obligation to do so.
6. Collaborate and exchange information and documents as necessary with any other party performing the Registration Authority (RA) duties.
7. Support federal agency customer audits and assessments as requested.
8. [Optionally] Provide baseline hardware and software to support RA operations.

Any changes to these pre-conditions will be coordinated through the GSA SSP Program Ofﬁce, which can amend the conditions any time to ensure the best interests of the Federal Government are met. Once the GSA PKI SSP veriﬁes the pre-conditions, the vendor submits this information to the Federal PKI Policy Authority to begin the Federal PKI Certiﬁcation process.

### Step 3 -Apply for Federal PKI Certiﬁcation

The PKI Vendor must successfully meet ﬁve compliance and conformance activities with the FPKIPA:

- Sign a memorandum of agreement with the FPKIPA.
- Document conformance with the [COMMON CP], which measures the degree to which the PKI Provider’s CPS conforms with [COMMON CP]. 
- Perform a Day Zero Audit to ensure the applicant’s PKI is operating in conformance with applicable [COMMON CP] requirements. 
- Demonstrate PKI operational capabilities, which validates the PKI Provider’s ability to operate a PKI compliant with [COMMON CP] and other relevant operating documents.
- Obtain an ATO for its PKI system through GSA, which establishes the extent to which the Applicant’s PKI meets security and privacy requirements deﬁned by the organization, government guidelines, and federal mandates. Findings are documented in a formal authorization package that informs the ATO decision. The ATO is conditional upon the PKI vendor successfully applying to and getting on the GSA PKI SSP MAS.

If the Federal PKI Policy Authority approves the PKI vendor, both parties execute an MOA to establish roles, responsibilities, and requirements in maintaining the Federal PKI certiﬁcation.

### Federal PKI Certiﬁcation Guidance:

- The GSA PKI SSP Program Ofﬁce will coordinate PKI vendor information needs with the GSA supporting ofﬁces. 
- The PKI vendor shares an executed copy of the Federal PKI Policy Authority MOA with the GSA PKI SSP Program Ofﬁce. 

After an executed Federal PKI Policy Authority MOA is shared with the GSA PKI SSP Program Ofﬁce, GSA can verify security activities to issue an ATO.

### Step 4 -Receive an Authorization to Operate

A Security Assessment & Authorization (SA&A) at the moderate impact level must be performed on the SSP’s information system by a third-party auditor. Performing an SA&A satisﬁes government requirements as speciﬁed in the Federal Information Security Modernization Act 2014 (FISMA 2014) and other associated documents. An SA&A includes three components—a security assessment, a resulting security authorization, and continuous monitoring.

The Security Assessment determines that selected controls are implemented correctly, operating as intended, and producing the desired outcome with respect to meeting the security and privacy requirements for the system and the organization.

The Security Authorization provides organizational accountability by requiring a senior management ofﬁcial to determine if the security and privacy risk to organizational operations and assets, individuals, and other organizations (if applicable) is acceptable. The security team within the GSA, OCISO reviews the SAR along with applicable security documents to recommend a Security Authorization to the GSA senior management ofﬁcial in the SSP Program Ofﬁce.

### Security Assessment & Authorization Procedural Guidance:

- Engage an Assessor or Assessment Team that is an independent third-party competent in Public Key technology.
- Format System Security Plan in Open Source Control Assessment Language.
- Obtain all necessary GSA SA&A guidance documents and security artifact templates from the security team in the GSA Ofﬁce of Chief Information Ofﬁce. Documents to be obtained and used include:

  - **Managing Enterprise Risk** - GSA policy detailing annual documentation requirements.
  - **SA&A Artifact Templates** - Examples include Incident Response template, System Security Plan template, Penetration Testing and Results template, Plan of Action and Milestones (POA&M) template, and Security Assessment Report template.
  - **FPKI 800-53 Overlay (OVERLAY)** - Details security controls applicable to SSP PKI systems and provides supplemental guidance on additional requirements for those controls and enhancements.

- Perform the Assessment, completing all provided templates and guidance.
- Develop a Plan of Action and Milestones (POA&M) to facilitate remediation of any security ﬁndings.
- Provide the Assessment Package to the OCISO’s Information Systems Security Manager (ISSM), who reviews the package to ensure FISMA security requirements are met.
- The Information System Security Management (ISSM) on the security team creates an authorization package and submits it to the Authorizing Ofﬁcial (AO) in the SSP Program Ofﬁce.
- The AO makes a risk determination that reﬂects the risk management strategy, including risk tolerance. Responses and mitigations for identiﬁed risks are provided by the ISSM.
- The AO decides whether to approve or deny authorization to operate.
- If approved, the AO signs and issues an ATO.
- The SSP performs risk management activities documented in the IT Security Procedural Guide: *Managing Enterprise Cybersecurity Risk CIO-IT Security-06-30 and the SSP Handbook.*

<div class="usa-alert usa-alert--error" role="alert">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading"></h4>
    <p class="usa-alert__text">
      The ATO is not a governmentwide risk acceptance. Each federal agency must issue an ATO for its own use of the SSP services and review continuous monitoring deliverables to ensure the security posture remains sufﬁcient for their continued use. To avoid signiﬁcant delays, a SSP should not use their own versions of SA&A-related documents or templates. It is important for the SSP to consider the resources needed for ongoing risk management activities. Once a vendor receives an ATO, they apply to the GSA Multiple Award Schedule to complete the process and be recognized as a GSA PKI SSP.
    </p>
  </div>
</div>


### Step 5 -Apply to GSA MAS and Get Listed as an Identity Trusted Service

Upon receiving an ATO and being conﬁrmed as a GSA PKI SSP, the vendor is ready to apply [to the GSA MAS](https://www.gsa.gov/buy-through-us/purchasing-programs/multiple-award-schedule){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} to offer digital certiﬁcate services governmentwide. The schedule provides a customer agency with a level of assurance that the SSP has been pre-vetted and is offering the best value. Once a SSP is on a schedule, it affords them access to other GSA schedule opportunities.

### Acquisition Procedural Guidance:

- Submit an Information Technology Package for GSA Special Item Number (SIN) 541519PKI on the GSA MAS. For assistance, please visit the GSA’s website: [https://www.gsa.gov/buy-through-us/purchasing-programs/multiple-award-schedule/help-with-mas-contracts-to-sell-to-government/roadmap-to-get-a-mas-contract](https://www.gsa.gov/buy-through-us/purchasing-programs/multiple-award-schedule/help-with-mas-contracts-to-sell-to-government/roadmap-to-get-a-mas-contract){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} 
- Collaborate with the FAS to clarify or supplement the package for contract determination.

<div class="usa-alert usa-alert--error" role="alert">
  <div class="usa-alert__body">
      <h4 class="usa-alert__heading"></h4>
      <p class="usa-alert__text">
        If the OCISO and SSP Program Ofﬁce believe the SAR will be favorable based on preliminary reviews and discussions, the SSP does not have to wait for the ATO letter to submit an Information Technology Package to FAS. These efforts can be worked in parallel to offer digital certiﬁcate services on the day of receiving the ATO letter. After the vendor is listed on the GSA MAS, the vendor submits a business and technical point of contact to the GSA PKI SSP Program Ofﬁce. This information is publicly posted on <a href="{{site.baseurl}}/trust-services/#government-identity-services" target="_blank" rel="noopener noreferrer">idmanagement.gov under Government Identity Trust Service</a> to identify the vendor as a GSA PKI SSP and assist agencies in identifying federally-compliant PKI services. GSA will market the Multiple Award Schedule and vendors listed on it as the premier vehicle for Federal Government agencies to acquire federally-compliant PKI services.
      </p>
  </div>
</div>


## Maintenance Activities

A GSA PKI SSP must complete ongoing maintenance activity to remain in the program. If these maintenance activities are not completed, the vendor may lose either its Authorization to Operate or Federal PKI certiﬁcation.

### PKI Maintenance

A GSA PKI SSP must comply with all federal PKI-directed activities by:

1. Completing annual PKI compliance activities as outlined in the [Federal PKI Annual Review requirements]({{site.baseurl}}/fpki/#audit-information-for-the-fpki-management-authority){:target="_blank"}{:rel="noopener noreferrer"} .
2. Following the [FPKI Incident Management Plan]({{site.baseurl}}/docs/fpki-imp.pdf){:target="_blank"}{:rel="noopener noreferrer"}  in the event of a PKI-related incident.

### SA&A Maintenance

The GSA PKI SSP Program Ofﬁce and GSA’s security team perform continuous monitoring, annual checks, monthly scanning, vulnerability management, and other risk management strategies to maintain operational status. Risk management activities are documented in the IT Security Procedural Guide: Managing Enterprise Cybersecurity Risk CIO-IT Security-06-30 and the SSP Handbook.

### GSA PKI SSP MAS Contract Maintenance

The vendor must maintain its GSA PKI SSP MAS Contract to stay in compliance with the GSA PKI SSP MOA. If a vendor cannot maintain a GSA PKI SSP MAS Contract, the PKI vendor will coordinate decommission activity through the GSA PKI SSP Program Ofﬁce with customer agencies, the Federal PKI Policy Authority, and supporting GSA ofﬁces.

## Section III: Digital Certiﬁcate Services

While the SSP Program has primarily focused on digital certiﬁcates for Personal Identity Veriﬁcation (PIV) cards, the [COMMON CP] provides opportunities (and supporting Object Identiﬁers (OIDs) for SSPs to offer additional services to federal agencies.

## Current Services

### PIV Certiﬁcates

A PIV card is a hardware-based smart card that conforms to Federal Information Processing Standard 201. It contains ﬁve digital certiﬁcates of which four are available to the user. A PIV card is issued to either a federal employee or contractor who has a favorably-adjudicated Tier 1 or higher federal background investigation. PIV certiﬁcates issuance is contingent on the agency customer operating a card management system.

|**Type**|**COMMON OID**|
|--------|--------------|
|Certiﬁcates for authentication to logically <br>and physically access federal assets|id-fpki-common-authentication  
|Certiﬁcates for encrypted email|id-fpki-common-policy OR<br> id-fpki-common-hardware  
|Certiﬁcates to digitally sign emails and documents|id-fpki-common-hardware  
|Certiﬁcates for Card Authentication|id-fpki-common-cardAuth  
|Certiﬁcates used by a Card Management System<br> to digitally sign content embedded in PIV cards|id-fpki-common-pivcontentSigning|

### Derived PIV Certiﬁcates

A derived PIV certiﬁcate is either a software or hardware certiﬁcate issued when the user demonstrates ownership of a PIV card. A derived PIV certiﬁcate is issued to a mobile device or other form factors such as FIDO USB security keys and device Trusted Platform Module. A derived PIV certiﬁcate is issued and used where it is difﬁcult to leverage a smart card form factor such as on devices or platforms that cannot use a smart card reader.

|**Type**|**COMMON OID**|
|--------|--------------|
|Derived-PIV authentication certiﬁcates for use<br> on mobile devices or other form factors such as FIDO USB security keys and Trusted Platform Modules|id-fpki-common-derived-pivAuth-hardware<br> or id-fpki-common-derived-pivAuth| 
|Derived PIV signature certiﬁcates for use<br> on mobile devices or other form factors such as FIDO USB security keys and Trusted Platform Modules|id-fpki-common-policy,<br> id-fpki-common-hardware, or<br> id-fpki-common-high|
|Derived PIV encryption certiﬁcates for use<br> on mobile devices or other form factors such as FIDO USB security keys and Trusted Platform Modules|id-fpki-common-policy,<br> id-fpki-common-hardware, or<br> id-fpki-common-high|

### PIV-I Certiﬁcates

PIV Interoperable(PIV-I) is a hardware-based smart card that follows the same technical standard as the PIV card, can interoperate with the PIV infrastructure, but does not require a favorably adjudicated Tier 1 or higher federal background investigation. A PIV-I card is issued to individuals who do not qualify for a PIV card. See the [PIV-I playbook]({{site.baseurl}}/university/pivi/){:target="_blank"}{:rel="noopener noreferrer"} for more details.

|**Type**|**COMMON OID**|
|--------|--------------|
|PIV Interoperable authentication certiﬁcates|id-fpki-common-pivi-authentication|
|PIV Interoperable digital signature certiﬁcates|id-fpki-common-policy,<br>  id-fpki-common-hardware, or<br> id-fpki-common-high|
|PIV Interoperable encryption certiﬁcates|id-fpki-common-policy,<br> id-fpki-common-hardware, or <br> id-fpki-common-high|
|PIV Interoperable card authentication certiﬁcates|id-fpki-common-pivi-cardAuth|
|PIV Interoperable content signing certiﬁcates|id-fpki-common-pivi-contentSigning|

### Device Certiﬁcates

Device certiﬁcates can be issued to devices such as domain controllers, web sites, servers, or other types of devices on which they want to establish secure server-to-server type communications. Note: GSA PKI SSP device certiﬁcates are not publicly trusted and should not be used on public-facing websites or on websites with users outside the home agency.

|**Type**|**COMMON OID**|
|--------|--------------|
|Certiﬁcates to support secure HTTP connections with end users and servers providing interagency trust|id-fpki-common-devices or<br> id-fpki-common-deviceHardware|

### Digital Signature Certiﬁcates

A digital signature certiﬁcate is used to digitally sign documents such as PDFs or Microsoft Word or digitally sign emails. An agency may also request a [Digital Autopen]({{site.baseurl}}/playbooks/autopen/){:target="_blank"}{:rel="noopener noreferrer"}  signature certiﬁcate to sign documents for the Federal Register.

|**Type**|**COMMON OID**|
|--------|-------------------|
|Certiﬁcates to digitally sign emails and documents|id-fpki-common-hardware|  

### Key Management Services

Key Management Services store and manage private keys associated with encryption certiﬁcates. Examples might include Key Escrow and Recovery, Key History, and Data Decryption Services.

## Conclusion

GSA established the GSA PKI SSP Program to help agencies identify and procure federally-compliant PKI services and digital certiﬁcates. There may be multiple types of PKI SSPsrs, but only one type of GSA PKI SSP. This clear deﬁnition not only helps agencies identify approved services, but also leverage the governmentwide acquisition vehicles for customer agencies to receive consistent pricing, terms, and services. The GSA PKI SSP Program Ofﬁce maintains the SSP Program and coordinates government activity on behalf of the GSA PKI SSPs.

## Appendix A - Sample MOA

<p align="center">
  <b>
    Memorandum of Agreement<br>
    Federal Public Key Infrastructure<br>
    Shared Service Provider Program<br>
    (Commercial Entities Only)
  </b>
</p>
<p>
This Memorandum of Agreement ("Agreement") is entered into by the General Services Administration, Ofﬁce of Technology Policy (“OTP”), within the Ofﬁce of Governmentwide Policy located at 1800 F Street, NW Washington, DC 20405 and the [name of the commercial SSP vendor ("Entity") located at [SSP vendor address], as of the date of OTP’s signature to this Agreement with a term of three years. The OTP and Entity will collectively be referred to as "Party" or the "Parties."
</p>
<ol>
  <!-- 1 -->
  <li><strong>Deﬁnitions.</strong> 
    <p>
      <ol type="a">
        <li><u>Federal Public Key Infrastructure ("FPKI" or " Federal PKl")</u> is an implementation of a set of PKI policies, processes, and information technology systems that provide the U.S. Government with a common baseline to administer certiﬁcates and public-private key pairs. Federal PKI is one of several trust frameworks supporting federated trust of government devices and persons used by the U.S. Federal Government.</li>
        <li><u>Federal Public Key Infrastructure Policy Authority</u> ("FPKIPA" or " Policy Authority") is the federal trust framework governance body for a set of PKI systems and associated certiﬁcates used for federated trust across and between federal agencies and with entities that are not a U.S. Federal Government agency for mission delivery purposes. The Policy Authority is a group of representatives from U.S. Federal Government agencies (including cabinet-level departments) established pursuant to a charter under the Federal CIO council. It manages the policies governing the FPKI trust framework and approves or denies entities for certiﬁcation into the trust framework.</li>
        <li><u>Shared Service Provider (“SSP”)</u> An Entity that adheres to the FPKI set of policies and processes, as well as GSA requirements to provide digital certiﬁcate services to federal agencies.</li>
        <li><u>Shared Service Program</u>  (“SSP Program”)is a GSA program that provides technical support for the FPKI. Speciﬁcally, it supports the governmentwide implementation of HSPD-12 and the FICAM Initiative. It is recognized as robust secure PKI services that provide agencies with the capability to implement secure logical and physical access to federal resources through outsourced shared PKI services. By cross-certiﬁcation, the shared PKI infrastructure is a part of the FPKI’s information technology systems governed by the FPKI. GSA has established a Special Item Number (SIN) 541519PKI that identiﬁes these PKI services that contract holders offer governmentwide.</li>
      </ol>
    </p>
  </li>
  <!--2 -->
  <li><p><strong>Purpose.</strong> The purpose of this Agreement is to agree on the terms and conditions on which the Entity will participate in the SSP Program. The Ofﬁce of Technology Policy (OTP) manages the SSP Program with managing partners from the following GSA ofﬁces:</p>
    <p>
      <ol type="a">
        <li>Ofﬁce of Chief Information Security Ofﬁcer (“OCISO”)</li>
        <li>Federal Acquisition Service, Ofﬁce of Information Technology Category (“ITC”)</li>
        <li>Ofﬁce of Government-wide Policy, Ofﬁce of Technology Policy (OTP)</li>
      </ol>
    </p>
    <p>
    Speciﬁcally, the OCISO manages the security posture of the Entity’s information technology systems and the ITC makes the Entity’s shared PKI services available for purchase through a GSA contract vehicle. External to but in concert with GSA, the FPKIPA governs the certiﬁcate policies, requirements, and practices for the shared PKI services. This Agreement sets forth the respective responsibilities and obligations of the Parties.</p>
  </li>
  <!-- 3 -->
  <li><p><strong>Authority.</strong> The basis of this Agreement and the subsequent inclusion of the Entity into the SSP Program aligns with the *Federal Information Security Modernization Act of 2014 (FISMA), GSA’s IT Security Procedural Guide: Managing Enterprise Cybersecurity Risk CIO-IT Security-06-30 GSA Security Policy, the Federal Acquisition Regulation*, the federal PKI certiﬁcate policies, and the Entity certiﬁcate policy or practices listed in the Entity’s MOA with the FPKIPA. It also complements the *SSP Operations Handbook*.</p>
  </li>
  <!-- 4 -->
  <li><p><strong>Roles and Responsibilities of the Parties.</strong></p>
    <p>
      <ol type="a">
        <li><strong>The OTP will do the following:</strong>
          <p>
            <ol type="i">
              <li>Serve as the GSA senior ofﬁcial to grant the Entity’s information technology system authorization to operate.</li>
              <li>Determine program direction based on Federal Government need.</li>
              <li>Ensure through the OCISO and ITC proper performance and delivery of PKI shared services.</li>
              <li>Develop and manage operational processes to effectively deliver the shared PKI services.</li>
              <li>Represent SSP and SSP Program interests in the FPKIPA.</li>
              <li>Report quarterly on security posture to the FPKIPA and customer agencies.</li>
              <li>Coordinate service improvement and feedback from customer agencies to SSP.</li>
              <li>Collaborate with GSA managing partners to operate and maintain effective, secure, and reliable PKI services.</li> 
            </ol>
          </p>
        </li>
        <li><strong>The OCISO will do the following:</strong>
          <p>
            <ol type="i">
              <li>Serve as the GSA senior ofﬁcial to recommend the Entity’s information technology system for authorization to operate (ATO).</li> 
              <li>Monitor and report on the Entity’s information technology system security posture.</li>
              <li>Provide quarterly security reports to the Authorizing Ofﬁcial.</li>
              <li>Collaborate with the OTP on security management concerns to operate and maintain an effective, secure, and reliable PKI shared service.</li> 
            </ol>
          </p>
        </li>
        <li><strong>The ITC will do the following:</strong>
          <p>
            <ol type="i">
              <li>Own and manage SIN 541519PKI for the SSP Program on the GSA Multiple Award Schedule (MAS).</li> 
              <li>Review the Entity’s MAS Information Technology Package for a contract determination.</li>
              <li>Collaborate with OTP and the ITC contract team to make the Entity’s PKI shared service available to purchase.</li>
              <li>Collaborate with the OTP on contract management concerns to deliver effective, secure, and reliable PKI shared service.</li>
              <li>Issue and revoke certiﬁcates to approved SSPs</li>
            </ol>
          </p>
        </li>
        <li><strong>The Entity will do the following:</strong>
          <p>
            <ol type="i">
              <li>Comply with all laws, ordinances, and regulations (Federal, State, or Local) covering work in the SSP Program.</li>
              <li>Comply with the FPKI policies to the include the X.509 Certiﬁcate Policy for the U.S. Federal PKI Common Policy Framework (FCPF), hereafter referenced as COMMON and its complementary documents:
                <p>
                  <ol start="1">
                    <li>Change proposals</li>
                    <li>Key Recovery Policy</li>
                    <li>U.S. Federal Certiﬁcate Proﬁles: X.509 Certiﬁcate and Certiﬁcate Revocation List (CRL) Extensions Proﬁle for the Shared Service Providers (SSP) Program</li>
                    <li>Memorandum of Agreements (MOAs) established between the FPKIPA and Entity.</li>
                  </ol>
                </p>
              </li>
              <li>Obtain an Authorization to Operate (ATO) declaration through GSA’s formal program for information security management before rendering PKI services.</li>
              <li>Ensure adequate resources to maintain an ATO and comply with binding operational directives, and GSA requirements for protecting GSA IT resources. This includes addressing critical gaps (e.g., multifactor authentication, database encryption, no outdated software, high and critical ﬁndings, etc.) in the timeframe speciﬁed in GSA guidance.</li> 
              <li>Ensure any certiﬁcates, associated certiﬁcates, and public key pairs issued to the federal agencies will be owned by the government.</li>
              <li>Use the SSP Operations Handbook as the program’s established guidelines while complying with regulations and GSA expectations.</li>
              <li>Prepare for and facilitate monthly Security Dashboard and Plan of Action and Milestones meetings.</li>
              <li>Attend and/or participate in monthly program, security, and contract meetings to exchange information or provide feedback on proposed changes to the program.</li>
            </ol>
          </p>
        </li>
      </ol>
    </p>
  </li>
  <!-- 5 -->
  <li><p><strong>Third Parties.</strong> This Agreement is binding only upon the Parties, by and through their ofﬁcials, agents, employees, and successors. Entity may not assign its rights or delegate its duties or obligations under this Agreement without prior written consent from OTP. No person or entity is intended to be a third-party beneﬁciary of the provisions of this Agreement for purposes of any civil, criminal, or administrative action, and accordingly, no third person or entity may assert any claim or right as a beneﬁciary or protected class under this Agreement in any civil, criminal, or administrative action.</p>
  <p>This Agreement does not authorize, nor shall it be construed to authorize, or add to any systems, documents or other technology, persons or entities not a Party to this Agreement nor intended to have authorization under this Agreement.</p>
  </li>
  <!-- 6 -->
  <li><p><strong>Entity Change.</strong> If Entity anticipates changes or has changed due to a merger, acquisition, bankruptcy, or other means that modiﬁes the Entity ownership or security boundary, then Entity shall:</p>
    <p>
      <ol type="a">
        <li>Provide written notiﬁcation to OTP about the intent to change the business relationship in a timely manner not to disrupt any PKI services.</li>
        <li>Provide a transition plan that includes all activities from transferring a PKI solution to resolution of impacts on end users and the delivery environment. The depth of a transition plan should be appropriate for the type of transition and the criticality of the PKI components going through transition. At minimum, the activities in the transition plan must be compliant with the COMMON and address the following:
        </li>
      </ol>
    </p>
    <p>
        <ol type="i">
          <li>The coordination and scheduling of transferring system archives, system inventory and
            conﬁguration data, certiﬁcate proﬁles, key recovery databases (if applicable), private
            keys, key shares, audit records, hardware security modules, certiﬁcate and certiﬁcate
            revocation list (CRL) databases, and all policy and security documents applicable to the
            operations of the PKI solution.
          </li> 
          <li>The estimated costs for terminating, transferring, selling, or disposing a PKI
            solution must be shared if direct or indirect expenses are transferred to the new approved
            SSP and/or the impacted customer agency.
          </li>
          <li>The continued services for all certiﬁcates, certiﬁcate revocation, and status
            checking until the expiration of the longest-lived certiﬁcate or transference of the
            control for the DNS Names in URLs for these services.
          </li>  
          <li>The continued support to collect and review system audit logs for the PKI solution.</li>
          <li>The continued support required to obtain and provide annual PKI compliance audits until revocation of all issued certiﬁcates or the expiration of the longest-lived issue certiﬁcate.</li>
        </ol>
    </p>
  </li>
  <!-- 7 -->
  <li><p><strong>Compliance with Laws, Regulations and Policies.</strong> Entity agrees to comply with all applicable policies listed in Appendix A.</p>
    <p>The following is applicable if Entity is not a U.S. Federal Government agency: Entity shall comply with applicable U.S. Federal laws and regulations including but not limited to trade compliance, economic and trade sanctions, and blocked, denied, and debarred persons lists. If the Entity is not in compliance with these applicable laws and regulations, OTP reserves the right to change or remove the Entity's participation in the SSP Program in the interest of national security.</p>
  </li>
  <!-- 8 -->
  <li><p><strong>Updates:</strong> The OCISO and OTP are responsible for the maintenance and update of the *IT Security Procedural Guide: Managing Enterprise Cybersecurity Risk CIO-IT Security-06-30 GSA Security Policy and SSP Operations Handbook*respectively.</p>
  <p>Entity shall review the document updates each time they are updated and implement the necessary changes to practices to comply.</p>
  </li>
  <!-- 9 -->
  <li><p><strong>MOA Updates and Evolving Security Requirements.</strong> This MOA may be updated only by mutual written agreement signed by an authorized representative of each party.</p>
    <p>Notwithstanding the foregoing, due to the nature of evolving national security threats and updates to technology and security, the Parties shall work in good faith to implement required updates to applicable laws, regulations, and policies through the following steps:</p>
    <p>
      <ol type="a">
        <li>OTP, OCISO, or ITC will provide the Entity with written notice of the required updates, the number of days in which the updates must be implemented, and an updated version of Attachment A that incorporates the changes. The updated version of Attachment A will automatically replace the previous version of Attachment A and be deemed incorporated into this Agreement without further actions.</li>
        <li>Upon notiﬁcation, the Entity shall have three (3) business days to conﬁrm via written response whether it will be implementing the changes.</li>
        <li>If the Entity declines to implement the requirements, the OTP, ITC, and OCISO may decide to terminate this agreement, revoke ATO status, notify customer agencies of the situation, or take any such other action necessary to maintain the delivery of secure PKI services.</li>
      </ol>
    </p>
  </li>
  <!-- 10 -->
  <li><p><strong>Conﬁdentiality.</strong> If Entity is not a U.S. Federal Government agency, the following applies:</p>
    <p>
      <ol type="a">
        <li>Entity assumes full responsibility for and guarantees the security and conﬁdentiality of all documents, data, and other information supplied or gleaned from the customer agency, Federal PKI, and provided, obtained, or accessed through being a party to this Agreement ("Conﬁdential Information").</li>
        <li>Entity will prevent disclosure of this Conﬁdential Information to any person not authorized by the U.S. Federal Government or Policy Authority to have access to such documents or information.</li>
      </ol>
    </p>
  </li>
  <!-- 11 -->
  <li><p><strong>Liability.</strong> Neither Party shall be liable to the other for any loss, liability, damage or expense (including attorney fees) arising out of the operation of the PKI services. This Agreement is entered into for the convenience of the Parties and shall not give rise to any cause of action by Entity or by any third party.</p></li>
  <!-- 12 -->
  <li><p><strong>Conﬂict Resolution.</strong> If Entity is a private sector entity, the Contract Disputes Act, 41 U.S.C. 7101 et seq, is applicable to all disputes under this Agreement.</p></li>
  <!-- 13 -->
  <li><p><strong>Governing Law.</strong> This Agreement is governed by the laws of the United States.</p>
  </li>
  <!-- 14 -->
  <li><p><strong>Termination.</strong> If Entity is not in compliance with this Agreement or applicable security or technical requirements, the OTP shall notify the Entity and may unilaterally suspend participation in the SSP Program. The OTP shall provide the Entity an opportunity to cure the issues and regain its participation if there is a government business need as determined at the sole discretion of OTP. If the Entity does not cure within six months, OTP may terminate this Agreement in entirety. Either party may terminate this Agreement for convenience at its sole discretion with 30 days prior written notice.</p>
  <p>The Entity must provide a transition plan as described in Section 6 if termination is decided.</p>
  <p>This MOA is valid for one year from the last date in the signature section.</p>
  </li>
  <!-- 15 -->
  <li><p><strong>System Disruption.</strong> If there is a material issue in the operability of the PKI service in accordance with the documents in Section 3 that will have a substantial adverse effect on a customer’s operations, OTP, the customer agency, OCISO, and Entity will determine a planned resolution within 10 days.</p>
  <p>
  Entity will promptly notify the OTP:
    <ol type="a">
      <li>In the event of any material problem or inability to operate Entity's certiﬁcation authorities in accordance with the documents in Section 3.</li>
      <li>If the Entity becomes aware of a material noncompliance on the part of any other party that the Entity has formed an agreement with to use Entity's certiﬁcation authorities covered by this agreement.</li>
      <li>If the Entity becomes aware of a material noncompliance on the part of supporting vendors that the Entity has formed an agreement covered by this agreement.</li>
    </ol>
  </p>
  <p>If the issue is a security incident, the Entity must comply with GSA’s Incident-Response-[CIO-IT-Security-01-02-Rev-19] and report incident to the OTP and OCISO, as well as submit an incident report for follow-on reporting to the Cybersecurity Infrastructure Security Agency (CISA), the Ofﬁce of Inspector General (OIG), and the United States Congress, as applicable.</p>
  </li>
  <!-- 16 -->
  <li><p><strong>Signatures:</strong></p>
  <p>
    <pre>
      Name: Laura Stanton 
      Title: Assistant Commissioner 
      Organization: Federal Acquisition Service 
      Ofﬁce: Ofﬁce of Information Technology Category (ITC)
    </pre>
    <hr>
    <pre>
      Name: Dan Pomeroy 
      Title: Deputy Associate Administrator 
      Organization: Ofﬁce of Governmentwide Policy 
      Ofﬁce: Ofﬁce of Technology Policy (OTP) 
    </pre>
    <hr>
    <pre>
      Name: Bo Berlas 
      Title: Chief Information Security Ofﬁcer 
      Ofﬁce: Ofﬁce of Chief Information Security (OCISO) 
    </pre>
    <hr>
  </p>
  </li>
</ol>
