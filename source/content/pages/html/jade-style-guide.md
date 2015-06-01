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

### Attributes

Attributes should be comma separated. This is backwards compatible with legacy Jade and is more consistent with a JavaScript style.

```jade
//- Bad
input(type='text' name='title' value='')

//- Good
input(type='text', name='title', value='')
```

Elements with many attributes should use a multi-line format to avoid line-length getting too long. It is also easier to spot where variables are being used.

```jade
//- Bad
input(type='text', maxlength='20', placeholder='Example Placeholder', required, value=data.value)

//- Good
input(
  type='text'
  value='Example'
  maxlength='20'
  placeholder='Example Placeholder'
  required
  value=data.value
  )
```

### Classes

Classes should always precede any attributes. This adds consistency and allows for better formatting of multi-line attributes.

```jade
//- Bad
button(type='submit').class Submit

button.class1(type='submit').class2 Submit

input(
  type='text'
  value='Example'
  ).class1.class2

//- Good
button.class1.class2(type='submit') Submit

//- Good
input.class1.class2(
  type='text'
  value='Example'
  )
```

### IDs

IDs should always be written as attributes to better differentiate from classes. This helps reinforce the fact that we shouldn't be using `id`s for styling purposes, only for anchor linking.

```jade
//- Bad
nav.list-unstyled#primary-navigation

//- Good
nav.list-unstyled(id='primary-navigation')
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
Avoid writing any HTML within your Jade. Whilst Jade can handle inline HTML, this adds consistency.

```jade
//- Bad
p Some <em>emphasised</em> text

//- Good
p Some 
  em emphasised
  |  text

p Some #[em emphasised] text
```

### Comments

Use the `//-` prefix for Jade comments as they are not compiled to HTML comments. This allows us to write more inline documentation without bloat in our final HTML.

```markup
//- I’m a comment
```

---

## Variable Formatting

When a using a variable as the content of an element, always leave a space between the element and the variable. Note: this doesn't apply to attributes

```jade
//- Bad
a(href= link)=title

//- Good
a(href=link)= title
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

When using `if`, `case`, `each` etc., use the built-in Jade format (without leading hyphens). The leading hyphens break out into raw JS, and should be avoided in Jade wherever possible.

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

### Iteration

Use the built-in Jade `each` loop when iteration through a collection.

```
//- Bad
//- Good
each value in items
  …

each value, key in items
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
