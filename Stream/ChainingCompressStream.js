var fs = require('fs');
var zlib = require('zlib');

// Compress the file input.tx to input.txt.gz
fs.createReadStream('input.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('input.txt.gz'));
console.log('File Compressed');
