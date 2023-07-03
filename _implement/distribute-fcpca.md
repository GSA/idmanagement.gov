---
layout: page
title: Enabling Enterprise Trust of the Common Policy Certificate
collection: implement
permalink: /implement/trust-fcpca/
sticky_sidenav: true
sidenav: implement
site.baseurl: site.baseurl

subnav:
  - text: 1. Obtain and verify FCPCA G2
    href: '#step-1---obtain-and-verify-fcpca-g2'
  - text: 2. Distribute the certificate to operating systems
    href: '#step-2---distribute-to-operating-systems'
  - text: 3. Verify operating system distribution
    href: '#step-3---verify-operating-system-distribution'
  - text: 4. Distribute to applications
    href: '#step-4---distribute-to-applications'
  - text: 5. Distribute intermediate certificates
    href: '#step-5---distribute-intermediate-certificates'
  - text: 6. Frequently Asked Questions
    href: '#frequently-asked-quetions'
---

Version 1.0
July 2021

| Version Number | Date | Change Description |
| :----------: | :-------: | -------- |
| 1.0 | 07/2020| Initial Draft |

This guide is written for systems administrators who need to enable trust for the Federal Common Policy Root within their enterprise. This guide replaces the previous FCPCA2 migration guide, since the migration to FCPCA2 has been completed. This guide contains the portions of the previous guide that are still useful, including information about how to distribute the FCPCA2 root certificate, and how to verify that the certificate is working as intended.

{% capture alert-content-1 %}
**We're calling for all solutions!** If you'd like to share your agency's playbook on how to distribute a trusted root CA certificate to an application trust store, create an [issue on GitHub]("https://github.com/GSA/idmanagement.gov/issues/new"){:target="_blank"}{:rel="noopener noreferrer"} or email us at <fpki@gsa.gov>.
{% endcapture %}

{% include alert-info.html content=alert-content-1 %}

# Step 1 - Obtain and verify FCPCA G2

To limit the impact to your agency, you should distribute the Federal Common Policy CA G2 (FCPCA G2) certificate to all affected government-furnished workstations and devices as a _trusted root certificate_ **as soon as possible**.

## Download a Copy of FCPCA G2

To download a copy of FCPCA G2, use one of these recommended options:

- Download the certificate from <http://repo.fpki.gov/fcpca/fcpcag2.crt>
- Email <fpki-help@gsa.gov> to request an out-of-band copy for download.

{% include alert-warning.html content="_You should never install a root certificate before you verify it._ The procedures below describe how to verify the authenticity of your copy of the FCPCA G2. Your certificate details and hash must match the expected values in the following table." %}

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

    certutil -hashfile {DOWNLOAD_LOCATION}\fcpcag2.crt SHA256

**Note:** The following .gif shows you how to verify your copy of FCPCA G2 on Microsoft Server 2016.
[![A gif that shows the verification steps performed on Microsoft Server 2016]({{site.baseurl}}/assets/fpki/verify.gif){:style="width:100%;"}]({{site.baseurl}}/assets/fpki/verify.gif){:target="_blank"}{:rel="noopener noreferrer"}

### On macOS: Use Terminal

1. Click the **Spotlight** icon and search for _Terminal_.
2. Double-click the **Terminal** icon (black monitor icon with white ">_") to open a window.
3. Run the following command:

    $ shasum -a 256 {DOWNLOAD_LOCATION}/fcpcag2.crt

**Note:** The following .gif shows you how to verify your copy of FCPCA G2 on macOS Catalina (10.15).

[![The following gif shows you how to verify your copy of FCPCA G2 on macOS Catalina 10 point 15]({{site.baseurl}}/assets/fpki/download_and_verify.gif){:style="width:85%;"}]({{site.baseurl}}/assets/fpki/download_and_verify.gif){:target="_blank"}{:rel="noopener noreferrer"}

### On Linux/Unix: Use the Command Line

1. Open the command line.
2. Run the following command:

    $ sha256sum {DOWNLOAD_LOCATION}/fcpcag2.crt

Next, distribute the FCPCA G2 certificate as an operating system trusted root.

# Step 2 - Distribute to operating systems

To distribute the Federal Common Policy CA G2 (FCPCA G2) certificate, use one of these options:

## For Microsoft Windows

