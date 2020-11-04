---
layout: default
title:  Use Cases
collection: arch
permalink: arch/usecases/
subnav: arch
---

These use cases are designed for ICAM Enterprise Architects and business owners, and describe some of the most common ICAM business processes.

Each use case includes a high-level summary of the scenario, individuals and systems involved in the use case, illustrations that show the required steps to achieve the end goal, and an icon that indicates the practice area and the service with which the use case most closely aligns.

For details about ICAM services, see the [Services Framework](../services).

While each use case describes a particular ICAM business process, the use cases are all interrelated. The use cases generalize the activities and technologies to make sure they apply across many agencies. The use cases don’t include agency-specific functions and process details because your agency should analyze your systems and processes to align with these broad use cases.

You can combine or build upon the ICAM use cases to support your agency’s scenarios and needs.

#### List of FICAM Use Cases
<div id="home">
  <ul class="pages">
    {% for page in site.arch %}
	    {% if page.title != 'Use Cases' %}
        <li>
          <a href="{{ site.baseurl }}{{ page.url }}">{{ page.title }}</a>
        </li>
	    {% endif %}
    {% endfor %}
  </ul>
</div>
