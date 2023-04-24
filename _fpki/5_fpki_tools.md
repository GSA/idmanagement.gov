---
layout: page
collection: fpki
title: Useful Tools
permalink: /fpki/tools/
sticky_sidenav: true
sidenav: fpki

subnav:
    - text: Federal PKI Graph
      href: ../tools/fpkigraph/
    - text: Federal PKI Activity Report
      href: ../tools/fpkiar/
    - text: CITE Participation Guide
      href: ../tools/citeguide/
    - text: Card Conformance Tool
      href: ../tools/cct/
    - text: Certificate Profile Conformance Tool
      href: ../tools/cpct/
      
---

We are always collecting useful tools and links that will help you understand and use the Federal Public Key Infrastructure. The table below provides a list of useful tools.

Please consider contributing any of your favorite tools to this effort!

**Tool** | **Link** | **Purpose/Use** | **Audience**
--- | :---: | --- | ---
FPKI Graph | [FPKI Graph](fpkigraph) | This is an interactive website that is updated weekly to display the hundreds of certification authorities that make up the FPKI and how they are connected. | Program Managers; System Engineers
Card Conformance Tool (CCT) | [GitHub (External)](https://github.com/GSA/piv-conformance/releases){:target="_blank"}{:rel="noopener noreferrer"} | The [Card Conformance Tool (CCT)](cct) is a GSA managed Java tool which validates that Personal Identity Verification (PIV) and PIV-Interoperable (PIV-I) smart cards are compliant with key standards. | PIV or PIV-I Issuers; System Engineers
Certificate Profile Conformance Tool (CPCT) | [Cert Conformance Tool (External)](https://github.com/GSA/cpct-tool/releases/){:target="_blank"}{:rel="noopener noreferrer"} | The [Certificate Profile Conformance Tool (CPCT)](cpct) is an application that analyzes certificates for conformance to a specified FPKI-defined profile. | FPKI Certificate Issuers or Relying Parties; System Engineers
Certutil | [MSDN (External)](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/certutil){:target="_blank"}{:rel="noopener noreferrer"} |  Certutil.exe is a Microsoft Windows command-line utility that provides many uses, including exporting PIV certificates and validating certificates |  System Engineers
Personal Identify Verification (PIV) Cert Validator Tool | [Max.gov PIV Tool (External)](https://pv.test.max.gov/){:target="_blank"}{:rel="noopener noreferrer"} | The PIV Certificate Validator is a website application hosted by Max.gov. It assists in verifying the certificates found on a PIV card. | System Engineers
PKI Interoperability Test Tool (PITT) for Microsoft Windows | [Sourceforge (External)](http://pkif.sourceforge.net/pitt.html){:target="_blank"}{:rel="noopener noreferrer"} | The PKI Interoperability Test Tool (PITT) is a utility intended for PKI integrators. It allows inspection and troubleshooting of certification path processing for a given PKI using both PKIF and Microsoft CAPI. It’s especially useful for identifying a portion of your PKI that may be causing performance problems. | System Engineers
crt.sh | [External](https://crt.sh/){:target="_blank"}{:rel="noopener noreferrer"} | Certificate Transparency auditor used to find and audit TLS certificate issuances and issues. | System Engineers
OpenSC | [Github (External)](https://github.com/OpenSC/OpenSC/wiki){:target="_blank"}{:rel="noopener noreferrer"} | OpenSC provides a set of libraries and utilities to work with smart cards. Use OpenSC versions of 0.20.0 or greater to reduce website authentication errors related to TLS 1.3. | System Engineers
NIST 85B (800-73-4) Test Tool | [NIST (External)](https://csrc.nist.gov/projects/nist-personal-identity-verification-program/software-downloads){:target="_blank"}{:rel="noopener noreferrer"} | Used to pull deep PIV contents when integrating PIV with various infrastructure components. | System Engineers; FPKI Card Issuers
Treasury PIV Authentication Tester (TLS 1.3) | [External](https://caia-dev.treasury.gov/pagination-spa){:target="_blank"}{:rel="noopener noreferrer"} | A tool from the U.S. Department of the Treasury, Bureau of the Fiscal Service used to test PIV authentication. Click on "log in" and follow the prompts for PIV. This tool will identify if your agency is impacted by TLS 1.3 break and inspect for Trusted Internet Connection (TIC). | System Engineers; PIV Holders
