# JavaScript Setup

We have a well-defined setup for our approach to front-end JS. These processes are aimed
at maintaining *high quality*, *resusable* code and minimising the risk of *bugs*.

We use [pliers](https://npmjs.org/package/pliers), our build tool, to automate our
[browserify](http://github.com/substack/browserify) build every time a piece of code
changes. We set up our text editors with [jshint](https://npmjs.org/package/jshint)
to enforce our [style guide](/js/style-guide). We test our code with [mocha](https://npmjs.org/package/mocha)
and publish re-usable modules to the npm registry.

---

## Pliers

[Pliers](https://npmjs.org/package/pliers) is a command line tool for running tasks. Our projects
are setup with pliers tasks so that you can get on and develop. You should have it installed globally
on your system:

```bash
npm install -g pliers
```

---

## Browserify

At the heart of our setup is the tool [browserify](http://github.com/substack/browserify).
Browserify provides us with three major benefits:

* A module system
* Bundling
* Transforms

In short, our build process involves passing our code to browserify and it passes back a bundle
that we can run in the browser.

### Module System

Browserify brings [node's module system](http://nodejs.org/api/modules.html) to the browser.
This means we can organise our code into small, digestible modules (rather than battling with
1k+ LOC), and pull them together with `require()`.

Through synthesising node's module system, browserify enables us to make use of the abundance
of modules available in [npm](http://npmjs.org). While a lot of those available in npm are node-
specific, many work both in node and in the browser. Here are a few examples that we use both on
the server and in the browser:

* [Schemata](https://npmjs.org/package/schemata)
* [Slugg](https://npmjs.org/package/slugg)
* [Bytes](https://npmjs.org/package/bytes)

By separating our code into modules, it increases **testability** and **re-usability**. If a module
you have authored inside your application might be ever be useful on any other project, you should
consider publishing it to npm.

### Bundling

When we pass our code to browserify, we do so by telling it the entry point to our program. It then
goes through, analysing the `require()` calls, and resolves all of the modules that we have included.
It bundles all of the modules into a single output file and returns that to us.

In development, we use the `debug` option, which also bundles a sourcemap into the output file. This means
when we're debugging in the developer console, we get to see the original sources, rather than the big bundle
(*Hint: open the developer console and check `enable source maps` to switch on this browser functionality*).

All we need to do for production is run the output file through [uglifyjs](https://npmjs.org/package/uglify-js)
which compresses it.

### Transforms

Browserify allows us to specify transforms for it to apply as it is bundling up our application, which comes
in very useful for client side templating. Rather that writing HTML as strings in JS (*WARNING BELLS*), we
use Jade. Since Jade compiles to a JS function, we can use transforms to swap out `compileJade()` calls
with the actual compiled Jade function.

Using the transform [browjadify](https://npmjs.org/package/browjadify), we can write this in our JS:

```javascript
var compileJade = require('browjadify')
  , personTemplate = compileJade(__dirname + '/person.jade')

// Render the template
var html = personTemplate({ name: 'Ben' })
// Add it to the DOM
$('.js-people').append(html)
```

…and after the transform it will equivalent to this:

```javascript
var personTemplate = function anonymous(locals) {
  // Compiled jade template body here…
}

// Render the template
var html = personTemplate({ name: 'Ben' })
// Add it to the DOM
$('.js-people').append(html)
```

As well as making the inclusion of Jade templates seamless, the fact the templates are pre-compiled
means that only the Jade runtime needs to be included in the output bundle, and not the whole complier
(200 vs. thousands of lines of code).
