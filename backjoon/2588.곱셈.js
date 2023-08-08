// 2023-08-08

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const A = Number(input[0]);
const B = input[1];

console.log(A * Number(B[2]));
console.log(A * Number(B[1]));
console.log(A * Number(B[0]));
console.log(A * Number(B));
