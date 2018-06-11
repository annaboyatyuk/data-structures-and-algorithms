'use strict';


module.exports = arrayProduct;


function arrayProduct(array) {
  let greatestNum = getLargest(array);

  return getProduct(array, greatestNum);
}


let getLargest = (array) => {
  let greatestNum = 0;

  for(let i = 0; i < array.length; i ++) {

    for(let j = 0; j < array[i].length - 1; j++) {
      let currentGreatest;
      if(array[i][j] > array[i][j + 1]) {
        currentGreatest = array[i][j];
      }
      else {
        currentGreatest = array[i][j + 1];
      }
      
      if(greatestNum > currentGreatest) {
        greatestNum;
      }
      else{
        greatestNum = currentGreatest;
      }
    }

  }
  return greatestNum;
};


let getProduct = (array, num) => {
  let currentGreatest = 0;

  for(let i = 0; i < array.length; i++) {

    for(let j = 0; j < array[i].length; j++) {
      if (array[i][j] === num) {
        let compare = compareProduct(array,i,j);

        if(currentGreatest > compare) {
          currentGreatest;
        }
        else {
          currentGreatest = compare;
        }
      }
    }

  }
  return currentGreatest;
};



let compareProduct = (array,index1, index2) => {
  let greatest = 0;

  for(let i = index1 - 1; i < index1 + 2; i++) {

    for (let j = index2 - 1; j < index2 + 2; j++) {

      if(index1 === i && index2 === j ) {
        //skip
      } else if (i >= 0 && j >= 0 && j < array[index1].length && i < array.length) {
        greatest = greatest > array[i][j]*array[index1][index2] ? greatest : array[i][j]*array[index1][index2];
      }
    }

  }
  return greatest;
};


