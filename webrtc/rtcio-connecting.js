var s = require('../');
var fs = require('fs');

module.exports = [
  s().h1('making').h1('connections'),
  s().npm('rtc-quickconnect').npm('rtc-tools'),
  s().runnable(fs.readFileSync(__dirname + '/examples/rtc-quickconnect.js')),
  s().h2('quickconnect is "media free"'),
  s().h2('for video conferencing, add').h1('your choice').h2('of media capture / rendering modules'),
  s().runnable(fs.readFileSync(__dirname + '/examples/rtc-quickconnect-media.js')),
  s().h2('simple data channel support is baked in'),
  s().runnable(fs.readFileSync(__dirname + '/examples/rtc-quickconnect-simpledc.js')),
  s().h2('life is better with streams though...'),
  s().npm('rtc-dcstream').npm('rtc-data-stream'),
  s().runnable(fs.readFileSync(__dirname + '/examples/rtc-quickconnect-dcstream.js')),
  s().h2('because once you have streams...'),
  s().h2('you unlock the awesome'),
  s().gif('http://i.giphy.com/vsgVZIN4Qq7ny.gif'),
  s().npm('rtc-mesh').npm('scuttlebutt'),
  s().runnable(fs.readFileSync(__dirname + '/examples/rtc-mesh.js'))
];
