var http = require('http');
var url = require('url');

var start = function(route, handle) {
	var onRequest = function(request, response) {

		var pathname = url.parse(request.url).pathname;
		console.log('Request for ' + pathname + ' received.');

		//request.setEncoding('utf8');
		//
		//var postData = '';
		//request.addListener('data', function(postDataChunk) {
		//	postData += postDataChunk;
		//	console.log("Received POST data chunk '"+ postDataChunk + "'.");
		//});
		//
		//request.addListener('end', function() {
		//	route(handle, pathname, response, postData);
		//});

		route(handle, pathname, response, request);
	};

	http.createServer(onRequest).listen(8888);

	console.log('Server has started.');
};

exports.start = start;