---
layout: page
collection: experiments
title: Shatterproof Digital Identity - GSA PQC Experiment
type: Markdown
permalink: /experiments/unifyia-pqc-experiment/
description: Shatterproof Digital Identity - GSA PQC Experiment
sidenav: papers
sticky_sidenav: true

pubdate: June 2025
version: 1.0.3

subnav:
  - text: Executive Summary
    href: "#executive-summary"
  - text: Purpose
    href: "#purpose"
  - text: Scope
    href: "#scope"
  - text: Target Audience
    href: "#target-audience"
  - text: What is Post-Quantum Cryptography?
    href: "#what-is-post-quantum-cryptography"
  - text: Why Post-Quantum Cryptography?
    href: "#why-post-quantum-cryptography"
  - text: NIST and GSA PQC Standardization Efforts
    href: "#nist-and-gsa-pqc-standardization-efforts"
  - text: Technical Architecture for GSA PQC Experiment
    href: "#technical-architecture-for-gsa-pqc-experiment"
  - text: System Components 
    href: "#system-components"
  # - text: Certificate Authority
  #   href: "#certificate-authority"
  # - text: Firmware Support
  #   href: "#firmware-support"
  # - text: Credential Management System
  #   href: "#credential-management-system"
  # - text: Authentication Service Infrastructure
  #   href: "#authentication-service-infrastructure"
  # - text: Web and Application Servers
  #   href: "#web-and-application-servers"
  # - text: Client Platforms – Operating Systems and Browsers
  #   href: "#client-platforms-operating-systems-and-browsers"
  # - text: Federal and Enterprise Applications
  #   href: "#federal-and-enterprise-applications"
  - text: Cryptographic Algorithm Support
    href: "#cryptographic-algorithm-support"
  - text: GSA PQC Experiment Infrastructure and Tools
    href: "#gsa-pqc-experiment-infrastructure-and-tools"
  - text: Implementation Details
    href: "#implementation-details"
  - text: Configurations
    href: "#configurations"
  - text: Enrollment and Credential Issuance
    href: "#enrollment-and-credential-issuance"
  - text: GSA PQC Experiment Results
    href: "#gsa-pqc-experiment-results"
  - text: ZTPass on NXP P71D600 Experiment Results    
    href: "#ztpass-on-nxp-p71d600-experiment-results"
  - text: ZT Pass on NXP P71D600 Lessons Learned
    href: "#ztpass-on-nxp-p71d600-lessons-learned"
  - text: YubiKey Experiment Results
    href: "#yubikey-experiment-results"
  - text: YubiKey Lessons Learned
    href: "#yubikey-lessons-learned"
  - text: Communication and Transaction Security
    href: "#communication-and-transaction-security"  
  - text: Migration Strategies for PQC Algorithms in the PIV Ecosystem
    href: "#migration-strategies-for-pqc-algorithms-in-the-piv-ecosystem"
  - text: Conclusion
    href: "#conclusion"
  - text: Future Outlook
    href: "#future-outlook"
  - text: Abbreviations
    href: "#abbreviations"
  - text: Terms and Definitions
    href: "#terms-and-definitions"
  - text: Normative References
    href: "#normative-references"
---

{% include alert-warning.html heading="Draft" content="The following document is a Draft and should not be interpreted as a finalized rule." %}

<!-- Start of Header -->
<div style="margin-bottom: 20px;">
    <img src="{{site.baseurl}}/assets/logo/logo-gsa.png" style="margin-right: 15px;border:0px;" alt="U.S. General Services Administration Logo">
    <!-- <img src="{{site.baseurl}}/assets/logo/logo-sandia.png" style="margin-right: 15px;border:0px;" alt="Sandia National Laboratories Logo"> -->
    <!-- <img src="{{site.baseurl}}/assets/logo/logo-lawrence.png" style="margin-right: 15px;border:0px;" alt="Lawrence Livermore National Laboratory Logo"> -->
</div>
  
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="v-c1">
      Date: {{page.pubdate}} - Version: {{page.version}}
    </button>
  </h4>
  <div id="v-c1" class="usa-accordion__content usa-prose">
    <table>
      <thead>
      <tr>
        <th scope='col' colspan="3">Shatterproof Digital Identity - GSA PQC Experiment</th>
      </tr>
      <tr>  
        <th scope='col'>Version Number</th>
        <th scope='col'>Date</th>
        <th scope='col'>Change Description</th>
      </tr>
      </thead>
      <tr>
        <th scope='row'>1.0.0</th>
        <td>June 17, 2025</td>
        <td>First Version</td>
      </tr>
    </table>
  </div>
</div>

<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="v-c2">
      Table of Contents
    </button>
  </h4>
  <div id="v-c2" class="usa-accordion__content usa-prose">
<ol>
<li><a href="#executive-summary">Executive Summary</a></li>
<li><a href="#purpose">Purpose</a></li>
<li><a href="#scope">Scope</a></li>
<li><a href="#target-audience">Target Audience</a></li>
<li><a href="#what-is-post-quantum-cryptography">What is Post-Quantum Cryptography?</a></li>
<li><a href="#why-post-quantum-cryptography">Why Post-Quantum Cryptography?</a></li>
<li><a href="#nist-and-gsa-pqc-standardization-efforts">NIST and GSA PQC Standardization Efforts </a></li>

<li><a href="#technical-architecture-for-gsa-pqc-experiment">Technical Architecture for GSA PQC Experiment </a>
<ol type="a">
<li><a href="#system-components">System Components </a>
<!-- <ol type="i">
<li><a href="#certificate-authority">Certificate Authority </a></li>
<li><a href="#firmware-support">Firmware Support</a></li>
<li><a href="#credential-management-system">Credential Management System </a></li>
<li><a href="#authentication-service-infrastructure">Authentication Service Infrastructure </a></li>
<li><a href="#web-and-application-servers">Web and Application Servers </a></li>
<li><a href="#client-platforms-operating-systems-and-browsers">Client Platforms – Operating Systems and Browsers </a></li>
<li><a href="#federal-and-enterprise-applications">Federal and Enterprise Applications </a></li>
</ol> -->
</li>
<li><a href="#cryptographic-algorithm-support">Cryptographic Algorithm Support</a></li>
<li><a href="#gsa-pqc-experiment-infrastructure-and-tools">GSA PQC Experiment Infrastructure and Tools </a></li>
</ol>
</li>
<li><a href="#implementation-details">Implementation Details </a>
<ol type="a">
<li><a href="#configurations">Configurations </a></li>
<li><a href="#enrollment-and-credential-issuance">Enrollment and Credential Issuance
 </a></li>
</ol>
</li>
<li><a href="#gsa-pqc-experiment-results">GSA PQC Experiment Results </a>
<ol type="a">
<li><a href="#ztpass-on-nxp-p71d600-experiment-results">ZTPass on NXP P71D600 Experiment Results</a></li>
<li><a href="#ztpass-on-nxp-p71d600-lessons-learned">ZTPass on NXP P71D600 Lessons Learned</a></li>
<li><a href="#yubikey-experiment-results">YubiKey Experiment Results</a></li>
<li><a href="#yubikey-lessons-learned">YubiKey Lessons Learned</a></li>
<li><a href="#communication-and-transaction-security">Communication and Transaction Security</a></li>
</ol>
</li>
<li><a href="#migration-strategies-for-pqc-algorithms-in-the-piv-ecosystem">Migration Strategies for PQC Algorithms in the PIV Ecosystem</a></li> 
<li><a href="#conclusion">Conclusion </a></li>
<li><a href="#future-outlook">Future Outlook </a></li>
<li><a href="#abbreviations">Abbreviations </a></li>
<li><a href="#terms-and-definitions">Terms and Definitions</a></li>
<li><a href="#normative-references">Normative References</a></li>
</ol>
</div>
</div>

<!-- Style for screenshots to add padding to top and bottom with redoing all images in PS. -->
<style>
  img {
    margin-top: 12px;
    margin-bottom: 20px;
    border: 2px solid #bfbaba;
  }
</style>

<!-- Start of Section 1 -->

## Executive Summary

