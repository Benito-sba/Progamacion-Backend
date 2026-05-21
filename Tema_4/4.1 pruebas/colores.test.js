//BENITO SANTIAGO BALAM ACEVEDO AA.4.1 TESTS


const listaColores = require('./colores');

test('array contiene elemento específico', () => {
  const colores = listaColores();
  
  expect(colores).toContain('azul');
  expect(colores).toContain('verde');
  expect(colores).not.toContain('negro');
});