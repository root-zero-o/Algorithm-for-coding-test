// 2023-08-14
// https://www.acmicpc.net/problem/2908

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a, b] = input[0].split(" ");

let A = '';
let B = '';

for(let i = 0; i < 3; i++){
    A += a[2-i];
    B += b[2-i];
}

console.log(Math.max(Number(A), Number(B)))