<p align="justify">Public key cryptography has long served as the cornerstone of digital trust, enabling secure identity verification, encrypted communication, and data integrity—essential elements of Internet security. Algorithms like RSA and Elliptic Curve Cryptography (ECC) form the backbone of today’s digital infrastructure, securing systems such as the federal Personal Identity Verification (PIV) framework. However, the rapid advancement of quantum computing poses a serious threat to these classical algorithms, especially for high-assurance systems reliant on public key infrastructure (PKI).</p>

<p align="justify">Quantum computing capabilities may emerge within the next 10 to 15 years—or even sooner. Recognizing this, adversaries are already conducting “harvest-now, decrypt-later” attacks, capturing encrypted data today with the expectation that future quantum machines will be able to break it. In response to this emerging risk, the federal government has taken proactive steps and finalized quantum resilient algorithms - CRYSTALS-Kyber, CRYSTALS-Dilithium, FALCON, and SPHINCS+ to transition to post-quantum cryptography (PQC). Building on these algorithms, the National Institute of Standards and Technology (NIST) has developed and released the corresponding Federal Information Processing Standards (FIPS) 203, 204, and 205 to guide their secure and standardized adoption across federal systems.</p>

<p align="justify">In alignment with this federal initiative, the General Services Administration (GSA) is collaborating with Unifyia on an experiment to explore PQC integration into the PIV credential ecosystem using 3K, 4K, ED25519, X25519, Dilithium 4, 5, and 6 algorithms. This experiment focuses on secure, quantum-resilient issuance and management of PIV credentials. The target audience are federal stakeholders involved in identity management, cybersecurity, and cryptographic policy. </p>

<p align="justify">The experiment brings together efforts from smart card and security key manufacturers to support PQC-compliant algorithms, along with PQC-capable certificate authorities and Unifyia’s PIV issuance platform. This experiment targets PIV credential issuance, authentication, digital signing, and full certificate lifecycle management using the above-listed algorithms. The transition to post-quantum cryptography is critical not only for protecting federal identity systems from future quantum threats, but also for maintaining trust in secure digital interactions across agencies, contractors, and ecosystem partners.</p>

<!-- Start of Section 2 -->

## Purpose

<p align="justify">The GSA Post-Quantum Cryptography (PQC) experiment aligns with federal priorities to prepare for the advent of quantum computing, which poses significant risks to the security of classical public key cryptographic systems. Throughout this experiment the Unifyia platform will:</p>

- Demonstrate its capability to enroll users and issue PIV credentials using a range of cryptographic NIST approved algorithms, including classical (3K and 4K), hybrid (ED25519), and quantum-resistant algorithms (Dilithium Levels 2, 3, and 5).
- Support granular lifecycle management of issued identity device, application, and credentials by performing applicable actions such as suspend, reactivate, reset PIV PIN, change PIV PIN, renew, and revoke.
- Validate the use of these credentials in authentication and digital signature workflows wherever feasible.
- Demonstrate the use of the X25519 algorithm to secure communications via Transaction Layer Security (TLS) 1.2 and TLS 1.3.
- Document key findings and lessons learned to guide subsequent PQC integration and experimentation.
- Prove that PQC is a viable, practical, and effective solution for protecting sensitive federal systems, identity data, authentication processes, and secure transactions against quantum-era threats.


<!-- Start of Section 3 -->

## Scope

<p align="justify">The scope of this experiment includes the following activities conducted using the Unifyia platform:</p>

- Onboard and enroll users.
- Operator assisted issuance of PIV credentials on
  - ZTPass on NXP P71D600 and Yubico’s YubiKey 5.7 using classical cryptographic algorithms 3K and 4K.
  - Yubico’s YubiKey 5.7 using hybrid cryptographic algorithm ED25519.
  - ZTPass on NXP P71D600 using post-quantum cryptographic algorithms Dilithium 2, Dilithium 3, and Dilithium 5. 
- Using the classical and hybrid cryptographic algorithms for authentication on the Unifyia platform and Microsoft Office 365. 
- Using the classical, hybrid, and post-quantum cryptographic algorithms for event signing. 
- Implementing TLS 1.3. with X25519 hybrid algorithm for establishing secure connections between browsers and servers.
- Lifecycle management of the issued identities. 
- Operating Systems: Windows and macOS
- Browsers: Google Chrome browser on Windows and the Safari browser on macOS (MacBooks).

<!-- Start of Section 4 -->

## Target Audience

<p align="justify">This implementation guidance is intended for Federal Identity, Credential, and Access Management (FICAM) agency technical and program managers.</p>

<!-- Start of Section 5 -->

## What is Post-Quantum Cryptography?
<p align="justify">Post-quantum cryptography refers to cryptographic algorithms that are secure against the capabilities of quantum computers while remaining compatible with classical computing infrastructure. Unlike quantum cryptography, which involves quantum communication protocols, PQC algorithms are designed to run on conventional hardware and software platforms, making them feasible for widespread deployment. The following are the key characteristics of PQC:
</p>
- Security is based on mathematical problems not efficiently solvable by quantum algorithms, such as lattice problems, multivariate equations, and hash-based functions.
- Support for traditional cryptographic use cases: authentication, key exchange, public-key encryption, and digital signatures.
- Usability on existing platforms with minimal changes to hardware or software stacks.

<!-- Start of Section 6 -->
## Why Post-Quantum Cryptography?

**Background and Motivation**

<p align="justify">Modern digital security relies heavily on public key cryptography, using algorithms like RSA (Ron Rivest, Adi Shamir, and Leonard Adleman) and ECC (Elliptic Curve Cryptography) to protect data confidentiality, however, emerging advances in quantum computing threaten to render these cryptographic systems obsolete. A sufficiently powerful quantum computer will be capable of breaking widely used asymmetric algorithms using Shor’s algorithm, exposing identity credentials, communications, and compromising system access . PQC addresses this risk by introducing new classes of algorithms believed to be secure against quantum attacks.</p>

**Quantum Threat Landscape**

<p align="justify">Quantum computing has progressed from theory to experimental prototypes, driven by global public and private investment. Although large-scale, fault-tolerant quantum computers are not yet available, practical quantum capabilities could emerge within 5 to 10 years—or sooner. This has sparked “harvest-now, decrypt-later” attacks, where encrypted data is collected today for future decryption once quantum computing matures. The potential impact on national security, critical infrastructure, and identity systems underscores the urgent need for proactive quantum-resistant measures.</p>

**The Urgency of Quantum-Resistant Security**

<p align="justify">Cryptographic transitions in complex environments like federal identity systems take years due to interdependencies, compliance mandates, and the need for uninterrupted operations. To manage this, early planning and phased adoption of post-quantum cryptography (PQC) are essential. Federal directives, including NSM-10 and OMB guidance, require agencies to inventory cryptographic assets and prepare for the shift to quantum-resistant algorithms. Early action helps mitigate risks and supports a secure, orderly migration.</p>

**Regulatory and Industry Drivers**

<p align="justify">Several federal initiatives are driving the transition to PQC:</p>

- **NIST PQC Standardization Project**: Establishes and approves PQC algorithms suitable for federal use.
- **OMB M-23-02**: Requires agencies to identify vulnerable cryptographic systems and develop PQC transition plans.
- **FIPS and NIST SP Series Updates**: Revisions to FIPS 140, NIST SP 800-78, SP 800-131A, FIPS 203, FIPS 204, and FIPS 205 will guide approved PQC use in federal environments.
- **CISA and NSA Guidance**: Reinforces the critical need for quantum readiness in national security systems.
- In the private sector, industries such as finance, healthcare, and cloud services are inclined towards PQC, recognizing the shared risk of cryptographic failure in a quantum era.

**Benefits of Early Adoption**

<p align="justify">Early adoption of PQC provides numerous advantages:</p>

- **Security resilience**: Enhances protection against both current and future adversaries.
- **Operational preparedness**: Reduces migration risks through phased implementation and testing.
- **Interoperability leadership**: Positions agencies to influence industry standards and best practices.
- **Trust preservation**: Ensures long-term reliability of digital credentials, communications, and identity assurance frameworks.

<!-- Start of Section 7 -->

## NIST and GSA PQC Standardization Efforts

