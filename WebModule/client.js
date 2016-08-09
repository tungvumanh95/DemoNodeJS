var http = require('http');

// Options to be used by request
var options = {
	host: 'localhost',
	port: '8081',
	path: '/index.html',
}

// Callback function is used to deal with response
var callback = function (response) {
	// Continuously update stream with data
	var body = '';
	response.on('data', function(data) {
		body += data;
	});
	
	response.on('end', function(){
		// Confirm data received completetly
		console.log(body);
	});
}

// Make a request to server
var req = http.request(options, callback);
console.log('Request indext.html to Server');
req.end();