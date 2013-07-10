module.exports = serve

var fs = require('fs')
  , connect = require('connect')
  , config = require(__dirname + '/config')
  , Stream = require('stream')

function serve() {

  function router(req, res, next) {
    var route = config.routes[req.url]
    if (route) {
      fs.createReadStream(__dirname + '/preview/' + route + '.html').pipe(res)
    } else {
      next()
    }
  }

  var server = connect()
    .use(connect.logger('dev'))
    .use(router)
    .use(connect.static(__dirname + '/preview'))
    .listen(config.port || 3000)

  console.log(
  [ ''
  , '  Connect server listening on http://localhost:' + server.address().port
  , ''
  , '  Available routes:'
  , '  `' + Object.keys(config.routes).join('`, \n  `') + '`'
  , ''
  ].join('\n')
  )

}

// Run the server if this
// file is run directly
if (!module.parent) {
  serve()
}
