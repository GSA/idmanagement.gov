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
<div class="usa-accordion usa-summary-box" role="region" aria-labelledby="summary-box-key-information">
    <h4 class="usa-accordion__heading usa-summary-box__heading usa-accordion__button"
        aria-expanded="true"
        aria-controls="a1">
        {{arch.label}}
    </h4>
    <div id="a1" class="usa-accordion__content usa-prose usa-summary-box__text">
        {{arch.summary}}
    </div>
</div>
{% endfor %}