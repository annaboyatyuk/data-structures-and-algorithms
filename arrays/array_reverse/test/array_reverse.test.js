'use strict';

let arrayReverse = require('../lib/array_reverse.js');

describe('Reverse Array', () => {

  it('reverseArray() will take an input array and return it in reversed order', () => {
    expect(arrayReverse([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4, 3, 2, 1]);
  });
});

