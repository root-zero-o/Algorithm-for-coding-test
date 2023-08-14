// 2023-08-14
// https://www.acmicpc.net/problem/11720

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = input[1].split('').map(Number)
let answer = arr.reduce((a,b) => a + b);

console.log(answer)

// 다른 풀이
let answer2 = 0;
for (let x of string){
    answer += Number(x);
}

console.log(answer2);