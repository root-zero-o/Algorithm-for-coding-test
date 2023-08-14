// 2023-08-14
// https://www.acmicpc.net/problem/2675

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]);

for(let i=1; i <=testCase; i++){
    let [r, s] = input[i].split(" ");
    let answer = "";

    for (let j = 0; j <= s.length; j++){
        answer += s.charAt(j).repeat(r);
    }
    console.log(answer);
}