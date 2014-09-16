var s = require('../');
var fs = require('fs');
var templates = require('../templates');

module.exports = [
  s().h1('media').h2('capture & rendering'),
  s().npm('rtc-media'),
  s().runnable(fs.readFileSync(__dirname + '/examples/rtc-media-render.js')),
  s().h2('using capture constraints'),
  s().runnable(fs.readFileSync(__dirname + '/examples/complex-constraints.js')),
  s().npm('rtc-captureconfig'),
  s().runnable(fs.readFileSync(__dirname + '/examples/rtc-captureconfig.js'))
];
