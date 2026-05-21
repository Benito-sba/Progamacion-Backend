//BENITO SANTIAGO BALAM ACEVEDO AA.4.1 TESTS


const esPar = require('./esPar');

test('negación de matchers con .not', () => {
  expect(esPar(7)).not.toBe(true);
  expect(9).not.toBe(10);
  expect('texto').not.toBe(123);
});
