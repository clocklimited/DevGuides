module.exports = task

var path = require('path')
  , join = path.join

function task(pliers) {

  pliers('csslint', function (done) {
    var files = join(__dirname, '..', 'output', 'static', 'css')
    if (typeof process.argv[3] !== 'undefined') {
      files += '/' + process.argv[3] + '.css'
    }
    pliers.exec('./node_modules/csslint/cli.js ' + files, done)
  })

}
