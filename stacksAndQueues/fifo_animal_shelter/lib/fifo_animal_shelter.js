'use strict';

class Node{
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue{
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(animal){
    let node = new Node(animal);
    if(!this.first) {
      this.first = node;
      this.last = node;
      return this;
    }
    this.last.next = node;
    this.last = node;
    return this;
  }

  static dequeue(pref){

    if(!this.first) {
      return null;
    }
    if(this.first.next === null) {
      let first = this.first.value;
      this.first = null;
      this.last = null;
      return first;
    }
    if(pref === 'cat') {
      // let 
    }
    // if(this.first === pref) {
    let first = this.first.value;
    this.first = this.first.next;
    return first;
    // }
  }

}

module.exports = Queue;