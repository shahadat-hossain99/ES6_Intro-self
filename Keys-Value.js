const king = { name: "Mufasa", age: 56, kingdom: "Pride land" };

const keys = Object.keys(king);
console.log(keys); //[ 'name', 'age', 'kingdom' ]

const values = Object.values(king);
console.log(values); //[ 'Mufasa', 56, 'Pride land' ]

const entries = Object.entries(king);
console.log(entries); //[ [ 'name', 'Mufasa' ], [ 'age', 56 ], [ 'kingdom', 'Pride land' ] ] it's called Array of array or 2 Dimentional array
