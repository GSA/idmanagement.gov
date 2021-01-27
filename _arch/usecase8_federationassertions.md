---
layout: page
title: 8. Accept Federation Assertions
collection: arch
permalink: arch/federate/
sidenav: archusecases
sticky_sidenav: true
---

![Three hexagons with the letters I in red, C in green, and A in blue, with a gray banner for the Attribute Exchange service in Federation.](../../assets/arch/usecases/Federation-AttributeExchange.png){:align="right" style="padding-left:15px"}

Federal employees and contractors often need to access protected services managed by other federal agencies. Federation is the means by which an agency can accept authentication assertions and associated identity attributes from systems within their agency and at other agencies. This allows federal employees and contractors from across agencies access protected resources and streamlines the user’s experience.
  
Agencies can pass assertions to share attributes about employees and contractors.

---

## Use Case

In this use case, an employee or contractor from Agency A attempts to access a federated service at Agency B. This use case assumes the employee or contractor already has an account or entitlements to access resources at Agency B, or that they will be provisioned.

For more information about granting access to protected resources, see [Grant Access](../grantaccess).

![Icon Key for the diagrams that follow.](../../assets/arch/usecases/8-IconKey.png)


<style>

td {
  font-family: "Cambria", "Georgia", "Times New Roman", "Times", serif;
  vertical-align:top;
}

</style>

<table>
  <tr>
    <td style="width:250px;border:0px;"><strong>1. Request access to federated service</strong> <br> <img src="../../assets/arch/usecases/8-1.png" width="250" alt="A diagram showing an employee or contractor from Agency A requesting access to a federated service at Agency B."></td>
    <td style="border:0px;">An Agency A employee or contractor requests access to a federated service at Agency B.<br><br>The employee or contractor selects the Agency A authentication service.</td>
  </tr>
  <tr>
    <td style="width:250px;border:0px;"><strong>2. Redirect to Agency A for authentication</strong> <br> <img src="../../assets/arch/usecases/8-2.png" width="250" alt="A diagram showing an employee or contractor access request is redirected from Agency B access control system to the Agency A authentication service."></td>
    <td style="border:0px;">The Agency B system redirects the employee or contractor to the Agency A authentication service.<br><br>Agency A authenticates the employee or contractor.</td>
  </tr>
  <tr>
    <td style="width:250px;border:0px;"><strong>3. Perform transparent transaction</strong> <br> <img src="../../assets/arch/usecases/8-3.png" width="250" alt="A diagram showing Agency A authentication service passing identity attributes to the Agency B access control system."></td>
    <td style="border:0px;">Agency A passes identity attributes and transaction data to Agency B via a signed assertion.</td>
  </tr>
  <tr>
    <td style="width:250px;border:0px;"><strong>4. Agency B grants access</strong> <br> <img src="../../assets/arch/usecases/8-4.png" width="250" alt="A diagram showing Agency B access control system granting access to an employee or contractor from Agency A."></td>
    <td style="border:0px;"> Agency B consumes the assertion data, correlating it with an established account or local identity and makes an access control decision.<br><br>The Agency B system redirects the employee or contractor to the federated service.</td>
  </tr>
</table>

## Examples

- I want to allow other federal agencies' employees and contractors (who meet specific requirements) to access some of my agency’s resources, which facilitates cross-government collaboration and information sharing.
- An employee or contractor from Agency A visits a shared service operated by Agency B to service all Federal government users. At the homepage, the employee/contractor selects their Agency A icon and is redirected to their Agency A SSO portal. They log in using their Agency A managed credentials and are redirected back to the Agency B shared service.
