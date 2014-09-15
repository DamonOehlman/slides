var s = require('../');
var fs = require('fs');
var crel = require('crel');

module.exports = [
  s().h2('about me').div(
    crel('ul',
      crel('li', 'I write code... probably a fair bit'),
      crel('li', 'Working with WebRTC full-time'),
      crel('li', 'Possibly addicted to efficiency and reuse')
    )
  )
];
