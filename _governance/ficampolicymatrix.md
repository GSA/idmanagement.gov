---
# This section is called the front matter, remove the comments in your page template.
layout: page
collection: governance
title: FICAM Policy Matrix
permalink: governance/policymatrix/
sticky_sidenav: true
sidenav: true
# Look at _data/navigation.yml to create sidenav - Example: pm
# If you have headers in your doc, you can create a 2nd level navigation with subnav:

subnav:
  - text: Introduction
    href: '#introduction'
  - text: Policy Matrix
    href: '#policy-matrix'
  - text: Policy Table
    href: '#policy-table'
---

## Introduction

Laws, executive policies, regulations, and government standards drive multiple federal initiatives. IATAD maintains this policy matrix to map delegations and authorities. Progam managers can use this matrix to DO WHAT?

* [Policy Matrix](#policy-matrix)
* [Policy Table](#policy-table)

## Policy Matrix

Insert picture of policy matrix

<img src="{{site.baseurl}}/img/ficam-policy-landscape-map.png" alt="A map of the FICAM Policy Landscape">

## Policy Table

{% comment %}
The markdown page will pull information from a data yml (sample file) that includes the document name, short name, internally created identifier, short description, hierarchical  mapping (e.g., HSPD-12 -> FIPS 201 -> NIST SP XX), date published, fiscal year published, standardized category (e.g., PIV, MFA, Workforce Identity, Public Identity, etc.), and persistent URL (hosted page rather than direct PDF if available). 
{% endcomment %}


| Document Name | Publication Date | Categories | More Information |
| --- | --- | --- | --- |
{% for document in site.data.laws-policies-standards %}
| [document.shortName]({% link _governance/ficampolicydetails.md %}) | {{ document.published }} | {% for category in document.category %} {{ category }}<br> {% endfor %} | {{ document.url }} |
{% endfor %}


{% comment %}
<table class="usa-table--borderless">
  <thead class="usa-sr">
    <tr>
      <th id="pacs-table-heading-infra" scope="col">Document Name</th>
      <th id="pacs-table-heading-fipsstatus" scope="col">Publication Date</th>
      <th id="pacs-table-heading-validation" scope="col">Categories</th>
      <th id="pacs-table-heading-cardreader" scope="col">More Information</th>
    </tr>
  </thead>
  <tbody>
      {% for document in site.data.laws-policies-standards %}
          <tr>
            <td>[document.shortName]({% link _governance/ficampolicydetails.md %})</td>
            <td>{{ document.published }}</td>
            <td>
            {% for category in document.category %}
              {{ category }}<br>
            {% endfor %}
            </td>
            <td>{{ document.url }}</td>
          </tr>
      {% endfor %}
  </tbody>
</table>
{% endcomment %}
