//Destructing-Spread-Rest
//**************************************************************************************
//SPREAD

const oneArray=[1,2,3,4,5]
const twoArray=[6,7,8,9,10]

// const threeArray=oneArray.concat(twoArray)
// const threeArray=[oneArray,twoArray]
const threeArray=[...oneArray,...twoArray]//
// console.log(threeArray);


//*********************************************************************************
// //Rest
function manyArgumnts(){
    // console.log(typeof arguments);
    let args=Array.from(arguments)
    let finalArr=args.map(e=>e)
    console.log(finalArr);
}
manyArgumnts(1,2,3)
manyArgumnts(1,2,3,4,5,6)

function manyArgumnts2(...args){
    console.log(typeof args);
    let finalArr=args.map(e=>e)
    console.log(finalArr);
}
manyArgumnts(1,2,3)
manyArgumnts2(5,6,7,8,9)

// //*************************************************************************************
const names=["suparman","flash"]
const newNames=["Batman",...names,"thor"]

const sitename="pwskills";//Spread
console.log([...sitename]); 

function pwskills(...values){
    return values
}//Rest
console.log(pwskills("superman","flash"));

// Set   



