---
layout: page
title: FICAM Product Criteria List
permalink: /ficampcl/
collection: partners
sticky_sidenav: true
sidenav: buy

subnav:
    - text: Objective
      href: '#objective'
    - text: Summary
      href: '#summary'
    - text: Scope
      href: '#scope'
    - text: Process overview
      href: '#process-overview'
    - text: Product criteria list
      href: '#product-criteria-list'
    - text: Recognized 3rd Party Organizations
      href: '#recognized-3rd-party-organizations'
    - text: Category - Phishing Resistant Authenticators
      href: '#phishing-resistant-authenticators'

---

<img src="{{site.baseurl}}/assets/img/logo-gsa.png" width="64" height='64' align="left" alt="U.S. General Services Administration Logo"><br><br><br>


| Version Number | Date | Change Description |
| :----------: | :-------: | -------- |
| 1.0 | June 2023 | Initial draft |

# Objective

GSA Office of Government-wide Policy Office of Technology Policy Identity Assurance and Trusted Access Division established a product criteria and vetting process to accelerate federal adoption of phishing-resistant authenticators across federal agencies. This process leverages a combination of independent certification bodies, third-party audit organizations, and testing facilities aligned with the NIST 800-63 digital identity guidelines to ensure interoperability, security, and resiliency in support of federal mandates to move toward using passwordless authentication.

# Summary

