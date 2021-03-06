// HTTP UPPERCASE
var http = require('http');
var map = require('through2-map');
var port = process.argv[2];

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});
    if(req.method != 'POST') return res.end('The request method must be POST');

    req.pipe(map(function(data) {
        return data.toString().toUpperCase();
    })).pipe(res);
});

server.listen(port);
