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


});