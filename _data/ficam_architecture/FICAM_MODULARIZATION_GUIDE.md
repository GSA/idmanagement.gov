# FICAM Architecture Modularization Guide

## Overview

The FICAM architecture sections are now **fully modular**. Each section (layer or practice area) is defined in a separate YAML data file and rendered using a reusable JavaScript renderer. This allows sections to be:

- Updated independently without touching other sections
- Rendered individually or in groups
- Embedded in other pages
- Extended with new sections easily

---

## How the Page Is Put Together

The redesign page is assembled from four separate pieces:

1. **Data**: Each architecture layer or practice area lives in its own YAML file under `_data/ficam_architecture/`.
2. **Styles**: `_sass/ficam-components.scss` contains the component styles. `assets/css/ficam-architecture.scss` imports those styles and Jekyll compiles it to `/assets/css/ficam-architecture.css`.
3. **Renderer**: `assets/js/ficam-renderer.js` converts YAML-derived JavaScript objects into expandable boxes.
4. **Page composition**: `_arch/ficam-arch-redesign.md` decides which boxes appear on the page and where each independently rendered group is inserted.

The main page intentionally renders each major area independently:

```html
<div class="layers" aria-label="FICAM architecture layers">
  <div id="governance-layer"></div>
  <div id="federation-layer"></div>
  <div id="post-quantum-layer"></div>
  <div id="verifiable-credentials-layer"></div>
</div>

<div id="practice-areas" aria-label="FICAM practice areas"></div>
<div id="document-links"></div>
<div id="interaction-hint"></div>
```

The script then loads each YAML file through Jekyll, initializes the renderer, and fills each container:

```javascript
const DOCS = {{ site.data.ficam_architecture.documents | jsonify }};

const GOVERNANCE = {{ site.data.ficam_architecture.governance | jsonify }};
const FEDERATION = {{ site.data.ficam_architecture.federation | jsonify }};
const POST_QUANTUM_CRYPTO = {{ site.data.ficam_architecture.post_quantum_crypto | jsonify }};
const VERIFIABLE_CREDENTIALS = {{ site.data.ficam_architecture.verifiable_credentials | jsonify }};

const PRACTICES = [
  {{ site.data.ficam_architecture.identity_management | jsonify }},
  {{ site.data.ficam_architecture.credential_management | jsonify }},
  {{ site.data.ficam_architecture.access_management | jsonify }}
];

document.addEventListener('DOMContentLoaded', function() {
  const renderer = new FicamSectionRenderer();
  renderer.setDocConfig(DOCS);

  document.getElementById('governance-layer').appendChild(renderer.renderSection(GOVERNANCE, true));
  document.getElementById('federation-layer').appendChild(renderer.renderSection(FEDERATION, true));
  document.getElementById('post-quantum-layer').appendChild(renderer.renderSection(POST_QUANTUM_CRYPTO, true));
  document.getElementById('verifiable-credentials-layer').appendChild(renderer.renderSection(VERIFIABLE_CREDENTIALS, true));

  renderer.renderPractices(PRACTICES, 'practice-areas');
  // Bottom document tags are intentionally hidden for now.
  // The DOCS data and document-links container remain in place for restoration.
  // renderer.renderDocBar(DOCS, 'document-links');
  renderer.renderHint('Tap a section to expand · tap a capability for detail', 'interaction-hint');
});
```

Use `renderer.renderSection(sectionData, true)` for a single architecture layer box. Use `renderer.renderPractices(practicesArray, container)` for the three-box practice row.

## Current Document Tag Display Status

As of 2026-06-23, document tag display has been intentionally commented out without changing the site structure or YAML data files.

- The per-section **Document sections** rows are commented out in `assets/js/ficam-renderer.js`.
- The bottom five document tags are commented out in `_arch/ficam-arch-redesign.md` by disabling `renderer.renderDocBar(DOCS, 'document-links')`.
- The `DOCS` JavaScript object, `_data/ficam_architecture/documents.yml`, and `<div id="document-links"></div>` container remain in place.
- To restore document tags later, uncomment the document-links block in `assets/js/ficam-renderer.js` and the `renderer.renderDocBar(DOCS, 'document-links')` call in `_arch/ficam-arch-redesign.md`.

---

## How Component Styles Are Used

The component styles live in `_sass/ficam-components.scss`. This file is a Sass partial: it contains the actual rules for architecture boxes, capability rows, document tags, the three-column practice grid, color ramps, and responsive behavior.

Jekyll does not publish files from `_sass/` directly. Instead, the page loads the compiled stylesheet from this entrypoint:

```scss
---
---
/* assets/css/ficam-architecture.scss */

@import 'ficam-components';
```

During a Jekyll build, `assets/css/ficam-architecture.scss` imports `_sass/ficam-components.scss` and compiles to:

