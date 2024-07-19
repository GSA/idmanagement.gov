---

layout: page
collection: playbooks
title: Playbooks 
permalink: /playbooks/
sidenav: playbooks
sticky_sidenav: true

subnav:
#   - text: 
#     href: '#'

---

<hr>
<p>
{% assign playbooks = site.data.playbooks | sort: "title" %}
{% for playbook in playbooks %}	
<!-- Updated 06/20/2024 CJB -->
<div class="usa-accordion usa-accordion--bordered" tabindex=0 >
  <h4 class="usa-accordion__heading">
    <button
      type="button" style="cursor:auto;"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="b-a{{forloop.index}}" >
     {{playbook.title}}
    </button>
  </h4>
  <div id="b-a{{forloop.index}}" class="usa-accordion__content usa-prose" style="cursor: pointer;" onclick="navigateTo('{{site.baseurl}}{{playbook.url}}')">
    <p>
    {{playbook.description}}
    <hr>
    <div>
        <!-- <button type="button" class="usa-button">Button text</button> -->
        Latest Update: {{playbook.pubdate}} 
    </div>
    </p>
  </div>
</div>
{% endfor %}	
