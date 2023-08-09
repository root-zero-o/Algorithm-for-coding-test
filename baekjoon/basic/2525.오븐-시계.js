// 2023-08-08
// https://www.acmicpc.net/problem/2525

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [hour, minute] = input[0].split(' ').map(Number)
let cookingTime = Number(input[1]);

let totalMinute = hour * 60 + minute + cookingTime;
totalMinute %= 1440; // 하루를 초과할 수 있기 때문에 1440으로 나눈 나머지로
hour = parseInt(totalMinute / 60);
minute = totalMinute % 60;

console.log(hour + " " + minute)
