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
<div class="usa-summary-box" role="region" aria-labelledby="summary-box-key-information" style="background-color:{{arch.color}};border-color:{{arch.border}};">
    <div class="usa-summary-box__body">
        <h4 class="usa-summary-box__heading" id="summary-box-key-information">
            {{arch.label}}
        </h4>
        <div class="usa-summary-box__text">
            {{arch.summary}}
        </div>
        <h4 class="usa-summary-box__heading">Capabilities</h4>
        {% for cap in arch.caps %}
        <div class="usa-accordion usa-accordion--multiselectable" data-allow-multiple>
            <h4 class="usa-accordion__heading"">
                <button
                type="button"
                class="usa-accordion__button radius-lg"  
                style="background-color:{{arch.color}};border-color:{{arch.border}};
                aria-expanded="false"
                aria-controls="b-a{{forloop.index}}"
                >
                {{cap.name}}
                </button>
            </h4>
            <div id="b-a{{forloop.index}}" class="usa-accordion__content usa-prose radius-lg">
                <p>
                    {{cap.detail}}
                </p>
            </div>
        </div>
       {% endfor %}
       <br />
        <h4 class="usa-summary-box__heading">Standards</h4>             
            <hr>
            <p>
            {% for standard in arch.standards %}
                    <span class="usa-tag radius-pill display-inline-block"> {{standard}} </span>
            {% endfor %}
            </p>
        <br />
        <h4 class="usa-summary-box__heading">Document Section</h4>
          <hr>
          <p>
            {% for doc in arch.docs %}
                    <span class="usa-tag radius-pill display-inline-block"> {{doc}} </span>
            {% endfor %}
        </p>
        
    </div>
</div>
{% endfor %}