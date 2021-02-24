---
layout: page
collection: pacs
title: PACS Deployment Models
permalink: pacs/pacs/
sticky_sidenav: true
sidenav: pacs

subnav:
  - text: What Is a Standalone PACS?
    href: '#what-is-a-standalone-pacs'
  - text:  Standalone PACS Operational Challenges
    href: '#standalone-pacs-operational-challenges'
  - text: What Is an Enterprise PACS?
    href: '#what-is-an-enterprise-pacs'
  - text: Would an Enterprise PACS Work for Our Agency?
    href: '#would-an-enterprise-pacs-work-for-our-agency'
---

This page will give you a basic understanding of Physical Access Control System (PACS) deployment models. 

- [What Is a Standalone Physical Access Control System?](#what-is-a-standalone-pacs)
- [What Is an Enterprise Physical Access Control System?](#what-is-an-enterprise-pacs)

## What Is a Standalone PACS?

A standalone PACS is a local system that controls physical access to a facility or specific areas within it -- for example, a Sensitive Compartmented Information Facility (SCIF). Standalone PACSs are facility-centric, and consequently, these systems typically do not connect to enterprise networks. While this deployment model tends to be the most common and uncomplicated method of managing access to controlled areas, it has several challenges.

### Standalone PACS' Operational Challenges

Agencies that use standalone PACSs have encountered operational challenges: 
* Sites must independently control physical access.
* Agencies see delays with credential transfers or terminations.
* Employees and contractors must re-enroll their credentials for all federal work sites that they visit.
* Departments inconsistently apply enterprise-wide security policies.
* Agencies experience reduced situational awareness (for example, logs cannot be correlated across the enterprise)
* Agencies with many standalone PACSs see increased human error, such as data entry errors.

{% include alert-success.html content="Can agencies centrally control physical access for most, or all, of their sites?  Yes - the answer is to implement an Enterprise Physical Access Control System." %}

## What Is an Enterprise PACS?

An Enterprise PACS (E-PACS) extends the concept of a standalone PACS to act as a unified, enterprise-wide system that controls physical access at most (or all) sites that belong to an agency. E-PACSs address the operational challenges of standalone PACSs and improve system management, scalability, monitoring, and performance. 

E-PACSs rely on the same components as standalone PACSs. However, an essential architectural distinction is that an E-PACS connects to an agency's enterprise-network, whereas a PACS typically does not.

{% include alert-info.html content="Some agencies need standalone PACSs for their unique sites and missions, but most agencies could benefit from transitioning to an E-PACS." %}

### Would an Enterprise PACS Work for Our Agency?

Here are some key E-PACS advantages to consider:

* One enterprise-wide system controls physical access for many (or all) agency sites.
* One employee and contractor enrollment system that connects multiple enrollment locations.
* One credential registration and provisioning point.
* One enterprise-wide system for administrators to modify or terminate access privileges.
* One enterprise-wide system that regularly polls for [Certificate Revocation List](../../piv/cert-trust/#revocation){:target="_blank"} (CRL) updates and maintains revocation data.
* Reduced costs for system management, such as patching, server system administration, and software updates.
* Reduced costs for reporting , such as Federal Information Security Modernization Act [FISMA] reporting.
* Reduced costs for:
    * Server hardware
    * System security assessment and accreditation

	
The next section, *[Aligning Facility Security Level (FSL) and Authentication](../alignfslandauth/)*, explains the processes needed to prepare for a PACS deployment and offers more detail related to the FIPS 201-approved PIV authentication mechanisms.
