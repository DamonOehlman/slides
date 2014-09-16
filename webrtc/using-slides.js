var s = require('../');
var fs = require('fs');
var crel = require('crel');

module.exports = [
  s()
    .h2('NOTE:')
    .div(
      crel('p', 'This slide deck contains runnable examples (just hit the run button, or <ENTER> on a runnable slide).'),
      crel('p', 'Running some examples requires 2+ participants, so will likely need to open another browser instance to work with these.')
    )
];
