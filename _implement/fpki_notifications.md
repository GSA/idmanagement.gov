---
layout: page
collection: implement
title: FPKI Ecosystem Changes
permalink: /fpki/notifications/
sidenav: implement
sticky_sidenav: true

subnav:
  - text: FPKI Announcements
    href: '#fpki-announcements'
  - text: FPKI Graph
    href: '#fpki-graph'
  - text: PIV Issuer Information
    href: '#piv-issuer-information'
  - text: Active Issuing CA Certificate Details 
    href: '#active-issuing-ca-certificate-details'
  - text: Maintenance Mode Issuing CA Certificate Details
    href: '#maintenance-mode-issuing-ca-certificate-details'
  - text: FPKI System Changes and Notifications
    href: '#fpki-system-changes-and-notifications'
  - text: Notifications
    href: '#notifications'

---

This page contains information that is helpful in identifying changes in the Federal PKI. This includes identifying PIV issuing CA and operational changes such as URL endpoints and system outages.

1. [FPKI Announcements](#fpki-announcements) - Hot topics impact the Federal PKI.
2. [FPKI Graph](#fpki-graph) - The FPKI Graph displays the relationships between the certification authorities in the Federal PKI (FPKI) ecosystem
3. [PIV Issuer Information](#piv-issuer-information) - List of active PIV issuing CAs with end entity certificate distribution points.
4. [FPKI System Change and Notification](#notifications) - List of changes to FPKI CA endpoint URL such as Certificate Revocation List Distribution Points, Online Certificate Status Protocol (OCSP) endpoints and other CA certificate activity.

## FPKI Announcements

These announcements and hot topics concern Federal Public Key Infrastructure changes that may affect your agency's operations. Announcements are removed after three years.

<table class="usa-table--borderless">
  <thead class="usa-sr">
    <tr>
      <th id="announce-table-heading-title" scope="col">Title</th>
      <th id="announce-table-heading-date" scope="col">Date</th>
      <th id="announce-table-heading-description" scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    {% assign announcements = site.fpki.announcements | concat: site.data.fpkiannouncements %}
      {% for announcement in announcements %}
        {% if announcement.status == "Active" %}
          <tr>
              <td headers="announce-table-heading-{{ status | slugify }} announce-table-heading-title"><a href="{{ announcement.url | relative_url }}" title="announcement.title">{{ announcement.title }}</a></td>
              <td headers="announce-table-heading-{{ status | slugify }} announce-table-heading-date"><a date="announcement.pubDate">{{ announcement.pubDate }}</a></td>
              <td headers="announce-table-heading-{{ status | slugify }} announce-table-heading-description">{{ announcement.description }}</td>
          </tr>
        {% endif %}
      {% endfor %}
  </tbody>
</table>

## FPKI Graph

<link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/assets/css/gexfjs.css" />
<link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/assets/css/jquery-ui-1.13.min.css" />

<script type="text/javascript" src="{{ site.baseurl }}/assets/js/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/styleguide.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/accordion.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/jquery-ui.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/respond.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/jquery-migrate-3.3.2.min.js"></script>

<script type="text/javascript" src="{{ site.baseurl }}/assets/js/jquery.mousewheel.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/jquery-ui-1.13.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/gexfjs.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/config.js"></script>

**Last Update**: July 23, 2024

{% include graph.html %}

The FPKI Graph displays the relationships between the certification authorities in the Federal PKI (FPKI) ecosystem. It graphically depicts how each certification authority links to another, through cross-certificates, subordinate certificates, or bridge CAs. **A P7B file of the weekly FPKI Graph run is available [here]({{ site.baseurl }}/implement/tools/CACertificatesValidatingToFederalCommonPolicyG2.p7b).**

The Federal Common Policy Certification Authority (CA) G2 (_"COMMON"_) is shown at the center of the graph, and the rings of dots represent the outbound CAs.

- Click on any dot in the graph to see a CA's inbound and outbound _CA_ certificates.
- _Inbound_ means the CA certificate is signed by the _Inbound_ CA.
- _Outbound_ means the CA has signed the _Outbound_ CA certificate.
- The _Search_ function is on the upper right-hand corner. 
- The _Zoom_ scroll bar is in the upper left-hand corner.

You cannot download the certificates from the graph. To download the certificates, you need to retrieve the certificates from the Authority Information Access (AIA) or Subject Information Access (SIA) URIs. (See below for more information on AIAs and SIAs.)

### How the FPKI Graph Works

The graph uses information published in each CA certificate's AIA and SIA extensions. This is public information:&nbsp;&nbsp;all CAs in the FPKI are required to publish and maintain their AIA certificate bundles.

All CA and End Entity certificates that have a certificate path (trust chain) to COMMON will have an AIA extension in their public certificates. An AIA extension contains a URI where you can find the certificate(s) used to sign that CA or End Entity certificate.  

Most CA certificates will also have an SIA extension with a URI to the CA certificates that have been issued **_by that CA_**. For example, you can find the SIA for COMMON at http://repo.fpki.gov/fcpca/caCertsIssuedByfcpcag2.p7c.

- To use this SIA, retrieve the file (.p7c) using the link above and open it.   
- You will find a dozen or more certificates that are issued by COMMON (Root) to other intermediate or issuing CAs.  
- The SIA URIs from each of these certificates can then be retrieved to find the next set of signed certificates.

### Acknowledgment

The FPKI Graph was built by using the same tools and code as the [Berkley ICSI SSL Notary](https://www.icsi.berkeley.edu/icsi/node/5065){:target="_blank"}{:rel="noopener noreferrer"}. 

## PIV Issuer Information

{% assign branches = "" | split: "" %}
{% for piv in site.data.fpkicustomers %}
  {% assign branch = piv.branch | strip %}
  {% assign branches = branches | push: branch | uniq | sort %}
{% endfor %}
{% assign branches = branches | uniq | sort %}

The page lists the certification authorities *currently* used for Personal Identity Verification (PIV), PIV-Interoperable (PIV-I), or Derived PIV (dPIV) authentication certificates for federal government departments and agencies.  Agency system administrators can leverage this list to configure systems and services for cross-government trust.

{% include alert-info.html content="This table was last updated on <b>August  2, 2023</b>. Please email fpki at gsa.gov to suggest an update or correction." %} 

<br>
  
<table class="usa-table--borderless piv-table">
  <thead class="usa-sr-only">
    <tr>
      <th id="piv-table-heading-agency" scope="col">Department/Agency</th>
      <th id="piv-table-heading-ca" scope="col">PIV Authentication Issuing CA</th>
    </tr>
  </thead>
  <tbody>
    {% for branch in branches %}
      <tr class="piv-table-category-heading" data-branches="{{ branch }}">
        <th colspan="3" class="piv-table-heading" id="piv-table-heading-{{ branch | slugify }}"><b>{{ branch }} Branch</b></th>
      </tr>
      {% for piv in site.data.fpkicustomers %}
        {% if piv.branch == branch %}
          <tr class="piv-table-row" data-branch="{{ piv.branch }}">
            <td headers="piv-table-heading-{{ branch | slugify }} piv-table-heading-agency">{{ piv.agency }}</td>
            <td headers="piv-table-heading-{{ branch | slugify }} piv-table-heading-ca">{{ piv.ca }}</td>
          </tr>
        {% endif %}
      {% endfor %} <!--piv-->
    {% endfor %}<!--category-->
  </tbody>
</table>

## Active Issuing CA Certificate Details 
These CA certificates are actively issuing PIV , PIV-I and/or Derived PIV authentication certificates.  

#### Department of Veterans Affairs CA
- Subject: OU = Department of Veterans Affairs CA, OU = Certification Authorities, OU = Department of Veterans Affairs, O = U.S. Government, C = US
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Serial #: 633456a0
- Validity: May 20, 2023 to May 20, 2033
- SHA-1 Hash: d81577f94652b7a9eb9d0d4602060f7d16492413
- CRL DP: [http://pki.treas.gov/VA_CA3.crl](http://pki.treas.gov/VA_CA3.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### DHS CA4
- Subject: OU = DHS CA4, OU = Certification Authorities, OU = Department of Homeland Security, O = U.S. Government, C = US 
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Serial #: 63345616 
- Validity: April 29, 2023 to April 29, 2033
- SHA-1 Hash: d8624442ccc91753aca89698f2cbcdf59f32d3f1 
- CRL DP: [http://pki.treas.gov/DHS_CA4.crl](http://pki.treas.gov/DHS_CA4.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### DoD Issuing CAs
**DoD DERILITY CA-1**
- Subject: CN = DOD DERILITY CA-1, OU = PKI, OU = DoD, O = U.S. Government, C = US  
- Issuer: CN = DoD Root CA 3, OU = PKI, OU = DoD, O = U.S. Government, C = US 
- Serial #: 04c2  
- Validity: January 19, 2021 to January 20, 2027
- SHA-1 Hash: 6b250683b996e2581696f499061b5581a7867c89
- CRL DP: [http://crl.disa.mil/crl/DODDERILITYCA_1.crl](http://crl.disa.mil/crl/DODDERILITYCA_1.crl){:target="_blank"}{:rel="noopener noreferrer"}

**DoD ID CA-73 (Not Yet Operational)**
- Subject: CN = DOD ID CA-73, OU = PKI, OU = DoD, O = U.S. Government, C = US  
- Issuer: CN = DoD Root CA 6, OU = PKI, OU = DoD, O = U.S. Government, C = US 
- Serial #: 49  
- Validity: May 16, 2023 to May 15, 2029
- SHA-1 Hash: ce68b25fa532d959935aeb2c29e1358531903535
- CRL DP: [http://crl.disa.mil/crl/DODIDCA_73.crl](http://crl.disa.mil/crl/DODIDCA_73.crl){:target="_blank"}{:rel="noopener noreferrer"}

**DoD ID CA-72 (Not Yet Operational)**
- Subject: CN = DOD ID CA-72, OU = PKI, OU = DoD, O = U.S. Government, C = US  
- Issuer: CN = DoD Root CA 6, OU = PKI, OU = DoD, O = U.S. Government, C = US 
- Serial #: 48  
- Validity: May 16, 2023 to May 15, 2029
- SHA-1 Hash: ce68b25fa532d959935aeb2c29e1358531903535
- CRL DP: [http://crl.disa.mil/crl/DODIDCA_72.crl](http://crl.disa.mil/crl/DODIDCA_72.crl){:target="_blank"}{:rel="noopener noreferrer"}

**DoD ID CA-70 (Not Yet Operational)**
- Subject: CN = DOD ID CA-70, OU = PKI, OU = DoD, O = U.S. Government, C = US  
- Issuer: CN = DoD Root CA 6, OU = PKI, OU = DoD, O = U.S. Government, C = US 
- Serial #: 47  
- Validity: May 16, 2023 to May 15, 2029
- SHA-1 Hash: 6005f7e39bd475ce11dd4b74bc85b9c7182b9a53
- CRL DP: [http://crl.disa.mil/crl/DODIDCA_70.crl](http://crl.disa.mil/crl/DODIDCA_70.crl){:target="_blank"}{:rel="noopener noreferrer"}

**DoD ID CA-71**
- Subject: CN = DOD ID CA-71, OU = PKI, OU = DoD, O = U.S. Government, C = US  
- Issuer: CN = DoD Root CA 3, OU = PKI, OU = DoD, O = U.S. Government, C = US 
- Serial #: 070c  
- Validity: December 6, 2022 to December 6, 2028
- SHA-1 Hash: d398c9f709ea787f46afb2b31cbd964628afa3d4
- CRL DP: [http://crl.disa.mil/crl/DODIDCA_71.crl](http://crl.disa.mil/crl/DODIDCA_71.crl){:target="_blank"}{:rel="noopener noreferrer"}

**DoD ID CA-65**
- Subject: CN = DOD ID CA-65, OU = PKI, OU = DoD, O = U.S. Government, C = US  
- Issuer: CN = DoD Root CA 3, OU = PKI, OU = DoD, O = U.S. Government, C = US 
- Serial #: 054c  
- Validity: June 1, 2021 to June 2, 2027
- SHA-1 Hash: 2838d25ae351654a094f00348f4bd0ea3178d871
- CRL DP: [http://crl.disa.mil/crl/DODIDCA_65.crl](http://crl.disa.mil/crl/DODIDCA_65.crl){:target="_blank"}{:rel="noopener noreferrer"}

**DoD ID CA-64**
- Subject: CN = DOD ID CA-64, OU = PKI, OU = DoD, O = U.S. Government, C = US  
- Issuer: CN = DoD Root CA 3, OU = PKI, OU = DoD, O = U.S. Government, C = US 
- Serial #: 054b  
- Validity: June 1, 2021 to June 2, 2027
- SHA-1 Hash: d9991bd1e89ae5a8b1143c3c37f01103779b8db7
- CRL DP: [http://crl.disa.mil/crl/DODIDCA_64.crl](http://crl.disa.mil/crl/DODIDCA_64.crl){:target="_blank"}{:rel="noopener noreferrer"}

**DoD ID CA-63**
- Subject: CN = DOD ID CA-63, OU = PKI, OU = DoD, O = U.S. Government, C = US  
- Issuer: CN = DoD Root CA 3, OU = PKI, OU = DoD, O = U.S. Government, C = US 
- Serial #: 050f  
- Validity: April 6, 2021 to April 7, 2027
- SHA-1 Hash: 67b75160bd8299e2342f46cc8ac634b2afb33768
- CRL DP: [http://crl.disa.mil/crl/DODIDCA_63.crl](http://crl.disa.mil/crl/DODIDCA_63.crl){:target="_blank"}{:rel="noopener noreferrer"}

**DoD ID CA-62**
- Subject: CN = DOD ID CA-63, OU = PKI, OU = DoD, O = U.S. Government, C = US  
- Issuer: CN = DoD Root CA 3, OU = PKI, OU = DoD, O = U.S. Government, C = US 
- Serial #: 054a  
- Validity: April 6, 2021 to April 7, 2027
- SHA-1 Hash: 14f4cfd8364412a6a27e5bba82c5342ff9b337a7
- CRL DP: [http://crl.disa.mil/crl/DODIDCA_62.crl](http://crl.disa.mil/crl/DODIDCA_62.crl){:target="_blank"}{:rel="noopener noreferrer"}

**DoD ID CA-59**
- Subject: CN = DOD ID CA-59, OU = PKI, OU = DoD, O = U.S. Government, C = US  
- Issuer: CN = DoD Root CA 3, OU = PKI, OU = DoD, O = U.S. Government, C = US 
- Serial #: 0305  
- Validity: April 2, 2019 to April 2, 2025
- SHA-1 Hash: 1907fc2b223ee0301b45745bdb59aad90fe7c5d7 
- CRL DP: [http://crl.disa.mil/crl/DODIDCA_59.crl](http://crl.disa.mil/crl/DODIDCA_59.crl){:target="_blank"}{:rel="noopener noreferrer"} 

#### Entrust NFI Medium Assurance SSP CA
- Subject: OU = Entrust NFI Medium Assurance SSP CA, OU = Certification Authorities, O = Entrust, C = US
- Issuer: OU = Entrust Managed Services NFI Root CA, OU = Certification Authorities, O = Entrust, C = US 
- Serial #: 4aa96994
- Validity: October 12, 2021 to September 12, 2030 
- SHA-1 Hash: 31ef454001a9162cbc0498866f8d49070b799191
- CRL DP: [http://nfimediumsspweb.managed.entrust.com/CRLs/NFIMEDIUMSSPCA2.crl](http://nfimediumsspweb.managed.entrust.com/CRLs/NFIMEDIUMSSPCA2.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### Entrust NFI Medium Assurance SSP CA
- Subject: OU = Entrust NFI Medium Assurance SSP CA, OU = Certification Authorities, O = Entrust, C = US
- Issuer: OU = Entrust Managed Services NFI Root CA, OU = Certification Authorities, O = Entrust, C = US 
- Serial #: 4aa8b9ea 
- Validity: May 16, 2017 to November 16, 2027 
- SHA-1 Hash: 4b8818edc75e6983904ee71513c85e165f2d897c
- CRL DP: [http://nfimediumsspweb.managed.entrust.com/CRLs/NFIMEDIUMSSPCA1.crl](http://nfimediumsspweb.managed.entrust.com/CRLs/NFIMEDIUMSSPCA1.crl){:target="_blank"}{:rel="noopener noreferrer"} 

#### Entrust Managed Services SSP CA
- Subject: OU = Entrust Managed Services SSP CA, OU = Certification Authorities, O = Entrust, C = US
- Issuer: OU = Entrust Managed Services Root CA, OU = Certification Authorities, O = Entrust, C = US
- Serial #: 4481b22f
- Validity: July 11, 2023 to November 11, 2030
- SHA-1 Hash: 19fea49c468760edce9600a9da9657b484734d24
- CRL DP: [http://sspweb.managed.entrust.com/CRLs/EMSSSPCA4.crl](http://sspweb.managed.entrust.com/CRLs/EMSSSPCA4.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### Entrust Derived Credential SSP CA
- Subject: OU = Entrust Derived Credential SSP CA, OU = Certification Authorities, O = Entrust, C = US
- Issuer: OU = Entrust Managed Services Root CA, OU = Certification Authorities, O = Entrust, C = US
- Serial #: 44817ba9
- Validity: May 9, 2022 to July 9, 2029
- SHA-1 Hash: b3ddc2d8bc6c88883ef4c292a1175b1a267e7c23
- CRL DP: [http://feddcsweb.managed.entrust.com/CRLs/FedDCSCA1.crl](http://feddcsweb.managed.entrust.com/CRLs/FedDCSCA1.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### FTI Certification Authority
- Subject: OU = FTI Certification Authority, OU = FTI PKI Trust Infrastructure, O = Foundation for Trusted Identity, C = US
- Issuer: OU = STRAC Bridge Root Certification Authority, OU = STRAC PKI Trust Infrastructure, O = STRAC, C = US
- Serial #: 0141
- Validity: January 7, 2023 to January 6, 2026
- SHA-1 Hash: cbbc028fae9da429e1b34a4ccadd9cd815b40d9c
- CRL DP: [http://pki.fti.org/fti_ca/crl/FTICA.crl](http://pki.fti.org/fti_ca/crl/FTICA.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### HHS-FPKI-Intermediate-CA-E1
- Subject: CN = HHS-FPKI-Intermediate-CA-E1, OU = Certification Authorities, OU = HHS, O = U.S. Government, C = US 
- Issuer: OU = Entrust Managed Services Root CA, OU = Certification Authorities, O = Entrust, C = US
- Serial #: 44817282 
- Validity: February 23, 2022 to July 23, 2029 
- SHA-1 Hash: 492a40e6477eed5c39a58c24d6f3d5bffb0e1083 
- CRL DP: [http://hhspkicrl.managed.entrust.com/CRLs/HHSEntrustCA2.crl](http://hhspkicrl.managed.entrust.com/CRLs/HHSEntrustCA2.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### NASA Operational CA  
- Subject: OU = NASA Operational CA, OU = Certification Authorities, OU = NASA, O = U.S. Government, C = US  
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US 
- Serial #: 6334559d  
- Validity: April 8, 2023 to April 8 2033 
- SHA-1 Hash: 67ddd6f4be3b69568f591bf999db2ef3085f7c5b
- CRL DP: [https://pki.treas.gov/NASA_Operational_CA5.crl](https://pki.treas.gov/NASA_Operational_CA5.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### Naval Reactors SSP Agency CA G3
- Subject:  CN = Naval Reactors SSP Agency CA G3, OU = U.S. Department of Energy, O = U.S. Government, C = US
- Issuer: CN = Symantec SSP Intermediate CA - G4, O = Symantec Corporation, C = US
- Serial #: 18876cd9ffd738ab7e69350ecc9d41f8 
- Validity: December 9, 2015 to November 11, 2024 
- SHA-1 Hash: 50e722c3b05485b216bbc02eb1628e2593a5565d 
- CRL DP: [http://onsite-crl.pki.digicert.com/USDepartmentofEnergyNavalReactorsPIVG3/LatestCRL.crl](http://onsite-crl.pki.digicert.com/USDepartmentofEnergyNavalReactorsPIVG3/LatestCRL.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### NRC SSP Agency CA G4
- Subject: CN = NRC SSP Agency CA G4, OU = U.S. Nuclear Regulatory Commission, O = U.S. Government, C = US
- Issuer: CN = DigiCert Federal SSP Intermediate CA - G5, O = DigiCert, Inc., C = US  
- Serial #: 3a905c654791b26551e3b7077f27aa33   
- Validity: December 17, 2018 to December 12, 2028
- SHA-1 Hash: 1a03581dcf159d206accd7bdd176c788a0862353
- CRL DP: [http://pki-crl.symauth.com/ca_23580f2ce24946eab1793386d8e1b510/LatestCRL.crl](http://pki-crl.symauth.com/ca_23580f2ce24946eab1793386d8e1b510/LatestCRL.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### NRC PROD G6 Fed SSP CA
- Subject: CN = NRC SSP Agency CA G4, OU = U.S. Nuclear Regulatory Commission, O = U.S. Government, C = US
- Issuer: CN = DigiCert Federal SSP Intermediate CA - G5, O = DigiCert, Inc., C = US  
- Serial #: 55C7AC031A83BEF41BAA8A73A68BC0CE   
- Validity: April 12, 2022 to March 15, 2032
- SHA-1 Hash: 1F060CE528BDDFB3B429B7C76EEEB0F8B0FBC60A 
- CRL DP: [http://pki-crl.symauth.com/ca_ce00affea217ea042db01becf36671a4/LatestCRL.crl](http://pki-crl.symauth.com/ca_ce00affea217ea042db01becf36671a4/LatestCRL.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### ORC SSP 4
- Subject: CN = ORC SSP 4, O = ORC PKI, C = US
- Issuer: CN = Federal Common Policy CA, OU = FPKI, O = U.S. Government, C = US
- Serial #: 2ef9
- Validity: August 31, 2015 to January 21, 2024
- SHA-1 Hash: 3a70323069a4c41bc95663152e9ccc7111bb0623
- CRL DP: [http://crl-server.orc.com/CRLs/ORCSSP4.crl](http://crl-server.orc.com/CRLs/ORCSSP4.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### Senate PIV-I CA G5 PROD
- Subject: CN = Senate PIV-I CA G5 PROD, OU = Office of the Sergeant at Arms, OU = U.S. Senate, O = U.S. Government, C = US 
- Issuer: CN = DigiCert Class 3 SSP Intermediate CA - G4, O = DigiCert, Inc., C = US 
- Serial #: 2eec611f22944f9d462a5a8bbee06485
- Validity: March 24, 2021 to August 18, 2030 
- SHA-1 Hash: 816a2c18db2e5673205d17a98d0fffef8bf4777e 
- CRL DP: [http://pki-crl.symauth.com/ca_fc26996dc726cf860f12aa77d4270098/LatestCRL.crl](http://pki-crl.symauth.com/ca_fc26996dc726cf860f12aa77d4270098/LatestCRL.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### Senate PIV-I CA G6
- Subject: CN = Senate PIV-I CA G5 PROD, OU = Office of the Sergeant at Arms, OU = U.S. Senate, O = U.S. Government, C = US 
- Issuer: CN = WidePoint NFI Root 2, OU = Certification Authorities, O = WidePoint, C = US 
- Serial #: 68b3a082d2817ab76183e371219642aa20e7816a
- Validity: April 25, 2023 to December 31, 2030 
- SHA-1 Hash: 1d946c2a1724ed576e436604f02dbfc3f2dccff0 
- CRL DP: [http://crl-server.orc.com/CRLs/SenatePIVICAG6.crl](http://crl-server.orc.com/CRLs/SenatePIVICAG6.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### Social Security Administration Certification Authority
- Subject: OU = Social Security Administration Certification Authority, OU = SSA, O = U.S. Government, C = US
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Serial #: 6334553a 
- Validity: March 4, 2023 to March 4, 2033
- SHA-1 Hash: 533f881329d791d5a197d4dd71bafae6f7222733
- CRL DP: [https://pki.treas.gov/SSA_CA4.crl](https://pki.treas.gov/SSA_CA4.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### Treasury OCIO CA
- Subject: OU = OCIO CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Serial #: 6334565d
- Validity: Mau 20, 2023 to May 20, 2033
- SHA-1 Hash: 3f3a62c0d4b5a2d70054ea7de33c9a691937ec02
- CRL DP: [https://pki.treas.gov/OCIO_CA6.crl](https://pki.treas.gov/OCIO_CA6.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### U.S. Department of Education Agency CA - G5
- Subject: CN = U.S. Department of Education Agency CA - G5, OU = U.S. Department of Education, O = U.S. Government, C = US
- Issuer: CN = DigiCert Federal SSP Intermediate CA - G5, O = DigiCert, Inc., C = US
- Serial #: 5C23B98A6FF5F543B2768F6D19556C4C
- Validity: June 9, 2020 to December 12, 2028 
- SHA-1 Hash: 6F48424AE8A01C2A77213A9D34F5761DAACD9EAC
- CRL DP: [http://pki-crl.symauth.com/ca_db1ff205d5a9b79af46c7896d15cb2a9/LatestCRL.crl](http://pki-crl.symauth.com/ca_db1ff205d5a9b79af46c7896d15cb2a9/LatestCRL.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### U.S. Department of State PIV CA2
- Subject: OU = U.S. Department of State PIV CA2, OU = Certification Authorities, OU = PIV, OU = Department of State, O = U.S. Government, C = US
- Issuer: CN = U.S. Department of State AD Root CA, CN = AIA, CN = Public Key Services, CN = Services, CN = Configuration, DC = state, DC = sbu, 
- Serial #: 51b0b97f 
- Validity: January 24, 2020 to January 24, 2030
- SHA-1 Hash: 68A4E9AB7A1FB8FB85316A770FF9CA874C020724
- CRL DP: [http://crls.pki.state.gov/crls/DoSADPKIPIVCA2-1.crl](http://crls.pki.state.gov/crls/DoSADPKIPIVCA2-1.crl){:target="_blank"}{:rel="noopener noreferrer"}
 
#### U.S. Department of Transportation Agency CA G5
- Subject: CN = U.S. Department of Transportation CA G5, OU = U.S. Department of Transportation, O = U.S. Government, C = US 
- Issuer: CN = DigiCert Federal SSP Intermediate CA - G5, O = DigiCert, Inc., C = US
- Serial #: 0ed81c303ea3566787faca36899a931a
- Validity: March 4, 2019 to December 12, 2028
- SHA-1 Hash: b1d05e5b9e025ea4b3b3e30dc3f45a19f9ec51f6
- CRL DP: [http://onsite-crl.pki.digicert.com/USDepartmentofTransportationFAAPIVG5/LatestCRL.crl](http://onsite-crl.pki.digicert.com/USDepartmentofTransportationFAAPIVG5/LatestCRL.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### U.S. Department of Transportation Agency CA G6
- Subject: CN = U.S. Department of Transportation CA G6, OU = U.S. Department of Transportation, O = U.S. Government, C = US 
- Issuer: CN = WidePoint SSP Intermediate CA, O = ORC PKI, C = US
- Serial #: 309b986d8a7fb52a7ea7dc858693c5e06e7ae33a
- Validity: May 4, 2023 to April 7, 2033
- SHA-1 Hash: 7b6dcb34ab284ec897f0ffe1a2f8f95082f09c74
- CRL DP: [http://crl-server.orc.com/CRLs/DoTAgencyCAG6.crl](http://crl-server.orc.com/CRLs/DoTAgencyCAG6.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### USPTO INTR CA1
- Subject: CN = USPTO_INTR_CA1, CN = AIA, CN = Public Key Services, CN = Services, CN = Configuration, DC = uspto, DC = gov
- Issuer: CN = USPTO_INTR_CA1, CN = AIA, CN = Public Key Services, CN = Services, CN = Configuration, DC = uspto, DC = gov
- Serial #: 162a8a8ddfb79fa3460a7a92765926fb108fd6aa
- Validity: October 19, 2023 to October 19, 2026
- SHA-1 Hash: 02ecec9eb7229055c57caeaade6f1ae056fb4327
- CRL DP: [http://ipki.uspto.gov/IPKI/CRLs/CombinedCRL4.crl](http://ipki.uspto.gov/IPKI/CRLs/CombinedCRL4.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### Veterans Affairs User CA B1
- Subject: CN = Veterans Affairs User CA B1, OU = PKI, OU = Services, DC = va, DC = gov
- Issuer: CN = Verizon SSP CA A2, OU = SSP, O = Verizon, C = US
- Serial #: 251ea36536cfebb0e9d1334d0cb96102bab16589
- Validity: January 25, 2017 to January 25, 2027
- SHA-1 Hash: 671461948b8ef765fe5e1248222af3fcdd457564
- CRL DP: [http://crl.pki.va.gov/PKI/CRL/VET-SSP-CA-B1.crl](http://crl.pki.va.gov/PKI/CRL/VET-SSP-CA-B1.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### Veterans Affairs CA B3
- Subject: CN = Veterans Affairs CA B3, OU = PKI, OU = Services, DC = va, DC = gov
- Issuer: CN = Verizon SSP CA A2, OU = SSP, O = Verizon, C = US
- Serial #: 5ecb874a1b24b1113848e40e76dc3ea4449624fe
- Validity: December 15, 2017 to December 15, 2027
- SHA-1 Hash: fddb25c3cda647fd56954b58de95878422fb9c11
- CRL DP: [http://crl.pki.va.gov/PKI/CRL/VACAB3.crl](http://crl.pki.va.gov/PKI/CRL/VACAB3.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### WidePoint ORC NFI 4
- Subject: CN = WidePoint ORC NFI 4, OU = Certification Authorities, O = WidePoint, C = US
- Issuer: CN = WidePoint NFI Root 2, OU = Certification Authorities, O = WidePoint, C = US
- Serial #: 3581750bd6e26757bcb9e0a4513da84946587ebf
- Validity: February 18, 2020 to February 18, 2030
- SHA-1 Hash: 5a95aea990a7aec492134a5b437cf3324f260793
- CRL DP: [http://crl.xca.xpki.com/CRLs/XTec_PIVI_CA1.crl](http://crl.xca.xpki.com/CRLs/XTec_PIVI_CA1.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### WidePoint ORC SSP 5
- Subject: CN = WidePoint ORC SSP 5, O = ORC PKI, C = US
- Issuer: CN = Federal Common Policy CA G2, OU = FPKI, O = U.S. Government, C = US
- Serial #: 210b3f17db750e616eb25f3f0b4933e5a98c449b
- Validity: November 19, 2020 to November 5, 2030
- SHA-1 Hash: 80f4731a60fd5f2eb0468d0629310daa50ad210d
- CRL DP: [http://crl-server.orc.com/CRLs/WIDEPOINTORCSSP5.crl](http://crl-server.orc.com/CRLs/WIDEPOINTORCSSP5.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### WidePoint NFI CA 5
- Subject: CN = WidePoint NFI CA 5, O = ORC PKI, C = US
- Issuer: CN = WidePoint NFI Root 2, OU = Certification Authorities, O = WidePoint, C = US
- Serial #: 671b355a39b72fddf67723f142ed726d4e0307b4
- Validity: April 17, 2020 to April 18, 2030
- SHA-1 Hash: 52a2b89934a8f53719d620697496a6eb82a06e13
- CRL DP: [http://crl-server.orc.com/CRLs/WIDEPOINTNFI5.crl](http://crl-server.orc.com/CRLs/WIDEPOINTNFI5.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### WidePoint NFI CA 6
- Subject: CN = WidePoint NFI CA 6, O = ORC PKI, C = US
- Issuer: CN = WidePoint NFI Root 2, OU = Certification Authorities, O = WidePoint, C = US
- Serial #: 15707f8b78d4594f0fdc0d7884241c7659dd83e3
- Validity: February 3, 2021 to December 31, 2030
- SHA-1 Hash: 8a17d236acb45af809c0a4555f7142d82ae08736
- CRL DP: [http://crl-server.orc.com/CRLs/WIDEPOINTNFI6.crl](http://crl-server.orc.com/CRLs/WIDEPOINTNFI6.crl){:target="_blank"}{:rel="noopener noreferrer"}


## Maintenance Mode Issuing CA Certificate Details
These CA certificates have issued PIV, PIV-I and/or Derived PIV authentication certificates previously and are in maintenance mode only.  Agency system administrators may need to include these CAs in configurations. 

#### Department of Veterans Affairs CA (1 of 2)
- Subject: OU = Department of Veterans Affairs CA, OU = Certification Authorities, OU = Department of Veterans Affairs, O = U.S. Government, C = US
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Serial #: 5ccb3215
- Validity: June 22, 2019 to June 22, 2029
- SHA-1 Hash: 76cc898f03eb0fc7e0877aac30a0c1340bb34879
- CRL DP: [http://pki.treas.gov/VA_CA2.crl](http://pki.treas.gov/VA_CA2.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### Department of Veterans Affairs CA (2 of 2)
- Subject: OU = Department of Veterans Affairs CA, OU = Certification Authorities, OU = Department of Veterans Affairs, O = U.S. Government, C = US
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Serial #: 4e398179
- Validity: October 17, 2015 to October 17, 2025 
- SHA-1 Hash: e2edb0df1fe8068717a08e38741b5bc4c38029d0 
- CRL DP: [http://pki.treasury.gov/VA_CA1.crl](http://pki.treasury.gov/VA_CA1.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### DHS CA4 (1 of 2)
- Subject: OU = DHS CA4, OU = Certification Authorities, OU = Department of Homeland Security, O = U.S. Government, C = US 
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Serial #: 5ccb31ca 
- Validity: June 6, 2019 to June 6, 2029
- SHA-1 Hash: 58085a64e181573f4fd917c5c021eb1cf344dd5f 
- CRL DP: [http://pki.treas.gov/DHS_CA3.crl](http://pki.treas.gov/DHS_CA3.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### DHS CA4 (2 of 2)
- Subject: OU = DHS CA4, OU = Certification Authorities, OU = Department of Homeland Security, O = U.S. Government, C = US 
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Serial #: 4e398128 
- Validity: June 13, 2015 to June 13, 2025
- SHA-1 Hash: a31a5df2f1c1019b9cf5b7ca4e3b26650b9ca93f 
- CRL DP: [http://pki.treasury.gov/DHS_CA2.crl](http://pki.treasury.gov/DHS_CA2.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### DoD Issuing CAs (several CAs in maintenance mode)
**DoD ID CA-52**
- Subject: CN = DOD ID CA-52, OU = PKI, OU = DoD, O = U.S. Government, C = US  
- Issuer: CN = DoD Root CA 3, OU = PKI, OU = DoD, O = U.S. Government, C = US 
- Serial #: 012a  
- Validity: November 22, 2016 to November 23, 2022
- SHA-1 Hash: 82118887716a07449fadd643eef739f04981087c 
- CRL DP: [http://crl.disa.mil/crl/DODIDCA_52.crl](http://crl.disa.mil/crl/DODIDCA_52.crl){:target="_blank"}{:rel="noopener noreferrer"}

**DoD ID CA-51**
- Subject: CN = DOD ID CA-51, OU = PKI, OU = DoD, O = U.S. Government, C = US  
- Issuer: CN = DoD Root CA 3, OU = PKI, OU = DoD, O = U.S. Government, C = US 
- Serial #: 0129   
- Validity: November 22, 2016 to November 23, 2022
- SHA-1 Hash: f0a49bcf0fd1fc1521b31b2796fb829780050ee4 
- CRL DP: [http://crl.disa.mil/crl/DODIDCA_51.crl](http://crl.disa.mil/crl/DODIDCA_51.crl){:target="_blank"}{:rel="noopener noreferrer"}  

**DoD ID CA-50**
- Subject: CN = DOD ID CA-50, OU = PKI, OU = DoD, O = U.S. Government, C = US  
- Issuer: CN = DoD Root CA 3, OU = PKI, OU = DoD, O = U.S. Government, C = US 
- Serial #: 0128     
- Validity: November 22, 2016 to November 23, 2022
- SHA-1 Hash: 5e2e392c6ca55e9bd3f522969ffa6b3657a5d910  
- CRL DP: [http://crl.disa.mil/crl/DODIDCA_50.crl](http://crl.disa.mil/crl/DODIDCA_50.crl){:target="_blank"}{:rel="noopener noreferrer"}  

**DoD ID CA-49**
- Subject: CN = DOD ID CA-49, OU = PKI, OU = DoD, O = U.S. Government, C = US  
- Issuer: CN = DoD Root CA 3, OU = PKI, OU = DoD, O = U.S. Government, C = US 
- Serial #: 0127  
- Validity: November 22, 2016 to November 23, 2022
- SHA-1 Hash: 6cd6e8bd7acd2f08e21693988a309eca6772c134  
- CRL DP: [http://crl.disa.mil/crl/DODIDCA_49.crl](http://crl.disa.mil/crl/DODIDCA_49.crl){:target="_blank"}{:rel="noopener noreferrer"}  

#### Entrust Managed Services SSP CA (1 of 2)
- Subject: OU = Entrust Managed Services SSP CA, OU = Certification Authorities, O = Entrust, C = US
- Issuer: OU = Entrust Managed Services Root CA, OU = Certification Authorities, O = Entrust, C = US
- Serial #: 448107b6
- Validity: August 13, 2019 to July 13, 2029
- SHA-1 Hash: 722e8abbe6b66e47d1bcec3c7ec47aa5bbe4d3c5
- CRL DP: [http://sspweb.managed.entrust.com/CRLs/EMSSSPCA3.crl](http://sspweb.managed.entrust.com/CRLs/EMSSSPCA3.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### Entrust Managed Services SSP CA (2 of 2)
- Subject: OU = Entrust Managed Services SSP CA, OU = Certification Authorities, O = Entrust, C = US
- Issuer: OU = Entrust Managed Services Root CA, OU = Certification Authorities, O = Entrust, C = US
- Serial #: 448063d5 
- Validity: July 30, 2015 to July 23, 2025 
- SHA-1 Hash: dec01bf40c153fbc38bf2ca766b04f9dfbda3064 
- CRL DP: [http://sspweb.managed.entrust.com/CRLs/EMSSSPCA2.crl](http://sspweb.managed.entrust.com/CRLs/EMSSSPCA2.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### Entrust Derived Credential SSP CA
- Subject: OU = Entrust Derived Credential SSP CA, OU = Certification Authorities, O = Entrust, C = US
- Issuer: OU = Entrust Managed Services Root CA, OU = Certification Authorities, O = Entrust, C = US
- Serial #: 4480b181
- Validity: July 13, 2017 to July 13, 2025
- SHA-1 Hash: e9245a056b17cb5be2e36abf1b8dae6dff9d3729
- CRL DP: [http://feddcsweb.managed.entrust.com/CRLs/FedDCSCA.crl](http://feddcsweb.managed.entrust.com/CRLs/FedDCSCA.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### HHS-FPKI-Intermediate-CA-E1
- Subject: CN = HHS-FPKI-Intermediate-CA-E1, OU = Certification Authorities, OU = HHS, O = U.S. Government, C = US 
- Issuer: OU = Entrust Managed Services Root CA, OU = Certification Authorities, O = Entrust, C = US
- Serial #: 44809a90 
- Validity: December 20, 2016 to July 20, 2025 
- SHA-1 Hash: d5e311406437c35a79bc023c2bbb57049f5d8f77 
- CRL DP: [http://hhspkicrl.managed.entrust.com/CRLs/HHSEntrustCA1.crl](http://hhspkicrl.managed.entrust.com/CRLs/HHSEntrustCA1.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### NASA Operational CA (1 of 2) 
- Subject: OU = NASA Operational CA, OU = Certification Authorities, OU = NASA, O = U.S. Government, C = US  
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US 
- Serial #: 5ccb3196  
- Validity: May 4 2019 to May 4 2029 
- SHA-1 Hash: f504012b1fe57b4381e3bf5ba9f491144ed76ee1
- CRL DP: [https://pki.treas.gov/NASA_Operational_CA4.crl](https://pki.treas.gov/NASA_Operational_CA4.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### NASA Operational CA (2 of 2)
- Subject: OU = NASA Operational CA, OU = Certification Authorities, OU = NASA, O = U.S. Government, C = US  
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US 
- Serial #: 4e398116   
- Validity: June 13, 2015 to June 13, 2025 
- SHA-1 Hash: fe7572bbde7b7f44152acc8e1715c18714dc9d63  
- CRL DP: [http://pki.treasury.gov/NASA_Operational_CA3.crl](http://pki.treasury.gov/NASA_Operational_CA3.crl){:target="_blank"}{:rel="noopener noreferrer"} 
   
#### NRC SSP Agency CA G3
- Subject: CN = NRC SSP Agency CA G3, OU = U.S. Nuclear Regulatory Commission, O = U.S. Government, C = US
- Issuer: CN = Symantec SSP Intermediate CA - G4, O = Symantec Corporation, C = US  
- Serial #: 100f05dd316ca819d9d39febc661b326   
- Validity: November 24, 2014 to November 11, 2024 
- SHA-1 Hash: e40bee41cf7afa2ddba4eb10ff3a39f81ec48d20 
- CRL DP: [http://onsite-crl.pki.digicert.com/USNuclearRegulatoryCommissionSSPPIVG3/LatestCRL.crl](http://onsite-crl.pki.digicert.com/USNuclearRegulatoryCommissionSSPPIVG3/LatestCRL.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### Senate PIV-I CA G4
- Subject: CN = Senate PIV-I CA G4, OU = Office of the Sergeant at Arms, OU = U.S. Senate, O = U.S. Government, C = US 
- Issuer: CN = Symantec Class 3 SSP Intermediate CA - G3, OU = Symantec Trust Network, O = Symantec Corporation, C = US 
- Serial #: 52c8b762e38b30212288790964b7ab2c 
- Validity: August 1, 2016 to September 28, 2024 
- SHA-1 Hash: 3c9d0bc463dd1ac0f91012b440e9bdc1cdcd0eff 
- CRL DP: [http://onsite-crl.pki.digicert.com/USSenateSSPPIVIG4PROD/LatestCRL.crl](http://onsite-crl.pki.digicert.com/USSenateSSPPIVIG4PROD/LatestCRL.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### Social Security Administration Certification Authority (1 of 2)
- Subject: OU = Social Security Administration Certification Authority, OU = SSA, O = U.S. Government, C = US
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Serial #: 5bf45959 
- Validity: April 7, 2019 to April 7, 2029
- SHA-1 Hash: 897a79fd488d426d6c50d0ba026f698bca3334f4
- CRL DP: [https://pki.treas.gov/SSA_CA3.crl](https://pki.treas.gov/SSA_CA3.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### Social Security Administration Certification Authority (2 of 2)
- Subject: OU = Social Security Administration Certification Authority, OU = SSA, O = U.S. Government, C = US
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Serial #: 4e3980ef  
- Validity: April 19, 2015 to April 19, 2025 
- SHA-1 Hash: bb6c62e648d503f1beab75ef5f69b17256175993 
- CRL DP: [http://pki.treasury.gov/SSA_CA2.crl](http://pki.treasury.gov/SSA_CA2.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### Treasury OCIO CA (1 of 2)
- Subject: OU = OCIO CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Serial #: 5ccb31fe
- Validity: June 22, 2019 to June 22, 2029
- SHA-1 Hash: e651a5dc6a1305613a22e46548e1666650c2825f
- CRL DP: [https://pki.treas.gov/OCIO_CA5.crl](https://pki.treas.gov/OCIO_CA5.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### Treasury OCIO CA (2 of 2)
- Subject: OU = OCIO CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Serial #: 4e398101 
- Validity: April 19, 2015 to April 19, 2025 
- SHA-1 Hash: 5ad254c3ecebb5b7e108caa0cc8030598a7b7709 
- CRL DP: [http://pki.treasury.gov/OCIO_CA4.crl](http://pki.treasury.gov/OCIO_CA4.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### U.S. Department of Education Agency CA - G4
- Subject: CN = U.S. Department of Education Agency CA - G4, OU = U.S. Department of Education, O = U.S. Government, C = US
- Issuer: CN = Symantec SSP Intermediate CA - G4, O = Symantec Corporation, C = US
- Serial #: 224ad7d35a9d34350671f9b8be45a23a
- Validity: July 20, 2015 to November 11, 2024 
- SHA-1 Hash: 69e2abc173047f844e3f53cb2cbd138ba9063de8
- CRL DP:  [http://onsite-crl.pki.digicert.com/USDepartmentofEducationDoEDG4PIV/LatestCRL.crl](http://onsite-crl.pki.digicert.com/USDepartmentofEducationDoEDG4PIV/LatestCRL.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### U.S. Department of State PIV CA2
- Subject: OU = U.S. Department of State PIV CA2, OU = Certification Authorities, OU = PIV, OU = Department of State, O = U.S. Government, C = US
- Issuer: CN = U.S. Department of State AD Root CA, CN = AIA, CN = Public Key Services, CN = Services, CN = Configuration, DC = state, DC = sbu, 
- Serial #: 51b02402
- Validity: August 3, 2016 to August 3, 2026
- SHA-1 Hash: ffe07fb428bcef4bf38ebbfae1e42339e03e7756 
- CRL DP: [http://crls.pki.state.gov/crls/DoSADPKIPIVCA2.crl](http://crls.pki.state.gov/crls/DoSADPKIPIVCA2.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### U.S. Department of Transportation Agency CA G4
- Subject: CN = U.S. Department of Transportation Agency CA G4, OU = U.S. Department of Transportation, O = U.S. Government, C = US
- Issuer: CN = Symantec SSP Intermediate CA - G4, O = Symantec Corporation, C = US
- Serial #: 61a90f3e5ff532f9fe6209d931279a82
- Validity: December 10, 2014 to November 11, 2024
- SHA-1 Hash: dc5b590800765864587902af983c21a7209be320
- CRL DP: [http://onsite-crl.pki.digicert.com/USDepartmentofTransportationFAAPIVG4/LatestCRL.crl](http://onsite-crl.pki.digicert.com/USDepartmentofTransportationFAAPIVG4/LatestCRL.crl){:target="_blank"}{:rel="noopener noreferrer"}

#### USPTO INTR CA1
- Subject: CN = USPTO_INTR_CA1, CN = AIA, CN = Public Key Services, CN = Services, CN = Configuration, DC = uspto, DC = gov
- Issuer: CN = USPTO_INTR_CA1, CN = AIA, CN = Public Key Services, CN = Services, CN = Configuration, DC = uspto, DC = gov
- Serial #: 4c296f47
- Validity: April 7, 2018 to December 7, 2029
- SHA-1 Hash: bc67b9e65ee05c3742c27187259ded3e6112a587
- CRL DP: [http://ipki.uspto.gov/IPKI/CRLs/CombinedCRL3.crl](http://ipki.uspto.gov/IPKI/CRLs/CombinedCRL3.crl){:target="_blank"}{:rel="noopener noreferrer"}

## FPKI System Changes and Notifications

This page lists the changes to certification authorities and supporting systems operating within the Federal PKI community.  

The communication of changes, and planned or unplanned system outages, is required by the certificate policies and the incident management process.  Strong communication allows for planning and response and benefits the Federal PKI community as a whole.  Planned changes of the these types require notifications two (2) weeks in advance:

- Changes to Certificate Revocation List Distribution Points
- Changes to Online Certificate Status Protocol (OCSP) endpoints
- Introducing new URIs or retiring old URIs referenced in the Certificates profiles in use
- Signing or revoking a _Certificate Authority (CA)_ certificate

System **outages** - either through a planned maintenance activity or unplanned event - may also be posted on this page, and may trigger the Incident Management process.    

To report a change **or** system outage not listed below, please email <span>fpki</span><span>@</span><span>gsa</span><span>.</span><span>gov</span>.

## How to add a new notification
System notifications can be submitted via either GitHub or email.

### Submit notification via GitHub issue 

  - Select [Add New Notification](https://github.com/GSA/idmanagement.gov/issues/new?assignees=&labels=Federal+PKI+-+System+Notification&projects=&template=fpki-system-notification.md&title=System+Notification+for%3A+%3CYour+Organization%3E){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

  - This will open a new Issue form with input information for notification information.
  - Enter the information and click 'Submit new issue' to submit the notification.

### Submit notification via email
The notification can also be emailed to <span>fpki</span><span>@</span><span>gsa</span><span>.</span><span>gov</span>. The email should contain the following information.

Subject:  FPKI System Notification - System Name 
  
- notice_date: the date you are submitting the issue/notification
- system: the generic PKI provider (e.g., Entrust NFI, WidePoint SSP, etc.)
- change_type: one of the following - CA Certificate Issuance, CA Certificate Revocation, URI Change, System Outage, Intent to Issue/Revoke CA Certificate
- change_description: describe the CA certificate activity (to include rekey activities) and include activity start and end dates if applicable
- contact: the best email address regarding the activity, remember to format this by spelling out dashes and dots to prevent automated email scrapers
- ca_certificate_issuer: the full DN of the issuer
- ca_certificate_subject: the full DN of the subject
- ca_certificate_hash: the SHA-1 thumbprint of the CA certificate
- ca_cdp_uri: Certificate Revocation List link
- ca_aia_uri: the authority information access certificate bundle for the CA certificate
- ca_sia_uri: the subject information access certificate bundle for the CA certificate
- ca_ocsp_uri: the OCSP address generally contained in the AIA for the CA certificate
- ee_cdp_uri: the CRL DP link for end entity certificates signed by the CA certificate
- ee_ocsp_uri: the OCSP link for end entity certificates signed by the CA certificate


## Notifications
<!-- This block loops through the notifications .yml file under the _data directory. -->

<!-- start of notifications accordion  -->
<div class="usa-accordion usa-accordion--bordered">
  <!-- Start of current notifications -->
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="true"
      aria-controls="n-a1">2024 (Current)</button>
  </h4>
  <div id="n-a1" class="usa-accordion__content usa-prose">
    <div class="usa-width-one-whole">
      {% for notification in site.data.fpkinotifications %}
        {% assign nnd = notification.notice_date | split:" " %}
        {% if nnd.last == '2024' %}
        <ul class="usa-unstyled-list">
          <hr>
          <li><strong>Notice Date: </strong>{{ notification.notice_date }} </li>
          <li><strong>System:</strong> {{ notification.system }} </li>
          <li><strong>Type:</strong> {{ notification.change_type }} </li>
          <li><strong>Change Description:</strong> {{ notification.change_description }} </li>
          <li><strong>Contact:</strong> {{ notification.contact }}</li>
          <li><strong>Certificate Issuer:</strong> {{ notification.ca_certificate_issuer }}</li>
          <li><strong>Certificate Subject:</strong> {{ notification.ca_certificate_subject }}</li>
          <li><strong>Certificate SHA1 Hash:</strong> {{ notification.ca_certificate_hash }}</li>
          <li><strong>Certificate Revocation List:</strong> {{ notification.cdp_uri }}</li>
          <li><strong>Certificate Bundle (AIA):</strong> {{ notification.aia_uri }}</li>
          <li><strong>Certificate Bundle (SIA):</strong> {{ notification.sia_uri }}</li>
          <li><strong>OCSP:</strong> {{ notification.ocsp_uri }}</li>
          <li><strong>EE CRL DP:</strong> {{ notification.ee_cdp_uri }}</li>
          <li><strong>EE OCSP:</strong> {{ notification.ee_ocsp_uri }}</li>
        </ul>
        {% else %}
          {% continue %}
        {% endif %}
      {% endfor %}
    </div>
  </div>
  <!-- end of current notifications -->
    <hr>
  <!-- Start of 2023 notifications -->
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="n-a6">2023</button>
  </h4>
  <div id="n-a6" class="usa-accordion__content usa-prose">
   <div class="usa-width-one-whole">
      {% for notification in site.data.fpkinotifications %}
        {% assign nnd = notification.notice_date | split:" " %}
        {% if nnd.last == '2023' %}
        <ul class="usa-unstyled-list">
          <hr>
          <li><strong>Notice Date: </strong>{{ notification.notice_date }} </li>
          <li><strong>System:</strong> {{ notification.system }} </li>
          <li><strong>Type:</strong> {{ notification.change_type }} </li>
          <li><strong>Change Description:</strong> {{ notification.change_description }} </li>
          <li><strong>Contact:</strong> {{ notification.contact }}</li>
          <li><strong>Certificate Issuer:</strong> {{ notification.ca_certificate_issuer }}</li>
          <li><strong>Certificate Subject:</strong> {{ notification.ca_certificate_subject }}</li>
          <li><strong>Certificate SHA1 Hash:</strong> {{ notification.ca_certificate_hash }}</li>
          <li><strong>Certificate Revocation List:</strong> {{ notification.cdp_uri }}</li>
          <li><strong>Certificate Bundle (AIA):</strong> {{ notification.aia_uri }}</li>
          <li><strong>Certificate Bundle (SIA):</strong> {{ notification.sia_uri }}</li>
          <li><strong>OCSP:</strong> {{ notification.ocsp_uri }}</li>
          <li><strong>EE CRL DP:</strong> {{ notification.ee_cdp_uri }}</li>
          <li><strong>EE OCSP:</strong> {{ notification.ee_ocsp_uri }}</li>
        </ul>
        {% else %}
          {% continue %}
        {% endif %}
      {% endfor %}
    </div>
  </div>
  <!-- end of 2023 notifications -->
  <!-- Start of 2022 notifications -->
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="n-a5">2022</button>
  </h4>
  <div id="n-a5" class="usa-accordion__content usa-prose">
   <div class="usa-width-one-whole">
      {% for notification in site.data.fpkinotifications %}
        {% assign nnd = notification.notice_date | split:" " %}
        {% if nnd.last == '2022' %}
        <ul class="usa-unstyled-list">
          <hr>
          <li><strong>Notice Date: </strong>{{ notification.notice_date }} </li>
          <li><strong>System:</strong> {{ notification.system }} </li>
          <li><strong>Type:</strong> {{ notification.change_type }} </li>
          <li><strong>Change Description:</strong> {{ notification.change_description }} </li>
          <li><strong>Contact:</strong> {{ notification.contact }}</li>
          <li><strong>Certificate Issuer:</strong> {{ notification.ca_certificate_issuer }}</li>
          <li><strong>Certificate Subject:</strong> {{ notification.ca_certificate_subject }}</li>
          <li><strong>Certificate SHA1 Hash:</strong> {{ notification.ca_certificate_hash }}</li>
          <li><strong>Certificate Revocation List:</strong> {{ notification.cdp_uri }}</li>
          <li><strong>Certificate Bundle (AIA):</strong> {{ notification.aia_uri }}</li>
          <li><strong>Certificate Bundle (SIA):</strong> {{ notification.sia_uri }}</li>
          <li><strong>OCSP:</strong> {{ notification.ocsp_uri }}</li>
          <li><strong>EE CRL DP:</strong> {{ notification.ee_cdp_uri }}</li>
          <li><strong>EE OCSP:</strong> {{ notification.ee_ocsp_uri }}</li>
        </ul>
        {% else %}
          {% continue %}
        {% endif %}
      {% endfor %}
    </div>
  </div>
  <!-- end of 2022 notifications -->
  <!-- Start of 2021 notifications -->
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="n-a4">2021</button>
  </h4>
  <div id="n-a4" class="usa-accordion__content usa-prose">
   <div class="usa-width-one-whole">
      {% for notification in site.data.fpkinotifications %}
        {% assign nnd = notification.notice_date | split:" " %}
        {% if nnd.last == '2021' %}
        <ul class="usa-unstyled-list">
          <hr>
          <li><strong>Notice Date: </strong>{{ notification.notice_date }} </li>
          <li><strong>System:</strong> {{ notification.system }} </li>
          <li><strong>Type:</strong> {{ notification.change_type }} </li>
          <li><strong>Change Description:</strong> {{ notification.change_description }} </li>
          <li><strong>Contact:</strong> {{ notification.contact }}</li>
          <li><strong>Certificate Issuer:</strong> {{ notification.ca_certificate_issuer }}</li>
          <li><strong>Certificate Subject:</strong> {{ notification.ca_certificate_subject }}</li>
          <li><strong>Certificate SHA1 Hash:</strong> {{ notification.ca_certificate_hash }}</li>
          <li><strong>Certificate Revocation List:</strong> {{ notification.cdp_uri }}</li>
          <li><strong>Certificate Bundle (AIA):</strong> {{ notification.aia_uri }}</li>
          <li><strong>Certificate Bundle (SIA):</strong> {{ notification.sia_uri }}</li>
          <li><strong>OCSP:</strong> {{ notification.ocsp_uri }}</li>
          <li><strong>EE CRL DP:</strong> {{ notification.ee_cdp_uri }}</li>
          <li><strong>EE OCSP:</strong> {{ notification.ee_ocsp_uri }}</li>
        </ul>
        {% else %}
          {% continue %}
        {% endif %}
      {% endfor %}
    </div>
  </div>
  <!-- end of 201 notifications -->
  <!-- Start of older notifications -->
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="n-a3">Older</button>
  </h4>
  <div id="n-a3" class="usa-accordion__content usa-prose">
   <div class="usa-width-one-whole">
      {% for notification in site.data.fpkinotifications %}
        {% assign nnd = notification.notice_date | split:" " %}
        {% if nnd.last < '2021' %}
        <ul class="usa-unstyled-list">
          <hr>
          <li><strong>Notice Date: </strong>{{ notification.notice_date }} </li>
          <li><strong>System:</strong> {{ notification.system }} </li>
          <li><strong>Type:</strong> {{ notification.change_type }} </li>
          <li><strong>Change Description:</strong> {{ notification.change_description }} </li>
          <li><strong>Contact:</strong> {{ notification.contact }}</li>
          <li><strong>Certificate Issuer:</strong> {{ notification.ca_certificate_issuer }}</li>
          <li><strong>Certificate Subject:</strong> {{ notification.ca_certificate_subject }}</li>
          <li><strong>Certificate SHA1 Hash:</strong> {{ notification.ca_certificate_hash }}</li>
          <li><strong>Certificate Revocation List:</strong> {{ notification.cdp_uri }}</li>
          <li><strong>Certificate Bundle (AIA):</strong> {{ notification.aia_uri }}</li>
          <li><strong>Certificate Bundle (SIA):</strong> {{ notification.sia_uri }}</li>
          <li><strong>OCSP:</strong> {{ notification.ocsp_uri }}</li>
          <li><strong>EE CRL DP:</strong> {{ notification.ee_cdp_uri }}</li>
          <li><strong>EE OCSP:</strong> {{ notification.ee_ocsp_uri }}</li>
        </ul>
        {% else %}
          {% continue %}
        {% endif %}
      {% endfor %}
    </div>
  </div>
  <!-- end of older notifications -->
<!-- end of notifications accordion  -->
</div>
