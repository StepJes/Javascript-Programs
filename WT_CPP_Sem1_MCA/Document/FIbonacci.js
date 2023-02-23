console.log("FYMCA 32");
let  numb = 10; 
let  num1 = 0; 
let  num2=1;
let  temp; 
    for(let i=0;i<numb;i++)  
    { 
        if(i<=1){
        console.log(i)
    }
    if(i>1)
    {
        temp= num1 + num2;
        num1 = num2 
        num2 =temp 
        console.log(temp)
    }
    } 