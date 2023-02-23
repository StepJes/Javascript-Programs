const fs =require('fs');
fs.readFile("pathread.js",'utf-8',function(err,data){
     console.log("Reading file");
    console.log(data);
});