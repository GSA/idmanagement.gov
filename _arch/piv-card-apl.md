---
layout: page
collection: arch
title: PIV Card APL
permalink: /approved-products-list-piv/
sidenav: arch
sticky_sidenav: true

subnav:
  - text: How To Purchase 
    href: '#how-to-purchase'
  - text: Approved PIV Cards
    href: '#approved-piv-cards'
  - text: Legacy PIV Cards
    href: '#legacy-piv-cards'
#   - text: 
#     href: '#'
---

The Personal Identity Verification (PIV) cards listed below are approved for FICAM implementation under the FIPS 201 Evaluation Program. These are blank PIV cards available for purchase. A PIV service provider will personalize these blank cards for federal agencies and contractors. PIV service providers are required to use PIV cardstock from the Approved Products List (APL). 

If you do not see a card below, it's possible it's on the [Removed Product List](/removed-products-list/).

Please note:

- Tri-Interface cards are not approved for federal government PIV or CAC card use. Agencies should not procure them. They are listed on the APL for industry-only acquisition.
- Manufacturers may call Tri-Interface cards by different names (for example, Dual Hybrid). The prohibited feature of Tri-Interface cards is a prox interface (a 125 kHz antenna).
- Agencies should procure only cards validated by the NIST Personal Identity Verification Program (NPIVP).

## How To Purchase

Visit the [Buy Page]({{site.baseurl}}/vendors/) to view FICAM products, services, and purchasing guidance.

## Approved PIV Cards

<table class="usa-table-borderless">
  <thead class="usa-sr">
    <tr>
      <th id="apl-table-heading-number" scope="col">APL Number</th>
      <th id="apl-table-heading-name" scope="col">Product Name</th>
      <th id="apl-table-heading-date" scope="col">Valid Date</th>
    </tr>    
  </thead>
  <tbody>
    {% for apl in site.data.fips201apl %}
      <tr class="apl-table-row" data-category="{{ apl.category }}">
          <td headers="apl-table-heading-{{ category | slugify }} apl-table-heading-description">{{ apl.aplnumber }}</td>
         <td headers="apl-table-heading-{{ category | slugify }} apl-table-heading-name"><a href="{{ apl.url | prepend: site.baseurl }}" target="_blank" rel="noopener noreferrer">{{ apl.productname }}</a></td>
        <td headers="apl-table-heading-{{ category | slugify }} apl-table-heading-date">{{ apl.validdate }}</td>
       </tr>
    {% endfor %} <!--apl-->
  </tbody>
</table>

## Legacy PIV Cards

Legacy PIV cards are no longer approved for purchase by the FIPS 201 Evaluation Program. Any cardstock designated as “legacy” is placed on this legacy list and on the [Removed Product List](/removed-products-list/). However, some federal agencies still need to procure the legacy cardstock to use while existing systems are being upgraded. Agencies must stop using cardstock on the legacy list by **June 30, 2024**.

Legacy PIV cards include the following:

- Gemalto IDCore 3020 v1, 128k dual-interface with ActivIdentity Digital Identity Applet Suite – APL# 1244
- Giesecke & Devrient StarSign(R) SmartCafe(R) Expert 144K with PIV Applet – APL# 525
- IDEMIA ID-One (Type A) Large D – APL# 587

Agencies procuring cardstock from the legacy list assume all risks associated with its use from now until the NIST-mandated deadline of June 30, 2024.

If your agency needs to purchase cardstock from this legacy list, you must submit an Assumption of Risk Memorandum (memo) from the agency Chief Information Officer(s) to the General Services Administration (GSA). The memo must contain the following information:

- Acknowledgement of the assumption of all associated security risks;
- Acknowledgement of non-compliance with NIST standards;
- A transition plan specifying major milestones to achieve full compliance by the 2024 deadline; and
- Implications resulting from non-compliance with federal policy related to this purchase.

Submit the memo to [GSA’s Associate Administrator for Government-wide Policy (OGP)](https://www.gsa.gov/about-us/organization/gsa-leadership-directory){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} (regardless of the acquisition vehicle used). If using [GSA Multiple Award Schedule]({{site.baseurl}}/acquisition-professionals/#gsa-multiple-award-schedule) as the acquisition vehicle, also submit a copy of the memo to the Commissioner of GSA’s Federal Acquisition Service.

Note that GSA will provide the Office of the Federal Chief Information Officer (OFCIO) at the Office of Management and Budget (OMB) with copies of all memos submitted.


