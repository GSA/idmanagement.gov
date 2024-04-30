---
title: "[]{#_h833pg8v86mn .anchor} Federal Identity, Credential, and Access Management Sub Committee"
---

**Security Controls Mapping of**

**Special Publication 800-53 Revision 5,**

**Identification and Authentication (IA),**

**against Special Publication 800-63**

Version 1.0

April 24, 2024

**Revision History**

| **Document Version** | **Document Date** | **Revision Details** |
|----------------------|-------------------|----------------------|
| 1.0                  | 04//24/2024       | Initial Mapping of IA Controls |
|                      |                   |                      |
|                      |                   |                      |
|                      |                   |                      |
|                      |                   |                      |
|                      |                   |                      |

**[Table of Contents]{.smallcaps}**

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

This document provides guidance for organizations who need to comply with the requirements of NIST SP 800-53 rev. 5 and NIST SP 800-63.

NIST SP 800-53 rev. 5 provides a catalog of security and privacy controls for information systems and organizations to protect organizational operations and assets, individuals, other organizations, and the Nation from a diverse set of threats and risks, including hostile attacks, human errors, natural disasters, structural failures, foreign intelligence entities, and privacy risks. The controls are flexible, customizable, and implemented as part of an organization-wide process to manage risk. The controls address diverse requirements derived from mission and business needs, laws, executive orders, directives, regulations, policies, standards, and guidelines. The use of these controls is mandatory for federal information systems in accordance with Office of Management and Budget (OMB) Circular A-130 \[OMB A-130\] and the provisions of the Federal Information Security Modernization Act (FISMA), which requires the implementation of minimum controls to protect federal information and information systems.

NIST SP 800-63 guidelines lay out a model for federal programs and other organizations to assess and manage risks associated with digital identity systems, including the processes, policies, data, people, and technologies that support digital identity management. The model is supported by a series of processes: identity proofing, authentication, and federation. The identity proofing process establishes that a subject is a specific physical person. The digital authentication process determines the validity of one or more authenticators to claim a digital identity. It establishes confidence that a subject attempting to access a digital service: (1) is in control of the technologies being used for authentication and (2) is the same subject that previously accessed the service. Finally, the federation process allows shared identity information to support system authentication.

Additionally, NIST SP 800-63 provides instruction for credential service providers (CSPs), verifiers, and relying parties (RPs), and it describes the risk management processes that organizations should follow for implementing digital identity services and that supplement the *NIST Risk Management Framework* and its special component publications.

NIST SP 800-63 guidelines focus on organizational services interacting with external users, such as citizens accessing public benefits or private sector partners accessing collaboration spaces. However, it also applies to federal systems accessed by employees and contractors.

A supplement to 800-63 ([[https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63Bsup1.pdf]{.underline}](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63Bsup1.pdf)) was released as this mapping document was being finalized. The requirements of the supplement were not included in this document due to time constraints. Those updates may be reflected in a future version of this document.

# Applicability and Use

This document contains two different mappings between 800-53 rev. 5 and 800-63. The first is an informational policy mapping. The mapping gives organizations a *general* indication of security and privacy control coverage concerning NIST SP 800-63 guidance. Accordingly, the mapping will help organizations better comply with certain NIST SP 800-53 rev. 5 controls by meeting NIST SP 800-63 digital identity assurance level guidance.

For each 800-53 rev. 5 control in scope, 800-63 sections with relevant background or discussion are identified. This enables readers to obtain context and understanding of the concepts in 800-63 that are relevant to the topic covered in the policy.

The second mapping is a policy crosswalk. The policy crosswalk identifies mappings between specific requirements in each document. This mapping provides specific information about equivalent controls in each respective document. Readers will be able to determine which specific requirements in 800-63 are relevant to a given control in 800-53 rev. 5, to assist in complying with both sets of requirements.

# Informational Policy Mapping