```html
<link rel="stylesheet" href="{{ '/assets/css/ficam-architecture.css' | relative_url }}">
```

To update the component styling:

1. Edit `_sass/ficam-components.scss`.
2. Save the file.
3. Let Jekyll rebuild, or run `bundle exec jekyll build`.
4. Refresh `/development/` in the browser.

Use `_sass/ficam-components.scss` for shared component styles. Use `_arch/ficam-arch-redesign.md` only for page structure, data loading, and deciding where rendered components appear.

---

## File Structure

```
_data/ficam_architecture/
├── documents.yml                    # Document references (mDL, FIDO2, etc.)
├── governance.yml                  # Layer: Governance
├── federation.yml                  # Layer: Federation
├── post_quantum_crypto.yml         # Layer: Post-quantum cryptography
├── verifiable_credentials.yml      # Layer: Verifiable credentials
├── identity_management.yml         # Practice: Identity management
├── credential_management.yml       # Practice: Credential management
└── access_management.yml           # Practice: Access management

_sass/
└── ficam-components.scss           # All component styles

assets/
├── css/
│   └── ficam-architecture.scss     # Jekyll entrypoint compiled to ficam-architecture.css
└── js/
    └── ficam-renderer.js           # Renderer module

_arch/
└── ficam-arch-redesign.md          # Main page using modular setup
```

---

## Files Changed Summary

### New Files Created

| File | Location | Purpose |
|------|----------|---------|
| **governance.yml** | `_data/ficam_architecture/governance.yml` | Governance layer: Enterprise ICAM oversight & policy (5 capabilities) |
| **federation.yml** | `_data/ficam_architecture/federation.yml` | Federation layer: Cross-agency trust & interoperability (6 capabilities) |
| **post_quantum_crypto.yml** | `_data/ficam_architecture/post_quantum_crypto.yml` | Post-quantum crypto layer: NIST-standardized PQC migration (7 capabilities) |
| **verifiable_credentials.yml** | `_data/ficam_architecture/verifiable_credentials.yml` | Verifiable credentials layer: W3C-standardized portable identity (7 capabilities) |
| **identity_management.yml** | `_data/ficam_architecture/identity_management.yml` | Identity management practice: Attribute collection & verification (8 capabilities) |
| **credential_management.yml** | `_data/ficam_architecture/credential_management.yml` | Credential management practice: Issuance & lifecycle (8 capabilities) |
| **access_management.yml** | `_data/ficam_architecture/access_management.yml` | Access management practice: Authentication & authorization (9 capabilities) |
| **documents.yml** | `_data/ficam_architecture/documents.yml` | Document section references (mDL, FIDO2, mPIV, PQC, VC) |
| **ficam-renderer.js** | `assets/js/ficam-renderer.js` | Modular JavaScript renderer class (~240 lines) |
| **ficam-components.scss** | `_sass/ficam-components.scss` | SASS stylesheet with all component styles (~250 lines) |
| **ficam-architecture.scss** | `assets/css/ficam-architecture.scss` | Jekyll stylesheet entrypoint that imports the component Sass and compiles to `ficam-architecture.css` |
| **FICAM_MODULARIZATION_GUIDE.md** | `_data/ficam_architecture/FICAM_MODULARIZATION_GUIDE.md` | Complete documentation for updating & extending sections |

### Modified Files

| File | Location | Changes |
|------|----------|---------|
| **ficam-arch-redesign.md** | `_arch/ficam-arch-redesign.md` | Removed ~500 lines of inline CSS and JavaScript; updated to use modular setup with Jekyll data integration, component stylesheet, renderer module, and independently rendered page containers |

### Summary Statistics

- **Total new files**: 12
- **Total modified files**: 1
- **Lines of CSS extracted**: ~250
- **Lines of JavaScript refactored**: ~500 (split into modular class)
- **YAML data files created**: 8
- **Total capabilities documented**: 44 (across 7 sections)
- **Total references documented**: ~60+ unique references

---

## Updating Existing Sections

### Quick Update Example

To update the **Governance** layer capabilities:

1. **Open**: `_data/ficam_architecture/governance.yml`

2. **Find** the `capabilities` array:
   ```yaml
   capabilities:
     - name: "Policy & standards"
       detail: "FISMA, OMB M-19-17..."
   ```

3. **Edit** any capability name or detail text

4. **Save** - Jekyll automatically detects changes and rebuilds

5. **Result** - Changes appear on the website immediately

---

## YAML Data Structure Reference

### Layer/Practice Section Format

