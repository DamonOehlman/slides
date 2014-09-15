var quickconnect = require('rtc-quickconnect');
var mesh = require('rtc-mesh');

// initialise the connection
var qc = quickconnect('//switchboard.rtc.io/', {
  room: 'meshdemo-simple'
});

// create the model
var model = mesh(qc);

// report data change events
model.on('change:lastjoin', function(value) {
  console.log('last join now changed to: ' + value);
});

model.set('lastjoin', Date.now());
