---
layout: page
title:  FRTC 1.3.3 Rev. G Errata
collection: fips201
permalink: fips201/frtcerrata/
sticky_sidenav: true
sidenav: fips201

---

The information below will be incorporated into the next revision.  Please use these requirements.  Note that Topology Mapping Worksheets are protected so you will not be able to remove rows.

- No updates

Certificate policy and keyPurposeID OIDs are configured one time – at the start of testing.  All 269 test cases are run with those same OIDs configured unless a test case specifically calls for a bogus OID to be substituted.  Systems should be able to handle production and test certificate policy OIDs concurrently.  [See 6.1.1 (c),  “user-initial-policy-set” in RFC 5280](https://tools.ietf.org/html/rfc5280#section-6.1.1){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} for more information.

This page was last updated Tuesday, February 21, 2019.
