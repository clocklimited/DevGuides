module.exports = serve

var fs = require('fs')
  , connect = require('connect')
  , config = require(__dirname + '/config')

function serve() {

  function router(req, res, next) {
    var route = config.routes[req.url]
    if (route) {
      var readStream = fs.createReadStream(__dirname + '/output/' + route + '.html')
      readStream.pipe(res)
      readStream.on('error', function (e) {
        console.log(e.stack)
        res.end()
      })
    } else {
      next()
    }
  }

  function notFound(req, res, next) {
    var readStream = fs.createReadStream(__dirname + '/output/not-found.html')
    res.statusCode = 404
    readStream.pipe(res)
    readStream.on('error', function () {
      next()
    })
  }

  var server = connect()
    .use(connect.logger('dev'))
    .use(router)
    .use(connect.static(__dirname + '/output'))
    .use(notFound)
    .listen(config.port || 3000)

  console.log(
    [ ''
    , 'Connect server listening on http://localhost:' + server.address().port
    , ''
    , 'Available routes'
    , '----------------'
    , ''
    ].join('\n  '))

  Object.keys(config.routes).forEach(function(key) {
    console.log('  http://localhost:' + server.address().port + key)
  })

  console.log('\n')

}

// Run the server if this
// file is run directly
if (!module.parent) {
  serve()
}
