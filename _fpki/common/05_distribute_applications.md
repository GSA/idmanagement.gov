---
layout: page 
title: 5. Distribute the certificate to applications
collection: fpki
permalink: /fpki/common/distribute-apps/
sticky_sidenav: true
sidenav: fpkicommon
---

{% include alert-info.html content="<strong>We're calling for all solutions!</strong> If you'd like to share your agency's playbook on how to distribute a trusted root CA certificate to an application trust store, create an <a href=\"https://github.com/GSA/ficam-playbooks/issues/new\" target=\"_blank\" rel=\"noopener noreferrer\">issue on GitHub</a> or email us at fpkirootupdate@gsa.gov." %}

Many, but not all, software applications leverage the underlying operating system [trust store]({{site.baseurl}}/fpki/trust-stores/) to verify whether a certificate should be trusted. 

Collaborate across agency teams to identify applications that rely on custom trust stores to ensure distribution of the Federal Common Policy CA (FCPCA) G2 certificate.

**Example applications with custom trust stores:**
- Java and all Java-based applications (for example, Apache Tomcat)
- Mozilla products (for example, [Firefox]({{site.baseurl}}/fpki/common/faq/#how-do-i-configure-the-firefox-web-browser-to-trust-the-new-federal-common-policy-ca-g2){:target="_blank"}{:rel="noopener noreferrer"} or Thunderbird)
- OpenSSL-based applications (for example, Apache HTTP Server or Nginx)

{% include alert-warning.html content="<strong>Important!</strong> Depending on how these applications are configured, it's likely you'll also need to distribute the <a href=\"../certificates\">intermediate CA certificates</a> issued by the FCPCA G2." %}

<br>

Next, determine if you need to [distribute the CA certificates issued by the FCPCA G2]({{site.baseurl}}/fpki/common/certificates/).