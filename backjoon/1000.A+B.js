// 2023-08-08

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');  // ['1 2']

const line = input[0].split(' ');  // ['1', '2']
const A = parseInt(line[0]); // 1
const B = parseInt(line[1]);  // 2

console.log(A+B);
