// 2023-08-10
// https://www.acmicpc.net/problem/4344

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin', 'utf8').toString().split('\n');

let n = Number(input[0]);  // 테스트 케이스의 개수
let answer = ''; // 정답을 담을 변수

for(let i = 1; i <= n; i++){
    let currentCase = input[i].split(" ").map(Number); // 현재 테스트 케이스
    let length = currentCase[0];
    currentCase.shift();

    let average = currentCase.reduce((a, b) => a + b) / length;  // 평균
    let highArr = currentCase.filter((v) => v > average); // 평균 넘는 점수 array
    let ratio =  ((highArr.length / length) * 100).toFixed(3) + '%' + '\n'; // 비율
    answer += ratio
}

console.log(answer)