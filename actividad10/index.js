
// Mayor o menor de edad

const edad = 20

if (edad >= 18) {
    console.log('Es mayor de edad')
}
else {
    console.log('Es menor de edad')
}


// Par o impar

const numero = 7

if (numero % 2 === 0) {
    console.log('El número es par')
}
else {
    console.log('El número es impar')
}


// Nota

const nota = 8

if (nota < 4) {
    console.log('Reprobado')
}
else if (nota >= 4 && nota <= 7) {
    console.log('Aprobado')
}
else {
    console.log('Excelente')
}



// Ejercicio 2


// del 1 al 10

for (let i = 1; i <= 10; i++) {
    console.log(i)
}


// del 10 al 1

for (let i = 10; i >= 1; i--) {
    console.log(i)
}


// 20 iteraciones

for (let i = 0; i < 20; i++) {

    if (i % 2 === 0) {
        console.log('El número es par')
    }
    else {
        console.log('El número es impar')
    }
}


// template literals

for (let i = 0; i < 20; i++) {

    if (i % 2 === 0) {
        console.log(`El número ${i} es par`)
    }
    else {
        console.log(`El número ${i} es impar`)
    }
}