/* fs module */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

console.log(input);

/* readline module */
const rl = require('readline').createInterface({
  input : process.stdin,
  output: process.stdout,
})

let input = [];
rl.on('line', function(line){
  // 콘솔 입력 창에서 줄바꿈(enter) 입력할 때마다 호출
  input.push(line);
}).on('close', fuction(){
  // 콘솔 입력 창에서 Ctrl + C 혹은 Ctrl + D를 입력하면 호출(입력 종료)
  console.log(input);
  process.exit();
})
