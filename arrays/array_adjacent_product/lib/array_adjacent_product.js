'use strict';



module.exports = exports = {};
  
//   let largestProduct = (a, b) => {

//   // let product = 0;
//   // product = a * b;
//   return a*b;
//   // return product;
// };



  

// let arrayProduct = (array) => {

//   let product = [0, 0];
//   // console.log(array);

//   for(let i = 0; i < array.length; i++) {
//     console.log(array[i]);

//     // let currentGreatest = [0]

//     for(let j = 0; j < array[i].length -1; j++) {
//       if(array[i][j] > product[i]) {
//         console.log(array[i][j]);
//         product[i] = array[i][j] * array[i][j+1];
//       }
//     }
    
//   }

//   return product;
// }




exports.arrayProduct = (array) => {

  let product = 0;
  // console.log(array);

  for(let i = 0; i < array.length; i++) {
    console.log(array[i]);

    let currentGreatest = [i];

    for(let j = 0; j < array[i].length -1; j++) {
      if(array[i][j] > currentGreatest[i]) {
        currentGreatest[i] = array[i][j] * array[i][j+1];
        console.log(array[i][j]);
        console.log(currentGreatest);
      }
      product = currentGreatest;
    }
    
  }

  return product;
};


// largestProduct(2, 3);
arrayProduct([[3, 4], [2, 3]]);


// largestProduct([ 
//   [ 1, 2, 1 ], 
//   [ 2, 4, 2 ], 
//   [ 3, 6, 8 ], 
//   [ 7, 8, 1 ] 
// ]);

