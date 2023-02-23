var http = require('http');
const {
  text
} = require('stream/consumers');
var server = http.createServer(function(req, res) {
  if (req.url == '/') {
    res.writeHead(200, {
      'content-type': 'text/html'
    });
    res.write('<html></head><body>');
    res.write('<style>ul li{display: inline-block; float: right; height: 40px;} ul li a{padding: 20px; background:orange; color: white;}</style>');
    res.write('<div><h1>My First Website</h1></div><div><ul><li><a href="/admin">Contact Admin</a></li> <li><a href="/student">Student</a></li> <li><a href="/home">Home</a></li></ul></div></div>');
    res.write('<div style="background: white; padding: 20px;"><h2>Start Page</h2><p>This is my first webpage hehe!</p><p>Hi everyone</p></div></body></html>');
    res.end();
  } else if (req.url == '/home') {
    res.writeHead(200, {
      'content-type': 'text/html'
    });
    res.write('<html><head><style>body{padding-left: 43px; padding-right:43px; background-color:lightyellow;} </style></head><body><p><h1>This is home page</h1></p><h1>Stephen Nadar</h1><h3>This page is a brief insight to who I am.</h3>');
    res.write('<nav style="background-color:black; text-align:center;"><ul><li><a href="/">Start Page</a></li><li><a href="/student">Student</a></li><li><a href="/admin">Admin</a></li></ul></nav></body></html>');
    res.end();
  } else if (req.url == '/student') {
    res.writeHead(200, {
      'content-type': 'text/html'
    });
    res.write('<div style="display: inline-block; float: right; height: 40px; padding: 20px;"><ul> <li><a href="/home">Home</a></li> <li><a href="/">Start Page</a></li>  <li><a href="/admin">Contact Admin</a></li></ul></div>');
    res.write('<html><head><style>body{background-color:pink;}</style> <title>Form</title></head><body bgcolor="White" > <h1 align="center">Student Page Form</h1>');
    res.write('<form action="url" method="post"><fieldset><legend>Personal Imformation</legend>');
    res.write('<lable><Strong>Student Name</strong></lable><br/><input type="text" name="Student Name" placeholder="Enter Your Name" /><br/>');
    res.write('<lable><Strong>Email</strong></lable><br/><input type="email" name="eamil" placeholder="Enter Your Email Address" /></br>');
    res.write('<lable><Strong>Password</strong></lable><br/>');
    res.write('<input type="password" name="Password" placeholder="Enter Your Password" /></br><lable><Strong>Gender</strong></lable><br/>');
    res.write('<input type="Radio" name="Gender" value="Male" />Male <input type="Radio" name="Gender" value="FeMale" />FeMale<br/>');
    res.write('<lable><Strong>Hobbies</strong></lable><br/>');
    res.write('<input type="checkbox" name="Hobbies" value="Playing Sports" />Playing Sports<br/>');
    res.write('<input type="checkbox" name="Hobbies" value="Listening Music" />Listening Music<br/>');
    res.write(' <input type="checkbox" name="Hobbies" value="Traveling" />Traveling<br/> <input type="checkbox" name="Hobbies" value="Reading Books" />Reading Books<br/>');
    res.write('<lable><Strong>Select Your City</strong></lable><select name="City">');
    res.write('<option value="Ahemdabad">Ahemdabad</option><option value="Kalol">Kalol</option><option value="Surat">Surat</option>');
    res.write(' <option value="Rajkot">Rajkot</option></select></br><input type="submit" onclick=alert("Thanks!") name="submit" value="Submit"/></form>');
    res.end();
  } else if (req.url == '/admin') {
    res.writeHead(200, {
      'content-type': 'text/html'
    });
    res.write('<style>ul li{display: inline-block; float: right; height: 40px;} ul li a{padding: 20px; background:orange; color: white;}</style>');
    res.write('<div><ul><li><a href="/admin">Contact Admin</a></li> <li><a href="/student">Student</a></li> <li><a href="/home">Home</a></li></ul></div></div><br><br>');
    res.write('<html><head><style>legend{text-align:center;} body{background-color:faf89a;border: 5px solid darkred;} form{display: inline-block; float: center; padding: 20px;} ');
    res.write('border-radius:4px; padding:40px 5px; max-width:100%;}</style></head>');
    res.write('<legend><h1><u>Admin Login</u></h1></legend>');
    res.write('<form action="#" method="POST" autocomplete="off">');
    res.write('<div class="input_field"><h3>Username</h3></div><div class="input_field"><input type="text" ');
    res.write('name="userid" placeholder="Username" required/></div>');
    res.write('<div class="input_field"><h3>Password</h3></div><div class="input_field"><input type="Password"');
    res.write('name="pword" placeholder="Password" required/></div><p>');
    res.write('<style>button{border:none; border-radius:5px; text-align:center; padding:15px 15px; background-color:lavender;<div></div></style>');
    res.write('<button onclick=alert("SUCESS")>LOGIN NOW</button></form>');
    res.end();
  } else {
    res.end('Invalid request');
  }
});
server.listen(5501);
console.log('Node.js web server at port 9000 is running');