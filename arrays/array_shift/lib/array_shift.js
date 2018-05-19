'use strict';

module.exports = exports = {};

exports.insertShiftArray = (arr, num) => {

  let newArr = [];
  let middle = Math.ceil(arr.length/2);

  for(let i = 0; i < arr.length +1; i ++) {
    if(i < middle) {
      newArr[i] = arr[i];
    }
    if(i == middle) {
      newArr[i] = num;
    }
    else if(i > middle) {
      newArr[i] = arr[i -1];
    }
  }
  return newArr;
};

// insertShiftArray([1, 2, 3, 4], 5);
// insertShiftArray([1, 2, 3, 4, 6, 7, 8, 9], 5);
