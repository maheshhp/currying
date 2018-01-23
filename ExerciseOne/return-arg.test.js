const returnArg = require('./return-arg');

describe('Tests for return argument', () => {
  test('Check for type of the argument returned', () => {
    expect(typeof returnArg(25)).toBe('number');
  });
  test('Check for the argument returned', () => {
    expect(returnArg(25)).toBe(25);
  });
});
