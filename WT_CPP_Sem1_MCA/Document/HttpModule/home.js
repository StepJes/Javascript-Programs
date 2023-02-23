//const { getEventListeners } = require('events');
var http = require('http');
const PORT=5800;
var server = http.createServer(function(req,res) 
{
    if(req.url == '/'){         // check the URL of the current rwquest 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body><p>This is root page</p></body></html>');
    res.end();
}
    if(req.url == '/home'){         // check the URL of the current rwquest 
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<!DOCTYPE html> <html> <head> <meta name="viewport" content="width=device-width, initial-scale=1"> <title> Home Login Page </title> <style> Body { font-family: Calibri, Helvetica, sans-serif; background-color: pink; } button { background-color: #4CAF50; width: 100%; color: orange; padding: 15px; margin: 10px 0px; border: none; cursor: pointer; } form { border: 3px solid #f1f1f1; } input[type=text], input[type=password] { width: 100%; margin: 8px 0; padding: 12px 20px; display: inline-block; border: 2px solid green; box-sizing: border-box; } button:hover { opacity: 0.7; } .cancelbtn { width: auto; padding: 10px 18px; margin: 10px 5px; } .container { padding: 25px; background-color: lightblue; } </style> </head> <body> <center> <h1> Home Login Form </h1> </center> <form> <div class="container"> <label>Username : </label> <input type="text" placeholder="Enter Username" name="username" required> <label>Password : </label> <input type="password" placeholder="Enter Password" name="password" required> <button type="submit">Login</button> <input type="checkbox" checked="checked"> Remember me <button type="button" class="cancelbtn"> Cancel</button> Forgot <a href="#"> password? </a> </div> </form> </body> </html> ');
        res.end();
    }
    
    else if(req.url == '/student'){         // check the URL of the current rwquest 
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<!DOCTYPE html> <html> <head> <meta name="viewport" content="width=device-width, initial-scale=1"> <title> Student Login Page </title> <style> Body { font-family: Calibri, Helvetica, sans-serif; background-color: blue; } button { background-color: #4CAF50; width: 100%; color: orange; padding: 15px; margin: 10px 0px; border: none; cursor: pointer; } form { border: 3px solid #f1f1f1; } input[type=text], input[type=password] { width: 100%; margin: 8px 0; padding: 12px 20px; display: inline-block; border: 2px solid green; box-sizing: border-box; } button:hover { opacity: 0.7; } .cancelbtn { width: auto; padding: 10px 18px; margin: 10px 5px; } .container { padding: 25px; background-color: lightblue; } </style> </head> <body> <center> <h1> Student Login Form </h1> </center> <form> <div class="container"> <label>Username : </label> <input type="text" placeholder="Enter Username" name="username" required> <label>Password : </label> <input type="password" placeholder="Enter Password" name="password" required> <button type="submit">Login</button> <input type="checkbox" checked="checked"> Remember me <button type="button" class="cancelbtn"> Cancel</button> Forgot <a href="#"> password? </a> </div> </form> </body> </html> ');
        res.end();
    }
    else if(req.url == '/admin'){         // check the URL of the current rwquest 
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<!DOCTYPE html> <html> <head> <meta name="viewport" content="width=device-width, initial-scale=1"> <title> Admin Login Page </title> <style> Body { font-family: Calibri, Helvetica, sans-serif; background-color: red; } button { background-color: #4CAF50; width: 100%; color: orange; padding: 15px; margin: 10px 0px; border: none; cursor: pointer; } form { border: 3px solid #f1f1f1; } input[type=text], input[type=password] { width: 100%; margin: 8px 0; padding: 12px 20px; display: inline-block; border: 2px solid green; box-sizing: border-box; } button:hover { opacity: 0.7; } .cancelbtn { width: auto; padding: 10px 18px; margin: 10px 5px; } .container { padding: 25px; background-color: lightblue; } </style> </head> <body> <center> <h1> Admin Login Form </h1> </center> <form> <div class="container"> <label>Username : </label> <input type="text" placeholder="Enter Username" name="username" required> <label>Password : </label> <input type="password" placeholder="Enter Password" name="password" required> <button type="submit">Login</button> <input type="checkbox" checked="checked"> Remember me <button type="button" class="cancelbtn"> Cancel</button> Forgot <a href="#"> password? </a> </div> </form> </body> </html> ');
        res.end();
    }
   else{
    res.end('Invalid Request!');
   }
});
server.listen(PORT);
console.log('Node.js web server at port 5500 is running...')