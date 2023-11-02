// 20 Febuary 2023


//Part--1

// Introducation to Function

/*
function functionName(){
    //Function body
}
*/

function greet(){
    console.log("Hi There");
    console.log("How are you");
}
greet();

function sqr(x){ //X----Place Holder(Prrameter)
    console.log(x*x);
}
sqr(8);// 8--Arguments


function cube(x){ //X----Prrameter
   // console.log(x*x)
   return x*x*x;
}
let a=cube(6);// 4--Arguments
console.log(a);

//Part-2

//Function without a parameter and return 


//Function Declaration

function sayMessage(){
    console.log("I Am Happy To Learn Full Stack Web Development From Pw Skills");

}
sayMessage();
sayMessage();
sayMessage();
sayMessage();


//Function Returning Value

//Declaration

function passMessage(){
    return "I Am Happy To Learn Full Stack Web Development From Pw Skills";
}
let message=passMessage();
//The function would be executed and on executing the return statement the returned message is stored in the message variable
console.log("Reuring Value:",message);


//Part-3

//Function with a parameter(Single and Multiple)

//function Declaration

function displayMessage(MessageToBeDisplayed){//Parameter
    console.log(MessageToBeDisplayed);

}

//Calling in a function.
displayMessage("I Am Happy To Learn Full Stack Web Development From Pw Skills Part-3");
displayMessage("I am enjoying the journey of JavaScript Part-3");

//Function with default parameter.

//Function Declaration

function displayMessage(MessageToBeDisplayed="I am proud student of PW Skills"){
    console.log(MessageToBeDisplayed);
}


//Calling in a Function.
displayMessage("I Am Happy To Learn Full Stack Web Development From Pw Skills Saket Sir");//Argument
displayMessage();//default value(Not Argument paased)


function add(x,y){
    return x+y;
}
console.log(add(3,7));

//Default value

function add(x,y=6){
    return x+y;
}
console.log(add(3));

function add(x=6,y=6){
    return x+y;
}
console.log(add());



//Function With Two Parameters.
function sum_1(num1,num2){
    return num1+num2;
}
//Calling a Function

let result1=sum_1(10,40);
console.log(result1);



//Array as an Argument.

function sum_2([num1,num2]){
    return num1+num2;
}
//Calling a Function
let numbers=[10,40]
let result2=sum_2(numbers);
console.log(result2);

//Part - 4

//Function with an unlimited number of parameters


//Function declaration

function sumOfAllParameters(){
    let sum=0;
    for(var i=0; i < arguments.length; i++)
    sum+=arguments[i];
    return sum;
}
let result=sumOfAllParameters(1,2,3,4,5);
console.log("Function with an unlimited number of parameters:",result);


//Part - 5

//Introducation To Arrow Function

//1. One Prarameter,and a single return statement

const square=(x)  =>x*x;

//2.Multiple parameter,and a single return expression

const sumOFtwoNUmber=(x,y)=>x+y;

//3.Multiple statements in function expression

const sum=(x,y)=>{
    console.log('Adding ${x} and ${y}' );
    return x+y;
}

//Returning an Object

const sumAndDifference=(x,y)=>({sum:x+y,difference:x-y});

//Calling A  Function

let output1=square(5);//Output:25
console.log(output1);
let output2=sumOFtwoNUmber(1,2);//output:3
console.log(output2);
let output3=sum(1,2);//Adding 1 and 2:3
console.log(output3);
let output4=sumAndDifference(5,3)//output{sum:8,difference:2}
console.log(output4);

//Part -6
//Part -7 Revision
//Part -8 Revision
//Anonymous Functions.

let x=function(){
    console.log("hi")
}
x();


//Immediately Invoke function//Self Invoke function

(function exec(){
    console.log("named function");
})
//Function Calling
();


(function (x){
    console.log(x*x);
})
//Function Calling
(6);


