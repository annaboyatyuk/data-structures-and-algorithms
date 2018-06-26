'use strict';

class Node{
  constructor(value) {
    this.value = value,
    this.next = null;
  }
}

class Stack{
  constructor() {
    this.top = null;
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

}


class Queue{
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(value) {
    let node = new Node(value);
    if(!this.first) {
      this.first = node;
      this.last = node;
      return this;
    }
    this.last.next = node;
    this.last = node;
    return this;
  }

  dequeue() {
    if(!this.first) {
      return null;
    }
    if(this.first.next === null) {
      let first = this.first.value;
      this.first = null;
      this.last = null;
      return first;
    }
    let first = this.first.value;
    this.first = this.first.next;
    return first;
  }


}


module.exports = {
  Stack: Stack, 
  Queue: Queue,
};
