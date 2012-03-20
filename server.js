var http = require('http')

function start() {
  function onRequest(req, res){
    console.log("Request received.");
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello node.js!!\n');
  }

  http.createServer(onRequest).listen(8000);
  console.log("Server has started.");
}

exports.start = start;
