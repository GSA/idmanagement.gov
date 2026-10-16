(function () {
  "use strict";

  var root = document.querySelector("[data-document-center]");
  if (!root) return;

  var types = ["pdf", "docx", "xlsx", "pptx"];
  var labels = { pdf: "PDF", docx: "Word", xlsx: "Excel", pptx: "PowerPoint" };
  var documents = [];
  var activeTypes = [];
  var sortKey = "filename";
  var sortDirection = 1;
  var selectedId = null;
  var selectedCategories = [];
  var selectedAdditionalScopes = [];
  var searchQuery = "";
  var excludeArchived = true;
  var panels = root.querySelector("[data-panels]");
  var status = root.querySelector(".dc-status");
  var details = root.querySelector("[data-details]");
  var totalFiles = root.querySelector("[data-total-files]");
  var statisticsToggle = root.querySelector("[data-statistics-toggle]");
  var statisticsPanel = root.querySelector("[data-document-statistics]");
  var modalHeading = document.querySelector("#dc-modal-heading");
  var modalBody = document.querySelector("[data-modal-body]");
  var modalOpener = document.querySelector("#dc-modal-opener");
  var modalWrapper = document.querySelector("#dc-document-modal");
  var previewTrigger = null;
  var baseUrl = root.getAttribute("data-base-url").replace(/\/$/, "");

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"]/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[character];
    });
  }

  function display(value) { return value || "Not available"; }
  function formatDate(value) {
    if (!value) return "Not available";
    return new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" }).format(new Date(value + "T00:00:00Z"));
  }
  function formatSize(bytes) {
    if (!bytes && bytes !== 0) return "Not available";
    var units = ["bytes", "KB", "MB", "GB"], index = 0, value = bytes;
    while (value >= 1024 && index < units.length - 1) { value /= 1024; index += 1; }
    return (index ? value.toFixed(1) : value) + " " + units[index];
  }
  function ageStatus(document) {
    if (!document.modified) return "Unknown";
    var cutoff = new Date();
    cutoff.setFullYear(cutoff.getFullYear() - 3);
    return new Date(document.modified + "T00:00:00Z") < cutoff ? "Yes" : "No";
  }
  function signatureLabel(document) {
    return document.signature ? document.signature.label : "Not applicable";
  }

  function documentUrl(document) {
    return baseUrl + "/" + document.path.replace(/^\//, "");
  }

  function countDocumentsBy(keyForDocument) {
    return documents.reduce(function (counts, document) {
      var key = keyForDocument(document);
      counts[key] = (counts[key] || 0) + 1;
      return counts;
    }, {});
  }

  function statisticsList(counts, preferredOrder) {
    var keys = preferredOrder || Object.keys(counts).sort(function (left, right) {
      return counts[right] - counts[left] || left.localeCompare(right);
    });
    return '<ul class="dc-statistics-list">' + keys.filter(function (key) {
      return counts[key];
    }).map(function (key) {
      return '<li><span>' + escapeHtml(key) + '</span><strong>' + escapeHtml(counts[key]) + '</strong></li>';
    }).join("") + '</ul>';
  }

  function renderStatistics() {
    if (!statisticsPanel) return;
    var scopeLabels = { active: "Active", archived: "Archived", experimental: "Experimental" };
    var typeLabels = { pdf: "PDF", docx: "Word", xlsx: "Excel", pptx: "PowerPoint" };
    var byScope = countDocumentsBy(function (document) { return scopeLabels[document.scope] || document.scope; });
    var byType = countDocumentsBy(function (document) { return typeLabels[document.type] || document.type; });
    var byLocation = countDocumentsBy(function (document) {
      var parts = document.relative_path.split("/");
      parts.pop();
      return "/" + parts.join("/");
    });
    statisticsPanel.innerHTML = '<h3 id="dc-document-statistics-heading">Document inventory</h3>' +
      '<p class="dc-statistics-total">' + documents.length + ' total files</p>' +
      '<h4>By scope</h4>' + statisticsList(byScope, ["Active", "Archived", "Experimental"]) +
      '<h4>By file type</h4>' + statisticsList(byType, ["PDF", "Word", "Excel", "PowerPoint"]) +
      '<h4>By location</h4>' + statisticsList(byLocation, ["/docs", "/docs/archived", "/docs/expdocs"]);
  }

  function primaryMetadata(document) {
    return '<dl>' +
      '<dt>File type</dt><dd>' + escapeHtml(document.type_label) + '</dd>' +
      '<dt>Location</dt><dd>' + escapeHtml(document.relative_path) + '</dd>' +
      '</dl>';
  }

  function additionalMetadata(document) {
    return '<section class="dc-additional-information">' +
      '<h4 class="dc-additional-information-heading">' +
      '<button type="button" class="dc-additional-information-toggle" aria-expanded="false" aria-controls="dc-additional-information-panel">Additional Document Details</button>' +
      '</h4>' +
      '<div id="dc-additional-information-panel" class="dc-additional-information-panel" hidden><dl>' +
      '<dt>Group</dt><dd>' + escapeHtml(document.scope) + '</dd>' +
      '<dt>File size</dt><dd>' + escapeHtml(formatSize(document.size_bytes)) + '</dd>' +
      '<dt>Version</dt><dd>' + escapeHtml(display(document.version)) + (document.version_source ? ' <small>(' + escapeHtml(document.version_source) + ')</small>' : '') + '</dd>' +
      '<dt>Author</dt><dd>' + escapeHtml(display(document.author)) + '</dd>' +
      '<dt>Created</dt><dd>' + escapeHtml(formatDate(document.created)) + (document.created_source ? ' <small>(' + escapeHtml(document.created_source) + ')</small>' : '') + '</dd>' +
      '<dt>Modified</dt><dd>' + escapeHtml(formatDate(document.modified)) + (document.modified_source ? ' <small>(' + escapeHtml(document.modified_source) + ')</small>' : '') + '</dd>' +
      '<dt>3+ years</dt><dd>' + ageStatus(document) + '</dd>' +
      '<dt>PDF signature</dt><dd>' + escapeHtml(signatureLabel(document)) + '</dd>' +
      (document.signature && document.signature.count ? '<dt>Signature count</dt><dd>' + escapeHtml(document.signature.count) + '</dd>' : '') +
      (document.signature && document.signature.signer ? '<dt>Signer</dt><dd>' + escapeHtml(document.signature.signer) + '</dd>' : '') +
      (document.signature && document.signature.signing_date ? '<dt>Signing date</dt><dd>' + escapeHtml(formatDate(document.signature.signing_date)) + '</dd>' : '') +
      (document.signature && document.signature.validation_summary ? '<dt>Validation summary</dt><dd>' + escapeHtml(document.signature.validation_summary) + '</dd>' : '') +
      '</dl></div></section>';
  }

  function actions(document) {
    var label = document.filename + " (" + document.type_label + ", " + formatSize(document.size_bytes) + ")";
    return '<div class="dc-downloads"><a class="usa-button" href="' + escapeHtml(documentUrl(document)) + '" download aria-label="Download ' + escapeHtml(label) + '">Download</a></div>';
  }

  function showInModal(document) {
    modalHeading.textContent = document.filename;
    if (document.type === "pdf") {
      modalBody.innerHTML = '<iframe class="dc-document-frame" src="' + escapeHtml(documentUrl(document)) + '" title="Preview of ' + escapeHtml(document.filename) + '"></iframe>' + actions(document);
    } else {
      modalBody.innerHTML = '<div class="dc-modal-notice"><p>A browser preview is not available for this ' + escapeHtml(document.type_label) + ' document. Download it to open it in its associated application.</p>' + actions(document) + '</div>';
    }
  }

  function selectDocument(document) {
    if (!document) return;
    selectedId = document.id;
    root.querySelectorAll(".dc-table tbody tr").forEach(function (row) {
      var selected = row.getAttribute("data-document-id") === selectedId;
      row.classList.toggle("is-selected", selected);
      row.setAttribute("aria-current", selected ? "true" : "false");
    });
    details.innerHTML = '<h3>' + escapeHtml(document.filename) + '</h3>' + primaryMetadata(document) + actions(document) + additionalMetadata(document);
  }

  details.addEventListener("click", function (event) {
    var toggle = event.target.closest(".dc-additional-information-toggle");
    if (!toggle) return;

    var panel = details.querySelector("#" + toggle.getAttribute("aria-controls"));
    if (!panel) return;
    var expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", expanded ? "false" : "true");
    panel.hidden = expanded;
  });

  if (statisticsToggle && statisticsPanel) {
    statisticsToggle.addEventListener("click", function () {
      var expanded = statisticsToggle.getAttribute("aria-expanded") === "true";
      statisticsToggle.setAttribute("aria-expanded", expanded ? "false" : "true");
      statisticsToggle.setAttribute("aria-label", expanded ? "Show document inventory statistics" : "Hide document inventory statistics");
      statisticsPanel.hidden = expanded;
    });
  }

  function updateTypeCounts() {
    types.forEach(function (type) {
      var count = documents.filter(function (document) {
        return document.type === type && matchesDocumentFilters(document) && matchesSearch(document);
      }).length;
      root.querySelector("[data-count-for='" + type + "']").textContent = count + " matching";
      var scopeCount = root.querySelector("[data-scope-count-for='" + type + "']");
      scopeCount.textContent = "";
      scopeCount.hidden = true;
    });
  }

  function matchesCategory(document) {
    var filename = document.filename.toLowerCase();
    return selectedCategories.some(function (category) { return filename.indexOf(category) !== -1; });
  }

  function matchesDocumentFilters(document) {
    if (document.scope === "archived" && excludeArchived) return false;
    var defaultMatch = !selectedCategories.length &&
      (document.scope === "active" || (document.scope === "archived" && !excludeArchived));
    return defaultMatch || matchesCategory(document) || selectedAdditionalScopes.indexOf(document.scope) !== -1;
  }

  function matchesSearch(document) {
    if (!searchQuery) return true;
    return [document.filename, document.author, document.version, document.relative_path].join(" ").toLowerCase().indexOf(searchQuery) !== -1;
  }

  function filteredDocuments() {
    return documents.filter(function (document) {
      return (!activeTypes.length || activeTypes.indexOf(document.type) !== -1) && matchesDocumentFilters(document) && matchesSearch(document);
    }).sort(function (a, b) {
      var left = (a[sortKey] || "").toString().toLowerCase();
      var right = (b[sortKey] || "").toString().toLowerCase();
      return left.localeCompare(right, undefined, { numeric: true }) * sortDirection;
    });
  }

  function hasActiveFilters() {
    return Boolean(!excludeArchived || activeTypes.length || searchQuery || selectedCategories.length || selectedAdditionalScopes.length);
  }

  function render() {
    if (!hasActiveFilters()) {
      status.textContent = "Search documents or select one or more filters to display files.";
      panels.innerHTML = "";
      selectedId = null;
      details.innerHTML = '<p>No document is selected.</p>';
      return;
    }

    var matches = filteredDocuments();
    var activeLabel = activeTypes.length === 1 ? labels[activeTypes[0]] + " " : "";
    status.textContent = matches.length + " " + activeLabel + "document" + (matches.length === 1 ? "" : "s") + " shown.";
    if (!matches.length) {
      panels.innerHTML = '<div class="dc-empty">No documents match the selected filters.</div>';
      selectedId = null;
      details.innerHTML = '<p>No document is selected.</p>';
      return;
    }
    var selected = matches.find(function (document) { return document.id === selectedId; }) || matches[0];
    selectedId = selected.id;
    var rows = matches.map(function (document) {
      var selectedClass = document.id === selectedId ? ' class="is-selected" aria-current="true"' : ' aria-current="false"';
      var scopeName = document.scope === "archived" ? "Archived" : document.scope === "experimental" ? "Experimental" : "";
      var scopeMarker = scopeName ? '<span class="usa-tag dc-scope-marker dc-' + (document.scope === "archived" ? "archive" : "experimental") + '-marker" title="' + scopeName + ' file — Last modified: ' + escapeHtml(formatDate(document.modified)) + '"><span aria-hidden="true">' + scopeName.charAt(0) + '</span><span class="usa-sr-only">' + scopeName + ' file. Last modified ' + escapeHtml(formatDate(document.modified)) + '</span></span>' : '';
      return '<tr data-document-id="' + escapeHtml(document.id) + '" tabindex="0"' + selectedClass + '><td class="dc-filename-cell"><button type="button" class="dc-filename" aria-controls="dc-document-modal" aria-haspopup="dialog">' + escapeHtml(document.filename) + '</button>' + scopeMarker + '</td>' +
        '<td class="dc-optional">' + escapeHtml(display(document.author)) + '</td><td class="dc-optional dc-date">' + escapeHtml(formatDate(document.created)) + '</td><td>' + ageStatus(document) + '</td></tr>';
    }).join("");
    var panelLabel = activeTypes.length ? activeTypes.map(function (type) { return labels[type]; }).join(", ") + " documents" : "All documents";
    panels.innerHTML = '<div class="dc-table-wrap"><table class="dc-table"><caption class="usa-sr-only">' + panelLabel + '</caption><thead><tr>' +
      sortHeader("filename", "File Name", "") + sortHeader("author", "Author", "dc-optional") + sortHeader("created", "Created", "dc-optional") + '<th scope="col">3+ years</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
    selectDocument(selected);
  }

  function sortHeader(key, label, className) {
    var active = sortKey === key;
    var direction = sortDirection === 1 ? "ascending" : "descending";
    return '<th scope="col" class="' + className + '"' + (active ? ' aria-sort="' + direction + '"' : '') + '><button type="button" class="dc-sort" data-sort="' + key + '">' + label + (active ? '<span class="dc-sort-direction" aria-hidden="true">' + (sortDirection === 1 ? ' ▲' : ' ▼') + '</span>' : '') + '</button></th>';
  }

  root.addEventListener("click", function (event) {
    var typeButton = event.target.closest("[data-type]");
    if (typeButton) {
      var requestedType = typeButton.getAttribute("data-type");
      var requestedTypeIndex = activeTypes.indexOf(requestedType);
      if (requestedTypeIndex === -1) activeTypes.push(requestedType);
      else activeTypes.splice(requestedTypeIndex, 1);
      root.querySelectorAll("[data-type]").forEach(function (button) {
        var selected = activeTypes.indexOf(button.getAttribute("data-type")) !== -1;
        button.classList.toggle("is-active", selected);
        button.setAttribute("aria-pressed", selected ? "true" : "false");
      });
      render();
      return;
    }
    var sortButton = event.target.closest("[data-sort]");
    if (sortButton) {
      var nextKey = sortButton.getAttribute("data-sort");
      sortDirection = sortKey === nextKey ? sortDirection * -1 : 1;
      sortKey = nextKey;
      render();
      root.querySelector('[data-sort="' + nextKey + '"]').focus();
      return;
    }
    var categoryButton = event.target.closest("[data-category-filter]");
    if (categoryButton) {
      var category = categoryButton.getAttribute("data-category-filter");
      var categoryIndex = selectedCategories.indexOf(category);
      if (categoryIndex === -1) selectedCategories.push(category);
      else selectedCategories.splice(categoryIndex, 1);
      var active = selectedCategories.indexOf(category) !== -1;
      categoryButton.setAttribute("aria-pressed", active ? "true" : "false");
      categoryButton.querySelector(".dc-filter-remove").hidden = !active;
      updateTypeCounts();
      render();
      return;
    }
    var scopeButton = event.target.closest("[data-scope-filter]");
    if (scopeButton) {
      var scope = scopeButton.getAttribute("data-scope-filter");
      var scopeIndex = selectedAdditionalScopes.indexOf(scope);
      if (scopeIndex === -1) selectedAdditionalScopes.push(scope);
      else selectedAdditionalScopes.splice(scopeIndex, 1);
      var scopeActive = selectedAdditionalScopes.indexOf(scope) !== -1;
      if (scope === "archived" && scopeActive) {
        excludeArchived = false;
        root.querySelector("[data-exclude-archived]").checked = false;
      }
      scopeButton.setAttribute("aria-pressed", scopeActive ? "true" : "false");
      scopeButton.querySelector(".dc-filter-remove").hidden = !scopeActive;
      updateTypeCounts();
      render();
      return;
    }
    var filenameButton = event.target.closest(".dc-filename");
    if (filenameButton) {
      var selected = documents.find(function (item) { return item.id === filenameButton.closest("tr").getAttribute("data-document-id"); });
      selectDocument(selected);
      showInModal(selected);
      previewTrigger = filenameButton;
      // USWDS replaces the original modal with a wrapper during initialization.
      // Resolve it at open time rather than observing the original element.
      modalWrapper = document.querySelector("#dc-document-modal");
      modalObserver.disconnect();
      modalObserver.observe(modalWrapper, { attributes: true, attributeFilter: ["class"] });
      modalOpener.click();
      return;
    }
    var row = event.target.closest(".dc-table tbody tr");
    if (row) {
      selectDocument(documents.find(function (item) { return item.id === row.getAttribute("data-document-id"); }));
    }
  });

  root.addEventListener("keydown", function (event) {
    var row = event.target.closest(".dc-table tbody tr");
    if (!row || event.target !== row || ["Enter", " "].indexOf(event.key) === -1) return;
    event.preventDefault();
    selectDocument(documents.find(function (item) { return item.id === row.getAttribute("data-document-id"); }));
  });

  root.querySelector(".dc-type-cards").addEventListener("keydown", function (event) {
    if (["ArrowLeft", "ArrowRight", "Home", "End"].indexOf(event.key) === -1) return;
    var buttons = Array.prototype.slice.call(root.querySelectorAll("[data-type]"));
    var current = buttons.indexOf(document.activeElement);
    if (current === -1) return;
    event.preventDefault();
    var next = event.key === "Home" ? 0 : event.key === "End" ? buttons.length - 1 :
      (current + (event.key === "ArrowRight" ? 1 : -1) + buttons.length) % buttons.length;
    buttons[next].focus();
  });

  root.querySelector("#dc-search").addEventListener("input", function (event) {
    searchQuery = event.target.value.trim().toLowerCase();
    updateTypeCounts();
    render();
  });
  root.querySelector("[data-exclude-archived]").addEventListener("change", function (event) {
    excludeArchived = event.target.checked;
    if (excludeArchived) {
      selectedAdditionalScopes = selectedAdditionalScopes.filter(function (scope) { return scope !== "archived"; });
      var archivedButton = root.querySelector("[data-scope-filter='archived']");
      archivedButton.setAttribute("aria-pressed", "false");
      archivedButton.querySelector(".dc-filter-remove").hidden = true;
    }
    updateTypeCounts();
    render();
  });
  function restoreSelectedFocus() {
    var selectedFilename = previewTrigger && previewTrigger.isConnected ? previewTrigger : root.querySelector(".dc-table tbody tr.is-selected .dc-filename");
    if (selectedFilename) selectedFilename.focus();
  }

  // Observe completion of the USWDS close operation, including removal of
  // aria-hidden from page content. The hidden proxy opener cannot receive focus.
  var previewWasVisible = false;
  var modalObserver = new MutationObserver(function () {
    var visible = modalWrapper.classList.contains("is-visible");
    if (previewWasVisible && !visible) restoreSelectedFocus();
    previewWasVisible = visible;
  });

  fetch(root.getAttribute("data-index-url"), { credentials: "same-origin" })
    .then(function (response) { if (!response.ok) throw new Error("Index request failed"); return response.json(); })
    .then(function (payload) {
      documents = payload.documents;
      if (totalFiles) totalFiles.textContent = documents.length + " total file" + (documents.length === 1 ? "" : "s");
      renderStatistics();
      updateTypeCounts();
      render();
    })
    .catch(function () { status.textContent = "The document index could not be loaded. Please try again later."; });
}());
