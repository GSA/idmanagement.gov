------------------------------------------------------------------------

## title: "\[\]{#\_h833pg8v86mn .anchor} Federal Identity, Credential, and Access Management Sub Committee"

**Security Controls Mapping of**

**Special Publication 800-53 Revision 5,**

**Identification and Authentication (IA),**

**against Special Publication 800-63**

Version 1.0

April 24, 2024

**Revision History**

------------------------------------------------------------------------

**Document **Document Date** **Revision Details** Version**

------------------------------------------------------------------------

1.0 04//24/2024 Initial Mapping of IA Controls

------------------------------------------------------------------------

**\[Table of Contents\]{.smallcaps}**

[**Introduction**](#introduction)

[**Applicability and Use**](#applicability-and-use)

[**Informational Policy Mapping**](#informational-policy-mapping)

[**Policy Crosswalk**](#policy-crosswalk)

> [Policy crosswalk overview Table](#policy-crosswalk-overview-table)
>
> [Detailed Policy Crosswalk](#detailed-policy-crosswalk)
>
> [800-63-4](#section)
>
> [800-63A-4](#a-4)
>
> [800-63B-4](#b-4)
>
> [800-63C-4](#c-4)

[***References***](#references)

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
([\[https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63Bsup1.pdf\]{.underline}](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63Bsup1.pdf))
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

+------+--------------------------+-----------------------------------+
\| Con \| NIST SP 800-53 R5 \| NIST SP 800-63 (Draft Version 4) \| \|
trol \| Control \| Guidance \|
+======+==========================+===================================+
\| IA-1 \| a. Develop, document, \| - 800-63-4 Sections 2.1, 4.1, \| \|
\| and disseminate to \| \> 5.5 \| \| \| \[*Assignment: \| \| \| \|
organization-defined \| - 800-83C-4 Sections 5, 5.1 and \| \| \|
personnel or roles*\]: \| \> subsections, 5.2 and \| \| \| \| \>
subsections \| \| \| \> 1. \[*Selection (one \| \| \| \| \> or more): \|
\| \| \| \> Organization-level; \| \| \| \| \> Mission/business \| \| \|
\| \> process-level; \| \| \| \| \> System-level*\] \| \| \| \| \>
identification and \| \| \| \| \> authentication policy \| \| \| \| \>
that: \| \| \| \| \> \| \| \| \| \> (a) Addresses \| \| \| \| \>
purpose, scope, roles, \| \| \| \| \> responsibilities, \| \| \| \| \>
management commitment, \| \| \| \| \> coordination among \| \| \| \| \>
organizational \| \| \| \| \> entities, and \| \| \| \| \> compliance;
and \| \|
+------+--------------------------+-----------------------------------+
\| \| \> (b) Is consistent \| - 800-63-4 Sections 2.3.1, 5, \| \| \| \>
with applicable laws, \| \> 5.1.2, 5.2.2.2 \| \| \| \> executive orders,
\| \| \| \| \> directives, \| - 800-63A-4 Sections 4.3.3.2, \| \| \| \>
regulations, policies, \| \> 4.3.4.4, 5.1.2.1, 5.1.3, \| \| \| \>
standards, and \| \> 5.1.5, 5.1.8, 5.1.10, 7, \| \| \| \> guidelines;
and \| \> 8.3, 8.6, 9 \| \| \| \| \| \| \| \| - 800-63B-4 Sections 4,
4.1.2, \| \| \| \| \> 4.1.4, 4.1.5, 4.2.2, 4.2.4, \| \| \| \| \> 4.2.5,
4.3.2, 4.3.4, 4.3.5, \| \| \| \| \> 4.4, 5.1.1.2, 5.1.2.1, \| \| \| \|
\> 5.1.3.2, 5.1.4.1, 5.1.5.1, \| \| \| \| \> 5.1.7.1, 5.1.9.1, 5.2.3, \|
\| \| \| \> 5.2.4, 5.2.5, 5.2.7, \| \| \| \| \> 5.2.12, 6.1.2.3, 6.4,
7.1, \| \| \| \| \> 9.3, 9.4, 10, 10.4, 11 \| \| \| \| \| \| \| \| -
800-63C-4 Sections 4, 4.1, \| \| \| \| \> 4.2, 4.3, 5.2.2, 7.1, 9.1, \|
\| \| \| \> 10, 11, 12.2, 12.3 \|
+------+--------------------------+-----------------------------------+
\| \| \> 2. Procedures to \| - 800-63-4 Section 5 and \| \| \| \>
facilitate the \| \> subsections \| \| \| \> implementation of the \| \|
\| \| \> identification and \| - 800-63A-4 Sections 5.1.1, \| \| \| \>
authentication policy \| \> 5.1.1.1, 5.1.10, 10.3 \| \| \| \> and the
associated \| \> fourth Description \| \| \| \> identification and \| \|
\| \| \> authentication \| \| \| \| \> controls; \| \|
+------+--------------------------+-----------------------------------+
\| IA-1 \| b. Designate an \| No direct mapping. However, see \| \| \|
\[*Assignment: \| 800-63A-4 Sections 5.1.5, 8.6, \| \| \|
organization-defined \| 800-63B-4 4.4, 9.4, 800-83C-4 \| \| \|
official*\] to manage \| 5.5, 9.4 for officials to be \| \| \| the
development, \| consulted \| \| \| documentation, and \| \| \| \|
dissemination of the \| \| \| \| identification and \| \| \| \|
authentication policy \| \| \| \| and procedures; \| \|
+------+--------------------------+-----------------------------------+
\| IA-1 \| c. Review and update \| No direct mapping. However, see \| \|
\| the current \| 800-63-4 Sections 5.3.2, \| \| \| identification and
\| 800-63A-4 5.1.1, 5.1.2.1, 5.1.3, \| \| \| authentication: \| 5.1.5,
800-63B-4 6.1.4 \| \| \| \| \| \| \| \> 1. Policy \| \| \| \| \>
\[*Assignment: \| \| \| \| \> organization-defined \| \| \| \| \>
frequency*\] and \| \| \| \| \> following \| \| \| \| \> \[*Assignment:
\| \| \| \| \> organization-defined \| \| \| \| \> events*\]; and \| \|
\| \| \> \| \| \| \| \> 2. Procedures \| \| \| \| \> \[*Assignment: \|
\| \| \| \> organization-defined \| \| \| \| \> frequency*\] and \| \|
\| \| \> following \| \| \| \| \> \[*Assignment: \| \| \| \| \>
organization-defined \| \| \| \| \> events*\]. \| \|
+------+--------------------------+-----------------------------------+
\| IA-2 \| Uniquely identify and \| - 800-63-4 Section 2.1, 4 and \| \|
\| authenticate \| \> subsections \| \| \| organizational users and \|
\| \| \| associate that unique \| - 800-63A-4 Section 4 and \| \| \|
identification with \| \> subsections, Section 5 and \| \| \| processes
acting on \| \> subsections. However, best \| \| \| behalf of those
users. \| \> to read 800-63A-4 in full \| \| \| \| \| \| \| \| -
800-63B-4 Sections 4 and \| \| \| \| \> subsections and 5 and \| \| \|
\| \> subsections. However, it is \| \| \| \| \> best to read 800-63B-4
in \| \| \| \| \> full \| \| \| \| \| \| \| \| - For CSPs that operate
\| \| \| \| \> identity proofing and \| \| \| \| \> enrollment services,
see \| \| \| \| \> also 800-63A-4 Section 5 \| \| \| \| \> and
subsections; Section \| \| \| \| \> 6.1 \| \| \| \| \| \| \| \| -
800-63B-4 Sections 4 and \| \| \| \| \> subsections; 6.1 and \| \| \| \|
\> subsections; 6.1.2 and \| \| \| \| \> subsections; 6.1.3 \|
+------+--------------------------+-----------------------------------+
\| IA- \| Implement multi-factor \| - 800-63B-4 Sections 4.1, \| \| 2(1)
\| authentication for \| \> 4.1.1; 4.2, 4.2.1; 4.3, \| \| \| access to
privileged \| \> 4.3.1; 4.4, 4.4.1; 5.1.1; \| \| \| accounts. \| \>
5.1.3.4; 5.1.5 and \| \| \| \| \> subsections; 5.1.8 and \| \| \| \| \>
subsections; 5.1.9 and \| \| \| \| \> subsections; 5.2.3; 10.2.5, \| \|
\| \| \> 10.2.8, 10.2.9, 10.3 \|
+------+--------------------------+-----------------------------------+
\| IA- \| Implement multi-factor \| - 800-63B-4 Sections 4.1, \| \| 2(2)
\| authentication for \| \> 4.1.1; 4.2, 4.2.1; 4.3, \| \| \| access to
non-privileged \| \> 4.3.1; 4.4, 4.4.1; 5.1.1; \| \| \| accounts. \| \>
5.1.3.4; 5.1.5 and \| \| \| \| \> subsections; 5.1.8 and \| \| \| \| \>
subsections; 5.1.9 and \| \| \| \| \> subsections; 5.2.3; 10.2.5, \| \|
\| \| \> 10.2.8, 10.2.9, 10.3 \|
+------+--------------------------+-----------------------------------+
\| IA- \| When shared accounts or \| - 800-63B-4 Section 4 \| \| 2(5) \|
authenticators are \| \| \| \| employed, require users \| \| \| \| to be
individually \| \| \| \| authenticated before \| \| \| \| granting
access to the \| \| \| \| shared accounts or \| \| \| \| resources. \|
\|
+------+--------------------------+-----------------------------------+
\| IA- \| Implement multi-factor \| - 800-63B-4 Sections 4.1, \| \| 2(6)
\| authentication for \| \> 4.1.1; 4.2, 4.2.1; 4.3, \| \| \|
\[*Selection (one or \| \> 4.3.1; 4.4, 4.4.1; 5.1.1; \| \| \| more):
local; network; \| \> 5.1.3.4; 5.1.5 and \| \| \| remote*\] access to \|
\> subsections; 5.1.8 and \| \| \| \[*Selection (one or \| \>
subsections; 5.1.9 and \| \| \| more): privileged \| \> subsections;
5.2.3; 10.2.5, \| \| \| accounts; non-privileged \| \> 10.2.8, 10.2.9,
10.3 \| \| \| accounts*\] such that: \| \|
+------+--------------------------+-----------------------------------+
\| \| \> (a) One of the \| - 800-63B-4 Sections 4.2, \| \| \| \> factors
is provided by \| \> 4.2.1, 4.3, 4.3.1, 5.1.3.4, \| \| \| \> a device
separate from \| \> 5.1.5, 5.1.8, 5.1.9 \| \| \| \> the system gaining
\| \| \| \| \> access; and \| \|
+------+--------------------------+-----------------------------------+
\| \| \> (b) The device meets \| - 800-63B-4 Section 4 and \| \| \| \>
\[*Assignment: \| \> subsections, 4.5 \| \| \| \> organization-defined
\| \| \| \| \> strength of mechanism \| \| \| \| \> requirements*\]. \|
\|
+------+--------------------------+-----------------------------------+
\| IA- \| Implement \| - 800-63B-4 Sections 4.2.2, \| \| 2(8) \|
replay-resistant \| \> 4.3.2, Table 1, 5.1.3.2, \| \| \| authentication
\| \> 5.1.4.2, 5.1.5.2, 5.2.5, \| \| \| mechanisms for access to \| \>
5.2.8, Table 4 \| \| \| \[*Selection (one or \| \| \| \| more):
privileged \| \| \| \| accounts; non-privileged \| \| \| \| accounts*\].
\| \|
+------+--------------------------+-----------------------------------+
\| IA-2 \| Provide a single sign-on \| - 800-63C-4 \| \| (10) \|
capability for \| \| \| \| \[*Assignment: \| \| \| \|
organization-defined \| \| \| \| system accounts and \| \| \| \|
services*\]. \| \|
+------+--------------------------+-----------------------------------+
\| IA-2 \| Accept and \| No direct mapping. However, see \| \| (12) \|
electronically verify \| 800-63B-4 Section 5.1.9.2 \| \| \| Personal
Identity \| \| \| \| Verification-compliant \| \| \| \| credentials. \|
\|
+------+--------------------------+-----------------------------------+
\| IA-2 \| Implement the following \| - 800-63B-4 Table 1, Section \| \|
(13) \| out-of-band \| \> 5.1.3 and subsections; \| \| \| authentication
\| \> 10.2.3; 11 \| \| \| mechanisms under \| \| \| \| \[*Assignment:
\| - 800-63C-4 Section 6.1.2.2 \| \| \| organization-defined \| \| \| \|
conditions*\]: \| \| \| \| \[*Assignment: \| \| \| \|
organization-defined \| \| \| \| out-of-band \| \| \| \|
authentication*\]. \| \|
+------+--------------------------+-----------------------------------+
\| IA-3 \| Uniquely identify and \| Not Applicable -- NIST 800-63 \| \|
\| authenticate \| scope is limited to identity \| \| \| \[*Assignment:
\| proofing and authentication of \| \| \| organization-defined \| users
(such as employees, \| \| \| devices and/or types of \| contractors, or
private \| \| \| devices*\] before \| individuals); devices are out of
\| \| \| establishing a \| scope. \| \| \| \[*Selection (one or \| \| \|
\| more): local; remote; \| \| \| \| network*\] connection. \| \|
+------+--------------------------+-----------------------------------+
\| IA- \| Authenticate \| Not Applicable -- NIST 800-63 \| \| 3(1) \|
\[*Assignment: \| scope is limited to identity \| \| \|
organization-defined \| proofing and authentication of \| \| \| devices
and/or types of \| users (such as employees, \| \| \| devices*\] before
\| contractors, or private \| \| \| establishing \| individuals);
devices are out of \| \| \| \[*Selection (one or \| scope. \| \| \|
more): local; remote; \| \| \| \| network*\] connection \| \| \| \|
using bidirectional \| \| \| \| authentication that is \| \| \| \|
cryptographically based. \| \|
+------+--------------------------+-----------------------------------+
\| IA- \| (a) Where addresses \| Not Applicable -- NIST 800-63 \| \|
3(3) \| are allocated \| scope is limited to identity \| \| \|
dynamically, standardize \| proofing and authentication of \| \| \|
dynamic address \| users (such as employees, \| \| \| allocation lease
\| contractors, or private \| \| \| information and the \| individuals);
devices are out of \| \| \| lease duration assigned \| scope. \| \| \|
to devices in accordance \| \| \| \| with \[*Assignment: \| \| \| \|
organization-defined \| \| \| \| lease information and \| \| \| \| lease
duration*\]; and \| \| \| \| \| \| \| \| (b) Audit lease \| \| \| \|
information when \| \| \| \| assigned to a device. \| \|
+------+--------------------------+-----------------------------------+
\| IA- \| Handle device \| Not Applicable -- NIST 800-63 \| \| 3(4) \|
identification and \| scope is limited to identity \| \| \|
authentication based on \| proofing and authentication of \| \| \|
attestation by \| users (such as employees, \| \| \| \[*Assignment: \|
contractors, or private \| \| \| organization-defined \| individuals);
devices are out of \| \| \| configuration management \| scope. \| \| \|
process*\]. \| \|
+------+--------------------------+-----------------------------------+
\| IA-4 \| Manage system \| No direct mapping. However, see \| \| \|
identifiers by: \| 800-63A-4 Sections 4.3.4.4, 5.1.1 \| \| \| \| \| \|
\| \> a. Receiving \| \| \| \| \> authorization from \| \| \| \| \>
\[*Assignment: \| \| \| \| \> organization-defined \| \| \| \| \>
personnel or roles*\] \| \| \| \| \> to assign an \| \| \| \| \>
individual, group, \| \| \| \| \> role, service, or \| \| \| \| \>
device identifier; \| \|
+------+--------------------------+-----------------------------------+
\| \| \> b. Selecting an \| - 800-63A-3 Sections 2.1, 4 and \| \| \| \>
identifier that \| \> subsections, 6.1, Table 1 \| \| \| \> identifies
an \| \| \| \| \> individual, group, \| \| \| \| \> role, service, or \|
\| \| \| \> device; \| \|
+------+--------------------------+-----------------------------------+
\| \| \> c. Assigning the \| - 800-63A-3 Sections 2.1, 4 and \| \| \| \>
identifier to the \| \> subsections 6.1, Table 1 \| \| \| \> intended
individual, \| \| \| \| \> group, role, service, \| \| \| \| \> or
device; and \| \|
+------+--------------------------+-----------------------------------+
\| \| \> d. Preventing reuse \| - 800-63B-4 Section 4 \| \| \| \> of
identifiers for \| \| \| \| \> \[Assignment: \| \| \| \| \>
organization-defined \| \| \| \| \> time period\]. \| \|
+------+--------------------------+-----------------------------------+
\| IA- \| Prohibit the use of \| None \| \| 4(1) \| system account \| \|
\| \| identifiers that are the \| \| \| \| same as public \| \| \| \|
identifiers for \| \| \| \| individual accounts. \| \|
+------+--------------------------+-----------------------------------+
\| IA- \| Manage individual \| No direct mapping. However, see \| \|
4(4) \| identifiers by uniquely \| 800-63A-3 Section 6.1 \| \| \|
identifying each \| \| \| \| individual as \| \| \| \| \[*Assignment: \|
\| \| \| organization-defined \| \| \| \| characteristic \| \| \| \|
identifying individual \| \| \| \| status*\]. \| \|
+------+--------------------------+-----------------------------------+
\| IA- \| Manage individual \| - 800-63C-4 Section 5.2 and \| \| 4(5) \|
identifiers dynamically \| \> subsections \| \| \| in accordance with \|
\| \| \| \[*Assignment: \| \| \| \| organization-defined \| \| \| \|
dynamic identifier \| \| \| \| policy*\]. \| \|
+------+--------------------------+-----------------------------------+
\| IA- \| Coordinate with the \| - 800-63C-4 Section 6.3.1 \| \| 4(6) \|
following external \| \| \| \| organizations for \| \| \| \|
cross-organization \| \| \| \| management of \| \| \| \| identifiers: \|
\| \| \| \[*Assignment: \| \| \| \| organization-defined \| \| \| \|
external \| \| \| \| organizations*\]. \| \|
+------+--------------------------+-----------------------------------+
\| IA- \| Generate pairwise \| - 800-63-4 Section 4.4.1 \| \| 4(8) \|
pseudonymous \| \| \| \| identifiers. \| - 800-63B-3 Section 4 \| \| \|
\| \| \| \| \| - 800-63C-4 Sections 5.2.2, \| \| \| \| \> 5.5, 6.2.5 and
subsections, \| \| \| \| \> 9.1, 9.2 \|
+------+--------------------------+-----------------------------------+
\| IA- \| Maintain the attributes \| - 800-63-4 Sections 2.3.1, \| \|
4(9) \| for each uniquely \| \> 4.3.2 \| \| \| identified individual, \|
\| \| \| device, or service in \| - 800-63A-4 Section 5.1.4 \| \| \|
\[*Assignment: \| \| \| \| organization-defined \| - 800-63C-4 Sections
5.4.2, \| \| \| protected central \| \> 6.3.1 \| \| \| storage*\]. \| \|
+------+--------------------------+-----------------------------------+
\| IA-5 \| Manage system \| - 800-63-4 Sections 2.1, 4.2, \| \| \|
authenticators by: \| \> 5.0, 5.1 and subsections, \| \| \| \| \>
5.2.2.1, 5.2.3.1, 5.3 and \| \| \| a. Verifying, as part \| \>
subsections, Figures 1 & 2 \| \| \| of the initial \| \| \| \|
authenticator \| - 800-63B-4 Sections 2 and \| \| \| distribution, the
\| \> subsections, 4 and \| \| \| identity of the \| \> subsections, 5
and \| \| \| individual, group, role, \| \> subsections. Suggest \| \|
\| service, or device \| \> reading other sections as \| \| \| receiving
the \| \> well for full \| \| \| authenticator; \| \> context/insight.
\|
+------+--------------------------+-----------------------------------+
\| \| b. Establishing initial \| None. However, see 800-63B-4 \| \| \|
authenticator content \| Section 6.1 and subsections \| \| \| for any
authenticators \| \| \| \| issued by the \| \| \| \| organization; \| \|
+------+--------------------------+-----------------------------------+
\| \| c. Ensuring that \| - 800-63-4 Sections 5.0, 5.1 \| \| \|
authenticators have \| \> and subsections, 5.2.2.2, \| \| \| sufficient
strength of \| \> 5.2.3.2, 5.3 and \| \| \| mechanism for their \| \>
subsections, \| \| \| intended use; \| \| \| \| \| - 800-63B-4 Section 4
and \| \| \| \| \> subsections, 5 and \| \| \| \| \> subsections.
Suggest \| \| \| \| \> reading other sections as \| \| \| \| \> well for
full \| \| \| \| \> context/insight. \|
+------+--------------------------+-----------------------------------+
\| \| d. Establishing and \| - 800-63-4 Sections 5.2.1, \| \| \|
implementing \| \> 5.2.2.2, 5.2.3.2, 5.3 and \| \| \| administrative \|
\> subsections \| \| \| procedures for initial \| \| \| \| authenticator
\| - 800-63B-4 Section 6 and \| \| \| distribution, for lost \| \>
subsections \| \| \| or compromised or \| \| \| \| damaged
authenticators, \| \| \| \| and for revoking \| \| \| \| authenticators;
\| \|
+------+--------------------------+-----------------------------------+
\| \| e. Changing default \| None \| \| \| authenticators prior to \| \|
\| \| first use; \| \|
+------+--------------------------+-----------------------------------+
\| \| f. Changing or \| - 800-63B-4 Sections 6.1.4, \| \| \| refreshing
\| \> 6.2, 6.3 \| \| \| authenticators \| \| \| \| \[*Assignment: \| \|
\| \| organization-defined \| \| \| \| time period by \| \| \| \|
authenticator type*\] or \| \| \| \| when \[*Assignment: \| \| \| \|
organization-defined \| \| \| \| events*\] occur; \| \|
+------+--------------------------+-----------------------------------+
\| \| g. Protecting \| - 800-63B-4 Sections 4.1.4, \| \| \|
authenticator content \| \> 4.2.4, 4.3.4, 5.1 and \| \| \| from
unauthorized \| \> subsections, 5.2.1, 5.2.3, \| \| \| disclosure and \|
\> 6.1, 6.1.1, 6.1.2.4 \| \| \| modification; \| \|
+------+--------------------------+-----------------------------------+
\| \| h. Requiring \| - 800-63B-3 Section 5.2.1 \| \| \| individuals to
take, and \| \| \| \| having devices \| \| \| \| implement, specific \|
\| \| \| controls to protect \| \| \| \| authenticators; and \| \|
+------+--------------------------+-----------------------------------+
\| \| i. Changing \| None \| \| \| authenticators for group \| \| \| \|
or role accounts when \| \| \| \| membership to those \| \| \| \|
accounts changes. \| \|
+------+--------------------------+-----------------------------------+
\| IA- \| For password-based \| - 800-63B-4 Sections 5.1.1 and \| \|
5(1) \| authentication: \| \> subsections, See also \| \| \| \| \>
Section 10.2.1 and Appendix \| \| \| \> (a) Maintain a list \| \> A for
general discussion \| \| \| \> of commonly-used, \| \| \| \| \>
expected, or \| \| \| \| \> compromised passwords \| \| \| \| \> and
update the list \| \| \| \| \> \[*Assignment: \| \| \| \| \>
organization-defined \| \| \| \| \> frequency*\] and when \| \| \| \| \>
organizational \| \| \| \| \> passwords are \| \| \| \| \> suspected to
have been \| \| \| \| \> compromised directly \| \| \| \| \> or
indirectly; \| \|
+------+--------------------------+-----------------------------------+
\| \| \> (b) Verify, when \| - 800-63B-4 Section 5.1.1 and \| \| \| \>
users create or update \| \> subsections \| \| \| \> passwords, that the
\| \| \| \| \> passwords are not \| \| \| \| \> found on the list of \|
\| \| \| \> commonly-used, \| \| \| \| \> expected, or \| \| \| \| \>
compromised passwords \| \| \| \| \> in IA-5(1)(a); \| \|
+------+--------------------------+-----------------------------------+
\| \| (c) Transmit passwords \| - 800-63B-4 Section 5.1.1 and \| \| \|
only over \| \> subsections \| \| \| cry \| \| \| \|
ptographically-protected \| \| \| \| channels; \| \|
+------+--------------------------+-----------------------------------+
\| \| \> (d) Store passwords \| - 800-63B-4 Section 5.1.1 and \| \| \|
\> using an approved \| \> subsections, Table 4 \| \| \| \> salted key
derivation \| \| \| \| \> function, preferably \| \| \| \| \> using a
keyed hash; \| \|
+------+--------------------------+-----------------------------------+
\| \| (e) Require immediate \| - 800-63B-4 Section 6.1.2.3, \| \| \|
selection of a new \| \> 8.3 \| \| \| password upon account \| \| \| \|
recovery; \| \|
+------+--------------------------+-----------------------------------+
\| \| \> (f) Allow user \| - 800-63B-4 Section 5.1.1 and \| \| \| \>
selection of long \| \> subsections \| \| \| \> passwords and \| \| \|
\| \> passphrases, including \| \| \| \| \> spaces and all \| \| \| \|
\> printable characters; \| \|
+------+--------------------------+-----------------------------------+
\| \| \> (g) Employ automated \| - 800-63B-4 Sections 5.1.1 and \| \| \|
\> tools to assist the \| \> subsections \| \| \| \> user in selecting
\| \| \| \| \> strong password \| \| \| \| \> authenticators; and \| \|
+------+--------------------------+-----------------------------------+
\| \| \> (h) Enforce the \| - 800-63B-4 Section 5.1.1 and \| \| \| \>
following composition \| \> subsections \| \| \| \> and complexity
rules: \| \| \| \| \> \[Assignment: \| \| \| \| \> organization-defined
\| \| \| \| \> composition and \| \| \| \| \> complexity rules\]. \| \|
+------+--------------------------+-----------------------------------+
\| IA- \| (a) For public \| - 800-63B-4 Section 5.1.6.1, \| \| 5(2) \|
key-based \| \> 5.1.7.1, 5.1.8.1 \| \| \| authentication: \| \| \| \| \|
\| \| \| \> (1) Enforce \| \| \| \| \> authorized access to \| \| \| \|
\> the corresponding \| \| \| \| \> private key; and \| \|
+------+--------------------------+-----------------------------------+
\| \| \> (2) Map the \| - 800-63A-3 Sections 2.1, 4 and \| \| \| \>
authenticated identity \| \> subsections, 6.1, Table 1 \| \| \| \> to
the account of the \| \| \| \| \> individual or group; \| \| \| \| \>
and \| \|
+------+--------------------------+-----------------------------------+
\| \| (b) When public key \| None \| \| \| infrastructure (PKI) is \| \|
\| \| used: \| \| \| \| \| \| \| \| \> (1) Validate \| \| \| \| \>
certificates by \| \| \| \| \> constructing and \| \| \| \| \> verifying
a \| \| \| \| \> certification path to \| \| \| \| \> an accepted trust
\| \| \| \| \> anchor, including \| \| \| \| \> checking certificate \|
\| \| \| \> status information; \| \| \| \| \> and \| \| \| \| \| \| \|
\| (2) Implement a local \| \| \| \| cache of revocation data \| \| \|
\| to support path \| \| \| \| discovery and \| \| \| \| validation. \|
\|
+------+--------------------------+-----------------------------------+
\| IA- \| Require developers and \| Not Applicable \| \| 5(5) \|
installers of system \| \| \| \| components to provide \| \| \| \|
unique authenticators or \| \| \| \| change default \| \| \| \|
authenticators prior to \| \| \| \| delivery and \| \| \| \|
installation. \| \|
+------+--------------------------+-----------------------------------+
\| IA- \| Protect authenticators \| - 800-63-4 Section 5 and \| \| 5(6)
\| commensurate with the \| \> subsections \| \| \| security category of
the \| \| \| \| information to which use \| - 800-63B-4 Sections 4.1.4,
\| \| \| of the authenticator \| \> 4.2.4, 4.3.4, 5.2.1 \| \| \| permits
access. \| \|
+------+--------------------------+-----------------------------------+
\| IA- \| Ensure that unencrypted \| None. However, see the following \|
\| 5(7) \| static authenticators \| regarding authenticator storage: \|
\| \| are not embedded in \| 800-63B-4 Sections 5.1.1.2, \| \| \|
applications or other \| 5.1.2.2, 5.1.3.1, 5.1.3.2, \| \| \| forms of
static storage. \| 5.1.6.1, 5.1.8.1, 5.2.7, 5.2.11 \|
+------+--------------------------+-----------------------------------+
\| IA- \| Implement \[*Assignment: \| - 800-63-4 Section 4.4 \| \| 5(8)
\| organization-defined \| \| \| \| security controls*\] to \| -
800-63C-4 for overall \| \| \| manage the risk of \| \> guidance on
Federation / \| \| \| compromise due to \| \> SSO \| \| \| individuals
having \| \| \| \| accounts on multiple \| \| \| \| systems. \| \|
+------+--------------------------+-----------------------------------+
\| IA- \| Use the following \| None. This is a case-by-case \| \| 5(9)
\| external organizations \| decision; see 800-63C-4 for \| \| \| to
federate credentials: \| overall guidance on Federation \| \| \|
\[*Assignment: \| and collaborating and \| \| \| organization-defined \|
coordinating with external \| \| \| external \| entities. \| \| \|
organizations*\]. \| \|
+------+--------------------------+-----------------------------------+
\| IA-5 \| Bind identities and \| - 800-63B-4 Sections 6.1.2.4, \| \|
(10) \| authenticators \| \> 6.1.3 \| \| \| dynamically using the \| \|
\| \| following rules: \| \| \| \| \[*Assignment: \| \| \| \|
organization-defined \| \| \| \| binding rules*\]. \| \|
+------+--------------------------+-----------------------------------+
\| IA-5 \| For biometric-based \| - 800-63B-4 Section 5.1.8 \| \| (12)
\| authentication, employ \| \| \| \| mechanisms that satisfy \| \| \|
\| the following biometric \| \| \| \| quality requirements \| \| \| \|
\[*Assignment: \| \| \| \| organization-defined \| \| \| \| biometric
quality \| \| \| \| requirements*\]. \| \|
+------+--------------------------+-----------------------------------+
\| IA-5 \| Prohibit the use of \| None \| \| (13) \| cached
authenticators \| \| \| \| after \[*Assignment: \| \| \| \|
organization-defined \| \| \| \| time period*\]. \| \|
+------+--------------------------+-----------------------------------+
\| IA-5 \| For PKI-based \| None \| \| (14) \| authentication, employ \|
\| \| \| an organization-wide \| \| \| \| methodology for managing \| \|
\| \| the content of PKI trust \| \| \| \| stores installed across \| \|
\| \| all platforms, including \| \| \| \| networks, operating \| \| \|
\| systems, browsers, and \| \| \| \| applications. \| \|
+------+--------------------------+-----------------------------------+
\| IA-5 \| Use only General \| None \| \| (15) \| Services \| \| \| \|
Administration-approved \| \| \| \| products and services \| \| \| \|
for identity, \| \| \| \| credential, and access \| \| \| \| management.
\| \|
+------+--------------------------+-----------------------------------+
\| IA-5 \| Require that the \| - 800-63-4 Section 4.2 \| \| (16) \|
issuance of \| \| \| \| \[*Assignment: \| - 800-63A-4 Section 9.3, 9.4
\| \| \| organization-defined \| \| \| \| types of and/or specific \| -
800-63B-4 Sections 6.1 and \| \| \| authenticators*\] be \| \>
subsections \| \| \| conducted \[*Selection: \| \| \| \| in person; by a
trusted \| - 800-63C-4 Sections 6.1.2.2 \| \| \| external party*\]
before \| \| \| \| \[*Assignment: \| \| \| \| organization-defined \| \|
\| \| registration \| \| \| \| authority*\] with \| \| \| \|
authorization by \| \| \| \| *\[Assignment: \| \| \| \|
organization-defined \| \| \| \| personnel or roles*\]. \| \|
+------+--------------------------+-----------------------------------+
\| IA-5 \| Employ presentation \| - 800-63-A-4 Table 3, Sections \| \|
(17) \| attack detection \| \> 5.1.1, 5.3.4, 5.4.4, 5.5.4 \| \| \|
mechanisms for \| \| \| \| biometric-based \| - 800-63B-4 Section 5.2.3
\| \| \| authentication. \| \|
+------+--------------------------+-----------------------------------+
\| IA-5 \| (a) Employ \| - 800-63B-4 Section 5.1.1.2, \| \| (18) \|
\[*Assignment: \| \> 5.1.2.2, 5.1.1.4 \| \| \| organization-defined \|
\| \| \| password managers*\] to \| \| \| \| generate and manage \| \|
\| \| passwords; and \| \|
+------+--------------------------+-----------------------------------+
\| \| (b) Protect the \| - 800-63B-4 Section 5.1.1.2, \| \| \| passwords
using \| \> 5.1.2.2, 5.1.1.4 \| \| \| \[*Assignment: \| \| \| \|
organization-defined \| - 800-63C-4 Section 12.2 \| \| \| controls*\].
\| \|
+------+--------------------------+-----------------------------------+
\| IA-6 \| Obscure feedback of \| - 800-63B-4 Section 5.1.1.2 \| \| \|
authentication \| \| \| \| information during the \| \| \| \|
authentication process \| \| \| \| to protect the \| \| \| \|
information from \| \| \| \| possible exploitation \| \| \| \| and use
by unauthorized \| \| \| \| individuals. \| \|
+------+--------------------------+-----------------------------------+
\| IA-7 \| Implement mechanisms for \| - 800-63-4 Section 2.3.1 \| \| \|
authentication to a \| \| \| \| cryptographic module \| - 800-63B-4
Section 4, 4.3.2, \| \| \| that meet the \| \> 5.1.5, 5.1.8, 5.1.9, \|
\| \| requirements of \| \> 5.1.7.1, 5.1.9.1, Table 1 \| \| \|
applicable laws, \| \| \| \| executive orders, \| \| \| \| directives,
policies, \| \| \| \| regulations, standards, \| \| \| \| and guidelines
for such \| \| \| \| authentication. \| \|
+------+--------------------------+-----------------------------------+
\| IA-8 \| Uniquely identify and \| - 800-63-4 Section 2.1, 4 and \| \|
\| authenticate \| \> subsections, Appendix A.1 \| \| \|
non-organizational users \| \> (Federated Identifier, \| \| \| or
processes acting on \| \> Identity, Identity \| \| \| behalf of \| \>
Resolution) \| \| \| non-organizational \| \| \| \| users. \| -
800-63A-4 Section 4 and \| \| \| \| \> subsections, Section 5 and \| \|
\| \| \> subsections. However, best \| \| \| \| \> to read 800-63A-4 in
full \| \| \| \| \| \| \| \| - 800-63B-4 Sections 4 and \| \| \| \| \>
subsections and 5 and \| \| \| \| \> subsections. However, best \| \| \|
\| \> to read 800-63B-4 in full \| \| \| \| \| \| \| \| - 800-63C-4
Sections 4 and \| \| \| \| \> subsections and 5 and \| \| \| \| \>
subsections. However, best \| \| \| \| \> to read 800-63C-4 in full \|
+------+--------------------------+-----------------------------------+
\| IA- \| Accept and \| No direct mapping. However, see \| \| 8(1) \|
electronically verify \| 800-63A-4 Sections 4.4, 4.4.1, \| \| \|
Personal Identity \| and 800-63C-4 for information \| \| \|
Verification-compliant \| regarding sharing with other \| \| \|
credentials from other \| federal agencies. See also OMB \| \| \|
federal agencies. \| Memo dated 10/6/2011, \| \| \| \| *Requirements for
Accepting \| \| \| \| Externally Issued Identity \| \| \| \|
Credentials*. \|
+------+--------------------------+-----------------------------------+
\| IA- \| (a) Accept only \| - 800-63-4 Section 2.3.1 \| \| 8(2) \|
external authenticators \| \| \| \| that are NIST-compliant; \| -
800-63A-4 Sections 4.3.2 (6), \| \| \| and \| \> 5.3.4, 5.5.4 \| \| \|
\| \| \| \| \| - 800-63B-4 Section 4 and \| \| \| \| \> subsections, 5
and \| \| \| \| \> subsections, 6.1.2.4 \|
+------+--------------------------+-----------------------------------+
\| \| (b) Document and \| - 800-63A-4 Sections 2, 5, \| \| \| maintain a
list of \| \> 5.1.5, 6.1, 6.3.1, 7.2 \| \| \| accepted external \| \| \|
\| authenticators. \| \|
+------+--------------------------+-----------------------------------+
\| IA- \| Conform to the following \| - 800-63-4 Sections 4.4, 4.4.2, \|
\| 8(4) \| profiles for identity \| \> References section \| \| \|
management \| \| \| \| \[*Assignment: \| - 800-63A-4 References section
\| \| \| organization-defined \| \| \| \| identity management \| -
800-63B-4 References section \| \| \| profiles*\]. \| \| \| \| \| -
800-63C-4 Sections 4, 4.1, \| \| \| \| \> 4.2, 4.3, 5.1.2, 6.2.3, \| \|
\| \| \> 6.3, 10.2, 10.2.2, 12 and \| \| \| \| \> subsections,
References \| \| \| \| \> section \|
+------+--------------------------+-----------------------------------+
\| IA- \| Accept and verify \| None. However, see 800-63A-4 \| \| 8(5)
\| federated or PKI \| Sections 4.4, 4.4.1, and \| \| \| credentials
that meet \| 800-63C-4 for information \| \| \| \[*Assignment: \|
regarding accepting external \| \| \| organization-defined \|
credentials. \| \| \| policy*\]. \| \|
+------+--------------------------+-----------------------------------+
\| IA- \| Implement the following \| - 800-63-4 Sections 2.3.2, 5.5 \|
\| 8(6) \| measures to disassociate \| \| \| \| user attributes or \| -
800-63A-4 Section 5.1.2.1 \| \| \| identifier assertion \| \| \| \|
relationships among \| - 800-63B-4 Sections 4.9.2, \| \| \| individuals,
credential \| \> 4.9.3, 4.9.4 \| \| \| service providers, and \| \| \|
\| relying parties: \| - 800-63C-4 Sections 5.5, \| \| \| \[*Assignment:
\| \> 6.2.4, 6.2.5 and \| \| \| organization-defined \| \> subsections,
6.3, 9.1 \| \| \| measures*\]. \| \|
+------+--------------------------+-----------------------------------+
\| IA-9 \| Uniquely identify and \| - 800-63B-4 Sections 4.1.2, \| \| \|
authenticate \| \> 4.2.2, 4.3.2, Table 1, \| \| \| \[*Assignment: \| \>
5.1.2.2, 5.1.4.2, 5.1.5.2, \| \| \| organization-defined \| \> 5.2.5,
5.2.5.1, 5.2.5.2, \| \| \| system services and \| \> 7.1.3 (Devices),
Table 4 \| \| \| applications*\] before \| \| \| \| establishing \| \|
\| \| communications with \| \| \| \| devices, users, or other \| \| \|
\| services or \| \| \| \| applications. \| \|
+------+--------------------------+-----------------------------------+
\| I \| Require individuals \| - 800-63B-4 Section 5.2.2 \| \| A-10 \|
accessing the system to \| \| \| \| employ \[Assignment: \| \| \| \|
organization-defined \| \| \| \| supplemental \| \| \| \| authentication
\| \| \| \| techniques or \| \| \| \| mechanisms\] under \| \| \| \|
specific \[Assignment: \| \| \| \| organization-defined \| \| \| \|
circumstances or \| \| \| \| situations\]. \| \|
+------+--------------------------+-----------------------------------+
\| I \| Require users to \| - 800-63B-4 Sections 4.1.3, 4 \| \| A-11 \|
re-authenticate when \| \> 4.2.3, 4.3.3, 4 7.2 \| \| \| \[Assignment: \|
\| \| \| organization-defined \| \| \| \| circumstances or \| \| \| \|
situations requiring \| \| \| \| re-authentication\]. \| \|
+------+--------------------------+-----------------------------------+
\| I \| a. Identity proof users \| - 800-63-4 Sections 4.2, 4.3.2, \| \|
A-12 \| that require accounts \| \> 5 and subsections \| \| \| for
logical access to \| \| \| \| systems based on \| - 800-63A-4 Section 4
and \| \| \| appropriate identity \| \> subsections, 5 and \| \| \|
assurance level \| \> subsections \| \| \| requirements as \| \| \| \|
specified in applicable \| \| \| \| standards and \| \| \| \|
guidelines; \| \|
+------+--------------------------+-----------------------------------+
\| \| b. Resolve user \| - 800-63A-4 Sections 2, 2.1, \| \| \|
identities to a unique \| \> 4.1 and subsections, 4.2, \| \| \|
individual; and \| \> 4.3.3.1, 4.3.3.2, 4.3.3.3, \| \| \| \| \> 5.1.8,
6.1, 6.3.1 \| \| \| \| \| \| \| \| - 800-63C-4 Sections 2, 6 \|
+------+--------------------------+-----------------------------------+
\| \| c. Collect, validate, \| - 800-63A-4 Section 4 and \| \| \| and
verify identity \| \> subsections, 5.1.8, 5.1.9 \| \| \| evidence. \| \>
and subsections, 5.1.10, \| \| \| \| \> 5.2, 5.3 and subsections, \| \|
\| \| \> 5.4 and subsections, 5.5 \| \| \| \| \> and subsections, Table
1, 7 \| \| \| \| \> and subsections \|
+------+--------------------------+-----------------------------------+
\| IA-1 \| Require that the \| No direct mapping. However, see \| \|
2(1) \| registration process to \| 800-63A-4 Section 5.2.2.1 for \| \|
\| receive an account for \| authorization around identity \| \| \|
logical access includes \| attributes. \| \| \| supervisor or sponsor \|
\| \| \| authorization. \| \|
+------+--------------------------+-----------------------------------+
\| IA-1 \| Require evidence of \| - 800-63-4 Sections 5.2.2.1, \| \|
2(2) \| individual \| \> 5.3.2, 5.3.3 \| \| \| identification be \| \|
\| \| presented to the \| \| \| \| registration authority. \| \|
+------+--------------------------+-----------------------------------+
\| IA-1 \| Require that the \| - 800-63A-4 Sections 4.3, 4.4 \| \| 2(3)
\| presented identity \| \| \| \| evidence be validated \| \| \| \| and
verified through \| \| \| \| \[Assignment: \| \| \| \| organizational
defined \| \| \| \| methods of validation \| \| \| \| and
verification\]. \| \|
+------+--------------------------+-----------------------------------+
\| IA-1 \| Require that the \| - 800-63A-4 Sections 4.3.4.3, \| \| 2(4)
\| validation and \| \> 4.4.1, 5.3.2, 5.5.7 \| \| \| verification of
identity \| \| \| \| evidence be conducted in \| \| \| \| person before
a \| \| \| \| designated registration \| \| \| \| authority. \| \|
+------+--------------------------+-----------------------------------+
\| IA-1 \| Require that a \| - 800-63A-4 Sections 5.1.6, \| \| 2(5) \|
\[Selection: \| \> 5.1.7 \| \| \| registration code; \| \| \| \| notice
of proofing\] be \| \| \| \| delivered through an \| \| \| \|
out-of-band channel to \| \| \| \| verify the users address \| \| \| \|
(physical or digital) of \| \| \| \| record. \| \|
+------+--------------------------+-----------------------------------+
\| IA-1 \| Accept \| - 800-63C-4 Section 4 \| \| 2(6) \|
externally-proofed \| \| \| \| identities at \| \| \| \| \[Assignment:
\| \| \| \| organization-defined \| \| \| \| identity assurance \| \| \|
\| level\]. \| \|
+------+--------------------------+-----------------------------------+

# Policy Crosswalk

## Policy crosswalk overview Table

This table presents a high-level summary of the relationship of controls
in 800-53 to sections in the 800-63 set of documents. Because we are
mapping between requirements in each document, only the *normative*
sections of 800-63 are included in the mapping. Informative sections are
excluded.

Empty, light-gray cells identify controls for which none of the sections
can be directly mapped.

When a section appears with an asterisk (\*), this indicates that the
reference includes the subsections as well as the section itself.

+-------------+-------------+-------------+-------------+-------------+
\| 800-53 \| 800-63 \| 800-63A \| 800-63B \| 800-63c \| \| Control \|
Section \| Section \| Section \| Section \|
+=============+=============+=============+=============+=============+
\| IA-1 a.1 \| \[\[5.1 \| \[\[ \| \| \[\[5.1\] \| \| (a) \| .2\]{.underl
\| 5.1.5\]{.und \| \| {.underline \| \| \| ine}\](#iden \| erline}\](#a
\| \| }\](#trust-a \| \| \| tify-impact \| dditional-r \| \| greements),
\| \| \| -categories \| equirements \| \| \[\[5.1.1 \| \| \| -and-potent
\| -for-federa \| \| \]{.underlin \| \| \| ial-harms), \| l-agencies) \|
\| e}\](#bilate \| \| \| \[\[5.3.2\]{.u \| \| \| ral-trust-a \| \| \|
nderline}\]( \| \| \| greements), \| \| \| #identify-c \| \| \|
\[\[5.1.2\]{ \| \| \| ompensating \| \| \| .underline} \| \| \|
-controls), \| \| \| \](#multilat \| \| \| \[\[5.3.3\]{.u \| \| \|
eral-trust- \| \| \| nderline}\]( \| \| \| agreements) \| \| \|
#identify-s \| \| \| \| \| \| upplemental \| \| \| \| \| \| -controls),
\| \| \| \| \| \| \[\[5.5\]{.und \| \| \| \| \| \| erline}\](#p \| \| \|
\| \| \| rivacy-requ \| \| \| \| \| \| irements-1) \| \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-1 a.1 \| \[\[5\]{.un \| \[\[ \| \[\[4.\]{.un \| \[\[4\]{.u \| \|
(b) \| derline}\](# \| 4.3.3.3\]{.u \| derline}\](# \| nderline}\]( \|
\| \| digital-ide \| nderline}\]( \| authenticat \| #federation \| \| \|
ntity-risk- \| #superior-e \| ion-assuran \| -assurance- \| \| \|
management) \| vidence-req \| ce-levels), \| level-fal), \| \| \| \|
uirements), \| \[\[4.1.2\]{ \| \[ \| \| \| \| \[\[5.1. \| .underline} \|
\[4.2,\]{.und \| \| \| \| 2.1\]{.under \| \](#authenti \| erline}\](#f
\| \| \| \| line}\](#pri \| cator-and-v \| ederation-a \| \| \| \|
vacy-risk-a \| erifier-req \| ssurance-le \| \| \| \| ssessment), \|
uirements), \| vel-2-fal2) \| \| \| \| \[\[5.1.4\]{. \| \[\[4.1.4\]{ \|
\[ \| \| \| \| underline}\] \| .underline} \| \[4.3\]{.unde \| \| \| \|
(#general-s \| \](#security \| rline}\](#fe \| \| \| \| ecurity-req \|
-controls), \| deration-as \| \| \| \| uirements), \| \[\[4.1 \|
surance-lev \| \| \| \| \[\[5 \| .5\]{.underl \| el-3-fal3), \| \| \| \|
.1.5\]{.unde \| ine}\](#reco \| \| \| \| \| rline}\](#ad \| rds-retenti
\| \| \| \| \| ditional-re \| on-policy), \| \| \| \| \| quirements- \|
\[\[4.2.2\]{.u \| \| \| \| \| for-federal \| nderline}\]( \| \| \| \| \|
-agencies), \| #authentica \| \| \| \| \| \[\[5. \| tor-and-ver \| \| \|
\| \| 1.8\]{.under \| ifier-requi \| \| \| \| \| line}\](#req \|
rements-1), \| \| \| \| \| uirements-f \| \[\[4.2.4\]{.u \| \| \| \| \|
or-use-of-b \| nderline}\]( \| \| \| \| \| iometrics), \| #security-c \|
\| \| \| \| \[\[5.1.10\]{ \| ontrols-1), \| \| \| \| \| .underline} \|
\[\[4.2.5 \| \| \| \| \| \](#requirem \| \]{.underlin \| \| \| \| \|
ents-for-in \| e}\](#record \| \| \| \| \| teracting-w \| s-retention \|
\| \| \| \| ith-minors) \| -policy-1), \| \| \| \| \| \| \[\[4.3.2\]{.u
\| \| \| \| \| \| nderline}\]( \| \| \| \| \| \| #authentica \| \| \| \|
\| \| tor-and-ver \| \| \| \| \| \| ifier-requi \| \| \| \| \| \|
rements-2), \| \| \| \| \| \| \[\[4.3.4\]{.u \| \| \| \| \| \|
nderline}\]( \| \| \| \| \| \| #security-c \| \| \| \| \| \| ontrols-2),
\| \| \| \| \| \| \[\[4.3.5 \| \| \| \| \| \| \]{.underlin \| \| \| \|
\| \| e}\](#record \| \| \| \| \| \| s-retention \| \| \| \| \| \|
-policy-2), \| \| \| \| \| \| \[\[4.4\]{.un \| \| \| \| \| \|
derline}\](# \| \| \| \| \| \| privacy-req \| \| \| \| \| \| uirements),
\| \| \| \| \| \| \[\[5.1.1.2 \| \| \| \| \| \| \]{.underlin \| \| \| \|
\| \| e}\](#memori \| \| \| \| \| \| zed-secret- \| \| \| \| \| \|
verifiers), \| \| \| \| \| \| \[ \| \| \| \| \| \| \[5.1.2.1\]{. \| \|
\| \| \| \| underline}\] \| \| \| \| \| \| (#look-up-s \| \| \| \| \| \|
ecret-authe \| \| \| \| \| \| nticators), \| \| \| \| \| \| \[\[5. \| \|
\| \| \| \| 1.3.2\]{.und \| \| \| \| \| \| erline}\](#o \| \| \| \| \|
\| ut-of-band- \| \| \| \| \| \| verifiers), \| \| \| \| \| \| \[\[5. \|
\| \| \| \| \| 1.4.1\]{.und \| \| \| \| \| \| erline}\](#s \| \| \| \|
\| \| ingle-facto \| \| \| \| \| \| r-otp-authe \| \| \| \| \| \|
nticators), \| \| \| \| \| \| \[\[5 \| \| \| \| \| \| .1.5.1\]{.un \| \|
\| \| \| \| derline}\](# \| \| \| \| \| \| multi-facto \| \| \| \| \| \|
r-otp-authe \| \| \| \| \| \| nticators), \| \| \| \| \| \|
\[\[5.1.7.1\] \| \| \| \| \| \| {.underline \| \| \| \| \| \|
}\](#single- \| \| \| \| \| \| factor-cryp \| \| \| \| \| \| tographic-d
\| \| \| \| \| \| evice-authe \| \| \| \| \| \| nticators), \| \| \| \|
\| \| \[\[5.1.9.1 \| \| \| \| \| \| \]{.underlin \| \| \| \| \| \|
e}\](#multi- \| \| \| \| \| \| factor-cryp \| \| \| \| \| \| tographic-d
\| \| \| \| \| \| evice-authe \| \| \| \| \| \| nticators), \| \| \| \|
\| \| \[\[5.2.3\]{ \| \| \| \| \| \| .underline} \| \| \| \| \| \|
\](#use-of-b \| \| \| \| \| \| iometrics), \| \| \| \| \| \| \[\[5 \| \|
\| \| \| \| .2.4\]{.unde \| \| \| \| \| \| rline}\](#at \| \| \| \| \|
\| testation), \| \| \| \| \| \| \[ \| \| \| \| \| \| \[5.2.5\]{.un \|
\| \| \| \| \| derline}\](# \| \| \| \| \| \| phishing-ve \| \| \| \| \|
\| rifier-impe \| \| \| \| \| \| rsonation-r \| \| \| \| \| \|
esistance), \| \| \| \| \| \| \[\[5.2. \| \| \| \| \| \| 12\]{.underl \|
\| \| \| \| \| ine}\](#conn \| \| \| \| \| \| ected-authe \| \| \| \| \|
\| nticators), \| \| \| \| \| \| \[\[6.1.2.3\] \| \| \| \| \| \|
{.underline \| \| \| \| \| \| }\](#account \| \| \| \| \| \| -recovery),
\| \| \| \| \| \| \[\[7.1 \| \| \| \| \| \| \]{.underlin \| \| \| \| \|
\| e}\](#sessio \| \| \| \| \| \| n-bindings) \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-1 a. 2 \| \[\[5 \| \[\[5.1.1 \| \| \| \| \| .2.3\]{.unde \|
\]{.underlin \| \| \| \| \| rline}\](#in \| e}\](#identi \| \| \| \| \|
itial-assur \| fy-impacted \| \| \| \| \| ance-level- \| -entities), \|
\| \| \| \| selection), \| \[\[5.1.10\]{ \| \| \| \| \| \[\[5 \|
.underline} \| \| \| \| \| .3\]{.underl \| \](#requirem \| \| \| \| \|
ine}\](#tail \| ents-for-in \| \| \| \| \| or-and-docu \| teracting-w \|
\| \| \| \| ment-assura \| ith-minors) \| \| \| \| \| nce-levels) \| \|
\| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-1 b \| \| \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-1 c.1 \| \| \| \| \| \| \| \| \| \| \| \| IA-1 c.2 \| \| \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-2 \| \| \[\[6.1\]{.un \| Internal \| \| \| \| \| derline}\](# \|
Users: \| \| \| \| \| subscriber- \| \| \| \| \| \| accounts-1) \|
\[\[4\]{.under \| \| \| \| \| \| line}\](http \| \| \| \| \| \|
s://docs.go \| \| \| \| \| \| ogle.com/do \| \| \| \| \| \| cument/d/1C
\| \| \| \| \| \| O10AnG9grI7 \| \| \| \| \| \| RKJ8-o2Nthx \| \| \| \|
\| \| vEqMGihUpC1 \| \| \| \| \| \| iuD7TYlyA/e \| \| \| \| \| \|
dit?pli=1#h \| \| \| \| \| \| eading=h.tp \| \| \| \| \| \| egfw5de1xi)
\| \| \| \| \| \| \| \| \| \| \| \| CSPs: \| \| \| \| \| \| \| \| \| \|
\| \| \[\[6.1\]{.un \| \| \| \| \| \| derline}\](# \| \| \| \| \| \|
authenticat \| \| \| \| \| \| or-binding) \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-2(1) \| \| \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-2(2) \| \| \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-2(5) \| \| \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-2(6) \| \| \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-2(6)(a) \| \| \| \[ \| \| \| \| \| \| \[4.2.1\]{.un \| \| \| \| \|
\| derline}\](# \| \| \| \| \| \| permitted-a \| \| \| \| \| \|
uthenticato \| \| \| \| \| \| r-types-1), \| \| \| \| \| \| \[ \| \| \|
\| \| \| \[4.3.1\]{.un \| \| \| \| \| \| derline}\](# \| \| \| \| \| \|
permitted-a \| \| \| \| \| \| uthenticato \| \| \| \| \| \| r-types-2),
\| \| \| \| \| \| \[\[5.1.9. \| \| \| \| \| \| 1\]{.underli \| \| \| \|
\| \| ne}\](#multi \| \| \| \| \| \| -factor-cry \| \| \| \| \| \|
ptographic- \| \| \| \| \| \| device-auth \| \| \| \| \| \| enticators)
\| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-2(6)(b) \| \| \| \[ \| \| \| \| \| \| \[4.2.2\]{.un \| \| \| \| \|
\| derline}\](# \| \| \| \| \| \| authenticat \| \| \| \| \| \|
or-and-veri \| \| \| \| \| \| fier-requir \| \| \| \| \| \| ements-1),,
\| \| \| \| \| \| \[\[4.3.2\]{. \| \| \| \| \| \| underline}\] \| \| \|
\| \| \| (#authentic \| \| \| \| \| \| ator-and-ve \| \| \| \| \| \|
rifier-requ \| \| \| \| \| \| irements-2) \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA2(8) \| \| \| \[\[4.2.2\]{.u \| \| \| \| \| \| nderline}\]( \| \|
\| \| \| \| #authentica \| \| \| \| \| \| tor-and-ver \| \| \| \| \| \|
ifier-requi \| \| \| \| \| \| rements-1), \| \| \| \| \| \|
\[\[4.3.2\]{.u \| \| \| \| \| \| nderline}\]( \| \| \| \| \| \|
#authentica \| \| \| \| \| \| tor-and-ver \| \| \| \| \| \| ifier-requi
\| \| \| \| \| \| rements-2), \| \| \| \| \| \| \[\[5. \| \| \| \| \| \|
1.3.2\]{.und \| \| \| \| \| \| erline}\](#o \| \| \| \| \| \|
ut-of-band- \| \| \| \| \| \| verifiers), \| \| \| \| \| \|
\[\[5.1.4.2\] \| \| \| \| \| \| {.underline \| \| \| \| \| \|
}\](#single- \| \| \| \| \| \| factor-otp- \| \| \| \| \| \| verifiers),
\| \| \| \| \| \| \[\[5.1.5. \| \| \| \| \| \| 2\]{.underli \| \| \| \|
\| \| ne}\](#multi \| \| \| \| \| \| -factor-otp \| \| \| \| \| \|
-verifiers) \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-2(10) \| \| \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-2(12) \| \| \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-2(13) \| \| \| \[\[ \| \| \| \| \| \| 5.1.3\*\]{.u \| \| \| \| \|
\| nderline}\]( \| \| \| \| \| \| #out-of-ban \| \| \| \| \| \|
d-devices), \| \| \| \| \| \| \[\[5.2.5\]{.u \| \| \| \| \| \|
nderline}\]( \| \| \| \| \| \| #phishing-v \| \| \| \| \| \| erifier-imp
\| \| \| \| \| \| ersonation- \| \| \| \| \| \| resistance) \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-3 \| \| \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-4 a. \| \| \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-4 b. \| \| \[\[6.1\]{.un \| \| \[ \| \| \| \| derline}\](# \| \|
\[5.4\]{.unde \| \| \| \| subscriber- \| \| rline}\](#rp \| \| \| \|
accounts-1) \| \| -subscriber \| \| \| \| \| \| -accounts), \| \| \| \|
\| \| \[\[5.4.1\]{. \| \| \| \| \| \| underline}\] \| \| \| \| \| \|
(#provision \| \| \| \| \| \| ing-models) \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-4 c. \| \| \[\[6.1\]{.un \| \| \[ \| \| \| \| derline}\](# \| \|
\[5.4\]{.unde \| \| \| \| subscriber- \| \| rline}\](#rp \| \| \| \|
accounts-1) \| \| -subscriber \| \| \| \| \| \| -accounts), \| \| \| \|
\| \| \[\[5.4.1\]{. \| \| \| \| \| \| underline}\] \| \| \| \| \| \|
(#provision \| \| \| \| \| \| ing-models) \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-4 d. \| \| \| \[\[4.\]{.u \| \| \| \| \| \| nderline}\]( \| \| \|
\| \| \| #authentica \| \| \| \| \| \| tion-assura \| \| \| \| \| \|
nce-levels) \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-4(1) \| \| \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-4(4) \| \| \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-4(5) \| \| \| \| \[\[5.4.1\]{. \| \| \| \| \| \| underline}\] \|
\| \| \| \| \| (#provision \| \| \| \| \| \| ing-models) \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-4(6) \| \| \| \| \[\[5.1\] \| \| \| \| \| \| {.underline \| \| \|
\| \| \| }\](#trust-a \| \| \| \| \| \| greements), \| \| \| \| \| \|
\[\[5.1.2\]{ \| \| \| \| \| \| .underline} \| \| \| \| \| \|
\](#multilat \| \| \| \| \| \| eral-trust- \| \| \| \| \| \| agreements)
\|
+-------------+-------------+-------------+-------------+-------------+
\| IA-4(8) \| \| \| \| \[ \| \| \| \| \| \| \[5.5\]{.unde \| \| \| \| \|
\| rline}\](#pr \| \| \| \| \| \| ivacy-requi \| \| \| \| \| \|
rements-1), \| \| \| \| \| \| \[\[6. \| \| \| \| \| \| 2.5\]{.under \|
\| \| \| \| \| line}\](#pai \| \| \| \| \| \| rwise-pseud \| \| \| \| \|
\| onymous-ide \| \| \| \| \| \| ntifiers)\* \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-4(9) \| \| \[\[6.1\]{.un \| \| \[\[5.4. \| \| \| \| derline}\](#
\| \| 2\]{.underli \| \| \| \| subscriber- \| \| ne}\](#attri \| \| \|
\| accounts-1) \| \| bute-synchr \| \| \| \| \| \| onization), \| \| \|
\| \| \| \[\[6.3.1\]{. \| \| \| \| \| \| underline}\] \| \| \| \| \| \|
(#attribute \| \| \| \| \| \| -providers) \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 a. \| \[\[5.2.1 \| \[\[4.4.1\]{. \| \| \| \| \| \]{.underlin \|
underline}\] \| \| \| \| \| e}\](#assura \| (#identity- \| \| \| \| \|
nce-levels) \| verificatio \| \| \| \| \| \| n-methods), \| \| \| \| \|
\| \[\[5. \| \| \| \| \| \| 3.4\]{.under \| \| \| \| \| \| line}\](#ide
\| \| \| \| \| \| ntity-verif \| \| \| \| \| \| ication-req \| \| \| \|
\| \| uirements), \| \| \| \| \| \| \[\[5.4.4\] \| \| \| \| \| \|
{.underline \| \| \| \| \| \| }\](#identit \| \| \| \| \| \| y-verificat
\| \| \| \| \| \| ion-require \| \| \| \| \| \| ments-1)\*, \| \| \| \|
\| \| \[\[5.5. \| \| \| \| \| \| 4\]{.underli \| \| \| \| \| \|
ne}\](#ident \| \| \| \| \| \| ity-verific \| \| \| \| \| \| ation-requi
\| \| \| \| \| \| rements-2), \| \| \| \| \| \| \[\[5.5.7\]{.u \| \| \|
\| \| \| nderline}\]( \| \| \| \| \| \| #in-person- \| \| \| \| \| \|
proofing-re \| \| \| \| \| \| quirements) \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 b. \| \| \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 c. \| \[\[5.2.1 \| \| This is a \| \| \| \| \]{.underlin \| \|
generic \| \| \| \| e}\](#assura \| \| r \| \| \| \| nce-levels) \| \|
equirement, \| \| \| \| \| \| which is \| \| \| \| \| \| addressed \| \|
\| \| \| \| by most of \| \| \| \| \| \| sections \| \| \| \| \| \| 4\*,
5\* \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 d. \| \| \| Details of \| \| \| \| \| \| potential \| \| \| \|
\| \| procedures \| \| \| \| \| \| to satisfy \| \| \| \| \| \| this \|
\| \| \| \| \| requirement \| \| \| \| \| \| are \| \| \| \| \| \|
contained \| \| \| \| \| \| in 6\* \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 e. \| \| \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 f. \| \| \| [\[6.1.4\]{ \| \| \| \| \| \| .underline} \| \| \|
\| \| \| ](#renewal) \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 g. \| \| \| \[\[4.1.2\]{ \| \| \| \| \| \| .underline} \| \| \|
\| \| \| \](#authenti \| \| \| \| \| \| cator-and-v \| \| \| \| \| \|
erifier-req \| \| \| \| \| \| uirements), \| \| \| \| \| \| \[\[4.1.4\]{
\| \| \| \| \| \| .underline} \| \| \| \| \| \| \](#security \| \| \| \|
\| \| -controls), \| \| \| \| \| \| \[\[4.2.2\]{.u \| \| \| \| \| \|
nderline}\]( \| \| \| \| \| \| #authentica \| \| \| \| \| \| tor-and-ver
\| \| \| \| \| \| ifier-requi \| \| \| \| \| \| rements-1), \| \| \| \|
\| \| \[\[4.2.4\]{.u \| \| \| \| \| \| nderline}\]( \| \| \| \| \| \|
#security-c \| \| \| \| \| \| ontrols-1), \| \| \| \| \| \|
\[\[4.3.2\]{.u \| \| \| \| \| \| nderline}\]( \| \| \| \| \| \|
#authentica \| \| \| \| \| \| tor-and-ver \| \| \| \| \| \| ifier-requi
\| \| \| \| \| \| rements-2), \| \| \| \| \| \| \[\[4.3.4\]{.u \| \| \|
\| \| \| nderline}\]( \| \| \| \| \| \| #security-c \| \| \| \| \| \|
ontrols-2), \| \| \| \| \| \| \[\[5.1.1.2 \| \| \| \| \| \| \]{.underlin
\| \| \| \| \| \| e}\](#memori \| \| \| \| \| \| zed-secret- \| \| \| \|
\| \| verifiers), \| \| \| \| \| \| \[ \| \| \| \| \| \| \[5.1.2.1\]{.
\| \| \| \| \| \| underline}\] \| \| \| \| \| \| (#look-up-s \| \| \| \|
\| \| ecret-authe \| \| \| \| \| \| nticators), \| \| \| \| \| \|
\[\[5.1.2 \| \| \| \| \| \| .2\]{.underl \| \| \| \| \| \| ine}\](#look
\| \| \| \| \| \| -up-secret- \| \| \| \| \| \| verifiers), \| \| \| \|
\| \| \[\[5.1.3.1 \| \| \| \| \| \| \]{.underlin \| \| \| \| \| \|
e}\](#out-of \| \| \| \| \| \| -band-authe \| \| \| \| \| \| nticators),
\| \| \| \| \| \| \[\[5.1.3. \| \| \| \| \| \| 3\]{.underli \| \| \| \|
\| \| ne}\](#authe \| \| \| \| \| \| ntication-u \| \| \| \| \| \|
sing-the-pu \| \| \| \| \| \| blic-switch \| \| \| \| \| \| ed-telephon
\| \| \| \| \| \| e-network), \| \| \| \| \| \| \[\[5.1.3.4\]{ \| \| \|
\| \| \| .underline} \| \| \| \| \| \| \](#multi-fa \| \| \| \| \| \|
ctor-out-of \| \| \| \| \| \| -band-authe \| \| \| \| \| \| nticators),
\| \| \| \| \| \| \[\[5.1.4.2\] \| \| \| \| \| \| {.underline \| \| \|
\| \| \| }\](#single- \| \| \| \| \| \| factor-otp- \| \| \| \| \| \|
verifiers), \| \| \| \| \| \| \[\[5 \| \| \| \| \| \| .1.5.1\]{.un \| \|
\| \| \| \| derline}\](# \| \| \| \| \| \| multi-facto \| \| \| \| \| \|
r-otp-authe \| \| \| \| \| \| nticators), \| \| \| \| \| \| \[\[5.1.5.2
\| \| \| \| \| \| \]{.underlin \| \| \| \| \| \| e}\](#multi- \| \| \|
\| \| \| factor-otp- \| \| \| \| \| \| verifiers), \| \| \| \| \| \| \[
\| \| \| \| \| \| \[5.1.6.1\]{. \| \| \| \| \| \| underline}\] \| \| \|
\| \| \| (#single-fa \| \| \| \| \| \| ctor-crypto \| \| \| \| \| \|
graphic-sof \| \| \| \| \| \| tware-authe \| \| \| \| \| \| nticators),
\| \| \| \| \| \| \[\[5.1.7.1\] \| \| \| \| \| \| {.underline \| \| \|
\| \| \| }\](#single- \| \| \| \| \| \| factor-cryp \| \| \| \| \| \|
tographic-d \| \| \| \| \| \| evice-authe \| \| \| \| \| \| nticators),
\| \| \| \| \| \| \[\[5.1 \| \| \| \| \| \| .7.2\]{.unde \| \| \| \| \|
\| rline}\](#si \| \| \| \| \| \| ngle-factor \| \| \| \| \| \|
-cryptograp \| \| \| \| \| \| hic-device- \| \| \| \| \| \| verifiers),
\| \| \| \| \| \| \[\[5.1.8.1\]{ \| \| \| \| \| \| .underline} \| \| \|
\| \| \| \](#multi-fa \| \| \| \| \| \| ctor-crypto \| \| \| \| \| \|
graphic-sof \| \| \| \| \| \| tware-authe \| \| \| \| \| \| nticators),
\| \| \| \| \| \| \[\[5.1.9.1 \| \| \| \| \| \| \]{.underlin \| \| \| \|
\| \| e}\](#multi- \| \| \| \| \| \| factor-cryp \| \| \| \| \| \|
tographic-d \| \| \| \| \| \| evice-authe \| \| \| \| \| \| nticators),
\| \| \| \| \| \| \[\[5. \| \| \| \| \| \| 2.1\]{.under \| \| \| \| \|
\| line}\](#phy \| \| \| \| \| \| sical-authe \| \| \| \| \| \|
nticators), \| \| \| \| \| \| \[\[5.2.3\]{ \| \| \| \| \| \| .underline}
\| \| \| \| \| \| \](#use-of-b \| \| \| \| \| \| iometrics), \| \| \| \|
\| \| \[\[5.2.11\]{. \| \| \| \| \| \| underline}\] \| \| \| \| \| \|
(#activatio \| \| \| \| \| \| n-secrets), \| \| \| \| \| \| \[\[5.2. \|
\| \| \| \| \| 12\]{.underl \| \| \| \| \| \| ine}\](#conn \| \| \| \|
\| \| ected-authe \| \| \| \| \| \| nticators), \| \| \| \| \| \|
\[\[6.1\]{.und \| \| \| \| \| \| erline}\](#a \| \| \| \| \| \|
uthenticato \| \| \| \| \| \| r-binding), \| \| \| \| \| \| \[ \| \| \|
\| \| \| \[6.1.1\]{.un \| \| \| \| \| \| derline}\](# \| \| \| \| \| \|
binding-at- \| \| \| \| \| \| enrollment) \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 h. \| \| \| \[\[4.1.2\]{ \| \| \| \| \| \| .underline} \| \| \|
\| \| \| \](#authenti \| \| \| \| \| \| cator-and-v \| \| \| \| \| \|
erifier-req \| \| \| \| \| \| uirements), \| \| \| \| \| \|
\[\[4.2.2\]{.u \| \| \| \| \| \| nderline}\]( \| \| \| \| \| \|
#authentica \| \| \| \| \| \| tor-and-ver \| \| \| \| \| \| ifier-requi
\| \| \| \| \| \| rements-1), \| \| \| \| \| \| \[\[5.1.3.1 \| \| \| \|
\| \| \]{.underlin \| \| \| \| \| \| e}\](#out-of \| \| \| \| \| \|
-band-authe \| \| \| \| \| \| nticators), \| \| \| \| \| \|
\[\[5.1.3.4\]{ \| \| \| \| \| \| .underline} \| \| \| \| \| \|
\](#multi-fa \| \| \| \| \| \| ctor-out-of \| \| \| \| \| \| -band-authe
\| \| \| \| \| \| nticators), \| \| \| \| \| \| \[\[5 \| \| \| \| \| \|
.1.5.1\]{.un \| \| \| \| \| \| derline}\](# \| \| \| \| \| \|
multi-facto \| \| \| \| \| \| r-otp-authe \| \| \| \| \| \| nticators),
\| \| \| \| \| \| \[ \| \| \| \| \| \| \[5.1.6.1\]{. \| \| \| \| \| \|
underline}\] \| \| \| \| \| \| (#single-fa \| \| \| \| \| \| ctor-crypto
\| \| \| \| \| \| graphic-sof \| \| \| \| \| \| tware-authe \| \| \| \|
\| \| nticators), \| \| \| \| \| \| \[\[5.1.7.1\] \| \| \| \| \| \|
{.underline \| \| \| \| \| \| }\](#single- \| \| \| \| \| \| factor-cryp
\| \| \| \| \| \| tographic-d \| \| \| \| \| \| evice-authe \| \| \| \|
\| \| nticators), \| \| \| \| \| \| \[\[5.1.8.1\]{ \| \| \| \| \| \|
.underline} \| \| \| \| \| \| \](#multi-fa \| \| \| \| \| \| ctor-crypto
\| \| \| \| \| \| graphic-sof \| \| \| \| \| \| tware-authe \| \| \| \|
\| \| nticators), \| \| \| \| \| \| \[\[5.1.9.1 \| \| \| \| \| \|
\]{.underlin \| \| \| \| \| \| e}\](#multi- \| \| \| \| \| \|
factor-cryp \| \| \| \| \| \| tographic-d \| \| \| \| \| \| evice-authe
\| \| \| \| \| \| nticators), \| \| \| \| \| \| \[\[5. \| \| \| \| \| \|
2.1\]{.under \| \| \| \| \| \| line}\](#phy \| \| \| \| \| \|
sical-authe \| \| \| \| \| \| nticators), \| \| \| \| \| \| \[\[5.2. \|
\| \| \| \| \| 12\]{.underl \| \| \| \| \| \| ine}\](#conn \| \| \| \|
\| \| ected-authe \| \| \| \| \| \| nticators), \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 i. \| \| \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 (1) \| \| \| \[\[5.1.1\]{. \| \| \| (a) \| \| \| underline}\] \|
\| \| \| \| \| (#memorized \| \| \| \| \| \| -secrets)\* \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 (1) \| \| \| \[\[5.1.1. \| \| \| (b) \| \| \| 2\]{.underli \| \|
\| \| \| \| ne}\](#memor \| \| \| \| \| \| ized-secret \| \| \| \| \| \|
-verifiers) \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 (1) \| \| \| \[\[5.1.1. \| \| \| (c) \| \| \| 2\]{.underli \| \|
\| \| \| \| ne}\](#memor \| \| \| \| \| \| ized-secret \| \| \| \| \| \|
-verifiers) \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 (1) \| \| \| \[\[5.1.1. \| \| \| (d) \| \| \| 2\]{.underli \| \|
\| \| \| \| ne}\](#memor \| \| \| \| \| \| ized-secret \| \| \| \| \| \|
-verifiers) \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 (1) \| \| \| \[\[6.1.2.3 \| \| \| (e) \| \| \| \]{.underlin \|
\| \| \| \| \| e}\](#accoun \| \| \| \| \| \| t-recovery) \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 (1) \| \| \| \[\[5.1.1. \| \| \| (f) \| \| \| 2\]{.underli \| \|
\| \| \| \| ne}\](#memor \| \| \| \| \| \| ized-secret \| \| \| \| \| \|
-verifiers) \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 (1) \| \| \| \[\[5.1.1. \| \| \| (g) \| \| \| 2\]{.underli \| \|
\| \| \| \| ne}\](#memor \| \| \| \| \| \| ized-secret \| \| \| \| \| \|
-verifiers) \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 (1) \| \| \| \[\[5 \| \| \| (h) \| \| \| .1.1.1\]{.un \| \| \|
\| \| \| derline}\](# \| \| \| \| \| \| memorized-s \| \| \| \| \| \|
ecret-authe \| \| \| \| \| \| nticators), \| \| \| \| \| \| \[\[5.1.1.
\| \| \| \| \| \| 2\]{.underli \| \| \| \| \| \| ne}\](#memor \| \| \|
\| \| \| ized-secret \| \| \| \| \| \| -verifiers) \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 (2) \| \| \| \[ \| \| \| (a) (1) \| \| \| \[5.1.6.1\]{. \| \| \|
\| \| \| underline}\] \| \| \| \| \| \| (#single-fa \| \| \| \| \| \|
ctor-crypto \| \| \| \| \| \| graphic-sof \| \| \| \| \| \| tware-authe
\| \| \| \| \| \| nticators), \| \| \| \| \| \| \[\[5.1.7.1\] \| \| \|
\| \| \| {.underline \| \| \| \| \| \| }\](#single- \| \| \| \| \| \|
factor-cryp \| \| \| \| \| \| tographic-d \| \| \| \| \| \| evice-authe
\| \| \| \| \| \| nticators), \| \| \| \| \| \| \[\[5.1.8.1\]{ \| \| \|
\| \| \| .underline} \| \| \| \| \| \| \](#multi-fa \| \| \| \| \| \|
ctor-crypto \| \| \| \| \| \| graphic-sof \| \| \| \| \| \| tware-authe
\| \| \| \| \| \| nticators), \| \| \| \| \| \| \[\[5. \| \| \| \| \| \|
1.9.1\]{.und \| \| \| \| \| \| erline}\](#r \| \| \| \| \| \|
equirements \| \| \| \| \| \| -for-truste \| \| \| \| \| \| d-referees)
\| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 (2) \| \| \[\[6.1\]{.un \| \[\[6.1\]{.und \| \| \| (a) (2) \| \|
derline}\](# \| erline}\](#a \| \| \| \| \| subscriber- \| uthenticato
\| \| \| \| \| accounts-1) \| r-binding), \| \| \| \| \| \| \[ \| \| \|
\| \| \| \[6.1.1\]{.un \| \| \| \| \| \| derline}\](# \| \| \| \| \| \|
binding-at- \| \| \| \| \| \| enrollment) \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 (2) \| \| \| \| \| \| (b) \| \| \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 (5) \| \| \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 (6) \| \| \| \[\[4.1.4\]{ \| \| \| \| \| \| .underline} \| \| \|
\| \| \| \](#security \| \| \| \| \| \| -controls), \| \| \| \| \| \|
\[\[4.2.4\]{.u \| \| \| \| \| \| nderline}\]( \| \| \| \| \| \|
#security-c \| \| \| \| \| \| ontrols-1), \| \| \| \| \| \|
\[\[4.3.4\]{.u \| \| \| \| \| \| nderline}\]( \| \| \| \| \| \|
#security-c \| \| \| \| \| \| ontrols-2), \| \| \| \| \| \| \[\[5 \| \|
\| \| \| \| .2.1\]{.unde \| \| \| \| \| \| rline}\](#ph \| \| \| \| \|
\| ysical-auth \| \| \| \| \| \| enticators) \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 (7) \| \| \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 (8) \| \| \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 (9) \| \| \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 (10) \| \| \| \[\[ \| \| \| \| \| \| 6.1.2.4\]{.u \| \| \| \| \|
\| nderline}\]( \| \| \| \| \| \| #external-a \| \| \| \| \| \|
uthenticato \| \| \| \| \| \| r-binding), \| \| \| \| \| \| \[\[6. \| \|
\| \| \| \| 1.3\]{.under \| \| \| \| \| \| line}\](#bin \| \| \| \| \|
\| ding-to-a-s \| \| \| \| \| \| ubscriber-p \| \| \| \| \| \|
rovided-aut \| \| \| \| \| \| henticator) \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 (12) \| \| \| \[\[5.2.3\] \| \| \| \| \| \| {.underline \| \| \|
\| \| \| }\](#use-of- \| \| \| \| \| \| biometrics) \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 (13) \| \| \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 (14) \| \| \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 (15) \| \| \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 (16) \| \| \| \[\[6.1\]{.und \| \[\[ \| \| \| \| \| erline}\](#a
\| 6.1.2.2\]{.u \| \| \| \| \| uthenticato \| nderline}\]( \| \| \| \|
\| r-binding), \| #rp-managed \| \| \| \| \| \[ \| -bound-auth \| \| \|
\| \| \[6.1.1\]{.un \| enticators) \| \| \| \| \| derline}\](# \| \| \|
\| \| \| binding-at- \| \| \| \| \| \| enrollment) \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 (17) \| \| \| \[\[5.2.3\] \| \| \| \| \| \| {.underline \| \| \|
\| \| \| }\](#use-of- \| \| \| \| \| \| biometrics) \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-5 (18) \| \| \| \[\[5.1.1. \| \| \| (a)/(b) \| \| \| 2\]{.underli
\| \| \| \| \| \| ne}\](#memor \| \| \| \| \| \| ized-secret \| \| \| \|
\| \| -verifiers) \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-6 \| \| \| \[\[5.1.1. \| \| \| \| \| \| 2\]{.underli \| \| \| \|
\| \| ne}\](#memor \| \| \| \| \| \| ized-secret \| \| \| \| \| \|
-verifiers) \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-7 \| \| \| \[\[5.1.7.1\] \| \| \| \| \| \| {.underline \| \| \| \|
\| \| }\](#single- \| \| \| \| \| \| factor-cryp \| \| \| \| \| \|
tographic-d \| \| \| \| \| \| evice-authe \| \| \| \| \| \| nticators),
\| \| \| \| \| \| \[\[5.1 \| \| \| \| \| \| .8\]{.underl \| \| \| \| \|
\| ine}\](#mult \| \| \| \| \| \| i-factor-cr \| \| \| \| \| \|
yptographic \| \| \| \| \| \| -software), \| \| \| \| \| \| \[\[5. \| \|
\| \| \| \| 1.9\]{.under \| \| \| \| \| \| line}\](#mul \| \| \| \| \|
\| ti-factor-c \| \| \| \| \| \| ryptographi \| \| \| \| \| \|
c-devices), \| \| \| \| \| \| \[\[5. \| \| \| \| \| \| 1.9.1\]{.und \|
\| \| \| \| \| erline}\](#r \| \| \| \| \| \| equirements \| \| \| \| \|
\| -for-truste \| \| \| \| \| \| d-referees) \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-8 \| \| \[\[6.1\]{.un \| \[\[4\]{.u \| \[ \| \| \| \| derline}\](#
\| nderline}\]( \| \[5.4\]{.unde \| \| \| \| subscriber- \| #authentica
\| rline}\](#rp \| \| \| \| accounts-1) \| tion-assura \| -subscriber \|
\| \| \| \| nce-levels) \| -accounts), \| \| \| \| \| \| \[\[6\]{.und \|
\| \| \| \| \| erline}\](#a \| \| \| \| \| \| ssertions), \| \| \| \| \|
\| \[\[6. \| \| \| \| \| \| 2.5.1\]{.und \| \| \| \| \| \| erline}\](#g
\| \| \| \| \| \| eneral-requ \| \| \| \| \| \| irements-1) \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-8 (1) \| \| \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-8 (2) \| \| \[\[4.3 \| \[\[4\]{.un \| \| \| (a) \| \| .2\]{.underl
\| derline}\](# \| \| \| \| \| ine}\](#char \| authenticat \| \| \| \|
\| acteristics \| ion-assuran \| \| \| \| \| -of-accepta \| ce-levels),
\| \| \| \| \| ble-digital \| \[\[4.1.1\]{. \| \| \| \| \| -evidence),
\| underline}\] \| \| \| \| \| \[\[5. \| (#permitted \| \| \| \| \|
3.4\]{.under \| -authentica \| \| \| \| \| line}\](#ide \| tor-types),
\| \| \| \| \| ntity-verif \| \[ \| \| \| \| \| ication-req \|
\[4.2.1\]{.un \| \| \| \| \| uirements), \| derline}\](# \| \| \| \| \|
\[\[5.4.4 \| permitted-a \| \| \| \| \| .1\]{.underl \| uthenticato \|
\| \| \| \| ine}\](#remo \| r-types-1), \| \| \| \| \| te-identity \|
\[\[4.3\]{.und \| \| \| \| \| -proofing), \| erline}\](#a \| \| \| \| \|
\[\[5.5 \| uthenticati \| \| \| \| \| .4\]{.underl \| on-assuranc \| \|
\| \| \| ine}\](#iden \| e-level-3), \| \| \| \| \| tity-verifi \|
\[\[4.3.1\]{.u \| \| \| \| \| cation-requ \| nderline}\]( \| \| \| \| \|
irements-2) \| #permitted- \| \| \| \| \| \| authenticat \| \| \| \| \|
\| or-types-2) \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-8 (2) \| \[\[5.1 \| \[\[ \| \| \[\[5.1\] \| \| (b) \| .2\]{.underl
\| 5.1.5\]{.und \| \| {.underline \| \| \| ine}\](#iden \| erline}\](#a
\| \| }\](#trust-a \| \| \| tify-impact \| dditional-r \| \| greements),
\| \| \| -categories \| equirements \| \| \[\[5.1. \| \| \| -and-potent
\| -for-federa \| \| 1\]{.underli \| \| \| ial-harms), \| l-agencies) \|
\| ne}\](#bilat \| \| \| \[\[ \| \| \| eral-trust- \| \| \| 5.2.3\]{.und
\| \| \| agreements) \| \| \| erline}\](#s \| \| \| \| \| \| electing-in
\| \| \| \| \| \| itial-ial), \| \| \| \| \| \| \[\[5 \| \| \| \| \| \|
.2.3.2\]{.un \| \| \| \| \| \| derline}\](# \| \| \| \| \| \|
selecting-i \| \| \| \| \| \| nitial-aal) \| \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-8 (4) \| \| \| \[\[5.2.7\]{. \| \[\[4\]{.u \| \| \| \| \|
underline}\] \| nderline}\]( \| \| \| \| \| (#verifier- \| #federation
\| \| \| \| \| compromise- \| -assurance- \| \| \| \| \| resistance) \|
level-fal), \| \| \| \| \| \| \[ \| \| \| \| \| \| \[4.1\]{.unde \| \|
\| \| \| \| rline}\](#fe \| \| \| \| \| \| deration-as \| \| \| \| \| \|
surance-lev \| \| \| \| \| \| el-1-fal1), \| \| \| \| \| \| \[ \| \| \|
\| \| \| \[4.2\]{.unde \| \| \| \| \| \| rline}\](#fe \| \| \| \| \| \|
deration-as \| \| \| \| \| \| surance-lev \| \| \| \| \| \| el-2-fal2),
\| \| \| \| \| \| \[ \| \| \| \| \| \| \[4.3\]{.unde \| \| \| \| \| \|
rline}\](#fe \| \| \| \| \| \| deration-as \| \| \| \| \| \| surance-lev
\| \| \| \| \| \| el-3-fal3), \| \| \| \| \| \| \[\[5.1.2\]{ \| \| \| \|
\| \| .underline} \| \| \| \| \| \| \](#multilat \| \| \| \| \| \|
eral-trust- \| \| \| \| \| \| agreements) \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-8 (5) \| \| \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-8 (6) \| \| \[\[5.1 \| \[\[4.\]{.u \| \[ \| \| \| \| .2.1\]{.unde
\| nderline}\]( \| \[5.5\]{.unde \| \| \| \| rline}\](#pr \| #authentica
\| rline}\](#pr \| \| \| \| ivacy-risk- \| tion-assura \| ivacy-requi \|
\| \| \| assessment) \| nce-levels) \| rements-1), \| \| \| \| \| \|
\[\[6. \| \| \| \| \| \| 2.5\*\]{.und \| \| \| \| \| \| erline}\](#p \|
\| \| \| \| \| airwise-pse \| \| \| \| \| \| udonymous-i \| \| \| \| \|
\| dentifiers) \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-9 \| \| \| \[\[4.1.2\]{ \| \| \| \| \| \| .underline} \| \| \| \|
\| \| \](#authenti \| \| \| \| \| \| cator-and-v \| \| \| \| \| \|
erifier-req \| \| \| \| \| \| uirements), \| \| \| \| \| \| \[\[5 \| \|
\| \| \| \| .2.5.2\]{.un \| \| \| \| \| \| derline}\](# \| \| \| \| \|
\| verifier-na \| \| \| \| \| \| me-binding) \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-10 \| \| \| \[\[5. \| \| \| \| \| \| 2.2\]{.under \| \| \| \| \|
\| line}\](#rat \| \| \| \| \| \| e-limiting- \| \| \| \| \| \|
throttling) \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-11 \| \| \| \[\[4.1.3\] \| \| \| \| \| \| {.underline \| \| \| \|
\| \| }\](#reauthe \| \| \| \| \| \| ntication), \| \| \| \| \| \|
\[\[4.2.3\]{. \| \| \| \| \| \| underline}\] \| \| \| \| \| \|
(#reauthent \| \| \| \| \| \| ication-1), \| \| \| \| \| \|
\[\[4.3.3\]{. \| \| \| \| \| \| underline}\] \| \| \| \| \| \|
(#reauthent \| \| \| \| \| \| ication-2), \| \| \| \| \| \| \[\[7.2\]{
\| \| \| \| \| \| .underline} \| \| \| \| \| \| \](#reauthen \| \| \| \|
\| \| tication-3) \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-12 a. \| \[\[5 \| \[\[4.4.1\]{. \| \| \[\[4.4\]{. \| \| \|
.2.3.1\]{.un \| underline}\] \| \| underline}\] \| \| \| derline}\](# \|
(#identity- \| \| (#requestin \| \| \| selecting-i \| verificatio \| \|
g-and-proce \| \| \| nitial-ial) \| n-methods), \| \| ssing-xals) \| \|
\| \| \[\[ \| \| \| \| \| \| 5.3.2.1\]{.u \| \| \| \| \| \| nderline}\](
\| \| \| \| \| \| #evidence-c \| \| \| \| \| \| ollection), \| \| \| \|
\| \| \[\[5. \| \| \| \| \| \| 3.4\]{.under \| \| \| \| \| \|
line}\](#ide \| \| \| \| \| \| ntity-verif \| \| \| \| \| \| ication-req
\| \| \| \| \| \| uirements), \| \| \| \| \| \| \[\[5.4.4\] \| \| \| \|
\| \| {.underline \| \| \| \| \| \| }\](#identit \| \| \| \| \| \|
y-verificat \| \| \| \| \| \| ion-require \| \| \| \| \| \| ments-1)\*,
\| \| \| \| \| \| \[\[5.5. \| \| \| \| \| \| 4\]{.underli \| \| \| \| \|
\| ne}\](#ident \| \| \| \| \| \| ity-verific \| \| \| \| \| \|
ation-requi \| \| \| \| \| \| rements-2), \| \| \| \| \| \| \[ \| \| \|
\| \| \| \[5.5.7\]{.un \| \| \| \| \| \| derline}\](# \| \| \| \| \| \|
in-person-p \| \| \| \| \| \| roofing-req \| \| \| \| \| \| uirements),
\| \| \| \| \| \| \[\[5.5 \| \| \| \| \| \| .8\]{.underl \| \| \| \| \|
\| ine}\](#requ \| \| \| \| \| \| irements-fo \| \| \| \| \| \|
r-ial3-supe \| \| \| \| \| \| rvised-remo \| \| \| \| \| \| te-identity
\| \| \| \| \| \| -proofing), \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-12 b. \| \| \[\[5.1.2.2 \| \| \[\[6\]{.und \| \| \| \|
\]{.underlin \| \| erline}\](#a \| \| \| \| e}\](#additi \| \|
ssertions), \| \| \| \| onal-privac \| \| \[\[6. \| \| \| \| y-protectiv
\| \| 2.5.1\]{.und \| \| \| \| e-measures) \| \| erline}\](#p \| \| \|
\| \| \| airwise-pse \| \| \| \| \| \| udonymous-i \| \| \| \| \| \|
dentifiers) \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-12 c. \| \| \[\[4.3\]{.u \| \| \| \| \| \| nderline}\]( \| \| \|
\| \| \| #identity-v \| \| \| \| \| \| alidation-a \| \| \| \| \| \|
nd-identity \| \| \| \| \| \| -evidence-c \| \| \| \| \| \| ollection),
\| \| \| \| \| \| \[\[4.3. \| \| \| \| \| \| 1\]{.underli \| \| \| \| \|
\| ne}\](#chara \| \| \| \| \| \| cteristics- \| \| \| \| \| \|
of-acceptab \| \| \| \| \| \| le-physical \| \| \| \| \| \| -evidence),
\| \| \| \| \| \| \[\[4.3 \| \| \| \| \| \| .2\]{.underl \| \| \| \| \|
\| ine}\](#char \| \| \| \| \| \| acteristics \| \| \| \| \| \|
-of-accepta \| \| \| \| \| \| ble-digital \| \| \| \| \| \| -evidence),
\| \| \| \| \| \| \[\[ \| \| \| \| \| \| 4.3.3\]{.und \| \| \| \| \| \|
erline}\](#e \| \| \| \| \| \| vidence-str \| \| \| \| \| \| ength-requi
\| \| \| \| \| \| rements)\*, \| \| \| \| \| \| \[\[4 \| \| \| \| \| \|
.3.4\]{.unde \| \| \| \| \| \| rline}\](#id \| \| \| \| \| \|
entity-evid \| \| \| \| \| \| ence-and-at \| \| \| \| \| \| tribute-val
\| \| \| \| \| \| idation)\*, \| \| \| \| \| \| \[\[5.3.3\]{.u \| \| \|
\| \| \| nderline}\]( \| \| \| \| \| \| #identify-s \| \| \| \| \| \|
upplemental \| \| \| \| \| \| -controls), \| \| \| \| \| \| \[ \| \| \|
\| \| \| \[5.4.2\]{.un \| \| \| \| \| \| derline}\](# \| \| \| \| \| \|
evidence-an \| \| \| \| \| \| d-core-attr \| \| \| \| \| \| ibute-colle
\| \| \| \| \| \| ction-requi \| \| \| \| \| \| rements)\*, \| \| \| \|
\| \| \[\[ \| \| \| \| \| \| 5.4.3\]{.und \| \| \| \| \| \| erline}\](#e
\| \| \| \| \| \| vidence-and \| \| \| \| \| \| -core-attri \| \| \| \|
\| \| butes-valid \| \| \| \| \| \| ation-requi \| \| \| \| \| \|
rements-1), \| \| \| \| \| \| \[\[5. \| \| \| \| \| \| 5.2.1\]{.und \|
\| \| \| \| \| erline}\](#e \| \| \| \| \| \| vidence-col \| \| \| \| \|
\| lection-2), \| \| \| \| \| \| \[\[5.5. \| \| \| \| \| \| 3\]{.underli
\| \| \| \| \| \| ne}\](#valid \| \| \| \| \| \| ation-requi \| \| \| \|
\| \| rements)\*, \| \| \| \| \| \| \[\[5.5 \| \| \| \| \| \|
.4\]{.underl \| \| \| \| \| \| ine}\](#iden \| \| \| \| \| \|
tity-verifi \| \| \| \| \| \| cation-requ \| \| \| \| \| \| irements-2)
\| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-12 (1) \| \| \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-12 (2) \| \| \[\[4.4.1\]{. \| \| \| \| \| \| underline}\] \| \| \|
\| \| \| (#identity- \| \| \| \| \| \| verificatio \| \| \| \| \| \|
n-methods), \| \| \| \| \| \| \[\[ \| \| \| \| \| \| 5.3.2.1\]{.u \| \|
\| \| \| \| nderline}\]( \| \| \| \| \| \| #evidence-c \| \| \| \| \| \|
ollection), \| \| \| \| \| \| \[\[5. \| \| \| \| \| \| 4.2.1\]{.und \|
\| \| \| \| \| erline}\](#e \| \| \| \| \| \| vidence-col \| \| \| \| \|
\| lection-1), \| \| \| \| \| \| \[ \| \| \| \| \| \| \[5.5.7\]{.un \|
\| \| \| \| \| derline}\](# \| \| \| \| \| \| in-person-p \| \| \| \| \|
\| roofing-req \| \| \| \| \| \| uirements), \| \| \| \| \| \| \[\[5. \|
\| \| \| \| \| 5.8\]{.under \| \| \| \| \| \| line}\](#req \| \| \| \|
\| \| uirements-f \| \| \| \| \| \| or-ial3-sup \| \| \| \| \| \|
ervised-rem \| \| \| \| \| \| ote-identit \| \| \| \| \| \| y-proofing)
\| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-12 (3) \| \| \[\[ \| \| \| \| \| \| 4.3.3\]{.und \| \| \| \| \| \|
erline}\](#e \| \| \| \| \| \| vidence-str \| \| \| \| \| \| ength-requi
\| \| \| \| \| \| rements)\*, \| \| \| \| \| \| \[ \| \| \| \| \| \|
\[4.3.4\]{.un \| \| \| \| \| \| derline}\](# \| \| \| \| \| \|
identity-ev \| \| \| \| \| \| idence-and- \| \| \| \| \| \| attribute-v
\| \| \| \| \| \| alidation), \| \| \| \| \| \| \[\[ \| \| \| \| \| \|
4.3.4.1\]{.u \| \| \| \| \| \| nderline}\]( \| \| \| \| \| \|
#evidence-v \| \| \| \| \| \| alidation), \| \| \| \| \| \| \[\[5. \| \|
\| \| \| \| 5.8\]{.under \| \| \| \| \| \| line}\](#req \| \| \| \| \|
\| uirements-f \| \| \| \| \| \| or-ial3-sup \| \| \| \| \| \|
ervised-rem \| \| \| \| \| \| ote-identit \| \| \| \| \| \| y-proofing)
\| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-12 (4) \| \| \[\[4.4.1\]{. \| \| \| \| \| \| underline}\] \| \| \|
\| \| \| (#identity- \| \| \| \| \| \| verificatio \| \| \| \| \| \|
n-methods), \| \| \| \| \| \| \[\[5.5.7\]{.u \| \| \| \| \| \|
nderline}\]( \| \| \| \| \| \| #in-person- \| \| \| \| \| \| proofing-re
\| \| \| \| \| \| quirements) \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-12 (5) \| \| \[\[5 \| \| \| \| \| \| .1.6\]{.unde \| \| \| \| \|
\| rline}\](#re \| \| \| \| \| \| quirements- \| \| \| \| \| \|
for-enrollm \| \| \| \| \| \| ent-codes), \| \| \| \| \| \| \[\[5.1.7\]{
\| \| \| \| \| \| .underline} \| \| \| \| \| \| \](#requirem \| \| \| \|
\| \| ents-for-no \| \| \| \| \| \| tifications \| \| \| \| \| \|
-of-identit \| \| \| \| \| \| y-proofing) \| \| \|
+-------------+-------------+-------------+-------------+-------------+
\| IA-12 (6) \| \| \| \| \[\[4.4\]{. \| \| \| \| \| \| underline}\] \|
\| \| \| \| \| (#requestin \| \| \| \| \| \| g-and-proce \| \| \| \| \|
\| ssing-xals) \|
+-------------+-------------+-------------+-------------+-------------+

## Detailed Policy Crosswalk

## 800-63-4

+--------------------------------------------------+-------------------+
\| NIST 800-63 Reference \| 800-53 rev 5 \| \| \| control \|
+==================================================+===================+
\| ### 1. Purpose (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 2. Introduction (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ## \| \| \| # 3. Definitions and Abbreviations (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 4. Digital Identity Model (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 5. Digital Identity Risk Management \| \|
+--------------------------------------------------+-------------------+
\| \[Organizations\]{.mark} **SHOULD** \[adapt and \| IA-1 a.1 (b) \| \|
modify this overall approach to meet \| \| \| organizational processes,
governance, and \| \| \| integration with enterprise risk management \|
\| \| practices.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[At a minimum, organizations\]{.mark} **SHALL** \| IA-1 a.1 (b) \|
\| \[ensure that each step is executed and the \| \| \| normative
mandates and outcomes of each step are \| \| \| completed and documented
regardless of \| \| \| operational approach and enabling tools.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| ### 5.1 Conduct Initial Impact Assessment \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.1. ​​Identify Impacted Entities \| \|
+--------------------------------------------------+-------------------+
\| \[Accordingly, impact assessments\]{.mark} \| \| \| **SHALL**
\[include individuals using the system \| \| \| or application in
addition to the organization \| \| \| itself.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Additionally, organizations\]{.mark} **SHOULD** \| \| \| \[identify
other entities, such as mission \| \| \| partners, communities, and
those identified in \| \| \| \[\[SP800-30\]\](https://page \| \| \|
s.nist.gov/800-63-4/sp800-63.html#ref-SP800-30), \| \| \| that need to
be specifically included based on \| \| \| mission and business
needs.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[At a minimum, agencies\]{.mark} **SHALL** \| \| \| \[document all
entities to which impacts will be \| \| \| assessed when conducting
their impact \| \| \| analysis.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.2 \| \| \| . Identify Impact Categories and Potential Harms
\| \|
+--------------------------------------------------+-------------------+
\| \[Initial assurance levels for digital \| IA-8 (2) (b) \| \|
transactions\]{.mark} **SHALL** \[be determined by \| \| \| assessing
the potential impact of, at a minimum, \| \| \| each of the following
categories:\]{.mark} \| \| \| \| \| \| - \[Damage to mission
delivery\]{.mark} \| \| \| \| \| \| - \[Damage to trust or
reputation\]{.mark} \| \| \| \| \| \| - \[Loss of sensitive
information\]{.mark} \| \| \| \| \| \| - \[Damage to or loss of economic
\| \| \| \> stability\]{.mark} \| \| \| \| \| \| - \[Loss of life or
damage to safety, health, \| \| \| \> or environmental
stability\]{.mark} \| \| \| \| \| \| - \[Noncompliance with laws,
regulations, \| \| \| \> and/or contractual obligations\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Organizations\]{.mark} **SHOULD** \[include \| \| \| additional
impact categories as appropriate \| \| \| based on their
mission.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Each impact category\]{.mark} **SHALL** \[be \| IA-1 a.1 (a), \| \|
documented and consistently applied across \| IA-8 (2) (b) \| \|
different applications assessed by the \| \| \| organization.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[Agencies\]{.mark} **SHOULD** \[consider specific \| \| \| harms for
each of the defined impact categories \| \| \| to better inform their
impact analysis.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Identification of harms for each \| IA-1 a.1 (a) \| \|
category\]{.mark} **SHALL** \[be done for each of \| \| \| the entities
identified during "entity \| \| \| identification" process.\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| ### 5.1.3. Identify Potential Impact Levels \| \|
+--------------------------------------------------+-------------------+
\| \[Each assurance level, IAL, AAL, and FAL (if \| \| \| accepting or
asserting a federated \| \| \| identity)\]{.mark} **SHALL** \[be
evaluated \| \| \| separately. Ideally, any evaluation will include \|
\| \| different viewpoints such as harm to \| \| \| individuals, the
organization, other \| \| \| organizations, and the nation as applicable
to \| \| \| successful delivery of the organization's \| \| \|
mission.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.4. Impact Analysis \| \|
+--------------------------------------------------+-------------------+
\| \[To determine the appropriate level of assurance \| \| \| of the
user's asserted identity, \| \| \| organizations\]{.mark} **SHALL**
\[assess the \| \| \| potential risks and identify measures to \| \| \|
minimize their impact.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Organizations\]{.mark} **SHALL** \[assess the \| \| \| risk of
identity proofing, authentication, and \| \| \| federation failures
separately to determine the \| \| \| required assurance level for each
\| \| \| transaction.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[This process\]{.mark} **SHALL** \[include \| \| \| consideration of
potentially varying impacts of \| \| \| harms to different entities
impacted by the \| \| \| digital identity system, as described in \[Sec.
\| \| \| 5.1.1\](https://pages.ni \| \| \|
st.gov/800-63-4/sp800-63.html#impctEnt).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Entities\]{.mark} **SHOULD** \[consider the \| \| \| impact of
specific modes of failures related to \| \| \| identity proofing,
authentication, and \| \| \| federation\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.2. Select Initial Assurance Levels \| \|
+--------------------------------------------------+-------------------+
\| ### 5.2.1. Assurance Levels \| \|
+--------------------------------------------------+-------------------+
\| \[An organization RP\]{.mark} **SHALL** \[select, \| IA-5 a. \| \|
based on cybersecurity risk and mission needs, \| \| \| the following
individual initial assurance \| IA-5 c. \| \| levels:\]{.mark} \| \| \|
\| \| \| - \[**IAL**: The robustness of the identity \| \| \| \>
proofing process to confidently determine \| \| \| \> the identity of an
individual. IAL is \| \| \| \> selected to mitigate potential identity
\| \| \| \> proofing failures.\]{.mark} \| \| \| \| \| \| - \[**AAL**:
The robustness of the \| \| \| \> authentication process itself, and the
\| \| \| \> binding between an authenticator and a \| \| \| \> specific
individual's identifier. AAL is \| \| \| \> selected to mitigate
potential \| \| \| \> authentication failures.\]{.mark} \| \| \| \| \|
\| - \[**FAL**: The robustness of the federation \| \| \| \> process
used to communicate authentication \| \| \| \> and attribute information
(if applicable) \| \| \| \> to an RP from an IdP. FAL is optional as \|
\| \| \> not all digital systems will leverage \| \| \| \> federated
identity architectures. FAL is \| \| \| \> selected to mitigate
potential federation \| \| \| \> failures.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.2.2. xAL Descriptions \| \|
+--------------------------------------------------+-------------------+
\| ### 5.2.2.1. Identity Assurance Level \| \|
+--------------------------------------------------+-------------------+
\| ### 5.2.2.2. Authentication Assurance Level \| \|
+--------------------------------------------------+-------------------+
\| ### 5.2.2.3. Federation Assurance Level \| \|
+--------------------------------------------------+-------------------+
\| ### 5.2.3 Initial Assurance Level Selection \| \|
+--------------------------------------------------+-------------------+
\| \[Organizations\]{.mark} **SHALL** \[develop and \| IA-1 a. 2, ​​IA-8
\| \| document a process and governance model for \| (2) (b) \| \|
selecting initial assurance levels based on the \| \| \| potential
impact of digital identity failures. \| \| \| This section provides
guidance on the major \| \| \| elements to include in that
process.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.2.3.1. Selecting Initial IAL \| \|
+--------------------------------------------------+-------------------+
\| \[Organizations\]{.mark} **SHALL** \[use a \| IA-12 a. \| \|
risk-based approach to select the most \| \| \| appropriate identity
proofing requirements for \| \| \| their RP application.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[This initial selection\]{.mark} **SHALL** \[be \| IA-12 a. \| \|
tailored, as described in \[Sec. \| \| \| 5.3\](https: \| \| \|
//pages.nist.gov/800-63-4/sp800-63.html#tailor), \| \| \| based on
mission needs, risk tolerance, and \| \| \| potential impacts to
privacy, equity, and \| \| \| usability, before making a final IAL \| \|
\| determination.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If an organization determines that identity \| IA-12 a. \| \|
proofing is necessary, the initial IAL\]{.mark} \| \| \| **SHALL** \[be
assessed based on the potential \| \| \| impacts of identity proofing
failures.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If an organization determines that identity \| IA-12 a. \| \|
proofing is necessary, the initial IAL\]{.mark} \| \| \| **SHALL** \[be
assessed based on the potential \| \| \| impacts of identity proofing
failures.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[As described in \[Sec. \| IA-12 a. \| \| 5.1\](https://pa \| \| \|
ges.nist.gov/800-63-4/sp800-63.html#intlAssess), \| \| \| potential
impacts\]{.mark} **SHALL** \[be \| \| \| considered from the perspective
of the \| \| \| organization, individuals, other organizations, \| \| \|
and the nation, for harms incurred through the \| \| \| use or operation
of the RP application.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Organizations\]{.mark} **SHOULD** \[consider the \| IA-12 a. \| \|
worst-case when identifying the overall impact \| \| \| level of the RP
application, but may use risk \| \| \| management processes to tailor
their initial \| \| \| selection when there are differing \| \| \|
impacts.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When assessing the overall impact level of the \| IA-12 a. \| \| RP
application, the organization\]{.mark} \| \| \| **SHOULD** \[consider
impacts to mission delivery \| \| \| separately from other impact
categories.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[As such, the organization\]{.mark} **MAY** \| IA-12 a. \| \|
\[exclude the mission delivery category when \| \| \| initially
identifying the overall impact level \| \| \| of the RP application, as
these impacts will \| \| \| need to be considered in the tailoring \| \|
\| process.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.2.3.2. Selecting Initial AAL \| \|
+--------------------------------------------------+-------------------+
\| \[Organizations\]{.mark} **SHALL** \[use a \| IA-8 (2) (b) \| \|
risk-based approach to select the most \| \| \| appropriate
authentication requirements for \| \| \| their RP application.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[This initial selection\]{.mark} **SHALL** \[be \| IA-8 (2) (b) \|
\| tailored, as described in \[Sec. \| \| \| 5.3\](https: \| \| \|
//pages.nist.gov/800-63-4/sp800-63.html#tailor), \| \| \| based on
mission needs, risk tolerance, and \| \| \| potential impacts to
privacy, equity, and \| \| \| usability, before making a final AAL \| \|
\| determination.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The initial AAL\]{.mark} **SHALL** \[be assessed \| IA-5 (6), IA-8
\| \| based on the potential impacts of authentication \| (2) (b) \| \|
failures.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[As described in \[Sec. \| IA-8 (2) (b) \| \| 5.1\](https://pa \| \|
\| ges.nist.gov/800-63-4/sp800-63.html#intlAssess), \| \| \| potential
impacts\]{.mark} **SHALL** \[be \| \| \| considered from the perspective
of the \| \| \| organization, individuals, other organizations, \| \| \|
and the nation, for harms incurred through the \| \| \| use or operation
of the RP application, as the \| \| \| level of harm from a failure
could vary \| \| \| significantly across these entities.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Organizations\]{.mark} **SHOULD** \[consider the \| IA-8 (2) (b) \|
\| worst-case when identifying the overall impact \| \| \| level of the
RP application, but may use risk \| \| \| management processes to tailor
their initial \| \| \| selection when there are differing \| \| \|
impacts.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When assessing the overall impact level of the \| IA-8 (2) (b) \|
\| RP application, the organization\]{.mark} \| \| \| **SHOULD**
\[consider impacts to mission delivery \| \| \| separately from other
impact categories.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[As such, the organization\]{.mark} **MAY** \| IA-8 (2) (b) \| \|
\[exclude the mission delivery category when \| \| \| initially
identifying the overall impact level \| \| \| of the RP application, as
these impacts will \| \| \| need to be considered in the tailoring \| \|
\| process.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.2.3.3. Selecting Initial FAL \| \|
+--------------------------------------------------+-------------------+
\| \[Organizations\]{.mark} **SHALL** \[use a \| \| \| risk-based
approach to select the most \| \| \| appropriate federation requirements
for their RP \| \| \| application.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[This initial selection\]{.mark} **SHALL** \[be \| \| \| tailored,
as described in \[Sec. \| \| \| 5.3\](https: \| \| \|
//pages.nist.gov/800-63-4/sp800-63.html#tailor), \| \| \| based on
mission needs, risk tolerance, and \| \| \| potential impacts to
privacy, equity, and \| \| \| usability, before making a final FAL \| \|
\| determination.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The initial FAL\]{.mark} **SHALL** \[be assessed \| \| \| based on
the potential impacts of failures in \| \| \| the presentation or
acceptance of assertions in \| \| \| federated identity
architectures.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[As described in \[Sec. \| \| \| 5.1\](https://pa \| \| \|
ges.nist.gov/800-63-4/sp800-63.html#intlAssess), \| \| \| potential
impacts\]{.mark} **SHALL** \[be \| \| \| considered from the perspective
of the \| \| \| organization, individuals, other organizations, \| \| \|
and the nation, for harms incurred through the \| \| \| use or operation
of the RP application, as the \| \| \| level of harm from a failure
could vary \| \| \| significantly across these entities.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Organizations\]{.mark} **SHOULD** \[consider the \| \| \|
worst-case when identifying the overall impact \| \| \| level of the RP
application, but may use risk \| \| \| management processes to tailor
their initial \| \| \| selection when there are differing \| \| \|
impacts.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When assessing the overall impact level of the \| \| \| RP
application, the organization\]{.mark} \| \| \| **SHOULD** \[consider
impacts to mission delivery \| \| \| separately from other impact
categories.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Potential failures in federated architectures \| \| \| that could
lead to harms in mission \| \| \| delivery\]{.mark} **MAY** \[be
assessed by the \| \| \| organization to determine if the associated \|
\| \| impacts would be mitigated or exacerbated by the \| \| \|
implementation of more rigorous controls by \| \| \| identity
providers.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.3. Tailor and Document Assurance Levels \| \|
+--------------------------------------------------+-------------------+
\| \[Organizations\]{.mark} **SHOULD** \[implement the \| \| \| assessed
assurance level as defined in these \| \| \| guidelines.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Therefore, organizations\]{.mark} **SHALL** \| IA-1 a. 2 \| \|
\[establish and document an xAL tailoring \| \| \| process.\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| \[At a minimum this process:\]{.mark} \| IA-1 a. 2 \| \| \| \| \| 1.
**SHALL** \[include a structured governance \| \| \| \> approach to
allow for decision-making and \| \| \| \> conflict resolution.\]{.mark}
\| \| \| \| \| \| 2. **SHALL** \[document all decisions in the \| \| \|
\> tailoring process, including the assessed \| \| \| \> xALs, modified
xALs, and compensating \| \| \| \> controls in the Digital Identity \|
\| \| \> Acceptance Statement (see \[Sec. \| \| \| \>
5.3.4\](https://pages.nist.go \| \| \|
v/800-63-4/sp800-63.html#IDacceptStmt)).\]{.mark} \| \| \| \| \| \| 3.
**SHALL** \[justify and document all \| \| \| \> risk-based decisions or
modifications to \| \| \| \> the initially assessed xALs in the Digital
\| \| \| \> Identity Acceptance Statement (see \[Sec. \| \| \| \>
5.3.4\](https://pages.nist.go \| \| \|
v/800-63-4/sp800-63.html#IDacceptStmt)).\]{.mark} \| \| \| \| \| \| 4.
**SHOULD** \[establish a cross-functional \| \| \| \> capability to
support subject matter \| \| \| \> analysis of xAL selection impacts in
the \| \| \| \> tailoring process.\]{.mark} \| \| \| \| \| \| 5.
**SHOULD** \[be a continuous process that \| \| \| \> incorporates real
world operational data \| \| \| \> to evaluate the impacts of selected
xAL \| \| \| \> controls.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.3. \| \| \| 1. Assess Privacy, Equity, Usability and Threats \|
\|
+--------------------------------------------------+-------------------+
\| \[When transitioning from an initial assurance \| \| \| level to the
final xAL selection and \| \| \| implementation, organizations\]{.mark}
**SHALL** \| \| \| \[conduct detailed assessments of the controls \| \|
\| defined at the assurance level to determine \| \| \| potential
impacts in their operational \| \| \| environment.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[At a minimum, organizations\]{.mark} **SHALL** \| \| \| \[assess
impacts related to the following \| \| \| areas:\]{.mark} \| \| \| \| \|
\| - \[**Privacy** -- to determine unintended \| \| \| \> consequences
to the privacy of individuals \| \| \| \> that will be subject to the
controls at an \| \| \| \> assessed xAL and of individuals affected \|
\| \| \> by organizational or third-party practices \| \| \| \> related
to the establishment, management, \| \| \| \> or federation of a digital
\| \| \| \> identity.\]{.mark} \| \| \| \| \| \| - \[**Equity** -- to
determine whether \| \| \| \> implementation of controls may create or
\| \| \| \> maintain inequities across demographics or \| \| \| \> user
groups.\]{.mark} \| \| \| \| \| \| - \[**Usability** -- to determine
whether \| \| \| \> implementation of the selected controls \| \| \| \>
will result in challenges to end-user \| \| \| \> experience.\]{.mark}
\| \| \| \| \| \| - \[**Threat** -- to determine whether the \| \| \| \>
defined assurance level will address \| \| \| \> specific threats based
on environment, \| \| \| \> threat actors, and known tactics, \| \| \|
\> techniques, and procedures (TTPs).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Additionally, organizations\]{.mark} **SHOULD** \| \| \| \[conduct
additional business specific \| \| \| assessments as appropriate to
fully represent \| \| \| mission and domain specific considerations not
\| \| \| captured here.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[These assessments\]{.mark} **SHALL** \[be \| \| \| extended to any
compensating or supplemental \| \| \| controls as defined in \[Sec. \|
\| \| 5.3.2\](https://pa \| \| \|
ges.nist.gov/800-63-4/sp800-63.html#IDCompCntls) \| \| \| and \[Sec. \|
\| \| 5.3.3\](https://pages.nist. \| \| \|
gov/800-63-4/sp800-63.html#IDSupCntrls).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.3.2. Identify Compensating Controls \| \|
+--------------------------------------------------+-------------------+
\| \[Organizations\]{.mark} **SHOULD** \[implement \| \| \| their
identity services per the requirements in \| \| \| these guidelines for
their tailored assurance \| \| \| level. However, where organizations
are unable \| \| \| to implement a specific control associated with \|
\| \| their baseline or tailored assurance level, \| \| \| they\]{.mark}
**MAY** \[select to implement a \| \| \| compensating control.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[This control\]{.mark} **MAY** \[be a modification \| \| \| to a
digital identity process as defined in \| \| \| these guidelines,
but\]{.mark} **MAY** \[also be \| \| \| applied elsewhere in an
application, \| \| \| transaction, or service lifecycle.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Where compensating controls are implemented, \| \| \|
organizations\]{.mark} **SHALL** \[demonstrate \| \| \| comparability of
a chosen alternative or \| \| \| document residual risk incurred by
deviating \| \| \| from normative requirements.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Organizations\]{.mark} **SHALL** \[implement \| IA-1 a.1 (a) \| \|
procedures to document both the justification \| \| \| for any departure
from normative requirements \| \| \| and detail the compensating
controls \| \| \| employed.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.3.3. Identify Supplemental Controls \| \|
+--------------------------------------------------+-------------------+
\| \[Organizations\]{.mark} **SHOULD** \[identify and \| \| \| implement
supplemental controls where they \| \| \| identify threats that may not
be addressed in \| \| \| baseline controls.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Where organizations implement supplemental \| \| \| controls,
these\]{.mark} **SHALL** \[be assessed \| \| \| for impacts based on the
same factors used to \| \| \| tailor the organization's assurance \| \|
\| level.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Supplemental controls\]{.mark} **SHALL** \[be \| IA-1 a.1 (a) \| \|
documented.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.3.4. Document Res \| \| \| ults - The Digital Identity
Acceptance Statement \| \|
+--------------------------------------------------+-------------------+
\| \[The statement\]{.mark} **SHALL** \[include, at a \| \| \|
minimum:\]{.mark} \| \| \| \| \| \| 1. \[Initial Impact Assessment
Results\]{.mark} \| \| \| \| \| \| 2. \[Initially assessed xAL,\]{.mark}
\| \| \| \| \| \| 3. \[Tailored xAL and rationale, if tailored xAL \| \|
\| \> differs from initially assessed \| \| \| \> xAL,\]{.mark} \| \| \|
\| \| \| 4. \[All compensating controls and their \| \| \| \>
comparability or residual risk associated \| \| \| \> with compensating
controls\]{.mark} \| \| \| \| \| \| 5. \[All supplemental
controls\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Federal agencies\]{.mark} **SHOULD** \[include \| \| \| this
information in the system authorization \| \| \| package described in \|
\| \| \[\[SP800-37\]\](https://pages.nist.g \| \| \|
ov/800-63-4/sp800-63.html#ref-SP800-37).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.4. Continuously Evaluate and Improve \| \|
+--------------------------------------------------+-------------------+
\| \[To maintain pace with the constantly shifting \| \| \| environment
in which they operate, \| \| \| organizations\]{.mark} **SHOULD**
\[implement a \| \| \| continuous evaluation and improvement program \|
\| \| that leverages input from people interacting \| \| \| with the
identity system.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[These programs\]{.mark} **SHOULD** \[consider \| \| \| feedback
from application performance metrics, \| \| \| threat intelligence,
fraud analytics, \| \| \| assessments of equity impacts, privacy impact
\| \| \| analysis, and user inputs.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5 \| \| \| .5. Cyber, Fraud, and Identity Program Integrity \| \|
+--------------------------------------------------+-------------------+
\| \[Organizations\]{.mark} **SHOULD** \[establish \| IA-1 a. 1. (a) \|
\| consistent mechanisms for the exchange of \| \| \| information
between critical security and fraud \| \| \| stakeholders.\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| \[Where supporting service providers, such as \| \| \| CSPs, are
external, this may be complicated, \| \| \| but\]{.mark} **SHOULD** \[be
considered in \| \| \| contractual and legal mechanisms.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[All data collected, transmitted, or \| \| \| shared\]{.mark}
**SHALL** \[be minimized and \| \| \| subject to a detailed privacy and
legal \| \| \| assessment.\]{.mark} \| \|
+--------------------------------------------------+-------------------+

## 800-63A-4

+--------------------------------------------------+-------------------+
\| NIST 800-63A Reference \| 800-53 rev 5 \| \| \| control \|
+==================================================+===================+
\| ### 1. Purpose (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 2. Introduction (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ## \| \| \| # 3. Definitions and Abbreviations (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 4. I \| \| \| dentity Resolution, Validation, and Verification \|
\|
+--------------------------------------------------+-------------------+
\| \[To the extent practical, CSPs and \| \| \| organizations\]{.mark}
SHOULD \[enable optionality \| \| \| when implementing their identity
proofing \| \| \| services and processes to promote access for \| \| \|
those with different means, capabilities, and \| \| \| technology
access.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[At a minimum, this\]{.mark} **SHOULD** \[include \| \| \| accepting
multiple types and combinations of \| \| \| identity evidence,
supporting multiple data \| \| \| validation sources, enabling multiple
methods \| \| \| for verifying identity (e.g., use of trusted \| \| \|
referees), multiple channels for engagement \| \| \| (e.g., in-person,
remote), and offering \| \| \| assistance mechanisms for applicants
(e.g., \| \| \| applicant references).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 4.1. Identity Proofing and Enrollment​​ \| \|
+--------------------------------------------------+-------------------+
\| ### 4.1.1. ​​Identify Impacted Entities \| \|
+--------------------------------------------------+-------------------+
\| ### 4.2. Identity Resolution \| \|
+--------------------------------------------------+-------------------+
\| ### 4.3. Iden \| \| \| tity Validation and Identity Evidence
Collection \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[determine the \| IA-12 c. \| \|
acceptability of presented identity evidence for \| \| \| identity
proofing based on the evidence \| \| \| characteristics in this
section.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 4.3.1. \| \| \| Characteristics of Acceptable Physical Evidence
\| \|
+--------------------------------------------------+-------------------+
\| \[Acceptable physical evidence\]{.mark} **SHALL** \| IA-12 c. \| \|
\[contain all of the following \| \| \| characteristics:\]{.mark} \|
IA-12 (3) \| \| \| \| \| - \[The presented document contains the printed
\| \| \| \> name of the applicant. (See Sec. 10.1 - \| \| \| \> Equity
and Resolution - for guidance on \| \| \| \> dealing with a printed name
that varies \| \| \| \> from the applicant's claimed \| \| \| \>
identity.)\]{.mark} \| \| \| \| \| \| - \[The presented document
contains at least \| \| \| \> one printed reference number.\]{.mark} \|
\| \| \| \| \| - \[The presented document contains the printed \| \| \|
\> name of the issuer of the \| \| \| \> document.\]{.mark} \| \| \| \|
\| \| - \[The issuer of the document performed \| \| \| \> identity
proofing of the applicant prior \| \| \| \> to issuing the
document.\]{.mark} \| \| \| \| \| \| - \[There is reasonable assurance
that the \| \| \| \> document was delivered to the intended \| \| \| \>
person.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 4.3.2 \| \| \| . Characteristics of Acceptable Digital Evidence
\| \|
+--------------------------------------------------+-------------------+
\| \[Acceptable digital evidence\]{.mark} **SHALL** \| IA-12 c. \| \|
\[contain all of the following \| \| \| characteristics:\]{.mark} \|
IA-12 (3) \| \| \| \| \| 1. \[The presented digital evidence contains
the \| IA-8 (2) (a) \| \| \> name of the applicant as the subject of \|
\| \| \> the digital information or account. (See \| \| \| \> Sec.
10.1 - Equity and Resolution - for \| \| \| \> guidance on dealing with
a name on digital \| \| \| \> evidence that varies from the applicant's
\| \| \| \> claimed identity.)\]{.mark} \| \| \| \| \| \| 2. \[The
presented digital evidence contains at \| \| \| \> least one reference
(e.g., account number) \| \| \| \> or sufficient attributes to bind the
\| \| \| \> digital information to the \| \| \| \> applicant.\]{.mark}
\| \| \| \| \| \| 3. \[The presented digital evidence contains the \| \|
\| \> name of the issuer of the digital \| \| \| \>
information.\]{.mark} \| \| \| \| \| \| 4. \[The issuer of the digital
evidence \| \| \| \> performed identity proofing of the \| \| \| \>
applicant prior to issuing the digital \| \| \| \> evidence.\]{.mark} \|
\| \| \| \| \| 5. \[There is reasonable assurance that the \| \| \| \>
digital evidence was delivered or made \| \| \| \> accessible to
intended person.\]{.mark} \| \| \| \| \| \| 6. \[If applicable, the
presented digital \| \| \| \> evidence can be verified through \| \| \|
\> authentication at an AAL or FAL \| \| \| \> commensurate with the
assessed IAL\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 4.3.3. Evidence Strength Requirements \| \|
+--------------------------------------------------+-------------------+
\| ### 4.3.3.1. Fair Evidence Requirements \| \|
+--------------------------------------------------+-------------------+
\| \[In order to be considered FAIR, identity \| IA-12 c. \| \|
evidence\]{.mark} **SHALL** \[meet *all* the \| \| \| following
requirements:\]{.mark} \| IA-12 (3) \| \| \| \| \| 1. \[The issuing
source of the evidence \| \| \| \> confirmed the claimed identity
through an \| \| \| \> identity proofing process.\]{.mark} \| \| \| \|
\| \| 2. \[It can be reasonably assumed that the \| \| \| \> evidence
issuing process would result in \| \| \| \> the delivery of the evidence
to the person \| \| \| \> to whom it relates.\]{.mark} \| \| \| \| \| \|
3. \[The evidence contains at least one \| \| \| \> reference number, a
facial portrait, or \| \| \| \> sufficient attributes to uniquely
identify \| \| \| \> the person to whom it relates.\]{.mark} \| \| \| \|
\| \| 4. \[The evidence has not expired or it expired \| \| \| \> within
the previous six (6) months, or it \| \| \| \> was issued within the
previous six (6) \| \| \| \> months if it does not contain an \| \| \|
\> expiration date.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 4.3.3.2. Strong Evidence Requirements \| \|
+--------------------------------------------------+-------------------+
\| \[In order to be considered STRONG, identity \| IA-12 c. \| \|
evidence\]{.mark} **SHALL** \[meet *all* the \| \| \| following
requirements:\]{.mark} \| IA-12 (3) \| \| \| \| \| 1. \[The issuing
source of the evidence \| \| \| \> confirmed the claimed identity
through \| \| \| \> written procedures designed to enable it \| \| \| \>
to form a reasonable belief that it knows \| \| \| \> the real-life
identity of the person. Such \| \| \| \> procedures are subject to
recurring \| \| \| \> oversight by regulatory or \| \| \| \>
publicly-accountable institutions. For \| \| \| \> example, the Customer
Identification \| \| \| \> Program guidelines established in response \|
\| \| \> to the USA PATRIOT Act of 2001 or the \| \| \| \>
\[\[RedFlagsRule\]\](https:// \| \| \|
pages.nist.gov/800-63-4/sp800-63a.html#ref-rfr), \| \| \| \> under Sec.
114 of the Fair and Accurate \| \| \| \> Credit Transaction Act of 2003
(FACT \| \| \| \> Act).\]{.mark} \| \| \| \| \| \| 2. \[There is a high
likelihood that the \| \| \| \> evidence issuing process would result in
\| \| \| \> the delivery of the evidence to the person \| \| \| \> to
whom it relates.\]{.mark} \| \| \| \| \| \| 3. \[The evidence contains a
reference number or \| \| \| \> other attributes that uniquely identify
\| \| \| \> the person to whom it relates.\]{.mark} \| \| \| \| \| \| 4.
\[The evidence contains a facial portrait or \| \| \| \> other biometric
characteristic of the \| \| \| \> person to whom it relates.\]{.mark} \|
\| \| \| \| \| 5. \[The evidence includes physical security \| \| \| \>
features that make it difficult to copy or \| \| \| \>
reproduce.\]{.mark} \| \| \| \| \| \| 6. \[The evidence includes an
expiration date \| \| \| \> and is unexpired.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 4.3.3.3. Superior Evidence Requirements \| \|
+--------------------------------------------------+-------------------+
\| \[In order to be considered SUPERIOR, identity \| IA-12 c. \| \|
evidence\]{.mark} **SHALL** \[meet *all* the \| \| \| following
requirements:\]{.mark} \| IA-12 (3) \| \| \| \| \| 1. \[The issuing
source of the evidence \| \| \| \> confirmed the claimed identity by \|
\| \| \> following written procedures designed to \| \| \| \> enable it
to have high confidence that the \| \| \| \> source knows the real-life
identity of the \| \| \| \> subject. Such procedures are subject to \|
\| \| \> recurring oversight by regulatory or \| \| \| \> publicly
accountable institutions.\]{.mark} \| \| \| \| \| \| 2. \[The issuing
source visually identified the \| \| \| \> applicant and performed
further checks to \| \| \| \> confirm the existence of that \| \| \| \>
person.\]{.mark} \| \| \| \| \| \| 3. \[The issuing process for the
evidence \| \| \| \> ensured that it was delivered into the \| \| \| \>
possession of the person to whom it \| \| \| \> relates.\]{.mark} \| \|
\| \| \| \| 4. \[The evidence contains at least one \| \| \| \>
reference number that uniquely identifies \| \| \| \> the person to whom
it relates.\]{.mark} \| \| \| \| \| \| 5. \[The evidence contains a
facial portrait or \| \| \| \> other biometric characteristic of the \|
\| \| \> person to whom it relates.\]{.mark} \| \| \| \| \| \| 6. \[The
evidence includes digital information \| \| \| \> that is
cryptographically signed.\]{.mark} \| \| \| \| \| \| 7. \[The evidence
includes physical security \| \| \| \> features that make it difficult
to copy or \| \| \| \> reproduce.\]{.mark} \| \| \| \| \| \| 8. \[The
evidence includes an expiration date \| \| \| \> and is
unexpired.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 4 \| \| \| .3.4. Identity Evidence and Attribute Validation \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[validate all \| IA-12 c., IA-12 \| \|
identity evidence collected to meet evidence \| (3) \| \| collection
requirements and all core attribute \| \| \| information required by the
CSP identity \| \| \| service.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 4.3.4.1. Evidence Validation \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[validate the \| IA-12 c., \| \|
authenticity, accuracy, and currency of \| IA-12(3) \| \| presented
evidence by:\]{.mark} \| \| \| \| \| \| - \[Confirming the evidence is
in the correct \| \| \| \> format and includes complete information \|
\| \| \> for the identity evidence type.\]{.mark} \| \| \| \| \| \| -
\[Confirming the evidence is not counterfeit \| \| \| \> and that it as
not been tampered \| \| \| \> with.\]{.mark} \| \| \| \| \| \| -
\[Confirming any security features.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[validate that the \| IA-12 c., \| \|
evidence is current through confirmation that \| IA-12(3) \| \| its
expiration date has not passed or that \| \| \| evidence without an
expiration date was issued \| \| \| within the previous six (6)
months.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[use the public key \| IA-12 c., \| \|
of the issuing authority of the evidence to \| IA-12(3) \| \| verify
digitally signed evidence or attribute \| \| \| data objects.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| ### 4.3.4.2 Attribute Validation \| \|
+--------------------------------------------------+-------------------+
\| ### 4. \| \| \| 3.4.3. Evidence and Attribute Validation Methods \|
\|
+--------------------------------------------------+-------------------+
\| ### 4.3.4.4. Validation Sources \| \|
+--------------------------------------------------+-------------------+
\| ### 4.4. Identity Verification \| \|
+--------------------------------------------------+-------------------+
\| ### 4.4.1. Identity Verification Methods \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[verify the linkage \| IA-5 a., IA-12
\| \| of the claimed identity to the applicant engaged \| a., IA-12 (2),
\| \| in the identity proofing process through one or \| IA-12 (4) \| \|
more of the following methods, depending on the \| \| \| IAL identity
verification requirements presented \| \| \| in \[Sec. \| \| \|
5\](https://pages.nist.g \| \| \|
ov/800-63-4/sp800-63a.html#ial-section).\]{.mark} \| \| \| \| \| \| -
\[**Enrollment code verification** as \| \| \| \> specified in \[Sec. \|
\| \| \> 5.1.6\](https://pages.nist.g \| \| \|
ov/800-63-4/sp800-63a.html#EnrollCodes).\]{.mark} \| \| \| \| \| \| -
\[**In-person physical comparison**. The CSP \| \| \| \> operator and
applicant interact in person \| \| \| \> for the identity proofing
event. The CSP \| \| \| \> operator performs a physical comparison of \|
\| \| \> the facial portrait presented on identity \| \| \| \> evidence
to the face of the applicant \| \| \| \> engaged in the identity
proofing \| \| \| \> event.\]{.mark} \| \| \| \| \| \| - \[**Remote
(attended and unattended) physical \| \| \| \> facial image
comparison**. The CSP \| \| \| \> operator performs a physical
comparison of \| \| \| \> the facial portrait presented on identity \|
\| \| \> evidence to the facial image of the \| \| \| \> applicant
engaged in the identity proofing \| \| \| \> event. The CSP operator may
interact \| \| \| \> directly with the applicant during some or \| \| \|
\> all of the identity proofing event \| \| \| \> (attended) or may
conduct the comparison \| \| \| \> at a later time (unattended) using a
\| \| \| \> captured video or photograph and the \| \| \| \> uploaded
copy of the evidence. If the \| \| \| \> comparison is performed at a
later time, \| \| \| \> steps are taken to ensure the captured \| \| \|
\> video or photograph was taken from the \| \| \| \> live applicant
present during the identity \| \| \| \> proofing event.\]{.mark} \| \|
\| \| \| \| - \[**Automated biometric comparison**. \| \| \| \>
Biometric system comparison may be \| \| \| \> performed for in-person
or remote identity \| \| \| \> proofing events. The facial portrait, or
\| \| \| \> other biometric characteristic, contained \| \| \| \> on
identity evidence is compared by an \| \| \| \> automated biometric
comparison system to \| \| \| \> the facial image photograph of the live
\| \| \| \> applicant or other biometric live sample \| \| \| \>
submitted by the applicant during the \| \| \| \> identity proofing
event. The automated \| \| \| \> biometric comparison system uses a \|
\| \| \> mathematical algorithm for the \| \| \| \> comparison.\]{.mark}
\| \| \| \| \| \| - \[**Control of a digital account**. An \| \| \| \>
individual is able to demonstrate control \| \| \| \> of a digital
account (e.g., online bank \| \| \| \> account) or signed digital
assertion \| \| \| \> (e.g., verifiable credentials) through the \| \|
\| \> use of authentication or federation \| \| \| \> protocols. This
may be done in person \| \| \| \> through presentation of the credential
to \| \| \| \> a device or reader, but is more likely to \| \| \| \> be
done during remote identity proofing \| \| \| \> sessions.\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| ### 5. Identity Assurance Level Requirements \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1. General Requirements \| \|
+--------------------------------------------------+-------------------+
\| ### 5 \| \| \| .1.1. Identity Service Documentation and Records \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[conduct its \| \| \| operations
according to a practice statement \| \| \| that details all identity
proofing processes as \| \| \| they are implemented to achieve the
defined \| \| \| IAL\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The practice statement\]{.mark} **SHALL** \| IA-1 a. 2 \| \|
\[include, at a minimum:\]{.mark} \| \| \| \| \| \| 1. \[A complete
service description including \| \| \| \> the particular steps the CSP
follows to \| \| \| \> identity proof applicants at each offered \| \|
\| \> assurance level;\]{.mark} \| \| \| \| \| \| 2. \[Types of identity
evidence the CSP accepts \| \| \| \> to meet the evidence strength \| \|
\| \> requirements;\]{.mark} \| \| \| \| \| \| 3. \[If applicable,
alternative ways for an \| \| \| \> individual applicant who does not
possess \| \| \| \> the required identity evidence to complete \| \| \|
\> the identity proofing \| \| \| \>
process\[1\](https://pages.nist.gov/8 \| \| \|
00-63-4/sp800-63a.html#fn:alternatives);\]{.mark} \| \| \| \| \| \| 4.
\[The attributes the CSP considers to be core \| \| \| \> attributes.
Core attributes include the \| \| \| \> minimum set of attributes the
CSP needs to \| \| \| \> perform identity resolution as well as any \|
\| \| \> additional attributes the CSP collects and \| \| \| \>
validates for the purposes of identity \| \| \| \> proofing, fraud
mitigation, complying with \| \| \| \> laws or legal process, or
conveying to \| \| \| \> relying parties (RPs) through attribute \| \|
\| \> assertions;\]{.mark} \| \| \| \| \| \| 5. \[The CSP's policy and
process for dealing \| \| \| \> with identity proofing errors;\]{.mark}
\| \| \| \| \| \| 6. \[The CSP's policy and process for \| \| \| \>
identifying and communicating suspected or \| \| \| \> confirmed
fraudulent accounts to RPs and \| \| \| \> affected
individuals;\]{.mark} \| \| \| \| \| \| 7. \[The CSP's policy for
managing and \| \| \| \> communicating service changes (e.g., \| \| \|
\> change in data sources, integrated \| \| \| \> vendors, or biometric
algorithms) to \| \| \| \> RPs;\]{.mark} \| \| \| \| \| \| 8. \[The
CSP's policy for conducting privacy \| \| \| \> risk assessments,
including the timing of \| \| \| \> its periodic reviews and specific \|
\| \| \> conditions that will trigger an updated \| \| \| \> privacy
risk assessment (see \[Section \| \| \| \> 5.1.2\](https://pages.nist.go
\| \| \| v/800-63-4/sp800-63a.html#PrivacyReqs));\]{.mark} \| \| \| \|
\| \| 9. \[The CSP's policy for conducting assessments \| \| \| \> to
determine potential equity impacts, \| \| \| \> including the timing of
its periodic \| \| \| \> reviews and any specific conditions that \| \|
\| \> will trigger an out-of-cycle review (see \| \| \| \> \[Section \|
\| \| \> 5.1.3\](https://page \| \| \|
s.nist.gov/800-63-4/sp800-63a.html#EquityReqs)); \| \| \| \>
and\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.1.1. Ceasing Operations \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[document its policy \| \| \| and plan
for when it ceases its \| \| \| operations.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[This plan\]{.mark} **SHALL** \[include whether \| \| \| the CSP's
identity service is subject to \| \| \| retention requirements and how
it will protect \| \| \| any sensitive data (including identity \| \| \|
attributes, and information contained in \| \| \| subscriber accounts
and audit logs) during the \| \| \| period of retention.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[At the end of any required retention period, \| \| \| the
CSP\]{.mark} **SHALL** \[be responsible for \| \| \| fully disposing of
or destroying all sensitive \| \| \| data.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.1.2. Fraud Mitigation Measures \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHOULD** \[obtain additional \| \| \| confidence
in identity proofing using fraud \| \| \| mitigation measures (e.g.,
examining the device \| \| \| characteristics of the applicant,
evaluating \| \| \| behavioral characteristics, and checking vital \| \|
\| statistic repositories such as the Death Master \| \| \| File \| \|
\| (\[\[DMF\]\](https://pages.nis \| \| \|
t.gov/800-63-4/sp800-63a.html#ref-dmf)).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[In the event the CSP uses fraud mitigation \| \| \| measures, the
CSP\]{.mark} **SHALL** \[conduct a \| \| \| privacy risk assessment for
these mitigation \| \| \| measures.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Such assessments\]{.mark} **SHALL** \[include any \| \| \| privacy
risk mitigations (e.g., risk acceptance \| \| \| or transfer, limited
retention, use limitations, \| \| \| notice) or other technological
mitigations \| \| \| (e.g., cryptography), and be documented per \| \|
\| these guidelines.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.2. General Privacy Requirements \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.2.1. Privacy Risk Assessment \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[conduct and document \| \| \| a
privacy risk assessment for the processes used \| \| \| for identity
proofing and enrollment\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[At a minimum, the privacy risk \| \| \| assessment\]{.mark}
**SHALL** \[assess the risks \| \| \| associated with:\]{.mark} \| \| \|
\| \| \| - \[Any processing of PII for the purpose of \| \| \| \>
identity proofing and enrollment, \| \| \| \> including identity
attributes, biometrics, \| \| \| \> images, video, scans, or copies of
\| \| \| \> identity evidence;\]{.mark} \| \| \| \| \| \| - \[Any
additional steps the CSP takes to \| \| \| \> verify the identity of an
applicant beyond \| \| \| \> the mandatory requirements specified \| \|
\| \> herein;\]{.mark} \| \| \| \| \| \| - \[Any processing of PII for
purposes outside \| \| \| \> the scope of identity proofing and \| \| \|
\> enrollment except to comply with law or \| \| \| \> legal
process;\]{.mark} \| \| \| \| \| \| - \[The retention schedule for
identity records \| \| \| \> and PII; and,\]{.mark} \| \| \| \| \| \| -
\[Any PII that is processed by a third party \| \| \| \> service on
behalf of the CSP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Based on the results of its privacy risk \| IA-8 (6) \| \|
assessment, the CSP\]{.mark} **SHALL** \[document \| \| \| the measures
it takes to maintain the \| \| \| disassociability, predictability,
manageability, \| \| \| confidentiality, integrity, and availability of
\| \| \| the PII it processes.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[In determining such measures, the CSP\]{.mark} \| IA-1 a. 1. (b) \|
\| **SHALL** \[consult the *NIST Privacy Framework* \| \| \|
\[\[NIST-Privacy\]\](https://pages.ni \| \| \|
st.gov/800-63-4/sp800-63a.html#ref-NIST-Privacy) \| \| \| and NIST
Special Publication \| \| \| \[\[SP800-53\]\](https://pages.nist.go \|
\| \| v/800-63-4/sp800-63a.html#ref-SP800-53).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[re-assess privacy \| \| \| risks and
update its privacy risk assessment any \| \| \| time it makes changes to
its identity service \| \| \| that affect the processing of PII\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[review its privacy \| \| \| risk
assessment periodically, as documented in \| \| \| its practice
statement, to ensure it accurately \| \| \| reflects the current risks
associated with the \| \| \| processing of PII.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[make a summary of \| \| \| its privacy
risk assessment available to any \| \| \| organizations that use its
services. The \| \| \| summary\]{.mark} **SHALL** \[be in sufficient \|
\| \| detail to enable such organizations to do due \| \| \|
dilligence.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### \| \| \| 5.1.2.2. Additional Privacy Protective Measures \| \|
+--------------------------------------------------+-------------------+
\| \[Processing of PII\]{.mark} **SHALL** \[be limited \| \| \| to the
minimum necessary to validate the \| \| \| existence of the claimed
identity, associate the \| \| \| claimed identity with the applicant,
and provide \| \| \| RPs with attributes they may use to make \| \| \|
authorization decisions.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **MAY** \[collect the Social \| IA-12 b. \| \|
Security Number (SSN) as an attribute when \| \| \| necessary for
identity resolution, in accordance \| \| \| with the privacy
requirements in \[Sec. \| \| \| 5.1.2\](https://pages.nist.g \| \| \|
ov/800-63-4/sp800-63a.html#PrivacyReqs).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Additionally, CSPs\]{.mark} **SHALL** \[implement \| \| \| privacy
protective techniques (e.g., \| \| \| transmitting and accepting derived
attribute \| \| \| values rather than full attribute values \| \| \|
themselves) to limit the proliferation and \| \| \| retention of SSN
data. Knowledge of the \| \| \| SSN\]{.mark} **SHALL NOT** \[be
considered \| \| \| identity evidence.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[At the time of collection, the CSP\]{.mark} \| \| \| **SHALL**
\[provide explicit notice to the \| \| \| applicant regarding the
purpose for collecting \| \| \| attributes necessary for identity
proofing, \| \| \| including whether such attributes are voluntary \| \|
\| or mandatory to complete the identity proofing \| \| \| process, the
specific attributes and other \| \| \| sensitive data that the CSP
intends to store in \| \| \| the applicant's subsequent subscriber
account, \| \| \| the consequences for not providing the \| \| \|
attributes, and the details of any records \| \| \| retention
requirement if one is in \| \| \| place.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[provide mechanisms \| \| \| for
redress of applicant complaints and for \| \| \| problems arising from
the identity proofing. \| \| \| These mechanisms\]{.mark} **SHALL** \[be
easy for \| \| \| applicants to find and use. The CSP\]{.mark} \| \| \|
**SHALL** \[assess the mechanisms for their \| \| \| efficacy in
achieving resolution of complaints \| \| \| or problems.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.3. General Equity Requirements \| \|
+--------------------------------------------------+-------------------+
\| \[In support of the goal of improved equity, and \| \| \| as part of
its overall risk assessment process, \| \| \| the CSP\]{.mark} **SHALL**
\[assess the elements \| \| \| of its identity service to identify
processes or \| \| \| technologies that can possibly result in \| \| \|
inequitable access, treatment, or outcomes for \| \| \| members of one
group as compared to others. See \| \| \| \[Sec. \| \| \|
10\](https://pages.nist.g \| \| \|
ov/800-63-4/sp800-63a.html#EquityConsiderations) \| \| \| for a
non-exhaustive list of identity proofing \| \| \| processes and
technologies that may be subject \| \| \| to inequitable access or
outcomes.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When assessing the risk of inequitable access, \| \| \| treatment,
or outcomes, the following \| \| \| requirements apply:\]{.mark} \| \|
\| \| \| \| \[Based on the results of its risk assessment, \| \| \| the
CSP\]{.mark} **SHALL** \[document the measures \| \| \| it takes to
mitigate the possibility of \| \| \| inequitable access, treatment, or
\| \| \| outcomes.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[re-assess the risks \| \| \| to
equitable access, treatment, or outcomes any \| \| \| time it makes
changes to its identity service \| \| \| that affect the processes or \|
\| \| technologies.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[re-assess the risks \| \| \| to
equitable access, treatment, or outcomes \| \| \| periodically to ensure
it accurately reflects \| \| \| the current risks associated with its \|
\| \| service.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL NOT** \[make applicant \| \| \|
participation in these risk assessments \| \| \| mandatory.\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[make the results of \| \| \| its
assessment of risks associated with \| \| \| inequitable access,
treatment, or outcomes, and \| \| \| any associated mitigations,
available to any \| \| \| organizations or individuals that use its \|
\| \| service.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[also make the \| \| \| results of its
assessment publicly \| \| \| available.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.4. General Security Requirements \| \|
+--------------------------------------------------+-------------------+
\| \[Each online transaction within the identity \| \| \| proofing
process, including transactions that \| \| \| involve third
parties,\]{.mark} **SHALL** \[occur \| \| \| over an authenticated
protected channel.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[All PII, in the form of identity attributes, \| \| \| collected as
part of the identity proofing \| \| \| process\]{.mark} **SHALL** \[be
protected to \| \| \| ensure the confidentiality and integrity of the \|
\| \| information.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[assess the risks \| IA-1 a. 1. (b) \|
\| associated with operating its identity service, \| \| \| according to
the NIST risk management framework \| \| \|
\[\[NIST-RMF\]\](https://pages \| \| \|
.nist.gov/800-63-4/sp800-63a.html#ref-NIST-RMF), \| \| \| and apply an
appropriate baseline security \| \| \| controls.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1 \| \| \| .5. Additional Requirements for Federal Agencies \|
\|
+--------------------------------------------------+-------------------+
\| \[The agency\]{.mark} **SHALL** \[consult with \| \| \| their Senior
Agency Official for Privacy (SAOP) \| \| \| to conduct an analysis
determining whether the \| \| \| collection of PII, including
biometrics, to \| \| \| conduct identity proofing triggers Privacy Act
\| \| \| requirements.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The agency\]{.mark} **SHALL** \[consult with \| IA-1 a. 1. (b) \|
\| their SAOP to conduct an analysis determining \| \| \| whether the
collection of PII, including \| \| \| biometrics, to conduct identity
proofing \| \| \| triggers E-Government Act of 2002 \| \| \|
\[\[E-Gov\]\](https://p \| \| \|
ages.nist.gov/800-63-4/sp800-63a.html#ref-E-Gov) \| \| \|
requirements.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The agency\]{.mark} **SHALL** \[publish a System \| IA-1 a.1 (a) \|
\| of Records Notice (SORN) to cover such \| \| \| collection, as
applicable.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The agency\]{.mark} **SHALL** \[publish a Privacy \| IA-1 a.1 (a)
\| \| Impact Assessment (PIA) to cover such \| \| \| collection, as
applicable.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The agency\]{.mark} **SHALL** \[consult with the \| IA-1 a.1 (a) \|
\| senior official, office, or governance body \| \| \| responsible for
diversity, equity, inclusion, \| \| \| and accessibility (DEIA) for
their agency to \| \| \| determine how the identity proofing service \|
\| \| should be designed, resourced, and administered \| \| \| to meet
the needs of all served \| \| \| populations.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The agency\]{.mark} **SHOULD** \[consult with \| \| \| public
affairs and communications professionals \| \| \| within their
organization to determine if a \| \| \| communications or public
awareness strategy \| \| \| should be developed to accompany the
roll-out of \| \| \| any new process, or an update to an existing \| \|
\| process, including requirements associated with \| \| \| identity
proofing. This may include materials \| \| \| detailing information
about how to use the \| \| \| technology associated with the service, a
\| \| \| Frequently Asked Questions (FAQs) page, \| \| \| prerequisites
to participate in the identity \| \| \| proofing process (such as
required evidence), \| \| \| webinars or other live or pre-recorded \|
\| \| information sessions, or other media to support \| \| \| adoption
and provide applicants with a mechanism \| \| \| to communicate
questions, issues, and \| \| \| feedback.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If the agency uses a third-party CSP, the \| IA-8 (2) (b) \| \|
agency\]{.mark} **SHALL** \[be responsible for \| \| \| conducting its
own privacy risk assessments or \| \| \| doing due diligence before
relying on the CSP's \| \| \| privacy risk assessment as part of its PIA
\| \| \| process.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If the agency uses a third-party CSP, the \| IA-8 (2) (b) \| \|
agency\]{.mark} **SHALL** \[incorporate the CSP's \| \| \| assessment of
equity risks into its own \| \| \| assessment of equity risks.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.6. Requirements for Enrollment Codes \| \|
+--------------------------------------------------+-------------------+
\| \[Enrollment codes\]{.mark} **SHALL** \[be sent to \| IA-12 (5) \| \|
a validated address (e.g., postal address, \| \| \| telephone number, or
email address).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The applicant\]{.mark} **SHALL** \[present a \| \| \| valid
enrollment code to complete the identity \| \| \| proofing
process.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Enrollment codes\]{.mark} **SHALL** \[be \| \| \| comprised of one
of the following:\]{.mark} \| \| \| \| \| \| \> \[A random six digit
number generated by an \| \| \| \> approved random number generator with
at least \| \| \| \> 20 bits of entropy;\]{.mark} \| \| \| \> \| \| \|
\> \[A secure link delivered to a uniquely \| \| \| \> identified
address containing an appropriately \| \| \| \> constructed session ID
(at least 64 bits of \| \| \| \> entropy); or\]{.mark} \| \| \| \> \| \|
\| \> \[A machine readable optical label (such as a \| \| \| \> QR code)
that contains a random secret with at \| \| \| \> least 20 bits of
entropy.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Enrollment codes\]{.mark} **SHALL** \[be valid \| \| \| for at
most:\]{.mark} \| \| \| \| \| \| \> \[21 days, when sent to a validated
postal \| \| \| \> address within the contiguous United \| \| \| \>
States;\]{.mark} \| \| \| \> \| \| \| \> \[30 days, when sent to a
validated postal \| \| \| \> address outside the contiguous United \| \|
\| \> States;\]{.mark} \| \| \| \> \| \| \| \> \[10 minutes, when sent
to a validated \| \| \| \> telephone number (SMS or voice); or\]{.mark}
\| \| \| \> \| \| \| \> \[24 hours, when sent to a validated email \| \|
\| \> address.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The enrollment code\]{.mark} **SHALL NOT** \[be \| \| \| used as an
authentication factor.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.7. Req \| \| \| uirements for Notifications of Identity
Proofing \| \|
+--------------------------------------------------+-------------------+
\| **SHALL** \[be sent to a validated address (e.g., \| IA-12 (5) \| \|
postal address, telephone number, or email \| \| \| address) of record.
Whenever possible, \| \| \| CSPs\]{.mark} **SHOULD** \[send
notifications of \| \| \| proofing and enrollment codes to different \|
\| \| validated addresses.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| **SHALL** \[include details about the identity \| \| \| proofing
event, such as the name of the identity \| \| \| service and the date
the identity proofing was \| \| \| completed.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| **SHALL** \[provide clear instructions, including \| \| \| contact
information, on actions to take in the \| \| \| case the recipient
repudiates the identity \| \| \| proofing event.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| **SHOULD** \[provide additional information, such \| \| \| as how the
organization or CSP protects the \| \| \| security and privacy of the
information it \| \| \| collects and any responsibilities the recipient
\| \| \| has as a subscriber of the identity \| \| \| service.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.8. Requirements for Use of Biometrics \| \|
+--------------------------------------------------+-------------------+
\| \[CSPs\]{.mark} **SHALL** \[provide clear, publicly \| \| \|
available information about all uses of \| \| \| biometrics, what
biometric data is collected, \| \| \| how it is stored, and information
on how to \| \| \| remove biometric information consistent with \| \| \|
applicable laws and regulations.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[CSPs\]{.mark} **SHALL** \[collect an explicit \| \| \| biometric
consent from all applicants before \| \| \| collecting biometric
information.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[CSPs\]{.mark} **SHALL** \[store the biometric \| \| \| consent with
the subscriber's account.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[CSPs\]{.mark} **SHALL** \[have a documented, and \| \| \| publicly
available, deletion process and default \| \| \| retention period for
all biometric \| \| \| information.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[CSPs\]{.mark} **SHALL** \[allow individuals to \| \| \| request
deletion of their biometric information \| \| \| at any time, except
where otherwise restricted \| \| \| by regulation, law, or
statute.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[CSPs\]{.mark} **SHALL** \[have all biometric \| \| \| algorithms
tested by an independent entity \| \| \| (e.g., accredited laboratory or
research \| \| \| institution) for performance, including \| \| \|
performance across demographic groups.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Testing of all algorithms\]{.mark} **SHALL** \[be \| IA-1 a. 1. (b)
\| \| consistent with published ISO/IEC standards for \| \| \| the given
modality.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[CSPs\]{.mark} **SHALL** \[meet the minimum \| \| \| performance
thresholds for biometric \| \| \| usage:\]{.mark} \| \| \| \| \| \| \>
\[False match rate: 1:10,000 or better; \| \| \| \> and\]{.mark} \| \|
\| \> \| \| \| \> \[False non-match rate: 1:100 or better\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[CSPs\]{.mark} **SHALL** \[employ biometric \| \| \| technologies
that provide similar performance \| \| \| characteristics for applicants
of different \| \| \| demographic groups (racial background, gender, \|
\| \| ethnicity, etc.). If performance differences \| \| \| across
demographic groups are discovered, \| \| \| CSPs\]{.mark} **SHALL**
\[act expeditiously to \| \| \| provide redress options to affected
individuals \| \| \| and to close performance gaps.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[CSPs\]{.mark} **SHALL** \[make all performance \| \| \| and
operational test results publicly \| \| \| available.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[CSPs\]{.mark} **SHALL** \[assess the performance \| \| \| and
demographic impacts of employed biometric \| \| \| technologies in
conditions substantially similar \| \| \| to the operational environment
and user base of \| \| \| the system. When such assessments include \|
\| \| real-world users, participation by users\]{.mark} \| \| \|
**SHALL** \[be voluntary.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[CSPs\]{.mark} **SHALL** \[make all performance \| \| \| and
operational test results publicly \| \| \| available.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[CSP\]{.mark} **SHALL** \[collect biometrics in \| \| \| such a way
that ensures that the biometric is \| \| \| collected from the
applicant, and not another \| \| \| subject.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When collecting and comparing biometrics \| \| \| remotely, the
CSP\]{.mark} **SHALL** \[implement \| \| \| liveness detection
capabilities to confirm the \| \| \| genuine presence of a live human
being and to \| \| \| mitigate spoofing and impersonation \| \| \|
attempts.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When collecting biometrics in person, the \| \| \| CSP\]{.mark}
**SHALL** \[have the operator view \| \| \| the biometric source (e.g.,
fingers, face) for \| \| \| presence of non-natural materials and
perform \| \| \| such inspections as part of the proofing \| \| \|
process.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### \| \| \| 5.1.9. Trusted Referees and Applicant References \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.9.1. Requirements for Trusted Referees \| \|
+--------------------------------------------------+-------------------+
\| \[CSPs\]{.mark} **SHALL** \[provide the option for \| \| \| the use
of trusted referees for remote identity \| \| \| proofing at IALs 1 and
2.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Where trusted referees are offered, the \| \| \| following
requirements apply to their \| \| \| use:\]{.mark} \| \| \| \| \| \|
\[The CSP\]{.mark} **SHALL** \[establish written \| \| \| policies and
procedures for the use of trusted \| \| \| referees as part of its
practice statement, as \| \| \| specified in \[Sec. \| \| \|
5.1.1\](https://pages.nist. \| \| \|
gov/800-63-4/sp800-63a.html#DocRecReqs).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[train its trusted \| \| \| referees to
make risk-based decisions that allow \| \| \| applicants to be
successfully identity proofed \| \| \| based on their unique
circumstances.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[provide notification \| \| \| to the
public of the availability of trusted \| \| \| referee services and how
such services are \| \| \| obtained.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ## \| \| \| # 5.1.9.2. Requirements for Applicant References \| \|
+--------------------------------------------------+-------------------+
\| \[CSPs\]{.mark} **SHOULD** \[allow the use of \| \| \| applicant
references.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The following requirements apply to the use of \| \| \| applicant
references at any IAL:\]{.mark} \| \| \| \| \| \| \[The CSP\]{.mark}
**SHALL** \[establish written \| \| \| policies and procedures for the
use of applicant \| \| \| references as part of its practice statement,
as \| \| \| specified in \[Sec. \| \| \| 5.1.1\](https://pages.nist. \|
\| \| gov/800-63-4/sp800-63a.html#DocRecReqs).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[identity proof an \| \| \| applicant
reference to the same or higher IAL \| \| \| intended for the
applicant.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If the CSP allows for the use of applicant \| \| \| references,
it\]{.mark} **SHALL** \[provide \| \| \| notification to the public of
the allowability \| \| \| of applicant references and any requirements
for \| \| \| the relationship between the reference and the \| \| \|
applicant.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### \| \| \| 5.1.10. Requirements for Interacting with Minors \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[establish written \| IA-1 a. 2 \| \|
policy and procedures as part of its practice \| \| \| statement for
identity proofing minors who may \| \| \| not be able to meet the
evidence requirements \| \| \| for a given IAL.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When interacting with persons under the age of \| IA-1 a. 1. (b) \|
\| 13, the CSP\]{.mark} **SHALL** \[ensure compliance \| \| \| with the
Children's Online Privacy Protection \| \| \| Act of 1998 \| \| \|
\[\[COPPA\]\](https://pages.nist \| \| \|
.gov/800-63-4/sp800-63a.html#ref-COPPA).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[CSPs\]{.mark} **SHALL** \[support the use of \| \| \| applicant
references when interacting with \| \| \| individuals under the age or
18.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.2. Identity Proofing Process \| \|
+--------------------------------------------------+-------------------+
\| ### 5.3. Identity Assurance Level 1 \| \|
+--------------------------------------------------+-------------------+
\| ### 5.3.1. Automated Attack Prevention \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[implement a means to \| \| \| prevent
automated attacks on the identity \| \| \| proofing process. Acceptable
means include, but \| \| \| are not limited to: bot detection,
mitigation, \| \| \| and management solutions; behavioral analytics; \|
\| \| web application firewall settings; and traffic \| \| \|
analysis.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.3.2. Evid \| \| \| ence and Core Attributes Collection
Requirements \| \|
+--------------------------------------------------+-------------------+
\| ### 5.3.2.1. Evidence Collection \| \|
+--------------------------------------------------+-------------------+
\| \[For remote or in-person identity proofing, the \| IA-12 a., IA-12
\| \| CSP\]{.mark} **SHALL** \[collect *one* of the \| (2) \| \|
following from the applicant:\]{.mark} \| \| \| \| \| \| 1. \[One piece
of SUPERIOR evidence, or\]{.mark} \| \| \| \| \| \| 2. \[One piece of
STRONG evidence and one piece \| \| \| \> of FAIR evidence\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| ### 5.3.2.2. Collection of Additional Attributes \| \|
+--------------------------------------------------+-------------------+
\| \[Validated evidence is the preferred source of \| \| \| identity
attributes. If the presented identity \| \| \| evidence does not provide
all the attributes the \| \| \| CSP considers core attributes,
it\]{.mark} \| \| \| **MAY** \[collect attributes that are \| \| \|
self-asserted by the applicant.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.3.3. Evid \| \| \| ence and Core Attributes Validation
Requirements \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[validate the \| IA-12 c. \| \|
genuineness of each piece of SUPERIOR and STRONG \| \| \| evidence by
*one* of the following:\]{.mark} \| \| \| \| \| \| 1. \[Visual
inspection by trained \| \| \| \> personnel\]{.mark} \| \| \| \| \| \|
2. \[The use of technologies that can confirm \| \| \| \> the integrity
of physical security \| \| \| \> features or detect if the evidence is
\| \| \| \> fraudulent or has been inappropriately \| \| \| \>
modified\]{.mark} \| \| \| \| \| \| 3. \[If present, confirming the
integrity of \| \| \| \> digital security features\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[validate the \| IA-12 c. \| \|
genuineness of each piece of FAIR evidence by \| \| \| visual inspection
by trained personnel\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[validate all core \| IA-12 c. \| \|
attributes by *both*:\]{.mark} \| \| \| \| \| \| 1. \[Validating the
accuracy of attributes (such \| \| \| \> as account or reference number,
name, and \| \| \| \> date of birth) obtained from pieces of \| \| \| \>
evidence by comparison with authoritative \| \| \| \> or credible
sources, and\]{.mark} \| \| \| \| \| \| 2. \[Validating the accuracy of
self-asserted \| \| \| \> attributes by comparison with \| \| \| \>
authoritative or credible sources.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[For added assurance, the CSP\]{.mark} **SHALL** \| \| \| \[evaluate
the core attributes, as validated by \| \| \| various sources, for
overall \| \| \| consistency.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.3.4. Identity Verification Requirements \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[verify the binding \| IA-5 a., IA-8
(2) \| \| of the applicant to the claimed identity by \| (a), IA-12 a.
\| \| *one* of the following:\]{.mark} \| \| \| \| \| \| 1. \[Physical
comparison of the applicant's face \| \| \| \> or biometric comparison
of the facial \| \| \| \> image of the applicant to the facial \| \| \|
\> portrait included on a piece of SUPERIOR \| \| \| \> or STRONG
evidence, or\]{.mark} \| \| \| \| \| \| 2. \[Demonstrated association
with a digital \| \| \| \> account through an AAL1 authentication or \|
\| \| \> an AAL1 and FAL1 federation protocol, \| \| \| \> or\]{.mark}
\| \| \| \| \| \| 3. \[Verification of the applicant's return of a \| \|
\| \> valid enrollment code \[Sec. \| \| \| \>
5.1.6\](https://pages.nist. \| \| \|
gov/800-63-4/sp800-63a.html#EnrollCodes)\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.3.5. Notification of Proofing Requirement \| \|
+--------------------------------------------------+-------------------+
\| \[Upon the successful completion of identity \| \| \| proofing at
IAL1, the CSP\]{.mark} **SHOULD** \| \| \| \[send a notification of
proofing to a validated \| \| \| address for the applicant, as specified
in \[Sec. \| \| \| 5.1.7\](https://pages.nist.gov/ \| \| \|
800-63-4/sp800-63a.html#ProofingNotifs).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.4. Identity Assurance Level 2 \| \|
+--------------------------------------------------+-------------------+
\| ### 5.4.1. Automated Attack Prevention \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[implement a means to \| \| \| prevent
automated attacks on the identity \| \| \| proofing process. Acceptable
means include, but \| \| \| are not limited to: bot detection,
mitigation, \| \| \| and management solutions; behavioral analytics; \|
\| \| web application firewall settings; and traffic \| \| \|
analysis.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.4.2. Evi \| \| \| dence and Core Attribute Collection
Requirements \| \|
+--------------------------------------------------+-------------------+
\| ### 5.4.2.1. Evidence Collection \| \|
+--------------------------------------------------+-------------------+
\| \[For remote or in-person identity proofing, the \| IA-12 c., IA-12
\| \| CSP\]{.mark} **SHALL** \[collect *one* of the \| (2) \| \|
following from the applicant:\]{.mark} \| \| \| \| \| \| 1. \[One piece
of SUPERIOR evidence\]{.mark} \| \| \| \| \| \| 2. \[One piece of STRONG
evidence and one piece \| \| \| \> of FAIR evidence\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.4.2.2. Collection of Attributes \| \|
+--------------------------------------------------+-------------------+
\| \[Validated evidence is the preferred source of \| IA-12 c. \| \|
identity attributes. If the presented identity \| \| \| evidence does
not provide all the attributes the \| \| \| CSP considers core
attributes, it\]{.mark} \| \| \| **MAY** \[collect attributes that are
\| \| \| self-asserted by the applicant.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.4.3. Evid \| \| \| ence and Core Attributes Validation
Requirements \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[validate the \| IA-12 c. \| \|
genuineness of each piece of SUPERIOR and STRONG \| \| \| evidence by
one of the following:\]{.mark} \| \| \| \| \| \| 1. \[Visual inspection
by trained \| \| \| \> personnel\]{.mark} \| \| \| \| \| \| 2. \[The use
of technologies that can confirm \| \| \| \> the integrity of physical
security \| \| \| \> features or detect if the evidence is \| \| \| \>
fraudulent or has been inappropriately \| \| \| \> modified\]{.mark} \|
\| \| \| \| \| 3. \[If present, confirming the integrity of \| \| \| \>
digital security features\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[validate all core \| IA-12 c. \| \|
attributes by:\]{.mark} \| \| \| \| \| \| 1. \[Validating the accuracy
of attributes (such \| \| \| \> as account or reference number, name,
and \| \| \| \> date of birth) obtained from pieces of \| \| \| \>
evidence by comparison with authoritative \| \| \| \> or credible
sources, and\]{.mark} \| \| \| \| \| \| 2. \[validating the accuracy of
self-asserted \| \| \| \> attributes by comparison with \| \| \| \>
authoritative or credible sources\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[For added assurance, the CSP\]{.mark} **SHALL** \| \| \| \[evaluate
the core attributes, as validated by \| \| \| various sources, for
overall \| \| \| consistency.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.4.4. Identity Verification Requirements \| \|
+--------------------------------------------------+-------------------+
\| ### 5.4.4.1. Remote Identity Proofing \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[verify the binding \| IA-5 a., IA-8
(2) \| \| of the applicant to the claimed identity by \| (a), IA-12 a.
\| \| *one* of the following:\]{.mark} \| \| \| \| \| \| 1. \[Comparison
of a collected biometric \| \| \| \> characteristic, such as a facial
image, to \| \| \| \> the associated reference biometric \| \| \| \>
contained on a piece of presented SUPERIOR \| \| \| \> or STRONG
evidence\]{.mark} \| \| \| \| \| \| 2. \[Demonstrated association with a
digital \| \| \| \> account through an AAL2 authentication or \| \| \|
\> an AAL2 and FAL2 federation \| \| \| \> protocol\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.4.4.2. In-person Identity Proofing \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[verify the binding \| IA-5 a., IA-12
a. \| \| of the applicant to the claimed identity by \| \| \| physical
or biometric comparison of the facial \| \| \| image of the applicant to
the facial portrait \| \| \| contained on a piece of presented SUPERIOR
or \| \| \| STRONG evidence.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.4.5. Notification of Proofing Requirement \| \|
+--------------------------------------------------+-------------------+
\| \[Upon the successful completion of identity \| \| \| proofing at
IAL2, the CSP\]{.mark} **SHALL** \| \| \| \[send a notification of
proofing to a validated \| \| \| address for the applicant, as specified
in \[Sec. \| \| \| 5.1.7\](https://pages.nist.gov/ \| \| \|
800-63-4/sp800-63a.html#ProofingNotifs).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.5. Identity Assurance Level 3 \| \|
+--------------------------------------------------+-------------------+
\| ### 5.5.1. Automated Attack Prevention \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[implement a means to \| \| \| prevent
automated attacks on the identity \| \| \| proofing process. Acceptable
means include, but \| \| \| are not limited to: bot detection,
mitigation, \| \| \| and management solutions; behavioral analytics; \|
\| \| web application firewall settings; and traffic \| \| \|
analysis.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.5.2. Evid \| \| \| ence and Core Attributes Collection
Requirements \| \|
+--------------------------------------------------+-------------------+
\| ### 5.5.2.1. Evidence Collection \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[collect evidence \| IA-12 c. \| \|
from the applicant according to *one* of the \| \| \| following
options:\]{.mark} \| \| \| \| \| \| 1. \[Two pieces of SUPERIOR
evidence, or\]{.mark} \| \| \| \| \| \| 2. \[One piece of SUPERIOR
evidence and one \| \| \| \> piece of STRONG evidence, or\]{.mark} \| \|
\| \| \| \| 3. \[Two pieces of STRONG evidence and one piece \| \| \| \>
of FAIR evidence\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.5.2.2. Collection of Attributes \| \|
+--------------------------------------------------+-------------------+
\| \[Validated evidence is the preferred source of \| \| \| identity
attributes. If the presented identity \| \| \| evidence does not provide
all the attributes the \| \| \| CSP considers core attributes,
it\]{.mark} \| \| \| **MAY** \[collect attributes that are \| \| \|
self-asserted by the applicant.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.5.3. Validation Requirements \| \|
+--------------------------------------------------+-------------------+
\| ### 5.5.3.1. Evidence Validation Requirements \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[validate the \| IA-12 c. \| \|
genuineness of each piece of SUPERIOR evidence \| \| \| by confirming
the integrity of its cryptographic \| \| \| security features and
validating any digital \| \| \| signatures.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[validate the \| IA-12 c. \| \|
genuineness of each piece of STRONG evidence by \| \| \| *one* of the
following:\]{.mark} \| \| \| \| \| \| 1. \[Visual inspection by trained
\| \| \| \> personnel\]{.mark} \| \| \| \| \| \| 2. \[The use of
technologies that can confirm \| \| \| \> the integrity of physical
security \| \| \| \> features and detect if the evidence is \| \| \| \>
fraudulent or has been inappropriately \| \| \| \> modified\]{.mark} \|
\| \| \| \| \| 3. \[If present, confirming the integrity of \| \| \| \>
digital security features, including the \| \| \| \> validity of the
issuer's digital \| \| \| \> signature\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### \| \| \| 5.5.3.2. Core Attribute Validation Requirements \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[validate all core \| IA-12 c. \| \|
attributes by *both*:\]{.mark} \| \| \| \| \| \| 1. \[Validating the
accuracy of attributes \| \| \| \> obtained from pieces of evidence or
\| \| \| \> applicant self-assertion by comparison \| \| \| \> with
authoritative or credible \| \| \| \> sources\]{.mark} \| \| \| \| \| \|
2. \[Validating the cryptographic features of \| \| \| \> any presented
digital evidence, as \| \| \| \> described above\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[For added assurance, the CSP\]{.mark} **SHALL** \| \| \| \[evaluate
the core attributes, as validated by \| \| \| various sources, for
overall \| \| \| consistency.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.5.4. Identity Verification Requirements \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[verify the binding \| IA-5 a., IA-8
(2) \| \| of the applicant to the claimed identity by \| (a), IA-12 a.
\| \| *one* of the following:\]{.mark} \| \| \| \| \| \| 1. \[Comparison
of a collected biometric \| \| \| \> characteristic, such as a facial
image, to \| \| \| \> the associated reference biometric \| \| \| \>
characteristic contained on a piece of \| \| \| \> presented SUPERIOR or
STRONG \| \| \| \> evidence\]{.mark} \| \| \| \| \| \| 2. \[Demonstrated
association with a digital \| \| \| \> account through, at a minimum, an
AAL2 \| \| \| \> authentication or an AAL2 and FAL2 \| \| \| \>
federation protocol\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.5.5 Notification of Proofing Requirement \| \|
+--------------------------------------------------+-------------------+
\| \[Upon the successful completion of identity \| \| \| proofing at
IAL3, the CSP\]{.mark} **SHALL** \| \| \| \[send a notification of
proofing to a validated \| \| \| address for the applicant, as specified
in \[Sec. \| \| \| 5.1.7\](https://pages.nist.gov/ \| \| \|
800-63-4/sp800-63a.html#ProofingNotifs).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.5.6. Biometric Collection \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[collect and record a \| \| \|
biometric sample at the time of proofing (e.g., \| \| \| facial image,
fingerprints) for the purposes of \| \| \| non-repudiation and
re-proofing.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.5.7. In-person Proofing Requirements \| \|
+--------------------------------------------------+-------------------+
\| \[In-person proofing at IAL3\]{.mark} **SHALL** \| IA-5 a., IA-12 \|
\| \[be conducted in *one* of two ways:\]{.mark} \| a., IA-12 (2), \| \|
\| IA-12(4)\* Note \| \| - \[An in-person interaction between the \|
that supervised \| \| \> applicant and a CSP operator, or\]{.mark} \|
remote is also \| \| \| allowed. \| \| - \[A remote interaction with the
applicant, \| \| \| \> supervised by an operator, based on the \| \| \|
\> requirements in \[Sec. \| \| \| \> 5.5.8\](https://pages.n \| \| \|
ist.gov/800-63-4/sp800-63a.html#IAL3supervised), \| \| \| \> *IAL3
Supervised Remote Identity \| \| \| \> Proofing*.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Regardless of which of the two methods the CSP \| \| \| employs,
the following requirements apply to \| \| \| identity proofing at
IAL3:\]{.mark} \| \| \| \| \| \| 1. \[The CSP\]{.mark} **SHALL** \[have
the \| \| \| \> operator view the biometric source (e.g., \| \| \| \>
fingers, face) for the presence of any \| \| \| \> non-natural
materials.\]{.mark} \| \| \| \| \| \| 2. \[The CSP\]{.mark} **SHALL**
\[collect \| \| \| \> biometrics in such a way that ensures that \| \|
\| \> the biometric is collected from the \| \| \| \> applicant, and not
another \| \| \| \> subject.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.5.8. Requireme \| \| \| nts for IAL3 Supervised Remote Identity
Proofing \| \|
+--------------------------------------------------+-------------------+
\| \[The following requirements apply to all IAL3 \| IA-12 a., IA-12 \|
\| Supervised Remote Identity Proofing \| (2) \| \| sessions:\]{.mark}
\| \| \| \| \| \| \[The CSP\]{.mark} **SHALL** \[monitor the entire \|
\| \| identity proofing session, and\]{.mark} **SHALL** \| \| \|
\[ensure the applicant is continuously present \| \| \| during the
entire identity proofing session --- \| \| \| for example, by a
continuous high-resolution \| \| \| video transmission of the
applicant.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[have a live operator \| IA-12 a.,
IA-12 \| \| participate remotely with the applicant for the \| (2) \| \|
entirety of the identity proofing \| \| \| session.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[require all actions \| IA-12 a., IA-12
\| \| taken by the applicant during the identity \| (2) \| \| proofing
session to be clearly visible to the \| \| \| remote operator.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[require that all \| IA-12 a., IA-12 \|
\| digital verification of evidence (e.g., via chip \| (2), IA-12 (3) \|
\| or wireless technologies) be performed by \| \| \| integrated
scanners and sensors (e.g., embedded \| \| \| fingerprint
reader).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[require operators to \| IA-12 a.,
IA-12 \| \| have undergone a training program to detect \| (2) \| \|
potential fraud and to properly perform a \| \| \| supervised remote
proofing session.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[employ physical \| IA-12 a., IA-12 \|
\| tamper detection and resistance features \| (2) \| \| appropriate for
the environment in which it is \| \| \| located. For example, a kiosk
located in a \| \| \| restricted area or one where it is monitored by \|
\| \| a trusted individual requires less tamper \| \| \| detection than
one that is located in a \| \| \| semi-public area such as a shopping
mall \| \| \| concourse.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[ensure that all \| IA-12 a., IA-12 \|
\| communications occur over a mutually \| (2) \| \| authenticated
protected channel.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.6. Summary of Requirements \| \|
+--------------------------------------------------+-------------------+
\| ### 6. Subscriber Accounts \| \|
+--------------------------------------------------+-------------------+
\| ### 6.1. Subscriber Accounts \| \|
+--------------------------------------------------+-------------------+
\| \[With the exception of identity proofing for the \| IA-2, IA-4 b.,
\| \| purposes of providing one-time access to an \| IA-4 c., IA-8 \| \|
online service, or when an applicant declines \| \| \| enrollment into
an account, the CSP\]{.mark} \| \| \| **SHALL** \[enroll the applicant
as a subscriber \| \| \| into its identity service and establish a
unique \| \| \| *subscriber account* for that subscriber \| \| \|
following the successful identity proofing of an \| \| \|
applicant.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[assign a unique \| IA-2, IA-4 b., \|
\| identifier to each subscriber account.\]{.mark} \| IA-4 c., IA-8, \|
\| \| IA-8(6) \|
+--------------------------------------------------+-------------------+
\| \[At a minimum the CSP\]{.mark} **SHALL** \[include \| IA-2, IA-4 b.,
\| \| the following information in each subscriber \| IA-4 c., IA-4(9),
\| \| account:\]{.mark} \| IA-8 \| \| \| \| \| - \[Unique identifier
established for the \| \| \| \> subscriber\]{.mark} \| \| \| \| \| \| -
\[A record of the identity proofing steps \| \| \| \> completed for the
subscriber in accordance \| \| \| \> with \[Sec. \| \| \| \>
5.1.1\](https://pages.nist \| \| \|
.gov/800-63-4/sp800-63a.html#DocRecReqs)\]{.mark} \| \| \| \| \| \| -
\[Maximum IAL successfully achieved for the \| \| \| \> identity
proofing of the \| \| \| \> subscriber\]{.mark} \| \| \| \| \| \| -
\[Subscriber consent provided for the \| \| \| \> processing, retention,
or disclosure of \| \| \| \> any personal or sensitive information \| \|
\| \> maintained in the subscriber \| \| \| \> account\]{.mark} \| \| \|
\| \| \| - \[All authenticators currently bound to the \| \| \| \>
subscriber account, whether registered at \| \| \| \> enrollment or
subsequent to \| \| \| \> enrollment\]{.mark} \| \| \| \| \| \| - \[All
attributes that were validated during \| \| \| \> the identity proofing
process or in \| \| \| \> subsequent transactions to support RP \| \| \|
\> access\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[record information \| IA-4(9) \| \| in
the subscriber account that was collected \| \| \| during the identity
proofing process or \| \| \| subsequently updated for each subscriber,
\| \| \| including:\]{.mark} \| \| \| \| \| \| - \[Validated identity
evidence\]{.mark} \| \| \| \| \| \| - \[Validated attribute
information\]{.mark} \| \| \| \| \| \| - \[Attribute information that
was collected \| \| \| \> for enrollment in the CSP identity service \|
\| \| \> that was not validated for identity \| \| \| \> proofing
purposes\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[perform a privacy \| \| \| risk
assessment for the processing, retention, \| \| \| or disclosure of any
personal information \| \| \| maintained in the subscriber account in \|
\| \| accordance with \[Sec. \| \| \| 5.1.2\](https://pages.nist.g \| \|
\| ov/800-63-4/sp800-63a.html#PrivacyReqs).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 6.2. Subscriber Account Access \| \|
+--------------------------------------------------+-------------------+
\| \[In order to meet the requirement that accounts \| \| \| containing
PII be protected by multi-factor \| \| \| authentication (MFA), the
CSP\]{.mark} **SHALL** \| \| \| \[provide a way for subscribers to
access the \| \| \| information in their subscriber account through \|
\| \| AAL2 or AAL3 authentication processes using \| \| \|
authenticators registered to the subscriber \| \| \| account.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[provide the \| \| \| capability for
subscribers to change or update \| \| \| the personal information
contained in their \| \| \| subscriber account.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 6.3. Subscriber Account Lifecycle \| \|
+--------------------------------------------------+-------------------+
\| ### 6.3.1. Subscriber Account Activity \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} SHALL \[establish and maintain a \| \| \| unique
subscriber account for each active \| \| \| subscriber in the CSP
identity system from the \| \| \| time of enrollment to the time of
account \| \| \| closure, as described below.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Until the account is closed, the CSP\]{.mark} \| \| \| SHALL
\[provide for the use of the subscriber \| \| \| account, information
contained in the account, \| \| \| and registered
authenticators.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 6.3.2. Subscriber Account Termination \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[terminate the \| \| \| subscriber
account and discontinue its use when \| \| \| one of the following
occur:\]{.mark} \| \| \| \| \| \| - \[The subscriber elects to terminate
their \| \| \| \> subscriber account with the CSP.\]{.mark} \| \| \| \|
\| \| - \[The CSP determines, following any due \| \| \| \> notice
period and requirements established \| \| \| \> by the CSP, that the
subscriber account \| \| \| \> has been compromised.\]{.mark} \| \| \|
\| \| \| - \[The CSP determines, following any due \| \| \| \> notice
period and requirements established \| \| \| \> by the CSP, that the
subscriber has \| \| \| \> violated the policies or rules for \| \| \|
\> participation in the CSP identity \| \| \| \> service.\]{.mark} \| \|
\| \| \| \| - \[The CSP determines, following any due \| \| \| \> notice
period and requirements established \| \| \| \> by the CSP, that the
subscriber account is \| \| \| \> inactive in accordance with the
policies \| \| \| \> or rules established by the CSP.\]{.mark} \| \| \|
\| \| \| - \[The CSP ceases identity system and services \| \| \| \>
operations.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[delete any personal \| \| \| or
sensitive information from the subscriber \| \| \| account records
following account termination in \| \| \| accordance with the record
retention and \| \| \| disposal requirements.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 7. T \| \| \| hreats and Security Considerations (Informative) \|
\|
+--------------------------------------------------+-------------------+
\| ### \| \| \| 7.1. Threat Mitigation Strategies (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 7.2. Co \| \| \| llaboration with Adjacent Programs (Informative)
\| \|
+--------------------------------------------------+-------------------+
\| ### 8. Privacy Considerations (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 8.1 \| \| \| . Collection and Data Minimization (Informative) \|
\|
+--------------------------------------------------+-------------------+
\| ### 8.1.1. Social Security Numbers (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 8.2. Notice and Consent (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 8.3. Use Limitation (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 8.4. Redress (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 8.5. Privacy Risk Assessment (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 8.6. \| \| \| Agency-Specific Privacy Compliance (Informative) \|
\|
+--------------------------------------------------+-------------------+
\| ### 9. Usability Considerations (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 9.1. General User Considerations Durin \| \| \| g Enrollment and
Identity Proofing (Informative) \| \|
+--------------------------------------------------+-------------------+
\| # \| \| \| ## 9.2. Pre-Enrollment Preparation (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 9. \| \| \| 3. Enrollment and Proofing Session (Informative) \|
\|
+--------------------------------------------------+-------------------+
\| ### 9.4. Post-Enrollment (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 10. Equity Considerations (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 10 \| \| \| .1. Equity and Identity Resolution (Informative) \|
\|
+--------------------------------------------------+-------------------+
\| ### 10 \| \| \| .2. Equity and Identity Validation (Informative) \|
\|
+--------------------------------------------------+-------------------+
\| ### 10.3 \| \| \| . Equity and Identity Verification (Informative) \|
\|
+--------------------------------------------------+-------------------+
\| ## \| \| \| # 10.4. Equity and User Experience (Informative) \| \|
+--------------------------------------------------+-------------------+

# 

## 800-63B-4

+--------------------------------------------------+-------------------+
\| NIST 800-63B Reference \| 800-53 rev 5 \| \| \| control \|
+==================================================+===================+
\| ### 1. Purpose (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 2. Introduction (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ## \| \| \| # 3. Definitions and Abbreviations (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 4. Authentication Assurance Levels \| \|
+--------------------------------------------------+-------------------+
\| \[To satisfy the requirements of a given AAL and \| IA-8 (2) (a) \|
\| be recognized as a subscriber, a \| \| \| claimant\]{.mark} **SHALL**
\[be authenticated \| \| \| with a process whose strength is equal to or
\| \| \| greater than the requirements at that \| \| \| level.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[The result of an authentication process is an \| IA-2, IA-8 \| \|
identifier that\]{.mark} **SHALL** \[be used each \| \| \| time that
subscriber authenticates to that \| \| \| RP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The identifier\]{.mark} **MAY** \[be \| IA-2, IA-8, IA-8 \| \|
pseudonymous.\]{.mark} \| (6) \|
+--------------------------------------------------+-------------------+
\| \[Subscriber identifiers\]{.mark} **SHOULD NOT** \| IA-2, IA-4 d., \|
\| \[be reused for a different subject but\]{.mark} \| IA-8 \| \|
**SHOULD** \[be reused when a previously enrolled \| \| \| subject is
re-enrolled by the CSP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Other attributes that identify the subscriber \| IA-2, IA-8 \| \|
as a unique subject\]{.mark} **MAY** \[also be \| \| \|
provided.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Personal information collected during and \| \| \| subsequent to
identity proofing\]{.mark} **MAY** \| \| \| \[be made available to the
subscriber by the \| \| \| digital identity service.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The release or online availability of any PII \| IA-1 a. 1. (b) \|
\| or other personal information, whether \| \| \| self-asserted or
validated, by federal \| \| \| government agencies requires multi-factor
\| \| \| authentication in accordance with \| \| \|
\[\[EO13681\]\](https://page \| \| \|
s.nist.gov/800-63-4/sp800-63b.html#ref-EO13681). \| \| \| Therefore,
federal government agencies\]{.mark} \| \| \| **SHALL** \[select a
minimum of AAL2 when PII or \| \| \| other personal information is made
available \| \| \| online.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 4.1. Authentication Assurance Level 1 \| \|
+--------------------------------------------------+-------------------+
\| ### 4.1.1. Permitted Authenticator Types \| \|
+--------------------------------------------------+-------------------+
\| \[AAL1 authentication\]{.mark} **SHALL** \[occur by \| IA-8 (2) (a)
\| \| the use of any of the following authenticator \| \| \| types,
which are defined in \[Sec. \| \| \| 5\](https://pages.nis \| \| \|
t.gov/800-63-4/sp800-63b.html#AAL_SEC5):\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ## \| \| \| # 4.1.2. Authenticator and Verifier Requirements \| \|
+--------------------------------------------------+-------------------+
\| \[Cryptographic authenticators used at \| \| \| AAL1\]{.mark}
**SHALL** \[use approved \| \| \| cryptography.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Software-based authenticators that operate \| IA-5 g, IA-5 h. \| \|
within the context of an operating \| \| \| system\]{.mark} **MAY**\[,
where applicable, \| \| \| attempt to detect compromise (e.g., by
malware) \| \| \| of the user endpoint in which they are running \| \|
\| and\]{.mark} **SHOULD NOT** \[complete the \| \| \| operation when
such a compromise is \| \| \| detected.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Communication between the claimant and \| IA-5 g, IA-9 \| \|
verifier\]{.mark} **SHALL** \[be via an \| \| \| authenticated protected
channel to provide \| \| \| confidentiality of the authenticator output
and \| \| \| resistance to adversary-in-the-middle (AitM) \| \| \|
attacks.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Verifiers operated by or on behalf of federal \| IA-1 a.1 (b) \| \|
government agencies at AAL1\]{.mark} **SHALL** \| \| \| \[be validated
to meet the requirements of \| \| \| \[\[FIPS140\]\](https://pages \| \|
\| .nist.gov/800-63-4/sp800-63b.html#ref-FIPS140-2) \| \| \| Level
1.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 4.1.3. Reauthentication \| \|
+--------------------------------------------------+-------------------+
\| \[Periodic reauthentication of subscriber \| IA-11 \| \|
sessions\]{.mark} **SHALL** \[be performed as \| \| \| described in
\[Sec. \| \| \| 7.2\](https://pages.nist.gov/ \| \| \|
800-63-4/sp800-63b.html#sessionreauthn).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[At AAL1, reauthentication of the \| IA-11 \| \| subscriber\]{.mark}
**SHOULD** \[be repeated at \| \| \| least once per 30 days during an
extended usage \| \| \| session, regardless of user activity.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[The session\]{.mark} **SHOULD** \[be terminated \| \| \| (i.e.,
logged out) when this time limit is \| \| \| reached.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 4.1.4. Security Controls \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[employ appropriately \| IA-1 a.1 (b),
\| \| tailored security controls from the baseline \| IA-5 g, IA-5 (6)
\| \| security controls defined in \| \| \|
\[\[SP800-53\]\](https://page \| \| \|
s.nist.gov/800-63-4/sp800-63b.html#ref-SP800-53) \| \| \| or equivalent
federal (e.g., \| \| \| \[\[FEDRAMP\]\](https://page \| \| \|
s.nist.gov/800-63-4/sp800-63b.html#ref-FEDRAMP)) \| \| \| or industry
standard that the organization has \| \| \| determined for the
information systems, \| \| \| applications, and online services that
these \| \| \| guidelines are used to protect.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[ensure that the \| \| \| minimum
assurance-related controls for the \| \| \| appropriate systems, or
equivalent, are \| \| \| satisfied.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 4.1.5. Records Retention Policy \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[comply with its \| IA-1 a.1 (b) \| \|
respective records retention policies in \| \| \| accordance with
applicable laws, regulations, \| \| \| and policies, including any
National Archives \| \| \| and Records Administration (NARA) records \|
\| \| retention schedules that may apply.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If the CSP opts to retain records in the \| \| \| absence of any
mandatory requirements, the \| \| \| CSP\]{.mark} **SHALL** \[conduct a
risk management \| \| \| process, including assessments of privacy and
\| \| \| security risks, to determine how long records \| \| \| should
be retained and\]{.mark} **SHALL** \[inform \| \| \| the subscriber of
that retention policy.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 4.2. Authentication Assurance Level 2 \| \|
+--------------------------------------------------+-------------------+
\| ### 4.2.1. Permitted Authenticator Types \| \|
+--------------------------------------------------+-------------------+
\| \[At AAL2, authentication\]{.mark} **SHALL** \| IA-8 (2) (a) \| \|
\[occur by the use of either a multi-factor \| \| \| authenticator or a
combination of two \| \| \| single-factor authenticators.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When a multi-factor authenticator is used, any \| IA-2(6)(a) \| \|
of the following\]{.mark} **MAY** \[be \| \| \| used:\]{.mark} \| IA-8
(2) (a) \| \| \| \| \| - \[Multi-Factor Out-of-Band Authenticator \| \|
\| \> (\[Sec. \| \| \| \> 5.1.3.4\](https://pages.n \| \| \|
ist.gov/800-63-4/sp800-63b.html#mfooba))\]{.mark} \| \| \| \| \| \| -
\[Multi-Factor OTP Device (\[Sec. \| \| \| \>
5.1.5\](https://pages.nist.gov/ \| \| \|
800-63-4/sp800-63b.html#multifactorOTP))\]{.mark} \| \| \| \| \| \| -
\[Multi-Factor Cryptographic Software (\[Sec. \| \| \| \>
5.1.8\](https://pages \| \| \|
.nist.gov/800-63-4/sp800-63b.html#mfcs))\]{.mark} \| \| \| \| \| \| -
\[Multi-Factor Cryptographic Device (\[Sec. \| \| \| \>
5.1.9\](https://pages \| \| \|
.nist.gov/800-63-4/sp800-63b.html#mfcd))\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When a combination of two single-factor \| IA-2(6)(a) \| \|
authenticators is used, the combination\]{.mark} \| \| \| **SHALL**
\[include a Memorized Secret \| IA-8 (2) (a) \| \| authenticator (\[Sec.
\| \| \| 5.1.1\](https://pa \| \| \|
ges.nist.gov/800-63-4/sp800-63b.html#memsecret)) \| \| \| and one
physical authenticator (i.e., "something \| \| \| you have") from the
following list:\]{.mark} \| \| \| \| \| \| - \[Look-Up Secret (\[Sec. \|
\| \| \> 5.1.2\](https://pages.nist.gov \| \| \|
/800-63-4/sp800-63b.html#lookupsecrets))\]{.mark} \| \| \| \| \| \| -
\[Out-of-Band Device (\[Sec. \| \| \| \> 5.1.3\](https://pages.nist.g \|
\| \| ov/800-63-4/sp800-63b.html#out-of-band))\]{.mark} \| \| \| \| \|
\| - \[Single-Factor OTP Device (\[Sec. \| \| \| \>
5.1.4\](https://pages.nist.gov/8 \| \| \|
00-63-4/sp800-63b.html#singlefactorOTP))\]{.mark} \| \| \| \| \| \| -
\[Single-Factor Cryptographic Software (\[Sec. \| \| \| \>
5.1.6\](https://pages \| \| \|
.nist.gov/800-63-4/sp800-63b.html#sfcs))\]{.mark} \| \| \| \| \| \| -
\[Single-Factor Cryptographic Device (\[Sec. \| \| \| \>
5.1.7\](https://pages \| \| \|
.nist.gov/800-63-4/sp800-63b.html#sfcd))\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ## \| \| \| # 4.2.2. Authenticator and Verifier Requirements \| \|
+--------------------------------------------------+-------------------+
\| \[Cryptographic authenticators used at \| \| \| AAL2\]{.mark}
**SHALL** \[use approved \| \| \| cryptography.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Authenticators procured by federal government \| IA-1 a.1 (b) \| \|
agencies\]{.mark} **SHALL** \[be validated to meet \| \| \| the
requirements of \| IA-5 g, IA-5 h. \| \| \[\[FIPS140\]\](https://pages
\| \| \| .nist.gov/800-63-4/sp800-63b.html#ref-FIPS140-2) \| \| \|
Level 1. Software-based authenticators that \| \| \| operate within the
context of an operating \| \| \| system\]{.mark} **MAY**\[, where
applicable, \| \| \| attempt to detect compromise (e.g., by malware) \|
\| \| of the platform in which they are \| \| \| running.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[They\]{.mark} **SHOULD NOT** \[complete the \| IA-5 g, IA-5 h. \|
\| operation when such a compromise is \| \| \| detected.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[At least one authenticator used at AAL2\]{.mark} \| IA-2(6)(b), \|
\| **SHALL** \[be replay resistant as described in \| IA2(8) \| \|
\[Sec. \| \| \| 5.2.8\](https:/ \| \| \|
/pages.nist.gov/800-63-4/sp800-63b.html#replay). \| \| \| Authentication
at AAL2\]{.mark} **SHOULD** \| \| \| \[demonstrate authentication intent
from at least \| \| \| one authenticator as discussed in \[Sec. \| \| \|
5.2.9\](https://pages.n \| \| \|
ist.gov/800-63-4/sp800-63b.html#intent).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Communication between the claimant and \| IA-5 g \| \|
verifier\]{.mark} **SHALL** \[be via an \| \| \| authenticated protected
channel to provide \| \| \| confidentiality of the authenticator output
and \| \| \| resistance to AitM attacks.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Verifiers operated by or on behalf of federal \| \| \| government
agencies at AAL2\]{.mark} **SHALL** \| \| \| \[be validated to meet the
requirements of \| \| \| \[\[FIPS140\]\](https://pages \| \| \|
.nist.gov/800-63-4/sp800-63b.html#ref-FIPS140-2) \| \| \| Level
1.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When a biometric factor is used in \| \| \| authentication at AAL2,
the performance \| \| \| requirements stated in \[Sec. \| \| \|
5.2.3\](https://pages.nist.go \| \| \|
v/800-63-4/sp800-63b.html#biometric_use)\]{.mark} \| \| \| **SHALL**
\[be met, and the verifier\]{.mark} \| \| \| **SHOULD** \[make a
determination that the \| \| \| biometric sensor and subsequent
processing meet \| \| \| these requirements.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[While phishing resistance as described in \[Sec. \| \| \|
5.2.5\](https://pag \| \| \|
es.nist.gov/800-63-4/sp800-63b.html#verifimpers) \| \| \| is not
generally required for authentication at \| \| \| AAL2,
verifiers\]{.mark} **SHOULD** \[encourage \| \| \| the use of
phishing-resistant authenticators at \| \| \| AAL2 whenever practical
since phishing is a \| \| \| significant threat vector.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 4.2.3. Reauthentication \| \|
+--------------------------------------------------+-------------------+
\| \[Periodic reauthentication of subscriber \| IA-11 \| \|
sessions\]{.mark} **SHALL** \[be performed as \| \| \| described in
\[Sec. \| \| \| 7.2\](https://pages.n \| \| \|
ist.gov/800-63-4/sp800-63b.html#sessionreauthn). \| \| \| At AAL2,
authentication of the \| \| \| subscriber\]{.mark} **SHALL** \[be
repeated at \| \| \| least once per 12 hours during an extended usage \|
\| \| session, regardless of user activity.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Reauthentication of the subscriber\]{.mark} \| IA-11 \| \|
**SHALL** \[be repeated following any period of \| \| \| inactivity
lasting 30 minutes or longer.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The session\]{.mark} **SHALL** \[be terminated \| \| \| (i.e.,
logged out) when either of these time \| \| \| limits is
reached.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Reauthentication of a session that has not yet \| \| \| reached its
time limit\]{.mark} **MAY** \[require \| \| \| only a memorized secret
or a biometric in \| \| \| conjunction with the still-valid session \|
\| \| secret.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The verifier\]{.mark} **MAY** \[prompt the user \| \| \| to cause
activity just before the inactivity \| \| \| timeout.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 4.2.4. Security Controls \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[employ appropriately \| IA-1 a.1 (b),
\| \| tailored security controls from the baseline \| IA-5 g, IA-5 (6)
\| \| security controls defined in \| \| \|
\[\[SP800-53\]\](https://page \| \| \|
s.nist.gov/800-63-4/sp800-63b.html#ref-SP800-53) \| \| \| or equivalent
federal (e.g., \| \| \| \[\[FEDRAMP\]\](https://page \| \| \|
s.nist.gov/800-63-4/sp800-63b.html#ref-FEDRAMP)) \| \| \| or industry
standard that the organization has \| \| \| determined for the
information systems, \| \| \| applications, and online services that
these \| \| \| guidelines are used to protect.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[ensure that the \| \| \| minimum
assurance-related controls for the \| \| \| appropriate systems, or
equivalent, are \| \| \| satisfied.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 4.2.5. Records Retention Policy \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[comply with its \| IA-1 a.1 (b) \| \|
respective records retention policies in \| \| \| accordance with
applicable laws, regulations, \| \| \| and policies, including any NARA
records \| \| \| retention schedules that may apply.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If the CSP opts to retain records in the \| \| \| absence of any
mandatory requirements, the \| \| \| CSP\]{.mark} **SHALL** \[conduct a
risk management \| \| \| process, including assessments of privacy and
\| \| \| security risks to determine how long records \| \| \| should be
retained and\]{.mark} **SHALL** \[inform \| \| \| the subscriber of that
retention policy.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 4.3. Authentication Assurance Level 3 \| \|
+--------------------------------------------------+-------------------+
\| \[AAL3 authentication\]{.mark} **SHALL** \[use a \| IA-8 (2) (a) \|
\| hardware-based authenticator and an \| \| \| authenticator that
provides phishing resistance \| \| \| --- the same device\]{.mark}
**MAY** \[fulfill \| \| \| both these requirements.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[In order to authenticate at AAL3, \| IA-8 (2) (a) \| \|
claimants\]{.mark} **SHALL** \[prove possession \| \| \| and control of
two distinct authentication \| \| \| factors through secure
authentication \| \| \| protocols.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 4.3.1. Permitted Authenticator Types \| \|
+--------------------------------------------------+-------------------+
\| \[AAL3 authentication\]{.mark} **SHALL** \[occur by \| IA-2(6)(a) \|
\| the use of one of a combination of \| \| \| authenticators satisfying
the requirements in \| IA-8 (2) (a) \| \| \[Sec. \| \| \| 4.3\](https \|
\| \| ://pages.nist.gov/800-63-4/sp800-63b.html#aal3). \| \| \| Possible
combinations are:\]{.mark} \| \| \| \| \| \| - \[Multi-Factor
Cryptographic Device (\[Sec. \| \| \| \> 5.1.9\](https://pages \| \| \|
.nist.gov/800-63-4/sp800-63b.html#mfcd))\]{.mark} \| \| \| \| \| \| -
\[Single-Factor Cryptographic Device (\[Sec. \| \| \| \> 5.1.7\](https
\| \| \| ://pages.nist.gov/800-63-4/sp800-63b.html#sfcd)) \| \| \| \>
used in conjunction with a Memorized \| \| \| \> Secret (\[Sec. \| \| \|
\> 5.1.1\](https://pages.nist \| \| \|
.gov/800-63-4/sp800-63b.html#memsecret))\]{.mark} \| \| \| \| \| \| -
\[Multi-Factor OTP device (software or \| \| \| \> hardware) (\[Sec. \|
\| \| \> 5.1.5\](https://pages.n \| \| \|
ist.gov/800-63-4/sp800-63b.html#multifactorOTP)) \| \| \| \> used in
conjunction with a Single-Factor \| \| \| \> Cryptographic Device
(\[Sec. \| \| \| \> 5.1.7\](https://pages \| \| \|
.nist.gov/800-63-4/sp800-63b.html#sfcd))\]{.mark} \| \| \| \| \| \| -
\[Multi-Factor OTP device (hardware only) \| \| \| \> (\[Sec. \| \| \|
\> 5.1.5\](https://pages.n \| \| \|
ist.gov/800-63-4/sp800-63b.html#multifactorOTP)) \| \| \| \> used in
conjunction with a Single-Factor \| \| \| \> Cryptographic Software
(\[Sec. \| \| \| \> 5.1.6\](https://pages \| \| \|
.nist.gov/800-63-4/sp800-63b.html#sfcs))\]{.mark} \| \| \| \| \| \| -
\[Single-Factor OTP device (hardware only) \| \| \| \> (\[Sec. \| \| \|
\> 5.1.4\](https://pages.ni \| \| \|
st.gov/800-63-4/sp800-63b.html#singlefactorOTP)) \| \| \| \> used in
conjunction with a Multi-Factor \| \| \| \> Cryptographic Software
Authenticator \| \| \| \> (\[Sec. \| \| \| \> 5.1.8\](https://pages \|
\| \| .nist.gov/800-63-4/sp800-63b.html#mfcs))\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ## \| \| \| # 4.3.2. Authenticator and Verifier Requirements \| \|
+--------------------------------------------------+-------------------+
\| \[Communication between the claimant and \| IA-5 g \| \|
verifier\]{.mark} **SHALL** \[be via an \| \| \| authenticated protected
channel to provide \| \| \| confidentiality of the authenticator output
and \| \| \| resistance to AitM attacks.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[At least one cryptographic authenticator used \| IA-2(6)(b), \| \|
at AAL3\]{.mark} **SHALL** \[be phishing resistant \| IA2(8) \| \| as
described in \[Sec. \| \| \| 5.2.5\](https://pag \| \| \|
es.nist.gov/800-63-4/sp800-63b.html#verifimpers) \| \| \| and\]{.mark}
**SHALL** \[be replay resistant as \| \| \| described in \[Sec. \| \| \|
5.2.8\](https://pages.n \| \| \|
ist.gov/800-63-4/sp800-63b.html#replay).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[All authentication and reauthentication \| \| \| processes at
AAL3\]{.mark} **SHALL** \[demonstrate \| \| \| authentication intent
from at least one \| \| \| authenticator as described in \[Sec. \| \| \|
5.2.9\](https://pages.n \| \| \|
ist.gov/800-63-4/sp800-63b.html#intent).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Multi-factor authenticators used at \| IA-1 a.1 (b), \| \|
AAL3\]{.mark} **SHALL** \[be hardware \| IA-2(6)(b) \| \| cryptographic
modules validated at \| \| \| \[\[FIPS140\]\](https://pages \| \| \|
.nist.gov/800-63-4/sp800-63b.html#ref-FIPS140-2) \| \| \| Level 2 or
higher overall with at least \| \| \| \[\[FIPS140\]\](https://pages \|
\| \| .nist.gov/800-63-4/sp800-63b.html#ref-FIPS140-2) \| \| \| Level 3
physical security.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Single-factor cryptographic devices used at \| IA-1 a.1 (b), \| \|
AAL3\]{.mark} **SHALL** \[be validated at \| IA-2(6)(b) \| \|
\[\[FIPS140\]\](https://pages \| \| \|
.nist.gov/800-63-4/sp800-63b.html#ref-FIPS140-2) \| \| \| Level 1 or
higher overall with at least \| \| \| \[\[FIPS140\]\](https://pages \|
\| \| .nist.gov/800-63-4/sp800-63b.html#ref-FIPS140-2) \| \| \| Level 3
physical security.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Verifiers at AAL3\]{.mark} **SHALL** \[be \| IA-1 a.1 (b) \| \|
validated at \| \| \| \[\[FIPS140\]\](https://pages \| \| \|
.nist.gov/800-63-4/sp800-63b.html#ref-FIPS140-2) \| \| \| Level 1 or
higher.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Verifiers at AAL3\]{.mark} **SHALL** \[be \| \| \| verifier
compromise resistant as described in \| \| \| \[Sec. \| \| \|
5.2.7\](https://pages.ni \| \| \|
st.gov/800-63-4/sp800-63b.html#verifier-secrets) \| \| \| with respect
to at least one authentication \| \| \| factor.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Hardware-based authenticators and verifiers at \| IA-2(6)(b) \| \|
AAL3\]{.mark} **SHOULD** \[resist relevant \| \| \| side-channel (e.g.,
timing and power-consumption \| \| \| analysis) attacks.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When a biometric factor is used in \| \| \| authentication at AAL3,
the verifier\]{.mark} \| \| \| **SHALL** \[make a determination that the
\| \| \| biometric sensor and subsequent processing meet \| \| \| the
performance requirements stated in \[Sec. \| \| \|
5.2.3\](https://pages.nist.gov \| \| \|
/800-63-4/sp800-63b.html#biometric_use).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 4.3.3. Reauthentication \| \|
+--------------------------------------------------+-------------------+
\| \[Periodic reauthentication of subscriber \| IA-11 \| \|
sessions\]{.mark} **SHALL** \[be performed as \| \| \| described in
\[Sec. \| \| \| 7.2\](https://pages.nist.gov/ \| \| \|
800-63-4/sp800-63b.html#sessionreauthn).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[At AAL3, authentication of the \| IA-11 \| \| subscriber\]{.mark}
**SHALL** \[be repeated at \| \| \| least once per 12 hours during an
extended usage \| \| \| session, regardless of user activity, as \| \|
\| described in \[Sec. \| \| \| 7.2\](https://pages.nist.gov/ \| \| \|
800-63-4/sp800-63b.html#sessionreauthn).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Reauthentication of the subscriber\]{.mark} \| IA-11 \| \|
**SHALL** \[be repeated following any period of \| \| \| inactivity
lasting 15 minutes or longer.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Reauthentication\]{.mark} **SHALL** \[use both \| \| \|
authentication factors.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The session\]{.mark} **SHALL** \[be terminated \| \| \| (i.e.,
logged out) when either of these time \| \| \| limits is
reached.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The verifier\]{.mark} **MAY** \[prompt the user \| \| \| to cause
activity just before the inactivity \| \| \| timeout.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 4.3.4. Security Controls \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[employ appropriately \| IA-1 a.1 (b),
\| \| tailored security controls from the baseline \| IA-5 g, IA-5 (6)
\| \| security controls defined in \| \| \|
\[\[SP800-53\]\](https://page \| \| \|
s.nist.gov/800-63-4/sp800-63b.html#ref-SP800-53) \| \| \| or equivalent
federal (e.g., \| \| \| \[\[FEDRAMP\]\](https://page \| \| \|
s.nist.gov/800-63-4/sp800-63b.html#ref-FEDRAMP)) \| \| \| or industry
standard that the organization has \| \| \| determined for the
information systems, \| \| \| applications, and online services that
these \| \| \| guidelines are used to protect.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[ensure that the \| \| \| minimum
assurance-related controls for the \| \| \| appropriate systems, or
equivalent, are \| \| \| satisfied.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 4.3.5. Records Retention Policy \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[comply with its \| IA-1 a.1 (b) \| \|
respective records retention policies in \| \| \| accordance with
applicable laws, regulations, \| \| \| and policies, including any NARA
records \| \| \| retention schedules that may apply.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If the CSP opts to retain records in the \| \| \| absence of any
mandatory requirements, the \| \| \| CSP\]{.mark} **SHALL** \[conduct a
risk management \| \| \| process, including assessments of privacy and
\| \| \| security risks, to determine how long records \| \| \| should
be retained and\]{.mark} **SHALL** \[inform \| \| \| the subscriber of
that retention policy.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 4.4. Privacy Requirements \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[employ appropriately \| IA-1 a.1 (b)
\| \| tailored privacy controls defined in \| \| \|
\[\[SP800-53\]\](https://page \| \| \|
s.nist.gov/800-63-4/sp800-63b.html#ref-SP800-53) \| \| \| or equivalent
industry standard.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If CSPs process attributes for purposes other \| \| \| than
identity proofing, authentication, or \| \| \| attribute assertions
(collectively "identity \| \| \| service"), related fraud mitigation, or
to \| \| \| comply with law or legal process, CSPs\]{.mark} \| \| \|
**SHALL** \[implement measures to maintain \| \| \| predictability and
manageability commensurate \| \| \| with the privacy risk arising from
the \| \| \| additional processing\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Measures\]{.mark} **MAY** \[include providing \| \| \| clear
notice, obtaining subscriber consent, or \| \| \| enabling selective use
or disclosure of \| \| \| attributes. When CSPs use consent measures, \|
\| \| CSPs\]{.mark} **SHALL NOT** \[make consent for the \| \| \|
additional processing a condition of the \| \| \| identity
service.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Regardless of whether the CSP is an agency or \| IA-1 a.1 (b) \| \|
private sector provider, the following \| \| \| requirements apply to a
federal agency offering \| \| \| or using the authentication
service:\]{.mark} \| \| \| \| \| \| 1. \[The agency\]{.mark} **SHALL**
\[consult with \| \| \| \> their Senior Agency Official for Privacy \|
\| \| \> (SAOP) and conduct an analysis to \| \| \| \> determine whether
the collection of PII to \| \| \| \> issue or maintain authenticators
triggers \| \| \| \> the requirements of the *Privacy Act of \| \| \| \>
1974* \| \| \| \> \[\[PrivacyAct\]\](https://pages. \| \| \|
nist.gov/800-63-4/sp800-63b.html#ref-PrivacyAct) \| \| \| \> (see \[Sec.
\| \| \| \> 9.4\](https://pages.nist.gov/8 \| \| \|
00-63-4/sp800-63b.html#agency-privacy)).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| 2. \[The agency\]{.mark} **SHALL** \[publish a \| \| \| \> System of
Records Notice (SORN) to cover \| \| \| \> such collections, as
applicable.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| 3. \[The agency\]{.mark} **SHALL** \[consult with \| IA-1 a.1 (b) \|
\| \> their SAOP and conduct an analysis to \| \| \| \> determine
whether the collection of PII to \| \| \| \> issue or maintain
authenticators triggers \| \| \| \> the requirements of the
*E-Government Act \| \| \| \> of 2002* \| \| \| \>
\[\[E-Gov\]\](https://pages.nist \| \| \|
.gov/800-63-4/sp800-63b.html#ref-E-Gov).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| 4. \[The agency\]{.mark} **SHALL** \[publish a \| \| \| \> Privacy
Impact Assessment (PIA) to cover \| \| \| \> such collection, as
applicable\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 4.5. Summary of Requirements \| \|
+--------------------------------------------------+-------------------+
\| ### 5. Authenticator and Verifier Requirements \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1. Requirements by Authenticator Type \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.1. Memorized Secrets \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.1.1. Memorized Secret Authenticators \| \|
+--------------------------------------------------+-------------------+
\| \[Memorized secrets\]{.mark} **SHALL** \[be at \| IA-5 (1) (h) \| \|
least 8 characters in length.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Memorized secrets\]{.mark} **SHALL** \[be either \| \| \| chosen by
the subscriber or assigned randomly by \| \| \| the CSP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If the CSP disallows a chosen memorized secret \| IA-5 (1) (a) \|
\| because it is on a blocklist of commonly used, \| \| \| expected, or
compromised values (see \[Sec. \| \| \| 5.1.1.2\](https://pages. \| \|
\| nist.gov/800-63-4/sp800-63b.html#memsecretver)), \| \| \| the
subscriber\]{.mark} **SHALL** \[be required to \| \| \| choose a
different memorized secret.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[No other complexity requirements for memorized \| IA-5 (1) (h) \|
\| secrets\]{.mark} **SHALL** \[be imposed.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.1.2. Memorized Secret Verifiers \| \|
+--------------------------------------------------+-------------------+
\| \[Verifiers\]{.mark} **SHALL** \[require memorized \| IA-5 (1) (h),
\| \| secrets to be at least 8 characters in \| IA-5 (18) \| \|
length.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Verifiers\]{.mark} **SHOULD** \[permit memorized \| IA-5 (1) (h),
\| \| secrets to be at least 64 characters in \| IA-5 (18) \| \|
length.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[All printing ASCII \| IA-5 (1) (h), \| \| \[\[RFC20\]\](https://p
\| IA-5 (1) (f) \| \| ages.nist.gov/800-63-4/sp800-63b.html#ref-RFC20)
\| \| \| characters as well as the space \| \| \| character\]{.mark}
**SHOULD** \[be acceptable in \| \| \| memorized secrets.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Unicode \[\[ISO/ISC \| IA-5 (1) (h), \| \|
10646\]\](https://pages.n \| \| \|
ist.gov/800-63-4/sp800-63b.html#ref-ISOIEC10646) \| \| \|
characters\]{.mark} **SHOULD** \[be accepted as \| \| \| well.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[Verifiers\]{.mark} **MAY** \[make allowances for \| \| \| likely
mistyping, such as removing leading and \| \| \| trailing whitespace
characters prior to \| \| \| verification or allowing verification of \|
\| \| memorized secrets with differing case for the \| \| \| leading
character, provided memorized secrets \| \| \| remain at least 8
characters in length after \| \| \| such processing.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Verifiers\]{.mark} **SHALL** \[verify the entire \| \| \| submitted
memorized secret (i.e., not truncate \| \| \| the secret). For purposes
of the above length \| \| \| requirements, each Unicode code
point\]{.mark} \| \| \| **SHALL** \[be counted as a single \| \| \|
character.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If Unicode characters are accepted in memorized \| IA-5 (1) (f) \|
\| secrets, the verifier\]{.mark} **SHOULD** \[apply \| \| \| the
normalization process for stabilized strings \| \| \| using either the
NFKC or NFKD normalization \| \| \| defined in Sec. 12.1 of *Unicode
Normalization \| \| \| Forms* \| \| \| \[\[UAX15\]\](https://pages.nist
\| \| \| .gov/800-63-4/sp800-63b.html#ref-UAX15).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Subscribers choosing memorized secrets \| IA-5 (1) (f) \| \|
containing Unicode characters\]{.mark} **SHOULD** \| \| \| \[be advised
that some characters may be \| \| \| represented differently by some
endpoints, which \| \| \| can affect their ability to authenticate \| \|
\| successfully.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Memorized secret verifiers\]{.mark} **SHALL \| IA-5 (18) \| \|
NOT** \[permit the subscriber to store a hint \| \| \| that is
accessible to an unauthenticated \| \| \| claimant.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Verifiers\]{.mark} **SHALL NOT** \[prompt \| \| \| subscribers to
use specific types of information \| \| \| (e.g., "What was the name of
your first pet?", a \| \| \| technique known as knowledge-based \| \| \|
authentication (KBA) or security questions) when \| \| \| choosing
memorized secrets.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When processing requests to establish and \| IA-5 (1) (a), \| \|
change memorized secrets, verifiers\]{.mark} \| IA-5 (1) (h), \| \|
**SHALL** \[compare the prospective secrets \| IA-5 (18) \| \| against a
blocklist that contains values known \| \| \| to be commonly used,
expected, or \| \| \| compromised.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[For example, the list\]{.mark} **MAY** \[include, \| IA-5 (1) (a),
\| \| but is not limited to:\]{.mark} \| IA-5 (1) (h), \| \| \| IA-5
(18) \| \| - \[Passwords obtained from previous breach \| \| \| \>
corpuses.\]{.mark} \| \| \| \| \| \| - \[Dictionary words.\]{.mark} \|
\| \| \| \| \| - \[Repetitive or sequential characters (e.g. \| \| \| \>
'aaaaaa', '1234abcd').\]{.mark} \| \| \| \| \| \| - \[Context-specific
words, such as the name of \| \| \| \> the service, the username, and
derivatives \| \| \| \> thereof.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If the chosen secret is found in the blocklist, \| IA-5 (1) (a), \|
\| the CSP or verifier\]{.mark} **SHALL** \[advise \| IA-5 (1) (b) \| \|
the subscriber that they need to select a \| \| \| different
secret,\]{.mark} **SHALL** \[provide the \| IA-5 (18) \| \| reason for
rejection, and\]{.mark} **SHALL** \| \| \| \[require the subscriber to
choose a different \| \| \| value.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Since the blocklist is used to defend against \| IA-5 (1) (a) \| \|
brute-force attacks and unsuccessful attempts \| \| \| are rate limited
as described below, the \| IA-5 (18) \| \| blocklist\]{.mark} **SHOULD**
\[be of a size \| \| \| sufficient to prevent subscribers from choosing
\| \| \| memorized secrets that attackers are likely to \| \| \| guess
before reaching the attempt limit.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Excessively large blocklists\]{.mark} **SHOULD \| IA-5 (1) (a) \|
\| NOT** \[be used because they frustrate \| \| \| subscribers' attempts
to establish an acceptable \| \| \| memorized secret and do not provide
\| \| \| significantly improved security.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Verifiers\]{.mark} **SHALL** \[offer guidance to \| IA-5 (1) (g) \|
\| the subscriber to assist the user in choosing a \| \| \| strong
memorized secret. This is particularly \| \| \| important following the
rejection of a memorized \| \| \| secret on the above list as it
discourages \| \| \| trivial modification of listed (and likely very \|
\| \| weak) memorized secrets \| \| \|
\[\[Blocklists\]\](https://pages.nist.gov/ \| \| \|
800-63-4/sp800-63b.html#ref-blocklists).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Verifiers\]{.mark} **SHALL** \[implement a \| IA-5 (18) \| \|
rate-limiting mechanism that effectively limits \| \| \| the number of
failed authentication attempts \| \| \| that can be made on the
subscriber account as \| \| \| described in \[Sec. \| \| \|
5.2.2\](https://pages.nis \| \| \|
t.gov/800-63-4/sp800-63b.html#throttle).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Verifiers\]{.mark} **SHALL NOT** \[impose other \| IA-5 (1) (h), \|
\| composition rules (e.g., requiring mixtures of \| IA-5 (18) \| \|
different character types or prohibiting \| \| \| consecutively repeated
characters) for memorized \| \| \| secrets\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Verifiers\]{.mark} **SHALL NOT** \[require users \| IA-5 (18) \| \|
to periodically change memorized \| \| \| secrets.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[However, verifiers\]{.mark} **SHALL** \[force a \| IA-5 (18) \| \|
change if there is evidence of compromise of the \| \| \|
authenticator.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Verifiers\]{.mark} **SHALL** \[allow the use of \| IA-5 (18) \| \|
password managers.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[To facilitate their use, verifiers\]{.mark} \| IA-5 (18) \| \|
**SHOULD** \[permit claimants to use "paste" \| \| \| functionality when
entering a memorized secret. \| \| \| Password manangers may increase
the likelihood \| \| \| that users will choose stronger memorized \| \|
\| secrets.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[In order to assist the claimant in successfully \| IA-5 (18) \| \|
entering a memorized secret, the \| \| \| verifier\]{.mark} **SHOULD**
\[offer an option to \| IA-6 \| \| display the secret --- rather than a
series of \| \| \| dots or asterisks --- while it is entered and \| \|
\| until it is submitted to the verifier.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[This allows the claimant to confirm their entry \| IA-5 (18) \| \|
if they are in a location where their screen is \| \| \| unlikely to be
observed. The verifier\]{.mark} \| \| \| **MAY** \[also permit the
claimant's device to \| \| \| display individual entered characters for
a \| \| \| short time after each character is typed to \| \| \| verify
correct entry. This is common on mobile \| \| \| devices.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The verifier\]{.mark} **SHALL** \[use approved \| IA-5 g, IA-5 (1)
\| \| encryption and an authenticated protected \| (c) \| \| channel
when requesting memorized secrets in \| \| \| order to provide
resistance to eavesdropping and \| \| \| adversary-in-the-middle
attacks.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Verifiers\]{.mark} **SHALL** \[store memorized \| IA-5 (18) \| \|
secrets in a form that is resistant to offline \| \| \| attacks\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[Memorized secrets\]{.mark} **SHALL** \[be salted \| IA-5 g, IA-5
(1) \| \| and hashed using a suitable password hashing \| (d) \| \|
scheme. Password hashing schemes take a \| \| \| password, a salt, and a
cost factor as inputs \| IA-5 (18) \| \| and generate a password
hash.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[A function that is both memory-hard and \| IA-5 g, IA-5 (1) \| \|
compute-hard\]{.mark} **SHOULD** \[be used because \| (d) \| \| it
increases the cost of an attack.\]{.mark} \| \| \| \| IA-5 (18) \|
+--------------------------------------------------+-------------------+
\| \[The chosen output length of the password \| IA-5 g, IA-5 (1) \| \|
hashing scheme\]{.mark} **SHOULD** \[be the same \| (d) \| \| as the
length of the underlying one-way function \| \| \| output.\]{.mark} \|
IA-5 (18) \|
+--------------------------------------------------+-------------------+
\| \[The salt\]{.mark} **SHALL** \[be at least 32 bits \| IA-5 g, IA-5
(1) \| \| in length and be chosen arbitrarily so as to \| (d) \| \|
minimize salt value collisions among stored \| \| \| hashes.\]{.mark} \|
IA-5 (18) \|
+--------------------------------------------------+-------------------+
\| \[Both the salt value and the resulting \| IA-5 (18) \| \|
hash\]{.mark} **SHALL** \[be stored for each \| \| \| memorized secret
authenticator.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[For the Password-based Key Derivation Function \| IA-5 (18) \| \| 2
(PBKDF2) \| \| \| \[\[SP800-132\]\](https://pages. \| \| \|
nist.gov/800-63-4/sp800-63b.html#ref-SP800-132), \| \| \| the cost
factor is an iteration count: the more \| \| \| times the PBKDF2
function is iterated, the \| \| \| longer it takes to compute the
password hash. \| \| \| Therefore, the iteration count\]{.mark} \| \| \|
**SHOULD** \[be as large as verification server \| \| \| performance
will allow, typically at least \| \| \| 10,000 iterations.\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| \[In addition, verifiers\]{.mark} **SHOULD** \| IA-5 g, IA-5 (1) \|
\| \[perform an additional iteration of a keyed \| (d) \| \| hashing or
encryption operation using a secret \| \| \| key known only to the
verifier.\]{.mark} \| IA-5 (18) \|
+--------------------------------------------------+-------------------+
\| \[This key value, if used,\]{.mark} **SHALL** \[be \| IA-1 a.1 (b),
\| \| generated by an approved random bit generator \| IA-5 (1) (d) \|
\| \[\[SP800-90Ar1\]\](https://pages.n \| \| \|
ist.gov/800-63-4/sp800-63b.html#ref-SP800-90Ar1) \| IA-5 (18) \| \| and
provide at least the minimum security \| \| \| strength specified in the
latest revision of \| \| \| NIST SP 800-131A, *Transitioning the Use of
\| \| \| Cryptographic Algorithms and Key Lengths* \| \| \|
\[\[SP800-131A\]\](https://pages. \| \| \|
nist.gov/800-63-4/sp800-63b.html#ref-SP800-131A) \| \| \| (112 bits as
of the date of this \| \| \| publication).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The secret key value\]{.mark} **SHALL** \[be \| IA-5 g, IA-5 (1) \|
\| stored separately from the hashed memorized \| (d) \| \| secrets
(e.g., in a specialized device like a \| \| \| hardware security
module).\]{.mark} \| IA-5 (18) \|
+--------------------------------------------------+-------------------+
\| ### 5.1.2. Look-Up Secrets \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.2.1. Look-Up Secret Authenticators \| \|
+--------------------------------------------------+-------------------+
\| \[CSPs creating look-up secret \| IA-1 a.1 (b) \| \|
authenticators\]{.mark} **SHALL** \[use an \| \| \| approved random bit
generator \| IA-5 g \| \| \[\[SP800-90Ar1\]\](https://pages.n \| \| \|
ist.gov/800-63-4/sp800-63b.html#ref-SP800-90Ar1) \| \| \| to generate
the list of secrets and\]{.mark} \| \| \| **SHALL** \[deliver the
authenticator securely to \| \| \| the subscriber. Look-up
secrets\]{.mark} \| \| \| **SHALL** \[have at least 20 bits of \| \| \|
entropy\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Look-up secrets\]{.mark} **MAY** \[be distributed \| \| \| by the
CSP in person, by postal mail to the \| \| \| subscriber's address of
record, or by online \| \| \| distribution. If distributed online,
look-up \| \| \| secrets\]{.mark} **SHALL** \[be distributed over a \|
\| \| secure channel in accordance with the \| \| \| post-enrollment
binding requirements in \[Sec. \| \| \|
6.1.2\](https://pages.nist.gov/80 \| \| \|
0-63-4/sp800-63b.html#post-enroll-bind).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If the authenticator uses look-up secrets \| \| \| sequentially
from a list, the subscriber\]{.mark} \| \| \| **MAY** \[dispose of used
secrets, but only after \| \| \| a successful authentication\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| ### 5.1.2.2. Look-Up Secret Verifiers \| \|
+--------------------------------------------------+-------------------+
\| \[Verifiers of look-up secrets\]{.mark} **SHALL** \| \| \| \[prompt
the claimant for the next secret from \| \| \| their authenticator or
for a specific (e.g., \| \| \| numbered) secret.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[A given secret from an authenticator\]{.mark} \| \| \| **SHALL**
\[be used successfully only once. If \| \| \| the look-up secret is
derived from a grid card, \| \| \| each cell of the grid\]{.mark}
**SHALL** \[be used \| \| \| only once.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Verifiers\]{.mark} **SHALL** \[store look-up \| \| \| secrets in a
form that is resistant to offline \| \| \| attacks.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Look-up secrets having at least 112 bits of \| \| \|
entropy\]{.mark} **SHALL** \[be hashed with an \| \| \| approved one-way
function as described in \[Sec. \| \| \| 5.1.1.2\](https://pages.nist.go
\| \| \| v/800-63-4/sp800-63b.html#memsecretver).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Look-up secrets with fewer than 112 bits of \| \| \|
entropy\]{.mark} **SHALL** \[be salted and hashed \| \| \| using a
suitable password hashing scheme, also \| \| \| described in \[Sec. \|
\| \| 5.1.1.2\](https://pages.nist.go \| \| \|
v/800-63-4/sp800-63b.html#memsecretver).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The salt value\]{.mark} **SHALL** \[be at least \| \| \| 32 bits in
length and arbitrarily chosen so as \| \| \| to minimize salt value
collisions among stored \| \| \| hashes. Both the salt value and the
resulting \| \| \| hash\]{.mark} **SHALL** \[be stored for each \| \| \|
look-up secret.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[For look-up secrets that have less than 64 bits \| \| \| of
entropy, the verifier\]{.mark} **SHALL** \| \| \| \[implement a
rate-limiting mechanism that \| \| \| effectively limits the number of
failed \| \| \| authentication attempts that can be made on the \| \| \|
subscriber account as described in \[Sec. \| \| \|
5.2.2\](https://pages.nis \| \| \|
t.gov/800-63-4/sp800-63b.html#throttle).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The verifier\]{.mark} **SHALL** \[use approved \| IA-5 g \| \|
encryption and an authenticated protected \| \| \| channel when
requesting look-up secrets in order \| \| \| to provide resistance to
eavesdropping and AitM \| \| \| attacks.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.3. Out-of-Band Devices \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.3.1. Out-of-Band Authenticators \| \|
+--------------------------------------------------+-------------------+
\| \[The out-of-band authenticator\]{.mark} **SHALL** \| IA-2(13) \| \|
\[establish a separate channel with the verifier \| \| \| in order to
retrieve the out-of-band secret or \| IA-5 g, IA-5 h. \| \|
authentication request. This channel is \| \| \| considered to be
out-of-band with respect to the \| \| \| primary communication channel
(even if it \| \| \| terminates on the same device) provided the \| \|
\| device does not leak information from one \| \| \| channel to the
other without the authorization \| \| \| of the claimant.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The out-of-band device\]{.mark} **SHOULD** \[be \| IA-2(13) \| \|
uniquely addressable by the verifier.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Communication over the secondary \| IA-2(13) \| \| channel\]{.mark}
**SHALL** \[be encrypted unless \| \| \| sent via the public switched
telephone network \| IA-5 g \| \| (PSTN).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[For additional authenticator requirements \| IA-2(13) \| \|
specific to use of the PSTN for out-of-band \| \| \| authentication, see
\[Sec. \| IA-5 g \| \| 5.1.3.3\](https:// \| \| \|
pages.nist.gov/800-63-4/sp800-63b.html#pstnOOB). \| \| \| Channels or
addresses that do not prove \| \| \| possession of a specific device,
such as \| \| \| voice-over-IP (VOIP) telephone numbers,\]{.mark} \| \|
\| **SHALL NOT** \[be used for out-of-band \| \| \|
authentication\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Email\]{.mark} **SHALL NOT** \[be used for \| IA-2(13) \| \|
out-of-band authentication because it also does \| \| \| not prove
possession of a specific device and is \| IA-5 g \| \| typically
accessed using only a memorized \| \| \| secret.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The out-of-band authenticator\]{.mark} **SHALL** \| IA-2(13) \| \|
\[uniquely authenticate itself in one of the \| \| \| following ways
when communicating with the \| \| \| verifier:\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| - \[Establish an authenticated protected \| IA-2(13) \| \| \> channel
to the verifier using approved \| \| \| \> cryptography. The key
used\]{.mark} \| \| \| \> **SHALL** \[be stored in suitably secure \| \|
\| \> storage available to the authenticator \| \| \| \> application
(e.g., keychain storage, TPM, \| \| \| \> TEE, secure element).\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| - \[Authenticate to a public mobile telephone \| IA-2(13) \| \| \>
network using a SIM card or equivalent \| \| \| \> that uniquely
identifies the device. This \| \| \| \> method\]{.mark} **SHALL** \[only
be used if \| \| \| \> a secret is being sent from the verifier \| \| \|
\> to the out-of-band device via the PSTN \| \| \| \> (SMS or
voice).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If a secret is sent by the verifier to the \| IA-2(13) \| \|
out-of-band device, the device\]{.mark} **SHOULD \| \| \| NOT**
\[display the authentication secret while \| IA-5 g, IA-5 h. \| \| it is
locked by the owner (i.e.,\]{.mark} \| \| \| **SHOULD** \[require the
presentation and \| \| \| verification of a PIN, passcode, or biometric
\| \| \| characteristic to view). However, \| \| \|
authenticators\]{.mark} **SHOULD** \[indicate the \| \| \| receipt of an
authentication secret on a locked \| \| \| device.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If the out-of-band authenticator requests \| IA-2(13) \| \|
approval over the secondary communication \| \| \| channel --- rather
than by the presenting a \| \| \| secret that the claimant transfers to
the \| \| \| primary communication channel --- it\]{.mark} \| \| \|
**SHALL** \[accept transfer of the secret from \| \| \| the primary
channel and send it to the verifier \| \| \| over the secondary channel
to associate the \| \| \| approval with the authentication \| \| \|
transaction.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The claimant\]{.mark} **MAY** \[perform the \| IA-2(13) \| \|
transfer manually or use a technology such as a \| \| \| barcode or QR
code to effect the \| \| \| transfer.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.3.2. Out-of-Band Verifiers \| \|
+--------------------------------------------------+-------------------+
\| \[When the out-of-band authenticator is a secure \| IA-2(13) \| \|
application, such as on a smart phone, the \| \| \| verifier\]{.mark}
**MAY** \[send a push \| \| \| notification to that device.\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| \[The verifier waits for the establishment of an \| IA-2(13) \| \|
authenticated protected channel with the \| \| \| out-of-band
authenticator and verifies its \| \| \| identifying key. The
verifier\]{.mark} **SHALL \| \| \| NOT** \[store the identifying key
itself, \| \| \| but\]{.mark} **SHALL** \[use a verification method \|
\| \| (e.g., an approved hash function or proof of \| \| \| possession
of the identifying key) to uniquely \| \| \| identify the authenticator.
Once authenticated, \| \| \| the verifier transmits the authentication
secret \| \| \| to the authenticator.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Depending on the type of out-of-band \| IA-2(13) \| \|
authenticator, one of the following\]{.mark} \| \| \| **SHALL** \[take
place:\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| - \[Transfer of secret from the secondary to \| IA-2(13) \| \| \> the
primary channel: The verifier\]{.mark} \| \| \| \> **MAY** \[signal the
device containing the \| \| \| \> subscriber's authenticator to indicate
\| \| \| \> readiness to authenticate. It\]{.mark} \| \| \| \> **SHALL**
\[then transmit a random secret \| \| \| \> to the out-of-band
authenticator. The \| \| \| \> verifier\]{.mark} **SHALL** \[then wait
for \| \| \| \> the secret to be returned on the primary \| \| \| \>
communication channel.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| - \[Transfer of secret from the primary to the \| IA-2(13) \| \| \>
secondary channel: The verifier\]{.mark} \| \| \| \> **SHALL** \[display
a random authentication \| \| \| \> secret to the claimant via the
primary \| \| \| \> channel. It\]{.mark} **SHALL** \[then wait \| \| \|
\> for the secret to be returned on the \| \| \| \> secondary channel
from the claimant's \| \| \| \> out-of-band authenticator.\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| \[In all cases, the authentication\]{.mark} \| IA-2(13) \| \|
**SHALL** \[be considered invalid if not \| \| \| completed within 10
minutes.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[In order to provide replay resistance as \| IA2(8), IA-2(13) \| \|
described in \[Sec. \| \| \| 5.2.8\](https:/ \| \| \|
/pages.nist.gov/800-63-4/sp800-63b.html#replay), \| \| \|
verifiers\]{.mark} **SHALL** \[accept a given \| \| \| authentication
secret only once during the \| \| \| validity period.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The verifier\]{.mark} **SHALL** \[generate random \| IA-1 a.1 (b),
\| \| authentication secrets with at least 20 bits of \| IA-2(13) \| \|
entropy using an approved random bit generator \| \| \|
\[\[SP800-90Ar1\]\](https://pages.nist.gov/8 \| \| \|
00-63-4/sp800-63b.html#ref-SP800-90Ar1).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If the authentication secret has less than 64 \| IA-2(13) \| \|
bits of entropy, the verifier\]{.mark} **SHALL** \| \| \| \[implement a
rate-limiting mechanism that \| \| \| effectively limits the number of
failed \| \| \| authentication attempts that can be made on the \| \| \|
subscriber account as described in \[Sec. \| \| \|
5.2.2\](https://pages.nis \| \| \|
t.gov/800-63-4/sp800-63b.html#throttle).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Out-of-band verifiers\]{.mark} **SHALL** \| IA-2(13) \| \|
\[consider all authentication operations to be \| \| \| single-factor
unless the CSP has confirmed that \| \| \| the out-of-band
authentication meets the \| \| \| requirements of \[Sec. \| \| \|
5.1.3.4\](https://pages.n \| \| \|
ist.gov/800-63-4/sp800-63b.html#mfooba).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[This requirement\]{.mark} **MAY** \[be satisfied \| IA-2(13) \| \|
by issuance of the authenticator by the CSP or a \| \| \| trusted third
party or by use of an \| \| \| authentication application known by the
CSP to \| \| \| meet these requirements.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Out-of-band verifiers that send a push \| IA-2(13) \| \|
notification to a subscriber device\]{.mark} \| \| \| **SHOULD**
\[implement a reasonable limit on the \| \| \| rate or total number of
push notifications that \| \| \| will be sent since the last successful
\| \| \| authentication\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.3.3. Authentica \| \| \| tion using the Public Switched
Telephone Network \| \|
+--------------------------------------------------+-------------------+
\| \[Use of the PSTN for out-of-band verification is \| IA-2(13) \| \|
restricted as described in this section and in \| \| \| \[Sec. \| IA-5 g
\| \| 5.2.10\](https://pag \| \| \|
es.nist.gov/800-63-4/sp800-63b.html#restricted). \| \| \| If out-of-band
verification is to be made using \| \| \| the PSTN, the
verifier\]{.mark} **SHALL** \[verify \| \| \| that the pre-registered
telephone number being \| \| \| used is associated with a specific
physical \| \| \| device.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Changing the pre-registered telephone number is \| \| \| considered
to be the binding of a new \| \| \| authenticator and\]{.mark} **SHALL**
\[only occur \| \| \| as described in \[Sec. \| \| \|
6.1.2\](https://pages.nist.gov/80 \| \| \|
0-63-4/sp800-63b.html#post-enroll-bind).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Use of the PSTN to deliver out-of-band \| IA-2(13) \| \|
authentication secrets is potentially not \| \| \| available to some
subscribers in areas with \| \| \| limited telephone coverage
(particularly in \| \| \| areas without mobile phone service). \| \| \|
Accordingly, verifiers\]{.mark} **SHALL** \[ensure \| \| \| that
alternative authenticator types are \| \| \| available to all
subscribers and\]{.mark} \| \| \| **SHOULD** \[remind subscribers of
this \| \| \| limitation of PSTN out-of-band authenticators \| \| \|
prior to binding.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Verifiers\]{.mark} **SHOULD** \[consider risk \| IA-2(13) \| \|
indicators such as device swap, SIM change, \| \| \| number porting, or
other abnormal behavior \| \| \| before using the PSTN to deliver an
out-of-band \| \| \| authentication secret.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### \| \| \| 5.1.3.4. Multi-Factor Out-of-Band Authenticators \| \|
+--------------------------------------------------+-------------------+
\| \[Each use of the authenticator\]{.mark} **SHALL** \| IA-2(13) \| \|
\[require the presentation of the activation \| \| \| factor.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[The use of an activation secret by the \| IA-2(13) \| \|
authenticator\]{.mark} **SHALL** \[meet the \| \| \| requirements of
\[Sec. \| \| \| 5.2.11\](https://pages.ni \| \| \|
st.gov/800-63-4/sp800-63b.html#s-5-2-11)\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[. A biometric activation factor\]{.mark} \| IA-2(13) \| \|
**SHALL** \[meet the requirements of \[Sec. \| \| \|
5.2.3\](https://pages. \| \| \|
nist.gov/800-63-4/sp800-63b.html#biometric_use), \| \| \| including
limits on the number of consecutive \| \| \| authentication
failures.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Submission of the activation factor\]{.mark} \| IA-2(13) \| \|
**SHALL** \[be a separate operation from \| \| \| unlocking of the host
device (e.g., smartphone), \| \| \| although the same activation factor
used to \| \| \| unlock the host device\]{.mark} **MAY** \[be used \| \|
\| in the authentication operation.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The memorized secret or biometric sample used \| IA-2(13) \| \| for
activation --- and any biometric data \| \| \| derived from the
biometric sample such as a \| IA-5 g,IA-5 h. \| \| probe produced
through signal processing \| \| \| ---\]{.mark} **SHALL** \[be zeroized
immediately \| \| \| after the authentication operation.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.4. Single-Factor OTP Device \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.4.1. Single-Factor OTP Authenticators \| \|
+--------------------------------------------------+-------------------+
\| \[The secret key and its algorithm\]{.mark} \| IA-1 a.1 (b) \| \|
**SHALL** \[provide at least the minimum security \| \| \| strength
specified in the latest revision of \| \| \|
\[\[SP800-131A\]\](https://pages. \| \| \|
nist.gov/800-63-4/sp800-63b.html#ref-SP800-131A) \| \| \| (112 bits as
of the date of this \| \| \| publication).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The nonce\]{.mark} **SHALL** \[be of sufficient \| \| \| length to
ensure that it is unique for each \| \| \| operation of the device over
its \| \| \| lifetime.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If a subscriber needs to change the device used \| \| \| for a
software-based OTP authenticator, \| \| \| they\]{.mark} **SHOULD**
\[bind the authenticator \| \| \| application on the new device to their
\| \| \| subscriber account as described in \[Sec. \| \| \|
6.1.2.1\](https://pages.ni \| \| \|
st.gov/800-63-4/sp800-63b.html#post-enroll-bind) \| \| \| and invalidate
the authenticator application \| \| \| that will no longer be
used.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The authenticator output is obtained by using \| \| \| an approved
block cipher or hash function to \| \| \| combine the key and nonce in a
secure manner. \| \| \| The authenticator output\]{.mark} **MAY** \[be
\| \| \| truncated to as few as 6 decimal digits \| \| \| (approximately
20 bits of entropy).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If the nonce used to generate the authenticator \| \| \| output is
based on a real-time clock, the \| \| \| nonce\]{.mark} **SHALL** \[be
changed at least \| \| \| once every 2 minutes\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.4.2. Single-Factor OTP Verifiers \| \|
+--------------------------------------------------+-------------------+
\| \[Single-factor OTP verifiers effectively \| \| \| duplicate the
process of generating the OTP used \| \| \| by the authenticator. As
such, the symmetric \| \| \| keys used by authenticators are also
present in \| \| \| the verifier, and\]{.mark} **SHALL** \[be strongly
\| \| \| protected against unauthorized disclosure by the \| \| \| use
of access controls that limit access to the \| \| \| keys to only those
software components on the \| \| \| device requiring access.\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| \[When a single-factor OTP authenticator is being \| \| \| associated
with a subscriber account, the \| \| \| verifier or associated
CSP\]{.mark} **SHALL** \| \| \| \[use approved cryptography to either
generate \| \| \| and exchange or to obtain the secrets required \| \|
\| to duplicate the authenticator output.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The verifier\]{.mark} **SHALL** \[use approved \| IA-5 g \| \|
encryption and an authenticated protected \| \| \| channel when
collecting the OTP in order to \| \| \| provide resistance to
eavesdropping and AitM \| \| \| attacks\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[In order to provide replay resistance as \| IA2(8) \| \| described
in \[Sec. \| \| \| 5.2.8\](https:/ \| \| \|
/pages.nist.gov/800-63-4/sp800-63b.html#replay), \| \| \|
verifiers\]{.mark} **SHALL** \[accept a given OTP \| \| \| only once
while it is valid.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[In the event a claimant's authentication is \| \| \| denied due to
duplicate use of an OTP, \| \| \| verifiers\]{.mark} **MAY** \[warn the
claimant in \| \| \| case an attacker has been able to authenticate \|
\| \| in advance.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Verifiers\]{.mark} **MAY** \[also warn a \| \| \| subscriber in an
existing session of the \| \| \| attempted duplicate use of an
OTP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Time-based OTPs \| \| \| \[\[TOTP\]\](https://pages.ni \| \| \|
st.gov/800-63-4/sp800-63b.html#ref-totp)\]{.mark} \| \| \| **SHALL**
\[have a defined lifetime that is \| \| \| determined by the expected
clock drift --- in \| \| \| either direction --- of the authenticator
over \| \| \| its lifetime, plus allowance for network delay \| \| \|
and user entry of the OTP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If the authenticator output has less than 64 \| \| \| bits of
entropy, the verifier\]{.mark} **SHALL** \| \| \| \[implement a
rate-limiting mechanism that \| \| \| effectively limits the number of
failed \| \| \| authentication attempts that can be made on the \| \| \|
subscriber account as described in \[Sec. \| \| \|
5.2.2\](https://pages.nis \| \| \|
t.gov/800-63-4/sp800-63b.html#throttle).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.5. Multi-Factor OTP Devices \| \|
+--------------------------------------------------+-------------------+
\| \[The multi-factor OTP device is *something you \| \| \| have*, and
it\]{.mark} **SHALL** \[be activated by \| \| \| either *something you
know* or *something you \| \| \| are*.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.5.1. Multi-Factor OTP Authenticators \| \|
+--------------------------------------------------+-------------------+
\| \[Multi-factor OTP authenticators operate in a \| \| \| similar
manner to single-factor OTP \| \| \| authenticators (see \[Sec. \| \| \|
5.1.4.1\](https:// \| \| \|
pages.nist.gov/800-63-4/sp800-63b.html#sfotpa)), \| \| \| except that
they require the presentation and \| \| \| verification of either a
memorized secret or a \| \| \| biometric characteristic to obtain the
OTP from \| \| \| the authenticator. Each use of the \| \| \|
authenticator\]{.mark} **SHALL** \[require the \| \| \| input of the
activation factor.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The secret key and its algorithm\]{.mark} \| IA-1 a.1 (b) \| \|
**SHALL** \[provide at least the minimum security \| \| \| strength
specified in the latest revision of \| \| \|
\[\[SP800-131A\]\](https://pages. \| \| \|
nist.gov/800-63-4/sp800-63b.html#ref-SP800-131A) \| \| \| (112 bits as
of the date of this \| \| \| publication).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The nonce\]{.mark} **SHALL** \[be of sufficient \| \| \| length to
ensure that it is unique for each \| \| \| operation of the device over
its \| \| \| lifetime\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If a subscriber needs to change the device used \| \| \| for a
software-based OTP authenticator, \| \| \| they\]{.mark} **SHOULD**
\[bind the authenticator \| \| \| application on the new device to their
\| \| \| subscriber account as described in \[Sec. \| \| \|
6.1.2.1\](https://pages.ni \| \| \|
st.gov/800-63-4/sp800-63b.html#post-enroll-bind) \| \| \| and invalidate
the authenticator application \| \| \| that will no longer be
used.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The authenticator output is obtained by using \| \| \| an approved
block cipher or hash function to \| \| \| combine the key and nonce in a
secure manner. \| \| \| The authenticator output\]{.mark} **MAY** \[be
\| \| \| truncated to as few as 6 decimal digits \| \| \| (approximately
20 bits of entropy).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If the nonce used to generate the authenticator \| \| \| output is
based on a real-time clock, the \| \| \| nonce\]{.mark} **SHALL** \[be
changed at least \| \| \| once every 2 minutes.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The use of an activation secret by the \| \| \|
authenticator\]{.mark} **SHALL** \[meet the \| \| \| requirements of
\[Sec. \| \| \| 5.2.11\](https://pages.nis \| \| \|
t.gov/800-63-4/sp800-63b.html#s-5-2-11).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[A biometric activation factor\]{.mark} **SHALL** \| \| \| \[meet
the requirements of \[Sec. \| \| \| 5.2.3\](https://pages. \| \| \|
nist.gov/800-63-4/sp800-63b.html#biometric_use), \| \| \| including
limits on the number of consecutive \| \| \| authentication
failures.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Submission of the activation factor\]{.mark} \| \| \| **SHALL**
\[be a separate operation from \| \| \| unlocking of the host device
(e.g., smartphone), \| \| \| although the same activation factor used to
\| \| \| unlock the host device\]{.mark} **MAY** \[be used \| \| \| in
the authentication operation.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The unencrypted key and activation secret or \| IA-5 g,IA-5 h. \|
\| biometric sample --- and any biometric data \| \| \| derived from the
biometric sample such as a \| \| \| probe produced through signal
processing \| \| \| ---\]{.mark} **SHALL** \[be zeroized immediately \|
\| \| after an OTP has been generated\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.5.2. Multi-Factor OTP Verifiers \| \|
+--------------------------------------------------+-------------------+
\| \[Multi-factor OTP verifiers effectively \| \| \| duplicate the
process of generating the OTP used \| \| \| by the authenticator, but
without the \| \| \| requirement that a second factor be provided. As \|
\| \| such, the symmetric keys used by \| \| \| authenticators\]{.mark}
**SHALL** \[be strongly \| \| \| protected against unauthorized
disclosure by the \| \| \| use of access controls that limit access to
the \| \| \| keys to only those software components on the \| \| \|
device requiring access.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When a multi-factor OTP authenticator is being \| \| \| associated
with a subscriber account, the \| \| \| verifier or associated
CSP\]{.mark} **SHALL** \| \| \| \[use approved cryptography to either
generate \| \| \| and exchange or to obtain the secrets required \| \|
\| to duplicate the authenticator output.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The verifier or CSP\]{.mark} **SHALL** \[also \| \| \| establish,
by issuance of the authentictor, that \| \| \| the authenticator is a
multi-factor device. \| \| \| Otherwise, the verifier\]{.mark} **SHALL**
\[treat \| \| \| the authenticator as single-factor, in \| \| \|
accordance with \[Sec. \| \| \| 5.1.4\](https://pages.nist.gov/8 \| \|
\| 00-63-4/sp800-63b.html#singlefactorOTP).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The verifier\]{.mark} **SHALL** \[use approved \| IA-5 g \| \|
encryption and an authenticated protected \| \| \| channel when
collecting the OTP in order to \| \| \| provide resistance to
eavesdropping and AitM \| \| \| attacks.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[In order to provide replay resistance as \| IA2(8) \| \| described
in \[Sec. \| \| \| 5.2.8\](https:/ \| \| \|
/pages.nist.gov/800-63-4/sp800-63b.html#replay), \| \| \|
verifiers\]{.mark} **SHALL** \[accept a given OTP \| \| \| only once
while it is valid.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[In the event a claimant's authentication is \| \| \| denied due to
duplicate use of an OTP, \| \| \| verifiers\]{.mark} **MAY** \[warn the
claimant in \| \| \| case an attacker has been able to authenticate \|
\| \| in advance.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Verifiers\]{.mark} **MAY** \[also warn a \| \| \| subscriber in an
existing session of the \| \| \| attempted duplicate use of an
OTP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Time-based OTPs \| \| \| \[\[TOTP\]\](https://pages.ni \| \| \|
st.gov/800-63-4/sp800-63b.html#ref-totp)\]{.mark} \| \| \| **SHALL**
\[have a defined lifetime that is \| \| \| determined by the expected
clock drift --- in \| \| \| either direction --- of the authenticator
over \| \| \| its lifetime, plus allowance for network delay \| \| \|
and user entry of the OTP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If the authenticator output or activation \| \| \| secret has less
than 64 bits of entropy, the \| \| \| verifier\]{.mark} **SHALL**
\[implement a \| \| \| rate-limiting mechanism that effectively limits
\| \| \| the number of failed authentication attempts \| \| \| that can
be made on the subscriber account as \| \| \| described in \[Sec. \| \|
\| 5.2.2\](https://pages.nis \| \| \|
t.gov/800-63-4/sp800-63b.html#throttle).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.6. Single-Factor Cryptographic Software \| No requirements \|
\| \| in section \|
+--------------------------------------------------+-------------------+
\| ### 5.1.6.1. Sin \| \| \| gle-Factor Cryptographic Software
Authenticators \| \|
+--------------------------------------------------+-------------------+
\| \[Single-factor cryptographic software \| IA-5 g, IA-5 h. \| \|
authenticators encapsulate one or more secret \| \| \| keys unique to
the authenticator. The \| IA-5 (2) (a) (1) \| \| key\]{.mark} **SHALL**
\[be stored in suitably \| \| \| secure storage available to the
authenticator \| \| \| application (e.g., keychain storage, TPM, or TEE
\| \| \| if available).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The key\]{.mark} **SHALL** \[be strongly \| IA-5 (2) (a) (1) \| \|
protected against unauthorized disclosure by the \| \| \| use of access
controls that limit access to the \| \| \| key to only those software
components on the \| \| \| device requiring access\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[External cryptographic authenticators that do \| \| \| not meet the
requirements of cryptographic \| \| \| hardware authenticators (e.g.,
that have a \| \| \| mechanism to allow private keys to be exported) \|
\| \| are also considered to be cryptographic software \| \| \|
authenticators. They\]{.mark} **SHALL** \[meet the \| \| \| requirements
for connected authenticators in \| \| \| \[Sec. \| \| \|
5.2.12\](https://pages.nis \| \| \|
t.gov/800-63-4/sp800-63b.html#s-5-2-12).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.6.2 \| \| \| . Single-Factor Cryptographic Software Verifiers
\| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.7. Single-Factor Cryptographic Devices \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.7.1. S \| \| \| ingle-Factor Cryptographic Device
Authenticators \| \|
+--------------------------------------------------+-------------------+
\| \[Single-factor cryptographic device \| IA-5 g,IA-5 h. \| \|
authenticators use tamper-resistant hardware to \| \| \| encapsulate one
or more secret keys unique to \| \| \| the authenticator that\]{.mark}
**SHALL NOT** \[be \| \| \| exportable (i.e., cannot be removed from the
\| \| \| device). The authenticator operates using a \| \| \| secret key
to sign a challenge nonce presented \| \| \| through a direct interface
between the \| \| \| authenticator and endpoint (e.g., a USB port or \|
\| \| secured wireless connection) as specified in \| \| \| \[Sec. \| \|
\| 5.2.12\](https://pages.nis \| \| \|
t.gov/800-63-4/sp800-63b.html#s-5-2-12).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The secret key and its algorithm\]{.mark} \| IA-1 a.1 (b) \| \|
**SHALL** \[provide at least the minimum security \| \| \| length
specified in the latest revision of \| \| \|
\[\[SP800-131A\]\](https://pages. \| \| \|
nist.gov/800-63-4/sp800-63b.html#ref-SP800-131A) \| \| \| (112 bits as
of the date of this publication). \| \| \| The challenge nonce\]{.mark}
**SHALL** \[be at \| \| \| least 64 bits in length. Approved \| \| \|
cryptography\]{.mark} **SHALL** \[be used.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[In order to be considered a cryptographic \| IA-5 g, IA-5 h. \| \|
device, an authenticator\]{.mark} **SHALL** \| \| \| \[either be a
separate piece of hardware or an \| IA-5 (2) (a) (1) \| \| embedded
processor or execution environment, \| \| \| e.g., secure element,
trusted execution \| \| \| environment (TEE), trusted platform module \|
\| \| (TPM).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[These hardware authenticators or embedded \| IA-1 a.1 (b), \| \|
processors are separate from a host processor \| \| \| such as the CPU
on a laptop or mobile device. A \| IA-5 g, IA-5 h. \| \| cryptographic
device authenticator\]{.mark} \| \| \| **SHALL** \[be designed so as to
prohibit the \| IA-5 (2) (a) (1) \| \| export of the authentication
secret to the host \| \| \| processor and\]{.mark} **SHALL NOT** \[be
capable \| IA-7 \| \| of being reprogrammed by the host processor so \|
\| \| as to allow the secret to be extracted. The \| \| \| authenticator
is subject to applicable \| \| \| \[\[FIPS140\]\](https://pages \| \| \|
.nist.gov/800-63-4/sp800-63b.html#ref-FIPS140-2) \| \| \| requirements
of the AAL at which the \| \| \| authenticator is being used.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[Single-factor cryptographic device \| IA-5 g,IA-5 h. \| \|
authenticators\]{.mark} **SHOULD** \[require a \| \| \| physical input
(e.g., the pressing of a button) \| \| \| in order to operate.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.7 \| \| \| .2. Single-Factor Cryptographic Device Verifiers
\| \|
+--------------------------------------------------+-------------------+
\| \[The verifier has either symmetric or asymmetric \| IA-5 g \| \|
cryptographic keys corresponding to each \| \| \| authenticator. While
both types of keys\]{.mark} \| \| \| **SHALL** \[be protected against
modification, \| \| \| symmetric keys\]{.mark} **SHALL** \[additionally
\| \| \| be protected against unauthorized disclosure by \| \| \| the
use of access controls that limit access to \| \| \| the key to only
those software components on the \| \| \| device requiring
access.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The challenge nonce\]{.mark} **SHALL** \[be at \| \| \| least 64
bits in length, and\]{.mark} **SHALL** \| \| \| \[either be unique over
the authenticator's \| \| \| lifetime or statistically unique (i.e., \|
\| \| generated using an approved random bit generator \| \| \|
\[\[SP800-90Ar1\]\](https://pages.nist.gov/80 \| \| \|
0-63-4/sp800-63b.html#ref-SP800-90Ar1)).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The verification operation\]{.mark} **SHALL** \| \| \| \[use
approved cryptography\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.8. Multi-Factor Cryptographic Software \| \|
+--------------------------------------------------+-------------------+
\| \[The multi-factor cryptographic software \| IA-7 \| \| authenticator
is *something you have*, and \| \| \| it\]{.mark} **SHALL** \[be
activated by either \| \| \| *something you know* or *something you \|
\| \| are*.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.8.1. Mu \| \| \| lti-Factor Cryptographic Software
Authenticators \| \|
+--------------------------------------------------+-------------------+
\| \[The key\]{.mark} **SHOULD** \[be stored in \| IA-5 g, IA-5 h. \| \|
suitably secure storage available to the \| \| \| authenticator
application (e.g., keychain \| \| \| storage, TPM, TEE).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The key\]{.mark} **SHALL** \[be strongly \| IA-5 g, IA-5 h. \| \|
protected against unauthorized disclosure by the \| \| \| use of access
controls that limit access to the \| IA-5 (2) (a) (1) \| \| key to only
those software components on the \| \| \| device requiring
access.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[External cryptographic authenticators that do \| \| \| not meet the
requirements of cryptographic \| \| \| hardware authenticators (e.g.,
that have a \| \| \| mechanism to allow private keys to be exported) \|
\| \| are also considered to be cryptographic software \| \| \|
authenticators. They\]{.mark} **SHALL** \[meet the \| \| \| requirements
for connected authenticators in \| \| \| \[Sec. \| \| \|
5.2.12\](https://pages.nis \| \| \|
t.gov/800-63-4/sp800-63b.html#s-5-2-12).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Each authentication operation using the \| IA-5 (2) (a) (1) \| \|
authenticator\]{.mark} **SHALL** \[require the \| \| \| input of the
activation factor.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The use of an activation secret by the \| IA-5 (2) (a) (1) \| \|
authenticator\]{.mark} **SHALL** \[meet the \| \| \| requirements of
\[Sec. \| \| \| 5.2.11\](https://pages.nis \| \| \|
t.gov/800-63-4/sp800-63b.html#s-5-2-11).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[A biometric activation factor\]{.mark} **SHALL** \| IA-5 (2) (a)
(1) \| \| \[meet the requirements of \[Sec. \| \| \|
5.2.3\](https://pages. \| \| \|
nist.gov/800-63-4/sp800-63b.html#biometric_use), \| \| \| including
limits on the number of consecutive \| \| \| authentication
failures.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Submission of the activation factor\]{.mark} \| IA-5 (2) (a) (1) \|
\| **SHALL** \[be a separate operation from \| \| \| unlocking of the
host device (e.g., smartphone), \| \| \| although the same activation
factor used to \| \| \| unlock the host device\]{.mark} **MAY** \[be
used \| \| \| in the authentication operation.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The activation secret or biometric sample --- \| IA-5 g, IA-5 h. \|
\| and any biometric data derived from the \| \| \| biometric sample
such as a probe produced \| IA-5 (2) (a) (1) \| \| through signal
processing ---\]{.mark} **SHALL** \| \| \| \[be zeroized immediately
after an authentication \| \| \| transaction has taken place\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| ### 5.1.8. \| \| \| 2. Multi-Factor Cryptographic Software Verifiers
\| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.9. Multi-Factor Cryptographic Devices \| \|
+--------------------------------------------------+-------------------+
\| \[The multi-factor cryptographic device is \| IA-7 \| \| *something
you have*, and it\]{.mark} **SHALL** \| \| \| \[be activated by either
*something you know* or \| \| \| *something you are*.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.9.1. \| \| \| Multi-Factor Cryptographic Device
Authenticators \| \|
+--------------------------------------------------+-------------------+
\| \[Multi-factor cryptographic device \| IA-5 g, IA-5 h. \| \|
authenticators use tamper-resistant hardware to \| \| \| encapsulate one
or more secret keys unique to \| IA-5 (2) (a) (1) \| \| the
authenticator that\]{.mark} **SHALL NOT** \[be \| \| \| exportable
(i.e., cannot be removed from the \| \| \| device).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The secret key\]{.mark} **SHALL** \[be accessible \| IA-5 (2) (a)
(1) \| \| only through the presentation and verification \| \| \| of an
activation factor, either a biometric \| \| \| characteristic or an
activation secret as \| \| \| described in \[Sec. \| \| \|
5.2.11\](https://pages.nis \| \| \|
t.gov/800-63-4/sp800-63b.html#s-5-2-11).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The secret key and its algorithm\]{.mark} \| IA-1 a.1 (b) \| \|
**SHALL** \[provide at least the minimum security \| \| \| length
specified in the latest revision of \| \| \|
\[\[SP800-131A\]\](https://pages. \| \| \|
nist.gov/800-63-4/sp800-63b.html#ref-SP800-131A) \| \| \| (112 bits as
of the date of this \| \| \| publication).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The challenge nonce\]{.mark} **SHALL** \[be at \| \| \| least 64
bits in length. Approved \| \| \| cryptography\]{.mark} **SHALL** \[be
used.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[In order to be considered a cryptographic \| IA-2(6)(a) \| \|
device, an authenticator\]{.mark} **SHALL** \| \| \| \[either be a
separate piece of hardware or an \| IA-5 g, IA-5 h. \| \| embedded
processor or execution environment, \| \| \| e.g., secure element,
trusted execution \| IA-5 (2) (a) (1) \| \| environment (TEE), trusted
platform module \| \| \| (TPM).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[A cryptographic device authenticator\]{.mark} \| IA-1 a.1 (b) \| \|
**SHALL** \[be designed so as to prohibit the \| \| \| export of the
authentication secret to the host \| IA-5 g, IA-5 h. \| \| processor
and\]{.mark} **SHALL NOT** \[be capable \| \| \| of being reprogrammed
by the host processor so \| IA-5 (2) (a) (1) \| \| as to allow the
secret to be extracted. The \| \| \| authenticator is subject to
applicable \| IA-7 \| \| \[\[FIPS140\]\](https://pages \| \| \|
.nist.gov/800-63-4/sp800-63b.html#ref-FIPS140-2) \| \| \| requirements
of the AAL at which the \| \| \| authenticator is being used.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[Each authentication operation using the \| IA-5 (2) (a) (1) \| \|
authenticator\]{.mark} **SHOULD** \[require the \| \| \| input of the
activation factor. Input of the \| \| \| activation factor\]{.mark}
**MAY** \[be \| \| \| accomplished via either direct input on the \| \|
\| device or via a hardware connection (e.g., USB, \| \| \|
smartcard).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The use of an activation secret by the \| \| \|
authenticator\]{.mark} **SHALL** \[meet the \| \| \| requirements of
\[Sec. \| \| \| 5.2.11\](https://pages.nis \| \| \|
t.gov/800-63-4/sp800-63b.html#s-5-2-11).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[A biometric activation factor\]{.mark} **SHALL** \| \| \| \[meet
the requirements of \[Sec. \| \| \| 5.2.3\](https://pages. \| \| \|
nist.gov/800-63-4/sp800-63b.html#biometric_use), \| \| \| including
limits on the number of consecutive \| \| \| authentication
failures.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Submission of the activation factor\]{.mark} \| IA-5 (2) (a) (1) \|
\| **SHALL** \[be a separate operation from \| \| \| unlocking of the
host device (e.g., smartphone), \| \| \| although the same activation
factor used to \| \| \| unlock the host device\]{.mark} **MAY** \[be
used \| \| \| in the authentication operation.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The activation secret or biometric sample --- \| IA-5 g, IA-5 h. \|
\| and any biometric data derived from the \| \| \| biometric sample
such as a probe produced \| IA-5 (2) (a) (1) \| \| through signal
processing ---\]{.mark} **SHALL** \| \| \| \[be zeroized immediately
after an authentication \| \| \| transaction has taken place\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| ### 5.1. \| \| \| 9.2. Multi-Factor Cryptographic Device Verifiers \|
\|
+--------------------------------------------------+-------------------+
\| ### 5.2. General Authenticator Requirements \| \|
+--------------------------------------------------+-------------------+
\| ### 5.2.1. Physical Authenticators \| \|
+--------------------------------------------------+-------------------+
\| \[CSPs\]{.mark} **SHALL** \[provide subscriber \| IA-5 g., IA-5 h.,
\| \| instructions on how to appropriately protect the \| IA-5 (6) \| \|
authenticator against theft or loss.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[provide a mechanism \| IA-5 g., IA-5
h., \| \| to invalidate the authenticator immediately upon \| IA-5 (6)
\| \| notification from subscriber that loss or theft \| \| \| of the
authenticator is suspected.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.2.2. Rate Limiting (Throttling) \| \|
+--------------------------------------------------+-------------------+
\| \[When required by the authenticator type \| \| \| descriptions in
\[Sec. \| \| \| 5.1\](https://page \| \| \|
s.nist.gov/800-63-4/sp800-63b.html#reqauthtype), \| \| \| the
verifier\]{.mark} **SHALL** \[implement \| \| \| controls to protect
against online guessing \| \| \| attacks\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Unless otherwise specified in the description \| \| \| of a given
authenticator, the verifier\]{.mark} \| \| \| **SHALL** \[limit
consecutive failed \| \| \| authentication attempts on a single
subscriber \| \| \| account to no more than 100.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Additional techniques\]{.mark} **MAY** \[be used \| IA-10 \| \| to
reduce the likelihood that an attacker will \| \| \| lock the legitimate
claimant out as a result of \| \| \| rate limiting. These
include:\]{.mark} \| \| \| \| \| \| - \[Requiring the claimant to
complete a \| \| \| \> bot-detection and mitigation challenge \| \| \|
\> before attempting authentication.\]{.mark} \| \| \| \| \| \| -
\[Requiring the claimant to wait following a \| \| \| \> failed attempt
for a period of time that \| \| \| \> increases as the subscriber
account \| \| \| \> approaches its maximum allowance for \| \| \| \>
consecutive failed attempts (e.g., 30 \| \| \| \> seconds up to an
hour).\]{.mark} \| \| \| \| \| \| - \[Accepting only authentication
requests that \| \| \| \> come from an allowlist of IP addresses \| \|
\| \> from which the subscriber has been \| \| \| \> successfully
authenticated before.\]{.mark} \| \| \| \| \| \| - \[Leveraging other
risk-based or adaptive \| \| \| \> authentication techniques to identify
user \| \| \| \> behavior that falls within, or out of, \| \| \| \>
typical norms. These might, for example, \| \| \| \> include use of IP
address, geolocation, \| \| \| \> timing of request patterns, or browser
\| \| \| \> metadata.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When the subscriber successfully authenticates, \| \| \| the
verifier\]{.mark} **SHOULD** \[disregard any \| \| \| previous failed
attempts for that user from the \| \| \| same IP address.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.2.3. Use of Biometrics \| \|
+--------------------------------------------------+-------------------+
\| \[Biometrics\]{.mark} **SHALL** \[be used only as \| \| \| part of
multi-factor authentication with a \| \| \| physical authenticator
(*something you \| \| \| have*).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The biometric system\]{.mark} **SHALL** \[operate \| IA-1 a.1 (b)
\| \| with a false-match rate (FMR) \| \| \|
\[\[ISO/IEC2382-37\]\](https://pages.nis \| IA-5 (12) \| \|
t.gov/800-63-4/sp800-63b.html#ref-ISOIEC2382-37) \| \| \| of 1 in 10000
or better. This FMR\]{.mark} \| \| \| **SHALL** \[be achieved under
conditions of a \| \| \| conformant attack (i.e., zero-effort impostor
\| \| \| attempt) as defined in \| \| \|
\[\[ISO/IEC30107-1\]\](https://pages.nist.gov/800 \| \| \|
-63-4/sp800-63b.html#ref-ISOIEC30107-1).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The biometric system\]{.mark} **SHOULD** \| IA-5 (12) \| \|
\[implement presentation attack detection \| \| \| (PAD).\]{.mark} \|
IA-5 (17) \|
+--------------------------------------------------+-------------------+
\| \[Testing of the biometric system to be \| IA-5 (12) \| \|
deployed\]{.mark} **SHOULD** \[demonstrate at \| \| \| least 90%
resistance to presentation attacks for \| IA-5 (17) \| \| each relevant
attack type (i.e., species), where \| \| \| resistance is defined as the
number of thwarted \| \| \| presentation attacks divided by the number
of \| \| \| trial presentation attacks.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Testing of presentation attack \| IA-1 a.1 (b) \| \|
resistance\]{.mark} **SHALL** \[be in accordance \| \| \| with Clause 12
of \| IA-5 (17) \| \| \[\[ISO/IEC30107-3\]\](https://pages.nist.gov/800
\| \| \| -63-4/sp800-63b.html#ref-ISOIEC30107-3).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The PAD decision\]{.mark} **MAY** \[be made \| IA-5 (17) \| \|
either locally on the claimant's device or by a \| \| \| central
verifier.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The biometric system\]{.mark} **SHALL** \[allow \| IA-5 (12) \| \|
no more than 5 consecutive failed authentication \| \| \| attempts or 10
consecutive failed attempts if \| IA-5 (17) \| \| PAD, meeting the above
requirements, is \| \| \| implemented.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Once that limit has been reached, the biometric \| IA-5 (12) \| \|
authenticator\]{.mark} **SHALL** \[impose a delay \| \| \| of at least
30 seconds before each subsequent \| IA-5 (17) \| \| attempt, with an
overall limit of no more than \| \| \| 50 consecutive failed
authentication attempts \| \| \| (100 if PAD is implemented).\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[Once the overall limit is reached, the \| IA-5 (12) \| \| biometric
system\]{.mark} **SHALL** \[disable \| \| \| biometric user
authentication and offer another \| \| \| factor (e.g., a different
biometric modality or \| \| \| an activation secret if it is not already
a \| \| \| required factor) if such an alternative method \| \| \| is
already available.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The verifier\]{.mark} **SHALL** \[make a \| IA-5 (12) \| \|
determination of sensor and endpoint \| \| \| performance, integrity,
and authenticity. \| \| \| Acceptable methods for making this
determination \| \| \| include, but are not limited to:\]{.mark} \| \|
\| \| \| \| - \[Authentication of the sensor or \| \| \| \>
endpoint\]{.mark} \| \| \| \| \| \| - \[Certification by an approved
accreditation \| \| \| \> authority\]{.mark} \| \| \| \| \| \| -
\[Runtime interrogation of signed metadata \| \| \| \> (e.g.,
attestation) as described in \[Sec. \| \| \| \>
5.2.4\](https://pages.nist.g \| \| \|
ov/800-63-4/sp800-63b.html#attestation).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Biometric comparison can be performed locally \| \| \| on the
claimant's device or at a central \| \| \| verifier. Since the potential
for attacks on a \| \| \| larger scale is greater at central verifiers,
\| \| \| comparison\]{.mark} **SHOULD** \[be performed \| \| \|
locally.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If comparison is performed centrally:\]{.mark} \| \| \| \| \| \| -
\[Use of the biometric as an authentication \| \| \| \> factor\]{.mark}
**SHALL** \[be limited to \| \| \| \> one or more specific devices that
are \| \| \| \> identified using approved cryptography. \| \| \| \>
Since the biometric has not yet unlocked \| \| \| \> the main
authentication key, a separate \| \| \| \> key\]{.mark} **SHALL** \[be
used for \| \| \| \> identifying the device.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| - \[Biometric revocation, referred to as \| IA-1 a.1 (b) \| \| \>
biometric template protection in \| \| \| \| \| \| \>
\[\[ISO/IEC24745\]\](https://pages.nist.gov/8 \| \| \|
00-63-4/sp800-63b.html#ref-ISOIEC24745),\]{.mark} \| \| \| \> **SHALL**
\[be implemented.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| - \[An authenticated protected channel between \| IA-5 g \| \| \>
sensor (or an endpoint containing a sensor \| \| \| \> that resists
sensor replacement) and \| \| \| \> verifier\]{.mark} **SHALL** \[be
established \| \| \| \> and the sensor or endpoint\]{.mark} \| \| \| \>
**SHALL** \[be authenticated prior to \| \| \| \> capturing the
biometric sample from the \| \| \| \> claimant.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| - \[All transmission of biometrics\]{.mark} \| IA-5 g \| \| \>
**SHALL** \[be over an authenticated \| \| \| \> protected
channel.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Biometric samples collected in the \| \| \| authentication
process\]{.mark} **MAY** \[be used \| \| \| to train comparison
algorithms or --- with user \| \| \| consent --- for other research
purposes. \| \| \| Biometric samples and any biometric data derived \|
\| \| from the biometric sample such as a probe \| \| \| produced
through signal processing\]{.mark} \| \| \| **SHALL** \[be zeroized
immediately after any \| \| \| training or research data has been \| \|
\| derived.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Biometric authentication technologies\]{.mark} \| \| \| **SHALL**
\[provide similar performance for \| \| \| subscribers of different
demographic types \| \| \| (racial background, gender, ethnicity, \| \|
\| etc.).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.2.4. Attestation \| \|
+--------------------------------------------------+-------------------+
\| \[An attestation is information conveyed to the \| \| \| verifier
regarding a connected authenticator or \| \| \| the endpoint involved in
an authentication \| \| \| operation. Information conveyed by \| \| \|
attestation\]{.mark} **MAY** \[include, but is not \| \| \| limited
to:\]{.mark} \| \| \| \| \| \| - \[The provenance (e.g., manufacturer or
\| \| \| \> supplier certification), health, and \| \| \| \> integrity
of the authenticator and \| \| \| \> endpoint\]{.mark} \| \| \| \| \|
\| - \[Security features of the \| \| \| \> authenticator\]{.mark} \| \|
\| \| \| \| - \[Security and performance characteristics of \| \| \| \>
biometric sensors\]{.mark} \| \| \| \| \| \| - \[Sensor
modality\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If this attestation is signed, it\]{.mark} \| IA-1 a.1 (b) \| \|
**SHALL** \[be signed using a digital signature \| \| \| that provides
at least the minimum security \| \| \| strength specified in the latest
revision of \| \| \| \[\[SP800-131A\]\](https://pages. \| \| \|
nist.gov/800-63-4/sp800-63b.html#ref-SP800-131A) \| \| \| (112 bits as
of the date of this \| \| \| publication).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Attestation information\]{.mark} **MAY** \[be \| \| \| used as part
of a verifier's risk-based \| \| \| authentication decision.\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| ### 5.2 \| \| \| .5. Phishing (Verifier Impersonation) Resistance \|
\|
+--------------------------------------------------+-------------------+
\| \[Approved cryptographic algorithms\]{.mark} \| \| \| **SHALL** \[be
used to establish phishing \| \| \| resistance where it is
required.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Keys used for this purpose\]{.mark} **SHALL** \| IA-1 a.1 (b) \| \|
\[provide at least the minimum security strength \| \| \| specified in
the latest revision of \| \| \| \[\[SP800-131A\]\](https://pages. \| \|
\| nist.gov/800-63-4/sp800-63b.html#ref-SP800-131A) \| \| \| (112 bits
as of the date of this \| \| \| publication).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Authenticators that involve the manual entry of \| IA-2(13) \| \|
an authenticator output, such as out-of-band and \| \| \| OTP
authenticators,\]{.mark} **SHALL NOT** \[be \| \| \| considered phishing
resistant because the manual \| \| \| entry does not bind the
authenticator output to \| \| \| the specific session being
authenticated. In an \| \| \| AitM attack, an impostor verifier could
replay \| \| \| the OTP authenticator output to the verifier and \| \|
\| successfully authenticate.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.2.5.1. Channel Binding \| \|
+--------------------------------------------------+-------------------+
\| \[An authentication protocol with channel \| \| \| binding\]{.mark}
**SHALL** \[establish an \| \| \| authenticated protected channel with
the \| \| \| verifier\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[It\]{.mark} **SHALL** \[then strongly and \| \| \| irreversibly
bind a channel identifier that was \| \| \| negotiated in establishing
the authenticated \| \| \| protected channel to the authenticator output
\| \| \| (e.g., by signing the two values together using \| \| \| a
private key controlled by the claimant for \| \| \| which the public key
is known to the \| \| \| verifier).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The verifier\]{.mark} **SHALL** \[validate the \| \| \| signature
or other information used to prove \| \| \| phishing resistance. This
prevents an impostor \| \| \| verifier, even one that has obtained a \|
\| \| certificate representing the actual verifier, \| \| \| from
successfully relaying that authentication \| \| \| on a different
authenticated protected \| \| \| channel.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.2.5.2. Verifier Name Binding \| \|
+--------------------------------------------------+-------------------+
\| \[An authentication protocol with authenticator \| IA-9 \| \| name
binding\]{.mark} **SHALL** \[establish an \| \| \| authenticated
protected channel with the \| \| \| verifier. It\]{.mark} **SHALL**
\[then generate an \| \| \| authenticator output that is
cryptographically \| \| \| bound to a verifier identifier that is \| \|
\| authenticated as part of the protocol.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[In the case of domain name system (DNS) \| IA-9 \| \| identifiers,
the verifier identifier\]{.mark} \| \| \| **SHALL** \[be either the
authenticated hostname \| \| \| of the verifier or a parent domain that
is at \| \| \| least one level below the public suffix \| \| \|
\[\[PSL\]\](https:/ \| \| \|
/pages.nist.gov/800-63-4/sp800-63b.html#ref-psl) \| \| \| associated
with that hostname.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The binding\]{.mark} **MAY** \[be established by \| IA-9 \| \|
choosing an associated authenticator secret, by \| \| \| deriving an
authenticator secret using the \| \| \| verifier identifier, by
cryptographically \| \| \| signing the authenticator output with the \|
\| \| verifier identifier, or similar \| \| \| cryptographically secure
means.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.2.6. Verifier-CSP Communications \| \|
+--------------------------------------------------+-------------------+
\| \[In situations where the verifier and CSP are \| \| \| separate
entities (as shown by the dotted line \| \| \| in \| \| \|
\[\[SP800-63\]\](http \| \| \|
s://pages.nist.gov/800-63-4/sp800-63.html#fig-1) \| \| \| Figure 1),
communications between the verifier \| \| \| and CSP\]{.mark} **SHALL**
\[occur through a \| \| \| mutually authenticated secure channel (such
as a \| \| \| client-authenticated TLS connection) using \| \| \|
approved cryptography.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.2.7. Verifier Compromise Resistance \| \|
+--------------------------------------------------+-------------------+
\| \[To be considered verifier compromise resistant, \| IA-8 (4) \| \|
public keys stored by the verifier\]{.mark} \| \| \| **SHALL** \[be
associated with the use of \| \| \| approved cryptographic algorithms
and\]{.mark} \| \| \| **SHALL** \[provide at least the minimum security
\| \| \| strength specified in the latest revision of \| \| \|
\[\[SP800-131A\]\](https://pages. \| \| \|
nist.gov/800-63-4/sp800-63b.html#ref-SP800-131A) \| \| \| (112 bits as
of the date of this \| \| \| publication).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Other verifier compromise resistant \| IA-8 (4) \| \|
secrets\]{.mark} **SHALL** \[use approved hash \| \| \| algorithms and
the underlying secrets\]{.mark} \| \| \| **SHALL** \[have at least the
minimum security \| \| \| strength specified in the latest revision of
\| \| \| \[\[SP800-131A\]\](https://pages. \| \| \|
nist.gov/800-63-4/sp800-63b.html#ref-SP800-131A) \| \| \| (112 bits as
of the date of this \| \| \| publication).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Secrets (e.g., memorized secrets) having lower \| \| \|
complexity\]{.mark} **SHALL NOT** \[be considered \| \| \| verifier
compromise resistant when hashed \| \| \| because of the potential to
defeat the hashing \| \| \| process through dictionary lookup or
exhaustive \| \| \| search.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.2.8. Replay Resistance \| \|
+--------------------------------------------------+-------------------+
\| ### 5.2.9. Authentication Intent \| \|
+--------------------------------------------------+-------------------+
\| \[The goal of authentication intent is to make it \| \| \| more
difficult for authenticators (e.g., \| \| \| multi-factor cryptographic
devices) to be used \| \| \| without the subject's knowledge, such as by
\| \| \| malware on the endpoint. Authentication \| \| \|
intent\]{.mark} **SHALL** \[be established by the \| \| \| authenticator
itself, although multi-factor \| \| \| cryptographic devices\]{.mark}
**MAY** \[establish \| \| \| intent by reentry of the activation factor
for \| \| \| the authenticator.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Authentication intent\]{.mark} **MAY** \[be \| \| \| established in
a number of ways. Authentication \| \| \| processes that require the
subject's \| \| \| intervention establish intent (e.g., a claimant \| \|
\| entering an authenticator output from an OTP \| \| \| device).
Cryptographic devices that require user \| \| \| action for each
authentication or \| \| \| reauthentication operation also establish
intent \| \| \| (e.g., pushing a button or reinsertion).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.2.10. Restricted Authenticators \| \|
+--------------------------------------------------+-------------------+
\| \[It is the responsibility of the organization to \| \| \| determine
the level of acceptable risk for their \| \| \| systems and associated
data and to define any \| \| \| methods for mitigating excessive risks.
If at \| \| \| any time the organization determines that the \| \| \|
risk to any party is unacceptable, then that \| \| \|
authenticator\]{.mark} **SHALL NOT** \[be \| \| \| used.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Further, the risk of an authentication error is \| \| \| typically
borne by multiple parties, including \| \| \| the implementing
organization, organizations \| \| \| that rely on the authentication
decision, and \| \| \| the subscriber. Because the subscriber may be \|
\| \| exposed to additional risk when an organization \| \| \| accepts a
restricted authenticator and that the \| \| \| subscriber may have a
limited understanding of \| \| \| and ability to control that risk, the
\| \| \| CSP\]{.mark} **SHALL**\[:\]{.mark} \| \| \| \| \| \| 1. \[Offer
subscribers at least one alternate \| \| \| \> authenticator that is not
restricted and \| \| \| \> can be used to authenticate at the \| \| \|
\> required AAL.\]{.mark} \| \| \| \| \| \| 2. \[Provide meaningful
notice to subscribers \| \| \| \> regarding the security risks of the \|
\| \| \> restricted authenticator and availability \| \| \| \> of
alternatives that are not \| \| \| \> restricted.\]{.mark} \| \| \| \|
\| \| 3. \[Address any additional risk to subscribers \| \| \| \> in its
risk assessment.\]{.mark} \| \| \| \| \| \| 4. \[Develop a migration
plan for the \| \| \| \> possibility that the restricted \| \| \| \>
authenticator is no longer acceptable at \| \| \| \> some point in the
future and include this \| \| \| \> migration plan in its \[digital
identity \| \| \| \> acceptance \| \| \| \> statement\](https://page \|
\| \| s.nist.gov/800-63-4/sp800-63.html#daps).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.2.11. Activation Secrets \| \|
+--------------------------------------------------+-------------------+
\| \[Memorized secrets that are used as an \| IA-5 g. \| \| activation
factor for a multi-factor \| \| \| authenticator are referred to as
*activation \| \| \| secrets*. An activation secret is used to \| \| \|
decrypt a stored secret key used for \| \| \| authentication or is
compared against a locally \| \| \| held stored verifier to provide
access to the \| \| \| authentication key. In either of these cases, \|
\| \| the activation secret\]{.mark} **SHALL** \[remain \| \| \| within
the authenticator and its associated user \| \| \| endpoint.\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| \[Authenticators making use of activation \| IA-5 g. \| \|
secrets\]{.mark} **SHALL** \[require the secrets \| \| \| to be at least
6 characters in length.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Activation secrets\]{.mark} **MAY** \[be entirely \| \| \| numeric
(i.e., a PIN). If alphanumeric (rather \| \| \| than only numeric)
values are permitted, all \| \| \| printing ASCII \| \| \|
\[\[RFC20\]\](https://p \| \| \|
ages.nist.gov/800-63-4/sp800-63b.html#ref-RFC20) \| \| \| characters as
well as the space \| \| \| character\]{.mark} **SHOULD** \[be \| \| \|
accepted.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Unicode \[\[ISO/ISC \| \| \| 10646\]\](https://pages.n \| \| \|
ist.gov/800-63-4/sp800-63b.html#ref-ISOIEC10646) \| \| \|
characters\]{.mark} **SHOULD** \[be accepted as \| \| \| well in
alphanumeric secrets.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The authenticator\]{.mark} **SHALL** \[contain a \| IA-5 g. \| \|
blocklist (either specified by specific values \| \| \| or by an
algorithm) of at least 10 commonly used \| \| \| activation values
and\]{.mark} **SHALL** \[prevent \| \| \| their use as activation
secrets.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The authenticator or verifier\]{.mark} **SHALL** \| IA-5 g. \| \|
\[implement a retry-limiting mechanism that \| \| \| effectively limits
the number of consecutive \| \| \| failed activation attempts using the
\| \| \| authenticator to ten (10).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If the entry of an incorrect activation secret \| \| \| causes the
authenticator to generate an invalid \| \| \| output that is sent to the
central verifier, \| \| \| rate limiting\]{.mark} **MAY** \[be
implemented by \| \| \| the verifier\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[. In all other cases, rate limiting\]{.mark} \| IA-5 g. \| \|
**SHALL** \[be implemented in the \| \| \| authenticator.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Once the limit of 10 attempts is reached, the \| IA-5 g. \| \|
authenticator\]{.mark} **SHALL** \[be disabled and \| \| \| a different
authenticator\]{.mark} **SHALL** \[be \| \| \| required for
authentication.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If the authenticator verifies the activation \| \| \| secret
locally (rather than using it for \| \| \| decryption of a key),
verification\]{.mark} \| \| \| **SHALL** \[be performed within a
hardware-based \| \| \| authenticator or in a secure element (e.g., TEE,
\| \| \| TPM) that releases the authentication secret \| \| \| only upon
presentation of the correct activation \| \| \| secret.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[In other circumstances (i.e., software-based \| \| \| multi-factor
authenticators), the \| \| \| authenticator\]{.mark} **SHALL** \[use the
\| \| \| memorized secret as a key to decrypt its stored \| \| \|
authentication secret. Approved \| \| \| cryptography\]{.mark} **SHALL**
\[be used.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.2.12. Connected Authenticators \| \|
+--------------------------------------------------+-------------------+
\| \[Cryptographic authenticators require a direct \| IA-5 g \| \|
connection between the authenticator and the \| \| \| endpoint being
authenticated. This \| \| \| connection\]{.mark} **MAY** \[be wired
(e.g., USB \| \| \| or direct connection with a smartcard) or \| \| \|
wireless (e.g., NFC, Bluetooth). While in most \| \| \| cases wired
connections can be presumed to be \| \| \| secure from eavesdropping and
\| \| \| adversary-in-the-middle attacks, additional \| \| \|
precautions are required for authenticators that \| \| \| are connected
via wireless technologies.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Wired authenticator connections include both \| IA-5 g \| \|
authenticators that are embedded in endpoints \| \| \| (e.g., in a TPM)
and those that are connected \| \| \| via an external interface, such as
USB. \| \| \| Claimants\]{.mark} **SHOULD** \[be advised to use \| \| \|
trusted hardware (cables, etc.) for external \| \| \| connections for
additional assurance that they \| \| \| have not been
compromised\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Wireless technologies having an effective range \| IA-5 g, IA-5 h.
\| \| of 1 meter or more (e.g., Bluetooth LE)\]{.mark} \| \| \|
**SHALL** \[use an authenticated encrypted \| \| \| connection between
the authenticator and \| \| \| endpoint.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[A pairing process\]{.mark} **SHALL** \[be used to \| IA-5 g, IA-5
h. \| \| establish a key for encrypted communication \| \| \| between
the authenticator and endpoint.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[A temporary wired connection between the \| IA-5 g, IA-5 h. \| \|
devices\]{.mark} **MAY** \[also be used to \| \| \| establish the key in
lieu of the pairing \| \| \| process.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The pairing process\]{.mark} **SHALL** \[be \| IA-5 g, IA-5 h. \|
\| authenticated through the use of a pairing \| \| \| code.\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| \[The pairing code\]{.mark} **SHALL** \[be \| IA-5 g, IA-5 h. \| \|
associated with either the authenticator or \| \| \| endpoint
and\]{.mark} **SHALL** \[have at least 20 \| \| \| bits or 6 decimal
digits of entropy.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The pairing code\]{.mark} **MAY** \[be printed on \| \| \| the
associated device and\]{.mark} **SHALL** \[be \| \| \| conveyed between
the devices by manual entry or \| \| \| by using a QR code or similar
representation \| \| \| that is optically communicated.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[An example of this is the pairing code used \| IA-1 a.1 (b) \| \|
with the virtual contact interface specified in \| \| \|
\[\[SP800-73\]\](https://pages \| \| \|
.nist.gov/800-63-4/sp800-63b.html#ref-SP800-73). \| \| \| The entire
authentication transaction\]{.mark} \| \| \| **SHALL** \[be encrypted
using a key established \| \| \| by the pairing process.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When a wireless technology with an effective \| IA-5 g, IA-5 h. \|
\| range of less than 1 meter is in use (e.g., \| \| \| NFC), the
activation secret, if any, transmitted \| \| \| from the endpoint to
authenticator\]{.mark} \| \| \| **SHALL** \[be encrypted using a key
established \| \| \| through a pairing process between the devices or \|
\| \| through a temporary wired connection.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[An authenticated connection using a pairing \| \| \| code meeting
the above requirements\]{.mark} \| \| \| **SHOULD** \[be used.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[If the authenticator is configured to require \| \| \|
authenticated pairing, pairing code\]{.mark} \| \| \| **SHALL** \[be
used.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The key established as a result of the pairing \| \| \|
process\]{.mark} **MAY** \[be either temporary \| \| \| (valid for a
limited number of transactions or \| \| \| time) or persistent.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[A mechanism for endpoints to remove persistent \| \| \|
keys\]{.mark} **SHALL** \[be provided.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Where cryptographic operations are required, \| \| \| approved
cryptography\]{.mark} **SHALL** \[be \| \| \| used.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[All communication of authentication data \| \| \| between
authenticators and endpoints\]{.mark} \| \| \| **SHALL** \[occur
directly between those devices \| \| \| or through an authenticated
protected channel \| \| \| between the authenticator and
endpoint.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 6. Authenticator Lifecycle Management \| \|
+--------------------------------------------------+-------------------+
\| ### 6.1. Authenticator Binding \| \|
+--------------------------------------------------+-------------------+
\| \[Authenticators\]{.mark} **SHALL** \[be bound to \| IA-5 (2) (a) (2)
\| \| subscriber accounts either\]{.mark} \| \| \| \| IA-5 (16) \| \| -
\[by issuance by the CSP as part of \| \| \| \> enrollment or\]{.mark}
\| \| \| \| \| \| - \[by registration of a subscriber-provided \| \| \|
\> authenticator that is acceptable to the \| \| \| \> CSP.\]{.mark} \|
\| \| \| \| \| \[These guidelines refer to the *binding* rather \| \| \|
than the issuance of an authenticator to \| \| \| accommodate both
options.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Throughout the digital identity lifecycle, \| \[IA-2\]{.mark} \| \|
CSPs\]{.mark} **SHALL** \[maintain a record of all \| \| \|
authenticators that are or have been associated \| IA-5 (2) (a) (2) \|
\| with each subscriber account.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP or verifier\]{.mark} **SHALL** \[maintain \| \| \| the
information required for throttling \| \| \| authentication attempts
when required, as \| \| \| described in \[Sec. \| \| \|
5.2.2\](https://pages.nis \| \| \|
t.gov/800-63-4/sp800-63b.html#throttle).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[also verify the type \| \| \| of
user-provided authenticator (e.g., \| \| \| single-factor cryptographic
device vs. \| \| \| multi-factor cryptographic device) so verifiers \|
\| \| can determine compliance with requirements at \| \| \| each
AAL.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The record created by the CSP\]{.mark} **SHALL** \| \| \| \[contain
the date and time the authenticator was \| \| \| bound to the subscriber
account.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The record\]{.mark} **SHOULD** \[include \| \| \| information about
the source of the binding \| \| \| (e.g., IP address, device identifier)
of any \| \| \| device associated with the enrollment.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If available, the record\]{.mark} **SHOULD** \| \| \| \[also
contain information about the source of \| \| \| unsuccessful
authentications attempted with the \| \| \| authenticator.\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| \[When any new authenticator is bound to a \| IA-5 g. \| \|
subscriber account, the CSP\]{.mark} **SHALL** \| \| \| \[ensure that
the binding protocol and the \| \| \| protocol for provisioning the
associated keys \| \| \| are done at a level of security commensurate \|
\| \| with the AAL at which the authenticator will be \| \| \|
used.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[For example, protocols for key \| IA-5 g. \| \|
provisioning\]{.mark} **SHALL** \[use \| \| \| authenticated protected
channels or be performed \| \| \| in person to protect against \| \| \|
adversary-in-the-middle attacks.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Binding of multi-factor authenticators\]{.mark} \| \| \| **SHALL**
\[require multi-factor authentication \| \| \| or equivalent (e.g.,
association with the \| \| \| session in which identity proofing has
been just \| \| \| completed) be used in order to bind the \| \| \|
authenticator. The same conditions apply when a \| \| \| key pair is
generated by the authenticator and \| \| \| the public key is sent to
the CSP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[As part of the binding process, the CSP\]{.mark} \| \| \| **MAY**
\[require additional information about \| \| \| the new authenticator or
the endpoint it is \| \| \| associated with to determine that they are
\| \| \| suitable for the AAL being requested and to \| \| \| attempt to
determine that the endpoint and \| \| \| authenticator are free from
malware.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 6.1.1. Binding at Enrollment \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[bind at least one \| IA-5 (2) (a) (2)
\| \| --- and\]{.mark} **SHOULD** \[bind at least two \| \| \| ---
physical (*something you have*) \| IA-5 (16) \| \| authenticators to the
subscriber account, in \| \| \| addition to a memorized secret or one or
more \| \| \| biometric characteristics. Binding of multiple \| \| \|
authenticators provides a means to recover from \| \| \| the loss or
theft of the subscriber's primary \| \| \| authenticator.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If enrollment and binding cannot be completed \| \| \| in a single
physical encounter or electronic \| \| \| transaction (i.e., within a
single protected \| \| \| session), the following methods\]{.mark} \| \|
\| **SHALL** \[be used to ensure that the same party \| \| \| acts as
the applicant throughout the \| \| \| processes:\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[For remote transactions:\]{.mark} \| IA-5 (16) \| \| \| \| \| 1.
\[The applicant\]{.mark} **SHALL** \[identify \| \| \| \> themselves in
each new binding transaction \| \| \| \> by presenting a temporary
secret which was \| \| \| \> either established during a prior \| \| \|
\> transaction, or sent to the applicant's \| \| \| \> phone number,
email address, or postal \| \| \| \> address of record.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| 2. \[Long-term authenticator secrets\]{.mark} \| IA-5 g. \| \| \>
**SHALL** \[only be issued to the applicant \| \| \| \> within a
protected session.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[For in-person transactions:\]{.mark} \| IA-5 (16) \| \| \| \| \| 1.
\[The applicant\]{.mark} **SHALL** \[identify \| \| \| \> themselves in
person by either using a \| \| \| \> secret as described in remote \| \|
\| \> transaction (1) above, or through use of a \| \| \| \> biometric
that was recorded during a prior \| \| \| \> encounter.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| 2. \[Temporary secrets\]{.mark} **SHALL NOT** \[be \| \| \| \>
reused.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| 3. \[If the CSP issues long-term authenticator \| IA-5 (16) \| \| \>
secrets during a physical transaction, \| \| \| \> then they\]{.mark}
**SHALL** \[be loaded \| \| \| \> locally onto a physical device that is
\| \| \| \> issued in person to the applicant or \| \| \| \> delivered
in a manner that confirms the \| \| \| \> address of record.\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| ### 6.1.2. Post-Enrollment Binding \| \|
+--------------------------------------------------+-------------------+
\| ### 6.1.2.1. Bindin \| \| \| g of an Additional Authenticator at
Existing AAL \| \|
+--------------------------------------------------+-------------------+
\| \[With the exception of memorized secrets, CSPs \| \| \| and
verifiers\]{.mark} **SHOULD** \[encourage \| \| \| subscribers to
maintain at least two valid \| \| \| authenticators of each factor that
they will be \| \| \| using.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[For example, a subscriber who usually uses an \| \| \| OTP device
as a physical authenticator\]{.mark} \| \| \| **MAY** \[also be issued a
number of look-up \| \| \| secret authenticators, or register a device
for \| \| \| out-of-band authentication, in case the physical \| \| \|
authenticator is lost, stolen, or damaged. See \| \| \| \[Sec. \| \| \|
6.1.2.3\](https://pag \| \| \|
es.nist.gov/800-63-4/sp800-63b.html#replacement) \| \| \| for more
information on replacement of memorized \| \| \| secret
authenticators.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Accordingly, CSPs\]{.mark} **SHOULD** \[permit \| \| \| the binding
of additional authenticators to a \| \| \| subscriber account.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[Before adding the new authenticator, the \| \| \| CSP\]{.mark}
**SHALL** \[first require the \| \| \| subscriber to authenticate at the
AAL (or a \| \| \| higher AAL) at which the new authenticator will \| \|
\| be used.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[A separate authentication using existing \| \| \|
authenticators\]{.mark} **SHALL** \[be performed \| \| \| following the
request to bind a new \| \| \| authenticator, and\]{.mark} **SHALL**
\[be valid \| \| \| for 20 minutes.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When an authenticator is added, the CSP\]{.mark} \| \| \|
**SHOULD** \[send a notification to the \| \| \| subscriber via a
mechanism that is independent \| \| \| of the transaction binding the
new authenticator \| \| \| (e.g., email to an address previously
associated \| \| \| with the subscriber).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **MAY** \[limit the number of \| \| \|
authenticators that are bound in this \| \| \| manner.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 6.1.2.2. Adding an Additio \| \| \| nal Factor to a Single-Factor
Subscriber Account \| \|
+--------------------------------------------------+-------------------+
\| \[If the subscriber account has only one \| \| \| authentication
factor bound to it and an \| \| \| additional authenticator of a
different \| \| \| authentication factor is to be added, the \| \| \|
subscriber\]{.mark} **MAY** \[request that the \| \| \| subscriber
account be upgraded to AAL2\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[.Before binding the new authenticator, the \| \| \| CSP\]{.mark}
**SHALL** \[require the subscriber to \| \| \| authenticate at
AAL1.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHOULD** \[send a notification \| \| \| of the
event to the subscriber via a mechanism \| \| \| independent of the
transaction binding the new \| \| \| authenticator (e.g., email to an
address \| \| \| previously associated with the \| \| \|
subscriber).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 6.1.2.3. Account Recovery \| \|
+--------------------------------------------------+-------------------+
\| \[If a subscriber that has been identity proofed \| IA-1 a.1 (b) \|
\| loses all authenticators necessary to complete \| \| \|
authentication, that subscriber\]{.mark} \| \| \| **SHALL** \[repeat the
identity proofing process \| \| \| described in \| \| \|
\[\[SP800-63A\]\](https://pages.ni \| \| \|
st.gov/800-63-4/sp800-63a.html#purpose).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If the CSP has retained information from the \| IA-1 a.1 (b) \| \|
evidence used in the original identity proofing \| \| \| process
(pursuant to a privacy risk assessment \| \| \| as described in \| \| \|
\[\[SP800-63A\]\](https:/ \| \| \|
/pages.nist.gov/800-63-4/sp800-63a.html#purpose) \| \| \| Sec. 5.2.2)
that is sufficient to perform \| \| \| verification of the subscriber
and if that \| \| \| evidence is still valid, it\]{.mark} **MAY** \| \|
\| \[repeat only the verification portion of the \| \| \| identity
proofing process as described in \| \| \|
\[\[SP800-63A\]\](https://pages.ni \| \| \|
st.gov/800-63-4/sp800-63a.html#purpose).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[require the claimant \| \| \| to
authenticate using an authenticator of the \| \| \| remaining factor, if
any, to confirm binding to \| \| \| the existing subscriber
account.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Reestablishment of authentication factors at \| IA-1 a.1 (b) \| \|
IAL3\]{.mark} **SHALL** \[be done in person or \| \| \| through a
supervised remote process as described \| \| \| in \| \| \|
\[\[SP800-63A\]\](https:/ \| \| \|
/pages.nist.gov/800-63-4/sp800-63a.html#purpose) \| \| \| Sec. 5.6.8,
and\]{.mark} **SHALL** \[perform a \| \| \| successful biometric
comparison against the \| \| \| biometric characteristic collected
during the \| \| \| original identity proofing process.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHOULD** \[send a notification \| \| \| of the
event to the subscriber. This\]{.mark} \| \| \| **MAY** \[be the same
notice that is required as \| \| \| part of the identity proofing
process.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Subscriber accounts that have not been identity \| \| \| proofed
(i.e., without IAL) cannot be recovered \| \| \| because there is no
reliable means for \| \| \| reassociating the subscriber with that
account. \| \| \| Such accounts\]{.mark} **SHALL** \[be treated as \| \|
\| abandoned and a new subscriber account\]{.mark} \| \| \| **SHALL**
\[be established.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Replacement of a lost (i.e., forgotten) \| \| \| memorized secret
is problematic because it is \| \| \| very common. Additional "backup"
memorized \| \| \| secrets do not mitigate this because they are \| \|
\| just as likely to also have been forgotten. If a \| \| \| biometric
is bound to the subscriber account, \| \| \| the biometric
characteristic and associated \| \| \| physical authenticator\]{.mark}
**SHOULD** \[be \| \| \| used to establish a new memorized \| \| \|
secret.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[As an alternative to the above re-proofing \| \| \| process when
there is no biometric bound to the \| \| \| subscriber account, the
CSP\]{.mark} **MAY** \| \| \| \[bind a new memorized secret with
authentication \| \| \| using two physical authenticators, along with a
\| \| \| confirmation code that has been sent to one of \| \| \| the
subscriber's addresses of record.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The confirmation code\]{.mark} **SHALL** \| IA-1 a.1 (b) \| \|
\[consist of at least 6 random alphanumeric \| \| \| characters
generated by an approved random bit \| \| \| generator \| \| \|
\[\[SP800-90Ar1\]\](https://pages.nist.gov/8 \| \| \|
00-63-4/sp800-63b.html#ref-SP800-90Ar1).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Confirmation codes\]{.mark} **SHALL** \[be valid \| \| \| for at
most:\]{.mark} \| \| \| \| \| \| - \[21 days, when sent to a postal
address of \| \| \| \> record within the contiguous United \| \| \| \>
States;\]{.mark} \| \| \| \| \| \| - \[30 days, when sent to a postal
address of \| \| \| \> record outside the contiguous United \| \| \| \>
States;\]{.mark} \| \| \| \| \| \| - \[10 minutes, when sent to a
telephone of \| \| \| \> record (SMS or voice); or\]{.mark} \| \| \| \|
\| \| - \[24 hours, when sent to an email address of \| \| \| \>
record.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 6.1.2.4. External Authenticator Binding \| \|
+--------------------------------------------------+-------------------+
\| \[The binding process\]{.mark} **MAY** \[begin with \| IA-5 (10) \|
\| a request from an endpoint that has \| \| \| authenticated to the CSP
obtaining a binding \| \| \| code from the CSP that is input into the \|
\| \| endpoint associated with the new authenticator \| \| \| and sent
to that CSP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Alternatively, the endpoint associated with the \| IA-5 (10) \| \|
new authenticator\]{.mark} **MAY** \[obtain a \| \| \| binding code from
the CSP, which is input to an \| \| \| authenticated endpoint and sent
to the \| \| \| CSP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[In addition to the requirements given in \[Sec. \| IA-5 g. \| \|
6.1.2.1\](https://pages \| \| \|
.nist.gov/800-63-4/sp800-63b.html#bindexisting), \| \| \| \[Sec. \| \|
\| 6.1.2.2\](https://pa \| \| \|
ges.nist.gov/800-63-4/sp800-63b.html#s-6-1-2-2), \| \| \| and \[Sec. \|
\| \| 6.1.2.3\](https://pag \| \| \|
es.nist.gov/800-63-4/sp800-63b.html#replacement) \| \| \| above as
applicable, the following \| \| \| requirements\]{.mark} **SHALL**
\[apply when \| \| \| binding an external authenticator:\]{.mark} \| \|
\| \| \| \| - \[An authenticated protected session\]{.mark} \| \| \| \>
**SHALL** \[be established by the endpoint \| \| \| \> associated with
the new authenticator and \| \| \| \> the CSP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| - \[The subscriber\]{.mark} **MAY** \[be prompted \| \| \| \> to
enter an identifier by which they are \| \| \| \> known by the CSP on
the endpoint \| \| \| \> associated with the new \| \| \| \>
authenticator.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| - \[The CSP\]{.mark} **SHALL** \[generate a \| \| \| \> *binding
code* using an approved random \| \| \| \> number generator and send it
to either the \| \| \| \> new authenticator endpoint or the \| \| \| \>
authenticated endpoint approving the \| \| \| \> binding. The binding
code\]{.mark} \| \| \| \> **SHALL** \[have at least 40 bits of \| \| \|
\> entropy if used in conjunction with an \| \| \| \> identifier entered
on the previous step; \| \| \| \> otherwise a binding code with at least
112 \| \| \| \> bits of entropy\]{.mark} **SHALL** \[be \| \| \| \>
required.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| - \[The subscriber\]{.mark} **SHALL** \[transfer \| \| \| \> the
binding code to the other endpoint. \| \| \| \> This transfer\]{.mark}
**SHALL** \[be either \| \| \| \> manual or via a local out-of-band
method \| \| \| \> such as a QR code. The binding \| \| \| \>
code\]{.mark} **SHALL NOT** \[be \| \| \| \> communicated over any
insecure channel \| \| \| \> such as email or PSTN (SMS or \| \| \| \>
voice).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| - \[The binding code\]{.mark} **SHALL** \[be \| \| \| \> usable only
once and\]{.mark} **SHALL** \[be \| \| \| \> valid for a maximum of 10
minutes.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| - \[Following the binding of the new \| \| \| \> authenticator (or
issuance of a \| \| \| \> certificate, in the case of PKI-based \| \| \|
\> authenticators), the CSP\]{.mark} \| \| \| \> **SHOULD** \[encourage
the subscriber to \| \| \| \> authenticate with the new authenticator to
\| \| \| \> confirm that the process has completed \| \| \| \>
successfully.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| - \[The CSP\]{.mark} **SHALL** \[provide clear \| IA-5 g. \| \| \>
instruction on what the subscriber should \| \| \| \> do in the event of
an authenticator \| \| \| \> binding mishap, such as a button or \| \|
\| \> contact address to allow a mis-bound \| \| \| \> authenticator to
be quickly invalidated as \| \| \| \> appropriate. This\]{.mark} **MAY**
\[be \| \| \| \> provided in the authenticated session or \| \| \| \> in
the binding notification described in \| \| \| \> \[Sec. \| \| \| \>
6.1.2.1\](https://pages \| \| \|
.nist.gov/800-63-4/sp800-63b.html#bindexisting), \| \| \| \> \[Sec. \|
\| \| \> 6.1.2.2\](https://pa \| \| \|
ges.nist.gov/800-63-4/sp800-63b.html#s-6-1-2-2), \| \| \| \> and \[Sec.
\| \| \| \> 6.1.2.3\](https://pag \| \| \|
es.nist.gov/800-63-4/sp800-63b.html#replacement) \| \| \| \>
above.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 6.1.3 \| \| \| . Binding to a Subscriber-provided Authenticator
\| \|
+--------------------------------------------------+-------------------+
\| \[CSPs\]{.mark} **SHOULD**\[, where practical, \| IA-5 (10) \| \|
accommodate the use of subscriber-provided \| \| \| authenticators in
order to relieve the burden to \| \| \| the subscriber of managing a
large number of \| \| \| authenticators\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Binding of these authenticators\]{.mark} \| IA-5 (10) \| \|
**SHALL** \[be done as described in \[Sec. \| \| \|
6.1.2\](https://pages.nist.gov/80 \| \| \|
0-63-4/sp800-63b.html#post-enroll-bind).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[In situations where the authenticator strength \| \| \| is not
self-evident (e.g., between single-factor \| \| \| and multi-factor
authenticators of a given \| \| \| type), the CSP\]{.mark} **SHALL**
\[assume the use \| \| \| of the weaker authenticator unless it is able
to \| \| \| establish that the stronger authenticator is in \| \| \|
fact being used (e.g., by verification with the \| \| \| issuer or
manufacturer of the \| \| \| authenticator).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 6.1.4. Renewal \| \|
+--------------------------------------------------+-------------------+
\| \[The subscriber\]{.mark} **SHOULD** \[bind a new \| IA-5 f. \| \| or
updated authenticator an appropriate amount \| \| \| of time before an
existing authenticator's \| \| \| expiration.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The process for this\]{.mark} **SHOULD** \| \| \| \[conform closely
to the binding process for an \| \| \| additional authenticator
described in \[Sec. \| \| \| 6.1.2.1\](https://pages.nis \| \| \|
t.gov/800-63-4/sp800-63b.html#post-enroll-bind). \| \| \| The
CSP\]{.mark} **MAY** \[periodically take other \| \| \| actions, such as
reconfirming address of record, \| \| \| either as a part of the renewal
process or \| \| \| separately.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Following successful use of the replacement \| \| \| authenticator,
the CSP\]{.mark} **MAY** \| \| \| \[invalidate the authenticator that is
\| \| \| expiring.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 6.2. L \| \| \| oss, Theft, Damage, and Unauthorized Duplication
\| \|
+--------------------------------------------------+-------------------+
\| \[Suspension, revocation, or destruction of \| \| \| compromised
authenticators\]{.mark} **SHOULD** \| \| \| \[occur as promptly as
practical following \| \| \| detection.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Organizations\]{.mark} **SHOULD** \[establish \| \| \| time limits
for this process.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[To facilitate secure reporting of the loss, \| \| \| theft, or
damage to an authenticator, the \| \| \| CSP\]{.mark} **SHOULD**
\[provide the subscriber \| \| \| with a method of authenticating to the
CSP using \| \| \| a backup or alternate authenticator.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[This backup authenticator\]{.mark} **SHALL** \[be \| \| \| either a
memorized secret or a physical \| \| \| authenticator. Either could be
used, but only \| \| \| one authentication factor is required to make \|
\| \| this report.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Alternatively, the subscriber\]{.mark} **MAY** \| \| \| \[establish
an authenticated protected channel to \| \| \| the CSP and verify
information collected during \| \| \| the proofing process..\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **MAY** \[choose to verify an \| \| \| address of
record (i.e., email, telephone, \| \| \| postal) and suspend
authenticators reported to \| \| \| have been compromised.\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| \[The suspension\]{.mark} **SHALL** \[be reversible \| \| \| if the
subscriber successfully authenticates to \| \| \| the CSP using a valid
(i.e., not suspended) \| \| \| authenticator and requests reactivation
of an \| \| \| authenticator suspended in this manner.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **MAY** \[set a time limit after \| \| \| which a
suspended authenticator can no longer be \| \| \| reactivated\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| ### 6.3. Expiration \| \|
+--------------------------------------------------+-------------------+
\| \[CSPs\]{.mark} **MAY** \[issue authenticators that \| \| \| expire.
If and when an authenticator expires, \| \| \| it\]{.mark} **SHALL NOT**
\[be usable for \| \| \| authentication.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When an authentication is attempted using an \| \| \| expired
authenticator, the CSP\]{.mark} \| \| \| **SHOULD** \[give an indication
to the subscriber \| \| \| that the authentication failure is due to \|
\| \| expiration rather than some other cause.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[require subscribers \| \| \| to
surrender or prove destruction of any \| \| \| physical authenticator
containing attribute \| \| \| certificates signed by the CSP as soon as
\| \| \| practical after expiration or receipt of a \| \| \| renewed
authenticator.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 6.4. Invalidation \| \|
+--------------------------------------------------+-------------------+
\| \[CSPs\]{.mark} **SHALL** \[invalidate \| \| \| authenticators
promptly when a subscriber \| \| \| account ceases to exist (e.g.,
subscriber's \| \| \| death, discovery of a fraudulent subscriber), \|
\| \| when requested by the subscriber, or when the \| \| \| CSP
determines that the subscriber no longer \| \| \| meets its eligibility
requirements.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The CSP\]{.mark} **SHALL** \[require subscribers \| \| \| to
surrender or certify destruction of any \| \| \| physical authenticator
containing subscriber \| \| \| attributes, such as certificates signed
by the \| \| \| CSP, as soon as practical after invalidation \| \| \|
takes place.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 7. Session Management \| \|
+--------------------------------------------------+-------------------+
\| \[To facilitate this behavior, a \| \| \| *session*\]{.mark} **MAY**
\[be started in \| \| \| response to an authentication event, and \| \|
\| continue the session until such time that it is \| \| \|
terminated.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The session\]{.mark} **MAY** \[be terminated for \| \| \| any
number of reasons, including but not limited \| \| \| to an inactivity
timeout, an explicit logout \| \| \| event, or other means.\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| \[The session\]{.mark} **MAY** \[be continued \| \| \| through a
reauthentication event --- described \| \| \| in \[Sec. \| \| \|
7.2\](https://pages. \| \| \|
nist.gov/800-63-4/sp800-63b.html#sessionreauthn) \| \| \| --- wherein
the subscriber repeats some or all \| \| \| of the initial
authentication event, thereby \| \| \| re-establishing the
session.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 7.1. Session Bindings \| \|
+--------------------------------------------------+-------------------+
\| \[A session secret\]{.mark} **SHALL** \[be shared \| \| \| between
the subscriber's software and the \| \| \| service being
accessed.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[This secret binds the two ends of the session, \| \| \| allowing
the subscriber to continue using the \| \| \| service over
time.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The secret\]{.mark} **SHALL** \[be presented \| \| \| directly by
the subscriber's software or \| \| \| possession of the secret\]{.mark}
**SHALL** \[be \| \| \| proven using a cryptographic mechanism.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[Continuity of authenticated sessions\]{.mark} \| \| \| **SHALL**
\[be based upon the possession of a \| \| \| session secret issued by
the verifier at the \| \| \| time of authentication and optionally
refreshed \| \| \| during the session. The nature of a session \| \| \|
depends on the application, such as:\]{.mark} \| \| \| \| \| \| - \[a
web browser session with a "session" \| \| \| \> cookie, or\]{.mark} \|
\| \| \| \| \| - \[an instance of a mobile application that \| \| \| \>
retains a session secret.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Session secrets\]{.mark} **SHALL NOT** \[be \| \| \| persistent
(retained across a restart of the \| \| \| associated application or a
reboot of the host \| \| \| device).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The secret used for session binding\]{.mark} \| \| \| **SHALL**
\[be generated by the session host in \| \| \| direct response to an
authentication \| \| \| event.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[A session\]{.mark} **SHOULD** \[inherit the AAL \| \| \| properties
of the authentication event which \| \| \| triggered its
creation.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[A session\]{.mark} **MAY** \[be considered at a \| \| \| lower AAL
than the authentication event \| \| \| but\]{.mark} **SHALL NOT** \[be
considered at a \| \| \| higher AAL than the authentication \| \| \|
event.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Secrets used for session binding\]{.mark} \| IA-1 a.1 (b) \| \|
**SHALL** \[meet all of the following \| \| \| requirements:\]{.mark} \|
\| \| \| \| \| 1. \[Secrets are generated by the session host \| \| \|
\> during an interaction, typically \| \| \| \> immediately following \|
\| \| \> authentication.\]{.mark} \| \| \| \| \| \| 2. \[Secrets are
generated by an approved random \| \| \| \> bit generator \| \| \| \>
\[\[SP800-90Ar1\]\](https://pages.n \| \| \|
ist.gov/800-63-4/sp800-63b.html#ref-SP800-90Ar1) \| \| \| \> and contain
at least 64 bits of \| \| \| \> entropy.\]{.mark} \| \| \| \| \| \| 3.
\[Secrets are erased or invalidated by the \| \| \| \> session subject
when the subscriber logs \| \| \| \> out.\]{.mark} \| \| \| \| \| \| 4.
\[Secrets are sent to and received from the \| \| \| \> device using an
authenticated protected \| \| \| \> channel.\]{.mark} \| \| \| \| \| \|
5. \[Secrets will time out and are not accepted \| \| \| \> after the
times specified in \[Sections \| \| \| \> 4.1.3\](https://pag \| \| \|
es.nist.gov/800-63-4/sp800-63b.html#aal1reauth), \| \| \| \>
\[4.2.3\](https://pag \| \| \|
es.nist.gov/800-63-4/sp800-63b.html#aal2reauth), \| \| \| \> and \| \|
\| \> \[4.3.3\](https://pag \| \| \|
es.nist.gov/800-63-4/sp800-63b.html#aal3reauth), \| \| \| \> as
appropriate for the AAL.\]{.mark} \| \| \| \| \| \| 6. \[Secrets are not
made available to insecure \| \| \| \> communications between the host
and \| \| \| \> subscriber's endpoint.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[In addition, secrets used for session \| \| \| binding\]{.mark}
**SHOULD** \[be erased on the \| \| \| subscriber endpoint when they log
out or when \| \| \| the secret is deemed to have expired.\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| \[They\]{.mark} **SHOULD NOT** \[be placed in \| \| \| insecure
locations such as HTML5 Local Storage \| \| \| due to the potential
exposure of local storage \| \| \| to cross-site scripting (XSS)
attacks.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Authenticated sessions\]{.mark} **SHALL NOT** \| \| \| \[fall back
to an insecure transport, such as \| \| \| from https to http, following
\| \| \| authentication.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[URLs or POST content\]{.mark} **SHALL** \[contain \| \| \| a
session identifier that\]{.mark} **SHALL** \[be \| \| \| verified by the
RP to protect against cross-site \| \| \| request forgery.\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| ### 7.1.1. Browser Cookies \| \|
+--------------------------------------------------+-------------------+
\| \[Cookies used for session maintenance\]{.mark} \| \| \| **SHALL**
\[meet all of the following \| \| \| requirements:\]{.mark} \| \| \| \|
\| \| 1. \[Cookies are tagged to be accessible only on \| \| \| \>
secure (HTTPS) sessions.\]{.mark} \| \| \| \| \| \| 2. \[Cookies are
accessible to the minimum \| \| \| \> practical set of hostnames and \|
\| \| \> paths.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[In addition, session maintenance \| \| \| cookies\]{.mark}
**SHOULD** \[be tagged to be \| \| \| inaccessible via JavaScript
(HttpOnly).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[They\]{.mark} **SHOULD** \[contain only an opaque \| \| \| string
(such as a session identifier), \| \| \| and\]{.mark} **SHOULD NOT**
\[contain cleartext \| \| \| PII.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[They\]{.mark} **SHOULD** \[be tagged to expire \| \| \| at, or soon
after, the session's validity \| \| \| period.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[This latter requirement is intended to limit \| \| \| the
accumulation of cookies, but\]{.mark} **SHALL \| \| \| NOT** \[be
depended upon to enforce session \| \| \| timeouts.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 7.1.2. Access Tokens \| \|
+--------------------------------------------------+-------------------+
\| \[The presence of an OAuth access token\]{.mark} \| \| \| **SHALL
NOT** \[be interpreted by the RP as \| \| \| presence of the subscriber,
in the absence of \| \| \| other signals.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The OAuth access token, and any associated \| \| \| refresh
tokens,\]{.mark} **MAY** \[be valid long \| \| \| after the
authentication session has ended and \| \| \| the subscriber has left
the application.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 7.1.3. Device Identification \| \|
+--------------------------------------------------+-------------------+
\| \[Other methods of secure device identification \| \| \| ---
including but not limited to mutual TLS, \| \| \| token binding, or
other mechanisms ---\]{.mark} \| \| \| **MAY** \[be used to enact a
session between a \| \| \| subscriber and a service.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 7.2. Reauthentication \| \|
+--------------------------------------------------+-------------------+
\| \[Periodic reauthentication of sessions\]{.mark} \| IA-11 \| \|
**SHALL** \[be performed to confirm the continued \| \| \| presence of
the subscriber at an authenticated \| \| \| session (i.e., that the
subscriber has not \| \| \| walked away without logging out).\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[A session\]{.mark} **SHALL NOT** \[be extended \| \| \| past the
guidelines in Sections \| \| \| \[4.1.3\](https://pag \| \| \|
es.nist.gov/800-63-4/sp800-63b.html#aal1reauth), \| \| \|
\[4.2.3\](https://pag \| \| \|
es.nist.gov/800-63-4/sp800-63b.html#aal2reauth), \| \| \| and \| \| \|
\[4.3.3\](https://pa \| \| \|
ges.nist.gov/800-63-4/sp800-63b.html#aal3reauth) \| \| \| (depending on
AAL) based on presentation of the \| \| \| session secret alone. Prior
to session \| \| \| expiration, the reauthentication time \| \| \|
limit\]{.mark} **SHALL** \[be extended by \| \| \| prompting the
subscriber for the authentication \| \| \| factors specified in \[Table
\| \| \| 2\](https://pages.ni \| \| \|
st.gov/800-63-4/sp800-63b.html#table-2).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When a session has been terminated, due to a \| \| \| time-out or
other action, the subscriber\]{.mark} \| \| \| **SHALL** \[be required
to establish a new \| \| \| session by authenticating again.\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| ### 7.2.1. \| \| \| Reauthentication from a Federation or Assertion
\| \|
+--------------------------------------------------+-------------------+
\| ### 8. T \| \| \| hreats and Security Considerations (Informative) \|
\|
+--------------------------------------------------+-------------------+
\| ### 8.1. Authenticator Threats (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### \| \| \| 8.2. Threat Mitigation Strategies (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 8.3. Authenticator Recovery (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 8.4. Session Attacks (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 9. Privacy Considerations (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 9.1. Privacy Risk Assessment (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 9.2. Privacy Controls (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 9.3. Use Limitation (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 9.4. \| \| \| Agency-Specific Privacy Compliance (Informative) \|
\|
+--------------------------------------------------+-------------------+
\| ### 10. Usability Considerations (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 10.1. Usability Consi \| \| \| derations Common to Authenticators
(Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 10.2. Usability Co \| \| \| nsiderations by Authenticator Type
(Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 10.2.1. Memorized Secrets (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 10.2.2. Look-Up Secrets (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 10.2.3. Out-of-Band (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ## \| \| \| # 10.2.4. Single-Factor OTP Device (Informative) \| \|
+--------------------------------------------------+-------------------+
\| # \| \| \| ## 10.2.5. Multi-Factor OTP Device (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 10.2.6. Si \| \| \| ngle-Factor Cryptographic Software
(Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 10.2.7. \| \| \| Single-Factor Cryptographic Device (Informative)
\| \|
+--------------------------------------------------+-------------------+
\| ### 10.2.8. M \| \| \| ulti-Factor Cryptographic Software
(Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 10.2.9. \| \| \| Multi-Factor Cryptographic Device (Informative)
\| \|
+--------------------------------------------------+-------------------+
\| ### 10.3. S \| \| \| ummary of Usability Considerations (Informative)
\| \|
+--------------------------------------------------+-------------------+
\| ### 10.4. B \| \| \| iometrics Usability Considerations (Informative)
\| \|
+--------------------------------------------------+-------------------+
\| ### 11. Equity Considerations (Informative) \| \|
+--------------------------------------------------+-------------------+

# 

## 800-63C-4

+--------------------------------------------------+-------------------+
\| NIST 800-63C Reference \| 800-53 rev 5 \| \| \| control \|
+==================================================+===================+
\| ### 1. Purpose (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 2. Introduction (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ## \| \| \| # 3. Definitions and Abbreviations (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 4. Federation Assurance Level (FAL) \| \|
+--------------------------------------------------+-------------------+
\| At all FALs, all assertions **SHALL** be used \| IA-8 (4) \| \| with
a federation protocol as described in \[Sec. \| \| \| 5\](https://pag \|
\| \| es.nist.gov/800-63-4/sp800-63c.html#federation). \| \|
+--------------------------------------------------+-------------------+
\| All assertions **SHALL** comply with the \| IA-8 (4) \| \| detailed
requirements in \[Sec. \| \| \| 6\](https://pag \| \| \|
es.nist.gov/800-63-4/sp800-63c.html#assertions). \| \|
+--------------------------------------------------+-------------------+
\| All assertions **SHALL** be presented using one \| \| \| of the
methods described in \[Sec. \| \| \| 7\](https://pages \| \| \|
.nist.gov/800-63-4/sp800-63c.html#presentation). \| \| \| Examples of
assertions used in federated \| \| \| protocols include the ID Token in
OpenID Connect \| \| \| \[\[OIDC\]\](https:// \| \| \|
pages.nist.gov/800-63-4/sp800-63c.html#ref-OIDC) \| \| \| and assertions
written in the Security Assertion \| \| \| Markup Language \| \| \|
\[\[SAML\]\](https://p \| \| \|
ages.nist.gov/800-63-4/sp800-63c.html#ref-SAML). \| \|
+--------------------------------------------------+-------------------+
\| At all FALs, the IdP **SHALL** employ \| IA-1 a.1 (b) \| \|
appropriately tailored security controls (to \| \| \| include control
enhancements) from the moderate \| \| \| or high baseline of security
controls defined in \| \| \| \[\[SP800-53\]\](https://page \| \| \|
s.nist.gov/800-63-4/sp800-63c.html#ref-SP800-53) \| \| \| or equivalent
federal (e.g., \| \| \| \[\[FEDRAMP\]\](https://page \| \| \|
s.nist.gov/800-63-4/sp800-63c.html#ref-FEDRAMP)) \| \| \| or industry
standard. \| \|
+--------------------------------------------------+-------------------+
\| ### 4.1. Federation Assurance Level 1 (FAL1) \| \|
+--------------------------------------------------+-------------------+
\| \[At FAL1, the assertion being generated by the \| IA-8 (4) \| \|
IdP\]{.mark} **SHALL** \[meet a core set of \| \| \| requirements
defined in \[Sec. \| \| \| 6\](https://pag \| \| \|
es.nist.gov/800-63-4/sp800-63c.html#assertions), \| \| \| including
protection against modification or \| \| \| construction by an attacker
by having the \| \| \| assertion contents signed by the IdP using \| \|
\| approved cryptography.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[An RP\]{.mark} **SHALL** \[verify the origin and \| \| \| integrity
of the assertion upon receipt, as \| \| \| discussed in \[Sec. \| \| \|
6\](https://pag \| \| \|
es.nist.gov/800-63-4/sp800-63c.html#assertions), \| \| \| ensuring that
the assertion has originated from \| \| \| the expected source.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[All assertions at FAL1\]{.mark} **SHALL** \[be \| \| \|
audience-restricted to a specific RP or set of \| \| \| RPs, and the
RP\]{.mark} **SHALL** \[validate that \| \| \| it is one of the targeted
RPs for the given \| \| \| assertion.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The IdP\]{.mark} **SHALL** \[ensure that any \| \| \| party holding
the assertion, including the RP, \| \| \| is unable to impersonate the
IdP at a \| \| \| non-targeted RP by protecting the assertion with \| \|
\| a signature and key using approved \| \| \| cryptography.\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| \[If the assertion is protected by a digital \| \| \| signature using
an asymmetric key, the \| \| \| IdP\]{.mark} **MAY** \[use the same
public and \| \| \| private key pair to sign assertions to multiple \|
\| \| RPs.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The IdP\]{.mark} **MAY** \[publish its public key \| \| \| in a
verifiable fashion, such as at an \| \| \| HTTPS-protected URL at a
well-known location. If \| \| \| the assertion is protected by a keyed
message \| \| \| authentication code (MAC) using a shared key, \| \| \|
the IdP\]{.mark} **SHALL** \[use a different \| \| \| shared key for
each RP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[At FAL1, the trust agreement between the IdP \| \| \| and
RP\]{.mark} **MAY** \[be established entirely \| \| \|
dynamically.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 4.2. Federation Assurance Level 2 (FAL2) \| \|
+--------------------------------------------------+-------------------+
\| \[At FAL2, the assertion\]{.mark} **SHALL** \[also \| IA-8 (4) \| \|
be strongly protected from being injected by an \| \| \| attacker. To
accomplish this, the \| \| \| assertion\]{.mark} **SHOULD** \[be
presented using \| \| \| back channel presentation as discussed in
\[Sec. \| \| \| 7.1\](https://pages \| \| \|
.nist.gov/800-63-4/sp800-63c.html#back-channel), \| \| \| as in the
OpenID Connect Basic Client profile \| \| \|
\[\[OIDC-Basic\]\](https://pages.nist.gov/ \| \| \|
800-63-4/sp800-63c.html#ref-OIDC-basic).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If front channel presentation is used as \| \| \| discussed in
\[Sec. \| \| \| 7.2\](https://pages. \| \| \|
nist.gov/800-63-4/sp800-63c.html#front-channel), \| \| \| additional
injection protections\]{.mark} \| \| \| **SHALL** \[be implemented by
the RP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[At FAL2, the trust agreement between the IdP \| \| \| and
RP\]{.mark} **SHALL** \[be established \| \| \| statically, including
establishing limits of \| \| \| which attributes are made available to
the RP \| \| \| and for what purpose\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[This trust agreement\]{.mark} **MAY** \[be \| \| \| bilateral
between the IdP and RP or\]{.mark} \| \| \| **MAY** \[be managed through
the use of a \| \| \| multilateral federation partnership.\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| \[The registration\]{.mark} **MAY** \[be dynamic, \| \| \| provided
that the RP and IdP can prove their \| \| \| connection at runtime to
the established trust \| \| \| agreement between them. Such methods for
this \| \| \| proof vary by federation protocol, but can \| \| \|
include presentation of software attestations \| \| \| and proof of
control over URLs at trusted \| \| \| domains\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Government-operated IdPs asserting \| IA-1 a.1 (b) \| \|
authentication at FAL2\]{.mark} **SHALL** \| \| \| \[protect keys used
for signing or encrypting \| \| \| those assertions with mechanisms
validated at \| \| \| \[\[FIPS140\]\](https://pag \| \| \|
es.nist.gov/800-63-4/sp800-63c.html#ref-FIPS140) \| \| \| Level 1 or
higher.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 4.3. Federation Assurance Level 3 (FAL3) \| \|
+--------------------------------------------------+-------------------+
\| \[At FAL3, the subscriber\]{.mark} **SHALL** \| \| \| \[authenticate
to the RP by presenting an \| \| \| authenticator directly to the RP in
addition to \| \| \| presenting an assertion. The authenticator \| \| \|
presented is known as a *bound authenticator*, \| \| \| described in
\[Sec. \| \| \| 6.1.2\](https://pages.nist \| \| \|
.gov/800-63-4/sp800-63c.html#boundauth).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[At FAL3, the trust agreement and registration \| \| \| between the
IdP and RP\]{.mark} **SHALL** \[be \| \| \| established
statically.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[All identifying key material and federation \| IA- \| \| parameters
for all parties (including the list \| \| \| of attributes sent to the
RP)\]{.mark} **SHALL** \| \| \| \[be fixed ahead of time, before the
federated \| \| \| authentication process can take place.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Runtime decisions\]{.mark} **MAY** \[be used to \| \| \| further
limit what is sent between parties in \| \| \| the federated
authentication process (e.g., a \| \| \| runtime decision could opt to
not disclose an \| \| \| email address even though this attribute was \|
\| \| included in the parameters of the trust \| \| \|
agreement).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[IdPs asserting authentication at FAL3\]{.mark} \| IA-1 a.1 (b) \|
\| **SHALL** \[protect keys used for signing or \| \| \| encrypting
those assertions with mechanisms \| \| \| validated at \| \| \|
\[\[FIPS140\]\](https://pag \| \| \|
es.nist.gov/800-63-4/sp800-63c.html#ref-FIPS140) \| \| \| Level 1 or
higher.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 4.4. Requesting and Processing xALs \| \|
+--------------------------------------------------+-------------------+
\| \[The RP\]{.mark} **SHALL** \[be informed of the \| \| \| following
information for each federated \| \| \| transaction:\]{.mark} \| \| \|
\| \| \| - \[The IAL of the subscriber account being \| \| \| \>
presented to the RP, or an indication that \| \| \| \> no IAL claim is
being made\]{.mark} \| \| \| \| \| \| - \[The AAL of the currently
active session of \| \| \| \> the subscriber at the IdP, or an \| \| \|
\> indication that no AAL claim is being \| \| \| \> made\]{.mark} \| \|
\| \| \| \| - \[The FAL of the federated \| \| \| \>
transaction\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The RP gets this xAL information from a \| \| \| combination of
parameters in the trust agreement \| \| \| as described in \[Sec. \| \|
\| 5.1\](https://pages.n \| \| \|
ist.gov/800-63-4/sp800-63c.html#trust-agreement) \| \| \| and
information included in the assertion as \| \| \| described in \[Sec. \|
\| \| 6\](https://pag \| \| \|
es.nist.gov/800-63-4/sp800-63c.html#assertions). \| \| \| If the xAL is
unchanging for all messages \| \| \| between the IdP and RP, the xAL \|
\| \| information\]{.mark} **SHALL** \[be included in \| \| \| the
parameters of the trust agreement between \| \| \| the IdP and
RP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If the xAL varies, the information\]{.mark} \| \| \| **SHALL** \[be
included as part of the assertion \| \| \| as discussed in \[Sec. \| \|
\| 6\](https://pages.nist. \| \| \|
gov/800-63-4/sp800-63c.html#assertions).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The IdP\]{.mark} **MAY** \[indicate that no claim \| \| \| is made
to the IAL or AAL for a given federation \| \| \| transaction. In such
cases, no default value is \| \| \| assigned to the resulting
xAL.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The RP\]{.mark} **SHALL** \[determine the minimum \| IA-12 a.,
IA-12 \| \| IAL, AAL, and FAL it is willing to accept for \| (6) \| \|
access to any offered functionality.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[An RP\]{.mark} **MAY** \[vary its functionality \| \| \| based on
the IAL, AAL, and FAL of a specific \| \| \| federated
authentication.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[In a federation process, only the IdP has \| \| \| direct access to
the details of the subscriber \| \| \| account, which determines the
applicable IAL, \| \| \| and the authentication event at the IdP, which
\| \| \| determines the applicable AAL. Consequently, the \| \| \|
RP\]{.mark} **SHALL** \[consider the IdP's \| \| \| declaration of the
IAL and AAL as the sole \| \| \| source of these levels for a given
federated \| \| \| transaction.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The RP\]{.mark} **SHALL** \[ensure that the \| \| \| federation
transaction meets the requirements of \| \| \| the FAL declared in the
assertion.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[IdPs\]{.mark} **SHALL** \[support a mechanism for \| \| \| RPs to
specify a set of minimum acceptable xALs \| \| \| as part of the trust
agreement and\]{.mark} \| \| \| **SHOULD** \[support the RP specifying a
more \| \| \| strict minimum set at runtime as part of the \| \| \|
federation transaction.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When an RP requests a particular xAL, the \| \| \| IdP\]{.mark}
**SHOULD** \[fulfill that request, if \| \| \| possible, and\]{.mark}
**SHALL** \[indicate the \| \| \| resulting xAL in the
assertion.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5. Federation \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1. Trust Agreements \| \|
+--------------------------------------------------+-------------------+
\| \[Trust agreements\]{.mark} SHALL \[establish the \| IA-1 a.1 (a) \|
\| following parameters:\]{.mark} \| \| \| \| IA-4(6) \| \| - The set of
attributes the IdP can make \| \| \| \> available to the RP \| IA-8 (2)
(b) \| \| \| \| \| - The population of subscriber accounts the \| \| \|
\> IdP can create assertions for \| \| \| \| \| \| - The set of
attributes the RP will request (a \| \| \| \> subset of the attributes
made available) \| \| \| \| \| \| - The purpose for each attribute
requested by \| \| \| \> the RP \| \| \| \| \| \| - The authorized party
responsible for \| \| \| \> decisions regarding the release of \| \| \|
\> subscriber attributes \| \| \| \| \| \| - The means of informing
subscribers about \| \| \| \> attribute release to the RP \| \| \| \| \|
\| - The xALs available from the IdP \| \| \| \| \| \| - The xALs
required by the RP \| \|
+--------------------------------------------------+-------------------+
\| \[Trust agreements are able to be established \| IA-4(6) \| \| either
statically or dynamically. In a static \| \| \| establishment, there is
often a legal or \| \| \| contractual agreement binding the parties to a
\| \| \| set of expected behaviors, rights, and \| \| \| requirements.
The parameters of static trust \| \| \| agreements\]{.mark} SHALL \[be
available to all \| \| \| parties in the agreement, including the
operator \| \| \| of the IdP, the operator of the RP, and affected \| \|
\| subscribers.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The parameters of a dynamic trust \| IA-4(6) \| \|
agreement\]{.mark} SHALL \[be disclosed to the \| \| \| subscriber by
the RP and the IdP during the \| \| \| federation transaction.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[For a static trust agreement, the authorized \| \| \|
party\]{.mark} MAY \[be the organization \| \| \| responsible for the
IdP. In this case, consent \| \| \| to release attributes is decided for
all \| \| \| subscribers and established by an allowlist as \| \| \|
described in \[\[Sec. \| \| \| 5.3.1\]{.underline}\](https://pages. \|
\| \| nist.gov/800-63-4/sp800-63c.html#idp-allowlist), \| \| \| allowing
for the disclosure of attribute \| \| \| information without direct
decisions and \| \| \| involvement by the subscriber.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[A static trust agreement\]{.mark} MAY \[stipulate \| \| \| that an
individual, such as the subscriber, is \| \| \| to be prompted at
runtime for consent to \| \| \| disclose attributes as discussed in
\[\[Sec. \| \| \| 5.3.3\]{.underline}\](https://pages.nist.go \| \| \|
v/800-63-4/sp800-63c.html#idp-runtime-decision). \| \| \| Since dynamic
trust agreements are established \| \| \| by subscriber actions, the
authorized party in a \| \| \| dynamic trust agreement is always the \|
\| \| subscriber.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Disclosure of attributes in dynamic trust \| \| \|
agreements\]{.mark} SHALL \[be subject to a \| \| \| runtime decision
from the subscriber and\]{.mark} \| \| \| SHALL NOT \[be subject to an
allowlist at the \| \| \| IdP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[During the course of a single federation \| IA-1 a.1 (a) \| \|
transaction, it is important for the policies \| \| \| and expectations
of the IdP and RP to be \| IA-4(6) \| \| unambiguous for all parties
involved. Therefore, \| \| \| there\]{.mark} **SHOULD** \[be only one
set of \| \| \| trust agreements in effect for a given \| \| \|
transaction. This will usually be determined by \| \| \| the unique pair
consisting of a single IdP and a \| \| \| single RP. However, these
agreements could vary \| \| \| in other ways, such as an IdP and RP
having \| \| \| different agreements for different populations \| \| \|
of subscribers.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.1. Bilateral Trust Agreements \| \|
+--------------------------------------------------+-------------------+
\| \[The IdP\]{.mark} **SHALL** \[disclose its \| \| \| supported IAL,
AAL, and FAL levels to the \| \| \| RP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The IdP\]{.mark} **MAY** \[disclose a subset of \| \| \| its
capabilities to a given RP depending on the \| \| \| needs of the
application, for example only \| \| \| disclosing to a low-risk RP that
accounts are \| \| \| proofed at IAL1 or better.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The RP\]{.mark} **SHALL** \[disclose its list of \| \| \| required
attributes to the IdP, including its \| \| \| purpose for use of each
requested \| \| \| attribute.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The RP\]{.mark} **SHALL** \[communicate its \| IA-1 a.1 (a) \| \|
required IAL, AAL, and FAL to the IdP, including \| \| \| whether no
claim is required for IAL or \| \| \| AAL.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The IdP\]{.mark} **SHALL** \[transmit only those \| \| \|
attributes that were explicitly requested by the \| \| \| RP.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[RPs\]{.mark} **SHALL** \[include their requested \| IA-1 a.1 (a) \|
\| attributes in their privacy risk \| \| \| assessment.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.2. Multilateral Trust Agreements \| \|
+--------------------------------------------------+-------------------+
\| \[Federation authorities\]{.mark} **SHALL** \| IA-1 a.1 (a) \| \|
\[establish parameters regarding expected and \| \| \| acceptable IALs,
AALs, and FALs in connection \| IA-4(6) \| \| with the federated
relationships they \| \| \| enable.\]{.mark} \| IA-8 (4) \|
+--------------------------------------------------+-------------------+
\| \[Federation authorities\]{.mark} **SHALL** \| IA-4(6) \| \|
\[individually vet each participant in the \| \| \| federation to
determine whether they adhere to \| \| \| their expected
standards.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Vetting of IdPs and RPs\]{.mark} **SHALL** \| IA-1 a. 1 (a) \| \|
\[establish, as a minimum, that:\]{.mark} \| \| \| \| IA-4(6) \| \| -
\[Assertions generated by IdPs adhere to the \| \| \| \> requirements in
\[Sec. \| \| \| \> 6\](https://pages.nist. \| \| \|
gov/800-63-4/sp800-63c.html#assertions).\]{.mark} \| \| \| \| \| \| -
\[RPs adhere to requirements for handling \| \| \| \> subscriber
attribute data, such as \| \| \| \> retention, aggregation, and
disclosure to \| \| \| \> third parties.\]{.mark} \| \| \| \| \| \| -
\[RP and IdP systems use approved profiles of \| \| \| \> federation
protocols.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Federation authorities\]{.mark} **MAY** \[assist \| \| \| the
technical connection and configuration \| \| \| process between members,
such as by publishing \| \| \| configuration data for IdPs or by issuing
\| \| \| software statements for RPs.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Most federations managed through authorities \| \| \| have a simple
membership model: parties are \| \| \| either in the federation or they
are not. More \| \| \| sophisticated federations\]{.mark} **MAY** \[have
\| \| \| multiple membership tiers that federated parties \| \| \| can
use to tell whether other parties in the \| \| \| federation have been
more thoroughly \| \| \| vetted.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[IdPs\]{.mark} **MAY** \[decide that certain \| \| \| subscriber
attributes are only releasable to RPs \| \| \| in higher tiers and
RPs\]{.mark} **MAY** \[decide \| \| \| to accept certain information
only from IdPs in \| \| \| higher tiers.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.1.3. Proxied Federation \| \|
+--------------------------------------------------+-------------------+
\| \[Where proxies are used, they function as an IdP \| \| \| on one
side and an RP on the other. Therefore, \| \| \| all normative
requirements that apply to IdPs \| \| \| and RPs\]{.mark} **SHALL**
\[apply to proxies in \| \| \| their respective roles.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Federations presented through a proxy\]{.mark} \| \| \| **SHALL**
\[be represented by the lowest FAL used \| \| \| during the proxied
transaction. For example, if \| \| \| a proxy takes in an assertion from
the IdP at \| \| \| FAL2 but presents a downstream assertion to the \|
\| \| RP at FAL1, the entire transaction is considered \| \| \|
FAL1\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Likewise if a federation takes in an assertion \| \| \| at FAL1 but
presents a downstream assertion to \| \| \| the RP at FAL3, the entire
transaction is still \| \| \| considered FAL1. The proxy\]{.mark}
**SHALL** \| \| \| \[communicate this aspect to the RP either at \| \|
\| runtime or through pre-configuration as part of \| \| \| the trust
agreement.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.2. Registration \| \|
+--------------------------------------------------+-------------------+
\| ### 5.2.1. Manual Registration \| \|
+--------------------------------------------------+-------------------+
\| \[IdPs and RPs\]{.mark} **MAY** \[act as their own \| \| \|
authorities on who to federate with as in \[Sec. \| \| \|
5.1.1\](https://p \| \| \|
ages.nist.gov/800-63-4/sp800-63c.html#bilateral) \| \| \| or\]{.mark}
**MAY** \[externalize those authority \| \| \| decisions to an external
party as in \[Sec. \| \| \| 5.1.2\](https://pages.nist.g \| \| \|
ov/800-63-4/sp800-63c.html#authorities).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Protocols requiring the transfer of keying \| \| \|
information\]{.mark} **SHALL** \[use a secure \| \| \| method during the
registration process to \| \| \| exchange keying information needed to
operate \| \| \| the federated relationship, including any shared \| \|
\| secrets or public keys.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Any symmetric keys used in this \| \| \| relationship\]{.mark}
**SHALL** \[be unique to a \| \| \| pair of federation
participants.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Federation relationships\]{.mark} **SHALL** \| \| \| \[establish
parameters regarding expected and \| \| \| acceptable IALs and AALs in
connection with the \| \| \| federated relationship.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.2.2. Dynamic Registration \| \|
+--------------------------------------------------+-------------------+
\| \[This process allows IdPs and RPs to be \| \| \| connected together
without manually establishing \| \| \| a connection between them using
manual \| \| \| registration (See \[Sec. \| \| \|
5.2.1\](https://pages.nist.go \| \| \|
v/800-63-4/sp800-63c.html#manual-registration)). \| \| \| IdPs that
support dynamic registration\]{.mark} \| \| \| **SHALL** \[make their
configuration information \| \| \| (such as dynamic registration
endpoints) \| \| \| available in such a way as to minimize system \| \|
\| administrator involvement.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.3. Authentication and Attribute Disclosure \| \|
+--------------------------------------------------+-------------------+
\| \[Once the IdP and RP have entered into a trust \| \| \| agreement
and have completed registration, the \| \| \| federation protocol can be
used to pass \| \| \| subscriber attributes from the IdP to the RP. \|
\| \| The decision of whether an authentication can \| \| \| occur or
attributes may be passed\]{.mark} \| \| \| **SHALL** \[be determined by
the authorized party \| \| \| stipulated by the trust agreement, through
use \| \| \| of an allowlist, a blocklist, or a runtime \| \| \|
decision.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[A subscriber's attributes\]{.mark} **SHALL** \[be \| \| \|
transmitted between IdP and RP only for identity \| \| \| federation
transactions or support functions \| \| \| such as identification of
compromised subscriber \| \| \| accounts as discussed in \[Sec. \| \| \|
5.5\](https://pages \| \| \|
.nist.gov/800-63-4/sp800-63c.html#privacy-reqs). \| \| \| A subscriber's
attributes are not to be \| \| \| transmitted for any other purposes,
even when \| \| \| parties are allowlisted.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[A subscriber's attributes\]{.mark} **SHALL NOT** \| \| \| \[be used
by the RP for purposes other than those \| \| \| stipulated in the trust
agreement.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The subscriber\]{.mark} **SHALL** \[be informed \| \| \| of the
transmission of attributes to an \| \| \| RP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[In the case where the authorized party is the \| \| \|
organization, the organization\]{.mark} **SHALL** \| \| \| \[make
available to the subscriber the list of \| \| \| approved RPs and the
associated sets of \| \| \| attributes sent to those RPs.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[In the case where the authorized party is the \| \| \| subscriber,
the subscriber\]{.mark} **SHALL** \[be \| \| \| prompted prior to
release of attributes using a \| \| \| runtime decision at the IdP as
described in \| \| \| \[Sec. \| \| \|
5.3.3\](https://pages.nist.gov/800-63 \| \| \|
-4/sp800-63c.html#idp-runtime-decision).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The IdP\]{.mark} **SHALL** \[provide effective \| \| \| mechanisms
for redress of subscriber complaints \| \| \| or problems (e.g.,
subscriber identifies an \| \| \| inaccurate attribute value). See
\[Sec. \| \| \| 10\](https://p \| \| \|
ages.nist.gov/800-63-4/sp800-63c.html#usability) \| \| \| on usability
considerations for redress.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.3.1. IdP Allowlists of RPs \| \|
+--------------------------------------------------+-------------------+
\| \[In a static trust agreement, IdPs\]{.mark} \| \| \| **MAY**
\[establish allowlists of RPs authorized \| \| \| to receive
authentication and attributes from \| \| \| the IdP without a runtime
decision from the \| \| \| subscriber. .\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When placing an RP on its allowlist, the \| \| \| IdP\]{.mark}
**SHALL** \[ensure that the RP abides \| \| \| by all applicable
provisions and requirements in \| \| \| the SP 800-63
guidelines.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The IdP\]{.mark} **SHALL** \[determine which \| \| \| identity
attributes are passed to the \| \| \| allowlisted RP upon
authentication. IdPs\]{.mark} \| \| \| **SHALL** \[make allowlists
available to \| \| \| subscribers as described in \[Sec. \| \| \|
9.2\](https://pages.n \| \| \|
ist.gov/800-63-4/sp800-63c.html#notice).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[IdP allowlists\]{.mark} **SHALL** \[uniquely \| \| \| identify RPs
through the means of domain names, \| \| \| cryptographic keys, or other
identifiers \| \| \| applicable to the federation protocol in \| \| \|
use\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Any entities that share an identifier\]{.mark} \| \| \| **SHALL**
\[be considered equivalent for the \| \| \| purposes of the allowlist.
For example, a \| \| \| wildcard domain identifier of "\*.example.com"
\| \| \| would match the domains "www.example.com", \| \| \|
"service.example.com", and "unknown.example.com" \| \| \| equally. All
three of these sites would be \| \| \| treated as the same RP for
disclosure decisions \| \| \| using the allowlist.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Allowlists\]{.mark} **SHOULD** \[be as specific \| \| \| as
possible to avoid unintentional impersonation \| \| \| of an
RP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.3.2. IdP Blocklists of RPs \| \|
+--------------------------------------------------+-------------------+
\| \[IdPs\]{.mark} **MAY** \[establish blocklists of \| \| \| RPs not
authorized to receive authentication \| \| \| assertions or attributes
from the IdP, even if \| \| \| requested to do so by the
subscriber.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If an RP is on an IdP's blocklist, the \| \| \| IdP\]{.mark}
**SHALL NOT** \[produce an assertion \| \| \| targeting the RP in
question under any \| \| \| circumstances.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[IdP blocklists\]{.mark} **SHALL** \[uniquely \| \| \| identify RPs
through the means of domain names, \| \| \| cryptographic keys, or other
identifiers \| \| \| applicable to the federation protocol in \| \| \|
use.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Any entities that share an identifier\]{.mark} \| \| \| **SHALL**
\[be considered equivalent for the \| \| \| purposes of the blocklist.
For example, a \| \| \| wildcard domain identifier of "\*.example.com"
\| \| \| would match the domains "www.example.com", \| \| \|
"service.example.com", and "unknown.example.com" \| \| \| equally. All
three of these sites would be \| \| \| treated as the same RP for
decisions using the \| \| \| blocklist.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.3.3. IdP Runtime Decisions \| \|
+--------------------------------------------------+-------------------+
\| \[Every RP that is in a trust agreement with an \| \| \| IdP but not
on an allowlist or a blocklist with \| \| \| that IdP\]{.mark} **SHALL**
\[be governed by a \| \| \| default policy in which runtime
authorization \| \| \| decisions will be made by an authorized party \|
\| \| identified by the trust agreement.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The IdP\]{.mark} **SHALL** \[provide the \| \| \| authorized party
with explicit notice and prompt \| \| \| them for positive confirmation
before any \| \| \| attributes about the subscriber are transmitted \|
\| \| to the RP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[At a minimum, the notice\]{.mark} **SHOULD** \[be \| \| \| provided
by the party in the position to provide \| \| \| the most effective
notice and obtain \| \| \| confirmation, consistent with \[Sec. \| \| \|
9.2\](https://pages.n \| \| \|
ist.gov/800-63-4/sp800-63c.html#notice).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The IdP\]{.mark} **SHALL** \[disclose which \| \| \| attributes
will be released to the RP if the \| \| \| transaction is
approved.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If the federation protocol in use allows for \| \| \| optional
attribute disclosure at runtime, the \| \| \| authorized party\]{.mark}
**SHALL** \[be given the \| \| \| option to decide whether to transmit
specific \| \| \| attributes to the RP without terminating the \| \| \|
federation transaction entirely.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[To mitigate the risk of unauthorized exposure \| \| \| of sensitive
information (e.g., shoulder \| \| \| surfing), the IdP\]{.mark}
**SHALL**\[, by \| \| \| default, mask sensitive information displayed
to \| \| \| the authorized party.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If the authorized party is the subscriber, the \| \| \|
IdP\]{.mark} **SHALL** \[provide mechanisms for \| \| \| the subscriber
to temporarily unmask such \| \| \| information in order for the
subscriber to view \| \| \| full values before transmission. For more \|
\| \| details on masking, see \[Sec. \| \| \| 10\](https://p \| \| \|
ages.nist.gov/800-63-4/sp800-63c.html#usability) \| \| \| on usability
considerations.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[An IdP\]{.mark} **MAY** \[employ mechanisms to \| \| \| remember
and re-transmit the exact attribute \| \| \| bundle to the same RP,
remembering the \| \| \| authorized party's decision. This mechanism is
\| \| \| associated with the subscriber account as \| \| \| managed by
the IdP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If such a mechanism is provided, the \| \| \| IdP\]{.mark}
**SHALL** \[allow the authorized \| \| \| party to revoke such
remembered access at a \| \| \| future time.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.3.4. RP Allowlists of IdPs \| \|
+--------------------------------------------------+-------------------+
\| \[RPs\]{.mark} **MAY** \[establish allowlists of \| \| \| IdPs from
which the RP will accept \| \| \| authentication and attributes without
a runtime \| \| \| decision from the subscriber.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When placing an IdP in its allowlist, the \| \| \| RP\]{.mark}
**SHALL** \[ensure that the IdP abides \| \| \| by the provisions and
requirements in these \| \| \| guidelines.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[RP allowlists\]{.mark} **SHALL** \[uniquely \| \| \| identify IdPs
through the means of domain names, \| \| \| cryptographic keys, or other
identifiers \| \| \| applicable to the federation protocol in \| \| \|
use.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.3.5. RP Blocklists of IdPs \| \|
+--------------------------------------------------+-------------------+
\| \[RPs\]{.mark} **MAY** \[also establish blocklists \| \| \| of IdPs
that the RP will not accept \| \| \| authentication or attributes from,
even when \| \| \| requested by the subscriber. A blocklisted IdP \| \|
\| can be otherwise in a valid trust agreement with \| \| \| the RP, for
example if both are under the same \| \| \| federation
authority.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[RP blocklists\]{.mark} **SHALL** \[uniquely \| \| \| identify IdPs
through the means of domain names, \| \| \| cryptographic keys, or other
identifiers \| \| \| applicable to the federation protocol in \| \| \|
use.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.3.6. RP Runtime Decisions \| \|
+--------------------------------------------------+-------------------+
\| \[Every IdP that is in a trust agreement with an \| \| \| RP but not
on an allowlist or a blocklist with \| \| \| that RP\]{.mark} **SHALL**
\[be governed by a \| \| \| default policy in which runtime
authorization \| \| \| decisions will be made by the authorized party \|
\| \| indicated in the trust agreement.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The RP\]{.mark} **MAY** \[employ mechanisms to \| \| \| remember
the authorized party's decision to use \| \| \| a given IdP. Since this
mechanism is employed \| \| \| prior to authentication at the RP, the
manner in \| \| \| which the RP provides this mechanism (e.g., a \| \|
\| browser cookie outside the authenticated \| \| \| session) is
separate from the RP subscriber \| \| \| account described in \[Sec. \|
\| \| 5.4\](https://pages.nist. \| \| \|
gov/800-63-4/sp800-63c.html#rp-account).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If such a mechanism is provided, the RP\]{.mark} \| \| \| **SHALL**
\[allow the authorized party to revoke \| \| \| such remembered options
at a future \| \| \| time.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.4. RP Subscriber Accounts \| \|
+--------------------------------------------------+-------------------+
\| \[The RP subscriber account\]{.mark} **SHALL** \[be \| IA-4 b., IA-4
c., \| \| bound to at least one federated identifier, and \| IA-8 \| \|
a given federated identifier is bound to only \| \| \| one RP subscriber
account at a given RP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[An RP subscriber account is *terminated* when \| \| \| the RP
removes all access to the account at the \| \| \| RP.
Termination\]{.mark} **SHALL** \[include \| \| \| unbinding any
federated identifiers and bound \| \| \| authenticators as well as
removing attributes \| \| \| and information associated with the account
\| \| \| except what is required for auditing and \| \| \| security
purposes.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[An RP\]{.mark} **MAY** \[terminate an RP \| \| \| subscriber
account independently from the IdP \| \| \| for a variety of reasons,
regardless of the \| \| \| current validity of the subscriber account
from \| \| \| which it is derived.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[An authenticated session\]{.mark} **SHALL** \[be \| IA-8 \| \|
created by the RP only when the RP has processed \| \| \| and verified a
valid assertion from the IdP that \| \| \| is the issuer of the
federated identifier \| \| \| associated with the RP subscriber \| \| \|
account.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If the assertion also requires presentation of \| IA-8 \| \| a
bound authenticator at FAL3, the bound \| \| \| authenticator\]{.mark}
**SHALL** \[also be \| \| \| presented and processed before the RP
subscriber \| \| \| account is associated with an authenticated \| \| \|
session, as discussed in \[Sec. \| \| \| 6.1.2\](https://pages.nist \|
\| \| .gov/800-63-4/sp800-63c.html#boundauth).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.4.1. Provisioning Models \| \|
+--------------------------------------------------+-------------------+
\| \[The lifecycle of the provisioning process for \| \| \| an RP
subscriber account varies depending on \| \| \| factors including the
trust agreement discussed \| \| \| in \[Sec. \| \| \|
5.1\](https://pages.n \| \| \|
ist.gov/800-63-4/sp800-63c.html#trust-agreement) \| \| \| and the
deployment pattern of the IdP and RP. \| \| \| However, in all cases,
the RP subscriber \| \| \| account\]{.mark} **SHALL** \[be provisioned
at the \| \| \| RP prior to the establishment of an \| \| \|
authenticated session at the RP in one of the \| \| \| following
ways:\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| **\[Just-In-Time Provisioning\]{.mark}** \| IA-4 b., IA-4 c., \| \|
\| IA-4(5) \| \| \> \[An RP subscriber account is created \| \| \| \>
automatically the first time the RP receives \| \| \| \> an assertion
with an unknown federated \| \| \| \> identifier from an IdP. Any
identity \| \| \| \> attributes learned during the federation \| \| \|
\> process, either within the assertion or \| \| \| \> through an
identity API as discussed in \[Sec. \| \| \| \>
6.3\](https://pages.nist.gov/ \| \| \|
800-63-4/sp800-63c.html#s-identity-api),\]{.mark} \| \| \| \> **MAY**
\[be associated with the RP subscriber \| \| \| \> account. Accounts
provisioned in this way are \| \| \| \> bound to the federated
identifier in the \| \| \| \> assertion used to provision them. This is
the \| \| \| \> most common form of provisioning in federation \| \| \|
\> systems, as it requires the least coordination \| \| \| \> between
the RP and IdP. However, in such \| \| \| \> systems, the RP\]{.mark}
**SHALL** \[be \| \| \| \> responsible for managing any cached
attributes \| \| \| \> it might have.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| **\[Pre-provisioning\]{.mark}** \| IA-4 b., IA-4 c. \| \| \| \| \| \>
\[An RP subscriber account is created by the \| \| \| \> IdP pushing the
attributes to the RP or the RP \| \| \| \> pulling attributes from the
IdP. \| \| \| \> Pre-provisioning of accounts generally occurs \| \| \|
\> in bulk through a provisioning API as \| \| \| \> discussed in \[Sec.
\| \| \| \> 5.4.3\](https://pages.nis \| \| \|
t.gov/800-63-4/sp800-63c.html#provisioning-api), \| \| \| \> as the
provisioning occurs prior to the \| \| \| \> represented subscribers
authenticating through \| \| \| \> a federated transaction.
Pre-provisioned \| \| \| \> accounts\]{.mark} **SHALL** \[be bound to a
\| \| \| \> federated identifier at the time of \| \| \| \>
provisioning. Any time a particular federated \| \| \| \> identifier is
seen by the RP, the associated \| \| \| \> account can be logged in as a
result. This \| \| \| \> form of provisioning requires infrastructure \|
\| \| \> and planning on the part of the IdP and RP, \| \| \| \> but
these processes can be facilitated by \| \| \| \> automated protocols.
The RP also collects \| \| \| \> attributes about users who have not
interacted \| \| \| \> with the RP system yet, which can cause \| \| \|
\> privacy issues. Additionally, the IdP and RP \| \| \| \> must keep
the set of provisioned accounts \| \| \| \> synchronized over time as
discussed in \[Sec. \| \| \| \> 5.4.2\](https://pages.nist.gov/ \| \| \|
800-63-4/sp800-63c.html#attribute-sync).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \> \[Other RP subscriber account provisioning \| \| \| \> models are
possible but the details of such \| \| \| \> models are outside the
scope of these \| \| \| \> guidelines. The details of any alternative \|
\| \| \> provisioning model\]{.mark} **SHALL** \[be \| \| \| \> included
in the privacy risk assessments of \| \| \| \> the IdP and RP.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[All organizations\]{.mark} **SHALL** \[document \| \| \| their
provisioning model as part of their trust \| \| \| agreement.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| ### 5.4.2. Attribute Synchronization \| \|
+--------------------------------------------------+-------------------+
\| \[From the RP's perspective, the IdP is the \| IA-4(9) \| \|
authoritative source for any attributes that the \| \| \| IdP asserts as
being associated with the \| \| \| subscriber account at the IdP.
However, the \| \| \| RP\]{.mark} **MAY** \[additionally collect, and \|
\| \| optionally verify, other attributes to associate \| \| \| with the
RP subscriber account. Sometimes, these \| \| \| attributes can even
override what's asserted by \| \| \| the IdP. For example, if an IdP
asserts a full \| \| \| display name for the subscriber, the RP can \|
\| \| allow the subscriber to provide an alternative \| \| \| preferred
name for use at the RP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The IdP\]{.mark} **SHOULD** \[signal downstream \| IA-4(9) \| \|
RPs when the attributes of a subscriber account \| \| \| available to
the RP have been updated. This can \| \| \| be accomplished using shared
signaling as \| \| \| described in \[Sec. \| \| \| 5.7\](https://pages.n
\| \| \| ist.gov/800-63-4/sp800-63c.html#shared-signals), \| \| \|
through a provisioning API as described in \[Sec. \| \| \|
5.4.3\](https://pages.nis \| \| \|
t.gov/800-63-4/sp800-63c.html#provisioning-api), \| \| \| or by
providing a signal in the assertion (e.g., \| \| \| a timestamp
indicating when relevant attributes \| \| \| were last updated, allowing
the RP to determine \| \| \| that its cache is out of date).\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| \[The IdP\]{.mark} **SHOULD** \[signal downstream \| \| \| RPs when a
subscriber account is terminated, or \| \| \| when the subscriber
account's access to an RP is \| \| \| revoked. This can be accomplished
using shared \| \| \| signaling as described in \[Sec. \| \| \|
5.7\](https://pages. \| \| \|
nist.gov/800-63-4/sp800-63c.html#shared-signals) \| \| \| or through a
provisioning API as described in \| \| \| \[Sec. \| \| \|
5.4.3\](https://pages.nis \| \| \|
t.gov/800-63-4/sp800-63c.html#provisioning-api). \| \| \| Upon receiving
such a signal, the RP\]{.mark} \| \| \| **SHALL** \[terminate the RP
subscriber account \| \| \| and remove all personal information
associated \| \| \| with the RP subscriber account, except what is \| \|
\| required for audit and security \| \| \| purposes.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.4.3. Provisioning APIs \| \|
+--------------------------------------------------+-------------------+
\| \[The attributes in the provisioning API \| \| \| available to a
given RP\]{.mark} **SHALL** \[be \| \| \| limited to only those
necessary for the RP to \| \| \| perform its functions.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[As part of establishing the trust agreement, \| \| \| the
IdP\]{.mark} **SHALL** \[document when an RP \| \| \| is given access to
a provisioning API including \| \| \| at least the following:\]{.mark}
\| \| \| \| \| \| - \[the purpose for the access using the \| \| \| \>
provisioning model;\]{.mark} \| \| \| \| \| \| - \[the set of attributes
made available to the \| \| \| \> RP;\]{.mark} \| \| \| \| \| \| -
\[whether the API functions as a push to the \| \| \| \> RP, a pull from
the RP, or both; \| \| \| \> and\]{.mark} \| \| \| \| \| \| - \[the
population of subscribers whose \| \| \| \> attributes are made
available to the \| \| \| \> RP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The IdP\]{.mark} **SHALL** \[require \| \| \| authentication from
the RP for any pull-based \| \| \| access to a provisioning API. The
RP\]{.mark} \| \| \| **SHALL** \[require authentication from the IdP \|
\| \| for any push-based access to a provisioning \| \| \| API.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[A provisioning API\]{.mark} **SHALL NOT** \[be \| \| \| made
available under a dynamic or implicit trust \| \| \| agreement.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[The IdP\]{.mark} **SHALL NOT** \[make a \| \| \| provisioning API
available to any RP outside of \| \| \| an established trust
agreement.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The IdP\]{.mark} **SHALL** \[provide access to a \| \| \|
provisioning API only as part of a federated \| \| \| identity
relationship with an RP to facilitate \| \| \| federated transactions
with that RP and related \| \| \| functions such as signaling revocation
of the \| \| \| subscriber account.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The IdP\]{.mark} **SHALL** \[revoke an RP's \| \| \| access to the
provisioning API once access is no \| \| \| longer required by the RP
for its functioning \| \| \| purposes or when the trust agreement is \|
\| \| terminated.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Any provisioning API provided to the RP\]{.mark} \| \| \| **SHALL**
\[be under the control and jurisdiction \| \| \| of the IdP.\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| \[External attribute providers\]{.mark} **MAY** \| \| \| \[be used as
information sources by the IdP to \| \| \| provide attributes through
this provisioning \| \| \| API, but the IdP is responsible for the
content \| \| \| and accuracy of the information provided by the \| \|
\| referenced attribute providers.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When a provisioning API is in use, the \| \| \| IdP\]{.mark}
**SHALL** \[signal to the RP when a \| \| \| subscriber account has been
terminated.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When receiving such a signal, the RP\]{.mark} \| \| \| **SHALL**
\[terminate the associated RP \| \| \| subscriber account.\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| ### 5.4.4. Attribute Collection \| \|
+--------------------------------------------------+-------------------+
\| \[The RP\]{.mark} **MAY** \[collect and maintain \| \| \| additional
attributes from the subscriber beyond \| \| \| those provided by the
IdP. These attributes are \| \| \| governed separately from any
federation \| \| \| agreement since they are collected directly by \| \|
\| the RP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[All attributes associated with an RP subscriber \| \| \| account,
regardless of their source,\]{.mark} \| \| \| **SHALL** \[be removed
when the RP subscriber \| \| \| account is terminated.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The RP\]{.mark} **SHALL** \[disclose to the \| \| \| subscriber the
purpose for collection of any \| \| \| additional attributes.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[These attributes\]{.mark} **SHALL** \[be used \| \| \| solely for
the stated purposes of the RP's \| \| \| functionality and\]{.mark}
**SHALL NOT** \[have \| \| \| any secondary use, including communication
of \| \| \| said attributes to other parties.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[An RP\]{.mark} **SHALL** \[disclose any \| \| \| additional
attributes collected, and their use, \| \| \| as part of its System of
Records Notice \| \| \| (SORN).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The RP\]{.mark} **SHALL** \[provide an effective \| \| \| means of
redress for the subscriber to update \| \| \| and remove these
additionally-collected \| \| \| attributes from the RP subscriber
account. See \| \| \| \[Sec. \| \| \| 10\](https://p \| \| \|
ages.nist.gov/800-63-4/sp800-63c.html#usability) \| \| \| on usability
considerations for redress.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.4 \| \| \| .5. Time-based Removal of RP Subscriber Accounts \|
\|
+--------------------------------------------------+-------------------+
\| \[Over time, an RP could accumulate RP subscriber \| \| \| accounts
that are no longer accessible from the \| \| \| IdP. This poses a risk
to the RP for holding \| \| \| personal information in the RP subscriber
\| \| \| accounts, especially when a just-in-time \| \| \| provisioning
model is in use and no shared \| \| \| signaling is available from the
IdP to signal \| \| \| subscriber account termination as discussed in \|
\| \| \[Sec. \| \| \| 5.7\](https://pages.n \| \| \|
ist.gov/800-63-4/sp800-63c.html#shared-signals). \| \| \| In such
circumstances, the RP\]{.mark} **SHOULD** \| \| \| \[employ a time-based
mechanism to identify RP \| \| \| subscriber accounts for termination
that have \| \| \| not been accessed after a period of time, for \| \|
\| example, 120 days since last access.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When processing such an inactive account, the \| \| \| RP\]{.mark}
**SHALL** \[provide sufficient notice \| \| \| to the subscriber, if
possible, about the \| \| \| pending termination of the account and
provide \| \| \| the subscriber with an option to re-activate the \| \|
\| account prior to its scheduled \| \| \| termination.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Upon termination, the RP\]{.mark} **SHALL** \| \| \| \[remove all
personal information associated with \| \| \| the RP subscriber account,
except what is \| \| \| required for audit and security \| \| \|
purposes.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.5. Privacy Requirements \| \|
+--------------------------------------------------+-------------------+
\| \[If an IdP discloses information on subscriber \| \| \| activities
at an RP to any party, or processes \| \| \| the subscriber's attributes
for any purpose \| \| \| other than identity proofing, authentication,
or \| \| \| attribute assertions (collectively "identity \| \| \|
service"), related fraud mitigation, to comply \| \| \| with law or
legal process, or, in the case of a \| \| \| specific user request, to
transmit the \| \| \| information, the IdP\]{.mark} **SHALL** \| \| \|
\[implement measures to maintain predictability \| \| \| and
manageability commensurate with the privacy \| \| \| risk arising from
the additional \| \| \| processing.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Measures\]{.mark} **MAY** \[include providing \| \| \| clear
notice, obtaining subscriber consent, or \| \| \| enabling selective use
or disclosure of \| \| \| attributes.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When an IdP uses consent measures, the \| \| \| IdP\]{.mark}
**SHALL NOT** \[make consent for the \| \| \| additional processing a
condition of the \| \| \| identity service.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The IdP\]{.mark} **SHOULD** \[employ technical \| IA-4(8) \| \|
measures, such as the use of pairwise \| \| \| pseudonymous identifiers
described in \[Sec. \| IA-8 (6) \| \| 6.2.5\](htt \| \| \|
ps://pages.nist.gov/800-63-4/sp800-63c.html#ppi) \| \| \| or
privacy-enhancing cryptographic protocols, to \| \| \| provide
disassociability and discourage \| \| \| subscriber activity tracking
and profiling \| \| \| between RPs.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[An IdP\]{.mark} **MAY** \[disclose information on \| \| \|
subscriber activities to RPs for security \| \| \| purposes, such as
communication of suspicious \| \| \| activity or a compromised
subscriber account as \| \| \| described in \[Sec. \| \| \|
5.7\](https://pages.n \| \| \|
ist.gov/800-63-4/sp800-63c.html#shared-signals), \| \| \| if stated
within the trust agreement.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[An RP\]{.mark} **MAY** \[disclose information on \| \| \|
subscriber activities to IdPs for security \| \| \| purposes, such as
communication of suspicious \| \| \| activity or a compromised RP
subscriber account, \| \| \| if stated within the trust
agreement.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[An IdP\]{.mark} **SHOULD** \[signal subscriber \| \| \| account
termination to RPs that have been \| \| \| provisioned with federated
identifiers bound to \| \| \| that subscriber account using shared
signaling \| \| \| as discussed in \[Sec. \| \| \|
5.7\](https://pages.nist.gov/ \| \| \|
800-63-4/sp800-63c.html#shared-signals).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[RPs that receive such a signal from the \| \| \| IdP\]{.mark}
**SHALL** \[terminate the RP \| \| \| subscriber account and remove all
personal \| \| \| information associated with the RP subscriber \| \| \|
account, except what is required for audit and \| \| \| security
purposes.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The following requirements apply specifically \| \| \| to federal
agencies:\]{.mark} \| \| \| \| \| \| 1. \[The agency\]{.mark} **SHALL**
\[consult with \| \| \| \> their Senior Agency Official for Privacy \|
\| \| \> (SAOP) to conduct an analysis determining \| \| \| \> whether
the requirements of the Privacy \| \| \| \> Act are triggered by the
agency that is \| \| \| \> acting as an IdP, by the agency that is \| \|
\| \> acting as an RP, or both (see \[Sec. \| \| \| \>
9.4\](https://pages.nist.gov/8 \| \| \|
00-63-4/sp800-63c.html#agency-privacy)).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| 2. \[The agency\]{.mark} **SHALL** \[publish or \| \| \| \> identify
coverage by a System of Records \| \| \| \> Notice (SORN) as
applicable.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| 3. \[The agency\]{.mark} **SHALL** \[consult with \| \| \| \> their
SAOP to conduct an analysis \| \| \| \> determining whether the
requirements of \| \| \| \> the E-Government Act are triggered by the \|
\| \| \> agency that is acting as an IdP, the \| \| \| \> agency that is
acting as an RP, or \| \| \| \> both.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| 4. \[The agency\]{.mark} **SHALL** \[publish or \| \| \| \> identify
coverage by a Privacy Impact \| \| \| \> Assessment (PIA) as
applicable.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If the RP subscriber account lifecycle process \| \| \| gives the
RP access to attributes through a \| \| \| provisioning API as discussed
in \[Sec. \| \| \| 5.4.3\](https://pages.nis \| \| \|
t.gov/800-63-4/sp800-63c.html#provisioning-api), \| \| \| additional
privacy measures\]{.mark} **SHALL** \| \| \| \[be implemented given the
wide nature of \| \| \| information access. Specifically, it is possible
\| \| \| for the attributes of a subscriber to be \| \| \| provided to
an RP without the subscriber ever \| \| \| interacting with the RP in
question.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[As a consequence, when a provisioning API is \| \| \| used, the
IdP\]{.mark} **SHALL** \[minimize the \| \| \| attributes made available
to the RP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[To prevent the transmission of attributes for \| \| \| users that
will never use an RP, the IdP\]{.mark} \| \| \| **SHALL** \[limit the
population of subscriber \| \| \| accounts available via the
provisioning API to \| \| \| the population of subscribers authorized to
use \| \| \| the RP by the trust agreement.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 5.6. Reauthentication an \| \| \| d Session Requirements in
Federated Environments \| \|
+--------------------------------------------------+-------------------+
\| \[Due to the distributed nature of a federated \| \| \| system, the
subscriber's sessions with the IdP \| \| \| and with the RP terminate
independently of each \| \| \| other. The RP\]{.mark} **SHALL NOT**
\[assume that \| \| \| the subscriber has an active session at the IdP
\| \| \| past the issuance time of the assertion.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The IdP\]{.mark} **SHALL NOT** \[assume that \| \| \| termination
of the subscriber's session at the \| \| \| IdP will propagate to any
sessions that \| \| \| subscriber would have at downstream RPs.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[The RP and IdP\]{.mark} **MAY** \[communicate \| \| \| session
termination requests to other parties in \| \| \| the federation
network, if supported by the \| \| \| federation protocol.\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| \[At the time of a federated login request, the \| \| \|
subscriber\]{.mark} **MAY** \[have a pre-existing \| \| \| session at
the IdP which\]{.mark} **MAY** \[be \| \| \| used to generate an
assertion to the RP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The IdP\]{.mark} **SHALL** \[communicate any \| \| \| information
it has regarding the time of the \| \| \| subscriber's latest
authentication event at the \| \| \| IdP, and the RP\]{.mark} **MAY**
\[use this \| \| \| information in making authorization and access \| \|
\| decisions.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Depending on the capabilities of the federation \| \| \| protocol
in use, the IdP\]{.mark} **SHOULD** \| \| \| \[allow the RP to request
that the subscriber \| \| \| repeat authentication at the IdP as part of
a \| \| \| federation request.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[An RP requiring authentication through a \| \| \| federation
protocol\]{.mark} **SHALL** \[specify \| \| \| the maximum acceptable
authentication age to the \| \| \| IdP, either through the federation
protocol (if \| \| \| possible) or through the parameters of the trust
\| \| \| agreement.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The authentication age represents the time \| \| \| since the last
authentication event in the \| \| \| subscriber's session at the IdP,
and the \| \| \| IdP\]{.mark} **SHALL** \[reauthenticate the \| \| \|
subscriber if they have not been authenticated \| \| \| within that time
period.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The IdP\]{.mark} **SHALL** \[communicate the \| \| \|
authentication event time to the RP to allow the \| \| \| RP to decide
if the assertion is sufficient for \| \| \| authentication at the RP and
to determine the \| \| \| time for the next reauthentication \| \| \|
event.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If an RP is granted access to an identity API \| \| \| along with
the assertion, the lifetime of the \| \| \| access to the identity API
is independent from \| \| \| the lifetime of the assertion itself. Since
\| \| \| access to the identity API is often combined \| \| \| with
access to additional APIs, it is common for \| \| \| this access to be
valid long after the assertion \| \| \| has expired and possibly after
the session with \| \| \| the RP has ended, allowing the RP to access
APIs \| \| \| on the subscriber's behalf while the subscriber \| \| \|
is no longer present. As a consequence, the RP's \| \| \| ability to
successfully fetch additional \| \| \| attributes through an identity
API\]{.mark} \| \| \| **SHALL NOT** \[be used to establish a session at
\| \| \| the RP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Likewise, inability to access an identity \| \| \| API\]{.mark}
**SHOULD NOT** \[be used to end the \| \| \| session at the RP.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| ### 5.7. Shared Signaling \| \|
+--------------------------------------------------+-------------------+
\| \[In some environments, it is useful for the IdP \| \| \| and RP to
send information to each other outside \| \| \| of the federation
transaction. These signals can \| \| \| communicate important changes in
state between \| \| \| parties that would not be otherwise known. The \|
\| \| use of any shared signaling\]{.mark} **SHALL** \| \| \| \[be
documented in the trust agreement between \| \| \| the IdP and
RP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Signaling from the IdP to the RP\]{.mark} \| \| \| **SHALL**
\[require a static trust \| \| \| agreement.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Signaling from the RP to the IdP\]{.mark} \| \| \| **MAY** \[be
used in a static or dynamic trust \| \| \| agreement.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Any use of shared signaling\]{.mark} **SHALL** \| \| \| \[be
documented and made available to the \| \| \| authorized party
stipulated by the trust \| \| \| agreement.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[This documentation\]{.mark} **SHALL** \[include \| \| \| the events
under which a signal is sent, the \| \| \| information included in such
a signal (including \| \| \| any attribute information), and any
additional \| \| \| parameters sent with the signal.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The use of shared signaling\]{.mark} **SHALL** \| \| \| \[be
subject to privacy review under the trust \| \| \| agreement.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[The IdP\]{.mark} **MAY** \[send a signal \| \| \| regarding the
following changes to the \| \| \| subscriber account:\]{.mark} \| \| \|
\| \| \| - \[The account has been terminated.\]{.mark} \| \| \| \| \|
\| - \[The account is suspected of being \| \| \| \>
compromised.\]{.mark} \| \| \| \| \| \| - \[Attributes of the account,
including \| \| \| \> identifiers other than the federated \| \| \| \>
identifier (such as email address or \| \| \| \> certificate CN), have
changed.\]{.mark} \| \| \| \| \| \| - \[The possible range of IAL, AAL,
or FAL for \| \| \| \> the account has changed.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The RP\]{.mark} **MAY** \[send a signal regarding \| \| \| the
following changes to the RP subscriber \| \| \| account:\]{.mark} \| \|
\| \| \| \| - \[The account has been terminated.\]{.mark} \| \| \| \| \|
\| - \[The account is suspected of being \| \| \| \>
compromised.\]{.mark} \| \| \| \| \| \| - \[An RP-managed bound
authenticator is \| \| \| \> added.\]{.mark} \| \| \| \| \| \| - \[An
RP-managed bound authenticator is \| \| \| \> removed.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Additional signals from both the IdP and \| \| \| RP\]{.mark}
**MAY** \[be allowed subject to \| \| \| privacy and security review as
part of the trust \| \| \| agreement.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 6. Assertions \| \|
+--------------------------------------------------+-------------------+
\| \[Assertions\]{.mark} **SHALL** \[represent a \| \| \| discrete
authentication event of the subscriber \| \| \| at the IdP and\]{.mark}
**SHALL** \[be processed \| \| \| as a discrete authentication event at
the \| \| \| RP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[All assertions\]{.mark} **SHALL** \[include the \| IA-8 \| \|
following attributes:\]{.mark} \| \| \| \| \| \| 1. \[Subject
identifier: An identifier for the \| \| \| \> party to which the
assertion applies \| \| \| \> (i.e., the subscriber).\]{.mark} \| \| \|
\| \| \| 2. \[Issuer identifier: An identifier for the \| \| \| \>
issuer of the assertion (i.e., the \| \| \| \> IdP).\]{.mark} \| \| \|
\| \| \| 3. \[Audience identifier: An identifier for the \| \| \| \>
party intended to consume the assertion \| \| \| \> (i.e., the
RP).\]{.mark} \| \| \| \| \| \| 4. \[Issuance time: A timestamp
indicating when \| \| \| \> the IdP issued the assertion.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| 5. \[Validity time window: A period of time \| \| \| \> outside of
which the assertion\]{.mark} \| \| \| \> **SHALL NOT** \[be accepted as
valid by the \| \| \| \> RP for the purposes of authenticating the \| \|
\| \> subscriber and starting an authenticated \| \| \| \> session at
the RP. This is usually \| \| \| \> communicated by means of an
expiration \| \| \| \> timestamp for the assertion in addition to \| \|
\| \> the issuance timestamp.\]{.mark} \| \| \| \| \| \| 6. \[Assertion
identifier: A value uniquely \| \| \| \> identifying this assertion,
used to \| \| \| \> prevent attackers from replaying prior \| \| \| \>
assertions.\]{.mark} \| \| \| \| \| \| 7. \[Signature: Digital signature
or message \| \| \| \> authentication code (MAC), including key \| \| \|
\> identifier or public key associated with \| \| \| \> the IdP,
covering the entire \| \| \| \> assertion.\]{.mark} \| \| \| \| \| \| 8.
\[Authentication time: A timestamp indicating \| \| \| \> when the IdP
last verified the presence of \| \| \| \> the subscriber at the IdP
through a \| \| \| \> primary authentication event (if \| \| \| \>
available).\]{.mark} \| \| \| \| \| \| 9. \[IAL: Indicator of the IAL of
the subscriber \| \| \| \> account being represented in the \| \| \| \>
assertion, or an indication that no IAL is \| \| \| \>
asserted.\]{.mark} \| \| \| \| \| \| 10. \[AAL: Indicator of the AAL
used when the \| \| \| \> subscriber authenticated to the IdP, or an \|
\| \| \> indication that no AAL is \| \| \| \> asserted.\]{.mark} \| \|
\| \| \| \| 11. \[FAL: An indicator of the IdP's intended FAL \| \| \|
\> of the federation process represented by \| \| \| \> the
assertion.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[If the assertion is used at FAL3 with a bound \| \| \|
authenticator as described in \[Sec. \| \| \| 6.1.2\](https://pa \| \|
\| ges.nist.gov/800-63-4/sp800-63c.html#boundauth), \| \| \| the
assertion\]{.mark} **SHALL** \[include the \| \| \| following:\]{.mark}
\| \| \| \| \| \| 1. \[Authenticator binding: The public key, key \| \|
\| \> identifier, or other identifier of \| \| \| \> subscriber-held
bound authenticator (for \| \| \| \> IdP-managed bound authenticators)
or \| \| \| \> indicator that an RP-managed bound \| \| \| \>
authenticator is required for verification \| \| \| \> of this
assertion.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Assertions\]{.mark} **MAY** \[also include \| \| \| additional
items, including the following \| \| \| information:\]{.mark} \| \| \|
\| \| \| 1. \[Attribute values and derived attribute \| \| \| \> values:
Information about the \| \| \| \> subscriber.\]{.mark} \| \| \| \| \| \|
2. \[Attribute metadata: Additional information \| \| \| \> about one or
more subscriber attributes, \| \| \| \> such as those described in NIST
Internal \| \| \| \> Report 8112 \| \| \| \>
\[\[NISTIR8112\]\](https://pages.nist.gov/ \| \| \|
800-63-4/sp800-63c.html#ref-nistir8112).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Assertions\]{.mark} **SHOULD** \[specify the AAL \| \| \| when an
authentication event is being asserted \| \| \| and IAL when identity
proofed attributes (or \| \| \| values derived from those attributes)
are being \| \| \| asserted.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[All metadata within the assertion\]{.mark} \| \| \| **SHALL** \[be
validated by the RP upon \| \| \| receipt:\]{.mark} \| \| \| \| \| \| -
\[*Issuer verification*: ensuring the \| \| \| \> assertion was issued
by the IdP the RP \| \| \| \> expects it to be from.\]{.mark} \| \| \|
\| \| \| - \[*Signature validation*: ensuring the \| \| \| \> signature
of the assertion is valid and \| \| \| \> corresponds to a key belonging
to the IdP \| \| \| \> sending the assertion.\]{.mark} \| \| \| \| \|
\| - \[*Time validation*: ensuring the expiration \| \| \| \> and issue
times are within acceptable \| \| \| \> limits of the current
timestamp.\]{.mark} \| \| \| \| \| \| - \[*Audience restriction*:
ensuring this RP is \| \| \| \> the intended recipient of the \| \| \|
\> assertion.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[An RP\]{.mark} **SHALL** \[treat subject \| IA-8 \| \| identifiers
as not inherently globally unique. \| \| \| Instead, the value of the
assertion's subject \| IA-12 b. \| \| identifier is usually in a
namespace under the \| \| \| assertion issuer's control. This allows an
RP to \| \| \| talk to multiple IdPs without incorrectly \| \| \|
conflating subjects from different IdPs.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Assertions\]{.mark} **MAY** \[include additional \| \| \|
attributes about the subscriber. \[Section \| \| \|
6.2.3\](https://pages.nist. \| \| \|
gov/800-63-4/sp800-63c.html#encrypted-assertion) \| \| \| contains
privacy requirements for presenting \| \| \| attributes in
assertions.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The RP\]{.mark} **MAY** \[be given limited access \| \| \| to an
identity API as discussed in \[Sec. \| \| \| 6.3\](https://pages. \| \|
\| nist.gov/800-63-4/sp800-63c.html#s-identity-api) \| \| \| along with
the assertion, which the RP can use \| \| \| to fetch additional
identity attributes for the \| \| \| subscriber.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The assertion's validity time window is the \| \| \| time between
its issuance and its expiration. \| \| \| This window needs to be large
enough to allow \| \| \| the RP to process the assertion and create a \|
\| \| local application session for the subscriber, \| \| \| but should
not be longer than necessary for such \| \| \| establishment. Long-lived
assertions have a \| \| \| greater risk of being stolen or replayed; a
\| \| \| short assertion validity time window mitigates \| \| \| this
risk. Assertion validity time \| \| \| windows\]{.mark} **SHALL NOT**
\[be used to limit \| \| \| the session at the RP. See \[Sec. \| \| \|
5.3\](https://pages.nist \| \| \|
.gov/800-63-4/sp800-63c.html#federation-session) \| \| \| for more
information.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 6.1.1. Bearer Assertions \| \|
+--------------------------------------------------+-------------------+
\| \[Note that mere possession of a bearer assertion \| \| \| or
reference is not always enough to impersonate \| \| \| a subscriber. For
example, if an assertion is \| \| \| presented in the back-channel
federation model \| \| \| (described in \[Sec. \| \| \|
7.1\](https://pages. \| \| \|
nist.gov/800-63-4/sp800-63c.html#back-channel)), \| \| \| additional
controls\]{.mark} **MAY** \[be placed \| \| \| on the transaction (such
as identification of \| \| \| the RP and assertion injection
protections) that \| \| \| help further protect the RP from fraudulent
\| \| \| activity.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 6.1.2. Bound Authenticators \| \|
+--------------------------------------------------+-------------------+
\| \[A bound authenticator\]{.mark} **SHALL** \[be \| \| \| unique per
subscriber at the RP such that two \| \| \| subscribers cannot present
the same \| \| \| authenticator for their separate RP subscriber \| \|
\| accounts.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[All bound authenticators\]{.mark} **SHALL** \[be \| \| \| phishing
resistant. Consequently, \| \| \| subscriber-chosen values such as a
memorized \| \| \| secret cannot be used as bound \| \| \|
authenticators.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The RP\]{.mark} **SHALL** \[accept authentication \| \| \| from a
bound authenticator only in the context \| \| \| of processing an
assertion. Consequently, the \| \| \| subscriber can not use a bound
authenticator to \| \| \| log into the RP directly, bypassing the IdP in
\| \| \| the process\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 6.1.2.1. IdP-Managed Bound Authenticators \| \|
+--------------------------------------------------+-------------------+
\| \[When the bound authenticator is managed by the \| \| \| IdP as in
\[Fig. \| \| \| 9\](https: \| \| \|
//pages.nist.gov/800-63-4/sp800-63c.html#fig-9), \| \| \| a unique
identifier for the authenticator (such \| \| \| as its public
key)\]{.mark} **SHALL** \[be \| \| \| included in the assertion
presented to the \| \| \| RP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The RP\]{.mark} **SHALL** \[prompt the subscriber \| \| \| to prove
possession of the identified bound \| \| \| authenticator.\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| \[An IdP-managed bound authenticator\]{.mark} \| \| \| **MAY** \[be
distinct from the primary \| \| \| authenticator the subscriber uses to
\| \| \| authenticate to the IdP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Bound authenticators managed at the IdP\]{.mark} \| \| \| **SHALL**
\[be phishing resistant and\]{.mark} \| \| \| **SHALL** \[be
independently dereferenceable by \| \| \| the RP based on a
mutually-trusted security \| \| \| framework, such as a public-key \| \|
\| infrastructure.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When processing an IdP-managed bound \| \| \| authenticator for the
first time, the RP\]{.mark} \| \| \| **SHOULD** \[verify whether the
authenticator \| \| \| being presented is appropriate to be associated
\| \| \| with the subscriber account, such as through \| \| \| account
resolution from the attributes in the \| \| \| authenticator's presented
information.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 6.1.2.2. RP-Managed Bound Authenticators \| \|
+--------------------------------------------------+-------------------+
\| \[When the bound authenticator is managed by the \| \| \| RP as in
\[Fig. \| \| \| 10\](https:/ \| \| \|
/pages.nist.gov/800-63-4/sp800-63c.html#fig-10), \| \| \| the
IdP\]{.mark} **SHALL** \[include an indicator \| \| \| in the assertion
that the assertion is to be \| \| \| used with a bound authenticator at
FAL3.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The unique identifier for the authenticator \| \| \| (such as its
public key)\]{.mark} **SHALL** \[be \| \| \| stored in the RP subscriber
account.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[For RP-provided authenticators, the \| IA-5 (16) \| \|
administrator of the RP\]{.mark} **SHALL** \[issue \| \| \| the
authenticator to the subscriber directly for \| \| \| use with an FAL3
login.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The administrator of the RP\]{.mark} **SHALL** \| \| \| \[store a
unique identifier for the bound \| \| \| authenticator in the RP
subscriber \| \| \| account.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The administrator of the RP\]{.mark} **SHALL** \| \| \| \[determine
through independent means that the \| \| \| party to which the
authenticator is issued is \| \| \| the identified subject of the RP
subscriber \| \| \| account.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[For subscriber-provided authenticators, if no \| \| \| bound
authenticators are associated with the RP \| \| \| subscriber account,
the RP\]{.mark} **SHALL** \| \| \| \[perform a binding ceremony to
establish the \| \| \| connection between the authenticator, the \| \|
\| subscriber, and the RP subscriber account as \| \| \| shown in \[Fig.
\| \| \| 11\](https://pages.n \| \| \|
ist.gov/800-63-4/sp800-63c.html#fig-11).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The RP\]{.mark} **SHALL** \[first establish an \| \| \|
authenticated session using federation with an \| \| \| assertion that
meets all the other requirements \| \| \| of FAL3, including an
indication that the \| \| \| assertion is intended for use at FAL3 with
an \| \| \| RP-managed bound authenticator.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The subscriber\]{.mark} **SHALL** \[immediately \| \| \| be
prompted to present and authenticate with the \| \| \| proposed
authenticator.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Upon successful presentation of the \| \| \| authenticator, the
RP\]{.mark} **SHALL** \[store a \| \| \| unique identifier for the
authenticator (such as \| \| \| its public key) and associate this with
the RP \| \| \| subscriber account associated with the federated \| \|
\| identifier. If the subscriber fails to \| \| \| successfully present
an appropriate \| \| \| authenticator, the binding ceremony \| \| \|
fails.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The binding ceremony session\]{.mark} **SHALL** \| \| \| \[have a
timeout of five minutes or less. The \| \| \| session used during the
ceremony is not an \| \| \| authenticated session for the purposes of \|
\| \| logging in.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Upon successful completion of the binding \| \| \| ceremony, the
RP\]{.mark} **SHALL** \[immediately \| \| \| request a new assertion
from the IdP at FAL3, \| \| \| including prompting the subscriber for
the \| \| \| newly-bound authenticator.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[An RP\]{.mark} **MAY** \[allow a subscriber to \| \| \| bind
multiple subscriber-provided authenticators \| \| \| at FAL3. If this is
the case, and the RP \| \| \| subscriber account has one or more
existing \| \| \| bound authenticators, the binding ceremony makes \| \|
\| use of the existing ability to reach \| \| \| FAL3.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The subscriber\]{.mark} **SHALL** \[first be \| \| \| prompted to
present an existing bound \| \| \| authenticator to reach FAL3.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[Upon successful authentication, the RP\]{.mark} \| \| \| **SHALL**
\[immediately prompt the subscriber for \| \| \| the newly-bound
authenticator.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[An RP\]{.mark} **MAY** \[allow a subscriber to \| \| \| unbind a
bound subscriber-provided authenticator \| \| \| from their RP
subscriber account, thereby \| \| \| removing the ability to use that
authenticator \| \| \| for FAL3.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When a bound authenticator is unbound, the \| \| \| RP\]{.mark}
**SHALL** \[terminate all current FAL3 \| \| \| sessions for the
subscriber and\]{.mark} \| \| \| **SHALL** \[require reauthentication of
the \| \| \| subscriber from the IdP. Note that in many \| \| \| cases,
a subscriber will need to unbind a bound \| \| \| authenticator to
account for a lost or \| \| \| compromised authenticator, and the
subscriber \| \| \| will therefore not have access to the \| \| \|
authenticator during the unbinding \| \| \| process.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The RP\]{.mark} **SHALL** \[notify the subscriber \| \| \| through
an out-of-band mechanism, and\]{.mark} \| \| \| **SHOULD** \[notify the
IdP using a shared \| \| \| signaling system (see \[Sec. \| \| \|
5.7\](https://pages.ni \| \| \|
st.gov/800-63-4/sp800-63c.html#shared-signals)), \| \| \| if any of the
following events occur:\]{.mark} \| \| \| \| \| \| - \[A new
authenticator is bound to the RP \| \| \| \> subscriber
account.\]{.mark} \| \| \| \| \| \| - \[An existing bound authenticator
is unbound \| \| \| \> from the RP subscriber account.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 6.1.2.3. Processing Bound Authenticators \| \|
+--------------------------------------------------+-------------------+
\| \[The following requirements apply to all \| \| \| assertions
associated with a bound \| \| \| authenticator:\]{.mark} \| \| \| \| \|
\| 1. \[The subscriber\]{.mark} **SHALL** \[prove \| \| \| \> possession
of the bound authenticator to \| \| \| \> the RP, in addition to
presentation of the \| \| \| \> assertion itself.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| 2. \[If the authenticator is managed at the IdP, \| \| \| \>
reference to a given authenticator found \| \| \| \> within an
assertion\]{.mark} **SHALL** \[be \| \| \| \> trusted at the same level
as all other \| \| \| \> information within the assertion.\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| 3. \[If the authenticator is managed at the IdP, \| \| \| \> the
assertion\]{.mark} **SHALL NOT** \| \| \| \> \[include an unencrypted
private or \| \| \| \> symmetric key to be used as an \| \| \| \>
authenticator with the \| \| \| \> presentation.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| 4. \[The RP\]{.mark} **SHALL** \[process and \| \| \| \> validate the
assertion in addition to the \| \| \| \> bound authenticator.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| 5. \[Failure to authenticate with the bound \| \| \| \>
authenticator\]{.mark} **SHALL** \[result in \| \| \| \> an error at the
RP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 6.2. Assertion Protection \| \|
+--------------------------------------------------+-------------------+
\| \[Independent of the binding mechanism (discussed \| \| \| in \[Sec.
\| \| \| 6.1\](https://pages.nist \| \| \|
.gov/800-63-4/sp800-63c.html#assertion-binding)) \| \| \| or the
federation model used to obtain them \| \| \| (described in \[Sec. \| \|
\| 5.1\](https://pages.nis \| \| \|
t.gov/800-63-4/sp800-63c.html#trust-agreement)), \| \| \|
assertions\]{.mark} **SHALL** \[include a set of \| \| \| protections to
prevent attackers from \| \| \| manufacturing valid assertions or
reusing \| \| \| captured assertions at disparate RPs. The \| \| \|
protections required are dependent on the \| \| \| details of the use
case being considered, and \| \| \| specific protections are listed
here.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 6.2.1. Assertion Identifier \| \|
+--------------------------------------------------+-------------------+
\| \[Assertions\]{.mark} **SHALL** \[be sufficiently \| \| \| unique to
permit unique identification by the \| \| \| target RP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Assertions\]{.mark} **MAY** \[accomplish this by \| \| \| use of an
embedded nonce, issuance timestamp, \| \| \| assertion identifier, or a
combination of these \| \| \| or other techniques.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 6.2.2. Signed Assertion \| \|
+--------------------------------------------------+-------------------+
\| \[Assertions\]{.mark} **SHALL** \[be \| \| \| cryptographically
signed by the issuer \| \| \| (IdP).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The RP\]{.mark} **SHALL** \[validate the digital \| \| \| signature
or MAC of each such assertion based on \| \| \| the issuer's
key.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[This signature\]{.mark} **SHALL** \[cover the \| \| \| entire
assertion, including its identifier, \| \| \| issuer, audience, subject,
and \| \| \| expiration.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The assertion signature\]{.mark} **SHALL** \| \| \| \[either be a
digital signature using asymmetric \| \| \| keys or a MAC using a
symmetric key shared \| \| \| between the RP and issuer.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Shared symmetric keys used for this purpose by \| \| \| the
IdP\]{.mark} **SHALL** \[be independent for \| \| \| each RP to which
they send assertions, and are \| \| \| normally established during
registration of the \| \| \| RP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Public keys for verifying digital \| \| \| signatures\]{.mark}
**SHALL** \[be transferred to \| \| \| the RP in a secure manner,
and\]{.mark} **MAY** \| \| \| \[be fetched by the RP in a secure fashion
at \| \| \| runtime, such as through an HTTPS URL hosted by \| \| \| the
IdP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Approved cryptography\]{.mark} **SHALL** \[be \| \| \|
used.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 6.2.3. Encrypted Assertion \| \|
+--------------------------------------------------+-------------------+
\| \[When encrypting assertions, the IdP\]{.mark} \| \| \| **SHALL**
\[encrypt the contents of the assertion \| \| \| using either the RP's
public key or a shared \| \| \| symmetric key.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Shared symmetric keys used for this purpose by \| \| \| the
IdP\]{.mark} **SHALL** \[be independent for \| \| \| each RP to which
they send assertions, and are \| \| \| normally established during
registration of the \| \| \| RP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Public keys for encryption\]{.mark} **SHALL** \| \| \| \[be
securely transferred to the IdP and\]{.mark} \| \| \| **MAY** \[be
fetched by the IdP in a secure \| \| \| fashion at runtime, such as
through an HTTPS URL \| \| \| hosted by the RP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[All encryption of assertions\]{.mark} **SHALL** \| \| \| \[use
approved cryptography.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When personally-identifiable information is \| IA-8 (4) \| \|
included in the assertion and the assertion is \| \| \| handled by
intermediaries such as a browser, the \| \| \| federation
protocol\]{.mark} **SHALL** \[encrypt \| \| \| assertions to protect the
sensitive information \| \| \| in the assertion from leaking to
unintended \| \| \| parties. For example, a SAML assertion can be \| \|
\| encrypted using XML-Encryption, or an OpenID \| \| \| Connect ID
Token can be encrypted using JSON Web \| \| \| Encryption
(JWE).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 6.2.4. Audience Restriction \| \|
+--------------------------------------------------+-------------------+
\| \[Assertions\]{.mark} **SHALL** \[use audience \| \| \| restriction
techniques to allow an RP to \| \| \| recognize whether or not it is the
intended \| \| \| target of an issued assertion..\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[All RPs\]{.mark} **SHALL** \[check that the \| \| \| audience of an
assertion contains an identifier \| \| \| for their RP to prevent the
injection and replay \| \| \| of an assertion generated for one RP at
another \| \| \| RP\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 6.2.5. Pairwise Pseudonymous Identifiers \| \|
+--------------------------------------------------+-------------------+
\| ### 6.2.5.1. General Requirements \| \|
+--------------------------------------------------+-------------------+
\| \[When using pairwise pseudonymous identifiers \| IA-4(8) \| \|
within the assertions generated by the IdP for \| \| \| the RP, the
IdP\]{.mark} **SHALL** \[generate a \| IA-8 \| \| different federated
identifier for each RP as \| \| \| described in \[Sec. \| IA-8 (6) \| \|
6.2.5.2\](https:/ \| \| \|
/pages.nist.gov/800-63-4/sp800-63c.html#ppi-gen) \| IA-12 b. \| \|
below.\]{.mark} \| \| \| \| \| \| \[When PPIs are used with RPs
alongside \| \| \| attributes, it may still be possible for \| \| \|
multiple colluding RPs to re-identify a \| \| \| subscriber by
correlation across systems using \| \| \| these identity attributes. For
example, if two \| \| \| independent RPs each see the same subscriber \|
\| \| identified with different pairwise pseudonymous \| \| \|
identifiers, they could still determine that the \| \| \| subscriber is
the same person by comparing the \| \| \| name, email address, physical
address, or other \| \| \| identifying attributes carried alongside the
\| \| \| pairwise pseudonymous identifier in the \| \| \| respective
assertions.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Privacy policies\]{.mark} **SHOULD** \[prohibit \| IA-4(8) \| \|
such correlation, and pairwise pseudonymous \| \| \| identifiers can
increase effectiveness of these \| IA-8 (6) \| \| policies by increasing
the administrative effort \| \| \| in managing the attribute
correlation.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The proxy\]{.mark} **SHALL NOT** \[disclose the \| IA-4(8) \| \|
mapping between the pairwise pseudonymous \| \| \| identifier and any
other identifiers to a third \| IA-8 (6) \| \| party or use the
information for any purpose \| \| \| other than federated
authentication, related \| \| \| fraud mitigation, to comply with law or
legal \| \| \| process, or in the case of a specific user \| \| \|
request for the information.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 6.2. \| \| \| 5.2. Pairwise Pseudonymous Identifier Generation \|
\|
+--------------------------------------------------+-------------------+
\| \[Pairwise pseudonymous identifiers\]{.mark} \| IA-4(8) \| \|
**SHALL** \[contain no identifying information \| \| \| about the
subscriber.\]{.mark} \| IA-8 (6) \|
+--------------------------------------------------+-------------------+
\| \[They\]{.mark} **SHALL** \[also be unguessable by \| IA-4(8) \| \| a
party having access to some information \| \| \| identifying the
subscriber.\]{.mark} \| IA-8 (6) \|
+--------------------------------------------------+-------------------+
\| \[Pairwise pseudonymous identifiers\]{.mark} \| IA-4(8) \| \| **MAY**
\[be generated randomly and assigned to \| \| \| subscribers by the IdP
or\]{.mark} **MAY** \[be \| IA-8 (6) \| \| derived from other subscriber
information if the \| \| \| derivation is done in an irreversible, \| \|
\| unguessable manner (e.g., using a keyed hash \| \| \| function with a
secret key).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Normally, the identifiers\]{.mark} **SHALL** \| IA-4(8) \| \|
\[only be known by and used by one pair of \| \| \| endpoints (e.g.,
IdP-RP).\]{.mark} \| IA-8 (6) \|
+--------------------------------------------------+-------------------+
\| \[An IdP\]{.mark} **MAY** \[generate the same \| IA-4(8) \| \|
identifier for a subscriber at multiple RPs at \| \| \| the request of
those RPs, provided:\]{.mark} \| IA-8 (6) \| \| \| \| \| - \[The trust
agreement stipulates a shared \| \| \| \> pseudonymous identifier for a
specific \| \| \| \> family of RPs;\]{.mark} \| \| \| \| \| \| - \[The
authorized party consents to and is \| \| \| \> notified of the use of a
shared \| \| \| \> pseudonymous identifier;\]{.mark} \| \| \| \| \| \| -
\[Those RPs have a demonstrable relationship \| \| \| \> that justifies
an operational need for the \| \| \| \> correlation, such as a shared
security \| \| \| \> domain or shared legal ownership; \| \| \| \>
and\]{.mark} \| \| \| \| \| \| - \[All RPs sharing an identifier consent
to \| \| \| \> being correlated in such a manner (i.e., \| \| \| \> one
RP cannot request to have another RP's \| \| \| \> PPI without that
other RP's knowledge and \| \| \| \> consent).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The RPs\]{.mark} **SHALL** \[conduct a privacy \| IA-4(8) \| \|
risk assessment to consider the privacy risks \| \| \| associated with
requesting a common identifier. \| IA-8 (6) \| \| See \[Sec. \| \| \|
9.2\](https: \| \| \| //pages.nist.gov/800-63-4/sp800-63c.html#notice)
\| \| \| for further privacy considerations.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The IdP\]{.mark} **SHALL** \[ensure that only \| IA-4(8) \| \|
intended RPs are correlated; otherwise, a rogue \| \| \| RP could learn
of the pseudonymous identifier \| IA-8 (6) \| \| for a set of correlated
RPs by fraudulently \| \| \| posing as part of that set.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 6.3. Identity APIs \| \|
+--------------------------------------------------+-------------------+
\| \[Attributes about the subscriber, including \| \| \| profile
information,\]{.mark} **MAY** \[be \| \| \| provided to the RP through a
protected \| \| \| *attribute API* known as the *identity API*. The \|
\| \| RP is granted limited access to the identity API \| \| \| during
the federation transaction, in concert \| \| \| with the
assertion.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Access to the identity API\]{.mark} **SHALL** \| \| \| \[be time
limited. The time limitation is \| \| \| separate from the validity time
window of the \| \| \| assertion and the lifetime of the authenticated
\| \| \| session at the RP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Access to an identity API by the RP without an \| \| \| associated
valid assertion\]{.mark} **SHALL NOT** \| \| \| \[be sufficient for the
establishment of an \| \| \| authenticated session at the RP.\]{.mark}
\| \|
+--------------------------------------------------+-------------------+
\| \[A given identity API deployment is expected to \| \| \| be capable
of providing attributes for all \| \| \| subscribers for whom the IdP
can create \| \| \| assertions. However, when access to the identity \|
\| \| API is granted within the context of a \| \| \| federation
transaction, the attributes provided \| \| \| by an identity
API\]{.mark} **SHALL** \[be \| \| \| associated with only the single
subscriber \| \| \| identified in the associated assertion.\]{.mark} \|
\|
+--------------------------------------------------+-------------------+
\| \[If the identity API is hosted by the IdP, the \| \| \| returned
attributes\]{.mark} **SHALL** \[include \| \| \| the subject identifier
for the subscriber. This \| \| \| allows the RP to positively correlate
the \| \| \| assertion's subject to the returned attributes. \| \| \|
Note that when access to an attribute API is \| \| \| provided as part
of pre-provisioning of RP \| \| \| subscriber accounts as discussed in
\[Sec. \| \| \| 5.4.1\](https://pages \| \| \|
.nist.gov/800-63-4/sp800-63c.html#provisioning), \| \| \| the RP is
usually granted blanket access to the \| \| \| identity API outside the
context of the \| \| \| federated transaction and these requirements do
\| \| \| not apply.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 6.3.1. Attribute Providers \| \|
+--------------------------------------------------+-------------------+
\| \[The attributes returned by the attribute \| IA-4(9) \| \| provider
are assumed to be independent of those \| \| \| returned directly from
the IdP, and as \| \| \| such\]{.mark} **MAY** \[use different
identifiers, \| \| \| formats, or schemas.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The RP\]{.mark} **SHALL** \[verify that the \| IA-4(9) \| \|
identified attribute provider is capable of \| \| \| providing the kinds
of attributes that are \| \| \| present, under the auspices of the
applicable \| \| \| trust agreement.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 7. Assertion Presentation \| \|
+--------------------------------------------------+-------------------+
\| \[There are tradeoffs with each model, but each \| \| \| requires the
proper validation of the assertion. \| \| \| Assertions\]{.mark} **MAY**
\[also be proxied to \| \| \| facilitate federation between IdPs and RPs
using \| \| \| different presentation methods, as discussed in \| \| \|
detail in \[Sec. \| \| \| 5.1.3\](https://pages.ni \| \| \|
st.gov/800-63-4/sp800-63c.html#proxied).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 7.1. Back-Channel Presentation \| \|
+--------------------------------------------------+-------------------+
\| \[In the *back-channel* presentation model, the \| \| \| subscriber
is given an assertion reference to \| \| \| present to the RP, generally
through the front \| \| \| channel. The assertion reference itself
contains \| \| \| no information about the subscriber and\]{.mark} \| \|
\| **SHALL** \[be resistant to tampering and \| \| \| fabrication by an
attacker. The RP presents the \| \| \| assertion reference to the IdP,
usually along \| \| \| with authentication of the RP itself, to fetch \|
\| \| the assertion.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The assertion reference:\]{.mark} \| \| \| \| \| \| 1. **SHALL**
\[be limited to use by a single \| \| \| \> RP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| 2. **SHALL** \[be single-use.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| 3. **SHALL** \[be time limited, and\]{.mark} \| \| \| \> **SHOULD**
\[have a lifetime of no more \| \| \| \> than a small number of minutes
in \| \| \| \> length.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| 4. **SHALL** \[be presented along with \| \| \| \> authentication of
the RP to the \| \| \| \> IdP.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| 5. **SHALL** \[contain at least 128 bits of \| \| \| \>
entropy\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The RP\]{.mark} **SHALL** \[protect itself \| \| \| against
injection of manufactured or captured \| \| \| assertion references by
use of cross-site \| \| \| scripting protection or other accepted \| \|
\| techniques.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Conveyance of the assertion reference from the \| \| \| IdP to the
subscriber, as well as from the \| \| \| subscriber to the RP,\]{.mark}
**SHALL** \[be made \| \| \| over an authenticated protected
channel.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Conveyance of the assertion reference from the \| \| \| RP to the
IdP, as well as the assertion from the \| \| \| IdP to the RP,\]{.mark}
**SHALL** \[be made over \| \| \| an authenticated protected
channel..\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[When assertion references are presented, the \| \| \| IdP\]{.mark}
**SHALL** \[verify that the party \| \| \| presenting the assertion
reference is the same \| \| \| party that requested the authentication.
The IdP \| \| \| can do this by requiring the RP to authenticate \| \|
\| itself when presenting the assertion reference \| \| \| to the IdP or
through other similar means (see \| \| \| \[\[RFC7636\]\](https://pag \|
\| \| es.nist.gov/800-63-4/sp800-63c.html#ref-RFC7636) \| \| \| for one
protocol's method of dynamic RP \| \| \| verification)\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 7.2. Front-Channel Presentation \| \|
+--------------------------------------------------+-------------------+
\| \[The RP\]{.mark} **SHALL** \[protect itself \| \| \| against
injection of manufactured or captured \| \| \| assertions by use of
cross-site scripting \| \| \| protection and other accepted \| \| \|
techniques.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Conveyance of the assertion from the IdP to the \| \| \|
subscriber, as well as from the subscriber to \| \| \| the RP,\]{.mark}
**SHALL** \[be made over an \| \| \| authenticated protected
channel.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 7.3. Protecting Information \| \|
+--------------------------------------------------+-------------------+
\| \[Communications between the IdP and the \| \| \| RP\]{.mark}
**SHALL** \[be protected in transit \| \| \| using an authenticated
protected \| \| \| channel.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Communications between the subscriber and \| \| \| either the IdP
or the RP (usually through a \| \| \| browser)\]{.mark} **SHALL** \[be
made using an \| \| \| authenticated protected channel.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[Additional attributes about the user\]{.mark} \| \| \| **MAY** \[be
included outside of the assertion \| \| \| itself by use of authorized
access to an \| \| \| identity API as discussed in \[Sec. \| \| \|
6.3\](https://pages.n \| \| \|
ist.gov/800-63-4/sp800-63c.html#s-identity-api). \| \| \| Splitting user
information in this manner can \| \| \| aid in protecting user privacy
and allow for \| \| \| limited disclosure of identifying attributes on
\| \| \| top of the essential information in the \| \| \| authentication
assertion itself.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The RP\]{.mark} **SHALL**\[, where feasible, \| \| \| request
derived attribute values rather than \| \| \| full attribute values as
described in \[Sec. \| \| \| 9.3\](https://pages.nist.go \| \| \|
v/800-63-4/sp800-63c.html#minimization).\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| \[The IdP\]{.mark} **SHALL** \[support derived \| \| \| attribute
values to the extent possible.\]{.mark} \| \|
+--------------------------------------------------+-------------------+
\| ### 8. Security (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 8.1. Federation Threats (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 8.2. Feder \| \| \| ation Threat Mitigation Strategies
(Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 9. Privacy Considerations (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 9.1. \| \| \| Minimizing Tracking and Profiling (Informative) \|
\|
+--------------------------------------------------+-------------------+
\| ### 9.2. Notice and Consent (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 9.3. Data Minimization (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 9.4. \| \| \| Agency-Specific Privacy Compliance (Informative) \|
\|
+--------------------------------------------------+-------------------+
\| ### 9 \| \| \| .5. Blinding in Proxied Federation (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 10. Usability Considerations (Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 10.1 \| \| \| . General Usability Considerations (Informative) \|
\|
+--------------------------------------------------+-------------------+
\| ### 10.2. \| \| \| Specific Usability Considerations (Informative) \|
\|
+--------------------------------------------------+-------------------+
\| ### 10.2.1. Us \| \| \| er Perspectives on Online Identity
(Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 10.2.2. User \| \| \| Perspectives of Trust and Benefits
(Informative) \| \|
+--------------------------------------------------+-------------------+
\| ### 10.2 \| \| \| .3. User Mental Models and Beliefs (Informative) \|
\|
+--------------------------------------------------+-------------------+
\| ### 11. Equity Considerations (Informative) \| \|
+--------------------------------------------------+-------------------+

# 

# 

# References

+--------------+-------------------------------------------------------+
\| SP 800-53 \| \[NIST SP 800-53 Revision 5, Security and Privacy \| \|
\| Controls for Information Systems and Organizations, \| \| \| Dec \|
\| \| 2020\](https://csr \| \| \|
c.nist.gov/publications/detail/sp/800-53/rev-5/draft) \| \| \| \| \| \|
\[\[https \| \| \| ://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST
\| \| \| .SP.800-53r5.pdf\]{.underline}\](https://nvlpubs.nist.g \| \|
\| ov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf) \|
+==============+=======================================================+
\| SP 800-63 \| NIST Special Publication 800-63 Digital Identity \| \|
\| Guidelines \| \| \| \| \| \| \[\[https://www.nist.g \| \| \|
ov/identity-access-management/nist-special-publicatio \| \| \|
n-800-63-digital-identity-guidelines\]{.underline}\](ht \| \| \|
tps://www.nist.gov/identity-access-management/nist-sp \| \| \|
ecial-publication-800-63-digital-identity-guidelines) \|
+--------------+-------------------------------------------------------+
