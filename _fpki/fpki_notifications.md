---
layout: default
collection: fpki
title: System Changes and Notifications
permalink: guidefpki/notifications/
subnav: fpki
---

This page lists the changes to certification authorities and supporting systems operating within the Federal PKI community.  

- [List of Notifications](#notifications)
- [Add New Notification](https://github.com/GSA/fpki-guides/issues/new?title=System%20Notification%20for%3A%20<Your%20Organization>&body=notice_date%3A%20%0Achange_type%3A%20%20CA%20Certificate%20Issuance%2C%20CA%20Certificate%20Revocation%2C%20New%20CA%2C%20URI%20Change%2C%20System%20Outage%20%0Astart_datetime%3A%20%0Aend_datetime%3A%20%0Asystem%3A%20%0Achange_description%3A%20%0Acontact%3A%20%0Aca_certificate_hash%3A%20%0Aca_certificate_issuer%3A%20%0Aca_certificate_subject%3A%20%0Acdp_uri%3A%20%0Aaia_uri%3A%20%0Asia_uri%3A%20%0Aocsp_uri%3A%0A%20%0A&labels[]=System%20Notification){:target="_blank"}
- [How to Add a New Notification](#how-to-add-a-new-notification)

The communication of changes, and planned or unplanned system outages, is required by the certificate policies and the incident management process.  Strong communication allows for planning and response and benefits the Federal PKI community as a whole.  Planned changes of the these types require notifications two (2) weeks in advance:

- Changes to Certificate Revocation List Distribution Points
- Changes to Online Certificate Status Protocol (OCSP) endpoints
- Introducing new URIs or retiring old URIs referenced in the Certificates profiles in use
- Signing or revoking a _Certificate Authority (CA)_ certificate

System **outages** - either through a planned maintenance activity or unplanned event - may also be posted on this page, and may trigger the Incident Management process.    

To report a change **or** system outage not listed below, please email fpki@gsa.gov.

## Notifications
<!-- This block loops through the notifications yml file under the data directory. -->

<div class="usa-width-one-whole">
<hr>
{% for notification in site.data.fpkinotifications reversed %}
  <ul class="usa-unstyled-list">
    <li><strong>Notice Date: </strong> {{ notification.notice_date }}</li>
    <li><strong>System:</strong> {{ notification.system }}</li>
    <li><strong>Type:</strong> {{ notification.change_type }}</li>
  </ul>

{% if notification.notification.start_datetime %}
	<ul class="usa-unstyled-list">
		<li><strong>Start Date:</strong> {{ notification.start_datetime }}</li>
	</ul>
{% endif %}

{% if notification.notification.end_datetime %}
	<ul class="usa-unstyled-list">
		<li><strong>End Date and Time:</strong> {{ notification.end_datetime }}</li>
	</ul>
{% endif %}

<ul class="usa-unstyled-list">
    <li><strong>Change Description:</strong> {{ notification.change_description }}</li>
    <li><strong>Contact:</strong> {{ notification.contact }}</li>
</ul>  

{% if notification.ca_certificate_issuer %}
	<ul class="usa-unstyled-list">
		<li><strong>Certificate Issuer:</strong> {{ notification.ca_certificate_issuer }}</li>
		<li><strong>Certificate Subject:</strong> {{ notification.ca_certificate_subject }}</li>
		<li><strong>Certificate SHA1 Hash:</strong> {{ notification.ca_certificate_hash }}</li>  
	</ul>
{% endif %}

{% if notification.cdp_uri %}
	<ul class="usa-unstyled-list">
		<li><strong>Certificate Revocation List:</strong> {{ notification.cdp_uri }}</li>
	</ul>
{% endif %}

{% if notification.aia_uri %}
	<ul class="usa-unstyled-list">
		<li><strong>Certificate Bundle (AIA):</strong> {{ notification.aia_uri }}</li>
	</ul>
{% endif %}

{% if notification.sia_uri %}
	<ul class="usa-unstyled-list">
		<li><strong>Certificate Bundle (SIA):</strong> {{ notification.sia_uri }}</li>
	</ul>
{% endif %}

{% if notification.ocsp_uri %}
	<ul class="usa-unstyled-list">
		<li><strong>OCSP:</strong> {{ notification.ocsp_uri }}</li>
	</ul>
{% endif %}

<hr>
{% endfor %}

</div>


## How to Add a New Notification
System notifications can be submitted via either GitHub or email.

#### Submit Notification via GitHub Issue 

  - Select [Add New Notification](https://github.com/GSA/fpki-guides/issues/new?title=System%20Notification%20for%3A%20<Your%20Organization>&body=notice_date%3A%20%0Achange_type%3A%20%20CA%20Certificate%20Issuance%2C%20CA%20Certificate%20Revocation%2C%20New%20CA%2C%20URI%20Change%2C%20System%20Outage%20%0Astart_datetime%3A%20%0Aend_datetime%3A%20%0Asystem%3A%20%0Achange_description%3A%20%0Acontact%3A%20%0Aca_certificate_hash%3A%20%0Aca_certificate_issuer%3A%20%0Aca_certificate_subject%3A%20%0Acdp_uri%3A%20%0Aaia_uri%3A%20%0Asia_uri%3A%20%0Aocsp_uri%3A%0A%20%0A&labels[]=System%20Notification){:target="_blank"}

  - This will open a new Issue form with input information for notification information.
  - Enter the information and click 'Submit new issue' to submit the notification.

#### Submit Notification via Email
The notification can also be emailed to fpki@gsa.gov. The email should contain the following information.

Subject:  FPKI System Notification - System Name 
  
- Notice date  
- Change type of one of the following: CA Certificate Issuance, CA Certificate Revocation, New CA, URI Change, System Outage  
- Change start date   
- Change end date  
- Change description  
- Contact email  
- If the change is a new or revoked CA certificate, include the CA Certificate hash (sha1 thumbprint), Issuer and Subject DNs  
- If the change is a new URI, include the new CDP, AIA, SIA or OCSP value  





