---

layout: page
sidenav: arch
title:  FICAM Arch - Demo
permalink: /development/
sidenav: arch
sticky_sidenav: true

subnav:
#   - text: 
#     href: 

---
<!-- From Claude Code per Babur -->
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --gray-bg: #F1EFE8; --gray-bd: #888780; --gray-tx: #444441;
    --teal-bg: #E1F5EE; --teal-bd: #0F6E56; --teal-tx: #085041;
    --purple-bg: #EEEDFE; --purple-bd: #534AB7; --purple-tx: #3C3489;
    --blue-bg: #E6F1FB; --blue-bd: #185FA5; --blue-tx: #0C447C;
    --coral-bg: #FAECE7; --coral-bd: #993C1D; --coral-tx: #712B13;
    --pink-bg: #FBEAF0; --pink-bd: #993556; --pink-tx: #72243E;
    --green-bg: #EAF3DE; --green-bd: #3B6D11; --green-tx: #27500A;
    --amber-bg: #FAEEDA; --amber-bd: #854F0B; --amber-tx: #633806;
    --font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    --radius: 8px;
  }



  body {
    font-family: var(--font);
    /* background: #f8f7f3; */
    color: #222;
    padding: 24px 16px 48px;
    max-width: 960px;
    margin: 0 auto;
  }

  h1 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 4px;
    color: var(--gray-tx);
  }

  .subtitle {
    /* font-size: 13px; */
    font-size: 16px;
    color: var(--gray-bd);
    margin-bottom: 20px;
  }

  /* Layers */
  .layers { display: flex; flex-direction: column; gap: 4px; margin-bottom: 16px; }

  .section {
    border-radius: var(--radius);
    border: 1.5px solid transparent;
    cursor: pointer;
    transition: border-color .15s;
    padding: 10px 14px;
  }

  .section.open { border-color: var(--bd); }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 8px;
  }

  .section-title {
    /* font-size: 13px; */
    font-size: 16px;
    font-weight: 600;
    color: var(--tx);
  }

  .section-summary {
    /* font-size: 11px; */
    font-size: 14px;
    color: var(--bd);
    margin-top: 1px;
  }

  .chevron {
    font-size: 10px;
    color: var(--bd);
    flex-shrink: 0;
    margin-top: 2px;
    user-select: none;
  }

  .tags-row {
    display: flex;
    flex-wrap: wrap;
    margin-top: 6px;
  }

  .tag {
    display: inline-block;
    font-size: 11px;
    line-height: 1;
    padding: 3px 9px;
    border-radius: 20px;
    margin: 2px;
    border: 1px solid var(--bd);
    background: var(--bg);
    color: var(--tx);
    cursor: default;
    white-space: nowrap;
  }

  .tag.clickable { cursor: pointer; text-decoration: none; }
  .tag.clickable:hover { filter: brightness(0.95); }

  .section-body {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid var(--bd);
    display: none;
  }

  .section.open .section-body { display: block; }
  .section.open .tags-row { display: none; }

  .row-label {
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .06em;
    color: var(--tx);
    margin: 10px 0 4px;
  }

  .row-label:first-child { margin-top: 0; }

  /* Capability rows */
  .cap-row {
    padding: 5px 8px;
    border-radius: 6px;
    margin-bottom: 2px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all .12s;
  }

  .cap-row:hover { border-color: var(--bd); }
  .cap-row.open { border-color: var(--bd); background: rgba(255,255,255,.25); }

  .cap-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cap-name {
    font-size: 12px;
    color: var(--tx);
  }

  .cap-row.open .cap-name { font-weight: 600; }

  .cap-chevron {
    font-size: 9px;
    color: var(--bd);
    flex-shrink: 0;
    margin-left: 6px;
    user-select: none;
  }

  .cap-detail {
    font-size: 11px;
    color: var(--tx);
    line-height: 1.5;
    opacity: .9;
    margin-top: 5px;
    display: none;
  }

  .cap-row.open .cap-detail { display: block; }

  /* Practice grid */
  .practice-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 6px;
    align-items: start;
  }

  @media (max-width: 600px) {
    .practice-grid { grid-template-columns: 1fr; }
  }

  /* Doc links bar */
  .doc-bar {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 6px;
    margin-top: 14px;
    padding-top: 14px;
    border-top: 1px solid #ddd;
  }

  .hint {
    font-size: 11px;
    color: #999;
    text-align: center;
    margin-top: 6px;
  }

  /* Color helpers */
  .c-gray   { --bg: var(--gray-bg);   --bd: var(--gray-bd);   --tx: var(--gray-tx);   }
  .c-teal   { --bg: var(--teal-bg);   --bd: var(--teal-bd);   --tx: var(--teal-tx);   }
  .c-purple { --bg: var(--purple-bg); --bd: var(--purple-bd); --tx: var(--purple-tx); }
  .c-blue   { --bg: var(--blue-bg);   --bd: var(--blue-bd);   --tx: var(--blue-tx);   }
  .c-coral  { --bg: var(--coral-bg);  --bd: var(--coral-bd);  --tx: var(--coral-tx);  }
  .c-amber  { --bg: var(--amber-bg);  --bd: var(--amber-bd);  --tx: var(--amber-tx);  }
  .c-green  { --bg: var(--green-bg);  --bd: var(--green-bd);  --tx: var(--green-tx);  }
  .c-pink   { --bg: var(--pink-bg);   --bd: var(--pink-bd);   --tx: var(--pink-tx);   }
