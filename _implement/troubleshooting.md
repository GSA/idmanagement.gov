---
layout: page
collection: implement
title: Troubleshooting PIV Logon
permalink: /implement/troubleshooting/
sticky_sidenav: true
sidenav: implement

subnav:
  - text: Logon Process Overview
    href: '#logon-process-overview'
---

Within the federal enterprise, Windows smart card logon with a PIV card (PIV logon) is one method to satisfy Federal Information Security Management Act (FISMA) and National Institute of Standards and Technology (NIST) Risk Management Framework security controls for authentication. A PIV card enables Authenticator Assurance Level 3, two-factor authentication to a Windows desktop. Under normal conditions, this system is simple and easy for an end user to use. However, if this logon mechanism breaks, it can be difficult to troubleshoot logon and authentication errors. This page includes common symptoms and suggested steps to diagnose and solve these issues.

## Logon Process Overview

The figure below, from the “Smart card sign-in flow in Windows” section of the [Microsoft Certificate Requirements and Enumeration article](https://docs.microsoft.com/en-us/windows/security/identity-protection/smart-cards/smart-card-certificate-requirements-and-enumeration#smart-card-sign-in-flow-in-windows){:target="_blank"}{:rel="noopener noreferrer"}, provides a detailed overview of how smart card logon works in supported versions of Windows.

<img src="{{site.baseurl}}/assets/piv/ficam-logon-process-overview.png" alt="A detailed workflow diagram of how smart card logon works in supported versions of Windows.">

For our use, this complex process is simplified into the following workflows:

<div class="usa-accordion" aria-multiselectable="true">
  <h4 class="usa-accordion__heading"> <!-- Process Start-->
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="m-a1">Process Start</button>
  </h4>
  <div id="m-a1" class="usa-accordion__content usa-prose">
    <p>PIV logon begins at the client workstation. First, the system discovers smart card reader devices that are built into or attached to the workstation. Next, acceptable smart card logon certificates from any connected cards are provided to the Windows logon screen. In general, PIV cards are engineered to have one authenticate certificate marked eligible for smart card logon. However, in some instances, more than one certificate may have been inadvertently made eligible, meaning the user may first be asked to select the correct certificate for smart card logon. Conversely, the user may have a Facility Access Card (FAC) that omits access to any workstation. For more details on what is in use at your organization, speak with your agency’s credential issuer or Identity, Credential, and Access Management (ICAM) office.</p>
    <img src="{{site.baseurl}}/assets/piv/pivauth-logon-screen.png" alt="A screenshot of a logon screen that includes icons for entering a password or inserting a smart card." style="padding-left:15px">
    <br>
    <a href="#logon-process-overview">Back to Process Overview</a>
  </div>

  <h4 class="usa-accordion__heading"> <!-- Card Selection -->
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="m-a2">Card Selection and PIN Entry</button>
  </h4>
  <div id="m-a2" class="usa-accordion__content usa-prose">
    <p>When the logon screen appears, if the system has detected a smart card reader and an attached (inserted) smart card with suitable certificates, the smart card logon option is displayed and the user is prompted to enter a PIN. Use the information below to troubleshoot symptoms encountered with card selection before PIN entry.</p>
    <hr />
    <h2>Symptom</h2>
    <p>Smart card icon is not displayed; user is not prompted for PIN.</p>
    <hr />
    <h2>Possible Cause 1 - Reader or Card Not Detected</h2>
    <p>Windows does not detect either the reader or the card due to a software or hardware issue with the card reader.</p>
    <h3>Diagnosis</h3>
    <ol type="1">
      <li>Ask the user to make sure that the PIV card is fully inserted in the reader.</li>
      <li>If the smart card reader is an external USB device, ask the user to remove the device and try inserting it into a different USB port.</li>
      <li>Ask the user to try rebooting their workstation.</li>
      <li>Ask the user to try using their PIV with their PIN elsewhere.</li>
      <li>If the issue persists through reboot, and the PIV with PIN works elsewhere, the smart card reader may need to be replaced or the workstation may need to be serviced.</li>
    </ol>
    <h3>Resolution</h3>
    <p>Replace the smart card reader if it is an external device. Otherwise, schedule workstation repair.</p>
    <hr />
    <h2>Possible Cause 2 - Card Damaged</h2>
    <p>The PIV is damaged.</p>
    <h3>Diagnosis</h3>
    <p>If faulty workstation hardware or software is ruled out, and the card does not work on other readers, the PIV may need to be replaced.</p>
    <p>To confirm that the card is functional, you can use the <a href="https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/certutil" target="_blank" rel="noopener noreferrer">Certutil Tool</a>, listed on the <a href="{{site.baseurl}}/fpki/tools/" target="_blank" rel="noopener noreferrer">Useful Tools page</a>, on a known working Windows workstation.</p>
    <p><strong>On the client:</strong></p>
    <ol type="1">
      <li>Log in to Windows using a password.</li>
      <li>Open the Start Menu, located in the bottom left corner of the screen.</li>
      <li>Type <strong>cmd</strong>.</li>
      <li>Click <strong>Command Prompt</strong>, shown under Best Match.</li>
      <img src="{{site.baseurl}}/assets/piv/pivauth-best-match-command-prompt.png" alt="A screenshot of the Command Prompt app icon. The words Best Match appear above the icon.">
      <li>In the command prompt, type <strong>certutil -scinfo</strong> and press <strong>Enter</strong>.</li>
      <img src="{{site.baseurl}}/assets/piv/pivauth-command-prompt-certuil.png" alt="A screenshot of a command prompt that includes certutil information." width="346" height="104">
      <li>A functioning card will return information on the card type and reader, begin polling for keys and validating certificates, and prompt for PIN entry. If this is the case with the card you are testing, click <strong>Cancel</strong> and close out of the command prompt.</li>
<img src="{{site.baseurl}}/assets/piv/pivauth-command-prompt-and-smart-card.png" alt="A screenshot of a command prompt window with a Windows Security Smart Card window on top of it." width="624" height="524">
      <li>If the card is malfunctioning, certutil will recognize that a reader is connected and a card is present but will display an error and will not prompt for PIN entry.</li>
<img src="{{site.baseurl}}/assets/piv/pivauth-command-prompt-done.png" alt="A screenshot of a command prompt window that includes the word done near the bottom of the window." width="593" height="474">
    </ol>    
    <h3>Resolution</h3>
    <p>Replace the PIV card if necessary.</p>
    <br>
    <a href="#logon-process-overview">Back to Process Overview</a>
  </div>

  <h4 class="usa-accordion__heading"> <!-- Cred Auth -->
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="m-a3">Credential Authentication and Secure Connection to Logon Server</button>
  </h4>
  <div id="m-a3" class="usa-accordion__content usa-prose">
    <p>After the user enters their PIN, Windows tries to unlock the card using the PIN entered. After the card has been unlocked, the workstation packages the user’s PIV authentication certificate and sends it to the logon server, also known as a domain controller. The workstation must be able to trust the domain controller so that the workstation can securely connect to it. Use the information below to troubleshoot symptoms encountered after the PIN is entered but before logon occurs.</p>
    <hr />
    <h2>Symptom</h2>
    <p>After PIN entry, the following error is displayed on the logon screen: <br><strong>Signing in with a smart card isn’t supported for your account. For more information, contact your administrator.</strong></p>
    <img src="{{site.baseurl}}/assets/piv/pivauth-other-user.png" alt="A screenshot of an Other user window with an error message." width="341" height="148">
    <hr />
    <h2>Possible Cause - Domain Controller Certificate</h2>
    <p>A suitable domain controller authentication certificate is not installed on the domain controller.</p>
    <h3>Diagnosis</h3>
    <p><strong>On the client:</strong></p>
    <ol type="1">
      <li>Log in to Windows using a password.</li>
      <li>Open the Start Menu, located in the bottom left corner of the screen.</li>
      <li>Type <strong>event viewer</strong>.</li>
      <li>Click <strong>Event Viewer</strong>, shown under Best Match.</li>
      <img src="{{site.baseurl}}/assets/piv/pivauth-best-match-event-viewer.png" alt="A screenshot of the Event Viewer app icon and label.">
      <li>On the left side of the Event View, expand Applications and Services Logs, Microsoft, Windows, and Security-Kerberos on the tree.</li>
      <img src="{{site.baseurl}}/assets/piv/pivauth-event-viewer-thru-operational.png" alt="A screenshot of the Event Viewer app icon with several app and folder icons below it in cascading order. The Operational icon appears at the bottom of the screenshot and is highlighted with gray.">
      <li>Click <strong>Operational</strong>.</li>
      <li>On the right side of the window, under Actions, click <strong>Enable Log</strong> (skip this step if the option reads ”Disable Log”; the log is already enabled).</li>
      <img src="{{site.baseurl}}/assets/piv/pivauth-actions-thru-help.png" alt="A screenshot of several icons, labels, and item choices below the Actions heading. The Help icon and label appears at the bottom of the screenshot. In the middle of the screenshot, the Enable Log choice is highlighted with yellow."> 
      <li>Log out of Windows.</li>
      <li>Try having the user log in to their workstation again using their PIV.</li>
      <li>Log in to Windows using a password.</li>
      <li>Repeat Steps 2 through 6 to return to the Security-Kerberos log in Event Viewer.</li>
      <li>Click in the center of the window where ”Error” is shown. The following log will appear.</li>
      <img src="{{site.baseurl}}/assets/piv/pivath-operational-log.png" alt="A screenshot of an error log. It includes several labels, including Operational and Event 104, Security-Kerberos. The Details tab is open and includes details about Event 104."> 
    </ol>
    <h3>Resolution</h3>
    <p><strong>On the domain controller:</strong></p>
    <ol type="1">
      <li>Log in as a Domain Administrator.</li>
      <li>Open the Start Menu.</li>
      <li>Type <strong>mmc.exe</strong>.</li>
      <li>Click <strong>MMC</strong>, shown under Best Match.</li>
      <img src="{{site.baseurl}}/assets/piv/pivauth-best-match-mmc-exe.png" alt="A screenshot of the mmc.exe icon. The words Best Match appear above the icon and the words Run command appear below the icon.">
      <li>If prompted by a User Account Control pop-up, click <strong>Yes</strong>.</li>
      <img src="{{site.baseurl}}/assets/piv/pivauth-user-account-control.png" alt="A screenshot of a User Account Control window. The words Do you want to allow this app to make changes to your device? appear near the top of the screenshot. The Yes button is highlighted.">
      <li>Click the <strong>MMC</strong> window and press and hold <strong>Ctrl</strong>. Then press <strong>M</strong> and release both keys.</li>
      <li>In the Add or Remove Snap-ins window, click the following:</li> 
      <ol type="a">
        <li>From the Available Snap-ins on the left, click <strong>Certificates</strong>.</li>
        <li>In the center of the window, click the <strong>Add</strong> button.</li>
        <li>In the Certificates snap-in window, click <strong>Computer account</strong>. Then click <strong>Next</strong>.</li>
      </ol>
      <img src="{{site.baseurl}}/assets/piv/pivauth-snap-in.png" alt="A screenshot of an Add or Remove Snap-In window with an inset Certificate Snap-In window.">
      <li>In the Select Computer window, click <strong>Finish</strong>.</li> 
      <img src="{{site.baseurl}}/assets/piv/pivauth-select-computer.png" alt="A screenshot of a Select Computer window. The Local Computer radio button is highlighted and the Finish button is highlighted.">
      <li>In the Add or Remove Snap-ins window, click <strong>OK</strong>.</li>
      <li>On the left side of the MMC window, click the <strong>></strong> symbol to expand these items on the tree:</li>
      <ol type="a">
        <li>Certificates (Local Computer)</li>
        <li>Personal</li>
      </ol>
      <img src="{{site.baseurl}}/assets/piv/pivauth-console-root-thru-certificates.png" alt="A screenshot of a Console Root folder icon and label with three items below it in cascading order. A Certificates folder icon and label appear at the bottom of the screenshot and are highlighted with gray.">
      <li>Under Personal, right-click <strong>Certificates</strong>.</li>  
      <img src="{{site.baseurl}}/assets/piv/pivauth-certificates-all-tasks.png" alt="A screenshot of a Console Root folder icon and label with several items and folders below it. The Certificates folder is highlighted with blue. An inset window with All Tasks highlighted in blue appears to the right of the main window and an inset Request New Certificate window appears to right of the first inset window.">
      <li>Click <strong>All Tasks</strong>.</li>
      <li>Click <strong>Request New Certificate</strong>.</li>
      <li>In the Certificate Enrollment window, click <strong>Next</strong>.</li>
      <li>Click <strong>Next</strong>.</li>
      <li>Click the box next to the Domain Controller Authentication template. If you do not see this, ask your CA Administrator to publish this template.</li>
      <img src="{{site.baseurl}}/assets/piv/pivauth-request-certificates.png" alt="A screenshot of a Certificate Enrollment window. The words Request Certificates appear in blue near the top of the screenshot. The screenshot includes Active Directory Enrollment Policy choices, statuses, and details.">
      <li>Click <strong>Enroll</strong>.</li>
      <li>Click <strong>Finish</strong>.</li>
      <img src="{{site.baseurl}}/assets/piv/pivauth-cert-enrollment.png" alt="A screenshot of a Certificate Enrollment window. The words Certificate Installation Results appear in blue near the top of the screenshot. The screenshot includes Active Directory Enrollment Policy Domain Controller Authentication status and details. A green bar runs below the Certificate Enrollment window and the Finish button is highlighted.">
    </ol>
    <br>
    <a href="#logon-process-overview">Back to Process Overview</a>
  </div>

  <h4 class="usa-accordion__heading"> <!-- Name Mapping -->
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="m-a4">Name Mapping and PIV Validation</button>
  </h4>
  <div id="m-a4" class="usa-accordion__content usa-prose">
    <p>After the domain controller’s authentication certificate is used to make a secure link from the workstation to the domain controller, the certificate data for the user’s smart card is sent to the domain controller for validation. The domain controller does the following to validate the credential:</p>
    <ol type="1">
      <li>The domain controller looks up the user’s account in Active Directory (AD) using information found in the user’s PIV authentication certificate. This process is known as name mapping. More information about user name mapping can be found in the <a href="{{site.baseurl}}/implement/account-linking/#transitioning-from-upn-mapping-to-altsecurityidentities-mapping" target="_blank" rel="noopener noreferrer">Account Linking Playbook</a></li>
      <li>The certificate is sent to the Microsoft Crypto-API (CAPI) service running on the domain controller for path discovery and validation. CAPI performs basic certificate checks through <a href="{{site.baseurl}}/fpki/pdval/" target="_blank" rel="noopener noreferrer">Path Discovery and Validation (PDVal)</a>.</li>
      <li>The domain controller checks its local copy of the Enterprise NTAUTH store for the presence of the issuing certification authority (CA) for the PIV authentication certificate. Steps for adding a certificate to this store can be found in the <a href="{{site.baseurl}}/implement/trust-stores/" target="_blank" rel="noopener noreferrer">Trust Stores Playbook</a></li>
    </ol>
    <p><strong>Note:</strong> Certificate validation of the PIV authentication certificate for smart card logon only occurs on the individual domain controller processing the logon request. The client computer does not check the validity of the logon certificate. Other applications outside of Windows logon may perform certificate validation locally, so it may still be a good idea to have a valid path installed on your organization’s client computers. if you have multiple logon servers in your environment, only the one responding to the individual logon request performs validation. Therefore, it is important to maintain a consistent configuration across your domain controllers.</p>
    <p>Use the information below to troubleshoot additional symptoms encountered after the PIN is entered, but before logon occurs.</p>
    <hr />
    <h2>Symptom</h2>
    <p>After PIN entry, one of the following errors displays on the logon screen:</p>
    <ol type="1">
      <li><strong>An untrusted certification authority was detected while processing the smart card certificate used for authentication.</strong></li>
      <img src="{{site.baseurl}}/assets/piv/pivauth-untrusted-ca-logon-screen.png" alt="A screenshot of a logon window that includes the words An untrusted certification authority was detected while processing the smart card certificate used for authentication." width="664" height="448">
      <li><strong>The smart card used for authentication has been revoked.</strong></li>
      <img src="{{site.baseurl}}/assets/piv/pivauth-smart-card-revoked-logon-screen.png" alt="A screenshot of a logon window that includes the words The smart card used for authentication has been revoked." width="664" height="448">
    </ol>
    <hr />
    <h2>Possible Cause 1 - Certificate Fails Path Discovery and Validation</h2>
    <p>The user’s PIV authentication certificate fails path discovery and validation on the domain controller.</p>
    <h3>Diagnosis</h3>
    <p><strong>On the client:</strong></p>
    <ol type="1">
      <li>Log in to Windows using a password.</li>
      <li>Open the Start Menu, located in the bottom left corner of the screen.</li>
      <li>Type <strong>cmd</strong>.</li>
      <li>Click <strong>Command Prompt</strong>, shown under Best Match.</li>
      <img src="{{site.baseurl}}/assets/piv/pivauth-best-match-command-prompt.png" alt="A screenshot of the Command Prompt app icon. The words Best Match appear above the icon.">
      <li>In the command prompt, type <strong>echo %logonserver%</strong> and press <strong>Enter</strong>.</li>
      <img src="{{site.baseurl}}/assets/piv/pivauth-command-prompt.png" alt="A screenshot of a Command Prompt window that includes the Windows version and user details.">
      <li>The current domain controller being used for Windows logon is displayed. This is the best domain controller to check first for troubleshooting invalid smart card logon events.</li>
    </ol>
    <p><strong>On the domain controller indicated above:</strong></p>
    <ol type="1">
      <li>Log in as a Domain Administrator.</li>
      <li>Open the Start Menu.</li>
      <li>Type <strong>mmc.exe</strong>.</li>
      <li>Log in to Windows using a password.</li>
      <li>Open the Start Menu, located in the bottom left corner of the screen.</li>
      <li>Type <strong>event viewer</strong>.</li>
      <li>Click <strong>Event Viewer</strong>, shown under Best Match.</li>
      <img src="{{site.baseurl}}/assets/piv/pivauth-best-match-event-viewer.png" alt="A screenshot of the Event Viewer app icon and label. The words Best Match appear above the icon."> 
      <li>On the left side of the Event View, click the <strong>></strong> symbol to expand each of these items on the tree:</li>
      <ol type="a">
        <li>Applications and Services Logs</li>
        <li>Microsoft</li>
        <li>Windows</li>
        <li>CAPI2</li>
      </ol>
      <li>Click <strong>Operational</strong>.</li>
      <li>On the right side of the window, under Actions, click <strong>Enable Log</strong> (skip this step if the option reads ”Disable Log”; the log is already enabled).</li>
      <img src="{{site.baseurl}}/assets/piv/pivauth-actions-thru-help.png" alt="A screenshot of several icons, labels, and item choices below the Actions heading. The Help icon and label appears at the bottom of the screenshot.">
      <li>Log out of Windows on the client workstation.</li>
      <li>Have the user try to log in using their PIV, taking note of the time. The error should be shown on the logon screen.</li>
      <li>On the domain controller, still in Event Viewer, on the right pane, click <strong>Refresh</strong>.</li>
      <li>New log events will be shown. Look for the events with an “Error” status  and the task category “Build Chain.”</li>
      <li>Click the <strong>Details</strong> tab. In the UserData section, look for the user’s name in the Certificate [subjectName] field. If you do not see the user’s name, continue scrolling through the list of events to find the next event with an “Error” status and the task category “Build Chain.” Using results filtering may help to narrow this list down.</li>
      <img src="{{site.baseurl}}/assets/piv/pivauth-operational-event11.png" alt="A screenshot of an Operational window labeled Event 11, CAPI2. In the center of the screenshot, the subjectName and user name are highlighted with yellow.">
      <li>Once you find the event, scroll down through the details. You will see sections that say “-ChainElement.” These indicate each of the certificates in the path that was built. Within each chain element, look again for the ”- Certificate [ subjectName ],” indicating which certificate is being checked, and below it, a ”- TrustStatus” with an ”- Error Status” which will give more details about the failing validation.</li>
    </ol>
    <br>
    <p><strong>Example 1: A certificate in the path is revoked.</strong></p>
    <img src="{{site.baseurl}}/assets/piv/pivauth-example1.png" alt="A screenshot of an Operational window labeled Event 11, CAPI2. The Certificate and the TrustStatus details are highlighted with yellow." width="766" height="652">
    <p><strong>Example 2: The path does not build to a trust anchor</strong></p>
    <img src="{{site.baseurl}}/assets/piv/pivauth-example2.png" alt="A screenshot of a window labeled Event 11, CAPI2. The subjectName and the Cert Trust Is Untrusted Root details are highlighted with yellow." width="766" height="652">
    <p><strong>Example 3: The revocation status is unreachable, or the revocation status signature cannot be validated due to an invalid trust path.</strong></p>
    <img src="{{site.baseurl}}/assets/piv/pivauth-example3.png" alt="A screenshot of a window labeled Event 11, CAPI2. The subjectName and the Cert Trust Revocation Status Unknown details are highlighted with yellow." width="766" height="652">
    <p><strong>Note:</strong> The error status in Example 3 will occur for any certificate lower in the path than the above Examples for 1 and 2. For example, if a trusted root cannot be found at the top of the path, no valid revocation status will be found for any certificate issued below the trusted root, including the issuing CA certificate and the end user’s PIV authentication certificate. This situation occurs because the revocation data cannot have its signature verified for the same reasons that the certificate itself cannot.</p>
<p>You can also use the <a href="http://pkif.sourceforge.net/pitt.html" target="_blank" rel="noopener noreferrer">PKI Interoperability Test Tool (PITT)</a>, listed on the <a href="https://playbooks.idmanagement.gov/fpki/tools/" target="_blank" rel="noopener noreferrer">Useful Tools page</a>, to validate the certificate path on the logon server. The <a href="http://pkif.sourceforge.net/pitt_usage.pdf" target="_blank" rel="noopener noreferrer">PITT Usage Guide</a> contains procedures for using the tool.</p>    
    <h3>Resolution</h3>
    <ol type="1">
      <li>On the domain controller, work through any path validation issues identified in the above steps and examples. Keep in mind that that path building comes before validation and that a path is built from the bottom up. In this instance, the PIV authentication certificate chains to a trust anchor, such as Federal Common Policy G2. <strong>Ensure that the correct trust anchor for your organization’s PIV credentials is installed on every domain controller.</strong> If you also trust certificates from other agencies and organizations, the appropriate roots and cross-certificates may need to be installed to complete the path. </li>
      <li>Find expired and revoked certificates that may be installed in your domain controller certificate store and delete them as appropriate. In a Windows environment, unexpected errors often result if you have duplicates of a certificate installed in a given store or have accidently installed an intermediate CA in the trusted root store or vice versa. </li>
      <li>Lastly, you will need to allow outbound access over port TCP 80 from each domain controller to each of the CRL, OCSP, and AIA distribution points listed in the certificates in the path. For more information, see <a href="{{site.baseurl}}/fpki/pdval/" target="_blank" rel="noopener noreferrer">Path Discovery and Validation (PDVal)</a>.</li>
    </ol>
    <h2>Possible Cause 2 - CA Not in the NTAuth Store</h2>
    <ol type="1">
      <li>Follow Steps 1 through 15 for diagnosing Possible Cause 1.</li>
      <li>Confirm that there is no error logged for the task category ”Build Chain” with matching certificate subjectName for the user.</li>
      <li>Look for an error logged for task category ”Verify Chain Policy” with matching certificate subjectName for the user.</li>
      <li>Confirm that the result logged is ”A certification chain processed correctly, but one of the CA certificates is not trusted by the policy provider.”</li>
      <img src="{{site.baseurl}}/assets/piv/pivauth-operational-event30.png" alt="A screenshot of an Operational window labeled Event 30, CAPI2. Near the top of the screenshot, a row labeled Error is highlighted with yellow. Elsewhere in the screenshot, the subjectName and user name and the Result details are highlighted with yellow." width="766" height="652">
    </ol>
    <h3>Resolution</h3>
    <p>Follow the steps in the <a href="{{site.baseurl}}/implement/trust-stores/" target="_blank" rel="noopener noreferrer">Trust Stores Playbook</a> to add the appropriate issuing CA for the PIV card to the Enterprise NTAuth trust store.</p>
     <hr />    
    <h2>Symptom</h2>
    <p>During smart card logon attempt, the following error is displayed on the logon screen:  <br><strong>The system could not log you on. Your credentials could not be verified.</strong></p>
  <hr />
    <h2>Possible Cause 1</h2>
    <p>The incorrect certificate was selected for smart card logon.</p>
    <h3>Resolution 1</h3>
    <ol type="1">
      <li>In the logon screen, select a different certificate from the sign-in options. <strong>Note:</strong> Logon certificates generally display an account name in the form of an email address or user principal name.</li>
      <li>Try entering the PIN again.</li>
      <img src="{{site.baseurl}}/assets/piv/pivauth-logon-enter-pin.png" alt="A screenshot of a logon window that shows a user name highlighted. The other user is not highlighted." width="623" height="468">
      </ol>
    <h2>Possible Cause 2</h2>
    <p>The identifiers listed in the Smart Card Logon certificate on the card cannot be matched to an AD account.</p>
    <h3>Resolution 2</h3>
    <p>Follow the suggestions in the <a href="{{site.baseurl}}/implement/account-linking/" target="_blank" rel="noopener noreferrer">Account Linking Playbook</a> to ensure that the card identifier can be linked to the AD account. This may require User Principal Name (UPN) mapping, adding alternate security identifiers added to the AD record, or domain hinting.</p> 
    <br>
    <a href="#logon-process-overview">Back to Process Overview</a>
  </div>

  <h4 class="usa-accordion__heading"> <!-- Client Logon -->
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="m-a5">Client Logon and Caching</button>
  </h4>
  <div id="m-a5" class="usa-accordion__content usa-prose">
    <p>Once name mapping and PIV validation are complete, the domain controller sends a logon package to the client computer with the user’s domain permissions and a token that allows desktop logon for that user. If the user is permitted to log in to the computer, they will now be logged into their Windows desktop.</p>
    <p>The first logon must always occur while the system has a network connection to the domain controller, whether it is directly attached to the organization’s network or via a VPN. After the first logon, if the Group Policy setting pictured below is set to a value greater than 0, the user’s logon token will be permanently cached by their workstation as long as the number of subsequent users to log in does not exceed this number. </p>
    <img src="{{site.baseurl}}/assets/piv/pivauth-local-group-policy-editor.png" alt="A screenshot of a Local Group Policy Editor window with two columns of folder and item icons and labels. The screenshot includes an inset Interactive Number of previous logons to cache window.">
    <p>If a future logon is attempted while the user’s workstation is disconnected from the organization’s network, and the logon token is cached, the workstation will only authenticate the PIV authentication certificate via PIN and, upon successful entry, will log the user into their desktop using their cached token and permissions. If the value is set to 0, caching does not occur and logon will only occur when the workstation is connected to the network and can communicate with a domain controller.</p>
    <br>
    <a href="#logon-process-overview">Back to Process Overview</a>
  </div>
</div>

