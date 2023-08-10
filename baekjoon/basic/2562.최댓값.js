// 2023-08-10
// https://www.acmicpc.net/problem/2562

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = input.map(x =>Number(x));
let max = 0;
let index = 0;

for(let i = 0; i < arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
        index = i;
    }
}

console.log(max)
console.log(index + 1)

// 함수 이용하기

let fs = require('fs');
let input2 = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input.map(x => Number(x));
let max2 = Math.max(...data);

console.log(max2);
console.log(input2.indexOf(max2) + 1);