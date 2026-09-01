---
layout: page
collection: implement
title: Configure Windows Hello for Business in Microsoft Entra ID
type: Markdown
permalink: /implement/whfb/
description: Windows Hello for Business (WHfB) is a playbook to guide administrators through planning, configuring, testing, and implementation. 
sidenav: implement
sticky_sidenav: true

version: 1.3
pubdate: August 31, 2026

subnav:
  - text: NIST 800-63 COMPLIANCE NOTICE
    href: '#nist-800-63-compliance-notice'
  - text: Why Windows Hello for Business
    href: '#why-windows-hello-for-business'
  - text: Lessons Learned from FIDO2 Community of Action
    href: '#lessons-learned-from-fido2-community-of-action'
  - text: About Windows Hello for Business
    href: '#about-windows-hello-for-business'
  - text: Windows Hello for Business Sign-in Options
    href: '#windows-hello-for-business-sign-in-options'
  - text: Assumptions
    href: '#assumptions'
  - text: Prerequisites
    href: '#prerequisites'
  - text: Technology and terms
    href: '#technology-and-terms'
  - text: NIST 800-63B Authentication Assurance Level Compliance
    href: '#nist-800-63b-authentication-assurance-level-compliance'
  - text: Prepare users to use Windows Hello
    href: '#prepare-users-to-use-windows-hello'
  - text: WHfB policy configuration
    href: '#whfb-policy-configuration'
  - text: WHfB device enrollment configuration steps
    href: '#whfb-device-configuration-profile-steps'
  - text: WHfB device configuration profile steps
    href: '#whfb-device-configuration-profile-steps'
  - text: User Support and Redress Procedures
    href: '#user-support-and-redress-procedures'
  - text: WHfB user experience
    href: '#whfb-user-experience'
  - text: First time setup for new device/PIN creation
    href: '#first-time-setup-for-new-devicepin-creation'
  - text: Windows Hello for Business Microsoft Authenticator Setup for iOS and Android
    href: '#windows-hello-for-business-microsoft-authenticator-setup-for-ios-and-android'
  - text: Android – Microsoft Authenticator setup
    href: '#android--microsoft-authenticator-setup'
  - text: Windows infrared camera biometric set-up
    href: '#windows-infrared-camera-biometric-set-up'
  - text: Windows fingerprint biometric setup
    href: '#windows-fingerprint-biometric-setup'
  - text: Windows Hello for Business FAQs
    href: '#windows-hello-for-business-faqs'
  - text: Continuous Monitoring and Performance Evaluation
    href: '#continuous-monitoring-and-performance-evaluation'
  - text: Support Sources Used for Proposed Edits
    href: '#support-sources-used-for-proposed-edits'

---


<!-- Version 1.3 -->
<img src="{{site.baseurl}}/assets/logo/logo-gsa.png" width="64" height='64' align="left" alt="U.S. General Services Administration Logo">
<br><br><br>
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="vtbl1">
      Date: {{page.pubdate}} - Version: {{page.version}}
    </button>
  </h4>
  <div id="vtbl1" class="usa-accordion__content usa-prose">
    <table>
      <caption>Windows Hello for Business version table</caption>
      <thead>
      <tr>
        <th scope='col'>
          Version Number
        </th>
        <th scope='col'>
          Date
        </th>
        <th scope='col'>
          Change Description
        </th>
      </tr>
      </thead>
      <tr>
        <th scope='row'>
          1.3
        </th>
        <td>08/31/2026</td>
        <td>Corrected AAL levels removed DIRM section.</td>
      </tr>
      <tr>
        <th scope='row'>
          1.2
        </th>
        <td>02/17/2026</td>
        <td>Add NIST 800-63 compliance requirements, DIRM process, AAL mapping, accessibility guidelines, user support procedures, and continuous monitoring framework.</td>
      </tr>
      <tr>
        <th scope='row'>
          1.1
        </th>
        <td>08/14/2023</td>
        <td>Remove security key as an option. Add a "why" section and lessons learned.</td>
      </tr>
      <tr>
        <th scope='row'>
          1.0
        </th>
        <td>05/25/2023</td>
        <td>Initial Draft.</td>
      </tr>
    </table>
  </div>
</div>


The purpose of this playbook is to guide ICAM program managers and Microsoft Entra ID administrators through planning, configuring, testing, and implementing a Windows Hello for Business (WHfB) configuration when devices are cloud-joined. WHfB also allows design for hybrid-joined devices. Hybrid-joined relies on either a 3rd party mobile device manager or Windows devices managed through a non-premises Active Directory Domain Services (AD DS). This configuration can be more complex and architecture-specific.

Due to this, the playbook only covers a cloud-join configuration.

## NIST 800-63 COMPLIANCE NOTICE

- Windows Hello for Business is a phishing-resistant, multi-factor cryptographic authenticator when deployed with a device-specific key protected by TPM and activated by a PIN or biometric gesture. WHfB with software TPM can support AAL2; WHfB with hardware TPM may support AAL3 when applicable FIPS 140 validation, TPM selection, configuration, reauthentication controls, and agency risk acceptance are satisfied.

Authentication Factor Classification:

- WHfB uses cryptographic proof of possession of a device-bound private key, combined with local activation by PIN or biometric gesture.  
- PIN/biometric serves as the user activation factor for the device-bound authenticator and demonstrates user intent/presence.  
- For AAL2, properly configured WHfB with TPM + PIN/biometric may be treated as a multi-factor cryptographic authenticator. Agencies should configure authentication strengths and reauthentication controls rather than requiring SMS or basic push solely to make WHfB AAL2.

Multi-Factor Authentication Requirements:

