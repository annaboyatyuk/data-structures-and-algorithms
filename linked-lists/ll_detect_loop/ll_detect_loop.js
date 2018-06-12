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


  static hasLoop() {

    

  }

}

module.exports = SinglyLinkedList;