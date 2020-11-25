---
layout: page
collection: piv
title: Introduction to Network Authentication Guides
permalink: piv/network/
sticky_nav: true
sidenav: pivnetwork

subnav:
    - text: Ports and Protocols
      href: /piv/network/ports/
    - text: Domain Controllers
      href: /piv/network/dc/
    - text: Trust Stores
      href: /piv/network/trust/
    - text: Account Linking
      href: /piv/network/account/
    - text: Group Policies and Enforcement
      href: /piv/network/group/
    - text: Network Tuning
      href: /piv/network/tuning/
    - text: Local Certification Authority
      href: /piv/network/localca/
    - text: Authentication Assurance
      href: /piv/network/auth/
---

These Network Authentication guides will help you configure your Windows _network domain_ for smartcard logon using PIV credentials.

There are many useful pages and technical articles available online that include details on configurations and using generic smartcards.  The information presented here addresses common questions and configurations **specific** to the US Federal Government, **PIV** smartcards, and US federal civilian agency Certification Authorities.

{% include alert-info.html heading = "Teamwork" content="Work with your Network Engineers, Domain Admins, Account Management, and Information Security colleagues to review the information, perform the configurations, and troubleshoot any issues together." %}

## Pre-Launch Checklist

Check the following items **before** reviewing these network guides and lessons learned:

1. Users have PIV credentials and PIV card readers
1. You are using Microsoft Active Directory to manage your Windows network
1. Domain Controllers are Microsoft 2008 R2 or 2012 or above
1. User workstations **are joined** to your network and are Windows 7, Windows 8, or Windows 10-based

## Configuration Checklist

There are five configuration categories to review with your colleagues.  All five includes steps that must be completed and it's best to review and complete in this order:    

- [Network Ports and Protocols](../piv//network/ports/)
- [Domain Controllers](../piv/network/dc/)
- [Trust Stores](../piv/network/trust/)
- [Account Linking: Associating PIV credentials with User Accounts](..piv//network/account/)
- [Group Policies and Enforcement](../piv/network/group/)

There are three additional guides:

- [Network Tuning](../piv/network/tuning/)
- [Local Certification Authority](../piv/network/localca/)
- [Authentication Assurance](../piv/network/auth/)

We want to add additional information for installing online certificate status protocol (OCSP) services, common errors and troubleshooting, and configuring MacOSX and other operating systems.  

Submit an [Issue]({{site.repourl}}/issues) to identify information that would be helpful to you, or consider contributing a page to these guides with your lessons learned.   


