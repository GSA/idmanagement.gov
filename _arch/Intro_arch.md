---
layout: page
collection: arch
title: Federal ICAM Architecture Introduction
permalink: arch/intro-arch/
sidenav: arch
sticky_sidenav: true

subnav:
  - text: What is the FICAM Architecture?
    href: '#what-is-the-ficam-architecture'
  - text: What is ICAM?
    href: '#what-is-icam'
  - text: Who is the FICAM Architecture for?
    href: '#who-is-the-ficam-architecture-for'
  - text: FICAM Architecture Background
    href: '#ficam-architecture-background'
---

This site is the home of the Federal Identity, Credential, and Access Management (FICAM) Architecture.  These pages describe the basics of ICAM, the FICAM Architecture, and how you can use this information to facilitate enterprise ICAM practices at your agency. 

FICAM is the Federal Government’s implementation of Identity, Credential, and Access Management (ICAM).

> **_ICAM_** is the set of tools, policies, and systems that an agency uses to enable the **_right individual_** to access the **_right resource_**, at the **_right time_**, for the **_right reason_** in support of **_federal business objectives_**.

This version of the FICAM Architecture encompasses the **enterprise** ICAM policies, technologies and system approaches for government employees, contractors, and authorized partners. Citizen interactions with the federal government - or consumer ICAM -  are not covered under this version of the FICAM Architecture.

