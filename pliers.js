module.exports = tasks

var path = require('path')
  , join = path.join
  , config = require('./config')
  , exec = require('child_process').exec

function tasks(pliers) {

  function notify(message, title) {
    title = title || 'DevGuides'
    exec('osascript -e \'display notification "' + message + '" with title "' + title + '"\'')
  }

  // Tasks
  require('./pliers/css-lint')(pliers)
  require('./pliers/build-css')(pliers)
  require('./pliers/build-html')(pliers, config)
  require('./pliers/create-static-map')(pliers)
  require('./pliers/create-output-dirs')(pliers)
  require('./pliers/copy-resources')(pliers)
  var refresh = require('./pliers/live-reload')(pliers)

  // Define the filesets
  pliers.filesets('stylus', join(__dirname, 'source', 'static', 'stylus', '**/*.styl'))
  pliers.filesets('jade', join(__dirname, 'source', 'templates', '**/*.jade'))
  pliers.filesets('resources',
    join(__dirname, 'source', 'static', '**/*'),
    join(__dirname, 'source', 'static', 'stylus', '**'))

  pliers('build', 'copyResources', 'createStaticMap', 'buildCss', 'buildHtml', 'createStaticMap')

  pliers('watch', 'build', function () {

    pliers.run('livereload')

    pliers.watch(pliers.filesets.stylus, function () {
      pliers.run('buildCss', function () {
        refresh('css')
        if (notify) notify('CSS updated')
      })
    })

    pliers.watch(pliers.filesets.jade, function () {
      pliers.run('buildHtml', function () {
        if (notify) notify('HTML updated')
      })
    })

    pliers.watch(pliers.filesets.resources, function () {
      pliers.run('copyResources', function () {
        if (notify) notify('Resources updated')
      })
    })

    pliers.exec('node server')

  })

}
