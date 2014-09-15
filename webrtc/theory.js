var s = require('../');
var fs = require('fs');

module.exports = [
  s().h1('A').h1('WebRTC').h1('primer'),
  s().h2('it\'s').h1('P2P'),
  s().gif('http://i.giphy.com/4NKul6kwYj57i.gif'), // .bgColor('#333').bgSize('50%').svg(fs.readFileSync(__dirname + '/../images/p2p.svg')),
  s().h1('punches').h2('through firewalls and NAT'),
  s().gif('http://i.giphy.com/VhJDBAByMjrSo.gif'),
  s().h2('you can communicate using').h1('video'),
  s().gif('http://i.giphy.com/bWTVb7EJBOhgY.gif'),
  s().h1('audio'),
  s().gif('http://i.giphy.com/sHDnCBw3ddfpK.gif'),
  s().h1('data'),
  s().gif(''),
  s().h1('signalling'),
  s().gif('http://i.giphy.com/pUaE7eiwQWa7S.gif')
];
