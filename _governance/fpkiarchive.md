---
layout: page
collection: governance
title:  FPKI Document Archive
permalink: governance/fpkiarchive/
sidenav: governance
sticky_sidenav: true

---

{% assign categories = "" | split: "" %}
{% for docs in site.data.fpkidocs %}
  {% assign category = docs.category | strip %}
  {% assign categories = categories | push: category | uniq | sort %}
{% endfor %}
{% assign categories = categories | uniq | sort %}

This pages contains three years of FPKI documents including:
- Certificate Policies
- Certificate Profiles
- Supplementary Guideance
- Change Proposals

If you seek a document that is older than three years or not listed here, please contact fpki at gsa.gov

<table class="usa-table--borderless docs-table">
  <thead class="usa-sr">
    <tr>
      <th id="docs-table-heading-name" scope="col">Document Name</th>
      <th id="docs-table-heading-date" scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    {% for category in categories %}
      <tr class="docs-table-category-heading" data-category="{{ category }}">
        <th colspan="2" class="docs-table-heading" id="docs-table-heading-{{ category | slugify }}"><b>{{ category }}</b></th>
      </tr>
      {% for docs in site.data.fpkidocs %}
        {% if docs.category == category %}
          <tr class="docs-table-row" data-category="{{ docs.category }}">
            <td headers="docs-table-heading-{{ category | slugify }} docs-table-heading-name"><a href="{{ docs.url | prepend: site.baseurl }}" target="_blank">{{ docs.name}}</a></td>
            <td headers="docs-table-heading-{{ category | slugify }} docs-table-heading-date">{{ docs.date }}</td>
          </tr>
        {% endif %}
      {% endfor %} <!--docs-->
    {% endfor %}<!--category-->
  </tbody>
</table>