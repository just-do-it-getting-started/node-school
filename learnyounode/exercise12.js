var http = require('http');

var port = Number(process.argv[2]);

var server = http.createServer(function(req, res) {
	var method = req.method;

	if(method === 'POST') {
		var body = "";
		req.on('data', function (chunk) {
			body += chunk;
		});
		req.on('end', function () {
			res.writeHead(200);
			res.end(body.toUpperCase());
		});
	} else {
		res.end();
	}
});

server.listen(port);