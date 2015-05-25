var http = require('http');
var bl = require('bl');

var urls = process.argv.slice(2, process.argv.length);

var promises = [];

var aaa = function(url, idx) {
	return new Promise(function(resolve, reject) {
		http.get(url, function(res) {
			res.pipe(bl(function(err, data) {
				if(err) return console.error(err);

				data = data.toString();

				resolve(data);
			}));
		});
	});
};

urls.forEach(function(url, idx) {
	promises.push(aaa(url, idx));

	Promise.all(promises).then(function(data) {
		if(promises.length === data.length) {
			data.forEach(function(data) {
				console.log(data);
			});
		}
	});
});