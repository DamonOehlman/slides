var s = require('../');
var fs = require('fs');

module.exports = [
  s().npm('getusermedia').h3('for capturing media'),
  s().runnable(fs.readFileSync(__dirname + '/examples/getusermedia.js')),
  s().npm('attachmediastream').h3('for rendering'),
  s().runnable(fs.readFileSync(__dirname + '/examples/attachmediastream.js'))
];
