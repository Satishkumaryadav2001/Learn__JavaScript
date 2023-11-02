let obj1={
    x:10,
    fun(){
        console.log(this.x);
    }
}
obj1.fun();

// Arrow Function (undefined)

let obj2={
    x:20,
    fun: () => {
        console.log(this.x);
    }
}
obj2.fun();

let obj3={
    x: 0,
    fun(){
        y={
          gun:() => {
            console.log(this.x)
          }
        }
        y.gun();
    }
}
obj3.fun();
