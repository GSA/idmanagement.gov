---
layout: page
title: Chrome TLS Certificate Lifetime Requirement
pubDate: 05/10/2018
archiveDate: 05/09/2019
removeDate: 05/09/2021
collection: fpki
tag: Chrome
description: Starting March 1, 2018, Chrome requires all TLS/SSL certificates to have a maximum lifetime of 825 days. You can mitigate the impact for government intranets, applications, and government-furnished equipment by using these procedures.
sidenav: fpkiarchivedannouncements
sticky_sidenav: true
category: Removed

subnav: 
    - text: What Will Be Impacted?
      href: '#what-will-be-impacted'
    - text: What Other Browsers Enforce This Requirement?
      href: '#what-other-browsers-enforce-this-requirement'
    - text: What Should I Do?
      href: '#what-should-i-do'
    - text: Additional Resources
      href: '#additional-resources'
---

{% include alert-warning.html content="This announcement has been archived and is hosted solely for historical reference. It is no longer being updated or maintained." %}


Recent changes to Chrome could affect your agency. Chrome now requires that TLS/SSL certificates issued on or after **March 1, 2018**, have a maximum lifetime of 825 days. Google is enforcing this change for Chrome as a result of the Certification Authority/Browser (CA/B) Forum's Ballot 193 to promote increased web security.<sup>[1](#1)</sup>  

## What Will Be Impacted?
A government user will receive an "untrusted site" error when browsing to an intranet website or application if all of the following are true: 

1. The intranet website's TLS/SSL certificate was issued by a Federal PKI Certification Authority
2. The TLS/SSL certificate was issued on or after March 1, 2018, with a lifetime greater than 825 days
3. Using the Chrome browser

![Chrome Error Screen]({{site.baseurl}}/img/google_ballot193_hot_topic_error.png){:style="width:70%;float:center;"}

## What Other Browsers Enforce This Requirement?
Chrome is the only browser currently enforcing this requirement for TLS/SSL certificates. If other browser vendors decide to enforce this requirement, we will post updates to this announcement. Please also check the [FPKI-Guides' Issues](https://github.com/GSA/fpki-guides/issues){:target="_blank"}{:rel="noopener noreferrer"} for in-progress discussions.

## What Should I Do?
To prevent Chrome browsing errors:
1. Request that your PKI team or Federal Shared Service Provider update the certificate profiles for TLS/SSL device certificates issued by Federal PKI Certification Authorities to require a certificate lifetime of less than 825 days.
2. Re-issue and re-install new TLS/SSL certificates for the impacted intranet websites and applications.

## Additional Resources
<a name="1">1</a>. In March 2017, the [CA/B Forum](https://cabforum.org/){:target="_blank"}{:rel="noopener noreferrer"} passed [Ballot 193](https://cabforum.org/2017/03/17/ballot-193-825-day-certificate-lifetimes/){:target="_blank"}{:rel="noopener noreferrer"}, which introduced the 825-day maximum lifetime requirement. 
