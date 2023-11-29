// 2023-11-29
// https://www.acmicpc.net/problem/10817

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let data = input[0];
let arr = data.split(" ").map(Number);

arr.sort((a, b) => a - b);

console.log(arr[1]);
