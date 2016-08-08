var fs = require ('fs');

// Asynchronous reading
fs.readFile('input.txt', function(err, data){
	if (err) {
		return console.error(err);
	}
	console.log('Asynchronous reading: ' + data.toString());
});

// Synchronous Reading
var data = fs.readFileSync('input.txt');
console.log('Synchronous reading: ' + data.toString());

console.log('Program ended');