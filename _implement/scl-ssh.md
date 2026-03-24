---
layout: page
collection: implement
title: Smart Card Logon for SSH
permalink: /implement/scl-ssh/
sticky_sidenav: true
sidenav: implement

subnav:
     - text: SSH from Windows - Using PuTTY-CAC
       href: '#ssh-using-putty-cac'
     - text: SSH from Windows - Using WinSCP and Pageant
       href: '#ssh-using-winscp-and-pageant'
     - text: SSH from macOS - Built-in and OpenSC
       href: '#ssh-from-macos'
     - text: Configure a Linux Server
       href: '#configure-a-linux-server'
     - text: Special Thanks
       href: '#special-thanks'
---

This guide is primarily intended for network engineers and server administrators, though other types of users accessing SSH-enabled remote resources may also benefit. For network engineers, this guide will help you authenticate with your PIV/CAC credential and use SSH to access a remote Linux server from a Windows or macOS computer. For server administrators, this guide will help you configure a Linux server for remote access.

This guide uses open-source options:

* Windows: PuTTY-CAC (without Pageant) and WinSCP with Pageant  
* macOS: OpenSC

Commercial solutions are also available.

{% include alert-info.html heading="Benefits of PIV for SSH" content="Your PIV/CAC credential contains an authentication key pair (public and private) for smart card logon. Using a PIV/CAC key pair is procedurally very similar to using a standard software key pair for SSH. Leveraging hardware-backed key material for SSH means the authentication transaction meets the Authentication Assurance Level 3 (AAL3) definition for non-exportable cryptographic authenticators as defined in NIST SP 800-63-4, effectively preventing the "credential roaming" or unauthorized key duplication common with traditional software-based SSH keys. " %}

{% include alert-info.html heading="Defense in Depth" content="Your Chief Information Security Officer must determine that security controls are in place and approve SSH usage scenarios. You should also review your agency’s policies and use your physical or virtual jump servers to restrict users from establishing SSH sessions directly from their workstations. Utilizing jump servers as an intermediate transit point provides a distinct level of defense in depth, and provided appropriate controls, may assist in securing sensitive infrastructure." %} 

## SSH from Windows

{% include alert-warning.html content="Network administrator privileges are needed to use SSH for remote access." %}

### SSH Using PuTTY-CAC

PuTTY-CAC is an open-source SSH client that integrates with Microsoft’s CryptoAPI (CAPI). The Pageant authentication client included in the software isn’t needed with PuTTY-CAC for this SSH usage. By selecting one of your personal PIV certificates for default use in this tool, the integrated CAPI "service," ensures the SSH session can only be established  after activation of the private key physically contained in the PIV card. This process ensures only the assigned PIV user, with knowledge of the PIN, can authenticate to the target via this service.

1. You'll need to download [**PuTTY-CAC**](https://www.github.com/NoMoreFood/putty-cac/releases){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} to _C:\ssh\putty.exe_ or a similar folder. Select either _32-bit_ or _64-bit_, based on your Windows OS. (Pageant and MSI Installers aren't needed.)
2. Double-click on _putty.exe_ and insert your PIV/CAC card into your card reader.
3. At the PuTTY Configuration window, go to _Category:_ &gt; _Connection_ &gt; _SSH_ &gt; _Certificate_. Click the _Set CAPI Cert..._ button and _OK_. This sets the default as public.
<br><br>
<img src="{{site.baseurl}}/assets/piv/ssh-putty-cac-1.png" alt="PuTTY configuration window." width="470" height="449">
<br><br>
4. From the **Windows Security** list, select your PIV/CAC authentication certificate by clicking _OK_. If you don't see your certificate, click _More choices_. For help with certificates, see [Understanding PIV Certificates]({{site.baseurl}}/university/piv/#how-to-view-piv-credential-certificates){:rel="noopener noreferrer"}{:class="usa-link"}.
<br><br>
<img src="{{site.baseurl}}/assets/piv/winSCP-5.PNG" alt="A PuTTY select certificate for authentication screenshot." width="454" height="377">
<br>
5. Back at the **PuTTY Configuration** window, click the _Copy to Clipboard_ button and paste the SSH key into a text file. (**Note:** PuTTY-CAC derives the SSH key from the public key of your authentication certificate.) 
<br><br>
<img src="{{site.baseurl}}/assets/piv/putty-cac-2.png" alt="A PuTTY configuration windoow." width="454" height="377">
<br>
The SSH key will look like this:

   ```
      ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCyPn2dShOF...
      CAPI:05bf4653b3098a87b67816d81049f489d5b5ffb4
   ```    
