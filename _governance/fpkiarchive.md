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

An FPKI document may be needed for three years for compliance review purposes. This pages contains three years of FPKI document including:
- Certificate Policies
- Certificate Profiles
- Supplementary Guidance
- Change Proposals

A blank category indicates no updates in the previous three years. If you seek a document that is older than three years or not listed here, please contact fpki at gsa.gov or look in the [archived document repository on github](https://github.com/GSA/idmanagement.gov/tree/staging/docs/archived){:target="_blank"}{:rel="noopener noreferrer"} 

<table class="usa-table usa-table--borderless usa-table--striped">
  <thead>
    <tr>
      <th id="docs-table-heading-name" scope="col">Document Name</th>
      <th id="docs-table-heading-date" scope="col">Removal From Archive</th>
    </tr>
  </thead>
  <tbody>
    {% for category in categories %}
      <tr class="docs-table-category-heading" data-category="{{ category }}">
        <th colspan="2" class="docs-table-heading" id="docs-table-heading-{{ category | slugify }}"><b>{{ category }}</b></th>
      </tr>
      {% for docs in site.data.fpkidocs %}
        {% if docs.status == "post" %}
          {% if docs.category == category %}
            <tr class="docs-table-row" data-category="{{ docs.category }}">
              <td headers="docs-table-heading-{{ category | slugify }} docs-table-heading-name"><a href="{{ docs.url | prepend: site.baseurl }}" target="_blank" rel="noopener noreferrer">{{ docs.name}}</a></td>
              <td headers="docs-table-heading-{{ category | slugify }} docs-table-heading-date">{{ docs.remove }}</td>
            </tr>
           {% endif %} 
        {% endif %}
      {% endfor %} <!--docs-->
    {% endfor %}<!--category-->
  </tbody>
</table>
