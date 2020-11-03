<!--
  Federalist recommends you use Continuous Integration to automatically test
  and validate any new changes to your site. CircleCI is free for open source
  projcets. You should replace this badge with your own.

  https://circleci.com/
-->
[![CircleCI](https://circleci.com/gh/18F/federalist-uswds-jekyll.svg?style=svg)](https://circleci.com/gh/18F/federalist-uswds-jekyll)

[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=18F/federalist-uswds-jekyll)](https://dependabot.com)

# Federalist + U.S. Web Design System + Jekyll

This [Jekyll theme](https://jekyllrb.com/docs/themes/) is developed using the [U.S. Web Design System v 2.0](https://v2.designsystem.digital.gov) and is focused on providing developers a starter kit and reference implementation for Federalist websites.

This code uses the [Jekyll](https://jekyllrb.com) site engine and built with Ruby. If you prefer to use Javascript, check out [federalist-uswds-gatsby](https://github.com/18F/federalist-uswds-gatsby), which uses [Gatsby](https://gatsbyjs.org) site engine.

This project strives to be compliant with requirements set by [21st Century IDEA Act](https://www.meritalk.com/articles/senate-passes-idea-act/). The standards require that a website or digital service:

- is accessible to individuals with disabilities;
- has a consistent appearance;
- does not duplicate any legacy websites (the legislation also requires agencies to ensure that legacy websites are regularly reviewed, removed, and consolidated);
- has a search function;
- uses an industry standard secure connection;
- “is designed around user needs with data-driven analysis influencing management and development decisions, using qualitative and quantitative data to determine user goals, needs, and behaviors, and continually test the website, web-based form, web-based application, or digital service to ensure that user needs are addressed;”
- allows for user customization; and
- is mobile-friendly.

## Comparison with [uswds-jekyll](https://github.com/18F/uswds-jekyll)

Both start off looking very similar, but differ in what use cases they are best for. Are you:

- Wanting to have a starter template that you can highly customize?
- Comfortable editing HTML and CSS source code?

use federalist-uswds-jekyll (this repository). If you:

- Want to use a theme that you can set and forget
- Are ok with sticking with the general look and feel provided

use uswds-jekyll.

## Key Functionality
This repository contains the following examples and functionality:
 
✅  Publish blog posts, press releases, announcements, etc. To modify this code, check out `blog/index.html`, which manages how the posts are listed. You should then check out `_layouts/post.html` to see how individual posts are structured.

✅ Publish single one-off pages. Instead of creating lots of folders throughout the root directory, you should put single pages in `_pages` folder and change the `permalink` at the top of each page. Use sub-folders only when you really need to.

✅  Publish data (for example: job listings, links, references), you can use the template `_layouts/data.html`. Just create a file in you `_pages` folder with the following options:

```
---
title: Collections Page
layout: data
permalink: /collections
datafile: collections
---
```

The reference to `datafile` referers to the name of the file in `_data/collections.yml` and loops through the values. Feel free to modify this as needed.

✅  There are two different kinds of `pages`, one does not have a side bar navigation, and the other uses `_includes/sidenav.html`. You can enable this option by adding `sidenav: true` to your page front matter.

```
---
title: Document with Sidenav
layout: page
sidenav: true
permalink: /document-with-sidenav
---
```

✅ [Search.gov](https://search.gov) integration - Once you have registered and configured Search.gov for your site by following [these instructions](https://federalist.18f.gov/documentation/search/), add your "affiliate" and "access key" to `_config.yml`. Ex.

```
searchgov:

  # You should not change this.
  endpoint: https://search.usa.gov

  # replace this with your search.gov account
  affiliate: federalist-uswds-example

  # replace with your access key
  access_key: xX1gtb2RcnLbIYkHAcB6IaTRr4ZfN-p16ofcyUebeko=

  # this renders the results within the page instead of sending to user to search.gov
  inline: true
```

The logic for using Search.gov can be found in `_includes/searchgov/form.html` and supports displaying the results inline or sending the user to Search.gov the view the results. This setting defaults to "inline" but can be changed by setting
```
searchgov:
  inline: false
```
in `_config.yml`.

✅ [Digital Analytics Program (DAP)](https://digital.gov/services/dap/) integration - Once you have registered your site with DAP add your "agency" and optionally, `subagency` to `_config.yml` and uncomment the appropriate lines. Ex.

```
dap:
  # agency: your-agency

  # Optional
  # subagency: your-subagency
```

✅ [Google Analytics](https://analytics.google.com/analytics/web/) integration - If you have a Google Analytics account to use, add your "ua" to `_config.yml` and uncomment the appropriate lines. Ex.

```
ga:
  # ua: your-ua
```

## How to edit
- Non-developers should focus on editing markdown content in the `_posts` and `_pages` folder

- We try to keep configuration options to a minimum so you can easily change functionality. You should review `_config.yml` to see the options that are available to you. There are a few values on top that you **need** to change. They refer to the agency name and contact information. The rest of `_config.yml` has a range of more advanced options.

- The contents inside `assets/` folder store your Javascript, SCSS/CSS, images, and other media assets are managed by  [jekyll-assets](https://github.com/envygeeks/jekyll-assets).  Assets are combined, compressed, and automatically available in your theme

- If you look at `package.json` you will see that the `npm run federalist` command that will run when running on the Federalist platform.

- Do not edit files in the `_site/` folder. These files are auto-generated, and any change you make in the folder will be overwritten.

- To edit the look and feel of the site, you need to edit files in `_includes/` folder, which render key components, like the menu, side navigation, and logos.

- `index.html` may not require much editing, depending on how you customize `hero.html` and `highlights.html`.

- `_layouts/` may require the least amount of editing of all the files since they are primarily responsible for printing the content.

- `blog/index.html` can be edited, but be careful. It will impact the pagination system for the posts. If you do edit the file, be prepared to edit `_config.yml`.  For example, you may need go change configurations for [jekyll-paginate-v2](https://github.com/sverrirs/jekyll-paginate-v2)

- `search/index.html` is used by search.gov.

## Getting Started

### Easy mode

#### From Federalist
This will create a copy of this repo in a Github repository of your choice and add it to your Federalist dashboard.

- From [Federalist](https://federalistapp-staging.18f.gov/sites) click the "+ Add Site" button.
- Click the "Use this template" button for the appropriate template
- Follow the instructions

#### From Github
This will create a copy of this repo in a Github repository of your choice but you will need to add it your [Federalist dashbord](https://federalistapp-staging.18f.gov/sites/new).

- Click the "Use this template" button above or [here](https://github.com/18F/federalist-uswds-jekyll/generate).
- Follow the instructions
- Return to [Federalist](https://federalistapp-staging.18f.gov/sites/new) and add the repository.

### Hard mode

#### With `npx` (requires node)
    $ npx degit https://github.com/18F/federalist-uswds-jekyll <destination-folder>
    $ cd <destination-folder>

#### Push to your Github repository
- [Create a new Github repository](https://help.github.com/en/github/getting-started-with-github/create-a-repo).
- Follow the instructions form Github or
```
    $ git init
    $ git symbolic-ref HEAD refs/heads/main
    $ git add . && git commit -m 'Initial commit'
    $ git remote add origin git@github.com:<your-org>/<your-repo>.git
    (Make sure to replace `<your-org>` and `<your-repo>` above with the correct values)
    $ git push -u origin main
```

### Installation for development
    $ git clone https://github.com/18F/federalist-uswds-jekyll
    $ cd federalist-uswds-jekyll

### Running the application

#### With locally installed `node` and `ruby`
    $ npm install
    $ bundle install
    $ npm start 
    OR
    $ bundle exec jekyll serve

To build but not serve the site, run `npm run build` or `bundle exec jekyll build`.

#### With Docker
    $ docker-compose run node npm install
    $ docker-compose build
    $ docker-compose up

To build but not serve the site, run:
```
docker-compose run ruby bundle exec jekyll build
```
.

Note that when built by Federalist, `npm run federalist` is used instead of
`npm run build`.

Open your web browser to [localhost:4000](http://localhost:4000/) to view your
site.

### Testing

#### With locally installed `node` and `ruby`
    $ npm test
    OR
    $ bundle exec htmlproofer _site; npx a11y '_site/**/*.html'

#### With Docker
    $ docker-compose run ruby bundle exec htmlproofer _site; npx a11y '_site/**/*.html'

## Technologies you should be familiarize yourself with

- [Jekyll](https://jekyllrb.com/docs/) - The primary site engine that builds your code and content.
- [Front Matter](https://jekyllrb.com/docs/frontmatter) - The top of each page/post includes keywords within `--` tags. This is meta data that helps Jekyll build the site, but you can also use it to pass custom variables.
- [U.S. Web Design System v 2.0](https://v2.designsystem.digital.gov) 


## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for additional information.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright
> and related rights in the work worldwide are waived through the [CC0 1.0
> Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication.
> By submitting a pull request, you are agreeing to comply with this waiver of
> copyright interest.
