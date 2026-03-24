//AA 2.1 API Reporte practico 
//BENITO SANTIAGO BALAM ACEVEDO

// Cadena JSON (nota: las claves van entre comillas)
const jsonString = '{"nombre":"Taco de Pollo","ingredientes":{"proteina":"Pollo","salsa":"Salsa Verde"}}';

// Deserializar para convertir a objeto JavaScript
const objetoDeserializado = JSON.parse(jsonString);

console.log(objetoDeserializado);

