var mysql = require('mysql')
var con = mysql.createConnection({
    host:"localhost",user:"root",password:"",database:"32_Stephen"});
    con.connect(function(err){
        if(err)throw err;
        console.log('connected');
        var sql=("CREATE TABLE 32_student(stud_id INTEGER (4), stud_name VARCHAR(20),stud_add VARCHAR(100),stud_fees INTEGER(10))";
        con.query(sql,function(err,result){
            if(err) throw err;
            console.log("Table Created");
        });
    });