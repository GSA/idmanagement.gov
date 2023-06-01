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

## Authorities Table

This table identifies the authorities that issue memos, regulations or technical guidance documents that are relevant to FICAM.

| Name | Description |
| --- | --- | {% for authority in site.data.laws-policies-standards %} {% if document.type = "Authority" %}
| [ {{authority.shortName}} ]({{site.baseurl}}/laws-policies-standards{{authority.shortName | datapage_url: laws-policies-standards }}) | {{authority.description}} | {% endif %} {% endfor %}

## Policy Table

This table provides a listing of the laws, directives, regulations, and technical guidance documented in the policy matrix above. Click on the name of a policy to see more details about it, and for a link to the document itself.

| Document Name | Publication Date | Categories |
| --- | --- | --- | {% for document in site.data.laws-policies-standards %} {% if document.type != "Agency" %}
| [ {{document.shortName}} ]({{site.baseurl}}/laws-policies-standards{{document.shortName | datapage_url: laws-policies-standards }}) | {{document.published}} | {% for service in document.ficam-services %} {{ service }}<br/> {% endfor %} | {% endif %}{% endfor %}
