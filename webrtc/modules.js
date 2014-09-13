var s = require('../');
var fs = require('fs');

module.exports = [
  s().h1('Getting Started'),
  s().h2('A common place to start is').a({ href: 'https://github.com/GoogleChrome/webrtc/blob/master/samples/web/js/adapter.js' }, 'adapter.js'),
  s().gif('http://i.giphy.com/eHFWNWOuUkvZu.gif'),
  s().h2('or you could take a').h1('modular').h2('approach'),
  s().npm('getUserMedia').h2('is for capturing media'),
  s().runnable(fs.readFileSync(__dirname + '/examples/getusermedia.js')),
  s().npm('attachLocalStream').h2('is for rendering'),
  s().runnable(fs.readFileSync(__dirname + '/examples/attachmediastream.js'))
];
