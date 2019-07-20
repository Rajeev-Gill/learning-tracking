const firstName = "Rajeev";
const lastName = "Gill";
const age = 22;
const str = "Hello my name is jeeveo";

let val;

//Basic concatenation
val = firstName + " " + lastName;

//Append
val = "Jeevo ";
val += "Gill"; //+= will add something on to the end of another thing

val = "Hello, my name is " + firstName + " and I am " + age;

//Escaping
val = "I am about to escape's"
val = 'I am about to escape \' ggg'; //to use apostrophe within single quotes it must be escaped

//concat method
val = firstName.concat(" ", lastName);

//Change case
val = firstName.toUpperCase(); //toLowerCase();

//Accessing string as an array
val = firstName[0];

val = firstName.indexOf('j'); //Returns space of char can also do lastIndexOf(); to find last occurence of given char

//CharAt()
val = firstName.charAt(2)

//Get last Char of string minus one because string starts at 0
val = firstName.charAt(firstName.length - 1);

//Substring cuts a string out of a string
val = firstName.substring(0, 4); 

//slice same as substring
val = firstName.slice(- 4); //this would return final 4 chars of string

//split string into array
val = str.split(" "); //Will return array of words separated by spaces

//replace
val = str.replace("jeeveo", "Jeevao");

console.log(val);