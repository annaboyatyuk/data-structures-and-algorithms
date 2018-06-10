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

    if(this.head.next === null) {
      return this;
    }
    else {
      let cur = this.head;
      let prev = null;
      
      while(cur.next) {
        let initialNext = cur.next;
        initialNext = prev;
        prev = cur;
        cur = initialNext;
      }
      this.head = cur;
      this.head.next = prev;
    }
    // big o - O(n)
  }








}


// serialize = () => {

//   let str ='';

//   let root = this.root;

//   while(node) {
//     str += '[' + node.value + '] ->';
//     node = node.next;
//   }
//   str+= 'X';

//   return str;
// };










// prepend(value) {

    
// // Big O runtime:
// }

// reverse() {

    
// // Big O runtime:
// }

// remove(offset) {

    
// // Big O runtime:
// }


// serialize() {

    
// // Big O runtime:
// }

// deserialize() {

    
// // Big O runtime:
// }

// }


module.exports = SinglyLinkedList;
