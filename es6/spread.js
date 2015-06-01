var numbers = process.argv.slice(2);

var min = Math.min(...numbers);
var output = `The minimum of [${numbers}] is ${min}`;

console.log(output);