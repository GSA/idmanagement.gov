---
layout: page
collection: faq
title:  Frequently Asked Questions
permalink: /faqs/
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

{% assign faqs = site.data.faqs %}
{% for faq in faqs %}
<!-- <ul class="gsa-expand-collapse-group" title="Expand or Collapse All" aria-label="Expand or Collapse All">
  <li class="gsa-collapse-button" onclick="collapseToggle()" title="Collapse All" aria-label="Collapse All">   -   </li>
  <li class="gsa-expand-button" onclick="expandToggle()" title="Expand All" aria-label="Expand All">   +   </li>
</ul> -->
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button gsa-normal-text gsa-target-accordion-header" aria-expanded="{{faq.expanded}}" aria-controls="gsa-{{forloop.index}}">
      <p><span class="usa-tag"> Q: </span> {{faq.question}}</p>
      <hr>
      {% assign tags = faq.tags | split: ", " %}
      <span class="text-right">
      {% for tag in tags %}
        <span class="usa-tag">{{tag}}</span>
      {% endfor %}
      </span>
    </button>
  </h4>
  <div id="gsa-{{forloop.index}}" class="usa-accordion__content usa-prose gsa-target-accordion-content-area">
    <p>
        <span class="usa-tag"> A: </span> {{faq.answer}}
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