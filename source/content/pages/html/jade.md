# Jade

> Jade – robust, elegant, feature rich template engine for nodejs.
>
> <small><cite>[jade-lang.com](http://jade-lang.com)</cite></small>

Jade is a high performance templating engine implemented with JavaScript for node. It allows HTML to be written in an incredibly minimal format, relying on indentation and nesting to create document structure. This saves a lot of time and effort. It also helps negate issues with missing closing tags.

**Basic Jade Document:**
```
doctype
html
  head
    meta(charset='utf-8')
    title My Site
  body
    .wrapper
      h1 Jade Example
      p Mauris iaculis porttitor posuere praesent id metus.
      img(src='image.jpg', alt='Image Description')
```

**Compiled HTML Document:**
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Site</title>
  </head>
  <body>
    <div class="wrapper">
      <h1>Jade Example</h1>
      <p>Mauris iaculis porttitor posuere praesent id metus.</p>
      <img src="image.jpg" alt="Image Description" />
    </div>
  </body>
</html>
```

---

## Features

Jade adds many features which ease HTML development, including mixins, includes, variables, iteration and conditionals.

For a good introduction to Jade, read the [Language Reference](http://jade-lang.com/reference) section of the [official Jade documentation](http://jade-lang.com/).

---

## Basic Syntax

Jade follows a simple pattern when writing basic HTML elements. The element name is always at the start of each line, followed by classes (identified with a CSS-style leading `.`). Any attributes are added next, comma separated within parenthesis. If an element contains text content, this comes last, preceded by a space.

```jade
//- Pseudo Example
element.class-name(attribute='value') Text Content

//- Real-world Examples
p Paragraph text

header.main-header Text

a(href='/') Link

textarea.control(name='message', rows='6') Example Value
```

Elements can be indented to signify the HTML nesting structure.

```jade
ul
  li
    a(href='/') Link Text
  li
    a(href='/') Link Text
```

There are a few ways to include inline elements within others.

```jade
//- Inline elements with Inline Tag Interpolation
p Example Text which is #[br] split across lines.

//- Multi-line content with continuing text
p Example Text which is
  br
  | split across lines.

//- Alternate example
p
  | Example Text which is
  br
  | split across lines.
```

Elements which need multi-line content layout can use the `.` notation.

```jade
script.
  var foo = bar
  console.log(foo)

p.
  Example text which is split across lines for code readability 
  but will still render as one line in the HTML.
```

Inline nested tags can reduce space when nesting multiple elements, but take care to not over-use this feature as it can reduce readability.

```jade
ul
  li: a(href='#') Link
  li: a(href='#') Link
```

---

## Trailing Whitespace

Be aware that Jade is a whitespace significant language. This means that sometimes it is essential to leave spaces at the end of lines. Be sure that these don't get stripped by your text editor.

When adding inline elements within other elements, spacing can become confusing. In the following example, `<em>emphasised text<em>` is being added mid-sentence. This means a trailing space is needed after the word 'with', and we need a double space before 'in' to ensure space after the `<em>`.

```jade
p This is a sentence with 
  em emphasised text
  |  in the middle.
```

Since version 1.0, Jade has also added support for Inline Tag Interpolation, which allows you to write additional HTML elements min-sentence.

```jade
p A sentence with an #[a(href='/') anchor] in the middle.
```

Whilst this helps negate the trailing whitespace issues, it is important to understand them when maintaining legacy code.

---

## Minified HTML

HTML which has been compiled using Jade is often minified, with all unnecessary whitespace stripped. This can occasionally lead to confusion when styling consecutive elements using `display: inline-block;`, as spacing between elements is affected by the presence of, or lack of, HTML whitespace.

---

## Versionator Paths

We use [Versionator](https://github.com/serby/versionator) to cache-bust our static assets. Review the [Versionator page](/documents/versionator) for more information on how to use this in Jade.


---

TO WRITE:

* Although Jade can do complex logic, do in JS and only use simple loops/conditionals where necessary
