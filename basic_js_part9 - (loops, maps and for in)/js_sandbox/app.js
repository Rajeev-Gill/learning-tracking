//Skipping a loop iteration

// for(let i = 0; i <= 10; i ++){
//     if(i == 2){
//         console.log("2 is my favourite no.");
//         continue; // Using continue keyword means that it 'skips' the iteration and runs this code instead
//     }

//     if(i == 4){
//         console.log("broke at 4");
//         break; //Using break stops loop at iteration
//     }

//     console.log(i)
// }

//While loops

// let i = 0;

// while(i < 10){
//     console.log(i);
//     i++;
// }

//Do while loops
// let i = 20;

// do {
//     console.log(i);
//     i++;
// }

// while(i < 20);

//For loop and forEach

const cars = ["Audi","VW","Tesla"];

const user = {
    firstName: "john",
    lastName: "doe",
    age: 40
}

// for(let i = 0; i < cars.length; i ++){
//     console.log(cars);
// }

// cars.forEach(function(car){
//     console.log(car);
// });

//Using .map to create a new array out of existing array
//Revise map functions
// const germanWhips = cars.map(function(car){
//     car == "VW" ? car : null;
// })

//Iterating through objects with for in

//For each key within the user object
for(let x in user){
    //log key and value
    console.log(`${x} : ${user[x]}`);
}