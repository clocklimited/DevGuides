module.exports = task

try {
  var Tinylr = require('tiny-lr')
} catch (e) {}

function task(pliers) {

  var lrServer

  function refresh(filetype) {
    if (lrServer) {

      if (filetype === 'css') filetype = '/static/css/index.css'

      lrServer.changed({
        body: {
          files: filetype
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

  return refresh

}
