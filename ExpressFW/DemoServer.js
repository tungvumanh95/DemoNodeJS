var express = require('express');
var app = express();

app.get('/', function(req, res) {
	console.log('Request Param: ' + req.param('id')+ '\n');
	res.send('Hello Worlddddddd');
})

var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Server is listening at http://%s:%s', host, port);
});

console.log('Starting Server');