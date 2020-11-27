To limit the impact to your agency, you will need to redistribute the Federal Common Policy CA (FCPCA) (i.e., COMMON) root certificate as a _trusted root certificate_ to all government-furnished Apple devices.

To redistribute COMMON, use these procedures:
1. [Download a Copy of COMMON](#download-a-copy-of-common)
1. [Verify Your Copy of COMMON](#verify-your-copy-of-common)
1. [Redistribute COMMON](#redistribute-common) <br>     - [macOS Solutions](#macos-solutions) <br>     - [iOS Solutions](#ios-solutions)

### Download a Copy of COMMON
To download a copy of COMMON, use one of the recommended options:
1. Download from http://http.fpki.gov/fcpca/fcpca.crt. 
1. Email fpki@gsa.gov to request an out-of-band copy for download.

{% include alert-warning.html content="You should never install a root certificate without verifying it. Follow the steps below to verify the authenticity of your copy of COMMON." %} 


### Verify Your Copy of COMMON
To verify your copy of COMMON on **macOS** devices, use one of these steps: 

1. Click the **Spotlight** icon and search for _terminal_.
2. Double-click the **Terminal** icon (black monitor icon with white ">_") to open a window.
3. Run command:

    ```
	$ shasum -a 256 {DOWNLOAD_LOCATION}/fcpca.crt
    ```
    
> **Note:**&nbsp;&nbsp;Replace _{DOWNLOAD_LOCATION}_ with your preferred location (e.g., `/Users/Sam.Jackson/Downloads`) 

Verify that the certificate hash matches the SHA-256 Thumbprint in the certificate details below:<br />

| **Federal Common Policy CA (FCPCA/COMMON)**  | **Certificate Details**                             |
| :--------  | :-------------------------------     |
| Federal Common Policy CA<br>(sometimes shown as _U.S. Government Common Policy_) | http://http.fpki.gov/fcpca/fcpca.crt |
| Distinguished Name | cn=Federal Common Policy CA, ou=FPKI, o=U.S. Government, c=US |
| SHA-1 Thumbprint | 90 5f 94 2f d9 f2 8f 67 9b 37 81 80 fd 4f 84 63 47 f6 45 c1 |
| SHA-256 Thumbprint | 89 4e bc 0b 23 da 2a 50 c0 18 6b 7f 8f 25 ef 1f 6b 29 35 af 32 a9 45 84 ef 80 aa f8 77 a3 a0 6e |

**Note:**&nbsp;&nbsp;This video shows you how to download and verify a copy of COMMON for **macOS**.
<br>
<video width="600" controls>
  <source src="{{site.baseurl}}/video/download_and_verify.mp4" type="video/mp4">
</video>
<br>

### Redistribute COMMON

### macOS Solutions
Redistribute COMMON to government-furnished macOS devices by using one of these options:

* [Create, Distribute, and Install an Apple Configuration Profile](#create-distribute-and-install-an-apple-configuration-profile)
* [Install COMMON Using Command Line](#install-common-using-command-line)
* [Install COMMON Using Apple Keychain Access](#install-common-using-apple-keychain-access)

#### Create, Distribute, and Install an Apple Configuration Profile

For **macOS and [iOS](#install-common-using-an-apple-configuration-profile-in-ios)** government-furnished devices, you can use Apple Configuration Profiles (XML files) to redistribute and automatically install COMMON.  

These steps will help you to create, distribute, and install profiles using Apple’s free *Configurator 2* application. Third-party applications are available.

{% include alert-warning.html content="Only System or Mobile Device Management (MDM) Administrators should create, distribute, and install Apple Configuration Profiles." %} 

#### Create an Apple Configuration Profile

1. As an administrator, you will need to _first [download](#download-a-copy-of-common) a copy of COMMON to your device_ and [verify](#verify-your-copy-of-common) it.   
2. Then, download and install *Configurator 2* from the Apple App Store.
3. Open *Configurator 2* and click **File** -> **New Profile**.
4. Under the **General** tab, enter a unique profile **Name** ("Federal Common Policy Certification Authority Profile" was used for this example) and **Identifier** ("FCPCA-0001" was used for this example).
5. Under the **Certificates** tab, click **Configure**; then browse to and select your verified copy of COMMON.
6. (*Optional*) Add additional agency-specific configurations or customizations. 
7. Click **File** -> **Save** to save your profile to your preferred location. 
8. Follow the steps to [distribute](#distribute-an-apple-configuration-profile) the profile across your enterprise.

**Note:**&nbsp;&nbsp;This video shows you how to create an Apple Configuration Profile. The steps and example below also show you how to do this.<br><br>This profile can be reused.
<br>
<video width="600" controls>
  <source src="{{site.baseurl}}/video/create_profile.mp4" type="video/mp4">
</video>
<br>

<p align="center">
<b>APPLE CONFIGURATION PROFILE (EXAMPLE)</b>
</p>

{% include alert-warning.html content="Before using this profile, you should verify its suitability for your agency." %} 

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
			<string>fcpca.crt</string>
			<key>PayloadContent</key>
			<data>
			MIIEYDCCA0igAwIBAgICATAwDQYJKoZIhvcNAQELBQAwWTELMAkG
			A1UEBhMCVVMxGDAWBgNVBAoTD1UuUy4gR292ZXJubWVudDENMAsG
			A1UECxMERlBLSTEhMB8GA1UEAxMYRmVkZXJhbCBDb21tb24gUG9s
			aWN5IENBMB4XDTEwMTIwMTE2NDUyN1oXDTMwMTIwMTE2NDUyN1ow
			WTELMAkGA1UEBhMCVVMxGDAWBgNVBAoTD1UuUy4gR292ZXJubWVu
			dDENMAsGA1UECxMERlBLSTEhMB8GA1UEAxMYRmVkZXJhbCBDb21t
			b24gUG9saWN5IENBMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIB
			CgKCAQEA2HX7NRY0WkG/Wq9cMAQUHK14RLXqJup1YcfNNnn4fNi9
			KVFmWSHjeavUeL6wLbCh1bI1FiPQzB6+Duir3MPJ1hLXp3JoGDG4
			FyKyPn66CG3G/dFYLGmgA/Aqo/Y/ISU937cyxY4nsyOl4FKzXZbp
			sLjFxZ+7xaBugkC7xScFNknWJidpDDSPzyd6KgqjQV+NHQOGgxXg
			VcHFmCye7Bpy3EjBPvmE0oSCwRvDdDa3ucc2Mnr4MrbQNq4iGDGM
			UHMhnv6DOzCIJOPpwX7e7ZjHH5IQip9bYi+dpLzVhW86/clTpyBL
			qtsgqyFOHQ1O5piF5asRR12dP8QjwOMUBm7+nQIDAQABo4IBMDCC
			ASwwDwYDVR0TAQH/BAUwAwEB/zCB6QYIKwYBBQUHAQsEgdwwgdkw
			PwYIKwYBBQUHMAWGM2h0dHA6Ly9odHRwLmZwa2kuZ292L2ZjcGNh
			L2NhQ2VydHNJc3N1ZWRCeWZjcGNhLnA3YzCBlQYIKwYBBQUHMAWG
			gYhsZGFwOi8vbGRhcC5mcGtpLmdvdi9jbj1GZWRlcmFsJTIwQ29t
			bW9uJTIwUG9saWN5JTIwQ0Esb3U9RlBLSSxvPVUuUy4lMjBHb3Zl
			cm5tZW50LGM9VVM/Y0FDZXJ0aWZpY2F0ZTtiaW5hcnksY3Jvc3ND
			ZXJ0aWZpY2F0ZVBhaXI7YmluYXJ5MA4GA1UdDwEB/wQEAwIBBjAd
			BgNVHQ4EFgQUrQx6dVzl85jEeZgOrCj9l/TnAvwwDQYJKoZIhvcN
			AQELBQADggEBAI9z2uF/gLGH9uwsz9GEYx728Yi3mvIRte9UrYpu
			GDco71wb5O9Qt2wmGCMiTR0mRyDpCZzicGJxqxHPkYnos/UqoEfA
			FMtOQsHdDA4b8Idb7OV316rgVNdF9IU+7LQd3nyKf1tNnJaK0KIy
			n9psMQz4pO9+c+iR3Ah6cFqgr2KBWfgAdKLI3VTKQVZHvenAT+0g
			3eOlCd+uKML80cgX2BLHb94u6b2akfI8WpQukSKAiaGMWMyDeiYZ
			dQKlDn0KJnNR6obLB6jI/WNaNZvSr79PMUjBhHDbNXuaGQ/lj/Rq
			DG8z2esccKIN47lQA2EC/0rskqTcLe4qNJMHtyznGI8=
			</data>
			<key>PayloadDescription</key>
			<string>Adds a CA root certificate</string>
			<key>PayloadDisplayName</key>
			<string>Federal Common Policy CA</string>
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
	<string>Federal Common Policy Certification Authority Profile</string>
	<key>PayloadIdentifier</key>
	<string>FCPCA-0001</string>
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

#### Distribute an Apple Configuration Profile

{% include alert-warning.html content="Only System or MDM Administrators should use these steps. You should never email an Apple Configuration Profile to someone outside your agency's domain." %} 

Use Apple's _Configurator 2_ to distribute your Apple Configuration Profile to government-furnished **macOS and iOS** devices in these ways: 

1. Physically connect to the user's device.
2. Email a profile to specific users.* 
3. Share a profile on an agency intranet webpage.*
4. [Share via over-the-air profile delivery and configuration](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/iPhoneOTAConfiguration/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009505){:target="_blank"}.
5. [Share via over-the-air delivery and configuration from an MDM server](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/MobileDeviceManagementProtocolRef/6-MDM_Best_Practices/MDM_Best_Practices.html#//apple_ref/doc/uid/TP40017387-CH5-SW2){:target="_blank"}. (Third-party applications are available.)
> **For iOS only***&nbsp;&mdash;&nbsp;If you download and install COMMON from an email or an intranet website, you will need to _manually enable SSL trust for COMMON_. This is not needed if you use Configurator 2 with over-the-air (OTA) methods or an MDM enrollment profile to install COMMON. (See [Enable Full Trust for COMMON](#enable-full-trust-for-common).)

#### Install an Apple Configuration Profile

We recommend using an automated method to install Apple Configuration Profiles on government-furnished Apple devices (e.g., a desktop configuration management or MDM tool), which will redistribute COMMON. (If you have questions about third-party products, email us at fpki@gsa.gov.)

You can also manually install a profile. 

**Note:**&nbsp;&nbsp;This video shows you how to manually install an Apple Configuration Profile on **macOS**.
<br>
<video width="600" controls>
  <source src="{{site.baseurl}}/video/manual_install_profile.mp4" type="video/mp4">
</video>
<br>

#### Install COMMON Using Command Line

{% include alert-info.html content="These steps will install COMMON in the System Keychain. System administrators should use these steps. Non-administrators will encounter permission errors." %}

1. Click the **Spotlight** icon and search for *terminal*.
2. Double-click the **Terminal** icon (black monitor icon with white “>_”) to open a window.
3. Run the following command:

    ```
	$ sudo security add-trusted-cert -d -r trustRoot -k "/Library/Keychains/System.keychain" {DOWNLOAD_LOCATION}/fcpca.crt
    ```
    
**Note:**&nbsp;&nbsp;This video shows you how to install COMMON using the command line.
<br>
<video width="600" controls>
  <source src="{{site.baseurl}}/video/install_command_line.mp4" type="video/mp4">
</video>
<br>

#### Install COMMON Using Apple Keychain Access

You can use one of these methods to install COMMON by using Apple Keychain Access:

* System Keychain
* Login Keychain

##### System Keychain
{% include alert-info.html content="These steps will install COMMON in the System Keychain. System administrators should use these steps.  Non-administrators will encounter permission errors." %}

1. Click the **Spotlight** icon and search for *Keychain Access*.
2. Double-click the **Keychain Access** icon to open the application.
3. Click the *System* keychain from the left-hand navigation.
4. Click **File** -> **Import Items**
5. Browse to and select your verified copy of COMMON.
6. When prompted, enter your *administrator* username and password.
7. Keychain Access will present the installed certificate.

**Note:**&nbsp;&nbsp;This video shows you how to install COMMON by using the Apple Keychain Access import process.
<br>
<video width="600" controls>
  <source src="{{site.baseurl}}/video/keychain_gui_admin.mp4" type="video/mp4">
</video>
<br>
##### Login Keychain

{% include alert-info.html content="These steps will install COMMON in the login Keychain. Both system administrators and non-administrators can use these steps." %}

1. Browse to your downloaded, verified copy of COMMON.
2. Double-click on the file.
3. Keychain Access will open and present the installed certificate.

**Note:**&nbsp;&nbsp;This video shows non-administrators how to install COMMON by using<br>the Apple Keychain Access import process.
<br>
<video width="600" controls>
  <source src="{{site.baseurl}}/video/keychain_gui_non_admin.mp4" type="video/mp4">
</video>
<br>


### iOS Solutions
Redistribute COMMON to government-furnished Apple **iOS** devices by using one of these options: 
* [Install COMMON Using an Apple Configuration Profile in iOS](#install-common-using-an-apple-configuration-profile-in-ios)
* [Install COMMON Using Safari Web Browser](#install-common-using-safari-web-browser)

Enable full trust for COMMON on Apple iOS devices by using this option:
* [Enable Full Trust for COMMON](#enable-full-trust-for-common)

#### Install COMMON Using an Apple Configuration Profile in iOS
Apple Configuration Profiles can be used to install COMMON on both macOS and iOS devices. 

Review the [Apple Configuration Profiles](#install-an-apple-configuration-profile) guidance above.

#### Install COMMON Using Safari Web Browser
The Safari web browser can be used to install COMMON on **iOS devices only**. 

{% include alert-info.html content="These steps will install COMMON as a trusted root certificate. System administrators or non-administrators can use these steps." %}

1. Launch **Safari**.
2. Navigate to the COMMON root CA certificate: http://http.fpki.gov/fcpca/fcpca.crt.<br>
> System message says: *The website is trying to open Settings to show you a configuration profile. Do you want to allow this?*<br>
3. Click **Allow**.<br>
> The COMMON configuration profile appears.<br> 
4. Click **More Details** and then the COMMON certificate entry.
5. Scroll down to **Fingerprints** and [verify](#verify-your-copy-of-common) the certificate's SHA-256 hash.
6. At the top left of screen, click **Back** and **Install Profile**. Then, click **Install** (top right).
7. When prompted, enter your device **passcode**.
8. Click **Install** (top right), and **Install** again.
9. Click **Done**.
10. Follow the steps below to enable [full trust for COMMON](#enable-full-trust-for-common).

**Note:**&nbsp;&nbsp;This video shows you how to install COMMON using the Safari web browser.
<br>
<video width="300" controls>
  <source src="{{site.baseurl}}/video/ios_safari_configuration.mp4" type="video/mp4">
</video>
<br>


#### Enable Full Trust for COMMON 
This option works for **iOS** devices only.

{% include alert-info.html content="These steps will enable “full trust” for certificates that chain to COMMON. Both system administrators and non-administrators can use these steps." %}

1. From the iOS device's **Home** screen, go to **Settings** -> **General** -> **About** -> **Certificate Trust Settings**.
2. Beneath **Enable Full Trust for Root Certificates**, toggle _ON_ for the COMMON root CA certificate entry. 
3. When the certificate appears, click **Continue**.
4. You can now successfully navigate to any intranet website whose SSL certificate was issued by a Federal Public Key Infrastructure (FPKI) CA.

