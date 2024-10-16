---
layout: page
collection: playbooks
title: Digital Autopen Playbook 
pubdate: 2023-03
type: Markdown
permalink: /playbooks/autopen/
description: This playbook outlines the process for an agency to implement a Digital Autopen for Federal Register documents.
sidenav: playbooks
sticky_sidenav: true

version: 1.0
pubdate: March 29, 2023

subnav:
  - text: Executive Summary
    href: '#executive-summary'
  - text: The Digital Autopen
    href: '#the-digital-autopen'
  - text: Step 1. Define the Agency Process
    href: '#step-1-define-the-agency-process'
  - text: Step 2. Define Controls
    href: '#step-2-define-controls'
  - text: Step 3. Obtain a Digital Autopen Certificate
    href: '#step-3-obtain-a-digital-autopen-certificate'
  - text: Summary
    href: '#summary'
  - text: Appendix A. References
    href: '#appendix-a-references'
  - text: Appendix B. Policy Recommendations
    href: '#appendix-b-policy-recommendations'
  - text: Appendix C. Templates
    href: '#appendix-c-templates'
---

<!-- Version 1.0  
March 29, 2023 -->

The Delegated Digital Signature Working Group of the Federal Chief Information Security Officer Council Identity, Credential, and Access Management Subcommittee developed this playbook to outline the process for a federal agency to implement a digital autopen for *Federal Register* documents.

<img src="{{site.baseurl}}/assets/img/logo-gsa.png" width="64" height='64' align="left" alt="U.S. General Services Administration Logo">
<img src="{{site.baseurl}}/assets/img/logo-cio-round.png" width="64" height='64' align="left" alt="U.S. Federal Chief Information Officer Council Logo">
<br><br><br>

<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="v-a1">
      Date: {{page.pubdate}} - Version: {{page.version}}
    </button>
  </h4>
  <div id="v-a1" class="usa-accordion__content usa-prose">
    <table>
      <caption>Digital Autopen version table</caption>
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
        <td>06/30/2022</td>
        <td>Initial Draft.</td>
      </tr>
    </table>
  </div>
</div>

<!-- | Version Number | Date | Change Description |
| :----------: | :-------: | -------- |
| 1.0 | 06/30/2022 | Initial Draft. | -->

## Executive Summary

This playbook outlines the process for an agency to implement a Digital Autopen for *Federal Register* documents. Federal regulatory agencies issue regulations based on laws enacted by Congress or an executive power. Those regulations may be digitally signed and submitted electronically to the Office of the Federal Register (OFR) for publication.  OFR requires all documents submitted for publication to be signed by an official authorized to act for the agency. When an official is unavailable or unable to sign a document, they may authorize another agency employee to use a digital autopen to affix the official’s digital signature to the document. This playbook assumes that the agency has existing rules governing the delegation of authority and builds upon such rules to outline a three-step process to create a digital autopen to sign a Federal Register document. 

