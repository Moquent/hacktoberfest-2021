// JavaScript program to find the product of all numbers in the array

const numbers = [1, 3, 2, 6];
const product = numbers.reduce((n1, n2) => n1 * n2, 0);

console.log(`Product: ${product}`);
// Output: 36
