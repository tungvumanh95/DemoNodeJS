var fs = require('fs');
console.log('Going to delete an existing File');
fs.unlink('newfile.txt', function(err) {
	if (err) {
		return console.error(err);
	}
	console.log('File deleted successfully !');
});