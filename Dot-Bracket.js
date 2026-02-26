const user = {
  name: "Shahadat",
  address: {
    city: "Bogra",
    zip: 5800,
  },
};

// nested object == (object এর ভেতরে object) access
console.log(user.address.city);

//? Dot notation
console.log(user.name);
console.log(user.address.city);

//? Bracket notation
console.log(user["name"]);
console.log(user["address"]["city"]);

// !Programming Hero

const employee = {
  name: "John Doe",
  1: "desk one",
  "home-address": "123 Main St",
  salary: 50000,
  position: "Software Engineer",
};

// dot notation
// console.log(employee.name);
// console.log(employee.1);
// console.log(employee.home-address);
const salary = employee.salary;

// bracket notation
console.log(employee["name"]);
console.log(employee[1]);
console.log(employee["home-address"]);

const money = employee["salary"];
const key = "position";

console.log(employee[key]);
