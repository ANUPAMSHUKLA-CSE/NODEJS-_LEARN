var http = require("http");
http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});  //give sucess status 200 means success
    
    // Send the response body as "Hello World"
    response.end('Hello World ,anupam\n');
 }).listen(8081); //8081 port mei summarise
 
 // Console will print the message
 console.log('Server running at http://127.0.0.1:8081/');