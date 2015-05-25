var readdir = require('./exercise6-module.js');


var dirpath = process.argv[2];
var ext = process.argv[3];

readdir(dirpath, ext, function(err, data) {
	data.forEach(function(val) {
		console.log(val);
	});
});
