'use strict';


const SinglyLinkedList = require('../ll_insertions');


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
  

  it('the last node should have a next of null', () => {
    let newList = new SinglyLinkedList;
    newList.append(5);
    newList.append(10);
    newList.append(15);
  
    expect(newList.root.next.next.next).toBeNull();
  });

  
  it('insertBefore should create a new node as the root if given value is the root', () => {
    let newList = new SinglyLinkedList;
    newList.append(1);
    newList.insertBefore(1, 2);
  
    expect(newList.root.value).toBe(2);
  });

  
  it('insertBefore should create a new node before given value', () => {
    let newList = new SinglyLinkedList;
    newList.append(1);
    newList.append(2);
    newList.append(3);
    newList.insertBefore(3, 4);
  
    expect(newList.root.next.next.value).toBe(4);
  });
  
  
  it('insertAfter should create a new node with a next value of null if it reaches the end of the list', () => {
    let newList = new SinglyLinkedList;
    newList.append(1);
    newList.append(2);
    newList.insertAfter(2, 4);
  
    expect(newList.root.next.next.next).toBeNull();
  });

  
  it('insertAfter should create a new node in the middle of the linked list, with a next value of the new next value', () => {
    let newList = new SinglyLinkedList;
    newList.append(1);
    newList.append(2);
    newList.insertAfter(1, 3);
  
    expect(newList.root.next.next.value).toBe(2);
  });
  
});