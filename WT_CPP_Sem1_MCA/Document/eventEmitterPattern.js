//event emitter pattern: Return Event Emitter from a function

var emitter = require('events').EventEmitter;
function LoopProcessor(num){
    var e = new emitter();
    setTimeout(function(){
        for(var i=1;i<=num;i++){
            e.emit('BeforeProcess',i);
            console.log('Processing number: '+i);
            e.emit('AfterProcess',i);
        }
    },2000)
    return e;
}
var Ip = LoopProcessor(3);
Ip.on('BeforeProcess',function(data){    
console.log('About to start the process for '+data);
});
Ip.on('AfterProcess',function(data){
    console.log('Completed processing '+data);
});