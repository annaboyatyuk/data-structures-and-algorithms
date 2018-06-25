'use strict';


const SinglyLinkedList = require('../lib/05-linked-list.js');


describe('Lab 05 Singly Linked List Module', ()=> {
  

  it('should create a new list with a root of null', () => {
    let newList = new SinglyLinkedList;

    expect(newList.root).toBeNull();
  });


  it('append should create a new root if root is null', () => {
    let newList = new SinglyLinkedList;
    newList.append(2);

    expect(newList.root.value).toBe(2);
  });


  it('append should create a new node if the root exists', () => {
    let newList = new SinglyLinkedList;
    newList.append(1);
    newList.append(2);
    newList.append(3);
    newList.append(4);

    expect(newList.root.next.next.next.value).toBe(4);
  });


  it('the last node should have a next of null', () => {
    let newList = new SinglyLinkedList;
    newList.append(1);
    newList.append(2);
    newList.append(3);
    newList.append(4);

    expect(newList.root.next.next.next.next).toBeNull();
  });


  it('prepend should create a a new node if there is no root', () => {
    let newList = new SinglyLinkedList;

    newList.prepend(1);

    expect(newList.root.value).toBe(1);
  });


  it('prepend should create a a new root if there is already a root ', () => {
    let newList = new SinglyLinkedList;
    newList.append(1);
    newList.append(2);
    newList.append(3);
    newList.prepend(4);

    expect(newList.root.value).toBe(4);
  });


  it('reverse should do nothing if list only contains the root', () => {
    let newList = new SinglyLinkedList;
    newList.append(1);
    newList.reverse();
    
    expect(newList.root.value).toBe(1);
  });


  it('reverse the list when there are actual values', () => {
    let newList = new SinglyLinkedList;
    newList.append(1);
    newList.append(2);
    newList.append(3);
    newList.append(4);
    newList.reverse();

    expect(newList.root.value).toBe(4);
    expect(newList.root.next.next.next.next).toBeNull();
  });


  it('remove() should leave an empty list if theres only a root.', () => {
    let newList = new SinglyLinkedList;
    newList.append(4);

    newList.remove(1);
    expect(newList.root).toBeNull();
  });


  it('remove() should find the node at the given value and remove it', () => {
    let newList = new SinglyLinkedList;
    newList.append(2);
    newList.append(4);
    newList.append(6);
    newList.remove(3);
    
    expect(newList.root.next.next).toBeNull();
  });


  it('serialize() should take the list and write a string, if linked list is empty return x', () => {
    let newList = new SinglyLinkedList;
  
    expect(newList.serialize()).toBe('x');
  });


  it('serialize() should take the list and write a string, even for one node', () => {
    let newList = new SinglyLinkedList;
    newList.append(350);
    
    expect(newList.serialize()).toBe('350');
  });


  it('serialize() should take the list and write a string', () => {
    let newList = new SinglyLinkedList;
    newList.append(1);
    newList.append(2);

    expect(newList.serialize()).toBe('1 2');
  });


  it('deserialize should take a string and create a new linked list', () => {
    let newList = new SinglyLinkedList;
 
    let actual = newList.deserialize('[1] -> [2] -> [3] -> [x]');
    expect(actual.root.next.next.value).toBe(3);
  });


  it('deserialize should work for non numbers', () => {
    let newList = new SinglyLinkedList;
    let actual = newList.deserialize('[linked] -> [lists] -> [hello] -> [x]');

    expect(actual.root.next.next.value).toBe('hello');
  });

  
});
