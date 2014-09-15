var quickconnect = require('rtc-quickconnect');
var dcstream = require('rtc-dcstream');
var concat = require('concat-stream');
var tester = require('stream-tester');

quickconnect('//switchboard.rtc.io/', { room: 'qc-dcstream' })
  .createDataChannel('test')
  .on('channel:opened:test', function(id, dc) {
    var source = tester.createRandomStream(function () {
      return 'line ' + Math.random() + '\n'
    }, 10);

    source
      .pipe(dcstream(dc))
      .pipe(concat(function(data) {
        console.log('received data: ' + data);
      }));

    console.log('data channel opened with peer: ' + id);
  });
