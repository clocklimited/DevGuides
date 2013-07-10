module.exports = tasks

var path = require('path')
  , join = path.join
  , mkdirs = require('directory-structure')
  , copy = require('directory-copy')
  , renderStylus = require('stylus-renderer')
  , renderJade = require('jade-renderer')
  , config = require('./config')

try {
  var notify = require('growl')
} catch (e) {}

function tasks(pliers) {

  // Define the filesets
  pliers.filesets('css', join(__dirname, 'source', 'resource', 'css', '**/*.styl'))
  pliers.filesets('static',
    join(__dirname, 'source', 'resource', '**/*'),
    join(__dirname, 'source', 'resource', 'css', '**/*.styl'))
  pliers.filesets('jade', join(__dirname, 'source', 'templates', '**/*.jade'))

  pliers('structure', function (done) {
    mkdirs(__dirname, [ join('preview', 'resource', 'css') ], function (err) {
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
      , dest: join(__dirname, 'preview', 'resource')
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
      , dest: join(__dirname, 'preview', 'resource', 'css')
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
      , dest: join(__dirname, 'preview')
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

    pliers.watch(pliers.filesets.css, function () {
      pliers.run('css', function () {
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

    var child = pliers.exec('node server')

  })

}