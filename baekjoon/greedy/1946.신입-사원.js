// 2023-11-23
// https://www.acmicpc.net/problem/1946

let fs = require('fs');
let input:string[] = fs.readFileSync('/dev/stdin').toString().split('\n');

let t = Number(input[0]);
let cases : number[][][] = [];
let answer = '';

for(let i = 2; i < input.length; i++){
    let testCase : number[][] = [];
    if(input[i].length > 1){
        testCase.push(input[i].split(' ').map(Number));
    } else {
        cases.push(testCase)
        testCase = [];
    }
}

for(let i = 0; i < t; i++){
    let num = 0;
    let currentCase = cases[i]
    for(let j = 0; j < currentCase.length; j++){
        let average = currentCase.length / 2
        if(currentCase[j][0] >= average || currentCase[j][1] >= average){
            num ++;
        } 
    }

    answer = `${answer}${num}\n` + '';
    num = 0;
}

console.log(answer)