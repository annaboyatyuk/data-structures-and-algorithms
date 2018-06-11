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
  }


  insertBefore(val, newVal) {
    if (val === this.root.value) {
      let oldroot = this.root;
      this.root = new Node(newVal);
      this.root.next = oldroot;
    } else {
      let current = this.root;

      while (current.next.value !== val) {
        current = current.next;
      }

      let oldNext = current.next;
      current.next = new Node(newVal);

      current.next.next = oldNext;
    }
  }

  insertAfter(val, newVal) {
    let current = this.root;
    while(current.value !== val) {
      current = current.next;
    }
    let oldNext = current.next; 
    current.next = new Node(newVal);
    current.next.next = oldNext;
  }


}


module.exports = SinglyLinkedList;
