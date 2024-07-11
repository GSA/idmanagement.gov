---
layout: page
collection: partners
title: FIPS 201 Approved Product List
permalink: /fips201/
sidenav: partners
sticky_sidenav: true

subnav:
  - text: How To Purchase
    href: '#how-to-purchase'
  - text: Approved Products - PACS
    href: '#approved-products---physical-access-control-systems'
  - text: Approved 13.01 Topology PACS Products
    href: '#approved-1301-topology-pacs-products'
  - text: Approved 13.02 Topology PACS Products
    href: '#approved-1302-topology-pacs-products'
  - text: PACS Readers
    href: '#pacs-readers'
  - text: PACS Solutions Awaiting Approval
    href: '#pacs-solutions-awaiting-approval'
  - text: Approved Products - PIV Smart Cards
    href: '#approved-products---piv-smart-cards'
  - text: Removed Product List
    href: '#removed-product-list'

---

This page is for program managers and acquisition professionals looking for approved products for physical access control systems and PIV cards. This page also contains the removed products list.

If you think this page is missing something, [contact us]({{site.baseurl}}/contact-us) to ask a question.

## How To Purchase

Visit the [Buy Page]({{site.baseurl}}/acquisition-professionals/) to view FICAM products, services and purchasing guidance.

## Approved Products - Physical Access Control Systems

The Physical Access Control System (PACS) products listed under the “Approved” section below have met the security and functional requirements set by GSA’s FIPS 201 Evaluation Program, and have been approved for use by the Federal Government. Note that the Approved PACS Products below are grouped by either 13.01 or 13.02 topologies:

