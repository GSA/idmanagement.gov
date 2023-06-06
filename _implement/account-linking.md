---
layout: page
collection: implement
title: Account Linking
permalink: /implement/account-linking/
sticky_sidenav: true
sidenav: implement

subnav:
  - text: Comparing altSecurityIdentities and User Principal Name
    href: '#comparing-altsecurityidentities-and-user-principal-name'
  - text: Transitioning from UPN Mapping to altSecurityIdentities Mapping
    href: '#transitioning-from-upn-mapping-to-altsecurityidentities-mapping'
---

*Account linking* refers to the process of associating a certificate on a user's PIV credential with their domain account.

<div class="usa-alert usa-alert--error" role="alert">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Dec 2022 - Update to Microsoft Network Authentication Issue</h4>
    <p class="usa-alert__text">
      The Microsoft KB mentioned above is updated. Note that the "disabled" mode retirement is still targeted at 2/14/23. CISA encourages any agency still reliant on "disabled" mode to move to "compatibility mode" by following the <a class="usa-link usa-link--external" href="https://www.cisa.gov/guidance-applying-june-microsoft-patch" target="_blank" rel="noopener noreferrer">CISA Guidance</a> as soon as possible while a timeline and plans around long term resolution of this issue is finalized with Microsoft. Additional technical guidance can be requested through cyberlaison at CISA dot DHS dot gov.
    </p>
  </div>
</div>

<div class="usa-alert usa-alert--error" role="alert">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">See This Alert First</h4>
    <p class="usa-alert__text">
      Please hold off on implementing the guidance on this page until it is updated. Microsoft <strong>HIGHLY</strong> recommends that all customers who use PIV, smart card, or certificate-based authentication with AltSecID to <strong>IMMEDIATELY</strong> change the registry key on domain controllers prior to installing the KB5014754 May 2022 updates. See <a class="usa-link usa-link--external" href="https://support.microsoft.com/en-us/topic/kb5014754-certificate-based-authentication-changes-on-windows-domain-controllers-ad2c23b0-15d8-4340-a468-4d4f3b188f16" target="_blank" rel="noopener noreferrer">KB5014754—Certificate-based authentication changes on Windows domain controllers</a> for additional information. Wait for further guidance from CISA or contact CyberLiasion at CISA dot gov.
    </p>
  </div>
</div>

## Comparing altSecurityIdentities and User Principal Name

There are two account linking attributes to choose from:
- altSecurityIdentities (_recommended_)
- User Principal Name (UPN)

It's not possible to configure a domain to use *both* altSecurityIdentities *and* User Principal Name mapping. You must choose **one** of these options and configure its use for *all* domain users.

### altSecurityIdentities Approach
- Each PIV credential can be associated with **more than one** account.
     - This flexibility allows for the association of a single PIV credential certificate to an individual's end-user and privileged user account(s).
- Users are presented with an additional field during network authentication to identify which account the user wants to access. This field is known as the _User Name Hint_.
     - The User Name Hint informs Windows which account the user is trying to log in to if the mapped certificate is associated with multiple accounts.
     - Entering a User Name Hint is optional if the user's PIV Authentication certificate UPN matches their Windows logon name.
