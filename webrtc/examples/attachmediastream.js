var getUserMedia = require('getusermedia');
var attach = require('attachmediastream');
var constraints = { audio: true, video: true };

getUserMedia(constraints, function(err, stream) {
  if (err) {
    return;
  }

  document.body.appendChild(attach(stream, null, {
    mirror: true,
    muted: true
  }));
});