- AAL2: WHfB with software TPM or hardware TPM \+ PIN/biometric; avoid SMS/basic push as the primary path to phishing-resistant AAL2.  
- AAL3: WHfB with hardware TPM may be considered when FIPS 140 and agency risk-acceptance requirements are met; FIDO2 security keys and smart cards/PIV are also strong AAL3 options.

See Section NIST 800-63B Authentication Assurance Level Compliance for complete AAL compliance mapping and configuration guidance.

## Why Windows Hello for Business

Windows Hello for Business is a phishing-resistant FIDO2 platform authenticator native to Microsoft Entra ID that does not require additional hardware or software. It is an alternative authenticator for use cases where using PIV is impractical. An agency could also develop a Derived PIV solution for WHfB requiring PIV authentication before registering WHfB. Some everyday use cases where PIV is impractical or unavailable may include the following:

- Agency staff completing a fitness determination and eligible to begin work. However, issuing a PIV card may take weeks or months due to supply chain issues or proximity to a PIV issuance station.  
- Agency staff who've lost or damaged their PIV card and need a temporary authenticator until they can get a new PIV card.  
- Short-term staff who are not eligible for a PIV card.  
- Mobile or personal device access where using a smart card or Derived PIV is impractical due to form factor, technology, or cost limitations.

Traditionally in these scenarios, agencies leverage a policy exception process where the exception authenticator is either a time-limited username and password or a One-Time Pin. Unfortunately, these exception authenticators are susceptible to sophisticated phishing attacks, which can convincingly spoof official applications and involve dynamic user interaction. Users can be fooled into providing a one-time code or responding to a security prompt that grants the attacker account access.

These attacks can be fully automated and operate cheaply at a significant scale.

## Lessons Learned from FIDO2 Community of Action

The FIDO2 Community of Action is an Office of Management and Budget initiative to help agencies rapidly replace exception authenticators with a phishing-resistant alternative either as an alternative or a backup authenticator. The most common authenticators piloted by the CoA agencies include WHfB, FIDO2 security keys, and Derived PIV on a government mobile device or a FIDO2 security key. For common questions with WHfB, see the FAQs.

Below is a list of lessons learned from CoA agencies in the piloting and production use of WHfB.

- Depending on the size of your agency, the prerequisites to using WHfB could be a major technology shift. The most time-intensive activity includes migrating device management to Microsoft Entra ID, or a Microsoft Entra hybrid join, which also means becoming comfortable with leveraging Azure group policies over traditional Microsoft Group Policy Objects.  
- Migrating to a complete cloud Microsoft Entra configuration with Microsoft Entra joined devices is possible for agencies with a small on-premise Microsoft Entra ID footprint. This alleviates the risk of Microsoft Entra ID vulnerabilities, but agencies must ensure they have the right talent and understanding of Entra ID operations and constraints.  
- Most agencies have adequate licensing (usually E3 or E5) to leverage conditional access policies and automated device enrollment. It is not required to use WHfB but does help with other security priorities to integrate device-level signals and improve user experience.  
- Once enabled, WHfB provides a more natural authentication experience when using biometrics. Biometrics requires a compatible Windows device.  
- WHfB is a Windows local credential. For phishing-resistant authentication on mobile devices to Microsoft Entra ID, agencies should evaluate FIDO2 security keys, passkeys in Microsoft Authenticator,  and certificate-based authentication, depending on platform support and assurance requirements.

## About Windows Hello for Business

Windows Hello for Business distinctly differs from the consumer version of Windows Hello.

From Microsoft, "Windows Hello represents the biometric framework provided in Windows. Windows Hello lets users use biometrics to sign in to their devices by securely storing their user name and password and releasing it for authentication when they successfully identify themselves using biometrics. Windows Hello for Business uses asymmetric keys protected by the device's security module that requires a user gesture (PIN or biometrics) to authenticate."

WHfB is also separate from Certificate-Based Authentication and security keys.

## Windows Hello for Business Sign-in Options

The available sign-in options for Windows Hello for Business include the following:

- Facial recognition  
- Fingerprint recognition  
- PIN (for use as a backup in case the biometric authentication fails or in the absence of camera/fingerprint scanning technology)

WHfB PINs may seem similar to passwords at first glance. However, there is a fundamental difference: PINs typically are local to the device and not transmitted over the internet, unlike a Microsoft 365 or Microsoft Entra ID (ME-ID) User Principal Name and Password combination. Device PIN creation establishes a trusted relationship with the identity provider (ME-ID). It also creates an asymmetric key pair that is used for authentication.

Transmittal of the public key to the authentication server completes the sign-in request. When paired with a Trusted Platform Module (TPM) chip, tamper protection is enabled. This feature protects the key material from attackers and locks the device after too many incorrect PIN attempts. Biometric data is stored locally on the device and never sent to external devices or servers. As stated previously, authentication occurs via the asymmetric key.

Users can delete or remove their biometric information by visiting Settings > Accounts > Sign-in options.

## Assumptions

This playbook assumes that devices are cloud-only joined and that no hybrid configuration with Microsoft Entra ID exists. Hybrid deployments come in multiple designs with constraints based on on-premise components. This playbook is meant to support agencies in implementing the Federal Zero Trust Strategy action steps for application action and reducing the use of network authentication.

Deploying Windows Hello for Business in a hybrid environment comes in four configurations driven by how devices are managed.

- Cloud kerberos trust  
- Key trust  
- Certificate trust, mixed managed  
- Certificate Trust, modern managed

These hybrid deployments require configuring Microsoft Entra Connect, Microsoft Entra Kerberos and deploying either a Cloud Trust Device Configuration Profile in Microsoft Intune (Intune), a Key trust deployment with on-premises Active Directory Domain Services (AD DS), or a hybrid certificate trust deployment, which requires Active Directory Federated Services (ADFS). Of these three hybrid options, the Cloud Kerberos trust deployment is recommended.

