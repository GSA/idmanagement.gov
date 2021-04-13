---
layout: page
collection: fpki
title: PIV CAs and Agencies
permalink: fpki/pivcas-and-agencies/
sticky_sidenav: true
sidenav: fpkicas

subnav:
  - text: PIV Issuer Information
    href: '#piv-issuer-information'
  - text: Active Issuing CA Certificate Details 
    href: '#active-issuing-ca-certificate-details'
  - text: Maintenance Mode Issuing CA Certificate Details
    href: '#maintenance-mode-issuing-ca-certificate-details'
---

{% assign branches = "" | split: "" %}
{% for piv in site.data.fpkicustomers %}
  {% assign branch = piv.branch | strip %}
  {% assign branches = branches | push: branch | uniq | sort %}
{% endfor %}
{% assign branches = branches | uniq | sort %}

The page lists the certification authorities *currently* used for Personal Identity Verification (PIV) authentication certificates for federal government departments and agencies.  Agency system administrators can leverage this list to configure systems and services for cross-government trust. This list does *not* include Derived PIV authentication certificates.

## PIV Issuer Information

{% include alert-info.html content="This table was last updated on <b>February 23, 2021</b>. Please email fpki at gsa.gov to suggest an update or correction." %} 

<div class="usa-width-one-fourth">
  <fieldset class="usa-fieldset-inputs guides-filter">
    <legend>Branches</legend>
    <ul class="usa-unstyled-list">
      {% for branch in branches %}
      <li>
        <input class="guides-filter-category" id="category-{{ category | slugify }}" type="checkbox" name="categories" value="{{ category }}" checked>
        <label for="category-{{ category | slugify }}">{{ category }}</label>
      </li>
      {% endfor %}
    </ul>
  </fieldset>
</div>

<div class="usa-width-three-fourths">
  <table class="usa-table-borderless">
    <thead class="usa-sr-only">
      <tr>
        <th id="piv-table-heading-agency" scope="col">Department/Agency</th>
        <th id="piv-table-heading-ssp" scope="col">FPKI Shared Service Provider</th>
        <th id="piv-table-heading-ca" scope="col">PIV Authentication Issuing CA</th>
      </tr>
    </thead>
    <tbody>
      {% for category in categories %}
        <tr class="piv-table-category-heading" data-category="{{ category }}">
          <th colspan="2" class="piv-table-heading" id="piv-table-heading-{{ category | slugify }}"><b>{{ branch }} Branch</b></th>
        </tr>
        {% for piv in site.data.fpkicustomers %}
          {% if piv.branch == branch %}
            <tr class="piv-table-row" data-category="{{ piv.branch }}">
              <td headers="piv-table-heading-{{ branch | slugify }} piv-table-heading-agency">{{ piv.agency}}</a></td>
              <td headers="piv-table-heading-{{ category | slugify }} piv-table-heading-ssp">{{ piv.ssp }}</td>
              <td headers="piv-table-heading-{{ category | slugify }} piv-table-heading-ca"><a href="{{ piv.url | prepend: site.baseurl }}"{{ piv.ca }}</td>
            </tr>
          {% endif %}
        {% endfor %} <!--piv-->
      {% endfor %}<!--category-->
    </tbody>
  </table>
</div>

## Active Issuing CA Certificate Details 
These CA certificates are actively issuing PIV authentication certificates.  

#### Department of Veterans Affairs CA
- Subject: OU = Department of Veterans Affairs CA, OU = Certification Authorities, OU = Department of Veterans Affairs, O = U.S. Government, C = US
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Serial #: 5ccb3215
- Validity: June 22, 2019 to June 22, 2029
- SHA-1 Hash: 76cc898f03eb0fc7e0877aac30a0c1340bb34879

#### DHS CA4
- Subject: OU = DHS CA4, OU = Certification Authorities, OU = Department of Homeland Security, O = U.S. Government, C = US 
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Serial #: 5ccb31ca 
- Validity: June 6, 2019 to June 6, 2029
- SHA-1 Hash: 58085a64e181573f4fd917c5c021eb1cf344dd5f 

