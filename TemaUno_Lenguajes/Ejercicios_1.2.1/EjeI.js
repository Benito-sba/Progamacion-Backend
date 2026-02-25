// i. Módulo con funciones matemáticas 
// EjeI.js    

exports.sumar = (a, b) => a + b;
exports.restar = (a, b) => a - b;
exports.multiplicar = (a, b) => a * b;
exports.dividir = (a, b) => b !== 0 ? a / b : "Error: división por cero";


// Luego en index.js:
const mat = require("./EjeI");

console.log("\n=== Funciones matemáticas del módulo ===");
console.log("5 + 3 =", mat.sumar(5, 3));
console.log("10 - 4 =", mat.restar(10, 4));
console.log("6 * 7 =", mat.multiplicar(6, 7));
console.log("20 / 5 =", mat.dividir(20, 5));

