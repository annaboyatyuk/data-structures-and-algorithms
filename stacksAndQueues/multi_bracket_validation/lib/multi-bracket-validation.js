'use strict';

// const Stack = require('../../10-stacks-and-queues/lib/10-stacks-and-queues').Stack;


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
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

  peek() {
    if(!this.top) {
      return null;
    }
    return this.top.value;
  }


}



let multiBracketValidation = (input) => {
  const stack = new Stack();

  const openers = ['{', '(', '['];

  const closers = {
    '}': '{',
    ')': '(',
    '[': ']',
  };

  for(let char of input) {
    if(openers.includes(char)) {
      stack.push(char);
    }
    else if(Object.keys(closers).includes(char)) {
      if(stack.length === 0) {
        return false;
      }
      else if(stack.peek() !== closers[char]) {
        return false;
      }
      else {
        stack.pop();
      }
    }
    // else {
    //   return true;
    // }
  }
  return stack.length === 0;

};



module.exports = {
  multiBracketValidation: multiBracketValidation,
  Stack: Stack,
};