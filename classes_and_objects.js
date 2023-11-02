class Product{
// proprties ->variable ->data member
// name;
// price;
// rating;
#rating;


constructor(n,p,r){// javascript one constructor use but other language multiple constructor  like java
     {
        console.log('calling the constructor'); 
        this.name=n;
        this.price=p;
        this.#rating=r;
        // return 10;  if you're returing primitive then it will be avoided in constructor
        // return {x:0,y:20}//if you return non primitive then it will be returned
        // return this;
    }
}
static custom(){  //TypeError: p.custom is not a function (Static method classs use but  Object not use  )
    console.log("Calling a static method");
}

getRating(){
    console.log(this.#rating);
}
setRating(r){
    if(r < 0)return;
    this.#rating=r;
}
get ratingGetter(){
    console.log(this.#rating);
}
set ratingSetter(r){
    if(r < 0)return;
    this.#rating=r;
}


// behaviours -> functons -> member functions
disply(){
    // console.log("This is Refers to ",this);
    console.log("Displaying the current product",this.name,this.price,this.#rating);
}
}

const p=new Product("iphone",10000,5);//new -> creates an empty plain object
//->in the above piece of code we are calling the constructor method
console.log(p);
// console.log(p.rating);//undefined
// console.log(p.#rating)//SyntaxError: Private field '#rating' must be declared in an enclosing class

p.name="Sumsung";
p.setRating(10);
p.getRating();

p.ratingSetter=20;
p.ratingGetter;            

p.disply();
// p.custom();( Object not use calling)
Product.custom();//( class  use calling)