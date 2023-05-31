---
layout: page
collection: arch
title: Use Cases
permalink: /arch/usecases/
sidenav: arch

subnav:
  - text: 1 - Create and Maintain Identity
    href: '#use-case-1'
  - text: 2 - Proof an Identity
    href: '#use-case-2'
  - text: 3 - Manage Lifecycle
    href: '#use-case-3'
  - text: 4 - Create and Issue Credential
    href: '#use-case-4'
  - text: 5 - Issue a Derived Credential
    href: '#use-case-5'
  - text: 6 - Manage the Credential Lifecycle
    href: '#use-case-6'
  - text: 7 - Grant Access
    href: '#use-case-7'
  - text: 8 - Accept Federation Assertions
    href: '#use-case-8'

sticky_sidenav: true
pdf: "docs/ficam-arch.pdf"
---

These use cases are designed for ICAM Enterprise Architects and business owners and describe some of the most common ICAM business processes.

Each use case includes a high-level summary of the scenario, individuals and systems involved in the use case, illustrations that show the required steps to achieve the end goal, and an icon that indicates the practice area and the service with which the use case most closely aligns.

For details about ICAM services, see the [Services Framework]({{site.baseurl}}/arch/servicesframework/).

While each use case describes a particular ICAM business process, the use cases are all interrelated. The use cases generalize the activities and technologies to make sure they apply across many agencies.

You can combine or build upon the ICAM use cases to support your agency’s scenarios and needs.
<hr>
<ul class="gsa-expand-collapse-group" title="Expand or Collapse All" aria-label="Expand or Collapse All">
  <li class="gsa-collapse-button" onclick="collapseToggle()" title="Collapse All" aria-label="Collapse All" tabindex=0>   -   </li>
  <li class="gsa-expand-button" onclick="expandToggle()" title="Expand All" aria-label="Expand All" tabindex=0>   +   </li>
</ul>

