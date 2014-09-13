var media = require('rtc-media');
var constraints = {
  audio: true,
  video: {
    mandatory: {},
    optional: [
      { minWidth: 1280 },
      { width: { min: 1280 } },
      { minHeight: 720 },
      { height: { min: 720 } }
    ]
  }
};

media({ constraints: constraints }).render(document.body);
