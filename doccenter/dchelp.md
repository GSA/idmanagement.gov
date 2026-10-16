---
layout: page
title: Document Center for IDManagement Help
permalink: /doccenter/help/
sticky_sidenav: true
section_class: dc-help-layout
extra_stylesheet: /assets/css/document-center.css
sidenav:
  - text: User guide
    href: /doccenter/help/#user-guide
  - text: Open the Doc Center
    href: /doccenter/help/#open-the-doc-center
  - text: Search for a document
    href: /doccenter/help/#search-for-a-document
  - text: Choose file types and topics
    href: /doccenter/help/#choose-file-types-and-topics
  - text: Use the Document type filter
    href: /doccenter/help/#use-the-document-type-filter
  - text: Include archived and experimental documents
    href: /doccenter/help/#include-archived-and-experimental-documents
  - text: Read the list and document details
    href: /doccenter/help/#read-the-list-and-document-details
  - text: Preview or download
    href: /doccenter/help/#preview-or-download
  - text: Understand counts and statistics
    href: /doccenter/help/#understand-counts-and-statistics
  - text: Keyboard use and common problems
    href: /doccenter/help/#keyboard-use-and-common-problems
---

<a class="usa-button" href="{{ site.baseurl }}/doccenter/"><svg class="usa-icon" aria-hidden="true" focusable="false"><use href="{{ site.baseurl }}/assets/img/sprite.svg#arrow_back"></use></svg> Return to Document Center</a>

<details class="dc-help-contents">
  <summary>On this page</summary>
  <nav aria-label="Help contents">
    <ul>
      {% for link in page.sidenav %}
      <li><a href="{{ link.href | relative_url }}">{{ link.text }}</a></li>
      {% endfor %}
    </ul>
  </nav>
</details>

## User guide

**Edition:** October 15, 2026 · **Audience:** document readers

Find, review, and download documents published by IDManagement.gov. The Doc Center brings PDF, Word, Excel, and PowerPoint files into one searchable list. This guide describes the current implementation; the available inventory changes as documents are maintained.

## Open the Doc Center

Choose **University → IDM Doc Center** in the site navigation, or open `/doccenter/` on the site you are using. `/dc/` is a short redirect. The question-mark button beside Search documents opens `/doccenter/help/`.

The starting page shows the inventory total and matching counts for each file type. The document list stays empty until you search, select a type or another filter, or uncheck **Exclude Archived**. An empty starting list does not mean the inventory is empty.

## Search for a document

Enter part of a filename, author, version, or folder path in **Search documents**. Results update as you type. Search ignores capitalization and matches the text as a substring. It searches indexed metadata, not the contents of the files. A phrase must occur as entered; separate words are not independent search terms.

With no topic or location selections and Exclude Archived checked, a search considers active documents. Clear the search field to remove the text restriction. If another type or filter remains selected, its results remain visible.

## Choose file types and topics

The **PDF**, **Word**, **Excel**, and **PowerPoint** cards below Search documents filter by file format. They are separate from the **Document type filter** buttons near the introduction.

| File-format card | Included extension |
| --- | --- |
| PDF | `.pdf` |
| Word | `.docx` |
| Excel | `.xlsx` |
| PowerPoint | `.pptx` |

Select a card to show that format. Select additional cards to combine formats; for example, **PDF + Word** includes both PDF and Word files. Select an active card again to remove that format. When the last selected card is cleared, all formats become eligible if a search or another control still activates the list. If no search or other filter remains active and Exclude Archived is checked, the list returns to its empty starting state.

Each card’s matching count follows the current search and document-type/location filters, even when the card is not selected. A count is not a promise that the format is currently included in the displayed list.

## Use the Document type filter

The **Document type filter** panel near the introduction contains **APL**, **FIPS**, **FPKI**, **PACS**, **Archived**, and **Experiments**. These buttons select filename categories or repository locations, rather than file formats.

| Button | What it includes |
| --- | --- |
| APL | Filenames containing `APL`, ignoring capitalization. |
| FIPS | Filenames containing `FIPS`, ignoring capitalization. |
| FPKI | Filenames containing `FPKI`, ignoring capitalization. |
| PACS | Filenames containing `PACS`, ignoring capitalization. |
| Archived | Files in `docs/archived/` and its subfolders. Selecting this also unchecks Exclude Archived. |
| Experiments | Files in `docs/expdocs/` and its subfolders. With no filename categories selected, active documents remain eligible too. |

Select a button to activate it; select it again to remove that selection. An active button has a filled appearance and an **×** beside its text. With a keyboard, use Tab to reach a button and Enter or Space to toggle it; assistive technology receives its pressed state.

The four filename-category buttons match those letter sequences anywhere in the filename. They do not inspect a document’s contents, author, or metadata description. A file can match more than one category.

Selections in this panel are combined by inclusion: **APL + FIPS** includes files matching either filename category. Removing APL leaves FIPS selected; a file that matches both categories remains included through FIPS. **FPKI + Archived** includes FPKI filename matches plus the archived scope, rather than only archived FPKI files. Exclude Archived still prevents archived files from appearing whenever it is checked.

Search and file-format cards narrow the combined results. For example, select **FPKI**, then **PDF**, to show eligible PDFs whose filenames contain FPKI; enter part of a filename to narrow them further. Selecting **Archived** as well adds eligible archived PDFs, including those without FPKI in their names, subject to the same search text.

When no filename categories are selected, active documents remain eligible by default. Archived documents also become eligible when Exclude Archived is unchecked; Experiments adds the experimental scope. Turning Archived off does not recheck Exclude Archived. See the next section for the location controls and badges.

## Include archived and experimental documents

| Control | Current behavior |
| --- | --- |
| Exclude Archived checked | Archived documents are hidden. Checking it also turns off the Archived button. |
| Exclude Archived unchecked | Active and archived files are eligible when no topics are selected, whether the Archived button is on or off. Other search and type restrictions still apply. |
| Archived button | Includes the archived scope and automatically unchecks Exclude Archived. Turning the button off does not recheck exclusion. |
| Experiments button | Adds files from the experimental scope. With no topics selected, active documents remain eligible too. |

To see active and archived documents across all formats, clear the search, clear the topic and file-type selections, and uncheck Exclude Archived. To include every indexed scope, also select Experiments.

Topics and explicit location selections are combined by inclusion. For example, **FPKI + Archived** includes FPKI filename matches plus the archived scope, rather than only archived FPKI documents. Search and file-type selections then narrow that combined list. Experimental files can also appear when their filenames match a selected topic.

An **A** badge identifies an archived file; an **E** badge identifies an experimental file. They use the USWDS Tag component. Their tooltips and screen-reader text include the full status and last-modified date. A file's scope comes from its repository location, not an assessment of whether its guidance remains appropriate for your work.

## Read the list and document details

The table contains File Name, Author, Created, and 3+ years. Select File Name, Author, or Created in the heading row to sort; select the same heading again to reverse the order. The initial order is filename ascending.

When results appear, the first matching file is selected automatically. Select another row to update **Document details**. On a narrow screen, the details appear below the results; scroll within the table if needed.

The details panel shows the filename, file type, repository location, and Download button. Expand **Additional Document Details** for group, file size, version, author, created and modified dates, age, and available PDF signature information. The additional-details section closes when the selection or results are refreshed.

“Not available” means the indexed value was not established. A version marked “filename (inferred)” was inferred from the name. Dates can come from embedded document metadata or Git history; the source is shown in the expanded details. **3+ years** is calculated from the modified date, not the created date; it shows Unknown when no modified date is available.

## Preview or download

Select a **filename** to open the preview window. PDFs use the browser's PDF viewer, whose controls and rendering vary by browser. Word, Excel, and PowerPoint files show a download notice instead of an embedded preview.

Use **Download** in the details panel or preview window to retrieve the original file. Close the preview using its close button or Escape. Focus returns to the selected filename.

PDF signature labels describe an inspection performed when the inventory was generated. They are not an organizational approval or a current online certificate validation. Trust, expiration, and validation conditions can affect the reported result.

## Understand counts and statistics

Each type button shows how many files match the current search and topic/location rules for that format. These counts are calculated independently of which file-type buttons are selected.

The total beside the search box covers the entire inventory. Select the statistics icon to show totals by scope, format, and location. Those totals do not narrow with your search. The location breakdown currently lists the three primary locations only; files in other nested folders still contribute to the overall total.

## Keyboard use and common problems

Use Tab to move between controls. On a focused table row, Enter or Space selects the document. On file-type buttons, Arrow Left, Arrow Right, Home, and End move focus between types. Press Enter or Space to toggle the focused type.

If no files match, clear the search or remove type/topic restrictions. If an archived file is missing, uncheck Exclude Archived. A legacy `.doc`, `.xls`, or `.ppt` file is not indexed; the supported Office formats are `.docx`, `.xlsx`, and `.pptx`.

If the index cannot load, refresh the page and try again. If a file is newly published but absent, the inventory or hosted deployment may still need updating; report the filename, page address, and selections to the site maintainer. If a PDF preview is blank, try Download.

Reloading the page resets your search and filters. There is no saved-search or filter-sharing URL in the current implementation.
