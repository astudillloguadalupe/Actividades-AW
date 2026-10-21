
// 1. FUNCIONES DE DECLARACIÓN

// a) Función sin retorno de valor
function saludar() {
    console.log("¡Hola, bienvenida!");
}

saludar();


// b) Función que recibe un nombre
function saludarPersona(nombre) {
    console.log(`¡Hola ${nombre}, bienvenida!`);
}

saludarPersona("Guada");


// c) Función que retorna true o false
function esMayorDeEdad(edad) {
    const mayoriaEdad = 18;

    if (edad >= mayoriaEdad) {
        return true;
    } else {
        return false;
    }
}

const resultadoEdad = esMayorDeEdad(20);
console.log(resultadoEdad);


// 2. FUNCIONES DE FLECHA

// a) Función esMayorDeEdad convertida a función flecha
const esMayorDeEdadFlecha = (edad) => {
    const mayoriaEdad = 18;

    if (edad >= mayoriaEdad) {
        return true;
    } else {
        return false;
    }
};

const resultadoFlecha = esMayorDeEdadFlecha(20);
console.log(resultadoFlecha);


// b), c) y d) Comparar dos números
const compararNumeros = (parametro1, parametro2) => {
    if (parametro1 < parametro2) {
        console.log(`El número ${parametro1} es menor que ${parametro2}`);
    } else if (parametro1 === parametro2) {
        console.log(`El número ${parametro1} es igual que ${parametro2}`);
    } else {
        console.log(`El número ${parametro1} es mayor que ${parametro2}`);
    }
};

// Utilizamos la función dentro de un bucle
for (let i = 3; i <= 7; i++) {
    compararNumeros(i, 5);
}


// 3. FUNCIONES CALLBACK

// a) y b) Función que recibe dos números y un callback
const operacion = (num1, num2, cb) => {
    if (typeof num1 !== "number" || typeof num2 !== "number" ||
        isNaN(num1) || isNaN(num2)) {
        console.log("Debe ingresar solo números.");
    } else {
        cb(num1, num2);
    }
};


// Función para sumar
const suma = (a, b) => {
    const resultado = a + b;
    console.log(`El resultado de la suma es ${resultado}`);
};


// Función para restar
const resta = (a, b) => {
    const resultado = a - b;
    console.log(`El resultado de la resta es ${resultado}`);
};


// Probamos la función operacion
operacion(10, 5, suma);
operacion(10, 5, resta);
