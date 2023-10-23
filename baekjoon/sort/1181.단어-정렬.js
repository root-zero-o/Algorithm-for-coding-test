// 2023-10-23
// https://www.acmicpc.net/problem/1181

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let arr = [];

for(let i = 1; i <= N; i++){
    arr.push(input[i]);
}

// 중복된 원소 제거 - 집합(set)으로 변환한 뒤 배열로 되돌리기
arr = [...new Set(arr)];

const compare = (a, b) => {
    if(a.length !== b.length) return a.length - b.length;
    else {
        if(a < b) return -1;
        else if(a > b) return 1;
        else return 0;
    }
}

arr.sort(compare);

let answer = '';
for(let point of arr){
    answer += point + '\n'
}

console.log(answer)