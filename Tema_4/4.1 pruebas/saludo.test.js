//BENITO SANTIAGO BALAM ACEVEDO AA.4.1 TESTS

const generarSaludo = require('./saludo');

test('coincidencia de cadenas con toMatch', () => {
  const texto = generarSaludo("María");
  
  expect(texto).toMatch(/Hola/);
  expect(texto).toMatch(/bienvenido/i);
  expect(texto).toMatch(/María/);
});