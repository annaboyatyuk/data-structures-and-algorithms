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
  }


  static  mergeLists(list1, list2) {

    let current1 = list1.root;
    let current2 = list2.root;

    while(current1.next || current2.next) {

      if(!current2.next) {
        return list1;
      }
      
      let next1 = current1.next;
      let next2 = current2.next;
      
      current1.next = current2;
      current2.next = next1;
      current1 = next1;
      current2 = next2;
      

      if(!current1.next) {
        current1.next = current2;
        return list1;
      }
    }
    current1.next = current2;
    return list1;
  }

}

module.exports = SinglyLinkedList;



// class Node{
//   int data;
//   Node next;
// }



// Node MergeLists(Node list1, Node list2) {
//   if (list1 == null) return list2;
//   if (list2 == null) return list1;

//   if (list1.data < list2.data) {
//     list1.next = MergeLists(list1.next, list2);
//     return list1;
//   } else {
//     list2.next = MergeLists(list2.next, list1);
//     return list2;
//   }
// }


// Node MergeLists(Node list1, Node list2) {
//   if (list1 == null) return list2;
//   if (list2 == null) return list1;

//   Node head;
//   if (list1.data < list2.data) {
//     head = list1;
//   } else {
//     head = list2;
//     list2 = list1;
//     list1 = head;
//   }
//   while(list1.next != null) {
//     if (list1.next.data > list2.data) {
//       Node tmp = list1.next;
//       list1.next = list2;
//       list2 = tmp;
//     }
//     list1 = list1.next;
//   } 
//   list1.next = list2;
//   return head;
// }



// // A nexted list node
// struct node
// {
//     int data;
//     struct node *next;
// };
  
 
// void mergeAtAlternatePos(struct node *p, struct node *q)
// {
//      struct node *first = p, *sec = q;
//      struct node *first_next, *sec_next;
  
//      // While there are avialable positions in p
//      while (first != NULL && sec != NULL)
//      {
//          first_next = first->next;
//          sec_next = sec->next;
  
//          sec->next = first_next; 
//          first->next = sec;
  
//          first = first_next;
//          sec = sec_next;
//     }
// // Update start pointer of second list
//     *q = sec;
// }
