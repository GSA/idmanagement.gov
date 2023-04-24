---
layout: page
title: Chrome Certificate Transparency Requirements
pubDate: 08/10/2018
archiveDate: 08/09/2019
removeDate: 08/09/2021
# removed permalink
collection: fpki
category: Google
description: All TLS/SSL certificates issued after **April 30, 2018**, that validate to a publicly trusted Root Certification Authority (CA) certificate must appear in a CT log. Users browsing to non-CT compliant, federal intranet websites will encounter connection errors.
sidenav: fpkiarchivedannouncements
category: Removed
sticky_sidenav: true

subnav:
   - text: How Does This Work?
     href: '#how-does-this-work'
   - text: What Will Be Impacted?
     href: '#what-will-be-impacted'
   - text: When Will This Start?
     href: '#when-will-this-start'
   - text: What Should I Do?
     href: '#what-should-i-do'
   - text: Frequently Asked Questions
     href: '#frequently-asked-questions'
   - text: Additional Resources
     href: '#additional-resources'
---

{% include alert-warning.html content="This announcement has been archived and is hosted solely for historical reference. It is no longer being updated or maintained." %}


As of **July 24, 2018**, Google is now enforcing Certificate Transparency (CT) for Chrome 68 and above. This means that all TLS/SSL certificates issued after **April 30, 2018**, that validate to a publicly trusted Root Certification Authority (CA) certificate must appear in a CT log in order to be trusted by Chrome 68 and above. In addition, websites must serve proof of certificate inclusion in the CT log through a Signed Certificate Timestamp (SCT). Users browsing to non-CT compliant, federal intranet websites will encounter connection errors.

{% include alert-info.html content="Many popular browsers plan to deploy CT in their product roadmaps. Timelines will be updated on this site as browser deployment dates become known." %}

## How Does This Work?

The requirements for CT are built into _browsers_. 