## Prerequisites

For cloud-joined deployment, this playbook assumes that:

- all devices have a TPM 2.0 module that complies with Federal Information Processing Standards (FIPS). All devices should be on Windows 10 version 1709 (or later) or Windows 11\. Preferably, all devices should be Windows 10 version 1903 or later.  
- Biometric hardware such as an infrared camera or fingerprint reader is optional but recommended for user experience if allowed by agency policy. WHfB can operate with a PIN, and a PIN remains required as the fallback gesture when biometrics are enabled.  
- Microsoft Intune (Intune) is the Windows mobile device management (MDM) solution.  
- Not required, but it’s preferable that all users have an Microsoft Entra Premium P1 or P2 subscription, which is needed for automatic MDM enrollment when the device joins Entra ID. Microsoft Entra Premium P1 licenses also grant access to Microsoft Entra multifactor authentication (MFA) through Conditional Access policies.

## Technology and terms

See this Microsoft primer on Introduction to device identity and join types.

**Join type**

Join type refers to how devices are associated with Entra ID. For a device to authenticate to Microsoft Entra ID, it must be registered or joined.

Registering a device to Microsoft Entra ID enables you to manage a device’s identity. When a device is registered, Microsoft Entra ID device registration provides the device with an identity that is used to authenticate the device when a user signs in to Microsoft Entra ID. You can use the identity to enable or disable a device.

When combined with a mobile device management (MDM) solution such as Microsoft Intune, the device attributes in Microsoft Entra ID are updated with additional information about the device. This feature allows you to create conditional access rules that enforce access from devices to meet your standards for security and compliance.

**Microsoft Entra ID registration**

Microsoft Entra ID registered devices support the bring your own device (BYOD) scenario. In BYOD, a user can access your organization’s Microsoft Entra ID controlled resources using a personal device.

**Microsoft Entra ID join**

Microsoft Entra ID join is intended for organizations that desire to be cloud-first or cloud-only. There’s no restriction on the size or type of organizations that can deploy Microsoft Entra ID join. Microsoft Entra ID join also works in a hybrid environment and can enable access to on-premises applications and resources.

**Microsoft Entra ID Hybrid join**

For more than a decade, organizations have used the domain join to their on-premises Active Directory Domain Services (AD DS) to enable:

- IT departments to manage work-owned devices from a central location.  
- Users can sign in to their devices with their domain or organizational work or school accounts.

Typically, organizations with an on-premises footprint rely on imaging methods to provision devices, and they often use a group policy to manage them.

If your environment has an on-premises AD footprint and you want to benefit from the capabilities provided by Microsoft Entra ID, you can implement Microsoft Entra Hybrid joined devices. These devices are joined to both your on-premises on-premises Active Directory and your Microsoft Entra ID.

**Mobile device management**

Device management enables organizations to administer and maintain devices, including virtual machines, physical computers, mobile devices, and IoT devices. Microsoft Intune is the MDM solution for the Microsoft 365 platform.

## NIST 800-63B Authentication Assurance Level Compliance

### **AAL Compliance Matrix**

| Assurance Level | WHfB Configuration | Additional Requirements | Use Cases |
| :---- | :---- | :---- | :---- |
| AAL1 | WHfB with PIN or biometric | None | Basic access, low-impact systems |
| AAL2 | WHfB with software or hardware TPM + PIN/biometric | No SMS/push required for WHfB itself when accepted as a multi-factor cryptographic authenticator; configure Entra authentication strength, session, and device policies | Personal data access, moderate-impact systems |
| AAL3 | WHfB with hardware TPM + PIN/biometric, subject to FIPS 140-2/3 validation and agency risk acceptance | Alternatively use PIV/smart card or FIDO2 security key; require phishing-resistant methods only | High-impact systems where AAL3 is required |

### **Configuration Requirements by AAL**

AAL1 Configuration (Low-Impact Baseline Only):

- TPM 2.0 required  
- Minimum PIN length: 6 characters  
- Enhanced anti-spoofing enabled  
- Biometric authentication optional

AAL2 Configuration (Recommended WHfB Deployment):

- Configure WHfB as a multi-factor cryptographic authenticator using TPM \+ PIN/biometric, plus:  
- Microsoft Entra Conditional Access authentication strength for phishing-resistant methods  
- Fallback/recovery methods defined by agency policy; SMS should be treated as backup/recovery only and not as the primary phishing-resistant method  
- Risk-based authentication policies

AAL3 Configuration (Hardware-Protected/High Assurance):

- All AAL2 requirements PLUS:  
- Use WHfB with hardware TPM only where FIPS 140 and agency risk acceptance are satisfied, or use PIV/smart card or FIDO2 security key  
- Phishing-resistant verification only  
- Enhanced monitoring and logging

### Policy Configuration Examples

For AAL2 Compliance in Microsoft Entra ID:

- Create Conditional Access policy  
- Require an authentication strength that includes phishing-resistant methods  
- Include WHfB with TPM + PIN/biometric as an allowed phishing-resistant method where accepted by agency policy  
- Configure session, device compliance, and reauthentication controls; do not require SMS/basic push solely to upgrade WHfB to AAL2  
- Apply to user groups based on risk assessment

## Prepare users to use Windows Hello

### Using Windows Hello and biometrics

If organization policy allows, users can employ biometrics (fingerprint and facial recognition) with WHfB, if the hardware supports it. Figure 1 displays the sign-in options available with WHfB.

**Figure 1: Windows Hello Sign-in Options**

![Figure 1: Windows Hello Sign-in Options]({{site.baseurl}}/assets/playbooks/whfb/01-Windows-Hello-Sign-In-Options.png)

