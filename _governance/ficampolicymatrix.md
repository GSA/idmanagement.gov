---
layout: page
collection: governance
title: FICAM Policy Matrix
permalink: governance/policymatrix/
sidenav: governance
sticky_sidenav: true

subnav:
  - text: Introduction
    href: "#introduction"
  - text: Policy Overview
    href: "#policy-overview"
  - text: Laws and Directives
    href: "#laws-and-directives"
  - text: Federal Policies
    href: "#federal-policies"
  - text: Federal Technical Guidance
    href: "#federal-technical-guidance"
  - text: ICAM Activities and Programs
    href: "#icam-activities-and-programs"
  - text: Industry Standards
    href: "#industry-standards"
---

## Introduction

Laws, executive policies, regulations, and government standards drive multiple federal initiatives related to Federal Identity, Credential and Access Management. IATAD maintains this policy matrix to map delegations and authorities. ICAM Partners can use this matrix to understand the origins and ultimate authority of ICAM initiatives.

* [Policy Overview](#policy-overview)
* [Laws and Directives](#laws-and-directives)
* [Federal Policies](#federal-policies)
* [Federal Technical Guidance](#federal-technical-guidance)
* [ICAM Activities and Programs](#icam-activities-and-programs)
* [Industry Standards](#industry-standards)

## Policy Overview

This diagram presents a visual overview of the FICAM Policy landscape.

[A map of the FICAM Policy Landscape]({{site.baseurl}}/governance/policymap)

## Laws and Directives

This table provides a listing of the laws documented in the policy matrix above. Click on the name of a law or directive to see more details about it, and for a link to the document itself.

{% assign sorted_laws = site.data.laws-policies-standards | where: "type", "Law" | sort: "published", "last" %}

| Document | Document Name | Date Published |
| --- | --- | --- |
{%- for document in sorted_laws %}
| [ {{document.shortName}} ]({{site.baseurl}}/laws-policies-standards{{document.shortName | datapage_url: laws-policies-standards }}) | {{ document.longName }} | {{document.published}} |
{%- endfor %}

## Federal Policies

This table lists Federal Policies and directives published by OMB. They set a strategic direction for the entire Federal Government, and are the basis for development of the standards and technical guidance documents produced to support FICAM.

{% assign sorted_policies = site.data.laws-policies-standards | where: "type", "Policy" | sort: "published", "last" %}

| Document Name | Publication Date | Categories |
| --- | --- | --- |
{%- for document in sorted_policies %}
| [ {{document.shortName}} ]({{site.baseurl}}/laws-policies-standards{{document.shortName | datapage_url: laws-policies-standards }}) | {{ document.longName }} | {{document.published}} |
{%- endfor %}

## Federal Technical Guidance

This table lists Technical Guidance published under ICAM. The provide technical details to support consistent, secure and effective implementation of the policies.

{% assign sorted_guidance = site.data.laws-policies-standards | where: "type", "Guidance" | sort: "published", "last" %}

| Document Name | Publication Date | Categories |
| --- | --- | --- |
{%- for document in sorted_guidance %}
| [ {{document.shortName}} ]({{site.baseurl}}/laws-policies-standards{{document.shortName | datapage_url: laws-policies-standards }}) | {{ document.longName }} | {{document.published}} |
{%-  endfor %}

## ICAM Activities and Programs

This table lists activities and programs supporting ICAM for the federal government. These programs support the use of FICAM by federal agencies.

{% assign sorted_program = site.data.laws-policies-standards | where: "type","Program" | sort: "implemented-by","last" %}

| Activity/Program Name | Operated By | Categories |
| --- | --- | --- |
{%- for document in sorted_program %}
| [ {{document.shortName}} ]({{site.baseurl}}/laws-policies-standards{{document.shortName | datapage_url: laws-policies-standards }}) |
{%- for operator in document.implemented-by %} {{ operator.shortName }}<br/> {% endfor %} |
{%- for service in document.ficam-services %} {{ service }}<br/> {% endfor %} |
{%- endfor %}

## Industry Standards

This table lists industry standards that are relevant for FICAM.

{% assign sorted_standards = site.data.laws-policies-standards | where: "type","Standard" | sort: "shortName","last" %}

| Activity/Program Name | Categories |
| --- |  --- | {% for document in sorted_standards %}
| [ {{document.shortName}} ]({{site.baseurl}}/laws-policies-standards{{document.shortName | datapage_url: laws-policies-standards }}) | {% for service in document.ficam-services %} {{ service }}<br/> {% endfor %} | {% endfor %}
