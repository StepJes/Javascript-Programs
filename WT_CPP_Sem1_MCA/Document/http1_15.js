var http=require('http');
var server=http.createServer(function(req,res)
{
    res.write('Stephen_32\n');
    res.write('Hello Server');
    res.end();

});
server.listen(5000);
console.log('web.js Web server at port 5000 is running..')