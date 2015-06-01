module.exports = function average(...numbers) {
	var count = numbers.length;
	var total = numbers.reduce((n, n2) => n + n2);

	return total / count
};