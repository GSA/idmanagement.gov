<!--
---
layout: default
title:  CTL Test Procedures
permalink: /ctltestprocedures/
---
-->

## How Can I Test?

{% include alert-info.html content="Test results for _ServerAuth Disallow_ did not allow local trust decisions to override the CTL configuration, so no further testing will be conducted." %} 

If your agency is impacted, you can test COMMON validation behavior. This test will confirm whether an enterprise GPO can override a Microsoft CTL setting for two possible conditions:

1. _serverAuth Disallow_,**OR**
2. _no CTL entry_

Test environments should mimic production environments including Windows Operating System version and Internet Browser.

No further Federal PKI community-wide testing will be done.  If your agency has questions, please email us at **fpki@gsa.gov**.

### Testing Schedule (Testing Has Been Concluded)

#### Phase 1&nbsp;&mdash;&nbsp;_serverAuth Disallow_ Testing (2018)
- **April 13 -** Start _Disallow_ testing.
- **April 26 -** The FPKI report to Microsoft on _Disallow_ testing status and results.
- **April 27-May 2 -** Remediate _Disallow_ testing based on Microsoft's feedback. Microsoft prepares for _serverAuth notBefore_ testing.
- **May 2 -** Status call/email with Agency CTL testers on _serverAuth Disallow_ test results and/or questions.
- **May 3 -** The FPKI report to Microsoft on final _serverAuth Disallow_ testing.

#### Phase 3&nbsp;&mdash;&nbsp;_no CTL entry_ Testing (2019)
- **April 15-26 -** Conduct _no CTL entry_ testing.
- **April 29 -** Status call/email with Agency CTL testers on _no CTL entry_ test results and/or questions.
- **May 01 -** The FPKI report to Microsoft on final _no CTL entry_ testing. 
- **May 03 -** Determine next steps.

### Test Procedures

#### Step 1 - Verify Current CTL Settings

1a. For each Windows 10 client endpoint or Windows 2016 or higher server, verify current CTL settings.

1b. Create a text file on your desktop containing the certificate details: 
   
```
certutil -verifyCTL AuthRoot > c:\Users\<User>\Desktop\preAuthRootDetail.txt
```

1c. From preAuthRootDetail.txt, search for the COMMON subject "CN=Federal Common Policy CA, OU=FPKI, O=U.S. Government, C=US". It should have the following entry:

```
[905f942fd9f28f679b378180fd4f846347f645c1]
CertId = 1.3.6.1.4.1.311.10.11.3, "CERT_SHA1_HASH_PROP_ID"
Subject = "CN=Federal Common Policy CA, OU=FPKI, O=U.S. Government, C=US"
FriendlyName = "U.S Government Common Policy"
EKU = 1.3.6.1.4.1.311.10.3.4, "Encrypting File System"
EKU = 1.3.6.1.5.5.7.3.1, "Server Authentication"
EKU = 1.3.6.1.5.5.7.3.2, "Client Authentication"
EKU = 1.3.6.1.5.5.7.3.3, "Code Signing"
EKU = 1.3.6.1.5.5.7.3.4, "Secure Email"
EKU = 1.3.6.1.5.5.7.3.6, "IP security tunnel termination"
EKU = 1.3.6.1.5.5.7.3.7, "IP security user"
EKU = 1.3.6.1.5.5.7.3.8, "Time Stamping"
EKU = 1.3.6.1.5.5.7.3.9, "OCSP Signing"
NotBeforeEKU = 1.3.6.1.5.5.7.3.3, "Code Signing"
NotBeforeTime = "2/28/2017 8:00 PM"
MD5KeyId = 93ee7e01c999df57176c2c0a677aa1eb
KeyId = ad0c7a755ce5f398c479980eac28fd97f4e702fc
SHA256Thumbprint = 894ebc0b23da2a50c0186b7f8f25ef1f6b2935af32a94584ef80aaf877a3a06e
SignatureHash = 375dc361146cfbdd26f82cbf8a4c1a173c9b6a11ac61dfe4c28cac281888ed22
SignatureHashAlgorithm = 1.2.840.113549.1.1.11, "sha256RSA", 2.16.840.1.101.3.4.2.1, "sha256", "RSA/SHA256"
PublicKeyLength = 2048
PublicKeyAlgorithm = 1.2.840.113549.1.1.1, "RSA"
```

#### Step 2 - Setup Endpoint with Test CTL

2a. Prepare the endpoint for the test CTL.

2b. Windows Key + S to search for "regedit". Right click and "Run as administrator"

2c. Browse to [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SystemCertificates\AuthRoot\AutoUpdate]

2d. Right click and create "New String" with name "RootDirUrl" with this value 
  
  http://ctldl.windowsupdate.com/msdownload/update/v3/static/trustedr/en/USPKI

2e. Delete these keys:

``` 
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SystemCertificates\AuthRoot\AutoUpdate\EncodedCtl]
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SystemCertificates\AuthRoot\AutoUpdate\LastSyncTime]
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SystemCertificates\AuthRoot\Certificates] (deleting all cached certificates)
``` 

2f. Verify the Test CTL has updated in RegEdit. Confirm "EncodedCtl" and "LastSyncTime" attributes are populated in the [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SystemCertificates\AuthRoot\AutoUpdate] directory. If they have not updated, open Edge or Chrome and load a website and then hit F5 to refresh in RegEdit.
  
2g. From the command prompt, create a text file containing the Test CRL AuthRoot details: 

```
certutil -verifyCTL AuthRoot > c:\ctltest\postAuthRootDetail.txt
```

