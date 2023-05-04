---
layout: page
collection: how
title: Domain Controller
permalink: /how/domain-controllers/
sticky_sidenav: true
sidenav: how

subnav:
  - text: Domain Controller Certificate Profiles
    href: '#domain-controller-certificate-profiles'
  - text: Issue Domain Controller Certificates
    href: '#issue-domain-controller-certificates'
    
---

To use smart cards and PIV credentials for network authentication, all domain controllers need to have domain controller authentication certificates.

{% include alert-info.html heading = "Devices authenticate too!" content="When your users are using certificates to authenticate to the network, the domain controllers are also authenticating as devices using certificates. Each works together to create secure connections. To learn more, search for online resources that discuss Public Key Cryptography for Initial Authentication (PKINIT) protocols." %}

This page contains information on domain controller certificate profiles and issuing domain controller certificates.

## Domain Controller Certificate Profiles

Domain controller certificates must be issued with a set of specific extensions and values.  The certificate profile for each domain controller must meet the following requirements:

- The certificate **Key Usage** extension must contain:

            Digital Signature, Key Encipherment

- The certificate **Enhanced Key Usage** extension must contain:

            Client Authentication (1.3.6.1.5.5.7.3.2)
            Server Authentication (1.3.6.1.5.5.7.3.1)

- The certificate **Subject Alternative Name** extension must contain the Domain Name System (DNS) qualifier and fully qualified domain controller name.  For example:

            DNS Name=controller1.intranet.agency.gov

- The certificate **Subject Alternative Name** must also contain the domain controller's Global Unique Identifier (GUID) (i.e., for the "domain controller object"). 

  * To determine the domain controller's GUID, start **Ldp.exe** and locate the **domain-naming context**. 
  * Double-click on the **name of the domain controller** whose GUID you want to view.
  
    > The list of attributes for the domain controller object contains **"Object GUID" followed by a long number**. The number is the object GUID. For example:

            Other Name: 1.3.6.1.4.1.311.25.1 = ac 4b 29 06 bb d6 5d 4f e3 9c 4c ab c3 6a 55 d9

    > The domain controller's certificate must be installed in the domain controller's local computer's **_personal certificate store_**.

## Issue Domain Controller Certificates

U.S. federal civilian agencies have a variety of information security policies.  These policies cover whether you should use a domain controller certificate issued from your agency's local enterprise certification authority (CA) or whether the certificate must be issued from a CA managed and certified under the Federal Public Key Infrastructure (FPKI).  Each agency's information security policy should be followed.

It is not recommended to set up a local enterprise CA just to issue domain controller certificates without ensuring the proper management and security protections are enabled.  Your Chief Information Security Officer (CISO) must have awareness and oversight established for the CA management.

Collaborate with your CISO or Information Security Office for a definitive answer and direction.

If you do have a local enterprise CA, [here are some tips.]({{site.baseurl}}/how/certificate-authority/)

