// Cool console methods
// console.table({a:1, b:1})
// console.error("Something went wrong")
// console.warn("Something went loopy")

// console.time("timer");
// console.table({a:1, b:1})
// console.error("Something went wrong")
// console.warn("Something went loopy")
// console.timeEnd("timer");

//var,let,const

//initiate var without empty string
//var something;

// const unchangeable = "unchangeable";

const person = {
    name: "jeev",
    age: "22"
}

//you can still add properties to constant objects using dot notation

//console.log(person);

//Primitive Types (string, number, boolean, null, undefined, symbol)

// console.log(typeof person); // object

// if(typeof person == "object"){
//  console.log("is an obj");
// }

// const sym = Symbol();

// console.log(typeof sym);

//Reference Types (Array, Object, Date)
// const today = new Date();

// console.log(today);

//Type Conversion

let val;
val = 5;

//number to string
val = String(5); // "5"
//array to string
//val = String([12,3,4]);//"12,3,4"

//val = (747474.422).toString(); //Returns "747474.422"

//output
console.log(val);
console.log(typeof val);
//console.log(val.length); //.length only works on strings

val = Number("5"); //Turn 5 from string to number

console.log(val.toFixed());