In establishing a policy requiring WHfB use in the workplace, you must educate users on how to use WHfB.

After enrolling in WHfB, users should use their gesture (such as a PIN or fingerprint) for access to corporate resources. This gesture is only valid on the enrolled device.

Although the organization may require users to change their Microsoft Entra ID or Microsoft Entra ID account password at regular intervals, password changes will not affect WHfB.

Individuals using virtual or physical smart cards for authentication can use their virtual smart card to verify their identity when they set up WHfB.

### WHfB and password changes

The WHfB PIN or biometric gesture you establish at enrollment is specific to that device. You can, however, set up WHfB for the same account on multiple devices. If WHfB is not deployed and the password for that account changes, you must provide the new password on each device to continue WHfB use.

Example 1

Let’s suppose you have set up a PIN for your Microsoft account on Device A. You use your PIN to sign in on Device A and then change the password for your Microsoft account. Since you were using Device A when you changed your password, the PIN on Device A will continue to work with no other action on your part.

Example 2

Suppose you sign in on Device B and change your password for your Microsoft account. The next time that you try to sign in on Device A using your PIN, sign-in will fail because the Device A account credentials will be outdated.

### **Accessibility and Inclusive Design Requirements**

Alternative Authentication Methods

Organizations SHALL provide alternatives for users who cannot use biometric authentication:

- For Users with Visual Impairments: PIN-only authentication option; screen reader compatibility verification; voice-guided setup instructions; high-contrast setup interfaces.  
- For Users with Motor Impairments: Extended PIN entry timeouts; alternative PIN input methods; larger touch targets for setup; voice activation options where available.  
- For Users with Cognitive Disabilities: Simplified setup procedures; multiple setup attempt allowances; clear, plain-language instructions; human assistance options.

Device Accommodation Requirements

- Verify assistive technology compatibility  
- Test with screen readers (NVDA, JAWS)  
- Ensure keyboard-only navigation  
- Provide alternative input devices support

Digital Equity Considerations

- Consider users without personal smartphones for MFA  
- Provide institutional devices for enrollment if needed  
- Offer multiple enrollment locations  
- Account for varying technology literacy levels

## WHfB policy configuration

Windows Hello for Business can be enabled multiple ways through Microsoft Intune. The first method is through Windows Device Enrollment. This method can be used for devices that are Microsoft Entra joined but have not yet enrolled in Intune. The second method, Device Configuration Profile, is used for devices already enrolled in Intune.

## WHfB device enrollment configuration steps

- From the Devices \| Overview page, select Enroll devices from the middle navigation pane.

**Figure 2: Intune Devices \| Overview Page**

![Figure 2: Intune Devices \| Overview Page]({{site.baseurl}}/assets/playbooks/whfb/02-Intune-WHfB-Enrollment.png)

- By default, Windows enrollment is preselected on the Enroll devices page. Choose the button named Windows Hello for Business. Figure 3 displays the Intune Windows enrollment page.

**Figure 3: Intune Windows Enrollment Page**

![Figure 3: Intune Windows Enrollment Page]({{site.baseurl}}/assets/playbooks/whfb/03-Intune-WHfB-Enrollment.png)

- A new blade appears on the right when Windows Hello for Business is selected. WHfB enrollment by default is Enabled and assigned to All users. This assignment cannot be changed and will always remain scoped to all users. In order to limit the scope of WHfB, disable this enrollment policy and instead proceed with deploying WHfB through a device configuration profile (detailed in the next section).

Device configuration profiles can be assigned to user or device groups, and they can be used as a proof of concept, pilot, or gradual rollout of WHfB throughout the organization.

Settings for this policy can be Enabled, Not configured, or Disabled, as shown in Figure 4. Not configured means Intune does not control the WHfB setting and existing WHfB settings on Windows devices are not changed; use Disabled only when the agency explicitly does not want users to provision WHfB during enrollment.

**Figure 4: Windows Hello for Business Enrollment Policy Settings**

![Figure 4: Windows Hello for Business Enrollment Policy Settings]({{site.baseurl}}/assets/playbooks/whfb/04-Intune-WHfB-Enrollment-Policy.png)

After enabling the policy, a series of policy choices must be made. Recommended settings are as follows:

- Use a Trusted Platform Module: Required  
- Minimum PIN length: 6  
- Maximum PIN length: 127  
- Lowercase letters in PIN: Allowed  
- Uppercase letters in PIN: Allowed  
- Special characters in PIN: Allowed  
- PIN expiration (days): Never  
- Remember PIN history: No  
- Allow biometric authentication: Yes  
- Use enhanced anti-spoofing, when available: Yes  
- Allow phone sign-in: Yes  
- Use security keys for sign-in: Not configured  
- Save the policy and begin enrolling devices in Intune via automatic enrollment settings

## **WHfB device configuration profile steps**

- Select Devices on the leftmost navigation pane.  
- Choose Configuration profiles from the middle navigation blade.  
- Select Create profile.  
- Set Platform : Windows 10 and later.  
- Use Endpoint security > Account protection or Settings catalog for new WHfB policy instances. The older Devices > Configuration profiles > Templates > Identity protection path was deprecated for new profile creation in July 2024.  
- Select Create.

**Figure 7: Windows Device Configuration Profile Creation**

![Figure 7: Windows Device Configuration Profile Creation]({{site.baseurl}}/assets/playbooks/whfb/07-Intune-WHfB-ConfigProfile.png)

In Configuration settings (see Figure 9), configure the following settings: Configure Windows Hello for Business: Enabled; Minimum PIN length: 6; Maximum PIN length: 127; Lowercase letters in PIN: Allowed; Uppercase letters in PIN: Allowed; Special characters in PIN: Allowed; PIN expiration: Never; Remember PIN history: No; Enable PIN recovery: Enable; Use a Trusted Platform Module (TPM): Enable; Allow biometric authentication: Enable; Use enhanced anti-spoofing, when available: Enable; Certificate for on-premise resources: Not configured; Use security keys for sign-in: Not configured.

