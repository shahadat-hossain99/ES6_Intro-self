const user = {
  name: "Shahadat",
  address: {
    city: "Bogra",
    zip: 5800,
  },
};

const use = {
  name: "Shahadat",
};

//! Without using optional chaining ❌ Error দিবে
//Cannot read properties of undefined (reading 'city')
console.log(use.address.city);

//? Optional Chaining ( ?. )যদি address না থাকে → undefined দিবে 👉 Error দিবে না

console.log(use.address?.city);

// "থাকলে ঢুকবো, না থাকলে থামবো"
