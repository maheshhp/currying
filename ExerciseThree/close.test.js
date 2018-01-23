const returnArg = require('./close');

describe('Tests for return type and value', () => {
  test('Check for type of the value returned by first method', () => {
    expect(typeof returnArg(25)).toBe('function');
  });
  test('Check for the value returned by second method for number', () => {
    expect(returnArg(25)(30)).toBe(55);
  });
  test('Check for the value returned by second method for string', () => {
    expect(returnArg('Hello')('World')).toBe('HelloWorld');
  });
});
