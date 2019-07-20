const name = "Rajeev";
const age = 22;
const job = "Tag Management Executive";
const city = "Londinium";

let html;

//Without template string ES5

html = "<ul><li>" + name + "</li><li>" + age + "</li><li>" + job + "</li><li>" + city + "</li></ul>";

//Multi line

html = "<ul>" +
    "<li>" + name + "</li>" +
    "<li>" + age + "</li>" +
    "<li>" + job + "</li>" +
    "<li>" + city + "</li></ul>";

//With template literals ES6 (backtick char is next to Z on mac keyboard)
function hello() {
    return "hello";
};

html = `
    <ul>
        <li>${name}</li>
        <li>${age}</li>
        <li>${job}</li>
        <li>${city}</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${age > 18 ? "legal" : "illegal"}</li>
    </ul>
`;

document.body.innerHTML = html;