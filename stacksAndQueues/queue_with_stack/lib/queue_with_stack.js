'use strict';

class Node{
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Stack{
  constructor() {
    this.top = null;
    this.end = null;
  }

  push(value) {
    let node = new Node(value);
    if(!this.top) {
      this.top = node;
      return this;
    }
    node.next = this.top;
    this.top = node;
    return this;
  }

  pop() {
    if(!this.top) {
      return null;
    }
    if(!this.top.next) {
      let top = this.top.value;
      this.top = null;
      return top;
    }
    let top = this.top.value;
    this.top = this.top.next;
    return top;
  }

  enqueue(value) {
    let node = new Node(value);
    if(!this.end) {
      this.end = node;
      this.top = node;
      return this;
    }
    this.top.next = node;
    this.top = node;
    return this;
  }

  dequeue() {
    if(!this.end) {
      return null;
    }
    if(this.end.next === null) {
      let first = this.end.value;
      this.end = null;
      this.top = null;
      return first;
    }
    let first = this.end.value;
    this.end = this.end.next;
    return first;
  }



}

module.exports = Stack;