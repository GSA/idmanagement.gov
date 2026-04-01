---
layout: page
collection: implement
title: Sign and Encrypt Email in Microsoft Outlook
permalink: /implement/outlook/
sticky_sidenav: true
sidenav: implement
subnav:
    - text: Version History
      href: '#version-history'
    - text: Before You Begin
      href: '#before-you-begin'
    - text: Configure S/MIME in Outlook
      href: '#configure-s-mime-in-outlook'
    - text: Certificate Publication in Modern Microsoft 365
      href: '#certificate-publication-in-modern-microsoft-365'
    - text: Send a Digitally Signed Email
      href: '#send-a-digitally-signed-email'
    - text: Send an Encrypted Email
      href: '#send-an-encrypted-email'
    - text: Decrypt an Encrypted Email
      href: '#decrypt-an-encrypted-email'
    - text: Other Helpful References
      href: '#other-helpful-references'  
---

## Version History

| Version Number | Date | Change Description |
| :---: | :---: | :--- |
| 2.0 | 03/24/2026 | Updated guidance for classic Outlook for Windows (Microsoft 365 Apps). |
| 1.0 | 06/13/2023 | Initial guidance for Microsoft Outlook 2016. |

*This guide was developed in collaboration with the United States Office of Personnel Management*

Personal Identity Verification (PIV) cards contain cryptographic certificates that support S/MIME secure email. Secure email includes two protections:

* **Digital signatures**, which verify who sent the message and prevent tampering
* **Encryption**, which ensures only the intended recipient can read the message

These instructions apply to **classic Outlook for Windows included with Microsoft 365**.

Outlook requires that your account's email address matches the email address encoded on your PIV certificates.

## Before You Begin

Before configuring Outlook:

* Confirm your organization supports **S/MIME** with third-party PKI certificates.
* Ensure your **PIV card**, **middleware**, and **smart card reader** are functioning.
* Browser-based Outlook requires a separate extension for S/MIME, which may not be enabled.

## Configure S/MIME in Outlook

These steps reflect the current configuration experience in **classic Outlook for Windows (Microsoft 365 Apps)**.

1. Insert your **PIV card**.

2. Open Outlook and go to **File > Options > Trust Center > Trust Center Settings**.

3. Select **Email Security**.

4. Under **Encrypted Email**, select **Settings**.

5. Select **New** to create a new security configuration.

6. Enter a name such as **PIV Secure Email**.

7. Select **Choose** next to **Signing Certificate**.
   * Choose your **PIV digital signature certificate**, then select **OK**.
   * Set **Hash Algorithm** to **SHA256**.

8. Select **Choose** next to **Encryption Certificate**.
   * Choose your **PIV key management or encryption certificate**, then select **OK**.
   * Set **Encryption Algorithm** to **AES 256-bit**.

9. Enable **Send these certificates with signed messages**.

10. Select **OK** to save.

**Note:** The following screenshot shows an example of a completed security preference configuration.

<br><br>
<img src="{{site.baseurl}}/assets/playbooks/microsoft sign and encrpyt ss1.png" alt="Security Preference Configuration." width="454">
<br>

## Certificate Publication in Modern Microsoft 365

Many Microsoft 365 tenants no longer display the older **Publish to GAL** button. When this option is absent, certificate publication occurs in one of the following ways:

### Automatic Publication (Default for Many Tenants)
Exchange Online automatically makes your certificate available internally after you send a **digitally signed email**.

### Administrator-Managed Publication
Your organization may publish certificates centrally using Active Directory, Entra ID, or automated provisioning.

### Certificate Sharing via Signed Messages
When you send a **digitally signed** message, Outlook includes your public signing and encryption certificates. This allows recipients to encrypt messages to you even without GAL publishing.

## Send a Digitally Signed Email

1. Compose a new message.

2. In the ribbon, select **Options**.

3. Select **Sign** (red ribbon icon).

4. Send the email.

5. Enter your PIV PIN when prompted.

## Send an Encrypted Email

1. Compose a new message.

2. Select **Options**.

3. Select **More Options**.

4. Select **Security Settings**.

5. Check **Encrypt message contents and attachments**.

6. Select **OK**.

7. Send the message.

**Note:** It is common to enable **both** encryption and signing so the recipient automatically receives your certificates.

<br><br>
<img src="{{site.baseurl}}/assets/playbooks/microsoft sign and encrpyt ss2.png" alt="Encrypt Email with S/MIME." width="454">
<br>

### Import a Recipient's Encryption Certificate Manually

Use this process when Outlook cannot locate a recipient's certificate through your directory or a prior signed email.

1. Obtain the recipient's **public encryption (key management) certificate**.

2. Open the **Home** tab.

3. Select **Address Book**.

4. Go to **File > New Entry**.

5. Select **New Contact**, then **OK**.

6. Add the recipient's **name** and **email address**.

7. Select the **Certificates** tab.

8. Select **Import** and choose the certificate file.

9. Select **Save & Close**.

## Decrypt an Encrypted Email

Outlook can decrypt encrypted messages if the matching private keys are available from your PIV card or from Windows's cryptographic key store.

1. Open the encrypted message.

2. Insert your **PIV card** when prompted.

3. Enter your **PIN**.

If you cannot decrypt older messages, your organization may maintain historical key management keys separately. Contact your IT administrators for recovery if needed.

## Other Helpful References

* Enabling S/MIME on [Mac Mail](https://support.apple.com/guide/mail/sign-or-encrypt-emails-mlhlp1180/mac){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
* Enabling S/MIME on [Thunderbird email client](https://support.mozilla.org/en-US/kb/thunderbird-help-setup-account-e2ee){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
* S/MIME with [Gmail](https://support.google.com/a/topic/9061730?hl=en&ref_topic=2683828){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
* S/MIME with [New Outlook](https://support.microsoft.com/en-us/office/encrypt-messages-by-using-s-mime-in-outlook-web-app-2e57e4bd-4cc2-4531-9a39-426e7c873e26){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
* S/MIME with [Exchange Online](https://learn.microsoft.com/en-us/exchange/security-and-compliance/smime-exo/configure-smime-exo){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
