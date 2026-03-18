---
layout: page
collection: implement
title: Okta Yubikey Implementation Guide
type: Markdown
permalink: /implement/yubikey-guide/
description: Description needed
sidenav: implement
sticky_sidenav: true

pubdate: March 2026  
version: 2.0

subnav:
  - text: Executive Summary
    href: '#executive-summary'
  - text: Why YubiKey?
    href: '#why-yubikey'
  - text: Prerequisites
    href: '#prerequisites'
  - text: Device enrollment configuration with Okta set-up
    href: '#device-enrollment-configuration-with-okta-set-up'
  - text: Setting up Yubico Authenticator for Mac
    href: '#Setting up Yubico Authenticator for Mac'
  - text: Setting Up Yubico Authenticator for Windows Machines
    href: '#Setting Up Yubico Authenticator for Windows Machines'
  - text: Glossary of Terms
    href: '#glossary-of-terms'
  - text: Yubikey FAQs
    href: '#yubikey-faqs'

---

<!-- Start of Header -->
<img src="{{site.baseurl}}/assets/logo/logo-gsa.png" width="64" height='64' align="left" alt="U.S. General Services Administration Logo"> 
<img src="{{site.baseurl}}/assets/logo/logo-cms.png" height='64' align="left" alt="U.S. Centers for Medicare & Medicaid Services"> 
<br><br><br>
  
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="v-c1">
      Date: {{page.pubdate}} - Version: {{page.version}}
    </button>
  </h4>
  <div id="v-c1" class="usa-accordion__content usa-prose">
    <table>
      <caption>Okta Yubikey Implementation Guide</caption>
      <thead>
      <tr>
        <th scope='col'>Version Number</th>
        <th scope='col'>Date</th>
        <th scope='col'>Change Description</th>
      </tr>
      </thead>
      <tr>
        <th scope='row'>2.0</th>
        <td>03/17/2026</td>
        <td>Initial draft.</td>
      </tr>
      <tr>
        <th scope='row'>1.0</th>
        <td>06/01/2024</td>
        <td>Initial draft.</td>
      </tr>
    </table>
  </div>
</div>

<!-- Style for screenshots to add padding to top and bottom with redoing all images in PS. -->
<style>
  img {
    margin-top: 12px;
    margin-bottom:20px;
  }
</style>

<!-- Start of Section 1 -->
## Executive Summary

This guide details the implementation and usage of YubiKey, a durable and portable external security device, by federal employees and contractors to enhance the security of federal systems through FIDO2 compliant multi-factor authentication (MFA). It highlights the benefits of YubiKey, emphasizing its resistance to phishing attacks and broad compatibility with various platforms, making it an ideal choice for securing sensitive government data.

The guide provides comprehensive instructions for initial setup on both MacOS and Windows, including downloading the Yubico Authenticator, creating a secure PIN, and configuring the device with federal systems. Additionally, it addresses questions concerning the necessity of a PIN for YubiKey, the limitations of using platform authenticators in a federal context, and troubleshooting tips for issues like forgotten PINs or device resetting. This document is a crucial resource for federal employees and contractors tasked with maintaining high security standards using YubiKey on federal systems.



## Why YubiKey?

The YubiKey is a small, external authenticator, also known as a security key, designed to make your online accounts more resistant to phishing and compromise. It is used to perform multi-factor authentication (MFA) when users access secure systems. The YubiKey represents an advancement in MFA technology by offering a more secure and user-friendly alternative to traditional methods like text-based codes or mobile authenticator apps. A key feature of the YubiKey is the touch sensor, which is used to show that there is someone at that device.

![Secure Against Phishing Attacks]({{site.baseurl}}/assets/okta/p1fig1-executive-summary.jpg)

### Secure against Phishing Attacks

Using YubiKey is generally considered more secure than conventional MFA methods like Onetime
Passwords OTP or Time-based One-time Passwords TOTP used by mobile apps such
as Google Authenticator or Okta Verify. With OTP and TOTP, users must verify the authenticity
of a website and secure their connection, introducing elevated phishing risks. 

The YubiKey Series 5 employs FIDO2 technology, which uses cryptographic credentials to validate
connections to legitimate websites, thus eliminating the need for users to verify connection
authenticity. This minimizes phishing risks, including cross-site scripting, typo-squatting, and
man-in-the-middle attacks. Additionally, YubiKey requires physical interaction and may use
PINs, ensuring data transmission only occurs with user consent, further enhancing security.

