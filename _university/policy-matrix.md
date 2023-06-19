---
layout: page
collection: university
title: ICAM Policy Matrix
permalink: /university/policy-matrix/
sidenav: university
sticky_sidenav: true

subnav:
   - text: U.S. Laws
     href: '#laws'
   - text: Federal Policies
     href: '#policies'
   - text: Technical Standards
     href: '#standards'

---

# Laws

<hr/>
<ul class="gsa-expand-collapse-group" title="Expand or Collapse All" aria-label="Expand or Collapse All">
  <li class="gsa-expand-button" onclick="expandToggle()" onkeydown="expandToggle()" title="Expand All" aria-label="Expand All" tabindex="0">   +   </li>
  <li class="gsa-collapse-button" onclick="collapseToggle()" onkeydown="collapseToggle()" title="Collapse All" aria-label="Collapse All" tabindex="0">   -   </li>
</ul>
{% assign lcount = 0 %}
{% for law in site.data.laws %} 
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button gsa-normal-text gsa-target-accordion-header" aria-expanded="{{law.expanded}}" aria-controls="gsa-{{forloop.index}}">
      {{law.name}} ({{law.pubdate}})
    </button>
  </h4>
  <div id="gsa-{{forloop.index}}" class="usa-accordion__content usa-prose gsa-target-accordion-content-area gsa-card" onclick="navigateTo('{{law.url}}')" onkeydown="navigateTo('{{law.url}}')" aria-label="{{law.name}}" tabindex="0">
        <div class="display-flex flex-column flex-align-end">
          <span class="usa-tag">{{law.doctype}}</span>
        </div>
        <p>{{law.summary}}</p>
        <hr/>
        <div class="display-flex flex-column flex-align-end">  
          <span class="gsa-source usa-link usa-link--external">Source: {{law.source}}</span>
        </div>
        <!-- 
        <div class="display-flex flex-column flex-align-end">
            <button class="usa-button"><span class="usa-link usa-link--external" style="color: white">View</span></button>
        </div>
        -->
  </div>
</div>
{% endfor %}

# Policies

<hr/>
<ul class="gsa-expand-collapse-group" title="Expand or Collapse All" aria-label="Expand or Collapse All">
  <li class="gsa-expand-button" onclick="expandToggle()" onkeydown="expandToggle()" title="Expand All" aria-label="Expand All" tabindex="0">   +   </li>
  <li class="gsa-collapse-button" onclick="collapseToggle()" onkeydown="collapseToggle()" title="Collapse All" aria-label="Collapse All" tabindex="0">   -   </li>
</ul>
{% assign lcount = 0 %}
{% for policy in site.data.policies %}
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button gsa-normal-text gsa-target-accordion-header" aria-expanded="{{policy.expanded}}" aria-controls="gsa-{{forloop.index}}">
      {{policy.name}} ({{policy.pubdate}})
    </button>
  </h4>
  <div id="gsa-{{forloop.index}}" class="usa-accordion__content usa-prose gsa-target-accordion-content-area gsa-card" onclick="navigateTo('{{policy.url}}')" onkeydown="navigateTo('{{policy.url}}')" aria-label="{{policy.name}}" tabindex="0">
        <div class="display-flex flex-column flex-align-end">
          <span class="usa-tag">{{policy.doctype}}</span>
        </div>
        <p>{{policy.summary}}</p>
        <hr/>
        <div class="display-flex flex-column flex-align-end">
            <span class="gsa-source usa-link usa-link--external">Source: {{policy.source}}</span>
        </div>
        <!--
        <div class="display-flex flex-column flex-align-end">
            <button class="usa-button">View</button>
        </div> 
        -->
  </div>
</div>
{% endfor %}

# Standards

<hr/>
<ul class="gsa-expand-collapse-group" title="Expand or Collapse All" aria-label="Expand or Collapse All">
  <li class="gsa-expand-button" onclick="expandToggle()" onkeydown="expandToggle()" title="Expand All" aria-label="Expand All" tabindex="0">   +   </li>
  <li class="gsa-collapse-button" onclick="collapseToggle()" onkeydown="collapseToggle()" title="Collapse All" aria-label="Collapse All" tabindex="0">   -   </li>
</ul>
{% assign lcount = 0 %}
{% for standard in site.data.standards %}
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button gsa-normal-text gsa-target-accordion-header" aria-expanded="{{standard.expanded}}" aria-controls="gsa-{{forloop.index}}">
      {{standard.name}} ({{standard.pubdate}})
    </button>
  </h4>
  <div id="gsa-{{forloop.index}}" class="usa-accordion__content usa-prose usa-prose gsa-target-accordion-content-area gsa-card" onclick="navigateTo('{{standard.url}}')" onkeydown="navigateTo('{{standard.url}}')" aria-label="{{standard.name}}" tabindex="0">
        <div class="display-flex flex-column flex-align-end">
          <span class="usa-tag">{{standard.doctype}}</span>
        </div>
        <p>{{standard.summary}}</p>
        <hr/>
        <div class="display-flex flex-column flex-align-end">
            <span class="gsa-source usa-link usa-link--external">Source: {{standard.source}}</span>
        </div>
        <!-- 
        <div class="display-flex flex-column flex-align-end">
            <button class="usa-button">View</button>
        </div> 
        -->
  </div>
</div>
{% endfor %}