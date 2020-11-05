---
layout: page
title: FIPS 201 Approved Products List - Cards Holders
permalink: sell/holders/
collection: sell
sidenav: sell

subnav:
    - text: PIV Cards
      href: /sell/piv/
    - text: Card Holders
      href: /sell/holders/
    - text: Physical Access Control System (PACS) Components
      href: /sell/pacs/
    - text: Removed Products List
      href: /sell/rpl/
---

<p>The card holders listed below have met the security and functional requirements under GSA’s FIPS 201 Evaluation program and have been approved for use by the Federal government.</p>

<table class="usa-table--borderless holders-table">
  <thead class="usa-sr-only">
    <tr>
      <th id="holders-table-heading-title" scope="col">Title</th>
      <th id="holders-table-heading-description" scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    {% assign playbooks = site.sell | concat: site.data.external_playbooks | sort: "category" %}
    {% for holder in cardholders %}
        <tr class="cardholders-table-row">
          <td><a href="{{ holder.url | relative_url }}">{{ holder.title }}</a></td>
          <td>{{ holder.description }}</td>
        </tr>
    {% endfor %}
  </tbody>
</table>