### Other features of YubiKeys include

* **Rugged and Portable**: The YubiKey is made with solid materials like glass-fiber reinforced plastic, can handle water and dust, and does not need batteries.  
* **Easy to Connect**: YubiKeys are available in USB-A and USB-C formats, as well as having a Near Field Communication (NFC) option for mobile devices, making them compatible with most computers and smartphones.  
* **Broad Compatibility**: The YubiKey is compatible with many operating systems like Windows, macOS, Chrome OS, Linux, and popular web browsers like Chrome, Safari, and Edge. It can help secure access to most online services and platforms.  
* **FIPS Certified**: The YubiKey series also offers FIPS compliant versions which are required by government agencies and regulated industries like healthcare.

## Prerequisites

To use YubiKey for FIDO2 authentication on Okta, several prerequisites must be met to ensure a successful deployment and operation

* **Compatible YubiKey Device**: Ensure that the YubiKey model you intend to use supports FIDO2. YubiKey 5 Series or newer models are typically compatible.  
* **Supported Web Browsers**: The web browser used to access Okta must support WebAuthn. Popular browsers such as Google Chrome, Mozilla Firefox, Microsoft Edge, and Safari typically have this support.  
* **Okta Configuration**: Okta must be configured to allow FIDO2 as an authentication method. This involves setting up and enabling FIDO2 in the Okta admin dashboard under the authentication and security settings. (See Device Enrollment Configuration with Okta set-up).  
* **Operating System Compatibility**: The operating system on the user’s device must be compatible with the YubiKey model being used. This includes support for the necessary USB or NFC interfaces provided by the YubiKey.  
* **User Training and Onboarding**: Users will need to learn how to use their YubiKey, including initial setup using the Yubico Authenticator, PIN creation, and using it to login.

<!-- Start of Section 2 -->

## Device enrollment configuration with Okta set-up

### Prerequisites

<u>Disable use of Syncable Passkeys</u>

1. WebAuthn supports enrollment of passkeys, a password-less type of authentication. 

2. Passkeys can be saved to a cloud service such as Apple iCloud and transferred to other devices. 

3. For this reason, it is preferred to disable this functionality for federal accounts.

4. Navigate to **Settings** > **Features** on the left menu.

5. Ensure the feature "Block passkeys for FIDO2 (WebAuthn) Authenticators" is toggled to the enable position.
![Figure 1]({{site.baseurl}}/assets/okta/p2fig1-okta-configuration.jpg)


### Create a Group for the WebAuthn policy

1. Okta policies are configured on a user group basis. The first step is to create a group. 

2. Users added to this group will have the ability to use Yubikeys. 
![Figure 2]({{site.baseurl}}/assets/okta/p2fig2-okta-configuration.jpg)

3. Enter a name and description and save the group.
![Figure 3]({{site.baseurl}}/assets/okta/p2fig3-okta-configuration.jpg)



### Procedure

<u>Enable the Authenticator</u>

1. On the left menu navigate to **Security** > **Authenticators**.

2. Click "Add Authenticator" 
![Figure 4]({{site.baseurl}}/assets/okta/p2fig4-okta-configuration.jpg)

3. Under the "FIDO2 (WebAuthn)" tile, click the “Add” button. 
![Figure 5]({{site.baseurl}}/assets/okta/p2fig5-okta-configuration.jpg)

4. Set "User verification" to "Discouraged". 

5. Click the “Add” button. 
![Figure 6]({{site.baseurl}}/assets/okta/p2fig6-okta-configuration.jpg)



### Optional Device Restrictions

After adding the FIDO2 authenticator you will see the "Authenticator settings" tab. This allows configuring the accepted devices when enrolling FIDO2 security tokens such as requiring the use of FIPS compliant security tokens.

### Restricting use to only FIPS compliant security tokens

1. Click the "Add authenticator group" button. 
![Figure 7]({{site.baseurl}}/assets/okta/p2fig7-okta-configuration.jpg)

2. Enter a name for this group, for example "Yubikey FIPS Only" 
![Figure 8]({{site.baseurl}}/assets/okta/p2fig8-okta-configuration.jpg)

3. Search for the desired devices and select all that apply. 
![Figure 9]({{site.baseurl}}/assets/okta/p2fig9-okta-configuration.jpg)

