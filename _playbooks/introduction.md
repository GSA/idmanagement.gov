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
<ul class="usa-card-group">  
{% assign playbooks = site.data.playbooks | sort: "title" %}
{% for playbook in playbooks %}			
<li class="usa-card tablet:grid-col-6">
    <div class="usa-card__container shadow-3 gsa-card" role="link" tabindex="0" onclick="navigateTo('{{site.baseurl}}{{playbook.url}}', event)" onkeydown="navigateTo('{{site.baseurl}}{{playbook.url}}', event)" aria-label="{{playbook.title}}">
        <div class="usa-card__header" style="padding-bottom: 20px;">
            <h3 class="gsa-card-heading">{{playbook.title}}</h3>
        </div>
        <div class="usa-card__media">
        <div class="usa-card__img">
                <img
                fetchpriority="high"
                src="{{site.baseurl}}{{playbook.header}}"
                alt="{{playbook.title}}"
                tabindex="-1" aria-label="{{playbook.title}}" />
        </div>
        </div>
        <div class="usa-card__body gsa-hr-both">
            <p style="padding: 10px">{{playbook.description}}</p>
        </div>
        <div class="usa-card__footer">
            <!-- <button type="button" class="usa-button">Button text</button> -->
            Latest Update: {{playbook.pubdate}} <br><span class="usa-tag bg-accent-warm">{{playbook.type}}</span>
        </div>
    </div>
</li>
{% endfor %}
</ul>
</p>
