var s = require('../');
var fs = require('fs');
var crel = require('crel');
var logo = fs.readFileSync(__dirname + '/../images/rtcio.svg', 'base64')

module.exports = [
  s().div(crel('img', {
    src: 'data:image/svg+xml;base64,' + logo,
    height: '50%'
  })).h1('rtc.io')
];
