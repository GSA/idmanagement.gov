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
<div class="usa-accordion">
    <h4 class="usa-accordion__heading">
        <div class="usa-summary-box usa-accordion__button"
                aria-expanded="true"
                aria-controls="a1" role="region" aria-labelledby="summary-box-key-information">
            <div class="usa-summary-box__body">
                <h4 class="usa-summary-box__heading" id="summary-box-key-information">
                    {{arch.label}}
                </h4>
            </div>
        </div>
    </h4>
    <div class="usa-summary-box__text">
        <div id="a1" class="usa-accordion__content usa-prose">

            {{arch.summary}}

        </div>
    </div>
</div>
{% endfor %}