<p align="justify">NIST launched the Post-Quantum Cryptography Standardization Project in 2016 to evaluate and standardize quantum-resistant public key algorithms. In July 2022, NIST announced the first group of algorithms selected for standardization:</p>

- **CRYSTALS-Kyber**: A lattice-based Key Encapsulation Mechanism (KEM) for key exchange and encryption.
- **CRYSTALS-Dilithium**: A lattice-based Digital Signature Algorithm (DSA) with strong security and efficiency.
- <b>SPHINCS<sup>+</sup></b>: A stateless hash-based signature scheme offering long-term quantum resilience.
- **FALCON**: A compact and fast lattice-based signature algorithm, suitable for constrained environments.

<p align="justify">NIST has developed Federal Information Processing Standards (FIPS) based on the above-listed algorithms and published the below standards:</p>

- FIPS 205 - Stateless Hash-Based Digital Signature Standard (SLH-DSA) is based on SPHINCS<sup>+</sup>.
- FIPS 204 - Module-Lattice-Based Digital Signature Standard (ML-DSA) derived from CRYSTALS-DILITHIUM. 
- FIPS 203 - Module-Lattice-Based Key-Encapsulation Mechanism Standard (ML-KEM) is derived from the CRYSTALS-KYBER KEM.

<p align="justify">The use of post-quantum cryptographic (PQC) algorithms in issuing PIV (Personal Identity Verification) credentials is an emerging focus in federal cybersecurity. Although there are no public implementations yet, key federal agencies like GSA, NIST, and the NCCoE are laying the groundwork through research, guidance, and partnerships with industry. These efforts are aimed at preparing federal systems for a smooth transition once PQC standards are finalized.  </p>

<p align="justify">A notable example of forward-looking collaboration is the pilot program between Unifyia and GSA. This initiative explores the issuance of PQC-based PIV credentials, combining Unifyia’s flexible identity platform with NIST’s evolving cryptographic standards.  </p>

<p align="justify">In this experiment, Unifyia has tested with CRYSTALS-DILITHIUM 2,3, and 5 algorithms.
This pilot serves as a testing ground for implementing quantum-resistant algorithms within PIV systems and aims to validate the integration, performance, and security of PQC within existing federal identity frameworks. This work highlights the government’s commitment to future-proofing identity systems against quantum threats through early experimentation and public-private collaboration.  
 </p>

<!-- Start of Section 8 -->

## Technical Architecture for GSA PQC Experiment

<p align="justify">The Unifyia platform showcases the ability to issue PIV identities across various identity devices using both classical and quantum-safe cryptographic algorithms, enabled by its modular and standards-compliant architecture. This section outlines the essential components of the post-quantum cryptography (PQC) architecture, including the selected algorithms, supporting infrastructure and tools, and the credential issuance and management workflows implemented during the experiment.</p> 
### System Components

<img src="{{site.baseurl}}/assets/unifyia-pqc/1-system-components.png" alt="System Components">

<p align="justify">The implementation of a PQC system requires a cohesive integration of multiple systems and components that collectively support the configuration, issuance, management, authentication, and usage of quantum-resistant credentials. The following are the core components of the PQC-enabled PIV system:</p>

**Certificate Authority**  
<p align="justify">Certificate Authorities play a central role in issuing, validating, and managing digital certificates that incorporate PQC algorithms. They support the issuance of classical, hybrid, and PQC certificate profiles (classical + PQC) in compliance with FIPS 201, NIST SP 800-78-5, FIPS 140-3 cryptographic module validations and emerging PQC guidance including FIPS 203, 204, and 205. Certificate policies should support full lifecycle management including issuance, renewal, revocation, escrow, and expiration while maintaining cryptographic agility for future upgrades.
</p>

**Firmware Support**
<p align="justify">Smart cards and security tokens are critical for credential storage and cryptographic operations. To support PQC, smart cards and security keys must undergo substantial firmware and PIV applet upgrades while adhering to FIPS 140-3 or equivalent cryptographic module validation standards. These updates are critical for the integration of NIST-approved quantum-resistant algorithms, ensuring the hardware can handle larger key sizes, and more complex signature schemes while maintaining compliance with evolving federal cryptographic requirements, including those driven by NIST’s post-quantum transition roadmap and FIPS 203, 204, and 205. Firmware and applet-level support for PQC is foundational to issuing and managing both hybrid and quantum-safe PIV credentials, and is critical for maintaining interoperability with future federal identity ecosystems.</p>

**Credential Management System (CMS)**

<img src="{{site.baseurl}}/assets/unifyia-pqc/2-implementation-framework.png" alt="Credential Management System">

<p align="justify">The foundation of this PQC implementation is a centralized Credential Management System (CMS) designed to issue and manage PIV credentials with integrated post-quantum cryptographic capabilities. The CMS must have the capability to tightly integrate with key components, including a certificate authority for issuing certificates, a hardware security module (HSM) for secure key storage, and directory services for user management. It oversees the full identity lifecycle covering enrollment, issuance, revocation, renewal, and support for key use cases such as authentication, digital signing, and encryption while maintaining compliance with federal standards like FIPS 201, NIST SP 800-78-5, and 800-73-5. To enable a smooth transition toward quantum-resistant security, the system must also support classical and hybrid certificate profiles to ensure backward compatibility with existing infrastructure.</p>

**Authentication Service Infrastructure**
<p align="justify">The identity and access management service supporting the credential management system for authentication and verification of users and their issued identities must support PQC algorithms while maintaining backward compatibility with classical (e.g., RSA, ECC) credentials as part of a hybrid cryptographic environment.    </p>

- Serve as the bridge between identity credentials and secure enterprise services.
- It must accommodate larger certificates, new OIDs, signature algorithms, and custom verification flows.
- Parse and validate X.509 certificates (e.g., those using hybrid, Dilithium per FIPS 204)
- Handle X.509 extensions or composite certificate fields.
- Validate certificate chains issued by CAs using post-quantum keys.
- Adjust the underlying cryptographic provider (e.g., Bouncy Castle or OpenJDK’s JCE) to accept and verify larger public keys and signatures (PQC algorithms can exceed 1KB–2KB)
- Ensure audit logs capture that includes
  - The certificate type (classical vs. hybrid vs. PQC).
  - The authentication success/failure reason.
  - The cryptographic algorithm used.

**Web and Application Servers**
<p align="justify">Web servers (e.g., NGINX) and application servers play a critical role in the implementation of PQC by serving as the interface between end users, identity services, and backend systems. Their primary responsibility is to enable secure communication and credential validation workflows that incorporate both classical and quantum-resistant cryptographic algorithms. It must support the X25519 hybrid algorithm for establishing secure connections using TLS 1.3. If mutual TLS is used for client certificate authentication, configure NGINX, Apache, or reverse proxy to support TLS hybrid modes or post-quantum TLS, using libraries such as OpenSSL with PQC support.</p>

**Client Platforms – Operating Systems and Browsers**
<p align="justify">To fully support PQC, both operating systems (OS)  and browsers must undergo significant updates and enhancements. The development of infrastructure and tools that can understand both PQC, hybrid, and classical certificate formats and access certificates across both server-side infrastructure, (like identity management systems, directory services, hardware security modules) and client-side devices (like laptops, phones, browsers, smart cards) requires a coordinated effort between IT administrators, security teams, and software/hardware vendors. This collaboration is essential to ensure that all systems are accessible, can report certificate data, and work across different platforms (Windows, Linux, and macOS). These changes are essential to enable PQC-based digital identity verification, TLS communication, and certificate validation in a secure, scalable, and standards-compliant manner.</p>

<p align="justify">OS system environments such as Linux, Windows, and macOS must integrate PQC-compatible cryptographic libraries to support identity usage, middleware interaction, and driver functionality. They must also provide middleware that enables PQC-enabled smart cards and security keys to support certificate-based login (CBA).</p>

<p align="justify">Browsers such as Chrome and Safari that are leveraged for secure identity transactions and certificate-based authentication workflows must support discovering, inventorying, cataloguing, and tracking all PQC X.509 digital certificates used for authentication, encryption, and digital signing across an organization's infrastructure and endpoints. They must be able to handle large PQC signatures and hybrid certificate chains.</p>

