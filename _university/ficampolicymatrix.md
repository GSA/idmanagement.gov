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
  - text: Upcoming Documents and Revisions
    href: "#upcoming-documents-and-revisions"
    
---

## Introduction

Laws, executive policies, regulations, and government standards drive multiple federal initiatives related to Federal Identity, Credential and Access Management. The Federal Identity and Cybersecurity Division maintains this policy matrix to map delegations and authorities. ICAM Partners can use this matrix to understand the origins and ultimate authority of ICAM initiatives.

**Click the header section to navigate to the appropriate part of the list.*
<style>
  /* needed to remove underline in links - do not remove */    
  a {
    text-decoration: none;
  }

/* Act of Congress Buttons */
  #aocbutton {
    /* background-color: #ffcc99; */
    background-color: #ffe6cc;
    cursor: pointer;
    font-family: Arial-BoldMT, Arial; 
    font-size: 14 px; 
    font-weight: 700;
    text-align: center;
  }
  #aocbutton:hover {
    background-color: rgba(174, 174, 174, 0.92);
  }

  /* Executive Order Buttons */
  #eobutton {
    /* background-color: rgb(205, 235, 139); */
    background-color: #d5e8d4;
    cursor: pointer;
    font-family: Arial-BoldMT, Arial; 
    font-size: 14 px;
    font-weight: 700;
    text-align: center;
  }
  #eobutton:hover  {
    background-color: rgba(174, 174, 174, 0.92);
  }

  /* OMB and OPM Buttons */
  #fpbutton {
    /* background-color: rgb(204, 229, 255); */
    background-color: #CCE5FF;
    cursor: pointer;
    font-family: Arial-BoldMT, Arial; 
    font-size: 14 px;
    font-weight: 700;
    text-align: center;
  }
  #fpbutton:hover  {
    background-color: rgba(174, 174, 174, 0.92);
  }

  /* Technical Standard Buttons */
  #tsbutton {
    /* background-color: rgb(216, 216, 216); */
    background-color: #eeeeee;
    cursor: pointer;
    font-family: Arial-BoldMT, Arial; 
    font-size: 14 px;
    font-weight: 700;
    text-align: center;
  }
  #tsbutton:hover  {
    background-color: rgba(174, 174, 174, 0.92);
  }

  #gbbutton {
    /* background-color: rgb(181, 159, 205); */
    background-color: #e6e4fa;
    cursor: pointer;
    font-family: Arial-BoldMT, Arial; 
    font-size: 14 px;
    font-weight: 700;
    text-align: center; 
  }
  #gbbutton:hover  {
    background-color: rgba(174, 174, 174, 0.92);
  } 
  /* Tags below each clickable item in the legend(Key) */
  #aoctag {
    background-color: #ffcc99;
    font-size:10 pt;
    text-align:center;
  }
  #eotag {
    background-color: rgb(205, 235, 139);
    font-size:10 pt;
    text-align:center;
  }
  #fptag {
    background-color: #C0D7F0;
    font-size:10 pt;
    text-align:center;
  } 
  #gbtag {
    background-color: rgb(181, 159, 205);
    font-size:10 pt;
    text-align:center;
  }
  #tstag {
    background-color: rgb(216, 216, 216);
    font-size:10 pt;
    text-align:center;
  }
</style>

<table class="responsive">
<caption>Policy category key</caption>
<tbody>
  <tr>
    <th scope="row" id="aocbutton" onclick="location.href='#laws-and-directives'">Act of Congress</th>
    <td id="eobutton" onclick="location.href='#laws-and-directives'">Executive Order</td>
    <td id="fpbutton" onclick="location.href='#federal-policies'">Federal Policy</td>
    <td id="gbbutton" onclick="location.href='#federal-technical-guidance'">Government Agency</td>
    <td id="tsbutton" onclick="location.href='#federal-technical-guidance'">Technical Standard</td>
  </tr>
  <tr>
    <th id="aoctag" scope="row">Congress</th>
    <td id="eotag">White House</td>
    <td id="fptag">OMB/DNI/OPM</td> 
    <td id="gbtag">GSA/CIO Council/ICAMSC/FPKIPA</td>
    <td id="tstag">NIST/ISC/NSA/FedRAMP</td>
  </tr>
