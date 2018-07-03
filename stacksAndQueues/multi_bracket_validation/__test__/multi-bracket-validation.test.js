'use strict';

const validate = require('../lib/multi-bracket-validation').multiBracketValidation;
const Stack = require('../lib/multi-bracket-validation').Stack;


describe('multi bracket validation', () => {

  it('should check if brackets are balanced', () => {
    // expect(validate('{}')).toBe(true);
    expect(validate('{}[')).toBe(false);
    // expect(validate('{}(){}')).toBe(true);
    // expect(validate('()[[Extra Characters]]')).toBe(true);
    // expect(validate('(){}[[]]')).toBe(true);
    // expect(validate('{}{Code}[Fellows](())')).toBe(false);
    // expect(validate('(](')).toBe(false);
  });
});



describe('stack', () => {
  it('peek should look at the top value of the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    let look = stack.peek();
    expect(look).toBe(3);
  });
});

