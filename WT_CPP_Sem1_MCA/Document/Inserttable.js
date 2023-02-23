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
    var sql = `INSERT INTO Faculty (fac_name ,fac_designation,fac_mobile ,fac_subject,fac_salary) VALUES 
    ('Rahul','Professor','6654851520','Advance Java','100000'),
    ('Seema','Professor','8534416332','Web Technology','100000'),
    ('Murlidhar','Professor','9634513232','Software Project Management','100000')
    ` ;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Record inserted");
    });
  });