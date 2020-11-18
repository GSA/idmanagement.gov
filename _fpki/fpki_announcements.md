---
layout: default
collection: guidefpki
title: Announcements
permalink: guidefpki/announcements/
subnav: fpki
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
