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

  function certificateNodeSummary(certificate, certificatesById, previewMode) {
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
      "<div class=\"fpki-hierarchy__node-attributes\">",
      "<p class=\"fpki-hierarchy__node-summary-label\"><strong>Attributes</strong></p>",
      attributeRows,
      "</div>",
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
      "<button type=\"button\" class=\"fpki-hierarchy__relationship-preview-action\" data-fpki-preview-expand aria-label=\"Expand all in " + escapeHtml(label.toLowerCase()) + "\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M8 3H3v5\"></path><path d=\"M16 3h5v5\"></path><path d=\"M8 21H3v-5\"></path><path d=\"M16 21h5v-5\"></path><path d=\"M3 3l7 7\"></path><path d=\"M21 3l-7 7\"></path><path d=\"M3 21l7-7\"></path><path d=\"M21 21l-7-7\"></path></svg></button>",
      "<button type=\"button\" class=\"fpki-hierarchy__relationship-preview-action\" data-fpki-preview-collapse aria-label=\"Collapse all in " + escapeHtml(label.toLowerCase()) + "\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M10 3v7H3\"></path><path d=\"M14 3v7h7\"></path><path d=\"M10 21v-7H3\"></path><path d=\"M14 21v-7h7\"></path></svg></button>",
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
    var issuerSummary = certificateNodeSummary(certificate, certificatesById, previewMode);
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
      certificateNodeSummary(certificate, certificatesById, previewMode),
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

  function syncIssuerPathControl(group) {
    if (!group || !group.id) return;

    var control = document.querySelector("[data-fpki-expand-issuer-path=\"" + group.id + "\"]");
    if (!control) return;

    var anyExpanded = Boolean(group.querySelector(".usa-accordion__button[aria-expanded=\"true\"]"));
    var label = control.labels && control.labels[0];
    control.checked = anyExpanded;

    if (label) label.textContent = anyExpanded ? "Collapse all" : "Expand all";
    control.setAttribute(
      "aria-label",
      control.getAttribute("aria-label").replace(/^(Expand|Collapse) all/, anyExpanded ? "Collapse all" : "Expand all")
    );
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

      var previewExpand = event.target.closest("[data-fpki-preview-expand], [data-fpki-preview-collapse]");
      if (previewExpand && root.contains(previewExpand)) {
        event.preventDefault();
        var previewRegion = previewExpand.closest("[data-fpki-relationship-preview]");
        if (!previewRegion) return;
        var expanded = previewExpand.hasAttribute("data-fpki-preview-expand");
        previewRegion.querySelectorAll(".usa-accordion__button").forEach(function (button) {
          setButtonState(button, expanded);
        });
        syncIssuerPathControls(previewRegion);
        announce(root, expanded ? "All preview sections expanded." : "All preview sections collapsed.");
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
  });
}());
