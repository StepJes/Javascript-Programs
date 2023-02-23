let mysql=require("mysql");
let con =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"rollno_105"
});
con.connect(function(err) {
    if (err) throw err;
    var sql = `DELETE FROM faculty WHERE fac_name='Murlidhar';`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("record delete");
    });
  });