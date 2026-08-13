const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "/usr/bin/google-chrome",
    headless: true,
    args: ["--no-sandbox", "--disable-gpu"]
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 1000 });
    await page.goto("http://127.0.0.1:4000/doccenter/", { waitUntil: "networkidle0" });
    await page.waitForFunction(() => !document.querySelector("[data-total-files]").textContent.includes("Loading"));

    const initial = await page.evaluate(() => ({
      versionHeader: Array.from(document.querySelectorAll("th")).some((cell) => cell.textContent.trim() === "Version"),
      downloadHeader: Array.from(document.querySelectorAll("th")).some((cell) => cell.textContent.trim() === "Download"),
      modifiedHeader: Array.from(document.querySelectorAll("th")).some((cell) => cell.textContent.trim() === "Modified"),
      openButtons: Array.from(document.querySelectorAll(".dc-table a, .dc-table button")).filter((element) => element.textContent.trim() === "Open").length,
      selectedRows: document.querySelectorAll(".dc-table tbody tr.is-selected").length,
      rows: document.querySelectorAll(".dc-table tbody tr").length,
      status: document.querySelector(".dc-status").textContent.trim(),
      totalFiles: document.querySelector("[data-total-files]").textContent.trim(),
      detailsAlignedWithSearch: (() => {
        const search = document.querySelector(".dc-controls").getBoundingClientRect();
        const details = document.querySelector(".dc-details").getBoundingClientRect();
        return Math.abs(search.top - details.top) <= 1;
      })(),
      filtersBesideWelcome: Boolean(document.querySelector(".dc-intro-row > .dc-category-filters")),
      searchContained: (() => {
        const input = document.querySelector("#dc-search").getBoundingClientRect();
        const container = document.querySelector(".dc-search-control").getBoundingClientRect();
        return input.left >= container.left && input.right <= container.right && input.top >= container.top && input.bottom <= container.bottom;
      })()
    }));
    if (initial.versionHeader || initial.downloadHeader || initial.modifiedHeader || initial.openButtons || initial.selectedRows || initial.rows || !initial.status.includes("Search documents") || !/^\d+ total files?$/.test(initial.totalFiles) || !initial.detailsAlignedWithSearch || !initial.searchContained || !initial.filtersBesideWelcome) throw new Error(`Unexpected initial state: ${JSON.stringify(initial)}`);

    await page.$eval("[data-type='pdf']", (element) => element.click());
    await page.$eval("[data-type='docx']", (element) => element.click());
    const additiveTypes = await page.evaluate(() => ({
      selectedTypeButtons: document.querySelectorAll("[data-type][aria-pressed='true']").length,
      visibleTypes: Array.from(new Set(Array.from(document.querySelectorAll(".dc-table tbody tr .dc-filename")).map((element) => element.textContent.split(".").pop().toLowerCase()))).sort(),
      rows: document.querySelectorAll(".dc-table tbody tr").length
    }));
    if (additiveTypes.selectedTypeButtons !== 2 || additiveTypes.rows < 2 || additiveTypes.visibleTypes.join(",") !== "docx,pdf") throw new Error(`Additive file type filters failed: ${JSON.stringify(additiveTypes)}`);
    await page.$eval("[data-type='docx']", (element) => element.click());
    const singleType = await page.evaluate(() => ({
      selectedTypeButtons: document.querySelectorAll("[data-type][aria-pressed='true']").length,
      visibleTypes: Array.from(new Set(Array.from(document.querySelectorAll(".dc-table tbody tr .dc-filename")).map((element) => element.textContent.split(".").pop().toLowerCase())))
    }));
    if (singleType.selectedTypeButtons !== 1 || singleType.visibleTypes.join(",") !== "pdf") throw new Error(`File type deselection failed: ${JSON.stringify(singleType)}`);

    const secondRow = ".dc-table tbody tr:nth-child(2)";
    const secondName = await page.$eval(`${secondRow} .dc-filename`, (element) => element.textContent.trim());
    await page.$eval(secondRow, (element) => element.click());
    const selectedName = await page.$eval("[data-details] h3", (element) => element.textContent.trim());
    if (selectedName !== secondName) throw new Error("Row selection did not update the details panel");

    await page.$eval("[data-scope-filter='archived']", (element) => element.click());
    const archivedFilter = await page.$eval("[data-scope-filter='archived']", (element) => ({ pressed: element.getAttribute("aria-pressed"), removable: !element.querySelector(".dc-filter-remove").hidden }));
    if (archivedFilter.pressed !== "true" || !archivedFilter.removable) throw new Error("Archived filter pill did not activate");
    const archiveMarker = await page.$eval(".dc-archive-marker", (element) => ({ title: element.title, label: element.getAttribute("aria-label") }));
    if (!archiveMarker.title.includes("Last modified:") || !archiveMarker.label.includes("Last modified")) throw new Error(`Archive marker tooltip is incomplete: ${JSON.stringify(archiveMarker)}`);
    await page.$eval("[data-scope-filter='experimental']", (element) => element.click());
    const experimentalMarker = await page.$eval(".dc-experimental-marker", (element) => ({ text: element.textContent.trim(), title: element.title, label: element.getAttribute("aria-label") }));
    if (experimentalMarker.text !== "E" || !experimentalMarker.title.includes("Last modified:") || !experimentalMarker.label.includes("Experimental file")) throw new Error(`Experimental marker is incomplete: ${JSON.stringify(experimentalMarker)}`);

    const rowsBeforeScopeSearch = await page.$$eval(".dc-table tbody tr", (rows) => rows.length);
    await page.type("#dc-search", "newsletter");
    const scopedSearch = await page.evaluate(() => ({
      rows: document.querySelectorAll(".dc-table tbody tr").length,
      status: document.querySelector(".dc-status").textContent,
      allMatch: Array.from(document.querySelectorAll(".dc-filename")).every((element) => element.textContent.toLowerCase().includes("newsletter"))
    }));
    if (!scopedSearch.rows || scopedSearch.rows >= rowsBeforeScopeSearch || !scopedSearch.allMatch || !scopedSearch.status.includes(`${scopedSearch.rows} PDF`)) {
      throw new Error(`Search did not update with archived and experimental scopes enabled: ${JSON.stringify({ rowsBeforeScopeSearch, scopedSearch })}`);
    }
    await page.$eval("#dc-search", (element) => { element.value = ""; element.dispatchEvent(new Event("input", { bubbles: true })); });

    await page.$eval("[data-category-filter='fpki']", (element) => element.click());
    const categoryState = await page.evaluate(() => ({
      pressed: document.querySelector("[data-category-filter='fpki']").getAttribute("aria-pressed"),
      removable: !document.querySelector("[data-category-filter='fpki'] .dc-filter-remove").hidden,
      hasMatchingRow: Array.from(document.querySelectorAll(".dc-table tbody tr")).some((row) => row.textContent.toLowerCase().includes("fpki"))
    }));
    if (categoryState.pressed !== "true" || !categoryState.removable || !categoryState.hasMatchingRow) throw new Error(`Program filter failed: ${JSON.stringify(categoryState)}`);
    await page.$eval("[data-category-filter='fpki']", (element) => element.click());

    await page.$eval("[data-statistics-toggle]", (element) => element.click());
    const statistics = await page.evaluate(() => ({
      expanded: document.querySelector("[data-statistics-toggle]").getAttribute("aria-expanded"),
      hidden: document.querySelector("[data-document-statistics]").hidden,
      headings: Array.from(document.querySelectorAll("[data-document-statistics] h4")).map((element) => element.textContent.trim())
    }));
    if (statistics.expanded !== "true" || statistics.hidden || statistics.headings.join(",") !== "By scope,By file type,By location") throw new Error(`Inventory statistics failed: ${JSON.stringify(statistics)}`);

    await page.$eval(".dc-additional-information-toggle", (element) => element.click());
    const additionalDetails = await page.evaluate(() => ({
      expanded: document.querySelector(".dc-additional-information-toggle").getAttribute("aria-expanded"),
      hidden: document.querySelector(".dc-additional-information-panel").hidden
    }));
    if (additionalDetails.expanded !== "true" || additionalDetails.hidden) throw new Error(`Additional details did not expand: ${JSON.stringify(additionalDetails)}`);

    await page.$eval(".dc-table tbody tr:first-child .dc-filename", (element) => element.click());
    await page.waitForSelector("#dc-document-modal.is-visible");
    const modalState = await page.evaluate(() => ({
      title: document.querySelector("#dc-modal-heading").textContent.trim(),
      hasFrame: Boolean(document.querySelector(".dc-document-frame")),
      previewPath: new URL(document.querySelector(".dc-document-frame").src).pathname,
      downloadPath: new URL(document.querySelector("[data-modal-body] .dc-downloads a").href).pathname
    }));
    if (!modalState.title || !modalState.hasFrame || !modalState.previewPath.startsWith("/docs/") || modalState.downloadPath !== modalState.previewPath) throw new Error(`PDF modal did not initialize: ${JSON.stringify(modalState)}`);

    await page.screenshot({ path: "/tmp/document-center-modal.png", fullPage: false });
    await page.$eval("[data-close-modal]", (element) => element.click());
    await page.waitForSelector("#dc-document-modal.is-hidden");

    await page.setViewport({ width: 900, height: 900 });
    await page.reload({ waitUntil: "networkidle0" });
    await page.$eval("[data-type='pdf']", (element) => element.click());
    await page.waitForSelector(".dc-table tbody tr");
    const tabletColumns = await page.evaluate(() => {
      const tableSection = document.querySelector("[data-panels]").closest("section").getBoundingClientRect();
      const detailPanel = document.querySelector(".dc-details").getBoundingClientRect();
      return detailPanel.left > tableSection.left && detailPanel.top < tableSection.bottom;
    });
    if (!tabletColumns) throw new Error("Details panel did not remain to the right at tablet width");

    await page.setViewport({ width: 390, height: 844 });
    await page.reload({ waitUntil: "networkidle0" });
    await page.$eval("[data-type='pdf']", (element) => element.click());
    await page.waitForSelector(".dc-table tbody tr");
    const mobileContainment = await page.evaluate(() => {
      const input = document.querySelector("#dc-search").getBoundingClientRect();
      return {
        pageOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
        searchInViewport: input.left >= 0 && input.right <= document.documentElement.clientWidth
      };
    });
    if (mobileContainment.pageOverflow || !mobileContainment.searchInViewport) throw new Error(`Mobile containment failed: ${JSON.stringify(mobileContainment)}`);
    await page.screenshot({ path: "/tmp/document-center-mobile-latest.png", fullPage: false });
    console.log("Document Center browser checks passed");
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
