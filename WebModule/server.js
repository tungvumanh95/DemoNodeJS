var http = require('http');
var fs = require('fs');
var url = require('url');

// Create a Server
http.createServer(function (request, response) {
	// Parse the request containing file name
	var pathname = url.parse(request.url).pathname;
	// Print the name of the file for which request is made.
   console.log("Request for " + pathname + " received.");
	// Read the requested file content from file system
	fs.readFile(pathname.substr(1), function(err, data) {
		if (err) {
			console.log(err);
			// HTTP Status 404: NOT FOUND
			// Content Type: text/html
			response.writeHead(404, {'Content-Type': 'text/html'});
		} else {
			// HTTP Status 200: OK
			// Content Type: text/html
			response.writeHead(200, {'Content-Type': 'text/html'});
			// Write the content of the file to response
			response.write(data.toString());
		}
		// Send the response bod
		response.end();
	});
}).listen(8081);

// Print the message
console.log('Server is now running at http://127.0.0.1:8081');