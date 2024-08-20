---
layout: page
collection: university
title:  Physical Access Control Systems 101
permalink: /university/pacs/
sidenav: university
sticky_sidenav: true

subnav: 
  - text: Introduction
    href: '#introduction'
  - text: What is a PACS?
    href: '#pacs-explained'
  - text: Compliant PACS Characteristics
    href: '#compliant-pacs-characteristics'
  - text: 'PACS Deployment Models'
    href: '#deployment-models'
  - text: Aligning Facility Security Level and Authentication
    href: '#aligning-facility-security-level-and-authentication'
  - text: PACS Procurement Best Practices
    href: '#pacs-procurement-best-practices'
  - text: PACS Training Resources
    href: '#training'
  - text: Planning, Procurement, and Operations Lessons Learned
    href: '#lessons-learned'
  - text: References
    href: '#references'
  - text: Glossary
    href: '#glossary'

---

## Introduction

The **Physical Access Control System (PACS) 101** will help readers understand  Federal Identity, Credential, and Access Management-compliant PACSs concepts. At a high level, a PACS is a collection of technologies that control physical access at one or more federal agency sites by electronically authenticating employees, contractors, and visitors. 

{% include alert-no-icon.html content="The contents of these 101 guides are meant to be informative and do not serve as the basis for determining PACS compliance. Agency-specific guidance should supersede the recommendations within these guides, where appropriate." %}

## Acknowledgment

We want to thank the Secure Technology Alliance, especially the members of the Access Control Council, for contributions to the original PACS Guides which is now the PACS 101 page, and permission to reuse content from their presentations and the How to Plan, Procure, and Deploy a PIV-Enabled Physical Access Control System webinar training.  Links to the training are below in the training section.

## PACS Explained

A Physical Access Control System (PACS) grants access to employees, contractors, and visitors who work at or visit a site by electronically authenticating their PIV credentials. Although PACSs are information technology (IT) systems, they must be designed, deployed, and operated in cooperation with Physical Security teams to meet agency mission needs. 

## Components

The following table defines common PACS components: 

| **Component** | **Description** |
|----------------|----------|
| **Access point** | Entrance point or physical barrier where an employee or contractor interacts with the PACS. For example access points include turnstiles, gates, and locking doors. |
| **PIV credential** | Federal employees and contractors use [Personal Identity Verification (PIV) credentials](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.201-3.pdf){:target="_blank"}{:rel="noopener noreferrer"} to *physically access* federal facilities and *logically access* federal information systems. |
| **Credential reader and keypad** | The reader provides power to and reads data from a PIV credential. It also sends this data to a control panel to authenticate the PIV credential and request access authorization. Depending on the facility's security classification and risk levels, employees and contractors may need to enter a PIN into the keypad and add a biometric. | 
| **Biometric reader** | It captures biometric data (such as the fingerprint, facial image, or iris scan) and verifies it against the PIV credential’s biometric data. |
| **Control panel** | It receives the credential data the reader sends and verifies its presence in the credential holder data repository. It then makes an access decision and transmits authorization data to the access control server and access point.  |
| **Access control server** | Grants authorization to the employee or contractor requesting access (for example, presenting a PIV credential to a reader). It also registers and enrolls employees and contractors, enrolls and validates credentials, and logs system events. |
| **Credential<br>holder data repository** | It contains employee and contractor data and physical access privileges. Control panels use this authoritative data to validate credential data. |
| **Auxiliary Systems** | Agencies may integrate the PACS with additional facility monitoring systems, such as surveillance, fire alarm, and evacuation systems.|

{% include alert-no-icon.html content="All agency-purchased PACS components must be FIPS 201-compliant and selected from [GSA's Approved Products List (APL) for PACS Products](https://www.idmanagement.gov/acquisition-professionals/#products){:target=\"_blank\"}{:rel=\"noopener noreferrer\"}. The products in this list have undergone vulnerability and interoperability testing through the FIPS 201 Evaluation Program. As an IT system, a PACS must still complete Assessment and Authorization (A & A) and obtain an Authority to Operate from your agency before connecting to the network." %}

## Compliant PACS Characteristics

