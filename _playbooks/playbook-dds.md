---
layout: page
collection: playbooks
title: Delegated Digital Signature Playbook 
pubdate: 2023-03
type: Markdown
permalink: /playbooks/dds/
description: This playbook outlines the process for an agency to implement a Delegated Digital Signature Playbook.
sidenav: playbooks
sticky_sidenav: true

version: 2.1
pubdate: March 27, 2026

subnav:
  - text: Executive Summary
    href: '#executive-summary'
  - text: The Delegated Digital Signature
    href: '#the-delegated-digital-signature'
  - text: Step 1. Define the Agency Process
    href: '#step-1-define-the-agency-process'
  - text: Step 2. Define Controls
    href: '#step-2-define-controls'
  - text: Step 3. Obtain a Delegated Digital Signature Certificate
    href: '#step-3-obtain-a-delegated-digital-signature-certificate'
  - text: Summary
    href: '#summary'
  - text: Appendix A. References
    href: '#appendix-a-references'
  - text: Appendix B. Policy Recommendations
    href: '#appendix-b-policy-recommendations'
  - text: Appendix C. Templates
    href: '#appendix-c-templates'
---

<!-- Version 2.1  
March 27, 2026 -->

The Delegated Digital Signature Working Group of the Federal Chief Information
Security Officer Council Identity, Credential, and Access Management Subcommittee
developed this playbook to outline the process for a federal agency to implement a
digital autopen-like capability for Federal Register documents.

Version 2.0 of this playbook was developed by Federal PKI Policy Authority support
based on modifications to the [X.509 Certificate Policy for the U.S. Federal PKI
Common Policy Framework](/docs/fpki-x509-cert-policy-common.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link"}, specifically starting with [Version 2.9](/docs/archived/fpki-x509-cert-policy-common-29.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link"} supporting the use
case of role-based digital delegated signatures for OFR submissions.

<img src="{{site.baseurl}}/assets/logo/logo-gsa.png" width="64" height='64' align="left" alt="U.S. General Services Administration Logo">
<img src="{{site.baseurl}}/assets/logo/logo-cio-round.png" width="64" height='64' align="left" alt="U.S. Federal Chief Information Officer Council Logo">
<br><br><br>

<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="v-a1">
      Date: {{page.pubdate}} - Version: {{page.version}}
    </button>
  </h4>
  <div id="v-a1" class="usa-accordion__content usa-prose">
    <table>
      <caption>Delegated Digital Signature version table</caption>
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
          2.1
        </th>
        <td>03/27/2026</td>
        <td>Update to align to FPKI policy updates (Common v2.12)</td>
      </tr>
      <tr>
        <th scope='row'>
          2.0
        </th>
        <td>03/15/2025</td>
        <td>Update to align to FPKI policy/certificate profile changes and align terminology</td>
      </tr>
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

{% include alert-warning.html content="**Note** - v2.0 generated a title change, the previous playbook was referred to as the \"Digital Autopen Playbook\", the update to \"Delegated Digital Signature\" aligns with Federal PKI and CIO Council terminology for the use case." %}

## Executive Summary

This playbook outlines the process for an agency to implement a Delegated Digital Signature capability in support of Federal Register document submissions. Federal regulatory agencies issue regulations based on laws enacted by Congress or an executive power. Those regulations may be digitally signed and submitted electronically to the Office of the Federal Register (OFR) for review and subsequent publication. OFR requires all documents submitted for publication to be signed by an official who is uniquely authorized to act for the agency. When an official is unavailable or unable to sign a document, they may authorize another agency employee to use a delegated digital signature certificate to affix an authorized submitting official’s digital signature to the document. This playbook assumes that the agency has existing rules governing the delegation of authority and builds upon such rules to outline a three-step process to create a delegated digital signature to sign a Federal Register document.

