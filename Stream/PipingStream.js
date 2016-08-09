var fs = require('fs');

// Create a readable Stream
var readerStream = fs.createReadStream('input.txt');

// Create a writable Stream
var writerStream = fs.createWriteStream('outputOfPiping.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log('Finish Piping');
