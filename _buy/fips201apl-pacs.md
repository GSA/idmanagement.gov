---
layout: page
title: FIPS 201 Approved Products List - Physical Access Control System Components
permalink: approved-products-list-pacs-products/
collection: buy
sticky_sidenav: true
sidenav: buy

subnav:
    - text: How to Purchase
      href: '#how-to-purchase'
    - text: Approved PACS - 13.01
      href: '#approved-1301-topology-pacs-products'
    - text: Approved PACS - 13.02
      href: '#approved-1302-topology-pacs-products'
    - text: PACS Readers
      href: '#pacs-readers'      
    - text: PACS Solutions Awaiting Approval
      href: '#pacs-solutions-awaiting-approval'

---

The Physical Access Control System (PACS) products listed under the “Approved” section below have met the security and functional requirements set by GSA’s FIPS 201 Evaluation Program, and have been approved for use by the Federal Government. Note that the Approved PACS Products below are grouped by either 13.01 or 13.02 topologies:

- [13.01 Topology](#approved-1301-topology-pacs-products) – end-to-end systems which integrate components from three categories (PACS Infrastructure; Validation System; and PIV Reader) together through software (SDK or API).
- [13.02 Topology](#approved-1302-topology-pacs-products) – end-to-end systems which integrate the first two components (PACS Infrastructure; Validation System) into a “PACS Validation Infrastructure,” which is then integrated with the third component category (PIV Reader).

# How To Purchase

Visit the [Buy Page](../buy/) to view FICAM products, services and purchasing guidance.

# Approved 13.01 Topology PACS Products

<!--
<fieldset class="usa-fieldset-inputs guide-filter">
  <legend>Topologies</legend>
    <ul class="usa-unstyled-list">
      {% for category in categories %}
        <li>
          <input class="guide-filter-category" id="category-{{ category | slugify }}" type="checkbox" name="categories" value="{{ category }}" checked>
          <label for="category-{{ category | slugify }}">{{ category }}</label>
        </li>
      {% endfor %}
    </ul>
</fieldset>
-->

<table class="usa-table--borderless">
  <thead class="usa-sr">
    <tr>
      <th id="pacs-table-heading-infra" scope="col">PACS Infrastructure</th>
      <th id="pacs-table-heading-fipsstatus" scope="col">PACS APL #</th>
      <th id="pacs-table-heading-validation" scope="col">Validation System</th>
      <th id="pacs-table-heading-cardreader" scope="col">Validation APL #</th>
    </tr>
  </thead>
  <tbody>
      {% for guide in site.data.fips201pacs %}
          <tr class="pacs-table-row" data-category="{{ guide.category }}">
            <td headers="pacs-table-heading-{{ category | slugify }} pacs-table-heading-infrastructure"><a href="{{ guide.infraurl | prepend: site.baseurl }}" target="_blank">{{ guide.infrastructure }}</a></td>
            <td headers="pacs-table-heading-{{ category | slugify }} pacs-table-heading-infraapl">{{ guide.infraapl }}</td>
            <td headers="pacs-table-heading-{{ category | slugify }} pacs-table-heading-validation"><a href="{{ guide.valurl | prepend: site.baseurl }}" target="_blank">{{ guide.validation}}</a></td>
             <td headers="pacs-table-heading-{{ category | slugify }} pacs-table-heading-valapl">{{ guide.valapl }}</td>
          </tr>
      {% endfor %}
  </tbody>
</table>

**NOTE** APL listings 10027 and 10028 are consolidated into APL listings 10112 and 10113, respectively.


# Approved 13.02 Topology PACS Products

<table class="usa-table--borderless">
  <thead class="usa-sr">
    <tr>
      <th id="pacs-table-heading-infra" scope="col">PACS Infrastructure and Validation System</th>
      <th id="pacs-table-heading-infraapl" scope="col"> APL # </th>
    </tr>
  </thead>
  <tbody>
      {% for guide in site.data.fips2011302 %}
          <tr class="pacs-table-row" data-category="{{ guide.category }}">
            <td headers="pacs-table-heading-{{ category | slugify }} pacs-table-heading-infrastructure"><a href="{{ guide.infraurl | prepend: site.baseurl }}" target="_blank">{{ guide.infrastructure }}</a></td>
            <td headers="pacs-table-heading-{{ category | slugify }} pacs-table-heading-infraapl">{{ guide.infraapl }}</td>
          </tr>
      {% endfor %}
  </tbody>
</table>

# PACS Readers
**NOTE:**  PACS readers are approved as part of a complete solution.  The list below represents the readers that have been tested and verified as part of a solution (e.g., Infrastructure + Validation Engine + Reader).  Each of the linked approval letter lists the approved reader types, associated APL#, and tested PACS solution.
- [Allegion Schlage Smart Card Readers](../docs/apl-10128-29-allegion.pdf){:target="_blank"} 
- [Gallagher T Series PIV Readers](../docs/apl-10021-22-23-38-39-99-100-101-102-gallagher.pdf){:target="_blank"}
- [HID pivCLASS Series](../docs/apl-10003-4-5-6-7-8-26-52-85-pivclass.pdf){:target="_blank"}
- [Identiv uTrust Series](../docs/apl-10104-5-6-7-19-identiv.pdf){:target="_blank"}
- [Innometriks Cheetah Series](../docs/apl-10109-130-cheetah.pdf){:target="_blank"}
- [Veridt Series](../docs/apl-10031-32-33-34-35-92-93-94-95-96-veridt.pdf){:target="_blank"}
- [XTec X Series](../docs/apl-10077-82-xtec.pdf){:target="_blank"}


# PACS Solutions Awaiting Approval

| Position | Solution | APL Numbers | New/Update | Testing Status |
| -------- | -------- | ---------- | -------------- |-------------|
| 1 | Genetec + HID	13.01 | 10061 & 10062 | Update | In Test |
| 2	| Honeywell + HID 13.01	| 10063 & 10064 | Update | In queue |
| 3	| CCure 2.7 + Innometriks 13.01 | 10115 & 10108 | Update | In queue |
| 4 | Datawatch + HID 13.01	| 10117 & 10118 | Update | In queue | 
| 5	| Kastle + HID	13.02 | 10116 | Update | In queue |
| 6 | Open Option + HID 13.01 | 10075 & 10076 | Update |	In queue |
| 7 | Lenel + HID 13.01 | 10112 & 10113 | Update |	In queue |
| 8 | ReconaSense + HID 13.01 | 10131 & 10132 | Update | In queue |

Cycle 2 and 3 updates are moved to the front of the test queue once they are installed. While between cycles, solutions may not appear here.
