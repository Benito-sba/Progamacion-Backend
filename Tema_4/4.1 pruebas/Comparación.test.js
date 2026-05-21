//BENITO SANTIAGO BALAM ACEVEDO AA.4.1 TESTS

const crearComparación = require('./Comparación');

test('comparación de objetos con toEqual', () => {
  expect(crearComparación(3, 5)).toEqual({ x: 3, y: 5 });
});