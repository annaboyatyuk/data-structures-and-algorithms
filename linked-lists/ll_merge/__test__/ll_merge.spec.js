'use strict';

const LinkedList = require('../../05-linked-lists/lib/05-linked-list');
// const MergeLists = require('../ll_merge');

describe('Merge two linked lists and alternate the values', () => {

  it('should return null if empty', () => {
    let newList = new LinkedList();

    expect(newList.root).toBeNull();
  });

  it('should show 2 lists', () => {
    let listone = new LinkedList();
    let listtwo = new LinkedList();
    // let merge = new MergeLists();
    listone.append(1);
    listtwo.append(2);
    listone.append(3);
    listtwo.append(4);
    console.log(listone);
    console.log(listtwo);
    // console.log(merge(listone, listtwo));

  });

});