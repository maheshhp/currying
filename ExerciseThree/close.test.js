const returnFn = require('./close');

describe('Tests for return type and value', () => {
  test('Check for type of the value returned by first method', () => {
    expect(typeof returnFn(25)).toBe('function');
  });
  test('Check for the value returned by second method for number', () => {
    expect(returnFn(25)(30)).toBe(55);
  });
  test('Check for the value returned by second method for string', () => {
    expect(returnFn('Hello')('World')).toBe('HelloWorld');
  });
});
