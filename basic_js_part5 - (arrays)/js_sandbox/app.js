const numbers = [34,3,4,31,32,33,35];
const numbers2 = new Array(22,44,22,22,22);
const fruit = ["strawberry", "guava", "kiwi"];
const mixed = [22, {a:1,b:2}, "hello", new Date()];

let val;

//Check if is array
val = Array.isArray(numbers);

//insert into array
numbers[0] = 1;

//find index of val
val = numbers.indexOf(3);

//Mutating arrays
//Add on to end of array
numbers.push(2500);

//Add on to front
numbers.unshift(1200);

//Remove from end
numbers.pop();

//Remove from front
numbers.shift();

//remove any value .splice(index, how many to remove)
numbers.splice(0,3) //This removes 3 val starting from position 0

//Reverse an array
numbers.reverse();

//Concat array
val = numbers.concat(fruit);

//sorting array
val = fruit.sort(); //Default makes strings alphabetical

//Sorting array of numbers
numbers.sort(); //smallest to largest

//Reverse sort
numbers.sort((x,y) => {
    return y - x; //Largest to smallest
})

//Find
function under50(num) {
    return num < 50;
}

//Look at array and finds nearest num under 50
//val = numbers.find(under50);

//Output
console.log(numbers)
console.log(val)