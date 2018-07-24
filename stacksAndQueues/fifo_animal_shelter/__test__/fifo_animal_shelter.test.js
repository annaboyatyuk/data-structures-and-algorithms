'use strict';

const Queue = require('../lib/fifo_animal_shelter');


describe('fifo animal shelter enqueue(animal) and dequeue(pref)',  () => {
  it('enqueue should add animal to the end of the list', () => {
    let list = new Queue();
    list.enqueue('cat');
    list.enqueue('cat');
    list.enqueue('dog');
    expect(list.first.value).toBe('cat');
    expect(list.last.value).toBe('dog');
  });

  xit('dequeue should return the first in line cat or dog preference', () => {
    let list = new Queue();
    list.enqueue('cat');
    list.enqueue('dog');
    list.enqueue('cat');
    list.enqueue('dog');
    let removed = Queue.dequeue('dog');
    console.log(list);
    console.log(removed);
    expect(removed).toBe('cat');
  });


});
