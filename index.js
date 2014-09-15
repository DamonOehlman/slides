var s = module.exports = require('shaz');
var fs = require('fs');

require('shaz-flickr')(s, { apikey: '1afeba19b3dfd2a8a3671deb8a6fa165' });
require('shaz-npm')(s);
require('shaz-todo')(s);

// use shaz-runnable for examples
require('shaz-runnable')(s, {
  cdn: 'http://localhost:3000',
  iframeStyle: fs.readFileSync(__dirname + '/css/demo-iframe.css', 'utf8'),
  demoConsole: true
});