</style>

<p class="subtitle">Federal Identity, Credential, and Access Management · Tap any section to expand</p>

<div id="app"></div>

<script>
const DOC = {
  mdl:   { label: "mDL",   ramp: "amber",  url: "#mdl"   },
  fido2: { label: "FIDO2", ramp: "green",  url: "#fido2" },
  mpiv:  { label: "mPIV",  ramp: "pink",   url: "#mpiv"  },
  pqc:   { label: "PQC",   ramp: "purple", url: "#pqc"   },
  vc:    { label: "VC",    ramp: "blue",   url: "#vc"    },
};

const ARCH = {
  layers: [
    {
      id: "gov", label: "Governance", ramp: "gray",
      summary: "Enterprise ICAM program oversight, policy alignment, and risk management",
      caps: [
        { name: "Policy & standards", detail: "FISMA, OMB M-19-17, M-22-09, NIST SP 800-63 and 800-53, agency ICAM policy statements, and the FICAM Architecture v3.3." },
        { name: "Identity governance", detail: "Role lifecycle management, periodic access certification campaigns, segregation of duties controls, and entitlement review workflows." },
        { name: "Privileged access mgmt", detail: "Just-in-time access provisioning, session recording and monitoring, least-privilege enforcement, and PAM credential vaulting." },
        { name: "Audit & compliance", detail: "Continuous monitoring of ICAM controls, ICAM metrics reporting, POA&M tracking, and inspector general audit support." },
        { name: "Program management", detail: "ICAM PMO structure, governance board charters, capital planning, and performance measurement under the federal ICAM common baseline." },
      ],
      standards: ["NIST SP 800-53","NIST SP 800-63","OMB M-19-17","OMB M-22-09","EO 14028","FICAM Architecture v3.3"],
      docs: [],
    },
    {
      id: "fed", label: "Federation", ramp: "teal",
      summary: "Trust frameworks and protocols enabling cross-agency and partner identity interoperability",
      caps: [
        { name: "Cross-agency trust", detail: "SAML 2.0 and OIDC federation across agencies; bilateral federation agreements; max.gov as the federal identity provider hub for inter-agency access." },
        { name: "Attribute sharing", detail: "Minimum-necessary disclosure policies, attribute release frameworks, and consent management for sharing identity attributes across trust domains." },
        { name: "Federal PKI trust", detail: "Federal PKI Common Policy CA as the government-wide trust anchor; cross-certification with bridge CAs; certificate path validation and revocation (CRL/OCSP)." },
        { name: "mDL / REAL ID trust", detail: "State-to-federal mDL acceptance framework under DHS/TSA waiver process; ISO 18013-5 device authentication; trust relationships between state DMV issuers and federal verifiers." },
        { name: "FIDO2 MDS trust", detail: "FIDO Metadata Service as the authenticator attestation trust registry; AAGUID-based allowlisting policies; agency-defined acceptable authenticator models." },
        { name: "VC trust registries", detail: "Issuer registry infrastructure for verifiable credentials; FPKI-rooted VC signing keys; OID4VP presentation protocol for cross-domain VC acceptance without bilateral agreements." },
      ],
      standards: ["SAML 2.0","OIDC / OAuth 2.0","ISO 18013-5","FIDO2 MDS v3","W3C DID Core 1.0","OID4VP","RFC 8705"],
      docs: ["mdl","fido2","mpiv","vc"],
    },
    {
      id: "pqc", label: "Post-quantum cryptography", ramp: "purple",
      summary: "Migration from quantum-vulnerable algorithms to NIST-standardized PQC across all ICAM systems",
      caps: [
        { name: "ML-KEM — FIPS 203", detail: "Module-Lattice Key Encapsulation Mechanism; replaces RSA and ECDH for key exchange in TLS sessions, PIV key transport, and encrypted token containers." },
        { name: "ML-DSA — FIPS 204", detail: "Module-Lattice Digital Signature Algorithm; replaces RSA/ECDSA for certificate signing, SAML and OIDC token signing, and VC issuer signatures." },
        { name: "SLH-DSA — FIPS 205", detail: "Stateless hash-based digital signature algorithm; preferred for high-assurance long-lived signing such as root CA certificates and firmware signing." },
        { name: "Crypto-agile PKI", detail: "Algorithm-agile CA infrastructure supporting dual-stack certificate issuance; FPKI PQC migration workstream led by GSA and the FPKI Policy Authority." },
        { name: "Hybrid classical + PQ", detail: "Pairing a classical algorithm with a PQC algorithm in the same certificate or key exchange; maintains backward compatibility with non-PQC-capable relying parties during migration." },
        { name: "Harvest-now-decrypt-later", detail: "Adversaries collecting encrypted ICAM traffic today for future quantum decryption; prioritize TLS migration and long-lived identity records for early remediation per OMB M-23-02." },
        { name: "Cryptographic inventory", detail: "Agency-wide inventory of quantum-vulnerable ICAM systems, credentials, and protocols; mandatory per OMB M-23-02; used to prioritize migration sequencing." },
      ],
      standards: ["NIST FIPS 203","NIST FIPS 204","NIST FIPS 205","NIST SP 800-208","OMB M-23-02","NSA CNSA 2.0","NIST SP 800-131Ar3"],
      docs: ["pqc"],
    },
    {
      id: "vc", label: "Verifiable credentials", ramp: "blue",
      summary: "W3C-standardized cryptographically signed claims enabling portable, privacy-preserving, decentralized identity",
      caps: [
        { name: "W3C VC Data Model 2.0", detail: "JSON-LD and JWT serializations of issuer-signed credential objects; credential status lists (VC Status List 2021) for offline revocation checking without real-time issuer contact." },
        { name: "SD-JWT", detail: "Selective Disclosure JWT (IETF); holder presents only the specific claims required by the verifier, without revealing the full credential; supports privacy-preserving identity proofing workflows." },
        { name: "BBS+ signatures", detail: "Unlinkable selective disclosure using multi-message signature scheme; enables zero-knowledge proof of credential possession without issuer correlation across presentations." },
        { name: "OID4VC / OID4VP", detail: "OpenID for Verifiable Credential Issuance and Presentation; bridges existing OIDC infrastructure with VC wallet model; primary protocol for federal VC issuance and relying party acceptance." },
        { name: "Decentralized identifiers", detail: "W3C DID Core 1.0; did:web and did:jwk methods for verifiable issuer and holder identification without centralized registry dependency; FPKI-rootable for federal trust." },
        { name: "Holder-bound authorization", detail: "VC cryptographically bound to holder's authenticator key (FIDO2 or PIV); verifier confirms presenter is legitimate holder; prevents VC theft and replay attacks in access decisions." },
        { name: "mDL / VC convergence", detail: "ISO 18013-7 aligns mDL presentation protocol with OID4VP; enables mDLs to be carried and presented alongside other VCs in a unified OID4VP-compatible digital wallet." },
      ],
      standards: ["W3C VC DM 2.0","SD-JWT (IETF RFC 7519)","OID4VC / OID4VP","W3C DID Core 1.0","DIF Presentation Exchange","ISO 18013-7","VC Status List 2021"],
      docs: ["vc"],
    },
  ],
  practice: [
    {
      id: "identity", label: "Identity management", ramp: "purple",
      summary: "Collect, verify, and manage attributes to establish and maintain enterprise identities",
      caps: [
        { name: "Identity proofing", detail: "IAL1–3 in-person and remote proofing workflows; document verification; biometric facial comparison; supervised remote proofing; NIST SP 800-63A evidence strength requirements." },
        { name: "Attribute management", detail: "Authoritative attribute sources (HR systems, PIV data stores); attribute quality and freshness policies; reconciliation workflows for multi-source identity data." },
        { name: "Lifecycle management", detail: "Joiner-mover-leaver provisioning workflows; role mining and assignment; periodic access certification; deprovisioning SLA enforcement; orphaned account remediation." },
        { name: "mDL-based proofing", detail: "mDL as an IAL2 identity evidence source; ISO 18013-5 device authentication confirms document authenticity; selective attribute disclosure minimizes data exposure during proofing." },
        { name: "FIDO2 device binding", detail: "Authenticator enrollment tied to a proofed enterprise identity; AAGUID-based allowlisting for permitted authenticator models; device attestation records maintained in identity registry." },
        { name: "mPIV enrollment", detail: "FIPS 201-3 compliant enrollment on mobile secure element; in-person biometric capture at initial enrollment; remote re-enrollment for existing PIV holders using on-file biometric." },
        { name: "VC issuance workflow", detail: "Agency acting as VC issuer for employment, role, and entitlement credentials; SD-JWT attribute packaging for selective disclosure; credential bound to holder's enterprise identity." },
        { name: "Privacy by design", detail: "Minimum-necessary data collection at proofing; informed consent management; Privacy Act of 1974 compliance; Privacy Impact Assessment (PIA) requirements for ICAM systems." },
      ],
      standards: ["NIST SP 800-63A","FIPS 201-3","NIST SP 800-157r1","ISO 18013-5","W3C VC DM 2.0","Privacy Act of 1974","OMB M-03-22"],
      docs: ["mdl","fido2","mpiv","vc"],
    },
    {
      id: "credential", label: "Credential management", ramp: "coral",
      summary: "Issue, manage, and revoke credentials bound to verified enterprise identities",
      caps: [
        { name: "PIV / CAC", detail: "FIPS 201-3 smart card with PIV Authentication, Card Authentication, digital signature, and encryption certificates; FPKI-chained; mandatory for federal employees and contractors." },
        { name: "PIV-I / derived PIV", detail: "PIV-Interoperable for non-federal entities; derived PIV credential on mobile per SP 800-157r1; supports AAL2 and AAL3 without a physical smart card." },
        { name: "mPIV", detail: "FIPS 201-3 PIV credential on mobile device's secure element or TEE; NFC tap and BLE proximity presentation; device-bound biometric cardholder verification method (CVM)." },
        { name: "FIDO2 / passkeys", detail: "Hardware security keys meeting AAL3 (YubiKey, Titan); platform passkeys meeting AAL2 (Windows Hello, Apple, Google); no shared secrets; private key never leaves the authenticator." },
        { name: "mDL", detail: "ISO/IEC 18013-5 state-issued credential on mobile device; NFC and QR presentation; device authentication; selective attribute disclosure; REAL ID-compliant when issued under DHS/TSA waiver." },
        { name: "PQC credentials", detail: "Credentials issued with ML-DSA signing keys and ML-KEM key encapsulation; hybrid classical+PQC during transition period; crypto-agile issuance infrastructure supporting future algorithm rotation." },
        { name: "Verifiable credentials", detail: "W3C VC-format employment, role, and entitlement claims; SD-JWT packaging; holder-controlled presentation; revocation via VC Status List without real-time issuer query." },
        { name: "PKI / FPKI", detail: "Federal PKI Shared Service Provider (SSP) program; FPKI Common Policy CA chain; CRL and OCSP revocation services; cross-certification with external trust anchors." },
      ],
      standards: ["FIPS 201-3","NIST SP 800-157r1","FIPS 140-3","ISO 18013-5","NIST FIPS 203/204","W3C VC DM 2.0","NIST SP 800-63B"],
      docs: ["mdl","fido2","mpiv","pqc","vc"],
    },
    {
      id: "access", label: "Access management", ramp: "blue",
      summary: "Authenticate identities and enforce authorization policies for logical and physical access",
      caps: [
        { name: "Authentication — AAL1–3", detail: "Single-factor through hardware-bound phishing-resistant MFA; NIST SP 800-63B AAL requirements; risk-based and step-up authentication policies; session management and re-authentication intervals." },
        { name: "Authorization", detail: "RBAC, ABAC, and Policy-Based Access Control (PBAC); real-time attribute resolution against authoritative sources; zero-standing privilege enforcement; policy decision and enforcement points." },
        { name: "Privileged access", detail: "PAM credential vaulting; just-in-time privilege elevation; privileged session recording and monitoring; break-glass procedures; MFA required for all privileged operations." },
        { name: "Physical access — PACS", detail: "PIV and mPIV-capable card readers; PACS controllers; FICAM PACS topology (E-PACS); visitor management; SP 800-116r1 PIV-in-PACS implementation guidance." },
        { name: "mPIV authentication", detail: "NFC tap and BLE proximity presentation at PACS readers for physical access; certificate-based logical access using PIV auth certificate; MDM device health posture as additional factor." },
        { name: "FIDO2 authentication", detail: "WebAuthn relying party integration; CTAP2 authenticator protocol; origin-scoped credentials prevent credential phishing; primary mechanism for OMB M-22-09 phishing-resistant MFA compliance." },
        { name: "PQC-secured channels", detail: "TLS 1.3 with hybrid ML-KEM key exchange as the highest-priority HNDL mitigation; IPsec PQC migration for site-to-site VPN; audit logging of all PQC-negotiated sessions." },
        { name: "VC-based authorization", detail: "Holder presents VC at resource server; verifier validates issuer signature offline; fine-grained ABAC using structured entitlement claims; no real-time issuer query required for access decision." },
        { name: "Digital services / SSO", detail: "Agency identity provider (IdP) issuing SAML assertions or OIDC tokens; max.gov for inter-agency SSO; session management; MFA enforcement at IdP; step-up authentication for sensitive transactions." },
      ],
      standards: ["NIST SP 800-63B","NIST SP 800-116r1","FIDO2 / WebAuthn W3C","NIST FIPS 203","OMB M-22-09","OID4VP","SAML 2.0","OIDC / OAuth 2.0"],
      docs: ["fido2","mpiv","pqc","vc"],
    },
  ],
};

