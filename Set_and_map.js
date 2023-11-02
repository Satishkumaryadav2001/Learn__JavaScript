

// let emptyset=new Set()
// // console.log(emptyset);
// // console.log(emptyset.size);

// let myArray=[1,2,3,4]
// let newSet=new Set(myArray)
// console.log(newSet);



// let myArray1=[1,2,3,4,2,4,1]//Set a not same value Store 
// let newSet1=new Set(myArray1)
// console.log(newSet1);

// let myArray2=[1,2,3,4]
// let newSet2=new Set([...myArray2])
// console.log(newSet2);

// newSet2.add(4);//Repated value not add
// console.log(newSet2);
// newSet2.add(9);
// console.log(newSet2);
// console.log(newSet2.has(9));
// newSet2.clear()
// console.log(newSet2);


// //Set Difference

// function setDifference(setA,setB){
//    return new setA([...setA].filter(el => !setB.has(el)))

// }


// //Map

// let map=new Map();
// console.log(map);
// console.log(map.size);


// let arr=[
//     [1,"Satish"],
//     [2,"Chanchala"],
//     [3,"Archana"],
//     [4,"Ranjeet"],
//     [5,"Amit"],
//     [6,"Ankit"],
//     [7,"Arpit"],
//     [8,"Pankaj"],
//     [9,"Pappu"],
//     [10,"Rammu"]
// ];

// arr.map((arratItem)=>map.set(arratItem[0],arratItem[1]))


//MDN Doct (SET)


// const mySet1 = new Set();

// mySet1.add(1); // Set(1) { 1 }
// mySet1.add(5); // Set(2) { 1, 5 }
// mySet1.add(5); // Set(2) { 1, 5 }
// mySet1.add("some text"); // Set(3) { 1, 5, 'some text' }
// const o = { a: 1, b: 2 };
// mySet1.add(o);

// mySet1.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay

// mySet1.has(1); // true
// mySet1.has(3); // false, since 3 has not been added to the set
// mySet1.has(5); // true
// mySet1.has(Math.sqrt(25)); // true
// mySet1.has("Some Text".toLowerCase()); // true
// mySet1.has(o); // true

// mySet1.size; // 5

// mySet1.delete(5); // removes 5 from the set
// mySet1.has(5); // false, 5 has been removed

// mySet1.size; // 4, since we just removed one value

// mySet1.add(5); // Set(5) { 1, 'some text', {...}, {...}, 5 } - a previously deleted item will be added as a new item, it will not retain its original position before deletion

// console.log(mySet1); // Set(5) { 1, "some text", {…}, {…}, 5 }


// // Iterating sets---------The iteration over a set visits elements in insertion order.


// for (const item of mySet1) {
//     console.log(item);
//   }
//   // 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5
  
//   for (const item of mySet1.keys()) {
//     console.log(item);
//   }
//   // 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5
  
//   for (const item of mySet1.values()) {
//     console.log(item);
//   }
//   // 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5
  
//   // key and value are the same here
//   for (const [key, value] of mySet1.entries()) {
//     console.log(key);
//   }
//   // 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5
  
//   // Convert Set object to an Array object, with Array.from
//   const myArr = Array.from(mySet1); // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}, 5]
  
//   // the following will also work if run in an HTML document
//   mySet1.add(document.body);
//   mySet1.has(document.querySelector("body")); // true
  
//   // converting between Set and Array
//   const mySet2 = new Set([1, 2, 3, 4]);
//   console.log(mySet2.size); // 4
//   console.log([...mySet2]); // [1, 2, 3, 4]
  
//   // intersect can be simulated via
//   const intersection = new Set([...mySet1].filter((x) => mySet2.has(x)));
  
//   // difference can be simulated via
//   const difference = new Set([...mySet1].filter((x) => !mySet2.has(x)));
  
//   // Iterate set entries with forEach()
//   mySet2.forEach((value) => {
//     console.log(value);
//   });
//   // 1
//   // 2
//   // 3
//   // 4

// //   Implementing basic set operations

// function isSuperset(set, subset) {
//     for (const elem of subset) {
//       if (!set.has(elem)) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   function union(setA, setB) {
//     const _union = new Set(setA);
//     for (const elem of setB) {
//       _union.add(elem);
//     }
//     return _union;
//   }
  
//   function intersection(setA, setB) {
//     const _intersection = new Set();
//     for (const elem of setB) {
//       if (setA.has(elem)) {
//         _intersection.add(elem);
//       }
//     }
//     return _intersection;
//   }
  
//   function symmetricDifference(setA, setB) {
//     const _difference = new Set(setA);
//     for (const elem of setB) {
//       if (_difference.has(elem)) {
//         _difference.delete(elem);
//       } else {
//         _difference.add(elem);
//       }
//     }
//     return _difference;
//   }
  
//   function difference(setA, setB) {
//     const _difference = new Set(setA);
//     for (const elem of setB) {
//       _difference.delete(elem);
//     }
//     return _difference;
//   }
  
//   // Examples
//   const setA = new Set([1, 2, 3, 4]);
//   const setB = new Set([2, 3]);
//   const setC = new Set([3, 4, 5, 6]);
  
//   isSuperset(setA, setB); // returns true
//   union(setA, setC); // returns Set {1, 2, 3, 4, 5, 6}
//   intersection(setA, setC); // returns Set {3, 4}
//   symmetricDifference(setA, setC); // returns Set {1, 2, 5, 6}
//   difference(setA, setC); // returns Set {1, 2}

  
// //   Relation to arrays

// const myArray = ["value1", "value2", "value3"];

// // Use the regular Set constructor to transform an Array into a Set
// const mySet_1 = new Set(myArray);

// mySet_1.has("value1"); // returns true

// // Use the spread syntax to transform a set into an Array.
// console.log([...mySet_1]); // Will show you exactly the same Array as myArray


// // Remove duplicate elements from an array

// // Use to remove duplicate elements from an array

// const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];

// console.log([...new Set(numbers)]);

// // [2, 3, 4, 5, 6, 7, 32]


// const text = "India";

// const mySet = new Set(text); // Set(5) {'I', 'n', 'd', 'i', 'a'}
// mySet.size; // 5

// // case sensitive & duplicate omission
// new Set("Firefox"); // Set(7) { "F", "i", "r", "e", "f", "o", "x" }
// new Set("firefox"); // Set(6) { "f", "i", "r", "e", "o", "x" }


// const array = Array.from(document.querySelectorAll("[id]")).map((e) => e.id);

// const set = new Set(array);
// console.assert(set.size === array.length);








// MAP NDN DOCS


// JavaScript Demo: Map


const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b');

console.log(map1.size);
// Expected output: 


// Setting object properties------Therefore, this appears to work in a way


const wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";

console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }


// But that way of setting a property does not interact with the Map data structure. It uses the feature of the generic object. The value of 'bla' is not stored in the Map for queries. Other operations on the data fail:


wrongMap.has("bla"); // false
wrongMap.delete("bla"); // false
console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }



//The correct usage for storing data in the Map is through the set(key, value) method. 

const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true
console.log(contacts.size); // 1



