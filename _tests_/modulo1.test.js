const modulo1 = require('../src/modulo1/modulo1');

test('5 + 5 tem que dar 10', () => {
    expect(modulo1.func1(5,5)).toBe(10);
});