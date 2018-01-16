var http = require('http');

http.createServer(function(req, res) {
    res.write("Hello, Arshd! :)");
    res.end();
}).listen(4040);