```yaml
id: governance                         # Unique identifier
label: "Governance"                   # Display name
isnew: false                          # True displays a New tag beside the section heading
ramp: gray                            # Color ramp (gray, teal, purple, blue, coral, pink, green, amber)
summary: "Enterprise ICAM program..." # Short description

capabilities:                         # Array of capabilities
  - name: "Policy & standards"       # Capability name (displayed first)
    isnew: false                     # True displays a New tag beside the capability heading
    detail: "FISMA, OMB M-19-17..."  # Detailed explanation (shown on expand)

references:                           # Array of references displayed under the References heading
  - label: "NIST SP 800-53"
    isnew: false                     # True displays a New tag beside this reference
  - label: "NIST SP 800-63"
    isnew: false

documents:                            # Array of document section IDs to link
  - id: mdl
    isnew: false                     # True displays a New tag beside this document tag
  - id: fido2
    isnew: false
  - id: pqc
    isnew: false
```

The `isnew` option is stored as an explicit true/false value in the architecture data files. Set `isnew: true` on a section to display a small **New** tag beside the section heading. Set `isnew: true` on an individual capability to display the same heading badge beside that capability. Set `isnew: true` on a reference or document entry to display a split tag with **NEW** on the left and the reference or document text on the right. This does not change the page layout; it only changes the tag presentation when the flag is explicitly true.

### Example: Adding a New Capability

**File**: `_data/ficam_architecture/governance.yml`

```yaml
capabilities:
  # ... existing capabilities ...
  - name: "Risk management"                    # NEW
    isnew: true                                # Shows the New tag beside this capability
    detail: "Enterprise risk assessment..."    # NEW
```

---

## Adding a New Section

### Example: Create a New Layer

1. **Create** file: `_data/ficam_architecture/[new-section-id].yml`

   Example filename: `_data/ficam_architecture/zero_trust.yml`

2. **Add YAML content**:
   ```yaml
   id: zero_trust
   label: "Zero Trust Architecture"
   isnew: false
   ramp: "purple"
   summary: "Assume breach model with continuous verification..."
   
   capabilities:
     - name: "Identity verification"
       isnew: false
       detail: "Every access request verified..."
     - name: "Encryption everywhere"
       isnew: false
       detail: "All data encrypted in transit..."
   
   references:
     - label: "NIST SP 800-207"
       isnew: false
   
   documents:
     - id: fido2
       isnew: false
     - id: pqc
       isnew: false
   ```

3. **Update** `_arch/ficam-arch-redesign.md` to include the new section.

   Add a page container where the new box should appear:

   ```html
   <div id="zero-trust-layer"></div>
   ```

   Load the YAML data:

   ```javascript
   const ZERO_TRUST = {{ site.data.ficam_architecture.zero_trust | jsonify }};
   ```

   Render the section into its container:

   ```javascript
   document.getElementById('zero-trust-layer').appendChild(renderer.renderSection(ZERO_TRUST, true));
   ```

4. **Save** - The new layer appears automatically with full styling and interactivity

---

## Color Ramps

Choose from these predefined color schemes:

| Ramp | Background | Border | Text | Best For |
|------|-----------|--------|------|----------|
| `gray` | #F1EFE8 | #6e6d66 | #444441 | Standards, default |
| `teal` | #E1F5EE | #0F6E56 | #085041 | Federation, trust |
| `purple` | #EEEDFE | #534AB7 | #3C3489 | Identity, crypto |
| `blue` | #E6F1FB | #185FA5 | #0C447C | Access, VC |
| `coral` | #FAECE7 | #993C1D | #712B13 | Credentials |
| `pink` | #FBEAF0 | #993556 | #72243E | Mobile PIV |
| `green` | #EAF3DE | #3B6D11 | #27500A | FIDO2 |
| `amber` | #FAEEDA | #854F0B | #633806 | mDL |

---

## Document References

The `documents` field controls which document tags appear inside an expanded architecture box. Each value must match a key in `_data/ficam_architecture/documents.yml`.

```yaml
documents:
  - mdl      # #mdl section on the page
  - fido2    # #fido2 section on the page
  - mpiv     # #mpiv section on the page
  - pqc      # #pqc section on the page
  - vc       # #vc section on the page
```

The tag label, color, and link target are defined in `_data/ficam_architecture/documents.yml`:

```yaml
mdl:
  label: "mDL"
  ramp: "amber"
  url: "#mdl"
```

### Making Document Tags Linkable

To make a document tag clickable, add or update its `url` in `_data/ficam_architecture/documents.yml`.

Use a same-page anchor when the target appears on the current page:

```yaml
mdl:
  label: "mDL"
  ramp: "amber"
  url: "#mdl"
```

Use a site-relative path when the target is another page on idmanagement.gov:

```yaml
fido2:
  label: "FIDO2"
  ramp: "green"
  url: "/implement/gsa-guide/"
```

Use a full URL when linking to an external site:

```yaml
pqc:
  label: "PQC"
  ramp: "purple"
  url: "https://csrc.nist.gov/projects/post-quantum-cryptography"
```

