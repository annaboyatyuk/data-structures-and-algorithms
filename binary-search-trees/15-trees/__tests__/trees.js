'use strict';

const Tree = require('../lib/trees.js');

describe('tree', () => {
  it('insert should insert a value at the root if no root', () => {
    let tree = new Tree();
    tree.insert(4);
    expect(tree.root.value).toBe(4);
  });

  it('insert should insert smaller value to the left of root', () => {
    let tree = new Tree();
    tree.insert(8);
    tree.insert(4);
    expect(tree.root.left.value).toBe(4);
  });

  it('insert should insert larger numbers to the right of the root', () => {
    let tree = new Tree();
    tree.insert(8);
    tree.insert(4);
    tree.insert(12);
    expect(tree.root.right.value).toBe(12);
  });

  it('remove should remove node leaf with no children', () => {
    let tree = new Tree();
    tree.insert(8);
    tree.insert(4);
    tree.insert(12);
    console.log(tree);
    tree.remove(4);
    console.log(tree);
    expect(tree.find(4)).toBe(null);
  });

  it('remove should remove node with children', () => {
    let tree = new Tree();
    tree.insert(8);
    tree.insert(4);
    tree.insert(12);
    tree.insert(1);
    tree.insert(3);
    console.log(tree);
    tree.remove(4);
    console.log(tree);
    expect(tree.find(4)).toBe(null);
  });

  it('find should return the value of the node you want to find', () => {
    let tree = new Tree();
    tree.insert(8);
    tree.insert(4);
    tree.insert(12);
    let found = tree.find(4);
    expect(found.value).toBe(4);
  });
  


});