
//Carga 5 números con prompt() y push()

const numeros = []

for(let i = 0; i < 5; i++){

    const numero = Number(prompt('Ingrese un número'))

    numeros.push(numero)
}

console.log(numeros)




const numerosImpares = []

for(let i = 0; i < 5; i++){

    const numero = Number(prompt('Ingrese un número'))

    if(numero % 2 !== 0){

        numerosImpares.push(numero)
    }
}

console.log(numerosImpares)



//Convertir frutas a mayúsculas con forEach()

const frutas = [
    'pera',
    'manzana',
    'banana',
    'durazno'
]

frutas.forEach((fruta, indice)=>{

    frutas[indice] = fruta.toUpperCase()
})

console.log(frutas)



//nuevo arreglo con map()

const frutas2 = [
    'pera',
    'manzana',
    'banana',
    'durazno'
]

const frutasMayusculas = frutas2.map((fruta)=>{

    return fruta.toUpperCase()
})

console.log(frutasMayusculas)



//Crear un nuevo arreglo con las frutas que contienen "na"

const frutas3 = [
    'pera',
    'manzana',
    'banana',
    'durazno'
]

const frutasConNa = frutas3.filter((fruta)=>{

    if(fruta.includes('na')){

        return fruta
    }
})

console.log(frutasConNa)



// producto de indumentaria

const producto = {

    nombre: 'Remera',
    precio: 15000,
    stock: 10,
    talles: [
        's',
        'm',
        'l'
    ]
}

console.log(producto)



//Arreglo de objetos

const productos = [

    {
        nombre: 'Remera',
        precio: 15000,
        stock: 3,
        talles: [
            's',
            'm',
            'l'
        ]
    },

    {
        nombre: 'Pantalón',
        precio: 25000,
        stock: 12,
        talles: [
            's',
            'm',
            'l'
        ]
    },

    {
        nombre: 'Buzo',
        precio: 30000,
        stock: 4,
        talles: [
            's',
            'm',
            'l'
        ]
    },

    {
        nombre: 'Campera',
        precio: 45000,
        stock: 15,
        talles: [
            's',
            'm',
            'l'
        ]
    }

]


// Recorrer con forEach() e imprimir stock menor a 5

productos.forEach((producto)=>{

    if(producto.stock < 5){

        console.log(producto)
    }
})



//arreglo con 10% de descuento usando map()

const productosConDescuento = productos.map((producto)=>{

    return {

        nombre: producto.nombre,
        precio: producto.precio * 0.90,
        stock: producto.stock,
        talles: producto.talles
    }
})

console.log(productosConDescuento)



//Nuevo arreglo con productos cuyo stock sea mayor a 10

const productosConStock = productos.filter((producto)=>{

    if(producto.stock > 10){

        return producto
    }
})

console.log(productosConStock)