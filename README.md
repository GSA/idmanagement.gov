<!--
  Federalist recommends you use Continuous Integration to automatically test
  and validate any new changes to your site. CircleCI is free for open source
  projcets. You should replace this badge with your own.

  https://circleci.com/
-->
[![CircleCI](https://circleci.com/gh/GSA/ficam-playbooks.svg?style=svg)](https://circleci.com/gh/GSA/ficam-playbooks)

This work is led by the GSA Identity and Trusted Access Division FICAM Program in coordination with the ICAM Subcommittee of the Federal CIO Council.

# FICAM Playbooks
This repository is a governmentwide collaboration. The content is advancing the maturity of Federal Identity, Credential, and Access Management systems which was previously envisioned in the FICAM Roadmap and Implementation Guidance v2.0.

Additional repositories are under development for contributors to share ICAM implementation guides, code, reference implementations, and solutions.

## General Practices
This content is Vendor neutral. Marketing materials for Commercial Products should not be submitted. If you would like to contribute a page or content which includes Commercial Products and a specific references for development and engineering, please review the Commercial Product trademark or copyright guides from the Product Vendor and reference those guides in your Pull Request.  

## Plain Language
Contributors should consider the audience when submitting content. Plain language benefits a broad audience. Review your proposed content for use of acronyms and specialized jargon before submitting.

## How to Contribute
For information on how to contribute to the site, visit the Contribute page [here](/_pages/contribute.md/).

Direct changes and line edits to the content may be submitted by clicking 'Edit this page'. You do not need to install any software to submit content. You can use GitHub's in-browser editor to edit files and submit a request for your changes to be merged.

### Running the locally application
With locally installed node and ruby
```
$ npm install
$ bundle install
$ npm start 
```

OR

`$ bundle exec jekyll serve`

To build but not serve the site, run 

`npm run build or bundle exec jekyll build`

### With Docker
```
$ docker-compose run node npm install
$ docker-compose build
$ docker-compose up
```
To build but not serve the site, run:

`docker-compose run ruby bundle exec jekyll build`

## Public domain

This project is in the worldwide [public domain](/_pages/license.md/). 

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.

## Special Thanks
This site is based on GitHub Pages and Jekyll templates. 

Special thanks to the teams at [18F](https://18f.gsa.gov/), [18F Pages](https://pages.18f.gov/), and [US Digital Services Playbooks](https://playbook.cio.gov/) for their open and transparent model which benefits citizens, government, and technology.
