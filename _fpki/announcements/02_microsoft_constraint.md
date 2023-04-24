---
layout: page
title: Federal Common Policy CA Removal from Microsoft Trust Store Impact
pubDate: 05/18/2018
archiveDate: 05/19/2019
removeDate: 05/19/2021
collection: fpki
category: Microsoft
description: UUpcoming changes regarding Microsoft's remove of the U.S. Government Root CA.
category: Removed
sidenav: fpkiarchivedannouncements
sticky_sidenav: true

subnav: 
    - text: How Does this Work?
      href: '#how-does-this-work'
    - text: What Will Be Impacted?
      href: '#what-will-be-impacted'
    - text: What Should I Do?
      href: '#what-should-i-do'
    - text: How Can I Test?
      href: '#how-can-i-test'
    - text: Frequently Asked Questions
      href: '#frequently-asked-questions'
    - text: Additional Resources
      href: '#additional-resources'
---

{% include alert-warning.html content="This announcement has been archived and is hosted solely for historical reference. It is no longer being updated or maintained." %}


Upcoming changes regarding Microsoft's Trusted Root Program could impact your agency. The Federal PKI Policy Authority has requested that Microsoft **remove** our U.S. Government Root CA certificate (Federal Common Policy CA [COMMON]) from Microsoft's globally distributed Certificate Trust List (CTL).

{% include alert-info.html content="The Federal PKI Policy Authority is working with Microsoft on the timeline for removing COMMON. As more information and additional procedures become available, this announcement will be updated. Please watch for updates from the Federal PKI listserves, ICAM listservs, and the ICAM Sub-committee." %} 

## How Does This Work?
Today, Microsoft distributes hundreds of trusted root CA certificates, including COMMON, through its _Certificate Trust List (CTL)_. Microsoft distributes two CTLs for Windows operating systems: which root CAs are trusted, and which CAs are untrusted. The _Trusted CTL_ (*authrootstl.cab*) adds certificates to the Microsoft Trusted Root Certification Authorities certificate store, and the _Untrusted CTL_ (*disallowedcertstl.cab*) adds certificates to the Untrusted Certificates store. 

Starting in Windows 10 and Server 2016, Microsoft may also include date-based CTL entries.  For example, a date based CTL entry will disallow trusting code-signing or server authentication certificates issued after a specific date. 

Microsoft distributes the Trusted and Untrusted CTLs to the following Windows Operating Systems: 

| **Versions** | 
| :-------- | 
| Windows 10  | 
| Windows 8.1   | 
| Windows 8   | 
| Windows Vista   | 
| Windows Server 2016 |
| Windows Server 2012 R2 |
| Windows Server 2008 R2 |

## What Will Be Impacted?
When Microsoft removes COMMON, government users of Windows will receive errors. Errors will occur in the following scenarios:  

2. Performing smartcard logon to the government networks using PIV credentials 
2. Authenticating to the government virtual private network endpoints (VPNs) using PIV credentials 
2. Authenticating to the government internet facing authentication and collaboration portals
3. Browsing with Microsoft Internet Explorer, Edge or Chrome browsers to a government **intranet** website that has a TLS/SSL certificate issued by a Federal PKI CA that validates to COMMMON. 
4. Opening an email in Microsoft Outlook that was digitally signed using a certificate issued by a Federal PKI CA that validates to COMMON.
5. Opening a Microsoft Office document that was digitally signed with a certificate issued by a Federal PKI CA that validates to COMMON.

{% include alert-info.html content="If you are unsure whether your applications will be affected, email us at: fpki@gsa.gov." %} 

This change will also impact partner users that rely on COMMON. For example, a Department of Defense employee sending a digitally signed email to a business partner.

You can mitigate the risk to government missions, intranets, applications, and government-furnished equipment.

## How Can I Test?

Testing by government teams did not allow locally administered certificate stores to override the Microsoft CTL distributed settings.  The decision was made to remove COMMON entirely from Microsoft's trust store.  No further testing on overriding the CTL settings will be conducted. 

To review the previous testing procedures:&nbsp;&nbsp;[CTL Testing]({{ site.baseurl }}/ctltestprocedures/){:target="_blank"}{:rel="noopener noreferrer"}.

## Frequently Asked Questions

### 1.&nbsp;&nbsp;Why is COMMMON being removed? 
The Federal PKI CAs don't comply with Microsoft's requirements for globally trusted TLS/SSL certificates. Microsoft's requirements include: 

**a.&nbsp;&nbsp;Requirement for Fully-Qualified Domain Names (FQDNs)**<br>
Microsoft plans to restrict TLS/SSL certificates to only those certificates using FQDNs ending in .gov, .mil, or fed.us.  Some Federal agencies issue TLS/SSL certificates to intranet assets.  These certificates either:&nbsp;&nbsp;don't have FQDNs; contain intranet domains that don't end in .gov, .mil, or fed.us; or use short names (aliases). Under Microsoft's requirements, these agencies would need to reissue, re-install, and reconfigure all "non-compliant" certificates and applications.  The Federal PKI community has determined that this would have a negative impact on mission applications on the intranets.

**b.&nbsp;&nbsp;Requirement for public audit**<br>
The Federal PKI follows a government auditing standard, and we have not restricted our issuance of TLS/SSL certificates to only the .gov and .mil domains. Under the requirements, all CAs in Federal PKI that could issue TLS/SSL certificates are required to submit a non-government audit or be technically constrained.  Federal PKI has **not** technically constrained our CAs.  

