'use strict';


const arrayProduct = require('../../lib/array_adjacent_product');

describe('arrayProduct module', () => {
  it('should find the largest product of a 2D array', () => {
    let newArray = [ 
      [ 1, 2, 1 ], 
      [ 2, 4, 2 ], 
      [ 3, 6, 8 ], 
      [ 7, 8, 1 ],
    ];

    expect(arrayProduct(newArray)).toEqual(64);
  });


  it('should find the largest product of a 2D array when the largest value is in the middle', () => {
    let newArray = [
      [1, 2, 3, 4, 5],
      [4, 3, 2, 1, 0],
      [1, 2, 9, 1, 1],
      [1, 0, 7, 1, 1],
      [2, 2, 2, 2, 2],
    ];

    expect(arrayProduct(newArray)).toEqual(63);
  });
});

