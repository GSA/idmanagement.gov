---
layout: page
collection: implement
title: Federal Identity, Credential, and Access Management Sub Committee
permalink: /implement/mapping-of-sp800-53-ia-to-sp-800-63/
sticky_sidenav: true
sidenav: implement
pubdate: July 7, 2026
version: 2.0
---

**Security Controls Mapping of Special Publication 800-53 Revision 5, Identification and Authentication (IA), against Special Publication 800-63**

**Revision History**
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="v-a1">
      Date: {{page.pubdate}} - Version: {{page.version}}
    </button>
  </h4>
  <div id="v-a1" class="usa-accordion__content usa-prose">
    <table>
      <caption>Security Controls Mapping of Special Publication 800-53 Revision 5</caption>
      <thead>
        <tr>
          <th scope="col">Document Version</th>
          <th scope="col">Document Date</th>
          <th scope="col">Revision Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">2.0</th>
          <td>07/07/2026</td>
          <td>
            Updated mapping of NIST SP 800-53 Revision 5 Identification and Authentication controls
            to NIST SP 800-63 Draft Version 4 guidance. Added separate normative and informative
            mapping columns and updated executive summary and conclusion language.
          </td>
        </tr>
        <tr>
          <th scope="row">1.0</th>
          <td>04/24/2024</td>
          <td>Initial Mapping of IA Controls</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

# Mapping of NIST SP 800-53 Revision 5 Identification and Authentication Controls to NIST SP 800-63 Draft Version 4

## Executive Summary

GSA Federal ICAM has mapped NIST Special Publication SP 800-53 Revision 5 controls to the NIST SP 800-63 (Draft Version 4) suite of documents, *Digital Identity Guidelines*. The mapping gives organizations a general indication of security and privacy control coverage concerning NIST SP 800-63 guidance. Accordingly, the mapping will help organizations better comply with certain NIST SP 800-53 controls by meeting NIST SP 800-63 digital identity assurance level guidance.

NIST SP 800-53 provides a catalog of security and privacy controls for information systems and organizations to protect organizational operations and assets, individuals, other organizations, and the Nation from a diverse set of threats and risks, including hostile attacks, human errors, natural disasters, structural failures, foreign intelligence entities, and privacy risks. The controls are flexible, customizable, and implemented as part of an organization-wide process to manage risk. The controls address diverse requirements derived from mission and business needs, laws, executive orders, directives, regulations, policies, standards, and guidelines. The use of these controls is mandatory for federal information systems in accordance with Office of Management and Budget (OMB) Circular A-130 [OMB A-130] and the provisions of the Federal Information Security Modernization Act (FISMA), which requires the implementation of minimum controls to protect federal information and information systems.

NIST SP 800-63 guidelines lay out a model for federal programs and other organizations to assess and manage risks associated with digital identity systems, including the processes, policies, data, people, and technologies that support digital identity management. The model is supported by a series of processes: identity proofing, authentication, and federation. The identity proofing process establishes that a subject is a specific physical person. The digital authentication process determines the validity of one or more authenticators to claim a digital identity. It establishes confidence that a subject attempting to access a digital service: (1) is in control of the technologies being used for authentication and (2) is the same subject that previously accessed the service. Finally, the federation process allows shared identity information to support system authentication.

NIST SP 800-63 also instructs credential service providers (CSPs), verifiers, and relying parties (RPs). It describes organizations' risk management processes for implementing digital identity services and supplementing the *NIST Risk Management Framework* and its special component publications.

NIST SP 800-63 guidelines focus on organizational services interacting with external users, such as citizens accessing public benefits or private sector partners accessing collaboration spaces. However, it also applies to federal systems accessed by employees and contractors.

## Table 1 – Mapping of NIST 800-53 R5 Controls to NIST 800-63 Draft Version 4 Guidance

