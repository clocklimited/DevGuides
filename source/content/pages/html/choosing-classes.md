# Choosing Classes

Class names should *always* be written as lowercase and hyphenated. They should also be written with readability in mind. It's better to have longer memorable classnames, than indecipherable shorthands.

When deciding on class names, favour names which don’t directly describe an element’s appearance: `<a class="button-primary">` is a better choice than `<a class="big-blue-button">`, especially when the time comes to redesign the site.

**Good Class Names**
```markup
class="main-header"
class="site-title"
class="widget-sidebar"
```

**Bad Class Names**
```markup
class="hdr"
class="siteTitle"
class="wg_sb"
```

---

## What about IDs?

Avoid using id attributes in your HTML, unless they are being used for linking (using a fragment identifier). They should never be used as a CSS hook as they add too much specificity to that particular element’s styles.

Further reading: [CSS Wizardry – When using IDs can be a pain in the class](http://csswizardry.com/2011/09/when-using-ids-can-be-a-pain-in-the-class)

---

## JavaScript Classes

When adding JavaScript functionality to your project, avoid targeting existing classes with your JS. Instead add a class with a `js-` prefix to the element you are targeting. This separates style from functionality and allows for the classes to be moved or renamed independently if needed. It also allows you to choose class names which more accurately describe what is intended.

```markup
<button class="btn-primary js-btn-hide">Hide Me!<button>
<style>
  .btn-primary {
    color: blue;
  }
</style>
<script>
  $('.js-btn-hide').hide()
</script>
```

---

## BEM Naming Convention

Make use of the BEM (Block, Element, Modifier) naming convention wherever possible. BEM is designed to help recognise, organise and convey patterns and modules within code.

*Note: Whilst the BEM naming convention is incredibly useful, it doesn’t work in every situation. Use your best judgement to decide on a module-by-module basis whether BEM fits.*

### Structure

#### Blocks
Think of “blocks” as sections of a layout – widgets, headers, pagination etc. Blocks generally have classes which match their chosen name.

```markup
<div class="pagination">
```

#### Elements

Each block may be make up of multiple “elements” – pagination may be made up of a summary paragraph, and a list of links to other pages. When adding classes to these elements, reference the parent block, then use a double underscore followed by the element name.

```markup
<ul class="pagination__link">
```

#### Modifiers

“Modifiers” are used whenever there are multiple variations of a block or element. When adding classes to a modified block or element, reference its original class and use a double hyphen to add the modifier name.

```markup
<ul class="pagination__link pagination__link--vertical">
```

### Recognising Code

Although this seems long-winded, it has the advantage of making code more recognisable and organisable. The following example shows two unrelated blocks of HTML – a person and a clock. Although both of these blocks have hands and faces, they are in no way related.

**Without BEM**
```markup
<div class="person">
  <div class="hand"></div>
  <div class="face"></div>
</div>

<div class="clock">
  <div class="hand"></div>
  <div class="face"></div>
</div>
```

If you come across one of these hand or face elements out of context, or referenced in your CSS, it would be hard to tell which type of block you were looking at.

**With BEM**
```markup
<div class="person">
  <div class="person__hand"></div>
  <div class="person__face"></div>
</div>

<div class="clock">
  <div class="clock__hand"></div>
  <div class="clock__face"></div>
</div>
```

Once you apply the BEM convention, each element becomes recognisable, even in isolation.

### BEM and CSS

BEM Benefits the CSS in terms of easier specificity management. In the following examples, notice that with BEM, none of the selectors need to be qualified with a parent. This allows for easier overriding of styles later in the file without needing to continually fight with specificity. There is also no chance of styling changes to `.face` or `.hand` in isolation unexpectedly affecting elements in separate modules.

**Without BEM**
```css
.person {}
.person .hand {}
.person .face {}

.clock {}
.clock .hand {}
.clock .face {}
```

**With BEM**
```css
.person {}
.person__hand {}
.person__face {}

.clock {}
.clock__hand {}
.clock__face {}
```



Further reading: [MindBEMding – getting your head ’round BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

