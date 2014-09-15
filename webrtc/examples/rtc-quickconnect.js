var quickconnect = require('rtc-quickconnect');

quickconnect('//switchboard.rtc.io/', { room: 'qc-starter' })
  .on('connected', function() {
    console.log('Yep I get these events too');
    console.log('I\'m just a special signaller :)');
  })
  .on('call:started', function(id, pc, data) {
    console.log('we have a new connection to: ' + id);
  });
