---
layout: page
collection: university
title: Standards
permalink: /university/standards/
sidenav: university
sticky_sidenav: true


subnav:
#   - text: Laws
#     href: '#laws'
pdf: "docs/ficam-arch.pdf"

---

<!-- Standards -->

Review the federal standards that impact and shape the implementations of ICAM programs and systems.

<hr/>
<ul class="gsa-expand-collapse-group" title="Expand or Collapse All" aria-label="Expand or Collapse All">
  <li class="gsa-collapse-button" onclick="collapseToggle()" title="Collapse All" aria-label="Collapse All" tabindex=0>   -   </li>
  <li class="gsa-expand-button" onclick="expandToggle()" title="Expand All" aria-label="Expand All" tabindex=0>   +   </li>
</ul>
{% assign lcount = 0 %}
{% for standard in site.data.standards %}
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button gsa-normal-text gsa-target-accordion-header" aria-expanded="{{standard.expanded}}" aria-controls="gsa-{{forloop.index}}">
      {{standard.name}} ({{standard.pubdate}})
    </button>
  </h4>
  <a class="gsa-no-dec gsa-aclink" href="{{standard.url}}" target="{{standard.target}}" rel="noopener noreferrer" tabindex="-1">
  <div id="gsa-{{forloop.index}}" class="usa-accordion__content usa-prose usa-prose gsa-target-accordion-content-area">
    <p>
        <div class="display-flex flex-column flex-align-end">
          <span class="usa-tag">{{standard.doctype}}</span>
        </div>
        <p>{{standard.summary}}</p>
        <hr/>
        <div class="display-flex flex-column flex-align-end">
            <span class="gsa-source  usa-link usa-link--external">Source: {{standard.source}}</span>
        </div>
        <!-- 
        <div class="display-flex flex-column flex-align-end">
            <button class="usa-button">View</button>
        </div> 
        -->
    </p>
  </div>
  </a>
</div>
{% endfor %}