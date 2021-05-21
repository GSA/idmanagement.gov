---
layout: page
collection: governance
title:  Federal PKI Document Archive
permalink: governance/fpkiarchive/
sidenav: governance
sticky_sidenav: true

---

This pages contains three years of Federal PKI documents including:
- Certificate Policies
- Certificate Profiles
- Supplementary Guideance
- Change Proposals

If you seek a document that is older than three years or not listed here, please contact fpki at gsa.gov

<div class="usa-width-one-fourth">
  <fieldset class="usa-fieldset-inputs guides-filter">
    <legend>Categories</legend>
    <ul class="usa-unstyled-list">
      {% for category in categories %}
      <li>
        <input class="guides-filter-category" id="category-{{ category | slugify }}" type="checkbox" name="categories" value="{{ category }}" checked>
        <label for="category-{{ category | slugify }}">{{ category }}</label>
      </li>
      {% endfor %}
    </ul>
  </fieldset>
</div>

<div class="usa-width-three-fourths">
  <table class="usa-table-borderless">
    <thead class="usa-sr-only">
      <tr>
        <th id="guides-table-heading-title" scope="col">Name</th>
        <th id="guides-table-heading-date" scope="col">Date</th>
        <th id="guides-table-heading-description" scope="col">Description</th>
      </tr>
    </thead>
    <tbody>
      {% for category in categories %}
        <tr class="guides-table-category-heading" data-category="{{ category }}">
          <th colspan="3" class="guides-table-heading" id="guides-table-heading-{{ category | slugify }}"><b>{{ category }}</b></th>
        </tr>
        {% for docs in site.data.fpkidocs %}
          {% if docs.category == category %}
            <tr class="guides-table-row" data-category="{{ docs.category }}">
              <td headers="guides-table-heading-{{ category | slugify }} guides-table-heading-title"><a href="{{ docs.url | prepend: site.baseurl }}">{{ docs.name }}</a></td>
              <td headers="guides-table-heading-{{ category | slugify }} guides-table-heading-date">{{ docs.date }}</td>
              <td headers="guides-table-heading-{{ category | slugify }} guides-table-heading-description">{{ docs.description }}</td>
            </tr>
          {% endif %}
        {% endfor %} <!--guide-->
      {% endfor %}<!--category-->
    </tbody>
  </table>
</div>


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
            {% for docs in site.data.fpkidocs %}
                {% if docs.category == category %}
                    <tr class="fpkidocs-table-row" data-category="{{ docs.category }}">
                        <td headers="fpkidocs-table-heading-{{ category | slugify }} fpkidocs-table-heading-name"><a href="{{ docs.url | prepend: site.baseurl }}">{{ fpkidocs.name }}</td>
                        <td headers="fpkidocs-table-heading-{{ category | slugify }} fpkidocs-table-heading-date">{{ docs.date }}</a></td>
                        <td headers="fpkidocs-table-heading-{{ category | slugify }} fpkidocs-table-heading-description">{{ docs.description }}</a></td>
                    </tr>
                {% endif %}
            {% endfor %} <!--docs-->
        {% endfor %}<!--category-->
    </tbody>
</table>