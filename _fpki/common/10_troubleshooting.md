---
layout: page 
title: Troubleshooting Procedures
collection: fpki
# permalink: /fpki/common/troubleshooting/
sticky_sidenav: true
sidenav: fpkicommon
---

{% include alert-success.html content="This page presents common issues and troubleshooting procedures related to the Federal PKI Root CA migration.  We encourage <b>only</b> Domain or System Administrators follow the procedures listed on this page.  If you need help or have any questions, email us at fpkirootupdate@gsa.gov." %} 
 
## Windows Troubleshooting
- [Windows Troubleshooting](#windows-troubleshooting)
- [macOS Troubleshooting](#macos-troubleshooting)
- [iOS Troubleshooting](#ios-troubleshooting)
- [Solutions](#solutions)
  - [Windows](#windows)
    - [How come my workstation isn't chaining to FCPCA G2?](#how-come-my-workstation-isnt-chaining-to-fcpca-g2)
    - [How come I can't login to an application or website with my PIV after migrating to FCPCA G2?](#how-come-i-cant-login-to-an-application-or-website-with-my-piv-after-migrating-to-fcpca-g2)
    - [How can I verify network configurations aren't preventing certificate validation?](#how-can-i-verify-network-configurations-arent-preventing-certificate-validation)
    - [Is there any logging I can enable to help verify what's going on?](#is-there-any-logging-i-can-enable-to-help-verify-whats-going-on)
    - [Are there any useful commands that I should be familiar with?](#are-there-any-useful-commands-that-i-should-be-familiar-with)
  - [macOS](#macos)
    - [How come my workstation isn't chaining to FCPCA G2?](#how-come-my-workstation-isnt-chaining-to-fcpca-g2-1)
    - [How come I can't login to an application or website with my PIV after migrating to FCPCA G2?](#how-come-i-cant-login-to-an-application-or-website-with-my-piv-after-migrating-to-fcpca-g2-1)
    - [Are there any useful commands that I should be familiar with?](#are-there-any-useful-commands-that-i-should-be-familiar-with-1)
  - [iOS](#ios)
    - [Why am I seeing TLS certificate errors?](#why-am-i-seeing-tls-certificate-errors)

## macOS Troubleshooting
- [How come my workstation isn't chaining to FCPCA G2?](#how-come-my-workstation-isnt-chaining-to-fcpca-g2)
- [How come I can't login to an application or website with my PIV after migrating to FCPCA G2?](#how-come-i-cant-login-to-an-application-or-website-with-my-piv-after-migrating-to-fcpca-g2)
- [Are there any useful commands that I should be familiar with?](#are-there-any-useful-commands-that-i-should-be-familiar-with)

## iOS Troubleshooting
- [Why am I seeing TLS certificate errors?](#why-am-i-seeing-tls-certificate-errors)


## Solutions

### Windows

#### How come my workstation isn't chaining to FCPCA G2?

In some cases, even after distributing the Federal Common Policy CA G2 as a Trusted Root CA, Microsoft-based systems may still attempt to build a path to the Federal Common Policy CA.  If the Federal Common Policy CA has been distrusted, that may result in errors as pictured below:

![validation errors]({{site.baseurl}}/assets/fpki/error-distribute-intermediates.png) 

**Recommended Steps:**
1. Verify the distribution of the Federal Common Policy CA G2 as a [Trusted Root CA Certificate]({{site.baseurl}}/fpki/common/distribute-os/){:target="_blank"}{:rel="noopener noreferrer"}
2. Verify the [distrust of the Federal Common Policy CA]({{site.baseurl}}/fpki/common/migrate/#distrust-the-fcpca-g1){:target="_blank"}{:rel="noopener noreferrer"}
3. Distribute the [intermediate CA certificates issued by the Federal Common Policy CA G2]({{site.baseurl}}/fpki/common/certificates/#certificates-issued-by-the-federal-common-policy-ca-g2){:target="_blank"}{:rel="noopener noreferrer"}

If you're still having problems, email us at fpkirootupdate@gsa.gov.



#### How come I can't login to an application or website with my PIV after migrating to FCPCA G2?

It's possible the application or website you are attempting to authenticate to does not yet trust the Federal Common Policy CA G2 certificate or the new intermediate CA certificates issued by the Federal Common Policy CA G2.  Depending on how your system is configured, this may result in Transport Layer Security (TLS) client authentication errors - typically observed with the application or website not prompting a user for their certificate during authentication attempts.

The steps below should **only** be performed by System Administrators and require [OpenSSL](https://www.openssl.org/){:target="_blank"}{:rel="noopener noreferrer"}.

**Recommended Steps**:
1. Run the following OpenSSL command, replacing the placeholder below with the application or website's fully qualified domain name (FQDN):
     ```
          openssl s_client -connect [FQDN].gov:443
     ```

     <br>For example, to test https://piv.treasury.gov, you would execute:<br><br> 
     ```
          openssl s_client -connect piv.treasury.gov:443
     ```
     <br>
     
2. Review the output for a line that reads "Acceptable client certificate CA names."  This presents a listing of the certificates the website is willing to accept a certificate from for authentication. 

3. Verify an entry exists for the Federal Common Policy CA G2.  This will appear as the following:<br><br> 
     ```
          /C=US/O=U.S. Government/OU=FPKI/CN=Federal Common Policy CA G2
     ```
     <br>
4. Verify an entry exists for each CA certificate on the chain between the CA that issued your certificate and the Federal Common Policy CA G2.

**Note:** the presence of an intermediate CA certificate's name in the list of "Acceptable client certificate CA names" does not guarantee the right certificate has been added to the application or website's trust store.  You may need to work with the application or website administrator to verify the correct intermediate CA certificates issued from the Federal Common Policy CA G2 have been added to the trust store. 



#### How can I verify network configurations aren't preventing certificate validation?

Certificates contain extensions that tell us more information about their intended use, status, the CA that issued them, and more.  When certificates are being validated, two particular extensions are very important:

- Authority Information Access (AIA)
- Certificate Revocation List (CRL) Distribution Point (DP)

These extensions contain Hypertext Transfer Protocol (HTTP) pointers that our operating systems will use to support certificate path discovery and validation.  If local network configurations are configured to block access to these HTTP pointers, validation may fail.  Use the following steps to confirm network configurations are not preventing access to these important extension pointers.

**Recommended Steps:**
1. Export the certificate you'd like to analyze to a known location on your file system.

2. Start -> Run -> cmd.exe

3. Run the following command to open the Certutil Graphical User Interface:<br><br>
     ```
          certutil -URL "http://"
     ```
     <br>
4. Click "Select" and browse to the file location of the certificate you'd like to analyze.

5. Select the "Certs (from AIA)" radio button and click "Retrieve."  Verify at least one entry returns a status of "Verified".

6. Select the "CRLs (from CDP)" radio button and click "Retrieve."  Verify at least one entry returns a status of "Verified".

7. Optional: If the certificate contains an Online Certificate Status Protocol pointer within the AIA extension, select the "OCSP (from AIA)" radio button and click "Retrieve." Verify at least one entry returns a status of "Verified."   

**Note:** Work with your network teams to identify if a firewall configuration is blocking traffic for any tests above that do not return a status of "Verified."  Be sure to analyze each certificate on the chain, all the way to the Federal Common Policy CA G2.



#### Is there any logging I can enable to help verify what's going on?

Microsoft systems include a PKI troubleshooting diagnostic tool availabe through the Event Viewer. This feature provides administrators with an ability to troubleshoot PKI problems by collecting detailed information about certificate validation, trust store operations, and signature verification. Follow the steps below to enable the Microsoft diagnostic tool.

**Recommended Steps:**
1. Start -> Run -> eventvwr.msc

2. Browse to "Application and Services Logs" -> "Microsoft" -> "Windows" -> "CAPI 2"

3. Right-click on "Operational" and select “Enable Log”. This will enable CAPI2 Diagnostics logging.

**Note:** Review the detailed logs to learn more about errors or validation issues.  It may be useful to filter the log based on "Level" (Error or Information) or Event ID. Event IDs 10 and 11 are associated with certificate chain building. Event IDs 40 and 41 are associated with certificate revocation checking. 

#### Are there any useful commands that I should be familiar with?

Certutil.exe is a command-line program that is installed on Microsoft systems. You can use Certutil to display certificate status, validate certificate chains, and more.  

The following Certutil commands may be helpful during troubleshooting:
- To verify a certificate and attempt to retrieve and verify AIA and CRLDP URIs:<br><br>
     ```
          certutil -verify -urlfetch [PATH-TO-CERTIFICATE]
     ``` 
     <br>
- To clear the machine's certificate and certificate URL cache:<br><br>
     ```
          certutil -urlcache * delete
     ```

**Note:** Carefully review any failures presented by the output of the commands above.

<br><br>


### macOS

#### How come my workstation isn't chaining to FCPCA G2?

The most common cause of path building errors on macOS is due to the full certificate chain not being trusted.  Review "_Are there any useful commands that I should be familiar with?_" below to learn how to detect certificate trust issues. 

#### How come I can't login to an application or website with my PIV after migrating to FCPCA G2?

It's possible the application or website you are attempting to authenticate to has not yet distributed the Federal Common Policy CA G2 certificate or the new intermediate CA certificates issued by the Federal Common Policy CA G2.  Depending on how your system is configured, this may result in Transport Layer Security (TLS) client authentication errors - typically observed with the application or website not prompting a user for their certificate during authentication attempts.

The steps below should **only** be performed by System Administrators and require [OpenSSL](https://www.openssl.org/){:target="_blank"}{:rel="noopener noreferrer"}.

**Recommended Steps**:
1. Run the following OpenSSL command, replacing the placeholder below with the application or website's fully qualified domain name (FQDN):
     ```
          openssl s_client -connect [FQDN].gov:443
     ```

     <br>For example, to test https://piv.treasury.gov, you would execute:<br><br> 
     ```
          openssl s_client -connect piv.treasury.gov:443
     ```
     <br>
     
2. Review the output for a line that reads "Acceptable client certificate CA names."  This presents a listing of the certificates the website is willing to accept a certificate from for authentication. 

3. Verify an entry exists for the Federal Common Policy CA G2.  This will appear as the following:<br><br> 
     ```
          /C=US/O=U.S. Government/OU=FPKI/CN=Federal Common Policy CA G2
     ```
     <br>
4. Verify an entry exists for each CA certificate on the chain between the CA that issued your certificate and the Federal Common Policy CA G2.

**Note:** the presence of the name of an intermediate CA certificate issued from the Federal Common Policy CA G2 in the list of "Acceptable client certificate CA names" does not guarantee the right certificate has been added to the application or website's trust store.  You may need to work with the application or website administrator to verify the correct intermediate CA certificates issued from the Federal Common Policy CA G2 have been added to the trust store. 


#### Are there any useful commands that I should be familiar with?

The macOS ```verify-cert``` command is useful for detecting issues with certificates.

**Recommended Steps**:
1. Click the Spotlight icon and search for Terminal.
2. Double-click the Terminal icon (black monitor icon with white “>_”) to open a window.
3. Run the following command:<br><br>
     ```
          security verify-cert -c [PATH-TO-CERTIFICATE] -v
     ```

<br>
**Note:** Any issues detected during certificate validation will be presented in the command's output.

<br><br>

### iOS

#### Why am I seeing TLS certificate errors?

Even after distributing the Federal Common Policy CA G2 as a Trusted Root Certificate to an iOS device, TLS negotiation failures may appear when navigating to a website whose TLS certificate was issued by a Federal PKI CA.

TLS certificate errors presented to the user in Safari are typically caused by either:
1. "Full Trust" for the Federal Common Policy CA G2 is not enabled; or
2. An intermediate CA certificate is missing from the device's trust store

**Recommended Steps**:
1. Verify that ["Full Trust"]({{site.baseurl}}/fpki/common/distribute-os/#enable-full-trust-for-fcpca-g2){:target="_blank_"}{:rel="noopener noreferrer"} is enabled for the Federal Common Policy CA G2
2. Verify that all required intermediate CA certificates are trusted by the device
     - Settings -> General -> Profile
     - Review the list of Configuration Profiles loaded on the device. Specifically, look at any profile which contains digital certificates. 
     - Verify the device explicitly trusts all CA certificates on the chain between the website's TLS certificate and the Federal Common Policy CA G2. 
