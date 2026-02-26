function add(num1, num2) {
  const total = num1 + num2;
  console.log(num1, num2, total);
}
add(10); // [ 10, undefined, NaN ] -->NAN-Not a Number

//! With Default value
function add(num1, num2 = 0) {
  const total = num1 + num2;
  console.log(num1, num2, total);
}
add(10);

//! In here we have to use 1 not 0 as default value
function multiply(num1, num2 = 1) {
  const total = num1 * num2;
  console.log(num1, num2, total);
}
multiply(30);

/**
 *!We can define a default value like below
 ** string --> ''
 ** number --> 0 [for add]
 ** number --> 1 [for multiply]
 ** array --> []
 ** object --> {}
 ** boolean --> false
 */
