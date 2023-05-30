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

Laws, executive policies, regulations, and government standards drive multiple federal initiatives related to Federal Identity, Credential and Access Management. IATAD maintains this policy matrix to map delegations and authorities. ICAM Partners can use this matrix to understand the origins and ultimate authority of ICAM initiatives.

* [Policy Matrix](#policy-matrix)
* [Policy Table](#policy-table)

## Policy Matrix

This diagram presents a visual overview of the FICAM Policy landscape.

![A map of the FICAM Policy Landscape]({{site.baseurl}}/assets/img/ficam-policy-landscape-map.svg)

## Policy Table

This table provides a listing of the laws, directives, regulations, and technical guidance documented in the policy matrix above. Click on the name of a policy to see more details about it, and for a link to the document itself.

{% comment %}
The markdown page will pull information from a data yml (sample file) that includes the document name, short name, internally created identifier, short description, hierarchical  mapping (e.g., HSPD-12 -> FIPS 201 -> NIST SP XX), date published, fiscal year published, standardized category (e.g., PIV, MFA, Workforce Identity, Public Identity, etc.), and persistent URL (hosted page rather than direct PDF if available).
{% endcomment %}

| Document Name | Publication Date | Categories |
| --- | --- | --- | {% for document in site.data.laws-policies-standards %}
| [ {{document.shortName}} ]({{site.baseurl}}/laws-policies-standards{{document.shortName | datapage_url: laws-policies-standards }}) | {{document.published}} | {% for service in document.FICAM_Service_Mapping %} {{ service }}<br/> {% endfor %} | {% endfor %}
