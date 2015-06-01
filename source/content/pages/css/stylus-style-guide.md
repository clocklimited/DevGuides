# Stylus Style Guide

Stylus is flexible when it comes to formatting styles, supporting anything from the CSS syntax, through to a minimal, white-space based format. We always use the minimal format style. This is easier to scan, and quicker to write.

---

## Basic Syntax

Remove all punctuation.

```stylus
// Bad
.element {
  display: block;
}

// Good
.element
  display block
```

Place multiple selectors on new lines to increase legibility. This also eliminates the need for separating commas. There are some exceptions to this rule, which mainly occur in the base style sheets. Use your judgement to decide if selectors benefit from being on one line.

```stylus
// Bad
.element1, .element2
  display block

// Good
.element1
.element2
  display block

// Exception
h1, h2, h3, h4, h5, h6
  font-weight bold
```

Class names should always be lower-case hyphenated.

```stylus
// Bad
.className
.class_name
.classname
  display block

// Good
.class-name
  display block
```

Always use single quotes. This is consistent with our JavaScript style guide.

```stylus
// Good
a[href='http://example.com']
  content 'Link: '
  background url('image.jpg')
  font-family 'Comic Sans', cursive
```
Never style using id attributes. On the rare occasion you ever need to style ids (third-party markup etc), use an attribute selector to keep specificity low.

```stylus
// Bad
#element
  display block

// Exception
[id='element']
  display block
```

---

## Parent/Root Reference

Use the `&` parent reference to reduce duplication of selectors.

```stylus
// Bad
.element
  display block

.element:hover
  font-weight bold

// Good
.element
  display block

  &:hover
    font-weight bold
```

```stylus
// Bad
.element
  background-image url('bg.png')

.svg .element
  background-image url('bg.svg')

// Good
.element
  background-image url('bg.png')

  .svg &
    background-image url('bg.svg')
```

When using combinator selectors, always use the parent reference to reduce duplication, but also to allow for additional future styles to be added without duplication or refactoring.

```stylus
// Bad
.element + .element
  margin-left 10px

// Good
.element
  & + &
    margin-left 10px

// Allows for…
.element
  display block

  & + &
    margin-left 10px
```

```stylus
// Bad
.element1 > .element2
  margin-left 10px

// Good
.element1
  & > .element2
    margin-left 10px

// Allows for…
.element1
  display block

  & > .element2
    margin-left 10px
```

Use the `/` root selector to avoid duplicating declarations.

```stylus
// Bad
.element
  &:hover
  &:focus
    color #000
    background #fff

.is-active
  color #000
  background #fff

// Good
.element
  &:hover
  &:focus
  /.is-active
    color #000
    background #fff
```

---

## Comments

Always use the `//` prefix for Stylus comments. This will not be compiled into
the output CSS and enables us to comment our code in more detail.

```stylus
//
// FILE HEADING
// ============
// Stylus files should always start with a block comment and should give a
// brief overview of its intended contents.
//

//
// SECTIONAL COMMENT
// If a Stylus file is large enough to need dividing, add a sectional comment.
//

// Inline comment, for helpful notes / explanations.
```

If you need a comment to appear in the output CSS, use the following syntax:

```stylus
/*! I appear in CSS */
```

*Note: The `!` will be removed as part of the Stylus compilation, leaving a regular CSS style comment.*
