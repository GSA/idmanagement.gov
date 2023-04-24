---
layout: page 
title: 2. Obtain and verify a copy of the Federal Common Policy CA G2 certificate
collection: fpki
permalink: /fpki/common/obtain-and-verify/
sticky_sidenav: true
sidenav: fpkicommon

subnav:
  - text: Download a Copy of FCPCA G2
    href: '#download-a-copy-of-fcpca-g2'
  - text: Verify Your Copy of FCPCA G2
    href: '#verify-your-copy-of-fcpca-g2'
---

To limit the impact to your agency, you should distribute the Federal Common Policy CA G2 (FCPCA G2) certificate to all affected government-furnished workstations and devices as a _trusted root certificate_ **as soon as possible**.

## Download a Copy of FCPCA G2

To download a copy of FCPCA G2, use one of these recommended options:
- Download the certificate from http://repo.fpki.gov/fcpca/fcpcag2.crt
- Email fpki-help@gsa.gov to request an out-of-band copy for download.

{% include alert-warning.html content="<b>You should never install a root certificate before you verify it.</b> The procedures below describe how to verify the authenticity of your copy of the FCPCA G2. Your certificate details and hash must match the expected values in the following table." %} 

| **FCPCA G2**  | **Certificate Details**                             |
| :--------  | :-------------------------------     |
| Distinguished Name | cn=Federal Common Policy CA G2, ou=FPKI, o=U.S. Government, c=US |
| Serial Number | 21e5b9a0cc956de278ca012ba8fdc58a98b3fbea |
| SHA-1 Thumbprint | 99B4251E2EEE05D8292E8397A90165293D116028 |
| SHA-256 Thumbprint | 5F9AECC24616B2191372600DD80F6DD320C8CA5A0CEB7F09C985EBF0696934FC |

## Verify Your Copy of FCPCA G2

To verify your copy of FCPCA G2, use one of these options: 

### On Windows: Use Microsoft Certutil
1. Click **Start**, type **cmd**, and press **Enter**.
2. Run the following command:
<br>
    ```
	   certutil -hashfile {DOWNLOAD_LOCATION}\fcpcag2.crt SHA256
    ```

**Note:** The following .gif shows you how to verify your copy of FCPCA G2 on Microsoft Server 2016.
<br>
[![A gif that shows the verification steps performed on Microsoft Server 2016]({{site.baseurl}}/assets/fpki/verify.gif){:style="width:100%;"}]({{site.baseurl}}/assets/fpki/verify.gif){:target="_blank"}{:rel="noopener noreferrer"}

<br>

### On macOS: Use Terminal
1. Click the **Spotlight** icon and search for _Terminal_.
2. Double-click the **Terminal** icon (black monitor icon with white ">_") to open a window.
3. Run the following command:
<br>
    ```
	$ shasum -a 256 {DOWNLOAD_LOCATION}/fcpcag2.crt
    ```
    

**Note:** The following .gif shows you how to verify your copy of FCPCA G2 on macOS Catalina (10.15).
<br>
[![The following gif shows you how to verify your copy of FCPCA G2 on macOS Catalina 10 point 15]({{site.baseurl}}/assets/fpki/download_and_verify.gif){:style="width:85%;"}]({{site.baseurl}}/assets/fpki/download_and_verify.gif){:target="_blank"}{:rel="noopener noreferrer"}


### On Linux/Unix: Use the Command Line
1. Open the command line.
2. Run the following command:
<br>
    ```
	$ sha256sum {DOWNLOAD_LOCATION}/fcpcag2.crt
    ```

<br>

Next, [distribute the Federal Common Policy CA G2 certificate as an operating system trusted root]({{site.baseurl}}/fpki/common/distribute-os/).
