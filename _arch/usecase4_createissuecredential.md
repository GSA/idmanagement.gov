---
layout: page
title: 4. Create and Issue a Credential
collection: arch
permalink: arch/usecredential/
sidenav: archusecases
sticky_sidenav: true
---

![Three hexagons with the letters I, C, and A. The C is highlighted in green for Credential Management, with a green banner for the Issuance service. ](../../assets/arch/usecases/Credential-Issuance.png){:align="right" style="padding-left:15px"}

After you identity proof an individual, you’ll issue some proof of that individual’s claimed identity. A credential (like a physical card) is a type of authenticator that serves as a tool for an employee or contractor to gain access to agency services.

---

<p style="font-size: 3rem; font-weight: 700;">Use Case</p>

In this use case, an administrator needs to issue a credential to an employee or contractor.

**Note:** The preferred credential for employees and contractors is a PIV card. For cases where you cannot issue a PIV card, you must use a combination of factors to reach at least an AAL2 credential.

![Icon Key for the diagrams that follow.](../../assets/arch/usecases/4-IconKey.png)

<style>

td {
  font-family: "Cambria", "Georgia", "Times New Roman", "Times", serif;
  vertical-align:top;
}

</style>

<table>
  <tr>
    <td style="width:250px;border:0px;"><strong>1. Initiate the request</strong> <br> <img src="../../assets/arch/usecases/4-1.png" width="250" alt="A diagram showing an employee or contractor and a sponsor or supervisor initiating a credential request with an administrator."></td>
    <td style="border:0px;">An individual presents a valid government issued ID.</td>
  </tr>
  <tr>
    <td style="width:250px;border:0px;"><strong>2. Review the request</strong> <br> <img src="../../assets/arch/usecases/4-2.png" width="250" alt="A diagram showing an administrator verifying the presented credential with the organization that issued it."></td>
    <td style="border:0px;">The government ID is verified with the organization that issued it.</td>
  </tr>
    <tr>
    <td style="width:250px;border:0px;"><strong>3. Generate and assign the authenticator(s)</strong> <br> <img src="../../assets/arch/usecases/4-3.png" width="250" alt="A diagram showing an administrator generating and assigning an authenticator to the employee or contractor."></td>
    <td style="border:0px;">The individual presents a second form of government ID or an account number.</td>
  </tr>
</table>

## Example

I want to issue an enterprise credential, unique to an employee or contractor, so that they are able to access federal buildings and protected resources to which they require access.

## Next Steps

[Assign access entitlements](../manageaccess) and [maintain the credential](../managecredential).
