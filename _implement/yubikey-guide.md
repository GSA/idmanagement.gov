---
layout: page
collection: implement
title: Okta Yubikey Implementation Guide
type: Markdown
permalink: /implement/yubikey-guide/
description: Description needed
sidenav: implement
sticky_sidenav: true

pubdate: June 2024  
version: 1.0

subnav:
  - text: Executive Summary
    href: '#executive-summary'
  - text: Why YubiKey?
    href: '#why-yubikey'
  - text: Prerequisites
    href: '#prerequisites'
  - text: Device enrollment configuration with Okta set-up
    href: '#device-enrollment-configuration-with-okta-set-up'
  - text: First-time setup for new device PIN creation MacOS
    href: '#first-time-setup-for-new-device-pin-creation-macos'
  - text: Enrolling a Security Key on CMS Okta IDM-MacOS
    href: '#enrolling-a-security-key-on-cms-okta-idm-macos'
  - text: Login to CMS Okta with Security Key-MacOS
    href: '#login-to-cms-okta-with-security-key-macos'
  - text: First-time setup for new device PIN creation Windows
    href: '#first-time-setup-for-new-device-pin-creation-windows'
  - text: Enroll Security Key on Okta-Windows
    href: '#enroll-security-key-on-okta-windows'
  - text: Login to Okta with Security Key-Windows
    href: '#login-to-okta-with-security-key-windows'
  - text: Glossary of Terms
    href: '#glossary-of-terms'
  - text: Yubikey FAQs
    href: '#yubikey-faqs'
  - text: How do I unlink the YubiKey from Okta?
    href: '#how-do-i-unlink-the-yubikey-from-okta?'
  - text: What should I do if I forget my YubiKey PIN?
    href: '#what-should-i-do-if-i-forget-my-yubikey-pin?'

---

<!-- Start of Header -->
<img src="{{site.baseurl}}/assets/img/logo-gsa.png" width="64" height='64' align="left" alt="U.S. General Services Administration Logo"> 
<img src="{{site.baseurl}}/assets/img/logo-cms.png" height='64' align="left" alt="U.S. Centers for Medicare & Medicaid Services"> 
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

This guide details the implementation and usage of YubiKey, a durable and portable
external security device, by federal employees and contractors to enhance the security of
federal systems through FIDO2 compliant multi-factor authentication MFA. It highlights the
benefits of YubiKey, emphasizing its resistance to phishing attacks and broad compatibility with
various platforms, making it an ideal choice for securing sensitive government data.
The guide provides comprehensive instructions for initial setup on both MacOS and Windows,
including downloading the YubiKey Manager, creating a secure PIN, and configuring the device
with federal systems such as Okta. Additionally, it addresses questions concerning the
necessity of a PIN for YubiKey, the limitations of using platform authenticators in a federal
context, and troubleshooting tips for issues like forgotten PINs or device resetting. This
document is a crucial resource for federal employees and contractors tasked with maintaining
high security standards using YubiKey on federal systems.


## Why YubiKey?

The YubiKey is a small, external authenticator, also known as a security key, designed to make
your online accounts more resistant to phishing and compromise. It is used to perform multifactor
authentication MFA when users access secure systems. The YubiKey represents an
advancement in MFA technology by offering a more secure and user-friendly alternative to
traditional methods like text-based codes or mobile authenticator apps. A key feature of the
YubiKey is the touch sensor which is used to show that there is someone at that device. The
diagram below shows the different YubiKey Series 5 dongles and highlights the sensors.

![Secure Against Phishing Attacks]({{site.baseurl}}/assets/okta/p1fig1-executive-summary.jpg)

Using YubiKey is generally considered more secure than conventional MFA methods like Onetime
Passwords OTP or Time-based One-time Passwords TOTP used by mobile apps such
as Google Authenticator or Okta Verify. With OTP and TOTP, users must verify the authenticity
of a website and secure their connection, introducing elevated phishing risks. The YubiKey
Series 5 employs FIDO2 technology, which uses cryptographic credentials to validate
connections to legitimate websites, thus eliminating the need for users to verify connection
authenticity. This minimizes phishing risks, including cross-site scripting, typo-squatting, and
man-in-the-middle attacks. Additionally, YubiKey requires physical interaction and may use
PINs, ensuring data transmission only occurs with user consent, further enhancing security.

