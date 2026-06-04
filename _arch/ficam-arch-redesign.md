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
    <h4 class="usa-accordion__heading">
        <button
        type="button"
        class="usa-accordion__button usa-summary-box__heading"
        aria-expanded="true"
        aria-controls="a1"
        >
        First Amendment
        </button>
    </h4>
    <div id="a1" class="usa-accordion__content usa-prose usa-summary-box__text">
        <p>
        Congress shall make no law respecting an establishment of religion, or
        prohibiting the free exercise thereof; or abridging the freedom of speech,
        or of the press; or the right of the people peaceably to assemble, and to
        petition the Government for a redress of grievances.
        </p>
    </div>
</div>
{% endfor %}