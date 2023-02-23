let mysql=require("mysql");
let con =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"rollno_105"
});
con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE Faculty SET fac_salary = '250000' WHERE fac_name = 'Rahul'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });