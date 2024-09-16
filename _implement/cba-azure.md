---
layout: page
collection: implement
title: Certificate-Based Authentication on Microsoft Entra ID Guide 
type: Markdown
permalink: /implement/cba-azure/
description: This guide directs agencies through planning, configuring, testing, and implementing a Certificate-Based Authentication deployment with Microsoft Entra Hybrid joined devices.
sidenav: implement
sticky_sidenav: true

pubdate: March 2024  
version: 1.0

subnav:
  - text: Why Certificate Based Authentication
    href: '#why-certificate-based-authentication'
  - text: Prerequisites
    href: '#prerequisites'
  - text: CBA Configuration
    href: '#cba-configuration'
  - text: Step 1. Configure Certification Authorities
    href: '#step-1-configure-the-certification-authorities'  
  - text: Step 2. Enable CBA on Tenant
    href: '#step-2-enable-cba-on-the-tenant'
  - text: Step 3. Configure Authentication Binding
    href: '#step-3-configure-the-authentication-binding-policy'
  - text: Step 4. Configure Username Binding 
    href: '#step-4-configure-username-binding-policy'
  - text: Step 5. Test CBA Login
    href: '#step-5-login-with-your-certificate-to-test-cba'
  - text: Final Steps
    href: '#final-steps'
---


<img src="{{site.baseurl}}/assets/img/logo-gsa.png" width="64" height='64' align="left" alt="U.S. General Services Administration Logo"> 
<img src="{{site.baseurl}}/assets/img/logo-opm.png" width="64" height='64' align="left" alt="U.S. Office of Personnel Management Logo"> 
<img src="{{site.baseurl}}/assets/img/logo-ed.png" width="64" height='64' align="left" alt="U.S. Department of Education Logo">
<br><br><br>
  
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="v-c1">
      Date: {{page.pubdate}} - Version: {{page.version}}
    </button>
  </h4>
  <div id="v-c1" class="usa-accordion__content usa-prose">
    <table>
      <caption>Certificate-Based Authentication on Microsoft Entra ID version table</caption>
      <thead>
      <tr>
        <th scope='col'>Version Number</th>
        <th scope='col'>Date</th>
        <th scope='col'>Change Description</th>
      </tr>
      </thead>
      <tr>
        <th scope='row'>1.0</th>
        <td>03/12/2024</td>
        <td>Initial draft.</td>
      </tr>
    </table>
  </div>
</div>

The U.S. General Services Administration Office of Government-wide Policy Identity Assurance and Trusted Access Division, the Office of Personnel Management, and the Department of Education developed this guide to help Identity, Credential, and Access Management (ICAM) program managers and Microsoft Entra ID administrators implement Certificate-based Authentication with Microsoft Entra ID. This guide identifies steps for planning, configuring, testing, and implementing a Certificate-Based Authentication deployment with Microsoft Entra Hybrid joined devices to leverage a **device-level signal** to determine data authorization. OMB Memo 22-09, Federal Zero Trust Strategy, tasks agencies to work to incorporate at least one device-level signal alongside identity information about the authenticated user.
1. Device-level signal - Compliant device.
2. Identity information - User's certificate

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">What about other types of "joined" devices?</h4>
    <p class="usa-alert__text">
      The scope of this guide is on Microsoft Entra Hybrid joined devices, but agencies may achieve the same functionality with Microsoft Entra joined or using a different vendor's Mobile Device Management product. For agencies with Microsoft Entra native devices, the same steps apply and can be deployed today. For agencies using a different vendor's Mobile Device Management product, check with your vendor how and if their compliant device signal can be used in Microsoft Entra ID through an API or other method.
    </p>
  </div>
</div>

This Microsoft Entra hybrid-join configuration is often selected as agencies move workloads to the cloud due to its compatibility with on-premises requirements. CBA utilizes two-factor authentication, combining something you have, a smart card, with something you know, a PIN. To enhance security under the Zero Trust model, agencies should require a device-level signal, necessitating a compliant device signal achieved. A joined device guarantees an enterprise policy manages the device.

