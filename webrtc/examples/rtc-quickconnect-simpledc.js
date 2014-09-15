var quickconnect = require('rtc-quickconnect');

quickconnect('//switchboard.rtc.io/', { room: 'qc-simpledc' })
  .createDataChannel('test')
  .on('channel:opened:test', function(id, dc) {
    console.log('data channel opened with peer: ' + id);

    dc.addEventListener('message', function(evt) {
      console.log('received data: ' + evt.data);
    });

    dc.send('hey there!');
  });
