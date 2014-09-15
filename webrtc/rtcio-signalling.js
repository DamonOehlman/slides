var s = require('../');
var fs = require('fs');

module.exports = [
  s().h1('signalling'),
  s().npm('rtc-signaller').npm('rtc-switchboard'),
  s().runnable(fs.readFileSync(__dirname + '/examples/rtc-signaller.js'))
];
