---
layout: page
collection: why
title:  FICAM Arch - Redesign
permalink: /ficam-dev/
sidenav: why
sticky_sidenav: true

subnav:

---




{% for ficam in site.data.ficam-arch %}
   {% for arch in ficam %}
    <div
    class="usa-summary-box"
    role="region"
    aria-labelledby="summary-box-key-information">
    <div class="usa-summary-box__body">
        <h4 class="usa-summary-box__heading" id="summary-box-key-information">
        {{arch.label}}
        </h4>
        <div class="usa-summary-box__text">
        {{arch.summary}}
        </div>
    </div>
   {% endfor %}
{% endfor %}