**Federal and Enterprise Applications**
<p align="justify">Federal and enterprise applications are integral components of the PQC ecosystem by serving as secure access points that validate quantum-resistant credentials via Certificate-Based Authentication (CBA). They must be redesigned with cryptographic agility, capable of dynamically selecting between classical and post-quantum algorithms (e.g., RSA, Dilithium) based on policy requirements or client capabilities. They must be equipped to process PQC-enabled certificates, support hybrid cryptographic profiles, and interact with modern middleware and identity services all while upholding stringent federal compliance requirements and ensuring seamless user access in a post-quantum world.  
</p>
<p align="justify">To sum up, establishing a quantum-resilient cryptographic infrastructure necessitates coordinated enhancements across all components of the identity and authentication ecosystem. Each component must support hybrid and post-quantum algorithms to ensure secure interoperability, compliance with emerging standards, and long-term resilience against quantum-capable adversaries.</p>

### Cryptographic Algorithm Support

<img src="{{site.baseurl}}/assets/unifyia-pqc/3-algorithms-tested.png" alt="Cryptographic Algorithms">

<p align="justify">The technical architecture for implementing PQC has been designed with comprehensive support for a broad range of cryptographic algorithms to ensure flexibility, interoperability, and future readiness. This includes NIST-approved quantum-resistant algorithms such as ML-DSA  (Dilithium 2, 3, and 5), hybrid algorithms like Ed25519, and classical algorithms such as RSA 2048-bit (2K), RSA 3072-bit (3K), and RSA 4096-bit (4K). It is recommended that solution providers must fully support all of these algorithms across their certificate issuance, identity management, and authentication workflows. This cryptographic agility is essential for maintaining secure operations during and after the migration to PQC.</p>

<img src="{{site.baseurl}}/assets/unifyia-pqc/4-traditional-vs-pqc-piv.png" alt="Traditional PIV vs PQC PIV">

<p align="justify">The traditional and PQC PIV maintain the same visual layout and adhere to standard PIV front topology. They differ significantly in cryptographic capabilities. The Traditional PIV card supports logical identity credentials as per FIPS 800-73-5 and relies on classical algorithms such as RSA with 2K and 3K key sizes. It uses existing firmware and applets without support for post-quantum algorithms.</p>

<p align="justify">In contrast, the PQC PIV card represents a modernized implementation aligned with FIPS 203, featuring upgraded firmware and PIV applets that support post-quantum signature algorithms like Dilithium 2, 3, and 5. It incorporates PQC-enabled certificate chains, uses larger key sizes with updated OIDs, and supports authentication protocols designed to be resilient against quantum computing threats. This evolution ensures that PIV credentials can transition securely into a quantum-safe future without altering their physical form or disrupting existing workflows. </p>

### GSA PQC Experiment Infrastructure and Tools

<p align="justify">To evaluate the practical feasibility of integrating PQC into the PIV ecosystem, an experimental infrastructure was established. The experiment leveraged a suite of tools and technologies to simulate feasible conditions and test emerging quantum-resistant algorithms. These included hardware, software, certificate authorities, cryptographic libraries, and applications for certificate issuance, lifecycle management, and authentication services.  </p>

<p align="justify">The primary objective of this experiment was to evaluate the current maturity of industry tools and establish a baseline for identifying implementation gaps and necessary system upgrades. Given the limited support for post-quantum algorithms in existing firmware, operating systems, and browsers, the experiment focused on a combination of classical and quantum-resistant algorithms, including RSA 3K, RSA 4K, Ed25519, and CRYSTALS-Dilithium (specifically variants 2, 3, and 5). Two hardware platforms, ZTPass on NXP P71D600 and YubiKey 5.7 were selected for testing, and multiple rounds of credential issuance and validation were performed using various cryptographic configurations.</p>

<p align="justify">The section below details the components and configurations that made the PQC experiment possible, offering a blueprint for future pilots and production implementations.</p>

<table>
<tbody>
<tr>
<th scope='col' width="25%">
<strong>Tools and Technologies</strong>
</th>
<th scope='col' width="25%">
<strong>Product Version</strong>
</th>
<th scope='col' width="50%">
<strong>Description</strong>
</th>
</tr>
<tr>
<td>
<strong>Certificate Authority</strong>
</td>
<td>
EJBCA 8.x and 9.x
</td>
<td>
EJBCA was selected as it offered the opportunity to configure certificate profiles and policies required for RSA (3K, 4K), ED25519, and Dilithium (levels 2, 3, and 5).
</td>
</tr>
<tr>
<td>
<strong>Identity Issuance and Management</strong>
</td>
<td>
Unifyia Platform v2.1.1. (Beta Version)
</td>
<td>
Uniyfia platform was selected for the PIV identity issuance and management as it supports the issuance of PIV certificates with multiple cryptographic algorithms.
</td>
</tr>
<tr>
<td rowspan="2">
<strong>Smart Card and Token Devices</strong>
</td>
<td>
ZTPass on NXP P71D600
</td>
<td>
<p>Natively supports RSA 3K and RSA 4K.</p>
<p>Smart card vendor NXP contributed to the experiment by releasing a beta firmware upgrade for the ZTPass on NXP P71D600, enabling support for post-quantum cryptographic algorithms Dilithium 2, 3, and 5. This enhanced firmware was made available specifically to facilitate PQC experimentation efforts.</p>
<p>The PIV applet was updated to support Dilithium 2, 3, and 5.</p>
</td>
</tr>
<tr>
<td>
Yubico's YubiKey 5.7
</td>
<td>
Natively supports RSA 3K, RSA 4K, and Ed25519.
</td>
</tr>
<tr>
<td>
<strong>Middleware</strong>
</td>
<td>
YubiKey Smart Card Minidriver (YKMD)
</td>
<td>
It is a small, lightweight driver that builds on top of the Windows Inbox Smart Card Minidriver (Windows Minidriver) and enables Windows or macOS to write directly to the PIV module. Yubico developed this middleware for Windows and macOS operating systems as they did not natively support 3K, 4K, and Ed25519 algorithms.
</td>
</tr>
<tr>
<td rowspan="2">
<strong>Browsers and Operating Systems</strong>
</td>
<td>
Google Chrome on Windows
</td>
<td rowspan="2">
Current versions of Google Chrome on Windows 11 machines and Safari on macOS were used for credential issuance and authentication.
</td>
</tr>
<tr>
<td>
Safari on macOS
</td>
</tr>
<tr>
<td>
<strong>Web/ Application Server </strong><strong>- NGNIX</strong>
</td>
<td>
&nbsp;
</td>
<td>
Full chain and private key are uploaded to NGNIX. &nbsp;
</td>
</tr>
<tr>
<td>
<strong>Bouncy Castle</strong>
</td>
<td>
1.73, 1.79
</td>
<td>
For RSA 3K and 4K, and Ed25519 Bouncy Castle 1.79 was used. Bouncy Castle was downgraded from 1.79 to 1.73 to support CSR generation and CSR signature verification using Dilithium algorithms.
</td>
</tr>
<tr>
<td>
<strong>Transaction Layer Security (TLS)</strong>
</td>
<td>
TLS 1.2/1.3 with X25519
</td>
<td>
The certificate was configured to use TLS 1.2 or 1.3 with X25519 cryptographic algorithms.
</td>
</tr>
</tbody>
</table>

<!-- Start of Section 9 -->

## Implementation Details

<p align="justify">This section explains the required configurations to issue and manage the PIV identity using the Unifyia platform. </p>

### Configurations 

<ul>
<li>EJBCA must be properly configured to support the issuance of PIV credentials using the specific algorithms required for this experiment. As illustrated in the image below, the authentication certificate profile has been tailored to include the designated algorithms. Similar configurations have been configured to all other relevant certificate profiles to ensure consistency and support for the experimental use cases. </li>
<img src="{{site.baseurl}}/assets/unifyia-pqc/5-ejbca-certificate-profiles.png" alt="EJBCA Certificate Profile Configurations">
<li>Separate groups, two for classical, one for hybrid, and three for Dilithium, were created for issuing credentials using hybrid algorithms and post-quantum cryptographic (PQC) algorithms. </li>
<img src="{{site.baseurl}}/assets/unifyia-pqc/6-groups.png" alt="Groups Creation">
<li>Device profiles must be configured for NXP P71D600 and YubiKey 5.7 devices.</li>
<img src="{{site.baseurl}}/assets/unifyia-pqc/7-device-profiles.png" alt="Device Profiles Creation">
<li>Workflows were configured with necessary parameters, particularly the supported cryptographic algorithms and key sizes, to enable the successful issuance of PIV credentials for each group created. As part of this experiment, the following workflows were created and executed:

