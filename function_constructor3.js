const Product=(n,p,r) => {//TypeError: Product is not a constructor
    this.name=n;
    this.price=p;
    this.rating=r;
}
const p = new Product("iphone",10000,5);
console.log(p);

//the theory of this keyword pointing to calling context is not applicable with arrow function