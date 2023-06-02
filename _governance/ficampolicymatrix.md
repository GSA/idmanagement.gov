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
  - text: Policy Overview
    href: '#policy-overview'
  - text: Laws and Directives
    href: '#laws-and-directives'
  - text: Federal Policies
    href: '#federal-policies'
  - text: Federal Technical Guidance
    href: '#federal-technical-guidance'
  - text: ICAM Activities and Programs
    href: '#icam-activities-and-programs'
---

## Introduction

Laws, executive policies, regulations, and government standards drive multiple federal initiatives related to Federal Identity, Credential and Access Management. IATAD maintains this policy matrix to map delegations and authorities. ICAM Partners can use this matrix to understand the origins and ultimate authority of ICAM initiatives.

* [Policy Overview](#policy-overview)
* [Laws and Directives](#laws-and-directives)
* [Federal Policies](#federal-policies)
* [Federal Technical Guidance](#federal-technical-guidance)
* [ICAM Activities and Programs](#icam-activities-and-programs)

## Policy Overview

This diagram presents a visual overview of the FICAM Policy landscape.

![A map of the FICAM Policy Landscape]({{site.baseurl}}/assets/img/ficam-policy-landscape-map.svg)

## Authorities

This table identifies the authorities that issue memos, regulations or technical guidance documents that are relevant to FICAM.

| Name | Description |
| --- | --- | {% for authority in site.data.laws-policies-standards %} {% if authority.type == "Authority" %}
| [ {{authority.shortName}} ]({{site.baseurl}}/laws-policies-standards{{authority.shortName | datapage_url: laws-policies-standards }}) | {{authority.description}} | {% endif %} {% endfor %}

## Laws and Directives

This table provides a listing of the laws documented in the policy matrix above. Click on the name of a law or directive to see more details about it, and for a link to the document itself.

| Document Name | Publication Date | Categories |
| --- | --- | --- | {% for document in site.data.laws-policies-standards %} {% if document.type == "Law" %}
| [ {{document.shortName}} ]({{site.baseurl}}/laws-policies-standards{{document.shortName | datapage_url: laws-policies-standards }}) | {{document.published}} | {% for service in document.ficam-services %} {{ service }}<br/> {% endfor %} | {% endif %}{% endfor %}

## Federal Policies

This table lists Federal Policies and directives published by OMB. They set a strategic direction for the entire Federal Government, and are the basis for development of the standards and technical guidance documents produced to support FICAM.

| Document Name | Publication Date | Categories |
| --- | --- | --- | {% for document in site.data.laws-policies-standards %} {% if document.type == "Policy" %}
| [ {{document.shortName}} ]({{site.baseurl}}/laws-policies-standards{{document.shortName | datapage_url: laws-policies-standards }}) | {{document.published}} | {% for service in document.ficam-services %} {{ service }}<br/> {% endfor %} | {% endif %}{% endfor %}

## Federal Technical Guidance

This table lists Technical Guidance published under ICAM. The provide technical details to support consistent, secure and effective implementation of the policies.

| Document Name | Publication Date | Categories |
| --- | --- | --- | {% for document in site.data.laws-policies-standards %} {% if document.type == "Guidance" %}
| [ {{document.shortName}} ]({{site.baseurl}}/laws-policies-standards{{document.shortName | datapage_url: laws-policies-standards }}) | {{document.published}} | {% for service in document.ficam-services %} {{ service }}<br/> {% endfor %} | {% endif %}{% endfor %}

## ICAM Activities and Programs

This table lists activities and programs supporting ICAM for the federal government. These programs support the use of FICAM by federal agencies.

| Activity/Program Name | Operated By | Categories |
| --- | --- | --- | {% for document in site.data.laws-policies-standards %} {% if document.type == "Program" %}
| [ {{document.shortName}} ]({{site.baseurl}}/laws-policies-standards{{document.shortName | datapage_url: laws-policies-standards }}) | {% for operator in document.implemented-by %} {{ operator.shortName }}<br/> {% endfor %} | {% for service in document.ficam-services %} {{ service }}<br/> {% endfor %} | {% endif %}{% endfor %}
