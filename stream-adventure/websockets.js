var ws = require('websocket-stream');
var stream = ws('ws://localhost:8099');

stream.write('hello\n', 'utf-8', function(s) {});