---
layout: pagewide
collection: university
title: FICAM Policy Matrix - Map
permalink: /university/policymap/
sidenav: university
sticky_sidenav: true

# subnav:
#   - text: 
#     href: 
---
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uswds/3.8.2/css/uswds.min.css" integrity="sha512-c54cBXlMCHyctBarSG5INC3euZr4UvbldzM8bm0d3K0mKW7Whi4SN+tf7RuRhTQXdztpfyeIgcdVPSEc1PdaTQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<!-- Using: jQuery RWD Image Map from https://github.com/stowball/jQuery-rwdImageMaps v1.6 for a resizable imagemap -->
<script src="{{site.baseurl}}/assets/js/responsive-imagemap/jquery.rwdImageMaps.min.js"></script>

## Policy Overview

The policy map below presents a visual overview of the laws, policies and standards relevant to FICAM. The documents are organized according to the government body that produced it, and the relationships between the documents are illustrated by arrows connecting them.

<img src="{{site.baseurl}}/assets/img/icam-policy-landscape-map.png" alt="Policy Matrix" usemap="#matrix-map" alt="Visual overview of the laws, policies and standards relevant to FICAM, organized according to the government body that produced it. The relationships between the documents are illustrated by arrows connecting them.">
<map name="matrix-map">
    <!-- Acts of Congress -->
    <area shape="rect" onmouseover="" coords="237,61,318,101" title="Federal Information Security Modernization Act of 2014" href="{{site.baseurl}}/laws-policies-standards/fisma-2014/" target="_blank" alt="Directed NIST and OMB to provide updated guidance for the modernization of Federal IT Systems, and established the Federal CIO Council.">
    <area shape="rect" coords="308,121,397,161" title="5 USC 552a: Records maintained on individuals - Privacy Act of 1974" href="{{site.baseurl}}/laws-policies-standards/privacy-act-of-1974/" target="_blank" alt="This Act protects certain federal government records pertaining to individuals. In particular, the Act covers systems of records that an agency maintains and retrieves by an individual's name or other personal identifier, such as a Social Security Number.">
    <area shape="rect" coords="389,61,477,101" title="Government Paperwork Elimination Act of 1998" href="{{site.baseurl}}/laws-policies-standards/government-paperwork-elimination-act/" target="_blank" alt="This Act requires federal agencies to allow individuals or entities that deal with the agencies the option to submit information or transact with the agency electronically when possible and to maintain records electronically when possible.">
    <area shape="rect" coords="467,121,556,161" title="Electronic Signatures in Global and National Commerce Act" href="{{site.baseurl}}/laws-policies-standards/e-sign-act-of-2000/" target="_blank" alt="This Act facilitates the use of electronic records and electronic signatures in interstate and foreign commerce by ensuring the validity and legal effect of electronic contracts. This act led to the creation of the Federal PKI.">
    <area shape="rect" coords="557,51,646,91" title="Federal Information Technology Acquisition Reform Enhancement Act of 2017" href="{{site.baseurl}}/laws-policies-standards/fitara-enhancement-act-of-2017/" target="_blank" alt=" Extended the authorization for the Data Center Consolidation Act, which encourages the use of Cloud Services by Federal Agencies where appropriate. We continue to update our guidance to address the requirements of cloud implementation of federal services.">
    <!-- Executive Orders -->
    <area shape="rect" coords="697,41,777,71" title="Executive Order 13681: Improving the Security of Consumer Financial Transactions" href="{{site.baseurl}}/laws-policies-standards/e.o.-13681/" target="_blank" alt="Proposes improved security for government payments and identity theft remediation, encouraging deployment of better citizen authentication technologies for financial transactions.">
    <area shape="rect" coords="698,91,777,121" title="Executive Order 14028: Improving the Nation's Cybersecurity" href="{{site.baseurl}}/laws-policies-standards/e.o.-14028/" target="_blank" alt="Directs federal agencies to develop a plan to implement a Zero Trust Architecture, and Multi-Factor Authentication.">
    <area shape="rect" coords="787,132,867,161" title="Executive Order 13556: Controlled Unclassified Information" href="{{site.baseurl}}/laws-policies-standards/e.o.-13556/" target="_blank" alt="This order establishes an open and uniform program for managing information that requires safeguarding but is not classified. The program includes standards for Identity and Access Management for Controlled Unclassified Information (CUI)">
    <area shape="rect" coords="838,51,997,110" title="Homeland Security Presidential Directive 12" href="{{site.baseurl}}/laws-policies-standards/hspd-12/" target="_blank" alt="Directive requires the development and agency implementation of a mandatory, government-wide standard for secure and reliable forms of identification for Federal employees and contractors.">
    <area shape="rect" coords="1187,61,1256,91" title="Executive Order 13286: Amendment of Executive Orders, and Other Actions, in Connection 
With the Transfer of Certain Functions to the Secretary of Homeland Security" href="{{site.baseurl}}/laws-policies-standards/e.o.-13286/" target="_blank" alt="Amends an earlier Executive Order (E.O. 12977). Defines a central federal function to define security for physical access to federal facilities. Because physical access often involves PIV Cards, ICAMSC coordinates closely with the federal Physical Access Control System (PACS) community.">
    <area shape="rect" coords="1148,121,1227,151" title="Executive Order 13467: Reforming Processes Related to Suitability for Government Employment, Fitness for 
Contractor Employees, and Eligibility for Access to Classified National Security Information" href="{{site.baseurl}}/laws-policies-standards/e.o.-13467/" target="_blank" alt="This Executive Order mandates a common background check process across the civilian, unclassified the federal government, leading to the acceptance of PIV cards across agency boundaries.">
</map>
<script>
    $(document).ready(function(e) {
        $('img[usemap]').rwdImageMaps();
    });
</script>
<script>$('img[usemap]').rwdImageMaps();</script>
