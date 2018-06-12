'use strict';

const LinkedList = require('../ll_detect_loop');

describe('detect loop should return a boolean for if the linked list loops or not', () => {

  it('should return null if empty', () => {
    let newList = new LinkedList();

    expect(newList.root).toBeNull();
  });


  it('hasloop should detect a normal list', () => {

    let newList = new LinkedList;
    newList.append(1);
    newList.append(2);
    newList.append(3);

    expect(newList.hasLoop()).toBe(false);

  });

  it('hasloop should detect a looped list', () => {

    let newList = new LinkedList;
    newList.append(1);
    newList.append(2);
    newList.append(3);
    newList.append(4);

    let firstNode = newList.root.next.next;
    newList.root.next.next.next.next = firstNode;

    expect(newList.hasLoop()).toBe(true);

  });



});