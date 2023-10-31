// 2023-10-31
// https://www.acmicpc.net/problem/18870

/**
 *  좌표 압축 : 값을 크기 순위로 변경
 *  [2, 4, -10, 4, -9] 는 순위로 표현하면 [2, 3, 0, 3, 1]
 *  
 *  - 1. 집합으로 중복 제거
 *  - 2. sort()로 정렬 수행
 *  - 3. dictionary를 이용해 0부터 차례로 매핑
 *  - 4. 하나씩 매핑 값 출력
 */

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
let arr = input[1].split(' ').map(Number);

// 1
let uniqueArray = [...new Set(arr)];

// 2
uniqueArray.sort((a,b) => a - b); // 오름차순 정렬

// 0부터 차례대로 매핑 수행
let myMap = new Map();
for(let i = 0; i < uniqueArray.length; i++){
    myMap.set(uniqueArray[i], i);
}

answer = "";
for(x of arr) answer += myMap.get(x) + " ";
console.log(answer);