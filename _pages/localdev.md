---
layout: page
title: Local Development of IDManagement.gov
permalink: /localdev/
sidenav: policy
sticky_sidenav: true
---

**IDManagement.gov** is open-source, the development of this site exists in an open and transparent format where the Federal Identity, Credential, and Access Management (FICAM) community is encouraged to contribute their thoughts and ideas. To do so, the IDManagement.gov repo can be downloaded to your machine and ran locally to development new content or submit changes to existing content. Once your new content or change is complete, a Pull Request (PR) can be submitted through GitHub for review, and if approved, inclusion on the **IDManagement.gov** website. 

Contributors are first encourages to establish communication with a department or agency that governs or helps manage the **IDManagement.gov** website, before you starting the process of contributing new content or changes, see the contact list below. 

- ICAM or HSPD-12 policies or programs - [icam@gsa.gov](mailto:icam@gsa.gov){:class="usa-link"}
- FIPS 201 product testing or approved products - [fips201ep@gsa.gov](mailto:fips201ep@gsa.gov){:class="usa-link"}
- Federal PKI policies, programs, or operations- [fpki@gsa.gov](mailto:fpki@gsa.gov){:class="usa-link"}

## Prerequisite
Before running **IDManagement.gov** locally, there are a few requirements needed on your machine to run the site locally. 
 - Permission to access and change files on your machine, if your machine is company issued, you may require additional help from your company's IT department.
 - Access to the Command Line and permissions to run commands:
   - `CMD prompt` - for Windows.
   - `Powershell` - for Windows.
   - `Terminal` - if you are on Mac or Linux. 
   - [GitBash](https://git-scm.com/downloads){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}  - If Git is installed locally.
 - [Git](https://git-scm.com/downloads){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - To manage files and versioning. 
 - [Ruby](https://www.ruby-lang.org/en/downloads/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - the programming environment for the Ruby programming language, this can be obtained from [ruby-lang.org](https://www.ruby-lang.org/en/downloads/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}.
 - [Node.js](https://nodejs.org/en/download){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} for support and dependencies.
   - NPM - if installed separately from Node.js.

### Editors:

There are many editors to choose from, including those that may be required by your organization to do work, but any code editor that can do basic code editing can be used. Below is a list of common code editors that can be downloaded and used:

   - [VS Code](https://code.visualstudio.com/download){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
   - [Sublime](https://www.sublimetext.com/download){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
   - [Netbeans](https://netbeans.apache.org){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} 
   - [Eclipse](https://eclipseide.org/){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}


## Next 
Once all of these requirements are present on your machine, you can proceed to the download or clone stage. 

## Download or Clone the Repo

To start local development of IDManagement.gov, first download the contents of this repo via the Git repository: 

- [https://github.com/GSA/idmanagement.gov](https://github.com/GSA/idmanagement.gov){:rel="noopener noreferrer"}{:class="usa-link"}

Click on the big green `<> Code`{:style="background-color: ##29903b;color:#FFFFFF;padding-left:4px;padding-right:4px;"} button or clone the repo if you are familiar with the using Git on the command line.

## Building IDManagement.gov locally
Once the repo of the site is downloaded, change to that directory on the command line and run the following command: 

<style>
  pre, language-plaintext, language-shell {
    background-color: #c0c0c0;
    padding: 5px;
    padding-left: 10px;
    border-radius: 10px;
  }
  .language-plaintext, .language-shell {
    background-color: #c0c0c0;
    padding: 2px;
    border-radius: 5px;
  }
</style>

```shell
npm run local
```

This should download all of the required Gems and Nodjs packages needed by to run the site locally.

## Running the site locally

Once the `npm run local` command is complete, run the following command to launch **IDManagement.gov** locally on port `4000`. 

```shell
npm run start
```
This should go through the build process, once complete, go to **https://localhost:4000** to connect to the site locally. Then open up the code for the site in your editor of choice to make changes, the site should live reload the page to show any changes and updates you make.  

## GitHub Codespaces

The IDManagement.gov repo can also be developed in [GitHub Codespaces](https://github.com/features/codespaces){:target="_blank"}{:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}:

- Open IDManagement.gov in a codespace, wait for it to set up.
- Once set up, on the command line run the following commands:

First: 
```shell
npm run local
```
Then: 
```shell
npm run start
```
This should launch the site on a local port `4000` within your codespace. Note, the performance and browsing may be slower than local development, if this becomes an issue, use local development instead.




