var net = require('net');
var port = process.argv[2];

var zeroFill = function(i) {
	return i < 10 ? '0' + i : i;
};

var now = function() {
	var date = new Date();
	var year = date.getFullYear();
	var month = zeroFill(date.getMonth() + 1);
	var day = zeroFill(date.getDate());
	var hour = zeroFill(date.getHours());
	var min = zeroFill(date.getMinutes());

	return year + '-' + month + '-' + day + ' ' + hour + ':' + min;
};

var server = net.createServer(function(socket) { //'connection' listener
	socket.on('end', function() {
		console.log('client disconnected');
	});

	socket.write(now());

	socket.end('\n');
});

server.listen(port, function() { //'listening' listener
	console.log('server start... on ' + port);
});