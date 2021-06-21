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
      <th id="pacs-table-heading-fipsstatus" scope="col">Use with FIPS 201-2 Credential Status</th>
      <th id="pacs-table-heading-infra" scope="col">If you have this PACS Infrastructure...</th>
      <th id="pacs-table-heading-validation" scope="col">with this PACS Validation System...</th>
      <th id="pacs-table-heading-cardreader" scope="col">You can use these card readers.</th>
    </tr>
  </thead>
  <tbody>
      {% for guide in site.data.fips201pacs %}
          <tr class="pacs-table-row" data-category="{{ guide.category }}">
            <td headers="pacs-table-heading-{{ category | slugify }} pacs-table-heading-fipsstatus">{{ guide.fipsstatus }}</td>
            <td headers="pacs-table-heading-{{ category | slugify }} pacs-table-heading-infrastructure"><a href="{{ guide.infraurl | prepend: site.baseurl }}" target="_blank">{{ guide.infrastructure }}</a></td>
            <td headers="pacs-table-heading-{{ category | slugify }} pacs-table-heading-validation"><a href="{{ guide.valurl | prepend: site.baseurl }}" target="_blank">{{ guide.validation}}</a></td>
            <td>              
              <ul class="usa-unstyled-list">
                <ol type = "1">
                {% if guide.reader1 %}
                  <li><a href="{{ guide.reader1url | prepend: site.baseurl }}" target="_blank">{{ guide.reader1 }}</a></li>
                {% endif %}
                {% if guide.reader2 %}
                  <li><a href="{{ guide.reader2url | prepend: site.baseurl }}" target="_blank">{{ guide.reader2 }}</a></li>
                {% endif %}
                {% if guide.reader3 %}
                  <li><a href="{{ guide.reader3url | prepend: site.baseurl }}" target="_blank">{{ guide.reader3 }}</a></li>
                {% endif %}
                {% if guide.reader4 %}
                  <li><a href="{{ guide.reader4url | prepend: site.baseurl }}" target="_blank">{{ guide.reader4 }}</a></li>
                {% endif %}
                {% if guide.reader5 %}
                  <li><a href="{{ guide.reader5url | prepend: site.baseurl }}" target="_blank">{{ guide.reader5 }}</a></li>
                {% endif %}
                {% if guide.reader6 %}
                  <li><a href="{{ guide.reader6url | prepend: site.baseurl }}" target="_blank">{{ guide.reader6 }}</a></li>
                {% endif %}
                {% if guide.reader7 %}
                  <li><a href="{{ guide.reader7url | prepend: site.baseurl }}" target="_blank">{{ guide.reader7 }}</a></li>
                {% endif %}
                {% if guide.reader8 %}
                  <li><a href="{{ guide.reader8url | prepend: site.baseurl }}" target="_blank">{{ guide.reader8 }}</a></li>
                {% endif %}
                {% if guide.reader9 %}
                  <li><a href="{{ guide.reader9url | prepend: site.baseurl }}" target="_blank">{{ guide.reader9 }}</a></li>
                {% endif %}
                {% if guide.reader10 %}
                  <li><a href="{{ guide.reader5url | prepend: site.baseurl }}" target="_blank">{{ guide.reader10 }}</a></li>
                {% endif %}
                {% if guide.reader11 %}
                  <li><a href="{{ guide.reader6url | prepend: site.baseurl }}" target="_blank">{{ guide.reader11 }}</a></li>
                {% endif %}
                {% if guide.reader12 %}
                  <li><a href="{{ guide.reader7url | prepend: site.baseurl }}" target="_blank">{{ guide.reader12 }}</a></li>
                {% endif %}
                {% if guide.reader13 %}
                  <li><a href="{{ guide.reader8url | prepend: site.baseurl }}" target="_blank">{{ guide.reader13 }}</a></li>
                {% endif %}
                {% if guide.reader14 %}
                  <li><a href="{{ guide.reader9url | prepend: site.baseurl }}" target="_blank">{{ guide.reader14 }}</a></li>
                {% endif %}
                </ol>
              </ul>
            </td>
          </tr>
      {% endfor %}
  </tbody>
</table>

**NOTE** APL listings 10027 and 10028 are consolidated into APL listings 10112 and 10113, respectively.


# Approved 13.02 Topology PACS Products

