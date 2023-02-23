var fs =require("fs");
fs.rename("Stephen.txt","hello.txt",function(err){
    if(err) throw err;
    console.log("File Renamed")
});