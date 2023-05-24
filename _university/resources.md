---
layout: page
collection: university
title:  Additional Resources
permalink: /university/resources/
sidenav: university
sticky_sidenav: true

---

<!-- Additional Resources -->


<hr/>
<ul class="gsa-expand-collapse-group" title="Expand or Collapse All" aria-label="Expand or Collapse All">
  <li class="gsa-collapse-button" onclick="collapseToggle()" title="Collapse All" aria-label="Collapse All" tabindex=0>   -   </li>
  <li class="gsa-expand-button" onclick="expandToggle()" title="Expand All" aria-label="Expand All" tabindex=0>   +   </li>
</ul>
{% assign lcount = 0 %}
{% for resource in site.data.resources %}
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button gsa-normal-text gsa-target-accordion-header gsa-target-accordion-header" aria-expanded="{{resource.expanded}}" aria-controls="gsa-{{forloop.index}}">
      {{resource.name}} ({{resource.pubdate}})
    </button>
  </h4>
  <div id="gsa-{{forloop.index}}" class="usa-accordion__content usa-prose gsa-target-accordion-content-area" >
    <p>
        <div class="display-flex flex-column flex-align-end">
          <span class="usa-tag">{{resource.doctype}}</span>
        </div>
        <p>{{resource.summary}}</p>
        <div class="display-flex flex-column flex-align-end">
            <span class="gsa-source">Source: {{resource.source}}</span>
        </div>
        <hr/>
        <div class="display-flex flex-column flex-align-end">
        <a href="{{resource.url}}" target="{{resource.target}}" rel="noopener noreferrer">
            <button class="usa-button">View</button>
        </a>
        </div>
    </p>
  </div>
</div>
{% endfor %}