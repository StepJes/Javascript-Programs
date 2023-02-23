let mysql=require("mysql");
let con =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"rollno_105"
});
con.connect(function(err) {
    if (err) throw err;
    var sql = `ALTER TABLE faculty ADD fac_address varchar(255);`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("column added");
    });
  });