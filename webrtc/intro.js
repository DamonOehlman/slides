var s = require('shaz');
var fs = require('fs');

module.exports = [
  s().h2('What is').h1('WebRTC?'),
  s().jpg(fs.readFileSync(__dirname + '/../images/network.jpg')),
  s().h2('what can').h1('I build').h2('with WebRTC?'),
  s().h1('Many Things').jpg(fs.readFileSync(__dirname + '/../images/bluelego.jpg')),
  s().h2('From Video + Audio Apps'),
  s().png(fs.readFileSync(__dirname + '/../images/hangouts.png')).contain(),
  s().h2('To Super Cool Data Related Apps'),
  s().png(fs.readFileSync(__dirname + '/../images/webtorrent.png')).contain(),
  s().h1('Getting Started'),
  s().h2('You could start with').a({ href: 'https://github.com/GoogleChrome/webrtc/blob/master/samples/web/js/adapter.js' }, 'adapter.js')
];
