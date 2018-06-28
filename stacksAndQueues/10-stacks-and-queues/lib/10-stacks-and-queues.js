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

  serialize() {
    let str = '';
    if(!this.top) {
      return str;
    }
    while(this.top.next) {
      str += `${this.top.value} `;
      this.top = this.top.next;
    }
    str += `${this.top.value}`;

    return str;
  }

  static deserialize(str) {
    let newStack = new Stack();

    if(str === '') {
      return newStack;
    }
    let newArray = str.split(' ');

    for(let i = newArray.length -1; i >= 0 ; i--) {
      newStack.push(newArray[i]);
    }
    return newStack;
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

  serialize() {
    let str = '';
    if(!this.first) {
      return str;
    }
    while(this.first.next) {
      str += `${this.first.value} `;
      this.first = this.first.next;
    }
    str += `${this.first.value}`;

    return str;
  }

  static deserialize(str) {
    let newQueue = new Queue();

    if(str === '') {
      return newQueue;
    }
    let newArray = str.split(' ');
    console.log(newArray);
    
    
    for(let i = 0; i < newArray.length; i++) {
      newQueue.enqueue(newArray[i]);
      console.log(newQueue);
    }
    return newQueue;
  }


}


module.exports = {
  Stack: Stack, 
  Queue: Queue,
};
