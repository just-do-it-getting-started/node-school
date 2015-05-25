var through2 = require('through2');
var stream = through2(write);

function write (buffer, encoding, next) {
	this.push(buffer.toString().toUpperCase());
	next();
}

process.stdin.pipe(stream).pipe(process.stdout);