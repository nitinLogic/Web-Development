//This code prints Hellow World 5 times at interval of 2 seconds each
let id = setInterval(function () {
    console.log("Hello World");
}, 2000);

setTimeout(function (){
    clearInterval(id);
}, 10000);
