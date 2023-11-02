const Product=function(n,p,r){
    this.name=n;
    this.price=p;
    this.rating=r;
}
const p=new Product("iphone",10000,5);
console.log(p);