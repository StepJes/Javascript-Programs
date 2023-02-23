const fs =require("fs");
fs.writeFile('Stephen.txt','Hello sir its good to see you again',function(err,data){
    console.log("writing");
    console.log(data);
});