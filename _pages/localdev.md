---
layout: page
title: Local Development of IDManagement.gov
permalink: /localdev/
sidenav: policy
sticky_sidenav: true
---

**IDManagement.gov** website is open-source, the development of this site exists in an open and transparent format where the Federal Identity, Credential, and Access Management (FICAM) community is encouraged to contribute their thoughts and ideas. 

Contributors are encourages to first establish communication with a department or agency that governs or helps manage content on **IDManagement.gov**, before starting the process of creating new content or submitting changes, see the contact list below. 

- ICAM or HSPD-12 policies or programs - [icam@gsa.gov](mailto:icam@gsa.gov){:class="usa-link"}
- FIPS 201 product testing or approved products - [fips201ep@gsa.gov](mailto:fips201ep@gsa.gov){:class="usa-link"}
- Federal PKI policies, programs, or operations- [fpki@gsa.gov](mailto:fpki@gsa.gov){:class="usa-link"}

## Prerequisite
Before running **IDManagement.gov** locally, there are a few requirements needed on your machine to run the site locally. 
 - Permission to access and change files on your machine, if your machine is company issued, you may require additional help from your IT department.
 - [Git](https://git-scm.com/downloads){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - to manage files and versioning. 
 - Access to the Command Line and permissions to run commands:
   - `CMD prompt` - for Windows.
   - `Powershell` - for Windows.
   - `Terminal` - for Mac or Linux. 
   - [GitBash](https://git-scm.com/downloads){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}  - If Git is installed locally.
 - [Ruby](https://www.ruby-lang.org/en/downloads/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - the programming environment for the Ruby programming language.
 - [Node.js](https://nodejs.org/en/download){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} for support and dependencies needed to build the site.
   - [NPM](https://www.npmjs.com/) - if installed separately from Node.js (NPM is often installed when Node.js is installed).

### Editors:
There are many editors to choose from, including those that may be required by your organization to do work, but any code editor that can do basic code editing can be used. 

Below is a list of common code editors that can be downloaded and used:

   - [VS Code](https://code.visualstudio.com/download){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
   - [Sublime](https://www.sublimetext.com/download){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
   - [Netbeans](https://netbeans.apache.org){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} 
   - [Eclipse](https://eclipseide.org/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

## Next 
Once all of these requirements are present on your machine, you can proceed to the download or clone stage. 

## Download or Clone the Repo
To dowload the files the [**IDManagement.gov**](https://github.com/GSA/idmanagement.gov/){:target=""}{:usa-link} repo files to your local machine, you have a few options based on your experience working with source control systems like GitHub.

  1. Create a fork of the repo, then download the files from the repo as a .zip file to your local machine.
  2. Use the command line tool **Git** or [GitHub Desktop](https://desktop.github.com/download/){:target=""}{:usa-link} to clone the repo locally.
  3. Use the Git or GitHub integration included in your Code Editor like: VS Code to clone the repo locally. 

On matter which option you use, once you have the files, you can start development locally, run the site locally to view your changes. Then, when read, submit a Pull Request (PR) through GitHub for review. If approved, your submitted updates or changes will be merged into Staging, where it will continue the review process. If your submitted changes require no further edits or update, they will be merged into the live IDManagement.gov website.

## Building the site locally
Once the repo of the site is downloaded, using the command line, change to the directory where you downloaded or cloned the repo files, run the following commands: 

<style>
  /* Style for codeboxes */
  pre {
    background-color: #c0c0c0;
    padding: 5px;
    padding-left: 10px;
    border-radius: 10px;
  }
  /*  Style for highlighted text  */
  .language-plaintext, .language-shell {
    background-color: #c0c0c0;
    padding: 2px;
    border-radius: 5px;
  }
</style>

```shell
npm run local
```

This should download all of the required Gems and Nodjs packages needed by to build and run the site locally.

## Running the site locally

Once the `npm run local` command is finished running, run the following command to run **IDManagement.gov** locally on your machine, on port `4000`. 

```shell
npm run start
```
This should go through the build process, once complete, in a browser, go to **https://localhost:4000** to connect to the website locally. 

## Editing and making changes
While the site is running locally, open up the Code Editor of your choice to make changes to the site. The site should rebuild the site and live reload the page to show any changes or updates you have made.  

## GitHub Codespaces
The IDManagement.gov repo can also be developed in [GitHub Codespaces](https://github.com/features/codespaces){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}:

- Open IDManagement.gov in a codespace, wait for it to finish set up.
- Once set up is complete, on the command line run the following commands:

First: 
```shell
npm run local
```
Then: 
```shell
npm run start
```
This should launch the site on a local port `4000` within your codespace. 
> Note, the performance and browsing may be slower than local development, if this becomes an issue, use local development instead.




