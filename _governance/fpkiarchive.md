---
layout: page
collection: governance
title:  Federal PKI Document Archive
permalink: governance/fpkiarchive/
sidenav: governance
sticky_sidenav: true

subnav:
  - text: Products
    href: '#products'
  - text: Services
    href: '#services'
  - text: GSA Schedules
    href: '#gsa-schedules'
---

This pages contains three years of Federal PKI documents including:
- Certificate Policies
- Certificate Profiles
- Supplementary Guideance
- Change Proposals

If you seek a document that is older than three years or not listed here, please contact fpki at gsa.gov

<table class="usa-table--borderless fpkidocs-table">
    <thead class="usa-sr-only">
        <tr>
            <th id="fpkidocs-table-heading-name" scope="col">Name</th>
            <th id="fpkidocs-table-heading-date" scope="col">Date</th>
            <th id="fpkidocs-table-heading-description" scope="col">Description</th>
        </tr>
    </thead>
    <tbody>
        {% for category in categories %}
            <tr class="fpkidocs-table-category-heading" data-categories="{{ category }}">
                <th colspan="3" class="fpkidocs-table-heading" id="fpkidocs-table-heading-{{ category | slugify }}"><b>{{ category }}</b></th>
            </tr>
            {% for fpkidocs in site.data.fpkidocs %}
                {% if fpkidocs.category == category %}
                    <tr class="fpkidocs-table-row" data-category="{{ fpkidocs.category }}">
                        <td headers="fpkidocs-table-heading-{{ category | slugify }} fpkidocs-table-heading-name"><a href="{{ fpkidocs.url | prepend: site.baseurl }}">{{ fpkidocs.name }}</td>
                        <td headers="fpkidocs-table-heading-{{ category | slugify }} fpkidocs-table-heading-date">{{ fpkidocs.date }}</a></td>
                        <td headers="fpkidocs-table-heading-{{ category | slugify }} fpkidocs-table-heading-description">{{ fpkidocs.description }}</a></td>
                    </tr>
                {% endif %}
            {% endfor %} <!--fpkidocs-->
        {% endfor %}<!--category-->
    </tbody>
</table>