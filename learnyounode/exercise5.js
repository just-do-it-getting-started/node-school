var fs = require('fs');
var path = require('path');

var dirpath = process.argv[2];
var ext = process.argv[3];

fs.readdir(dirpath, function(err, files) {
	files.forEach(function(filename) {
		var extname = path.extname(filename).replace('.', '');
		if(extname && extname === ext) {
			console.log(filename);
		}
	});
});
