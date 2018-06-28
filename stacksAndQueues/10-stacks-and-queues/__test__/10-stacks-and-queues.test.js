'use strict';

const Stack = require('../lib/10-stacks-and-queues').Stack;
const Queue = require('../lib/10-stacks-and-queues').Queue;


describe('stacks', () => {

  it('push ', () => {
    let stack = new Stack();
    stack.push(10);
    expect(stack.top.value).toBe(10);
  });

  it('push 2 nodes', () => {
    let stack =  new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.top.value).toBe(2);
    expect(stack.top.next.value).toBe(1);
  });

  it('pop', () => {
    let stack = new Stack();
    stack.push(1);
    let removed = stack.pop();
    expect(removed).toBe(1);
  });

  it('if the stack is already empty return null', () => {
    let stack = new Stack();
    let removed = stack.pop();
    expect(removed).toBe(null);
  });

  it('pop returns the top from a stack with multiple nodes', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    let removed = stack.pop();
    expect(stack.top.value).toBe(2);
    expect(removed).toBe(3);
  });

  it('serialize return an empty string if no nodes exist', () => {
    let stack = new Stack();
    let actual = stack.serialize();
    expect(actual).toBe('');
  });

  it('serialize should return a string of one node', () => {
    let stack = new Stack();
    stack.push(1);
    let actual = stack.serialize();
    expect(actual).toBe('1');
  });

  it('serialize should return a string of multiple nodes', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    let actual = stack.serialize();
    expect(actual).toBe('3 2 1');
  });

  it('deserialize should take in an empty string and return null', () => {
    // let stack = new Stack();
    let actual = Stack.deserialize('');
    expect(actual.top).toBeNull();
  });

  it('deserialize should take a string and return nodes', () => {
    let actual = Stack.deserialize('1 2 3');
    expect(actual.top.value).toBe('1');
  });

  it('deserialize should take in a string of words and return nodes', () => {
    let actual = Stack.deserialize('Hello there');
    expect(actual.top.value).toBe('Hello');
  });

});





describe('queue', () => {

  it('enqueue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue.first.value).toBe(1);
    expect(queue.last.value).toBe(1);
  });

  it('enqueue, the first value should be the first value in', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.first.value).toBe(1);
    expect(queue.last.value).toBe(3);
  });

  it('dequeue', () => {
    let queue = new Queue();
    expect(queue.first).toBe(null);
    expect(queue.last).toBe(null);
  });

  it('dequeue returns the first one sent', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    let removed = queue.dequeue();
    expect(removed).toBe(1);
    expect(queue.first.value).toBe(2);
  });

  it('serialize return an empty string if no nodes exist', () => {
    let queue = new Queue();
    let actual = queue.serialize();
    expect(actual).toBe('');
  });

  it('serialize should return a string of one node', () => {
    let queue = new Queue();
    queue.enqueue(1);
    let actual = queue.serialize();
    expect(actual).toBe('1');
  });

  it('serialize should return a string of multiple nodes', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    let actual = queue.serialize();
    expect(actual).toBe('1 2 3');
  });

  it('deserialize should take in an empty string and return null', () => {
    let actual = Queue.deserialize('');
    expect(actual.first).toBeNull();
  });

  it('deserialize should take a string and return nodes', () => {
    let actual = Queue.deserialize('1 2 3');
    expect(actual.first.value).toBe('1');
  });

  it('deserialize should take in a string of words and return nodes', () => {
    let actual = Queue.deserialize('Hello there');
    expect(actual.first.value).toBe('Hello');
  });


});