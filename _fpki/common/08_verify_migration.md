---
layout: page 
title: 8. Verify migration to the Federal Common Policy CA G2
collection: fpki
permalink: /fpki/common/verify-migration/
sticky_sidenav: true
sidenav: fpkicommon

subnav:
  - text: Verify Migration on Windows
    href: '#verify-migration-on-windows'
  - text: Verify Migration on macOS
    href: '#verify-migration-on-macos'
  - text: Troubleshooting
    href: '#troubleshooting'
---

The easiest way to verify your migration to the Federal Common Policy CA (FCPCA) G2 is to validate one of your PIV credential certificates.

### Verify Migration on Windows

1. Click **Start**, type **certmgr.msc**, and then press **Enter**.
1. Double-click **Personal**, and then **Certificates**.
1. Browse to and select any of the certificates found on your PIV credential (the **Issued To** column displays your name).
1. Double-click the certificate and select the **Certification Path** tab.
1. Verify the certificate chain begins with the **FCPCA G2** (pictured below).
	
	**Note:** It's okay if different certification authorities appear below the FCPCA G2 for your certificate. 

<img src="{{site.baseurl}}/assets/fpki/verify-migration-windows.png" alt="verify common migration in Windows." width="224" height="285">

### Verify Migration on macOS

1. Click the **Spotlight** icon and search for *Keychain Access*.
2. Double-click the **Keychain Access** icon to open the application.
3. In the left navigation, click the **Login** keychain.
4. Browse to and select any of the certificates found on your PIV credential (the **Name** column displays your name).
5. Verify the *This certificate is valid* message appears beneath the certificate details.

<img src="{{site.baseurl}}/assets/fpki/verify-migration-macos.png" alt="verify common migration in macOS." width="392" height="206">

### Troubleshooting

- If you're building a path to the FCPCA G1
	- [Verify you have distrusted the FCPCA G1]({{site.baseurl}}/fpki/common/migrate/#2-distrust-the-federal-common-policy-ca)
- If a path isn't building at all
	- [Verify your distribution of the FCPCA G2]({{site.baseurl}}/fpki/common/verify-os-distribution/)
	- [Distribute the CA certificates issued by the FCPCA G2]({{site.baseurl}}/fpki/common/certificates/)

## Need Help?

View the [Frequently Asked Questions]({{site.baseurl}}/fpki/common/faq/) page for more information, or email us at fpkirootupdate@gsa.gov.
