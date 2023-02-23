let mysql=require("mysql");
let con =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"rollno_105"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    let sql = "CREATE TABLE Faculty (fac_name VARCHAR(255), fac_designation VARCHAR(255),fac_mobile INT(10),fac_subject VARCHAR(255),fac_salary INT(255) )";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });
