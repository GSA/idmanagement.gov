---
layout: page
title: IDM Doc Center Help
permalink: /doccenter/help/
sticky_sidenav: true
sidenav:
  - text: User guide
    href: /doccenter/help/#user-guide
  - text: Open the Doc Center
    href: /doccenter/help/#open-the-doc-center
  - text: Search for a document
    href: /doccenter/help/#search-for-a-document
  - text: Choose file types and topics
    href: /doccenter/help/#choose-file-types-and-topics
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

[Return to IDM Doc Center]({{ site.baseurl }}/doccenter/){: .usa-button}

## User guide

**Edition:** October 15, 2026 · **Audience:** document readers

Find, review, and download documents published by IDManagement.gov. The Doc Center brings PDF, Word, Excel, and PowerPoint files into one searchable list. This guide describes the current implementation; the available inventory changes as documents are maintained.

### Open the Doc Center

Choose **University → IDM Doc Center** in the site navigation, or open `/doccenter/` on the site you are using. `/dc/` is a short redirect. The question-mark button beside Search documents opens `/doccenter/help/`.

The starting page shows the inventory total and matching counts for each file type. The document list stays empty until you search, select a type or another filter, or uncheck **Exclude Archived**. An empty starting list does not mean the inventory is empty.

### Search for a document

Enter part of a filename, author, version, or folder path in **Search documents**. Results update as you type. Search ignores capitalization and matches the text as a substring. It searches indexed metadata, not the contents of the files. A phrase must occur as entered; separate words are not independent search terms.

With no topic or location selections and Exclude Archived checked, a search considers active documents. Clear the search field to remove the text restriction. If another type or filter remains selected, its results remain visible.

### Choose file types and topics

Select **PDF**, **Word**, **Excel**, or **PowerPoint** to show that format. Select additional types to combine formats. Select an active type again to remove that type. When the last selected type is cleared, all formats become eligible if a search or another control still activates the list.

The **APL**, **FIPS**, **FPKI**, and **PACS** buttons match those letter sequences in filenames. Selecting several topics includes documents matching any selected topic. Topic matching does not inspect document contents or metadata descriptions.

Search and file-type selections narrow the combined topic and location results. For example, choose FPKI and PDF to find PDF files whose filenames contain FPKI, then enter part of a filename to narrow the list further.

### Include archived and experimental documents

| Control | Current behavior |
| --- | --- |
| Exclude Archived checked | Archived documents are hidden. Checking it also turns off the Archived button. |
| Exclude Archived unchecked | Active and archived files are eligible when no topics are selected, whether the Archived button is on or off. Other search and type restrictions still apply. |
| Archived button | Includes the archived scope and automatically unchecks Exclude Archived. Turning the button off does not recheck exclusion. |
| Experiments button | Adds files from the experimental scope. With no topics selected, active documents remain eligible too. |

To see active and archived documents across all formats, clear the search, clear the topic and file-type selections, and uncheck Exclude Archived. To include every indexed scope, also select Experiments.

Topics and explicit location selections are combined by inclusion. For example, **FPKI + Archived** includes FPKI filename matches plus the archived scope, rather than only archived FPKI documents. Search and file-type selections then narrow that combined list. Experimental files can also appear when their filenames match a selected topic.

An **A** badge identifies an archived file; an **E** badge identifies an experimental file. Their tooltips and accessible labels include the last-modified date. A file's scope comes from its repository location, not an assessment of whether its guidance remains appropriate for your work.

### Read the list and document details

The table contains File Name, Author, Created, and 3+ years. Select File Name, Author, or Created in the heading row to sort; select the same heading again to reverse the order. The initial order is filename ascending.

When results appear, the first matching file is selected automatically. Select another row to update **Document details**. On a narrow screen, the details appear below the results; scroll within the table if needed.

The details panel shows the filename, file type, repository location, and Download button. Expand **Additional Document Details** for group, file size, version, author, created and modified dates, age, and available PDF signature information. The additional-details section closes when the selection or results are refreshed.

“Not available” means the indexed value was not established. A version marked “filename (inferred)” was inferred from the name. Dates can come from embedded document metadata or Git history; the source is shown in the expanded details. **3+ years** is calculated from the modified date, not the created date; it shows Unknown when no modified date is available.

### Preview or download

Select a **filename** to open the preview window. PDFs use the browser's PDF viewer, whose controls and rendering vary by browser. Word, Excel, and PowerPoint files show a download notice instead of an embedded preview.

Use **Download** in the details panel or preview window to retrieve the original file. Close the preview using its close button or Escape. Focus returns to the selected filename.

PDF signature labels describe an inspection performed when the inventory was generated. They are not an organizational approval or a current online certificate validation. Trust, expiration, and validation conditions can affect the reported result.

### Understand counts and statistics

Each type button shows how many files match the current search and topic/location rules for that format. These counts are calculated independently of which file-type buttons are selected.

The total beside the search box covers the entire inventory. Select the statistics icon to show totals by scope, format, and location. Those totals do not narrow with your search. The location breakdown currently lists the three primary locations only; files in other nested folders still contribute to the overall total.

### Keyboard use and common problems

Use Tab to move between controls. On a focused table row, Enter or Space selects the document. On file-type buttons, Arrow Left, Arrow Right, Home, and End move focus **and toggle the destination type**.

If no files match, clear the search or remove type/topic restrictions. If an archived file is missing, uncheck Exclude Archived. A legacy `.doc`, `.xls`, or `.ppt` file is not indexed; the supported Office formats are `.docx`, `.xlsx`, and `.pptx`.

If the index cannot load, refresh the page and try again. If a file is newly published but absent, the inventory or hosted deployment may still need updating; report the filename, page address, and selections to the site maintainer. If a PDF preview is blank, try Download.

Reloading the page resets your search and filters. There is no saved-search or filter-sharing URL in the current implementation.
