---
layout: page
title: FIPS 201 Removed Product List
permalink: buy/rpl/
collection: buy
sidenav: buy

---

The FIPS 201 Evaluation Program’s Removed Products List (RPL) displays products and services that were at one time on the Approved Products List but are no longer approved for government use.

<table class="usa-table--borderless rpl-table">
  <thead class="usa-sr-only">
    <tr>
      <th id="rpl-table-heading-supplier" scope="col">Supplier</th>
      <th id="rpl-table-heading-nameProduct" scope="col">Product Name(s)</th>
      <th id="rpl-table-heading-numberProduct" scope="col">Product Number</th>
      <th id="rpl-table-heading-dateRemoval" scope="col">Removal Date</th>
      <th id="rpl-table-heading-numberAPL" scope="col">APL #</th>
      <th id="rpl-table-heading-reason" scope="col">Reason For Removal</th>
    </tr>
  </thead>
  <tbody>
    {% for category in categories %}
      <tr class="rpl-table-category-heading" data-category="{{ category }}">
        <th colspan="6" class="rpl-table-heading" id="rpl-table-heading-{{ category | slugify }}"><b>{{ category }} APL Category</b></th>
      </tr>
      {% for rpl in site.data.fips201rpl %}
        {% if rpl.categoryApl == category %}
          <tr class="rpl-table-row" data-category="{{ rpl.category }}">
            <td headers="rpl-table-heading-{{ category | slugify }} rpl-table-heading-supplier">{{ rpl.supplier }}</td>
            <td headers="rpl-table-heading-{{ category | slugify }} rpl-table-heading-nameProduct">{{ rpl.nameProduct}}</a></td>
            <td headers="rpl-table-heading-{{ category | slugify }} rpl-table-heading-numberProduct">{{ rpl.numberProduct }}</td>
            <td headers="rpl-table-heading-{{ category | slugify }} rpl-table-heading-dateRemoval">{{ rpl.dateRemoval}}</a></td>
            <td headers="rpl-table-heading-{{ category | slugify }} rpl-table-heading-numberAPL">{{ rpl.numberAPL }}</td>
            <td headers="rpl-table-heading-{{ category | slugify }} rpl-table-heading-reason">{{ rpl.reason}}</a></td>
          </tr>
        {% endif %}
      {% endfor %} <!--rpl-->
    {% endfor %}<!--category-->
  </tbody>
</table>
