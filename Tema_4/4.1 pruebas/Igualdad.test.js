//BENITO SANTIAGO BALAM ACEVEDO AA.4.1 TESTS

const suma = require('./Igualdad');

test('10 + 10 es igual a 20 usando toBe', () => {
  expect(suma(10, 10)).toBe(20);
});