2h. From postAuthRootDetail.txt, search for the COMMON subject "CN=Federal Common Policy CA, OU=FPKI, O=U.S. Government, C=US". It may have the following entry based on the testing:
  
```
[905f942fd9f28f679b378180fd4f846347f645c1]
CertId = 1.3.6.1.4.1.311.10.11.3, "CERT_SHA1_HASH_PROP_ID"
Subject = "CN=Federal Common Policy CA, OU=FPKI, O=U.S. Government, C=US"
FriendlyName = "U.S Government Common Policy"
EKU = 1.3.6.1.4.1.311.10.3.4, "Encrypting File System"
EKU = 1.3.6.1.5.5.7.3.1, "Server Authentication"
EKU = 1.3.6.1.5.5.7.3.2, "Client Authentication"
EKU = 1.3.6.1.5.5.7.3.3, "Code Signing"
EKU = 1.3.6.1.5.5.7.3.4, "Secure Email"
EKU = 1.3.6.1.5.5.7.3.6, "IP security tunnel termination"
EKU = 1.3.6.1.5.5.7.3.7, "IP security user"
EKU = 1.3.6.1.5.5.7.3.8, "Time Stamping"
EKU = 1.3.6.1.5.5.7.3.9, "OCSP Signing"
DisallowEKU = 1.3.6.1.5.5.7.3.1, "Server Authentication"
NotBeforeEKU = 1.3.6.1.5.5.7.3.3, "Code Signing"
NotBeforeTime = "2/28/2017 8:00 PM"
MD5KeyId = 93ee7e01c999df57176c2c0a677aa1eb
KeyId = ad0c7a755ce5f398c479980eac28fd97f4e702fc
SHA256Thumbprint = 894ebc0b23da2a50c0186b7f8f25ef1f6b2935af32a94584ef80aaf877a3a06e
SignatureHash = 375dc361146cfbdd26f82cbf8a4c1a173c9b6a11ac61dfe4c28cac281888ed22
SignatureHashAlgorithm = 1.2.840.113549.1.1.11, "sha256RSA", 2.16.840.1.101.3.4.2.1, "sha256", "RSA/SHA256"
PublicKeyLength = 2048
PublicKeyAlgorithm = 1.2.840.113549.1.1.1, "RSA"
``` 

**NOTE - Depending on the phase of testing, Server Authentication will be represented in different ways. Server Auth Disallow will include DisallowEKU = 1.3.6.1.5.5.7.3.1, "Server Authentication" after the list of EKUs. _no CTL entry_ will have no entry for Federal Common Policy.**

2i. If the CTL does not have one of the above changes, start over or contact fpki@gsa.gov.

#### Step 3 - Perform Website Testing

3a. Perform HTTPS tests, open Internet Explorer/Edge or Chrome and clear cache.

```
   Ctrl + Shift + Del
```

3b. Go to a website using an FPKI certificate; and record results. Suggested websites:

Websites Chained to COMMON
- [PKI.Treasury.gov](https://pki.treasury.gov){:target="_blank"} - Treasury Root CA-issued (COMMON-chained)
- [ako.us.army.mil](https://ako.us.army.mil/){:target="_blank"} - DoD Root CA 3-issued (COMMON-chained)

Websites Not-Chained to Common
- [MAX.gov](https://max.gov/){:target="_blank"} - Entrust Root CA-issued (non-COMMON-chained)
- [NIST.gov](https://csrc.nist.gov/){:target="_blank"} - DigiCert Root CA-issued (non-COMMOM-chained)

(% include alert-info.html content="Verify the certificate details and note the validation path and any errors. For _no CTL entry_, Chrome warning pages may vary depending on the certificate, but an Edge warning should say Error Code: DLG_FLAGS_INVALID_CA." %)

3c. Open Internet Explorer/Edge and/or Chrome and clear cache.

```
   Ctrl + Shift + Del
```

3d. Re-Install COMMON using the group policy object procedures: [Install Using Group Policy Objects](https://fpki.idmanagement.gov/truststores/microsoft/){:target="_blank"}

3e. Repeat website tests from Step 6. 

3f. For no CTL testing and following repeat testing after group policy object distribution, it is possible validation errors continue.

3g. Re-Install COMMON in the Trusted Root Certification Authorities store using the group policy object procedures.
   
3h. Repeat website tests from step 6.
   
3i. If testing is successful, repeat website tests from Step 2. This confirms that a CTL refresh will not remove a user or enterprise installed version of COMMON.

#### Step 4 - Remove Test CTL Settings and Report on Testing Outcomes

4a. Once testing is done, return the endpoints to their normal configurations. This step may not be necessary if the endpoint is just for testing:

4b. Windows Key + S to search for "regedit". Right click and "Run as administrator"

4c. Browse to [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SystemCertificates\AuthRoot\AutoUpdate]

4d. Delete the new string "RootDirUrl".

4e. Delete these keys:

``` 
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SystemCertificates\AuthRoot\AutoUpdate\EncodedCtl]
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SystemCertificates\AuthRoot\AutoUpdate\LastSyncTime]
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SystemCertificates\AuthRoot\Certificates] (deleting all cached certificates)
``` 

4f. Report your test results to **fpki@gsa.gov** or post them as an issue to GSA's [FPKI Guides](https://github.com/GSA/fpki-guides/issues) GitHub repository as "CTL Testing - Agency XXX Results." Include:
- OS version
- Browser versions
- Steps used to test
- Websites used with specific website error code
- Any issues encountered
