# Run IDManagement.gov Locally

IDManagement.gov is open-source, the development of this site exists in an open and transparent, the  Federal Identity, Credential, and Access Management (FICAM) community incouraged to contribute their thoughts and ideas. To do so, IDManagement.gov can be downloaded, and ran locally for development of new content, then those changes submitted via a Pull Request (PR) through GitHub. Please, first to communicate with someone who helps manage the IDManagement.gov website before you start the process of contibuting. 

## Prerequisite
Before running IDManagement.gov locally, there are a few requirements needed on your machine to run the site locally. 
 - Permission to access and change files on your machine, your machine is company issued, you may require additional help from your IT department.
 - Access to the Command Line and permissions to run commands:
   - `CMD prompt` - for Windows.
   - `Powershell` - for Windows.
   - `Terminal` - if you are on Mac or Linux. 
   - [GitBash](https://git-scm.com/downloads)  - If Git is installed locally.
 - [Git](https://git-scm.com/downloads) - To manage files and versioning. 
 - [Ruby](https://www.ruby-lang.org/en/downloads/) - the programming environment for the Ruby programming language, this can be obtained from [ruby-lang.org](https://www.ruby-lang.org/en/downloads/).
 - [Node.js](https://nodejs.org/en/download) for support and dependencies.
   - NPM - if installed separately from Node.js.

### Editors:

There are many editor, and those that may be required by your organization, but any code editor that can do basic code editing will do, below is a list of common code editors:

   - [VS Code](https://code.visualstudio.com/download)
   - [Sublime](https://www.sublimetext.com/download)
   - [Netbeans](https://netbeans.apache.org) 
   - [Eclipse](https://eclipseide.org/)

Once all of these requirements are present on your machine, you can proceed to the download or clone stage. 

## Download or Clone the Repo

To start local development of IDManagement.gov, first download the contents of this repo via the Git repository: 

- [https://github.com/GSA/idmanagement.gov](https://github.com/GSA/idmanagement.gov)

Click on the big green "<> Code" button or clone the repo if you are familiar with the using Git on the command line.

## Building IDManagement.gov
Once the repo of the site is downloaded, change to that directory on the command line and run the following command: 

```shell
npm run local

```

This should download all of the required Gems and Nodjs packages needed by to run the site locally.

## Running the site Locally

Once the `npm run local` command is complete, run the following command to launch IDManagement.gov locally on port `4000`. 

```shell
npm run start
```
This should go through the build process, once complete, it will show the address used to connect locally. 

## GitHub Codespaces

The IDManagement.gov repo can also be developed in [GitHub Codespaces](https://github.com/features/codespaces):

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
This should launch the site on a local port `4000` within your codespace note, the performance and browsing may be slower than local development, if this becomes an issue, I (cjb) advise using local development instead.




