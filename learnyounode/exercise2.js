var args = process.argv.slice(2, process.argv.length)
var totalCount = 0;

args.forEach(function (val, index, arr) {

	totalCount += Number(val);
});

console.log(totalCount);