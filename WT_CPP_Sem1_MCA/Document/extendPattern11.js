//event emitter pattern: Extend Event Emitter from a function
var emitter = require('events').EventEmitter;
var util = require('util');
function LoopProcessor(num){
    var me = this;
    setTimeout(function(){
        for(var i=1;i<=num;i++){
            me.emit('BeforeProcess',i);
            console.log('Processing number: '+i);
            me.emit('AfterProcess',i);
        }
    },2000)
    return this;
}
util.inherits(LoopProcessor,emitter)
var Ip = new LoopProcessor(3);
Ip.on('BeforeProcess',function(data){    
console.log('About to start the process for '+data);
});
Ip.on('AfterProcess',function(data){
    console.log('Completed processing '+data);
});