| Control | NIST SP 800-53 R5 Control | NIST SP 800-63 (Draft Version 4) Guidance |
|---------|---------------------------|-------------------------------------------|
| IA-1 a. | a\. Develop, document, and disseminate to \[*Assignment: organization-defined personnel or roles*\]: | - 800-63-4 Sections 2.1, 4.1, 5.5 |
| | 1\. \[*Selection (one or more): Organization-level; Mission/business process-level; System-level*\] identification and authentication policy that: | - 800-83C-4 Sections 5, 5.1 and subsections, 5.2 and subsections |
| | \(a\) Addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and | |
| | \(b\) Is consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines; and | - 800-63-4 Sections 2.3.1, 5, 5.1.2, 5.2.2.2 |
| | | - 800-63A-4 Sections 4.3.3.2, 4.3.4.4, 5.1.2.1, 5.1.3, 5.1.5, 5.1.8, 5.1.10, 7, 8.3, 8.6, 9 |
| | | - 800-63B-4 Sections 4, 4.1.2, 4.1.4, 4.1.5, 4.2.2, 4.2.4, 4.2.5, 4.3.2, 4.3.4, 4.3.5, 4.4, 5.1.1.2, 5.1.2.1, 5.1.3.2, 5.1.4.1, 5.1.5.1, 5.1.7.1, 5.1.9.1, 5.2.3, 5.2.4, 5.2.5, 5.2.7, 5.2.12, 6.1.2.3, 6.4, 7.1, 9.3, 9.4, 10, 10.4, 11 |
| | | - 800-63C-4 Sections 4, 4.1, 4.2, 4.3, 5.2.2, 7.1, 9.1, 10, 11, 12.2, 12.3 |
| | 2\. Procedures to facilitate the implementation of the identification and authentication policy and the associated identification and authentication controls; | - 800-63-4 Section 5 and subsections |
| | | - 800-63A-4 Sections 5.1.1, 5.1.1.1, 5.1.10, 10.3 fourth Description |
| IA-1 b | b\. Designate an \[*Assignment: organization-defined official*\] to manage the development, documentation, and dissemination of the identification and authentication policy and procedures; | No direct mapping. However, see 800-63A-4 Sections 5.1.5, 8.6, 800-63B-4 4.4, 9.4, 800-83C-4 5.5, 9.4 for officials to be consulted |
| IA-1 c | c\. Review and update the current identification and authentication: | No direct mapping. However, see 800-63-4 Sections 5.3.2, 800-63A-4 5.1.1, 5.1.2.1, 5.1.3, 5.1.5, 800-63B-4 6.1.4 |
| | 1\. Policy \[*Assignment: organization-defined frequency*\] and following \[*Assignment: organization-defined events*\]; and | |
| | 2\. Procedures \[*Assignment: organization-defined frequency*\] and following \[*Assignment: organization-defined events*\]. | |
| IA-2 | Uniquely identify and authenticate organizational users and associate that unique identification with processes acting on behalf of those users. | - 800-63-4 Section 2.1, 4 and subsections |
| | | - 800-63A-4 Section 4 and subsections, Section 5 and subsections. However, best to read 800-63A-4 in full |
| | | - 800-63B-4 Sections 4 and subsections and 5 and subsections. However, it is best to read 800-63B-4 in full |
| | | - For CSPs that operate identity proofing and enrollment services, see also 800-63A-4 Section 5 and subsections; Section 6.1 |
| | | - 800-63B-4 Sections 4 and subsections; 6.1 and subsections; 6.1.2 and subsections; 6.1.3 |
| IA-2(1) | Implement multi-factor authentication for access to privileged accounts. | - 800-63B-4 Sections 4.1, 4.1.1; 4.2, 4.2.1; 4.3, 4.3.1; 4.4, 4.4.1; 5.1.1; 5.1.3.4; 5.1.5 and subsections; 5.1.8 and subsections; 5.1.9 and subsections; 5.2.3; 10.2.5, 10.2.8, 10.2.9, 10.3 |
| IA-2(2) | Implement multi-factor authentication for access to non-privileged accounts. | - 800-63B-4 Sections 4.1, 4.1.1; 4.2, 4.2.1; 4.3, 4.3.1; 4.4, 4.4.1; 5.1.1; 5.1.3.4; 5.1.5 and subsections; 5.1.8 and subsections; 5.1.9 and subsections; 5.2.3; 10.2.5, 10.2.8, 10.2.9, 10.3 |
| IA-2(5) | When shared accounts or authenticators are employed, require users to be individually authenticated before granting access to the shared accounts or resources. | - 800-63B-4 Section 4 |
| IA-2(6) | Implement multi-factor authentication for \[*Selection (one or more): local; network; remote*\] access to \[*Selection (one or more): privileged accounts; non-privileged accounts*\] such that: | - 800-63B-4 Sections 4.1, 4.1.1; 4.2, 4.2.1; 4.3, 4.3.1; 4.4, 4.4.1; 5.1.1; 5.1.3.4; 5.1.5 and subsections; 5.1.8 and subsections; 5.1.9 and subsections; 5.2.3; 10.2.5, 10.2.8, 10.2.9, 10.3 |
| | \(a\) One of the factors is provided by a device separate from the system gaining access; and | - 800-63B-4 Sections 4.2, 4.2.1, 4.3, 4.3.1, 5.1.3.4, 5.1.5, 5.1.8, 5.1.9 |
| | \(b\) The device meets \[*Assignment: organization-defined strength of mechanism requirements*\]. | - 800-63B-4 Section 4 and subsections, 4.5 |
| IA-2(8) | Implement replay-resistant authentication mechanisms for access to \[*Selection (one or more): privileged accounts; non-privileged accounts*\]. | - 800-63B-4 Sections 4.2.2, 4.3.2, Table 1, 5.1.3.2, 5.1.4.2, 5.1.5.2, 5.2.5, 5.2.8, Table 4 |
| IA-2(10) | Provide a single sign-on capability for \[*Assignment: organization-defined system accounts and services*\]. | - 800-63C-4 |
| IA-2(12) | Accept and electronically verify Personal Identity Verification-compliant credentials. | No direct mapping. However, see 800-63B-4 Section 5.1.9.2 |
| IA-2(13) | Implement the following out-of-band authentication mechanisms under \[*Assignment: organization-defined conditions*\]: \[*Assignment: organization-defined out-of-band authentication*\]. | - 800-63B-4 Table 1, Section 5.1.3 and subsections; 10.2.3; 11 |
| | | - 800-63C-4 Section 6.1.2.2 |
| IA-3 | Uniquely identify and authenticate \[*Assignment: organization-defined devices and/or types of devices*\] before establishing a \[*Selection (one or more): local; remote; network*\] connection. | Not Applicable -- NIST 800-63 scope is limited to identity proofing and authentication of users (such as employees, contractors, or private individuals); devices are out of scope. |
| IA-3(1) | Authenticate \[*Assignment: organization-defined devices and/or types of devices*\] before establishing \[*Selection (one or more): local; remote; network*\] connection using bidirectional authentication that is cryptographically based. | Not Applicable -- NIST 800-63 scope is limited to identity proofing and authentication of users (such as employees, contractors, or private individuals); devices are out of scope. |
| IA-3(3) | \(a\) Where addresses are allocated dynamically, standardize dynamic address allocation lease information and the lease duration assigned to devices in accordance with \[*Assignment: organization-defined lease information and lease duration*\]; and | Not Applicable -- NIST 800-63 scope is limited to identity proofing and authentication of users (such as employees, contractors, or private individuals); devices are out of scope. |
| | \(b\) Audit lease information when assigned to a device. | |
| IA-3(4) | Handle device identification and authentication based on attestation by \[*Assignment: organization-defined configuration management process*\]. | Not Applicable -- NIST 800-63 scope is limited to identity proofing and authentication of users (such as employees, contractors, or private individuals); devices are out of scope. |
| IA-4 | Manage system identifiers by: | No direct mapping. However, see 800-63A-4 Sections 4.3.4.4, 5.1.1
