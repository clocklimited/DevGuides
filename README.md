# Dev Guides

[![Greenkeeper badge](https://badges.greenkeeper.io/clocklimited/DevGuides.svg)](https://greenkeeper.io/)

Clock's Front end development guidelines.

## Setup:

Navigate to the project directory
```
cd DevGuides
```

Install the dependencies
```
npm install
```

Install the build tool on your system
```
npm install -g pliers
```

## During development

Run the watch task
```
pliers watch
```

This watches the files for changes, and compiles them into static html and css
in the preview directory. It also runs a server so you can view the
preview build at [http://localhost:6200/](http://localhost:6200/).

## Deployment

Run the build task
```
pliers build
```

Then serve files from the `preview` directory.
