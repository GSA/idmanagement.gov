---
title: Help Us Improve Our Content
layout: page
permalink: /contribute/
sidenav: policy
sticky_sidenav: true

subnav:
  - text: About this Repository
    href: '#about-this-repository'
  - text: Open an Issue
    href: '#open-an-issue'
  - text: Add a Page
    href: '#add-a-page'
  - text: Submit a Page
    href: '#submit-a-page'
  - text: Edit a Page
    href: '#edit-a-page'
---

Thank you for contributing to our development of an open and transparent Federal Identity, Credential, and Access Management (FICAM) website

Everyone has tips and tricks and we want to share these with our colleagues!

To contribute to this site, you can:

- [Open an issue](#open-an-issue) - make a suggestion or correction to the content on this site.
- [Add a new page](#add-a-page) - create a new page to add to this site.
- [Edit an existing page](#edit-a-page) - submit direct changes and line edits to content on this site.

Using GitHub as a first-time user can be overwhelming. An introduction video is available from DigitalGov on YouTube: [Introduction to GitHub](https://youtu.be/uNa9GOtM6NE){:target="_blank"}{:rel="noopener noreferrer"}.

### About This Repository

In the GitHub repository, on the Code tab, you can view the folder structure of this website:

![Code tab]({{site.baseurl}}/assets/img/contribute_code_tab.png)

The following folders contain content and diagrams:

- **/pages** - includes page source files.
- **/_collectionname** - includes pages related to a specific collection. A list of collections is available at xxxx
- **/assets** - includes all diagrams and images, which are available for download and reuse anywhere.

We encourage you to read *LICENSE.md* and *README.md* at the top level of this repository.

### General Practices

This content is vendor-neutral. You should not submit marketing materials for commercial products. If you want to contribute a page or content that includes commercial products and specific references for development and engineering, please review the commercial product trademark or copyright guides from the product vendor and reference those guides in your pull request.

### Plain Language

Consider the audience when you submit content. Plain language benefits a broad audience. Review your proposed content for the use of acronyms and specialized jargon before submitting.

- Make each page brief.
- Use titles to help the user identify jump-off points for information.
- Write short paragraphs.
- Write in plain language and active voice as much as possible.
- Use numbered steps, bullet lists, and graphics.

The following are useful resources for plain language, writing, and style:

- [18F Content Guide](https://content-guide.18f.gov/){:target="_blank"}{:rel="noopener noreferrer"}
- [Federal Plain Language Guidelines](http://www.plainlanguage.gov/){:target="_blank"}{:rel="noopener noreferrer"}

### Thanks

The contributing framework, the licensing framework, and the idea for providing this content as open-source are based on work from [18F](https://18f.gsa.gov/){:target="_blank"}{:rel="noopener noreferrer"}.

## Open an Issue

Issues are the primary method to share information and discussions with the broader community. You can submit issues with:

- *Suggestions* - you want to suggest a change or addition to the content on this site.
- *Corrections* - you identified a problem with content on this site and want to discuss a correction.

To submit an issue, you must first [create a GitHub account](https://github.com/join){:target="_blank"}. We recommend that you [configure two-factor authentication](https://help.github.com/en/articles/configuring-two-factor-authentication){:target="_blank"} for your GitHub account.

1. If you identify an issue while you're reading this guide, in the left navigation, click **Submit Issues Here**.

	GitHub opens, and the **Issues** tab appears. Review the existing issues to determine if someone else has already addressed your topic.

2. In the upper right corner, click the **New issue** button.

3. Enter a title and description with your feedback, and click the **Submit new issue** button.

	Your issue appears in the list on the **Issues** tab.
	
You can track your issue and comments from your colleagues on the **Issues** tab. To receive notifications about activity in this project, in the upper right corner of the page, click **Watch**.

## Add a Page

Before you add a new page, see the list of existing issues. You can add a new issue to propose a topic, or comment on an existing issue. By creating or discussing an issue, you can clarify a problem, identify a solution, and propose a format for a new page. When you’re ready, comment on the related issue that you want to write the new page.

To add a page and open a pull request, you must first [create a GitHub account](https://github.com/join){:target="_blank"}. We recommend that you [configure two-factor authentication](https://help.github.com/en/articles/configuring-two-factor-authentication){:target="_blank"} for your GitHub account.

First you must **create a page**.

1. (Optional) If you want to begin with a template page, navigate to the [template.md](https://github.com/GSA/ficam-management/blob/staging/template.md) file.

	The template file includes some instructions for how to organize a page.

2. In the upper right corner, click the **Raw** button to view the raw code.

3. Copy the content of the template.

4. Navigate to the ficam-management/pages folder, and in the upper right corner, click the **Create new file** button.
	
5. At the top of the screen, enter a name for your new page with the extension **.md**.

	The **.md** extension identifies a markdown file.
	
6. In the body of the file, paste the content that you copied in step 3.

	Use this template as a guideline for your page.

## Submit a Page

1. Scroll to the **Commit new file** box.

	![Commit new file]({{site.baseurl}}/assets/img/contribute_CommitNewFile.png)

2. Enter a name and description for your new page.

3. Select the **Create a new branch for this commit and start a pull request** radio button.

	This allows the file to go through the proper review process before publishing.
	
4. Click the **Propose new file** button.

	The **Open a pull request** page appears.
	
5. If there is a corresponding issue that identifies a need for this page, include the issue number in the description.

6. Click the **Create pull request** button.

	The site administrators receive a notification about the new page, and they can revuew and publish the page.

## Edit a Page

To modify a page and open a pull request, you must first [create a GitHub account](https://github.com/join){:target="_blank"}. We recommend that you [configure two-factor authentication](https://help.github.com/en/articles/configuring-two-factor-authentication){:target="_blank"} for your GitHub account.

1. In the upper right corner of a page you want to modify (like this page), click **Edit this page**.

	The page opens in GitHub.
	
2. In the upper right corner of the page, click the **Edit this file** button.
	
3. GitHub creates a fork of the project in your GitHub account.

	You can make and commit changes in your fork, then open a pull request for these changes.
	
4. Make your desired changes, and scroll to the **Propose file change** box.

5. Enter a name and description for your new page.

6. Click the **Propose file change** button.

	The **Comparing changes** page appears.
	
7. Click the **Create pull request** button.

	The site administrators receive a notification about your changes, and they can review and publish the page.
	
You can track your pull request and comments from your colleagues on the **Pull requests** tab.
