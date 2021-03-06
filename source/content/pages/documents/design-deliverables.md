# Design Deliverables

Creating a responsive, high resolution project means there is a lot to consider when designing new projects.

Wherever possible, use vector based elements. If rasterized details are needed, design at double size and use a 50% scaled version as a smart object within your page templates. This allows developers to access a retina display optimised version of these elements.

If the project will be using SVG assets in production, ensure these assets are well optimised in terms of the amount of vertices and the amount of shapes they contain. Think about combining shapes and simplifying paths wherever possible.

---

## Creating a Style Guide

A style guide is a very efficient way of visualising the overall theme and detail of a project without being restricted by preset page layouts. They are also incredibly useful for developers as a reference point for all aspects of the project.

As a base, a good style guide will generally include:

* General Typography
* Branding / Colour Palettes
* Form Styles
* Interaction details

### Typography

This is arguably the most important part of the style guide, as typography is the one element which is present throughout the entire project. Make sure to consider:

* Headings, at the most frequent sizes used
* Lists with bullet points / numbers
* Body copy
* Correct margins between elements

### Branding / Colour Palettes

Detail any important branding and supply a list of colours with their hex values.

### Forms

Ensure at least the following items have been designed, including error states and validation messages:

* Regular Text Input
* Multi-line Text Input (Textarea)
* Select Box Dropdowns
* Groups of Radio Buttons
* Groups of Checkboxes
* Single Checkboxes - following the form (T&C Acceptance etc)
* Buttons (Submit / Clear)
* Any bespoke input types (Datepickers etc.)

It is recommended to use the browser default styles for more complex inputs such as select dropdowns, radio buttons and checkboxes.

Ensure hover and focus states have been considered and designed - especially for text inputs and buttons.

### Interaction details

Buttons, links, tabs and other interactive elements all need bespoke design for hover and active (currently being clicked / tapped) states. For accessibility reasons, these are recommended to be more than a subtle colour change.

---

## Choosing Fonts

Use web-fonts wherever possible. This allows for easier dynamic text management and improves accessibility and performance. This is especially important on responsive designs.

Test web-fonts before choosing them for design. Look at live example on windows machines especially to note how well it renders at smaller sizes or when using thin fonts. Most font providers have live preview pages for each font which can be used for testing.

Check web-fonts have a varied enough character set. Free web fonts are often missing common punctuation characters such as ?, £, @, %.

If web-fonts have been used in the design, supply details of where to download or purchase the web font to the developer. Ensure you are aware of the licensing conditions of the font - is it free to use for commercial use, does it require a one off payment, or is it on a paid subscription / pay-per-pageview system.

---

## File Organisation

Once designs receive final sign off, ensure the design PSDs are ready for the development team. One separate file per template type. Layers should be correctly named, grouped and ordered.

An ideal file name will contain the client name (or shortened variation), and template / page type, for example, ClientName-AboutUs.psd. This makes a file easy to search for.

Separate PSDs containing interaction states or other elements should be named similarly, e.g. ClientName-FormFields.psd, ClientName-Widgets.psd.

Supply page templates showing each of the key pages at the most common device breakpoints. These will commonly include:

* Homepage, including Header, Footer, Navigation etc.
* Section Page
* Article
* Gallery
* Generic Page (T&Cs, Legal etc)
* Error Pages

---

## Meta Icons and Images

Templates for all meta icons and images are available to [download from GitHub](https://github.com/jackbrewer/meta-icon-templates).

### Favicon

Favicons should be supplied as PNG files, one at 16px x 16px, and another at 32px x 32px. The development team will convert these into one combined favicon.ico file.

### iOS Homscreen Icons

These appear on a user’s home screen if the project is added as a web-app. This generally consists of a logo or recognisable mark.

### iOS Startup Screens

These appear briefly when a web-app is launched from a device home screen. They should be plain and simple to not further slow the loading of the web-app. They commonly consist of a simple logo on a single colour background. Check with a developer whether these are required on a per-project basis.

### Windows 8 Pinned Tile Icon
This is displayed when a site is bookmarked as a pinned tile on a user's desktop. It is recommended to be a simple logo on a transparent background. Also supply a solid colour to the developer which will be set as the tile background colour.
