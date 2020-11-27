---
layout: page
collection: fpki
title: Federal Common and Federal Bridge
permalink: fpki/certsandcrls/
sticky_sidenav: true
sidenav: fpkicas

subnav:
  - text: Back to FPKI Guide
    href: ../fpki/ca/
  - text: Federal Common Policy CA
    href: '#federal-common-policy-ca'
  - text: Federal Bridge CA 2016
    href: '#federal-bridge-ca-2016'
  - text: Federal Bridge CA G4
    href: '#federal-bridge-ca-g4'
  - text: Verify a hash
    href: '#verify-a-hash'
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
