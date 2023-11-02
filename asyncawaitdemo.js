function createPromise(){
    return new Promise(function exec(resole ,reject){
        //You Code Goes Here
        setTimeout(function f(){
            console.log("Time Done");
            resole(10);
        },3000);
    });
}
// async function consume(){
//     return 10;
// }
// console.log(consume())

async function consume(){
 try {
    console.log("inside function");
    const response =await createPromise();
    console.log("Response is",response);
 } catch (error) {
    console.log("handled",error);
    
 }
}
console.log("Start");
consume();
console.log("End");


