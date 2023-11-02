function Product(n,p,r){
    this.name=n;
    this.price=p;
    this.rating=r;
    // return 10;
    // return {x:10}
    // return this;
}
const p=new Product("macbook",150000,5);
console.log(p);

let x={
    p:Product
};
x.p("airpods",2000,5);//calling contexts
console.log(x);
/**
 * 1. this keyword is javascript is different than other Language
 * 2. this keyword refers to the context from where we called
 * 3. in the function constructor also
 * 4. -if you return primitive it is ignored and we return the object referred by this
 * 5.if you return a coustom obj,them the custom obj is returned
 * 6.-if you don't return anything,them object referred by this is returned   
 * 
 */