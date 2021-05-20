---
layout: page
title: FIPS 201 Approved Products List - PIV Cards
permalink: sell/piv/
collection: sell
sticky_sidenav: true
sidenav: sell

subnav:
    - text: Approved PIV Cards
      href: '#piv-cards-approved'
    - text: Legacy PIV Cards
      href: '#piv-cards-legacy'
---

{% assign categories = "" | split: "" %}
{% for apl in site.data.fips201apl %}
  {% assign categoryName = apl.category | strip %}
  {% assign categories = categories | push: categoryName | uniq | sort %}
{% endfor %}
{% assign categories = categories | uniq | sort %}

The Personal Identity Verification (PIV) cards listed below have been approved for FICAM implementation under the FIPS 201 Evaluation Program. These are blank PIV cards available for purchase. A PIV service provider will personalize these blank cards for federal agencies and contractors. PIV service providers are required to use PIV cardstock from the Approved Products List (APL).
Please Note:

Tri-Interface cards are not approved for Federal Government PIV or CAC card use. Agencies should not procure them. They are listed on the APL for industry-only procurement.
Manufacturers may call Tri-Interface cards by different names (for example, Dual Hybrid). The prohibited feature of Tri-Interface cards is a prox interface (a 125 kHz antenna).
Agencies should procure only cards validated by the NIST Personal Identity Verification Program (NPIVP).

## PIV Cards – Approved

How To Purchase

### Approved PIV Cards

<div class="usa-width-one-fourth">
  <fieldset class="usa-fieldset-inputs guides-filter">
    <legend>Categories</legend>
    <ul class="usa-unstyled-list">
      {% for category in categories %}
      <li>
        <input class="guides-filter-category" id="category-{{ category | slugify }}" type="checkbox" name="categories" value="{{ category }}" checked>
        <label for="category-{{ category | slugify }}">{{ category }}</label>
      </li>
      {% endfor %}
    </ul>
  </fieldset>
</div>

<div class="usa-width-three-fourths">
  <table class="usa-table-borderless">
    <thead class="usa-sr-only">
      <tr>
        <th id="apl-table-heading-name" scope="col">Product Name</th>
        <th id="apl-table-heading-number" scope="col">APL Number</th>
        <th id="apl-table-heading-date" scope="col">Valid Date</th>
      </tr>
    </thead>
    <tbody>
      {% for category in categories %}
        <tr class="apl-table-category-heading" data-category="{{ category }}">
          <th colspan="3" class="apl-table-heading" id="apl-table-heading-{{ category | slugify }}"><b>{{ category }} Category</b></th>
        </tr>
        {% for apl in site.data.fips201apl %}
          {% if apl.category == category %}
            <tr class="apl-table-row" data-category="{{ apl.category }}">
              <td headers="apl-table-heading-{{ category | slugify }} apl-table-heading-name"><a href="{{ apl.url | prepend: site.baseurl }}">{{ apl.productname }}</a></td>
              <td headers="apl-table-heading-{{ category | slugify }} apl-table-heading-description">{{ apl.aplnumber }}</td>
              <td headers="apl-table-heading-{{ category | slugify }} apl-table-heading-date">{{ apl.validdate }}</td>
            </tr>
          {% endif %}
        {% endfor %} <!--apl-->
      {% endfor %}<!--category-->
    </tbody>
  </table>
</div>

## PIV Cards – Legacy

Legacy PIV cards are no longer approved for purchase by the FIPS 201 Evaluation Program, and any cardstock designated as “legacy” is placed on this legacy list. However, some federal agencies still need to procure the legacy cardstock to use while existing systems are being upgraded. Agencies must stop using cardstock on the legacy list by June 30, 2024.

### Legacy PIV Cards
- Gemalto IDCore 3020 v1, 128k dual-interface with ActivIdentity Digital Identity Applet Suite – APL# 1244
- Giesecke & Devrient StarSign(R) SmartCafe(R) Expert 144K with PIV Applet – APL# 525
- IDEMIA ID-One (Type A) Large D – APL# 587

Agencies procuring cardstock from the legacy list assume all risks associated with its use from now until the NIST-mandated deadline of June 30, 2024.

If your agency needs to purchase cardstock from this legacy list, you must submit an Assumption of Risk Memorandum (memo) from the agency Chief Information Officer(s) to the General Services Administration (GSA). The memo must contain the following information:

Acknowledgement of the assumption of all associated security risks;
Acknowledgement of non-compliance with NIST standards;
A transition plan specifying major milestones to achieve full compliance by the 2024 deadline; and
Implications resulting from non-compliance with federal policy related to this purchase.
Submit the memo to GSA’s Associate Administrator for Government-wide Policy (OGP) (regardless of the procurement vehicle used). If using GSA Schedules as the procurement vehicle, also submit a copy of the memo to the Commissioner of GSA’s Federal Acquisition Service.

Note that GSA will provide the Office of the Federal Chief Information Officer (OFCIO) at the Office of Management and Budget (OMB) with copies of all memos submitted.

Based on agency-provided transition plans, GSA OGP will review the products on the legacy list in 12 months (May 2020) for removal.

Please email icam at gsa.gov with questions.

How To Purchase
Visit the Buy Page to view FICAM products, services and purchasing guidance.
