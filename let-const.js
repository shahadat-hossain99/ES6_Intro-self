/**
 * ! 1.----Let
 * we can change it
 * we can re-assign it
 * it is flexiable
 *
 *
 * ! 2.-----var
 * old stuff
 * some time hard to use
 * we don't use it any more
 *
 * ! 3.-----const
 * we can't change it's value
 * also, we can not re-assign it
 * it is a constant value
 *
 */

const name = "Bangladesh";
// name = 'Singapore';
const countryName = "BD_" + name;
console.log(countryName);

let price = 120;
price = 150;
console.log(price);

// var name22 = 'Bangladesh';

const dress = ["Shirt", "Pant", "Shoe"];
// dress = ['Shirt', 'Pant', 'Shoe', 'Belt'];
dress.push("Belt");
console.log(dress);

const student = {
  name: "John",
  age: 25,
};

student.name = "Jane";
student.age = 30;
console.log(student);