- All roots that have been distributed _by one or more_ of the Microsoft, Android, Apple, or Mozilla trusted root programs are listed here: [Root Stores](https://cs.chromium.org/chromium/src/net/data/ssl/root_stores/README.md){:target="_blank"}{:rel="noopener noreferrer"}.
- When a government user browses to an intranet website, the user's workstation or mobile device will build one or more certificate paths to the enterprise or publicly trusted roots. 
- The browser will compare the certificate path(s) to the list of roots that have _ever_ been included in the popular trust stores currently in use worldwide.
- If any certificate in the trust chain matches one of the roots in the list, then the CT requirements will be in effect. 

## What Will Be Impacted?

A government user will receive an error on government-furnished equipment if all of the following are true: 

1. Using Chrome 68 or higher (**Note:** Additional browsers may be affected in the future.)
2. Browsing to an intranet website with a TLS/SSL certificate that validates to the Federal Common Policy CA
3. The TLS/SSL certificate was issued after **April 30, 2018**

![Chrome Error Screen]({{site.baseurl}}/img/google_ct_hot_topic_error.png){:style="width:55%;float:center;"}

## When Will This Start?

CT enforcement has begun. As of **July 24, 2018**, Google is now enforcing CT for Chrome 68 and above.

## What Should I Do?

To mitigate the impact on the federal enterprise, you must disable CT enforcement for the affected intranet websites. 

Please see [Disable CT Enforcement for Government-Furnished Equipment](#disable-ct-enforcement-for-government-furnished-equipment).


### Disable CT Enforcement for Government-Furnished Equipment
{% include alert-info.html content="Two options are outlined in this section. Additional options may become available for future releases of Chrome. We will continue to update these procedures and post additional information as it becomes available. Please also check the GitHub Issues in the GSA FPKI-Guides repository for in-progress discussions." %} 

#### Option 1:&nbsp;&nbsp;Disable CT Enforcement for "Legacy" CAs (Recommended Configuration)

Google Chrome's "CertificateTransparencyEnforcementDisabledForLegacyCas" policy configuration allows you to disable CT enforcement for websites that chain to a user-specified "legacy" CA. Google Chrome categorizes a CA as "legacy" if it meets the following criteria:

1. The CA has been publicly trusted by default in one or more operating systems supported by Chrome, such as Windows or macOS.
2. The CA isn't currently trusted by the Android Open Source Project or Chrome OS.

The Federal Common Policy CA meets Google's criteria for a "legacy" CA, so you can disable CT enforcement for intranet websites that chain to it. In some cases, you'll need to create a new registry key tree in the locations specified below:

**a.&nbsp;&nbsp;Windows Registry location for Windows clients:**<br>

For _HKEY_LOCAL_MACHINE\Software\Policies\Google\Chrome\CertificateTransparencyEnforcementDisabledForLegacyCas_, add a new string value:
   
   ```
   Name = 1 | Data = sha256/jotW9ZGKJb2F3OdmY/2UzCNpDxDqlYZhMXHG+DeIkNU=
   ```
   
**b.&nbsp;&nbsp;Windows Registry location for Chrome OS clients:**<br>

For _HKEY_LOCAL_MACHINE\Software\Policies\Google\ChromeOS\CertificateTransparencyEnforcementDisabledForLegacyCas_, add new string value:

   ```
   Name = 1 | Data = sha256/jotW9ZGKJb2F3OdmY/2UzCNpDxDqlYZhMXHG+DeIkNU=
   ```
   
**c.&nbsp;&nbsp;macOS**<br>

For preference name, _CertificateTransparencyEnforcementDisabledForLegacyCas_, add values:

   ```
   <array>
     <string>sha256/jotW9ZGKJb2F3OdmY/2UzCNpDxDqlYZhMXHG+DeIkNU=</string>
   </array>
   ```

**Note:**&nbsp;&nbsp;In all cases above, `jotW9ZGKJb2F3OdmY/2UzCNpDxDqlYZhMXHG+DeIkNU=` is a Base64 encoding of a SHA-256 hash of the Federal Common Policy CA's Subject Public Key Information (SPKI) field.


#### Option 2:&nbsp;&nbsp;Disable CT Enforcement for Domains and Sub-Domains

Chrome for government-furnished equipment will not enforce CT requirements if you apply a policy rule and include a **.gov or .mil second-level domain**, such as _agency.gov_, or other **third-level sub-domains**, such as _example.agency.gov_. You should apply configuration changes for only government-furnished equipment and only include an explicit list of second-level or below sub-domains in use for intranet websites. In some cases, you may need to create a new registry key tree in the locations specified below: 


**a.&nbsp;&nbsp;Windows Registry location for Windows clients:**<br>

For _HKEY_LOCAL_MACHINE\Software\Policies\Google\Chrome\CertificateTransparencyEnforcementDisabledForUrls_, add new string value:

   ```
   Agency Sub-Domain example:
   
   Name = 1 | Data = example.agency.gov
   
   Gov/Mil Top-Level Domain example:
   
   Name = 2 | Data = gov
   Name = 3 | Data = mil
   ```
   
**b.&nbsp;&nbsp;Windows Registry location for Chrome OS clients:**<br>

For _HKEY_LOCAL_MACHINE\Software\Policies\Google\ChromeOS\CertificateTransparencyEnforcementDisabledForUrls_, add new string value:

   ```
   Sub-Domain example:
   
   Name = 1 | Data = example.agency.gov
   
   Gov/Mil Top-Level Domain example:
   
   Name = 2 | Data = gov
   Name = 3 | Data = mil
   ```
   
**c.&nbsp;&nbsp;macOS**<br>

For _preference name_, _CertificateTransparencyEnforcementDisabledForUrls_, add values:<br>

   ```
   <array>
     <string>example.agency.gov</string>
     <string>.example.agency.gov</string>
     <string>gov</string>
     <string>mil</string>
   </array>
   ```

## Frequently Asked Questions

### 1. Will Google's use of CT in Chrome impact my agency's internal, only locally trusted CA TLS/SSL certificates?

No. There will be no impact if you use your agency's internal, only locally trusted CA to issue TLS/SSL certificates to intranet sites. Chrome's CT enforcement will impact only federal intranet sites whose TLS/SSL certificates validate to Federal Common Policy CA, whose certificate is currently distributed through operating system trust stores.

### 2. Why is Google enforcing CT in Chrome?

Chrome's CT change has been planned and incrementally implemented for over two years.  CT provides a benefit to the global community by:

- Improving openness and transparency
- Allowing domain owners to identify mistakenly or maliciously issued certificates 

### 3. How do I know whether my intranet website is compliant with CT?
You can check for CT compliance by using the steps below to verify the presence of an SCT. These steps apply to any Federal PKI TLS/SSL certificate or commercially sourced certificate. 

**Note:**&nbsp;&nbsp;SCTs are only required for certificates issued after April 30, 2018.  Some certificates issued **before** this date may already be compliant. To check compliance: 

1. Open Chrome and browse to your website.
2. In Chrome, go to **Settings->More Tools**.
3. Open the **Developer Tools** panel:<br>
   ```
   Windows:  CTRL + Shift + "i"
   macOS:  Apple key + Shift + "i"
   ```
4. Select the **Security** tab in the **Developer Tools**.
5. Refresh the website page and click on the website under the **Main origin** column.
6. If the certificate is compliant, it will display the CT log details under the **Certificate Transparency** heading. 

## Additional Resources
1. [What is Certificate Transparency?](https://www.certificate-transparency.org/){:target="_blank"}{:rel="noopener noreferrer"}
2. [Certificate Transparency Background](https://groups.google.com/a/chromium.org/forum/#!topic/ct-policy/78N3SMcqUGw){:target="_blank"}{:rel="noopener noreferrer"}
3. [Certificate Transparency in Chrome--Detailed Information](http://www.certificate-transparency.org/certificate-transparency-in-chrome){:target="_blank"}{:rel="noopener noreferrer"}
3. [Certificate Transparency--Resources for Site Owners](https://sites.google.com/site/certificatetransparency/resources-for-site-owners){:target="_blank"}{:rel="noopener noreferrer"}
4. [How to Disable CT in Enterprise Chrome](http://www.chromium.org/administrators/policy-list-3#CertificateTransparencyEnforcementDisabledForUrls){:target="_blank"}{:rel="noopener noreferrer"}  
5. [Chrome Policy Templates](https://www.chromium.org/administrators/policy-templates){:target="_blank"}{:rel="noopener noreferrer"}
