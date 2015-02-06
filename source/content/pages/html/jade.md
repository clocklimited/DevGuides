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

For a good introduction to Jade, read the [Language Reference](http://jade-lang.com//reference) section of the [official Jade documentation](http://jade-lang.com/).

---

## Basic Syntax

Jade follows a simple pattern


---

## Formatting

Be aware that Jade is a whitespace significant language. This means that sometimes it is essential to leave spaces at the end of lines. Be sure that these don't get stripped by your text editor.

When adding inline elements within other elements, spacing can become confusing. In the following example, `<em>emphasised text<em>` is being added mid-sentence. This means a trailing space is needed after the word 'with', and we need a double space before 'in' to ensure space after the `<em>`.

```jade
p This is a sentence with 
  em emphasised text
  |  in the middle.
```

---

HTML which has been compiled using Jade is often minified, with all unnecessary whitespace stripped. This can occasionally lead to confusion when styling consecutive elements using `display: inline-block;`, as spacing between elements is affected by the presence of, or lack of, HTML whitespace.


---

TO WRITE:

* Although Jade can do complex logic, do in JS and only use simple loops/conditionals where necessary