6. Send the text file to the server administrator and request an account. (Notice that the _Attempt Certificate Authentication_ box is now checked.)Traditionally, providing the administrator with this public key allows them to register the PIV authenticator to a pre-provisioned remote access account.  Some more modern implementations may also fetch your public PIV keys from a centralized directory, making the manual registration step unnecessary.<br>
7. While waiting for an account, you can create SSH session profiles for target remote servers:<br>
	- Click _Session_ and enter a remote server's _hostname_ or _IP address_.<br> 
	- For _Connection type_, click _SSH_. (Notice that under _Port_, _22_ appears.)<br>
	- Enter a session name in _Saved Sessions_ and click _Save_.<br>
<br><br>
<img src="{{site.baseurl}}/assets/piv/putty-cac-3.png" alt="A PuTTY configuration windoow." width="454" height="377">
<br>
8. Once you have an account, open PuTTY-CAC and insert your PIV/CAC card into your card reader. 
9. Click a _Saved Session_ and _Load_. 
10. Click _Open_ to connect to the remote server. (A dialog box displays the server's key thumbprint.) 
11. Verify the server key and accept it by clicking _Yes_. This manual verification of the server's host key ensures that the SSH "service" is connected to the intended target server. It provides mutual authentication as part of the protocol and helps to prevent a potential man-in-the-middle attack.
12. Enter your account username. (A dialog box displays your PIV/CAC authentication certificate.) 
13. Click _Yes_ to permit the _signing operation_ and enter your PIV/CAC PIN. (You'll then be logged into the remote server.) 

{% include alert-warning.html content = "The card reader may flash. Do not remove your card until you're logged in." %}

### SSH Using WinSCP and Pageant

WinSCP is an open-source, secure copy protocol (SCP) and secure file transfer protocol (SFTP) client. Pageant is an authentication agent that can also integrate with Microsoft's CAPI.  

 
{% include alert-info.html heading="Pageant Install" content="Pageant is included in the **WinSCP installation package**; however, the included version does not contain appropriate plug-ins for CAPI.  You will want to download the latest release of PuTTY-CAC to ensure appropriate integration. See [PuTTY-CAC Releases](https://github.com/NoMoreFood/putty-cac/releases){:target=\"_blank\"}{:rel=\"noopener noreferrer\"}{:class=\"usa-link usa-link--external\"}." %}

1. Download **Pageant** to _C:\ssh\pageant.exe_ or a similar folder if downloaded separately. 
2. Download the [**WinSCP installer**](https://winscp.net/eng/download.php){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link"} to _C:\ssh\WinSCP-Setup.exe_ or a similar folder.
3. Double-click _WinSCP-Setup.exe_ to launch the _WinSCP installer_ and use the recommended installation settings.
4. Double-click _pageant.exe_ to launch **Pageant**. Running Pageant as a background agent allows multiple applications to leverage available authenticators.
5. Next, at the **Windows** taskbar, click the _up-arrow_ and right-click the **Pageant** icon (_computer wearing a Fedora_). 
<br>
<img src="{{site.baseurl}}/assets/piv/winSCP-2.PNG" alt="A screenshot showing how to access pageant." width="282" height="162">
<br>
6. A **Pageant** dialog box appears. Ensure both *Remember Certs & Keys* and *Cert & Key Auth Prompting are enabled*.
<br>
<img src="{{site.baseurl}}/assets/piv/winSCP-3.PNG" alt="Enable Cert Auth Prompting." width="246" height="276">
<br>
7. Click _Add CAPI Cert_ to view eligible authentication certificates.
<br>
<img src="{{site.baseurl}}/assets/piv/winSCP-4.PNG" alt="A screenshot showing Add CAPI Cert selected." width="247" height="275">
<br>
8. From the **Windows Security** screen, select your PIV/CAC authentication certificate, and click _OK_. If you don't see your certificate, click _More choices_. (For help with certificates, see [Understanding PIV Certificates]({{site.baseurl}}/university/piv/#how-to-view-piv-credential-certificates){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link"}.)
<br>
<img src="{{site.baseurl}}/assets/piv/winSCP-5.PNG" alt="A screenshot showing a PuTTY select certificate for authentication window with the OK button selected." width="269" height="223">
<br>
9. Double-click the **Pageant** icon to confirm that your certificate appears on the _Pageant Key List_.   
10. The _Pageant Key List_ shows the certificate's SSH key attributes, such as type, size, thumbprint, etc. Click your certificate and the _Copy to Clipboard_ button. (**Note:** Pageant derives the SSH key from the public key of your authentication certificate.) Close the _Pageant Key List_. This step automatically converts the public key in your selected PIV certificate into a consumable  format.
<br>
<img src="{{site.baseurl}}/assets/piv/winSCP-6.PNG" alt="A screenshot showing a pageant key list." width="269" height="193">
<br>
11. Paste the SSH key into a text file. It will look like this:
     ```
       ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCOpGPxNh... CAPI:268f09f34ca7544bd44e1e310d2144...
       OID.0.9.2342.19200300.100.1.1=47999999999999 + CN=SAM JACKSON, OU=General Services Administration,
       O=U.S. Government, C=US
     ```
12. Send the text file to the server administrator and request a new account.
13. Once you have an account, go to the **WinSCP Login** window. Click _New Site_ and then the _Advanced_ button.
<br><br>
<img src="{{site.baseurl}}/assets/piv/winSCP-7.PNG" alt="A screenshot showing the WinSCP Login window with the Advanced button selected." width="353" height="210">
<br><br>
15. At the **Advanced Site Settings** window, select _SSH_ &gt; _Authentication_. Click the checkbox for _Attempt Authentication using Pageant_ and then click _OK_. (WinSCP selects additional checkboxes by default.) 
<br><br>
<img src="{{site.baseurl}}/assets/piv/winSCP-8.PNG" alt="A screenshot showing the Advanced Site Settings window with SSH, Authentication, and Attempt authentication using Paegent options selected." width="353" height="210">
<br><br>
16. Insert your PIV/CAC card into your card reader. 
17. Enter the remote server's host name and your username. Click _Login_. 
18. The **Warning** dialog box displays the server’s key thumbprint. Verify it and click _Yes_ to accept.
19. At the **Certificate Usage Confirmation - Pageant** dialog box, click _Yes_ to confirm your authentication certificate.
<br><br>
<img src="{{site.baseurl}}/assets/piv/winSCP-10.PNG" alt="A screenshot showing the Certificate Usage Confirmation - Pageant window with the Yes button selected." width="353" height="211">
<br><br>
20. When prompted, enter your PIV/CAC PIN. You'll then be logged into the server.

{% include alert-warning.html content = "The card reader may flash. Do not remove your card until you're logged in." %}

## SSH from macOS

{% include alert-warning.html content="Network administrator privileges are needed to use SSH for remote access." %}

There are two options for configuring SSH clients to use a PIV/CAC device as the SSH key store:

### Built-in PIV/CAC support

**Only applicable for macOS High Sierra and later.**

1. Insert your PIV/CAC into your card reader.
2. Use ` ssh-keygen -D /usr/lib/ssh-keychain.dylib` to get the OpenSSH-format public key fingerprint which can be added to your `authorized_keys` file, account profiles, etc.
3. Add `PKCS11Provider=/usr/lib/ssh-keychain.dylib` to your `~/.ssh/ssh_config` file to tell `ssh` to scan the PIV profiles for keys when determining which keys to attempt on remote hosts.

See https://support.apple.com/en-us/HT208372 for additional information

### OpenSC

You can use OpenSC on your macOS computer to authenticate to a remote server with your PIV/CAC card.

{% include alert-warning.html heading="If a version of OpenSC less than 0.20.0 is used, users will encounter errors when performing mTLS with servers that offer TLS 1.3. This can include browser errors like ERR_SSL_CLIENT_AUTH_SIGNATURE_FAILED. Using the most current stable release of OpenSC (0.26.1 as of January 2025) is recommended to ensure the SSH "service" remains compatible with emerging cryptographic protocols, as it leverages OpenSSL as the backbone in many of its functions." %}

1. Install [OpenSC](https://github.com/OpenSC/OpenSC/wiki#download){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}. 
2. Insert your PIV/CAC into your card reader.
3. To view the certificates on your Mac, enter:  
     ```
	pkcs15-tool --list-public-keys  
     ```
4. Make note of the _PIV AUTH pubkey_&nbsp;&nbsp;**ID** number. 
     ```
	Using reader with a card: SCR35xx Smart Card Reader
	Public RSA Key [PIV AUTH pubkey]
		Object Flags   : [0x0]
		Usage          : [0xD1], encrypt, wrap, verify, verifyRecover
		Access Flags   : [0x2], extract
		ModLength      : 2048
		Key ref        : 154 (0x9A)
		Native         : yes
		ID             : 01 (EXAMPLE ONLY)
		DirectValue    : <absent>
     ```
5. Use your _PIV AUTH pubkey_&nbsp;&nbsp;**ID** number to view your SSH key. Enter: 
     ```
    pkcs15-tool --read-ssh-key 01
     ```
6. When prompted, enter your PIV/CAC PIN. The SSH key will look like this:  
     ```
    ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCyPn2dShOFLBnMraiP2MnLU ....  
     ```
7. Copy the SSH key and paste it into a text file.
8. Send the text file to the server administrator and request a new account.
9. Once you have an account, you can log into the remote server. Enter: 
     ```
	ssh -I /usr/lib64/opensc-pkcs11.so <username>@<remote-host>
     ```
10. Optionally, you can update the setting in the _/etc/ssh_config_ file to:  
     ```
	PKCS11Provider /usr/lib64/opensc-pkcs11.so
     ```
11. Enter your PIV/CAC PIN when prompted. Once it's validated, you'll be logged into the remote server.

{% include alert-warning.html content = "The card reader may flash. Do not remove your card until you're logged in." %}

## Configure a Linux Server

{% include alert-warning.html content="Server administrators must have root privileges for these steps." %}
 
{% include alert-info.html content="The following SSH configurations are examples only. Other options are available, including Pluggable Authentication Modules (PAM) that look up user accounts and authorizations through directories. You can automate account setups by using centralized configuration management tools that can push or remove authorized_keys." %}

By default, SSH keys are read from the _.ssh/authorized_keys_ file in your home directory. 

1. You'll need to create a _/home/&lt;username&gt;/.ssh_ directory and change it to the requester's ownership. Then, create an _authorized_keys_ file in the _.ssh_ directory and copy the requester's SSH key to the _/home/&lt;user&gt;/.ssh/authorized_keys_ file starting with _ssh-rsa&lt;public key&gt;&lt;key_name&gt;_:
   ```
	    mkdir /home/<user>/.ssh
	    chown <user> .ssh
	    chgrp <user> .ssh
	    chmod 700 .ssh
	    cat > authorized_keys 
	    ssh-rsa AAAAB3NzaC1yc2EAAAADAQA... CAPI:05bf4653b3098a87b67816d81049f489d5b5ffb4    
   ```
2. Set the permissions for ..._authorized_keys_ to _600_ and change the _authorized_keys_ ownership to the user:
   ```
	     chmod 600 authorized_keys
	     chown <user> authorized_keys
	     chgrp <user> authorized_keys
   ```
3. You can change the location for the _authorized_keys_ file in the _/etc/ssh/sshd_config_ file and restart the _sshd_ service. You can also enforce authentication with a PIV/CAC card by disabling password use:
   ```
	     AuthorizedKeysFile /etc/ssh/authorized_keys/%u  
	     PasswordAuthentication no
   ```
**Note:**&nbsp;&nbsp;If you change the default settings, you’ll need to create a corresponding directory for authorized_keys under /etc/ssh and place the authorized_keys there vs. in the user’s home folder. Moving these registered public keys to a root-owned directory like /etc/ssh/authorized_keys/ prevents users from potentially bypassing security controls..

## Special Thanks

Special thanks to the Department of Homeland Security, Office of the Chief Information Officer, Identity Services Branch, Information Sharing and Services Office (IS2O), for sharing its WinSCP and Pageant procedures. Collaborative efforts across the Executive Branch ensure that these technical implementation guides reflect best practices and provide a common approach to expanding the use of PIV as an authenticator.
