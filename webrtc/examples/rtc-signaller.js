var signaller = require('rtc-signaller')('//switchboard.rtc.io');

signaller.once('connected', function() {
  console.log('we have successfully connected');
});

signaller.on('peer:announce', function(data) {
  console.log('new peer found in room: ', data);
  signaller.to(data.id).send('/foo');
});

signaller.on('foo', function(data) {
  console.log('received foo from ' + data.id);
});

signaller.announce({ room: 'signaller-demo' });
