(function () {
  "use strict";

  function escapeHtml(value) {
    return String(value === null || value === undefined ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function slug(value) {
    return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function cellCopyButton(label) {
    var tooltip = "Copy \"" + label + "\" to clipboard";
    return [
      "<button type=\"button\" class=\"fpki-hierarchy__cell-copy\" data-fpki-cell-copy data-fpki-copy-label=\"" + escapeHtml(label) + "\" title=\"" + escapeHtml(tooltip) + "\" aria-label=\"" + escapeHtml(tooltip) + "\">",
      "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\"><rect x=\"9\" y=\"9\" width=\"10\" height=\"10\" rx=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path></svg>",
      "</button>"
    ].join("");
  }

  function tableRows(rows) {
    return rows.filter(function (row) {
      return row[1] !== null && row[1] !== undefined && String(row[1]).trim() !== "";
    }).map(function (row) {
      return "<tr><th scope=\"row\">" + escapeHtml(row[0]) + "</th><td class=\"fpki-hierarchy__copy-cell\" colspan=\"2\"><span data-fpki-copy-source>" + escapeHtml(row[1]) + "</span>" + cellCopyButton(row[0]) + "</td></tr>";
    }).join("");
  }

  function detailsTable(rows, spanningRows, caption) {
    var bodyRows = tableRows(rows);
    var extraRows = (spanningRows || []).join("");
    if (!bodyRows && !extraRows) return "";

    return [
      "<table class=\"usa-table fpki-hierarchy__table fpki-hierarchy__details-table\">",
      "<caption class=\"usa-sr-only\">" + escapeHtml(caption) + "</caption>",
      "<tbody>",
      bodyRows,
      extraRows,
      "</tbody>",
      "</table>"
    ].join("");
  }

  function accordionItem(id, label, content, headingLevel, expanded) {
    var heading = "h" + Math.min(Math.max(headingLevel || 3, 2), 6);
    var isExpanded = expanded ? "true" : "false";
    return [
      "<" + heading + " class=\"usa-accordion__heading\">",
      "<button type=\"button\" class=\"usa-accordion__button\" aria-expanded=\"" + isExpanded + "\" aria-controls=\"" + id + "\">",
      escapeHtml(label),
      "</button>",
      "</" + heading + ">",
      "<div id=\"" + id + "\" class=\"usa-accordion__content usa-prose\" aria-hidden=\"" + (expanded ? "false" : "true") + "\">",
      content,
      "</div>"
    ].join("");
  }

  function syncAccordionHeadingState(button) {
    var heading = button.closest(".usa-accordion__heading");
    if (!heading) return;

    var expanded = button.getAttribute("aria-expanded") === "true";
    heading.classList.toggle("fpki-hierarchy__heading-expanded", expanded);
    heading.classList.toggle("fpki-hierarchy__heading-collapsed", !expanded);
  }

  function syncAccordionHeadingStates(scope) {
    scope.querySelectorAll(".usa-accordion__button").forEach(syncAccordionHeadingState);
  }

  function loadingIndicator() {
    return [
      "<div class=\"fpki-hierarchy__loader\" role=\"status\" aria-live=\"polite\">",
      "<div class=\"fpki-hierarchy__loader-mark\" aria-hidden=\"true\">GSA</div>",
      "<p class=\"fpki-hierarchy__loader-text\">Loading certificate hierarchy</p>",
      "</div>"
    ].join("");
  }

  function announce(root, message) {
    var status = root.querySelector("[data-fpki-status]");
    if (!status) return;
    status.textContent = "";
    window.setTimeout(function () {
      status.textContent = message;
    }, 20);
  }

  function extensionRows(certificate) {
    if (!certificate.extensions || certificate.extensions.length === 0) return "";

    var rows = certificate.extensions.map(function (extension) {
      return [
        "<tr>",
        "<th scope=\"row\">" + escapeHtml(extension.oid) + "</th>",
        "<td class=\"fpki-hierarchy__extension-critical\">" + escapeHtml(extension.critical ? "Yes" : "No") + "</td>",
        "<td class=\"fpki-hierarchy__extension-value fpki-hierarchy__copy-cell\"><pre class=\"fpki-hierarchy__pre\" data-fpki-copy-source>" + escapeHtml(extension.value) + "</pre>" + cellCopyButton(extension.oid) + "</td>",
        "</tr>"
      ].join("");
    }).join("");

    return [
      "<tr class=\"fpki-hierarchy__extension-columns\">",
      "<th scope=\"col\">Extension</th>",
      "<th class=\"fpki-hierarchy__extension-critical\" scope=\"col\">Critical</th>",
      "<th class=\"fpki-hierarchy__extension-value\" scope=\"col\">Value</th>",
      "</tr>",
      rows
    ].join("");
  }

  function certificateBody(certificate, idPrefix, extraClass) {
    var extensions = extensionRows(certificate);
    var spanningRows = [];

    if (extensions) {
      spanningRows.push([
        "<tr class=\"fpki-hierarchy__spanning-row\">",
        "<th scope=\"row\" colspan=\"3\">Certificate extensions</th>",
        "</tr>"
      ].join(""));
      spanningRows.push(extensions);
    }

    var metadata = detailsTable([
      ["Subject", certificate.subject],
      ["Issuer", certificate.issuer],
      ["Serial", certificate.serial],
      ["SHA-1", certificate.sha1],
      ["SHA-256", certificate.sha256],
      ["Valid from", certificate.valid_from],
      ["Valid to", certificate.valid_to],
      ["Signature algorithm", certificate.signature_algorithm],
      ["Public key", [certificate.public_key_algorithm, certificate.public_key_bits].filter(Boolean).join(" ")],
      ["Subject key identifier", certificate.subject_key_identifier],
      ["Authority key identifier", certificate.authority_key_identifier]
    ], spanningRows, "Certificate data and extensions for " + (certificate.label || certificate.subject || certificate.id));

    if (!metadata) return "";

    return [
      "<div class=\"usa-accordion usa-accordion--bordered fpki-hierarchy__nested fpki-hierarchy__certificate-data " + (extraClass || "") + "\">",
      accordionItem(idPrefix + "-metadata", "Certificate Data and Extensions", metadata, 5, false),
      "</div>"
    ].join("");
  }

  function subjectPart(certificate, oid) {
    var parts = certificate.subject_parts || [];
    var match = parts.filter(function (part) {
      return String(part.oid).toUpperCase() === oid;
    })[0];
    return match ? match.value : "";
  }

  function certificatesIssuedBy(certificate, certificatesById) {
    return Object.keys(certificatesById).map(function (key) {
      return certificatesById[key];
    }).filter(function (candidate) {
      return candidate && candidate.issuer_id === certificate.id && candidate.id !== certificate.id;
    }).sort(function (a, b) {
      return String(a.label || a.subject || a.id).localeCompare(String(b.label || b.subject || b.id));
    });
  }

  function relationshipIcon(direction) {
    var path = direction === "inbound" ? "M19 12H5m0 0 5-5M5 12l5 5" : "M5 12h14m0 0-5-5m5 5-5 5";

    return [
      "<span class=\"fpki-hierarchy__relationship-icon fpki-hierarchy__relationship-icon--" + escapeHtml(direction) + "\" aria-hidden=\"true\">",
      "<svg viewBox=\"0 0 24 24\" focusable=\"false\">",
      "<path d=\"" + path + "\"></path>",
      "</svg>",
      "</span>"
    ].join("");
  }

  function relationshipCopyButton(name) {
    return [
      "<button type=\"button\" class=\"fpki-hierarchy__relationship-copy\" data-fpki-copy-name=\"" + escapeHtml(name) + "\" aria-label=\"Copy " + escapeHtml(name) + "\">",
      "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\"><rect x=\"9\" y=\"9\" width=\"10\" height=\"10\" rx=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path></svg>",
      "</button>"
    ].join("");
  }

  function relationshipGraphButton(certificate) {
    var name = certificate.label || certificate.subject || certificate.id;
    return [
      "<button type=\"button\" class=\"fpki-hierarchy__graph-button\" data-fpki-certificate-graph-id=\"" + escapeHtml(certificate.id) + "\" data-fpki-certificate-name=\"" + escapeHtml(name) + "\" aria-expanded=\"false\" aria-label=\"Show relationship graph for " + escapeHtml(name) + "\" title=\"Show certificate relationship graph\">",
      "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">",
      "<circle cx=\"12\" cy=\"5\" r=\"2.5\"></circle>",
      "<circle cx=\"5\" cy=\"18\" r=\"2.5\"></circle>",
      "<circle cx=\"19\" cy=\"18\" r=\"2.5\"></circle>",
      "<path d=\"M12 7.5v4M5 15.5v-4h14v4\"></path>",
      "</svg>",
      "<span>Show graph view</span>",
      "</button>"
    ].join("");
  }

  function setGraphButtonState(button, shown) {
    if (!button) return;
    var name = button.getAttribute("data-fpki-certificate-name") || "certificate";
    var action = shown ? "Hide" : "Show";
    button.setAttribute("aria-expanded", shown ? "true" : "false");
    button.setAttribute("aria-label", action + " relationship graph for " + name);
    button.setAttribute("title", action + " certificate relationship graph");
    button.querySelector("span").textContent = action + " graph view";
  }

  function inlineGraphView(certificate) {
    return [
      "<section class=\"fpki-certificate-graph-view\" data-fpki-certificate-graph-view data-fpki-initial-certificate-id=\"" + escapeHtml(certificate.id) + "\" hidden>",
      "<h4 class=\"fpki-certificate-graph-view__heading\" data-fpki-certificate-graph-heading>Certificate relationship graph</h4>",
      "<button type=\"button\" class=\"fpki-certificate-graph-view__close\" data-fpki-graph-close aria-label=\"Close certificate relationship graph\" title=\"Close graph\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M6 6l12 12M18 6 6 18\"></path></svg></button>",
      "<p class=\"fpki-certificate-graph-view__description\">The complete FPKI graph is shown with this certificate and its relationships highlighted.</p>",
      "<div class=\"fpki-certificate-graph-modal__legend\" aria-label=\"Graph legend\">",
      "<span><i class=\"fpki-certificate-graph-modal__key fpki-certificate-graph-modal__key--selected\"></i>Selected</span>",
      "<span><i class=\"fpki-certificate-graph-modal__key fpki-certificate-graph-modal__key--issuer\"></i>Issuer path</span>",
      "<span><i class=\"fpki-certificate-graph-modal__key fpki-certificate-graph-modal__key--issued\"></i>Issued certificate</span>",
      "<span><i class=\"fpki-certificate-graph-modal__key fpki-certificate-graph-modal__key--root\"></i>COMMON root</span>",
      "<span><i class=\"fpki-certificate-graph-modal__key fpki-certificate-graph-modal__key--background\"></i>Other certificate</span>",
      "</div>",
      "<div class=\"fpki-certificate-graph-view__stage\">",
      "<div class=\"fpki-certificate-graph-modal__canvas\" data-fpki-certificate-graph aria-hidden=\"true\"></div>",
      "<aside class=\"fpki-certificate-graph-modal__details\" data-fpki-certificate-graph-details aria-label=\"Selected certificate graph details\"></aside>",
      "<div class=\"fpki-certificate-graph-modal__controls\" role=\"group\" aria-label=\"Graph layout controls\">",
      "<button type=\"button\" class=\"usa-button usa-button--outline\" data-fpki-graph-zoom-out><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\"><circle cx=\"10.5\" cy=\"10.5\" r=\"6.5\"></circle><path d=\"M6.8 10.5h7.4M15.2 15.2 21 21\"></path></svg><span>Zoom Out</span></button>",
      "<button type=\"button\" class=\"usa-button usa-button--outline\" data-fpki-graph-fit><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5\"></path></svg><span>Fit View</span></button>",
      "<button type=\"button\" class=\"usa-button usa-button--outline\" data-fpki-graph-hierarchy-layout><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\"><rect x=\"9\" y=\"2\" width=\"6\" height=\"5\" rx=\"1\"></rect><rect x=\"2\" y=\"17\" width=\"6\" height=\"5\" rx=\"1\"></rect><rect x=\"16\" y=\"17\" width=\"6\" height=\"5\" rx=\"1\"></rect><path d=\"M12 7v5M5 17v-5h14v5\"></path></svg><span>Hierarchy View</span></button>",
      "<button type=\"button\" class=\"usa-button usa-button--outline\" data-fpki-graph-reset><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M4 4v6h6M5.5 9A8 8 0 1 1 4 14\"></path></svg><span>Reset</span></button>",
      "<button type=\"button\" class=\"usa-button usa-button--outline\" data-fpki-graph-print><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3Zm-3 11H8v-5h8v5Zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1ZM18 3H6v4h12V3Z\"></path></svg><span>Print graph</span></button>",
      "<button type=\"button\" class=\"usa-button usa-button--outline\" data-fpki-graph-motion aria-pressed=\"true\"><svg class=\"fpki-graph-motion__pause\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M8 5v14M16 5v14\"></path></svg><svg class=\"fpki-graph-motion__play\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\"><path d=\"m8 5 11 7-11 7Z\"></path></svg><span>Pause Motion</span></button>",
      "</div>",
      "<div class=\"fpki-certificate-graph-view__view-toggles\" role=\"group\" aria-label=\"Graph display controls\">",
      "<button type=\"button\" class=\"fpki-certificate-graph-view__details-toggle\" data-fpki-graph-details-toggle aria-expanded=\"true\">",
      "<svg class=\"fpki-certificate-graph-view__eye-open\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle></svg>",
      "<svg class=\"fpki-certificate-graph-view__eye-closed\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M9.9 5.3A10.8 10.8 0 0 1 12 5c6.5 0 10 7 10 7a13.7 13.7 0 0 1-2.2 2.9M6.6 6.6A14 14 0 0 0 2 12s3.5 7 10 7a10 10 0 0 0 5.4-1.6M2 2l20 20\"></path></svg>",
      "<span>Hide Info Panel</span>",
      "</button>",
      "<button type=\"button\" class=\"fpki-certificate-graph-view__details-toggle\" data-fpki-graph-node-names-toggle data-names-hidden aria-pressed=\"false\">",
      "<svg class=\"fpki-certificate-graph-view__eye-open\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle></svg>",
      "<svg class=\"fpki-certificate-graph-view__eye-closed\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M9.9 5.3A10.8 10.8 0 0 1 12 5c6.5 0 10 7 10 7a13.7 13.7 0 0 1-2.2 2.9M6.6 6.6A14 14 0 0 0 2 12s3.5 7 10 7a10 10 0 0 0 5.4-1.6M2 2l20 20\"></path></svg>",
      "<span>Show Node Names</span>",
      "</button>",
      "<button type=\"button\" class=\"fpki-certificate-graph-view__details-toggle\" data-fpki-graph-background-nodes-toggle aria-pressed=\"true\">",
      "<svg class=\"fpki-certificate-graph-view__eye-open\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle></svg>",
      "<svg class=\"fpki-certificate-graph-view__eye-closed\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M9.9 5.3A10.8 10.8 0 0 1 12 5c6.5 0 10 7 10 7a13.7 13.7 0 0 1-2.2 2.9M6.6 6.6A14 14 0 0 0 2 12s3.5 7 10 7a10 10 0 0 0 5.4-1.6M2 2l20 20\"></path></svg>",
      "<span>Hide Nodes</span>",
      "</button>",
      "</div>",
      "</div>",
      "<div class=\"usa-sr-only\" data-fpki-certificate-graph-status role=\"status\" aria-live=\"polite\"></div>",
      "</section>"
    ].join("");
  }

  function relationshipList(label, certificates, emptyText, direction, previewMode) {
    var icon = relationshipIcon(direction);
    var items = certificates.map(function (certificate) {
      var name = certificate.label || certificate.subject || certificate.id;
      return [
        "<li>",
        icon,
        previewMode ? "<span class=\"fpki-hierarchy__relationship-copy-text\">" + escapeHtml(name) + "</span>" + relationshipCopyButton(name) : "<button type=\"button\" class=\"usa-button--unstyled usa-link fpki-hierarchy__relationship-link\" data-fpki-certificate-link=\"" + escapeHtml(certificate.id) + "\" data-fpki-link-direction=\"" + escapeHtml(direction) + "\" aria-expanded=\"false\" aria-label=\"Preview " + escapeHtml(direction) + " certificate " + escapeHtml(name) + "\">" + escapeHtml(name) + "</button>",
        "</li>"
      ].join("");
    }).join("");

    if (!items) {
      items = "<li class=\"fpki-hierarchy__relationship-empty\">" + icon + "<span>" + escapeHtml(emptyText) + "</span></li>";
    }

    return [
      "<div class=\"fpki-hierarchy__relationship-group\">",
      "<p class=\"fpki-hierarchy__relationship-label\"><strong>" + escapeHtml(label) + "</strong></p>",
      "<ul class=\"fpki-hierarchy__relationship-list\">",
      items,
      "</ul>",
      "</div>"
    ].join("");
  }

  function certificateNodeSummary(certificate, certificatesById, previewMode, includeGraph) {
    var inboundCertificate = certificate.issuer_id ? certificatesById[certificate.issuer_id] : null;
    var outboundCertificates = certificatesIssuedBy(certificate, certificatesById);
    var attributeRows = [
      ["common_name", subjectPart(certificate, "CN") || certificate.label],
      ["organization_name", subjectPart(certificate, "O")],
      ["country", subjectPart(certificate, "C")],
      ["id", certificate.id]
    ].filter(function (row) {
      return row[1] !== null && row[1] !== undefined && String(row[1]).trim() !== "";
    }).map(function (row) {
      return "<p><strong>" + escapeHtml(row[0]) + ":</strong> " + escapeHtml(row[1]) + "</p>";
    }).join("");

    return [
      "<div class=\"fpki-hierarchy__node-summary\">",
      includeGraph ? "<div class=\"fpki-hierarchy__node-actions\">" + relationshipGraphButton(certificate) + "</div>" : "",
      "<div class=\"fpki-hierarchy__node-attributes\">",
      "<p class=\"fpki-hierarchy__node-summary-label\"><strong>Attributes</strong></p>",
      attributeRows,
      "</div>",
      includeGraph ? inlineGraphView(certificate) : "",
      "<div class=\"fpki-hierarchy__relationships\">",
      relationshipList("Inbound Links from", inboundCertificate ? [inboundCertificate] : [], "No inbound issuer link", "inbound", previewMode),
      relationshipList("Outbound Links to", outboundCertificates, "No outbound certificate links", "outbound", previewMode),
      "</div>",
      previewMode ? "" : "<div class=\"fpki-hierarchy__relationship-preview\" data-fpki-relationship-preview aria-live=\"polite\"></div>",
      "</div>"
    ].join("");
  }

  function relationshipPreview(certificate, certificatesById, direction, idPrefix) {
    var label = direction === "inbound" ? "Inbound Preview" : "Outbound Preview";
    var headingId = idPrefix + "-heading";
    var resultId = idPrefix + "-result";

    return [
      "<div class=\"fpki-hierarchy__relationship-preview-inner\" role=\"region\" aria-labelledby=\"" + headingId + "\">",
      "<div class=\"fpki-hierarchy__relationship-preview-header\">",
      "<h5 id=\"" + headingId + "\" tabindex=\"-1\">" + escapeHtml(label) + "</h5>",
      "<div class=\"fpki-hierarchy__relationship-preview-actions\">",
      "<button type=\"button\" class=\"fpki-hierarchy__relationship-preview-close\" data-fpki-preview-close aria-label=\"Close " + escapeHtml(label.toLowerCase()) + "\">&times;</button>",
      "</div>",
      "</div>",
      "<div class=\"usa-accordion usa-accordion--bordered fpki-hierarchy__root fpki-hierarchy__relationship-preview-result\">",
      topLevelAccordionItem(resultId, certificate.label, hierarchyContent(certificate, certificatesById, idPrefix + "-path", true), certificate, certificatesById),
      "</div>",
      "</div>"
    ].join("");
  }

  function sectionHeading(label, controls) {
    return [
      "<div class=\"fpki-hierarchy__section-heading\">",
      "<h4>" + escapeHtml(label) + "</h4>",
      controls || "",
      "</div>"
    ].join("");
  }

  function issuerPathControls(id, certificateName) {
    var caOnlyId = id + "-expand-issuer-cas";
    var expandAllId = id + "-expand-issuer-path";
    return [
      "<div class=\"fpki-hierarchy__issuer-path-controls\">",
      "<h4>Issuer Path</h4>",
      "<div class=\"fpki-hierarchy__issuer-path-control-group\">",
      "<div class=\"fpki-hierarchy__issuer-expand\">",
      "<label class=\"usa-checkbox__label\" for=\"" + caOnlyId + "\">Expand CA name only</label>",
      "<input class=\"fpki-hierarchy__inline-checkbox\" id=\"" + caOnlyId + "\" type=\"checkbox\" data-fpki-expand-issuer-cas=\"" + id + "\" aria-label=\"Expand issuer CA names only for " + escapeHtml(certificateName) + "\">",
      "</div>",
      "<div class=\"fpki-hierarchy__issuer-expand\">",
      "<label class=\"usa-checkbox__label\" for=\"" + expandAllId + "\">Expand all</label>",
      "<input class=\"fpki-hierarchy__inline-checkbox\" id=\"" + expandAllId + "\" type=\"checkbox\" data-fpki-expand-issuer-path=\"" + id + "\" aria-label=\"Expand all issuer details for " + escapeHtml(certificateName) + "\">",
      "</div>",
      "</div>",
      "</div>"
    ].join("");
  }

  function hierarchyChain(pathIds, certificatesById, idPrefix, index, previewMode) {
    var certificateId = pathIds[index];
    var certificate = certificatesById[certificateId];
    if (!certificate) return "";

    var itemId = idPrefix + "-node-" + index + "-" + slug(certificate.id).slice(0, 20);
    var child = hierarchyChain(pathIds, certificatesById, idPrefix, index + 1, previewMode);
    var issuerCertificate = certificateBody(certificate, itemId, "fpki-hierarchy__issuer-certificate-data");
    var issuerSummary = certificateNodeSummary(certificate, certificatesById, previewMode, false);
    var content = [
      issuerCertificate ? "<div class=\"fpki-hierarchy__issuer-certificate-panel\">" + issuerSummary + issuerCertificate + "</div>" : "",
      child
    ].join("");
    var label = certificate.label + (index > 0 ? " (issuer)" : "");

    return [
      "<div class=\"usa-accordion usa-accordion--bordered fpki-hierarchy__nested fpki-hierarchy__issuer-node\">",
      accordionItem(itemId, label, content, Math.min(3 + index, 6), false),
      "</div>"
    ].join("");
  }

  function hierarchyContent(certificate, certificatesById, idPrefix, previewMode) {
    var ids = certificate.path_to_root || [certificate.id];
    var selectedCertificate = certificateBody(certificate, idPrefix + "-selected", "fpki-hierarchy__selected-certificate");
    var issuerPath = hierarchyChain(ids, certificatesById, idPrefix, 1, previewMode);
    var issuerPathId = idPrefix + "-issuer-path";
    var content = [];

    content.push(certificateSummaryPanel(certificate, certificatesById, idPrefix, selectedCertificate, previewMode));

    if (issuerPath) {
      content.push(issuerPathControls(issuerPathId, certificate.label || certificate.subject || certificate.id));
      content.push("<div id=\"" + issuerPathId + "\" class=\"fpki-hierarchy__issuer-path\">");
      content.push(issuerPath);
      content.push("</div>");
    }

    return content.join("");
  }

  function extensionSearchText(certificate) {
    if (!certificate.extensions) return "";

    return certificate.extensions.map(function (extension) {
      return [extension.oid, extension.critical ? "critical" : "", extension.value].join(" ");
    }).join(" ");
  }

  function searchText(certificate, fields) {
    var values = [];

    if (fields.label) values.push(certificate.label);
    if (fields.subject) values.push(certificate.subject);
    if (fields.issuer) values.push(certificate.issuer);
    if (fields.serial) values.push(certificate.serial);
    if (fields.fingerprints) values.push(certificate.sha1, certificate.sha256);
    if (fields.keyIdentifiers) values.push(certificate.subject_key_identifier, certificate.authority_key_identifier);
    if (fields.extensions) values.push(extensionSearchText(certificate));

    return values.filter(Boolean).join(" ").toLowerCase();
  }

  function selectedSearchFields(root) {
    var fields = {};
    root.querySelectorAll("[data-fpki-search-field]").forEach(function (input) {
      fields[input.value] = input.checked;
    });
    return fields;
  }

  function certificateSummaryPanel(certificate, certificatesById, id, selectedCertificate, previewMode) {
    var pathIds = certificate.path_to_root || [certificate.id];
    var rootCertificate = certificatesById[pathIds[pathIds.length - 1]] || certificate;

    return [
      "<div class=\"fpki-hierarchy__summary-panel\">",
      "<div class=\"fpki-hierarchy__path-summary fpki-hierarchy__path-summary--top\">",
      "<p class=\"fpki-hierarchy__node-summary-label\"><strong>Path summary</strong></p>",
      "<div class=\"fpki-hierarchy__summary-panel-data\">",
      "<p><strong>Contained certificates:</strong> " + escapeHtml(pathIds.length) + "</p>",
      "<p><strong>Issuer path length:</strong> " + escapeHtml(Math.max(pathIds.length - 1, 0)) + "</p>",
      "<p><strong>Root anchor:</strong> " + escapeHtml(rootCertificate.label || rootCertificate.subject || "Unavailable") + "</p>",
      "<p><strong>Valid to:</strong> " + escapeHtml(certificate.valid_to || "Unavailable") + "</p>",
      "</div>",
      "</div>",
      certificateNodeSummary(certificate, certificatesById, previewMode, !previewMode),
      selectedCertificate || "",
      "</div>"
    ].join("");
  }

  function topLevelAccordionItem(id, label, content, certificate, certificatesById) {
    return [
      "<h3 class=\"usa-accordion__heading fpki-hierarchy__top-heading\">",
      "<button type=\"button\" class=\"usa-accordion__button fpki-hierarchy__top-button\" aria-expanded=\"false\" aria-controls=\"" + id + "\" data-fpki-certificate-id=\"" + escapeHtml(certificate.id) + "\">",
      escapeHtml(label),
      "</button>",
      "</h3>",
      "<div id=\"" + id + "\" class=\"usa-accordion__content usa-prose\" aria-hidden=\"true\">",
      content,
      "</div>"
    ].join("");
  }

  function renderCertificateAccordions(certificates, certificatesById) {
    return [
      "<div class=\"usa-accordion usa-accordion--bordered fpki-hierarchy__root\">",
      certificates.map(function (certificate, index) {
        var idPrefix = "fpki-cert-" + index + "-" + slug(certificate.id).slice(0, 20);
        return topLevelAccordionItem(
          idPrefix,
          certificate.label,
          hierarchyContent(certificate, certificatesById, idPrefix + "-path"),
          certificate,
          certificatesById
        );
      }).join(""),
      "</div>"
    ].join("");
  }

  function renderFilterControls(data, lastUpdate) {
    return [
      "<div class=\"fpki-hierarchy__filter-summary-row\">",
      "<div class=\"fpki-hierarchy__filter-summary\">",
      "<p><strong>Root certificate:</strong> " + escapeHtml(data.meta.root_label) + "</p>",
      "</div>",
      "<p class=\"fpki-hierarchy__result-count\" data-fpki-hierarchy-count role=\"status\" aria-live=\"polite\" aria-atomic=\"true\"><strong>Certificate count:</strong> " + escapeHtml(data.meta.certificate_count) + "</p>",
      "</div>",
      "<div class=\"fpki-hierarchy__split-filter\">",
      "<div class=\"fpki-hierarchy__filter-input\">",
      "<label class=\"usa-sr-only\" for=\"fpki-hierarchy-filter\">Filter certificate authorities</label>",
      "<input class=\"usa-input\" id=\"fpki-hierarchy-filter\" type=\"search\" autocomplete=\"off\" aria-describedby=\"fpki-hierarchy-filter-instructions\" placeholder=\"Filter certificate authorities\">",
      "<p class=\"usa-hint fpki-hierarchy__filter-instructions\" id=\"fpki-hierarchy-filter-instructions\">Enter at least 4 characters, or select Show all certificates.</p>",
      "</div>",
      "<div class=\"fpki-hierarchy__show-all\">",
      "<button class=\"usa-button fpki-hierarchy__show-all-button\" id=\"fpki-hierarchy-show-all\" type=\"button\" data-fpki-show-all>Show all certificates</button>",
      "</div>",
      "</div>",
      "<div class=\"fpki-hierarchy__field-heading\">",
      "<p class=\"usa-legend fpki-hierarchy__field-heading-label\" id=\"fpki-hierarchy-field-heading\">Search within each top-level certificate using the filters below:</p>",
      "</div>",
      "<fieldset class=\"usa-fieldset fpki-hierarchy__field-panel\" aria-labelledby=\"fpki-hierarchy-field-heading\">",
      "<legend class=\"usa-sr-only\">Search within each top-level certificate using the filters below</legend>",
      "<div class=\"fpki-hierarchy__field-row\">",
      [
        ["label", "CA name"],
        ["subject", "Subject"],
        ["issuer", "Issuer"],
        ["serial", "Serial"],
        ["fingerprints", "Fingerprints"],
        ["keyIdentifiers", "Key identifiers"],
        ["extensions", "Extensions"]
      ].map(function (field, index) {
        var id = "fpki-search-" + field[0];
        var checked = index < 3 ? " checked" : "";
        return [
          "<div class=\"usa-checkbox fpki-hierarchy__field-check\">",
          "<input class=\"usa-checkbox__input\" id=\"" + id + "\" type=\"checkbox\" value=\"" + field[0] + "\" data-fpki-search-field" + checked + ">",
          "<label class=\"usa-checkbox__label\" for=\"" + id + "\">" + escapeHtml(field[1]) + "</label>",
          "</div>"
        ].join("");
      }).join(""),
      "</div>",
      "</fieldset>",
      "<div class=\"fpki-hierarchy__filter-footer\">",
      "<div class=\"fpki-hierarchy__field-actions\" role=\"group\" aria-label=\"Search field actions\">",
      "<div class=\"usa-checkbox fpki-hierarchy__field-check fpki-hierarchy__field-check-all\">",
      "<input class=\"usa-checkbox__input\" id=\"fpki-search-check-all\" type=\"checkbox\" data-fpki-search-check-all>",
      "<label class=\"usa-checkbox__label\" for=\"fpki-search-check-all\">Select all search fields</label>",
      "</div>",
      "<button class=\"usa-button usa-button--outline fpki-hierarchy__filter-reset-button\" id=\"fpki-search-reset\" type=\"button\" data-fpki-search-reset disabled>Reset</button>",
      "</div>",
      "<p class=\"fpki-hierarchy__last-update\">Last Crawler Update: " + escapeHtml(lastUpdate) + "</p>",
      "</div>"
    ].join("");
  }

  function formatLastUpdate(value) {
    var date = new Date(value);
    if (!value || Number.isNaN(date.getTime())) return value || "Unavailable";

    return new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "long",
      timeZone: "UTC",
      year: "numeric"
    }).format(date);
  }

  function graphElements(certificate, certificatesById) {
    var context = {};
    var roles = {};
    var pathIds = certificate.path_to_root || [certificate.id];

    pathIds.forEach(function (id) {
      if (certificatesById[id]) {
        context[id] = true;
        roles[id] = certificatesById[id].is_common_policy_g2 ? "root context" : "issuer context";
      }
    });

    certificatesIssuedBy(certificate, certificatesById).forEach(function (issued) {
      context[issued.id] = true;
      roles[issued.id] = "issued context";
    });

    context[certificate.id] = true;
    roles[certificate.id] = certificate.is_common_policy_g2 ? "selected root context" : "selected context";

    var nodes = Object.keys(certificatesById).map(function (id) {
      var item = certificatesById[id];
      var nodeRole = roles[id] || "background";
      return {
        data: {
          id: item.id,
          label: item.label || item.subject || item.id,
          role: nodeRole,
          subject: item.subject,
          issuer: item.issuer,
          validTo: item.valid_to
        },
        classes: nodeRole
      };
    });

    var edges = [];
    Object.keys(certificatesById).forEach(function (id) {
      var item = certificatesById[id];
      if (item.issuer_id && item.issuer_id !== item.id && certificatesById[item.issuer_id]) {
        var edgeRole = context[item.issuer_id] && context[item.id] ? "context" : "background";
        edges.push({
          data: {
            id: item.issuer_id + "--" + item.id,
            source: item.issuer_id,
            target: item.id,
            role: edgeRole
          },
          classes: edgeRole
        });
      }
    });

    return { nodes: nodes, edges: edges };
  }

  function highlightGraphCertificate(modal, certificate, certificatesById, recenter) {
    if (!modal || !modal.fpkiGraph || modal.fpkiGraph.destroyed()) return;
    var elements = graphElements(certificate, certificatesById);
    var classesById = {};

    elements.nodes.concat(elements.edges).forEach(function (element) {
      classesById[element.data.id] = element.classes;
    });

    modal.fpkiGraph.batch(function () {
      modal.fpkiGraph.elements().forEach(function (element) {
        element.show();
        element.classes(classesById[element.id()] || "background");
      });
      if (modal.fpkiShowBackgroundNodeNames) {
        modal.fpkiGraph.nodes(".background").addClass("names-visible");
      }
      if (modal.fpkiShowBackgroundNodes === false) {
        modal.fpkiGraph.nodes(".background").hide();
      }
    });

    var selectedNode = modal.fpkiGraph.getElementById(certificate.id);
    if (selectedNode.length && recenter !== false) {
      modal.fpkiGraph.animate({ center: { eles: selectedNode }, duration: 350 });
    }
  }

  function graphAccessibleDetails(certificate, certificatesById, elements) {
    var issuer = certificate.issuer_id ? certificatesById[certificate.issuer_id] : null;
    var issued = certificatesIssuedBy(certificate, certificatesById);
    var path = (certificate.path_to_root || [certificate.id]).map(function (id) {
      var item = certificatesById[id];
      return item ? item.label || item.subject || item.id : id;
    });

    return [
      "<button type=\"button\" class=\"fpki-certificate-graph-modal__copy\" data-fpki-details-copy aria-label=\"Copy selected certificate graph details to clipboard\" title=\"Copy certificate details\">",
      "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\"><rect x=\"9\" y=\"9\" width=\"10\" height=\"10\" rx=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path></svg>",
      "</button>",
      "<button type=\"button\" class=\"fpki-certificate-graph-modal__details-close\" data-fpki-details-close aria-label=\"Hide Info Panel\" title=\"Hide Info Panel\">",
      "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M6 6l12 12M18 6 6 18\"></path></svg>",
      "</button>",
      "<h3 data-fpki-details-drag-handle title=\"Drag to move the Info Panel\">Info Panel</h3>",
      "<p><strong>Certificate:</strong> " + escapeHtml(certificate.label || certificate.subject || certificate.id) + "</p>",
      "<p><strong>Issued by:</strong> " + escapeHtml(issuer ? issuer.label || issuer.subject || issuer.id : "No resolved issuer") + "</p>",
      "<p><strong>Path to COMMON:</strong> " + escapeHtml(path.join(" → ")) + "</p>",
      "<p><strong>Graph size:</strong> " + elements.nodes.length + " certificates and " + elements.edges.length + " relationships</p>",
      "<h4>Certificates issued</h4>",
      issued.length ? "<ul>" + issued.map(function (item) {
        return "<li>" + escapeHtml(item.label || item.subject || item.id) + "</li>";
      }).join("") + "</ul>" : "<p>No issued certificates are represented in this data.</p>",
      "<div class=\"fpki-certificate-graph-modal__font-controls\" role=\"group\" aria-label=\"Information panel font size\">",
      "<button type=\"button\" data-fpki-details-font-decrease aria-label=\"Decrease information panel font size\"><span aria-hidden=\"true\">A−</span></button>",
      "<span class=\"usa-sr-only\" data-fpki-details-font-status>Default font size</span>",
      "<button type=\"button\" data-fpki-details-font-increase aria-label=\"Increase information panel font size\"><span aria-hidden=\"true\">A+</span></button>",
      "</div>"
    ].join("");
  }

  function applyDetailsFontSize(graphView) {
    if (!graphView) return;
    var details = graphView.querySelector("[data-fpki-certificate-graph-details]");
    if (!details) return;
    var delta = Math.max(-1, Math.min(5, graphView.fpkiFontDelta || 0));
    var decrease = details.querySelector("[data-fpki-details-font-decrease]");
    var increase = details.querySelector("[data-fpki-details-font-increase]");
    var status = details.querySelector("[data-fpki-details-font-status]");

    graphView.fpkiFontDelta = delta;
    details.style.setProperty("--fpki-details-font-size", (10 + delta) + "pt");
    if (decrease) decrease.disabled = delta <= -1;
    if (increase) increase.disabled = delta >= 5;
    if (status) {
      status.textContent = delta === 0
        ? "Default font size"
        : "Font size " + (delta > 0 ? "+" : "") + delta + (Math.abs(delta) === 1 ? " point" : " points");
    }
  }

  function setDetailsPanelState(graphView, shown) {
    if (!graphView) return;
    var details = graphView.querySelector("[data-fpki-certificate-graph-details]");
    var toggle = graphView.querySelector("[data-fpki-graph-details-toggle]");
    if (details) details.hidden = !shown;
    if (!toggle) return;
    toggle.setAttribute("aria-expanded", shown ? "true" : "false");
    toggle.toggleAttribute("data-details-hidden", !shown);
    var label = toggle.querySelector("span");
    if (label) label.textContent = shown ? "Hide Info Panel" : "Show Info Panel";
  }

  function bindDetailsDrag(graphView) {
    if (!graphView) return;
    var details = graphView.querySelector("[data-fpki-certificate-graph-details]");
    var stage = graphView.querySelector(".fpki-certificate-graph-view__stage");
    if (!details || !stage || details.fpkiDragBound) return;

    details.fpkiDragBound = true;
    details.addEventListener("pointerdown", function (event) {
      var handle = event.target.closest("[data-fpki-details-drag-handle]");
      if (!handle || event.button !== 0) return;

      event.preventDefault();
      var stageRect = stage.getBoundingClientRect();
      var detailsRect = details.getBoundingClientRect();
      var startX = event.clientX;
      var startY = event.clientY;
      var startLeft = detailsRect.left - stageRect.left;
      var startTop = detailsRect.top - stageRect.top;

      details.style.left = startLeft + "px";
      details.style.right = "auto";
      details.style.top = startTop + "px";
      details.setAttribute("data-fpki-dragging", "");
      handle.setPointerCapture(event.pointerId);

      function move(moveEvent) {
        var maxLeft = Math.max(0, stage.clientWidth - details.offsetWidth);
        var maxTop = Math.max(0, stage.clientHeight - details.offsetHeight);
        var left = Math.max(0, Math.min(maxLeft, startLeft + moveEvent.clientX - startX));
        var top = Math.max(0, Math.min(maxTop, startTop + moveEvent.clientY - startY));
        details.style.left = left + "px";
        details.style.top = top + "px";
      }

      function stop() {
        details.removeAttribute("data-fpki-dragging");
        handle.removeEventListener("pointermove", move);
        handle.removeEventListener("pointerup", stop);
        handle.removeEventListener("pointercancel", stop);
      }

      handle.addEventListener("pointermove", move);
      handle.addEventListener("pointerup", stop);
      handle.addEventListener("pointercancel", stop);
    });
  }

  function fitHighlightedGraph(graphView) {
    if (!graphView || !graphView.fpkiGraph || graphView.fpkiGraph.destroyed()) return;
    var container = graphView.querySelector("[data-fpki-certificate-graph]");
    var width = container ? container.clientWidth : 0;
    var padding = Math.max(18, Math.min(55, Math.round(width * 0.055)));
    var highlighted = graphView.fpkiGraph.nodes(".context");
    graphView.fpkiGraph.fit(highlighted.length ? highlighted : graphView.fpkiGraph.nodes(), padding);
  }

  function forceLayoutOptions() {
    return {
      name: "cose",
      animate: true,
      animationDuration: 650,
      componentSpacing: 70,
      coolingFactor: 0.96,
      edgeElasticity: function () { return 80; },
      fit: true,
      gravity: 0.18,
      idealEdgeLength: function () { return 105; },
      initialTemp: 90,
      minTemp: 1,
      nodeOverlap: 18,
      nodeRepulsion: function () { return 5200; },
      numIter: 650,
      padding: 35,
      randomize: true,
      refresh: 20
    };
  }

  function hierarchyLayoutOptions() {
    return {
      name: "breadthfirst",
      animate: true,
      animationDuration: 450,
      directed: true,
      padding: 35,
      spacingFactor: 1.15
    };
  }

  function stopAmbientMotion(modal) {
    if (!modal || !modal.fpkiMotionFrame) return;
    window.cancelAnimationFrame(modal.fpkiMotionFrame);
    modal.fpkiMotionFrame = null;
  }

  function captureMotionPositions(modal) {
    if (!modal || !modal.fpkiGraph || modal.fpkiGraph.destroyed()) return;
    modal.fpkiGraph.nodes().forEach(function (node, index) {
      node.scratch("fpkiMotion", {
        base: { x: node.position("x"), y: node.position("y") },
        phase: index * 0.78
      });
    });
  }

  function startAmbientMotion(modal) {
    stopAmbientMotion(modal);
    if (!modal || !modal.fpkiGraph || modal.fpkiGraph.destroyed() || modal.fpkiMotionPaused) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    captureMotionPositions(modal);
    var startTime = window.performance.now();
    var previousFrame = 0;
    var settleDuration = 1100;

    function move(timestamp) {
      if (!modal.fpkiGraph || modal.fpkiGraph.destroyed() || modal.fpkiMotionPaused) {
        stopAmbientMotion(modal);
        return;
      }

      if (timestamp - previousFrame >= 45) {
        var elapsed = (timestamp - startTime) / 1000;
        var settleProgress = Math.max(0, Math.min(1, (timestamp - startTime) / settleDuration));
        var settleEasing = settleProgress * settleProgress * (3 - 2 * settleProgress);
        modal.fpkiGraph.nodes().forEach(function (node) {
          var motion = node.scratch("fpkiMotion");
          if (!motion || node.grabbed()) return;

          var influence = Math.min(node.degree(), 5) * 0.16;
          var amplitude = (node.hasClass("selected") ? 1.15 : 2.5 + influence) * settleEasing;
          node.position({
            x: motion.base.x + Math.sin(elapsed * 1.05 + motion.phase) * amplitude,
            y: motion.base.y + Math.cos(elapsed * 0.82 + motion.phase) * amplitude * 0.7
          });
        });
        previousFrame = timestamp;
      }

      modal.fpkiMotionFrame = window.requestAnimationFrame(move);
    }

    modal.fpkiMotionFrame = window.requestAnimationFrame(move);
  }

  function runGraphLayout(modal, options, statusMessage) {
    if (!modal || !modal.fpkiGraph || modal.fpkiGraph.destroyed()) return;
    stopAmbientMotion(modal);
    modal.fpkiGraph.nodes().unlock();
    modal.fpkiGraph.one("layoutstop", function () {
      startAmbientMotion(modal);
    });
    modal.fpkiGraph.layout(options).run();

    var status = modal.querySelector("[data-fpki-certificate-graph-status]");
    if (status) status.textContent = statusMessage;
  }

  function printCertificateGraph(graphView) {
    if (!graphView || !graphView.fpkiGraph || graphView.fpkiGraph.destroyed()) return false;
    var printWindow = window.open("", "_blank");
    if (!printWindow) return false;
    printWindow.opener = null;

    var heading = graphView.querySelector("[data-fpki-certificate-graph-heading]");
    var description = graphView.querySelector(".fpki-certificate-graph-view__description");
    var legend = graphView.querySelector(".fpki-certificate-graph-modal__legend");
    var details = graphView.querySelector("[data-fpki-certificate-graph-details]");
    var title = heading ? heading.textContent : "FPKI Certificate Relationship Graph";
    var detailsHtml = "";
    if (details && !details.hidden) {
      var detailsCopy = details.cloneNode(true);
      detailsCopy.querySelectorAll("button, .fpki-certificate-graph-modal__font-controls, .usa-sr-only").forEach(function (element) {
        element.remove();
      });
      detailsCopy.removeAttribute("data-fpki-dragging");
      detailsHtml = detailsCopy.outerHTML;
    }

    var stylesheetLinks = Array.prototype.slice.call(document.querySelectorAll("link[rel=\"stylesheet\"]")).map(function (link) {
      return "<link rel=\"stylesheet\" href=\"" + escapeHtml(link.href) + "\">";
    }).join("");

    var graphImage;
    try {
      graphImage = graphView.fpkiGraph.png({ full: false, scale: 2, bg: "#f7f9fa" });
    } catch (error) {
      printWindow.close();
      return false;
    }

    var printStarted = false;
    function openPrintDialog() {
      if (printStarted) return;
      printStarted = true;
      printWindow.focus();
      window.setTimeout(function () { printWindow.print(); }, 150);
    }

    printWindow.addEventListener("load", openPrintDialog, { once: true });
    printWindow.document.open();
    printWindow.document.write([
      "<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\">",
      "<title>" + escapeHtml(title) + "</title>",
      stylesheetLinks,
      "<style>",
      "@page{size:landscape;margin:.4in}",
      "html,body{background:#fff;margin:0}",
      "body{padding:.15in}",
      ".fpki-certificate-graph-view{margin:0}",
      ".fpki-certificate-graph-view__close,.fpki-certificate-graph-modal__controls,.fpki-certificate-graph-view__view-toggles{display:none!important}",
      ".fpki-certificate-graph-view__stage{break-inside:avoid;page-break-inside:avoid}",
      ".fpki-certificate-graph-modal__canvas--print{display:block;object-fit:contain}",
      "</style></head><body><main class=\"fpki-graph-wide\">",
      "<section class=\"fpki-certificate-graph-view\">",
      heading ? heading.outerHTML : "<h1 class=\"fpki-certificate-graph-view__heading\">" + escapeHtml(title) + "</h1>",
      description ? description.outerHTML : "<p class=\"fpki-certificate-graph-view__description\">The complete FPKI graph with the current certificate relationships highlighted.</p>",
      legend ? legend.outerHTML : "",
      "<div class=\"fpki-certificate-graph-view__stage\"><img class=\"fpki-certificate-graph-modal__canvas fpki-certificate-graph-modal__canvas--print\" alt=\"FPKI certificate relationship graph\" src=\"" + graphImage + "\">" + detailsHtml + "</div>",
      "</section></main></body></html>"
    ].join(""));
    printWindow.document.close();

    if (printWindow.document.readyState === "complete") openPrintDialog();
    return true;
  }

  function renderCertificateGraph(certificate, certificatesById, modal) {
    if (!modal || typeof window.cytoscape !== "function") return;

    var container = modal.querySelector("[data-fpki-certificate-graph]");
    var details = modal.querySelector("[data-fpki-certificate-graph-details]");
    var heading = modal.querySelector("[data-fpki-certificate-graph-heading]");
    var status = modal.querySelector("[data-fpki-certificate-graph-status]");
    var elements = graphElements(certificate, certificatesById);

    heading.textContent = "Relationship graph: " + (certificate.label || certificate.subject || certificate.id);
    details.innerHTML = graphAccessibleDetails(certificate, certificatesById, elements);
    applyDetailsFontSize(modal);
    bindDetailsDrag(modal);

    if (modal.fpkiGraph) modal.fpkiGraph.destroy();
    stopAmbientMotion(modal);
    var reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var motionControl = modal.querySelector("[data-fpki-graph-motion]");
    var nodeNamesControl = modal.querySelector("[data-fpki-graph-node-names-toggle]");
    var backgroundNodesControl = modal.querySelector("[data-fpki-graph-background-nodes-toggle]");
    modal.fpkiMotionPaused = Boolean(reducedMotion);
    modal.fpkiShowBackgroundNodeNames = false;
    modal.fpkiShowBackgroundNodes = true;
    if (nodeNamesControl) {
      nodeNamesControl.setAttribute("aria-pressed", "false");
      nodeNamesControl.setAttribute("data-names-hidden", "");
      var nodeNamesControlLabel = nodeNamesControl.querySelector("span");
      if (nodeNamesControlLabel) nodeNamesControlLabel.textContent = "Show Node Names";
    }
    if (backgroundNodesControl) {
      backgroundNodesControl.disabled = false;
      backgroundNodesControl.setAttribute("aria-pressed", "true");
      backgroundNodesControl.removeAttribute("data-nodes-hidden");
      var backgroundNodesControlLabel = backgroundNodesControl.querySelector("span");
      if (backgroundNodesControlLabel) backgroundNodesControlLabel.textContent = "Hide Nodes";
    }
    if (motionControl) {
      motionControl.disabled = Boolean(reducedMotion);
      motionControl.setAttribute("aria-pressed", reducedMotion ? "false" : "true");
      var motionControlLabel = motionControl.querySelector("span");
      if (motionControlLabel) motionControlLabel.textContent = reducedMotion ? "Motion reduced" : "Pause Motion";
    }
    modal.fpkiGraph = window.cytoscape({
      container: container,
      elements: elements.nodes.concat(elements.edges),
      layout: forceLayoutOptions(),
      minZoom: 0.35,
      maxZoom: 2.5,
      style: [
        { selector: "node", style: { "background-color": "#73b3e7", "border-color": "#1a4480", "border-width": 2, "color": "#1b1b1b", "font-size": 11, "label": "data(label)", "text-background-color": "#fff", "text-background-opacity": 0.9, "text-background-padding": 4, "text-background-shape": "roundrectangle", "text-max-width": 130, "text-valign": "bottom", "text-wrap": "wrap", "width": 34, "height": 34 } },
        { selector: "node.background", style: { "background-color": "#c9c9c9", "background-opacity": 0.48, "border-color": "#a9aeb1", "border-opacity": 0.55, "border-width": 1, "font-size": 8, "height": 13, "label": "", "text-background-opacity": 0.68, "text-opacity": 0.72, "width": 13 } },
        { selector: "node.background.names-visible", style: { "label": "data(label)" } },
        { selector: "node.issuer", style: { "background-color": "#1a4480", "border-color": "#162e51", "color": "#fff", "text-background-color": "#162e51" } },
        { selector: "node.issued", style: { "background-color": "#97d4ea", "border-color": "#005ea2" } },
        { selector: "node.root", style: { "background-color": "#8168b3", "border-color": "#4c2c92", "border-width": 5 } },
        { selector: "node.selected", style: { "background-color": "#005ea2", "border-color": "#162e51", "border-width": 5, "color": "#fff", "height": 48, "text-background-color": "#005ea2", "width": 48 } },
        { selector: "edge", style: { "curve-style": "bezier", "line-color": "#565c65", "target-arrow-color": "#565c65", "target-arrow-shape": "triangle", "width": 2 } },
        { selector: "edge.background", style: { "line-color": "#898e91", "opacity": 1, "target-arrow-color": "#898e91", "target-arrow-shape": "none", "width": 0.8 } },
        { selector: "edge.context", style: { "line-color": "#005ea2", "opacity": 0.95, "target-arrow-color": "#005ea2", "width": 3 } },
        { selector: "node:active", style: { "overlay-color": "#ffbe2e", "overlay-opacity": 0.25, "overlay-padding": 8 } }
      ]
    });
    modal.fpkiGraph.autoungrabify(false);
    modal.fpkiGraph.nodes().grabify();

    modal.fpkiGraph.on("tap", "node", function (event) {
      var selected = certificatesById[event.target.id()];
      if (!selected) return;
      var selectedElements = graphElements(selected, certificatesById);
      details.innerHTML = graphAccessibleDetails(selected, certificatesById, selectedElements);
      applyDetailsFontSize(modal);
      heading.textContent = "Relationship graph: " + (selected.label || selected.subject || selected.id);
      highlightGraphCertificate(modal, selected, certificatesById);
      status.textContent = "Selected " + (selected.label || selected.subject || selected.id) + ".";
    });

    modal.fpkiGraph.on("grab", "node", function (event) {
      stopAmbientMotion(modal);
      event.target.stop();
      event.target.neighborhood("node").stop();
      var position = event.target.position();
      event.target.scratch("fpkiDrag", {
        lastPosition: { x: position.x, y: position.y },
        lastTime: window.performance.now(),
        velocity: { x: 0, y: 0 }
      });
    });

    modal.fpkiGraph.on("drag", "node", function (event) {
      var node = event.target;
      var tracking = node.scratch("fpkiDrag");
      if (!tracking) return;

      var now = window.performance.now();
      var position = node.position();
      var elapsed = Math.max(now - tracking.lastTime, 1);
      var instantX = (position.x - tracking.lastPosition.x) / elapsed;
      var instantY = (position.y - tracking.lastPosition.y) / elapsed;

      tracking.velocity.x = tracking.velocity.x * 0.35 + instantX * 0.65;
      tracking.velocity.y = tracking.velocity.y * 0.35 + instantY * 0.65;
      tracking.lastPosition = { x: position.x, y: position.y };
      tracking.lastTime = now;
      node.scratch("fpkiDrag", tracking);
    });

    modal.fpkiGraph.on("dragfree", "node", function (event) {
      var movedNode = event.target;
      var neighbors = movedNode.neighborhood("node");
      var secondNeighbors = neighbors.neighborhood("node").difference(neighbors).difference(movedNode);
      var moved = movedNode.position();
      var drag = movedNode.scratch("fpkiDrag") || { velocity: { x: 0, y: 0 } };
      var previousMotion = movedNode.scratch("fpkiMotion");
      var releaseAge = drag.lastTime ? window.performance.now() - drag.lastTime : 0;
      var releaseStrength = Math.max(0, Math.min(1, 1 - releaseAge / 180));
      var momentumX = Math.max(-32, Math.min(32, drag.velocity.x * 135 * releaseStrength));
      var momentumY = Math.max(-32, Math.min(32, drag.velocity.y * 135 * releaseStrength));
      var destination = { x: moved.x + momentumX, y: moved.y + momentumY };

      movedNode.removeScratch("fpkiDrag");
      movedNode.animate({ position: destination }, {
        duration: 440,
        easing: "ease-out",
        complete: function () {
          movedNode.scratch("fpkiMotion", {
            base: { x: destination.x, y: destination.y },
            phase: previousMotion ? previousMotion.phase : 0
          });
          var gatheredNeighbors = neighbors.toArray().sort(function (left, right) {
            var leftPosition = left.position();
            var rightPosition = right.position();
            return Math.atan2(leftPosition.y - destination.y, leftPosition.x - destination.x)
              - Math.atan2(rightPosition.y - destination.y, rightPosition.x - destination.x);
          });
          var gatherRadius = Math.min(135, 78 + gatheredNeighbors.length * 4);
          var gatherStartAngle = gatheredNeighbors.length
            ? Math.atan2(gatheredNeighbors[0].position("y") - destination.y, gatheredNeighbors[0].position("x") - destination.x)
            : 0;

          gatheredNeighbors.forEach(function (node, index) {
            var angle = gatherStartAngle + (Math.PI * 2 * index / Math.max(gatheredNeighbors.length, 1));
            window.setTimeout(function () {
              node.animate({
                position: {
                  x: destination.x + Math.cos(angle) * gatherRadius,
                  y: destination.y + Math.sin(angle) * gatherRadius
                },
                duration: 620,
                easing: "ease-out"
              });
            }, Math.min(index * 18, 120));
          });
          secondNeighbors.forEach(function (node, index) {
            var current = node.position();
            window.setTimeout(function () {
              node.animate({
                position: {
                  x: current.x + momentumX * 0.1 + (destination.x - current.x) * 0.008,
                  y: current.y + momentumY * 0.1 + (destination.y - current.y) * 0.008
                },
                duration: 620,
                easing: "ease-out"
              });
            }, 80 + Math.min(index * 12, 180));
          });
          window.setTimeout(function () {
            captureMotionPositions(modal);
            startAmbientMotion(modal);
          }, 900);
        }
      });
      status.textContent = "Released " + movedNode.data("label") + "; connected nodes are regrouping around its new position.";
    });

    modal.fpkiGraph.one("layoutstop", function () {
      startAmbientMotion(modal);
    });

    window.setTimeout(function () {
      if (!modal.fpkiGraph || modal.fpkiGraph.destroyed()) return;
      modal.fpkiGraph.resize();
      fitHighlightedGraph(modal);
    }, 150);
  }

  function updateResults(data, root, certificatesById) {
    var input = root.querySelector("#fpki-hierarchy-filter");
    var showAll = root.querySelector("#fpki-hierarchy-show-all");
    var results = root.querySelector("[data-fpki-hierarchy-results]");
    var count = root.querySelector("[data-fpki-hierarchy-count]");
    var term = input.value.trim().toLowerCase();
    var fields = selectedSearchFields(root);
    var matches = [];
    var showingAll = showAll.hasAttribute("data-fpki-showing-all");
    var filtering = showingAll || term.length > 0;

    if (showingAll) {
      matches = data.certificates;
    } else if (term.length >= 4) {
      matches = data.certificates.filter(function (certificate) {
        return searchText(certificate, fields).indexOf(term) !== -1;
      });
    }

    if (showingAll) {
      count.innerHTML = "<strong>Certificates visible:</strong> " + matches.length;
    } else if (term.length > 0 && term.length < 4) {
      count.innerHTML = "<strong>Search:</strong> Enter at least 4 characters";
    } else if (filtering) {
      count.innerHTML = "<strong>Certificates found:</strong> " + matches.length;
    } else {
      count.innerHTML = "<strong>Certificate count:</strong> " + data.meta.certificate_count;
    }

    if (matches.length === 0) {
      results.innerHTML = term.length >= 4
        ? "<p class=\"fpki-hierarchy__no-results\">No certificates matched the current filter.</p>"
        : "";
      return;
    }

    results.innerHTML = renderCertificateAccordions(matches, certificatesById);
    syncAccordionHeadingStates(results);
  }

  function setShowAllButtonState(button, showingAll) {
    button.toggleAttribute("data-fpki-showing-all", showingAll);
    button.textContent = showingAll ? "Return to certificate filter" : "Show all certificates";
  }

  function setAccordionGroup(control, selector) {
    var group = document.getElementById(control.getAttribute(selector));
    if (!group) return;

    group.querySelectorAll(".usa-accordion__button").forEach(function (button) {
      var content = document.getElementById(button.getAttribute("aria-controls"));
      if (!content) return;

      button.setAttribute("aria-expanded", control.checked ? "true" : "false");
      content.setAttribute("aria-hidden", control.checked ? "false" : "true");
      syncAccordionHeadingState(button);
    });

    syncIssuerPathControl(group);
  }

  function setButtonState(button, expanded) {
    var content = document.getElementById(button.getAttribute("aria-controls"));
    if (!content) return;

    button.setAttribute("aria-expanded", expanded ? "true" : "false");
    content.setAttribute("aria-hidden", expanded ? "false" : "true");
    syncAccordionHeadingState(button);
  }

  function syncIssuerPathDisabledStates(group) {
    if (!group || !group.id) return;

    var expandAll = document.querySelector("[data-fpki-expand-issuer-path=\"" + group.id + "\"]");
    var caOnly = document.querySelector("[data-fpki-expand-issuer-cas=\"" + group.id + "\"]");
    if (!expandAll || !caOnly) return;

    caOnly.disabled = expandAll.checked;
    expandAll.disabled = caOnly.checked;
  }

  function syncIssuerPathControl(group) {
    if (!group || !group.id) return;

    var control = document.querySelector("[data-fpki-expand-issuer-path=\"" + group.id + "\"]");
    if (!control) return;

    var caOnly = document.querySelector("[data-fpki-expand-issuer-cas=\"" + group.id + "\"]");
    var anyExpanded = !caOnly || !caOnly.checked
      ? Boolean(group.querySelector(".usa-accordion__button[aria-expanded=\"true\"]"))
      : false;
    var label = control.labels && control.labels[0];
    control.checked = anyExpanded;

    if (label) label.textContent = anyExpanded ? "Collapse all" : "Expand all";
    control.setAttribute(
      "aria-label",
      control.getAttribute("aria-label").replace(/^(Expand|Collapse) all/, anyExpanded ? "Collapse all" : "Expand all")
    );
    syncIssuerPathDisabledStates(group);
  }

  function syncIssuerPathControls(container) {
    container.querySelectorAll(".fpki-hierarchy__issuer-path").forEach(syncIssuerPathControl);
  }

  function setIssuerCaGroup(control, forceChecked) {
    var groupId = control.getAttribute("data-fpki-expand-issuer-cas");
    var group = document.getElementById(groupId);
    if (!group) return;
    var checked = forceChecked === undefined ? control.checked : forceChecked;

    control.checked = checked;

    group.querySelectorAll(".fpki-hierarchy__issuer-node > .usa-accordion__heading > .usa-accordion__button").forEach(function (button) {
      setButtonState(button, checked);
    });

    group.querySelectorAll(".fpki-hierarchy__certificate-data > .usa-accordion__heading > .usa-accordion__button").forEach(function (button) {
      setButtonState(button, false);
    });

    syncIssuerPathControl(group);
  }

  function setIssuerPathGroup(control) {
    var groupId = control.getAttribute("data-fpki-expand-issuer-path");
    var group = document.getElementById(groupId);
    if (!group) return;
    var caOnly = document.querySelector("[data-fpki-expand-issuer-cas=\"" + groupId + "\"]");

    if (caOnly) caOnly.checked = false;
    setAccordionGroup(control, "data-fpki-expand-issuer-path");
  }

  function syncCheckAll(root) {
    var checkAll = root.querySelector("[data-fpki-search-check-all]");
    var fields = Array.prototype.slice.call(root.querySelectorAll("[data-fpki-search-field]"));
    if (!checkAll || fields.length === 0) return;

    var checkedCount = fields.filter(function (input) {
      return input.checked;
    }).length;

    checkAll.checked = checkedCount === fields.length;
    checkAll.indeterminate = checkedCount > 0 && checkedCount < fields.length;
  }

  function resetSearchFields(root) {
    root.querySelectorAll("[data-fpki-search-field]").forEach(function (input, index) {
      input.checked = index < 3;
    });
    syncCheckAll(root);
  }

  function updateResetButtonState(root) {
    var resetButton = root.querySelector("[data-fpki-search-reset]");
    var filterInput = root.querySelector("#fpki-hierarchy-filter");
    if (!resetButton) return;

    var fieldsChanged = Array.prototype.some.call(
      root.querySelectorAll("[data-fpki-search-field]"),
      function (input, index) {
        return input.checked !== (index < 3);
      }
    );
    var hasFilterTerm = filterInput && filterInput.value.length > 0;

    resetButton.disabled = !fieldsChanged && !hasFilterTerm;
  }

  function render(data, root) {
    var lastUpdate = formatLastUpdate(data.meta.crawler_last_modified || data.meta.source_last_modified || "");
    var certificatesById = {};
    data.certificates.forEach(function (certificate) {
      certificatesById[certificate.id] = certificate;
    });
    root.fpkiCertificatesById = certificatesById;

    root.innerHTML = [
      "<div class=\"usa-sr-only\" data-fpki-status role=\"status\" aria-live=\"polite\" aria-atomic=\"true\"></div>",
      "<div class=\"usa-accordion usa-accordion--bordered fpki-hierarchy__filter\">",
      accordionItem("fpki-hierarchy-filter-panel", "FPKI Certificate Hierarchy Graph Filter", renderFilterControls(data, lastUpdate), 2, true),
      "</div>",
      "<div class=\"fpki-hierarchy__results\" data-fpki-hierarchy-results></div>"
    ].join("");
    syncAccordionHeadingStates(root);

    root.addEventListener("input", function (event) {
      if (event.target.matches("#fpki-hierarchy-filter")) {
        var showAll = root.querySelector("#fpki-hierarchy-show-all");
        if (showAll && event.target.value.trim().length > 3) {
          setShowAllButtonState(showAll, false);
        }
        updateResetButtonState(root);
        updateResults(data, root, certificatesById);
      }
    });

    root.addEventListener("click", function (event) {
      var graphButton = event.target.closest("[data-fpki-certificate-graph-id]");
      if (graphButton && root.contains(graphButton)) {
        event.preventDefault();
        var graphCertificate = certificatesById[graphButton.getAttribute("data-fpki-certificate-graph-id")];
        var graphView = graphButton.closest(".fpki-hierarchy__node-summary").querySelector("[data-fpki-certificate-graph-view]");
        if (graphCertificate) {
          if (!graphView.hidden) {
            stopAmbientMotion(graphView);
            if (graphView.fpkiGraph) {
              graphView.fpkiGraph.destroy();
              graphView.fpkiGraph = null;
            }
            graphView.hidden = true;
            setGraphButtonState(graphButton, false);
            return;
          }
          graphView.hidden = false;
          setGraphButtonState(graphButton, true);
          graphView.fpkiLastOpener = graphButton;
          renderCertificateGraph(graphCertificate, certificatesById, graphView);
        }
        return;
      }

      var showAllButton = event.target.closest("[data-fpki-show-all]");
      if (showAllButton && root.contains(showAllButton)) {
        event.preventDefault();
        var showingAll = !showAllButton.hasAttribute("data-fpki-showing-all");
        var filterInput = root.querySelector("#fpki-hierarchy-filter");
        setShowAllButtonState(showAllButton, showingAll);

        if (!showingAll && filterInput) {
          filterInput.value = "";
        }

        updateResults(data, root, certificatesById);
        announce(root, showingAll ? "Showing all certificates." : "Certificate filter ready.");

        if (!showingAll && filterInput) {
          filterInput.focus();
        }
        return;
      }

      var cellCopy = event.target.closest("[data-fpki-cell-copy]");
      if (cellCopy && root.contains(cellCopy)) {
        event.preventDefault();
        var copySource = cellCopy.closest("td").querySelector("[data-fpki-copy-source]");
        var copyLabel = cellCopy.getAttribute("data-fpki-copy-label") || "value";
        var copyText = copySource ? copySource.textContent : "";
        var copyPromise = navigator.clipboard && navigator.clipboard.writeText
          ? navigator.clipboard.writeText(copyText)
          : Promise.reject(new Error("Clipboard API unavailable"));

        copyPromise.then(function () {
          var copyCell = cellCopy.closest("td");
          if (copyCell) {
            copyCell.classList.remove("fpki-hierarchy__copy-cell--copied");
            void copyCell.offsetWidth;
            copyCell.classList.add("fpki-hierarchy__copy-cell--copied");
          }
          cellCopy.setAttribute("data-fpki-copy-status", "Copied");
          announce(root, "Copied " + copyLabel + " to clipboard.");
          window.setTimeout(function () {
            if (copyCell) copyCell.classList.remove("fpki-hierarchy__copy-cell--copied");
            cellCopy.removeAttribute("data-fpki-copy-status");
          }, 1200);
        }).catch(function () {
          cellCopy.setAttribute("data-fpki-copy-status", "Copy failed");
          announce(root, "Could not copy " + copyLabel + " to clipboard.");
          window.setTimeout(function () {
            cellCopy.removeAttribute("data-fpki-copy-status");
          }, 1200);
        });
        return;
      }

      var resetButton = event.target.closest("[data-fpki-search-reset]");
      if (resetButton && root.contains(resetButton)) {
        event.preventDefault();
        var resetFilterInput = root.querySelector("#fpki-hierarchy-filter");
        var resetShowAll = root.querySelector("#fpki-hierarchy-show-all");
        if (resetFilterInput) resetFilterInput.value = "";
        if (resetShowAll) setShowAllButtonState(resetShowAll, false);
        resetSearchFields(root);
        updateResetButtonState(root);
        updateResults(data, root, certificatesById);
        announce(root, "Filter reset to CA name, Subject, and Issuer.");
        return;
      }

      var copyButton = event.target.closest("[data-fpki-copy-name]");
      if (copyButton && root.contains(copyButton)) {
        event.preventDefault();
        var copyValue = copyButton.getAttribute("data-fpki-copy-name") || "";
        var relationshipCopy = navigator.clipboard && navigator.clipboard.writeText
          ? navigator.clipboard.writeText(copyValue)
          : Promise.reject(new Error("Clipboard API unavailable"));
        relationshipCopy.then(function () {
          announce(root, "Copied " + copyValue + " to clipboard.");
        }).catch(function () {
          announce(root, "Could not copy " + copyValue + " to clipboard.");
        });
        return;
      }

      var closeButton = event.target.closest("[data-fpki-preview-close]");
      if (closeButton && root.contains(closeButton)) {
        event.preventDefault();
        var preview = closeButton.closest("[data-fpki-relationship-preview]");
        var openerId = preview ? preview.getAttribute("data-fpki-preview-opener") : "";
        var opener = openerId ? document.getElementById(openerId) : null;
        if (preview) {
          preview.innerHTML = "";
          preview.removeAttribute("data-fpki-preview-opener");
        }
        if (opener) {
          opener.setAttribute("aria-expanded", "false");
          opener.removeAttribute("aria-controls");
          opener.focus();
        }
        announce(root, "Certificate preview closed.");
        return;
      }

      var relationshipLink = event.target.closest("[data-fpki-certificate-link]");
      if (!relationshipLink || !root.contains(relationshipLink)) return;

      event.preventDefault();
      var certificate = certificatesById[relationshipLink.getAttribute("data-fpki-certificate-link")];
      var preview = relationshipLink.closest(".fpki-hierarchy__node-summary").querySelector("[data-fpki-relationship-preview]");
      if (!certificate || !preview) return;

      if (!relationshipLink.id) {
        relationshipLink.id = "fpki-relationship-link-" + Math.random().toString(36).slice(2);
      }

      var direction = relationshipLink.getAttribute("data-fpki-link-direction") || "outbound";
      var idPrefix = "fpki-preview-" + slug(certificate.id).slice(0, 20) + "-" + Math.random().toString(36).slice(2, 8);
      var previousOpenerId = preview.getAttribute("data-fpki-preview-opener");
      var previousOpener = previousOpenerId ? document.getElementById(previousOpenerId) : null;
      if (previousOpener && previousOpener !== relationshipLink) {
        previousOpener.setAttribute("aria-expanded", "false");
        previousOpener.removeAttribute("aria-controls");
      }
      preview.setAttribute("data-fpki-preview-opener", relationshipLink.id);
      preview.innerHTML = relationshipPreview(certificate, certificatesById, direction, idPrefix);
      var previewInner = preview.querySelector(".fpki-hierarchy__relationship-preview-inner");
      if (previewInner) previewInner.id = idPrefix;
      relationshipLink.setAttribute("aria-controls", idPrefix);
      relationshipLink.setAttribute("aria-expanded", "true");
      syncAccordionHeadingStates(preview);

      var heading = preview.querySelector(".fpki-hierarchy__relationship-preview-header h5");
      if (heading) heading.focus();
      announce(root, (direction === "inbound" ? "Inbound" : "Outbound") + " certificate preview opened.");
    });

    root.addEventListener("change", function (event) {
      if (event.target.matches("[data-fpki-search-check-all]")) {
        root.querySelectorAll("[data-fpki-search-field]").forEach(function (input) {
          input.checked = event.target.checked;
        });
        syncCheckAll(root);
        updateResetButtonState(root);
        updateResults(data, root, certificatesById);
      } else if (event.target.matches("[data-fpki-expand-issuer-path]")) {
        setIssuerPathGroup(event.target);
      } else if (event.target.matches("[data-fpki-expand-issuer-cas]")) {
        setIssuerCaGroup(event.target);
      } else if (event.target.matches("[data-fpki-search-field]")) {
        syncCheckAll(root);
        updateResetButtonState(root);
        updateResults(data, root, certificatesById);
      }
    });

    syncCheckAll(root);
    updateResetButtonState(root);
    updateResults(data, root, certificatesById);
  }

  function bindAccordions(root) {
    function toggleButton(button) {
      var content = document.getElementById(button.getAttribute("aria-controls"));
      if (!content) return;

      var expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", expanded ? "false" : "true");
      content.setAttribute("aria-hidden", expanded ? "true" : "false");
      syncAccordionHeadingState(button);
      syncIssuerPathControl(button.closest(".fpki-hierarchy__issuer-path"));
    }

    root.addEventListener("click", function (event) {
      var button = event.target.closest(".usa-accordion__button");
      if (!button || !root.contains(button)) return;

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      toggleButton(button);
    });

  }

  document.addEventListener("DOMContentLoaded", function () {
    var root = document.querySelector("[data-fpki-certificate-hierarchy]");
    if (!root) return;

    bindAccordions(root);
    root.innerHTML = loadingIndicator();

    fetch(root.getAttribute("data-source"))
      .then(function (response) {
        if (!response.ok) throw new Error("Unable to load certificate hierarchy");
        return response.json();
      })
      .then(function (data) {
        render(data, root);
      })
      .catch(function () {
        root.innerHTML = "<div class=\"usa-alert usa-alert--error\" role=\"alert\"><div class=\"usa-alert__body\"><h2 class=\"usa-alert__heading\">Certificate hierarchy unavailable</h2><p class=\"usa-alert__text\">Certificate hierarchy data could not be loaded. Reload the page to try again.</p></div></div>";
      });

    document.addEventListener("click", function (event) {
      var zoomOutControl = event.target.closest("[data-fpki-graph-zoom-out]");
      var hierarchyControl = event.target.closest("[data-fpki-graph-hierarchy-layout]");
      var fitControl = event.target.closest("[data-fpki-graph-fit]");
      var printControl = event.target.closest("[data-fpki-graph-print]");
      var resetControl = event.target.closest("[data-fpki-graph-reset]");
      var motionControl = event.target.closest("[data-fpki-graph-motion]");
      var fontDecrease = event.target.closest("[data-fpki-details-font-decrease]");
      var fontIncrease = event.target.closest("[data-fpki-details-font-increase]");
      var detailsCopy = event.target.closest("[data-fpki-details-copy]");
      var detailsClose = event.target.closest("[data-fpki-details-close]");
      var detailsToggle = event.target.closest("[data-fpki-graph-details-toggle]");
      var nodeNamesToggle = event.target.closest("[data-fpki-graph-node-names-toggle]");
      var backgroundNodesToggle = event.target.closest("[data-fpki-graph-background-nodes-toggle]");
      var closeControl = event.target.closest("[data-fpki-graph-close]");
      var graphModal = event.target.closest("[data-fpki-certificate-graph-view]");

      if (zoomOutControl && graphModal && graphModal.fpkiGraph) {
        var nextZoom = Math.max(graphModal.fpkiGraph.minZoom(), graphModal.fpkiGraph.zoom() * 0.8);
        graphModal.fpkiGraph.animate({ zoom: nextZoom }, { duration: 250 });
        var zoomStatus = graphModal.querySelector("[data-fpki-certificate-graph-status]");
        if (zoomStatus) zoomStatus.textContent = "Graph zoomed out.";
        return;
      }

      if (hierarchyControl && graphModal) {
        runGraphLayout(graphModal, hierarchyLayoutOptions(), "Hierarchy View applied. Certificates remain freely draggable.");
        return;
      }

      if (fitControl && graphModal && graphModal.fpkiGraph) {
        var fitCertificateId = graphModal.getAttribute("data-fpki-initial-certificate-id");
        var fitRoot = graphModal.closest("[data-fpki-certificate-hierarchy]");
        var fitData = fitRoot && fitRoot.fpkiCertificatesById;
        var fitCertificate = fitData && fitData[fitCertificateId];
        if (fitCertificate) {
          var fitElements = graphElements(fitCertificate, fitData);
          var fitDetails = graphModal.querySelector("[data-fpki-certificate-graph-details]");
          var fitHeading = graphModal.querySelector("[data-fpki-certificate-graph-heading]");
          highlightGraphCertificate(graphModal, fitCertificate, fitData, false);
          if (fitDetails) fitDetails.innerHTML = graphAccessibleDetails(fitCertificate, fitData, fitElements);
          if (fitHeading) fitHeading.textContent = "Relationship graph: " + (fitCertificate.label || fitCertificate.subject || fitCertificate.id);
          applyDetailsFontSize(graphModal);
        }
        fitHighlightedGraph(graphModal);
        var graphStatus = graphModal.querySelector("[data-fpki-certificate-graph-status]");
        if (graphStatus) graphStatus.textContent = "Graph fitted to the initially selected certificate and its highlighted relationships.";
        return;
      }

      if (printControl && graphModal) {
        var printStatus = graphModal.querySelector("[data-fpki-certificate-graph-status]");
        var printOpened = printCertificateGraph(graphModal);
        if (printStatus) printStatus.textContent = printOpened
          ? "Graph print view opened in a new tab. Use the print dialog to save it as a PDF."
          : "The graph print view could not be opened. Allow pop-ups and try again.";
        return;
      }

      if ((fontDecrease || fontIncrease) && graphModal) {
        var change = fontIncrease ? 1 : -1;
        graphModal.fpkiFontDelta = Math.max(-1, Math.min(5, (graphModal.fpkiFontDelta || 0) + change));
        applyDetailsFontSize(graphModal);
        return;
      }

      if (detailsCopy && graphModal) {
        var detailsPanel = detailsCopy.closest("[data-fpki-certificate-graph-details]");
        var copyContent = detailsPanel.cloneNode(true);
        copyContent.querySelectorAll("button, .fpki-certificate-graph-modal__font-controls, .usa-sr-only").forEach(function (element) {
          element.remove();
        });
        var detailsText = copyContent.textContent.replace(/\s+/g, " ").trim();
        var detailsPromise = navigator.clipboard && navigator.clipboard.writeText
          ? navigator.clipboard.writeText(detailsText)
          : Promise.reject(new Error("Clipboard API unavailable"));

        detailsPromise.then(function () {
          detailsPanel.classList.remove("fpki-certificate-graph-modal__details--copied");
          void detailsPanel.offsetWidth;
          detailsPanel.classList.add("fpki-certificate-graph-modal__details--copied");
          var copyStatus = graphModal.querySelector("[data-fpki-certificate-graph-status]");
          if (copyStatus) copyStatus.textContent = "Selected certificate graph details copied to clipboard.";
          window.setTimeout(function () {
            detailsPanel.classList.remove("fpki-certificate-graph-modal__details--copied");
          }, 900);
        }).catch(function () {
          var copyStatus = graphModal.querySelector("[data-fpki-certificate-graph-status]");
          if (copyStatus) copyStatus.textContent = "Could not copy selected certificate graph details.";
        });
        return;
      }

      if (detailsClose && graphModal) {
        setDetailsPanelState(graphModal, false);
        var closeStatus = graphModal.querySelector("[data-fpki-certificate-graph-status]");
        if (closeStatus) closeStatus.textContent = "Info Panel hidden.";
        return;
      }

      if (detailsToggle && graphModal) {
        var selectedDetails = graphModal.querySelector("[data-fpki-certificate-graph-details]");
        var shouldShow = selectedDetails.hidden;
        setDetailsPanelState(graphModal, shouldShow);
        var toggleStatus = graphModal.querySelector("[data-fpki-certificate-graph-status]");
        if (toggleStatus) toggleStatus.textContent = shouldShow
          ? "Info Panel shown."
          : "Info Panel hidden.";
        return;
      }

      if (nodeNamesToggle && graphModal && graphModal.fpkiGraph) {
        var shouldShowNodeNames = !graphModal.fpkiShowBackgroundNodeNames;
        graphModal.fpkiShowBackgroundNodeNames = shouldShowNodeNames;
        graphModal.fpkiGraph.nodes(".background").toggleClass("names-visible", shouldShowNodeNames);
        nodeNamesToggle.setAttribute("aria-pressed", shouldShowNodeNames ? "true" : "false");
        nodeNamesToggle.toggleAttribute("data-names-hidden", !shouldShowNodeNames);
        var nodeNamesLabel = nodeNamesToggle.querySelector("span");
        if (nodeNamesLabel) nodeNamesLabel.textContent = shouldShowNodeNames ? "Hide Node Names" : "Show Node Names";
        var backgroundNodesButton = graphModal.querySelector("[data-fpki-graph-background-nodes-toggle]");
        if (shouldShowNodeNames) {
          graphModal.fpkiShowBackgroundNodes = true;
          graphModal.fpkiGraph.nodes(".background").show();
        }
        if (backgroundNodesButton) {
          backgroundNodesButton.disabled = shouldShowNodeNames;
          if (shouldShowNodeNames) {
            backgroundNodesButton.setAttribute("aria-pressed", "true");
            backgroundNodesButton.removeAttribute("data-nodes-hidden");
            var backgroundNodesButtonLabel = backgroundNodesButton.querySelector("span");
            if (backgroundNodesButtonLabel) backgroundNodesButtonLabel.textContent = "Hide Nodes";
          }
        }
        var nodeNamesStatus = graphModal.querySelector("[data-fpki-certificate-graph-status]");
        if (nodeNamesStatus) nodeNamesStatus.textContent = shouldShowNodeNames
          ? "Unfocused node names shown."
          : "Unfocused node names hidden.";
        return;
      }

      if (backgroundNodesToggle && graphModal && graphModal.fpkiGraph && !backgroundNodesToggle.disabled) {
        var shouldShowBackgroundNodes = !graphModal.fpkiShowBackgroundNodes;
        graphModal.fpkiShowBackgroundNodes = shouldShowBackgroundNodes;
        if (shouldShowBackgroundNodes) graphModal.fpkiGraph.nodes(".background").show();
        else graphModal.fpkiGraph.nodes(".background").hide();
        backgroundNodesToggle.setAttribute("aria-pressed", shouldShowBackgroundNodes ? "true" : "false");
        backgroundNodesToggle.toggleAttribute("data-nodes-hidden", !shouldShowBackgroundNodes);
        var backgroundNodesLabel = backgroundNodesToggle.querySelector("span");
        if (backgroundNodesLabel) backgroundNodesLabel.textContent = shouldShowBackgroundNodes ? "Hide Nodes" : "Show Nodes";
        var backgroundNodesStatus = graphModal.querySelector("[data-fpki-certificate-graph-status]");
        if (backgroundNodesStatus) backgroundNodesStatus.textContent = shouldShowBackgroundNodes
          ? "Background nodes shown."
          : "Background nodes hidden.";
        return;
      }

      if (resetControl && graphModal) {
        var initialCertificate = graphModal.getAttribute("data-fpki-initial-certificate-id");
        var hierarchyRoot = graphModal.closest("[data-fpki-certificate-hierarchy]");
        var hierarchyData = hierarchyRoot && hierarchyRoot.fpkiCertificatesById;
        if (hierarchyData && hierarchyData[initialCertificate]) {
          renderCertificateGraph(hierarchyData[initialCertificate], hierarchyData, graphModal);
          var resetStatus = graphModal.querySelector("[data-fpki-certificate-graph-status]");
          if (resetStatus) resetStatus.textContent = "Graph reset to the initially selected certificate.";
        }
        return;
      }

      if (motionControl && graphModal) {
        graphModal.fpkiMotionPaused = !graphModal.fpkiMotionPaused;
        motionControl.setAttribute("aria-pressed", graphModal.fpkiMotionPaused ? "false" : "true");
        var motionLabel = motionControl.querySelector("span");
        if (motionLabel) motionLabel.textContent = graphModal.fpkiMotionPaused ? "Resume Motion" : "Pause Motion";
        if (graphModal.fpkiMotionPaused) {
          stopAmbientMotion(graphModal);
        } else {
          startAmbientMotion(graphModal);
        }
        var motionStatus = graphModal.querySelector("[data-fpki-certificate-graph-status]");
        if (motionStatus) motionStatus.textContent = graphModal.fpkiMotionPaused ? "Graph motion paused." : "Subtle graph motion resumed.";
        return;
      }

      if (!closeControl || !graphModal) return;
      var opener = graphModal.fpkiLastOpener;
      stopAmbientMotion(graphModal);
      if (graphModal.fpkiGraph) {
        graphModal.fpkiGraph.destroy();
        graphModal.fpkiGraph = null;
      }
      graphModal.hidden = true;
      setGraphButtonState(opener, false);
      if (opener) {
        window.setTimeout(function () {
          opener.focus();
        }, 0);
      }
    });
  });
}());