- [What is ICAM?](#what-is-icam)
- [What is the FICAM Architecture?](#what-is-the-ficam-architecture)
- [Who is the FICAM Architecture for?](#who-is-the-ficam-architecture-for)
- [What is the history of the FICAM Architecture?](#what-is-the-history-of-the-ficam-architecture)

The following diagram is a high-level view of the ICAM practice areas and supporting elements. 

![A color-coded diagram that has three large connected boxes and two small auxillary boxes. The three large boxes include definitions and diagrams for Identity, Credential, and Access Management, and the two small boxes include definitions for Federation and Governance.](../../assets/arch/intro_ConceptualDiagram.png)

The FICAM Architecture includes government-wide enterprise architecture views with the flexibility to support each agency’s unique business or mission needs. Use the FICAM Architecture as a tool to continuously improve upon your agency’s approach and align with federal security and privacy initiatives.

These are the views you’ll find in this playbook:
- [**Goals and Objectives**](goals) - The aims and outcomes of enterprise Federal ICAM.
- [**Services Framework**](services) - Descriptions of the services within each ICAM practice area that support enterprise ICAM.
- [**Use Cases**](usecases) - High-level summaries and examples of the common procedures in ICAM.
- [**Component Examples**](components) - A list of example enterprise ICAM tools, aligned to each ICAM service area. These tools, such as solutions, applications, and software, are representative examples that illustrate ICAM functionality within an agency.
- [**Standards and Policies**](standards) - The federal policies and standards that shape the implementation of enterprise ICAM.

Copy the graphics and text throughout this playbook to use at your agency to drive ICAM awareness, strategy developments, and communications.

## What is ICAM?
ICAM is the set of tools, policies, and systems that an agency uses to enable the right individual to access the right resource, at the right time, for the right reason in support of federal business objectives.

Agencies implement ICAM services and solutions to unify their IT services, improve physical access control, and improve information security and decisions. Understanding the building blocks of ICAM is key to understanding the FICAM Architecture. ICAM has three practice areas and two supporting elements. The supporting elements enhance the capabilities of the practice areas.

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px; overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px; overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-yj5y{background-color:#efefef;border-color:inherit;text-align:center;vertical-align:middle;font-family: "Cambria", "Georgia", "Times New Roman", "Times", serif;}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top;font-family: "Cambria", "Georgia", "Times New Roman", "Times", serif;}
</style>

<table class="tg">
<thead>
  <tr>
    <th class="tg-yj5y" colspan="2"><span style="font-weight:bold">ICAM Practice Areas</span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky"><img src="img/ICAM-Identity.png" alt="Three hexagons with the letters I, C, and A. The I is highlighted in red for Identity Management." width="125"><br></td>
    <td class="tg-0pky"><span style="font-weight:bold">Identity Management</span> is how an agency collects, verifies, and manages attributes to establish and maintain enterprise identities for employees and contractors.</td>
  </tr>
  <tr>
    <td class="tg-0pky"><img src="img/ICAM-Credential.png" alt="Three hexagons with the letters I, C, and A. The C is highlighted in green for Credential Management." width="125"><br></td>
    <td class="tg-0pky"><span style="font-weight:bold">Credential Management</span> is how an agency issues, manages, and revokes credentials bound to enterprise identities.</td>
  </tr>
  <tr>
    <td class="tg-0pky"><img src="img/ICAM-Access.png" alt="Three hexagons with the letters I, C, and A. The A is highlighted in blue, for Access Management." width="125"><br></td>
    <td class="tg-0pky"><span style="font-weight:bold">Access Management</span> is how an agency authenticates enterprise identities and authorizes appropriate access to protected services.</td>
  </tr>
  <tr>
    <td class="tg-yj5y" colspan="2"><span style="font-weight:bold">ICAM Supporting Elements</span></td>
  </tr>
  <tr>
    <td class="tg-0pky"><img src="img/ICAM-Federation.png" alt="Three hexagons with the letters I in red, C in green, and A in blue, with a gray banner for Federation." width="125"><br></td>
    <td class="tg-0pky"><span style="font-weight:bold">Federation</span> is the technology, policies, standards, and processes that allow an agency to accept digital identities, attributes, and credentials managed by other agencies.</td>
  </tr>
  <tr>
    <td class="tg-0pky"><img src="img/ICAM-Governance.png" alt="Three hexagons with the letters I in red, C in green, and A in blue, with a navy banner for Governance." width="125"><br></td>
    <td class="tg-0pky"><span style="font-weight:bold">Governance</span> is the set of practices and systems that guides ICAM functions, activities, and outcomes.</td>
  </tr>
</tbody>
</table>

## What is the FICAM Architecture?
FICAM is the Federal Government’s enterprise approach to design, plan, and execute common ICAM processes.

The FICAM Architecture is a framework for an agency to use in ICAM program and solution roadmap planning. The FICAM Architecture focuses on enterprise identity processes, practices, policies, and information security disciplines. 

>  A federal enterprise identity is the unique representation of an employee, contractor, or enterprise user, which could be a mission or business partner, or even a device or technology managed by a Federal agency to achieve its mission and business goals [(OMB Memorandum 19-17)](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf){:target="_blank"}{:rel="noopener noreferrer"}.

## Who is the FICAM Architecture for?
The FICAM Architecture is for agency personnel. An enterprise architecture is primarily used by:
- **Senior Federal IT and agency stakeholders** to understand the concepts for identity and access management services and the basic use cases supporting business objectives.
- **Program Managers** to find common definitions and frameworks for use in planning.
- **Enterprise and Application Architects** to use a common framework for designing and governing IT systems, applications, and implementations.

## What is the history of the FICAM Architecture?
The FICAM Architecture was created in 2009 to provide a common ICAM segment architecture for federal agencies. The FICAM Architecture was the primary foundation of what later became the _FICAM Roadmap and Implementation Plan_ enhanced with complementary implementation sections.  

In 2015, ICAM experts from across the Federal Government collaborated on an updated FICAM Architecture.  This update was intended to be more concise, easy to understand, and visually appealing, while reflecting the latest updates in cybersecurity, enterprise architecture, and ICAM policy and technology.

This site contains the current 2020 update for the FICAM Architecture.  The FICAM Roadmap and Implementation Guidance v2.0 is superseded by both the FICAM Architecture updates, and other complementary modernized playbooks developed by ICAM committees across government. 
