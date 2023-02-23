const myfun=delay =>{
    console.log('hello after '+delay+' seconds ');
};
setTimeout(myfun,500,' five ');
setTimeout(myfun,10000,' ten ');