4. When all of the desired devices are selected click “Add authenticator group” 
![Figure 10]({{site.baseurl}}/assets/okta/p2fig10-okta-configuration.jpg)

5. When finished you will see your group created 
![Figure 11]({{site.baseurl}}/assets/okta/p2fig11-okta-configuration.jpg)



### Create Enrollment Policy

1. The final step is to create an enrollment policy which will apply the desired group.

2. From the left menu navigate to **Security** > **Authenticators**, select the “Enrollment” tab, click “Add Policy”
![Figure 12]({{site.baseurl}}/assets/okta/p2fig12-okta-configuration.jpg)

3. Enter a name for the policy.

4. Select a previously created group for the “Assigned to groups” field.

5. Optionally set “Allowed authenticators” to the “Authenticators from selected group list”.

6. Click “Create policy”.
![Figure 13]({{site.baseurl}}/assets/okta/p2fig13-okta-configuration.jpg)

7. On the next screen enter a name for the Enrollment Rule, click “Create rule”.
![Figure 14]({{site.baseurl}}/assets/okta/p2fig14-okta-configuration.jpg)

8. At this time, you will see your complete policy and rule.

9. Adjust the enrollment policy priority as desired to meet your requirements.

10. This concludes the configuration steps.
![Figure 15]({{site.baseurl}}/assets/okta/p2fig15-okta-configuration.jpg)


<!-- Start of Section 3 -->

## Setting up Yubico Authenticator for Mac

As of February 19, 2026, the YubiKey Manager GUI has reached end of life (EOL). Yubico has transitioned the features to a single app, Yubico Authenticator 7. This app will manage all aspects of Yubico product and feature management (PIV configuration, passkey PIN setup, 2FA codes, etc). This guide explains how to install and use Yubico Authenticator 7, as well as how to enroll your Yubikey on IDM and use it for authentication.

### Step 1 - Installing and Using Authenticator