<img src="{{site.baseurl}}/assets/unifyia-pqc/8-workflow-config.png" alt="Workflow Configuration">
<ul> 
<li>ZTPass on NXP P71D600 Issuance Workflows: Three separate workflows were configured to issue PIV credentials using Dilithium 2, Dilithium 3, and Dilithium 5 quantum-resistant algorithms.</li>
<img src="{{site.baseurl}}/assets/unifyia-pqc/9-workflow-dilithium.png" alt="Workflow - Certificate Configuration with Dilithium 2, 3, and 5 Algorithms">
<li>YubiKey 5.7 Issuance Workflows: Three separate workflows were configured to issue PIV credentials using RSA 3K, RSA 4K, and Ed25519 algorithms.</li>
<img src="{{site.baseurl}}/assets/unifyia-pqc/10-workflow-rsa.png" alt="Workflow - Certificate Configuration with RSA 3K and 4K Algorithms">
<img src="{{site.baseurl}}/assets/unifyia-pqc/11-workflow-ed25519.png" alt="Workflow - Certificate Configuration with Ed25519 Algorithm">
</ul>
</li>
</ul>

### Enrollment and Credential Issuance

<p align="justify">This section describes the steps to enroll and issue credentials using the Unifyia platform.    </p>

- Onboard a user
- Enrollment
  - User Information Capture
  - Face Image Capture
  - Fingerprints Capture
  - Signature Capture
  - Summary
- Background Investigation and Fingerprints Verification Result Upload
- Approval
- Issuance
  - ZTPass on NXP P71D600
    - Granular Lifecycle Management of the Issued Credentials
  - YubiKey 5.7
    - Granular Lifecycle Management of the Issued Credentials

**Onboard a User** 
<p align="justify">The first step is to onboard a user with basic information and assign a group.</p>

<img src="{{site.baseurl}}/assets/unifyia-pqc/12-onboard-user.png" alt="Onboard User">


**Enrollment** 
<p align="justify">The next step is to complete the enrollment which consists of multiple steps based on the workflow configuration in compliance with the FIPS 201 standard. The following images illustrate the typical enrollment process for the issuance of PIV credentials. It must be noted that a user for each workflow configured was enrolled for issuing identities with different algorithms. For example, for the group Dilithium_2, a workflow PQC_Dilithium was created and users were issued identities on the ZTPass on NXP P71D600. Similarly, for the other groups as well. In total 6 users were enrolled and issued identities and multiple use cases were tested. </p>

<p align="justify">The next phase is to complete the enrollment for the PIV identity issuance which consists of multiple steps based on the workflow configuration in compliance with the FIPS 201 standard. The images that follow depict the typical enrollment steps. For each configured workflow, a user was enrolled to issue credentials using different cryptographic algorithms. For instance, the group Dilithium_2 had an associated workflow named PQC_Dilithium, through which credentials were issued on the ZTPass on NXP P71D600 smart card using the Unifyia platform. Similar processes were followed for other groups. In total, six users were enrolled and issued credentials and multiple use cases were tested using the issued PIV identities during the experiment.
</p>

 **User Information Capture**: In the information wizard, capture all the mandatory and optional data as required to issue a PIV ID.  
<img src="{{site.baseurl}}/assets/unifyia-pqc/13-information-capture.png" alt="User Information Capture">

 **Face Image Capture**: You can capture a live face image or upload a photo stored locally on your device.  

<img src="{{site.baseurl}}/assets/unifyia-pqc/14-face-capture.png" alt="User Face Image Capture">

 **Fingerprints Capture**: You can capture 2, 4, or 10 fingerprints in flat or rolled format based on the workflow configuration.  

<img src="{{site.baseurl}}/assets/unifyia-pqc/15-fingerprints-capture.png" alt="User Fingerprints Capture">

 **Signature Capture**: You can capture the user’s signature.  

<img src="{{site.baseurl}}/assets/unifyia-pqc/16-signature-capture.png" alt="User Signature Capture">

**Summary**: The summary page displays the enrollment details for a final review before submitting. 

<img src="{{site.baseurl}}/assets/unifyia-pqc/17-enrollment-summary.png" alt="Enrollment Summary">

**Background Investigation and Fingerprint Verification Result Upload**
<p align="justify">Once the enrollment data is submitted and if the workflow assigned includes an approval process, the user must undergo a thorough background investigation and fingerprint verification. The Unifyia platform allows for uploading the results of these checks, after which the record proceeds to the approval stage.</p>

<img src="{{site.baseurl}}/assets/unifyia-pqc/18-background-investigation.png" alt="User Background Investigation Results Upload">

**Approval**
<p align="justify">The approver needs to review the enrollment data and investigation results and approve the user enrollment. Once approved, the user can be issued PIV credentials. </p>

<img src="{{site.baseurl}}/assets/unifyia-pqc/19-approval.png" alt="Enrollment Approval">

**Issuance**

<p align="justify">The images that follow depict the typical issuance process and lifecycle management options based on the type of the identity device selected.</p>

<img src="{{site.baseurl}}/assets/unifyia-pqc/20-select-identity-device.png" alt="Select Device for Issuance">

**Yubikey 5.7** 

<img src="{{site.baseurl}}/assets/unifyia-pqc/21-issue-yubikey.png" alt="YubiKey 5.7 Issuance">
<img src="{{site.baseurl}}/assets/unifyia-pqc/22-yubikey-issuance-progress.png" alt="YubiKey 5.7 Issuance Progress">

**Granular Lifecycle Management of the Issued Credentials on YubiKey 5.7**
<p align="justify">The Unifyia platform enables both operators and users to independently manage lifecycle actions related to the identity device (YubiKey 5.7), the PIV application, and the issued credentials such as Authentication, Card Authentication, Digital Signature, and Key Management certificates. </p>

<img src="{{site.baseurl}}/assets/unifyia-pqc/23-yubikey-lcm.png" alt="YubiKey Lifecycle Management">

**ZTPass on NXP P71D600**
<img src="{{site.baseurl}}/assets/unifyia-pqc/24-issue-ztpass-smartcard.png" alt="Issue ZTPass on NXP P71D600">
<img src="{{site.baseurl}}/assets/unifyia-pqc/25-ztpass-issuance-progress.png" alt="ZTPass on NXP P71D600 Issuance Progress">

**Granular Lifecycle Management of the Issued Credentials on ZTPass on NXP P71D600**

<p align="justify">The Unifyia platform enables both operators and users to independently manage lifecycle actions related to the identity device (ZTPass on NXP P71D600), the PIV application, and the issued credentials such as Authentication, Card Authentication, Digital Signature, and Key Management certificates. </p>

<img src="{{site.baseurl}}/assets/unifyia-pqc/26-ztpass-lcm.png" alt="ZTPass Lifecycle Management">

<!-- Start of Section 10 -->

## GSA PQC Experiment Results

<p align="justify">The succeeding sections capture the experiment results for the issued PIV credentials on ZTPass on NXP P71D600 and YubiKey 5.7 devices with multiple types of cryptographic algorithms.  </p>

### ZTPass on NXP P71D600 Experiment Results

