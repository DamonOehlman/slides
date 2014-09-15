var quickconnect = require('rtc-quickconnect');
var getUserMedia = require('getusermedia');
var constraints = { audio: true, video: true };

getUserMedia(constraints, function(err, stream) {
  if (err) {
    return console.error('could not capture media');
  }

  quickconnect('//switchboard.rtc.io/', { room: 'qc-withmedia' })
    .addStream(stream)
    .on('call:started', function(id, pc, data) {
      console.log('call started with peer: ' + id);

      pc.getRemoteStreams().forEach(function(remote) {
        console.log('TODO: render the stream');
      });
    });
});
