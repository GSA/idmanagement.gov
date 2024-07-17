---
layout: page
collection: implement
title: Federal Identity, Credential, and Access Management Sub Committee
permalink: /implement/mapping-of-sp800-53-ia-to-sp-800-63/
sticky_sidenav: true
sidenav: implement
pubdate: April 24, 2024
version: 1.0

subnav:
  - text: Applicability and Use
    href: '#applicability-and-use'
  - text: Informational Policy Mapping
    href: '#informational-policy-mapping'
  - text: Policy Crosswalk
    href: '#policy-crosswalk'
  - text: Policy Crosswalk Overview Table
    href: '#policy-crosswalk-overview-table'
  - text: Detailed Policy Crosswalk
    href: '#detailed-policy-crosswalk'
  - text: 800-63-4
    href: '#800-63-4'
  - text: 800-63A-4
    href: '#800-63a-4'
  - text: 800-63B-4
    href: '#800-63b-4'
  - text: 800-63C-4
    href: '#800-63c-4'
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
        <th scope='col'>Document Version</th>
        <th scope='col'>Document Date</th>
        <th scope='col'>Revision Details</th>
      </tr>
      </thead>
      <tr>
        <th scope='row'>1.0</th>
        <td>04/24/2024</td>
        <td>Initial Mapping of IA Controls</td>
      </tr>
    </table>
  </div>
</div>

# Introduction

This document provides guidance for organizations who need to comply
with the requirements of NIST SP 800-53 rev. 5 and NIST SP 800-63.

NIST SP 800-53 rev. 5 provides a catalog of security and privacy
controls for information systems and organizations to protect
organizational operations and assets, individuals, other organizations,
and the Nation from a diverse set of threats and risks, including
hostile attacks, human errors, natural disasters, structural failures,
foreign intelligence entities, and privacy risks. The controls are
flexible, customizable, and implemented as part of an organization-wide
process to manage risk. The controls address diverse requirements
derived from mission and business needs, laws, executive orders,
directives, regulations, policies, standards, and guidelines. The use of
these controls is mandatory for federal information systems in
accordance with Office of Management and Budget (OMB) Circular A-130
\[OMB A-130\] and the provisions of the Federal Information Security
Modernization Act (FISMA), which requires the implementation of minimum
controls to protect federal information and information systems.

NIST SP 800-63 guidelines lay out a model for federal programs and other
organizations to assess and manage risks associated with digital
identity systems, including the processes, policies, data, people, and
technologies that support digital identity management. The model is
supported by a series of processes: identity proofing, authentication,
and federation. The identity proofing process establishes that a subject
is a specific physical person. The digital authentication process
determines the validity of one or more authenticators to claim a digital
identity. It establishes confidence that a subject attempting to access
a digital service: (1) is in control of the technologies being used for
authentication and (2) is the same subject that previously accessed the
service. Finally, the federation process allows shared identity
information to support system authentication.

Additionally, NIST SP 800-63 provides instruction for credential service
providers (CSPs), verifiers, and relying parties (RPs), and it describes
the risk management processes that organizations should follow for
implementing digital identity services and that supplement the *NIST
Risk Management Framework* and its special component publications.

NIST SP 800-63 guidelines focus on organizational services interacting
with external users, such as citizens accessing public benefits or
private sector partners accessing collaboration spaces. However, it also
applies to federal systems accessed by employees and contractors.

A supplement to 800-63
([<u>https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63Bsup1.pdf</u>](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63Bsup1.pdf))
was released as this mapping document was being finalized. The
requirements of the supplement were not included in this document due to
time constraints. Those updates may be reflected in a future version of
this document.

# Applicability and Use

This document contains two different mappings between 800-53 rev. 5 and
800-63. The first is an informational policy mapping. The mapping gives
organizations a *general* indication of security and privacy control
coverage concerning NIST SP 800-63 guidance. Accordingly, the mapping
will help organizations better comply with certain NIST SP 800-53 rev. 5
controls by meeting NIST SP 800-63 digital identity assurance level
guidance.

For each 800-53 rev. 5 control in scope, 800-63 sections with relevant
background or discussion are identified. This enables readers to obtain
context and understanding of the concepts in 800-63 that are relevant to
the topic covered in the policy.

The second mapping is a policy crosswalk. The policy crosswalk
identifies mappings between specific requirements in each document. This
mapping provides specific information about equivalent controls in each
respective document. Readers will be able to determine which specific
requirements in 800-63 are relevant to a given control in 800-53 rev. 5,
to assist in complying with both sets of requirements.

# Informational Policy Mapping

<table>
<colgroup>
<col style="width: 10%" />
<col style="width: 38%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Control</th>
<th>NIST SP 800-53 R5 Control</th>
<th>NIST SP 800-63 (Draft Version 4) Guidance</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td rowspan="3">IA-1</td>
<td><p>a. Develop, document, and disseminate to [<em>Assignment:
organization-defined personnel or roles</em>]:</p>
<blockquote>
<p>1. [<em>Selection (one or more): Organization-level; Mission/business
process-level; System-level</em>] identification and authentication
policy that:</p>
<p>(a) Addresses purpose, scope, roles, responsibilities, management
commitment, coordination among organizational entities, and compliance;
and</p>
</blockquote></td>
<td><ul>
<li><blockquote>
<p>800-63-4 Sections 2.1, 4.1, 5.5</p>
</blockquote></li>
<li><blockquote>
<p>800-83C-4 Sections 5, 5.1 and subsections, 5.2 and subsections</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td><blockquote>
<p>(b) Is consistent with applicable laws, executive orders, directives,
regulations, policies, standards, and guidelines; and</p>
</blockquote></td>
<td><ul>
<li><blockquote>
<p>800-63-4 Sections 2.3.1, 5, 5.1.2, 5.2.2.2</p>
</blockquote></li>
<li><blockquote>
<p>800-63A-4 Sections 4.3.3.2, 4.3.4.4, 5.1.2.1, 5.1.3, 5.1.5, 5.1.8,
5.1.10, 7, 8.3, 8.6, 9</p>
</blockquote></li>
<li><blockquote>
<p>800-63B-4 Sections 4, 4.1.2, 4.1.4, 4.1.5, 4.2.2, 4.2.4, 4.2.5,
4.3.2, 4.3.4, 4.3.5, 4.4, 5.1.1.2, 5.1.2.1, 5.1.3.2, 5.1.4.1, 5.1.5.1,
5.1.7.1, 5.1.9.1, 5.2.3, 5.2.4, 5.2.5, 5.2.7, 5.2.12, 6.1.2.3, 6.4, 7.1,
9.3, 9.4, 10, 10.4, 11</p>
</blockquote></li>
<li><blockquote>
<p>800-63C-4 Sections 4, 4.1, 4.2, 4.3, 5.2.2, 7.1, 9.1, 10, 11, 12.2,
12.3</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td><blockquote>
<p>2. Procedures to facilitate the implementation of the identification
and authentication policy and the associated identification and
authentication controls;</p>
</blockquote></td>
<td><ul>
<li><blockquote>
<p>800-63-4 Section 5 and subsections</p>
</blockquote></li>
<li><blockquote>
<p>800-63A-4 Sections 5.1.1, 5.1.1.1, 5.1.10, 10.3 fourth
Description</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td>IA-1</td>
<td>b. Designate an [<em>Assignment: organization-defined official</em>]
to manage the development, documentation, and dissemination of the
identification and authentication policy and procedures;</td>
<td>No direct mapping. However, see 800-63A-4 Sections 5.1.5, 8.6,
800-63B-4 4.4, 9.4, 800-83C-4 5.5, 9.4 for officials to be
consulted</td>
</tr>
<tr class="odd">
<td>IA-1</td>
<td><p>c. Review and update the current identification and
authentication:</p>
<blockquote>
<p>1. Policy [<em>Assignment: organization-defined frequency</em>] and
following [<em>Assignment: organization-defined events</em>]; and</p>
<p>2. Procedures [<em>Assignment: organization-defined frequency</em>]
and following [<em>Assignment: organization-defined events</em>].</p>
</blockquote></td>
<td>No direct mapping. However, see 800-63-4 Sections 5.3.2, 800-63A-4
5.1.1, 5.1.2.1, 5.1.3, 5.1.5, 800-63B-4 6.1.4</td>
</tr>
<tr class="even">
<td>IA-2</td>
<td>Uniquely identify and authenticate organizational users and
associate that unique identification with processes acting on behalf of
those users.</td>
<td><ul>
<li><blockquote>
<p>800-63-4 Section 2.1, 4 and subsections</p>
</blockquote></li>
<li><blockquote>
<p>800-63A-4 Section 4 and subsections, Section 5 and subsections.
However, best to read 800-63A-4 in full</p>
</blockquote></li>
<li><blockquote>
<p>800-63B-4 Sections 4 and subsections and 5 and subsections. However,
it is best to read 800-63B-4 in full</p>
</blockquote></li>
<li><blockquote>
<p>For CSPs that operate identity proofing and enrollment services, see
also 800-63A-4 Section 5 and subsections; Section 6.1</p>
</blockquote></li>
<li><blockquote>
<p>800-63B-4 Sections 4 and subsections; 6.1 and subsections; 6.1.2 and
subsections; 6.1.3</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td>IA-2(1)</td>
<td>Implement multi-factor authentication for access to privileged
accounts.</td>
<td><ul>
<li><blockquote>
<p>800-63B-4 Sections 4.1, 4.1.1; 4.2, 4.2.1; 4.3, 4.3.1; 4.4, 4.4.1;
5.1.1; 5.1.3.4; 5.1.5 and subsections; 5.1.8 and subsections; 5.1.9 and
subsections; 5.2.3; 10.2.5, 10.2.8, 10.2.9, 10.3</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td>IA-2(2)</td>
<td>Implement multi-factor authentication for access to non-privileged
accounts.</td>
<td><ul>
<li><blockquote>
<p>800-63B-4 Sections 4.1, 4.1.1; 4.2, 4.2.1; 4.3, 4.3.1; 4.4, 4.4.1;
5.1.1; 5.1.3.4; 5.1.5 and subsections; 5.1.8 and subsections; 5.1.9 and
subsections; 5.2.3; 10.2.5, 10.2.8, 10.2.9, 10.3</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td>IA-2(5)</td>
<td>When shared accounts or authenticators are employed, require users
to be individually authenticated before granting access to the shared
accounts or resources.</td>
<td><ul>
<li><blockquote>
<p>800-63B-4 Section 4</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td rowspan="3">IA-2(6)</td>
<td>Implement multi-factor authentication for [<em>Selection (one or
more): local; network; remote</em>] access to [<em>Selection (one or
more): privileged accounts; non-privileged accounts</em>] such
that:</td>
<td><ul>
<li><blockquote>
<p>800-63B-4 Sections 4.1, 4.1.1; 4.2, 4.2.1; 4.3, 4.3.1; 4.4, 4.4.1;
5.1.1; 5.1.3.4; 5.1.5 and subsections; 5.1.8 and subsections; 5.1.9 and
subsections; 5.2.3; 10.2.5, 10.2.8, 10.2.9, 10.3</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td><blockquote>
<p>(a) One of the factors is provided by a device separate from the
system gaining access; and</p>
</blockquote></td>
<td><ul>
<li><blockquote>
<p>800-63B-4 Sections 4.2, 4.2.1, 4.3, 4.3.1, 5.1.3.4, 5.1.5, 5.1.8,
5.1.9</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td><blockquote>
<p>(b) The device meets [<em>Assignment: organization-defined strength
of mechanism requirements</em>].</p>
</blockquote></td>
<td><ul>
<li><blockquote>
<p>800-63B-4 Section 4 and subsections, 4.5</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td>IA-2(8)</td>
<td>Implement replay-resistant authentication mechanisms for access to
[<em>Selection (one or more): privileged accounts; non-privileged
accounts</em>].</td>
<td><ul>
<li><blockquote>
<p>800-63B-4 Sections 4.2.2, 4.3.2, Table 1, 5.1.3.2, 5.1.4.2, 5.1.5.2,
5.2.5, 5.2.8, Table 4</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td>IA-2(10)</td>
<td>Provide a single sign-on capability for [<em>Assignment:
organization-defined system accounts and services</em>].</td>
<td><ul>
<li><blockquote>
<p>800-63C-4</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td>IA-2(12)</td>
<td>Accept and electronically verify Personal Identity
Verification-compliant credentials.</td>
<td>No direct mapping. However, see 800-63B-4 Section 5.1.9.2</td>
</tr>
<tr class="even">
<td>IA-2(13)</td>
<td>Implement the following out-of-band authentication mechanisms under
[<em>Assignment: organization-defined conditions</em>]: [<em>Assignment:
organization-defined out-of-band authentication</em>].</td>
<td><ul>
<li><blockquote>
<p>800-63B-4 Table 1, Section 5.1.3 and subsections; 10.2.3; 11</p>
</blockquote></li>
<li><blockquote>
<p>800-63C-4 Section 6.1.2.2</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td>IA-3</td>
<td>Uniquely identify and authenticate [<em>Assignment:
organization-defined devices and/or types of devices</em>] before
establishing a [<em>Selection (one or more): local; remote;
network</em>] connection.</td>
<td>Not Applicable – NIST 800-63 scope is limited to identity proofing
and authentication of users (such as employees, contractors, or private
individuals); devices are out of scope.</td>
</tr>
<tr class="even">
<td>IA-3(1)</td>
<td>Authenticate [<em>Assignment: organization-defined devices and/or
types of devices</em>] before establishing [<em>Selection (one or more):
local; remote; network</em>] connection using bidirectional
authentication that is cryptographically based.</td>
<td>Not Applicable – NIST 800-63 scope is limited to identity proofing
and authentication of users (such as employees, contractors, or private
individuals); devices are out of scope.</td>
</tr>
<tr class="odd">
<td>IA-3(3)</td>
<td><p>(a) Where addresses are allocated dynamically, standardize
dynamic address allocation lease information and the lease duration
assigned to devices in accordance with [<em>Assignment:
organization-defined lease information and lease duration</em>]; and</p>
<p>(b) Audit lease information when assigned to a device.</p></td>
<td>Not Applicable – NIST 800-63 scope is limited to identity proofing
and authentication of users (such as employees, contractors, or private
individuals); devices are out of scope.</td>
</tr>
<tr class="even">
<td>IA-3(4)</td>
<td>Handle device identification and authentication based on attestation
by [<em>Assignment: organization-defined configuration management
process</em>].</td>
<td>Not Applicable – NIST 800-63 scope is limited to identity proofing
and authentication of users (such as employees, contractors, or private
individuals); devices are out of scope.</td>
</tr>
<tr class="odd">
<td rowspan="4">IA-4</td>
<td><p>Manage system identifiers by:</p>
<blockquote>
<p>a. Receiving authorization from [<em>Assignment: organization-defined
personnel or roles</em>] to assign an individual, group, role, service,
or device identifier;</p>
</blockquote></td>
<td>No direct mapping. However, see 800-63A-4 Sections 4.3.4.4,
5.1.1</td>
</tr>
<tr class="even">
<td><blockquote>
<p>b. Selecting an identifier that identifies an individual, group,
role, service, or device;</p>
</blockquote></td>
<td><ul>
<li><blockquote>
<p>800-63A-3 Sections 2.1, 4 and subsections, 6.1, Table 1</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td><blockquote>
<p>c. Assigning the identifier to the intended individual, group, role,
service, or device; and</p>
</blockquote></td>
<td><ul>
<li><blockquote>
<p>800-63A-3 Sections 2.1, 4 and subsections 6.1, Table 1</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td><blockquote>
<p>d. Preventing reuse of identifiers for [Assignment:
organization-defined time period].</p>
</blockquote></td>
<td><ul>
<li><blockquote>
<p>800-63B-4 Section 4</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td>IA-4(1)</td>
<td>Prohibit the use of system account identifiers that are the same as
public identifiers for individual accounts.</td>
<td>None</td>
</tr>
<tr class="even">
<td>IA-4(4)</td>
<td>Manage individual identifiers by uniquely identifying each
individual as [<em>Assignment: organization-defined characteristic
identifying individual status</em>].</td>
<td>No direct mapping. However, see 800-63A-3 Section 6.1</td>
</tr>
<tr class="odd">
<td>IA-4(5)</td>
<td>Manage individual identifiers dynamically in accordance with
[<em>Assignment: organization-defined dynamic identifier
policy</em>].</td>
<td><ul>
<li><blockquote>
<p>800-63C-4 Section 5.2 and subsections</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td>IA-4(6)</td>
<td>Coordinate with the following external organizations for
cross-organization management of identifiers: [<em>Assignment:
organization-defined external organizations</em>].</td>
<td><ul>
<li><blockquote>
<p>800-63C-4 Section 6.3.1</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td>IA-4(8)</td>
<td>Generate pairwise pseudonymous identifiers.</td>
<td><ul>
<li><blockquote>
<p>800-63-4 Section 4.4.1</p>
</blockquote></li>
<li><blockquote>
<p>800-63B-3 Section 4</p>
</blockquote></li>
<li><blockquote>
<p>800-63C-4 Sections 5.2.2, 5.5, 6.2.5 and subsections, 9.1, 9.2</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td>IA-4(9)</td>
<td>Maintain the attributes for each uniquely identified individual,
device, or service in [<em>Assignment: organization-defined protected
central storage</em>].</td>
<td><ul>
<li><blockquote>
<p>800-63-4 Sections 2.3.1, 4.3.2</p>
</blockquote></li>
<li><blockquote>
<p>800-63A-4 Section 5.1.4</p>
</blockquote></li>
<li><blockquote>
<p>800-63C-4 Sections 5.4.2, 6.3.1</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td rowspan="9">IA-5</td>
<td><p>Manage system authenticators by:</p>
<p>a. Verifying, as part of the initial authenticator distribution, the
identity of the individual, group, role, service, or device receiving
the authenticator;</p></td>
<td><ul>
<li><blockquote>
<p>800-63-4 Sections 2.1, 4.2, 5.0, 5.1 and subsections, 5.2.2.1,
5.2.3.1, 5.3 and subsections, Figures 1 &amp; 2</p>
</blockquote></li>
<li><blockquote>
<p>800-63B-4 Sections 2 and subsections, 4 and subsections, 5 and
subsections. Suggest reading other sections as well for full
context/insight.</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td>b. Establishing initial authenticator content for any authenticators
issued by the organization;</td>
<td>None. However, see 800-63B-4 Section 6.1 and subsections</td>
</tr>
<tr class="odd">
<td>c. Ensuring that authenticators have sufficient strength of
mechanism for their intended use;</td>
<td><ul>
<li><blockquote>
<p>800-63-4 Sections 5.0, 5.1 and subsections, 5.2.2.2, 5.2.3.2, 5.3 and
subsections,</p>
</blockquote></li>
<li><blockquote>
<p>800-63B-4 Section 4 and subsections, 5 and subsections. Suggest
reading other sections as well for full context/insight.</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td>d. Establishing and implementing administrative procedures for
initial authenticator distribution, for lost or compromised or damaged
authenticators, and for revoking authenticators;</td>
<td><ul>
<li><blockquote>
<p>800-63-4 Sections 5.2.1, 5.2.2.2, 5.2.3.2, 5.3 and subsections</p>
</blockquote></li>
<li><blockquote>
<p>800-63B-4 Section 6 and subsections</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td>e. Changing default authenticators prior to first use;</td>
<td>None</td>
</tr>
<tr class="even">
<td>f. Changing or refreshing authenticators [<em>Assignment:
organization-defined time period by authenticator type</em>] or when
[<em>Assignment: organization-defined events</em>] occur;</td>
<td><ul>
<li><blockquote>
<p>800-63B-4 Sections 6.1.4, 6.2, 6.3</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td>g. Protecting authenticator content from unauthorized disclosure and
modification;</td>
<td><ul>
<li><blockquote>
<p>800-63B-4 Sections 4.1.4, 4.2.4, 4.3.4, 5.1 and subsections, 5.2.1,
5.2.3, 6.1, 6.1.1, 6.1.2.4</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td>h. Requiring individuals to take, and having devices implement,
specific controls to protect authenticators; and</td>
<td><ul>
<li><blockquote>
<p>800-63B-3 Section 5.2.1</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td>i. Changing authenticators for group or role accounts when
membership to those accounts changes.</td>
<td>None</td>
</tr>
<tr class="even">
<td rowspan="8">IA-5(1)</td>
<td><p>For password-based authentication:</p>
<blockquote>
<p>(a) Maintain a list of commonly-used, expected, or compromised
passwords and update the list [<em>Assignment: organization-defined
frequency</em>] and when organizational passwords are suspected to have
been compromised directly or indirectly;</p>
</blockquote></td>
<td><ul>
<li><blockquote>
<p>800-63B-4 Sections 5.1.1 and subsections, See also Section 10.2.1 and
Appendix A for general discussion</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td><blockquote>
<p>(b) Verify, when users create or update passwords, that the passwords
are not found on the list of commonly-used, expected, or compromised
passwords in IA-5(1)(a);</p>
</blockquote></td>
<td><ul>
<li><blockquote>
<p>800-63B-4 Section 5.1.1 and subsections</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td>(c) Transmit passwords only over cryptographically-protected
channels;</td>
<td><ul>
<li><blockquote>
<p>800-63B-4 Section 5.1.1 and subsections</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td><blockquote>
<p>(d) Store passwords using an approved salted key derivation function,
preferably using a keyed hash;</p>
</blockquote></td>
<td><ul>
<li><blockquote>
<p>800-63B-4 Section 5.1.1 and subsections, Table 4</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td>(e) Require immediate selection of a new password upon account
recovery;</td>
<td><ul>
<li><blockquote>
<p>800-63B-4 Section 6.1.2.3, 8.3</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td><blockquote>
<p>(f) Allow user selection of long passwords and passphrases, including
spaces and all printable characters;</p>
</blockquote></td>
<td><ul>
<li><blockquote>
<p>800-63B-4 Section 5.1.1 and subsections</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td><blockquote>
<p>(g) Employ automated tools to assist the user in selecting strong
password authenticators; and</p>
</blockquote></td>
<td><ul>
<li><blockquote>
<p>800-63B-4 Sections 5.1.1 and subsections</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td><blockquote>
<p>(h) Enforce the following composition and complexity rules:
[Assignment: organization-defined composition and complexity rules].</p>
</blockquote></td>
<td><ul>
<li><blockquote>
<p>800-63B-4 Section 5.1.1 and subsections</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td rowspan="3">IA-5(2)</td>
<td><p>(a) For public key-based authentication:</p>
<blockquote>
<p>(1) Enforce authorized access to the corresponding private key;
and</p>
</blockquote></td>
<td><ul>
<li><blockquote>
<p>800-63B-4 Section 5.1.6.1, 5.1.7.1, 5.1.8.1</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td><blockquote>
<p>(2) Map the authenticated identity to the account of the individual
or group; and</p>
</blockquote></td>
<td><ul>
<li><blockquote>
<p>800-63A-3 Sections 2.1, 4 and subsections, 6.1, Table 1</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td><p>(b) When public key infrastructure (PKI) is used:</p>
<blockquote>
<p>(1) Validate certificates by constructing and verifying a
certification path to an accepted trust anchor, including checking
certificate status information; and</p>
</blockquote>
<p>(2) Implement a local cache of revocation data to support path
discovery and validation.</p></td>
<td>None</td>
</tr>
<tr class="odd">
<td>IA-5(5)</td>
<td>Require developers and installers of system components to provide
unique authenticators or change default authenticators prior to delivery
and installation.</td>
<td>Not Applicable</td>
</tr>
<tr class="even">
<td>IA-5(6)</td>
<td>Protect authenticators commensurate with the security category of
the information to which use of the authenticator permits access.</td>
<td><ul>
<li><blockquote>
<p>800-63-4 Section 5 and subsections</p>
</blockquote></li>
<li><blockquote>
<p>800-63B-4 Sections 4.1.4, 4.2.4, 4.3.4, 5.2.1</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td>IA-5(7)</td>
<td>Ensure that unencrypted static authenticators are not embedded in
applications or other forms of static storage.</td>
<td>None. However, see the following regarding authenticator storage:
800-63B-4 Sections 5.1.1.2, 5.1.2.2, 5.1.3.1, 5.1.3.2, 5.1.6.1, 5.1.8.1,
5.2.7, 5.2.11</td>
</tr>
<tr class="even">
<td>IA-5(8)</td>
<td>Implement [<em>Assignment: organization-defined security
controls</em>] to manage the risk of compromise due to individuals
having accounts on multiple systems.</td>
<td><ul>
<li><blockquote>
<p>800-63-4 Section 4.4</p>
</blockquote></li>
<li><blockquote>
<p>800-63C-4 for overall guidance on Federation / SSO</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td>IA-5(9)</td>
<td>Use the following external organizations to federate credentials:
[<em>Assignment: organization-defined external organizations</em>].</td>
<td>None. This is a case-by-case decision; see 800-63C-4 for overall
guidance on Federation and collaborating and coordinating with external
entities.</td>
</tr>
<tr class="even">
<td>IA-5(10)</td>
<td>Bind identities and authenticators dynamically using the following
rules: [<em>Assignment: organization-defined binding rules</em>].</td>
<td><ul>
<li><blockquote>
<p>800-63B-4 Sections 6.1.2.4, 6.1.3</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td>IA-5(12)</td>
<td>For biometric-based authentication, employ mechanisms that satisfy
the following biometric quality requirements [<em>Assignment:
organization-defined biometric quality requirements</em>].</td>
<td><ul>
<li><blockquote>
<p>800-63B-4 Section 5.1.8</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td>IA-5(13)</td>
<td>Prohibit the use of cached authenticators after [<em>Assignment:
organization-defined time period</em>].</td>
<td>None</td>
</tr>
<tr class="odd">
<td>IA-5(14)</td>
<td>For PKI-based authentication, employ an organization-wide
methodology for managing the content of PKI trust stores installed
across all platforms, including networks, operating systems, browsers,
and applications.</td>
<td>None</td>
</tr>
<tr class="even">
<td>IA-5(15)</td>
<td>Use only General Services Administration-approved products and
services for identity, credential, and access management.</td>
<td>None</td>
</tr>
<tr class="odd">
<td>IA-5(16)</td>
<td>Require that the issuance of [<em>Assignment: organization-defined
types of and/or specific authenticators</em>] be conducted
[<em>Selection: in person; by a trusted external party</em>] before
[<em>Assignment: organization-defined registration authority</em>] with
authorization by <em>[Assignment: organization-defined personnel or
roles</em>].</td>
<td><ul>
<li><blockquote>
<p>800-63-4 Section 4.2</p>
</blockquote></li>
<li><blockquote>
<p>800-63A-4 Section 9.3, 9.4</p>
</blockquote></li>
<li><blockquote>
<p>800-63B-4 Sections 6.1 and subsections</p>
</blockquote></li>
<li><blockquote>
<p>800-63C-4 Sections 6.1.2.2</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td>IA-5(17)</td>
<td>Employ presentation attack detection mechanisms for biometric-based
authentication.</td>
<td><ul>
<li><blockquote>
<p>800-63-A-4 Table 3, Sections 5.1.1, 5.3.4, 5.4.4, 5.5.4</p>
</blockquote></li>
<li><blockquote>
<p>800-63B-4 Section 5.2.3</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td rowspan="2">IA-5(18)</td>
<td>(a) Employ [<em>Assignment: organization-defined password
managers</em>] to generate and manage passwords; and</td>
<td><ul>
<li><blockquote>
<p>800-63B-4 Section 5.1.1.2, 5.1.2.2, 5.1.1.4</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td>(b) Protect the passwords using [<em>Assignment:
organization-defined controls</em>].</td>
<td><ul>
<li><blockquote>
<p>800-63B-4 Section 5.1.1.2, 5.1.2.2, 5.1.1.4</p>
</blockquote></li>
<li><blockquote>
<p>800-63C-4 Section 12.2</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td>IA-6</td>
<td>Obscure feedback of authentication information during the
authentication process to protect the information from possible
exploitation and use by unauthorized individuals.</td>
<td><ul>
<li><blockquote>
<p>800-63B-4 Section 5.1.1.2</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td>IA-7</td>
<td>Implement mechanisms for authentication to a cryptographic module
that meet the requirements of applicable laws, executive orders,
directives, policies, regulations, standards, and guidelines for such
authentication.</td>
<td><ul>
<li><blockquote>
<p>800-63-4 Section 2.3.1</p>
</blockquote></li>
<li><blockquote>
<p>800-63B-4 Section 4, 4.3.2, 5.1.5, 5.1.8, 5.1.9, 5.1.7.1, 5.1.9.1,
Table 1</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td>IA-8</td>
<td>Uniquely identify and authenticate non-organizational users or
processes acting on behalf of non-organizational users.</td>
<td><ul>
<li><blockquote>
<p>800-63-4 Section 2.1, 4 and subsections, Appendix A.1 (Federated
Identifier, Identity, Identity Resolution)</p>
</blockquote></li>
<li><blockquote>
<p>800-63A-4 Section 4 and subsections, Section 5 and subsections.
However, best to read 800-63A-4 in full</p>
</blockquote></li>
<li><blockquote>
<p>800-63B-4 Sections 4 and subsections and 5 and subsections. However,
best to read 800-63B-4 in full</p>
</blockquote></li>
<li><blockquote>
<p>800-63C-4 Sections 4 and subsections and 5 and subsections. However,
best to read 800-63C-4 in full</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td>IA-8(1)</td>
<td>Accept and electronically verify Personal Identity
Verification-compliant credentials from other federal agencies.</td>
<td>No direct mapping. However, see 800-63A-4 Sections 4.4, 4.4.1, and
800-63C-4 for information regarding sharing with other federal agencies.
See also OMB Memo dated 10/6/2011, <em>Requirements for Accepting
Externally Issued Identity Credentials</em>.</td>
</tr>
<tr class="odd">
<td rowspan="2">IA-8(2)</td>
<td>(a) Accept only external authenticators that are NIST-compliant;
and</td>
<td><ul>
<li><blockquote>
<p>800-63-4 Section 2.3.1</p>
</blockquote></li>
<li><blockquote>
<p>800-63A-4 Sections 4.3.2 (6), 5.3.4, 5.5.4</p>
</blockquote></li>
<li><blockquote>
<p>800-63B-4 Section 4 and subsections, 5 and subsections, 6.1.2.4</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td>(b) Document and maintain a list of accepted external
authenticators.</td>
<td><ul>
<li><blockquote>
<p>800-63A-4 Sections 2, 5, 5.1.5, 6.1, 6.3.1, 7.2</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td>IA-8(4)</td>
<td>Conform to the following profiles for identity management
[<em>Assignment: organization-defined identity management
profiles</em>].</td>
<td><ul>
<li><blockquote>
<p>800-63-4 Sections 4.4, 4.4.2, References section</p>
</blockquote></li>
<li><blockquote>
<p>800-63A-4 References section</p>
</blockquote></li>
<li><blockquote>
<p>800-63B-4 References section</p>
</blockquote></li>
<li><blockquote>
<p>800-63C-4 Sections 4, 4.1, 4.2, 4.3, 5.1.2, 6.2.3, 6.3, 10.2, 10.2.2,
12 and subsections, References section</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td>IA-8(5)</td>
<td>Accept and verify federated or PKI credentials that meet
[<em>Assignment: organization-defined policy</em>].</td>
<td>None. However, see 800-63A-4 Sections 4.4, 4.4.1, and 800-63C-4 for
information regarding accepting external credentials.</td>
</tr>
<tr class="odd">
<td>IA-8(6)</td>
<td>Implement the following measures to disassociate user attributes or
identifier assertion relationships among individuals, credential service
providers, and relying parties: [<em>Assignment: organization-defined
measures</em>].</td>
<td><ul>
<li><blockquote>
<p>800-63-4 Sections 2.3.2, 5.5</p>
</blockquote></li>
<li><blockquote>
<p>800-63A-4 Section 5.1.2.1</p>
</blockquote></li>
<li><blockquote>
<p>800-63B-4 Sections 4.9.2, 4.9.3, 4.9.4</p>
</blockquote></li>
<li><blockquote>
<p>800-63C-4 Sections 5.5, 6.2.4, 6.2.5 and subsections, 6.3, 9.1</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td>IA-9</td>
<td>Uniquely identify and authenticate [<em>Assignment:
organization-defined system services and applications</em>] before
establishing communications with devices, users, or other services or
applications.</td>
<td><ul>
<li><blockquote>
<p>800-63B-4 Sections 4.1.2, 4.2.2, 4.3.2, Table 1, 5.1.2.2, 5.1.4.2,
5.1.5.2, 5.2.5, 5.2.5.1, 5.2.5.2, 7.1.3 (Devices), Table 4</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td>IA-10</td>
<td>Require individuals accessing the system to employ [Assignment:
organization-defined supplemental authentication techniques or
mechanisms] under specific [Assignment: organization-defined
circumstances or situations].</td>
<td><ul>
<li><blockquote>
<p>800-63B-4 Section 5.2.2</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td>IA-11</td>
<td>Require users to re-authenticate when [Assignment:
organization-defined circumstances or situations requiring
re-authentication].</td>
<td><ul>
<li><blockquote>
<p>800-63B-4 Sections 4.1.3, 4 4.2.3, 4.3.3, 4 7.2</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td rowspan="3">IA-12</td>
<td>a. Identity proof users that require accounts for logical access to
systems based on appropriate identity assurance level requirements as
specified in applicable standards and guidelines;</td>
<td><ul>
<li><blockquote>
<p>800-63-4 Sections 4.2, 4.3.2, 5 and subsections</p>
</blockquote></li>
<li><blockquote>
<p>800-63A-4 Section 4 and subsections, 5 and subsections</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td>b. Resolve user identities to a unique individual; and</td>
<td><ul>
<li><blockquote>
<p>800-63A-4 Sections 2, 2.1, 4.1 and subsections, 4.2, 4.3.3.1,
4.3.3.2, 4.3.3.3, 5.1.8, 6.1, 6.3.1</p>
</blockquote></li>
<li><blockquote>
<p>800-63C-4 Sections 2, 6</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td>c. Collect, validate, and verify identity evidence.</td>
<td><ul>
<li><blockquote>
<p>800-63A-4 Section 4 and subsections, 5.1.8, 5.1.9 and subsections,
5.1.10, 5.2, 5.3 and subsections, 5.4 and subsections, 5.5 and
subsections, Table 1, 7 and subsections</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td>IA-12(1)</td>
<td>Require that the registration process to receive an account for
logical access includes supervisor or sponsor authorization.</td>
<td>No direct mapping. However, see 800-63A-4 Section 5.2.2.1 for
authorization around identity attributes.</td>
</tr>
<tr class="odd">
<td>IA-12(2)</td>
<td>Require evidence of individual identification be presented to the
registration authority.</td>
<td><ul>
<li><blockquote>
<p>800-63-4 Sections 5.2.2.1, 5.3.2, 5.3.3</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td>IA-12(3)</td>
<td>Require that the presented identity evidence be validated and
verified through [Assignment: organizational defined methods of
validation and verification].</td>
<td><ul>
<li><blockquote>
<p>800-63A-4 Sections 4.3, 4.4</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td>IA-12(4)</td>
<td>Require that the validation and verification of identity evidence be
conducted in person before a designated registration authority.</td>
<td><ul>
<li><blockquote>
<p>800-63A-4 Sections 4.3.4.3, 4.4.1, 5.3.2, 5.5.7</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td>IA-12(5)</td>
<td>Require that a [Selection: registration code; notice of proofing] be
delivered through an out-of-band channel to verify the users address
(physical or digital) of record.</td>
<td><ul>
<li><blockquote>
<p>800-63A-4 Sections 5.1.6, 5.1.7</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td>IA-12(6)</td>
<td>Accept externally-proofed identities at [Assignment:
organization-defined identity assurance level].</td>
<td><ul>
<li><blockquote>
<p>800-63C-4 Section 4</p>
</blockquote></li>
</ul></td>
</tr>
</tbody>
</table>

# Policy Crosswalk

## Policy Crosswalk Overview Table

This table presents a high-level summary of the relationship of controls
in 800-53 to sections in the 800-63 set of documents. Because we are
mapping between requirements in each document, only the *normative*
sections of 800-63 are included in the mapping. Informative sections are
excluded.

Empty, light-gray cells identify controls for which none of the sections
can be directly mapped.

When a section appears with an asterisk (\*), this indicates that the
reference includes the subsections as well as the section itself.

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr class="header">
<th>800-53 Control</th>
<th>800-63 Section</th>
<th>800-63A Section</th>
<th>800-63B Section</th>
<th>800-63c Section</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>IA-1 a.1 (a)</td>
<td><a
href="#identify-impact-categories-and-potential-harms"><u>5.1.2</u></a>,
<a href="#identify-compensating-controls"><u>5.3.2</u></a>, <a
href="#identify-supplemental-controls"><u>5.3.3</u></a>, <a
href="#privacy-requirements-1"><u>5.5</u></a></td>
<td><a
href="#additional-requirements-for-federal-agencies"><u>5.1.5</u></a></td>
<td></td>
<td><a href="#trust-agreements"><u>5.1</u></a>, <a
href="#bilateral-trust-agreements"><u>5.1.1</u></a>, <a
href="#multilateral-trust-agreements"><u>5.1.2</u></a></td>
</tr>
<tr class="even">
<td>IA-1 a.1 (b)</td>
<td><a href="#digital-identity-risk-management"><u>5</u></a></td>
<td><a href="#superior-evidence-requirements"><u>4.3.3.3</u></a>, <a
href="#privacy-risk-assessment"><u>5.1.2.1</u></a>, <a
href="#general-security-requirements"><u>5.1.4</u></a>, <a
href="#additional-requirements-for-federal-agencies"><u>5.1.5</u></a>,
<a href="#requirements-for-use-of-biometrics"><u>5.1.8</u></a>, <a
href="#requirements-for-interacting-with-minors"><u>5.1.10</u></a></td>
<td><a href="#authentication-assurance-levels"><u>4.</u></a>, <a
href="#authenticator-and-verifier-requirements"><u>4.1.2</u></a>, <a
href="#mapping-of-sp800-53-ia-to-sp-800-63"><u>4.1.4</u></a>, <a
href="#records-retention-policy"><u>4.1.5</u></a>, <a
href="#authenticator-and-verifier-requirements-1"><u>4.2.2</u></a>, <a
href="#mapping-of-sp800-53-ia-to-sp-800-63-1"><u>4.2.4</u></a>, <a
href="#records-retention-policy-1"><u>4.2.5</u></a>, <a
href="#authenticator-and-verifier-requirements-2"><u>4.3.2</u></a>, <a
href="#mapping-of-sp800-53-ia-to-sp-800-63-2"><u>4.3.4</u></a>, <a
href="#records-retention-policy-2"><u>4.3.5</u></a>, <a
href="#privacy-requirements"><u>4.4</u></a>, <a
href="#memorized-secret-verifiers"><u>5.1.1.2</u></a>, <a
href="#look-up-secret-authenticators"><u>5.1.2.1</u></a>, <a
href="#out-of-band-verifiers"><u>5.1.3.2</u></a>, <a
href="#single-factor-otp-authenticators"><u>5.1.4.1</u></a>, <a
href="#multi-factor-otp-authenticators"><u>5.1.5.1</u></a>, <a
href="#single-factor-cryptographic-device-authenticators"><u>5.1.7.1</u></a>,
<a
href="#multi-factor-cryptographic-device-authenticators"><u>5.1.9.1</u></a>,
<a href="#use-of-biometrics"><u>5.2.3</u></a>, <a
href="#attestation"><u>5.2.4</u></a>, <a
href="#phishing-verifier-impersonation-resistance"><u>5.2.5</u></a>, <a
href="#connected-authenticators"><u>5.2.12</u></a>, <a
href="#account-recovery"><u>6.1.2.3</u></a>, <a
href="#session-bindings"><u>7.1</u></a></td>
<td><a href="#federation-assurance-level-fal"><u>4</u></a>, <a
href="#federation-assurance-level-2-fal2"><u>4.2,</u></a> <a
href="#federation-assurance-level-3-fal3"><u>4.3</u></a>,</td>
</tr>
<tr class="odd">
<td>IA-1 a. 2</td>
<td><a href="#initial-assurance-level-selection"><u>5.2.3</u></a>, <a
href="#tailor-and-document-assurance-levels"><u>5.3</u></a></td>
<td><a href="#identify-impacted-entities"><u>5.1.1</u></a>, <a
href="#requirements-for-interacting-with-minors"><u>5.1.10</u></a></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>IA-1 b</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><p>IA-1 c.1</p>
<p>IA-1 c.2</p></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>IA-2</td>
<td></td>
<td><a href="#subscriber-accounts-1"><u>6.1</u></a></td>
<td><p>Internal Users:</p>
<p><a
href="https://docs.google.com/document/d/1CO10AnG9grI7RKJ8-o2NthxvEqMGihUpC1iuD7TYlyA/edit?pli=1#heading=h.tpegfw5de1xi"><u>4</u></a></p>
<p>CSPs:</p>
<p><a href="#authenticator-binding"><u>6.1</u></a></p></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-2(1)</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>IA-2(2)</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-2(5)</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>IA-2(6)</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-2(6)(a)</td>
<td></td>
<td></td>
<td><a href="#permitted-authenticator-types-1"><u>4.2.1</u></a>, <a
href="#permitted-authenticator-types-2"><u>4.3.1</u></a>, <a
href="#multi-factor-cryptographic-device-authenticators"><u>5.1.9.1</u></a></td>
<td></td>
</tr>
<tr class="even">
<td>IA-2(6)(b)</td>
<td></td>
<td></td>
<td><a
href="#authenticator-and-verifier-requirements-1"><u>4.2.2</u></a>,, <a
href="#authenticator-and-verifier-requirements-2"><u>4.3.2</u></a></td>
<td></td>
</tr>
<tr class="odd">
<td>IA2(8)</td>
<td></td>
<td></td>
<td><a
href="#authenticator-and-verifier-requirements-1"><u>4.2.2</u></a>, <a
href="#authenticator-and-verifier-requirements-2"><u>4.3.2</u></a>, <a
href="#out-of-band-verifiers"><u>5.1.3.2</u></a>, <a
href="#single-factor-otp-verifiers"><u>5.1.4.2</u></a>, <a
href="#multi-factor-otp-verifiers"><u>5.1.5.2</u></a></td>
<td></td>
</tr>
<tr class="even">
<td>IA-2(10)</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-2(12)</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>IA-2(13)</td>
<td></td>
<td></td>
<td><a href="#out-of-band-devices"><u>5.1.3*</u></a>, <a
href="#phishing-verifier-impersonation-resistance"><u>5.2.5</u></a></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-3</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>IA-4 a.</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-4 b.</td>
<td></td>
<td><a href="#subscriber-accounts-1"><u>6.1</u></a></td>
<td></td>
<td><a href="#rp-subscriber-accounts"><u>5.4</u></a>, <a
href="#provisioning-models"><u>5.4.1</u></a></td>
</tr>
<tr class="even">
<td>IA-4 c.</td>
<td></td>
<td><a href="#subscriber-accounts-1"><u>6.1</u></a></td>
<td></td>
<td><a href="#rp-subscriber-accounts"><u>5.4</u></a>, <a
href="#provisioning-models"><u>5.4.1</u></a></td>
</tr>
<tr class="odd">
<td>IA-4 d.</td>
<td></td>
<td></td>
<td><a href="#authentication-assurance-levels"><u>4.</u></a></td>
<td></td>
</tr>
<tr class="even">
<td>IA-4(1)</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-4(4)</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>IA-4(5)</td>
<td></td>
<td></td>
<td></td>
<td><a href="#provisioning-models"><u>5.4.1</u></a></td>
</tr>
<tr class="odd">
<td>IA-4(6)</td>
<td></td>
<td></td>
<td></td>
<td><a href="#trust-agreements"><u>5.1</u></a>, <a
href="#multilateral-trust-agreements"><u>5.1.2</u></a></td>
</tr>
<tr class="even">
<td>IA-4(8)</td>
<td></td>
<td></td>
<td></td>
<td><a href="#privacy-requirements-1"><u>5.5</u></a>, <a
href="#pairwise-pseudonymous-identifiers"><u>6.2.5</u></a>*</td>
</tr>
<tr class="odd">
<td>IA-4(9)</td>
<td></td>
<td><a href="#subscriber-accounts-1"><u>6.1</u></a></td>
<td></td>
<td><a href="#attribute-synchronization"><u>5.4.2</u></a>, <a
href="#attribute-providers"><u>6.3.1</u></a></td>
</tr>
<tr class="even">
<td>IA-5 a.</td>
<td><a href="#assurance-levels"><u>5.2.1</u></a></td>
<td><a href="#identity-verification-methods"><u>4.4.1</u></a>, <a
href="#identity-verification-requirements"><u>5.3.4</u></a>, <a
href="#identity-verification-requirements-1"><u>5.4.4</u></a>*, <a
href="#identity-verification-requirements-2"><u>5.5.4</u></a>, <a
href="#in-person-proofing-requirements"><u>5.5.7</u></a></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-5 b.</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>IA-5 c.</td>
<td><a href="#assurance-levels"><u>5.2.1</u></a></td>
<td></td>
<td>This is a generic requirement, which is addressed by most of
sections 4*, 5*</td>
<td></td>
</tr>
<tr class="odd">
<td>IA-5 d.</td>
<td></td>
<td></td>
<td>Details of potential procedures to satisfy this requirement are
contained in 6*</td>
<td></td>
</tr>
<tr class="even">
<td>IA-5 e.</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-5 f.</td>
<td></td>
<td></td>
<td><a href="#renewal"><u>6.1.4</u></a></td>
<td></td>
</tr>
<tr class="even">
<td>IA-5 g.</td>
<td></td>
<td></td>
<td><a href="#authenticator-and-verifier-requirements"><u>4.1.2</u></a>,
<a href="#mapping-of-sp800-53-ia-to-sp-800-63"><u>4.1.4</u></a>, <a
href="#authenticator-and-verifier-requirements-1"><u>4.2.2</u></a>, <a
href="#mapping-of-sp800-53-ia-to-sp-800-63-1"><u>4.2.4</u></a>, <a
href="#authenticator-and-verifier-requirements-2"><u>4.3.2</u></a>, <a
href="#mapping-of-sp800-53-ia-to-sp-800-63-2"><u>4.3.4</u></a>, <a
href="#memorized-secret-verifiers"><u>5.1.1.2</u></a>, <a
href="#look-up-secret-authenticators"><u>5.1.2.1</u></a>, <a
href="#look-up-secret-verifiers"><u>5.1.2.2</u></a>, <a
href="#out-of-band-authenticators"><u>5.1.3.1</u></a>, <a
href="#authentication-using-the-public-switched-telephone-network"><u>5.1.3.3</u></a>,
<a href="#multi-factor-out-of-band-authenticators"><u>5.1.3.4</u></a>,
<a href="#single-factor-otp-verifiers"><u>5.1.4.2</u></a>, <a
href="#multi-factor-otp-authenticators"><u>5.1.5.1</u></a>, <a
href="#multi-factor-otp-verifiers"><u>5.1.5.2</u></a>, <a
href="#single-factor-cryptographic-software-authenticators"><u>5.1.6.1</u></a>,
<a
href="#single-factor-cryptographic-device-authenticators"><u>5.1.7.1</u></a>,
<a
href="#single-factor-cryptographic-device-verifiers"><u>5.1.7.2</u></a>,
<a
href="#multi-factor-cryptographic-software-authenticators"><u>5.1.8.1</u></a>,
<a
href="#multi-factor-cryptographic-device-authenticators"><u>5.1.9.1</u></a>,
<a href="#physical-authenticators"><u>5.2.1</u></a>, <a
href="#use-of-biometrics"><u>5.2.3</u></a>, <a
href="#activation-secrets"><u>5.2.11</u></a>, <a
href="#connected-authenticators"><u>5.2.12</u></a>, <a
href="#authenticator-binding"><u>6.1</u></a>, <a
href="#binding-at-enrollment"><u>6.1.1</u></a></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-5 h.</td>
<td></td>
<td></td>
<td><a href="#authenticator-and-verifier-requirements"><u>4.1.2</u></a>,
<a href="#authenticator-and-verifier-requirements-1"><u>4.2.2</u></a>,
<a href="#out-of-band-authenticators"><u>5.1.3.1</u></a>, <a
href="#multi-factor-out-of-band-authenticators"><u>5.1.3.4</u></a>, <a
href="#multi-factor-otp-authenticators"><u>5.1.5.1</u></a>, <a
href="#single-factor-cryptographic-software-authenticators"><u>5.1.6.1</u></a>,
<a
href="#single-factor-cryptographic-device-authenticators"><u>5.1.7.1</u></a>,
<a
href="#multi-factor-cryptographic-software-authenticators"><u>5.1.8.1</u></a>,
<a
href="#multi-factor-cryptographic-device-authenticators"><u>5.1.9.1</u></a>,
<a href="#physical-authenticators"><u>5.2.1</u></a>, <a
href="#connected-authenticators"><u>5.2.12</u></a>,</td>
<td></td>
</tr>
<tr class="even">
<td>IA-5 i.</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-5 (1) (a)</td>
<td></td>
<td></td>
<td><a href="#memorized-secrets"><u>5.1.1</u></a>*</td>
<td></td>
</tr>
<tr class="even">
<td>IA-5 (1) (b)</td>
<td></td>
<td></td>
<td><a href="#memorized-secret-verifiers"><u>5.1.1.2</u></a></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-5 (1) (c)</td>
<td></td>
<td></td>
<td><a href="#memorized-secret-verifiers"><u>5.1.1.2</u></a></td>
<td></td>
</tr>
<tr class="even">
<td>IA-5 (1) (d)</td>
<td></td>
<td></td>
<td><a href="#memorized-secret-verifiers"><u>5.1.1.2</u></a></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-5 (1) (e)</td>
<td></td>
<td></td>
<td><a href="#account-recovery"><u>6.1.2.3</u></a></td>
<td></td>
</tr>
<tr class="even">
<td>IA-5 (1) (f)</td>
<td></td>
<td></td>
<td><a href="#memorized-secret-verifiers"><u>5.1.1.2</u></a></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-5 (1) (g)</td>
<td></td>
<td></td>
<td><a href="#memorized-secret-verifiers"><u>5.1.1.2</u></a></td>
<td></td>
</tr>
<tr class="even">
<td>IA-5 (1) (h)</td>
<td></td>
<td></td>
<td><a href="#memorized-secret-authenticators"><u>5.1.1.1</u></a>, <a
href="#memorized-secret-verifiers"><u>5.1.1.2</u></a></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-5 (2) (a) (1)</td>
<td></td>
<td></td>
<td><a
href="#single-factor-cryptographic-software-authenticators"><u>5.1.6.1</u></a>,
<a
href="#single-factor-cryptographic-device-authenticators"><u>5.1.7.1</u></a>,
<a
href="#multi-factor-cryptographic-software-authenticators"><u>5.1.8.1</u></a>,
<a href="#requirements-for-trusted-referees"><u>5.1.9.1</u></a></td>
<td></td>
</tr>
<tr class="even">
<td>IA-5 (2) (a) (2)</td>
<td></td>
<td><a href="#subscriber-accounts-1"><u>6.1</u></a></td>
<td><a href="#authenticator-binding"><u>6.1</u></a>, <a
href="#binding-at-enrollment"><u>6.1.1</u></a></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-5 (2) (b)</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>IA-5 (5)</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-5 (6)</td>
<td></td>
<td></td>
<td><a href="#mapping-of-sp800-53-ia-to-sp-800-63"><u>4.1.4</u></a>, <a
href="#mapping-of-sp800-53-ia-to-sp-800-63-1"><u>4.2.4</u></a>, <a
href="#mapping-of-sp800-53-ia-to-sp-800-63-2"><u>4.3.4</u></a>, <a
href="#physical-authenticators"><u>5.2.1</u></a></td>
<td></td>
</tr>
<tr class="even">
<td>IA-5 (7)</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-5 (8)</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>IA-5 (9)</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-5 (10)</td>
<td></td>
<td></td>
<td><a href="#external-authenticator-binding"><u>6.1.2.4</u></a>, <a
href="#binding-to-a-subscriber-provided-authenticator"><u>6.1.3</u></a></td>
<td></td>
</tr>
<tr class="even">
<td>IA-5 (12)</td>
<td></td>
<td></td>
<td><a href="#use-of-biometrics"><u>5.2.3</u></a></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-5 (13)</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>IA-5 (14)</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-5 (15)</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>IA-5 (16)</td>
<td></td>
<td></td>
<td><a href="#authenticator-binding"><u>6.1</u></a>, <a
href="#binding-at-enrollment"><u>6.1.1</u></a></td>
<td><a href="#rp-managed-bound-authenticators"><u>6.1.2.2</u></a></td>
</tr>
<tr class="odd">
<td>IA-5 (17)</td>
<td></td>
<td></td>
<td><a href="#use-of-biometrics"><u>5.2.3</u></a></td>
<td></td>
</tr>
<tr class="even">
<td>IA-5 (18) (a)/(b)</td>
<td></td>
<td></td>
<td><a href="#memorized-secret-verifiers"><u>5.1.1.2</u></a></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-6</td>
<td></td>
<td></td>
<td><a href="#memorized-secret-verifiers"><u>5.1.1.2</u></a></td>
<td></td>
</tr>
<tr class="even">
<td>IA-7</td>
<td></td>
<td></td>
<td><a
href="#single-factor-cryptographic-device-authenticators"><u>5.1.7.1</u></a>,
<a href="#multi-factor-cryptographic-software"><u>5.1.8</u></a>, <a
href="#multi-factor-cryptographic-devices"><u>5.1.9</u></a>, <a
href="#requirements-for-trusted-referees"><u>5.1.9.1</u></a></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-8</td>
<td></td>
<td><a href="#subscriber-accounts-1"><u>6.1</u></a></td>
<td><a href="#authentication-assurance-levels"><u>4</u></a></td>
<td><a href="#rp-subscriber-accounts"><u>5.4</u></a>, <a
href="#assertions"><u>6</u></a>, <a
href="#general-requirements-1"><u>6.2.5.1</u></a></td>
</tr>
<tr class="even">
<td>IA-8 (1)</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-8 (2) (a)</td>
<td></td>
<td><a
href="#characteristics-of-acceptable-digital-evidence"><u>4.3.2</u></a>,
<a href="#identity-verification-requirements"><u>5.3.4</u></a>, <a
href="#remote-identity-proofing"><u>5.4.4.1</u></a>, <a
href="#identity-verification-requirements-2"><u>5.5.4</u></a></td>
<td><a href="#authentication-assurance-levels"><u>4</u></a>, <a
href="#permitted-authenticator-types"><u>4.1.1</u></a>, <a
href="#permitted-authenticator-types-1"><u>4.2.1</u></a>, <a
href="#authentication-assurance-level-3"><u>4.3</u></a>, <a
href="#permitted-authenticator-types-2"><u>4.3.1</u></a></td>
<td></td>
</tr>
<tr class="even">
<td>IA-8 (2) (b)</td>
<td><a
href="#identify-impact-categories-and-potential-harms"><u>5.1.2</u></a>,
<a href="#selecting-initial-ial"><u>5.2.3</u></a>, <a
href="#selecting-initial-aal"><u>5.2.3.2</u></a></td>
<td><a
href="#additional-requirements-for-federal-agencies"><u>5.1.5</u></a></td>
<td></td>
<td><a href="#trust-agreements"><u>5.1</u></a>, <a
href="#bilateral-trust-agreements"><u>5.1.1</u></a></td>
</tr>
<tr class="odd">
<td>IA-8 (4)</td>
<td></td>
<td></td>
<td><a href="#verifier-compromise-resistance"><u>5.2.7</u></a></td>
<td><a href="#federation-assurance-level-fal"><u>4</u></a>, <a
href="#federation-assurance-level-1-fal1"><u>4.1</u></a>, <a
href="#federation-assurance-level-2-fal2"><u>4.2</u></a>, <a
href="#federation-assurance-level-3-fal3"><u>4.3</u></a>, <a
href="#multilateral-trust-agreements"><u>5.1.2</u></a></td>
</tr>
<tr class="even">
<td>IA-8 (5)</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-8 (6)</td>
<td></td>
<td><a href="#privacy-risk-assessment"><u>5.1.2.1</u></a></td>
<td><a href="#authentication-assurance-levels"><u>4.</u></a></td>
<td><a href="#privacy-requirements-1"><u>5.5</u></a>, <a
href="#pairwise-pseudonymous-identifiers"><u>6.2.5*</u></a></td>
</tr>
<tr class="even">
<td>IA-9</td>
<td></td>
<td></td>
<td><a href="#authenticator-and-verifier-requirements"><u>4.1.2</u></a>,
<a href="#verifier-name-binding"><u>5.2.5.2</u></a></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-10</td>
<td></td>
<td></td>
<td><a href="#rate-limiting-throttling"><u>5.2.2</u></a></td>
<td></td>
</tr>
<tr class="even">
<td>IA-11</td>
<td></td>
<td></td>
<td><a href="#reauthentication"><u>4.1.3</u></a>, <a
href="#reauthentication-1"><u>4.2.3</u></a>, <a
href="#reauthentication-2"><u>4.3.3</u></a>, <a
href="#reauthentication-3"><u>7.2</u></a></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-12 a.</td>
<td><a href="#selecting-initial-ial"><u>5.2.3.1</u></a></td>
<td><a href="#identity-verification-methods"><u>4.4.1</u></a>, <a
href="#evidence-collection"><u>5.3.2.1</u></a>, <a
href="#identity-verification-requirements"><u>5.3.4</u></a>, <a
href="#identity-verification-requirements-1"><u>5.4.4</u></a>*, <a
href="#identity-verification-requirements-2"><u>5.5.4</u></a>, <a
href="#in-person-proofing-requirements"><u>5.5.7</u></a>, <a
href="#requirements-for-ial3-supervised-remote-identity-proofing"><u>5.5.8</u></a>,</td>
<td></td>
<td><a href="#requesting-and-processing-xals"><u>4.4</u></a></td>
</tr>
<tr class="even">
<td>IA-12 b.</td>
<td></td>
<td><a
href="#additional-privacy-protective-measures"><u>5.1.2.2</u></a></td>
<td></td>
<td><a href="#assertions"><u>6</u></a>, <a
href="#pairwise-pseudonymous-identifiers"><u>6.2.5.1</u></a></td>
</tr>
<tr class="odd">
<td>IA-12 c.</td>
<td></td>
<td><a
href="#identity-validation-and-identity-evidence-collection"><u>4.3</u></a>,
<a
href="#characteristics-of-acceptable-physical-evidence"><u>4.3.1</u></a>,
<a
href="#characteristics-of-acceptable-digital-evidence"><u>4.3.2</u></a>,
<a href="#evidence-strength-requirements"><u>4.3.3</u></a>*, <a
href="#identity-evidence-and-attribute-validation"><u>4.3.4</u></a>*, <a
href="#identify-supplemental-controls"><u>5.3.3</u></a>, <a
href="#evidence-and-core-attribute-collection-requirements"><u>5.4.2</u></a>*,
<a
href="#evidence-and-core-attributes-validation-requirements-1"><u>5.4.3</u></a>,
<a href="#evidence-collection-2"><u>5.5.2.1</u></a>, <a
href="#validation-requirements"><u>5.5.3</u></a>*, <a
href="#identity-verification-requirements-2"><u>5.5.4</u></a></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>IA-12 (1)</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-12 (2)</td>
<td></td>
<td><a href="#identity-verification-methods"><u>4.4.1</u></a>, <a
href="#evidence-collection"><u>5.3.2.1</u></a>, <a
href="#evidence-collection-1"><u>5.4.2.1</u></a>, <a
href="#in-person-proofing-requirements"><u>5.5.7</u></a>, <a
href="#requirements-for-ial3-supervised-remote-identity-proofing"><u>5.5.8</u></a></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>IA-12 (3)</td>
<td></td>
<td><a href="#evidence-strength-requirements"><u>4.3.3</u></a>*, <a
href="#identity-evidence-and-attribute-validation"><u>4.3.4</u></a>, <a
href="#evidence-validation"><u>4.3.4.1</u></a>, <a
href="#requirements-for-ial3-supervised-remote-identity-proofing"><u>5.5.8</u></a></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-12 (4)</td>
<td></td>
<td><a href="#identity-verification-methods"><u>4.4.1</u></a>, <a
href="#in-person-proofing-requirements"><u>5.5.7</u></a></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>IA-12 (5)</td>
<td></td>
<td><a href="#requirements-for-enrollment-codes"><u>5.1.6</u></a>, <a
href="#requirements-for-notifications-of-identity-proofing"><u>5.1.7</u></a></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>IA-12 (6)</td>
<td></td>
<td></td>
<td></td>
<td><a href="#requesting-and-processing-xals"><u>4.4</u></a></td>
</tr>
</tbody>
</table>

## Detailed Policy Crosswalk

## 800-63-4

<table>
<colgroup>
<col style="width: 71%" />
<col style="width: 28%" />
</colgroup>
<thead>
<tr class="header">
<th>NIST 800-63 Reference</th>
<th>800-53 rev 5 control</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><h3 id="purpose-informative">1. Purpose (Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="introduction-informative">2. Introduction
(Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="definitions-and-abbreviations-informative">3. Definitions
and Abbreviations (Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="digital-identity-model-informative">4. Digital Identity
Model (Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="digital-identity-risk-management">5. Digital Identity Risk
Management</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Organizations <strong>SHOULD</strong> adapt and modify this overall
approach to meet organizational processes, governance, and integration
with enterprise risk management practices.</td>
<td>IA-1 a.1 (b)</td>
</tr>
<tr class="odd">
<td>At a minimum, organizations <strong>SHALL</strong> ensure that each
step is executed and the normative mandates and outcomes of each step
are completed and documented regardless of operational approach and
enabling tools.</td>
<td>IA-1 a.1 (b)</td>
</tr>
<tr class="even">
<td><h3 id="conduct-initial-impact-assessment">5.1 Conduct Initial
Impact Assessment</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="identify-impacted-entities">5.1.1. ​​Identify Impacted
Entities</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Accordingly, impact assessments <strong>SHALL</strong> include
individuals using the system or application in addition to the
organization itself.</td>
<td></td>
</tr>
<tr class="odd">
<td>Additionally, organizations <strong>SHOULD</strong> identify other
entities, such as mission partners, communities, and those identified in
<a
href="https://pages.nist.gov/800-63-4/sp800-63.html#ref-SP800-30">[SP800-30]</a>,
that need to be specifically included based on mission and business
needs.</td>
<td></td>
</tr>
<tr class="even">
<td>At a minimum, agencies <strong>SHALL</strong> document all entities
to which impacts will be assessed when conducting their impact
analysis.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="identify-impact-categories-and-potential-harms">5.1.2.
Identify Impact Categories and Potential Harms</h3></td>
<td></td>
</tr>
<tr class="even">
<td><p>Initial assurance levels for digital transactions
<strong>SHALL</strong> be determined by assessing the potential impact
of, at a minimum, each of the following categories:</p>
<ul>
<li><p>Damage to mission delivery</p></li>
<li><p>Damage to trust or reputation</p></li>
<li><p>Loss of sensitive information</p></li>
<li><p>Damage to or loss of economic stability</p></li>
<li><p>Loss of life or damage to safety, health, or environmental
stability</p></li>
<li><p>Noncompliance with laws, regulations, and/or contractual
obligations</p></li>
</ul></td>
<td>IA-8 (2) (b)</td>
</tr>
<tr class="odd">
<td>Organizations <strong>SHOULD</strong> include additional impact
categories as appropriate based on their mission.</td>
<td></td>
</tr>
<tr class="even">
<td>Each impact category <strong>SHALL</strong> be documented and
consistently applied across different applications assessed by the
organization.</td>
<td>IA-1 a.1 (a), IA-8 (2) (b)</td>
</tr>
<tr class="odd">
<td>Agencies <strong>SHOULD</strong> consider specific harms for each of
the defined impact categories to better inform their impact
analysis.</td>
<td></td>
</tr>
<tr class="even">
<td>Identification of harms for each category <strong>SHALL</strong> be
done for each of the entities identified during “entity identification”
process.</td>
<td>IA-1 a.1 (a)</td>
</tr>
<tr class="odd">
<td><h3 id="identify-potential-impact-levels">5.1.3. Identify Potential
Impact Levels</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Each assurance level, IAL, AAL, and FAL (if accepting or asserting a
federated identity) <strong>SHALL</strong> be evaluated separately.
Ideally, any evaluation will include different viewpoints such as harm
to individuals, the organization, other organizations, and the nation as
applicable to successful delivery of the organization’s mission.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="impact-analysis">5.1.4. Impact Analysis</h3></td>
<td></td>
</tr>
<tr class="even">
<td>To determine the appropriate level of assurance of the user’s
asserted identity, organizations <strong>SHALL</strong> assess the
potential risks and identify measures to minimize their impact.</td>
<td></td>
</tr>
<tr class="odd">
<td>Organizations <strong>SHALL</strong> assess the risk of identity
proofing, authentication, and federation failures separately to
determine the required assurance level for each transaction.</td>
<td></td>
</tr>
<tr class="even">
<td>This process <strong>SHALL</strong> include consideration of
potentially varying impacts of harms to different entities impacted by
the digital identity system, as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63.html#impctEnt">Sec.
5.1.1</a>.</td>
<td></td>
</tr>
<tr class="odd">
<td>Entities <strong>SHOULD</strong> consider the impact of specific
modes of failures related to identity proofing, authentication, and
federation</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="select-initial-assurance-levels">5.2. Select Initial
Assurance Levels</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="assurance-levels">5.2.1. Assurance Levels</h3></td>
<td></td>
</tr>
<tr class="even">
<td><p>An organization RP <strong>SHALL</strong> select, based on
cybersecurity risk and mission needs, the following individual initial
assurance levels:</p>
<ul>
<li><p><strong>IAL</strong>: The robustness of the identity proofing
process to confidently determine the identity of an individual. IAL is
selected to mitigate potential identity proofing failures.</p></li>
<li><p><strong>AAL</strong>: The robustness of the authentication
process itself, and the binding between an authenticator and a specific
individual’s identifier. AAL is selected to mitigate potential
authentication failures.</p></li>
<li><p><strong>FAL</strong>: The robustness of the federation process
used to communicate authentication and attribute information (if
applicable) to an RP from an IdP. FAL is optional as not all digital
systems will leverage federated identity architectures. FAL is selected
to mitigate potential federation failures.</p></li>
</ul></td>
<td><p>IA-5 a.</p>
<p>IA-5 c.</p></td>
</tr>
<tr class="odd">
<td><h3 id="xal-descriptions">5.2.2. xAL Descriptions</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="identity-assurance-level">5.2.2.1. Identity Assurance
Level</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="authentication-assurance-level">5.2.2.2. Authentication
Assurance Level</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="federation-assurance-level">5.2.2.3. Federation Assurance
Level</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="initial-assurance-level-selection">5.2.3 Initial Assurance
Level Selection</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Organizations <strong>SHALL</strong> develop and document a process
and governance model for selecting initial assurance levels based on the
potential impact of digital identity failures. This section provides
guidance on the major elements to include in that process.</td>
<td>IA-1 a. 2, ​​IA-8 (2) (b)</td>
</tr>
<tr class="odd">
<td><h3 id="selecting-initial-ial">5.2.3.1. Selecting Initial
IAL</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Organizations <strong>SHALL</strong> use a risk-based approach to
select the most appropriate identity proofing requirements for their RP
application.</td>
<td>IA-12 a.</td>
</tr>
<tr class="odd">
<td>This initial selection <strong>SHALL</strong> be tailored, as
described in <a
href="https://pages.nist.gov/800-63-4/sp800-63.html#tailor">Sec.
5.3</a>, based on mission needs, risk tolerance, and potential impacts
to privacy, equity, and usability, before making a final IAL
determination.</td>
<td>IA-12 a.</td>
</tr>
<tr class="even">
<td>If an organization determines that identity proofing is necessary,
the initial IAL <strong>SHALL</strong> be assessed based on the
potential impacts of identity proofing failures.</td>
<td>IA-12 a.</td>
</tr>
<tr class="odd">
<td>If an organization determines that identity proofing is necessary,
the initial IAL <strong>SHALL</strong> be assessed based on the
potential impacts of identity proofing failures.</td>
<td>IA-12 a.</td>
</tr>
<tr class="even">
<td>As described in <a
href="https://pages.nist.gov/800-63-4/sp800-63.html#intlAssess">Sec.
5.1</a>, potential impacts <strong>SHALL</strong> be considered from the
perspective of the organization, individuals, other organizations, and
the nation, for harms incurred through the use or operation of the RP
application.</td>
<td>IA-12 a.</td>
</tr>
<tr class="odd">
<td>Organizations <strong>SHOULD</strong> consider the worst-case when
identifying the overall impact level of the RP application, but may use
risk management processes to tailor their initial selection when there
are differing impacts.</td>
<td>IA-12 a.</td>
</tr>
<tr class="even">
<td>When assessing the overall impact level of the RP application, the
organization <strong>SHOULD</strong> consider impacts to mission
delivery separately from other impact categories.</td>
<td>IA-12 a.</td>
</tr>
<tr class="odd">
<td>As such, the organization <strong>MAY</strong> exclude the mission
delivery category when initially identifying the overall impact level of
the RP application, as these impacts will need to be considered in the
tailoring process.</td>
<td>IA-12 a.</td>
</tr>
<tr class="even">
<td><h3 id="selecting-initial-aal">5.2.3.2. Selecting Initial
AAL</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>Organizations <strong>SHALL</strong> use a risk-based approach to
select the most appropriate authentication requirements for their RP
application.</td>
<td>IA-8 (2) (b)</td>
</tr>
<tr class="even">
<td>This initial selection <strong>SHALL</strong> be tailored, as
described in <a
href="https://pages.nist.gov/800-63-4/sp800-63.html#tailor">Sec.
5.3</a>, based on mission needs, risk tolerance, and potential impacts
to privacy, equity, and usability, before making a final AAL
determination.</td>
<td>IA-8 (2) (b)</td>
</tr>
<tr class="odd">
<td>The initial AAL <strong>SHALL</strong> be assessed based on the
potential impacts of authentication failures.</td>
<td>IA-5 (6), IA-8 (2) (b)</td>
</tr>
<tr class="even">
<td>As described in <a
href="https://pages.nist.gov/800-63-4/sp800-63.html#intlAssess">Sec.
5.1</a>, potential impacts <strong>SHALL</strong> be considered from the
perspective of the organization, individuals, other organizations, and
the nation, for harms incurred through the use or operation of the RP
application, as the level of harm from a failure could vary
significantly across these entities.</td>
<td>IA-8 (2) (b)</td>
</tr>
<tr class="odd">
<td>Organizations <strong>SHOULD</strong> consider the worst-case when
identifying the overall impact level of the RP application, but may use
risk management processes to tailor their initial selection when there
are differing impacts.</td>
<td>IA-8 (2) (b)</td>
</tr>
<tr class="even">
<td>When assessing the overall impact level of the RP application, the
organization <strong>SHOULD</strong> consider impacts to mission
delivery separately from other impact categories.</td>
<td>IA-8 (2) (b)</td>
</tr>
<tr class="odd">
<td>As such, the organization <strong>MAY</strong> exclude the mission
delivery category when initially identifying the overall impact level of
the RP application, as these impacts will need to be considered in the
tailoring process.</td>
<td>IA-8 (2) (b)</td>
</tr>
<tr class="even">
<td><h3 id="selecting-initial-fal">5.2.3.3. Selecting Initial
FAL</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>Organizations <strong>SHALL</strong> use a risk-based approach to
select the most appropriate federation requirements for their RP
application.</td>
<td></td>
</tr>
<tr class="even">
<td>This initial selection <strong>SHALL</strong> be tailored, as
described in <a
href="https://pages.nist.gov/800-63-4/sp800-63.html#tailor">Sec.
5.3</a>, based on mission needs, risk tolerance, and potential impacts
to privacy, equity, and usability, before making a final FAL
determination.</td>
<td></td>
</tr>
<tr class="odd">
<td>The initial FAL <strong>SHALL</strong> be assessed based on the
potential impacts of failures in the presentation or acceptance of
assertions in federated identity architectures.</td>
<td></td>
</tr>
<tr class="even">
<td>As described in <a
href="https://pages.nist.gov/800-63-4/sp800-63.html#intlAssess">Sec.
5.1</a>, potential impacts <strong>SHALL</strong> be considered from the
perspective of the organization, individuals, other organizations, and
the nation, for harms incurred through the use or operation of the RP
application, as the level of harm from a failure could vary
significantly across these entities.</td>
<td></td>
</tr>
<tr class="odd">
<td>Organizations <strong>SHOULD</strong> consider the worst-case when
identifying the overall impact level of the RP application, but may use
risk management processes to tailor their initial selection when there
are differing impacts.</td>
<td></td>
</tr>
<tr class="even">
<td>When assessing the overall impact level of the RP application, the
organization <strong>SHOULD</strong> consider impacts to mission
delivery separately from other impact categories.</td>
<td></td>
</tr>
<tr class="odd">
<td>Potential failures in federated architectures that could lead to
harms in mission delivery <strong>MAY</strong> be assessed by the
organization to determine if the associated impacts would be mitigated
or exacerbated by the implementation of more rigorous controls by
identity providers.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="tailor-and-document-assurance-levels">5.3. Tailor and
Document Assurance Levels</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>Organizations <strong>SHOULD</strong> implement the assessed
assurance level as defined in these guidelines.</td>
<td></td>
</tr>
<tr class="even">
<td>Therefore, organizations <strong>SHALL</strong> establish and
document an xAL tailoring process.</td>
<td>IA-1 a. 2</td>
</tr>
<tr class="odd">
<td><p>At a minimum this process:</p>
<ol type="1">
<li><p><strong>SHALL</strong> include a structured governance approach
to allow for decision-making and conflict resolution.</p></li>
<li><p><strong>SHALL</strong> document all decisions in the tailoring
process, including the assessed xALs, modified xALs, and compensating
controls in the Digital Identity Acceptance Statement (see <a
href="https://pages.nist.gov/800-63-4/sp800-63.html#IDacceptStmt">Sec.
5.3.4</a>).</p></li>
<li><p><strong>SHALL</strong> justify and document all risk-based
decisions or modifications to the initially assessed xALs in the Digital
Identity Acceptance Statement (see <a
href="https://pages.nist.gov/800-63-4/sp800-63.html#IDacceptStmt">Sec.
5.3.4</a>).</p></li>
<li><p><strong>SHOULD</strong> establish a cross-functional capability
to support subject matter analysis of xAL selection impacts in the
tailoring process.</p></li>
<li><p><strong>SHOULD</strong> be a continuous process that incorporates
real world operational data to evaluate the impacts of selected xAL
controls.</p></li>
</ol></td>
<td>IA-1 a. 2</td>
</tr>
<tr class="even">
<td><h3 id="assess-privacy-equity-usability-and-threats">5.3.1. Assess
Privacy, Equity, Usability and Threats</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>When transitioning from an initial assurance level to the final xAL
selection and implementation, organizations <strong>SHALL</strong>
conduct detailed assessments of the controls defined at the assurance
level to determine potential impacts in their operational
environment.</td>
<td></td>
</tr>
<tr class="even">
<td><p>At a minimum, organizations <strong>SHALL</strong> assess impacts
related to the following areas:</p>
<ul>
<li><p><strong>Privacy</strong> – to determine unintended consequences
to the privacy of individuals that will be subject to the controls at an
assessed xAL and of individuals affected by organizational or
third-party practices related to the establishment, management, or
federation of a digital identity.</p></li>
<li><p><strong>Equity</strong> – to determine whether implementation of
controls may create or maintain inequities across demographics or user
groups.</p></li>
<li><p><strong>Usability</strong> – to determine whether implementation
of the selected controls will result in challenges to end-user
experience.</p></li>
<li><p><strong>Threat</strong> – to determine whether the defined
assurance level will address specific threats based on environment,
threat actors, and known tactics, techniques, and procedures
(TTPs).</p></li>
</ul></td>
<td></td>
</tr>
<tr class="odd">
<td>Additionally, organizations <strong>SHOULD</strong> conduct
additional business specific assessments as appropriate to fully
represent mission and domain specific considerations not captured
here.</td>
<td></td>
</tr>
<tr class="even">
<td>These assessments <strong>SHALL</strong> be extended to any
compensating or supplemental controls as defined in <a
href="https://pages.nist.gov/800-63-4/sp800-63.html#IDCompCntls">Sec.
5.3.2</a> and <a
href="https://pages.nist.gov/800-63-4/sp800-63.html#IDSupCntrls">Sec.
5.3.3</a>.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="identify-compensating-controls">5.3.2. Identify Compensating
Controls</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Organizations <strong>SHOULD</strong> implement their identity
services per the requirements in these guidelines for their tailored
assurance level. However, where organizations are unable to implement a
specific control associated with their baseline or tailored assurance
level, they <strong>MAY</strong> select to implement a compensating
control.</td>
<td></td>
</tr>
<tr class="odd">
<td>This control <strong>MAY</strong> be a modification to a digital
identity process as defined in these guidelines, but
<strong>MAY</strong> also be applied elsewhere in an application,
transaction, or service lifecycle.</td>
<td></td>
</tr>
<tr class="even">
<td>Where compensating controls are implemented, organizations
<strong>SHALL</strong> demonstrate comparability of a chosen alternative
or document residual risk incurred by deviating from normative
requirements.</td>
<td></td>
</tr>
<tr class="odd">
<td>Organizations <strong>SHALL</strong> implement procedures to
document both the justification for any departure from normative
requirements and detail the compensating controls employed.</td>
<td>IA-1 a.1 (a)</td>
</tr>
<tr class="even">
<td><h3 id="identify-supplemental-controls">5.3.3. Identify Supplemental
Controls</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>Organizations <strong>SHOULD</strong> identify and implement
supplemental controls where they identify threats that may not be
addressed in baseline controls.</td>
<td></td>
</tr>
<tr class="even">
<td>Where organizations implement supplemental controls, these
<strong>SHALL</strong> be assessed for impacts based on the same factors
used to tailor the organization’s assurance level.</td>
<td></td>
</tr>
<tr class="odd">
<td>Supplemental controls <strong>SHALL</strong> be documented.</td>
<td>IA-1 a.1 (a)</td>
</tr>
<tr class="even">
<td><h3
id="document-results---the-digital-identity-acceptance-statement">5.3.4.
Document Results - The Digital Identity Acceptance Statement</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><p>The statement <strong>SHALL</strong> include, at a minimum:</p>
<ol type="1">
<li><p>Initial Impact Assessment Results</p></li>
<li><p>Initially assessed xAL,</p></li>
<li><p>Tailored xAL and rationale, if tailored xAL differs from
initially assessed xAL,</p></li>
<li><p>All compensating controls and their comparability or residual
risk associated with compensating controls</p></li>
<li><p>All supplemental controls</p></li>
</ol></td>
<td></td>
</tr>
<tr class="even">
<td>Federal agencies <strong>SHOULD</strong> include this information in
the system authorization package described in <a
href="https://pages.nist.gov/800-63-4/sp800-63.html#ref-SP800-37">[SP800-37]</a>.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="continuously-evaluate-and-improve">5.4. Continuously
Evaluate and Improve</h3></td>
<td></td>
</tr>
<tr class="even">
<td>To maintain pace with the constantly shifting environment in which
they operate, organizations <strong>SHOULD</strong> implement a
continuous evaluation and improvement program that leverages input from
people interacting with the identity system.</td>
<td></td>
</tr>
<tr class="odd">
<td>These programs <strong>SHOULD</strong> consider feedback from
application performance metrics, threat intelligence, fraud analytics,
assessments of equity impacts, privacy impact analysis, and user
inputs.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="cyber-fraud-and-identity-program-integrity">5.5. Cyber,
Fraud, and Identity Program Integrity</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>Organizations <strong>SHOULD</strong> establish consistent
mechanisms for the exchange of information between critical security and
fraud stakeholders.</td>
<td>IA-1 a. 1. (a)</td>
</tr>
<tr class="even">
<td>Where supporting service providers, such as CSPs, are external, this
may be complicated, but <strong>SHOULD</strong> be considered in
contractual and legal mechanisms.</td>
<td></td>
</tr>
<tr class="odd">
<td>All data collected, transmitted, or shared <strong>SHALL</strong> be
minimized and subject to a detailed privacy and legal assessment.</td>
<td></td>
</tr>
</tbody>
</table>

## 800-63A-4

<table>
<colgroup>
<col style="width: 71%" />
<col style="width: 28%" />
</colgroup>
<tbody>
<tr class="odd">
<td>NIST 800-63A Reference</td>
<td>800-53 rev 5 control</td>
</tr>
<tr class="even">
<td><h3 id="purpose-informative-1">1. Purpose (Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="introduction-informative-1">2. Introduction
(Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="definitions-and-abbreviations-informative-1">3. Definitions
and Abbreviations (Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="identity-resolution-validation-and-verification">4. Identity
Resolution, Validation, and Verification</h3></td>
<td></td>
</tr>
<tr class="even">
<td>To the extent practical, CSPs and organizations SHOULD enable
optionality when implementing their identity proofing services and
processes to promote access for those with different means,
capabilities, and technology access.</td>
<td></td>
</tr>
<tr class="odd">
<td>At a minimum, this <strong>SHOULD</strong> include accepting
multiple types and combinations of identity evidence, supporting
multiple data validation sources, enabling multiple methods for
verifying identity (e.g., use of trusted referees), multiple channels
for engagement (e.g., in-person, remote), and offering assistance
mechanisms for applicants (e.g., applicant references).</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="identity-proofing-and-enrollment">4.1. Identity Proofing and
Enrollment​​</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="identify-impacted-entities-1">4.1.1. ​​Identify Impacted
Entities</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="identity-resolution">4.2. Identity Resolution</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="identity-validation-and-identity-evidence-collection">4.3.
Identity Validation and Identity Evidence Collection</h3></td>
<td></td>
</tr>
<tr class="even">
<td>The CSP <strong>SHALL</strong> determine the acceptability of
presented identity evidence for identity proofing based on the evidence
characteristics in this section.</td>
<td>IA-12 c.</td>
</tr>
<tr class="odd">
<td><h3 id="characteristics-of-acceptable-physical-evidence">4.3.1.
Characteristics of Acceptable Physical Evidence</h3></td>
<td></td>
</tr>
<tr class="even">
<td><p>Acceptable physical evidence <strong>SHALL</strong> contain all
of the following characteristics:</p>
<ul>
<li><p>The presented document contains the printed name of the
applicant. (See Sec. 10.1 - Equity and Resolution - for guidance on
dealing with a printed name that varies from the applicant’s claimed
identity.)</p></li>
<li><p>The presented document contains at least one printed reference
number.</p></li>
<li><p>The presented document contains the printed name of the issuer of
the document.</p></li>
<li><p>The issuer of the document performed identity proofing of the
applicant prior to issuing the document.</p></li>
<li><p>There is reasonable assurance that the document was delivered to
the intended person.</p></li>
</ul></td>
<td><p>IA-12 c.</p>
<p>IA-12 (3)</p></td>
</tr>
<tr class="odd">
<td><h3 id="characteristics-of-acceptable-digital-evidence">4.3.2.
Characteristics of Acceptable Digital Evidence</h3></td>
<td></td>
</tr>
<tr class="even">
<td><p>Acceptable digital evidence <strong>SHALL</strong> contain all of
the following characteristics:</p>
<ol type="1">
<li><p>The presented digital evidence contains the name of the applicant
as the subject of the digital information or account. (See Sec. 10.1 -
Equity and Resolution - for guidance on dealing with a name on digital
evidence that varies from the applicant’s claimed identity.)</p></li>
<li><p>The presented digital evidence contains at least one reference
(e.g., account number) or sufficient attributes to bind the digital
information to the applicant.</p></li>
<li><p>The presented digital evidence contains the name of the issuer of
the digital information.</p></li>
<li><p>The issuer of the digital evidence performed identity proofing of
the applicant prior to issuing the digital evidence.</p></li>
<li><p>There is reasonable assurance that the digital evidence was
delivered or made accessible to intended person.</p></li>
<li><p>If applicable, the presented digital evidence can be verified
through authentication at an AAL or FAL commensurate with the assessed
IAL</p></li>
</ol></td>
<td><p>IA-12 c.</p>
<p>IA-12 (3)</p>
<p>IA-8 (2) (a)</p></td>
</tr>
<tr class="odd">
<td><h3 id="evidence-strength-requirements">4.3.3. Evidence Strength
Requirements</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="fair-evidence-requirements">4.3.3.1. Fair Evidence
Requirements</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><p>In order to be considered FAIR, identity evidence
<strong>SHALL</strong> meet <em>all</em> the following requirements:</p>
<ol type="1">
<li><p>The issuing source of the evidence confirmed the claimed identity
through an identity proofing process.</p></li>
<li><p>It can be reasonably assumed that the evidence issuing process
would result in the delivery of the evidence to the person to whom it
relates.</p></li>
<li><p>The evidence contains at least one reference number, a facial
portrait, or sufficient attributes to uniquely identify the person to
whom it relates.</p></li>
<li><p>The evidence has not expired or it expired within the previous
six (6) months, or it was issued within the previous six (6) months if
it does not contain an expiration date.</p></li>
</ol></td>
<td><p>IA-12 c.</p>
<p>IA-12 (3)</p></td>
</tr>
<tr class="even">
<td><h3 id="strong-evidence-requirements">4.3.3.2. Strong Evidence
Requirements </h3></td>
<td></td>
</tr>
<tr class="odd">
<td><p>In order to be considered STRONG, identity evidence
<strong>SHALL</strong> meet <em>all</em> the following requirements:</p>
<ol type="1">
<li><p>The issuing source of the evidence confirmed the claimed identity
through written procedures designed to enable it to form a reasonable
belief that it knows the real-life identity of the person. Such
procedures are subject to recurring oversight by regulatory or
publicly-accountable institutions. For example, the Customer
Identification Program guidelines established in response to the USA
PATRIOT Act of 2001 or the <a
href="https://pages.nist.gov/800-63-4/sp800-63a.html#ref-rfr">[RedFlagsRule]</a>,
under Sec. 114 of the Fair and Accurate Credit Transaction Act of 2003
(FACT Act).</p></li>
<li><p>There is a high likelihood that the evidence issuing process
would result in the delivery of the evidence to the person to whom it
relates.</p></li>
<li><p>The evidence contains a reference number or other attributes that
uniquely identify the person to whom it relates.</p></li>
<li><p>The evidence contains a facial portrait or other biometric
characteristic of the person to whom it relates.</p></li>
<li><p>The evidence includes physical security features that make it
difficult to copy or reproduce.</p></li>
<li><p>The evidence includes an expiration date and is
unexpired.</p></li>
</ol></td>
<td><p>IA-12 c.</p>
<p>IA-12 (3)</p></td>
</tr>
<tr class="even">
<td><h3 id="superior-evidence-requirements">4.3.3.3. Superior Evidence
Requirements </h3></td>
<td></td>
</tr>
<tr class="odd">
<td><p>In order to be considered SUPERIOR, identity evidence
<strong>SHALL</strong> meet <em>all</em> the following requirements:</p>
<ol type="1">
<li><p>The issuing source of the evidence confirmed the claimed identity
by following written procedures designed to enable it to have high
confidence that the source knows the real-life identity of the subject.
Such procedures are subject to recurring oversight by regulatory or
publicly accountable institutions.</p></li>
<li><p>The issuing source visually identified the applicant and
performed further checks to confirm the existence of that
person.</p></li>
<li><p>The issuing process for the evidence ensured that it was
delivered into the possession of the person to whom it relates.</p></li>
<li><p>The evidence contains at least one reference number that uniquely
identifies the person to whom it relates.</p></li>
<li><p>The evidence contains a facial portrait or other biometric
characteristic of the person to whom it relates.</p></li>
<li><p>The evidence includes digital information that is
cryptographically signed.</p></li>
<li><p>The evidence includes physical security features that make it
difficult to copy or reproduce.</p></li>
<li><p>The evidence includes an expiration date and is
unexpired.</p></li>
</ol></td>
<td><p>IA-12 c.</p>
<p>IA-12 (3)</p></td>
</tr>
<tr class="even">
<td><h3 id="identity-evidence-and-attribute-validation">4.3.4. Identity
Evidence and Attribute Validation</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL</strong> validate all identity evidence
collected to meet evidence collection requirements and all core
attribute information required by the CSP identity service.</td>
<td>IA-12 c., IA-12 (3)</td>
</tr>
<tr class="even">
<td><h3 id="evidence-validation">4.3.4.1. Evidence Validation </h3></td>
<td></td>
</tr>
<tr class="odd">
<td><p>The CSP <strong>SHALL</strong> validate the authenticity,
accuracy, and currency of presented evidence by:</p>
<ul>
<li><p>Confirming the evidence is in the correct format and includes
complete information for the identity evidence type.</p></li>
<li><p>Confirming the evidence is not counterfeit and that it as not
been tampered with.</p></li>
<li><p>Confirming any security features.</p></li>
</ul></td>
<td>IA-12 c., IA-12(3)</td>
</tr>
<tr class="even">
<td>The CSP <strong>SHALL</strong> validate that the evidence is current
through confirmation that its expiration date has not passed or that
evidence without an expiration date was issued within the previous six
(6) months.</td>
<td>IA-12 c., IA-12(3)</td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL</strong> use the public key of the issuing
authority of the evidence to verify digitally signed evidence or
attribute data objects.</td>
<td>IA-12 c., IA-12(3)</td>
</tr>
<tr class="even">
<td><h3 id="attribute-validation">4.3.4.2 Attribute Validation</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="evidence-and-attribute-validation-methods">4.3.4.3. Evidence
and Attribute Validation Methods</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="validation-sources">4.3.4.4. Validation Sources</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="identity-verification">4.4. Identity Verification</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="identity-verification-methods">4.4.1. Identity Verification
Methods</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><p>The CSP <strong>SHALL</strong> verify the linkage of the claimed
identity to the applicant engaged in the identity proofing process
through one or more of the following methods, depending on the IAL
identity verification requirements presented in <a
href="https://pages.nist.gov/800-63-4/sp800-63a.html#ial-section">Sec.
5</a>.</p>
<ul>
<li><p><strong>Enrollment code verification</strong> as specified in <a
href="https://pages.nist.gov/800-63-4/sp800-63a.html#EnrollCodes">Sec.
5.1.6</a>.</p></li>
<li><p><strong>In-person physical comparison</strong>. The CSP operator
and applicant interact in person for the identity proofing event. The
CSP operator performs a physical comparison of the facial portrait
presented on identity evidence to the face of the applicant engaged in
the identity proofing event.</p></li>
<li><p><strong>Remote (attended and unattended) physical facial image
comparison</strong>. The CSP operator performs a physical comparison of
the facial portrait presented on identity evidence to the facial image
of the applicant engaged in the identity proofing event. The CSP
operator may interact directly with the applicant during some or all of
the identity proofing event (attended) or may conduct the comparison at
a later time (unattended) using a captured video or photograph and the
uploaded copy of the evidence. If the comparison is performed at a later
time, steps are taken to ensure the captured video or photograph was
taken from the live applicant present during the identity proofing
event.</p></li>
<li><p><strong>Automated biometric comparison</strong>. Biometric system
comparison may be performed for in-person or remote identity proofing
events. The facial portrait, or other biometric characteristic,
contained on identity evidence is compared by an automated biometric
comparison system to the facial image photograph of the live applicant
or other biometric live sample submitted by the applicant during the
identity proofing event. The automated biometric comparison system uses
a mathematical algorithm for the comparison.</p></li>
<li><p><strong>Control of a digital account</strong>. An individual is
able to demonstrate control of a digital account (e.g., online bank
account) or signed digital assertion (e.g., verifiable credentials)
through the use of authentication or federation protocols. This may be
done in person through presentation of the credential to a device or
reader, but is more likely to be done during remote identity proofing
sessions.</p></li>
</ul></td>
<td>IA-5 a., IA-12 a., IA-12 (2), IA-12 (4)</td>
</tr>
<tr class="even">
<td><h3 id="identity-assurance-level-requirements">5. Identity Assurance
Level Requirements</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="general-requirements">5.1. General Requirements</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="identity-service-documentation-and-records">5.1.1. Identity
Service Documentation and Records</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL</strong> conduct its operations according to a
practice statement that details all identity proofing processes as they
are implemented to achieve the defined IAL</td>
<td></td>
</tr>
<tr class="even">
<td><p>The practice statement <strong>SHALL</strong> include, at a
minimum:</p>
<ol type="1">
<li><p>A complete service description including the particular steps the
CSP follows to identity proof applicants at each offered assurance
level;</p></li>
<li><p>Types of identity evidence the CSP accepts to meet the evidence
strength requirements;</p></li>
<li><p>If applicable, alternative ways for an individual applicant who
does not possess the required identity evidence to complete the identity
proofing process<a
href="https://pages.nist.gov/800-63-4/sp800-63a.html#fn:alternatives">1</a>;</p></li>
<li><p>The attributes the CSP considers to be core attributes. Core
attributes include the minimum set of attributes the CSP needs to
perform identity resolution as well as any additional attributes the CSP
collects and validates for the purposes of identity proofing, fraud
mitigation, complying with laws or legal process, or conveying to
relying parties (RPs) through attribute assertions;</p></li>
<li><p>The CSP’s policy and process for dealing with identity proofing
errors;</p></li>
<li><p>The CSP’s policy and process for identifying and communicating
suspected or confirmed fraudulent accounts to RPs and affected
individuals;</p></li>
<li><p>The CSP’s policy for managing and communicating service changes
(e.g., change in data sources, integrated vendors, or biometric
algorithms) to RPs;</p></li>
<li><p>The CSP’s policy for conducting privacy risk assessments,
including the timing of its periodic reviews and specific conditions
that will trigger an updated privacy risk assessment (see <a
href="https://pages.nist.gov/800-63-4/sp800-63a.html#PrivacyReqs">Section
5.1.2</a>);</p></li>
<li><p>The CSP’s policy for conducting assessments to determine
potential equity impacts, including the timing of its periodic reviews
and any specific conditions that will trigger an out-of-cycle review
(see <a
href="https://pages.nist.gov/800-63-4/sp800-63a.html#EquityReqs">Section
5.1.3</a>); and</p></li>
</ol></td>
<td>IA-1 a. 2</td>
</tr>
<tr class="odd">
<td><h3 id="ceasing-operations">5.1.1.1. Ceasing Operations</h3></td>
<td></td>
</tr>
<tr class="even">
<td>The CSP <strong>SHALL</strong> document its policy and plan for when
it ceases its operations.</td>
<td></td>
</tr>
<tr class="odd">
<td>This plan <strong>SHALL</strong> include whether the CSP’s identity
service is subject to retention requirements and how it will protect any
sensitive data (including identity attributes, and information contained
in subscriber accounts and audit logs) during the period of
retention.</td>
<td></td>
</tr>
<tr class="even">
<td>At the end of any required retention period, the CSP
<strong>SHALL</strong> be responsible for fully disposing of or
destroying all sensitive data.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="fraud-mitigation-measures">5.1.1.2. Fraud Mitigation
Measures</h3></td>
<td></td>
</tr>
<tr class="even">
<td>The CSP <strong>SHOULD</strong> obtain additional confidence in
identity proofing using fraud mitigation measures (e.g., examining the
device characteristics of the applicant, evaluating behavioral
characteristics, and checking vital statistic repositories such as the
Death Master File (<a
href="https://pages.nist.gov/800-63-4/sp800-63a.html#ref-dmf">[DMF]</a>).</td>
<td></td>
</tr>
<tr class="odd">
<td>In the event the CSP uses fraud mitigation measures, the CSP
<strong>SHALL</strong> conduct a privacy risk assessment for these
mitigation measures.</td>
<td></td>
</tr>
<tr class="even">
<td>Such assessments <strong>SHALL</strong> include any privacy risk
mitigations (e.g., risk acceptance or transfer, limited retention, use
limitations, notice) or other technological mitigations (e.g.,
cryptography), and be documented per these guidelines.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="general-privacy-requirements">5.1.2. General Privacy
Requirements</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="privacy-risk-assessment">5.1.2.1. Privacy Risk
Assessment</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL</strong> conduct and document a privacy risk
assessment for the processes used for identity proofing and
enrollment</td>
<td></td>
</tr>
<tr class="even">
<td><p>At a minimum, the privacy risk assessment <strong>SHALL</strong>
assess the risks associated with:</p>
<ul>
<li><p>Any processing of PII for the purpose of identity proofing and
enrollment, including identity attributes, biometrics, images, video,
scans, or copies of identity evidence;</p></li>
<li><p>Any additional steps the CSP takes to verify the identity of an
applicant beyond the mandatory requirements specified herein;</p></li>
<li><p>Any processing of PII for purposes outside the scope of identity
proofing and enrollment except to comply with law or legal
process;</p></li>
<li><p>The retention schedule for identity records and PII;
and,</p></li>
<li><p>Any PII that is processed by a third party service on behalf of
the CSP.</p></li>
</ul></td>
<td></td>
</tr>
<tr class="odd">
<td>Based on the results of its privacy risk assessment, the CSP
<strong>SHALL</strong> document the measures it takes to maintain the
disassociability, predictability, manageability, confidentiality,
integrity, and availability of the PII it processes.</td>
<td>IA-8 (6)</td>
</tr>
<tr class="even">
<td>In determining such measures, the CSP <strong>SHALL</strong> consult
the <em>NIST Privacy Framework</em> <a
href="https://pages.nist.gov/800-63-4/sp800-63a.html#ref-NIST-Privacy">[NIST-Privacy]</a>
and NIST Special Publication <a
href="https://pages.nist.gov/800-63-4/sp800-63a.html#ref-SP800-53">[SP800-53]</a>.</td>
<td>IA-1 a. 1. (b)</td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL</strong> re-assess privacy risks and update
its privacy risk assessment any time it makes changes to its identity
service that affect the processing of PII</td>
<td></td>
</tr>
<tr class="even">
<td>The CSP <strong>SHALL</strong> review its privacy risk assessment
periodically, as documented in its practice statement, to ensure it
accurately reflects the current risks associated with the processing of
PII.</td>
<td></td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL</strong> make a summary of its privacy risk
assessment available to any organizations that use its services. The
summary <strong>SHALL</strong> be in sufficient detail to enable such
organizations to do due dilligence.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="additional-privacy-protective-measures">5.1.2.2. Additional
Privacy Protective Measures</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>Processing of PII <strong>SHALL</strong> be limited to the minimum
necessary to validate the existence of the claimed identity, associate
the claimed identity with the applicant, and provide RPs with attributes
they may use to make authorization decisions.</td>
<td></td>
</tr>
<tr class="even">
<td>The CSP <strong>MAY</strong> collect the Social Security Number
(SSN) as an attribute when necessary for identity resolution, in
accordance with the privacy requirements in <a
href="https://pages.nist.gov/800-63-4/sp800-63a.html#PrivacyReqs">Sec.
5.1.2</a>.</td>
<td>IA-12 b.</td>
</tr>
<tr class="odd">
<td>Additionally, CSPs <strong>SHALL</strong> implement privacy
protective techniques (e.g., transmitting and accepting derived
attribute values rather than full attribute values themselves) to limit
the proliferation and retention of SSN data. Knowledge of the SSN
<strong>SHALL NOT</strong> be considered identity evidence.</td>
<td></td>
</tr>
<tr class="even">
<td>At the time of collection, the CSP <strong>SHALL</strong> provide
explicit notice to the applicant regarding the purpose for collecting
attributes necessary for identity proofing, including whether such
attributes are voluntary or mandatory to complete the identity proofing
process, the specific attributes and other sensitive data that the CSP
intends to store in the applicant’s subsequent subscriber account, the
consequences for not providing the attributes, and the details of any
records retention requirement if one is in place.</td>
<td></td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL</strong> provide mechanisms for redress of
applicant complaints and for problems arising from the identity
proofing. These mechanisms <strong>SHALL</strong> be easy for applicants
to find and use. The CSP <strong>SHALL</strong> assess the mechanisms
for their efficacy in achieving resolution of complaints or
problems.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="general-equity-requirements">5.1.3. General Equity
Requirements</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>In support of the goal of improved equity, and as part of its
overall risk assessment process, the CSP <strong>SHALL</strong> assess
the elements of its identity service to identify processes or
technologies that can possibly result in inequitable access, treatment,
or outcomes for members of one group as compared to others. See <a
href="https://pages.nist.gov/800-63-4/sp800-63a.html#EquityConsiderations">Sec.
10</a> for a non-exhaustive list of identity proofing processes and
technologies that may be subject to inequitable access or outcomes.</td>
<td></td>
</tr>
<tr class="even">
<td><p>When assessing the risk of inequitable access, treatment, or
outcomes, the following requirements apply:</p>
<p>Based on the results of its risk assessment, the CSP
<strong>SHALL</strong> document the measures it takes to mitigate the
possibility of inequitable access, treatment, or outcomes.</p></td>
<td></td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL</strong> re-assess the risks to equitable
access, treatment, or outcomes any time it makes changes to its identity
service that affect the processes or technologies.</td>
<td></td>
</tr>
<tr class="even">
<td>The CSP <strong>SHALL</strong> re-assess the risks to equitable
access, treatment, or outcomes periodically to ensure it accurately
reflects the current risks associated with its service.</td>
<td></td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL NOT</strong> make applicant participation in
these risk assessments mandatory.</td>
<td></td>
</tr>
<tr class="even">
<td>The CSP <strong>SHALL</strong> make the results of its assessment of
risks associated with inequitable access, treatment, or outcomes, and
any associated mitigations, available to any organizations or
individuals that use its service.</td>
<td></td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL</strong> also make the results of its
assessment publicly available.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="general-security-requirements">5.1.4. General Security
Requirements</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>Each online transaction within the identity proofing process,
including transactions that involve third parties,
<strong>SHALL</strong> occur over an authenticated protected
channel.</td>
<td></td>
</tr>
<tr class="even">
<td>All PII, in the form of identity attributes, collected as part of
the identity proofing process <strong>SHALL</strong> be protected to
ensure the confidentiality and integrity of the information.</td>
<td></td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL</strong> assess the risks associated with
operating its identity service, according to the NIST risk management
framework <a
href="https://pages.nist.gov/800-63-4/sp800-63a.html#ref-NIST-RMF">[NIST-RMF]</a>,
and apply an appropriate baseline security controls.</td>
<td>IA-1 a. 1. (b)</td>
</tr>
<tr class="even">
<td><h3 id="additional-requirements-for-federal-agencies">5.1.5.
Additional Requirements for Federal Agencies</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>The agency <strong>SHALL</strong> consult with their Senior Agency
Official for Privacy (SAOP) to conduct an analysis determining whether
the collection of PII, including biometrics, to conduct identity
proofing triggers Privacy Act requirements.</td>
<td></td>
</tr>
<tr class="even">
<td>The agency <strong>SHALL</strong> consult with their SAOP to conduct
an analysis determining whether the collection of PII, including
biometrics, to conduct identity proofing triggers E-Government Act of
2002 <a
href="https://pages.nist.gov/800-63-4/sp800-63a.html#ref-E-Gov">[E-Gov]</a>
requirements.</td>
<td>IA-1 a. 1. (b)</td>
</tr>
<tr class="odd">
<td>The agency <strong>SHALL</strong> publish a System of Records Notice
(SORN) to cover such collection, as applicable.</td>
<td>IA-1 a.1 (a)</td>
</tr>
<tr class="even">
<td>The agency <strong>SHALL</strong> publish a Privacy Impact
Assessment (PIA) to cover such collection, as applicable.</td>
<td>IA-1 a.1 (a)</td>
</tr>
<tr class="odd">
<td>The agency <strong>SHALL</strong> consult with the senior official,
office, or governance body responsible for diversity, equity, inclusion,
and accessibility (DEIA) for their agency to determine how the identity
proofing service should be designed, resourced, and administered to meet
the needs of all served populations.</td>
<td>IA-1 a.1 (a)</td>
</tr>
<tr class="even">
<td>The agency <strong>SHOULD</strong> consult with public affairs and
communications professionals within their organization to determine if a
communications or public awareness strategy should be developed to
accompany the roll-out of any new process, or an update to an existing
process, including requirements associated with identity proofing. This
may include materials detailing information about how to use the
technology associated with the service, a Frequently Asked Questions
(FAQs) page, prerequisites to participate in the identity proofing
process (such as required evidence), webinars or other live or
pre-recorded information sessions, or other media to support adoption
and provide applicants with a mechanism to communicate questions,
issues, and feedback.</td>
<td></td>
</tr>
<tr class="odd">
<td>If the agency uses a third-party CSP, the agency
<strong>SHALL</strong> be responsible for conducting its own privacy
risk assessments or doing due diligence before relying on the CSP’s
privacy risk assessment as part of its PIA process.</td>
<td>IA-8 (2) (b)</td>
</tr>
<tr class="even">
<td>If the agency uses a third-party CSP, the agency
<strong>SHALL</strong> incorporate the CSP’s assessment of equity risks
into its own assessment of equity risks.</td>
<td>IA-8 (2) (b)</td>
</tr>
<tr class="odd">
<td><h3 id="requirements-for-enrollment-codes">5.1.6. Requirements for
Enrollment Codes</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Enrollment codes <strong>SHALL</strong> be sent to a validated
address (e.g., postal address, telephone number, or email address).</td>
<td>IA-12 (5)</td>
</tr>
<tr class="odd">
<td>The applicant <strong>SHALL</strong> present a valid enrollment code
to complete the identity proofing process.</td>
<td></td>
</tr>
<tr class="even">
<td><p>Enrollment codes <strong>SHALL</strong> be comprised of one of
the following:</p>
<blockquote>
<p>A random six digit number generated by an approved random number
generator with at least 20 bits of entropy;</p>
<p>A secure link delivered to a uniquely identified address containing
an appropriately constructed session ID (at least 64 bits of entropy);
or</p>
<p>A machine readable optical label (such as a QR code) that contains a
random secret with at least 20 bits of entropy.</p>
</blockquote></td>
<td></td>
</tr>
<tr class="odd">
<td><p>Enrollment codes <strong>SHALL</strong> be valid for at most:</p>
<blockquote>
<p>21 days, when sent to a validated postal address within the
contiguous United States;</p>
<p>30 days, when sent to a validated postal address outside the
contiguous United States;</p>
<p>10 minutes, when sent to a validated telephone number (SMS or voice);
or</p>
<p>24 hours, when sent to a validated email address.</p>
</blockquote></td>
<td></td>
</tr>
<tr class="even">
<td>The enrollment code <strong>SHALL NOT</strong> be used as an
authentication factor.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="requirements-for-notifications-of-identity-proofing">5.1.7.
Requirements for Notifications of Identity Proofing</h3></td>
<td></td>
</tr>
<tr class="even">
<td><strong>SHALL</strong> be sent to a validated address (e.g., postal
address, telephone number, or email address) of record. Whenever
possible, CSPs <strong>SHOULD</strong> send notifications of proofing
and enrollment codes to different validated addresses.</td>
<td>IA-12 (5)</td>
</tr>
<tr class="odd">
<td><strong>SHALL</strong> include details about the identity proofing
event, such as the name of the identity service and the date the
identity proofing was completed.</td>
<td></td>
</tr>
<tr class="even">
<td><strong>SHALL</strong> provide clear instructions, including contact
information, on actions to take in the case the recipient repudiates the
identity proofing event.</td>
<td></td>
</tr>
<tr class="odd">
<td><strong>SHOULD</strong> provide additional information, such as how
the organization or CSP protects the security and privacy of the
information it collects and any responsibilities the recipient has as a
subscriber of the identity service.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="requirements-for-use-of-biometrics">5.1.8. Requirements for
Use of Biometrics</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>CSPs <strong>SHALL</strong> provide clear, publicly available
information about all uses of biometrics, what biometric data is
collected, how it is stored, and information on how to remove biometric
information consistent with applicable laws and regulations.</td>
<td></td>
</tr>
<tr class="even">
<td>CSPs <strong>SHALL</strong> collect an explicit biometric consent
from all applicants before collecting biometric information.</td>
<td></td>
</tr>
<tr class="odd">
<td>CSPs <strong>SHALL</strong> store the biometric consent with the
subscriber’s account.</td>
<td></td>
</tr>
<tr class="even">
<td>CSPs <strong>SHALL</strong> have a documented, and publicly
available, deletion process and default retention period for all
biometric information.</td>
<td></td>
</tr>
<tr class="odd">
<td>CSPs <strong>SHALL</strong> allow individuals to request deletion of
their biometric information at any time, except where otherwise
restricted by regulation, law, or statute.</td>
<td></td>
</tr>
<tr class="even">
<td>CSPs <strong>SHALL</strong> have all biometric algorithms tested by
an independent entity (e.g., accredited laboratory or research
institution) for performance, including performance across demographic
groups.</td>
<td></td>
</tr>
<tr class="odd">
<td>Testing of all algorithms <strong>SHALL</strong> be consistent with
published ISO/IEC standards for the given modality.</td>
<td>IA-1 a. 1. (b)</td>
</tr>
<tr class="even">
<td><p>CSPs <strong>SHALL</strong> meet the minimum performance
thresholds for biometric usage:</p>
<blockquote>
<p>False match rate: 1:10,000 or better; and</p>
<p>False non-match rate: 1:100 or better</p>
</blockquote></td>
<td></td>
</tr>
<tr class="odd">
<td>CSPs <strong>SHALL</strong> employ biometric technologies that
provide similar performance characteristics for applicants of different
demographic groups (racial background, gender, ethnicity, etc.). If
performance differences across demographic groups are discovered, CSPs
<strong>SHALL</strong> act expeditiously to provide redress options to
affected individuals and to close performance gaps.</td>
<td></td>
</tr>
<tr class="even">
<td>CSPs <strong>SHALL</strong> make all performance and operational
test results publicly available.</td>
<td></td>
</tr>
<tr class="odd">
<td>CSPs <strong>SHALL</strong> assess the performance and demographic
impacts of employed biometric technologies in conditions substantially
similar to the operational environment and user base of the system. When
such assessments include real-world users, participation by users
<strong>SHALL</strong> be voluntary.</td>
<td></td>
</tr>
<tr class="even">
<td>CSPs <strong>SHALL</strong> make all performance and operational
test results publicly available.</td>
<td></td>
</tr>
<tr class="odd">
<td>CSP <strong>SHALL</strong> collect biometrics in such a way that
ensures that the biometric is collected from the applicant, and not
another subject.</td>
<td></td>
</tr>
<tr class="even">
<td>When collecting and comparing biometrics remotely, the CSP
<strong>SHALL</strong> implement liveness detection capabilities to
confirm the genuine presence of a live human being and to mitigate
spoofing and impersonation attempts.</td>
<td></td>
</tr>
<tr class="odd">
<td>When collecting biometrics in person, the CSP <strong>SHALL</strong>
have the operator view the biometric source (e.g., fingers, face) for
presence of non-natural materials and perform such inspections as part
of the proofing process.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="trusted-referees-and-applicant-references">5.1.9. Trusted
Referees and Applicant References</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="requirements-for-trusted-referees">5.1.9.1. Requirements for
Trusted Referees</h3></td>
<td></td>
</tr>
<tr class="even">
<td>CSPs <strong>SHALL</strong> provide the option for the use of
trusted referees for remote identity proofing at IALs 1 and 2.</td>
<td></td>
</tr>
<tr class="odd">
<td><p>Where trusted referees are offered, the following requirements
apply to their use:</p>
<p>The CSP <strong>SHALL</strong> establish written policies and
procedures for the use of trusted referees as part of its practice
statement, as specified in <a
href="https://pages.nist.gov/800-63-4/sp800-63a.html#DocRecReqs">Sec.
5.1.1</a>.</p></td>
<td></td>
</tr>
<tr class="even">
<td>The CSP <strong>SHALL</strong> train its trusted referees to make
risk-based decisions that allow applicants to be successfully identity
proofed based on their unique circumstances.</td>
<td></td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL</strong> provide notification to the public of
the availability of trusted referee services and how such services are
obtained.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="requirements-for-applicant-references">5.1.9.2. Requirements
for Applicant References</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>CSPs <strong>SHOULD</strong> allow the use of applicant
references.</td>
<td></td>
</tr>
<tr class="even">
<td><p>The following requirements apply to the use of applicant
references at any IAL:</p>
<p>The CSP <strong>SHALL</strong> establish written policies and
procedures for the use of applicant references as part of its practice
statement, as specified in <a
href="https://pages.nist.gov/800-63-4/sp800-63a.html#DocRecReqs">Sec.
5.1.1</a>.</p></td>
<td></td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL</strong> identity proof an applicant reference
to the same or higher IAL intended for the applicant.</td>
<td></td>
</tr>
<tr class="even">
<td>If the CSP allows for the use of applicant references, it
<strong>SHALL</strong> provide notification to the public of the
allowability of applicant references and any requirements for the
relationship between the reference and the applicant.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="requirements-for-interacting-with-minors">5.1.10.
Requirements for Interacting with Minors</h3></td>
<td></td>
</tr>
<tr class="even">
<td>The CSP <strong>SHALL</strong> establish written policy and
procedures as part of its practice statement for identity proofing
minors who may not be able to meet the evidence requirements for a given
IAL.</td>
<td>IA-1 a. 2</td>
</tr>
<tr class="odd">
<td>When interacting with persons under the age of 13, the CSP
<strong>SHALL</strong> ensure compliance with the Children’s Online
Privacy Protection Act of 1998 <a
href="https://pages.nist.gov/800-63-4/sp800-63a.html#ref-COPPA">[COPPA]</a>.</td>
<td>IA-1 a. 1. (b)</td>
</tr>
<tr class="even">
<td>CSPs <strong>SHALL</strong> support the use of applicant references
when interacting with individuals under the age or 18.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="identity-proofing-process">5.2. Identity Proofing
Process</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="identity-assurance-level-1">5.3. Identity Assurance Level
1</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="automated-attack-prevention">5.3.1. Automated Attack
Prevention</h3></td>
<td></td>
</tr>
<tr class="even">
<td>The CSP <strong>SHALL</strong> implement a means to prevent
automated attacks on the identity proofing process. Acceptable means
include, but are not limited to: bot detection, mitigation, and
management solutions; behavioral analytics; web application firewall
settings; and traffic analysis.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="evidence-and-core-attributes-collection-requirements">5.3.2.
Evidence and Core Attributes Collection Requirements</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="evidence-collection">5.3.2.1. Evidence Collection</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><p>For remote or in-person identity proofing, the CSP
<strong>SHALL</strong> collect <em>one</em> of the following from the
applicant:</p>
<ol type="1">
<li><p>One piece of SUPERIOR evidence, or</p></li>
<li><p>One piece of STRONG evidence and one piece of FAIR
evidence</p></li>
</ol></td>
<td>IA-12 a., IA-12 (2)</td>
</tr>
<tr class="even">
<td><h3 id="collection-of-additional-attributes">5.3.2.2. Collection of
Additional Attributes</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>Validated evidence is the preferred source of identity attributes.
If the presented identity evidence does not provide all the attributes
the CSP considers core attributes, it <strong>MAY</strong> collect
attributes that are self-asserted by the applicant.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="evidence-and-core-attributes-validation-requirements">5.3.3.
Evidence and Core Attributes Validation Requirements</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><p>The CSP <strong>SHALL</strong> validate the genuineness of each
piece of SUPERIOR and STRONG evidence by <em>one</em> of the
following:</p>
<ol type="1">
<li><p>Visual inspection by trained personnel</p></li>
<li><p>The use of technologies that can confirm the integrity of
physical security features or detect if the evidence is fraudulent or
has been inappropriately modified</p></li>
<li><p>If present, confirming the integrity of digital security
features</p></li>
</ol></td>
<td>IA-12 c.</td>
</tr>
<tr class="even">
<td>The CSP <strong>SHALL</strong> validate the genuineness of each
piece of FAIR evidence by visual inspection by trained personnel</td>
<td>IA-12 c.</td>
</tr>
<tr class="odd">
<td><p>The CSP <strong>SHALL</strong> validate all core attributes by
<em>both</em>:</p>
<ol type="1">
<li><p>Validating the accuracy of attributes (such as account or
reference number, name, and date of birth) obtained from pieces of
evidence by comparison with authoritative or credible sources,
and</p></li>
<li><p>Validating the accuracy of self-asserted attributes by comparison
with authoritative or credible sources.</p></li>
</ol></td>
<td>IA-12 c.</td>
</tr>
<tr class="even">
<td>For added assurance, the CSP <strong>SHALL</strong> evaluate the
core attributes, as validated by various sources, for overall
consistency.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="identity-verification-requirements">5.3.4. Identity
Verification Requirements</h3></td>
<td></td>
</tr>
<tr class="even">
<td><p>The CSP <strong>SHALL</strong> verify the binding of the
applicant to the claimed identity by <em>one</em> of the following:</p>
<ol type="1">
<li><p>Physical comparison of the applicant’s face or biometric
comparison of the facial image of the applicant to the facial portrait
included on a piece of SUPERIOR or STRONG evidence, or</p></li>
<li><p>Demonstrated association with a digital account through an AAL1
authentication or an AAL1 and FAL1 federation protocol, or</p></li>
<li><p>Verification of the applicant’s return of a valid enrollment code
<a
href="https://pages.nist.gov/800-63-4/sp800-63a.html#EnrollCodes">Sec.
5.1.6</a></p></li>
</ol></td>
<td>IA-5 a., IA-8 (2) (a), IA-12 a.</td>
</tr>
<tr class="odd">
<td><h3 id="notification-of-proofing-requirement">5.3.5. Notification of
Proofing Requirement</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Upon the successful completion of identity proofing at IAL1, the CSP
<strong>SHOULD</strong> send a notification of proofing to a validated
address for the applicant, as specified in <a
href="https://pages.nist.gov/800-63-4/sp800-63a.html#ProofingNotifs">Sec.
5.1.7</a>.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="identity-assurance-level-2">5.4. Identity Assurance Level
2</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="automated-attack-prevention-1">5.4.1. Automated Attack
Prevention</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL</strong> implement a means to prevent
automated attacks on the identity proofing process. Acceptable means
include, but are not limited to: bot detection, mitigation, and
management solutions; behavioral analytics; web application firewall
settings; and traffic analysis.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="evidence-and-core-attribute-collection-requirements">5.4.2.
Evidence and Core Attribute Collection Requirements</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="evidence-collection-1">5.4.2.1. Evidence
Collection</h3></td>
<td></td>
</tr>
<tr class="even">
<td><p>For remote or in-person identity proofing, the CSP
<strong>SHALL</strong> collect <em>one</em> of the following from the
applicant:</p>
<ol type="1">
<li><p>One piece of SUPERIOR evidence</p></li>
<li><p>One piece of STRONG evidence and one piece of FAIR
evidence</p></li>
</ol></td>
<td>IA-12 c., IA-12 (2)</td>
</tr>
<tr class="odd">
<td><h3 id="collection-of-attributes">5.4.2.2. Collection of
Attributes</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Validated evidence is the preferred source of identity attributes.
If the presented identity evidence does not provide all the attributes
the CSP considers core attributes, it <strong>MAY</strong> collect
attributes that are self-asserted by the applicant.</td>
<td>IA-12 c.</td>
</tr>
<tr class="odd">
<td><h3
id="evidence-and-core-attributes-validation-requirements-1">5.4.3.
Evidence and Core Attributes Validation Requirements</h3></td>
<td></td>
</tr>
<tr class="even">
<td><p>The CSP <strong>SHALL</strong> validate the genuineness of each
piece of SUPERIOR and STRONG evidence by one of the following:</p>
<ol type="1">
<li><p>Visual inspection by trained personnel</p></li>
<li><p>The use of technologies that can confirm the integrity of
physical security features or detect if the evidence is fraudulent or
has been inappropriately modified</p></li>
<li><p>If present, confirming the integrity of digital security
features</p></li>
</ol></td>
<td>IA-12 c.</td>
</tr>
<tr class="odd">
<td><p>The CSP <strong>SHALL</strong> validate all core attributes
by:</p>
<ol type="1">
<li><p>Validating the accuracy of attributes (such as account or
reference number, name, and date of birth) obtained from pieces of
evidence by comparison with authoritative or credible sources,
and</p></li>
<li><p>validating the accuracy of self-asserted attributes by comparison
with authoritative or credible sources</p></li>
</ol></td>
<td>IA-12 c.</td>
</tr>
<tr class="even">
<td>For added assurance, the CSP <strong>SHALL</strong> evaluate the
core attributes, as validated by various sources, for overall
consistency.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="identity-verification-requirements-1">5.4.4. Identity
Verification Requirements</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="remote-identity-proofing">5.4.4.1. Remote Identity
Proofing</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><p>The CSP <strong>SHALL</strong> verify the binding of the
applicant to the claimed identity by <em>one</em> of the following:</p>
<ol type="1">
<li><p>Comparison of a collected biometric characteristic, such as a
facial image, to the associated reference biometric contained on a piece
of presented SUPERIOR or STRONG evidence</p></li>
<li><p>Demonstrated association with a digital account through an AAL2
authentication or an AAL2 and FAL2 federation protocol</p></li>
</ol></td>
<td>IA-5 a., IA-8 (2) (a), IA-12 a.</td>
</tr>
<tr class="even">
<td><h3 id="in-person-identity-proofing">5.4.4.2. In-person Identity
Proofing</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL</strong> verify the binding of the applicant
to the claimed identity by physical or biometric comparison of the
facial image of the applicant to the facial portrait contained on a
piece of presented SUPERIOR or STRONG evidence.</td>
<td>IA-5 a., IA-12 a.</td>
</tr>
<tr class="even">
<td><h3 id="notification-of-proofing-requirement-1">5.4.5. Notification
of Proofing Requirement</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>Upon the successful completion of identity proofing at IAL2, the CSP
<strong>SHALL</strong> send a notification of proofing to a validated
address for the applicant, as specified in <a
href="https://pages.nist.gov/800-63-4/sp800-63a.html#ProofingNotifs">Sec.
5.1.7</a>.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="identity-assurance-level-3">5.5. Identity Assurance Level
3</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="automated-attack-prevention-2">5.5.1. Automated Attack
Prevention</h3></td>
<td></td>
</tr>
<tr class="even">
<td>The CSP <strong>SHALL</strong> implement a means to prevent
automated attacks on the identity proofing process. Acceptable means
include, but are not limited to: bot detection, mitigation, and
management solutions; behavioral analytics; web application firewall
settings; and traffic analysis.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3
id="evidence-and-core-attributes-collection-requirements-1">5.5.2.
Evidence and Core Attributes Collection Requirements</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="evidence-collection-2">5.5.2.1. Evidence
Collection</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><p>The CSP <strong>SHALL</strong> collect evidence from the
applicant according to <em>one</em> of the following options:</p>
<ol type="1">
<li><p>Two pieces of SUPERIOR evidence, or</p></li>
<li><p>One piece of SUPERIOR evidence and one piece of STRONG evidence,
or</p></li>
<li><p>Two pieces of STRONG evidence and one piece of FAIR
evidence</p></li>
</ol></td>
<td>IA-12 c.</td>
</tr>
<tr class="even">
<td><h3 id="collection-of-attributes-1">5.5.2.2. Collection of
Attributes</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>Validated evidence is the preferred source of identity attributes.
If the presented identity evidence does not provide all the attributes
the CSP considers core attributes, it <strong>MAY</strong> collect
attributes that are self-asserted by the applicant.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="validation-requirements">5.5.3. Validation
Requirements</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="evidence-validation-requirements">5.5.3.1. Evidence
Validation Requirements</h3></td>
<td></td>
</tr>
<tr class="even">
<td>The CSP <strong>SHALL</strong> validate the genuineness of each
piece of SUPERIOR evidence by confirming the integrity of its
cryptographic security features and validating any digital
signatures.</td>
<td>IA-12 c.</td>
</tr>
<tr class="odd">
<td><p>The CSP <strong>SHALL</strong> validate the genuineness of each
piece of STRONG evidence by <em>one</em> of the following:</p>
<ol type="1">
<li><p>Visual inspection by trained personnel</p></li>
<li><p>The use of technologies that can confirm the integrity of
physical security features and detect if the evidence is fraudulent or
has been inappropriately modified</p></li>
<li><p>If present, confirming the integrity of digital security
features, including the validity of the issuer’s digital
signature</p></li>
</ol></td>
<td>IA-12 c.</td>
</tr>
<tr class="even">
<td><h3 id="core-attribute-validation-requirements">5.5.3.2. Core
Attribute Validation Requirements</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><p>The CSP <strong>SHALL</strong> validate all core attributes by
<em>both</em>:</p>
<ol type="1">
<li><p>Validating the accuracy of attributes obtained from pieces of
evidence or applicant self-assertion by comparison with authoritative or
credible sources</p></li>
<li><p>Validating the cryptographic features of any presented digital
evidence, as described above</p></li>
</ol></td>
<td>IA-12 c.</td>
</tr>
<tr class="even">
<td>For added assurance, the CSP <strong>SHALL</strong> evaluate the
core attributes, as validated by various sources, for overall
consistency.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="identity-verification-requirements-2">5.5.4. Identity
Verification Requirements</h3></td>
<td></td>
</tr>
<tr class="even">
<td><p>The CSP <strong>SHALL</strong> verify the binding of the
applicant to the claimed identity by <em>one</em> of the following:</p>
<ol type="1">
<li><p>Comparison of a collected biometric characteristic, such as a
facial image, to the associated reference biometric characteristic
contained on a piece of presented SUPERIOR or STRONG evidence</p></li>
<li><p>Demonstrated association with a digital account through, at a
minimum, an AAL2 authentication or an AAL2 and FAL2 federation
protocol</p></li>
</ol></td>
<td>IA-5 a., IA-8 (2) (a), IA-12 a.</td>
</tr>
<tr class="odd">
<td><h3 id="notification-of-proofing-requirement-2">5.5.5 Notification
of Proofing Requirement</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Upon the successful completion of identity proofing at IAL3, the CSP
<strong>SHALL</strong> send a notification of proofing to a validated
address for the applicant, as specified in <a
href="https://pages.nist.gov/800-63-4/sp800-63a.html#ProofingNotifs">Sec.
5.1.7</a>.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="biometric-collection">5.5.6. Biometric Collection</h3></td>
<td></td>
</tr>
<tr class="even">
<td>The CSP <strong>SHALL</strong> collect and record a biometric sample
at the time of proofing (e.g., facial image, fingerprints) for the
purposes of non-repudiation and re-proofing.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="in-person-proofing-requirements">5.5.7. In-person Proofing
Requirements</h3></td>
<td></td>
</tr>
<tr class="even">
<td><p>In-person proofing at IAL3 <strong>SHALL</strong> be conducted in
<em>one</em> of two ways:</p>
<ul>
<li><p>An in-person interaction between the applicant and a CSP
operator, or</p></li>
<li><p>A remote interaction with the applicant, supervised by an
operator, based on the requirements in <a
href="https://pages.nist.gov/800-63-4/sp800-63a.html#IAL3supervised">Sec.
5.5.8</a>, <em>IAL3 Supervised Remote Identity Proofing</em>.</p></li>
</ul></td>
<td>IA-5 a., IA-12 a., IA-12 (2), IA-12(4)* Note that supervised remote
is also allowed.</td>
</tr>
<tr class="odd">
<td><p>Regardless of which of the two methods the CSP employs, the
following requirements apply to identity proofing at IAL3:</p>
<ol type="1">
<li><p>The CSP <strong>SHALL</strong> have the operator view the
biometric source (e.g., fingers, face) for the presence of any
non-natural materials.</p></li>
<li><p>The CSP <strong>SHALL</strong> collect biometrics in such a way
that ensures that the biometric is collected from the applicant, and not
another subject.</p></li>
</ol></td>
<td></td>
</tr>
<tr class="even">
<td><h3
id="requirements-for-ial3-supervised-remote-identity-proofing">5.5.8.
Requirements for IAL3 Supervised Remote Identity Proofing</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><p>The following requirements apply to all IAL3 Supervised Remote
Identity Proofing sessions:</p>
<p>The CSP <strong>SHALL</strong> monitor the entire identity proofing
session, and <strong>SHALL</strong> ensure the applicant is continuously
present during the entire identity proofing session — for example, by a
continuous high-resolution video transmission of the applicant.</p></td>
<td>IA-12 a., IA-12 (2)</td>
</tr>
<tr class="even">
<td>The CSP <strong>SHALL</strong> have a live operator participate
remotely with the applicant for the entirety of the identity proofing
session.</td>
<td>IA-12 a., IA-12 (2)</td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL</strong> require all actions taken by the
applicant during the identity proofing session to be clearly visible to
the remote operator.</td>
<td>IA-12 a., IA-12 (2)</td>
</tr>
<tr class="even">
<td>The CSP <strong>SHALL</strong> require that all digital verification
of evidence (e.g., via chip or wireless technologies) be performed by
integrated scanners and sensors (e.g., embedded fingerprint
reader).</td>
<td>IA-12 a., IA-12 (2), IA-12 (3)</td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL</strong> require operators to have undergone a
training program to detect potential fraud and to properly perform a
supervised remote proofing session.</td>
<td>IA-12 a., IA-12 (2)</td>
</tr>
<tr class="even">
<td>The CSP <strong>SHALL</strong> employ physical tamper detection and
resistance features appropriate for the environment in which it is
located. For example, a kiosk located in a restricted area or one where
it is monitored by a trusted individual requires less tamper detection
than one that is located in a semi-public area such as a shopping mall
concourse.</td>
<td>IA-12 a., IA-12 (2)</td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL</strong> ensure that all communications occur
over a mutually authenticated protected channel.</td>
<td>IA-12 a., IA-12 (2)</td>
</tr>
<tr class="even">
<td><h3 id="summary-of-requirements">5.6. Summary of
Requirements</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="subscriber-accounts">6. Subscriber Accounts</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="subscriber-accounts-1">6.1. Subscriber Accounts</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>With the exception of identity proofing for the purposes of
providing one-time access to an online service, or when an applicant
declines enrollment into an account, the CSP <strong>SHALL</strong>
enroll the applicant as a subscriber into its identity service and
establish a unique <em>subscriber account</em> for that subscriber
following the successful identity proofing of an applicant.</td>
<td>IA-2, IA-4 b., IA-4 c., IA-8</td>
</tr>
<tr class="even">
<td>The CSP <strong>SHALL</strong> assign a unique identifier to each
subscriber account.</td>
<td>IA-2, IA-4 b., IA-4 c., IA-8, IA-8(6)</td>
</tr>
<tr class="odd">
<td><p>At a minimum the CSP <strong>SHALL</strong> include the following
information in each subscriber account:</p>
<ul>
<li><p>Unique identifier established for the subscriber</p></li>
<li><p>A record of the identity proofing steps completed for the
subscriber in accordance with <a
href="https://pages.nist.gov/800-63-4/sp800-63a.html#DocRecReqs">Sec.
5.1.1</a></p></li>
<li><p>Maximum IAL successfully achieved for the identity proofing of
the subscriber</p></li>
<li><p>Subscriber consent provided for the processing, retention, or
disclosure of any personal or sensitive information maintained in the
subscriber account</p></li>
<li><p>All authenticators currently bound to the subscriber account,
whether registered at enrollment or subsequent to enrollment</p></li>
<li><p>All attributes that were validated during the identity proofing
process or in subsequent transactions to support RP access</p></li>
</ul></td>
<td>IA-2, IA-4 b., IA-4 c., IA-4(9), IA-8</td>
</tr>
<tr class="even">
<td><p>The CSP <strong>SHALL</strong> record information in the
subscriber account that was collected during the identity proofing
process or subsequently updated for each subscriber, including:</p>
<ul>
<li><p>Validated identity evidence</p></li>
<li><p>Validated attribute information</p></li>
<li><p>Attribute information that was collected for enrollment in the
CSP identity service that was not validated for identity proofing
purposes</p></li>
</ul></td>
<td>IA-4(9)</td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL</strong> perform a privacy risk assessment for
the processing, retention, or disclosure of any personal information
maintained in the subscriber account in accordance with <a
href="https://pages.nist.gov/800-63-4/sp800-63a.html#PrivacyReqs">Sec.
5.1.2</a>.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="subscriber-account-access">6.2. Subscriber Account
Access</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>In order to meet the requirement that accounts containing PII be
protected by multi-factor authentication (MFA), the CSP
<strong>SHALL</strong> provide a way for subscribers to access the
information in their subscriber account through AAL2 or AAL3
authentication processes using authenticators registered to the
subscriber account.</td>
<td></td>
</tr>
<tr class="even">
<td>The CSP <strong>SHALL</strong> provide the capability for
subscribers to change or update the personal information contained in
their subscriber account.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="subscriber-account-lifecycle">6.3. Subscriber Account
Lifecycle</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="subscriber-account-activity">6.3.1. Subscriber Account
Activity</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>The CSP SHALL establish and maintain a unique subscriber account for
each active subscriber in the CSP identity system from the time of
enrollment to the time of account closure, as described below.</td>
<td></td>
</tr>
<tr class="even">
<td>Until the account is closed, the CSP SHALL provide for the use of
the subscriber account, information contained in the account, and
registered authenticators.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="subscriber-account-termination">6.3.2. Subscriber Account
Termination</h3></td>
<td></td>
</tr>
<tr class="even">
<td><p>The CSP <strong>SHALL</strong> terminate the subscriber account
and discontinue its use when one of the following occur:</p>
<ul>
<li><p>The subscriber elects to terminate their subscriber account with
the CSP.</p></li>
<li><p>The CSP determines, following any due notice period and
requirements established by the CSP, that the subscriber account has
been compromised.</p></li>
<li><p>The CSP determines, following any due notice period and
requirements established by the CSP, that the subscriber has violated
the policies or rules for participation in the CSP identity
service.</p></li>
<li><p>The CSP determines, following any due notice period and
requirements established by the CSP, that the subscriber account is
inactive in accordance with the policies or rules established by the
CSP.</p></li>
<li><p>The CSP ceases identity system and services operations.</p></li>
</ul></td>
<td></td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL</strong> delete any personal or sensitive
information from the subscriber account records following account
termination in accordance with the record retention and disposal
requirements.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="threats-and-security-considerations-informative">7. Threats
and Security Considerations (Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="threat-mitigation-strategies-informative">7.1. Threat
Mitigation Strategies (Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="collaboration-with-adjacent-programs-informative">7.2.
Collaboration with Adjacent Programs (Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="privacy-considerations-informative">8. Privacy
Considerations (Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="collection-and-data-minimization-informative">8.1.
Collection and Data Minimization (Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="social-security-numbers-informative">8.1.1. Social Security
Numbers (Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="notice-and-consent-informative">8.2. Notice and Consent
(Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="use-limitation-informative">8.3. Use Limitation
(Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="redress-informative">8.4. Redress (Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="privacy-risk-assessment-informative">8.5. Privacy Risk
Assessment (Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="agency-specific-privacy-compliance-informative">8.6.
Agency-Specific Privacy Compliance (Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="usability-considerations-informative">9. Usability
Considerations (Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3
id="general-user-considerations-during-enrollment-and-identity-proofing-informative">9.1.
General User Considerations During Enrollment and Identity Proofing
(Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="pre-enrollment-preparation-informative">9.2. Pre-Enrollment
Preparation (Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="enrollment-and-proofing-session-informative">9.3. Enrollment
and Proofing Session (Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="post-enrollment-informative">9.4. Post-Enrollment
(Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="equity-considerations-informative">10. Equity Considerations
(Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="equity-and-identity-resolution-informative">10.1. Equity and
Identity Resolution (Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="equity-and-identity-validation-informative">10.2. Equity and
Identity Validation (Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="equity-and-identity-verification-informative">10.3. Equity
and Identity Verification (Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="equity-and-user-experience-informative">10.4. Equity and
User Experience (Informative)</h3></td>
<td></td>
</tr>
</tbody>
</table>

# 

## 800-63B-4

<table>
<colgroup>
<col style="width: 71%" />
<col style="width: 28%" />
</colgroup>
<tbody>
<tr class="odd">
<td>NIST 800-63B Reference</td>
<td>800-53 rev 5 control</td>
</tr>
<tr class="even">
<td><h3 id="purpose-informative-2">1. Purpose (Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="introduction-informative-2">2. Introduction
(Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="definitions-and-abbreviations-informative-2">3. Definitions
and Abbreviations (Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="authentication-assurance-levels">4. Authentication Assurance
Levels</h3></td>
<td></td>
</tr>
<tr class="even">
<td>To satisfy the requirements of a given AAL and be recognized as a
subscriber, a claimant <strong>SHALL</strong> be authenticated with a
process whose strength is equal to or greater than the requirements at
that level.</td>
<td>IA-8 (2) (a)</td>
</tr>
<tr class="odd">
<td>The result of an authentication process is an identifier that
<strong>SHALL</strong> be used each time that subscriber authenticates
to that RP.</td>
<td>IA-2, IA-8</td>
</tr>
<tr class="even">
<td>The identifier <strong>MAY</strong> be pseudonymous.</td>
<td>IA-2, IA-8, IA-8 (6)</td>
</tr>
<tr class="odd">
<td>Subscriber identifiers <strong>SHOULD NOT</strong> be reused for a
different subject but <strong>SHOULD</strong> be reused when a
previously enrolled subject is re-enrolled by the CSP.</td>
<td>IA-2, IA-4 d., IA-8</td>
</tr>
<tr class="even">
<td>Other attributes that identify the subscriber as a unique subject
<strong>MAY</strong> also be provided.</td>
<td>IA-2, IA-8</td>
</tr>
<tr class="odd">
<td>Personal information collected during and subsequent to identity
proofing <strong>MAY</strong> be made available to the subscriber by the
digital identity service.</td>
<td></td>
</tr>
<tr class="even">
<td>The release or online availability of any PII or other personal
information, whether self-asserted or validated, by federal government
agencies requires multi-factor authentication in accordance with <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-EO13681">[EO13681]</a>.
Therefore, federal government agencies <strong>SHALL</strong> select a
minimum of AAL2 when PII or other personal information is made available
online.</td>
<td>IA-1 a. 1. (b)</td>
</tr>
<tr class="odd">
<td><h3 id="authentication-assurance-level-1">4.1. Authentication
Assurance Level 1</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="permitted-authenticator-types">4.1.1. Permitted
Authenticator Types</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>AAL1 authentication <strong>SHALL</strong> occur by the use of any
of the following authenticator types, which are defined in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#AAL_SEC5">Sec.
5</a>:</td>
<td>IA-8 (2) (a)</td>
</tr>
<tr class="even">
<td><h3 id="authenticator-and-verifier-requirements">4.1.2.
Authenticator and Verifier Requirements</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>Cryptographic authenticators used at AAL1 <strong>SHALL</strong> use
approved cryptography.</td>
<td></td>
</tr>
<tr class="even">
<td>Software-based authenticators that operate within the context of an
operating system <strong>MAY</strong>, where applicable, attempt to
detect compromise (e.g., by malware) of the user endpoint in which they
are running and <strong>SHOULD NOT</strong> complete the operation when
such a compromise is detected.</td>
<td>IA-5 g, IA-5 h.</td>
</tr>
<tr class="odd">
<td>Communication between the claimant and verifier
<strong>SHALL</strong> be via an authenticated protected channel to
provide confidentiality of the authenticator output and resistance to
adversary-in-the-middle (AitM) attacks.</td>
<td>IA-5 g, IA-9</td>
</tr>
<tr class="even">
<td>Verifiers operated by or on behalf of federal government agencies at
AAL1 <strong>SHALL</strong> be validated to meet the requirements of <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-FIPS140-2">[FIPS140]</a>
Level 1.</td>
<td>IA-1 a.1 (b)</td>
</tr>
<tr class="odd">
<td><h3 id="reauthentication">4.1.3. Reauthentication</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Periodic reauthentication of subscriber sessions
<strong>SHALL</strong> be performed as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#sessionreauthn">Sec.
7.2</a>.</td>
<td>IA-11</td>
</tr>
<tr class="odd">
<td>At AAL1, reauthentication of the subscriber <strong>SHOULD</strong>
be repeated at least once per 30 days during an extended usage session,
regardless of user activity.</td>
<td>IA-11</td>
</tr>
<tr class="even">
<td>The session <strong>SHOULD</strong> be terminated (i.e., logged out)
when this time limit is reached.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="mapping-of-sp800-53-ia-to-sp-800-63">4.1.4. Security Controls</h3></td>
<td></td>
</tr>
<tr class="even">
<td>The CSP <strong>SHALL</strong> employ appropriately tailored
security controls from the baseline security controls defined in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-SP800-53">[SP800-53]</a>
or equivalent federal (e.g., <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-FEDRAMP">[FEDRAMP]</a>)
or industry standard that the organization has determined for the
information systems, applications, and online services that these
guidelines are used to protect.</td>
<td>IA-1 a.1 (b), IA-5 g, IA-5 (6)</td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL</strong> ensure that the minimum
assurance-related controls for the appropriate systems, or equivalent,
are satisfied.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="records-retention-policy">4.1.5. Records Retention
Policy</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL</strong> comply with its respective records
retention policies in accordance with applicable laws, regulations, and
policies, including any National Archives and Records Administration
(NARA) records retention schedules that may apply.</td>
<td>IA-1 a.1 (b)</td>
</tr>
<tr class="even">
<td>If the CSP opts to retain records in the absence of any mandatory
requirements, the CSP <strong>SHALL</strong> conduct a risk management
process, including assessments of privacy and security risks, to
determine how long records should be retained and <strong>SHALL</strong>
inform the subscriber of that retention policy.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="authentication-assurance-level-2">4.2. Authentication
Assurance Level 2</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="permitted-authenticator-types-1">4.2.1. Permitted
Authenticator Types</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>At AAL2, authentication <strong>SHALL</strong> occur by the use of
either a multi-factor authenticator or a combination of two
single-factor authenticators.</td>
<td>IA-8 (2) (a)</td>
</tr>
<tr class="even">
<td><p>When a multi-factor authenticator is used, any of the following
<strong>MAY</strong> be used:</p>
<ul>
<li><p>Multi-Factor Out-of-Band Authenticator (<a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#mfooba">Sec.
5.1.3.4</a>)</p></li>
<li><p>Multi-Factor OTP Device (<a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#multifactorOTP">Sec.
5.1.5</a>)</p></li>
<li><p>Multi-Factor Cryptographic Software (<a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#mfcs">Sec.
5.1.8</a>)</p></li>
<li><p>Multi-Factor Cryptographic Device (<a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#mfcd">Sec.
5.1.9</a>)</p></li>
</ul></td>
<td><p>IA-2(6)(a)</p>
<p>IA-8 (2) (a)</p></td>
</tr>
<tr class="odd">
<td><p>When a combination of two single-factor authenticators is used,
the combination <strong>SHALL</strong> include a Memorized Secret
authenticator (<a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#memsecret">Sec.
5.1.1</a>) and one physical authenticator (i.e., “something you have”)
from the following list:</p>
<ul>
<li><p>Look-Up Secret (<a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#lookupsecrets">Sec.
5.1.2</a>)</p></li>
<li><p>Out-of-Band Device (<a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#out-of-band">Sec.
5.1.3</a>)</p></li>
<li><p>Single-Factor OTP Device (<a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#singlefactorOTP">Sec.
5.1.4</a>)</p></li>
<li><p>Single-Factor Cryptographic Software (<a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#sfcs">Sec.
5.1.6</a>)</p></li>
<li><p>Single-Factor Cryptographic Device (<a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#sfcd">Sec.
5.1.7</a>)</p></li>
</ul></td>
<td><p>IA-2(6)(a)</p>
<p>IA-8 (2) (a)</p></td>
</tr>
<tr class="even">
<td><h3 id="authenticator-and-verifier-requirements-1">4.2.2.
Authenticator and Verifier Requirements</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>Cryptographic authenticators used at AAL2 <strong>SHALL</strong> use
approved cryptography.</td>
<td></td>
</tr>
<tr class="even">
<td>Authenticators procured by federal government agencies
<strong>SHALL</strong> be validated to meet the requirements of <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-FIPS140-2">[FIPS140]</a>
Level 1. Software-based authenticators that operate within the context
of an operating system <strong>MAY</strong>, where applicable, attempt
to detect compromise (e.g., by malware) of the platform in which they
are running.</td>
<td><p>IA-1 a.1 (b)</p>
<p>IA-5 g, IA-5 h.</p></td>
</tr>
<tr class="odd">
<td>They <strong>SHOULD NOT</strong> complete the operation when such a
compromise is detected.</td>
<td>IA-5 g, IA-5 h.</td>
</tr>
<tr class="even">
<td>At least one authenticator used at AAL2 <strong>SHALL</strong> be
replay resistant as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#replay">Sec.
5.2.8</a>. Authentication at AAL2 <strong>SHOULD</strong> demonstrate
authentication intent from at least one authenticator as discussed in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#intent">Sec.
5.2.9</a>.</td>
<td>IA-2(6)(b), IA2(8)</td>
</tr>
<tr class="odd">
<td>Communication between the claimant and verifier
<strong>SHALL</strong> be via an authenticated protected channel to
provide confidentiality of the authenticator output and resistance to
AitM attacks.</td>
<td>IA-5 g</td>
</tr>
<tr class="even">
<td>Verifiers operated by or on behalf of federal government agencies at
AAL2 <strong>SHALL</strong> be validated to meet the requirements of <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-FIPS140-2">[FIPS140]</a>
Level 1.</td>
<td></td>
</tr>
<tr class="odd">
<td>When a biometric factor is used in authentication at AAL2, the
performance requirements stated in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#biometric_use">Sec.
5.2.3</a> <strong>SHALL</strong> be met, and the verifier
<strong>SHOULD</strong> make a determination that the biometric sensor
and subsequent processing meet these requirements.</td>
<td></td>
</tr>
<tr class="even">
<td>While phishing resistance as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#verifimpers">Sec.
5.2.5</a> is not generally required for authentication at AAL2,
verifiers <strong>SHOULD</strong> encourage the use of
phishing-resistant authenticators at AAL2 whenever practical since
phishing is a significant threat vector.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="reauthentication-1">4.2.3. Reauthentication</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Periodic reauthentication of subscriber sessions
<strong>SHALL</strong> be performed as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#sessionreauthn">Sec.
7.2</a>. At AAL2, authentication of the subscriber
<strong>SHALL</strong> be repeated at least once per 12 hours during an
extended usage session, regardless of user activity.</td>
<td>IA-11</td>
</tr>
<tr class="odd">
<td>Reauthentication of the subscriber <strong>SHALL</strong> be
repeated following any period of inactivity lasting 30 minutes or
longer.</td>
<td>IA-11</td>
</tr>
<tr class="even">
<td>The session <strong>SHALL</strong> be terminated (i.e., logged out)
when either of these time limits is reached.</td>
<td></td>
</tr>
<tr class="odd">
<td>Reauthentication of a session that has not yet reached its time
limit <strong>MAY</strong> require only a memorized secret or a
biometric in conjunction with the still-valid session secret.</td>
<td></td>
</tr>
<tr class="even">
<td>The verifier <strong>MAY</strong> prompt the user to cause activity
just before the inactivity timeout.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="mapping-of-sp800-53-ia-to-sp-800-63-1">4.2.4. Security Controls</h3></td>
<td></td>
</tr>
<tr class="even">
<td>The CSP <strong>SHALL</strong> employ appropriately tailored
security controls from the baseline security controls defined in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-SP800-53">[SP800-53]</a>
or equivalent federal (e.g., <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-FEDRAMP">[FEDRAMP]</a>)
or industry standard that the organization has determined for the
information systems, applications, and online services that these
guidelines are used to protect.</td>
<td>IA-1 a.1 (b), IA-5 g, IA-5 (6)</td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL</strong> ensure that the minimum
assurance-related controls for the appropriate systems, or equivalent,
are satisfied.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="records-retention-policy-1">4.2.5. Records Retention
Policy</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL</strong> comply with its respective records
retention policies in accordance with applicable laws, regulations, and
policies, including any NARA records retention schedules that may
apply.</td>
<td>IA-1 a.1 (b)</td>
</tr>
<tr class="even">
<td>If the CSP opts to retain records in the absence of any mandatory
requirements, the CSP <strong>SHALL</strong> conduct a risk management
process, including assessments of privacy and security risks to
determine how long records should be retained and <strong>SHALL</strong>
inform the subscriber of that retention policy.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="authentication-assurance-level-3">4.3. Authentication
Assurance Level 3</h3></td>
<td></td>
</tr>
<tr class="even">
<td>AAL3 authentication <strong>SHALL</strong> use a hardware-based
authenticator and an authenticator that provides phishing resistance —
the same device <strong>MAY</strong> fulfill both these
requirements.</td>
<td>IA-8 (2) (a)</td>
</tr>
<tr class="odd">
<td>In order to authenticate at AAL3, claimants <strong>SHALL</strong>
prove possession and control of two distinct authentication factors
through secure authentication protocols.</td>
<td>IA-8 (2) (a)</td>
</tr>
<tr class="even">
<td><h3 id="permitted-authenticator-types-2">4.3.1. Permitted
Authenticator Types</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><p>AAL3 authentication <strong>SHALL</strong> occur by the use of
one of a combination of authenticators satisfying the requirements in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#aal3">Sec. 4.3</a>.
Possible combinations are:</p>
<ul>
<li><p>Multi-Factor Cryptographic Device (<a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#mfcd">Sec.
5.1.9</a>)</p></li>
<li><p>Single-Factor Cryptographic Device (<a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#sfcd">Sec.
5.1.7</a>) used in conjunction with a Memorized Secret (<a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#memsecret">Sec.
5.1.1</a>)</p></li>
<li><p>Multi-Factor OTP device (software or hardware) (<a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#multifactorOTP">Sec.
5.1.5</a>) used in conjunction with a Single-Factor Cryptographic Device
(<a href="https://pages.nist.gov/800-63-4/sp800-63b.html#sfcd">Sec.
5.1.7</a>)</p></li>
<li><p>Multi-Factor OTP device (hardware only) (<a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#multifactorOTP">Sec.
5.1.5</a>) used in conjunction with a Single-Factor Cryptographic
Software (<a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#sfcs">Sec.
5.1.6</a>)</p></li>
<li><p>Single-Factor OTP device (hardware only) (<a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#singlefactorOTP">Sec.
5.1.4</a>) used in conjunction with a Multi-Factor Cryptographic
Software Authenticator (<a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#mfcs">Sec.
5.1.8</a>)</p></li>
</ul></td>
<td><p>IA-2(6)(a)</p>
<p>IA-8 (2) (a)</p></td>
</tr>
<tr class="even">
<td><h3 id="authenticator-and-verifier-requirements-2">4.3.2.
Authenticator and Verifier Requirements</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>Communication between the claimant and verifier
<strong>SHALL</strong> be via an authenticated protected channel to
provide confidentiality of the authenticator output and resistance to
AitM attacks.</td>
<td>IA-5 g</td>
</tr>
<tr class="even">
<td>At least one cryptographic authenticator used at AAL3
<strong>SHALL</strong> be phishing resistant as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#verifimpers">Sec.
5.2.5</a> and <strong>SHALL</strong> be replay resistant as described in
<a href="https://pages.nist.gov/800-63-4/sp800-63b.html#replay">Sec.
5.2.8</a>.</td>
<td>IA-2(6)(b), IA2(8)</td>
</tr>
<tr class="odd">
<td>All authentication and reauthentication processes at AAL3
<strong>SHALL</strong> demonstrate authentication intent from at least
one authenticator as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#intent">Sec.
5.2.9</a>.</td>
<td></td>
</tr>
<tr class="even">
<td>Multi-factor authenticators used at AAL3 <strong>SHALL</strong> be
hardware cryptographic modules validated at <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-FIPS140-2">[FIPS140]</a>
Level 2 or higher overall with at least <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-FIPS140-2">[FIPS140]</a>
Level 3 physical security.</td>
<td>IA-1 a.1 (b), IA-2(6)(b)</td>
</tr>
<tr class="odd">
<td>Single-factor cryptographic devices used at AAL3
<strong>SHALL</strong> be validated at <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-FIPS140-2">[FIPS140]</a>
Level 1 or higher overall with at least <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-FIPS140-2">[FIPS140]</a>
Level 3 physical security.</td>
<td>IA-1 a.1 (b), IA-2(6)(b)</td>
</tr>
<tr class="even">
<td>Verifiers at AAL3 <strong>SHALL</strong> be validated at <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-FIPS140-2">[FIPS140]</a>
Level 1 or higher.</td>
<td>IA-1 a.1 (b)</td>
</tr>
<tr class="odd">
<td>Verifiers at AAL3 <strong>SHALL</strong> be verifier compromise
resistant as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#verifier-secrets">Sec.
5.2.7</a> with respect to at least one authentication factor.</td>
<td></td>
</tr>
<tr class="even">
<td>Hardware-based authenticators and verifiers at AAL3
<strong>SHOULD</strong> resist relevant side-channel (e.g., timing and
power-consumption analysis) attacks.</td>
<td>IA-2(6)(b)</td>
</tr>
<tr class="odd">
<td>When a biometric factor is used in authentication at AAL3, the
verifier <strong>SHALL</strong> make a determination that the biometric
sensor and subsequent processing meet the performance requirements
stated in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#biometric_use">Sec.
5.2.3</a>.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="reauthentication-2">4.3.3. Reauthentication</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>Periodic reauthentication of subscriber sessions
<strong>SHALL</strong> be performed as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#sessionreauthn">Sec.
7.2</a>.</td>
<td>IA-11</td>
</tr>
<tr class="even">
<td>At AAL3, authentication of the subscriber <strong>SHALL</strong> be
repeated at least once per 12 hours during an extended usage session,
regardless of user activity, as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#sessionreauthn">Sec.
7.2</a>.</td>
<td>IA-11</td>
</tr>
<tr class="odd">
<td>Reauthentication of the subscriber <strong>SHALL</strong> be
repeated following any period of inactivity lasting 15 minutes or
longer.</td>
<td>IA-11</td>
</tr>
<tr class="even">
<td>Reauthentication <strong>SHALL</strong> use both authentication
factors.</td>
<td></td>
</tr>
<tr class="odd">
<td>The session <strong>SHALL</strong> be terminated (i.e., logged out)
when either of these time limits is reached.</td>
<td></td>
</tr>
<tr class="even">
<td>The verifier <strong>MAY</strong> prompt the user to cause activity
just before the inactivity timeout.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="mapping-of-sp800-53-ia-to-sp-800-63-2">4.3.4. Security Controls</h3></td>
<td></td>
</tr>
<tr class="even">
<td>The CSP <strong>SHALL</strong> employ appropriately tailored
security controls from the baseline security controls defined in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-SP800-53">[SP800-53]</a>
or equivalent federal (e.g., <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-FEDRAMP">[FEDRAMP]</a>)
or industry standard that the organization has determined for the
information systems, applications, and online services that these
guidelines are used to protect.</td>
<td>IA-1 a.1 (b), IA-5 g, IA-5 (6)</td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL</strong> ensure that the minimum
assurance-related controls for the appropriate systems, or equivalent,
are satisfied.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="records-retention-policy-2">4.3.5. Records Retention
Policy</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL</strong> comply with its respective records
retention policies in accordance with applicable laws, regulations, and
policies, including any NARA records retention schedules that may
apply.</td>
<td>IA-1 a.1 (b)</td>
</tr>
<tr class="even">
<td>If the CSP opts to retain records in the absence of any mandatory
requirements, the CSP <strong>SHALL</strong> conduct a risk management
process, including assessments of privacy and security risks, to
determine how long records should be retained and <strong>SHALL</strong>
inform the subscriber of that retention policy.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="privacy-requirements">4.4. Privacy Requirements</h3></td>
<td></td>
</tr>
<tr class="even">
<td>The CSP <strong>SHALL</strong> employ appropriately tailored privacy
controls defined in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-SP800-53">[SP800-53]</a>
or equivalent industry standard.</td>
<td>IA-1 a.1 (b)</td>
</tr>
<tr class="odd">
<td>If CSPs process attributes for purposes other than identity
proofing, authentication, or attribute assertions (collectively
“identity service”), related fraud mitigation, or to comply with law or
legal process, CSPs <strong>SHALL</strong> implement measures to
maintain predictability and manageability commensurate with the privacy
risk arising from the additional processing</td>
<td></td>
</tr>
<tr class="even">
<td>Measures <strong>MAY</strong> include providing clear notice,
obtaining subscriber consent, or enabling selective use or disclosure of
attributes. When CSPs use consent measures, CSPs <strong>SHALL
NOT</strong> make consent for the additional processing a condition of
the identity service.</td>
<td></td>
</tr>
<tr class="odd">
<td><p>Regardless of whether the CSP is an agency or private sector
provider, the following requirements apply to a federal agency offering
or using the authentication service:</p>
<ol type="1">
<li><p>The agency <strong>SHALL</strong> consult with their Senior
Agency Official for Privacy (SAOP) and conduct an analysis to determine
whether the collection of PII to issue or maintain authenticators
triggers the requirements of the <em>Privacy Act of 1974</em> <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-PrivacyAct">[PrivacyAct]</a>
(see <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#agency-privacy">Sec.
9.4</a>).</p></li>
</ol></td>
<td>IA-1 a.1 (b)</td>
</tr>
<tr class="even">
<td><ol start="2" type="1">
<li><p>The agency <strong>SHALL</strong> publish a System of Records
Notice (SORN) to cover such collections, as applicable.</p></li>
</ol></td>
<td></td>
</tr>
<tr class="odd">
<td><ol start="3" type="1">
<li><p>The agency <strong>SHALL</strong> consult with their SAOP and
conduct an analysis to determine whether the collection of PII to issue
or maintain authenticators triggers the requirements of the
<em>E-Government Act of 2002</em> <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-E-Gov">[E-Gov]</a>.</p></li>
</ol></td>
<td>IA-1 a.1 (b)</td>
</tr>
<tr class="even">
<td><ol start="4" type="1">
<li><p>The agency <strong>SHALL</strong> publish a Privacy Impact
Assessment (PIA) to cover such collection, as applicable</p></li>
</ol></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="summary-of-requirements-1">4.5. Summary of
Requirements</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="authenticator-and-verifier-requirements-3">5. Authenticator
and Verifier Requirements</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="requirements-by-authenticator-type">5.1. Requirements by
Authenticator Type</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="memorized-secrets">5.1.1. Memorized Secrets</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="memorized-secret-authenticators">5.1.1.1. Memorized Secret
Authenticators</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Memorized secrets <strong>SHALL</strong> be at least 8 characters in
length.</td>
<td>IA-5 (1) (h)</td>
</tr>
<tr class="odd">
<td>Memorized secrets <strong>SHALL</strong> be either chosen by the
subscriber or assigned randomly by the CSP.</td>
<td></td>
</tr>
<tr class="even">
<td>If the CSP disallows a chosen memorized secret because it is on a
blocklist of commonly used, expected, or compromised values (see <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#memsecretver">Sec.
5.1.1.2</a>), the subscriber <strong>SHALL</strong> be required to
choose a different memorized secret.</td>
<td>IA-5 (1) (a)</td>
</tr>
<tr class="odd">
<td>No other complexity requirements for memorized secrets
<strong>SHALL</strong> be imposed.</td>
<td>IA-5 (1) (h)</td>
</tr>
<tr class="even">
<td><h3 id="memorized-secret-verifiers">5.1.1.2. Memorized Secret
Verifiers</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>Verifiers <strong>SHALL</strong> require memorized secrets to be at
least 8 characters in length.</td>
<td>IA-5 (1) (h), IA-5 (18)</td>
</tr>
<tr class="even">
<td>Verifiers <strong>SHOULD</strong> permit memorized secrets to be at
least 64 characters in length.</td>
<td>IA-5 (1) (h), IA-5 (18)</td>
</tr>
<tr class="odd">
<td>All printing ASCII <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-RFC20">[RFC20]</a>
characters as well as the space character <strong>SHOULD</strong> be
acceptable in memorized secrets.</td>
<td>IA-5 (1) (h), IA-5 (1) (f)</td>
</tr>
<tr class="even">
<td>Unicode <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-ISOIEC10646">[ISO/ISC
10646]</a> characters <strong>SHOULD</strong> be accepted as well.</td>
<td>IA-5 (1) (h),</td>
</tr>
<tr class="odd">
<td>Verifiers <strong>MAY</strong> make allowances for likely mistyping,
such as removing leading and trailing whitespace characters prior to
verification or allowing verification of memorized secrets with
differing case for the leading character, provided memorized secrets
remain at least 8 characters in length after such processing.</td>
<td></td>
</tr>
<tr class="even">
<td>Verifiers <strong>SHALL</strong> verify the entire submitted
memorized secret (i.e., not truncate the secret). For purposes of the
above length requirements, each Unicode code point
<strong>SHALL</strong> be counted as a single character.</td>
<td></td>
</tr>
<tr class="odd">
<td>If Unicode characters are accepted in memorized secrets, the
verifier <strong>SHOULD</strong> apply the normalization process for
stabilized strings using either the NFKC or NFKD normalization defined
in Sec. 12.1 of <em>Unicode Normalization Forms</em> <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-UAX15">[UAX15]</a>.</td>
<td>IA-5 (1) (f)</td>
</tr>
<tr class="even">
<td>Subscribers choosing memorized secrets containing Unicode characters
<strong>SHOULD</strong> be advised that some characters may be
represented differently by some endpoints, which can affect their
ability to authenticate successfully.</td>
<td>IA-5 (1) (f)</td>
</tr>
<tr class="odd">
<td>Memorized secret verifiers <strong>SHALL NOT</strong> permit the
subscriber to store a hint that is accessible to an unauthenticated
claimant.</td>
<td>IA-5 (18)</td>
</tr>
<tr class="even">
<td>Verifiers <strong>SHALL NOT</strong> prompt subscribers to use
specific types of information (e.g., “What was the name of your first
pet?”, a technique known as knowledge-based authentication (KBA) or
security questions) when choosing memorized secrets.</td>
<td></td>
</tr>
<tr class="odd">
<td>When processing requests to establish and change memorized secrets,
verifiers <strong>SHALL</strong> compare the prospective secrets against
a blocklist that contains values known to be commonly used, expected, or
compromised.</td>
<td>IA-5 (1) (a), IA-5 (1) (h), IA-5 (18)</td>
</tr>
<tr class="even">
<td><p>For example, the list <strong>MAY</strong> include, but is not
limited to:</p>
<ul>
<li><p>Passwords obtained from previous breach corpuses.</p></li>
<li><p>Dictionary words.</p></li>
<li><p>Repetitive or sequential characters (e.g. ‘aaaaaa’,
‘1234abcd’).</p></li>
<li><p>Context-specific words, such as the name of the service, the
username, and derivatives thereof.</p></li>
</ul></td>
<td>IA-5 (1) (a), IA-5 (1) (h), IA-5 (18)</td>
</tr>
<tr class="odd">
<td>If the chosen secret is found in the blocklist, the CSP or verifier
<strong>SHALL</strong> advise the subscriber that they need to select a
different secret, <strong>SHALL</strong> provide the reason for
rejection, and <strong>SHALL</strong> require the subscriber to choose a
different value.</td>
<td><p>IA-5 (1) (a), IA-5 (1) (b)</p>
<p>IA-5 (18)</p></td>
</tr>
<tr class="even">
<td>Since the blocklist is used to defend against brute-force attacks
and unsuccessful attempts are rate limited as described below, the
blocklist <strong>SHOULD</strong> be of a size sufficient to prevent
subscribers from choosing memorized secrets that attackers are likely to
guess before reaching the attempt limit.</td>
<td><p>IA-5 (1) (a)</p>
<p>IA-5 (18)</p></td>
</tr>
<tr class="odd">
<td>Excessively large blocklists <strong>SHOULD NOT</strong> be used
because they frustrate subscribers’ attempts to establish an acceptable
memorized secret and do not provide significantly improved
security.</td>
<td>IA-5 (1) (a)</td>
</tr>
<tr class="even">
<td>Verifiers <strong>SHALL</strong> offer guidance to the subscriber to
assist the user in choosing a strong memorized secret. This is
particularly important following the rejection of a memorized secret on
the above list as it discourages trivial modification of listed (and
likely very weak) memorized secrets <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-blocklists">[Blocklists]</a>.</td>
<td>IA-5 (1) (g)</td>
</tr>
<tr class="odd">
<td>Verifiers <strong>SHALL</strong> implement a rate-limiting mechanism
that effectively limits the number of failed authentication attempts
that can be made on the subscriber account as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#throttle">Sec.
5.2.2</a>.</td>
<td>IA-5 (18)</td>
</tr>
<tr class="even">
<td>Verifiers <strong>SHALL NOT</strong> impose other composition rules
(e.g., requiring mixtures of different character types or prohibiting
consecutively repeated characters) for memorized secrets</td>
<td>IA-5 (1) (h), IA-5 (18)</td>
</tr>
<tr class="odd">
<td>Verifiers <strong>SHALL NOT</strong> require users to periodically
change memorized secrets.</td>
<td>IA-5 (18)</td>
</tr>
<tr class="even">
<td>However, verifiers <strong>SHALL</strong> force a change if there is
evidence of compromise of the authenticator.</td>
<td>IA-5 (18)</td>
</tr>
<tr class="odd">
<td>Verifiers <strong>SHALL</strong> allow the use of password
managers.</td>
<td>IA-5 (18)</td>
</tr>
<tr class="even">
<td>To facilitate their use, verifiers <strong>SHOULD</strong> permit
claimants to use “paste” functionality when entering a memorized secret.
Password manangers may increase the likelihood that users will choose
stronger memorized secrets.</td>
<td>IA-5 (18)</td>
</tr>
<tr class="odd">
<td>In order to assist the claimant in successfully entering a memorized
secret, the verifier <strong>SHOULD</strong> offer an option to display
the secret — rather than a series of dots or asterisks — while it is
entered and until it is submitted to the verifier.</td>
<td><p>IA-5 (18)</p>
<p>IA-6</p></td>
</tr>
<tr class="even">
<td>This allows the claimant to confirm their entry if they are in a
location where their screen is unlikely to be observed. The verifier
<strong>MAY</strong> also permit the claimant’s device to display
individual entered characters for a short time after each character is
typed to verify correct entry. This is common on mobile devices.</td>
<td>IA-5 (18)</td>
</tr>
<tr class="odd">
<td>The verifier <strong>SHALL</strong> use approved encryption and an
authenticated protected channel when requesting memorized secrets in
order to provide resistance to eavesdropping and adversary-in-the-middle
attacks.</td>
<td>IA-5 g, IA-5 (1) (c)</td>
</tr>
<tr class="even">
<td>Verifiers <strong>SHALL</strong> store memorized secrets in a form
that is resistant to offline attacks</td>
<td>IA-5 (18)</td>
</tr>
<tr class="odd">
<td>Memorized secrets <strong>SHALL</strong> be salted and hashed using
a suitable password hashing scheme. Password hashing schemes take a
password, a salt, and a cost factor as inputs and generate a password
hash.</td>
<td><p>IA-5 g, IA-5 (1) (d)</p>
<p>IA-5 (18)</p></td>
</tr>
<tr class="even">
<td>A function that is both memory-hard and compute-hard
<strong>SHOULD</strong> be used because it increases the cost of an
attack.</td>
<td><p>IA-5 g, IA-5 (1) (d)</p>
<p>IA-5 (18)</p></td>
</tr>
<tr class="odd">
<td>The chosen output length of the password hashing scheme
<strong>SHOULD</strong> be the same as the length of the underlying
one-way function output.</td>
<td><p>IA-5 g, IA-5 (1) (d)</p>
<p>IA-5 (18)</p></td>
</tr>
<tr class="even">
<td>The salt <strong>SHALL</strong> be at least 32 bits in length and be
chosen arbitrarily so as to minimize salt value collisions among stored
hashes.</td>
<td><p>IA-5 g, IA-5 (1) (d)</p>
<p>IA-5 (18)</p></td>
</tr>
<tr class="odd">
<td>Both the salt value and the resulting hash <strong>SHALL</strong> be
stored for each memorized secret authenticator.</td>
<td>IA-5 (18)</td>
</tr>
<tr class="even">
<td>For the Password-based Key Derivation Function 2 (PBKDF2) <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-SP800-132">[SP800-132]</a>,
the cost factor is an iteration count: the more times the PBKDF2
function is iterated, the longer it takes to compute the password hash.
Therefore, the iteration count <strong>SHOULD</strong> be as large as
verification server performance will allow, typically at least 10,000
iterations.</td>
<td>IA-5 (18)</td>
</tr>
<tr class="odd">
<td>In addition, verifiers <strong>SHOULD</strong> perform an additional
iteration of a keyed hashing or encryption operation using a secret key
known only to the verifier.</td>
<td><p>IA-5 g, IA-5 (1) (d)</p>
<p>IA-5 (18)</p></td>
</tr>
<tr class="even">
<td>This key value, if used, <strong>SHALL</strong> be generated by an
approved random bit generator <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-SP800-90Ar1">[SP800-90Ar1]</a>
and provide at least the minimum security strength specified in the
latest revision of NIST SP 800-131A, <em>Transitioning the Use of
Cryptographic Algorithms and Key Lengths</em> <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-SP800-131A">[SP800-131A]</a>
(112 bits as of the date of this publication).</td>
<td><p>IA-1 a.1 (b), IA-5 (1) (d)</p>
<p>IA-5 (18)</p></td>
</tr>
<tr class="odd">
<td>The secret key value <strong>SHALL</strong> be stored separately
from the hashed memorized secrets (e.g., in a specialized device like a
hardware security module).</td>
<td><p>IA-5 g, IA-5 (1) (d)</p>
<p>IA-5 (18)</p></td>
</tr>
<tr class="even">
<td><h3 id="look-up-secrets">5.1.2. Look-Up Secrets</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="look-up-secret-authenticators">5.1.2.1. Look-Up Secret
Authenticators</h3></td>
<td></td>
</tr>
<tr class="even">
<td>CSPs creating look-up secret authenticators <strong>SHALL</strong>
use an approved random bit generator <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-SP800-90Ar1">[SP800-90Ar1]</a>
to generate the list of secrets and <strong>SHALL</strong> deliver the
authenticator securely to the subscriber. Look-up secrets
<strong>SHALL</strong> have at least 20 bits of entropy</td>
<td><p>IA-1 a.1 (b)</p>
<p>IA-5 g</p></td>
</tr>
<tr class="odd">
<td>Look-up secrets <strong>MAY</strong> be distributed by the CSP in
person, by postal mail to the subscriber’s address of record, or by
online distribution. If distributed online, look-up secrets
<strong>SHALL</strong> be distributed over a secure channel in
accordance with the post-enrollment binding requirements in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#post-enroll-bind">Sec.
6.1.2</a>.</td>
<td></td>
</tr>
<tr class="even">
<td>If the authenticator uses look-up secrets sequentially from a list,
the subscriber <strong>MAY</strong> dispose of used secrets, but only
after a successful authentication</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="look-up-secret-verifiers">5.1.2.2. Look-Up Secret
Verifiers</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Verifiers of look-up secrets <strong>SHALL</strong> prompt the
claimant for the next secret from their authenticator or for a specific
(e.g., numbered) secret.</td>
<td></td>
</tr>
<tr class="odd">
<td>A given secret from an authenticator <strong>SHALL</strong> be used
successfully only once. If the look-up secret is derived from a grid
card, each cell of the grid <strong>SHALL</strong> be used only
once.</td>
<td></td>
</tr>
<tr class="even">
<td>Verifiers <strong>SHALL</strong> store look-up secrets in a form
that is resistant to offline attacks.</td>
<td></td>
</tr>
<tr class="odd">
<td>Look-up secrets having at least 112 bits of entropy
<strong>SHALL</strong> be hashed with an approved one-way function as
described in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#memsecretver">Sec.
5.1.1.2</a>.</td>
<td></td>
</tr>
<tr class="even">
<td>Look-up secrets with fewer than 112 bits of entropy
<strong>SHALL</strong> be salted and hashed using a suitable password
hashing scheme, also described in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#memsecretver">Sec.
5.1.1.2</a>.</td>
<td></td>
</tr>
<tr class="odd">
<td>The salt value <strong>SHALL</strong> be at least 32 bits in length
and arbitrarily chosen so as to minimize salt value collisions among
stored hashes. Both the salt value and the resulting hash
<strong>SHALL</strong> be stored for each look-up secret.</td>
<td></td>
</tr>
<tr class="even">
<td>For look-up secrets that have less than 64 bits of entropy, the
verifier <strong>SHALL</strong> implement a rate-limiting mechanism that
effectively limits the number of failed authentication attempts that can
be made on the subscriber account as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#throttle">Sec.
5.2.2</a>.</td>
<td></td>
</tr>
<tr class="odd">
<td>The verifier <strong>SHALL</strong> use approved encryption and an
authenticated protected channel when requesting look-up secrets in order
to provide resistance to eavesdropping and AitM attacks.</td>
<td>IA-5 g</td>
</tr>
<tr class="even">
<td><h3 id="out-of-band-devices">5.1.3. Out-of-Band Devices</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="out-of-band-authenticators">5.1.3.1. Out-of-Band
Authenticators</h3></td>
<td></td>
</tr>
<tr class="even">
<td>The out-of-band authenticator <strong>SHALL</strong> establish a
separate channel with the verifier in order to retrieve the out-of-band
secret or authentication request. This channel is considered to be
out-of-band with respect to the primary communication channel (even if
it terminates on the same device) provided the device does not leak
information from one channel to the other without the authorization of
the claimant.</td>
<td><p>IA-2(13)</p>
<p>IA-5 g, IA-5 h.</p></td>
</tr>
<tr class="odd">
<td>The out-of-band device <strong>SHOULD</strong> be uniquely
addressable by the verifier.</td>
<td>IA-2(13)</td>
</tr>
<tr class="even">
<td>Communication over the secondary channel <strong>SHALL</strong> be
encrypted unless sent via the public switched telephone network
(PSTN).</td>
<td><p>IA-2(13)</p>
<p>IA-5 g</p></td>
</tr>
<tr class="odd">
<td>For additional authenticator requirements specific to use of the
PSTN for out-of-band authentication, see <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#pstnOOB">Sec.
5.1.3.3</a>. Channels or addresses that do not prove possession of a
specific device, such as voice-over-IP (VOIP) telephone numbers,
<strong>SHALL NOT</strong> be used for out-of-band authentication</td>
<td><p>IA-2(13)</p>
<p>IA-5 g</p></td>
</tr>
<tr class="even">
<td>Email <strong>SHALL NOT</strong> be used for out-of-band
authentication because it also does not prove possession of a specific
device and is typically accessed using only a memorized secret.</td>
<td><p>IA-2(13)</p>
<p>IA-5 g</p></td>
</tr>
<tr class="odd">
<td>The out-of-band authenticator <strong>SHALL</strong> uniquely
authenticate itself in one of the following ways when communicating with
the verifier:</td>
<td>IA-2(13)</td>
</tr>
<tr class="even">
<td><ul>
<li><p>Establish an authenticated protected channel to the verifier
using approved cryptography. The key used <strong>SHALL</strong> be
stored in suitably secure storage available to the authenticator
application (e.g., keychain storage, TPM, TEE, secure element).</p></li>
</ul></td>
<td>IA-2(13)</td>
</tr>
<tr class="odd">
<td><ul>
<li><p>Authenticate to a public mobile telephone network using a SIM
card or equivalent that uniquely identifies the device. This method
<strong>SHALL</strong> only be used if a secret is being sent from the
verifier to the out-of-band device via the PSTN (SMS or voice).</p></li>
</ul></td>
<td>IA-2(13)</td>
</tr>
<tr class="even">
<td>If a secret is sent by the verifier to the out-of-band device, the
device <strong>SHOULD NOT</strong> display the authentication secret
while it is locked by the owner (i.e., <strong>SHOULD</strong> require
the presentation and verification of a PIN, passcode, or biometric
characteristic to view). However, authenticators <strong>SHOULD</strong>
indicate the receipt of an authentication secret on a locked
device.</td>
<td><p>IA-2(13)</p>
<p>IA-5 g, IA-5 h.</p></td>
</tr>
<tr class="odd">
<td>If the out-of-band authenticator requests approval over the
secondary communication channel — rather than by the presenting a secret
that the claimant transfers to the primary communication channel — it
<strong>SHALL</strong> accept transfer of the secret from the primary
channel and send it to the verifier over the secondary channel to
associate the approval with the authentication transaction.</td>
<td>IA-2(13)</td>
</tr>
<tr class="even">
<td>The claimant <strong>MAY</strong> perform the transfer manually or
use a technology such as a barcode or QR code to effect the
transfer.</td>
<td>IA-2(13)</td>
</tr>
<tr class="odd">
<td><h3 id="out-of-band-verifiers">5.1.3.2. Out-of-Band
Verifiers</h3></td>
<td></td>
</tr>
<tr class="even">
<td>When the out-of-band authenticator is a secure application, such as
on a smart phone, the verifier <strong>MAY</strong> send a push
notification to that device.</td>
<td>IA-2(13)</td>
</tr>
<tr class="odd">
<td>The verifier waits for the establishment of an authenticated
protected channel with the out-of-band authenticator and verifies its
identifying key. The verifier <strong>SHALL NOT</strong> store the
identifying key itself, but <strong>SHALL</strong> use a verification
method (e.g., an approved hash function or proof of possession of the
identifying key) to uniquely identify the authenticator. Once
authenticated, the verifier transmits the authentication secret to the
authenticator.</td>
<td>IA-2(13)</td>
</tr>
<tr class="even">
<td>Depending on the type of out-of-band authenticator, one of the
following <strong>SHALL</strong> take place:</td>
<td>IA-2(13)</td>
</tr>
<tr class="odd">
<td><ul>
<li><p>Transfer of secret from the secondary to the primary channel: The
verifier <strong>MAY</strong> signal the device containing the
subscriber’s authenticator to indicate readiness to authenticate. It
<strong>SHALL</strong> then transmit a random secret to the out-of-band
authenticator. The verifier <strong>SHALL</strong> then wait for the
secret to be returned on the primary communication channel.</p></li>
</ul></td>
<td>IA-2(13)</td>
</tr>
<tr class="even">
<td><ul>
<li><p>Transfer of secret from the primary to the secondary channel: The
verifier <strong>SHALL</strong> display a random authentication secret
to the claimant via the primary channel. It <strong>SHALL</strong> then
wait for the secret to be returned on the secondary channel from the
claimant’s out-of-band authenticator.</p></li>
</ul></td>
<td>IA-2(13)</td>
</tr>
<tr class="odd">
<td>In all cases, the authentication <strong>SHALL</strong> be
considered invalid if not completed within 10 minutes.</td>
<td>IA-2(13)</td>
</tr>
<tr class="even">
<td>In order to provide replay resistance as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#replay">Sec.
5.2.8</a>, verifiers <strong>SHALL</strong> accept a given
authentication secret only once during the validity period.</td>
<td>IA2(8), IA-2(13)</td>
</tr>
<tr class="odd">
<td>The verifier <strong>SHALL</strong> generate random authentication
secrets with at least 20 bits of entropy using an approved random bit
generator <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-SP800-90Ar1">[SP800-90Ar1]</a>.</td>
<td>IA-1 a.1 (b), IA-2(13)</td>
</tr>
<tr class="even">
<td>If the authentication secret has less than 64 bits of entropy, the
verifier <strong>SHALL</strong> implement a rate-limiting mechanism that
effectively limits the number of failed authentication attempts that can
be made on the subscriber account as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#throttle">Sec.
5.2.2</a>.</td>
<td>IA-2(13)</td>
</tr>
<tr class="odd">
<td>Out-of-band verifiers <strong>SHALL</strong> consider all
authentication operations to be single-factor unless the CSP has
confirmed that the out-of-band authentication meets the requirements of
<a href="https://pages.nist.gov/800-63-4/sp800-63b.html#mfooba">Sec.
5.1.3.4</a>.</td>
<td>IA-2(13)</td>
</tr>
<tr class="even">
<td>This requirement <strong>MAY</strong> be satisfied by issuance of
the authenticator by the CSP or a trusted third party or by use of an
authentication application known by the CSP to meet these
requirements.</td>
<td>IA-2(13)</td>
</tr>
<tr class="odd">
<td>Out-of-band verifiers that send a push notification to a subscriber
device <strong>SHOULD</strong> implement a reasonable limit on the rate
or total number of push notifications that will be sent since the last
successful authentication</td>
<td>IA-2(13)</td>
</tr>
<tr class="even">
<td><h3
id="authentication-using-the-public-switched-telephone-network">5.1.3.3.
Authentication using the Public Switched Telephone Network</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>Use of the PSTN for out-of-band verification is restricted as
described in this section and in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#restricted">Sec.
5.2.10</a>. If out-of-band verification is to be made using the PSTN,
the verifier <strong>SHALL</strong> verify that the pre-registered
telephone number being used is associated with a specific physical
device.</td>
<td><p>IA-2(13)</p>
<p>IA-5 g</p></td>
</tr>
<tr class="even">
<td>Changing the pre-registered telephone number is considered to be the
binding of a new authenticator and <strong>SHALL</strong> only occur as
described in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#post-enroll-bind">Sec.
6.1.2</a>.</td>
<td></td>
</tr>
<tr class="odd">
<td>Use of the PSTN to deliver out-of-band authentication secrets is
potentially not available to some subscribers in areas with limited
telephone coverage (particularly in areas without mobile phone service).
Accordingly, verifiers <strong>SHALL</strong> ensure that alternative
authenticator types are available to all subscribers and
<strong>SHOULD</strong> remind subscribers of this limitation of PSTN
out-of-band authenticators prior to binding.</td>
<td>IA-2(13)</td>
</tr>
<tr class="even">
<td>Verifiers <strong>SHOULD</strong> consider risk indicators such as
device swap, SIM change, number porting, or other abnormal behavior
before using the PSTN to deliver an out-of-band authentication
secret.</td>
<td>IA-2(13)</td>
</tr>
<tr class="odd">
<td><h3 id="multi-factor-out-of-band-authenticators">5.1.3.4.
Multi-Factor Out-of-Band Authenticators</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Each use of the authenticator <strong>SHALL</strong> require the
presentation of the activation factor.</td>
<td>IA-2(13)</td>
</tr>
<tr class="odd">
<td>The use of an activation secret by the authenticator
<strong>SHALL</strong> meet the requirements of <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#s-5-2-11">Sec.
5.2.11</a></td>
<td>IA-2(13)</td>
</tr>
<tr class="even">
<td>. A biometric activation factor <strong>SHALL</strong> meet the
requirements of <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#biometric_use">Sec.
5.2.3</a>, including limits on the number of consecutive authentication
failures.</td>
<td>IA-2(13)</td>
</tr>
<tr class="odd">
<td>Submission of the activation factor <strong>SHALL</strong> be a
separate operation from unlocking of the host device (e.g., smartphone),
although the same activation factor used to unlock the host device
<strong>MAY</strong> be used in the authentication operation.</td>
<td>IA-2(13)</td>
</tr>
<tr class="even">
<td>The memorized secret or biometric sample used for activation — and
any biometric data derived from the biometric sample such as a probe
produced through signal processing — <strong>SHALL</strong> be zeroized
immediately after the authentication operation.</td>
<td><p>IA-2(13)</p>
<p>IA-5 g,IA-5 h.</p></td>
</tr>
<tr class="odd">
<td><h3 id="single-factor-otp-device">5.1.4. Single-Factor OTP
Device</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="single-factor-otp-authenticators">5.1.4.1. Single-Factor OTP
Authenticators</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>The secret key and its algorithm <strong>SHALL</strong> provide at
least the minimum security strength specified in the latest revision of
<a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-SP800-131A">[SP800-131A]</a>
(112 bits as of the date of this publication).</td>
<td>IA-1 a.1 (b)</td>
</tr>
<tr class="even">
<td>The nonce <strong>SHALL</strong> be of sufficient length to ensure
that it is unique for each operation of the device over its
lifetime.</td>
<td></td>
</tr>
<tr class="odd">
<td>If a subscriber needs to change the device used for a software-based
OTP authenticator, they <strong>SHOULD</strong> bind the authenticator
application on the new device to their subscriber account as described
in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#post-enroll-bind">Sec.
6.1.2.1</a> and invalidate the authenticator application that will no
longer be used.</td>
<td></td>
</tr>
<tr class="even">
<td>The authenticator output is obtained by using an approved block
cipher or hash function to combine the key and nonce in a secure manner.
The authenticator output <strong>MAY</strong> be truncated to as few as
6 decimal digits (approximately 20 bits of entropy).</td>
<td></td>
</tr>
<tr class="odd">
<td>If the nonce used to generate the authenticator output is based on a
real-time clock, the nonce <strong>SHALL</strong> be changed at least
once every 2 minutes</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="single-factor-otp-verifiers">5.1.4.2. Single-Factor OTP
Verifiers</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>Single-factor OTP verifiers effectively duplicate the process of
generating the OTP used by the authenticator. As such, the symmetric
keys used by authenticators are also present in the verifier, and
<strong>SHALL</strong> be strongly protected against unauthorized
disclosure by the use of access controls that limit access to the keys
to only those software components on the device requiring access.</td>
<td></td>
</tr>
<tr class="even">
<td>When a single-factor OTP authenticator is being associated with a
subscriber account, the verifier or associated CSP
<strong>SHALL</strong> use approved cryptography to either generate and
exchange or to obtain the secrets required to duplicate the
authenticator output.</td>
<td></td>
</tr>
<tr class="odd">
<td>The verifier <strong>SHALL</strong> use approved encryption and an
authenticated protected channel when collecting the OTP in order to
provide resistance to eavesdropping and AitM attacks</td>
<td>IA-5 g</td>
</tr>
<tr class="even">
<td>In order to provide replay resistance as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#replay">Sec.
5.2.8</a>, verifiers <strong>SHALL</strong> accept a given OTP only once
while it is valid.</td>
<td>IA2(8)</td>
</tr>
<tr class="odd">
<td>In the event a claimant’s authentication is denied due to duplicate
use of an OTP, verifiers <strong>MAY</strong> warn the claimant in case
an attacker has been able to authenticate in advance.</td>
<td></td>
</tr>
<tr class="even">
<td>Verifiers <strong>MAY</strong> also warn a subscriber in an existing
session of the attempted duplicate use of an OTP.</td>
<td></td>
</tr>
<tr class="odd">
<td>Time-based OTPs <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-totp">[TOTP]</a>
<strong>SHALL</strong> have a defined lifetime that is determined by the
expected clock drift — in either direction — of the authenticator over
its lifetime, plus allowance for network delay and user entry of the
OTP.</td>
<td></td>
</tr>
<tr class="even">
<td>If the authenticator output has less than 64 bits of entropy, the
verifier <strong>SHALL</strong> implement a rate-limiting mechanism that
effectively limits the number of failed authentication attempts that can
be made on the subscriber account as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#throttle">Sec.
5.2.2</a>.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="multi-factor-otp-devices">5.1.5. Multi-Factor OTP
Devices</h3></td>
<td></td>
</tr>
<tr class="even">
<td>The multi-factor OTP device is <em>something you have</em>, and it
<strong>SHALL</strong> be activated by either <em>something you
know</em> or <em>something you are</em>.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="multi-factor-otp-authenticators">5.1.5.1. Multi-Factor OTP
Authenticators</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Multi-factor OTP authenticators operate in a similar manner to
single-factor OTP authenticators (see <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#sfotpa">Sec.
5.1.4.1</a>), except that they require the presentation and verification
of either a memorized secret or a biometric characteristic to obtain the
OTP from the authenticator. Each use of the authenticator
<strong>SHALL</strong> require the input of the activation factor.</td>
<td></td>
</tr>
<tr class="odd">
<td>The secret key and its algorithm <strong>SHALL</strong> provide at
least the minimum security strength specified in the latest revision of
<a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-SP800-131A">[SP800-131A]</a>
(112 bits as of the date of this publication).</td>
<td>IA-1 a.1 (b)</td>
</tr>
<tr class="even">
<td>The nonce <strong>SHALL</strong> be of sufficient length to ensure
that it is unique for each operation of the device over its
lifetime</td>
<td></td>
</tr>
<tr class="odd">
<td>If a subscriber needs to change the device used for a software-based
OTP authenticator, they <strong>SHOULD</strong> bind the authenticator
application on the new device to their subscriber account as described
in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#post-enroll-bind">Sec.
6.1.2.1</a> and invalidate the authenticator application that will no
longer be used.</td>
<td></td>
</tr>
<tr class="even">
<td>The authenticator output is obtained by using an approved block
cipher or hash function to combine the key and nonce in a secure manner.
The authenticator output <strong>MAY</strong> be truncated to as few as
6 decimal digits (approximately 20 bits of entropy).</td>
<td></td>
</tr>
<tr class="odd">
<td>If the nonce used to generate the authenticator output is based on a
real-time clock, the nonce <strong>SHALL</strong> be changed at least
once every 2 minutes.</td>
<td></td>
</tr>
<tr class="even">
<td>The use of an activation secret by the authenticator
<strong>SHALL</strong> meet the requirements of <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#s-5-2-11">Sec.
5.2.11</a>.</td>
<td></td>
</tr>
<tr class="odd">
<td>A biometric activation factor <strong>SHALL</strong> meet the
requirements of <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#biometric_use">Sec.
5.2.3</a>, including limits on the number of consecutive authentication
failures.</td>
<td></td>
</tr>
<tr class="even">
<td>Submission of the activation factor <strong>SHALL</strong> be a
separate operation from unlocking of the host device (e.g., smartphone),
although the same activation factor used to unlock the host device
<strong>MAY</strong> be used in the authentication operation.</td>
<td></td>
</tr>
<tr class="odd">
<td>The unencrypted key and activation secret or biometric sample — and
any biometric data derived from the biometric sample such as a probe
produced through signal processing — <strong>SHALL</strong> be zeroized
immediately after an OTP has been generated</td>
<td>IA-5 g,IA-5 h.</td>
</tr>
<tr class="even">
<td><h3 id="multi-factor-otp-verifiers">5.1.5.2. Multi-Factor OTP
Verifiers</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>Multi-factor OTP verifiers effectively duplicate the process of
generating the OTP used by the authenticator, but without the
requirement that a second factor be provided. As such, the symmetric
keys used by authenticators <strong>SHALL</strong> be strongly protected
against unauthorized disclosure by the use of access controls that limit
access to the keys to only those software components on the device
requiring access.</td>
<td></td>
</tr>
<tr class="even">
<td>When a multi-factor OTP authenticator is being associated with a
subscriber account, the verifier or associated CSP
<strong>SHALL</strong> use approved cryptography to either generate and
exchange or to obtain the secrets required to duplicate the
authenticator output.</td>
<td></td>
</tr>
<tr class="odd">
<td>The verifier or CSP <strong>SHALL</strong> also establish, by
issuance of the authentictor, that the authenticator is a multi-factor
device. Otherwise, the verifier <strong>SHALL</strong> treat the
authenticator as single-factor, in accordance with <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#singlefactorOTP">Sec.
5.1.4</a>.</td>
<td></td>
</tr>
<tr class="even">
<td>The verifier <strong>SHALL</strong> use approved encryption and an
authenticated protected channel when collecting the OTP in order to
provide resistance to eavesdropping and AitM attacks.</td>
<td>IA-5 g</td>
</tr>
<tr class="odd">
<td>In order to provide replay resistance as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#replay">Sec.
5.2.8</a>, verifiers <strong>SHALL</strong> accept a given OTP only once
while it is valid.</td>
<td>IA2(8)</td>
</tr>
<tr class="even">
<td>In the event a claimant’s authentication is denied due to duplicate
use of an OTP, verifiers <strong>MAY</strong> warn the claimant in case
an attacker has been able to authenticate in advance.</td>
<td></td>
</tr>
<tr class="odd">
<td>Verifiers <strong>MAY</strong> also warn a subscriber in an existing
session of the attempted duplicate use of an OTP.</td>
<td></td>
</tr>
<tr class="even">
<td>Time-based OTPs <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-totp">[TOTP]</a>
<strong>SHALL</strong> have a defined lifetime that is determined by the
expected clock drift — in either direction — of the authenticator over
its lifetime, plus allowance for network delay and user entry of the
OTP.</td>
<td></td>
</tr>
<tr class="odd">
<td>If the authenticator output or activation secret has less than 64
bits of entropy, the verifier <strong>SHALL</strong> implement a
rate-limiting mechanism that effectively limits the number of failed
authentication attempts that can be made on the subscriber account as
described in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#throttle">Sec.
5.2.2</a>.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="single-factor-cryptographic-software">5.1.6. Single-Factor
Cryptographic Software</h3></td>
<td>No requirements in section</td>
</tr>
<tr class="odd">
<td><h3
id="single-factor-cryptographic-software-authenticators">5.1.6.1.
Single-Factor Cryptographic Software Authenticators</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Single-factor cryptographic software authenticators encapsulate one
or more secret keys unique to the authenticator. The key
<strong>SHALL</strong> be stored in suitably secure storage available to
the authenticator application (e.g., keychain storage, TPM, or TEE if
available).</td>
<td><p>IA-5 g, IA-5 h.</p>
<p>IA-5 (2) (a) (1)</p></td>
</tr>
<tr class="odd">
<td>The key <strong>SHALL</strong> be strongly protected against
unauthorized disclosure by the use of access controls that limit access
to the key to only those software components on the device requiring
access</td>
<td>IA-5 (2) (a) (1)</td>
</tr>
<tr class="even">
<td>External cryptographic authenticators that do not meet the
requirements of cryptographic hardware authenticators (e.g., that have a
mechanism to allow private keys to be exported) are also considered to
be cryptographic software authenticators. They <strong>SHALL</strong>
meet the requirements for connected authenticators in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#s-5-2-12">Sec.
5.2.12</a>.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="single-factor-cryptographic-software-verifiers">5.1.6.2.
Single-Factor Cryptographic Software Verifiers</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="single-factor-cryptographic-devices">5.1.7. Single-Factor
Cryptographic Devices</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="single-factor-cryptographic-device-authenticators">5.1.7.1.
Single-Factor Cryptographic Device Authenticators</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Single-factor cryptographic device authenticators use
tamper-resistant hardware to encapsulate one or more secret keys unique
to the authenticator that <strong>SHALL NOT</strong> be exportable
(i.e., cannot be removed from the device). The authenticator operates
using a secret key to sign a challenge nonce presented through a direct
interface between the authenticator and endpoint (e.g., a USB port or
secured wireless connection) as specified in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#s-5-2-12">Sec.
5.2.12</a>.</td>
<td>IA-5 g,IA-5 h.</td>
</tr>
<tr class="odd">
<td>The secret key and its algorithm <strong>SHALL</strong> provide at
least the minimum security length specified in the latest revision of <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-SP800-131A">[SP800-131A]</a>
(112 bits as of the date of this publication). The challenge nonce
<strong>SHALL</strong> be at least 64 bits in length. Approved
cryptography <strong>SHALL</strong> be used.</td>
<td>IA-1 a.1 (b)</td>
</tr>
<tr class="even">
<td>In order to be considered a cryptographic device, an authenticator
<strong>SHALL</strong> either be a separate piece of hardware or an
embedded processor or execution environment, e.g., secure element,
trusted execution environment (TEE), trusted platform module (TPM).</td>
<td><p>IA-5 g, IA-5 h.</p>
<p>IA-5 (2) (a) (1)</p></td>
</tr>
<tr class="odd">
<td>These hardware authenticators or embedded processors are separate
from a host processor such as the CPU on a laptop or mobile device. A
cryptographic device authenticator <strong>SHALL</strong> be designed so
as to prohibit the export of the authentication secret to the host
processor and <strong>SHALL NOT</strong> be capable of being
reprogrammed by the host processor so as to allow the secret to be
extracted. The authenticator is subject to applicable <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-FIPS140-2">[FIPS140]</a>
requirements of the AAL at which the authenticator is being used.</td>
<td><p>IA-1 a.1 (b),</p>
<p>IA-5 g, IA-5 h.</p>
<p>IA-5 (2) (a) (1)</p>
<p>IA-7</p></td>
</tr>
<tr class="even">
<td>Single-factor cryptographic device authenticators
<strong>SHOULD</strong> require a physical input (e.g., the pressing of
a button) in order to operate.</td>
<td>IA-5 g,IA-5 h.</td>
</tr>
<tr class="odd">
<td><h3 id="single-factor-cryptographic-device-verifiers">5.1.7.2.
Single-Factor Cryptographic Device Verifiers</h3></td>
<td></td>
</tr>
<tr class="even">
<td>The verifier has either symmetric or asymmetric cryptographic keys
corresponding to each authenticator. While both types of keys
<strong>SHALL</strong> be protected against modification, symmetric keys
<strong>SHALL</strong> additionally be protected against unauthorized
disclosure by the use of access controls that limit access to the key to
only those software components on the device requiring access.</td>
<td>IA-5 g</td>
</tr>
<tr class="odd">
<td>The challenge nonce <strong>SHALL</strong> be at least 64 bits in
length, and <strong>SHALL</strong> either be unique over the
authenticator’s lifetime or statistically unique (i.e., generated using
an approved random bit generator <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-SP800-90Ar1">[SP800-90Ar1]</a>).</td>
<td></td>
</tr>
<tr class="even">
<td>The verification operation <strong>SHALL</strong> use approved
cryptography</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="multi-factor-cryptographic-software">5.1.8. Multi-Factor
Cryptographic Software</h3></td>
<td></td>
</tr>
<tr class="even">
<td>The multi-factor cryptographic software authenticator is
<em>something you have</em>, and it <strong>SHALL</strong> be activated
by either <em>something you know</em> or <em>something you
are</em>.</td>
<td>IA-7</td>
</tr>
<tr class="odd">
<td><h3 id="multi-factor-cryptographic-software-authenticators">5.1.8.1.
Multi-Factor Cryptographic Software Authenticators</h3></td>
<td></td>
</tr>
<tr class="even">
<td>The key <strong>SHOULD</strong> be stored in suitably secure storage
available to the authenticator application (e.g., keychain storage, TPM,
TEE).</td>
<td>IA-5 g, IA-5 h.</td>
</tr>
<tr class="odd">
<td>The key <strong>SHALL</strong> be strongly protected against
unauthorized disclosure by the use of access controls that limit access
to the key to only those software components on the device requiring
access.</td>
<td><p>IA-5 g, IA-5 h.</p>
<p>IA-5 (2) (a) (1)</p></td>
</tr>
<tr class="even">
<td>External cryptographic authenticators that do not meet the
requirements of cryptographic hardware authenticators (e.g., that have a
mechanism to allow private keys to be exported) are also considered to
be cryptographic software authenticators. They <strong>SHALL</strong>
meet the requirements for connected authenticators in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#s-5-2-12">Sec.
5.2.12</a>.</td>
<td></td>
</tr>
<tr class="odd">
<td>Each authentication operation using the authenticator
<strong>SHALL</strong> require the input of the activation factor.</td>
<td>IA-5 (2) (a) (1)</td>
</tr>
<tr class="even">
<td>The use of an activation secret by the authenticator
<strong>SHALL</strong> meet the requirements of <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#s-5-2-11">Sec.
5.2.11</a>.</td>
<td>IA-5 (2) (a) (1)</td>
</tr>
<tr class="odd">
<td>A biometric activation factor <strong>SHALL</strong> meet the
requirements of <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#biometric_use">Sec.
5.2.3</a>, including limits on the number of consecutive authentication
failures.</td>
<td>IA-5 (2) (a) (1)</td>
</tr>
<tr class="even">
<td>Submission of the activation factor <strong>SHALL</strong> be a
separate operation from unlocking of the host device (e.g., smartphone),
although the same activation factor used to unlock the host device
<strong>MAY</strong> be used in the authentication operation.</td>
<td>IA-5 (2) (a) (1)</td>
</tr>
<tr class="odd">
<td>The activation secret or biometric sample — and any biometric data
derived from the biometric sample such as a probe produced through
signal processing — <strong>SHALL</strong> be zeroized immediately after
an authentication transaction has taken place</td>
<td><p>IA-5 g, IA-5 h.</p>
<p>IA-5 (2) (a) (1)</p></td>
</tr>
<tr class="even">
<td><h3 id="multi-factor-cryptographic-software-verifiers">5.1.8.2.
Multi-Factor Cryptographic Software Verifiers</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="multi-factor-cryptographic-devices">5.1.9. Multi-Factor
Cryptographic Devices</h3></td>
<td></td>
</tr>
<tr class="even">
<td>The multi-factor cryptographic device is <em>something you
have</em>, and it <strong>SHALL</strong> be activated by either
<em>something you know</em> or <em>something you are</em>.</td>
<td>IA-7</td>
</tr>
<tr class="odd">
<td><h3 id="multi-factor-cryptographic-device-authenticators">5.1.9.1.
Multi-Factor Cryptographic Device Authenticators</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Multi-factor cryptographic device authenticators use
tamper-resistant hardware to encapsulate one or more secret keys unique
to the authenticator that <strong>SHALL NOT</strong> be exportable
(i.e., cannot be removed from the device).</td>
<td><p>IA-5 g, IA-5 h.</p>
<p>IA-5 (2) (a) (1)</p></td>
</tr>
<tr class="odd">
<td>The secret key <strong>SHALL</strong> be accessible only through the
presentation and verification of an activation factor, either a
biometric characteristic or an activation secret as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#s-5-2-11">Sec.
5.2.11</a>.</td>
<td>IA-5 (2) (a) (1)</td>
</tr>
<tr class="even">
<td>The secret key and its algorithm <strong>SHALL</strong> provide at
least the minimum security length specified in the latest revision of <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-SP800-131A">[SP800-131A]</a>
(112 bits as of the date of this publication).</td>
<td>IA-1 a.1 (b)</td>
</tr>
<tr class="odd">
<td>The challenge nonce <strong>SHALL</strong> be at least 64 bits in
length. Approved cryptography <strong>SHALL</strong> be used.</td>
<td></td>
</tr>
<tr class="even">
<td>In order to be considered a cryptographic device, an authenticator
<strong>SHALL</strong> either be a separate piece of hardware or an
embedded processor or execution environment, e.g., secure element,
trusted execution environment (TEE), trusted platform module (TPM).</td>
<td><p>IA-2(6)(a)</p>
<p>IA-5 g, IA-5 h.</p>
<p>IA-5 (2) (a) (1)</p></td>
</tr>
<tr class="odd">
<td>A cryptographic device authenticator <strong>SHALL</strong> be
designed so as to prohibit the export of the authentication secret to
the host processor and <strong>SHALL NOT</strong> be capable of being
reprogrammed by the host processor so as to allow the secret to be
extracted. The authenticator is subject to applicable <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-FIPS140-2">[FIPS140]</a>
requirements of the AAL at which the authenticator is being used.</td>
<td><p>IA-1 a.1 (b)</p>
<p>IA-5 g, IA-5 h.</p>
<p>IA-5 (2) (a) (1)</p>
<p>IA-7</p></td>
</tr>
<tr class="even">
<td>Each authentication operation using the authenticator
<strong>SHOULD</strong> require the input of the activation factor.
Input of the activation factor <strong>MAY</strong> be accomplished via
either direct input on the device or via a hardware connection (e.g.,
USB, smartcard).</td>
<td>IA-5 (2) (a) (1)</td>
</tr>
<tr class="odd">
<td>The use of an activation secret by the authenticator
<strong>SHALL</strong> meet the requirements of <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#s-5-2-11">Sec.
5.2.11</a>.</td>
<td></td>
</tr>
<tr class="even">
<td>A biometric activation factor <strong>SHALL</strong> meet the
requirements of <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#biometric_use">Sec.
5.2.3</a>, including limits on the number of consecutive authentication
failures.</td>
<td></td>
</tr>
<tr class="odd">
<td>Submission of the activation factor <strong>SHALL</strong> be a
separate operation from unlocking of the host device (e.g., smartphone),
although the same activation factor used to unlock the host device
<strong>MAY</strong> be used in the authentication operation.</td>
<td>IA-5 (2) (a) (1)</td>
</tr>
<tr class="even">
<td>The activation secret or biometric sample — and any biometric data
derived from the biometric sample such as a probe produced through
signal processing — <strong>SHALL</strong> be zeroized immediately after
an authentication transaction has taken place</td>
<td><p>IA-5 g, IA-5 h.</p>
<p>IA-5 (2) (a) (1)</p></td>
</tr>
<tr class="odd">
<td><h3 id="multi-factor-cryptographic-device-verifiers">5.1.9.2.
Multi-Factor Cryptographic Device Verifiers</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="general-authenticator-requirements">5.2. General
Authenticator Requirements</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="physical-authenticators">5.2.1. Physical
Authenticators</h3></td>
<td></td>
</tr>
<tr class="even">
<td>CSPs <strong>SHALL</strong> provide subscriber instructions on how
to appropriately protect the authenticator against theft or loss.</td>
<td>IA-5 g., IA-5 h., IA-5 (6)</td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL</strong> provide a mechanism to invalidate the
authenticator immediately upon notification from subscriber that loss or
theft of the authenticator is suspected.</td>
<td>IA-5 g., IA-5 h., IA-5 (6)</td>
</tr>
<tr class="even">
<td><h3 id="rate-limiting-throttling">5.2.2. Rate Limiting
(Throttling)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>When required by the authenticator type descriptions in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#reqauthtype">Sec.
5.1</a>, the verifier <strong>SHALL</strong> implement controls to
protect against online guessing attacks</td>
<td></td>
</tr>
<tr class="even">
<td>Unless otherwise specified in the description of a given
authenticator, the verifier <strong>SHALL</strong> limit consecutive
failed authentication attempts on a single subscriber account to no more
than 100.</td>
<td></td>
</tr>
<tr class="odd">
<td><p>Additional techniques <strong>MAY</strong> be used to reduce the
likelihood that an attacker will lock the legitimate claimant out as a
result of rate limiting. These include:</p>
<ul>
<li><p>Requiring the claimant to complete a bot-detection and mitigation
challenge before attempting authentication.</p></li>
<li><p>Requiring the claimant to wait following a failed attempt for a
period of time that increases as the subscriber account approaches its
maximum allowance for consecutive failed attempts (e.g., 30 seconds up
to an hour).</p></li>
<li><p>Accepting only authentication requests that come from an
allowlist of IP addresses from which the subscriber has been
successfully authenticated before.</p></li>
<li><p>Leveraging other risk-based or adaptive authentication techniques
to identify user behavior that falls within, or out of, typical norms.
These might, for example, include use of IP address, geolocation, timing
of request patterns, or browser metadata.</p></li>
</ul></td>
<td>IA-10</td>
</tr>
<tr class="even">
<td>When the subscriber successfully authenticates, the verifier
<strong>SHOULD</strong> disregard any previous failed attempts for that
user from the same IP address.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="use-of-biometrics">5.2.3. Use of Biometrics</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Biometrics <strong>SHALL</strong> be used only as part of
multi-factor authentication with a physical authenticator (<em>something
you have</em>).</td>
<td></td>
</tr>
<tr class="odd">
<td>The biometric system <strong>SHALL</strong> operate with a
false-match rate (FMR) <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-ISOIEC2382-37">[ISO/IEC2382-37]</a>
of 1 in 10000 or better. This FMR <strong>SHALL</strong> be achieved
under conditions of a conformant attack (i.e., zero-effort impostor
attempt) as defined in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-ISOIEC30107-1">[ISO/IEC30107-1]</a>.</td>
<td><p>IA-1 a.1 (b)</p>
<p>IA-5 (12)</p></td>
</tr>
<tr class="even">
<td>The biometric system <strong>SHOULD</strong> implement presentation
attack detection (PAD).</td>
<td><p>IA-5 (12)</p>
<p>IA-5 (17)</p></td>
</tr>
<tr class="odd">
<td>Testing of the biometric system to be deployed
<strong>SHOULD</strong> demonstrate at least 90% resistance to
presentation attacks for each relevant attack type (i.e., species),
where resistance is defined as the number of thwarted presentation
attacks divided by the number of trial presentation attacks.</td>
<td><p>IA-5 (12)</p>
<p>IA-5 (17)</p></td>
</tr>
<tr class="even">
<td>Testing of presentation attack resistance <strong>SHALL</strong> be
in accordance with Clause 12 of <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-ISOIEC30107-3">[ISO/IEC30107-3]</a>.</td>
<td><p>IA-1 a.1 (b)</p>
<p>IA-5 (17)</p></td>
</tr>
<tr class="odd">
<td>The PAD decision <strong>MAY</strong> be made either locally on the
claimant’s device or by a central verifier.</td>
<td>IA-5 (17)</td>
</tr>
<tr class="even">
<td>The biometric system <strong>SHALL</strong> allow no more than 5
consecutive failed authentication attempts or 10 consecutive failed
attempts if PAD, meeting the above requirements, is implemented.</td>
<td><p>IA-5 (12)</p>
<p>IA-5 (17)</p></td>
</tr>
<tr class="odd">
<td>Once that limit has been reached, the biometric authenticator
<strong>SHALL</strong> impose a delay of at least 30 seconds before each
subsequent attempt, with an overall limit of no more than 50 consecutive
failed authentication attempts (100 if PAD is implemented).</td>
<td><p>IA-5 (12)</p>
<p>IA-5 (17)</p></td>
</tr>
<tr class="even">
<td>Once the overall limit is reached, the biometric system
<strong>SHALL</strong> disable biometric user authentication and offer
another factor (e.g., a different biometric modality or an activation
secret if it is not already a required factor) if such an alternative
method is already available.</td>
<td>IA-5 (12)</td>
</tr>
<tr class="odd">
<td><p>The verifier <strong>SHALL</strong> make a determination of
sensor and endpoint performance, integrity, and authenticity. Acceptable
methods for making this determination include, but are not limited
to:</p>
<ul>
<li><p>Authentication of the sensor or endpoint</p></li>
<li><p>Certification by an approved accreditation authority</p></li>
<li><p>Runtime interrogation of signed metadata (e.g., attestation) as
described in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#attestation">Sec.
5.2.4</a>.</p></li>
</ul></td>
<td>IA-5 (12)</td>
</tr>
<tr class="even">
<td>Biometric comparison can be performed locally on the claimant’s
device or at a central verifier. Since the potential for attacks on a
larger scale is greater at central verifiers, comparison
<strong>SHOULD</strong> be performed locally.</td>
<td></td>
</tr>
<tr class="odd">
<td><p>If comparison is performed centrally:</p>
<ul>
<li><p>Use of the biometric as an authentication factor
<strong>SHALL</strong> be limited to one or more specific devices that
are identified using approved cryptography. Since the biometric has not
yet unlocked the main authentication key, a separate key
<strong>SHALL</strong> be used for identifying the device.</p></li>
</ul></td>
<td></td>
</tr>
<tr class="even">
<td><ul>
<li><p>Biometric revocation, referred to as biometric template
protection in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-ISOIEC24745">[ISO/IEC24745]</a>,
<strong>SHALL</strong> be implemented.</p></li>
</ul></td>
<td>IA-1 a.1 (b)</td>
</tr>
<tr class="odd">
<td><ul>
<li><p>An authenticated protected channel between sensor (or an endpoint
containing a sensor that resists sensor replacement) and verifier
<strong>SHALL</strong> be established and the sensor or endpoint
<strong>SHALL</strong> be authenticated prior to capturing the biometric
sample from the claimant.</p></li>
</ul></td>
<td>IA-5 g</td>
</tr>
<tr class="even">
<td><ul>
<li><p>All transmission of biometrics <strong>SHALL</strong> be over an
authenticated protected channel.</p></li>
</ul></td>
<td>IA-5 g</td>
</tr>
<tr class="odd">
<td>Biometric samples collected in the authentication process
<strong>MAY</strong> be used to train comparison algorithms or — with
user consent — for other research purposes. Biometric samples and any
biometric data derived from the biometric sample such as a probe
produced through signal processing <strong>SHALL</strong> be zeroized
immediately after any training or research data has been derived.</td>
<td></td>
</tr>
<tr class="even">
<td>Biometric authentication technologies <strong>SHALL</strong> provide
similar performance for subscribers of different demographic types
(racial background, gender, ethnicity, etc.).</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="attestation">5.2.4. Attestation</h3></td>
<td></td>
</tr>
<tr class="even">
<td><p>An attestation is information conveyed to the verifier regarding
a connected authenticator or the endpoint involved in an authentication
operation. Information conveyed by attestation <strong>MAY</strong>
include, but is not limited to:</p>
<ul>
<li><p>The provenance (e.g., manufacturer or supplier certification),
health, and integrity of the authenticator and endpoint</p></li>
<li><p>Security features of the authenticator</p></li>
<li><p>Security and performance characteristics of biometric
sensors</p></li>
<li><p>Sensor modality</p></li>
</ul></td>
<td></td>
</tr>
<tr class="odd">
<td>If this attestation is signed, it <strong>SHALL</strong> be signed
using a digital signature that provides at least the minimum security
strength specified in the latest revision of <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-SP800-131A">[SP800-131A]</a>
(112 bits as of the date of this publication).</td>
<td>IA-1 a.1 (b)</td>
</tr>
<tr class="even">
<td>Attestation information <strong>MAY</strong> be used as part of a
verifier’s risk-based authentication decision.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="phishing-verifier-impersonation-resistance">5.2.5. Phishing
(Verifier Impersonation) Resistance</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Approved cryptographic algorithms <strong>SHALL</strong> be used to
establish phishing resistance where it is required.</td>
<td></td>
</tr>
<tr class="odd">
<td>Keys used for this purpose <strong>SHALL</strong> provide at least
the minimum security strength specified in the latest revision of <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-SP800-131A">[SP800-131A]</a>
(112 bits as of the date of this publication).</td>
<td>IA-1 a.1 (b)</td>
</tr>
<tr class="even">
<td>Authenticators that involve the manual entry of an authenticator
output, such as out-of-band and OTP authenticators, <strong>SHALL
NOT</strong> be considered phishing resistant because the manual entry
does not bind the authenticator output to the specific session being
authenticated. In an AitM attack, an impostor verifier could replay the
OTP authenticator output to the verifier and successfully
authenticate.</td>
<td>IA-2(13)</td>
</tr>
<tr class="odd">
<td><h3 id="channel-binding">5.2.5.1. Channel Binding</h3></td>
<td></td>
</tr>
<tr class="even">
<td>An authentication protocol with channel binding
<strong>SHALL</strong> establish an authenticated protected channel with
the verifier</td>
<td></td>
</tr>
<tr class="odd">
<td>It <strong>SHALL</strong> then strongly and irreversibly bind a
channel identifier that was negotiated in establishing the authenticated
protected channel to the authenticator output (e.g., by signing the two
values together using a private key controlled by the claimant for which
the public key is known to the verifier).</td>
<td></td>
</tr>
<tr class="even">
<td>The verifier <strong>SHALL</strong> validate the signature or other
information used to prove phishing resistance. This prevents an impostor
verifier, even one that has obtained a certificate representing the
actual verifier, from successfully relaying that authentication on a
different authenticated protected channel.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="verifier-name-binding">5.2.5.2. Verifier Name
Binding</h3></td>
<td></td>
</tr>
<tr class="even">
<td>An authentication protocol with authenticator name binding
<strong>SHALL</strong> establish an authenticated protected channel with
the verifier. It <strong>SHALL</strong> then generate an authenticator
output that is cryptographically bound to a verifier identifier that is
authenticated as part of the protocol.</td>
<td>IA-9</td>
</tr>
<tr class="odd">
<td>In the case of domain name system (DNS) identifiers, the verifier
identifier <strong>SHALL</strong> be either the authenticated hostname
of the verifier or a parent domain that is at least one level below the
public suffix <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-psl">[PSL]</a>
associated with that hostname.</td>
<td>IA-9</td>
</tr>
<tr class="even">
<td>The binding <strong>MAY</strong> be established by choosing an
associated authenticator secret, by deriving an authenticator secret
using the verifier identifier, by cryptographically signing the
authenticator output with the verifier identifier, or similar
cryptographically secure means.</td>
<td>IA-9</td>
</tr>
<tr class="odd">
<td><h3 id="verifier-csp-communications">5.2.6. Verifier-CSP
Communications</h3></td>
<td></td>
</tr>
<tr class="even">
<td>In situations where the verifier and CSP are separate entities (as
shown by the dotted line in <a
href="https://pages.nist.gov/800-63-4/sp800-63.html#fig-1">[SP800-63]</a>
Figure 1), communications between the verifier and CSP
<strong>SHALL</strong> occur through a mutually authenticated secure
channel (such as a client-authenticated TLS connection) using approved
cryptography.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="verifier-compromise-resistance">5.2.7. Verifier Compromise
Resistance</h3></td>
<td></td>
</tr>
<tr class="even">
<td>To be considered verifier compromise resistant, public keys stored
by the verifier <strong>SHALL</strong> be associated with the use of
approved cryptographic algorithms and <strong>SHALL</strong> provide at
least the minimum security strength specified in the latest revision of
<a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-SP800-131A">[SP800-131A]</a>
(112 bits as of the date of this publication).</td>
<td>IA-8 (4)</td>
</tr>
<tr class="odd">
<td>Other verifier compromise resistant secrets <strong>SHALL</strong>
use approved hash algorithms and the underlying secrets
<strong>SHALL</strong> have at least the minimum security strength
specified in the latest revision of <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-SP800-131A">[SP800-131A]</a>
(112 bits as of the date of this publication).</td>
<td>IA-8 (4)</td>
</tr>
<tr class="even">
<td>Secrets (e.g., memorized secrets) having lower complexity
<strong>SHALL NOT</strong> be considered verifier compromise resistant
when hashed because of the potential to defeat the hashing process
through dictionary lookup or exhaustive search.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="replay-resistance">5.2.8. Replay Resistance</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="authentication-intent">5.2.9. Authentication
Intent</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>The goal of authentication intent is to make it more difficult for
authenticators (e.g., multi-factor cryptographic devices) to be used
without the subject’s knowledge, such as by malware on the endpoint.
Authentication intent <strong>SHALL</strong> be established by the
authenticator itself, although multi-factor cryptographic devices
<strong>MAY</strong> establish intent by reentry of the activation
factor for the authenticator.</td>
<td></td>
</tr>
<tr class="even">
<td>Authentication intent <strong>MAY</strong> be established in a
number of ways. Authentication processes that require the subject’s
intervention establish intent (e.g., a claimant entering an
authenticator output from an OTP device). Cryptographic devices that
require user action for each authentication or reauthentication
operation also establish intent (e.g., pushing a button or
reinsertion).</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="restricted-authenticators">5.2.10. Restricted
Authenticators</h3></td>
<td></td>
</tr>
<tr class="even">
<td>It is the responsibility of the organization to determine the level
of acceptable risk for their systems and associated data and to define
any methods for mitigating excessive risks. If at any time the
organization determines that the risk to any party is unacceptable, then
that authenticator <strong>SHALL NOT</strong> be used.</td>
<td></td>
</tr>
<tr class="odd">
<td><p>Further, the risk of an authentication error is typically borne
by multiple parties, including the implementing organization,
organizations that rely on the authentication decision, and the
subscriber. Because the subscriber may be exposed to additional risk
when an organization accepts a restricted authenticator and that the
subscriber may have a limited understanding of and ability to control
that risk, the CSP <strong>SHALL</strong>:</p>
<ol type="1">
<li><p>Offer subscribers at least one alternate authenticator that is
not restricted and can be used to authenticate at the required
AAL.</p></li>
<li><p>Provide meaningful notice to subscribers regarding the security
risks of the restricted authenticator and availability of alternatives
that are not restricted.</p></li>
<li><p>Address any additional risk to subscribers in its risk
assessment.</p></li>
<li><p>Develop a migration plan for the possibility that the restricted
authenticator is no longer acceptable at some point in the future and
include this migration plan in its <a
href="https://pages.nist.gov/800-63-4/sp800-63.html#daps">digital
identity acceptance statement</a>.</p></li>
</ol></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="activation-secrets">5.2.11. Activation Secrets</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>Memorized secrets that are used as an activation factor for a
multi-factor authenticator are referred to as <em>activation
secrets</em>. An activation secret is used to decrypt a stored secret
key used for authentication or is compared against a locally held stored
verifier to provide access to the authentication key. In either of these
cases, the activation secret <strong>SHALL</strong> remain within the
authenticator and its associated user endpoint.</td>
<td>IA-5 g.</td>
</tr>
<tr class="even">
<td>Authenticators making use of activation secrets
<strong>SHALL</strong> require the secrets to be at least 6 characters
in length.</td>
<td>IA-5 g.</td>
</tr>
<tr class="odd">
<td>Activation secrets <strong>MAY</strong> be entirely numeric (i.e., a
PIN). If alphanumeric (rather than only numeric) values are permitted,
all printing ASCII <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-RFC20">[RFC20]</a>
characters as well as the space character <strong>SHOULD</strong> be
accepted.</td>
<td></td>
</tr>
<tr class="even">
<td>Unicode <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-ISOIEC10646">[ISO/ISC
10646]</a> characters <strong>SHOULD</strong> be accepted as well in
alphanumeric secrets.</td>
<td></td>
</tr>
<tr class="odd">
<td>The authenticator <strong>SHALL</strong> contain a blocklist (either
specified by specific values or by an algorithm) of at least 10 commonly
used activation values and <strong>SHALL</strong> prevent their use as
activation secrets.</td>
<td>IA-5 g.</td>
</tr>
<tr class="even">
<td>The authenticator or verifier <strong>SHALL</strong> implement a
retry-limiting mechanism that effectively limits the number of
consecutive failed activation attempts using the authenticator to ten
(10).</td>
<td>IA-5 g.</td>
</tr>
<tr class="odd">
<td>If the entry of an incorrect activation secret causes the
authenticator to generate an invalid output that is sent to the central
verifier, rate limiting <strong>MAY</strong> be implemented by the
verifier</td>
<td></td>
</tr>
<tr class="even">
<td>. In all other cases, rate limiting <strong>SHALL</strong> be
implemented in the authenticator.</td>
<td>IA-5 g.</td>
</tr>
<tr class="odd">
<td>Once the limit of 10 attempts is reached, the authenticator
<strong>SHALL</strong> be disabled and a different authenticator
<strong>SHALL</strong> be required for authentication.</td>
<td>IA-5 g.</td>
</tr>
<tr class="even">
<td>If the authenticator verifies the activation secret locally (rather
than using it for decryption of a key), verification
<strong>SHALL</strong> be performed within a hardware-based
authenticator or in a secure element (e.g., TEE, TPM) that releases the
authentication secret only upon presentation of the correct activation
secret.</td>
<td></td>
</tr>
<tr class="odd">
<td>In other circumstances (i.e., software-based multi-factor
authenticators), the authenticator <strong>SHALL</strong> use the
memorized secret as a key to decrypt its stored authentication secret.
Approved cryptography <strong>SHALL</strong> be used.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="connected-authenticators">5.2.12. Connected
Authenticators</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>Cryptographic authenticators require a direct connection between the
authenticator and the endpoint being authenticated. This connection
<strong>MAY</strong> be wired (e.g., USB or direct connection with a
smartcard) or wireless (e.g., NFC, Bluetooth). While in most cases wired
connections can be presumed to be secure from eavesdropping and
adversary-in-the-middle attacks, additional precautions are required for
authenticators that are connected via wireless technologies.</td>
<td>IA-5 g</td>
</tr>
<tr class="even">
<td>Wired authenticator connections include both authenticators that are
embedded in endpoints (e.g., in a TPM) and those that are connected via
an external interface, such as USB. Claimants <strong>SHOULD</strong> be
advised to use trusted hardware (cables, etc.) for external connections
for additional assurance that they have not been compromised</td>
<td>IA-5 g</td>
</tr>
<tr class="odd">
<td>Wireless technologies having an effective range of 1 meter or more
(e.g., Bluetooth LE) <strong>SHALL</strong> use an authenticated
encrypted connection between the authenticator and endpoint.</td>
<td>IA-5 g, IA-5 h.</td>
</tr>
<tr class="even">
<td>A pairing process <strong>SHALL</strong> be used to establish a key
for encrypted communication between the authenticator and endpoint.</td>
<td>IA-5 g, IA-5 h.</td>
</tr>
<tr class="odd">
<td>A temporary wired connection between the devices
<strong>MAY</strong> also be used to establish the key in lieu of the
pairing process.</td>
<td>IA-5 g, IA-5 h.</td>
</tr>
<tr class="even">
<td>The pairing process <strong>SHALL</strong> be authenticated through
the use of a pairing code.</td>
<td>IA-5 g, IA-5 h.</td>
</tr>
<tr class="odd">
<td>The pairing code <strong>SHALL</strong> be associated with either
the authenticator or endpoint and <strong>SHALL</strong> have at least
20 bits or 6 decimal digits of entropy.</td>
<td>IA-5 g, IA-5 h.</td>
</tr>
<tr class="even">
<td>The pairing code <strong>MAY</strong> be printed on the associated
device and <strong>SHALL</strong> be conveyed between the devices by
manual entry or by using a QR code or similar representation that is
optically communicated.</td>
<td></td>
</tr>
<tr class="odd">
<td>An example of this is the pairing code used with the virtual contact
interface specified in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-SP800-73">[SP800-73]</a>.
The entire authentication transaction <strong>SHALL</strong> be
encrypted using a key established by the pairing process.</td>
<td>IA-1 a.1 (b)</td>
</tr>
<tr class="even">
<td>When a wireless technology with an effective range of less than 1
meter is in use (e.g., NFC), the activation secret, if any, transmitted
from the endpoint to authenticator <strong>SHALL</strong> be encrypted
using a key established through a pairing process between the devices or
through a temporary wired connection.</td>
<td>IA-5 g, IA-5 h.</td>
</tr>
<tr class="odd">
<td>An authenticated connection using a pairing code meeting the above
requirements <strong>SHOULD</strong> be used.</td>
<td></td>
</tr>
<tr class="even">
<td>If the authenticator is configured to require authenticated pairing,
pairing code <strong>SHALL</strong> be used.</td>
<td></td>
</tr>
<tr class="odd">
<td>The key established as a result of the pairing process
<strong>MAY</strong> be either temporary (valid for a limited number of
transactions or time) or persistent.</td>
<td></td>
</tr>
<tr class="even">
<td>A mechanism for endpoints to remove persistent keys
<strong>SHALL</strong> be provided.</td>
<td></td>
</tr>
<tr class="odd">
<td>Where cryptographic operations are required, approved cryptography
<strong>SHALL</strong> be used.</td>
<td></td>
</tr>
<tr class="even">
<td>All communication of authentication data between authenticators and
endpoints <strong>SHALL</strong> occur directly between those devices or
through an authenticated protected channel between the authenticator and
endpoint.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="authenticator-lifecycle-management">6. Authenticator
Lifecycle Management</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="authenticator-binding">6.1. Authenticator Binding</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><p>Authenticators <strong>SHALL</strong> be bound to subscriber
accounts either</p>
<ul>
<li><p>by issuance by the CSP as part of enrollment or</p></li>
<li><p>by registration of a subscriber-provided authenticator that is
acceptable to the CSP.</p></li>
</ul>
<p>These guidelines refer to the <em>binding</em> rather than the
issuance of an authenticator to accommodate both options.</p></td>
<td><p>IA-5 (2) (a) (2)</p>
<p>IA-5 (16)</p></td>
</tr>
<tr class="even">
<td>Throughout the digital identity lifecycle, CSPs
<strong>SHALL</strong> maintain a record of all authenticators that are
or have been associated with each subscriber account.</td>
<td><p>IA-2</p>
<p>IA-5 (2) (a) (2)</p></td>
</tr>
<tr class="odd">
<td>The CSP or verifier <strong>SHALL</strong> maintain the information
required for throttling authentication attempts when required, as
described in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#throttle">Sec.
5.2.2</a>.</td>
<td></td>
</tr>
<tr class="even">
<td>The CSP <strong>SHALL</strong> also verify the type of user-provided
authenticator (e.g., single-factor cryptographic device vs. multi-factor
cryptographic device) so verifiers can determine compliance with
requirements at each AAL.</td>
<td></td>
</tr>
<tr class="odd">
<td>The record created by the CSP <strong>SHALL</strong> contain the
date and time the authenticator was bound to the subscriber
account.</td>
<td></td>
</tr>
<tr class="even">
<td>The record <strong>SHOULD</strong> include information about the
source of the binding (e.g., IP address, device identifier) of any
device associated with the enrollment.</td>
<td></td>
</tr>
<tr class="odd">
<td>If available, the record <strong>SHOULD</strong> also contain
information about the source of unsuccessful authentications attempted
with the authenticator.</td>
<td></td>
</tr>
<tr class="even">
<td>When any new authenticator is bound to a subscriber account, the CSP
<strong>SHALL</strong> ensure that the binding protocol and the protocol
for provisioning the associated keys are done at a level of security
commensurate with the AAL at which the authenticator will be used.</td>
<td>IA-5 g.</td>
</tr>
<tr class="odd">
<td>For example, protocols for key provisioning <strong>SHALL</strong>
use authenticated protected channels or be performed in person to
protect against adversary-in-the-middle attacks.</td>
<td>IA-5 g.</td>
</tr>
<tr class="even">
<td>Binding of multi-factor authenticators <strong>SHALL</strong>
require multi-factor authentication or equivalent (e.g., association
with the session in which identity proofing has been just completed) be
used in order to bind the authenticator. The same conditions apply when
a key pair is generated by the authenticator and the public key is sent
to the CSP.</td>
<td></td>
</tr>
<tr class="odd">
<td>As part of the binding process, the CSP <strong>MAY</strong> require
additional information about the new authenticator or the endpoint it is
associated with to determine that they are suitable for the AAL being
requested and to attempt to determine that the endpoint and
authenticator are free from malware.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="binding-at-enrollment">6.1.1. Binding at
Enrollment</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL</strong> bind at least one — and
<strong>SHOULD</strong> bind at least two — physical (<em>something you
have</em>) authenticators to the subscriber account, in addition to a
memorized secret or one or more biometric characteristics. Binding of
multiple authenticators provides a means to recover from the loss or
theft of the subscriber’s primary authenticator.</td>
<td><p>IA-5 (2) (a) (2)</p>
<p>IA-5 (16)</p></td>
</tr>
<tr class="even">
<td>If enrollment and binding cannot be completed in a single physical
encounter or electronic transaction (i.e., within a single protected
session), the following methods <strong>SHALL</strong> be used to ensure
that the same party acts as the applicant throughout the processes:</td>
<td></td>
</tr>
<tr class="odd">
<td><p>For remote transactions:</p>
<ol type="1">
<li><p>The applicant <strong>SHALL</strong> identify themselves in each
new binding transaction by presenting a temporary secret which was
either established during a prior transaction, or sent to the
applicant’s phone number, email address, or postal address of
record.</p></li>
</ol></td>
<td>IA-5 (16)</td>
</tr>
<tr class="even">
<td><ol start="2" type="1">
<li><p>Long-term authenticator secrets <strong>SHALL</strong> only be
issued to the applicant within a protected session.</p></li>
</ol></td>
<td>IA-5 g.</td>
</tr>
<tr class="odd">
<td><p>For in-person transactions:</p>
<ol type="1">
<li><p>The applicant <strong>SHALL</strong> identify themselves in
person by either using a secret as described in remote transaction (1)
above, or through use of a biometric that was recorded during a prior
encounter.</p></li>
</ol></td>
<td>IA-5 (16)</td>
</tr>
<tr class="even">
<td><ol start="2" type="1">
<li><p>Temporary secrets <strong>SHALL NOT</strong> be reused.</p></li>
</ol></td>
<td></td>
</tr>
<tr class="odd">
<td><ol start="3" type="1">
<li><p>If the CSP issues long-term authenticator secrets during a
physical transaction, then they <strong>SHALL</strong> be loaded locally
onto a physical device that is issued in person to the applicant or
delivered in a manner that confirms the address of record.</p></li>
</ol></td>
<td>IA-5 (16)</td>
</tr>
<tr class="even">
<td><h3 id="post-enrollment-binding">6.1.2. Post-Enrollment
Binding</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3
id="binding-of-an-additional-authenticator-at-existing-aal">6.1.2.1.
Binding of an Additional Authenticator at Existing AAL</h3></td>
<td></td>
</tr>
<tr class="even">
<td>With the exception of memorized secrets, CSPs and verifiers
<strong>SHOULD</strong> encourage subscribers to maintain at least two
valid authenticators of each factor that they will be using.</td>
<td></td>
</tr>
<tr class="odd">
<td>For example, a subscriber who usually uses an OTP device as a
physical authenticator <strong>MAY</strong> also be issued a number of
look-up secret authenticators, or register a device for out-of-band
authentication, in case the physical authenticator is lost, stolen, or
damaged. See <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#replacement">Sec.
6.1.2.3</a> for more information on replacement of memorized secret
authenticators.</td>
<td></td>
</tr>
<tr class="even">
<td>Accordingly, CSPs <strong>SHOULD</strong> permit the binding of
additional authenticators to a subscriber account.</td>
<td></td>
</tr>
<tr class="odd">
<td>Before adding the new authenticator, the CSP <strong>SHALL</strong>
first require the subscriber to authenticate at the AAL (or a higher
AAL) at which the new authenticator will be used.</td>
<td></td>
</tr>
<tr class="even">
<td>A separate authentication using existing authenticators
<strong>SHALL</strong> be performed following the request to bind a new
authenticator, and <strong>SHALL</strong> be valid for 20 minutes.</td>
<td></td>
</tr>
<tr class="odd">
<td>When an authenticator is added, the CSP <strong>SHOULD</strong> send
a notification to the subscriber via a mechanism that is independent of
the transaction binding the new authenticator (e.g., email to an address
previously associated with the subscriber).</td>
<td></td>
</tr>
<tr class="even">
<td>The CSP <strong>MAY</strong> limit the number of authenticators that
are bound in this manner.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3
id="adding-an-additional-factor-to-a-single-factor-subscriber-account">6.1.2.2.
Adding an Additional Factor to a Single-Factor Subscriber
Account</h3></td>
<td></td>
</tr>
<tr class="even">
<td>If the subscriber account has only one authentication factor bound
to it and an additional authenticator of a different authentication
factor is to be added, the subscriber <strong>MAY</strong> request that
the subscriber account be upgraded to AAL2</td>
<td></td>
</tr>
<tr class="odd">
<td>.Before binding the new authenticator, the CSP
<strong>SHALL</strong> require the subscriber to authenticate at
AAL1.</td>
<td></td>
</tr>
<tr class="even">
<td>The CSP <strong>SHOULD</strong> send a notification of the event to
the subscriber via a mechanism independent of the transaction binding
the new authenticator (e.g., email to an address previously associated
with the subscriber).</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="account-recovery">6.1.2.3. Account Recovery</h3></td>
<td></td>
</tr>
<tr class="even">
<td>If a subscriber that has been identity proofed loses all
authenticators necessary to complete authentication, that subscriber
<strong>SHALL</strong> repeat the identity proofing process described in
<a
href="https://pages.nist.gov/800-63-4/sp800-63a.html#purpose">[SP800-63A]</a>.</td>
<td>IA-1 a.1 (b)</td>
</tr>
<tr class="odd">
<td>If the CSP has retained information from the evidence used in the
original identity proofing process (pursuant to a privacy risk
assessment as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63a.html#purpose">[SP800-63A]</a>
Sec. 5.2.2) that is sufficient to perform verification of the subscriber
and if that evidence is still valid, it <strong>MAY</strong> repeat only
the verification portion of the identity proofing process as described
in <a
href="https://pages.nist.gov/800-63-4/sp800-63a.html#purpose">[SP800-63A]</a>.</td>
<td>IA-1 a.1 (b)</td>
</tr>
<tr class="even">
<td>The CSP <strong>SHALL</strong> require the claimant to authenticate
using an authenticator of the remaining factor, if any, to confirm
binding to the existing subscriber account.</td>
<td></td>
</tr>
<tr class="odd">
<td>Reestablishment of authentication factors at IAL3
<strong>SHALL</strong> be done in person or through a supervised remote
process as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63a.html#purpose">[SP800-63A]</a>
Sec. 5.6.8, and <strong>SHALL</strong> perform a successful biometric
comparison against the biometric characteristic collected during the
original identity proofing process.</td>
<td>IA-1 a.1 (b)</td>
</tr>
<tr class="even">
<td>The CSP <strong>SHOULD</strong> send a notification of the event to
the subscriber. This <strong>MAY</strong> be the same notice that is
required as part of the identity proofing process.</td>
<td></td>
</tr>
<tr class="odd">
<td>Subscriber accounts that have not been identity proofed (i.e.,
without IAL) cannot be recovered because there is no reliable means for
reassociating the subscriber with that account. Such accounts
<strong>SHALL</strong> be treated as abandoned and a new subscriber
account <strong>SHALL</strong> be established.</td>
<td></td>
</tr>
<tr class="even">
<td>Replacement of a lost (i.e., forgotten) memorized secret is
problematic because it is very common. Additional “backup” memorized
secrets do not mitigate this because they are just as likely to also
have been forgotten. If a biometric is bound to the subscriber account,
the biometric characteristic and associated physical authenticator
<strong>SHOULD</strong> be used to establish a new memorized
secret.</td>
<td></td>
</tr>
<tr class="odd">
<td>As an alternative to the above re-proofing process when there is no
biometric bound to the subscriber account, the CSP <strong>MAY</strong>
bind a new memorized secret with authentication using two physical
authenticators, along with a confirmation code that has been sent to one
of the subscriber’s addresses of record.</td>
<td></td>
</tr>
<tr class="even">
<td>The confirmation code <strong>SHALL</strong> consist of at least 6
random alphanumeric characters generated by an approved random bit
generator <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-SP800-90Ar1">[SP800-90Ar1]</a>.</td>
<td>IA-1 a.1 (b)</td>
</tr>
<tr class="odd">
<td><p>Confirmation codes <strong>SHALL</strong> be valid for at
most:</p>
<ul>
<li><p>21 days, when sent to a postal address of record within the
contiguous United States;</p></li>
<li><p>30 days, when sent to a postal address of record outside the
contiguous United States;</p></li>
<li><p>10 minutes, when sent to a telephone of record (SMS or voice);
or</p></li>
<li><p>24 hours, when sent to an email address of record.</p></li>
</ul></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="external-authenticator-binding">6.1.2.4. External
Authenticator Binding</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>The binding process <strong>MAY</strong> begin with a request from
an endpoint that has authenticated to the CSP obtaining a binding code
from the CSP that is input into the endpoint associated with the new
authenticator and sent to that CSP.</td>
<td>IA-5 (10)</td>
</tr>
<tr class="even">
<td>Alternatively, the endpoint associated with the new authenticator
<strong>MAY</strong> obtain a binding code from the CSP, which is input
to an authenticated endpoint and sent to the CSP.</td>
<td>IA-5 (10)</td>
</tr>
<tr class="odd">
<td><p>In addition to the requirements given in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#bindexisting">Sec.
6.1.2.1</a>, <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#s-6-1-2-2">Sec.
6.1.2.2</a>, and <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#replacement">Sec.
6.1.2.3</a> above as applicable, the following requirements
<strong>SHALL</strong> apply when binding an external authenticator:</p>
<ul>
<li><p>An authenticated protected session <strong>SHALL</strong> be
established by the endpoint associated with the new authenticator and
the CSP.</p></li>
</ul></td>
<td>IA-5 g.</td>
</tr>
<tr class="even">
<td><ul>
<li><p>The subscriber <strong>MAY</strong> be prompted to enter an
identifier by which they are known by the CSP on the endpoint associated
with the new authenticator.</p></li>
</ul></td>
<td></td>
</tr>
<tr class="odd">
<td><ul>
<li><p>The CSP <strong>SHALL</strong> generate a <em>binding code</em>
using an approved random number generator and send it to either the new
authenticator endpoint or the authenticated endpoint approving the
binding. The binding code <strong>SHALL</strong> have at least 40 bits
of entropy if used in conjunction with an identifier entered on the
previous step; otherwise a binding code with at least 112 bits of
entropy <strong>SHALL</strong> be required.</p></li>
</ul></td>
<td></td>
</tr>
<tr class="even">
<td><ul>
<li><p>The subscriber <strong>SHALL</strong> transfer the binding code
to the other endpoint. This transfer <strong>SHALL</strong> be either
manual or via a local out-of-band method such as a QR code. The binding
code <strong>SHALL NOT</strong> be communicated over any insecure
channel such as email or PSTN (SMS or voice).</p></li>
</ul></td>
<td></td>
</tr>
<tr class="odd">
<td><ul>
<li><p>The binding code <strong>SHALL</strong> be usable only once and
<strong>SHALL</strong> be valid for a maximum of 10 minutes.</p></li>
</ul></td>
<td></td>
</tr>
<tr class="even">
<td><ul>
<li><p>Following the binding of the new authenticator (or issuance of a
certificate, in the case of PKI-based authenticators), the CSP
<strong>SHOULD</strong> encourage the subscriber to authenticate with
the new authenticator to confirm that the process has completed
successfully.</p></li>
</ul></td>
<td></td>
</tr>
<tr class="odd">
<td><ul>
<li><p>The CSP <strong>SHALL</strong> provide clear instruction on what
the subscriber should do in the event of an authenticator binding
mishap, such as a button or contact address to allow a mis-bound
authenticator to be quickly invalidated as appropriate. This
<strong>MAY</strong> be provided in the authenticated session or in the
binding notification described in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#bindexisting">Sec.
6.1.2.1</a>, <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#s-6-1-2-2">Sec.
6.1.2.2</a>, and <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#replacement">Sec.
6.1.2.3</a> above.</p></li>
</ul></td>
<td>IA-5 g.</td>
</tr>
<tr class="even">
<td><h3 id="binding-to-a-subscriber-provided-authenticator">6.1.3.
Binding to a Subscriber-provided Authenticator</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>CSPs <strong>SHOULD</strong>, where practical, accommodate the use
of subscriber-provided authenticators in order to relieve the burden to
the subscriber of managing a large number of authenticators</td>
<td>IA-5 (10)</td>
</tr>
<tr class="even">
<td>Binding of these authenticators <strong>SHALL</strong> be done as
described in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#post-enroll-bind">Sec.
6.1.2</a>.</td>
<td>IA-5 (10)</td>
</tr>
<tr class="odd">
<td>In situations where the authenticator strength is not self-evident
(e.g., between single-factor and multi-factor authenticators of a given
type), the CSP <strong>SHALL</strong> assume the use of the weaker
authenticator unless it is able to establish that the stronger
authenticator is in fact being used (e.g., by verification with the
issuer or manufacturer of the authenticator).</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="renewal">6.1.4. Renewal</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>The subscriber <strong>SHOULD</strong> bind a new or updated
authenticator an appropriate amount of time before an existing
authenticator’s expiration.</td>
<td>IA-5 f.</td>
</tr>
<tr class="even">
<td>The process for this <strong>SHOULD</strong> conform closely to the
binding process for an additional authenticator described in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#post-enroll-bind">Sec.
6.1.2.1</a>. The CSP <strong>MAY</strong> periodically take other
actions, such as reconfirming address of record, either as a part of the
renewal process or separately.</td>
<td></td>
</tr>
<tr class="odd">
<td>Following successful use of the replacement authenticator, the CSP
<strong>MAY</strong> invalidate the authenticator that is expiring.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="loss-theft-damage-and-unauthorized-duplication">6.2. Loss,
Theft, Damage, and Unauthorized Duplication</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>Suspension, revocation, or destruction of compromised authenticators
<strong>SHOULD</strong> occur as promptly as practical following
detection.</td>
<td></td>
</tr>
<tr class="even">
<td>Organizations <strong>SHOULD</strong> establish time limits for this
process.</td>
<td></td>
</tr>
<tr class="odd">
<td>To facilitate secure reporting of the loss, theft, or damage to an
authenticator, the CSP <strong>SHOULD</strong> provide the subscriber
with a method of authenticating to the CSP using a backup or alternate
authenticator.</td>
<td></td>
</tr>
<tr class="even">
<td>This backup authenticator <strong>SHALL</strong> be either a
memorized secret or a physical authenticator. Either could be used, but
only one authentication factor is required to make this report.</td>
<td></td>
</tr>
<tr class="odd">
<td>Alternatively, the subscriber <strong>MAY</strong> establish an
authenticated protected channel to the CSP and verify information
collected during the proofing process..</td>
<td></td>
</tr>
<tr class="even">
<td>The CSP <strong>MAY</strong> choose to verify an address of record
(i.e., email, telephone, postal) and suspend authenticators reported to
have been compromised.</td>
<td></td>
</tr>
<tr class="odd">
<td>The suspension <strong>SHALL</strong> be reversible if the
subscriber successfully authenticates to the CSP using a valid (i.e.,
not suspended) authenticator and requests reactivation of an
authenticator suspended in this manner.</td>
<td></td>
</tr>
<tr class="even">
<td>The CSP <strong>MAY</strong> set a time limit after which a
suspended authenticator can no longer be reactivated</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="expiration">6.3. Expiration</h3></td>
<td></td>
</tr>
<tr class="even">
<td>CSPs <strong>MAY</strong> issue authenticators that expire. If and
when an authenticator expires, it <strong>SHALL NOT</strong> be usable
for authentication.</td>
<td></td>
</tr>
<tr class="odd">
<td>When an authentication is attempted using an expired authenticator,
the CSP <strong>SHOULD</strong> give an indication to the subscriber
that the authentication failure is due to expiration rather than some
other cause.</td>
<td></td>
</tr>
<tr class="even">
<td>The CSP <strong>SHALL</strong> require subscribers to surrender or
prove destruction of any physical authenticator containing attribute
certificates signed by the CSP as soon as practical after expiration or
receipt of a renewed authenticator.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="invalidation">6.4. Invalidation</h3></td>
<td></td>
</tr>
<tr class="even">
<td>CSPs <strong>SHALL</strong> invalidate authenticators promptly when
a subscriber account ceases to exist (e.g., subscriber’s death,
discovery of a fraudulent subscriber), when requested by the subscriber,
or when the CSP determines that the subscriber no longer meets its
eligibility requirements.</td>
<td></td>
</tr>
<tr class="odd">
<td>The CSP <strong>SHALL</strong> require subscribers to surrender or
certify destruction of any physical authenticator containing subscriber
attributes, such as certificates signed by the CSP, as soon as practical
after invalidation takes place.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="session-management">7. Session Management</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>To facilitate this behavior, a <em>session</em> <strong>MAY</strong>
be started in response to an authentication event, and continue the
session until such time that it is terminated.</td>
<td></td>
</tr>
<tr class="even">
<td>The session <strong>MAY</strong> be terminated for any number of
reasons, including but not limited to an inactivity timeout, an explicit
logout event, or other means.</td>
<td></td>
</tr>
<tr class="odd">
<td>The session <strong>MAY</strong> be continued through a
reauthentication event — described in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#sessionreauthn">Sec.
7.2</a> — wherein the subscriber repeats some or all of the initial
authentication event, thereby re-establishing the session.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="session-bindings">7.1. Session Bindings</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>A session secret <strong>SHALL</strong> be shared between the
subscriber’s software and the service being accessed.</td>
<td></td>
</tr>
<tr class="even">
<td>This secret binds the two ends of the session, allowing the
subscriber to continue using the service over time.</td>
<td></td>
</tr>
<tr class="odd">
<td>The secret <strong>SHALL</strong> be presented directly by the
subscriber’s software or possession of the secret <strong>SHALL</strong>
be proven using a cryptographic mechanism.</td>
<td></td>
</tr>
<tr class="even">
<td><p>Continuity of authenticated sessions <strong>SHALL</strong> be
based upon the possession of a session secret issued by the verifier at
the time of authentication and optionally refreshed during the session.
The nature of a session depends on the application, such as:</p>
<ul>
<li><p>a web browser session with a “session” cookie, or</p></li>
<li><p>an instance of a mobile application that retains a session
secret.</p></li>
</ul></td>
<td></td>
</tr>
<tr class="odd">
<td>Session secrets <strong>SHALL NOT</strong> be persistent (retained
across a restart of the associated application or a reboot of the host
device).</td>
<td></td>
</tr>
<tr class="even">
<td>The secret used for session binding <strong>SHALL</strong> be
generated by the session host in direct response to an authentication
event.</td>
<td></td>
</tr>
<tr class="odd">
<td>A session <strong>SHOULD</strong> inherit the AAL properties of the
authentication event which triggered its creation.</td>
<td></td>
</tr>
<tr class="even">
<td>A session <strong>MAY</strong> be considered at a lower AAL than the
authentication event but <strong>SHALL NOT</strong> be considered at a
higher AAL than the authentication event.</td>
<td></td>
</tr>
<tr class="odd">
<td><p>Secrets used for session binding <strong>SHALL</strong> meet all
of the following requirements:</p>
<ol type="1">
<li><p>Secrets are generated by the session host during an interaction,
typically immediately following authentication.</p></li>
<li><p>Secrets are generated by an approved random bit generator <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#ref-SP800-90Ar1">[SP800-90Ar1]</a>
and contain at least 64 bits of entropy.</p></li>
<li><p>Secrets are erased or invalidated by the session subject when the
subscriber logs out.</p></li>
<li><p>Secrets are sent to and received from the device using an
authenticated protected channel.</p></li>
<li><p>Secrets will time out and are not accepted after the times
specified in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#aal1reauth">Sections
4.1.3</a>, <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#aal2reauth">4.2.3</a>,
and <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#aal3reauth">4.3.3</a>,
as appropriate for the AAL.</p></li>
<li><p>Secrets are not made available to insecure communications between
the host and subscriber’s endpoint.</p></li>
</ol></td>
<td>IA-1 a.1 (b)</td>
</tr>
<tr class="even">
<td>In addition, secrets used for session binding
<strong>SHOULD</strong> be erased on the subscriber endpoint when they
log out or when the secret is deemed to have expired.</td>
<td></td>
</tr>
<tr class="odd">
<td>They <strong>SHOULD NOT</strong> be placed in insecure locations
such as HTML5 Local Storage due to the potential exposure of local
storage to cross-site scripting (XSS) attacks.</td>
<td></td>
</tr>
<tr class="even">
<td>Authenticated sessions <strong>SHALL NOT</strong> fall back to an
insecure transport, such as from https to http, following
authentication.</td>
<td></td>
</tr>
<tr class="odd">
<td>URLs or POST content <strong>SHALL</strong> contain a session
identifier that <strong>SHALL</strong> be verified by the RP to protect
against cross-site request forgery.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="browser-cookies">7.1.1. Browser Cookies</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><p>Cookies used for session maintenance <strong>SHALL</strong> meet
all of the following requirements:</p>
<ol type="1">
<li><p>Cookies are tagged to be accessible only on secure (HTTPS)
sessions.</p></li>
<li><p>Cookies are accessible to the minimum practical set of hostnames
and paths.</p></li>
</ol></td>
<td></td>
</tr>
<tr class="even">
<td>In addition, session maintenance cookies <strong>SHOULD</strong> be
tagged to be inaccessible via JavaScript (HttpOnly).</td>
<td></td>
</tr>
<tr class="odd">
<td>They <strong>SHOULD</strong> contain only an opaque string (such as
a session identifier), and <strong>SHOULD NOT</strong> contain cleartext
PII.</td>
<td></td>
</tr>
<tr class="even">
<td>They <strong>SHOULD</strong> be tagged to expire at, or soon after,
the session’s validity period.</td>
<td></td>
</tr>
<tr class="odd">
<td>This latter requirement is intended to limit the accumulation of
cookies, but <strong>SHALL NOT</strong> be depended upon to enforce
session timeouts.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="access-tokens">7.1.2. Access Tokens</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>The presence of an OAuth access token <strong>SHALL NOT</strong> be
interpreted by the RP as presence of the subscriber, in the absence of
other signals.</td>
<td></td>
</tr>
<tr class="even">
<td>The OAuth access token, and any associated refresh tokens,
<strong>MAY</strong> be valid long after the authentication session has
ended and the subscriber has left the application.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="device-identification">7.1.3. Device
Identification</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Other methods of secure device identification — including but not
limited to mutual TLS, token binding, or other mechanisms —
<strong>MAY</strong> be used to enact a session between a subscriber and
a service.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="reauthentication-3">7.2. Reauthentication</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Periodic reauthentication of sessions <strong>SHALL</strong> be
performed to confirm the continued presence of the subscriber at an
authenticated session (i.e., that the subscriber has not walked away
without logging out).</td>
<td>IA-11</td>
</tr>
<tr class="odd">
<td>A session <strong>SHALL NOT</strong> be extended past the guidelines
in Sections <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#aal1reauth">4.1.3</a>,
<a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#aal2reauth">4.2.3</a>,
and <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#aal3reauth">4.3.3</a>
(depending on AAL) based on presentation of the session secret alone.
Prior to session expiration, the reauthentication time limit
<strong>SHALL</strong> be extended by prompting the subscriber for the
authentication factors specified in <a
href="https://pages.nist.gov/800-63-4/sp800-63b.html#table-2">Table
2</a>.</td>
<td></td>
</tr>
<tr class="even">
<td>When a session has been terminated, due to a time-out or other
action, the subscriber <strong>SHALL</strong> be required to establish a
new session by authenticating again.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="reauthentication-from-a-federation-or-assertion">7.2.1.
Reauthentication from a Federation or Assertion</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="threats-and-security-considerations-informative-1">8.
Threats and Security Considerations (Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="authenticator-threats-informative">8.1. Authenticator
Threats (Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="threat-mitigation-strategies-informative-1">8.2. Threat
Mitigation Strategies (Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="authenticator-recovery-informative">8.3. Authenticator
Recovery (Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="session-attacks-informative">8.4. Session Attacks
(Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="privacy-considerations-informative-1">9. Privacy
Considerations (Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="privacy-risk-assessment-informative-1">9.1. Privacy Risk
Assessment (Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="privacy-controls-informative">9.2. Privacy Controls
(Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="use-limitation-informative-1">9.3. Use Limitation
(Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="agency-specific-privacy-compliance-informative-1">9.4.
Agency-Specific Privacy Compliance (Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="usability-considerations-informative-1">10. Usability
Considerations (Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3
id="usability-considerations-common-to-authenticators-informative">10.1.
Usability Considerations Common to Authenticators
(Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3
id="usability-considerations-by-authenticator-type-informative">10.2.
Usability Considerations by Authenticator Type (Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="memorized-secrets-informative">10.2.1. Memorized Secrets
(Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="look-up-secrets-informative">10.2.2. Look-Up Secrets
(Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="out-of-band-informative">10.2.3. Out-of-Band
(Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="single-factor-otp-device-informative">10.2.4. Single-Factor
OTP Device (Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="multi-factor-otp-device-informative">10.2.5. Multi-Factor
OTP Device (Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="single-factor-cryptographic-software-informative">10.2.6.
Single-Factor Cryptographic Software (Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="single-factor-cryptographic-device-informative">10.2.7.
Single-Factor Cryptographic Device (Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="multi-factor-cryptographic-software-informative">10.2.8.
Multi-Factor Cryptographic Software (Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="multi-factor-cryptographic-device-informative">10.2.9.
Multi-Factor Cryptographic Device (Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="summary-of-usability-considerations-informative">10.3.
Summary of Usability Considerations (Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="biometrics-usability-considerations-informative">10.4.
Biometrics Usability Considerations (Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="equity-considerations-informative-1">11. Equity
Considerations (Informative)</h3></td>
<td></td>
</tr>
</tbody>
</table>

# 

## 800-63C-4

<table>
<colgroup>
<col style="width: 71%" />
<col style="width: 28%" />
</colgroup>
<thead>
<tr class="header">
<th>NIST 800-63C Reference</th>
<th>800-53 rev 5 control</th>
</tr>
<tr class="odd">
<th><h3 id="purpose-informative-3">1. Purpose (Informative)</h3></th>
<th></th>
</tr>
<tr class="header">
<th><h3 id="introduction-informative-3">2. Introduction
(Informative)</h3></th>
<th></th>
</tr>
<tr class="odd">
<th><h3 id="definitions-and-abbreviations-informative-3">3. Definitions
and Abbreviations (Informative)</h3></th>
<th></th>
</tr>
<tr class="header">
<th><h3 id="federation-assurance-level-fal">4. Federation Assurance
Level (FAL)</h3></th>
<th></th>
</tr>
<tr class="odd">
<th>At all FALs, all assertions <strong>SHALL</strong> be used with a
federation protocol as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#federation">Sec.
5</a>.</th>
<th>IA-8 (4)</th>
</tr>
<tr class="header">
<th>All assertions <strong>SHALL</strong> comply with the detailed
requirements in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#assertions">Sec.
6</a>.</th>
<th>IA-8 (4)</th>
</tr>
<tr class="odd">
<th>All assertions <strong>SHALL</strong> be presented using one of the
methods described in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#presentation">Sec.
7</a>. Examples of assertions used in federated protocols include the ID
Token in OpenID Connect <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#ref-OIDC">[OIDC]</a>
and assertions written in the Security Assertion Markup Language <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#ref-SAML">[SAML]</a>.</th>
<th></th>
</tr>
<tr class="header">
<th>At all FALs, the IdP <strong>SHALL</strong> employ appropriately
tailored security controls (to include control enhancements) from the
moderate or high baseline of security controls defined in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#ref-SP800-53">[SP800-53]</a>
or equivalent federal (e.g., <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#ref-FEDRAMP">[FEDRAMP]</a>)
or industry standard.</th>
<th>IA-1 a.1 (b)</th>
</tr>
<tr class="odd">
<th><h3 id="federation-assurance-level-1-fal1">4.1. Federation Assurance
Level 1 (FAL1)</h3></th>
<th></th>
</tr>
<tr class="header">
<th>At FAL1, the assertion being generated by the IdP
<strong>SHALL</strong> meet a core set of requirements defined in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#assertions">Sec.
6</a>, including protection against modification or construction by an
attacker by having the assertion contents signed by the IdP using
approved cryptography.</th>
<th>IA-8 (4)</th>
</tr>
<tr class="odd">
<th>An RP <strong>SHALL</strong> verify the origin and integrity of the
assertion upon receipt, as discussed in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#assertions">Sec.
6</a>, ensuring that the assertion has originated from the expected
source.</th>
<th></th>
</tr>
<tr class="header">
<th>All assertions at FAL1 <strong>SHALL</strong> be audience-restricted
to a specific RP or set of RPs, and the RP <strong>SHALL</strong>
validate that it is one of the targeted RPs for the given
assertion.</th>
<th></th>
</tr>
<tr class="odd">
<th>The IdP <strong>SHALL</strong> ensure that any party holding the
assertion, including the RP, is unable to impersonate the IdP at a
non-targeted RP by protecting the assertion with a signature and key
using approved cryptography.</th>
<th></th>
</tr>
<tr class="header">
<th>If the assertion is protected by a digital signature using an
asymmetric key, the IdP <strong>MAY</strong> use the same public and
private key pair to sign assertions to multiple RPs.</th>
<th></th>
</tr>
<tr class="odd">
<th>The IdP <strong>MAY</strong> publish its public key in a verifiable
fashion, such as at an HTTPS-protected URL at a well-known location. If
the assertion is protected by a keyed message authentication code (MAC)
using a shared key, the IdP <strong>SHALL</strong> use a different
shared key for each RP.</th>
<th></th>
</tr>
<tr class="header">
<th>At FAL1, the trust agreement between the IdP and RP
<strong>MAY</strong> be established entirely dynamically.</th>
<th></th>
</tr>
<tr class="odd">
<th><h3 id="federation-assurance-level-2-fal2">4.2. Federation Assurance
Level 2 (FAL2)</h3></th>
<th></th>
</tr>
<tr class="header">
<th>At FAL2, the assertion <strong>SHALL</strong> also be strongly
protected from being injected by an attacker. To accomplish this, the
assertion <strong>SHOULD</strong> be presented using back channel
presentation as discussed in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#back-channel">Sec.
7.1</a>, as in the OpenID Connect Basic Client profile <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#ref-OIDC-basic">[OIDC-Basic]</a>.</th>
<th>IA-8 (4)</th>
</tr>
<tr class="odd">
<th>If front channel presentation is used as discussed in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#front-channel">Sec.
7.2</a>, additional injection protections <strong>SHALL</strong> be
implemented by the RP.</th>
<th></th>
</tr>
<tr class="header">
<th>At FAL2, the trust agreement between the IdP and RP
<strong>SHALL</strong> be established statically, including establishing
limits of which attributes are made available to the RP and for what
purpose</th>
<th></th>
</tr>
<tr class="odd">
<th>This trust agreement <strong>MAY</strong> be bilateral between the
IdP and RP or <strong>MAY</strong> be managed through the use of a
multilateral federation partnership.</th>
<th></th>
</tr>
<tr class="header">
<th>The registration <strong>MAY</strong> be dynamic, provided that the
RP and IdP can prove their connection at runtime to the established
trust agreement between them. Such methods for this proof vary by
federation protocol, but can include presentation of software
attestations and proof of control over URLs at trusted domains</th>
<th></th>
</tr>
<tr class="odd">
<th>Government-operated IdPs asserting authentication at FAL2
<strong>SHALL</strong> protect keys used for signing or encrypting those
assertions with mechanisms validated at <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#ref-FIPS140">[FIPS140]</a>
Level 1 or higher.</th>
<th>IA-1 a.1 (b)</th>
</tr>
<tr class="header">
<th><h3 id="federation-assurance-level-3-fal3">4.3. Federation Assurance
Level 3 (FAL3)</h3></th>
<th></th>
</tr>
<tr class="odd">
<th>At FAL3, the subscriber <strong>SHALL</strong> authenticate to the
RP by presenting an authenticator directly to the RP in addition to
presenting an assertion. The authenticator presented is known as a
<em>bound authenticator</em>, described in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#boundauth">Sec.
6.1.2</a>.</th>
<th></th>
</tr>
<tr class="header">
<th>At FAL3, the trust agreement and registration between the IdP and RP
<strong>SHALL</strong> be established statically.</th>
<th></th>
</tr>
<tr class="odd">
<th>All identifying key material and federation parameters for all
parties (including the list of attributes sent to the RP)
<strong>SHALL</strong> be fixed ahead of time, before the federated
authentication process can take place.</th>
<th>IA-</th>
</tr>
<tr class="header">
<th>Runtime decisions <strong>MAY</strong> be used to further limit what
is sent between parties in the federated authentication process (e.g., a
runtime decision could opt to not disclose an email address even though
this attribute was included in the parameters of the trust
agreement).</th>
<th></th>
</tr>
<tr class="odd">
<th>IdPs asserting authentication at FAL3 <strong>SHALL</strong> protect
keys used for signing or encrypting those assertions with mechanisms
validated at <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#ref-FIPS140">[FIPS140]</a>
Level 1 or higher.</th>
<th>IA-1 a.1 (b)</th>
</tr>
<tr class="header">
<th><h3 id="requesting-and-processing-xals">4.4. Requesting and
Processing xALs</h3></th>
<th></th>
</tr>
<tr class="odd">
<th><p>The RP <strong>SHALL</strong> be informed of the following
information for each federated transaction:</p>
<ul>
<li><p>The IAL of the subscriber account being presented to the RP, or
an indication that no IAL claim is being made</p></li>
<li><p>The AAL of the currently active session of the subscriber at the
IdP, or an indication that no AAL claim is being made</p></li>
<li><p>The FAL of the federated transaction</p></li>
</ul></th>
<th></th>
</tr>
<tr class="header">
<th>The RP gets this xAL information from a combination of parameters in
the trust agreement as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#trust-agreement">Sec.
5.1</a> and information included in the assertion as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#assertions">Sec.
6</a>. If the xAL is unchanging for all messages between the IdP and RP,
the xAL information <strong>SHALL</strong> be included in the parameters
of the trust agreement between the IdP and RP.</th>
<th></th>
</tr>
<tr class="odd">
<th>If the xAL varies, the information <strong>SHALL</strong> be
included as part of the assertion as discussed in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#assertions">Sec.
6</a>.</th>
<th></th>
</tr>
<tr class="header">
<th>The IdP <strong>MAY</strong> indicate that no claim is made to the
IAL or AAL for a given federation transaction. In such cases, no default
value is assigned to the resulting xAL.</th>
<th></th>
</tr>
<tr class="odd">
<th>The RP <strong>SHALL</strong> determine the minimum IAL, AAL, and
FAL it is willing to accept for access to any offered
functionality.</th>
<th>IA-12 a., IA-12 (6)</th>
</tr>
<tr class="header">
<th>An RP <strong>MAY</strong> vary its functionality based on the IAL,
AAL, and FAL of a specific federated authentication.</th>
<th></th>
</tr>
<tr class="odd">
<th>In a federation process, only the IdP has direct access to the
details of the subscriber account, which determines the applicable IAL,
and the authentication event at the IdP, which determines the applicable
AAL. Consequently, the RP <strong>SHALL</strong> consider the IdP’s
declaration of the IAL and AAL as the sole source of these levels for a
given federated transaction.</th>
<th></th>
</tr>
<tr class="header">
<th>The RP <strong>SHALL</strong> ensure that the federation transaction
meets the requirements of the FAL declared in the assertion.</th>
<th></th>
</tr>
<tr class="odd">
<th>IdPs <strong>SHALL</strong> support a mechanism for RPs to specify a
set of minimum acceptable xALs as part of the trust agreement and
<strong>SHOULD</strong> support the RP specifying a more strict minimum
set at runtime as part of the federation transaction.</th>
<th></th>
</tr>
<tr class="header">
<th>When an RP requests a particular xAL, the IdP
<strong>SHOULD</strong> fulfill that request, if possible, and
<strong>SHALL</strong> indicate the resulting xAL in the assertion.</th>
<th></th>
</tr>
<tr class="odd">
<th><h3 id="federation">5. Federation</h3></th>
<th></th>
</tr>
<tr class="header">
<th><h3 id="trust-agreements">5.1. Trust Agreements</h3></th>
<th></th>
</tr>
<tr class="odd">
<th><p>Trust agreements SHALL establish the following parameters:</p>
<ul>
<li><p>The set of attributes the IdP can make available to the
RP</p></li>
<li><p>The population of subscriber accounts the IdP can create
assertions for</p></li>
<li><p>The set of attributes the RP will request (a subset of the
attributes made available)</p></li>
<li><p>The purpose for each attribute requested by the RP</p></li>
<li><p>The authorized party responsible for decisions regarding the
release of subscriber attributes</p></li>
<li><p>The means of informing subscribers about attribute release to the
RP</p></li>
<li><p>The xALs available from the IdP</p></li>
<li><p>The xALs required by the RP</p></li>
</ul></th>
<th><p>IA-1 a.1 (a)</p>
<p>IA-4(6)</p>
<p>IA-8 (2) (b)</p></th>
</tr>
<tr class="header">
<th>Trust agreements are able to be established either statically or
dynamically. In a static establishment, there is often a legal or
contractual agreement binding the parties to a set of expected
behaviors, rights, and requirements. The parameters of static trust
agreements SHALL be available to all parties in the agreement, including
the operator of the IdP, the operator of the RP, and affected
subscribers.</th>
<th>IA-4(6)</th>
</tr>
<tr class="odd">
<th>The parameters of a dynamic trust agreement SHALL be disclosed to
the subscriber by the RP and the IdP during the federation
transaction.</th>
<th>IA-4(6)</th>
</tr>
<tr class="header">
<th>For a static trust agreement, the authorized party MAY be the
organization responsible for the IdP. In this case, consent to release
attributes is decided for all subscribers and established by an
allowlist as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#idp-allowlist"><u>Sec.
5.3.1</u></a>, allowing for the disclosure of attribute information
without direct decisions and involvement by the subscriber.</th>
<th></th>
</tr>
<tr class="odd">
<th>A static trust agreement MAY stipulate that an individual, such as
the subscriber, is to be prompted at runtime for consent to disclose
attributes as discussed in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#idp-runtime-decision"><u>Sec.
5.3.3</u></a>. Since dynamic trust agreements are established by
subscriber actions, the authorized party in a dynamic trust agreement is
always the subscriber.</th>
<th></th>
</tr>
<tr class="header">
<th>Disclosure of attributes in dynamic trust agreements SHALL be
subject to a runtime decision from the subscriber and SHALL NOT be
subject to an allowlist at the IdP.</th>
<th></th>
</tr>
<tr class="odd">
<th>During the course of a single federation transaction, it is
important for the policies and expectations of the IdP and RP to be
unambiguous for all parties involved. Therefore, there
<strong>SHOULD</strong> be only one set of trust agreements in effect
for a given transaction. This will usually be determined by the unique
pair consisting of a single IdP and a single RP. However, these
agreements could vary in other ways, such as an IdP and RP having
different agreements for different populations of subscribers.</th>
<th><p>IA-1 a.1 (a)</p>
<p>IA-4(6)</p></th>
</tr>
<tr class="header">
<th><h3 id="bilateral-trust-agreements">5.1.1. Bilateral Trust
Agreements</h3></th>
<th></th>
</tr>
<tr class="odd">
<th>The IdP <strong>SHALL</strong> disclose its supported IAL, AAL, and
FAL levels to the RP.</th>
<th></th>
</tr>
<tr class="header">
<th>The IdP <strong>MAY</strong> disclose a subset of its capabilities
to a given RP depending on the needs of the application, for example
only disclosing to a low-risk RP that accounts are proofed at IAL1 or
better.</th>
<th></th>
</tr>
<tr class="odd">
<th>The RP <strong>SHALL</strong> disclose its list of required
attributes to the IdP, including its purpose for use of each requested
attribute.</th>
<th></th>
</tr>
<tr class="header">
<th>The RP <strong>SHALL</strong> communicate its required IAL, AAL, and
FAL to the IdP, including whether no claim is required for IAL or
AAL.</th>
<th>IA-1 a.1 (a)</th>
</tr>
<tr class="odd">
<th>The IdP <strong>SHALL</strong> transmit only those attributes that
were explicitly requested by the RP.</th>
<th></th>
</tr>
<tr class="header">
<th>RPs <strong>SHALL</strong> include their requested attributes in
their privacy risk assessment.</th>
<th>IA-1 a.1 (a)</th>
</tr>
<tr class="odd">
<th><h3 id="multilateral-trust-agreements">5.1.2. Multilateral Trust
Agreements</h3></th>
<th></th>
</tr>
<tr class="header">
<th>Federation authorities <strong>SHALL</strong> establish parameters
regarding expected and acceptable IALs, AALs, and FALs in connection
with the federated relationships they enable.</th>
<th><p>IA-1 a.1 (a)</p>
<p>IA-4(6)</p>
<p>IA-8 (4)</p></th>
</tr>
<tr class="odd">
<th>Federation authorities <strong>SHALL</strong> individually vet each
participant in the federation to determine whether they adhere to their
expected standards.</th>
<th>IA-4(6)</th>
</tr>
<tr class="header">
<th><p>Vetting of IdPs and RPs <strong>SHALL</strong> establish, as a
minimum, that:</p>
<ul>
<li><p>Assertions generated by IdPs adhere to the requirements in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#assertions">Sec.
6</a>.</p></li>
<li><p>RPs adhere to requirements for handling subscriber attribute
data, such as retention, aggregation, and disclosure to third
parties.</p></li>
<li><p>RP and IdP systems use approved profiles of federation
protocols.</p></li>
</ul></th>
<th><p>IA-1 a. 1 (a)</p>
<p>IA-4(6)</p></th>
</tr>
<tr class="odd">
<th>Federation authorities <strong>MAY</strong> assist the technical
connection and configuration process between members, such as by
publishing configuration data for IdPs or by issuing software statements
for RPs.</th>
<th></th>
</tr>
<tr class="header">
<th>Most federations managed through authorities have a simple
membership model: parties are either in the federation or they are not.
More sophisticated federations <strong>MAY</strong> have multiple
membership tiers that federated parties can use to tell whether other
parties in the federation have been more thoroughly vetted.</th>
<th></th>
</tr>
<tr class="odd">
<th>IdPs <strong>MAY</strong> decide that certain subscriber attributes
are only releasable to RPs in higher tiers and RPs <strong>MAY</strong>
decide to accept certain information only from IdPs in higher
tiers.</th>
<th></th>
</tr>
<tr class="header">
<th><h3 id="proxied-federation">5.1.3. Proxied Federation</h3></th>
<th></th>
</tr>
<tr class="odd">
<th>Where proxies are used, they function as an IdP on one side and an
RP on the other. Therefore, all normative requirements that apply to
IdPs and RPs <strong>SHALL</strong> apply to proxies in their respective
roles.</th>
<th></th>
</tr>
<tr class="header">
<th>Federations presented through a proxy <strong>SHALL</strong> be
represented by the lowest FAL used during the proxied transaction. For
example, if a proxy takes in an assertion from the IdP at FAL2 but
presents a downstream assertion to the RP at FAL1, the entire
transaction is considered FAL1</th>
<th></th>
</tr>
<tr class="odd">
<th>Likewise if a federation takes in an assertion at FAL1 but presents
a downstream assertion to the RP at FAL3, the entire transaction is
still considered FAL1. The proxy <strong>SHALL</strong> communicate this
aspect to the RP either at runtime or through pre-configuration as part
of the trust agreement.</th>
<th></th>
</tr>
<tr class="header">
<th><h3 id="registration">5.2. Registration</h3></th>
<th></th>
</tr>
<tr class="odd">
<th><h3 id="manual-registration">5.2.1. Manual Registration</h3></th>
<th></th>
</tr>
<tr class="header">
<th>IdPs and RPs <strong>MAY</strong> act as their own authorities on
who to federate with as in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#bilateral">Sec.
5.1.1</a> or <strong>MAY</strong> externalize those authority decisions
to an external party as in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#authorities">Sec.
5.1.2</a>.</th>
<th></th>
</tr>
<tr class="odd">
<th>Protocols requiring the transfer of keying information
<strong>SHALL</strong> use a secure method during the registration
process to exchange keying information needed to operate the federated
relationship, including any shared secrets or public keys.</th>
<th></th>
</tr>
<tr class="header">
<th>Any symmetric keys used in this relationship <strong>SHALL</strong>
be unique to a pair of federation participants.</th>
<th></th>
</tr>
<tr class="odd">
<th>Federation relationships <strong>SHALL</strong> establish parameters
regarding expected and acceptable IALs and AALs in connection with the
federated relationship.</th>
<th></th>
</tr>
<tr class="header">
<th><h3 id="dynamic-registration">5.2.2. Dynamic Registration</h3></th>
<th></th>
</tr>
<tr class="odd">
<th>This process allows IdPs and RPs to be connected together without
manually establishing a connection between them using manual
registration (See <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#manual-registration">Sec.
5.2.1</a>). IdPs that support dynamic registration
<strong>SHALL</strong> make their configuration information (such as
dynamic registration endpoints) available in such a way as to minimize
system administrator involvement.</th>
<th></th>
</tr>
<tr class="header">
<th><h3 id="authentication-and-attribute-disclosure">5.3. Authentication
and Attribute Disclosure</h3></th>
<th></th>
</tr>
<tr class="odd">
<th>Once the IdP and RP have entered into a trust agreement and have
completed registration, the federation protocol can be used to pass
subscriber attributes from the IdP to the RP. The decision of whether an
authentication can occur or attributes may be passed
<strong>SHALL</strong> be determined by the authorized party stipulated
by the trust agreement, through use of an allowlist, a blocklist, or a
runtime decision.</th>
<th></th>
</tr>
<tr class="header">
<th>A subscriber’s attributes <strong>SHALL</strong> be transmitted
between IdP and RP only for identity federation transactions or support
functions such as identification of compromised subscriber accounts as
discussed in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#privacy-reqs">Sec.
5.5</a>. A subscriber’s attributes are not to be transmitted for any
other purposes, even when parties are allowlisted.</th>
<th></th>
</tr>
<tr class="odd">
<th>A subscriber’s attributes <strong>SHALL NOT</strong> be used by the
RP for purposes other than those stipulated in the trust agreement.</th>
<th></th>
</tr>
<tr class="header">
<th>The subscriber <strong>SHALL</strong> be informed of the
transmission of attributes to an RP.</th>
<th></th>
</tr>
<tr class="odd">
<th>In the case where the authorized party is the organization, the
organization <strong>SHALL</strong> make available to the subscriber the
list of approved RPs and the associated sets of attributes sent to those
RPs.</th>
<th></th>
</tr>
<tr class="header">
<th>In the case where the authorized party is the subscriber, the
subscriber <strong>SHALL</strong> be prompted prior to release of
attributes using a runtime decision at the IdP as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#idp-runtime-decision">Sec.
5.3.3</a>.</th>
<th></th>
</tr>
<tr class="odd">
<th>The IdP <strong>SHALL</strong> provide effective mechanisms for
redress of subscriber complaints or problems (e.g., subscriber
identifies an inaccurate attribute value). See <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#usability">Sec.
10</a> on usability considerations for redress.</th>
<th></th>
</tr>
<tr class="header">
<th><h3 id="idp-allowlists-of-rps">5.3.1. IdP Allowlists of
RPs</h3></th>
<th></th>
</tr>
<tr class="odd">
<th>In a static trust agreement, IdPs <strong>MAY</strong> establish
allowlists of RPs authorized to receive authentication and attributes
from the IdP without a runtime decision from the subscriber. .</th>
<th></th>
</tr>
<tr class="header">
<th>When placing an RP on its allowlist, the IdP <strong>SHALL</strong>
ensure that the RP abides by all applicable provisions and requirements
in the SP 800-63 guidelines.</th>
<th></th>
</tr>
<tr class="odd">
<th>The IdP <strong>SHALL</strong> determine which identity attributes
are passed to the allowlisted RP upon authentication. IdPs
<strong>SHALL</strong> make allowlists available to subscribers as
described in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#notice">Sec.
9.2</a>.</th>
<th></th>
</tr>
<tr class="header">
<th>IdP allowlists <strong>SHALL</strong> uniquely identify RPs through
the means of domain names, cryptographic keys, or other identifiers
applicable to the federation protocol in use</th>
<th></th>
</tr>
<tr class="odd">
<th>Any entities that share an identifier <strong>SHALL</strong> be
considered equivalent for the purposes of the allowlist. For example, a
wildcard domain identifier of “*.example.com” would match the domains
“www.example.com”, “service.example.com”, and “unknown.example.com”
equally. All three of these sites would be treated as the same RP for
disclosure decisions using the allowlist.</th>
<th></th>
</tr>
<tr class="header">
<th>Allowlists <strong>SHOULD</strong> be as specific as possible to
avoid unintentional impersonation of an RP.</th>
<th></th>
</tr>
<tr class="odd">
<th><h3 id="idp-blocklists-of-rps">5.3.2. IdP Blocklists of
RPs</h3></th>
<th></th>
</tr>
<tr class="header">
<th>IdPs <strong>MAY</strong> establish blocklists of RPs not authorized
to receive authentication assertions or attributes from the IdP, even if
requested to do so by the subscriber.</th>
<th></th>
</tr>
<tr class="odd">
<th>If an RP is on an IdP’s blocklist, the IdP <strong>SHALL
NOT</strong> produce an assertion targeting the RP in question under any
circumstances.</th>
<th></th>
</tr>
<tr class="header">
<th>IdP blocklists <strong>SHALL</strong> uniquely identify RPs through
the means of domain names, cryptographic keys, or other identifiers
applicable to the federation protocol in use.</th>
<th></th>
</tr>
<tr class="odd">
<th>Any entities that share an identifier <strong>SHALL</strong> be
considered equivalent for the purposes of the blocklist. For example, a
wildcard domain identifier of “*.example.com” would match the domains
“www.example.com”, “service.example.com”, and “unknown.example.com”
equally. All three of these sites would be treated as the same RP for
decisions using the blocklist.</th>
<th></th>
</tr>
<tr class="header">
<th><h3 id="idp-runtime-decisions">5.3.3. IdP Runtime
Decisions</h3></th>
<th></th>
</tr>
<tr class="odd">
<th>Every RP that is in a trust agreement with an IdP but not on an
allowlist or a blocklist with that IdP <strong>SHALL</strong> be
governed by a default policy in which runtime authorization decisions
will be made by an authorized party identified by the trust
agreement.</th>
<th></th>
</tr>
<tr class="header">
<th>The IdP <strong>SHALL</strong> provide the authorized party with
explicit notice and prompt them for positive confirmation before any
attributes about the subscriber are transmitted to the RP.</th>
<th></th>
</tr>
<tr class="odd">
<th>At a minimum, the notice <strong>SHOULD</strong> be provided by the
party in the position to provide the most effective notice and obtain
confirmation, consistent with <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#notice">Sec.
9.2</a>.</th>
<th></th>
</tr>
<tr class="header">
<th>The IdP <strong>SHALL</strong> disclose which attributes will be
released to the RP if the transaction is approved.</th>
<th></th>
</tr>
<tr class="odd">
<th>If the federation protocol in use allows for optional attribute
disclosure at runtime, the authorized party <strong>SHALL</strong> be
given the option to decide whether to transmit specific attributes to
the RP without terminating the federation transaction entirely.</th>
<th></th>
</tr>
<tr class="header">
<th>To mitigate the risk of unauthorized exposure of sensitive
information (e.g., shoulder surfing), the IdP <strong>SHALL</strong>, by
default, mask sensitive information displayed to the authorized
party.</th>
<th></th>
</tr>
<tr class="odd">
<th>If the authorized party is the subscriber, the IdP
<strong>SHALL</strong> provide mechanisms for the subscriber to
temporarily unmask such information in order for the subscriber to view
full values before transmission. For more details on masking, see <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#usability">Sec.
10</a> on usability considerations.</th>
<th></th>
</tr>
<tr class="header">
<th>An IdP <strong>MAY</strong> employ mechanisms to remember and
re-transmit the exact attribute bundle to the same RP, remembering the
authorized party’s decision. This mechanism is associated with the
subscriber account as managed by the IdP.</th>
<th></th>
</tr>
<tr class="odd">
<th>If such a mechanism is provided, the IdP <strong>SHALL</strong>
allow the authorized party to revoke such remembered access at a future
time.</th>
<th></th>
</tr>
<tr class="header">
<th><h3 id="rp-allowlists-of-idps">5.3.4. RP Allowlists of
IdPs</h3></th>
<th></th>
</tr>
<tr class="odd">
<th>RPs <strong>MAY</strong> establish allowlists of IdPs from which the
RP will accept authentication and attributes without a runtime decision
from the subscriber.</th>
<th></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>When placing an IdP in its allowlist, the RP <strong>SHALL</strong>
ensure that the IdP abides by the provisions and requirements in these
guidelines.</td>
<td></td>
</tr>
<tr class="even">
<td>RP allowlists <strong>SHALL</strong> uniquely identify IdPs through
the means of domain names, cryptographic keys, or other identifiers
applicable to the federation protocol in use.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="rp-blocklists-of-idps">5.3.5. RP Blocklists of
IdPs</h3></td>
<td></td>
</tr>
<tr class="even">
<td>RPs <strong>MAY</strong> also establish blocklists of IdPs that the
RP will not accept authentication or attributes from, even when
requested by the subscriber. A blocklisted IdP can be otherwise in a
valid trust agreement with the RP, for example if both are under the
same federation authority.</td>
<td></td>
</tr>
<tr class="odd">
<td>RP blocklists <strong>SHALL</strong> uniquely identify IdPs through
the means of domain names, cryptographic keys, or other identifiers
applicable to the federation protocol in use.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="rp-runtime-decisions">5.3.6. RP Runtime Decisions</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>Every IdP that is in a trust agreement with an RP but not on an
allowlist or a blocklist with that RP <strong>SHALL</strong> be governed
by a default policy in which runtime authorization decisions will be
made by the authorized party indicated in the trust agreement.</td>
<td></td>
</tr>
<tr class="even">
<td>The RP <strong>MAY</strong> employ mechanisms to remember the
authorized party’s decision to use a given IdP. Since this mechanism is
employed prior to authentication at the RP, the manner in which the RP
provides this mechanism (e.g., a browser cookie outside the
authenticated session) is separate from the RP subscriber account
described in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#rp-account">Sec.
5.4</a>.</td>
<td></td>
</tr>
<tr class="odd">
<td>If such a mechanism is provided, the RP <strong>SHALL</strong> allow
the authorized party to revoke such remembered options at a future
time.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="rp-subscriber-accounts">5.4. RP Subscriber
Accounts</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>The RP subscriber account <strong>SHALL</strong> be bound to at
least one federated identifier, and a given federated identifier is
bound to only one RP subscriber account at a given RP.</td>
<td>IA-4 b., IA-4 c., IA-8</td>
</tr>
<tr class="even">
<td>An RP subscriber account is <em>terminated</em> when the RP removes
all access to the account at the RP. Termination <strong>SHALL</strong>
include unbinding any federated identifiers and bound authenticators as
well as removing attributes and information associated with the account
except what is required for auditing and security purposes.</td>
<td></td>
</tr>
<tr class="odd">
<td>An RP <strong>MAY</strong> terminate an RP subscriber account
independently from the IdP for a variety of reasons, regardless of the
current validity of the subscriber account from which it is
derived.</td>
<td></td>
</tr>
<tr class="even">
<td>An authenticated session <strong>SHALL</strong> be created by the RP
only when the RP has processed and verified a valid assertion from the
IdP that is the issuer of the federated identifier associated with the
RP subscriber account.</td>
<td>IA-8</td>
</tr>
<tr class="odd">
<td>If the assertion also requires presentation of a bound authenticator
at FAL3, the bound authenticator <strong>SHALL</strong> also be
presented and processed before the RP subscriber account is associated
with an authenticated session, as discussed in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#boundauth">Sec.
6.1.2</a>.</td>
<td>IA-8</td>
</tr>
<tr class="even">
<td><h3 id="provisioning-models">5.4.1. Provisioning Models</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>The lifecycle of the provisioning process for an RP subscriber
account varies depending on factors including the trust agreement
discussed in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#trust-agreement">Sec.
5.1</a> and the deployment pattern of the IdP and RP. However, in all
cases, the RP subscriber account <strong>SHALL</strong> be provisioned
at the RP prior to the establishment of an authenticated session at the
RP in one of the following ways:</td>
<td></td>
</tr>
<tr class="even">
<td><p><strong>Just-In-Time Provisioning</strong></p>
<blockquote>
<p>An RP subscriber account is created automatically the first time the
RP receives an assertion with an unknown federated identifier from an
IdP. Any identity attributes learned during the federation process,
either within the assertion or through an identity API as discussed in
<a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#s-identity-api">Sec.
6.3</a>, <strong>MAY</strong> be associated with the RP subscriber
account. Accounts provisioned in this way are bound to the federated
identifier in the assertion used to provision them. This is the most
common form of provisioning in federation systems, as it requires the
least coordination between the RP and IdP. However, in such systems, the
RP <strong>SHALL</strong> be responsible for managing any cached
attributes it might have.</p>
</blockquote></td>
<td>IA-4 b., IA-4 c., IA-4(5)</td>
</tr>
<tr class="odd">
<td><p><strong>Pre-provisioning</strong></p>
<blockquote>
<p>An RP subscriber account is created by the IdP pushing the attributes
to the RP or the RP pulling attributes from the IdP. Pre-provisioning of
accounts generally occurs in bulk through a provisioning API as
discussed in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#provisioning-api">Sec.
5.4.3</a>, as the provisioning occurs prior to the represented
subscribers authenticating through a federated transaction.
Pre-provisioned accounts <strong>SHALL</strong> be bound to a federated
identifier at the time of provisioning. Any time a particular federated
identifier is seen by the RP, the associated account can be logged in as
a result. This form of provisioning requires infrastructure and planning
on the part of the IdP and RP, but these processes can be facilitated by
automated protocols. The RP also collects attributes about users who
have not interacted with the RP system yet, which can cause privacy
issues. Additionally, the IdP and RP must keep the set of provisioned
accounts synchronized over time as discussed in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#attribute-sync">Sec.
5.4.2</a>.</p>
</blockquote></td>
<td>IA-4 b., IA-4 c.</td>
</tr>
<tr class="even">
<td><blockquote>
<p>Other RP subscriber account provisioning models are possible but the
details of such models are outside the scope of these guidelines. The
details of any alternative provisioning model <strong>SHALL</strong> be
included in the privacy risk assessments of the IdP and RP.</p>
</blockquote></td>
<td></td>
</tr>
<tr class="odd">
<td>All organizations <strong>SHALL</strong> document their provisioning
model as part of their trust agreement.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="attribute-synchronization">5.4.2. Attribute
Synchronization</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>From the RP’s perspective, the IdP is the authoritative source for
any attributes that the IdP asserts as being associated with the
subscriber account at the IdP. However, the RP <strong>MAY</strong>
additionally collect, and optionally verify, other attributes to
associate with the RP subscriber account. Sometimes, these attributes
can even override what’s asserted by the IdP. For example, if an IdP
asserts a full display name for the subscriber, the RP can allow the
subscriber to provide an alternative preferred name for use at the
RP.</td>
<td>IA-4(9)</td>
</tr>
<tr class="even">
<td>The IdP <strong>SHOULD</strong> signal downstream RPs when the
attributes of a subscriber account available to the RP have been
updated. This can be accomplished using shared signaling as described in
<a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#shared-signals">Sec.
5.7</a>, through a provisioning API as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#provisioning-api">Sec.
5.4.3</a>, or by providing a signal in the assertion (e.g., a timestamp
indicating when relevant attributes were last updated, allowing the RP
to determine that its cache is out of date).</td>
<td>IA-4(9)</td>
</tr>
<tr class="odd">
<td>The IdP <strong>SHOULD</strong> signal downstream RPs when a
subscriber account is terminated, or when the subscriber account’s
access to an RP is revoked. This can be accomplished using shared
signaling as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#shared-signals">Sec.
5.7</a> or through a provisioning API as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#provisioning-api">Sec.
5.4.3</a>. Upon receiving such a signal, the RP <strong>SHALL</strong>
terminate the RP subscriber account and remove all personal information
associated with the RP subscriber account, except what is required for
audit and security purposes.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="provisioning-apis">5.4.3. Provisioning APIs</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>The attributes in the provisioning API available to a given RP
<strong>SHALL</strong> be limited to only those necessary for the RP to
perform its functions.</td>
<td></td>
</tr>
<tr class="even">
<td><p>As part of establishing the trust agreement, the IdP
<strong>SHALL</strong> document when an RP is given access to a
provisioning API including at least the following:</p>
<ul>
<li><p>the purpose for the access using the provisioning model;</p></li>
<li><p>the set of attributes made available to the RP;</p></li>
<li><p>whether the API functions as a push to the RP, a pull from the
RP, or both; and</p></li>
<li><p>the population of subscribers whose attributes are made available
to the RP.</p></li>
</ul></td>
<td></td>
</tr>
<tr class="odd">
<td>The IdP <strong>SHALL</strong> require authentication from the RP
for any pull-based access to a provisioning API. The RP
<strong>SHALL</strong> require authentication from the IdP for any
push-based access to a provisioning API.</td>
<td></td>
</tr>
<tr class="even">
<td>A provisioning API <strong>SHALL NOT</strong> be made available
under a dynamic or implicit trust agreement.</td>
<td></td>
</tr>
<tr class="odd">
<td>The IdP <strong>SHALL NOT</strong> make a provisioning API available
to any RP outside of an established trust agreement.</td>
<td></td>
</tr>
<tr class="even">
<td>The IdP <strong>SHALL</strong> provide access to a provisioning API
only as part of a federated identity relationship with an RP to
facilitate federated transactions with that RP and related functions
such as signaling revocation of the subscriber account.</td>
<td></td>
</tr>
<tr class="odd">
<td>The IdP <strong>SHALL</strong> revoke an RP’s access to the
provisioning API once access is no longer required by the RP for its
functioning purposes or when the trust agreement is terminated.</td>
<td></td>
</tr>
<tr class="even">
<td>Any provisioning API provided to the RP <strong>SHALL</strong> be
under the control and jurisdiction of the IdP.</td>
<td></td>
</tr>
<tr class="odd">
<td>External attribute providers <strong>MAY</strong> be used as
information sources by the IdP to provide attributes through this
provisioning API, but the IdP is responsible for the content and
accuracy of the information provided by the referenced attribute
providers.</td>
<td></td>
</tr>
<tr class="even">
<td>When a provisioning API is in use, the IdP <strong>SHALL</strong>
signal to the RP when a subscriber account has been terminated.</td>
<td></td>
</tr>
<tr class="odd">
<td>When receiving such a signal, the RP <strong>SHALL</strong>
terminate the associated RP subscriber account.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="attribute-collection">5.4.4. Attribute Collection</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>The RP <strong>MAY</strong> collect and maintain additional
attributes from the subscriber beyond those provided by the IdP. These
attributes are governed separately from any federation agreement since
they are collected directly by the RP.</td>
<td></td>
</tr>
<tr class="even">
<td>All attributes associated with an RP subscriber account, regardless
of their source, <strong>SHALL</strong> be removed when the RP
subscriber account is terminated.</td>
<td></td>
</tr>
<tr class="odd">
<td>The RP <strong>SHALL</strong> disclose to the subscriber the purpose
for collection of any additional attributes.</td>
<td></td>
</tr>
<tr class="even">
<td>These attributes <strong>SHALL</strong> be used solely for the
stated purposes of the RP’s functionality and <strong>SHALL NOT</strong>
have any secondary use, including communication of said attributes to
other parties.</td>
<td></td>
</tr>
<tr class="odd">
<td>An RP <strong>SHALL</strong> disclose any additional attributes
collected, and their use, as part of its System of Records Notice
(SORN).</td>
<td></td>
</tr>
<tr class="even">
<td>The RP <strong>SHALL</strong> provide an effective means of redress
for the subscriber to update and remove these additionally-collected
attributes from the RP subscriber account. See <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#usability">Sec.
10</a> on usability considerations for redress.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="time-based-removal-of-rp-subscriber-accounts">5.4.5.
Time-based Removal of RP Subscriber Accounts</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Over time, an RP could accumulate RP subscriber accounts that are no
longer accessible from the IdP. This poses a risk to the RP for holding
personal information in the RP subscriber accounts, especially when a
just-in-time provisioning model is in use and no shared signaling is
available from the IdP to signal subscriber account termination as
discussed in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#shared-signals">Sec.
5.7</a>. In such circumstances, the RP <strong>SHOULD</strong> employ a
time-based mechanism to identify RP subscriber accounts for termination
that have not been accessed after a period of time, for example, 120
days since last access.</td>
<td></td>
</tr>
<tr class="odd">
<td>When processing such an inactive account, the RP
<strong>SHALL</strong> provide sufficient notice to the subscriber, if
possible, about the pending termination of the account and provide the
subscriber with an option to re-activate the account prior to its
scheduled termination.</td>
<td></td>
</tr>
<tr class="even">
<td>Upon termination, the RP <strong>SHALL</strong> remove all personal
information associated with the RP subscriber account, except what is
required for audit and security purposes.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="privacy-requirements-1">5.5. Privacy Requirements</h3></td>
<td></td>
</tr>
<tr class="even">
<td>If an IdP discloses information on subscriber activities at an RP to
any party, or processes the subscriber’s attributes for any purpose
other than identity proofing, authentication, or attribute assertions
(collectively “identity service”), related fraud mitigation, to comply
with law or legal process, or, in the case of a specific user request,
to transmit the information, the IdP <strong>SHALL</strong> implement
measures to maintain predictability and manageability commensurate with
the privacy risk arising from the additional processing.</td>
<td></td>
</tr>
<tr class="odd">
<td>Measures <strong>MAY</strong> include providing clear notice,
obtaining subscriber consent, or enabling selective use or disclosure of
attributes.</td>
<td></td>
</tr>
<tr class="even">
<td>When an IdP uses consent measures, the IdP <strong>SHALL
NOT</strong> make consent for the additional processing a condition of
the identity service.</td>
<td></td>
</tr>
<tr class="odd">
<td>The IdP <strong>SHOULD</strong> employ technical measures, such as
the use of pairwise pseudonymous identifiers described in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#ppi">Sec. 6.2.5</a>
or privacy-enhancing cryptographic protocols, to provide
disassociability and discourage subscriber activity tracking and
profiling between RPs.</td>
<td><p>IA-4(8)</p>
<p>IA-8 (6)</p></td>
</tr>
<tr class="even">
<td>An IdP <strong>MAY</strong> disclose information on subscriber
activities to RPs for security purposes, such as communication of
suspicious activity or a compromised subscriber account as described in
<a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#shared-signals">Sec.
5.7</a>, if stated within the trust agreement.</td>
<td></td>
</tr>
<tr class="odd">
<td>An RP <strong>MAY</strong> disclose information on subscriber
activities to IdPs for security purposes, such as communication of
suspicious activity or a compromised RP subscriber account, if stated
within the trust agreement.</td>
<td></td>
</tr>
<tr class="even">
<td>An IdP <strong>SHOULD</strong> signal subscriber account termination
to RPs that have been provisioned with federated identifiers bound to
that subscriber account using shared signaling as discussed in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#shared-signals">Sec.
5.7</a>.</td>
<td></td>
</tr>
<tr class="odd">
<td>RPs that receive such a signal from the IdP <strong>SHALL</strong>
terminate the RP subscriber account and remove all personal information
associated with the RP subscriber account, except what is required for
audit and security purposes.</td>
<td></td>
</tr>
<tr class="even">
<td><p>The following requirements apply specifically to federal
agencies:</p>
<ol type="1">
<li><p>The agency <strong>SHALL</strong> consult with their Senior
Agency Official for Privacy (SAOP) to conduct an analysis determining
whether the requirements of the Privacy Act are triggered by the agency
that is acting as an IdP, by the agency that is acting as an RP, or both
(see <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#agency-privacy">Sec.
9.4</a>).</p></li>
</ol></td>
<td></td>
</tr>
<tr class="odd">
<td><ol start="2" type="1">
<li><p>The agency <strong>SHALL</strong> publish or identify coverage by
a System of Records Notice (SORN) as applicable.</p></li>
</ol></td>
<td></td>
</tr>
<tr class="even">
<td><ol start="3" type="1">
<li><p>The agency <strong>SHALL</strong> consult with their SAOP to
conduct an analysis determining whether the requirements of the
E-Government Act are triggered by the agency that is acting as an IdP,
the agency that is acting as an RP, or both.</p></li>
</ol></td>
<td></td>
</tr>
<tr class="odd">
<td><ol start="4" type="1">
<li><p>The agency <strong>SHALL</strong> publish or identify coverage by
a Privacy Impact Assessment (PIA) as applicable.</p></li>
</ol></td>
<td></td>
</tr>
<tr class="even">
<td>If the RP subscriber account lifecycle process gives the RP access
to attributes through a provisioning API as discussed in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#provisioning-api">Sec.
5.4.3</a>, additional privacy measures <strong>SHALL</strong> be
implemented given the wide nature of information access. Specifically,
it is possible for the attributes of a subscriber to be provided to an
RP without the subscriber ever interacting with the RP in question.</td>
<td></td>
</tr>
<tr class="odd">
<td>As a consequence, when a provisioning API is used, the IdP
<strong>SHALL</strong> minimize the attributes made available to the
RP.</td>
<td></td>
</tr>
<tr class="even">
<td>To prevent the transmission of attributes for users that will never
use an RP, the IdP <strong>SHALL</strong> limit the population of
subscriber accounts available via the provisioning API to the population
of subscribers authorized to use the RP by the trust agreement.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3
id="reauthentication-and-session-requirements-in-federated-environments">5.6.
Reauthentication and Session Requirements in Federated
Environments</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Due to the distributed nature of a federated system, the
subscriber’s sessions with the IdP and with the RP terminate
independently of each other. The RP <strong>SHALL NOT</strong> assume
that the subscriber has an active session at the IdP past the issuance
time of the assertion.</td>
<td></td>
</tr>
<tr class="odd">
<td>The IdP <strong>SHALL NOT</strong> assume that termination of the
subscriber’s session at the IdP will propagate to any sessions that
subscriber would have at downstream RPs.</td>
<td></td>
</tr>
<tr class="even">
<td>The RP and IdP <strong>MAY</strong> communicate session termination
requests to other parties in the federation network, if supported by the
federation protocol.</td>
<td></td>
</tr>
<tr class="odd">
<td>At the time of a federated login request, the subscriber
<strong>MAY</strong> have a pre-existing session at the IdP which
<strong>MAY</strong> be used to generate an assertion to the RP.</td>
<td></td>
</tr>
<tr class="even">
<td>The IdP <strong>SHALL</strong> communicate any information it has
regarding the time of the subscriber’s latest authentication event at
the IdP, and the RP <strong>MAY</strong> use this information in making
authorization and access decisions.</td>
<td></td>
</tr>
<tr class="odd">
<td>Depending on the capabilities of the federation protocol in use, the
IdP <strong>SHOULD</strong> allow the RP to request that the subscriber
repeat authentication at the IdP as part of a federation request.</td>
<td></td>
</tr>
<tr class="even">
<td>An RP requiring authentication through a federation protocol
<strong>SHALL</strong> specify the maximum acceptable authentication age
to the IdP, either through the federation protocol (if possible) or
through the parameters of the trust agreement.</td>
<td></td>
</tr>
<tr class="odd">
<td>The authentication age represents the time since the last
authentication event in the subscriber’s session at the IdP, and the IdP
<strong>SHALL</strong> reauthenticate the subscriber if they have not
been authenticated within that time period.</td>
<td></td>
</tr>
<tr class="even">
<td>The IdP <strong>SHALL</strong> communicate the authentication event
time to the RP to allow the RP to decide if the assertion is sufficient
for authentication at the RP and to determine the time for the next
reauthentication event.</td>
<td></td>
</tr>
<tr class="odd">
<td>If an RP is granted access to an identity API along with the
assertion, the lifetime of the access to the identity API is independent
from the lifetime of the assertion itself. Since access to the identity
API is often combined with access to additional APIs, it is common for
this access to be valid long after the assertion has expired and
possibly after the session with the RP has ended, allowing the RP to
access APIs on the subscriber’s behalf while the subscriber is no longer
present. As a consequence, the RP’s ability to successfully fetch
additional attributes through an identity API <strong>SHALL NOT</strong>
be used to establish a session at the RP.</td>
<td></td>
</tr>
<tr class="even">
<td>Likewise, inability to access an identity API <strong>SHOULD
NOT</strong> be used to end the session at the RP.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="shared-signaling">5.7. Shared Signaling</h3></td>
<td></td>
</tr>
<tr class="even">
<td>In some environments, it is useful for the IdP and RP to send
information to each other outside of the federation transaction. These
signals can communicate important changes in state between parties that
would not be otherwise known. The use of any shared signaling
<strong>SHALL</strong> be documented in the trust agreement between the
IdP and RP.</td>
<td></td>
</tr>
<tr class="odd">
<td>Signaling from the IdP to the RP <strong>SHALL</strong> require a
static trust agreement.</td>
<td></td>
</tr>
<tr class="even">
<td>Signaling from the RP to the IdP <strong>MAY</strong> be used in a
static or dynamic trust agreement.</td>
<td></td>
</tr>
<tr class="odd">
<td>Any use of shared signaling <strong>SHALL</strong> be documented and
made available to the authorized party stipulated by the trust
agreement.</td>
<td></td>
</tr>
<tr class="even">
<td>This documentation <strong>SHALL</strong> include the events under
which a signal is sent, the information included in such a signal
(including any attribute information), and any additional parameters
sent with the signal.</td>
<td></td>
</tr>
<tr class="odd">
<td>The use of shared signaling <strong>SHALL</strong> be subject to
privacy review under the trust agreement.</td>
<td></td>
</tr>
<tr class="even">
<td><p>The IdP <strong>MAY</strong> send a signal regarding the
following changes to the subscriber account:</p>
<ul>
<li><p>The account has been terminated.</p></li>
<li><p>The account is suspected of being compromised.</p></li>
<li><p>Attributes of the account, including identifiers other than the
federated identifier (such as email address or certificate CN), have
changed.</p></li>
<li><p>The possible range of IAL, AAL, or FAL for the account has
changed.</p></li>
</ul></td>
<td></td>
</tr>
<tr class="odd">
<td><p>The RP <strong>MAY</strong> send a signal regarding the following
changes to the RP subscriber account:</p>
<ul>
<li><p>The account has been terminated.</p></li>
<li><p>The account is suspected of being compromised.</p></li>
<li><p>An RP-managed bound authenticator is added.</p></li>
<li><p>An RP-managed bound authenticator is removed.</p></li>
</ul></td>
<td></td>
</tr>
<tr class="even">
<td>Additional signals from both the IdP and RP <strong>MAY</strong> be
allowed subject to privacy and security review as part of the trust
agreement.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="assertions">6. Assertions</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Assertions <strong>SHALL</strong> represent a discrete
authentication event of the subscriber at the IdP and
<strong>SHALL</strong> be processed as a discrete authentication event
at the RP.</td>
<td></td>
</tr>
<tr class="odd">
<td><p>All assertions <strong>SHALL</strong> include the following
attributes:</p>
<ol type="1">
<li><p>Subject identifier: An identifier for the party to which the
assertion applies (i.e., the subscriber).</p></li>
<li><p>Issuer identifier: An identifier for the issuer of the assertion
(i.e., the IdP).</p></li>
<li><p>Audience identifier: An identifier for the party intended to
consume the assertion (i.e., the RP).</p></li>
<li><p>Issuance time: A timestamp indicating when the IdP issued the
assertion.</p></li>
</ol></td>
<td>IA-8</td>
</tr>
<tr class="even">
<td><ol start="5" type="1">
<li><p>Validity time window: A period of time outside of which the
assertion <strong>SHALL NOT</strong> be accepted as valid by the RP for
the purposes of authenticating the subscriber and starting an
authenticated session at the RP. This is usually communicated by means
of an expiration timestamp for the assertion in addition to the issuance
timestamp.</p></li>
<li><p>Assertion identifier: A value uniquely identifying this
assertion, used to prevent attackers from replaying prior
assertions.</p></li>
<li><p>Signature: Digital signature or message authentication code
(MAC), including key identifier or public key associated with the IdP,
covering the entire assertion.</p></li>
<li><p>Authentication time: A timestamp indicating when the IdP last
verified the presence of the subscriber at the IdP through a primary
authentication event (if available).</p></li>
<li><p>IAL: Indicator of the IAL of the subscriber account being
represented in the assertion, or an indication that no IAL is
asserted.</p></li>
<li><p>AAL: Indicator of the AAL used when the subscriber authenticated
to the IdP, or an indication that no AAL is asserted.</p></li>
<li><p>FAL: An indicator of the IdP’s intended FAL of the federation
process represented by the assertion.</p></li>
</ol></td>
<td></td>
</tr>
<tr class="odd">
<td><p>If the assertion is used at FAL3 with a bound authenticator as
described in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#boundauth">Sec.
6.1.2</a>, the assertion <strong>SHALL</strong> include the
following:</p>
<ol type="1">
<li><blockquote>
<p>Authenticator binding: The public key, key identifier, or other
identifier of subscriber-held bound authenticator (for IdP-managed bound
authenticators) or indicator that an RP-managed bound authenticator is
required for verification of this assertion.</p>
</blockquote></li>
</ol></td>
<td></td>
</tr>
<tr class="even">
<td><p>Assertions <strong>MAY</strong> also include additional items,
including the following information:</p>
<ol type="1">
<li><p>Attribute values and derived attribute values: Information about
the subscriber.</p></li>
<li><p>Attribute metadata: Additional information about one or more
subscriber attributes, such as those described in NIST Internal Report
8112 <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#ref-nistir8112">[NISTIR8112]</a>.</p></li>
</ol></td>
<td></td>
</tr>
<tr class="odd">
<td>Assertions <strong>SHOULD</strong> specify the AAL when an
authentication event is being asserted and IAL when identity proofed
attributes (or values derived from those attributes) are being
asserted.</td>
<td></td>
</tr>
<tr class="even">
<td><p>All metadata within the assertion <strong>SHALL</strong> be
validated by the RP upon receipt:</p>
<ul>
<li><p><em>Issuer verification</em>: ensuring the assertion was issued
by the IdP the RP expects it to be from.</p></li>
<li><p><em>Signature validation</em>: ensuring the signature of the
assertion is valid and corresponds to a key belonging to the IdP sending
the assertion.</p></li>
<li><p><em>Time validation</em>: ensuring the expiration and issue times
are within acceptable limits of the current timestamp.</p></li>
<li><p><em>Audience restriction</em>: ensuring this RP is the intended
recipient of the assertion.</p></li>
</ul></td>
<td></td>
</tr>
<tr class="odd">
<td>An RP <strong>SHALL</strong> treat subject identifiers as not
inherently globally unique. Instead, the value of the assertion’s
subject identifier is usually in a namespace under the assertion
issuer’s control. This allows an RP to talk to multiple IdPs without
incorrectly conflating subjects from different IdPs.</td>
<td><p>IA-8</p>
<p>IA-12 b.</p></td>
</tr>
<tr class="even">
<td>Assertions <strong>MAY</strong> include additional attributes about
the subscriber. <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#encrypted-assertion">Section
6.2.3</a> contains privacy requirements for presenting attributes in
assertions.</td>
<td></td>
</tr>
<tr class="odd">
<td>The RP <strong>MAY</strong> be given limited access to an identity
API as discussed in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#s-identity-api">Sec.
6.3</a> along with the assertion, which the RP can use to fetch
additional identity attributes for the subscriber.</td>
<td></td>
</tr>
<tr class="even">
<td>The assertion’s validity time window is the time between its
issuance and its expiration. This window needs to be large enough to
allow the RP to process the assertion and create a local application
session for the subscriber, but should not be longer than necessary for
such establishment. Long-lived assertions have a greater risk of being
stolen or replayed; a short assertion validity time window mitigates
this risk. Assertion validity time windows <strong>SHALL NOT</strong> be
used to limit the session at the RP. See <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#federation-session">Sec.
5.3</a> for more information.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="bearer-assertions">6.1.1. Bearer Assertions</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Note that mere possession of a bearer assertion or reference is not
always enough to impersonate a subscriber. For example, if an assertion
is presented in the back-channel federation model (described in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#back-channel">Sec.
7.1</a>), additional controls <strong>MAY</strong> be placed on the
transaction (such as identification of the RP and assertion injection
protections) that help further protect the RP from fraudulent
activity.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="bound-authenticators">6.1.2. Bound Authenticators</h3></td>
<td></td>
</tr>
<tr class="even">
<td>A bound authenticator <strong>SHALL</strong> be unique per
subscriber at the RP such that two subscribers cannot present the same
authenticator for their separate RP subscriber accounts.</td>
<td></td>
</tr>
<tr class="odd">
<td>All bound authenticators <strong>SHALL</strong> be phishing
resistant. Consequently, subscriber-chosen values such as a memorized
secret cannot be used as bound authenticators.</td>
<td></td>
</tr>
<tr class="even">
<td>The RP <strong>SHALL</strong> accept authentication from a bound
authenticator only in the context of processing an assertion.
Consequently, the subscriber can not use a bound authenticator to log
into the RP directly, bypassing the IdP in the process</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="idp-managed-bound-authenticators">6.1.2.1. IdP-Managed Bound
Authenticators</h3></td>
<td></td>
</tr>
<tr class="even">
<td>When the bound authenticator is managed by the IdP as in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#fig-9">Fig. 9</a>,
a unique identifier for the authenticator (such as its public key)
<strong>SHALL</strong> be included in the assertion presented to the
RP.</td>
<td></td>
</tr>
<tr class="odd">
<td>The RP <strong>SHALL</strong> prompt the subscriber to prove
possession of the identified bound authenticator.</td>
<td></td>
</tr>
<tr class="even">
<td>An IdP-managed bound authenticator <strong>MAY</strong> be distinct
from the primary authenticator the subscriber uses to authenticate to
the IdP.</td>
<td></td>
</tr>
<tr class="odd">
<td>Bound authenticators managed at the IdP <strong>SHALL</strong> be
phishing resistant and <strong>SHALL</strong> be independently
dereferenceable by the RP based on a mutually-trusted security
framework, such as a public-key infrastructure.</td>
<td></td>
</tr>
<tr class="even">
<td>When processing an IdP-managed bound authenticator for the first
time, the RP <strong>SHOULD</strong> verify whether the authenticator
being presented is appropriate to be associated with the subscriber
account, such as through account resolution from the attributes in the
authenticator’s presented information.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="rp-managed-bound-authenticators">6.1.2.2. RP-Managed Bound
Authenticators</h3></td>
<td></td>
</tr>
<tr class="even">
<td>When the bound authenticator is managed by the RP as in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#fig-10">Fig.
10</a>, the IdP <strong>SHALL</strong> include an indicator in the
assertion that the assertion is to be used with a bound authenticator at
FAL3.</td>
<td></td>
</tr>
<tr class="odd">
<td>The unique identifier for the authenticator (such as its public key)
<strong>SHALL</strong> be stored in the RP subscriber account.</td>
<td></td>
</tr>
<tr class="even">
<td>For RP-provided authenticators, the administrator of the RP
<strong>SHALL</strong> issue the authenticator to the subscriber
directly for use with an FAL3 login.</td>
<td>IA-5 (16)</td>
</tr>
<tr class="odd">
<td>The administrator of the RP <strong>SHALL</strong> store a unique
identifier for the bound authenticator in the RP subscriber
account.</td>
<td></td>
</tr>
<tr class="even">
<td>The administrator of the RP <strong>SHALL</strong> determine through
independent means that the party to which the authenticator is issued is
the identified subject of the RP subscriber account.</td>
<td></td>
</tr>
<tr class="odd">
<td>For subscriber-provided authenticators, if no bound authenticators
are associated with the RP subscriber account, the RP
<strong>SHALL</strong> perform a binding ceremony to establish the
connection between the authenticator, the subscriber, and the RP
subscriber account as shown in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#fig-11">Fig.
11</a>.</td>
<td></td>
</tr>
<tr class="even">
<td>The RP <strong>SHALL</strong> first establish an authenticated
session using federation with an assertion that meets all the other
requirements of FAL3, including an indication that the assertion is
intended for use at FAL3 with an RP-managed bound authenticator.</td>
<td></td>
</tr>
<tr class="odd">
<td>The subscriber <strong>SHALL</strong> immediately be prompted to
present and authenticate with the proposed authenticator.</td>
<td></td>
</tr>
<tr class="even">
<td>Upon successful presentation of the authenticator, the RP
<strong>SHALL</strong> store a unique identifier for the authenticator
(such as its public key) and associate this with the RP subscriber
account associated with the federated identifier. If the subscriber
fails to successfully present an appropriate authenticator, the binding
ceremony fails.</td>
<td></td>
</tr>
<tr class="odd">
<td>The binding ceremony session <strong>SHALL</strong> have a timeout
of five minutes or less. The session used during the ceremony is not an
authenticated session for the purposes of logging in.</td>
<td></td>
</tr>
<tr class="even">
<td>Upon successful completion of the binding ceremony, the RP
<strong>SHALL</strong> immediately request a new assertion from the IdP
at FAL3, including prompting the subscriber for the newly-bound
authenticator.</td>
<td></td>
</tr>
<tr class="odd">
<td>An RP <strong>MAY</strong> allow a subscriber to bind multiple
subscriber-provided authenticators at FAL3. If this is the case, and the
RP subscriber account has one or more existing bound authenticators, the
binding ceremony makes use of the existing ability to reach FAL3.</td>
<td></td>
</tr>
<tr class="even">
<td>The subscriber <strong>SHALL</strong> first be prompted to present
an existing bound authenticator to reach FAL3.</td>
<td></td>
</tr>
<tr class="odd">
<td>Upon successful authentication, the RP <strong>SHALL</strong>
immediately prompt the subscriber for the newly-bound
authenticator.</td>
<td></td>
</tr>
<tr class="even">
<td>An RP <strong>MAY</strong> allow a subscriber to unbind a bound
subscriber-provided authenticator from their RP subscriber account,
thereby removing the ability to use that authenticator for FAL3.</td>
<td></td>
</tr>
<tr class="odd">
<td>When a bound authenticator is unbound, the RP <strong>SHALL</strong>
terminate all current FAL3 sessions for the subscriber and
<strong>SHALL</strong> require reauthentication of the subscriber from
the IdP. Note that in many cases, a subscriber will need to unbind a
bound authenticator to account for a lost or compromised authenticator,
and the subscriber will therefore not have access to the authenticator
during the unbinding process.</td>
<td></td>
</tr>
<tr class="even">
<td><p>The RP <strong>SHALL</strong> notify the subscriber through an
out-of-band mechanism, and <strong>SHOULD</strong> notify the IdP using
a shared signaling system (see <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#shared-signals">Sec.
5.7</a>), if any of the following events occur:</p>
<ul>
<li><p>A new authenticator is bound to the RP subscriber
account.</p></li>
<li><p>An existing bound authenticator is unbound from the RP subscriber
account.</p></li>
</ul></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="processing-bound-authenticators">6.1.2.3. Processing Bound
Authenticators</h3></td>
<td></td>
</tr>
<tr class="even">
<td><p>The following requirements apply to all assertions associated
with a bound authenticator:</p>
<ol type="1">
<li><p>The subscriber <strong>SHALL</strong> prove possession of the
bound authenticator to the RP, in addition to presentation of the
assertion itself.</p></li>
</ol></td>
<td></td>
</tr>
<tr class="odd">
<td><ol start="2" type="1">
<li><p>If the authenticator is managed at the IdP, reference to a given
authenticator found within an assertion <strong>SHALL</strong> be
trusted at the same level as all other information within the
assertion.</p></li>
</ol></td>
<td></td>
</tr>
<tr class="even">
<td><ol start="3" type="1">
<li><p>If the authenticator is managed at the IdP, the assertion
<strong>SHALL NOT</strong> include an unencrypted private or symmetric
key to be used as an authenticator with the presentation.</p></li>
</ol></td>
<td></td>
</tr>
<tr class="odd">
<td><ol start="4" type="1">
<li><p>The RP <strong>SHALL</strong> process and validate the assertion
in addition to the bound authenticator.</p></li>
</ol></td>
<td></td>
</tr>
<tr class="even">
<td><ol start="5" type="1">
<li><p>Failure to authenticate with the bound authenticator
<strong>SHALL</strong> result in an error at the RP.</p></li>
</ol></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="assertion-protection">6.2. Assertion Protection</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Independent of the binding mechanism (discussed in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#assertion-binding">Sec.
6.1</a>) or the federation model used to obtain them (described in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#trust-agreement">Sec.
5.1</a>), assertions <strong>SHALL</strong> include a set of protections
to prevent attackers from manufacturing valid assertions or reusing
captured assertions at disparate RPs. The protections required are
dependent on the details of the use case being considered, and specific
protections are listed here.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="assertion-identifier">6.2.1. Assertion Identifier</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Assertions <strong>SHALL</strong> be sufficiently unique to permit
unique identification by the target RP.</td>
<td></td>
</tr>
<tr class="odd">
<td>Assertions <strong>MAY</strong> accomplish this by use of an
embedded nonce, issuance timestamp, assertion identifier, or a
combination of these or other techniques.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="signed-assertion">6.2.2. Signed Assertion</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>Assertions <strong>SHALL</strong> be cryptographically signed by the
issuer (IdP).</td>
<td></td>
</tr>
<tr class="even">
<td>The RP <strong>SHALL</strong> validate the digital signature or MAC
of each such assertion based on the issuer’s key.</td>
<td></td>
</tr>
<tr class="odd">
<td>This signature <strong>SHALL</strong> cover the entire assertion,
including its identifier, issuer, audience, subject, and
expiration.</td>
<td></td>
</tr>
<tr class="even">
<td>The assertion signature <strong>SHALL</strong> either be a digital
signature using asymmetric keys or a MAC using a symmetric key shared
between the RP and issuer.</td>
<td></td>
</tr>
<tr class="odd">
<td>Shared symmetric keys used for this purpose by the IdP
<strong>SHALL</strong> be independent for each RP to which they send
assertions, and are normally established during registration of the
RP.</td>
<td></td>
</tr>
<tr class="even">
<td>Public keys for verifying digital signatures <strong>SHALL</strong>
be transferred to the RP in a secure manner, and <strong>MAY</strong> be
fetched by the RP in a secure fashion at runtime, such as through an
HTTPS URL hosted by the IdP.</td>
<td></td>
</tr>
<tr class="odd">
<td>Approved cryptography <strong>SHALL</strong> be used.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="encrypted-assertion">6.2.3. Encrypted Assertion</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>When encrypting assertions, the IdP <strong>SHALL</strong> encrypt
the contents of the assertion using either the RP’s public key or a
shared symmetric key.</td>
<td></td>
</tr>
<tr class="even">
<td>Shared symmetric keys used for this purpose by the IdP
<strong>SHALL</strong> be independent for each RP to which they send
assertions, and are normally established during registration of the
RP.</td>
<td></td>
</tr>
<tr class="odd">
<td>Public keys for encryption <strong>SHALL</strong> be securely
transferred to the IdP and <strong>MAY</strong> be fetched by the IdP in
a secure fashion at runtime, such as through an HTTPS URL hosted by the
RP.</td>
<td></td>
</tr>
<tr class="even">
<td>All encryption of assertions <strong>SHALL</strong> use approved
cryptography.</td>
<td></td>
</tr>
<tr class="odd">
<td>When personally-identifiable information is included in the
assertion and the assertion is handled by intermediaries such as a
browser, the federation protocol <strong>SHALL</strong> encrypt
assertions to protect the sensitive information in the assertion from
leaking to unintended parties. For example, a SAML assertion can be
encrypted using XML-Encryption, or an OpenID Connect ID Token can be
encrypted using JSON Web Encryption (JWE).</td>
<td>IA-8 (4)</td>
</tr>
<tr class="even">
<td><h3 id="audience-restriction">6.2.4. Audience Restriction</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>Assertions <strong>SHALL</strong> use audience restriction
techniques to allow an RP to recognize whether or not it is the intended
target of an issued assertion..</td>
<td></td>
</tr>
<tr class="even">
<td>All RPs <strong>SHALL</strong> check that the audience of an
assertion contains an identifier for their RP to prevent the injection
and replay of an assertion generated for one RP at another RP</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="pairwise-pseudonymous-identifiers">6.2.5. Pairwise
Pseudonymous Identifiers</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="general-requirements-1">6.2.5.1. General
Requirements</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><p>When using pairwise pseudonymous identifiers within the
assertions generated by the IdP for the RP, the IdP
<strong>SHALL</strong> generate a different federated identifier for
each RP as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#ppi-gen">Sec.
6.2.5.2</a> below.</p>
<p>When PPIs are used with RPs alongside attributes, it may still be
possible for multiple colluding RPs to re-identify a subscriber by
correlation across systems using these identity attributes. For example,
if two independent RPs each see the same subscriber identified with
different pairwise pseudonymous identifiers, they could still determine
that the subscriber is the same person by comparing the name, email
address, physical address, or other identifying attributes carried
alongside the pairwise pseudonymous identifier in the respective
assertions.</p></td>
<td><p>IA-4(8)</p>
<p>IA-8</p>
<p>IA-8 (6)</p>
<p>IA-12 b.</p></td>
</tr>
<tr class="even">
<td>Privacy policies <strong>SHOULD</strong> prohibit such correlation,
and pairwise pseudonymous identifiers can increase effectiveness of
these policies by increasing the administrative effort in managing the
attribute correlation.</td>
<td><p>IA-4(8)</p>
<p>IA-8 (6)</p></td>
</tr>
<tr class="odd">
<td>The proxy <strong>SHALL NOT</strong> disclose the mapping between
the pairwise pseudonymous identifier and any other identifiers to a
third party or use the information for any purpose other than federated
authentication, related fraud mitigation, to comply with law or legal
process, or in the case of a specific user request for the
information.</td>
<td><p>IA-4(8)</p>
<p>IA-8 (6)</p></td>
</tr>
<tr class="even">
<td><h3 id="pairwise-pseudonymous-identifier-generation">6.2.5.2.
Pairwise Pseudonymous Identifier Generation</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>Pairwise pseudonymous identifiers <strong>SHALL</strong> contain no
identifying information about the subscriber.</td>
<td><p>IA-4(8)</p>
<p>IA-8 (6)</p></td>
</tr>
<tr class="even">
<td>They <strong>SHALL</strong> also be unguessable by a party having
access to some information identifying the subscriber.</td>
<td><p>IA-4(8)</p>
<p>IA-8 (6)</p></td>
</tr>
<tr class="odd">
<td>Pairwise pseudonymous identifiers <strong>MAY</strong> be generated
randomly and assigned to subscribers by the IdP or <strong>MAY</strong>
be derived from other subscriber information if the derivation is done
in an irreversible, unguessable manner (e.g., using a keyed hash
function with a secret key).</td>
<td><p>IA-4(8)</p>
<p>IA-8 (6)</p></td>
</tr>
<tr class="even">
<td>Normally, the identifiers <strong>SHALL</strong> only be known by
and used by one pair of endpoints (e.g., IdP-RP).</td>
<td><p>IA-4(8)</p>
<p>IA-8 (6)</p></td>
</tr>
<tr class="odd">
<td><p>An IdP <strong>MAY</strong> generate the same identifier for a
subscriber at multiple RPs at the request of those RPs, provided:</p>
<ul>
<li><p>The trust agreement stipulates a shared pseudonymous identifier
for a specific family of RPs;</p></li>
<li><p>The authorized party consents to and is notified of the use of a
shared pseudonymous identifier;</p></li>
<li><p>Those RPs have a demonstrable relationship that justifies an
operational need for the correlation, such as a shared security domain
or shared legal ownership; and</p></li>
<li><p>All RPs sharing an identifier consent to being correlated in such
a manner (i.e., one RP cannot request to have another RP’s PPI without
that other RP’s knowledge and consent).</p></li>
</ul></td>
<td><p>IA-4(8)</p>
<p>IA-8 (6)</p></td>
</tr>
<tr class="even">
<td>The RPs <strong>SHALL</strong> conduct a privacy risk assessment to
consider the privacy risks associated with requesting a common
identifier. See <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#notice">Sec.
9.2</a> for further privacy considerations.</td>
<td><p>IA-4(8)</p>
<p>IA-8 (6)</p></td>
</tr>
<tr class="odd">
<td>The IdP <strong>SHALL</strong> ensure that only intended RPs are
correlated; otherwise, a rogue RP could learn of the pseudonymous
identifier for a set of correlated RPs by fraudulently posing as part of
that set.</td>
<td><p>IA-4(8)</p>
<p>IA-8 (6)</p></td>
</tr>
<tr class="even">
<td><h3 id="identity-apis">6.3. Identity APIs</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>Attributes about the subscriber, including profile information,
<strong>MAY</strong> be provided to the RP through a protected
<em>attribute API</em> known as the <em>identity API</em>. The RP is
granted limited access to the identity API during the federation
transaction, in concert with the assertion.</td>
<td></td>
</tr>
<tr class="even">
<td>Access to the identity API <strong>SHALL</strong> be time limited.
The time limitation is separate from the validity time window of the
assertion and the lifetime of the authenticated session at the RP.</td>
<td></td>
</tr>
<tr class="odd">
<td>Access to an identity API by the RP without an associated valid
assertion <strong>SHALL NOT</strong> be sufficient for the establishment
of an authenticated session at the RP.</td>
<td></td>
</tr>
<tr class="even">
<td>A given identity API deployment is expected to be capable of
providing attributes for all subscribers for whom the IdP can create
assertions. However, when access to the identity API is granted within
the context of a federation transaction, the attributes provided by an
identity API <strong>SHALL</strong> be associated with only the single
subscriber identified in the associated assertion.</td>
<td></td>
</tr>
<tr class="odd">
<td>If the identity API is hosted by the IdP, the returned attributes
<strong>SHALL</strong> include the subject identifier for the
subscriber. This allows the RP to positively correlate the assertion’s
subject to the returned attributes. Note that when access to an
attribute API is provided as part of pre-provisioning of RP subscriber
accounts as discussed in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#provisioning">Sec.
5.4.1</a>, the RP is usually granted blanket access to the identity API
outside the context of the federated transaction and these requirements
do not apply.</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="attribute-providers">6.3.1. Attribute Providers</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>The attributes returned by the attribute provider are assumed to be
independent of those returned directly from the IdP, and as such
<strong>MAY</strong> use different identifiers, formats, or
schemas.</td>
<td>IA-4(9)</td>
</tr>
<tr class="even">
<td>The RP <strong>SHALL</strong> verify that the identified attribute
provider is capable of providing the kinds of attributes that are
present, under the auspices of the applicable trust agreement.</td>
<td>IA-4(9)</td>
</tr>
<tr class="odd">
<td><h3 id="assertion-presentation">7. Assertion Presentation</h3></td>
<td></td>
</tr>
<tr class="even">
<td>There are tradeoffs with each model, but each requires the proper
validation of the assertion. Assertions <strong>MAY</strong> also be
proxied to facilitate federation between IdPs and RPs using different
presentation methods, as discussed in detail in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#proxied">Sec.
5.1.3</a>.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="back-channel-presentation">7.1. Back-Channel
Presentation</h3></td>
<td></td>
</tr>
<tr class="even">
<td>In the <em>back-channel</em> presentation model, the subscriber is
given an assertion reference to present to the RP, generally through the
front channel. The assertion reference itself contains no information
about the subscriber and <strong>SHALL</strong> be resistant to
tampering and fabrication by an attacker. The RP presents the assertion
reference to the IdP, usually along with authentication of the RP
itself, to fetch the assertion.</td>
<td></td>
</tr>
<tr class="odd">
<td><p>The assertion reference:</p>
<ol type="1">
<li><p><strong>SHALL</strong> be limited to use by a single RP.</p></li>
</ol></td>
<td></td>
</tr>
<tr class="even">
<td><ol start="2" type="1">
<li><p><strong>SHALL</strong> be single-use.</p></li>
</ol></td>
<td></td>
</tr>
<tr class="odd">
<td><ol start="3" type="1">
<li><p><strong>SHALL</strong> be time limited, and
<strong>SHOULD</strong> have a lifetime of no more than a small number
of minutes in length.</p></li>
</ol></td>
<td></td>
</tr>
<tr class="even">
<td><ol start="4" type="1">
<li><p><strong>SHALL</strong> be presented along with authentication of
the RP to the IdP.</p></li>
</ol></td>
<td></td>
</tr>
<tr class="odd">
<td><ol start="5" type="1">
<li><p><strong>SHALL</strong> contain at least 128 bits of
entropy</p></li>
</ol></td>
<td></td>
</tr>
<tr class="even">
<td>The RP <strong>SHALL</strong> protect itself against injection of
manufactured or captured assertion references by use of cross-site
scripting protection or other accepted techniques.</td>
<td></td>
</tr>
<tr class="odd">
<td>Conveyance of the assertion reference from the IdP to the
subscriber, as well as from the subscriber to the RP,
<strong>SHALL</strong> be made over an authenticated protected
channel.</td>
<td></td>
</tr>
<tr class="even">
<td>Conveyance of the assertion reference from the RP to the IdP, as
well as the assertion from the IdP to the RP, <strong>SHALL</strong> be
made over an authenticated protected channel..</td>
<td></td>
</tr>
<tr class="odd">
<td>When assertion references are presented, the IdP
<strong>SHALL</strong> verify that the party presenting the assertion
reference is the same party that requested the authentication. The IdP
can do this by requiring the RP to authenticate itself when presenting
the assertion reference to the IdP or through other similar means (see
<a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#ref-RFC7636">[RFC7636]</a>
for one protocol’s method of dynamic RP verification)</td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="front-channel-presentation">7.2. Front-Channel
Presentation</h3></td>
<td></td>
</tr>
<tr class="odd">
<td>The RP <strong>SHALL</strong> protect itself against injection of
manufactured or captured assertions by use of cross-site scripting
protection and other accepted techniques.</td>
<td></td>
</tr>
<tr class="even">
<td>Conveyance of the assertion from the IdP to the subscriber, as well
as from the subscriber to the RP, <strong>SHALL</strong> be made over an
authenticated protected channel.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="protecting-information">7.3. Protecting
Information</h3></td>
<td></td>
</tr>
<tr class="even">
<td>Communications between the IdP and the RP <strong>SHALL</strong> be
protected in transit using an authenticated protected channel.</td>
<td></td>
</tr>
<tr class="odd">
<td>Communications between the subscriber and either the IdP or the RP
(usually through a browser) <strong>SHALL</strong> be made using an
authenticated protected channel.</td>
<td></td>
</tr>
<tr class="even">
<td>Additional attributes about the user <strong>MAY</strong> be
included outside of the assertion itself by use of authorized access to
an identity API as discussed in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#s-identity-api">Sec.
6.3</a>. Splitting user information in this manner can aid in protecting
user privacy and allow for limited disclosure of identifying attributes
on top of the essential information in the authentication assertion
itself.</td>
<td></td>
</tr>
<tr class="odd">
<td>The RP <strong>SHALL</strong>, where feasible, request derived
attribute values rather than full attribute values as described in <a
href="https://pages.nist.gov/800-63-4/sp800-63c.html#minimization">Sec.
9.3</a>.</td>
<td></td>
</tr>
<tr class="even">
<td>The IdP <strong>SHALL</strong> support derived attribute values to
the extent possible.</td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="security-informative">8. Security (Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="federation-threats-informative">8.1. Federation Threats
(Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="federation-threat-mitigation-strategies-informative">8.2.
Federation Threat Mitigation Strategies (Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="privacy-considerations-informative-2">9. Privacy
Considerations (Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="minimizing-tracking-and-profiling-informative">9.1.
Minimizing Tracking and Profiling (Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="notice-and-consent-informative-1">9.2. Notice and Consent
(Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="data-minimization-informative">9.3. Data Minimization
(Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="agency-specific-privacy-compliance-informative-2">9.4.
Agency-Specific Privacy Compliance (Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="blinding-in-proxied-federation-informative">9.5. Blinding in
Proxied Federation (Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="usability-considerations-informative-2">10. Usability
Considerations (Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="general-usability-considerations-informative">10.1. General
Usability Considerations (Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="specific-usability-considerations-informative">10.2.
Specific Usability Considerations (Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="user-perspectives-on-online-identity-informative">10.2.1.
User Perspectives on Online Identity (Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="user-perspectives-of-trust-and-benefits-informative">10.2.2.
User Perspectives of Trust and Benefits (Informative)</h3></td>
<td></td>
</tr>
<tr class="odd">
<td><h3 id="user-mental-models-and-beliefs-informative">10.2.3. User
Mental Models and Beliefs (Informative)</h3></td>
<td></td>
</tr>
<tr class="even">
<td><h3 id="equity-considerations-informative-2">11. Equity
Considerations (Informative)</h3></td>
<td></td>
</tr>
</tbody>
</table>

# References

<table>
<colgroup>
<col style="width: 21%" />
<col style="width: 78%" />
</colgroup>
<tbody>
<tr class="odd">
<td>SP 800-53</td>
<td><p><a
href="https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/draft">NIST
SP 800-53 Revision 5, Security and Privacy Controls for Information
Systems and Organizations, Dec 2020</a></p>
<p><a
href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf"><u>https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf</u></a></p></td>
</tr>
<tr class="even">
<td>SP 800-63</td>
<td><p>NIST Special Publication 800-63 Digital Identity Guidelines</p>
<p><a
href="https://www.nist.gov/identity-access-management/nist-special-publication-800-63-digital-identity-guidelines"><u>https://www.nist.gov/identity-access-management/nist-special-publication-800-63-digital-identity-guidelines</u></a></p></td>
</tr>
</tbody>
</table>
