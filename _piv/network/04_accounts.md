---
layout: page
collection: piv
title: Account Linking
permalink: piv/network/account/
sticky_sidenav: true
sidenav: pivnetwork

subnav:
  - text: Comparing altSecurityIdentities and User Principal Name
    href: '#background-comparing-altsecurityidentities-and-user-principal-name'
  - text: Transitioning from UPN Mapping to altSecurityIdentities Mapping
    href: '#transitioning-from-upn-mapping-to-altsecurityidentities-mapping'
---

*Account linking* refers to the process of associating a certificate on a user's PIV credential with their domain account.

## Comparing altSecurityIdentities and User Principal Name
There are two account linking attributes to choose from:
- altSecurityIdentities (_Recommended_)
- User Principal Name (UPN)

It's not possible to configure a domain to use *both* altSecurityIdentities *and* User Principal Name mapping. You must choose **one** of these options and configure its use for *all* domain users.

### altSecurityIdentities approach
- Each PIV credential can be associated with **more than one** account.
     - This flexibility allows for the association of a single PIV credential certificate to an individual's end-user and privileged user account(s).
- Users are presented with an additional field during network authentication to identify which account the user wants to access. This field is known as the _User Name Hint_.
     - The User Name Hint is what informs Windows which account the user is trying to log into if the mapped certificate is associated with multiple accounts.
     - Entering a User Name Hint is optional if the user's PIV Authentication certificate UPN matches their Windows Logon name.
