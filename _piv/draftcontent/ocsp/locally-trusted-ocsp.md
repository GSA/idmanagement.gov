---
layout: default
title: Locally Trusted OCSP Configuration
permalink: /Locally Trusted OCSP Configuration/
---

# Locally Trusted OCSP Configuration

#### Table of Contents
#### [Overview](#overview-1)
#### [Security Risks](#security-risks-1)
#### [Prerequisites](#prerequisites-1)
#### [Install Microsoft OCSP Responder](#install-microsoft-ocsp-responder-1)
#### [Windows Client Configuration](#windows-client-configuration-1)
#### [End-to-End Testing](#end-to-end-testing-1)

----------

## Overview

Within the **Public Key Infrastructure (PKI)**, the **Online Certificate Status Protocol (OCSP)** is used to determine the status of a public key certificate ([RFC 6960](https://tools.ietf.org/html/rfc6960)). An OCSP Responder can functionally replace **Certificate Revocation Lists (CRLs)**, which are "list[s] of revoked public key certificates created and digitally signed by a **Certification Authority**" **(CA)** ([RFC 5280](https://tools.ietf.org/html/rfc5280)). A response from an OCSP Responder, as with a CRL, will tell you whether a public key certificate has been revoked by its issuing CA. If you rely on certificate revocation status provided by external Internet hosted sources for critical functionality within your local network, you could use a locally trusted OCSP Responder to improve revocation status availability. In this case, your locally trusted OCSP Responder (service) would create a locally hosted, trusted copy of revoked certificate information<!-- Where does the OCSP copy the info from? --><!-- Matt - it should be "revocation status information". It gets it from CRLs but I'm not sure that relevant until later in the document when you configure it -->. Hosting a local OCSP Responder can ensure that Clients (applications and devices) do not experience the Internet disruptions that can occur with either remotely hosted CRLs or OCSP.<!-- Matt - this seems to suggest that Local OCSP Responders prevent Internet disruptions instead of preventing interruption of revocation status access during Internet disruptions? -->

If a locally trusted OCSP Responder is deployed, even mobile clients such as laptops, tablets, and phones could potentially use it remotely<!--Could potentially?--><!-- matt - not sure what the question is. if you're asking if all models of all things can definitely use it then for sure no. --> (i.e., if your organization configures the OCSP Responder to be exposed to the Internet). Clients should always be configured <!-- the original text did not say this, failing over to the next source is supported in the software, in 99.99% of scenarios it's not something you configure. Originally read "clients should be able to fail over to the next revocation status source as necessary"  --> to "fail-over" to a backup<!-- Backup vs. "next" is more clear. --> <!-- matt - next is the correct term. all the CRL DPs listed in a certificate are primary sources and it up to the consuming client to determine which it would like to check first. Although most clients do try them in the order they appear in the CRL DP extension, the client is free to apply whatever sorting criteria it prefers -->  source for obtaining certificate-revocation statuses in the event of an Internet disruption. A locally trusted OCSP Responder could be that backup <!-- Matt - the locally trusted ocsp becomes the primary source in the windows environment. the authoritative sources (found in the CRLDP/AIA) become the fallback options --> source&mdash;providing additional resiliency for users who are working on a local network or connected remotely. If considering this service <!-- Matt - by "this service" are we referring to OCSP or to putting OCSP on the Internet? The original intent was the latter. i.e. if you might want to put it on the Internet then you might want to use a name that works on the Internet instead of one that doesn't. In other words, if you deploy it with an internal only name and configure all your clients to use the internal only name then later decide you don't want the service to be internal only, it will be inconvenient that you've chosen to use a name that cannot be used for that sort of access. -->, we highly recommended increasing its security <!-- Matt - this does not increase security. it reduces security --> by choosing a server name associated with an Internet Protocol (IP) address, as discussed in the [Install Microsoft OCSP Responder](#install-microsoft-ocsp-responder-1) section. 

> <i class="icon-info"></i>  <!-- This is pretty long for an Info call-out box. --> <!-- matt - I agree, but it wasn't in one before! --> **Transparent Caching Proxy&mdash;an Alternative Backup (Fail-over) Method.** <!-- Matt - it's not a really a failover if it's the primary mechanism - the cache is always on, not just when the Internet is down -->The **Transparent Caching Proxy** is a highly effective method of obtaining <!-- Matt - it can't obtain them during an Internet outage, it just provides cached copies to clients on the network -->and providing CRLs during Internet, CRL, or OCSP service disruptions and could preclude <!-- Matt - not sure why you changed it this way, these decisions are not binary. The original document said "may provide sufficient resiliency" which I think conveys the idea that it's an improvement --> the need for a locally trusted OCSP. This proxy can also greatly reduce Internet connection-bandwidth consumption. To use a Transparent Caching Proxy, configure it to frequently check the end-point for modified <!--Explain file types.-->**.p7c** and **.crl** files so that the cache maintains the most up-to-date information. A .p7c is a "Certificates Only" Cryptographic Message Syntax (CMS) [[RFC5652](https://tools.ietf.org/html/rfc5652)] file that contains CA certificates used to construct a certificate path in the forward (from end entity) direction to the Trusted Root CA. This is accomplished by downloading the .p7c files using the URLs [[RFC1738](https://www.ietf.org/rfc/rfc1738.txt)] listed in the Authority Information Access extension's caIssuers field [[RFC5280](https://tools.ietf.org/html/rfc5280)] of each certificate in the certificate path, beginning with the End Entity certificate being verified. A .crl file is Certificate Revocation List (CRL) [[RFC5280](https://tools.ietf.org/html/rfc5280)] file that contains a list of certificate serial numbers, revocation dates, and, optionally, revocation reasons. The CRL is used by the relying party (i.e. the person validating the certificate) to determine if a certificate has been revoked by its' issuing CA. The CRL is usually signed by the same CA that issued the certificates identified by the serial numbers on the CRL. If the .crl and .p7c files are cached, PKI clients will be able to construct and validate certificate paths by downloading them from the cache during Internet service disruptions. Additionally, you can configure a script on any host "behind" the transparent cache to regularly download chosen CRLs. This will keep the cache "fresh" <!-- matt - I don't think you need to quote fresh here, cache freshness is a well-known technical concept. --> even when users on the local network are not downloading CRLs during off-peak (i.e., non-working) hours.<!-- Don't understand the point about downloading CRLs during off-peak hours effect freshness of cache (unclear)? --> <!-- Matt - This is not about peak vs off peak, it's about active (working) vs. inactive (non-working). If you don't keep the cached copy up to date, and your Internet goes down at 8:00 AM with a cache full of stale expired CRLs and now people can't logon, what good did the cache do you? --> To learn more about how to configure a Transparent Caching Proxy, see _(insert link to relevant document here)_.<!--Recommend putting a link to a procedure here, rather than making folks go search for a website, document, etc.--> <!-- Matt - that would be nice, but much like step by step instructions for deploying a CA that seems way out of scope to me. What would we link to? Are we recommending a specific commercial product? Multiple products? Unsupported open source solutions? There are dozens of options. -->

## Assumptions

To effectively use these OCSP Responder procedures, we recommend that you possess the following: <!-- Since this guide requires a technical user, where the "assume no prior knowledge" is not appropriate, we might add Assumptions about the user's level of expertise in relevant areas. I took a guess at these.  In LaChelle's template.md for some repos includes a section in this position called "Assumptions," recommend we use that here.  This may not be appropriate. Just a thought.--> <!-- matt - yes, I certainly made the assumption when writing this that anyone interested in augmenting their environment with a locally trusted ocsp responder would know something about pki and server administration -->:

  * Basic understanding of Public Key Infrastructures, CAs, certificate revocation, CRLs, and OCSP
  * System administrator (SA) or network administrator privileges/permissions 
  * Experience with network configurations  
  * Experience with installing and configuring servers

## Security risks

<!--I had some trouble following this discussion.-->By operating a locally trusted OCSP Responder, your organization is assuming all of the security risks introduced when you do not depend directly on the authoritative revocation status sources. <!--Are the sources = the CAs & they are normally consulted for accurate CRLs (unclear)? Does the OCSP Responder extract the CRL information from the CA and so is not a "direct" (more secure) means? --><!-- Matt - if you create your own source, then it's not the authoritative source. the authoritative source I'm referring to is one that has an actual cryptographic binding to the CA. The CRL is signed by the CA and the OCSP Responder cert is signed by the CA. A local OCSP responder has no binding to that for which it is providing status -->CAs follow stringent <!-- Are the policies and procedures the CP and CPS mentioned in next sentence (unclear)? Explain "multi-person control" for reader. -->requirements for multi-person control, physical security<!-- How does physical security relate to CRLs? -->, and hardware cryptographic modules <!-- Hardare mentioned here but not software (which is mentioned below). -->, <!-- Matt - I don't think we need to expand on these as they are intended to be examples to add emphasis, not something we explain in detail. If we think providing these examples is too confusing for the target audience then I suggest we delete them and say "CAs follow stringent security requirements" with no examples. --> which are detailed in each CA's Certificate Policy (CP) and Certification Practices Statement (CPS).  If you do not implement equivalent security controls to those implemented by a CA (i.e., as stated in a CP and CPS), then your local OCSP Responder becomes the weak link in the chain, and your organization's overall <!-- ? --> <!-- Matt - Why the entire organization's overall network-security assurance level? This is about the assurance level of the certificate (e.g. the PIV card) that you are verifying, not an entire agency's network.  --> network-security assurance level would effectively be reduced to that of your local network configuration. For example, if your organization validates Personal Identity Validation (PIV) authentication certificates (hardware)<!-- "Hardware certificates" relate to a PIV card used for computer access to a network? --> <!-- Matt, PIV cards are hardware assurance. I didn't say anything here specifically about network authentication; what you are authenticating to is not relevant to the point -->, but you are using software cryptographic keys on your local OCSP Responder, then the validated PIV certificates' assurance <!-- Matt - I think splitting the word "assurance" away from "software" deemphasizes the risk elevation. "software assurance" and "hardware assurance" are well known terms of art that should resonate with anyone familiar with FPKI -->level may be associated with software rather than hardware, both of which have different CP and CPS requirements. <!-- Is this what you meant? --><!-- Matt - I’d not mention CP/CPS here given CP/CPS requirements apply to the CAs not to what people do in their local environment. The point was about level of assurance you get when you validate certificates  -->This may or may not be acceptable, depending on the use case. <!-- Matt - implementing local OCSP elevates risk and that they (the reader's organization) need to make a carefully considered risk decision. (was "a local risk decision that should receive careful consideration") -->

Some other security best practices to consider when implementing an OCSP Responder: 

  * No clients (applications and devices) should ever trust a locally trusted OCSP Responder unless they have been explicitly configured to do so. <!--How would a client trust the OCSP Responder without being configured to do so? --> <!--Matt - I think it was more clear in the original text. What is now 3 separate bullets was a single point in a single paragraph: "A locally trusted OCSP Responder should never be trusted by any clients that are not explicitly configured to trust it. Therefore, the CA you use should by private to your organization. The CA and issued OCSP Responder certificates should not be trusted outside of your intended pool of clients for any purposes." -->
  
  * The CA you use must be private to your organization. 
  
  * The CA and issued OCSP Responder certificates should not be trusted outside of your intended pool of clients for any purposes. 
  
  * A common misunderstanding is viewing an OCSP check is the same thing as certificate validation--this is a _dangerous and completely inaccurate assumption_. The proper procedures for certificate path validation can be found in section 6 of [RFC 5280](https://www.ietf.org/rfc/rfc5280.txt), _Internet X.509 Public Key Infrastructure Certificate and Certificate Revocation List Profile_.

These are examples of an agency's or organization's local risk decisions that must be carefully considered. Security best practices and sound risk decisions should always shape a deployment design for an OSCP Responder. <!-- Matt - the above are factual statements are not part of the local risk decision described in the first paragraph; the local risk decision is 1) should i use a local responder at all, and 2) how well do I need to secure it -->

## Before you begin
Before you begin, we recommend that you review the OCSP document series available from Microsoft TechNet:  [Implementing an OCSP Responder](https://blogs.technet.microsoft.com/askds/2009/06/24/implementing-an-ocsp-responder-part-i-introducing-ocsp/). Microsoft's document series includes supporting information that has been omitted from this guide.

### Prerequisites

##### Required:

  * A locally trusted Root CA to issue OCSP Responder certificates
  * Installed and patched Microsoft Windows 2012 R2 server

> In a hierarchical PKI, a Root CA's public key serves as the most trusted (i.e., the beginning of trust paths) for a security domain (NIST SP 800-32, CNSSI-4009). <!-- Matt - IMO this document is not for people that don't already know such a basic principal  --> We recommend that you create <!-- create? --><!-- matt - if you like, I guess you can say that. I suppose the original text "that a new, dedicated Root CA be used" did avoid answering whether it was created, installed, deployed, or generated.  --> a new, dedicated **Root CA** <!-- matt - why bold here? --> to issue locally trusted, OCSP Responder certificates. <!-- Matt - think locally trusted is the modifier and OCSP Responder certificates is the thing. -->The Root CA will be used only for an OCSP Responder in a local-network <!-- Matt - local-network != locally trusted; locally trusted is about configuration of the client. (i.e. "Matches a local configuration of OCSP signing authority for the certificate in question", see tools.ietf.org/html/rfc6960#section-4.2.2.2) That doesn't mean you can't expose it to the Internet...  --> to obtain certificate-revocation statuses, which significantly reduces the potential security risks associated with using a Root CA. <!-- Is this what you meant?  Not plain language; wasn't clear. --><!-- Matt - no, there is no inherent risk associated with using a properly protected root ca.  It would be true to state that using an offline root to issue the ocsp certs does improve security over using an online CA, but that seems rather obvious. Original text: "Owing to its' limited, local only, scope and special requirements on its' content, it is recommended that a new, dedicated Root CA be used for issuing the locally trusted responder certificates." -->

(The procedures below provide additional steps for installing and configuring this Root CA.<!-- Which procedures specifically? --> <!-- Matt - None - this isn't what it said. The original text was "Some additional details can be found in the procedures below and in Appendix 2 - Using Microsoft CA as the self signed root" I purposely avoided saying this document would provide any sort of procedures for installing the CA because we would need to add another 200 pages for setting up a root CA 27 different ways with various hardware / HSM options / key splits etc. I did think it was appropriate to provide the guidance that would be specific to a Microsoft Root CA used for issuing OCSP responder certificates. If actual root ca installation steps are going to be made available then it I think it should be a separate document or set of documents --> For additional information, see [Appendix 2 - Using Microsoft CA as the self signed root](#appendix-2---using-microsoft-ca-as-the-self-signed-root-1).)

##### Recommended: 

  * Hardware Security Module (HSM)
  * CP and CPS:  Documented security policies and procedures for deploying and operating the certificate-issuing Root CA and OCSP Responder(s). 

> <i class="icon-info"></i>  <!-- Question: Do you mean for installing CAs other than the Root CA?  I thought we do include procedures about that below..? --><!-- Matt - no, there are some locally trusted ocsp use case configuration specifics for the CA, but there are no installation procedures --> This guide does not provide detailed procedures for installing CAs or configuring HSMs (i.e., numerous online resources provide CA installation procedures, and HSM vendors provide configuration procedures). Additionally, this guide does not provide instructions for creating policies (i.e., for CPs and CPSs). For guidance, we recommend that you consult the requirements contained in one or more CPs and CPSs published by a CA(s) on which you rely.

## Install Microsoft OCSP Responder

Microsoft Windows Server 2012 R2 running the Microsoft OCSP Responder was the chosen model for an OCSP Responder because it is generally available across Federal Government agencies. Other products may also be configured to provide a locally trusted, OCSP Responder service. <!-- Matt - I think "OCSP Responder service" is a thing, not a thing and its adjective. In my opinion all 14 instances of "locally trusted," should lose the comma --> Until such time as additional guidance is available for these products,<!--Do you mean GSA guides are not available?--><!-- Matt - yep --> we encourage you to speak directly with the vendors regarding configuration. 

### Software Installation

Before beginning the OCSP software installation, name your server and associate it <!-- Above we say "associate it with" -->with the chosen domain (i.e., IP address). Changing the server name or domain after installation can corrupt the configuration. Configure the server with outbound Internet access in order to retrieve and download remote CRLs. <!--Do they already know how to set this up? Link to a procedure? --><!-- Matt - the procedure for deploying a server and granting it access to the internet is going to vary from agency to agency and location to location. furthermore, this is one of the very most basic server administration tasks, it's hard to imagine that someone that has any familiarity with deploying servers in their environment would not know what they need to do here --> In most cases, CRLs are available over HTTP/80.

  1. Use the **Add Roles and Features Wizard**, and go to **Server Roles**. 
  2. Click on the **Active Directory Certificate Services** (ADCS) to add this role to the Windows Server 2012 R2.

  ![Select Active Directory Certificate Services (ADCS)](../img/local-ocsp-cfg-adcs.png)

  When you select the checkbox to the left of **Active Directory Certificate Services**, the **Add Roles and Features Wizard** will automatically prompt you to **Add features that are required for Active Directory Certificate Services** in a pop-up dialog box entitled **Add Roles and Features Wizard**. Your dialog box may or may not look like the example below. Click the **Add Features** button to continue.

  ![Add features that are required for Active Directory Certificate Services](../img/local-ocsp-cfg-add-features-that-are-required.png)

  3. Click **Next** to proceed to **Select features**
  4. On the **Select features**, click **Next** to proceed to **Active Directory Certificate Services**
  5. On **Active Directory Certificate Services**, click Next to proceed to **Select role services** listed under **AD CS**
  4. In **Select role services**, **Deselect** (uncheck) the checkbox for **Certification Authority**
  5. In **Select role services**,**Select** (check) the checkbox to select **Online Responder**.

  ![Select Online Responder](../img/local-ocsp-cfg-role-services2.png)

  When you select the checkbox to the left of **Online Responder**, the **Add Roles and Features Wizard** will automatically prompt you to **Add features that are required for Online Responder** in a pop-up dialog box entitled **Add Roles and Features Wizard**. Your dialog box may or may not look like the example below. Click the **Add Features** button to continue.

  ![Add features that are required for OCSP Responder](../img/local-ocsp-cfg-add-features-that-are-required-2.png)

  7. In **Select role services**,Click **Next** to proceed to **Web Server Role (IIS)**
  8. In **Web Server Role (IIS)**, click **Next** to proceed to **Select role services** under **Web Server Role (IIS)**
  9. The default **Role services** for **Web Server (IIS)** are selected. This installation procedure was tested with the default options. Removal of any of the selected options will result in removal of the OCSP Responder role. Adding additional features is possible, but were not tested and could affect the operation of the OCSP Responder. Click **Next** to proceed to **Confirm installation selections**.
  10. In **Confirm installation selections**, review your selected options, then click the **Install** button.
  
  > During the installation, the Wizard will advance to the **Results** step inside of which **Feature Installation** will appear under the heading **View installation progress**. An associated progress bar progress bar will appear. Under the progress bar, the text will read *Installation started on [server name]*. As the software is installed, the progress bar will fill from left to right. Once the progress bar has completely filled and the installation will be complete. 
  
  ![Click Configure Active Directory Certificate Services](../img/local-ocsp-cfg-configure.png)
  
  > The message _Configuration required. Installation succeeded on [server name]_ appears. 
  
  9. In the **Results** window, after *Installation succeeded [server name]* appears, below the **Active Directory Certificate Services** heading, click on **Configure Active Directory Certificate Services on the destination server** to open the **AD CS Configuration** wizard.
  10. In the **AD CS Configuration** wizard **Credentials** step, you will be asked to *Specify credentials to configure role services*. If the credential listed to edit box labeled *Credentials* has (at least) local administrator rights, you do not need to change the credentials in the **AD CS Configuration** wizard. <!-- Does this wizard pop up automatically? How do you find it? Do you click on it? --> If you need to change the credentials, click the **Change** button.

  ![Change Credentials in AD CS Configuration Wizard](../img/local-ocsp-cfg-ad-cs-config-wiz-1.png) 
  
  After clicking the **Change** button, the **Windows Security** dialog box will appear.

  ![Change Credentials in AD CS Configuration Wizard](../img/local-ocsp-cfg-ad-cs-config-wiz-2.png) 
  
  Type the administrative username (and Windows domain if appropriate) in the upper edit box, and the password for the administrative user in the lower edit box. Click **OK** when finished.

  11. Once you are satisfied with the credential listed in the **Credentials** step, click the **Next** button to proceed to the Role Services step.

  ![Click the Check Box next to Online Responder](../img/local-ocsp-cfg-ad-cs-config-wiz-4.png) 
  
  12. On the **Confirmation** step, confirm it says **Online Responder** under the **Active Directory Certificate Services** heading and then click the **Configure** button.
  
  ![Click the Check Box next to Online Responder](../img/local-ocsp-cfg-ad-cs-config-wiz-5.png) 

  13. When the configuration finishes, the wizard will advance to the Results step. Confirm a green check box appears with the text *Configuration succeeded* appears under the **Active Directory Certificate Services** heading.

  ![Click the Check Box next to Online Responder](../img/local-ocsp-cfg-ad-cs-config-wiz-6.png) 
  
  14. Click the **Close** button to close the **AD CS Configuration** wizard.
  11. Click the **Close** button to close the **Add Roles and Features Wizard**. 
  
  > As a best practice, reboot the server before continuing.

### Obtain OCSP Responder CA certificate

Two main approaches exist for the Microsoft OCSP Responder's method of issuing and obtaining certificates:
  
  * **Preferred**: the OCSP Responder will obtain a certificate from an offline CA and manually install it.  This approach, which is described below, will provide increased security over the second approach. <!-- If preferred, this one should come first. Is it more or less secure than other appraoch? Install it where? --><!-- Matt - "Install it where?" is why I had the preferred approach second - that question was answered following where it said "described below". -->
  
  * **Alternative**: The OCSP Responder will have permissions to automatically request a certificate <!-- Is this the certificate for the OCSP Responder itself?  Is the OCSP Responder the same as the Windows Server 2012 R2? --><!-- Matt - yes,  the certificate for the ocsp responder. Windows Server 2012 R2 is an operating system. The OCSP Responder is optional software we have installed on the operating system in the previous section. --> from an online Microsoft CA that resides on the same domain. This approach, if used in a dedicated, network-isolated domain with HSMs, can be relatively secure.  (Information on this approach is available from ______.)  <!-- Matt - given we are recommending against doing that in favor of using a more secure offline approach, do we need to provide guidance or links to how to do it? -->

> <i class="icon-info"></i>  Regardless of which approach you use, Microsoft Windows Clients require every certificate in the certificate chain, **including the self-signed Root**, to express **OCSP Signing (1.3.6.1.5.5.7.3.9)** in the **Extended Key Usage** extension. 

To use the **Preferred** approach to issuing and obtaining certificates, perform the following steps: 
  
  1. Generate a new **signing key and certificate request file** by creating an **INF** (i.e., Information File Name [INF] extension) file that specifies the details you wish to include in the request. For an example, see [Appendix 1 - Sample OCSP INF file](#appendix-1---sample-ocsp-inf-file-1). 
  
  2. Once you've created an INF file, open an administrative command window on the server and enter the following command:

	certreq -new <inf_filename>.inf ocsp.req

  > This command should generate a new signing key and output a **signed certificate request** to **ocsp.req**.    The certificate request file is PEM encoded - you can open it in notepad and copy/paste the content though a remote terminal window if desired.

  3. Deliver this request file to your CA and obtain your OCSP Responder certificate<!--How do they deliver it and in what form (e-mail?) will they obtain this certificate?-->. <!-- Matt - detailing all operational procedures for every agency and every CA is definitely out of scope for this document. -->
<!-- deleted "The certificate you receive will be Privacy-Enhanced Mail (PEM)-encoded." --> <!-- Matt - We have no way of knowing what format the CA will return the certificate. I guess the confusion came from "Deliver this request file to your CA and obtain your OCSP Responder certificate" before I pointed out that the request file was PEM encoded in the next sentence. -->
  
  5. Verify that the new certificate meets all of the OCSP Responder requirements:
  > * OCSP Signing (1.3.6.1.5.5.7.3.9) in the Extended Key Usage. </br>
      &mdash; This *should* be marked **critical.** </br>
  > * The id-pkix-ocsp-nocheck (1.3.6.1.5.5.7.48.1.5) extension is present. </br>
      &mdash; Including this extension prevents clients from checking the OCSP Responder certificates' revocation status.
  > * Key Usage must contain Digital Signature (80). </br>
      &mdash; This *should* be marked **critical.**
  > * The Subject Alternative Name *should* contain Domain Name Server (DNS) Name = OCSP Server DNS name.

### Install OCSP Responder CA certificate

  1. Copy the new OCSP Responder certificate, as well as the issuing CA certificate (or chain), to the OCSP Responder server.<!-- How? --><!-- Matt - copying a file to the server you are administering is the very most basic of server admin tasks and there are many different ways to accomplish it, is this something for which we really need to add details?   -->
  2. If you have not yet done so, install the locally trusted <!--Below the term, "Root CA," is used. Keep terms the same as much as possible. --><!-- Matt - Root CA and Root CA Certificate are not the same thing so they are not necessarily interchangeable. -->**Root CA Certificate** <!-- How? --><!-- Matt - I added a new appendix to detail all the steps.. --> in the **Computer Trust Root Certification Authorities store** by following the steps in [Appendix 3 - Manually Install a Root CA Certificate](#appendix-3---manually-install-a-root-ca-certificate-1) 
  3. Open an administrative command prompt by **right clicking** on the **Start Menu icon** found in the lower left corner of the screen, then selecting **Command Prompt (Admin)**
  4. Type the following command to accept the OCSP Responder certificate: 

	certreq -accept <ocsp_responder_certificate_filename>.cer

  > When successful, _certreq_ will exit and provide no feedback.

> <i class="icon-info"></i>  An error message stating: **_Certificate Request Processor:  A certificate chain could not be built to a trusted root authority. 0x800b010a (-2146762486 CERT_E_CHAINING)_** will indicate that the self-signed root (and intermediate CA certificates, if applicable) are not available or not in the correct certificate stores on the server. Ensure that the required CA certificates are imported into the correct **Computer account** stores (i.e., certificate stores). 

  4. To confirm that the certificate was properly imported, open the **Run** dialog box by right clicking the **Start Menu** icon in the lower left corner of your screen and selecting **Run**, or, by simultaneously press both the **Windows** and the **R** key.

In the edit box next to *Open*, type mmc.exe, then press the **Enter** key or click the **OK** button

![Open the Run dialog and type mmc.exe](../img/local-ocsp-install-root-ca-50.png)

If prompted by the User Account Control system, accept the privilege escalation

After the MMC console opens, click **File** -> **Add/Remove Snap-in...** or simultaneously press both the **Ctrl** and **M** keys to open the **Add or Remove Snap-ins** dialog

![Open the Add or Remove Snap-ins dialog from mmc.exe](../img/local-ocsp-install-root-ca-51.png)

In the **Add or Remove Snap-ins** dialog, in the left pane under *Available Snap-ins*, select **Certificates**, then click the **Add** button

![Add the Certificates Snap-in in the Add or Remove Snap-ins dialog in mmc.exe](../img/local-ocsp-install-root-ca-52.png)

Upon clicking the Add button in the **Add or Remove Snap-ins** dialog, the **Certificates snap-in** wizard will appear and present three radio selection options. Select the third option, **Computer Account**, then click the **Next** button.

![Certificates snap-in wizard, select Computer Account](../img/local-ocsp-install-root-ca-54.png)

The next step in the wizard is *Select Computer*. If you are installing the Root CA Certificate on the same server you are running MMC, then there is no need to change the targeted server in this dialog. If you wish to install the Root CA Certificate on a remote computer, select the *Another computer* radio button, then click the **Browse** button to open the Select Computer dialog. Refer to Microsoft provided [Select Computer Dialog Box](https://msdn.microsoft.com/en-us/library/dd145335.aspx) documentation for details of the Select Computer dialog. When you are satisfied with your selection, click Finish to close the wizard.

![Certificates snap-in wizard, Select Computer](../img/local-ocsp-install-root-ca-55.png)

Closing the wizard returns you to the **Add or Remove Snap-ins** dialog. Confirm **Certificates (Local Computer)** is listed in the right hand pane under *Selected Snap-ins*. Click the OK button to close the **Add or Remove Snap-ins** dialog add the snap-in to MMC.

![Close the **Add or Remove Snap-ins** dialog](../img/local-ocsp-install-root-ca-56.png)

After closing the **Add or Remove Snap-ins** dialog you are returned to MMC with the Certificates Snap-in open. Expand the **Certificates** tree to **Personal** -> **Certificates** as shown in the image below. Confirm that the newly accepted OCSP Responder certificate is listed there.

![Locate OCSP Responder Certificate in MMC](../img/local-ocsp-cfg-mmc.png)

  8. Double-click on the certificate to open the Certificate dialog. Confirm the Certificate dialog states *OCSP Signing* under _This certificate is intended for the following purpose(s)_; and indicates that *You have a private key that corresponds to this certificate*.

 ![Locate OCSP Responder Certificate in MMC](../img/local-ocsp-cfg-cert-key.png)
 
  9. Confirm that it is valid<!--What does it say to indicate validity? --> to this Windows Server by clicking the Certification Path tab. Note the *Certification path* begins with your locally trusted Root CA and ends with the new OCSP Responder certificate. Under Certificate status, confirm it states *This certificate is OK.*

 ![Confirm the OCSP Responder certifciate is valid](../img/local-ocsp-confirm-cert-is-valid.png)
 
  9. Close the certificate<!-- How do you close it? --> using one of the following methods:

	- System Menu
		- Simultaneously depress the ALT key and the Space Bar
		- Press the down arrow key to highlight Close
		- Press the Enter key
	- Use a pointing device
		- Locate the “X” in the top right corner of the certificate dialog window
		- Use your mouse or other pointing device to place the pointer over the”X”
		- Depress the left mouse button
	- Use a pointing device, method 2
		- Locate the “OK” button on the bottom right corner of the certificate dialog window
		- Use your mouse or other pointing device to place the pointer over the”OK” button
		- Depress the left mouse button
	- Escape key
		- Locate the button labeled “ESC” on the top left corner of your keyboard
		- Using any finger of your choosing, press the button and release
	- Generic Close Window shortcut
		- Locate the ALT and F4 buttons on your keyboard
		- Simultaneously depress both the ALT and F4 keys. Depending on your keyboard layout and your finger span, you may find it necessary to use two hands
	- Keyboard Navigation
		- Press the Tab key repeatedly until the “OK” button receives active focus designated by a dotted line around the button and a shift in its highlight coloring
		- Press the Enter key or the Space Bar

  10. Right-click on the certificate in MMC, and select **All Tasks** and then **Manage Private Keys**.

![Manage Private Keys in MMC](../img/local-ocsp-cfg-manage-private-keys.png)

  11. When the **Permissions** dialog box appears, click on the **Add** button.

![Default Private Key Permissions](../img/local-ocsp-cfg-default-permissions.png)

  12. If this server is on a domain, click on the **Locations** button, and select the local server's name. 
  13. Type **NETWORK SERVICE** into the **Enter the object names to select** text box, and click on the **Check Names** box. Click on **OK** when finished.
  
  > The **Permissions for [server name] private keys** window displays. 

![Add NETWORK SERVICE Permissions](../img/local-ocsp-cfg-add-network-service.png)

  14. From the **Permissions...** window, select **NETWORK SERVICE**, deselect (uncheck) the **Full control** checkbox, and then click on **OK**.

![Allow only Read for NETWORK SERVICE](../img/local-ocsp-cfg-read-only-rights.png)

  > The OCSP Responder should now be able to use the certificate and private key.

### Configure Revocation Sources

Every issuing and intermediate CA certificate to be supported by the OCSP Responder must have their own entry in the **Revocation Configuration**. <!-- Where is Revocation Configuration located? --> The procedure for manually adding entries to the Revocation Configuration are detailed in the section [Manually add a Revocation Source](#manually-add-a-revocation-source-1) starting on the next line of this document.

#### Manually add a Revocation Source

In the example images below, _Federal Bridge CA 2016_, is used as an example of a revocation source.

  1. Open the **Online Responder Management** console.  At the right-hand panel under **Online Responder**, right-click on Revocation Configuration, and then select **Add Revocation Configuration**.

![Add Revocation Configuration](../img/local-ocsp-cfg-add-revocation-configuration.png)

  2. At the next window, select **Name the Revocation Configuration**.  Then enter the name of your Revocation Configuration. (It is recommended that you always use the CA's common name, plus any other identifying information that may be necessary.) Click on **Next**.

![Name the Revocation Configuration](../img/local-ocsp-cfg-add-rev-conf-1.png)

> <i class="icon-info"></i>  You will need to configure separate Revocation Configurations for CAs that have more than one key pair. Name your Revocation Sources so that you can easily identify these cases.

  3. At the next window, select a **CA Certification Location**. The location can be either a Local certificate store or a File. Click on a radio button to select a location. Click on **Next**, select the CA certificate, and then click **Next** again.

![Select Import From File](../img/local-ocsp-cfg-add-rev-conf-2.png)

  4. At the next window, click on the radio button next to **Manually select a signing certificate**. Click on **Next**.

![Select Manual Signing Certificate](../img/local-ocsp-cfg-add-rev-conf-4.png)

  > An error (dialog box) will appear stating that _One or more errors occurred while revocation provider settings were being configured.  Click the "provider button" to configure the revocation provider manually_... Click on **OK**.

![Revocation Provider Error Message](../img/local-ocsp-cfg-add-rev-conf-5.png)

  5. At the next window, click on the **Provider** button to open the **Revocation Provider Properties** dialog box.

![Click the Provider Button](../img/local-ocsp-cfg-add-rev-conf-6.png)

  6. Click **Add**, and then copy and paste the CA's **CRL distribution point URL** (CRL DP) into the **Add the...CRL at this address (URL) to the list:** text box. (**Note:**  This URL is the CRL distribution point URL that this CA puts into the certificates it issues, **not** the URL in the CA certificate itself.) Click on **OK**.

![Enter the CRL DP URL](../img/local-ocsp-cfg-add-rev-conf-7.png)

  7. At the **Revocation Provider Properties** dialog box, deselect (uncheck) the checkbox next to **Refresh CRLs based on their validity periods**. (**Note:** This option has proven unreliable in testing.) At **Update CRLs at this refresh interval (min)**, enter a reasonable refresh interval, such as _60 minutes_, and click on **OK**.

![Configure the CRL update internal](../img/local-ocsp-cfg-add-rev-conf-8.png)

  > After completing the above steps, you will need to assign the OCSP Responder Certificate to the configuration. Until this is done, you will see the error:  _Signing Certificate: &nbsp;Not Found_ in the status panel window for this Revocation Configuration. 

![OCSP Signing Certificate Not Found](../img/local-ocsp-cfg-signing-certificate-not-found.png)

  8. In the status panel window, right-click on the Revocation Configuration Name itself ("Federal Bridge CA 2016" in this example), and then select **Assign Signing Certificate**.

![Assign OCSP Signing Certificate](../img/local-ocsp-cfg-assign-signing-certificate.png)

  > A **Windows Security** dialog box will appear that allows you to select a **Signing Certificate** (i.e., the OCSP Responder certificate). Click on the correct certificate, and click on **OK**.

![Select Signing Certificate](../img/local-ocsp-select-signing-certificate.png)

  > After selecting the certificate, the status panel will still display an error stating that *The data necessary to complete this operation is not yet available.* What this really means is that the OCSP Responder has not yet downloaded the CRL.

![CRL not yet downloaded](../img/local-ocsp-crl-not-downloaded.png)

  > After as little as two but no more than five minutes, right-click on **Array Configuration** at the status panel window, and select **Refresh**.
  
![Refresh](../img/local-ocsp-cfg-refresh.png)

  > Once the download finishes, your status panel window should look like this:

![OCSP Revocation Configuration working correctly](../img/local-ocsp-cfg-working-correctly.png)

  > If the error message appears: **_The revocation provider failed with the current configuration. The object identifier does not represent a valid object. 0x800710d8 (WIN32: 4312 ERROR_OBJECT_NOT_FOUND), 0x800710d8_**. This error indicates an incorrect CRL Distribution Point URL. 

  9. Repeat this process for each CA that you want to add to the OCSP Responder.

## Configure the Windows Client
<!--Shouldn't this title be "Manually configure the Windows Client" (subtitle just below)? Looks like a repeat of the same title idea. --><!-- Matt - No, this section has a manual and not-manual approaches in it. Given that our audience should know more than nothing about Windows administration, it seems they would know that group policy affects every machine it is applied to on the domain -->
You will need to configure each CA that you want to add to the OCSP Responder. <!-- Correct? -->In addition, to maximize local availability<!-- Explain "maximize local availability." -->, you will need to configure each CA in the certificate chain to your trusted root certificate(s) (for example, any CAs that can verified by the Federal Common Policy CA). <!-- This paragraphic was not close to plain language. Can you simplify? Will all users know what Federal Common Policy CA is?  (Also referred to as "COMMON"?) Will users of this guide ALL need to configure CAs that can be verified by FCPCA? --><!-- Matt - given it's on the Internet, it's difficult to say what applies to everyone who might use the document. We are writing it primarily for federal government and as a general rule yes they would all want to use common and as a general rule I'd expect any federal employee that is reading this document would have some idea what it is -->

### Manually configure the Windows Client
<!-- There isn't an opposing title like Automatically configure the Windows Client.  If all related steps pertain to manual configuration, then delete this title and add Manually to the Heading 2 just above. --> <!-- Matt - I thought a section entitled "Windows Client Configuration" with a subsection "Manual Client Configuration" and another "Group Policy Configuration" was reasonably clear. I.e. there's a manual section and a section for the well known mass configuration function in Windows aka Group Policy.. but I changed the title to "Automatically Configure the Windows Client Using Group Policy" so there's no confusion-->

To manually configure a locally trusted, OCSP Responder, you will use the **MMC** **Certificates snap-in**.   

Open the **Run** dialog box by right clicking the **Start Menu** icon in the lower left corner of your screen and selecting **Run**, or, by simultaneously press both the **Windows** and the **R** key.

In the edit box next to *Open*, type mmc.exe, then press the **Enter** key or click the **OK** button

![Open the Run dialog and type mmc.exe](../img/local-ocsp-install-root-ca-50.png)

If prompted by the User Account Control system, accept the privilege escalation

After the MMC console opens, click **File** -> **Add/Remove Snap-in...** or simultaneously press both the **Ctrl** and **M** keys to open the **Add or Remove Snap-ins** dialog

![Open the Add or Remove Snap-ins dialog from mmc.exe](../img/local-ocsp-install-root-ca-51.png)

In the **Add or Remove Snap-ins** dialog, in the left pane under *Available Snap-ins*, select **Certificates**, then click the **Add** button

![Add the Certificates Snap-in in the Add or Remove Snap-ins dialog in mmc.exe](../img/local-ocsp-install-root-ca-52.png)

Upon clicking the Add button in the **Add or Remove Snap-ins** dialog, the **Certificates snap-in** wizard will appear and present three radio selection options. Select the third option, **Computer Account**, then click the **Next** button.

![Certificates snap-in wizard, select Computer Account](../img/local-ocsp-install-root-ca-54.png)

The next step in the wizard is *Select Computer*. If you are configuring CA Certificates on the same system you are running MMC, then there is no need to change the targeted computer in this dialog. If you wish to configure the CA Certificate on a remote computer, select the *Another computer* radio button, then click the **Browse** button to open the Select Computer dialog. Refer to Microsoft provided [Select Computer Dialog Box](https://msdn.microsoft.com/en-us/library/dd145335.aspx) documentation for details of the Select Computer dialog. When you are satisfied with your selection, click Finish to close the wizard.

![Certificates snap-in wizard, Select Computer](../img/local-ocsp-install-root-ca-55.png)

Closing the wizard returns you to the **Add or Remove Snap-ins** dialog. Confirm **Certificates (Local Computer)** is listed in the right hand pane under *Selected Snap-ins*. Click the OK button to close the **Add or Remove Snap-ins** dialog add the snap-in to MMC.

![Close the **Add or Remove Snap-ins** dialog](../img/local-ocsp-install-root-ca-56.png)

After closing the **Add or Remove Snap-ins** dialog you are returned to MMC with the Certificates Snap-in open. 

![MMC Certificates Snap-In](../img/local-ocsp-client-1.png)

  2.  Under **Intermediate Certification Authorities** and then select **Certificates.** 
  
  3. Next, at the right-hand panel, under **Issued To,** select the **CA certificate** that you want to associate with the locally trusted, OCSP Responder. <!-- Original had unclear meaning. Grammar implied that the CA certificate is already active somehow and waiting for an item to be assigned to it.  Once the OCSP Responder is assigned to the already active CA certificate, the OCSP Responder becomes "active." Correct? --><!-- Matt - I'm not sure what you mean by active. If you're asking whether the CA certificate in this procedure is already installed in the certificate store, then yes. This procedure configures windows to use your locally trusted ocsp responder when checking revocation for certificates issued by a CA certificate that is already installed in the local certificate store --> Then, right-click on the certificate and select **Properties** from the drop-down window.
  
  > The **Properties** window appears.

![Select certificate properties in MMC](../img/local-ocsp-client-2.png)

  4. Click on the **OCSP** tab.  In the text box, enter the **URL of your locally trusted, OCSP Responder**.

  > The Microsoft <!-- The "Microsoft" OCSP Responder has not been mentioned before. Is it the same as the "OCSP Responder" or different? --><!-- Matt - That is the topic of this entire document and was the level 1 heading in the original version, i.e. "Install Microsoft OCSP Responder". I think it would be exceedingly pedantic to refer to it as Microsoft OCSP Responder throughout the entire document given that is the context. I added it here because I am pointing out that this behavior is specific to the Microsoft OCSP Responder software. In other words, OCSP Responder software that is not the Microsoft OCSP Responder does not put /ocsp at the end of the URL --> OCSP Responder adds **ocsp** to the URL, e.g., http://[servername]/ocsp.

  5. Click on the **Add URL** button. 

![Add a custom OCSP URL](../img/local-ocsp-client-3.png)
  
  6. Confirm that the URL appears in the text box list.

![Custom OCSP URL added to certificate properties](../img/local-ocsp-client-4.png)

  > By using the same window used in Steps 4-6 above, you can add and configure multiple OCSP Responder URLs.

  7. Click on **OK** when satisfied with all of the OCSP Responders you have added. 
  
  > Now, all applications that use Windows certificate validation Application Programming Interfaces (APIs) will use your configured OCSP Responder when validating certificates *issued* by this CA.

### Automatically Configure the Windows Client Using Group Policy
This section assumes you have domain administrator rights, know what Group Policy is, and know how to use the Group Policy Editor. 

#### Locate and import the Locally Trusted Root CA Certificate
<!-- Caps needed? --><!-- Matt - Not sure what you mean by Locate -->

You can distribute the **locally trusted root CA certificate** to Windows Clients using **group policy** functions. 

  1. To do this, create or open the **Group Policy** object you want to use in the **Group Policy Editor**, and then navigate to:
  
  > **Computer Configuration**/**Policies**/**Windows Settings**/**Security Settings**/**Public Key Policies**/**Trusted Root Certification Authorities**. 
  
  2. Determine if the **locally trusted root CA certificate** is already listed<!--Listed where? What window?--> in the list of certificates in the group policy editor window at the location you navigated to in the previous step. An example of the group policy editor window is in the image below. The certificates (if any are present) are listed on the right hand side of the group policy editor window.

![Trusted Root Certification Authorities Group Policy Configuration](../img/local-ocsp-group-policy-15.png)

If the **locally trusted root CA certificate** is not listed, right-click on **Trusted Root Certification Authorities** and select **Import**.

![Trusted Root Certification Authorities Group Policy Configuration](../img/local-ocsp-group-policy-11.png)

Clicking **Import** will open the **Certificate Import** wizard. Click the **Next** button to continue.

![Click Next to Continue](../img/local-ocsp-install-root-ca-59.png)

The **Certificate Import** wizard now prompts for **File to Import**. Click the Browse button to select your Root CA certificate file from the file system. After you have selected the Root CA certificate file, the full path to the file will appear in the edit box under *File name*. Once you have completed selection of the Root CA certificate file, click the **Next** button to continue.

![Select the Root CA Certificate](../img/local-ocsp-install-root-ca-61.png)

The next step in the wizard is **Certificate Store**. This step allows you to modify the certificate store to which the Root CA certificate will be imported. Given that you have initiated the wizard from the desired certificate store (i.e. the Local Computer, Trusted Root Certification Authorities certificate store) no changes are needed on this screen. Click the **Next** button to continue.

![Do not change the certificate store](../img/local-ocsp-install-root-ca-62.png)

The final step in the **Certificate Import Wizard** is **Completing the Certificate Import Wizard**. Click the **Finish** button to initiate the certificate import.

 ![Click Finish](../img/local-ocsp-install-root-ca-64.png)

When the import has completed, the Certifciate Import Wizard will display a final message box indicating *The import was successful*. Click the **OK** button to close this message box.

 ![Click OK](../img/local-ocsp-install-root-ca-65.png)


#### Configure a locally trusted, OCSP Responder
<!-- Matt - I don't understand why you made the title this. To me, this sounds like we're configuring an OCSP responder instead of configuring group policy to enable clients to use the OCSP Responder -->

You can also configure Microsoft Windows domain members using **group policy** functions. 

  1. To do this, first create or open the **group policy object** you want to use in the Group Policy Management Editor<!--From where? How do they know which one they want to use? Is any screen/menu function actually called Group Policy?--><!-- Matt - where? I don't think this document is the place to educate domain administrators about what group policy is and how to use the group policy editor to create or open one.   -->, and then go to:
  
  > **Computer Configuration**/**Policies**/**Windows Settings**/**Security Settings**/**Public Key Policies** 
  
  2. Next, select the **certificate store** that contains the **CA certificate for the locally trusted, OCSP Responder** from the drop-down menu. The certificate store is usually called the **Intermediate Certification Authorities**.

  > In the certificate store, you should already see a CA, such as the self-signed Federal Common Policy CA<!-- What is the purpose of telling the user about this? Used the term, "certificate store," just above. Keep terminology the same.--><!-- Matt - this isn't what the original text said. It originally said "A trust anchor such as the self signed Federal Common Policy CA should be configured in the Trusted Root Certification Authorities store." The purpose of that text was to inform the reader that they would use something other than the Intermediate store if they were configuring a trust anchor, such as, for example, the trust anchor everyone in the federal gov is using. This new text is incorrect, there is no reason to think the Federal Common Policy CA should show up in the Intermediate Certification Authorities store in your group policy object. For that matter, if it's a new Group Policy object (which it may or may not be) then there should be no certificates listed -->.

  3. Right-click on the certificate store name (e.g., **Intermediate Certification Authorities** or **Trusted Root Certification Authorities**) and select **Import**.

![Group Policy Certificate Store](../img/local-ocsp-group-policy-01.png)

Clicking **Import** will open the **Certificate Import** wizard. Click the **Next** button to continue.

 ![Click Next to Continue](../img/local-ocsp-install-root-ca-59.png)

The **Certificate Import** wizard now prompts for **File to Import**. Click the Browse button to select your Root CA certificate file from the file system. After you have selected the Root CA certificate file, the full path to the file will appear in the edit box under *File name*. Once you have completed selection of the Root CA certificate file, click the **Next** button to continue.

 ![Select the Root CA Certificate](../img/local-ocsp-install-root-ca-61.png)

The next step in the wizard is **Certificate Store**. This step allows you to modify the certificate store to which the Root CA certificate will be imported. Given that you have initiated the wizard from the desired certificate store (e.g. the Group Policy, Intermediate Certification Authorities or Trusted Root Certification Authorities certificate store) no changes are needed on this screen. Click the **Next** button to continue.
![Do not change the certificate store](../img/local-ocsp-install-root-ca-62.png)

The final step in the **Certificate Import Wizard** is **Completing the Certificate Import Wizard**. Click the **Finish** button to initiate the certificate import.

 ![Click Finish](../img/local-ocsp-install-root-ca-64.png)

When the import has completed, the Certifciate Import Wizard will display a final message box indicating *The import was successful*. Click the **OK** button to close this message box.

 ![Group Policy Certificate Import](../img/local-ocsp-group-policy-07.png)

  6. To configure the locally trusted, OCSP Responder, right-click on the imported certificate and select **Properties**. 

![Locally Trusted OCSP Group Policy Configuration](../img/local-ocsp-group-policy-08.png)

  7. Add the OCSP URL(s) as you did above in Steps ???? under [Manually configure the Windows Client](#manually-configure-the-windows-client-1)

## End-to-end testing of locally trusted, OCSP Responder
<!--Correct?--><!-- Matt - if it's end-to-end, in my mind that includes things other than just the server, for example, the client, and the connection between the client and the server -->

### Testing with Windows Clients

#### Prepare for testing 

From the Windows Client command line, you will use the **certutil.exe** to test all Windows versions that will operate in your local area network.  
  
> <i class="icon-info"></i>  <!--Probably should be an alert box?-->An apparent bug exists when you use **certutil** with Windows 10. If it does, you will see this error: **_FAILED: 0x80092004 (-2146885628 CRYPT_E_NOT_FOUND)_**, even when a certificate path seems to validate correctly. If this occurs, we suggest testing other Windows versions. As of May 2017, Windows 7 and 8.1 do **not** have this issue.

  * If you are using **group policy** to push locally trusted, OCSP settings to Windows Clients, ensure that the updated policy has been applied to each Client.

  * Ensure that you have copies of all certificates that were **issued by** the CAs that you configured as OCSP Responders <!-- Meaning correct? --><!-- Matt - No, we did not configure any CAs as OCSP responders.  We configured an OCSP responder to provide revocation status for CAs it has nothing to do with, then configured Windows clients to trust our OCSP Responder as if it is authoritative for those CAs -->. These tests will build a complete certificate path to a trusted root<!-- The Root CA? --><!-- Matt - if by "The" you mean the root ca that we set up specifically to issue ocsp responder certificates, then no. If you mean the trusted root for whatever path we are validating that we have also configured our OCSP Responder to be "authoritative" for, then yes. -->.  (**Note:**  If intermediate CA certificates are part of your tested path, it is not necessary to test them independently.)
  
Follow these steps to prepare for your tests: <!--Overall purpose of these steps?-->

  1. Enable the Microsoft CAPI2 logging<!-- Said "logging"...? --><!-- Yes, the entire testing section is dependent on analysis of Event Logs and CAPI 2 Logging, so logging is definitely the correct term here. --> on your Client <!-- How does the user do this? -->by following these instructions.<!-- Matt - ??? --> Open the **MMC Event Viewer snap-in**, and then go to:
  
  > **Applications and Services Logs**/**Microsoft**/**Windows**/**CAPI2**/**Operational** 
  
  2. With "Operational" selected, click on **Enable Log** in the **Actions** pane<!--Left-hand panel? No screen capture to verify. -->. <!-- Matt - I added a screen capture so there will be no confusion -->

 ![Locally Trusted OCSP Group Policy Configuration](../img/local-ocsp-event-log-actions-pane.png)  
  
  3. The default log size is 1 MB. To increase the log size, click on **Properties**, and then your desired log size. (The maximum size is recommended.) <!-- What is the max size?  Moved the "Disable Log" step to end of testing, since it should be done after user completes testing. --><!-- Matt - Per a quick Google search, the maximum size for the event log is 4,194,240 kilobytes. (4 GB), not sure we should recommend they configure that!  As for moving the aside (it was not a step, it was a info box) about disabling this to the end, I guess that's OK if we assume everyone will read all the steps to the end.  -->

  5. If there are intermediate CA certificates needed to validate each of your test certificates that are not already present in the **Intermediate Certification Authorities** store, it is recommended that you install them before testing to reduce the number of log events generated during testing.
  
  6. Double-click on each test certificate to verify that each certificate path is built. Confirm that each one is valid and has a certificate path in the **Certification Path tab**. 

  > Optionally, you may want to isolate the test Client from the Internet. We highly recommend doing this if the locally trusted OCSP will be used for ongoing operations when disconnected from the Internet. If this is the case, the Client should be able to validate configured certificates through access to only the locally trusted OCSP Responder. There are multiple ways to achieve the effect of being disconnected from the Internet; one approach is to remove all DNS server entries from the Client and add the OCSP Responder to the host file. If you use this approach, ensure that you clear the DNS cache before testing by using:

	**ipconfig /flushdns**

#### Execute testing

  1. Open the **Event Viewer** and go to:
  
  > **Applications and Services Logs**/ **Microsoft**/**Windows**/**CAPI2**/**Operational**. 
  
  2. Click on **Clear Log** in the **Actions** pane.

  3. To clear all of the cached certificates, CRLs, and OCSP responses, open a command prompt and enter the following command:

    **certutil -URLcache * delete**

  4. To generate detailed output about the content of each certificate in the certificate path (concluding with whether or not the certificate path was successfully validated), enter the following command, replacing "certificate.cer" with the path and file name of a certificate:     
    
    **certutil -verify "certificate.cer"**

  > For example:

    Verified Issuance Policies:
	    2.16.840.1.101.3.2.1.3.6
		2.16.840.1.101.3.2.1.3.7
	    2.16.840.1.101.3.2.1.3.14
		2.16.840.1.101.3.2.1.3.15
    Verified Application Policies: All
    Cert is a CA certificate
    Leaf certificate revocation check passed

    CertUtil: -verify command completed successfully

  > If the validation fails, you will see the message: **CertUtil: -verify command FAILED**, along with an error code. It can sometimes be difficult to ascertain what went wrong from the **certutil** output; however, the CAPI2 log contains much more detail. The [Troubleshooting](troubleshooting-1) section may help you diagnose and correct problems.

> <i class="icon-info"></i>  To simplify examination of the event log entries, prepare your command line window or a batch file before clearing the log, then execute the test commands and immediately refresh the **Event Viewer** window. These steps will rapidly reduce the likelihood of unrelated certificate activities being present in the log.

  5. If path validation was successful, you must examine the CAPI2 log entries to ensure that your locally trusted, OCSP Responder is functioning <!-- Matt - originally said "being used" because the purpose of the step is confirm that the client used the local responder instead of having used some other source of revocation status. changing this to "functioning" suggests to me we are confirming the OCSP Responder is functioning rather than confirming the client behaved properly? --> successfully for each certificate in the path for which you configured it. Step through the sequence of events from first to last for the entire path. Click on the **Details** tab to examine the contents of each event.

>  <i class="icon-info"></i>  The possible events are detailed below in chronological order. It may be easier to examine the events in reverse order in the **Event Viewer**. Click on the **Data and Time** column at the top of the **Event Viewer** list so that the events display in the order shown in the table below.

  > The test begins with **Event ID 10**: **Build Chain**, where you will see **CertGetCertificateChainStart** and [**ProcessName**]  **certutil.exe** in the **UserData**:

![CertGetCertificateChainStart](../img/local-ocsp-testing-1.png)

  6. Monitor the **CorrelationAuxInfo** &mdash; **TaskId** and **SeqNumber** fields in this event. As the validation proceeds, the **TaskId** remains constant and the **SeqNumber** will increment for each subsequent log entry. If the TaskId changes, then you are looking at an unrelated event.

  > The first **Event ID 10** should be followed by the **Verify Revocation** sequence that starts with **event 40** and ends (if successful) with **event 41**. The table below contains the sequence of events that should appear when using your locally trusted, OCSP Responder to check certificate revocation status<!-- CRLs? --><!-- Matt - not sure what you're asking here. -->.

| **Event ID** | **Task Category** | **Details** |
| :----------: | :---------------- | :---------- |
| 40 | Verify Revocation |  |
| 52 | Retrieve Object from Network |  |
| 53 | Retrieve Object from Network | **UserData** / **CryptRetrieveObjectByUrlWire** / **URL** contains a URL for the OCSP Responder |
| 10 | Build Chain |  |
| 11 | Build Chain | **UserData** / **CertGetCertificateChain** / **Certificate** [**subjectName**] displays the common name of your OCSP Responder |
| 30 | Verify Chain Policy |  |
| 41 | Verify Revocation | **UserData** / **CertVerifyRevocation** / **OCSPResponse** [**url**] contains a URL for the OCSP Responder<br/> |

  7. Examine each instance of **event 41** in the log. If **UserData**/**CertVerifyRevocation**/**IssuerCertificate** [**subjectName**] is a CA for which you configured an OCSP URL, examine the remaining details of the event. Confirm that **UserData**/**CertVerifyRevocation** /**OCSPResponse** [**url**] contains a URL for the locally trusted, OCSP Responder. If you find a different URL or no **OCSPResponse** section, then it<!--"it" refers to what?--><!-- Matt - the source of the output we're examining was the verification of the certificate in step 4. -->did not use the OCSP Responder.

> <i class="icon-info"></i>  The URL that appears in the event log contains the base-64-encoded, OCSP request.

  8. After you have completed your testing, disable the log, because the log will degrade performance. To do this, click on **Disable Log** in the **Actions** pane. 

### Troubleshooting

The table below lists some event log errors you could encounter, their possible causes, and possible solutions.

| **Error Event ID** | **Task Category** | **Details Contain** | **Possible Cause(s)**
| :----: | :----------------------- | :---------------------- | :------ |
| 11 | Build Chain | A certificate chain could not be built to a trusted root authority. | If this error is preceded by event sequence 40/52/53/10, verify installation of the locally trusted, OCSP Root CA certificate.<br/>&nbsp;&nbsp;&nbsp;&nbsp;*- or -*<br/>If this error appears immediately following the first event 10, a path could not be built for the certificate you are attempting to verify. Ensure that all required intermediate CA certificates are available and that the necessary root is installed.|
| 42 | Reject Revocation Information | CertRejectedRevocationInfo - OCSPResponse \[url] *\[your local OCSP Responder]* and Actions \[name] **CheckTimeValidity** | The OCSP Responder system clock is incorrect.<br/>&nbsp;&nbsp;&nbsp;&nbsp;*- or -*<br/>An expired CRL is being used by the OCSP Responder. Confirm that the "Refresh CRLs based on their validity periods" is NOT enabled in the Provider properties; configure a refresh interval instead. |
| 42 | Reject Revocation Information | CertRejectedRevocationInfo - OCSPResponse \[url] *\[your local OCSP Responder]* and Actions [name] **CheckResponseStatus** | The OCSP Responder returned "Not Authorized" because it has not been configured to respond for this CA. You will see this error if you configure the Revocation Source for an issuer without adding the corresponding configuration to the OCSP Responder. |
| 53 | Retrieve Object from Network | CryptRetrieveObjectByUrlWire - URL *\[Your OCSP Responder]* | OCSP Responder is stopped, server is offline, or server is unreachable. |
| 53 | Retrieve Object from Network | CryptRetrieveObjectByUrlWire - URL *\[CRL or OCSP other than your local OCSP Responder]* | Unless preceded by the Error Event 53 described in the previous row, you should not see this error. If this occurs, confirm the Revocation Sources are configured for the Issuing CA. |

  > If the above table doesn't lead you to a solution, the Microsoft TechNet article: [Troubleshooting PKI Problems on Windows Vista](https://technet.microsoft.com/en-us/library/cc749296(v=ws.10).aspx) may help. (This article has proven to be useful with everything from Windows Vista to Windows 10 and Server 2012 R2.)

## Appendix 1&mdash;Sample OCSP INF file

The INF file below is a configuration file example that you can use to generate a new certificate-signing request for the OCSP Responder.

 - Customize the Subject field in accordance with your Issuing CAs name
	 - The example below could be submitted to CA "CN=OCSP Issuing CA,DC=agency,DC=local"
 - Ensure KeyLength is set in accordance with the CA key sizes for which you intend to provide OCSP responses
 - If you are using an HSM, you will need to modify the ProviderName, per the HSM documentation

Sample INF file for generating the OCSP Responder certificate request:

	[NewRequest]
	Subject = "CN=Local OCSP Server, DC=agency, DC=local"
	PrivateKeyArchive = FALSE
	Exportable = FALSE
	UserProtected = FALSE
	ProviderName = "Microsoft Software Key Storage Provider"
	ProviderType = 1	
	MachineKeySet = TRUE
	UseExistingKeySet = FALSE
	KeyLength = 2048
	RequestType = CMC
	
	[EnhancedKeyUsageExtension]
	OID="1.3.6.1.5.5.7.3.9"
	
	[Extensions]
	; id-pkix-ocsp-nocheck
	1.3.6.1.5.5.7.48.1.5 = "{hex}05 00"
	; the following is only needed if submitting to a CA that has multiple keys
	; uncomment and set the example hex string to the Subject Key ID of the CA
	; 2.5.29.35="{hex}30 16 80 86441F15A89DA7CA3F09F643FFE31EE9C6FC0CD6"
	
	[ApplicationPolicyStatementExtension]
	Policies = OCSPSigning
	Critical = FALSE
	
	[OCSPSigning]
	OID = 1.3.6.1.5.5.7.3.9



## Appendix 2&mdash;Using Microsoft CA as the self-signed root

Prior to configuring Certificate Services and generating a new Root CA key pair, place the **CaPolicy.inf** file (as below) in **%SYSTEMROOT%**.  This will create a self-signing, root certificate with a 2048-bit RSA key and a 10-year validity period with **OCSP Signing (1.3.6.1.5.5.7.3.9)** in the **Extended Key Usage** extension. 

  > Sample CaPolicy.inf :

	[Version]
	Signature="$Windows NT$"

	[AuthorityInformationAccess]
	; This extension will be omitted

	[CRLDistributionPoint]
	; This extension will be omitted

	[Extensions]
	; Key Usage = CertSign & CrlSign
	2.5.29.15=AwIBBg==
	Critical=2.5.29.15 

	[EnhancedKeyUsageExtension]
	OID=1.3.6.1.5.5.7.3.9 	; ocsp signing
	Critical=No

	[certsrv_server]
	LoadDefaultTemplates=0
	RenewalKeyLength=2048
	RenewalValidityPeriod=Years
	RenewalValidityPeriodUnits=10

	[BasicConstraintsExtension]
	PathLength=0
	Critical=True


> <i class="icon-info"></i>  When configuring a new CA, the **Setup Wizard**<!--Name of Setup Wizard?--> may default to using 2048-bit RSA with SHA-1. At a minimum, change this setting to 2048-bit RSA with SHA-256.

  > Prior to issuing OCSP Responder certificates, you must enable the **OCSP-No-Check** extension using the following commands:


	certutil -v -setreg policy\EnableRequestExtensionList +1.3.6.1.5.5.7.48.1.5
	-or-
	certutil -v -setreg policy\editflags +EDITF_ENABLEOCSPREVNOCHECK
	
	net stop certsvc
	net start certsvc


If the new CA is dedicated to issuing OCSP Responder certificates, you may want to disable the **CDP** and **AIA** extensions inside the **Certification Authority MMC snap-in** to improve efficiency. <!--Efficiency related to what?-->If so, simply uncheck the checkboxes for the **"Include in the CDP/AIA extension of issued certificates"** for each URL in the **Extensions** tab. (These extensions are not needed by the OCSP Clients.)



# Appendix 3 - Manually Install a Root CA Certificate
This appendix provides step by step instructions for installing a Root CA Certificate in the Local Computer Trusted Root Certification Authorities certificate store on Microsoft Windows Server 2012 R2.

## Prerequisites

- Administrative logon access to server
- Keyboard and pointing device (e.g. mouse or trackball)
- A copy of the Root CA Certificate file on the server or accessible to the server via file share

## Installation Procedure

Open the **Run** dialog box by right clicking the **Start Menu** icon in the lower left corner of your screen and selecting **Run**, or, by simultaneously press both the **Windows** and the **R** key.

In the edit box next to *Open*, type mmc.exe, then press the **Enter** key or click the **OK** button

![Open the Run dialog and type mmc.exe](../img/local-ocsp-install-root-ca-50.png)

If prompted by the User Account Control system, accept the privilege escalation

After the MMC console opens, click **File** -> **Add/Remove Snap-in...** or simultaneously press both the **Ctrl** and **M** keys to open the **Add or Remove Snap-ins** dialog

![Open the Add or Remove Snap-ins dialog from mmc.exe](../img/local-ocsp-install-root-ca-51.png)

In the **Add or Remove Snap-ins** dialog, in the left pane under *Available Snap-ins*, select **Certificates**, then click the **Add** button

![Add the Certificates Snap-in in the Add or Remove Snap-ins dialog in mmc.exe](../img/local-ocsp-install-root-ca-52.png)

Upon clicking the Add button in the **Add or Remove Snap-ins** dialog, the **Certificates snap-in** wizard will appear and present three radio selection options. Select the third option, **Computer Account**, then click the **Next** button.

![Certificates snap-in wizard, select Computer Account](../img/local-ocsp-install-root-ca-54.png)

The next step in the wizard is *Select Computer*. If you are installing the Root CA Certificate on the same server you are running MMC, then there is no need to change the targeted server in this dialog. If you wish to install the Root CA Certificate on a remote computer, select the *Another computer* radio button, then click the **Browse** button to open the Select Computer dialog. Refer to Microsoft provided [Select Computer Dialog Box](https://msdn.microsoft.com/en-us/library/dd145335.aspx) documentation for details of the Select Computer dialog. When you are satisfied with your selection, click Finish to close the wizard.

![Certificates snap-in wizard, Select Computer](../img/local-ocsp-install-root-ca-55.png)

Closing the wizard returns you to the **Add or Remove Snap-ins** dialog. Confirm **Certificates (Local Computer)** is listed in the right hand pane under *Selected Snap-ins*. Click the OK button to close the **Add or Remove Snap-ins** dialog add the snap-in to MMC.

![Close the **Add or Remove Snap-ins** dialog](../img/local-ocsp-install-root-ca-56.png)

After closing the **Add or Remove Snap-ins** dialog you are returned to MMC with the Certificates Snap-in open. Expand the **Certificates** tree to **Trusted Root Certification Authorities** -> **Certificates** as shown in the image below.

![Expand the Certificates tree to Trusted Root Certification Authorities](../img/local-ocsp-install-root-ca-57.png)

Right click on **Certificates**, then select **All Tasks** -> **Import**

![Right click on Certificates, then select All Tasks->Import](../img/local-ocsp-install-root-ca-58.png)

Clicking **Import** will open the **Certificate Import** wizard. Click the **Next** button to continue.

![Click Next to Continue](../img/local-ocsp-install-root-ca-59.png)

The **Certificate Import** wizard now prompts for **File to Import**. Click the Browse button to select your Root CA certificate file from the file system. After you have selected the Root CA certificate file, the full path to the file will appear in the edit box under *File name*. Once you have completed selection of the Root CA certificate file, click the **Next** button to continue.

![Select the Root CA Certificate](../img/local-ocsp-install-root-ca-61.png)

The next step in the wizard is **Certificate Store**. This step allows you to modify the certificate store to which the Root CA certificate will be imported. Given that you have initiated the wizard from the desired certificate store (i.e. the Local Computer, Trusted Root Certification Authorities certificate store) no changes are needed on this screen. Click the **Next** button to continue.

![Do not change the certificate store](../img/local-ocsp-install-root-ca-62.png)

The final step in the **Certificate Import Wizard** is **Completing the Certificate Import Wizard**. Click the **Finish** button to initiate the certificate import.

![Click Finish](../img/local-ocsp-install-root-ca-64.png)

When the import has completed, the Certifciate Import Wizard will display a final message box indicating *The import was successful*. Click the **OK** button to close this message box.

![Click OK](../img/local-ocsp-install-root-ca-65.png)

You may now close the MMC console by clicking the **X** at the top right corner of the MMC window.
