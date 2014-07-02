module.exports = task

var fs = require('node-fs')
  , versionator = require('versionator')

function task(pliers) {

  pliers('createStaticMap', function (done) {
    versionator.createMapFromPath(__dirname + '/../output/static', function(error, staticFileMap) {
      var prefixMap = {}
      for(var key in staticFileMap) {
        prefixMap['/static' + key] = '/static' + staticFileMap[key]
      }
      fs.writeFileSync(__dirname + '/../static-file-map.json', JSON.stringify(prefixMap, null, true))
      done()
    })
  })

}