<table>
<thead>
<th scope='col' rowspan="2">
<strong>Algorithm</strong>
</th>
<th scope='col' rowspan="2">
<strong>Time for Issuance (Approx)</strong>
</th>
<th scope='col' rowspan="2">
<strong>Operating Systems and Browsers</strong>
</th>
<th scope='col' rowspan="2">
<strong>Actions</strong>
</th>
<th scope='col'>
<strong>Applications</strong>
</th>
<tr>
<th scope='col'>
<strong>Unifyia Platform</strong>
</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="3">
<strong>RSA 3K</strong>
</td>
<td rowspan="3">
2.5 Minutes
</td>
<td rowspan="3">
<p>Windows (Google Chrome)</p>
<p>macOS (Safari)</p> 
</td>
<td>
Authentication
</td>
<td rowspan="2">
Could not be tested due to lack of technology support.
</td>
</tr>
<tr>
<td>
Digital Signature
</td>
</tr>
<tr>
<td>
PQC Credential Lifecycle Management
</td>
<td>
All lifecycle actions worked as expected on the Unifyia platform.
</td>
</tr>
<tr>
<td rowspan="3">
<strong>RSA 4K</strong>
</td>
<td rowspan="3">
3 Minutes
</td>
<td rowspan="3">
<p>Windows (Google Chrome)</p>
<p>macOS (Safari)</p>
</td>
<td>
Authentication
</td>
<td rowspan="2">
Could not be tested due to lack of technology support.
</td>
</tr>
<tr>
<td>
Digital Signature
</td>
</tr>
<tr>
<td>
PQC Credential Lifecycle Management
</td>
<td>
All lifecycle actions worked as expected on the Unifyia platform.
</td>
</tr>
<tr>
<td rowspan="3">
<strong>ED25519</strong>
</td>
<td rowspan="3">
1.45 Minutes
</td>
<td rowspan="3">
<p>Windows (Google Chrome)</p>
<p>macOS (Safari)</p>
</td>
<td>
Authentication
</td>
<td rowspan="2">
Could not be tested due to lack of technology support.
</td>
</tr>
<tr>
<td>
Digital Signature
</td>
</tr>
<tr>
<td>
PQC Credential Lifecycle Management
</td>
<td>
All lifecycle actions worked as expected on the Unifyia platform.
</td>
</tr>
<tr>
<td rowspan="3">
<strong>Dilithium 2</strong>
</td>
<td rowspan="3">
2 Minutes
</td>
<td rowspan="3">
<p>Windows (Google Chrome)</p>
<p>macOS (Safari)</p>
</td>
<td>
Authentication
</td>
<td>
Could not be tested due to lack of technology support.
</td>
</tr>
<tr>
<td>
Digital Signature
</td>
<td>
<p><strong>Success</strong></p>
<p>The document signing and verification was tested on the Unifyia platform.</p>
</td>
</tr>
<tr>
<td>
PQC Credential Lifecycle Management
</td>
<td>
All lifecycle actions worked as expected on the Unifyia platform.
</td>
</tr>
<tr>
<td rowspan="3">
<strong>Dilithium 3</strong>
</td>
<td rowspan="3">
3 - 4 Minutes
</td>
<td rowspan="3">
<p>Windows (Google Chrome)</p>
<p>macOS (Safari)</p>
</td>
<td>
Authentication
</td>
<td>
Could not be tested due to lack of technology support.
</td>
</tr>
<tr>
<td>
Digital Signature
</td>
<td>
<p><strong>Success</strong></p>
<p>The document signing and verification was tested on the Unifyia platform.</p>
</td>
</tr>
<tr>
<td>
PQC Credential Lifecycle Management
</td>
<td>
All lifecycle actions worked as expected on the Unifyia platform.
</td>
</tr>
<tr>
<td rowspan="3">
<strong>Dilithium 5</strong>
</td>
<td rowspan="3">
3 - 4 Minutes
</td>
<td rowspan="3">
<p>Windows (Google Chrome)</p>
<p>macOS (Safari)</p>
</td>
<td>
Authentication
</td>
<td>
Could not be tested due to lack of technology support.
</td>
</tr>
<tr>
<td>
Digital Signature
</td>
<td>
<p><strong>Success</strong></p>
<p>The document signing and verification was tested on the Unifyia platform.</p>
</td>
</tr>
<tr>
<td>
PQC Credential Lifecycle Management
</td>
<td>
All lifecycle actions worked as expected on the Unifyia platform.
</td>
</tr>
</tbody>
</table>

### ZT Pass on NXP Lessons Learned

<table>
<thead>
<th scope="col">
<strong>Algorithm</strong>
</th>
<th scope="col">
<strong>Experiment Findings for NXP P71D600</strong>
</th>
</thead>
<tbody>
<tr>
<td>
<strong>RSA 3K</strong>
</td>
<td rowspan="3">
<ul>
<li>Issuance was successful.</li>
<li>Due to the absence of native support in the Windows and macOS operating systems, the associated use cases could not be tested. </li>
<li>Additionally, no known middleware similar to YubiKey Minidriver (YKMD), currently supports smart cards utilizing 3K, 4K, and ED25519 algorithms.</li>
</ul>
</td>
</tr>
<tr>
<td>
<strong>RSA 4K</strong>
</td>
</tr>
<tr>
<td>
<strong>Ed25519</strong>
</td>
</tr>
<tr>
<td>
<strong>Dilithium 2, 3, 5</strong>
</td>
<td>
<ul>
<li>Issuance was successful.</li>
<li>Windows and macOS operating systems nor any middleware offer native support for the Dilithium algorithms, preventing the use of Dilithium-based certificates for authentication purposes. </li>
<li>Document signing and verification was successfully tested on the Unifyia platform using the Dilithium 2, 3, and 5 algorithms. </li>
<li>Other use cases could not be tested due to the absence of operating system-level or browser support for post-quantum cryptographic algorithms.</li>
</ul>
</td>
</tr>
</tbody>
</table>

### YubiKey Experiment Results

<table>
<thead>
<th scope='col' rowspan="2">
<strong>Algorithm</strong>
</th>
<th rowspan="2" scope='col'>
<strong>Time for Issuance (Approx)</strong>
</th>
<th rowspan="2" scope='col'>
<strong>Operating Systems and Browsers</strong>
</th>
<th rowspan="2" scope='col'>
<strong>Actions</strong>
</th>
<th colspan="3" scope='col'>
<strong>Applications</strong>
</th>
<tr>
<th scope='col'>
<strong>Unifyia Platform</strong>
</th>
<th colspan="2" scope='col'>
<strong>Microsoft Office 365</strong>
</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="3">
<strong>RSA 3K</strong>
</td>
<td rowspan="3">
2.5 Minutes
</td>
<td rowspan="3">
<p>Windows (Google Chrome)</p>
<p>macOS (Safari)</p>
</td>
<td>
Authentication
</td>
<td>
<strong>Success</strong>
</td>
<td colspan="2">
<strong>Success</strong>
</td>
</tr>
<tr>
<td>
Digital Signature
</td>
<td>
<p><strong>Success</strong> </p> 
<p>The document signing and verification was tested on the Unifyia platform.</p> 
</td>
<td colspan="2">
Could not be tested due to lack of technology support.
</td>
</tr>
<tr>
<td>
PQC Credential Lifecycle Management
</td>
<td>
All lifecycle actions worked as expected on the Unifyia platform. 
</td>
<td colspan="2">
Not Applicable
</td>
</tr>
<tr>
<td rowspan="3">
<strong>RSA 4K</strong>
</td>
<td rowspan="3">
3 Minutes
</td>
<td rowspan="3">
<p>Windows (Google Chrome)</p>
<p>macOS (Safari)</p>
</td>
<td>
Authentication
</td>
<td>
<strong>Success</strong>
</td>
<td colspan="2">
<strong>Success</strong>
</td>
</tr>
<tr>
<td>
Digital Signature
</td>
<td>
<p><strong>Success</strong></p>
<p>The document signing and verification was tested on the Unifyia platform.</p>
</td>
<td colspan="2">
Could not be tested due to lack of technology support.
</td>
</tr>
<tr>
<td>
PQC Credential Lifecycle Management
</td>
<td>
All lifecycle actions worked as expected on the Unifyia platform.
</td>
<td colspan="2">
Not Applicable
</td>
</tr>
<tr>
<td rowspan="3">
<strong>ED25519</strong>
</td>
<td rowspan="3">
1.45 Minutes
</td>
<td rowspan="3">
<p>Windows (Google Chrome)</p>
<p>macOS (Safari)</p>
</td>
<td>
Authentication
</td>
<td colspan="3" rowspan="2">
Could not be tested due to lack of technology support.
</td>
</tr>
<tr>
<td>
Digital Signature
</td>
</tr>
<tr>
<td>
PQC Credential Lifecycle Management
</td>
<td>
All lifecycle actions worked as expected on the Unifyia platform.
</td>
<td colspan="2">
Not Applicable
</td>
</tr>
<tr>
<td rowspan="3">
<strong>Dilithium 2</strong>
</td>
<td rowspan="3">
2 Minutes
</td>
<td rowspan="3">
<p>Windows (Google Chrome)</p>
<p>macOS (Safari)</p>
</td>
<td>
Authentication
</td>
<td colspan="3" rowspan="2">
Could not be tested due to lack of technology support.
</td>
</tr>
<tr>
<td>
Digital Signature
</td>
</tr>
<tr>
<td>
PQC Credential Lifecycle Management
</td>
<td>
All lifecycle actions worked as expected on the Unifyia platform. 
</td>
<td colspan="2">
Not Applicable
</td>
</tr>
<tr>
<td rowspan="3">
<strong>Dilithium 3</strong>
</td>
<td rowspan="3">
3 - 4 Minutes
</td>
<td rowspan="3">
<p>Windows (Google Chrome)</p>
<p>macOS (Safari)</p>
</td>
<td>
Authentication
</td>
<td colspan="3" rowspan="2">
Could not be tested due to lack of technology support.
</td>
</tr>
<tr>
<td>
Digital Signature
</td>
</tr>
<tr>
<td>
PQC Credential Lifecycle Management
</td>
<td>
All lifecycle actions worked as expected on the Unifyia platform. 
</td>
<td colspan="2">
Not Applicable
</td>
</tr>
<tr>
<td rowspan="3">
<strong>Dilithium 5</strong>
</td>
<td rowspan="3">
3 - 4 Minutes
</td>
<td rowspan="3">
<p>Windows (Google Chrome)</p>
<p>macOS (Safari)</p>
</td>
<td>
Authentication
</td>
<td colspan="3" rowspan="2">
Could not be tested due to lack of technology support.
</td>
</tr>
<tr>
<td>
Digital Signature
</td>
</tr>
<tr>
<td>
PQC Credential Lifecycle Management
</td>
<td colspan="2">
All lifecycle actions worked as expected on the Unifyia platform.
</td>
<td>
Not Applicable
</td>
</tr>
</tbody>
</table>