1. Install Yubico Authenticator.   
   1. Download the Yubico Authenticator from [this link](https://www.yubico.com/products/yubico-authenticator/#h-download-yubico-authenticator){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. The installer package will save to a folder in your machine (Likely Downloads); locate it and double-click to open the Installer.  
   2. Install Authenticator by dragging the Yubico Authenticator App into the Applications folder.

![Figure 1]({{site.baseurl}}/assets/okta/p3fig1-ux-mac-setup.jpg)

2. Open Authenticator.  
   1. Locate the Authenticator app and open it.  
3. Insert a Yubikey into your machine.   
   1. Insert your Yubikey into your computer. Authenticator will recognize the key and display it in the app. You may need to click “Allow” in the dialog box that appears.

![Figure 2]({{site.baseurl}}/assets/okta/p3fig2-ux-mac-setup.jpg)  

### Setting and Changing a PIN

1. With your Yubikey inserted, click “Passkeys” on the left-hand menu.  
2. On the right-hand side of the screen, below “Manage,” click “Set PIN.”

![Figure 3]({{site.baseurl}}/assets/okta/p3fig3-ux-mac-setup.jpg)

3. Create a PIN and verify it. The PIN can contain letters, numbers, and special characters, and be up to 63 characters long. Click “Save.”  
4. This PIN will be used for enrolling your Yubikey and for subsequent access requests.  
5. To change a PIN, click “Change PIN” under “Manage.” Note that “Change PIN” only appears once a PIN has been set.

### Enrolling a Yubikey on CMS IDM

1. Navigate to CMS IDM and log in using your User ID and password. Complete the MFA challenge as needed.  
2. Click your name in the top-right corner, and click “Settings.”

![Figure 4]({{site.baseurl}}/assets/okta/p3fig4-ux-mac-setup.jpg)

4. Scroll to “Security Methods” and select “Set Up” next to “Security Key or Biometric Marker.” **Do not select “Yubikey Authenticator.”** 

![Figure 5]({{site.baseurl}}/assets/okta/p3fig5-ux-mac-setup.jpg)

5. Click “Set up.”

![Figure 6]({{site.baseurl}}/assets/okta/p3fig6-ux-mac-setup.jpg)

6. In the following dialog box, click “Enroll.”

![Figure 7]({{site.baseurl}}/assets/okta/p3fig7-ux-mac-setup.jpg)

7. Click the “Use a different passkey” button.

![Figure 8]({{site.baseurl}}/assets/okta/p3fig8-ux-mac-setup.jpg)

8. Select “Use a phone, tablet, or security key” menu option.

![Figure 9]({{site.baseurl}}/assets/okta/p3fig9-ux-mac-setup.jpg)

9. Activate your YubiKey by touching the gold sensor on the device. If it doesn’t respond, unplug and re-insert the YubiKey.

![Figure 10]({{site.baseurl}}/assets/okta/p3fig10-ux-mac-setup.jpg)

10. Enter the PIN you created earlier and click “Next.”

![Figure 11]({{site.baseurl}}/assets/okta/p3fig11-ux-mac-setup.jpg)

11. Touch the Yubikey’s gold sensor again.

![Figure 12]({{site.baseurl}}/assets/okta/p3fig12-ux-mac-setup.jpg)

12. Click “Allow” when prompted. This completes the enrollment. 

![Figure 13]({{site.baseurl}}/assets/okta/p3fig13-ux-mac-setup.jpg)

13. To confirm, open IDM > Settings > Security. Confirm that you see your security key.

![Figure 14]({{site.baseurl}}/assets/okta/p3fig14-ux-mac-setup.jpg)

### Log into CMS IDM with Yubikey

1. Login to the CMS IDM portal and sign in with your EUA Username and password. Agree to the Terms & Conditions and select “Sign In.”

![Figure 15]({{site.baseurl}}/assets/okta/p3fig15-ux-mac-setup.jpg)

2. When prompted, touch the Yubikey’s gold sensor.

![Figure 16]({{site.baseurl}}/assets/okta/p3fig16-ux-mac-setup.jpg)

3. Enter the PIN you established earlier and click “Next.”

![Figure 17]({{site.baseurl}}/assets/okta/p3fig17-ux-mac-setup.jpg)

4. Touch the gold sensor on the YubiKey again.

![Figure 18]({{site.baseurl}}/assets/okta/p3fig18-ux-mac-setup.jpg)

5. You have successfully completed the security key login process!


<!-- Start of Section 4 -->

## Setting Up Yubico Authenticator for Windows Machines

As of February 19, 2026, the YubiKey Manager GUI has reached end of life (EOL). Yubico has transitioned the features to a single app, Yubico Authenticator 7. This app will manage all aspects of Yubico product and feature management (PIV configuration, passkey PIN setup, 2FA codes, etc). This guide explains how to install and use Yubico Authenticator 7, as well as how to enroll your Yubikey on IDM and use it for authentication.

### Step 1 - Installing and Using Authenticator

1. Install Yubico Authenticator.   
   1. Download the Yubico Authenticator from [this link](https://www.yubico.com/products/yubico-authenticator/#h-download-yubico-authenticator){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. The installer package will save to a folder in your machine (Likely Downloads); locate it and double-click to open the Installer.  
   2. Install Authenticator by clicking “Next” and finally “Install” in the dialog boxes of the installer. If needed, authorize the installation onto your machine. Once complete, click “Finish.”  
2. Open Authenticator.  
   1. Locate the Authenticator app and open it.  
3. Insert a Yubikey into your machine.   
   1. Insert your Yubikey into your computer. Authenticator will recognize the key and display it in the app. 

![Figure 1]({{site.baseurl}}/assets/okta/p4fig1-ux-windows-setup.jpg)


![Figure 2]({{site.baseurl}}/assets/okta/p4fig2-ux-windows-setup.jpg)

### Setting and Changing a PIN

1. With your Yubikey inserted, click “Passkeys” on the left-hand menu.  
2. On the right-hand side of the screen, below “Manage,” click “Set PIN.”

![Figure 2]({{site.baseurl}}/assets/okta/p4fig2-ux-windows-setup.jpg)

3. Create a PIN and verify it. The PIN can contain letters, numbers, and special characters, and be up to 63 characters long. Click “Save.”  
4. This PIN will be used for enrolling your Yubikey and for subsequent access requests.  
5. To change a PIN, click “Change PIN” under “Manage.” Note that “Change PIN” only appears once a PIN has been set.

### Enrolling a Yubikey on CMS IDM

1. Navigate to CMS IDM and log in using your User ID and password. Complete the MFA challenge as needed.  
2. Click your name in the top-right corner, and click “Settings.”

![Figure 3]({{site.baseurl}}/assets/okta/p4fig3-ux-windows-setup.jpg)

4. Scroll to “Security Methods” and select “Set Up” next to “Security Key or Biometric Marker.” **Do not select “Yubikey Authenticator.”** 

![Figure 4]({{site.baseurl}}/assets/okta/p4fig4-ux-windows-setup.jpg)

5. Click “Set up.”

![Figure 5]({{site.baseurl}}/assets/okta/p4fig5-ux-windows-setup.jpg)

6. In the following dialog box, click “Enroll.”

![Figure 6]({{site.baseurl}}/assets/okta/p4fig6-ux-windows-setup.jpg)

7. Select the Security Key and then click “Next.” 

![Figure 7]({{site.baseurl}}/assets/okta/p4fig7-ux-windows-setup.jpg)

8. Click “OK” to continue through the process.

![Figure 8]({{site.baseurl}}/assets/okta/p4fig8-ux-windows-setup.jpg)

9. Enter the PIN you established earlier, and click “OK.”

![Figure 9]({{site.baseurl}}/assets/okta/p4fig9-ux-windows-setup.jpg)

10. Activate your YubiKey by touching the gold sensor on the device. If it doesn’t respond, unplug and re-insert the YubiKey.

![Figure 10]({{site.baseurl}}/assets/okta/p4fig10-ux-windows-setup.jpg)

11. The Passkey is saved. Click OK.

![Figure 11]({{site.baseurl}}/assets/okta/p4fig11-ux-windows-setup.jpg)

12. To confirm, open IDM → Settings → Security. Confirm that you see your security key.

![Figure 12]({{site.baseurl}}/assets/okta/p4fig12-ux-windows-setup.jpg)

### Log into CMS IDM with Yubikey

1. Login to the CMS IDM portal and sign in with your EUA Username and password. Agree to the Terms & Conditions and select “Sign In.”

![Figure 13]({{site.baseurl}}/assets/okta/p4fig13-ux-windows-setup.jpg)

2. Windows will open a dialog box. Select “Security key” and click “Next.”

![Figure 14]({{site.baseurl}}/assets/okta/p4fig14-ux-windows-setup.jpg)

3. Enter the PIN you established earlier and click “Ok.”

![Figure 15]({{site.baseurl}}/assets/okta/p4fig15-ux-windows-setup.jpg)

4. Touch the gold sensor on the YubiKey.

![Figure 16]({{site.baseurl}}/assets/okta/p4fig16-ux-windows-setup.jpg)

5. You have successfully completed the security key login process!


<!-- Start of Section 5 -->

## Glossary of Terms

**FIDO2 Authentication:** A modern authentication standard that strengthens security by allowing users to utilize local biometrics and security keys for passwordless logins or as a part of multi-factor authentication. FIDO2 is an enhancement of the original FIDO standards, adding support for passwordless authentication and expanded browser support through its WebAuthn component.

**WebAuthn** (Web Authentication): A web standard published by the World Wide Web Consortium (W3C) in collaboration with the FIDO Alliance, which specifies a built-in browser API enabling online services to offer a secure, passwordless login experience using public key cryptography. WebAuthn allows users to authenticate themselves on the internet using biometrics, mobile devices, or FIDO2 devices like security keys, instead of relying on traditional passwords.

**FIPS** (Federal Information Processing Standards): U.S. government standards that coordinate the requirements for cryptographic modules, including both hardware and software components, used within a security system to protect sensitive but unclassified information.

**Passkey**: A digital credential, also known as a hardware passkey when stored on a YubiKey, used in place of traditional passwords as part of modern FIDO2 authentication systems to provide a more secure and streamlined login experience. Passkeys enhance security by utilizing public-key cryptography, making them inherently resistant to phishing and ensuring they cannot be reused across different websites, which significantly reduces the risk of credential theft.

**PIN** (Personal Identification Number): A numeric or alphanumeric password used in the authentication process to verify the identity of a user accessing a system or device.

**Multi-Factor Authentication** (MFA): A security system that requires more than one method of authentication from independent categories of credentials to verify the user's identity for a login or other transaction.

**Security Key**: A physical device used to access computers, networks, and online accounts by proving possession of the key as a form of authentication.

**USB-C**: A type of USB connector that is reversible, allowing it to be plugged in either direction, and supports faster data transfer, increased power flow, and video delivery.

**USB-A**: The original standard USB connector, which is flat and rectangular in shape, commonly used to connect devices like keyboards, mice, and external hard drives to computers.

**NFC** (Near Field Communication): A set of communication protocols that enable two electronic devices, one of which is usually a portable device such as a smartphone, to establish communication by bringing them within 4 cm of each other.

**YubiKey**: A small hardware device produced by Yubico, that provides secure two-factor, multi-factor, and passwordless authentication that supports protocols such as FIDO2 and U2F.

**Okta**: A cloud-based service that provides identity management and access management solutions, enabling secure authentication and user verification across various platforms and applications.


## Yubikey FAQs

**Why do I need a PIN for my YubiKey?**

Think of your YubiKey like a debit card for digital security. Just as your bank card uses a PIN to keep your money safe, your YubiKey uses a PIN for an extra layer of protection. This means that if someone ever gets their hands on your security key, they still can't use it unless they know your unique PIN. Additionally, the policies which govern IDM at Okta require a PIN when you first set up your security key, ensuring that it's really you who's activating it.

**What are Platform Authenticators and how come I can’t use my smartphone to enroll a security key?**

Platform authenticators (also known as Internal Authenticators) are security features built directly into devices you own, such as smartphones and laptops. These utilize biometrics, like a fingerprint or facial recognition, or a device PIN to meet FIDO2 standards.
The core of FIDO2 technology relies on Passkeys (specifically resident or "private" keys), which act as digital keys for a locked door. On a platform authenticator, these keys are often "synced" to the cloud to allow for easier recovery if you lose your device. In a federal context, this cloud synchronization presents security and audit risks because the organization cannot verify exactly where those private keys are stored or who has access to the cloud provider's infrastructure.
External authenticators (like your YubiKey) are independent devices with a single purpose. They store passkeys directly on the hardware itself, meaning the private keys reside solely within the physical bounds of the device. Because these keys cannot be replicated or uploaded to the cloud, they offer a higher level of security and meet the strict administrative standards required for federal systems.


**How do I unlink the YubiKey from CMS IDM?** 

To remove your YubiKey from CMS IDM
1. Login to the CMS IDM portal. Click your name to expand the drop down list and then select Settings
![Figure 1]({{site.baseurl}}/assets/okta/p5fig1-ux-supplement-glossary-faq.jpg)
![Figure 2]({{site.baseurl}}/assets/okta/p5fig2-ux-supplement-glossary-faq.jpg)

2. Navigate to the Extra Verifications section and click the Remove button adjacent to the YubiKey 5 FIPS with NFC menu option.
![Figure 3]({{site.baseurl}}/assets/okta/p5fig3-ux-supplement-glossary-faq.jpg)



**What should I do if I forget my YubiKey PIN?**

To reset your YubiKey PIN complete the following steps:

1. Open Yubico Authenticator and insert your Yubikey. Ensure you are on the “Home” area of the menu. Click “Factory Reset” under “Device” on the right-hand side. 

![Figure 4]({{site.baseurl}}/assets/okta/p5fig4-ux-supplement-glossary-faq.jpg)

2. Select “FIDO2” on the top menu, and click “reset.” Follow the instructions on the dialog box. 

![Figure 5]({{site.baseurl}}/assets/okta/p5fig5-ux-supplement-glossary-faq.jpg)

3. Your Yubikey will be reset. Complete the enrollment process again to re-enroll the key.

**Can’t access or reset your YubiKey?**

If you're without your YubiKey or forgot your PIN and had to reset, you can still access CMS IDM by choosing an alternative MFA method during the login process:

1. Log into CMS IDM as usual until you reach the MFA prompt.  
2. Click Cancel.

![Figure 6]({{site.baseurl}}/assets/okta/p5fig6-ux-supplement-glossary-faq.jpg)

3. Click the drop-down list arrow and select an alternate MFA method.

![Figure 7]({{site.baseurl}}/assets/okta/p5fig7-ux-supplement-glossary-faq.jpg)

4. Select a verification method from the list of previously configured options, such as Okta Verify or Google Authenticator. Click Retry.

![Figure 8]({{site.baseurl}}/assets/okta/p5fig8-ux-supplement-glossary-faq.jpg)

5. Complete the MFA logon process. Re-enroll your security key ONLY IF you reset your YubiKey.

![Figure 9]({{site.baseurl}}/assets/okta/p5fig9-ux-supplement-glossary-faq.jpg)

<br>
<!-- last updated 03/17/2024 - CJB -->
