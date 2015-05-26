var http = require('http');
var through = require('through');

var port = process.argv[2];

var server = http.createServer(function(req, res) {
	req.pipe(through(function(buf, _, next) {
		this.push(buf.toString().toUpperCase());
	})).pipe(res);
});

server.listen(port);