- [13.01 Topology](#approved-1301-topology-pacs-products) – end-to-end systems which integrate components from three categories (PACS Infrastructure; Validation System; and PIV Reader) together through software (SDK or API).
- [13.02 Topology](#approved-1302-topology-pacs-products) – end-to-end systems which integrate the first two components (PACS Infrastructure; Validation System) into a “PACS Validation Infrastructure,” which is then integrated with the third component category (PIV Reader).

## Approved 13.01 Topology PACS Products

<table class="usa-table usa-table--borderless">
  <caption>
    Approved 13.01 Topology PACS Products List
  </caption>
  <thead>
    <tr>
      <th data-sortable scope="col" role="columnheader" aria-sort="ascending">PACS Infrastructure</th>
      <th data-sortable scope="col" role="columnheader">PACS APL #</th>
      <th data-sortable scope="col" role="columnheader">Validation System</th>
      <th data-sortable scope="col" role="columnheader">Validation APL #</th>
    </tr>
  </thead>
  <tbody>
      {% for guide in site.data.fips201pacs1301 %}
          <tr>
            <th scope="row" role="rowheader"><a href="{{ guide.infraurl | prepend: site.baseurl }}" target="_blank" rel="noopener noreferrer">{{ guide.infrastructure }}</a></th>
            <td  data-sort-value="{{ guide.infraapl }}">{{ guide.infraapl }}</td>
            <th scope="row" role="rowheader"><a href="{{ guide.valurl | prepend: site.baseurl }}" target="_blank" rel="noopener noreferrer">{{ guide.validation}}</a></th>
             <td data-sort-value="{{ guide.valapl }}">{{ guide.valapl }}</td>
          </tr>
      {% endfor %}
  </tbody>
</table>
<div class="usa-sr-only usa-table__announcement-region" aria-live="polite"></div>

**NOTE:** APL listings 10027 and 10028 are consolidated into APL listings 10112 and 10113, respectively.


## Approved 13.02 Topology PACS Products

<table class="usa-table usa-table--borderless">
  <caption>
    Approved 13.02 Topology PACS Products List
  </caption>
  <thead>
    <tr>
      <th data-sortable scope="col" role="columnheader">PACS Infrastructure and Validation System</th>
      <th data-sortable scope="col" role="columnheader" aria-sort="ascending"> APL # </th>
    </tr>
  </thead>
  <tbody>
      {% for guide in site.data.fips201pacs1302 %}
          <tr>
            <th scope="row" role="rowheader"><a href="{{ guide.infraurl | prepend: site.baseurl }}" target="_blank" rel="noopener noreferrer">{{ guide.infrastructure }}</a></th>
            <td data-sort-value="{{ guide.infraapl }}">{{ guide.infraapl }}</td>
          </tr>
      {% endfor %}
  </tbody>
</table>
<div class="usa-sr-only usa-table__announcement-region" aria-live="polite"></div>

## PACS Readers

**NOTE:**  PACS readers are approved as part of a complete solution.  The list below represents the readers that have been tested and verified as part of a solution (e.g., Infrastructure + Validation Engine + Reader).  Each of the linked approval letters lists the approved reader types, associated APL#, and tested PACS solution.
- [Allegion Schlage Smart Card Readers]({{site.baseurl}}/docs/apl-10128-10129-10133-allegion.pdf){:target="_blank"}{:rel="noopener noreferrer"}
- [ASSA ABLOY integrated Signo Readers]({{site.baseurl}}/docs/apl-10138-10141-ASSA.pdf){:target="_blank"}{:rel="noopener noreferrer"}
- [ASSA ABLOY integrated pivCLASS Readers]({{site.baseurl}}/docs/apl-10142-HES.pdf){:target="_blank"}{:rel="noopener noreferrer"}
- [Gallagher T Series PIV Readers]({{site.baseurl}}/docs/apl-10021-10023-10038-10039-10099-10102-10185-10186-gallagher.pdf){:target="_blank"}{:rel="noopener noreferrer"}
- [HID pivCLASS Series Readers]({{site.baseurl}}/docs/apl-10003-10008-26-52-85-10187-89-pivclass.pdf){:target="_blank"}{:rel="noopener noreferrer"}
- [HID Signo Series Readers]({{site.baseurl}}/docs/apl-10134-10137-Signo.pdf){:target="_blank"}{:rel="noopener noreferrer"}
- [Identiv uTrust Series Readers]({{site.baseurl}}/docs/apl-10104-07-19-24-25-47-58-74-80-utrust.pdf){:target="_blank"}{:rel="noopener noreferrer"}
- [Innometriks Cheetah Series Readers]({{site.baseurl}}/docs/apl-10109-30-60-62-81-84-cheetah.pdf){:target="_blank"}{:rel="noopener noreferrer"}
- [Veridt Series Readers]({{site.baseurl}}/docs/apl-10031-35-92-96-63-67-86-veridt.pdf){:target="_blank"}{:rel="noopener noreferrer"}
- [XTec X Series Readers]({{site.baseurl}}/docs/apl-10078-79-80-81-82-xtec.pdf){:target="_blank"}{:rel="noopener noreferrer"}
- [WaveLynx Technologies Readers]({{site.baseurl}}/docs/apl-10168-69-70-71-72-73-wavelynx.pdf){:target="_blank"}{:rel="noopener noreferrer"}

## PACS Solutions Awaiting Approval

<table class="usa-table">
  <caption>
    PACS Solutions Awaiting Approval List
  </caption>
  <thead>
    <tr>
      <th data-sortable scope="col" role="columnheader" aria-sort="ascending">Position</th>
      <th data-sortable scope="col" role="columnheader">Solution</th>
      <th data-sortable scope="col" role="columnheader">APL Numbers</th>
      <th data-sortable scope="col" role="columnheader">New/Update</th>
      <th data-sortable scope="col" role="columnheader">Testing Status</th>
    </tr>
  </thead>
  <tbody>
  {% for psaal in site.data.fips201pacs-await-list %}
    <tr>
      <th scope="row" role="rowheader">{{ psaal.position }}</th>
      <td data-sort-value="{{ psaal.solution }}">{{ psaal.solution }}</td>
      <td data-sort-value="{{ psaal.aplnumbers }}">{{ psaal.aplnumbers }}</td>
      <td data-sort-value="{{ psaal.state }}">{{ psaal.state }}</td>
      <td data-sort-value="{{ psaal.teststatus }}">{{ psaal.teststatus }}</td>
    </tr>
  {% endfor %}
  </tbody>
</table>
<div class="usa-sr-only usa-table__announcement-region" aria-live="polite"></div>


Cycle 2 and 3 updates are moved to the front of the test queue once they are installed. While between cycles, solutions may not appear here.

## Approved Products - PIV Smart Cards

The Personal Identity Verification (PIV) cards listed below are approved for FICAM implementation under the FIPS 201 Evaluation Program. These are blank PIV cards available for purchase. A PIV service provider will personalize these blank cards for federal agencies and contractors. PIV service providers are required to use PIV cardstock from the Approved Products List (APL). 

If you do not see a card below, it's possible it's on the [Removed Product List]({{site.baseurl}}/fips201/#removed-product-list).

Please note:

- Tri-Interface cards are not approved for federal government PIV or CAC card use. Agencies should not procure them. They are listed on the APL for industry-only acquisition.
- Manufacturers may call Tri-Interface cards by different names (for example, Dual Hybrid). The prohibited feature of Tri-Interface cards is a prox interface (a 125 kHz antenna).
- Agencies should procure only cards validated by the NIST Personal Identity Verification Program (NPIVP).

## Approved PIV Cards

<table class="usa-table">
  <caption>
    Approved PIV Cards List
  </caption>
  <thead>
    <tr>
      <th data-sortable scope="col" role="columnheader" aria-sort="ascending">APL Number</th>
      <th data-sortable scope="col" role="columnheader">Product Name</th>
      <th data-sortable scope="col" role="columnheader">Valid Date</th>
    </tr>    
  </thead>
  <tbody>
    {% for apl in site.data.fips201piv %}
      <tr>
        <th scope="row" role="rowheader">{{ apl.aplnumber }}</th>
        <td data-sort-value="{{ apl.productname }}"><a href="{{ apl.url | prepend: site.baseurl }}" target="_blank" rel="noopener noreferrer">{{ apl.productname }}</a></td>
        <td data-sort-value="{{ apl.validdate }}">{{ apl.validdate }}</td>
      </tr>
    {% endfor %} <!--apl-->
  </tbody>
</table>
<div class="usa-sr-only usa-table__announcement-region" aria-live="polite"></div>

## Legacy PIV Cards

Legacy PIV cards are no longer approved for purchase by the FIPS 201 Evaluation Program. Any cardstock designated as “legacy” is placed on this legacy list and on the [Removed Product List]({{site.baseurl}}/fips201/#removed-product-list). However, some federal agencies still need to procure the legacy cardstock to use while existing systems are being upgraded. Agencies must stop using cardstock on the legacy list by **June 30, 2024**.

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

Submit the memo to [GSA’s Associate Administrator for Government-wide Policy (OGP)](https://www.gsa.gov/about-us/organization/office-of-governmentwide-policy?_gl=1*k3bw6t*_ga*MjA1NTk4NzkwNy4xNjY5MjExMjg2*_ga_HBYXWFP794*MTcxNTg3MzE3OS40MC4xLjE3MTU4NzMyNjUuMC4wLjA){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} (regardless of the acquisition vehicle used). If using [GSA Multiple Award Schedule]({{site.baseurl}}/acquisition-professionals/#gsa-multiple-award-schedule) as the acquisition vehicle, also submit a copy of the memo to the Commissioner of GSA’s Federal Acquisition Service.

Note that GSA will provide the Office of the Federal Chief Information Officer (OFCIO) at the Office of Management and Budget (OMB) with copies of all memos submitted.

## Removed Product List

{% assign categories = "" | split: "" %}
{% for rpl in site.data.fips201rpl %}
  {% assign category = rpl.category | strip %}
  {% assign categories = categories | push: category | uniq | sort %}
{% endfor %}
{% assign categories = categories | uniq | sort %}

The FIPS 201 Evaluation Program’s Removed Products List (RPL) displays products and services that were at one time on the Approved Products List but are no longer approved for government procurement. Due to security concerns, products on the RPL are not recommended for government acquisition. Products will be removed from the RPL after 3 years.

<br>
{% for category in categories %}
<table class="usa-table">
  <caption>{{ category }} Category List</caption>
  <thead>
    <tr>
        <th scope="col" role="columnheader" colspan="6"><b>{{ category }} Category</b></th>
    </tr>
    <tr>
      <th data-sortable scope="col" role="columnheader" aria-sort="ascending">APL #</th>
      <th data-sortable scope="col" role="columnheader" >Supplier</th>
      <th data-sortable scope="col" role="columnheader" >Product Name(s)</th>
      <th data-sortable scope="col" role="columnheader" >Product Number</th>
      <th data-sortable scope="col" role="columnheader" >Removal Date</th>
      <th data-sortable scope="col" role="columnheader" >Reason For Removal</th>
    </tr>
  </thead>
  <tbody>
   {% for rpl in site.data.fips201rpl %}
        {% if rpl.category == category %}
          <tr>
            <th scope="row">{{ rpl.numberApl }}</th>
            <td data-sort-value="{{ rpl.supplier }}">{{ rpl.supplier }}</td>
            <td data-sort-value="{{ rpl.nameProduct}}">{{ rpl.nameProduct}}</td>
            <td data-sort-value="{{ rpl.numberProduct }}">{{ rpl.numberProduct }}</td>
            <td data-sort-value="{{ rpl.dateRemoval}}">{{ rpl.dateRemoval}}</td>
            <td data-sort-value="{{ rpl.reason}}">{{ rpl.reason}}</td>
          </tr>
        {% endif %}
    {% endfor %} <!--rpl-->
  </tbody>
</table>
<div class="usa-sr-only usa-table__announcement-region" aria-live="polite"></div>
{% endfor %}<!--category-->
