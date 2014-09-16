var s = require('../');
var fs = require('fs');

module.exports = [
  s().h1('A').h1('WebRTC').h1('primer'),
  s().h2('it\'s').h1('P2P').a({ href: 'http://www.w3.org/TR/webrtc/' }, 'spec'),
  s().gif('http://i.giphy.com/4NKul6kwYj57i.gif'), // .bgColor('#333').bgSize('50%').svg(fs.readFileSync(__dirname + '/../images/p2p.svg')),
  s().h2('punches through').h2('firewalls and NAT using').h1('ICE').a({ href: 'http://tools.ietf.org/html/rfc5245' }, 'spec'),
  s().gif('http://i.giphy.com/VhJDBAByMjrSo.gif'),
  s().h2('you can communicate using'),
  s().h1('video').a({ href: 'http://www.w3.org/TR/mediacapture-streams/#mediastream' }, 'MediaStream'),
  s().gif('http://i.giphy.com/bWTVb7EJBOhgY.gif'),
  s().h1('audio').a({ href: 'http://www.w3.org/TR/mediacapture-streams/#mediastream' }, 'MediaStream'),
  s().gif('http://i.giphy.com/sHDnCBw3ddfpK.gif'),
  s().h1('data').a({ href: 'http://www.w3.org/TR/webrtc/#rtcdatachannel' }, 'RTCDataChannel'),
  s().gif('http://i.giphy.com/12xOWtLnrv3ngc.gif'),
  s().h2('you need signalling').h1('signalling').h2('to help peers find each other').h3('(but that\'s not part of the spec)'),
  s().gif('http://i.giphy.com/pUaE7eiwQWa7S.gif')
];
