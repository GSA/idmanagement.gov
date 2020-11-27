---
layout: page
collection: fpki
title: Announcements
permalink: fpki/announcements/
sticky_sidenav: true
sidenav: fpki

subnav: 
  - text: Active
    href: '#active'
  - text: Archived
    href: '#archvied'
---

These announcements and hot topics concern Federal Public Key Infrastructure changes that may affect your agency's operations. Announcements are archived after one year.

{% include alert-warning.html content="Archived announcements are listed below for historical reference only. These announcements are no longer being updated or maintained." %}

## Active Announcements
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

## Archived Announcements

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

Test Table 3

{% for tag in site.fpki.announcements.status %}
  <h3>{{ status[0] }}</h3>
  <ul>
    {% for post in status[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
      <td>{{ announcement.pubDate }}</td>
      <td>{{ announcement.description }}</td>
    {% endfor %}
  </ul>
{% endfor %}