#### DoD Issuing CAs
**DoD ID CA-59**
- Subject: CN = DOD ID CA-59, OU = PKI, OU = DoD, O = U.S. Government, C = US  
- Issuer: CN = DoD Root CA 3, OU = PKI, OU = DoD, O = U.S. Government, C = US 
- Serial #: 0305  
- Validity: April 2, 2019 to April 2, 2025
- SHA-1 Hash: 1907fc2b223ee0301b45745bdb59aad90fe7c5d7  

<br>
**DoD ID CA-52**
- Subject: CN = DOD ID CA-52, OU = PKI, OU = DoD, O = U.S. Government, C = US  
- Issuer: CN = DoD Root CA 3, OU = PKI, OU = DoD, O = U.S. Government, C = US 
- Serial #: 012a  
- Validity: November 22, 2016 to November 23, 2022
- SHA-1 Hash: 82118887716a07449fadd643eef739f04981087c 

<br>
**DoD ID CA-51**
- Subject: CN = DOD ID CA-51, OU = PKI, OU = DoD, O = U.S. Government, C = US  
- Issuer: CN = DoD Root CA 3, OU = PKI, OU = DoD, O = U.S. Government, C = US 
- Serial #: 0129   
- Validity: November 22, 2016 to November 23, 2022
- SHA-1 Hash: f0a49bcf0fd1fc1521b31b2796fb829780050ee4   

<br>
**DoD ID CA-50**
- Subject: CN = DOD ID CA-50, OU = PKI, OU = DoD, O = U.S. Government, C = US  
- Issuer: CN = DoD Root CA 3, OU = PKI, OU = DoD, O = U.S. Government, C = US 
- Serial #: 0128     
- Validity: November 22, 2016 to November 23, 2022
- SHA-1 Hash: 5e2e392c6ca55e9bd3f522969ffa6b3657a5d910    

<br>
**DoD ID CA-49**
- Subject: CN = DOD ID CA-49, OU = PKI, OU = DoD, O = U.S. Government, C = US  
- Issuer: CN = DoD Root CA 3, OU = PKI, OU = DoD, O = U.S. Government, C = US 
- Serial #: 0127  
- Validity: November 22, 2016 to November 23, 2022
- SHA-1 Hash: 6cd6e8bd7acd2f08e21693988a309eca6772c134  

#### Entrust NFI Medium Assurance SSP CA
- Subject: OU = Entrust NFI Medium Assurance SSP CA, OU = Certification Authorities, O = Entrust, C = US
- Issuer: OU = Entrust Managed Services NFI Root CA, OU = Certification Authorities, O = Entrust, C = US 
- Serial #: 4aa8b9ea 
- Validity: May 16, 2017 to November 16, 2027 
- SHA-1 Hash: 4b8818edc75e6983904ee71513c85e165f2d897c 

#### Entrust Managed Services SSP CA
- Subject: OU = Entrust Managed Services SSP CA, OU = Certification Authorities, O = Entrust, C = US
- Issuer: OU = Entrust Managed Services Root CA, OU = Certification Authorities, O = Entrust, C = US
- Serial #: 448107b6
- Validity: August 13, 2019 to July 13, 2029
- SHA-1 Hash: 722e8abbe6b66e47d1bcec3c7ec47aa5bbe4d3c5

#### HHS-FPKI-Intermediate-CA-E1
- Subject: CN = HHS-FPKI-Intermediate-CA-E1, OU = Certification Authorities, OU = HHS, O = U.S. Government, C = US 
- Issuer: OU = Entrust Managed Services Root CA, OU = Certification Authorities, O = Entrust, C = US
- Serial #: 44809a90 
- Validity: December 20, 2016 to July 20, 2025 
- SHA-1 Hash: d5e311406437c35a79bc023c2bbb57049f5d8f77 

