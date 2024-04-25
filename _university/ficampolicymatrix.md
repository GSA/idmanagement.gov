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

The FICAM policy map below presents a visual overview of the laws, policies and standards relevant to FICAM. The documents are organized according to the government body that produced it, and the relationships between the documents are illustrated by arrows connecting them.

Use the legend below in conjuction with the FICAM policy map to navigate to your desired information. 

<style>
  /* for legend pointer */
  tr.rowhover:hover {
    background-color: #cfcfcf;
    cursor: pointer;
  }
</style>
<table width="75%" style="border:1px solid #c0c0c0;">
  <tr>
    <th style="background-color: #dfe1e2;text-align:center;" colspan="2"><strong>Legend</strong></th>
  </tr>
  <tr>
    <th style="background-color: #dfe1e2;"><strong>Type</strong></th>
    <th style="background-color: #dfe1e2;"><strong>Role</strong></th>
  </tr>
  <tr class="rowhover" onclick="location.href='#laws-and-directives';">
    <td><span class="badge" style="color:#000;background-color:#cdeb8b;padding:14px;border-size:1;border-color:#000;">Executive Order</span></td>
    <td>A directive issued by the Office of the Presidency providing a basis for Federal Policies.</td>
  </tr>
  <tr class="rowhover" onclick="location.href='#laws-and-directives';">
    <td><span class="badge" style="color:#000;background-color:#ffcc99;padding:14px;border-size:1;border-color:#000;">Act of Congress</span></td>
    <td>A law passed by Congress providing a basis for Federal Policies.</td>
  </tr>
  <tr class="rowhover" onclick="location.href='#federal-policies';">
    <td><span class="badge" style="color:#000;background-color:#cce5ff;padding:14px;border-size:1;border-color:#000;">Federal Policy</span></td>
    <td>Rules governing the behavior of federal agencies.</td>
  </tr>
  <tr class="rowhover" onclick="location.href='#federal-technical-guidance';">
    <td><span class="badge" style="color:#000;background-color:#d8d8d8;padding:14px;border-size:1;border-color:#000;">Technical Standard</span></td>
    <td>Technical specifications that describe how to implement systems in accordance with Federal Policies.</td>
  </tr>
  <tr class="rowhover" onclick="location.href='#federal-technical-guidance';">
    <td><span class="badge" style="color:#000;background-color:rgb(221, 214, 229);padding:14px;border-size:1;border-color:#000;">Government Body</span></td>
    <td>An entity that issues laws, policies or technical standards.</td>
  </tr>
</table>

<br>

[![Visual overview of the laws, policies and standards relevant to FICAM, organized according to the government body that produced it. The relationships between the documents are illustrated by arrows connecting them.]({{site.baseurl}}/assets/img/icam-policy-landscape-map.png)]({{site.baseurl}}/university/policymap/){:target="_blank"}{:rel="noopener noreferrer"}

## Laws and Directives

This table lists the laws that establish or authorize the entities and activities listed in later tables.

Laws are sorted by date, from oldest to newest.

Click on the name of a law or directive to see more details about it, and for a link to the law itself.

{% assign sorted_laws = site.data.laws-policies-standards | where: "type", "Law" | sort: "published", "last" | sort: "longName" %}

<!-- | Document | Description | Date Published |
| --- | --- | --- |
{%- for document in sorted_laws %}
| [ {{document.shortName}} ]({{site.baseurl}}/laws-policies-standards{{document.shortName | datapage_url: laws-policies-standards }}) | {{ document.description }} | {{document.published | date_to_string }} |
{%- endfor %} -->

<ul class="gsa-expand-collapse-group" title="Expand or Collapse All" aria-label="Expand or Collapse All">
  <li class="gsa-expand-button" onclick="expandToggle()" onkeydown="expandToggle()" title="Expand All" aria-label="Expand All" tabindex="0">   +   </li>
  <li class="gsa-collapse-button" onclick="collapseToggle()" onkeydown="collapseToggle()" title="Collapse All" aria-label="Collapse All" tabindex="0">   -   </li>
</ul>

{%- for document in sorted_laws | group_by: document.authored-by[0].shortName %}

{% if document.authored-by[0].shortName == "White House" and document.type == "Law" %}
{% assign lawcolor = "#cdeb8b" %}

<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button gsa-normal-text gsa-target-accordion-header" aria-expanded="false" aria-controls="gsa-a{{forloop.index}}" style="background-color: {{lawcolor}}">
      <strong>{{document.longName}}</strong> 
    </button>
  </h4>
  <div id="gsa-a{{forloop.index}}" class="usa-accordion__content usa-prose gsa-target-accordion-content-area gsa-card" onclick="navigateTo('{{site.baseurl}}/laws-policies-standards{{document.shortName | datapage_url: laws-policies-standards }}')" onkeydown="navigateTo('{{site.baseurl}}/laws-policies-standards{{document.shortName | datapage_url: laws-policies-standards }}')" aria-label="{{document.longName}}" tabindex="0" style="border-color: {{lawcolor}}">
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
{% endif %}
{% endfor %}