**Note** If a compliant device check is not enabled, a user with a trusted certificate could access systems and resources from an unmanaged device, such as a personal device.

## Terminology
1. [Microsoft Entra Hybrid Join](https://learn.microsoft.com/en-us/entra/identity/devices/concept-hybrid-join){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}  - Devices are joined to an on-premises Active Directory and registered with Microsoft Entra ID. The device is managed with an Active Directory Group Policy.
2. [Microsoft Entra Join](https://learn.microsoft.com/en-us/entra/identity/devices/concept-directory-join){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - Devices are managed by Azure policy.
3. Managed device - Any device under direct control or with a managed profile, such as Government-Furnished Equipment (GFE), contractor-furnished equipment, or personal devices with an organizational profile or container. GFE is the primary method most agencies use for data access.
4. Unmanaged device - Any device not under the organization’s control. Some agencies support Bring Your Own Device or contractor-furnished device access for a limited number of applications, such as email or collaboration tools. Deploying or enforcing certificate-based options, compliance profiles, or baseline images is difficult. This is a growing access method as more agencies support unmanaged device access to cloud applications.

## Why Certificate-Based Authentication

Certificate-Based Authentication (CBA) enables agencies to authenticate with X.509 certificates directly through Microsoft's Entra ID, providing phishing-resistant authentication using x.509 certificates issued from their trusted Public Key Infrastructure (PKI). Previously, federated certificate-based authentication was required, necessitating the Active Directory Federation Services (ADFS) deployment to authenticate with X.509 certificates. Direct authentication with Microsoft Entra ID ensures a phishing-resistant login that is verifiable using Conditional Access policies. Unlike ADFS, where login signals could be spoofed or the infrastructure hacked, for these reasons authenticating to Microsoft Entra ID directly with x.509 certificate method offers tighter security.

Key benefits include:

- CBA complies with M-19-17, which requires moving the digital identity provider to a centralized cloud-based identity management solution.
- Direct authentication with Microsoft Entra ID eliminates reliance on a federated IdP (such as ADFS), removing a lateral movement path from Active Directory.
- Microsoft Entra ID can verify the type of Multifactor Authentication (MFA) used, whereas ADFS often depends on Kerberos, which can't ensure MFA usage or the specific type.
- Microsoft Entra CBA can be configured in Microsoft Entra ID as MFA and and can be incorporated into Conditional Access Policies for authorization.
- Microsoft Entra CBA integrates with Hybrid and Microsoft Entra joined devices, offering a seamless Single Sign-On (SSO) experience using the Personal Identification Verification (PIV) authentication during desktop and laptop Windows device logins, reducing MFA fatigue
- Improved and centralized sign-in information with Microsoft Entra Sign-in logs, including CBA credential details. 
- The ability for your agency's Microsoft Entra ID to send authentication details to the partner's agency's Microsoft Entra ID allowing the partner to validate phishing-resistance, MFA, and additional properties of the authentication method using authentication strengths in B2B scenarios.

## Prerequisites

1. A PKI environment.
2. User certificates issued from the PKI.
3. An internet accessible Certificate Revocation List (CRL).
4. Hybrid/Entra ID joined devices optional, but highly recommended.
5. In Hybrid configuration, An Active Directory on-premises infrastructure synced to Microsoft Entra ID.

**Note** -- When you switch your authentication method to CBA, you are changing from a federated IdP to using an Microsoft Entra ID managed environment. To make this transition smoother and to test out CBA features, it's easier to use "Staged Rollout" rather then to cut over your entire domain at one time.

## CBA Configuration

There are four major steps involved with configuring CBA.

1. Configure your trusted CA certificates.
2. Configure your authentication bindings.
3. Configure your user account bindings (Protection and Affinity Levels).
4. Enable CBA as an authentication method.
5. Test CBA

### Step 1. Configure the certification authorities

1. Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} as a Global Administrator.
2. Browse to **Protection** > **Show more** > **Security Center** (or **Identity Secure Score**) > **Certificate Authorities**.
3. To upload a CA, select **Upload**.
   - Select the CA file.
   - Select **Yes** if the CA is a root certificate, otherwise select **No**.
   - For **Certificate Revocation List URL**, set the internet-facing URL for the CA-based CRL that contains all revoked certificates. By default in Microsoft Entra ID CBA does not require the CRL URL to be set. If the URL isn't set/configured empty, a CRL check is not performed for certificates issued from that CA. 
   - For **Delta Certificate Revocation List URL**, set the internet-facing URL for the CRL that contains all revoked certificates since the last base CRL was published.
   - Select **Add**.
4. Continue adding certificates until all root and intermediate certificates are uploaded.

![Certificate Authorities]({{site.baseurl}}/assets/playbooks/cba/CBAP1.png)

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">How do I know if I have the right certification authorities?</h4>
    <p class="usa-alert__text">
      The Federal PKI maintains a list of 
      <a class="usa-link" href="https://www.idmanagement.gov/fpki/notifications/#piv-issuer-information" target="_blank" rel="noopener noreferrer">the lastest PIV certifications authorities</a>
      . Contact <a href="mailto:icam@gsa.gov">icam@gsa.gov</a> If you need help finding the right CA or think one needs to be updated.
    </p>
  </div>
</div>

### Step 2. Enable CBA on the tenant

To enable the certificate-based authentication in the Microsoft Entra admin center, complete the following steps:

1. Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} as at least an [Authentication Policy Administrator](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#authentication-policy-administrator){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
2. Browse to **Protection** > **Authentication methods** > **Certificate-Based Authentication** and select Certificate-based authentication.

![Enable Certificate-Based Authentication]({{site.baseurl}}/assets/playbooks/cba/CBAP2.png)

3. Under **Enable and Target**, select **Enable**.
4. Select **All users** or select **Add groups** to select specific groups.
5. For now, set this to **Select groups** and add your target group below.

![Target Group]({{site.baseurl}}/assets/playbooks/cba/CBAP3.png)

**Note** -- Once a certificate-based authentication method is enabled on the tenant, all users in the tenant will see the option to sign in with a certificate. However, only users who are enabled for certificate-based authentication will be able to authenticate using the X.509 certificate.

### Step 3. Configure the authentication binding policy

The authentication binding policy helps determine the strength of authentication to either a single factor or multifactor. An Authentication Policy Administrator can change the default value from single factor to multifactor and configure custom policy rules by mapping to issuer Subject, policy OID or by combining Issuer Subject and Policy OID fields in the certificate.

Authentication binding rules map certificate attributes, such as Issuer, Policy OID, or Issuer and Policy OID, to a value and select default protection level for that rule. You can create multiple rules.

To enable CBA and configure user bindings in the Microsoft Entra admin center, complete the following steps:

1. From the screen above, select **Configure** to set up authentication binding and username binding.

![Configure Binding]({{site.baseurl}}/assets/playbooks/cba/CBAP4.png)

2. The protection level attribute has a default value of **Single-factor authentication**. Selecting **Multifactor authentication** changes the default value to MFA. This change will cause all users authenticating to the tenant with Microsoft Entra ID CBA to have their logon sessions stamped as X.509, Multifactor logins for the duration of their session. It is recommended to keep the default protection level as **single factor** and use custom authentication binding rules with Issuer Subject, Policy OID or combination of Issuer Subject & Policy OID to specifically control the issuance of MFA claim for Microsoft Entra ID CBA authentication. 
3. Select the **Low** affinity binding here.

**Note** -- You can also set up custom authentication binding rules. Follow the relevant Microsoft documentation to configure custom rules.

![Authentication Binding Policy]({{site.baseurl}}/assets/playbooks/cba/CBAP5.png)

### Step 4. Configure username binding policy

1. Create the username binding by selecting one of the X.509 certificate fields to bind with one of the user attributes. 

![Username Binding]({{site.baseurl}}/assets/playbooks/cba/CBAP6.png)

2. For now, select **PrincipalName** as the preferred binding.

![PrincipalName Binding]({{site.baseurl}}/assets/playbooks/cba/CBAP7.png)

3. In this next step, you tell CBA which field on your X.509 cert matches a specific field for your user's account. So, select either the **userPrincipalName** or the **OnPremisesUserPrincipalName** field to map to and select **Save**.

> **Note** -- Using the **certificateUserIDs** property with the PrincipalName mapping (X509:<PN>Bob@AGENCY.GOV) field can often resolve mapping issues the **userPrincipalName** field can't, so review your Certificate mappings carefully to determine the best approach. **OnPremisesUserPrincipalName** may also be an option. 

![User Account Mapping]({{site.baseurl}}/assets/playbooks/cba/CBAP8.png)

**Note** -- Your **CertficateUserIds**, which determines how your user accounts are configured to determine your mapping strategy, can be found under the **Authorization Info** field.

![User Account Configuration]({{site.baseurl}}/assets/playbooks/cba/CBAP9.png)

After completing this section, your final settings should look like this.

![Final Settings]({{site.baseurl}}/assets/playbooks/cba/CBAP10.png)

### Step 5. Login with your certificate to test CBA

1. Now login with an account you've added to your target group in Step 2 above. In this case, the user should be in the AZ.CBA-Users group to be targeted for CBA. You can use portal.azure.com as your test login location and you should see the following prompt -- you may see a different prompt if you have other authentication methods enabled.

**Note** -- If the user is on a Hybrid or Entra Joined Windows device and has signed into the Windows desktop/session with PIV, by default the user will obtain a [Primary Refresh Token (PRT)](https://learn.microsoft.com/en-us/entra/identity/devices/concept-primary-refresh-token){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} and have a single sign-on (SSO) expereince. The PRT also faciliates application of conditional access policies with MFA/Authentication Strength and device grant controls such as requiring that a user is only able to access a specific application(s) having authenticated with a PIV, from a Microsoft Entra Hybrid joined or compliant device. 

![Login Prompt]({{site.baseurl}}/assets/playbooks/cba/CBAP11.png)

2. If you get a prompt to enter your password, select **Use a certificate or smart card** and select **Sign in**.

![Use Certificate or Smart Card]({{site.baseurl}}/assets/playbooks/cba/CBAP12.png)

3. Select the correct cert in the certificate picker UI and select **OK**.

![Certificate Picker]({{site.baseurl}}/assets/playbooks/cba/CBAP13.png)

4. You should now be signed into the Azure portal.

## Final Steps

You should now make sure your Windows devices are configured as **Microsoft Entra Hybrid Joined** and build a Conditional Access Policy to require MFA and an Microsoft Entra Hybrid Joined device. This final step will ensure your users are logging in with agency-owned devices and with CBA. As an advanced step, you'll define an **authentication strength** policy to pair with your Conditional Access Policy and specifically require a phishing-resistant MFA authentication strength to sign in.

For more information, please visit [general instructions](https://learn.microsoft.com/en-us/entra/identity/authentication/concept-certificate-based-authentication){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} provided by Microsoft.

## Troubleshooting Steps

See the [Microsoft Entra authentication and authorization error codes](https://learn.microsoft.com/en-us/entra/identity-platform/reference-error-codes){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} for common error codes and solutions. Below is a list of common errors reported by various agencies.

<ol>
  <li><strong>AADSTS1001009</strong>: No value in the certificate, as request by tenant policy, is able to validate the user claim.</li>
    <ol>
      <li>From Microsoft - AADSTS81009	DesktopSsoAuthorizationHeaderValueWithBadFormat - Unable to validate user's Kerberos ticket.</li>
      <li>Solution — This is specific to hybrid joined identities and related to username binding. Verify the user binding settings or try a different setting in Microsoft Entra ID. If you're using issuer and subject, try SKI instead.</li>
    </ol>
</ol>
