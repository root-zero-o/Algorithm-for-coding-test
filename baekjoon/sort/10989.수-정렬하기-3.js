// 2023-11-29
// https://www.acmicpc.net/problem/10817

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);
let answer = "";

input.sort((a, b) => a - b);
for (let i = 0; i < input.length; i++) {
  answer += `${input[i]}\n`;
}

console.log(answer);

// node.js 가 없음 ..
