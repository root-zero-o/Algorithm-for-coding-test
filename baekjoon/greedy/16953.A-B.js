// 2023-11-22
// https://www.acmicpc.net/problem/16953

/**
 * B에서 A로 이동한다고 생각
 * 현재 B값이 정해져있을 때, 취할 수 있는 행동은 항상 정해져 있음
 * 
 * 1) 2로 나누어 떨어지는 경우 -> 2로 나누기
 * 2) 일의 자릿수가 1인 경우 -> 10으로 나누기
 * 3) 이외는 종료
 * 
 * 매 상황에서 이동 경로는 단 하나만 존재 === 그리디 알고리즘
 */

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a, b]= input[0].split(' ').map(Number);
let result = 1;
let flag = false;

while(b >= a){
   if(a === b){
    flag = true;
    break;
   }
   // 짝수일 때
   if(b % 2 === 0) b = b / 2;
   // 일의자리 수가 1일 때
   else if(b % 10 === 1) b = parseInt(b / 10);
   else break;
   result++;
}

if(flag) console.log(result)
else console.log(-1)
