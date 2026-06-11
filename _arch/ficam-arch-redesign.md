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
<style>
/* Custom class matching the exact structural vectors of the USWDS design system */
.usa-accordion__button.solid-triangle-icon {
  padding-right: 3rem;
  background-position: right 1.25rem center;
  background-size: 1.5rem;
  background-repeat: no-repeat;
  
  /* Render the solid down triangle caret */
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://w3.org' viewBox='0 0 24 24' fill='%231b1b1b'><path d='M7 10l5 5 5-5z'/></svg>") !important;
}

/* Swap to the solid up triangle caret when expanded */
.usa-accordion__button.solid-triangle-icon[aria-expanded="true"] {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://w3.org' viewBox='0 0 24 24' fill='%231b1b1b'><path d='M7 14l5-5 5 5z'/></svg>") !important;
  color: #c0c0c0;
}
</style>

<!-- Governance  -->
{% for arch in site.data.ficam-arch %}
{% if arch.id == "gov" %}
<!-- Main Summary Box -->
<div class="usa-summary-box" role="region" aria-labelledby="summary-box-key-information" style="background-color:{{arch.bgcolor}};border-color:{{arch.border}};padding:10px;">
    <div class="usa-summary-box__body">
        <!-- First Accordion -->      
        <div class="usa-accordion">
            <h4 class="usa-accordion__heading">
                <button
                id="usa-accordion__button.solid-triangle-icon"
                type="button"
                class="usa-accordion__button"
                style="background-color:{{arch.bgcolor}};color:{{arch.textcolor}};font-size:24pt;margin-bottom: 0px;padding-bottom: 2px;padding-left: 0px;"
                aria-expanded="false"
                aria-controls="a1"
                >
                 {{arch.label}}
                </button>
            </h4>
            <div id="a1" class="usa-accordion__content usa-prose" style="background-color:{{arch.bgcolor}};">
                <!-- Main Summary Text -->
                <p style="color:{{arch.textcolor}};">{{arch.summary}}</p>
                <!-- Main Summary Text -->
                <!-- First Accordion Summary Box -->
                <h4 class="usa-summary-box__heading" id="summary-box-key-information" style="color:{{arch.textcolor}};">CAPABILITIES</h4>
                <!-- Loop start here -->
                {% for cap in arch.caps %}
                <div class="usa-summary-box" role="region" aria-labelledby="summary-box-key-information" style="background-color:{{arch.bgcolor}};border-color:{{arch.border}};">
                    <div class="usa-summary-box__body">
                        <div class="usa-summary-box__text">
                            <!-- Capabilities Accordion Loop -->
                            <div class="usa-accordion">
                                <h4 class="usa-accordion__heading">
                                    <button
                                    type="button"
                                    class="usa-accordion__button"
                                    style="background-color:{{arch.bgcolor}};color:{{arch.textcolor}};"
                                    aria-expanded="false"
                                    aria-controls="b{{forloop.index}}"
                                    >
                                    {{cap.name}}
                                    </button>
                                </h4>
                                <div id="b{{forloop.index}}" class="usa-accordion__content usa-prose" style="background-color:{{arch.bgcolor}};color:{{arch.textcolor}};">
                                    <p>{{cap.detail}}</p>
                                </div>
                            </div>
                            <!-- Capabilities Accordion Loop End -->
                        </div>
                    </div>
                </div>
                {% endfor %}
                <br>
                <h4 class="usa-summary-box__heading" id="summary-box-key-information" style="color:{{arch.textcolor}};">STANDARDS</h4>
             <!-- First Accordion Summary Box End -->
            </div>
            <!-- Standard Section -->
            <p style="margin-top: 2px;padding-left: 3px;">
                {% for standard in arch.standards %}
                        <span class="usa-tag radius-pill display-inline-block" style="background-color: #dfdfdf;border: 1px solid #818181;color:#818181;margin-top:3px;margin-bottom:3px;"> {{standard}} </span>
                {% endfor %}
            </p>
            <!-- Standards Section End -->
                <!-- Start of Docs section -->
            <!-- <h4 class="usa-summary-box__heading" style="color:{{arch.textcolor}};">DOCUMENT SECTION</h4>
            <p>
                {% for docs in arch.docs %}
                        <span class="usa-tag radius-pill display-inline-block" style="background-color: #dfdfdf;border: 1px solid #818181;color:#818181;margin-top:3px;margin-bottom:3px;> {{docs}} </span>
                {% endfor %}
            </p> -->
            <!-- End of docs section -->
        </div>
        <!-- First Accordion End -->
    <!-- Main Summary Box End -->
    </div>