{%- for document in sorted_laws | group_by: document.authored-by[0].shortName %}
{% if document.authored-by[0].shortName == "U.S. Congress" and document.type == "Law" %}
{% assign lawcolor = "#ffcc99" %}

<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button gsa-normal-text gsa-target-accordion-header" aria-expanded="false" aria-controls="gsa-a{{forloop.index}}" style="background-color: {{lawcolor}}">
      <strong>{{document.longName}}</strong> 
    </button>
  </h4>
  <div id="gsa-a{{forloop.index}}" class="usa-accordion__content usa-prose gsa-target-accordion-content-area gsa-card" onclick="navigateTo('{{site.baseurl}}/laws-policies-standards{{document.shortName | datapage_url: laws-policies-standards }}')" onkeydown="navigateTo('{{site.baseurl}}/laws-policies-standards{{document.shortName | datapage_url: laws-policies-standards }}')" aria-label="{{document.longName}}" tabindex="0" style="border-color: {{lawcolor}}">
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
{% endif %}
{% endfor %}

<br>
<hr/>

## Federal Policies

This table lists Federal Policies and directives published by OMB. They set a strategic direction for the entire Federal Government, and are the basis for development of the standards and technical guidance documents produced to support FICAM.

Laws are sorted by date, from oldest to newest.

Click on the name of a policy to see more details about it, and for a link to the policy itself.

{% assign sorted_policies = site.data.laws-policies-standards | where: "type", "Policy" | sort: "published", "last" | sort: "shortName" %}

<!-- | Document | Description | Date Published |
| --- | --- | --- |
{%- for policies in sorted_policies %}
| [ {{policies.shortName}} ]({{site.baseurl}}/laws-policies-standards{{policies.shortName | datapage_url: laws-policies-standards }}) | {{ policies.description }} | {{policies.published | date_to_string }} |
{%- endfor %} -->

<ul class="gsa-expand-collapse-group" title="Expand or Collapse All" aria-label="Expand or Collapse All">
  <li class="gsa-expand-button" onclick="expandToggle()" onkeydown="expandToggle()" title="Expand All" aria-label="Expand All" tabindex="0">   +   </li>
  <li class="gsa-collapse-button" onclick="collapseToggle()" onkeydown="collapseToggle()" title="Collapse All" aria-label="Collapse All" tabindex="0">   -   </li>
</ul>

{%- for policies in sorted_policies | group_by: policies.longName %}
{% if policies.authored-by[0].shortName == "DNI" %}
{% assign polcolor = "#cce5ff" %}
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button gsa-normal-text gsa-target-accordion-header" aria-expanded="false" aria-controls="gsa-b{{forloop.index}}" style="background-color: {{polcolor}}">
      <strong>{{policies.longName}}</strong> 
    </button>
  </h4>
  <div id="gsa-b{{forloop.index}}" class="usa-accordion__content usa-prose gsa-target-accordion-content-area gsa-card" onclick="navigateTo('{{site.baseurl}}/laws-policies-standards{{policies.shortName | datapage_url: laws-policies-standards }}')" onkeydown="navigateTo('{{site.baseurl}}/laws-policies-standards{{policies.shortName | datapage_url: laws-policies-standards }}')" aria-label="{{policies.longName}}" tabindex="0" style="border-color: {{polcolor}}">
        <p>{% if policies.published %} Date: {{policies.published | date_to_string }} {% endif %}</p>
        <p>{{policies.description}}</p>
        <hr/>
        <div class="display-flex flex-column flex-align-end">  
          <span class="gsa-source usa-link">Source: {{policies.shortName}}</span>
        </div>
  </div>
</div>
{% endif %}
{% endfor %}

{%- for policies in sorted_policies | group_by: policies.longName %}
{% if policies.authored-by[0].shortName == "OMB" %}
{% assign polcolor = "#cce5ff" %}
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button gsa-normal-text gsa-target-accordion-header" aria-expanded="false" aria-controls="gsa-b{{forloop.index}}" style="background-color: {{polcolor}}">
      <strong>{{policies.longName}}</strong> 
    </button>
  </h4>
  <div id="gsa-b{{forloop.index}}" class="usa-accordion__content usa-prose gsa-target-accordion-content-area gsa-card" onclick="navigateTo('{{site.baseurl}}/laws-policies-standards{{policies.shortName | datapage_url: laws-policies-standards }}')" onkeydown="navigateTo('{{site.baseurl}}/laws-policies-standards{{policies.shortName | datapage_url: laws-policies-standards }}')" aria-label="{{policies.longName}}" tabindex="0" style="border-color: {{polcolor}}">
        <p>{% if policies.published %} Date: {{policies.published | date_to_string }} {% endif %}</p>
        <p>{{policies.description}}</p>
        <hr/>
        <div class="display-flex flex-column flex-align-end">  
          <span class="gsa-source usa-link">Source: {{policies.shortName}}</span>
        </div>
  </div>
</div>
{% endif %}
{% endfor %}

