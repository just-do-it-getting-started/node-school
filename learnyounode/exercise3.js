var fs = require('fs');

var filepath = process.argv[2];

var buffer = fs.readFileSync(filepath);
var contents = buffer.toString().split('\n');

console.log(contents.length - 1);