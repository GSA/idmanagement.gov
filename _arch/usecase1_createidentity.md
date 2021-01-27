---
layout: page
title: 1. Create and Maintain an Identity
collection: arch
permalink: arch/createidentity/
sidenav: archusecases
sticky_sidenav: true
---

![Three hexagons with the letters I, C, and A. The I is highlighted in red for Identity Management, with a red banner for the Creation service.](../../assets/arch/usecases/Identity-Creation.png){:align="right" style="padding-left:15px"}

When you onboard an employee or contractor at your agency, you collect identity information from the individual, and store parts of that information as identity attributes. These attributes serve as a digital proxy for the individual’s identity, also known as an enterprise identity.

---

### Use Case

In this use case, an administrator needs to collect or manage identity data for an employee or contractor for the purpose of creating an enterprise identity record and maintaining it throughout its lifecycle.

![Icon Key for the diagrams that follow.](../../assets/arch/usecases/1-IconKey.png)

<style>

td {
  font-family: "Cambria", "Georgia", "Times New Roman", "Times", serif;
  vertical-align:top;
}

</style>

<table>
  <tr>
    <td style="width:250px;border:0px;"><strong>1. Collect information</strong> <br> <img src="../../assets/arch/usecases/1-1.png" width="250" alt="A diagram showing an employee or contractor providing identity information to an administrator with the authoritative source."></td>
    <td style="border:0px;">The administrator collects identity information from the employee or contractor, and adds this information to the authoritative source.<i>This identity information may come from the individual, onboarding documents, or HR systems.</i></td>
  </tr>
  <tr>
    <td style="width:250px;border:0px;"><strong>2. Create an enterprise identity</strong> <br> <img src="../../assets/arch/usecases/1-2.png" width="250" alt="A diagram showing the authoritative source populating the identity information into a data repository, creating an enterprise identity in the authoritative source."></td>
    <td style="border:0px;">The authoritative source sends the information to the system’s data repository. <br><br> Result: An enterprise identity in the authoritative source for the employee or contractor.</td>
  </tr>
  <tr>
    <td style="width:250px;border:0px;"><strong>3. Maintain the enterprise identity</strong></td>
    <td style="border:0px;">The following steps describe identity maintenance your agency should perform on a regular basis.</td>
  </tr>
  <tr>
    <td style="width:250px;border:0px;"><strong>3a. Identify and aggregate identity data</strong> <br> <img src="../../assets/arch/usecases/1-3a.png" width="250" alt="A diagram showing the data repository with multiple enterprise identities for one individual, and an arrow indicating the change to a single consolidated enterprise identity."></td>
    <td style="border:0px;">Query your data repositories for any existing identities for an individual. Aggregate these attributes as a single enterprise identity for the individual.</td>
  </tr>
  <tr>
    <td style="width:250px;border:0px;"><strong>3b. Update the enterprise identity</strong> <br> <img src="../../assets/arch/usecases/1-3b.png" width="250" alt="A diagram showing two paths to update an identity. Path 1 is the administrator updating the enterprise identity directly in the authoritative source. Path 2 is the employee or contractor updating their personal information in an agency application, and the application updating the enterprise identity in the authoritative source."></td>
    <td style="border:0px;">If an individual has updated personal information, there are two ways to update the enterprise identity: <ol> <li> The administrator updates the individual’s enterprise identity attributes directly in the authoritative sources.</li> <li>The individual uses an agency application to update their personal information, and the application updates the individual’s enterprise identity attributes in the authoritative sources.</li></ol></td>
  </tr>
  <tr>
    <td style="width:250px;border:0px;"><strong>3c. Delete the enterprise identity</strong> <br> <img src="../../assets/arch/usecases/1-3c.png" width="250" alt="A diagram showing an administrator deleting an enterprise identity."></td>
    <td style="border:0px;">When you need to delete an enterprise identity, delete the identity attributes in the authoritative source.</td>
  </tr>
</table>




## Example

I want to create a new enterprise identity, so that an individual may be established as a federal employee or contractor that will need to be identity proofed, credentialed, and granted access to agency services.

## Next Steps

[Proof the identity](../proofidentity) and [assign appropriate access entitlements](../manageaccess).
