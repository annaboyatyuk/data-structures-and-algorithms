'use strict';

let arrayShift = require('../lib/array_shift.js');

describe('', () => {

  it('insertShiftArray() will take an array input and a number input and return an array with the number at the middle index of the array', () => {
    expect(arrayShift.insertShiftArray([1, 2, 3, 4], 5)).toEqual([1, 2, 5, 3, 4]);
  });

  it('insertShiftArray() will take an array input and a number input and return an array with the number at the middle index of the array', () => {
    expect(arrayShift.insertShiftArray([1, 2, 3, 4, 6, 7, 8, 9], 5)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('insertShiftArray() will take an array input and a number input and return an array with the number at the middle index of the array', () => {
    expect(arrayShift.insertShiftArray([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);
  });


});