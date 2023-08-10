// 2023-08-10
// https://www.acmicpc.net/problem/1546

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);  // 시험 본 과목 개수
let arr = input[1].split(" ").map(Number); // 현재 성적
let max = Math.max(...arr); // 최댓값

let newArr = arr.map((v) => v / max * 100 ); // 새로운 성적
let average = newArr.reduce((a, b) => a + b) / n 

console.log(average)