</tbody>
</table>


## Policy Overview

The FICAM policy map presents a visual overview of the laws, policies and standards relevant to FICAM. The documents are organized according to the government body that produced it, and the relationships between the documents are illustrated by arrows connecting them.

Click the button below to navigate to the FICAM Policy Matrix Map. 

<p style="text-align:center;">
<br>
  <a href="{{site.baseurl}}/university/policymap/" title="Cliick to view the FICAM Policy Matrix Map" class="usa-button" type="button">
     View the FICAM Policy Matrix Map <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#arrow_forward"></use></svg>
  </a>
</p>


## Laws and Directives

This table lists the laws that establish or authorize the entities and activities listed in later tables.

Laws are sorted by date, from oldest to newest.

**Click on the name of a Law or Directive to see more details about it, click on the details area to open the Law or Directive in a new window.*

{% assign sorted_laws = site.data.laws-policies-standards | where: "type", "Law" | sort: "published", "last" | sort: "longName" %}

<style>
  /* For White House Accordions */
  .whitehouse {
    background-color: #cdeb8b;
  }
  .whitehouse:hover {
    background-color: #b4cf79; /* New */
  }
  /* For Congress Accordions */
  .congress {
    background-color: #ffcc99;
  }
  .congress:hover {
    background-color: #e2b588; /* New */
  }
  /* For Federal Accordions */
  .federal {
    background-color: #cce5ff;
  }
  .federal:hover {
    background-color: #d3e5ff; /* New */
  }
  /* For Guidance Accordions */
  .guidance {
    background-color: rgb(216,216,216);
  }
  .guidance:hover {
    background-color: rgb(187,187,187); /* New */
  }
  /* For Goverment Body - color only */
  .govbody {
      /* background-color: rgb(221,214,229); */
      background-color: #b59fcd;
  }
  .govbody:hover {
      /* background-color: rgb(188,179,198); */
      background-color: #9d8ab2;
  }

</style>

<ul class="gsa-expand-collapse-group" title="Expand or Collapse All" aria-label="Expand or Collapse All">
  <li class="gsa-expand-button" onclick="expandToggle()" onkeydown="expandToggle()" title="Expand All" aria-label="Expand All" tabindex="0">   +   </li>
  <li class="gsa-collapse-button" onclick="collapseToggle()" onkeydown="collapseToggle()" title="Collapse All" aria-label="Collapse All" tabindex="0">   -   </li>
</ul>

{%- for document in sorted_laws %}
{% if document.authored-by[0].shortName == "U.S. Congress" and document.type == "Law" %}
{% assign lawcolor = "#ffcc99" %}

<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button gsa-normal-text gsa-target-accordion-header congress" aria-expanded="false" aria-controls="gsa-b{{forloop.index}}">
      <strong>{{document.longName}}</strong> 
    </button>
  </h4>
  <div id="gsa-b{{forloop.index}}" class="usa-accordion__content usa-prose gsa-target-accordion-content-area gsa-card" onclick="navigateTo('{{document.externalURL}}')" onkeydown="navigateTo('{{document.externalURL}}')" aria-label="{{document.longName}}" tabindex="0" style="border-color: {{lawcolor}};">
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

{%- for document in sorted_laws %}
{% if document.authored-by[0].shortName == "White House" and document.type == "Law" %}
{% assign lawcolor = "#cdeb8b" %}

