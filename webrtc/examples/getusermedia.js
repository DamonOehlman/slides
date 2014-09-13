var getUserMedia = require('getusermedia');
var constraints = { audio: true, video: true };

getUserMedia(constraints, function(err, stream) {
  if (err) {
    return console.error('could not capture media: ', err);
  }

  // do something with the stream
  console.log('got a stream: ', stream);
});
