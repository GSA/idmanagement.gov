---
layout: page
collection: fpki
title: Federal Common and Federal Bridge
permalink: /fpki/certsandcrls/
sticky_sidenav: true
sidenav: fpkicas

subnav:
  - text: Federal Common Policy CA G2
    href: '#federal-common-policy-ca-g2'
  - text: Federal Common Policy CA
    href: '#federal-common-policy-ca'
  - text: Federal Bridge CA G4
    href: '#federal-bridge-ca-g4'
  - text: Verify a hash
    href: '#verify-a-hash'
---

This page lists the endpoints to retrieve the certificates and certificate revocation lists (CRLs) for the infrastructure CAs.  We are working on compiling and adding information for ALL CAs currently in the Federal PKI. 

When downloading **any** certificate file from the list below, please verify the thumbprint (hash) on the downloaded file.  You can [verify the hash](#verify-a-hash) using standard utilities on operating systems. 

### Federal Common Policy CA G2

|**Federal Common Policy CA G2**|**Information**|
|-----------|---------------|
| Federal Common Policy CA G2 Root Certificate | http://repo.fpki.gov/fcpca/fcpcag2.crt |
| Distinguished Name | **cn=Federal Common Policy CA G2, ou=FPKI, o=U.S. Government, c=US** |
| sha1 Thumbprint | 99 B4 25 1E 2E EE 05 D8 29 2E 83 97 A9 01 65 29 3D 11 60 28 |
| Certificate Revocation List | http://repo.fpki.gov/fcpca/fcpcag2.crl |
| P7C file - Issued By | http://repo.fpki.gov/fcpca/caCertsIssuedByfcpcag2.p7c	|
| P7C file - Issued To | http://repo.fpki.gov/fcpca/caCertsIssuedTofcpcag2.p7c	|

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
