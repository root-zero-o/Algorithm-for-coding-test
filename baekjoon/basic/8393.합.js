// 2023-08-09
// https://www.acmicpc.net/problem/8393

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);

let answer = 0;
for(let i = 1; i <= n; i++){
    answer += i;
}

console.log(answer);

// 등차수열 합 공식으로 해결
let fs = require('fs');
let input2 = fs.readFileSync('/dev/stdin').toString().split('\n');
let n2 = Number(input2[0]);

console.log(n2 * (n2 + 1) / 2);
// 시간 복잡도 : O(1)