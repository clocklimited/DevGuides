# Versionator

[Versionator](https://github.com/serby/versionator) is a piece of middleware we use to cache-bust static assets. Whenever we serve images, stylesheets, fonts etc. to the browser, we want to ensure the User is getting the very latest version.

To do this, we expose a `versionPath()` function to both Jade and Stylus, which directly wraps the path of any asset – with the exception of external assets with absolute URLs.

---

## Versionator Paths in Jade

The `versionPath()` function should wrap any asset URL referenced within an attribute.

```jade
//- Good
link(rel='stylesheet', href=versionPath('/css/style.css'))

script(src=versionPath('/js/example.js'))

meta(name='msapplication-TileImage', content=versionPath('image.png'))

//- Exception
link(rel='stylesheet', href='http://fonts.googleapis.com/…')

```

---

## Versionator Paths in Stylus

The `versionPath()` function should be used in place of the standard CSS `url()`.

```stylus
// Good
.element
  background-image versionPath('/assets/img/logo.png')

@font-face
  font-family 'WebFontName'
  src versionPath('/assets/fonts/webfont.eot')
  …

// Exception
.element
  background-image url('http://example.com/logo.png')
```
