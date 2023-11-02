//Basis
function one(){
    let score=0
    console.log(score)
}
// one()
// console.log(score);//ReferenceError: score is not defined

// next Level

let score=4
function one(){
    let score=0
    console.log(score)
}
function two(){
    let score=3
    console.log(score)
}
function three(){
    console.log(score)
}
// one()
// two()
// three()
// console.log(score);


function outerFunc(){
    let outerVAr='I am scope Level 1'
    function innerFunc(){
        let innerVal='I am scope Level 2'
        console.log(outerVAr);
        console.log(innerVal);
    }
    // console.log(innerVal);//ReferenceError: innerVal is not defined
    innerFunc();
}
// outerFunc();

const myGlobalValue= 0

function func(){
    const val1=1;
    console.log(myGlobalValue);


    function innerofFunc(){
        const val2=2
        console.log(val2,val1,myGlobalValue);
        
        function innerofInnerfFunc(){
           const val3=3
           console.log(val3,val2,val1,myGlobalValue);
        }   
        innerofInnerfFunc()
    }
    innerofFunc()
}
func()

//Closure

function superFunc(){
    let outerValue="I am outer"
    function minorFunc(){
        console.log(outerValue);
    }
    minorFunc()
}
// superFunc()

const errorMessage='File Not Found';
setTimeout(function callback(){
    console.log(errorMessage);

},1000)

let pageCount=0
const items=[1,2,3,4,5,8,0,7]
items.forEach(function iterator(num){
    pageCount++
   console.log(num);
})
console.log("Page Count",pageCount);
