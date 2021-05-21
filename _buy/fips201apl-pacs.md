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

The Physical Access Control System (PACS) products listed under the “Approved” section below have met the security and functional requirements set by GSA’s FIPS 201 Evaluation Program, and have been approved for use by the Federal government. Note that the Approved PACS Products below are grouped by either 13.01 or 13.02 topologies:

- 13.01 – end-to-end systems which integrate components from three categories (PACS Infrastructure; Validation System; and PIV Reader) together through software (SDK or API).
- 13.02 – end-to-end systems which integrate the first two components (PACS Infrastructure; Validation System) into a “PACS Validation Infrastructure,” which is then integrated with the third component category (PIV Reader).

# How To Purchase

Visit the [Buy Page](../buy) to view FICAM products, services and purchasing guidance.

# Approved PACS Products

<div class="usa-width-three-fourths">
  <table class="usa-table-borderless">
    <tbody>
      {% for topology in topologies %}
        <tr class="pacs-table-topology-heading" data-category="{{ topology }}">
          <th colspan="3" class="pacs-table-heading" id="pacs-table-heading-{{ category | slugify }}"><b>{{ topology }} Topology</b></th>
        </tr>
        {% for pacs in site.data.fips201pacs %}
          {% if pacs.topology == topology %}
            <ul class="usa-unstyled-list">
              <li><strong>PACS Infrastructure: </strong><a href="{{ pacs.infraurl | prepend: site.baseurl }}" target="_blank">{{ pacs.infrastructure }} </a></li>
              <li><strong>PACS Validation System:</strong><a href="{{ pacs.valurl | prepend: site.baseurl }}" target="_blank"> {{ pacs.validation }} </a></li>
              <li><strong>Approved Card Readers:</strong></li>
                <ul class="usa-unstyled-list">
                  <li><a href="{{ pacs.reader1url | prepend: site.baseurl }}" target="_blank">{{ pacs.reader1 }}</a></li>
                  <li><a href="{{ pacs.reader2url | prepend: site.baseurl }}" target="_blank">{{ pacs.reader2 }}</a></li>
                  <li><a href="{{ pacs.reader3url | prepend: site.baseurl }}" target="_blank">{{ pacs.reader3 }}</a></li>
                  <li><a href="{{ pacs.reader4url | prepend: site.baseurl }}" target="_blank">{{ pacs.reader4 }}</a></li>
                  <li><a href="{{ pacs.reader5url | prepend: site.baseurl }}" target="_blank">{{ pacs.reader5 }}</a></li>
                  <li><a href="{{ pacs.reader6url | prepend: site.baseurl }}" target="_blank">{{ pacs.reader6 }}</a></li>
                  <li><a href="{{ pacs.reader7url | prepend: site.baseurl }}" target="_blank">{{ pacs.reader7 }}</a></li>
                  <li><a href="{{ pacs.reader8url | prepend: site.baseurl }}" target="_blank">{{ pacs.reader8 }}</a></li>
                  <li><a href="{{ pacs.reader9url | prepend: site.baseurl }}" target="_blank">{{ pacs.reader9 }}</a></li>
                </ul>
              <li><strong>Use with FIPS 201-2 Credential Status:</strong> {{ pacs.fipsstatus }} </li>
            </ul>
          {% endif %}
        {% endfor %} <!--pacs-->
      {% endfor %}<!--category-->
    </tbody>
  </table>
</div>


# PACS Solutions Awaiting Approval

| Position | Solution | New/Update | Testing Status |
| -------- | -------- | ---------- | -------------- |
| 1 |	Identiv Velocity 13.01 and 13.02	| Update	| In Test |
| 2	| 13.01 Open Options + HID	| Update	| In queue |
| 3	| 13.01 LenelS2 + HID	| Update |	In Test |
| 4	| 13.02 XTec AuthentX ePACS PVI + XTec PR	| Update	| In queue |

Cycle 2 and 3 updates are moved to the front of the test queue once they are installed. While between cycles, solutions may not appear here.