const myfun = delay =>{
    console.log('Hello after '+delay+' seconds');
};
setTimeout(myfun,5000,'five 32')
setTimeout(myfun,10000,'ten 32')