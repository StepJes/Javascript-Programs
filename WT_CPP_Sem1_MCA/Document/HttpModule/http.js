var http = require ('http');
var server = http.createServer(function(req,res){
    res.write("Hello Server");
    res.end();


});
server.listen(5000);
console.log('Node.js web server at port 5500 is running...')