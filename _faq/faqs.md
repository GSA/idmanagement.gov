---
layout: page
collection: faq
title:  Frequently Asked Questions
permalink: /faq/
sidenav: faq
sticky_sidenav: true

subnav:
  - text: FAQ Section 1
    href: '#faq-1'
  - text: FAQ Section 2
    href: '#faq-2'

---

This is a bordered Accordion from the [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/components/accordion/), they have a
few different styles of Accordion: **Bordered** and **Borderless**.

### When to use the accordion component

- **If users will only need a few specific pieces of content within a page.**
- **If you have only a small space to display a lot of content.**

### Bordered example is listed below:

## FAQ 1

<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="true"
      aria-controls="b-a1"
    >
      First FAQ
    </button>
  </h4>
  <div id="b-a1" class="usa-accordion__content usa-prose">
    <p>
      Congress shall make no law respecting an establishment of religion, or
      prohibiting the free exercise thereof; or abridging the freedom of speech,
      or of the press; or the right of the people peaceably to assemble, and to
      petition the Government for a redress of grievances.
    </p>
  </div>
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="b-a2"
    >
      Second FAQ
    </button>
  </h4>
  <div id="b-a2" class="usa-accordion__content usa-prose">
    <p>
      A well regulated Militia, being necessary to the security of a free State,
      the right of the people to keep and bear Arms, shall not be infringed.
    </p>
    <ul>
      <li>This is a list item</li>
      <li>Another list item</li>
    </ul>
  </div>
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="b-a3"
    >
      Third FAQ
    </button>
  </h4>
  <div id="b-a3" class="usa-accordion__content usa-prose">
    <p>
      No Soldier shall, in time of peace be quartered in any house, without the
      consent of the Owner, nor in time of war, but in a manner to be prescribed
      by law.
    </p>
  </div>
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="b-a4"
    >
      Fourth FAQ
    </button>
  </h4>
  <div id="b-a4" class="usa-accordion__content usa-prose">
    <p>
      The right of the people to be secure in their persons, houses, papers, and
      effects, against unreasonable searches and seizures, shall not be
      violated, and no Warrants shall issue, but upon probable cause, supported
      by Oath or affirmation, and particularly describing the place to be
      searched, and the persons or things to be seized.
    </p>
  </div>
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="b-a5"
    >
      Fifth FAQ
    </button>
  </h4>
  <div id="b-a5" class="usa-accordion__content usa-prose">
    <p>
      No person shall be held to answer for a capital, or otherwise infamous
      crime, unless on a presentment or indictment of a Grand Jury, except in
      cases arising in the land or naval forces, or in the Militia, when in
      actual service in time of War or public danger; nor shall any person be
      subject for the same offence to be twice put in jeopardy of life or limb;
      nor shall be compelled in any criminal case to be a witness against
      himself, nor be deprived of life, liberty, or property, without due
      process of law; nor shall private property be taken for public use,
      without just compensation.
    </p>
  </div>
</div>


### Borderless example is listed below:


## FAQ 2

<div class="usa-accordion">
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="true"
      aria-controls="a1"
    >
      First Amendment
    </button>
  </h4>
  <div id="a1" class="usa-accordion__content usa-prose">
    <p>
      Congress shall make no law respecting an establishment of religion, or
      prohibiting the free exercise thereof; or abridging the freedom of speech,
      or of the press; or the right of the people peaceably to assemble, and to
      petition the Government for a redress of grievances.
    </p>
  </div>
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="a2"
    >
      Second Amendment
    </button>
  </h4>
  <div id="a2" class="usa-accordion__content usa-prose">
    <p>
      A well regulated Militia, being necessary to the security of a free State,
      the right of the people to keep and bear Arms, shall not be infringed.
    </p>
    <ul>
      <li>This is a list item</li>
      <li>Another list item</li>
    </ul>
  </div>
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="a3"
    >
      Third Amendment
    </button>
  </h4>
  <div id="a3" class="usa-accordion__content usa-prose">
    <p>
      No Soldier shall, in time of peace be quartered in any house, without the
      consent of the Owner, nor in time of war, but in a manner to be prescribed
      by law.
    </p>
  </div>
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="a4"
    >
      Fourth Amendment
    </button>
  </h4>
  <div id="a4" class="usa-accordion__content usa-prose">
    <p>
      The right of the people to be secure in their persons, houses, papers, and
      effects, against unreasonable searches and seizures, shall not be
      violated, and no Warrants shall issue, but upon probable cause, supported
      by Oath or affirmation, and particularly describing the place to be
      searched, and the persons or things to be seized.
    </p>
  </div>
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="a5"
    >
      Fifth Amendment
    </button>
  </h4>
  <div id="a5" class="usa-accordion__content usa-prose">
    <p>
      No person shall be held to answer for a capital, or otherwise infamous
      crime, unless on a presentment or indictment of a Grand Jury, except in
      cases arising in the land or naval forces, or in the Militia, when in
      actual service in time of War or public danger; nor shall any person be
      subject for the same offence to be twice put in jeopardy of life or limb;
      nor shall be compelled in any criminal case to be a witness against
      himself, nor be deprived of life, liberty, or property, without due
      process of law; nor shall private property be taken for public use,
      without just compensation.
    </p>
  </div>
</div>