<div id="use-case-1" class="usa-accordion usa-accordion--bordered" aria-multiselectable="true">
  <!-- Use the accurate heading level to maintain the document outline -->
  <h4 class="usa-accordion__heading"> <!-- Use Case 1 -->
    <button
      class="usa-accordion__button  gsa-target-accordion-header"
      aria-expanded="true"
      aria-controls="m-a1"
    >
      Use Case 1. Create and Maintain an Identity
    </button>
  </h4>
  <div id="m-a1" class="usa-accordion__content usa-prose gsa-target-accordion-content-area">
    <p><img src="{{site.baseurl}}/assets/arch/usecases/credentials_creation.png" alt="Three hexagons with the letters I, C, and A. The I is highlighted in red for Identity Management, with a red banner for the Creation service." align="right" style="padding-left:15px"  width="156" height="156"/></p>
    <p>When you onboard an employee or contractor at your agency, you collect identity information from the individual and store parts of that information as identity attributes. These attributes serve as a digital proxy for the individual’s identity, also known as an enterprise identity.</p>
    <hr />
    <h2 id="use-case">Use Case</h2>
    <p>In this use case, an administrator needs to collect or manage identity data for an employee or contractor for the purpose of creating an enterprise identity record and maintaining it throughout its lifecycle.</p>
    <p><img src="{{site.baseurl}}/assets/arch/usecases/1-IconKey.png" alt="Icon Key for the diagrams that follow." /></p>
    <table>
      <tr>
        <td style="width:250px;border:0px;"><strong>1. Collect information</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/1-1.png" width="250" alt="A diagram showing an employee or contractor providing identity information to an administrator with the authoritative source." /></td>
        <td style="border:0px;">The administrator collects identity information from the employee or contractor.<br /><br /><i>This identity information may come from the individual, onboarding documents, or HR systems.</i></td>
      </tr>
      <tr>
        <td style="width:250px;border:0px;"><strong>2. Create an enterprise identity</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/1-2.png" width="250" alt="A diagram showing the authoritative source populating the identity information into a data repository, creating an enterprise identity in the authoritative source." /></td>
        <td style="border:0px;">The administrator adds the identity information to the authoritative source, a data repository. <br /><br /> Result: An enterprise identity in the authoritative source for the employee or contractor.</td>
      </tr>
      <tr>
        <td style="width:250px;border:0px;"><strong>3. Maintain the enterprise identity</strong></td>
        <td style="border:0px;">The following steps describe identity maintenance your agency should perform on a regular basis.</td>
      </tr>
      <tr>
        <td style="width:250px;border:0px;"><strong>3a. Identify and aggregate identity data</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/1-3a.png" width="250" alt="A diagram showing the data repository with multiple enterprise identities for one individual, and an arrow indicating the change to a single consolidated enterprise identity." /></td>
        <td style="border:0px;">Query your data repositories for any existing identities for an individual. Aggregate these attributes as a single enterprise identity for the individual.</td>
      </tr>
      <tr>
          <td style="width:250px;border:0px;"><strong>3b. Update the enterprise identity</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/1-3b.png" width="250" alt="A diagram showing two paths to update an identity. Path 1 is the administrator updating the enterprise identity directly in the authoritative source. Path 2 is the employee or contractor updating their personal information in an agency application, and the application updating the enterprise identity in the authoritative source." /></td>
        <td style="border:0px;">If an individual has updated personal information, there are two ways to update the enterprise identity: <br /> <br /> <ul> <li> The administrator updates the individual’s enterprise identity attributes directly in the authoritative sources.</li> <li>The individual uses an agency application to update their personal information, and the application updates the individual’s enterprise identity attributes in the authoritative sources.</li></ul></td>
      </tr>
      <tr>
        <td style="width:250px;border:0px;"><strong>3c. Delete the enterprise identity</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/1-3c.png" width="250" alt="A diagram showing an administrator deleting an enterprise identity." /></td>
        <td style="border:0px;">When you need to delete an enterprise identity, delete the identity attributes in the authoritative source.</td>
      </tr>
    </table>
    <h2 id="example">Example</h2>
    <p>I want to create a new enterprise identity so that an individual may be established as a federal employee or contractor that will need to be identity proofed, credentialed, and granted access to agency services.</p><br>
    <a href="#top">Back to Top</a>
  </div>

  <!-- Use the accurate heading level to maintain the document outline -->
  <h4 id="use-case-2" class="usa-accordion__heading"> <!-- Use Case 2 -->
    <button
      class="usa-accordion__button gsa-target-accordion-header"
      aria-expanded="false"
      aria-controls="m-a2"
    >
      Use Case 2. Proof an Identity
    </button>
  </h4>
  <div id="m-a2" class="usa-accordion__content usa-prose gsa-target-accordion-content-area">
    <p><img src="{{site.baseurl}}/assets/arch/usecases/credentials_identity_proofing.png" alt="Three hexagons with the letters I, C, and A. The I is highlighted in orange for Identity Management, with an orange banner for the Identity Proofing service. " align="right" style="padding-left:15px"  width="156" height="156" /></p>
    <p>Before you can create a credential and assign it to an individual, that person must provide proof of their claimed identity. Identity proofing is the process by which a federal agency collects and verifies information about a person to establish an enterprise identity.</p>
    <p>The location or information that a person needs to access informs the Identity Assurance Level (IAL), which determines the elements you should require from that person for identity proofing. There are three IALs; however, federal agencies require a minimum of IAL2 for employees or contractors with recurring access to government resources, so these use cases do not include IAL1.</p>
    <p>This use case describes the high-level steps to proof an identity at IAL2 or IAL3. Depending on the required IAL, you may require increasingly more information from an employee or contractor or partner along with additional verification steps. The information provided by the employee or contractor is also known as identity evidence. Identity evidence may be physical, such as passports, driver’s licenses, and birth certificates.</p>
    <ul>
      <li><strong>IAL2</strong> - first and last name, email address, and address of record, supported by appropriate identity documentation and verified as strong.</li>
      <li><strong>IAL3</strong> - first and last name, email address, address of record, and fingerprints, supported by appropriate identity documentation and verified as superior.</li>
    </ul>
    <p>For more information about identity proofing and IALs, see <a href="https://pages.nist.gov/800-63-3/sp800-63a.html#22-identity-assurance-levels" target="_blank">NIST SP 800-63A</a> (Section 2.2).</p>
    <hr />
    <h2 id="use-case">Use Case</h2>
    <p>In this use case, an administrator needs to collect or manage identity data for an employee or contractor for the purpose of creating an enterprise identity record and maintaining it throughout its lifecycle.</p>
    <p><img src="{{site.baseurl}}/assets/arch/usecases/2-IconKey.png" alt="Icon Key for the diagrams that follow." /></p>
    <table>
      <tr>
        <td style="width:250px;border:0px;"><strong>1. Collect identity information</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/2-1.png" width="250" alt="A diagram showing an employee or contractor presenting information or data to an administrator." /></td>
        <td style="border:0px;"><strong>IAL2</strong> <i>(In-person or remote)</i> - The employee or contractor presents identity information, like first name, last name, and address of record.<br /><br /><strong>IAL3</strong> <i>(In-person or supervised remote)</i> - The employee or contractor presents identity information, like first name, last name, and address of record, and biometric data like fingerprints.</td>
      </tr>
      <tr>
        <td style="width:250px;border:0px;"><strong>2. Verify the identity information</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/2-2.png" width="250" alt="A diagram showing an administrator verifying information presented by an employee or contractor." /></td>
        <td style="border:0px;"><strong>IAL2</strong> - The administrator confirms the information provided is valid and current by comparing photo identification to the individual, or confirming contact information, ensuring it matches the provided documentation. <br /><br /><strong>IAL3</strong> - The administrator verifies all information with the issuing organization. <br /> <i>Result:</i> The individual’s identity has been successfully proofed at IAL2, or IAL3. </td>
      </tr>
    </table>
    <h2 id="examples">Examples</h2>
    <ul>
      <li>I want to proof the identity of an employee or contractor to verify that the individual is who she says she is so that she can be issued a unique enterprise credential.</li>
      <li>A prospective employee or contractor has filled out their information in an HR system and requires IAL3 proofing and minimum background investigations. The prospective employee/contractor is then scheduled for in-person proofing. The prospective employee/contractor brings required identity documentation; the information is verified using approved documentation and biometrics are captured.</li>
    </ul><br>
    <a href="#top">Back to Top</a>
  </div>

  <!-- Use the accurate heading level to maintain the document outline -->
  <h4 id="use-case-3" class="usa-accordion__heading"> <!-- Use Case 3 -->
    <button
      class="usa-accordion__button gsa-target-accordion-header"
      aria-expanded="false"
      aria-controls="m-a3"
    >
      Use Case 3. Manage the Entitlements Lifecycle
    </button>
  </h4>
  <div id="m-a3" class="usa-accordion__content usa-prose gsa-target-accordion-content-area">
    <p><img src="{{site.baseurl}}/assets/arch/usecases/credentials_provisioning.png" alt="Three hexagons with the letters I, C, and A. The I is highlighted in orange for Identity Management, with an orange banner for the Provisioning service. " align="right" style="padding-left:15px"  width="156" height="156" /></p>
    <p>You can assign access entitlements to individuals, roles, and groups. These entitlements define an employee or contractor’s access to agency services, so you’ll need to assign entitlements before an employee or contractor can access an agency service.</p>
    <hr />
    <h2 id="use-case">Use Case</h2>
    <p>In this use case, an administrator needs to assign entitlements to an employee or contractor.</p>
    <p><img src="{{site.baseurl}}/assets/arch/usecases/3-IconKey.png" alt="Icon Key for the diagrams that follow." /></p>
    <table>
      <tr>
        <td style="width:250px;border:0px;"><strong>1. Initiate the request</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/3-1.png" width="250" alt="A diagram showing an employee or contractor requesting entitlements from an administrator." /></td>
        <td style="border:0px;">An individual requests entitlements, or joins a team with specific access requirements.<br /><br />The requestor may be the employee or contractor, their supervisor, HR, or a security team member.</td>
      </tr>
      <tr>
        <td style="width:250px;border:0px;"><strong>2. Review the request</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/3-2.png" width="250" alt="A diagram showing an administrator comparing an entitlement request with access requirements." /></td>
        <td style="border:0px;"> The administrator compares the employee or contractor’s requested entitlements with the relevant access requirements.<br /><br />If the employee or contractor qualifies for the requested entitlements and has a mission need for access, the administrator approves the request.</td>
      </tr>
        <tr>
        <td style="width:250px;border:0px;"><strong>3. Assign the entitlements</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/3-3.png" width="250" alt="A diagram showing an administrator assigning entitlements to the employee or contractor." /></td>
        <td style="border:0px;"> The administrator assigns the entitlements to the employee or contractor.<br /><br />Any time the employee or contractor’s role or relationship changes, the administrator updates the entitlements accordingly, including removing entitlements as needed.</td>
      </tr>
    </table>
    <h2 id="examples">Examples</h2>
    <ul>
      <li>I want to indicate that an employee or contractor requires and is allowed access to an agency service so that they can access the service when needed.</li>
      <li>An employee is hired to be part of the financial review team and requires access to financial applications. The employee has a role assigned to their enterprise identity record and associated with their identity attributes.</li>
    </ul><br>
    <a href="#top">Back to Top</a>
  </div>

  <!-- Use the accurate heading level to maintain the document outline -->
  <h4 id="use-case-4" class="usa-accordion__heading"> <!-- Use Case 4 -->
    <button
      class="usa-accordion__button gsa-target-accordion-header"
      aria-expanded="false"
      aria-controls="m-a4"
    >
      Use Case 4. Create and Issue a Credential
    </button>
  </h4>
  <div id="m-a4" class="usa-accordion__content usa-prose gsa-target-accordion-content-area">
    <p><img src="{{site.baseurl}}/assets/arch/usecases/credentials_issuance.png" alt="Three hexagons with the letters I, C, and A. The C is highlighted in green for Credential Management, with a green banner for the Issuance service. " align="right" style="padding-left:15px"  width="156" height="156" /></p>
    <p>After you identity proof an individual, you’ll issue some proof of that individual’s claimed identity. A credential (like a physical card) is a type of authenticator that serves as a tool for an employee or contractor to gain access to agency services.</p>
    <hr />
    <h2 id="use-case">Use Case</h2>
    <p>In this use case, an administrator needs to issue a credential to an employee or contractor.</p>
    <p><strong>Note:</strong> The preferred credential for employees and contractors is a PIV card. For cases where you cannot issue a PIV card, you must use a combination of factors to reach at least an Authenticator Assurance Level 2 (AAL2) credential.</p>
    <p>For more information about authentication and AALs, see <a href="https://pages.nist.gov/800-63-3/sp800-63b.html#sec4" target="_blank" rel="noopener noreferrer">NIST SP 800-63B</a> (Section 4).</p>
    <p><img src="{{site.baseurl}}/assets/arch/usecases/4-IconKey.png" alt="Icon Key for the diagrams that follow." /></p>
    <table>
      <tr>
        <td style="width:250px;border:0px;"><strong>1. Initiate the request</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/4-1.png" width="250" alt="A diagram showing an employee or contractor and a sponsor or supervisor initiating a credential request with an administrator." /></td>
        <td style="border:0px;">An individual presents a valid government issued ID.</td>
      </tr>
      <tr>
        <td style="width:250px;border:0px;"><strong>2. Review the request</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/4-2.png" width="250" alt="A diagram showing an administrator verifying the presented credential with the organization that issued it." /></td>
        <td style="border:0px;">The government ID is verified with the organization that issued it.</td>
      </tr>
        <tr>
        <td style="width:250px;border:0px;"><strong>3. Generate and assign the authenticator(s)</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/4-3.png" width="250" alt="A diagram showing an administrator generating and assigning an authenticator to the employee or contractor." /></td>
        <td style="border:0px;">Generate and assign the authenticator to the individual.</td>
      </tr>
    </table>
    <h2 id="example">Example</h2>
    <p>I want to issue an enterprise credential, unique to an employee or contractor, so that they are able to access federal buildings and protected resources to which they require access.</p><br>
    <a href="#top">Back to Top</a>
  </div>

  <!-- Use the accurate heading level to maintain the document outline -->
  <h4 id="use-case-5" class="usa-accordion__heading"> <!-- Use Case 5 -->
    <button
      class="usa-accordion__button gsa-target-accordion-header"
      aria-expanded="false"
      aria-controls="m-a5"
    >
      Use Case 5. Issue a Derived Credential
    </button>
  </h4>
  <div id="m-a5" class="usa-accordion__content usa-prose gsa-target-accordion-content-area">
    <p><img src="{{site.baseurl}}/assets/arch/usecases/credentials_maintenance.png" alt="Three hexagons with the letters I, C, and A. The C is highlighted in green for Credential Management, with a green banner for the Maintenance service." align="right" style="padding-left:15px"  width="156" height="156" /></p>
    <p>A derived credential is a credential derived from an existing credential, with a different form factor, such as a credential on a mobile device. Derived credentials have the same IAL as the existing credential and the same or lower AAL.</p>
    <p>When an employee or contractor requires authentication but cannot leverage an existing credential, they can use a derived credential. To be eligible for a derived credential, the employee or contractor must already have a valid credential with Authenticator Assurance Level (AAL) 2 or 3.</p>
    <hr />
    <h2 id="use-case">Use Case</h2>
    <p>In this use case, an employee or contractor interacts with the agency services to register or request a derived credential.</p>
    <p><img src="{{site.baseurl}}/assets/arch/usecases/5-IconKey.png" alt="Icon Key for the diagrams that follow." /></p>
    <table>
      <tr>
        <td style="width:250px;border:0px;"><strong>1. Initiate the request</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/5-1.png" width="250" alt="A diagram showing an employee or contractor initiating a derived credential request to an enterprise identity management system." /></td>
        <td style="border:0px;">A request for identity data is initiated to the identity manager. <br /><br /><i> This identity manager could be a person or system, depending on the organization.</i></td>
      </tr>
      <tr>
        <td style="width:250px;border:0px;"><strong>2. Authenticate the existing credential</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/5-2.png" width="250" alt="A diagram showing an employee or contractor authenticating an existing credential to an enterprise identity management system." /></td>
        <td style="border:0px;">The identity manager identifies relevant sources of data on the individual. <br /><br /><i> Sources could include HR systems, security data, and personal databases.</i></td>
      </tr>
        <tr>
        <td style="width:250px;border:0px;"><strong>3. Generate the derived credential</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/5-3.png" width="250" alt="A diagram showing an enterprise identity management system generating a derived credential for an employee or contracter." /></td>
        <td style="border:0px;">Generate the derived authenticator and note the change in the user's enterprise identity record.</td>
      </tr>
    </table>
    <h2 id="examples">Examples</h2>
    <ul>
      <li>I want to provide an employee or contractor, who has already been issued an enterprise credential, a derived credential so that they can authenticate to enterprise applications.</li>
      <li>An employee or contractor travels quite a bit as part of their job.  Accordingly, they are frequently limited to using a small tablet or their phone to stay connected while on the go. In this case, a derived credential is needed for purposes such as accessing secure agency websites or an agency VPN from their mobile device.</li>
    </ul><br>
    <a href="#top">Back to Top</a>
  </div>

  <!-- Use the accurate heading level to maintain the document outline -->
  <h4 id="use-case-6" class="usa-accordion__heading"> <!-- Use Case 6 -->
    <button
      class="usa-accordion__button gsa-target-accordion-header"
      aria-expanded="false"
      aria-controls="m-a6"
    >
      Use Case 6: Manage the Credential Lifecycle
    </button>
  </h4>
  <div id="m-a6" class="usa-accordion__content usa-prose gsa-target-accordion-content-area">
    <p><img src="{{site.baseurl}}/assets/arch/usecases/credentials_maintain_revoke.png" alt="Three hexagons with the letters I, C, and A. The C is highlighted in green for Credential Management, with a green banner for the Maintenance and Revocation services. " align="right" style="padding-left:15px"  width="156" height="156" /></p>
    <p>Active credentials require regular maintenance. This use case describes the most common credential maintenance activities:</p>
    <ul>
      <li><strong><a href="#reset-a-credential">Reset a credential</a></strong> - An employee or contractor forgets the password or PIN associated with a credential and requests a reset.</li>
      <li><strong><a href="#renew-a-credential">Renew a credential</a></strong> - An employee or contractor’s credential is expiring or their identity information changes, so they request a replacement credential. You must renew a credential prior to the expiration date; otherwise, the employee or contractor must go through the issuance process again.</li>
      <li><strong><a href="#revoke-a-credential">Revoke a credential</a></strong> - An employee or contractor is no longer eligible for their credential (like separating from the issuing agency). The sponsor, supervisor, or administrator requests a revocation of all associated credentials and enterprise accounts.</li>
    </ul>
    <p>You should periodically review your employee or contractors’ eligibility for credentials to identify potential orphaned data.</p>
    <hr />
    <h2 id="use-cases">Use Cases</h2>
    <p><img src="{{site.baseurl}}/assets/arch/usecases/6-IconKey.png" alt="Icon Key for the diagrams that follow." /></p>
    <h3 id="reset-a-credential">Reset a Credential</h3>
    <p>In this use case, an administrator needs to reset a password or PIN for an employee or contractor credential.</p>
    <table>
      <tr>
        <td style="width:250px;border:0px;"><strong>1. Initiate the request</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/6-Reset-1.png" width="250" alt="A diagram showing an employee or contractor initiating a password or pin reset request to an enterprise identity management system." /></td>
        <td style="border:0px;">An employee or contractor forgets their password or PIN, and requests a reset.<br /><br />If the request is valid, the identity management system approves the request.</td>
      </tr>
      <tr>
        <td style="width:250px;border:0px;"><strong>2. Issue a reset</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/6-Reset-2.png" width="250" alt="A diagram showing an enterprise identity management system issueing a password or pin reset to an employee or contracter." /></td>
        <td style="border:0px;">The system issues a password/PIN reset, which may be a temporary password or a link to a web-based reset form.</td>
      </tr>
        <tr>
        <td style="width:250px;border:0px;"><strong>3. Reset the credential</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/6-Reset-3.png" width="250" alt="A diagram showing an employee or contractor resetting a password or PIN." /></td>
        <td style="border:0px;">The employee or contractor resets their password or PIN.</td>
      </tr>
    </table>
    <h3 id="renew-a-credential">Renew a Credential</h3>
    <p>In this use case, an administrator needs to issue a new credential to replace one that will expire soon or has outdated identity information.</p>
    <table>
      <tr>
        <td style="width:250px;border:0px;"><strong>1. Initiate the request</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/6-Renew-1.png" width="250" alt="A diagram showing an employee or contractor initiating a credential renewal request to an enterprise identity management system." /></td>
        <td style="border:0px;">An individual requests a renewal for an employee or contractor’s credential.<br /><br />This individual may be the employee or contractor, their supervisor, or an administrator with approval authority.<br /><br />This could also be an automated process triggered by schedules or specific events.</td>
      </tr>
      <tr>
        <td style="width:250px;border:0px;"><strong>2. Review the request</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/6-Renew-2.png" width="250" alt="A diagram showing an enterprise identity management system reviewing a credential renewal request for an employee or contracter." /></td>
        <td style="border:0px;">The identity management system reviews the request and verifies that the employee or contractor qualifies for a renewed credential. If so, approve the request.</td>
      </tr>
        <tr>
        <td style="width:250px;border:0px;"><strong>3. Replace the credential</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/6-Renew-3.png" width="250" alt="A diagram showing an enterprise identity management system issueing a new credential to an employee or contracter." /></td>
        <td style="border:0px;">The system issues a new credential to the employee or contractor, and updates the associated enterprise identity record.</td>
      </tr>
    </table>
    <h3 id="revoke-a-credential">Revoke a Credential</h3>
    <p>In this use case, an administrator needs to revoke an active credential.</p>
    <table>
      <tr>
        <td style="width:250px;border:0px;"><strong>1. Initiate the request</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/6-Revoke-1.png" width="250" alt="A diagram showing an employee or contractor or a sponsor or supervisor initiating a credential revocation request to an enterprise identity management system." /></td>
        <td style="border:0px;">An individual sends a separation notification or a notice of a lost or compromised credential, requesting revocation.<br /><br />This individual may be the employee or contractor, their supervisor, HR, or a security team member.</td>
      </tr>
      <tr>
        <td style="width:250px;border:0px;"><strong>2. Disable the credential</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/6-Revoke-2.png" width="250" alt="A diagram showing an administrator of an enterprise identity management system invalidates the credential." /></td>
        <td style="border:0px;">The administrator invalidates the credential.<br />Depending on your agency, an individual or a system may perform this task. </td>
      </tr>
        <tr>
        <td style="width:250px;border:0px;"><strong>3. Return the credential</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/6-Revoke-3.png" width="250" alt="A diagram showing an administrator returning the invalidated hardware or physical credential to the supervisor or sponsor." /></td>
        <td style="border:0px;">If the revoked credential is physical or hardware-based, the administrator returns the credential to the appropriate individual.<br /><br />This individual may be a supervisor, HR, or security team member.</td>
      </tr>
    </table>
    <h2 id="examples">Examples</h2>
    <ul>
      <li>An employee or contractor may have attempted to use a credential and input the PIN information incorrectly several times up to an agency-defined limit and has locked their account or credential.  The employee or contractor requests a PIN reset.  The employee or contractor is directed to an unlock service; has to verify information again to prove they are the same person issued the original credential; and follows prompts to unlock their credential, generating a new PIN in the process.</li>
      <li><em>Reset</em> - I want to verify the identity of an employee or contractor that has already been issued a credential and reset their PIN or password so that they can continue to access enterprise resources.</li>
      <li><em>Renew</em> - I want to verify the identity and eligibility of an employee or contractor, who has a previously issued credential that is near expiration, so that they may be issued a new enterprise credential to maintain their ability to access enterprise resources.</li>
      <li><em>Revoke</em> - I want to remove access to enterprise resources for an employee or contractor so that they can no longer use the protected resource.</li>
    </ul><br>
    <a href="#top">Back to Top</a>
  </div>

  <!-- Use the accurate heading level to maintain the document outline -->
  <h4 id="use-case-7"  class="usa-accordion__heading"> <!-- Use Case 7 -->
    <button
      class="usa-accordion__button gsa-target-accordion-header"
      aria-expanded="false"
      aria-controls="m-a7"
    >
      Use Case 7. Grant Access
    </button>
  </h4>
  <div id="m-a7" class="usa-accordion__content usa-prose gsa-target-accordion-content-area">
    <p><img src="{{site.baseurl}}/assets/arch/usecases/credentials_authn_authz.png" alt="This use case corresponds to the Authentication and Authorization service areas of Access Management." align="right" style="padding-left:15px"  width="156" height="156" /></p>
    <p>
      This use case describes the steps to authenticate individuals and authorize access to agency services. Agency services can be anything from applications and files to physical facilities.
      <br><br><br>
    </p>
    <hr />
    <h2 id="use-case">Use Case</h2>
    <p>In this use case, an Access Control System (ACS) Administrator needs to grant access to an employee or contractor who has an enterprise identity and active credential and needs to access a logical or physical resource. These steps assume the employee or contractor already has credentials to support authentication as well as the access entitlements to support authorization decisions.</p>
    <ul>
      <li><em>Authentication</em> - I want to verify the claimed unique identity of a given employee or contractor  so that the system can verify the right individual is attempting to access an agency service.</li>
      <li><em>Authorization</em> - I want to allow access for only employees and contractors that meet established requirements so that only the people who should have access do have access.</li>
    </ul>
    <p><img src="{{site.baseurl}}/assets/arch/usecases/7-IconKey.png" alt="Icon Key for the diagrams that follow." /></p>
    <table>
      <tr>
        <td style="width:250px;border:0px;"><strong>1. Access Attempt</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/7-1.png" width="250" alt="A diagram showing an employee or contractor attempting to access a agency service through an access control system." /></td>
        <td style="border:0px;">An employee or contractor attempts to access an agency service.</td>
      </tr>
      <tr>
        <td style="width:250px;border:0px;"><strong>2. Authenticate the employee or contractor</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/7-2.png" width="250" alt="A diagram showing an employee or contractor presenting either an IAL2 or IAL3 authenticator to an access control system." /></td>
        <td style="border:0px;">The employee or contractor presents an authenticator to the ACS that meets the protected resource’s minimum assurance requirements:<ul><li><strong>AAL2</strong> (two-factor) - Something you know + something you have, like a one-time passcode.</li><li><strong>AAL3</strong> (two-factor + hardware) - Something you know + something you have, like a one-time passcode generated by a hardware-based authenticator; or a PIV credential. For more information about AAL values, see <a href="https://pages.nist.gov/800-63-3/sp800-63b.html#sec5" target="_blank" rel="noopener noreferrer">NIST SP 800-63B Section 5: Authenticator and Verifier Requirements</a>.</li></ul></td>
      </tr>
      <tr>
        <td style="width:250px;border:0px;"><strong>3. Determine the access entitlements and access requirements</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/7-3.png" width="250" alt="A diagram showing an access control system determining the access entitlements and access requirements." /></td>
        <td style="border:0px;">Upon successful authentication, the ACS identifies 1) The employee or contractor's access entitlements associated with the protected resource, and 2) The protected resource's access requirements.</td>
      </tr>
      <tr>
        <td style="width:250px;border:0px;"><strong>4. Process the access information</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/7-4.png" width="250" alt="A diagram showing an access control system processing the employee or contractor access entitlements to the protected resources's access requirements." /></td>
        <td style="border:0px;">The ACS compares the employee or contractor’s access entitlements to the protected resource’s access requirements to decide whether to authorize access.</td>
      </tr>
      <tr>
        <td style="width:250px;border:0px;"><strong>5. Grant access</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/7-5.png" width="250" alt="A diagram showing an access control system granting access to an employee or contractor." /></td>
        <td style="border:0px;"> If the employee or contractor meets the protected resource’s access requirements, the ACS grants access to the protected resource.<br /><br />The ACS logs the access attempt and decision for auditing purposes.</td>
      </tr>
    </table>
    <h2 id="example">Example</h2>
    <p>An employee on the financial review team attempts to access a government financial application that is secured by a single sign-on (SSO) solution. The employee clicks a link to the financial application and is redirected to the SSO portal. The employee authenticates using his/her provided credential, which the SSO determines to be valid. The SSO solution or the financial application system finds the employee’s enterprise identity account and compares the roles assigned to those allowed by the financial application. The resulting determination is that the employee has authenticated to the required assurance level and has the appropriate entitlements to access the system and is subsequently logged on.</p><br>
    <a href="#top">Back to Top</a>
  </div>

  <!-- Use the accurate heading level to maintain the document outline -->
  <h4 id="use-case-8" class="usa-accordion__heading"> <!-- Use Case 8 -->
    <button
      class="usa-accordion__button gsa-target-accordion-header"
      aria-expanded="false"
      aria-controls="m-a8"
    >
      Use Case 8. Accept Federation Assertions
    </button>
  </h4>
  <div id="m-a8" class="usa-accordion__content usa-prose gsa-target-accordion-content-area">
    <p><img src="{{site.baseurl}}/assets/arch/usecases/credentials_attribute_exchange.png" alt="Three hexagons with the letters I in red, C in green, and A in blue, with a gray banner for the Attribute Exchange service in Federation." align="right" style="padding-left:15px"  width="156" height="156" /></p>
    <p>Federal employees and contractors often need to access protected services managed by other federal agencies. Federation is the means by which an agency can accept authentication assertions and associated identity attributes from systems within their agency and at other agencies. This allows federal employees and contractors from across agencies to access protected resources and streamlines the user’s experience.</p>
    <p>Agencies can pass assertions to share attributes about employees and contractors.</p>
    <hr />
    <h2 id="use-case">Use Case</h2>
    <p>In this use case, an employee or contractor from Agency A attempts to access a federated service at Agency B. This use case assumes the employee or contractor already has an account or entitlements to access resources at Agency B, or that they will be provisioned.</p>
    <p>For more information about granting access to protected resources, see Use Case 7. Grant Access.
    <p><img src="{{site.baseurl}}/assets/arch/usecases/8-IconKey.png" alt="Icon Key for the diagrams that follow." /></p>
    <table>
      <tr>
        <td style="width:250px;border:0px;"><strong>1. Request access to federated service</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/8-1.png" width="250" alt="A diagram showing an employee or contractor from Agency A requesting access to a federated service at Agency B." /></td>
        <td style="border:0px;">An Agency A employee or contractor requests access to a federated service at Agency B.<br /><br />The employee or contractor selects the Agency A authentication service.</td>
      </tr>
      <tr>
        <td style="width:250px;border:0px;"><strong>2. Redirect to Agency A for authentication</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/8-2.png" width="250" alt="A diagram showing an employee or contractor access request is redirected from Agency B access control system to the Agency A authentication service." /></td>
        <td style="border:0px;">The Agency B system redirects the employee or contractor to the Agency A authentication service.<br /><br />Agency A authenticates the employee or contractor.</td>
      </tr>
      <tr>
        <td style="width:250px;border:0px;"><strong>3. Perform transparent transaction</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/8-3.png" width="250" alt="A diagram showing Agency A authentication service passing identity attributes to the Agency B access control system." /></td>
        <td style="border:0px;">Agency A passes identity attributes and transaction data to Agency B via a signed assertion.</td>
      </tr>
      <tr>
        <td style="width:250px;border:0px;"><strong>4. Agency B grants access</strong> <br /> <img src="{{site.baseurl}}/assets/arch/usecases/8-4.png" width="250" alt="A diagram showing Agency B access control system granting access to an employee or contractor from Agency A." /></td>
        <td style="border:0px;"> Agency B consumes the assertion data, optionally correlating it with an established account or local identity and makes an access control decision.<br /><br />The Agency B system redirects the employee or contractor to the federated service.</td>
      </tr>
    </table>
    <h2 id="examples">Examples</h2>
    <ul>
      <li>I want to allow other federal agencies’ employees and contractors (who meet specific requirements) to access some of my agency’s resources, which facilitates cross-government collaboration and information sharing.</li>
      <li>An employee or contractor from Agency A visits a shared service operated by Agency B to service all federal government users. At the homepage, the employee/contractor selects their Agency A icon and is redirected to their Agency A SSO portal. They log in using their Agency A managed credentials and are redirected back to the Agency B shared service.</li>
    </ul><br>
    <a href="#top">Back to Top</a>
