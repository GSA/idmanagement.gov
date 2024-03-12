---
layout: page
collection: implement
title: Certificate-Based Authentication on Azure Guide 
type: Markdown
permalink: /implement/cba-azure/
description: This guide directs agencies through planning, configuring, testing, and implementing a Certificate-Based Authentication deployment with Entra ID hybrid joined devices.
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
      <caption>Certificate-Based Authentication on Azure version table</caption>
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

This guide is a collaboration among the U.S. General Services Administration Office of Government-wide Policy Identity Assurance and Trusted Access Division, the Office of Personnel Management, and the Department of Education.

This guide is designed to help Identity, Credential, and Access Management (ICAM) program managers and Azure Entra ID administrators through planning, configuring, testing, and implementing a Certificate-Based Authentication deployment with Entra ID hybrid joined devices. This configuration is often selected by agencies moving workloads to the cloud due to its compatibility with current technologies. While a similar setup exists for Entra ID joined devices, this guide focuses on hybrid joined devices. CBA utilizes two-factor authentication, combining something you have, a smart card, with something you know, a PIN. To enhance security under the Zero Trust model, agencies should require a device-level signal, necessitating either a hybrid joined device or a compliant device. The hybrid joined device will guarantee the device is a device typically managed by an on-premises active directory and group policy. Microsoft Intune could also help manage these devices, and the device signal would be considered a compliant device, which means policies are checked against a set standard.

**Note** -- If a compliant device check is not enabled, a user with a trusted certificate could access systems and resources from a personal device.

## Why Certificate-Based Authentication

Certificate-Based Authentication enables agencies to authenticate with X.509 certificates directly through Microsoft's Entra ID, providing phishing-resistant authentication against their Public Key Infrastructure (PKI). Previously, federated certificate-based authentication was required, necessitating deployment of Active Directory Federation Services (ADFS) to authenticate with X.509 certificates. Direct authentication with Entra ID ensures a phishing-resistant login, verifiable using Conditional Access policies. Unlike ADFS, where login signals could potentially be spoofed or the infrastructure hacked, this method offers tighter security.

Key benefits include:

- CBA is compliant with M-19-17, which requires moving the digital identity provider to a centralized cloud-based identity management solution.
- Direct authentication with Entra ID eliminates reliance on ADFS, removing a lateral movement path from Active Directory.
- Entra ID can verify the type of Multifactor Authentication (MFA) used, whereas ADFS often depends on Kerberos, which can't ensure MFA usage or the specific type.
- CBA is recognized in Azure as an MFA assurance level and can be incorporated into Conditional Access Policies for authorization.
- CBA integrates with Hybrid and Entra ID joined devices, offering a seamless Single Sign-On (SSO) experience directly from the Personal Identification Verification (PIV) authentication during desktop and laptop Windows device logins.
- Improved and centralized logon auditing includes the CBA credential along with other signal types, such as Entra ID Sign-in logs.
- The ability to send and validate phishing-resistant MFA credentials to Entra ID partners in B2B scenarios.
- MFA fatigue can be reduced by integrating MFA into the initial login process.

## Prerequisites

1. An Active Directory on-premises infrastructure synced to Entra ID.
2. A PKI environment.
3. User certificates issued from the PKI.
4. An internet accessible Certificate Revocation List (CRL).
5. Hybrid joined devices optional, but highly recommended.

**Note** -- When you switch your authentication method to CBA, you are changing from a federated IdP to using an Entra ID managed environment. To make this transition smoother and to test out CBA features, it's easier to use "Staged Rollout" rather cut over your entire domain at one time.

## CBA Configuration

There are four major steps involved with configuring CBA.

1. Configure your certificates.
2. Configure your authentication bindings.
3. Configure your user account bindings.
4. Enable CBA as an authentication method.

### Step 1. Configure the certification authorities

1. Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} as a Global Administrator.
2. Browse to **Protection** > **Show more** > **Security Center** (or **Identity Secure Score**) > **Certificate Authorities**.
3. To upload a CA, select **Upload**.
   - Select the CA file.
   - Select **Yes** if the CA is a root certificate, otherwise select **No**.
   - For **Certificate Revocation List URL**, set the internet-facing URL for the CA-based CRL that contains all revoked certificates. If the URL isn't set, authentication with revoked certificates won't fail.
   - For **Delta Certificate Revocation List URL**, set the internet-facing URL for the CRL that contains all revoked certificates since the last base CRL was published.
   - Select **Add**.
4. Continue adding certificates until all root and intermediate certificates are uploaded.

![Certificate Authorities]({{site.baseurl}}/assets/playbooks/cba/CBAP1.png)

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