1. [Define the agency process](#step-1-define-the-agency-process) to delegate signing Federal Register documents. 
2. [Define controls](#step-2-define-controls) to ensure the certificate and associated key are used only for the intended purpose. 
3. [Obtain a role-based digital signature certificate](#step-3-obtain-a-digital-autopen-certificate) from a Federal Public Key Infrastructure (PKI) Shared Service Provider. 

This playbook recommends using a role-based signature certificate issued to a hardware device (e.g., smart card, USB hardware device, or other FIPS–140 Level 2  certified hardware) from a [Federal PKI Certification Authority]({{site.baseurl}}/trust-services/#government-identity-services){:target="_blank"}{:rel="noopener noreferrer"}. [Federal Agency Certification Authorities]({{site.baseurl}}/fpki/#annual-review-requirements-for-all-certification-authorities){:target="_blank"}{:rel="noopener noreferrer"} may also issue this certificate on their own. The digital autopen certificate can only digitally sign documents. An agency should consider additional controls to limit its use only to sign *Federal Register* documents. This playbook supports [OMB Circular A-130 goals](https://obamawhitehouse.archives.gov/sites/default/files/omb/assets/OMB/circulars/a130/a130revised.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, including developing and implementing processes to support employee digital signatures.

Send any questions on the process to [icam@gsa.gov](mailto:icam@gsa.gov). 

### Key Terms

- Authorizing sponsor – The federal official authorized to sign Federal Register documents.
- Digital autopen - The digital equivalent of a physical autopen solution.
- Digital autopen certificate - A Federal PKI role-based digital signature certificate used to sign Federal Register documents when approved by the authorizing sponsor.
- Digital autopen recipient - The person identified by the authorizing sponsor to use the digital autopen to affix the authorizing sponsor's signature to a Federal Register document.
- Federal PKI - The Federal PKI is a network of certification authorities (CAs) that issue, PIV credentials and person identity certificates, PIV-Interoperable credentials and person identity certificates, and other person identity certificates. For more information n the Federal PKI contact [fpki@gsa.gov](mailto:fpki@gsa.gov).
- *Federal Register* document - A document drafted for the express purpose of publication in the Federal Register. 
- Office of the Federal Register (OFR) - The agency responsible for publishing the Federal Register.

### Disclaimer

The Delegated Digital Signature Working Group of the Federal Chief Information Security Officer Council ICAM Subcommittee developed this Playbook. U.S. Federal Executive Branch agencies can use this Playbook to supplement existing electronic signature policy and implement specific procedures to create a digital autopen to sign Federal Register documents. This Playbook is not official policy, mandated action, or provides authoritative information technology terms. It includes best practices to supplement existing federal policies and builds upon Office of Management and Budget Memorandum 19-17, A-130, and existing FICAM guidance and playbooks. Subject areas with intersecting scopes, such as delegations of authority, certificate issuance procedures, and internal controls are considered only to the extent that they relate to a digital autopen.

### Acknowledgments

This playbook reflects the contributions of the Delegated Digital Signature working group of the Federal Chief Information Security Officer Council Identity, Credential, and Access Management Subcommittee. The working group was co-chaired by the Internal Revenue Service and the General Services Administration. Contributing members include:
- Department of Agriculture
- Department of Health and Human Services
- Department of Homeland Security
- Department of State
- Department of Veterans Affairs
- General Services Administration
- Government Printing Office
- Internal Revenue Service
- National Archives and Records Administration

[Appendix B](#appendix-b-policy-recommendations) includes recommended policy and guidance updates identified by the working group.

## The Digital Autopen

Federal agencies must publish documents in the *Federal Register* for various reasons. Only federal employees with the proper authority may sign those documents. This authority is referred to as the Authorizing Sponsor in this document. When that Authorizing Sponsor is unavailable, they may authorize the use of a digital autopen to affix their signature to a *Federal Register* document. Multiple reasons exist why an authorizing sponsor may be unavailable.

1. No access to technology that can leverage a PIV card or digital signature certificate.
2. Travel situations outside of normal working hours that require Federal Register submission.
3. Efficiency when multiple documents must be signed.

The OFR outlines signing requirements in the [Document Drafting Handbook](https://www.archives.gov/files/federal-register/write/handbook/ddh.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. There are three main requirements.

1. The signer must be a federal employee with the authority to act for an agency. Laws or Executive Orders define which agency is the regulatory body, while an agency determines who has the authority to sign Federal Register documents.
2. The title in the signature block must be related to the authority to sign the document. It cannot include honorary titles or titles associated with a different agency role.
3. The signature block must match the signer's full name as it appears in the digital signature certificate subject name. See the OFR Document Drafting Handbook for accepted variations. The Personal Identity Verification (PIV) card is a primary means for digitally signing a document.

An agency may delegate the authority to electronically sign a document to someone with an official executive agency billet to sign a document, such as a Deputy Secretary or General Counsel. An agency may delegate a signature to an appropriate authority named in a Federal Register document (see Figure 1).

Figure 1. Named Delegation Example
<img src="{{site.baseurl}}/assets/playbooks/autopen-1-nameddelegation.png" align="center" alt="An example of a named delegation in a Federal Register document.">
<br>

However, in some circumstances, only the federal executive has the authority to sign a Federal Register document. The Federal Register document may face various legal challenges if not signed by the proper authority. This paper proposes a second option when the Authorizing Sponsor completes an official agency delegation of authority process to authorize the use of a digital autopen. A digital autopen leverages a Federal PKI role-based digital signature certificate. **This option is the method proposed by this paper and the focus for the remainder of this paper**.

A digital signature is a cryptographically secure electronic signature. An agency achieves the cryptographic component by using a PKI certificate. For more information on the difference between electronic and digital signatures, see the [Federal CIO Council guidance on the Use of Electronic Signatures in Federal Organization Transactions](https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1151/2016/10/Use_of_ESignatures_in_Federal_Agency_Transactions_v1-0_20130125.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. An agency can request a role-based digital signature certificate from a Federal PKI Shared Service Provider. A PIV card is issued to a single person and not shared under any circumstance. 

This playbook outlines the process for federal agencies to create a Federal Register digital autopen process. It outlines controls around the digital autopen certificate to meet the OFR's digital signature requirements for Federal Register documents and federal cybersecurity. For instructions on digitally signing a Federal Register document, see the [FICAM Playbook Digitally Sign an Office of the Federal Register Document]({{site.baseurl}}/playbooks/signfedregister/).

An agency may implement or update a process by following these three playbook steps.

1. [Define the agency process](#step-1-define-the-agency-process) to delegate signing Federal Register documents. 
2. [Define controls](#step-2-define-controls) to ensure the certificate and associated key are used only for the intended purpose. 
3. [Obtain a role-based digital signature certificate](#step-3-obtain-a-digital-autopen-certificate) from a PKI Shared Service Provider. 

Send any process questions or concerns to [icam@gsa.gov](mailto:icam@gsa.gov).

## Step 1. Define the Agency Process

This section is written for executive staff to understand an overall digital autopen process. An agency owns the process for identifying authorized individuals and delegating authority to others. This playbook builds on the assumption that agencies have a defined process for Federal Register documents, which should be updated to include the extra steps and guidance to leverage a digital autopen. At the end of this step, agency executive staff will have the following deliverables. 

1. A delegation of authority through an agency policy.
2. A digital autopen standard operating procedure.
3. Signed user agreements from the Authorizing Sponsor and Digital Autopen Recipient.
4. Senior security official approval.

### Delegate Authority Through An Agency Policy

An agency has the authority and should have an existing process to delegate specific agency activity. An agency should follow its existing delegation process to delegate digitally signing Federal Register documents. This paper will not outline how to create a delegation process. Agencies should involve their General Counsel’s Office for advice and recommendations on the agency’s authority and delegation process. 

### Develop a Standard Operating Procedure

An agency must define the delegation process, including maintaining, auditing, and measuring the process through a standard operating procedure. Collaborate in the early stages of development with your technology and security officials to create an agreeable process within the agency's risk appetite. The rules or Standard Operating Procedure should include the following elements.

1. An agency policy that delegates the Federal Register signing authority to leverage a digital autopen.
2. A process to receive delegation approval and affix a digital autopen signature to a document. See [Appendix C](#appendix-c-templates) for an example of a decision document.
3. A process to obtain a role-based certificate. Required and optional controls are in [Step 2](#step-2-define-controls).

See [Appendix C](#appendix-c-templates) for sample templates including standard operating procedures.

### User Agreement
A user must understand their responsibilities and the requirements to use and protect a digital autopen certificate. See the [Appendix C](#appendix-c-templates) for an example of a user agreement. An agency may define additional annual training or refresher requirements. The user signs the agreement to obtain a certificate.

### Issuance Request

The final step involves an agency defining the issuance request procedures. The issuance document is signed by the agency's senior security official such as the Chief Security Officer or Chief Information Security Office. As part of the issuance, the requesting office may submit the following verification documents:

1. An agency policy delegating signing authority to an office or a designated individual.
2. The requesting office document identifies the digital autopen recipient.
3. The current version of a digital autopen standard operating procedure.
4. Verify this request doesn't exceed the maximum number of allowed delegates.
5. A signed user agreement.

The agency senior security official or designate verifies the request with supporting documentation and approves or disapproves as appropriate.  Once the request is approved, the agency stores the evidence for audit or review purposes and submits the required information to their certificate issuer. See [Appendix C](#appendix-c-templates) for an issuance request example.

## Step 2. Define Controls

This section is written for security and risk managers to identify specific controls to mitigate digital autopen unintended use risks. An agency should define and implement controls to ensure the digital autopen certificate is only used for its intended purpose. Controls may include a combination of physical or logical controls to limit how or when a digital autopen certificate is used. Agencies should integrate these controls into an existing audit process. Agencies must adopt the following required administrative and certificate controls.

### Required Administrative Controls

1. Review the digital autopen standard operating procedures annually, or more frequently ([Template](#appendix-c-templates)).
2. Before digital autopen issuance, verify the authorizing sponsor and each digital autopen recipient have a valid PIV card.
3. The digital autopen recipient must be a federal employee.
4. The digital autopen recipient must sign a user agreement ([Template](#appendix-c-templates)).
5. The authorizing sponsor must separately authorize each use of the digital autopen signature, and the digital autopen recipient must keep a record of each approval ([Template](#appendix-c-templates)).

### Required Certificate Controls

1. A digital autopen certificate is never issued on a PIV card.
2. Issue a digital autopen certificate to a hardware device such as a smart card on GSA’s FIPS 201 Evaluation Program Approved Product List or a FIPS-140 Level 2 certified authenticator or security module.
3. If the digital autopen certificate is issued to a smart card:
   1. It shall be visually distinct from a PIV card.
   2. It shall not have a photo.
   3. It shall have the words “digital autopen” or similar to identify the card uniquely.
4. Maximum of two digital autopen recipients to one authorizing sponsor.
5. Authentication of the authorizing sponsor and digital autopen recipient is performed using their PIV cards.
6. The common name in the certificate must state the role of authorizing official such as “Secretary of Homeland Security” or “Secretary Name - Secretary of Homeland Security.”
7. The validity period of the digital autopen certificate must:
    1. not exceed twelve months or
    2. be set to the associated expiration date of the digital autopen recipient's PIV card if less than twelve months remains until expiration.
8. After issuance, the authorizing sponsor is notified of digital autopen certificate issuance via email or other means of communication.

Due to unique agency risks, the working group identifies the below optional controls for additional consideration. Consider remote work and exigent circumstances before applying a physical location control. For example, limiting use to during working hours will hinder agency signing operations during off hours when the Authorizing Sponsor is not available to digitally sign.

### Optional Controls

1. Develop an automated approval workflow as an automated and auditable mechanism to record when a delegation is given.

## Step 3. Obtain a Digital Autopen Certificate

A digital autopen certificate is available from any Federal PKI Shared Service Provider. [Federal Agency Legacy PKI]({{site.baseurl}}/university/fpki/){:target="_blank"}{:rel="noopener noreferrer"} may also issue this certificate for their agency. An agency must request a **ROLE-BASED SIGNATURE CERTIFICATE**. Check with your Homeland Security Presidential Directive-12 Security Office or PIV card issuer if they can issue a role-based certificate. Federal PKI Shared Service Providers are listed as government identity providers on [idmanagement.gov]({{site.baseurl}}/trust-services/#government-identity-services){:target="_blank"}{:rel="noopener noreferrer"}. They provide Federal PKI certificates and PIV services.

While OFR accepts any Federal PKI digital signature certificate, this playbook recommends a hardware-based certificate issued to a FIPS-140 Level 2 certified hardware device such as a visually distinct, approved smart card or USB device such as a FIDO authenticator. Below are examples of the Common Name used in digital autopen certificates.

Table 01. Example Common Name in Role-Based Certificate

| Position | Common Name Example | Note |
| -------- | ------------------- | ---- |
| Secretary | CN: Secretary of DHS Jane Smith | Exclusive to the Secretary Role. |
| Commissioner | CN: Commissioner FDA John Smith | Exclusive to the Commissioner Role. |
| Administrator | CN: Administrator NASA Jane Smith | Exclusive to the Administrator Role. |
| Director | CN: Director ATF Jane Smith | Exclusive to the Director Role. |

## Summary

This paper outlines a process for an agency to create and leverage a digital autopen for Federal Register documents. An agency must define its approach in a policy, identify a solution, and then obtain a certificate. This paper recommends an agency use a hardware-based certificate for added security and control. This paper also includes policy recommendations for suggested updates to the OFR Document Drafting Handbook, Federal PKI Certificate Policy, FICAM playbooks, and the CIO Council E-Signature Document.

## Appendix A. References

1. [Office of the Federal Register's Document Drafting Handbook](https://www.archives.gov/files/federal-register/write/handbook/ddh.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
2. [Federal CIO Council & Federal Public Key Infrastructure Policy Authority (FPKIPA) - Use of Electronic Signatures in Federal Organization Transactions](https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1151/2016/10/Use_of_ESignatures_in_Federal_Agency_Transactions_v1-0_20130125.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
3. [FICAM Playbook - How to Digitally Sign an Office of the Federal Register Document]({{site.baseurl}}/playbooks/signfedregister/){:target="_blank"}{:rel="noopener noreferrer"}
4. [X.509 Certificate Policy for the U.S. Federal PKI Common Policy Framework]({{site.baseurl}}/docs/fpki-x509-cert-policy-common.pdf){:target="_blank"}{:rel="noopener noreferrer"}

## Appendix B. Policy Recommendations

The Delegated Digital Signature Working Group identified policy update recommendations to streamline signature processes.

### Recommendation 1. Update OFR's Document Drafting Handbook

Recommendation: Update the Document Drafting Handbook consistent with this paper to clarify guidance on digital autopen signatures.
Resolution: Pending final digital autopen paper.

### Recommendation 2. Update Federal PKI Certificate Policy for Digital Autopen

Recommendation: Update the Federal Common Policy Certificate Policy for specific procedures to issue a digital autopen certificate. 
Resolution: The Federal PKI Policy Authority identified existing procedures for role-based certificates are sufficient.

### Recommendation 3. Update FICAM Playbook on Digitally Signing an OFR Document

Recommendation: Update the [FICAM Playbook - How to Digitally Sign an Office of the Federal Register Document]({{site.baseurl}}/playbooks/signfedregister/){:target="_blank"}{:rel="noopener noreferrer"} in line with this paper.
Resolution: Pending final digital autopen paper.

### Recommendation 4. Update the Federal CIO E-Signature Document

Recommendation: Update the [Federal CIO E-signature document](https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1151/2016/10/Use_of_ESignatures_in_Federal_Agency_Transactions_v1-0_20130125.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} to reference this paper.
Resolution: Pending final digital autopen paper.

## Appendix C. Templates

1. [Standard Operating Procedure]({{site.baseurl}}/docs/autopen-template-sop.docx){:target="_blank"}{:rel="noopener noreferrer"} (MS Word, March 2023)
2. [User Agreement]({{site.baseurl}}/docs/autopen-template-user-agreement.docx){:target="_blank"}{:rel="noopener noreferrer"} (MS Word, March 2023)
3. [Issuance Request]({{site.baseurl}}/docs/autopen-template-issuance-request.docx){:target="_blank"}{:rel="noopener noreferrer"} (MS Word, March 2023)
4. [Decision Document]({{site.baseurl}}/docs/autopen-template-decision-document.docx){:target="_blank"}{:rel="noopener noreferrer"} (MS Word, March 2023)
