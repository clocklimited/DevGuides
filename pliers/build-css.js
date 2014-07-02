module.exports = task

var path = require('path')
  , join = path.join
  , renderStylus = require('stylus-renderer')
  , stylus = require('stylus')
  , autoprefixer = require('autoprefixer-stylus')
  , versionator = require('versionator')
  , stylusMixins = require('stylus-mixins')
  , responsiveGrid = require('responsive-grid')
  , config = require('../config')
  , middleware = [autoprefixer(), stylusMixins(), responsiveGrid()]

function task(pliers) {

  pliers('buildCss', function (done) {
    var mappedVersion = versionator.createMapped(require(__dirname + '/../static-file-map.json'))

    renderStylus(config.stylesheets.map(function (file) { return file + '.styl' }),
      { src: join(__dirname, '..', 'source', 'static', 'stylus')
      , dest: join(__dirname, '..', 'output', 'static', 'css')
      , use: middleware
      , stylusOptions: { compress: false }
      , define:
        { versionPath: function (urlPath) {
            return new stylus.nodes.Literal('url(' + mappedVersion.versionPath(urlPath.val) + ')')
          }
        }
      }
      , function (err) {
        if (err) {
          pliers.logger.error('Failed to build CSS')
          pliers.logger.error(err.message)
        }
        done()
      }).on('log', function (msg, level) { pliers.logger[level](msg) })
  })
}


