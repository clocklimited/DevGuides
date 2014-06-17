module.exports = tasks

var path = require('path')
  , join = path.join
  , mkdirs = require('directory-structure')
  , copy = require('directory-copy')
  , renderStylus = require('stylus-renderer')
  , renderJade = require('jade-renderer')
  , config = require('./config')
  , exec = require('child_process').exec
  , map = require('lodash.map')

function tasks(pliers) {

  function notify(message, title) {
    title = title || 'DevGuides'
    exec('osascript -e \'display notification "' + message + '" with title "' + title + '"\'')
  }

  var lrServer
  try {
    var Tinylr = require('tiny-lr')
  } catch (e) {}

  function refresh(files) {
    if (lrServer) {
      var cssFiles = map(files, function (file) {
        return 'css/' + file + '.css'
      })
      lrServer.changed({
        body: {
          files: cssFiles
        }
      })
    }
  }

  pliers('livereload', function(done) {
    if (Tinylr) {
      var port = 35729
      if (lrServer === undefined) {
        lrServer = new Tinylr()
        lrServer.listen(port, function() {
          pliers.logger.info('LiveReload listening on', port)
        })
      }
    } else {
      pliers.logger.info('LiveReload Not Available')
    }
    done()
  })

  // Define the filesets
  pliers.filesets('css', join(__dirname, 'source', 'resource', 'css', '**/*.styl'))
  pliers.filesets('static',
    join(__dirname, 'source', 'resource', '**/*'),
    join(__dirname, 'source', 'resource', 'css', '**/*.styl'))
  pliers.filesets('jade', join(__dirname, 'source', 'templates', '**/*.jade'))

  pliers('structure', function (done) {
    mkdirs(__dirname, [ join('output', 'resource', 'css') ], function (err) {
      if (err) {
        pliers.logger.error('Failed to compile jade templates')
        pliers.logger.error(err.message)
      }
      done()
    }).on('log', function (msg, level) { pliers.logger[level](msg) })
  })

  pliers('copy', 'structure', function (done) {

    copy(
      { src: join(__dirname, 'source', 'resource')
      , dest: join(__dirname, 'output', 'resource')
      , logger: pliers.logger
      , excludes: [/^\./, /^css\/$/]
      }, function (err) {
        if (err) {
          pliers.logger.error('Failed to copy static assets')
          pliers.logger.error(err.message)
        }
        done()
      }).on('log', function (msg, level) { pliers.logger[level](msg) })

  })

  pliers('css', function (done) {
    renderStylus(config.stylesheets.map(function (file) { return file + '.styl' }),
      { src: join(__dirname, 'source', 'resource', 'css')
      , dest: join(__dirname, 'output', 'resource', 'css')
      }
      , function (err) {
        if (err) {
          pliers.logger.error('Failed to render stylus')
          pliers.logger.error(err.message)
        }
        done()
      }).on('log', function (msg, level) { pliers.logger[level](msg) })
  })

  pliers('jade', function (done) {
    renderJade(config.pages,
      { src: join(__dirname, 'source', 'templates', 'pages')
      , dest: join(__dirname, 'output')
      }
      , function (err) {
        if (err) {
          pliers.logger.error('Failed to render jade:')
          pliers.logger.error(err.message)
        }
        done()
      }).on('log', function (msg, level) { pliers.logger[level](msg) })
  })

  pliers('build', 'copy', 'css', 'jade')

  pliers('watch', 'build', function () {

    pliers.run('livereload')

    pliers.watch(pliers.filesets.css, function () {
      pliers.run('css', function () {
        refresh(config.stylesheets)
        if (notify) notify('CSS updated')
      })
    })

    pliers.watch(pliers.filesets.static, function () {
      pliers.run('copy', function () {
        if (notify) notify('Jade updated')
      })
    })

    pliers.watch(pliers.filesets.jade, function () {
      pliers.run('jade', function () {
        if (notify) notify('Jade updated')
      })
    })

    pliers.exec('node server')

  })

}