{%- for policies in sorted_policies | group_by: policies.longName %}
{% if policies.authored-by[0].shortName == "OPM" %}
{% assign polcolor = "#cce5ff" %}
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button gsa-normal-text gsa-target-accordion-header" aria-expanded="false" aria-controls="gsa-b{{forloop.index}}" style="background-color: {{polcolor}}">
      <strong>{{policies.longName}}</strong> 
    </button>
  </h4>
  <div id="gsa-b{{forloop.index}}" class="usa-accordion__content usa-prose gsa-target-accordion-content-area gsa-card" onclick="navigateTo('{{site.baseurl}}/laws-policies-standards{{policies.shortName | datapage_url: laws-policies-standards }}')" onkeydown="navigateTo('{{site.baseurl}}/laws-policies-standards{{policies.shortName | datapage_url: laws-policies-standards }}')" aria-label="{{policies.longName}}" tabindex="0" style="border-color: {{polcolor}}">
        <p>{% if policies.published %} Date: {{policies.published | date_to_string }} {% endif %}</p>
        <p>{{policies.description}}</p>
        <hr/>
        <div class="display-flex flex-column flex-align-end">  
          <span class="gsa-source usa-link">Source: {{policies.shortName}}</span>
        </div>
  </div>
</div>
{% endif %}
{% endfor %}

<br>
<hr/>

## Federal Technical Guidance

This table lists Technical Guidance published under ICAM. They provide technical details to support consistent, secure and effective implementation of the policies.

Click on the name of a guidance document to see more details about it, and for a link to the document itself.

{% assign sorted_guidance = site.data.laws-policies-standards | where: "type", "Guidance" | sort: "published", "last" | sort: "longName" %}
{% assign guidance_authority = site.data.laws-policies-standards | where: "type", "Authority" %}

<!-- | Document | Description | Date Published |
| --- | --- | --- |
{%- for guidance in sorted_guidance %}
| [ {{guidance.shortName}} ]({{site.baseurl}}/laws-policies-standards{{guidance.shortName | datapage_url: laws-policies-standards }}) | {{ guidance.description }} | {{guidance.published | date_to_string }} |
{%-  endfor %} -->

<ul class="gsa-expand-collapse-group" title="Expand or Collapse All" aria-label="Expand or Collapse All">
  <li class="gsa-expand-button" onclick="expandToggle()" onkeydown="expandToggle()" title="Expand All" aria-label="Expand All" tabindex="0">   +   </li>
  <li class="gsa-collapse-button" onclick="collapseToggle()" onkeydown="collapseToggle()" title="Collapse All" aria-label="Collapse All" tabindex="0">   -   </li>
</ul>

{%- for authority in guidance_authority | sort: authority.shortName %}
{% if authority.shortName != "White House" and authority.shortName != "U.S. Congress" and authority.shortName != "USDS" and authority.shortName != "DOC" and authority.shortName != "OMB" and authority.shortName != "DNI" and authority.shortName != "CISOC" %} 
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button gsa-normal-text gsa-target-accordion-header" aria-expanded="false" aria-controls="gsa-c{{forloop.index}}" style="background-color: {{guicolor}}">
      <strong>{{authority.shortName}}</strong> 
    </button>
  </h4>
  <div id="gsa-c{{forloop.index}}" class="usa-accordion__content usa-prose gsa-target-accordion-content-area gsa-card" aria-label="{{guidance.longName}}" tabindex="0">
{% endif %}
{%- for guidance in sorted_guidance | group_by: guidance.longName %}
{% if guidance.authored-by[0].shortName == authority.shortName %}
{% assign guicolor = "rgb(216, 216, 216)" %}
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button gsa-normal-text gsa-target-accordion-header" aria-expanded="false" aria-controls="gsa-c{{forloop.index}}" style="background-color: {{guicolor}}">
      <strong>{{guidance.longName}}</strong> 
    </button>
  </h4>
  <div id="gsa-c{{forloop.index}}" class="usa-accordion__content usa-prose gsa-target-accordion-content-area gsa-card" onclick="navigateTo('{{site.baseurl}}/laws-policies-standards{{guidance.shortName | datapage_url: laws-policies-standards }}')" onkeydown="navigateTo('{{site.baseurl}}/laws-policies-standards{{guidance.shortName | datapage_url: laws-policies-standards }}')" aria-label="{{guidance.longName}}" tabindex="0" style="border-color: {{guicolor}}">
        <p>{% if guidance.published %} Date: {{guidance.published | date_to_string }} {% endif %}</p>
        <p>{{guidance.description}}</p>
        <hr/>
        <div class="display-flex flex-column flex-align-end">  
          <span class="gsa-source usa-link">Source: {{guidance.shortName}}</span>
        </div>
  </div>
</div>
{% endif %}
  </div>
</div>
{% endfor %}
{% endfor %}


### Annual Updates

Annually and throughout the year, when documents from this authoring organization are updated, deprecated, or superseded, a schedule of when each affected document is expected to be replaced or updated by this authoring organization will be placed below. 

Please return to this section often to ensure you are accessing the most up-to-date information.     

<hr>

- No document updates at this time. 

<br>
<br><br>
