let mysql=require("mysql");
let con =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"rollno_105"
});


con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM Faculty", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });