// 2023-08-08
// https://www.acmicpc.net/problem/10998

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const line = input[0].split(' ');

const A = parseInt(line[0]);
const B = parseInt(line[1]);

console.log(A * B);
