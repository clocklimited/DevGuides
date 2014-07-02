module.exports = task

var path = require('path')
  , join = path.join
  , mkdirs = require('directory-structure')

function task(pliers) {

  pliers('createOutputDirs', function (done) {
    mkdirs(__dirname, [ join('..', 'output', 'static', 'css') ], function (err) {
      if (err) {
        pliers.logger.error('Failed to create output directories')
        pliers.logger.error(err.message)
      }
      done()
    }).on('log', function (msg, level) { pliers.logger[level](msg) })
  })

}
