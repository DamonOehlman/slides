var s = require('../');

exports.hardway = function() {
  return s().h1('the hard way');
};

exports.easyway = function() {
  return s().h1('the easy way');
};
