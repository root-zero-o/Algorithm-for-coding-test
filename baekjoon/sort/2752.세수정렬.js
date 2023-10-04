// 2023-10-04
// https://www.acmicpc.net/problem/2752

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')[0].split(' ').map(Number);

input.sort((a, b) => a - b);

let answer = "";

for(let i = 0; i < input.length; i++){
    answer += input[i] + ' ';
}

console.log(answer)

// 선택 정렬로 해결
function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[minIndex] > arr[j]) minIndex = j;
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}