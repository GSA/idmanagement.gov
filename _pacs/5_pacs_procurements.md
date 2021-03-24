---
layout: page
collection: pacs
title: Procurements
permalink: pacs/procure/
sticky_sidenav: true
sidenav: pacs

subnav:
  - text: PACS Procurement Checklist 
    href: '#pacs-procurement-checklist'
  - text: Why Can We Buy Only GSA-Approved Products and Services?
    href: '#why-can-we-buy-only-gsa-approved-products-and-services'
  - text: What Other GSA Resources Can Help Us?
    href: '#what-other-gsa-resources-can-help-us'
---

{% include alert-info.html content="A good starting point that will help you understand Physical Access Control System procurements is GSA’s <a href=\"https://www.gsa.gov/cdnstatic/General_Supplies__Services/Guide_to_PACS_v2%2006-12-2018.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">PACS Customer Ordering Guide. </a>" %}

This page provides a sample PACS Procurement Checklist. You can reuse or tailor this checklist according to your agency’s practices. The checklist highlights common procurement activities as they relate to the following roles:
- Information Technology or Physical Security Engineers (ENG)
- Project Managers (PM)
- Procurement Officers (PO)
- Chief Information Officers (CIO)
- Chief Security Officers (CSO)

Agency staff are encouraged to participate in steps where their roles are listed in bold underlined font.

## PACS Procurement Checklist 

<table>
 <col width="400">
 <col width="200">

 <tr>
  <th colspan="2" style="background-color:#112e51;font-size:20px;"><b>PACS Procurement Checklist</b></th>
  <th style="background-color:#112e51;font-size:20px;" colspan="5"><b>Recommended Participants</b></th>
 </tr>

 <tr>
  <td colspan="2" class="what"><b>1. Identify agency’s need to procure or upgrade a PACS.</b></td>
  <td>ENG</td>
  <td><b><u>PM</u></b></td>
  <td><b><u>PO</u></b></td>
  <td><b><u>CIO</u></b></td>
  <td><b><u>CSO</u></b></td>
 </tr>

<tr>
  <td colspan="7">
  <ul>
	<li>Determine whether your agency has a similar effort underway or other projects that could impact the procurement.</li>
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
	<li>Identify what standards and requirements need to be addressed (for example, HSPD-12, FIPS 201-2, NIST SP 800-116, Revision 1).</li>
	<li>Estimate project duration.</li>
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
	<li>Involve stakeholders from agency Information Technology (IT) teams (for example, architect/engineers, network engineers, security, infrastructure services, directory services, web services).</li>
	<li>Involve agency facility and personnel support organizations (for example, physical security, building operations, Human Resources).</li>
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
	<li>Document the project’s phases and required tasks. Samples can include:
		<ul>
			<li>Pre-project planning</li>
			<li>Site security assessment(s)</li>
			<li>Develop Statement of Work (SOW)</li>
			<li>Develop PACS Requirements Document (or Specification)</li>
			<li>Develop and release Request for Information (RFI)</li>
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
	<li>Use automated tools or agency software to create a project schedule (that is, project tasks, dependencies, durations, and resources).</li>
	<li>Share the project schedule with stakeholders to ensure its accuracy and completeness.</li>
  </ul>
  </td>
</tr>

 <tr>
  <td colspan="2"><b>6. Conduct a Facility Security Level (FSL) assessment of project-related agency sites and determine Personal Identity Verification (PIV) authentication mechanisms for each site.</b></td>
  <td><b><u>ENG</u></b></td>
  <td><b><u>PM</u></b></td>
  <td>PO</td>
  <td><b><u>CIO</u></b></td>
  <td><b><u>CSO</u></b></td>
 </tr>

<tr>
  <td colspan="7">
  <ul>
	<li>For details, see <a href="{{site.baseurl}}/pacs/alignfslandauth/" target="_blank">Aligning FSL and Authentication Mechanism</a>.</li>
	<li>The FSL assessment and chosen PIV authentication mechanisms will form the basis for the PACS requirements document/specification, as well as affect the SOW and project costs.</li>
	<li>The sample survey questions below will help you assess the FSL of each facility and select the right PIV authentication mechanisms:
	<ul>
		<li>Who will use a facility’s PACS? Include all possible users.</li>
		<li>What credentials do the facility’s users and visitors have?</li>
		<li>What facility access risks exist?</li>
		<li>How can the facility mitigate these risks?</li>
		<li>What PACS installations does the facility need?</li>
		<li>What support systems would be integrated into the facility’s PACS (for example, intrusion detection, video surveillance, emergency notification, elevator control)?</li>
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
	<li>When documenting PACS requirements, it’s critical to solicit input from your stakeholders.</li>
	<li>Organize requirements into clear categories (for example, technical, performance, and operational) to help stakeholder’s give targeted feedback.</li>
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
	<li>Create and issue an RFI to vendors that requests specific qualifications and capabilities against PACS requirements.</li>
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
	<li>You can reuse the <a href="https://www.gsa.gov/cdnstatic/General_Supplies__Services/Guide_to_PACS_v2%2006-12-2018.pdf" target="_blank" rel="noopener noreferrer">GSA PACS Customer Ordering Guide’s Sample Statement of Work</a>, page 17. For help creating an RFP, see <a href="{{site.baseurl}}/docs/pacs-pki-epacs-procurement.pdf" target="_blank">Enabling Strong Authentication with PIV Cards: PKI in PACS Recommended Procurement Language for RFPs Version 1.1</a>. For help with Requests for Quotations (RFQs), see <a href="https://www.ebuy.gsa.gov/ebuy/" target="_blank" rel="noopener noreferrer"> GSA’s eBuy RFQ Online Tool</a>.</li>
  </ul>
  </td>
</tr>

 <tr>
  <td colspan="2"><b>11. Solicit bids, evaluate, and award integrator contract.</b></td>
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
		<li>Identify how well proposed integrator solutions meet your needs.</li>
		<li>Document the award rationale and announce contract award decision.</li>
		<li>Upon request, provide a brief explanation of the award rationale to unsuccessful bidder(s).</li>
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
	<li>After contract award, your integrator will help you:
	<ul>
	<li>Choose the best PACS topology (that is, an end-to-end solution of hardware, software, a Certificate Validation System, and PIV credential readers) listed on the <a href="https://www.idmanagement.gov/approved-products-list-pacs-products/" target="_blank" rel="noopener noreferrer">GSA PACS APL</a> for the PIV authentication mechanisms selected for your facility.</li>
	<li>Buy the products and additional services you need by using the <a href="https://www.gsa.gov/technology/technology-purchasing-programs/mas-information-technology" target="_blank" rel="noopener noreferrer">GSA Multiple Award Schedule (MAS)</a>. Your chosen integrator will help your agency choose the right PACS products and services, according to your agency’s preferred GSA purchasing vehicle(s).</li>
	</ul>
	</li>
	<li>Want to learn more about GSA Schedules? Training is available: <a href="https://www.gsa.gov/buying-selling/products-services/security-protection/training-for-security-protection" target="_blank" rel="noopener noreferrer">On-demand GSA Schedules Training</a>. For help with GSA Schedules, email the GSA National Customer Service Center at NCSCcustomer.service@gsa.gov or call 1-800-488-3111.</li>
  </ul>
  </td>
</tr>
 
</table>


{% include alert-info.html content="If at any time you have PACS procurement questions, contact the GSA IT Customer Service at ITCSC at GSA dot Gov or call 1-855-482-4348." %}



## Why Can We Buy Only GSA-Approved Products and Services?
[GSA’s FIPS 201 Evaluation Program](https://www.idmanagement.gov/fips201/){:target="_blank"}{:rel="noopener noreferrer"} tests all GSA-listed PACS products, topologies, and services for compliance with FIPS 201-2 requirements. Purchasing products listed on the GSA APL ensures product compliance with FIPS 201-2, secure operations, and interoperability.   

## What Other GSA Resources Can Help Us?
- [GSA Schedules - General Information](https://www.gsa.gov/buying-selling/purchasing-programs/gsa-schedules/schedule-buyers){:target="_blank"}{:rel="noopener noreferrer"}
- [GSA Schedules - Tools and Resources](https://www.gsa.gov/buying-selling/purchasing-programs/gsa-schedules/we-are-here-to-help){:target="_blank"}{:rel="noopener noreferrer"}
- [GSA Multiple Awards Schedule (MAS)](https://www.gsa.gov/technology/technology-purchasing-programs/mas-information-technology){:target="_blank"}{:rel="noopener noreferrer"}
- [GSA Multiple Awards Schedule (MAS) Categories](https://www.gsa.gov/buying-selling/purchasing-programs/gsa-schedules/gsa-schedule-offerings/mas-categories){:target="_blank"}{:rel="noopener noreferrer"}
- [GSA Multiple Awards Schedule (MAS) News and Updates](https://www.gsa.gov/buying-selling/purchasing-programs/gsa-schedules/schedules-news-and-updates){:target="_blank"}{:rel="noopener noreferrer"}
- [GSA’s eBuy](https://www.ebuy.gsa.gov/ebuy/){:target="_blank"}{:rel="noopener noreferrer"} RFQ online system enables you to post requirements, obtain quotes, and issue orders electronically. 
- Approved [Certified System Engineer ICAM PACS (CSEIP) List]( https://www.securetechalliance.org/activities-cseip-registry/){:target="_blank"}{:rel="noopener noreferrer"}.  Agencies must use FIPS 201-approved integrators and other contractors. The "lead designer" for FIPS 201-approved integrators must possess a Certified System Engineer ICAM PACS (CSEIP) certification or be certified by another federally recognized certification program.    

The next section, *[Training](../train/)*, outlines PACS personnel roles and responsibilities and lists relevant training and certification programs.

