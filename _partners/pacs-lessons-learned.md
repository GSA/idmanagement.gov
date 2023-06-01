---
layout: page
collection: partners
title: Lessons Learned
permalink: /partners/lessonslearned/
sticky_sidenav: true
sidenav: partners

subnav:
    - text: Planning
      href: '#planning'
    - text: Procurements
      href: '#procurement'
    - text: Operations
      href: '#operations'
    - text: Training
      href: '#training'
---

Federal agencies have shared these PACS lessons learned:

## Planning
- Identify all stakeholders upfront, including an Executive Sponsor.
- Designate staff to fill key roles, such as architects, engineers, and operators.
- Engage CIO/CISO representatives early. _Remember: A PACS is an IT system._
- As an IT system, a PACS must complete Certification and Accreditation and obtain an Authority to Operate before connecting to the network.
- Create, maintain, and share an integrated master schedule that presents project phases, tasks, resources, and dependencies.
- Establish a PACS component lifecycle management plan to help estimate hardware and software upgrades over the life of the system.  
- Build the cost of software licensing and system sustainment into your project budget.
- Work with facility engineers to identify constraints specific to your workplace, such as mandatory construction requirements. These constraints may limit solution offerings.
- Consider the impact on the federal facility population when modernizing PACS assets, especially if your agency is moving toward FICAM-compliant PACS. 
- Plan a standardized deployment strategy across locations.
- Remember that legacy system hardware, such as credential readers, may not support FICAM-compliant modes of operation. (FICAM Mode implies using PKI-based authentication mechanisms and online identity validation.) Review your system hardware capabilities after identifying desired authentication mechanisms to determine if upgrades are necessary. 
- Use legacy credentials and non-FICAM compliant modes of operation *only* in a migration strategy, not as the end state.
- Retire and phase out secondary, legacy credentials.
- Use your agency Identity Management System as the authoritative source for all user records in the PACS.
- Recall that some PACS allow assignment of user access levels at the time of credential registration. Plan the method of assignment before provisioning/registration.
- Avoid acts of “omission” that create noncompliance. For example, procuring products listed on the Approved Products List (APL) but not correctly enabling FICAM Mode.
- Use a risk-based approach when selecting appropriate PIV authentication mechanisms for physical access to federal government buildings and facilities, regardless of whether they are leased or government-owned. 
- Remember that access points should not rely solely on an authentication mechanism that requires optional card features, as these features might not be available on all user-population cards (for example, on-card biometric comparison).
- Plan the PACS to meet the needs of the operating environment (for example, do not require three-factor authentication when only one factor is needed). 
- Understand that PKI is the foundation for high-assurance PACS implementations.


## Procurement
- Do not procure noncompliant PACS technologies, such as proximity cards.
- Use consistent terms and recommended procurement language within requirements documents, specifications, SOWs, RFIs, RFPs, and RFQs. 
- Leverage agency subject matter experts (SMEs) to review SOWs, RFPs, and RFQs before releasing them for bid.
- Resolve SOW and PACS compliance issues as soon as they are recognized.
- Work closely with agency legal team members to define an SOW that contains unambiguous responsibilities for the integrator and appropriate cures for non-performance.
- Have your integrator provide copies of all relevant FIPS 201-3 compliance and functionality testing documentation.
- Specify personnel roles, responsibilities, and training requirements within the SOW (for example, all engineers must be CSEIP certified).
- Ensure qualified professionals and/or SMEs review the design documents before releasing them for bid or formal contractor response. Consider hiring an SME capability to augment agency staff as a "buyer’s agent" during these activities.
- Consider looking for evidence of qualified and/or registered personnel certifying the proposed solution (submittals) before approval or notice to proceed.


## Operations
- Define clear processes and procedures to support the remedy of system incidents (for example, a failed credential reader).  Be sure to identify key support personnel and expected levels of support. 
- Perform regular system maintenance and patching of the PACS components. Establish clear procedures for testing upgrades prior to widespread deployment, and develop "roll-back" procedures in the event they are required. 
- Ensure the PACS is configured and maintained to operate in FICAM Mode. 
- Work with your IT Department to ensure your PACS can perform online certificate validation. Credential validation should take place at or near the time of authentication. If your PACS is limited to offline certificate validation, manually load CRLs and certificate trust lists into the PACS daily.
- Provision only assured identities from an agency authoritative source into your PACS.
- Consider having the PACS administrator disable PIV credentials that are invalid (expired, certificates placed on CRL, etc.) immediately rather than waiting for automatic disabling through the routine credential validation process.  Consider disabling identity and credential records rather than removing them to retain audit data that might be needed at a later time (for example, employee misconduct investigations).
- Remove all PII from PACS endpoints to protect privacy.
- Audit expected system functionality on a regular basis.  Minimally, verify that access points are challenging the correct number and type of authentication factors. Consider using test credentials that have expired or been revoked to further ensure correct operation.


## Training
- Create and maintain a training plan that formally documents training requirements.
- Provide role-specific training to agency stakeholders, such as HR, IT, or Security.

The next section, [Standards, Policies, and Guidance]({{site.baseurl}}/partners/standards/), lists relevant public law, policies, regulations, standards, guidance, and publications relevant to PACSs.
