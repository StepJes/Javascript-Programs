var req=require('./perimeter.js');
var res=req.circle(4);
console.log('perimeter of circle is:',res);

var req=require('./perimeter.js');
var res=req.square(4);
console.log('perimeter of square is: ',res);


var req=require('./perimeter.js');
var res=req.rectangle(4,5);
console.log('perimeter of rectangle is: ',res);