**c.&nbsp;&nbsp;Requirement to disclose Certificate Practice Statements and Incident Post-Mortem Reports**<br>
Public trust requires public disclosure and transparency.  All Federal PKI CAs would be required to publicly post their Certificate Practice Statements and their Audit Letters.  The Federal PKI community has attempted to disclose all Certificate Practice Statements for a number of years.  However, some federal agencies include sensitive information in these documents and cannot disclose the documents publicly.  

**d.&nbsp;&nbsp;Requirement to create new issuing Certification Authorities (CAs)**<br>
Any Federal PKI CA that issues TLS/SSL, code-signing, or email-signing certificates would have to establish a new CA for each type of certificate. This effort requires time, planning, and funding.   

### 2.&nbsp;&nbsp;How can I determine which of our intranet websites and applications will be impacted, including those used by cross-agency users?  
All Windows-based websites and applications configured with certificates (email, Virtual Private Network, digital signature, etc.) issued by a Federal PKI CA that validates to COMMON will be impacted. For agencies and mission partners that are cross-certified with the FBCA, external users could also be impacted if COMMON is used instead of your root.

You can run a report on all issued certificates or, if your agency has an agreement with a Federal PKI Shared Service Provider (SSP), you can request that the SSP run the report.

You can scan your intranet websites in coordination with your CISO teams.  There are existing tools to use, or you can use the DHS NCATS "**pshtt**" tool, which will also check for cipher suites and mis-configurations on the intranet websites:  

- DHS NCATS [**pshtt**](https://github.com/dhs-ncats/pshtt){:target="_blank"}{:rel="noopener noreferrer"} 

**Note:**&nbsp;&nbsp;This tool will look for not just Federal PKI certificates.  Its outputs will include all certificates and information.

### 3.&nbsp;&nbsp;How can I determine whether my agency users and government-furnished equipment will be impacted?  
Check your enterprise trust store configurations in your Microsoft domain and devices.  You must verify how COMMON was installed and managed. 

View where and how a certificate is being installed using the certificates snap-in (certmgr.msc).  Under **View -> Options**, click the **Show _Physical certificate stores_** option.   

If COMMON is already in the Trusted Root Certification Authorities or Enterprise Trust store and the _source_ is a group policy object or the enterprise trust domain, you don't need to reinstall or change. 

### 4.&nbsp;&nbsp;Is PIV network login impacted?  

Yes. See [Install Using Group Policy Objects](#install-using-group-policy-objects) to mitigate this risk.

### 5.&nbsp;&nbsp;Do I need to remove the "baked-in" version of COMMON?  
No, don't remove COMMON.  When Microsoft does the update for the CTL, it will be removed during normal patching cycles. 

You may see two versions of the certificate in Trusted Root Certificate Authorities.  You must verify how COMMON was installed and managed.    

View where and how a certificate is being installed using the certificates snap-in (certmgr.msc).  Under **View -> Options**, click the **Show _Physical certificate stores_** option.  

### 6.&nbsp;&nbsp;Do I need to add COMMON to the Trusted Root Certification Authorities store, or should I add it to the Enterprise Trust Store?
Microsoft Operating Systems use different physical containers and logical views of these containers for trust stores.  In addition, different tools will have different **names** for the same physical or logical view.  For example:

| **Certificates snap-in (certmgr.msc)**  | **Enterprise PKI snap-in**  |  **certutil** | **Registry** | 
| :--------  | :------------------------------- | :--------- | :----------- |
| Trusted Root Certification Authorities | Certificate Authorities Container tab|  Root and RootCA | Root | 

It can be confusing--the easiest model is to follow one of the two methods in [What Should I Do?](#what-should-i-do)

To read detailed information on certificate stores, logical views, physical views, and registry locations: [Managing Certificates with Certificate Stores](https://msdn.microsoft.com/en-us/library/windows/desktop/aa386971(v=vs.85).aspx){:target="_blank"}{:rel="noopener noreferrer"}

### 7.&nbsp;&nbsp;Do I need to change any trust property for COMMON managed by group policy objects?
No, trust properties are not set by group policy objects. If your agency currently distributes COMMON through a group policy object, no change is needed.

### 8.&nbsp;&nbsp;What Windows versions are affected?
All Windows versions from Vista forward are affected. 

### 9.&nbsp;&nbsp;Can I create a custom CTL for our enterprise?
Yes, a trusted or untrusted, custom CTL can be created for your agency enterprise: [Creating, Signing, and Storing a CTL](https://msdn.microsoft.com/en-us/library/windows/desktop/aa379867(v=vs.85).aspx){:target="_blank"}{:rel="noopener noreferrer"}.

However, we don't recommend this. Simplicity can help security, and it can be simpler to manage a group policy object than a custom CTL.

## Additional Resources

1. [Certificate Trust List Overview](https://msdn.microsoft.com/en-us/library/windows/desktop/aa376545(v=vs.85).aspx){:target="_blank"}{:rel="noopener noreferrer"}
1. [Managing Certificates with Certificate Stores](https://msdn.microsoft.com/en-us/library/windows/desktop/aa386971(v=vs.85).aspx){:target="_blank"}{:rel="noopener noreferrer"}
1. [Configure Trusted Roots and Disallowed Certificates](https://technet.microsoft.com/en-us/library/dn265983.aspx){:target="_blank"}{:rel="noopener noreferrer"}
