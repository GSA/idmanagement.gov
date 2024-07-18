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
<!-- Updated: 20240718 CJB -->
<p>
<ul class="usa-card-group">  
{% assign playbooks = site.data.playbooks | sort: "title" %}
{% for playbook in playbooks %}			
<li class="usa-card tablet:grid-col-6">
    <div class="usa-card__container shadow-3 gsa-card" tabindex="0" onclick="navigateTo('{{site.baseurl}}{{playbook.url}}')" onkeydown="navigateTo('{{site.baseurl}}{{playbook.url}}')" aria-label="{{playbook.title}}">
        <div class="usa-card__header">
            <h3 class="site-preview-heading">{{playbook.title}}</h3>
        </div>
        <div class="usa-card__media">
        <div class="usa-card__img">
                <img
                src="{{site.baseurl}}{{playbook.header}}"
                alt="{{playbook.title}}"
                tabindex="-1" aria-label="{{playbook.title}}" />
            </div>
        </div>
        <hr>
        <div class="usa-card__body">
            <p>{{playbook.description}}</p>
        </div>
        <hr>
        <div class="usa-card__footer">
            Latest Update: {{playbook.pubdate}} <br><span class="usa-tag bg-accent-warm">{{playbook.type}}</span>
        </div>
    </div>
</li>
{% endfor %}
</ul>
</p>



