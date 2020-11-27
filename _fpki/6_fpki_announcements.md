---
layout: page
collection: fpki
title: Announcements
permalink: fpki/announcements/
sticky_sidenav: true
sidenav: fpki
---

These announcements and hot topics concern Federal Public Key Infrastructure changes that may affect your agency's operations. Announcements are archived after one year.

{% include alert-warning.html content="Archived announcements are listed below for historical reference only. These announcements are no longer being updated or maintained." %}

<ul>
    {% for item in site.data.fpkiannoucements reversed %}
      <li>
        <h3><a href="{{ item.url }}"> {{ post.title }}</a></h3>
        <strong>Date:</strong> {{ post.pubDate }}<br />
        <strong>Status:</strong> {{ post.status }}<br/>
        <strong>Description:</strong> {{ post.description }}
      </li>
    {% endfor %}
</ul>

Test Table 2

<table class="usa-table--borderless playbooks-table">
  <thead class="usa-sr-only">
    <tr>
      <th id="playbooks-table-heading-title" scope="col">Title</th>
      <th id="playbooks-table-heading-status" scope="col">Status</th>
      <th id="playbooks-table-heading-date" scope="col">Date</th>
      <th id="playbooks-table-heading-description" scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    {% assign announcements = site.data.fpkiannouncements | sort: "pubDate" reversed%}
    {% for announcement in announcements %}
        <tr class="playbooks-table-row">
          <td><a href="{{ announcement.url | relative_url }}">{{ announcement.title }}</a></td>
          <td>{{ announcement.status }}</td>
          <td>{{ announcement.pubDate }}</td>
          <td>{{ announcement.description }}</td>
        </tr>
    {% endfor %}
  </tbody>
</table>
