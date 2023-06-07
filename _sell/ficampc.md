---
layout: page
title: FICAM Product Criteria
permalink: sell/ficampc/
collection: sell
sticky_sidenav: true
sidenav: sell

version: 1.5
pubDate1: April 2023
pubDate2: 04/2023

subnav:
  - text: Objective
    href: '#objective'
  - text: Summary
    href: '#summary'
  - text: Scope
    href: '#scope'
  - text: Process overview
    href: '#process-overview'
  - text: Product list criteria
    href: '#product-criteria'
  - text: Product criteria questionnaire
    href: '#product-criteria-questionnaire'
  - text: Conclusion
    href: '#conclusion'

---

Version {{page.version}}<br>
{{page.pubDate1}} 

<img src="{{site.baseurl}}/assets/img/logo-gsa.png" width="64" height='64' align="left" alt="U.S. General Services Administration Logo"><br><br><br>


| Version Number | Date | Change Description |
| :----------: | :-------: | -------- |
| {{page.version}} | {{page.pubDate2}} | Initial draft |

# Objective

GSA Office of Government-wide Policy Office of Technology Policy Identity Assurance and Trusted Access Division established a product criteria and vetting process to accelerate federal adoption of phishing-resistant authenticators across federal agencies. This process leverages a combination of independent certification bodies, third party audit organization, and testing facilities aligned with the NIST 800-63 digital identity guidelines to ensure interoperability, security, and resiliency in support of federal mandates to move toward using passwordless authentication.

# Summary

Office of Management and Budget (OMB) Memorandum [M-22-09 Federal Zero Trust Strategy](https://zerotrust.cyber.gov/federal-zero-trust-strategy/), encourages federal agencies to pursue greater use of phishing resistant multi-factor authenticators as they modernize their agency-managed identity systems.

This includes:

- Identifying methods to leverage passwordless authenticators.
- Replacing memorized secrets with a phishing-resistant alternative such as FIDO2/WebAuthn.

Enterprise-wide implementation should support centralized management of these authentication methods connected to current identity management systems. Agencies are encouraged to procure phishing-resistant authenticators that meet third-party standards aligned with NIST 800-63 guidelines relating to digital identity security, interoperability and resiliency.

# Scope

The scope of this product list is to leverage third-party certification and testing organizations to identify phishing-resistant authenticators that meet NIST 800-63 standards. The criteria is scoped to work as an accelerator to guide federal agencies in adopting phishing-resistant authenticators as they modernize their identity management systems.

# Process overview

## 3rd party organization

The 3rd party recognition process is designed to achieve a trust in a 3rd party process that the government can leverage without the government conducting any additional testing. This section outlines the type of organizations and the steps toward GSA recognizing a 3rd party organization that an agency can leverage for procuring and implementing a variety of phishing-resistant authenticators. Agency feedback have identified two primary types of 3rd party organizations.

1. Testing labs - Test products against either organizationally defined or a government standard.
2. Assurance programs - Review audit reports using conformance criteria developed by an organization or a government standard.

The type of organization will determine how it is recognized. There are three criteria reviewed by GSA to recognize a 3rd party organization. All criteria are documented in a trust artifact and posted with the [organizations recognition status]({{site.baseurl}}/buy/product-criteria#recognized-3rd-party-organizations).

1. Process methodology review - The organization must have a formal and documented process for how it conducts testing or operates its assurance program. GSA will review the process documentation and may ask to be invited into a testing or vendor assurance review session. This step will the integrity of an organizations process to be trusted by a federal government agency.
2. Testing or assurance criteria mapping review - If an organization uses an organizationally defined standard, it is mapped to 800-63 conformance criteria with noted gaps and this mapping criteria is available as a recognition artifact.
3. Organization risk assessment -- Review the corporate status and risk indicators for the organization to operate independently.

Organizations will sign an agreement with GSA, recognizing their roles and responsibilities, conformance schema, and testing processes, as well as any ongoing participation or interaction with the organization.

## Vendor products

The GSA IATAD will use existing resources to verify vendor submissions. The anticipated effort is low based on an initial vendor market review.

1. **Application** – A vendor completes the [product criteria questionnaire](#product-criteria-questionnaire) and submits to ICAM at gsa.gov. This questionnaire is attached to a [vendor agreement]({{site.baseurl}}/docs/ficampc-vendor-agreement.docx) with GSA outlining roles and responsibilities for product listing, however, third-party criteria will be used for information vetting.

2. **Processing** – Applications are processed on the first of every month and monthly updates will be provided. The schedule is adjusted based on volume of submissions or other factors.

3. **Review process** – The application is assigned a product list number for tracking, and the application is verified that it contains all necessary information and links to validate a vendor’s compliance with an external certification body.

4. **Decision** – If all information is verified and validated, the vendor and product are listed on the product criteria list available at [FICAM Product Criteria List]({{site.baseurl}}/buy/product-criteria/).

5. **Maintenance** – Vendors are required to provide timely updates with changes within their product certification. GSA IATAD team reviews and validates product submissions on a quarterly basis.

6. **Removal** – If a vendor fails to provide accurate information or an issue is found that brings into question the security and resiliency, the product is moved to the [Removed Product List](https://www.idmanagement.gov/buy/removed-products-list/){:target="_blank"}{:rel="noopener noreferrer"} and the community is notified of its removal through idmanagement.gov, ICAMSC, and Digital identity Community of Practice, as well as federal acquisition channels.

## Product criteria

The questionnaire is intended to provide a consistent and standard way to receive feedback. These questions are to be used for initial vetting of vendor products to achieve interoperability, security, and reliability assurances. The questionnaire collects input on the security compliance status of proposed products based on federal guidelines such as external body conformance testing and certification to NIST 800-63, FIPS 140 certification, and supply chain security. Vendors are encouraged to complete the questionnaire to the maximum extent possible and provide artifacts to validate their inputs.

Once approved, the product will be listed on [FICAM Product Criteria List]({{site.baseurl}}/buy/product-criteria/) and shared through federal security and acquisition communities.

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

# Conclusion

Phishing-resistant product vetting criteria will help accelerate federal government adoption and support OMB Memo 22-09 objectives. This criteria intent is to leverage third-party certification bodies and testing processes that conform or align to NIST 800–63-3 standards.
