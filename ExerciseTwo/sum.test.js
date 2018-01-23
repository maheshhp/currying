const returnSum = require('./sum');

describe('Tests for return argument', () => {
  test('Check for number argument', () => {
    expect(returnSum(25, 30)).toBe(55);
  });
  test('Check for string argument', () => {
    expect(returnSum('Hello', 'World')).toBe('HelloWorld');
  });
});
