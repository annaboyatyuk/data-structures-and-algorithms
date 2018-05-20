'use strict';

let binaryArray = require('../../lib/array_binary_search.js');

describe('Array Binary Search', () => {

  it('should find the index of the array at the value of the second input', () => {

    expect(binaryArray.binarySearch([4, 8, 15, 16, 23, 42], 15)).toEqual(2);

  });

  it('should find the index of the array at the value of the second input', () => {

    expect(binaryArray.binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 15)).toEqual(14);

  });

  it('should return -1 if the key is not in the array', () => {

    expect(binaryArray.binarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toEqual(-1);

  });

});