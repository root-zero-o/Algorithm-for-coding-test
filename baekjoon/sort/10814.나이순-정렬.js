// 2023-10-31
// https://www.acmicpc.net/problem/10814

// 내 정답
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let data = [];
for(let i = 1; i <= N; i++){
    data.push(input[i])
}

const compare = (a, b) => {
    const age = (value) => {
        return Number(value.split(' ')[0])
    }

    if(age(a) !== age(b)) return age(a) - age(b);
  
}

data.sort(compare);

let answer = "";
for(let x of data) answer += x + "\n";

console.log(answer)

/**
 * stable sort(안정정렬) : 정렬 기준이 같은 경우 => 순서를 보존하는 정렬
 */

// 강의 정답

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let arr = [];

for(let i = 1; i <= N; i++){
    let age = Number(input[i].split(' ')[0]);
    let name = input[i].split(' ')[1];
    arr.push([age, name]);
}

arr.sort((a,b) => a[0] - b[0]);

// 여기서 Node.js의 정렬은 기본적으로 stable

let answer = "";
for(let x of arr) answer += x[0] + " " + x[1] + "\n";
console.log(answer);



