'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(value) {
    if(value < this.value) {
      if(this.left) {
        this.left.add(value);
      }
      else {
        this.left = new Node(value);
      }
    }
    else if(value > this.value) {
      if(this.right) {
        this.right.add(value);
      }
      else {
        this.right = new Node(value);
      }
    }
  }


}

class Tree {
  constructor() {
    this.root = null;
  }

  // findMin() {
  //   let current = this.root;
  //   while(current.left !== null) {
  //     current = current.left;
  //   }
  //   return current.value;
  // }

  // findMax() {
  //   let current = this.root;
  //   while(current.right !== null) {
  //     current = current.right;
  //   }
  //   return current.value;
  // }

  insert(node) {
    if(this.root) {
      this.root.add(node);
    }
    else {
      this.root = new Node(node);
    }
  }

  remove(value) {
    let removeNode = (node, value) => {
      if(node === null) {
        return null;
      }
      if(value === node.value) {
        if(node.left === null && node.right === null) {
          return null;
        }
        if(node.left === null) {
          return node.right;
        }
        if(node.right === null) {
          return node.left;
        }
        var tempNode = node.right;
        while(tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.value = tempNode.value;
        node.right = removeNode(node.right, tempNode.value);
        return node;
      }
      else if(value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      }
      else {
        node.right = removeNode(node.right, value);
        return node;
      }
    };
    this.root = removeNode(this.root, value);
  }

  find(node) {
    let current = this.root;
    while(current.value !== node) {
      if(node < current.value) {
        current = current.left;
      }
      else {
        current = current.right;
      }
      if(current === null) {
        return null;
      }
    }
    return current;
  }


  serialize(root) {
    var result = [];
    this.serializer(root, result);
    return result.join(',');
  }
   
  serializer(node, serialized) {
    if(!node){
      serialized.push('#');
      return;
    }
    serialized.push(node.val);
    this.serializer(node.left, serialized);
    this.serializer(node.right, serialized);
  }



  // deserialize() {

  // }


}


module.exports = Tree;



