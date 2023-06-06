---
layout: page
collection: arch
title: PACS Deployment Models
permalink: /arch/deployment/
sticky_sidenav: true
sidenav: arch

subnav:
  - text: Standalone PACS
    href: '#standalone-pacs'
  - text: Enterprise PACS
    href: '#enterprise-pacs'
  - text: Assess Facility Security Level 
    href: '#assess-facility-security-level'
  - text: Categorize Security Areas
    href: '#categorize-security-areas'
  - text: Determine Authentication Factors
    href: '#determine-authentication-factors'
  - text: Select Authentication Mechanisms 
    href: '#select-authentication-mechanisms'
#   - text: 
#     href: '#'
---

This page will give you a basic understanding of Physical Access Control System (PACS) deployment models. 

## Standalone PACS

A standalone PACS is a local system that controls physical access to a facility or specific areas within it—for example, a Sensitive Compartmented Information Facility (SCIF). Standalone PACSs are facility-centric, and consequently these systems typically do not connect to enterprise networks. While this deployment model tends to be the most common and uncomplicated method of managing access to controlled areas, it has several challenges.

### Standalone PACS' Operational Challenges

Agencies that use standalone PACSs have encountered operational challenges: 
* Sites must independently control physical access.
* Agencies see delays with credential transfers or terminations.
* Employees and contractors must re-enroll their credentials for all federal work sites that they visit.
* Departments inconsistently apply enterprise-wide security policies.
* Agencies experience reduced situational awareness (for example, logs cannot be correlated across the enterprise).
* Agencies with many standalone PACSs see increased human error, such as data entry errors.

{% include alert-success.html content="Can agencies centrally control physical access for most, or all, of their sites?  Yes. The answer is to implement an Enterprise Physical Access Control System." %}

## Enterprise PACS

An Enterprise PACS (E-PACS) extends the concept of a standalone PACS to act as a unified, enterprise-wide system that controls physical access at most (or all) sites that belong to an agency. E-PACSs address the operational challenges of standalone PACSs and improve system management, scalability, monitoring, and performance. 

E-PACSs rely on the same components as standalone PACSs. However, an essential architectural distinction is that an E-PACS connects to an agency's enterprise network, whereas a PACS typically does not.

{% include alert-info.html content="Some agencies need standalone PACSs for their unique sites and missions, but most agencies could benefit from transitioning to an E-PACS." %}

### Would an Enterprise PACS Work for Our Agency?

Here are some key E-PACS advantages to consider:

* One enterprise-wide system controls physical access for many (or all) agency sites.
* One employee and contractor enrollment system that connects multiple enrollment locations.
* One credential registration and provisioning point.
* One enterprise-wide system for administrators to modify or terminate access privileges.
* One enterprise-wide system that regularly polls for [Certificate Revocation List]({{site.baseurl}}/arch/pivdetails/#certificate-revocation){:target="_blank"} (CRL) updates and maintains revocation data.
* Reduced costs for system management, such as patching, server system administration, and software updates.
* Reduced costs for reporting, such as Federal Information Security Modernization Act [FISMA] reporting.
* Reduced costs for:
    * Server hardware
    * System security assessment and accreditation

	
The next section, [Aligning Facility Security Level (FSL) and Authentication]({{site.baseurl}}/arch/pacsguide/#assess-facility-security-level), explains the processes needed to prepare for a PACS deployment and offers more detail related to the FIPS 201-approved PIV authentication mechanisms.


<!-- from https://playbooks.idmanagement.gov/pacs/alignfslandauth/ -->

Federal agencies rely on Physical Access Control Systems (PACSs) and Personal Identity Verification (PIV) credentials to confirm that an employee, contractor, or visitor _is_ or _is not_ authorized to access a site and its critical assets, such as systems, information, and people. 

To protect your agency's critical assets, you must assess each site's risk level (called *Facility Security Level*) and decide what level of PIV credential authentication is required (called *authentication mechanism*). 

The FSL and authentication checklist below will help you:

- [Assess Facility Security Level](#assess-facility-security-level)
- [Categorize Security Areas](#categorize-security-areas)
- [Determine Authentication Factors](#determine-authentication-factors)
- [Select Authentication Mechanisms](#select-authentication-mechanisms)

Additional guidance regarding aligning FSL to PACS authentication factors can be found in the [Security Control Overlay for Electronic Physical Access Control Systems (ePACS)]({{site.baseurl}}/docs/pacs-800-53-overlay.pdf){:target="_blank"}{:rel="noopener noreferrer"} . This overlay provides additional guidance on configuring and securing PACS systems in accordance with relevant guidance and in support of the NIST Risk Management Framework (RMF).

## Assess Facility Security Level 

{% include alert-info.html content="These federal standards provide guidance for assessing FSL, including how to categorize site risks:<br> - <a class=\"usa-link usa-link--external\" href=\"https://www.cisa.gov/sites/default/files/publications/The%20Risk%20Management%20Process%20-%202021%20Edition_2.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">The Risk Management Process for Federal Facilities: An Interagency Security Committee Standard </a> <br> - <a class=\"usa-link usa-link--external\" href=\"https://csrc.nist.gov/publications/detail/sp/800-116/rev-1/final\" target=\"_blank\" rel=\"noopener noreferrer\">NIST SP 800-116, Revision 1, Guidelines for the Use of PIV Credentials in Facility Access. </a>" %}

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
- [FIPS 199](https://csrc.nist.gov/publications/detail/fips/199/final){:target="_blank"}{:rel="noopener noreferrer"} defines three (3) impact levels on organizations and people (that is, a loss of confidentiality, integrity, or availability): 
   
|Impact Level | Description |
|:---------|:------------|
| *Low*| The loss of confidentiality, integrity, or availability could have a **limited** adverse effect on organizational operations, organizational assets, or individuals.|
| *Moderate* | The loss of confidentiality, integrity, or availability could have a **serious** adverse effect on organizational operations, organizational assets, or individuals.| 
|*High* | The loss of confidentiality, integrity, or availability could have a **severe or catastrophic** adverse effect on organizational operations, organizational assets, or individuals. |

![]({{site.baseurl}}/assets/img/check-box.png){:style="float:center"} &nbsp;**Create a site map of categorized assets**
- This map will help you determine each security area's minimum security level.


{% include alert-info.html content="As an alternative to assessing a site's risk, you can select a pre-determined FSL as described in <a class=\"usa-link usa-link--external\"  href=\"https://www.cisa.gov/sites/default/files/publications/The%20Risk%20Management%20Process%20-%202021%20Edition_2.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">The Risk Management Process for Federal Facilities: An Interagency Security Committee Standard</a>." %}


## Categorize Security Areas

{% include alert-info.html content="Agencies may use different terms for their security areas; however, each agency should establish its criteria for authentication mechanisms, according to <a class=\"usa-link usa-link--external\"  href=\"https://csrc.nist.gov/publications/detail/sp/800-116/rev-1/final\" target=\"_blank\" rel=\"noopener noreferrer\">NIST SP 800-116, Revision 1, Guidelines for the Use of PIV Credentials in Facility Access</a>." %}

![]({{site.baseurl}}/assets/img/check-box.png){:style="float:center"} &nbsp;**Categorize security areas**
- Once you've inventoried and mapped assets by risk and impact level, it's time to categorize security areas.
- NIST SP 800-116, Revision 1, defines three (3) security area categories: 

|Category | Description|
|:---------|:------------|
| *Exclusion*| An area where uncontrolled movement would permit direct access to a security asset, such as a Sensitive Compartmented Information Facility (SCIF).|
| *Limited* | An area near a secure asset.  Uncontrolled movement within a limited area may permit access to an asset.  Escorts and other restrictions can prevent access.| 
|*Controlled* | An area near or surrounding a Limited or Exclusion area, such as a facility lobby. A Controlled area provides administrative control, safety, or a buffer zone for embedded Limited or Exclusion areas.  Movement of authorized personnel within this area usually is not controlled because this area doesn't provide immediate access to secure assets.  |

- Assign the same risk level as the highest risk asset within the area. 
    - Example: If three (3) assets exist within a security area: one Low-risk, one Moderate-risk, and one High-risk, you must categorize the security area as **High-risk**.  Alternatively, the area may be split into three (3) security areas that each have a different risk level.  


## Determine Authentication Factors

{% include alert-info.html content="<a class=\"usa-link usa-link--external\"  href=\"https://csrc.nist.gov/publications/detail/sp/800-116/rev-1/final\" target=\"_blank\" rel=\"noopener noreferrer\">NIST SP 800-116, Revision 1, Guidelines for the Use of PIV Credentials in Facility Access</a> recommends the following method to determine authentication factors for Exclusion, Limited and Controlled security areas." %}

![]({{site.baseurl}}/assets/img/check-box.png){:style="float:center"} &nbsp;**Determine authentication factors required for security area categories**
- Once you have categorized all security area categories, you will select the minimum number of authentication factors (1, 2, or 3) needed to access and safeguard the facility:

| Category| Minimum Number of Factors | Description|
|:---------|:--------------------------:|:------------|
|*Exclusion*| 3| Exclusion areas require all three authentication factors: Something you have, such as a PIV credential; something you know, such as the PIV credential PIN; and something you have on or in your body, such as a fingerprint or iris scan.|
|*Limited* | 2 | Limited areas require 2 of the 3 authentication factors, such as a PIV credential and PIN or a PIV credential and fingerprint or iris scan.|
|*Controlled* | 1 | Controlled areas require only one authentication factor, such as a PIV credential.|  
  

## Select Authentication Mechanisms 

{% include alert-info.html content="<a class=\"usa-link usa-link--external\" href=\"https://csrc.nist.gov/publications/detail/fips/201/3/final\" target=\"_blank\" rel=\"noopener noreferrer\">FIPS 201-3</a>, Personal Identity Verification (PIV) of Federal Employees and Contractors, defines authentication mechanisms at four assurance levels (Little or No, Some, High, and Very High)." %}

![]({{site.baseurl}}/assets/img/check-box.png){:style="float:center"} &nbsp;**Select authentication mechanism for each security area**
- Based on the security area categories and required authentication factors for each security area, choose the PIV credential authentication mechanism(s) that enforce these factors at each access point. 
- FIPS 201-2 specifies these authentication mechanisms for PIV credentials:
    - PKI authentication using the PIV Authentication Certificate [(PKI-AUTH)]({{site.baseurl}}/university/glossary/#pki-auth){:target="_blank"}{:rel="noopener noreferrer"} 
    - PKI authentication using the Card Authentication Certificate [(PKI-CAK)]({{site.baseurl}}/university/glossary/#pki-cak){:target="_blank"}{:rel="noopener noreferrer"} 
    - Authentication using the Symmetric Card Authentication Key [(SYM-CAK)]({{site.baseurl}}/university/glossary/#sym-cak){:target="_blank"}{:rel="noopener noreferrer"} 
    - Unattended authentication using off-card biometric comparisons [(BIO)]({{site.baseurl}}/university/glossary/#bio){:target="_blank"}{:rel="noopener noreferrer"} 
    - Attended authentication using off-card biometric comparisons [(BIO-A)]({{site.baseurl}}/university/glossary/#bio-a){:target="_blank"}{:rel="noopener noreferrer"} 
    - Either attended or unattended authentication using off-card biometric comparisons [(BIO(-A))]({{site.baseurl}}/pacs/glossary/#bio-a){:target="_blank"}{:rel="noopener noreferrer"} 
    - Authentication using on-card biometric comparisons [(OCC-AUTH)]({{site.baseurl}}/university/glossary/#occ-auth){:target="_blank"}{:rel="noopener noreferrer"} 


The table below gives the possible authentication mechanisms for the three (3) security area categories defined by NIST SP 800-116, Revision 1:

| Category  | Minimum<br>Number of<br>Factors | Acceptable Factors | Authentication<br>Mechanism:<br>Contact Interface  |  Authentication Mechanism:<br>Contactless Interface |
| :-------- | :------: | :----- | :-----  | :-----     |
| *Exclusion*  | 3 | Something you have **AND**<br>Something you know **AND**<br>Something you have on or in your body | PKI-AUTH + BIO  | N/A |
| *Limited*   | 2 |Something you have *AND*<br>Something you know, **OR**<br>Something you have *AND*<br>Something you have on or in your body, **OR**<br>Something you know *AND*<br>Something you have on or in your body  | PKI-AUTH (with PIN or OCC) or<br>OCC-AUTH  |  OCC-AUTH |
| *Controlled*   | 1 | Something you have **OR**<br>Something you have on or in your body  |  PKI-CAK  | PKI-CAK<br> SYM-CAK   |

**Note:** Some authentication mechanisms defined by NIST SP 800-116, Revision 1 might not be available on all user-population cards (for example, on-card biometric comparison or PKI-CAK). 

{% include alert-info.html content="When using PKI-CAK and PKI-AUTH as authentication mechanisms, certificates must be validated. Verify the certificate against a Certificate Revocation List (CRL) or Online Certificate Status Protocol (OCSP) server response. Also, verify that the certificate chains to the Federal Common Policy root certification authority (CA)." %}

Visit the [PIV Guide]({{site.baseurl}}/arch/pivdetails/#trust) to learn more about certificate trust.

The next section, [Procurements]({{site.baseurl}}/partners/procure/), describes the processes and resources needed for a PACS procurement.