</div>
{% endif %}
{% endfor %}


<!-- Federation -->
{% for arch in site.data.ficam-arch %}
{% if arch.id == "fed" %}
<!-- Main Summary Box -->
<div class="usa-summary-box" role="region" aria-labelledby="summary-box-key-information" style="background-color:{{arch.bgcolor}};border-color:{{arch.border}};">
    <div class="usa-summary-box__body">
        <!-- First Accordion -->      
        <div class="usa-accordion">
            <h4 class="usa-accordion__heading">
                <button
                id="usa-accordion__button.solid-triangle-icon"
                type="button"
                class="usa-accordion__button"
                style="background-color:{{arch.bgcolor}};color:{{arch.textcolor}};font-size:24pt;margin-bottom: 0px;padding-bottom: 2px;padding-left: 0px;"
                aria-expanded="false"
                aria-controls="c1"
                >
                 {{arch.label}}
                </button>
            </h4>
            <div id="c1" class="usa-accordion__content usa-prose" style="background-color:{{arch.bgcolor}};">
                <!-- Main Summary Text -->
                <p style="color:{{arch.textcolor}};">{{arch.summary}}</p>
                <!-- Main Summary Text -->
                <!-- First Accordion Summary Box -->
                <h4 class="usa-summary-box__heading" id="summary-box-key-information" style="color:{{arch.textcolor}};">CAPABILITIES</h4>
                <!-- Loop start here -->
                {% for cap in arch.caps %}
                <div class="usa-summary-box" role="region" aria-labelledby="summary-box-key-information" style="background-color:{{arch.bgcolor}};border-color:{{arch.border}};">
                    <div class="usa-summary-box__body">
                        <div class="usa-summary-box__text">
                            <!-- Capabilities Accordion Loop -->
                            <div class="usa-accordion">
                                <h4 class="usa-accordion__heading">
                                    <button
                                    type="button"
                                    class="usa-accordion__button"
                                    style="background-color:{{arch.bgcolor}};color:{{arch.textcolor}};"
                                    aria-expanded="false"
                                    aria-controls="d{{forloop.index}}"
                                    >
                                    {{cap.name}}
                                    </button>
                                </h4>
                                <div id="d{{forloop.index}}" class="usa-accordion__content usa-prose" style="background-color:{{arch.bgcolor}};color:{{arch.textcolor}};">
                                    <p>{{cap.detail}}</p>
                                </div>
                            </div>
                            <!-- Capabilities Accordion Loop End -->
                        </div>
                    </div>
                </div>
                {% endfor %}
                <br>
                <h4 class="usa-summary-box__heading" id="summary-box-key-information" style="color:{{arch.textcolor}};">STANDARDS</h4>
             <!-- First Accordion Summary Box End -->
            </div>
            <!-- Standard Section -->
            <p style="margin-top: 2px;padding-left: 3px;">
                {% for standard in arch.standards %}
                        <span class="usa-tag radius-pill display-inline-block" style="background-color: #dfdfdf;border: 1px solid #818181;color:#818181;margin-top:3px;margin-bottom:3px;"> {{standard}} </span>
                {% endfor %}
            </p>
            <!-- Standards Section End -->
                <!-- Start of Docs section -->
            <!-- <h4 class="usa-summary-box__heading" style="color:{{arch.textcolor}};">DOCUMENT SECTION</h4>
            <p>
                {% for docs in arch.docs %}
                        <span class="usa-tag radius-pill display-inline-block" style="background-color: #dfdfdf;border: 1px solid #818181;color:#818181;margin-top:3px;margin-bottom:3px;> {{docs}} </span>
                {% endfor %}
            </p> -->
            <!-- End of docs section -->
        </div>
        <!-- First Accordion End -->
    <!-- Main Summary Box End -->
    </div>
