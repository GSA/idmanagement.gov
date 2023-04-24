---
layout: page
collection: fpki
title: System Changes and Notifications
permalink: /fpki/notifications/
sidenav: fpki
sticky_sidenav: true

subnav:
  - text: System Changes and Notifications
    href: '#notifications'
  - text: How to Add a New Notification
    href: '#how-to-add-a-new-notification'
---

This page lists the changes to certification authorities and supporting systems operating within the Federal PKI community.  

The communication of changes, and planned or unplanned system outages, is required by the certificate policies and the incident management process.  Strong communication allows for planning and response and benefits the Federal PKI community as a whole.  Planned changes of the these types require notifications two (2) weeks in advance:

- Changes to Certificate Revocation List Distribution Points
- Changes to Online Certificate Status Protocol (OCSP) endpoints
- Introducing new URIs or retiring old URIs referenced in the Certificates profiles in use
- Signing or revoking a _Certificate Authority (CA)_ certificate

System **outages** - either through a planned maintenance activity or unplanned event - may also be posted on this page, and may trigger the Incident Management process.    

To report a change **or** system outage not listed below, please email <span>fpki</span><span>@</span><span>gsa</span><span>.</span><span>gov</span>.

## Notifications

<!-- This block loops through the notifications yml file under the data directory. -->

<div class="usa-width-one-whole">
 
{% for notification in site.data.fpkinotifications %}
  <ul class="usa-unstyled-list">
    <hr>
    <li><strong>Notice Date: </strong> {{ notification.notice_date }} </li>
    <li><strong>System:</strong> {{ notification.system }} </li>
    <li><strong>Type:</strong> {{ notification.change_type }} </li>
    <li><strong>Change Description:</strong> {{ notification.change_description }} </li>
    <li><strong>Contact:</strong> {{ notification.contact }}</li>
    <li><strong>Certificate Issuer:</strong> {{ notification.ca_certificate_issuer }}</li>
    <li><strong>Certificate Subject:</strong> {{ notification.ca_certificate_subject }}</li>
    <li><strong>Certificate SHA1 Hash:</strong> {{ notification.ca_certificate_hash }}</li> 
    <li><strong>Certificate Revocation List:</strong> {{ notification.cdp_uri }}</li>
    <li><strong>Certificate Bundle (AIA):</strong> {{ notification.aia_uri }}</li>
    <li><strong>Certificate Bundle (SIA):</strong> {{ notification.sia_uri }}</li>
    <li><strong>OCSP:</strong> {{ notification.ocsp_uri }}</li>
    <li><strong>EE CRL DP:</strong> {{ notification.ee_cdp_uri }}</li>
    <li><strong>EE OCSP:</strong> {{ notification.ee_ocsp_uri }}</li>
  </ul>

{% endfor %}

</div>


## How to Add a New Notification
System notifications can be submitted via either GitHub or email.

#### Submit Notification via GitHub Issue 

  - Select [Add New Notification](https://github.com/GSA/ficam-playbooks/issues/new?title=System%20Notification%20for%3A%20%3CYour%20Organization%3E&body=notice_date%3A%20%0Achange_type%3A%20%20CA%20Certificate%20Issuance%2C%20CA%20Certificate%20Revocation%2C%20New%20CA%2C%20URI%20Change%2C%20System%20Outage%20%0Astart_datetime%3A%20%0Aend_datetime%3A%20%0Asystem%3A%20%0Achange_description%3A%20%0Acontact%3A%20%0Aca_certificate_hash%3A%20%0Aca_certificate_issuer%3A%20%0Aca_certificate_subject%3A%20%0Acdp_uri%3A%20%0Aaia_uri%3A%20%0Asia_uri%3A%20%0Aocsp_uri%3A%0A%20%0A&labels[]=System%20Notification){:target="_blank"}{:rel="noopener noreferrer"}

  - This will open a new Issue form with input information for notification information.
  - Enter the information and click 'Submit new issue' to submit the notification.

#### Submit Notification via Email
The notification can also be emailed to <span>fpki</span><span>@</span><span>gsa</span><span>.</span><span>gov</span>. The email should contain the following information.

Subject:  FPKI System Notification - System Name 
  
- Notice date  
- System
- Change type of one of the following: CA Certificate Issuance, CA Certificate Revocation, New CA, URI Change, System Outage, Intent to Issue/Revoke CA Certificate    
- Change description: Include a start date or end date if applicable
- Contact email  
- Issuer 
- Subject DNs  
- If the change is a new or revoked CA certificate, include the CA Certificate hash (sha1 thumbprint), 
- If the change is a new URI, include the new Certificate Revocation List (CRL), Certificate Bundle AIA and SIA, OCSP, EE CRL DP, and/or EE OCSP value. 





