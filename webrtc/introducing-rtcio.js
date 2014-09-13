var s = require('../');
var fs = require('fs');

module.exports = [
  s().h2('introducing').h1('rtc.io').h2('(and friends)').flickr(2317256629),
  s().eg(fs.readFileSync(__dirname + '/examples/rtc-media-render.js')),
];
