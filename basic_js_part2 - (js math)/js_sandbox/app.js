const num1 = 100;
const num2 = 50;

let val;

//simple math
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2; //modulus operator

//math object

val = Math.PI;
val = Math.E;
val = Math.round("2.4");
val = Math.ceil("2.4"); //Round up
val = Math.floor("2.8"); //Round down
val = Math.sqrt("64");
val = Math.abs("-2.4");
val = Math.pow(8, 2);
val = Math.max(5,3,234,243,324,423,234); //math min and max return the smallest or biggest numbers in a set
val = Math.random();

val = Math.floor(Math.random() * 20); //rounding down a random number to between 1 and 20

console.log(val);