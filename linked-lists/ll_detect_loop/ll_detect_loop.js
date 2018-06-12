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


  hasLoop() {

    if(!this.root.next) {
      return false;
    }

    let current = this.root;
    let fast = current.next;

    while(fast !== current) {

      current = current.next;

      if(!current.next) {
        return false;
      }
      
      fast = fast.next.next;
    }
    return true;
  }


}

module.exports = SinglyLinkedList;