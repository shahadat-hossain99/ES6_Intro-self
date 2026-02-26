/* *
!
const myObject = {
student: 'Mike',
teacher: 'Susan'
}

!Same but different

const { student: pagli, teacher: prof } = myObject
console. log(pupil, prof);
> Mike Susan

const { student, teacher } = myObject;
console. log(student, teacher)
 > Mike Susan
 */

const product = {
  name: "iPhone",
  price: 799,
  description: "A smartphone by Apple",
};

// const newPrice = product.price + 100;
// const phoneName = `this is ${product.name}`;
// console.log(phoneName);

// const price = product.price;
// const name = product.name;
const price = 5555;
// const product = { name: 'iPhone', price: 799, brand: 'Apple' };
// const {
//   name,
//   price: phonePrice,
//   camera = "12MP",
// } = { name: "iPhone", price: 799, brand: "Apple", camera: "48MP" };
// console.log(camera);

const [first, second] = [10, 20, 30, 50];
console.log(first, second);

// const [height, weight] = numbers;

// my

const {
  name: phoneName,
  price: phoneTk,
  brand: phoneCompany,
  camera = "12MP",
} = { name: "Iphone", price: "799", brand: "Apple", camera: "32MP" };

console.log(phoneTk);
console.log(phoneCompany);
console.log(phoneName);
console.log(camera);
