---
layout: page
collection: arch
title:  FICAM is the foundation for ZT adoption
permalink: /zero-trust/
sidenav: arch
sticky_sidenav: true

subnav:
  - text: Definition
    href: '#definition'
  - text: FICAM areas aligned to M-22-09
    href: '#ficam-areas-aligned-to-m-22-09'
  - text: FICAM alignment to CISA Zero Trust Maturity Model
    href: '#ficam-alignment-to-cisa-zero-trust-maturity-model'

---

FICAM is the foundation for U.S. Government agencies to mature towards Zero Trust cyber security architecture. Implementing identity credentials and access management concepts, policies, procedures, and playbooks provides agencies with a Zero Trust implementation strategy framework. The FICAM Key ICAM components directly help implement Zero Trust Architecture with:
 
  - Person and non-person entities - authenticate all users before providing access. Managing identities and providing secure MFA credentials is the first step in knowing who requests access.
  - Endpoints - in addition to authenticating users, Zero Trust requires authenticating and approving endpoints, such as workstations, mobile devices, or Internet of Things devices.
  - Data, assets, applications, and services - definition and implementation of access policies are needed to implement the continuous evaluation aspect of Zero Trust.

Zero Trust can only be achieved with strong identity management and mature ICAM capabilities for person and non-person entities.  OMB M-22-09, the Federal Zero Trust Strategy, and CISA Zero Trust Maturity Model version 2.0 are a comprehensive set of access control policies and guidelines, setting the foundation for agencies to implement a Zero Trust architecture and related initiatives for your agency.

## Definition
Zero Trust concepts assume there is no implicit trust granted to assets or user accounts based on their physical or network location (i.e., local area networks versus the internet) or based on asset ownership (enterprise or personally owned). Authentication and authorization (subject and device) are discrete functions performed before a session to an enterprise resource is established.

## FICAM areas aligned to M-22-09
A **Privileged user** is authorized (and therefore, trusted) to perform security-relevant functions that ordinary users cannot perform—also known as a privileged IT user, privileged network user, or superuser. FICAM [Privileged Identity Playbook]({{site.baseurl}}/playbooks/pam/){:target="_blank"}{:rel="noopener noreferrer"} is a great place to start with ensuring robust management of privileged users and identities.

A **Phishing-resistant authenticator** is a form of authentication that is not susceptible to interception or replay attacks. In addition, the ICAM Subcommittee is drafting a phishing-resistant playbook to help agencies get a head start in implementing the concepts, saving agencies time and money. Agencies can understand phishing, phishing-resistant, and examples of phishing-resistant authenticators in the [Phishing-Resistant Authenticator Playbook]({{site.baseurl}}/playbooks/altauthn/){:target="_blank"}{:rel="noopener noreferrer"}.

**Single Sign On** centralizes application access for agency employees and contractors or federates access with other federal executive agencies. Leveraging the [Enterprise Single Sign On Playbook]({{site.baseurl}}/playbooks/sso/){:target="_blank"}{:rel="noopener noreferrer"} will help agencies with enhanced management control of identities in a consolidated manner. Agencies are encouraged to use this playbook to centralize application access for agency employees and contractors or federate access with other federal executive agencies.

**User authorization** decides whether to grant access to a user or machine account following authentication. Authorization to resources can be fine-grained to help achieve attribute-based access vs. traditional role-based access. FICAM has resources to help agencies with user authorization management activities as part of their ICAM solutions. Agencies can get started by leveraging the [Cloud Identity Playbook]({{site.baseurl}}/playbooks/cloud/){:target="_blank"}{:rel="noopener noreferrer"} as a starting point. This playbook provides practical guidance to assist federal agencies in starting or further expanding their use of workforce identity, credential, and access management services in a cloud operating model.

**Identity lifecycle management** encompasses creating, identity proofing, vetting, provisioning, aggregating, maintaining, and deactivating digital identities on an agency’s enterprise ICAM systems. The FICAM team provides a detailed [Identity Lifecycle Management Playbook]({{site.baseurl}}/playbooks/ilm/){:target="_blank"}{:rel="noopener noreferrer"} to help shift the focus from managing the access based on credentials to managing the entire lifecycle of identities.

 
## FICAM alignment to CISA Zero Trust Maturity Model

