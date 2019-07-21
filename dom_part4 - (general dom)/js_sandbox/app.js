let val;

val = document; //Returns entire doc
val = document.all; //Returns a HTMLCollection which looks like an array of every DOM node
val = document.all[0]; //Returns <html></html>
val = document.body; //returns html of body

val = document.forms; //will return array of all form elements

val = document.links; //will retrn
val = document.links[0];
val = document.links[0].className;
val = document.links[0].classList;
val = document.links[0].classList[0];

val = document.images;
val = document.scripts;

//Output
console.log(val);