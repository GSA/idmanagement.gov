---
layout: page 
title: 3. Distribute the certificate to operating systems
collection: fpki
permalink: /fpki/common/distribute-os/
sticky_sidenav: true
sidenav: fpkicommon

subnav:
  - text: Microsoft Solutions
    href: '#microsoft-solutions'
  - text: macOS Solutions
    href: '#macos-solutions'
  - text: iOS Solutions
    href: '#ios-solutions'
  - text: Linux and Unix Solutions
    href: '#linux-and-unix-solutions'
---

{% include alert-info.html content="<strong>We're calling for all solutions!</strong> If you'd like to share your agency's playbook on how to distribute a trusted root CA certificate to an operating system trust store, create an <a href=\"https://github.com/GSA/ficam-playbooks/issues/new\" target=\"_blank\" rel=\"noopener noreferrer\">issue on GitHub</a> or email us at fpkirootupdate@gsa.gov." %}

To distribute the Federal Common Policy CA G2 (FCPCA G2) certificate, use one of these options:

## Microsoft Solutions
- [Use Microsoft Certutil](#use-microsoft-certutil)
- [Use Microsoft Group Policy Object (GPO)](#use-microsoft-group-policy-object-gpo)
- [Use third-party configuration management tools](#use-third-party-configuration-management-tools)
- [Use Microsoft Certificate Manager for unmanaged devices](#use-microsoft-certificate-manager-for-unmanaged-devices)

## macOS Solutions
- [Use an Apple configuration profile](#create-distribute-and-install-an-apple-configuration-profile)
- [Use the command line](#install-fcpca-g2-using-command-line)
- [Use Apple Keychain](#install-fcpca-g2-using-apple-keychain-access)

## iOS Solutions
- [Use an Apple configuration profile](#install-fcpca-g2-using-an-apple-configuration-profile-in-ios)
- [Use the Safari Web Browser](#install-fcpca-g2-using-safari-web-browser)
- [Enable Full Trust for FCPCA G2](#enable-full-trust-for-fcpca-g2)

## Linux/Unix Solutions
- [Use the command line](#linux-and-unix-solutions)

<br>

---------------------------------------------------

## Microsoft Solutions

### Use Microsoft Certutil 

{% include alert-warning.html content="You must have Enterprise Administrator privileges for the domain to use these procedures. The commands must be run from an agency domain controller." %}

1. Click **Start**, type **cmd**, and press **Enter**.
1. Run the following command:
    ```
        certutil -dspublish -f [PATH\]fcpcag2.crt RootCA
    ```

1. To verify that FCPCA G2 was distributed, run the following commands:
    ```
        gpupdate /force
        certutil -viewstore -enterprise
    ```

1. Confirm that the output details include FCPCA G2.
1. Verify the certificate details against the [expected values]({{site.baseurl}}/fpki/common/obtain-and-verify) (for example, serial number, hash, etc.).


**Note:** The following .gif shows you how to distribute the FCPCA G2 using Microsoft Certutil.
<br>[![A gif that shows the distribution and verification steps performed using Microsoft Certutil]({{site.baseurl}}/assets/fpki/certutil.gif){:style="width:85%;"}]({{site.baseurl}}/assets/fpki/certutil.gif){:target="_blank"}{:rel="noopener noreferrer"}


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
1. (*Optional*) To force client consumption, click **Start**, type **cmd**, press **Enter**, and run the following command:
    ```
          gpupdate /force
    ```

**Note:** The following .gif shows you how to distribute the FCPCA G2 with Microsoft GPO.
<br>
[![A gif that shows the distribution and verification steps performed with Microsoft Group Policy Object also known as GPO]({{site.baseurl}}/assets/fpki/gpo.gif){:style="width:85%;"}]({{site.baseurl}}/assets/fpki/gpo.gif){:target="_blank"}{:rel="noopener noreferrer"}

### Use Third-Party Configuration Management Tools

{% include alert-warning.html content="To follow these steps, you must have Enterprise Administrator privileges for the Domain. You will need to run these commands from an agency domain controller." %}

You can use third-party configuration management tools, such as BigFix.

1. Using BigFix, schedule a task and push the certificate file. Run the following command (example): 
    ```
        certutil -f -addstore root “fcpcag2.crt”
    ```

### Use Microsoft Certificate Manager for Unmanaged Devices

To distribute the FCPCA G2 to unmanaged devices:

1. Click **Start**, type **certmgr.msc**, and  press **Enter**.
1. Right-click **Trusted Root Certification Authorities**, and select **All Tasks** > **Import**.

	The Certificate Import Wizard appears. 
	
1. Browse to and select your copy of the FCPCA G2.
1. Verify that the desired **Certificate Store** displays **Trusted Root Certification Authorities**, and select *Next*.
1. Select *Finish* to complete the import.
	
	A success message appears.

> **Note:** If several users share a device, you can run the **certlm.msc** to simultaneously update the certificate stores for the accounts on the device (vs. updating each account separately). 

<br>

---------------------------------------------------


## macOS Solutions

### Create, Distribute, and Install an Apple Configuration Profile

For **macOS and [iOS](#install-fcpca-g2-using-an-apple-configuration-profile-in-ios)** government-furnished devices, you can use Apple configuration profiles (XML files) to distribute and automatically install the FCPCA G2.  

These steps describe how to create, distribute, and install profiles using Apple’s free *Configurator 2* application. There are also available third-party applications.

{% include alert-warning.html content="Only System or mobile device management (MDM) administrators should create, distribute, and install Apple configuration profiles." %} 

### Create an Apple Configuration Profile

1. As an administrator, [download and verify]({{site.baseurl}}/fpki/common/obtain-and-verify/) a copy of the FCPCA G2 to your device.   
2. Download and install *Configurator 2* from the Apple App Store.
3. Open *Configurator 2* and click **File** > **New Profile**.
4. On the **General** tab, enter a unique profile **Name** (for example, *FCPCA G2 Profile*) and **Identifier** (for example, *FCPCAG2-0001*).
5. On the **Certificates** tab, click **Configure**. 
6. Browse to and select your verified copy of the FCPCA G2.
7. (*Optional*) Add additional agency-specific configurations or customizations. 
8. Click **File** > **Save** to save your profile to your preferred location. 
9. [Distribute the profile across your enterprise](#distribute-an-apple-configuration-profile).

**Note:** The following video shows you how to create an Apple configuration profile.
<br>
[![A video that shows the steps to create an Apple configuration profile.]({{site.baseurl}}/assets/fpki/create_profile.gif){:style="width:85%;"}]({{site.baseurl}}/assets/fpki/create_profile.gif){:target="_blank"}{:rel="noopener noreferrer"}


<p align="center">
<b>APPLE CONFIGURATION PROFILE (EXAMPLE)</b>
</p>

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
- [Share via over-the-air profile delivery and configuration (Apple Developer Library)](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/iPhoneOTAConfiguration/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009505){:target="_blank"}{:rel="noopener noreferrer"}.
- [Share via over-the-air delivery and configuration from an MDM server (Apple Developer Library)](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/MobileDeviceManagementProtocolRef/6-MDM_Best_Practices/MDM_Best_Practices.html#//apple_ref/doc/uid/TP40017387-CH5-SW2){:target="_blank"}{:rel="noopener noreferrer"}. Third-party applications are also available.
> ***For iOS only**&nbsp;&mdash;&nbsp;If you download and install the FCPCA G2 from an email or an intranet website, you will need to _manually enable SSL trust for FCPCA G2_. This is not needed if you use Configurator 2 with over-the-air (OTA) methods or an MDM enrollment profile to install the FCPCA G2. (See [Enable Full Trust for FCPCA G2](#enable-full-trust-for-fcpca-g2).)

### Install an Apple Configuration Profile

We recommend using an automated method to install Apple configuration profiles on government-furnished Apple devices (for example, a desktop configuration management or MDM tool), which will distribute FCPCA G2. (If you have questions about third-party products, email us at fpkirootupdate@gsa.gov.)

You can also manually install a profile. 

**Note:**&nbsp;&nbsp;The following video shows you how to manually install an Apple configuration profile on **macOS**.
<br>
[![A video that shows the steps to manually install an Apple configuration profile]({{site.baseurl}}/assets/fpki/manual_install_profile.gif){:style="width:85%;"}]({{site.baseurl}}/assets/fpki/manual_install_profile.gif){:target="_blank"}{:rel="noopener noreferrer"}


### Install FCPCA G2 Using Command Line

{% include alert-info.html content="These steps describe how to install the FCPCA G2 in the System Keychain. You must have system administrator privileges to perform these steps." %}

1. Click the **Spotlight** icon and search for *Terminal*.
2. Double-click the **Terminal** icon (black monitor icon with white “>_”) to open a window.
3. Run the following command:

    ```
	$ sudo security add-trusted-cert -d -r trustRoot -k "/Library/Keychains/System.keychain" {DOWNLOAD_LOCATION}/fcpcag2.crt
    ```
    
**Note:**&nbsp;&nbsp;The following video shows you how to install FCPCA G2 using the command line.
<br>
[![A video that shows the steps to install FCPCA G2 using the macOS command line.]({{site.baseurl}}/assets/fpki/install_command_line.gif){:style="width:85%;"}]({{site.baseurl}}/assets/fpki/install_command_line.gif){:target="_blank"}{:rel="noopener noreferrer"}


### Install FCPCA G2 Using Apple Keychain Access

You can use the System Keychain or Login Keychain to install the FCPCA G2.

#### System Keychain
{% include alert-info.html content="These steps describe how to install FCPCA G2 in the System Keychain. You must have system administrator privileges to perform these steps." %}

1. Click the **Spotlight** icon and search for *Keychain Access*.
2. Double-click the **Keychain Access** icon to open the application.
3. Click the *System* keychain from the left-hand navigation.
4. Click **File** -> **Import Items**
5. Browse to and select your verified copy of FCPCA G2.
6. When prompted, enter your *administrator* username and password.
7. Keychain Access will present the installed certificate.

**Note:**&nbsp;&nbsp;The following video shows administrators how to install FCPCA G2 by using the Apple Keychain Access import process.
<br>
[![A video that shows the steps for administrators to install FCPCA G2 using the Apple Keychain Access import process.]({{site.baseurl}}/assets/fpki/keychain_gui_admin.gif){:style="width:85%;"}]({{site.baseurl}}/assets/fpki/keychain_gui_admin.gif){:target="_blank"}{:rel="noopener noreferrer"}


#### Login Keychain

{% include alert-info.html content="These steps describe how to install FCPCA G2 in the Login Keychain. Both system administrators and non-administrators can perform these steps." %}

1. Browse to your downloaded, verified copy of FCPCA G2.
2. Double-click the file.

	Keychain Access opens and displays the installed certificate.

**Note:**&nbsp;&nbsp;The following video shows non-administrators how to install FCPCA G2 using the Apple Keychain Access import process.
<br>
[![A video that shows the steps for non-administrators to install FCPCA G2 using the Apple Keychain Access import process.]({{site.baseurl}}/assets/fpki/keychain_gui_non_admin.gif){:style="width:85%;"}]({{site.baseurl}}/assets/fpki/keychain_gui_non_admin.gif){:target="_blank"}{:rel="noopener noreferrer"}

---------------------------------------------------


## iOS Solutions

### Install FCPCA G2 Using an Apple Configuration Profile in iOS
You can use Apple configuration profiles to install the FCPCA G2 on both macOS and iOS devices. 

Review the [Apple configuration profiles](#install-an-apple-configuration-profile) guidance for instructions.

### Install FCPCA G2 Using Safari Web Browser
You can use the Safari web browser to install the FCPCA G2 on **iOS devices only**. 

{% include alert-info.html content="These steps describe how to install the FCPCA G2 as a trusted root certificate. Both system administrators and non-administrators can perform these steps." %}

1. Launch **Safari**.
2. Navigate to the FCPCA G2 root CA certificate: http://repo.fpki.gov/fcpca/fcpcag2.crt.<br>
> System message says: *The website is trying to open Settings to show you a configuration profile. Do you want to allow this?*<br>
3. Click **Allow**.<br>
> The FCPCA G2 configuration profile appears.<br> 
4. Click **More Details**, and then select the FCPCA G2 certificate entry.
5. Scroll to **Fingerprints** and verify the certificate's SHA-256 hash against the [expected value]({{site.baseurl}}/fpki/common/obtain-and-verify).
6. At the top left of screen, click **Back** and **Install Profile**. Then, click **Install** (top right).
7. When prompted, enter your device **passcode**.
8. Click **Install** in the upper right corner, and **Install** again.
9. Click **Done**.
10. Follow the steps below to enable [full trust for FCPCA G2](#enable-full-trust-for-fcpca-g2).

**Note:**&nbsp;&nbsp;The following video shows you how to install FCPCA G2 using the Safari web browser.
<br>
<a href="{{site.baseurl}}/assets/fpki/ios_safari_configuration-g2.gif" target="_blank" rel="noopener noreferrer"><img src="{{site.baseurl}}/assets/fpki/ios_safari_configuration-g2.gif" height="600" alt="A video that shows the steps to install FCPCA G2 in the Safari web browser."></a>


### Enable Full Trust for FCPCA G2 
This option works for **iOS** devices only.

{% include alert-info.html content="These steps describe how to enable “full trust” for certificates that chain to FCPCA G2. Both system administrators and non-administrators can perform these steps." %}

1. On the iOS device's **Home** screen, select **Settings** > **General** > **About** > **Certificate Trust Settings**.
2. Under **Enable Full Trust for Root Certificates**, toggle _ON_ for the FCPCA G2 root CA certificate entry. 
3. When the certificate appears, click **Continue**.

	You can now successfully navigate to any intranet website whose SSL certificate was issued by a Federal Public Key Infrastructure (FPKI) CA.

<img src="{{site.baseurl}}/assets/fpki/ios_full_trust-g2.jpg" width="300" alt="iOS full trust">

<br>

---------------------------------------------------


## Linux and Unix Solutions

### Debian-Based Kernels

1. Launch the command line.

1. Change directory with the following command:

    ```
        cd /usr/local/share/ca-certificates/
    ```

1. Convert the FCPCAG2 certificate to PEM and set permissions with the following commands:

    ```
        sudo openssl x509 -inform der -in [PATH\]fcpcag2.crt -out fcpcag2-pem.crt
        sudo chmod 644 fcpcag2-pem.crt	
    ```

1. Update Trusted Certificates with the following command:

    ```
        sudo update-ca-certificates
    ```


<br>


### Red Hat Enterprise Linux, CentOS, and Other Non-Debian-Based Kernels

1. Launch the command line.

1. Change directory with the following command:

    ```
        cd /etc/pki/ca-trust/source/anchors/
    ```

1. Copy your verified copy of FCPCA G2 into the folder and set permissions with the following commands:

    ```
        sudo cp [PATH\]fcpcag2.crt .
        sudo chown root.root fcpcag2.crt
        sudo chmod 644 fcpcag2.crt
    ```

1. Update Trusted Certificates with the following command:

    ```
        sudo /bin/update-ca-trust extract
    ```

<br>



Next, [verify distribution of the FCPCA G2 certificate as an operating system trusted root]({{site.baseurl}}/fpki/common/verify-os-distribution/).
