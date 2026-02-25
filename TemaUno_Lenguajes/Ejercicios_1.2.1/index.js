
// Ejercicios 1.2.1: Sintaxis básica de Node.js
// Alumno: [Benito Santiago Balam Acevedo]


// b. los tipos de datos básicos
console.log("=== Tipos de datos básicos ===");

let nombre = "Santiago";                    // string
let edad = 25;                              // number (entero)
let estatura = 1.75;                        // number (decimal)
let esEstudiante = true;                    // boolean
let asignatura = null;                      // null
let carrera;                                // undefined
let simbolo = Symbol("id");                 // symbol
let bigNumero = 12345678901234567890n;      // bigint

console.log("string:", nombre);
console.log("number (int):", edad);
console.log("number (float):", estatura);
console.log("boolean:", esEstudiante);
console.log("null:", asignatura);
console.log("undefined:", carrera);
console.log("symbol:", simbolo);
console.log("bigint:", bigNumero);

// c. Array con al menos 5 elementos de diferentes tipos
const mezclaDatos = [
    "Node.js",              // string
    42,                     // number
    true,                   // boolean
    null,                   // null
    { nombre: "Universidad" } // object
];

console.log("\n=== Array con diferentes tipos ===");
console.log(mezclaDatos);

// d. Función polinómica de segundo grado
function polinomioSegundoGrado(x, a = 2, b = -5, c = 3) {
    const resultado = a * x * x + b * x + c;
    console.log(`\nPolinomio: ${a}x² + ${b}x + ${c}  →  f(${x}) = ${resultado}`);
    return resultado;
}

polinomioSegundoGrado(4);   
polinomioSegundoGrado(0, 1, 6, -2); 

// e. Función flecha
const procesarTexto = (texto) => {
    console.log("\n=== Procesamiento de texto ===");
    console.log("Original:", texto);
    console.log("Mayúsculas:", texto.toUpperCase());
    console.log("Longitud:", texto.length);
    console.log("Sin espacios:", texto.trim());
    console.log("Primera letra:", texto.charAt(0));
};

procesarTexto("  hola mundo javascript  ");


// f. Bucle que imprima números del 1 a 10
console.log("\n=== Números del 10 al 1 ===");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}




// g. Objeto que representa tu institución
const universidad = {
    nombre: "Universidad",
    siglas: "TECNM",
    ciudad: "Carrillo",
    fundada: 1995,
    carreras: ["Ingeniería en Sistemas"],
    activa: true
};

console.log("\n=== Objeto Universidad ===");
console.log(universidad);



// h. Agregar método al objeto
universidad.descripcion = function () {
    return `${this.nombre} (${this.siglas}) - ${this.ciudad}, fundada en ${this.fundada}`;
};

console.log("Descripción:", universidad.descripcion());


//i otro archivo


// j. Simulación asíncrona
function operacionAsincrona(valor, callback) {
    console.log("\n=== Operación asíncrona iniciada...");
    setTimeout(() => {
        const resultado = valor * 2;
        callback(null, resultado);
    }, 1500);
}

operacionAsincrona(10, (error, resultado) => {
    if (error) {
        console.error("Error:", error);
        return;
    }
    console.log("Resultado después de 1.5s:", resultado);
});




// k. Conversión de string
console.log("\n=== Conversión segura string → number ===");
function convertirANumero(texto) {
    try {
        const numero = Number(texto);
        if (isNaN(numero)) {
            throw new Error("No es un número válido");
        }
        console.log(`"${texto}" → ${numero} (tipo: ${typeof numero})`);
    } catch (error) {
        console.error("Error en conversión:", error.message);
    }
}

convertirANumero("42");
convertirANumero("123.45");
convertirANumero("hola");
convertirANumero("");
