'use strict';

module.exports = exports = {};


exports.binarySearch = (arr, key) => {

  let arrIndex = -1;

  for(let i = 0; i < arr.length; i++) {

    if(arr[i] == key) {
      arrIndex = i;
    }
  }
  return arrIndex;

};


