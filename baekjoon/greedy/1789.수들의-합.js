// 2023-11-22
// https://www.acmicpc.net/problem/1789

/**
 * 가능한 작은 수부터 더하는 것이 좋다
 * 1부터 시작해 차례대로 더하면서 합이 S를 넘지 않도록 한다
 * 최대한 많이 더하면 -> 그 때까지의 수의 개수가 정답
 * 
 */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let s = Number(input[0]);
let sum = 0;
let current = 0;

while(sum <= s){
   current += 1;
   sum += current;
}

console.log(current -1)