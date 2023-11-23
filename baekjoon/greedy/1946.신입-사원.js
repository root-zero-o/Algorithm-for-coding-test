// 2023-11-23
// https://www.acmicpc.net/problem/1946

/**
 * 두 개의 시험에 대한 등수가 각각 X, Y
 * 1) X를 기준으로 오름차순 정렬
 * 2) 특정 지원자보다 두 시험 성적이 모두 높은 지원자가 있는지만 확인
 *   -> 한 명씩 확인해서 순위 Y가 확인했던 Y 중 가장 작은 수라면 카운트
 */

let fs = require('fs');
let input= fs.readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]);
let line = 1;

for(let tc = 0; tc < testCase; tc++){
    n = Number(input[line]);
    let arr = [];
    for(let i = line + 1; i <= line + n; i++){
        let data = input[i].split(' ').map(Number);
        arr.push(data)
    }

    arr.sort((x, y) => x[0] - y[0]); // x 순위를 기준으로 오름차순 정렬

    let count = 0;
    let minValue = 100001;
    for(let [x, y] of arr){
        if(y < minValue){ // y 순위 값이 가장 작다면 카운트
            minValue = y;
            count += 1;
        }
    }
    console.log(count);
    line += n + 1;
}