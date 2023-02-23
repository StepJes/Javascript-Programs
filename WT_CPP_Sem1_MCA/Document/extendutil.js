var emitter = require('events').EventEmitter;
var util = require('util'); 
function LooProcessor(num){
    var me = this;

    setTimeout(function(){
        for(var i=1;i<=num;i++){
            me.emit('BeforeProcess',i);
            console.log('Processing number:'+i);
            me.emit('AfterProcess',i);

        }
    } ,2000)
    return this;

}
util.inherits(LooProcessor,emitter)
var lp= new LooProcessor(3);
lp.on('BeforeProcess',function(data){
    console.log('About to start the process for:'+data);
});
lp.on('AfterProcesa',function(data){
    console.log('Completed processing'+data);

});
