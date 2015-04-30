var s = require('../');
var fs = require('fs');
var h = require('hyperscript');

module.exports = [
  s().h1('Getting Started'),
  h('p', { className: 'embiggen' }, 'A common place to start is: ', h('a', { href: 'https://github.com/GoogleChrome/webrtc/blob/master/samples/web/js/adapter.js' }, 'adapter.js')),
  s().gif('http://i.giphy.com/eHFWNWOuUkvZu.gif'),
  s().h2('or you could take a').h1('modular').h2('approach')
];
