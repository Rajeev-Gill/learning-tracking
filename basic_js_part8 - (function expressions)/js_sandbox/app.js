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