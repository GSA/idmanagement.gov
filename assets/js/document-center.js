(function () {
  "use strict";

  var root = document.querySelector("[data-document-center]");
  if (!root) return;

  var types = ["pdf", "docx", "xlsx", "pptx"];
  var labels = { pdf: "PDF", docx: "Word", xlsx: "Excel", pptx: "PowerPoint" };
  var documents = [];
  var activeType = "pdf";
  var sortKey = "filename";
  var sortDirection = 1;
  var selectedId = null;
  var selectedCategories = [];
  var selectedAdditionalScopes = [];
  var searchQuery = "";
  var panels = root.querySelector("[data-panels]");
  var status = root.querySelector(".dc-status");
  var details = root.querySelector("[data-details]");
  var modalHeading = document.querySelector("#dc-modal-heading");
  var modalBody = document.querySelector("[data-modal-body]");
  var modalOpener = document.querySelector("#dc-modal-opener");
  var modalWrapper = document.querySelector("#dc-document-modal");

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

  function metadata(document) {
    return '<dl>' +
      '<dt>File type</dt><dd>' + escapeHtml(document.type_label) + '</dd>' +
      '<dt>Location</dt><dd>' + escapeHtml(document.relative_path) + '</dd>' +
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
      '</dl>';
  }

  function actions(document) {
    var label = document.filename + " (" + document.type_label + ", " + formatSize(document.size_bytes) + ")";
    return '<div class="dc-downloads"><a class="usa-button" href="' + escapeHtml(document.path) + '" download aria-label="Download ' + escapeHtml(label) + '">Download</a></div>';
  }

  function showInModal(document) {
    modalHeading.textContent = document.filename;
    if (document.type === "pdf") {
      modalBody.innerHTML = '<iframe class="dc-document-frame" src="' + escapeHtml(document.path) + '" title="Preview of ' + escapeHtml(document.filename) + '"></iframe>' + actions(document);
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
    details.innerHTML = '<h3>' + escapeHtml(document.filename) + '</h3>' + metadata(document) + actions(document);
  }

  function updateTypeCounts() {
    var showArchived = selectedAdditionalScopes.indexOf("archived") !== -1;
    var showExperimental = selectedAdditionalScopes.indexOf("experimental") !== -1;
    types.forEach(function (type) {
      var activeCount = documents.filter(function (document) { return document.type === type && document.scope === "active" && matchesCategory(document) && matchesSearch(document); }).length;
      var extras = [];
      if (showArchived) {
        extras.push(documents.filter(function (document) { return document.type === type && document.scope === "archived" && matchesCategory(document) && matchesSearch(document); }).length + " archived");
      }
      if (showExperimental) {
        extras.push(documents.filter(function (document) { return document.type === type && document.scope === "experimental" && matchesCategory(document) && matchesSearch(document); }).length + " experimental");
      }
      root.querySelector("[data-count-for='" + type + "']").textContent = activeCount + " active";
      var scopeCount = root.querySelector("[data-scope-count-for='" + type + "']");
      scopeCount.textContent = extras.join(" • ");
      scopeCount.hidden = extras.length === 0;
    });
  }

  function selectedScopes() {
    return ["active"].concat(selectedAdditionalScopes);
  }

  function matchesCategory(document) {
    if (!selectedCategories.length) return true;
    var searchable = [document.filename, document.relative_path].join(" ").toLowerCase();
    return selectedCategories.some(function (category) { return searchable.indexOf(category) !== -1; });
  }

  function matchesSearch(document) {
    if (!searchQuery) return true;
    return [document.filename, document.author, document.version, document.relative_path].join(" ").toLowerCase().indexOf(searchQuery) !== -1;
  }

  function filteredDocuments() {
    var scopes = selectedScopes();
    return documents.filter(function (document) {
      return (!activeType || document.type === activeType) && scopes.indexOf(document.scope) !== -1 && matchesCategory(document) && matchesSearch(document);
    }).sort(function (a, b) {
      var left = (a[sortKey] || "").toString().toLowerCase();
      var right = (b[sortKey] || "").toString().toLowerCase();
      return left.localeCompare(right, undefined, { numeric: true }) * sortDirection;
    });
  }

  function render() {
    var matches = filteredDocuments();
    var activeLabel = activeType ? labels[activeType] + " " : "";
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
      var scopeMarker = document.scope === "archived" ? '<span class="dc-scope-marker dc-archive-marker" tabindex="0" title="Archived file — Last modified: ' + escapeHtml(formatDate(document.modified)) + '" aria-label="Archived file. Last modified ' + escapeHtml(formatDate(document.modified)) + '"><span aria-hidden="true">A</span></span>' :
        document.scope === "experimental" ? '<span class="dc-scope-marker dc-experimental-marker" tabindex="0" title="Experimental file — Last modified: ' + escapeHtml(formatDate(document.modified)) + '" aria-label="Experimental file. Last modified ' + escapeHtml(formatDate(document.modified)) + '"><span aria-hidden="true">E</span></span>' : '';
      return '<tr data-document-id="' + escapeHtml(document.id) + '" tabindex="0"' + selectedClass + '><td class="dc-filename-cell"><button type="button" class="dc-filename" aria-controls="dc-document-modal" aria-haspopup="dialog">' + escapeHtml(document.filename) + '</button>' + scopeMarker + '</td>' +
        '<td class="dc-optional">' + escapeHtml(display(document.author)) + '</td><td class="dc-optional dc-date">' + escapeHtml(formatDate(document.created)) + '</td><td>' + ageStatus(document) + '</td></tr>';
    }).join("");
    var panelLabel = activeType ? labels[activeType] + " documents" : "All documents";
    panels.innerHTML = '<div class="dc-table-wrap"><table class="dc-table"><caption class="usa-sr-only">' + panelLabel + '</caption><thead><tr>' +
      '<th><button class="dc-sort" data-sort="filename">File Name</button></th><th class="dc-optional"><button class="dc-sort" data-sort="author">Author</button></th><th class="dc-optional"><button class="dc-sort" data-sort="created">Created</button></th><th>3+ years</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
    selectDocument(selected);
  }

  root.addEventListener("click", function (event) {
    var typeButton = event.target.closest("[data-type]");
    if (typeButton) {
      var requestedType = typeButton.getAttribute("data-type");
      activeType = activeType === requestedType ? null : requestedType;
      root.querySelectorAll("[data-type]").forEach(function (button) {
        var selected = button.getAttribute("data-type") === activeType;
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
    buttons[next].click();
  });

  root.querySelector("#dc-search").addEventListener("input", function (event) {
    searchQuery = event.target.value.trim().toLowerCase();
    updateTypeCounts();
    render();
  });
  function restoreSelectedFocus() {
    var selectedFilename = root.querySelector(".dc-table tbody tr.is-selected .dc-filename");
    if (selectedFilename) window.setTimeout(function () { selectedFilename.focus(); }, 50);
  }

  modalWrapper.addEventListener("click", function (event) {
    if (event.target.closest("[data-close-modal]") || event.target.classList.contains("usa-modal-overlay")) restoreSelectedFocus();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modalWrapper.classList.contains("is-visible")) restoreSelectedFocus();
  });

  fetch(root.getAttribute("data-index-url"), { credentials: "same-origin" })
    .then(function (response) { if (!response.ok) throw new Error("Index request failed"); return response.json(); })
    .then(function (payload) {
      documents = payload.documents;
      updateTypeCounts();
      render();
    })
    .catch(function () { status.textContent = "The document index could not be loaded. Please try again later."; });
}());
