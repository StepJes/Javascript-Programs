var req = require('./first.js');
var res = req.add1(3,4);
console.log(res);

var resRectArea = req.areaRectangle(3,5);
console.log(resRectArea+" Sq. Unit");

var resSquareArea = req.areaSquare(5);
console.log(resSquareArea+" Sq. Unit");

var resCircleArea = req.areaCircle(7);
console.log(resCircleArea+" Sq. Unit");