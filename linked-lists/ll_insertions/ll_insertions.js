'use strict';

append = (value) => {

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



prepend = (value) => {

  const newNode = new ListNode(value);
  
  if(!this.root) {

    this.root = newNode;
  } else {
    
    newNode.next = this.root;
    this.root = newNode;
  };
};





insertBefore = (value, newValue) => {

  let node = new ListNode(newValue);

  let current = this.root;

  while(current) {
    
  }

}

insertBefore = (value, newValue) => {

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

