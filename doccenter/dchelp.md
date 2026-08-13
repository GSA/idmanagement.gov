---
layout: base
title: Document Center Help
permalink: /doccenter/help/
extra_stylesheet: /assets/css/document-center.css
---

<main id="main-content" class="dc-help-page">
  <div class="grid-container usa-prose">
    <p><a class="usa-link" href="{{ site.baseurl }}/doccenter/">← Return to the Document Center</a></p>

    <h1>Document Center Help</h1>

    <h2>Purpose</h2>

    <p>The Document Center provides a user-friendly way to find documents that previously could only be viewed by browsing the IDManagement.gov source-code repository. That approach required users to understand the repository’s folder structure and offered limited information about each file. This tool turns the repository inventory into a searchable interface with plain-language file details, focused filters, document previews, downloads, and inventory statistics.</p>

    <div class="dc-help-columns">
      <section class="dc-help-column" aria-labelledby="dc-help-features">
        <h2 id="dc-help-features">Features</h2>
        <ul>
          <li><strong>Search:</strong> Find documents using filenames and indexed metadata.</li>
          <li><strong>Multiple file types:</strong> Select PDF, Word, Excel, or PowerPoint. Additional selections add their files; deselecting a type removes only that type.</li>
          <li><strong>Document filters:</strong> Find filenames containing APL, FIPS, FPKI, or PACS.</li>
          <li><strong>Location filters:</strong> Include files from <code>/docs/archived</code> or <code>/docs/expdocs</code>.</li>
          <li><strong>Document details:</strong> Review file type, location, size, version, author, dates, age, and available PDF signature information.</li>
          <li><strong>Inventory analytics:</strong> View totals by scope, file type, and repository location.</li>
        </ul>
      </section>

      <section class="dc-help-column" aria-labelledby="dc-help-functionality">
        <h2 id="dc-help-functionality">How to find documents</h2>
        <ul>
          <li><strong>Start a search:</strong> Enter part of a filename or metadata value in the search box. The list remains blank until a search or filter is selected.</li>
          <li><strong>Choose file formats:</strong> Select one type to show only that format, then select more types to add them to the results.</li>
          <li><strong>Choose document filters:</strong> Select one or more topic or location buttons. Each selection adds its matching documents; removing it subtracts that matching set.</li>
          <li><strong>Combine controls:</strong> File-type selections and search terms narrow the combined results from the document-filter buttons.</li>
          <li><strong>Review a file:</strong> Select a row to load its Document Details. Open “Additional Document Details” for extended metadata.</li>
          <li><strong>Preview or download:</strong> Select a filename to open its preview. Use Download in the details or preview panel to save a copy.</li>
        </ul>
      </section>
    </div>

    <h2>Understanding the locations</h2>

    <ul>
      <li><code>/docs</code> contains active documents.</li>
      <li><code>/docs/archived</code> contains archived documents.</li>
      <li><code>/docs/expdocs</code> contains experimental documents.</li>
    </ul>

    <p>Counts and metadata are generated from the files stored in the repository. Some metadata may display as “Not available” when it cannot be established from the document or its Git history.</p>
  </div>
</main>