#### NASA Operational CA  
- Subject: OU = NASA Operational CA, OU = Certification Authorities, OU = NASA, O = U.S. Government, C = US  
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US 
- Serial #: 5ccb3196  
- Validity: May 4 2019 to May 4 2029 
- SHA-1 Hash: f504012b1fe57b4381e3bf5ba9f491144ed76ee1  

#### Naval Reactors SSP Agency CA G3
- Subject:  CN = Naval Reactors SSP Agency CA G3, OU = U.S. Department of Energy, O = U.S. Government, C = US
- Issuer: CN = Symantec SSP Intermediate CA - G4, O = Symantec Corporation, C = US
- Serial #: 18876cd9ffd738ab7e69350ecc9d41f8 
- Validity: December 9, 2015 to November 11, 2024 
- SHA-1 Hash: 50e722c3b05485b216bbc02eb1628e2593a5565d 

#### NRC SSP Agency CA G4
- Subject: CN = NRC SSP Agency CA G4, OU = U.S. Nuclear Regulatory Commission, O = U.S. Government, C = US
- Issuer: CN = DigiCert Federal SSP Intermediate CA - G5, O = DigiCert, Inc., C = US  
- Serial #: 3a905c654791b26551e3b7077f27aa33   
- Validity: December 17, 2018 to December 12, 2028
- SHA-1 Hash: 1a03581dcf159d206accd7bdd176c788a0862353  

#### ORC SSP 4
- Subject: CN = ORC SSP 4, O = ORC PKI, C = US
- Issuer: CN = Federal Common Policy CA, OU = FPKI, O = U.S. Government, C = US
- Serial #: 2ef9
- Validity: August 31, 2015 to January 21, 2024
- SHA-1 Hash: 3a70323069a4c41bc95663152e9ccc7111bb0623

#### Senate PIV-I CA G4
- Subject: CN = Senate PIV-I CA G4, OU = Office of the Sergeant at Arms, OU = U.S. Senate, O = U.S. Government, C = US 
- Issuer: CN = Symantec Class 3 SSP Intermediate CA - G3, OU = Symantec Trust Network, O = Symantec Corporation, C = US 
- Serial #: 52c8b762e38b30212288790964b7ab2c 
- Validity: August 1, 2016 to September 28, 2024 
- SHA-1 Hash: 3c9d0bc463dd1ac0f91012b440e9bdc1cdcd0eff 

#### Social Security Administration Certification Authority
- Subject: OU = Social Security Administration Certification Authority, OU = SSA, O = U.S. Government, C = US
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Serial #: 5bf45959 
- Validity: April 7, 2019 to April 7, 2029
- SHA-1 Hash: 897a79fd488d426d6c50d0ba026f698bca3334f4

#### Treasury OCIO CA
- Subject: OU = OCIO CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Serial #: 5ccb31fe
- Validity: June 22, 2019 to June 22, 2029
- SHA-1 Hash: e651a5dc6a1305613a22e46548e1666650c2825f

#### U.S. Department of Education Agency CA - G4
- Subject: CN = U.S. Department of Education Agency CA - G4, OU = U.S. Department of Education, O = U.S. Government, C = US
- Issuer: CN = Symantec SSP Intermediate CA - G4, O = Symantec Corporation, C = US
- Serial #: 224ad7d35a9d34350671f9b8be45a23a
- Validity: July 20, 2015 to November 11, 2024 
- SHA-1 Hash: 69e2abc173047f844e3f53cb2cbd138ba9063de8

#### U.S. Department of State PIV CA2
- Subject: OU = U.S. Department of State PIV CA2, OU = Certification Authorities, OU = PIV, OU = Department of State, O = U.S. Government, C = US
- Issuer: CN = U.S. Department of State AD Root CA, CN = AIA, CN = Public Key Services, CN = Services, CN = Configuration, DC = state, DC = sbu, 
- Serial #: 51b0b97f 
- Validity: January 24, 2020 to January 24, 2030
- SHA-1 Hash: 68A4E9AB7A1FB8FB85316A770FF9CA874C020724

