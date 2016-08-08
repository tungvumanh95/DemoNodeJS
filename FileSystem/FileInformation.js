var fs = require('fs');

console.log('Going to get file information');
fs.stat('input.txt', function (err, stats){
	if (err) {
		return console.error(err);
	}
	console.log(stats);
	console.log('Got file into successfully !');
	
	// Check file type
	console.log('Is File ?' + stats.isFile());
	console.log('Is Directory ?' + stats.isDirectory());
});