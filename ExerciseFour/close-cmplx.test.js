const returnFn = require('./close-cmplx');

describe('Tests for return type and value', () => {
  test('Check the value returned for 0 arguments', () => {
    expect(returnFn()).toBe(0);
  });
  test('Check the value returned for 1 argument', () => {
    expect(returnFn(25)()).toBe(25);
  });
  test('Check the value returned for 5 arguments', () => {
    expect(returnFn(25)(25)(25)(25)(25)()).toBe(125);
  });
});
