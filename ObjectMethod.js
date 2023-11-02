// 20 febuary 2023

let emp={
    id:101,
    name:'Sanket',
    age:24
};
console.log(emp);

let keys=Object.keys(emp);
console.log(keys);

let values=Object.values(emp);
console.log(values);

let entries=Object.entries(emp);
console.log(entries);

//Change

emp.id=100;
console.log(emp);


//Addition,Deletion Stop   Only   Update Allowes

Object.seal(emp);
emp.id=102;
emp.name="Mr.Satish";
emp.age=24;
emp.address="New Delhi"
delete emp.name;
console.log("Addition,Deletion Stop   only  Update Allowes:",emp);

//Change/Update/add->Stop

Object.freeze(emp);
emp.id=103;
emp.name="Satish";
emp.age=24;
console.log(emp);


//Create New Object use old object


let o1=Object.assign({},emp);
console.log("Create New Object use old objec",o1);

let o2=Object.assign({x:23,y:"Admin@gmail.com",z:0.8766},emp);
console.log("Create New Object use old objec",o2);





