// // Resolve

// function createPromise(){
//     return new Promise(function exec(resole ,reject){
//         //You Code Goes Here
//         setTimeout(function f(){
//             console.log("Time Done");
//             resole("Resolve Done");
//         },3000);
//     });
// }
// console.log("Start");
// let x=createPromise();
// console.log("Got A New Promise");
// x.then(function f(value){
//     console.log("Promise Done",value);
// }).catch(function g(value){
//     console.log("Handled",value);
// }).finally(function fn(){
//     console.log("Finally");
// })
// console.log("End");

// for(let i=0; i<10000000000;i++){
//     //Some code
// }


//Reject

function createPromise(){
    return new Promise(function exec(resole ,reject){
        //You Code Goes Here
        setTimeout(function f(){
            console.log("Time Done");
            reject("Done");
        },3000);
    });
}
console.log("Start");
let x=createPromise();
console.log("Got A New Promise");
x.then(function f(value){
    console.log("Promise Done",value);
}).catch(function g(value){
    console.log("handled",value);
}).finally(function fn(){
    console.log("finaly");
})
console.log("End");

for(let i=0; i<10000000000;i++){
    //Some code
}