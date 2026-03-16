---
layout: page
collection: implement
title: Configure Smart Card Logon for MacOS
permalink: /implement/scl-macos/
sticky_sidenav: true
sidenav: implement

subnav:
    - text: Choose an Authentication Option
      href: '#choose-an-authentication-option'
    - text: Local Account Pairing
      href: '#local-account-pairing'
    - text: Windows Domain Account Pairing
      href: '#windows-domain-account-pairing'
    - text: Helpful References
      href: '#helpful-references'
      
---

As federal IT networks and systems expand, especially in light of recent Bring-Your-Own-Device (BYOD) models gaining popularity, it has become necessary to extend mandatory security controls to previously unsupported devices. This guide provides implementation resources to enable smart card authentication on Mac operating system (macOS) workstations and laptops for macOS-local and windows-domain accounts. The included configurations for use of a Personal Identity Verification (PIV) authenticator on Mac meets NIST SP 800-63B-4 guidance for the use of phishing resistant authenticators.

{% include alert-warning.html heading="macOS Version Support" content="Smart card logon is natively supported on macOS Sierra 10.12 or later due to built-in PIV drivers, and Windows Server Directory logon/Kerberos has been supported since High Sierra 10.13. All instructions contained within this guide assume the implementer is leveraging High Sierra or a more recent macOS.  Most Mac devices acquired mid-2010 or later should be compatible with these instructions; older devices may have compatibility issues, or may require other third party software solutions (e.g., OpenSC)." %}

{% include alert-success.html heading="Compliance Support" content="Enablement of mandatory smart card login for all Mac workstations and laptops within your environment will help align to the NIST SP 800-53 Identification and Authentication (IA) family of controls to support FISMA compliance.  As an Authentication Assurance Level 3 (AAL3) authenticator, PIV also inherently supports requirements for phishing resistant, multi-factor, cryptographic authenticators defined in NIST SP 800-63B-4." %} 

## Choose an Authentication Option
Agencies have three options to enforce smart card authentication in macOS.

1. Local Account Pairing For a non-domain joined macOS account, an agency may enable local account pairing. This method pairs a smart card to the local macOS user account and requires its use for desktop authentication. No domain or Kerberos architecture is needed.  
2. Windows Domain User Account For a windows domain-joined device, an agency can map smart card attributes to an Active Directory account. This method involves creating a plist configuration file and disabling local pairing on the macOS device.  
3. Platform Single Sign On provided your organization has a Microsoft cloud tenant, you can configure smartcard logon to a Mac using the Microsoft Enterprise SSO plug-in, and provided you also have Entra ID properly configured for your users.

While Local Pairing and Domain Joining remain valid for legacy support, Platform SSO using a PIV is considered the more modern method.

Agencies may additionally choose a machine-based enforcement which enhances security by disabling all password-based authentication, or user-based enforcement, which defines some exceptions to smart card only login for specific user groups.

1. Machine-Based Enforcement (MBE): This implementation removes the option for password-based authentication in favor of smart card-only authentication for any account accessible by the macOS device (local or network).  
2. User-Based Enforcement (UBE): This implementation creates an exception to smart card-only authentication for specific users or groups of users (e.g., network admins, device admins, and individuals waived from smart card requirements).

