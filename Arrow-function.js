// ! General function declaration

console.log(add(20, 30)); //   we can use this kind of function globaliy
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(20, 390));

// ? Function expression

// console.log(add2(250, 30)); // Cannot access 'add2' before initialization

const add2 = function (n1, n2) {
  return n1 + n2;
};
console.log(add2(250, 30));

//TODO: Arrow Function
/**It is used for short-cut function
 * for single line function we don't need to return to see value
 *
 */

const add3 = (n1, n2) => n1 + n2;
console.log(add3(70, 60));

const sub = (n1, n2) => n1 - n2;
console.log(sub(600, 400));

const getPI = () => 3.1416;
console.log(getPI());

const tentimes = (x) => x * 10;
console.log(tentimes(45)); //for single we don't need bracket

const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;
const isEven = (num) => num % 2 === 0;

const doMath = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  return result;
};

const divide = (p, q) => p / q;

// document.getElementById('btn').addEventListener('click', () =>{})
document.getElementById("btn").addEventListener("click", (event) => {});
