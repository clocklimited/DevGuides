# CSS

Try to keep stylesheets as easy to read as possible, using line-breaks between rules. Put a space before `{` in rule declarations and a space after `:` in property declarations.

Don’t add a unit to 0 (zero) values. 0px is the same as 0% or 0em, so there is no need to specify the unit.

Use hex colours. These should be in lower-case and shorthand where possible – for example: `#fff`. If you need transparency use rgba() but think about whether you need to supply a fall-back hex colour for browsers which don’t provide support for the alpha channel.

```
.button-action {
  padding: 0;
  color: #eee;
  background-color: #999;
  background-color: rgba(0, 0, 0, 0.8);
}
```

---

## Shorthand

Shorthand can be used for properties that have integer or hex-based values, but background and font values should always be separated out into individual parameters to increase readability, re-usability and decrease the temptation for over-repetition.

**Good use of shorthand:**
```
padding: 2px 10px;
background-image: url("/images/image.jpg");
background-position: 0 50%;
background-repeat: repeat;
```

**Bad use of shorthand**
```
padding-top: 2px;
padding-right: 10px;
padding-bottom: 2px;
padding-left: 10px;
background: url("/images/image.jpg") 0 50% repeat;
```

---

## CSS3

CSS3 is a powerful and lightweight way to reward users for more advanced browsers, but the most basic experience needs to be considered first and foremost.

Embrace progressive enhancement. Use browser vendor prefixes to add rounded corners, shadows, multiple background images, background sizes, gradients, animations (and so on), to embellish a strong base level experience that older browsers can provide.

---

## Vendor Prefixes

To ensure maximum compatibility with all major browsers, use these four vendor prefixes where required – Webkit, Mozilla, Microsoft and Opera.

These should be indented with spaces so the properties line up. This allows for easier multi-line editing in text-editors. The un-prefixed version of the property should always appear last.

```
-webkit-transform: scale(2)
   -moz-transform: scale(2)
    -ms-transform: scale(2)
     -o-transform: scale(2)
        transform: scale(2)
```

Look out for CSS3 properties (such as border radius) which no longer need vendor prefixes. [html5please.us](http://html5please.com/) is a useful resource for checking current levels of browser support.

---

## Web Fonts

When using web fonts, make use of CSS @font-face, utilising the [Fontspring @Font-Face Syntax](http://www.fontspring.com/blog/the-new-bulletproof-font-face-syntax). Fonts can be sourced from legal web font providers such as [Font Squirrel](http://www.fontsquirrel.com/), [Google Web Fonts](http://www.google.com/webfonts), [Typekit](https://typekit.com/) and [MyFonts](http://www.myfonts.com/search/is_webfont:true/webfonts/?view=list).

---

## IE Stylesheets

Internet Explorer hacks should be avoided wherever possible. On the rare occasion that an IE bug can't be avoided or fixed with regular CSS, we move our IE-relevant hacks into their own stylesheet.

Media Queries aren't supported in IE8 and older. When building responsive 'Mobile First' sites, any desktop styles that live within media queries will need to be duplicated into an IE stylesheet, without their containing media query.

Everything that is added to IE stylesheet should be well commented so other developers know exactly what is being affected.

---

## Sensible Selectors

### ID attributes

Don't style IDs with CSS. IDs should be used for anchor link targets and JS hooks only. They have a *much* higher specificity and cannot be used more than once on a page. Using classes allows for easier specificity calculating and give the option that a component *could* be reused - however unlikely.

### Directly Styling Elements

Be cautious about directly styling elements, e.g. `div` or `header`. Will every instance of that element *always* need those styles?

### Over Qualifying Selectors

Writing concise, reusable CSS is very important increasing readability and maintainability, and for reducing file size. Be careful to not over qualify your selectors by chaining too many elements / classes for one rule.

**Bad Selector**
```
header ul.main-navigation li a {
  color: #555
}
```

**Good Selector**
```
.main-navigation a {
  color: #555
}
```

In the 'bad' example, there is no reason to specify that the `.main-navigation` class needs to live in the `<header>` element. What if we need to move it?

We are also saying that the `.main-navigation` class can only ever be applied to a `<ul>`. What if we need to switch to an `<nav>`?

We know that every `<a>` within our `.main-navigation` (which is a list) will be located inside an `<li>` – it would be invalid if it weren't. This means we don't need to specify `li a` in our selector, we can simply use `a`.

Think about ways you can reduce the number of elements in your selectors to increase performance and decrease file size.

---

## Code Commenting

Within well organised files, code comments are invaluable to help developers navigate through projects and complete their work.

CSS files should have a title at the top, describing the file's purpose.

```
/*
 * TYPOGRAPHY
 * ==========
 * This file forms a basic typographical reset,
 * which normalises styles across all browsers.
 *
 * 1. Base styles
 * 2. Headings
 * 3. Links
 */
```

Each section of the file should be grouped according to content and relevance, and titles should be used to clearly identify what a group of styles is for. Within these, sub-headers can be used to identify certain related content styles.

```
/*
 * 2. HEADINGS
 * ===========
 */

h1 {
  font-weight: bold;
}

/*
 * LINKS WITHIN HEADINGS
 * Ensure correct styles are applied when
 * links appear within headings.
 */

h1 {
  color: #c0ffee;
}
```

---

## Accessibility

*This section need explanations and further detail*

* Test navigation without mouse
* Don't use display: none; for image replacement
* Think carefully any time display: none; is used

