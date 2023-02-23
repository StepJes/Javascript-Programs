var flag;
console.log('FYMCA 32');
function displayresult(some){
    if(flag==0)
    {
        console.log("Number is even");
    }
    else{
        console.log("number is odd");
    }
}
function calculate(num,mycallback)
{
    if(num%2==0){
        flag=0;
    }
    else{
        flag=1;
    }
    mycallback(flag);
}
    calculate(30,displayresult); 
   