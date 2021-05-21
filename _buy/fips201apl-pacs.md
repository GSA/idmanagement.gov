---
layout: page
title: FIPS 201 Approved Products List - Physical Access Control System Components
permalink: buy/apl-pacs/
collection: buy
sticky_sidenav: true
sidenav: buy

subnav:
    - text: How to Purchase
      href: '#how-to-purchase'
    - text: Approved PACS Products
      href: '#approved-pacs-products'
    - text: PACS Products Awaiting Approval
      href: '#pacs-products-awaiting-approval'

---

{% assign category = "" | split: "" %}
{% for pacs in site.data.fips201pacs1301 %}
  {% assign category = pacs.category | strip %}
  {% assign categories = categories | push: category | uniq | sort %}
{% endfor %}
{% assign categories = categories | uniq | sort %}

The Physical Access Control System (PACS) products listed under the “Approved” section below have met the security and functional requirements set by GSA’s FIPS 201 Evaluation Program, and have been approved for use by the Federal government. Note that the Approved PACS Products below are grouped by either 13.01 or 13.02 topologies:

- 13.01 – end-to-end systems which integrate components from three categories (PACS Infrastructure; Validation System; and PIV Reader) together through software (SDK or API).
- 13.02 – end-to-end systems which integrate the first two components (PACS Infrastructure; Validation System) into a “PACS Validation Infrastructure,” which is then integrated with the third component category (PIV Reader).

# How To Purchase

Visit the [Buy Page](../) to view FICAM products, services and purchasing guidance.

# Approved PACS Products

<table class="usa-table--borderless pacs-table">
  <tbody>
    {% for category in categories %}
      <tr class="pacs-table-category-heading" data-categories="{{ category }}">
        <th colspan="1" class="pacs-table-heading" id="pacs-table-heading-{{ category | slugify }}"><b>{{ category }} </b></th>
      </tr>
      {% for pacs in site.data.fips201pacs1301 %}
        {% if pacs.category == category %}
          <tr class="pacs-table-row" data-category="{{ pacs.category }}">
            <ul class="usa-unstyled-list">
              <li><strong>Use with FIPS 201-2 Credential Status:</strong> {{ pacs.fipsstatus }} </li>
              <li><strong>PACS Infrastructure: </strong><a href="{{ pacs.infraurl | prepend: site.baseurl }}" target="_blank">{{ pacs.infrastructure }} </a></li>
              <li><strong>PACS Validation System:</strong><a href="{{ pacs.valurl | prepend: site.baseurl }}" target="_blank"> {{ pacs.validation }} </a></li>
              <li><strong>Approved Card Readers:</strong></li>
              <ul class="usa-unstyled-list">
                {% if pacs.reader1 %}
                  <li><a href="{{ pacs.reader1url | prepend: site.baseurl }}" target="_blank">{{ pacs.reader1 }}</a></li>
                {% endif %}
                {% if pacs.reader2 %}
                  <li><a href="{{ pacs.reader2url | prepend: site.baseurl }}" target="_blank">{{ pacs.reader2 }}</a></li>
                {% endif %}
                {% if pacs.reader3 %}
                  <li><a href="{{ pacs.reader3url | prepend: site.baseurl }}" target="_blank">{{ pacs.reader3 }}</a></li>
                {% endif %}
                {% if pacs.reader4 %}
                  <li><a href="{{ pacs.reader4url | prepend: site.baseurl }}" target="_blank">{{ pacs.reader4 }}</a></li>
                {% endif %}
                {% if pacs.reader5 %}
                  <li><a href="{{ pacs.reader5url | prepend: site.baseurl }}" target="_blank">{{ pacs.reader5 }}</a></li>
                {% endif %}
                {% if pacs.reader6 %}
                  <li><a href="{{ pacs.reader6url | prepend: site.baseurl }}" target="_blank">{{ pacs.reader6 }}</a></li>
                {% endif %}
                {% if pacs.reader7%}
                  <li><a href="{{ pacs.reader7url | prepend: site.baseurl }}" target="_blank">{{ pacs.reader7 }}</a></li>
                {% endif %}
                {% if pacs.reader8 %}
                  <li><a href="{{ pacs.reader8url | prepend: site.baseurl }}" target="_blank">{{ pacs.reader8 }}</a></li>
                {% endif %}
                {% if pacs.reader9 %}
                  <li><a href="{{ pacs.reader9url | prepend: site.baseurl }}" target="_blank">{{ pacs.reader9 }}</a></li>
                {% endif %}
              </ul>
            </ul>
          </tr>
        {% endif %} <!-- end category loop -->
    {% endfor %} <!-- end data loop -->
  {% endfor %} <!-- end header loop -->
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