function tag(label, ramp, href) {
  const el = document.createElement(href ? 'a' : 'span');
  el.className = `tag c-${ramp}${href ? ' clickable' : ''}`;
  el.textContent = label + (href ? ' ↗' : '');
  if (href) { el.href = href; el.target = '_blank'; el.rel = 'noopener'; }
  return el;
}

function capRow(cap, ramp) {
  const row = document.createElement('div');
  row.className = `cap-row c-${ramp}`;

  const hdr = document.createElement('div');
  hdr.className = 'cap-header';

  const nm = document.createElement('span');
  nm.className = 'cap-name';
  nm.textContent = cap.name;

  const ch = document.createElement('span');
  ch.className = 'cap-chevron';
  ch.textContent = '▼';

  const det = document.createElement('p');
  det.className = 'cap-detail';
  det.textContent = cap.detail;

  hdr.appendChild(nm); hdr.appendChild(ch);
  row.appendChild(hdr); row.appendChild(det);

  row.addEventListener('click', e => {
    e.stopPropagation();
    const open = row.classList.toggle('open');
    ch.textContent = open ? '▲' : '▼';
  });
  return row;
}

function rowLabel(text) {
  const el = document.createElement('div');
  el.className = 'row-label';
  el.textContent = text;
  return el;
}

