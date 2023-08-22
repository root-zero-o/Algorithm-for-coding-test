// 2023-08-16
// https://www.acmicpc.net/problem/1001

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');  

let A = Number(input[0].split(" ")[0])
let B = Number(input[0].split(" ")[1])

console.log(A - B);
