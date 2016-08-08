var fs = require('fs');

console.log('Going to write into existing file');
fs.writeFile('output.txt', 'Noi dung moi ghi vao file !', function(err){
	if (err) {
		return console.error(err);
	}
	console.log('Data written successfully !');
	console.log('Lers read newly witten data');
	fs.readFile('output.txt', function (err, data){
		if (err) {
			return console.error(err);
		}
		console.log('Asynchronous Reading file: ' + data.toString());
	});
});