</div>
{% endif %}
{% endfor %}

<!-- Post-quantum cryptography  -->
{% for arch in site.data.ficam-arch %}
{% if arch.id == "pqc" %}
<!-- Main Summary Box -->
<div class="usa-summary-box" role="region" aria-labelledby="summary-box-key-information" style="background-color:{{arch.bgcolor}};border-color:{{arch.border}};">
    <div class="usa-summary-box__body">
        <!-- First Accordion -->      
        <div class="usa-accordion">
            <h4 class="usa-accordion__heading">
                <button
                id="usa-accordion__button.solid-triangle-icon"
                type="button"
                class="usa-accordion__button"
                style="background-color:{{arch.bgcolor}};color:{{arch.textcolor}};font-size:24pt;margin-bottom: 0px;padding-bottom: 2px;padding-left: 0px;"
                aria-expanded="false"
                aria-controls="e1"
                >
                 {{arch.label}}
                </button>
            </h4>
            <div id="e1" class="usa-accordion__content usa-prose" style="background-color:{{arch.bgcolor}};">
                <!-- Main Summary Text -->
                <p style="color:{{arch.textcolor}};">{{arch.summary}}</p>
                <!-- Main Summary Text -->
                <!-- First Accordion Summary Box -->
                <h4 class="usa-summary-box__heading" id="summary-box-key-information" style="color:{{arch.textcolor}};">CAPABILITIES</h4>
                <!-- Loop start here -->
                {% for cap in arch.caps %}
                <div class="usa-summary-box" role="region" aria-labelledby="summary-box-key-information" style="background-color:{{arch.bgcolor}};border-color:{{arch.border}};">
                    <div class="usa-summary-box__body">
                        <div class="usa-summary-box__text">
                            <!-- Capabilities Accordion Loop -->
                            <div class="usa-accordion">
                                <h4 class="usa-accordion__heading">
                                    <button
                                    type="button"
                                    class="usa-accordion__button"
                                    style="background-color:{{arch.bgcolor}};color:{{arch.textcolor}};"
                                    aria-expanded="false"
                                    aria-controls="f{{forloop.index}}"
                                    >
                                    {{cap.name}}
                                    </button>
                                </h4>
                                <div id="f{{forloop.index}}" class="usa-accordion__content usa-prose" style="background-color:{{arch.bgcolor}};color:{{arch.textcolor}};">
                                    <p>{{cap.detail}}</p>
                                </div>
                            </div>
                            <!-- Capabilities Accordion Loop End -->
                        </div>
                    </div>
                </div>
                {% endfor %}
                <br>
                <h4 class="usa-summary-box__heading" id="summary-box-key-information" style="color:{{arch.textcolor}};">STANDARDS</h4>
             <!-- First Accordion Summary Box End -->
            </div>
            <!-- Standard Section -->
            <p style="margin-top: 2px;padding-left: 3px;">
                {% for standard in arch.standards %}
                        <span class="usa-tag radius-pill display-inline-block" style="background-color: #dfdfdf;border: 1px solid #818181;color:#818181;margin-top:3px;margin-bottom:3px;"> {{standard}} </span>
                {% endfor %}
            </p>
            <!-- Standards Section End -->
                <!-- Start of Docs section -->
            <!-- <h4 class="usa-summary-box__heading" style="color:{{arch.textcolor}};">DOCUMENT SECTION</h4>
            <p>
                {% for docs in arch.docs %}
                        <span class="usa-tag radius-pill display-inline-block" style="background-color: #dfdfdf;border: 1px solid #818181;color:#818181;margin-top:3px;margin-bottom:3px;> {{docs}} </span>
                {% endfor %}
            </p> -->
            <!-- End of docs section -->
        </div>
        <!-- First Accordion End -->
    <!-- Main Summary Box End -->
    </div>
