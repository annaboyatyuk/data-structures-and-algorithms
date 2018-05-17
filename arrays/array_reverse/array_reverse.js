'use strict';

function reverseArray(inputArr) {
  let outputArr = [];

  for(let i = inputArr.length -1; i >= 0; i --){
    outputArr.push(inputArr[i]);
  }
  return outputArr;
}

let a = [1, 2, 3, 4, 5, 6];
let b = reverseArray(a);
console.log(b);
