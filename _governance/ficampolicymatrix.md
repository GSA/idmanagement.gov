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

![A map of the FICAM Policy Landscape](assets/img/ficam-policy-landscape-map.png)

## Policy Table

{% comment %}
The markdown page will pull information from a data yml (sample file) that includes the document name, short name, internally created identifier, short description, hierarchical  mapping (e.g., HSPD-12 -> FIPS 201 -> NIST SP XX), date published, fiscal year published, standardized category (e.g., PIV, MFA, Workforce Identity, Public Identity, etc.), and persistent URL (hosted page rather than direct PDF if available).
{% endcomment %}

| Document Name | Publication Date | Categories |
| --- | --- | --- | {% for document in site.data.laws-policies-standards %}
| [ {{document.shortName}} ]({{site.baseurl}}/laws-policies-standards/{{document.shortName | datapage_url: laws-policies-standards }}) | {{document.published}} | {% for service in document.FICAM_Service_Mapping %} {{ service }}<br/> {% endfor %} | {% endfor %}
