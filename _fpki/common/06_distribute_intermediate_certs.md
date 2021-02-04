---
layout: page 
title: 6. Distribute the CA certificates issued by the Federal Common Policy CA G2 (optional)
collection: fpki
permalink: fpki/common/certificates/
sticky_sidenav: true
sidenav: fpkicommon

subnav:
  - text: Use Microsoft Group Policy Object (GPO)
    href: '#use-microsoft-group-policy-object-gpo'
  - text: Use macOS/iOS Configuration Profile
    href: '#use-macos/ios-configuration-profile'
---

To simplify certificate path building within your enterprise, you can *optionally* distribute the CA certificates [issued by the Federal Common Policy CA (FCPCA) G2](#certificates-issued-by-the-federal-common-policy-ca-g2). Sample procedures for the distribution of intermediate CA certificates are below:


### Use Microsoft Group Policy Object (GPO)

{% include alert-warning.html content="You must have enterprise administrator privileges for the domain to use these procedures. You must run the commands from an agency domain controller." %}

1. Navigate to **Server Manager**.
1. Select **Tools**.
1. Select **Group Policy Management** from the drop-down list.
1. Right-click your desired domain(s), and select **Create a GPO in this domain, and Link it here**.
1. Enter a GPO **Name** and click **OK**.
1. Right-click the newly created GPO and click **Edit**.
1. Navigate to **Policies** > **Windows Settings** > **Security Settings** > **Public Key Policies**.  
1. Right-click **Intermediate Certification Authorities**, and select **Import**.

	The Certificate Import Wizard appears
	
1. Browse to and select the certificates [issued by the FCPCA G2](#certificates-issued-by-the-federal-common-policy-ca-g2) that you want to distribute.
1. Verify that the target **Certificate Store** presents **Intermediate Certification Authorities**, and select **Next**.
1. Select **Finish** to complete the import. 

	A success message appears.
	
1. Close the **Group Policy Management** window.
1. Wait for clients to consume the new policy.
1. (*Optional*) To force client consumption, click **Start**, type **cmd**, press **Enter**, and run the following command:
    ```
          gpupdate /force
    ```
	
<br>
	
### Use macOS/iOS Configuration Profile

{% include alert-warning.html content="Only System or Mobile Device Management (MDM) Administrators should create, distribute, and install Apple configuration profiles." %} 

#### Create an Apple configuration profile

1. As an administrator, download and verify the certificates [issued by the FCPCA G2](#certificates-issued-by-the-federal-common-policy-ca-g2) that you want to distribute.   
2. Download and install *Configurator 2* from the Apple App Store.
3. Open *Configurator 2* and click **File** > **New Profile**.
4. On the **General** tab, enter a unique profile **Name** (for example, *FPKI Intermediate CA Certificate Distribution Profile*) and **Identifier** (for example, *FCPCAG2-Intermediate-0001*).
5. On the **Certificates** tab, click **Configure**.
6. Browse to and select the certificates you want to distribute.
7. (*Optional*) Add additional agency-specific configurations or customizations. 
8. Click **File** > **Save** to save your profile to your preferred location. 
9. Follow the steps to [distribute](../distribute-os/#distribute-an-apple-configuration-profile) the profile to macOS and iOS devices across your enterprise.

**Note:**&nbsp;&nbsp;The following video shows you how to create an Apple configuration profile. 

<br>
<video width="85%" controls>
  <source src="{{site.baseurl}}/fpki/create_profile.mp4" type="video/mp4">
</video>
<br>

<br>
<video width="85%" controls>
  <source src="../../assets/fpki/create_profile.mp4" type="video/mp4">
</video>
<br>

---------------------------------------------------


### Certificates issued by the Federal Common Policy CA G2

{% include alert-info.html content="Review the <a href=\"https://fpki.idmanagement.gov/notifications/#notifications\" target=\"_blank\">System Notifications</a> page or follow us on <a href=\"https://github.com/GSA/fpki-guides/issues/\" target=\"_blank\">GitHub</a> to learn when new certificates are issued.  If you're looking for certificates <i>issued to</i> the FCPCA G2, email us at fpki-help@gsa.gov." %} 

| **Issued to: Federal Bridge CA G4**  | **Certificate Details**                             |
| :--------  | :-------------------------------     |
| Distinguished Name | CN=Federal Bridge CA G4, OU=FPKI, O=U.S. Government, C=US |
| Validity | October 15, 2020 to December 6, 2029
| Serial Number | 234200beaa6dada658f53b403f418295290cae82  |
| SHA-1 Thumbprint | 97db351e069964297a82040eb760c9cc1d74ba33 |
| SHA-256 Thumbprint | 74383CA1BB648F96EFE9E6ECADB5A8A359E7DF9BA262EF7C02BD004EAB3895F4  |
| Download Location | Click [here](../../certs/federal_bridge_ca_g4.cer)|


### Certificates pending issuance by the FCPCA G2

The following certificates are expected to be issued by the FCPCA G2 on November 18, 2020.

| CA Operator | CA Distinguished Name | 
| :-------- | :-------------------------------     |
| Department of State | CN=U.S. Department of State AD Root CA, CN=AIA, CN=Public Key Services, CN=Services, CN=Configuration, DC=state, DC=sbu |
| Department of the Treasury | OU=US Treasury Root CA, OU=Certification Authorities, OU=Department of the Treasury, O=U.S. Government, C=US  |
| DigiCert Federal Shared Service Provider | (1) CN=DigiCert Federal SSP Intermediate CA - G5, O=DigiCert, Inc., C=US <br> (2) CN=Symantec SSP Intermediate CA - G4, O=Symantec Corporation, C=US |
| Entrust Federal Shared Service Provider | OU=Entrust Managed Services Root CA, OU=Certification Authorities, O=Entrust, C=US  |
| Verizon Federal Shared Service Provider | CN=Verizon SSP CA A2, OU=SSP, O=Verizon, C=US   |
| WidePoint Federal Shared Service Provider | (1) CN=ORC SSP 4, O=ORC PKI, C=US <br> (2) CN=WidePoint SSP CA 5, OU=Certification Authorities, O=WidePoint, C=US |

<br>

Next, [migrate to the FCPCA G2](../common/migrate/).

