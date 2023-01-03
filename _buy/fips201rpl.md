---
layout: page
title: FIPS 201 Removed Product List
permalink: buy/removed-products-list/
collection: buy
sticky_sidenav: true
sidenav: buy

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
      <th data-sortable="true" scope="col" role="columnheader" aria-sort="ascending" id="rpl-table-heading-numberApl">APL #</th>
      <th data-sortable="true" scope="col" role="columnheader" id="rpl-table-heading-supplier">Supplier</th>
      <th data-sortable="true" scope="col" role="columnheader" id="rpl-table-heading-nameProduct">Product Name(s)</th>
      <th data-sortable="true" scope="col" role="columnheader" id="rpl-table-heading-numberProduct">Product Number</th>
      <th data-sortable="true" scope="col" role="columnheader" id="rpl-table-heading-dateRemoval">Removal Date</th>
      <th data-sortable="true" scope="col" role="columnheader" id="rpl-table-heading-reason">Reason For Removal</th>
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
            <td headers="rpl-table-heading-{{ category | slugify }} rpl-table-heading-numberApl" scrope="row" data-sort-value="{{ rpl.numberApl }}">{{ rpl.numberApl }}</td>
            <td headers="rpl-table-heading-{{ category | slugify }} rpl-table-heading-supplier" data-sort-value="{{ rpl.supplier }}">{{ rpl.supplier }}</td>
            <td headers="rpl-table-heading-{{ category | slugify }} rpl-table-heading-nameProduct" data-sort-value="{{ rpl.nameProduct}}">{{ rpl.nameProduct}}</td>
            <td headers="rpl-table-heading-{{ category | slugify }} rpl-table-heading-numberProduct" data-sort-value="{{ rpl.numberProduct }}">{{ rpl.numberProduct }}</td>
            <td headers="rpl-table-heading-{{ category | slugify }} rpl-table-heading-dateRemoval" data-sort-value="{{ rpl.dateRemoval}}">{{ rpl.dateRemoval}}</td>
            <td headers="rpl-table-heading-{{ category | slugify }} rpl-table-heading-reason" data-sort-value="{{ rpl.reason}}">{{ rpl.reason}}</td>
          </tr>
        {% endif %}
      {% endfor %} <!--rpl-->
    {% endfor %}<!--category-->
  </tbody>
</table>
  <div
    class="usa-sr-only usa-table__announcement-region"
    aria-live="polite"
  ></div>
