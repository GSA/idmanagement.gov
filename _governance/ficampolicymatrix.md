---
layout: page
collection: governance
title: FICAM Policy Matrix
permalink: governance/policymatrix/
sidenav: governance
sticky_sidenav: true

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

<img src="{{site.baseurl}}/assets/img/ficam-policy-landscape-map.png" alt="A map of the FICAM Policy Landscape">

## Policy Table

{% comment %}
The markdown page will pull information from a data yml (sample file) that includes the document name, short name, internally created identifier, short description, hierarchical  mapping (e.g., HSPD-12 -> FIPS 201 -> NIST SP XX), date published, fiscal year published, standardized category (e.g., PIV, MFA, Workforce Identity, Public Identity, etc.), and persistent URL (hosted page rather than direct PDF if available). 
{% endcomment %}

{% comment %}
| Document Name | Publication Date | Categories | More Information |
| --- | --- | --- | --- |
{% for document in site.data.laws-policies-standards %}
| [ document.shortName ]({% link _governance/ficampolicydetails.md %}) | {{ document.published }} | {% for category in document.category %} {{ category }}<br> {% endfor %} | {{ document.url }} |
{% endfor %}
{% endcomment %}

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
            <td><a href="{{site.baseurl}}{% link _governance/ficampolicydetails.md %}">{{document.shortName}}</td>
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