### YubiKey Lessons Learned

 <table>
<thead>
<th scope='col'>
<strong>Algorithm</strong>
</th>
<th scope='col'>
<strong>Experiment Findings for YubiKey 5.7</strong>
</th>
</thead>
<tbody>
<tr>
<td>
<strong>RSA 3K and 4K</strong>
</td>
<td>
<ul>
<li>Issuance was successful.</li>
<li>Certificate-based authentication (CBA)
<ul>
<li><strong>Windows</strong>: CBA Successful using the YubiKey Minidriver on the Unifyia platform and Microsoft Office 365</li>
<li><strong>macOS</strong>: Failed due to the lack of support from YubiKey Minidriver.</li>
</ul>
</li>
<li>Digital Signature Functionality
<ul>
<li><strong>Windows</strong>: Document signing and verification was tested successfully on the Unifyia platform on Windows OS.</li>
<li><strong>macOS</strong>: Failed due to the lack of technology support from YubiKey Minidriver.</li>
</ul>
</li>
<li>Email Signing Limitation: Email signing in Microsoft Outlook for Office 365 failed on both Windows and macOS due to the absence of native support for the issued cryptographic algorithm.</li>
</ul>
</td>
</tr>

<tr>
<td>
<strong>Ed25519</strong>
</td>
<td>
<ul>
<li>Issuance was successful.</li>
<li>However, during authentication, the issued certificate could not be imported into Windows or macOS due to the YubiKey Minidriver's lack of native support for the Ed25519 algorithm.</li>
<li>Additionally, native functionality for performing digital signatures using Ed25519 is not currently supported on either operating systems or browsers.</li>
</ul>
</td>
</tr>
<tr>
<td>
<strong>Dilithium 2, 3, 5</strong>
</td>
<td>
YubiKey 5.7 does not support the Dilithium algorithm.
</td>
</tr>
</tbody>
</table>
  
### Communication and Transaction Security

<img src="{{site.baseurl}}/assets/unifyia-pqc/27-tls-usecase-x25519.png" alt="TLS Use Case with X25519">
<p align="justify">To enable secure communications and transactions over TLS 1.2 and TLS 1.3, the cipher suites were added in the NGINX server config file to use X25519 algorithm.</p>
<img src="{{site.baseurl}}/assets/unifyia-pqc/28-tls1.png" alt="TLS Use Case with X25519">
<p align="justify">The image presented below displays that the X25519 was used during secure communications between NGINX and browser. 172.18.0.15 is NGINX server container IP address and 183.82.106.20 is public IP address (from browser). The NGINX server uses x25519 for key exchange.</p>
<img src="{{site.baseurl}}/assets/unifyia-pqc/29-tls2.png" alt="TLS Use Case with X25519">
<p align="justify">The below image clearly displays that the authentication service (IP Address 172.18.0.3) successfully communicates using x25519 algorithm with the browser (client). </p>
<img src="{{site.baseurl}}/assets/unifyia-pqc/30-tls3.png" alt="TLS Use Case with X25519">
<p align="justify">The below image clearly displays that the authentication service (IP Address 172.18.0.3) communicates using x25519 algorithm with the internal microservices (e.g., usermanagement). </p>
<img src="{{site.baseurl}}/assets/unifyia-pqc/31-tls4.png" alt="TLS Use Case with X25519">
<p align="justify">These results confirm that there is a feasibility to use modern cryptographic algorithms in the communication channels. The channel becomes significantly secure and resistant to potential breaches, aligning with the cryptographic agility goals of the PQC enabled PIV infrastructure.</p>

<!-- Start of Section 11 -->

## Migration Strategies for PQC Algorithms in the PIV Ecosystem

- **PQC Migration for PIV Credentials:** 
<p align="justify">The move to post-quantum cryptography (PQC) is becoming essential to protect PIV credentials from future quantum threats. While full-scale implementation is still developing, agencies should start by assessing existing systems, testing PQC in small pilots, and planning to issue hybrid credentials that support both classical and quantum-safe algorithms.</p> 

- **Interoperability with Existing Systems:** 
<p align="justify">Many systems that rely on PIV cards such as Physical Access Control Systems (PACS) and logical access tools are built around legacy cryptography. Upgrading these systems to handle PQC will take time and coordination with vendors. Testing for compatibility and gradually updating readers, smart cards, applets, software, and validation services is key to a smooth transition.</p> 

- **Crypto Agility and Algorithm Flexibility:** 
<p align="justify">Crypto agility means building systems that can switch to new cryptographic algorithms easily. Agencies should design PIV infrastructure to support multiple algorithms and allow secure negotiation between old and new cryptographic methods. This approach allows flexibility as standards continue to evolve.</p> 

- **Ensuring Backward Compatibility:** 
<p align="justify">During the transition, it’s important that PIV systems continue to support older credentials and technologies. Hybrid credentials and dual-system support help maintain functionality while new systems are rolled out. This prevents disruptions in identity verification during the migration.</p> 

<!-- Start of Section 12 -->

## Conclusion 

<p align="justify">The transition to a post-quantum cryptography (PQC) enabled PIV ecosystem marks a significant step toward future-proofing federal identity systems against emerging quantum threats. This experiment has demonstrated that while promising progress is being made through pilot implementations, the path to full adoption will necessarily be incremental. Encouraging results have been achieved in issuing and using PQC-enabled credentials on modern hardware platforms with vendor supported upgrades, validating their potential to support high-assurance digital signature use case as shown with this experiment.</p>

<img src="{{site.baseurl}}/assets/unifyia-pqc/32-implementation-gaps.png" alt="Implementation Gaps">

<p align="justify">However, the experiment also highlighted critical gaps that must be addressed to enable broader deployment, particularly in firmware, middleware, operating systems, and browser support for PQC algorithms for authentication. Coordinated efforts across government, industry, and standards bodies will be essential to close these gaps. Continued experimentation, interoperability testing, and updates to policies and tools will drive this evolution forward. As PQC readiness improves across the ecosystem, these foundational efforts will enable a smooth and secure transition to quantum-resistant digital identity infrastructure.</p>


