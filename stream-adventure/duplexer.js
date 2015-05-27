var spawn = require('child_process').spawn;
var duplexer = require('duplexer');

module.exports = function(cmd, args) {
	var src = spawn(cmd, args);

	return duplexer(src.stdin, src.stdout);
};