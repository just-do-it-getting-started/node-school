var duplexer2 = require("duplexer2");
var through = require('through2');

module.exports = function (counter) {
	var countries = {};

	var duplex = duplexer2(through.obj(function (obj, encoding, done) {
		if (obj.country in countries)
			countries[obj.country]++;
		else
			countries[obj.country] = 1;
		done();
	}), counter);

	duplex.on("finish", function() {
		console.log(countries);
		counter.setCounts(countries);
	});

	return duplex;
};