**Figure 8: Windows Device Configuration Profile Name and Description**

![Figure 8: Windows Device Configuration Profile Name and Description]({{site.baseurl}}/assets/playbooks/whfb/08-Intune-WHfB-ConfigProfile-name.png)

**Figure 9: Windows Device Configuration Policy Settings**

![Figure 9: Windows Device Configuration Policy Settings]({{site.baseurl}}/assets/playbooks/whfb/09-Intune-WHfB-ConfigProfile-settings.png)

**Figure 10: Windows Device Configuration Group Assignment**

![Figure 10: Windows Device Configuration Group Assignment]({{site.baseurl}}/assets/playbooks/whfb/10-Intune-WHfB-ConfigProfile-assignments.png)

**Figure 11: Windows Device Configuration Applicability Rules**

![Figure 11: Windows Device Configuration Applicability Rules]({{site.baseurl}}/assets/playbooks/whfb/11-Intune-WHfB-ConfigProfile-applicability.png)

**Figure 12: Windows Device Configuration Applicability Rules Review**

![Figure 12: Windows Device Configuration Applicability Rules Review]({{site.baseurl}}/assets/playbooks/whfb/12-Intune-WHfB-ConfigProfile-applicability2.png)

**Figure 13: Windows Hello for Business Configuration Profile Completion**

![Figure 13: Windows Hello for Business Configuration Profile Completion]({{site.baseurl}}/assets/playbooks/whfb/13-Intune-WHfB-ConfigProfile-review.png)

## User Support and Redress Procedures

### Account Recovery Processes

**PIN Recovery:**

- User reports PIN forgotten to help desk  
*- Verify user identity through alternative method  
- Initiate PIN reset via Intune device action  
- User re-enrolls PIN on next sign-in  
- Document incident for trend analysis

**Biometric Recovery:**

- User reports biometric not working  
- Troubleshoot hardware and software issues  
- If unresolvable, enable PIN-only authentication  
- Re-enroll biometrics when issue resolved  
- Track for pattern identification

**Device Replacement:**

- User receives new device  
- Old device WHfB credentials must be removed through device retirement, wipe/disable actions, Entra/Intune lifecycle procedures, or documented recovery controls; new device enrollment alone should not be assumed to invalidate the old credential.  
- User re-enrolls WHfB on new device  
- Verify successful authentication  
- Update device inventory records

### Help Desk Procedures

- Tier 1 Support (Basic Issues): PIN reset assistance; biometric re-enrollment guidance; basic troubleshooting steps; escalation criteria definition.  
- Tier 2 Support (Complex Issues): Device policy troubleshooting; Microsoft Entra ID integration issues; hardware compatibility problems; privacy concern resolution.

### Human Oversight Requirements

- All automated lockouts reviewed by human within 24 hours  
- Fraud indicators investigated by security team  
- Privacy complaints escalated to privacy officer  
- Accessibility issues addressed by specialized support


## WHfB user experience

This section details the user experience for setting up Windows Hello for Business. The minimum device requirements for fingerprint and facial recognition sensors can be found here.

By default, users will be prompted for facial recognition and PIN creation if biometric authentication is enabled. Fingerprints can be added later from the Settings > Accounts > Sign-in options menu.

## First time setup for new device/PIN creation

Enter the username and password for an Microsoft Entra ID user on a Windows 10 or 11 device, as shown in Figure 14\.

**Figure 14: Windows Sign-in**

![Figure 14: Windows Sign-in]({{site.baseurl}}/assets/playbooks/whfb/14-FirstTimeSetUp.png)

**Figure 15: Windows Hello Setup Prompt**

![Figure 15: Windows Hello Setup Prompt]({{site.baseurl}}/assets/playbooks/whfb/15-WHfb-prompt.png)

**Figure 16: Microsoft Authenticator Request**

![Figure 16: Microsoft Authenticator Request]({{site.baseurl}}/assets/playbooks/whfb/16-WHfb-mfa.png)

**Figure 17: Windows PIN Creation**

![Figure 17: Windows PIN Creation]({{site.baseurl}}/assets/playbooks/whfb/17-WHfB_1st_pin_setup.png)

**Figure 18: Windows PIN Completion**

![Figure 18: Windows PIN Completion]({{site.baseurl}}/assets/playbooks/whfb/18-WHfB-allset.png)

**Figure 19: Windows Sign-in with PIN**

![Figure 19: Windows Sign-in with PIN]({{site.baseurl}}/assets/playbooks/whfb/19-whfb_sign_out_experience.png)

The MFA challenge only occurs on the first sign-in to Windows when setting up Windows Hello. The user will receive a push notification or number-matching prompt on the Microsoft Authenticator mobile application. By default, Windows does not offer additional MFA with the Microsoft Authenticator app on Windows Sign-ins. Figure 16 shows the Microsoft Authenticator prompt.

## Windows Hello for Business: Microsoft Authenticator Setup for iOS and Android


### iOS - Microsoft Authenticator setup

- Install the latest version of the Authenticator app for Apple iOS.  
- Set up two-step verification on Authenticator. To secure your account, the Authenticator app can provide you with a code that provides additional verification.  
- Select Allow to allow notifications from the Microsoft Authenticator app.  
- A notification will be sent to your device. Tap Approve when the notification appears.  
- Select Next after verifying the 6-digit code.  
- Congratulations! Multi-Factor Authentication for Windows Hello for Business is set up when the setup complete screen appears.

**Figure 20: iOS App Store Microsoft Authenticator Install**

