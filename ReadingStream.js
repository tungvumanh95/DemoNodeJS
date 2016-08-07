var fs = require("fs");
var data = '';

// Create a readable steam
var readerStream = fs.createReadStream('input.txt');
// Set the encoding to be utf8
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, error
readerStream.on('data', function(chunk){
	data += chunk;
	console.log('data event: ' + data);
});

readerStream.on('end', function(){
	console.log('end event (end reading): ' + data);
});

readerStream.on('error', function(){
	console.log(err.stack);
});

console.log('Program Ended');
