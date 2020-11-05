---
layout: page
title: FIPS 201 Evaluation program
permalink: sell/fips201apl/
collection: sell
sidenav: sell

subnav:
    - text: PIV Cards
      url: /sell/piv/
    - text: Card Holders
      url: /sell/holders/
    - text: Physical Access Control System (PACS) Components
      url: /sell/pacs/
    - text: Removed Products List
      url: /sell/rpl/
---

The Approved Products List (APL) provides federal agencies with products and services that have been approved for FICAM implementation based on rigorous security vulnerability and interoperability testing performed by the FIPS 201 Evaluation Program.


<table class="usa-table--borderless playbooks-table">
  <thead class="usa-sr-only">
    <tr>
      <th id="playbooks-table-heading-title" scope="col">Title</th>
      <th id="playbooks-table-heading-description" scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    {% assign playbooks = site.sell.cardholders| sort: "title" %}
    {% for holder in cardholders %}
        <tr class="cardholder-table-row">
          <td><a href="{{ holder.url | relative_url }}">{{ holder.title }}</a></td>
        </tr>
    {% endfor %}
  </tbody>
</table>