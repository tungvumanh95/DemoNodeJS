var express = require('express');
var app = express();
var fs = require('fs');
var formidable = require('formidable');

var bodyParser = require('body-parser');

app.use(express.static('resources'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/fileUpload', function(req, res) {
	res.sendFile(__dirname + '/' + 'fileUpload.html');
});

app.post('/uploadFile', function(req, res){
	// create an incoming form object
	var form = new formidable.IncomingForm();
	
	// specify that we want to allow the user to upload multiple files to in a single request
	form.multiples = true;
	
	// store all uploads in the /uploads director
	form.uploadDir = __dirname + '/uploads';
	
	// every time a file has been uploaded successfully, rename it to it's oringal name
	form.on('file', function(field, file) {
		console.log('rename file');
		console.log(file.path);
		console.log(fs.rename(file.path, __dirname + '/uploads/' +file.name));
	});
	
	// log any errors that occured
	form.on('error', function(err) {
		console.log('An error has occured :\n' + err);
	});
	
	// Once all the files have been uploaded, send a response to the client
	form.on('end', function(){
		console.log('Your file(s) have been uploaded successfully');
	})
	
	// parse the incoming request containing the form data
	console.log('parse request');
	form.parse(req, function(err, fields, files) {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('received upload:\n\n');
        console.log("form.bytesReceived");
        //TESTING
        console.log("file size: "+JSON.stringify(files.inputFile.size));
        console.log("file path: "+JSON.stringify(files.inputFile.path));
        console.log("file name: "+JSON.stringify(files.inputFile.name));
        console.log("file type: "+JSON.stringify(files.inputFile.type));
        console.log("LastModifiedDate: "+JSON.stringify(files.inputFile.lastModifiedDate));
        console.log("Done");
		res.end('Your file(s) have been uploaded successfully');
	});
});

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Server is listening at http://%s:%s", host, port)

})