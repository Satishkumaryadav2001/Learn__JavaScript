let myHeros=["thor","spiderman"]
let dcHeros=["batman","flas","suparman"]


let heropower={
    thor:"hammer",
    spiderman:"sling",

    getSpidermanPOwer:function(){
        console.log('Spidy power is ${this.spiderman}');
    }
}
Object.prototype.satish=function(){
    console.log('Satish is peresent in all object');
}
console.log(myHeros.satish());
console.log(heropower.satish());


Array.prototype.heySatish=function(){
    console.log("Satish sys hi");
}
console.log(myHeros.heySatish());
// console.log(heropower.heySatish());



//inheritance

const User={
    name: "top name",
    email: "top@gmail.com"
}
const Teacher={
    makeVideos:true
}
const TeachingSupport={
    isAvailable: false 
}
const TAAssistant={
    makeAssignment: "JS Assignment",
    fulltime:true,
    __proto__:TeachingSupport//(both sides double underscor _ _ )
}
// Teacher.__proto__=User
Object.setPrototypeOf(TeachingSupport,Teacher)
console.log(TAAssistant.isAvailable);

String.prototype.truelength=function(){
    console.log('True lengh is ${this.trim().length}');//Error
}
"satish.    ".truelength()
"hitesh     ".truelength()
