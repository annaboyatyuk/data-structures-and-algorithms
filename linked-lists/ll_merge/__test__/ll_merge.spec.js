'use strict';


const MergeLists = require('../ll_merge');

describe('Merge two linked lists and alternate the values', () => {

  it('should return null if empty', () => {
    let newList = new MergeLists();

    expect(newList.root).toBeNull();
  });

  it('should show 2 lists', () => {
    let listone = new MergeLists();
    let listtwo = new MergeLists();
    listone.append(1);
    listone.append(3);

    listtwo.append(2);
    listtwo.append(4);
    let merged = MergeLists.mergeLists(listone, listtwo);
    expect(merged.root.value).toBe(1);
    expect(merged.root.next.value).toBe(2);
    expect(merged.root.next.next.next.next).toBeNull();
  });


  it('should show 2 lists', () => {
    let listone = new MergeLists();
    let listtwo = new MergeLists();
    listone.append(1);
    listone.append(3);
    listone.append(6);
    listone.append(8);

    listtwo.append(2);
    listtwo.append(4);
    let merged = MergeLists.mergeLists(listone, listtwo);
    expect(merged.root.value).toBe(1);
    expect(merged.root.next.value).toBe(2);
    expect(merged.root.next.next.next.next.next).toBeNull();
  });


  it('should show 2 lists', () => {
    let listone = new MergeLists();
    let listtwo = new MergeLists();
    listone.append(1);
    listone.append(3);

    listtwo.append(2);
    listtwo.append(4);
    listtwo.append(9);
    listtwo.append(4);
    let merged = MergeLists.mergeLists(listone, listtwo);
    expect(merged.root.value).toBe(1);
    expect(merged.root.next.value).toBe(2);
    expect(merged.root.next.next.next.next.next.next).toBeNull();
  });


});