### Other features of YubiKeys include

- **Rugged and Portable** The YubiKey is made with solid materials like glass-fiber reinforced
plastic, can handle water and dust, and it does not need batteries.

- **Easy to Connect** YubiKeys are available in USB-A and USB-C formats, as well as having a
Near Field Communication NFC option for mobile devices, making it compatible with most
computers and smartphones.

- **Broad Compatibility** The YubiKey is compatible with many operating systems like Windows,
macOS, Chrome OS, Linux, and popular web browsers like Chrome, Safari, and Edge. It can
help secure access to most online services and platforms.

- **FIPS Certified** The YubiKey series also offers FIPS compliant versions which are required by
government agencies and regulated industries like healthcare.


## Prerequisites

To use YubiKey for FIDO2 authentication on Okta, several prerequisites must be met to ensure a successful deployment and operation

- **Compatible YubiKey Device** Ensure that the YubiKey model you intend to use supports FIDO2. YubiKey 5 Series or newer models are typically compatible.

- **Supported Web Browsers** The web browser used to access Okta must support WebAuthn. Popular browsers such as Google Chrome, Mozilla Firefox, Microsoft Edge, and Safari typically have this support.

- **Okta Configuration** Okta must be configured to allow FIDO2 as an authentication method. This involves setting up and enabling FIDO2 in the Okta admin dashboard under the authentication and security settings. See Device Enrollment Configuration with Okta set-up

- **Operating System Compatibility** The operating system on the user’s device must be compatible with the YubiKey model being used. This includes support for the necessary USB or NFC interfaces provided by the YubiKey. User Training and Onboarding - Users will need to learn how to use their YubiKey, including initial setup, PIN creation, and using it to login.

<!-- Start of Section 2 -->

## Device enrollment configuration with Okta set-up

### Prerequisites

<u>Disable use of Syncable Passkeys</u>

1. WebAuthn supports enrollment of passkeys, a password-less type of authentication. 

2. Passkeys can be saved to a cloud service such as Apple iCloud and transferred to other devices. 

3. For this reason, it is preferred to disable this functionality for federal accounts.

4. Navigate to **Settings** > **Features** on the left menu.

5. Ensure the feature **"Block passkeys for FIDO2 (WebAuthn) Authenticators"** is toggled to the enable position.
![Figure 1]({{site.baseurl}}/assets/okta/p2fig1-okta-configuration.jpg)


### Create a Group for the WebAuthn policy

1. Okta policies are configured on a user group basis. The first step is to create a group. Users

2. added to this group will have the ability to use Yubikeys. 
![Figure 2]({{site.baseurl}}/assets/okta/p2fig2-okta-configuration.jpg)

3. Enter a name and description and save the group.
![Figure 3]({{site.baseurl}}/assets/okta/p2fig3-okta-configuration.jpg)



### Procedure

<u>Enable the Authenticator</u>

1. On the left menu navigate to **Security** > **Authenticators**.

2. Click **"Add Authenticator"** 
![Figure 4]({{site.baseurl}}/assets/okta/p2fig4-okta-configuration.jpg)

3. Under the **"FIDO2 (WebAuthn)"** tile, click the **“Add”** button. 
![Figure 5]({{site.baseurl}}/assets/okta/p2fig5-okta-configuration.jpg)

4. Set **"User verification"** to **"Discouraged"**. 

5. Click the **“Add”** button. 
![Figure 6]({{site.baseurl}}/assets/okta/p2fig6-okta-configuration.jpg)



### Optional Device Restrictions

1. After adding the FIDO2 authenticator you will see the **"Authenticator settings"** tab.

2. This allows configuring the accepted devices when enrolling FIDO2 security tokens such as
requiring the use of FIPS compliant security tokens.

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

2. From the left menu navigate to **Security** > **Authenticators**, select the **“Enrollment”** tab, click **“Add Policy”**
![Figure 12]({{site.baseurl}}/assets/okta/p2fig12-okta-configuration.jpg)

3. Enter a name for the policy.

4. Select a previously created group for the **“Assigned to groups”** field.

5. Optionally set **“Allowed authenticators”** to the **“Authenticators from selected group list”**.

6. Click **“Create policy”**.
![Figure 13]({{site.baseurl}}/assets/okta/p2fig13-okta-configuration.jpg)

