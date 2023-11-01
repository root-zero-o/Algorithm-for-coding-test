// 2023-11-01
// https://www.acmicpc.net/problem/2839

/**
 * 현재 값이 5로 나누어 떨어질 경우 => 5로 나누기
 * 그렇지 않은 경우 => 5로 나누어 떨어지는 값이 될 때까지 3을 빼준 뒤 1 수행
 * 
 * 3A + 5B = N을 만족하는 B 중 가장 큰 경우를 찾기
 */

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let answer = 0;
let flag = false;

while(n >= 0){
    // n이 0이 되었거나 5로 나누어 떨어지는 값인 경우
    if(n === 0 || n % 5 === 0){
        answer += parseInt(n / 5);
        console.log(answer)
        flag = true;
        break;
    }
    n -= 3;
    answer += 1;
}

if(!flag){
    console.log(-1)
}

