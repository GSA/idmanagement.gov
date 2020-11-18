---
layout: page
title: 6. Manage the Credential Lifecycle
collection: arch
permalink: arch/managecredential/
sidenav: arch

subnav:
    - text: 1. Create and Maintain an Identity
      href: ../createidentity/
    - text: 2. Proof an Identity
      href: ../proofidentity/
    - text: 3. Manage the Entitlements Lifecycle
      href: ../manageaccess/
    - text: 4. Create and Issue a Credential
      href: ../credential/
    - text: 5. Issue a Derived Credential
      href: ../derivecredential/
    - text: 6. Manage the Credential Lifecycle
      href: ../managecredential/
    - text: 7. Grant Access
      href: ../grantaccess/
    - text: 8. Accept Federation Assertions
      href: ../federate/
---

![Three hexagons with the letters I, C, and A. The C is highlighted in green for Credential Management, with a green banner for the Maintenance and Revocation services. ](../../assets/arch/usecases/Credential-MaintenanceRevocation.png){:align="right" style="padding-left:15px"}

Active credentials require regular maintenance. This use case describes the most common credential maintenance activities:

- **[Reset a credential](#reset-a-credential)** - An employee or contractor forgets the password or PIN associated with a credential, and requests a reset.
- **[Renew a credential](#renew-a-credential)** - An employee or contractor’s credential is expiring or their personal information changes, so they request a replacement credential. You must renew a credential prior to the expiration date, otherwise the employee or contractor must go through the issuance process again.
- **[Revoke a credential](#revoke-a-credential)** - An employee or contractor is no longer eligible for their credential (like separating from the issuing agency). The sponsor, supervisor, or administrator requests a revocation of all associated credentials and enterprise accounts.

You should periodically review your employee or contractors’ eligibility for credentials to identify potential orphaned data.

---

<p style="font-size: 3rem; font-weight: 700;">Use Cases</p>

![Icon Key for the diagrams that follow.](../../assets/arch/usecases/6-IconKey.png)

### Reset a Credential

In this use case, an employee or contractor interacts with the agency services to register or request a derived credential.

<style>

td {
  font-family: "Cambria", "Georgia", "Times New Roman", "Times", serif;
  vertical-align:top;
}

</style>

<table>
  <tr>
    <td style="width:250px;border:0px;"><strong>1. Initiate the request</strong> <br> <img src="../../assets/arch/usecases/6-Reset-1.png" width="250" alt="A diagram showing an employee or contractor initiating a password or pin reset request to an enterprise identity management system."></td>
    <td style="border:0px;">An employee or contractor forgets their password or PIN, and requests a reset.<br><br>If the request is valid, the identity management system approves the request.</td>
  </tr>
  <tr>
    <td style="width:250px;border:0px;"><strong>2. Issue a reset</strong> <br> <img src="../../assets/arch/usecases/6-Reset-2.png" width="250" alt="A diagram showing an enterprise identity management system issueing a password or pin reset to an employee or contracter."></td>
    <td style="border:0px;">The system issues a password/PIN reset, which may be a temporary password or a link to a web-based reset form.</td>
  </tr>
    <tr>
    <td style="width:250px;border:0px;"><strong>3. Reset the credential</strong> <br> <img src="../../assets/arch/usecases/6-Reset-3.png" width="250" alt="A diagram showing an employee or contractor resetting a password or PIN."></td>
    <td style="border:0px;">The employee or contractor resets their password or PIN.</td>
  </tr>
</table>


### Renew a Credential

In this use case, an administrator needs to issue a new credential to replace one that will expire soon or has outdated identity information.

<table>
  <tr>
    <td style="width:250px;border:0px;"><strong>1. Initiate the request</strong> <br> <img src="../../assets/arch/usecases/6-Renew-1.png" width="250" alt="A diagram showing an employee or contractor initiating a credential renewal request to an enterprise identity management system."></td>
    <td style="border:0px;">An individual requests a renewal for an employee or contractor’s credential.<br><br>This individual may be the employee or contractor, their supervisor, or an administrator with approval authority.<br><br>This could also be an automated process triggered by schedules or specific events.</td>
  </tr>
  <tr>
    <td style="width:250px;border:0px;"><strong>2. Review the request</strong> <br> <img src="../../assets/arch/usecases/6-Renew-2.png" width="250" alt="A diagram showing an enterprise identity management system reviewing a credential renewal request for an employee or contracter."></td>
    <td style="border:0px;">The identity management system reviews the request and verifies that the employee or contractor qualifies for a renewed credential. If so, approve the request.</td>
  </tr>
    <tr>
    <td style="width:250px;border:0px;"><strong>3. Replace the credential</strong> <br> <img src="../../assets/arch/usecases/6-Renew-3.png" width="250" alt="A diagram showing an enterprise identity management system issueing a new credential to an employee or contracter."></td>
    <td style="border:0px;">The system issues a new credential to the employee or contractor.</td>
  </tr>
</table>


### Revoke a Credential

In this use case, you are an administrator who needs to revoke an active credential.


<table>
  <tr>
    <td style="width:250px;border:0px;"><strong>1. Initiate the request</strong> <br> <img src="../../assets/arch/usecases/6-Revoke-1.png" width="250" alt="A diagram showing an employee or contractor or a sponsor or supervisor initiating a credential revocation request to an enterprise identity management system."></td>
    <td style="border:0px;">An individual sends a separation notification or a notice of a lost or compromised credential, requesting revocation.<br><br>This individual may be the employee or contractor, their supervisor, HR, or a security team member.</td>
  </tr>
  <tr>
    <td style="width:250px;border:0px;"><strong>2. Disable the credential</strong> <br> <img src="../../assets/arch/usecases/6-Revoke-2.png" width="250" alt="A diagram showing an administrator of an enterprise identity management system invalidates the credential."></td>
    <td style="border:0px;">The administrator invalidates the credential.<br/>Depending on your agency, an individual or a system may perform this task. </td>
  </tr>
    <tr>
    <td style="width:250px;border:0px;"><strong>3. Return the credential</strong> <br> <img src="../../assets/arch/usecases/6-Revoke-3.png" width="250" alt="A diagram showing an administrator returning the invalidated hardware or physical credential to the supervisor or sponsor."></td>
    <td style="border:0px;">If the revoked credential is physical or hardware-based, the administrator returns the credential to the appropriate individual.<br><br>This individual may be a supervisor, HR, or security team member.</td>
  </tr>
</table>



## Examples

- An employee or contractor may have attempted to use a credential and input the PIN information incorrectly several times up to an agency defined limit, and has locked their account or credential.  The employee or contractor requests a PIN reset.  The employee or contractor is directed to an unlock service; has to verify information again to prove they are the same person issued the original credential; and follows prompts to unlock their credential, generating a new PIN information in the process.
- *Reset* - I want to verify the identity of an employee or contractor that has already been issued a credential, and reset their PIN or password so that they can continue to access enterprise resources.
- *Renew* - I want to verify the identity and eligibility of an employee or contractor, with a previously issued credential that is near expiration, so that they may be issued a new enterprise credential to keep their ability to access enterprise resources.
- *Revoke* - I want to remove access to enterprise resources for an employee or contractor, so that they can no longer use the protected resource. 

## Next Steps

[Manage the entitlements lifecycle](../manageaccess) of the person and credential.
