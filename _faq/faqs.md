---
layout: page
collection: faq
title:  Frequently Asked Questions
permalink: /faq/
sidenav: faq
sticky_sidenav: true

subnav:
  # - text: FAQ Section 1
  #   href: '#faq-1'
  # - text: FAQ Section 2
  #   href: '#faq-2'
  # - text: FAQ Section 3
  #   href: '#faq-3'
  # - text: FAQ Section 4
  #   href: '#faq-4'

---

{% assign lcount = 0 %}
{% for faq in site.data.faqs %}
<hr>
<ul class="gsa-expand-collapse-group" title="Expand or Collapse All" aria-label="Expand or Collapse All">
  <li class="gsa-collapse-button" onclick="collapseToggle()" title="Collapse All" aria-label="Collapse All">   -   </li>
  <li class="gsa-expand-button" onclick="expandToggle()" title="Expand All" aria-label="Expand All">   +   </li>
</ul>
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button gsa-normal-text gsa-target-accordion-header" aria-expanded="{{law.expanded}}" aria-controls="gsa-{{forloop.index}}">
      {{faq.question}}
    </button>
  </h4>
  <div id="gsa-{{forloop.index}}" class="usa-accordion__content usa-prose gsa-target-accordion-content-area">
    <p>
        {{faq.answer}}
        <hr/>
        {% if faq.link != "" %}
        <div class="display-flex flex-column flex-align-end">
        <a href="{{faq.link}}" target="_blank" rel="noopener noreferrer">
            <button class="usa-button">Learn more...</button>
        </a>
        </div>
        {% endif %}
    </p>
  </div>
</div>
{% endfor %}