<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button gsa-normal-text gsa-target-accordion-header whitehouse" aria-expanded="false" aria-controls="gsa-a{{forloop.index}}">
      <strong>{{document.longName}}</strong> 
    </button>
  </h4>
  <div id="gsa-a{{forloop.index}}" class="usa-accordion__content usa-prose gsa-target-accordion-content-area gsa-card" onclick="navigateTo('{{document.externalURL}}')" onkeydown="navigateTo('{{document.externalURL}}')" aria-label="{{document.longName}}" tabindex="0" style="border-color: {{lawcolor}};">
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

**Click on the name of a Federal Policy to see more details about it, click on the details area to open the policy in a new window.*

{% assign sorted_policies = site.data.laws-policies-standards | where: "type", "Policy" | sort: "published", "last" | sort: "shortName" %}

<ul class="gsa-expand-collapse-group" title="Expand or Collapse All" aria-label="Expand or Collapse All">
  <li class="gsa-expand-button" onclick="expandToggle()" onkeydown="expandToggle()" title="Expand All" aria-label="Expand All" tabindex="0">   +   </li>
  <li class="gsa-collapse-button" onclick="collapseToggle()" onkeydown="collapseToggle()" title="Collapse All" aria-label="Collapse All" tabindex="0">   -   </li>
</ul>

{%- for policies in sorted_policies %}
{% if policies.authored-by[0].shortName == "DNI" %}
{% assign polcolor = "#cce5ff" %}
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button gsa-normal-text gsa-target-accordion-header federal" aria-expanded="false" aria-controls="gsa-c{{forloop.index}}">
      <strong>{{policies.longName}}</strong> 
    </button>
  </h4>
  <div id="gsa-c{{forloop.index}}" class="usa-accordion__content usa-prose gsa-target-accordion-content-area gsa-card" onclick="navigateTo('{{policies.externalURL}}')" onkeydown="navigateTo('{{policies.externalURL}}')" aria-label="{{policies.longName}}" tabindex="0" style="border-color: {{polcolor}};">
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

{%- for policies in sorted_policies %}
{% if policies.authored-by[0].shortName == "OMB" %}
{% assign polcolor = "#cce5ff" %}
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button gsa-normal-text gsa-target-accordion-header federal" aria-expanded="false" aria-controls="gsa-c{{forloop.index}}">
      <strong>{{policies.longName}}</strong> 
    </button>
  </h4>
  <div id="gsa-c{{forloop.index}}" class="usa-accordion__content usa-prose gsa-target-accordion-content-area gsa-card" onclick="navigateTo('{{policies.externalURL}}')" onkeydown="navigateTo('{{policies.externalURL}}')" aria-label="{{policies.longName}}" tabindex="0" style="border-color: {{polcolor}};">
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

{%- for policies in sorted_policies %}
{% if policies.authored-by[0].shortName == "OPM" %}
{% assign polcolor = "#cce5ff" %}
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button gsa-normal-text gsa-target-accordion-header federal" aria-expanded="false" aria-controls="gsa-c{{forloop.index}}">
      <strong>{{policies.longName}}</strong> 
    </button>
  </h4>
  <div id="gsa-c{{forloop.index}}" class="usa-accordion__content usa-prose gsa-target-accordion-content-area gsa-card" onclick="navigateTo('{{policies.externalURL}}')" onkeydown="navigateTo('{{policies.externalURL}}')" aria-label="{{policies.longName}}" tabindex="0" style="border-color: {{polcolor}};">
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

**Click on the name of a Federal Technical Guidance document to see more details about it, click on the details area to open the document in a new window.*

{% assign sorted_guidance = site.data.laws-policies-standards | where: "type", "Guidance" | sort: "published", "last" | sort: "shortName" %}
{% assign guidance_authority = site.data.laws-policies-standards | where: "type", "Authority" %}

<ul class="gsa-expand-collapse-group" title="Expand or Collapse All" aria-label="Expand or Collapse All">
  <li class="gsa-expand-button" onclick="expandToggle()" onkeydown="expandToggle()" title="Expand All" aria-label="Expand All" tabindex="0">   +   </li>
  <li class="gsa-collapse-button" onclick="collapseToggle()" onkeydown="collapseToggle()" title="Collapse All" aria-label="Collapse All" tabindex="0">   -   </li>
