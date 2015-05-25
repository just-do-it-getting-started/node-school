var fs = require('fs');

var filepath = process.argv[2];

fs.readFile(filepath, function(err, contents) {
	var lines = contents.toString().split('\n').length - 1;
	console.log(lines);
});
