const fs = require('fs');
fs.readFile("abc.txt",'utf-8',function(err,data){
    console.log(data);
});
fs.writeFile("abc1.txt",'Your Buddy',function(err,data){
    console.log(data);
});
fs.appendFile('abc.txt','Your Friend',function(err,data){});
fs.rename('abc1.txt','gogo.txt',function(err,data){});