// 2023-11-01
// https://www.acmicpc.net/problem/11399

// 내 풀이
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let time = input[1].split(' ').map(Number);

time.sort((a, b) => a - b); 

let answer = 0;

for(let i = 0; i < N; i++){
    for(let j = 0; j <= i; j++){
        answer += time[j]
    }
}

console.log(answer)

// 강의 풀이
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

arr.sort((a, b) => a - b);

let answer = 0;
let summary = 0;
for(let i = 0; i < n; i++){
    summary += arr[i] // i번째 사람이 기다린 총 시간
    answer += summary // 지금까지 소요된 총 시간
}

console.log(answer);