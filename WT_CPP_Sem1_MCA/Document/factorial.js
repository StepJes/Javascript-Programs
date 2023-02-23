function factorial(num){
    factorial=1;
    for(i=1;i<=num;i++){
        factorial=factorial*i;
    }
    console.log('Factorial of '+num+' is '+factorial);
}
factorial(5)