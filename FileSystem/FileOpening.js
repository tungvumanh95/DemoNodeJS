var fs = require('fs');

// Asynchronous - Openning File
console.log('Going to open a File');
fs.open('input.txt', 'r+', function(err, td) {
	if (err) {
		return console.error(err);
	}
	console.log('File open successfully !');
});