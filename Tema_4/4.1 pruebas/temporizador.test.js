//BENITO SANTIAGO BALAM ACEVEDO AA.4.1 TESTS


const esperarSegundos = require('./temporizador');

test('prueba asíncrona con promesa', async () => {
  const resultado = await esperarSegundos(1);  
  expect(resultado).toBe("Esperé 1 segundos");
});
