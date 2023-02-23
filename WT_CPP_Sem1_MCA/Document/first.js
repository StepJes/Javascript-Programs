function add1(a,b){
    console.log ("The numbers are "+a+" and "+b+". Addition is: ");
    return a+b;
}
exports.add1=add1;

function areaRectangle(a,b){
    console.log ("The Area of Rectangle with Lenght "+a+" and Breadth "+b+" is: ");
    return a*b;
}
exports.areaRectangle=areaRectangle;

function areaSquare(a){
    console.log("Area of Square with size of a side "+a+" unit is ");
    return a*a;
}
exports.areaSquare=areaSquare;

function areaCircle(a){
    console.log("Area of Circle with radius "+a+" unit is ");
    return a*3.14*a;
}
exports.areaCircle=areaCircle;