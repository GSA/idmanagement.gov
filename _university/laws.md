---
layout: page
collection: university
title: U.S. Laws
permalink: /university/laws/
sidenav: university
sticky_sidenav: true


subnav:
#   - text: Laws
#     href: '#laws'
pdf: "docs/ficam-arch.pdf"

---

Review the federal laws that impact and shape the implementations of ICAM programs and systems.

<hr/>

<!-- <a href="https://www.govinfo.gov/content/pkg/USCODE-2018-title5/pdf/USCODE-2018-title5-partI-chap5-subchapII-sec552a.pdf" target="_blank" rel="noopener noreferrer">**The Privacy Act of 1974**</a> (2018)<br/>
> This Act protects certain federal government records pertaining to individuals. In particular, the Act covers systems of records that an agency maintains and retrieves by an individual’s name or other personal identifier, such as a Social Security Number.

<a href="http://www.gpo.gov/fdsys/pkg/PLAW-113publ283" target="_blank" rel="noopener noreferrer">**Federal Information Security Modernization Act (FISMA) of 2014**</a> (December 2014)<br/>
> This Act provides a framework for measuring the effectiveness of federal information systems, and it calls for the development and implementation of continuous monitoring oversight mechanisms. It also acknowledges federal agencies should take advantage of commercially available security products (including software, hardware, etc.) that often provide robust information security solutions.

<a href="https://www.gpo.gov/fdsys/pkg/PLAW-107publ347/html/PLAW-107publ347.htm" target="_blank" rel="noopener noreferrer">**E-Government Act of 2002**</a> (December 2002)<br/>
> This Act enhances the management and promotion of electronic federal services and processes by establishing a Federal CIO within the Office of Management and Budget (OMB) and by establishing a broad framework of measures that require using Internet-based information technology (IT) to enhance citizen access to government information and services and for other purposes.

<a href="https://www.gpo.gov/fdsys/pkg/PLAW-106publ229/html/PLAW-106publ229.htm" target="_blank" rel="noopener noreferrer">**Electronic Signatures in Global and National (ESIGN) Commerce Act of 2000**</a> (June 2000)<br/>
> This Act facilitates the use of electronic records and electronic signatures in interstate and foreign commerce by ensuring the validity and legal effect of electronic contracts.

<a href="https://www.gpo.gov/fdsys/pkg/PLAW-105publ277/html/PLAW-105publ277.htm" target="_blank" rel="noopener noreferrer">**Government Paperwork Elimination Act of 1998 (GPEA)**</a> (October 1998)<br/>
> This Act requires federal agencies to allow individuals or entities that deal with the agencies the option to submit information or transact with the agency electronically when possible and to maintain records electronically when possible. This Act specifically states that electronic records and their related electronic signatures cannot be denied legal effect, validity, or enforceability just because they are in electronic form. This Act also encourages federal government use of a range of electronic signature alternatives. -->

{% assign lcount = 0 %}
{% for law in site.data.laws %}
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="{{law.expanded}}" aria-controls="gsa-{{forloop.index}}">
      {{law.name}} ({{law.pubdate}})
    </button>
  </h4>
  <div id="gsa-{{forloop.index}}" class="usa-accordion__content usa-prose">
    <p>
        {{law.summary}}
        <div class="display-flex flex-column flex-align-end">
            <span class="gsa-source">Source: {{law.source}}</span>
        </div>
        <hr/>
        <div class="display-flex flex-column flex-align-end">
        <a href="{{law.url}}" target="{{law.target}}" rel="noopener noreferrer">
            <button class="usa-button">View</button>
        </a>
        </div>
    </p>
  </div>
</div>
{% endfor %}