<table class="usa-table--borderless">
  <thead class="usa-sr">
    <tr>
      <th id="pacs-table-heading-fipsstatus" scope="col">Use with FIPS 201-2 Credential Status</th>
      <th id="pacs-table-heading-infra" scope="col">If you have this PACS infrastructure and validation system...</th>
      <th id="pacs-table-heading-cardreader" scope="col">You can use these card readers.</th>
    </tr>
  </thead>
  <tbody>
      {% for guide in site.data.fips2011302 %}
          <tr class="pacs-table-row" data-category="{{ guide.category }}">
            <td headers="pacs-table-heading-{{ category | slugify }} pacs-table-heading-fipsstatus">{{ guide.fipsstatus }}</td>
            <td headers="pacs-table-heading-{{ category | slugify }} pacs-table-heading-infrastructure"><a href="{{ guide.infraurl | prepend: site.baseurl }}" target="_blank">{{ guide.infrastructure }}</a></td>
            <td>              
              <ul class="usa-unstyled-list">
                <ol type = "1">
                {% if guide.reader1 %}
                  <li><a href="{{ guide.reader1url | prepend: site.baseurl }}" target="_blank">{{ guide.reader1 }}</a></li>
                {% endif %}
                {% if guide.reader2 %}
                  <li><a href="{{ guide.reader2url | prepend: site.baseurl }}" target="_blank">{{ guide.reader2 }}</a></li>
                {% endif %}
                {% if guide.reader3 %}
                  <li><a href="{{ guide.reader3url | prepend: site.baseurl }}" target="_blank">{{ guide.reader3 }}</a></li>
                {% endif %}
                {% if guide.reader4 %}
                  <li><a href="{{ guide.reader4url | prepend: site.baseurl }}" target="_blank">{{ guide.reader4 }}</a></li>
                {% endif %}
                {% if guide.reader5 %}
                  <li><a href="{{ guide.reader5url | prepend: site.baseurl }}" target="_blank">{{ guide.reader5 }}</a></li>
                {% endif %}
                {% if guide.reader6 %}
                  <li><a href="{{ guide.reader6url | prepend: site.baseurl }}" target="_blank">{{ guide.reader6 }}</a></li>
                {% endif %}
                {% if guide.reader7 %}
                  <li><a href="{{ guide.reader7url | prepend: site.baseurl }}" target="_blank">{{ guide.reader7 }}</a></li>
                {% endif %}
                {% if guide.reader8 %}
                  <li><a href="{{ guide.reader8url | prepend: site.baseurl }}" target="_blank">{{ guide.reader8 }}</a></li>
                {% endif %}
                {% if guide.reader9 %}
                  <li><a href="{{ guide.reader9url | prepend: site.baseurl }}" target="_blank">{{ guide.reader9 }}</a></li>
                {% endif %}
                {% if guide.reader10 %}
                  <li><a href="{{ guide.reader5url | prepend: site.baseurl }}" target="_blank">{{ guide.reader10 }}</a></li>
                {% endif %}
                {% if guide.reader11 %}
                  <li><a href="{{ guide.reader6url | prepend: site.baseurl }}" target="_blank">{{ guide.reader11 }}</a></li>
                {% endif %}
                {% if guide.reader12 %}
                  <li><a href="{{ guide.reader7url | prepend: site.baseurl }}" target="_blank">{{ guide.reader12 }}</a></li>
                {% endif %}
                {% if guide.reader13 %}
                  <li><a href="{{ guide.reader8url | prepend: site.baseurl }}" target="_blank">{{ guide.reader13 }}</a></li>
                {% endif %}
                {% if guide.reader14 %}
                  <li><a href="{{ guide.reader9url | prepend: site.baseurl }}" target="_blank">{{ guide.reader14 }}</a></li>
                {% endif %}
                </ol>
              </ul>
            </td>
          </tr>
      {% endfor %}
  </tbody>
</table>

# PACS Solutions Awaiting Approval

| Position | Solution | New/Update | Testing Status |
| -------- | -------- | ---------- | -------------- |
| 1 | Amag + HID | Update | In test |
| 2	| Gallagher 1301 and 1302 | Update | In test |
| 3	| 13.01 LenelS2 + HID | Update | In queue |
| 4	| CCure 2.7 + Innometrics | Update | In queue |
| 5 | Identiv Velocity 13.01 and 13.02	| Update | In queue |
| 6	| 13.02 XTec AuthentX ePACS PVI + XTec PR | Update | In queue |
| 7	| Genetec + HID	| Update | In queue |
| 8	| Kastle + HID	| Update | In queue |
| 9 | Honeywell + HID	| Update | In queue |
| 10 | Datawatch + HID	| Update | In queue |
| 11 | Open Option + HID | Update |	In queue |

Cycle 2 and 3 updates are moved to the front of the test queue once they are installed. While between cycles, solutions may not appear here.
