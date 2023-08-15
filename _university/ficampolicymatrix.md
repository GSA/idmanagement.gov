---
layout: page
collection: unversity
title: FICAM Policy Matrix
permalink: /university/policymatrix/
sidenav: university
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
---

## Introduction

Laws, executive policies, regulations, and government standards drive multiple federal initiatives related to Federal Identity, Credential and Access Management. IATAD maintains this policy matrix to map delegations and authorities. ICAM Partners can use this matrix to understand the origins and ultimate authority of ICAM initiatives.

* [Policy Overview](#policy-overview)
* [Laws and Directives](#laws-and-directives)
* [Federal Policies](#federal-policies)
* [Federal Technical Guidance](#federal-technical-guidance)

## Policy Overview

The policy map below presents a visual overview of the laws, policies and standards relevant to FICAM. The documents are organized according to the government body that produced it, and the relationships between the documents are illustrated by arrows connecting them.

[![Visual overview of the laws, policies and standards relevant to FICAM, organized according to the government body that produced it. The relationships between the documents are illustrated by arrows connecting them.]({{site.baseurl}}/assets/img/icam-policy-landscape-map.png)]({{site.baseurl}}/university/policymap/){:target="_blank"}{:rel="noopener noreferrer"}

## Laws and Directives

This table lists the laws that establish or authorize the entities and activities listed in later tables.

Laws are sorted by date, from oldest to newest.

Click on the name of a law or directive to see more details about it, and for a link to the law itself.

{% assign sorted_laws = site.data.laws-policies-standards | where: "type", "Law" | sort: "published", "last" %}

<!-- | Document | Description | Date Published |
| --- | --- | --- |
{%- for document in sorted_laws %}
| [ {{document.shortName}} ]({{site.baseurl}}/laws-policies-standards{{document.shortName | datapage_url: laws-policies-standards }}) | {{ document.description }} | {{document.published | date_to_string }} |
{%- endfor %} -->

<ul class="gsa-expand-collapse-group" title="Expand or Collapse All" aria-label="Expand or Collapse All">
  <li class="gsa-expand-button" onclick="expandToggle()" onkeydown="expandToggle()" title="Expand All" aria-label="Expand All" tabindex="0">   +   </li>
  <li class="gsa-collapse-button" onclick="collapseToggle()" onkeydown="collapseToggle()" title="Collapse All" aria-label="Collapse All" tabindex="0">   -   </li>
</ul>
{%- for document in sorted_laws %}
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button gsa-normal-text gsa-target-accordion-header" aria-expanded="false" aria-controls="gsa-a{{forloop.index}}">
      <strong>{{document.longName}}</strong> 
    </button>
  </h4>
  <div id="gsa-a{{forloop.index}}" class="usa-accordion__content usa-prose gsa-target-accordion-content-area gsa-card" onclick="navigateTo('{{site.baseurl}}/laws-policies-standards{{document.shortName | datapage_url: laws-policies-standards }}')" onkeydown="navigateTo('{{site.baseurl}}/laws-policies-standards{{document.shortName | datapage_url: laws-policies-standards }}')" aria-label="{{document.longName}}" tabindex="0">
        <p>{% if document.published %} Date: {{document.published | date_to_string }} {% endif %}</p>
        <p>
          {{document.description}}
        </p>
        <hr/>
        <div class="display-flex flex-column flex-align-end">  
          <span class="gsa-source usa-link">Source: {{document.shortName}}</span>
        </div>
  </div>
</div>
{% endfor %}
<br>
<hr/>

## Federal Policies

This table lists Federal Policies and directives published by OMB. They set a strategic direction for the entire Federal Government, and are the basis for development of the standards and technical guidance documents produced to support FICAM.

Laws are sorted by date, from oldest to newest.

Click on the name of a policy to see more details about it, and for a link to the policy itself.

{% assign sorted_policies = site.data.laws-policies-standards | where: "type", "Policy" | sort: "published", "last" %}

<!-- | Document | Description | Date Published |
| --- | --- | --- |
{%- for policies in sorted_policies %}
| [ {{policies.shortName}} ]({{site.baseurl}}/laws-policies-standards{{policies.shortName | datapage_url: laws-policies-standards }}) | {{ policies.description }} | {{policies.published | date_to_string }} |
{%- endfor %} -->

<ul class="gsa-expand-collapse-group" title="Expand or Collapse All" aria-label="Expand or Collapse All">
  <li class="gsa-expand-button" onclick="expandToggle()" onkeydown="expandToggle()" title="Expand All" aria-label="Expand All" tabindex="0">   +   </li>
  <li class="gsa-collapse-button" onclick="collapseToggle()" onkeydown="collapseToggle()" title="Collapse All" aria-label="Collapse All" tabindex="0">   -   </li>
</ul>
{%- for policies in sorted_policies %}
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button gsa-normal-text gsa-target-accordion-header" aria-expanded="false" aria-controls="gsa-b{{forloop.index}}">
      <strong>{{policies.longName}}</strong> 
    </button>
  </h4>
  <div id="gsa-b{{forloop.index}}" class="usa-accordion__content usa-prose gsa-target-accordion-content-area gsa-card" onclick="navigateTo('{{site.baseurl}}/laws-policies-standards{{policies.shortName | datapage_url: laws-policies-standards }}')" onkeydown="navigateTo('{{site.baseurl}}/laws-policies-standards{{policies.shortName | datapage_url: laws-policies-standards }}')" aria-label="{{policies.longName}}" tabindex="0">
        <p>{% if policies.published %} Date: {{policies.published | date_to_string }} {% endif %}</p>
        <p>{{policies.description}}</p>
        <hr/>
        <div class="display-flex flex-column flex-align-end">  
          <span class="gsa-source usa-link">Source: {{policies.shortName}}</span>
        </div>
  </div>
</div>
{% endfor %}
<br>
<hr/>

## Federal Technical Guidance

This table lists Technical Guidance published under ICAM. They provide technical details to support consistent, secure and effective implementation of the policies.

Click on the name of a guidance document to see more details about it, and for a link to the document itself.

{% assign sorted_guidance = site.data.laws-policies-standards | where: "type", "Guidance" | sort: "published", "last" %}

<!-- | Document | Description | Date Published |
| --- | --- | --- |
{%- for guidance in sorted_guidance %}
| [ {{guidance.shortName}} ]({{site.baseurl}}/laws-policies-standards{{guidance.shortName | datapage_url: laws-policies-standards }}) | {{ guidance.description }} | {{guidance.published | date_to_string }} |
{%-  endfor %} -->


<ul class="gsa-expand-collapse-group" title="Expand or Collapse All" aria-label="Expand or Collapse All">
  <li class="gsa-expand-button" onclick="expandToggle()" onkeydown="expandToggle()" title="Expand All" aria-label="Expand All" tabindex="0">   +   </li>
  <li class="gsa-collapse-button" onclick="collapseToggle()" onkeydown="collapseToggle()" title="Collapse All" aria-label="Collapse All" tabindex="0">   -   </li>
</ul>
{%- for guidance in sorted_guidance %}
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button gsa-normal-text gsa-target-accordion-header" aria-expanded="false" aria-controls="gsa-c{{forloop.index}}">
      <strong>{{guidance.longName}}</strong> 
    </button>
  </h4>
  <div id="gsa-c{{forloop.index}}" class="usa-accordion__content usa-prose gsa-target-accordion-content-area gsa-card" onclick="navigateTo('{{site.baseurl}}/laws-policies-standards{{guidance.shortName | datapage_url: laws-policies-standards }}')" onkeydown="navigateTo('{{site.baseurl}}/laws-policies-standards{{guidance.shortName | datapage_url: laws-policies-standards }}')" aria-label="{{guidance.longName}}" tabindex="0">
        <p>{% if guidance.published %} Date: {{guidance.published | date_to_string }} {% endif %}</p>
        <p>{{guidance.description}}</p>
        <hr/>
        <div class="display-flex flex-column flex-align-end">  
          <span class="gsa-source usa-link">Source: {{guidance.shortName}}</span>
        </div>
  </div>
</div>
{% endfor %}