---
layout: page
title: Removed Products List
permalink: /what/removed-products-list/
collection: what
sticky_sidenav: true
sidenav: what

---

{% assign categories = "" | split: "" %}
{% for rpl in site.data.fips201rpl %}
  {% assign category = rpl.category | strip %}
  {% assign categories = categories | push: category | uniq | sort %}
{% endfor %}
{% assign categories = categories | uniq | sort %}

The FIPS 201 Evaluation Program’s Removed Products List (RPL) displays products and services that were at one time on the Approved Products List but are no longer approved for government use. Due to security concerns, products on the RPL are not recommended for government acquisition. Products will be removed from the RPL after 3 years.

<table class="usa-table--borderless rpl-table">
  <thead class="usa-sr">
    <tr>
      <th id="rpl-table-heading-numberApl" scope="col">APL #</th>
      <th id="rpl-table-heading-supplier" scope="col">Supplier</th>
      <th id="rpl-table-heading-nameProduct" scope="col">Product Name(s)</th>
      <th id="rpl-table-heading-numberProduct" scope="col">Product Number</th>
      <th id="rpl-table-heading-dateRemoval" scope="col">Removal Date</th>
      <th id="rpl-table-heading-reason" scope="col">Reason For Removal</th>
    </tr>
  </thead>
  <tbody>
    {% for category in categories %}
      <tr class="rpl-table-category-heading" data-category="{{ category }}">
        <th colspan="6" class="rpl-table-heading" id="rpl-table-heading-{{ category | slugify }}"><b>{{ category }} Category</b></th>
      </tr>
      {% for rpl in site.data.fips201rpl %}
        {% if rpl.category == category %}
          <tr class="rpl-table-row" data-category="{{ rpl.category }}">
            <td headers="rpl-table-heading-{{ category | slugify }} rpl-table-heading-numberApl">{{ rpl.numberApl }}</td>
            <td headers="rpl-table-heading-{{ category | slugify }} rpl-table-heading-supplier">{{ rpl.supplier }}</td>
            <td headers="rpl-table-heading-{{ category | slugify }} rpl-table-heading-nameProduct">{{ rpl.nameProduct}}</td>
            <td headers="rpl-table-heading-{{ category | slugify }} rpl-table-heading-numberProduct">{{ rpl.numberProduct }}</td>
            <td headers="rpl-table-heading-{{ category | slugify }} rpl-table-heading-dateRemoval">{{ rpl.dateRemoval}}</td>
            <td headers="rpl-table-heading-{{ category | slugify }} rpl-table-heading-reason">{{ rpl.reason}}</td>
          </tr>
        {% endif %}
      {% endfor %} <!--rpl-->
    {% endfor %}<!--category-->
  </tbody>
</table>
