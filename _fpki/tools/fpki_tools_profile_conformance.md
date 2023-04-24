---
layout: page
title: GSA Certificate Profile Conformance Tool
collection: fpki
permalink: /fpki/tools/cpct/
sticky_sidenav: true
sidenav: fpkitools

subnav:
    - text: Accessing the CPCT Application
      href: '#accessing-the-cpct-application'
    - text: Step-by-step Instructions
      href: '#step-by-step-instructions'
    - text: Resources
      href: '#resources'
---

**Last Update**: November 30, 2022

The Certificate Profile Conformance Tool (CPCT) is an application that supports FPKI annual reviews and compliance by analyzing public X.509 certificates for conformance to a specified FPKI profile:

- Common Policy SSP Program
- FPKI/Federal Bridge
- PIV-Interoperable (PIV-I)

CPCT use can enhance detection of certificate profile issues during FPKI development and maintenance phases.

In conjunction with the [Card Conformance Tool (CCT)]({{site.baseurl}}/fpki/tools/cct), the CPCT Tool enables FPKI stakeholders to perform remote testing. To request an official report on your CPCT and CCT results, fill out the [Annual PIV Credential Issuer (PCI) Testing Application Form](https://www.idmanagement.gov/docs/fips201ep-pcitestform.pdf){:target="_blank"}{:rel="noopener noreferrer"} and send it with outputs and testing artifacts to fips201ep at gsa.gov.

# Accessing the CPCT Application

To better serve the FPKI community, the CPCT was transitioned from an online application to an application that is hosted and run from the user’s workstation. Users can now access the CPCT application directly from their local hard drive using Docker Desktop, as indicated in the instructions below. It is a one-time download that users can bookmark for future use.

{% include alert-warning.html heading="Note" content="Users who do not possess Administrative Privileges for their device will require IT support from within their organization to perform the Docker Desktop download and subsequent install." %}

{% include alert-info.html heading="Attention:" content="Agencies may need to obtain a license for Docker Desktop for each employee or contractor using the application. Appropriate agency personnel should review the information on the following page and make a determination: https://www.docker.com/pricing/faq/#subscriptionandlicensing" %}

# Step-by-step Instructions

{% include alert-warning.html heading="Note" content="If you are an existing user of the CPCT Tool and have not used it in a while or you were sent here to reinstall the CPCT Tool, we advise that you first remove the previously installed Docker CPCT Tool container and image from Docker Desktop before downloading and installing a new version of the CPCT Tool." %}


1. Go to [Docker Desktop](https://www.docker.com). Download and install the version compatible with your device (MacOS, Windows or Linux).

    <img src="{{site.baseurl}}/assets/fpki/tools/docker-website.png" alt="Docker.com Website" style="padding-left:30px;">
    <br><br>

2. Once Docker Desktop has been installed successfully, it will continue to run in the background on most systems. If you see that Docker is not running, please make sure it is running before installing the CPCT Tool in the next step.

    <img src="{{site.baseurl}}/assets/fpki/tools/docker_desktop.png" alt="Docker Desktop" style="padding-left:30px;">
    <br><br>  


3.  Next, click the link below or copy and paste it into your web browser to visit the releases page.

    - Link: [https://github.com/GSA/cpct-tool/releases](https://github.com/GSA/cpct-tool/releases){:target="_blank"}{:rel="noopener noreferrer"}
      <br><br>

4. To download the latest release, click the **Source code (zip)** link at the bottom of the page, then save to download the zip file.

    <img src="{{site.baseurl}}/assets/fpki/tools/cpct-source.png" alt="Source Zip" style="padding-left:30px;">
    <br><br>

5. Go to the location you downloaded the cpct-tool-1.x.x.zip (your version number may be different) file and copy it to your Desktop. Then, extract the folder to your Desktop for ease of use.

    <img src="{{site.baseurl}}/assets/fpki/tools/cpct-tool-zip-download.png" alt="Zipped CPCT Folder" style="padding-left:30px;">
    <br><br>

6. Open the `cpct-tool-1.x.x` folder and  double click the `start.exe` file. Refer to the screenshot below.

    <img src="{{site.baseurl}}/assets/fpki/tools/cpct-unzipped-files.png" alt="CPCT Folder Unzipped" style="padding-left:30px;">
    <br><br>

7. The following window may appear, based on the device’s user settings. Click on **"More info"**.

    <img src="{{site.baseurl}}/assets/fpki/tools/more-info.png" alt="More Info" style="padding-left:30px;">
    <br><br>

8. The following window will then appear on your screen. Select the **"Run anyway"** icon.

    <img src="{{site.baseurl}}/assets/fpki/tools/run-anyway.png" alt="Run Anyway" style="padding-left:30px;">
    <br><br>

9. A Command line prompt window will open and ask whether you would like to continue, as shown in the screenshot below.

    <img src="{{site.baseurl}}/assets/fpki/tools/start_install.png" alt="Start of Install" style="padding-left:30px;">
    <br><br>

10. If you are ready for the CPCT to build, type “y” and hit enter at the blinking cursor. Allow the program to fully execute the build of the CPCT image in Docker Desktop. Once complete, the status message shown below will appear.

    <img src="{{site.baseurl}}/assets/fpki/tools/end_install.png" alt="End of Install" style="padding-left:30px;">
    <br><br>

11. To confirm that your image is running, check Docker Desktop to make sure you see the `cpct-tool:latest` running

    <img src="{{site.baseurl}}/assets/fpki/tools/cpct-tool-docker.png" alt="cpct-tool:latest running" style="padding-left:30px;">
    <br><br>

12. Arrive at the CPCT landing page. Use the CPCT application as in the past. Remember to bookmark this page for future use.

    <img src="{{site.baseurl}}/assets/fpki/tools/cpct_in_browser.png" alt="The CPCT Tool Running Locally" style="padding-left:30px;">
    <br><br>

# Resources

Links to the CPCT Tool and associated support pages:

- GitHub link:  [https://github.com/GSA/cpct-tool](https://github.com/GSA/cpct-tool){:target="_blank"}{:rel="noopener noreferrer"}
- GitHub Releases page:  [https://github.com/GSA/cpct-tool/releases](https://github.com/GSA/cpct-tool/releases){:target="_blank"}{:rel="noopener noreferrer"}
- GitHub Wiki page:  [https://github.com/GSA/cpct-tool/wiki](https://github.com/GSA/cpct-tool/wiki){:target="_blank"}{:rel="noopener noreferrer"}
- GitHub Issues page:  [https://github.com/GSA/cpct-tool/issues](https://github.com/GSA/cpct-tool/issues){:target="_blank"}{:rel="noopener noreferrer"}
