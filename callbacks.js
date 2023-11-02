// function h( x, fn){
//     //h -> is a hof
//     //fn ->callback
//     console.log(x*x);
//     fn(x*x);

// }
// // h(10,function(){
// //     console.log("Done with callback");
// // })


// h(10,exec)

// function exec(n){
//     console.log("squared value is",n);

// }



// Settimeout

console.log("Start");

setTimeout(function f() {

    console.log("Timmer done");
    
}, 3000);
for (let i=0; i<=100000000; i++) {}
console.log("End");
