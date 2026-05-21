//BENITO SANTIAGO BALAM ACEVEDO AA.4.1 TESTS

const obtenerCalificacion = require('./calificacion');

test('comparaciones numéricas', () => {
  const nota = obtenerCalificacion(85);

  expect(nota).toBeGreaterThan(70);
  expect(nota).toBeLessThan(100);
  expect(nota).toBeGreaterThanOrEqual(85);
});