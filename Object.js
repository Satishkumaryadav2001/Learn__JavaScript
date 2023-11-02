// 20 Febuary 2023

//Creating object and manipulating values in object


let obj1={id:100,name:"Satish",salary:5765}
let obj2={id:101,name:"alex",salary:1000};
console.log(obj1);
console.log(obj2);


let emp1=new Object();
console.log(emp1);

let emp2=new Object();
emp2.id=1
emp2.name="Satish";
emp2.salary=5034035;

console.log(emp2);




function Emp(i,n,s){
    this.id=i
    this.name=n;
    this.salary=s;
}
const e=new Emp(103,"Chanchala",800654);
console.log(e);


//Key ,Value Access

console.log(emp2.id);
console.log(emp2.name);
console.log(emp2.salary);


console.log(emp2['name']);


//Key ,Value Assign/Update

emp2.salary=600050;
console.log(emp2);

//Update

emp2['salary']=74230050;
emp2['name']="Mr.Satish Yadav";
console.log(emp2);

//delete

delete emp2.id
console.log(emp2);


