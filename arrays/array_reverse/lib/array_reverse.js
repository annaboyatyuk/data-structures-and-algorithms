'use strict';


function reverseArray(inputArr) {
  let outputArr = [];

  for(let i = inputArr.length -1; i >= 0; i --){
    outputArr.push(inputArr[i]);
  }
  return outputArr;
}

module.exports = reverseArray;


