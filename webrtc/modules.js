var s = require('../');
var fs = require('fs');

module.exports = [
  s().npm('getUserMedia').h2('is for capturing media'),
  s().eg(fs.readFileSync(__dirname + '/examples/getusermedia.js')),
  s().npm('attachLocalStream').h2('is for rendering'),
  s().todo('insert attach local stream example')
];
