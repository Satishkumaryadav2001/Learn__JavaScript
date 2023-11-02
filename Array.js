//20th Febuary 2023


//Array  (Hatrozinision value Store)

//Part-1


let a=[1,2,3,4,'satish',false,7.7]
console.log(a);

let b=new Array(1,2,"ram","gopal");
console.log(b);

let c=new Array(100);
console.log(c);
/**
 * 
 * given array ->[11,21,,31,41,51]
 * index/pos   ->[,0,1,2,3,4]//last element index=arr.length-1
 * */
console.log(a[4]);
a[4]="Chanchala";//Mutable
console.log(a);

//Part-2


//Araay Methods

let arr=[1,2,3,4,5]
console.log(arr);
arr.push(6,7);//Last index value Add
console.log(arr);
arr.pop();//Last index value Remove
console.log(arr);

arr.shift();//Fast index value remove
console.log(arr);

arr.unshift(8);//Fast index value Add
console.log(arr);


//

let a1=[1,2,3,4,5]
let a2=[6,7,8,9,10]
let a3=a1.concat(a2);
console.log(a1,a2,a3);

let s =a3.join("@");
console.log(s);
a3.reverse();//Reverse Value
console.log(a3);

console.log(a3.indexOf(4));//find of index

let arr1=[1,2,3,4,5,6,7,8,9]
console.log(arr.slice(2,7));

arr1.splice(2,0,11)//Index Array Value not Delete only add
console.log(arr1);

arr1.splice(2,3,11)//Index Array Position  Value()   Delete  , value Add(11)
console.log(arr1);
