---
layout: page 
title: Frequently Asked Questions
collection: fpki
permalink: fpki/common/faq/
sticky_sidenav: true
sidenav: fpkicommon
---
 
{% include alert-warning.html heading="Heads-up! " content="The Federal PKI Management Authority has completed the revocation of the certificates issued by the Federal Common Policy CA.  If you are encountering any issues, please review our solutions for <a href=\"#how-do-i-configure-my-unmanaged-windows-system-to-trust-the-new-federal-common-policy-ca-g2\">Windows</a> and <a href=\"#how-do-i-configure-my-unmanaged-macos-device-to-trust-the-new-federal-common-policy-ca-g2\">macOS</a>.  If these solutions do not address your problem, please escalate to your agency or component help desk for additional support.  Agency or component help desks that need support can contact fpkirootupdate@gsa.gov." %} 

- [Will my PIV credentials break or need to be updated or replaced when this change occurs?](#will-my-piv-credentials-break-or-need-to-be-updated-or-replaced-when-this-change-occurs)
- [Is the Federal Common Policy CA changing?](#is-the-federal-common-policy-ca-changing)
- [When will this change happen?](#when-will-this-change-happen)
- [When will the certificates issued by the Federal Common Policy CA get revoked?](#when-will-the-certificates-issued-by-the-federal-common-policy-ca-get-revoked)
    - [Issued to: Federal Bridge CA G4](#issued-to-federal-bridge-ca-g4)
    - [Issued to: U.S. Department of State AD Root CA](#issued-to-us-department-of-state-ad-root-ca)
    - [Issued to: DigiCert Federal SSP Intermediate CA - G5](#issued-to-digicert-federal-ssp-intermediate-ca---g5)
    - [Issued to: Symantec SSP Intermediate CA - G4](#issued-to-symantec-ssp-intermediate-ca---g4)
    - [Issued to: Verizon SSP CA A2](#issued-to-verizon-ssp-ca-a2)
    - [Issued to: ORC SSP 4](#issued-to-orc-ssp-4)
    - [Issued to: US Treasury Root CA](#issued-to-us-treasury-root-ca)
    - [Issued to: Entrust Managed Services Root CA](#issued-to-entrust-managed-services-root-ca)
- [Which types of systems will this change affect?](#which-types-of-systems-will-this-change-affect)
- [Which operating systems will this change affect?](#which-operating-systems-will-this-change-affect)
- [What happens if I don’t distribute the FCPCA G2?](#what-happens-if-i-dont-distribute-the-fcpca-g2)
- [What errors can occur in Windows if I don't distribute the FCPCA G2?](#what-errors-can-occur-in-windows-if-i-dont-distribute-the-fcpca-g2)
- [What errors can occur in macOS if I don't distribute the FCPCA G2?](#what-errors-can-occur-in-macos-if-i-dont-distribute-the-fcpca-g2)
- [What errors can occur in iOS if I don't distribute the FCPCA G2?](#what-errors-can-occur-in-ios-if-i-dont-distribute-the-fcpca-g2)
- [How can I verify that the FCPCA G2 has been successfully distributed to my workstation or device?](#how-can-i-verify-that-the-fcpca-g2-has-been-successfully-distributed-to-my-workstation-or-device)
- [My agency gets PIV cards from [Issuer Name]. I won’t be affected by this change, right?](#my-agency-gets-piv-cards-from-issuer-name-i-wont-be-affected-by-this-change-right)
- [Why aren't some Entrust Federal Shared Service Provider issued PIV credential certificates chaining to FCPCA G2?](#why-arent-some-entrust-federal-shared-service-provider-issued-piv-credential-certificates-chaining-to-fcpca-g2)
- [Do I need to distribute the FCPCA G2 to my Bring Your Own Device (BYOD) program device?](#do-i-need-to-distribute-the-fcpca-g2-to-my-bring-your-own-device-byod-program-device)
- [How do I configure my unmanaged Windows system to trust the new Federal Common Policy CA G2?](#how-do-i-configure-my-unmanaged-windows-system-to-trust-the-new-federal-common-policy-ca-g2)
- [How do I configure my unmanaged macOS device to trust the new Federal Common Policy CA G2?](#how-do-i-configure-my-unmanaged-macos-device-to-trust-the-new-federal-common-policy-ca-g2)
- [How do I configure my unmanaged iOS device to trust the new Federal Common Policy CA G2?](#how-do-i-configure-my-unmanaged-ios-device-to-trust-the-new-federal-common-policy-ca-g2)
- [How do I configure the Firefox web browser to trust the new Federal Common Policy CA G2?](#how-do-i-configure-the-firefox-web-browser-to-trust-the-new-federal-common-policy-ca-g2)



## Will my PIV credentials break or need to be updated or replaced when this change occurs?

No. PIV credentials will *not* be affected by this change.  For example, the graphic below shows the current and future state of certificate validation for a PIV credential issued by the USAccess Program.  Although two certificates in the chain are being updated, the PIV credential certificates are *not* affected. 
<br>
<img src="{{site.baseurl}}/assets/fpki/FCPCA_G2_Transition.jpg" alt="current and future state." width="560" height="315">

## Is the Federal Common Policy CA changing?

Yes. In **October 2020**, the Federal Government established a new Federal Public Key Infrastructure (FPKI) Root Certification Authority (CA) known as the **Federal Common Policy CA (FCPCA) G2**. 

Between December 2020 and June 2021, CAs cross-certified by the existing FCPCA will be migrated to the FCPCA G2. Once the migration is complete, the existing FCPCA will be decommissioned (planned for June 2021). 

## When will this change happen?

Timeline:
- **October 14, 2020**: The Federal PKI Management Authority (FPKIMA) established the new FCPCA G2.
- **October 15, 2020**: The FPKIMA issued and distributed a cross certificate from the FCPCA G2 to the Federal Bridge CA G4.
- **November 18, 2020**: The FPKIMA issued and distributed certificates to migrate agency and affiliate CAs cross-certified by the existing FCPCA to the FCPCA G2.
- **December 2020 to June 2021**: All agencies transition from using the existing FCPCA as a trust anchor to the FCPCA G2.  Certificates issued by the Federal Common Policy CA will be revoked between the end of April and June in coordination with CA operators (revocation schedule below).
- **June 2021**: The FPKIMA decommissions the existing FCPCA.

## When will the certificates issued by the Federal Common Policy CA get revoked?
The Federal Common Policy CA must revoke all active CA certificates it has issued in preparation for decommissioning. Details related to the CA certificates issued by the Federal Common Policy CA, to include planned revocation date, are listed below:

**Note:** This table was last updated on **June 17, 2021**.  Follow our [GitHub Issue](https://github.com/GSA/ficam-playbooks/issues/99){:target="_blank"} for the latest information possible.

#### Issued to: Federal Bridge CA G4

| Certificate Attribute | Value                                              |
| :--------  | :--------------------------------------------------------     |
| Distinguished Name | CN=Federal Bridge CA G4, OU=FPKI, O=U.S. Government, C=US    |
| Validity | December 12, 2019 to December 12, 2021  |
| Serial Number | 7994    |
| SHA-1 Thumbprint | e836f3016bfb6e8df274f27fd8a4a5054517b0f1  |
| Revocation Date | **April 22, 2021** |

#### Issued to: U.S. Department of State AD Root CA

| Certificate Attribute | Value                                              |
| :--------  | :--------------------------------------------------------     |
| Distinguished Name | CN=U.S. Department of State AD Root CA, CN=AIA, CN=Public Key Services, CN=Services, CN=Configuration, DC=state, DC=sbu |
| Validity | December 18, 2019 to December 18, 2022   |
| Serial Number | 79f9    |
| SHA-1 Thumbprint | ce11590010562a39ad8b1455acf76c03737aebf6  |
| Revocation Date | **April 22, 2021** |

#### Issued to: DigiCert Federal SSP Intermediate CA - G5

| Certificate Attribute | Value                                              |
| :--------  | :--------------------------------------------------------     |
| Distinguished Name | CN=DigiCert Federal SSP Intermediate CA - G5, O=DigiCert, Inc., C=US |
| Validity | December 13, 2018 to December 13, 2028  |
| Serial Number | 66c0    |
| SHA-1 Thumbprint | 98b58247ac8a2bc6f348f03e8d22884d8345fc0f  |
| Revocation Date | **April 22, 2021** |

#### Issued to: Symantec SSP Intermediate CA - G4

| Certificate Attribute | Value                                              |
| :--------  | :--------------------------------------------------------     |
| Distinguished Name | CN=Symantec SSP Intermediate CA - G4, O=Symantec Corporation, C=US |
| Validity | November 12, 2014 to November 12, 2024   |
| Serial Number | 258e   |
| SHA-1 Thumbprint | 6a382438fd21037018daf3f422a2132bea2be817  |
| Revocation Date | **April 22, 2021** |

#### Issued to: Verizon SSP CA A2

| Certificate Attribute | Value                                              |
| :--------  | :--------------------------------------------------------     |
| Distinguished Name | CN=Verizon SSP CA A2, OU=SSP, O=Verizon, C=US |
| Validity | December 5, 2018 to December 6, 2026  |
| Serial Number | 65f8   |
| SHA-1 Thumbprint | 477bf4017d25cde276cdddf756d40ca591d76f6d  |
| Revocation Date | **April 22, 2021** |

#### Issued to: ORC SSP 4

| Certificate Attribute | Value                                              |
| :--------  | :--------------------------------------------------------     |
| Distinguished Name | CN=ORC SSP 4, O=ORC PKI, C=US |
| Validity | August 31, 2015 to January 21, 2024  |
| Serial Number | 2ef9    |
| SHA-1 Thumbprint | 3a70323069a4c41bc95663152e9ccc7111bb0623  |
| Revocation Date | **April 22, 2021** |

#### Issued to: US Treasury Root CA

| Certificate Attribute (1 of 2) | Value                                              |
| :--------  | :--------------------------------------------------------     |
| Distinguished Name | OU=US Treasury Root CA, OU=Certification Authorities, OU=Department of the Treasury, O=U.S. Government, C=US |
| Validity | August 14, 2019 to August 14, 2022  |
| Serial Number | 734b   |
| SHA-1 Thumbprint | 48ce02a99ae2cc4f790f2989aa153ed565b7e4d2   |
| Revocation Date | **June 10, 2021** |

| Certificate Attribute (2 of 2) | Value                                              |
| :--------  | :--------------------------------------------------------     |
| Distinguished Name | OU=US Treasury Root CA, OU=Certification Authorities, OU=Department of the Treasury, O=U.S. Government, C=US |
| Validity | August 29, 2018 to August 29, 2021   |
| Serial Number | 6405    |
| SHA-1 Thumbprint | 5a87922b5eaf1d63198a951b2ab6f59b2f16c131  |
| Revocation Date | **June 10, 2021** |

#### Issued to: Entrust Managed Services Root CA

| Certificate Attribute (1 of 2) | Value                                              |
| :--------  | :--------------------------------------------------------     |
| Distinguished Name | OU=Entrust Managed Services Root CA, OU=Certification Authorities, O=Entrust, C=US |
| Validity | August 14, 2019 to August 14, 2029  |
| Serial Number | 734a   |
| SHA-1 Thumbprint | a09655170c87d0fbfe0328b99a7baf4a1cf0b5d9  |
| Revocation Date | **June 17, 2021** |

| Certificate Attribute (2 of 2) | Value                                              |
| :--------  | :--------------------------------------------------------     |
| Distinguished Name | OU=Entrust Managed Services Root CA, OU=Certification Authorities, O=Entrust, C=US |
| Validity | July 30, 2015 to July 30, 2025  |
| Serial Number | 2e26   |
| SHA-1 Thumbprint | 39c1d3b64e756a3267bfe5fecb103da892ca0611  |
| Revocation Date | **June 17, 2021** |

## Which types of systems will this change affect?

This change will affect any system that requires the ability to validate certificates issued by the Federal PKI.  This includes systems configured for Personal Identity Verification (PIV) credential authentication to government networks or web applications, systems that require the ability to verify digital signatures that leverage PIV or similar credentials, and systems that host applications or services that leverage the Federal Common Policy CA as a root CA.

Classified systems are not affected by this change.

## Which operating systems will this change affect?

All major operating systems (i.e., Microsoft Windows, macOS, iOS, *nix) will be affected.

## What happens if I don’t distribute the FCPCA G2?

1. **(*High Impact*) Authentication failures**
	- Workstations 
	- Websites  
	- Applications (internal and cross-agency)
	- Virtual Private Networks (VPNs)

2. **(*Medium Impact*) Error fatigue**
	- Unexpected application errors and system behavior for legacy and government-off-the-shelf (GOTS) products

3. **(*Low Impact*) Digital signature validation failures**
	- Email
	- Documents and files (for example, Microsoft Word)

## What errors can occur in Windows if I don't distribute the FCPCA G2?

*Sample Chrome error when a user navigates to an intranet site whose SSL/TLS certificate doesn't chain to a trusted root CA:*
     <br>
     <img src="{{site.baseurl}}/assets/fpki/error_navigation.png" alt="An image showing an error navigation message." width="560" height="397">

*Sample Chrome error when PIV authentication fails because the user’s certificate doesn't chain to a trusted root CA:*
     <br>
     <img src="{{site.baseurl}}/assets/fpki/error_piv_auth.png" alt="An image showing an error piv authetication message." width="560" height="292">

*Sample Microsoft Outlook error when a digital signature certificate for an email doesn't chain to a trusted root CA:*
     <br>
     <img src="{{site.baseurl}}/assets/fpki/error_sig_val.png" alt="An image showing a digital signature invalid error message." width="381" height="242">

## What errors can occur in macOS if I don't distribute the FCPCA G2?

*Sample Safari error when a user navigates to an intranet site whose SSL/TLS certificate doesn't chain to a trusted root CA:*
     <br>
     <img src="{{site.baseurl}}/assets/fpki/safari_untrusted_ssl.png" alt="An image showing a safari untrusted ssl error message." width="476" height="284">

*Sample Safari error where client (PIV) authentication fails because a user’s certificate doesn't chain to a trusted root CA:*
     <br>
     <img src="{{site.baseurl}}/assets/fpki/safari_untrusted_auth.png" alt="An image showing a safari untrusted authentication error message." width="476" height="285">

*Sample Chrome error when a user navigates to an intranet site whose SSL/TLS certificate doesn't chain to a trusted root CA:*
     <br>
     <img src="{{site.baseurl}}/assets/fpki/chrome_untrusted_ssl.png" alt="An image showing a chrome untrusted ssl error message." width="476" height="291">

*Sample Chrome error where client (PIV) authentication fails because a user’s certificate doesn't chain to a trusted root CA:*
     <br>
     <img src="{{site.baseurl}}/assets/fpki/chrome_untrusted_auth.png" alt="An image showing a chrome untrusted authentication error message." width="476" height="290">

## What errors can occur in iOS if I don't distribute the FCPCA G2?

*Sample Safari error when a user navigates to an intranet site whose SSL/TLS certificate doesn't chain to a trusted root CA:*
     <br>
     <img src="{{site.baseurl}}/assets/fpki/ios_safari_untrusted_ssl.png" height="600" alt="An image showing ios safari untrusted ssl.">

*Sample Chrome error when a user navigates to an intranet site whose SSL/TLS certificate doesn't chain to a trusted root CA:*
     <br>
     <img src="{{site.baseurl}}/assets/fpki/ios_chrome_untrusted_ssl.png" height="600" alt="An image showing ios chrome untrusted ssl.">

## How can I verify that the FCPCA G2 has been successfully distributed to my workstation or device?

Please review the steps to [verify distribution of the FCPCA G2]({{site.baseurl}}/fpki/common/verify-os-distribution/).

## My agency gets PIV cards from [Issuer Name]. I won’t be affected by this change, right?

This change *does not* affect your PIV credential issuer, nor how agency credentials are generated or issued.

This change *does* affect how federal enterprise workstations and devices validate PIV credential certificates.  

## Why aren't some Entrust Federal Shared Service Provider issued PIV credential certificates chaining to FCPCA G2?

Entrust Federal Shared Service Provider (SSP) PIV credential certificates issued before August 13, 2019, chain through an older version of the Entrust Managed Services Root CA on their way to the Federal Common Policy CA than certificates issued since.  This older version of the Entrust Managed Services Root CA will not receive a certificate from the Federal Common Policy CA G2.

To ensure PIV credential certificates issued by the Entrust Federal SSP before August 13, 2019 validate to the Federal Common Policy CA G2, you should distribute [this]({{site.baseurl}}/fpki/certs/Entrust_Managed_Services_Root_CA_Link.cer) "link certificate" as an intermediate CA certificate.  The link certificate allows workstations to build a path from the older Entrust Managed Services Root CA to the current version, which has been issued a certificate by the Federal Common Policy CA G2.  Review how to distribute intermediate CA certificates [here]({{site.baseurl}}/fpki/common/certificates/).

The graphic below shows a certificate chaining to the Federal Common Policy CA G2 through the Entrust Managed Services Root CA link certificate, denoted with a red asterisk (" <span style="color:red">*</span>.")

<img src="{{site.baseurl}}/assets/fpki/link-cert-path.png" alt="An image showing a certificate link path." width="402" height="513">

## Do I need to distribute the FCPCA G2 to my Bring Your Own Device (BYOD) program device?

As a BYOD program device user, you'll need to distribute the FCPCA G2 if you:
- use your PIV credential to log into intranet sites or VPNs,
- validate PIV digital signatures in emails or documents, or
- navigate to intranet pages whose SSL/TLS certificates chain to the FCPCA G2.


## How do I configure my unmanaged Windows system to trust the new Federal Common Policy CA G2?
1. Download a copy of the FCPCA G2 certificate from http://repo.fpki.gov/fcpca/fcpcag2.crt
2. Download the [bundle of FPKI intermediate CA certificates for unmanaged devices]({{site.baseurl}}/fpki/certs/fpki-unmanaged-bundle.p7b) (fpki-unmanaged-bundle.p7b)
3. Update your Trust Store:
     - Click **Start**, type **certmgr.msc**, and press **Enter**.
     - Right-click **Trusted Root Certification Authorities** (on the left-hand navigation), and select **All Tasks** > **Import**. Click **Next** once the Certificate Import Wizard opens.
     - Browse to and select your copy of the FCPCA G2. Click **Next** several times until the certificate import process is complete.
     - When prompted, verify the certificate thumbprint matches *99B4251E2EEE05D8292E8397A90165293D116028* (additional spaces may appear depending on your Windows Version).
     - Click **Yes**.
     - Right-click **Intermediate Certification Authorities** (on the left-hand navigation), and select **All Tasks** > **Import**. Click **Next** once the Certificate Import Wizard opens.
     - Browse to and select your copy of fpki-unmanaged-bundle.p7b, making sure "All Files" are presented to view the .p7b file (this appears in a drop-down box next to the "File Name" input box).  Click **Next** several times until the certificate import process is complete.
 
To verify your distribution (assumes **certmgr.msc** is still open): 
1. Verify an entry for the FCPCA G2
     - Use the left-hand navigation to browse to **Trusted Root Certification Authorities** > **Certificates**
     - Press the **F5** key to refresh the folder contents
     - Verify an entry exists for the Federal Common Policy CA G2 (both the **Issued To** and **Issued By** columns will present "Federal Common Policy CA G2".)
2. Verify entries for the intermediate CA certificates issued by the Federal Common Policy CA G2
     - Use the left-hand navigation to browse to **Intermediate Certification Authorities** > **Certificates** 
     - Press the **F5** key to refresh the folder contents
     - Sort the data by clicking on the **Issued By** column
     - Verify nine (9) entries for certificates issued by the Federal Common Policy CA G2

**Note:** The following .gif demonstrates the distribution steps outlined above.
<br>
[![configure unmanaged device]({{site.baseurl}}/assets/fpki/unmanaged-device.gif){:style="width:85%;"}]({{site.baseurl}}/assets/fpki/unmanaged-device.gif){:target="_blank"}{:rel="noopener noreferrer"}


## How do I configure my unmanaged macOS device to trust the new Federal Common Policy CA G2?
1. Download a copy of [fpki-unmanaged-bundle.mobileconfig]({{site.baseurl}}/fpki/certs/fpki-unmanaged-bundle.mobileconfig)
2. Browse to and double-click on your copy of fpki-unmanaged-bundle.mobileconfig. 
3. Navigate to **System Preferences** -> **Profiles**
4. Verify the profile contents and click **Install** (twice) 

**Note:**&nbsp;&nbsp;The following video shows you how to install FCPCA G2 and the intermediate CA certificates using an Apple configuration profile on macOS.
<br>
[![A video that shows the steps to install an Apple configuration profile on macOS]({{site.baseurl}}/assets/fpki/macos-unmanaged.gif){:style="width:85%;"}]({{site.baseurl}}/assets/fpki/macos-unmanaged.gif){:target="_blank"}{:rel="noopener noreferrer"}


## How do I configure my unmanaged iOS device to trust the new Federal Common Policy CA G2?
1. Launch **Safari**.
2. Navigate to a copy of the [fpki-unmanaged-bundle.mobileconfig]({{site.baseurl}}/fpki/certs/fpki-unmanaged-bundle.mobileconfig)
> System message says: *The website is trying to open Settings to show you a configuration profile. Do you want to allow this?*<br>
3. Click **Allow**.<br>
4. Navigate to **Settings** -> **General** -> **Profile** 
5. Select the "Distribute FCPCAG2 and Intermediate CA Certificates" profile
6. Select **More Details** and select the certificate entry for the FCPCA G2
7. Scroll to **Fingerprints** and verify the certificate's SHA-256 hash against the [expected value]({{site.baseurl}}/fpki/common/obtain-and-verify).
8. At the top left of screen, click **Back** and **Install Profile**. Then, click **Install** (top right).
9. When prompted, enter your device **passcode**.
10. Click **Install** in the upper right corner, and **Install** again.
11. Click **Done**.
12. Enable [full trust for the FCPCA G2]({{site.baseurl}}/fpki/common/distribute-os/#enable-full-trust-for-fcpca-g2).

**Note:**&nbsp;&nbsp;The following video shows you how to install FCPCA G2 and the intermediate CA certificates using the Safari web browser.
<br>
<a href="{{site.baseurl}}/assets/fpki/ios_safari_configuration-unmanaged.gif" target="_blank" rel="noopener noreferrer"><img src="{{site.baseurl}}/assets/fpki/ios_safari_configuration-unmanaged.gif" height="600" alt="A video that shows the steps to install a mobile configuration file in the Safari web browser"></a>

## How do I configure the Firefox web browser to trust the new Federal Common Policy CA G2?
The following steps will allow Firefox to use the underlying operating system trust store.  Follow these steps only after distributing the Federal Common Policy CA G2 to your Windows or macOS device.
1. Open **Firefox**.
2. Enter **about:config** in the address bar and continue to the list of preferences.
3. Set the preference **security.enterprise_roots.enabled** to **true**.  
4. Restart **Firefox**. 

**Note:**&nbsp;&nbsp;The following video shows you how to configure the Firefox web browser to trust the certificates included in the operating system trust store.
<br>
<a href="{{site.baseurl}}/assets/fpki/configure-firefox.gif" target="_blank" rel="noopener noreferrer"><img src="{{site.baseurl}}/assets/fpki/configure-firefox.gif" height="90%" width="90%" alt="A video that shows the steps to configure the Firefox web browser"></a>

