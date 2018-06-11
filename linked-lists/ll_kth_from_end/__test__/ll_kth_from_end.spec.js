'use strict';


const SinglyLinkedList = require('../ll_kth_from_end');



describe('Singly Linked List Module', ()=> {

  it('should create a new list with a root of null', () => {
    let newList = new SinglyLinkedList;
  
    expect(newList.root).toBeNull();
  });

  
  it('append should create a new root if root is null', () => {
    let newList = new SinglyLinkedList;
    newList.append(1);
  
    expect(newList.root.value).toBe(1);
  });
  

  it('append should create a new node if the root exists', () => {
    let newList = new SinglyLinkedList;
    newList.append(1);
    newList.append(2);
    newList.append(3);
  
    expect(newList.root.next.next.value).toBe(3);
  });


  it('kthFromEnd should take in a number and determine which node is that kth from the end', () => {
    let newList = new SinglyLinkedList;
    newList.append(1);
    newList.append(2);
    newList.append(3);
    newList.append(4);

    expect(newList.kthFromEnd(1).value).toBe(3);
  });


  it('kthFromEnd should take in a number and determine which node value is that kth from the end, if the value does not exist, return undefined', () => {
    let newList = new SinglyLinkedList;
    newList.append(1);
    newList.append(2);
    newList.append(3);
    newList.append(4);
    
    expect(newList.kthFromEnd(17)).toBeUndefined();
  });

});
