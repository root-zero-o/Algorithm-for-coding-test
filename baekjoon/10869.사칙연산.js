// 2023-08-08
// https://www.acmicpc.net/problem/10869

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const data = input[0].split(' ');

const A = parseInt(data[0]);
const B = parseInt(data[1]);

console.log(A+B);
console.log(A-B);
console.log(A*B);
console.log(parseInt(A/B));
console.log(A%B);
