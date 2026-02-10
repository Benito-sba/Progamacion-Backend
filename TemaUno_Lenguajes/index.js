// Ejercicios 1.2.1: sintaxis basica de node.js
// Alumno. [Benito Santiago Balam Acevedo]

/*
var nombre = "Tiago";

console.log(nombre);


var edad = 20;


console.log(edad);

var edad = 20;

let ciudad = "Mérida";
let temperatura = 32;

//-----------------------

var sales = "Toyota";

function carTypes(name) {
  if (name === "Honda") {
    return name;
  } else {
    return "Lo sentimos, no vendemos " + name + ".";
  }
}

var car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota


//-------------------------------------------------


function f(x, a) {
  return a * x ** 2 + 3 * x + 5;
}

let resultado = f(2, 4);
console.log(resultado);
´
*/



//--------------------------------------

const mostrarLongitud = (cadena) => {
  console.log("Longitud:", cadena.length);
};

// Ejecución
mostrarLongitud("JavaScript");
