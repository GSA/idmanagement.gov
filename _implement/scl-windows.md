---

layout: page
collection: implement
title: Configure Smart Card Logon on Windows Domains
permalink: /implement/scl-windows/
sticky_sidenav: true
sidenav: implement

subnav:
  - text: Introduction
    href: '#introduction'
  - text: Step 1 - Network Ports and Protocols
    href: '#step-1---network-ports-and-protocols'
  - text: Step 2 - Domain Controllers
    href: '#step-2---domain-controllers'
  - text: Step 3 - Trust Stores
    href: '#step-3---trust-stores'
  - text: Step 4 - Associate PIV Credential in Active Directory
    href: '#step-4---account-linking'
  - text: Step 5 - Group Policies and Enforcement
    href: '#step-5---group-policies-and-enforcement'
  - text: Step 6 - Network Tuning
    href: '#step-6---network-tuning'
  - text: Step 7 - Local Certification Authority
    href: '#step-7---local-certification-authority'
  - text: Step 8 - Authentication Assurance
    href: '#step-8---authentication-assurance'
  - text: Troubleshooting PIV Logon
    href: '#troubleshooting-piv-logon'

---

<div class="usa-alert usa-alert--error" role="alert">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">September 2024 - Update to Microsoft Network Authentication Issue</h4>
    <p class="usa-alert__text">
      As of September 10th 2024, Microsoft has released a solution for Active Directory network authentication issues resulting from the May 2022 patches that impacted some PIV network authentications. The September patch applies to Windows Server 2019 and later and includes a mechanism for support of some deprecated identifiers asserted by PIV authentication certificates (e.g., UPN or X509IssuerSubject altsecid) and mapped to AD user accounts.  AD administrators now have the ability to add registry keys that include what is being termed a "Triple Mapping" or "Policy Tuple" that allows the domain controller to determine if an authentication certificate is issued from a trusted Certification Authority (CA) and if it asserts an acceptable policy OID before defining acceptable identifiers for user account mapping.  You can read more about these AD changes in the following <a class="usa-link usa-link--external" href="https://techcommunity.microsoft.com/t5/public-sector-blog/enable-strong-name-based-mapping-in-government-scenarios/ba-p/4240402" target="_blank" rel="noopener noreferrer">Microsoft Public Sector Blog</a>.  Full enforcement mode for use of approved identifiers is still planned to go into effect on February 11, 2025 and compatibility mode will be fully retired on September 10th, 2025.  See Step 4 below regarding Account Linking for further details.
    </p>
  </div>
</div>

{% include alert-info.html heading = "Approved AltSecID Identifiers" content="If your on-premise Active Directory user account mappings alreaady use X509SKI or X509IssuerSerialNumber altsecid, you will not need to take any action as a result of the September 2024 Microsoft updates." %}


## Introduction

These Windows Domain configuration guides will help you configure your Windows _network domain_ for smart card logon using PIV credentials.

There are many useful pages and technical articles available online that include details on configurations and using generic smart cards.  The information presented here addresses common questions and configurations **specific** to the U.S. federal government, **PIV** smart cards, and U.S. federal civilian agency certification authorities.

{% include alert-info.html heading = "Teamwork" content="Work with your Network Engineers, Domain Admins, Account Management, and Information Security colleagues to review the information, perform the configurations, and troubleshoot any issues." %}

## Pre-Launch Checklist

Check the following items **before** reviewing these network guides and lessons learned:

1. Users have PIV credentials and PIV card readers.
1. You are using Microsoft Active Directory to manage your Windows network.
1. Domain Controllers are running Microsoft Windows Server 2019 or newer.
1. User workstations **are joined** to your network and are Windows 10 or newer.

## Configuration Checklist

There are five configuration categories to review with your colleagues.  All five include steps that must be completed; it's best to review and complete the configuration categories in this order:

