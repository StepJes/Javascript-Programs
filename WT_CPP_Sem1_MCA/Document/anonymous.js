const message=function()
{
    console.log("Hi I am NodeJs,Welcome");
}
setTimeout(message,3000);

setTimeout(()=>{
    console.log("calling from arrow function");
},8000);
console.log("FYMCA 32");