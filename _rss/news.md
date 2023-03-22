---

layout: page
collection: rss
title: GSA Industry News
permalink: /news/
sidenav: rss
sticky_sidenav: true

subnav:
  - text: Section 1
    href: '#section-1'
  - text: Section 2
    href: '#section-2'
  - text: Section 3
    href: '#section-3'

---

{% for feed in site.data.gsafeeds %}
{% assign url = feed.source %}
{% if feed.status == "active" %}
<h3 class="site-preview-heading"></h3>
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
   
   <button type="button" class="usa-accordion__button" aria-expanded="{{feed.expanded}}" aria-controls="b-a{{feed.feedid}}">
    <p>{{feed.name}}</p>
    <p style="font-weight:normal;">{{feed.description}}</p>
    <hr />
    <p style="color:#c0c0c0;">Source: <a style="color:#c0c0c0;font-size:11pt;" href="{feed.website}" target="_blank">{{feed.website}}</a></p>
   </button>
  </h4>
  <div id="b-a{{feed.feedid}}" class="usa-accordion__content usa-prose">
      <div class="shadow-2 radius-md" style="padding: 10px;">
        <b>Title:</b> <a href="#" title="Title of the RSS Feed">Ttitle Text {{i}}</a><br/>
        <b>Description:</b> Description of rss feed {{i}}<br/>
        <b>Date:</b> Date here {{i}}<br/>
      </div>
  </div>
</div>
{% endif %}
{% endfor %}