1. [Network Ports and Protocols](#step-1---network-ports-and-protocols) 
2. [Domain Controllers](#step-2---domain-controllers)
3. [Trust Stores](#step-3---trust-stores)
4. [Account Linking: Associating PIV credentials with User Accounts](#step-4---account-linking)
5. [Group Policies and Enforcement](#step-5---group-policies-and-enforcement) 

There are five additional guides:

6. [Network Tuning](#step-6---network-tuning)
7. [Local Certification Authority](#step-7---local-certification-authority)
8. [Authentication Assurance](#step-8---authentication-assurance)

We want to add additional information for installing Online Certificate Status Protocol (OCSP) services, addressing common errors and troubleshooting, and configuring for other operating systems.  

Submit an [Issue]({{site.repourl}}/issues/new){:target="_blank"}{:rel="noopener noreferrer"} to identify information that would be helpful to you, or consider contributing a page to these guides with your lessons learned.


<!-- from https://playbooks.idmanagement.gov/piv/network/ports/  is now an internal page link to here(#ports-and-protocols) instead of its own guilde -->

## Step 1 - Network Ports and Protocols

Your workstations, servers, network domain controllers, and applications need to validate the [revocation status]({{site.baseurl}}/university/pki/#revocation-checking) of the PIV certificates and all intermediate certificate authority (CA) certificates.  In addition, the [certificate chain]({{site.baseurl}}/university/pki/#establishing-trust) path building may retrieve and download the intermediate CA certificates.

The validation occurs in real time (with some caching) and requires ensuring network traffic is open and available to the destination web services, ports, and protocols.  Many U.S. federal agencies implement a layered network security model with demilitarized zones (DMZs), proxies, and Trusted Internet Connections (TICs) to monitor, defend, and protect the networks, applications and users.

## Verifying and Troubleshooting
Non-accessible endpoints for the web services due to firewalls blocking access is a very common root cause for errors.  If you encounter user errors including "Cannot validate" and similar domain controller errors, your first troubleshooting step should be to verify your network and access.

{% include alert-info.html heading = "nslookup and certutil are your friendly tools" content="Restricted or denied access to Internet web services including the OCSP and CRL web services used in the certificate validations lead to common errors and issues.  Collaborate with your Network Engineers to review the web services, IP addresses, ports and protocols, and verify access from all local and wide-area network segments." %}

It is simple to begin troubleshooting if the web services endpoints are accessible or blocked by firewall rules.  You have the basic four utility tools for troubleshooting:

- certutil (Microsoft)
- openssl
- nslookup
- tracert


For the typical network domain, _certutil_ will be your best option to identify a number of possible root causes.  There are many options available in the _certutil_ utility tool, and two are covered here.

Export your _public_ key and certificate for PIV Authentication to a .cer file (mypiv_auth.cer), and run the following command in a command line from workstation(s) *and* domain controller(s):

```
  certutil -verify -urlfetch mypiv_auth.cer >>verify_piv.txt
```

The text file output will include a *full* check against all options for CRLs, OCSP, intermediate certificates to verify a trust chain, and the root (COMMON).  Review all items and ensure at least one successful verification message is included for _each check_.  You may see errors for the LDAP verifications and these can be ignored if a CRL or OCSP check is successful.

{% include alert-warning.html heading = "Time is important" content="When reviewing the verification messages, you should pay careful attention to the time.  For example, if a CRL file is not downloaded in under 15 seconds, it is very likely that you will encounter network authentication errors and will need to perform some tuning." %} 

There is also a graphical user interface to help perform these verification checks.

```
  certutil -v -url mypiv_auth.cer
```
The graphical user interface allows you to check OCSP, CRL, and AIA (intermediate certificate retrievals).

<div class="usa-alert usa-alert--error" role="alert">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Can federally operated certificate revocation services (CRL, OCSP) operate on port 80?</h4>
    <p class="usa-alert__text">
      Yes. This very narrow class of services, that provide CRL and OCSP information for the purposes of verifying the revocation status of certificates used to make other HTTPS connections, should abide by best practices in the field and their respective specifications. For CRLs, follow 
      <a class="usa-link usa-link--external" href="https://tools.ietf.org/html/rfc5280" target="_blank" rel="noopener noreferrer">RFC 5280</a>
      which states CAs <strong>SHOULD NOT</strong> include URIs that specify https, ldaps, or similar schemes in extensions. For OCSP, follow 
      <a class="usa-link usa-link--external" href="https://tools.ietf.org/html/rfc6960" target="_blank" rel="noopener noreferrer">RFC 6960</a>
      which states a CA may use port 443 for OCSP where privacy is a requirement. Agencies are encouraged to operate OCSP and CRL services via hostnames specifically reserved for those services, so that other related information and functionality can be served securely and privately. For more information see the 
      <a class="usa-link usa-link--external" href="https://https.cio.gov/guide/#are-federally-operated-certificate-revocation-services-crl-ocsp-also-required-to-move-to-https" target="_blank" rel="noopener noreferrer">Federal CIO Council HTTPS-Only Standard</a>
      .
    </p>
  </div>
</div>

## Web Services for Validating PIV Certificates

[Revocation]({{site.baseurl}}/university/pki/#revocation-checking) status is validated using using either Online Certificate Status Protocol (OCSP) or Certificate Revocation Lists (CRLs). To meet your initial network requirements, you should ensure the OCSP and CRL URLs included in *your agency* users' [PIV Credential Certificates]({{site.baseurl}}/university/piv/#view-your-piv-credential-certificates) are accessible from all workstations and domain controllers.

| Type | Certificate Extension | Protocol (Port) | Considerations|
| ----- | -------| -------| ------|
| OCSP | Authority Information Access | HTTP (80) | All PIV certificates have OCSP references and OCSP URLs which are Internet accessible and provided by the issuing CA. Intermediate CAs are **not** required to have OCSP available for the _intermediate_ certificates.|
| CRL  | CRL Distribution Point (CDP) | HTTP (80) | All PIV certificates have CRL capabilities provided by the issuing CA.  All intermediate CA certificates have CRL capabilities.  CRL files have an expiration time that varies between 6 to 18 hours. CRL file sizes range from a few kilobytes to more than 30 megabytes (MB).

Lightweight Directory Application Protocol (LDAP) for retrieving information is not preferred and has been increasingly deprecated; therefore, LDAP is not included.

There are dozens of OCSP and CRL URLs for *all* issued PIV credentials.  If you have users with PIV credentials from other agencies or partners, identifying all the URLs to verify against your network configurations will be more complex.

<div class="usa-alert usa-alert--success">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Externally Issued PIV Revocation Resources</h4>
    <p class="usa-alert__text">
     You can find end-entity CRL Distrobution Point and OCSP URIs under our Active PIV Issuing CA page in the event you require revocation information for externally issued <a class="usa-link usa-link--external" href="https://www.idmanagement.gov/fpki/notifications/#active-issuing-ca-certificate-details" target="_blank">PIV CAs</a>.
    </p>
  </div>
</div>

## Web Services for the Federal Public Key Infrastructure

The Federal Common Policy Certificate Authority G2 (COMMON) is the root certificate authority and has web services to publish both certificate chains (p7b files) and CRLs for all intermediate certificate authorities which the root signs.

To enable communications with these Federal Common Policy Certificate Authority services, including those currently operational and any expansion, you should verify outbound communications to the base domain of _http.fpki.gov_. For example, a successful connection to [http://repo.fpki.gov/fcpca/fcpcag2.crt](http://repo.fpki.gov/fcpca/fcpcag2.crt){:class="usa-link usa-link--external"} will download a copy of the Federal Common Policy CA certificate.

You should consider allowing two protocols (ports): HTTP (80) and DNS (53).  Although the web services for publishing CRLs are not currently served over HTTPS (443), you may want to allow HTTPS (443) to future proof for any expansion.

## Step 2 - Domain Controllers

To use smart cards and PIV credentials for network authentication, all domain controllers need to have domain controller authentication certificates.

{% include alert-info.html heading = "Devices authenticate too!" content="When your users are using certificates to authenticate to the network, the domain controllers are also authenticating as devices using certificates. Each works together to create secure connections. To learn more, search for online resources that discuss Public Key Cryptography for Initial Authentication (PKINIT) protocols." %}

This page contains information on domain controller certificate profiles and issuing domain controller certificates.

## Domain Controller Certificate Profiles

Domain controller certificates must be issued with a set of specific extensions and values.  The certificate profile for each domain controller must meet the following requirements:

- The certificate **Key Usage** extension must contain:

            Digital Signature, Key Encipherment

- The certificate **Enhanced Key Usage** extension must contain:

            Client Authentication (1.3.6.1.5.5.7.3.2)
            Server Authentication (1.3.6.1.5.5.7.3.1)

- The certificate **Subject Alternative Name** extension must contain the Domain Name System (DNS) qualifier and fully qualified domain controller name.  For example:

            DNS Name=controller1.intranet.agency.gov

- The certificate **Subject Alternative Name** must also contain the domain controller's Global Unique Identifier (GUID) (i.e., for the "domain controller object"). 

  * To determine the domain controller's GUID, start **Ldp.exe** and locate the **domain-naming context**. 
  * Double-click on the **name of the domain controller** whose GUID you want to view.
  
    > The list of attributes for the domain controller object contains **"Object GUID" followed by a long number**. The number is the object GUID. For example:

            Other Name: 1.3.6.1.4.1.311.25.1 = ac 4b 29 06 bb d6 5d 4f e3 9c 4c ab c3 6a 55 d9

    > The domain controller's certificate must be installed in the domain controller's local computer's **_personal certificate store_**.

{% include alert-info.html heading = "Supported Domain Controller Identifiers" content="Many Domain Controllers are issued device certificates via Active Directory Certificate Services (ADCS) that may be operating an Only Locally Trusted PKI also known as an \"Enterprise\" PKI. Those ADCS implementers will want to include the Microsoft proprietary Security Identifier (SID) in their DC certificate profile to ensure compliance with recent Microsoft changes. For other AD implementers who receive DC certificates from their PIV Shared Service Provider, you may want to work with that provider to include the SID in any renewed or rekeyed DC certificates." %}  

- It is also recommended to include a non-critical Security Identifier (ObjectSID) extention in your DC certificates, for example:

            1.3.6.1.4.1.311.25.2 = S-1-5-domain-516

<div class="usa-alert usa-alert--error" role="alert">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Avoid Vulnerabilities with Device Identifiers</h4>
    <p class="usa-alert__text">
      Vulnerabilities identified in CVEs reported in May 2022 have outlined potential avenues for network authentication based on spoofed or emulated device certificates that have not been issued by trusted CAs.  In order to avoid these vulnerabilities, AD implmenters must prohibit the use of any non-person entity (NPE or Devices to include DCs) certificates issued by CAs listed in GPO policy tuples.  Please see the following <a class="usa-link usa-link--external" href="https://support.microsoft.com/en-us/topic/kb5014754-certificate-based-authentication-changes-on-windows-domain-controllers-ad2c23b0-15d8-4340-a468-4d4f3b188f16" target="_blank" rel="noopener noreferrer">Microsoft Knowledge Blog</a> for additional specifics regarding these vulnerabilities. 
    </p>
  </div>
</div>

## Issue Domain Controller Certificates

U.S. federal civilian agencies have a variety of information security policies.  These policies cover whether you should use a domain controller certificate issued from your agency's local enterprise certification authority (CA) or whether the certificate must be issued from a CA managed and certified under the Federal Public Key Infrastructure (FPKI).  Each agency's information security policy should be followed.

It is not recommended to set up a local enterprise CA just to issue domain controller certificates without ensuring the proper management and security protections are enabled.  Your Chief Information Security Officer (CISO) must have awareness and oversight established for the CA management.

Collaborate with your CISO or Information Security Office for a definitive answer and direction.

If you do have a local enterprise CA, [here are some tips](#step-7---local-certificate-authority).

## Step 3 - Trust Stores

Follow [Step 3 - Distribute to Operating System from the distribute FCPCA configuration guide]({{site.baseurl}}/implement/trust-fcpca/#step-2---distribute-to-operating-systems).

{% include alert-info.html heading = "Mutual Trust" content="Note that both the client machine and domain controller trust stores must be configured for mutual authentication. As a result, the domain controller issuing and root CA certificates needs to be included in the client trust store and the client PIV authentication issuing, intermediate and root certifiates need to be able to be trusted by the domain controller." %}  

## Step 4 - Account Linking

*Account linking* refers to the process of associating a certificate on a user's PIV credential with their domain account.

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
  1. [Link the PIV Authentication Certificate](#option-1-link-the-piv-authentication-certificate)
  2. [Enable User Name Hints](#option-2-enable-user-name-hints)
  3. [Disable User Principal Name Mapping](#option-3-disable-user-principal-name-mapping)


## Option 1. Link the PIV Authentication Certificate
First, you need to link each user's PIV Authentication certificate to their domain account(s).  This is accomplished by populating data extracted from the user's PIV Authentication certificate into their Active Directory record, specifically into the **altSecurityIdentities** attribute.  

Adding altSecurityIdentities attributes **will not** break existing UPN account linking or cause smart card logon to fail. It's possible to plan your transition carefully and to take your time populating the altSecurityIdentities attribute for domain users. 

There are six altsecid mapping options to choose from; however, three of these are considered to be "weak" identifiers that will either need to be migrated to a "strong" identifier or policy tuble mappings will need to be implmented to allow for use of an Issuer/Subject altsecid. 

{% include alert-warning.html heading = "Depricaticated Mappings" content="As of September 2024, Microsoft has depricated the use of Subject and RFC822 altsecid mappings as they were considered vulnerable to spoofing attempts." %} 

| Options       | Tag     | Example | Strength | Considerations |
| ------------- |-------------| -----|-----|
| Issuer and Subject     | X509:\<I>\<S>  | X509:\<I>C=US,O=U.S. Government,OU=Certification Authorities,OU=Government Demonstration CA\<S>C=US,O=U.S. Government,OU=Government Agency,CN=JANE DOE OID.0.9.2342.19200300.100.1.1=47001003151020 | Supported with Policy Tuple | Implementers will need to leverage a policy tuple to accomodate this altsecid.  Note the spaces carefully when testing machine-readable formats of the certificate extensions versus the human-readable formats. |
| Issuer and Serial Number | X509:\<I>\<SR> | X509:\<I>C=US,O=U.S. Government,OU=Certification Authorities,OU=Government Demonstration CA\<SR>46a65d49 | Supported | Serial number is stored in a reversed byte order from the human-readable version, starting at the most significant byte. |
| Subject Key Identifier     | X509:\<SKI> |   X509:\<SKI>df2f4b04462a5aba81fec3a42e3b94beb8f2e087 | Supported | Highly unique; may be difficult to manage. |
| SHA1 hash of public key| X509:\<SHA1-PUKEY> |  X509:\<SHA1-PUKEY>50bf88e67522ab8ce093ce51830ab0bcf8ba7824 |  Supported | Highly unique; may be difficult to manage.   |
| Subject     | X509:\<S> | X509:\<S>C=US,O=U.S. Government,OU=Government Agency,CN=JANE DOE OID.0.9.2342.19200300.100.1.1=25001003151020 | Deprecated | This field is no longer supported for altsecid mapping as of Sept 2024. |
| RFC822 name | X509:\<RFC822>      |   X509:\<RFC822>john.smith@hhs.gov |  Deprecated |  This field is no longer supported for altsecid mapping as of Sept 2024. |

{% include alert-info.html heading = "Use of Security Identifiers (SID)" content="Although it is not mandated by FPKI PIV certificate profiles, an SID is a Microsoft priorietary identifier that can be asserted as a non-critical extention in a PIV authentication certificate and used for AD user account mapping." %} 

Policy tuple mappings to accomodate some weak identifier mappings are available in Windows Server 2019 and later as of September 10th, 2024.  Tuple mappings are defined via group policy, specifically *Administrative Settings / System / KDC* under an entry titled **"Allow name-based strong mappings for certificates"**  wherein administrators can define three things to include:
   1. Trusted issuing CA - identified by its certificate thumbprint, each tuple will be unique to each issuing CA thumbprint
   2. Trusted certificate policy OID - ensures that the client certificate is issued acording to a certain policy or policies, and
   3. Name matching - defines what field to extract from the certificate that meets the previous two conditions for correlation to AD user accounts, this will generally be UPN suffix and/or altsecid IssuerSubject

Note that if you authenticate PIV certificates from multiple issuing CAs you will require several registry entries with the tuple mapping to account for the uniqe thumbprints of each issuing CA.

The following examples provide a few options for various potential policy tuple values that can be used to identify a few types of certificate based network authentication credentials.

1. UPN only policy tuple for a standard internal PIV user (Entrust Managed Services SSP CA, PIV Authentication OID, Department of Health and Human Services UPN Suffix)

            19fea49c468760edce9600a9da9657b484734d24; 2.16.840.1.101.3.2.1.3.13; UPNsuffix=hhs.gov
   
3. Altsecid policy tuple for a priviledged administrator with an ALT token (Entrust Managed Services SSP CA, Common-Hardware Token, Issuer/Subject altsecid)

            19fea49c468760edce9600a9da9657b484734d24; 2.16.840.1.101.3.2.1.3.7; IssuerSubject
   
5. Altsecid policy tuple for an external PIV or dPIV user (NASA Operational CA, PIV Authentication and dPIV Authentication OIDs, Issuer/Subject altsecid)

            67ddd6f4be3b69568f591bf999db2ef3085f7c5bl, 2.16.840.1.101.3.2.1.3.13, 2.16.840.1.101.3.2.1.3.40; IssuerSubject

Identity certificates used for Windows logon can generally be found: 
-	On the smart card itself. 
-	By requesting the certificates directly from the smart card issuer (either the CA or RA). 
-	By exporting the certificates from a third party application in which the certificates are already registered.

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

{% include alert-info.html heading = "PIV Authentication Certificate Sources" content="USAccess customers can recieve PIV authentication certifciates via their SIP interface. Reach out to usaccess at gsa dot gov for additional information." %} 

**Export Certificates from a Third Party System** <br>
Your organization may have already collected the relevant certificates as part of the enrollment process for a third party application, such as a FIPS 201-compliant PACS system. Depending on the system and configuration in use, you may be able to export your cardholders’ certificates from the database where they are enrolled. Speak with your PACS integrator to understand what options are available to you.
<img src="{{site.baseurl}}/assets/piv/pivaccount-card-ops.png" alt="A screenshot of a Card Operations window that shows several rows of card IDs and other information." width="624" height="268">

### Methods for Linking the PIV Authentication Certificate
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


## Option 2. Enable User Name Hints
You need to enable _User Name Hints_ for your network domain.  This will modify the logon prompts for _Windows_ workstations and servers joined to the network domain.  Your users will be prompted to provide both the PIV credential PIN value and a User Name Hint value.

**For Windows Server 2012 and later:**
  - _Computer Configuration_ > _Administrative Templates_ > _Windows Components_, and then expand _Smart Card_.
  - Select _Allow User Name Hint_

Management of smart card settings should be deployed using a group policy object for the domain.

## Option 3. Disable User Principal Name Mapping
To transition from UPN mapping to altSecurityIdentities account linking, you will need to configure a registry setting on **all** domain controllers. Only configure the registry setting below once you have completed the above steps and are ready to disable UPN mapping.

{% include alert-warning.html content="<b>Note:</b> Organizations should carefully plan their transition to the altSecurityIdentities account linking approach and test interoperability before implementing changes in their production IT environments.  <b>The registry configuration below will cause smart card logon to fail for any user missing the altSecurityIdentities attribute.</b>" %} 

- **Key:** HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Kdc
- **Name:** UseSubjectAltName 
- **Type:** DWORD
- **Data (Value):** 00000000

This setting tells your network domain _I don't always want to use the Subject Alternate Name values for my user certificates._  More information on the setting is available [here.](https://technet.microsoft.com/en-us/library/ff520074(WS.10).aspx){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

It's possible to revert to UPN account linking by removing the registry setting above.

Use group policy objects or other centralized management options to manage registry options.

## Step 5 - Group Policies and Enforcement

{% include alert-info.html heading = "Group Policy to Support \"Weak\" Identifiers" content="Administrators can enable <b>Allow name-based strong mappings for certificates</b>, in conjunction with policy tuple mappings mentioned in Step 4, to continue to use \"weak\" PIV alternate security identifiers for user account correlation." %} 

The U.S. federal government publishes the [United States Government Configuration Baseline (USGCB)](http://usgcb.nist.gov/usgcb_content.html){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} for use by Executive Branch agencies to promote uniform configurations for commonly used operating systems.  The USGCB configuration guidelines for specific operating systems include references to some configurations related to smart card (PIV) logon and should be referenced first.

The information on this page is intended to answer questions and identify the most commonly used configuration options.  For a full reference of options for each operating system, please refer to configuration guides published by other sources online.

## Machine Based Enforcement Versus User Based Enforcement

There are two options for requiring users to use PIV credentials to authenticate to the network domain:

* Machine Based Enforcement (MBE)
* User Based Enforcement (UBE)

These options are controlled by group policy applied to either Machine or User objects in your network domain. Planning is required to move to full User Based Enforcement and agencies are often using a combination of both Machine and User enforcement in their deployments.

{% include alert-warning.html heading = "User Based Enforcement" content="The user's password will no longer be known by the user.  Look for agency internal applications that are still using username and password and performing Form Based Authentication against the network directories. Fix these using Kerberos, SAML, or direct x509 authentication." %}

Impacts and considerations are identified to help you plan and execute according to your agency network and user needs.

| Type | Impacts | Considerations |
| ----- | -------| -------|
| Machine Based Enforcement | The user is required to use their PIV credential to authenticate to each device where the policy is applied. | The user password is maintained. |
| User Based Enforcement | The password stored for the user is removed and changed to a long hash value unknown to the user.  Your users no longer have passwords for the network. | Any applications which were implemented to prompt your users for a username and password and which are using your network domain directories will no longer be accessible. |

Your applications impacted by User Based Enforcement are designed or deployed using:

1. Form Based or Basic Authentication
2. or LDAP simple binds  

The user will be presented with the application form to enter a username and password and the user will no longer have the password.

You want to analyze your applications and identify which are configured to use your users' network domain passwords.  There are methods to fix the applications by enabling Kerberos, SPNEGO (web applications), direct x509 authentication (client certificate authentication), or the SAML and Open ID Connect (OIDC) protocols.  These topics will be covered in the Applications section of the guides that are in-development and we invite *all* to contribute to them!

## Defining the Policies for Machine Based Enforcement or User Based Enforcement
The setting to enforce PIV logon is controlled by **scforceoption** in your network domain user and workstation policies.

- Machine Based Enforcement is when you apply the **scforceoption** to a workstation or server object in your network domain.
- User Based Enforcement is when you apply the **scforceoption** to a user in your network domain.

This is the only difference when implementing the policy: which objects in your domain you apply the policy to.

You can set the policy option on a single user by checking the _Smart Card is required for interactive logon_ check box in the user account properties.  You can also apply this setting using group policy objects. When the **scforceoption** setting is applied, the SMARTCARD_REQUIRED flag is added to the UserAccountControl (UAC) and the DONT_EXPIRE_PASSWORD attribute is set to true.

## Defining Kerberos Policies for Re-authentication
Although users can PIV authenticate to domain controllers, the client and the domain controller maintain those sessions using kerberos tickets.  

Group policies can be configured by domain administrators to align with local security policies for maximum lifetimes of kerberos user tickets.  This may cause users to be prompted to re-authenticate with their PIV when prompted with one of the following options:

- Windows Needs Your Current Credentials
- Please Lock this computer, then unlock it using your most recent password or smart card

These prompts happen when the kerberos ticket lifetime expires and a new authentication event is required. User is set to user based enforcement, which requires a new PKINIT event with the domain controller.

You can find additional information on configuring kerberos policies given the following [reference documentation](https://docs.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/maximum-lifetime-for-user-ticket){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}.


## Step 6 - Network Tuning

You can tune the network domain settings to help you and your users have a better experience and reduce errors.  This section highlights some of the _common_ tuning configurations for network domain logon.  There are additional tuning configurations and we encourage you to start with these first and contribute others.

You can also send questions to the ICAM Technology listserve (email to ICAM-COMMUNITY-TECH at listserv.gsa.gov) to ask your government colleagues for their additional tips and tricks!

## Cached Logon Credential Limit

When a user authenticates to a Windows system, their logon credentials are cached to enable logon in the event the domain controller is unavailable. The [United States Government Configuration Baseline (USGCB) for Windows 7](https://usgcb.nist.gov/usgcb/microsoft/download_win7.html){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} specifies that ***Interactive logon: Number of previous logons to cache (in case domain controller is not available)*** should be set to ***2***. 

There are no required USGCB settings for _Windows 8_ or _Windows 10_.  

You should configure the cached logon credential limit to be at least "2" and _possibly more_ depending on the mission needs.  

The ***Number of previous logons to cache*** can be modified in local or group policy in the following location
***Computer Configuration\Windows Settings\Security Settings\Local Policies\Security options***

More information is available on [Microsoft TechNet](https://technet.microsoft.com/en-us/library/jj852209%28v=ws.11%29.aspx){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

## CRL Retrieval Timeout Settings

By default, Windows will time out when downloading Certificate Revocation List(s) after 15 seconds. A number of CRLs in the government environment are large, greater than 20 MB in size, which will lead to the timeout happening.  This example scenario can be common and a source of frustration to you and your users:  

- The first or the 51st user will attempt to log on in the morning in a region 
- The validity period and cache of the previous CRL will have expired on the domain controller
- The domain controller will attempt to download the large CRL file and will hit the timeout limit
- The user will receive an authentication failure (unable to log on) 
- The user will be able to try again and be successful
- You will try to determine the root cause to diagnose the failures (i.e., chasing ghosts on the network)
- This process will repeat

You want to tune _both_ the OCSP Response Caching Behavior setting and the CRL Retrieval Timeout Settings.  

The default timeout value can be modified using local or group policy by modifying the ***Default URL retrieval timeout*** value found in the ***Certificate Path Validation Settings***, ***Network Retrieval***  tab, located in ***Computer Configuration\Windows Settings\Security Settings\Public Key Policies***

Consult these step-by-step instructions:&nbsp; [Manage Network Retrieval and Path Validation](https://technet.microsoft.com/en-us/library/cc771429%28v=ws.11%29.aspx){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

## OCSP Response Caching Behavior

By default, Microsoft Windows will retrieve and cache 50 OCSP Responses for any one issuing CA before switching to CRL mode. Depending on the size of the CRL, this may be a poor performance decision. For environments where workstations routinely interact with large CRLs, a large value may significantly reduce network bandwidth consumption.  This value can be increased by setting the ***CryptnetCachedOcspSwitchToCrlCount*** DWORD value in the following registry key:
***HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\SystemCertificates\ChainEngine\Config***

Source:&nbsp; [Optimizing the Revocation Experience](https://technet.microsoft.com/en-us/library/ee619783%28v=ws.10%29.aspx){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

##  Step 7 - Local Certification Authority

This page provides some tips for using a local certification authority (CA) to issue a domain controller certificate.  This is for local Microsoft CAs. Other platforms may be used and have different procedures.    

{% include alert-info.html content="These procedures are accurate for using Microsoft 2012 Server, Standard Edition, for CA and domain controller servers as of March 2017." %}  

<div class="usa-alert usa-alert--error" role="alert">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Can federally operated certificate revocation services (CRL, OCSP) operate on port 80?</h4>
    <p class="usa-alert__text">
      Yes. This very narrow class of services, that provide CRL and OCSP information for the purposes of verifying the revocation status of certificates used to make other HTTPS connections, should abide by best practices in the field and their respective specifications. For CRLs, follow 
      <a class="usa-link usa-link--external" href="https://tools.ietf.org/html/rfc5280" target="_blank" rel="noopener noreferrer">RFC 5280</a>
      which states CAs <strong>SHOULD NOT</strong> include URIs that specify https, ldaps, or similar schemes in extensions. For OCSP, follow 
      <a class="usa-link usa-link--external" href="https://tools.ietf.org/html/rfc6960" target="_blank" rel="noopener noreferrer">RFC 6960</a>
      which states a CA may use port 443 for OCSP where privacy is a requirement. Agencies are encouraged to operate OCSP and CRL services via hostnames specifically reserved for those services, so that other related information and functionality can be served securely and privately. For more information see the 
      <a class="usa-link usa-link--external" href="https://https.cio.gov/guide/#are-federally-operated-certificate-revocation-services-crl-ocsp-also-required-to-move-to-https" target="_blank" rel="noopener noreferrer">Federal CIO Council HTTPS-Only Standard</a>
      .
    </p>
  </div>
</div>

## Prerequisites  

  * The server that hosts the CA must be joined to the domain.
  * The CA should **never** reside on the same server(s) that are acting as domain controller(s).
  * You must be an Enterprise Administrator in the domain to perform these steps.

## Install CA Role

  1. Log into the **CA server** as a member of the **Enterprise Administrators** group.
  2. Open the **Server Manager** and click on **Manage > Add Roles and Features**.
  3. Proceed through the **Add Roles and Features Wizard** options. Choose the following:<br/>
     _Server Roles:_ **_Active Directory Certificate Services_**<br/>
     _AD CS Roles Services:_ **_Certification Authority_**<br/>
  4. On the **Results** page, click on **Configure Active Directory Certificate Services on the destination server**.
  5. Proceed through the **AD CS Configuration** options. Choose the following values, as required:<br/>
     _Role Service:_ **_Certification Authority_**<br/>
     _Setup Type:_ **_Enterprise CA_**<br/>
     _CA Type:_ **_Root CA_**<br/>
     _Private Key:_ **_Create a new private key_** <br/>
     _Cryptography:_ **_RSA#Microsoft Software Key Storage Provider, 2048 bit, SHA-256 6e_**<br/>
     _CA Name: Use the naming convention:_ **dc=[_AD suffix_], dc=[_AD domain_], cn=[_certification authority name_]**<br/>
      (e.g., dc=_gov_, dc=_[AgencyName]_, cn=_[AgencyName]_ _NPE_ _CA1_)<br/>
     _Validity Period:_ **_6 years_**<br/>
     _Certificate Database:_ **_&lt;your preference&gt;_**<br/>

## Configure Certificate Template for Domain Controller  
The domain controller(s) certificate must contain valid information. These steps provide recommended options and settings.

  1. Log into the CA server as a member of the **Enterprise Administrators** group.
  2. Open the certificate template's **MMC snap-in** (i.e., **certtmpl.msc**). 
  3. Right-click on the **Domain Controller Authentication** template. Then, click on **Duplicate Template**.
  4. Under the **Compatibility** tab, modify the **Compatibility Settings** for both the _CA_ and _certificate recipients_ to the highest compatible version (e.g., **Windows Server 2012 R2** or **Windows 2008 R2**).
  5. Under the **General** tab, use these recommended settings:<br/>
     _Template Name:_  **_&lt;Your organization&gt; - Domain Controller Authentication_**.<br/>
     _Validity Period:_  **_3 years_**.<br/>
     _Renewal Period:_  **_6 weeks_**.<br/>
  6. Under the **Cryptography** tab, set these values:<br/>
     _Minimum Key Size:_  **_2048_**.<br/>
     _Request Hash:_  **_SHA256_** <br/>
  7. Open the **CA console** (i.e., certsrv.msc).
  8. In the **console tree**, click on the **_[CA's name]_**.
  9. In the **details** pane, double-click on **Certificate Templates**.
 10. In the **console tree**, right-click on **Certificate Templates**. Then, click on **New &gt; Certificate Template To Issue**.
 11. Select and enable the **_certificate template_** that was created. Click on **OK**.

## Auto-Enroll Domain Controllers Using Group Policy Object (GPO)

  1. Log into a **Domain Controller server** as a member of the **Enterprise Administrators** group.
  2. Open the **GPMC**: gpmc.msc
  3. Within the appropriate **GPO** applied to the Domain Controllers, go to **Computer Configuration\Policies\Windows Settings\Security Settings\Public Key Policies**\ 
  4. Configure **Certificate Services Client – Auto-Enrollment** with the following options:<br/>
     _Configuration Model:_ **_Enabled_**.<br/>
     _Renew Expired Certificates, Update Pending Certificates, Remove Revoked Certificates_: **_Check_all checkboxes_**.<br/>
     _Update Certificates That Use Certificate Templates_: **_Check the checkbox_**.<br/>
  5. Replicate the group policy. Use the command: **_gpupdate /force_** at the command line, or wait for the group policy to replicate based on your replication time and settings.
  6. Open **MMC.exe -&gt; File -&gt; Add/Remove Snap-in -&gt; Certificates -&gt; Computer account -&gt; Local computer**. 
  
  If successful, you will see a new domain controller certificate in the **_Certificate (Local Computer) -&gt; Personal -&gt; Certificates folder_**. At the **Certificate Template** tab, you will also see a certificate generated with the custom certificate template.

##  Step 8 - Authentication Assurance

When a user authenticates to your network and you've enabled Single Sign-on to applications inside your network domain, you need to know which of these authenticators was used: 

- A username and password
- A PIV credential
- An alternate authenticator  
  
You need to know the type of authenticator to implement increasingly granular authorization policies and to grant or deny a user access to information available from applications and shared network resources.

To grant a user access, based on the type of authenticator used, you can use a Windows Active Directory (AD) feature called _Authentication Mechanism Assurance (AMA)_. AMA allows you to add a group membership identifier to the user’s Kerberos token.

<div class="usa-alert usa-alert--warning">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Do not uses AMA to provide privileged access</h4>
    <p class="usa-alert__text">
      Privileged users should not rely on single sign-on and should always use the highest assurance credential. Their account should be separate and distinct from their normal user account. See the 
      <a class="usa-link" href="{{site.baseurl}}/playbooks/pam/" target="_blank" rel="noopener noreferrer"}>Privileged Identity Playbook</a>
      for best practices in reducing risk associated with privileged accounts and access.
    </p>
  </div>
</div>

AMA is available for Windows Server 2008 R2 domains and later versions.

## Implementation

You can use this PowerShell script [CertificateIssuanceOIDs.ps1](https://github.com/GSA/ficam-scripts-public/tree/master/_ama){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} to import and set up a list of certificate issuance policies. This script:

- Contains a list of certificate issuance policy object identifiers (OIDs) used by U.S. federal government agencies
- Creates security groups with the same names as the policies
- Links the policies to the security groups

You can run the script with a few simple steps.

- You'll need to specify the Group Distinguished Name (GroupDN) within the script. This targets where you want to create the security groups in your network directory:

  - `CertificateIssuanceOIDs.ps1 -GroupDN \<group DN string>`
  - For example: `CertificateIssuanceOIDs.ps1 -GroupDN 'OU=Groups,OU=Administrators,DC=agency,DC=gov'`

- After downloading this script, you may need to change the [PowerShell script execution policy](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-5.1&viewFallbackFrom=powershell-Microsoft.PowerShell.Core){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} to execute the script or sign the script to execute it.

A sample output from the script is shown below:

```
  PS C:\> C:\AMA\Script\CertificateIssuanceOIDs.ps1 
  -GroupDN 'ou=groups,ou=security,dc=agency,dc=gov'
  
  Created CN=id-fpki-common-authentication,ou=groups,
  ou=security,dc=agency,dc=gov  
  2.16.840.1.101.3.2.1.3.13 -- Unknown ObjectId  
  
  Localized name added to DS store.
  0: 1033,id-fpki-common-authentication  
  CertUtil: -oid command completed successfully.
  
  Created CN=13.255922318A2AF32EC47D5B70735D4DB3,
  CN=OID,CN=Public Key Services,CN=Services,
  CN=Configuration,DC=agency,DC=gov  
  AD AMA set for 2.16.840.1.101.3.2.1.3.13  id-fpki-common-authentication  
```

**Note:**&nbsp;&nbsp;If the GroupDN is not entered in the command line when executing the script, it will prompt for the input.

```
  PS C:\> C:\AMA\Script\CertificateIssuanceOIDs.ps1 
  cmdlet ama-script.ps1 at command pipeline position 1
  Supply values for the following parameters:
  GroupDN: ou=groups,ou=security,dc=agency,dc=gov
==============================================
  GroupDN entered is ou=groups,ou=security,dc=agency,dc=gov

```

## Testing
To test the output on your network domain, log in with your PIV credential and check the groups assigned.  

- Authenticate with your PIV credential
- From the command line: `C:\whoami /groups`

```
  agency\id-fpki-common-authentication   Group  S-1-5-21-179144328 
  1-1764752353-2202401552-1113   
  Mandatory group, Enabled by default, Enabled group
```

## Use Case Scenarios

### Authentication Pass-Through to a Federation Service

A federal employee authenticates to the agency's intranet using a PIV credential and attempts to access an application hosted by a different federal agency.
 
- The application is restricted to allow access only for users who have authenticated with a valid PIV Authentication certificate.
- All other users are denied access to the application.
 
This federal employee successfully accesses the other federal agency's application with minimal inputs. The employee is successful because:

- The employee's home agency has a Federation Service installed, and
- The employee's home agency has integrated with the other agency's Federation Service

During and after the employee's logon to the network, the following steps were executed without the employee's intervention:
 
1.	The PIV authentication certificate is parsed
2.  The certificate policy OID asserted allows Microsoft AD on the home agency's network to assign the user to a group specifically for PIV authenticated users
2.	The user's session is granted a Kerberos ticket that includes the additional group membership
2.  The user browses to the other federal agency's application
2.  The user's browser is redirected to his/her home agency's Federation Service
2.  The Federation Service at the home agency finds the Kerberos ticket for the user's session
2.  A Security Assertion Markup Language (SAML) assertion is created by the Federation Service (This is a token translation.)
2.  The SAML assertion includes the AD group membership information that identifies that this user authenticated with a PIV credential
2.  The user's browser is redirected back to the other federal agency's application
2.  The user is successfully authenticated with the valid SAML assertion
2.  The other federal agency's application is configured to allow access to only those users who have authenticated using a PIV credential

In this use case and steps, the user did **not** have to authenticate directly with a PIV credential to the other agency's application.  A federation model was used.

{% include alert-info.html content="One example for viewing this implementation pattern is Max.gov.  If you click the upper left-hand Login button, you'll see the Max.gov Login page. The bottom section allows you to select an agency.  Each of these icons redirects the user back to that agency's Federation Service." %}

### Authentication Pass-Through for Integrated Windows Authentication

A federal employee authenticates to his/her agency's intranet using a PIV credential and attempts to access a local SharePoint site.

- The SharePoint site is restricted to allow access only for those users who have authenticated with a PIV Authentication certificate.
- All other users are denied access to the SharePoint site.
 
The federal employee successfully accesses the local SharePoint site.

During and after the employee's logon to the network and attempt to access the SharePoint site, the following steps were executed without the employee's intervention:
 
1.	The PIV authentication certificate is parsed
2.  The certificate policy OID asserted allows Microsoft AD on the home agency's network to assign the user to a group specifically for PIV authenticated users
2.	The user's session is granted a Kerberos ticket that includes the additional group membership
2.  The SharePoint site is configured to only allow access to only those users who have authenticated using a PIV credential
 
## Other Considerations and References

Use the Windows Registry Editor to set the _AMA Priority_ above _Most Recently Issued Superior Certificate Heuristic_:  

- `[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\kdc]`
- `"ChainWithIssuancePolicyOIDs"=dword:00000001`

Refer to the [AMA Step-by-Step Guide](https://technet.microsoft.com/en-us/library/dd378897(v=WS.10).aspx){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} to understand the implementation of AMA.

## Troubleshooting PIV Logon

Within the federal enterprise, Windows smart card logon with a PIV card (PIV logon) is one method to satisfy Federal Information Security Management Act (FISMA) and National Institute of Standards and Technology (NIST) Risk Management Framework security controls for authentication. A PIV card enables Authenticator Assurance Level 3, two-factor authentication to a Windows desktop. Under normal conditions, this system is simple and easy for an end user to use. However, if this logon mechanism breaks, it can be difficult to troubleshoot logon and authentication errors. This page includes common symptoms and suggested steps to diagnose and solve these issues.

## Logon Process Overview

The figure below, from the “Smart card sign-in flow in Windows” section of the [Microsoft Certificate Requirements and Enumeration article](https://docs.microsoft.com/en-us/windows/security/identity-protection/smart-cards/smart-card-certificate-requirements-and-enumeration#smart-card-sign-in-flow-in-windows){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, provides a detailed overview of how smart card logon works in supported versions of Windows.

<img src="{{site.baseurl}}/assets/piv/ficam-logon-process-overview.png" alt="A detailed workflow diagram of how smart card logon works in supported versions of Windows.">

For our use, this complex process is simplified into the following workflows:

<div class="usa-accordion usa-accordion--bordered">
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
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="m-a2">Card Selection and PIN Entry<br>Symption or Error: "Smart card icon is not displayed; user is not prompted for PIN."</button>
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
    <p>To confirm that the card is functional, you can use the <a class="usa-link usa-link--external" href="https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/certutil" target="_blank" rel="noopener noreferrer">Certutil Tool</a>, listed on the <a href="{{site.baseurl}}/implement/#fpki-troubleshooting-tools" target="_blank" rel="noopener noreferrer">Useful Tools page</a>, on a known working Windows workstation.</p>
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
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="m-a3">Credential Authentication and Secure Connection to Logon Server<br>Symption or Error: "Signing in with a smart card isn’t supported for your account. For more information, contact your administrator."</button>
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
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="m-a4">Name Mapping and PIV Validation<br>Symption or Error:<br>1. "An untrusted certification authority was detected while processing the smart card certificate used for authentication."<br>2. "The smart card used for authentication has been revoked."<br>3. "The system could not log you on. Your credentials could not be verified."</button>
  </h4>
  <div id="m-a4" class="usa-accordion__content usa-prose">
    <p>After the domain controller’s authentication certificate is used to make a secure link from the workstation to the domain controller, the certificate data for the user’s smart card is sent to the domain controller for validation. The domain controller does the following to validate the credential:</p>
    <ol type="1">
      <li>The domain controller looks up the user’s account in Active Directory (AD) using information found in the user’s PIV authentication certificate. This process is known as name mapping. More information about user name mapping can be found in the <a href="#step-4---account-linking " target="_blank" rel="noopener noreferrer">Account Linking Playbook</a></li>
      <li>The certificate is sent to the Microsoft Crypto-API (CAPI) service running on the domain controller for path discovery and validation. CAPI performs basic certificate checks through <a href="{{site.baseurl}}/university/pki/#certification-path-validation" target="_blank" rel="noopener noreferrer">Path Discovery and Validation (PDVal)</a>.</li>
      <li>The domain controller checks its local copy of the Enterprise NTAUTH store for the presence of the issuing certification authority (CA) for the PIV authentication certificate. Steps for adding a certificate to this store can be found in the <a href="#step-3---trust-stores " target="_blank" rel="noopener noreferrer">Trust Stores Playbook</a></li>
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
      <li>In some environments, under some circumstances, distribution of the root by GPO can sometimes cause PIV certificates to appear to be untrusted intermittently.
      <a class="usa-link usa-link--external" target="_blank" rel="noopener noreferrer" href="https://docs.microsoft.com/en-us/troubleshoot/windows-server/identity/valid-root-ca-certificates-untrusted">Microsoft has published</a>
      a description of the issue and identified a workaround.</li>
    </p>
  </div>
</div>
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
<p>You can also use the <a class="usa-link usa-link--external" href="http://pkif.sourceforge.net/pitt.html" target="_blank" rel="noopener noreferrer">PKI Interoperability Test Tool (PITT)</a>, listed on the <a href="{{site.baseurl}}/implement/#fpki-troubleshooting-tools" target="_blank" rel="noopener noreferrer">Useful Tools page</a>, to validate the certificate path on the logon server. The <a class="usa-link usa-link--external" href="http://pkif.sourceforge.net/pitt_usage.pdf" target="_blank" rel="noopener noreferrer">PITT Usage Guide</a> contains procedures for using the tool.</p>    
    <h3>Resolution</h3>
    <ol type="1">
      <li>On the domain controller, work through any path validation issues identified in the above steps and examples. Keep in mind that that path building comes before validation and that a path is built from the bottom up. In this instance, the PIV authentication certificate chains to a trust anchor, such as Federal Common Policy G2. <strong>Ensure that the correct trust anchor for your organization’s PIV credentials is installed on every domain controller.</strong> If you also trust certificates from other agencies and organizations, the appropriate roots and cross-certificates may need to be installed to complete the path. </li>
      <li>Find expired and revoked certificates that may be installed in your domain controller certificate store and delete them as appropriate. In a Windows environment, unexpected errors often result if you have duplicates of a certificate installed in a given store or have accidently installed an intermediate CA in the trusted root store or vice versa. </li>
      <li>Lastly, you will need to allow outbound access over port TCP 80 from each domain controller to each of the CRL, OCSP, and AIA distribution points listed in the certificates in the path. For more information, see <a href="{{site.baseurl}}/university/pki/#path-discovery-and-validation " target="_blank" rel="noopener noreferrer">Path Discovery and Validation (PDVal)</a>.</li>
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
    <p>Follow the steps in the <a href="{{site.baseurl}}/implement/scl-windows/#step-3---trust-stores " target="_blank" rel="noopener noreferrer">Trust Stores Playbook</a> to add the appropriate issuing CA for the PIV card to the Enterprise NTAuth trust store.</p>
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
    <p>Follow the suggestions in the <a href="{{site.baseurl}}/implement/scl-windows/#step-4---account-linking" target="_blank" rel="noopener noreferrer">Account Linking Playbook</a> to ensure that the card identifier can be linked to the AD account. This may require User Principal Name (UPN) mapping, adding alternate security identifiers added to the AD record, or domain hinting.</p> 
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
