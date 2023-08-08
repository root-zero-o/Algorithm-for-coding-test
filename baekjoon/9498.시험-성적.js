// 2023-08-08
// https://www.acmicpc.net/problem/9498

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const score = Number(input[0]);

if(score < 60){
    console.log('F');
} else if(score < 70){
    console.log('D');
} else if(score < 80){
    console.log('C');
} else if(score < 90){
    console.log('B');
} else if(score < 101){
    console.log('A')
}
