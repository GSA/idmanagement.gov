---
layout: page
collection: fpki
title: Archived Announcements
permalink: /fpki/announcements/archived/
sticky_sidenav: true
sidenav: fpki

subnav:
  - text: Back to Announcements
    href: /fpki/announcements
---

These announcements have been archived one year after they their release and will be removed from the site after three years.

<table class="usa-table--borderless">
  <thead class="usa-sr">
    <tr>
      <th id="announce-table-heading-title" scope="col">Title</th>
      <th id="announce-table-heading-date" scope="col">Date</th>
      <th id="announce-table-heading-description" scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    {% assign announcements = site.fpki.announcements | concat: site.data.fpkiannouncements %}
      {% for announcement in announcements %}
        {% if announcement.status == "Archived" %}
          <tr>
              <td headers="announce-table-heading-{{ status | slugify }} announce-table-heading-title"><a href="{{ announcement.url | relative_url }}" title="announcement.title">{{ announcement.title }}</a></td>
              <td headers="announce-table-heading-{{ status | slugify }} announce-table-heading-date"><a date="announcement.pubDate">{{ announcement.pubDate }}</a></td>
              <td headers="announce-table-heading-{{ status | slugify }} announce-table-heading-description">{{ announcement.description }}</td>
          </tr>
        {% endif %}
      {% endfor %}
  </tbody>
</table>
