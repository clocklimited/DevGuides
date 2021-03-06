# HTML

Whilst we write our markup primarily using Jade, we still need to remember the rules and ideas which result in high-quality accessible HTML.

Always write your optimal markup before considering any CSS or JavaScript. Writing semantic markup is important. Content ordering and title hierarchy should be thought about and forms and links should all work as expected, whether using a mouse, touch device, keyboard, or screen-reader. It should be possible to use and navigate a site in a logical order, using any of these methods. Also consider how content will be displayed across various screen sizes, as this can have an impact on the intended source order.

---

## HTML5

Try to use as much HTML5 as possible, without relying too heavily on polyfills to force older browsers to work. We currently still support Internet Explorer 8 whenever possible, so we include the HTML5Shiv polyfill to help older browsers recognise them as valid elements. If you are using [Modernizr](http://modernizr.com/), this comes as standard. If not, add this JavaScript snippet to the document head: [HTML5 element Polyfill](https://gist.github.com/jackbrewer/5894623).

HTML5 allows the use of attributes without quotes, but we always add them to increase consistency and readability.

Make use of input types such as email, search, tel, url – these will help present a more useful keyboard layout on touch devices. Any browser incapable of rendering these elements will show a text input. Avoid more complex input types, such as date, color, range etc. until the level of standardisation and browser support is better.

Use of block level links is acceptable (wrapping multiple elements in one anchor element).

---

## Structure

Keep use of nested elements to a minimum. If you can't explain why you need it, get rid of it.

Add an HTML comment to the closing tag of major elements. This will aid navigation of your source and will highlight nesting / indentation errors.

---

## Formatting Text

Avoid writing text in all caps or lowercase. Use CSS to achieve the same effect if required. This makes it easier to change in the future

Use `<strong>` and `<em>` to add emphasis to text. `<b>` and `<i>` should be avoided as they add no semantic weight to the emphasised text.

Paragraphs of text should always be placed in a `<p>` tag. Never use multiple `<br/>` tags to separate lines of text.

`<br/>` tags should only be used for breaking text mid-sentence, for example in an address.

Non-breaking spaces (`&nbsp;`) should be added to text where line-breaks would not be desirable – for example, mid-way through postcodes or brand names. The following examples all use non-breaking spaces: SW1A&nbsp;2AA, 100&nbsp;km, H.&nbsp;G.&nbsp;Wells, Apple&nbsp;OS&nbsp;X.

---

## Lists

Use `<ul>`, `<ol>` and `<dl>` elements for information in list form – think carefully about which is most appropriate.

Ordered and unordered lists should only ever contain `<li>` elements as direct children.

Definition lists contain items which have a title and a description. Titles may have multiple description and a description may have multiple titles. A definition list should only be used for term definitions – glossaries, lexicons and dictionaries.<sup><a class="reference-link" href="#ref-definition-lists"></a></sup>

---

## Tables

Tables should be used for displaying tabular data – nothing else. If you are unsure, think how the same information would look in a spreadsheet. Does it still make sense to be a table?

Ensure all tables contain correct `<thead>`, `<tbody>`, `<th>` elements and scope attributes. If using `<tfoot>`, place it before the `<tbody>`.

---

## Forms

All form fields should have a suitable `<label>` element, even if this will not be visible when styled. Form fields shouldn't rely on a placeholder alone to indicate their intended content. If this is a requirement, ensure that IE9 and lower have a suitable fallback, as they lack placeholder support.

Group sets of inputs in fieldsets, especially groups of radio buttons or checkboxes.

---

## Document Head

Use the HTML5 doctype in all new projects. Within the `<head>` of the document, define the character-set as UTF-8, and we use meta tags to define accurate page titles, descriptions and keywords.

After the meta tags, include relevant stylesheets, leaving any JavaScript to be included later on, before the closing body tag. Tracking and Polyfill JS files are sometimes required in the head.

Add a retina-ready favicon<sup><a class="reference-link" href="#ref-retina-favicon"></a></sup> and simple mobile-friendly information / icons.

Finally, include any extras, such as Open Graph tags, Google Verification Codes, robots.txt, humans.txt etc.

---

## Accessibility

Accessibility is important for everything we produce. Here are some basic ways to ensure our products are accessible.

* Always provide alt text on images.
* Think about using micro-formats where possible – for example addresses and calendar events<sup><a class="reference-link" href="#ref-microformats"></a></sup>.

*[This section needs more information]*

---

## Page Titles

Page titles should follow this format:

**Homepage**
```
<title>Project Name - A short description of the project</title>
```

**Sub-Section Page**
```
<title>Section Name / Project Name</title>
```

**Article Page**
```
<title>Article Name / Section Name / Project Name</title>
```

---

## Validation

We always aim to achieve 100% valid HTML markup. It helps avoid bugs, affects a product's SEO and should be very carefully considered when building a site. Use the [W3C Validator](http://validator.w3.org/) when checking your project.

The Web Developer extension for Firefox or Chrome allows you to easily validate locally running files. There are certain acceptable time when elements will never validate, such as custom meta tags.

---

### References

* <a id="ref-definition-lists" href="http://24ways.org/2007/my-other-christmas-present-is-a-definition-list/">24 Ways – My Other Christmas Present Is A Definition List</a>
* <a id="ref-retina-favicon" href="http://daringfireball.net/2013/01/retina_favicons">Daring Fireball – How to Create Retina-Caliber Favicons</a>
* <a id="ref-microformats" href="http://microformats.org/wiki/hcard">microformats.org – Using the hCard microformat</a>
