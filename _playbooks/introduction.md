---
layout: page
collection: playbooks
title: FICAM Playbooks 
permalink: /playbooks/
sidenav: playbooks
sticky_sidenav: true

subnav:
#   - text: 
#     href: '#'

---

  <table class="usa-table usa-table--borderless playbooks-table">
    <caption>
      A playbook is a comprehensive guide on a technical topic, describing both overarching strategy and tactical approaches.
    </caption>
    <thead class="usa-sr">
    <tr>
      <th data-sortable="true" scope="col" role="columnheader" aria-sort="descending">Title</th>
      <th data-sortable="true" scope="col" role="columnheader">Type</th>
      <th data-sortable="true" scope="col" role="columnheader">Latest Update</th>
      <th data-sortable="true" scope="col" role="columnheader">Description</th>
    </tr>
    </thead>
    <tbody>
    <!-- Exclude external playbooks for now, only two listed in external_playbooks.yml and are WIP -->
    {% assign playbooks = site.data.playbooks | sort: "title" %}
    {% for playbook in playbooks reversed %}
    <tr>
      <th scope="row" ><a href="{{ playbook.url | relative_url }}" target="_blank" rel="noopener noreferrer" title="playbook.title">{{ playbook.title }}</a></th>
      <td>{{ playbook.type }}</td>
      <td><a date="playbook.pubdate">{{ playbook.pubdate }}</a></td >
      <td>{{ playbook.description }}</td>
    </tr>
    {% endfor %}
    </tbody>
  </table>
  <div
    class="usa-sr-only usa-table__announcement-region"
    aria-live="polite"
  ></div>