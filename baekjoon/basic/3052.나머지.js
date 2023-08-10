// 2023-08-10
// https://www.acmicpc.net/problem/3052

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let arr = input.map(Number);
let answer = new Set();

for(let i = 0; i < 10; i++){
    answer.add(arr[i] % 42);
}

console.log(answer.size)