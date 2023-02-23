var mysql=require('mysql');
var con=mysql.createConnection
({
    host:'localhost',
    user:'root',
    password:""
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected");
    con.query("Create database RollNo_104",function(err,result){
        if(err) throw err;
        console.log("database Create");
    });
    });


