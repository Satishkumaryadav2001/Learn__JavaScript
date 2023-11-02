let arr=[2,3,4]

arr.forEach(function(element,index,arr){
    console.log(index,element,arr);

})

arr.forEach((element,index,arr)=>{
    console.log("This is Arrow Base Function:",index,element,arr);
})


const heros=["naagraj","doga","dhruv","maniraj"]
heros.forEach((el)=>{  console.log(el.toUpperCase())})


arr.map(function(element,index,arr){
    console.log(element,index,arr);
})

heros.map(h => console.log(h.toLowerCase()))

// // filter 

console.log(heros);
const herosWithRaj=heros.filter((h)=>{
    return h.endsWith("raj")
  
})
console.log("filter Value", herosWithRaj);


//Shopping Cart

const cartBill=[20,30,50]
const sumOfCartBill=cartBill.reduce((prev,curr)=>prev+curr,0)

console.log(sumOfCartBill);

const gameScore=[200,300,310,250,150]

//check if all values are number

const gameScoreCheck=gameScore.every((v)=>typeof v==="number")
console.log("check",gameScoreCheck);

// //find score  Above  200


const above200=gameScore.find((score)=>score > 200)

console.log(above200);
// home Work

// findIndex

const array1=[5,12,8,130,44];
const isLargeNumber=(element)=>element >13;
console.log(array1.findIndex(isLargeNumber));

// some

const array=[1,2,3,4,5];
//check whether an element is even
const even=(element)=>element%2===0;
console.log(array.some(even));

// sort

const months=['March','Jan','Feb','Dec'];
months.sort();
console.log(months);

array1.sort();
console.log(array1);
