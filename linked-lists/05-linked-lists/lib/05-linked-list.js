'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {

  constructor(value) {
    this.head = null;
  }

  // append(value) {


  // // Big O runtime:
  // }



}


append(value) {

  if(!this.root) {
    this.root = new ListNode(value);
  }
  else {

    let node = this.root;

    while(node.next) {
      node = node.next;
    }


    node.next = new ListNode(value);

  }
}



prepend(value) {

  const newNode = new ListNode(value);
  
  if(!this.root) {

    this.root = newNode;
  } else {
    
    newNode.next = this.root;
    this.root = newNode;
  };
};


insertBefore(value, newValue) {

  let node = new ListNode(newValue);

  let current = this.root;

  while(current) {
    
  }

}

insertBefore(value, newValue) {

  let node = new ListNode(newValue);

  let current = this.root;

  while(current) {

    if(current.value === value) {
      node.next = current.next;
      current.next = node;
      break;

    }
    current = current.next;
  }
}



reverse(value) {

  while(cur.next) {
    initialNext = cur.next;
    cur.next = prev;
    prev = cur;

  }
};



serialize() {

  let str ='';

  let nose = this.root;

  while(node) {
    str += '[' + node.value + '] ->';
    node = node.next;
  }
  str+= 'X';

  return str;
}



// kth from end







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
