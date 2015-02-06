# Jade Style Guide

This document outlines some of the rules we have in place to ensure all Jade written is consistent and optimised for our work flow.

---

## Basic Formatting
Use the most minimal format style possible, unless specified otherwise later in this document. This keeps our Jade easier to scan, and quicker to write.

```jade
//- Bad
div.container
  header(class='main-header')
    a(href='/') Project Title

//- Good
.container
  header.main-header
    a(href='/') Project Title
```

### Classes

Classes should always precede any attributes.

```jade
//- Bad
button(type='submit').class Submit
button.class1(type='submit').class2 Submit

//- Good
button.class1.class2(type='submit') Submit
```

### IDs

IDs should always be written as attributes to better differentiate from classes.

```jade
//- Bad
nav.list-unstyled#primary-navigation

//- Good
nav.list-unstyled(id='primary-navigation')
```

### Attributes

Attributes should be comma separated. This is  backwards compatible with legacy Jade and is more consistent with a JavaScript style.

```jade
//- Bad
input(type='text' name='title' value='')

//- Good
input(type='text', name='title', value='')
```

### Quotes

Always use single quotes. This is consistent with our JavaScript style guide.

```jade
//- Bad
input(type="text", name="title")

//- Good
input(type='text', name='title')
```

### HTML In Jade
Whilst Jade can handle inline HTML, write all HTML as Jade.

```jade
//- Bad
p Some <em>emphasised</em> text

//- Good
p Some 
  em emphasised
  |  text
```

### Comments

Use the `//-` prefix for Jade comments as they are not compiled to HTML comments. This allows us to write more inline documentation without bloat in our final HTML.

```markup
//- I’m a comment
```

---

## Variable Formatting

When a using a variable as the content of an element, always leave a space between the element and the variable.

```jade
//- Bad
h1=title

//- Good
h1= title
```

The `#{variable}` syntax is useful when mixing variables with strings, but isn’t needed when outputting variables on their own.

```jade
//- Bad
h1 #{title}

//- Good
h1= title
h1 Welcome to #{title}.
```

This is also true when using variables to populate attributes.

```jade
//- Bad
a(href='#{link}')

//- Good
a(href=link)
img(alt='A photo of the #{city} skyline.')
```

---


## Logic

When using `if`, `case`, `each` etc., use the built in Jade format (without leading hyphens). The leading hyphens break out into raw JS, and should be avoided in Jade wherever possible.

```jade
//- Bad
- if (selected)
  …
- else
  …

//- Good
if selected
  …
else
  …
```

### Reducing Duplication
Duplicated Jade is a good sign that logic can be refactored. In this example, we've got a simple true/false check, which can be achieved as part of the `selected` attribute.

```jade
//- Bad
if (selected)
  option(value=value, selected='selected')= name
else
  option(value=value)= name

//- Good
option(value=value, selected=selected)= name
```

If `selected` is true, you end up with:

```html
<option value="Example Value" selected>Example Name</option>
```

*Note: HTML isn't fussy about the boolean `selected` or `selected="selected"`*

If `selected` is false, you get:

```html
<option value="Example Value">Example Name</option>
```

Anything more complicated than a boolean check can be achieved with a Ternary operation.

```jade
option(value=value, selected=(selected === 'yes') ? 'selected' : null)
```

---

## JavaScript Formatting

When writing Jade, also try to follow our JavaScript style guide when applicable.

```jade
//- Bad
each i in [1,2,3]
if foo == bar
+baz(a,b,c)

//- Good
each i in [ 1, 2, 3 ]
if foo === bar
+baz(a, b, c)
```

---

## Versionator Paths

All assets should use the `versionPath()` function to wrap any asset referenced within an attribute, with the exception of external assets.

```jade
//- Good
link(rel='stylesheet', href=versionPath('/css/style.css'))
script(src=versionPath('/js/example.js'))
meta(name='msapplication-TileImage', content=versionPath('image.png'))

//- Exception
link(rel='stylesheet', href='http://fonts.googleapis.com/…')

```