The [CISA Zero Trust Maturity Model](https://www.cisa.gov/sites/default/files/2023-04/zero_trust_maturity_model_v2_508.pdf){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} is a good place to start while agencies plan their Zero Trust implementation journey. This model has five pillars that complement each other as part of the overall objective to achieve continued modernization efforts related to Zero Trust within a rapidly evolving technology landscape. One of the main pillars of this model is Identity, which is in line with the FICAM framework. Even though this maturity model is one of the many paths to zero trust, it leads agencies to success by providing guidance. Use [IDManagement]({{site.baseurl}}){:target="_blank"}{:rel="noopener noreferrer"} resources to achieve Identity pillar objectives defined within this maturity model efficiently.

## Functions and guidance

  <table> 
    <tr>
      <th><strong>ICAM practice area</strong></th>
      <th><strong>CISA zero trust maturity model identity function</strong></th>
      <th><strong>FICAM guidance</strong></th>
    </tr>
    <tr>
      <td><a class="usa-link usa-link--external" class="usa-link" href="https://www.idmanagement.gov/arch/#access-management" target="_blank" rel="noopener noreferrer">Access Management - Authentication</a></td>
      <td>Authentication - agency continuously validates identity with phishing-resistant MFA, not just when access is initially granted.</td>
      <td>
        <ul>
          <li><a class="usa-link usa-link--external" class="usa-link" href="https://www.idmanagement.gov/playbooks/altauthn/" target="_blank" rel="noopener noreferrer">Phishing-Resistant Authenticator Playbook</a></li>
          <li><a class="usa-link usa-link--external" class="usa-link" href="https://www.idmanagement.gov/implement/whfb/" target="_blank" rel="noopener noreferrer">WHfB Configuration Guide</a></li>
          <li><a class="usa-link usa-link--external" class="usa-link" href="https://www.idmanagement.gov/implement/cba-azure/" target="_blank" rel="noopener noreferrer">Azure Entra ID Certificate-Based Authentication Guide</a></li>
          <li><a class="usa-link usa-link--external" class="usa-link" href="https://www.idmanagement.gov/implement/scl-windows/" target="_blank" rel="noopener noreferrer">PIV Implementation Guide</a></li>
          <li><a class="usa-link usa-link--external" class="usa-link" href="https://www.cisa.gov/sites/default/files/2023-03/csso-scuba-guidance_document-hybrid_identity_solutions_architecture-2023.03.14-final.pdf" target="_blank" rel="noopener noreferrer">CISA Hybrid Identity Playbook</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><a class="usa-link usa-link--external" class="usa-link" href="https://www.idmanagement.gov/arch/#identity-management" target="_blank" rel="noopener noreferrer">Identity Management - Identity Aggregation</a></td>
      <td>Identity stores - agencies securely integrate their identity stores across all partners and environments as appropriate.</td>
      <td>
          <p>
          <ul>
            <li><a class="usa-link usa-link--external" class="usa-link" href="https://www.idmanagement.gov/playbooks/ilm/" target="_blank" rel="noopener noreferrer">ILM Playbook</a></li>
            <li><a class="usa-link usa-link--external" class="usa-link" href="https://www.cisa.gov/resources-tools/programs/continuous-diagnostics-and-mitigation-cdm-program/program-approved-products-list-apl" target="_blank" rel="noopener noreferrer">DHS CDM Master User Record Architecture</a></li>
            <li><a class="usa-link usa-link--external" class="usa-link" href="https://www.idmanagement.gov/playbooks/pam/" target="_blank" rel="noopener noreferrer">Privileged Identity Playbook</a></li>
          </ul>
          </p>
      </td>
    </tr>
    <tr>
      <td><a class="usa-link usa-link--external" class="usa-link" href="https://www.idmanagement.gov/arch/#governance" target="_blank" rel="noopener noreferrer">Governance - Analytics</a></td>
      <td>Risk assessments - agencies determine identity risk in real-time based on continuous analysis and dynamic rules to deliver ongoing protection.</td>
      <td>
        <ul>
          <li><a class="usa-link usa-link--external" class="usa-link" href="https://www.idmanagement.gov/playbooks/dira/" target="_blank" rel="noopener noreferrer">DIRA Playbook</a></li>
          <li><a class="usa-link usa-link--external" class="usa-link" href="https://www.idmanagement.gov/playbooks/cloud/" target="_blank" rel="noopener noreferrer">Cloud Identity Playbook</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><a class="usa-link usa-link--external" class="usa-link" href="https://www.idmanagement.gov/arch/#access-management" target="_blank" rel="noopener noreferrer">Access Management - Authorization</a></td>
      <td>Access management - agency uses automation to authorize just-in-time and just-enough access tailored to individual actions and resource needs.</td>
      <td>
        <ul>
          <li><a class="usa-link usa-link--external" class="usa-link" href="https://www.cisa.gov/sites/default/files/2023-03/csso-scuba-guidance_document-hybrid_identity_solutions_architecture-2023.03.14-final.pdf" target="_blank" rel="noopener noreferrer">CISA Hybrid Identity Playbook</a></li>
          <li><a class="usa-link usa-link--external" class="usa-link" href="https://www.idmanagement.gov/playbooks/cloud/" target="_blank" rel="noopener noreferrer">Cloud Identity Playbook</a></li>
          <li><a class="usa-link usa-link--external" class="usa-link" href="https://www.idmanagement.gov/playbooks/sso/" target="_blank" rel="noopener noreferrer">SSO Playbook</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><a class="usa-link usa-link--external" class="usa-link" href="https://www.idmanagement.gov/arch/#governance" target="_blank" rel="noopener noreferrer">Governance - Analytics</a></td>
      <td>Visibility and analytics capability - agencies maintain comprehensive visibility and situational awareness across enterprises by performing automated analysis over user activity log types, including behavior-based analytics.</td>
      <td>
        <ul>
          <li><a class="usa-link usa-link--external" class="usa-link" href="https://www.idmanagement.gov/playbooks/sso/" target="_blank" rel="noopener noreferrer">SSO Playbook</a></li>
          <li><a class="usa-link usa-link--external" class="usa-link" href="https://www.idmanagement.gov/playbooks/ilm/" target="_blank" rel="noopener noreferrer">ILM Playbook</a></li>
          <li><a class="usa-link usa-link--external" class="usa-link" href="https://www.idmanagement.gov/playbooks/pam/" target="_blank" rel="noopener noreferrer">Privileged Identity Playbook</a></li>
          <li><a class="usa-link usa-link--external" class="usa-link" href="https://www.nccoe.nist.gov/financial-services/privileged-account-management" target="_blank" rel="noopener noreferrer">NIST NCCOE Privileged Account Management for the Financial Services Sector</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><a class="usa-link usa-link--external" class="usa-link" href="https://www.idmanagement.gov/arch/#governance" target="_blank" rel="noopener noreferrer">Governance - Identity Governance</a></td>
      <td>Automation and orchestration capability - agencies automate the orchestration of all identities with full integration across all environments based on behaviors, enrollments, and deployment needs.</td>
      <td>
        <ul>
          <li><a class="usa-link usa-link--external" class="usa-link" href="https://www.idmanagement.gov/playbooks/sso/" target="_blank" rel="noopener noreferrer">SSO Playbook</a></li>
          <li><a class="usa-link usa-link--external" class="usa-link" href="https://www.idmanagement.gov/playbooks/ilm/" target="_blank" rel="noopener noreferrer">ILM Playbook</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><a class="usa-link usa-link--external" class="usa-link" href="https://www.idmanagement.gov/arch/#access-management" target="_blank" rel="noopener noreferrer">Access Management - Digital Policy Administration</a></td>
      <td>Governance capability - agencies implement and fully automate enterprise-wide identity policies for all users and entities across all systems with continuous enforcement and dynamic updates.</td>
      <td>
        <ul>
          <li><a class="usa-link usa-link--external" class="usa-link" href="https://www.cisa.gov/sites/default/files/2023-03/csso-scuba-guidance_document-hybrid_identity_solutions_architecture-2023.03.14-final.pdf" target="_blank" rel="noopener noreferrer">CISA Hybrid Identity Playbook</a></li>
          <li><a class="usa-link usa-link--external" class="usa-link" href="https://www.idmanagement.gov/playbooks/cloud/" target="_blank" rel="noopener noreferrer">Cloud Identity Playbook</a></li>
          <li><a class="usa-link usa-link--external" class="usa-link" href="https://www.idmanagement.gov/playbooks/sso/" target="_blank" rel="noopener noreferrer">SSO Playbook</a></li>
          <li><a class="usa-link usa-link--external" class="usa-link" href="https://www.idmanagement.gov/playbooks/pam/" target="_blank" rel="noopener noreferrer">Privileged Identity Playbook</a></li>
        </ul>
      </td>
    </tr>
  </table> 


