const { getEventListeners } = require('events');
var http = require('http');
var server = http.createServer(function(req,res) 
{
    if(req.url == '/'){         // check the URL of the current rwquest 
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is home page</p></body></html>');
        res.end();
    }
    else
    res.end('Invalid Request!');
});
server.listen(5500);
console.log('Node.js web server at port 5000 is running...')