</ul>
{% assign govbody = "rgb(221,214,229);" %}
{%- for authority in guidance_authority %}
{% if authority.shortName != "White House" and authority.shortName != "U.S. Congress" and authority.shortName != "DOC" and authority.shortName != "OMB" and authority.shortName != "DNI" and authority.shortName != "CISOC" %} 
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button gsa-normal-text gsa-target-accordion-header govbody" aria-expanded="false" aria-controls="gsa-d{{forloop.index}}" >
      <strong>{{authority.longName}} ({{authority.shortName}})</strong> 
    </button>
  </h4>
  <div id="gsa-d{{forloop.index}}" class="usa-accordion__content usa-prose gsa-target-accordion-content-area" aria-label="{{guidance.longName}}" tabindex="0" style="border-color: {{govbody}}">
{% endif %}

{% for guidance in sorted_guidance %}
{% for authors in guidance.authored-by %}
{% if authority.shortName == authors.shortName %}
{% assign guicolor = "rgb(216,216,216);" %}

<div class="usa-accordion usa-accordion--bordered">
<h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button gsa-normal-text gsa-target-accordion-header" aria-controls="gsa-e1{% increment innerloop %}"  aria-expanded="false" style="background-color: {{guicolor}};">
      <strong>{{guidance.longName}}</strong> 
    </button>
</h4>
  <div id="gsa-e1{% increment innerloop -1 %}" class="usa-accordion__content usa-prose gsa-target-accordion-content-area gsa-card" onclick="navigateTo('{{guidance.externalURL}}')" onkeydown="navigateTo('{{guidance.externalURL}}')" aria-label="{{guidance.longName}}" tabindex="0" style="border-color: {{guicolor}};">
        <p>{% if guidance.published %} Date: {{guidance.published | date_to_string }} {% endif %}</p>
        <p>{{guidance.description}}</p>
        <hr/>
        <div class="display-flex flex-column flex-align-end">  
          <span class="gsa-source usa-link">Source: {{guidance.shortName}}</span> 
        </div>
  </div>
</div>

{% endif %}

{% endfor %}
{% endfor %}

{% if authority.shortName != "White House" and authority.shortName != "U.S. Congress" and authority.shortName != "DOC" and authority.shortName != "OMB" and authority.shortName != "DNI" and authority.shortName != "CISOC" %} 
  </div>
</div>
{% endif %}
{% endfor %}


## Upcoming Documents and Revisions

Some of the documents referenced in this matrix are managed by other agencies and organizations. The matrix is updated on an annual basis. The table below provides links to documents that have been updated or are in the process of being updated. The references in the matrix above will be updated at the next regular update. 

*Please return to this section often to ensure you are accessing the most up-to-date information.*    

<hr>

|  Name	     |  Status |
|:-----------|----|
| [SP 800-63A-4 (2nd Public Draft)](https://csrc.nist.gov/pubs/sp/800/63/a/4/2pd){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} | Updated |
| [SP 800-63B-4 (2nd Public Draft)](https://csrc.nist.gov/pubs/sp/800/63/b/4/2pd){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} | Updated |	
| [SP 800-63C-4 (2nd Public Draft)](https://csrc.nist.gov/pubs/sp/800/63/c/4/2pd){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} | Updated |
| [SP 800-73-5 Pt 1](https://csrc.nist.gov/pubs/sp/800/73/pt1/5/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}<br> [SP 800-73-5 Pt 2](https://csrc.nist.gov/pubs/sp/800/73/pt2/5/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}<br> [SP 800-73-5 Part 3](https://csrc.nist.gov/pubs/sp/800/73/pt3/5/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}  | Updated |
| [SP 800-78-5](https://csrc.nist.gov/pubs/sp/800/78/5/final){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}  | Updated |

<br><br>
