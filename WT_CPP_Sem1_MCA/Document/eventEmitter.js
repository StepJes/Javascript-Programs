const events = require('events');
const EventEmitter = new events.EventEmitter();
function Listener1(){
    console.log('Event recieved by Listener 1');
}
function Listener2(){
    console.log('Event recieved by Listener 2');
}

EventEmitter.addListener("write",Listener1);
EventEmitter.on("write",Listener2);

EventEmitter.emit("write");
console.log(EventEmitter.listenerCount("write"));
EventEmitter.removeListener("write",Listener1);
console.log("Listener 1 removed");
EventEmitter.emit("write");
console.log(EventEmitter.listenerCount("write"));
console.log("Program Ended");

// Q1. write a node js application to create arithematic operation(+-*/)

// Q2. write a application to demonstrate callback function

// Q3. write a application to demonstrate arrow function

// Q4. write a application to display fibonacci series

// Q5. write a application to display 10 prime numbers

// Q6. write a application to demonstrate module

// Q7. write a node js application to find area of circle, square, rectangle using modules

// Q8. write a application to demonstrate events module

// Q9. write a application to demonstrate events function(removeListener, listenerCount)