---
layout: page
collection: implement
title: Sign and Encrypt Emails in Microsoft Outlook
permalink: /implement/outlook/
sticky_sidenav: true
sidenav: implement

subnav:
    - text: Configure Outlook to Send Secure Email
      href: '#configure-outlook-to-send-secure-email'
    - text: Send a Signed Email
      href: '#send-a-signed-email'
    - text: Send an Encrypted Email
      href: '#send-an-encrypted-email' 
    - text: Decrypt an Email
      href: '#decrypt-an-email'
    - text: Other Helpful References
      href: '#other-helpful-references'  
      
---

Personal Identity Verification (PIV) cards contain digital certificates that can help users send secure email. In general, "secure email" refers to digitally signed and/or encrypted emails.  Digitally signed emails give us confidence that the individual who claimed to send a message actually did (non-repudiation) and that the message was not modified while in transit (integrity).  Encrypted emails prevent the message from being read by unintended recipients (confidentiality).  

The following guide walks you through configuring Outlook to leverage the digital signature and key management certificates found on your PIV to enable secure email. By default, Outlook will only allow sign and encrypt emails when the configured email address on the client is same email address as encoded on the PIV card.

## Configure Outlook to Send Secure Email

{% include alert-info.html heading = "Know your Email Provider Capabilities" content="Although several email client applications have options to support digital signatures or encryption (S/MIME), not all email providers organically support S/MIME with third party PKI certificates.  S/MIME support often times varies with different tiers of service.  Coordinate with your email and workstation administrators to ensure S/MIME cpabilities are available on both email servers and user workstations, especially if accessed through a browser." %}

The following steps pertain to Microsoft Outlook 2016, and may also be applicable to newer versions up through Outlook 2021.  These steps may not be applicable to cloud email users, but you may find addtional configurations below for both Exchange Online and O365 in [Other Helpful References](#other-helpful-references).

1. Insert your PIV card in your computer's smart card reader.
2. Browse to **File** > **Options** > **Trust Center** > **Trust Center Settings...** and select **Email Security**.
3. Click **Settings...** beneath the *Encrypted Email* heading.
4. Click **New** to create a new security preference.
5. Assign a *Security Settings Name* (for example, "Secure Email - PIV").
6. Click **Choose** next to *Signing Certificate*.
     - Select your PIV card's digital signature certificate and click **OK**.
     - Select **SHA256** as the *Hash Algorithm*.
7. Click **Choose** next to *Encryption Certificate*.
     - Select your PIV card's digital signature certificate and click **OK**.
     - Select **AES (256-bit)** as the *Encryption Algorithm*.
8. Enable the **Send these certificates with signed messages** selection box.
9. Click **OK** three times.

**Note:** The following screenshot shows an example of a completed security preference configuration.

<img src="{{site.baseurl}}/assets/piv/outlook-certificate-configuration.png" alt="A completed security preference configuration." width="476" height="388">

### Publish Your Certificates to the Global Address List

The Global Address List (GAL) is a shared, enterprise-wide contact list in Microsoft Active Directory.  Publishing your certificates to the GAL will add your encryption certificate and assoicated public key to an enterprise address book, making it easier for other internal agency users to send you an encrypted email.

1. Insert your PIV card in your computer's smart card reader.
2. Browse to **File** > **Options** > **Trust Center** > **Trust Center Settings** and select **Email Security**.
3. Click **Publish to GAL...** beneath the *Digital IDs (Certificates)* heading.
4. Click **OK** when warned about Outlook publishing your default security certificates to the Global Address List.
5. Enter your PIV card PIN when prompted.
6. Click **OK** twice.

**Note:** The following screenshot shows the location of the **Publish to GAL...** button.

<img src="{{site.baseurl}}/assets/piv/outlook-certificate-configuration-publish-gal.png" alt="The Publish to GAL button is located in the Trust Center." width="476" height="389">

## Send a Signed Email
1. Compose an email.
2. Click the **Options** tab.
3. Enable the **Sign** icon (appears as a red ribbon icon).
4. Click **Send**.
5. Enter your PIV card PIN when prompted.

**Note:** The following screenshot shows a signed email.

<img src="{{site.baseurl}}/assets/piv/outlook-certificate-configuration-signed-email.png" alt="A signed email." width="476" height="344">

## Send an Encrypted Email
1. Compose an email.
2. Click the **Options** tab.
3. Enable the **Encrypt** icon (appears as a yellow lock icon).
4. Click **Send**.

**Note:** It is common practice to sign a message when encrypting it below.

<img src="{{site.baseurl}}/assets/piv/outlook-certificate-configuration-encrypted-email.png" alt="A signed and encrypted email." width="476" height="343">

### Manually Import a User's Encryption Certificate

When sending an encrypted email, the message is encrypted using the public key in the intended recipient's certificate.  If Outlook cannot find the intended recipient's public key through the [Global Address List](#publish-your-certificates-to-the-global-address-list), you may need to load it manually.

1. Obtain a copy of the intended recipient's [Key Management]({{site.baseurl}}/university/piv/#how-to-view-piv-credential-certificates) certificate (you may need to ask the intended recipient to export and share their certificate with you)
2. Click the **Home** tab.
3. Click the **Address Book**.
4. Select **File** > **New Entry**.
5. Select **New Contact** and then click **OK**.
6. Populate the recipient's contact information, minimally including name and email address.
7. Click the **Certificates** icon.
8. Click **Import** and browse to the intended recipient's encryption certificate.
9. Click **Save & Close** and then follow the steps to [send an encrypted email](#send-an-encrypted-email).

 **Note:** The following screenshot shows a certificate loaded into a contact entry.

<img src="{{site.baseurl}}/assets/piv/outlook-certificate-configuration-contact-entry.png" alt="A completed contact entry." width="476" height="297">

## Decrypt an Email

PIV users may receive and store encrypted emails throughout their tenure in an organization.  These emails may have been encrypted with various public key management keys are now retired or replaced.  Many PIV card issuers provide historical key management keys when they issue a PIV card, but others may not.  Outlook, via the Cryptographic Application Programming Interface (CAPI), can decrypt these emails if the associated private keys are available.  The following steps outline how to decrypt an email when the private decryption keys are available via CAPI:

1. Select an encrypted email
2. Enter your PIV card PIN or private key password when prompted

**Note:** Your organization may not recover previously issued encryption keys onto your PIV. Instead, it may maintain a separate key recovery service. Please reach out to your local IT department to determine if you can recover retired key management keys.

## Other Helpful References

- Enabling S/MIME on [Mac Mail](https://support.apple.com/guide/mail/sign-or-encrypt-emails-mlhlp1180/mac){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
- Enabling S/MIME on [Thurderbird email client](https://docs.nitrokey.com/storage/mac/smime-thunderbird.html){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
- S/MIME with [Gmail](https://support.google.com/a/topic/9061730?hl=en&ref_topic=2683828){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
- S/MIME with [O365](https://support.microsoft.com/en-us/office/encrypt-messages-by-using-s-mime-in-outlook-web-app-2e57e4bd-4cc2-4531-9a39-426e7c873e26){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
- S/MIME with [Exchange Online](https://learn.microsoft.com/en-us/exchange/security-and-compliance/smime-exo/configure-smime-exo){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
