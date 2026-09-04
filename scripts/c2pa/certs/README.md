# C2PA test credentials

This experiment is approved to use a certificate and private-key fixture provided by the CAI SDK.

Do not add an arbitrary self-signed key or a production private key here. When the `c2patool` release is pinned, select a compatible fixture from the corresponding tagged CAI SDK/c2pa-rs source and record:

- upstream repository and immutable tag/commit;
- fixture paths;
- license;
- signature algorithm;
- certificate SHA-256 fingerprint;
- SHA-256 digest of each downloaded source file.

The signing process will read credential paths from `C2PA_SIGN_CERT` and `C2PA_PRIVATE_KEY`. Cloud.gov inputs must be materialized in a permission-restricted temporary directory and must never be copied into `_site`, logs, reports, or browser assets.

Public certificate/trust-anchor material used by `c2pa-web` is separate from the private key. The UI must label this fixture as an SDK test credential that is not production trusted.
