#Working with Sublime

[Sublime Text](http://www.sublimetext.com/) is a popular, feature rich text editor.

---

## Must Have Settings

These settings are a must, to conform to Clock’s coding standards. These settings should be place in you Sublime `User` folder.

Standard Settings:

```json
{
  "dictionary": "Packages/Language - English/en_GB.dic",
  "ensure_newline_at_eof_on_save": true,
  "rulers":
  [
    80
  ],
  "tab_size": 2,
  "translate_tabs_to_spaces": true,
  "trim_trailing_white_space_on_save": true
}
```

If you are working with Jade files, ensure you have a Jade syntax specific settings file:

```json
{
  "trim_trailing_white_space_on_save": false
}
```

---

## Installing Plugins

Sublime Text has many plugins which can be installed using [Package Control](http://wbond.net/sublime_packages/package_control). It is a full-featured package manager that helps discover, install, update and remove packages. It can be used to install most of the packages listed below.

---

## Recommended Plugins

### [SublimeLinter](https://github.com/SublimeLinter/SublimeLinter3)
Inline linting framework for various languages. It does not come with built in linters, so be sure to also install the SublimeLinter plugins for [JSHint](https://packagecontrol.io/packages/SublimeLinter-jscs) and [JSCS](https://packagecontrol.io/packages/SublimeLinter-jscs).

### [Sidebar Enhancements](https://github.com/titoBouzout/SideBarEnhancements)
Provides more options in the Sublime project sidebar, for example: new file/folder, reveal, find in selected/parent/project, cut, copy, paste, rename, move, delete.

### [Inc-Dec-Value](https://github.com/rmaksim/Sublime-Text-2-Inc-Dec-Value)
Keyboard shortcuts to increment and decrement values. Also allows for easy string capitalisation and boolean value switching.

### [TrailingSpaces](https://github.com/SublimeText/TrailingSpaces)
Visually highlights trailing whitespace. Useful when working with Jade where trailing spaces can be significant.

### [Color Picker](https://github.com/weslly/ColorPicker)
Adds a native OS colour picker. Useful for working with colour in CSS.

### [Git Gutter](https://github.com/jisaacks/GitGutter)
Show an icon in the gutter area indicating whether a line has been inserted, modified or deleted.

### [Open Include](https://github.com/titoBouzout/Open-Include)
This plugin will try to open Sublime Text file paths found on caret positions or partial selections.




## Language Specific / Syntax Highlighting

### [Stylus.tmbundle](https://packagecontrol.io/packages/Stylus)
Syntax highlighting for Stylus.

### [Jade](https://packagecontrol.io/packages/Jade)
Syntax highlighting for Jade.

### [CSS+](https://github.com/jackbrewer/CSS-Plus.tmbundle)
Tab-trigger shortcuts for CSS

### [HTML+](https://github.com/jackbrewer/HTML-Plus.tmbundle)
Tab-trigger shortcuts for HTML

### [Stylus+](https://github.com/jackbrewer/stylus-plus.tmbundle)
Tab-trigger shortcuts for Stylus