In May 2019, the Office of Management and Budget (OMB) released memorandum [M-19-17](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, _Enabling Mission Delivery through Improved Identity, Credential, and Access
Management_. Related to PACS, M-19-17 rescinded memorandum [M-11-11](https://obamawhitehouse.archives.gov/sites/default/files/omb/memoranda/2011/m11-11.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, _Continued Implementation of Homeland Security Presidential Directive (HSPD) 12 – Policy for a Common Identification Standard for Federal Employees and Contractors_. The updated guidance adds further specificity to require the use of PIV credentials for physical access to federal facilities, implemented per _[The Risk Management Process for Federal Facilities: An Interagency Security Committee Standard](https://www.cisa.gov/sites/default/files/2024-07/The_Risk_Management_Process_2024_Edition.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}_ and NIST [SP 800-116, Revision 1](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-116r1.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, Guidelines for the Use of PIV Credentials in Facility Access.

Characteristics of NIST SP 800-116, Revision 1, compliant systems include, but are not limited to:
- Use high-assurance credentials for electronic authentication of employees and contractors.
- Use non-deprecated authentication mechanisms, as defined by [FIPS 201-3](https://www.google.com/url?q=https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.201-3.pdf&sa=D&source=docs&ust=1723658154007973&usg=AOvVaw1DCYyS44DHABrnt3F0zMbJ){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}.
- Validate the status and authenticity of credentials.
- Interoperate with PIV credentials issued by other agencies.
- Use components listed on the GSA FIPS 201 Approved Products List (APL).

The FIPS 201 Evaluation Program, in collaboration with the PACS Modernization Working Group, created an operational self-assessment tool. The tool helps PACS implementers determine whether facility access systems that use PIV credentials are configured according to FICAM and NIST guidelines.

- [PACS Assessment Toolkit Version 1.0]({{site.baseurl}}/docs/fips201ep-pacs-self-tool.pdf){:target="_blank"}{:rel="noopener noreferrer"}

## Deployment Models

There are two PACS deployment models.

1. Standalone PACS - a local system that controls physical access to a facility or specific areas within the facility.
2. Enterprise PACS (E-PACS) - extends the concept of a standalone PACS to act as a unified, enterprise-wide system that controls physical access at most (or all) sites that belong to an agency. 

## Standalone PACS

A standalone PACS is a local system that controls physical access to a facility or specific areas within it—for example, a Sensitive Compartmented Information Facility (SCIF). Standalone PACSs are facility-centric; consequently, these systems typically do not connect to enterprise networks. While this deployment model tends to be the most common and uncomplicated method of managing access to controlled areas, it has several challenges.

### Standalone PACS' Operational Challenges

Agencies that use standalone PACSs have encountered operational challenges: 
* Sites must independently control physical access.
* Agencies see delays with credential transfers or terminations.
* Employees and contractors must re-enroll their credentials for all federal work sites that they visit.
* Departments inconsistently apply enterprise-wide security policies.
* Agencies experience reduced situational awareness (for example, logs cannot be correlated across the enterprise).
* Agencies with many standalone PACSs see increased human error, such as data entry errors.


{% include alert-no-icon.html content="Can agencies centrally control physical access for most or all of their sites?  Yes. The answer is to implement an Enterprise Physical Access Control System." %}

## Enterprise PACS

An Enterprise PACS (E-PACS) extends the concept of a standalone PACS to act as a unified, enterprise-wide system that controls physical access at most (or all) agency-owned sites. E-PACSs address the operational challenges of standalone PACSs and improve system management, scalability, monitoring, and performance. 

E-PACSs rely on the same components as standalone PACSs. However, an essential architectural distinction is that an E-PACS connects to an agency's enterprise network, whereas a PACS typically does not.


{% include alert-no-icon.html content="Some agencies need standalone PACSs for their unique sites and missions, but most agencies could benefit from transitioning to an E-PACS." %}

### Would an Enterprise PACS Work for Our Agency?

Here are some key E-PACS advantages to consider:

* One enterprise-wide system controls physical access for many (or all) agency sites.
* One employee and contractor enrollment system that connects multiple enrollment locations.
* One credential registration and provisioning point.
* One enterprise-wide system for administrators to modify or terminate access privileges.
* One enterprise-wide system that regularly polls for certificate revocation data (CRL and/or OCSP)  and updates the status of accounts accordingly.
* Reduced costs for system management, such as patching, server system administration, and software updates.
* Reduced costs for reporting, such as Federal Information Security Modernization Act [FISMA] reporting.
* Reduced costs for:
    * Server Hardware
    * System Security Assessment and Authorization (A & A)
	
## Aligning Facility Security Level and Authentication

Federal agencies rely on Physical Access Control Systems (PACSs) and Personal Identity Verification (PIV) credentials to confirm that an employee, contractor, or visitor _is_ or _is not_ authorized to access a site and its critical assets, such as systems, information, and people. 

To protect your agency's critical assets, you must assess each site's risk level (called *Facility Security Level*) and decide what PIV credential authentication is required (called *authentication mechanism*). 

The Security Control Overlay for [Electronic Physical Access Control Systems (ePACS)](https://www.idmanagement.gov/docs/pacs-800-53-overlay.pdf){:target=\"_blank\"}{:rel=\"noopener noreferrer\"}{:class=\"usa-link usa-link--external\"} provides additional guidance on aligning FSL to PACS authentication factors. This overlay provides additional guidance on configuring and securing PACS systems by following relevant guidance and in support of the [NIST Risk Management Framework (RMF)](https://csrc.nist.gov/projects/risk-management/about-rmf){:target=\"_blank\"}{:rel=\"noopener noreferrer\"}{:class=\"usa-link usa-link--external\"}.

## Assess Facility Security Level 

{% include alert-no-icon.html content="
These federal standards provide guidance for assessing FSL, including how to categorize site risks: 

- [The Risk Management Process for Federal Facilities: An Interagency Security Committee Standard](https://www.cisa.gov/sites/default/files/2024-07/The_Risk_Management_Process_2024_Edition.pdf){:target=\"_blank\"}{:rel=\"noopener noreferrer\"}{:class=\"usa-link usa-link--external\"} 
- [NIST SP 800-116, Revision 1, Guidelines for the Use of PIV Credentials in Facility Access](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-116r1.pdf){:target=\"_blank\"}{:rel=\"noopener noreferrer\"}{:class=\"usa-link usa-link--external\"}" %}


![]({{site.baseurl}}/assets/img/check-box.png){:style="float:center"} &nbsp; **Inventory critical assets for each agency site**
- When you inventory critical assets, also document any challenges to secure them.  <br><br>Examples of critical assets include:
    - People
    - Information systems and IT infrastructure
    - Campuses, buildings, secure vaults, and armories
    - Tenant agencies' people, information systems, and IT infrastructure
  
- If you must evaluate an asset's criticality, consider:
    - Security classification level
    - Impact on national security from potential asset loss, compromise, or damage
    - Cost of replacing the asset
    
![]({{site.baseurl}}/assets/img/check-box.png){:style="float:center"} &nbsp; **Assess site, critical asset risks, and risks to tenant agencies' assets**
- Examples of potential risks to a site and its critical assets include: 
    - Site mission(s) (those of the agency, its organizations, and tenant agencies)
    - Site “symbolism” (public perception of the agency, its organizations, tenant agencies, or missions)
    - Total population (employees plus contractors)
    - Size (square footage) 
    - Geographical location
    - Proximity to other facilities or structures not owned by the agency
    - Threats specific to tenant agencies 
        
 - Consider the following for each asset: 
    - Criticality - Is it mission-critical?
    - Sensitivity - Does it contain classified or sensitive information?
    - Likelihood - What is the probability of loss, compromise, or damage?
    
![]({{site.baseurl}}/assets/img/check-box.png){:style="float:center"} &nbsp;**Categorize each asset by risk impact level**
- [FIPS 199](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.199.pdf){:target="_blank"}{:rel="noopener noreferrer"} defines three (3) impact levels on organizations and people (that is, a loss of confidentiality, integrity, or availability): 
   
|Impact Level | Description |
|:---------|:------------|
| *Low*| The loss of confidentiality, integrity, or availability could have a **limited** adverse effect on organizational operations, organizational assets, or individuals.|
| *Moderate* | The loss of confidentiality, integrity, or availability could seriously affect organizational operations, assets, or individuals.| 
|*High* | The loss of confidentiality, integrity, or availability could have a **severe or catastrophic** adverse effect on organizational operations, organizational assets, or individuals. |

![]({{site.baseurl}}/assets/img/check-box.png){:style="float:center"} &nbsp;**Create a site map of categorized assets**
- This map will help you determine each security area's minimum security level.

{% include alert-no-icon.html content="As an alternative to assessing a site's risk, you can select a predetermined FSL as described in <a class=\"usa-link usa-link--external\" href=\"https://www.cisa.gov/sites/default/files/2024-07/The_Risk_Management_Process_2024_Edition.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">The Risk Management Process for Federal Facilities: An Interagency Security Committee Standard</a>." %}

## Categorize Security Areas

{% include alert-no-icon.html content="Agencies may use different terms for their security areas; however, each agency should establish its criteria for authentication mechanisms according to <a class=\"usa-link usa-link--external\" href=\"https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-116r1.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">NIST SP 800-116, Revision 1, Guidelines for the Use of PIV Credentials in Facility Access</a>." %}


![]({{site.baseurl}}/assets/img/check-box.png){:style="float:center"} &nbsp;**Categorize security areas**
- Once you've inventoried and mapped assets by risk and impact level, it's time to categorize security areas.
- NIST SP 800-116, Revision 1, defines three (3) security area categories: 

|Category | Description|
|:---------|:------------|
| *Exclusion*| An area where uncontrolled movement would permit direct access to a security asset, such as a Sensitive Compartmented Information Facility (SCIF).|
| *Limited* | An area near a secure asset. Uncontrolled movement within a limited area may permit access to an asset. Escorts and other restrictions can prevent access.| 
|*Controlled* | An area near or surrounding a Limited or Exclusion area, such as a facility lobby. A Controlled area provides administrative control and safety or a buffer zone for embedded Limited or Exclusion areas. The movement of authorized personnel within this area usually is not controlled because it doesn’t provide immediate access to secure assets.  |

- Assign the same risk level as the highest-risk asset within the area. 
    - Example: If three (3) assets exist within a security area: one Low-risk, one Moderate-risk, and one High-risk, you must categorize the security area as **High-risk**.  Alternatively, the area may be split into three (3) security areas that each have a different risk level.  

## Determine Authentication Factors

{% include alert-no-icon.html content="<a class=\"usa-link usa-link--external\" href=\"https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-116r1.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">NIST SP 800-116, Revision 1, Guidelines for the Use of PIV Credentials in Facility Access</a> recommends the following method to determine authentication factors for Exclusion, Limited, and Controlled security areas." %}


![]({{site.baseurl}}/assets/img/check-box.png){:style="float:center"} &nbsp;**Determine authentication factors required for security area categories**
- Once you have categorized all security area categories, you will select the minimum number of authentication factors (1, 2, or 3) needed to access and safeguard the facility:

| Category| Minimum Number of Factors | Description|
|:---------|:--------------------------:|:------------|
|*Exclusion*| 3| Exclusion areas require three authentication factors: Something you have, such as a PIV credential; something you know, such as the PIV credential PIN; and something you have on or in your body, such as a fingerprint, face, or iris scan.|
|*Limited* | 2 | Limited areas require 2 authentication factors, such as the PKI-AUTH from the PIV credential and PIN.|
|*Controlled* | 1 | Controlled areas require only one authentication factor, such as the PKI-CAK from the PIV credential.|  
  
## Select Authentication Mechanisms 

{% include alert-no-icon.html content="[FIPS 201-3](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.201-3.pdf){:target=\"_blank\"}{:rel=\"noopener noreferrer\"}{:class=\"usa-link usa-link--external\"}, Personal Identity Verification (PIV) of Federal Employees and Contractors, defines authentication mechanisms at four assurance levels (Little or No, Some, High, and Very High)." %}

![]({{site.baseurl}}/assets/img/check-box.png){:style="float:center"} &nbsp;**Select authentication mechanisms for each security area**
- Based on the security area categories and required authentication factors for each security area, choose the PIV credential authentication mechanism(s) that enforce these factors at each access point. 
- FIPS 201-3 specifies these authentication mechanisms for PIV credentials:
    - PKI authentication using the PIV Authentication Certificate [(PKI-AUTH)]({{site.baseurl}}/university/pacs/#pki-auth){:rel="noopener noreferrer"} 
    - PKI authentication using the Card Authentication Certificate [(PKI-CAK)]({{site.baseurl}}/university/pacs/#pki-cak){:rel="noopener noreferrer"} 
    - PIV authentication using the Secure Message key [(SM-AUTH)]({{site.baseurl}}/university/pacs/#sm-auth){:rel="noopener noreferrer"} 
    - Unattended authentication using off-card biometric comparisons [(BIO)]({{site.baseurl}}/university/pacs/#bio){:rel="noopener noreferrer"} 
    - Attended authentication using off-card biometric comparisons [(BIO-A)]({{site.baseurl}}/university/pacs/#bioa){:rel="noopener noreferrer"} 
    - Either attended or unattended authentication using off-card biometric comparisons [(BIO(-A))]({{site.baseurl}}/university/pacs/#bio-a){:rel="noopener noreferrer"} 
    - Authentication using on-card fingerprint biometric comparisons [(OCC-AUTH)]({{site.baseurl}}/university/pacs/#occ-auth){:rel="noopener noreferrer"} 

The table below gives the possible authentication mechanisms for the three (3) security area categories:

| Category  | Minimum<br>Number of<br>Factors | Acceptable Factors | Authentication<br>Mechanism:<br>Contact Interface  |  Authentication Mechanism:<br>Contactless Interface |
| :-------- | :------: | :----- | :-----  | :-----     |
| *Exclusion*  | 3 | Something you have **AND**<br>Something you know **AND**<br>Something you have on or in your body | PKI-AUTH + PIN + BIO or OCC-AUTH + PKI-AUTH + Non OCC-AUTH Bio  | VCI + PKI-AUTH + PIN + BIO |
| *Limited*   | 2 |Something you have *AND*<br>Something you know, **OR**<br>Something you have *AND*<br>Something you have on or in your body, **OR**<br>Something you know *AND*<br>Something you have on or in your body  | PKI-AUTH + PIN  or OCC-AUTH as the PIV Card activator with PKI-AUTH.  |  VCI +  PKI-AUTH + PIN |
| *Controlled*   | 1 | Something you have **OR**<br>Something you have on or in your body  |  PKI-CAK <br> SM-AUTH   | PKI-CAK <br> SM-AUTH  |

**Note:** Some authentication mechanisms defined by NIST SP 800-116, Revision 1 might not be available on all user-population cards (for example, on-card biometric comparison, off-card biometric comparison).
Certificates must be validated when using PKI-CAK and PKI-AUTH as authentication mechanisms. Verify the certificate against a Certificate Revocation List (CRL) or Online Certificate Status Protocol (OCSP) server response. Also, verify that the certificate chains to the Federal Common Policy root certification authority (CA). 

{% include alert-no-icon.html content="When using PKI-CAK and PKI-AUTH as authentication mechanisms, certificates must be validated. Verify the certificate against a Certificate Revocation List (CRL) or Online Certificate Status Protocol (OCSP) server response. Also, verify that the certificate chains to the Federal Common Policy root certification authority (CA)." %}

Visit [PKI 101]({{site.baseurl}}/university/pki/) to learn more about certificate trust.

{% include alert-no-icon.html content="GSA’s [PACS Customer Ordering Guide](https://www.gsa.gov/system/files?file=Guide-to-GSA-PACS-An-Ordering-Guide-June-12-2024.pdf){:target=\"_blank\"}{:rel=\"noopener noreferrer\"}{:class=\"usa-link usa-link--external\"} is a good starting point for understanding Physical Access Control System procurements." %}

This page provides a sample PACS Procurement Checklist. You can reuse or tailor this checklist according to your agency’s practices. The checklist highlights common procurement activities as they relate to the following roles:
- Information Technology or Physical Security Engineers (ENG)
- Project Managers (PM)
- Procurement Officers (PO)
- Chief Information Officers (CIO)
- Chief Security Officers (CSO)

Agency staff are encouraged to participate in steps that list their roles in **bold**, underlined font.

## PACS Procurement Best Practices 

<table>
 <col width="400">
 <col width="200">

 <tr>
  <th colspan="2" style="background-color:#FFFFFF;font-size:20px;"><b>PACS Procurement Checklist</b></th>
  <th style="background-color:#FFFFFF;font-size:20px;" colspan="5"><b>Recommended Participants</b></th>
 </tr>

 <tr>
  <td colspan="2" class="what"><b>1. Identify your agency’s need to procure or upgrade a PACS.</b></td>
  <td>ENG</td>
  <td><b><u>PM</u></b></td>
  <td><b><u>PO</u></b></td>
  <td><b><u>CIO</u></b></td>
  <td><b><u>CSO</u></b></td>
 </tr>

<tr>
  <td colspan="7">
  <ul>
	<li>Determine whether your agency has similar efforts underway or other projects that could impact the procurement.</li>
	<li>Determine why the agency needs to procure or upgrade a PACS.</li>
	<li>Perform a cost-benefit analysis.</li>
  </ul>
  </td>
</tr>

 <tr>
  <td colspan="2"><b>2. Develop a PACS project charter.</b></td>
  <td>ENG</td>
  <td><b><u>PM</u></b></td>
  <td>PO</td>
  <td><b><u>CIO</u></b></td>
  <td><b><u>CSO</u></b></td>
 </tr>

<tr>
  <td colspan="7">
  <ul>
	<li>Identify the PACS project’s executive sponsor.</li>
	<li>Document a high-level project purpose, scope, and goals.</li>
	<li>Determine the PACS deployment model required for the project's scope.</li>
	<li>Identify what standards and requirements need to be addressed (for example, HSPD-12, FIPS 201-3, NIST SP 800-116, Revision 1).</li>
	<li>Estimate the project's duration.</li>
  </ul>
  </td>
</tr>

 <tr>
  <td colspan="2"><b>3. Identify and obtain support from PACS stakeholders (iterative).</b></td>
  <td>ENG</td>
  <td><b><u>PM</u></b></td>
  <td>PO</td>
  <td><b><u>CIO</u></b></td>
  <td><b><u>CSO</u></b></td>
 </tr>

<tr>
  <td colspan="7">
  <ul>
	<li>Identify your required and optional stakeholders and request their participation.</li>
	<li>Include national, regional, state, and local stakeholders.</li>
	<li>Involve stakeholders from agency information technology (IT) teams (for example, architects/engineers, network engineers, security, infrastructure services, directory services, and web services).</li>
	<li>Involve agency facility and personnel support organizations (e.g., physical security, building operations, and Human Resources).</li>
  </ul>
  </td>
</tr>

 <tr>
  <td colspan="2"><b>4. Identify PACS project phases and tasks (iterative).</b></td>
  <td><b><u>ENG</u></b></td>
  <td><b><u>PM</u></b></td>
  <td>PO</td>
  <td>CIO</td>
  <td>CSO</td>
 </tr>

<tr>
  <td colspan="7">
  <ul>
	<li>Document the project’s phases and required tasks. Samples include:
		<ul>
			<li>Pre-project planning</li>
			<li>Site security assessment(s)</li>
			<li>Statement of Work (SOW)</li>
			<li>PACS Requirements Document (or Specification)</li>
			<li>Request for Information (RFI)</li>
			<li>Request for Proposal (RFP)/Request for Quotation (RFQ)</li>
			<li>Integrator (vendor) evaluation and award</li>
			<li>Design</li>
			<li>Implementation</li>
			<li>Inspections</li>
			<li>Testing</li>
			<li>Close-out</li>
			<li>Sustainment</li>
		</ul>
		</li>
  </ul>
  </td>
</tr>

 <tr>
  <td colspan="2"><b>5. Develop a project schedule (iterative).</b></td>
  <td>ENG</td>
  <td><b><u>PM</u></b></td>
  <td>PO</td>
  <td>CIO</td>
  <td>CSO</td>
 </tr>

<tr>
  <td colspan="7">
  <ul>
	<li>Use automated tools or agency software to create a project schedule (project tasks, dependencies, durations, and resources).</li>
	<li>Share the project schedule with stakeholders to ensure it is accurate and complete.</li>
  </ul>
  </td>
</tr>

 <tr>
  <td colspan="2"><b>6. Conduct a Facility Security Level (FSL) assessment of project-related agency sites and determine each site's Personal Identity Verification (PIV) authentication mechanisms.</b></td>
  <td><b><u>ENG</u></b></td>
  <td><b><u>PM</u></b></td>
  <td>PO</td>
  <td><b><u>CIO</u></b></td>
  <td><b><u>CSO</u></b></td>
 </tr>

<tr>
  <td colspan="7">
  <ul>
	<li>For details, see <a href="{{site.baseurl}}/university/pacs/#assess-facility-security-level">Aligning FSL and Authentication Mechanism</a>.</li>
	<li>The FSL assessment and chosen PIV authentication mechanisms will form the basis for the PACS requirements document/specification and it will affect the SOW and project costs.</li>
	<li>The sample survey questions below will help you assess the FSL of each facility and select the right PIV authentication mechanisms:
	<ul>
		<li>Who will use a facility’s PACS? Include all possible users.</li>
		<li>What credentials do the facility’s users and visitors have?</li>
		<li>What facility access risks exist?</li>
		<li>How can the facility mitigate these risks?</li>
		<li>What PACS installations does the facility need?</li>
		<li>What support systems would be integrated into the facility’s PACS (for example, intrusion detection, video surveillance, emergency notification, and elevator control)?</li>
		<li>What PACS integrator or other contractor services does the agency need to solicit bids on?</li>
		<li>What PACS hardware and software is needed?</li>
	</ul>
	</li>
	<li>Your agency’s selected integrator will help select the approved, needed hardware and software through the GSA Acquisitions process (Schedules 70 and 84, Blanket Purchase Orders, etc.). The following are some useful considerations:
	<ul>
		<li>What are the facility’s common ingress and egress traffic patterns?</li>
		<li>What throughput speeds are needed?</li>
		<li>What are the ongoing operational and projected maintenance needs?</li>
		<li>What are the training needs for PACS administrators, operators, technicians, and users?</li>
		<li>Which PIV authentication mechanism(s) will be needed to secure the facility?</li>
	</ul>
	</li>
  </ul>
  </td>
</tr>

 <tr>
  <td colspan="2"><b>7. Develop a PACS requirements document or specification.</b></td>
  <td><b><u>ENG</u></b></td>
  <td><b><u>PM</u></b></td>
  <td>PO</td>
  <td><b><u>CIO</u></b></td>
  <td><b><u>CSO</u></b></td>
 </tr>

<tr>
  <td colspan="7">
  <ul>
	<li>When documenting PACS requirements, soliciting input from your stakeholders is critical.</li>
	<li>Organize requirements into clear categories (technical, performance, and operational) to help stakeholders give targeted feedback.</li>
  </ul>
  </td>
</tr>

 <tr>
  <td colspan="2"><b>8. Release a Request for Information (RFI) to potential service providers.</b></td>
  <td>ENG</td>
  <td><b><u>PM</u></b></td>
  <td><b><u>PO</u></b></td>
  <td>CIO</td>
  <td>CSO</td>
 </tr>

<tr>
  <td colspan="7">
  <ul>
	<li>Create and issue an RFI to vendors that request specific qualifications and capabilities against PACS requirements.</li>
  </ul>
  </td>
</tr>

 <tr>
  <td colspan="2"><b>9. Submit an IT funding proposal following your agency’s budgetary process.</b></td>
  <td>ENG</td>
  <td><b><u>PM</u></b></td>
  <td><b><u>PO</u></b></td>
  <td>CIO</td>
  <td>CSO</td>
 </tr>

<tr>
  <td colspan="7">
  <ul>
	<li>Follow your agency's existing budgetary procedures to submit a funding proposal for the project.</li>
  </ul>
  </td>
</tr>

 <tr>
  <td colspan="2"><b>10. Develop an RFP and SOW to solicit GSA-approved integrator bids.</b></td>
  <td>ENG</td>
  <td><b><u>PM</u></b></td>
  <td><b><u>PO</u></b></td>
  <td>CIO</td>
  <td>CSO</td>
 </tr>

<tr>
  <td colspan="7">
  <ul>
	<li>You can reuse the <a class="usa-link usa-link--external" href="https://www.gsa.gov/system/files?file=Guide-to-GSA-PACS-An-Ordering-Guide-June-12-2024.pdf" target="_blank" rel="noopener noreferrer">GSA PACS Customer Ordering Guide’s Sample Statement of Work</a>, page 17. For help creating an RFP, see <a href="{{site.baseurl}}/docs/pacs-pki-epacs-procurement.pdf" target="_blank" rel="noopener noreferrer">Enabling Strong Authentication with PIV Cards: PKI in Enterprise PACS Recommended Procurement Language for RFPs Version 1.1.0</a>. For help with Requests for Quotations (RFQs), see <a class="usa-link usa-link--external" href="https://www.ebuy.gsa.gov/ebuy/" target="_blank" rel="noopener noreferrer"> GSA’s eBuy RFQ Online Tool</a>.</li>
  </ul>
  </td>
</tr>

 <tr>
  <td colspan="2"><b>11. Solicit bids, evaluate, and award the integrator contract.</b></td>
  <td><b><u>ENG</u></b></td>
  <td><b><u>PM</u></b></td>
  <td><b><u>PO</u></b></td>
  <td><b><u>CIO</u></b></td>
  <td><b><u>CSO</u></b></td>
 </tr>

<tr>
  <td colspan="7">
  <ul>
	<li>Include these steps during your bid and evaluation process:
	<ul>
		<li>Identify members of the evaluation committee.</li>
		<li>Establish evaluation criteria for bid review.</li>
		<li>Identify how well-proposed integrator solutions meet your needs.</li>
		<li>Document the award rationale and announce the contract award decision.</li>
		<li>Upon request, explain the award rationale briefly to the unsuccessful bidder(s).</li>
	</ul>
	</li>
  </ul>
  </td>
</tr>

 <tr>
  <td colspan="2"><b>12. Develop a PACS architecture and migration strategy.</b></td>
  <td><b><u>ENG</u></b></td>
  <td><b><u>PM</u></b></td>
  <td>PO</td>
  <td><b><u>CIO</u></b></td>
  <td><b><u>CSO</u></b></td>
 </tr>

<tr>
  <td colspan="7">
  <ul>
	<li>Define a migration strategy to transition facilities to the new PACS solution.</li>
  </ul>
  </td>
</tr>

 <tr>
  <td colspan="2"><b>13. Buy products listed on the GSA PACS APL.</b></td>
  <td>ENG</td>
  <td><b><u>PM</u></b></td>
  <td><b><u>PO</u></b></td>
  <td>CIO</td>
  <td>CSO</td>
 </tr>

<tr>
  <td colspan="7">
  <ul>
	<li>After the contract award, your integrator will help you:
	<ul>
	<li>Choose the best PACS topology (an end-to-end solution of hardware, software, a Certificate Validation System, and PIV credential readers) listed on the <a href="{{site.baseurl}}/fips201/" target="_blank" rel="noopener noreferrer">GSA PACS APL</a> for the PIV authentication mechanisms selected for your facility.</li>
	<li>Buy the products and additional services you need by using the <a class="usa-link usa-link--external" href="https://www.gsa.gov/technology/technology-purchasing-programs/mas-information-technology" target="_blank" rel="noopener noreferrer">GSA Multiple Award Schedule (MAS)</a>. Your chosen integrator will help your agency choose the right PACS products and services according to your agency’s preferred GSA purchasing vehicle(s).</li>
	</ul>
	</li>
	<li>Want to learn more about GSA Schedules? Training is available: <a class="usa-link usa-link--external" href="https://www.cisa.gov/resources-tools/programs/continuous-diagnostics-and-mitigation-cdm-program/program-approved-products-list-apl" target="_blank" rel="noopener noreferrer">On-demand GSA Schedules Training</a>. For help with GSA Schedules, email the GSA National Customer Service Center at NCSCcustomer dot service at gsa dot gov or call 1-800-488-3111.</li>
  </ul>
  </td>
</tr>
 
</table>

{% include alert-no-icon.html content="If you have PACS procurement questions at any time, contact GSA IT Customer Service at ITCSC@gsa.gov or call 1-855-482-4348." %}

## Why Can We Buy Only GSA-Approved Products and Services?
[GSA’s FIPS 201 Evaluation Program]({{site.baseurl}}/fips201ep/){:target="_blank"}{:rel="noopener noreferrer"} tests all GSA-listed PACS products, topologies, and services for compliance with FIPS 201 requirements. Purchasing products listed on the GSA APL ensures product compliance with FIPS 201, secure operations, and interoperability.   

## What Other GSA Resources Can Help Us?
- [GSA Schedules - General Information](https://www.gsa.gov/buy-through-us/purchasing-programs/multiple-award-schedule/help-with-mas-buying){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
- [GSA Schedules - Tools and Resources](https://www.gsa.gov/buying-selling/purchasing-programs/gsa-schedules/we-are-here-to-help){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
- [GSA Multiple Awards Schedule (MAS)](https://www.gsa.gov/technology/technology-purchasing-programs/mas-information-technology){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
- [GSA Multiple Awards Schedule (MAS) Categories](https://www.gsa.gov/technology/it-contract-vehicles-and-purchasing-programs/multiple-award-schedule-it){:target="_blank"}{:class="usa-link usa-link--external"}{:rel="noopener noreferrer"}
- [GSA Multiple Awards Schedule (MAS) News and Updates](https://www.gsa.gov/buying-selling/purchasing-programs/gsa-schedules/schedules-news-and-updates){:target="_blank"}{:class="usa-link usa-link--external"}{:rel="noopener noreferrer"}
- [GSA’s eBuy](https://www.ebuy.gsa.gov/ebuy/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} RFQ online system lets you to post requirements, obtain quotes, and issue orders electronically. 
- Approved [Certified System Engineer ICAM PACS (CSEIP) List]( https://www.securetechalliance.org/activities-cseip-registry/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}.  Agencies must use FIPS 201-approved integrators and other contractors. The "lead designer" for FIPS 201-approved integrators must possess a Certified System Engineer ICAM PACS (CSEIP) certification or be certified by another federally recognized certification program.
- [GSA Customer Resources for Security and Protection](https://www.gsa.gov/buy-through-us/products-and-services/gsa-security-and-protection-category/customer-resources-for-security-and-protection){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
- [GSA Security and Protection Category](https://www.gsa.gov/buy-through-us/products-and-services/gsa-security-and-protection-category){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}   

## Training

Specialized training is essential for Physical Access Control System (PACS) technical leads and team members. This page describes roles, responsibilities, and training opportunities. 

## Technical Roles and Responsibilities

PACS project teams consist of both agency employees and contractors. Teams include an IT Architect, Engineers, Technicians, Operators, System Administrators, Physical Security Specialists, Facility Managers, a variety of technical services team members, etc. The table below describes the most common PACS technical roles: 

| Technical Role | Responsibilities |
|:------|:-------------| 
| IT Architect | Defines the project's technical activities according to the project scope and requirements; conducts further analysis and design, as required; and directs the implementation of a PACS solution. |
| Engineer | Makes configuration recommendations and advises the IT Architect about enterprise-wide network improvements, PACS hardware and software optimization, testing, deployment, and maintenance.|
| Technician | Installs, administers, and maintains network and system components. |
| Operator | Uses physical security functions, such as setting access privileges or taking actions to resolve system-generated events and alarms.|

{% include alert-no-icon.html content="IT Architects, Engineers, and Operators may be federal employees and/or contractors, while technicians are typically contractors." %}

{% include alert-no-icon.html content="Teams include a PACS Project Manager, Procurements Official or Specialist, project management specialists, budget analysts, lawyer(s), etc." %}

## Recommended Technical Training

| Role | Recommended Training |
|:------|:-------------| 
| IT Architects| Must be knowledgeable about the [GSA PACS APL]({{site.baseurl}}/fips201/){:target="_blank"}{:rel="noopener noreferrer"} and the manufacturers' solutions for PACS. Should be knowledgeable about the federal government and agency-specific policies, standards, and guidance documents to make design recommendations related to PACS implementation. To implement a PACS solution, IT Architects must possess a current [Certified System Engineer ICAM PACS (CSEIP) certification](https://www.securetechalliance.org/activities-certified-system-engineer-icam-pacs-training-and-certification-program/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. There are no other similar, federally recognized certifications as of June 16, 2024.|
| Engineers| May hold a [CSEIP](https://www.securetechalliance.org/activities-certified-system-engineer-icam-pacs-training-and-certification-program/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} certification. There are no other similar, federally recognized certifications as of June 16, 2024. Engineers may optionally complete PACS product manufacturers' training (for example, PACS APL products) related to the PACS implementation. Should be knowledgeable about federal government and agency-specific policies, standards, and guidance documents related to enterprise networks and PACS implementation. |
| Technicians | Should complete PACS product manufacturers' training (i.e., PACS APL products) related to the PACS solution implementation.| 
| Operators | Should complete tailored training in federal government policies and standards related to PACS. Completing PACS product manufacturers' (i.e., PACS APL products) certification related to the PACS implementation is recommended.|

{% include alert-no-icon.html content="Agencies must specify their requirements for specific roles, responsibilities, and training in their Request for Information (RFI) (that is, request for contractor qualifications statements) and Statement of Work (SOW)." %}

## Training Opportunities

{% include alert-no-icon.html content="Agencies that plan to initiate a PACS project should include line items for related employee training in their annual training plans and annual training budgets." %}

### Department of Homeland Security - Interagency Security Committee
The [Interagency Security Committee](https://www.cisa.gov/resources-tools/groups/interagency-security-committee-isc){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} developed a series of free, self-paced, [online training courses](https://www.dhs.gov/interagency-security-committee-training){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} that provide an overview of facility security standards, processes, and practices.

### Equipment Manufacturers
[GSA PACS APL]({{site.baseurl}}/fips201/){:target="_blank"}{:rel="noopener noreferrer"} PACS manufacturers whose products are listed on the GSA PACS APL offer product-specific courses for Operators and Technicians directly or through authorized service providers. Operators and Technicians may obtain certifications for completing some series of courses.

>**Note:** Manufacturer training may not address unique operational requirements or site-specific configurations, so authorized service providers should conduct this training:  [GSA Multiple Award Schedule (MAS)](https://www.gsa.gov/technology/technology-purchasing-programs/mas-information-technology){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. 

### Authorized Service Providers
Authorized service providers offer manufacturer training for installing, configuring, and maintaining PACSs: [GSA Multiple Award Schedule (MAS)](https://www.gsa.gov/technology/technology-purchasing-programs/mas-information-technology){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. This training can be tailored to your agency, facility, implementation features, operational policies, and procedures. It should be planned during the Procurement phase.

### Industry Certifications
Industry certifications are vendor neutral and standards based. GSA requires that all work performed on approved PACS for GSA-managed facilities must be designed and installed by a Certified System Engineer for ICAM PACS (CSEIP).  The [CSEIP Program](https://www.securetechalliance.org/activities-certified-system-engineer-icam-pacs-training-and-certification-program/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} trains those who implement solutions related to OMB M-05-24 and OMB M-19-17.

Commercial vendors offer additional certification opportunities.

### Industry Training

The Secure Technology Alliance Access Control Council held a six-part webinar on planning, procuring, and implementing PIV-enabled physical access control systems (PACS) for government facilities. The series was created for systems engineers, facility managers, physical security personnel, and other government facility stakeholders.

Webinar sessions feature industry and government experts covering:
- Identifying stakeholders involved in deploying a PIV-enabled PACS
- Planning implementation: facility characterization and risks
- Establishing the project scope
- Developing and implementing the procurement strategy
- Deploying the chosen solution
- Reviewing use cases and agency lessons learned

Recordings of completed webinars are available.
- Part 1: [How to Plan, Procure, and Deploy a PIV-Enabled Physical Access Control System](https://www.securetechalliance.org/how-to-plan-procure-and-deploy-a-piv-enabled-physical-access-control-system-part-1/)
- Part 2: [Facility Characterization and Risk Management](https://www.securetechalliance.org/how-to-plan-procure-and-deploy-a-piv-enabled-physical-access-control-system-part-2/)
- Part 3: [Establishing the Project Scope](https://www.securetechalliance.org/how-to-plan-procure-and-deploy-a-piv-enabled-physical-access-control-system-part-3/)
- Part 4: [Developing the Procurement Strategy](https://www.securetechalliance.org/how-to-plan-procure-and-deploy-a-piv-enabled-physical-access-control-system-part-4/)
- Part 5: [Implementing the Solution](https://www.securetechalliance.org/how-to-plan-procure-and-deploy-a-piv-enabled-physical-access-control-system-part-5/)
- Part 6: [Use Cases and Lessons Learned](https://www.securetechalliance.org/how-to-plan-procure-and-deploy-a-piv-enabled-physical-access-control-system-part-6/)


### GSA PACS Reverse Industry Day Conference (2018)

In 2018, GSA hosted a PACS Reverse Industry Day conference featuring government and industry experts on various PACS topics. Event videos are available via the GSA YouTube channe: 

- [Morning Session](https://www.youtube.com/watch?v=r9X1XtrLjMg){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
- [Afternoon Session](https://www.youtube.com/watch?v=bS8jdkW_WUI){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

## Lessons Learned

Federal agencies have shared these PACS lessons learned:

## Planning
- Identify all stakeholders upfront, including an Executive Sponsor.
- Designate staff, such as architects, engineers, and operators, to fill key roles.
- Engage CIO/CISO representatives early. _Remember: A PACS is an IT system._
- As an IT system, a PACS must complete Certification and Accreditation and obtain an Authority to Operate before connecting to the network.
- Create, maintain, and share an integrated master schedule that presents project phases, tasks, resources, and dependencies.
- Establish a PACS component lifecycle management plan to help estimate hardware and software upgrades over the system's lifetime.
- Build the cost of software licensing and system sustainment into your project budget.
- Work with facility engineers to identify constraints specific to your workplace, such as mandatory construction requirements. These constraints may limit solution offerings.
- When modernizing PACS assets, consider the impact on the federal facility population, especially if your agency is moving toward FICAM-compliant PACS. 
- Plan a standardized deployment strategy across locations.
- Remember that legacy system hardware, such as credential readers, may not support FICAM-compliant modes of operation. (FICAM Mode implies using PKI-based authentication mechanisms and online identity validation.) After identifying desired authentication mechanisms, review your system hardware capabilities to determine if upgrades are necessary.
- Use legacy credentials and non-FICAM compliant modes of operation *only* in a migration strategy, not as the end state.
- Retire and phase out secondary, legacy credentials.
- Use your agency's Identity Management System as the authoritative source for all user records in the PACS.
- Recall that some PACS allows the assignment of user access levels at the time of credential registration. Plan the method of assignment before provisioning/registration.
- Avoid acts of “omission” that create noncompliance. For example, procuring products listed on the Approved Products List (APL) but not correctly enabling FICAM Mode.
- Use a risk-based approach when selecting appropriate PIV authentication mechanisms for physical access to federal government buildings and facilities, whether leased or government-owned. 
- Remember that access points should not rely solely on an authentication mechanism that requires optional card features, as these features might not be available on all user-population cards (for example, on-card biometric comparison).
- Plan the PACS to meet the operating environment's needs (e.g., do not require three-factor authentication when only one factor is needed).
- Understand that PKI is the foundation for high-assurance PACS implementations.


## Procurement
- Do not procure noncompliant PACS technologies, such as proximity cards.
- Use consistent terms and recommended procurement language within requirements documents, specifications, SOWs, RFIs, RFPs, and RFQs. 
- Leverage agency subject matter experts (SMEs) to review SOWs, RFPs, and RFQs before releasing them for bid.
- Resolve SOW and PACS compliance issues as soon as they are recognized.
- Work closely with agency legal team members to define an SOW that contains unambiguous responsibilities for the integrator and appropriate cures for non-performance.
- Have your integrator provide copies of all relevant FIPS 201-3 compliance and functionality testing documentation.
- Specify personnel roles, responsibilities, and training requirements within the SOW (for example, all engineers must be CSEIP certified).
- Ensure qualified professionals and/or SMEs review the design documents before releasing them for bid or formal contractor response. Consider hiring an SME capable of augmenting agency staff as a “buyer’s agent” during these activities
- Consider seeking evidence of qualified and/or registered personnel certifying the proposed solution (submittals) before approval or notice to proceed.


## Operations
- Define clear processes and procedures for remedying system incidents (for example, a failed credential reader). Be sure to identify key support personnel and expected levels of support.
- Perform regular system maintenance and patching of the PACS components. Establish clear procedures for testing upgrades before widespread deployment and develop “roll-back” procedures if required. 
- Ensure the PACS is configured and maintained to operate in FICAM Mode. 
- Work with your IT Department to ensure your PACS can perform online certificate validation. Credential validation should take place at or near the time of authentication. If your PACS is limited to offline certificate validation, manually load CRLs and certificate trust lists into the PACS daily.
- Provision only assured identities from an agency authoritative source into your PACS.
- Consider immediately having the PACS administrator disable invalid PIV credentials (expired, certificates placed on CRL, etc.) rather than waiting for automatic disabling through the routine credential validation process. Also, consider disabling identity and credential records rather than removing them to retain audit data that might be needed later (for example, employee misconduct investigations).
- Remove all PII from PACS endpoints to protect privacy.
- Audit expected system functionality regularly. Minimally, verify that access points are challenging the correct number and type of authentication factors. Consider using test credentials that have expired or been revoked to ensure correct operation further.

## Training
- Create and maintain a training plan that formally documents training requirements.
- Provide role-specific training to agency stakeholders, such as HR, IT, or Security.

## References

## Public Law

[Federal Information Security Modernization Act (FISMA) of 2014](https://www.dhs.gov/fisma){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, Public Law No. 113-283. 

## Policies

OMB M-15-13, ["Policy to Require Secure Connections Across Federal Websites and Web Services"](https://obamawhitehouse.archives.gov/sites/default/files/omb/memoranda/2015/m-15-13.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, June 8, 2015

OMB Circular A-130, ["Managing Information as a Strategic Resource"](https://obamawhitehouse.archives.gov/sites/default/files/omb/assets/OMB/circulars/a130/a130revised.pdf?msclkid=b1259175c7f211ec8144311a36ca5067){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, July 2016

OMB M-05-24, ["Implementation of Homeland Security Presidential Directive (HSPD) 12 – Policy for a Common Identification Standard for Federal Employees and Contractors"](https://georgewbush-whitehouse.archives.gov/omb/memoranda/fy2005/m05-24.pdf?msclkid=c536f001c7f811ecaed4fea27a3c8d47){:target="_blank"}{:rel="noopener noreferrer" class="usa-link usa-link--external"}, August 5, 2005

OMB M-19-17, [Enabling Mission Delivery Through Improved Identity, Credential, and Access Management](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, May 21, 2019

OMB M-22-09, ["Moving the U.S. Government towards Zero Trust Cybersecurity Principles"](https://www.whitehouse.gov/wp-content/uploads/2022/01/M-22-09.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, January 26, 2022

E.O. 13800, ["Strengthening the Cybersecurity of Federal Networks and Critical Infrastructure"](https://www.cio.gov/2018/05/30/it-modernization/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, May 11, 2017

E.O. 13636 and PPD-21 - ["Fact Sheet: Improving Critical Infrastructure Cybersecurity and Critical Infrastructure Security and Resilience")](https://www.dhs.gov/publication/eo-13636-ppd-21-fact-sheet){:target="_blank"}{:rel="noopener noreferrer" class="usa-link usa-link--external"}, December 2020

## Regulations

[_Federal Acquisition Regulation (FAR)_](https://www.acquisition.gov/browsefar){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

[_Federal Acquisition Regulation (FAR)_](https://www.acquisition.gov/browsefar){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, requirement to procure PACS for GSA FIPS 201 EP APL

## Standards

FIPS PUB 140-3, ["Security Requirements for Cryptographic Modules"](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.140-3.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, March 22, 2019

[FIPS PUB 199, _Standards for Security Categorization of Federal Information and Information Systems_](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.199.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, NIST, February 2004

[FIPS PUB 200, _Minimum Security Requirements for Federal Information and Information Systems_](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.200.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, NIST, March 9, 2006 

[FIPS 201-3, _Personal Identity Verification (PIV) of Federal Employees and Contractors_](http://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.201-2.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, NIST, January 2022

[NIST SP 800-53, Revision 5, _Recommended Security Controls for Federal Information Systems and Organizations_](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, September 2020

[NIST SP 800-60, Volume 1, Revision 1, _Guide for Mapping Types of Information and Information Systems to Security Categories_](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-60v1r1.pdf ){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, August 2008

[NIST SP 800-60, Volume II, Revision 1, _Appendices to Guide for Mapping Types of Information and Information Systems to Security Categories_](http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-60v2r1.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, August 2008

NIST SP 800-63-3, ["Digital Identity Guidelines, Core, Part A, Part B, and Part C"](https://pages.nist.gov/800-63-3/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, June 2017

NIST SP 800-73-5, ["Interfaces for Personal Identity Verification, Part 1 - PIV Card Application Namespace, Data Model and Representation"](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-73pt1-5.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, July 2024

NIST SP 800-73-5, ["Interfaces for Personal Identity Verification, Part 2 - PIV Card Application Card Command Interface"](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-73pt2-5.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, July 2024

NIST SP 800-73-5, ["Interfaces for Personal Identity Verification, Part 3 - PIV Card Application Programming Interface"](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-73pt3-5.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, July 2024

[NIST SP 800-116, Revision 1, _Guidelines for the Use of PIV Credentials in Facility Access_](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-116r1.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, June 2018 

NIST SP 800-171, Revision 3, ["Protecting Controlled Unclassified Information in Nonfederal Information Systems and Organizations"](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-171r3.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, May 2024

NIST SP 800-207, ["Zero Trust Architecture"](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-207.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, August 2020

## Guidance and Best Practices

[_Compliance Guide: The HTTPS-Only Standard_](https://https.cio.gov/guide/#are-federally-operated-certificate-revocation-services-crl-ocsp-also-required-to-move-to-https){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

[_Best Practices for Planning and Managing Physical Security Resources: An Interagency Security Committee Guide_](https://www.cisa.gov/sites/default/files/publications/isc-planning-managing-physical-security-resources-dec-2015-508.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, Interagency Security Council (ISC), December 2015

[_Enabling Strong Authentication with PIV Cards: Public Key Infrastructure (PKI) in Enterprise Physical Access Control Systems (E-PACS) Recommended Procurement Language for RFPs_]({{site.baseurl}}/docs/pacs-pki-epacs-procurement.pdf){:target="_blank"}{:rel="noopener noreferrer"}, v1.1.0, GSA, February 24, 2015

[_Facility Access Control: An Interagency Security Committee Best Practice_](https://www.cisa.gov/sites/default/files/publications/Facility%20Access%20Control%20-%20An%20Interagency%20Security%20Committee%20Best%20Practice.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, 2020 Edition

[_PACS Customer Ordering Guide (v2.0)_](https://www.gsa.gov/system/files?file=Guide-to-GSA-PACS-An-Ordering-Guide-June-12-2024.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, GSA Schedule 84 - Security, Fire, & Law Enforcement, January 2021

[_Personal Identity Verification (PIV) in Enterprise Physical Access Control Systems (E-PACS)_]({{site.baseurl}}/docs/pacs-piv-epacs.pdf){:target="_blank"}{:rel="noopener noreferrer"}, Interagency Security Committee (ISC), Version 3.0, March 26, 2014

[_Personal Identity Verification Interoperability for Issuers_](https://www.idmanagement.gov/docs/archived/fpki-pivi-for-issuers.pdf){:target="_blank"}{:rel="noopener noreferrer"}, Version 2.0.1, July 27, 2017

[_Personal Identity Verification Interoperable 101_]({{site.baseurl}}/university/pivi/){:target="_blank"}{:rel="noopener noreferrer"}, Version 2.1, April 2022

[_The Risk Management Process for Federal Facilities: An Interagency Security Committee Standard_](https://www.cisa.gov/sites/default/files/2024-07/The_Risk_Management_Process_2024_Edition.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, ISC, 23rd Edition, 2021

[_Security Control Overlay of Special Publication 800-53 Revision 5: Security Controls for Electronic Physical Access Control Systems (ePACS)_]({{site.baseurl}}/docs/pacs-800-53-overlay.pdf){:target="_blank"}{:rel="noopener noreferrer"}, Version 1.0, December 2020

[*Federal Public Key Infrastructure (FPKI) Security Controls Overlay of Special Publication 800-53 Security Controls for PKI Systems*]({{site.baseurl}}/docs/fpki-overlay-sp-800-53.pdf){:target="_blank"}{:rel="noopener noreferrer"}, Version 3.0, February 26, 2021

## Other Relevant Publications

["Federal Building Security:
Actions Needed to Help Achieve Vision for Secure, Interoperable Physical Access Control"](https://www.gao.gov/products/GAO-19-138){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, Government Accountability Office (GAO), December 20, 2018 

## Glossary

{% include alert-no-icon.html content="**NOTE**: NIST SP-800-116, Revision 1, Guidelines for the Use of PIV Credentials in Facility Access [Appendix G](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-116r1.pdf){:target=\"_blank\"}{:rel=\"noopener noreferrer\"}{:class=\"usa-link usa-link--external\"}  contains additional PACS-related terms and definitions." %}

1. <strong id="access-control">Access Control</strong> - The process of granting or denying specific requests to: (1) obtain and use information and related information processing services; and (2) enter physical facilities, such as federal buildings, military establishments, and border crossing entrances.
2. <strong id="access-point">Access Point</strong> - An access point can be a door, turnstile, or other physical barrier that can be electronically controlled to grant access.
3. <strong id="authentication">Authentication</strong> - The process of establishing confidence in the authenticity and validity of a person’s identity.
4. <strong id="authentication-factors">Authentication Factors</strong> - Authentication systems are often categorized by the number of authentication factors they incorporate. The three factors often considered as the cornerstone of authentication are something you know (for example, a password), something you have (for example, an ID badge or a cryptographic key), and something you are (for example, a thumbprint or other biometric data). Authentication systems that incorporate all three factors are stronger than systems that only incorporate one or two.	
5. <strong id="authorization">Authorization</strong> - GGrants access to only the resources a person needs to perform a job. A person with an authentic, high-assurance credential (PIV or CAC) cannot access all resources. In a large enterprise with thousands of employees and contractors needing access to hundreds of different access points, attempting to manage authorization manually is costly, time-consuming, and error-prone.
6. <strong id="biometric">Biometric</strong> - A measurable, physical characteristic or personal behavioral trait used to recognize or verify an applicant's claimed identity. Facial images, fingerprints, and iris image samples are all examples of biometrics.
7. <strong id="bio">BIO</strong> - A [FIPS 201](https://csrc.nist.gov/pubs/fips/201-3/final){:target="_blank"}{:rel="noopener noreferrer"} authentication mechanism that is implemented by using a fingerprint, facial, or iris image data object sent from the PIV credential to the PACS and matched to the credential holder’s live scan.
8. <strong id="bioa">BIO-A</strong> - A [FIPS 201](https://csrc.nist.gov/pubs/fips/201-3/final){:target="_blank"}{:rel="noopener noreferrer"} authentication mechanism in which the BIO authentication mechanism is performed in the presence of an attendant who supervises the use of the PIV credential and the submission of the PIN and the sample biometric by the credential holder.
9. <strong id="bio-a">BIO(-A)</strong> - A shorthand represents both BIO and BIO-A authentication mechanisms.
10. <strong id="credential">Credential</strong> - A collection of information about a person, attested to by an issuing authority. A credential is a data object, such as a certificate, that can be used to authenticate the credential holder. One or more data object credentials may be stored on the same physical memory device, such as a PIV card.
11. <strong id="credential-validation">Credential Validation</strong> - The process of determining if a credential is valid, which can include the following requirements:
  - The credential was legitimately issued.
  - The credential's activation date has been reached.
  - The credential has not expired.
  - The credential has not been tampered with.
  - The credential has not been suspended or revoked by the issuing authority.
12. <strong id="certificate-revocation-list">Certificate Revocation List</strong> - A list of revoked public key certificates created and digitally signed by a certification authority.	
13. <strong id="identity-management-system-idms">Identity Management System (IDMS)</strong> - A system comprising one or more systems or applications that manages the identity verification, validation, and issuance process.
14. <strong id="identity-registration">Identity Registration</strong> - The process of making a person’s identity known to the PIV system, associating a unique identifier with that identity, and collecting and recording the person’s relevant attributes.
15. <strong id="identity-verification">Identity Verification</strong> - The process of confirming or denying that a claimed identity is correct by comparing the credentials (something you know, something you have, something you are) of a person requesting access with those previously proven and stored in the PIV credential or system and associated with the identity being claimed.
16. <strong id="interoperability">Interoperability</strong> - The quality of allowing any government facility or information system to verify a credential holder’s identity using the credentials on the PIV credential, regardless of the issuer.
17. <strong id="occ-auth">OCC-AUTH</strong> - A two-factor authentication mechanism that uses secure messaging and an on-credential comparison of credential holder fingerprint(s).
18. <strong id="physical-access-control-system">Physical Access Control System</strong> - An electronic system that controls the ability of people to enter a protected area, utilizing authentication and authorization at access control points.
19. <strong id="pacs-alt-auth">PACS Alternative Authenticator - Derived PKI-CAK</strong> - A PIV authentication mechanism implemented on an approved alternative authenticator (token) using an asymmetric key challenge/response protocol of a Derived (NIST SP 800-157) Card Authentication certificate and key.
20. <strong id="pki-auth">PKI-AUTH</strong> - A PIV authentication mechanism implemented by an asymmetric key challenge/response protocol using the PIV
Authentication certificate and key.
21. <strong id="pki-cak">PKI-CAK (PACS)</strong> - A PIV authentication mechanism implemented by an asymmetric key challenge/response protocol using the Card Authentication certificate and key.
22. <strong id="provisioning">Provisioning</strong> - The process of specifying for each identity both the credential used (for example, a PIV, CAC, or PIV-I card) and the privileges granted to access specific resources (for example, a particular facility, door, or access point), and ensuring that a complex set of rules is enforced.
23. <strong id="sym-cak">SM-AUTH</strong> - A PIV authentication mechanism implemented by an elliptic curve key challenge/response protocol using the Secure Message key.
24. <strong id="validation">Validation</strong> - The process of determining that an identity credential was legitimately issued and is still valid (the credential has not expired or been revoked).
