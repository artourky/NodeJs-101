var http = require('http');
var ownmodule = require('./dateModule');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write("The Date and time are:" + ownmodule.myDateTime());
    res.end("I'm being controlled by a mad progammer!! HELP S O S!!");
}).listen(8080);