//Global scope example
var a  = 1;
let b = 2;
const c = 3;

//Function scope example
function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log("Function scope", a,b,c);
}

//Block scope example
// if (true) {
//     //Block scope vars will change however lets will not as let is a "block" scoped variable
//     var a = 7;
//     let b = 8;
//     const c = 9;
//     console.log("Block scope", a,b,c);
// }

for(let a = 0; a < 10; a++){
    console.log(`Loop: ${a}`);
}

console.log("Global scope", a,b,c);