The authentication binding policy helps determine the strength of authentication to either a single factor or multifactor. An Authentication Policy Administrator can change the default value from single factor to multifactor and configure custom policy rules by mapping to issuer Subject or policy OID fields in the certificate.

Authentication binding rules map certificate attributes, such as Issuer, Policy OID, or Issuer and Policy OID, to a value and select default protection level for that rule. You can create multiple rules.

To enable CBA and configure user bindings in the Microsoft Entra admin center, complete the following steps:

1. From the screen above, select **Configure** to set up authentication binding and username binding.

![Configure Binding]({{site.baseurl}}/assets/playbooks/cba/CBAP4.png)

2. The protection level attribute has a default value of **Single-factor authentication**. Select **Multifactor authentication** to change the default value to MFA. This change will ensure all users authenticating to the tenant have their logon sessions stamped as X.509, Multifactor logins for the duration of their session.
3. Select the **Low** affinity binding here.

**Note** -- You can also set up custom authentication binding rules. Follow the relevant Microsoft documentation to configure custom rules.

![Authentication Binding Policy]({{site.baseurl}}/assets/playbooks/cba/CBAP5.png)

### Step 4. Configure username binding policy

1. Create the username binding by selecting one of the X.509 certificate fields to bind with one of the user attributes. The username binding order represents the priority level of the binding. The first one has the highest priority and so on.

![Username Binding]({{site.baseurl}}/assets/playbooks/cba/CBAP6.png)

2. For now, select **PrincipalName** as the preferred binding.

![PrincipalName Binding]({{site.baseurl}}/assets/playbooks/cba/CBAP7.png)

3. In this next step, you are telling CBA which field on your X.509 cert matches a specific field for your user's account. So, select either the **userPrincipalName** or the **OnPremisesUserPrincipalName** field to map to and select **Save**.

> **Note** -- The **OnPremisesUserPrincipalName** field can often resolve mapping issues the **userPrincipalName** field can't, so review your Certificate mappings carefully to determine the best approach.

![User Account Mapping]({{site.baseurl}}/assets/playbooks/cba/CBAP8.png)

**Note** -- How your user's accounts are configured to determine your mapping strategy, your **CertficateUserIds**, will be found under the **Authorization Info** field.

![User Account Configuration]({{site.baseurl}}/assets/playbooks/cba/CBAP9.png)

When you've completed this section, your final settings should look like this.

![Final Settings]({{site.baseurl}}/assets/playbooks/cba/CBAP10.png)

### Step 5. Login with your certificate to test CBA

1. Now login with an account you've added to your target group in Step 2 above. In this case, the user should be in the AZ.CBA-Users group to be targeted for CBA. You can use portal.azure.com as your test login location and you should see the following prompt -- you may see a different prompt if you have other authentication methods enabled.

![Login Prompt]({{site.baseurl}}/assets/playbooks/cba/CBAP11.png)

2. If you get a prompt to enter your password, select **Use a certificate or smart card** and select **Sign in**.

![Use Certificate or Smart Card]({{site.baseurl}}/assets/playbooks/cba/CBAP12.png)

3. Select the correct cert in the certificate picker UI and select **OK**.

![Certificate Picker]({{site.baseurl}}/assets/playbooks/cba/CBAP13.png)

4. You should now be signed into the Azure portal.

## Final Steps

You should now make sure your Windows devices are configured as **Entra ID Hybrid Joined** and build a Conditional Access Policy to require MFA and an Entra ID Hybrid Joined device. This final step will ensure your users are logging in with agency-owned devices and with CBA. As an advanced step, you'll define an **authentication strength** policy to pair with your Conditional Access Policy and specifically require a phishing-resistant MFA authentication strength to sign in.

For more information, please visit [general instructions](https://learn.microsoft.com/en-us/entra/identity/authentication/concept-certificate-based-authentication){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} provided by Microsoft.

## Troubleshooting Steps

See the [Microsoft Entra authentication and authorization error codes](https://learn.microsoft.com/en-us/entra/identity-platform/reference-error-codes){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} for common error codes and solutions. Below is a list of common errors reported by various agencies.

<ol>
  <li><strong>AADSTS1001009</strong>: No value in the certificate, as request by tenant policy, is able to validate the user claim.</li>
    <ol>
      <li>From Microsoft - AADSTS81009	DesktopSsoAuthorizationHeaderValueWithBadFormat - Unable to validate user's Kerberos ticket.</li>
      <li>Solution — This is specific to hybrid joined identities and related to username binding. Verify the user binding settings or try a different setting in Entra ID. If you're using issuer and subject, try SKI instead.</li>
    </ol>
  </li>
</ol>
