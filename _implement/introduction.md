---
layout: page
collection: implement
title: How to implement ICAM
permalink: /implement/
sticky_sidenav: true
sidenav: implement

subnav:
  - text: Configuration Guides
    href: '#configuration-guides'
  - text: ICAM Troubleshooting Tools
    href: '#icam-troubleshooting-tools'
  - text: Find Additional Guides
    href: '#find-additional-guides'
---

<div class="usa-alert usa-alert--error" role="alert">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Dec 2022 - Update to Microsoft Network Authentication Issue</h4>
    <p class="usa-alert__text">
      The Microsoft KB mentioned above is updated. Note that the "disabled" mode retirement is still targeted on 2/14/23. CISA encourages any agency still reliant on "disabled" mode to move to "compatibility mode" by following the <a class="usa-link usa-link--external" href="https://www.cisa.gov/guidance-applying-june-microsoft-patch" target="_blank" rel="noopener noreferrer">CISA Guidance</a> as soon as possible while a timeline and plans around long-term resolution of this issue is finalized with Microsoft. Additional technical guidance can be requested through cyber liaison at CISA dot DHS dot gov.
    </p>
  </div>
</div>

ICAM Engineering Guides are for system administrators configuring agency infrastructure, servers, and enterprise applications for authentication and other ICAM processes. The guides are focused on U.S. federal government implementations.

The majority of engineering guides are focused on helping agencies configure PIV credential authentication in the most common operating systems and applications. A new series of FIDO multi-factor authentication playbooks are also included.

## Configuration Guides

1. On-Premise Smart Card Configuration
   1. [Windows Domains]({{site.baseurl}}/implement/trust-fcpca/)
   2. [Windows Devices]({{site.baseurl}}/implement/scl-windows)
   3. [MacOS Devices]({{site.baseurl}}/implement/scl-macos)
   4. [SSH Command Line]({{site.baseurl}}/implement/scl-ssh/)
   5. [Firefox Browser]({{site.baseurl}}/implement/scl-firefox)
   6. [Microsoft Outlook]({{site.baseurl}}/implement/outlook)
  
2. Cloud Certificate-based Authentication Configuration
   1. [Cloud or Hybrid-Joined Azure Entra ID]({{site.baseurl}}/implement/cba-azure/)
   2. [Okta Yubikey Implementation Guide]({{site.baseurl}}/implement/yubikey-guide/)

3. FIDO2 Configuration
   1. [Windows Hello for Business]({{site.baseurl}}/implement/whfb)
   2. Security keys (Coming soon!)

## ICAM Troubleshooting Tools

ICAM can leverage a number of open-source protocols for interoperability and data transfer. The Federal PKI is also a large, distributed ecosystem of over 180 certification authorities. Each certification authority operates independently, which presents a challenge in trying to troubleshoot why a PIV card can't be validated. This is a list of tools to help troubleshoot ICAM issues.

1. Federal PKI Validation
   1. [FPKI Ecosystem Changes]({{site.baseurl}}/fpki/notifications) - This page contains three distinct pages of information as well as an associated certificate bundle.
      1. [FPKI Graph]({{site.baseurl}}/fpki/notifications/#fpki-graph) - The FPKI Graph displays the relationships between the certification authorities in the Federal PKI (FPKI) ecosystem.
      2. [PIV Issuer Information]({{site.baseurl}}/fpki/notifications/#piv-issuer-information) - List of active PIV issuing CAs with end entity certificate distribution points.
      3. [FPKI System Change and Notification]({{site.baseurl}}/fpki/notifications/#notifications) - List of changes to FPKI CA endpoint URL such as Certificate Revocation List Distribution Points, Online Certificate Status Protocol (OCSP) endpoints, and other CA certificate activity.
      4. [FPKI Certificate Bundle]({{site.baseurl}}/implement/tools/CACertificatesValidatingToFederalCommonPolicyG2.p7b){:target="_blank"}{:rel="noopener noreferrer"} - A certificate bundle in .p7b format that contains all CA certificfates that chain to the Common Policy CA and can be viewed in the FPKI Graph.
   2. [Personal Identify Verification (PIV) Cert Validator Tool](https://pv.test.max.gov/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - The PIV Certificate Validator is a website application hosted by Max.gov that verifies the certificates found on a PIV card. This tool is helpful in troubleshooting browser authentication issues.
   3. [FPKI Trust Infrastructure “HTTP.FPKI.Gov” URL Site Map (PDF, September 2022)]({{site.baseurl}}/docs/fpki-fpkima-sitemap.pdf){:target="_blank"}{:rel="noopener noreferrer"} - A consolidated list of public repository information for FPKI resources.
2. Federal PKI Deep Analysis
   1. [FPKI Certificate Profile Conformance Tool (CPCT)](https://github.com/GSA/cpct-tool/releases/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - CPCT is a self-hosted application that analyzes a FPKI certificate for conformance. Use this tool to identify if an FPKI certificate is compliant.
   2. [PIV and PIV-I Card Conformance Tool (CCT)](https://github.com/GSA/piv-conformance/releases){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - A GSA-developed java tool similar in function to the CPCT, but for PIV and PIV-I smart card testing. This is useful in identifying issues with a smart card.
   3. [NIST 85B (800-73-4) Test Tool](https://csrc.nist.gov/projects/nist-personal-identity-verification-program/software-downloads){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - Used to pull deep PIV contents when integrating PIV with various infrastructure components. 
3. PKI Tools
   1. [PKI Interoperability Test Tool (PITT) for Microsoft Windows](http://pkif.sourceforge.net/pitt.html){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - PITT is a utility that allows inspection and troubleshooting of certification path processing for a given PKI using both PKIF and Microsoft CAPI. It’s especially useful for identifying path discovery and validation issues as well as a PKI performance problems.
   2. [crt.sh](https://crt.sh/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - Certificate Transparency auditor used to find and audit TLS certificate issuances and issues. This is helpful in identifying all publicly issued certificates on a website.
4. FIDO2 Tools
   1. Coming soon!
5. Federation Tools
   1. Coming soon!

## Find Additional Guides

You can find additional guides across agency websites by using a few simple methods: 

1. Search on the Internet: include the _server_ or _application_ or _topic_ and add "+PIV +CAC"
2. Search on the Internet: include the _server_ or _application_ or _topic_ and add "+x509"
3. Search on Max.gov:  [Max.gov](https://max.gov){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} requires you to log in.  Try searching for the topic or guide.   

If you don't find what you're looking for, open an [Issue]({{site.repourl}}/issues/new){:target="_blank"}{:rel="noopener noreferrer"}.  We can help look through the archives of guides that haven't been posted yet or help you send a request to the government listserves.  

Your contributions are encouraged and welcome! You can [contribute]({{site.baseurl}}/contribute/){:target="_blank"}{:rel="noopener noreferrer"} to this effort or open an [Issue]({{site.repourl}}/issues/new){:target="_blank"}{:rel="noopener noreferrer"} to discuss a need you may have for a guide.

{% include alert-info.html heading="Are you trying to solve a problem?" content="Your colleagues have likely encountered or solved the same problem.  Engineering guides exist across the government.  This site's purpose is to organize tips from agency engineers, help link to .gov or .mil information available, and provide a common site for collaboration." %}