- You can choose from one of [six options](#1-link-the-piv-authentication-certificate) to map a certificate to a given account.
- There is more flexibility for accepting PIV credentials issued by other government agencies or partners, including PIV-Interoperable (PIV-I) credentials.

### User Principal Name Approach
- Each PIV credential can only be associated with **one** account.
- The UPN value from the _Subject Alternate Name_ in the PIV Authentication certificate is required.
- There is no flexibility for associating the PIV credential to separate privileged accounts.
- There is less flexibility for accepting PIV credentials issued by other government agencies or partners, including PIV-I credentials.


## Transitioning from UPN Mapping to altSecurityIdentities Mapping 
If you have a large network with many domains, you should carefully plan the migration from User Principal Name to the altSecurityIdentities account linking method.  

{% include alert-warning.html heading = "Use of UPN by Applications" content="You may find that you have many applications that rely on User Principal Name values.  There is no need to remove existing or stop populating new User Principal Name values in your transition to altSecurityIdentities." %} 

There are three steps to implement altSecurityIdentities account linking:
  1. [Link the PIV Authentication Certificate](#1-link-the-piv-authentication-certificate)
  2. [Enable User Name Hints](#2-enable-user-name-hints)
  3. [Disable User Principal Name Mapping](#3-disable-user-principal-name-mapping)


#### 1. Link the PIV Authentication Certificate
First, you need to link each user's PIV Authentication certificate to their domain account(s).  This is accomplished by populating data extracted from the user's PIV Authentication certificate into their Active Directory record, specifically into the **altSecurityIdentities** attribute.  

Adding altSecurityIdentities attributes **will not** break existing UPN account linking or cause smart card logon to fail. It's possible to plan your transition carefully and to take your time populating the altSecurityIdentities attribute for domain users. 

There are six mapping options to choose from, but most organizations use **Issuer and Subject**.

| Options       | Tag     | Example | Considerations |
| ------------- |-------------| -----|-----|
| Subject     | X509:\<S> | X509:\<S>C=US,O=U.S. Government,OU=Government Agency,CN=JANE DOE OID.0.9.2342.19200300.100.1.1=25001003151020 |  For certificates which assert the UID identifier (0.9.2342.19200300.100.1.1) or other object identifier in the common name, the identifier is prepended with the _OID_ qualifier. |
| Issuer and Subject     | X509:\<I>\<S>  | X509:\<I>C=US,O=U.S. Government,OU=Certification Authorities,OU=Government Demonstration CA\<S>C=US,O=U.S. Government,OU=Government Agency,CN=JANE DOE OID.0.9.2342.19200300.100.1.1=47001003151020 | Note the spaces carefully when testing machine-readable formats of the certificate extensions versus the human-readable formats. |
| Issuer and Serial Number | X509:\<I>\<SR> | X509:\<I>C=US,O=U.S. Government,OU=Certification Authorities,OU=Government Demonstration CA\<SR>46a65d49 | Serial number is stored in a reversed byte order from the human-readable version, starting at the most significant byte. |
| Subject Key Identifier     | X509:\<SKI> |   X509:\<SKI>df2f4b04462a5aba81fec3a42e3b94beb8f2e087 |  Not generally recommended; may be difficult to manage. |
| SHA1 hash of public key| X509:\<SHA1-PUKEY> |  X509:\<SHA1-PUKEY>50bf88e67522ab8ce093ce51830ab0bcf8ba7824 |  Not generally recommended; may be difficult to manage.   |
| RFC822 name | X509:\<RFC822>      |   Not recommended |    Not recommended; not commonly populated in PIV Authentication certificates. |

##### Gathering PIV Authentication Certificates for Mapping into AD

Identity certificates used for Windows logon can generally be found: 
-	On the smart card itself. 
-	By requesting the certificates directly from the smart card issuer. 
-	By exporting the certificates from a third party application in which the certificates are already registered, such as a FIPS 201-compliant <a class="usa-link" href="{{site.baseurl}}/arch/pacsguide/" target="_blank" rel="noopener noreferrer">Physical Access Control System (PACS).</a>

Each of these options is discussed below.

**Gather Certificate from Smart Card** <br>
To gather the certificate from the smart card using a Windows workstation, have the cardholder do the following: 
1.	Open the Start Menu, located in the bottom left corner of the screen. <br>
2.	Type **command prompt**. <br>
3.	In the prompt, type **certutil -scinfo**. <br> 
<img src="{{site.baseurl}}/assets/piv/pivaccount-certutil.png" alt="A screenshot of a command prompt with certutil information." width="430" height="76">
4.	Press **Enter**. <br>
5.	The cardholder will be prompted several times for a PIN, but a PIN is not required for this operation. Have the cardholder press **cancel** each time they are prompted for a PIN until they see the Certificate List. <br>
<img src="{{site.baseurl}}/assets/piv/pivaccount-cert-list.png" alt="A screenshot of a Windows Security Certificate List window." width="303" height="268"> <br>
6.	Have the cardholder click **Click here to view certificate properties**. The appropriate certificate will list “Smart Card Logon” in the intended purposes on the General tab. If the certificate has this purpose listed, have the cardholder proceed to Step 7. Otherwise, have the cardholder close the certificate, click **more choices** on the Certificate List, click another certificate in the list, and click **Click here to view certificate properties** until the correct certificate has been identified. <br>
<img src="{{site.baseurl}}/assets/piv/pivaccount-cert-details.png" alt="A screenshot of a Certificate Details window." width="340" height="458"> <br>
7.	Have the cardholder select the **Details** tab and then proceed with the steps below. <br>  
8.	Click **copy to file** to start the certificate export wizard. <br>
9.	Click **Next**. <br>
10.	Click **Next** again to indicate that the cardholder does not wish to export the private key. <br> 
11.	Click **Next** again to use the default DER encoding. <br> 
12.	Click **Browse** to select where to save the certificate. Have the cardholder select a location that he or she has permission to save to, such as Desktop or Documents. <br>
13.	 Enter a meaningful name for the certificate (such as the cardholder’s name or employee ID). <br>
14.	Click **Save**. <br>
15.	Click **Next**. <br>
16.	Click **OK**. <br>
17.	Click **OK** to close the Certificate Details window. <br>
18.	Click **OK** to close the Certificate List. <br>
19.	Close the command prompt. <br>
<img src="{{site.baseurl}}/assets/piv/pivaccount-this-pc.png" alt="A screenshot of a Save As window with the This PC option highlighted." width="468" height="293"> <br>
<img src="{{site.baseurl}}/assets/piv/pivaccount-cert-export-wiz.png" alt="A screenshot showing several windows with the Certificate Export Wizard window on top." width="463" height="432"> <br>
20.	Have the cardholder send the exported .cer file to your organization’s Network Administrator in a way that aligns with the organization’s security policies. <br>

**Request Certificates from the Smart Card Issuer** <br>
Your organization’s credential issuer may have a copy of certificates issued to current users. You will need to specifically request from the issuer the most recent valid identity certificates suitable for smart card logon. The issuer will produce these certificates in a variety of ways, based on the certification authority or the Card Management System in use. 

**Export Certificates from a Third Party System** <br>
Your organization may have already collected the relevant certificates as part of the enrollment process for a third party application, such as a FIPS 201-compliant PACS system. Depending on the system and configuration in use, you may be able to export your cardholders’ certificates from the database where they are enrolled. Speak with your PACS integrator to understand what options are available to you.
<img src="{{site.baseurl}}/assets/piv/pivaccount-card-ops.png" alt="A screenshot of a Card Operations window that shows several rows of card IDs and other information." width="624" height="268">

##### Methods for Linking the PIV Authentication Certificate
System administrators can leverage one of the approaches below to link PIV Authentication certificates with user accounts. Run these steps from a domain controller with elevated privileges.

**A. Use the Active Directory Users and Computers Graphical User Interface** <br>
The following steps are useful if you only need to update a small number of user accounts:
 -  **Start** > **Server Manager**
 -  **Tools** > **Active Directory Users and Computers**
 -  **View** > **Advanced Features** 
 -  Expand your domain to reveal the **Users** directory
 -  Right-click on the user whose certificate you'd like to map and select **Name Mappings**
 -  Click **Add** and browse to a local copy of the user's PIV Authentication certificate
 -  Click **Apply** and then **OK**

**B. Use Automation** <br>
If you are designing an automated process to transition users from Principal Name to altSecurityIdentities mapping, consider the following functionality:  
- Load and process multiple certificates at once (for example, reading a directory of user certificates)
- Extract the UPN from each certificate and ensure a corresponding user record exists in Active Directory
- For certificates that contain a UPN that matches a record in Active Directory:
     - Extract and format the certificate Issuer and Subject attributes in preparation for publishing to Active Directory
     - Update the user's Active Directory record with the altSecurityIdentities attribute and corresponding Issuer and Subject data
- For certificates that do not contain a UPN that matches a record in Active Directory:
     - Set aside for manual review (e.g., these users may be no longer affiliated with your organization)
- Evaluate accounts in Active Directory that do not contain an altSecurityIdentities attribute after process execution for manual review and further remediation

<div class="usa-alert usa-alert--success">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Collaborate with us!</h4>
    <p class="usa-alert__text">
      We're working with a small number of agencies to pilot a simple PowerShell script to help with some of the functional requirements above. Check out the script in our    
      <a class="usa-link usa-link--external" href="https://github.com/GSA/ficam-scripts-public/tree/master/_altSecId" target="_blank">public scripts repository</a>
      or contact ICAM at GSA.Gov for more information.
    </p>
  </div>
</div>


#### 2. Enable User Name Hints
You need to enable _User Name Hints_ for your network domain.  This will modify the logon prompts for _Windows_ workstations and servers joined to the network domain.  Your users will be prompted to provide both the PIV credential PIN value and a User Name Hint value.

{% include alert-success.html heading = "Did you know?" content="If a user's PIV Authentication certificate UPN matches their Windows logon name, the User Name Hint value may be left blank during the logon process.  The UPN is found in the <a class=\"usa-link usa-link--external\" href=\"https://www.idmanagement.gov/arch/pivdetails/#piv-identifiers\" target=\"_blank\" rel=\"noopener noreferrer\">Subject Alternative Name</a> extension of the PIV Authentication Certificate." %} 

##### User Name Hint Setting

**For Windows Server 2008 R2:**
  - _Computer Configuration_ > _Policies_> _Administrative Templates_ > _Windows Components_, and then expand _Smart Card_.
  - Select _Allow User Name Hint_

**For Windows Server 2012 and later:**
  - _Computer Configuration_ > _Administrative Templates_ > _Windows Components_, and then expand _Smart Card_.
  - Select _Allow User Name Hint_

Management of smart card settings should be deployed using a group policy object for the domain.

#### 3. Disable User Principal Name Mapping
To transition from UPN mapping to altSecurityIdentities account linking, you will need to configure a registry setting on **all** domain controllers. Only configure the registry setting below once you have completed the above steps and are ready to disable UPN mapping.

{% include alert-warning.html content="<b>Note:</b> Organizations should carefully plan their transition to the altSecurityIdentities account linking approach and test interoperability before implementing changes in their production IT environments.  <b>The registry configuration below will cause smart card logon to fail for any user missing the altSecurityIdentities attribute.</b>" %} 

- **Key:** HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Kdc
- **Name:** UseSubjectAltName 
- **Type:** DWORD
- **Data (Value):** 00000000

This setting tells your network domain _I don't always want to use the Subject Alternate Name values for my user certificates._  More information on the setting is available [here.](https://technet.microsoft.com/en-us/library/ff520074(WS.10).aspx){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

It's possible to revert to UPN account linking by removing the registry setting above.

Use group policy objects or other centralized management options to manage registry options.
