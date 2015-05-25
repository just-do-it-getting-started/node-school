var split = require('split');
var through2 = require('through2');

var lineCount = 0;
var tr = through2(function(buf, _, next) {
	var line = buf.toString();
	if(lineCount % 2 === 0) {
		this.push(line.toLowerCase() + '\n');
	} else {
		this.push(line.toUpperCase() + '\n');
	}

	lineCount++;

	next();
});

process.stdin
	.pipe(split())
	.pipe(tr)
	.pipe(process.stdout);