This [Apple Platform Deployment guide](https://support.apple.com/guide/deployment/configure-macos-smart-cardonly-authentication-depfce8de48b/1/web/1.0){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} provides some additional detail on MBE vs. UBE. Additional details on [Windows authentication enforcement models]({{site.baseurl}}/implement/scl-windows/#step-5---group-policies-and-enforcement){:rel="noopener noreferrer"}{:class="usa-link"} can be found here.

## Local Account Pairing
Local Account Pairing is a user-prompted process to link a PIV to a local macOS account.  Configuring this account/authenticator pairing provides strong assurance in the device’s user event logs.

1. Insert the PIV card into a card reader connected to the macOS device.  
2. A series of prompts direct the user to pair the PIV card to the local account. The user will need administrative access to complete the process.  
3. Provide the PIV PIN and then log out or lock the session (Control \+ Command \+Q).  
4. Re-insert the PIV and provide the PIN to log back in and verify smartcard pairing was successfully completed.

See [this Apple Platform Deployment guide](https://support.apple.com/guide/deployment/use-a-smart-card-depc705651a9/web){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} for more information on local account pairing.  If you are not prompted to register a PIV upon insertion, an administrator may need to either modify a system default, or help to manually pair the PIV authentication certificate in the terminal.  See these [advanced smart card functions](https://support.apple.com/guide/deployment/advanced-smart-card-options-dep7b2ede1e3/web){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} for additional information.  Specific helpful commands may include:

```
`sudo defaults write /Library/Preferences/com.apple.security.smartcard UserPairing -bool true`  
```
``` 
`sudo sc_auth pair -u [the local user account] -h [the ski of the PIV authentication certificate]`
```

Note that the public key (or its hash, known as a subject key identifier, SKI) on the PIV authentication certificate is the default attribute associated with the local account during pairing.  If the PIV is ever rekeyed with new certificates, users will need to re-register new certificates to the local account, or configure their local directory attribute to a different identifier on the PIV, which is not recommended. 

## Windows Domain Account Pairing
Most departments and agencies already maintain processes to map PIV attributes to Active Directory domain accounts. The following linked playbook also provides guidance on the different models that can be used to [link domain accounts to PIV certificate attributes]({{site.baseurl}}/implement/scl-windows/#step-4---account-linking){:target="_blank"}.

Ensure the following prerequisites are complete or ready to maintain appropriate audit and accountability of user and device activities in organizational resources:

1. The person completing this process has administrative privileges on the macOS device.  
2. The macOS device is joined to the Windows domain.  
3. Federal PKI and domain controller certificates are distributed and installed on the macOS device key store to ensure the PIV is recognized and to facilitate secure communication with the legitimate domain controller.

### **Domain Controller Certificate Trust**

Many organizations run internal device PKIs that issue their domain controller certificates. Ensure all appropriate device PKI CA certificates (roots, intermediates and/or issuing CA certificates) needed to conduct a smart card domain authentication are distributed to the macOS devices to establish a cryptographically secured and trusted communications channel.

### Step 1. Disable Local Account Pairing
The local pairing interface must be disabled to ensure the macOS device strictly enforces domain-based authentication and prevents the use of unmanaged local credentials. To disable the local pairing dialog:

1. Open the Terminal app.  
2. Type the following command to enforce the smart card-only login requirement:

```
sudo defaults write /Library/Preferences/com.apple.security.smartcard UserPairing -bool NO
```

3. When prompted, enter the administrator password.

### Step 2. Write the Property List
A property list, or plist, maps smart card attributes to a Windows domain account. The most common configuration is to map the NT Principal Name in the PIV Authentication certificate Subject Alternative Name to the userPrincipalName attribute in Active Directory. The following image provides the contents of a configuration file that extracts the NT Principal Name from a PIV to match against a directory Alternate Security Identifier (AltSecID) attribute to verify the individual who activates the private key in support of the authentication activity.

<img src="{{site.baseurl}}/assets/piv/attribute_mapping_plist.png" alt="PList configuration for extracting a domain account identifier from a PIV." width="560" height="201">

Agencies may want to apply [additional smart card configuration](https://developer.apple.com/documentation/devicemanagement/smartcard){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} settings. Additional options may include:

* allowSmartCard Must be set to TRUE to allow the device to leverage smart cards for multiple functions (authentication, digital signing).  
* enforceSmartCard Can be set to TRUE to ensure that smart card authentication is made mandatory at initial logon, authorization, and unlocking from screensaver mode.  
* tokenRemovalAction If set to “1,” enables the screensaver when a smart card is physically removed from the device which can assist in preventing unauthorized access, provided appropriate PIV removal by the user .  
* UserPairing Can be set to FALSE to prevent the pairing dialogue window from appearing on smart card insertion, when domain-based authentication is required.  
* oneCardPerUser Can be set to FALSE for users who may have multiple acceptable smart cards (e.g., PIV and alternative tokens).  
* checkCertificateTrust Can be an integer between 0 and 3:  
  * 0 turns off certificate trust checking  
  * 1 turns on trust checking, but does not conduct revocation checking  
  * 2 turns on trust checking, and a ‘soft’ revocation check is conducted where ‘valid’ and ‘unknown’ are treated the same  
  * 3 turns on trust checking, and a ‘hard’ revocation check is conducted where the response must contain a ‘valid’ status to allow the authentication to proceed

### Step 3. Choose a Deployment Method
An agency may deploy a configuration list or plist through various remote mechanisms to enforce PIV enabled login across their enterprise.

1. Employ third-party Mobile Device Management (MDM) tools to push standardized configuration profiles and register user devices.  
2. Leveraging an [Apple specific configuration tool](https://apps.apple.com/us/app/apple-configurator-2/id1037126344?mt=12){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} via the App Store (e.g., Apple Configurator) to create and sign profiles.  
3. Direct configuration profile delivery via an email, webpage, or [over-the-air profile delivery](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/iPhoneOTAConfiguration/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009505){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

If a remote deployment is not available, the administrator may also perform the configuration locally following the command and syntax in Step 1 and 2.

## Platform Single Sign On
Some departments and agencies may subscribe to Microsoft Cloud tiers that allow enterprise single sign for managed devices.

The following is a list of pre-requisites that must be met in order to leverage a PIV for Microsoft Enterprise SSO on a macOS device:

* macOS 13 (Ventura) is minimally supported, 14 (Sonoma) is recommended  
* a mobile device management solution (e.g., Microsoft Intune) must have the user device enrolled  
* the Microsoft SSO plug-in for Apple must be installed/configured  
* the smart card must be available and, depending on the implementation, may need to be paired to a local user account (See [local account pairing]({{site.baseurl}}/implement/scl-macos/#local-account-pairing){:target="_blank"} above)  
* Entra ID administrative settings are properly configured  [See this guide]({{site.baseurl}}/implement/cba-azure/){:target="_blank"}  
* PIV identifiers (e.g., UPN, SKI, etc.) are registered to Entra User Accounts 

Once the device is managed and the smart card is paired, the Microsoft Enterprise SSP plug-in will trigger the registration process where the user will need to authenticate via PIV.

## Helpful References

1. [Apple Deployment Guide](https://support.apple.com/guide/deployment/use-a-smart-card-depc705651a9/web){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} Use a smart card in macOS  
2. [Apple Deployment Guide](https://support.apple.com/guide/deployment/configure-macos-smart-cardonly-authentication-depfce8de48b/1/web/1.0){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} Configure macOS for smart card-only authentication  
3. [Apple Deployment Guide](https://support.apple.com/guide/deployment/advanced-smart-card-options-dep7b2ede1e3/1/web/1.0){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} Advanced smart card options in macOS  
4. [Microsoft \- macOS Platform SSO Overview](https://learn.microsoft.com/en-us/entra/identity/devices/macos-psso){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} May assist Entra/Azure administrators register macOS devices  
5. [Microsoft: Enterprise SSO plug-in for Apple devices](https://learn.microsoft.com/en-us/entra/identity-platform/apple-sso-plugin){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} provides guidance for installing the Enterprise SSO on apple devices
6. [Apple Smart Card Services](x-man-page://SmartCardServices){:target="_blank"} expands all smart card functions in the macOS terminal (link will only work on macOS)  
7. [Apple Smart Card Command manual](x-man-page://sc_auth){:target="_blank"} provides a full list of sc_auth commands in the macOS terminal