let pattern="pw";
let regExone=new RegExp(pattern)

let flag='gi';
let regExTwo=new RegExp(pattern,flag)


let regExThree=/pw/gi

const strToCheck="pw is growing at a rapid speed and recently they are working on pwskills to create skills based pwcontent";

// const result1=regExone.test(strToCheck);
// const result2=regExTwo.test(strToCheck);

const result3=regExThree.test(strToCheck);


console.log(result3);

const anotherResult=strToCheck.match(regExThree)

console.log(anotherResult);

const oneMoreResult=strToCheck.replace(regExThree,'p-w')
console.log(oneMoreResult);


// const webUrl="https://pwskills.com/hitesh%20choudhary"

// const useableUrl=webUrl.replace(/%20/,'-')
// console.log(useableUrl);

// const webUrl="https://pwskills.com/hitesh%30choudhary"

// const useableUrl=webUrl.replace(/%\d0/,'-')
// console.log(useableUrl);

const webUrl="https://pwskills.com/hitesh%27choudhary"

const useableUrl=webUrl.replace(/%\d\d/,'-')
console.log(useableUrl);