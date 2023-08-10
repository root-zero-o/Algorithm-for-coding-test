// 2023-08-10
// https://www.acmicpc.net/problem/10818

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let min = 1000001; // 일단 큰 수로 초기화
let max = -1000001;  // 일단 작은 수로 초기화

for(let i = 0; i < n; i++){
    if(min > arr[i]) min = arr[i];
    if(max < arr[i]) max = arr[i]; 
}

console.log(min, max)

// reduce 활용
let fs = require('fs');
let input2 = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr2 = input2[1].split(" ").map(Number);

let min2 = arr2.reduce((a, b) => Math.min(a, b));
let max2 = arr2.reduce((a, b) => Math.max(a, b));

console.log(min2, max2)