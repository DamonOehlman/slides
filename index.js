var s = module.exports = require('shaz');

require('shaz-flickr')(s, { apikey: '1afeba19b3dfd2a8a3671deb8a6fa165' });
require('shaz-npm')(s);
require('shaz-todo')(s);

// use shaz-runnable for examples
require('shaz-runnable')(s, {
  demoConsole: true
});
