// 2023-10-23
// https://www.acmicpc.net/problem/11650

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let arr = [];

for(let i = 1; i <= N; i++){
    let [x, y] = input[i].split(' ').map(Number);
    arr.push([x, y]);
}

const compare = (a, b) => {
    if(a[0] !== b[0]) return a[0] - b[0];
    else return a[1] - b[1];
}

arr.sort(compare);

let answer = '';
for(let point of arr){
    answer += point[0] + " " + point[1] + '\n';
}

console.log(answer)
