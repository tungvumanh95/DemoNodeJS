var express = require('express');
var app = express();
var bodyParser = require('body-parser'); // for POST

// using static file in resouces folder
app.use(express.static('resources'));

app.get('/', function (req, res) {
	res.send('Hello World Static Resources');
});

app.get('/index', function (req, res) {
	res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/getProcess', function (req, res) {
	// Output in JSON format
	var response = {
		//firstName: req.query.firstName,
		//lastName: req.query.lastName,
		firstName: req.param('firstName'),
		lastName: req.param('lastName')
	}
	console.log('Response: ' + response);
	res.send(JSON.stringify(response));
	res.end();
});

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.post('/postProcess', urlencodedParser, function (req, res) {
	// Output in JSON format
	var response = {
		methodType: 'POST',
		firstName: req.param('firstName'),
		lastName: req.param('lastName')
	}
	console.log('Response: ' + response);
	res.send(JSON.stringify(response));
	res.end();
});

var server = app.listen(8081, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Server is listening at http://%s:%s', host, port);
})