var http = require('http');
var url = require('url');

var port = Number(process.argv[2]);

function parseTime(date) {
	return {
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	};
}
function toUnixTime(date) {
	return {
		unixtime: date.getTime()
	};
}
var server = http.createServer(function(req, res) {
	var method = req.method;

	if(method !== 'GET') {
		return res.end('request get for me\n');
	}

	var url_info = url.parse(req.url);
	var pathname = url_info.pathname;
	var query = url_info.query;

	var date = new Date(query.split('=')[1]);

	if(pathname === '/api/parsetime') {
		var content = parseTime(date);
	} else if(pathname === '/api/unixtime') {
		var content = toUnixTime(date);
	}

	if(content) {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(content));
	} else {
		res.writeHead(404);
		res.end();
	}
});

server.listen(port);