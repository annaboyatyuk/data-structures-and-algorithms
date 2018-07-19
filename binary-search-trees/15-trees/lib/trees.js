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

insert(node) {
  
}



}


module.exports = Tree;



  
  
// class Node{
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }

// add(value) {
//   if(value < this.value) {
//     if(this.left) {
//       this.left.add(value);
//     }
//     else {
//       this.left = new Node(value);
//     }
//   } 
//   else if(value > this.value) {
//     if(this.right) {
//       this.right.add(value);
//     }
//     else{
//       this.right = new Node(value);
//     }
//   }
// }

// <!-- insert(val) {
//   if(this.root) {
//     this.root.add(value);
//   }
//   else {
//     this.root = new Node(val);
//   }
// } -->


// find(value) {
//   if(value ===  this.value) {
//     return this;
//   }
//   else if(value < this.value) {
//     return this.left ? this.left.find(value) : null;
//   }
//   else {
//     return this.right ? this.right.find(value) : null
//   }
// }



// }



// class BinarySearchTree{
//   constructor() {
//     this.root = null;
//   }


// insert(value) {
//   let node = new Node(value)

//   if(!this.root) {
//     this.root = new Node(value);
//     return;
//   }

//   if(value < this.root.value) {
//     this.root.left = node;
//   }

//   else if(value > this.root.value) {
//     this.root.right = node;

//   }


// }


// find(value) {
// return this.root ? this.root.find(value) : 
// }


// find(value) {

//   if(this.root.value === value) {
//     return this.root;
//   }
//   else if(this.left.value === value) {
//     return this.left;
//   }


// } 




// }





// recursion: am i seeing the same operation again and again and again
// repeating a process and building on the result


