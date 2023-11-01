// 2023-11-01
// https://www.acmicpc.net/problem/11047

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0].split(' ')[0]);
let K = Number(input[0].split(' ')[1]);
let coins = [];

for(let i = 1; i <= N; i++){
    coins.push(Number(input[i]))
}

let answer = 0;

for(let i = N - 1; i >= 0; i--){
    answer += parseInt(K / coins[i]);
    K = K % coins[i]
}

console.log(answer)

// 시간복잡도 O(n)