# Stylus

> Expressive, robust, feature-rich CSS language built for node.js
>
> <cite>[learnboost.github.io/stylus/](http://learnboost.github.io/stylus/)</cite>

Stylus is a CSS preprocessor, similar to LESS and Sass. It features the most minimal syntax of these three and has huge benefits over regular CSS in terms of speed of writing and dynamic features.

The [official documentation](http://learnboost.github.io/stylus/) does a good job of listing Stylus' many features, and you can play with Stylus in the browser using [CodePen](http://codepen.io/) or [JS Bin](http://jsbin.com/).

---

## Why Stylus?

Our Node.js stack is well suited to work with Stylus, as we can achieve better levels of integration than with any other CSS pre-processor using its JavaScript API. Stylus itself is a very powerful language and matches and exceeds the feature-sets of the others.

We use a number of additional middleware packages by default, to further enhance the Stylus experience, including:

* **[Autoprefixer Stylus](https://github.com/jenius/autoprefixer-stylus)** – A Stylus version of the popular [Autoprefixer](https://github.com/postcss/autoprefixer) plugin which parses CSS and adds vendor prefixes to CSS rules using values from [Can I Use](http://caniuse.com/).
* **[Stylus Mixins](https://github.com/jackbrewer/stylus-mixins)** – A collection of Stylus mixins, used to mimic, improve, and extend the functionality of [Nib](https://github.com/tj/nib).
* **[Responsive Grid](https://github.com/clocklimited/responsive-grid)** – A Stylus plugin that provides a simple grid system. Fully responsive, with modifiers available that provide extra features, and great browser support.
* **[Clean CSS](https://github.com/jakubpawlowicz/clean-css)** – A fast and efficient Node.js library for minifying CSS files.
* **[Versionator](https://github.com/serby/versionator)** – Cache-busting middleware for all linked image/font assets.











---
* Warnings - over-nesting, extending within media queries, extend - a fools gold

## General Syntax

When writing Stylus, use the same guidelines as when writing CSS. However there are a few major differences to keep in mind which are outlined in this document.

Whilst you can write Stylus as if it were standard CSS, we prefer to remove all unnecessary punctuation and repetition.

**CSS Syntax**
```css
.class1, .class2 {
  position: relative;
  color: blue;
}

.class1:hover, .class2:hover {
  color: red;
}
```

**Minimal Stylus Syntax**
```stylus
.class1
.class2
  position relative
  color blue

  &:hover
    color red
```

There are some rare exceptions to the multiple selectors on new lines rule. These mainly occur in the base stylesheet. Use your judgement to decide if selectors benefit from being on one line:

```stylus
h1, h2, h3, h4, h5, h6
  font-weight bold
```

---

## Formatting

While we always use double quotes for standard CSS, we use single quotes in Stylus. These are quicker and easier to write, and automatically compiled to double quotes when the CSS is generated.

---

## Nesting

One of the most important things to understand when writing CSS through a pre-processor, is how your final compiled CSS will look. What saves loads of time in development, can produce bloated slow code that will forever degrade the final performance of your product. This is related to the "Over Qualifying Selectors" section of the CSS Guidelines.


**Too much nesting**
```scss
.wrapper
  .main-header
    ul.main-navigation
    width 100%
    li
      float left
      a
        color #555
        &:hover
          color #000
```

**Compiles to**
```
.wrapper .main-header ul.main-navigation {
  width: 100%;
}
.wrapper .main-header ul.main-navigation li {
  float: left;
}
.wrapper .main-header ul.main-navigation li a {
  color: #555;
}
.wrapper .main-header ul.main-navigation li a:hover {
  color: #000;
}
```

**Improved Nesting**
```
.main-navigation
  width 100%
  li
    float left
  a
    color #555
    &:hover
    color #000
```

**Compiles to:**
```
.main-navigation ul {
  width: 100%;
}
.main-navigation li {
  float: left;
}
.main-navigation a {
  color: #555;
}
.main-navigation a:hover {
  color: #000;
}
```

These achieve the same effect, but the first example takes 36% more code to do the same thing. That is a lot of extra code for such a small example - imagine that same effect across an entire project!

Be aware of indentation levels and be sure that the things you are nesting definitely need to be nested.

Notice in the second example that the `li` styles aren’t nested inside the `ul` styles, and the a styles aren’t nested inside the `li` styles. We can do this with confidence, as we know that all links within `.main-navigation` should be within `li` elements, which themselves will live inside a list element. Our CSS doesn’t need to know this.

Also notice that we didn’t need to tell our CSS that the .main-navigation appears within the `.main-header` or the `.wrapper` element. It will be styled the same regardless.

---

