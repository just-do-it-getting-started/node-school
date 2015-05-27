var websocket = require('websocket-stream');
var wss = websocket.createServer({port: 8099});

wss.on('connection', function connection(ws) {
	ws.on('message', function incoming(message) {
		console.log('%s', message);
		wss.end();
	});
});