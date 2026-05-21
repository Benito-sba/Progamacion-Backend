//BENITO SANTIAGO BALAM ACEVEDO AA.4.1 TESTS

const validarDato = require('./validar');

test('verificación de null, undefined y definidos', () => {
  expect(validarDato(null)).toBeNull();
  expect(validarDato(undefined)).toBeUndefined();
  expect(validarDato(0)).toBeDefined();
  expect(validarDato(false)).toBeDefined();
});