#### U.S. Department of Transportation Agency CA G5
- Subject: CN = U.S. Department of Transportation CA G5, OU = U.S. Department of Transportation, O = U.S. Government, C = US 
- Issuer: CN = DigiCert Federal SSP Intermediate CA - G5, O = DigiCert, Inc., C = US
- Serial #: 0ed81c303ea3566787faca36899a931a
- Validity: March 4, 2019 to December 12, 2028
- SHA-1 Hash: b1d05e5b9e025ea4b3b3e30dc3f45a19f9ec51f6

#### USPTO INTR CA1
- Subject: CN = USPTO_INTR_CA1, CN = AIA, CN = Public Key Services, CN = Services, CN = Configuration, DC = uspto, DC = gov
- Issuer: CN = Federal Bridge CA G4, OU = FPKI, O = U.S. Government, C = US
- Serial #: 10f82e9132e31f62dba620ab66f6e7f836e663c7
- Validity: November 12, 2020 to December 12, 2022
- SHA-1 Hash: edd7e56da5147cf98ea580a176a27bc990b243ce

#### Veterans Affairs User CA B1
- Subject: CN = Veterans Affairs User CA B1, OU = PKI, OU = Services, DC = va, DC = gov
- Issuer: CN = Verizon SSP CA A2, OU = SSP, O = Verizon, C = US
- Serial #: 251ea36536cfebb0e9d1334d0cb96102bab16589
- Validity: January 25, 2017 to January 25, 2027
- SHA-1 Hash: 671461948b8ef765fe5e1248222af3fcdd457564


## Maintenance Mode Issuing CA Certificate Details
These CA certificates have issued PIV authentication certificates previously and are in maintenance mode only.  Agency system administrators may need to include these CAs in configurations. 

#### Department of Veterans Affairs CA (1 of 2)
- Subject: OU = Department of Veterans Affairs CA, OU = Certification Authorities, OU = Department of Veterans Affairs, O = U.S. Government, C = US
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Serial #: 4e398179
- Validity: October 17, 2015 to October 17, 2025 
- SHA-1 Hash: e2edb0df1fe8068717a08e38741b5bc4c38029d0 

#### Department of Veterans Affairs CA (2 of 2)
- Subject: OU = Department of Veterans Affairs CA, OU = Certification Authorities, OU = Department of Veterans Affairs, O = U.S. Government, C = US
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Serial #: 4e397f22 
- Validity: August 28, 2012 to August 28, 2022 
- SHA-1 Hash: 519d3222a15eee034980fc0da727314f70af78c0 

#### DHS CA4
- Subject: OU = DHS CA4, OU = Certification Authorities, OU = Department of Homeland Security, O = U.S. Government, C = US 
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Serial #: 4e398128 
- Validity: June 13, 2015 to June 13, 2025
- SHA-1 Hash: a31a5df2f1c1019b9cf5b7ca4e3b26650b9ca93f 

#### DoD Issuing CAs (several CAs in maintenance mode)
**DoD ID CA-44**
- Subject: CN = DOD ID CA-44, OU = PKI, OU = DoD, O = U.S. Government, C = US  
- Issuer: CN = DoD Root CA 3, OU = PKI, OU = DoD, O = U.S. Government, C = US 
- Serial #: 1b  
- Validity: November 9, 2015 to November 9, 2021 
- SHA-1 Hash: cbb492c4e8a52f024772ba4e53d47391b98fcef0 

<br>
**DoD ID CA-43**
- Subject: CN = DOD ID CA-43, OU = PKI, OU = DoD, O = U.S. Government, C = US  
- Issuer: CN = DoD Root CA 3, OU = PKI, OU = DoD, O = U.S. Government, C = US 
- Serial #: 1a      
- Validity: November 9, 2015 to November 9, 2021
- SHA-1 Hash: 98d3e33b50b8f6acff8c6020e29ff967eb0e9c18     

