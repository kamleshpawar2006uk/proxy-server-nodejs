var http = require('http'),
    httpProxy = require('http-proxy'),
    express = require('express'),
    ws = require('ws');

var target = 'http://localhost:8083';
var app = express();
var server = http.createServer(app);

// Proxy server
var proxy = httpProxy.createProxyServer({
  target: target,
  ws: true
});

// For all HTTP requests, proxy to the target
app.use(function(req, res) {
  proxy.web(req, res, { target: target });
});

// Listen for the `upgrade` event and proxy the WebSocket requests.
server.on('upgrade', function(req, socket, head) {
  proxy.ws(req, socket, head);
});

server.listen(3011, function() {
  console.log('Proxy server is running at http://localhost:3011');
});
