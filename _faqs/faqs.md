---
layout: page
collection: faq
title:  Frequently Asked Questions
permalink: /faqs/
sidenav: faqs
sticky_sidenav: true

subnav:
  # - text: FAQ Section 1
  #   href: '#faq-1'

---

<br>
{% assign faqs = site.data.faqs %}
{% for faq in faqs %}
<!-- <ul class="gsa-expand-collapse-group" title="Expand or Collapse All" aria-label="Expand or Collapse All">
  <li class="gsa-collapse-button" onclick="collapseToggle()" title="Collapse All" aria-label="Collapse All">   -   </li>
  <li class="gsa-expand-button" onclick="expandToggle()" title="Expand All" aria-label="Expand All">   +   </li>
</ul> -->
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button gsa-normal-text gsa-target-accordion-header" aria-expanded="{{faq.expanded}}" aria-controls="gsa-{{forloop.index}}">
      <p>
       <span style="font-weight:700"> Q: </span> {{faq.question}}
      </p>
    </button>
  </h4>
  <div id="gsa-{{forloop.index}}" class="usa-accordion__content usa-prose gsa-target-accordion-content-area">
    <p>
        <span  style="font-weight:700"> A: </span> {{faq.answer}}

        <hr>
        {% assign tags = faq.tags | split: ", " %}
        <div>
        {% if tags.size > 1 %}
          <span>TAGS: </span>
        {% else %}
          <span>TAG: </span>
        {% endif %}
        {% for tag in tags %}
          <span class="usa-tag">{{tag}}</span>
        {% endfor %}
        {% if faq.link != "" %}
        <a style="text-align: right" href="{{faq.link}}" target="_blank" rel="noopener noreferrer">
            <span class="usa-tag"> Learn more... </span>
        </a>
        </div>
        {% endif %}
    </p>
  </div>
</div>
{% endfor %}