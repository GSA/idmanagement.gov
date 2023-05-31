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
    <a class="gsa-no-dec" href="{{site.baseurl}}{{playbook.url}}" target="{{playbook.target}}">
    <div class="usa-card__container shadow-3">
        <div class="usa-card__header">
            <h3 class="site-preview-heading">{{playbook.title}}</h3>
        </div>
        <div class="usa-card__media">
        <div class="usa-card__img">
                <img
                src="{{site.baseurl}}{{playbook.header}}"
                alt="{{playbook.title}}"
                />
            </div>
        </div>
        <hr>
        <div class="usa-card__body">
            <p>{{playbook.description}}</p>
        </div>
        <hr>
        <div class="usa-card__footer">
            <!-- <button type="button" class="usa-button">Button text</button> -->
            Latest Update: {{playbook.pubdate}} <br><span class="usa-tag bg-accent-warm">{{playbook.type}}</span>
        </div>
    </div>
    </a>
</li>
{% endfor %}
</ul>
</p>