var fs = require('fs');
var data = 'Day la data ghi vao Stream';

// Create a writable Stream
var writerStream = fs.createWriteStream('output.txt');

// Set encoding
writerStream.write(data, 'UTF8');

// Mark the end of File
writerStream.end();

// Handle stream events --> finish, error
writerStream.on('finish', function(){
	console.log('Write completed');
});


writerStream.on('error', function(err){
	console.log(err.stack);
});

console.log('Program Ended');
