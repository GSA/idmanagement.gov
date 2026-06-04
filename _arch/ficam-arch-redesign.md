---

layout: page
sidenav: arch
title:  FICAM Arch - Redesign
permalink: /development/
sidenav: arch
sticky_sidenav: true

subnav:
#   - text: 
#     href: 

---

{% for arch in site.data.ficam-arch %}
<div class="usa-summary-box" role="region" aria-labelledby="summary-box-key-information">
    <div class="usa-summary-box__body">
        <h4 class="usa-summary-box__heading" id="summary-box-key-information">
            {{arch.label}}
        </h4>
        <div class="usa-summary-box__text">
            {{arch.summary}}
        </div>

        {% for cap in arch.caps %}
        <div class="usa-summary-box" role="region" aria-labelledby="summary-box-key-information">
            <div class="usa-summary-box__body">
                <h4 class="usa-summary-box__heading" id="summary-box-key-information">
                    {{cap.name}}
                </h4>
                <div class="usa-summary-box__text">
                    {{cap.detail}}
                </div>
            </div>
        </div>
        {% endfor %}
        {% for standard in arch.standards %}
            <span class="usa-tag">{{standard}}</span>
        {% endfor %}

    </div>
</div>
{% endfor %}