1. [Define the agency process](#step-1-define-the-agency-process){:class="usa-link"} to delegate the authority for signing Federal
Register documents.
2. [Define controls](#step-2-define-controls){:class="usa-link"} to ensure the certificate and associated private key are used
only for the intended purpose 
3. [Obtain a role-based delegated digital signature certificate](#step-3-obtain-a-delegated-digital-signature-certificate){:class="usa-link"} from a Federal
Public Key Infrastructure (PKI) Shared Service Provider or other approved
Federal PKI issuer.
 
{% include alert-info.html content="Although Federal PKI is traditionally used only to
facilitate authentication transactions based on a legitimate identity, the delegated
digital signature use case is the **only** FPKI-approved scenario where authorization from one individual can be leveraged by a different person who controls the private signature key. As a result, security of the signing key and the supporting issuance process is of critical importance provided this new and unique PKI issuance model, based on the need to convey authorization as opposed to providing non-repudation
of the signer." %}

This playbook recommends using a role-based delegated digital signature certificate
issued to a hardware device (e.g., smart card, USB hardware device, or other
FIPS–140 Level 2 certified hardware) from a [Federal PKI Certification Authority.
Federal Agency Certification Authorities]({{site.baseurl}}/trust-services/#government-identity-services){:rel="noopener noreferrer"}{:class="usa-link"} may also be configured to issue these
delegated digital signature certificates from their own managed Certification
Authorities (CAs) that assert the id-fpki-common-hardware certificate
policy object identifier defined by the Federal Common Policy CA. The delegated
digital signature certificates can only be used to digitally sign documents, these
certificate types are specifically prohibited from asserting client authentication
enhanced key usages by policy and are not appropriate for logical or physical access. An agency should consider additional
controls to limit its use to **only**  sign _Federal Register_ documents. This playbook
supports [OMB Circular A-130 goals](https://obamawhitehouse.archives.gov/sites/default/files/omb/assets/OMB/circulars/a130/a130revised.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, including developing and implementing
processes to support employee digital signatures, though individually issued PIV is always the preferred method for applying legitimate digital signatures with legally binding non-repudation.

Send any questions on the process to [icam@gsa.gov](mailto:icam@gsa.gov){:class="usa-link"}, and certificate
implementation questions should be sent to [fpki@gsa.gov](mailto:fpki@gsa.gov){:class="usa-link"}.

### Key Terms
- Authorizing sponsor – An individual other than the role holder or private key holder that can attest to the need to issue a delegated signature certificate under the authority of the role holder in support of a documented business practice (e.g., the chief of staff, legal counsel, etc, for the role holder) .

- Delegated digital signature - A cryptographic digital signature generated using control over a private asymmetric key and associated with a public certificate that conveys the authority of the identified authorizing sponsor.

- Delegated digital signature certificate - A Federal PKI role-based digital signature certificate, asserting the identity of the authorizing sponsor, but issued to a delegated signer on a hardware security module, used to sign Federal Register documents when approved by the authorizing sponsor.

- Delegated digital signature certificate recipient - The person identified by the authorizing sponsor to use the private key associated with the delegated digital signature certificate to affix the authorizing sponsor’s signature to a Federal Register document; the delegated digital signature certificate recipient is referred to as the “private key holder” in the context of the Federal PKI certificate policy.

- Federal PKI - A set of policies, processes, and information technology systems (to include Certification Authorities (CAs)) used for the purpose of creating, maintaining and revoking certificates and public-private key pairs. A PKI certificate is considered trusted based on the security requirements of the systems, the adherence to the agreed upon set of issuance procedures for asserting a claimed set of identity attributes in the public certificate, and protection of the associated private key. For more information on the Federal PKI contact [fpki@gsa.gov](mailto:fpki@gsa.gov){:class="usa-link"}.

- _Federal Register_ document - A document drafted for the express purpose of
publication in the Federal Register.

- Office of the Federal Register (OFR) - The agency responsible for publishing
the Federal Register.

- Role Holder - The federal official authorized to sign Federal Register documents, and whose name appears in the subject field of a delegated digital signature certificate; Federal PKI certificate policy also referred to this individual as the “role-holder.” This individual is ultimately responsible for all documents that carry a digital signature that asserts their name.

### Disclaimer

The Delegated Digital Signature Working Group of the Federal Chief Information Security Officer Council ICAM Subcommittee developed v1.0 of this Playbook. U.S. Federal Executive Branch agencies can use this Playbook to supplement existing electronic signature policy and implement specific procedures to create a delegated digital signature certificate to sign Federal Register documents. This Playbook is not official policy, mandated action, or provides authoritative information technology terms. It includes best practices to supplement existing federal policies and builds upon Office of Management and Budget Memorandum 19-17, A-130, and existing FICAM guidance and playbooks. Subject areas with intersecting scopes, such as delegations of authority, certificate issuance procedures, and internal controls are considered only to the extent that they relate to a delegated digital signatures.

### Acknowledgments

This playbook reflects the contributions of the Delegated Digital Signature Working Group of the Federal Chief Information Security Officer Council Identity, Credential, and Access Management Subcommittee. The working group was co-chaired by the Internal Revenue Service and the General Services Administration. Contributing members include:

- Department of Agriculture
- Department of Health and Human Services
- Department of Homeland Security
- Department of State
- Department of Veterans Affairs
- General Services Administration
- Government Printing Office
- Internal Revenue Service
- National Archives and Records Administration

[Appendix B](#appendix-b-policy-recommendations){:class="usa-link"} includes recommended policy and guidance updates identified by the working group. Many of these recommendations have been addressed since the release of v1.0 of this playbook.

## The Delegated Digital Signature

Federal agencies must publish documents in the Federal Register for various reasons. Only federal employees assigned to designated roles or with the proper authority may sign those documents. This authority is referred to as the Role Holder in this document. When that Role Holder is unavailable, they may authorize the use of a delegated digital signature to affix their signature to a Federal Register document. Multiple reasons exist as to why a Role Holder may be unavailable.

1. No access to technology that can leverage a PIV card or digital signature
certificate.
2. Travel situations outside of normal working hours that require Federal
Register submission.
3. Efficiency when multiple documents must be signed.

The OFR outlines their signing requirements in the [Document Drafting Handbook](https://www.archives.gov/files/federal-register/write/handbook/ddh.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}.

There are three main requirements.

1. The signer must be a federal employee with the authority to act for an agency.
Laws or Executive Orders define which agency is the regulatory body, while an
agency determines who has the authority to sign Federal Register documents.
2. The title in the signature block must be related to the authority to sign the
document. It cannot include honorary titles or titles associated with a
different agency role.
3. The document signature block must match the signer’s full name as it
appears in the digital signature certificate subject name. See the OFR
Document Drafting Handbook for accepted variations. The Personal Identity
Verification (PIV) card is a primary means for digitally signing a document.

{% include alert-info.html content="Note - most common applications that leverage digital signatures, display the common name element which is a component of the complete subject distinguished name contained in a digital signature certificate." %}

An agency may delegate the authority to digitally sign a document to someone with an official executive agency billet to sign a document, such as a Deputy Secretary or General Counsel. An agency role holder may delegate a signatory authority to an appropriately named individual in a Federal Register document (see Figure 1).

<div style="text-align:center">
  <img src="{{site.baseurl}}/assets/playbooks/autopen-1-nameddelegation.png" alt="An example of a named delegation in a Federal Register document." title="Figure 1. Named Delegation Example">
  <br>
  <strong>Figure 1. Named Delegation Example</strong>
</div>

However, in some circumstances, only the federal executive has the authority to sign a Federal Register document. The Office of the Federal Register and the submitting agency may face various legal challenges if a document is not signed by the proper authority. This paper proposes an alternative option when the Role Holder completes an official agency delegation of authority process to authorize the use of a delegated digital signature certificate. A Federal PKI role-based delegated digital signature certificate is a technological solution that can facilitate this delegation of signatory authority. This option is the proposed solution and the focus for the remainder of this paper.

A digital signature is a cryptographically secured form of electronic signature. An
agency achieves the cryptographic component by applying a private signature key to
hashed digital data that recipients can verify with a PKI certificate that contains an
associated public key. For more information on the difference between electronic
and digital signatures, see the [Federal CIO Council guidance on the Use of Electronic
Signatures in Federal Organization Transactions](https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1151/2016/10/Use_of_ESignatures_in_Federal_Agency_Transactions_v1-0_20130125.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. An agency can request a
role-based delegated digital signature certificate from a Federal PKI Shared Service
Provider or other approved Federal issuer. Like a PIV card, a delegated digital
signature hardware token is issued to a single person, referred to as the delegated digital signature certificate recipient, and must not be shared under any
circumstance.

This playbook outlines the process for federal agencies to create a process for
authorizing and requesting issuance of a delegated digital signature certificate for
the purpose of submitting official documents to the Federal Register. It outlines
controls around the delegated digital signature certificate to meet the OFR’s digital
signature requirements for Federal Register documents and federal cybersecurity.
For instructions on digitally signing a Federal Register document, see the [FICAM
Playbook Digitally Sign an Office of the Federal Register Document]({{site.baseurl}}/playbooks/signfedregister/){:rel="noopener noreferrer"}{:class="usa-link"}.

An agency may implement or update a process by following these three playbook
steps.

1. [Define the agency process](#step-1-define-the-agency-process){:class="usa-link"} to delegate signing Federal Register documents.
2. [Define controls](#step-2-define-controls){:class="usa-link"} to ensure the certificate and associated key are used only for the intended purpose.
3. [Obtain a role-based digital signature certificate](#step-3-obtain-a-digital-autopen-certificate){:class="usa-link"} from a PKI Shared Service
Provider.

Send any process questions or concerns to [icam@gsa.gov](mailto:icam@gsa.gov){:class="usa-link"}, and certificate implementation questions should also be sent to [fpki@gsa.gov](mailto:fpki@gsa.gov){:class="usa-link"}.

## Step 1. Define the Agency Process

This section is written for executive staff to understand an overall delegated digital signature process. An agency owns the process for identifying authorized individuals and delegating authority to others not directly assigned or appointed to that role. This playbook builds on the assumption that agencies have a defined process for Federal Register documents, which should be updated to include the extra steps and guidance to leverage a delegated digital signature certificate. At the end of this step, agency executive staff will have the following artifacts.

1. A delegation of authority through an agency policy.
2. A delegated digital signature standard operating procedure.
3. Signed user agreements from the Authorizing Sponsor and Delegated Digital
Signature Certificate Recipient.
4. Senior security official approval.

### Delegate Authority Through An Agency Policy

An agency has the authority and should have an existing process to delegate specific agency activities. An agency should follow its existing delegation process to delegate signing Federal Register documents. This paper will not outline how to create a delegation process. Agencies should involve their General Counsel’s Office for advice and recommendations on the agency’s authority and delegation process.

### Develop a Standard Operating Procedure

An agency must define and document the delegation process, including maintaining, auditing, and measuring the process through a standard operating procedure. Collaborate in the early stages of development with your technology and security officials to create an agreeable process within the agency’s risk appetite. The rules or Standard Operating Procedure should include the following elements.

1. An agency policy that delegates the Federal Register signing authority to
leverage a delegated digital signature certificate.
2. A process to receive delegation approval and affix a delegated digital
signature to a document. See [Appendix C](#appendix-c-templates){:class="usa-link"} for an example of a decision
document.
3. A process to request and obtain a role-based delegated digital signature
certificate. Mandatory and optional controls are in [Step 2](#step-2-define-controls){:class="usa-link"}.

See [Appendix C](#appendix-c-templates){:class="usa-link"} for sample artifact templates including standard operating procedures.

### Agency User Agreement

A user authorized to sign a Federal Register document conveying the authority of the
sponsor must understand their responsibilities and the requirements to use and
protect a delegated digital signature certificate. See the [Appendix C](#appendix-c-templates){:class="usa-link"} for an example
of a user agreement. An agency may define additional annual training or refresher
requirements to ensure the protection of the individually issued private key. The user
must sign an agreement to obtain a delegated digital signature certificate.

{% include alert-info.html content="Your PKI issuer may have a separate delegated digital signature certificate user agreement form that conveys the PKI-related security stipulations the certificate recipient may be required to sign before issuance. This form is distinct from an agency level user agreement." %}

### Issuance Request

The final step involves an agency defining the issuance request procedures. The issuance request procedure document is signed by the agency’s senior security official such as the Chief Security Officer or Chief Information Security Office. As part of the delegated digital signature certificate issuance request, the requesting office may submit the following verification documents:

1. An official agency artifact conveying the delegation of signatory authority of
the authorizing sponsor to an office or a designated individual.
2. The requesting office document that individually identifies the intended
recipient of the delegated digital signature certificate/key.
3. The current version of a delegated digital signature standard operating
procedure.
4. Verify this request does not exceed the maximum number of allowed
delegates, as defined by the agency.
5. A signed agency user agreement.

The agency senior security official or designee verifies the request with supporting
documentation and approves or disapproves the request, as appropriate. Once the
request is approved, the agency submits the required information to their certificate
issuer or Registration Authority (RA) and stores the evidence for audit or review
purposes. See [Appendix C](#appendix-c-templates){:class="usa-link"} for an issuance request example.

## Step 2. Define Controls

This section is written for security and risk managers to identify specific controls to mitigate risks associated with misissuance or misuse of delegated digital signature certificates. An agency should define and implement controls to ensure the delegated digital signature certificate is only issued after appropriate authorization and authentications of all parties and that it is only used for its intended purpose. Controls may include a combination of physical or logical controls to limit how or when a delegated digital signature certificate is accessed and the private key activated to support approved signing uses. Agencies should integrate these controls into an existing audit process. Agencies must adopt the following required administrative controls and may inherit several certificate controls.

### Required Administrative Controls

1. Review the delegated digital signature standard operating procedures annually, or more
frequently ([Template](#appendix-c-templates){:class="usa-link"}).
2. Before delegated digital signature certificate issuance, verify the Role Holder or their Authorizing Sponsor and each delegated digital signature certificate recipient has a valid PIV card through an auditable authentication or signing event.
3. The delegated digital signature certificate recipient must be a federal employee.
4. The delegated digital siganture certificate recipient must sign an agency user agreement ([Template](#appendix-c-templates){:class="usa-link"}).
5. The Role Holder or their Authorizing Sponsor must separately authorize each application of the delegated digital signature, and the delegated digital signature certificate recipient must keep a record of each approval ([Template](#appendix-c-templates){:class="usa-link"}).
6. Maximum of two delegated digital siganture certificate recipients to one Role Holder which
shall be enforced by the requesting agency.

### Required Certificate and Token Controls

Please note that many of these controls will be inherited based on the CA and Card
Management System (CMS) configurations, and may not be customizable by the
agency requesting the delegated digital signature certificate.

1. A delegated digital signature certificate and private key are never issued on a pre-existing individually assigned and personalized PIV card.
2. Issue a delegated digital certificate to an authorized hardware device such as a smart card on GSA’s FIPS 201 Evaluation Program Approved Product List or a FIPS-140 Level 2 certified security module.
3. If the delegated digital signature certificate is issued on a smart card form
factor, the physically printed topography of the card:
    1. must be visually distinct from a PIV card.
    2. must not have a printed photo, or other personally identifiable
  information (e.g., authorizing sponsor or recipient’s name, title or role).
    3. may contain printed information that identifies the card holder such as
  its requesting office or user.
4. Authentication of the Role Holder or their Authorizing Sponsor as well as the delegated digital signature certificate recipient is performed using their PIV cards, such as a signed object, such as a user agreement or authorization memo, leveraging their PIV signature certificate(s).
5. The common name in the certificate must state the role of Role Holder such as “Secretary of Homeland Security” or “[Secretary Name] - Secretary of Homeland Security”, and be suffixed with a certificate purpose such as “(OFR).” Note that OFR signature block requirements include the authorizing sponsor’s name to align with the document signature block.
  1. Example - CN=Secretary of the Treasury, Alexander Hamilton (OFR)
6. The Subject Alternative Name (SAN) of the delegated digital signature certificate must include a unique identifier for the recipient of the delegated digital signature certificate (e.g., RFC822 email, UPN, or another internal identifier such as an EDIPI).
7. The validity period of the delegated digital signature certificate must:
    1. not exceed 36 months or
    2. be set to the associated expiration date of the recipient’s PIV authentication certificate.
8. The Enhanced Key Usage (EKU) field is recommended to assert document signing or email protection, but must not contain client authentication related usages, nor separate authentication certificates.
9. The delegated digital signature certificate recipient must be the individual that generates the PIN which makes the private key available for signature functions.

Due to unique agency risks, the working group identifies the below optional controls for additional consideration. Consider remote work and exigent circumstances before applying a physical location control. For example, limiting use to during working hours will hinder agency signing operations during off hours when the Role Holder is not available to digitally sign.

### Optional Controls

1. Develop an automated approval workflow as an automated and auditable
mechanism to record when a delegation is given.
2. If feasible, multi-person physical access controls for storage of a delegated
digital signature certificate when not in use, and a log of when it is accessed
and re-secured.

## Step 3. Obtain a Delegated Digital Signature Certificate

A delegated digital signature certificate may be issued from any Federal PKI Shared Service Provider, though some may need to update their Certificate Practices Statements (CPSs) and certificate templates based on newer versions of certificate policy and profiles. Federal Agency Legacy PKI may also issue this certificate for their agency. An agency must request a ROLE-BASED DELEGATED DIGITAL SIGNATURE CERTIFICATE. Check with your Homeland Security Presidential Directive-12 Security Office or PIV card issuer if they can issue a role-based certificate generally or a delegated digital signature certificate specifically. Federal PKI Shared Service Providers are listed as government identity providers on idmanagement.gov. They provide Federal PIV services and other PKI certificate types as approved by the FPKI Policy Authority (FPKIPA).
While OFR accepts any Federal PKI digital signature certificate that chains up to the Federal Common Policy CA G2, this playbook recommends, and FPKI certificate policy requires, hardware-based certificate issued to a FIPS-140 Level 2 certified device such as a visually distinct, approved smart card or USB device such as a FIDO authenticator containing a validated PIV applet. Below are examples of the Common Names used in delegated digital signature certificates.


Table 01. Example Common Name in Role-Based Digital Signature Certificates

| Position | Common Name | Example Note |
|----------|-------------|--------------|
| Secretary | CN: Secretary of DHS Jane Smith (OFR) | Exclusive to the Secretary Role. |
| Commissioner | CN: Commissioner FDA John Smith (OFR) | Exclusive to the Commissioner Role. |
| Administrator | CN: Administrator NASA Jane Smith (OFR) | Exclusive to the Administrator Role. |
| Director | CN: Director ATF Jane Smith (OFR) | Exclusive to the Director Role. |

{% include alert-info.html content="If your PKI SSP does not currently provide delegated digital signature certificates, you will need to coordinate with them to build an appropriate CA certificate template based on the [Common Certificate Profiles Worksheet 18](https://www.idmanagement.gov/docs/fpki-x509-cert-profile-common.pdf#page=43){:target=\"_blank\"}{:rel=\"noopener noreferrer\"}{:class=\"usa-link\"}, and also potentially work with your RA or Card Management System administrators to create templates for these new delegated digital signature certificate hardware credentials." %}

## Summary

This paper outlines a process for an agency to create and leverage a delegated digital signature certificate for authorized signatures on Federal Register documents. An agency must define its approach in a policy, identify agency level security controls, and finally request and obtain a hardware based PKI certificate. This paper also includes policy recommendations for suggested updates to the OFR Document Drafting Handbook, Federal PKI Certificate Policy, FICAM playbooks, and the CIO Council E-Signature Document.

## Appendix A. References

1. [Office of the Federal Register’s Document Drafting Handbook](https://www.archives.gov/files/federal-register/write/handbook/ddh.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
2. [Federal CIO Council & Federal Public Key Infrastructure Policy Authority
(FPKIPA) - Use of Electronic Signatures in Federal Organization Transactions](https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1151/2016/10/Use_of_ESignatures_in_Federal_Agency_Transactions_v1-0_20130125.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
3. [FICAM Playbook - How to Digitally Sign an Office of the Federal Register Document]({{site.baseurl}}/playbooks/signfedregister/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link"}
4. [X.509 Certificate Policy for the U.S. Federal PKI Common Policy Framework]({{site.baseurl}}/docs/fpki-x509-cert-policy-common.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link"}


## Appendix B. Policy Recommendations

The Delegated Digital Signature Working Group identified policy update recommendations to streamline signature processes.

### Recommendation 1. Update OFR’s Document Drafting Handbook

**Recommendation:** Update the Document Drafting Handbook consistent with this paper to clarify guidance on delegated digital signatures.

**Resolution:** Pending final delegated digital signature certificates paper.

### Recommendation 2. Update Federal PKI Certificate Policy for Delegated Digital Signature Certificates

**Recommendation:** Update the Federal Common Policy Certificate Policy for specific
procedures to issue a delegated digital signature certificate.

**Resolution:** The Federal PKI Policy Authority identified existing procedures for role-based certificates are sufficient; however, due to the potential confusion by relying parties consuming digital signature certificates, a Policy update was conducted in Version 2.9 and 2.12 to ensure appropriate certificate naming and profiles were developed to clarify the use case

### Recommendation 3. Update FICAM Playbook on Digitally Signing an OFR Document

**Recommendation:** Update the [FICAM Playbook - How to Digitally Sign an Office of
the Federal Register Document]({{site.baseurl}}/playbooks/signfedregister/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link"} in line with this paper. 

**Resolution:** Pending final delegated digital signature paper.

### Recommendation 4. Update the Federal CIO E-Signature Document

**Recommendation:** Update the Federal CIO E-signature document to reference this
paper. 

**Resolution:** Pending final delegated digital signature paper.

## Appendix C. Templates

1. [Standard Operating Procedure]({{site.baseurl}}/docs/autopen-template-sop.docx){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link"} (MS Word, March 2023)
2. [User Agreement]({{site.baseurl}}/docs/autopen-template-user-agreement.docx){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link"} (MS Word, March 2023)
3. [Issuance Request]({{site.baseurl}}/docs/autopen-template-issuance-request.docx){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link"} (MS Word, March 2023)
4. [Decision Document]({{site.baseurl}}/docs/autopen-template-decision-document.docx){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link"} (MS Word, March 2023)
