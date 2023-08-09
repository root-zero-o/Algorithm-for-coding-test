// 2023-08-09
// https://www.acmicpc.net/problem/2739

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let question = Number(input[0]); // 문제의 개수

let answer = ''; // 답을 담을 변수
let A = 0;
let B = 0;

for(let i = 1; i <= question; i++){
    A = Number(input[i].split(" ")[0]);
    B = Number(input[i].split(" ")[1]);
    answer += `${A+B}\n`
}

console.log(answer)

// 최대 100만줄을 출력해야 하는 문제
// 입출력이 느리면 시간초과 발생 가능
// 한 줄마다 console.log() 수행하면 많은 시간 소요 -> 하나의 문자열에 담았다가 출력
