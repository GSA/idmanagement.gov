---
layout: page
collection: implement
title: Mapping of NIST SP 800-53 Revision 5 Identification and Authentication Controls to NIST SP 800-63 Draft Version 4
permalink: /implement/mapping-of-sp800-53-ia-to-sp-800-63/
sticky_sidenav: true
sidenav: implement
pubdate: July 7, 2026
version: 2.0
---

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

## Executive Summary

GSA Federal ICAM has mapped NIST Special Publication SP 800-53 Revision 5 controls to the NIST SP 800-63 (Draft Version 4) suite of documents, *Digital Identity Guidelines*. The mapping gives organizations a general indication of security and privacy control coverage concerning NIST SP 800-63 guidance. Accordingly, the mapping will help organizations better comply with certain NIST SP 800-53 controls by meeting NIST SP 800-63 digital identity assurance level guidance.

NIST SP 800-53 provides a catalog of security and privacy controls for information systems and organizations to protect organizational operations and assets, individuals, other organizations, and the Nation from a diverse set of threats and risks, including hostile attacks, human errors, natural disasters, structural failures, foreign intelligence entities, and privacy risks. The controls are flexible, customizable, and implemented as part of an organization-wide process to manage risk. The controls address diverse requirements derived from mission and business needs, laws, executive orders, directives, regulations, policies, standards, and guidelines. The use of these controls is mandatory for federal information systems in accordance with Office of Management and Budget (OMB) Circular A-130 [OMB A-130] and the provisions of the Federal Information Security Modernization Act (FISMA), which requires the implementation of minimum controls to protect federal information and information systems.

NIST SP 800-63 guidelines lay out a model for federal programs and other organizations to assess and manage risks associated with digital identity systems, including the processes, policies, data, people, and technologies that support digital identity management. The model is supported by a series of processes: identity proofing, authentication, and federation. The identity proofing process establishes that a subject is a specific physical person. The digital authentication process determines the validity of one or more authenticators to claim a digital identity. It establishes confidence that a subject attempting to access a digital service: (1) is in control of the technologies being used for authentication and (2) is the same subject that previously accessed the service. Finally, the federation process allows shared identity information to support system authentication.

NIST SP 800-63 also instructs credential service providers (CSPs), verifiers, and relying parties (RPs). It describes organizations' risk management processes for implementing digital identity services and supplementing the *NIST Risk Management Framework* and its special component publications.

NIST SP 800-63 guidelines focus on organizational services interacting with external users, such as citizens accessing public benefits or private sector partners accessing collaboration spaces. However, it also applies to federal systems accessed by employees and contractors.

