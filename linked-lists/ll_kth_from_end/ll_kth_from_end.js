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


  kthFromEnd(length) {
    let forwardCurr = this.root;

    while(forwardCurr.next) {
      let count = 0;
      let backCurr = forwardCurr;
    
      while(backCurr.next) {
        count++;
        backCurr = backCurr.next;
      }

      if(length === count) {
        return forwardCurr;
      } 
      else if(length > count) {
        return undefined;
      } 
      else {
        forwardCurr = forwardCurr.next;
      }

    }
    return forwardCurr;
  }

}

module.exports = SinglyLinkedList;
