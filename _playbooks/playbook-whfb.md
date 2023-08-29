---
layout: page
collection: playbooks
title: Windows Hello for Business Playbook
pubdate: 2023-06
type: Markdown
permalink: /playbooks/whfb/
description: Windows Hello for Business (WHfB) is a playbook to guide administrators through planning, configuring, testing, and implemention. 
sidenav: playbooks
sticky_sidenav: true

subnav:
  - text: Why Windows Hello for Business
    href: '#why-windows-hello-for-business'
  - text: Prerequisites
    href: '#prerequisites'
  - text: Prepare users to use WHfB
    href: '#prepare-users-to-use-windows-hello'
  - text: Policy configuration
    href: '#whfb-policy-configuration'
  - text: Device enrollment configuration steps
    href: '#whfb-device-enrollment-configuration-steps'
  - text: Device configuration profile steps
    href: '#whfb-device-configuration-profile-steps'
  - text: User experience
    href: '#whfb-user-experience'
  - text: First-time setup for new device/PIN creation
    href: '#first-time-setup-for-new-devicepin-creation'
  - text: Microsoft Authenticator Setup for iOS and Android
    href: '#windows-hello-for-business-microsoft-authenticator-setup-for-ios-and-android'
  - text: Fingerprint biometric setup
    href: '#windows-fingerprint-biometric-setup'
  - text: Security key setup
    href: '#windows-security-key-setup'
  - text: WHfB FAQs
    href: '#windows-hello-for-business-faqs'

---

Version 1.1<br>
August 14, 2023

<img src="{{site.baseurl}}/assets/img/logo-gsa.png" width="64" height='64' align="left" alt="U.S. General Services Administration Logo">
<br><br>

| Version Number | Date | Change Description |
| :----------: | :-------: | -------- |
| 1.1 | 08/14/2023 | Remove security key as an option. Add a "why" section and lessons learned. |
| 1.0 | 05/25/2023 | Initial Draft. |

The purpose of this playbook is to guide ICAM program managers and Entra ID administrators through planning, configuring, testing, and implementing a **Windows Hello for Business (WHfB) configuration when devices are cloud-joined**. WHfB also allows design for hybrid-joined devices. Hybrid-joined relies on either a 3rd party mobile device manager or Windows devices managed through an on-premise Active Directory. This configuration can be more complex and architecture-specific. Due to this, the playbook only covers a cloud-join configuration. WHfB offers two-factor authentication by combining a device authenticator (something you have) and either a PIN (something you know) or a biometric (something you are).

# Why Windows Hello for Business

Windows Hello for Business is a phishing-resistant FIDO2 platform authenticator native to Azure AD that does not require additional hardware or software. It is an alternative authenticator for use cases where using PIV is impractical. An agency could also develop a Derived PIV solution for WHfB requiring PIV authentication before registering WHfB. Some everyday use cases where PIV is impractical or unavailable may include the following:

1. Agency staff completing a fitness determination and eligible to begin work. However, issuing a PIV card may take weeks or months due to supply chain issues or proximity to a PIV issuance station.
2. Agency staff who've lost or damaged their PIV card and need a temporary authenticator until they can get a new PIV card.
3. Short-term staff who are not eligible for a PIV card.
4. Mobile or personal device access where using a smart card or Derived PIV is impractical due to form factor, technology, or cost limitations.

Traditionally in these scenarios, agencies leverage a policy exception process where the exception authenticator is either a time-limited username and password or a One-Time Pin. Unfortunately, these exception authenticators are susceptible to sophisticated phishing attacks, which can convincingly spoof official applications and involve dynamic user interaction. Users can be fooled into providing a one-time code or responding to a security prompt that grants the attacker account access. These attacks can be fully automated and operate cheaply at a significant scale.

# Lessons Learned from FIDO2 Community of Action

The FIDO2 Community of Action is an Office of Management and Budget initiative to help agencies rapidly replace exception authenticators with a phishing-resistant alternative either as an alternative or a backup authenticator. The most common authenticators piloted by the CoA agencies include WHfB, FIDO2 security keys, and Derived PIV on a government mobile device or a FIDO2 security key. For common questions with WHfB, see the FAQs. Below is a list of lessons learned from CoA agencies in the piloting and production use of WHfB.

1. Depending on the size of your agency, the prerequisites to using WHfB could be a major technology shift. The most time-intensive activity includes migrating device management to Azure AD or a hybrid Azure join, which also means becoming comfortable with leveraging Azure group policies over traditional Microsoft Group Policy Object.
2. Migrating to a complete cloud Azure configuration with Azure joined devices is possible for agencies with a small on-premise Active Directory footprint. This alleviates the risk of Active Directory vulnerabilities, but agencies must ensure they have the right talent and understanding of Azure AD operations and constraints.
3. Most agencies have adequate licensing (usually E3 or E5) to leverage conditional access policies and automated device enrollment. It is not required to use WHfB but does help with other security priorities to integrate device-level signals and better user experience.
4. Once enabled, WHfB provides a more natural authentication experience when using biometrics. Biometrics requires a compatible Windows device. Communicate with employees and unions on how biometrics are used. Biometrics are only stored on the device and not used for other purposes.
5. WHfB is only supported on Windows devices as of June 16th, 2023. Only security keys are supported for phishing-resistant MFA on mobile devices to Azure.

## About Windows Hello for Business

Windows Hello for Business distinctly differs from the consumer version of Windows Hello.

From Microsoft, "Windows Hello represents the biometric framework provided in Windows. Windows Hello lets users use biometrics to sign in to their devices by securely storing their user name and password and releasing it for authentication when they successfully identify themselves using biometrics. Windows Hello for Business uses asymmetric keys protected by the device's security module that requires a user gesture (PIN or biometrics) to authenticate."

WHfB is also separate from Certificate-Based Authentication and security keys.

### Windows Hello for Business Sign-in Options

The available sign-in options for Windows Hello for Business include the following:

- Facial recognition
- Fingerprint recognition
- PIN (for use as a backup in case the biometric authentication fails or in the absence of camera/fingerprint scanning technology)

