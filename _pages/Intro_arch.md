---
layout: page
collection: arch
title: FICAM Architecture Introduction
permalink: /intro_arch/
sidenav: arch
---

This playbook describes the **Federal Identity, Credential, and Access Management (FICAM) Architecture**. FICAM is the Federal Government’s implementation of **Identity, Credential, and Access Management (ICAM)**.

> **ICAM** enables the **_right individual_** to access the **_right resource_**, at the **_right time_**, for the **_right reason_** in support of **_federal business objectives_**.

This page describes the basics of ICAM, the FICAM Architecture, and how you can use this playbook to facilitate ICAM practices at your agency.
- [What is the FICAM Architecture?](#what-is-the-ficam-architecture)
- [What is ICAM?](#what-is-icam)
- [Who is the FICAM Architecture for?](#who-is-the-ficam-architecture-for)
- [FICAM Architecture Background](#ficam-architecture-background)

The following diagram is a high-level view of the ICAM practice areas and supporting elements. 

![A color-coded diagram that has three large connected boxes and two small auxillary boxes. The three large boxes include definitions and diagrams for Identity, Credential, and Access Management, and the two small boxes include definitions for Federation and Governance.]({{site.baseurl}}/assets/arch/intro_ConceptualDiagram.png)

The FICAM Architecture includes government-wide enterprise architecture views with the flexibility to support each agency’s unique business or mission needs. Use the FICAM Architecture as a tool to continuously improve upon your agency’s approach and align with federal security and privacy initiatives.

These are the views you’ll find in this playbook:
- [**Goals and Objectives**](/arch/goals/) - The aims and outcomes of enterprise Federal ICAM.
- [**Services Framework**](/arch/services/) - Descriptions of the services within each ICAM practice area that support enterprise ICAM.
- [**Use Cases**](/arch/usecases/) - High-level summaries and examples of the common procedures in ICAM.
- [**Component Examples**](/arch/components/) - A list of example enterprise ICAM tools, aligned to each ICAM service area. These tools, such as solutions, applications, and software, are representative examples that illustrate ICAM functionality within an agency.
- [**Standards and Policies**](/arch/standards/) - The federal policies and standards that shape the implementation of enterprise ICAM.

Copy the graphics and text throughout this playbook to use at your agency to drive ICAM awareness, strategy developments, and communications.

## What is the FICAM Architecture?
> **FICAM** is the Federal Government’s enterprise approach to design, plan, and execute common ICAM processes.

The FICAM Architecture is a framework for an agency to use in ICAM program and solution roadmap planning. The FICAM Architecture focuses on enterprise identity processes, practices, policies and information security disciplines. 

>  A federal enterprise identity is the unique representation of an employee, contractor, or enterprise user, which could be a mission or business partner, or even a device or technology managed by a Federal agency to achieve its mission and business goals. [(OMB Memorandum 19-17)](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf){:target="_blank"}{:rel="noopener noreferrer"}.

## What is ICAM?
> **ICAM** is the set of tools, policies, and systems that agencies use to secure access to protected agency services.

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
    <td class="tg-0pky"><img src="{{site.baseurl}}/assets/arch/intro_ICAM-Identity.png" alt="Three hexagons with the letters I, C, and A. The I is highlighted in red for Identity Management." width="125"><br></td>
    <td class="tg-0pky"><span style="font-weight:bold">Identity Management</span> is how an agency uses attributes to establish and maintain enterprise identities for employees and contractors.</td>
  </tr>
  <tr>
    <td class="tg-0pky"><img src="{{site.baseurl}}/assets/arch/intro_ICAM-Credential.png" alt="Three hexagons with the letters I, C, and A. The C is highlighted in green for Credential Management." width="125"><br></td>
    <td class="tg-0pky"><span style="font-weight:bold">Credential Management</span> is how an agency issues, manages, and revokes credentials bound to enterprise identities.</td>
  </tr>
  <tr>
    <td class="tg-0pky"><img src="{{site.baseurl}}/assets/arch/intro_ICAM-Access.png" alt="Three hexagons with the letters I, C, and A. The A is highlighted in blue, for Access Management." width="125"><br></td>
    <td class="tg-0pky"><span style="font-weight:bold">Access Management</span> is how an agency authenticates enterprise identities and authorizes appropriate access to protected services.</td>
  </tr>
  <tr>
    <td class="tg-yj5y" colspan="2"><span style="font-weight:bold">ICAM Supporting Elements</span></td>
  </tr>
  <tr>
    <td class="tg-0pky"><img src="{{site.baseurl}}/assets/arch/intro_ICAM-Federation.png" alt="Three hexagons with the letters I in red, C in green, and A in blue, with a gray banner for Federation." width="125"><br></td>
    <td class="tg-0pky"><span style="font-weight:bold">Federation</span> is the technology, policies, standards, and processes that allow an agency to accept digital identities, attributes, and credentials managed by other agencies.</td>
  </tr>
  <tr>
    <td class="tg-0pky"><img src="{{site.baseurl}}/assets/arch/intro_ICAM-Governance.png" alt="Three hexagons with the letters I in red, C in green, and A in blue, with a navy banner for Governance." width="125"><br></td>
    <td class="tg-0pky"><span style="font-weight:bold">Governance</span> is the set of practices and systems that guides ICAM functions, activities, and outcomes.</td>
  </tr>
</tbody>
</table>

## Who is the FICAM Architecture for?
The FICAM Architecture is for agency personnel looking for federal information technology resources. 
- **Senior Federal IT and agency stakeholders** can find a reference architecture that leverages Federal IT and industry standard definitions to integrate IT applications and services across multiple agencies and business areas.
- **Program Managers** can find common definitions and frameworks for use in planning.
- **Enterprise and Application Architects** can find a common framework, including views and use cases, for use in IT systems, applications, and network implementations.
- **Everyone in Federal IT** can benefit from applying consistent, interoperable, and unified IT identity, credentials, and access management implementations to their business- and mission-level initiatives.

## FICAM Architecture Background
The FICAM Roadmap was created in 2009 to provide a comprehensive view for a common Identity and Access Management (IAM) segment architecture for Federal agencies. Part A of the _FICAM Roadmap and Implementation Guidance_, v2.0, was replaced in 2015 with an updated Architecture. This site contains the current 2020 update for the FICAM Architecture.