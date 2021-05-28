---
layout: page
title: FIPS 201 Approved Products List - Physical Access Control System Components
permalink: buy/apl-pacs/
collection: buy
sticky_sidenav: true
sidenav: buy
custom_js:
  - guides

subnav:
    - text: How to Purchase
      href: '#how-to-purchase'
    - text: Approved PACS Products
      href: '#approved-pacs-products'
    - text: PACS Solutions Awaiting Approval
      href: '#pacs-solutions-awaiting-approval'

---

{% assign category = "" | split: "" %}
{% for guide in site.data.fips201pacs %}
  {% assign categoryName = guide.category | strip %}
  {% assign categories = categories | push: categoryName | uniq | sort %}
{% endfor %}
{% assign categories = categories | uniq | sort %}


The Physical Access Control System (PACS) products listed under the “Approved” section below have met the security and functional requirements set by GSA’s FIPS 201 Evaluation Program, and have been approved for use by the Federal government. Note that the Approved PACS Products below are grouped by either 13.01 or 13.02 topologies:

- 13.01 – end-to-end systems which integrate components from three categories (PACS Infrastructure; Validation System; and PIV Reader) together through software (SDK or API).
- 13.02 – end-to-end systems which integrate the first two components (PACS Infrastructure; Validation System) into a “PACS Validation Infrastructure,” which is then integrated with the third component category (PIV Reader).

# How To Purchase

Visit the [Buy Page](../) to view FICAM products, services and purchasing guidance.

# Approved PACS Products

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

<table class="usa-table--borderless">
  <thead class="usa-sr">
    <tr>
      <th id="pacs-table-heading-fipsstatus" scope="col">FIPS 201 Status</th>
      <th id="pacs-table-heading-infra" scope="col">PACS Infrastructure</th>
      <th id="pacs-table-heading-validation" scope="col">PACS Validation System</th>
      <th id="pacs-table-heading-cardreader" scope="col">Approved Card Reader</th>
    </tr>
  </thead>
  <tbody>
    {% for category in categories %}
      <tr class="pacs-table-category-heading" data-category="{{ category }}">
        <th colspan="4" class="pacs-table-heading" id="pacs-table-heading-{{ category | slugify }}"><b>{{ category }} Topology</b></th>
      </tr>
      {% for guide in site.data.fips201pacs %}
        <!-- {% if guide.category == category %} -->
          <tr class="pacs-table-row" data-category="{{ guide.category }}">
            <td headers="pacs-table-heading-{{ category | slugify }} pacs-table-heading-fipsstatus">{{ guide.fipsstatus }}</td>
            <td headers="pacs-table-heading-{{ category | slugify }} pacs-table-heading-infrastructure"><a href="{{ guide.infrarul | prepend: site.baseurl }}" target="_blank">{{ guide.infrastructure }}</a></td>
            <td headers="pacs-table-heading-{{ category | slugify }} pacs-table-heading-validation"><a href="{{ guide.valurl | prepend: site.baseurl }}" target="_blank">{{ guide.validation}}</a></td>
            <td>              
              <ul class="usa-unstyled-list">
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
                {% if guide.reader7%}
                  <li><a href="{{ guide.reader7url | prepend: site.baseurl }}" target="_blank">{{ guide.reader7 }}</a></li>
                {% endif %}
                {% if guide.reader8 %}
                  <li><a href="{{ guide.reader8url | prepend: site.baseurl }}" target="_blank">{{ guide.reader8 }}</a></li>
                {% endif %}
                {% if guide.reader9 %}
                  <li><a href="{{ guide.reader9url | prepend: site.baseurl }}" target="_blank">{{ guide.reader9 }}</a></li>
                {% endif %}
              </ul>
            </td>
          </tr>
        <!-- {% endif %} -->
      {% endfor %}
     {% endfor %}
  </tbody>
</table>

# PACS Solutions Awaiting Approval

| Position | Solution | New/Update | Testing Status |
| -------- | -------- | ---------- | -------------- |
| 1 |	Identiv Velocity 13.01 and 13.02	| Update	| In test |
| 2	| 13.01 Open Options + HID	| Update	| In queue |
| 3	| 13.01 LenelS2 + HID	| Update |	In test |
| 4	| 13.02 XTec AuthentX ePACS PVI + XTec PR	| Update	| In queue |

Cycle 2 and 3 updates are moved to the front of the test queue once they are installed. While between cycles, solutions may not appear here.
