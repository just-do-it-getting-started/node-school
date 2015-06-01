var name = process.argv[2];
var template = `Hello, ${name}!
Your name lowercased is "${name.toLowerCase()}".`;

console.log(template);
