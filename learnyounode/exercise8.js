var http = require('http');
var BufferList = require('bl');

var url = process.argv[2];

http.get(url, function(res) {
	var bl = new BufferList();

	res.on('data', function(data) {
		bl.append(new Buffer(data));
	});

	res.on('end', function() {
		console.log(bl.length);
		console.log(bl.toString());
	});
	res.on('error', console.error);
});