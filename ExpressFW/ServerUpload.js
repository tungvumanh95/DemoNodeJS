var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('resources'));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: false }));
//app.use(multer({ dest: './uploads/'})).single('inputFile');
app.use(multer({dest:__dirname + './uploads/'}).any());
//app.use(multer({ dest: 'tmp/'}));

app.get('/fileUpload', function(req, res) {
	res.sendFile(__dirname + '/' + 'fileUpload.html');
});

app.post('/uploadFile', function(req, res){
	console.log(req.files.name);
	var fileSrcName = req.files.originalname;
	var fileSrcPath = req.files.path;
	var fileSrcType = req.files.mimetype;
	console.log(fileSrcName);
	console.log(fileSrcPath);
	console.log(fileSrcType);
	
	var fileDes = __dirname + '/' + fileSrcName;
	fs.readFile(fileSrcPath, function(err, data) {
		fs.writeFile(fileDes, data, function(err) {
			var response;
			if (err) {
				console.error(err);
			} else {
				response = {
					message: 'Uploaded file Successfully',
					filename: fileSrcName
				};
			}
			console.log(response);
			res.end(JSON.stringify(response));
		});
	});
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Server is listening at http://%s:%s", host, port)

})