WHfB PINs may seem similar to passwords at first glance. However, there is a fundamental difference: PINs typically are local to the device and not transmitted over the internet, unlike a Microsoft 365 or Azure Active Directory (Azure AD) User Principal Name and Password combination. Device PIN creation establishes a trusted relationship with the identity provider (Azure AD). It also creates an asymmetric key pair that is used for authentication. Transmittal of the public key to the authentication server completes the sign-in request. When paired with a Trusted Platform Module (TPM) chip, tamper protection is enabled. This feature protects the key material from attackers and locks the device after too many incorrect PIN attempts. Biometric data is stored locally on the device and never sent to external devices or servers. As stated previously, authentication occurs via the asymmetric key. Users can delete or remove their biometric information by visiting **Settings** \> **Accounts** \> **Sign-in options.**

# Assumptions
This playbook assumes that devices are cloud-only joined and that no hybrid configuration with Active Directory exists. Hybrid deployments come in multiple designs with constraints based on on-premise components. This playbook is meant to support agencies in implementing the Fedearl Zero Trust Strategy action steps for application action and reducing the use of network authentication. Deploying Windows Hello for Business in a [hybrid environment](https://learn.microsoft.com/en-us/windows/security/identity-protection/hello-for-business/hello-identity-verification#hybrid-deployments){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} comes in four configurations driven by how devices are managed. 
1. Cloud kerberos trust
2. Key trust
3. Certificate trust, mixed managed
4. Certificate Trust, modern managed

These hybrid deployments require configuring Azure AD Connect, Azure AD Kerberos and deploying either a Cloud Trust Device Configuration Profile in Microsoft Intune (Intune), a Key trust deployment in on-premises Active Directory, or a hybrid certificate trust deployment, which requires Active Directory Federated Services (ADFS). Of these three hybrid options, the Cloud Kerberos trust deployment is recommended.

# Prerequisites
For cloud-joined deployment, this playbook assumes that:
- all devices have a TPM 2.0 module that complies with Federal Information Processing Standards (FIPS). All devices should be on Windows 10 version 1709 (or later) or Windows 11. Preferably, all devices should be Windows 10 version 1903 or later.
- Devices are equipped with an infrared camera or fingerprint reader for biometric authentication.
- Microsoft Intune (Intune) is the Windows MDM solution.
- Not required, but it's preferable that all users have an Azure AD Premium P1 or P2 subscription, which is needed for automatic MDM enrollment when the device joins Azure AD. Azure AD Premium P1 licenses also grant access to Azure AD Multi-Factor Authentication (MFA) through Conditional Access policies.

# Technology and terms

See this Microsoft primer on [Introduction to device identity and join types](https://learn.microsoft.com/en-us/azure/active-directory/devices/overview){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

**Join type**

Join type refers to how devices are associated with Azure AD. For a device to authenticate to Azure AD, it must be registered or joined.

Registering a device to Azure AD enables you to manage a device's identity. When a device is registered, Azure AD device registration provides the device with an identity that is used to authenticate the device when a user signs in to Azure AD. You can use the identity to enable or disable a device.

When combined with a mobile device management (MDM) solution such as Microsoft Intune, the device attributes in Azure AD are updated with additional information about the device. This feature allows you to create conditional access rules that enforce access from devices to meet your standards for security and compliance. For more information on enrolling devices in Microsoft Intune, see [Enroll devices for management in Intune](https://learn.microsoft.com/en-us/mem/intune/enrollment/device-enrollment-manager-enroll){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} in Intune.

Joining a device is an extension to registering a device. It provides you with all the benefits of registering a device and changes the local state of a device. Changing the local state enables users to sign in to a device using an organizational, work, or school account instead of a personal account.

**Azure AD registration**

Azure AD registered devices support the bring your own device (BYOD) scenario. In BYOD, a user can access your organization's Azure AD controlled resources using a personal device.

Learn more about Azure AD registered devices [here](https://learn.microsoft.com/en-us/azure/active-directory/devices/concept-azure-ad-register){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}{:aria-label="Learn more about Azure AD registered devices here"}.

**Azure AD join**

Azure AD join is intended for organizations that desire to be cloud-first or cloud-only. There's no restriction on the size or type of organizations that can deploy Azure AD join. Azure AD join also works in a hybrid environment and can enable access to on-premises applications and resources.

Learn more about Azure AD joined devices [here](https://learn.microsoft.com/en-us/azure/active-directory/devices/concept-azure-ad-join){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}{:aria-label="Learn more about Azure AD joined devices"}.

**Hybrid Azure AD join**

For more than a decade, organizations have used the domain join to their on-premises Active Directory to enable:

- IT departments to manage work-owned devices from a central location.
- Users to sign in to their devices with their Active Directory work or school accounts.

Typically, organizations with an on-premises footprint rely on imaging methods to provision devices, and they often use or group policy to manage them.

If your environment has an on-premises AD footprint and you want to benefit from the capabilities provided by Azure AD, you can implement hybrid Azure AD joined devices. These devices are joined to both your on-premises Active Directory and your Azure AD.

Learn more about hybrid Azure AD joined devices [here](https://learn.microsoft.com/en-us/azure/active-directory/devices/concept-azure-ad-join-hybrid){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}{:aria-label="Learn more about hybrid Azure AD joined devices"}.

**Mobile device management**

Device management enables organizations to administer and maintain devices, including virtual machines, physical computers, mobile devices, and IoT devices. Microsoft Intune is the mobile device management (MDM) solution for the Microsoft 365 platform.

# Prepare users to use Windows Hello

### Using Windows Hello and biometrics

If organization policy allows, users can employ biometrics (fingerprint and facial recognition) with WHfB, if the hardware supports it. Figure 1 displays the sign-in options available with WHfB.

**Figure 1: Windows Hello Sign-in Options**

![Figure 1: Windows Hello Sign-in Options]({{site.baseurl}}/assets/playbooks/whfb/01-Windows-Hello-Sign-In-Options.png)

In establishing a policy requiring WHfB use in the workplace, you must educate users on how to use WHfB.

After enrolling in WHfB, users should use their gesture (such as a PIN or fingerprint) for access to corporate resources. This gesture is only valid on the enrolled device.

Although the organization may require users to change their Active Directory or Azure AD account password at regular intervals, password changes will not affect WHfB.

Individuals using virtual or physical smart cards for authentication can use their virtual smart card to verify their identity when they set up WHfB.

### WHfB and password changes

The WHfB PIN or biometric gesture you establish at enrollment is specific to that device. You can, however, set up WHfB for the same account on multiple devices. If WHfB is not deployed and the password for that account changes, you must provide the new password on each device to continue WHfB use.

**Example 1**

Let's suppose you have set up a PIN for your Microsoft account on  **Device A**. You use your PIN to sign in on  **Device A**  and then change the password for your Microsoft account. Since you were using  **Device A**  when you changed your password, the PIN on  **Device A**  will continue to work with no other action on your part.

**Example 2**

Suppose you sign in on  **Device B**  and change your password for your Microsoft account. The next time that you try to sign in on  **Device A**  using your PIN, sign-in will fail because the **Device A** account credentials will be outdated.

**How to update WHfB after you change your password on another device**

1. When you try to sign in using your PIN or biometric, you'll see the following message:  **Your password was changed on a different device. You must sign in to this device once with your new password; then you can sign in with your PIN.**
2. Select  **OK.**
3. Select  **Sign-in options.**
4. Select  **Password.**
5. Sign in with new password.
6. The next time that you sign in, you can select  **Sign-in options \> PIN**  to resume using your PIN.

# WHfB policy configuration

Windows Hello for Business can be enabled multiple ways through Microsoft Intune. The first method is through Windows Device Enrollment. This method can be used for devices that are Azure AD joined but have not yet enrolled in Intune. The second method, Device Configuration Profile, is used for devices already enrolled in Intune.

## WHfB device enrollment configuration steps

1. Open Microsoft Intune Admin Center. At the time of this writing, the URLs provided are correct. (In late 2023, the Intune Admin Center URL will be [https://intune.microsoft.com](https://intune.microsoft.com/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. Microsoft is already making this change, so organizations can use both of the following URLs to access the Microsoft Intune Admin Center.)  

   a. For commercial tenants, the URLs are:
     1. [https://endpoint.microsoft.com](https://endpoint.microsoft.com){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
     2. [https://intune.microsoft.com](https://intune.microsoft.com){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
     
   b. For Microsoft 365 Government Community Cloud High (GCC High) tenants, the URLs are
      1. [https://endpoint.microsoft.us](https://endpoint.microsoft.us){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
      2. [https://intune.microsoft.us](https://intune.microsoft.us){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
    
2. From the **Devices \| Overview** page, select **Enroll devices** from the middle navigation pane.

    Figure 2 provides a screenshot of the Intune Devices | Overview page displaying the locale of **Enroll devices**.

    **Figure 2: Intune Devices \| Overview Page**

    ![Figure 2: Intune Devices \| Overview Page]({{site.baseurl}}/assets/playbooks/whfb/02-Intune-WHfB-Enrollment.png)

3. By default, **Windows enrollment** is preselected on the **Enroll devices** page. Choose the button named **Windows Hello for Business.** Figure 3 displays the Intune Windows enrollment page.

    **Figure 3: Intune Windows Enrollment Page**

    ![Figure 3: Intune Windows Enrollment Page]({{site.baseurl}}/assets/playbooks/whfb/03-Intune-WHfB-Enrollment.png)

4. A new blade appears on the right when Windows Hello for Business is selected. WHfB enrollment by default is **Enabled** and assigned to **All users**. This assignment cannot be changed and will always remain scoped to all users. In order to limit the scope of WHfB, disable this enrollment policy and instead proceed with deploying WHfB through a device configuration profile (detailed in the next section). Device configuration profiles can be assigned to user or device groups, and they can be used as a proof of concept, pilot, or gradual rollout of WHfB throughout the organization.

Settings for this policy can be **Enabled, Not configured, or Disabled,** as shown in Figure 4. When not configured is selected, this setting acts as Disabled.

**Figure 4: Windows Hello for Business Enrollment Policy Settings**

![Figure 4: Windows Hello for Business Enrollment Policy Settings]({{site.baseurl}}/assets/playbooks/whfb/04-Intune-WHfB-Enrollment-Policy.png)

After enabling the policy, a series of policy choices must be made. Recommended settings are as follows:

<ol type="a">
  <li>
    <strong>Use a Trusted Platform Module</strong>: Required
    <ol type="i">
      <li>TPM 2.0 is required.</li>
      <li>This is a requirement of the Windows 10/11 Defense Information Systems Agency's Security Technical Implementation Guide (DISA STIG) baseline.</li>
    </ol>
  </li>
  <li>
    <strong>Minimum PIN length</strong>: 6
    <ol type="i">
      <li>This is a requirement of the Windows 10/11 DISA STIG baseline.</li>
    </ol>
  </li>
  <li>
    <strong>Maximum PIN length</strong>: 127
  </li>
  <li>
    <strong>Lowercase letters in PIN</strong>: Allowed
  </li>
  <li>
    <strong>Uppercase letters in PIN</strong>: Allowed
  </li>
  <li>
    <strong>Special characters in PIN</strong>: Allowed
    <ol type="i">
      <li>Requiring letters or special characters in a PIN may make users think it's a password rather than a PIN. They may reuse a device password from another cloud application.</li>
      <li>It is recommended to leave the PIN as a numeric PIN.</li>
    </ol>
  </li>
  <li>
    <strong>PIN expiration (days)</strong>: Never
  </li>
  <li>
    <strong>Remember PIN history</strong>: No
  </li>
  <li>
    <strong>Allow biometric authentication</strong>: Yes
  </li>
  <li>
    <strong>Use enhanced anti-spoofing, when available</strong>: Yes
    <ol type="i">
      <li>This is a requirement of the Windows 10/11 DISA STIG baseline.</li>
      <li>This setting only applies to Intune enrolled and Azure AD joined devices.</li>
      <li>This setting applies to biometric facial recognition.</li>
      <li>What is anti-spoofing for facial recognition? An attacker with physical access to a Windows 10/11 device with WHfB set as the authentication method can use an Infrared (IR) photo of the user's face, save the frames to a custom USB device, and plug the USB into the computer. This tactic bypasses the built-in camera, and WHfB will search for frames on the external USB.</li>
      <li>Microsoft fixed this vulnerability in Update KB 5005478 (Windows Hello CVE-2021-34466).</li>
      <li>Read more <a class="usa-link usa-link--external" href="https://www.cyberark.com/resources/threat-research-blog/bypassing-windows-hello-without-masks-or-plastic-surgery" aria-label="Read more on the CyberArk website.">here</a> on the CyberArk website.</li>
    </ol>
  </li>
  <li>
    <strong>Allow phone sign-in</strong>: Yes
    <ol type="i">
      <li>Only applies to portable devices that are configured to accept the WHfB PIN. Bluetooth is required as is additional <a class="usa-link usa-link--external" href="https://www.inthecloud247.com/enable-windows-hello-multifactor-device-unlock-with-microsoft-intune/">configuration of the Policy CSP</a><strong>PassportforWork</strong>.</li>
    </ol>
  </li>
  <li>
    <strong>Use security keys for sign-in</strong>: Not configured
  </li>
  <li>
    <strong>Save</strong> the policy and begin enrolling devices in Intune via <a class="usa-link usa-link--external" href="https://endpoint.microsoft.us/#view/Microsoft_AAD_IAM/UpdateMdmAppBlade/objectId/f812b2e7-451b-4ca4-a945-586cf2f466f1/appId/0000000a-0000-0000-c000-000000000000/appDisplayName/Microsoft%20Intune/isOnPrem~/false">automatic enrollment settings</a>.
  </li>
</ol>  

Figures 5 and 6 depict the policy choices that must be made when a WHfB policy is enabled.

**Figure 5: Windows Hello for Business Enrollment Policy Settings 1**

![Figure 5: Windows Hello for Business Enrollment Policy Settings 1]({{site.baseurl}}/assets/playbooks/whfb/05-Intune-WHfB-Enrollment-Policy-settings1.png)

<br><br>

**Figure 6: Windows Hello for Business Enrollment Policy Settings 2**

![Figure 6: Windows Hello for Business Enrollment Policy Settings 2]({{site.baseurl}}/assets/playbooks/whfb/06-Intune-WHfB-Enrollment-Policy-settings2.png)

## WHfB device configuration profile steps

1. Select  **Devices**  on the leftmost navigation pane.
2. Choose **Configuration profiles**  from the middle navigation blade.
3. Select  **Create profile**.
4. Set **Platform** : **Windows 10 and later**.
5. Set the **Profile type** : Select  **Templates**  \>  **Identity protection**.
6. Select  **Create**.

Figure 7 depicts steps 1 through 6 for creating a device configuration profile.

**Figure 7: Windows Device Configuration Profile Creation**

![Figure 7: Windows Device Configuration Profile Creation]({{site.baseurl}}/assets/playbooks/whfb/07-Intune-WHfB-ConfigProfile.png)

<ol start="7">
    <li>As illustrated in Figure 8, enter the following properties in  <strong>Basics</strong> :
    <ol type="a">    
        <li>Enter <strong>Name</strong> : Enter a descriptive name for the new profile. Name your policies so you can easily identify them later.</li>  
        <li><strong>Description</strong> : Enter a description for the profile.</li>  
        <li>Select  <strong>Next</strong>  to continue.</li>
    </ol>  
    </li>
</ol>  

**Figure 8: Windows Device Configuration Profile Name and Description**

![Figure 8: Windows Device Configuration Profile Name and Description]({{site.baseurl}}/assets/playbooks/whfb/08-Intune-WHfB-ConfigProfile-name.png)

In  **Configuration settings** (see Figure 9), configure the following settings:  

<ol type="a">
  <li>
    <strong>Configure Windows Hello for Business</strong>: Enabled
  </li>
  <li>
    <strong>Minimum PIN length</strong>: 6
    <ol type="i">
      <li>This is a requirement of the Windows 10/11 DISA STIG baseline.</li>
    </ol>
  </li>
  <li>
    <strong>Maximum PIN length</strong>: 127
  </li>
  <li>
    <strong>Lowercase letters in PIN</strong>: Allowed
  </li>
  <li>
    <strong>Uppercase letters in PIN</strong>: Allowed
  </li>
  <li>
    <strong>Special characters in PIN</strong>: Allowed
  </li>
  <li>
    <strong>PIN expiration (days)</strong>: Never
  </li>
  <li>
    <strong>Remember PIN history</strong>: No
  </li>
  <li>
    <strong>Enable PIN recovery</strong>: Enable
  </li>
  <li>
    <strong>Use a Trusted Platform Module (TPM)</strong>: Enable
    <ol type="i">
      <li>This is a requirement of the Windows 10/11 DISA STIG baseline.</li>
    </ol>
  </li>
  <li>
    <strong>Allow biometric authentication</strong>: Enable
  </li>
  <li>
    <strong>Use enhanced anti-spoofing, when available</strong>: Enable
    <ol type="i">
      <li>This is a requirement of the Windows 10/11 DISA STIG baseline.</li>
    </ol>
  </li>
  <li>
    <strong>Certificate for on-premise resources</strong>: Not configured
  </li>
  <li>
    <strong>Use security keys for sign-in</strong>: Not configured
  </li>
</ol>

Select  **Next**  to continue.

**Figure 9: Windows Device Configuration Policy Settings**

![Figure 9: Windows Device Configuration Policy Settings]({{site.baseurl}}/assets/playbooks/whfb/09-Intune-WHfB-ConfigProfile-settings.png)

<ol start="8">
  <li>
    In <strong>Assignments</strong> (see Figure 10), select the user or device group(s) that will receive this profile. When the phased implementation is near completion, simplify the assignments by removing the existing user or device groups and select <strong>Add all users</strong> or <strong>Add all devices</strong> instead.
    <ol type="a">
      <li>
        <strong>Note:</strong> To assign multiple users to a device, specify that the WHfB policy be applied to devices. If the policy is applied to users, only one user can be provisioned to a device. If all devices will be assigned to individual users, then user groups will be sufficient.
      </li>
      <li>
        Under <strong>Included Groups</strong>, select the <strong>Add Groups</strong> button. A blade will appear on the right to choose one or multiple groups.
      </li>
      <li>
        Select your groups and click <strong>Select</strong> at the bottom. The group will appear under <strong>Included Groups</strong>.
      </li>
      <li>
        Repeat for <strong>Excluded Groups</strong>, specifying any groups you want to exclude from WHfB.
      </li>
      <li>
        Select <strong>Next</strong> to continue with <strong>Applicability Rules</strong>.
      </li>
    </ol>
  </li>
</ol> 

**Figure 10: Windows Device Configuration Group Assignment**

![Figure 10: Windows Device Configuration Group Assignment]({{site.baseurl}}/assets/playbooks/whfb/10-Intune-WHfB-ConfigProfile-assignments.png)

<ol start="9">
    <li>In  <strong>Applicability Rules</strong> (see Figure 11), use the  <strong>Rule</strong>,  <strong>Property</strong>, and  <strong>Value</strong>  options to define how this profile applies within assigned groups. Intune applies the profile to devices that meet the rules you enter.</li>  
</ol>

**Figure 11: Windows Device Configuration Applicability Rules**

![Figure 11: Windows Device Configuration Applicability Rules]({{site.baseurl}}/assets/playbooks/whfb/11-Intune-WHfB-ConfigProfile-applicability.png)

 <ol type="a">
  <li>
    Applicability rules for this profile are <strong>Assign profile if</strong> or <strong>Don't assign profile if</strong> (see Figure 12).
  </li>
  <li>
    The available properties are OS Edition (Windows 10/11 Education, Professional, Enterprise, Home, etc.).
  </li>
  <li>
    The OS version refers to a specific build number for Windows 10/11. For example: 10.0.10240, 10.0.19045, etc.
  </li>
  <li>
    Select <strong>Next</strong>.
  </li>
</ol>  

**Figure 12: Windows Device Configuration Applicability Rules Review**

![Figure 12: Windows Device Configuration Applicability Rules Review]({{site.baseurl}}/assets/playbooks/whfb/12-Intune-WHfB-ConfigProfile-applicability2.png)

<ol start="10">
    <li>In <strong>Review + create</strong> (see Figure 13), review your settings. Select  <strong>Create</strong> to save your changes; the profile is assigned. The policy is also shown in the profiles list from step 2 in this section.</li>
</ol>

**Figure 13: Windows Hello for Business Configuration Profile Completion**

![Figure 13: Windows Hello for Business Configuration Profile Completion]({{site.baseurl}}/assets/playbooks/whfb/13-Intune-WHfB-ConfigProfile-review.png)


# WHfB user experience

This section details the user experience for setting up Windows Hello for Business. The minimum device requirements for fingerprint and facial recognition sensors can be found [here](https://learn.microsoft.com/en-us/windows/security/identity-protection/hello-for-business/hello-biometrics-in-enterprise#has-microsoft-set-any-device-requirements-for-windows-hello){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}{:aria-label="The minimum device requirements for fingerprint and facial recognition sensors can be found here"}.

By default, users will be prompted for facial recognition and PIN creation if biometric authentication is enabled. Fingerprints can be added later from the **Settings \> Accounts \> Sign-in options** menu.

## First time setup for new device/PIN creation

Enter the username and password for an Azure AD user on a Windows 10 or 11 device, as shown in Figure 14.

**Figure 14: Windows Sign-in**

![Figure 14: Windows Sign-in]({{site.baseurl}}/assets/playbooks/whfb/14-FirstTimeSetUp.png)

As shown in Figure 15, the user is prompted to set up WHfB.

**Figure 15: Windows Hello Setup Prompt**

![Figure 15: Windows Hello Setup Prompt]({{site.baseurl}}/assets/playbooks/whfb/15-WHfb-prompt.png)

The MFA challenge only occurs on the first sign-in to Windows when setting up Windows Hello. The user will receive a push notification or number-matching prompt on the Microsoft Authenticator mobile application. By default, Windows does not offer additional MFA with the Microsoft Authenticator app on Windows Sign-ins. Figure 16 shows the Microsoft Authenticator prompt.

**Figure 16: Microsoft Authenticator Request**

![Figure 16: Microsoft Authenticator Request]({{site.baseurl}}/assets/playbooks/whfb/16-WHfb-mfa.png)

To view Microsoft Authenticator application setup instructions, please follow this link to [Windows Hello for Business – Microsoft Authenticator Setup for iOS & Android](#windows-hello-for-business-microsoft-authenticator-setup-for-ios-and-android).

Based on the WHfB Enrollment or Identity Protection policy previously discussed, the PIN can be numeric or alphanumeric, with or without special characters. Figure 17 provides a screenshot of the PIN setup screen.

**Figure 17: Windows PIN Creation**

![Figure 17: Windows PIN Creation]({{site.baseurl}}/assets/playbooks/whfb/17-WHfB_1st_pin_setup.png)

Once the PIN is successfully created, the screen shown in Figure 18 will appear.

**Figure 18: Windows PIN Completion**

![Figure 18: Windows PIN Completion]({{site.baseurl}}/assets/playbooks/whfb/18-WHfB-allset.png)

After signing out once, WHfB is configured with a PIN (minimum requirement), as shown in Figure 19.

**Figure 19: Windows Sign-in with PIN**

![Figure 19: Windows Sign-in with PIN]({{site.baseurl}}/assets/playbooks/whfb/19-whfb_sign_out_experience.png)

# Windows Hello for Business: Microsoft Authenticator Setup for iOS and Android

## iOS - Microsoft Authenticator setup

[Download and install the Microsoft Authenticator app - Microsoft Support](https://support.microsoft.com/en-us/account-billing/download-and-install-the-microsoft-authenticator-app-351498fc-850a-45da-b7b6-27e523b8702a){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

1. Install the latest version of the Authenticator app for Apple iOS (see Figure 20). On your Apple iOS device, go to the App Store to [download and install the Authenticator app.](https://support.microsoft.com/en-us/account-billing/download-and-install-the-microsoft-authenticator-app-351498fc-850a-45da-b7b6-27e523b8702a){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

**Figure 20: iOS App Store Microsoft Authenticator Install**

![Figure 20: iOS App Store Microsoft Authenticator Install]({{site.baseurl}}/assets/playbooks/whfb/20-WHfB-iOS-SetUp.png)

<ol start="2">
    <li>Set up two-step verification on Authenticator. To secure your account, the Authenticator app can provide you with a code that provides additional verification. There is no need to wait for texts or calls. The following instructions ensure only you can access your information.</li>
    <li>Set up the Authenticator app (see Figure 21). After you install the Authenticator app, follow the steps below to add your account:
        <ol type="a">
            <li>Open the Authenticator app on your mobile device.</li> 
        </ol>
    </li>
</ol>
Select **Next** on your Windows device to begin the Microsoft Authenticator setup process.

**Figure 21: Windows and Microsoft Authenticator Setup**

![Figure 21: Windows and Microsoft Authenticator SetupFigure 21: Windows and Microsoft Authenticator Setup]({{site.baseurl}}/assets/playbooks/whfb/21-WHfB-iOS-MSAuth-Setup.png)

On your phone, select **Work or school account** , as shown in Figure 22.

**Figure 22: Microsoft Authenticator Work or School Account Selection**

![Figure 22: Microsoft Authenticator Work or School Account Selection]({{site.baseurl}}/assets/playbooks/whfb/22-WHfB-iOS-MSAuth-account.png)

Select **OK** when prompted to allow the camera to scan the QR code (see Figure 23). Doing so allows the Authenticator app to access the camera on your phone to scan QR codes for account setup.

**Figure 23: Microsoft Authenticator for iOS Allow Camera Access**

![Figure 23: Microsoft Authenticator for iOS Allow Camera Access]({{site.baseurl}}/assets/playbooks/whfb/23-WHfB-iOS-MSAuth-camera.png)

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Note:</h4>
    <p class="usa-alert__text"> The first time you set up the Microsoft Authenticator app, you might receive a prompt asking whether to allow the app to access your camera. You must select  <strong>Allow</strong> so the authenticator app can access your camera to take a picture of the QR code in the next step. If you don't allow camera access, you can still set up the Authenticator app, but you'll need to add the code information manually.</p>
  </div>
</div>

Select **Next**.

**Figure 24: Microsoft Authenticator for iOS Account Setup**

![Figure 24: Microsoft Authenticator for iOS Account Setup]({{site.baseurl}}/assets/playbooks/whfb/24-WHfB-iOS-MSAuth-next.png)

Point your camera at the QR code (see Figure 25) or follow the instructions provided in your account settings and click **Next** and **Allow** when prompted to allow the camera to scan the QR code.

**Figure 25: Microsoft Authenticator for iOS Scan QR Code**

![Figure 25: Microsoft Authenticator for iOS Scan QR Code]({{site.baseurl}}/assets/playbooks/whfb/25-WHfB-iOS-MSAuth-qrcode.png)

Select **Allow** (see Figure 26) to allow notifications from the Microsoft Authenticator app.

**Figure 26: Microsoft Authenticator for iOS Allow Notifications**

![Figure 26: Microsoft Authenticator for iOS Allow Notifications]({{site.baseurl}}/assets/playbooks/whfb/26-WHfB-iOS-MSAuth-qrcode-scan.png)

A notification will be sent to your device. Tap **Approve** when the notification appears, as shown in Figure 27. This process will be the means for authenticating sign-ins from now on.

**Figure 27: Microsoft Authenticator for iOS Approve Sign-in**

![Figure 27: Microsoft Authenticator for iOS Approve Sign-in]({{site.baseurl}}/assets/playbooks/whfb/27-WHfB-iOS-MSAuth-appsignin.png)

When the screen shown in Figure 28 appears on your computer, click **Next.**

**Figure 28: Microsoft Authenticator Notification Approved**

![Figure 28: Microsoft Authenticator Notification Approved]({{site.baseurl}}/assets/playbooks/whfb/28-WHfB-iOS-MSAuth-notifapp.png)

Select  **Next** after verifying the 6-digit code, as illustrated in Figure 29.

**Figure 29: Multi-Factor Authentication SMS One-time passcode**

![Figure 29: Multi-Factor Authentication SMS One-time passcode]({{site.baseurl}}/assets/playbooks/whfb/29-WHfB-iOS-MSAuth-smsotp.png)

Select **Next** when you receive the verification message shown in Figure 30.

**Figure 30: Multi-Factor Authentication SMS Completed**

![Figure 30: Multi-Factor Authentication SMS Completed]({{site.baseurl}}/assets/playbooks/whfb/30-WHfB-iOS-MSAuth-smsverif.png)

Congratulations! Multi-Factor Authentication for Windows Hello for Business is set up when the screen shown in Figure 31 appears. Select  **Done.**

**Figure 31: Multi-Factor Authentication Setup Complete**

![Figure 31: Multi-Factor Authentication Setup Complete]({{site.baseurl}}/assets/playbooks/whfb/31-WHfB-iOS-MSAuth-complete.png)

## Android – Microsoft Authenticator setup


Download and install the app:

1. Install the latest version of the Authenticator app for Google Android.  

    **Figure 32: Microsoft Authenticator for Android Account Setup**

    ![Figure 32: Microsoft Authenticator for Android Account Setup]({{site.baseurl}}/assets/playbooks/whfb/32-WHfB-Android-MSAuth.png)

2. On your Android device, go to Google Play to [download and install the Authenticator app](https://play.google.com/store/search?q=microsoft+authenticator&c=apps){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}.  
3. **Install, download,** and **open the Microsoft Authenticator** app from the **Google Play Store** (see Figure 33).

    **Figure 33: Google Play Store Microsoft Authenticator Install**

    ![Figure 33: Google Play Store Microsoft Authenticator Install]({{site.baseurl}}/assets/playbooks/whfb/33-WHfB-Android-MFA-appinstall.png)

4. Select **Add account** , as shown in Figure 34.

    **Figure 34: Microsoft Authenticator for Android Add Account**

    ![Figure 34: Microsoft Authenticator for Android Add Account]({{site.baseurl}}/assets/playbooks/whfb/34-WHfB-Android-MFA-addacct.png)

5. Select **Work or school account** (seeFigure 35).

    **Figure 35: Microsoft Authenticator for Android Account Type Selection**

    ![Figure 35: Microsoft Authenticator for Android Account Type Selection]({{site.baseurl}}/assets/playbooks/whfb/35-WHfB-Android-MFA-accttype.png)

6. Choose **Scan a QR code** (see Figure 36).

    **Figure 36 : Microsoft Authenticator for Android Work or School Account Setup**

    ![Figure 36 : Microsoft Authenticator for Android Work or School Account Setup]({{site.baseurl}}/assets/playbooks/whfb/36-WHfB-Android-MFA-qrcode.png)

    **Note** : The first time you set up the Microsoft Authenticator app, you might receive a prompt asking whether to allow the app to take pictures and record video. You must select  **Allow**  so the Authenticator app can access your camera to take a picture of the QR code in the next step. If you don't allow camera access, you can still set up the Authenticator app, but you'll need to add the code information manually.

7. Select **Next** to proceed with the QR code scan (see Figure 37).

    **Figure 37: Microsoft Authenticator for Android Account Setup**

    ![Figure 37: Microsoft Authenticator for Android Account Setup]({{site.baseurl}}/assets/playbooks/whfb/37-WHfB-Android-MSAuth-next.png)

8. Microsoft Authenticator displays a QR Code (see Figure 38). Using the QR scanner on your device, scan the QR code shown. Then, click **Next**.

    **Figure 38: Microsoft Authenticator for Android QR Code Scan**

    ![Figure 38: Microsoft Authenticator for Android QR Code Scan]({{site.baseurl}}/assets/playbooks/whfb/38-WHfB-Android-MSAuth-qrcode.png)

9. Use the phone camera to scan the QR code, as shown in Figure 39.

    **Figure 39: Microsoft Authenticator for Android Scan QR Code Camera View**

    ![Figure 39: Microsoft Authenticator for Android Scan QR Code Camera View]({{site.baseurl}}/assets/playbooks/whfb/39-WHfB-Android-MSAuth-qrcode2.png)

    The Microsoft Authenticator app will display **Account added successfully** once the scan is finished, as shown in Figure 40.

    **Figure 40: Microsoft Authenticator for Android Account Added**

    ![Figure 40: Microsoft Authenticator for Android Account Added]({{site.baseurl}}/assets/playbooks/whfb/40-WHfB-Android-MSAuth-acctadd.png)

10. Respond **Approve** to the push notification to approve the sign-in (see Figure 41).

    **Figure 41: Microsoft Authenticator for Android Push Notification**

    ![Figure 41: Microsoft Authenticator for Android Push Notification]({{site.baseurl}}/assets/playbooks/whfb/41-WHfB-Android-MSAuth-pushnotif.png)

11. The screen depicted in Figure 42 appears after tapping **Approve** on your device. Click **Next** on your computer.

    **Figure 42: Microsoft Authenticator for Android App Notification Approved**

    ![Figure 42: Microsoft Authenticator for Android App Notification Approved]({{site.baseurl}}/assets/playbooks/whfb/42-WHfB-Android-MSAuth-notifapp.png)

    Enter a phone number when prompted to receive text message notifications to ensure your security information is up to date.

    On the  **Phone** page, type the phone number for your mobile device. Choose  **Text me a code**. Then select  **Next**.

12. Enter a valid phone number to configure a one-time passcode as a backup authentication method (see Figure 43). Click **Next** to receive a text message containing the one-time passcode.

    **Figure 43: Multi-Factor Authentication Phone Number Setup**

    ![Figure 43: Multi-Factor Authentication Phone Number Setup]({{site.baseurl}}/assets/playbooks/whfb/43-WHfB-Android-MSAuth-smsstart.png)

13. Enter the one-time passcode from the text message (illustrated in Figure 44). Then select **Next**.

    **Figure 44: Multi-Factor Authentication SMS One-Time Passcode**

    ![Figure 44: Multi-Factor Authentication SMS One-Time Passcode]({{site.baseurl}}/assets/playbooks/whfb/44-WHfB-Android-MSAuth-smsotp.png)

    Your security information will now be updated and you can use text messaging to verify your identity when using two-step verification or password reset.

14. SMS verification is complete when the screen shown in Figure 45 appears. Select **Next**.

    **Figure 45: Multi-Factor Authentication SMS Complete**

    ![Figure 45: Multi-Factor Authentication SMS Complete]({{site.baseurl}}/assets/playbooks/whfb/45-WHfB-Android-MSAuth-smscomp.png)

15. Congratulations! Multi-factor authentication has now been set up (see Figure 46). Select  **Done.**

    **Figure 46: Multi-Factor Authentication Complete**

    ![Figure 46: Multi-Factor Authentication Complete]({{site.baseurl}}/assets/playbooks/whfb/46-WHfB-Android-MSAuth-complete.png)

## Windows infrared camera biometric set-up

Facial recognition can be set up during Windows Hello enrollment or after by visiting **Settings \> Accounts \> Sign-in options \> Facial recognition**. To learn more about Windows Hello facial recognition and how the infrared camera prevents spoofing click [here](https://learn.microsoft.com/en-us/windows-hardware/design/device-experiences/windows-hello-face-authentication#benefits-of-near-infrared){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}{:aria-label="learn more about Windows Hello facial recognition and how the infrared camera prevents spoofing"}.

Choose **Get started** to begin the facial recognition process (see Figure 47).

**Figure 47: Windows Hello for Business Facial Recognition Setup**

![Figure 47: Windows Hello for Business Facial Recognition Setup]({{site.baseurl}}/assets/playbooks/whfb/47-WHfB-Camera-start.png)

The user will receive a prompt to center their face in the camera (see Figure 48). A square will appear around the user's face. The user must keep their eyes on the camera during this time. The square will highlight green around the perimeter of the square as Windows records and maps the user's face.

**Figure 48: Windows Hello for Business Facial Recognition Scan**

![Figure 48: Windows Hello for Business Facial Recognition Scan]({{site.baseurl}}/assets/playbooks/whfb/48-WHfB-Camera-facescan.png)

Once the facial scanning is complete, the user will be prompted to improve recognition by taking another photo with or without glasses, if they have glasses (see Figure 49).

**Figure 49: Windows Hello for Business Facial Recognition Complete**

![Figure 49: Windows Hello for Business Facial Recognition Complete]({{site.baseurl}}/assets/playbooks/whfb/49-WHfB-Camera-finish.png)

## Windows fingerprint biometric setup

Increasingly, device vendors are adding built-in fingerprint sensors to keyboards. Sample keyboard layouts with built-in fingerprint sensors can be found [here](https://learn.microsoft.com/en-us/windows-hardware/design/device-experiences/windows-hello-fingerprint-authentication#sample-keyboard-layouts){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}{:aria-label="Sample keyboard layouts with built-in fingerprint sensors can be found here"}. If a device does not have a built-in fingerprint sensor, a USB fingerprint sensor can be used with Windows Hello for Business.

Fingerprint setup can occur during Windows Hello enrollment or afterward by visiting **Settings \> Accounts \> Sign-in options \> Fingerprint recognition**. Multiple fingerprints can be registered with Windows Hello.

Begin by touching your thumb or another finger to the fingerprint sensor, as shown in Figure 50.

**Figure 50: Windows Hello for Business Fingerprint Setup**

![Figure 50: Windows Hello for Business Fingerprint Setup]({{site.baseurl}}/assets/playbooks/whfb/50-WHfB-Fingerprint-start.png)

Follow the prompts to lift your finger and touch the sensor again in order to map the entire print (see Figures 51 through 54).

**Figure 51: Windows Hello for Business Fingerprint Scan 1**

![Figure 51: Windows Hello for Business Fingerprint Scan 1]({{site.baseurl}}/assets/playbooks/whfb/51-WHfB-Fingerprint-scan1.png)

**Figure 52: Windows Hello for Business Fingerprint Scan 2**

![Figure 52: Windows Hello for Business Fingerprint Scan 2]({{site.baseurl}}/assets/playbooks/whfb/52-WHfB-Fingerprint-scan2.png)

**Figure 53: Windows Hello for Business Fingerprint Scan 3**

![Figure 53: Windows Hello for Business Fingerprint Scan 3]({{site.baseurl}}/assets/playbooks/whfb/53-WHfB-Fingerprint-scan3.png)

**Figure 54: Windows Hello for Business Fingerprint Scan Complete**

![Figure 54: Windows Hello for Business Fingerprint Scan Complete]({{site.baseurl}}/assets/playbooks/whfb/54-WHfB-Fingerprint-complete.png)

If users choose to do so, they can add multiple fingerprints for improved recognition.

# Windows Hello for Business FAQs

Some of the most commonly asked questions about WHfB are presented below. A full list of common questions can be found [here](https://learn.microsoft.com/en-us/windows/security/identity-protection/hello-for-business/hello-faq){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}{:aria-label="A full list of common questions can be found here"}.

**What's the difference between Windows Hello and Windows Hello for Business?**

Windows Hello represents the biometric framework provided in Windows. Windows Hello lets users use biometrics to sign in to their devices by securely storing their user name and password and releasing it for authentication when the user successfully identifies themselves using biometrics. Windows Hello for Business uses asymmetric keys protected by the device's security module that requires a user gesture (PIN or biometrics) to authenticate.

**Where is the Windows Hello biometrics data stored?**

When you enroll in Windows Hello, a representation of your biometrics, called an enrollment profile, is created. More information can be found on [Windows Hello face authentication](https://learn.microsoft.com/en-us/windows-hardware/design/device-experiences/windows-hello-face-authentication){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. This enrollment profile biometrics data is device specific, is stored locally on the device, and does not leave the device or roam with the user. Some external fingerprint sensors store biometric data on the fingerprint module itself rather than on Windows device. Even in this case, the biometrics data is stored locally on those modules, is device specific, doesn't roam, never leaves the module, and is never sent to Microsoft cloud or external server. For more details, see [Windows Hello biometrics in the enterprise](https://learn.microsoft.com/en-us/windows/security/identity-protection/hello-for-business/hello-biometrics-in-enterprise#where-is-windows-hello-data-stored){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}.

**What happens when a user forgets their PIN?**

If the user can sign in with a password, they can reset their PIN by selecting the **I forgot my PIN** link in the Settings app. Users can reset their PIN from the lock screen by selecting the **I forgot my PIN** link on the PIN credential provider.

For on-premises deployments, devices must be connected to their on-premises network (domain controllers and/or certificate authority) to reset PINs. Hybrid deployments can onboard their Azure tenant to use the Windows Hello for Business PIN reset service to reset their PINs. Non-destructive PIN reset works without access to the corporate network. Destructive PIN reset requires access to the corporate network. For more details about destructive and non-destructive PIN reset, see [PIN reset](https://learn.microsoft.com/en-us/windows/security/identity-protection/hello-for-business/hello-feature-pin-reset){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. The Microsoft PIN reset service is not available for Azure Government tenants. Enabling PIN recovery is possible for Azure Government tenants by [configuring allowed sign-in URLs](https://learn.microsoft.com/en-us/windows/security/identity-protection/hello-for-business/hello-feature-pin-reset?tabs=intune#configure-web-sign-in-allowed-urls-using-microsoft-intune){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} through Microsoft Intune, Group Policy Objects or a Configuration Service Providers (CSP).

**Can I disable the PIN while using Windows Hello for Business?**

No. The movement away from passwords is accomplished by gradually reducing the use of the password. In situations where you can't authenticate by using biometrics, you need a fallback mechanism that isn't a password. The PIN is the fallback mechanism. Disabling or hiding the PIN credential provider will disable the use of biometrics.

**How many users can enroll for Windows Hello for Business on a single Windows device?**

The maximum number of supported enrollments on a single device is 10. This lets 10 users each enroll their face and up to 10 fingerprints. For devices with more than 10 users, or for users that sign in to many devices (for example, a support technician), the use of FIDO2 security keys is recommended.

**Can I use third-party MFA providers with Windows Hello for Business?**

Yes, if you're using federated hybrid deployment, you can use any third-party that provides an AD FS MFA adapter. A list of third-party MFA adapters can be found [here](https://learn.microsoft.com/en-us/windows-server/identity/ad-fs/operations/configure-additional-authentication-methods-for-ad-fs#microsoft-and-third-party-additional-authentication-methods){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}{:aria-label="A list of third-party MFA adapters"}.

**Is Windows Hello for Business considered multi-factor authentication?**

Windows Hello for Business is two-factor authentication based on the observed authentication factors of: _something you have_, _something you know_, and _something that's part of you_. Windows Hello for Business incorporates two of these factors: something you have (the user's private key protected by the device's security module) and something you know (your PIN). With the proper hardware, you can enhance the user experience by introducing biometrics. By using biometrics, you can replace the something you know authentication factor with the something that is part of you factor, with the assurances that users can fall back to the something you know factor.

**Can I use both a PIN and biometrics to unlock my device?**

You can use _multi-factor unlock_ to require users to provide an extra factor to unlock their device. Authentication remains two-factor, but another factor is required before Windows allows the user to reach the desktop. To learn more, see [Multi-factor unlock](https://learn.microsoft.com/en-us/windows/security/identity-protection/hello-for-business/feature-multifactor-unlock){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}.
