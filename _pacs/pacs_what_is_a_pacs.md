---
layout: page
collection: pacs
title: What is a Physical Access Control System?
permalink: pacs/what-is-pacs/
sidenav: pacs

subnav:
    - text: PACS Components
      href: '#pacs-components'
    - text: Characteristics of a FICAM-Compliant PACS
      href: '#characteristics-of-a-fICAM-compliant-pacs'
---

A Physical Access Control System (PACS) grants access to employees and contractors who work at or visit a site by electronically authenticating their PIV credentials. Although PACSs are Information Technology systems, they must be designed, deployed, and operated in cooperation with Physical Security teams to successfully meet agency mission needs. 

## PACS Components

The following table defines common PACS components: 

| **Component** | **Description** |
|----------------|----------|
| **Access point** | Entrance point or physical barrier where an employee or contractor interacts with the PACS. Example access points include turnstiles, gates, and locking doors. |
| **PIV credential** | Federal employees and contractors use [Personal Identity Verification (PIV) credentials](https://piv.idmanagement.gov/elements/){:target="_blank"} to *physically access* federal facilities and *logically access* federal information systems. |
| **Credential reader and keypad** | The reader provides power to and reads data from a PIV credential. The reader also sends this data to a control panel to authenticate the PIV credential and request access authorization. Employees and contractors may need to enter a PIN into the keypad and add a biometric, depending on the facility's security classification and risk levels. | 
| **Biometric reader** | Captures biometric data (for example, fingerprint or iris scan) and verifies it against the PIV credential's biometric data. |
| **Control panel** | Receives the credential data sent by the reader and verifies its presence in the credential holder data repository. It then makes an access decision and transmits authorization data to the access control server and access point.  |
| **Access control server** | Grants authorization to the employee or contractor requesting access (for example, presenting a PIV credential to a reader). It also registers and enrolls employees and contractors; enrolls and validates credentials; and logs system events. |
| **Credential<br>holder data repository** | Contains employee and contractor data and physical access privileges. Control panels use this authoritative data to validate credential data. |
| **Auxiliary Systems** | Agencies may integrate the PACS with additional facility monitoring systems such as surveillance systems, fire alarm systems, and evacuation systems. |


{% include alert-info.html content="All agency-purchased PACS components must be FIPS 201-compliant and selected from <a href=\"https://www.idmanagement.gov/approved-products-list-pacs-products/\" target=\"_blank\">GSA's Approved Products List (APL) for PACS Products</a>. The products in this list have undergone vulnerability and interoperability testing through the FIPS 201 Evaluation Program. As an IT system, a PACS must still complete Certification and Accreditation and obtain an Authority to Operate from your agency before connecting to the network." %}


## Characteristics of a FICAM-Compliant PACS
In May 2019, the Office of Management and Budget (OMB) released memorandum [M-19-17](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf){:target="_blank"}, _Enabling Mission Delivery through Improved Identity, Credential, and Access
Management_. Related to PACS, M-19-17 rescinded memorandum [M-11-11](https://obamawhitehouse.archives.gov/sites/default/files/omb/memoranda/2011/m11-11.pdf){:target="_blank"}, _Continued Implementation of Homeland Security Presidential Directive (HSPD) 12 – Policy for a Common Identification Standard for Federal Employees and Contractors_. The updated guidance adds further specificity to require the use of PIV credentials for physical access to Federal facilities, implemented per _[The Risk Management Process for Federal Facilities: An Interagency Security Committee Standard](https://www.dhs.gov/isc-policies-standards-best-practices){:target="_blank"}_ and NIST [SP 800-116, Revision 1](https://csrc.nist.gov/publications/detail/sp/800-116/rev-1/final){:target="_blank"}, _A Recommendation for the Use of PIV Credentials in Physical Access Control Systems (PACS)_.

Characteristics of NIST SP 800-116, Revision 1, compliant systems include, but are not limited to:
- Use high-assurance credentials for electronic authentication of employees and contractors.
- Use non-deprecated authentication mechanisms, as defined by [FIPS 201-2](https://csrc.nist.gov/publications/detail/fips/201/2/final){:target="_blank"}.
- Validate the status and authenticity of credentials.
- Interoperate with PIV credentials issued by other agencies.
- Use components listed on the GSA FIPS 201 Approved Products List (APL).


The next section, *[PACS Deployment Models]({{site.baseurl}}/pacs/pacs/)*, describes common deployment models for PACS.
