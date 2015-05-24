var http = require('http');

var onRequest = function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
};

http.createServer(onRequest).listen(8888);