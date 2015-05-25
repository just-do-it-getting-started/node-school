var concat = require('concat-stream');

process.stdin
	.pipe(concat(function (buf) {
		var content = buf.toString().split('').reverse().join('');
		console.log(content);
	}));