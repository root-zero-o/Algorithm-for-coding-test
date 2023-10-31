// 2023-10-31
// https://www.acmicpc.net/problem/1427


// 내 정답
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = input[0].split('').map(Number);

const compare = (a, b) => {
    return (a === 0) - (b === 0) || b - a;
}

arr.sort(compare);

let answer = '';

for(let x of arr) answer += x;

console.log(Number(answer))

// 강의 정답
/**
 * 1) 0-9 모든 숫자에 대해 빈도수를 센다
 * 2) 내림차순으로 확인하며 빈도수 만큼 출력한다
 */

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = input[0];
// 0부터 9까지 각 숫자의 출현 빈도를 담을 배열 선언
let cnt = Array(10).fill(0); // 초기 빈도 값은 0으로 초기화

for(let x of n) {
    cnt[Number(x)]++;
}

let answer = "";
for(let i = 9; i >= 0; i--){
    // 9부터 0까지 하나씩 확인하며 출현빈도만큼 출력
    for(let j = 0; j < cnt[i]; j++) answer += i + "";
}

console.log(answer)