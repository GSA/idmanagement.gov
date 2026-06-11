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
{% if arch.id == "gov" %}
<!-- Main Summary Box -->
<div class="usa-summary-box" role="region" aria-labelledby="summary-box-key-information" style="background-color:{{arch.color}};border-color:{{arch.border}};">
    <div class="usa-summary-box__body">
        <!-- First Accordion -->      
        <div class="usa-accordion">
            <h4 class="usa-accordion__heading">
                <button
                type="button"
                class="usa-accordion__button"
                aria-expanded="false"
                aria-controls="a1"
                >
                 {{arch.label}}
                </button>
            </h4>
            <div id="a1" class="usa-accordion__content usa-prose" style="background-color:{{arch.color}};">
                <!-- Main Summary Text -->
                <p>{{arch.summary}}</p>
                <!-- Main Summary Text -->
                <!-- First Accordion Summary Box -->
                <h4 class="usa-summary-box__heading" id="summary-box-key-information">CAPABILITIES</h4>
                <!-- Loop start here -->
                {% for cap in arch.caps %}
                <div class="usa-summary-box" role="region" aria-labelledby="summary-box-key-information" style="background-color:{{arch.color}};border-color:{{arch.border}};">
                    <div class="usa-summary-box__body">
                        <div class="usa-summary-box__text">
                            <!-- Capabilities Accordion Loop -->
                            <div class="usa-accordion">
                                <h4 class="usa-accordion__heading">
                                    <button
                                    type="button"
                                    class="usa-accordion__button"
                                    style="background-color:{{arch.color}}"
                                    aria-expanded="false"
                                    aria-controls="b{{forloop.index}}"
                                    >
                                    {{cap.name}}
                                    </button>
                                </h4>
                                <div id="b{{forloop.index}}" class="usa-accordion__content usa-prose" style="background-color:{{arch.color}}">
                                    <p>{{cap.detail}}</p>
                                </div>
                            </div>
                            <!-- Capabilities Accordion Loop End -->
                        </div>
                    </div>
                </div>
                {% endfor %}
                <h4 class="usa-summary-box__heading" id="summary-box-key-information">STANDARDS</h4>
             <!-- First Accordion Summary Box End -->
            </div>
        </div>
        <!-- First Accordion End -->
        <!-- Standard Section -->
        <p>
            {% for standard in arch.standards %}
                    <span class="usa-tag radius-pill display-inline-block"> {{standard}} </span>
            {% endfor %}
        </p>
        <!-- Standards Section End -->
            <!-- Start of Docs section -->
        <!-- <h4 class="usa-summary-box__heading">DOCUMENT SECTION</h4>
        <p>
            {% for doc in arch.docs %}
                    <span class="usa-tag radius-pill display-inline-block"> {{doc}} </span>
            {% endfor %}
        </p> -->
        <!-- End of docs section -->
    <!-- Main Summary Box End -->
    </div>
</div>

{% endif %}
{% endfor %}