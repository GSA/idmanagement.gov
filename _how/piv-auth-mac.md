---
layout: page
collection: how
title: PIV Authentication on macOS
permalink: /how/piv-athentication-macos/
sticky_sidenav: true
sidenav: how

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

As federal IT networks and systems expand, especially in light of recent Bring-Your-Own-Device (BYOD) models gaining popularity, it has become necessary to extend mandatory security controls to previously unsupported devices. This guide provides implementation resources to enable smart card authentication on Mac operating system (macOS) workstations and laptops for macOS-local and windows-domain accounts.

{% include alert-warning.html heading="macOS Version Support" content="Smart card logon is natively supported on macOS Sierra 10.12 or later and Windows Server Directory logon since High Sierra 10.13. All instructions contained within this guide assume the implementer is leveraging High Sierra or a more recent macOS." %}

{% include alert-success.html heading="Compliance Support" content="Enablement of mandatory smart card login for all Mac workstations and laptops within your environment will help align to the NIST SP 800-53 Identification and Authentication family of controls to support FISMA compliance." %} 

## Choose an Authentication Option
Agencies have two options to enforce smart card authentication in macOS.
1. Local Account Pairing - For a non-domain joined macOS account, an agency may enable local account pairing. This method pairs a smart card to the local macOS user account and requires its use for desktop authentication. No domain or Kerberos architecture is needed.
2. Windows Domain User Account - For a windows domain-joined device, an agency can map smart card attributes to an Active Directory account. This method involves creating a plist configuration file and disabling local pairing on the macOS device.

Agencies may additionally choose a machine or user-based enforcement which disables all password-based authentication.
1. Machine-Based Enforcement (MBE): This implementation removes the option for password-based authentication in favor of smart card-only authentication for any account accessible by the macOS device (local or network).
2. User-Based Enforcement (UBE): This implementation creates an exception to smart card-only authentication for specific users or groups of users (e.g., network admins, device admins, and individuals waived from smart card requirements).

This [Apple Platform Deployment guide](https://support.apple.com/guide/deployment/configure-macos-smart-cardonly-authentication-depfce8de48b/1/web/1.0){:target="_blank"}{:rel="noopener noreferrer"} provides some additional detail on MBE vs. UBE. Additional details on [Windows authentication enforcement models]({{site.baseurl}}/piv/network/group/){:target="_blank"}{:rel="noopener noreferrer"} can be found here.

## Local Account Pairing
Local Account Pairing is a user-prompted process.
1. Insert the PIV card into a card reader connected to the macOS device.
2. A series of prompts direct the user to pair the PIV card to the local account. The user will need administrative access to complete the process.
3. Provide the PIV PIN and then log out.
4. Insert the PIV and provide the PIN to log back in.

See [this Apple Platform Deployment guide](https://support.apple.com/guide/deployment/use-a-smart-card-depc705651a9/web){:target="_blank"}{:rel="noopener noreferrer"} for more information on local account pairing.

## Windows Domain Account Pairing
Most departments and agencies already maintain processes to map PIV attributes to Active Directory domain accounts. This playbook also provides guidance on the different models that can be used to [link domain accounts to PIV certificate attributes]({{site.baseurl}}/piv/network/account/){:target="_blank"}.

Ensure the following prerequisites are complete or ready:
1. The person completing this process has administrative privileges on the macOS device.
2. The macOS device is joined to the Windows domain.
3. Federal PKI and domain controller certificates are distributed and installed on the macOS device key store.

{% include alert-warning.html heading="Domain Controller Certificate Trust" content="Many organizations run internal device PKIs that issue their domain controller certificates. Ensure all certificates needed to conduct a smart card domain authentication are distributed to the macOS devices." %}

### Step 1. Disable Local Account Pairing
The local pairing interface must be disabled. To disable the local pairing dialog:
1. Open the Terminal app.
2. Type the following: 
```
sudo defaults write /Library/Preferences/com.apple.security.smartcard UserPairing -bool NO
```
3. When prompted, enter the administrator password.

### Step 2. Write the Property List
A property list, or plist, maps smart card attributes to a Windows domain account. The most common configuration is to map the NT Principal Name in the PIV Authentication certificate Subject Alternative Name to the userPrincipalName attribute in Active Directory. The following image provides the contents of a configuration file that extracts the NT Principal Name from a PIV to match against a directory AltSecID in support of an authentication event.

<img src="{{site.baseurl}}/assets/piv/attribute_mapping_plist.png" alt="PList configuration for extracting a domain account identifier from a PIV." width="560" height="201">

Agencies may want to apply [additional smart card configuration](https://developer.apple.com/documentation/devicemanagement/smartcard){:target="_blank"}{:rel="noopener noreferrer"} settings. Additional options may include:
- allowSmartCard - Must be set to TRUE to allow the device to leverage smart cards for multiple functions (authentication, digital signing). 
- enforceSmartCard - Can be set to TRUE to ensure that smart card authentication is made mandatory at initial logon, authorization, and unlocking from screensaver mode.
- tokenRemovalAction - If set to "1," enables the screensaver when a smart card is physically removed from the device.
- UserPairing - Can be set to FALSE to prevent the pairing dialogue from appearing on smart card insertion.
- oneCardPerUser - Can be set to FALSE for users who may have multiple acceptable smart cards (e.g., PIV and alternative tokens).
- checkCertificateTrust - Can be an integer between 0 and 3:
    - 0 - turns off certificate trust checking
    - 1 - turns on trust checking, but does not conduct revocation checking
    - 2 - turns on trust checking, and a 'soft' revocation check is conducted where 'valid' and 'unknown' are treated the same
    - 3 - turns on trust checking, and a 'hard' revocation check is conducted where the response must contain a 'valid' status to allow the authentication to proceed

### Step 3. Choose a Deployment Method
An agency may deploy a plist through various remote mechanisms.
1. Employ third-party Mobile Device Management (MDM) tools
2. Leveraging an [Apple specific configuration tool](https://apps.apple.com/us/app/apple-configurator-2/id1037126344?mt=12){:target="_blank"}{:rel="noopener noreferrer"} via the App Store
3. Direct configuration profile delivery via an email, webpage, or [over-the-air profile delivery](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/iPhoneOTAConfiguration/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009505){:target="_blank"}{:rel="noopener noreferrer"}

If a remote deployment it not availabler, the administrator may also perform the configuration locally following Step 1 and 2.

## Helpful References
1. [Apple Deployment Guide - Use a smart card in macOS](https://support.apple.com/guide/deployment/use-a-smart-card-depc705651a9/web){:target="_blank"}{:rel="noopener noreferrer"}
2. [Apple Deployment Guide - Configure macOS for smart card-only authentication](https://support.apple.com/guide/deployment/configure-macos-smart-cardonly-authentication-depfce8de48b/1/web/1.0){:target="_blank"}{:rel="noopener noreferrer"}
3. [Apple Deployment Guide - Advanced smart card options in macOS](https://support.apple.com/guide/deployment/advanced-smart-card-options-dep7b2ede1e3/1/web/1.0){:target="_blank"}{:rel="noopener noreferrer"}
