var i=0;
var myfun = setInterval(function(){
    i+=1
    console.log('Sterling Institute after '+i+' seconds');
    if(i==4){
        clearInterval(myfun);
        console.log('The End');
    }
},1000);