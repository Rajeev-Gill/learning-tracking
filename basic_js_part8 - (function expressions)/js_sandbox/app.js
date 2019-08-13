//fn Syntax
function funcName(params) {
   return params + 2;
 }
funcName(2);
// 4

var funcName = (params) => params + 2
funcName(2);
// 4

//Function expressions
const square = function(x){
    return x*x;
};

console.log(square(8));

//Immediately Invoked Function Expression IIFE
//wrap function in bracket
//Then call it
//With name parameter
(function(name){
    console.log(name + "s " + "IIFE active");
})("Rajeev");