7. On the next screen enter a name for the Enrollment Rule, click **“Create rule”**.
![Figure 14]({{site.baseurl}}/assets/okta/p2fig14-okta-configuration.jpg)

8. At this time, you will see your complete policy and rule.

9. Adjust the enrollment policy priority as desired to meet your requirements.

10. This concludes the configuration steps.
![Figure 15]({{site.baseurl}}/assets/okta/p2fig15-okta-configuration.jpg)


<!-- Start of Section 3 -->

## First-time setup for new device PIN creation MacOS

### Step 1 - Install YubiKey Manager

1. Download the Yubikey Manager - Access the [download link](https://developers.yubico.com/yubikey-manager-qt/Releases/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} provided and save the file to your Mac.

2. Run the Installer

3. Locate the downloaded file, usually in your Downloads folder, and double-click to open it.
![Figure 1]({{site.baseurl}}/assets/okta/p3fig1-ux-mac-setup.jpg)

4. Proceed through the installation wizard by selecting **Continue** > **Continue** and then install.

5. Authorize the Installation

6. Depending on your Mac's security settings, you might need to authorize the installation using TouchID, FaceID, or your Mac login password.

7. Confirm by clicking OK if prompted for access to the downloads folder.

8. Complete the installation

9. Once the installation is complete, you will have the option to move the installer to the trash. Click Close to finalize the install.
![Figure 2]({{site.baseurl}}/assets/okta/p3fig2-ux-mac-setup.jpg)

10. Open the YubiKey Manager

11. You can open the YubiKey Manager either by using Spotlight search **Command** + **Spacebar** and type **"YubiKey"** or by going directly to your Applications folder
![Figure 3]({{site.baseurl}}/assets/okta/p3fig3-ux-mac-setup.jpg)

12. Prepare the YubiKey

13. Plug your YubiKey into the appropriate USB port on your Mac.
![Figure 4]({{site.baseurl}}/assets/okta/p3fig4-ux-mac-setup.jpg)



### Step 2 - Setup YubiKey PIN
1. Navigate to PIN Setup

2. In the YubiKey Manager, go to **Applications** > **FIDO2**
![Figure 5]({{site.baseurl}}/assets/okta/p3fig5-ux-mac-setup.jpg)

3. Set Your PIN

4. Click on **Set PIN**.
![Figure 6]({{site.baseurl}}/assets/okta/p3fig6-ux-mac-setup.jpg)

5. In the New PIN field, enter a unique combination of at least six characters *(FIDO2 requirement)*. 

6. Your PIN can include both letters and numbers.

7. Choose a secure and memorable PIN. 
    
    <div class="usa-alert usa-alert--warning">
      <div class="usa-alert__body">
        <h4 class="usa-alert__heading"><strong>Caution</strong></h4>
        <p class="usa-alert__text">
          Avoid simple sequences or commonly used numbers such as <strong>password</strong> or <strong>123456</strong>.
        </p>
      </div>
    </div>
    <br>
    ![Figure 7]({{site.baseurl}}/assets/okta/p3fig7-ux-mac-setup.jpg)

8. Re-enter the same PIN in the Confirm PIN field to ensure accuracy.

9. Confirm PIN Setup

10. Click Set PIN to finalize your PIN setup. This PIN will be required for enrolling your security key and for subsequent access to Okta.
![Figure 8]({{site.baseurl}}/assets/okta/p3fig8-ux-mac-setup.jpg)



## Enrolling a Security Key on CMS Okta IDM-MacOS

1. Login to Okta portal

2. Navigate to Okta and sign in using your EUA Username and Password.

3. Click the checkbox to Agree to the Terms & Conditions.

4. Click Sign In <br>
![Figure 9]({{site.baseurl}}/assets/okta/p3fig9-ux-mac-setup.jpg)

5. The page refreshes to display an MFA authentication prompt. 

6. Complete the MFA challenge with your current setup (e.g., Okta Verify mobile app)
![Figure 10]({{site.baseurl}}/assets/okta/p3fig10-ux-mac-setup.jpg)

7. Navigate to Security Settings

8. Click your name to expand the drop-down link.
![Figure 11]({{site.baseurl}}/assets/okta/p3fig11-ux-mac-setup.jpg)

9. Click Settings.
![Figure 12]({{site.baseurl}}/assets/okta/p3fig12-ux-mac-setup.jpg)

10. Start Security Key Enrollment

11. Within the Extra Verification menu, click the Setup button next to the Security Key or Biometric Authenticator menu option.

12. Avoid selecting the YubiKey option. This menu option is used for legacy FIDO devices.
![Figure 13]({{site.baseurl}}/assets/okta/p3fig13-ux-mac-setup.jpg)

13. Enroll Your Security Key

14. Navigate to the Multifactor Authentication section and then click Setup.
![Figure 14]({{site.baseurl}}/assets/okta/p3fig14-ux-mac-setup.jpg)

15. Click Enroll.
![Figure 15]({{site.baseurl}}/assets/okta/p3fig15-ux-mac-setup.jpg)

16. Click the Use a different passkey button.
![Figure 16]({{site.baseurl}}/assets/okta/p3fig16-ux-mac-setup.jpg)

17. Select the Use a phone, tablet, or security key menu option.
![Figure 17]({{site.baseurl}}/assets/okta/p3fig17-ux-mac-setup.jpg)

18. Activate your YubiKey by touching the gold sensor on the device.

10. If it doesn’t respond, unplug and re-insert the YubiKey
![Figure 18]({{site.baseurl}}/assets/okta/p3fig18-ux-mac-setup.jpg)

20. Enter your PIN and click Next
![Figure 19]({{site.baseurl}}/assets/okta/p3fig19-ux-mac-setup.jpg)

21. Press the gold sensor on the YubiKey again.
![Figure 20]({{site.baseurl}}/assets/okta/p3fig20-ux-mac-setup.jpg)

22. Click Allow to complete the enrollment process.
![Figure 21]({{site.baseurl}}/assets/okta/p3fig21-ux-mac-setup.jpg)

23. Completion

24. Open your MFA application and navigate to the Extra Verification menu. 

25. Confirm that you see an indication that your security key has been successfully added to your MFA application.
![Figure 22]({{site.baseurl}}/assets/okta/p3fig22-ux-mac-setup.jpg)



## Login to CMS Okta with Security Key-MacOS

1. Login to Okta portal

2. Navigate to Okta and enter your EUA Username and Password into the
appropriate fields.

3. Click the checkbox to Agree to the Terms & Conditions and then click Sign In.

4. Note - Session cookies from a previous authentication may remain valid and Okta may not prompt you to re-authenticate after login. In this circumstance, click your Name in the top right-hand corner to expand the drop-down list and click Log Out to return to the Sign In screen.
![Figure 23]({{site.baseurl}}/assets/okta/p3fig23-ux-mac-setup.jpg)

5. MFA Challenge with Security Key

6. Open your authenticator application and when prompted, touch the gold sensor on the YubiKey.
![Figure 24]({{site.baseurl}}/assets/okta/p3fig24-ux-mac-setup.jpg)

7. The page refreshes to display additional fields. 

8. Enter the PIN you established earlier and click Next
![Figure 25]({{site.baseurl}}/assets/okta/p3fig25-ux-mac-setup.jpg)

9. Touch the gold sensor on the YubiKey once more
![Figure 26]({{site.baseurl}}/assets/okta/p3fig26-ux-mac-setup.jpg)

10. Successful Authentication into Okta

11. You have successfully completed the security key login process and can access resources protected by CMS ID



<!-- Start of Section 4 -->

## First-time setup for new device PIN creation Windows

### Step 1 - Install YubiKey Manager

Download the Yubikey Manager
- Access the [download link](https://developers.yubico.com/yubikey-manager-qt/Releases/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} provided and save the file to your computer.

### Run the Installer

1. Locate the downloaded file, usually in your Downloads folder, and double-click to open it.

2. Proceed through the installation wizard by selecting Continue > Continue.

3. Complete the Installation

4. Click Install.

5. Depending on your Windows OS security settings, you might need to authorize the installation. 

6. Complete the authorization challenge.

7. Proceed through the installation wizard by selecting Next > Next and then Install.

8. After the installation completes, select Finish.

9. Open the YubiKey Manager
    <br>
    <div class="usa-alert usa-alert--info">
      <div class="usa-alert__body">
        <h4 class="usa-alert__heading"><strong>Notice</strong></h4>
        <p class="usa-alert__text">
          Run the Yubikey Manager as an <strong>Administrator</strong> for initial setup
        </p>
      </div>
    </div>
    
10. The YubiKey Manager opens automatically after installation. If it doesn’t, you can open
it by searching for it in the Start menu.
![Figure 1]({{site.baseurl}}/assets/okta/p4fig1-ux-windows-setup.jpg)

11. Prepare the YubiKey

12. Plug your YubiKey into the appropriate USB port on your Windows system
![Figure 2]({{site.baseurl}}/assets/okta/p4fig2-ux-windows-setup.jpg)



### Step 2 - Setup YubiKey PIN

12. Navigate to PIN Setup

13. In the YubiKey Manager, go to **Applications** > **FIDO2**
![Figure 3]({{site.baseurl}}/assets/okta/p4fig3-ux-windows-setup.jpg)

14. Set Your PIN

15. Click on Set PIN.
![Figure 4]({{site.baseurl}}/assets/okta/p4fig4-ux-windows-setup.jpg)

16. In the New PIN field, enter a unique combination of at least six characters (FIDO2
requirement). 

17. Your PIN can include both letters and numbers.

18. Choose a secure and memorable PIN. Avoid simple sequences or commonly used numbers such as password or 123456.
![Figure 5]({{site.baseurl}}/assets/okta/p4fig5-ux-windows-setup.jpg)

19. Re-enter the same PIN in the Confirm PIN field to ensure accuracy.
Confirm PIN Setup

20. Click Set PIN to finalize your PIN setup. This PIN will be required for enrolling your security key and for subsequent access to Okta.
![Figure 6]({{site.baseurl}}/assets/okta/p4fig6-ux-windows-setup.jpg)



## Enroll Security Key on Okta-Windows

1. Login to Okta portal

2. Use the provided link to sign in with your EUA Username and Password.

3. Agree to the Terms & Conditions and select Sign In
![Figure 7]({{site.baseurl}}/assets/okta/p4fig7-ux-windows-setup.jpg)

4. Complete the MFA challenge with your current setup (e.g., Okta Verify mobile app)
![Figure 8]({{site.baseurl}}/assets/okta/p4fig8-ux-windows-setup.jpg)

5. Navigate to Security Settings

6. Click on your name at the top right corner and select Settings
![Figure 9]({{site.baseurl}}/assets/okta/p4fig9-ux-windows-setup.jpg)

7. Click Settings.
![Figure 10]({{site.baseurl}}/assets/okta/p4fig10-ux-windows-setup.jpg)

8. Start Security Key Enrollment

9. Within the Extra Verification menu, click the Setup button next to the Security Key or Biometric Authenticator (FIDO2) menu option.

10. Avoid selecting the YubiKey option as it is for legacy FIDO devices
![Figure 11]({{site.baseurl}}/assets/okta/p4fig11-ux-windows-setup.jpg)

11. Enroll Your Security Key

12. Open Okta and navigate to the Multifactor Authentication section and then click
Setup.
![Figure 12]({{site.baseurl}}/assets/okta/p4fig12-ux-windows-setup.jpg)

13. Click Enroll.
![Figure 13]({{site.baseurl}}/assets/okta/p4fig13-ux-windows-setup.jpg)

14. Select the Security Key and then click Next.
![Figure 14]({{site.baseurl}}/assets/okta/p4fig14-ux-windows-setup.jpg)

15. Click OK to continue
![Figure 15]({{site.baseurl}}/assets/okta/p4fig15-ux-windows-setup.jpg)

16. Click OK to continue
![Figure 16]({{site.baseurl}}/assets/okta/p4fig16-ux-windows-setup.jpg)

17. Enter the PIN you established earlier

18. Click OK
![Figure 17]({{site.baseurl}}/assets/okta/p4fig17-ux-windows-setup.jpg)

19. Activate your YubiKey by touching the gold sensor on the device.

20. If it doesn’t respond, unplug and re-insert the YubiKey
![Figure 18]({{site.baseurl}}/assets/okta/p4fig18-ux-windows-setup.jpg)

21. The Passkey is saved. Click OK.
![Figure 19]({{site.baseurl}}/assets/okta/p4fig19-ux-windows-setup.jpg)

22. Completion

23. Open your MFA application and navigate to the Extra Verification menu. Confirm that
you see an indication that your security key has been successfully added to your MFA
application.
![Figure 20]({{site.baseurl}}/assets/okta/p4fig20-ux-windows-setup.jpg)



## Login to Okta with Security Key-Windows

1. Login to Okta portal

2. Use the provided link to sign in with your EUA Username and Password. 

3. Agree to the Terms & Conditions and select Sign In

4. Your session cookie might still be valid and Okta will not require you to reauthenticate
to log back in, select your name in the top right hand corner and click Log
Out
![Figure 21]({{site.baseurl}}/assets/okta/p4fig21-ux-windows-setup.jpg)

5. MFA Challenge with Security Key

6. Select Security Key and click Next
![Figure 22]({{site.baseurl}}/assets/okta/p4fig22-ux-windows-setup.jpg)

7. Enter the PIN you established earlier and click OK
![Figure 23]({{site.baseurl}}/assets/okta/p4fig23-ux-windows-setup.jpg)

8. Touch the gold sensor on the YubiKey
![Figure 24]({{site.baseurl}}/assets/okta/p4fig24-ux-windows-setup.jpg)

9. Authenticated with Okta

10. You have successfully completed the security key login process
![Figure 25]({{site.baseurl}}/assets/okta/p4fig25-ux-windows-setup.jpg)



<!-- Start of Section 5 -->

## Glossary of Terms

**FIDO2** Authentication - A modern authentication standard that strengthens security by allowing
users to utilize local biometrics and security keys for passwordless logins or as a part of multifactor
authentication. FIDO2 is an enhancement of the original FIDO standards, adding support
for passwordless authentication and expanded browser support through its WebAuthn
component.

**WebAuthn** Web Authentication - A web standard published by the World Wide Web
Consortium W3C in collaboration with the FIDO Alliance, which specifies a built-in browser API
enabling online services to offer a secure, passwordless login experience using public key
cryptography. WebAuthn allows users to authenticate themselves on the internet using
biometrics, mobile devices, or FIDO2 devices like security keys, instead of relying on traditional
passwords.

**FIPS** Federal Information Processing Standards - U.S. government standards that coordinate
the requirements for cryptographic modules, including both hardware and software components,
used within a security system to protect sensitive but unclassified information.

**Passkey** - A digital credential used in place of traditional passwords, often part of modern
authentication systems like FIDO2, to provide a more secure and easy login experience.
Passkeys enhance security by using cryptographic techniques, meaning they are resistant to
phishing and cannot be reused across different sites, significantly reducing the risk of credential
theft.

**PIN** Personal Identification Number - A numeric or alphanumeric password used in the
authentication process to verify the identity of a user accessing a system or device.

**Multi-Factor Authentication** MFA - A security system that requires more than one method of
authentication from independent categories of credentials to verify the user's identity for a login
or other transaction.

**Security Key** - A physical device used to access computers, networks, and online accounts by
proving possession of the key as a form of authentication.

**USB-C** - A type of USB connector that is reversible, allowing it to be plugged in either direction,
and supports faster data transfer, increased power flow, and video delivery.

**USB-A** - The original standard USB connector, which is flat and rectangular in shape, commonly
used to connect devices like keyboards, mice, and external hard drives to computers.

**NFC** Near Field Communication - A set of communication protocols that enable two electronic
devices, one of which is usually a portable device such as a smartphone, to establish
communication by bringing them within 4 cm of each other.

**YubiKey** - A small hardware device produced by Yubico, that provides secure two-factor, multifactor,
and passwordless authentication that supports protocols such as FIDO2 and U2F.

**Okta** - A cloud-based service that provides identity management and access management
solutions, enabling secure authentication and user verification across various platforms and
applications.



## Yubikey FAQs

**Why do I need a PIN for my YubiKey?**


1.  Think of your YubiKey like a debit card for digital security. Just as your bank card
    uses a PIN to keep your money safe, your YubiKey uses a PIN for an extra layer of
    protection. This means that if someone ever gets their hands on your security key, they
    still can't use it unless they know your unique PIN. Additionally, the policies which
    govern IDM at Okta requires a PIN when you first set up your security key, ensuring that
    it's really you who's activating it.

**What are Platform Authenticators and how come I can’t use my smartphone to enroll a security key?**

1.  Platform authenticators, aka Internal Authenticators - These are devices that you
    typically own, such as smartphones and laptops. Depending on the hardware and
    software version they meet the FIDO2 standards, which allow you to prove your identity
    using methods like a PIN, your fingerprint, or facial recognition, utilizing the built-in
    security features of your device just like a YubiKey.

    The core of FIDO2 lies in what we call resident keys also known as "private keys" —
    think of them as digital versions of a physical key for a locked door. In a typical setup,
    these private keys are securely stored on your device itself. However, in certain
    situations, depending on your device's setup and type, there's a possibility that these
    keys could be stored in the cloud. This scenario might present security and audit risks,
    primarily because of uncertainties about where exactly these private keys are stored.
    The core of FIDO2 lies in what we call resident keys also known as "private keys" —
    think of them as digital versions of a physical key for a locked door. In a typical setup,
    these private keys are securely stored on your device itself. However, in certain
    situations, depending on your device's setup and type, there's a possibility that these
    keys could be stored in the cloud. This scenario might present security and audit risks,
    primarily because of uncertainties about where exactly these private keys are stored.

    Since different users have various types of devices and settings, and because of the
    potential cloud storage of private keys, platform authenticators might pose security
    challenges in terms of administration and management of organizational security
    standards. This variability is why, in most organizational contexts, platform
    authenticators may not be recommended or allowed.
    Since different users have various types of devices and settings, and because of the
    potential cloud storage of private keys, platform authenticators might pose security
    challenges in terms of administration and management of organizational security
    standards. This variability is why, in most organizational contexts, platform
    authenticators may not be recommended or allowed.

2.  External authenticators, aka USB Authenticators - Are independent devices such as
    your YubiKey that have one single purpose. These store the resident keys directly on
    the device itself, meaning the private keys reside solely within the physical bounds of
    the external authenticator. This approach generally offers a higher level of security
    because the private keys are not stored or replicated anywhere else, thus reducing the
    risk of unauthorized access.



## How do I unlink the YubiKey from Okta?

To remove your YubiKey from Okta
1. Login to the Okta portal

2. Click your name to expand the drop down list and then select Settings
![Figure 1]({{site.baseurl}}/assets/okta/p5fig1-ux-supplement-glossary-faq.jpg)
![Figure 2]({{site.baseurl}}/assets/okta/p5fig2-ux-supplement-glossary-faq.jpg)

3. Navigate to the Extra Verifications section and click the Remove button adjacent to the YubiKey 5 FIPS with NFC menu option.
![Figure 3]({{site.baseurl}}/assets/okta/p5fig3-ux-supplement-glossary-faq.jpg)



## What should I do if I forget my YubiKey PIN?
1. To reset your YubiKey PIN

2. Navigate to the YubiKey Manager page and click **Applications** > **FIDO2**.
![Figure 4]({{site.baseurl}}/assets/okta/p5fig4-ux-supplement-glossary-faq.jpg)

3. Click the Reset FIDO button and follow the prompts. Please note that resetting your
FIDO2 YubiKey essentially returns it to a "factory new" state. You’ll need to go through
the process of enrolling a security key, just as you did when you first got it.
![Figure 5]({{site.baseurl}}/assets/okta/p5fig5-ux-supplement-glossary-faq.jpg)

4. Can’t access or reset your YubiKey?

5. If you're without your YubiKey or forgot your PIN and had to reset, you can still access

6. Okta by choosing an alternative MFA method during the login process

7. Log into Okta as usual until you reach the MFA prompt.

8. Click Cancel.
![Figure 6]({{site.baseurl}}/assets/okta/p5fig6-ux-supplement-glossary-faq.jpg)

9. Click the drop-down list arrow and select an alternate MFA method.
![Figure 7]({{site.baseurl}}/assets/okta/p5fig7-ux-supplement-glossary-faq.jpg)

10. Select a verification method from the list of previously configured options, such as Okta
Verify or Google Authenticator

11. Click Retry.
![Figure 8]({{site.baseurl}}/assets/okta/p5fig8-ux-supplement-glossary-faq.jpg)

12. Complete the MFA logon process.

13. Re-enroll your security key ONLY IF you reset your YubiKey.
![Figure 9]({{site.baseurl}}/assets/okta/p5fig9-ux-supplement-glossary-faq.jpg)

<br>
<!-- last updated 06/06/2024 - CJB -->
