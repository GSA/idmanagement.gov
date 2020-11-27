---
layout: page
collection: piv
title: PIV Playbooks
permalink: piv/user/
sticky_sidenav: true
sidenav: piv

subnav:
  - text: Digitally Signing in Microsoft Word
    href: ../user/signword/
  - text: Digitally Signing Documents for Submission to Office of the Federal Register
    href: ../user/signfedregister/
---

These user playbooks will help agency users with PIV related tasks.

<ul>
  {% for playbook in site.piv.user reversed %}
    {% assign link = item.permalik | remove: '/' %}
    <li>
      <h3><a href="{{site.baseurl}}/{{ item.permalink }}">{{ playbook.title }}</a></h3>
      <strong>Date:</strong> {{ item.pubDate }}<br />
      <strong>Description:</strong> {{ item.description }}
    </li>
  {% endfor %}
</ul>

Test #2

{% for item in site.piv.user reversed %}
  {% assign link = item.permalink | remove: '/' %}
  <hr/>
  <h3><a href="{{site.baseurl}}/{{ item.permalink }}"  title="{{ item.title }}">{{ item.title }}</a></h3>
  <strong>Date:</strong> {{ item.pubDate }}<br />
  <strong>Description:</strong> {{ item.description }}
{% endfor %}
