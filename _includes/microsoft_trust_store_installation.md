To limit the impact to your agency, you will need to redistribute the Federal Common Policy CA (FCPCA) (i.e., COMMON) root certificate as a _trusted root certificate_ to all government-furnished Windows workstations and devices.

To redistribute COMMON, use these procedures:
1. [Download a Copy of COMMON](#download-a-copy-of-common)
1. [Verify Your Copy of COMMON](#verify-your-copy-of-common)
1. [Redistribute COMMON](#redistribute-common)

### Download a Copy of COMMON

To download a copy of COMMON, use one of these recommended options:
1. Download from http://http.fpki.gov/fcpca/fcpca.crt. 
1. Email fpki@gsa.gov to request an out-of-band copy for download.

{% include alert-warning.html content="You should never install a root certificate without verifying it. Use the procedures below to verify the authenticity of your copy of COMMON." %} 

### Verify Your Copy of COMMON

To verify your copy of COMMON, use one of these options: 

1. [Use Microsoft command line via Certutil](#use-microsoft-command-line-via-certutil)
1. [Use Microsoft command line via OpenSSL](#use-microsoft-command-line-via-openssl)
1. [Use Microsoft PowerShell](#use-microsoft-powershell)

{% include alert-warning.html content="Your certificate details and hash must match the expected values shown below." %}  

| **Federal Common Policy CA (FCPCA/COMMON)**  | **Certificate Details**                             |
| :--------  | :-------------------------------     |
| Federal Common Policy CA<br>(sometimes shown as *U.S. Government Common Policy*) | http://http.fpki.gov/fcpca/fcpca.crt |
| Distinguished Name | cn=Federal Common Policy CA, ou=FPKI, o=U.S. Government, c=US |
| Serial Number | 0130 |
| SHA-1 Thumbprint | 90 5f 94 2f d9 f2 8f 67 9b 37 81 80 fd 4f 84 63 47 f6 45 c1 |
| SHA-256 Thumbprint | 89 4e bc 0b 23 da 2a 50 c0 18 6b 7f 8f 25 ef 1f 6b 29 35 af 32 a9 45 84 ef 80 aa f8 77 a3 a0 6e |

> **Note:** For the following procedures, replace *[PATH\\]* with the path to your copy of COMMON.

#### Use Microsoft command line via Certutil
1. Click **Start**, type **cmd**, and press **Enter**.
1. Run command:

    ```
	   certutil -hashfile [PATH\]fcpca.crt SHA256
    ```

#### Use Microsoft command line via OpenSSL
1. Click **Start**, type **cmd**, and press **Enter**.
1. Run command:

    ```
        openssl sha256 [PATH\]fcpca.crt
    ```

#### Use Microsoft PowerShell
1. Click **Start**, type **cmd**, and press **Enter**.
1. Run command:

    ```
        Get-FileHash [PATH\]fcpca.crt | Format-List
    ```

*Sample steps run on Microsoft Server 2012:*
![Sample Steps]({{site.baseurl}}/img/verify.gif){:style="width:85%;"}


### Redistribute COMMON 

To redistribute COMMON, use one of these options:

1. [Use Microsoft Certutil](#use-microsoft-certutil)
1. [Use Microsoft Group Policy Object (GPO)](#use-microsoft-group-policy-object-gpo)
1. [Use third-party configuration management tools](#use-third-party-configuration-management-tools)
1. [Use Microsoft Certificate Manager for unmanaged devices](#manually-use-microsoft-certificate-manager-for-unmanaged-devices)


#### Use Microsoft Certutil 

{% include alert-warning.html content="You must have Enterprise Administrator privileges for the Domain to use these procedures. The commands must be run from an agency Domain Controller." %}

1. Click **Start**, type **cmd**, and press **Enter**.
1. Run command:

    ```
        certutil -dspublish -f [PATH\]fcpca.crt RootCA
    ```

1. To verify that COMMON was distributed, run commands:

    ```
        gpupdate /force
        certutil -viewstore -enterprise
    ```

1. Confirm that COMMON is contained in the output details.
1. Verify the certificate details against the [*expected values*](#verify-your-copy-of-common) shown above (e.g., serial number, hash, etc.).


*Sample steps run on Microsoft Server 2012:*
![Sample Steps]({{site.baseurl}}/img/certutil.gif){:style="width:85%;"}


#### Use Microsoft Group Policy Object (GPO)

{% include alert-warning.html content="You must have Enterprise Administrator privileges for the Domain to use these procedures. The commands must be run from an agency Domain Controller." %}

1. Navigate to **Server Manager**.
1. Select **Tools**.
1. Select **Group Policy Management** from the drop-down list.
1. Right-click your desired domain(s), and select **Create a GPO in this domain, and Link it here…**.
1. Enter a GPO **Name** and click **OK**.
1. Right-click the newly created *Group Policy Object (GPO)* and click **Edit…**.
1. Navigate to **Policies** -> **Windows Settings** -> **Security Settings** -> **Public Key Policies**.  
1. Right-click **Trusted Root Certification Authorities**, and select **Import**. *The Certificate Import Wizard will open*. 
1. Browse to and select your copy of COMMON.
1. Verify that the target **Certificate Store** presents **Trusted Root Certification Authorities**, and select **Next**.
1. Select **Finish** to complete the import.  You'll see the message, *The import was successful*.
1. Close the **Group Policy Management** window.
1. Wait for clients to consume the new policy.
1. [OPTIONAL] You can force client consumption:  click **Start**, type **cmd**, press **Enter**, and run command:

    ```
          gpupdate /force
    ```

*Sample steps run on Microsoft Server 2012:*
![Sample Steps]({{site.baseurl}}/img/gpo.gif){:style="width:85%;"}

#### Use third-party configuration management tools

{% include alert-warning.html content="You must have Enterprise Administrator privileges for the Domain to use these procedures. The commands must be run from an agency Domain Controller." %}

You can use third-party configuration management tools, such as BigFix.

1. Using BigFix, schedule a task and push the certificate file. Run command (example): 
	
    ```
        certutil -f -addstore root “fcpca.crt”
    ```

#### Use Microsoft Certificate Manager for unmanaged devices

To redistribute COMMON to unmanaged devices:

1. Click **Start**, type **certmgr.msc**, and then press **Enter**.
1. Right-click **Trusted Root Certification Authorities** and select **All Tasks** -> **Import**. *The Certificate Import Wizard will open*. 
1. Browse to and select your copy of COMMON.
1. Verify that the desired **Certificate Store** presents **Trusted Root Certification Authorities**, and select *Next*.
1. Select *Finish* to complete the import. You'll see the message, *The import was successful*.

> **Note:** If several users share a device, you can run **certlm.msc** to simultaneously update the certificate stores for the accounts on the device (vs. updating each account separately). 
