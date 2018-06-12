'use strict';

const LinkedList = require('../ll_detect_loop');

describe('detect loop should return a boolean for if the linked list loops or not', () => {

  it('should return null if empty', () => {
    let newList = new LinkedList();

    expect(newList.root).toBeNull();
  });


  it('should return list 1 merged', () => {
    let listone = new LinkedList();
    let listtwo = new LinkedList();
    listone.append(1);
    listone.append(3);

    listtwo.append(2);
    listtwo.append(4);
  });



});