function section(data, isLayer) {
  const wrap = document.createElement('div');
  wrap.className = `section c-${data.ramp}`;
  wrap.style.background = `var(--${data.ramp}-bg)`;

  const hdr = document.createElement('div');
  hdr.className = 'section-header';

  const left = document.createElement('div');
  const title = document.createElement('div');
  title.className = 'section-title';
  title.textContent = data.label;
  const sum = document.createElement('div');
  sum.className = 'section-summary';
  sum.textContent = data.summary;
  left.appendChild(title); left.appendChild(sum);

  const chev = document.createElement('span');
  chev.className = 'chevron';
  chev.textContent = '▼';

  hdr.appendChild(left); hdr.appendChild(chev);

  const preview = document.createElement('div');
  preview.className = 'tags-row';
  const maxPrev = isLayer ? 4 : 3;
  data.caps.slice(0, maxPrev).forEach(c => preview.appendChild(tag(c.name, data.ramp)));
  if (data.caps.length > maxPrev) {
    const more = document.createElement('span');
    more.style.cssText = `font-size:11px;color:var(--${data.ramp}-bd);align-self:center;margin:2px 4px`;
    more.textContent = `+${data.caps.length - maxPrev} more`;
    preview.appendChild(more);
  }

  const body = document.createElement('div');
  body.className = 'section-body';

  body.appendChild(rowLabel('Capabilities'));
  data.caps.forEach(c => body.appendChild(capRow(c, data.ramp)));

  body.appendChild(rowLabel('Standards'));
  const stRow = document.createElement('div');
  stRow.className = 'tags-row';
  stRow.style.display = 'flex';
  data.standards.forEach(s => stRow.appendChild(tag(s, 'gray')));
  body.appendChild(stRow);

  if (data.docs.length) {
    body.appendChild(rowLabel('Document sections'));
    const docRow = document.createElement('div');
    docRow.className = 'tags-row';
    docRow.style.display = 'flex';
    data.docs.forEach(d => docRow.appendChild(tag(DOC[d].label, DOC[d].ramp, DOC[d].url)));
    body.appendChild(docRow);
  }

  wrap.appendChild(hdr);
  wrap.appendChild(preview);
  wrap.appendChild(body);

  wrap.addEventListener('click', () => {
    const open = wrap.classList.toggle('open');
    chev.textContent = open ? '▲' : '▼';
  });

  return wrap;
}

const app = document.getElementById('app');

const layers = document.createElement('div');
layers.className = 'layers';
ARCH.layers.forEach(l => layers.appendChild(section(l, true)));
app.appendChild(layers);

const grid = document.createElement('div');
grid.className = 'practice-grid';
ARCH.practice.forEach(p => grid.appendChild(section(p, false)));
app.appendChild(grid);

const bar = document.createElement('div');
bar.className = 'doc-bar';
Object.entries(DOC).forEach(([id, d]) => bar.appendChild(tag(d.label, d.ramp, d.url)));
app.appendChild(bar);

const hint = document.createElement('p');
hint.className = 'hint';
hint.textContent = 'Tap a section to expand · tap a capability for detail · tap doc tags to navigate';
app.appendChild(hint);
</script>