![Figure 20: iOS App Store Microsoft Authenticator Install]({{site.baseurl}}/assets/playbooks/whfb/20-WHfB-iOS-SetUp.png)

**Figure 21: Windows and Microsoft Authenticator Setup**

![Figure 21: Windows and Microsoft Authenticator SetupFigure 21: Windows and Microsoft Authenticator Setup]({{site.baseurl}}/assets/playbooks/whfb/21-WHfB-iOS-MSAuth-Setup.png)

**Figure 22: Microsoft Authenticator Work or School Account Selection**

![Figure 22: Microsoft Authenticator Work or School Account Selection]({{site.baseurl}}/assets/playbooks/whfb/22-WHfB-iOS-MSAuth-account.png)

**Figure 23: Microsoft Authenticator for iOS Allow Camera Access**

![Figure 23: Microsoft Authenticator for iOS Allow Camera Access]({{site.baseurl}}/assets/playbooks/whfb/23-WHfB-iOS-MSAuth-camera.png)

**Figure 24: Microsoft Authenticator for iOS Account Setup**

![Figure 24: Microsoft Authenticator for iOS Account Setup]({{site.baseurl}}/assets/playbooks/whfb/24-WHfB-iOS-MSAuth-next.png)

**Figure 25: Microsoft Authenticator for iOS Scan QR Code**

![Figure 25: Microsoft Authenticator for iOS Scan QR Code]({{site.baseurl}}/assets/playbooks/whfb/25-WHfB-iOS-MSAuth-qrcode.png)

**Figure 26: Microsoft Authenticator for iOS Allow Notifications**

![Figure 26: Microsoft Authenticator for iOS Allow Notifications]({{site.baseurl}}/assets/playbooks/whfb/26-WHfB-iOS-MSAuth-qrcode-scan.png)

**Figure 27: Microsoft Authenticator for iOS Approve Sign-in**

![Figure 27: Microsoft Authenticator for iOS Approve Sign-in]({{site.baseurl}}/assets/playbooks/whfb/27-WHfB-iOS-MSAuth-appsignin.png)

**Figure 28: Microsoft Authenticator Notification Approved**

![Figure 28: Microsoft Authenticator Notification Approved]({{site.baseurl}}/assets/playbooks/whfb/28-WHfB-iOS-MSAuth-notifapp.png)

**Figure 29: Multi-Factor Authentication SMS One-time passcode**

![Figure 29: Multi-Factor Authentication SMS One-time passcode]({{site.baseurl}}/assets/playbooks/whfb/29-WHfB-iOS-MSAuth-smsotp.png)

**Figure 30: Multi-Factor Authentication SMS Completed**

![Figure 30: Multi-Factor Authentication SMS Completed]({{site.baseurl}}/assets/playbooks/whfb/30-WHfB-iOS-MSAuth-smsverif.png)

**Figure 31: Multi-Factor Authentication Setup Complete**

![Figure 31: Multi-Factor Authentication Setup Complete]({{site.baseurl}}/assets/playbooks/whfb/31-WHfB-iOS-MSAuth-complete.png)

## Android – Microsoft Authenticator setup

- Install the latest version of the Authenticator app for Google Android.  
- Select Add account.  
- Select Work or school account.  
- Choose Scan a QR code.  
- Respond Approve to the push notification to approve the sign-in.  
- If agency policy allows SMS as a fallback/recovery method, enter a phone number when prompted; do not position SMS as the primary phishing-resistant method.  
- Enter a valid phone number only if SMS backup is authorized by agency policy; prefer phishing-resistant portable credentials such as FIDO2 security keys, passkeys, or smart cards for primary authentication.  
- Your security information will now be updated. Treat text messaging as a fallback or recovery method only where agency policy permits.  
- Congratulations! Multi-factor authentication has now been set up.

**Figure 32: Microsoft Authenticator for Android Account Setup**

![Figure 32: Microsoft Authenticator for Android Account Setup]({{site.baseurl}}/assets/playbooks/whfb/32-WHfB-Android-MSAuth.png)

**Figure 33: Google Play Store Microsoft Authenticator Install**

![Figure 33: Google Play Store Microsoft Authenticator Install]({{site.baseurl}}/assets/playbooks/whfb/33-WHfB-Android-MFA-appinstall.png)

**Figure 34: Microsoft Authenticator for Android Add Account**

![Figure 34: Microsoft Authenticator for Android Add Account]({{site.baseurl}}/assets/playbooks/whfb/34-WHfB-Android-MFA-addacct.png)

**Figure 35: Microsoft Authenticator for Android Account Type Selection**

![Figure 35: Microsoft Authenticator for Android Account Type Selection]({{site.baseurl}}/assets/playbooks/whfb/35-WHfB-Android-MFA-accttype.png)

**Figure 36 : Microsoft Authenticator for Android Work or School Account Setup**

![Figure 36 : Microsoft Authenticator for Android Work or School Account Setup]({{site.baseurl}}/assets/playbooks/whfb/36-WHfB-Android-MFA-qrcode.png)

**Figure 37: Microsoft Authenticator for Android Account Setup**

![Figure 37: Microsoft Authenticator for Android Account Setup]({{site.baseurl}}/assets/playbooks/whfb/37-WHfB-Android-MSAuth-next.png)

**Figure 38: Microsoft Authenticator for Android QR Code Scan**

![Figure 38: Microsoft Authenticator for Android QR Code Scan]({{site.baseurl}}/assets/playbooks/whfb/38-WHfB-Android-MSAuth-qrcode.png)

**Figure 39: Microsoft Authenticator for Android Scan QR Code Camera View**

![Figure 39: Microsoft Authenticator for Android Scan QR Code Camera View]({{site.baseurl}}/assets/playbooks/whfb/39-WHfB-Android-MSAuth-qrcode2.png)