Then reference the document key from any section YAML file:

```yaml
documents:
  - mdl
  - fido2
  - pqc
```

The renderer displays each referenced document as a clickable tag with an arrow. External `http://` and `https://` links open in a new tab; same-page anchors and site-relative links stay in the current tab.

---

## Rendering Sections Independently

### Use Case: Display Single Section on Another Page

The renderer module can render individual sections. Create a new page:

**File**: `_arch/layers/governance.md`

```markdown
---
layout: page
title: Governance Layer
permalink: /arch/layers/governance/
---

<link rel="stylesheet" href="{{ '/assets/css/ficam-architecture.css' | relative_url }}">
<script src="{{ '/assets/js/ficam-renderer.js' | relative_url }}"></script>

<div id="app"></div>

<script>
const govData = {{ site.data.ficam_architecture.governance | jsonify }};
const docs = {{ site.data.ficam_architecture.documents | jsonify }};

document.addEventListener('DOMContentLoaded', function() {
  const renderer = new FicamSectionRenderer();
  renderer.setDocConfig(docs);
  document.getElementById('app').appendChild(renderer.renderSection(govData, true));
});
</script>
```

---

## JavaScript Renderer API

### FicamSectionRenderer Class

```javascript
const renderer = new FicamSectionRenderer();

// Set document configuration
renderer.setDocConfig(docsObject);

// Render single section
renderer.renderSection(sectionData, isLayer);  // isLayer = true for layers, false for practices

// Render layers collection
renderer.renderLayers(layersArray, 'container-id');

// Render practices collection
renderer.renderPractices(practicesArray, 'container-id');

// Render complete page in one call, useful for simple embeds
renderer.renderPage(layersArray, practicesArray, docsObject, 'container-id');

// Render document links bar
renderer.renderDocBar(docsObject, 'container-id');

// Render hint text
renderer.renderHint('Custom hint text', 'container-id');
```

---

## Common Tasks

### Update a Standard/Reference

**File**: `_data/ficam_architecture/federation.yml`

```yaml
references:
  - label: "SAML 2.0"
    isnew: false
  - label: "OIDC / OAuth 2.0"
    isnew: false
  - label: "NEW REFERENCE HERE"
    isnew: true
```

### Rename a Capability

**File**: `_data/ficam_architecture/credential_management.yml`

```yaml
capabilities:
  - name: "PIV / CAC"  # ← Change the name here
    detail: "FIPS 201-3 smart card..."
```

### Link New Document Section

1. Add to `_data/ficam_architecture/documents.yml`:
   ```yaml
   bts:
     label: "BTS"
     ramp: "teal"
     url: "#bts"
   ```

2. Add to section's `documents` array:
   ```yaml
   documents:
     - mdl
     - bts  # NEW
   ```

### Add Multiple New Capabilities

**File**: `_data/ficam_architecture/access_management.yml`

```yaml
capabilities:
  # ... existing ...
  - name: "New Capability 1"
    detail: "Description..."
  - name: "New Capability 2"
    detail: "Description..."
```

---

## Styling Customization

All component styles are in `_sass/ficam-components.scss`. To modify:

1. **Edit**: `_sass/ficam-components.scss`
2. **Change** CSS properties (colors stay in `:root` CSS variables)
3. **Save** - Jekyll compiles SASS to CSS automatically
4. **Result** - Changes appear on website

### Key Customizable Elements

- `.section` - Main section container
- `.section-header` - Title and summary area
- `.cap-row` - Individual capability row
- `.tags-row` - Standards and document tags
- `:root` - Color scheme and spacing variables

---

## Troubleshooting

### Changes Not Showing Up

1. **Clear browser cache**: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
2. **Check YAML syntax**: Use [YAML Linter](https://www.yamllint.com/)
3. **Jekyll rebuild**: Run `jekyll serve --force_polling`

### Color Not Applying

Ensure the `ramp` value matches an available color:
```yaml
ramp: gray  # must be exactly: gray, teal, purple, blue, coral, pink, green, amber
```

### Document Links Not Working

Verify document ID exists in `documents.yml`:
```yaml
documents:
  - mdl   # ✓ exists in documents.yml
  - xyz   # ✗ doesn't exist - will fail silently
```

---

## Visual Consistency

The modular system **maintains exact visual consistency**:

- ✅ All colors, fonts, and spacing are unchanged
- ✅ Interactive behavior (expand/collapse) is identical
- ✅ Responsive design preserved
- ✅ Accessibility features maintained

Changes are **data-only** — updating section content doesn't affect layout or styling.

---

## Next Steps

- **Update** existing sections using the YAML files
- **Add** new capabilities/references to expand sections
- **Create** new layers or practices as needed
- **Embed** individual sections in other pages
- **Customize** styling by modifying `ficam-components.scss`
