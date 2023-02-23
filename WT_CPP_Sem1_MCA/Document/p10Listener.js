var emitter = require('events').EventEmitter;
function LoopProcessor(num) {
    var e = new emitter();
    setTimeout(function() {
        for (var i = 1; i <= num; i++) {
            e.emit('BeforeProcess', i);
            console.log('processing number:' + i);
            e.emit('AfterProcess', i);
        }
    },2000)
    return e;
}
var lp = LoopProcessor(3);
lp.on('BeforceProcess', function(data) {
    console.log('About to start the process for ' + data);
});
lp.on('AfterProcess', function(data) {
    console.log('completed processing + data');
});