module.exports = task

var path = require('path')
  , join = path.join
  , renderJade = require('jade-renderer')
  , versionator = require('versionator')
  , merge = require('lodash.merge')
  , defaults =
    { jadeOptions:
      { pretty: false
      , basedir: __dirname + '/../source/templates'
      }
    }

function task(pliers, config) {

  pliers('buildHtml', function (done) {
    var mappedVersion = versionator.createMapped(require(__dirname + '/../static-file-map.json'))

    var options = {
        src: join(__dirname, '../', 'source', 'templates', 'pages')
      , dest: join(__dirname, '../', 'output')
      , locals: { versionPath: mappedVersion.versionPath }
      }

    // Extend defaults with user options
    merge(options, defaults, options)

    renderJade(config.pages,
      { src: join(__dirname, '../' ,'source', 'templates', 'pages')
      , dest: join(__dirname, '../', 'output')
      }
      , function (err) {
        if (err) {
          pliers.logger.error('Failed to render jade:')
          pliers.logger.error(err.message)
        }
        done()
      }).on('log', function (msg, level) { pliers.logger[level](msg) })
  })
}
