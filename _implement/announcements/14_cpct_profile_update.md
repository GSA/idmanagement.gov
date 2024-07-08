---

layout: page
title: CPCT Tool Update:<br>New Certificate Profiles
pubDate: 10/18/2023
removeDate: 10/18/2026
collection: implement
permalink: /implement/announcements/cpct-profile-update/
description: The Certificate Profiles used by the CPCT Tool have updated to Common SSP (v2.5) and FBCA (v3.2). CPCT Tool update required.
category: Active
sticky_sidenav: true
sidenav: fpkiannouncements
      
---

In order to keep this tool up-to-date and using the latest Certificate Profiles, users are required to update any local copies of the CPCT Tool they have previously installed to the latest release of the CPCT Tool (CPCT). First, by removing the old version, then downloading and installing the latest release version: see the download link below.

- [Download the latest CPCT Tool release](https://github.com/GSA/cpct-tool/releases){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

New Certificate Profile updates include:

- (NEW) Common SSP (v2.5) Profiles
- (NEW) FBCA (v3.2) Profiles
- (NEW) Merging of the PIV-I Profiles into the FBCA (v3.2) Profiles.
- PIV-I Profiles v1.2 and v1.3 remain unchanged for legacy and backwards compatibility.

For more information about Profile changes, see: [changelog](https://github.com/GSA/fpkilint/blob/dev/changelog.md){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}.

## CPCT Update Instructions

In order to update the CPCT tool you will need to remove any existing instances of the Docker image, and subsequently download the latest release and run the installer. Please find the following links with more detailed instructions on this update process:

1. [Remove the current Docker image](https://github.com/GSA/cpct-tool/wiki/Removing-Docker-Images){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
2. [Update the CPCT Tool](https://github.com/GSA/cpct-tool/wiki/Updating-the-CPCT-Tool){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
3. [Installing the CPCT Tool](https://github.com/GSA/cpct-tool/wiki/Installing-the-CPCT-Tool){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

## Additional Resources

- [CPCT Tool release page](https://github.com/GSA/cpct-tool/releases){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
- [CPCT Tool Wiki](https://github.com/GSA/cpct-tool/wiki){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
- [Submit a CPCT Tool issue](https://github.com/GSA/cpct-tool/issues){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
- [Certificate Profile Conformance Tool (CPCT) GitHub repo](https://github.com/GSA/fpkilint){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
- [Submit a Certificate Profile Conformance Tool (CPCT) issue](https://github.com/GSA/fpkilint/issues){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

**What's the difference between the CPCT Tool (CPCT) and the Certificate Profile Conformance Tool (CPCT)?**

- The CPCT Tool (CPCT) is a Dockerized version of the Certificate Profile Conformance Tool (CPCT) you install on your computer via Docker Desktop. This is GSA's recommended way to install and use the CPCT Tool
- The Certificate Profile Conformance Tool (CPCT) is the original code of the web hosted version of the tool, which was removed from service on October 10, 2022.

For more information see: [CPCT Tool transition from Cloud.gov]({{site.url}}/implement/announcements/cpct-transition/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

If you have any questions regarding this action please contact: [fpki-help@gsa.gov](mailto:fpki-help@gsa.gov). 
