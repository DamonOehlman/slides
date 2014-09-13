var s = require('../');
var fs = require('fs');

module.exports = [
  s().h2('What is').h1('WebRTC?'),
  s().flickr(6833767622),
  s().h2('what can').h1('I build').h2('with WebRTC?'),
  s().h1('Many Things').flickr(1383780166),
  s().h2('From Video + Audio Apps'),
  s().png(fs.readFileSync(__dirname + '/../images/hangouts.png')).contain(),
  s().h2('To Super Cool Data Related Apps'),
  s().png(fs.readFileSync(__dirname + '/../images/webtorrent.png')).contain()
];
