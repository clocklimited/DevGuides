# Style Guide

Style might seem like an a trivial issue, but it's very important when working in a team to have a consistent style
across the board. Adhering to the style guide and using a linter will reduce the probability of bugs and increase their
visibility before your code is even run. At the very least, consistency means our source control diffs aren't muddied
by stylistic changes. At best, it enables developers who have never seen a particular piece of code to quickly
understand the logic, and understand the intent of the original author(s).

* Our style guide is a written document located [on GitHub](https://github.com/bengourley/js-style-guide)
* There is also an [article ratifying the more contentious style choices](http://bengourley.co.uk/javascript-style)
* Accompanying the document is a set of [JSHint options in JSON format](https://raw.github.com/bengourley/js-style-guide/master/jshint-options.json).

If you are authoring any JavaScript at all, it is important that you familiarise yourself with the style guide, and
set your text editor up with a linter that is able to apply these options. Most of us use [SublimeText](http://www.sublimetext.com/)
and [SublimeLinter](https://github.com/SublimeLinter/SublimeLinter). You are free to use whatever editor you like, so long as your
code meets the standards of the style guide and runs through JSHint (with our settings) with no lint errors.
