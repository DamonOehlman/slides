var s = require('../');
var fs = require('fs');
var templates = require('../templates');

module.exports = [
  s().h1('media').h2('capture & rendering'),
  s().npm('rtc-media'),
  s().runnable(fs.readFileSync(__dirname + '/examples/rtc-media-render.js')),
  s().h1('capture').h1('constraints'), // .term('capture constraints'),
  templates.hardway(),
  s().runnable(fs.readFileSync(__dirname + '/examples/complex-constraints.js')),
  templates.easyway(),
  s().h2('with rtc-captureconfig').runnable(fs.readFileSync(__dirname + '/examples/rtc-captureconfig.js'))
];
