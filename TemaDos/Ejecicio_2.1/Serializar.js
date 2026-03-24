//AA 2.1 API Reporte practico 
//BENITO SANTIAGO BALAM ACEVEDO

// Objeto JavaScript
const objetoJavaScript = {
    nombre: "Taco de Pollo",
    ingredientes: {
        proteina: "Pollo",
        salsa: "Salsa Verde"
    }
};


// Serializar es convertir a JSON
const jsonString = JSON.stringify(objetoJavaScript);

console.log(jsonString);
