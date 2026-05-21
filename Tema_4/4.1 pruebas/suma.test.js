//BENITO SANTIAGO BALAM ACEVEDO AA.4.1 TESTS

const suma = require('./suma');

test('La suma de 1 + 2 debe ser 3', () => {
    expect(suma(1, 2)).toBe(3);
});