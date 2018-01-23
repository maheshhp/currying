const callAndApply = require('./call-apply');

global.console = {
  warn: jest.fn(),
  log: jest.fn(),
};

describe('Tests for call and apply', () => {
  test('Check the value returned for caller method', () => {
    // expect().toMatch('Mahesh');
    callAndApply.caller(
      { name: 'Kishor', age: 28, tShirtSize: 'L' },
      (name, age, tShirtSize) => {
        this.name = name;
        this.age = age;
        this.tShirtSize = tShirtSize;
        console.log(this.name);
      },
      'Mahesh', 28, 'L',
    );
    expect(global.console.log).toHaveBeenCalledWith('Mahesh');
  });
  test('Check the value returned for apply method', () => {
    // expect().toMatch();
    callAndApply.applier(
      { name: 'Kishor', age: 28, tShirtSize: 'L' },
      () => console.log(this.name),
      ['Mahesh', 28, 'L'],
    );
    expect(global.console.log).toHaveBeenCalledWith('Mahesh');
  });
});
