'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class SinglyLinkedList {
  constructor() {
    this.root = null;
  }


  append(value) {

    if(!this.root) {
      this.root = new Node(value);
    }
    else {
      let node = this.root;

      while(node.next) {
        node = node.next;
      }
      node.next = new Node(value);
    }
    // big o - O(n)
  }


  prepend(value) {

    const newNode = new Node(value);
  
    if(!this.root) {

      this.root = newNode;
    } 
    else {
      this.root = newNode;
      this.root.next = this.root;
    }
    // big o - O(1)
  }

  
  reverse() {

    if(this.root.next === null) {
      return this;
    }
    else {
      let curr = this.root;
      let prev = null;
      
      while(curr.next) {
        let initialNext = curr.next;
        curr.next = prev;
        prev = curr;
        curr = initialNext;
      }
      this.root = curr;
      this.root.next = prev;
    }
    // big o - O(n)
  }


  remove(offset) {
    let curr = this.root;
    let count = 1;

    if(offset ===1) {
      this.root = null;
    }
    while(curr.next) {
      count++;
      if(count === offset) {
        curr.next = curr.next.next;
      }
      else if(curr.next.next === null) {
        curr.next = null;
      }
      else {
        curr = curr.next;
      }
    }
    // big o - O(n)
  }


  serialize() {

    let str ='';
    let node = this.root;

    if(!node) {
      return 'x';
    }

    while(node.next) {
      str += `${node.value} `;
      node = node.next;
    }
    str += `${node.value}`;

    return str;

    // big 0 O(n)
  }




}



module.exports = SinglyLinkedList;
