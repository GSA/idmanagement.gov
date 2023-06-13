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
  <li class="gsa-expand-button" onclick="expandToggle()" onkeydown="expandToggle()" title="Expand All" aria-label="Expand All" tabindex="0">   +   </li>
  <li class="gsa-collapse-button" onclick="collapseToggle()" onkeydown="collapseToggle()" title="Collapse All" aria-label="Collapse All" tabindex="0">   -   </li>
</ul>
{% assign lcount = 0 %}
{% for resource in site.data.resources %}
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button gsa-normal-text gsa-target-accordion-header gsa-target-accordion-header" aria-expanded="{{resource.expanded}}" aria-controls="gsa-{{forloop.index}}">
      {{resource.name}} ({{resource.pubdate}})
    </button>
  </h4>
  <div id="gsa-{{forloop.index}}" class="usa-accordion__content usa-prose gsa-target-accordion-content-area gsa-card" onclick="navigateTo('{{resource.url}}')" onkeydown="navigateTo('{{resource.url}}')" aria-label="{{resource.name}}" tabindex="0">
        <div class="display-flex flex-column flex-align-end">
          <span class="usa-tag">{{resource.doctype}}</span>
        </div>
        <p>{{resource.summary}}</p>
        <hr/>
        <div class="display-flex flex-column flex-align-end">
            <span class="gsa-source usa-link usa-link--external">Source: {{resource.source}}</span>
        </div>
        <!-- 
        <div class="display-flex flex-column flex-align-end">
            <button class="usa-button">View</button>
        </div> 
        -->
  </div>
</div>
{% endfor %}