</div>
{% endif %}
{% endfor %}


<!-- Verifiable credentials  -->
{% for arch in site.data.ficam-arch %}
{% if arch.id == "vc" %}
<!-- Main Summary Box -->
<div class="usa-summary-box" role="region" aria-labelledby="summary-box-key-information" style="background-color:{{arch.bgcolor}};border-color:{{arch.border}};">
    <div class="usa-summary-box__body">
        <!-- First Accordion -->      
        <div class="usa-accordion">
            <h4 class="usa-accordion__heading">
                <button
                id="usa-accordion__button.solid-triangle-icon"
                type="button"
                class="usa-accordion__button"
                style="background-color:{{arch.bgcolor}};color:{{arch.textcolor}};font-size:24pt;margin-bottom: 0px;padding-bottom: 2px;padding-left: 0px;"
                aria-expanded="false"
                aria-controls="g1"
                >
                 {{arch.label}}
                </button>
            </h4>
            <div id="g1" class="usa-accordion__content usa-prose" style="background-color:{{arch.bgcolor}};">
                <!-- Main Summary Text -->
                <p style="color:{{arch.textcolor}};">{{arch.summary}}</p>
                <!-- Main Summary Text -->
                <!-- First Accordion Summary Box -->
                <h4 class="usa-summary-box__heading" id="summary-box-key-information" style="color:{{arch.textcolor}};">CAPABILITIES</h4>
                <!-- Loop start here -->
                {% for cap in arch.caps %}
                <div class="usa-summary-box" role="region" aria-labelledby="summary-box-key-information" style="background-color:{{arch.bgcolor}};border-color:{{arch.border}};">
                    <div class="usa-summary-box__body">
                        <div class="usa-summary-box__text">
                            <!-- Capabilities Accordion Loop -->
                            <div class="usa-accordion">
                                <h4 class="usa-accordion__heading">
                                    <button
                                    type="button"
                                    class="usa-accordion__button"
                                    style="background-color:{{arch.bgcolor}};color:{{arch.textcolor}};"
                                    aria-expanded="false"
                                    aria-controls="h{{forloop.index}}"
                                    >
                                    {{cap.name}}
                                    </button>
                                </h4>
                                <div id="h{{forloop.index}}" class="usa-accordion__content usa-prose" style="background-color:{{arch.bgcolor}};color:{{arch.textcolor}};">
                                    <p>{{cap.detail}}</p>
                                </div>
                            </div>
                            <!-- Capabilities Accordion Loop End -->
                        </div>
                    </div>
                </div>
                {% endfor %}
                <br>
                <h4 class="usa-summary-box__heading" id="summary-box-key-information" style="color:{{arch.textcolor}};">STANDARDS</h4>
             <!-- First Accordion Summary Box End -->
            </div>
            <!-- Standard Section -->
            <p style="margin-top: 2px;padding-left: 3px;">
                {% for standard in arch.standards %}
                        <span class="usa-tag radius-pill display-inline-block" style="background-color: #dfdfdf;border: 1px solid #818181;color:#818181;margin-top:3px;margin-bottom:3px;"> {{standard}} </span>
                {% endfor %}
            </p>
            <!-- Standards Section End -->
                <!-- Start of Docs section -->
            <!-- <h4 class="usa-summary-box__heading" style="color:{{arch.textcolor}};">DOCUMENT SECTION</h4>
            <p>
                {% for docs in arch.docs %}
                        <span class="usa-tag radius-pill display-inline-block" style="background-color: #dfdfdf;border: 1px solid #818181;color:#818181;margin-top:3px;margin-bottom:3px;> {{docs}} </span>
                {% endfor %}
            </p> -->
            <!-- End of docs section -->
        </div>
        <!-- First Accordion End -->
    <!-- Main Summary Box End -->
    </div>
</div>
{% endif %}
{% endfor %}