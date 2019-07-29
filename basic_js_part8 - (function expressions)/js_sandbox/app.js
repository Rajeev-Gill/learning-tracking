//fn Syntax
hello = function() {
  return "Hello World!";
}

//Arrow fn syntax
hello = () => {
  return "Hello World!";
}

//Arrow Functions Return Value by Default:
hello = () => "Hello World!";

//Arrow Function With Parameters:
hello = (val) => "Hello " + val;

//Arrow Function Without Parentheses:
hello = val => "Hello " + val;

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

