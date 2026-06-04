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
        <div class="usa-summary-box" role="region" aria-labelledby="summary-box-key-information" style="background-color:{{arch.color}};border-color:{{arch.border}};">
            <div class="usa-summary-box__body">
                <h4 class="usa-summary-box__heading" id="summary-box-key-information">
                    {{cap.name}}
                </h4>
                <div class="usa-summary-box__text">
                    <p style="margin: 5px 0 2px; fontSize: 11; lineHeight: 1.5, opacity: 0.9">
                        {{cap.detail}}
                    </p>
                </div>
            </div>
        </div>
       {% endfor %}
       <br>
        <h4 class="usa-summary-box__heading">Standards</h4>             
            <hr>
            <p style="line-break: strict;">
            {% for standard in arch.standards %}
                    <span class="usa-tag" style="padding-left: 10px; padding-right: 10px;border-radius: 25px;inline-block;">{{standard}}</span>
            {% endfor %}
            </p>
        <h4 class="usa-summary-box__heading">Document Section</h4>
          <hr>
          <p style="line-break: strict;">
            {% for doc in arch.docs %}
                    <span class="usa-tag" style="padding-left: 10px; padding-right: 10px;border-radius: 25px;inline-block;"> {{doc}} </span>
            {% endfor %}
        </p>
        
    </div>
</div>
{% endfor %}