**Figure 40: Microsoft Authenticator for Android Account Added**

![Figure 40: Microsoft Authenticator for Android Account Added]({{site.baseurl}}/assets/playbooks/whfb/40-WHfB-Android-MSAuth-acctadd.png)

**Figure 41: Microsoft Authenticator for Android Push Notification**

![Figure 41: Microsoft Authenticator for Android Push Notification]({{site.baseurl}}/assets/playbooks/whfb/41-WHfB-Android-MSAuth-pushnotif.png)

**Figure 42: Microsoft Authenticator for Android App Notification Approved**

![Figure 42: Microsoft Authenticator for Android App Notification Approved]({{site.baseurl}}/assets/playbooks/whfb/42-WHfB-Android-MSAuth-notifapp.png)

**Figure 43: Multi-Factor Authentication Phone Number Setup**

![Figure 43: Multi-Factor Authentication Phone Number Setup]({{site.baseurl}}/assets/playbooks/whfb/43-WHfB-Android-MSAuth-smsstart.png)

**Figure 44: Multi-Factor Authentication SMS One-Time Passcode**

![Figure 44: Multi-Factor Authentication SMS One-Time Passcode]({{site.baseurl}}/assets/playbooks/whfb/44-WHfB-Android-MSAuth-smsotp.png)

**Figure 45: Multi-Factor Authentication SMS Complete**

![Figure 45: Multi-Factor Authentication SMS Complete]({{site.baseurl}}/assets/playbooks/whfb/45-WHfB-Android-MSAuth-smscomp.png)

**Figure 46: Multi-Factor Authentication Complete**

![Figure 46: Multi-Factor Authentication Complete]({{site.baseurl}}/assets/playbooks/whfb/46-WHfB-Android-MSAuth-complete.png)

## Windows infrared camera biometric set-up

Facial recognition can be set up during Windows Hello enrollment or after by visiting Settings \> Accounts \> Sign-in options \> Facial recognition. Choose Get started to begin the facial recognition process.

**Figure 47: Windows Hello for Business Facial Recognition Setup**

![Figure 47: Windows Hello for Business Facial Recognition Setup]({{site.baseurl}}/assets/playbooks/whfb/47-WHfB-Camera-start.png)

**Figure 48: Windows Hello for Business Facial Recognition Scan**

![Figure 48: Windows Hello for Business Facial Recognition Scan]({{site.baseurl}}/assets/playbooks/whfb/48-WHfB-Camera-facescan.png)

**Figure 49: Windows Hello for Business Facial Recognition Complete**

![Figure 49: Windows Hello for Business Facial Recognition Complete]({{site.baseurl}}/assets/playbooks/whfb/49-WHfB-Camera-finish.png)

## Windows fingerprint biometric setup

Increasingly, device vendors are adding built-in fingerprint sensors to keyboards. If a device does not have a built-in fingerprint sensor, a USB fingerprint sensor can be used with Windows Hello for Business. Fingerprint setup can occur during Windows Hello enrollment or afterward by visiting Settings > Accounts > Sign-in options > Fingerprint recognition. Multiple fingerprints can be registered with Windows Hello.

**Figure 50: Windows Hello for Business Fingerprint Setup**

![Figure 50: Windows Hello for Business Fingerprint Setup]({{site.baseurl}}/assets/playbooks/whfb/50-WHfB-Fingerprint-start.png)

**Figure 51: Windows Hello for Business Fingerprint Scan 1**

![Figure 51: Windows Hello for Business Fingerprint Scan 1]({{site.baseurl}}/assets/playbooks/whfb/51-WHfB-Fingerprint-scan1.png)

**Figure 52: Windows Hello for Business Fingerprint Scan 2**

![Figure 52: Windows Hello for Business Fingerprint Scan 2]({{site.baseurl}}/assets/playbooks/whfb/52-WHfB-Fingerprint-scan2.png)

**Figure 53: Windows Hello for Business Fingerprint Scan 3**

![Figure 53: Windows Hello for Business Fingerprint Scan 3]({{site.baseurl}}/assets/playbooks/whfb/53-WHfB-Fingerprint-scan3.png)

**Figure 54: Windows Hello for Business Fingerprint Scan Complete**

![Figure 54: Windows Hello for Business Fingerprint Scan Complete]({{site.baseurl}}/assets/playbooks/whfb/54-WHfB-Fingerprint-complete.png)

