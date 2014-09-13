var config = require('rtc-captureconfig');
var media = require('rtc-media');
var constraints = config('camera:0 hd').toConstraints();

media({ constraints: constraints }).render(document.body);