- You can choose from one of [six options](#2-link-the-piv-authentication-certificate) to map a certificate to a given account.
- There is more flexibility for accepting PIV credentials issued by other government agencies or partners, including PIV-Interoperable credentials.

### User Principal Name approach
- Each PIV credential can only be associated with **one** account.
- The UPN value from the _Subject Alternate Name_ in the PIV Authentication certificate is required.
- There is no flexibility for associating the PIV credential to separate privileged accounts.
- There is less flexibility for accepting PIV credentials issued by other government agencies or partners, including PIV-Interoperable credentials.


## Transitioning from UPN Mapping to altSecurityIdentities Mapping 
If you have a large network with many domains, you should carefully plan the migration from User Principal Name to the altSecurityIdentities account linking method.  

{% include alert-warning.html heading = "Use of UPN by Applications" content="You may find that you have many applications that rely upon User Principal Name values.  There is no need to remove existing or stop populating new User Principal Name values in your transition to altSecurityIdentities." %} 

There are three steps to implement altSecurityIdentities account linking:
  1. [Disable User Principal Name Mapping](#1-disable-user-principal-name-mapping)
  2. [Link the PIV Authentication Certificate](#2-link-the-piv-authentication-certificate)
  3. [Enable User Name Hints](#3-enable-user-name-hints)

#### 1. Disable User Principal Name Mapping
To implement altSecurityIdentities, you will need to configure a registry setting on **all** domain controllers.  

- Key: HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Kdc
- Name: UseSubjectAltName 
- Type: DWORD
- Data (Value): 00000000

This setting tells your network domain: _I don't always want to use the Subject Alternate Name values for my user certificates._  More information on the setting is available [here.](https://technet.microsoft.com/en-us/library/ff520074(WS.10).aspx){:target="_blank"}{:rel="noopener noreferrer"}

Use group policy objects or other centralized management options to manage registry options.

#### 2. Link the PIV Authentication Certificate
Next, you need to link each user's PIV Authentication certificate to their domain account(s).  This is accomplished by populating data extracted from the user's PIV Authentication certificate into the user's Active Directory record, specifically into the **altSecurityIdentities** attribute.

There are six mapping options to choose from, but most organizations use **Issuer and Subject**.

| Options       | Tag     | Example | Considerations |
| ------------- |-------------| -----|-----|
| Subject     | X509:\<S> | X509:\<S>C=US,O=U.S. Government,OU=Government Agency,CN=JANE DOE OID.0.9.2342.19200300.100.1.1=25001003151020 |  For certificates which assert the UID identifier (0.9.2342.19200300.100.1.1) or other object identifier in the common name, the identifier is prepended with the _OID_ qualifier. |
| Issuer and Subject     | X509:\<I>\<S>  | X509:\<I>C=US,O=U.S. Government,OU=Certification Authorities,OU=Government Demonstration CA\<S>C=US,O=U.S. Government,OU=Government Agency,CN=JANE DOE OID.0.9.2342.19200300.100.1.1=47001003151020 | Note the spaces carefully when testing and machine readable formats of the certificate extensions versus the human readable formats. |
| Issuer and Serial Number | X509:\<I>\<SR> | X509:\<I>C=US,O=U.S. Government,OU=Certification Authorities,OU=Government Demonstration CA\<SR>46a65d49 | Serial number is reversed byte order from human readable version, starting at most significant byte. |
| Subject Key Identifier     | X509:\<SKI> |   X509:\<SKI>df2f4b04462a5aba81fec3a42e3b94beb8f2e087 |  Not generally recommended; may be difficult to manage. |
| SHA1 hash of public key| X509:\<SHA1-PUKEY> |  X509:\<SHA1-PUKEY>50bf88e67522ab8ce093ce51830ab0bcf8ba7824 |  Not generally recommended; may be difficult to manage.   |
| RFC822 name | X509:\<RFC822>      |   Not recommended |    Not recommended; not commonly populated in PIV Authentication certificates. |


##### Methods for Linking the PIV Authentication Certificate
System administrators can leverage one of the approaches below to link PIV Authentication certificates with user accounts. These steps should be run from a domain controller with elevated privileges.

{% include alert-warning.html content="<b>Note:</b> Organizations should carefully plan their transition to the altSecurityIdentities account linking approach and test interoperability in advance of implementing changes in their production IT environments." %} 

#### 1. Use the Active Directory Users and Computers Graphical User Interface
The following steps are useful if you only need to update a small number of user accounts:
 -  **Start** > **Server Manager**
 -  **Tools** > **Active Directory Users and Computers**
 -  **View** > **Advanced Features** 
 -  Expand your domain to reveal the **Users** directory
 -  Right click on the user whose certificate you'd like to map and select **Name Mappings**
 -  Click **Add** and browse to a local copy of the user's PIV Authentication certificate
 -  Click **Apply** and then **OK**

#### 2. Use Automation <br>
If designing an automated process to transition users from Principal Name to altSecurityIdentities mapping, consider the following functionality:  
- Load and process multiple certificates at once (for example, reading a directory of user certificates)
- Extract the UPN from each certificate and ensure a corresponding user record exists in Active Directory
- For certificates that contain a UPN that matches a record in Active Directory:
     - Extract and format the certificate Issuer and Subject attributes in preparation for publishing to Active Directory
     - Update the user's Active Directory record with the altSecurityIdentities attribute and corresponding Issuer and Subject data
- For certificates that do not contain a UPN that matches a record in Active Directory:
     - Set aside for manual review (e.g., it's possible these users are no longer affiliated with your organization)
- Evaluate accounts in Active Directory that do not contain an altSecurityIdentities attribute after process execution for manual review and further remediation
 
We're working with a small number of agencies to pilot a simple PowerShell script to help with some of the functional requirements above.  Contact us at icam@gsa.gov if you'd like more information or if you'd like to collaborate with us.
 
#### 3. Enable User Name Hints
You need to enable _user name hints_ for your network domain.  This will modify the logon prompts for _Windows_ workstations and servers joined to the network domain.  Your users will be prompted to provide both the PIV credential PIN value and a User Name Hint value.

{% include alert-success.html heading = "Did you know?" content="If a user's PIV Authentication certificate UPN matches their Windows Logon name, the User Name Hint value may be left blank during the logon process.  The UPN is found in the <a href=\"https://playbooks.idmanagement.gov/piv/identifiers/\" target=\"_blank\">Subject Alternative Name</a> extension of the PIV Authentication Certificate." %} 

##### Username Hint Setting

  **For Windows Server 2008 R2:**
  - _Computer Configuration_ -> _Policies_-> _Administrative Templates_ -> _Windows Components_, and then expand _Smart Card_.
  - Select _Allow user name hint_

  **For Windows Server 2012 and later:**
  - _Computer Configuration_ -> _Administrative Templates_ -> _Windows Components_, and then expand _Smart Card_.
  - Select _Allow user name hint_

Management of smart card settings should be deployed using a group policy object for the domain.



