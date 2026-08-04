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
    await page.waitForSelector(".dc-table tbody tr");

    const initial = await page.evaluate(() => ({
      versionHeader: Array.from(document.querySelectorAll("th")).some((cell) => cell.textContent.trim() === "Version"),
      downloadHeader: Array.from(document.querySelectorAll("th")).some((cell) => cell.textContent.trim() === "Download"),
      modifiedHeader: Array.from(document.querySelectorAll("th")).some((cell) => cell.textContent.trim() === "Modified"),
      openButtons: Array.from(document.querySelectorAll(".dc-table a, .dc-table button")).filter((element) => element.textContent.trim() === "Open").length,
      selectedRows: document.querySelectorAll(".dc-table tbody tr.is-selected").length,
      searchContained: (() => {
        const input = document.querySelector("#dc-search").getBoundingClientRect();
        const container = document.querySelector(".dc-search-control").getBoundingClientRect();
        return input.left >= container.left && input.right <= container.right && input.top >= container.top && input.bottom <= container.bottom;
      })()
    }));
    if (initial.versionHeader || initial.downloadHeader || initial.modifiedHeader || initial.openButtons || initial.selectedRows !== 1 || !initial.searchContained) throw new Error(`Unexpected initial state: ${JSON.stringify(initial)}`);

    await page.$eval("[data-type='pdf']", (element) => element.click());
    const unfilteredTypes = await page.evaluate(() => ({
      selectedTypeButtons: document.querySelectorAll("[data-type][aria-selected='true']").length,
      visibleTypes: new Set(Array.from(document.querySelectorAll(".dc-table tbody tr")).map((row) => row.querySelector(".dc-filename").textContent.split(".").pop().toLowerCase())).size
    }));
    if (unfilteredTypes.selectedTypeButtons !== 0 || unfilteredTypes.visibleTypes < 2) throw new Error(`Type filter did not clear: ${JSON.stringify(unfilteredTypes)}`);
    await page.$eval("[data-type='pdf']", (element) => element.click());

    const secondRow = ".dc-table tbody tr:nth-child(2)";
    const secondName = await page.$eval(`${secondRow} .dc-filename`, (element) => element.textContent.trim());
    await page.$eval(secondRow, (element) => element.click());
    const selectedName = await page.$eval("[data-details] h3", (element) => element.textContent.trim());
    if (selectedName !== secondName) throw new Error("Row selection did not update the details panel");

    await page.$eval("[data-scope-filter='archived']", (element) => element.click());
    const archivedBadge = await page.$eval("[data-scope-count-for='pdf']", (element) => ({ hidden: element.hidden, text: element.textContent }));
    if (archivedBadge.hidden || !archivedBadge.text.includes("archived")) throw new Error("Archived counts did not appear on type buttons");
    const archivedFilter = await page.$eval("[data-scope-filter='archived']", (element) => ({ pressed: element.getAttribute("aria-pressed"), removable: !element.querySelector(".dc-filter-remove").hidden }));
    if (archivedFilter.pressed !== "true" || !archivedFilter.removable) throw new Error("Archived filter pill did not activate");
    const archiveMarker = await page.$eval(".dc-archive-marker", (element) => ({ title: element.title, label: element.getAttribute("aria-label") }));
    if (!archiveMarker.title.includes("Last modified:") || !archiveMarker.label.includes("Last modified")) throw new Error(`Archive marker tooltip is incomplete: ${JSON.stringify(archiveMarker)}`);
    await page.$eval("[data-scope-filter='experimental']", (element) => element.click());
    const experimentalMarker = await page.$eval(".dc-experimental-marker", (element) => ({ text: element.textContent.trim(), title: element.title, label: element.getAttribute("aria-label") }));
    if (experimentalMarker.text !== "E" || !experimentalMarker.title.includes("Last modified:") || !experimentalMarker.label.includes("Experimental file")) throw new Error(`Experimental marker is incomplete: ${JSON.stringify(experimentalMarker)}`);

    await page.$eval("[data-category-filter='fpki']", (element) => element.click());
    const categoryState = await page.evaluate(() => ({
      pressed: document.querySelector("[data-category-filter='fpki']").getAttribute("aria-pressed"),
      removable: !document.querySelector("[data-category-filter='fpki'] .dc-filter-remove").hidden,
      matchingRows: Array.from(document.querySelectorAll(".dc-table tbody tr")).every((row) => row.textContent.toLowerCase().includes("fpki"))
    }));
    if (categoryState.pressed !== "true" || !categoryState.removable || !categoryState.matchingRows) throw new Error(`Program filter failed: ${JSON.stringify(categoryState)}`);
    await page.$eval("[data-category-filter='fpki']", (element) => element.click());

    await page.$eval(".dc-table tbody tr:first-child .dc-filename", (element) => element.click());
    await page.waitForSelector("#dc-document-modal.is-visible");
    const modalState = await page.evaluate(() => ({
      title: document.querySelector("#dc-modal-heading").textContent.trim(),
      hasFrame: Boolean(document.querySelector(".dc-document-frame"))
    }));
    if (!modalState.title || !modalState.hasFrame) throw new Error(`PDF modal did not initialize: ${JSON.stringify(modalState)}`);

    await page.screenshot({ path: "/tmp/document-center-modal.png", fullPage: false });
    await page.$eval("[data-close-modal]", (element) => element.click());
    await page.waitForSelector("#dc-document-modal.is-hidden");

    await page.setViewport({ width: 900, height: 900 });
    await page.reload({ waitUntil: "networkidle0" });
    await page.waitForSelector(".dc-table tbody tr");
    const tabletColumns = await page.evaluate(() => {
      const tableSection = document.querySelector("[data-panels]").closest("section").getBoundingClientRect();
      const detailPanel = document.querySelector(".dc-details").getBoundingClientRect();
      return detailPanel.left > tableSection.left && detailPanel.top < tableSection.bottom;
    });
    if (!tabletColumns) throw new Error("Details panel did not remain to the right at tablet width");

    await page.setViewport({ width: 390, height: 844 });
    await page.reload({ waitUntil: "networkidle0" });
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
