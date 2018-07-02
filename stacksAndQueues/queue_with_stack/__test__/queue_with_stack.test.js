'use strict';

const stackQueue = require('../lib/queue_with_stack');

describe('queue with stack', () => {

  it('stack has a push method', () => {
    let stack = new stackQueue();
    stack.push(1);
    stack.push(2);
    expect(stack.top.value).toBe(2);
    expect(stack.top.next.value).toBe(1);
  });

  it('stack has a pop method', () => {
    let stack = new stackQueue();
    stack.push(1);
    stack.push(2);
    let removed = stack.pop();
    expect(removed).toBe(2);
    expect(stack.top.value).toBe(1);
  });

  it('stack can enqueue', () => {
    let stack = new stackQueue();
    stack.enqueue(1);
    stack.enqueue(2);
    stack.enqueue(5);
    expect(stack.top.value).toBe(5);
  });

  it('stack can dequeue', () => {
    let stack = new stackQueue();
    stack.enqueue(1);
    stack.enqueue(2);
    stack.enqueue(3);
    let removed = stack.dequeue();
    expect(removed).toBe(1);
    expect(stack.end.value).toBe(2);
  });


});