- [Use Microsoft Certutil](#use-microsoft-certutil)
- [Use Microsoft Group Policy Object (GPO)](#use-microsoft-group-policy-object-gpo)
- [Use third-party configuration management tools](#use-third-party-configuration-management-tools)
- [Use Microsoft Certificate Manager for unmanaged devices](#use-microsoft-certificate-manager-for-unmanaged-devices)

## For macOS

- [Use an Apple configuration profile](#create-distribute-and-install-an-apple-configuration-profile)
- [Use the command line](#install-fcpca-g2-using-command-line)
- [Use Apple Keychain](#install-fcpca-g2-using-apple-keychain-access)

## For iOS

- [Use an Apple configuration profile](#install-fcpca-g2-using-an-apple-configuration-profile-in-ios)
- [Use the Safari Web Browser](#install-fcpca-g2-using-safari-web-browser)
- [Enable Full Trust for FCPCA G2](#enable-full-trust-for-fcpca-g2)

## For Linux/Unix

- [Use the command line](#linux-and-unix-solutions)

---

## Microsoft Solutions

### Use Microsoft Certutil

{% include alert-warning.html content="You must have Enterprise Administrator privileges for the domain to use these procedures. The commands must be run from an agency domain controller." %}

1. Click **Start**, type **cmd**, and press **Enter**.
1. Run the following command:
    certutil -dspublish -f [PATH\]fcpcag2.crt RootCA

1. To verify that FCPCA G2 was distributed, run the following commands:
        gpupdate /force
        certutil -viewstore -enterprise

1. Confirm that the output details include FCPCA G2.
1. Verify the certificate details against the [expected values](#step-1---obtain-and-verify-fcpca-g2) (for example, serial number, hash, etc.).

**Note:** The following .gif shows you how to distribute the FCPCA G2 using Microsoft Certutil.
[![A gif that shows the distribution and verification steps performed using Microsoft Certutil]({{site.baseurl}}/assets/fpki/certutil.gif){:style="width:85%;"}]({{site.baseurl}}/assets/fpki/certutil.gif){:target="_blank"}{:rel="noopener noreferrer"}

### Use Microsoft Group Policy Object (GPO)

{% include alert-warning.html content="You must have Enterprise Administrator privileges for the Domain to use these procedures. The commands must be run from an agency Domain Controller." %}

1. Navigate to **Server Manager**.
1. Select **Tools**.
1. Select **Group Policy Management** from the drop-down list.
1. Right-click your desired domain(s), and select **Create a GPO in this domain, and Link it here**.
1. Enter a GPO **Name**, and click **OK**.
1. Right-click the newly created GPO and click **Edit**.
1. Navigate to **Policies** > **Windows Settings** > **Security Settings** > **Public Key Policies**.  
1. Right-click **Trusted Root Certification Authorities**, and select **Import**.

    The Certificate Import Wizard appears.

1. Browse to and select your copy of the FCPCA G2.
1. Verify that the target **Certificate Store** presents **Trusted Root Certification Authorities**, and select **Next**.
1. Select **Finish** to complete the import.

    A success message appears.

1. Close the **Group Policy Management** window.
1. Wait for clients to consume the new policy.
1. (_Optional_) To force client consumption, click **Start**, type **cmd**, press **Enter**, and run the following command:

    gpupdate /force

**Note:** The following .gif shows you how to distribute the FCPCA G2 with Microsoft GPO.
[![A gif that shows the distribution and verification steps performed with Microsoft Group Policy Object also known as GPO]({{site.baseurl}}/assets/fpki/gpo.gif){:style="width:85%;"}]({{site.baseurl}}/assets/fpki/gpo.gif){:target="_blank"}{:rel="noopener noreferrer"}

### Use Third-Party Configuration Management Tools

{% include alert-warning.html content="To follow these steps, you must have Enterprise Administrator privileges for the Domain. You will need to run these commands from an agency domain controller." %}

You can use third-party configuration management tools, such as BigFix.

1. Using BigFix, schedule a task and push the certificate file. Run the following command (example):
    certutil -f -addstore root “fcpcag2.crt”

### Use Microsoft Certificate Manager for Unmanaged Devices

To distribute the FCPCA G2 to unmanaged devices:

1. Click **Start**, type **certmgr.msc**, and  press **Enter**.
1. Right-click **Trusted Root Certification Authorities**, and select **All Tasks** > **Import**.

    The Certificate Import Wizard appears.

1. Browse to and select your copy of the FCPCA G2.
1. Verify that the desired **Certificate Store** displays **Trusted Root Certification Authorities**, and select _Next_.
1. Select _Finish_ to complete the import.

    A success message appears.

> **Note:** If several users share a device, you can run the **certlm.msc** to simultaneously update the certificate stores for the accounts on the device (vs. updating each account separately).

---

## macOS Solutions

### Create, Distribute, and Install an Apple Configuration Profile

For **macOS and [iOS](#install-fcpca-g2-using-an-apple-configuration-profile-in-ios)** government-furnished devices, you can use Apple configuration profiles (XML files) to distribute and automatically install the FCPCA G2.  

These steps describe how to create, distribute, and install profiles using Apple’s free _Configurator 2_ application. There are also available third-party applications.

{% include alert-warning.html content="Only System or mobile device management (MDM) administrators should create, distribute, and install Apple configuration profiles." %}

### Create an Apple Configuration Profile

1. As an administrator, [download and verify](#step-1---obtain-and-verify-fcpca-g2) a copy of the FCPCA G2 to your device.
1. Download and install _Configurator 2_ from the Apple App Store.
1. Open _Configurator 2_ and click **File** > **New Profile**.
1. On the **General** tab, enter a unique profile **Name** (for example, _FCPCA G2 Profile_) and **Identifier** (for example, _FCPCAG2-0001_).
1. On the **Certificates** tab, click **Configure**.
1. Browse to and select your verified copy of the FCPCA G2.
1. (_Optional_) Add additional agency-specific configurations or customizations.
1. Click **File** > **Save** to save your profile to your preferred location.
1. [Distribute the profile across your enterprise](#distribute-an-apple-configuration-profile).

**Note:** The following video shows you how to create an Apple configuration profile.

[![A video that shows the steps to create an Apple configuration profile.]({{site.baseurl}}/assets/fpki/create_profile.gif){:style="width:85%;"}]({{site.baseurl}}/assets/fpki/create_profile.gif){:target="_blank"}{:rel="noopener noreferrer"}

**APPLE CONFIGURATION PROFILE (EXAMPLE)**
{:.text-center}

{% include alert-warning.html content="Before using this profile, you should verify that it is suitable for your agency." %}

To use this profile, copy the XML information and save it as a `.mobileconfig` file.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>PayloadContent</key>
    <array>
        <dict>
            <key>PayloadCertificateFileName</key>
            <string>fcpcag2.crt</string>
            <key>PayloadContent</key>
            <data>
            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
            ee/xJ/c0cIHZWMw0HoRZPbo=
            </data>
            <key>PayloadDescription</key>
            <string>Adds a CA root certificate</string>
            <key>PayloadDisplayName</key>
            <string>Federal Common Policy CA G2</string>
            <key>PayloadIdentifier</key>
            <string>com.apple.security.root.1EB75E7D-C3BC-46C2-AF42-51D80A2E12FC</string>
            <key>PayloadType</key>
            <string>com.apple.security.root</string>
            <key>PayloadUUID</key>
            <string>1EB75E7D-C3BC-46C2-AF42-51D80A2E12FC</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Federal Common Policy Certification Authority G2 Profile</string>
    <key>PayloadIdentifier</key>
    <string>FCPCAG2-0001</string>
    <key>PayloadRemovalDisallowed</key>
    <false/>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>AAD17D9A-DA41-4197-9F0F-3C3C6B4512F9</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

### Distribute an Apple Configuration Profile

{% include alert-warning.html content="Only System or MDM Administrators should use these steps. You should never email an Apple configuration profile to someone outside your agency's domain." %}

You can use Apple's _Configurator 2_ to distribute your Apple configuration profile to government-furnished macOS and iOS devices in the following ways:

- Physically connect to the user's device.
- Email a profile to specific users.*
- Share a profile on an agency intranet webpage.*
- [Share via over-the-air profile delivery and configuration (Apple Developer Library)](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/iPhoneOTAConfiguration/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009505){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}.
- [Share via over-the-air delivery and configuration from an MDM server (Apple Developer Library)](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/MobileDeviceManagementProtocolRef/6-MDM_Best_Practices/MDM_Best_Practices.html#//apple_ref/doc/uid/TP40017387-CH5-SW2){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. Third-party applications are also available.

> ***For iOS only** -- If you download and install the FCPCA G2 from an email or an intranet website, you will need to _manually enable SSL trust for FCPCA G2_. This is not needed if you use Configurator 2 with over-the-air (OTA) methods or an MDM enrollment profile to install the FCPCA G2. (See [Enable Full Trust for FCPCA G2](#enable-full-trust-for-fcpca-g2).)

### Install an Apple Configuration Profile

We recommend using an automated method to install Apple configuration profiles on government-furnished Apple devices (for example, a desktop configuration management or MDM tool), which will distribute FCPCA G2. (If you have questions about third-party products, email us at <fpki@gsa.gov>.)

You can also manually install a profile.

**Note:**The following video shows you how to manually install an Apple configuration profile on **macOS**.

[![A video that shows the steps to manually install an Apple configuration profile]({{site.baseurl}}/assets/fpki/manual_install_profile.gif){:style="width:85%;"}]({{site.baseurl}}/assets/fpki/manual_install_profile.gif){:target="_blank"}{:rel="noopener noreferrer"}

### Install FCPCA G2 Using Command Line

{% include alert-info.html content="These steps describe how to install the FCPCA G2 in the System Keychain. You must have system administrator privileges to perform these steps." %}

1. Click the **Spotlight** icon and search for _Terminal_.
2. Double-click the **Terminal** icon (black monitor icon with white “>_”) to open a window.
3. Run the following command:

    $ sudo security add-trusted-cert -d -r trustRoot -k "/Library/Keychains/System.keychain" {DOWNLOAD_LOCATION}/fcpcag2.crt

**Note:**The following video shows you how to install FCPCA G2 using the command line.

[![A video that shows the steps to install FCPCA G2 using the macOS command line.]({{site.baseurl}}/assets/fpki/install_command_line.gif){:style="width:85%;"}]({{site.baseurl}}/assets/fpki/install_command_line.gif){:target="_blank"}{:rel="noopener noreferrer"}

### Install FCPCA G2 Using Apple Keychain Access

You can use the System Keychain or Login Keychain to install the FCPCA G2.

#### System Keychain

{% include alert-info.html content="These steps describe how to install FCPCA G2 in the System Keychain. You must have system administrator privileges to perform these steps." %}

1. Click the **Spotlight** icon and search for _Keychain Access_.
2. Double-click the **Keychain Access** icon to open the application.
3. Click the _System_ keychain from the left-hand navigation.
4. Click **File** -> **Import Items**
5. Browse to and select your verified copy of FCPCA G2.
6. When prompted, enter your _administrator_ username and password.
7. Keychain Access will present the installed certificate.

**Note:**The following video shows administrators how to install FCPCA G2 by using the Apple Keychain Access import process.

[![A video that shows the steps for administrators to install FCPCA G2 using the Apple Keychain Access import process.]({{site.baseurl}}/assets/fpki/keychain_gui_admin.gif){:style="width:85%;"}]({{site.baseurl}}/assets/fpki/keychain_gui_admin.gif){:target="_blank"}{:rel="noopener noreferrer"}

#### Login Keychain

{% include alert-info.html content="These steps describe how to install FCPCA G2 in the Login Keychain. Both system administrators and non-administrators can perform these steps." %}

1. Browse to your downloaded, verified copy of FCPCA G2.
2. Double-click the file.

    Keychain Access opens and displays the installed certificate.

**Note:**The following video shows non-administrators how to install FCPCA G2 using the Apple Keychain Access import process.

[![A video that shows the steps for non-administrators to install FCPCA G2 using the Apple Keychain Access import process.]({{site.baseurl}}/assets/fpki/keychain_gui_non_admin.gif){:style="width:85%;"}]({{site.baseurl}}/assets/fpki/keychain_gui_non_admin.gif){:target="_blank"}{:rel="noopener noreferrer"}

---

## iOS Solutions

### Install FCPCA G2 Using an Apple Configuration Profile in iOS

You can use Apple configuration profiles to install the FCPCA G2 on both macOS and iOS devices.

Review the [Apple configuration profiles](#install-an-apple-configuration-profile) guidance for instructions.

### Install FCPCA G2 Using Safari Web Browser

You can use the Safari web browser to install the FCPCA G2 on **iOS devices only**.

{% include alert-info.html content="These steps describe how to install the FCPCA G2 as a trusted root certificate. Both system administrators and non-administrators can perform these steps." %}

1. Launch **Safari**.
2. Navigate to the FCPCA G2 root CA certificate: <http://repo.fpki.gov/fcpca/fcpcag2.crt>.
    System message says: *The website is trying to open Settings to show you a configuration profile. Do you want to allow this?*
3. Click **Allow**.
    The FCPCA G2 configuration profile appears.
4. Click **More Details**, and then select the FCPCA G2 certificate entry.
5. Scroll to **Fingerprints** and verify the certificate's SHA-256 hash against the [expected value](#step-1---obtain-and-verify-fcpca-g2).
6. At the top left of screen, click **Back** and **Install Profile**. Then, click **Install** (top right).
7. When prompted, enter your device **passcode**.
8. Click **Install** in the upper right corner, and **Install** again.
9. Click **Done**.
10. Follow the steps below to enable [full trust for FCPCA G2](#enable-full-trust-for-fcpca-g2).

**Note:**The following video shows you how to install FCPCA G2 using the Safari web browser.

[![A video that shows the steps to install FCPCA G2 in the Safari web browser.]({{site.baseurl}}/assets/fpki/ios_safari_configuration-g2.gif){:style="width:300px;"}]({{site.baseurl}}/assets/fpki/ios_safari_configuration-g2.gif){:target="_blank"}{:rel="noopener noreferrer"}

### Enable Full Trust for FCPCA G2

This option works for **iOS** devices only.

{% include alert-info.html content="These steps describe how to enable “full trust” for certificates that chain to FCPCA G2. Both system administrators and non-administrators can perform these steps." %}

1. On the iOS device's **Home** screen, select **Settings** > **General** > **About** > **Certificate Trust Settings**.
2. Under **Enable Full Trust for Root Certificates**, toggle _ON_ for the FCPCA G2 root CA certificate entry.
3. When the certificate appears, click **Continue**.

You can now successfully navigate to any intranet website whose SSL certificate was issued by a Federal Public Key Infrastructure (FPKI) CA.

[![iOS full trust]({{site.baseurl}}/assets/fpki/ios_full_trust-g2.jpg){:style="width:300px;"}]({{site.baseurl}}/assets/fpki/ios_full_trust-g2.jpg){:target="_blank"}{:rel="noopener noreferrer"}

---

## Linux and Unix Solutions

### Debian-Based Kernels

1. Launch the command line.

1. Change directory with the following command:

    cd /usr/local/share/ca-certificates/

1. Convert the FCPCAG2 certificate to PEM and set permissions with the following commands:
    sudo openssl x509 -inform der -in [PATH\]fcpcag2.crt -out fcpcag2-pem.crt
    sudo chmod 644 fcpcag2-pem.crt

1. Update Trusted Certificates with the following command:
    sudo update-ca-certificates

### Red Hat Enterprise Linux, CentOS, and Other Non-Debian-Based Kernels

1. Launch the command line.

1. Change directory with the following command:
    cd /etc/pki/ca-trust/source/anchors/

1. Copy your verified copy of FCPCA G2 into the folder and set permissions with the following commands:
    sudo cp [PATH\]fcpcag2.crt .
    sudo chown root.root fcpcag2.crt
    sudo chmod 644 fcpcag2.crt

1. Update Trusted Certificates with the following command:
    sudo /bin/update-ca-trust extract

Next, verify distribution of the FCPCA G2 certificate as an operating system trusted root.

# Step 3 - Verify operating system distribution

To verify that the Federal Common Policy CA (FCPCA) G2 certificate has been distributed to your agency's workstations and devices, use one of these options:

## Verifying - Microsoft Windows

- **Automated Solutions (_Recommended_)**
  - [Use BigFix](#use-bigfix)
  - [Use LANDesk 2016](#use-landesk-2016)
- **Manual Solutions**
  - [Use Microsoft Certificate Manager](#use-microsoft-certificate-manager)
  - [Use Microsoft Registry Editor](#use-microsoft-registry-editor)

## macOS

- [Use Keychain Access](#use-keychain-access)

## iOS

- [Use Settings](#use-settings)

## Linux/Unix

- [Use the Command Line](#use-the-command-line)

---

## Verifying on Microsoft Windows

### Use BigFix

1. Download the BigFix Enterprise Suite (.bes) analysis file: [_FPKIRootG2Detection.bes_]({{site.baseurl}}/implement/FPKIRootG2Detection.bes){:target="_blank"}{:rel="noopener noreferrer"}.

2. Use Certutil or another tool to verify the .bes file's SHA-256 hash (_required_):
    certutil -hashfile [DOWNLOAD_LOCATION]\FPKIRootDetection.bes SHA256
3. The file's hash must match this one:
    03bca16f7d21be344d954105b5ccb3caf578588cf6b8bd6f1cd03dfe298361bb
4. Log into _BigFix_:**Start** > **IBM BigFix** > **IBM BigFix Console**.
5. Import the _FPKIRootG2Detection.bes_ file:**File** > **Import** > **Open**.
    The **Create Analysis** window appears.
6. Assign the file:for **Create in site**, select _site name_, and for **Create in domain**, select _domain name_. Click **Okay**.
7. On the left side panel, click **Analyses** to see a list of imported analysis files.
8. Click _Federal Common Policy CA G2 Distribution Detection_ (i.e., _FPKIRootG2Detection.bes_) and click the **Results** tab to see the distribution analysis. If the analysis was not activated _by default_, right-click the file and then click **Activate Globally**.
9. For each workstation or device listed, "_Has FCPCA G2 Been Distributed?_" should say **True**. If **False**, you'll need to investigate the cause of the failure. If you can't find a cause, please contact us at <fpkirootupdate@gsa.gov>.

![Sample Output]({{site.baseurl}}/assets/fpki/bigfix-results.jpg){:style="width:504px;"}

### Use LANDesk 2016

1. Open _LANDesk 2016_:**Start** > **LANDesk Management** > **Desktop Manager**.
2. Create a custom registry data item:**Tools** > **Reporting/Monitoring** > **Manage software list**.
3. Expand **Custom Data**, and click **Registry items**.
4. Click **Add** to add a new registry item.
5. Add the data shown below for Windows 32-bit or 64-bit versions, based on GPO or Certutil distribution of FCPCA G2.

    - **Microsoft Windows 32-bit Versions**

        - GPO Distribution

        ``` plaintext
        Root Key: HKLM
        Key: SOFTWARE\Policies\Microsoft\SystemCertificates\Root\Certificates\99b4251e2eee05d8292e8397a90165293d116028
        Value: BLOB
        Attribute Name: Custom Data – FCPCAG2Win32 GPO – Certificate
        ```

        - Certutil Distribution

        ``` plaintext
        Root Key: HKLM
        Key: SOFTWARE\Microsoft\EnterpriseCertificates\Root\Certificates\99b4251e2eee05d8292e8397a90165293d116028
        Value: BLOB
        Attribute Name: Custom Data – FCPCAG2Win32 certutil – Certificate
        ```

    - **Microsoft Windows 64-bit Versions**

        - GPO Distribution

        ``` plaintext
        Root Key: HKLM
        Key: SOFTWARE\WOW6432Node\Policies\Microsoft\SystemCertificates\Root\Certificates\99b4251e2eee05d8292e8397a90165293d116028
        Value: BLOB
        Attribute Name: Custom Data – FCPCAG2Win64 GPO - Certificate
        ```

        - Certutil Distribution

        ``` plaintext
        Root Key: HKLM
        Key: SOFTWARE\WOW6432Node\Microsoft\EnterpriseCertificates\Root\Certificates\99b4251e2eee05d8292e8397a90165293d116028
        Value: BLOB
        Attribute Name: Custom Data – FCPCAG2Win64 certutil - Certificate
        ```

6. Create a query for the registry item:on the left side panel, expand **Network View**, and click **Queries**.
7. Right-click **My Queries**, select **New Query**, and enter a _query name_ (e.g., _FCPCA G2 Verification: Win32 Machines_).
8. Under **Machine Component**, expand **Computer**, click **Custom Data**, and select the registry item.
9. For **Boolean**, select **Exists**.
10. For **Displayed Scanned Values**, click **Insert** and add the _BLOB_ value from above.
11. Double-click the _new query name_ to verify FCPCA G2 distribution. The results will be similar to these:

![Sample Output]({{site.baseurl}}/assets/fpki/landesk-results.jpg){:style="width:504px;"}

### Use Microsoft Certificate Manager

1. Open _Microsoft Certificate Manager_:**Start**; then type **certlm.msc** and press **Enter**.
2. Go to **Trusted Root Certification Authorities** > **Certificates**. To see whether FCPCA G2 was successfully distributed, look for _Federal Common Policy CA G2_ shown with **Intended Purposes** of _ALL_ and a **Friendly Name** of *None*, as shown here:

![Trusted Root CA Certificates List]({{site.baseurl}}/assets/fpki/verify_trust.png){:style="width:504px;"}

***Optional:***

1. Open _Microsoft Certificate Manager_:**Start**; then type **certlm.msc** and press **Enter**.
2. Select **Trusted Root Certification Authorities** from the left side panel, then select **View** > **Options**.
3. In the **View Options** box, select the **Physical certificate stores** checkbox.
4. On the left side panel, click the **>** icon next to **Trusted Root Certification Authorities** to see the subdirectories.
5. Verify the distribution of FCPCA G2:
     - For Certutil-distributed copies of FCPCA G2, click **Enterprise** > **Certificates**. *FCPCA G2 should appear in the certificates list.*
     - For GPO-distributed copies of FCPCA G2, click **Group Policy** > **Certificates**. *FCPCA G2 should appear in the certificates list.*

### Use Microsoft Registry Editor

1. Verify that FCPCA G2 has been distributed to a specific workstation or device:open the _Microsoft Registry Editor_:**Start**; type **regedit.exe** and press **Enter**.
2. The following registry keys will appear for GPO- or Certutil-distributed copies of FCPCA G2:

#### GPO-distributed FCPCA G2

- HKLM:\SOFTWARE\Policies\Microsoft\SystemCertificates\Root\Certificates\99b4251e2eee05d8292e8397a90165293d116028\
- HKLM:\SOFTWARE\WOW6432Node\Policies\Microsoft\SystemCertificates\Root\Certificates\99b4251e2eee05d8292e8397a90165293d116028\ 

#### Certutil-distributed FCPCA G2

- HKLM:\SOFTWARE\Microsoft\EnterpriseCertificates\Root\Certificates\99b4251e2eee05d8292e8397a90165293d116028\
- HKLM:\SOFTWARE\WOW6432Node\Microsoft\EnterpriseCertificates\Root\Certificates\99b4251e2eee05d8292e8397a90165293d116028\

---

## Verifying - macOS

### Use Keychain Access

1. Click the **Spotlight** icon and search for *Keychain Access*.

2. Double-click the **Keychain Access** icon.

3. Ensure that an entry for FCPCA G2 exists in the **login** or **System** Keychain Certificates repository.

![Verify Common on MacOS]({{site.baseurl}}/assets/fpki/verify_common_macOS.png){:style="width:476px;"}

---

## Verifying - iOS

### Use Settings

1. Select **Settings** > **About** > **Certificate Trust Settings**.

2. Verify that _Federal Common Policy CA G2_ has full trust enabled.

![iOS full trust]({{site.baseurl}}/assets/fpki/ios_full_trust-g2.jpg){:style="width:300px;"}

---

## Verifying - Linux and Unix

### Debian-based kernels

#### Use the Command Line

1. Launch the command line.

2. Run the following command to verify the Federal Common Policy CA G2 has an entry in the system's trust list:

    ``` plaintext
        trust list | grep "Federal Common Policy CA G2"
    ```



### Red Hat Enterprise Linux, CentOS, and other non-Debian-based kernels

#### Use the Command Line
1. Launch the command line.
	
2. Run the following command to verify the Federal Common Policy CA G2 has an entry in the system's trust list:
   
   ```
        trust list | grep "Federal Common Policy CA G2"
   ```



Next, distribute the FCPCA G2 certificate to application trust stores.


# Step 4 - Distribute to applications

Many, but not all, software applications leverage the underlying operating system [trust store]({{site.baseurl}}/university/fpki#fpki-third-party-trust) to verify whether a certificate should be trusted. 

Collaborate across agency teams to identify applications that rely on custom trust stores to ensure distribution of the Federal Common Policy CA (FCPCA) G2 certificate.

**Example applications with custom trust stores:**
- Java and all Java-based applications (for example, Apache Tomcat)
- Mozilla products (for example, [Firefox](#how-do-i-configure-the-firefox-web-browser-to-trust-the-new-federal-common-policy-ca-g2){:target="_blank"}{:rel="noopener noreferrer"} or Thunderbird)
- OpenSSL-based applications (for example, Apache HTTP Server or Nginx)



Next, determine if you need to distribute the CA certificates issued by the FCPCA G2.

# Step 5 - Distribute intermediate certificates

{% include alert-success.html content="<b>Depending on agency configurations, you might need to distribute these certificates to systems and applications</b>.  This page will help you understand <a href=\"#do-i-need-to-distribute-the-intermediate-ca-certificates\">when to distribute the intermediate CA certificates</a>, <a class=\"usa-link usa-link--external\" href=\"#which-certificates-do-i-need-to-distribute\">which certificates to distribute</a>, and <a href=\"#how-do-i-distribute-the-intermediate-ca-certificates\">recommended solutions</a>.  This page also lists <a class=\"usa-link usa-link--external\"  href=\"#certificates-issued-by-the-federal-common-policy-ca-g2
\">intermediate CA certificate details</a>, including download locations." %}

## Do I Need to Distribute the Intermediate CA Certificates?

### Operating Systems

You might need to distribute the [intermediate CA certificates issued by the FCPCA G2](#certificates-issued-by-the-federal-common-policy-ca-g2), depending upon your enterprise operating systems' type and configuration.

- **Microsoft Windows**: Intermediate CA certificate distribution is **recommended**.
     - Typically, Windows clients are able to dynamically build paths to a trusted root CA certificate through Microsoft's Certificate Chaining Engine (CCE).  
     - Distributing the intermediate CA certificates improves system performance and prioritizes use of the FCPCA G2 over the FCPCA.
     - There are instances where dynamic validation can fail, for example, when firewall rules prevent Microsoft from navigating to a certificate's Authority Information Access extension Uniform Resource Locator.  Email us at fpkirootupdate@gsa.gov with any questions or issues.

- **macOS or iOS**: Intermediate CA certificate distribution is **required**.

- **Linux or Unix**: Intermediate CA certificate distribution is **required**.

### Applications

Many, but not all, software applications leverage the underlying operating system trust store to verify whether a certificate should be trusted.

Collaborate across agency teams to identify applications that rely on custom trust stores to ensure distribution of the intermediate CA certificates issued by the FCPCA G2.

Example applications with custom trust stores that may require intermediate CA certificate installation:
- Java and all Java-based applications (for example, Apache Tomcat)
- Mozilla products (for example, Firefox or Thunderbird)
- OpenSSL-based applications (for example, Apache HTTP Server or Nginx)

## Which Certificates Do I Need to Distribute?

Identify which, if any, of the intermediate CA certificates issued by the Federal Common Policy CA are currently being distributed across your agency. 

A recommended starting point would be to replicate the existing configuration for CA certificates issued by the Federal Common Policy CA, instead of distributing the new certificates issued by the Federal Common Policy G2. 

If you're not sure which [intermediate CA certificates issued by the FCPCA G2](#certificates-issued-by-the-federal-common-policy-ca-g2) you need to distribute, consider distributing all of them or email us for help at fpkirootupdate@gsa.gov.

## How Do I Distribute the Intermediate CA Certificates?

Recommended solutions for distributing intermediate CA certificates are listed below.

### Use Microsoft Group Policy Object

{% include alert-warning.html content="You must have enterprise administrator privileges for the domain to use these procedures. You must run the commands from an agency domain controller." %}

1. Navigate to **Server Manager**.
1. Select **Tools**.
1. Select **Group Policy Management** from the drop-down list.
1. Right-click your desired domain(s), and select **Create a GPO in this domain, and Link it here**.
1. Enter a GPO **Name** and click **OK**.
1. Right-click the newly created GPO and click **Edit**.
1. Navigate to **Policies** > **Windows Settings** > **Security Settings** > **Public Key Policies**.  
1. Right-click **Intermediate Certification Authorities**, and select **Import**.

	The Certificate Import Wizard appears

1. Browse to and select the certificates [issued by the FCPCA G2](#certificates-issued-by-the-federal-common-policy-ca-g2) that you want to distribute.
1. Verify that the target **Certificate Store** presents **Intermediate Certification Authorities**, and select **Next**.
1. Select **Finish** to complete the import. 

	A success message appears.

1. Close the **Group Policy Management** window.
1. Wait for clients to consume the new policy.
1. (*Optional*) To force client consumption, click **Start**, type **cmd**, press **Enter**, and run the following command:

          gpupdate /force




### Use Apple Configuration Profile

{% include alert-warning.html content="Only System or Mobile Device Management (MDM) Administrators should create, distribute, and install Apple configuration profiles." %} 

#### Create an Apple Configuration Profile

1. As an administrator, download and verify the certificates [issued by the FCPCA G2](#certificates-issued-by-the-federal-common-policy-ca-g2) that you want to distribute.   
2. Download and install *Configurator 2* from the Apple App Store.
3. Open *Configurator 2* and click **File** > **New Profile**.
4. On the **General** tab, enter a unique profile **Name** (for example, *FPKI Intermediate CA Certificate Distribution Profile*) and **Identifier** (for example, *FCPCAG2-Intermediate-0001*).
5. On the **Certificates** tab, click **Configure**.
6. Browse to and select the certificates you want to distribute.
7. (*Optional*) Add additional agency-specific configurations or customizations. 
8. Click **File** > **Save** to save your profile to your preferred location. 
9. Follow the steps to [distribute](#distribute-an-apple-configuration-profile) the profile to macOS and iOS devices across your enterprise.

**Note:**The following video shows you how to create an Apple configuration profile. 


[![The following video shows you how to create an Apple configuration profile.]({{site.baseurl}}/assets/fpki/create_profile.gif){:style="width:85%;"}]({{site.baseurl}}/assets/fpki/create_profile.gif){:target="_blank"}{:rel="noopener noreferrer"}


### Use Linux Command Line

The steps to distribute an intermediate CA certificate are the same as the steps to distribute a [root CA certificate](#linux-and-unix-solutions).



---



### Certificates Issued By the Federal Common Policy CA G2

The following certificates are published in the Federal Common Policy CA G2 certificate's Subject Information Access extension bundle located at http://repo.fpki.gov/fcpca/caCertsIssuedByfcpcag2.p7c.

  - [Issued to: Federal Bridge CA G4](#issued-to-federal-bridge-ca-g4)
  - [Issued to: U.S. Department of State AD Root CA](#issued-to-us-department-of-state-ad-root-ca)
  - [Issued to: US Treasury Root CA](#issued-to-us-treasury-root-ca)
  - [Issued to: DigiCert Federal SSP Intermediate CA - G5](#issued-to-digicert-federal-ssp-intermediate-ca---g5)
  - [Issued to: Symantec SSP Intermediate CA - G4](#issued-to-symantec-ssp-intermediate-ca---g4)
  - [Issued to: Entrust Managed Services Root CA](#issued-to-entrust-managed-services-root-ca)
  - [Issued to: Verizon SSP CA A2](#issued-to-verizon-ssp-ca-a2)
  - [Issued to: ORC SSP 4](#issued-to-orc-ssp-4)
  - [Issued to: WidePoint ORC SSP CA 5](#issued-to-widepoint-orc-ssp-ca-5)

{% include alert-warning.html content="Important! To ensure PIV credential certificates issued by the Entrust Federal SSP before August 13, 2019 validate to the Federal Common Policy CA G2, you'll need to distribute an additional intermediate CA certificate to systems that are <b>unable</b> to perform dynamic path validation. Learn more on our <a href=\"#why-arent-some-entrust-federal-shared-service-provider-issued-piv-credential-certificates-chaining-to-fcpca-g2\">Frequently Asked Questions</a> page." %}


#### Issued to: Federal Bridge CA G4

| Certificate Attribute | Value                                              |
| :--------  | :--------     |
| Distinguished Name | CN=Federal Bridge CA G4, OU=FPKI, O=U.S. Government, C=US    |
| Validity | October 15, 2020 to December 6, 2029 |
| Serial Number | 234200beaa6dada658f53b403f418295290cae82  |
| SHA-1 Thumbprint | 97db351e069964297a82040eb760c9cc1d74ba33 |
| SHA-256 Thumbprint | 74383CA1BB648F96EFE9E6ECADB5A8A359E7DF9BA262EF7C02BD004EAB3895F4  |
| Download Location | Click [here]({{site.baseurl}}/implement/certs/federal_bridge_ca_g4.cer)|

#### Issued to: U.S. Department of State AD Root CA

| Certificate Attribute | Value                                              |
| :--------  | :--------     |
| Distinguished Name | CN=U.S. Department of State AD Root CA, CN=AIA, CN=Public Key Services, CN=Services, CN=Configuration, DC=state, DC=sbu |
| Validity | November 18, 2020 to November 18, 2023 |
| Serial Number | 27634fd321cbfd8c7efc0aeb02876f63da4c0c09 |
| SHA-1 Thumbprint | 9b3849f7047964a6654988054956e478ccb75ded |
| SHA-256 Thumbprint | 9744734dbd34f28d3c87a9094387388e7623a272437c612e88d251138c1db93c |
| Download Location | Click [here]({{site.baseurl}}/implement/certs/US_Department_of_State_AD_Root_CA.cer)|

#### Issued to: US Treasury Root CA

| Certificate Attribute | Value                                              |
| :--------  | :--------     |
| Distinguished Name | OU=US Treasury Root CA, OU=Certification Authorities, OU=Department of the Treasury, O=U.S. Government, C=US |
| Validity | April 6, 2022 to April 6, 2025 |
| Serial Number | 279f09737fe5dd3d7534be0ea51aff9dc4018501 |
| SHA-1 Thumbprint | 52de6628d8c70a9df9e1df94fcd84728b33c05ec |
| SHA-256 Thumbprint | ed40cc2e18e224f1c8dc6d0786559576517139be777153cd9f8ad2d215a9be79 |
| Download Location | Click [here]({{site.baseurl}}/implement/certs/US_Treasury_Root_CA.cer)|

#### Issued to: DigiCert Federal SSP Intermediate CA - G5

| Certificate Attribute | Value                                              |
| :--------  | :--------     |
| Distinguished Name | CN=DigiCert Federal SSP Intermediate CA - G5, O=DigiCert, Inc., C=US |
| Validity | November 18, 2020 to December 13, 2028 |
| Serial Number | 24bc168f9ccb30cfcef8f0a58f26f10181869266 |
| SHA-1 Thumbprint | 9aecfbe2de8aea49d220bbf799172c00527fe756 |
| SHA-256 Thumbprint | ea86e0baf55eef020ed58196af865f2fa72a77d1be70a779b65a9cbf0b5ee3f2 |
| Download Location | Click [here]({{site.baseurl}}/implement/certs/DigiCert_Federal_SSP_Intermediate_CA_-_G5.cer)|

#### Issued to: Symantec SSP Intermediate CA - G4

| Certificate Attribute | Value                                              |
| :--------  | :--------     |
| Distinguished Name | CN=Symantec SSP Intermediate CA - G4, O=Symantec Corporation, C=US |
| Validity | November 18, 2020 to November 12, 2024 |
| Serial Number | 262bd1f025c8af37334545666ea6c9ea946c2c34 |
| SHA-1 Thumbprint | 4c40f62b5c3f13533a8f8a1d44f8b027aaa0fd3d |
| SHA-256 Thumbprint | 09d3f1a7d2e0be1a8d043fdf5d16bf8bf18e0dff2f397f27b0b8ee962de59de5 |
| Download Location | Click [here]({{site.baseurl}}/implement/certs/Symantec_SSP_Intermediate_CA_-_G4.cer)|

#### Issued to: Entrust Managed Services Root CA

| Certificate Attribute | Value                                              |
| :--------  | :--------     |
| Distinguished Name | OU=Entrust Managed Services Root CA, OU=Certification Authorities, O=Entrust, C=US |
| Validity | November 18, 2020 to August 14, 2029 |
| Serial Number | 215e78d99648b021c6394a6566d8e00f46a1e595 |
| SHA-1 Thumbprint | 07f5dc58f83778d5b5738a988292c00a674a0f40 |
| SHA-256 Thumbprint | e3d6b1b33d0a5df0630b32bf17f9fb632b0471a6cac561f164aa6429ef0699a1 |
| Download Location | Click [here]({{site.baseurl}}/implement/certs/Entrust_Managed_Services_Root_CA.cer) |

#### Issued to: Verizon SSP CA A2

| Certificate Attribute | Value                                              |
| :--------  | :--------     |
| Distinguished Name | CN=Verizon SSP CA A2, OU=SSP, O=Verizon, C=US |
| Validity | November 18, 2020 to December 6, 2026 |
| Serial Number | 25fca834ada24a4455a2db0ff4cef7c411198e3a |
| SHA-1 Thumbprint | b2167fd38ff47bb910d8dcc32fcc3b7b63a09ff7 |
| SHA-256 Thumbprint | 226508d2a1c926a7092218e743ccd01bab8273291feef66941691592fa7c12b8 |
| Download Location | Click [here]({{site.baseurl}}/implement/certs/Verizon_SSP_CA_A2.cer)|

#### Issued to: ORC SSP 4

| Certificate Attribute | Value                                              |
| :--------  | :--------     |
| Distinguished Name | CN=ORC SSP 4, O=ORC PKI, C=US |
| Validity | November 18, 2020 to January 21, 2024 |
| Serial Number | 20a0e513367881559a5e7d20d35fa7c6739a42ab |
| SHA-1 Thumbprint | 3e6610b03daca9fa07e1093b60ccb8927c42d83b  |
| SHA-256 Thumbprint | 7cd7f21d04beb99d9f833be8697138e3ad4e11313897ee573c066132d21ab5f8 |
| Download Location | Click [here]({{site.baseurl}}/implement/certs/ORC_SSP_4.cer)|

#### Issued to: WidePoint ORC SSP CA 5

| Certificate Attribute | Value                                              |
| :--------  | :--------     |
| Distinguished Name | CN=WidePoint ORC SSP 5, O=ORC PKI, C=US |
| Validity | November 19, 2020 to November 5, 2030  |
| Serial Number | 210b3f17db750e616eb25f3f0b4933e5a98c449b |
| SHA-1 Thumbprint | 80f4731a60fd5f2eb0468d0629310daa50ad210d |
| SHA-256 Thumbprint | 70200179049bdc8cbe94b4880730609489f324f2a770477f7c1859401e644c72 |
| Download Location | Click [here]({{site.baseurl}}/implement/certs/WidePoint_ORC_SSP_5.cer)|

### Certificates issued to the Federal Common Policy CA G2

Distrusting the certificate below will prevent workstations from building a path from the Federal Common Policy CA G2, through the Federal Bridge CA G4, to the Federal Common Policy CA or any other root.

#### Issued by: Federal Bridge CA G4

| Certificate Attribute | Value                                              |
| :--------  | :--------     |
| Distinguished Name | CN=Federal Common Policy CA G2, OU=FPKI, O=U.S. Government, C=US |
| Validity | October 15, 2020 to December 6, 2029  |
| Serial Number | 129217e6c9126fd816babe02d9192ae2b519e231 |
| SHA-1 Thumbprint | edf2d373f4c56b5186087300638e3c5660c9a090 |
| SHA-256 Thumbprint | 0b658c27727dfd6cd47e378ae2390ea376d9708ecf4b06775f8ee7bc50119991 |
| Download Location | Click [here]({{site.baseurl}}/implement/certs/Federal_Common_Policy_CA_G2_from_FBCAG4.cer)|

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

# Frequently Asked Questions

If you do not see a questions, send it to FPKI at gsa.gov.

## What happens if I don’t update the FCPCA G2?

1. **(_High Impact_) Authentication failures**

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
<img src="{{site.baseurl}}/assets/fpki/error_navigation.png" alt="An image showing an error navigation message." width="560" height="397">

*Sample Chrome error when PIV authentication fails because the user’s certificate doesn't chain to a trusted root CA:*
<img src="{{site.baseurl}}/assets/fpki/error_piv_auth.png" alt="An image showing an error piv authetication message." width="560" height="292">

*Sample Microsoft Outlook error when a digital signature certificate for an email doesn't chain to a trusted root CA:*
<img src="{{site.baseurl}}/assets/fpki/error_sig_val.png" alt="An image showing a digital signature invalid error message." width="381" height="242">

## What errors can occur in macOS if I don't distribute the FCPCA G2?
*Sample Safari error when a user navigates to an intranet site whose SSL/TLS certificate doesn't chain to a trusted root CA:*
<img src="{{site.baseurl}}/assets/fpki/safari_untrusted_ssl.png" alt="An image showing a safari untrusted ssl error message." width="476" height="284">

*Sample Safari error where client (PIV) authentication fails because a user’s certificate doesn't chain to a trusted root CA:*
<img src="{{site.baseurl}}/assets/fpki/safari_untrusted_auth.png" alt="An image showing a safari untrusted authentication error message." width="476" height="285">

*Sample Chrome error when a user navigates to an intranet site whose SSL/TLS certificate doesn't chain to a trusted root CA:*
<img src="{{site.baseurl}}/assets/fpki/chrome_untrusted_ssl.png" alt="An image showing a chrome untrusted ssl error message." width="476" height="291">

*Sample Chrome error where client (PIV) authentication fails because a user’s certificate doesn't chain to a trusted root CA:*
<img src="{{site.baseurl}}/assets/fpki/chrome_untrusted_auth.png" alt="An image showing a chrome untrusted authentication error message." width="476" height="290">

## What errors can occur in iOS if I don't distribute the FCPCA G2?

*Sample Safari error when a user navigates to an intranet site whose SSL/TLS certificate doesn't chain to a trusted root CA:*
<img src="{{site.baseurl}}/assets/fpki/ios_safari_untrusted_ssl.png" height="600" alt="An image showing ios safari untrusted ssl.">

*Sample Chrome error when a user navigates to an intranet site whose SSL/TLS certificate doesn't chain to a trusted root CA:*
<img src="{{site.baseurl}}/assets/fpki/ios_chrome_untrusted_ssl.png" height="600" alt="An image showing ios chrome untrusted ssl.">

## How can I verify that the FCPCA G2 has been successfully distributed to my workstation or device?

Please review the steps to [verify distribution of the FCPCA G2](#step-4---verify-operating-system-distribution).

## Do I need to distribute the FCPCA G2 to my Bring Your Own Device (BYOD) program device?

As a BYOD program device user, you'll need to distribute the FCPCA G2 if you:

- use your PIV credential to log into intranet sites or VPNs,
- validate PIV digital signatures in emails or documents, or
- navigate to intranet pages whose SSL/TLS certificates chain to the FCPCA G2.

## How do I configure my unmanaged Windows system to trust the new Federal Common Policy CA G2?

1. Download a copy of the FCPCA G2 certificate from http://repo.fpki.gov/fcpca/fcpcag2.crt
2. Download the [bundle of FPKI intermediate CA certificates for unmanaged devices]({{site.baseurl}}/implement/certs/fpki-unmanaged-bundle.p7b) (fpki-unmanaged-bundle.p7b)
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

[![configure unmanaged device]({{site.baseurl}}/assets/fpki/unmanaged-device.gif){:style="width:85%;"}]({{site.baseurl}}/assets/fpki/unmanaged-device.gif){:target="_blank"}{:rel="noopener noreferrer"}

## How do I configure my unmanaged macOS device to trust the new Federal Common Policy CA G2?

1. Download a copy of [fpki-unmanaged-bundle.mobileconfig]({{site.baseurl}}/implement/certs/fpki-unmanaged-bundle.mobileconfig)
2. Browse to and double-click on your copy of fpki-unmanaged-bundle.mobileconfig. 
3. Navigate to **System Preferences** -> **Profiles**
4. Verify the profile contents and click **Install** (twice) 

**Note:**The following video shows you how to install FCPCA G2 and the intermediate CA certificates using an Apple configuration profile on macOS.

[![A video that shows the steps to install an Apple configuration profile on macOS]({{site.baseurl}}/assets/fpki/macos-unmanaged.gif){:style="width:85%;"}]({{site.baseurl}}/assets/fpki/macos-unmanaged.gif){:target="_blank"}{:rel="noopener noreferrer"}

## How do I configure my unmanaged iOS device to trust the new Federal Common Policy CA G2?

1. Launch **Safari**.
2. Navigate to a copy of the [fpki-unmanaged-bundle.mobileconfig]({{site.baseurl}}/implement/certs/fpki-unmanaged-bundle.mobileconfig)
    > System message says: *The website is trying to open Settings to show you a configuration profile. Do you want to allow this?*
3. Click **Allow**.
4. Navigate to **Settings** -> **General** -> **Profile** 
5. Select the "Distribute FCPCAG2 and Intermediate CA Certificates" profile
6. Select **More Details** and select the certificate entry for the FCPCA G2
7. Scroll to **Fingerprints** and verify the certificate's SHA-256 hash against the [expected value](#step-2---obtain-and-verify-fcpca-g2).
8. At the top left of screen, click **Back** and **Install Profile**. Then, click **Install** (top right).
9. When prompted, enter your device **passcode**.
10. Click **Install** in the upper right corner, and **Install** again.
11. Click **Done**.
12. Enable [full trust for the FCPCA G2](#enable-full-trust-for-fcpca-g2).

**Note:**The following video shows you how to install FCPCA G2 and the intermediate CA certificates using the Safari web browser.

<a href="{{site.baseurl}}/assets/fpki/ios_safari_configuration-unmanaged.gif" target="_blank" rel="noopener noreferrer"><img src="{{site.baseurl}}/assets/fpki/ios_safari_configuration-unmanaged.gif" height="600" alt="A video that shows the steps to install a mobile configuration file in the Safari web browser"></a>

## How do I configure the Firefox web browser to trust the new Federal Common Policy CA G2?

The following steps will allow Firefox to use the underlying operating system trust store.  Follow these steps only after distributing the Federal Common Policy CA G2 to your Windows or macOS device.

1. Open **Firefox**.
2. Enter **about:config** in the address bar and continue to the list of preferences.
3. Set the preference **security.enterprise_roots.enabled** to **true**.  
4. Restart **Firefox**.

**Note:**The following video shows you how to configure the Firefox web browser to trust the certificates included in the operating system trust store.

<a href="{{site.baseurl}}/assets/fpki/configure-firefox.gif" target="_blank" rel="noopener noreferrer"><img src="{{site.baseurl}}/assets/fpki/configure-firefox.gif" height="90%" width="90%" alt="A video that shows the steps to configure the Firefox web browser"></a>