## Future Outlook

**Industry Readiness**

- Full industry support for PQC is still under development.
- Vendors are in the early phases of creating interoperable PQC libraries, hardware modules, and middleware components.

**Strategic Planning for Agencies and Enterprises**

- Now is the ideal time for organizations to align with federal PQC transition roadmaps.
- Investments should focus on building a flexible, modern infrastructure capable of adapting to evolving standards.

**Stakeholder Engagement and Education**

- Both technical teams and policy leaders must be informed about the implications of PQC.
- Organizations should prepare for dynamic cryptographic agility, including support for frequent algorithm upgrades.

<!-- Start of Section 13 -->

## Abbreviations
 
<table>
<thead>
<th scope='col' width="25%">
<b>Abbreviations</b>
</th>
<th scope='col'>
<b>Definition</b>
</th>
</thead>
<tbody>
<tr>
<td>
<strong>CMS</strong>
</td>
<td>
Credential Management System
</td>
</tr>
<tr>
<td>
<strong>DoD</strong>
</td>
<td>
Department of Defense
</td>
</tr>
<tr>
<td>
<strong>DHS</strong>
</td>
<td>
Department of Homeland Security
</td>
</tr>
<tr>
<td>
<strong>FICAM</strong>
</td>
<td>
Federal Identity, Credential, and Access Management
</td>
</tr>
<tr>
<td>
<strong>FIPS</strong>
</td>
<td>
Federal Information Processing Standards
</td>
</tr>
<tr>
<td>
<strong>NIST</strong>
</td>
<td>
National Institute of Standards and Technology
</td>
</tr>
<tr>
<td>
<strong>PIV</strong>
</td>
<td>
Personal Identity Verification
</td>
</tr>
<tr>
<td>
<strong>PQC</strong>
</td>
<td>
Post Quantum Cryptography
</td>
</tr>
<tr>
<td>
<strong>PKI</strong>
</td>
<td>
Public Key Infrastructure
</td>
</tr>
<tr>
<td>
<strong>CISA</strong>
</td>
<td>
Cybersecurity and Infrastructure Security Agency, part of the US Department of Homeland Security.&nbsp;
</td>
</tr>
<tr>
<td>
<strong>NCCoE</strong>
</td>
<td>
National Cybersecurity Center of Excellence
</td>
</tr>
<tr>
<td>
<strong>NSA</strong>
</td>
<td>
National Security Agency, responsible for protecting US communications.&nbsp;
</td>
</tr>
<tr>
<td>
<strong>YKMD</strong>
</td>
<td>
YubiKey Smart Card Minidriver
</td>
</tr>
</tbody>
</table>


## Terms and Definitions

<table>
<thead>
<th scope='col' width="25%">
<b>Terms</b>
</th>
<th scope='col'>
<b>Definitions</b>
</th>
</thead>
<tbody>
<tr>
<td>
<strong>Applets</strong>
</td>
<td>
Small applications or software components, often embedded within a larger application, such as a smart card applet for identity or cryptographic functions.
</td>
</tr>
<tr>
<td>
<strong>Bouncy Castle</strong>
</td>
<td>
A collection of cryptographic APIs for Java and C#, widely used for implementing encryption, decryption, and digital signature operations.
</td>
</tr>
<tr>
<td>
<strong>Certificate-based Authentication</strong>
</td>
<td>
A security process in which a digital certificate is used to authenticate a user, device, or system, ensuring identity and encrypted communication.
</td>
</tr>
<tr>
<td>
<strong>ECC (Elliptic Curve Cryptography)</strong>
</td>
<td>
A form of public-key cryptography based on the algebraic structure of elliptic curves over finite fields. ECC provides strong security with smaller key sizes compared to traditional methods like RSA, making it ideal for mobile, embedded, and resource-constrained environments.
</td>
</tr>
<tr>
<td>
<strong>ML-DSA (Module Lattice-based Digital Signature Algorithm)</strong>
</td>
<td>
A post-quantum digital signature algorithm based on module lattice cryptography, designed to resist quantum attacks.
</td>
</tr>
<tr>
<td>
<strong>ML-KEM (Module Lattice-based Key Encapsulation Mechanism)</strong>
</td>
<td>
A post-quantum key exchange mechanism based on lattice cryptography, designed to securely establish shared keys even in the presence of quantum threats.
</td>
</tr>
<tr>
<td>
<strong>Physical Access Control Systems (PACS)</strong>
</td>
<td>
Systems used to control and monitor physical entry to facilities or secured areas, typically using credentials like PIV cards or badges.
</td>
</tr>
<tr>
<td>
<strong>Post-Quantum Cryptography (PQC)</strong>
</td>
<td>
A class of cryptographic algorithms designed to be secure against the potential capabilities of quantum computers. PQC aims to replace traditional algorithms like RSA and ECC, which are vulnerable to quantum attacks, with lattice-based, hash-based, multivariate, and code-based alternatives.
</td>
</tr>
<tr>
<td>
<strong>Public Key Infrastructure (PKI)</strong>
</td>
<td>
A framework of policies, hardware, software, and procedures used to create, manage, distribute, use, and revoke digital certificates. PKI enables secure data exchange and authentication through asymmetric cryptography, using a trusted certificate authority (CA) to validate public keys.
</td>
</tr>
<tr>
<td>
<strong>RSA (Rivest&ndash;Shamir&ndash;Adleman)</strong>
</td>
<td>
A widely used public-key cryptosystem for secure data transmission and digital signatures, based on the difficulty of factoring large integers.
</td>
</tr>
<tr>
<td>
<strong>SLH-DSA (Structured Lattice-based Hash Digital Signature Algorithm)</strong>
</td>
<td>
A hash-based post-quantum digital signature scheme designed for secure authentication in quantum-resistant environments.
</td>
</tr>
<tr>
<td>
<strong>TLS (Transport Layer Security)</strong>
</td>
<td>
A cryptographic protocol that provides secure communication over a network, commonly used in web browsers and secure communications.
</td>
</tr>
<tr>
<td>
<strong>Web/Application Server</strong>
</td>
<td>
A server that hosts web applications, handles requests from clients, and processes responses using web protocols and application logic.
</td>
</tr>
<tr>
<td>
<strong>YubiKey Smart Card Minidriver</strong>
</td>
<td>
The YKMD is a small, lightweight driver that builds on top of the Windows Inbox Smart Card Minidriver (Windows Minidriver). On the Windows operating system, the Windows Minidriver provides basic functionality for using PIV smart cards that have already been provisioned with at least one certificate. However, the Windows Minidriver cannot be used to provision certificates or manage PINs. Unlike this and other native Microsoft tools or legacy Yubico tools, the YKMD accomplishes this by enabling Windows to write directly to the PIV module, utilize the native CertUtil command suite, and add extended functionality when using the YubiKey as a smart card.&nbsp;
</td>
</tr>
</tbody>
</table>

## Normative References

<table>
<thead>
<th scope='col' width="25%">
<b>Standards</b>
</th>
<th scope='col'>
<b>Description</b>
</th>
</thead>
<tbody>
<tr>
<td>
FIPS 201-3
</td>
<td>
Personal Identity Verification (PIV) of Federal Employees and Contractors
</td>
</tr>
<tr>
<td>
NIST SP 800-78-5
</td>
<td>
Cryptographic Algorithms and Key Sizes for Personal Identity Verification800-73
</td>
</tr>
<tr>
<td>
FIPS 205
</td>
<td>
Stateless Hash-Based Digital Signature Standard
</td>
</tr>
<tr>
<td>
FIPS 204&nbsp;
</td>
<td>
Module-Lattice-Based Digital Signature Standard - Dilithium
</td>
</tr>
<tr>
<td>
FIPS 203
</td>
<td>
Module-Lattice-Based Key-Encapsulation Mechanism Standard
</td>
</tr>
<tr>
<td>
NIST SP 800-73-5
</td>
<td>
Interfaces for PIV Credentials
</td>
</tr>
<tr>
<td>
NIST SP 800-208
</td>
<td>
PQC Migration Planning for Federal Agencies
</td>
</tr>
</tbody>
</table>

<!-- First updated 06/17/2025 - Sree -->
