const id = 100;

//Correctly checking for undefined values
if (typeof id == "undefined") {
    console.log("undefined");
} else {
    console.log("not undefined");
}

//Switch statements

const colour = "red";

switch (colour) {
    case "red":
        console.log("colour = red");
        break;
    case "blue":
        console.log("colour = blue");
        break;
    default:
        console.log("Niether red or blue");
        break;
}

let day;

switch (new Date().getDay()) {
    case 0:
        day = "Sunday"
        break;
    case 1:
        day = "Monday"
        break;
    case 2:
        day = "Tuesday"
        break;
    case 3:
        day = "Wednesday"
        break;
    case 5:
        day = "Thursday"
        break;
    case 5:
        day = "Friday"
        break;
    case 6:
        day = "Saturday"
        break;
}

console.log(`Today is ${day}`);