## Table 1 – Mapping of NIST 800-53 R5 Controls to NIST 800-63 Draft Version 4 Guidance
<table>
  <thead>
    <tr>
      <th>Control</th>
      <th>NIST SP 800-53 R5 Control</th>
      <th>NIST SP 800-63 Draft Version 4 Normative</th>
      <th>NIST SP 800-63 Draft Version 4 Informative</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>IA-1</td>
      <td>
        <strong>a. Develop, document, and disseminate to [Assignment: organization-defined personnel or roles]:</strong><br><br>
        <strong>1. [Selection (one or more): Organization-level; Mission/business process-level; System-level] identification and authentication policy that:</strong><br><br>
        <strong>(a) Addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and</strong>
      </td>
      <td>
        800-63-4 Section 5.5<br><br>
        800-83C-4 Sections 5, 5.1 and subsections, 5.2 and subsections
      </td>
      <td>800-63-4 Sections 2.1, 4.1</td>
    </tr>
    <tr>
      <td>IA-1</td>
      <td>
        <strong>(b) Is consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines; and</strong>
      </td>
      <td>
        800-63-4 Sections 5, 5.1.2, 5.2.2.2<br><br>
        800-63A-4 Sections 4.3.3.2, 4.3.4.4, 5.1.2.1, 5.1.3, 5.1.5, 5.1.8, 5.1.10<br><br>
        800-63B-4 Sections 4, 4.1.2, 4.1.4, 4.1.5, 4.2.2, 4.2.4, 4.2.5, 4.3.2, 4.3.4, 4.3.5, 4.4, 5.1.1.2, 5.1.2.1, 5.1.3.2, 5.1.4.1, 5.1.5.1, 5.1.7.1, 5.1.9.1, 5.2.3, 5.2.4, 5.2.5, 5.2.7, 5.2.12, 6.1.2.3, 6.4, 7.1<br><br>
        800-63C-4 Sections 4, 4.1, 4.2, 4.3, 5.2.2, 7.1
      </td>
      <td>
        800-63-4 Section 2.3.1<br><br>
        800-63A-4 Sections 7, 8.3, 8.6, 9<br><br>
        800-63B-4 Sections 9.3, 9.4, 10, 10.4, 11<br><br>
        800-63C-4 Sections 9.1, 10, 11, 12.2, 12.3
      </td>
    </tr>
    <tr>
      <td>IA-1</td>
      <td>
        <strong>2. Procedures to facilitate the implementation of the identification and authentication policy and the associated identification and authentication controls;</strong>
      </td>
      <td>
        800-63-4 Section 5 and subsections<br><br>
        800-63A-4 Sections 5.1.1, 5.1.1.1, 5.1.10
      </td>
      <td>800-63A-4 Section 10.3 fourth Description</td>
    </tr>
    <tr>
      <td>IA-1</td>
      <td>
        <strong>b. Designate an [Assignment: organization-defined official] to manage the development, documentation, and dissemination of the identification and authentication policy and procedures;</strong>
      </td>
      <td>No direct mapping. However, see 800-63A-4 Sections 5.1.5, 800-63B-4 4.4, 800-83C-4 5.5</td>
      <td>No direct mapping. However, see 800-63A-4 Section 8.6, 800-63B-4 9.4, 800-63C-4 9.4 for officials to be consulted</td>
    </tr>
    <tr>
      <td>IA-1</td>
      <td>
        <strong>c. Review and update the current identification and authentication:</strong><br><br>
        1. Policy [Assignment: organization-defined frequency] and following [Assignment: organization-defined events]; and<br>
        2. Procedures [Assignment: organization-defined frequency] and following [Assignment: organization-defined events].
      </td>
      <td>No direct mapping. However, see 800-63-4 Sections 5.3.2, 800-63A-4 5.1.1, 5.1.2.1, 5.1.3, 5.1.5, 800-63B-4 6.1.4</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-2</td>
      <td>Uniquely identify and authenticate organizational users and associate that unique identification with processes acting on behalf of those users.</td>
      <td>
        800-63A-4 Section 4 and subsections, Section 5 and subsections. However, best to read 800-63A-4 in full<br><br>
        800-63B-4 Sections 4 and subsections and 5 and subsections. However, it is best to read 800-63B-4 in full<br><br>
        For CSPs that operate identity proofing and enrollment services, see also 800-63A-4 Section 5 and subsections; Section 6.1<br><br>
        800-63B-4 Sections 4 and subsections; 6.1 and subsections; 6.1.2 and subsections; 6.1.3
      </td>
      <td>800-63-4 Section 2.1, 4 and subsections</td>
    </tr>
    <tr>
      <td>IA-2(1)</td>
      <td>Implement multi-factor authentication for access to privileged accounts.</td>
      <td>800-63B-4 Sections 4.1, 4.1.1; 4.2, 4.2.1; 4.3, 4.3.1; 4.4, 4.4.1; 5.1.1; 5.1.3.4; 5.1.5 and subsections; 5.1.8 and subsections; 5.1.9 and subsections; 5.2.3</td>
      <td>800-63B-4 Sections 10.2.5, 10.2.8, 10.2.9, 10.3</td>
    </tr>
    <tr>
      <td>IA-2(2)</td>
      <td>Implement multi-factor authentication for access to non-privileged accounts.</td>
      <td>800-63B-4 Sections 4.1, 4.1.1; 4.2, 4.2.1; 4.3, 4.3.1; 4.4, 4.4.1; 5.1.1; 5.1.3.4; 5.1.5 and subsections; 5.1.8 and subsections; 5.1.9 and subsections; 5.2.3</td>
      <td>800-63B-4 Sections 10.2.5, 10.2.8, 10.2.9, 10.3</td>
    </tr>
    <tr>
      <td>IA-2(5)</td>
      <td>When shared accounts or authenticators are employed, require users to be individually authenticated before granting access to the shared accounts or resources.</td>
      <td>800-63B-4 Section 4</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-2(6)</td>
      <td>
        Implement multi-factor authentication for [Selection (one or more): local; network; remote] access to [Selection (one or more): privileged accounts; non-privileged accounts] such that:
      </td>
      <td>800-63B-4 Sections 4.1, 4.1.1; 4.2, 4.2.1; 4.3, 4.3.1; 4.4, 4.4.1; 5.1.1; 5.1.3.4; 5.1.5 and subsections; 5.1.8 and subsections; 5.1.9 and subsections; 5.2.3</td>
      <td>800-63B-4 Sections 10.2.5, 10.2.8, 10.2.9, 10.3</td>
    </tr>
    <tr>
      <td>IA-2(6)</td>
      <td><strong>(a) One of the factors is provided by a device separate from the system gaining access; and</strong></td>
      <td>800-63B-4 Sections 4.2, 4.2.1, 4.3, 4.3.1, 5.1.3.4, 5.1.5, 5.1.8, 5.1.9</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-2(6)</td>
      <td><strong>(b) The device meets [Assignment: organization-defined strength of mechanism requirements].</strong></td>
      <td>800-63B-4 Section 4 and subsections, 4.5</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-2(8)</td>
      <td>Implement replay-resistant authentication mechanisms for access to [Selection (one or more): privileged accounts; non-privileged accounts].</td>
      <td>800-63B-4 Sections 4.2.2, 4.3.2, Table 1, 5.1.3.2, 5.1.4.2, 5.1.5.2, 5.2.5, 5.2.8, Table 4</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-2(10)</td>
      <td>Provide a single sign-on capability for [Assignment: organization-defined system accounts and services].</td>
      <td>800-63C-4</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-2(12)</td>
      <td>Accept and electronically verify Personal Identity Verification-compliant credentials.</td>
      <td>No direct mapping. However, see 800-63B-4 Section 5.1.9.2</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-2(13)</td>
      <td>Implement the following out-of-band authentication mechanisms under [Assignment: organization-defined conditions]: [Assignment: organization-defined out-of-band authentication].</td>
      <td>
        800-63B-4 Table 1, Section 5.1.3 and subsections<br><br>
        800-63C-4 Section 6.1.2.2
      </td>
      <td>800-63B-4 Table 1, Sections 10.2.3; 11</td>
    </tr>
    <tr>
      <td>IA-3</td>
      <td>Uniquely identify and authenticate [Assignment: organization-defined devices and/or types of devices] before establishing a [Selection (one or more): local; remote; network] connection.</td>
      <td>Not Applicable – NIST 800-63 scope is limited to identity proofing and authentication of users, such as employees, contractors, or private individuals; devices are out of scope.</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-3(1)</td>
      <td>Authenticate [Assignment: organization-defined devices and/or types of devices] before establishing [Selection (one or more): local; remote; network] connection using bidirectional authentication that is cryptographically based.</td>
      <td>Not Applicable – NIST 800-63 scope is limited to identity proofing and authentication of users, such as employees, contractors, or private individuals; devices are out of scope.</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-3(3)</td>
      <td>
        <strong>(a)</strong> Where addresses are allocated dynamically, standardize dynamic address allocation lease information and the lease duration assigned to devices in accordance with [Assignment: organization-defined lease information and lease duration]; and<br><br>
        <strong>(b)</strong> Audit lease information when assigned to a device.
      </td>
      <td>Not Applicable – NIST 800-63 scope is limited to identity proofing and authentication of users, such as employees, contractors, or private individuals; devices are out of scope.</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-3(4)</td>
      <td>Handle device identification and authentication based on attestation by [Assignment: organization-defined configuration management process].</td>
      <td>Not Applicable – NIST 800-63 scope is limited to identity proofing and authentication of users, such as employees, contractors, or private individuals; devices are out of scope.</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-4</td>
      <td>
        <strong>Manage system identifiers by:</strong><br><br>
        <strong>a. Receiving authorization from [Assignment: organization-defined personnel or roles] to assign an individual, group, role, service, or device identifier;</strong>
      </td>
      <td>No direct mapping. However, see 800-63A-4 Sections 4.3.4.4, 5.1.1</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-4</td>
      <td><strong>b. Selecting an identifier that identifies an individual, group, role, service, or device;</strong></td>
      <td>800-63A-3 Sections 4 and subsections, 6.1, Table 1</td>
      <td>800-63A-3 Sections 2.1</td>
    </tr>
    <tr>
      <td>IA-4</td>
      <td><strong>c. Assigning the identifier to the intended individual, group, role, service, or device; and</strong></td>
      <td>800-63A-3 Sections 4 and subsections 6.1, Table 1</td>
      <td>800-63A-3 Sections 2.1</td>
    </tr>
    <tr>
      <td>IA-4</td>
      <td><strong>d. Preventing reuse of identifiers for [Assignment: organization-defined time period].</strong></td>
      <td>800-63B-4 Section 4</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-4(1)</td>
      <td>Prohibit the use of system account identifiers that are the same as public identifiers for individual accounts.</td>
      <td>None</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-4(4)</td>
      <td>Manage individual identifiers by uniquely identifying each individual as [Assignment: organization-defined characteristic identifying individual status].</td>
      <td>No direct mapping. However, see 800-63A-3 Section 6.1</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-4(5)</td>
      <td>Manage individual identifiers dynamically in accordance with [Assignment: organization-defined dynamic identifier policy].</td>
      <td>800-63C-4 Section 5.2 and subsections</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-4(6)</td>
      <td>Coordinate with the following external organizations for cross-organization management of identifiers: [Assignment: organization-defined external organizations].</td>
      <td>800-63C-4 Section 6.3.1</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-4(8)</td>
      <td>Generate pairwise pseudonymous identifiers.</td>
      <td>
        800-63B-3 Section 4<br><br>
        800-63C-4 Sections 5.2.2, 5.5, 6.2.5 and subsections
      </td>
      <td>
        800-63-4 Section 4.4.1<br><br>
        800-63C-4 Sections 9.1, 9.2
      </td>
    </tr>
    <tr>
      <td>IA-4(9)</td>
      <td>Maintain the attributes for each uniquely identified individual, device, or service in [Assignment: organization-defined protected central storage].</td>
      <td>
        800-63A-4 Section 5.1.4<br><br>
        800-63C-4 Sections 5.4.2, 6.3.1
      </td>
      <td>800-63-4 Sections 2.3.1, 4.3.2</td>
    </tr>
    <tr>
      <td>IA-5</td>
      <td>
        <strong>Manage system authenticators by:</strong><br><br>
        <strong>a. Verifying, as part of the initial authenticator distribution, the identity of the individual, group, role, service, or device receiving the authenticator;</strong>
      </td>
      <td>
        800-63-4 5.0, 5.1 and subsections, 5.2.2.1, 5.2.3.1, 5.3 and subsections, Figures 1 &amp; 2<br><br>
        800-63B-4 Sections 4 and subsections, 5 and subsections. Suggest reading other sections as well for full context/insight.
      </td>
      <td>
        800-63-4 Sections 2.1, 4.2<br><br>
        800-63B-4 Sections 2 and subsections. Suggest reading other sections as well for full context/insight.
      </td>
    </tr>
    <tr>
      <td>IA-5</td>
      <td><strong>b. Establishing initial authenticator content for any authenticators issued by the organization;</strong></td>
      <td>None. However, see 800-63B-4 Section 6.1 and subsections</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-5</td>
      <td><strong>c. Ensuring that authenticators have sufficient strength of mechanism for their intended use;</strong></td>
      <td>
        800-63-4 Sections 5.0, 5.1 and subsections, 5.2.2.2, 5.2.3.2, 5.3 and subsections<br><br>
        800-63B-4 Section 4 and subsections, 5 and subsections. Suggest reading other sections as well for full context/insight.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>IA-5</td>
      <td><strong>d. Establishing and implementing administrative procedures for initial authenticator distribution, for lost or compromised or damaged authenticators, and for revoking authenticators;</strong></td>
      <td>
        800-63-4 Sections 5.2.1, 5.2.2.2, 5.2.3.2, 5.3 and subsections<br><br>
        800-63B-4 Section 6 and subsections
      </td>
      <td></td>
    </tr>
    <tr>
      <td>IA-5</td>
      <td><strong>e. Changing default authenticators prior to first use;</strong></td>
      <td>None</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-5</td>
      <td><strong>f. Changing or refreshing authenticators [Assignment: organization-defined time period by authenticator type] or when [Assignment: organization-defined events] occur;</strong></td>
      <td>800-63B-4 Sections 6.1.4, 6.2, 6.3</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-5</td>
      <td><strong>g. Protecting authenticator content from unauthorized disclosure and modification;</strong></td>
      <td>800-63B-4 Sections 4.1.4, 4.2.4, 4.3.4, 5.1 and subsections, 5.2.1, 5.2.3, 6.1, 6.1.1, 6.1.2.4</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-5</td>
      <td><strong>h. Requiring individuals to take, and having devices implement, specific controls to protect authenticators; and</strong></td>
      <td>800-63B-3 Section 5.2.1</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-5</td>
      <td><strong>i. Changing authenticators for group or role accounts when membership to those accounts changes.</strong></td>
      <td>None</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-5(1)</td>
      <td>
        <strong>For password-based authentication:</strong><br><br>
        <strong>(a)</strong> Maintain a list of commonly-used, expected, or compromised passwords and update the list [Assignment: organization-defined frequency] and when organizational passwords are suspected to have been compromised directly or indirectly;
      </td>
      <td>800-63B-4 Sections 5.1.1 and subsections</td>
      <td>800-63B-4 Section 10.2.1 and Appendix A for general discussion</td>
    </tr>
    <tr>
      <td>IA-5(1)</td>
      <td><strong>(b)</strong> Verify, when users create or update passwords, that the passwords are not found on the list of commonly-used, expected, or compromised passwords in IA-5(1)(a);</td>
      <td>800-63B-4 Section 5.1.1 and subsections</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-5(1)</td>
      <td><strong>(c)</strong> Transmit passwords only over cryptographically-protected channels;</td>
      <td>800-63B-4 Section 5.1.1 and subsections</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-5(1)</td>
      <td><strong>(d)</strong> Store passwords using an approved salted key derivation function, preferably using a keyed hash;</td>
      <td>800-63B-4 Section 5.1.1 and subsections, Table 4</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-5(1)</td>
      <td><strong>(e)</strong> Require immediate selection of a new password upon account recovery;</td>
      <td>800-63B-4 Section 6.1.2.3, 8.3</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-5(1)</td>
      <td><strong>(f)</strong> Allow user selection of long passwords and passphrases, including spaces and all printable characters;</td>
      <td>800-63B-4 Section 5.1.1 and subsections</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-5(1)</td>
      <td><strong>(g)</strong> Employ automated tools to assist the user in selecting strong password authenticators; and</td>
      <td>800-63B-4 Sections 5.1.1 and subsections</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-5(1)</td>
      <td><strong>(h)</strong> Enforce the following composition and complexity rules: [Assignment: organization-defined composition and complexity rules].</td>
      <td>800-63B-4 Section 5.1.1 and subsections</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-5(2)</td>
      <td>
        <strong>(a) For public key-based authentication:</strong><br><br>
        <strong>(1)</strong> Enforce authorized access to the corresponding private key; and
      </td>
      <td>800-63B-4 Section 5.1.6.1, 5.1.7.1, 5.1.8.1</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-5(2)</td>
      <td><strong>(2)</strong> Map the authenticated identity to the account of the individual or group; and</td>
      <td>800-63A-3 Section 4 and subsections, 6.1, Table 1</td>
      <td>800-63A-3 Section 2.1</td>
    </tr>
    <tr>
      <td>IA-5(2)</td>
      <td>
        <strong>(b) When public key infrastructure (PKI) is used:</strong><br><br>
        <strong>(1)</strong> Validate certificates by constructing and verifying a certification path to an accepted trust anchor, including checking certificate status information; and<br><br>
        <strong>(2)</strong> Implement a local cache of revocation data to support path discovery and validation.
      </td>
      <td>None</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-5(5)</td>
      <td>Require developers and installers of system components to provide unique authenticators or change default authenticators prior to delivery and installation.</td>
      <td>Not Applicable</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-5(6)</td>
      <td>Protect authenticators commensurate with the security category of the information to which use of the authenticator permits access.</td>
      <td>
        800-63-4 Section 5 and subsections<br><br>
        800-63B-4 Sections 4.1.4, 4.2.4, 4.3.4, 5.2.1
      </td>
      <td></td>
    </tr>
    <tr>
      <td>IA-5(7)</td>
      <td>Ensure that unencrypted static authenticators are not embedded in applications or other forms of static storage.</td>
      <td>None. However, see the following regarding authenticator storage: 800-63B-4 Sections 5.1.1.2, 5.1.2.2, 5.1.3.1, 5.1.3.2, 5.1.6.1, 5.1.8.1, 5.2.7, 5.2.11</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-5(8)</td>
      <td>Implement [Assignment: organization-defined security controls] to manage the risk of compromise due to individuals having accounts on multiple systems.</td>
      <td>
        800-63-4 Section 4.4<br><br>
        800-63C-4 for overall guidance on Federation / SSO
      </td>
      <td></td>
    </tr>
    <tr>
      <td>IA-5(9)</td>
      <td>Use the following external organizations to federate credentials: [Assignment: organization-defined external organizations].</td>
      <td>None. This is a case-by-case decision; see 800-63C-4 for overall guidance on Federation and collaborating and coordinating with external entities.</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-5(10)</td>
      <td>Bind identities and authenticators dynamically using the following rules: [Assignment: organization-defined binding rules].</td>
      <td>800-63B-4 Sections 6.1.2.4, 6.1.3</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-5(12)</td>
      <td>For biometric-based authentication, employ mechanisms that satisfy the following biometric quality requirements [Assignment: organization-defined biometric quality requirements].</td>
      <td>800-63B-4 Section 5.1.8</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-5(13)</td>
      <td>Prohibit the use of cached authenticators after [Assignment: organization-defined time period].</td>
      <td>None</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-5(14)</td>
      <td>For PKI-based authentication, employ an organization-wide methodology for managing the content of PKI trust stores installed across all platforms, including networks, operating systems, browsers, and applications.</td>
      <td>None</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-5(15)</td>
      <td>Use only General Services Administration-approved products and services for identity, credential, and access management.</td>
      <td>None</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-5(16)</td>
      <td>Require that the issuance of [Assignment: organization-defined types of and/or specific authenticators] be conducted [Selection: in person; by a trusted external party] before [Assignment: organization-defined registration authority] with authorization by [Assignment: organization-defined personnel or roles].</td>
      <td>
        800-63B-4 Sections 6.1 and subsections<br><br>
        800-63C-4 Sections 6.1.2.2
      </td>
      <td>
        800-63-4 Section 4.2<br><br>
        800-63A-4 Section 9.3, 9.4
      </td>
    </tr>
    <tr>
      <td>IA-5(17)</td>
      <td>Employ presentation attack detection mechanisms for biometric-based authentication.</td>
      <td>
        800-63-A-4 Sections 5.1.1, 5.3.4, 5.4.4, 5.5.4<br><br>
        800-63B-4 Section 5.2.3
      </td>
      <td>800-63-A-4 Table 3 in section 7</td>
    </tr>
    <tr>
      <td>IA-5(18)</td>
      <td><strong>(a)</strong> Employ [Assignment: organization-defined password managers] to generate and manage passwords; and</td>
      <td>800-63B-4 Section 5.1.1.2, 5.1.2.2, 5.1.1.4</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-5(18)</td>
      <td><strong>(b)</strong> Protect the passwords using [Assignment: organization-defined controls].</td>
      <td>800-63B-4 Section 5.1.1.2, 5.1.2.2, 5.1.1.4</td>
      <td>800-63C-4 Section 12.2</td>
    </tr>
    <tr>
      <td>IA-6</td>
      <td>Obscure feedback of authentication information during the authentication process to protect the information from possible exploitation and use by unauthorized individuals.</td>
      <td>800-63B-4 Section 5.1.1.2</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-7</td>
      <td>Implement mechanisms for authentication to a cryptographic module that meet the requirements of applicable laws, executive orders, directives, policies, regulations, standards, and guidelines for such authentication.</td>
      <td>800-63B-4 Section 4, 4.3.2, Table 1 in Section 4.5, 5.1.5, 5.1.8, 5.1.9, 5.1.7.1, 5.1.9.1</td>
      <td>800-63-4 Section 2.3.1</td>
    </tr>
    <tr>
      <td>IA-8</td>
      <td>Uniquely identify and authenticate non-organizational users or processes acting on behalf of non-organizational users.</td>
      <td>
        800-63-4 Section 4 and subsections<br><br>
        800-63A-4 Section 4 and subsections, Section 5 and subsections. However, best to read 800-63A-4 in full<br><br>
        800-63B-4 Sections 4 and subsections and 5 and subsections. However, best to read 800-63B-4 in full<br><br>
        800-63C-4 Sections 4 and subsections and 5 and subsections. However, best to read 800-63C-4 in full
      </td>
      <td>800-63-4 Section 2.1, Appendix A.1 (Federated Identifier, Identity, Identity Resolution)</td>
    </tr>
    <tr>
      <td>IA-8(1)</td>
      <td>Accept and electronically verify Personal Identity Verification-compliant credentials from other federal agencies.</td>
      <td>No direct mapping. However, see 800-63A-4 Sections 4.4, 4.4.1, and 800-63C-4 for information regarding sharing with other federal agencies. See also OMB Memo dated 10/6/2011, Requirements for Accepting Externally Issued Identity Credentials.</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-8(2)</td>
      <td><strong>(a)</strong> Accept only external authenticators that are NIST-compliant; and</td>
      <td>
        800-63A-4 Sections 4.3.2 (6), 5.3.4, 5.5.4<br><br>
        800-53B-4 Section 4 and subsections, 5 and subsections, 6.1.2.4
      </td>
      <td>800-63-4 Section 2.3.1</td>
    </tr>
    <tr>
      <td>IA-8(2)</td>
      <td><strong>(b)</strong> Document and maintain a list of accepted external authenticators.</td>
      <td>800-63A-4 Sections 2, 5, 5.1.5, 6.1, 6.3.1</td>
      <td>800-63A-4 Section 7.2</td>
    </tr>
    <tr>
      <td>IA-8(4)</td>
      <td>Conform to the following profiles for identity management [Assignment: organization-defined identity management profiles].</td>
      <td>800-63C-4 Sections 4, 4.1, 4.2, 4.3, 5.1.2, 6.2.3, 6.3</td>
      <td>
        800-63-4 Sections 4.4, 4.4.2, References section<br><br>
        800-63A-4 References section<br><br>
        800-63B-4 References section<br><br>
        800-63C-4 Sections 10.2, 10.2.2, 12 and subsections, References section
      </td>
    </tr>
    <tr>
      <td>IA-8(5)</td>
      <td>Accept and verify federated or PKI credentials that meet [Assignment: organization-defined policy].</td>
      <td>None. However, see 800-63A-4 Sections 4.4, 4.4.1, and 800-63C-4 for information regarding accepting external credentials.</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-8(6)</td>
      <td>Implement the following measures to disassociate user attributes or identifier assertion relationships among individuals, credential service providers, and relying parties: [Assignment: organization-defined measures].</td>
      <td>
        800-63-4 Section 5.5<br><br>
        800-63A-4 Section 5.1.2.1<br><br>
        800-63B-4 Sections 4.9.2, 4.9.3, 4.9.4<br><br>
        800-63C-4 Sections 5.5, 6.2.4, 6.2.5 and subsections, 6.3
      </td>
      <td>
        800-63-4 Section 2.3.2<br><br>
        800-63C-4 Section 9.1
      </td>
    </tr>
    <tr>
      <td>IA-9</td>
      <td>Uniquely identify and authenticate [Assignment: organization-defined system services and applications] before establishing communications with devices, users, or other services or applications.</td>
      <td>800-63B-4 Sections 4.1.2, 4.2.2, 4.3.2, Table 1 in section 4.5, 5.1.2.2, 5.1.4.2, 5.1.5.2, 5.2.5, 5.2.5.1, 5.2.5.2</td>
      <td>800-63B-4 Section 7.1.3 (Devices), Table 4 in Section 8.</td>
    </tr>
    <tr>
      <td>IA-10</td>
      <td>Require individuals accessing the system to employ [Assignment: organization-defined supplemental authentication techniques or mechanisms] under specific [Assignment: organization-defined circumstances or situations].</td>
      <td>800-63B-4 Section 5.2.2</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-11</td>
      <td>Require users to re-authenticate when [Assignment: organization-defined circumstances or situations requiring re-authentication].</td>
      <td>800-63B-4 Sections 4.1.3, 4.2.3, 4.3.3, 4.7.2</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-12</td>
      <td><strong>a. Identity proof users that require accounts for logical access to systems based on appropriate identity assurance level requirements as specified in applicable standards and guidelines;</strong></td>
      <td>
        800-63-4 Sections 4.2, 4.3.2, 5 and subsections<br><br>
        800-63A-4 Section 4 and subsections, 5 and subsections
      </td>
      <td></td>
    </tr>
    <tr>
      <td>IA-12</td>
      <td><strong>b. Resolve user identities to a unique individual; and</strong></td>
      <td>
        800-63A-4 Sections 4.1 and subsections, 4.2, 4.3.3.1, 4.3.3.2, 4.3.3.3, 5.1.8, 6.1, 6.3.1<br><br>
        800-63C-4 Section 6
      </td>
      <td>
        800-63A-4 Sections 2, 2.1<br><br>
        800-63C-4 Section 2
      </td>
    </tr>
    <tr>
      <td>IA-12</td>
      <td><strong>c. Collect, validate, and verify identity evidence.</strong></td>
      <td>800-63A-4 Section 4 and subsections, 5.1.8, 5.1.9 and subsections, 5.1.10, 5.2, 5.3 and subsections, 5.4 and subsections, 5.5 and subsections, Table 1 in Section 5.6</td>
      <td>800-63A-4 Section 7 and subsections</td>
    </tr>
    <tr>
      <td>IA-12(1)</td>
      <td>Require that the registration process to receive an account for logical access includes supervisor or sponsor authorization.</td>
      <td>No direct mapping. However, see 800-63A-4 Section 5.2.2.1 for authorization around identity attributes.</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-12(2)</td>
      <td>Require evidence of individual identification be presented to the registration authority.</td>
      <td>800-63-4 Sections 5.2.2.1, 5.3.2, 5.3.3</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-12(3)</td>
      <td>Require that the presented identity evidence be validated and verified through [Assignment: organizational defined methods of validation and verification].</td>
      <td>800-63A-4 Sections 4.3, 4.4</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-12(4)</td>
      <td>Require that the validation and verification of identity evidence be conducted in person before a designated registration authority.</td>
      <td>800-63A-4 Sections 4.3.4.3, 4.4.1, 5.3.2, 5.5.7</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-12(5)</td>
      <td>Require that a [Selection: registration code; notice of proofing] be delivered through an out-of-band channel to verify the users address, physical or digital, of record.</td>
      <td>800-63A-4 Sections 5.1.6, 5.1.7</td>
      <td></td>
    </tr>
    <tr>
      <td>IA-12(6)</td>
      <td>Accept externally-proofed identities at [Assignment: organization-defined identity assurance level].</td>
      <td>800-63C-4 Section 4</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Conclusion

This mapping links certain NIST SP 800-53 controls to applicable digital identity guidance documented in the NIST SP 800-63 document suite. The linkage ensures organizations have the supporting guidance and understanding necessary to implement mapped controls properly. This will help organizations achieve the proper security posture for each aspect of their digital identity solution – enrollment and identity proofing, authentication and lifecycle management, federation, and assertions. In doing so, organizations will have met the intent of both NIST Special Publications.

Organizations should not rely solely on the mapping table herein since there is always some degree of subjectivity in the mapping analysis. The mappings are not always a perfect one-to-one or equivalent match. Organization-specific implementations may also influence what guidance is relevant or equivalent.

Rather than exclude information that will likely help organizations better understand and implement digital identity, the mapping strategy uses a “more is better” approach. Accordingly, the following additional types of mappings are included:

- Mappings that provide necessary insights and context.
- Mappings that highlight extremely important precursor requirements or steps.
- Mappings that have similar but not exactly the same functionality or intent.
- Mappings that have a slightly different context, perspective, or scope.
