---
layout: page
collection: university
title: U.S. Laws
permalink: /university/laws/
sidenav: university
sticky_sidenav: true


subnav:
#   - text: Laws
#     href: '#laws'
pdf: "docs/ficam-arch.pdf"

---

Review the federal laws that impact and shape the implementations of ICAM programs and systems.

<hr/>
<ul class="gsa-expand-collapse-group" title="Expand or Collapse All" aria-label="Expand or Collapse All">
  <li class="gsa-collapse-button" onclick="collapseToggle()" title="Collapse All" aria-label="Collapse All">   -   </li>
  <li class="gsa-expand-button" onclick="expandToggle()" title="Expand All" aria-label="Expand All">   +   </li>
</ul>
{% assign lcount = 0 %}
{% for law in site.data.laws %}
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button gsa-normal-text gsa-target-accordion-header" aria-expanded="{{law.expanded}}" aria-controls="gsa-{{forloop.index}}">
      {{law.name}} ({{law.pubdate}})
    </button>
  </h4>
  <div id="gsa-{{forloop.index}}" class="usa-accordion__content usa-prose gsa-target-accordion-content-area">
    <p>
        <div class="display-flex flex-column flex-align-end">
          <span class="usa-tag">{{law.doctype}}</span>
        </div>
        <p>{{law.summary}}</p>
        <div class="display-flex flex-column flex-align-end">
            <span class="gsa-source">Source: {{law.source}}</span>
        </div>
        <hr/>
        <div class="display-flex flex-column flex-align-end">
        <a href="{{law.url}}" target="{{law.target}}" rel="noopener noreferrer">
            <button class="usa-button">View</button>
        </a>
        </div>
    </p>
  </div>
</div>
{% endfor %}