## Windows Hello for Business FAQs
<br />
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="b-a1">
    What’s the difference between Windows Hello and Windows Hello for Business?</button>
  </h4>
  <div id="b-a1" class="usa-accordion__content usa-prose">
    <p>Windows Hello represents the biometric framework provided in Windows. Windows Hello lets users use biometrics to sign in to their devices by securely storing their user name and password and releasing it for authentication when the user successfully identifies themselves using biometrics. Windows Hello for Business uses asymmetric keys protected by the device’s security module that requires a user gesture (PIN or biometrics) to authenticate.</p>
  </div>
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="b-a2">Where is the Windows Hello biometrics data stored?</button>
  </h4>
  <div id="b-a2" class="usa-accordion__content usa-prose">
    <p>When you enroll in Windows Hello, a representation of your biometrics, called an enrollment profile, is created. This enrollment profile biometrics data is device specific, is stored locally on the device, and does not leave the device or roam with the user. Some external fingerprint sensors store biometric data on the fingerprint module itself rather than on Windows devices. Even in this case, the biometrics data is stored locally on those modules, is device specific, doesn’t roam, never leaves the module, and is never sent to the Microsoft cloud or an external server.</p>
  </div>
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="b-a3">What happens when a user forgets their PIN?</button>
  </h4>
  <div id="b-a3" class="usa-accordion__content usa-prose">
    <p>If the user can sign in with a password, they can reset their PIN by selecting the I forgot my PIN link in the Settings app. Users can reset their PIN from the lock screen by selecting the I forgot my PIN link on the PIN credential provider. For on-premises deployments, devices must be connected to their on-premises network (domain controllers and/or certificate authority) to reset PINs.</p>
  </div>
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="b-a4">Can I disable the PIN while using Windows Hello for Business?</button>
  </h4>
  <div id="b-a4" class="usa-accordion__content usa-prose">
    <p>No. The movement away from passwords is accomplished by gradually reducing the use of the password. In situations where you can’t authenticate by using biometrics, you need a fallback mechanism that isn’t a password. The PIN is the fallback mechanism. Disabling or hiding the PIN credential provider will disable the use of biometrics.</p>
  </div>
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="b-a5">How many users can enroll for Windows Hello for Business on a single Windows device?</button>
  </h4>
  <div id="b-a5" class="usa-accordion__content usa-prose">
    <p>The maximum number of supported enrollments on a single device is 10\. This lets 10 users each enroll their face and up to 10 fingerprints. For devices with more than 10 users, or for users that sign in to many devices (for example, a support technician), the use of FIDO2 security keys is recommended.</p>
  </div>
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="b-a6">Can I use third-party MFA providers with Windows Hello for Business?</button>
  </h4>
  <div id="b-a6" class="usa-accordion__content usa-prose">
    <p>Yes, if you’re using federated hybrid deployment, you can use any third-party that provides an AD FS MFA adapter.</p>
  </div>
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="b-a7">Is Windows Hello for Business considered multi-factor authentication?</button>
  </h4>
  <div id="b-a7" class="usa-accordion__content usa-prose">
    <p>Windows Hello for Business is two-factor authentication based on the observed authentication factors of: something you have, something you know, and something that’s part of you. Windows Hello for Business incorporates two of these factors: something you have (the user’s private key protected by the device’s security module) and something you know (your PIN). With the proper hardware, you can enhance the user experience by introducing biometrics. By using biometrics, you can replace the something you know authentication factor with the something that is a part of you factor, with the assurances that users can fall back to the something you know factor.</p>
  </div>
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="b-a8">Can I use both a PIN and biometrics to unlock my device?</button>
  </h4>
  <div id="b-a8" class="usa-accordion__content usa-prose">
    <p>You can use multi-factor unlock to require users to provide an extra factor to unlock their device. Authentication remains two-factor, but another factor is required before Windows allows the user to reach the desktop.</p>
  </div>
</div>

## Continuous Monitoring and Performance Evaluation

### Suggested Operational Metrics (not NIST 800-63 Table 4 requirements)

Authentication Metrics:

- Authentication failure rate: Suggested target < 5%; agency may define its own operational threshold  
- Account lockout incidents: Monthly tracking  
- PIN reset requests: Weekly monitoring  
- Biometric enrollment success rate: Suggested target > 90%; agency may define its own operational threshold

User Experience Metrics:

- Setup completion time: Suggested target < 10 minutes; agency may define its own operational threshold  
- Help desk calls related to WHfB: Monthly count  
- User satisfaction surveys: Quarterly collection  
- Abandonment rate during enrollment: Suggested target < 15%; agency may define its own operational threshold

Security Metrics:

- Suspected fraud incidents: Real-time monitoring  
- Confirmed unauthorized access: Immediate investigation  
- Policy violation attempts: Daily review  
- Security control effectiveness: Annual assessment

### Monitoring Implementation

- Configure Microsoft Entra ID sign-in logs analysis  
- Set up automated alerts for failure thresholds  
- Establish monthly metric reporting  
- Create user feedback collection mechanism

### Evaluation Process

- Monthly metric review meetings  
- Quarterly user experience assessment  
- Annual threat landscape evaluation  
- Bi-annual policy effectiveness review

## Support Sources Used for Proposed Edits

- Microsoft NIST AAL2 with Entra ID: [https://learn.microsoft.com/en-us/entra/standards/nist-authenticator-assurance-level-2](https://learn.microsoft.com/en-us/entra/standards/nist-authenticator-assurance-level-2){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
- Microsoft NIST AAL3 with Entra ID: [https://learn.microsoft.com/en-us/entra/standards/nist-authenticator-assurance-level-3](https://learn.microsoft.com/en-us/entra/standards/nist-authenticator-assurance-level-3){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
- Microsoft Intune WHfB enrollment policy: [https://learn.microsoft.com/en-us/intune/device-security/identity-protection/configure-tenant-wide-policy](https://learn.microsoft.com/en-us/intune/device-security/identity-protection/configure-tenant-wide-policy){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
- Microsoft Intune Identity Protection / Account Protection settings: [https://learn.microsoft.com/en-us/intune/device-security/identity-protection/ref-settings](https://learn.microsoft.com/en-us/intune/device-security/identity-protection/ref-settings){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
- Microsoft phishing-resistant passwordless deployment guidance: [https://learn.microsoft.com/en-us/entra/identity/authentication/how-to-deploy-phishing-resistant-passwordless-authentication](https://learn.microsoft.com/en-us/entra/identity/authentication/how-to-deploy-phishing-resistant-passwordless-authentication){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
- Microsoft Entra hybrid joined devices: [https://learn.microsoft.com/en-us/entra/identity/devices/concept-hybrid-join](https://learn.microsoft.com/en-us/entra/identity/devices/concept-hybrid-join){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
- NIST SP 800-63B Table 4: [https://pages.nist.gov/800-63-4/sp800-63b.html\#table-4](https://pages.nist.gov/800-63-4/sp800-63b.html\#table-4){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}