Office of Management and Budget (OMB) Memorandum [M-22-09 Federal Zero Trust Strategy](https://zerotrust.cyber.gov/federal-zero-trust-strategy/), encourages federal agencies to pursue greater use of phishing-resistant multi-factor authenticators as they modernize their agency-managed identity systems.

This includes:

- Identifying methods to leverage passwordless authenticators.
- Replacing memorized secrets with a phishing-resistant alternative such as FIDO2/WebAuthn.

Enterprise-wide implementation should support centralized management of these authentication methods connected to current identity management systems. Agencies are encouraged to procure phishing-resistant authenticators that meet third-party standards aligned with NIST 800-63 guidelines relating to digital identity security, interoperability and resiliency.

# Scope

The scope of this product list is to leverage third-party certification and testing organizations to identify phishing-resistant authenticators that meet NIST 800-63 standards. The criteria is scoped to work as an accelerator to guide federal agencies in adopting phishing-resistant authenticators as they modernize their identity management systems.

# Process overview

## 3rd party organization recognization

The 3rd party recognition process is designed to achieve trust in a 3rd party process that the government can leverage without the government conducting any additional testing. This section outlines the type of organizations and the steps toward GSA recognizing a 3rd party organization that an agency can leverage for procuring and implementing a variety of phishing-resistant authenticators. Agency feedback have identified two primary types of 3rd party organizations.

1. Testing labs - Test products against either organizationally defined or a government standard.
2. Assurance programs - Review audit reports using conformance criteria developed by an organization or a government standard.

The type of organization will determine how it is recognized. GSA reviews three criteria to recognize a 3rd party organization. All criteria are documented in a trust artifact and posted with the [organizations recognition status](#recognized-3rd-party-organizations).

1. Process methodology review - The organization must have a formal and documented process for conducting testing or operating its assurance program. GSA will review the process documentation and may ask to be invited into a testing or vendor assurance review session. This step will ensure the integrity of an organization's process to be trusted by a federal government agency. An ISO 17060 conformity assessment body certification may fulfill this criteria element.
2. Testing or assurance criteria mapping review - If an organization uses an organizationally defined standard, it is mapped to 800-63 conformance criteria with noted gaps. This mapping criterion is available as a recognition artifact.
3. Organization risk assessment - Review the corporate status and risk indicators for the organization to operate independently.

Organizations will sign an agreement with GSA, recognizing their roles and responsibilities, conformance schema, testing processes, and any ongoing participation or interaction with the organization.

## Vendor products process

The GSA IATAD will use existing resources to verify vendor submissions. The anticipated effort is low based on an initial vendor market review.

1. **Application** – A vendor completes the [product criteria questionnaire](#product-criteria-questionnaire) and submits to ICAM at gsa.gov. This questionnaire is attached to a [vendor agreement]({{site.baseurl}}/docs/ficampc-vendor-agreement.docx) with GSA outlining roles and responsibilities for product listing. However, third-party criteria will be used for information vetting.

2. **Processing** – Applications are processed on the first of every month, and monthly updates will be provided. The schedule is adjusted based on the volume of submissions or other factors.

3. **Review process** – The application is assigned a product list number for tracking, and the application is verified that it contains all necessary information and links to validate a vendor’s compliance with an external certification body.

4. **Decision** – If all information is verified and validated, the vendor and product are listed on the product criteria list available at [FICAM Product Criteria List]({{site.baseurl}}/buy/product-criteria/).

5. **Maintenance** – Vendors must provide timely updates with changes within their product certification. GSA IATAD team reviews and validates product submissions quarterly.

6. **Removal** – If a vendor fails to provide accurate information or an issue is found that brings into question the security and resiliency, the product is moved to the [Removed Product List](https://www.idmanagement.gov/buy/removed-products-list/){:target="_blank"}{:rel="noopener noreferrer"} and the community is notified of its removal through idmanagement.gov, ICAMSC, and Digital identity Community of Practice, as well as federal acquisition channels.

# Product criteria list

The questionnaire is intended to provide a consistent and standard way to receive information. These questions will be used for initial vetting of vendor products to achieve interoperability, security, and reliability assurances. The questionnaire collects input on the security compliance status of proposed products based on federal guidelines such as external body conformance testing and certification to NIST 800-63, FIPS 140 certification, and supply chain security. Vendors are encouraged to complete the questionnaire to the maximum extent possible and provide artifacts to validate their inputs.

## Product criteria questionnaire

Vendor name:<br>
Product name:<br>
Date:<br>

| # | **Question** | **Answer** | **Link to Evidence** |
| :--: | :------ | --------- | ------------- |
|1|Which external certification body has certified or assessed your product to a NIST 800-63-3 assurance level? Provide certification documentation.| | |
|2|Which FIPS 140 certification level(s) applies to your product?| | |
|3|Is the product [TAA compliant](https://hallways.cap.gsa.gov/system/files/Commercial%20Software%20and%20the%20Trade%20Agreements%20Act.pdf){:target="_blank"}{:rel="noopener noreferrer"}?| | |
|4|What artifacts support supply chain security and software bill of materials measures?| | |
|5|Does the product have a vulnerability management cycle?| | |
|6|What methods are used for product security and interoperability testing?| | |
|7|How often are security and interoperability testing conducted?| | |
|8|What product implementation documentation applies? Provide links for evidence.| | |
|9|How does your product map to a [FICAM practice area]({{site.baseurl}}/arch/services/){:target="_blank"}{:rel="noopener noreferrer"} or CDM architecture?| | |
|10|Does this product or vendor have other certifications recognized by the US Government?| | |

## Organization and vendor status

Once an organization or vendor applies, they will be listed as in process on the [FICAM Product Criteria List]({{site.baseurl}}/buy/product-criteria/). There are four primary status types.

1. **In process** - The entity applied, and it is in review.
2. **Provisionally approved** - The application package is complete, and all evidence is reviewed. There are a few non-critical, outstanding items under review.
3. **Approved** - All information is validated and meets the 3rd party conformance requirements and FICAM product criteria. The artifact is posted on the Product Criteria List for review.
4. **Removed** - 

## Recognized 3rd Party Organizations

This is a list of recognized 3rd party organizations.

| Organization Name | Type of Recognition | 800-63 Alignment | Artifact | Status | 
| ------ | ------ | -------- | ------ | ------- |
| Fast IDentify Online (FIDO) Alliance | Testing Lab | AAL | Pending | Provisional Approval |
| Kantara Initiative | Assurance Program | IAL, AAL, FAL | Pending | Provisional Approval |

## Category - Phishing Resistant Authenticators

This is a list of vendors who meet the product criteria for phishing-resistant authenticators.

| Approval # | Vendor | Product Name | Form Factor |  FIDO Level | FIPS Level | PIV Module | USB | NFC | BT | AAGUID | Data Added |
| ------ | ------ | ------------ | :---------: | :---------: | :--------: | :--------: | :-: | :-: | :-: | :---: | :--------: |
| # | Test | Test | Security Key | FIDO2 / L1 | FIPS 140-3 / L2 | Yes | C | Y | Y | number | 01/01/2023|

## Removed products

This is a list of removed vendor products.

| Approval # | Vendor | Product Name | Removal Reason |
| ----- | ---- | ----- | ----- |
| # | Name | Product | Reason |


