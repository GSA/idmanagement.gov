document.addEventListener("DOMContentLoaded", function () {
    var searchResults = document.getElementById("search-results");

    if (searchResults !== null) {
        var searchgovParams = document.getElementById("searchgov-params");
        var currentURL = new URL(window.location.href);
        var urlParams = new URLSearchParams(window.location.search);
        var searchKeyword = urlParams.get("query");
        var sanitizedSearchKeyword = sanitize(searchKeyword);
        var searchEndpoint = new URL(
            searchgovParams.dataset.endpoint + "/api/v2/search/i14y"
        );
        var resultsPerPage = 20;
        var page = urlParams.get("page") ?? 1;
        page = parseInt(page, 10);
        var offset = (page - 1) * resultsPerPage;
        var totalResults = 0;
        params = {
            affiliate: searchgovParams.dataset.affiliate,
            access_key: searchgovParams.dataset.accessKey,
            query: sanitizedSearchKeyword,
            offset: offset,
        };
        searchResults.setAttribute("start", offset + 1);

        var inputElement = document.getElementById("extended-search-field-small");
        inputElement.value = sanitizedSearchKeyword;
        inputElement.focus();

        Object.keys(params).forEach((key) =>
            searchEndpoint.searchParams.append(key, params[key])
        );

        fetch(searchEndpoint)
            .then(function (res) {
                return res.json();
            })
            .then(function (posts) {
                totalResults = posts.web.total;
                document.getElementById("search-params").innerHTML =
                  sanitizedSearchKeyword;
                document.getElementById("search-keyword").innerHTML =
                  sanitizedSearchKeyword;
                document.getElementById("results-count").innerHTML = totalResults;
                updateResultsVisibility();

                if (posts.web.results.length > 0) {
                    document
                        .getElementById("search-results")
                        .classList.remove("display-none");
                    document.getElementById("no-results").classList.add("display-none");
                    for (item in posts.web.results) {
                        render_result(
                            `
          <li class="padding-bottom-3 margin-top-4 usa-prose border-bottom-05 border-base-lightest">
            <a href="${posts.web.results[item]["url"]}">${posts.web.results[
                                item
                                ]["title"]
                                .replace(/\uE000/g, '<span class="text-bold">')
                                .replace(/\uE001/g, "</span>")}</a>
            <div class="text-green"> ${posts.web.results[item]["url"]} </div>
            <div> ${posts.web.results[item]["snippet"]
                                .replace(/\uE000/g, '<span class="text-bold">')
                                .replace(/\uE001/g, "</span>")} </div>
          </li>
          `,
                            true
                        );
                    }
                }
            })
            .catch(function (ex) {
                console.log("parsing failed", ex);
            })
            .finally(function (e) {
                if (document.getElementById("search-results").childNodes.length == 0) {
                    document.getElementById("search-results").classList.add("display-none");
                    document.getElementById("results-header").classList.add("display-none");
                    document.getElementById("pager").classList.add("display-none");
                    document.getElementById("no-results").classList.remove("display-none");
                }
                document.getElementById("results-header").classList.remove("display-none");
                update_pager();
            });
    }

    function render_result(content, append = true) {
        const previous = document.getElementById("search-results").innerHTML;
        document.getElementById("search-results").innerHTML =
            append == true ? previous + content : content;
    }

    function update_pager_old() {
        var pager = document.getElementById("pager");
        var pagerLinks = "";

        pager.innerHTML = "";

        // Calculate start and end page numbers for the pager
        var startPage = Math.max(1, page - 2);
        var endPage = Math.min(startPage + 4, Math.ceil(totalResults / resultsPerPage));

        if (page > 1) {
            pagerLinks += '<a href="' + getLinkToPage(page - 1) + '" class="margin-1" aria-label="Previous page">«&nbsp;Previous</a>';
        }

        for (var i = startPage; i <= endPage; i++) {
            if (i === page) {
                pagerLinks += '<span class="current-page margin-1">' + i + '</span>';
            } else {
                pagerLinks += '<a href="' + getLinkToPage(i) + '" class="margin-1">' + i + '</a>';
            }
        }

        if (totalResults > (page * resultsPerPage)) {
            pagerLinks += '<a href="' + getLinkToPage(parseInt(page) + 1) + '" class="margin-1" aria-label="Next page">Next&nbsp;»</a>';
        }

        pager.innerHTML = pagerLinks;
    }

    function update_pager() {
        var pager = document.getElementById("pager");
        var pagerLinks = "";

        pager.innerHTML = "";

        // Calculate start and end page numbers for the pager
        var startPage = Math.max(1, page - 2);
        var endPage = Math.min(startPage + 4, Math.ceil(totalResults / resultsPerPage));

        // Always add link for the first page
        if (startPage > 1) {
            pagerLinks += '<a href="' + getLinkToPage(1) + '" class="margin-1">First</a>';
            if (startPage > 2) {
                pagerLinks += '<span class="margin-1">...</span>';
            }
        }

        if (page > 1) {
            pagerLinks += '<a href="' + getLinkToPage(page - 1) + '" aria-label="Previous page" class="margin-1">«&nbsp;Previous</a>';
        }

        for (var i = startPage; i <= endPage; i++) {
            if (i === page) {
                pagerLinks += '<span class="current-page margin-1">' + i + '</span>';
            } else {
                pagerLinks += '<a href="' + getLinkToPage(i) + '" class="margin-1">' + i + '</a>';
            }
        }

        if (totalResults > (page * resultsPerPage)) {
            pagerLinks += '<a href="' + getLinkToPage(parseInt(page) + 1) + '" aria-label="Next page" class="margin-1">Next&nbsp;»</a>';
        }

        // If there are more pages after the last one displayed, add ellipsis and link to the next page
        if (endPage < Math.ceil(totalResults / resultsPerPage)) {
            if (endPage < Math.ceil(totalResults / resultsPerPage) - 1) {
                pagerLinks += '<span class="margin-1">...</span>';
            }
            // pagerLinks += '<a href="' + getLinkToPage(Math.ceil(totalResults / resultsPerPage)) + '" class="margin-1">' + Math.ceil(totalResults / resultsPerPage) + '</a>';
            pagerLinks += '<a href="' + getLinkToPage(Math.ceil(totalResults / resultsPerPage)) + '" class="margin-1">Last</a>';
        }

        pager.innerHTML = pagerLinks;
    }



    function getLinkToPage(pageNumber) {
        var searchParams = currentURL.searchParams;
        if (searchParams.has("page")) {
            searchParams.set("page", pageNumber);
        } else {
            searchParams.append("page", pageNumber);
        }
        return currentURL.toString();
    }

    function updateResultsVisibility() {
        var resultsHeaderDiv = document.getElementById("results-header");
        if (totalResults === 0) {
            resultsHeaderDiv.style.display = "none"; // Hide the div
        } else {
            resultsHeaderDiv.style.display = "block"; // Show the div
        }
    }

    function sanitize(string) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            "/": '&#x2F;',
        };
        const reg = /[&<>"'/]/ig;
        return string.replace(reg, (match)=>(map[match]));
    }
});
