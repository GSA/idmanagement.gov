---
layout: page
collection: fpki
title: Certificates and CRLs
permalink: fpki/certsandcrls/
sidenav: fpki

subnav:
	- text: Federal Common Policy CA
	  href: '#federal-common-policy-ca'
	- text: Federal Bridge CA 2016
	  href: '#federal-bridge-ca-2016'
	- text: Federal Bridge CA G4
	  href: '#federal-bridge-ca-g4'
	- text: Verify a hash
	  href: '#verify-a-hash'
	- text: PIV CAs and Agencies
	  href: '#pivcas-and-agencies'
---

This page lists the endpoints to retrieve the certificates and certificate revocation lists (CRLs) for the infrastructure CAs.  We are working on compiling and adding information for ALL CAs currently in the Federal PKI. 

When downloading **any** Certificate file from the list below, please verify the thumbprint (hash) on the downloaded file.  You can [verify the hash](#verify-a-hash) using common utilities on operating systems. 

### Federal Common Policy CA

|**Federal Common Policy CA**|**Information**|
|-----------|---------------|
| Federal Common Policy CA Root Certificate | http://http.fpki.gov/fcpca/fcpca.crt |
| Distinguished Name 						| **cn=Federal Common Policy CA, ou=FPKI, o=U.S. Government, c=US** |
| sha1 Thumbprint							| 90 5f 94 2f d9 f2 8f 67 9b 37 81 80 fd 4f 84 63 47 f6 45 c1 |
| Certificate Revocation List				| http://http.fpki.gov/fcpca/fcpca.crl							|
| P7C file - Issued By						| http://http.fpki.gov/fcpca/caCertsIssuedByfcpca.p7c	|
| P7C file - Issued To						| http://http.fpki.gov/fcpca/caCertsIssuedTofcpca.p7c	|


### Federal Bridge CA 2016

|**Federal Bridge CA 2016**|**Information**|
|-----------|---------------|
| Certificate Revocation List				| http://http.fpki.gov/bridge/fbca2016.crl					|
| P7C file - Issued By						| http://http.fpki.gov/bridge/caCertsIssuedByfbca2016.p7c	|
| P7C file - Issued To						| http://http.fpki.gov/bridge/caCertsIssuedTofbca2016.p7c	|

### Federal Bridge CA G4

|**Federal Bridge CA G4**|**Information**|
|-----------|---------------|
| Certificate Revocation List				| http://repo.fpki.gov/bridge/fbcag4.crl				|
| P7C file - Issued By						| http://repo.fpki.gov/bridge/caCertsIssuedByfbcag4.p7c	|
| P7C file - Issued To						| http://repo.fpki.gov/bridge/caCertsIssuedTofbcag4.p7c	|

	 

### Verify a hash
You can verify the hash on files, including certificate files, using common utilities on operating systems.  Examples:

```
		certutil -hashfile <filename>.crt SHA1
```

```
		openssl dgst -sha1 <filename>.crt
```	

```
		sha1sum <filename>.crt
```

## PIV CAs and Agenices

The page lists the certification authorities *currently* used for Personal Identity Verification (PIV) authentication certificates for federal government departments and agencies.  Agency system administrators can leverage this list to configure systems and services for cross-government trust. This list does *not* include Derived PIV authentication certificates. 


{% include alert-info.html content="This table was last updated on <b>January 6, 2020</b>. Please email fpki at gsa dot gov to suggest an update or correction." %} 

<style>
	.title {font-size: 16px; color: white; background-color: #112e51; font-weight: 900;text-align: center;}
	.body {font-size: 14px;text-align: center;}

	h4:before {
	content: "";
	display: block;
	padding-top: 125px;
	margin-top: -110px;
	}
	
</style>

<table style="width:100%">
	<tr>
		<th class="title">Branch</th>
		<th class="title">Department/Agency</th>
		<th class="title">Federal PKI Shared Service Provider</th>		
		<th class="title">PIV Authentication <br>Certificate Issuing CA</th>
	</tr>

{% for customer in site.data.fpkicustomers %}  
  
  <tr>
	<td class="body">{{customer.branch}}</td>
	<td class="body">{{customer.agency}}</td>
	<td class="body">{{customer.ssp}}</td>
	<td class="body">{{customer.ca}}</td>
  </tr>
  
{% endfor %}

</table>



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
- Serial #: 51b02402
- Validity: August 3, 2016 to August 3, 2026
- SHA-1 Hash: ffe07fb428bcef4bf38ebbfae1e42339e03e7756 

#### U.S. Department of Transportation Agency CA G5
- Subject: CN = U.S. Department of Transportation Device CA G5, OU = U.S. Department of Transportation, O = U.S. Government, C = US 
- Issuer: CN = DigiCert Federal SSP Intermediate CA - G5, O = DigiCert, Inc., C = US
- Serial #: 133fa9cc68370c5da2a6d204c503455c
- Validity: March 4, 2019 to December 12, 2028
- SHA-1 Hash: 263a035b50fc26368dd9a38894764b3f3592fb17

#### USPTO INTR CA1
- Subject: CN = USPTO_INTR_CA1, CN = AIA, CN = Public Key Services, CN = Services, CN = Configuration, DC = uspto, DC = gov  
- Issuer: CN = Federal Bridge CA G4, OU = FPKI, O = U.S. Government, C = US
- Serial #: 189a971b30cc79b60b35e21789db1c479cd949f0 
- Validity: December 12, 2019 to December 12, 2022 
- SHA-1 Hash: 978ec2f323452f8f46932b8550663d68b6e96af7 

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

#### DHS CA4 (1 of 2)
- Subject: OU = DHS CA4, OU = Certification Authorities, OU = Department of Homeland Security, O = U.S. Government, C = US 
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Serial #: 4e398128 
- Validity: June 13, 2015 to June 13, 2025
- SHA-1 Hash: a31a5df2f1c1019b9cf5b7ca4e3b26650b9ca93f 

#### DHS CA4 (2 of 2)
- Subject: OU = DHS CA4, OU = Certification Authorities, OU = Department of Homeland Security, O = U.S. Government, C = US 
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US 
- Serial #: 4a61d293 
- Validity: January 21, 2011 to January 21, 2021
- SHA-1 Hash: 49ae4f027419a3eb227e4cd4ccf4ff1bc75213b6

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

#### NASA Operational CA (1 of 2)
- Subject: OU = NASA Operational CA, OU = Certification Authorities, OU = NASA, O = U.S. Government, C = US  
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US 
- Serial #: 4e398116   
- Validity: June 13, 2015 to June 13, 2025 
- SHA-1 Hash: fe7572bbde7b7f44152acc8e1715c18714dc9d63   

#### NASA Operational CA (2 of 2)
- Subject: OU = NASA Operational CA, OU = Certification Authorities, OU = NASA, O = U.S. Government, C = US  
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US 
- Serial #: 4a61d2a5
- Validity: January 22, 2011 to January 22, 2021 
- SHA-1 Hash: 76a6eaa852710e00b368c41080e6131140aaf189   

#### NRC SSP Agency CA G3
- Subject: CN = NRC SSP Agency CA G3, OU = U.S. Nuclear Regulatory Commission, O = U.S. Government, C = US
- Issuer: CN = Symantec SSP Intermediate CA - G4, O = Symantec Corporation, C = US  
- Serial #: 100f05dd316ca819d9d39febc661b326   
- Validity: November 24, 2014 to November 11, 2024 
- SHA-1 Hash: e40bee41cf7afa2ddba4eb10ff3a39f81ec48d20 

#### Social Security Administration Certification Authority (1 of 2)
- Subject: OU = Social Security Administration Certification Authority, OU = SSA, O = U.S. Government, C = US
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Serial #: 4e3980ef  
- Validity: April 19, 2015 to April 19, 2025 
- SHA-1 Hash: bb6c62e648d503f1beab75ef5f69b17256175993 

#### Social Security Administration Certification Authority (2 of 2)
- Subject: OU = Social Security Administration Certification Authority, OU = SSA, O = U.S. Government, C = US
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Serial #: 4a61d2ba  
- Validity: February 16, 2011 to February 16, 2021 
- SHA-1 Hash: b4b209aade830834c9b5c2f815021d28dc381fe1 

#### Treasury OCIO CA (1 of 3)
- Subject: OU = OCIO CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Serial #: 4e398101 
- Validity: April 19, 2015 to April 19, 2025 
- SHA-1 Hash: 5ad254c3ecebb5b7e108caa0cc8030598a7b7709 

#### Treasury OCIO CA (2 of 3)
- Subject: OU = OCIO CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Serial #: 4a61d192 
- Validity: November 7, 2010 to November 7, 2020 
- SHA-1 Hash: 918a68d87fb6011afe3666076319ed0462df0940 

#### Treasury OCIO CA (3 of 3)
- Subject: OU = OCIO CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Issuer: OU = US Treasury Root CA, OU = Certification Authorities, OU = Department of the Treasury, O = U.S. Government, C = US
- Serial #: 4a61d147 
- Validity: September 12, 2010 to September 12, 2020
- SHA-1 Hash: f9299790eb271125fd91e661cede4ee202d7e758 

#### U.S. Department of Transportation Agency CA G4
- Subject: CN = U.S. Department of Transportation Agency CA G4, OU = U.S. Department of Transportation, O = U.S. Government, C = US
- Issuer: CN = Symantec SSP Intermediate CA - G4, O = Symantec Corporation, C = US
- Serial #: 61a90f3e5ff532f9fe6209d931279a82
- Validity: December 10, 2014 to November 11, 2024
- SHA-1 Hash: dc5b590800765864587902af983c21a7209be320

	 
	 
	 
