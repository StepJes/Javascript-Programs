var http = require('http');
var server = http.createServer(function (req, res) {
    if (req.url == '/home') 
    {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><h1> home</h1><body bgcolor="33F6FF"><p>this is Home Page</p><img src="flower.jpg" alt="Flowers Pic"><a href="/Admin">Admin</a><br><a href="/Student">Student</a><br></body></html>');
        res.end();

    }
    else if (req.url == '/Admin')
     {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><h1>Admin</h1><body bgcolor="B233FF"><p>this is Admin Page</p><a href="/Student">Student</a><br><a href="/home">home</a><br></body></html>');
        res.end();
    }
    else if (req.url == '/Student') 
    {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><h1>Student</h1><body bgcolor="93FF33"><p>This is Student Page</p><a href="/home">Home</a><br><a href="/Admin">Admin</a><br></body></html>');
        res.end();
    }
    else
        res.end('Invalid Request!');


});
server.listen(5500);
console.log('Node.js web server is shubham_105 running')