| Control | NIST SP 800-53 R5 Control | NIST SP 800-63 Draft Version 4 Normative | NIST SP 800-63 Draft Version 4 Informative |
|---|---|---|---|
| IA-1 | a. Develop, document, and disseminate to [Assignment: organization-defined personnel or roles]:<br><br>1. [Selection (one or more): Organization-level; Mission/business process-level; System-level] identification and authentication policy that:<br><br>(a) Addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and | 800-63-4 Section 5.5<br><br>800-83C-4 Sections 5, 5.1 and subsections, 5.2 and subsections | 800-63-4 Sections 2.1, 4.1 |
| IA-1 | (b) Is consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines; and | 800-63-4 Sections 5, 5.1.2, 5.2.2.2<br><br>800-63A-4 Sections 4.3.3.2, 4.3.4.4, 5.1.2.1, 5.1.3, 5.1.5, 5.1.8, 5.1.10<br><br>800-63B-4 Sections 4, 4.1.2, 4.1.4, 4.1.5, 4.2.2, 4.2.4, 4.2.5, 4.3.2, 4.3.4, 4.3.5, 4.4, 5.1.1.2, 5.1.2.1, 5.1.3.2, 5.1.4.1, 5.1.5.1, 5.1.7.1, 5.1.9.1, 5.2.3, 5.2.4, 5.2.5, 5.2.7, 5.2.12, 6.1.2.3, 6.4, 7.1<br><br>800-63C-4 Sections 4, 4.1, 4.2, 4.3, 5.2.2, 7.1 | 800-63-4 Section 2.3.1<br><br>800-63A-4 Sections 7, 8.3, 8.6, 9<br><br>800-63B-4 Sections 9.3, 9.4, 10, 10.4, 11<br><br>800-63C-4 Sections 9.1, 10, 11, 12.2, 12.3 |
| IA-1 | 2. Procedures to facilitate the implementation of the identification and authentication policy and the associated identification and authentication controls; | 800-63-4 Section 5 and subsections<br><br>800-63A-4 Sections 5.1.1, 5.1.1.1, 5.1.10 | 800-63A-4 Section 10.3 fourth Description |
| IA-1 | b. Designate an [Assignment: organization-defined official] to manage the development, documentation, and dissemination of the identification and authentication policy and procedures; | No direct mapping. However, see 800-63A-4 Sections 5.1.5, 800-63B-4 4.4, 800-83C-4 5.5 | No direct mapping. However, see 800-63A-4 Section 8.6, 800-63B-4 9.4, 800-63C-4 9.4 for officials to be consulted |
| IA-1 | c. Review and update the current identification and authentication:<br><br>1. Policy [Assignment: organization-defined frequency] and following [Assignment: organization-defined events]; and<br><br>2. Procedures [Assignment: organization-defined frequency] and following [Assignment: organization-defined events]. | No direct mapping. However, see 800-63-4 Sections 5.3.2, 800-63A-4 5.1.1, 5.1.2.1, 5.1.3, 5.1.5, 800-63B-4 6.1.4 |  |
| IA-2 | Uniquely identify and authenticate organizational users and associate that unique identification with processes acting on behalf of those users. | 800-63A-4 Section 4 and subsections, Section 5 and subsections. However, best to read 800-63A-4 in full<br><br>800-63B-4 Sections 4 and subsections and 5 and subsections. However, it is best to read 800-63B-4 in full<br><br>For CSPs that operate identity proofing and enrollment services, see also 800-63A-4 Section 5 and subsections; Section 6.1<br><br>800-63B-4 Sections 4 and subsections; 6.1 and subsections; 6.1.2 and subsections; 6.1.3 | 800-63-4 Section 2.1, 4 and subsections |
| IA-2(1) | Implement multi-factor authentication for access to privileged accounts. | 800-63B-4 Sections 4.1, 4.1.1; 4.2, 4.2.1; 4.3, 4.3.1; 4.4, 4.4.1; 5.1.1; 5.1.3.4; 5.1.5 and subsections; 5.1.8 and subsections; 5.1.9 and subsections; 5.2.3 | 800-63B-4 Sections 10.2.5, 10.2.8, 10.2.9, 10.3 |
| IA-2(2) | Implement multi-factor authentication for access to non-privileged accounts. | 800-63B-4 Sections 4.1, 4.1.1; 4.2, 4.2.1; 4.3, 4.3.1; 4.4, 4.4.1; 5.1.1; 5.1.3.4; 5.1.5 and subsections; 5.1.8 and subsections; 5.1.9 and subsections; 5.2.3 | 800-63B-4 Sections 10.2.5, 10.2.8, 10.2.9, 10.3 |
| IA-2(5) | When shared accounts or authenticators are employed, require users to be individually authenticated before granting access to the shared accounts or resources. | 800-63B-4 Section 4 |  |
| IA-2(6) | Implement multi-factor authentication for [Selection (one or more): local; network; remote] access to [Selection (one or more): privileged accounts; non-privileged accounts] such that: | 800-63B-4 Sections 4.1, 4.1.1; 4.2, 4.2.1; 4.3, 4.3.1; 4.4, 4.4.1; 5.1.1; 5.1.3.4; 5.1.5 and subsections; 5.1.8 and subsections; 5.1.9 and subsections; 5.2.3 | 800-63B-4 Sections 10.2.5, 10.2.8, 10.2.9, 10.3 |
| IA-2(6) | (a) One of the factors is provided by a device separate from the system gaining access; and | 800-63B-4 Sections 4.2, 4.2.1, 4.3, 4.3.1, 5.1.3.4, 5.1.5, 5.1.8, 5.1.9 |  |
| IA-2(6) | (b) The device meets [Assignment: organization-defined strength of mechanism requirements]. | 800-63B-4 Section 4 and subsections, 4.5 |  |
| IA-2(8) | Implement replay-resistant authentication mechanisms for access to [Selection (one or more): privileged accounts; non-privileged accounts]. | 800-63B-4 Sections 4.2.2, 4.3.2, Table 1, 5.1.3.2, 5.1.4.2, 5.1.5.2, 5.2.5, 5.2.8, Table 4 |  |
| IA-2(10) | Provide a single sign-on capability for [Assignment: organization-defined system accounts and services]. | 800-63C-4 |  |
| IA-2(12) | Accept and electronically verify Personal Identity Verification-compliant credentials. | No direct mapping. However, see 800-63B-4 Section 5.1.9.2 |  |
| IA-2(13) | Implement the following out-of-band authentication mechanisms under [Assignment: organization-defined conditions]: [Assignment: organization-defined out-of-band authentication]. | 800-63B-4 Table 1, Section 5.1.3 and subsections<br><br>800-63C-4 Section 6.1.2.2 | 800-63B-4 Table 1, Sections 10.2.3; 11 |
| IA-3 | Uniquely identify and authenticate [Assignment: organization-defined devices and/or types of devices] before establishing a [Selection (one or more): local; remote; network] connection. | Not Applicable – NIST 800-63 scope is limited to identity proofing and authentication of users (such as employees, contractors, or private individuals); devices are out of scope. |  |
| IA-3(1) | Authenticate [Assignment: organization-defined devices and/or types of devices] before establishing [Selection (one or more): local; remote; network] connection using bidirectional authentication that is cryptographically based. | Not Applicable – NIST 800-63 scope is limited to identity proofing and authentication of users (such as employees, contractors, or private individuals); devices are out of scope. |  |
| IA-3(3) | (a) Where addresses are allocated dynamically, standardize dynamic address allocation lease information and the lease duration assigned to devices in accordance with [Assignment: organization-defined lease information and lease duration]; and<br><br>(b) Audit lease information when assigned to a device. | Not Applicable – NIST 800-63 scope is limited to identity proofing and authentication of users (such as employees, contractors, or private individuals); devices are out of scope. |  |
| IA-3(4) | Handle device identification and authentication based on attestation by [Assignment: organization-defined configuration management process]. | Not Applicable – NIST 800-63 scope is limited to identity proofing and authentication of users (such as employees, contractors, or private individuals); devices are out of scope. |  |
| IA-4 | Manage system identifiers by:<br><br>a. Receiving authorization from [Assignment: organization-defined personnel or roles] to assign an individual, group, role, service, or device identifier; | No direct mapping. However, see 800-63A-4 Sections 4.3.4.4, 5.1.1 |  |
| IA-4 | b. Selecting an identifier that identifies an individual, group, role, service, or device; | 800-63A-3 Sections 4 and subsections, 6.1, Table 1 | 800-63A-3 Sections 2.1 |
| IA-4 | c. Assigning the identifier to the intended individual, group, role, service, or device; and | 800-63A-3 Sections 4 and subsections 6.1, Table 1 | 800-63A-3 Sections 2.1 |
| IA-4 | d. Preventing reuse of identifiers for [Assignment: organization-defined time period]. | 800-63B-4 Section 4 |  |
| IA-4(1) | Prohibit the use of system account identifiers that are the same as public identifiers for individual accounts. | None |  |
| IA-4(4) | Manage individual identifiers by uniquely identifying each individual as [Assignment: organization-defined characteristic identifying individual status]. | No direct mapping. However, see 800-63A-3 Section 6.1 |  |
| IA-4(5) | Manage individual identifiers dynamically in accordance with [Assignment: organization-defined dynamic identifier policy]. | 800-63C-4 Section 5.2 and subsections |  |
| IA-4(6) | Coordinate with the following external organizations for cross-organization management of identifiers: [Assignment: organization-defined external organizations]. | 800-63C-4 Section 6.3.1 |  |
| IA-4(8) | Generate pairwise pseudonymous identifiers. | 800-63B-3 Section 4<br><br>800-63C-4 Sections 5.2.2, 5.5, 6.2.5 and subsections | 800-63-4 Section 4.4.1<br><br>800-63C-4 Sections 9.1, 9.2 |
| IA-4(9) | Maintain the attributes for each uniquely identified individual, device, or service in [Assignment: organization-defined protected central storage]. | 800-63A-4 Section 5.1.4<br><br>800-63C-4 Sections 5.4.2, 6.3.1 | 800-63-4 Sections 2.3.1, 4.3.2 |
| IA-5 | Manage system authenticators by:<br><br>a. Verifying, as part of the initial authenticator distribution, the identity of the individual, group, role, service, or device receiving the authenticator; | 800-63-4 5.0, 5.1 and subsections, 5.2.2.1, 5.2.3.1, 5.3 and subsections, Figures 1 & 2<br><br>800-63B-4 Sections 4 and subsections, 5 and subsections. Suggest reading other sections as well for full context/insight. | 800-63-4 Sections 2.1, 4.2<br><br>800-63B-4 Sections 2 and subsections. Suggest reading other sections as well for full context/insight. |
| IA-5 | b. Establishing initial authenticator content for any authenticators issued by the organization; | None. However, see 800-63B-4 Section 6.1 and subsections |  |
| IA-5 | c. Ensuring that authenticators have sufficient strength of mechanism for their intended use; | 800-63-4 Sections 5.0, 5.1 and subsections, 5.2.2.2, 5.2.3.2, 5.3 and subsections<br><br>800-63B-4 Section 4 and subsections, 5 and subsections. Suggest reading other sections as well for full context/insight. |  |
| IA-5 | d. Establishing and implementing administrative procedures for initial authenticator distribution, for lost or compromised or damaged authenticators, and for revoking authenticators; | 800-63-4 Sections 5.2.1, 5.2.2.2, 5.2.3.2, 5.3 and subsections<br><br>800-63B-4 Section 6 and subsections |  |
| IA-5 | e. Changing default authenticators prior to first use; | None |  |
| IA-5 | f. Changing or refreshing authenticators [Assignment: organization-defined time period by authenticator type] or when [Assignment: organization-defined events] occur; | 800-63B-4 Sections 6.1.4, 6.2, 6.3 |  |
| IA-5 | g. Protecting authenticator content from unauthorized disclosure and modification; | 800-63B-4 Sections 4.1.4, 4.2.4, 4.3.4, 5.1 and subsections, 5.2.1, 5.2.3, 6.1, 6.1.1, 6.1.2.4 |  |
| IA-5 | h. Requiring individuals to take, and having devices implement, specific controls to protect authenticators; and | 800-63B-3 Section 5.2.1 |  |
| IA-5 | i. Changing authenticators for group or role accounts when membership to those accounts changes. | None |  |
| IA-5(1) | For password-based authentication:<br><br>(a) Maintain a list of commonly-used, expected, or compromised passwords and update the list [Assignment: organization-defined frequency] and when organizational passwords are suspected to have been compromised directly or indirectly; | 800-63B-4 Sections 5.1.1 and subsections | 800-63B-4 Section 10.2.1 and Appendix A for general discussion |
| IA-5(1) | (b) Verify, when users create or update passwords, that the passwords are not found on the list of commonly-used, expected, or compromised passwords in IA-5(1)(a); | 800-63B-4 Section 5.1.1 and subsections |  |
| IA-5(1) | (c) Transmit passwords only over cryptographically-protected channels; | 800-63B-4 Section 5.1.1 and subsections |  |
| IA-5(1) | (d) Store passwords using an approved salted key derivation function, preferably using a keyed hash; | 800-63B-4 Section 5.1.1 and subsections, Table 4 |  |
| IA-5(1) | (e) Require immediate selection of a new password upon account recovery; | 800-63B-4 Section 6.1.2.3, 8.3 |  |
| IA-5(1) | (f) Allow user selection of long passwords and passphrases, including spaces and all printable characters; | 800-63B-4 Section 5.1.1 and subsections |  |
| IA-5(1) | (g) Employ automated tools to assist the user in selecting strong password authenticators; and | 800-63B-4 Sections 5.1.1 and subsections |  |
| IA-5(1) | (h) Enforce the following composition and complexity rules: [Assignment: organization-defined composition and complexity rules]. | 800-63B-4 Section 5.1.1 and subsections |  |
| IA-5(2) | (a) For public key-based authentication:<br><br>(1) Enforce authorized access to the corresponding private key; and | 800-63B-4 Section 5.1.6.1, 5.1.7.1, 5.1.8.1 |  |
| IA-5(2) | (2) Map the authenticated identity to the account of the individual or group; and | 800-63A-3 Section 4 and subsections, 6.1, Table 1 | 800-63A-3 Section 2.1 |
| IA-5(2) | (b) When public key infrastructure (PKI) is used:<br><br>(1) Validate certificates by constructing and verifying a certification path to an accepted trust anchor, including checking certificate status information; and<br><br>(2) Implement a local cache of revocation data to support path discovery and validation. | None |  |
| IA-5(5) | Require developers and installers of system components to provide unique authenticators or change default authenticators prior to delivery and installation. | Not Applicable |  |
| IA-5(6) | Protect authenticators commensurate with the security category of the information to which use of the authenticator permits access. | 800-63-4 Section 5 and subsections<br><br>800-63B-4 Sections 4.1.4, 4.2.4, 4.3.4, 5.2.1 |  |
| IA-5(7) | Ensure that unencrypted static authenticators are not embedded in applications or other forms of static storage. | None. However, see the following regarding authenticator storage: 800-63B-4 Sections 5.1.1.2, 5.1.2.2, 5.1.3.1, 5.1.3.2, 5.1.6.1, 5.1.8.1, 5.2.7, 5.2.11 |  |
| IA-5(8) | Implement [Assignment: organization-defined security controls] to manage the risk of compromise due to individuals having accounts on multiple systems. | 800-63-4 Section 4.4<br><br>800-63C-4 for overall guidance on Federation / SSO |  |
| IA-5(9) | Use the following external organizations to federate credentials: [Assignment: organization-defined external organizations]. | None. This is a case-by-case decision; see 800-63C-4 for overall guidance on Federation and collaborating and coordinating with external entities. |  |
| IA-5(10) | Bind identities and authenticators dynamically using the following rules: [Assignment: organization-defined binding rules]. | 800-63B-4 Sections 6.1.2.4, 6.1.3 |  |
| IA-5(12) | For biometric-based authentication, employ mechanisms that satisfy the following biometric quality requirements [Assignment: organization-defined biometric quality requirements]. | 800-63B-4 Section 5.1.8 |  |
| IA-5(13) | Prohibit the use of cached authenticators after [Assignment: organization-defined time period]. | None |  |
| IA-5(14) | For PKI-based authentication, employ an organization-wide methodology for managing the content of PKI trust stores installed across all platforms, including networks, operating systems, browsers, and applications. | None |  |
| IA-5(15) | Use only General Services Administration-approved products and services for identity, credential, and access management. | None |  |
| IA-5(16) | Require that the issuance of [Assignment: organization-defined types of and/or specific authenticators] be conducted [Selection: in person; by a trusted external party] before [Assignment: organization-defined registration authority] with authorization by [Assignment: organization-defined personnel or roles]. | 800-63B-4 Sections 6.1 and subsections<br><br>800-63C-4 Sections 6.1.2.2 | 800-63-4 Section 4.2<br><br>800-63A-4 Section 9.3, 9.4 |
| IA-5(17) | Employ presentation attack detection mechanisms for biometric-based authentication. | 800-63-A-4 Sections 5.1.1, 5.3.4, 5.4.4, 5.5.4<br><br>800-63B-4 Section 5.2.3 | 800-63-A-4 Table 3 in section 7 |
| IA-5(18) | (a) Employ [Assignment: organization-defined password managers] to generate and manage passwords; and | 800-63B-4 Section 5.1.1.2, 5.1.2.2, 5.1.1.4 |  |
| IA-5(18) | (b) Protect the passwords using [Assignment: organization-defined controls]. | 800-63B-4 Section 5.1.1.2, 5.1.2.2, 5.1.1.4 | 800-63C-4 Section 12.2 |
| IA-6 | Obscure feedback of authentication information during the authentication process to protect the information from possible exploitation and use by unauthorized individuals. | 800-63B-4 Section 5.1.1.2 |  |
| IA-7 | Implement mechanisms for authentication to a cryptographic module that meet the requirements of applicable laws, executive orders, directives, policies, regulations, standards, and guidelines for such authentication. | 800-63B-4 Section 4, 4.3.2, Table 1 in Section 4.5, 5.1.5, 5.1.8, 5.1.9, 5.1.7.1, 5.1.9.1 | 800-63-4 Section 2.3.1 |
| IA-8 | Uniquely identify and authenticate non-organizational users or processes acting on behalf of non-organizational users. | 800-63-4 Section 4 and subsections<br><br>800-63A-4 Section 4 and subsections, Section 5 and subsections. However, best to read 800-63A-4 in full<br><br>800-63B-4 Sections 4 and subsections and 5 and subsections. However, best to read 800-63B-4 in full<br><br>800-63C-4 Sections 4 and subsections and 5 and subsections. However, best to read 800-63C-4 in full | 800-63-4 Section 2.1, Appendix A.1 (Federated Identifier, Identity, Identity Resolution) |
| IA-8(1) | Accept and electronically verify Personal Identity Verification-compliant credentials from other federal agencies. | No direct mapping. However, see 800-63A-4 Sections 4.4, 4.4.1, and 800-63C-4 for information regarding sharing with other federal agencies. See also OMB Memo dated 10/6/2011, *Requirements for Accepting Externally Issued Identity Credentials*. |  |
| IA-8(2) | (a) Accept only external authenticators that are NIST-compliant; and | 800-63A-4 Sections 4.3.2 (6), 5.3.4, 5.5.4<br><br>800-53B-4 Section 4 and subsections, 5 and subsections, 6.1.2.4 | 800-63-4 Section 2.3.1 |
| IA-8(2) | (b) Document and maintain a list of accepted external authenticators. | 800-63A-4 Sections 2, 5, 5.1.5, 6.1, 6.3.1 | 800-63A-4 Section 7.2 |
| IA-8(4) | Conform to the following profiles for identity management [Assignment: organization-defined identity management profiles]. | 800-63C-4 Sections 4, 4.1, 4.2, 4.3, 5.1.2, 6.2.3, 6.3 | 800-63-4 Sections 4.4, 4.4.2, References section<br><br>800-63A-4 References section<br><br>800-63B-4 References section<br><br>800-63C-4 Sections 10.2, 10.2.2, 12 and subsections, References section |
| IA-8(5) | Accept and verify federated or PKI credentials that meet [Assignment: organization-defined policy]. | None. However, see 800-63A-4 Sections 4.4, 4.4.1, and 800-63C-4 for information regarding accepting external credentials. |  |
| IA-8(6) | Implement the following measures to disassociate user attributes or identifier assertion relationships among individuals, credential service providers, and relying parties: [Assignment: organization-defined measures]. | 800-63-4 Section 5.5<br><br>800-63A-4 Section 5.1.2.1<br><br>800-63B-4 Sections 4.9.2, 4.9.3, 4.9.4<br><br>800-63C-4 Sections 5.5, 6.2.4, 6.2.5 and subsections, 6.3 | 800-63-4 Section 2.3.2<br><br>800-63C-4 Section 9.1 |
| IA-9 | Uniquely identify and authenticate [Assignment: organization-defined system services and applications] before establishing communications with devices, users, or other services or applications. | 800-63B-4 Sections 4.1.2, 4.2.2, 4.3.2, Table 1 in section 4.5, 5.1.2.2, 5.1.4.2, 5.1.5.2, 5.2.5, 5.2.5.1, 5.2.5.2 | 800-63B-4 Section 7.1.3 (Devices), Table 4 in Section 8. |
| IA-10 | Require individuals accessing the system to employ [Assignment: organization-defined supplemental authentication techniques or mechanisms] under specific [Assignment: organization-defined circumstances or situations]. | 800-63B-4 Section 5.2.2 |  |
| IA-11 | Require users to re-authenticate when [Assignment: organization-defined circumstances or situations requiring re-authentication]. | 800-63B-4 Sections 4.1.3, 4 4.2.3, 4.3.3, 4.7.2 |  |
| IA-12 | a. Identity proof users that require accounts for logical access to systems based on appropriate identity assurance level requirements as specified in applicable standards and guidelines; | 800-63-4 Sections 4.2, 4.3.2, 5 and subsections<br><br>800-63A-4 Section 4 and subsections, 5 and subsections |  |
| IA-12 | b. Resolve user identities to a unique individual; and | 800-63A-4 Sections 4.1 and subsections, 4.2, 4.3.3.1, 4.3.3.2, 4.3.3.3, 5.1.8, 6.1, 6.3.1<br><br>800-63C-4 Section 6 | 800-63A-4 Sections 2, 2.1<br><br>800-63C-4 Section 2 |
| IA-12 | c. Collect, validate, and verify identity evidence. | 800-63A-4 Section 4 and subsections, 5.1.8, 5.1.9 and subsections, 5.1.10, 5.2, 5.3 and subsections, 5.4 and subsections, 5.5 and subsections, Table 1 in Section 5.6 | 800-63A-4 Section 7 and subsections |
| IA-12(1) | Require that the registration process to receive an account for logical access includes supervisor or sponsor authorization. | No direct mapping. However, see 800-63A-4 Section 5.2.2.1 for authorization around identity attributes. |  |
| IA-12(2) | Require evidence of individual identification be presented to the registration authority. | 800-63-4 Sections 5.2.2.1, 5.3.2, 5.3.3 |  |
| IA-12(3) | Require that the presented identity evidence be validated and verified through [Assignment: organizational defined methods of validation and verification]. | 800-63A-4 Sections 4.3, 4.4 |  |
| IA-12(4) | Require that the validation and verification of identity evidence be conducted in person before a designated registration authority. | 800-63A-4 Sections 4.3.4.3, 4.4.1, 5.3.2, 5.5.7 |  |
| IA-12(5) | Require that a [Selection: registration code; notice of proofing] be delivered through an out-of-band channel to verify the users address (physical or digital) of record. | 800-63A-4 Sections 5.1.6, 5.1.7 |  |
| IA-12(6) | Accept externally-proofed identities at [Assignment: organization-defined identity assurance level]. | 800-63C-4 Section 4 |  |

## Conclusion

This mapping links certain NIST SP 800-53 controls to applicable digital identity guidance documented in the NIST SP 800-63 document suite. The linkage ensures organizations have the supporting guidance and understanding necessary to implement mapped controls properly. This will help organizations achieve the proper security posture for each aspect of their digital identity solution – enrollment and identity proofing, authentication and lifecycle management, federation, and assertions. In doing so, organizations will have met the intent of both NIST Special Publications.

Organizations should not rely solely on the mapping table herein since there is always some degree of subjectivity in the mapping analysis. The mappings are not always a perfect one-to-one or equivalent match. Organization-specific implementations may also influence what guidance is relevant or equivalent.

Rather than exclude information that will likely help organizations better understand and implement digital identity, the mapping strategy uses a “more is better” approach. Accordingly, the following additional types of mappings are included:

- Mappings that provide necessary insights and context.
- Mappings that highlight extremely important precursor requirements or steps.
- Mappings that have similar but not exactly the same functionality or intent.
- Mappings that have a slightly different context, perspective, or scope.
