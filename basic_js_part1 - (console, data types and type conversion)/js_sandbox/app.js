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

//Method Syntax
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

//Object Constructor Function
// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "English";
}

// Create 2 Person objects
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

// Display nationality
document.getElementById("demo").innerHTML =
"My father is " + myFather.nationality + ". My mother is " + myMother.nationality; 

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
//val = String(5); // "5"
//array to string
//val = String([12,3,4]);//"12,3,4"

//val = (747474.422).toString(); //Returns "747474.422"

//string to number
//val = Number("5");

//console.log(val.toFixed());

//String to number
val = parseInt("100");

//output
console.log("val: " + val);
console.log("type of val: " + typeof val);
//console.log(val.length); //.length only works on strings