<br>
**DoD ID CA-42**
- Subject: CN = DOD ID CA-42, OU = PKI, OU = DoD, O = U.S. Government, C = US  
- Issuer: CN = DoD Root CA 3, OU = PKI, OU = DoD, O = U.S. Government, C = US 
- Serial #: 19
- Validity: November 9, 2015 to November 9, 2021
- SHA-1 Hash: 8b125cfc2716558d716a9f87db7ca8316d11236e  

<br>
**DoD ID CA-41**
- Subject: CN = DOD ID CA-41, OU = PKI, OU = DoD, O = U.S. Government, C = US  
- Issuer: CN = DoD Root CA 3, OU = PKI, OU = DoD, O = U.S. Government, C = US 
- Serial #: 18     
- Validity: November 9, 2015 to November 9, 2021
- SHA-1 Hash: fee543483ac0acb519688715237d3b57b9d34755   

#### Entrust Managed Services SSP CA 
- Subject: OU = Entrust Managed Services SSP CA, OU = Certification Authorities, O = Entrust, C = US
- Issuer: OU = Entrust Managed Services Root CA, OU = Certification Authorities, O = Entrust, C = US
- Serial #: 448063d5 
- Validity: July 30, 2015 to July 23, 2025 
- SHA-1 Hash: dec01bf40c153fbc38bf2ca766b04f9dfbda3064 

#### NASA Operational CA
- Subject: OU = NASA Operational CA, OU = Certification Authorities, OU = NASA, O = U.S. Government, C = US  
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US 
- Serial #: 4e398116   
- Validity: June 13, 2015 to June 13, 2025 
- SHA-1 Hash: fe7572bbde7b7f44152acc8e1715c18714dc9d63   

#### NRC SSP Agency CA G3
- Subject: CN = NRC SSP Agency CA G3, OU = U.S. Nuclear Regulatory Commission, O = U.S. Government, C = US
- Issuer: CN = Symantec SSP Intermediate CA - G4, O = Symantec Corporation, C = US  
- Serial #: 100f05dd316ca819d9d39febc661b326   
- Validity: November 24, 2014 to November 11, 2024 
- SHA-1 Hash: e40bee41cf7afa2ddba4eb10ff3a39f81ec48d20 

#### Social Security Administration Certification Authority
- Subject: OU = Social Security Administration Certification Authority, OU = SSA, O = U.S. Government, C = US
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Serial #: 4e3980ef  
- Validity: April 19, 2015 to April 19, 2025 
- SHA-1 Hash: bb6c62e648d503f1beab75ef5f69b17256175993 

#### Treasury OCIO CA 
- Subject: OU = OCIO CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Serial #: 4e398101 
- Validity: April 19, 2015 to April 19, 2025 
- SHA-1 Hash: 5ad254c3ecebb5b7e108caa0cc8030598a7b7709 

#### U.S. Department of State PIV CA2
- Subject: OU = U.S. Department of State PIV CA2, OU = Certification Authorities, OU = PIV, OU = Department of State, O = U.S. Government, C = US
- Issuer: CN = U.S. Department of State AD Root CA, CN = AIA, CN = Public Key Services, CN = Services, CN = Configuration, DC = state, DC = sbu, 
- Serial #: 51b02402
- Validity: August 3, 2016 to August 3, 2026
- SHA-1 Hash: ffe07fb428bcef4bf38ebbfae1e42339e03e7756 

#### U.S. Department of Transportation Agency CA G4
- Subject: CN = U.S. Department of Transportation Agency CA G4, OU = U.S. Department of Transportation, O = U.S. Government, C = US
- Issuer: CN = Symantec SSP Intermediate CA - G4, O = Symantec Corporation, C = US
- Serial #: 61a90f3e5ff532f9fe6209d931279a82
- Validity: December 10, 2014 to November 11, 2024
- SHA-1 Hash: dc5b590800765864587902af983c21a7209be320
