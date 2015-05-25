var fs = require('fs');
var path = require('path');

var readdir = function(dirpath, ext, cb) {

	fs.readdir(dirpath, function(err, files) {
		if(err) return cb(err);

		var filterFiles = files;

		filterFiles = filterFiles.filter(function(filename) {
			return path.extname(filename) === '.' + ext;
		});

		return cb(null, filterFiles);
	});

};

module.exports = readdir;