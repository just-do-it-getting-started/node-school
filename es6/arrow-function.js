var inputs = process.argv.slice(2);
var result = inputs.map(x => x[0])
	.reduce((a, b) => a+b);

var template = `[${inputs}] becomes "${result}"`;

console.log(template);